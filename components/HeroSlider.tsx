'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

const SLIDES = [
  {
    src: '/images/slide-1-clip.jpg',
    alt: 'Nano Clip — prescription glasses with solar clip for children',
  },
  {
    src: '/images/slide-2-indestructible.jpg',
    alt: 'Nano Indestructible — unbreakable flexible frames for children',
  },
  {
    src: '/images/slide-3-myopia.jpg',
    alt: 'MYOP-K — myopia management lenses for children',
  },
  {
    src: '/images/slide-4-sport.jpg',
    alt: 'Nano Sport — protective sports eyewear for children',
  },
] as const

const AUTOPLAY_MS = 5500

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const touchStartX = useRef(0)

  const go = useCallback((n: number) => {
    setCurrent(((n % SLIDES.length) + SLIDES.length) % SLIDES.length)
  }, [])

  const next = useCallback(() => go(current + 1), [current, go])
  const prev = useCallback(() => go(current - 1), [current, go])

  /* Autoplay */
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length)
    }, AUTOPLAY_MS)
  }, [])

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [resetTimer])

  /* Keyboard */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  { prev(); resetTimer() }
      if (e.key === 'ArrowRight') { next(); resetTimer() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, resetTimer])

  const handleSlide = (n: number) => { go(n); resetTimer() }

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-light"
      style={{ height: 'clamp(220px, 44vw, 580px)' }}
      aria-label="Featured collections"
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
      onTouchEnd={(e) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX
        if (Math.abs(diff) > 44) { diff > 0 ? next() : prev(); resetTimer() }
      }}
    >
      {/* Track */}
      <div
        className="flex h-full transition-transform duration-700 ease-spring will-change-transform"
        style={{ transform: `translateX(-${current * 100}%)`, width: `${SLIDES.length * 100}%` }}
      >
        {SLIDES.map((slide, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <div key={slide.src} className="relative h-full shrink-0" style={{ width: `${100 / SLIDES.length}%` }}>
            <img
              src={slide.src}
              alt={slide.alt}
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding={i === 0 ? 'sync' : 'async'}
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10" role="tablist" aria-label="Slide navigation">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            onClick={() => handleSlide(i)}
            className="h-[10px] rounded-[5px] border-none cursor-pointer transition-all duration-300 p-0"
            style={{
              width: i === current ? '32px' : '10px',
              background: i === current ? '#8dc63f' : 'rgba(255,255,255,0.48)',
            }}
          />
        ))}
      </div>

      {/* Prev arrow */}
      <button
        onClick={() => { prev(); resetTimer() }}
        aria-label="Previous slide"
        className="absolute left-[18px] top-1/2 -translate-y-1/2 z-10 w-[46px] h-[46px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-primary hover:scale-105 backdrop-blur-sm"
        style={{ background: 'rgba(0,0,0,0.22)', border: '1.5px solid rgba(255,255,255,0.3)' }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M10 3L5 8L10 13" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Next arrow */}
      <button
        onClick={() => { next(); resetTimer() }}
        aria-label="Next slide"
        className="absolute right-[18px] top-1/2 -translate-y-1/2 z-10 w-[46px] h-[46px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-primary hover:scale-105 backdrop-blur-sm"
        style={{ background: 'rgba(0,0,0,0.22)', border: '1.5px solid rgba(255,255,255,0.3)' }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M6 3L11 8L6 13" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  )
}
