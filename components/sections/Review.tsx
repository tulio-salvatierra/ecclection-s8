'use client'
import { ExternalLink, Star } from "lucide-react"
import { Button } from "../ui/button"
import React from "react"
import { useFadeAnimation } from "@/app/hooks/useFadeAnimtion"

export function Review() {
  const ref = React.useRef<HTMLElement>(null);
  useFadeAnimation(ref);

  const featuredArticle = {
    publication: "Block Club Chicago",
    title: "New Portage Park Shop Ecclection Is Stacked With Local Artwork, Vintage Finds And More",
    excerpt:
      "The owner of a funky and colorful resale shop filled to the brim with affordable goods and trinkets wants to increase business and community on the western end of Portage Park",
    date: "March 2024",
    url: "https://blockclubchicago.org/2023/11/21/portage-park-shop-ecclection-is-stacked-with-local-artwork-vintage-finds-and-holiday-collections/",
    image: "/article.png",
  }

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
          <h2 className="fade-in font-brand text-center text-4xl md:text-5xl text-cyan-500 mb-4">Press & Reviews</h2>
          <p className="fade-in text-white text-lg max-w-2xl mx-auto text-center">What they're saying about us</p>
        </div>

        <article className="fade-in border-2 border-black rounded-md mb-12 overflow-hidden backdrop-blur-3xl">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto bg-muted">
              <img
                src={featuredArticle.image || "/placeholder.svg"}
                alt={featuredArticle.title}
                className="fade-in w-full h-full object-cover shadow-2 shadow-[3px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
              />
              <div className="fade-in absolute top-4 left-4 bg-accent text-background px-3 py-1 text-md font-brand uppercase tracking-wider">
                Featured
              </div>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="text-white text-sm font-brand uppercase tracking-wider mb-3">
                {featuredArticle.publication}
              </span>
              <h3 className="fade-in font-brand text-cyan-500 text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {featuredArticle.title}
              </h3>
              <p className="fade-in text-white leading-relaxed mb-6 text-lg">{featuredArticle.excerpt}</p>
              <div className="flex items-center justify-between">
                <time className="fade-in text-white text-sm">{featuredArticle.date}</time>
                <a
                  href={featuredArticle.url}
                  className="bg-accent fade-in hover:bg-accent/90 text-accent-foreground text-base md:text-lg p-2 font-brand tracking-wide border-2 border-black shadow-[3px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                >
                  Read Full Article
                </a>
              </div>
            </div>
          </div>
        </article>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-brand text-2xl md:text-3xl font-bold text-cyan-500">Google Reviews</h3>
            <a
              href="https://www.google.com/maps/place/Ecclection/@41.9528405,-87.7812916,940m/data=!3m1!1e3!4m8!3m7!1s0x880fcbaefc6b5d6f:0xb8883b1b82dc506e!8m2!3d41.9528405!4d-87.7787167!9m1!1b1!16s%2Fg%2F11vf1t1fyl?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent fade-in hover:bg-accent/90 text-accent-foreground text-base md:text-lg p-4 font-brand tracking-wide border-2 border-black shadow-[3px_3px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
            >
              View All Reviews
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {googleReviews.map((review, index) => (
              <div key={index} className="border-2 border-black rounded-md p-6 hover:border-accent transition-colors backdrop-blur-3xl">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="fade-in text-white text-lg leading-relaxed mb-4">{review.text}</p>
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
      </div>
    </section>
  )
}
