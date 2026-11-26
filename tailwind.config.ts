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
      // ========================================================================
      // COLORS — Canonical Design System Tokens
      // ========================================================================
      colors: {
        // ── Base Surfaces ──
        canvas: "var(--canvas-bg)",
        surface: {
          DEFAULT: "var(--surface-elevated)",
          elevated: "var(--surface-elevated)",
          overlay: "var(--surface-overlay)",
          interactive: "var(--surface-interactive)",
          low: "var(--surface-low)",
          card: "var(--surface-card)",
          secondary: "var(--surface-secondary)",
          dark: "var(--surface-dark)",
        },

        // ── Borders ──
        border: {
          DEFAULT: "var(--border-color)",
          hairline: "var(--border-hairline)",
          strong: "var(--border-strong)",
          gold: "var(--border-gold)",
          focus: "var(--border-focus)",
        },

        // ── Brand Gold ──
        gold: {
          DEFAULT: "var(--gold-primary)",
          primary: "var(--gold-primary)",
          secondary: "var(--gold-secondary)",
          hover: "var(--gold-hover)",
          light: "var(--gold-light)",
          soft: "var(--gold-soft)",
          dark: "var(--gold-dark)",
          muted: "var(--gold-muted)",
          glow: "var(--gold-glow)",
          subtle: "var(--gold-subtle)",
        },

        // ── Text ──
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          dim: "var(--text-dim)",
          inverse: "var(--text-inverse)",
        },

        // ── Semantic ──
        status: {
          success: "var(--status-success)",
          successBg: "var(--status-success-bg)",
          warning: "var(--status-warning)",
          warningBg: "var(--status-warning-bg)",
          error: "var(--status-error)",
          errorBg: "var(--status-error-bg)",
          info: "var(--status-info)",
          infoBg: "var(--status-info-bg)",
        },

        // ── Glass ──
        glass: {
          subtle: "var(--glass-subtle)",
          medium: "var(--glass-medium)",
          strong: "var(--glass-strong)",
          border: "var(--glass-border)",
          "gold-border": "var(--glass-gold-border)",
        },

        // ── Overlays ──
        overlay: {
          DEFAULT: "var(--overlay)",
          scrim: "var(--scrim)",
        },

        // ── Legacy aliases (for gradual migration) ──
        obsidian: {
          DEFAULT: "#0B0B0C",
          950: "#060608",
          900: "#0B0B0C",
          850: "#121214",
          800: "#18181C",
          750: "#1E293B",
          700: "#334155",
          card: "#121214",
        },
        porcelain: {
          DEFAULT: "#FAF9F6",
          pure: "#FFFFFF",
          muted: "#F8FAFC",
          slate: "#F1F5F9",
          border: "#E2E8F0",
        },
        titanium: {
          DEFAULT: "#0B1120",
          950: "#060A12",
          900: "#0B1120",
          850: "#0F172A",
          800: "#1E293B",
          750: "#24324D",
          700: "#334155",
          card: "#0F172A",
        },
        electric: {
          indigo: "#6366F1",
          cyan: "#06B6D4",
          emerald: "#10B981",
          amber: "#F59E0B",
          violet: "#8B5CF6",
        },
        neon: {
          mint: "#10B981",
          cyan: "#06B6D4",
          emerald: "#10B981",
        },
        "brand-gold": "var(--gold-primary)",
        content: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
      },

      // ========================================================================
      // FONT FAMILY
      // ========================================================================
      fontFamily: {
        display: ["var(--font-display)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Geist", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Fira Code", "monospace"],
        arabic: ["var(--font-arabic)", "Noto Kufi Arabic", "Noto Sans Arabic", "system-ui", "sans-serif"],
        "arabic-display": ["var(--font-arabic-display)", "Noto Kufi Arabic", "system-ui", "sans-serif"],
      },

      // ========================================================================
      // FONT SIZE — Fluid clamp() values
      // ========================================================================
      fontSize: {
        // Display / Hero
        "display-hero": ["clamp(44px, 6vw, 72px)", { lineHeight: "0.95", letterSpacing: "-0.02em", fontWeight: "900" }],
        "display-section": ["clamp(32px, 4vw, 44px)", { lineHeight: "1.05", letterSpacing: "-0.01em", fontWeight: "700" }],
        "display-card": ["clamp(28px, 3.5vw, 36px)", { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "700" }],

        // Headlines
        h1: ["clamp(36px, 4.5vw, 48px)", { lineHeight: "1.2", letterSpacing: "0", fontWeight: "700" }],
        h2: ["clamp(28px, 3.5vw, 36px)", { lineHeight: "1.2", letterSpacing: "0", fontWeight: "700" }],
        h3: ["clamp(24px, 3vw, 32px)", { lineHeight: "1.2", letterSpacing: "0", fontWeight: "700" }],
        h4: ["clamp(20px, 2.5vw, 24px)", { lineHeight: "1.3", letterSpacing: "0", fontWeight: "600" }],
        h5: ["clamp(18px, 2vw, 20px)", { lineHeight: "1.3", letterSpacing: "0", fontWeight: "600" }],
        h6: ["clamp(16px, 1.5vw, 18px)", { lineHeight: "1.3", letterSpacing: "0", fontWeight: "600" }],

        // Body
        "body-lg": ["clamp(18px, 2vw, 20px)", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
        body: ["clamp(16px, 1.5vw, 18px)", { lineHeight: "1.65", letterSpacing: "0", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],
        "body-xs": ["13px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],

        // Arabic
        "arabic-hero": ["clamp(36px, 5vw, 48px)", { lineHeight: "1.75", letterSpacing: "0", fontWeight: "700" }],
        "arabic-section": ["clamp(28px, 4vw, 40px)", { lineHeight: "1.3", letterSpacing: "0", fontWeight: "700" }],
        "arabic-body": ["clamp(16px, 2vw, 18px)", { lineHeight: "1.75", letterSpacing: "0", fontWeight: "500" }],

        // UI
        caption: ["12px", { lineHeight: "1.4", letterSpacing: "0.08em", fontWeight: "500" }],
        "caption-sm": ["11px", { lineHeight: "1.4", letterSpacing: "0.08em", fontWeight: "500" }],
        button: ["14px", { lineHeight: "1", letterSpacing: "0.02em", fontWeight: "600" }],
        "button-lg": ["16px", { lineHeight: "1", letterSpacing: "0.02em", fontWeight: "600" }],

        // Mono / Technical
        "mono-ui": ["12px", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "500" }],
        "mono-code": ["13px", { lineHeight: "1.55", letterSpacing: "0", fontWeight: "400" }],
        "mono-data": ["clamp(14px, 1.5vw, 16px)", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "500" }],
      },

      // ========================================================================
      // FONT WEIGHT
      // ========================================================================
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },

      // ========================================================================
      // LINE HEIGHT
      // ========================================================================
      lineHeight: {
        tight: "0.95",
        snug: "1.05",
        normal: "1.2",
        relaxed: "1.3",
        "body-relaxed": "1.6",
        "body-loose": "1.65",
        arabic: "1.75",
        code: "1.55",
      },

      // ========================================================================
      // LETTER SPACING
      // ========================================================================
      letterSpacing: {
        tightest: "-0.02em",
        tighter: "-0.01em",
        tight: "-0.005em",
        normal: "0",
        wide: "0.02em",
        wider: "0.04em",
        widest: "0.08em",
        mono: "0",
      },

      // ========================================================================
      // SPACING — 4px base scale
      // ========================================================================
      spacing: {
        0: "0",
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        11: "44px",
        12: "48px",
        14: "56px",
        16: "64px",
        20: "80px",
        24: "96px",
        28: "112px",
        32: "128px",
        // Semantic aliases
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "80px",
        "5xl": "96px",
      },

      // ========================================================================
      // BORDER RADIUS
      // ========================================================================
      borderRadius: {
        none: "0",
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
        full: "9999px",
      },

      // ========================================================================
      // BOX SHADOW — Theme-aware elevations + gold glows
      // ========================================================================
      boxShadow: {
        // Light theme
        xs: "0 1px 2px rgba(15, 23, 42, 0.04)",
        sm: "0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)",
        md: "0 4px 6px rgba(15, 23, 42, 0.05), 0 2px 4px rgba(15, 23, 42, 0.03)",
        lg: "0 10px 15px rgba(15, 23, 42, 0.06), 0 4px 6px rgba(15, 23, 42, 0.03)",
        xl: "0 20px 25px rgba(15, 23, 42, 0.08), 0 10px 10px rgba(15, 23, 42, 0.03)",
        "2xl": "0 25px 50px rgba(15, 23, 42, 0.12)",
        inner: "inset 0 2px 4px rgba(15, 23, 42, 0.04)",

        // Gold glows (light)
        "gold-sm": "0 0 0 1px rgba(184, 142, 31, 0.3), 0 2px 8px rgba(184, 142, 31, 0.12)",
        "gold-md": "0 0 0 1px rgba(184, 142, 31, 0.4), 0 4px 16px rgba(184, 142, 31, 0.16)",
        "gold-lg": "0 0 0 1px rgba(184, 142, 31, 0.5), 0 8px 32px rgba(184, 142, 31, 0.2)",
        "gold-focus": "0 0 0 3px rgba(184, 142, 31, 0.25)",

        // Dark theme (via CSS variables in dark mode)
        // These will be overridden by dark mode CSS variables

        // Legacy aliases
        indigo: "0 0 25px rgba(99, 102, 241, 0.35)",
        cyan: "0 0 25px rgba(6, 182, 212, 0.35)",
        emerald: "0 0 25px rgba(16, 185, 129, 0.35)",
        neon: "0 0 25px rgba(99, 102, 241, 0.35)",
        "neon-cyan": "0 0 25px rgba(6, 182, 212, 0.35)",
        workstation: "0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(99, 102, 241, 0.12)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.45), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)",
        "glass-light": "0 8px 32px 0 rgba(15, 23, 42, 0.06), inset 0 1px 0 0 rgba(255, 255, 255, 0.8)",
        porcelain: "0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 1px 3px 0 rgba(15, 23, 42, 0.02)",
        "gold-luminous": "0 0 30px rgba(212, 175, 55, 0.35)",
        "gold-border-glow": "0 0 0 1px rgba(212, 175, 55, 0.5), 0 8px 24px -4px rgba(212, 175, 55, 0.25)",
      },

      // ========================================================================
      // TRANSITION TIMING FUNCTION (Easing)
      // ========================================================================
      transitionTimingFunction: {
        linear: "linear",
        "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
        "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
        "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "spring-gentle": "cubic-bezier(0.25, 1.2, 0.5, 1)",
        gold: "cubic-bezier(0.16, 1, 0.3, 1)",
        enter: "cubic-bezier(0, 0, 0.2, 1)",
        exit: "cubic-bezier(0.4, 0, 1, 1)",
      },

      // ========================================================================
      // TRANSITION DURATION
      // ========================================================================
      transitionDuration: {
        instant: "0ms",
        fastest: "50ms",
        fast: "100ms",
        normal: "200ms",
        slow: "300ms",
        slower: "400ms",
        slowest: "500ms",
        stagger: "60ms",
        "page-transition": "400ms",
        "modal-enter": "250ms",
        "toast-enter": "300ms",
      },

      // ========================================================================
      // MAX WIDTH
      // ========================================================================
      maxWidth: {
        arch: "1440px",
        editorial: "1280px",
        narrow: "960px",
        container: "1280px",
      },

      // ========================================================================
      // BACKDROP BLUR
      // ========================================================================
      backdropBlur: {
        xs: "2px",
        glass: "16px",
        "glass-lg": "24px",
      },

      // ========================================================================
      // Z-INDEX
      // ========================================================================
      zIndex: {
        base: "0",
        dropdown: "100",
        sticky: "200",
        fixed: "300",
        "modal-backdrop": "400",
        modal: "500",
        popover: "600",
        tooltip: "700",
        toast: "800",
        max: "9999",
      },

      // ========================================================================
      // BACKGROUND IMAGE — Gradients
      // ========================================================================
      backgroundImage: {
        "gold-primary": "var(--gradient-gold-primary)",
        "gold-subtle": "var(--gradient-gold-subtle)",
        "gold-edge": "var(--gradient-gold-edge)",
        "gold-radial": "var(--gradient-gold-radial)",
        "mesh-dark": "var(--gradient-mesh-dark)",
        "mesh-light": "var(--gradient-mesh-light)",
      },

      // ========================================================================
      // OPACITY
      // ========================================================================
      opacity: {
        0: "0",
        5: "0.05",
        10: "0.1",
        15: "0.15",
        20: "0.2",
        25: "0.25",
        30: "0.3",
        35: "0.35",
        40: "0.4",
        45: "0.45",
        50: "0.5",
        55: "0.55",
        60: "0.6",
        65: "0.65",
        70: "0.7",
        75: "0.75",
        80: "0.8",
        85: "0.85",
        90: "0.9",
        95: "0.95",
        100: "1",
      },

      // ========================================================================
      // SCALE
      // ========================================================================
      scale: {
        98: "0.98",
        99: "0.99",
        100: "1",
        101: "1.01",
        102: "1.02",
        103: "1.03",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
      },

      // ========================================================================
      // ROTATE
      // ========================================================================
      rotate: {
        "-180": "-180deg",
        "-90": "-90deg",
        "-45": "-45deg",
        "-12": "-12deg",
        "-6": "-6deg",
        "-3": "-3deg",
        "-2": "-2deg",
        "-1": "-1deg",
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        6: "6deg",
        12: "12deg",
        45: "45deg",
        90: "90deg",
        180: "180deg",
      },
    },
  },
  plugins: [],
};

export default config;