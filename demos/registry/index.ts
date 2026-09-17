import React from "react";
import { DemoType } from "@/types/project";
import { AuraLedgerSimulation } from "@/demos/simulations/AuraLedgerSimulation";
import { YusraSimulation } from "@/demos/simulations/YusraSimulation";
import { CampusITTrackerSimulation } from "@/demos/simulations/CampusITTrackerSimulation";
import { MetaAlgorithmLabSimulation } from "@/demos/simulations/MetaAlgorithmLabSimulation";

export interface DemoProps {
  locale: "en" | "ar";
  onReset?: () => void;
  isRtl?: boolean;
}

export interface DemoDefinition {
  slug: string;
  demoType: DemoType;
  title: {
    en: string;
    ar: string;
  };
  subtitle: {
    en: string;
    ar: string;
  };
  disclaimer: {
    en: string;
    ar: string;
  };
  component?: React.ComponentType<DemoProps>;
  liveUrl?: string;
  repoUrl?: string;
  videoUrl?: string;
}

export const DEMO_REGISTRY: Record<string, DemoDefinition> = {
  yusra: {
    slug: "yusra",
    demoType: "interactive_simulation",
    title: {
      en: "Yusra Enterprise Resource Ledger — Desktop Simulation",
      ar: "نظام يسرى لإدارة الموارد والمحاسبة — محاكاة سطح المكتب",
    },
    subtitle: {
      en: "Interactive simulation of C# WinForms double-entry journal and invoice generation workflows.",
      ar: "محاكاة تفاعلية لقيود اليومية المزدوجة وفواتير المبيعات لنظام C# WinForms المكتبي.",
    },
    disclaimer: {
      en: "This is a browser-based interactive simulation of the C# WinForms desktop application using safe mock data. It is not the native desktop executable.",
      ar: "هذه محاكاة تفاعلية عبر المتصفح لتطبيق سطح المكتب C# WinForms باستخدام بيانات تجريبية آمنة وليست البرنامج المكتبي الأصلي.",
    },
    component: YusraSimulation,
  },
  "campus-it-tracker": {
    slug: "campus-it-tracker",
    demoType: "interactive_simulation",
    title: {
      en: "Campus IT Infrastructure Tracker — Topology Monitor",
      ar: "نظام تتبع شبكات الحرم الجامعي — مراقبة الطوبولوجيا",
    },
    subtitle: {
      en: "Simulated campus network operations center with live node telemetry and incident triage.",
      ar: "محاكاة لمركز عمليات شبكة الحرم الجامعي مع مراقبة حية لحالة الأجهزة وإدارة البلاغات.",
    },
    disclaimer: {
      en: "This is an in-browser simulation of the network topology monitor using synthetic campus node telemetry.",
      ar: "هذه محاكاة تفاعلية داخل المتصفح لنظام مراقبة الشبكة تعتمد على بيانات افتراضية لأجهزة الحرم الجامعي.",
    },
    component: CampusITTrackerSimulation,
  },
  "metaalgorithm-lab": {
    slug: "metaalgorithm-lab",
    demoType: "interactive_simulation",
    title: {
      en: "MetaAlgorithm Lab — In-Browser Benchmark Runner",
      ar: "مختبر الخوارزميات — منصة التحليل والاختبار المباشر",
    },
    subtitle: {
      en: "Step-by-step interactive sorting visualizer and real-time execution complexity benchmarking.",
      ar: "منصة تفاعلية بصرية لتنفيذ خوارزميات الفرز خطوة بخطوة ورصد دقيق لعدد المقارنات وزمن التنفيذ.",
    },
    disclaimer: {
      en: "This benchmark executes genuine JavaScript/TypeScript sorting algorithms client-side in your browser.",
      ar: "تنفذ هذه المنصة خوارزميات الفرز الحقيقية مباشرة داخل المتصفح من جانب العميل.",
    },
    component: MetaAlgorithmLabSimulation,
  },
  "nexora-tech": {
    slug: "nexora-tech",
    demoType: "interactive_simulation",
    title: {
      en: "Nexora Tech Platform — Digital Capabilities Portal",
      ar: "منصة نكسورا تك — بوابة استعراض القدرات الرقمية",
    },
    subtitle: {
      en: "Interactive demonstration of modern full-stack responsive capabilities and service showcases.",
      ar: "عرض تفاعلي لمعمارية المنصات الرقمية الحديثة المتوافقة مع كافة أحجام الشاشات.",
    },
    disclaimer: {
      en: "Interactive platform presentation. Verified production deployment URL is pending owner domain configuration.",
      ar: "عرض تفاعلي لقدرات المنصة. رابط النشر التشغيلي قيد انتظار إعدادات النطاق الخاصة بالمالك.",
    },
    liveUrl: "https://github.com/Abdulghani-Al-Shibami",
    repoUrl: "https://github.com/Abdulghani-Al-Shibami",
  },
  auraledger: {
    slug: "auraledger",
    demoType: "interactive_simulation",
    title: {
      en: "AuraLedger Distributed Consensus — Raft Sandbox",
      ar: "محرك أورا ليدجر للتوافق الموزع — مختبر بروتوكول Raft",
    },
    subtitle: {
      en: "Interactive 5-node consensus state machine with Raft leader election and chaos partition injection.",
      ar: "محاكاة لآلة حالة التوافق عبر ٥ عقد خوادم مع انتخاب القائد واختبار انقسام الشبكة.",
    },
    disclaimer: {
      en: "Prototype Demonstration Sandbox: This is a browser-based simulation of a Raft consensus state machine using mock network partitions.",
      ar: "مختبر محاكاة تجريبي: محاكاة لبروتوكول توافق Raft داخل المتصفح تمثل انقسامات الشبكة تجريبياً.",
    },
    component: AuraLedgerSimulation,
  },
};

export function getDemoDefinition(slug: string): DemoDefinition | null {
  return DEMO_REGISTRY[slug] || null;
}
