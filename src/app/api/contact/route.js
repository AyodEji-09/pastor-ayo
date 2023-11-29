import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";
import { contactMail } from "@/lib/email_templates/contactMail";

export async function POST(request) {
  const body = await request.json();
  const { name, email, subject, message } = body;
  if (!name && !email && !subject && !message) {
    return NextResponse.json(
      {
        data: [],
        message: "error",
      },
      { status: 400 }
    );
  }
  try {
    let adminEmail = process.env.ADMIN_EMAIL;
    const res = await sendMail(
      contactMail(name, email, message),
      subject,
      adminEmail
    );

    return NextResponse.json({ data: [], message: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { data: error, message: "error" },
      { status: 400 }
    );
  }
}
