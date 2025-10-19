"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Artist {
  title: string
  text: string
  image?: string
}

interface ArtistCarouselProps {
  artists: Artist[]
}

export function ArtistCarousel({ artists }: ArtistCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextArtist = () => {
    setCurrentIndex((prev) => (prev + 1) % artists.length)
  }

  const prevArtist = () => {
    setCurrentIndex((prev) => (prev - 1 + artists.length) % artists.length)
  }

  if (!artists || artists.length === 0) {
    return (
      <section className="container section-pad min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">No artists available at the moment.</p>
      </section>
    )
  }

  const currentArtist = artists[currentIndex]

  return (
    <section className="relative grid md:grid-cols-2 gap-12 container section-pad min-h-screen items-center">
      {/* Left: Tilted Frame with Portrait */}
      <div className="relative flex items-center justify-center">
        {/* Vertical Text */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
          <p className="font-brand text-sm tracking-wide text-cyan-400 uppercase whitespace-nowrap">Meet the Artists</p>
        </div>

        {/* Tilted Frame with Transition */}
        <div className="relative w-full max-w-sm ml-12">
          <div className="relative rotate-2 bg-cyan-600 p-3 border-2 border-black shadow-[8px_8px_0_0_#000]">
            <div className="aspect-[3/4] bg-black overflow-hidden">
              {currentArtist.image ? (
                <img
                  key={currentIndex}
                  src={currentArtist.image}
                  alt={currentArtist.title}
                  className="w-full h-full object-cover animate-in fade-in duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl">🎨</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right: Text Content with Transition */}
      <div className="flex flex-col justify-center space-y-6">
        <p className="font-brand text-sm tracking-wide text-cyan-400 uppercase">Featured Artists</p>

        <div key={`content-${currentIndex}`} className="animate-in fade-in slide-in-from-right-4 duration-500">
          <h2 className="font-brand text-4xl md:text-5xl lg:text-6xl text-cyan-600 leading-tight text-balance mb-6">
            {currentArtist.title}
          </h2>

          <p className="text-base text-white leading-relaxed max-w-lg mb-8">
            {currentArtist.text}
          </p>
        </div>

        <div className="flex items-center gap-6">
          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevArtist}
              className="p-2 bg-cyan-600 border-2 border-black text-black hover:bg-cyan-400 transition-colors shadow-[3px_3px_0_0_#000]"
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
                  className={`h-2 rounded-full transition-all border border-black ${
                    index === currentIndex ? "bg-cyan-600 w-6" : "bg-cyan-600/30 w-2"
                  }`}
                  aria-label={`Go to artist ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextArtist}
              className="p-2 bg-cyan-600 border-2 border-black text-black hover:bg-cyan-400 transition-colors shadow-[3px_3px_0_0_#000]"
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

