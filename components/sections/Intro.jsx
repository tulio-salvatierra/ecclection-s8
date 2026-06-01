"use client";

import React from "react";
import { useFadeAnimation } from "@/app/hooks/useFadeAnimtion";
import { Button } from "@/components/ui/button";
import { SOCIAL_URLS } from "@/lib/constants";

export function Intro() {
  const ref = React.useRef(null);
  useFadeAnimation(ref);

  return (
    <section
      ref={ref}
      className="relative min-h-screen mt-12 text-primary-foreground overflow-hidden"
    >
      <video
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-top"
        src="/Ecclection_hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/45 to-black/15"
        aria-hidden
      />

      <div className="relative fade-in z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto">
          <div className="flex-1">
            <div className="mb-8 md:mb-12">
              <span className="inline-block border border-primary-foreground px-4 py-2 text-base md:text-lg font-brand rounded-sm tracking-wider">
                SINCE 2023
              </span>
            </div>

            <h2 className="text-5xl font-brand md:text-7xl lg:text-8xl font-black text-cyan-500 leading-none tracking-wider mb-8 md:mb-12 text-balance">
              WE ARE ECCLECTION
            </h2>

            <div className="sm:max-w-2xl mb-12 md:mb-16">
              <p className="text-md leading-6 text-primary-foreground/90">
                We’re all about self-expression, sustainability & that spark of
                WONDERMENT — you never really know what you’ll find @
                Ecclection, and that’s the magic.
                <br />
                <br />
                <strong> EVERYONE</strong> is welcome & every budget is loved —
                with fun finds starting at just <strong>.95 CENTS</strong>{" "}
                (often cheaper than the darn dollar store… no tariff drama
                here!).
              </p>
            </div>

            <div className="flex flex-col fade-in sm:flex-row">
              <a
                href={`${SOCIAL_URLS.googleMaps.toString()}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-cyan-500 hover:bg-accent/90 text-accent-foreground text-base md:text-lg px-8 py-6 font-brand tracking-wide"
                >
                  JUST COME IN ALREADY!
                </Button>
              </a>
            </div>

            <div className="mt-20 md:mt-32 fade-in ">
              <p className="text-xl font-brand tracking-widest uppercase">
                where community meets art, odd or forgotten treasures & good
                vibes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
