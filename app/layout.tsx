// app/layout.tsx
import "./globals.css"; // tailwind or your global CSS
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecclection",
  description: "Local art • community vibe",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container nav">
            <div className="brand">
              <span className="brand-mark">E</span>
              <h1>Ecclection</h1>
            </div>
            <nav className="nav-links">
              <a href="/">Home</a>
              <a href="/artists">Artists</a>
              <a href="/events">Events</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>
            <div className="contact-mini">
              <a className="btn" href="tel:+17739517992">Visit Us</a>
            </div>
          </div>
        </header>

        {/* site-wide max-width wrapper */}
        <div className="container">{children}</div>

        <footer className="site-footer">© {new Date().getFullYear()} Ecclection</footer>
      </body>
    </html>
  );
}