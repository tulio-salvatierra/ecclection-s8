import { Hero } from "@/components/sections/Hero";
import { Artists } from "@/components/sections/Artists";
import { Events } from "@/components/sections/Events";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { UnderConstruction } from "@/components/sections/UnderConstruction";



import { getPageBySlug, getContentBlocksBySlug, type ContentBlock } from "@/lib/wp";

// ---------- helpers for parsing WP blocks ----------
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

/** Returns blocks between two H2 headings (exclusive of the start heading). */
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

// ---------- mappers from flat blocks -> component props ----------

function mapHero(blocks: ContentBlock[]) {
  const title =
    decode(blocks.find(isHeading)?.content || "") ||
    "Welcome to Ecclection";
  const subtitle = stripTags(blocks.find(isText)?.content || "");
  const backgroundImage = blocks.find(isImage)?.metadata?.src as Maybe<string>;
  return { title, subtitle, backgroundImage };
}

function mapArtists(blocks: ContentBlock[]) {
  const heading = "Featured Artists";
  const cards: { title: string; text: string; image?: string }[] = [];

  let i = 0;
  while (i < blocks.length) {
    const b = blocks[i];
    if (isHeading(b)) {
      const title = decode(b.content);
      // collect text + image until next heading
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
      // Avoid adding the section label itself as a card if it slips in
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

function mapEvents(blocks: ContentBlock[]) {
  const heading = "Community Happenings";
  const items: { title: string; text: string }[] = [];

  let i = 0;
  while (i < blocks.length) {
    const b = blocks[i];
    if (isHeading(b)) {
      const title = decode(b.content);
      let text = "";
      // take first paragraph after the heading
      let j = i + 1;
      while (j < blocks.length && !isHeading(blocks[j])) {
        if (!text && isText(blocks[j])) {
          text = stripTags(blocks[j].content);
          break;
        }
        j++;
      }
      items.push({ title, text });
      i = j;
    } else {
      i++;
    }
  }

  return { heading, items };
}

function mapAbout(blocks: ContentBlock[]) {
  const heading = "Welcome to Ecclection";
  const paragraphs = blocks.filter(isText).map((b) => stripTags(b.content));
  const images = blocks.filter(isImage).map((b) => b.metadata?.src as string);
  const image = images[0] ? { src: images[0], alt: "" } : undefined;
  const gallery = images.slice(1, 3); // up to two more
  return { heading, paragraphs, image, gallery };
}

function mapContact(blocks: ContentBlock[]) {
  const heading = "Come Find Us!";
  const cards: { title: string; text: string }[] = [];

  let i = 0;
  while (i < blocks.length) {
    const b = blocks[i];
    if (isHeading(b)) {
      const title = decode(b.content);
      let text = "";
      let j = i + 1;
      while (j < blocks.length && !isHeading(blocks[j])) {
        if (!text && isText(blocks[j])) {
          text = stripTags(blocks[j].content);
          break;
        }
        j++;
      }
      cards.push({ title, text });
      i = j;
    } else {
      i++;
    }
  }

  return { heading, cards };
}

export default async function HomePage() {
  const page = await getPageBySlug("home");
  const blocks: ContentBlock[] = await getContentBlocksBySlug("home");

  // (C) Split the flat block list into logical sections by H2 titles you set in WP
  const heroBlocks = sliceSection(blocks, "Welcome to Ecclection", "Featured Artists");
  const artistsBlocks = sliceSection(blocks, "Featured Artists", "Community Happenings");
  const eventsBlocks = sliceSection(blocks, "Community Happenings", "Welcome to Ecclection"); // your second "Welcome…" under About
  const aboutBlocks = sliceSection(blocks, "Welcome to Ecclection", "Come Find Us!");
  const contactBlocks = sliceSection(blocks, "Come Find Us!");

  // (D) Map section blocks → props
  const hero = mapHero(heroBlocks.length ? heroBlocks : blocks);
  // If featured image exists on the page itself, prefer it.
  hero.backgroundImage = hero.backgroundImage ?? page?.featuredImage?.url;

  const artists = mapArtists(artistsBlocks);
  const events = mapEvents(eventsBlocks);
  const about = mapAbout(aboutBlocks);
  const contact = mapContact(contactBlocks);

  console.log(blocks);
  
  // Toggle this to show/hide under construction
  const showUnderConstruction = true;

  if (showUnderConstruction) {
    return <UnderConstruction />;
  }

  return (
    <>
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
      />
      <Artists
        heading={artists.heading}
        description="Meet the talented artists who make our community vibrant."
        items={artists.cards}
      />

      <Events
        title={events.heading}
        events={events.items}
      />

      <About
        title="About us"
        content="bio text from about section"
        image={about?.image}
        features={about?.features}
      />

      <Contact
        heading={contact?.heading}
        cards={contact?.cards}
      />
    </>
  );
}