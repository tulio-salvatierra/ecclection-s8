"use client";

import { useEffect, useRef, useState } from "react";

const THROTTLE_MS = 600;               // how often sound triggers
const FADE_MS = 0.05;                 // fade edges (seconds)
const STORAGE_KEY = "cws-scroll-sound"; // remember user preference

export default function GlobalScrollSound() {
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false); // prevents SSR mismatch
  const audioCtxRef = useRef<AudioContext | null>(null);
  const soundBufferRef = useRef<AudioBuffer | null>(null);
  const lastPlayRef = useRef<number>(0);

  // Load saved preference
  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = window.localStorage.getItem(STORAGE_KEY);

    // Default behavior:
    // ❗ If you want FIRST-TIME visitors to start with sound ON,
    // replace the next line with: setEnabled(saved !== "off");
    setEnabled(saved === "on"); 

    setReady(true);
  }, []);

  // Load sound file once after enabling
  useEffect(() => {
    if (!enabled) return;

    audioCtxRef.current = new (window.AudioContext ||
      (window as any).webkitAudioContext)();

    const loadSound = async () => {
      const res = await fetch("/sound/chime.mp3");
      const arrayBuffer = await res.arrayBuffer();
      const ctx = audioCtxRef.current;
      if (!ctx) return;
      soundBufferRef.current = await ctx.decodeAudioData(arrayBuffer);
    };

    loadSound();
  }, [enabled]);

  // Scroll listener
  useEffect(() => {
    if (!enabled) return;

    const handler = async () => {
      const ctx = audioCtxRef.current;
      const buffer = soundBufferRef.current;
      if (!ctx || !buffer) return;

      const now = Date.now();
      if (now - lastPlayRef.current < THROTTLE_MS) return;
      lastPlayRef.current = now;

      // Resume audio context after user interaction (scroll counts)
      if (ctx.state === "suspended") {
        try {
          await ctx.resume();
        } catch (e) {}
      }

      const source = ctx.createBufferSource();
      source.buffer = buffer;

      const gain = ctx.createGain();
      const startTime = ctx.currentTime;
      const duration = buffer.duration;
      const endTime = startTime + duration;

      // Smooth fade edges to blend sounds naturally
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(1, startTime + FADE_MS);
      gain.gain.setValueAtTime(1, endTime - FADE_MS);
      gain.gain.linearRampToValueAtTime(0, endTime);

      source.connect(gain).connect(ctx.destination);
      source.start();
    };

    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("wheel", handler, { passive: true });
    window.addEventListener("touchmove", handler, { passive: true });

    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("wheel", handler);
      window.removeEventListener("touchmove", handler);
    };
  }, [enabled]);

  // Toggle + save preference
  const toggle = () => {
    setEnabled((prev) => {
      const next = !prev;
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, next ? "on" : "off");
      }
      return next;
    });
  };

  if (!ready) return null; // prevents hydration mismatch

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <button
        onClick={toggle}
        className="rounded-full bg-black/80 text-white px-4 py-2 text-sm shadow-lg backdrop-blur"
      >
        {enabled ? "🔇 Disable scroll sound" : "🔊 Enable scroll sound"}
      </button>
    </div>
  );
}