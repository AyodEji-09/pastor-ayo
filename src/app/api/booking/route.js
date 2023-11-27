import { NextResponse } from "next/server";
import { db } from "@/database";
import { BOOKINGS } from "@/database/schema";
import { desc, eq } from "drizzle-orm";
import { sendMail } from "@/lib/mail";
import { BASE_URL } from "@/utils/data";
import { contactMail } from "@/lib/email_templates/contact_mail";

export async function GET(request) {
  try {
    const bookings = await db
      .select()
      .from(BOOKINGS)
      .where(eq(BOOKINGS.booking_type, "ministry"))
      .orderBy(desc(BOOKINGS.event_date));
    return NextResponse.json(
      {
        data: bookings,
        message: "Successful",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        data: [],
        message: "Error",
      },
      { status: 500 }
    );
  }
}
export async function POST(request) {
  const body = await request.json();
  const {
    booking_type,
    first_name,
    last_name,
    personal_email,
    personal_phone,
    org_name,
    org_email,
    org_phone,
    org_website,
    org_facebook,
    org_youtube,
    event_name,
    event_nature,
    event_address,
    event_country,
    event_state,
    event_city,
    event_time,
    event_date,
    prog_type,
    ministers_list,
    ticket,
    venue_capacity,
    recording_available,
    additional_info,
    counseling_groups,
    booking_confirmed,
    event_slug,
  } = body;
  try {
    const alreadyBookedDate = await db.query.BOOKINGS.findFirst({
      where: eq(BOOKINGS.event_date, event_date),
    });
    if (alreadyBookedDate) {
      return NextResponse.json(
        {
          data: [],
          message:
            "The date you selected has already been booked, Please select another date or contact me.",
        },
        { status: 406 }
      );
    }
    await db.insert(BOOKINGS).values({
      booking_type,
      first_name,
      last_name,
      personal_email,
      personal_phone,
      org_name,
      org_email,
      org_phone,
      org_website,
      org_facebook,
      org_youtube,
      event_name,
      event_nature,
      event_address,
      event_country,
      event_state,
      event_city,
      event_time,
      event_date,
      prog_type,
      ministers_list,
      ticket,
      venue_capacity,
      recording_available,
      additional_info,
      counseling_groups,
      booking_confirmed,
      event_slug,
    });

    let bookingURL = `${BASE_URL}/admin/bookings#${event_slug}`;
    let adminEmail = process.env.ADMIN_EMAIL;

    const response = sendMail(
      contactMail(`${first_name} ${last_name}`, personal_email, bookingURL),
      "New Booking Alert!!!",
      adminEmail
    );
    return NextResponse.json({ data: [], message: "success" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { data: error, message: "error" },
      { status: 400 }
    );
  }
}
