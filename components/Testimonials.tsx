"use client";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    quote: "My son is extremely active and breaks everything. He's had his NanoVista frames for over a year — still perfect. Worth every penny.",
    name: "Adaeze O.",
    role: "Mother of Chidi · 7 years · Lagos, Nigeria",
    product: "Nano Indestructible",
  },
  {
    quote: "The day my daughter tried the NanoVista frames, she didn't want to leave the store without them! The optician recommended them and I'm so glad she did.",
    name: "Kwame A.",
    role: "Father of Abena · 5 years · Accra, Ghana",
    product: "Nano Baby",
  },
  {
    quote: "I spent so much money replacing cheap frames every few months. Since switching to NanoVista, not one problem. The glow models are my son's favourite.",
    name: "Blessing I.",
    role: "Mother of Emeka · 9 years · Abuja, Nigeria",
    product: "Nano Glow",
  },
  {
    quote: "As an optometrist, I confidently recommend NanoVista to all my paediatric patients. The Siliflex material and adjustable temple system are genuinely superior.",
    name: "Dr. Funmilayo A.",
    role: "Paediatric Optometrist · Port Harcourt",
    product: "Professional Endorsement",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const t = testimonials[current];

  return (
    <section>
      {/* Lime green testimonial band */}
      <div className="bg-[#8dc63f] py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <blockquote
            key={current}
            className="animate-fadeUp font-heading font-bold text-white text-lg md:text-xl leading-relaxed mb-6"
          >
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <p className="text-white/80 text-sm font-heading">
            {t.name} — {t.role}
          </p>

          {/* Dot indicators */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "24px" : "8px",
                  height: "8px",
                  background: i === current ? "white" : "rgba(255,255,255,0.45)",
                }}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Full-width photo */}
      <div className="w-full overflow-hidden" style={{ height: "clamp(300px, 38vw, 520px)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=1920&q=80"
          alt="Happy child wearing NanoVista glasses"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </section>
  );
}
