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
        // Forest Green color palette centered on #52704e
        primary: {
          50: "#f5f7f2",
          100: "#e8ede3",
          200: "#d4dcc8",
          300: "#b8c5a8",
          400: "#8fa67f",
          500: "#52704e",
          600: "#456345",
          700: "#38533a",
          800: "#2d4430",
          900: "#213028",
        },
        accent: {
          50: "#f9f6f1",
          100: "#f0e6d9",
          200: "#e3cfb3",
          300: "#d4b591",
          400: "#c19a6b",
          500: "#a68b6d",
          600: "#8b7355",
          700: "#705e43",
          800: "#5a4c38",
          900: "#463a2d",
        },
        luxury: {
          gold: "#c4a76d",
          platinum: "#b5a6a4",
          charcoal: "#2d3748",
          navy: "#1a202c",
          cream: "#f7fafc",
          black: "#0a0a0a",
          white: "#ffffff",
          silver: "#c0c0c0",
        },
        fashion: {
          rose: "#b89696",
          emerald: "#5a9d7a",
          sapphire: "#5a8fa6",
          amethyst: "#7a6b8f",
          coral: "#b8846d",
          teal: "#5a9d8f",
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
          "0%": { boxShadow: "0 0 5px rgba(82, 112, 78, 0.5)" },
          "100%": { boxShadow: "0 0 20px rgba(82, 112, 78, 0.8)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        parallax: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-50px)" },
        },
        "parallax-slow": {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-100px)" },
        },
        "parallax-medium": {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-75px)" },
        },
        "parallax-fast": {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-150px)" },
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
