export default function AboutPage() {
  function renderPunkTitle(text: string, size: string = "text-3xl md:text-4xl") {
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
                alt="Professional portrait"
                className="w-full h-[400px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
  
            {/* Right: Text Content */}
            <div className="space-y-6">
              {renderPunkHeading("Welcome to Ecclection", "text-2xl md:text-3xl")}
              <p className="text-white leading-relaxed">
                Ecclection is a vibrant local shop located at 6049 West Irving Park Road in Chicago's Portage Park neighborhood. We specialize in vintage treasures, handmade art, and locally crafted finds that celebrate creativity and community.
              </p>
              <p className="text-white leading-relaxed">
                Step inside and you'll discover an ever-changing collection of curated, recycled, and up-cycled pieces — from art and jewelry to home décor, crystals, and wellness items. Every corner of our shop tells a story, and every piece has been chosen to inspire.
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
                  className="w-full h-full object-cover object top"
                />
              </div>
            </div>
  
            {/* Center: Body Text */}
            <div className="md:col-span-6 space-y-6">
              {renderPunkHeading("Our Philosophy", "text-xl")}
              <p className="text-white leading-relaxed">
                At Ecclection, we believe in keeping the shopping experience personal and meaningful. We're proudly brick-and-mortar only — no online carts, no algorithms — just real people, real conversation, and the joy of discovery. Whether you're a Chicago local or visiting the Portage Park area, you'll find something unexpected every time you stop by.
              </p>
  
              <p className="text-white leading-relaxed">
                We also support our community of local artists and makers by featuring rotating displays and art events that connect creativity with customers. From handcrafted candles and soaps to one-of-a-kind accessories and collectibles, Ecclection continues to grow as a neighborhood hub for imagination and collaboration.
              </p>
            </div>
  
            {/* Right: Hand Image */}
            <div className="md:col-span-3 flex justify-center">
              <div className="w-40 h-56 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://peanuttyxx.wordpress.com/wp-content/uploads/2025/10/img_4131.jpeg"
                  alt="Woman standing in front of Ecclection storefront"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container section-pad">
          <div className="text-center mb-12">
            {renderPunkTitle("What We Offer", "text-3xl md:text-4xl")}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm">
              <div className="text-4xl mb-4">🎨</div>
              {renderPunkHeading("Vintage Treasures", "text-lg")}
              <p className="text-white">
                Curated collection of vintage finds, recycled and up-cycled pieces that tell unique stories.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm">
              <div className="text-4xl mb-4">🏠</div>
              {renderPunkHeading("Local Art", "text-lg")}
              <p className="text-white">
                Handmade art, jewelry, home décor, crystals, and wellness items from local makers.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm">
              <div className="text-4xl mb-4">📍</div>
              {renderPunkHeading("Visit Us", "text-lg")}
              <p className="text-white">
                Located at 6049 W. Irving Park Road, Chicago, IL 60634 — on the west end of Portage Park.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container section-pad text-center">
          <div className="max-w-3xl mx-auto">
            {renderPunkHeading("Come Visit Our New Location", "text-2xl md:text-3xl")}
            <p className="text-white leading-relaxed mt-6">
              Come visit our new location and see why Ecclection has become one of Chicago's favorite small businesses for vintage and handmade goods.
            </p>
          </div>
        </section>
      </div>
    )
  }
  