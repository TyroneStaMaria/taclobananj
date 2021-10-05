import { NextApiRequest, NextApiResponse } from "next";
import { getSingleContent } from "../../../utils/trainingCenter";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { slug } = req.query;

    const { data } = await getSingleContent(slug);
    return res.json(data.trainingCenterBy);
    // return res.json({});
  }
}
