"use client";

// components/sections/Hero.tsx

import { useFadeAnimation } from "@/hooks/useFadeAnimtion";
import React, { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useFadeAnimation(ref);

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden top-0"
    >
      <video
        className="absolute inset-0 h-screen w-screen object-cover object-center"
        src="/Ecclection_hero.mp4"
        poster="/store.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onLoadedData={(e) => {
          const video = e.currentTarget;
          if (video.readyState >= 2) {
            video.play().catch(() => {});
          }
        }}
      />

      <div className="absolute inset-0 bg-black/70 h-full w-screen" />

      <div className="pb-12 relative z-10 min-h-[100svh] md:h-screen w-screen mx-auto md:w-2/3 flex flex-col items-end justify-end px-4 pt-20 md:pt-0 text-center">
        <h1 className="text-5xl md:text-6xl leading-tight font-extrabold tracking-tight text-cyan-400 fade-in mb-4">
          A Wonderfully Weird Vintage &amp; Variety Shop in Chicago
        </h1>
        <p className="fade-in mt-2 mb-6 text-left mx-auto text-xl md:text-2xl text-white">
          We rescue beautiful, useful, and delightfully strange things, give
          them a second life, and fill the shop with local art, gifts, games,
          and treasures you won’t find on a boring screen, right here in Portage Park.
        </p>

        <a
          className="p-4 fade-in md:p-6 mt-6 hover:rotate-[-15deg] transition-all duration-300 col-span-2 mx-auto origin-top-left text-white text-lg md:text-2xl rounded-md bg-cyan-600/80"
          href="https://maps.app.goo.gl/ZMgVyGzAmNvomLMcA"
        >
          Come Dig Around!
        </a>
      </div>
    </section>
  );
}
