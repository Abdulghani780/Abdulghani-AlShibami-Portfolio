import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas-bg)",
        surface: {
          DEFAULT: "var(--surface-elevated)",
          overlay: "var(--surface-overlay)",
          interactive: "var(--surface-interactive)",
          low: "var(--surface-low)",
        },
        hairline: "var(--border-hairline)",
        gold: {
          DEFAULT: "var(--gold-primary)",
          light: "var(--gold-light)",
          dark: "var(--gold-dark)",
          muted: "var(--gold-muted)",
          glow: "var(--gold-glow)",
        },
        content: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        status: {
          emerald: "var(--status-emerald)",
          amber: "var(--status-amber)",
          rose: "var(--status-rose)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Noto Serif", "serif"],
        sans: ["var(--font-sans)", "Geist", "Noto Sans", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
        arabic: ["var(--font-arabic)", "Noto Kufi Arabic", "Noto Sans Arabic", "sans-serif"],
      },
      boxShadow: {
        gold: "0 0 0 1px #D4AF37, 0 12px 32px -8px rgba(212, 175, 55, 0.15)",
        "gold-ambient": "0 4px 25px -2px rgba(212, 175, 55, 0.25)",
        porcelain: "0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 1px 3px 0 rgba(15, 23, 42, 0.02)",
        "porcelain-lift": "0 20px 35px -8px rgba(15, 23, 42, 0.06), 0 1px 4px 0 rgba(153, 122, 21, 0.04)",
      },
      maxWidth: {
        arch: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
