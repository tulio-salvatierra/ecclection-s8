"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Artist {
  name: string
  title: string
  description: string
  image: string
}

const artists: Artist[] = [
  {
    name: "Frankie",
    title: "the Creative Maverick Behind Cult Classics",
    description:
      "Hey there, audacious creative! I'm Frankie, founder of Cult Classics, your wing woman for game-changing branding and Showit Website Design. We're all about empowering bold, creative visionaries like you. Ready to dominate the conversation and shake up the status quo? Let's make magic.",
    image: "/woman-in-brown-crop-top-and-pants-editorial-fashio.jpg",
  },
  {
    name: "Alex",
    title: "the Visionary Designer Shaping Modern Aesthetics",
    description:
      "Hello! I'm Alex, lead designer at Cult Classics. With a passion for minimalist elegance and bold statements, I craft visual identities that resonate. My approach blends timeless design principles with contemporary innovation to create brands that stand out and stay relevant.",
    image: "/professional-designer-in-modern-outfit-editorial-s.jpg",
  },
  {
    name: "Jordan",
    title: "the Strategic Mind Behind Brand Evolution",
    description:
      "Hi, I'm Jordan, brand strategist extraordinaire. I believe every brand has a unique story waiting to be told. Through careful research and creative thinking, I help businesses discover their authentic voice and connect with their ideal audience in meaningful ways.",
    image: "/confident-professional-in-elegant-attire-editorial.jpg",
  },
]

export default function ArtistCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextArtist = () => {
    setCurrentIndex((prev) => (prev + 1) % artists.length)
  }

  const prevArtist = () => {
    setCurrentIndex((prev) => (prev - 1 + artists.length) % artists.length)
  }

  const currentArtist = artists[currentIndex]

  return (
    <section className="relative grid md:grid-cols-2 gap-12 px-6 md:px-16 py-24 bg-[#E8E3DA]">
      {/* Left: Tilted Frame with Portrait */}
      <div className="relative flex items-center justify-center">
        {/* Vertical Text */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
          <p className="font-sans text-xs tracking-[0.3em] text-[#5A5550] uppercase whitespace-nowrap">Meet the team</p>
        </div>

        {/* Tilted Frame with Transition */}
        <div className="relative w-full max-w-sm ml-12">
          <div className="relative rotate-2 bg-black p-3 shadow-2xl">
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
              <img
                key={currentIndex}
                src={currentArtist.image || "/placeholder.svg"}
                alt={`${currentArtist.name} - ${currentArtist.title}`}
                className="w-full h-full object-cover animate-in fade-in duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right: Text Content with Transition */}
      <div className="flex flex-col justify-center space-y-6">
        <p className="font-sans text-xs tracking-[0.3em] text-[#5A5550] uppercase">About Us</p>

        <div key={`content-${currentIndex}`} className="animate-in fade-in slide-in-from-right-4 duration-500">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#5A5550] leading-tight text-balance mb-6">
            Meet {currentArtist.name}, {currentArtist.title}
          </h2>

          <p className="font-serif text-base text-[#5A5550] leading-relaxed max-w-lg mb-8">
            {currentArtist.description}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <button className="font-sans text-xs tracking-[0.2em] text-[#5A5550] uppercase px-8 py-3 border border-[#5A5550] rounded-full hover:bg-[#5A5550] hover:text-[#E8E3DA] transition-colors">
            Learn More
          </button>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevArtist}
              className="p-2 rounded-full border border-[#5A5550] text-[#5A5550] hover:bg-[#5A5550] hover:text-[#E8E3DA] transition-colors"
              aria-label="Previous artist"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {artists.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-[#5A5550] w-6" : "bg-[#5A5550]/30"
                  }`}
                  aria-label={`Go to artist ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextArtist}
              className="p-2 rounded-full border border-[#5A5550] text-[#5A5550] hover:bg-[#5A5550] hover:text-[#E8E3DA] transition-colors"
              aria-label="Next artist"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
