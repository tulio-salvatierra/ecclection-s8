"use client";

import UnicornScene from "unicornstudio-react";

const UNICORN_PROJECT_ID = "f8yQjiMd9W2ZcYJc0b5y";
const SDK_URL =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.4/dist/unicornStudio.umd.js";

export function UnicornStudioBackground() {
  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none" aria-hidden>
      <UnicornScene
        projectId={UNICORN_PROJECT_ID}
        width="100%"
        height="100%"
        scale={1}
        dpi={1.5}
        sdkUrl={SDK_URL}
      />
    </div>
  );
}
