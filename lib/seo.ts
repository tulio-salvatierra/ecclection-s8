import type { Metadata } from "next";

export const SITE_NAME = "Ecclection";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ecclection.com";
export const TWITTER_HANDLE = "@Ecclectionchicago";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const DEFAULT_KEYWORDS = [
  "Ecclection",
  "Portage Park Chicago",
  "Chicago art shop",
  "local artists",
  "vintage shop Chicago",
  "handmade art",
  "community events Chicago",
  "local crafts",
  "Chicago vintage",
];

export const SEO_KEYWORD_CLUSTERS = {
  brandAndLocal: [
    "Ecclection",
    "Portage Park Chicago",
    "6059 W Irving Park Rd",
    "Chicago local business",
    "variety store Chicago",
    "community shop Chicago",
  ],
  artistsAndMakers: [
    "local artists Chicago",
    "handmade goods Chicago",
    "artisan marketplace Chicago",
    "independent makers",
    "artist collective Portage Park",
  ],
  eventsAndCommunity: [
    "Chicago art events",
    "artist appreciation night",
    "community events Portage Park",
    "local vendor events Chicago",
    "bi monthly art event",
  ],
  resourcesAndSupport: [
    "community resources Chicago",
    "food pantries Portage Park",
    "mental health support Chicago",
    "housing assistance Chicago",
    "crisis support Chicago",
  ],
} as const;

type MetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
};

const defaultRobots: NonNullable<Metadata["robots"]> = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export function buildPageMetadata(options: MetadataOptions): Metadata {
  const canonical = `${SITE_URL}${options.path}`;
  const ogImage = options.ogImage || DEFAULT_OG_IMAGE;

  return {
    title: options.title,
    description: options.description,
    keywords: options.keywords || DEFAULT_KEYWORDS,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName: SITE_NAME,
      title: options.ogTitle || options.title,
      description: options.ogDescription || options.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} preview image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: options.twitterTitle || options.ogTitle || options.title,
      description:
        options.twitterDescription ||
        options.ogDescription ||
        options.description,
      images: [ogImage],
      creator: TWITTER_HANDLE,
    },
    robots: defaultRobots,
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

