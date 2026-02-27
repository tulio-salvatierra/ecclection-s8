"use client";

import { useEffect } from "react";

const MAX_OFFSET_PX = 160;
const SCROLL_STRENGTH = 0.15; // smaller = more subtle

export function BackgroundParallax() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;

    const updateParallax = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const offset = Math.max(
        -MAX_OFFSET_PX,
        Math.min(MAX_OFFSET_PX, scrollY * SCROLL_STRENGTH)
      );

      document.documentElement.style.setProperty(
        "--bg-parallax-offset",
        `${offset}px`
      );

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateParallax);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateParallax();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.setProperty("--bg-parallax-offset", "0px");
    };
  }, []);

  return null;
}

