// lib/content-parser.ts - Simplified version without external dependencies

export interface ContentBlock {
  id: string;
  type: 'text' | 'image' | 'heading' | 'list' | 'quote' | 'gallery';
  content: string;
  metadata?: {
    level?: number; // for headings
    items?: string[]; // for lists
    src?: string; // for images
    alt?: string;
    caption?: string;
  };
}

// Simple regex-based HTML parsing without external dependencies
function extractImages(html: string): Array<{src: string; alt: string; caption?: string}> {
  const imgRegex = /<img[^>]+src="([^"]*)"[^>]*(?:alt="([^"]*)")?[^>]*>/gi;
  const images: Array<{src: string; alt: string; caption?: string}> = [];
  let match;
  
  while ((match = imgRegex.exec(html)) !== null) {
    images.push({
      src: match[1] || '',
      alt: match[2] || '',
      caption: ''
    });
  }
  
  return images;
}

function extractHeadings(html: string): Array<{level: number; content: string}> {
  const headingRegex = /<(h[1-6])[^>]*>(.*?)<\/h[1-6]>/gi;
  const headings: Array<{level: number; content: string}> = [];
  let match;
  
  while ((match = headingRegex.exec(html)) !== null) {
    const level = parseInt(match[1].charAt(1));
    const content = match[2].replace(/<[^>]*>/g, '').trim();
    if (content) {
      headings.push({ level, content });
    }
  }
  
  return headings;
}

function extractParagraphs(html: string): string[] {
  const pRegex = /<p[^>]*>(.*?)<\/p>/gi;
  const paragraphs: string[] = [];
  let match;
  
  while ((match = pRegex.exec(html)) !== null) {
    const content = match[1].trim();
    if (content) {
      paragraphs.push(content);
    }
  }
  
  return paragraphs;
}

function extractLists(html: string): Array<{items: string[]; type: 'ul' | 'ol'}> {
  const listRegex = /<(ul|ol)[^>]*>(.*?)<\/(ul|ol)>/gi;
  const lists: Array<{items: string[]; type: 'ul' | 'ol'}> = [];
  let match;
  
  while ((match = listRegex.exec(html)) !== null) {
    const listType = match[1] as 'ul' | 'ol';
    const listContent = match[2];
    const liRegex = /<li[^>]*>(.*?)<\/li>/gi;
    const items: string[] = [];
    let liMatch;
    
    while ((liMatch = liRegex.exec(listContent)) !== null) {
      const itemContent = liMatch[1].replace(/<[^>]*>/g, '').trim();
      if (itemContent) {
        items.push(itemContent);
      }
    }
    
    if (items.length > 0) {
      lists.push({ items, type: listType });
    }
  }
  
  return lists;
}

function extractQuotes(html: string): string[] {
  const quoteRegex = /<blockquote[^>]*>(.*?)<\/blockquote>/gi;
  const quotes: string[] = [];
  let match;
  
  while ((match = quoteRegex.exec(html)) !== null) {
    const content = match[1].replace(/<[^>]*>/g, '').trim();
    if (content) {
      quotes.push(content);
    }
  }
  
  return quotes;
}

export function extractContentBlocks(htmlContent: string): ContentBlock[] {
  if (!htmlContent) return [];
  
  const blocks: ContentBlock[] = [];
  let blockIndex = 0;
  
  // Extract headings
  const headings = extractHeadings(htmlContent);
  headings.forEach(heading => {
    blocks.push({
      id: `heading-${blockIndex++}`,
      type: 'heading',
      content: heading.content,
      metadata: {
        level: heading.level
      }
    });
  });
  
  // Extract images
  const images = extractImages(htmlContent);
  images.forEach(image => {
    blocks.push({
      id: `image-${blockIndex++}`,
      type: 'image',
      content: `<img src="${image.src}" alt="${image.alt}" />`,
      metadata: {
        src: image.src,
        alt: image.alt,
        caption: image.caption
      }
    });
  });
  
  // Extract paragraphs
  const paragraphs = extractParagraphs(htmlContent);
  paragraphs.forEach(paragraph => {
    blocks.push({
      id: `text-${blockIndex++}`,
      type: 'text',
      content: `<p>${paragraph}</p>`
    });
  });
  
  // Extract lists
  const lists = extractLists(htmlContent);
  lists.forEach(list => {
    const listItems = list.items.map(item => `<li>${item}</li>`).join('');
    blocks.push({
      id: `list-${blockIndex++}`,
      type: 'list',
      content: `<${list.type}>${listItems}</${list.type}>`,
      metadata: {
        items: list.items
      }
    });
  });
  
  // Extract quotes
  const quotes = extractQuotes(htmlContent);
  quotes.forEach(quote => {
    blocks.push({
      id: `quote-${blockIndex++}`,
      type: 'quote',
      content: `<blockquote>${quote}</blockquote>`
    });
  });
  
  return blocks;
}

export function stripHtml(html: string): string {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').trim();
}
