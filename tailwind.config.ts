import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8dc63f',
          dark:    '#6aaa1e',
          light:   '#a8d960',
        },
        purple:  '#9b59b6',
        surface: '#ffffff',
        light:   '#f4f4f4',
        muted:   '#888888',
        body:    '#333333',
        success: '#16A34A',
        warning: '#D97706',
        danger:  '#DC2626',
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body:    ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        none:    '0px',
        sm:      '4px',
        DEFAULT: '8px',
        md:      '8px',
        lg:      '12px',
        card:    '16px',
        xl:      '20px',
        pill:    '30px',
        full:    '9999px',
      },
      boxShadow: {
        card:  '0 8px 32px rgba(0,0,0,.10)',
        hover: '0 16px 48px rgba(141,198,63,.28)',
        green: '0 4px 24px rgba(141,198,63,.35)',
      },
      maxWidth: {
        page: '1200px',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(36px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.75s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
        '450': '450ms',
        '700': '700ms',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.25,0.46,0.45,0.94)',
      },
    },
  },
  plugins: [],
}

export default config
