import type { Metadata } from "next";
import { getPageContent } from "@/lib/content-fetch";
import { AboutContent } from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About Us | Ecclection - Local Art & Community Shop in Portage Park, Chicago",
  description:
    "Learn about Ecclection - a vibrant local shop in Portage Park, Chicago. Discover our mission to support local artists, build community connections, and offer unique vintage treasures, handmade art, and locally crafted finds. Meet Julie, the owner, and learn about Big Elves community project.",
  keywords: ["Ecclection about", "Portage Park shop", "Chicago local business", "vintage shop owner", "local artists support", "community shop Chicago", "Big Elves charity", "Julie Ecclection", "Chicago variety store", "local art community", "Portage Park business"],
  authors: [{ name: "Ecclection" }], creator: "Ecclection", publisher: "Ecclection",
  openGraph: { type: "website", locale: "en_US", url: "https://ecclection.com/about", siteName: "Ecclection", title: "About Ecclection | Local Art & Community Shop in Chicago", description: "Learn about Ecclection's mission to support local artists and build community connections in Portage Park, Chicago. Discover our story, philosophy, and Big Elves community project.", images: [{ url: "https://ecclection.com/og-image.jpg", width: 1200, height: 630, alt: "About Ecclection - Local Art & Community Shop" }] },
  twitter: { card: "summary_large_image", title: "About Ecclection | Local Art & Community Shop in Chicago", description: "Learn about Ecclection's mission to support local artists and build community connections in Portage Park, Chicago.", images: ["https://ecclection.com/og-image.jpg"], creator: "@Ecclectionchicago" },
  alternates: { canonical: "https://ecclection.com/about" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
};

export default async function AboutPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ecclection.com";
  const content = await getPageContent("about");
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "About", item: `${siteUrl}/about` }] };
  const aboutPageSchema = { "@context": "https://schema.org", "@type": "AboutPage", name: "About Ecclection", description: "Learn about Ecclection - a vibrant local shop in Portage Park, Chicago. Discover our mission to support local artists, build community connections, and offer unique vintage treasures, handmade art, and locally crafted finds.", url: `${siteUrl}/about`, mainEntity: { "@type": "LocalBusiness", name: "Ecclection", address: { "@type": "PostalAddress", streetAddress: "6059 W Irving Park Rd", addressLocality: "Chicago", addressRegion: "IL", postalCode: "60634", addressCountry: "US" } } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} /><AboutContent content={content} /></>;
}