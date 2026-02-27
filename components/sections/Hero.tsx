"use client";

// components/sections/Hero.tsx
import { renderPunkTitle } from "@/lib/punk-typography";
import { useFadeAnimation } from "@/app/hooks/useFadeAnimtion";
import React, { useRef } from "react";



export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useFadeAnimation(ref);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[580px] overflow-hidden"
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

      <div className="relative z-10 h-full w-full md:w-1/2 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="sm:text-[8rem] text-[5rem] fade-in leading-none font-extrabold tracking-tight text-cyan-400">Welcome to Ecclection</h1>
        <p className="fade-in mt-8 mb-6 text-left mx-auto text-xl md:text-2xl text-white">
          A true variety store in Portage Park – packed with local art, rescued
          treasures, gag gifts, funky tees & SO much more… where EVERYONE is
          welcome & it won't break the bank.
        </p>

        <a
          className="p-4 md:p-6 mt-6 hover:rotate-[5deg] transition-all duration-300 col-span-2 mx-auto origin-top-left text-white text-xl md:text-2xl rounded-md bg-cyan-600/80"
          href="https://maps.app.goo.gl/ZMgVyGzAmNvomLMcA"
        >
          Come Dig Around!
        </a>
      </div>
    </section>
  );
}