"use client";

import React from "react";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export function useFadeAnimation(ref: React.RefObject<HTMLElement>) {
  useGSAP(() => {

    const elements = ref.current?.querySelectorAll(".fade-in");
    const zoomOutElements = ref.current?.querySelectorAll(".zoom-out");
    const scaleElements = ref.current?.querySelectorAll(".scale-in");
    const splitElements = ref.current?.querySelectorAll(".split-fade-in");
    const fadeUpElements = ref.current?.querySelectorAll(".fade-up");

    
    if (elements && elements.length > 0) {
    elements?.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.8,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }
});
}