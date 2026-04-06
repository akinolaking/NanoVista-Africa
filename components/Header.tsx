'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const NAV_LINKS = [
  { label: 'Home',        href: '#home' },
  { label: 'About',       href: '#about' },
  { label: 'Collections', href: '#collections' },
  { label: 'Store',       href: '#store' },
  { label: 'Contact',     href: '#contact' },
] as const

export default function Header() {
  const [menuOpen, setMenuOpen]     = useState(false)
  const [scrolled, setScrolled]     = useState(false)
  const [activeId, setActiveId]     = useState('home')

  /* Shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Active nav highlight */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace('#', ''))
    const onScroll = () => {
      const y = window.scrollY + 100
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.offsetTop <= y) { setActiveId(ids[i]); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Lock body scroll when mobile nav open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMob = useCallback(() => setMenuOpen(false), [])

  const hamTop    = menuOpen ? 'translate-y-[7px] rotate-45'  : ''
  const hamMid    = menuOpen ? 'opacity-0'                     : ''
  const hamBot    = menuOpen ? '-translate-y-[7px] -rotate-45': ''

  return (
    <>
      <header
        className={`sticky top-0 z-[200] w-full bg-primary transition-shadow duration-300 ${
          scrolled ? 'shadow-xl' : ''
        }`}
      >
        <div className="max-w-page mx-auto px-7 h-[66px] flex items-center justify-between gap-6">

          {/* Logo */}
          <a href="#home" className="flex items-end gap-2.5 shrink-0" aria-label="NanoVista Africa">
            <Image
              src="/images/logo.svg"
              alt="NanoVista"
              width={120}
              height={34}
              className="h-[34px] w-auto"
              priority
            />
            <span className="font-heading font-bold text-[8px] tracking-[0.4em] uppercase text-white/80 mb-1">
              Africa
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 mx-auto" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`
                  px-4 py-2.5 font-heading font-bold text-[11px] tracking-[0.1em]
                  uppercase text-white transition-all duration-200 rounded-lg
                  ${activeId === link.href.replace('#', '')
                    ? 'bg-white/20'
                    : 'hover:text-white/70 hover:bg-white/10'
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`block w-[22px] h-[2px] bg-white rounded-sm transition-transform duration-300 ${hamTop}`} />
            <span className={`block w-[22px] h-[2px] bg-white rounded-sm transition-opacity duration-300 ${hamMid}`} />
            <span className={`block w-[22px] h-[2px] bg-white rounded-sm transition-transform duration-300 ${hamBot}`} />
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <nav
        className={`
          fixed inset-0 top-[66px] bg-white z-[190] overflow-y-auto
          transition-transform duration-[380ms] ease-[cubic-bezier(.4,0,.2,1)]
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMob}
            className="block px-7 py-[18px] font-heading font-bold text-[13px] tracking-[0.1em] uppercase text-body border-b border-[#f0f0f0] transition-all duration-200 hover:text-primary hover:pl-9"
          >
            {link.label}
          </a>
        ))}
        <div className="p-7">
          <a
            href="https://optixwarehouse.com.ng/store/nanoafrica/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMob}
            className="btn-primary w-full flex justify-center text-[13px]"
          >
            Shop at Optix Warehouse
          </a>
        </div>
      </nav>
    </>
  )
}
