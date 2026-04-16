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
          50: "#ebfff2",
          300: "#63e89a",
          400: "#34d27a",
          500: "#11b864",
          600: "#089650"
        },
        accent: {
          300: "#f7d06d",
          400: "#f2bd3b"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(99,232,154,0.12), 0 18px 60px rgba(3,8,25,0.45)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(99,232,154,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,232,154,0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
