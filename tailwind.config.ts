import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: "#F7F6EB",
        "green-accent": "#71CE6A",
        "green-dark": "#2D4239",
        "green-darker": "#1a2b23",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: {
          DEFAULT: "#2D4239",
          foreground: "#F7F6EB",
        },
        secondary: {
          DEFAULT: "#71CE6A",
          foreground: "#2D4239",
        },
        muted: {
          DEFAULT: "#f0efe4",
          foreground: "#6b7f74",
        },
        accent: {
          DEFAULT: "#71CE6A",
          foreground: "#2D4239",
        },
      },
      fontFamily: {
        garamond: ["var(--font-garamond)", "Georgia", "serif"],
        jakarta: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "wa-pulse": {
          "0%, 100%": { boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)" },
          "50%": { boxShadow: "0 4px 32px rgba(37, 211, 102, 0.7)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out both",
        "wa-pulse": "wa-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
