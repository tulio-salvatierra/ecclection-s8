"use client";

import { useEffect, useRef, useState } from "react";

const FADE_MS = 0.05; // fade edges (seconds)
const STORAGE_KEY = "cws-scroll-sound"; // remember user preference

export default function GlobalScrollSound() {
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const soundBufferRef = useRef<AudioBuffer | null>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  // Load saved preference
  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = window.localStorage.getItem(STORAGE_KEY);
    setEnabled(saved === "on");
    setReady(true);
  }, []);

  // Play sound once on demand (button click satisfies user-gesture requirement)
  const playOnce = async () => {
    if (hasPlayed) return;

    audioCtxRef.current =
      audioCtxRef.current ||
      new (window.AudioContext || (window as any).webkitAudioContext)();

    const ctx = audioCtxRef.current;
    if (!ctx) return;

    // Load buffer if needed
    if (!soundBufferRef.current) {
      const res = await fetch("/sound/circus.mp3");
      const arrayBuffer = await res.arrayBuffer();
      const buffer = await ctx.decodeAudioData(arrayBuffer);
      soundBufferRef.current = buffer;
    }

    const buffer = soundBufferRef.current;
    if (!buffer) return;

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

  // Toggle + save preference; reset hasPlayed when turning off
  const toggle = () => {
    setEnabled((prev) => {
      const next = !prev;
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, next ? "on" : "off");
      }
      if (!next) {
        setHasPlayed(false);
      }
      return next;
    });
    // If turning on, play immediately (within user gesture)
    if (!enabled) {
      void playOnce();
    }
  };

  if (!ready) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <button
        onClick={toggle}
        className="rounded-full bg-black/80 text-white px-4 py-2 text-sm shadow-lg backdrop-blur"
      >
        {enabled ? "🔇 Sound off" : "🔊 Sound on"}
      </button>
    </div>
  );
}
