'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

const QUOTES = [
  {
    q: '\u201cThe day Emeka tried the Arcade model, he did not want to leave the store without them!\u201d',
    a: 'Chukwuemeka Obi \u2014 Father of Emeka, 5 years old \u2014 Lagos, Nigeria',
  },
  {
    q: '\u201cAdaeze is happy, but I am even happier knowing that the glasses hold up to everything she throws at them.\u201d',
    a: 'Ngozi Eze \u2014 Mother of Adaeze, 2 years old \u2014 Abuja, Nigeria',
  },
  {
    q: '\u201cI lost count of the money I spent replacing broken frames last year. That is finally over.\u201d',
    a: 'Kwame Asante \u2014 Father of Kofi, 8 years old \u2014 Accra, Ghana',
  },
  {
    q: '\u201cHave you ever tried taking a teenager to an optical store and getting them to actually like something? With Nano, the problem was getting him to choose just one pair.\u201d',
    a: 'Fatima Diallo \u2014 Mother of Moussa, 14 years old \u2014 Dakar, Senegal',
  },
] as const

const AUTOPLAY_MS = 6500

export default function TestimonialsSection() {
  const [current, setCurrent]   = useState(0)
  const [fading,  setFading]    = useState(false)
  const [fresh,   setFresh]     = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = useCallback((n: number) => {
    setFading(true)
    setTimeout(() => {
      setCurrent(((n % QUOTES.length) + QUOTES.length) % QUOTES.length)
      setFading(false)
      setFresh(true)
      setTimeout(() => setFresh(false), 500)
    }, 400)
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % QUOTES.length)
    }, AUTOPLAY_MS)
  }, [])

  useEffect(() => {
    timerRef.current = setInterval(() => {
      go(current + 1)
    }, AUTOPLAY_MS)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {/* White lead-in */}
      <section className="bg-white py-16 px-6 text-center">
        <div className="max-w-sm mx-auto">
          <p className="sr font-body text-[15px] text-[#999] mb-3.5 leading-[1.7]">
            But what really fills us with satisfaction is the voice of the true experts&hellip;
          </p>
          <h2
            className="sr d1 font-heading font-bold italic leading-[1.2]"
            style={{ fontSize: 'clamp(24px, 3.5vw, 42px)', color: '#8dc63f' }}
          >
            YOU,<br />fathers and mothers of West Africa!
          </h2>
        </div>
      </section>

      {/* Green carousel */}
      <section
        className="relative overflow-hidden py-20 px-6 text-center"
        style={{ background: '#8dc63f' }}
      >
        {/* Dot texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[760px] mx-auto min-h-[180px] flex flex-col items-center justify-center">
          {/* Big opening quote mark */}
          <span
            className="absolute top-[-20px] left-0 font-serif text-[120px] leading-none pointer-events-none select-none"
            style={{ color: 'rgba(255,255,255,0.12)' }}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <blockquote
            className={`
              font-heading font-bold text-white leading-[1.65] mb-6 relative z-10
              ${fading ? 'opacity-0' : ''}
              ${fresh  ? 'testi-fresh' : ''}
              transition-opacity duration-400
            `}
            style={{ fontSize: 'clamp(17px, 2.4vw, 26px)' }}
          >
            {QUOTES[current].q}
          </blockquote>

          <p className="font-body text-[14px] text-white/70 font-semibold">
            {QUOTES[current].a}
          </p>
        </div>

        {/* Dots */}
        <div className="relative z-10 flex gap-3 justify-center mt-10" role="tablist">
          {QUOTES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => go(i)}
              className="w-3 h-3 rounded-full border-none cursor-pointer transition-all duration-250"
              style={{
                background: i === current ? '#ffffff' : 'rgba(255,255,255,0.35)',
                transform: i === current ? 'scale(1.25)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </section>
    </>
  )
}
