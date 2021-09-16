import axios from "axios";
import { WP_TOKEN_URL } from "../lib/constants";

export default async function loginUser(userData) {
  const response = await axios.post(WP_TOKEN_URL, userData);
  if (response.status !== 200) {
    throw new Error(response.status + " " + response.statusText);
  }
  return response.data || {};
}
