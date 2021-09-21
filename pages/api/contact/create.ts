import { NextApiRequest, NextApiResponse } from "next";
import { hubspotClient } from "../../../utils/hubspotApi";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const response: any = await hubspotClient.crm.contacts.basicApi.create({
        properties: { ...req.body },
      });

      return res.status(200).json(response);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}
