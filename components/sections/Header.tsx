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
      <header className="w-3/4 mt-6 md:mt-8 container site-header sticky top-0 z-50 backdrop-blur-md bg-card/90 rounded-lg mt-2 mx-10">
        <div className="w-full flex items-center justify-between nav">
          <div className="brand">
            <Link href="/" className="flex items-center space-x-2">
              <span className="brand-mark">
                <Image src="/logo.png" alt="Ecclection" width={32} height={32} priority className="w-8 h-8" />
              </span>
              <h1 className="font-brand font-bold text-black text-xl md:text-2xl">
                ECCLECTION
              </h1>
            </Link>
          </div>
          <nav className="nav-links text-xl md:text-2xl">
            <Link href="/">Home</Link>
            <Link href="/events">Events</Link>
            <Link href="/about">About</Link>
            <Link href="/resources">Resources</Link>
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
        className={`mobile-menu fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="mobile-menu-content backdrop-blur-lg bg-card/95 border-b border-border shadow-lg">
          <div className="container py-6 bg">
            <div className="brand">
              <Link href="/" className="flex items-center space-x-2">
                <span className="brand-mark">
                  <Image src="/logo.png" alt="Ecclection" width={32} height={32} priority className="w-8 h-8" />
                </span>
                <h1 className="font-brand font-bold text-black font-xl-cyan-600">
                  Ecclection
                </h1>
              </Link>
            </div>
            <nav className="mobile-nav-links flex flex-col space-y-4 mt-16">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="mobile-nav-link font-brand"
              >
                Home
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
                className="btn mobile-visit-btn mt-4 font-brand rounded-md p-4"
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
