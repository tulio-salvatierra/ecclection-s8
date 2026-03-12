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
      className="relative min-h-[100svh] md:h-screen md:min-h-[580px] overflow-hidden top-0 md:top-[-150px]"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover object-top"
        src="/Ecclection_hero.mp4"
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

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 min-h-[100svh] md:h-screen w-full mx-auto md:w-2/3 flex flex-col items-center justify-center px-4 pt-20 md:pt-0 text-center">
        <h1 className="text-4xl md:text-6xl leading-tight font-extrabold tracking-tight text-cyan-400 fade-in">
          A Wonderfully Weird Vintage &amp; Variety Shop in Chicago
        </h1>
        <p className="fade-in mt-2 text-[1.5rem] md:text-[2rem] mb-6 text-left mx-auto text-xl md:text-2xl text-white">
          We rescue beautiful, useful, and delightfully strange things, give
          them a second life, and fill the shop with local art, gifts, games,
          and treasures you won’t find on a boring screen.
        </p>

        <a
          className="p-4 fade-in md:p-6 mt-6 hover:rotate-[-15deg] transition-all duration-300 col-span-2 mx-auto origin-top-left text-white text-xl md:text-2xl rounded-md bg-cyan-600/80"
          href="https://maps.app.goo.gl/ZMgVyGzAmNvomLMcA"
        >
          Come Dig Around!
        </a>
      </div>
    </section>
  );
}
