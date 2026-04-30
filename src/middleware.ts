import { NextRequest as BaseNextRequest, NextResponse } from "next/server";

interface ExtendedNextRequest extends BaseNextRequest {
  geo?: Geo;
}

type NextRequest = ExtendedNextRequest;

interface Geo {
  country?: string;
}

function headerCountry(request: NextRequest) {
  // common geo headers from various platforms
  return (
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    request.headers.get("x-nf-country") ||
    request.headers.get("x-appengine-country") ||
    request.headers.get("x-country") ||
    null
  );
}

export function middleware(request: NextRequest): NextResponse {
  // Check if country cookie already exists
  const existingCountry = request.cookies.get("country")?.value;
  
  // Only detect country if no existing cookie
  let country: string;
  if (existingCountry) {
    country = existingCountry;
  } else {
    country = request.geo?.country ?? headerCountry(request) ?? "US";
  }

  console.log({ country, geo: request.geo, existingCountry });
  const response = NextResponse.next();
  
  // Set cookie with 1 year expiration (30 * 365 days in seconds)
  response.cookies.set("country", country, {
    path: "/",
    maxAge: 30 * 365 * 24 * 60 * 60,
    httpOnly: false, // Must be false so client-side can read it
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  
  return response;
}

export const config = {
  matcher: [
    // Match all pages to ensure country detection happens everywhere
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
