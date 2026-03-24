"use client";

// components/Masonry.jsx
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Masonry.css";

gsap.registerPlugin(useGSAP);

const items = [
  { id: 1, img: "/carousel/6E39C97E-70C8-47C9-AD07-62A7632FB4F9.jpeg.jpg" },
  { id: 2, img: "/carousel/367A8900-99C2-45B4-9447-5565867A8AB9.jpeg.jpg" },
  { id: 3, img: "/carousel/A0A31AA0-7A51-4E6D-8314-ADE3148ADA0F.jpeg.jpg" },
  { id: 4, img: "/carousel/C10538C7-C6AF-442D-A9F7-F41C9351FA91.jpeg.jpg" },
  { id: 5, img: "/carousel/IMG_1688.jpeg.jpg" },
  { id: 6, img: "/carousel/IMG_2337.jpeg.jpg" },
  { id: 7, img: "/carousel/IMG_2986.jpeg.jpg" },
  { id: 8, img: "/carousel/IMG_2987.jpeg.jpg" },
  { id: 9, img: "/carousel/IMG_3323.jpeg.jpg" },
  { id: 10, img: "/carousel/IMG_3326.jpeg.jpg" },
  { id: 11, img: "/carousel/IMG_3558.jpeg.jpg" },
  { id: 12, img: "/carousel/IMG_4032.jpeg.jpg" },
  { id: 13, img: "/carousel/IMG_4060.jpeg.jpg" },
  { id: 14, img: "/carousel/IMG_4390.jpeg.jpg" },
  { id: 15, img: "/carousel/IMG_4394.jpeg.jpg" },
];

const tickerWords = ["Diversity", "Inclusion", "Human", "Art"];

function Masonry() {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      // use the items array instead of querying the DOM
      const images = items.map((i) => i.img);

      let incr = 0;
      let oldIncrX = 0;
      let oldIncrY = 0;
      let indexImg = 0;
      const resetDist = window.innerWidth / 8;

      const createMedia = (x, y, deltaX, deltaY) => {
        const image = document.createElement("img");
        image.setAttribute("src", images[indexImg]);

        // add to DOM as child of the root section
        root.appendChild(image);

        const tl = gsap.timeline({
          onComplete: () => {
            root.removeChild(image);
            tl.kill();
          },
        });

        tl.fromTo(
          image,
          {
            xPercent: -50 + (Math.random() - 0.5) * 80,
            yPercent: -50 + (Math.random() - 0.5) * 10,
            scaleX: 1.3,
            scaleY: 1.3,
          },
          {
            scaleX: 1,
            scaleY: 1,
            ease: "elastic.out(2, 0.6)",
            duration: 0.6,
          },
        );

        tl.fromTo(
          image,
          {
            x,
            y,
            rotation: (Math.random() - 0.5) * 20,
          },
          {
            x: "+=" + deltaX * 4,
            y: "+=" + deltaY * 4,
            rotation: (Math.random() - 0.5) * 20,
            ease: "power4.out",
            duration: 1.5,
          },
          "<",
        );

        tl.to(image, {
          duration: 0.3,
          scale: 0.5,
          delay: 0.1,
          ease: "back.in(1.5)",
        });

        indexImg = (indexImg + 1) % images.length;
      };

      const firstMove = (e) => {
        oldIncrX = e.clientX;
        oldIncrY = e.clientY;
        root.removeEventListener("mousemove", firstMove);
      };

      const handleMove = (e) => {
        const valX = e.clientX;
        const valY = e.clientY;

        incr += Math.abs(valX - oldIncrX) + Math.abs(valY - oldIncrY);

        if (incr > resetDist) {
          incr = 0;
          const rect = root.getBoundingClientRect();
          const localY = valY - rect.top;

          createMedia(valX, localY, valX - oldIncrX, valY - oldIncrY);
        }

        oldIncrX = valX;
        oldIncrY = valY;
      };

      // listeners on the section
      root.addEventListener("mousemove", firstMove, { once: true });
      root.addEventListener("mousemove", handleMove);

      // cleanup on unmount
      return () => {
        root.removeEventListener("mousemove", firstMove);
        root.removeEventListener("mousemove", handleMove);
      };
    },
    { scope: rootRef }, // tells useGSAP what DOM subtree to scope to
  );

  return (
    <section ref={rootRef} className="mwg_effect020 w-screen mx-auto">
      <div className="container mx-auto py-20 relative z-10 w-[105%] max-w-full fade-in flex flex-col items-between justify-between">
        <div className="header font-brand mb-8 w-screen mx-auto flex items-center justify-center">
          <div className="header-ticker" aria-label="Values ticker">
            <div className="header-track">
              {[...tickerWords, ...tickerWords].map((word, idx) => (
                <span key={`${word}-${idx}`} className="header-item">
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div
          className="grid items-center justify-center"
          style={{ top: "50%" }}
        >
          <p
            className="font-normal text-cyan-500 sm:text-5xl text-3xl text-center mx-auto grid items-center justify-center"
            style={{
              fontFamily: "Kadwa, sans-serif",
              marginLeft: "auto",
              marginRight: "auto",
              top: "100%",
            }}
          >
            3rd Thursday Every of Month
          </p>
          <p
            className="grid items-center justify-center text-xl sm:text-2xl font-brand text-white text-center mt-8 max-w-3xl mx-auto"
            style={{
              fontFamily: "Kadwa, sans-serif",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
            }}
          >
          Dates and times: April 16th, 2026 from 6:00pm - 8:00pm
          <br />
          May 21st, 2026 from 6:00pm - 8:00pm
          <br />
          June 18th, 2026 from 6:00pm - 8:00pm
          <br />
          July 16th, 2026 from 6:00pm - 8:00pm
          <br />
          August 20th, 2026 from 6:00pm - 8:00pm
          <br />
          September 17th, 2026 from 6:00pm - 8:00pm
          <br />
          </p>
        </div>
        <div className="header-ticker" aria-label="Values ticker">
            <div className="header-track">
              {[...tickerWords, ...tickerWords].map((word, idx) => (
                <span key={`${word}-${idx}`} className="header-item text-white">
                  {word}
                </span>
              ))}
            </div>
          </div>
      </div>

      {/* Hidden source images — direct children of .medias so .mwg_effect020 .medias img applies; avoid header-track (ticker flex/animation) on these */}
      <div className="medias" aria-hidden="true">
        {items.map((item) => (
          <img key={item.id} src={item.img} alt="" />
        ))}
      </div>
    </section>
  );
}

export default Masonry;
