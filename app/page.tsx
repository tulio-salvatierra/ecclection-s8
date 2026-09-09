import { Hero } from "@/components/sections/Hero";
import { LenisProvider } from "@/components/LenisProvider";
import SoundOnScroll from "@/components/SoundOnScroll/SoundOnScroll";
import { ARTISTS_DATA } from "@/components/sections/Artists";
import { ArtistCarousel } from "@/components/ArtistCarousel";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

// Lazy load below-the-fold components
const Intro = dynamic(() => import("@/components/sections/Intro").then(mod => ({ default: mod.Intro })), { ssr: true });
const DisclaimerSection = dynamic(() => import("@/components/sections/Disclaimer").then(mod => ({ default: mod.default })), { ssr: true });
const StoreActivities = dynamic(() => import("@/components/sections/Activities").then(mod => ({ default: mod.StoreActivities })), { ssr: true });
const ProductsShowcase = dynamic(() => import("@/components/sections/Products").then(mod => ({ default: mod.ProductsShowcase })), { ssr: true });
const Review = dynamic(() => import("@/components/sections/Review").then(mod => ({ default: mod.Review })), { ssr: true });
const Influencers = dynamic(() => import("@/components/sections/Influencers"), { ssr: true });
const Contact = dynamic(() => import("@/components/sections/Contact").then(mod => ({ default: mod.Contact })), { ssr: true });

export const metadata: Metadata = {
  title: "Ecclection | Local Art & Community Vibe in Portage Park, Chicago",
  description: "A vibrant local variety shop in Portage Park, Chicago featuring vintage treasures, handmade art, locally crafted finds, and community events. Supporting local artists and building community connections. Items starting at $1!",
  keywords: [
    "Ecclection",
    "Portage Park Chicago",
    "vintage shop Chicago",
    "local art Chicago",
    "handmade art",
    "community events Chicago",
    "local artists",
    "vintage treasures",
    "thrift shop Chicago",
    "variety store Chicago",
    "local business Chicago",
    "art gallery Chicago",
    "community space",
    "affordable art",
    "Chicago vintage",
  ],
  authors: [{ name: "Ecclection" }],
  creator: "Ecclection",
  publisher: "Ecclection",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ecclection.com",
    siteName: "Ecclection",
    title: "Ecclection | Local Art & Community Vibe in Portage Park, Chicago",
    description: "A true variety store in Portage Park – packed with local art, rescued treasures, gag gifts, funky tees & SO much more… where EVERYONE is welcome & all budgets are loved.",
    images: [
      {
        url: "https://ecclection.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ecclection - Local Art & Community Vibe in Portage Park, Chicago",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecclection | Local Art & Community Vibe in Portage Park, Chicago",
    description: "A vibrant local variety shop featuring vintage treasures, handmade art, and community events. Items starting at $1!",
    images: ["https://ecclection.com/og-image.jpg"],
    creator: "@Ecclectionchicago",
  },
  alternates: {
    canonical: "https://ecclection.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

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

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ecclection.com";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ],
  };

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
      
      <StoreActivities />
      <ProductsShowcase />
      <Review />
      <Influencers />
      <Contact heading="Come Find Us!" cards={[]} />
    </>
  );
}
