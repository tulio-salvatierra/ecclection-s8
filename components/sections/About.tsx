"use client";
// components/sections/About.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { useFadeAnimation } from "@/app/hooks/useFadeAnimtion";
import { ScrollBanner } from "../sections/ScrollBanner/ScrollBanner";

interface AboutProps {
  title?: string;
  content?: string;
  image?: {
    src: string;
    alt: string;
  };
  features?: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  className?: string;
}

export function About({
  title,
  content,
  image,
  features = [],
  className = "",
}: AboutProps) {
  const ref = React.useRef<HTMLElement>(null);
  useFadeAnimation(ref);

  return (
    <section ref={ref} className={`container section-pad ${className}`}>
      <div className="text-center mb-12">
        <h2 className="fade-in text-3xl md:text-4xl font-bold text-cyan-600 font-brand mb-4">
          {title}
        </h2>
        {content && (
          <p className="fade-in text-md leading-6  text-white text-left max-w-3xl sm:w-1/2 mx-auto">
            Ecclection is a little WONDERLAND in Portage Park — a cozy, quirky
            spot where rescued treasures, vintage oddities, handmade goods &
            creative chaos all live happily together.
            <br />
            <br />
            We proudly showcase <strong>rotating displays</strong> from amazing
            local artists & makers, giving them space to shine and connect with
            the community. From candles and jewelry to wellness goodies,
            mixed-media art, décor and one-of-a-kind accessories — everything is
            chosen with love, curiosity & plenty of personality. <br />
            <br />
            It’s a neighborhood hub for imagination, creativity & human
            connection… a place to refresh your space, mingle with makers,
            escape the headlines of the day, or simply pop in for a good chat &
            a spark of joy.
          </p>
        )}
        {image && (
          <div className="mt-8 fade-up">
            <img
              src="./portrait.jpeg"
              alt={image.alt}
              className="fade-in mx-auto rounded-lg shadow-lg w-full max-w-md border-2 border-black"
            />
          </div>
        )}
        <a
          href="/about"
          rel="_self"
          className="fade-up inline-block mt-4 px-8 py-4 bg-cyan-600 text-black font-brand text-lg rounded-lg border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          Read more about us!
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="p-6 text-center bg-cyan-600 border-2 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-black font-brand mb-3">
              {feature.title}
            </h3>
            <p className="text-black">{feature.description}</p>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center overflow-hidden">
       <ScrollBanner />
      </div>
    </section>
  );
}
