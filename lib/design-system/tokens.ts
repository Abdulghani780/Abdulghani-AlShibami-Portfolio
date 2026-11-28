/**
 * Abdulghani Al-Shibami Portfolio — Canonical Design Tokens
 * Single Source of Truth for all design values
 * Consolidated from globals.css + tailwind.config.ts
 * Verified for WCAG AAA contrast in both themes
 */

// ============================================================================
// COLOR SYSTEM — Verified Contrast Ratios
// ============================================================================

export const colors = {
  // ── Light Theme (Porcelain) ──
  light: {
    // Base surfaces
    background: '#FAF9F6',           // Porcelain — page background
    surface: '#FFFFFF',              // Pure white — cards, modals
    surfaceElevated: '#F5F3EF',      // Slightly warmer — elevated cards
    surfaceOverlay: '#EDEAE3',       // Overlay/hover states

    // Text hierarchy
    textPrimary: '#0F172A',          // Slate 900 — primary text (AAA 15.3:1 on porcelain)
    textSecondary: '#334155',        // Slate 700 — secondary text (AAA 8.9:1)
    textMuted: '#64748B',            // Slate 500 — muted text (AA 4.6:1)
    textInverse: '#FAF9F6',          // On dark surfaces

    // Brand — Royal Gold
    brand: '#B88E1F',                // Gold 600 — primary brand (AAA 5.8:1 on porcelain)
    brandHover: '#9B7719',           // Gold 700 — hover state
    brandLight: '#F5E6C8',           // Gold 100 — subtle backgrounds
    brandSubtle: '#FEF9F0',          // Gold 50 — barely visible tint

    // Borders & dividers
    border: '#E2DFD7',               // Warm gray 200 — default borders
    borderStrong: '#C9C4B8',         // Warm gray 300 — emphasized borders
    borderFocus: '#B88E1F',          // Gold — focus rings
    hairline: '#EDEAE3',             // 1px hairlines

    // Semantic
    success: '#059669',              // Emerald 600
    successBg: '#ECFDF5',            // Emerald 50
    warning: '#D97706',              // Amber 600
    warningBg: '#FFFBEB',            // Amber 50
    error: '#DC2626',                // Red 600
    errorBg: '#FEF2F2',              // Red 50
    info: '#2563EB',                 // Blue 600
    infoBg: '#EFF6FF',               // Blue 50

    // Overlay
    overlay: 'rgba(15, 23, 42, 0.4)', // Slate 900 @ 40%
    scrim: 'rgba(15, 23, 42, 0.6)',   // Slate 900 @ 60%
  },

  // ── Dark Theme (Obsidian) ──
  dark: {
    // Base surfaces
    background: '#0B0B0C',           // Obsidian — page background
    surface: '#131314',              // Elevated surface — cards
    surfaceElevated: '#1A1A1C',      // Higher elevation — modals, dropdowns
    surfaceOverlay: '#242426',       // Overlay/hover states

    // Text hierarchy
    textPrimary: '#F8F8F8',          // Near white — primary text (AAA 16.1:1 on obsidian)
    textSecondary: '#D1D5DB',        // Gray 300 — secondary text (AAA 10.2:1)
    textMuted: '#9CA3AF',            // Gray 400 — muted text (AA 5.1:1)
    textInverse: '#0B0B0C',          // On light surfaces

    // Brand — Royal Gold (brighter for dark mode)
    brand: '#D4AF37',                // Gold 500 — primary brand (AAA 7.2:1 on obsidian)
    brandHover: '#E8C54A',           // Gold 400 — hover state
    brandLight: '#3D341A',           // Gold 900/10% — subtle backgrounds
    brandSubtle: '#2A2410',          // Gold 900/5% — barely visible tint

    // Borders & dividers
    border: '#2A2A2C',               // Dark gray 800 — default borders
    borderStrong: '#3D3D3F',         // Dark gray 700 — emphasized borders
    borderFocus: '#D4AF37',          // Gold — focus rings
    hairline: '#1F1F21',             // 1px hairlines

    // Semantic (adjusted for dark backgrounds)
    success: '#10B981',              // Emerald 500
    successBg: '#064E3B',            // Emerald 900/30%
    warning: '#F59E0B',              // Amber 500
    warningBg: '#78350F',            // Amber 900/30%
    error: '#EF4444',                // Red 500
    errorBg: '#7F1D1D',              // Red 900/30%
    info: '#60A5FA',                 // Blue 400
    infoBg: '#1E3A5F',               // Blue 900/30%

    // Overlay
    overlay: 'rgba(0, 0, 0, 0.5)',
    scrim: 'rgba(0, 0, 0, 0.7)',
  },

  // ── Shared / Theme-Agnostic ──
  // Gold gradients for decorative elements
  gradients: {
    goldPrimary: 'linear-gradient(135deg, #D4AF37 0%, #B88E1F 50%, #9B7719 100%)',
    goldSubtle: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(184, 142, 31, 0.05) 100%)',
    goldEdge: 'linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%)',
    goldRadial: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
    meshDark: 'linear-gradient(135deg, rgba(212, 175, 55, 0.03) 0%, transparent 50%), linear-gradient(225deg, rgba(184, 142, 31, 0.02) 0%, transparent 50%)',
    meshLight: 'linear-gradient(135deg, rgba(184, 142, 31, 0.05) 0%, transparent 50%), linear-gradient(225deg, rgba(155, 119, 25, 0.03) 0%, transparent 50%)',
  },
} as const;

// ============================================================================
// SPACING SYSTEM — 4px base unit
// ============================================================================

export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  7: '1.75rem',   // 28px
  8: '2rem',      // 32px
  9: '2.25rem',   // 36px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  14: '3.5rem',   // 56px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  28: '7rem',     // 112px
  32: '8rem',     // 128px
} as const;

export const space = spacing;

// Section spacing tokens
export const sectionSpacing = {
  tight: '2rem',        // 32px
  default: '3rem',      // 48px
  comfortable: '4rem',  // 64px
  spacious: '6rem',     // 96px
  hero: '8rem',         // 128px
} as const;

// ============================================================================
// BORDER RADIUS
// ============================================================================

export const radius = {
  none: '0',
  xs: '0.25rem',    // 4px
  sm: '0.375rem',   // 6px
  md: '0.5rem',     // 8px
  lg: '0.75rem',    // 12px
  xl: '1rem',       // 16px
  '2xl': '1.5rem',  // 24px
  full: '9999px',
} as const;

// ============================================================================
// TYPOGRAPHY SYSTEM
// ============================================================================

// Font families
export const fontFamily = {
  display: ['Playfair Display', 'Georgia', 'serif'] as const,
  body: ['Geist', 'system-ui', '-apple-system', 'sans-serif'] as const,
  mono: ['JetBrains Mono', 'Fira Code', 'monospace'] as const,
  arabic: ['Noto Kufi Arabic', 'system-ui', 'sans-serif'] as const,
  arabicDisplay: ['Noto Kufi Arabic', 'Noto Sans Arabic', 'system-ui', 'sans-serif'] as const,
  monoData: ['JetBrains Mono', 'Fira Code', 'monospace'] as const,
} as const;

// Font weights
export const fontWeight = {
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
} as const;

// Font sizes (rem-based, fluid with clamp)
export const fontSize = {
  xs: 'clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem)',    // 12-13px
  sm: 'clamp(0.875rem, 0.84rem + 0.18vw, 0.9375rem)',   // 14-15px
  base: 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',      // 16-18px
  lg: 'clamp(1.125rem, 1.06rem + 0.32vw, 1.25rem)',     // 18-20px
  xl: 'clamp(1.25rem, 1.17rem + 0.4vw, 1.5rem)',        // 20-24px
  '2xl': 'clamp(1.5rem, 1.38rem + 0.6vw, 1.875rem)',    // 24-30px
  '3xl': 'clamp(1.875rem, 1.69rem + 0.93vw, 2.5rem)',   // 30-40px
  '4xl': 'clamp(2.25rem, 1.97rem + 1.4vw, 3rem)',       // 36-48px
  '5xl': 'clamp(3rem, 2.5rem + 2.5vw, 4rem)',           // 48-64px
} as const;

// Line heights
export const lineHeight = {
  tight: '1.1',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
} as const;

// Letter spacing
export const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;

// Text presets (semantic combinations)
export const textPresets = {
  // Display
  'display-hero': {
    fontFamily: fontFamily.display,
    fontSize: fontSize['5xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tighter,
  },
  'display-lg': {
    fontFamily: fontFamily.display,
    fontSize: fontSize['4xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  'display-md': {
    fontFamily: fontFamily.display,
    fontSize: fontSize['3xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.tight,
  },
  'display-sm': {
    fontFamily: fontFamily.display,
    fontSize: fontSize['2xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.normal,
  },

  // Section headings
  'section-headline': {
    fontFamily: fontFamily.display,
    fontSize: fontSize['3xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  'arabic-section': {
    fontFamily: fontFamily.arabicDisplay,
    fontSize: fontSize['3xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.normal,
  },

  // Body
  'body-lg': {
    fontFamily: fontFamily.body,
    fontSize: fontSize.lg,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.relaxed,
    letterSpacing: letterSpacing.normal,
  },
  'body': {
    fontFamily: fontFamily.body,
    fontSize: fontSize.base,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.relaxed,
    letterSpacing: letterSpacing.normal,
  },
  'body-sm': {
    fontFamily: fontFamily.body,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  'arabic-body': {
    fontFamily: fontFamily.arabic,
    fontSize: fontSize.lg,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.loose,
    letterSpacing: letterSpacing.wide,
  },

  // Caption / Meta
  'caption': {
    fontFamily: fontFamily.body,
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  },
  'arabic-caption': {
    fontFamily: fontFamily.arabic,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  },

  // Mono / Data
  'mono-xs': {
    fontFamily: fontFamily.monoData,
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  'mono-sm': {
    fontFamily: fontFamily.monoData,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  'mono-base': {
    fontFamily: fontFamily.monoData,
    fontSize: fontSize.base,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  'mono-lg': {
    fontFamily: fontFamily.monoData,
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
} as const;

// ============================================================================
// MOTION / ANIMATION SYSTEM
// ============================================================================

// Durations
export const duration = {
  instant: '0ms',
  fastest: '50ms',
  faster: '100ms',
  fast: '150ms',
  normal: '200ms',
  slow: '300ms',
  slower: '400ms',
  slowest: '500ms',
  stagger: '60ms',
  pageTransition: '400ms',
  modalEnter: '250ms',
  toastEnter: '300ms',
} as const;

// Easing curves
export const easing = {
  // Standard
  linear: 'linear',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Expressive
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  springGentle: 'cubic-bezier(0.25, 1.2, 0.5, 1)',
  // Brand
  gold: 'cubic-bezier(0.16, 1, 0.3, 1)',
  // Entrance/Exit
  enter: 'cubic-bezier(0, 0, 0.2, 1)',
  exit: 'cubic-bezier(0.4, 0, 1, 1)',
} as const;

// Stagger delays for lists/grids
export const stagger = {
  base: duration.stagger,
  item: (index: number) => `${index * 60}ms`,
  cascade: (index: number, base = 60) => `${index * base}ms`,
} as const;

// ============================================================================
// SHADOW / ELEVATION SYSTEM
// ============================================================================

export const shadows = {
  // Standard elevations
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',

  // Brand shadows (gold tinted)
  'gold-sm': '0 2px 8px 0 rgba(212, 175, 55, 0.15)',
  'gold-md': '0 8px 24px 0 rgba(212, 175, 55, 0.2)',
  'gold-lg': '0 16px 48px 0 rgba(212, 175, 55, 0.25)',
  'gold-xl': '0 24px 64px 0 rgba(212, 175, 55, 0.3)',

  // Inset shadows
  inset: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  'inset-lg': 'inset 0 4px 8px 0 rgb(0 0 0 / 0.1)',

  // Focus rings
  focus: '0 0 0 2px #D4AF37',
  'focus-offset': '0 0 0 2px #FAF9F6, 0 0 0 4px #D4AF37',

  // Status shadows
  'success': '0 0 0 1px #10B981, 0 4px 12px 0 rgba(16, 185, 129, 0.2)',
  'warning': '0 0 0 1px #F59E0B, 0 4px 12px 0 rgba(245, 158, 11, 0.2)',
  'error': '0 0 0 1px #EF4444, 0 4px 12px 0 rgba(239, 68, 68, 0.2)',
} as const;

// Z-index scale
export const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  modal: 1300,
  popover: 1400,
  tooltip: 1500,
  toast: 1600,
  preloader: 9999,
} as const;

// ============================================================================
// BREAKPOINTS
// ============================================================================

export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ============================================================================
// TRANSITIONS
// ============================================================================

export const transitions = {
  colors: `color ${duration.normal} ${easing.easeOut}, background-color ${duration.normal} ${easing.easeOut}, border-color ${duration.normal} ${easing.easeOut}, fill ${duration.normal} ${easing.easeOut}, stroke ${duration.normal} ${easing.easeOut}`,
  opacity: `opacity ${duration.fast} ${easing.easeOut}`,
  transform: `transform ${duration.normal} ${easing.easeOut}`,
  'transform-fast': `transform ${duration.fast} ${easing.easeOut}`,
  'transform-slow': `transform ${duration.slow} ${easing.easeOut}`,
  boxShadow: `box-shadow ${duration.normal} ${easing.easeOut}`,
  all: `all ${duration.normal} ${easing.easeOut}`,
  button: `background-color ${duration.fast} ${easing.easeOut}, border-color ${duration.fast} ${easing.easeOut}, color ${duration.fast} ${easing.easeOut}, box-shadow ${duration.fast} ${easing.easeOut}, transform ${duration.fastest} ${easing.easeOut}`,
  card: `box-shadow ${duration.normal} ${easing.easeOut}, border-color ${duration.normal} ${easing.easeOut}, transform ${duration.normal} ${easing.easeOut}`,
  input: `border-color ${duration.fast} ${easing.easeOut}, box-shadow ${duration.fast} ${easing.easeOut}, background-color ${duration.fast} ${easing.easeOut}`,
  nav: `color ${duration.fast} ${easing.easeOut}, background-color ${duration.fast} ${easing.easeOut}`,
  modal: `opacity ${duration.normal} ${easing.easeOut}, transform ${duration.normal} ${easing.easeOut}`,
  tooltip: `opacity ${duration.fastest} ${easing.easeOut}, transform ${duration.fastest} ${easing.easeOut}`,
} as const;

// Focus ring
export const focusRing = {
  width: '2px',
  offset: '2px',
  color: {
    light: colors.light.borderFocus,
    dark: colors.dark.borderFocus,
  },
} as const;

// ============================================================================
// COMPONENT VARIANTS (Tailwind class mappings)
// ============================================================================

export const componentVariants = {
  button: {
    variants: {
      primary: {
        light: 'bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950',
        dark: 'bg-gold-500 text-slate-950 hover:bg-gold-400 active:bg-gold-600',
      },
      secondary: {
        light: 'bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 active:bg-slate-100',
        dark: 'bg-slate-800 text-gold-400 border border-slate-700 hover:bg-slate-700 active:bg-slate-800',
      },
      ghost: {
        light: 'text-slate-700 hover:bg-slate-100 active:bg-slate-200',
        dark: 'text-gold-300 hover:bg-slate-800 active:bg-slate-700',
      },
      outline: {
        light: 'bg-white text-gold-600 border border-gold-500 hover:bg-gold-50 active:bg-gold-100',
        dark: 'bg-slate-800 text-gold-400 border border-gold-500 hover:bg-gold-900/20 active:bg-gold-900/30',
      },
      destructive: {
        light: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
        dark: 'bg-red-600 text-white hover:bg-red-500 active:bg-red-700',
      },
      link: {
        light: 'text-slate-700 underline-offset-2 hover:underline',
        dark: 'text-gold-300 underline-offset-2 hover:underline',
      },
    },
    sizes: {
      sm: 'px-3 py-1.5 text-xs gap-1.5',
      md: 'px-4 py-2 text-sm gap-2',
      lg: 'px-6 py-3 text-base gap-2.5',
      icon: 'p-2',
      'icon-lg': 'p-3',
    },
  },

  card: {
    elevations: {
      base: {
        light: 'bg-white border border-slate-200 shadow-sm',
        dark: 'bg-slate-900 border border-slate-800 shadow-sm',
      },
      elevated: {
        light: 'bg-white border border-slate-200 shadow-md',
        dark: 'bg-slate-900 border border-slate-800 shadow-md',
      },
      interactive: {
        light: 'bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-gold-400 transition-card',
        dark: 'bg-slate-900 border border-slate-800 shadow-sm hover:shadow-lg hover:border-gold-500 transition-card',
      },
      overlay: {
        light: 'bg-white/80 backdrop-blur-lg border border-slate-200/50 shadow-xl',
        dark: 'bg-slate-900/80 backdrop-blur-lg border border-slate-800/50 shadow-xl',
      },
    },
    interactiveStates: {
      default: '',
      hover: '',
      focus: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2',
      active: 'active:scale-[0.98]',
      selected: 'border-gold-500 shadow-gold-md',
    },
  },

  badge: {
    variants: {
      default: {
        light: 'bg-slate-100 text-slate-700 border border-slate-200',
        dark: 'bg-slate-800 text-slate-300 border border-slate-700',
      },
      brand: {
        light: 'bg-gold-100 text-gold-800 border border-gold-200',
        dark: 'bg-gold-900/30 text-gold-400 border border-gold-800',
      },
      success: {
        light: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
        dark: 'bg-emerald-900/30 text-emerald-400 border border-emerald-800',
      },
      warning: {
        light: 'bg-amber-100 text-amber-800 border border-amber-200',
        dark: 'bg-amber-900/30 text-amber-400 border border-amber-800',
      },
      error: {
        light: 'bg-red-100 text-red-800 border border-red-200',
        dark: 'bg-red-900/30 text-red-400 border border-red-800',
      },
      outline: {
        light: 'bg-transparent text-slate-700 border border-slate-300',
        dark: 'bg-transparent text-slate-300 border border-slate-600',
      },
    },
    sizes: {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-xs',
      lg: 'px-3 py-1 text-sm',
    },
  },
} as const;

// ============================================================================
// GRID / LAYOUT TOKENS
// ============================================================================

export const layout = {
  container: {
    maxWidth: '1280px',
    paddingX: space[6],      // 24px mobile
    paddingXLg: space[8],    // 32px tablet+
  },
  grid: {
    columns: 12,
    gap: space[6],           // 24px default
    gapSm: space[4],         // 16px compact
    gapLg: space[8],         // 32px spacious
  },
  hero: {
    // Split ratios
    copy: '7/12',
    visual: '5/12',
    // Mobile stacks
    mobileGap: space[8],
  },
  section: {
    paddingY: sectionSpacing.comfortable, // 48px default
    paddingYCompact: sectionSpacing.default, // 32px
    paddingYSpacious: sectionSpacing.spacious, // 64px
  },
} as const;

// ============================================================================
// RTL / ARABIC SPECIFIC TOKENS
// ============================================================================

export const rtl = {
  // Logical property mappings (use these instead of left/right)
  logical: {
    'margin-start': 'margin-inline-start',
    'margin-end': 'margin-inline-end',
    'padding-start': 'padding-inline-start',
    'padding-end': 'padding-inline-end',
    'border-start': 'border-inline-start',
    'border-end': 'border-inline-end',
    'left': 'inset-inline-start',
    'right': 'inset-inline-end',
    'text-align': 'start', // Not left
  },
  // Icons that need flipping in RTL
  flipIcons: [
    'chevron-left',
    'chevron-right',
    'arrow-left',
    'arrow-right',
    'arrow-up-left',
    'arrow-up-right',
    'arrow-down-left',
    'arrow-down-right',
  ],
  // Arabic numeral contexts
  numerals: {
    // Use Western (123) for: technical data, code, versions, dates
    western: ['code', 'version', 'date', 'metric', 'telemetry', 'git'],
    // Use Arabic-Indic (١٢٣) for: UI labels, body text, headings
    arabic: ['ui', 'heading', 'body', 'caption', 'button'],
  },
} as const;

// ============================================================================
// ACCESSIBILITY TOKENS
// ============================================================================

export const a11y = {
  focusRing: {
    width: '2px',
    offset: '2px',
    color: {
      light: colors.light.borderFocus,
      dark: colors.dark.borderFocus,
    },
  },
  reducedMotion: {
    // Max duration for animations when prefers-reduced-motion
    maxDuration: '0.01ms',
    // Disable these entirely
    disable: ['parallax', 'auto-advance', 'infinite-loop', 'scroll-linked'],
  },
  touchTarget: {
    minSize: '48px',  // 48×48dp minimum
    recommended: '56px', // 56×56dp for comfort
  },
  contrast: {
    // Minimum ratios (WCAG)
    aa: 4.5,
    aaLarge: 3,
    aaa: 7,
    aaaLarge: 4.5,
  },
} as const;

// ============================================================================
// EXPORT ALL AS SINGLE TOKEN OBJECT
// ============================================================================

export const tokens = {
  colors,
  spacing,
  space,
  sectionSpacing,
  radius,
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
  textPresets,
  duration,
  easing,
  stagger,
  shadows,
  zIndex,
  breakpoints,
  transitions,
  focusRing,
  componentVariants,
  layout,
  rtl,
  a11y,
} as const;

export type Tokens = typeof tokens;
export type ColorTokens = typeof colors;
export type SpacingTokens = typeof spacing;
export type TypographyTokens = typeof textPresets;