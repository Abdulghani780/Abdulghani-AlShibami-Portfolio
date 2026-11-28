/**
 * Numeral Localization Utility
 * Converts Western (0-9) digits to Arabic-Indic (٠-٩) for Arabic locale
 */

const ARABIC_INDIC_DIGITS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
const WESTERN_DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

/**
 * Convert Western digits to Arabic-Indic digits
 */
export function toArabicIndic(value: string | number): string {
  const str = String(value);
  return str.replace(/[0-9]/g, (digit) => ARABIC_INDIC_DIGITS[parseInt(digit, 10)]);
}

/**
 * Convert Arabic-Indic digits to Western digits
 */
export function toWestern(value: string): string {
  return value.replace(/[٠-٩]/g, (digit) => WESTERN_DIGITS[ARABIC_INDIC_DIGITS.indexOf(digit)]);
}

/**
 * Format number with locale-appropriate digits
 */
export function formatNumber(value: number, locale: "en" | "ar", options?: Intl.NumberFormatOptions): string {
  const formatter = new Intl.NumberFormat(locale === "ar" ? "ar-EG" : "en-US", options);
  return formatter.format(value);
}

/**
 * Localize all digits in a string based on locale
 */
export function localizeDigits(str: string, locale: "en" | "ar"): string {
  if (locale === "ar") {
    return toArabicIndic(str);
  }
  return str;
}

/**
 * React hook for localized numerals
 */
export function useLocalizedNumerals(locale: "en" | "ar") {
  return {
    formatNumber: (value: number, options?: Intl.NumberFormatOptions) => formatNumber(value, locale, options),
    localize: (str: string) => localizeDigits(str, locale),
    toArabicIndic,
    toWestern,
  };
}