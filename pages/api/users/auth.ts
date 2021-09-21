import { NextApiRequest, NextApiResponse } from "next";
import { getAuthToken } from "../../../utils/cookies";
import axios from "axios";
import { WP_TOKEN_VALIDATION } from "../../../lib/constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const authToken = getAuthToken(req);
  try {
    const { data } = await axios.post(
      WP_TOKEN_VALIDATION,
      {},
      { headers: { Authorization: "Bearer " + authToken } }
    );

    return res.json({ isLoggedIn: true });
  } catch (err) {
    return res.json({ isLoggedIn: false });
  }
}
