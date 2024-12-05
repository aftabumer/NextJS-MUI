import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // const url = req.nextUrl.clone();

  // // Allow access to the login page
  // if (url.pathname === "/login") {
  //   return NextResponse.next();
  // }

  // // Redirect the homepage to /login
  // if (url.pathname === "/") {
  //   url.pathname = "/login";
  //   return NextResponse.redirect(url);
  // }

  // Continue to the requested page if it is not the homepage
  return NextResponse.next();
}
