# AI Coding Assistant Context

You are assisting with development of the Ecclection website.

## Project Overview
Ecclection is a local retail shop located in Portage Park, Chicago.

The store focuses on:
- antiques
- vintage goods
- used items
- surplus curiosities
- local artists and handmade goods
- games and gifts
- sustainable reuse of objects

The shop recently acquired a large inventory from the historic
American Science & Surplus store.

A key value of the business is **sustainability and preventing useful items from ending up in landfills**.

## Tech Stack
- Next.js App Router
- TypeScript
- Tailwind
- Structured data (JSON-LD)
- Centralized SEO module in `lib/seo.ts`

## SEO Architecture
SEO configuration is centralized in:

lib/seo.ts

Key utilities:
- buildPageMetadata()
- buildBreadcrumbSchema()

Keyword clusters are stored in:

SEO_KEYWORD_CLUSTERS

Main route structure:

/
about
artists
events
resources

## Brand Voice

Content should follow "Julie's Voice":

Tone:
- friendly
- community oriented
- welcoming
- slightly playful
- sensory and descriptive
- celebrates artists and discovery

Avoid corporate marketing tone.

## SEO Goals

Focus on ranking for:

Local discovery
- Portage Park Chicago
- unique shops Chicago
- local artists Chicago

Retail discovery
- vintage store Chicago
- antique shop Chicago
- handmade goods Chicago

Sustainability
- reuse store Chicago
- sustainable shopping Chicago

## Coding Rules

When editing code:

1. Prefer existing utilities from `lib/seo.ts`
2. Keep metadata consistent
3. Use structured data where relevant
4. Maintain accessibility and semantic HTML
5. Avoid unnecessary dependencies

## When Generating Content

Prefer:

- local SEO signals
- structured data
- internal linking
- keyword clusters

Do not generate generic marketing copy.

Maintain Julie's voice.