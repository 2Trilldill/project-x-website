// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // steel-gray scale
        "steel-gray": {
          50:  "#f7fafc",
          100: "#edf2f7",
          200: "#e2e8f0",
          300: "#cbd5e0",
          400: "#a0aec0",
          500: "#718096",
          600: "#4a5568",
          700: "#2d3748",
          800: "#1a202c",
          900: "#171923",
        },
        "safety-yellow": "#ecc94b",
        "brand-blue": "#0f4c81",
        "nav-dark":    "#1A1A1A",  // charcoal for nav overlay
        "nav-text":    "#F5F5F5",  // light link text
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
