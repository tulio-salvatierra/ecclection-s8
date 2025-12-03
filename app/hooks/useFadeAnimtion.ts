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
          duration: 2,
          stagger: 0.6,
          ease: "slow(0.7,0.7,false)",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
    zoomOutElements?.forEach((element) => {
        gsap.fromTo(
            element,
            {  scale: 10 },
            {
        
                scale: 1,
                duration: 1.5,
                ease: "expoScale(0.5,7,none)",
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    });


    scaleElements?.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, scale: 0.7 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    splitElements?.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          stagger: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    fadeUpElements?.forEach((element) => {
        gsap.fromTo(
            element,
            { opacity: 0, },
            {
              opacity: 1,
                
            duration: 2.5,
            ease: "power4.inOut",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        }
    );
    });
    }
    }, [ref]);

}

