// lib/wp.ts
const WP_PROVIDER = process.env.NEXT_PUBLIC_WP_PROVIDER || "wpcom"; // "wpcom" | "self"
const WP_DOMAIN = (process.env.NEXT_PUBLIC_WP_DOMAIN || "ecclection.com").replace(/\/+$/, "");
const WP_ORIGIN = (process.env.NEXT_PUBLIC_WP_ORIGIN || `https://${WP_DOMAIN}`).replace(/\/+$/, "");

function buildWpUrl(path: string, params: Record<string, string | number | boolean> = {}) {
  const cleanPath = String(path).replace(/^\//, "");
  if (WP_PROVIDER === "wpcom") {
    // WordPress.com public API
    const base = `https://public-api.wordpress.com/wp/v2/sites/${WP_DOMAIN}/${cleanPath}`;
    const u = new URL(base);
    for (const [k, v] of Object.entries(params)) {
      if (v === undefined || v === null) continue;
      u.searchParams.append(k, String(v));
    }
    return u.toString();
  } else {
    // Self-hosted fallback (not used on wp.com)
    const u = new URL(WP_ORIGIN);
    u.search = "";
    u.searchParams.set("rest_route", `/wp/v2/${cleanPath}`);
    for (const [k, v] of Object.entries(params)) {
      if (v === undefined || v === null) continue;
      u.searchParams.append(k, String(v));
    }
    return u.toString();
  }
}

async function fetchJSON<T>(url: string, revalidate = 300): Promise<T> {
  const res = await fetch(url, { headers: { Accept: "application/json" }, next: { revalidate } });
  const ctype = res.headers.get("content-type") || "";
  if (!ctype.includes("application/json")) {
    const bodyPreview = await res.text();
    throw new Error(
      `WP: expected JSON (${res.status}). URL: ${url}\n` +
      `Content-Type: ${ctype}\n` +
      `Body preview: ${bodyPreview.slice(0, 300)}`
    );
  }
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`WP error ${res.status} for ${url}\n${text.slice(0, 300)}`);
  }
  return res.json() as Promise<T>;
}

export async function getPageBySlug(slug: string) {
  const url = buildWpUrl("pages", { slug, _embed: 1 });
  const pages = await fetchJSON<any[]>(url, 300);
  return pages?.[0] ?? null;
}

export async function getPosts(query: Record<string, string | number | boolean> = {}) {
  const url = buildWpUrl("posts", query);
  return fetchJSON<any[]>(url, 300);
}

export function wpDebugUrl(path: string, params: Record<string, any> = {}) {
  return buildWpUrl(path, params);
}