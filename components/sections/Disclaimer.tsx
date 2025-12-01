"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ecclection_disclaimer_seen_v1";

export default function DisclaimerModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasSeen = window.localStorage.getItem(STORAGE_KEY);
    if (!hasSeen) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "true");
    }
    setOpen(false);
  };

  const handleClose = () => {
    // optional: allow closing without setting the flag
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
    >
      <div className="max-w-lg w-[90vw] rounded-xl bg-cyan-500 border-2 border-black shadow-[8px_8px_0_0_#000] p-6">
        <h2 className="font-brand text-2xl mb-3 text-black">
          About our artwork & AI
        </h2>

        <p className="text-sm md:text-base text-black mb-3">
          Ecclection exists to support real, local artists. Any major creative
          work we showcase — like murals, photo-op spaces, in-store visuals, or
          web design — is commissioned from artists in our community.
        </p>

        <p className="text-sm md:text-base text-gray-800 mb-3">
          We may occasionally use AI tools to help brainstorm ideas or create
          draft visuals for promotion, but we do <strong>not</strong> promote
          AI-generated creations as final artwork, and we do not replace human
          artists with AI.
        </p>

        <p className="text-sm md:text-base text-gray-800 mb-6">
          By continuing to use this site, you acknowledge that our focus is on
          human-made art and direct support for local creators.
        </p>

        <div className="flex gap-3 justify-end">
          <button
            type="button"
            onClick={handleClose}
            className="px-3 py-2 text-xs md:text-sm rounded-lg border border-black bg-cyan-500 hover:bg-gray-700 font-brand transition"
          >
            Close
          </button>

          <button
            type="button"
            onClick={handleAccept}
            className="inline-flex items-center justify-center px-4 py-2 bg-cyan-500 text-black font-brand text-lg rounded-lg border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            I understand
          </button>
        </div>
      </div>
    </div>
  );
}