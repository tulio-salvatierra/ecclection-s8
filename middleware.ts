import { NextResponse, type NextRequest } from "next/server";

const canonicalHost = (() => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ecclection.com";
  try {
    return new URL(siteUrl).hostname.replace(/^www\./, "");
  } catch {
    return "ecclection.com";
  }
})();

const allowedHosts = new Set([canonicalHost, `www.${canonicalHost}`]);

export function middleware(request: NextRequest) {
  const nextUrl = request.nextUrl.clone();
  const host = request.headers.get("host") || nextUrl.host;
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const isKnownHost = allowedHosts.has(host);

  // Do not force redirects for preview/custom hosts.
  if (!isKnownHost) return NextResponse.next();

  const normalizedHost = host.replace(/^www\./, "");
  const needsHostRedirect = host !== normalizedHost;
  const needsHttpsRedirect =
    (forwardedProto && forwardedProto !== "https") ||
    nextUrl.protocol === "http:";

  if (!needsHostRedirect && !needsHttpsRedirect) {
    return NextResponse.next();
  }

  nextUrl.protocol = "https:";
  nextUrl.host = normalizedHost;
  return NextResponse.redirect(nextUrl, 308);
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
