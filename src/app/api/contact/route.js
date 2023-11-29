import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";
import { contactMail } from "@/lib/email_templates/contact_mail";
import { test } from "@/lib/email_templates/test";

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

    const response = sendMail(test(name, email, message), subject, adminEmail);
    return NextResponse.json({ data: [], message: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { data: error, message: "error" },
      { status: 400 }
    );
  }
}