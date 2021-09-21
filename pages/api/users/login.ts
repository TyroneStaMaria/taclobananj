import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import { loginUser } from "../../../utils/userRequests";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const data = await loginUser({
        username: req.body.email,
        password: req.body.password,
      });

      res.setHeader(
        "Set-Cookie",
        cookie.serialize("auth", String(data?.token ?? ""), {
          httpOnly: true,
          secure: "development" !== process.env.NODE_ENV,
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
        })
      );

      return res.status(200).json({ success: Boolean(data?.token) });
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}
