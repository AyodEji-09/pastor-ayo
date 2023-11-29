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