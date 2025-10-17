// components/sections/Header.tsx
import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <div className="brand">
          <span className="brand-mark"><img src="/logo.png" alt="Ecclection" className="w-8 h-8" /></span>
          <h1 className="font-brand font-bold text-black font-xl-cyan-600">Ecclection</h1>
        </div>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/artists">Artists</Link>
          <Link href="/events">Events</Link>
          <Link href="/about">About</Link>
          <Link href="/resources">Resources</Link>
        </nav>
        <div className="contact-mini">
          <a className="btn" href="https://maps.app.goo.gl/ZMgVyGzAmNvomLMcA">Visit Us</a>
        </div>
      </div>
    </header>
  );
}
