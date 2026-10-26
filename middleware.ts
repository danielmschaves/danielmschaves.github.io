import { NextResponse, type NextRequest } from "next/server";

/* English keeps the unprefixed URLs; Portuguese lives under /pt. Both render from app/[lang],
   so every other page path is rewritten to /en. /en/... itself redirects to the unprefixed URL,
   so each page has one English address. No redirect by browser language: the toggle is the switch. */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === "/pt" || pathname.startsWith("/pt/")) return NextResponse.next();

  const url = req.nextUrl.clone();
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }
  url.pathname = `/en${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|api|images|fonts|icon|apple-icon|manifest|robots|sitemap|favicon|.*\\..*).*)"],
};
