import { Contact } from "@/components/sections/Contact";
import dynamic from "next/dynamic";
import { LenisProvider } from "@/components/LenisProvider";
import Masonry from "@/components/Masonry";

const Stack = dynamic(() => import("@/components/Stack"), { ssr: false });

export const metadata = {
  title:
    "Chicago Art Events (Bi‑Monthly) — Artist & Community Appreciation | Ecclection",
  description:
    "Join our bi‑monthly Artist & Community Appreciation nights in Portage Park, Chicago. Complimentary snacks & drinks and affordable vendor spaces for local artists.",
  alternates: {
    canonical: "https://ecclection.com/events",
  },
  openGraph: {
    type: "website",
    url: "https://ecclection.com/events",
    title: "Bi‑Monthly Artist & Community Appreciation — Ecclection",
    description:
      "Community art events in Portage Park, Chicago with complimentary snacks & drinks and affordable vendor spaces.",
    images: [{ url: "https://ecclection.com/og/events.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bi‑Monthly Artist & Community Appreciation — Ecclection",
    description:
      "Community art events in Portage Park, Chicago with complimentary snacks & drinks and affordable vendor spaces.",
    images: ["https://ecclection.com/og/events.png"],
  },
};

export default function EventsPage() {
  function renderPunkTitle(
    text: string,
    size: string = "text-3xl md:text-4xl"
  ) {
    const words = text.trim().split(/\s+/);
    const angles = [-6, -3, 0, 3, 6, -4, 2, -2, 4];
    return (
      <h1 className={`${size} font-bold font-brand mb-6 text-center`}>
        {words.map((word, idx) => {
          const angle = angles[idx % angles.length];
          return (
            <span
              key={`w-${idx}`}
              className="inline-block mr-2 md:mr-3 px-2 md:px-3 py-1 md:py-2 bg-cyan-600 text-black rounded-[3px] border-2 border-black shadow-[3px_3px_0_0_#000]"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              {word}
            </span>
          );
        })}
      </h1>
    );
  }

  return (
    <>
      <section className="min-h-screen">
        {/* Header Section */}
        <header className="container section-pad text-center">
          {renderPunkTitle("Events & Community Impact")}
          <p className="text-lg text-white sm:w-1/2 mx-auto leading-5">
            Where local art, rescued treasures, community & compassion meet
            under one funky little roof
          </p>
        </header>
        <LenisProvider />

        {/* Main Content Section */}
        <section className="">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Upcoming Event (concrete date for SEO + visitors) */}
            <div className="bg-cyan-600 border-2 border-black rounded-lg p-6 shadow-[6px_6px_0_0_#000]">
              <div className="text-black leading-relaxed grid gap-4 sm:grid-cols-2 grid-cols-1">
                <div>
                <h2 className="font-brand text-black text-2xl md:text-3xl ">
                  Artist & Community Appreciation Night — Dates announced on
                  social media
                </h2>
                <p className="text-md text-black mx-auto leading-6 my-8 justify-center">
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
                <img
                  src="/child.jpeg"
                  alt="Artists Spot"
                  className="my-4 w-full rounded-md"
                />
                
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
              preload="auto"
              className="absolute inset-0 w-auto h-full object-cover rounded-md"
            >
              <source src="/Artists_spot.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10 rounded-md sm:w-1/2 p-4 backdrop-blur-3xl">
              <h2 className="text-2xl md:text-3xl text-white font-brand">
                Bi-Monthly Artist & Community Nights
              </h2>
              <p className="text-white leading-6  sm:text-sm text-xs  my-4">
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                url: "https://ecclection.com",
              },
            }),
          }}
        />
      </section>
      <Contact />
    </>
  );
}
