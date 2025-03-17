import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import authConfig from "./auth.config";
import { AuthPrefix, AuthRoutes, PublicRoute } from "./route";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  // const { nextUrl } = req;
  // const isLogin = !!req.auth; // Check if the user is logged in

  // const isApiAuthRoute = nextUrl.pathname.startsWith(AuthPrefix); // Check if API route
  // const isAuthRoute = AuthRoutes.includes(nextUrl.pathname); // Check if it's an auth-related route
  // const isPublicRoute = PublicRoute.includes(nextUrl.pathname); // Check if it's a public route

  // if (isApiAuthRoute) {
  //   return NextResponse.next(); // Allow API authentication routes
  // }

  // if (isAuthRoute) {
  //   if (isLogin) {
  //     return NextResponse.redirect(new URL("/home", nextUrl)); // Redirect if logged in
  //   }
  //   return NextResponse.next(); // Allow unauthenticated access to auth routes (login/signup)
  // }

  // if (!isLogin && !isPublicRoute) {
  //   return NextResponse.redirect(new URL("/login", nextUrl)); // Redirect to login if not authenticated
  // }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
