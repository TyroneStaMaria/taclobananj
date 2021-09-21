import { NextApiRequest, NextApiResponse } from "next";
import { registerUser } from "../../../utils/userRequests";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = await registerUser(req.body);
    return res.status(data.status).json(data);
  }
}
