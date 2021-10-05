import { NextApiRequest, NextApiResponse } from "next";
import { getAllContent } from "../../../utils/trainingCenter";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { data } = await getAllContent();
    return res.json(data.trainingCenters);
  }
}
