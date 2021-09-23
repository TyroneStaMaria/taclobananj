import { NextApiRequest, NextApiResponse } from "next";
import { sendCode } from "../../../utils/forgotPassword";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await sendCode(req?.body);
  return res.json(data);
}
