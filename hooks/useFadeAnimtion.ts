"use client";

import React from "react";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export function useFadeAnimation(ref: React.RefObject<HTMLElement>) {
  useGSAP(() => {
    const ctx = ref.current;
    if (!ctx) return;

    const elements = ctx.querySelectorAll(".fade-in");
    const elasticElements = ctx.querySelectorAll(".elastic-in");

    elements?.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.8,
          stagger: 0.6,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: element,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    // Run elastic-in on its own so each element gets one animation (and so it runs even with no .fade-in)
    elasticElements?.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0.75,
          y: 0,
          display: "inline-block", // so transform y works on span
        },
        {
          opacity: 1,
          y: 100,
          duration: 3,
          ease: "elastic.out(1, 0.5)",
          display: "inline-block",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, [ref]);
}
