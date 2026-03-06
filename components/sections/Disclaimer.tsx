"use client";

import { useFadeAnimation } from "@/hooks/useFadeAnimtion";
import React from "react";

export default function DisclaimerSection() {
  const ref = React.useRef(null);
  useFadeAnimation(ref);

  return (
    <section ref={ref} className="w-full h-auto py-24 border-t-2 border-b-2 border-black bg-black/30 backdrop-blur-2xl">
      <div className="fade-in sm:w-3/4 mx-auto p-8">
        <h2 className="fade-in font-brand text-5xl sm:text-7xl mb-3 text-white">
          About our artwork & AI
        </h2>

        <p className="fade-in text-2xl text-white mb-3">
          Ecclection proudly supports REAL, local artists. Our murals, photo
          ops, visuals, web design & all the fun creative stuff are made by
          humans in our community — never machines.
        </p>

        <p className="fade-in text-2xl text-white mb-3">
          We may use AI here on occasion, when making flyers or print work’s.
          Its simply used as a tool-I’m not asking it for ideas or having 
          deep conversations or relationships with it either!!
        </p>
        <p className="fade-in text-2xl text-white mb-6">
          By browsing our site, you’re supporting human-made art, local creators
          & the beautifully imperfect magic only real people make.
        </p>
      </div>
    </section>
  );
}
