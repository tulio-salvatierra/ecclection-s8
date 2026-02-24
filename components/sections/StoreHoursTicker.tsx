"use client";

import { Clock } from "lucide-react";

export function StoreHoursTicker() {
  const tickerText = "Welcome!  Surpies!!! We are back in business! We are open Wednesday - Sunday from 11am - 5pm";


  return (
    <div className="sticky top-[72px] z-40 bg-primary/95 backdrop-blur-md border-b border-primary/30 shadow-sm overflow-hidden">
      <div className="py-3.5">
        <div className="flex items-center gap-3 text-primary-foreground">
          <Clock className="w-4 h-4 shrink-0 ml-4 z-10 bg-primary/95" />
          <div className="flex-1 overflow-hidden">
            <div className="flex animate-ticker whitespace-nowrap">
              <span className=" text-xl  font-brand font-normal mr-8 inline-block">
                {tickerText}
              </span>
              <span className="text-xl  font-brand font-normal mr-8 inline-block">
                {tickerText}
              </span>
              <span className="text-xl  font-brand font-normal mr-8 inline-block">
                {tickerText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
