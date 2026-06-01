"use client";

import { useRef, type RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function useSpawnImagesOnMove(
  rootRef: RefObject<HTMLElement | null>,
  images: readonly string[],
) {
  const indexRef = useRef(0);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root || images.length === 0) return;

      let incr = 0;
      let oldIncrX = 0;
      let oldIncrY = 0;
      const resetDist = window.innerWidth / 8;

      const createMedia = (x: number, y: number, deltaX: number, deltaY: number) => {
        const image = document.createElement("img");
        image.className = "spawn-image";
        image.setAttribute("src", images[indexRef.current]!);
        image.alt = "";

        root.appendChild(image);

        const tl = gsap.timeline({
          onComplete: () => {
            root.removeChild(image);
            tl.kill();
          },
        });

        tl.fromTo(
          image,
          {
            xPercent: -50,
            yPercent: -50,
            scaleX: 1.3,
            scaleY: 1.3,
          },
          {
            scaleX: 1,
            scaleY: 1,
            ease: "elastic.out(2, 0.6)",
            duration: 0.6,
          },
        );

        tl.fromTo(
          image,
          {
            x,
            y,
            rotation: (Math.random() - 0.5) * 20,
          },
          {
            x: "+=" + deltaX * 4,
            y: "+=" + deltaY * 4,
            rotation: (Math.random() - 0.5) * 20,
            ease: "power4.out",
            duration: 1.5,
          },
          "<",
        );

        tl.to(image, {
          duration: 0.3,
          scale: 0.5,
          delay: 0.1,
          ease: "back.in(1.5)",
        });

        indexRef.current = (indexRef.current + 1) % images.length;
      };

      const firstMove = (e: MouseEvent) => {
        oldIncrX = e.clientX;
        oldIncrY = e.clientY;
        root.removeEventListener("mousemove", firstMove);
      };

      const handleMove = (e: MouseEvent) => {
        const valX = e.clientX;
        const valY = e.clientY;

        incr += Math.abs(valX - oldIncrX) + Math.abs(valY - oldIncrY);

        if (incr > resetDist) {
          incr = 0;
          const rect = root.getBoundingClientRect();
          const localX = valX - rect.left;
          const localY = valY - rect.top;

          createMedia(localX, localY, valX - oldIncrX, valY - oldIncrY);
        }

        oldIncrX = valX;
        oldIncrY = valY;
      };

      root.addEventListener("mousemove", firstMove, { once: true });
      root.addEventListener("mousemove", handleMove);

      return () => {
        root.removeEventListener("mousemove", firstMove);
        root.removeEventListener("mousemove", handleMove);
      };
    },
    { scope: rootRef, dependencies: [images] },
  );
}
