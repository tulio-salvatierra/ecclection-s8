import { Contact } from "@/components/sections/Contact";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";

export default function AboutPage() {
  function renderPunkTitle(
    text: string,
    size: string = "text-3xl md:text-4xl"
  ) {
    const words = text.trim().split(/\s+/);
    // Deterministic jitter angles to avoid SSR/CSR mismatch
    const angles = [-6, -3, 0, 3, 6, -4, 2, -2, 4];
    return (
      <h1 className={`${size} font-bold font-brand mb-4 text-center`}>
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
      <h2 className={`${size} font-semibold font-brand mb-3`}>
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
        {renderPunkTitle("About Ecclection")}
        <p className="text-lg text-white max-w-2xl mx-auto">
          Where Art Meets Community
        </p>
      </header>

      {/* Hero Section */}
      <section className="container section-pad">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Portrait Image */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://peanuttyxx.wordpress.com/wp-content/uploads/2023/11/img_9263.jpg"
              alt="Professional portrait of shop owner inside of Ecclection store"
              className="w-full h-[400px] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Right: Text Content */}
          <div className="space-y-6">
            {renderPunkHeading("Welcome to Ecclection", "text-2xl md:text-3xl")}
            <p className="text-white leading-relaxed">
              Ecclection is a vibrant local shop located at 6059 West Irving
              Park Road in Chicago's Portage Park neighborhood. We specialize in
              vintage treasures, handmade art, and locally crafted finds that
              celebrate creativity and community while keeping it affordable for
              everyone. So come by! don't be shy, and explore the eclectic mix
              that makes Ecclection truly <strong>one-of-a-kind!</strong>
            </p>
            <p className="text-white leading-relaxed">
              Step inside and you'll discover an ever-changing collection of
              carefully curated, recycled, and up-cycled pieces — from art and
              jewelry to home décor, crystals, and wellness items. Every corner
              of our shop tells a story, and every piece has been chosen to
              inspire.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container section-pad">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Left: Flower Image */}
          <div className="md:col-span-3 flex justify-center">
            <div className="w-32 h-32 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://peanuttyxx.wordpress.com/wp-content/uploads/2025/10/img_4973.jpeg"
                alt="Woman standing in front of Ecclection storefront"
                className="w-72 h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Center: Body Text */}
          <div className="md:col-span-6 space-y-6">
            {renderPunkHeading("Our Philosophy", "text-xl")}
            <p className="text-white leading-relaxed">
              At Ecclection, we believe in keeping the shopping experience
              personal and meaningful. We're proudly brick-and-mortar only — no
              online carts, no algorithms — just real people, real conversation,
              and the joy of discovery. Whether you're a Chicago local or
              visiting the Portage Park area, you'll find something unexpected
              every time you stop by.
            </p>

            <p className="text-white leading-relaxed">
              We also support our community of local artists and makers by
              featuring rotating displays and art events that connect creativity
              with customers. From handcrafted candles and soaps to
              one-of-a-kind accessories and collectibles, Ecclection continues
              to grow as a neighborhood hub for imagination and collaboration.
            </p>
          </div>

          {/* Right: Hand Image */}
          <div className="md:col-span-3 flex justify-center">
            <div className="w-100 h-auto rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://peanuttyxx.wordpress.com/wp-content/uploads/2025/10/img_4131.jpeg"
                alt="Woman standing in front of Ecclection storefront"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
        {/* Big Elves Section */}
        <h2 className="mb-8 text-2xl md:text-3xl font-brand text-center mt-12">
          Big Elves — Spreading Joy Through Giving
        </h2>

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
              who need it most — including low income adults, low income
              facilities, nursing homes, children's hospitals, and foster care
              centers across Chicago. We prioritize non‑monetary donations and
              maintain wishlists so we can deliver specific supplies directly to
              people in need.
            </p>
          </div>

          <div className="bg-cyan-600 border-2 border-black shadow-[6px_6px_0_0_#000] rounded-lg p-6">
            <div className="text-4xl mb-4 text-center">❤️</div>
            <h3 className="text-xl font-bold font-brand text-black mb-3 text-center">
              Community Impact
            </h3>
            <p className="text-black leading-relaxed">
              What makes Big Elves truly special is the way it unites people
              through kindness. Whether it's a customer dropping off a donation,
              an artist contributing a handmade piece, or a volunteer organizing
              a drive, every act of generosity ripples outward.
            </p>
            <h3 className="text-xl font-bold font-brand text-black mb-3 text-center">
              How You Can Help?
            </h3>
            <p className="text-black leading-relaxed">
              You can support Big Elves by donating new or gently used items,
              volunteering your time, or spreading the word about our mission.
              Every contribution, big or small, makes a difference in the lives
              of those we serve. Together, we can create a community where
              everyone feels valued and cared for.
            </p>
            <div className="grid items-center text-center">
              <a
                href="mailto:BigElvesChicago@gmail.com"
                className="inline-block mt-8 px-8 py-4 bg-cyan-600 text-black font-brand text-lg rounded-lg border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                Send Us An Email!
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-card/30 backdrop-blur-sm rounded-lg border-2 border-cyan-600">
          <img
            className="rounded-lg shadow-2xl"
            src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/473620815_122137366148443798_3709210874448085260_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=o-12TdXkO40Q7kNvwErEI3j&_nc_oc=AdnZK1C8Ua677nAFt1UH6Ng9fVJvAL9ufj2X6t4Z98aZMjkV2agYtQsxJdjFStaK4UFGppp_7RaEB5FjOyIDbnS4&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&_nc_gid=iVEZZc0kmdda8S58CvuJAw&oh=00_Afio6mPPK-UNYuBZSy42FFQaKcG6zoz7izXRVYq3gFDYnQ&oe=690C45E5"
            alt="Volunteer handing out gifts to children at a charity event organized by Big Elves"
          />
          <p className="text-lg text-white leading-relaxed my-4">
            Learn more about Big Elves and how you can get involved by visiting
            our official Facebook page:
          </p>
          <p className="text-white my-6 leading-relaxed text-left">
            Follow <strong>Ecclection</strong> social media channels for
            upcoming charity events, art collaborations, kids workshops and
            community initiatives that bring people together through creativity
            and compassion.{" "}
            <strong>
              Together, we can make a difference by help those whose need the
              most.
            </strong>
          </p>{" "}
          <a
            href="https://www.facebook.com/profile.php?id=61563313948330"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-8 py-4 bg-cyan-600 text-black font-brand text-lg rounded-lg border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Visit Big Elves on Facebook
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="container section-pad h-auto">
        <div className="text-center mb-12">
          {renderPunkTitle("What We Offer", "text-3xl md:text-4xl")}
        </div>
        <div className="grid grid-cols-1 h-100 md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-lg bg-card/100 relative overflow-hidden flex flex-col justify-end">
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: "url(/3pics/DSC02203.jpeg.jpg)" }}
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
          style={{ backgroundImage: "url(/3pics/DSC02204.jpeg.jpg)" }}
        />
        <div className="relative z-10">
          {renderPunkHeading("Local Art", "text-lg")}
          <p className="text-white bg-black/50 p-3 rounded">
          Handmade art, jewelry, home décor, crystals, and wellness items
          from local makers.
          </p>
        </div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card/100 relative overflow-hidden flex flex-col justify-end">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: "url(/3pics/DSC02214.jpeg.jpg)" }}
        />
        <div className="relative z-10">
          {renderPunkHeading("Visit Us", "text-lg")}
          <p className="text-white bg-black/50 p-3 rounded">
          Located at 6059 W. Irving Park Road, Chicago, IL 60634 — on the
          west end of Portage Park.
          </p>
        </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <Contact />
    </div>
  );
}
