// app/layout.tsx
import "./globals.css"; // tailwind or your global CSS
import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { StoreHoursTicker } from "@/components/sections/StoreHoursTicker";

import { ClientEffects } from "@/components/SoundOnScroll/ClientFX";
import { Inter, Quintessential, Kadwa, Pirata_One } from "next/font/google";
import { SOCIAL_URLS, BUSINESS_INFO } from "@/lib/constants";
import { PreloadBackground } from "@/components/PreloadBackground";
import { Footer } from "@/components/sections/Footer";
import { FontProvider } from "@/components/FontProvider";
import { UnicornStudioBackground } from "@/components/UnicornStudioBackground";

// Configure your fonts with optimized loading
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
  // Only load what we need
  weight: ["400", "500", "600", "700"],
});

const quintessential = Quintessential({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-brand",
  display: "swap",
  preload: true,
  fallback: ["serif"],
  adjustFontFallback: true,
});

const kadwa = Kadwa({
  subsets: ["latin"],
  variable: "--font-normal",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
  weight: ["400", "700"],
});

// Alternate brand font for testing/toggling - lazy load
const pirataOne = Pirata_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-brand-alt",
  display: "swap",
  preload: false, // Not critical
  fallback: ["serif"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://ecclection.com"
  ),
  title: {
    default: "Ecclection | Local Art & Community Vibe in Portage Park, Chicago",
    template: "%s | Ecclection",
  },
  description:
    "Ecclection is a vibrant local shop in Portage Park, Chicago featuring vintage treasures, handmade art, locally crafted finds, and community events. Supporting local artists and building community connections.",
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
    "local business Chicago",
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
    description:
      "A vibrant local shop featuring vintage treasures, handmade art, locally crafted finds, and community events in Portage Park, Chicago.",
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
    description:
      "A vibrant local shop featuring vintage treasures, handmade art, and community events in Portage Park, Chicago.",
    images: ["https://ecclection.com/og-image.jpg"],
    creator: "@Ecclectionchicago",
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
    canonical: "https://ecclection.com",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ecclection.com";

  // Build opening hours specification from constants
  const openingHoursSpecification = Object.entries(BUSINESS_INFO.openingHours)
    .filter(([_, hours]) => hours !== null)
    .map(([day, hours]) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${day}`,
      opens: hours!.opens,
      closes: hours!.closes,
    }));

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#organization`,
    name: BUSINESS_INFO.name,
    description:
      "A vibrant local shop in Portage Park, Chicago featuring vintage treasures, handmade art, locally crafted finds, and community events.",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: BUSINESS_INFO.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.coordinates.latitude,
      longitude: BUSINESS_INFO.coordinates.longitude,
    },
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    priceRange: "$$",
    openingHoursSpecification,
    sameAs: [
      SOCIAL_URLS.instagram,
      SOCIAL_URLS.facebook,
      SOCIAL_URLS.tiktok,
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
    <html
      lang="en"
      className={`${inter.variable} ${quintessential.variable} ${kadwa.variable} ${pirataOne.variable}`}
    >
      <head>
        {/* Resource hints for external domains */}
        <link rel="dns-prefetch" href="https://maps.app.goo.gl" />
        <link rel="dns-prefetch" href="https://instagram.com" />
        <link rel="dns-prefetch" href="https://facebook.com" />
        <link rel="dns-prefetch" href="https://tiktok.com" />
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${quintessential.variable} ${kadwa.variable} ${pirataOne.variable}`}>
        <UnicornStudioBackground />
        <div className="relative z-10">
        <FontProvider
          interVariable={inter.variable}
          quintessentialVariable={quintessential.variable}
          ralewayVariable={kadwa.variable}
          pirataOneVariable={pirataOne.variable}
        />
        <PreloadBackground />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <StoreHoursTicker />
        <Header />
        
        

        {/* Main content area */}
        <main>
          <ClientEffects />
          
          {children}
        </main>

        <Footer />
        </div>
      </body>
    </html>
  );
}
