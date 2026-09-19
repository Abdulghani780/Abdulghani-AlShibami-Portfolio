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
          DEFAULT: "#050505",
          950: "#050505",
          900: "#0A0A0C",
          850: "#0E0E11",
          800: "#121216",
          700: "#18181F",
        },
        surface: {
          DEFAULT: "var(--surface-elevated)",
          overlay: "var(--surface-overlay)",
          interactive: "var(--surface-interactive)",
          low: "var(--surface-low)",
          card: "var(--surface-card)",
        },
        hairline: "var(--border-hairline)",
        gold: {
          DEFAULT: "var(--gold-primary)",
          secondary: "var(--gold-secondary)",
          light: "var(--gold-light)",
          soft: "var(--gold-soft)",
          dark: "var(--gold-dark)",
          muted: "var(--gold-muted)",
          glow: "var(--gold-glow)",
        },
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
        gold: "0 0 0 1px rgba(201, 162, 39, 0.4), 0 12px 32px -8px rgba(201, 162, 39, 0.18)",
        "gold-ambient": "0 0 40px -4px rgba(201, 162, 39, 0.22)",
        "gold-glow": "0 0 24px 0 rgba(201, 162, 39, 0.28)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.36), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)",
        "glass-light": "0 8px 32px 0 rgba(15, 23, 42, 0.06), inset 0 1px 0 0 rgba(255, 255, 255, 0.8)",
        porcelain: "0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 1px 3px 0 rgba(15, 23, 42, 0.02)",
        "porcelain-lift": "0 20px 35px -8px rgba(15, 23, 42, 0.06), 0 1px 4px 0 rgba(153, 122, 21, 0.04)",
      },
      maxWidth: {
        arch: "1400px",
        editorial: "1240px",
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
