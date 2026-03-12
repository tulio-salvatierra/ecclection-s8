"use client";

import { useFadeAnimation } from "@/hooks/useFadeAnimtion";
import { renderPunkTitle } from "@/lib/punk-typography";
import React from "react";

export default function DisclaimerSection() {
  const ref = React.useRef(null);
  useFadeAnimation(ref);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[100svh] md:h-screen py-16 md:py-24 border-t-2 border-b-2 border-black overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/image.png')" }}
      />
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />
      <div className="relative z-10 sm:w-3/4 mx-auto p-5 md:p-8 h-full flex flex-col justify-center">
        {renderPunkTitle("🥳🥳🥳 Welcome Surpies!!! 🎉🎉🎉", "text-5xl sm:text-7xl mb-3 text-white font-brand mb-8 text-center fade-in")}
        <p className="fade-in text-xl sm:text-2xl text-white mb-3 font-brand w-full sm:w-1/2 mx-auto text-left mb-6 md:mb-8 fade-in">
          We are back in business! We are open from Wednesday to Sunday from
          11am - 5pm
        </p>

        <p className="fade-in text-xl sm:text-2xl text-white mb-3 w-full sm:w-1/2 mx-auto text-left fade-in">
          We are excited to see you all again! Specially after acquiring a large
          inventory from the historic American Science & Surplus store! So many
          cool items that won't end up in the landfill! Bring your bags and come
          dig around!
        </p>
      </div>
    </section>
  );
}
