import { NextApiRequest, NextApiResponse } from "next";
import { setPassword } from "../../../utils/forgotPassword";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await setPassword(req?.body);
  return res.json(data);
}
