/**
 * Abdulghani Al-Shibami Portfolio — Design System Utilities
 * Helper functions for working with tokens in components
 */

import type { Tokens, ColorTokens, SpacingTokens } from './tokens';
import { tokens } from './tokens';

// ============================================================================
// THEME HELPERS
// ============================================================================

/** Get color value for current theme */
export function getColor(
  colorKey: keyof ColorTokens['light'],
  theme: 'light' | 'dark' = 'dark'
): string {
  return tokens.colors[theme][colorKey as keyof ColorTokens['dark']] as string;
}

/** Get color with opacity */
export function getColorWithOpacity(
  colorKey: keyof ColorTokens['light'],
  opacity: number,
  theme: 'light' | 'dark' = 'dark'
): string {
  const hex = tokens.colors[theme][colorKey as keyof ColorTokens['dark']] as string;
  // Convert hex to rgba
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

/** Get gradient for theme */
export function getGradient(
  gradientKey: keyof typeof tokens.colors.gradients,
  theme: 'light' | 'dark' = 'dark'
): string {
  // Some gradients are theme-specific
  if (gradientKey === 'meshDark' && theme === 'light') return tokens.colors.gradients.meshLight;
  if (gradientKey === 'meshLight' && theme === 'dark') return tokens.colors.gradients.meshDark;
  return tokens.colors.gradients[gradientKey];
}

// ============================================================================
// SPACING HELPERS
// ============================================================================

/** Get spacing value */
export function getSpace<K extends keyof SpacingTokens>(key: K): SpacingTokens[K] {
  return tokens.spacing[key];
}

/** Get semantic spacing */
export function getSemanticSpace(key: keyof typeof tokens.space): string {
  return tokens.space[key];
}

/** Get section spacing */
export function getSectionSpace(key: keyof typeof tokens.sectionSpacing): string {
  return tokens.sectionSpacing[key];
}

// ============================================================================
// TYPOGRAPHY HELPERS
// ============================================================================

/** Get text preset as CSS-in-JS object */
export function getTextPreset<K extends keyof typeof tokens.textPresets>(
  preset: K
): typeof tokens.textPresets[K] {
  return tokens.textPresets[preset];
}

/** Generate fluid clamp CSS value */
export function clamp(min: string, preferred: string, max: string): string {
  return `clamp(${min}, ${preferred}, ${max})`;
}

/** Get font family for language */
export function getFontFamily(lang: 'en' | 'ar', type: 'display' | 'body' | 'mono' = 'body'): readonly string[] {
  if (lang === 'ar') {
    return type === 'display' ? tokens.fontFamily.arabicDisplay : tokens.fontFamily.arabic;
  }
  return type === 'display' ? tokens.fontFamily.display : type === 'mono' ? tokens.fontFamily.mono : tokens.fontFamily.body;
}

// ============================================================================
// SHADOW HELPERS
// ============================================================================

/** Get shadow for elevation */
export function getShadow(
  elevation: keyof typeof tokens.shadows
): string {
  return tokens.shadows[elevation];
}

/** Get gold glow shadow */
export function getGoldGlow(
  intensity: 'sm' | 'md' | 'lg' = 'md'
): string {
  return tokens.shadows[`gold${intensity.charAt(0).toUpperCase() + intensity.slice(1)}` as keyof typeof tokens.shadows];
}

// ============================================================================
// COMPONENT VARIANT HELPERS
// ============================================================================

/** Get button variant classes for theme */
export function getButtonVariant(
  variant: keyof typeof tokens.componentVariants.button.variants,
  theme: 'light' | 'dark' = 'dark'
): string {
  return tokens.componentVariants.button.variants[variant][theme];
}

/** Get button size classes */
export function getButtonSize(size: keyof typeof tokens.componentVariants.button.sizes): string {
  return tokens.componentVariants.button.sizes[size];
}

/** Get card elevation classes */
export function getCardElevation(
  elevation: keyof typeof tokens.componentVariants.card.elevations,
  theme: 'light' | 'dark' = 'dark'
): string {
  return tokens.componentVariants.card.elevations[elevation][theme];
}

/** Get badge variant classes */
export function getBadgeVariant(
  variant: keyof typeof tokens.componentVariants.badge.variants,
  theme: 'light' | 'dark' = 'dark'
): string {
  return tokens.componentVariants.badge.variants[variant][theme];
}

/** Get badge size classes */
export function getBadgeSize(size: keyof typeof tokens.componentVariants.badge.sizes): string {
  return tokens.componentVariants.badge.sizes[size];
}

// ============================================================================
// RTL HELPERS
// ============================================================================

/** Check if icon should flip in RTL */
export function shouldFlipIcon(iconName: string): boolean {
  return tokens.rtl.flipIcons.some(flip => iconName.includes(flip));
}

/** Get logical CSS property for RTL-aware styling */
export function getLogicalProperty(property: keyof typeof tokens.rtl.logical): string {
  return tokens.rtl.logical[property];
}

/** Determine numeral system for context */
export function getNumeralSystem(context: keyof typeof tokens.rtl.numerals.western | keyof typeof tokens.rtl.numerals.arabic): 'western' | 'arabic' {
  if (tokens.rtl.numerals.western.includes(context as any)) return 'western';
  if (tokens.rtl.numerals.arabic.includes(context as any)) return 'arabic';
  return 'western'; // Default
}

// ============================================================================
// TRANSITION HELPERS
// ============================================================================

/** Get transition for property */
export function getTransition(key: keyof typeof tokens.transitions): string {
  return tokens.transitions[key];
}

/** Build custom transition */
export function buildTransition(
  properties: string[],
  duration: keyof typeof tokens.duration = 'normal',
  easing: keyof typeof tokens.easing = 'easeOut'
): string {
  const dur = tokens.duration[duration];
  const ease = tokens.easing[easing];
  return properties.map(p => `${p} ${dur} ${ease}`).join(', ');
}

// ============================================================================
// FOCUS RING HELPERS
// ============================================================================

/** Get focus ring CSS for theme */
export function getFocusRing(theme: 'light' | 'dark' = 'dark'): string {
  const color = tokens.focusRing.color[theme];
  return `0 0 0 ${tokens.focusRing.width} ${color}`;
}

/** Get focus ring as object for CSS-in-JS */
export function getFocusRingObject(theme: 'light' | 'dark' = 'dark') {
  const color = tokens.focusRing.color[theme];
  return {
    outline: 'none',
    ring: '2px',
    ringColor: color,
    ringOffset: '2px',
    ringOffsetColor: tokens.colors[theme].surface,
  };
}

// ============================================================================
// RESPONSIVE HELPERS
// ============================================================================

/** Get breakpoint value */
export function getBreakpoint(key: keyof typeof tokens.breakpoints): string {
  return tokens.breakpoints[key];
}

/** Generate media query string */
export function mediaQuery(breakpoint: keyof typeof tokens.breakpoints, type: 'min' | 'max' = 'min'): string {
  const value = tokens.breakpoints[breakpoint];
  return `@media (${type}-width: ${value})`;
}

/** Generate container query (for component-level responsive) */
export function containerQuery(name: string, type: 'min' | 'max' = 'min', value: string): string {
  return `@container ${name} (${type}-width: ${value})`;
}

// ============================================================================
// ACCESSIBILITY HELPERS
// ============================================================================

/** Check if color contrast meets WCAG level */
export function meetsContrast(
  foreground: string,
  background: string,
  level: 'AA' | 'AAA' = 'AA',
  largeText: boolean = false
): boolean {
  // Simplified - in production use a proper contrast library
  const ratios = tokens.a11y.contrast;
  const required = largeText
    ? (level === 'AAA' ? ratios.aaaLarge : ratios.aaLarge)
    : (level === 'AAA' ? ratios.aaa : ratios.aa);
  // This would need actual contrast calculation
  return true; // Placeholder
}

/** Get reduced motion media query */
export function prefersReducedMotion(): string {
  return '@media (prefers-reduced-motion: reduce)';
}

/** Get high contrast media query */
export function prefersHighContrast(): string {
  return '@media (prefers-contrast: more)';
}

// ============================================================================
// CLASSNAME BUILDERS (for Tailwind-like usage)
// ============================================================================

/** Build responsive class string */
export function responsive(
  base: string,
  overrides: Partial<Record<keyof typeof tokens.breakpoints, string>>
): string {
  let result = base;
  for (const [bp, value] of Object.entries(overrides)) {
    if (value) {
      result += ` ${bp}:${value}`;
    }
  }
  return result;
}

/** Build state variants */
export function states(base: string, variants: {
  hover?: string;
  focus?: string;
  active?: string;
  disabled?: string;
}): string {
  let result = base;
  if (variants.hover) result += ` hover:${variants.hover}`;
  if (variants.focus) result += ` focus:${variants.focus}`;
  if (variants.active) result += ` active:${variants.active}`;
  if (variants.disabled) result += ` disabled:${variants.disabled}`;
  return result;
}

/** Build RTL-aware classes */
export function rtlAware(classes: string, rtlClasses?: string): string {
  if (!rtlClasses) return classes;
  return `${classes} rtl:${rtlClasses}`;
}

// ============================================================================
// CSS VARIABLE GENERATOR (for :root / [data-theme])
// ============================================================================

/** Generate CSS custom properties from tokens */
export function generateCSSVariables(theme: 'light' | 'dark' = 'dark'): Record<string, string> {
  const t = tokens.colors[theme];
  const vars: Record<string, string> = {};

  // Colors
  Object.entries(t).forEach(([key, value]) => {
    if (typeof value === 'string' && value.startsWith('#')) {
      vars[`--color-${key}`] = value;
    }
  });

  // Gradients
  Object.entries(tokens.colors.gradients).forEach(([key, value]) => {
    vars[`--gradient-${key}`] = value;
  });

  // Spacing
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    vars[`--space-${key}`] = value;
  });

  // Radius
  Object.entries(tokens.radius).forEach(([key, value]) => {
    vars[`--radius-${key}`] = value;
  });

  // Shadows
  Object.entries(tokens.shadows).forEach(([key, value]) => {
    vars[`--shadow-${key}`] = value;
  });

  // Durations
  Object.entries(tokens.duration).forEach(([key, value]) => {
    vars[`--duration-${key}`] = value;
  });

  // Z-index
  Object.entries(tokens.zIndex).forEach(([key, value]) => {
    vars[`--z-${key}`] = String(value);
  });

  return vars;
}

/** Inject CSS variables into document */
export function injectCSSVariables(theme: 'light' | 'dark' = 'dark', selector: string = ':root'): void {
  if (typeof document === 'undefined') return;
  const vars = generateCSSVariables(theme);
  const style = document.createElement('style');
  style.textContent = `
    ${selector} {
      ${Object.entries(vars).map(([k, v]) => `${k}: ${v};`).join('\n      ')}
    }
  `;
  document.head.appendChild(style);
}

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type Theme = 'light' | 'dark';
export type Breakpoint = keyof typeof tokens.breakpoints;
export type SpacingKey = keyof typeof tokens.spacing;
export type ColorKey = keyof typeof tokens.colors.light;
export type TextPreset = keyof typeof tokens.textPresets;
export type ShadowElevation = keyof typeof tokens.shadows;
export type ButtonVariant = keyof typeof tokens.componentVariants.button.variants;
export type ButtonSize = keyof typeof tokens.componentVariants.button.sizes;
export type CardElevation = keyof typeof tokens.componentVariants.card.elevations;
export type BadgeVariant = keyof typeof tokens.componentVariants.badge.variants;
export type BadgeSize = keyof typeof tokens.componentVariants.badge.sizes;