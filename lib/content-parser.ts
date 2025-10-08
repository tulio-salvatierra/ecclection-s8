// lib/content-parser.ts
import { parseDocument } from 'htmlparser2';
import { Element, Text } from 'domhandler';

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

function getTextContent(element: Element): string {
  return element.children
    .filter((child): child is Text => child.type === 'text')
    .map(child => child.data)
    .join('')
    .trim();
}

function getOuterHTML(element: Element): string {
  // Simple HTML serialization for our use case
  const tagName = element.name;
  const attributes = Object.entries(element.attribs || {})
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');
  const attrs = attributes ? ` ${attributes}` : '';
  
  if (element.children.length === 0) {
    return `<${tagName}${attrs} />`;
  }
  
  const innerHTML = element.children
    .map(child => {
      if (child.type === 'text') {
        return child.data;
      } else if (child.type === 'tag') {
        return getOuterHTML(child as Element);
      }
      return '';
    })
    .join('');
  
  return `<${tagName}${attrs}>${innerHTML}</${tagName}>`;
}

function findElements(doc: Element, selector: string): Element[] {
  const results: Element[] = [];
  const [tagName] = selector.split(',');
  
  function traverse(node: Element) {
    if (node.type === 'tag') {
      if (tagName.includes(node.name)) {
        results.push(node);
      }
      node.children.forEach(child => {
        if (child.type === 'tag') {
          traverse(child as Element);
        }
      });
    }
  }
  
  traverse(doc);
  return results;
}

export function extractContentBlocks(htmlContent: string): ContentBlock[] {
  if (!htmlContent) return [];
  
  const blocks: ContentBlock[] = [];
  const doc = parseDocument(htmlContent);
  
  // Extract headings
  const headings = findElements(doc, 'h1,h2,h3,h4,h5,h6');
  headings.forEach((heading, index) => {
    blocks.push({
      id: `heading-${index}`,
      type: 'heading',
      content: getTextContent(heading),
      metadata: {
        level: parseInt(heading.name.charAt(1))
      }
    });
  });
  
  // Extract images
  const images = findElements(doc, 'img');
  images.forEach((img, index) => {
    blocks.push({
      id: `image-${index}`,
      type: 'image',
      content: getOuterHTML(img),
      metadata: {
        src: img.attribs?.src || '',
        alt: img.attribs?.alt || '',
        caption: img.attribs?.['data-caption'] || ''
      }
    });
  });
  
  // Extract paragraphs and other text content
  const paragraphs = findElements(doc, 'p');
  paragraphs.forEach((p, index) => {
    const textContent = getTextContent(p);
    if (textContent) {
      blocks.push({
        id: `text-${index}`,
        type: 'text',
        content: getOuterHTML(p)
      });
    }
  });
  
  // Extract lists
  const lists = findElements(doc, 'ul,ol');
  lists.forEach((list, index) => {
    const listItems = findElements(list, 'li');
    const items = listItems.map(li => getTextContent(li));
    blocks.push({
      id: `list-${index}`,
      type: 'list',
      content: getOuterHTML(list),
      metadata: {
        items
      }
    });
  });
  
  // Extract blockquotes
  const quotes = findElements(doc, 'blockquote');
  quotes.forEach((quote, index) => {
    blocks.push({
      id: `quote-${index}`,
      type: 'quote',
      content: getOuterHTML(quote)
    });
  });
  
  return blocks;
}

export function extractImages(htmlContent: string): Array<{src: string; alt: string; caption?: string}> {
  if (!htmlContent) return [];
  
  const doc = parseDocument(htmlContent);
  const images = findElements(doc, 'img');
  
  return images.map(img => ({
    src: img.attribs?.src || '',
    alt: img.attribs?.alt || '',
    caption: img.attribs?.['data-caption'] || ''
  }));
}

export function stripHtml(html: string): string {
  if (!html) return '';
  const doc = parseDocument(html);
  return getTextContent(doc);
}
