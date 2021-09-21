import axios from "axios";
import { WP_TOKEN_URL, REGISTER_API_URL } from "../lib/constants";
import { hubspotClient } from "./hubspotApi";

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

// local functions

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
