import { Hero } from "@/components/sections/Hero";
import { LenisProvider } from "@/components/LenisProvider";
import SoundOnScroll from "@/components/SoundOnScroll/SoundOnScroll";
import { ARTISTS_DATA } from "@/data/artists";
import { ArtistCarousel } from "@/components/ArtistCarousel";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import {
  buildBreadcrumbSchema,
  buildPageMetadata,
  SEO_KEYWORD_CLUSTERS,
} from "@/lib/seo";

// Lazy load below-the-fold components
const Intro = dynamic(() => import("@/components/sections/Intro").then(mod => ({ default: mod.Intro })), { ssr: true });
const DisclaimerSection = dynamic(() => import("@/components/sections/Disclaimer").then(mod => ({ default: mod.default })), { ssr: true });
const StoreActivities = dynamic(() => import("@/components/sections/Activities").then(mod => ({ default: mod.StoreActivities })), { ssr: true });
const ProductsShowcase = dynamic(() => import("@/components/sections/Products").then(mod => ({ default: mod.ProductsShowcase })), { ssr: true });
const About = dynamic(() => import("@/components/sections/About").then(mod => ({ default: mod.About })), { ssr: true });
const Review = dynamic(() => import("@/components/sections/Review").then(mod => ({ default: mod.Review })), { ssr: true });
const Influencers = dynamic(() => import("@/components/sections/Influencers"), { ssr: true });
const Contact = dynamic(() => import("@/components/sections/Contact").then(mod => ({ default: mod.Contact })), { ssr: true });


export const metadata: Metadata = buildPageMetadata({
  title: "Ecclection | Local Art & Community Vibe in Portage Park, Chicago",
  description:
    "A vibrant local variety shop in Portage Park, Chicago featuring vintage treasures, handmade art, locally crafted finds, and community events. Supporting local artists and building community connections. Items starting at $1!",
  path: "",
  keywords: [
    ...SEO_KEYWORD_CLUSTERS.brandAndLocal,
    ...SEO_KEYWORD_CLUSTERS.artistsAndMakers,
    ...SEO_KEYWORD_CLUSTERS.eventsAndCommunity,
  ],
  ogDescription:
    "A true variety store in Portage Park packed with local art, rescued treasures, funky finds, and community events where everyone is welcome.",
});

export default async function HomePage() {
  const artistsForCarousel = ARTISTS_DATA.map((a, idx) => ({
    id: typeof a.id === "number" ? a.id : idx,
    name: a.name ?? a.title ?? "Untitled",
    specialty: a.specialty,
    bio: a.bio ?? a.description ?? a.text ?? "",
    image: a.image,
    featured: !!a.featured,
    social: {
      instagram: a.social?.instagram,
      website: a.social?.website
    }
  }));

  const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Home", path: "" }]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <LenisProvider />
      <SoundOnScroll />
      <Hero  />
      <Intro />
      <ArtistCarousel artists={artistsForCarousel} />
      <DisclaimerSection />
      <StoreActivities />
      <ProductsShowcase />
      <About />
      <Review />
      <Influencers />
      <Contact heading="Come Find Us!" cards={[]} />
    </>
  );
}
