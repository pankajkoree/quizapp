import { NextRequest, NextResponse } from "next/server";

// Define the middleware function
export const middleware = (request: NextRequest) => {
  // Access cookies from the request
  const token = request.cookies.get("token");

  // Parse the URL of the request to get the pathname
  const url = new URL(request.url);
  const path = url.pathname;

  // If the path is "/start", check if the user is authenticated (has a token)
  if (path === "/start") {
    // If there's a valid token, allow the request to continue
    if (token) {
      return NextResponse.next();
    } else {
      // Redirect to login if no valid token
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // For other paths, proceed with the request
  return NextResponse.next();
};

// Specify the matcher for which routes the middleware should run on
export const config = {
  matcher: ["/", "/start"], // Apply this middleware to the root and "/start" paths
};
