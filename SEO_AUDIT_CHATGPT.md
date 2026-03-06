# SEO Audit and Keyword Planning Context

## Site
- Brand: Ecclection
- Primary location: Portage Park, Chicago
- Type: Local retail shop with artists, events, and community resources
- Base URL: `https://ecclection.com`

## What Was Centralized (Single Source of Truth)
- New SEO config module: `lib/seo.ts`
  - `SITE_URL`, `SITE_NAME`, `TWITTER_HANDLE`
  - `DEFAULT_KEYWORDS`
  - `SEO_KEYWORD_CLUSTERS` (brand/local, artists, events, resources)
  - `buildPageMetadata()` helper for route metadata
  - `buildBreadcrumbSchema()` helper for JSON-LD breadcrumbs

## Routes Using Centralized SEO
- `app/page.tsx`
- `app/about/page.tsx`
- `app/events/page.tsx`
- `app/resources/page.tsx`
- `app/artists/page.tsx`
- `app/layout.tsx` now references shared constants
- `app/sitemap.ts` and `app/robots.ts` now use `SITE_URL`

## Structured Data Currently Present
- Global (`app/layout.tsx`)
  - `LocalBusiness` with address, geo, socials, and `aggregateRating` (4.8, 23)
  - `WebSite` with `SearchAction`
- Route-level JSON-LD
  - Home: `BreadcrumbList`
  - About: `BreadcrumbList`, `AboutPage`
  - Events: `BreadcrumbList`, `Event`
  - Resources: `BreadcrumbList`, `CollectionPage`

## Current SEO Strengths
- Canonicals exist across key pages.
- Open Graph + Twitter metadata is present on key routes.
- Robots + sitemap are implemented.
- Local SEO schema is present and includes aggregate rating.
- Route intent is clear (`/artists`, `/events`, `/resources`, `/about`).

## Remaining SEO Gaps / Opportunities
- Metadata copy quality is inconsistent (tone/length varies per page).
- Some pages still use broad keywords; opportunity to improve search intent specificity.
- OG images are mostly shared; more route-specific OG assets can improve social CTR.
- No explicit FAQ schema yet (good fit for resources/events/about).
- Internal linking anchors can be made more keyword-focused in some sections.

## Existing Keyword Clusters (Baseline)
- brandAndLocal:
  - Ecclection, Portage Park Chicago, Chicago local business, variety store Chicago
- artistsAndMakers:
  - local artists Chicago, handmade goods Chicago, artisan marketplace Chicago
- eventsAndCommunity:
  - Chicago art events, artist appreciation night, local vendor events Chicago
- resourcesAndSupport:
  - community resources Chicago, food pantries Portage Park, mental health support Chicago

## Ask ChatGPT To Produce
1. Final keyword map:
   - Primary keyword per route
   - 4-8 secondary keywords per route
   - 3 long-tail variants per route
2. Title and meta description rewrite set for:
   - Home, About, Artists, Events, Resources
3. Header structure recommendations (H1/H2/H3 outlines) for each route.
4. Internal linking opportunities:
   - Which anchors to add between routes and why
5. Schema expansion recommendations:
   - FAQPage, ItemList, or Event enhancements where relevant

## Route Intent Snapshot
- `/`: brand + local discovery + conversion
- `/about`: trust + mission + founder/community story
- `/artists`: artist discovery + maker exposure
- `/events`: recurring local event discovery + participation
- `/resources`: support services + community utility

## Notes for Implementation
- Continue to use `buildPageMetadata()` in `lib/seo.ts` for all new routes.
- Keep `SEO_KEYWORD_CLUSTERS` updated as keyword strategy evolves.
- Keep schema generation in page files but use `buildBreadcrumbSchema()`.

