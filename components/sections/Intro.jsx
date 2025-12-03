"use client";

import Link from "next/link";
import React from "react";
import { useFadeAnimation } from "@/app/hooks/useFadeAnimtion"; 
import { Button } from "@/components/ui/button";
import { SOCIAL_URLS } from "@/lib/constants";

export function Intro() {
  const ref = React.useRef(null);
  useFadeAnimation(ref);

  return (
    <section ref={ref} className="relative min-h-auto bg-black/40  text-primary-foreground overflow-hidden">
      {/* Background texture overlay */}

      {/* Main content */}
      <div className="relative fade-in z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Left side - Text content */}
          <div className="flex-1">
            {/* Eyebrow text */}
            <div className="mb-8 md:mb-12">
              <span className="inline-block border border-primary-foreground px-4 py-2 text-base md:text-lg font-brand rounded-sm tracking-wider">
                SINCE 2023
              </span>
            </div>

            {/* Main headline */}
            <h2 className="text-5xl font-brand md:text-7xl lg:text-8xl font-black text-cyan-500 leading-normal mb-8 md:mb-12 text-balance">
              WE ARE ECCLECTION
            </h2>

            {/* Description */}
            <div className="max-w-2xl mb-12 md:mb-16">
              <p className="text-md md:text-2xl leading-normal text-primary-foreground/90">
                A true variety store in the heart of Portage Park, stuffed with local art, rescued treasures, vintage oddities, gag gifts & graphic tees for kiddos, teens and grown-ups alike. {" "}
                <strong>EVERYONE</strong> is welcome here & every budget is loved — with fun finds starting at just <strong>.95 CENTS</strong>{" "}
                that are often cheaper than the darn dollar store (and with no tariff drama here!). <br /><br />
                We’re all about self-expression, sustainability, human engagement and that feeling of true WONDERMENT — you never really know what you’ll find @ Ecclection, and that’s the fun of it!
              </p>
            </div>

            {/* CTA Buttons */}
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
                where community meets art, odd treasures & good weird vibes
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-2 h-full">
              {/* Top left - Image placeholder */}
              <div className="rounded-md justify-end shadow-lg relative aspect-square bg-primary-foreground/10 border-2 border-primary-foreground/20 overflow-hidden group hover:border-accent transition-colors">
                <video
                  className="w-full h-full object-cover group-hover:opacity-100 transition-opacity"
                  autoPlay
                  loop
                  muted
                  playsInline
                  
                >
                  <source src="/clothes.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Top right - Image placeholder */}
              <div className="rounded-md shadow-lg relative aspect-square bg-primary-foreground/10 border-2 border-primary-foreground/20 overflow-hidden group hover:border-accent transition-colors">
                <img
                  src="/3pics/vintage.jpeg"
                  alt="Vintage band tees"
                  className="w-full h-full object-cover group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Bottom left - Video placeholder */}
              <div className="rounded-md shadow-lg relative aspect-square bg-primary-foreground/10 border-2 border-primary-foreground/20 overflow-hidden group hover:border-accent transition-colors">
                <img
                  src="/3pics/shelf.jpeg"
                  alt="Gothic accessories"
                  className="w-full h-full object-cover group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-2 border-primary-foreground/50 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary-foreground/50 border-b-8 border-b-transparent ml-1" />
                  </div>
                </div>
              </div>

              {/* Bottom right - Image placeholder */}
              <div className="rounded-md relative shadow-lg aspect-square bg-primary-foreground/10 border-2 border-primary-foreground/20 overflow-hidden group hover:border-accent transition-colors">
                <video
                  className="w-full h-full object-cover group-hover:opacity-100 transition-opacity"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/shelves_1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
