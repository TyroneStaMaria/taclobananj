import { NextApiRequest, NextApiResponse } from "next";
import { editUser } from "../../../utils/userRequests";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = await editUser(req.body, req);
    return res.json(data);
  }
}
