import React from "react";

/**
 * Renders the small markdown subset supported by "rich" content fields:
 *   **bold**   -> <strong>
 *   *italic*   -> <em>
 *   blank line -> new paragraph
 * This is intentionally minimal, not a full markdown parser — it exists so
 * non-technical editors can bold/italicize words without seeing raw HTML.
 *
 * Note: the original hardcoded copy had one instance of colored (cyan) bold
 * text ("(starts at $1)"). That distinction isn't representable in this
 * simple **bold** syntax, so all bold now renders in the surrounding text
 * color for consistency — a deliberate simplification, not a bug.
 */
export function RichText({ value }: { value: string }) {
  const paragraphs = value.split(/\n\s*\n/).filter((p) => p.trim().length > 0);
  return (
    <>
      {paragraphs.map((para, i) => (
        <p key={i} className="mb-4 last:mb-0">
          {renderInline(para.trim())}
        </p>
      ))}
    </>
  );
}

function renderInline(text: string): React.ReactNode[] {
  const tokens = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return tokens.map((token, i) => {
    if (token.startsWith("**") && token.endsWith("**")) {
      return <strong key={i}>{token.slice(2, -2)}</strong>;
    }
    if (token.startsWith("*") && token.endsWith("*")) {
      return <em key={i}>{token.slice(1, -1)}</em>;
    }
    return token;
  });
}