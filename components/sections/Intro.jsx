"use client";

import React from "react";
import { useFadeAnimation } from "@/hooks/useFadeAnimtion";
import { Button } from "@/components/ui/button";
import { SOCIAL_URLS } from "@/lib/constants";

export function Intro() {
  const ref = React.useRef(null);
  useFadeAnimation(ref);

  return (
    <section
      ref={ref}
      className="relative h-screen text-primary-foreground"
    >
      {/* Background texture overlay */}

      {/* Main content */}
      <div className="relative z-10 px-4">
        <div className="flex mx-auto h-screen items-stretch gap-4">
          {/* Left side - Text content */}
          <div className="p-2 flex-1 flex flex-col justify-center">
            {/* Eyebrow text */}
            <div className="mb-2 md:mb-12 fade-in mx-auto">
              <span className="inline-block border border-primary-foreground px-4 py-2 text-base md:text-lg font-brand rounded-sm tracking-wider">
                SINCE 2023
              </span>
            </div>

            {/* Main headline */}
            <h2 className="mx-auto text-5xl sm:text-7xl font-brand font-black text-cyan-300 leading-none mb-4 text-balance fade-in">
              WE ARE ECCLECTION
            </h2>

            {/* Description */}
            <div className="mx-auto sm:max-w-2xl mb-12 md:mb-16">
              <p className="text-2xl text-primary-foreground/90 fade-in">
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

            <div className="mt-20 md:mt-32 fade-in mx-auto">
              <p className="text-xl font-brand tracking-widest uppercase">
                where community meets art, odd or forgotten treasures & good
                vibes
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full">
        <video
          src="/clothes.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      </div>
    </section>
  );
}
