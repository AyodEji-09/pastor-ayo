// "use strict";
// import nodemailer from "nodemailer";

// Require:



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
