"use client";
import { useFadeAnimation } from "@/hooks/useFadeAnimtion";
import { useState, useEffect } from "react";
import { renderPunkTitle } from "@/lib/punk-typography";
import React from "react";
import { Button } from "@/components/ui/button";

interface Artist {
  id: number;
  name: string;
  specialty?: string;
  bio?: string;
  image?: string;
  featured?: boolean;
  social?: { instagram?: string; website?: string };
}

interface ArtistCarouselProps {
  artists: Artist[];
}

export function ArtistCarousel({ artists }: ArtistCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = React.useRef(null);
  useFadeAnimation(ref);

  const nextArtist = () => {
    setCurrentIndex((prev) => (prev + 1) % artists.length);
  };

  const prevArtist = () => {
    setCurrentIndex((prev) => (prev - 1 + artists.length) % artists.length);
  };

  if (!artists || artists.length === 0) {
    return (
      <section className="container section-pad min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">
          No artists available at the moment.
        </p>
      </section>
    );
  }

  const currentArtist = artists[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      nextArtist();
    }, 8000);

    return () => clearInterval(interval);
  }, [artists.length]);

  return (
    <section ref={ref} className="w-screen min-h-[100svh] md:h-screen grid items-center py-10 md:py-0">
      <div className="fade-in mt-8 md:mt-16 flex flex-col items-center container section-pad">
        {renderPunkTitle(
          "Meet the Artists",
          "text-5xl md:text-7xl",
          "mb-6",
          "text-white",
        )}
        <p className="fade-in mt-2 text-xl sm:text-2xl text-white w-full sm:w-3/4 mx-auto text-left ">
          Meet the wonderfully weird and wildly talented humans that make
          Eclection what it is.
          <br />
          <br />
          We’re packed with rotating work from local artists—jewelry,
          paintings, photography, crochet, patches, pins… and a few things we
          can’t quite explain (but love anyway).
          <br />
          <br />
          Our artist cubbies and front window are always shifting, so no two
          visits feel the same.
        </p>
        <p className="fade-in mt-2 text-xl sm:text-2xl text-white w-full sm:w-3/4 mx-auto text-left">
          Got something to show?
          <br />
          <br />
          Rental spaces start at $20/month.
          <br />
          <br />
          Your work gets seen, touched, and actually bought—no endless
          scrolling required.
          <br />
          <br />
          Come join the chaos.
        </p>
        <a
          className="p-4 fade-in md:p-6 mt-6 hover:rotate-[-15deg] transition-all duration-300 col-span-2 mx-auto origin-top-left text-white text-xl md:text-2xl rounded-md bg-cyan-600/80"
          href="/artists"
        >
          Read More here!
        </a>
      </div>
    </section>
  );
}
