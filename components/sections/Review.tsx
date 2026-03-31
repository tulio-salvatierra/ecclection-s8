'use client'
import { ExternalLink, Star } from "lucide-react"
import { Button } from "../ui/button"
import React from "react"
import { useFadeAnimation } from "@/app/hooks/useFadeAnimtion"

function getYouTubeEmbedUrl(input: string): string | null {
  try {
    const url = new URL(input)

    // youtu.be/<id>
    if (url.hostname === "youtu.be") {
      const id = url.pathname.split("/").filter(Boolean)[0]
      if (!id) return null
      return `https://www.youtube.com/embed/${id}`
    }

    // youtube.com/watch?v=<id>
    if (url.hostname.endsWith("youtube.com")) {
      const v = url.searchParams.get("v")
      if (v) return `https://www.youtube.com/embed/${v}`

      // youtube.com/shorts/<id> or youtube.com/embed/<id>
      const parts = url.pathname.split("/").filter(Boolean)
      const shortsIdx = parts.indexOf("shorts")
      if (shortsIdx !== -1 && parts[shortsIdx + 1]) {
        return `https://www.youtube.com/embed/${parts[shortsIdx + 1]}`
      }
      const embedIdx = parts.indexOf("embed")
      if (embedIdx !== -1 && parts[embedIdx + 1]) {
        return `https://www.youtube.com/embed/${parts[embedIdx + 1]}`
      }
    }

    return null
  } catch {
    return null
  }
}

export function Review() {
  const ref = React.useRef<HTMLElement>(null);
  useFadeAnimation(ref);

  const featuredArticle: Array<{
    publication: string
    title: string
    excerpt: string
    date: string
    url: string
    imageSrc?: string
  }> = [{
    publication: "CBS News Chicago",
    title: "Treasures on display at the Ecclection Variety Store in Chicago's Portage Park neighborhood",
    excerpt:
      "The quirky shop on Chicago’s Northwest Side is full of surprises — sustainable products, vintage finds, and art from local creators. Jackie Kostek spent the morning there.",
    date: "March 2026",
    url: "https://youtu.be/5MyXGeFvy58?si=dnIinXLgWwIjvLIB",
  },
  {
    publication: "Block Club Chicago",
    title: "New Portage Park Shop Ecclection Is Stacked With Local Artwork, Vintage Finds And More",
    excerpt:
      "The owner of a funky and colorful resale shop filled to the brim with affordable goods and trinkets wants to increase business and community on the western end of Portage Park",
    date: "March 2024",
    url: "https://blockclubchicago.org/2023/11/21/portage-park-shop-ecclection-is-stacked-with-local-artwork-vintage-finds-and-holiday-collections/",
    imageSrc: "/article.png",
  },
]
  const googleReviews = [
    {
      author: "Deb Nettles",
      rating: 5,
      text: "Looking for a unique gift or something fun or interesting for your home?  This place has some fun art and collectible merch!  I will be back!",
      date: "A month ago",
    },
    {
      author: "Doll Stabs",
      rating: 5,
      text: "Thank you guys your selection is beautiful and thank you for having a variety of  shoe sizes🙏🏽",
      date: "2 month ago",
    },
    {
      author: "Carole Baker",
      rating: 5,
      text: "I loved this specialty store.  So many unique items and gifts.  I will definitely go back.",
      date: "3 months ago",
    },
  ]

  return (
    <section ref={ref} className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-brand text-center text-4xl md:text-5xl text-cyan-500 mb-4">Press & Reviews</h2>
          <p className="ftext-white text-lg max-w-2xl mx-auto text-center">What they're saying about us</p>
        </div>
{featuredArticle.map((article, index) => (
  <div key={index} className="fade-in border-2 border-black rounded-md mb-12 overflow-hidden backdrop-blur-3xl">
        <article className="border-2 border-black rounded-md mb-12 overflow-hidden backdrop-blur-3xl">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-full md:h-auto bg-muted">
              {article.imageSrc ? (
                <img
                  src={article.imageSrc}
                  alt={article.title}
                  className="w-full h-full object-cover shadow-2 shadow-[3px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                />
              ) : (
                <div className="w-100% h-full md:h-auto bg-muted">
                  <iframe
                    src={getYouTubeEmbedUrl(article.url) ?? undefined}
                    title={article.title}
                    className="w-full h-120 object-cover shadow-2 shadow-[3px_3px_0_0_#000]"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              )}
              <div className="fade-in absolute top-4 left-4 bg-accent text-background px-3 py-1 text-md font-brand uppercase tracking-wider">
                Featured
              </div>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="text-white text-sm font-brand uppercase tracking-wider mb-3">
                {article.publication}
              </span>
              <h3 className="font-brand text-cyan-500 text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {article.title}
              </h3>
              <p className="text-white leading-relaxed mb-6 text-lg">{article.excerpt}</p>
              <div className="flex items-center justify-between">
                <time className="text-white text-sm">{article.date}</time>
                <a
                  href={article.url}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-base md:text-lg p-2 font-brand tracking-wide border-2 border-black shadow-[3px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                >
                  Read Full Article
                </a>
              </div>
              </div>
            </div>
          </article>
          </div>
      ))}
      </div>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-brand text-2xl md:text-3xl font-bold text-cyan-500">Google Reviews</h3>
            <a
              href="https://www.google.com/maps/place/Ecclection/@41.9528405,-87.7812916,940m/data=!3m1!1e3!4m8!3m7!1s0x880fcbaefc6b5d6f:0xb8883b1b82dc506e!8m2!3d41.9528405!4d-87.7787167!9m1!1b1!16s%2Fg%2F11vf1t1fyl?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base md:text-lg p-4 font-brand tracking-wide border-2 border-black shadow-[3px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
            >
              View All Reviews
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {googleReviews.map((review, index) => (
              <div key={index} className="fade-in border-2 border-black rounded-md p-6 hover:border-accent transition-colors backdrop-blur-3xl">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-white text-lg leading-relaxed mb-4">{review.text}</p>
                <div className="flex items-center justify-between text-xs text-white">
                  <span className="font-bold">{review.author}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

         <div className="mt-12 text-center  border-cyan-500 pt-8">
          <Button
            size="lg"
            className="bg-accent fade-in hover:bg-accent/90 text-accent-foreground text-base md:text-lg px-8 py-6 font-brand tracking-wide border-2 border-black shadow-[3px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
          >
            COME VISIT TODAY!
          </Button>
        </div>
        </section>
  )
}
