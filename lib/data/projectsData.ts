import { Project, ProjectCategory, Technology } from "@/types/project";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    id: "cat-1",
    slug: "desktop-systems",
    name: {
      en: "Enterprise Desktop & ERP",
      ar: "أنظمة سطح المكتب والمؤسسات",
    },
    displayOrder: 1,
  },
  {
    id: "cat-2",
    slug: "cloud-infrastructure",
    name: {
      en: "Network & Infrastructure",
      ar: "الشبكات والبنية التحتية",
    },
    displayOrder: 2,
  },
  {
    id: "cat-3",
    slug: "low-latency",
    name: {
      en: "Algorithmic Computing",
      ar: "الحوسبة الخوارزمية والأداء",
    },
    displayOrder: 3,
  },
  {
    id: "cat-4",
    slug: "distributed-systems",
    name: {
      en: "Distributed & Web Platforms",
      ar: "المنصات الموزعة وتطبيقات الويب",
    },
    displayOrder: 4,
  },
];

export const TECHNOLOGIES: Record<string, Technology> = {
  csharp: { id: "tech-csharp", name: "C# .NET", category: "Language" },
  winforms: { id: "tech-winforms", name: "Windows Forms", category: "Framework" },
  sqlserver: { id: "tech-sqlserver", name: "SQL Server", category: "Database" },
  acid: { id: "tech-acid", name: "ACID Ledger Cache", category: "Protocol" },
  python: { id: "tech-python", name: "Python 3", category: "Language" },
  sqlite: { id: "tech-sqlite", name: "SQLite", category: "Database" },
  networking: { id: "tech-net", name: "Network Telemetry", category: "Protocol" },
  cpp: { id: "tech-cpp", name: "C++", category: "Language" },
  algorithms: { id: "tech-algo", name: "Complexity Benchmarking", category: "Tool" },
  nextjs: { id: "tech-nextjs", name: "Next.js 15", category: "Framework" },
  react: { id: "tech-react", name: "React 19", category: "Framework" },
  typescript: { id: "tech-ts", name: "TypeScript", category: "Language" },
  tailwind: { id: "tech-tw", name: "Tailwind CSS", category: "Framework" },
  restapi: { id: "tech-rest", name: "RESTful Architecture", category: "Protocol" },
  raft: { id: "tech-raft", name: "Raft Protocol", category: "Protocol" },
  grpc: { id: "tech-grpc", name: "gRPC / HTTP/3", category: "Protocol" },
  tla: { id: "tech-tla", name: "TLA+ Formal Specs", category: "Tool" },
};

export const PROJECTS: Project[] = [
  {
    id: "proj-01",
    slug: "yusra",
    categorySlug: "desktop-systems",
    title: {
      en: "Yusra Enterprise Resource Ledger",
      ar: "نظام يسرى لإدارة الموارد والمحاسبة",
    },
    shortDescription: {
      en: "Desktop accounting, journal ledger, and inventory system developed with C# WinForms, SQL Server, and offline-resilient transactions.",
      ar: "نظام محاسبي مكتبي متكامل لإدارة القيود اليومية والفواتير والمخزون مبني بتقنيات C# WinForms وقواعد بيانات SQL Server.",
    },
    year: 2024,
    status: "Completed",
    verificationStatus: "VERIFIED_OWNER_DATA",
    featured: true,
    demoType: "interactive_simulation",
    demoUrl: "/projects/yusra/demo",
    technologies: [
      TECHNOLOGIES.csharp,
      TECHNOLOGIES.winforms,
      TECHNOLOGIES.sqlserver,
      TECHNOLOGIES.acid,
    ],
    caseStudy: {
      problem: {
        en: "Commercial retail operations in environments with unstable internet connectivity experience critical operational halts, unsynchronized ledger accounts, and transaction discrepancies during network dropouts.",
        ar: "تواجه المؤسسات التجارية في بيئات الاتصال الشبكي المتقطع تعطلاً كبيراً في تسجيل العمليات اليومية وتضارباً في أرصدة الحسابات ومطابقة المخزون.",
      },
      solution: {
        en: "Engineered a hardened Windows desktop enterprise application using C# WinForms with strict double-entry balancing guards, local transactional caching, and deterministic SQL Server database synchronization.",
        ar: "تطوير تطبيق مكتبي مؤسسي لنظام ويندوز باستخدام C# WinForms مع تطبيق حازم لمبادئ القيد المزدوج، وتخزين محلي مؤقت متوافق مع معايير الأمان ومزامنة حتمية مع SQL Server.",
      },
      architectureFlow: [
        {
          step: "01",
          name: { en: "WinForms Presentation Layer", ar: "طبقة واجهة WinForms" },
          desc: { en: "High-throughput data entry grids with real-time debit/credit equality checks.", ar: "جداول إدخال بيانات عالية السرعة مع تدقيق فوري لتطابق طرفي القيد المحاسبي." },
        },
        {
          step: "02",
          name: { en: "Double-Entry Validation Guard", ar: "حارس التحقق من القيد المزدوج" },
          desc: { en: "Strict mathematical assertion ensuring Debit == Credit before persistence.", ar: "تحقق حسابي صارم يضمن تطابق المدين مع الدائن قبل الحفظ في السجل." },
        },
        {
          step: "03",
          name: { en: "Local Cache & Transaction Manager", ar: "مدير المعاملات والتخزين المحلي" },
          desc: { en: "ACID-compliant storage queue shielding point-of-sale entries from network outages.", ar: "طابور عمليات متوافق مع معايير ACID يعزل نقاط البيع عن تقلبات الشبكة." },
        },
        {
          step: "04",
          name: { en: "SQL Server Enterprise Persistence", ar: "حفظ البيانات في SQL Server" },
          desc: { en: "Relational foreign key constraints and automated journal audit trails.", ar: "قيود علائقية صارمة وسجلات تدقيق محاسبي آلية تمنع التعديل غير الموثق." },
        },
      ],
      subsystems: [
        {
          id: "sub-1",
          title: { en: "Mathematical Invariant Guard", ar: "حارس الثوابت الرياضية" },
          desc: { en: "Blocks asynchronous commits if ledger balance leaves zero-sum state.", ar: "يمنع حفظ أي عملية تخل بميزان الصفر المحاسبي العام." },
          tag: "INTEGRITY",
        },
        {
          id: "sub-2",
          title: { en: "Customer Invoice & Billing Engine", ar: "محرك الفواتير وحسابات العملاء" },
          desc: { en: "Automated invoice numbering, tax calculation, and receipt printing layouts.", ar: "ترقيم آلي للفواتير، واحتساب الضرائب وتجهيز تخطيطات الطباعة المباشرة." },
          tag: "BILLING",
        },
        {
          id: "sub-3",
          title: { en: "Offline Journal Queue", ar: "طابور القيود غير المتصلة" },
          desc: { en: "Maintains sequential log numbers locally until server connection restores.", ar: "الاحتفاظ بتسلسل العمليات محلياً حتى استعادة الاتصال بالخادم المركزي." },
          tag: "RESILIENCE",
        },
      ],
      challenges: {
        en: [
          "Enforcing zero-tolerance accounting balance rules across rapid barcode scanning inputs.",
          "Ensuring responsive UI rendering in WinForms during heavy historical ledger queries.",
          "Preventing invoice sequence collisions across multi-station local registers.",
        ],
        ar: [
          "تطبيق قواعد التوازن المحاسبي الصارمة مع سرعة إدخال الباركود المتتالية.",
          "ضمان استجابة وسلاسة واجهة WinForms أثناء الاستعلام عن السجلات التاريخية الضخمة.",
          "منع تكرار أو تصادم تسلسل الفواتير بين أجهزة المبيعات المتعددة.",
        ],
      },
      results: {
        en: [
          "Demonstrated 100% balance integrity across all double-entry journal operations.",
          "Immediate point-of-sale response independent of external network availability.",
          "Verified end-to-end invoice generation and printable reporting workflow.",
        ],
        ar: [
          "تحقيق سلامة محاسبية بنسبة ١٠٠٪ في كافة قيود اليومية المزدوجة.",
          "استجابة فورية لنقاط البيع دون أي اعتمادية على اتصال الشبكة الخارجي.",
          "سير عمل متكامل ومثبت لإصدار الفواتير وتقارير الحسابات القابلة للطباعة.",
        ],
      },
      metrics: [
        {
          label: { en: "Ledger Integrity", ar: "سلامة القيود" },
          value: "100%",
          description: { en: "Zero-sum balance invariant enforced", ar: "تطبيق صارم لميزان الصفر المحاسبي" },
        },
        {
          label: { en: "Offline Availability", ar: "الجاهزية دون اتصال" },
          value: "Autonomous",
          description: { en: "Full local POS operations without WAN", ar: "عمليات بيع محلية كاملة دون شبكة" },
        },
        {
          label: { en: "Persistence Architecture", ar: "معمارية الحفظ" },
          value: "SQL Server",
          description: { en: "Relational constraints & audit trails", ar: "قيود علائقية وتدقيق محاسبي" },
        },
        {
          label: { en: "Verification Status", ar: "حالة التحقق" },
          value: "Verified",
          description: { en: "Owner supplied core software system", ar: "نظام برمجي معتمد من المالك" },
        },
      ],
    },
  },
  {
    id: "proj-02",
    slug: "campus-it-tracker",
    categorySlug: "cloud-infrastructure",
    title: {
      en: "Campus IT Infrastructure Tracker",
      ar: "نظام تتبع وإدارة البنية التحتية لشبكات الحرم الجامعي",
    },
    shortDescription: {
      en: "Campus network topology visualizer and IT asset incident tracking dashboard monitoring switches, routers, and lab computing nodes.",
      ar: "منصة لرصد طوبولوجيا شبكات الحرم الجامعي وإدارة بلاغات الدعم الفني للأجهزة والمحولات والخوادم.",
    },
    year: 2024,
    status: "Completed",
    verificationStatus: "VERIFIED_OWNER_DATA",
    featured: true,
    demoType: "interactive_simulation",
    demoUrl: "/projects/campus-it-tracker/demo",
    technologies: [
      TECHNOLOGIES.python,
      TECHNOLOGIES.sqlite,
      TECHNOLOGIES.networking,
      TECHNOLOGIES.restapi,
    ],
    caseStudy: {
      problem: {
        en: "Educational campuses operating hundreds of distributed networking switches and computer labs lack unified real-time visibility into link status, resulting in delayed incident responses during critical academic testing.",
        ar: "تواجه المجمعات الجامعية التي تضم مئات المحولات الشبكية ومختبرات الحاسوب صعوبة في الرصد الفوري لحالة الأجهزة مما يؤخر الاستجابة للأعطال أثناء الفترات الدراسية والاختبارات.",
      },
      solution: {
        en: "Designed a centralized infrastructure tracker combining dynamic network node status polling, latency tracking, and a streamlined incident ticketing pipeline.",
        ar: "بناء منصة مركزية تجمع بين الرصد الفوري لحالة عقد الشبكة وفحص الاستجابة مع نظام متكامل لإدارة ومعالجة بلاغات الأعطال.",
      },
      architectureFlow: [
        {
          step: "01",
          name: { en: "Node Telemetry Poller", ar: "جامع بيانات حالة العقد" },
          desc: { en: "Periodic ICMP/SNMP status checks across campus network zones.", ar: "فحص دوري لحالة الأجهزة عبر مناطق الحرم الجامعي المختلفة." },
        },
        {
          step: "02",
          name: { en: "Topology Correlation Engine", ar: "محرك ربط الطوبولوجيا" },
          desc: { en: "Maps child switch outages to upstream core router status to prevent alert storms.", ar: "ربط أعطال الأجهزة الفرعية بالمحول الرئيسي لمنع تكرار التنبيهات." },
        },
        {
          step: "03",
          name: { en: "Incident Dispatching", ar: "إدارة وتوزيع البلاغات" },
          desc: { en: "Automated ticket categorization by urgency level and location.", ar: "تصنيف آلي لبلاغات الأعطال بحسب الأولوية والموقع الجغرافي." },
        },
      ],
      subsystems: [
        {
          id: "sub-1",
          title: { en: "Topology Node Inspector", ar: "مستكشف عقد الطوبولوجيا" },
          desc: { en: "Interactive tree layout visualizing Core, Distribution, and Edge layers.", ar: "مخطط شجري تفاعلي يعرض طبقات الشبكة المركزية والتوزيعية والطرفية." },
          tag: "TOPOLOGY",
        },
        {
          id: "sub-2",
          title: { en: "Incident Triage Workflow", ar: "مسار فرز البلاغات" },
          desc: { en: "Tracks incident lifecycle from detection to technician sign-off.", ar: "متابعة دورة حياة البلاغ من لحظة الرصد وحتى الإغلاق والاعتماد." },
          tag: "HELPDESK",
        },
      ],
      challenges: {
        en: [
          "Presenting a clear visual representation of deeply nested campus network hierarchies.",
          "Preventing ticket duplication when a root distribution switch loses power.",
        ],
        ar: [
          "تقديم تمثيل بصري واضح وبديهي لهيكلية الشبكة الممتدة عبر مبانٍ متعددة.",
          "منع تكرار بلاغات الأعطال عند انقطاع الكهرباء عن المحول الرئيسي للمبنى.",
        ],
      },
      results: {
        en: [
          "Demonstrated clear root-cause isolation across multi-building topology layouts.",
          "Streamlined incident reporting with structured severity levels and status updates.",
        ],
        ar: [
          "إثبات دقة عزل الأسباب الجذرية للأعطال عبر مخططات الشبكة المترابطة.",
          "تبسيط تسجيل وتحديث بلاغات الدعم الفني بمستويات أولوية واضحة.",
        ],
      },
      metrics: [
        {
          label: { en: "Topology Hierarchy", ar: "مستويات الهيكلية" },
          value: "3-Tier",
          description: { en: "Core, Distribution, and Edge layers", ar: "طبقة مركزية وتوزيعية وطرفية" },
        },
        {
          label: { en: "Incident Tracking", ar: "إدارة البلاغات" },
          value: "End-to-End",
          description: { en: "Creation, triage, and resolution lifecycle", ar: "دورة معالجة شاملة من الفرز للحل" },
        },
        {
          label: { en: "Verification Status", ar: "حالة التحقق" },
          value: "Verified",
          description: { en: "Owner supplied project architecture", ar: "نظام معتمد من المالك" },
        },
      ],
    },
  },
  {
    id: "proj-03",
    slug: "metaalgorithm-lab",
    categorySlug: "low-latency",
    title: {
      en: "MetaAlgorithm Lab",
      ar: "مختبر الخوارزميات وتحليل التعقيد الحسابي",
    },
    shortDescription: {
      en: "Algorithmic benchmark testbed and interactive visualizer analyzing sorting efficiency, graph traversal heuristics, and memory trade-offs.",
      ar: "منصة لاختبار وتحليل كفاءة الخوارزميات وعرض آليات الفرز والمطابقة البيانية وحساب التعقيد الزمني.",
    },
    year: 2024,
    status: "Completed",
    verificationStatus: "VERIFIED_OWNER_DATA",
    featured: true,
    demoType: "interactive_simulation",
    demoUrl: "/projects/metaalgorithm-lab/demo",
    technologies: [
      TECHNOLOGIES.cpp,
      TECHNOLOGIES.python,
      TECHNOLOGIES.algorithms,
    ],
    caseStudy: {
      problem: {
        en: "Abstract theoretical Big-O notation often fails to capture real cache locality, comparison counts, and memory swap costs on modern computing architectures.",
        ar: "غالباً ما يعجز التحليل النظري الصرف لمصطلح Big-O عن إظهار التكاليف الحقيقية لحركة البيانات في الكاش وتكرار المقارنات وتبديل المصفوفات.",
      },
      solution: {
        en: "Created an interactive algorithmic laboratory that runs real sorting routines step-by-step in the browser, tracking comparisons, swaps, and relative execution times.",
        ar: "تطوير مختبر خوارزمي تفاعلي ينفذ خوارزميات الفرز الحقيقية خطوة بخطوة في المتصفح مع رصد دقيق للمقارنات والتبديلات الزمنية.",
      },
      architectureFlow: [
        {
          step: "01",
          name: { en: "Array Generator", ar: "مولد مصفوفات البيانات" },
          desc: { en: "Generates randomized, reverse-sorted, or nearly-sorted datasets.", ar: "توليد مجموعات بيانات عشوائية أو معكوسة أو شبه مرتبة لاختبار الحالات المختلفة." },
        },
        {
          step: "02",
          name: { en: "Step-by-Step Iterator", ar: "مكرر الخطوات الحسابية" },
          desc: { en: "Captures pointer mutations at each comparison without blocking the browser thread.", ar: "تسجيل حركة المؤشرات عند كل مقارنة دون تجميد واجهة المستخدم." },
        },
        {
          step: "03",
          name: { en: "Telemetry Metrics HUD", ar: "شاشة رصد المقاييس الحسابية" },
          desc: { en: "Displays live comparisons, swaps, and asymptotic complexity boundaries.", ar: "عرض فوري لعدد المقارنات وعمليات التبديل وحدود التعقيد التقاربي." },
        },
      ],
      subsystems: [
        {
          id: "sub-1",
          title: { en: "Sorting Benchmark Suite", ar: "حزمة اختبار الفرز" },
          desc: { en: "Comparative execution of QuickSort, MergeSort, BubbleSort, and InsertionSort.", ar: "تنفيذ مقارن لخوارزميات الترتيب السريع والدمج والفقاعي والإدراج." },
          tag: "SORTING",
        },
        {
          id: "sub-2",
          title: { en: "Heuristic Visualizer", ar: "العارض البصري الاستدلالي" },
          desc: { en: "Color-coded bar heights illustrating partition pivots and active indices.", ar: "أعمدة ملونة توضح نقاط الارتكاز والمؤشرات النشطة لحظياً." },
          tag: "VISUAL",
        },
      ],
      challenges: {
        en: [
          "Building an interruptible, pauseable generator loop for animated algorithm steps.",
          "Accurately measuring browser execution timing without DOM rendering distortion.",
        ],
        ar: [
          "بناء حلقة توليد برمجية قابلة للإيقاف المؤقت لعرض خطوات الخوارزمية بشكل تفاعلي.",
          "قياس زمن التنفيذ بدقة دون التأثر بتأخير معالجة عناصر واجهة الويب.",
        ],
      },
      results: {
        en: [
          "Interactive visual demonstration of O(n log n) versus O(n²) behavioral divergence.",
          "Accurate counting of elementary comparison and swap operations.",
        ],
        ar: [
          "عرض بصري تفاعلي يوضح الفارق بين سلوك O(n log n) وسلوك O(n²).",
          "إحصاء دقيق لعدد المقارنات والتبديلات الأولية لكل خوارزمية.",
        ],
      },
      metrics: [
        {
          label: { en: "Algorithms Included", ar: "الخوارزميات المشمولة" },
          value: "4 Classes",
          description: { en: "QuickSort, MergeSort, Bubble, Insertion", ar: "الترتيب السريع، الدمج، الفقاعي، الإدراج" },
        },
        {
          label: { en: "Execution Model", ar: "نموذج التنفيذ" },
          value: "Real Client Logic",
          description: { en: "True step-by-step in-browser computation", ar: "معالجة حقيقية خطوة بخطوة في المتصفح" },
        },
        {
          label: { en: "Verification Status", ar: "حالة التحقق" },
          value: "Verified",
          description: { en: "Owner supplied project", ar: "مشروع معتمد من المالك" },
        },
      ],
    },
  },
  {
    id: "proj-04",
    slug: "nexora-tech",
    categorySlug: "distributed-systems",
    title: {
      en: "Nexora Tech Platform",
      ar: "منصة نكسورا تك للحلول التقنية والبرمجية",
    },
    shortDescription: {
      en: "Modern digital technology solutions and enterprise software showcase platform built with Next.js and high-performance frontend architecture.",
      ar: "منصة رقمية متطورة للحلول التقنية والخدمات البرمجية المؤسسية مبنية بأحدث تقنيات Next.js ومعمارية الواجهات السريعة.",
    },
    year: 2024,
    status: "Completed",
    verificationStatus: "VERIFIED_OWNER_DATA",
    featured: true,
    demoType: "interactive_simulation",
    demoUrl: "/projects/nexora-tech/demo",
    technologies: [
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.react,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.tailwind,
    ],
    caseStudy: {
      problem: {
        en: "Enterprise service organizations need digital portals that clearly present complex capabilities while maintaining premier loading speeds, brand distinction, and mobile responsiveness.",
        ar: "تحتاج الشركات التقنية المؤسسية إلى واجهات رقمية تبرز كفاءاتها التقنية مع الحفاظ على سرعات تحميل فائقة وتميز بصري وتوافق تام مع الهواتف.",
      },
      solution: {
        en: "Engineered a luxury corporate tech platform utilizing React Server Components, Tailwind token architecture, and fluid responsive layouts.",
        ar: "تطوير منصة تقنية مؤسسية تعتمد على مكونات خادم React ومعمارية رموز Tailwind وتخطيطات تفاعلية انسيابية.",
      },
      architectureFlow: [
        {
          step: "01",
          name: { en: "Next.js App Routing", ar: "توجيه مسارات Next.js" },
          desc: { en: "Server-side prerendering with near-instant client hydration.", ar: "توليد مسبق للصفحات على الخادم مع ترطيب فوري على المتصفح." },
        },
        {
          step: "02",
          name: { en: "Responsive Design System", ar: "نظام التصميم التفاعلي" },
          desc: { en: "Tailwind tokens ensuring consistent brand aesthetics across device widths.", ar: "رموز تصميمية تضمن ثبات الهوية البصرية عبر كافة أحجام الشاشات." },
        },
      ],
      subsystems: [
        {
          id: "sub-1",
          title: { en: "Service Capability Showcase", ar: "استعراض القدرات التقنية" },
          desc: { en: "Interactive service catalog and technological portfolio.", ar: "دليل تفاعلي لعرض الخدمات التقنية والحلول المتاحة." },
          tag: "PLATFORM",
        },
      ],
      challenges: {
        en: [
          "Balancing rich visual aesthetic and micro-animations with fast mobile load times.",
        ],
        ar: [
          "الموازنة بين الجمالية البصرية والحركات الدقيقة مع سرعة التحميل على الهواتف.",
        ],
      },
      results: {
        en: [
          "Fast static page generation with zero layout shifts.",
          "Engaging, high-contrast visual identity for digital software offerings.",
        ],
        ar: [
          "توليد صفحات ثابتة وسريعة دون أي قفزات بصرية في التخطيط.",
          "هوية بصرية متميزة عالية التباين تليق بالحلول البرمجية الحديثة.",
        ],
      },
      metrics: [
        {
          label: { en: "Framework Stack", ar: "حزمة التطوير" },
          value: "Next.js 15",
          description: { en: "React Server Components & App Router", ar: "مكونات خادم React ومسارات التطبيق" },
        },
        {
          label: { en: "Responsive Target", ar: "التوافق مع الشاشات" },
          value: "100%",
          description: { en: "Mobile, Tablet, and Desktop optimized", ar: "مهيأ بالكامل للهواتف والأجهزة اللوحية والمكتبية" },
        },
        {
          label: { en: "Verification Status", ar: "حالة التحقق" },
          value: "Verified",
          description: { en: "Owner supplied platform", ar: "منصة معتمدة من المالك" },
        },
      ],
    },
  },
  {
    id: "proj-05",
    slug: "auraledger",
    categorySlug: "distributed-systems",
    title: {
      en: "AuraLedger Consensus Sandbox",
      ar: "مختبر محاكاة توافق أورا ليدجر",
    },
    shortDescription: {
      en: "Demonstration sandbox modeling a distributed Raft consensus state machine with simulated leader election and chaos network partition injection.",
      ar: "مختبر محاكاة تجريبي يوضح عمل بروتوكول توافق Raft الموزع مع محاكاة لانتخاب القائد وحقن انقسامات الشبكة.",
    },
    year: 2024,
    status: "Completed",
    verificationStatus: "UNVERIFIED_AI_GENERATED_CONTENT",
    featured: false,
    demoType: "interactive_simulation",
    demoUrl: "/projects/auraledger/demo",
    technologies: [
      TECHNOLOGIES.csharp,
      TECHNOLOGIES.raft,
      TECHNOLOGIES.grpc,
      TECHNOLOGIES.tla,
    ],
    caseStudy: {
      problem: {
        en: "Distributed systems engineers require interactive environments to visualize edge-case cluster split-brains and speculative pre-vote consensus mechanisms without deploying multi-node physical infrastructure.",
        ar: "يحتاج مهندسو الأنظمة الموزعة إلى بيئات تفاعلية لتصور حالات انقسام الشبكة وتصويت الأغلبية دون الحاجة لنشر بنية تحتية مادية معقدة.",
      },
      solution: {
        en: "Constructed an in-browser consensus simulation modeling 5 independent cluster nodes, Raft terms, leader lease elections, and partition fault injection.",
        ar: "بناء محاكاة تفاعلية في المتصفح تمثل ٥ عقد خوادم مستقلة، وتتبع فترات بروتوكول Raft وانتخاب القائد وحقن أعطال الشبكة.",
      },
      architectureFlow: [
        {
          step: "01",
          name: { en: "Speculative Pre-Vote Phase", ar: "مرحلة التصويت التمهيدي" },
          desc: { en: "Nodes verify quorum connectivity before incrementing local election terms.", ar: "تتحقق العقد من قدرتها على الوصول للنصاب قبل رفع فترات الانتخابات." },
        },
        {
          step: "02",
          name: { en: "Leader Lease Heartbeat", ar: "نبضات استمرار القائد" },
          desc: { en: "Leader node dispatches periodic heartbeats to maintain cluster consensus.", ar: "يرسل القائد نبضات دورية للأتباع للحفاظ على استقرار المجموعة." },
        },
      ],
      subsystems: [
        {
          id: "sub-1",
          title: { en: "Chaos Fault Injector", ar: "حاقن الأعطال العشوائية" },
          desc: { en: "Disconnects individual nodes to trigger live in-browser elections.", ar: "فصل العقد فردياً لتشغيل انتخابات فورية داخل المتصفح." },
          tag: "CHAOS",
        },
      ],
      challenges: {
        en: [
          "Accurately reproducing distributed consensus state machine rules inside a single-threaded JavaScript browser environment.",
        ],
        ar: [
          "إعادة تمثيل قواعد آلة حالة بروتوكول التوافق بدقة داخل بيئة المتصفح أحادية الخيط.",
        ],
      },
      results: {
        en: [
          "Hands-on demonstration of Raft quorum survival when up to 2 of 5 nodes fail.",
          "Clear visual disclosure: Prototype simulation environment (not a production deployment claim).",
        ],
        ar: [
          "إثبات عملي لقدرة بروتوكول Raft على الاستمرار حتى مع سقوط عقدتين من أصل ٥.",
          "إفصاح تقني واضح: بيئة محاكاة نموذجية (وليست ادعاءً بنشر تشغيلي واقعي).",
        ],
      },
      metrics: [
        {
          label: { en: "Target Throughput", ar: "الهدف المعياري" },
          value: "Simulated Target",
          description: { en: "Demonstration benchmark scenario", ar: "سيناريو اختباري تجريبي" },
        },
        {
          label: { en: "Cluster Model", ar: "نموذج العنقود" },
          value: "5 Nodes",
          description: { en: "Quorum threshold: 3 of 5", ar: "نصاب الأغلبية: ٣ من ٥" },
        },
        {
          label: { en: "Status Notice", ar: "تنويه الحالة" },
          value: "Prototype Sandbox",
          description: { en: "Conceptual architecture demonstration", ar: "محاكاة معمارية تجريبية" },
        },
      ],
    },
  },
];
