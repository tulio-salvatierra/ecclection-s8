"use client";

import React from "react";
import { useFadeAnimation } from "@/hooks/useFadeAnimtion";
import { Button } from "@/components/ui/button";
import { SOCIAL_URLS } from "@/lib/constants";
import UnicornScene from "unicornstudio-react";
import { renderPunkTitle } from "@/lib/punk-typography";

export function Intro() {
  const ref = React.useRef(null);
  useFadeAnimation(ref);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] md:h-screen text-primary-foreground py-10 md:py-0"
    >
      {/* Intro-only Unicorn scene */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <UnicornScene
          projectId="95YfqwiaGdM8x64MxM4K"
          width="100%"
          height="100%"
          scale={1}
          dpi={1.5}
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.4/dist/unicornStudio.umd.js"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-black/35" />

      {/* Main content */}
      <div className="relative z-10 px-4">
        <div className="flex mx-auto min-h-[100svh] md:h-screen items-stretch gap-4">
          {/* Left side - Text content */}
          <div className="p-2 flex-1 flex flex-col justify-end">
            {/* Eyebrow text */}
            

            {/* Main headline */}
            {/* <h2 className="mx-auto text-4xl sm:text-7xl font-brand font-black text-cyan-300/10 leading-none mb-4 text-balance fade-in display-none">
              WE ARE ECCLECTION
            </h2> */}

            {/* Description */}
            <div className="mx-auto sm:max-w-2xl mb-12 md:mb-8 mt-10">
            <div className="mb-2 md:my-6 fade-in text-center">
              <span className="mx-auto inline-block border border-primary-foreground px-4 py-2 text-base md:text-lg font-brand rounded-sm tracking-wider">
                SINCE 2023
              </span>
            </div>
              <p className="text-sm sm:text-2xl text-primary-foreground/90 fade-in">
                We’re a wonderfully weird Chicago shop where old things, odd
                things, useful things, and beautiful things get a second life.
                Think vintage gems, antiques, local maker goods, home finds,
                games, gifts, and all kinds of curious treasures.
                <br />
                <br />
                Come explore in person — see it, touch it, feel it, and find
                something that feels like it was waiting just for you. Everyone
                is welcome, every budget is loved, and the magic is in the hunt.
                <br />
                <br />
                We recently acquired a large inventory from the historic American Science &
                Surplus store so... 
              </p>
              
              
            </div>
            {renderPunkTitle("🥳🥳🥳 Welcome Surpies!!! 🎉🎉🎉", "mt-5 sm:mt-10 text-3xl sm:text-5xl mb-3 text-white font-brand sm:mb-8 text-center fade-in")}
            {/* CTA Buttons */}
            <div className="flex flex-col fade-in sm:flex-row justify-center items-center">
              <a
                href={`${SOCIAL_URLS.googleMaps.toString()}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="xl"
                  className="mx-auto bg-cyan-500 hover:bg-accent/90 text-accent-foreground text-base md:text-lg px-8 py-6 font-brand tracking-wide"
                >
                  JUST COME IN ALREADY!
                </Button>
              </a>
            </div>

            <div className="mt-20 md:mt-20 fade-in text-center">
              <p className="text-base justify-center sm:text-xl font-brand tracking-widest uppercase">
                where portage park community, local art & second-life finds come
                together
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
