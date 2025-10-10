// lib/mappers.ts
export function mapHero(blocks: any[]) {
    const firstHeading = blocks.find(b => b.type === "heading")?.content ?? "";
    const firstText = blocks.find(b => b.type === "text")?.content ?? "";
    const firstImage = blocks.find(b => b.type === "image")?.metadata?.src;
  
    // Strip tags from paragraph
    const subtitle = firstText.replace(/<\/?[^>]+(>|$)/g, "").trim();
  
    return {
      title: firstHeading,
      subtitle,
      backgroundImage: firstImage,
    };
  }