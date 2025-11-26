


export default function Influencers() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-[#f3f3f0]/10 text-[#111111] max-w-5xl w-full px-10 py-12 md:px-16 md:py-16">
        {/* Top headline */}
        <h1 className="font-brand text-[2.7rem] leading-tight md:text-[3.6rem] font-extrabold tracking-tight max-w-xl">
          SHOUTING OUT
          <br />
            INFLUENCERS
          <br />
          📣
        </h1>

        {/* Bottom content row */}
        <div className="mt-5 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          {/* Left: avatars + small text */}
          <div className="flex items-center gap-4">
            <div className="sm:flex -space-x-4 w-full md:w-1/2 hidden">
              <img
                src="/3pics/influencer.jpg"
                alt="Team member 1"
                className="w-full h-auto rounded-l-md object-cover border border-black"
              />
              <img
                src="/3pics/influencer2.jpg"
                alt="Team member 2"
                className="w-full h-auto rounded-r-md object-cover border border-black"
              />
            </div>
          
          </div>

          {/* Right: copy + button */}
          <div className="max-w-sm">
            <p className="text-lg font-secondary text-white mb-4 leading-relaxed">
              We’d love to have you at Ecclection! Our shop is all about community, local artists, and creative energy — and your vibe fits perfectly with what we’re building here. Come by, explore the space, and let’s collaborate on something fun for the neighborhood.
            </p>
            <button className="px-5 py-2.5 rounded-md bg-cyan-500 text-black font-brand border-2 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}