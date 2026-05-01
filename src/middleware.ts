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
  const country = request.geo?.country ?? headerCountry(request) ?? "US";

  console.log({ country, geo: request.geo });
  const response = NextResponse.next();
  response.cookies.set("country", country, { path: "/" });
  return response;
}

export const config = {
  matcher: ["/", "/shop/:path*", "/checkout/:path*"],
};
