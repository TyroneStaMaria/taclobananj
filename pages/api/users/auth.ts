import { NextApiRequest, NextApiResponse } from "next";
import { getAuthToken } from "../../../utils/cookies";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const authToken = getAuthToken(req);
  try {
    const { data } = await axios.post(
      "https://wp.taclobananjph.com/wp-json/jwt-auth/v1/token/validate",
      {},
      { headers: { Authorization: "Bearer " + authToken } }
    );

    return res.json({ isLoggedIn: true });
  } catch (err) {
    return res.json({ isLoggedIn: false });
  }
}
