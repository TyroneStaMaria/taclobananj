import { NextApiRequest, NextApiResponse } from "next";
import { registerUser } from "../../../utils/userRequests";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = await registerUser(req.body);
    return res.status(data.status).json(data);
    // try {
    //   await registerUser(req.body);

    //   return res.status(200).json({ success: true });
    // } catch (err) {
    //   console.log("error endpoint");
    //   return res.status(400).json(err);
    // }
  }
}
