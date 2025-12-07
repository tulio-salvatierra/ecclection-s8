"use client";

import { useEffect } from "react";

interface FontProviderProps {
  interVariable: string;
  quintessentialVariable: string;
  ralewayVariable: string;
  pirataOneVariable: string;
}

export function FontProvider({
  interVariable,
  quintessentialVariable,
  ralewayVariable,
  pirataOneVariable,
}: FontProviderProps) {
  useEffect(() => {
    // Ensure font variables are always set on HTML element during navigation
    const html = document.documentElement;
    const fontClasses = [
      interVariable,
      quintessentialVariable,
      ralewayVariable,
      pirataOneVariable,
    ].filter(Boolean);

    // Add font classes if not already present
    fontClasses.forEach((className) => {
      if (className && !html.classList.contains(className)) {
        html.classList.add(className);
      }
    });

    // Also ensure body has the classes
    const body = document.body;
    fontClasses.forEach((className) => {
      if (className && !body.classList.contains(className)) {
        body.classList.add(className);
      }
    });
  }, [
    interVariable,
    quintessentialVariable,
    ralewayVariable,
    pirataOneVariable,
  ]);

  return null;
}

