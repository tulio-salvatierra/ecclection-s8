import "./..//styles/globals.css";

export const metadata = {
  title: "Ecclection",
  description: "Local art meets community spirit",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Simple header for now; you can swap to a component later */}
        <header className="site-header">
          <div className="container nav">
            <div className="brand">
              <span className="brand-mark">E</span>
              <h1>Ecclection</h1>
            </div>
            <nav className="nav-links" aria-label="Primary">
              <a href="/">Home</a>
              <a href="/artists">Artists</a>
              <a href="/events">Events</a>
              <a href="/about-2">About</a>
              <a href="/contact">Contact</a>
            </nav>
            <div className="contact-mini">
              <span>☎ (773) 951-7992</span>
              <a className="btn" href="tel:+17739517992">Visit Us</a>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}