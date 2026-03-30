import { SITE_URL } from "@/lib/seo";

const xmlEscape = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export async function GET() {
  const videos = [
    {
      page: `${SITE_URL}/`,
      title: "Ecclection Vintage Shop in Chicago",
      description:
        "Walk through Ecclection's vintage and local art shop in Portage Park, Chicago.",
      thumbnail: `${SITE_URL}/store.jpg`,
      content: `${SITE_URL}/Ecclection_hero.mp4`,
      player: `${SITE_URL}/`,
    },
    {
      page: `${SITE_URL}/events`,
      title: "Artist and Community Nights at Ecclection",
      description:
        "Highlights from bi-monthly artist and community appreciation nights at Ecclection.",
      thumbnail: `${SITE_URL}/article.png`,
      content: `${SITE_URL}/Artists_spot.mp4`,
      player: `${SITE_URL}/events`,
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${videos
  .map(
    (video) => `  <url>
    <loc>${xmlEscape(video.page)}</loc>
    <video:video>
      <video:thumbnail_loc>${xmlEscape(video.thumbnail)}</video:thumbnail_loc>
      <video:title>${xmlEscape(video.title)}</video:title>
      <video:description>${xmlEscape(video.description)}</video:description>
      <video:content_loc>${xmlEscape(video.content)}</video:content_loc>
      <video:player_loc>${xmlEscape(video.player)}</video:player_loc>
    </video:video>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
