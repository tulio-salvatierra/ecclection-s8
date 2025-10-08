// components/sections/Artists.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getPosts } from "@/lib/wp";

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

// Helper function to extract social media links from content
function extractSocialLinks(content: string) {
  const social: { instagram?: string; website?: string; email?: string } = {};
  
  // Extract Instagram
  const instagramMatch = content.match(/instagram[:\s]*@?([a-zA-Z0-9_.]+)/i);
  if (instagramMatch) {
    social.instagram = `@${instagramMatch[1]}`;
  }
  
  // Extract website
  const websiteMatch = content.match(/website[:\s]*(https?:\/\/[^\s]+|[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/i);
  if (websiteMatch) {
    social.website = websiteMatch[1];
  }
  
  // Extract email
  const emailMatch = content.match(/email[:\s]*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/i);
  if (emailMatch) {
    social.email = emailMatch[1];
  }
  
  return social;
}

// Helper function to extract featured image
function extractFeaturedImage(post: any): string | undefined {
  if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
    return post._embedded['wp:featuredmedia'][0].source_url;
  }
  return undefined;
}

// Helper function to check if artist is featured (sticky post or has featured tag)
function isFeatured(post: any): boolean {
  return post.sticky || 
         post.tags?.some((tag: any) => tag.name?.toLowerCase().includes('featured')) ||
         false;
}

export async function Artists({ 
  title = "Featured Artists",
  description = "Meet the talented artists who make our community vibrant and inspiring.",
  image,
  className = "" 
}: ArtistsProps) {
  // Fetch artists from WordPress
  let artists: Artist[] = [];
  
  try {
    // Fetch posts with category "artists" or tag "artist"
    const posts = await getPosts({ 
      categories: 'artists', // You'll need to create this category in WordPress
      per_page: 8,
      _embed: 1 // Include featured media
    });
    
    artists = posts.map((post: any) => ({
      id: post.id.toString(),
      name: post.title.rendered,
      specialty: post.excerpt?.rendered?.replace(/<[^>]*>/g, '').trim() || 'Artist',
      bio: post.content?.rendered?.replace(/<[^>]*>/g, '').trim() || '',
      image: extractFeaturedImage(post),
      social: extractSocialLinks(post.content?.rendered || ''),
      featured: isFeatured(post)
    }));
  } catch (error) {
    console.error('Error fetching artists:', error);
    // Fallback to default artists if WordPress fetch fails
    artists = [
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
  }
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

      {artists.length === 0 ? (
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Artists Coming Soon</h3>
            <p className="text-muted-foreground">
              Add artist posts to your WordPress site with the "artists" category to see them displayed here.
            </p>
          </div>
        </div>
      ) : (
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
      )}

      <div className="text-center mt-12">
        <Button size="lg" variant="outline">
          View All Artists
        </Button>
      </div>
    </section>
  );
}
