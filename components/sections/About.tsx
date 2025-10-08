// components/sections/About.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AboutProps {
  title?: string;
  content?: string;
  features?: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  className?: string;
}

export function About({ 
  title = "About Ecclection", 
  content, 
  features = [
    {
      title: "Local Art Community",
      description: "Supporting local artists and fostering creative connections in our community.",
      icon: "🎨"
    },
    {
      title: "Creative Events",
      description: "Hosting workshops, exhibitions, and art shows throughout the year.",
      icon: "🎭"
    },
    {
      title: "Artistic Collaboration",
      description: "Bringing together artists, collectors, and art enthusiasts.",
      icon: "🤝"
    }
  ],
  className = "" 
}: AboutProps) {
  return (
    <section className={`container section-pad ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {title}
        </h2>
        {content && (
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {content}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {feature.title}
            </h3>
            <p className="text-muted-foreground">
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
