"use client";
import { useFadeAnimation } from "@/app/hooks/useFadeAnimtion";
import React from "react";

export default function Influencers() {
  const ref = React.useRef<HTMLElement>(null);
  useFadeAnimation(ref);

  return (
    <section
      ref={ref}
      style={{
        backgroundImage: 'url("/texture.jpg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="h-auto min-w-screen flex items-between justify-between section-pad"
    >
      <div className=" text-[#111111] fade-in h-auto w-full px-4">
        {/* Top headline */}
        <h1 className="mx-auto fade-in mt-4 sm:text-[7rem] text-[4rem] leading-tight text-left sm:text-left font-extrabold tracking-tighter">
          CALLING ANY INFLUENCERS 📣
        </h1>

        {/* Bottom content row */}
        <div className=" sm:mt-5 h-auto grid grid-cols-1 md:grid-cols-2 items-start justify-between gap-10">
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
          <div className="sm:max-w-sm fade-in">
            <p className="text-lg font-secondary text-white mb-8 leading-5 p-1">
              We’d love to have you at Ecclection! Funky little businesses like
              ours stick around because the community lifts us up — and
              influencers like you make a HUGE difference. Any peeps with a
              couple thousand followers or more, come by and show us some love!
              You get something cool and unique for your world, we get a little
              boost for ours… everybody wins!
            </p>
            <p className="text-lg font-secondary text-white mb-8 leading-5 p-1">
              Come by! We'd love to have you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
