"use client";

// components/sections/Hero.tsx

import { useFadeAnimation } from "@/app/hooks/useFadeAnimtion";
import React, { useRef } from "react";



export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useFadeAnimation(ref);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[580px] overflow-hidden top-[-150px]"
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

      <div className="relative z-10 h-full w-full mx-auto md:w-1/2 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="sm:text-[12rem] text-[4.5rem] fade-in leading-none font-extrabold tracking-tighter text-pink-500"><span className="font-['Mrs_Saint_Delafield'] text-pink-500">Welcome to</span> <span className="text-cyan-400">ECCLECTION</span></h1>
        <p className="fade-in mt-2 text-[1.5rem] md:text-[2rem] mb-6 text-left mx-auto text-xl md:text-2xl text-white">
          A true variety store in Portage Park – packed with local art, rescued
          treasures, gag gifts, funky tees & SO much more… where EVERYONE is
          welcome & it won't break the bank.
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