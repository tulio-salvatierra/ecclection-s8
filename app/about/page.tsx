import { Contact } from "@/components/sections/Contact";
import type { Metadata } from "next";
import { renderPunkTitle, renderPunkHeading } from "@/lib/punk-typography";
import { LenisProvider } from "@/components/LenisProvider";
import Image from "next/image";
import {
  buildBreadcrumbSchema,
  buildPageMetadata,
  SEO_KEYWORD_CLUSTERS,
  SITE_URL,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Ecclection | Portage Park Local Art & Vintage Shop",
  description:
    "Learn the story behind Ecclection in Portage Park, Chicago, including our mission to support local artists, community initiatives, and unique vintage and handmade finds.",
  path: "/about",
  keywords: [
    ...SEO_KEYWORD_CLUSTERS.brandAndLocal,
    ...SEO_KEYWORD_CLUSTERS.artistsAndMakers,
    "Ecclection about",
    "Big Elves charity",
    "Julie Ecclection",
  ],
  ogTitle: "About Ecclection | Local Art & Community Shop in Chicago",
  ogDescription:
    "Learn about Ecclection's mission to support local artists and build community connections in Portage Park, Chicago.",
});

export default function AboutPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "" },
    { name: "About", path: "/about" },
  ]);

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Ecclection",
    description:
      "Learn about Ecclection - a vibrant local shop in Portage Park, Chicago. Discover our mission to support local artists, build community connections, and offer unique vintage treasures, handmade art, and locally crafted finds.",
    url: `${SITE_URL}/about`,
    mainEntity: {
      "@type": "LocalBusiness",
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
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />
      {/* Header Section */}
      <header className="container section-pad text-center fade-in mt-12">
        {renderPunkTitle("About Ecclection in Portage Park")}
        <p className="text-xl text-center text-white sm:w-1/2 mx-auto leading-5 font-brand">
          Where rescued treasures, local art, and community all collide in the best possible way.
        </p>
      </header>
      <LenisProvider />

      {/* Hero Section */}
      <section className="container section-pad fade-in mt-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Portrait Image */}
          <div className="relative rounded-lg overflow-hidden shadow-lg h-[400px]">
            <Image
              src="/portrait.jpeg"
              alt="Professional portrait of shop owner inside of Ecclection store"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Right: Text Content */}
          <div className="space-y-6 bg-black/30 p-4 font-brand">
            {renderPunkHeading("Welcome to Ecclection", "text-2xl md:text-3xl")}
            <p className="text-white text-xl leading-relaxed">
              Ecclection is a neighborhood shop at 6059 West Irving Park Road in
              Chicago’s Portage Park—filled with vintage treasures, handmade
              art, and locally crafted finds.
              <br />
              <br />
              We keep things welcoming, affordable, and a little delightfully
              odd. It’s not just a place to pick something up—it’s a place to
              wander, laugh, and find something you didn’t know you needed.
            </p>
            <p className="text-white text-xl leading-relaxed ">
              Step inside and you&apos;ll find an ever-changing mix of curated,
              recycled, and up-cycled pieces <strong className="text-cyan-500">(starting at $1)</strong>
              — from art and jewelry to home décor, crystals, and wellness
              goodies.
              <br />
              <br />
              Every corner has a story, and every piece is here to inspire,
              delight, or at the very least make you smile.
              <br />
              <br />
              So come by, take your time, and explore what makes Ecclection so
              one of a kind.
            </p>
          </div>
        </div>
      </section>
      <section className="container section-pad mx-auto">
        {renderPunkHeading(
          "What I do",
          "text-2xl md:text-3xl text-center mb-6"
        )}
        <p className="text-white text-xl sm:w-1/2 mx-auto font-brand">
          I’m Julie, an honest, compassionate, resourceful human who also
          happens to be a wife, mom, animal lover, artist, designer, nature
          admirer, traveler, and yes… a bit of a hoarder if you couldn't tell.
          <br />
          <br />
          People always ask how I find all these quirky treasures for
          Ecclection. Outside of our amazing local artists, here’s the short
          version:
          <br />
          <br />
          I&apos;ve been collecting these self-proclaimed <strong>TREASURES{" "}<span className="text-cyan-500">TREASURES</span>{" "}</strong>
          for decades—from estate sales and thrift shops to garage sales,
          clearance aisles, and going-out-of-business deals. If there’s a
          hidden gem, I&apos;m probably already digging for it.
          <br />
          <br />
          Now all those years of treasure hunting live here at Ecclection,
          ready for new homes, new stories, and new joy!
        </p>
      </section>

      {/* Content Section */}
      <section className="container section-pad">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Left: Flower Image */}
          <div className="md:col-span-3 flex justify-center">
            <div className="w-32 h-32 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://peanuttyxx.wordpress.com/wp-content/uploads/2025/10/img_4131.jpeg"
                alt="Woman standing in front of Ecclection storefront"
                className="w-72 h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Center: Body Text */}
          <div className="md:col-span-6 space-y-6 text-md">
            {renderPunkHeading("Our Philosophy", "text-xl")}
            <p className="text-white leading-relaxed text-xl font-brand">
              At Ecclection, shopping stays personal, playful, and real. No
              online carts. No algorithms. Just humans, conversation, and the
              joy of stumbling onto something unexpected.
            </p>

            <p className="text-white leading-relaxed text-xl font-brand">
              We love being part of the neighborhood too—from kids&apos; crafts and
              school fundraisers to sip-and-shops, plus-size pop-ups, and other
              community gatherings.
            </p>

            <p className="text-white p-8 text-xl tracking-wide bold leading-10 font-brand">
              Hunting for something special? Something strange? Something your
              soul suddenly decides it must have? Come dig around—your next
              treasure is probably already waiting.
            </p>
          </div>

          {/* Right: Hand Image */}
          <div className="md:col-span-3 flex justify-center">
            <div className="relative w-full h-auto aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/herofigure.png"
                alt="Woman standing in front of Ecclection storefront"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 33vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <section className="container section-pad h-auto">
          <div className="text-center mb-12 fade-in">
            {renderPunkTitle("What We Offer", "text-3xl md:text-4xl")}
          </div>
          <div className="grid grid-cols-1 sm:h-100 h-auto md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg bg-card/100 relative overflow-hidden flex flex-col justify-end">
              <div
                className="absolute inset-0 bg-cover bg-center "
                style={{ backgroundImage: "url(/3pics/vintage.jpeg)" }}
              />
              <div className="relative z-10 ">
                {renderPunkHeading("Vintage Treasures", "text-lg")}
                <p className="text-white bg-black/50 p-3 rounded">
                  Curated vintage finds, recycled pieces, and rescued gems with stories to tell.
                </p>
              </div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card/100 relative overflow-hidden flex flex-col justify-end">
              <div
                className="absolute inset-0 bg-cover bg-top"
                style={{ backgroundImage: "url(/3pics/DSC02214.jpeg.jpg)" }}
              />
              <div className="relative z-10">
                {renderPunkHeading("Local Art", "text-lg")}
                <p className="text-white bg-black/50 p-3 rounded">
                  Handmade art, jewelry, décor, crystals, and other beautiful things from local makers.
                </p>
              </div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card/100 relative overflow-hidden flex flex-col justify-end">
              <div
                className="absolute inset-0 bg-cover bg-top"
                style={{ backgroundImage: "url(/3pics/DSC02204.jpeg.jpg)" }}
              />
              <div className="relative z-10">
                {renderPunkHeading("Visit Us", "text-lg")}
                <p className="text-white bg-black/50 p-3 rounded">
                  Find us at 6059 W. Irving Park Road in Chicago—right on the west end of Portage Park.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Big Elves Section */}
        {renderPunkHeading(
          "Beyond Ecclection...",
          "text-2xl md:text-3xl text-center mb-6"
        )}

        {/* Call to Action */}
        <div className="text-left mt-12 p-8 bg-card/30 backdrop-blur-sm rounded-lg border-2 border-cyan-600">
          <h2 className="mb-8 text-2xl md:text-3xl font-brand text-center mt-12">
            Big Elves — A Passion Project with a BIG Heart
          </h2>
          <img
            className="rounded-lg shadow-2xlw-full h-auto mx-auto mb-6"
            src="/bigelves.jpeg"
            alt="Julie and Elise dressed as elves bringing gifts and goodies"
          />
          <h3 className="text-xl font-bold font-brand  mb-3 text-center">
            Our Mission
          </h3>
          <p className="text-white sm:w-1/2 mx-auto leading-6">
            <strong>Big Elves</strong> is a passion project created by Julie
            &amp; Elise—two longtime friends with a very big heart.
            <br />
            <br />
            Together, we bring comfort, hope, and a little magic to low-income
            adults in mental health residences and nursing homes across
            Chicago.
            <br />
            <br />
            Throughout the year, we collect essentials like toiletries, socks,
            puzzles, games, and cleaning supplies. During the holidays, we also
            help fulfill special wish lists.
          </p>
          <h3 className="text-xl mt-4 font-bold font-brand text-white mb-3 text-center">
            How You Can Help
          </h3>
          <p className="text-white sm:w-1/2 mx-auto leading-6">
            You can support Big Elves by donating new or gently used items,
            helping with holiday wish lists, or simply spreading the word.
            Every contribution helps bring comfort, dignity, and joy to someone
            who truly needs it.
          </p>

          <p className="text-white my-6 sm:w-1/2 mx-auto leading-6 text-left">
            <strong>
              Together, we can help people feel seen, loved, and remembered.
            </strong>
          </p>

          <p className="text-xl text-center mx-auto text-white font-brand leading-relaxed my-4">
            See more of the magic on Facebook:
          </p>
          <div className="text-center">
            <a
              href="https://www.facebook.com/profile.php?id=61563313948330"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center inline-block mx-auto mt-8 px-8 py-4 bg-cyan-600 text-black font-brand text-lg rounded-lg border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Visit Big Elves on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}

      {/* Call to Action */}
      <Contact />
    </div>
  );
}
