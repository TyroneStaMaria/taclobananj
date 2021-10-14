import { NextApiRequest, NextApiResponse } from "next";
import { uploadMedia } from "../../../utils/userRequests";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log(req.body);
    // const data = await uploadMedia(req.body, req);
    // return res.status(data.status).json(data);
    return res.status(200).json({});
  }
}
