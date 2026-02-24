import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { SOCIAL_URLS, BUSINESS_INFO } from "@/lib/constants";

// TikTok icon (not available in lucide-react)
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-black/50 text-primary-foreground min-h-8/12">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Navigation Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold font-brand">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2 text-white">
              <Link href="/" className="hover:no-underline hover:text-white">
                Home
              </Link>
              <Link href="/events" className="hover:no-underline hover:text-white">
                Events
              </Link>
              <Link href="/about" className="hover:no-underline hover:text-white">
                About
              </Link>
              <Link href="/resources" className="hover:no-underline hover:text-white  ">
                Resources
              </Link>
            </nav>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold font-brand">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href={SOCIAL_URLS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:opacity-80 transition-opacity"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href={SOCIAL_URLS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:opacity-80 transition-opacity"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href={SOCIAL_URLS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:opacity-80 transition-opacity"
              >
                <TikTokIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="mb-4 text-lg font-semibold font-brand">Address</h3>
            <a href={SOCIAL_URLS.googleMaps}>
              <address className="not-italic leading-relaxed hover:text-white">
                {BUSINESS_INFO.address.street}
                <br />
                {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}{" "}
                {BUSINESS_INFO.address.zip}
              </address>
            </a>
          </div>

          {/* Store Hours */}
          <div>
            <h3 className="mb-4 text-lg font-semibold font-brand">
              Store Hours
            </h3>
            <ul className="space-y-1">
              <li>Monday & Tuesday: Closed</li>
              <li>Wednesday - Sunday: 11am - 5pm</li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="">
          <img src="/footer-logo.jpg" alt="Ecclection Logo" className="h-[300px] w-[300px] m-8 mx-auto " />
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-primary-foreground/20 pt-6 text-center text-sm">
          <p className="font-brand">
            &copy; {new Date().getFullYear()} Ecclection
          </p>
          <p>
            Made By <a href="https://cicerowebstudio.xyz">Cicero Web Studio</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
