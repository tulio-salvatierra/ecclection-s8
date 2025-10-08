// lib/wp.ts
/**
 * Provider notes:
 * - "wpcom" (WordPress.com): uses public-api.wordpress.com and your wp.com site domain
 *   e.g. peanuttyxx.wordpress.com (mapped custom domains can work but the wp.com subdomain is safest)
 * - "self": for classic/self-hosted WP; uses /wp-json/wp/v2
 */
const WP_PROVIDER = (process.env.NEXT_PUBLIC_WP_PROVIDER || "wpcom").trim(); // "wpcom" | "self"

// IMPORTANT: for wp.com set this to the *.wordpress.com canonical domain, not your mapped custom domain.
const RAW_DOMAIN = process.env.NEXT_PUBLIC_WP_DOMAIN || "peanuttyxx.wordpress.com";
const WP_DOMAIN = RAW_DOMAIN.replace(/https?:\/\//, "").replace(/\/+$/, "");

// Origin (only used for self-hosted)
const RAW_ORIGIN = process.env.NEXT_PUBLIC_WP_ORIGIN || `https://${WP_DOMAIN}`;
const WP_ORIGIN = RAW_ORIGIN.replace(/\/+$/, "");

function buildWpUrl(path: string, params: Record<string, string | number | boolean> = {}) {
  const cleanPath = String(path).replace(/^\//, "");
  let url: string;

  if (WP_PROVIDER === "wpcom") {
    // WordPress.com public API
    url = `https://public-api.wordpress.com/wp/v2/sites/${WP_DOMAIN}/${cleanPath}`;
  } else {
    // Self-hosted: canonical /wp-json/wp/v2/... path
    url = `${WP_ORIGIN.replace(/\/$/, "")}/wp-json/wp/v2/${cleanPath}`;
  }

  const u = new URL(url);
  for (const [k, v] of Object.entries(params)) {
    if (v === undefined || v === null) continue;
    u.searchParams.append(k, String(v));
  }
  return u.toString();
}

async function fetchJSON<T>(url: string, revalidate = 300): Promise<T> {
  const res = await fetch(url, { headers: { Accept: "application/json" }, next: { revalidate } });
  const ctype = res.headers.get("content-type") || "";

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`WP: HTTP ${res.status} for ${url}\n${text.slice(0, 300)}`);
  }
  if (!ctype.includes("application/json")) {
    const bodyPreview = await res.text();
    throw new Error(
      `WP: expected JSON (${res.status}). URL: ${url}\n` +
      `Content-Type: ${ctype}\n` +
      `Body preview: ${bodyPreview.slice(0, 300)}`
    );
  }

  const json = await res.json() as T;
  // Debug line (visible in server logs)
  console.log("[wp.fetchJSON]", { url, provider: WP_PROVIDER, domain: WP_DOMAIN, ok: res.ok });
  return json;
}

export async function getPageBySlug(slug: string) {
  if (!slug) return null;
  const url = buildWpUrl("pages", { slug, _embed: 1 });
  console.log("[wp.getPageBySlug] url", url);
  const pages = await fetchJSON<any[]>(url, 300);
  return pages?.[0] ?? null;
}

export async function getPosts(query: Record<string, string | number | boolean> = {}) {
  const url = buildWpUrl("posts", query);
  return fetchJSON<any[]>(url, 300);
  console.log("[wp.getPosts] url", url);
}

export function wpDebugUrl(path: string, params: Record<string, any> = {}) {
  return buildWpUrl(path, params);
}

export async function wpHealth() {
  // Try a tiny endpoint that always exists
  const url = buildWpUrl("types", {});
  try {
    const data = await fetchJSON<any>(url, 60);
    return { ok: true, url, provider: WP_PROVIDER, domain: WP_DOMAIN, keys: Object.keys(data) };
  } catch (e: any) {
    return { ok: false, url, provider: WP_PROVIDER, domain: WP_DOMAIN, error: String(e?.message || e) };
  }
}