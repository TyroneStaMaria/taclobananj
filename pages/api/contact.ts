require("dotenv").config();
import type { NextApiRequest, NextApiResponse } from "next";
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // const nodemailer = require("nodemailer");

  // const transporter = nodemailer.createTransport({
  //   port: 465,
  //   host: "smtp.gmail.com",
  //   auth: {
  //     user: process.env.USER_EMAIL,
  //     password: process.env.PASSWORD,
  //   },
  //   secure: true,
  // });

  // const mailData = {
  //   from: process.env.USER_EMAIL,
  //   to: process.env.USER_EMAIL,
  //   subject: "Message",
  //   text: req.body.message + ` | sent from: ${req.body.email} ${req.body.name}`,
  //   html: `<div>${req.body.message}</div><p>Sent from:
  //   ${req.body.email}</p>`,
  // };
  // transporter.sendMail(mailData, (err, info) => {
  //   if (err) console.log(err);
  //   else console.log(info);
  // });

  res.status(200).json(req.body);
};

export default handler;
