import { Contact } from "@/components/sections/Contact";
import dynamic from "next/dynamic";
import { LenisProvider } from "@/components/LenisProvider";
import { renderPunkTitle } from "@/lib/punk-typography";
import Image from "next/image";

// Lazy load heavy components
const Masonry = dynamic(() => import("@/components/Masonry"), { ssr: false });

const Stack = dynamic(() => import("@/components/Stack"), { ssr: false });

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Chicago Art Events (Bi‑Monthly) — Artist & Community Appreciation | Ecclection",
  description:
    "Join our bi‑monthly Artist & Community Appreciation nights in Portage Park, Chicago. Complimentary snacks & drinks and affordable vendor spaces for local artists. Community art events celebrating local makers and neighbors.",
  keywords: [
    "Chicago art events",
    "Portage Park events",
    "artist appreciation night",
    "community events Chicago",
    "local art events",
    "Chicago art community",
    "vendor spaces Chicago",
    "artist market Chicago",
    "community appreciation",
    "Portage Park art",
    "local makers Chicago",
    "art night Chicago",
  ],
  authors: [{ name: "Ecclection" }],
  creator: "Ecclection",
  publisher: "Ecclection",
  alternates: {
    canonical: "https://ecclection.com/events",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ecclection.com/events",
    siteName: "Ecclection",
    title: "Bi‑Monthly Artist & Community Appreciation — Ecclection",
    description:
      "Community art events in Portage Park, Chicago with complimentary snacks & drinks and affordable vendor spaces. Join us for our bi-monthly celebration of local artists and community.",
    images: [
      {
        url: "https://ecclection.com/og/events.png",
        width: 1200,
        height: 630,
        alt: "Ecclection Artist & Community Appreciation Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bi‑Monthly Artist & Community Appreciation — Ecclection",
    description:
      "Community art events in Portage Park, Chicago with complimentary snacks & drinks and affordable vendor spaces.",
    images: ["https://ecclection.com/og/events.png"],
    creator: "@Ecclectionchicago",
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

export default function EventsPage() {
  return (
    <>
      <section className="min-h-screen w-screen">
        {/* Header Section */}
        <div role="banner" className="text-center mt-40">
          {renderPunkTitle("Events & Community Impact", "text-3xl md:text-4xl", "mb-6")}
          <p className="text-xl sm:text-2xl font-brand text-white sm:w-1/2 mx-auto leading-5">
            Where local art, rescued treasures, community & compassion meet
            under one funky little roof
          </p>
        </div>
        <LenisProvider />

        {/* Main Content Section */}
        <section className="mt-10">
          <div className=" px-4 md:px-8 mx-auto space-y-8">
            {/* Upcoming Event (concrete date for SEO + visitors) */}
            <div className="bg-cyan-600/80 border-2 border-black rounded-lg p-6 shadow-[6px_6px_0_0_#000]">
              <div className="text-black leading-relaxed grid gap-4 sm:grid-cols-2 grid-cols-1">
                <div>
                <h2 className="font-brand text-black text-2xl md:text-3xl ">
                  Artist & Community Appreciation Night — Dates announced on
                  social media
                </h2>
                <p className="text-xl sm:text-2xl font-brand text-black mx-auto leading-6 sm:my-8 my-4 justify-center">
                  At <strong>Ecclection</strong>, we believe art should connect
                  you, surprise you and basically make your whole day better.
                  We’re not just a shop in <strong>Portage Park</strong> — we’re
                  a tiny WONDER-HUB where creativity, compassion and community
                  swirl together in the most magical, chaotic, heart-squeezing
                  way. Our philosophy is simple: celebrate our people, uplift
                  our artists, honor every weird & wonderful story, and fill our
                  events with laughter, kindness and those silly little moments
                  that make you think, “Wow… that was actually really nice.”
                </p>
                </div>
                <div className="relative my-4 w-full aspect-video rounded-md overflow-hidden">
                  <Image
                    src="/child.jpeg"
                    alt="Artists Spot"
                    fill
                    className="object-cover object-top h-full w-full rounded-md"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                
                </div>
              <div className="text-center"></div>
            </div>
          </div>
        </section>

        {/* Masonry Section and Introduction */}
        <section className="section-pad">
          <Masonry />
        </section>

        {/* Introduction */}

        {/* Community Events Card */}
        <section className="container section-pad">
          <div className="relative border-2 h-[900px] border-black shadow-[6px_6px_0_0_#000] rounded-lg p-8 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 w-auto h-full object-cover rounded-md"
            >
              <source src="/Artists_spot.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10 rounded-md p-2 sm:p-4 backdrop-blur-3xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-brand">
                Bi-Monthly Artist & Community Nights
              </h2>
              <p className="text-xl sm:text-2xl font-brand text-white leading-6  sm:text-sm text-xs  my-2 sm:my-4">
                Every event we host is crafted to spark connection, creativity
                &amp; genuine human joy. From our{" "}
                <strong>
                  Bi-Monthly Artist &amp; Community Appreciation Nights
                </strong>{" "}
                to seasonal pop-ups &amp; quirky collabs, we LOVE bringing
                neighbors, makers &amp; wanderers together in a spirit of
                inclusion, sustainability &amp; good vibes all around. Our
                gatherings celebrate art, kindness &amp; the magic that happens
                when people show up for each other. Enjoy complimentary snacks
                &amp; drinks on <strong>EVENT NIGHTS ONLY!</strong> Ask us about
                affordable vendor spaces for artists &amp; makers. Every item we
                feature is intentionally chosen, priced with our neighborhood in
                mind, and displayed with love — no constant artist turnover,
                just real support &amp; real community.
              </p>
            </div>
          </div>
        </section>

        {/* Structured Data (JSON-LD) */}
        {(() => {
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
              {
                "@type": "ListItem",
                position: 2,
                name: "Events",
                item: `${siteUrl}/events`,
              },
            ],
          };

          const eventSchema = {
            "@context": "https://schema.org",
            "@type": "Event",
            name: "Bi‑Monthly Artist & Community Appreciation Event",
            description:
              "Meet local artists, enjoy complimentary snacks & drinks, and discover affordable vendor spaces. In‑store only at Ecclection in Portage Park, Chicago.",
            eventSchedule: {
              "@type": "Schedule",
              repeatFrequency: "P2M",
              byDay: "https://schema.org/Saturday",
              scheduleTimezone: "America/Chicago",
            },
            location: {
              "@type": "Place",
              name: "Ecclection",
              address: {
                "@type": "PostalAddress",
                streetAddress: "6059 W Irving Park Rd",
                addressLocality: "Chicago",
                addressRegion: "IL",
                postalCode: "60634",
                addressCountry: "US",
              },
            },
            organizer: {
              "@type": "Organization",
              name: "Ecclection",
              url: siteUrl,
            },
          };

          return (
            <>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(breadcrumbSchema),
                }}
              />
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(eventSchema),
                }}
              />
            </>
          );
        })()}
      </section>
      <Contact />
    </>
  );
}
