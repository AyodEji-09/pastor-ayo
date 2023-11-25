import { NextResponse } from "next/server";
import { db } from "@/database";
import { BOOKINGS } from "@/database/schema";
import { eq } from "drizzle-orm";
import { sendMail } from "@/lib/mail";
import { BASE_URL } from "@/utils/data";

export async function GET(request) {
  try {
    const bookings = await db
      .select()
      .from(BOOKINGS)
      .where(eq(BOOKINGS.booking_type, "ministry"));
    return NextResponse.json({ data: searchParams });
  } catch (error) {
    return NextResponse.json({ data: error });
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
  } = body;
  try {
    // await db.insert(BOOKINGS).values({
    //   booking_type,
    //   first_name,
    //   last_name,
    //   personal_email,
    //   personal_phone,
    //   org_name,
    //   org_email,
    //   org_phone,
    //   org_website,
    //   org_facebook,
    //   org_youtube,
    //   event_name,
    //   event_nature,
    //   event_address,
    //   event_country,
    //   event_state,
    //   event_city,
    //   event_time,
    //   event_date,
    //   prog_type,
    //   ministers_list,
    //   ticket,
    //   venue_capacity,
    //   recording_available,
    //   additional_info,
    //   counseling_groups,
    // });
    const message = `<h3> Good news, </h3>
                      <p> ${first_name} ${last_name} has booked an appointment with you,</p>
                      <p><a href="mailto:${personal_email}">Click Here</a> to reply directly. </p>
                      `;
    // <p><a href="${BASE_URL}/admin/bookings">Click Here</a> to see booking details.  </p>
    //  <p><b>Product Id:</b> ${req.body.id} </p>
    //  <p><b>Message:</b> ${req.body.request}</p>
    const response = sendMail(
      message,
      "New Booking Alert!!!",
      process.env.ADMIN_EMAIL
    );
    return NextResponse.json({ data: "success" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ data: error });
  }
}
