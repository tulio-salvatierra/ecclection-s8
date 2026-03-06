import type { Metadata } from "next";
import { Artists } from "@/components/sections/Artists";
import { LenisProvider } from "@/components/LenisProvider";
import { buildPageMetadata, SEO_KEYWORD_CLUSTERS } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Featured Local Artists in Chicago | Ecclection",
  description:
    "Meet featured local artists and makers at Ecclection in Portage Park, Chicago, from handmade jewelry and body care to original art and creative goods.",
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

