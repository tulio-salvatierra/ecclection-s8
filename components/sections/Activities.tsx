'use client';
import { Button } from "@/components/ui/button";
import { useFadeAnimation } from "@/app/hooks/useFadeAnimtion";
import React from "react";

export function StoreActivities() {
  const ref = React.useRef(null);
  useFadeAnimation(ref);

  return (
    <section ref={ref} className="bg-transparent h-screen py-16 px-4 md:px-8">
      <div className="relative max-w-5xl mx-auto min-h-[60vh] flex flex-col justify-between">
        {/* Top oversized title */}
        <div className="mb-10">
          <h2 className=" font-brand text-3xl md:text-7xl tracking-light text-cyan-500 uppercase leading-tight">
            MORE&nbsp;THAN&nbsp;A&nbsp;STORE
          </h2>
        </div>

        {/* Middle content row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-start">
          {/* Left small label block */}
          <div className="space-y-3 font-brand text-xl uppercase text-gray-400 tracking-[0.25em]">
            <p>VIBRANT&nbsp;VARIETY&nbsp;SHOP™</p>
            <p>PORTAGE&nbsp;PARK,&nbsp;CHICAGO</p>
          </div>

          {/* Main description (center column) */}
          <div className="md:col-span-2">
            <p className="text-lg leading-relaxed text-white max-w-xl">
              Ecclection is a neighborhood shop where families, artists &amp; curious neighbors <strong className="text-cyan-500">(obviously!)</strong> come to browse, laugh, trade, discover &amp; just hang out. From our little <strong>Barter Box</strong> — where you can swap fun thrift finds without spending a dime — to the spontaneous spins of the <strong>Wheel of Good Fortune</strong> offering surprise discounts, freebies or glitter‑powered blessings, there’s always something unexpected happening. Our playful <strong>Find Waldo</strong> hunt keeps both the shop and our Instagram buzzing with hidden‑treasure rewards. And of course, our <strong>Donation Drop</strong> is always open for clothing, décor, art supplies &amp; other goodies that help fuel our sustainability mission (gold coins &amp; diamonds still optional… but appreciated). Ecclection is more than a store — it’s a quirky mix of creativity, community, weird &amp; wonderful finds, and everyday joy!
            </p>
          </div>
        </div>

        {/* Bottom right CTA + small meta text */}
        <div className="mt-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="font-brand text-3xl md:text-6xl tracking-light text-white uppercase leading-tight">
            <p>EXPERIENCE&nbsp;IN‑STORE&nbsp;ONLY</p>
            <p>NO&nbsp;ONLINE&nbsp;SHOP · NO&nbsp;PHONE&nbsp;ORDERS</p>
          </div>

          <div className="text-right">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-gray-200 text-black text-xs md:text-sm px-8 py-6 font-brand tracking-[0.25em] uppercase border border-gray-400 rounded-none shadow-[4px_4px_0_0_#ffffff33] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
            >
              COME VISIT TODAY
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
