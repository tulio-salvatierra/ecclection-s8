"use client";
// components/sections/Artists.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { renderPunkTitle } from "@/lib/punk-typography";
import { useFadeAnimation } from "@/hooks/useFadeAnimtion";
import React from "react";
import { ARTISTS_DATA, type ArtistCard } from "@/data/artists";

export interface ArtistsProps {
  /** Tailwind utility overrides */
  className?: string;
  /** Optional array of artist data in the same form as the static data (id, name, specialty, bio, image, featured, social{instagram,website}) */
  data?: ArtistCard[];
}

function normalizeUrl(url?: string): string | undefined {
  if (!url) return undefined;
  const trimmed = url.trim();
  if (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("mailto:")
  ) {
    return trimmed;
  }
  if (trimmed.startsWith("@")) {
    const handle = trimmed.replace(/^@+/, "");
    return `https://instagram.com/${handle}`;
  }
  // plain domain -> https
  return `https://${trimmed}`;
}

/**
 * Artists grid section
 * - Renders a responsive 1/2/4 grid of artist cards from static data
 * - Accepts optional `data` prop with the exact object shape shown in the form (id, name, specialty, bio, image, featured, social{instagram,website})
 */
export function Artists({ className = "", data }: ArtistsProps) {
  // Use passed in data or fallback to static list of artists
  const list: ArtistCard[] = data ?? ARTISTS_DATA;
  const ref = React.useRef<HTMLElement>(null);
  const parallaxFrameRef = React.useRef<number | null>(null);
  useFadeAnimation(ref);

  React.useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const parallaxItems = Array.from(
      root.querySelectorAll<HTMLElement>("[data-artist-parallax]")
    );
    if (!parallaxItems.length) return;

    const updateParallax = () => {
      const viewportHeight = window.innerHeight || 1;

      parallaxItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const normalized = (itemCenter - viewportCenter) / viewportCenter;
        const clamped = Math.max(-1, Math.min(1, normalized));
        const offsetY = -clamped * 24;

        item.style.transform = `translate3d(0, ${offsetY}px, 0) scale(1.08)`;
      });

      parallaxFrameRef.current = null;
    };

    const queueUpdate = () => {
      if (parallaxFrameRef.current !== null) return;
      parallaxFrameRef.current = window.requestAnimationFrame(updateParallax);
    };

    queueUpdate();
    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);

    return () => {
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", queueUpdate);
      if (parallaxFrameRef.current !== null) {
        window.cancelAnimationFrame(parallaxFrameRef.current);
      }
    };
  }, []);

  return (
    <section ref={ref} className={`container section-pad ${className}`}>
      <div className="text-center mb-12">
        <img
          src="/a few.svg"
          alt="Featured Local Artists in Chicago"
          className="w-1/4 mr-auto md:mb-[-80px] mb-[-40px] object-contain z-100"
        />
        {renderPunkTitle("Featured Local Artists in Chicago", "text-5xl md:text-5xl font-bold text-cyan-500 font-brand mb-4 relative z-0")}
        <p className="text-xl text-white sm:w-2/3 mx-auto leading-6 font-brand text-left">
          Ecclection is proud to share space with wonderfully creative humans
          from Chicago and nearby neighborhoods. From handmade body care and
          jewelry to stitched art, prints, and one-of-a-kind pieces, every
          artist brings their own magic to the shop.
        </p>
        <br />
        
        <p className="text-xl text-white sm:w-2/3 mx-auto leading-8 font-brand text-left">
            Rental Spaces start at only $20/month so we can help provide exposure
            to the community while offering a space for people to come in  and
            see, feel, touch or smell and of course BUY your creations. It’s SO
            much better than ordering off a BORING screen!!  
          </p>
      </div>

      <div className="flex flex-col gap-6">
        {list.map((artist, idx) => {
          const key = artist.id ?? idx;
          const displayName = artist.name ?? artist.title ?? "Untitled";
          const blurb = artist.bio ?? artist.description ?? artist.text ?? "";
          const img = artist.image;
          const ig = normalizeUrl(artist.social?.instagram);
          const seoSnippet = `${displayName} is part of Ecclection's local artist community in Portage Park, Chicago, featuring handmade art, creative design, and one-of-a-kind craftsmanship.`;

          return (
            <Card
              key={key}
              className="fade-in p-0 h-content md:h-full bg-cyan-600/10 text-black border-2 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all w-full h-full"
            >
              <div className="grid h-content md:h-full grid-cols-1 gap-1 md:grid-cols-2">
                <div className="md:h-content w-full flex items-center justify-center relative">
                  {img ? (
                    <img
                    loading="lazy"
                      src={img}
                      alt={displayName}
                      data-artist-parallax
                      className="w-full h-full object-cover will-change-transform transition-transform duration-300 p-8"
                    />
                  ) : (
                    <div className="text-6xl opacity-50">🎨</div>
                  )}
                  {artist.featured && (
                    <Badge className="absolute top-3 right-3 bg-white text-black">
                      Featured
                    </Badge>
                  )}
                </div>

                <div className="p-6 overflow-y-auto">
                  {renderPunkTitle(displayName, "text-2xl font-semibold text-cyan-600 font-brand mb-1")}

                  {artist.specialty && (
                    <Badge
                      variant="outline"
                      className="mb-3 text-lg bg-cyan-100 text-black font-brand"
                    >
                      {artist.specialty}
                    </Badge>
                  )}

                  {blurb && (
                    <p className="text-cyan-600 text-xl mb-4 font-brand">
                      {blurb}
                    </p>
                  )}

                  <p className="text-cyan-600 text-xl mb-5 font-brand">
                    {seoSnippet}
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center md:justify-center">
                    {ig && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-cyan-100 text-black hover:bg-cyan-200 w-full md:w-auto"
                        asChild
                      >
                        <a href={ig} target="_blank" rel="noopener noreferrer">
                          Follow on Instagram
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <a href="https://share.google/NxfvhwhB0I5rPJPX6">
          <Button
            size="lg"
            className="bg-cyan-500 text-lg p-8 shadow-lg border-2 border-black text-black hover:bg-cyan-200 font-brand"
            variant="outline"
          >
            Come hang out!
          </Button>
        </a>
      </div>
    </section>
  );
}

export default Artists;
