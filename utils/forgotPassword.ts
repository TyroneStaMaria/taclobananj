import axios from "axios";
import {
  WP_RESET_PASSWORD_CODE_URL,
  WP_VALIDATE_RESET_PASSWORD_CODE_URL,
  WP_SET_NEW_PASSWORD_URL,
} from "./../lib/constants";

export async function sendCode(email) {
  return await forgotPasswordRequest(WP_RESET_PASSWORD_CODE_URL, email);
}

export async function validateCode(data) {
  return await forgotPasswordRequest(WP_VALIDATE_RESET_PASSWORD_CODE_URL, data);
}

export async function setPassword(data) {
  if (data.password === data.confirm_password) {
    return await {
      ...forgotPasswordRequest(WP_SET_NEW_PASSWORD_URL, {
        email: data.email,
        code: data.code,
        password: data.password,
      }),
      status: 200,
    };
  } else {
    return { message: "Password does not match.", status: 400 };
  }
}

const forgotPasswordRequest = async (url, body) => {
  try {
    const { data } = await axios.post(url, body);
    return data;
  } catch (err) {
    return err.response.data;
  }
};
