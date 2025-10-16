// app/layout.tsx
import "./globals.css"; // tailwind or your global CSS
import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
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
  title: "Ecclection",
  description: "Local art • community vibe",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${quintessential.variable} ${raleway.variable} ${pirataOne.variable}`}>
      <body>
        <Header />

        {/* Main content area */}
        <main>{children}</main>

        <footer className="site-footer">© {new Date().getFullYear()} Ecclection</footer>
      </body>
    </html>
  );
}