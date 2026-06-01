'use client'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useSpawnImagesOnMove } from "@/app/hooks/useSpawnImagesOnMove";
import { CAROUSEL_IMAGES } from "@/data/carouselImages";
import "./Masonry.css";
import "./SpawnImages.css";

gsap.registerPlugin(useGSAP);

function Masonry() {
  const rootRef = useRef(null);
  useSpawnImagesOnMove(rootRef, CAROUSEL_IMAGES);

  return (
    <section ref={rootRef} className="mwg_effect020 spawn-images-root" style={{ backgroundImage: 'url("/texture.jpg")' }}>
      <div className="container mx-auto py-20 px-4 relative z-10 w-screen">
        <div className="header font-brand flex justify-between mb-8">
          <p className="text-4xl">DIVERSITY</p>
          <p className="text-4xl">INCLUSION</p>
          <p className="text-4xl">HUMAN</p>
          <p className="text-4xl">ART</p>
        </div>
        <p className="font-brand sm:text-9xl text-6xl text-center text-cyan-500">Empowering human creativity, connection inclusion and sustainability</p>
        <p className="text-secondary text-center mt-8 max-w-3xl mx-auto">
          We also have. few more tricks under our sleeve & like to mix things up a bit.
        </p>
      </div>

      <div className="medias spawn-images-preload" aria-hidden>
        {CAROUSEL_IMAGES.map((src) => (
          <img key={src} src={src} alt="" />
        ))}
      </div>
    </section>
  );
}

export default Masonry;
