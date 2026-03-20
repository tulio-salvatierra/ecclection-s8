"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const STORAGE_KEY = "ecclection-landing-seen";

export function LandingScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);

  // Only show once per visitor (per browser) using localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = window.localStorage.getItem(STORAGE_KEY);
    if (!seen) {
      setIsVisible(true);
      window.localStorage.setItem(STORAGE_KEY, "true");
    }
  }, []);

  // Auto-hide after a short intro animation
  useEffect(() => {
    if (!isVisible) return;
    const showDuration = 2500; // ms the splash stays fully visible before fade
    let exitTimer: ReturnType<typeof setTimeout> | undefined;

    const timer = setTimeout(() => {
      setIsExiting(true);
      exitTimer = setTimeout(() => setIsVisible(false), 600);
    }, showDuration);

    return () => {
      clearTimeout(timer);
      if (exitTimer !== undefined) clearTimeout(exitTimer);
    };
  }, [isVisible]);

  // GSAP Willem loading animation
  useGSAP (() => {
    if (!isVisible) return;
    const container = containerRef.current;
    if (!container) return;

    const loadingLetter = container.querySelectorAll(".willem__letter");
    const box = container.querySelectorAll(".willem-loader__box");
    const growingImage = container.querySelectorAll(".willem__growing-image");
    const headingStart = container.querySelectorAll(".willem__h1-start");
    const headingEnd = container.querySelectorAll(".willem__h1-end");
    const coverImageExtra = container.querySelectorAll(
      ".willem__cover-image-extra"
    );
    const headerLetter = container.querySelectorAll(".willem__letter-white");
    const navLinks = container.querySelectorAll(".willen-nav a");

    const tl = gsap.timeline({
      defaults: {
        ease: "expo.inOut",
      },
      onStart: () => {
        container.classList.remove("is--hidden");
      },
    });

    if (loadingLetter.length) {
      tl.from(loadingLetter, {
        yPercent: 100,
        stagger: 0.025,
        duration: 1.25,
      });
    }

    if (box.length) {
      tl.fromTo(
        box,
        {
          width: "0em",
        },
        {
          width: "1em",
          duration: 1.25,
        },
        "< 1.25"
      );
    }

    if (growingImage.length) {
      tl.fromTo(
        growingImage,
        {
          width: "0%",
        },
        {
          width: "100%",
          duration: 1.25,
        },
        "<"
      );
    }

    if (headingStart.length) {
      tl.fromTo(
        headingStart,
        {
          x: "0em",
        },
        {
          x: "-0.05em",
          duration: 1.25,
        },
        "<"
      );
    }

    if (headingEnd.length) {
      tl.fromTo(
        headingEnd,
        {
          x: "0em",
        },
        {
          x: "0.05em",
          duration: 1.25,
        },
        "<"
      );
    }

    if (coverImageExtra.length) {
      tl.fromTo(
        coverImageExtra,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          duration: 0.05,
          ease: "none",
          stagger: 0.5,
        },
        "-=0.05"
      );
    }

    if (growingImage.length) {
      tl.to(
        growingImage,
        {
          width: "100vw",
          height: "100dvh",
          duration: 2,
        },
        "< 1.25"
      );
    }

    if (box.length) {
      tl.to(
        box,
        {
          width: "110vw",
          duration: 2,
        },
        "<"
      );
    }

    if (headerLetter.length) {
      tl.from(
        headerLetter,
        {
          yPercent: 100,
          duration: 1.25,
          ease: "expo.out",
          stagger: 0.025,
        },
        "< 1.2"
      );
    }

    if (navLinks.length) {
      tl.from(
        navLinks,
        {
          yPercent: 100,
          duration: 1.25,
          ease: "expo.out",
          stagger: 0.1,
        },
        "<"
      );
    }

    return () => {
      tl.kill();
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] bg-black text-white transition-opacity duration-500 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
      aria-label="Welcome to Ecclection"
    >
      <section
        ref={containerRef}
        className="willem-header is--loading is--hidden"
      >
        <div className="willem-loader">
          <div className="willem__h1">
            <div className="willem__h1-start">
              <span className="willem__letter">E</span>
              <span className="willem__letter">C</span>
              <span className="willem__letter">C</span>
              <span className="willem__letter">L</span>
            </div>
            <div className="willem-loader__box">
              <div className="willem-loader__box-inner">
                <div className="willem__growing-image">
                  <div className="willem__growing-image-wrap">
                    <img
                      className="willem__cover-image-extra is--1"
                      src="https://cdn.prod.website-files.com/6915bbf51d482439010ee790/6915bc3ac9fe346a924724bc_minimalist-architecture-2.avif"
                      loading="lazy"
                      alt=""
                    />
                    <img
                      className="willem__cover-image-extra is--2"
                      src="https://cdn.prod.website-files.com/6915bbf51d482439010ee790/6915bc3ac9fe346a924724cf_minimalist-architecture-4.avif"
                      loading="lazy"
                      alt=""
                    />
                    <img
                      className="willem__cover-image-extra is--3"
                      src="https://cdn.prod.website-files.com/6915bbf51d482439010ee790/6915bc3ac9fe346a924724c5_minimalist-architecture-3.avif"
                      loading="lazy"
                      alt=""
                    />
                    <video
                      className="willem__cover-image"
                      autoPlay
                      loop
                      muted
                      playsInline
                      src="/Ecclection_hero.mp4"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="willem__h1-end">
              <span className="willem__letter">l</span>
              <span className="willem__letter">e</span>
              <span className="willem__letter">m</span>
            </div>
          </div>
        </div>
        <div className="willem-header__content">
          <div className="willem-header__top">
            <nav className="willen-nav">
              <div className="willem-nav__start">
                <a href="#" className="willem-nav__link">
                  Ecclection ©
                </a>
              </div>
              <div className="willem-nav__end">
                <div className="willem-nav__links">
                  <a id="test" href="#" className="willem-nav__link">
                    Projects,
                  </a>
                  <a href="#" className="willem-nav__link">
                    Services,
                  </a>
                  <a href="#" className="willem-nav__link">
                    Blog (13)
                  </a>
                </div>
                <div className="willem-nav__cta">
                  <a href="#" className="willem-nav__link">
                    Get in touch
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div className="willem-header__bottom">
            <div className="willem__h1">
              <span className="willem__letter-white">E</span>
              <span className="willem__letter-white">C</span>
              <span className="willem__letter-white">C</span>
              <span className="willem__letter-white">L</span>
              <span className="willem__letter-white">E</span>
              <span className="willem__letter-white">C</span>
              <span className="willem__letter-white">T</span>
              <span className="willem__letter-white">I</span>
              <span className="willem__letter-white">O</span>
              <span className="willem__letter-white">N</span>
              <span className="willem__letter-white is--space">©</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingScreen;

