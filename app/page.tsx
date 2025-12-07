import { Hero } from "@/components/sections/Hero";
import { StoreActivities } from "@/components/sections/Activities";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Intro } from "@/components/sections/Intro";
import { Review } from "@/components/sections/Review";
import { LenisProvider } from "@/components/LenisProvider";
import  Influencers  from "@/components/sections/Influencers";
import  SoundOnScroll  from "@/components/SoundOnScroll/SoundOnScroll";
import { ARTISTS_DATA } from "@/components/sections/Artists";
import { ArtistCarousel } from "@/components/ArtistCarousel";
import { ProductsShowcase } from "@/components/sections/Products";
import type { Metadata } from "next";
import DisclaimerSection from "@/components/sections/Disclaimer";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Ecclection - A vibrant local shop in Portage Park, Chicago featuring vintage treasures, handmade art, locally crafted finds, and community events. Supporting local artists and building community connections.",
  openGraph: {
    title: "Ecclection | Local Art & Community Vibe in Portage Park, Chicago",
    description: "A true variety store in Portage Park – packed with local art, rescued treasures, gag gifts, funky tees & SO much more… where EVERYONE is welcome & all budgets are loved.",
    url: "/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ecclection - Local Art & Community Vibe",
      },
    ],
  },
  alternates: {
    canonical: "/",
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

  return (
    <>
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
