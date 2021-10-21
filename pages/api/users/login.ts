import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import { validateUser } from "../../../utils/userRequests";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = await validateUser({
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

    return res.status(data?.status).json({
      message: data?.message,
      success: Boolean(data?.token),
    });
  }
}
