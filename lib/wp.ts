// lib/wp.ts
const WP = process.env.NEXT_PUBLIC_WP_URL!;

// Generic fetch with ISR
async function wpFetch<T = any>(path: string, revalidate = 120) {
  const url = `${WP}/wp-json/wp/v2/${path}`;
  const res = await fetch(url, { next: { revalidate } });
  if (!res.ok) throw new Error(`WP error: ${res.status} ${url}`);
  return res.json() as Promise<T>;
}

// Pages
export async function getPageBySlug(slug: string) {
  const data = await wpFetch<any[]>(`pages?slug=${encodeURIComponent(slug)}&_embed`);
  return data?.[0] ?? null;
}

export async function getAllPageSlugs() {
  const pages = await wpFetch<any[]>(`pages?per_page=100&_fields=slug`);
  return pages.map(p => p.slug).filter(Boolean);
}

// Posts (if you need them later)
// export async function getPosts() { return wpFetch<any[]>(`posts?per_page=10&_embed`); }