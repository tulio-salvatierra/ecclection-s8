// app/ClientEffects.tsx
"use client";

import SoundOnScroll from "@/components/SoundOnScroll/SoundOnScroll";
import { BackgroundParallax } from "@/components/BackgroundParallax";

export function ClientEffects() {
  return (
    <>
      <SoundOnScroll />
      <BackgroundParallax />
    </>
  );
}
