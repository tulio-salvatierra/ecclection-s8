"use client"

import React from "react"
import { Star } from "lucide-react"
import { Button } from "../ui/button"
import { useFadeAnimation } from "@/hooks/useFadeAnimtion"
import { renderPunkHeading, renderPunkTitle } from "@/lib/punk-typography"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { VisitBanner } from "./ScrollBanner/VisitBanner"

gsap.registerPlugin(ScrollTrigger)

export function Review() {
  const ref = React.useRef<HTMLElement>(null)
  const sliderWrapRef = React.useRef<HTMLDivElement | null>(null)
  useFadeAnimation(ref)

  const pressArticles = [
    {
      publication: "Block Club Chicago",
      title:
        "New Portage Park Shop Ecclection Is Stacked With Local Artwork, Vintage Finds And More",
      excerpt:
        "The owner of a funky and colorful resale shop filled to the brim with affordable goods and trinkets wants to increase business and community on the western end of Portage Park",
      date: "March 2024",
      url: "https://blockclubchicago.org/2023/11/21/portage-park-shop-ecclection-is-stacked-with-local-artwork-vintage-finds-and-holiday-collections/",
      image: "/article.png",
    },
    {
      publication: "Block Club Chicago",
      title:
        "Funky Portage Park Vintage Shop Ecclection Expands to Bigger Location",
      excerpt:
        "Opened in fall 2023, Ecclection has moved to a new location that allows it to sell more art and unique finds like disco Doc Martens and seasonal decorations.",
      date: "March 2026",
      url: "https://blockclubchicago.org/2025/03/17/funky-portage-park-vintage-shop-ecclection-expands-to-bigger-location/",
      image: "/article2.png",
    },
  ]

  const googleReviews = [
    {
      author: "Deb Nettles",
      rating: 5,
      text: "Looking for a unique gift or something fun or interesting for your home? This place has some fun art and collectible merch! I will be back!",
      date: "A month ago",
    },
    {
      author: "Doll Stabs",
      rating: 5,
      text: "Thank you guys your selection is beautiful and thank you for having a variety of shoe sizes 🙏🏽",
      date: "2 months ago",
    },
    {
      author: "Carole Baker",
      rating: 5,
      text: "I loved this specialty store. So many unique items and gifts. I will definitely go back.",
      date: "3 months ago",
    },
    {
      author: "Cece Daley",
      rating: 5,
      text: "Amazing store!! Everything in here was catching my eye and so reasonably priced. I would live here if I could!! Definitely coming back!!",
      date: "3 months ago",
    },
    {
      author: "Dalia Padilla",
      rating: 5,
      text: "Thank you guys your selection is beautiful and thank you for having a variety of shoe sizes🙏🏽",
      date: "6 months ago",
    },
    {
      author: "Victor Torres",
      rating: 5,
      text: "Awesome weird place love the vibe and the nick nacks!",
      date: "2 weeks ago",
    }
  ]

  // GSAP-powered testimonial slider (adapted from initLineRevealTestimonials)
  useGSAP(
    () => {
      const wrap = sliderWrapRef.current
      if (!wrap) return

      const list = wrap.querySelector<HTMLElement>("[data-testimonial-list]")
      if (!list) return

      const items = Array.from(
        list.querySelectorAll<HTMLElement>("[data-testimonial-item]")
      )
      if (!items.length) return

      const btnPrev = wrap.querySelector<HTMLButtonElement>("[data-prev]")
      const btnNext = wrap.querySelector<HTMLButtonElement>("[data-next]")
      const elCurrent = wrap.querySelector<HTMLElement>("[data-current]")
      const elTotal = wrap.querySelector<HTMLElement>("[data-total]")

      if (elTotal) elTotal.textContent = String(items.length)

      let activeIndex = items.findIndex((el) =>
        el.classList.contains("is--active")
      )
      if (activeIndex < 0) activeIndex = 0

      let isAnimating = false
      let reduceMotion = false

      const autoplayEnabled = wrap.getAttribute("data-autoplay") === "true"
      const autoplayDuration =
        parseInt(wrap.getAttribute("data-autoplay-duration") || "", 10) || 4000

      let autoplayCall: gsap.core.Tween | null = null
      let isInView = true

      const slides = items.map((item) => ({
        item,
        image: item.querySelector<HTMLElement>("[data-testimonial-img]"),
        splitTargets: Array.from(
          item.querySelectorAll<HTMLElement>(
            "[data-testimonial-text], [data-testimonial-split]"
          )
        ),
      }))

      function setSlideState(slideIndex: number, isActive: boolean) {
        const { item } = slides[slideIndex]
        item.classList.toggle("is--active", isActive)
        item.setAttribute("aria-hidden", String(!isActive))
        gsap.set(item, {
          autoAlpha: isActive ? 1 : 0,
          pointerEvents: isActive ? "auto" : "none",
        })
      }

      function updateCounter() {
        if (elCurrent) elCurrent.textContent = String(activeIndex + 1)
      }

      function startAutoplay() {
        if (!autoplayEnabled) return
        if (autoplayCall) autoplayCall.kill()

        autoplayCall = gsap.delayedCall(autoplayDuration / 1000, () => {
          if (!isInView || isAnimating) {
            startAutoplay()
            return
          }
          goTo((activeIndex + 1) % slides.length)
          startAutoplay()
        })
      }

      function pauseAutoplay() {
        if (autoplayCall) autoplayCall.pause()
      }

      function resumeAutoplay() {
        if (!autoplayEnabled) return
        if (!autoplayCall) startAutoplay()
        else autoplayCall.resume()
      }

      function resetAutoplay() {
        if (!autoplayEnabled) return
        startAutoplay()
      }

      // Initial state
      slides.forEach((_, i) => setSlideState(i, i === activeIndex))
      updateCounter()

      // Reduced motion
      const mm = gsap.matchMedia()
      mm.add(
        { reduce: "(prefers-reduced-motion: reduce)" },
        (context) => {
          reduceMotion = !!context.conditions?.reduce
        }
      )

      function goTo(nextIndex: number) {
        if (isAnimating || nextIndex === activeIndex) return
        isAnimating = true

        const outgoingSlide = slides[activeIndex]
        const incomingSlide = slides[nextIndex]

        const tl = gsap.timeline({
          onComplete: () => {
            setSlideState(activeIndex, false)
            setSlideState(nextIndex, true)
            activeIndex = nextIndex
            updateCounter()
            isAnimating = false
          },
        })

        if (reduceMotion) {
          // Sequential fade: first hide outgoing, THEN show incoming
          tl.to(outgoingSlide.item, {
            autoAlpha: 0,
            duration: 0.4,
            ease: "power2.out",
          }).fromTo(
            incomingSlide.item,
            { autoAlpha: 0 },
            {
              autoAlpha: 1,
              duration: 0.4,
              ease: "power2.out",
            },
            ">"
          )
          return
        }

        // Simple sequential fade to avoid both reviews being visible at once
        gsap.set(incomingSlide.item, { autoAlpha: 0, pointerEvents: "auto" })

        tl.to(outgoingSlide.item, {
          autoAlpha: 0,
          duration: 0.5,
          ease: "power2.inOut",
        }).to(
          incomingSlide.item,
          {
            autoAlpha: 1,
            duration: 0.5,
            ease: "power2.inOut",
          },
          ">"
        )
      }

      // Start autoplay
      startAutoplay()

      if (btnNext) {
        btnNext.addEventListener("click", () => {
          resetAutoplay()
          goTo((activeIndex + 1) % slides.length)
        })
      }

      if (btnPrev) {
        btnPrev.addEventListener("click", () => {
          resetAutoplay()
          goTo((activeIndex - 1 + slides.length) % slides.length)
        })
      }

      const onKeyDown = (e: KeyboardEvent) => {
        if (!isInView) return

        const t = e.target as HTMLElement | null
        const isTypingTarget =
          t &&
          (t.tagName === "INPUT" ||
            t.tagName === "TEXTAREA" ||
            t.isContentEditable)
        if (isTypingTarget) return

        if (e.key === "ArrowRight") {
          e.preventDefault()
          resetAutoplay()
          goTo((activeIndex + 1) % slides.length)
        }

        if (e.key === "ArrowLeft") {
          e.preventDefault()
          resetAutoplay()
          goTo((activeIndex - 1 + slides.length) % slides.length)
        }
      }

      window.addEventListener("keydown", onKeyDown)

      const st = ScrollTrigger.create({
        trigger: wrap,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => {
          isInView = true
          resumeAutoplay()
        },
        onEnterBack: () => {
          isInView = true
          resumeAutoplay()
        },
        onLeave: () => {
          isInView = false
          pauseAutoplay()
        },
        onLeaveBack: () => {
          isInView = false
          pauseAutoplay()
        },
      })

      return () => {
        window.removeEventListener("keydown", onKeyDown)
        st.kill()
        if (autoplayCall) autoplayCall.kill()
        mm.kill()
      }
    },
    { scope: sliderWrapRef }
  )

  return (
    <>
    <section ref={ref} className="py-4 px-4 max-w-full h-screen overflow-hidden">
        <div className="mb-12">
          {renderPunkHeading(
            "Press & Reviews",
            "fade-in text-5xl sm:text-7xl text-cyan-500 mb-4",
            "text-center",
            "text-white",
            "large"
          )}

          <p className="fade-in text-white text-2xl max-w-2xl mx-auto text-center">
            What they&apos;re saying about us
          </p>
        </div>

        <article className="fade-in bg-white/10 backdrop-blur-3xl mb-12 border-2 border-black bg-zinc-50 text-black rounded-md overflow-hidden mx-auto">
          <div className="px-5 md:px-8 py-4 border-b border-black/20 flex items-center justify-between text-xs md:text-sm uppercase tracking-wide">
            <span className="font-bold text-cyan-500">ECCLECTION PRESS</span>
            <span className="opacity-70">Local Stories</span>
          </div>

          <div className="px-5 md:px-8 pt-3 pb-5">
            <h3 className="font-extrabold text-cyan-500 leading-none tracking-tight text-[3rem] sm:text-[5rem] md:text-[7rem]">
              PRESS ARTICLES
            </h3>
          </div>

          <div className="px-5 md:px-8 pb-6 md:pb-8">
            {pressArticles.map((article, index) => (
              <div
                key={article.url}
                className="grid grid-cols-[auto_1fr_auto] gap-4 md:gap-6 items-center py-6 border-t border-black/20"
              >
                <div className="text-sm md:text-base font-semibold w-8">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="grid grid-cols-[64px_1fr] md:grid-cols-[92px_1fr] gap-4 md:gap-6 items-center min-w-0">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="text-blackw-16 h-16 md:w-24 md:h-24 object-cover border border-black/20"
                  />
                  <div className="min-w-0">
                    <p className="text-xs text-cyan-500 uppercase tracking-wide opacity-70 mb-1">
                      {article.publication}
                    </p>
                    <h4 className="font-bold text-cyan-600 text-base md:text-2xl text-black leading-tight line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="hidden md:block text-sm opacity-70 mt-2 line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xs md:text-sm opacity-70 mb-1">{article.date}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs md:text-sm font-semibold uppercase tracking-wide hover:opacity-70"
                  >
                    Read →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

        {/* Testimonial lines slider */}
        <section ref={sliderWrapRef} className="fade-in mb-12 h-screen">
          

          <div
            data-testimonial-wrap
            data-autoplay="true"
            data-autoplay-duration="5000"
            className="testimonial-lines border-2 border-cyan-500 rounded-xl bg-white/10 backdrop-blur-xl p-6 md:p-8"
            ref={sliderWrapRef}
          >
            <div className="testimonial-lines__controls">
              <button
                type="button"
                data-prev
                aria-label="previous testimonial"
                className="testimonial-lines__button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="testimonial-lines__arrow"
                >
                  <path
                    d="M5.26512 12L6.43721 10.7746L1.48837 5.28169V6.71831L6.45581 1.22535L5.28372 0L0 6L5.26512 12ZM12 6.97183V5.02817H1.30232V6.97183H12Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button
                type="button"
                data-next
                aria-label="next testimonial"
                className="testimonial-lines__button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="testimonial-lines__arrow"
                >
                  <path
                    d="M6.73488 12L5.56279 10.7746L10.5116 5.28169V6.71831L5.54419 1.22535L6.71628 0L12 6L6.73488 12ZM0 6.97183V5.02817H10.6977V6.97183H0Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            <div className="testimonial-lines__main">
              <div className="testimonial-lines__main-details">
                <p className="testimonial-lines__p is--faded text-white text-2xl">
                  <span data-current className="testimonial-lines__count">
                    1
                  </span>{" "}
                  / <span data-total>{googleReviews.length}</span>
                </p>
                {renderPunkTitle("What our visitors say:", "text-2xl text-white font-brand", "mb-4 text-center")}
              </div>

              <div className="testimonial-lines__collection">
                <div
                  role="list"
                  data-testimonial-list
                  className="testimonial-lines__list text-white text-2xl"
                >
                  {googleReviews.map((review, index) => (
                    <div
                      key={index}
                      data-testimonial-item
                      role="listitem"
                      className={`testimonial-lines__item text-white text-2xl ${
                        index === 0 ? "is--active" : ""
                      }`}
                    >
                        <div className="flex items-center gap-1 mb-3 text-white text-2xl">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-cyan-500 text-cyan-500"
                            />
                          ))}
                        </div>
                        <h3
                          data-testimonial-text
                          className="testimonial-lines__h text-white text-2xl overflow-hidden"
                        >
                          “{review.text}”
                        </h3>
                        <div className="testimonial-lines__item-details">
                          <div
                            data-testimonial-img
                            className="testimonial-lines__item-visual"
                          >
                            <img
                              src="/logo.png"
                              alt="Ecclection logo"
                              className="testimonial-lines__item-img text-white text-2xl"
                            />
                          </div>
                          <div>
                            <p
                              data-testimonial-split
                              className="testimonial-lines__p text-white text-2xl overflow-hidden"
                            >
                              {review.author}
                            </p>
                            <p
                              data-testimonial-split
                              className="testimonial-lines__p is--faded text-white text-2xl w-full overflow-hidden"
                            >
                              Google review · {review.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 text-center border-cyan-500 pt-8">
          <VisitBanner />
        </div>
    </>
  )
}
