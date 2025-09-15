import { NextRequest as BaseNextRequest, NextResponse } from "next/server";

interface ExtendedNextRequest extends BaseNextRequest {
  geo?: Geo;
}

type NextRequest = ExtendedNextRequest;

interface Geo {
  country?: string;
}

export function middleware(request: NextRequest): NextResponse {
  const country = request.geo?.country || "US";
  console.log({ country })
  const response = NextResponse.next();
  response.cookies.set("country", country, { path: "/" });
  return response;
}

export const config = {
  matcher: ["/", "/shop/:path*", "/checkout/:path*"],
};
