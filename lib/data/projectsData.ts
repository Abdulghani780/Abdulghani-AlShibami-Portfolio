import { Project, ProjectCategory, Technology } from "@/types/project";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    id: "cat-1",
    slug: "desktop-systems",
    name: {
      en: "Enterprise Desktop & ITIL",
      ar: "أنظمة سطح المكتب وITIL",
    },
    displayOrder: 1,
  },
  {
    id: "cat-2",
    slug: "algorithmic-computing",
    name: {
      en: "Algorithmic Systems & Complexity",
      ar: "الحوسبة الخوارزمية والتعقيد الحسابي",
    },
    displayOrder: 2,
  },
  {
    id: "cat-3",
    slug: "web-platforms",
    name: {
      en: "Modern Web Platforms & E-Commerce",
      ar: "منصات الويب والتجارة الإلكترونية",
    },
    displayOrder: 3,
  },
  {
    id: "cat-4",
    slug: "academic-systems",
    name: {
      en: "Academic & Proposal Portals",
      ar: "المنصات الأكاديمية والجامعية",
    },
    displayOrder: 4,
  },
];

export const TECHNOLOGIES: Record<string, Technology> = {
  csharp: { id: "tech-csharp", name: "C# .NET 4.8", category: "Language" },
  winforms: { id: "tech-winforms", name: "Windows Forms", category: "Framework" },
  oracle: { id: "tech-oracle", name: "Oracle 10g", category: "Database" },
  python: { id: "tech-python", name: "Python 3.10+", category: "Language" },
  pyqt6: { id: "tech-pyqt6", name: "PyQt6", category: "Framework" },
  scipy: { id: "tech-scipy", name: "SciPy & NumPy", category: "Tool" },
  matplotlib: { id: "tech-matplotlib", name: "Matplotlib", category: "Tool" },
  php: { id: "tech-php", name: "PHP 8", category: "Language" },
  mysql: { id: "tech-mysql", name: "MySQL 8", category: "Database" },
  html5: { id: "tech-html5", name: "HTML5", category: "Language" },
  css3: { id: "tech-css3", name: "CSS3 (RTL)", category: "Framework" },
  javascript: { id: "tech-js", name: "Vanilla JavaScript (ES6)", category: "Language" },
  itil: { id: "tech-itil", name: "ITIL Service Desk", category: "Tool" },
  latex: { id: "tech-latex", name: "LaTeX / PDF Engine", category: "Tool" },
  sql: { id: "tech-sql", name: "Relational SQL", category: "Database" },
  restapi: { id: "tech-rest", name: "RESTful Architecture", category: "Protocol" },
};

export const PROJECTS: Project[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. CAMPUS IT TRACKER (Windows Desktop / C# WinForms / Oracle)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "proj-01",
    slug: "campus-it-tracker",
    categorySlug: "desktop-systems",
    title: {
      en: "Campus IT Infrastructure & ITIL Asset Tracker",
      ar: "نظام تتبع البنية التحتية للحرم الجامعي وإدارة أصول ITIL",
    },
    shortDescription: {
      en: "Enterprise Windows desktop application for university IT infrastructure tracking, interactive lab floorplan mapping, ITIL service desk Kanban triage, and Oracle database custody logging.",
      ar: "نظام مكتبي مؤسسي لنظام ويندوز لإدارة وتتبع أصول البنية التحتية لتقنية المعلومات الجامعية، ورسم خرائط المختبرات تفاعلياً، وتوزيع بلاغات الدعم الفني عبر لوحة كانبان.",
    },
    year: 2024,
    status: "Completed",
    verificationStatus: "VERIFIED_OWNER_DATA",
    featured: true,
    demoType: "interactive_simulation",
    demoUrl: "/projects/campus-it-tracker/demo",
    githubUrl: "https://github.com/Abdulghani780/Campuse-IT-Tracker",
    technologies: [
      TECHNOLOGIES.csharp,
      TECHNOLOGIES.winforms,
      TECHNOLOGIES.oracle,
      TECHNOLOGIES.itil,
      TECHNOLOGIES.sql,
    ],
    caseStudy: {
      problem: {
        en: "University campuses operating dozens of computer labs, server rooms, and faculty offices face equipment misplacement, untracked hardware reassignments, and delayed incident resolution during critical academic sessions.",
        ar: "تواجه المجمعات الجامعية التي تضم عشرات مختبرات الحاسوب وغرف الخوادم صعوبة في متابعة نقل الأجهزة وتتبع العهد وفقدان المعدات وتأخر الاستجابة لبلاغات الأعطال أثناء الفترات الأكاديمية الحساسة.",
      },
      solution: {
        en: "Engineered a robust Windows Forms enterprise desktop application in C# .NET with direct Oracle 10g connectivity, visual interactive campus floorplans, drag-and-drop ITIL Kanban service desk, and an offline-resilient repository fallback.",
        ar: "تطوير تطبيق مكتبي مؤسسي متكامل لنظام ويندوز باستخدام C# .NET وقواعد بيانات Oracle 10g مع تمثيل بصري تفاعلي لخرائط ومختبرات الحرم الجامعي، ولوحة كانبان لفرز بلاغات الدعم، ونمط تشغيل محلي دون اتصال.",
      },
      architectureFlow: [
        {
          step: "01",
          name: { en: "WinForms UI & Custom Controls", ar: "طبقة الواجهات وعناصر التحكم المخصصة" },
          desc: { en: "Custom canvas controls including interactive campus mapping (CampusMapControl) and drag-and-drop Kanban (KanbanBoardControl).", ar: "عناصر تحكم مخصصة تشمل مخطط الحرم الجامعي التفاعلي ولوحة كانبان لفرز البلاغات بالسحب والإفلات." },
        },
        {
          step: "02",
          name: { en: "Business Services & Custody Engine", ar: "طبقة الخدمات وإدارة العهد" },
          desc: { en: "Decoupled domain services managing asset lifecycle, custody transfers (TransferService), and incident audit trails.", ar: "خدمات برمجية مستقلة لإدارة دورة حياة الأصول ونقل العهد بين الموظفين وسجل التدقيق الأمني." },
        },
        {
          step: "03",
          name: { en: "Oracle Relational Data Layer", ar: "طبقة بيانات Oracle العلائقية" },
          desc: { en: "Enterprise database connectivity via System.Data.OracleClient with built-in mock fallback for offline operation.", ar: "اتصال مباشر بقواعد بيانات Oracle مع آلية تلقائية للعمل على بيانات تجريبية آمنة في حال انقطاع الشبكة." },
        },
      ],
      subsystems: [
        {
          id: "sub-1",
          title: { en: "Interactive Campus Map", ar: "الخريطة التفاعلية للحرم الجامعي" },
          desc: { en: "Visual graphical floorplan of campus buildings and labs allowing technicians to visually pinpoint faulty equipment.", ar: "مخطط بصري لمباني ومختبرات الحرم الجامعي يتيح للفنيين تحديد الموقع الجغرافي للأجهزة بدقة." },
          tag: "MAPPING",
        },
        {
          id: "sub-2",
          title: { en: "ITIL Service Desk Kanban", ar: "لوحة كانبان لفرز البلاغات" },
          desc: { en: "Drag-and-drop incident ticket triage through New, Triaged, In Progress, and Resolved states.", ar: "لوحة تفاعلية تتيح نقل البلاغات بالسحب والإفلات عبر مراحل الرصد والفرز والمعالجة والإغلاق." },
          tag: "ITIL_DESK",
        },
        {
          id: "sub-3",
          title: { en: "Asset Custody Transfer Service", ar: "نظام مناقلة وتسجيل العهد" },
          desc: { en: "Formal chain-of-custody logging with employee sign-off verification and license seat compliance.", ar: "سير عمل معتمد لنقل عهد الأجهزة بين الفنيين والموظفين ومراقبة صلاحيات تراخيص البرمجيات." },
          tag: "CUSTODY",
        },
      ],
      challenges: {
        en: [
          "Designing high-performance graphical campus floorplan controls in WinForms without canvas redraw flickering.",
          "Building a unified repository layer that operates identically against live Oracle 10g and offline mock environments.",
        ],
        ar: [
          "تطوير عناصر تحكم رسومية مخصصة للخرائط في WinForms دون وميض أثناء إعادة الرسم وتحديث البيانات.",
          "بناء طبقة مستودع بيانات موحدة تعمل بنفس الكفاءة مع قواعد بيانات Oracle المباشرة أو النمط المحلي دون اتصال.",
        ],
      },
      results: {
        en: [
          "Delivered complete asset lifecycle tracking across campus computing workstations, switches, and peripherals.",
          "Verified robust dual-mode operational resilience with zero crashes during Oracle connection drops.",
          "Integrated visual room-by-room hardware auditing with ITIL incident ticketing.",
        ],
        ar: [
          "إنجاز نظام متكامل لمتابعة الأجهزة والمحولات الشبكية وتراخيص البرمجيات في كافة مرافق الحرم الجامعي.",
          "تحقيق استقرار تشغيلي تام بنمط مزدوج دون أي انهيار للبرنامج عند انقطاع الاتصال بقاعدة بيانات Oracle.",
          "ربط التدقيق الميداني للأجهزة في المختبرات بنظام فرز وتوزيع بلاغات الأعطال في منصة واحدة.",
        ],
      },
      metrics: [
        {
          label: { en: "Architecture", ar: "المعمارية البرمجية" },
          value: "Layered C# .NET",
          description: { en: "Decoupled UI, Services, and Data Access", ar: "فصل كامل بين الواجهات والخدمات والبيانات" },
        },
        {
          label: { en: "Asset Lifecycle", ar: "دورة حياة الأصول" },
          value: "Full ITIL",
          description: { en: "Procurement, assignment, transfer, disposal", ar: "شراء، تخصيص، مناقلة عهد، وإهلاك" },
        },
        {
          label: { en: "Persistence Layer", ar: "طبقة الحفظ" },
          value: "Oracle 10g",
          description: { en: "Relational schema with offline mock mode", ar: "قاعدة بيانات علائقية مع نمط محلي بديل" },
        },
        {
          label: { en: "Verification Status", ar: "حالة التحقق" },
          value: "Verified",
          description: { en: "Owner supplied authentic source project", ar: "مشروع برمجي أصلي معتمد من المالك" },
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. METAALGORITHMLAB (Python Desktop / PyQt6 / SciPy / NumPy)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "proj-02",
    slug: "metaalgorithm-lab",
    categorySlug: "algorithmic-computing",
    title: {
      en: "MetaAlgorithm Lab — Complexity Benchmarking Workstation",
      ar: "مختبر الخوارزميات وتحليل التعقيد الحسابي التجريبي",
    },
    shortDescription: {
      en: "Scientific algorithm benchmarking and empirical asymptotic complexity analysis platform combining PyQt6 visualization, SciPy non-linear regression, and publication-ready LaTeX report generation.",
      ar: "محطة علمية لاختبار الخوارزميات وتحليل التعقيد الحسابي التجريبي باستخدام انحدار SciPy اللاخطي، مع تمثيل بصري متحرك وتصدير تقارير LaTeX الأكاديمية.",
    },
    year: 2024,
    status: "Completed",
    verificationStatus: "VERIFIED_OWNER_DATA",
    featured: true,
    demoType: "interactive_simulation",
    demoUrl: "/projects/metaalgorithm-lab/demo",
    githubUrl: "https://github.com/Abdulghani780/MetaAlgorithmLab",
    technologies: [
      TECHNOLOGIES.python,
      TECHNOLOGIES.pyqt6,
      TECHNOLOGIES.scipy,
      TECHNOLOGIES.matplotlib,
      TECHNOLOGIES.latex,
    ],
    caseStudy: {
      problem: {
        en: "Computer science researchers and software engineers often rely on theoretical worst-case Big-O bounds that fail to reflect actual CPU cache behavior, branch prediction, and memory hierarchy trade-offs across variable input distributions.",
        ar: "يعتمد الباحثون ومهندسو البرمجيات غالباً على الحسابات النظرية للتعقيد الحسابي التي تتجاهل التأثير الحقيقي للذاكرة المخبأة وتوقع المسارات في المعالجات الحديثة عند تغير توزيع البيانات.",
      },
      solution: {
        en: "Engineered an autonomous scientific workstation in Python 3.10+ and PyQt6 that executes 14 sorting, searching, and graph algorithms across customizable input distributions, performing non-linear regression with SciPy to empirically determine complexity curves (O(1) to O(2ⁿ)) with R² confidence scores.",
        ar: "بناء محطة علمية برمجية باستخدام Python 3.10+ وPyQt6 تختبر ١٤ خوارزمية فرز وبحث ومطابقة بيانية، وتطبق الانحدار اللاخطي بواسطة SciPy لتحديد منحنى التعقيد الحسابي تجريبياً مع درجات الثقة الإحصائية R².",
      },
      architectureFlow: [
        {
          step: "01",
          name: { en: "Algorithm Benchmark Harness", ar: "حاضنة قياس الخوارزميات" },
          desc: { en: "Isolated execution runner instrumenting comparisons, memory allocations, and high-resolution timing.", ar: "منصة تنفيذ معزولة تحصي بدقة عدد المقارنات وعمليات التبديل وأزمنة التنفيذ الميكروثانية." },
        },
        {
          step: "02",
          name: { en: "Empirical Regression Engine", ar: "محرك الانحدار اللاخطي" },
          desc: { en: "SciPy curve fitting against empirical data points to statistically identify asymptotic Big-O class.", ar: "تطبيق نماذج المنحنيات الرياضية على البيانات المقاسة إحصائياً لتحديد رتبة Big-O بدقة." },
        },
        {
          step: "03",
          name: { en: "PyQt6 Canvas & LaTeX Exporter", ar: "لوحة PyQt6 ومولد تقارير LaTeX" },
          desc: { en: "Multi-tab scientific GUI rendering step-by-step animations and compiling publication-grade PDF reports.", ar: "واجهة رسومية علمية متعددة التبويبات تعرض التنفيذ خطوة بخطوة وتصدر تقارير PDF بصيغ رياضية محكمة." },
        },
      ],
      subsystems: [
        {
          id: "sub-1",
          title: { en: "Step-by-Step Sorting Visualizer", ar: "التمثيل البصري للفرز خطوة بخطوة" },
          desc: { en: "Interactive array bar chart tracking active comparisons, pivot indices, and memory swaps.", ar: "مخطط أعمدة تفاعلي يوضح المقارنات الحالية ومواقع المحاور وعمليات التبديل في الذاكرة." },
          tag: "VISUALIZER",
        },
        {
          id: "sub-2",
          title: { en: "Non-Linear Regression Fitter", ar: "مطابق منحنيات الانحدار" },
          desc: { en: "Empirical curve fitting determining O(1), O(log n), O(n), O(n log n), O(n²), and O(2ⁿ) with R² confidence.", ar: "خوارزمية مطابقة المنحنيات لتحديد درجة التعقيد التجريبي مع نسبة الثقة الإحصائية." },
          tag: "REGRESSION",
        },
        {
          id: "sub-3",
          title: { en: "Code Studio Sandbox", ar: "مختبر الأكواد التجريبي" },
          desc: { en: "Syntax-highlighted sandbox for testing custom Python algorithm implementations against benchmark distributions.", ar: "بيئة تحرير واختبار تتيح للمستخدم إدخال خوارزميات مخصصة وفحص أدائها على بيانات عشوائية ومرتبة." },
          tag: "SANDBOX",
        },
      ],
      challenges: {
        en: [
          "Decoupling GUI frame rendering from long-running benchmark suites to prevent UI freezing during large N values.",
          "Filtering system-level background scheduler noise to maintain tight empirical regression confidence intervals.",
        ],
        ar: [
          "فصل خيوط المعالجة الثقيلة لقياس الأداء عن خيط الواجهة الرسومية في PyQt6 لمنع تجميد الواجهة مع المدخلات الضخمة.",
          "عزل التشويش الناتج عن مقاطعات نظام التشغيل للحصول على نتائج تجريبية متناسقة إحصائياً.",
        ],
      },
      results: {
        en: [
          "Verified complexity detection across 14 canonical sorting, searching, and graph algorithms.",
          "Smooth graphical visualization with forward/backward step controls and speed adjustment.",
          "Automated LaTeX mathematical formula compilation and scientific PDF export.",
        ],
        ar: [
          "تحقق عملي دقيق لمنحنيات التعقيد الحسابي لـ ١٤ خوارزمية فرز وبحث بياني.",
          "عرض بصري تفاعلي سلس مع أزرار التحكم بالخطوات وسرعة التحريك.",
          "توليد آلي لصيغ LaTeX الرياضية وتصدير تقارير بحثية محكمة بصيغة PDF.",
        ],
      },
      metrics: [
        {
          label: { en: "Algorithms Suite", ar: "حزمة الخوارزميات" },
          value: "14 Algorithms",
          description: { en: "Sorting, searching, and graph heuristics", ar: "فرز وبحث ومطابقة مسارات بيانية" },
        },
        {
          label: { en: "Regression Model", ar: "نموذج الانحدار" },
          value: "SciPy Non-Linear",
          description: { en: "Statistical R² asymptotic curve fitting", ar: "انحدار لاخطي وحساب معامل الثقة R²" },
        },
        {
          label: { en: "GUI Architecture", ar: "معمارية الواجهات" },
          value: "PyQt6 & Canvas",
          description: { en: "Multi-threaded scientific desktop studio", ar: "واجهة علمية متعددة الخيوط والتبويبات" },
        },
        {
          label: { en: "Verification Status", ar: "حالة التحقق" },
          value: "Verified",
          description: { en: "Owner supplied authentic source project", ar: "مشروع برمجي أصلي معتمد من المالك" },
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. NOVATECH (Web Application / HTML5 / CSS3 / Vanilla JS)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "proj-03",
    slug: "novatech",
    categorySlug: "web-platforms",
    title: {
      en: "NOVA TECH — Cyber Gadgets & Smart Tech Store",
      ar: "نوفا تيك | متجر الأجهزة والتقنيات الذكية المستقبلية",
    },
    shortDescription: {
      en: "Modern cybernetic smart gadgets e-commerce web application featuring dual dark/light theming, instant multi-category filtering, offcanvas cart drawer, live deal countdown, and checkout invoice simulation.",
      ar: "متجر إلكتروني مستقبلي للأجهزة والتقنيات الذكية، يتميز بمظهر داكن وفاتح متطور، وسلة مشتريات جانبية بحساب فوري للضريبة، وبحث حي، ونظام إصدار فواتير الطلبات.",
    },
    year: 2026,
    status: "Completed",
    verificationStatus: "VERIFIED_OWNER_DATA",
    featured: true,
    demoType: "interactive_simulation",
    demoUrl: "/projects/novatech/demo",
    githubUrl: "https://github.com/Abdulghani780/NovaTech",
    technologies: [
      TECHNOLOGIES.html5,
      TECHNOLOGIES.css3,
      TECHNOLOGIES.javascript,
      TECHNOLOGIES.restapi,
    ],
    caseStudy: {
      problem: {
        en: "Modern technology consumers expect instant product discovery, cybernetic aesthetics, dark/light theme versatility, and transparent tax and shipping calculations without the latency of heavy web framework bundles.",
        ar: "يتطلع المستهلكون في متاجر التقنية الحديثة إلى تجربة تصفح فائقة السرعة بتصاميم مستقبلية، مع دعم كامل للوضع الداكن والفاتح، وحسابات فورية للضريبة والشحن دون بطء حزم الأطر الثقيلة.",
      },
      solution: {
        en: "Engineered a high-conversion e-commerce storefront using pure Vanilla JavaScript ES6 and custom responsive CSS3, featuring an offcanvas cart drawer with 15% VAT and free-shipping progress indicators, client-side search modal, and simulated invoice generation.",
        ar: "تطوير متجر إلكتروني متكامل وعالي الأداء باستخدام Vanilla JavaScript ES6 وتنسيقات CSS3 المخصصة، يضم سلة تسوق جانبية بحساب ضريبة ١٥٪ وشريط الشحن المجاني، وبحثاً فورياً، ونظام توليد فواتير الشراء الرقمية.",
      },
      architectureFlow: [
        {
          step: "01",
          name: { en: "Cybernetic Layout & Dual Theming", ar: "الهيكلية البصرية والمظهر المزدوج" },
          desc: { en: "Semantic HTML5 RTL layout with CSS custom properties driving instant dark and light mode switching.", ar: "هيكل HTML5 عربي يدعم RTL مع متغيرات CSS للتبديل الفوري والسلس بين المظهرين الداكن والفاتح." },
        },
        {
          step: "02",
          name: { en: "Catalog Filter & Modal Search", ar: "تصفية المنتجات والبحث الفوري" },
          desc: { en: "Real-time client-side search and category filtering across audio, wearables, gaming, and smart home items.", ar: "محرك تصفية فوري حسب التصنيف ونافذة بحث حي تطابق أسماء ومواصفات الأجهزة الذكية." },
        },
        {
          step: "03",
          name: { en: "Cart Engine & Invoice Simulator", ar: "محرك السلة ومحاكاة الفواتير" },
          desc: { en: "Offcanvas cart managing quantity steppers, VAT calculations, free shipping threshold, and structured invoice dispatch.", ar: "سلة مشتريات جانبية تدير الكميات، وتحسب ضريبة ١٥٪، ومؤشر الشحن المجاني، مع إصدار فواتير شراء مرقمة." },
        },
      ],
      subsystems: [
        {
          id: "sub-1",
          title: { en: "Dual-Theme Engine", ar: "محرك المظهر المزدوج (داكن / فاتح)" },
          desc: { en: "Seamless theme toggle persisted in localStorage with cybernetic obsidian and porcelain slate palettes.", ar: "تبديل سلس للمظهر مع حفظ التفضيل محلياً، مصمم بلوحة ألوان سايبرانية فخمة." },
          tag: "THEME_ENGINE",
        },
        {
          id: "sub-2",
          title: { en: "Offcanvas Shopping Cart Drawer", ar: "سلة التسوق الجانبية المنبثقة" },
          desc: { en: "Interactive drawer computing subtotal, 15% VAT, and dynamic progress towards 500 SAR free shipping.", ar: "سلة جانبية تفاعلية تحسب المجموع وضريبة القيمة المضافة ومتبقي الشحن المجاني عند ٥٠٠ ريال." },
          tag: "CART_DRAWER",
        },
        {
          id: "sub-3",
          title: { en: "Deal Countdown & Quick View", ar: "عداد العروض والمعاينة السريعة" },
          desc: { en: "Live 24-hour countdown timer for featured discounts paired with comprehensive technical spec modals.", ar: "عداد تنازلي حي لعروض اليوم مع نوافذ معاينة سريعة تعرض المواصفات التقنية التفصيلية." },
          tag: "DEAL_CLOCK",
        },
      ],
      challenges: {
        en: [
          "Coordinating multi-modal state (cart drawer, search overlay, quick view dialog, invoice modal) with pure Vanilla JavaScript event listeners.",
          "Maintaining complete design consistency between dark and light modes across complex cybernetic glow accents.",
        ],
        ar: [
          "إدارة وتنسيق النوافذ المنبثقة المتعددة (سلة الشراء، نافذة البحث، المعاينة السريعة، الفاتورة) بلغة جافاسكريبت نقية دون تداخل.",
          "الحفاظ على تباين لوني دقيق ومتناسق بين المظهرين الداكن والفاتح مع التوهجات الضوئية السايبرانية.",
        ],
      },
      results: {
        en: [
          "Zero runtime framework overhead resulting in instant page loads and zero bundle delay.",
          "Complete client-side shopping lifecycle from catalog filtering to simulated invoice delivery.",
          "100% responsive layout validated across mobile, tablet, and widescreen viewports.",
        ],
        ar: [
          "أداء فائق واستجابة فورية دون أي تحميل لحزم أطر العمل الخارجية الضخمة.",
          "دورة تسوق متكاملة من جانب العميل تبدأ من تصفح المنتجات وحتى استلام الفاتورة الرقمية.",
          "تصميم متجاوب بالكامل تم التحقق منه على الهواتف والأجهزة اللوحية والشاشات العريضة.",
        ],
      },
      metrics: [
        {
          label: { en: "Framework Overhead", ar: "عبء أطر العمل" },
          value: "0 KB",
          description: { en: "Pure Vanilla HTML5 / CSS3 / ES6 JS", ar: "مبني بلغة جافاسكريبت نقية دون أطر خارجية" },
        },
        {
          label: { en: "Theming Support", ar: "دعم المظهر" },
          value: "Dual Mode",
          description: { en: "Persistent Dark & Light cyber palettes", ar: "مظهر داكن ومظهر فاتح مع حفظ محلي" },
        },
        {
          label: { en: "Storefront Capabilities", ar: "قدرات المتجر" },
          value: "Full Flow",
          description: { en: "Search, wishlist, cart, VAT, invoicing", ar: "بحث، مفضلة، سلة، ضريبة، وفواتير" },
        },
        {
          label: { en: "Verification Status", ar: "حالة التحقق" },
          value: "Verified",
          description: { en: "Owner supplied authentic source project", ar: "مشروع برمجي أصلي معتمد من المالك" },
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. CAFENA (Web Application / HTML5 / CSS3 / Vanilla JS)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "proj-04",
    slug: "cafena",
    categorySlug: "web-platforms",
    title: {
      en: "Cafena Specialty Coffee Roasters",
      ar: "كافينا | تجربة القهوة المختصة الفاخرة",
    },
    shortDescription: {
      en: "Artisanal Arabic specialty coffee e-commerce portal and cultural cafe catalog featuring dynamic cart arithmetic, client-side product filtering, and RTL layout mastery.",
      ar: "منصة تجارة إلكترونية عربية فاخرة للقهوة المختصة ومعدات التحضير، تتميز بحساب فوري لمحتويات السلة، وتصفح متكامل، وتصميم متجاوب بالكامل.",
    },
    year: 2025,
    status: "Completed",
    verificationStatus: "VERIFIED_OWNER_DATA",
    featured: false,
    demoType: "interactive_simulation",
    demoUrl: "/projects/cafena/demo",
    githubUrl: "https://github.com/Abdulghani780/Cafena",
    technologies: [
      TECHNOLOGIES.html5,
      TECHNOLOGIES.css3,
      TECHNOLOGIES.javascript,
    ],
    caseStudy: {
      problem: {
        en: "Specialty coffee roasters require an ultra-fast, culturally authentic Arabic digital storefront that loads with zero framework lag and computes cart adjustments instantly on mobile devices.",
        ar: "تحتاج محامص القهوة المختصة إلى منصة رقمية عربية سريعة وأصيلة تعبر عن ثقافة التحضير وتعمل بسلاسة فائقة على الهواتف دون بطء التحميل.",
      },
      solution: {
        en: "Engineered a pure Vanilla HTML5/CSS3/ES6 web application featuring native Arabic typography (Cairo & Amiri), custom micro-interactions, responsive offcanvas cart drawer, and client-side full-text search.",
        ar: "تطوير تطبيق ويب بلغة جافاسكريبت نقية وتنسيقات CSS مخصصة بالخطوط العربية الأصيلة (Cairo وAmiri)، مع سلة مشتريات تفاعلية وبحث فوري في قائمة المشروبات وحبوب القهوة.",
      },
      architectureFlow: [
        {
          step: "01",
          name: { en: "Semantic Arabic RTL DOM", ar: "الهيكلية الدلالية العربية RTL" },
          desc: { en: "Native RTL HTML5 architecture with Cairo and Amiri typography and responsive flexbox alignment.", ar: "هيكلية HTML5 عربية كاملة بخطوط متناغمة وتنسيقات مرنة متوافقة مع القراءة من اليمين لليسار." },
        },
        {
          step: "02",
          name: { en: "Client-Side Search Filter", ar: "محرك البحث والفلترة المباشر" },
          desc: { en: "Instant string matching across coffee varieties, roasts, and brewing accessories.", ar: "مطابقة نصية فورية لأصناف القهوة والمشروبات الباردة ومحاصيل البن." },
        },
        {
          step: "03",
          name: { en: "In-Memory Shopping Cart", ar: "سلة التسوق في ذاكرة المتصفح" },
          desc: { en: "Dynamic cart drawer calculating total SAR pricing and item quantities with animated toast alerts.", ar: "سلة تسوق ديناميكية تحسب الإجمالي بالريال السعودي مع تنبيهات تفاعلية عند الإضافة." },
        },
      ],
      subsystems: [
        {
          id: "sub-1",
          title: { en: "Interactive Menu & Catalog", ar: "قائمة المشروبات والمحاصيل التفاعلية" },
          desc: { en: "Rich visual product showcase with direct add-to-cart buttons and tasting notes.", ar: "استعراض بصري مميز لأكواب القهوة وحبوب البن مع أزرار الإضافة المباشرة للسلة." },
          tag: "CATALOG",
        },
        {
          id: "sub-2",
          title: { en: "Slide-Out Cart Drawer", ar: "سلة المشتريات المنزلقة" },
          desc: { en: "Offcanvas drawer tracking quantities and real-time total SAR order value.", ar: "نافذة منزلقة لإدارة عناصر السلة والكميات وحساب الإجمالي الفوري." },
          tag: "CART",
        },
        {
          id: "sub-3",
          title: { en: "Culture Blog & Reviews", ar: "مدونة ثقافة القهوة وآراء العملاء" },
          desc: { en: "Editorial section sharing brewing techniques paired with authentic customer review cards.", ar: "قسم تثقيفي لطرق تحضير القهوة المختصة مدعوماً بتقييمات العملاء الموثقة." },
          tag: "CULTURE",
        },
      ],
      challenges: {
        en: [
          "Delivering a luxury cafe feel with smooth animations while strictly relying on pure CSS without external UI frameworks.",
          "Ensuring complete RTL layout symmetry and text balance across varied mobile screen sizes.",
        ],
        ar: [
          "تقديم مظهر فاخر وتأثيرات حركية ناعمة بالاعتماد التام على CSS النقي دون أي أطر واجهات جاهزة.",
          "ضمان تناسق المحاذاة والاتجاهات من اليمين إلى اليسار عبر مختلف مقاسات الهواتف الذكية.",
        ],
      },
      results: {
        en: [
          "Zero framework overhead achieving near-instantaneous mobile page loads.",
          "Seamless client-side shopping cart experience with instant price calculation.",
          "Culturally refined Arabic specialty coffee presentation.",
        ],
        ar: [
          "سرعة تحميل شبه فورية على الهواتف بفضل الاعتماد الكامل على الكود الصافي دون أطر خارجية.",
          "تجربة تسوق سلسة من جانب العميل مع حساب فوري للأسعار وإدارة عناصر السلة.",
          "تصميم بصري عربي راقٍ يبرز جودة وأصالة القهوة المختصة ومعداتها.",
        ],
      },
      metrics: [
        {
          label: { en: "Framework Overhead", ar: "عبء أطر العمل" },
          value: "0 KB",
          description: { en: "Pure HTML5, CSS3, and Vanilla JS", ar: "كود نقي تماماً بدون أي حزم إضافية" },
        },
        {
          label: { en: "Localization", ar: "التعريب والتصميم" },
          value: "100% RTL",
          description: { en: "Native Arabic Cairo & Amiri fonts", ar: "تصميم عربي أصيل بخطوط متناسقة" },
        },
        {
          label: { en: "Cart Arithmetic", ar: "حسابات السلة" },
          value: "Real-Time",
          description: { en: "In-browser price & quantity calculation", ar: "حساب فوري للكميات والإجمالي بالريال" },
        },
        {
          label: { en: "Verification Status", ar: "حالة التحقق" },
          value: "Verified",
          description: { en: "Owner supplied authentic source project", ar: "مشروع برمجي أصلي معتمد من المالك" },
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 5. GP (Web Application / PHP 8 / MySQL 8)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "proj-05",
    slug: "gp",
    categorySlug: "academic-systems",
    title: {
      en: "Graduation Project Management & Proposals Portal",
      ar: "منصة إدارة ومتابعة مشاريع التخرج الجامعية",
    },
    shortDescription: {
      en: "Fullstack university graduation project proposal submission and faculty review portal developed with PHP 8, MySQL 8, role-based authorization, and dynamic project directories.",
      ar: "منصة ويب متكاملة لتقديم ومتابعة واعتماد مقترحات مشاريع التخرج الجامعية، مبنية بتقنيات PHP 8 وقواعد بيانات MySQL 8 مع صلاحيات مخصصة للطلاب والمشرفين.",
    },
    year: 2024,
    status: "Completed",
    verificationStatus: "VERIFIED_OWNER_DATA",
    featured: false,
    demoType: "interactive_simulation",
    demoUrl: "/projects/gp/demo",
    githubUrl: "https://github.com/Abdulghani780/Graduation-Project-Management-Portal",
    technologies: [
      TECHNOLOGIES.php,
      TECHNOLOGIES.mysql,
      TECHNOLOGIES.sql,
      TECHNOLOGIES.html5,
      TECHNOLOGIES.javascript,
    ],
    caseStudy: {
      problem: {
        en: "Academic department committees struggle with manual graduation project proposal tracking, topic duplication, unorganized supervisor reviews, and fragmented project submission archives.",
        ar: "تواجه لجان الأقسام الأكاديمية صعوبات كبيرة في التتبع اليدوي لمقترحات مشاريع التخرج، وتكرار عناوين الأبحاث، وعشوائية مراجعات المشرفين، وغياب أرشيف منظم للإنتاج الطلابي.",
      },
      solution: {
        en: "Developed a centralized academic web platform with PHP 8 and MySQL 8 featuring role-based authentication, student proposal submission forms, supervisor review queues, and category-filtered project directories.",
        ar: "بناء بوابة أكاديمية موحدة باستخدام PHP 8 وقواعد بيانات MySQL 8 توفر تسجيلاً آمناً للطلاب، ومساراً منظماً لرفع مقترحات المشاريع، ولوحة تحكم للمشرفين لتقييم واعتماد المقترحات، مع دليل منظم للمشاريع المجازة.",
      },
      architectureFlow: [
        {
          step: "01",
          name: { en: "Authentication & Role Guard", ar: "المصادقة والتحقق من الأدوار" },
          desc: { en: "Session management distinguishing student researchers from department faculty reviewers.", ar: "إدارة جلسات المستخدمين للتمييز بين حسابات الطلاب واللجان الأكاديمية المشرفة." },
        },
        {
          step: "02",
          name: { en: "Proposal Submission Workflow", ar: "مسار تقديم مقترحات المشاريع" },
          desc: { en: "Structured forms capturing project abstracts, technology stacks, and team member assignments.", ar: "نماذج منظمة لتوثيق ملخصات المشاريع، والتقنيات المستخدمة، وأعضاء الفرق البحثية." },
        },
        {
          step: "03",
          name: { en: "Relational Persistence & Moderation", ar: "الحفظ العلائقي ولوحة المراجعة" },
          desc: { en: "Normalized MySQL 8 tables managing proposal statuses (Pending, Approved, Rejected) and service requests.", ar: "جداول علائقية منظمة في MySQL 8 تدير حالات المقترحات (قيد الانتظار، معتمد، مرفوض) وملاحظات المشرفين." },
        },
      ],
      subsystems: [
        {
          id: "sub-1",
          title: { en: "Role-Based Access Control", ar: "نظام الصلاحيات المخصص" },
          desc: { en: "Differentiated student proposal submission views versus faculty evaluation dashboards.", ar: "واجهات مخصصة للطلاب لرفع المقترحات مقابل لوحات تحكم للأكاديميين للمراجعة والاعتماد." },
          tag: "RBAC",
        },
        {
          id: "sub-2",
          title: { en: "Academic Project Directory", ar: "دليل المشاريع الأكاديمية" },
          desc: { en: "Filterable repository showcasing approved graduation projects across computing disciplines.", ar: "دليل مصنف يستعرض مشاريع التخرج المعتمدة حسب التخصصات والمجالات التقنية." },
          tag: "DIRECTORY",
        },
        {
          id: "sub-3",
          title: { en: "Service Request Engine", ar: "محرك طلبات الخدمات الأكاديمية" },
          desc: { en: "Integrated workflow for requesting equipment, advising sessions, and laboratory resources.", ar: "مسار متكامل لطلب استشارات المشرفين وموارد المعامل لدعم إنجاز المشاريع." },
          tag: "REQUESTS",
        },
      ],
      challenges: {
        en: [
          "Designing normalized relational schema tables to accommodate flexible multi-student teams without data redundancy.",
          "Securing PHP session handlers and form inputs against SQL injection and cross-site scripting vulnerabilities.",
        ],
        ar: [
          "تصميم جداول قواعد بيانات علائقية مرنة تدعم فرق العمل متعددة الطلاب دون تكرار في السجلات.",
          "تأمين جلسات PHP ومعالجة مدخلات النماذج لحماية النظام من ثغرات الحقن وهجمات XSS.",
        ],
      },
      results: {
        en: [
          "Centralized the end-to-end proposal lifecycle from submission to faculty sign-off.",
          "Structured relational MySQL schema with comprehensive migration scripts (`database_setup.sql`).",
          "Clean separation of student contributor actions from administrative moderation tasks.",
        ],
        ar: [
          "أتمتة وتوحيد دورة حياة مقترحات التخرج من مرحلة التقديم الأولي وحتى الاعتماد النهائي.",
          "بناء هيكلية علائقية متينة في MySQL 8 مع ملفات إنشاء الجداول والبيانات الأولية.",
          "فصل إجرائي دقيق بين صلاحيات الطلاب في التقديم وصلاحيات اللجان في التحكيم.",
        ],
      },
      metrics: [
        {
          label: { en: "Backend Stack", ar: "التقنيات الخلفية" },
          value: "PHP 8 & MySQL",
          description: { en: "Procedural & OOP service scripts", ar: "برمجة كائنية وإجرائية مع اتصال PDO/mysqli" },
        },
        {
          label: { en: "Database Design", ar: "تصميم البيانات" },
          value: "Relational Schema",
          description: { en: "Normalized tables with primary/foreign keys", ar: "جداول منظمة بمفاتيح أساسية وخارجية" },
        },
        {
          label: { en: "Authorization Model", ar: "نموذج الصلاحيات" },
          value: "Role-Based (RBAC)",
          description: { en: "Student and Faculty isolation", ar: "فصل كامل بين صلاحيات الطلاب والمشرفين" },
        },
        {
          label: { en: "Verification Status", ar: "حالة التحقق" },
          value: "Verified",
          description: { en: "Owner supplied authentic source project", ar: "مشروع برمجي أصلي معتمد من المالك" },
        },
      ],
    },
  },
];
