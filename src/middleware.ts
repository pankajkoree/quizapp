import { NextRequest, NextResponse } from "next/server";

// Define the middleware function
export const middleware = (request: NextRequest) => {
  // Access the token from cookies
  const token = request.cookies.get("token");

  // Parse the URL of the request to get the pathname
  const url = new URL(request.url);
  const path = url.pathname;

  // Protect the "/start" route
  if (path === "/start") {
    // If there's no valid token, redirect to login
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Allow other routes or requests to proceed
  return NextResponse.next();
};

// Specify the matcher to only apply this middleware to the "/start" page
export const config = {
  matcher: ["/start"], // Apply this middleware only to the "/start" path
};
