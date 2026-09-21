import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Root redirect to /en
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url));
  }

  // Detect locale from pathname
  const isAr = pathname.startsWith("/ar");
  const locale = isAr ? "ar" : "en";
  const dir = isAr ? "rtl" : "ltr";

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);
  requestHeaders.set("x-direction", dir);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static files and assets
     */
    "/((?!api|_next/static|_next/image|images|certificates|docs|favicon.ico|icon.svg|robots.txt|sitemap.xml).*)",
  ],
};
