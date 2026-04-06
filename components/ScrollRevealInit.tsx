'use client'

import { useEffect } from 'react'

/**
 * Paper Design scroll reveal — boots IntersectionObserver for all
 * .sr, .sr-left, .sr-right elements defined in globals.css
 */
export default function ScrollRevealInit() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.sr, .sr-left, .sr-right')

    if (!elements.length || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('on'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
