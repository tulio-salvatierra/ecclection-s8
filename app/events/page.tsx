

import { SOCIAL_URLS } from "@/lib/constants";
import dynamic from 'next/dynamic';

const Stack = dynamic(() => import('@/components/Stack'), { ssr: false });


const images = [
  { id: 1, img: "/carousel/6E39C97E-70C8-47C9-AD07-62A7632FB4F9.jpeg.jpg" },
  { id: 2, img: "/carousel/367A8900-99C2-45B4-9447-5565867A8AB9.jpeg.jpg" },
  { id: 3, img: "/carousel/A0A31AA0-7A51-4E6D-8314-ADE3148ADA0F.jpeg.jpg" },
  { id: 4, img: "/carousel/C10538C7-C6AF-442D-A9F7-F41C9351FA91.jpeg.jpg" },
  { id: 5, img: "/carousel/IMG_1688.jpeg.jpg" },
  { id: 6, img: "/carousel/IMG_2337.jpeg.jpg" },
  { id: 7, img: "/carousel/IMG_2986.jpeg.jpg" },
  { id: 8, img: "/carousel/IMG_2987.jpeg.jpg" },
  { id: 9, img: "/carousel/IMG_3323.jpeg.jpg" },
  { id: 10, img: "/carousel/IMG_3326.jpeg.jpg" },
  { id: 11, img: "/carousel/IMG_3558.jpeg.jpg" },
  { id: 12, img: "/carousel/IMG_4032.jpeg.jpg" },
  { id: 13, img: "/carousel/IMG_4060.jpeg.jpg" },
  { id: 14, img: "/carousel/IMG_4390.jpeg.jpg" },
  { id: 15, img: "/carousel/IMG_4394.jpeg.jpg" }
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
    <div className="min-h-screen">
      {/* Header Section */}
      <header className="container section-pad text-center">
        {renderPunkTitle("Events & Community Impact")}
        <p className="text-lg text-white max-w-2xl mx-auto">
          Where Creativity Meets Compassion
        </p>
      </header>

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
                At <strong>Ecclection</strong>, we believe art has the power to
                connect, heal, and inspire. Beyond being a local shop in
                <strong> Portage Park, Chicago</strong>, we are a community hub
                where creativity and compassion meet. Our philosophy is simple —
                to celebrate diversity, uplift local artists, and give back to
                those in need through meaningful initiatives and events.
              </p>
              <Stack />
              <p className="mb-2">
                <strong>Location:</strong> Ecclection — 6059 W Irving Park Rd,
                Chicago, IL 60634 (Portage Park)
              </p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Complimentary snacks & drinks</li>
                <li>Affordable vendor spaces for local artists & makers</li>
                <li>Inclusive, community‑first atmosphere — in‑store only</li>
                <li>Unique and affordable finds for the kids</li>
                <li>We like to keep it welcoming fun and silly!</li>
              </ul>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=6059+W+Irving+Park+Rd,+Chicago,+IL+60634"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-cyan-600 text-black font-brand rounded-lg border-2 border-black shadow-[3px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
              >
                Get Directions
              </a>
              <a
                href={`mailto:${SOCIAL_URLS.email}`}
                className="inline-block px-4 py-2 bg-cyan-600 text-black font-brand rounded-lg border-2 border-black shadow-[3px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
              >
                Vendor Space Inquiry
              </a>
            </div>
            <div className="text-center"></div>
          </div>

          {/* Introduction */}

          {/* Community Events Card */}
          <div className="bg-cyan-600 border-2 border-black shadow-[6px_6px_0_0_#000] rounded-lg p-8">
            <h2 className="text-2xl md:text-3xl text-black font-brand">
              Bi-Monthly Artist & Community Nights
            </h2>
            <p className="text-black leading-relaxed">
              Every event we host is designed to foster connection and purpose.
              From our{" "}
              <strong>Bi‑Monthly Artist & Community Appreciation Nights</strong>
              to seasonal collaborations, Ecclection creates opportunities for
              neighbors, makers, and visitors to come together in a spirit of
              inclusion and creativity. Each gathering supports our mission to
              strengthen community bonds and remind everyone that art and
              kindness can change lives. Enjoy complimentary snacks & drinks,
              and ask us about our affordable vendor spaces for local artists
              and makers. Our items are thoughtfully curated and affordable for
              our neighborhood. We support the artists who are displaying their
              work with us — not a constant rotation — each selection is
              intentional, well thought-out, and carefully reviewed.
            </p>
          </div>

          {/* Big Elves Section */}
          <div className="text-center mt-12">
            {renderPunkHeading(
              "Big Elves — Spreading Joy Through Giving",
              "text-2xl md:text-3xl"
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cyan-600 border-2 border-black shadow-[6px_6px_0_0_#000] rounded-lg p-6">
              <div className="text-4xl mb-4 text-center">🎁</div>
              <h3 className="text-xl font-bold font-brand text-black mb-3 text-center">
                Our Mission
              </h3>
              <p className="text-black leading-relaxed">
                <strong>Big Elves</strong> is a volunteer‑driven charity
                initiative founded by Julie and the Ecclection family. Big Elves
                collects donations year‑round to bring comfort and hope to those
                who need it most — including veterans, children's hospitals, and
                foster care centers across Chicago. We prioritize non‑monetary
                donations and maintain wishlists so we can deliver specific
                supplies directly to people in need.
              </p>
            </div>

            <div className="bg-cyan-600 border-2 border-black shadow-[6px_6px_0_0_#000] rounded-lg p-6">
              <div className="text-4xl mb-4 text-center">❤️</div>
              <h3 className="text-xl font-bold font-brand text-black mb-3 text-center">
                Community Impact
              </h3>
              <p className="text-black leading-relaxed">
                What makes Big Elves truly special is the way it unites people
                through kindness. Whether it's a customer dropping off a
                donation, an artist contributing a handmade piece, or a
                volunteer organizing a drive, every act of generosity ripples
                outward.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 p-8 bg-card/30 backdrop-blur-sm rounded-lg border-2 border-cyan-600">
            <p className="text-lg text-white leading-relaxed mb-4">
              Learn more about Big Elves and how you can get involved by
              visiting our official Facebook page:
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61563313948330"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-cyan-600 text-black font-brand text-lg rounded-lg border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Visit Big Elves on Facebook
            </a>
            <p className="text-white mt-6 leading-relaxed">
              Follow <strong>Ecclection</strong> for upcoming charity events,
              art collaborations, and community initiatives that bring people
              together through creativity and compassion.
            </p>
          </div>
        </div>

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://ecclection.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Events",
                  item: "https://ecclection.com/events",
                },
              ],
            }),
          }}
        />
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
                  streetAddress: "6049 W Irving Park Rd",
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
  );
}
