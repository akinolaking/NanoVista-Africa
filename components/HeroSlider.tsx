"use client";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1920&q=80",
    brandWord: "nano",
    brandAccent: "CLIP",
    accentColor: "#8dc63f",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1920&q=80",
    brandWord: "nano",
    brandAccent: "BABY",
    accentColor: "#f7941d",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?auto=format&fit=crop&w=1920&q=80",
    brandWord: "nano",
    brandAccent: "SPORT",
    accentColor: "#00b0d8",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "clamp(420px, 55vw, 650px)" }}>
      {/* Background photo */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: i === current ? 1 : 0,
            backgroundImage: `url(${s.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
      ))}

      {/* Light gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

      {/* Brand name overlay — bottom-left, nano-vista.com style */}
      <div className="absolute bottom-16 left-8 md:left-16 z-10">
        <div
          key={current}
          className="animate-fadeUp font-heading font-black leading-none select-none"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          <span className="text-white drop-shadow-lg" style={{ fontStyle: "italic" }}>
            {slide.brandWord}
          </span>
          <span
            className="drop-shadow-lg"
            style={{ color: slide.accentColor, fontStyle: "italic" }}
          >
            {slide.brandAccent}
          </span>
        </div>
      </div>

      {/* NanoVista logo watermark — bottom-right */}
      <div className="absolute bottom-8 right-8 z-10 opacity-80">
        <svg width="90" height="36" viewBox="0 0 90 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="22" fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="18" fill="white">nano</text>
          <text x="0" y="34" fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="9" fill="white" letterSpacing="1">VISTA</text>
          <text x="46" y="34" fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="7" fill="rgba(255,255,255,0.8)" letterSpacing="1">AFRICA</text>
          <text x="68" y="22" fontFamily="sans-serif" fontSize="14" fill="white">🖐</text>
        </svg>
      </div>

      {/* Dot indicators — centred bottom */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? "28px" : "8px",
              height: "8px",
              background: i === current ? "#fff" : "rgba(255,255,255,0.5)",
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrow controls */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors backdrop-blur-sm"
        aria-label="Previous"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors backdrop-blur-sm"
        aria-label="Next"
      >
        <ChevronRight size={22} />
      </button>
    </section>
  );
}
