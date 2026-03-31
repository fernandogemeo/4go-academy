/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        // 4GO Academy — adapted from apro-vision-nexus design system
        fire: "#fc6c04",
        "fire-hover": "#e05a00",
        "fire-light": "#FF9424",
        cream: "#ffffff",
        nearblack: "#04192D",
        "dark-charcoal": "#0F0F0F",
        graphite: "#141414",
        "ice-blue": "#e8f0f8",
        gold: "#F4B503",
        green: "#00983A",
        "green-bright": "#04FB04",
        "gray-mid": "#A8A8A8",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        display: ["Outfit", "sans-serif"],
        body: ["Outfit", "sans-serif"],
      },
      fontSize: {
        "fire-sm": ["14px", { lineHeight: "1.5" }],
        "fire-base": ["16px", { lineHeight: "1.5" }],
        "fire-md": ["18px", { lineHeight: "1.5" }],
        "fire-lg": ["20px", { lineHeight: "1.4" }],
        "fire-xl": ["24px", { lineHeight: "1.3" }],
        "fire-2xl": ["30px", { lineHeight: "1.2" }],
        "fire-5xl": ["50px", { lineHeight: "1.1" }],
        "fire-hero": ["70px", { lineHeight: "1" }],
      },
      borderRadius: {
        pill: "70px",
      },
      letterSpacing: {
        fire: "0.06em",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(60px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "slide-in-right": "slide-in-right 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        marquee: "marquee 24s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
