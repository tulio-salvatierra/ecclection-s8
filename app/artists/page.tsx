import type { Metadata } from "next";
import { Artists } from "@/components/sections/Artists";
import { LenisProvider } from "@/components/LenisProvider";

export const metadata: Metadata = {
  title: "Artists | Ecclection",
  description:
    "Meet the artists and makers featured at Ecclection — a rotating lineup of local creatives bringing handmade goods, art, and curiosities to Portage Park.",
};

export default function ArtistsPage() {
  return (
    <><LenisProvider />
    <main className="min-h-screen pt-24 pb-24">
      <Artists className="pt-8" />
    </main></>
  );
}

