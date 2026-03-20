"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function LenisProvider() {
  useEffect(() => {
    let rafId = 0;
    let stopped = false;

    const isTouchDevice =
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window);

    // Prefer native scroll on touch devices to avoid lockups.
    if (isTouchDevice) {
      return () => {
        stopped = true;
        cancelAnimationFrame(rafId);
      };
    }

    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time: number) {
      if (stopped) return;
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      stopped = true;
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}

