// app/layout.tsx
import "./globals.css"; // tailwind or your global CSS
import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Inter, Playfair_Display, Poppins, Righteous } from 'next/font/google';

// Configure your fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const righteous = Righteous({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-righteous',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Ecclection",
  description: "Local art • community vibe",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${poppins.variable} ${righteous.variable}`}>
      <body>
        <Header />

        {/* Main content area */}
        <main>{children}</main>

        <footer className="site-footer">© {new Date().getFullYear()} Ecclection</footer>
      </body>
    </html>
  );
}