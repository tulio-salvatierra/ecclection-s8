// Hero media
import background from "public/Ecclection_hero.mp4";

// components/sections/Hero.tsx
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
  function renderPunkTitle(text: string) {
    const words = text.trim().split(/\s+/);
    // Deterministic jitter angles to avoid SSR/CSR mismatch
    const angles = [-6, -3, 0, 3, 6, -4, 2, -2, 4];
    return (
      <h1 className="text-cyan-400 font-brand text-[5.5rem] md:text-[16rem] leading-none text-center font-extrabold tracking-tight">
        {words.map((word, idx) => {
          const angle = angles[idx % angles.length];
          return (
            <span
              key={`w-${idx}`}
              className="inline-block mr-2 md:mr-3 px-2 md:px-3 py-1 md:py-2 bg-cyan-600 text-black rounded-[3px] border-2 border-black shadow-[3px_3px_0_0_#000]"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              {word}
            </span>
          );
        })}
      </h1>
    );
  }
  return (
    <section className={`relative mt-12 ${className  ?? ""}`}>
      {renderPunkTitle(title)}
            <p className="mt-4 text-center font-brand font-cyan-600  text-xl md:text-2xl text-white">
                {subtitle}
              </p>
      <div className="relative h-[62vh] min-h-[380px] w-[95%] mx-auto rounded-[14px] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover object-top"
          src="/Ecclection_hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-black/15" />

        {/* content */}
        <div className="relative z-10 grid h-full place-items-center text-center px-4">
          <div className="max-w-3xl">
            
            {subtitle && (
              <>
         
              <a
                className="p-8 mt-28 hover:rotate-[-5deg] transition-all duration-300 col-span-2 mx-auto origin-top-left text-white font-brand text-2xl rounded-md hover:bg-cyan-600/80"
                href="tel:+17739517992"
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