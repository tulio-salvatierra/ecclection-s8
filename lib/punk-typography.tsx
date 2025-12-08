import React from "react";

/**
 * Renders a punk-style title (h1) with rotated word blocks
 * @param text - The text to render
 * @param size - Tailwind text size classes (default: "text-3xl md:text-4xl")
 * @param className - Additional CSS classes for the h1 element
 * @param textColor - Text color class (default: "text-black")
 */
export function renderPunkTitle(
  text: string,
  size: string = "text-3xl md:text-4xl",
  className: string = "",
  textColor: string = "text-black"
): React.ReactElement {
  const words = text.trim().split(/\s+/);
  // Deterministic jitter angles to avoid SSR/CSR mismatch
  const angles = [-6, -3, 0, 3, 6, -4, 2, -2, 4];
  return (
    <h1 className={`${size} font-bold font-brand mb-4 text-center ${textColor} ${className}`}>
      {words.map((word, idx) => {
        const angle = angles[idx % angles.length];
        return (
          <span
            key={`w-${idx}`}
            className="inline-block mr-2 md:mr-3 px-2 md:px-3 py-1 md:py-2 bg-cyan-600 text-black rounded-[3px] border-2 border-black shadow-[3px_3px_0_0_#000]"
            style={{ transform: `rotate(${angle}deg)` }}
          >
            {word}
          </span>
        );
      })}
    </h1>
  );
}

/**
 * Renders a punk-style heading (h2) with rotated word blocks
 * @param text - The text to render
 * @param size - Tailwind text size classes (default: "text-xl")
 * @param className - Additional CSS classes for the h2 element
 * @param textColor - Text color class (default: "text-black")
 * @param variant - Style variant: "default" (smaller, cyan-600) or "large" (larger shadow, cyan-600) or "white" (cyan-500 with white text)
 */
export function renderPunkHeading(
  text: string,
  size: string = "text-xl",
  className: string = "",
  textColor: string = "text-black",
  variant: "default" | "large" | "white" = "default"
): React.ReactElement {
  const words = text.trim().split(/\s+/);
  const angles = [-4, -2, 0, 2, 4, -3, 1, -1, 3];
  
  // Determine span classes based on variant
  let spanClasses = "inline-block mr-1 md:mr-2 px-1 md:px-2 py-1 bg-cyan-600 text-black rounded-[2px] border border-black shadow-[2px_2px_0_0_#000]";
  if (variant === "large") {
    spanClasses = "inline-block mr-2 md:mr-3 px-2 md:px-3 py-1 md:py-2 bg-cyan-600 text-black rounded-[3px] border-2 border-black shadow-[3px_3px_0_0_#000]";
  } else if (variant === "white") {
    spanClasses = "inline-block mr-1 md:mr-2 px-1 md:px-2 py-1 bg-cyan-500 text-white rounded-[2px] border border-black shadow-[2px_2px_0_0_#000]";
  }
  
  // Determine font weight based on variant
  const fontWeight = variant === "large" ? "font-bold" : "font-semibold";
  
  return (
    <h2 className={`${size} ${fontWeight} font-brand mb-3 ${textColor} ${className}`}>
      {words.map((word, idx) => {
        const angle = angles[idx % angles.length];
        return (
          <span
            key={`h-${idx}`}
            className={spanClasses}
            style={{ transform: `rotate(${angle}deg)` }}
          >
            {word}
          </span>
        );
      })}
    </h2>
  );
}

