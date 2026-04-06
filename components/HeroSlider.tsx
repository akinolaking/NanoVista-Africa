"use client";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    bg: "#1a1a1a",
    accent: "#e30613",
    eyebrow: "NEW COLLECTION 2025",
    headline: "INDESTRUCTIBLE.\nFLEXIBLE.\nFOR EVERY CHILD.",
    sub: "Nano Indestructible — the frame that survives every adventure.",
    cta: "EXPLORE COLLECTION",
    ctaHref: "/collections/nano-indestructible",
    badge: "BABIES · KIDS · TEENS",
    visual: "glasses-hero",
    pattern: "dots",
  },
  {
    id: 2,
    bg: "#0d1b2a",
    accent: "#f7941d",
    eyebrow: "MYOPIA MANAGEMENT",
    headline: "PROTECT\nYOUR CHILD'S\nVISION TODAY.",
    sub: "Advanced myopia management lenses — clinically proven for children.",
    cta: "LEARN MORE",
    ctaHref: "/collections/myopia-management",
    badge: "AGES 6–16",
    visual: "myopia-hero",
    pattern: "waves",
  },
  {
    id: 3,
    bg: "#1e3a2f",
    accent: "#4caf50",
    eyebrow: "NANO SPORT",
    headline: "BUILT FOR\nATHLETES.\nAGED 4+",
    sub: "Sports protective eyewear — prescription available. Zero compromises.",
    cta: "SHOP NANO SPORT",
    ctaHref: "/collections/nano-sport",
    badge: "SPORTS · OUTDOOR",
    visual: "sport-hero",
    pattern: "grid",
  },
  {
    id: 4,
    bg: "#2a1a0d",
    accent: "#e30613",
    eyebrow: "FIND YOUR NEAREST STOCKIST",
    headline: "NANOVISTA\nACROSS NIGERIA\n& WEST AFRICA.",
    sub: "Authorized optical stores stocking NanoVista. Now closer to you.",
    cta: "FIND A STORE",
    ctaHref: "/find-a-store",
    badge: "LAGOS · ABUJA · ACCRA · MORE",
    visual: "map-hero",
    pattern: "africa",
  },
];

const BackgroundVisual = ({
  type,
  accent,
  pattern,
}: {
  type: string;
  accent: string;
  pattern: string;
}) => {
  const patternEl =
    pattern === "dots" ? (
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="white" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    ) : pattern === "waves" ? (
      <svg
        className="absolute bottom-0 left-0 w-full opacity-10"
        viewBox="0 0 1440 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,100 C360,200 720,0 1080,100 C1260,150 1380,80 1440,100 L1440,200 L0,200 Z"
          fill="white"
        />
      </svg>
    ) : pattern === "grid" ? (
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0 L0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    ) : (
      // Africa outline shape
      <svg
        className="absolute right-0 top-0 h-full opacity-5"
        viewBox="0 0 400 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M200,20 C280,20 340,60 350,120 C360,180 330,200 340,240 C350,280 380,300 370,360 C360,420 320,460 280,500 C240,540 200,570 180,560 C140,545 100,500 80,460 C60,420 70,380 60,340 C50,300 30,280 40,240 C50,200 80,180 90,140 C100,80 120,20 200,20Z"
          fill="white"
        />
      </svg>
    );

  const glassIcon = (
    <svg viewBox="0 0 200 80" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <circle cx="55" cy="40" r="30" fill="none" stroke={accent} strokeWidth="6" opacity="0.8" />
      <circle cx="145" cy="40" r="30" fill="none" stroke={accent} strokeWidth="6" opacity="0.8" />
      <line x1="85" y1="40" x2="115" y2="40" stroke={accent} strokeWidth="5" />
      <line x1="10" y1="35" x2="25" y2="40" stroke={accent} strokeWidth="4" strokeLinecap="round" />
      <line x1="175" y1="40" x2="190" y2="35" stroke={accent} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );

  return (
    <div className="absolute inset-0 flex items-center justify-end pr-8 md:pr-20">
      {patternEl}
      <div
        className="w-48 h-20 md:w-72 md:h-28 opacity-20"
        style={{ filter: "drop-shadow(0 0 40px " + accent + ")" }}
      >
        {glassIcon}
      </div>
    </div>
  );
};

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(index);
      setTimeout(() => setAnimating(false), 700);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: slide.bg,
        minHeight: "clamp(420px, 60vw, 620px)",
        transition: "background-color 0.65s ease",
      }}
    >
      <BackgroundVisual
        type={slide.visual}
        accent={slide.accent}
        pattern={slide.pattern}
      />

      {/* Diagonal accent stripe */}
      <div
        className="absolute top-0 right-0 w-2/5 h-full opacity-10"
        style={{
          background: `linear-gradient(135deg, transparent 40%, ${slide.accent} 40%)`,
          transition: "background 0.65s ease",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center h-full"
        style={{ minHeight: "clamp(420px, 60vw, 620px)" }}
      >
        <div key={current} className="animate-fadeSlide max-w-2xl py-16">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 text-xs font-heading font-bold tracking-[0.2em] mb-4 px-3 py-1"
            style={{ color: slide.accent, border: `1px solid ${slide.accent}` }}
          >
            {slide.eyebrow}
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-none mb-6 whitespace-pre-line"
            style={{ textShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
          >
            {slide.headline}
          </h1>

          {/* Sub */}
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-md font-light leading-relaxed">
            {slide.sub}
          </p>

          {/* Badge */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span
              className="text-xs font-heading font-bold tracking-wider px-3 py-1 rounded-full"
              style={{ background: `${slide.accent}22`, color: slide.accent }}
            >
              {slide.badge}
            </span>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <a
              href={slide.ctaHref}
              className="inline-flex items-center gap-2 text-sm font-heading font-bold px-8 py-4 text-white tracking-wider transition-all hover:scale-105"
              style={{ background: slide.accent }}
            >
              {slide.cta}
              <span>→</span>
            </a>
            <a
              href="/find-a-store"
              className="inline-flex items-center gap-2 text-sm font-heading font-bold px-8 py-4 border border-gray-600 text-gray-300 hover:border-white hover:text-white transition-colors tracking-wider"
            >
              FIND A STORE
            </a>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-6 md:left-12 flex items-center gap-4 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="transition-all duration-300"
            style={{
              width: i === current ? "32px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background: i === current ? slide.accent : "rgba(255,255,255,0.3)",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
        aria-label="Next"
      >
        <ChevronRight size={20} />
      </button>
    </section>
  );
}
