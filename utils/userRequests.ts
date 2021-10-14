import axios from "axios";
import {
  WP_TOKEN_URL,
  REGISTER_API_URL,
  WP_GET_USER_URL,
} from "../lib/constants";
import { hubspotClient } from "./hubspotApi";
import { getAuthToken } from "../utils/cookies";
import { FormData, Blob } from "formdata-node";

export async function uploadMedia(imageData, req) {
  const authToken = getAuthToken(req);
  // let formData = new FormData();
  // const blob = new Blob(imageData.file);

  // formData.set("file", blob, imageData.fileName);

  try {
    const { data } = await axios.post(
      "https://wp.taclobananjph.com/wp-json/wp/v2/media",
      imageData,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": `multipart/form-data`,
          // "Content-Disposition": `attachment;filename='image.png'`,
        },
      }
    );

    return {
      status: 201,
      source_url: data.source_url,
      message: "Successfully uploaded",
    };
  } catch (err) {
    console.log(err);
    return {
      status: 400,
      message: "Failed to upload media item",
    };
  }
}

export async function validateUser(userData) {
  try {
    const response = await axios.post(WP_TOKEN_URL, userData);
    // if (response.status !== 200) {
    //   throw new Error(response.status + " " + response.statusText);
    // }
    return {
      status: 200,
      message: "Logged in successfully",
      success: true,
      ...response.data,
    };
  } catch (err) {
    return {
      status: 400,
      message: "Invalid username or password",
      success: false,
    };
  }
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
    const { email, profileImage } = await getEmailAndImageFromWP(req);
    const contactDetails = await hubspotGetContact(email);
    return { ...contactDetails, status: 200, profileImage: profileImage };
    // return { ...contactDetails, status: 200 };
  } catch (err) {
    return { error: err, status: 400 };
  }
}

export async function editUser(userData, req) {
  try {
    const wpRes = await wpEditUser(userData, req);
    const hubspotRes = await hubspotEditUser(userData);
    return {
      ...wpRes,
      ...hubspotRes,
      status: 200,
    };
  } catch (err) {
    return {
      ...err,
      status: 400,
    };
  }
}

// local functions

const getEmailAndImageFromWP = async (req) => {
  const authToken = getAuthToken(req);
  try {
    const { data } = await axios.get(WP_GET_USER_URL + "?context=edit", {
      headers: { Authorization: "Bearer " + authToken },
    });
    return { email: data.email, profileImage: data.profile_image };
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
