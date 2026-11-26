/**
 * Abdulghani Al-Shibami Portfolio — UI Components
 * Canonical design system primitives built from design tokens
 */

// Primitives
export { Button, type ButtonProps } from "./Button";
export { Card, CardHeader, CardContent, CardFooter, type CardProps } from "./Card";
export {
  Badge,
  Tag,
  Pill,
  type BadgeProps,
  type TagProps,
  type PillProps,
} from "./Badge";
export { Input, Textarea, Select, type InputProps, type TextareaProps, type SelectProps } from "./Input";
export { Checkbox, CheckboxGroup, type CheckboxProps, type CheckboxGroupProps } from "./Checkbox";
export { Radio, RadioGroup, type RadioProps, type RadioGroupProps } from "./Radio";
export { Switch, type SwitchProps } from "./Switch";

// Layout
export { Container, type ContainerProps } from "./Container";
export { Grid, GridPresets, type GridProps } from "./Grid";
export { Flex, InlineFlex, Center, type FlexProps, type InlineFlexProps, type CenterProps } from "./Flex";
export { Stack, VStack, HStack, type StackProps, type VStackProps, type HStackProps } from "./Stack";
export { Section, SectionDivider, type SectionProps, type SectionDividerProps } from "./Section";

// Navigation
export { Breadcrumb, CompactBreadcrumb, type BreadcrumbProps, type BreadcrumbItem, type CompactBreadcrumbProps } from "./Breadcrumb";
export { Pagination, type PaginationProps } from "./Pagination";
export { Tabs, TabList, Tab, TabPanels, TabPanel, TabsWithPanels, type TabsProps, type TabItem, type TabsWithPanelsProps } from "./Tabs";

// Data Display
export { Avatar, AvatarGroup, type AvatarProps, type AvatarGroupProps } from "./Avatar";
export { Tooltip, TooltipProvider, type TooltipProps, type TooltipProviderProps } from "./Tooltip";
export { Toast, ToastContainer, useToast, toast, type ToastProps } from "./Toast";
export { StatCard, CompactStatCard, type StatCardProps, type CompactStatCardProps } from "./StatCard";
export { MetricCard, CompactMetricCard, type MetricCardProps, type CompactMetricCardProps } from "./MetricCard";
export { Progress, ProgressRing, type ProgressProps, type ProgressRingProps } from "./Progress";
export { Skeleton, SkeletonPresets, type SkeletonProps } from "./Skeleton";
export { Spinner, SpinnerOverlay, type SpinnerProps, type SpinnerOverlayProps } from "./Spinner";

// Feedback & Motion
export { ScrollReveal, RevealPresets, type ScrollRevealProps } from "./ScrollReveal";
export { TiltCard, type TiltCardProps } from "./TiltCard";
export { Magnetic, type MagneticProps } from "./Magnetic";
export { MagneticCursor } from "./MagneticCursor";

// Typography & Composition
export { SectionHeading, ArabicSectionHeading, type SectionHeadingProps, type ArabicSectionHeadingProps } from "./SectionHeading";
export { CountUp, type CountUpProps } from "./CountUp";

// Specialized
export { Hero3DCanvas, type Hero3DCanvasProps } from "./Hero3DCanvas";
export { Preloader } from "./Preloader";
export { AsLogo, AsMonogram, AsWordmark, type AsLogoProps } from "./AsLogo";
export { SmoothScrollProvider } from "./SmoothScrollProvider";