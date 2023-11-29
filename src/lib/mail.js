// "use strict";
// import nodemailer from "nodemailer";
import { Resend } from "resend";

export async function sendMail(message, subject, to) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: "Ayodeji Anifowose <onboarding@resend.dev>",
    tags: [
      {
        name: "Ayodeji",
        value: "Ayodeji_Anifowose",
      },
    ],
    to,
    subject,
    text: message,
    html: message,
  });
}
// export async function sendMail(message, subject, to) {
//   let transporter = nodemailer.createTransport({
//     host: process.env.MAIL_HOST,
//     port: process.env.MAIL_PORT,
//     secure: true,
//     auth: {
//       user: process.env.MAIL_USERNAME,
//       pass: process.env.MAIL_PASSWORD,
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: {
//       name: "Ayodeji Anifowose",
//       address: process.env.MAIL_FROM, // sender address
//     },
//     to, // []
//     subject, // Subject line
//     html: message, // html body
//     text: message,
//   });
//   return info;
// }
