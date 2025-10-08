// components/sections/Artists.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Artist {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image?: string;
  social?: {
    instagram?: string;
    website?: string;
    email?: string;
  };
  featured?: boolean;
}

interface ArtistsProps {
  title?: string;
  description?: string;
  image?: string;
  className?: string;
}


export function Artists({ 
  title = "Featured Artists",
  description = "Meet the talented artists who make our community vibrant and inspiring.",
  image,
  className = "" 
}: ArtistsProps) {
  // Static artists data
  const artists: Artist[] = [
    {
      id: "1",
      name: "Sarah Chen",
      specialty: "Abstract Painting",
      bio: "Sarah creates vibrant abstract works that explore the intersection of color and emotion. Her pieces have been featured in galleries across the city.",
      featured: true,
      social: {
        instagram: "@sarahchenart",
        website: "sarahchen.com"
      }
    },
    {
      id: "2",
      name: "Marcus Rodriguez",
      specialty: "Sculpture & Mixed Media",
      bio: "Marcus combines traditional sculpting techniques with modern materials to create thought-provoking installations that challenge our perceptions.",
      featured: true,
      social: {
        instagram: "@marcussculpts",
        website: "marcusrodriguez.art"
      }
    },
    {
      id: "3",
      name: "Elena Kowalski",
      specialty: "Digital Art & Photography",
      bio: "Elena blends digital technology with traditional artistic principles, creating stunning visual narratives that bridge the gap between reality and imagination.",
      featured: false,
      social: {
        instagram: "@elenakowalski",
        website: "elenakowalski.com"
      }
    },
    {
      id: "4",
      name: "David Park",
      specialty: "Ceramics & Pottery",
      bio: "David's ceramic works celebrate the beauty of imperfection and the natural flow of clay. Each piece tells a story of transformation and growth.",
      featured: false,
      social: {
        instagram: "@davidparkceramics",
        website: "davidparkpottery.com"
      }
    }
  ];
  return (
    <section className={`container section-pad ${className}`}>
      <div className="text-center mb-12">
        {image && (
          <div className="mb-6">
            <img 
              src={image} 
              alt={title}
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-primary/20"
            />
          </div>
        )}
        <h2 className="text-3xl md:text-4xl font-bold font-brand color--ecclection-teal text-foreground mb-4">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((artist) => (
          <Card key={artist.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
              {artist.image ? (
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-6xl opacity-50">🎨</div>
              )}
              {artist.featured && (
                <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                  Featured
                </Badge>
              )}
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {artist.name}
              </h3>
              
              <Badge variant="outline" className="mb-3 text-xs">
                {artist.specialty}
              </Badge>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {artist.bio}
              </p>

              <div className="flex space-x-2">
                {artist.social?.instagram && (
                  <Button size="sm" variant="outline" className="flex-1">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                    </svg>
                    IG
                  </Button>
                )}
                {artist.social?.website && (
                  <Button size="sm" variant="outline" className="flex-1">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Web
                  </Button>
                )}
              </div>
            </div>
          </Card>
          ))}
            </div>

          <div className="text-center mt-12">
        <Button size="lg" variant="outline">
          View All Artists
        </Button>
      </div>
    </section>
  );
}
