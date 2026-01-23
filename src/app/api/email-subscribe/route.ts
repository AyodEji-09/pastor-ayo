import { NextResponse } from "next/server";
import { addEmailToSendPulse } from "@/lib/actions/sendpulse";

export async function POST(req: Request) {
  const { email } = await req.json();

  // Validate email
  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { message: "Invalid email address" },
      { status: 400 }
    );
  }

  try {
    await addEmailToSendPulse(email);
    return Response.json({ success: true });
  } catch (err) {
    return new Response("Failed to subscribe", { status: 500 });

  }
}