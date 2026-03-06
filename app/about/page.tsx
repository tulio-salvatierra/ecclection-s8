import { Contact } from "@/components/sections/Contact";
import type { Metadata } from "next";
import { renderPunkTitle, renderPunkHeading } from "@/lib/punk-typography";
import { LenisProvider } from "@/components/LenisProvider";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Ecclection - Local Art & Community Shop in Portage Park, Chicago",
  description:
    "Learn about Ecclection - a vibrant local shop in Portage Park, Chicago. Discover our mission to support local artists, build community connections, and offer unique vintage treasures, handmade art, and locally crafted finds. Meet Julie, the owner, and learn about Big Elves community project.",
  keywords: [
    "Ecclection about",
    "Portage Park shop",
    "Chicago local business",
    "vintage shop owner",
    "local artists support",
    "community shop Chicago",
    "Big Elves charity",
    "Julie Ecclection",
    "Chicago variety store",
    "local art community",
    "Portage Park business",
  ],
  authors: [{ name: "Ecclection" }],
  creator: "Ecclection",
  publisher: "Ecclection",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ecclection.com/about",
    siteName: "Ecclection",
    title: "About Ecclection | Local Art & Community Shop in Chicago",
    description:
      "Learn about Ecclection's mission to support local artists and build community connections in Portage Park, Chicago. Discover our story, philosophy, and Big Elves community project.",
    images: [
      {
        url: "https://ecclection.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Ecclection - Local Art & Community Shop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ecclection | Local Art & Community Shop in Chicago",
    description:
      "Learn about Ecclection's mission to support local artists and build community connections in Portage Park, Chicago.",
    images: ["https://ecclection.com/og-image.jpg"],
    creator: "@Ecclectionchicago",
  },
  alternates: {
    canonical: "https://ecclection.com/about",
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

export default function AboutPage() {
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
        name: "About",
        item: `${siteUrl}/about`,
      },
    ],
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Ecclection",
    description:
      "Learn about Ecclection - a vibrant local shop in Portage Park, Chicago. Discover our mission to support local artists, build community connections, and offer unique vintage treasures, handmade art, and locally crafted finds.",
    url: `${siteUrl}/about`,
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
        {renderPunkTitle("About Ecclection")}
        <p className="text-xl text-center text-white sm:w-1/2 mx-auto leading-5 font-brand">
          Where rescued treasures, local art, community & compassion all collide
          in the best possible way
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
          <div className="space-y-6 bg-black/30 p-4">
            {renderPunkHeading("Welcome to Ecclection", "text-2xl md:text-3xl")}
            <p className="text-white text-xl leading-relaxed">
              Ecclection is a vibrant local variety shop located at 6059 West
              Irving Park Road in Chicago&apos;s Portage Park neighborhood. We
              specialize in vintage treasures, handmade art and locally crafted
              finds that celebrate creativity and community while keeping it all
              affordable for everyone. We want the shop to feel welcoming, fun
              and a little bit silly — not just a place to fill a need, but a
              place to have fun, find crazy & silly stuff and wander through a
              whimsical mix of oddities. <br />
            </p>
            <p className="text-white text-xl leading-relaxed ">
              Step inside and you&apos;ll discover an ever-changing collection
              of carefully curated, recycled and up-cycled pieces{" "}
              <strong className="text-cyan-500">(starts at $1)</strong> — from
              art and jewelry to home décor, crystals and wellness goodies.
              Every corner of our shop tells a story, and every piece has been
              chosen to inspire, delight or at least make you smile.
              <br />
              <br /> So come by! don&apos;t be shy, and explore the eclectic mix
              that makes Ecclection truly <strong>one-of-a-kind!</strong>
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
          I’m Julie — an honest, compassionate, resourceful human who’s also a
          wife, mom, animal lover, artist, designer, nature admirer, traveler and, yes, a{" "}
          <em>bit</em> of a hoarder (as if you couldn’t tell! LOL).
          <br />
          <br />
          People always ask, “How do you find all these unique, quirky things
          for Ecclection?” Well… outside of our amazing local artists, here’s
          the short story:
          <br />
          <br />
          I’ve been collecting these self-proclaimed <strong>
            TREASURES
          </strong>{" "}
          for decades — estate sales, thrift shops, garage sales, clearance
          aisles, going-out-of-business sales… if there’s a deal or a hidden
          gem, <em>move out of my way</em> because I’m diving in.
          <br />
          <br />
          Now all those years of treasure hunting live here at Ecclection —
          ready for new homes, new stories & new joy.
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
              At Ecclection, we keep shopping personal, playful and real. No
              online carts, no algorithms—just humans, conversation and the joy
              of stumbling onto something you didn’t expect. Whether you’re a
              Chicago local or just wandering through Portage Park, there’s
              always something new (and perhaps a little weird) waiting for you.
            </p>

            <p className="text-white leading-relaxed text-xl font-brand">
              We enjoy engaging with our community from kids crafts to school fundraisers, sip & shop events, plus-size pop-ups, etc.
            </p>

            <p className="text-white p-8 text-xl tracking-wide bold leading-10 font-brand">
              Hunting for something special? Something strange? Something your
              soul suddenly decides it MUST have? Come dig around—your next
              treasure is already waiting for you.
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
                sizes="100vw, 100vw"
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
                  Curated collection of vintage finds, recycled and up-cycled
                  pieces that tell unique stories.
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
                  Handmade art, jewelry, home décor, crystals, and wellness
                  items from local makers.
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
                  Located at 6059 W. Irving Park Road, Chicago, IL 60634 — on
                  the west end of Portage Park.
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
            <strong>Big Elves</strong> is our passion project created by Julie
            &amp; Elise, two longtime friends with a BIG heart.{" "}
            <strong>.</strong>
            <br />
            <br />
            We bring hope and a little bit of magic to low-income adults in
            mental health facilities and nursing homes across Chicago.
            Throughout the year we collect everyday essentials that make a real
            difference—things like toiletries, socks, puzzles, games and
            cleaning supplies. During the holidays, we also create special
            wishlists to help brighten their days even more.
            <br />
            <br />
            When we visit, we don’t just drop off bags, we show up dressed
            as two 6 foot elves, featuring a smorgasbord of tasty treats, toiletries, body sprays to greeting cards, cakes and personal gifts where residents can pick and choose what’s right for them.

          </p>
          <h3 className="text-xl mt-4 font-bold font-brand text-white mb-3 text-center">
            How You Can Help
          </h3>
          <p className="text-white sm:w-1/2 mx-auto leading-6">
            You can support Big Elves by donating new or gently used items,
            helping fulfill holiday wishlists or simply spreading the word.
            Every contribution—big or small—helps us bring comfort, dignity and
            a little joy to someone who really needs it.
          </p>

          <p className="text-white my-6 sm:w-1/2 mx-auto leading-6 text-left">
            <strong>
              Together, we can help the folks who need it most feel seen, loved
              &amp; remembered.
            </strong>
          </p>

          <p className="text-xl text-center mx-auto text-white font-brand leading-relaxed my-4">
            Want to see more of the magic? Visit us on Facebook:
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
