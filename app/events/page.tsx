import { Contact } from "@/components/sections/Contact";
import { SOCIAL_URLS } from "@/lib/constants";
import Masonry from "@/components/Masonry";
import dynamic from "next/dynamic";
import { LenisProvider } from "@/components/LenisProvider";

const Stack = dynamic(() => import("@/components/Stack"), { ssr: false });

const items = [
  { id: 1, img: "/carousel/6E39C97E-70C8-47C9-AD07-62A7632FB4F9.jpeg.jpg", height: "auto" },
  { id: 2, img: "/carousel/367A8900-99C2-45B4-9447-5565867A8AB9.jpeg.jpg", height: "auto" },
  { id: 3, img: "/carousel/A0A31AA0-7A51-4E6D-8314-ADE3148ADA0F.jpeg.jpg", height: "auto" },
  { id: 4, img: "/carousel/C10538C7-C6AF-442D-A9F7-F41C9351FA91.jpeg.jpg", height: "auto" },
  { id: 5, img: "/carousel/IMG_1688.jpeg.jpg", height: "auto" },
  { id: 6, img: "/carousel/IMG_2337.jpeg.jpg", height: "auto" },
  { id: 7, img: "/carousel/IMG_2986.jpeg.jpg", height: "auto" },
  { id: 8, img: "/carousel/IMG_2987.jpeg.jpg", height: "auto" },
  { id: 9, img: "/carousel/IMG_3323.jpeg.jpg", height: "auto" },
  { id: 10, img: "/carousel/IMG_3326.jpeg.jpg", height: "auto" },
  { id: 11, img: "/carousel/IMG_3558.jpeg.jpg", height: "auto" },
  { id: 12, img: "/carousel/IMG_4032.jpeg.jpg", height: "auto" },
  { id: 13, img: "/carousel/IMG_4060.jpeg.jpg", height: "auto" },
  { id: 14, img: "/carousel/IMG_4390.jpeg.jpg", height: "auto" },
  { id: 15, img: "/carousel/IMG_4394.jpeg.jpg", height: "auto" },
];

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

  function renderPunkHeading(text: string, size: string = "text-xl") {
    const words = text.trim().split(/\s+/);
    const angles = [-4, -2, 0, 2, 4, -3, 1, -1, 3];
    return (
      <h2 className={`${size} font-semibold font-brand mb-4`}>
        {words.map((word, idx) => {
          const angle = angles[idx % angles.length];
          return (
            <span
              key={`h-${idx}`}
              className="inline-block mr-1 md:mr-2 px-1 md:px-2 py-1 bg-cyan-600 text-black rounded-[2px] border border-black shadow-[2px_2px_0_0_#000]"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              {word}
            </span>
          );
        })}
      </h2>
    );
  }

  return (
    <>
      <div className="min-h-screen">
        {/* Header Section */}
        <header className="container section-pad text-center">
          {renderPunkTitle("Events & Community Impact")}
          <p className="text-lg text-white max-w-2xl mx-auto">
            Where Creativity Meets Compassion, Art & Sustainability
          </p>
        </header>
        <LenisProvider />

        {/* Main Content Section */}
        <section className="container section-pad">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Upcoming Event (concrete date for SEO + visitors) */}
            <div className="bg-cyan-600 border-2 border-black rounded-lg p-6 shadow-[6px_6px_0_0_#000]">
              <div className="text-black leading-relaxed">
                <h2 className="font-brand text-black text-2xl md:text-3xl ">
                  Artist & Community Appreciation Night — Dates announced on
                  social media
                </h2>
                <p className="text-lg text-white leading-relaxed my-8">
                  At <strong>Ecclection</strong>, we believe art has the power
                  to connect, heal, and inspire. Beyond being a local shop in
                  <strong> Portage Park, Chicago</strong>, we are a variety shop
                  hub where creativity and compassion meet. Our philosophy is
                  simple — to celebrate diversity, uplift local artists, and
                  give back to those in need through meaningful initiatives and
                  events that promote human connection, creativity and sustainability.
                </p>
                <Masonry
                  items={items}
                  ease="power3.out"
                  duration={0.6}
                  stagger={0.05}
                  animateFrom="bottom"
                  scaleOnHover={true}
                  hoverScale={0.95}
                  blurToFocus={true}
                  colorShiftOnHover={false}
                />
                <p className="mb-2">
                  <strong>Location:</strong> Ecclection — 6059 W Irving Park Rd,
                  Chicago, IL 60634 (Portage Park)
                </p>
                <ul className="list-disc ml-5 space-y-1 text-lg">
                  <li>Complimentary snacks & drinks on <strong>Every Event</strong> ONLY! - NO EXCEPTIONS</li>
                  <li>Affordable vendor spaces for local artists & makers</li>
                  <li>Inclusive, community‑driven human atmosphere — <strong>in‑store only</strong></li>
                  <li>Unique and affordable finds for kids, babies & pets</li>
                  <li>We like to keep it welcoming fun and silly!</li>
                </ul>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://maps.app.goo.gl/jN7CMN5aPdA8yMBi8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-cyan-600 text-black font-brand rounded-lg border-2 border-black shadow-[3px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                >
                  Get Directions
                </a>
                <a
                  href="mailto:EcclectionChicago@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-cyan-600 text-black font-brand rounded-lg border-2 border-black shadow-[3px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                >
                  Vendor Space Inquiry
                </a>
              </div>
              <div className="text-center"></div>
            </div>

            {/* Introduction */}

            {/* Community Events Card */}
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
              <div className="relative z-10 rounded-md p-6 backdrop-blur-3xl">
                <h2 className="text-2xl md:text-3xl text-white font-brand">
                  Bi-Monthly Artist & Community Nights
                </h2>
                <p className="text-white leading-relaxed sm:text-lg text-xs">
                  Every event we host is designed to foster connection and
                  purpose. From our{" "}
                  <strong>
                    Bi‑Monthly Artist & Community Appreciation Nights 
                  </strong>
                  {" "}to seasonal collaborations, Ecclection creates opportunities
                  for neighbors, makers, and visitors to come together in a
                  spirit of inclusion, sustainability and creativity. Each gathering supports
                  our mission to strengthen human bonds and remind everyone
                  that art and kindness can change lives. Enjoy complimentary
                  snacks & drinks on <strong>ONLY ON EVENTS NIGHT ONLY!</strong> and ask us about our affordable vendor spaces
                  for local artists and makers. Our items are thoughtfully
                  curated and affordable for our neighborhood. We support the
                  artists who are displaying their work with us — not a constant
                  rotation — each selection is intentional, well thought-out,
                  and carefully reviewed.
                </p>
              </div>
            </div>
          </div>

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
      </div>

      <Contact />
    </>
  );
}
