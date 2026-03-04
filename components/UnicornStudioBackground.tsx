"use client";

import Script from "next/script";

const UNICORN_PROJECT_ID = "f8yQjiMd9W2ZcYJc0b5y";
const SDK_URL =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";

export function UnicornStudioBackground() {
  return (
    <>
      <Script
        src={SDK_URL}
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as unknown as { UnicornStudio?: { init: () => void } }).UnicornStudio?.init) {
            (window as unknown as { UnicornStudio: { init: () => void } }).UnicornStudio.init();
          }
        }}
      />
      <div
        className="fixed inset-0 z-0 w-full h-full"
        aria-hidden
      >
        <div
          data-us-project={UNICORN_PROJECT_ID}
          data-us-production="true"
          data-us-scale="0.75"
          data-us-fps="30"
          style={{
            width: "100%",
            height: "100%",
            minHeight: "100vh",
            minWidth: "100vw",
          }}
        />
      </div>
    </>
  );
}
