"use client";

import { useEffect, useRef, useState } from "react";

const FADE_MS = 0.05; // fade edges (seconds)

export default function GlobalScrollSound() {
  const [hasPlayed, setHasPlayed] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (hasPlayed) return;

    const playOnce = async () => {
      audioCtxRef.current = new (window.AudioContext ||
        (window as any).webkitAudioContext)();

      const res = await fetch("/sound/circus.mp3");
      const arrayBuffer = await res.arrayBuffer();
      const ctx = audioCtxRef.current;
      if (!ctx) return;

      const buffer = await ctx.decodeAudioData(arrayBuffer);

      if (ctx.state === "suspended") {
        try {
          await ctx.resume();
        } catch (_) {
          return; // autoplay blocked
        }
      }

      const source = ctx.createBufferSource();
      source.buffer = buffer;

      const gain = ctx.createGain();
      const startTime = ctx.currentTime;
      const duration = buffer.duration;
      const endTime = startTime + duration;

      // Smooth fade edges for a clean one-shot playback.
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(1, startTime + FADE_MS);
      gain.gain.setValueAtTime(1, endTime - FADE_MS);
      gain.gain.linearRampToValueAtTime(0, endTime);

      source.connect(gain).connect(ctx.destination);
      source.start();
      setHasPlayed(true);
    };

    playOnce();

    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, [hasPlayed]);

  return null;
}
