import { NextResponse } from "next/server";
import { db } from "@/db/db";
import { countries } from "@/db/schema";

export async function GET(request) {
  try {
    const allUsers = await db.select().from(countries);
    console.log(allUsers)
    return NextResponse.json({ data: allUsers });
  } catch (error) {
    return NextResponse.json({ data: error });
  }
}
