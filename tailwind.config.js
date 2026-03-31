/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 4GO Academy brand colors (customize as needed)
        primary: "#FF6B00",
        "primary-hover": "#E05A00",
        dark: "#0A0A0A",
        "dark-card": "#111111",
        "gray-mid": "#1A1A1A",
        light: "#F5F5F5",
        accent: "#FFD700",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        "4go-sm": ["0.875rem", { lineHeight: "1.5" }],
        "4go-base": ["1rem", { lineHeight: "1.6" }],
        "4go-lg": ["1.25rem", { lineHeight: "1.5" }],
        "4go-xl": ["1.5rem", { lineHeight: "1.4" }],
        "4go-2xl": ["2rem", { lineHeight: "1.3" }],
        "4go-3xl": ["2.5rem", { lineHeight: "1.2" }],
        "4go-hero": ["3.5rem", { lineHeight: "1.1" }],
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
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fadeUp 0.5s ease-out forwards",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
