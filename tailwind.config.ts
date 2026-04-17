import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff8e1",
          100: "#f8ebbb",
          300: "#e3c76b",
          400: "#dcb84f",
          500: "#d4af37",
          600: "#b89222",
          700: "#8d6f12"
        },
        accent: {
          300: "#1d3b72",
          400: "#0a1f44",
          500: "#071631"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(212,175,55,0.14), 0 22px 70px rgba(4,8,20,0.28)",
        luxe: "0 18px 55px rgba(10,31,68,0.18)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(212,175,55,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.09) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
