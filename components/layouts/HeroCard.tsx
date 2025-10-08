// components/layouts/HeroCard.tsx
import { Card } from "@/components/ui/card";

interface HeroCardProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function HeroCard({ title, subtitle, className = "" }: HeroCardProps) {
  return (
    <Card className={`relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 border-2 border-primary/20 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50" />
      <div className="relative p-8 md:p-12 text-center">
        <h1 
          className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {subtitle && (
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="mt-6 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>
      </div>
    </Card>
  );
}
