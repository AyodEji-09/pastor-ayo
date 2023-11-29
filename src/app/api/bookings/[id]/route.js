import { NextResponse } from "next/server";
import { db } from "@/database";
import { BOOKINGS } from "@/database/schema";
import { asc, desc, eq } from "drizzle-orm";
import { bookingConfirmationMail } from "@/lib/emailTemplates/booking_confirmation_mail";
import { sendMail } from "@/lib/mail";

export async function DELETE(request, { params }) {
  const bookingId = params.id;
  if (!bookingId) {
    return NextResponse.json(
      {
        data: [],
        message: "Not found",
      },
      { status: 400 }
    );
  }
  try {
    await db.delete(BOOKINGS).where(eq(BOOKINGS.id, bookingId));
    return NextResponse.json(
      {
        data: [],
        message: "deleted",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        data: [],
        message: error,
      },
      { status: 500 }
    );
  }
}
export async function PUT(request, { params }) {
  const body = await request.json();
  const { personal_email } = body;
  const bookingId = params.id;
  if (!bookingId && !personal_email) {
    return NextResponse.json(
      {
        data: [],
        message: "Not found",
      },
      { status: 400 }
    );
  }
  try {
    await db
      .update(BOOKINGS)
      .set({ booking_confirmed: true })
      .where(eq(BOOKINGS.id, bookingId));

    const response = sendMail(
      bookingConfirmationMail(),
      "Booking Confirmation",
      personal_email
    );

    return NextResponse.json(
      {
        data: [],
        message: "updated",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        data: [],
        message: error,
      },
      { status: 500 }
    );
  }

  // try {
  //    await db.delete(BOOKINGS).where(eq(BOOKINGS.id, bookingId));

  //   return NextResponse.json(
  //     {
  //       data: bookings,
  //       message: "Successful",
  //     },
  //     { status: 200 }
  //   );
  // } catch (error) {
  //   return NextResponse.json(
  //     {
  //       data: [],
  //       message: error,
  //     },
  //     { status: 500 }
  //   );
  // }
}
