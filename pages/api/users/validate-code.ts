import { NextApiRequest, NextApiResponse } from "next";
import { validateCode } from "../../../utils/forgotPassword";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await validateCode(req?.body);
  return res.json(data);
}
