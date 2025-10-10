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
  return (
    <section className={`relative ${className ?? ""}`}>
      <h1 className="text-orange-400 font-brand text-[5.5rem] md:text-[16rem] tracking-tighter leading-none text-center font-extrabold tracking-tight">
              {title}
            </h1>
            <p className="mt-4 text-center font-brand font-cyan-600  text-xl md:text-2xl text-white">
                {subtitle}
              </p>
      <div className="relative h-[62vh] min-h-[380px] w-[95%] mx-auto rounded-[14px] overflow-hidden">
        {backgroundImage && (
          <img
            src={backgroundImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-top"
            loading="lazy"
          />
          
        )}

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