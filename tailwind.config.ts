import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // NanoVista brand — extracted from screenshots
        nano: {
          green:      "#8dc63f",  // primary — nav, bands, CTAs
          "green-dk": "#6aaa1e",  // hover
          teal:       "#2ecc8e",  // nanobot section
          purple:     "#9b59b6",  // endorsement panel
          grey:       "#f4f4f4",  // footer / alt sections
          "grey-bar": "#888888",  // copyright bar
          dark:       "#333333",  // body text
        },
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body:    ["Roboto", "sans-serif"],
      },
      spacing: {
        // Paper 4px base scale
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "6": "24px",
        "8": "32px",
      },
      borderRadius: {
        pill: "30px",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        ticker: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulse_dot: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%":      { transform: "scale(1.4)", opacity: "0.5" },
        },
      },
      animation: {
        "fade-up":   "fade-up 0.7s ease forwards",
        "fade-in":   "fade-in 0.5s ease forwards",
        ticker:      "ticker 28s linear infinite",
        pulse_dot:   "pulse_dot 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
