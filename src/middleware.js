import { NextResponse } from "next/server";

export function middleware(request) {
  const country = request.geo?.country || "US";
  const response = NextResponse.next();
  response.cookies.set("country", country, { path: "/" });
  return response;
}

export const config = {
  matcher: ["/", "/shop/:path*", "/checkout/:path*"],
};
