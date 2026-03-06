"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import "./ScrollBanner.css";

export function VisitBanner() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const phraseRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !phraseRef.current) return;

    let cleanup: (() => void) | undefined;

    const initAnimation = () => {
      const content = containerRef.current;
      const phraseEl = phraseRef.current;
      if (!content || !phraseEl) return;

      const phraseWidth = phraseEl.clientWidth;
      if (!phraseWidth || phraseWidth === 0) {
        requestAnimationFrame(initAnimation);
        return;
      }

      let wheelDelta = 0;
      let total = 0;
      const wrap = gsap.utils.wrap(-phraseWidth, 0);

      const xTo = gsap.quickTo(content, "x", {
        duration: 1,
        ease: 'none',
        modifiers: {
          x: gsap.utils.unitize(wrap),
        },
      });

      const tick = () => {
        total -= 2.5 + wheelDelta * 1;
        xTo(total);

        wheelDelta *= 0.9;
        if (Math.abs(wheelDelta) < 0.01) wheelDelta = 0;
      };

      const handleWheel = (e: WheelEvent) => {
        wheelDelta += e.deltaY * 0.1;
      };

      gsap.ticker.add(tick);
      window.addEventListener('wheel', handleWheel, { passive: true });

      cleanup = () => {
        window.removeEventListener('wheel', handleWheel);
        gsap.ticker.remove(tick);
      };
    };

    initAnimation();

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section className="mwg_effect013 min-h-[450px] flex items-center justify-center">
      <div className="inner">
        <div className="banner-container w-screen" ref={containerRef} style={{ willChange: 'transform' }}>
          <p className="phrase flex" ref={phraseRef} style={{ height: "500px" }}>
            {Array.from({ length: 20 }).map((_, index) => (
              <span
                key={index}
                className="banner-text fade-in text-8xl md:text-9xl tracking-light text-pink-500 leading-tight"
              >
               🧑🏿‍🎨 🏳️‍🌈 🎁 🪀COME VISIT TODAY! 👩‍🎤 👽 👨‍🎤 🪩
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}