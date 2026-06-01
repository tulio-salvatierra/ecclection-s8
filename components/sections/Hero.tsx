"use client";

import { renderPunkTitle } from "@/lib/punk-typography";
import { useFadeAnimation } from "@/app/hooks/useFadeAnimtion";
import { useSpawnImagesOnMove } from "@/app/hooks/useSpawnImagesOnMove";
import { CAROUSEL_IMAGES } from "@/data/carouselImages";
import React, { useRef } from "react";

import ShinyText from "@/components/ShinyText";
import "@/components/SpawnImages.css";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  useFadeAnimation(ref);
  useSpawnImagesOnMove(ref, CAROUSEL_IMAGES);

  return (
    <section
      ref={ref}
      className="spawn-images-root relative mt-12 min-h-[85vh] text-center overflow-hidden"
    >
      <div className="relative z-10">
        {renderPunkTitle(
          "Step Into Ecclection",
          "text-[4.5rem] md:text-[10rem] fade-in ",
          "leading-none font-extrabold tracking-wider",
          "text-cyan-400",
        )}
        <ShinyText
          text="A whimsical treasure trove in Portage Park..."
          speed={4.4}
          delay={0.2}
          color="#06B6D4"
          shineColor="#ffffff"
          spread={155}
          direction="left"
          yoyo
          pauseOnHover={false}
          disabled={false}
        />
        <p className="fade-in sm:w-1/2 mt-8 mb-4 text-left mx-auto font-inter text-xl md:text-2xl text-white p-2">
          Where you lose yourself in{" "}
          <ShinyText
            text="AFFORDABLE"
            color="#06B6D4"
            shineColor="#ffffff"
            spread={155}
            direction="left"
            yoyo
            pauseOnHover={false}
            disabled={false}
          />{" "}
          local art, rescued and vintage treasures, American Science Surplus
          Salvage, as well as Funky Fashions and Tees, Gag Gifts, Jewelry and so
          much{" "}
          <ShinyText
            text="MORE!!!"
            color="#06B6D4"
            shineColor="#ffffff"
            spread={155}
            direction="left"
            yoyo
            pauseOnHover={false}
            disabled={false}
          />
          
        </p>

        <div className="relative grid h-full place-items-center text-center px-4">
          <div className="max-w-3xl fade-in">
            <a
              className="relative z-20 inline-block p-8 mt-28 hover:rotate-[5deg] transition-all duration-300 col-span-2 mx-auto origin-top-left text-white font-brand text-2xl rounded-md bg-cyan-600/80"
              href="https://maps.app.goo.gl/ZMgVyGzAmNvomLMcA"
            >
              Delve into Ecclection!
            </a>
          </div>
        </div>
      </div>

      <div className="spawn-images-preload" aria-hidden>
        {CAROUSEL_IMAGES.map((src) => (
          <img key={src} src={src} alt="" />
        ))}
      </div>
    </section>
  );
}
