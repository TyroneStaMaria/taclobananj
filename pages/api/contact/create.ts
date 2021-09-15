import { NextApiRequest, NextApiResponse } from "next";
import { hubspotClient } from "../../../lib/hubspotApi";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("in endpoint");
  if (req.method === "POST") {
    // return res.status(200).json(req.body);
    try {
      const response: any = await hubspotClient.crm.contacts.basicApi.create({
        properties: { ...req.body },
      });

      return res.status(200).json(response);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  } else {
    // return "hello";
  }
}
