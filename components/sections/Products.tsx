'use client';
import Image from "next/image";
import { useFadeAnimation } from "@/hooks/useFadeAnimtion";
import React, { useRef } from "react";
import { renderPunkHeading } from "@/lib/punk-typography";

export function ProductsShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  useFadeAnimation(ref);
  const categories = [
    {
      title: "Art pieces and projects",
      description: "Proudly displayed.",
      image: "/products/cubbies.jpg",
      video: "",
    },
    {
      title: "Cool clothing corner",
      description: "Curated “Cool clothing  Corner” where we feature hip, designer, vintage & (mostly black) clothing with all inclusive sizing from XS-XXXL",
      image: "",
      video: "/products/shirts.mp4",
    },
    {
      title: "Vintage items from the yesteryear",
      description: "From vintage hand bags, old Mad magazines to collectable China & music boxes- you never know what unexpected gems you’ll find",
      image: "/products/vint.jpg",
      video: "",
    },
    {
      title: "Boots, Platforms & Power Shoes",
      description:
        "Stompers, loafers, creepers, and sky-high platforms. Demonias and Doc Martens included.",
      image: "/products/boots.jpeg",
      video: "",
    },
  ];

  return (
    <section ref={ref} className="py-4 px-4 mt-18 md:px-8 max-w-full h-screen overflow-hidden">
      <div className="w-full mx-auto h-full flex flex-col">
        <div className="mb-6 text-center shrink-0">
          {renderPunkHeading("Curated Treasures & Curious Finds", "fade-in text-5xl sm:text-7xl text-cyan-500 mb-4", "text-center", "text-white", "large")}
          <p className="fade-in text-2xl text-white text-left max-w-3xl mx-auto">
            Come rummage through the good stuff: rescued vintage gems, odd
            little beauties, useful home finds, playful gifts, old-school cool,
            and handmade pieces from local artists.
          </p>
          <p className="fade-in text-2xl text-white text-left max-w-3xl mx-auto mt-4">
            Some things are practical. Some are weird. Some are both. That&apos;s
            the fun of Ecclection — you walk in for one thing and leave with a
            treasure you didn&apos;t know your heart needed.
          </p>
        </div>

        <div className="grid items-stretch justify-center grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4 w-full mx-auto flex-1 min-h-0">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative fade-in overflow-hidden border-2 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all h-full min-h-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-full h-full rounded-sm overflow-hidden mx-auto bg-black">
                {category.video ? (
                  <video
                    src={category.video}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-70">
                <h3 className="font-brand text-cyan-500 sm:text-2xl font-bold sm:mb-2 fade-in">
                  {category.title}
                </h3>
                <p className="text-white text-lg hidden sm:block fade-in">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
