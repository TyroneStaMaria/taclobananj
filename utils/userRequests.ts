import axios from "axios";
import {
  WP_TOKEN_URL,
  REGISTER_API_URL,
  WP_GET_USER_URL,
} from "../lib/constants";
import { hubspotClient } from "./hubspotApi";
import { getAuthToken } from "../utils/cookies";

export async function loginUser(userData) {
  const response = await axios.post(WP_TOKEN_URL, userData);
  if (response.status !== 200) {
    throw new Error(response.status + " " + response.statusText);
  }
  return response.data || {};
}

export async function registerUser(userData) {
  const wpResponse = await wpRegister(userData);
  const { ...responseContent }: any = await hubspotCreateContact(userData);
  const hubspotResponse = responseContent.response;
  const wpResponseCode = wpResponse.response
    ? wpResponse.response.data.code
    : 200;

  if (wpResponseCode !== 200 || hubspotResponse.statusCode !== 201) {
    return {
      message: "Error occured",
      wp: { ...wpResponse.response.data.data },
      hubspotResponse: {
        status: hubspotResponse.statusCode,
        message: hubspotResponse.body.message,
      },
      status: 400,
    };
  }

  return {
    message: "Success",
    status: 200,
  };
}

export async function getUser(req) {
  try {
    const { email } = await getEmailFromWP(req);
    const contactDetails = await hubspotGetContact(email);
    return { ...contactDetails, status: 200 };
  } catch (err) {
    return { error: err, status: 500 };
  }
}

export async function editUser(userData, req) {
  // TODO: ayusin error response
  try {
    const wpRes = await wpEditUser(userData, req);
    const hubspotRes = await hubspotEditUser(userData);
    return {
      success: true,
    };
  } catch (err) {
    return {
      success: false,
    };
  }
}

// local functions

const getEmailFromWP = async (req) => {
  const authToken = getAuthToken(req);
  try {
    const { data } = await axios.get(WP_GET_USER_URL + "?context=edit", {
      headers: { Authorization: "Bearer " + authToken },
    });
    return { email: data.email };
  } catch (err) {
    return err;
  }
};

const hubspotGetContact = async (email) => {
  const filter = {
    propertyName: "email",
    operator: "EQ",
    value: email,
  };
  const filterGroup = { filters: [filter] };

  const properties = [
    "createdate",
    "firstname",
    "lastname",
    "email",
    "address",
    "phone",
    "gender",
  ];

  const publicObjectSearchRequest: any = {
    filterGroups: [filterGroup],
    properties,
  };

  const result = await hubspotClient.crm.contacts.searchApi.doSearch(
    publicObjectSearchRequest
  );

  return result.body.results[0].properties;
};

const wpRegister = async (userData) => {
  try {
    const response = await axios.post(REGISTER_API_URL, userData);
    return response;
  } catch (err) {
    return err;
  }
};

const hubspotCreateContact = async (userData) => {
  try {
    const response: any = await hubspotClient.crm.contacts.basicApi.create({
      properties: {
        firstname: userData.first_name,
        lastname: userData.last_name,
        email: userData.email,
        phone: userData.phone,
        address: userData.address,
        gender: userData.gender,
      },
    });

    return response;
  } catch (err) {
    return err;
  }
};

const wpEditUser = async (userData, req) => {
  const authToken = getAuthToken(req);
  try {
    const { data } = await axios.post(
      WP_GET_USER_URL + "?context=edit",
      userData,
      {
        headers: { Authorization: "Bearer " + authToken },
      }
    );
    console.log(data);
    return {};
  } catch (err) {
    return err;
  }
};

const hubspotEditUser = async (userData) => {
  const properties = {
    firstname: userData.first_name,
    lastname: userData.last_name,
    email: userData.email,
    phone: userData.phone,
    address: userData.address,
    gender: userData.gender,
  };
  const SimplePublicObjectInput = { properties };
  const contactId = userData.id;
  const idProperty = undefined;
  try {
    const response = await hubspotClient.crm.contacts.basicApi.update(
      contactId,
      SimplePublicObjectInput,
      idProperty
    );
    return response;
  } catch (err) {
    return err;
  }
};
