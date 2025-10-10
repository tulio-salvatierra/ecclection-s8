// lib/sections.ts
import { parseDocument } from "htmlparser2";
import { Element, isTag } from "domhandler";

export type SectionMap = {
  home?: string;      // inner HTML for the section
  artists?: string;
  events?: string;
  about?: string;
  contact?: string;
};

const SECTION_IDS = ["home", "artists", "events", "about", "contact"] as const;
type SectionId = typeof SECTION_IDS[number];

function serialize(el: any): string {
  // minimal innerHTML serializer
  if (!el || !("children" in el)) return "";
  return el.children
    .map((c: any) => {
      if (c.type === "text") return c.data;
      if (isTag(c)) {
        const attrs = Object.entries(c.attribs ?? {})
          .map(([k, v]) => `${k}="${String(v)}"`)
          .join(" ");
        return `<${c.name}${attrs ? " " + attrs : ""}>${serialize(c)}</${c.name}>`;
      }
      return "";
    })
    .join("");
}

export function extractSectionsByAnchor(html: string): SectionMap {
  const doc = parseDocument(html);
  const out: SectionMap = {};
  const queue = [...(doc.childNodes ?? [])];

  while (queue.length) {
    const node = queue.shift()!;
    if (!isTag(node)) continue;

    // If this node has an id matching our section ids, capture its inner HTML
    const id = (node.attribs?.id as SectionId | undefined);
    if (id && (SECTION_IDS as readonly string[]).includes(id)) {
      (out as any)[id] = serialize(node);
    }

    // keep traversing
    if (node.childNodes?.length) queue.push(...node.childNodes);
  }

  return out;
}