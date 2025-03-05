import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import authConfig from "./auth.config";
import { AuthPrefix, AuthRoutes, PublicRoute } from "./route";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLogin = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(AuthPrefix);
  const isAuthRoute = AuthRoutes.includes(nextUrl.pathname);
  const isPublicRoute = PublicRoute.includes(nextUrl.pathname);

  // if (isApiAuthRoute) {
  //   return NextResponse.next();
  // }

  // if (isAuthRoute) {
  //   if (isLogin) {
  //     return Response.redirect(new URL("/home", nextUrl));
  //   }
  //   return NextResponse.next();
  // }

  // if (!isLogin && !isPublicRoute) {
  //   return Response.redirect(new URL("/login", nextUrl));
  // }

  console.log("this is login", isLogin);

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
