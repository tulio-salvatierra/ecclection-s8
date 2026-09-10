import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ADMIN_SESSION_COOKIE } from "@/lib/admin-auth";

// IMPORTANT: this only checks that a session cookie is PRESENT, not that it's
// valid — Middleware runs on the Edge Runtime, which can't use Node's `crypto`
// module (used for the real HMAC signature check). This is a fast pre-filter
// for UX (skip rendering the admin shell before redirecting) — the actual
// security check happens in app/admin/edit/[page]/page.tsx and
// app/api/admin/content/route.ts via verifySessionToken(), which run on the
// Node runtime and are the real gate. Do not treat this file as the security
// boundary.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLoginRoute = pathname.startsWith("/admin/login");
  if (isLoginRoute) return NextResponse.next();

  const hasCookie = Boolean(request.cookies.get(ADMIN_SESSION_COOKIE)?.value);

  if (!hasCookie) {
    if (pathname.startsWith("/api/admin")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};