"use client";

// components/sections/Hero.tsx
import { renderPunkTitle } from "@/lib/punk-typography";

type HeroProps = {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
};

export function Hero({
  title,
  subtitle,
  backgroundImage,
  className,
}: HeroProps) {
  return (
    <section className={`relative mt-12 ${className  ?? ""}`}>
      {renderPunkTitle(title, "text-[5.5rem] md:text-[14rem]", "leading-none font-extrabold tracking-tight", "text-cyan-400")}
            <p className="mt-4 mb-4 text-center font-brand font-cyan-600  text-xl md:text-2xl text-white">
                {subtitle}
              </p>
      <div className="relative h-[70vh] min-h-[580px] w-[95%] mx-auto rounded-[14px] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover object-top"
          src="/Ecclection_hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={(e) => {
            // Ensure video is ready to play
            const video = e.currentTarget;
            if (video.readyState >= 2) {
              video.play().catch(() => {
                // Autoplay failed, but video is loaded
              });
            }
          }}
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-black/15" />

        {/* content */}
        <div className="relative z-10 grid h-full place-items-center text-center px-4">
          <div className="max-w-3xl">
            
            {subtitle && (
              <>
         
              <a
                className="p-8 mt-28 hover:rotate-[5deg] transition-all duration-300 col-span-2 mx-auto origin-top-left text-white font-brand text-2xl rounded-md bg-cyan-600/80"
                href="https://maps.app.goo.gl/ZMgVyGzAmNvomLMcA"
              >
                Come visit us!
              </a>
              
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}