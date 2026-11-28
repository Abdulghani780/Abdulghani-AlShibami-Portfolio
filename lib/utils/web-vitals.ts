/**
 * Web Vitals Tracking Utility (Lightweight - No External Dependencies)
 * Measures and reports Core Web Vitals (LCP, CLS, INP, FID, TTFB)
 * Uses native PerformanceObserver APIs - no web-vitals package needed
 */

interface WebVitalMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
  navigationType: string;
}

const VITALS_THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  CLS: { good: 0.1, poor: 0.25 },
  INP: { good: 200, poor: 500 },
  FID: { good: 100, poor: 300 },
  TTFB: { good: 800, poor: 1800 },
} as const;

function getRating(name: keyof typeof VITALS_THRESHOLDS, value: number): WebVitalMetric['rating'] {
  const threshold = VITALS_THRESHOLDS[name];
  if (value <= threshold.good) return 'good';
  if (value >= threshold.poor) return 'poor';
  return 'needs-improvement';
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

function getNavigationType(): string {
  if (typeof window === 'undefined') return 'unknown';
  const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  return nav?.type || 'unknown';
}

export function sendToAnalytics(metric: WebVitalMetric) {
  // In development, log to console
  if (process.env.NODE_ENV === 'development') {
    console.log('[Web Vitals]', metric);
    return;
  }

  // Production: Send to Vercel Analytics or custom endpoint
  // Example for Vercel Speed Insights:
  if (typeof window !== 'undefined' && window.va) {
    window.va('track', metric.name, metric.value);
  }

  // Custom analytics endpoint
  if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
    const body = JSON.stringify({
      ...metric,
      url: window.location.href,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
    });
    navigator.sendBeacon('/api/web-vitals', body);
  }
}

function observeLCP(callback: (metric: WebVitalMetric) => void) {
  if (typeof window === 'undefined') return;
  
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry & { startTime: number };
      if (lastEntry) {
        callback({
          name: 'LCP',
          value: lastEntry.startTime,
          rating: getRating('LCP', lastEntry.startTime),
          delta: lastEntry.startTime,
          id: generateId(),
          navigationType: getNavigationType(),
        });
      }
    });
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (e) {
    // LCP not supported
  }
}

function observeCLS(callback: (metric: WebVitalMetric) => void) {
  if (typeof window === 'undefined') return;
  
  try {
    let clsValue = 0;
    let clsEntries: PerformanceEntry[] = [];
    
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as (PerformanceEntry & { hadRecentInput: boolean; value: number })[]) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          clsEntries.push(entry);
        }
      }
      
      callback({
        name: 'CLS',
        value: clsValue,
        rating: getRating('CLS', clsValue),
        delta: clsValue,
        id: generateId(),
        navigationType: getNavigationType(),
      });
    });
    observer.observe({ type: 'layout-shift', buffered: true });
  } catch (e) {
    // CLS not supported
  }
}

function observeINP(callback: (metric: WebVitalMetric) => void) {
  if (typeof window === 'undefined') return;
  
  try {
    let inpValue = 0;
    
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries() as (PerformanceEntry & { processingStart: number; startTime: number })[];
      for (const entry of entries) {
        const inp = entry.processingStart - entry.startTime;
        if (inp > inpValue) {
          inpValue = inp;
        }
      }
      
      callback({
        name: 'INP',
        value: inpValue,
        rating: getRating('INP', inpValue),
        delta: inpValue,
        id: generateId(),
        navigationType: getNavigationType(),
      });
    });
    // durationThreshold is not in TypeScript types but supported in modern browsers
    observer.observe({ type: 'event', buffered: true } as PerformanceObserverInit & { durationThreshold?: number });
  } catch (e) {
    // INP not supported
  }
}

function observeFID(callback: (metric: WebVitalMetric) => void) {
  if (typeof window === 'undefined') return;
  
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries() as (PerformanceEntry & { processingStart: number; startTime: number })[];
      for (const entry of entries) {
        const fid = entry.processingStart - entry.startTime;
        callback({
          name: 'FID',
          value: fid,
          rating: getRating('FID', fid),
          delta: fid,
          id: generateId(),
          navigationType: getNavigationType(),
        });
        break; // FID only reports first input
      }
    });
    observer.observe({ type: 'first-input', buffered: true });
  } catch (e) {
    // FID not supported
  }
}

function observeTTFB(callback: (metric: WebVitalMetric) => void) {
  if (typeof window === 'undefined') return;
  
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries() as PerformanceNavigationTiming[];
      for (const entry of entries) {
        const ttfb = entry.responseStart - entry.requestStart;
        callback({
          name: 'TTFB',
          value: ttfb,
          rating: getRating('TTFB', ttfb),
          delta: ttfb,
          id: generateId(),
          navigationType: getNavigationType(),
        });
      }
    });
    observer.observe({ type: 'navigation', buffered: true });
  } catch (e) {
    // Navigation timing not supported
  }
}

// Initialize all web vitals tracking
export function initWebVitals() {
  if (typeof window === 'undefined') return;
  
  observeCLS(sendToAnalytics);
  observeLCP(sendToAnalytics);
  observeINP(sendToAnalytics);
  observeFID(sendToAnalytics);
  observeTTFB(sendToAnalytics);
}

// Type augmentation for window.va
declare global {
  interface Window {
    va?: (event: string, name: string, value: number) => void;
  }
}