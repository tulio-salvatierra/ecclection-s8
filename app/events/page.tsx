export default function EventsPage() {
  function renderPunkTitle(text: string, size: string = "text-3xl md:text-4xl") {
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
          {/* Introduction */}
          <div className="text-center">
            <p className="text-lg text-white leading-relaxed">
              At <strong>Ecclection</strong>, we believe art has the power to connect, heal, and inspire. Beyond being a local shop in 
              <strong> Portage Park, Chicago</strong>, we are a community hub where creativity and compassion meet. Our philosophy is simple — 
              to celebrate diversity, uplift local artists, and give back to those in need through meaningful initiatives and events.
            </p>
          </div>

          {/* Community Events Card */}
          <div className="bg-cyan-600 border-2 border-black shadow-[6px_6px_0_0_#000] rounded-lg p-8">
            {renderPunkHeading("Bi-Monthly Artist & Community Nights", "text-2xl md:text-3xl")}
            <p className="text-black leading-relaxed">
              Every event we host is designed to foster connection and purpose. From our <strong>Bi‑Monthly Artist & Community Appreciation Nights</strong> 
              to seasonal collaborations, Ecclection creates opportunities for neighbors, makers, and visitors to come together in a spirit of inclusion 
              and creativity. Each gathering supports our mission to strengthen community bonds and remind everyone that art and kindness can change lives.
            </p>
          </div>

          {/* Big Elves Section */}
          <div className="text-center mt-12">
            {renderPunkHeading("Big Elves — Spreading Joy Through Giving", "text-2xl md:text-3xl")}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cyan-600 border-2 border-black shadow-[6px_6px_0_0_#000] rounded-lg p-6">
              <div className="text-4xl mb-4 text-center">🎁</div>
              <h3 className="text-xl font-bold font-brand text-black mb-3 text-center">Our Mission</h3>
              <p className="text-black leading-relaxed">
                <strong>Big Elves</strong> is a volunteer‑driven charity initiative founded by Julie and the Ecclection family. 
                Big Elves collects donations year‑round to bring comfort and hope to those who need it most — including veterans, children's hospitals, 
                and foster care centers across Chicago.
              </p>
            </div>

            <div className="bg-cyan-600 border-2 border-black shadow-[6px_6px_0_0_#000] rounded-lg p-6">
              <div className="text-4xl mb-4 text-center">❤️</div>
              <h3 className="text-xl font-bold font-brand text-black mb-3 text-center">Community Impact</h3>
              <p className="text-black leading-relaxed">
                What makes Big Elves truly special is the way it unites people through kindness. Whether it's a customer dropping off a donation, 
                an artist contributing a handmade piece, or a volunteer organizing a drive, every act of generosity ripples outward.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 p-8 bg-card/30 backdrop-blur-sm rounded-lg border-2 border-cyan-600">
            <p className="text-lg text-white leading-relaxed mb-4">
              Learn more about Big Elves and how you can get involved by visiting our official Facebook page:
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
              Follow <strong>Ecclection</strong> for upcoming charity events, art collaborations, and community initiatives that bring people together 
              through creativity and compassion.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

