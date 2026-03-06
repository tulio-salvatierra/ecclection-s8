import type { Metadata } from "next";
import { Artists } from "@/components/sections/Artists";
import { LenisProvider } from "@/components/LenisProvider";
import { buildPageMetadata, SEO_KEYWORD_CLUSTERS } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Artists | Ecclection",
  description:
    "Meet the artists and makers featured at Ecclection — a rotating lineup of local creatives bringing handmade goods, art, and curiosities to Portage Park.",
  path: "/artists",
  keywords: [
    ...SEO_KEYWORD_CLUSTERS.artistsAndMakers,
    ...SEO_KEYWORD_CLUSTERS.brandAndLocal,
    "featured artists Chicago",
  ],
});

export default function ArtistsPage() {
  return (
    <><LenisProvider />
    <main className="min-h-screen pt-24 pb-24">
      <Artists className="pt-8" />
    </main></>
  );
}

