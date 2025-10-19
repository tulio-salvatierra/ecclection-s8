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
          <p className="text-lg text-white max-w-3xl mx-auto">
            {content}
          </p>
        )}
        {image && (
          <div className="mt-8">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="mx-auto rounded-lg shadow-lg max-w-md"
            />
          </div>
        )}
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
        <Badge variant="secondary" className="text-sm">
          Community • Art • Creativity
        </Badge>
      </div>
    </section>
  );
}
