"use client";
import { useFadeAnimation } from "@/app/hooks/useFadeAnimtion";
import React from "react";

export default function Influencers() {
  const ref = React.useRef<HTMLElement>(null);
  useFadeAnimation(ref);

  return (
    <section
      ref={ref}
      style={{ backgroundImage: 'url("/texture.jpg")', backgroundPosition: 'center', backgroundSize: 'cover' }}
      className="min-h-screen h-auto min-w-screen flex items-between justify-between section-pad"
    >
      <div className=" text-[#111111] fade-in h-screen w-full px-4">
        {/* Top headline */}
        <h1 className="mx-auto fade-in mt-4 font-brand sm:text-[7rem] text-[4rem] leading-tight text-center font-extrabold tracking-tight max-w-xl">
          SHOUT OUT INFLUENCERS 📣
        </h1>

        {/* Bottom content row */}
        <div className="mt-5 h-full grid grid-cols-1 md:grid-cols-2 items-start justify-between gap-10">
          {/* Left: avatars + small text */}

          <div
            className="flex items-center gap-4 fade-in"
            style={{ backgroundImage: `url(/Artists_spot.mp4)` }}
          >
            <video
              src="/Artists_spot.mp4"
              className="rounded-l-md object-fit  border border-black"
              autoPlay
              loop
              muted
            />
          </div>

          {/* Right: copy + button */}
          <div className="max-w-sm fade-in">
            <p className="text-lg font-secondary text-white mb-4 leading-relaxed">
              We’d love to have you at Ecclection! Our shop is all about
              community, local artists, and creative energy — and your vibe fits
              perfectly with what we’re building here. Come by, explore the
              space, and let’s collaborate on something fun for the
              neighborhood.
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
