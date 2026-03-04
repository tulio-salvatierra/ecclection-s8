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
    }, 8000); 

    return () => clearInterval(interval);
  }, [artists.length]);

  return (
    <section ref={ref} className="w-screen h-auto">
      <div className="fade-in mt-16 grid grid-cols-1 items-center container section-pad">
        {renderPunkTitle(
          "Meet the Artists",
          "text-3xl md:text-4xl",
          "mb-6",
          "text-white"
        )}
        <p className="fade-in mt-2 text-xl text-white w-full sm:w-3/4 mx-auto text-left leading-6">
          Here’s a little peek at the wonderfully unique, talented humans who help  
          make Ecclection  what it is. We usually have over a dozen artisans and 
          artists work available- from handcrafted jewelry, painters, to photography,
          crochet work, homemade patches and pins and so much more! We do rotate our
          art cubbies & feature a “Local Artist’s window Gallery- where we include
          pieces from each and every artisan. 
          <br /><br />
          Rental Spaces start at only $20/month
          so we can help provide exposure to the community while offering a space 
          for people to come in  and see, feel, touch or smell and of course BUY 
          your creations. It’s SO much better than ordering off a BORING screen!! 
          Feel free to inquire if you or someone you know may be interested in a 
          display space!
        </p>
      </div>
      <div className="relative grid md:grid-cols-2 sm:gap-1 gap-1 container min-h-auto items-center">
        {/* Left: Tilted Frame with Portrait */}
        <div className="relative flex items-center justify-center">
          {/* Vertical Text */}
          <div className=" absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
            <p className="fade-in font-brand text-lg tracking-wide text-white uppercase ml-4 whitespace-nowrap">
              Meet the Artists
            </p>
          </div>

          {/* Tilted Frame with Transition */}
          <div className="relative w-80 max-w-sm sm:ml-12">
            <div className="fade-in relative rotate-2 bg-cyan-600 w-[310px] h-[310px] p-2border-2 border-black shadow-[8px_8px_0_0_#000]">
              <div className="grid items-center mt-auto mb-auto overflow-hidden w-[289px] h-[289px]">
                {" "}
                {/* Enforce fixed width and height */}
                {currentArtist.image ? (
                  <img
                    key={currentIndex}
                    src={currentArtist.image}
                    alt={currentArtist.name}
                    className="fade-in object-center fixed w-[290px] ml-2 mt-2 h-[290px] object-cover animate-in duration-500"
                  />
                ) : (
                  <div className="fade-in w-full h-full flex items-center justify-center text-6xl">
                    🎨
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Text Content with Transition */}
        <div className="flex flex-col justify-center space-y-1 h-[600px]">
          <p className="fade-in font-brand text-sm tracking-wide text-cyan-400 uppercase">
            Featured Artists
          </p>

          <div
            key={`content-${currentIndex}`}
            className="fade-in slide-in-from-right-4 duration-500"
          >
            <h2 className="fade-in font-brand text-4xl md:text-5xl lg:text-6xl text-cyan-500 leading-tight text-balance mb-6">
              {currentArtist.name}
            </h2>

            <p className="fade-in text-xl text-white leading-5 max-w-lg mb-8 line-clamp-3">
              {currentArtist.bio}
            </p>
            <p className="fade-in text-base text-white leading-5s\ max-w-lg mb-8">
              {currentArtist.specialty && (
                <strong className="text-cyan-500">
                  Specialty: {currentArtist.specialty}
                </strong>
              )}
            </p>
            {currentArtist.social?.instagram && (
              <button
                onClick={() => {
                  window.location.href =
                    "https://www.instagram.com/" +
                    (currentArtist.social?.instagram || "");
                }}
                className="fade-in inline-block rounded-md bg-cyan-600 text-black font-bold px-6 py-3 border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                Instagram
              </button>
            )}
          </div>

          <div className="fade-in flex items-center gap-6">
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
                    className={`h-2 rounded-full transition-all border border-black ${index === currentIndex
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
