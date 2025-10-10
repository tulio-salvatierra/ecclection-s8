// lib/wp.ts
// WordPress.com REST helpers (works with WP.com "Premium" without extra plugins)

const WP =
  process.env.NEXT_PUBLIC_WP_URL ??
  "https://public-api.wordpress.com/wp/v2/sites/peanuttyxx.wordpress.com";

/** ===== Types from WP REST ===== */
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

/** DTOs your app consumes */
export type PageDTO = {
  id: number;
  slug: string;
  title: string;
  excerpt?: string;
  html: string;
  featuredImage?: { url: string; alt?: string };
};

export type ContentBlock =
  | {
      id: string;
      type: "heading";
      content: string; // text content
      metadata: { level: number };
    }
  | {
      id: string;
      type: "text";
      content: string; // HTML or plain text (sanitized upstream)
    }
  | {
      id: string;
      type: "image";
      content: string; // `<img .../>` HTML (optional)
      metadata: { src?: string; alt?: string; caption?: string };
    };

/** ===== Core fetcher ===== */
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
  return (await res.json()) as T;
}

/** ===== Mappers ===== */
function mapPage(p: RawWPPage): PageDTO {
  const fm = p._embedded?.["wp:featuredmedia"]?.[0];
  return {
    id: p.id,
    slug: p.slug,
    title: p.title?.rendered ?? "",
    excerpt: p.excerpt?.rendered,
    html: p.content?.rendered ?? "",
    featuredImage: fm?.source_url
      ? { url: fm.source_url, alt: fm.alt_text }
      : undefined,
  };
}

/** ===== Public API ===== */

export async function getPageBySlug(
  slug: string,
  revalidate = 300
): Promise<PageDTO | null> {
  const endpoint =
    `pages?slug=${encodeURIComponent(slug)}&_embed=1` +
    `&_fields=id,slug,title,excerpt,content,_embedded`;
  const pages = await fetchJSON<RawWPPage[]>(endpoint, revalidate);
  return pages.length ? mapPage(pages[0]) : null;
}

/**
 * Convert the WP "rendered" HTML into a flat, ordered list of blocks
 * (headings, paragraphs, images). Dependency-free, tolerant parser that
 * preserves document order.
 */
function normalizeHtmlToBlocks(html: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  if (!html) return blocks;

  // Remove WP content wrappers we don't care about
  let h = html.replace(/\s*data-[^=]+="[^"]*"/g, "");

  // Global regex that finds H1–H6, P, IMG in original order
  const re =
    /<(h[1-6])\b[^>]*>([\s\S]*?)<\/\1>|<p\b[^>]*>([\s\S]*?)<\/p>|<img\b[^>]*>/gi;

  let i = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(h))) {
    const [full, hTag, hInner, pInner] = m;

    if (hTag) {
      const level = Number(hTag.slice(1));
      const text = stripHtml(hInner).trim();
      if (text) {
        blocks.push({
          id: `heading-${i++}`,
          type: "heading",
          content: decodeEntities(text),
          metadata: { level },
        });
      }
      continue;
    }

    if (typeof pInner === "string") {
      const trimmed = pInner.trim();
      // If the paragraph only wraps an image, skip here; the <img> match will handle it.
      const hasOnlyImg =
        /^<img\b[^>]*>\s*$/i.test(trimmed) ||
        /^<a\b[^>]*>\s*<img\b[^>]*>\s*<\/a>$/i.test(trimmed);
      if (!hasOnlyImg) {
        blocks.push({
          id: `text-${i++}`,
          type: "text",
          content: trimmed, // keep inline links & formatting
        });
      }
      continue;
    }

    // IMG (possibly matched alone)
    if (/^<img\b/i.test(full)) {
      const { src, alt } = extractImgAttrs(full);
      blocks.push({
        id: `image-${i++}`,
        type: "image",
        content: full,
        metadata: { src, alt },
      });
    } else if (/^<a\b[^>]*>\s*<img\b/i.test(full)) {
      // Defensive: if anchor+img were matched by the generic rule
      const imgMatch = full.match(/<img\b[^>]*>/i);
      const { src, alt } = extractImgAttrs(imgMatch ? imgMatch[0] : "");
      blocks.push({
        id: `image-${i++}`,
        type: "image",
        content: imgMatch ? imgMatch[0] : "",
        metadata: { src, alt },
      });
    }
  }

  return blocks;
}

export async function getContentBlocksBySlug(
  slug: string,
  revalidate = 300
): Promise<ContentBlock[]> {
  const page = await getPageBySlug(slug, revalidate);
  return page ? normalizeHtmlToBlocks(page.html) : [];
}

/** ===== Tiny helpers (no external deps) ===== */

function extractImgAttrs(tag: string): { src?: string; alt?: string } {
  const src = /src\s*=\s*"([^"]+)"/i.exec(tag)?.[1];
  const alt = /alt\s*=\s*"([^"]*)"/i.exec(tag)?.[1];
  return { src, alt };
}

function stripHtml(s: string): string {
  return s.replace(/<[^>]+>/g, " ");
}

// Decode a few common entities that show up in WP rendered HTML
function decodeEntities(s: string): string {
  return s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;|&rsquo;/g, "’")
    .replace(/&#8220;|&ldquo;/g, "“")
    .replace(/&#8221;|&rdquo;/g, "”")
    .replace(/&#8211;|&ndash;/g, "–")
    .replace(/&#8212;|&mdash;/g, "—")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}
