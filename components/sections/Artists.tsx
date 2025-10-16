// components/sections/Artists.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
  /** Section heading (e.g. "Featured Artists") */
  heading?: string;
  /** Section blurb under heading */
  description?: string;
  /** Tailwind utility overrides */
  className?: string;
  /**
   * Canonical array of artist cards.
   * Prefer passing this shape.
   */
  items?: ArtistCard[];
  /**
   * Alternate, simpler input shape from your page.tsx mapping:
   * { title, text, image }[]
   */
  cards?: { title?: string; text?: string; image?: string }[];
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
 * - Accepts either `items` (rich artist objects) or `cards` (simple title/text/image)
 * - Renders a responsive 1/2/4 grid of artist cards
 */
export function Artists({
  heading = "Featured Artists",
  description = "Meet the talented artists who make our community vibrant and inspiring.",
  className = "",
  items,
  cards,
}: ArtistsProps) {
  // Normalize inputs into one array and limit to first 3
  const list: ArtistCard[] =
    (items && items.length > 0
      ? items.slice(0, 3)
      : (cards?.map((c, i) => ({
          id: i,
          title: c.title,
          text: c.text,
          image: c.image,
        })) ?? []).slice(0, 3)) || [];
  console.log(list);

  return (
    <section className={`container section-pad ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-brand mb-4">
          {heading}
        </h2>
        {description && (
          <p className="text-lg text-white max-w-2xl mx-auto">
            {description}
          </p>
        )}
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
            <Card
              key={key}
              className="overflow-hidden hover:shadow-lg transition-shadow bg-cyan-600 text-black"
            >
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
                  <Badge className="absolute top-3 right-3 bg-cyan-100 text-black">
                    Featured
                  </Badge>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-black font-brand mb-1">
                  {displayName}
                </h3>

                {artist.specialty && (
                  <Badge variant="outline" className="mb-3 text-xs bg-cyan-100 text-black font-brand">
                    {artist.specialty}
                  </Badge>
                )}

                {blurb && (
                  <p className="text-black text-sm mb-4 line-clamp-3">
                    {blurb}
                  </p>
                )}

                <div className="flex flex-wrap gap-2">
                  {ig && (
                    <Button size="sm" variant="outline" className="bg-cyan-100 text-black hover:bg-cyan-200" asChild>
                      <a
                        href={ig}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${displayName} on Instagram`}
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z" />
                        </svg>
                        IG
                      </a>
                    </Button>
                  )}
                  {web && (
                    <Button size="sm" variant="outline" className="bg-cyan-100 text-black hover:bg-cyan-200" asChild>
                      <a
                        href={web}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${displayName} website`}
                      >
                        <svg
                          className="w-4 h-4 mr-1 text-black"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Web
                      </a>
                    </Button>
                  )}
                  {artist.social?.email && (
                    <Button size="sm" variant="outline" className="bg-cyan-100 text-black hover:bg-cyan-200" asChild>
                      <a
                        href={`mailto:${artist.social.email}`}
                        aria-label={`Email ${displayName}`}
                      >
                        Email
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {list.length > 4 && (
        <div className="text-center mt-12">
          <Button size="lg" className="bg-cyan-100 text-black hover:bg-cyan-200 font-brand" variant="outline">
            View All Artists
          </Button>
        </div>
      )}
    </section>
  );
}

export default Artists;
