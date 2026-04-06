"use client";
import { useState, useEffect, useCallback } from "react";

const BASE = "https://nano-vista.com/wp-content/uploads";

const SLIDES = [
  {
    img: `${BASE}/2026/02/Portada_Web_1920x560_CLIP_26.jpg`,
    mobileImg: `${BASE}/2026/02/Banner_Carrusel_Mobile_NANO-CLIP_2026.jpg`,
  },
  {
    img: `${BASE}/2025/09/Banner_Web_NANO-INDESTRUCTIBLE_2025.jpg`,
    mobileImg: `${BASE}/2025/09/Banner_Carrusel_Mobile_INDESTRUCTIBLE_2025.jpg`,
  },
  {
    img: `${BASE}/2025/03/Banner_Home_Web_Escritorio_Slide4_ENG.jpg`,
    mobileImg: `${BASE}/2025/03/Banner_Carrusel_Mobile_Principal_LENTES_MIOPIA_ENG.jpg`,
  },
  {
    img: `${BASE}/2024/09/Banner_Home_Web_Escritorio_Slide2.jpg`,
    mobileImg: `${BASE}/2024/09/Banners_Home_Web_Mobile_Slide2.jpg`,
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  // Touch swipe
  let touchStart = 0;

  return (
    <section
      className="relative w-full overflow-hidden bg-gray-100"
      style={{ height: "clamp(220px, 40vw, 560px)" }}
      onTouchStart={(e) => { touchStart = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        const diff = touchStart - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
      }}
    >
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)`, width: `${SLIDES.length * 100}%` }}
      >
        {SLIDES.map((slide, i) => (
          <div key={i} className="relative h-full" style={{ width: `${100 / SLIDES.length}%` }}>
            <img
              src={isMobile ? slide.mobileImg : slide.img}
              alt={`NanoVista Africa slide ${i + 1}`}
              className="w-full h-full object-cover object-center"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-300"
            style={{
              width: i === current ? "28px" : "10px",
              height: "10px",
              borderRadius: "5px",
              background: i === current ? "#8dc63f" : "rgba(255,255,255,0.6)",
              border: "none",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/25 hover:bg-black/40 flex items-center justify-center transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M11 4L6 9L11 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/25 hover:bg-black/40 flex items-center justify-center transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M7 4L12 9L7 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </section>
  );
}
