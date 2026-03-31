const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ecclection.com";

export async function GET() {
  const content = `# Ecclection

> A local vintage, art, and community-focused shop in Portage Park, Chicago.

## Canonical URL
${SITE_URL}

## Key Pages
- Home: ${SITE_URL}/
- About: ${SITE_URL}/about
- Artists: ${SITE_URL}/artists
- Events: ${SITE_URL}/events
- Resources: ${SITE_URL}/resources

## Contact
- Address: 6059 W Irving Park Rd, Chicago, IL 60634
- Email: EcclectionChicago@gmail.com
- Phone: +1 (773) 951-7992
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
