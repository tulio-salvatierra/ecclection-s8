// app/layout.tsx
import "./globals.css"; // tailwind or your global CSS
import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { PreloadBackground } from "@/components/PreloadBackground";
import { Inter, Quintessential, Raleway, Pirata_One } from 'next/font/google';

// Configure your fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const quintessential = Quintessential({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-brand',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-normal',
  display: 'swap',
});

// Alternate brand font for testing/toggling
const pirataOne = Pirata_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-brand-alt',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ecclection.com'),
  title: {
    default: "Ecclection | Local Art & Community Vibe in Portage Park, Chicago",
    template: "%s | Ecclection"
  },
  description: "Ecclection is a vibrant local shop in Portage Park, Chicago featuring vintage treasures, handmade art, locally crafted finds, and community events. Supporting local artists and building community connections.",
  keywords: [
    "Ecclection",
    "Chicago art shop",
    "Portage Park",
    "local artists",
    "vintage shop",
    "handmade art",
    "community events",
    "local crafts",
    "Chicago vintage",
    "art gallery Chicago",
    "community space",
    "local business Chicago"
  ],
  authors: [{ name: "Ecclection" }],
  creator: "Ecclection",
  publisher: "Ecclection",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Ecclection",
    title: "Ecclection | Local Art & Community Vibe in Portage Park, Chicago",
    description: "A vibrant local shop featuring vintage treasures, handmade art, locally crafted finds, and community events in Portage Park, Chicago.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ecclection - Local Art & Community Vibe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecclection | Local Art & Community Vibe",
    description: "A vibrant local shop featuring vintage treasures, handmade art, and community events in Portage Park, Chicago.",
    images: ["/og-image.jpg"],
    creator: "@ecclection",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ecclection.com';
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#organization`,
    name: "Ecclection",
    description: "A vibrant local shop in Portage Park, Chicago featuring vintage treasures, handmade art, locally crafted finds, and community events.",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "6059 W Irving Park Rd",
      addressLocality: "Chicago",
      addressRegion: "IL",
      postalCode: "60634",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "41.9525",
      longitude: "-87.7844",
    },
    telephone: "", // Add phone number when available
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      // Add social media URLs when available
      // "https://www.instagram.com/ecclection",
      // "https://www.facebook.com/ecclection",
      // "https://www.tiktok.com/@ecclection",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    url: siteUrl,
    name: "Ecclection",
    description: "Local Art & Community Vibe in Portage Park, Chicago",
    publisher: {
      "@id": `${siteUrl}#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${quintessential.variable} ${raleway.variable} ${pirataOne.variable}`}>
      <body>
        <PreloadBackground />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header />

        {/* Main content area */}
        <main>{children}</main>

        <footer className="site-footer">© {new Date().getFullYear()} Ecclection</footer>
      </body>
    </html>
  );
}