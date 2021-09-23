import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("auth", "", {
      maxAge: -1,
      path: "/",
    })
  );
  // res.writeHead(302, { Location: "/" });
  res.end();
}
