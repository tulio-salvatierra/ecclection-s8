// components/sections/Hero.tsx
import { Card } from "@/components/ui/card";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
}

export function Hero({ title, subtitle, backgroundImage, className = "" }: HeroProps) {
  console.log(backgroundImage, "backgroundImage", title, "title", subtitle, "subtitle", className, "className", "Hero");
  return (
    <section className={`min-h-300 flex items-center ${className}`}>
      <div className="container section-pad">
        <div className="h-300 grid items-center relative overflow-hidden bg-[url('https://peanuttyxx.wordpress.com/wp-content/uploads/2025/10/img_4131.jpeg')] bg-cover bg-top from-primary/10 via-secondary/5 to-accent/10 border-2 border-primary/20 backdrop-blur-sm">
          <div className="absolute rounded-lg inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50" />
          <div className="relative p-8 md:p-12 text-center">
            {/* <h1 
              className="text-4xl md:text-8xl font-extrabold text-white mb-4 leading-tight font-brand"
            >
              {title}
            </h1> */}
            
            {subtitle && (
              <p className="text-6xl md:text-8xl text-white max-w-2xl mx-auto font-brand">
                {subtitle}
                {backgroundImage && (
                  <img src={backgroundImage} alt={title} className="w-full h-full object-cover" />
                )}
              </p>
            )}
            <div className="mt-6 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
