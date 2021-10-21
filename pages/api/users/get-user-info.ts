import { NextApiRequest, NextApiResponse } from "next";
import { getUser } from "../../../utils/userRequests";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const data = await getUser(req);
    return res.status(data.status).json(data);
  }
}
