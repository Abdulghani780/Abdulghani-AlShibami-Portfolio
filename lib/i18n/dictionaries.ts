export type Locale = "en" | "ar";

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    brand: string;
    role: string;
    projects: string;
    simulation: string;
    skills: string;
    specifications: string;
    contact: string;
    resume: string;
    themeToggle: string;
    langToggle: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    exploreCta: string;
    simulationCta: string;
    resumeCta: string;
    profilePlaceholder: string;
    profileVerified: string;
    coordinates: string;
  };
  telemetry: {
    heading: string;
    subheading: string;
    throughputLabel: string;
    throughputValue: string;
    throughputDesc: string;
    latencyLabel: string;
    latencyValue: string;
    latencyDesc: string;
    availabilityLabel: string;
    availabilityValue: string;
    availabilityDesc: string;
    verificationLabel: string;
    verificationValue: string;
    verificationDesc: string;
  };
  featured: {
    heading: string;
    subheading: string;
    viewAll: string;
    caseStudyCta: string;
    demoCta: string;
    sourceCta: string;
    statusProduction: string;
    statusVerified: string;
    statusPrototype: string;
  };
  competencies: {
    heading: string;
    subheading: string;
    systemsTitle: string;
    systemsDesc: string;
    aiTitle: string;
    aiDesc: string;
    lowLatencyTitle: string;
    lowLatencyDesc: string;
    cloudTitle: string;
    cloudDesc: string;
  };
  simulationBanner: {
    badge: string;
    disclaimer: string;
    engineOnline: string;
  };
  footer: {
    rights: string;
    philosophy: string;
    safetyNotice: string;
    backToTop: string;
    directLinks: string;
    githubLabel: string;
    linkedinLabel: string;
  };
  kickers: {
    telemetry: string;
    featured: string;
    competencies: string;
    contact: string;
    emptyCatalog: string;
    pipeline: string;
    subsystems: string;
    verification: string;
    endDossier: string;
  };
  projectsPage: {
    title: string;
    subtitle: string;
    operationalCount: string;
    filtersAll: string;
    filterByDomain: string;
    viewDetails: string;
    launchDemo: string;
    viewCode: string;
    statusCompleted: string;
    statusInProgress: string;
    statusMaintained: string;
    emptyHeading: string;
    emptyDescription: string;
    clearFilters: string;
  };
  caseStudy: {
    backToCatalog: string;
    overview: string;
    problemTitle: string;
    solutionTitle: string;
    architectureTitle: string;
    subsystemsTitle: string;
    challengesTitle: string;
    resultsTitle: string;
    techStackTitle: string;
    simulationBannerTitle: string;
    simulationBannerDesc: string;
    launchSimulation: string;
    viewRepository: string;
    verifiedInvariant: string;
    metricsTitle: string;
    notFoundTitle: string;
    notFoundDesc: string;
  };
  demos: {
    backToProject: string;
    interactiveSimulation: string;
    realLive: string;
    embedded: string;
    repo: string;
    video: string;
    none: string;
    disclosureTitle: string;
    disclosureText: string;
    controlsReset: string;
    controlsFullscreen: string;
    controlsExitFullscreen: string;
    controlsOpenLive: string;
    controlsViewRepo: string;
    statusReady: string;
    statusRunning: string;
    notFound: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title: "Abdulghani Al-Shibami — Autonomous Systems Architect & AI Engineering Leader",
      description: "Executive engineering portfolio of Abdulghani Al-Shibami. High-throughput distributed state machines, autonomous multi-agent systems, and low-latency infrastructure.",
    },
    nav: {
      brand: "A. AL-SHIBAMI",
      role: "Systems Architect",
      projects: "Projects",
      simulation: "Systems Lab",
      skills: "Competencies",
      specifications: "Specs",
      contact: "Contact",
      resume: "Executive Dossier",
      themeToggle: "Toggle Visual Theme",
      langToggle: "العربية",
      menuOpen: "Open Navigation Menu",
      menuClose: "Close Navigation Menu",
    },
    hero: {
      greeting: "Executive Engineering Portfolio",
      name: "Abdulghani Al-Shibami",
      title: "Architecting Autonomous Intelligence & Mission-Critical Distributed Systems",
      subtitle: "Bridging enterprise desktop software, algorithmic benchmarks, and distributed web platforms with uncompromising mathematical rigor.",
      exploreCta: "Explore Engineering Showcase",
      simulationCta: "Launch Interactive Lab",
      resumeCta: "Architecture Dossier (CV)",
      profilePlaceholder: "[PROFILE_IMAGE]",
      profileVerified: "Verified Systems Architect",
      coordinates: "ASPECT_RATIO: 1:1 // VERIFIED CONTAINER",
    },
    telemetry: {
      heading: "System Telemetry & Design Invariants",
      subheading: "Architectural targets and empirical benchmark scenarios across engineering systems.",
      throughputLabel: "Target Throughput",
      throughputValue: "Simulated Target",
      throughputDesc: "High-concurrency benchmark scenario",
      latencyLabel: "Response Latency",
      latencyValue: "Benchmark Target",
      latencyDesc: "Local cache & memory target",
      availabilityLabel: "Availability Model",
      availabilityValue: "High Availability",
      availabilityDesc: "Offline-resilient architecture",
      verificationLabel: "Design Invariants",
      verificationValue: "Formal Proof Specs",
      verificationDesc: "Double-entry & state invariants",
    },
    featured: {
      heading: "Featured Engineering Works",
      subheading: "Verified software systems, enterprise desktop ledgers, and interactive simulations.",
      viewAll: "View All Systems →",
      caseStudyCta: "View Architecture Case Study",
      demoCta: "Launch Simulation",
      sourceCta: "GitHub Source",
      statusProduction: "PRODUCTION SYSTEM",
      statusVerified: "VERIFIED ARCHITECTURE",
      statusPrototype: "DEMONSTRATION SANDBOX",
    },
    competencies: {
      heading: "Core Architectural Competencies",
      subheading: "Four foundational pillars anchoring mission-critical engineering leadership.",
      systemsTitle: "Enterprise Desktop & ERP Systems",
      systemsDesc: "Hardened C# WinForms and SQL Server systems with double-entry ledger balance invariants and offline resilience.",
      aiTitle: "Algorithmic Computing & Performance",
      aiDesc: "Algorithm benchmark testbeds, computational complexity analysis, and heuristic search optimization.",
      lowLatencyTitle: "Network & Campus Infrastructure",
      lowLatencyDesc: "Multi-tier campus network topology visualizers, dynamic link telemetry, and incident dispatch pipelines.",
      cloudTitle: "Modern Distributed Web Platforms",
      cloudDesc: "Next.js 15 full-stack architectures, high-contrast Tailwind design systems, and resilient RESTful APIs.",
    },
    simulationBanner: {
      badge: "INTERACTIVE WEB SIMULATION",
      disclaimer: "Sandboxed In-Browser Simulation — High-fidelity state machine and UI reproduction with safe mock data (native desktop executables run out-of-browser).",
      engineOnline: "ENGINE ONLINE",
    },
    footer: {
      rights: "© 2026 Abdulghani Al-Shibami. All rights reserved.",
      philosophy: "Architectural Computing & Autonomous Systems. Designed with Obsidian & Gilded Precision.",
      safetyNotice: "Zero native desktop binaries executed in-browser // Sandboxed Web Simulation Environment.",
      backToTop: "Back to Top ↑",
      directLinks: "// Direct Links",
      githubLabel: "GitHub Repository",
      linkedinLabel: "LinkedIn Profile",
    },
    kickers: {
      telemetry: "// EMPIRICAL VERIFICATION",
      featured: "// DISTRIBUTED RUNTIMES",
      competencies: "// FOUNDATIONAL PILLARS",
      contact: "// INITIATE TRANSMISSION",
      emptyCatalog: "// 0 SYSTEMS MATCHED",
      pipeline: "// PIPELINE SPECIFICATION",
      subsystems: "// SUBSYSTEM INNOVATIONS",
      verification: "// RIGOROUS VERIFICATION",
      endDossier: "// END OF ARCHITECTURAL DOSSIER",
    },
    projectsPage: {
      title: "Engineering Systems & Projects Catalog",
      subtitle: "Enterprise desktop ledgers, network infrastructure monitors, and algorithmic benchmark visualizers.",
      operationalCount: "5 Engineering Systems",
      filtersAll: "All Systems",
      filterByDomain: "Filter by Discipline",
      viewDetails: "Case Study",
      launchDemo: "Launch Demo",
      viewCode: "Repository",
      statusCompleted: "Production Verified",
      statusInProgress: "Active Development",
      statusMaintained: "Maintained System",
      emptyHeading: "No Matching Systems Found",
      emptyDescription: "No engineering projects match the selected domain filters.",
      clearFilters: "Clear Filter Selection",
    },
    caseStudy: {
      backToCatalog: "← Back to Systems Catalog",
      overview: "Executive Architecture Overview",
      problemTitle: "Problem Statement & Constraints",
      solutionTitle: "Architectural Solution & Strategy",
      architectureTitle: "System Topology & Execution Pipeline",
      subsystemsTitle: "Core Subsystems & Invariant Guards",
      challengesTitle: "Key Technical Challenges Solved",
      resultsTitle: "Architectural Results & Invariants",
      techStackTitle: "Core Technologies & Protocols",
      simulationBannerTitle: "Hands-On System Demonstration",
      simulationBannerDesc: "Experience an interactive simulation of this system's interface and state transitions directly in the browser.",
      launchSimulation: "Launch Interactive Demo",
      viewRepository: "View GitHub Repository",
      verifiedInvariant: "VERIFIED INVARIANT",
      metricsTitle: "Key Architectural Metrics",
      notFoundTitle: "Project Not Found",
      notFoundDesc: "The requested engineering case study does not exist in the active systems registry.",
    },
    demos: {
      backToProject: "← Back to Case Study",
      interactiveSimulation: "Interactive Web Simulation",
      realLive: "Live Production Application",
      embedded: "Embedded Live Demo",
      repo: "Code Repository & Walkthrough",
      video: "Video Demonstration",
      none: "Theoretical System / Case Study Only",
      disclosureTitle: "Technical Integrity & Simulation Disclosure",
      disclosureText: "This is a browser-based interactive simulation of the project interface using safe mock data. It is not the original native desktop runtime.",
      controlsReset: "Reset State",
      controlsFullscreen: "Fullscreen",
      controlsExitFullscreen: "Exit Fullscreen",
      controlsOpenLive: "Open Live Website",
      controlsViewRepo: "View Repository on GitHub",
      statusReady: "READY",
      statusRunning: "RUNNING",
      notFound: "The requested interactive demonstration is not registered in the system.",
    },
  },
  ar: {
    meta: {
      title: "عبدالغني الشبامي — مهندس نظم حاسوبية مستقلة وحلول ذكاء اصطناعي",
      description: "الملف الهندسي التنفيذي للمهندس عبدالغني الشبامي. أنظمة سطح المكتب المؤسسية، مختبرات الخوارزميات، والمنصات الموزعة.",
    },
    nav: {
      brand: "عبدالغني الشبامي",
      role: "مهندس نظم برمجية",
      projects: "الأنظمة والمشاريع",
      simulation: "المختبر الهندسي",
      skills: "الكفاءات",
      specifications: "المواصفات",
      contact: "التواصل",
      resume: "السيرة الذاتية",
      themeToggle: "تبديل المظهر البصري",
      langToggle: "English",
      menuOpen: "فتح القائمة",
      menuClose: "إغلاق القائمة",
    },
    hero: {
      greeting: "الملف الهندسي التنفيذي",
      name: "عبدالغني الشبامي",
      title: "هندسة الأنظمة البرمجية المؤسسية وحلول الذكاء الاصطناعي والحوسبة الموزعة",
      subtitle: "الربط بين برمجيات سطح المكتب المؤسسية، واختبارات كفاءة الخوارزميات، والمنصات السحابية بدقة رياضية صارمة.",
      exploreCta: "استعراض دليل الأنظمة الهندسية",
      simulationCta: "تشغيل المحاكاة التفاعلية",
      resumeCta: "تحميل السيرة الذاتية (PDF)",
      profilePlaceholder: "[صورة_الملف_الشخصي]",
      profileVerified: "مهندس نظم معتمد",
      coordinates: "النسبة: 1:1 // حاوية معتمدة",
    },
    telemetry: {
      heading: "القياسات الهندسية ومحددات التصميم",
      subheading: "أهداف معمارية وسيناريوهات اختبارية تجريبية عبر الأنظمة الهندسية.",
      throughputLabel: "معدل التدفق المستهدف",
      throughputValue: "هدف اختباري",
      throughputDesc: "سيناريو اختباري عالي التزامن",
      latencyLabel: "زمن الاستجابة المستهدف",
      latencyValue: "هدف معياري",
      latencyDesc: "مستهدف الذاكرة المؤقتة المحلية",
      availabilityLabel: "نموذج التوفر",
      availabilityValue: "جاهزية تشغيلية",
      availabilityDesc: "معمارية مرنة تدعم العمل دون اتصال",
      verificationLabel: "ثوابت التصميم",
      verificationValue: "مواصفات قياسية",
      verificationDesc: "تطبيق قواعد القيد المزدوج وحالة النظام",
    },
    featured: {
      heading: "أبرز الأنظمة الهندسية المطورة",
      subheading: "أنظمة برمجية معتمدة، وسجلات مؤسسية لسطح المكتب، ومحاكاة تفاعلية.",
      viewAll: "عرض كافة الأنظمة ←",
      caseStudyCta: "دراسة الحالة المعمارية",
      demoCta: "تشغيل المحاكاة",
      sourceCta: "المصدر عبر GitHub",
      statusProduction: "نظام تشغيلي مؤسسي",
      statusVerified: "معمارية معتمدة",
      statusPrototype: "مختبر محاكاة تجريبي",
    },
    competencies: {
      heading: "الكفاءات المعمارية الأساسية",
      subheading: "أربع ركائز هندسية متينة تقود المعايير التقنية المؤسسية.",
      systemsTitle: "أنظمة سطح المكتب والمؤسسات",
      systemsDesc: "برمجيات متينة في C# WinForms وSQL Server مع حراسة رياضية لتوازن القيود المزدوجة والعمل دون اتصال.",
      aiTitle: "الحوسبة الخوارزمية والأداء",
      aiDesc: "مختبرات قياس أداء الخوارزميات، تحليل التعقيد الحسابي، وتحسين مسارات البحث والاستدلال.",
      lowLatencyTitle: "الشبكات والبنية التحتية",
      lowLatencyDesc: "رصد طوبولوجيا شبكات الحرم الجامعي، قياس استجابة الأجهزة لحظياً، وإدارة بلاغات الدعم الفني.",
      cloudTitle: "المنصات السحابية وتطبيقات الويب",
      cloudDesc: "معماريات Next.js 15 المتكاملة، أنظمة تصميم Tailwind عالية التباين، وواجهات RESTful البرمجية.",
    },
    simulationBanner: {
      badge: "محاكاة ويب تفاعلية",
      disclaimer: "محاكاة معزولة داخل المتصفح — إعادة إنتاج حتمية للواجهة وسير العمل باستخدام بيانات تجريبية آمنة (التطبيقات المكتبية الأصلية تعمل خارج المتصفح).",
      engineOnline: "المحرك متصل بالإنترنت",
    },
    footer: {
      rights: "© ٢٠٢٦ عبدالغني الشبامي. جميع الحقوق محفوظة.",
      philosophy: "الحوسبة المعمارية والأنظمة المستقلة. صُممت بدقة الأوبسيديان والذهب الملكي.",
      safetyNotice: "لا يتم تشغيل أي كود مكتبي أصلي داخل المتصفح // بيئة محاكاة ويب آمنة ومعتمدة.",
      backToTop: "العودة للأعلى ↑",
      directLinks: "// روابط مباشرة",
      githubLabel: "مستودع GitHub",
      linkedinLabel: "الملف الشخصي على LinkedIn",
    },
    kickers: {
      telemetry: "// التحقق التجريبي",
      featured: "// الأنظمة التشغيلية",
      competencies: "// الركائز الهندسية",
      contact: "// بدء التواصل الهندسي",
      emptyCatalog: "// لا توجد نتائج مطابقة",
      pipeline: "// مواصفات مسار المعالجة",
      subsystems: "// ابتكارات الأنظمة الفرعية",
      verification: "// التحقق والنتائج المعمارية",
      endDossier: "// نهاية الملف المعماري",
    },
    projectsPage: {
      title: "دليل الأنظمة الهندسية والمشاريع",
      subtitle: "سجلات محاسبية لسطح المكتب، منصات لمراقبة شبكات الحرم الجامعي، ومختبرات تفاعلية للخوارزميات.",
      operationalCount: "٥ أنظمة هندسية",
      filtersAll: "كافة الأنظمة",
      filterByDomain: "تصفية حسب التخصص",
      viewDetails: "الدراسة المعمارية",
      launchDemo: "تشغيل المحاكاة",
      viewCode: "المستودع البرمجي",
      statusCompleted: "نظام معتمد",
      statusInProgress: "قيد التطوير النشط",
      statusMaintained: "نظام مستقر ومستمر",
      emptyHeading: "لا توجد أنظمة مطابقة للتصفية",
      emptyDescription: "لم يتم العثور على أي نظام هندسي يطابق معايير التصفية المحددة.",
      clearFilters: "إعادة ضبط التصفية",
    },
    caseStudy: {
      backToCatalog: "← العودة إلى دليل الأنظمة الهندسية",
      overview: "نظرة معمارية تنفيذية عامة",
      problemTitle: "الإشكاليات الهندسية والقيود التشغيلية",
      solutionTitle: "الحل المعماري والتطبيق الفعلي",
      architectureTitle: "طوبولوجيا النظام ومسار التنفيذ",
      subsystemsTitle: "الأنظمة الفرعية وحراس السلامة",
      challengesTitle: "التحديات التقنية التي تم التغلب عليها",
      resultsTitle: "النتائج المعمارية والثوابت المحققة",
      techStackTitle: "التقنيات والبروتوكولات المستخدمة",
      simulationBannerTitle: "العرض التفاعلي الحي للنظام",
      simulationBannerDesc: "جرب محاكاة تفاعلية حية لواجهة النظام وتدفق عملياته مباشرة داخل المتصفح.",
      launchSimulation: "تشغيل المحاكاة التفاعلية",
      viewRepository: "عرض المستودع على GitHub",
      verifiedInvariant: "ثابت معماري مؤكد",
      metricsTitle: "المقاييس المعمارية الرئيسية",
      notFoundTitle: "النظام غير موجود",
      notFoundDesc: "الدراسة المعمارية المطلوبة غير مسجلة في دليل الأنظمة النشطة.",
    },
    demos: {
      backToProject: "← العودة إلى دراسة الحالة",
      interactiveSimulation: "محاكاة ويب تفاعلية",
      realLive: "تطبيق تشغيلي مباشر",
      embedded: "عرض مباشر مدمج",
      repo: "مستودع الكود والمراجعة",
      video: "عرض فيديو مسجل",
      none: "نظام نظري / دراسة حالة معمارية",
      disclosureTitle: "إفصاح النزاهة التقنية والمحاكاة",
      disclosureText: "هذه محاكاة تفاعلية عبر المتصفح لواجهة المشروع باستخدام بيانات تجريبية آمنة وليست بيئة التشغيل الأصلية لتطبيق سطح المكتب.",
      controlsReset: "إعادة الضبط",
      controlsFullscreen: "ملء الشاشة",
      controlsExitFullscreen: "إنهاء ملء الشاشة",
      controlsOpenLive: "فتح الموقع المباشر",
      controlsViewRepo: "عرض المستودع على GitHub",
      statusReady: "جاهز",
      statusRunning: "يعمل",
      notFound: "العرض التفاعلي المطلوب غير مسجل في النظام.",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries.en;
}
