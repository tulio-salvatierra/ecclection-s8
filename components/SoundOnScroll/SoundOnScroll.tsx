"use client";

import { useEffect, useRef, useState } from "react";

const MIN_INTERVAL_MS = 600; // play at most ~3 times per second

export default function GlobalScrollSound() {
  const [enabled, setEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lastPlayRef = useRef<number>(0);

  useEffect(() => {
    if (!enabled) return;

    // Prepare audio once
    audioRef.current = new Audio("/sound/chime.mp3");
    audioRef.current.preload = "auto";

    const handleScrollEvent = () => {
      const now = performance.now();
      if (now - lastPlayRef.current < MIN_INTERVAL_MS) return; // throttle

      lastPlayRef.current = now;

      if (!audioRef.current) return;
      // reset to start so quick repeated plays don't “queue”
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .catch(() => {
          // ignore if user blocks autoplay / sound
        });
    };

    // Listen to different interactions that imply scrolling
    window.addEventListener("wheel", handleScrollEvent, { passive: true });
    window.addEventListener("scroll", handleScrollEvent, { passive: true });
    window.addEventListener("touchmove", handleScrollEvent, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScrollEvent);
      window.removeEventListener("scroll", handleScrollEvent);
      window.removeEventListener("touchmove", handleScrollEvent);
    };
  }, [enabled]);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      {!enabled ? (
        <button
          onClick={() => setEnabled(true)}
          className="rounded-full bg-black/80 text-white px-4 py-2 text-sm shadow-lg backdrop-blur"
        >
          🔊 Enable scroll sound
        </button>
      ) : (
        <button
          onClick={() => setEnabled(false)}
          className="rounded-full bg-white/90 text-black px-4 py-2 text-sm shadow border"
        >
          🔇 Mute scroll sound
        </button>
      )}
    </div>
  );
}