// components/layouts/ContentCard.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContentBlock } from "@/lib/content-parser";

interface ContentCardProps {
  content: ContentBlock;
  variant?: 'default' | 'featured' | 'image' | 'text' | 'quote';
  className?: string;
}

export function ContentCard({ content, variant = 'default', className = "" }: ContentCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'featured':
        return 'border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5';
      case 'image':
        return 'border-2 border-secondary/30 bg-gradient-to-br from-secondary/5 to-accent/5';
      case 'quote':
        return 'border-l-4 border-primary bg-muted/50 italic';
      case 'text':
        return 'border border-border bg-card';
      default:
        return 'border border-border bg-card hover:shadow-lg transition-shadow';
    }
  };

  const getCardSize = () => {
    switch (variant) {
      case 'featured':
        return 'md:col-span-2 lg:col-span-2';
      case 'image':
        return 'md:col-span-1 lg:col-span-1';
      default:
        return 'md:col-span-1 lg:col-span-1';
    }
  };

  const renderContent = () => {
    switch (content.type) {
      case 'heading':
        const HeadingTag = `h${content.metadata?.level || 2}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag className="text-2xl font-bold text-foreground mb-4">
            {content.content}
          </HeadingTag>
        );
      
      case 'image':
        return (
          <div className="space-y-3">
            <div 
              className="wp-content"
              dangerouslySetInnerHTML={{ __html: content.content }}
            />
            {content.metadata?.caption && (
              <p className="text-sm text-white italic">
                {content.metadata.caption}
              </p>
            )}
          </div>
        );
      
      case 'quote':
        return (
          <blockquote className="text-lg italic text-foreground/80 border-l-4 border-primary pl-4">
            <div 
              className="wp-content"
              dangerouslySetInnerHTML={{ __html: content.content }}
            />
          </blockquote>
        );
      
      case 'list':
        return (
          <div 
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        );
      
      default:
        return (
          <div 
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        );
    }
  };

  return (
    <Card className={`${getVariantStyles()} ${getCardSize()} ${className} p-6 transition-all duration-300 hover:scale-[1.02]`}>
      <div className="flex items-start justify-between mb-3">
        <Badge 
          variant="secondary" 
          className="text-xs font-medium"
        >
          {content.type}
        </Badge>
      </div>
      
      <div className="space-y-4">
        {renderContent()}
      </div>
    </Card>
  );
}
