// components/sections/Artists.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface ArtistCard {
  id?: string | number;
  /** Either use `name` (preferred) or `title` (for generic cards) */
  name?: string;
  title?: string;
  specialty?: string;
  /** Artist bio or generic text/description */
  bio?: string;
  description?: string;
  text?: string;
  /** Absolute image URL */
  image?: string;
  featured?: boolean;
  social?: {
    instagram?: string;
    website?: string;
    email?: string;
  };
}

export interface ArtistsProps {
  /** Tailwind utility overrides */
  className?: string;
  /** Optional array of artist data in the same form as the static data (id, name, specialty, bio, image, featured, social{instagram,website}) */
  data?: ArtistCard[];
}

export const ARTISTS_DATA: ArtistCard[] = [
  {
    id: 1,
    name: "Smelly Melly",
    specialty: "Candle & Soap Maker",
    bio: "Melissa Berardi creates artisanal candles and soaps focused on Health/beauty\nMy soaps and candles are 100% organic and hand made. I use the best products to get the best results.",
    image: "/smelly.jpg",
    featured: true,
    social: {
      instagram: "smellymellysoapsandcandles",
      website: "www.smellymellycandle.com",
    },
  },
  {
    id: 2,
    name: "Roth n Roll Stitch",
    specialty: "Stitcher",
    bio: "I hand stitch decorative hoops, jewelry, banners, patches, etc. Inspired by nature, spirituality and music",
    image: "/stitch.png",
    social: {
      instagram: "rothnrollstitch",
      website: "rothnrollstitch.com",
    },
  },
  {
    id: 3,
    name: "Barbara Ezell",
    specialty: "Unique Jewelry Designer",
    bio: "Stories inspire me! I am inspired by dreams from known and unknown realms. Meet my mystic muses and other creations.",
    image:
      "https://i.etsystatic.com/13508651/r/il/60d066/6703081534/il_1588xN.6703081534_dpum.jpg",
    featured: true,
    social: {
      instagram: "barbezell",
      website:
        "https://www.etsy.com/shop/Barbezell?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnv20TytU9A6_kZQAC6c-TlaI-w7S0lh-srIdA4A_SP7u9A_6BlMOyydmQS8I_aem_XYVNiYhVZ-4rqdBZf4TWiQ&dd_referrer=https%3A%2F%2Fl.instagram.com%2F#items",
    },
  },
  {
    id: 4,
    name: "Englewood Essentials",
    specialty: "Soaps & Body Care",
    bio: "Oh Hey, My name is Kevin With my sons Thelonius and Biafra we set out to make self care products that celebrate ingredients you can feel good putting on your body. Handmade by us, in my neighborhood, Englewood on the Southside of Chicago. Black owned and operated Englewood Essentials is my way of creating a legacy with my Sons while building something together.",
    image:
      "https://peanuttyxx.wordpress.com/wp-content/uploads/2024/02/374657104_17981156780452146_300428832772262792_n.jpg",
    social: {
      instagram: "englewoodessentials",
      website: "ENGLEWOODESSENTIAL.COM",
    },
  },
  {
    id: 5,
    name: "Glitz",
    specialty: "Custom Jewelry & Accessories",
    bio: "Headed by Vera, or how I known her my whole life \"Kuma Vera\" long time artisan who cycles up vintage and discarded jewelry reimagined into new, one of a kind pieces. Each piece is handmade with love and care into a stunning new piece, with various styles and afforables prices.",
    image: "/glitz.jpeg",
    social: {
      instagram: "glitzbyvera",
      website: "www.glitzbyvera.com",
    },
  }
];

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

  return (
    <section className={`container section-pad ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-5xl font-bold text-cyan-500 font-brand mb-4">
          Featured Artists
        </h2>
        {/* Section description removed; can add static description here if desired */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((artist, idx) => {
          const key = artist.id ?? idx;
          const displayName = artist.name ?? artist.title ?? "Untitled";
          const blurb = artist.bio ?? artist.description ?? artist.text ?? "";
          const img = artist.image;
          const ig = normalizeUrl(artist.social?.instagram);
          const web = normalizeUrl(artist.social?.website);

          return (
            <Link href="/artists" key={key}>
              <Card className="overflow-hidden bg-cyan-600 text-black border-2 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
                  {img ? (
                    <img
                      src={img}
                      alt={displayName}
                      className="w-full h-full object-cover"
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

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black font-brand mb-1">
                    {displayName}
                  </h3>

                  {artist.specialty && (
                    <Badge
                      variant="outline"
                      className="mb-3 text-lg bg-cyan-100 text-black font-brand"
                    >
                      {artist.specialty}
                    </Badge>
                  )}

                  {blurb && (
                    <p className="text-black text-lg mb-4 line-clamp-3">
                      {blurb}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {ig && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-cyan-100 text-black hover:bg-cyan-200"
                        asChild
                      >
                        Know More!
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <a href="/artists">
          <Button
            size="lg"
            className="bg-cyan-500 text-lg p-8 shadow-lg border-2 border-black text-black hover:bg-cyan-200 font-brand"
            variant="outline"
          >
            View All Artists
          </Button>
        </a>
      </div>
    </section>
  );
}

export default Artists;
