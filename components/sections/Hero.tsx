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
      <div className="container section-pad mx-auto h-screen">
        <div className="bg-white/20 w-[100%] h-[100%] grid grid-cols-9 overflow-hidden bg-[url('https://peanuttyxx.wordpress.com/wp-content/uploads/2025/10/img_4131.jpeg')] bg-cover bg-top from-primary/10 via-secondary/5 to-accent/10 border-2 border-primary/20 backdrop-blur-sm">
          
          <div className="h-50 flex justify-between items-center p-8 w-full mt-20">
            
            
              <h1 className="col-span-7 w-full justify-start text-orange-400 md:text-8xl text-4xl font-normal leading-tight font-['Righteous']">WELCOME TO ECCLECTION</h1>
              <p className="text-end bg-white/30 p-4 w-50 self-stretch justify-start text-black-700 text-xl md:text-4xl">Where art meets community</p>
              <a className="p-4 col-span-2 mx-auto origin-top-left bg-cyan-600 text-white text-2xl rounded-md hover:bg-cyan-600/80" href="tel:+17739517992">Come visit us!</a></div>
              
             
            
            
           
            
          </div>
      </div>
    </section>
  );
}
