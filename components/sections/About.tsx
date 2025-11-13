// components/sections/About.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AboutProps {
  title?: string;
  content?: string;
  image?: {
    src: string;
    alt: string;
  };
  features?: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  className?: string;
}

export function About({
  title,
  content,
  image,
  features = [],
  className = ""
}: AboutProps) {
  console.log(features);
  return (
    <section className={`container section-pad ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 font-brand mb-4">
          {title}
        </h2>
        {content && (
          <p className="text-lg text-white text-left max-w-3xl mx-auto">
            We also support our community of local artists and makers by featuring <strong>rotating displays</strong> and art events that connect creativity with customers. From handcrafted candles, jewelry, wellness items, home décor and mix media to one-of-a-kind accessories and collectibles, Ecclection continues to grow as a neighborhood hub for imagination and collaboration bringing people together through art and unique <strong>affordable finds</strong>to keep your wardrobe and home looking fresh and funky, connect with other humans or simply to have a conversation.
          </p>
          
        )}
        {image && (
          <div className="mt-8">
            <img
              src={image.src}
              alt={image.alt}
              className="mx-auto rounded-lg shadow-lg w-full max-w-md border-2 border-black"
            />
          </div>
          
        )}
         <a
              href="/about"
              
              rel="_self"
              className="inline-block mt-4 px-8 py-4 bg-cyan-600 text-black font-brand text-lg rounded-lg border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Read more about us!
            </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 text-center bg-cyan-600 border-2 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-black font-brand mb-3">
              {feature.title}
            </h3>
            <p className="text-black">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Badge variant="secondary" className="w-auto text-4xl sm:text-4xl md:text-4xl lg:text-6xl px-4 py-2 bg-cyan-600 border-2 border-black shadow-[4px_4px_0_0_#000] font-brand">
          Community • Art • Creativity • Sustainability
        </Badge>
      </div>
    </section>
  );
}
