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
          <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-cyan-600 mb-3">
              {feature.title}
            </h3>
            <p className="text-cyan-500">
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
