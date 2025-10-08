// lib/wp.ts (or wp-peanutty.ts)
const WP = process.env.NEXT_PUBLIC_WP_URL ?? "https://public-api.wordpress.com/wp/v2/sites/peanuttyxx.wordpress.com";

type RawWPPage = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt?: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    ["wp:featuredmedia"]?: Array<{ source_url?: string; alt_text?: string }>;
  };
};

export type PageDTO = {
  id: number;
  slug: string;
  title: string;
  excerpt?: string;
  html: string;
  featuredImage?: { url: string; alt?: string };
};

async function fetchJSON<T>(endpoint: string, revalidate = 300): Promise<T> {
  const url = `${WP}/${endpoint}`;
  const res = await fetch(url, { next: { revalidate } });
  const ctype = res.headers.get("content-type") || "";

  if (!res.ok || !ctype.includes("application/json")) {
    const body = await res.text();
    throw new Error(
      `WP: expected JSON (${res.status}). URL: ${url}\n` +
      `Content-Type: ${ctype}\n` +
      `Body preview: ${body.slice(0, 300)}`
    );
  }
  return res.json() as Promise<T>;
}

function mapPage(p: RawWPPage): PageDTO {
  const fm = p._embedded?.["wp:featuredmedia"]?.[0];
  return {
    id: p.id,
    slug: p.slug,
    title: p.title?.rendered ?? "",
    excerpt: p.excerpt?.rendered,
    html: p.content?.rendered ?? "",
    featuredImage: fm?.source_url ? { url: fm.source_url, alt: fm.alt_text } : undefined,
  };
}

export async function getPageBySlug(slug: string): Promise<PageDTO | null> {
  // use _fields to make the payload smaller & _embed for media
  const endpoint =
    `pages?slug=${encodeURIComponent(slug)}&_embed=1` +
    `&_fields=id,slug,title,excerpt,content,_embedded`;
  const pages = await fetchJSON<RawWPPage[]>(endpoint, 300);
  return pages.length ? mapPage(pages[0]) : null;
}