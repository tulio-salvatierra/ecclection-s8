import { Contact } from "@/components/sections/Contact";
import dynamic from "next/dynamic";
import { LenisProvider } from "@/components/LenisProvider";
import { renderPunkTitle } from "@/lib/punk-typography";
import Image from "next/image";
import {
  buildBreadcrumbSchema,
  buildPageMetadata,
  SEO_KEYWORD_CLUSTERS,
  SITE_URL,
} from "@/lib/seo";

// Lazy load heavy components
const Masonry = dynamic(() => import("@/components/Masonry"), { ssr: false });

const Stack = dynamic(() => import("@/components/Stack"), { ssr: false });

import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Chicago Art Events in Portage Park | Ecclection",
  description:
    "Join recurring Chicago art events at Ecclection in Portage Park, including Artist & Community Appreciation nights, local maker showcases, and neighborhood collaborations.",
  path: "/events",
  keywords: [
    ...SEO_KEYWORD_CLUSTERS.eventsAndCommunity,
    ...SEO_KEYWORD_CLUSTERS.brandAndLocal,
    "artist market Chicago",
    "vendor spaces Chicago",
  ],
  ogTitle: "Bi‑Monthly Artist & Community Appreciation — Ecclection",
  ogDescription:
    "Community art events in Portage Park, Chicago with complimentary snacks & drinks and affordable vendor spaces.",
  ogImage: `${SITE_URL}/og/events.png`,
});

export default function EventsPage() {
  return (
    <>
      {" "}
      <LenisProvider />
      <section className="min-h-screen w-screen ">
        {/* Header Section */}
        <div role="banner" className="text-center mt-40">
          {renderPunkTitle(
            "Chicago Art Events & Community Impact",
            "text-3xl md:text-4xl",
            "mb-6",
          )}
          <p className="text-xl sm:text-2xl font-brand text-white sm:w-1/2 mx-auto leading-5">
            Our events are where Ecclection really comes alive. We host
            community-centered nights that bring together local artists, curious
            neighbors, and wonderfully creative energy — all under one funky
            little roof.
          </p>
        </div>

        {/* Main Content Section */}
        <section className="mt-20">
          <div className=" ">
            {/* Upcoming Event (concrete date for SEO + visitors) */}
            <div className="border-2 border-black rounded-lg shadow-[6px_6px_0_0_#000] overflow-hidden bg-cyan-900/40">
              <div className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]">
                <div className="relative min-h-[320px] md:min-h-full">
                  <Image
                    src="/child.jpeg"
                    alt="Artists Spot"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-center text-white">
                  <div className="self-start">
                    {renderPunkTitle(
                      "Artist & Community Appreciation Night — Dates announced on social media",
                      "text-2xl md:text-3xl fade-in",
                      "mb-4",
                    )}
                  </div>
                  <p className="text-lg sm:text-xl font-brand leading-6 fade-in">
                    From Artist &amp; Community Appreciation Nights to seasonal
                    pop-ups and maker features, these gatherings are built for
                    connection. Come meet people, discover new work, share good
                    vibes, and experience the neighborhood in a way you just
                    can&apos;t online.
                  </p>
                </div>
              </div>
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
          const breadcrumbSchema = buildBreadcrumbSchema([
            { name: "Home", path: "" },
            { name: "Events", path: "/events" },
          ]);

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
              url: SITE_URL,
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
