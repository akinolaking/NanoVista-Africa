"use client";
import { useState, useEffect, useCallback } from "react";

const BASE = "https://nano-vista.com/wp-content/uploads";

// Localised from original source quotes — names adapted for West Africa
const QUOTES = [
  {
    text: "The day Emeka tried the Arcade model, he did not want to leave the store without them!",
    author: "Chukwuemeka Obi",
    role: "Father of Emeka, 5 years — Lagos, Nigeria",
  },
  {
    text: "Adaeze is happy, but I am even happier knowing that the glasses hold up against everything she throws at them.",
    author: "Ngozi Eze",
    role: "Mother of Adaeze, 2 years — Abuja, Nigeria",
  },
  {
    text: "I lost count of the money I spent replacing broken frames in the past year. That is finally over.",
    author: "Kwame Asante",
    role: "Father of Kofi, 8 years — Accra, Ghana",
  },
  {
    text: "Have you ever tried taking a teenager to an optical store and getting them to actually like something? With Nano, the problem was getting him to pick just one pair.",
    author: "Fatima Diallo",
    role: "Mother of Moussa, 14 years — Dakar, Senegal",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % QUOTES.length), []);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <>
      {/* White lead-in above green band */}
      <section className="bg-white py-12 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="reveal font-body text-gray-500 text-sm leading-relaxed mb-2">
            But what really fills us with pride and satisfaction is the recommendation of the true experts...
          </p>
          <h3
            className="reveal reveal-delay-1 font-heading font-bold italic leading-tight"
            style={{ fontSize: "clamp(22px, 3.5vw, 36px)", color: "#8dc63f" }}
          >
            YOU,<br />fathers and mothers of the world!
          </h3>
        </div>
      </section>

      {/* Green testimonial carousel band */}
      <section
        className="w-full py-16 px-6 text-center"
        style={{ background: "#8dc63f" }}
      >
        <div className="max-w-2xl mx-auto min-h-[160px] flex flex-col items-center justify-center">
          <blockquote
            key={current}
            className="font-heading font-bold text-white leading-relaxed mb-6 animate-fade-in"
            style={{ fontSize: "clamp(16px, 2.2vw, 22px)" }}
          >
            "{QUOTES[current].text}"
          </blockquote>
          <p className="font-body text-white/75 text-sm">
            {QUOTES[current].author} — {QUOTES[current].role}
          </p>
        </div>

        {/* Dots */}
        <div className="flex gap-3 justify-center mt-8">
          {QUOTES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Quote ${i + 1}`}
              className="transition-all duration-300"
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: i === current ? "white" : "rgba(255,255,255,0.4)",
                border: "none",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </section>

      {/* Parallax photo break 2 — girl with red glasses stretching frame */}
      <div
        className="parallax-bg w-full"
        style={{
          backgroundImage: `url(${BASE}/2021/09/Banner-Nanobot-ENG.jpg)`,
          height: "clamp(260px, 36vw, 440px)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
