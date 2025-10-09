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
    <section className={`min-h-screen flex items-center ${className}`}>
      <div className="mx-6 mx-auto w-screen mt-10 grid place-items-center">
      <h1 className="w-full text-center text-orange-400 md:text-[11rem] text-[4rem] font-normal leading-tight font-['Righteous']">WELCOME TO ECCLECTION</h1>
      <p className="text-center text-cyan-600 font-bold font-brand p-2 w-full self-stretch justify-start text-xl md:text-4xl">Where art meets community</p>
        <div className="bg-white/20 w-[95%] h-[850px] object-cover rounded-md overflow-hidden grid place-items-center bg-[url('https://peanuttyxx.wordpress.com/wp-content/uploads/2025/10/img_4131.jpeg')] bg-cover bg-top from-primary/10 via-secondary/5 to-accent/10 border-2 border-primary/20 backdrop-blur-sm">
          <a className="p-8 hover:rotate-[-5deg] transition-all duration-300 col-span-2 mx-auto origin-top-left bg-cyan-600 text-white font-brand text-2xl rounded-md hover:bg-cyan-600/80" href="tel:+17739517992">Come visit us!</a></div>      </div>
    </section>
  );
}
