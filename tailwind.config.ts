import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./demos/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas-bg)",
        obsidian: {
          DEFAULT: "#05080E",
          950: "#04060A",
          900: "#05080E",
          850: "#070A0F",
          800: "#0A0F1A",
          750: "#0E1524",
          700: "#131B2E",
          card: "#070A0F",
        },
        neon: {
          mint: "#00FF9D",
          cyan: "#00F0FF",
          emerald: "#10B981",
        },
        surface: {
          DEFAULT: "var(--surface-elevated)",
          overlay: "var(--surface-overlay)",
          interactive: "var(--surface-interactive)",
          low: "var(--surface-low)",
          card: "var(--surface-card)",
          secondary: "var(--surface-secondary)",
          dark: "var(--surface-dark)",
        },
        hairline: "var(--border-hairline)",
        border: "var(--border-color)",
        gold: {
          DEFAULT: "var(--gold-primary)",
          secondary: "var(--gold-secondary)",
          light: "var(--gold-light)",
          soft: "var(--gold-soft)",
          dark: "var(--gold-dark)",
          muted: "var(--gold-muted)",
          glow: "var(--gold-glow)",
        },
        "brand-gold": "var(--gold-primary)",
        glass: {
          subtle: "var(--glass-subtle)",
          medium: "var(--glass-medium)",
          strong: "var(--glass-strong)",
          border: "var(--glass-border)",
          "gold-border": "var(--glass-gold-border)",
        },
        content: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          dim: "var(--text-dim)",
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
        neon: "0 0 25px rgba(0, 255, 157, 0.25)",
        "neon-cyan": "0 0 25px rgba(0, 240, 255, 0.25)",
        workstation: "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 255, 157, 0.08)",
        gold: "0 0 0 1px rgba(0, 255, 157, 0.4), 0 12px 32px -8px rgba(0, 255, 157, 0.18)",
        "gold-ambient": "0 0 40px -4px rgba(0, 255, 157, 0.22)",
        "gold-glow": "0 0 24px 0 rgba(0, 255, 157, 0.28)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.45), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)",
        "glass-light": "0 8px 32px 0 rgba(15, 23, 42, 0.06), inset 0 1px 0 0 rgba(255, 255, 255, 0.8)",
        porcelain: "0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 1px 3px 0 rgba(15, 23, 42, 0.02)",
        "porcelain-lift": "0 20px 35px -8px rgba(15, 23, 42, 0.06), 0 1px 4px 0 rgba(0, 255, 157, 0.04)",
      },
      maxWidth: {
        arch: "1440px",
        editorial: "1280px",
        narrow: "960px",
      },
      backdropBlur: {
        xs: "2px",
        glass: "16px",
        "glass-lg": "24px",
      },
    },
  },
  plugins: [],
};

export default config;
