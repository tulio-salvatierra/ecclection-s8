"use client";
import { useFadeAnimation } from "@/hooks/useFadeAnimtion";
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
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay",
      }}
      className="w-full max-w-full flex transition-all duration-300 hover:h-screen hover:w-full justify-between section-pad fade-in overflow-hidden">
      <div className=" text-[#111111] h-auto w-full px-4">
        <h2 className="fade-in text-6xl sm:text-8xl font-brand text-white leading-none p-1">CALLING ANY INFLUENCERS 📣</h2>
        <div className=" sm:mt-5 h-full grid grid-cols-1 md:grid-cols-2 items-start justify-between gap-10">
          <div
            className="w-full h-[8vh] mx-auto items-start"
            style={{ backgroundImage: `url(/Artists_spot.mp4)` }}
          >
            <video
              src="/Artists_spot.mp4"
              className="rounded-l-md object-fit w-full h-auto mx-autofade-in"
              autoPlay
              loop
              muted
            />
          </div>

          {/* Right: copy + button */}
          <div className="flex flex-col justify-center">
            <p className="fade-in text-2xl sm:text-3xl font-brand text-white leading-none p-1">
              We’d love to have you at Ecclection! Funky little businesses like
              ours stick around because the community lifts us up — and
              influencers like you make a HUGE difference. Any peeps with a
              couple thousand followers or more, come by and show us some love!
              You get something cool and unique for your world, we get a little
              boost for ours… everybody wins!
            </p>
            <p className="fade-in text-xl sm:text-2xl font-secondary text-white mb-8 leading-none p-1">
              Come by! We'd love to have you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
