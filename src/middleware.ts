import { NextResponse } from "next/server";

interface Geo {
  country?: string;
}

interface MiddlewareRequest {
  geo?: Geo;
}

export function middleware(request: MiddlewareRequest): NextResponse {
  const country = request.geo?.country || "US";
  const response = NextResponse.next();
  response.cookies.set("country", country, { path: "/" });
  return response;
}

export const config = {
  matcher: ["/", "/shop/:path*", "/checkout/:path*"],
};
