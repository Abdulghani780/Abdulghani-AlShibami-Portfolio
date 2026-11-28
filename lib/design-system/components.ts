/**
 * Abdulghani Al-Shibami Portfolio — Design System Component Types & Helpers
 * Standardized component APIs, variant types, and composition patterns
 */

import type { Tokens } from './tokens';
import { tokens } from './tokens';

// ============================================================================
// BASE COMPONENT PROP TYPES
// ============================================================================

/** Standard props every design system component should accept */
export interface BaseComponentProps {
  /** Additional CSS classes */
  className?: string;
  /** Test ID for testing */
  'data-testid'?: string;
  /** Unique ID */
  id?: string;
}

/** Polymorphic component props — render as different element */
export interface PolymorphicProps<C extends React.ElementType> {
  /** Element or component to render as */
  as?: C;
}

/** Props for polymorphic components with forwarded ref */
export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {}
> = Props & BaseComponentProps & PolymorphicProps<C> & {
  /** Ref forwarded to the underlying element */
  ref?: React.Ref<React.ComponentPropsWithoutRef<C> extends { ref?: infer R } ? R : never>;
};

/** Variant prop type */
export type VariantProps<T extends Record<string, any>> = {
  /** Visual variant */
  variant?: keyof T;
};

/** Size prop type */
export type SizeProps<T extends Record<string, any>> = {
  /** Size/density variant */
  size?: keyof T;
};

// ============================================================================
// BUTTON SYSTEM TYPES
// ============================================================================

export type ButtonVariant = keyof typeof tokens.componentVariants.button.variants;
export type ButtonSize = keyof typeof tokens.componentVariants.button.sizes;

export interface ButtonProps extends BaseComponentProps, PolymorphicProps<'button'> {
  /** Button variant */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Loading state */
  loading?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Full width */
  fullWidth?: boolean;
  /** Left icon */
  startIcon?: React.ReactNode;
  /** Right icon */
  endIcon?: React.ReactNode;
  /** Icon only (no text) */
  iconOnly?: boolean;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Native button type */
  type?: 'button' | 'submit' | 'reset';
  /** ARIA label for icon-only buttons */
  'aria-label'?: string;
}

export interface ButtonGroupProps extends BaseComponentProps {
  /** Child buttons */
  children: React.ReactNode;
  /** Orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Group variant (applies to all children) */
  variant?: ButtonVariant;
  /** Group size (applies to all children) */
  size?: ButtonSize;
  /** Space between buttons */
  gap?: keyof typeof tokens.space;
}

// ============================================================================
// CARD SYSTEM TYPES
// ============================================================================

export type CardElevation = keyof typeof tokens.componentVariants.card.elevations;

export interface CardProps extends BaseComponentProps {
  /** Card elevation */
  elevation?: CardElevation;
  /** Interactive (hover/focus states) */
  interactive?: boolean;
  /** Selected state */
  selected?: boolean;
  /** Padding */
  padding?: keyof typeof tokens.space | 'none';
  /** Click handler (makes card a link-like element) */
  onClick?: () => void;
  /** HREF (renders as <a>) */
  href?: string;
  /** Target for links */
  target?: '_blank' | '_self' | '_parent' | '_top';
  /** Corner brackets decoration */
  cornerBrackets?: boolean;
}

export interface CardHeaderProps extends BaseComponentProps {
  /** Header content */
  children: React.ReactNode;
  /** Action element (right side) */
  action?: React.ReactNode;
  /** Divider below header */
  divider?: boolean;
}

export interface CardContentProps extends BaseComponentProps {
  children: React.ReactNode;
}

export interface CardFooterProps extends BaseComponentProps {
  children: React.ReactNode;
  /** Divider above footer */
  divider?: boolean;
  /** Align actions to end */
  alignEnd?: boolean;
}

// ============================================================================
// BADGE / TAG / PILL TYPES
// ============================================================================

export type BadgeVariant = keyof typeof tokens.componentVariants.badge.variants;
export type BadgeSize = keyof typeof tokens.componentVariants.badge.sizes;

export interface BadgeProps extends BaseComponentProps {
  /** Badge variant */
  variant?: BadgeVariant;
  /** Badge size */
  size?: BadgeSize;
  /** Removable (shows close button) */
  removable?: boolean;
  /** Remove handler */
  onRemove?: () => void;
  /** Icon before text */
  startIcon?: React.ReactNode;
  /** Icon after text */
  endIcon?: React.ReactNode;
  /** Dot indicator (for status) */
  dot?: boolean;
  /** Dot color override */
  dotColor?: string;
}

export interface TagProps extends BaseComponentProps {
  /** Tag variant */
  variant?: BadgeVariant;
  /** Tag size */
  size?: BadgeSize;
  /** Rounded (pill) vs squared */
  rounded?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** HREF (renders as <a>) */
  href?: string;
}

export interface PillProps extends BaseComponentProps {
  /** Pill variant */
  variant?: BadgeVariant;
  /** Pill size */
  size?: BadgeSize;
  /** Selected state */
  selected?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Icon */
  icon?: React.ReactNode;
}

// ============================================================================
// FORM PRIMITIVE TYPES
// ============================================================================

export interface InputProps extends BaseComponentProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label text */
  label?: string;
  /** Helper text */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Left adornment */
  startAdornment?: React.ReactNode;
  /** Right adornment */
  endAdornment?: React.ReactNode;
  /** Full width */
  fullWidth?: boolean;
  /** Input size */
  inputSize?: 'sm' | 'md' | 'lg';
}

export interface TextareaProps extends BaseComponentProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  rows?: number;
  autoResize?: boolean;
}

export interface SelectProps extends BaseComponentProps, Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: string;
  options: Array<{ value: string; label: string; disabled?: boolean }>;
  placeholder?: string;
  fullWidth?: boolean;
  selectSize?: 'sm' | 'md' | 'lg';
}

export interface CheckboxProps extends BaseComponentProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  description?: string;
  indeterminate?: boolean;
  checkboxSize?: 'sm' | 'md' | 'lg';
}

export interface RadioProps extends BaseComponentProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  description?: string;
  radioSize?: 'sm' | 'md' | 'lg';
}

export interface RadioGroupProps extends BaseComponentProps {
  label?: string;
  helperText?: string;
  error?: string;
  options: Array<{ value: string; label: string; description?: string; disabled?: boolean }>;
  orientation?: 'horizontal' | 'vertical';
}

export interface SwitchProps extends BaseComponentProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  description?: string;
  switchSize?: 'sm' | 'md' | 'lg';
}

export interface FormFieldProps extends BaseComponentProps {
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

export interface FormProps extends BaseComponentProps {
  onSubmit: (data: Record<string, any>) => void | Promise<void>;
  children: React.ReactNode;
  initialValues?: Record<string, any>;
  validate?: (values: Record<string, any>) => Record<string, string>;
}

// ============================================================================
// NAVIGATION TYPES
// ============================================================================

export interface BreadcrumbProps extends BaseComponentProps {
  items: Array<{
    label: string;
    href?: string;
    current?: boolean;
  }>;
  separator?: React.ReactNode;
  maxItems?: number;
}

export interface PaginationProps extends BaseComponentProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisiblePages?: number;
  size?: 'sm' | 'md' | 'lg';
}

export interface TabItem extends BaseComponentProps {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  count?: number;
}

export interface TabsProps extends BaseComponentProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
  variant?: 'line' | 'enclosed' | 'soft';
  fullWidth?: boolean;
  orientation?: 'horizontal' | 'vertical';
}

export interface StepperProps extends BaseComponentProps {
  steps: Array<{
    id: string;
    label: string;
    description?: string;
    icon?: React.ReactNode;
    completed?: boolean;
    active?: boolean;
    error?: boolean;
  }>;
  currentStep: string;
  onStepClick?: (stepId: string) => void;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'minimal';
}

// ============================================================================
// DATA DISPLAY TYPES
// ============================================================================

export interface AvatarProps extends BaseComponentProps {
  src?: string;
  alt?: string;
  name?: string; // For initials fallback
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  shape?: 'circle' | 'square';
  status?: 'online' | 'offline' | 'busy' | 'away';
  statusPosition?: 'bottom-right' | 'top-right' | 'bottom-left' | 'top-left';
}

export interface TooltipProps extends BaseComponentProps {
  content: React.ReactNode;
  children: React.ReactElement;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  arrow?: boolean;
}

export interface TooltipProviderProps extends BaseComponentProps {
  children: React.ReactNode;
}

export interface ToastProps extends BaseComponentProps {
  title: string;
  description?: string;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  action?: { label: string; onClick: () => void };
  duration?: number; // 0 = persistent
  onClose?: () => void;
}

export interface StatCardProps extends BaseComponentProps {
  label: string;
  value: string | number;
  change?: {
    value: number;
    label: string;
    trend: 'up' | 'down' | 'neutral';
  };
  icon?: React.ReactNode;
  trendIcon?: React.ReactNode;
}

export interface MetricCardProps extends BaseComponentProps {
  title: string;
  value: string | number;
  unit?: string;
  subtitle?: string;
  sparkline?: number[];
  trend?: {
    value: number;
    label: string;
    positive: boolean;
  };
  status?: 'normal' | 'warning' | 'critical';
}

export interface ProgressRingProps extends BaseComponentProps {
  value: number; // 0-100
  max?: number;
  size?: number;
  strokeWidth?: number;
  showValue?: boolean;
  variant?: 'default' | 'success' | 'warning' | 'error';
  trackColor?: string;
}

// ============================================================================
// FEEDBACK & MOTION TYPES
// ============================================================================

export interface SkeletonProps extends BaseComponentProps {
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  width?: string | number;
  height?: string | number;
  lines?: number;
  animation?: 'pulse' | 'wave' | 'none';
}

export interface SpinnerProps extends BaseComponentProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'brand' | 'inverse';
  label?: string; // For screen readers
}

export interface ProgressProps extends BaseComponentProps {
  value: number; // 0-100
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'brand' | 'success' | 'warning' | 'error';
  showLabel?: boolean;
  label?: string;
  indeterminate?: boolean;
}

export interface ScrollRevealProps extends BaseComponentProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  once?: boolean;
  isRtl?: boolean;
}

export interface TiltCardProps extends BaseComponentProps {
  children: React.ReactNode;
  maxTilt?: number;
  glowColor?: string;
  cursorText?: string;
  scale?: number;
  perspective?: number;
}

export interface MagneticProps extends BaseComponentProps {
  children: React.ReactElement;
  strength?: number;
  radius?: number;
  disabled?: boolean;
}

// ============================================================================
// LAYOUT TYPES
// ============================================================================

export interface ContainerProps extends BaseComponentProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: keyof typeof tokens.space | 'none';
}

export interface GridProps extends BaseComponentProps {
  children: React.ReactNode;
  columns?: number | Partial<Record<keyof typeof tokens.breakpoints, number>>;
  gap?: keyof typeof tokens.space | Partial<Record<keyof typeof tokens.breakpoints, keyof typeof tokens.space>>;
  rows?: number;
  flow?: 'row' | 'column' | 'dense';
}

export interface FlexProps extends BaseComponentProps {
  children: React.ReactNode;
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  gap?: keyof typeof tokens.space;
  wrap?: boolean;
  flex?: number | string;
}

export interface StackProps extends BaseComponentProps {
  children: React.ReactNode;
  direction?: 'vertical' | 'horizontal';
  gap?: keyof typeof tokens.space;
  align?: 'start' | 'center' | 'end' | 'stretch';
  divider?: React.ReactNode;
}

export interface SectionProps extends BaseComponentProps {
  children: React.ReactNode;
  spacing?: keyof typeof tokens.sectionSpacing;
  background?: 'default' | 'muted' | 'brand' | 'gradient';
  gradient?: keyof typeof tokens.colors.gradients;
  container?: boolean | ContainerProps;
}

// ============================================================================
// COMPONENT REGISTRY (for dynamic rendering)
// ============================================================================

export const componentRegistry = {
  // Primitives
  Button: 'Button',
  Badge: 'Badge',
  Tag: 'Tag',
  Pill: 'Pill',
  Avatar: 'Avatar',
  Tooltip: 'Tooltip',
  TooltipProvider: 'TooltipProvider',
  Toast: 'Toast',

  // Form
  Input: 'Input',
  Textarea: 'Textarea',
  Select: 'Select',
  Checkbox: 'Checkbox',
  Radio: 'Radio',
  RadioGroup: 'RadioGroup',
  Switch: 'Switch',
  Form: 'Form',
  FormField: 'FormField',

  // Layout
  Container: 'Container',
  Grid: 'Grid',
  Flex: 'Flex',
  Stack: 'Stack',
  Section: 'Section',
  Card: 'Card',
  CardHeader: 'CardHeader',
  CardContent: 'CardContent',
  CardFooter: 'CardFooter',

  // Navigation
  Breadcrumb: 'Breadcrumb',
  Pagination: 'Pagination',
  Tabs: 'Tabs',
  Stepper: 'Stepper',

  // Data Display
  StatCard: 'StatCard',
  MetricCard: 'MetricCard',
  ProgressRing: 'ProgressRing',
  Table: 'Table',
  DataGrid: 'DataGrid',

  // Feedback
  Skeleton: 'Skeleton',
  Spinner: 'Spinner',
  Progress: 'Progress',
  ScrollReveal: 'ScrollReveal',
  TiltCard: 'TiltCard',
  Magnetic: 'Magnetic',
} as const;

export type ComponentName = keyof typeof componentRegistry;

// ============================================================================
// THEME PROVIDER TYPES
// ============================================================================

export interface ThemeContextValue {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
  resolvedTheme: 'light' | 'dark';
}

export interface ThemeProviderProps extends BaseComponentProps {
  children: React.ReactNode;
  defaultTheme?: 'light' | 'dark';
  storageKey?: string;
  attribute?: 'class' | 'data-theme';
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

// ============================================================================
// LOCALE / I18N TYPES
// ============================================================================

export type Locale = 'en' | 'ar';

export interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dir: 'ltr' | 'rtl';
  t: (key: string, params?: Record<string, string | number>) => string;
}

export interface LocaleProviderProps extends BaseComponentProps {
  children: React.ReactNode;
  defaultLocale?: Locale;
  storageKey?: string;
  dictionaries: Record<Locale, Record<string, string>>;
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

/** Extract props from a component */
export type ComponentProps<T extends React.ComponentType<any>> = React.ComponentPropsWithoutRef<T>;

/** Make all properties optional except specified */
export type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;

/** Omit specific keys from component props */
export type OmitProps<T, K extends keyof T> = Omit<T, K>;

/** HTML attributes without event handlers */
export type HTMLAttributesWithoutEvents<T extends HTMLElement> = Omit<
  React.HTMLAttributes<T>,
  keyof React.DOMAttributes<T>
>;

/** Forward ref component type */
export type ForwardRefComponent<T extends React.ElementType, P = {}> = React.ForwardRefExoticComponent<
  PolymorphicComponentProps<T, P>
>;