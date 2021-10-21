import { NextApiRequest, NextApiResponse } from "next";
import { editUser, validateUser } from "../../../utils/userRequests";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const isValidated = await validateUser({
      username: req.body.email,
      password: req.body.oldPassword,
    });
    if (!isValidated.success) {
      return res.status(400).json({ message: "Old password is not valid" });
    }
    if (req.body.newPassword === req.body.newConfirmPassword) {
      const data = await editUser({ password: req.body.newPassword }, req);
      return res
        .status(data.status)
        .json({ ...data, message: "Password successfully changed" });
    }
    return res.status(400).json({ message: "Password does not match" });
  }
}
