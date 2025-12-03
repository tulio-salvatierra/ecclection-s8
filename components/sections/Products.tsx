'use client';
import Image from "next/image";
import { useFadeAnimation } from "@/app/hooks/useFadeAnimtion";
import React, { useRef } from "react";

export function ProductsShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  useFadeAnimation(ref);
  const categories = [
    {
      title: "Featured local artist spots & Lucky Finds",
      description:
        "Well curated pieces and collections, most of them are with us for a long time, only a few rotate which keeps things exciting for us.",
      image: "/products/odd.jpeg",
      video: "",
    },
    {
      title: "Graphic Tees & Mystery Wear",
      description:
        "Iconic tees, indie prints, tiny-batch makers, and tops that make strangers go 'Where did you get that?'",
      image: "",
      video: "/products/shirts.mp4",
    },
    {
      title: "Vintage items from the yesteryears",
      description:
        "Retro dresses, denim, accessories, mixed media art, crystals, wellness items, home décor, and unexpected gems.",
      image: "/3pics/vintage2.jpg",
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
    <section ref={ref} className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="fade-in font-brand text-cyan-500 text-4xl md:text-5xl mb-4">
            Curated Treasures & Curious Finds
          </h2>
          <p className="fade-in text-white text-lg max-w-2xl text-left mx-auto">
            Every piece has a past — and now it’s ready for its next adventure.{" "}
            <br />
            Step into a closet full of character: re-loved fashion, indie
            makers, vintage misfits, jewelry, mixed media art, crystals,
            wellness items, home décor, and unexpected gems. Sustainable,
            quirky, inclusive, and always one-of-a-kind — just like the people
            who shop here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="fade-in group relative overflow-hidden border-2 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <div className="aspect-[4/3] relative rounded-sm overflow-hidden">
                {category.video ? (
                  <video
                    src={category.video}
                    className="absolute inset-0 w-full h-full object-cover "
                    autoPlay
                    loop
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
                <h3 className="font-brand text-cyan-500 text-2xl font-bold mb-2">
                  {category.title}
                </h3>
                <p className="text-white text-lg hidden sm:block">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
