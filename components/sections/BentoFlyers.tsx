import { Badge } from "@/components/ui/badge";
import { renderPunkTitle } from "@/lib/punk-typography";

export function FlyersBento() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-width mx-auto">
        {renderPunkTitle("Food, Housing, Mental & Legal Support", "text-4xl sm:text-5xl lg:text-6xl mb-8 text-center text-white")}
        
          
        <p className="text-left text-white mb-12 sm:w-1/2 mx-auto leading-6 text-md">
          Below are flyers that provide important information on immigration,
          food, and housing. Feel free to download, print, and share them within
          your community to help spread awareness and support those in need.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-6 sm:grid-rows-3 gap-4 sm:h-[700px] lg:h-[800px]">
          {/* Large flyer - spans 2 columns and 2 rows */}
          

          {/* Tall flyer - right side, spans 3 rows */}
          <div className="col-span-1 sm:col-span-2 sm:row-span-2 border-2 border-foreground hover:border-accent transition-colors overflow-hidden group flex items-center justify-center bg-black/10">
            <img
              src="/flyers/IMG_6129.jpeg"
              alt="Housing services flyer"
              className="w-full h-full object-fit group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Small flyer - bottom left */}
          <div className="col-span-1 sm:col-span-2 sm:row-span-1 border-2 border-foreground hover:border-accent transition-colors overflow-hidden group flex items-center justify-center bg-black/10">
            <img
              src="/flyers/IMG_6197.jpeg"
              alt="Free store flyer"
              className="w-full h-full object-fit group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Medium flyer - bottom middle-left */}
          <div className="col-span-1 sm:col-span-2 sm:row-span-2 border-2 border-foreground hover:border-accent transition-colors overflow-hidden group flex items-center justify-center bg-black/10">
            <img
              src="/flyers/kyr.png"
              alt="ICE abduction flyer"
              className="w-full h-full object-fit group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Small flyer - bottom right */}
          <div className="col-span-1 sm:col-span-2 sm:row-span-1 border-2 border-foreground hover:border-accent transition-colors overflow-hidden group flex items-center justify-center bg-black/10">
            <img
              src="/flyers/IMG_6370.jpeg"
              alt="Immigrant healthcare flyer"
              className="w-full h-full object-fit group-hover:scale-105 transition-transform duration-300"
            />
          </div><div className="mt-12 text-center col-span-1 sm:col-span-6">
        <Badge
          variant="secondary"
          className="w-auto text-4xl sm:text-4xl md:text-4xl lg:text-6xl px-4 py-2 bg-cyan-600 border-2 border-black shadow-[4px_4px_0_0_#000] font-brand"
        >
          More Resources Below
        </Badge>
      </div>
        </div> 
      </div>
     
    </section>
  );
}
