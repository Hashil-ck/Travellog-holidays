import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury color palette inspired by Cutefold and Yodezeen
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        accent: {
          50: "#fef7ee",
          100: "#fdedd3",
          200: "#fbd7a5",
          300: "#f8ba6d",
          400: "#f59432",
          500: "#f2760a",
          600: "#e35d05",
          700: "#bc4508",
          800: "#95370e",
          900: "#782f0f",
        },
        luxury: {
          gold: "#d4af37",
          platinum: "#e5e4e2",
          charcoal: "#2d3748",
          navy: "#1a202c",
          cream: "#f7fafc",
          black: "#0a0a0a",
          white: "#ffffff",
          silver: "#c0c0c0",
        },
        fashion: {
          rose: "#e91e63",
          emerald: "#00c853",
          sapphire: "#2196f3",
          amethyst: "#9c27b0",
          coral: "#ff5722",
          teal: "#009688",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        luxury: ["Montserrat", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "bounce-slow": "bounce 2s infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        shimmer: "shimmer 2s linear infinite",
        parallax: "parallax 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(212, 175, 55, 0.5)" },
          "100%": { boxShadow: "0 0 20px rgba(212, 175, 55, 0.8)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        parallax: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-50px)" },
        },
      },
      transform: {
        "rotate-y-6": "rotateY(6deg)",
        "rotate-y-12": "rotateY(12deg)",
        "rotate-x-6": "rotateX(6deg)",
        "rotate-z-6": "rotateZ(6deg)",
      },
      perspective: {
        "1000": "1000px",
        "2000": "2000px",
      },
    },
  },
  plugins: [],
};
export default config;
