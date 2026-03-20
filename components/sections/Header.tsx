"use client";

// components/sections/Header.tsx
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="site-header fixed top-2 left-2 right-2 md:top-4 md:left-1/2 md:right-auto md:w-[75vw] md:-translate-x-1/2 z-50 backdrop-blur-md bg-card/90 rounded-lg">
        <div className="p-4 flex items-center justify-between nav px-4 mx-auto">
          <div className="brand">
            <Link href="/" className="flex items-center space-x-2">
              <span className="brand-mark">
                <Image src="/logo.png" alt="Ecclection" width={32} height={32} priority className="w-8 h-8" />
              </span>
              <h1 className="font-brand font-bold text-black text-base sm:text-lg md:text-2xl">
                ECCLECTION
              </h1>
            </Link>
          </div>
          <nav className="nav-links text-xl md:text-2xl font-brand text-cyan-600">
            <Link href="/">Home</Link>
            <Link href="/artists#" className="text-cyan-600">Artists</Link>
            <Link href="/events#" className="text-cyan-600">Events</Link>
            <Link href="/about#" className="text-cyan-600">About</Link>
            <Link href="/resources#" className="text-cyan-600">Resources</Link>
          </nav>
          <div className="contact-mini hidden md:block">
            <a className="btn" href="https://maps.app.goo.gl/ZMgVyGzAmNvomLMcA">
              Visit Us
            </a>
          </div>
          <button
            className="mobile-menu-button md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay fixed inset-0 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed top-2 left-2 right-2 z-50 md:hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="mobile-menu-content backdrop-blur-lg bg-card/95 border-b border-border shadow-lg">
          <div className="container py-4">
            <div className="brand mb-4">
              <Link href="/" className="flex items-center space-x-2">
                <span className="brand-mark">
                  <Image src="/logo.png" alt="Ecclection" width={32} height={32} priority className="w-8 h-8 mx-2" />
                </span>
                <h1 className="font-brand font-semibold text-black text-lg">
                  Ecclection
                </h1>
              </Link>
            </div>
            <nav className="mobile-nav-links flex flex-col space-y-3 mt-2">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="mobile-nav-link font-brand"
              >
                Home
              </Link>
              <Link
                href="/artists"
                onClick={closeMobileMenu}
                className="mobile-nav-link font-brand"
              >
                Artists
              </Link>
              <Link
                href="/events"
                onClick={closeMobileMenu}
                className="mobile-nav-link font-brand"
              >
                Events
              </Link>
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="mobile-nav-link font-brand"
              >
                About
              </Link>
              <Link
                href="/resources"
                onClick={closeMobileMenu}
                className="mobile-nav-link font-brand"
              >
                Resources
              </Link>
              <a
                className="btn mobile-visit-btn mt-4 font-brand rounded-md p-4 mx-auto"
                href="https://maps.app.goo.gl/ZMgVyGzAmNvomLMcA"
                onClick={closeMobileMenu}
              >
                Visit Us
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
