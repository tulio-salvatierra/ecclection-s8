import { Contact } from "@/components/sections/Contact"
import { getContentBlocksBySlug, type ContentBlock } from "@/lib/wp"
import { ArtistCarousel } from "@/components/ArtistCarousel"

// Helper functions from page.tsx
type Maybe<T> = T | undefined;

const decode = (s = "") => s.replace(/&amp;/g, "&").trim();
const stripTags = (html = "") => html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

function isHeading(b: ContentBlock) {
  return b.type === "heading";
}
function isText(b: ContentBlock) {
  return b.type === "text";
}
function isImage(b: ContentBlock) {
  return b.type === "image";
}
function findHeadingIndex(blocks: ContentBlock[], title: string): number {
  const needle = title.trim().toLowerCase();
  return blocks.findIndex(
    (b) => isHeading(b) && decode(b.content).toLowerCase() === needle
  );
}

function sliceSection(
  blocks: ContentBlock[],
  startHeading: string,
  endHeading?: string
): ContentBlock[] {
  const start = findHeadingIndex(blocks, startHeading);
  if (start === -1) return [];
  let end = blocks.length;
  if (endHeading) {
    const e = findHeadingIndex(blocks, endHeading);
    if (e !== -1 && e > start) end = e;
  }
  return blocks.slice(start + 1, end);
}

function mapArtists(blocks: ContentBlock[]) {
  const heading = "Featured Artists";
  const cards: { title: string; text: string; image?: string }[] = [];

  let i = 0;
  while (i < blocks.length) {
    const b = blocks[i];
    if (isHeading(b)) {
      const title = decode(b.content);
      let j = i + 1;
      let text = "";
      let image: Maybe<string>;
      while (j < blocks.length && !isHeading(blocks[j])) {
        if (!text && isText(blocks[j])) text = stripTags(blocks[j].content);
        if (
          !image &&
          isImage(blocks[j]) &&
          typeof (blocks[j] as any).metadata === 'object' &&
          (blocks[j] as any).metadata?.src
        ) {
          image = (blocks[j] as any).metadata.src as Maybe<string>;
        }
        j++;
      }
      if (title && title.toLowerCase() !== heading.toLowerCase()) {
        cards.push({ title, text, image });
      }
      i = j;
    } else {
      i++;
    }
  }

  return { heading, cards };
}

export default async function ArtistsPage() {
  const blocks: ContentBlock[] = await getContentBlocksBySlug("home");
  const artistsBlocks = sliceSection(blocks, "Featured Artists", "Community Happenings");
  const artists = mapArtists(artistsBlocks);

  return (
    <>
      <ArtistCarousel artists={artists.cards.slice(0, 3)} />
      <Contact heading="Come Find Us!" cards={[]} />
    </>
  )
}
