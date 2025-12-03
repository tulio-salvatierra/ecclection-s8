"use client";

// components/sections/Hero.tsx
import { renderPunkTitle } from "@/lib/punk-typography";
import { useFadeAnimation } from "@/app/hooks/useFadeAnimtion";
import React, { useRef } from "react";

  type HeroProps = {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
};

export function Hero({
  title,
  subtitle,
  backgroundImage,
  className,
}: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  useFadeAnimation(ref);

  return (
    <section ref={ref} className={`relative mt-12 ${className ?? ""}`}>
      {renderPunkTitle(
        title,
        "text-[5.5rem] md:text-[14rem] fade-in ",
        "leading-none font-extrabold tracking-tight",
        "text-cyan-400"
      )}

      <p className="fade-in sm:w-1/2 mt-8 mb-4 text-left mx-auto font-brand text-xl md:text-2xl text-white p-2">
        {subtitle}
      </p>

      <div className="relative h-[70vh] min-h-[580px] w-[95%] mx-auto rounded-[14px] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover object-top"
          src="/Ecclection_hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={(e) => {
            const video = e.currentTarget;
            if (video.readyState >= 2) {
              video.play().catch(() => {});
            }
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-black/15" />

        <div className="relative z-10 grid h-full place-items-center text-center px-4">
          <div className="max-w-3xl fade-in">
            {subtitle && (
              <a
                className="p-8 mt-28 hover:rotate-[5deg] transition-all duration-300 col-span-2 mx-auto origin-top-left text-white font-brand text-2xl rounded-md bg-cyan-600/80"
                href="https://maps.app.goo.gl/ZMgVyGzAmNvomLMcA"
              >
                Come Dig Around!
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}