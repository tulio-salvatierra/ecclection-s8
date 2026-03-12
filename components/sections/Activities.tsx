'use client';
import { Button } from "@/components/ui/button";
import { useFadeAnimation } from "@/hooks/useFadeAnimtion";
import React from "react";

export function StoreActivities() {
  const ref = React.useRef(null);
  useFadeAnimation(ref);

  return (
    <section ref={ref} className="bg-transparent min-h-[100svh] md:h-screen py-8 sm:py-10 p-2 md:px-8">
      <div className="relative mx-auto min-h-[100svh] md:h-screen flex flex-col justify-between gap-8">
        {/* Top oversized title */}
        <div className="mb-10">
          <h2 className="mt-10 md:mt-40 fade-in text-4xl sm:text-9xl tracking-light text-cyan-500 leading-tight font-brand" style={{ textShadow: '2px 2px 0px rgba(0, 0, 0, 0.5)' }}>
            More Than A Store
          </h2>
        </div>

        {/* Middle content row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16 items-start">
          {/* Left small label block */}
          <div className="fade-in space-y-3 font-brand text-md text-cyan-300 uppercase tracking-wider">
            <p>VIBRANT&nbsp;VARIETY&nbsp;SHOP™</p>
            <p>PORTAGE&nbsp;PARK,&nbsp;CHICAGO</p>
          </div>

          {/* Main description (center column) */}
          <div className="md:col-span-2">
              <p className="fade-in text-xl sm:text-2xl text-white max-w-xl">
              Ecclection is a neighborhood shop where families, artists &amp;
              curious neighbors come to browse, laugh, trade, discover &amp;
              just hang out. You'll get to spin the <strong>Wheel of Good
              Fortune</strong> for a surprise discount, freebie or
              glitter‑powered blessing! There’s always something unexpected
              happening. We also have a <strong>Find Waldo</strong> hunt
              keeps both the shop and our Instagram buzzing with hidden‑treasure
              rewards. And of course, our <strong>Donation Drop</strong>
              is always open for clothing, décor, art supplies &amp; other goodies that help fuel our sustainability mission (gold coins &amp; diamonds still optional… but appreciated). Ecclection is more
              than a store — it’s a quirky mix of creativity, community, weird &amp; wonderful finds, and everyday joy!
            </p>
          </div>
        </div>

        {/* Bottom right CTA + small meta text */}
        <div className="mt-6 md:mt-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div className="fade-in font-brand text-3xl md:text-6xl tracking-light text-white uppercase leading-tight">
            <p className="fade-in text-cyan-300">EXPERIENCE&nbsp;IN‑STORE&nbsp;ONLY</p>
            <p className="fade-in text-cyan-300">NO&nbsp;ONLINE&nbsp;SHOP · NO&nbsp;PHONE&nbsp;ORDERS</p>
          </div>

          <div className="fade-in text-right mx-auto">
            <Button
              size="lg"
              className="fade-in bg-cyan-500 hover:bg-gray-200 text-black text-sm px-8 py-6 font-brand tracking-[0.25em] uppercase border border-gray-400 rounded-none shadow-[4px_4px_0_0_#ffffff33] hover:translate-x-[1px] hover:translate-y-[1px] transition-all mx-auto"
            >
              COME VISIT TODAY
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
