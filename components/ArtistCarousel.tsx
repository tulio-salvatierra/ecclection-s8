"use client";
import { useFadeAnimation } from "@/app/hooks/useFadeAnimtion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { renderPunkTitle } from "@/lib/punk-typography";
import React from "react";

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
    }, 3000); // Auto-advance every 8 seconds
    
    return () => clearInterval(interval);
  }, [artists.length]);

  return (
    <section ref={ref} className="w-screen h-screen">
      <div  className="fade-in mt-16 grid grid-cols-1 items-center container section-pad">
        {renderPunkTitle("Meet the Artists", "text-3xl md:text-4xl", "mb-6", "text-white")}
        <p className=" mt-4 text-white w-full sm:w-1/2 mx-auto text-left">
          Look at sample of the talented artists featured at Ecclection. We
          showcase a number of well curated pieces and collections from our local artists, most of them
          are with us for a long time, only a few rotate which keeps things
          interesting and exciting for us and our customers.
        </p>
        <p className=" text-white w-full sm:w-1/2 mt-4 mx-auto text-left">
          Our featured artists come from diverse backgrounds and styles. If you
          are an artist interested in being featured, please reach out to us
          through our contact page. We offer affordable spaces <strong className="text-cyan-500">(starts at
          $20/month)</strong> for artists to showcase their work in our store and join
          our community.
        </p>
      </div>
      <div className="relative grid md:grid-cols-2 gap-12 container section-pad min-h-auto items-center">
        {/* Left: Tilted Frame with Portrait */}
        <div className="relative flex items-center justify-center">
          {/* Vertical Text */}
          <div className=" absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
            <p className="font-brand text-lg tracking-wide text-white uppercase ml-4 whitespace-nowrap">
              Meet the Artists
            </p>
          </div>

          {/* Tilted Frame with Transition */}
          <div className="relative w-80 max-w-sm sm:ml-12">
            <div className="relative rotate-2 bg-cyan-600 p-3 border-2 border-black shadow-[8px_8px_0_0_#000]">
              <div className="aspect-[3/4] bg-black overflow-hidden">
                {currentArtist.image ? (
                  <img
                    key={currentIndex}
                    src={currentArtist.image}
                    alt={currentArtist.name}
                    className="w-80 h-full object-cover animate-in duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    🎨
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Text Content with Transition */}
        <div className="flex flex-col justify-center space-y-6">
          <p className="font-brand text-sm tracking-wide text-cyan-400 uppercase">
            Featured Artists
          </p>

          <div
            key={`content-${currentIndex}`}
            className="animate-in slide-in-from-right-4 duration-500"
          >
            <h2 className="font-brand text-4xl md:text-5xl lg:text-6xl text-cyan-500 leading-tight text-balance mb-6">
              {currentArtist.name}
            </h2>

            <p className="text-base text-white leading-relaxed max-w-lg mb-8">
              {currentArtist.bio}
            </p>
            <p className="text-base text-white leading-relaxed max-w-lg mb-8">
              {currentArtist.specialty && (
                <strong className="text-cyan-500">
                  Specialty: {currentArtist.specialty}
                </strong>
              )}
            </p>
            <button
              onClick={() => {
                window.location.href = "https://www.instagram.com/" + (currentArtist.social?.instagram || "");
              }}
              className="inline-block rounded-md bg-cyan-600 text-black font-bold px-6 py-3 border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Instagram
            </button>

          </div>

          <div className="flex items-center gap-6">
            {/* Navigation Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevArtist}
                className="p-2 bg-cyan-600 border-2 border-black text-black hover:bg-cyan-400 transition-colors shadow-[3px_3px_0_0_#000]"
                aria-label="Previous artist"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {artists.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all border border-black ${
                      index === currentIndex
                        ? "bg-cyan-600 w-6"
                        : "bg-cyan-600/30 w-2"
                    }`}
                    aria-label={`Go to artist ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextArtist}
                className="p-2 bg-cyan-600 border-2 border-black text-black hover:bg-cyan-400 transition-colors shadow-[3px_3px_0_0_#000]"
                aria-label="Next artist"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
