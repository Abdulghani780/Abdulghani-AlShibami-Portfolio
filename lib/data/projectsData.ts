import { Project, ProjectCategory, Technology } from "@/types/project";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    id: "cat-1",
    slug: "distributed-systems",
    name: {
      en: "Distributed Systems",
      ar: "الأنظمة الموزعة",
    },
    displayOrder: 1,
  },
  {
    id: "cat-2",
    slug: "autonomous-ai",
    name: {
      en: "Autonomous AI",
      ar: "الذكاء الاصطناعي",
    },
    displayOrder: 2,
  },
  {
    id: "cat-3",
    slug: "low-latency",
    name: {
      en: "Low-Latency C#",
      ar: "الحوسبة السريعة",
    },
    displayOrder: 3,
  },
  {
    id: "cat-4",
    slug: "cloud-infrastructure",
    name: {
      en: "Cloud Native",
      ar: "السحابة والشبكات",
    },
    displayOrder: 4,
  },
  {
    id: "cat-5",
    slug: "desktop-systems",
    name: {
      en: "Enterprise Desktop",
      ar: "أنظمة سطح المكتب",
    },
    displayOrder: 5,
  },
];

export const TECHNOLOGIES: Record<string, Technology> = {
  csharp: { id: "tech-csharp", name: "C# .NET 9", category: "Language" },
  raft: { id: "tech-raft", name: "Raft Protocol", category: "Protocol" },
  grpc: { id: "tech-grpc", name: "gRPC / HTTP/3", category: "Protocol" },
  tla: { id: "tech-tla", name: "TLA+ Formal Proofs", category: "Tool" },
  zeroalloc: { id: "tech-zeroalloc", name: "Zero-Alloc Memory", category: "Framework" },
  python: { id: "tech-python", name: "Python 3.12", category: "Language" },
  fastapi: { id: "tech-fastapi", name: "FastAPI", category: "Framework" },
  multiagent: { id: "tech-multiagent", name: "Multi-Agent Swarm", category: "Framework" },
  nextjs: { id: "tech-nextjs", name: "Next.js 15", category: "Framework" },
  cpp: { id: "tech-cpp", name: "C++20 Interop", category: "Language" },
  ringbuffer: { id: "tech-ringbuffer", name: "LMAX Disruptor", category: "Framework" },
  lockfree: { id: "tech-lockfree", name: "Lock-Free Ring", category: "Framework" },
  golang: { id: "tech-golang", name: "Go 1.23", category: "Language" },
  k8s: { id: "tech-k8s", name: "Kubernetes CRDs", category: "Cloud" },
  ebpf: { id: "tech-ebpf", name: "eBPF Telemetry", category: "Tool" },
  rust: { id: "tech-rust", name: "Rust", category: "Language" },
  opa: { id: "tech-opa", name: "Open Policy Agent", category: "Tool" },
  winforms: { id: "tech-winforms", name: ".NET WinForms", category: "Framework" },
  sqlserver: { id: "tech-sqlserver", name: "SQL Server", category: "Database" },
};

export const PROJECTS: Project[] = [
  {
    id: "proj-01",
    slug: "auraledger",
    categorySlug: "distributed-systems",
    title: {
      en: "AuraLedger Distributed Consensus",
      ar: "محرك أورا ليدجر للتوافق الموزع",
    },
    shortDescription: {
      en: "Fault-tolerant distributed state machine engine with vectorized Write-Ahead Log (WAL) and speculative pre-vote election.",
      ar: "محرك آلة حالة موزع عالي التسامح مع الأعطال مدعوم بسجل كتابة مسبقة موجه وتصويت تمهيدي استباقي.",
    },
    year: 2025,
    status: "Completed",
    featured: true,
    demoType: "interactive_simulation",
    demoUrl: "/projects/auraledger/demo",
    technologies: [
      TECHNOLOGIES.csharp,
      TECHNOLOGIES.raft,
      TECHNOLOGIES.grpc,
      TECHNOLOGIES.tla,
      TECHNOLOGIES.zeroalloc,
    ],
    caseStudy: {
      problem: {
        en: "Traditional relational ledgers incur excessive thread contention and disk I/O serialization bottlenecks under distributed cluster partitions, leading to cascading failovers and unpredictable p99 commit latencies.",
        ar: "تعاني السجلات العلائقية التقليدية من تزاحم حاد بين الخيوط واختناقات في عمليات الإدخال والإخراج عند حدوث انقسامات الشبكة، مما يؤدي إلى انهيارات متتالية وعدم استقرار في زمن الاستجابة.",
      },
      solution: {
        en: "Architected a custom C# .NET 9 consensus runtime implementing Raft with speculative pre-voting, an append-only vectorized memory ring buffer, and zero-allocation binary serialization.",
        ar: "بناء بيئة تشغيل متقدمة في C# .NET 9 تطبق بروتوكول Raft مع تصويت تمهيدي استباقي، ومخزن حلقي ذاكري موجه للإلحاق فقط، وتسلسل ثنائي خالي من تخصيص الذاكرة الإضافية.",
      },
      architectureFlow: [
        {
          step: "01",
          name: { en: "gRPC Ingestion Gate", ar: "بوابة استقبال gRPC" },
          desc: { en: "Asynchronous HTTP/3 streaming stream with client-side batching.", ar: "تدفق غير متزامن عبر HTTP/3 مع تجميع الحزم من جانب العميل." },
        },
        {
          step: "02",
          name: { en: "Lock-Free Ring Buffer", ar: "المخزن الحلقي بدون أقفال" },
          desc: { en: "Disruptor-pattern memory ring staging incoming client entries.", ar: "نمط Disruptor للذاكرة المرحلية لتسجيل الإدخالات القادمة بدون قفل." },
        },
        {
          step: "03",
          name: { en: "Raft Quorum Consensus", ar: "إجماع الأغلبية لـ Raft" },
          desc: { en: "Speculative pre-vote validation preventing disrupted leader partitions.", ar: "تحقق تصويتي تمهيدي يمنع حدوث انقسامات القائد غير المستقرة." },
        },
        {
          step: "04",
          name: { en: "Vectorized WAL", ar: "سجل الكتابة المسبقة الموجه" },
          desc: { en: "Direct SSD write bypassing kernel page cache via direct I/O.", ar: "كتابة مباشرة على أقراص SSD متجاوزة ذاكرة التخزين المؤقت للنواة." },
        },
      ],
      subsystems: [
        {
          id: "sub-1",
          title: { en: "Zero-Alloc Log Compaction", ar: "ضغط السجلات منعدم التخصيص" },
          desc: { en: "Reclaims obsolete log entries in-place without triggering .NET Garbage Collection pauses.", ar: "استعادة سجلات العمليات القديمة موضعياً دون إطلاق توقفات جامع القمامة في دوت نت." },
          tag: "MEMORY",
        },
        {
          id: "sub-2",
          title: { en: "Pre-Vote Term Stability", ar: "استقرار فترات التصويت التمهيدي" },
          desc: { en: "Partitioned nodes verify quorum capability before incrementing local election terms.", ar: "تتحقق العقد المنفصلة من قدرتها على تحقيق النصاب قبل رفع فترات الانتخابات." },
          tag: "CONSENSUS",
        },
        {
          id: "sub-3",
          title: { en: "Vectorized Batch Serialization", ar: "التسلسل الموجه للحزم" },
          desc: { en: "Leverages AVX-512 SIMD instructions to pack transaction payloads into byte buffers.", ar: "استخدام تعليمات AVX-512 لتجهيز كتل المعاملات بسرعة العتاد المباشرة." },
          tag: "SIMD",
        },
      ],
      challenges: {
        en: [
          "Eliminating Gen2 Garbage Collection pauses during high-sustained 100k+ tx/s bursts.",
          "Preventing split-brain elections across asymmetrical multi-datacenter network links.",
          "Ensuring total linearizability verified by formal TLA+ state specifications.",
        ],
        ar: [
          "القضاء التام على توقفات جامع القمامة Gen2 أثناء تدفق أكثر من ١٠٠ ألف عملية/ثانية.",
          "منع انقسام القرار وانتخاب قادة متعددين عبر روابط الشبكة غير المتماثلة.",
          "ضمان التسلسلية الخطية الصارمة المثبتة عبر مواصفات TLA+ الرياضية.",
        ],
      },
      results: {
        en: [
          "Sustained 145,000 transactions per second on standard commodity hardware nodes.",
          "Maintained p99 consensus commit latency under 0.8 milliseconds.",
          "100% state consistency verified across 10,000 automated chaos partition injections.",
        ],
        ar: [
          "تحقيق معدل ١٤٥ ألف عملية في الثانية بشكل مستقر على خوادم تجارية قياسية.",
          "الحفاظ على زمن استجابة التوافق p99 أقل من ٠.٨ ميلي ثانية.",
          "اتساق تام بنسبة ١٠٠٪ تم التحقق منه عبر ١٠ آلاف تجربة حقن أعطال عشوائية.",
        ],
      },
      metrics: [
        {
          label: { en: "Burst Throughput", ar: "معدل التدفق الأقصى" },
          value: "145k tx/s",
          description: { en: "Continuous linearizable state commit", ar: "تثبيت حتمي مستمر لحالة السجل" },
        },
        {
          label: { en: "p99 Commit Latency", ar: "زمن الاستجابة p99" },
          value: "0.82 ms",
          description: { en: "5-node geo-distributed cluster", ar: "عنقود موزع على ٥ عقد خوادم" },
        },
        {
          label: { en: "SLA Availability", ar: "مستوى الجاهزية التشغيلية" },
          value: "99.999%",
          description: { en: "Zero uncoordinated split-brain downtime", ar: "انعدام التوقف غير المنسق نهائياً" },
        },
        {
          label: { en: "GC Alloc / Entry", ar: "حجز الذاكرة لكل سجل" },
          value: "0 bytes",
          description: { en: "Strict unmanaged memory arenas", ar: "حلبات ذاكرة غير مدارة صارمة" },
        },
      ],
    },
  },
  {
    id: "proj-02",
    slug: "neuroscribe",
    categorySlug: "autonomous-ai",
    title: {
      en: "NeuroScribe Multi-Agent Swarm",
      ar: "منظومة نيوروسكرايب لسرب الوكلاء المستقلين",
    },
    shortDescription: {
      en: "Autonomous multi-agent orchestration framework for deterministic software synthesis and automated PR code reviews.",
      ar: "إطار عمل لتنسيق الوكلاء المستقلين لإنتاج البرمجيات والمراجعة الآلية لطلبات الدمج بدقة حتمية.",
    },
    year: 2025,
    status: "Completed",
    featured: true,
    demoType: "none",
    technologies: [
      TECHNOLOGIES.python,
      TECHNOLOGIES.fastapi,
      TECHNOLOGIES.multiagent,
      TECHNOLOGIES.nextjs,
    ],
    caseStudy: {
      problem: {
        en: "Autonomous LLM coding agents frequently hallucinate structural boundaries, produce uncompilable code chunks, and fail to maintain project architectural integrity over multi-step iterations.",
        ar: "غالباً ما تنتج وكلاء الأكواد التوليدية أجزاء غير قابلة للتجميع وتتجاوز القيود المعمارية وتفقد السياق خلال الخطوات البرمجية المتتالية.",
      },
      solution: {
        en: "Designed a hierarchical multi-agent state machine where planner, reviewer, and builder agents operate under strict AST schema verification and deterministic validation guards.",
        ar: "تصميم آلة حالة هرمية للوكلاء المتعددين حيث يعمل وكلاء التخطيط والمراجعة والبناء تحت حراسة صارمة للتحقق النحوي من شجرة الكود (AST).",
      },
      architectureFlow: [
        {
          step: "01",
          name: { en: "Requirement Parsing", ar: "تحليل وتفكيك المتطلبات" },
          desc: { en: "Deterministic decomposition into dependency DAG nodes.", ar: "تفكيك حتمي إلى عقد مخطط الاعتمادات الموجه (DAG)." },
        },
        {
          step: "02",
          name: { en: "Synthesizer Swarm", ar: "سرب التوليد البرمجي" },
          desc: { en: "Parallel code generation against localized architectural contracts.", ar: "توليد برمجي متوازي ضد عقود المعمارية المحددة." },
        },
        {
          step: "03",
          name: { en: "AST Verification Guard", ar: "حارس التحقق النحوي" },
          desc: { en: "Compiles syntax trees and validates invariants before file persistence.", ar: "تجميع شجرة النحو والتحقق من المبادئ قبل حفظ الملفات." },
        },
      ],
      subsystems: [
        {
          id: "sub-1",
          title: { en: "Contract-Driven Agent Isolation", ar: "عزل الوكلاء المبني على العقود" },
          desc: { en: "Sandboxes subagents with limited tools and isolated filesystem contexts.", ar: "عزل الوكلاء الفرعيين مع تحديد أدواتهم ومساحات العمل." },
          tag: "AGENTS",
        },
        {
          id: "sub-2",
          title: { en: "Self-Healing Test Loops", ar: "حلقات الاختبار ذاتية المعالجة" },
          desc: { en: "Automatically diagnoses compiler errors and refines implementations autonomously.", ar: "تشخيص آلي لأخطاء المترجم وإعادة ضبط الكود تلقائياً." },
          tag: "VALIDATION",
        },
      ],
      challenges: {
        en: [
          "Preventing agent reasoning context bloat across long-running autonomous workflows.",
          "Guaranteeing 100% syntax correctness prior to git staging.",
        ],
        ar: [
          "منع تضخم سياق التفكير والاستدلال لدى الوكلاء أثناء جلسات العمل المطولة.",
          "ضمان السلامة النحوية البرمجية بنسبة ١٠٠٪ قبل اعتماد التعديلات في Git.",
        ],
      },
      results: {
        en: [
          "Reduced code review turnaround from 4 hours to 45 seconds.",
          "Zero syntax regression across 2,500 evaluated automated commits.",
        ],
        ar: [
          "تقليص مدة مراجعة الأكواد من ٤ ساعات إلى ٤٥ ثانية.",
          "انعدام الأخطاء النحوية عبر ٢٥٠٠ تعديل برمجي مؤتمت تم تقييمها.",
        ],
      },
      metrics: [
        {
          label: { en: "Turnaround Time", ar: "زمن المراجعة والتدقيق" },
          value: "45 sec",
          description: { en: "Average PR evaluation cycle", ar: "متوسط دورة تدقيق طلب الدمج" },
        },
        {
          label: { en: "Syntax Accuracy", ar: "دقة النحو البرمجي" },
          value: "100%",
          description: { en: "Verified via AST compiler passes", ar: "محققة عبر مترجمات الشجرة النحوية" },
        },
      ],
    },
  },
  {
    id: "proj-03",
    slug: "omnitrader",
    categorySlug: "low-latency",
    title: {
      en: "OmniTrader High-Frequency Engine",
      ar: "محرك أومني تريدر للتداول فائق السرعة",
    },
    shortDescription: {
      en: "Microsecond-tier limit order book and algorithmic matching engine designed in C# .NET 9 with C++20 kernel bypass.",
      ar: "محرك مطابقة أوامر وتداول بسرعة الميكروثانية مصمم في C# .NET 9 مع تجاوز النواة عبر C++20.",
    },
    year: 2024,
    status: "Completed",
    featured: true,
    demoType: "none",
    technologies: [
      TECHNOLOGIES.csharp,
      TECHNOLOGIES.cpp,
      TECHNOLOGIES.ringbuffer,
      TECHNOLOGIES.lockfree,
    ],
    caseStudy: {
      problem: {
        en: "Traditional financial trading systems struggle with tail latency spikes caused by CPU thread context switching and lock contention on high-frequency order books.",
        ar: "تعاني أنظمة التداول المالي التقليدية من قفزات مفاجئة في زمن الاستجابة ناتجة عن تبديل سياق المعالج والتزاحم على أقفال سجلات الأوامر.",
      },
      solution: {
        en: "Constructed a single-threaded pin-core matching engine utilizing lock-free LMAX circular ring buffers and memory-mapped order arrays.",
        ar: "بناء محرك مطابقة أحادي الخيط ومثبت على نواة معالج محددة باستخدام مخازن حلقية خالية من الأقفال ومصفوفات أوامر مربوطة بالذاكرة مباشرة.",
      },
      architectureFlow: [
        {
          step: "01",
          name: { en: "Direct NIC Ingest", ar: "استقبال مباشر من كرت الشبكة" },
          desc: { en: "Kernel-bypass packet capture directly into user memory.", ar: "التقاط الحزم متجاوزاً نواة النظام مباشرة إلى ذاكرة المستخدم." },
        },
        {
          step: "02",
          name: { en: "Order Book Match", ar: "مطابقة سجل الأوامر" },
          desc: { en: "Deterministic price-time priority matching in cache-aligned structs.", ar: "مطابقة حتمية بحسب أولوية السعر والزمن في هياكل بيانات متوافقة مع الكاش." },
        },
      ],
      subsystems: [
        {
          id: "sub-1",
          title: { en: "Pinned-Core Affinity", ar: "تثبيت معالجة الخيوط على النوى" },
          desc: { en: "Prevents thread migration across CPU sockets, eliminating L1/L2 cache misses.", ar: "منع انتقال الخيوط بين أنوية المعالج والقضاء على فقدان ذاكرة الكاش السريعة." },
          tag: "CPU",
        },
      ],
      challenges: {
        en: ["Guaranteeing sub-microsecond tick-to-trade latency under extreme market volatility."],
        ar: ["ضمان زمن استجابة دون الميكروثانية أثناء فترات تقلب الأسواق الحادة."],
      },
      results: {
        en: [
          "Achieved 1.4 microsecond median tick-to-trade execution time.",
          "Zero heap allocation during active trading cycles.",
        ],
        ar: [
          "تحقيق زمن تنفيذ وسيط قدره ١.٤ ميكروثانية للمعاملة الواحدة.",
          "انعدام تخصيص الذاكرة العشوائية أثناء دورات التداول النشطة.",
        ],
      },
      metrics: [
        {
          label: { en: "Tick-to-Trade", ar: "زمن الاستجابة والتنفيذ" },
          value: "1.4 µs",
          description: { en: "Median execution latency", ar: "متوسط زمن التنفيذ للعملية" },
        },
        {
          label: { en: "Throughput", ar: "سعة المعالجة" },
          value: "2.8M orders/s",
          description: { en: "Single-core pinned throughput", ar: "سعة المعالجة لنواة واحدة مثبتة" },
        },
      ],
    },
  },
  {
    id: "proj-04",
    slug: "cloudmesh",
    categorySlug: "cloud-infrastructure",
    title: {
      en: "CloudMesh Observability Gateway",
      ar: "بوابة كلاود مش للرصد الشبكي السحابي",
    },
    shortDescription: {
      en: "High-performance Kubernetes service mesh telemetry gateway leveraging Go and eBPF kernel probes for zero-overhead tracing.",
      ar: "بوابة رصد شبكية لكوبيرنيتس تعتمد على Go ومجسات eBPF البرمجية لتتبع حركة البيانات دون أي عبء تشغيلي.",
    },
    year: 2024,
    status: "Completed",
    featured: false,
    demoType: "none",
    technologies: [
      TECHNOLOGIES.golang,
      TECHNOLOGIES.k8s,
      TECHNOLOGIES.ebpf,
    ],
    caseStudy: {
      problem: {
        en: "Sidecar proxy architectures add substantial CPU and memory overhead when tracing service-to-service communication across microservice clusters.",
        ar: "تضيف معماريات البروكسي الجانبي (Sidecar) استهلاكاً كبيراً للمعالج والذاكرة عند تتبع الاتصالات بين الخدمات المصغرة.",
      },
      solution: {
        en: "Built a kernel-level eBPF tracing agent in Go that intercepts socket syscalls directly without sidecar injections.",
        ar: "تطوير عميل تتبع على مستوى نواة النظام عبر eBPF في Go يعترض نداءات المقابس الشبكية مباشرة بدون بروكسي وسيط.",
      },
      architectureFlow: [
        {
          step: "01",
          name: { en: "eBPF Socket Probe", ar: "مجس مقابس eBPF" },
          desc: { en: "Captures TCP streams in kernel space.", ar: "التقاط تدفقات TCP في مساحة النواة بدون نسخ إضافي." },
        },
      ],
      subsystems: [
        {
          id: "sub-1",
          title: { en: "Zero-Copy Ring Buffer", ar: "مخزن حلقي بدون نسخ" },
          desc: { en: "Streams network metrics to userspace collectors with minimal CPU utilization.", ar: "نقل مقاييس الشبكة للمجمعات بمستوى استهلاك معالج شبه معدوم." },
          tag: "KERNEL",
        },
      ],
      challenges: {
        en: ["Handling high-packet rates without dropping kernel telemetry buffers."],
        ar: ["معالجة معدلات الحزم المرتفعة دون فقدان أي بيانات في مخازن النواة."],
      },
      results: {
        en: [
          "Reduced mesh memory footprint by 82% compared to standard Envoy sidecars.",
        ],
        ar: [
          "تقليص استهلاك الذاكرة بنسبة ٨٢٪ مقارنة بوكلاء Envoy التقليديين.",
        ],
      },
      metrics: [
        {
          label: { en: "Memory Overhead", ar: "العبء على الذاكرة" },
          value: "< 14 MB",
          description: { en: "Per node agent footprint", ar: "استهلاك العميل لكل عقدة خادم" },
        },
      ],
    },
  },
  {
    id: "proj-05",
    slug: "sentinelguard",
    categorySlug: "distributed-systems",
    title: {
      en: "SentinelGuard Zero-Trust IAM",
      ar: "منظومة سنتينل جارد للتحقق الأمني الموزع",
    },
    shortDescription: {
      en: "Sub-millisecond policy evaluation engine and decentralized identity verification gateway written in Rust.",
      ar: "محرك تقييم سياسات أمنية واستيقان هوية لامركزي بزمن استجابة أقل من ميلي ثانية مكتوب بلغة ريست.",
    },
    year: 2024,
    status: "Maintained",
    featured: false,
    demoType: "none",
    technologies: [
      TECHNOLOGIES.rust,
      TECHNOLOGIES.opa,
      TECHNOLOGIES.grpc,
    ],
    caseStudy: {
      problem: {
        en: "Centralized authorization services introduce single-point-of-failure bottlenecks and latency overhead on microservice API requests.",
        ar: "تتسبب خدمات التحقق الأمني المركزية في إبطاء الطلبات بين الخدمات المصغرة وتشكل نقطة انهيار فردية.",
      },
      solution: {
        en: "Implemented an in-memory distributed policy cache in Rust with compiled WebAssembly Rego policy evaluation.",
        ar: "بناء ذاكرة تخزين مؤقت للسياسات في الذاكرة عبر لغة Rust مع تقييم سريع للسياسات المترجمة إلى WebAssembly.",
      },
      architectureFlow: [
        {
          step: "01",
          name: { en: "Wasm Policy Evaluation", ar: "تقييم السياسات عبر Wasm" },
          desc: { en: "Evaluates authorization rules in sub-100 microseconds.", ar: "تقييم قواعد الاستحقاق في أقل من ١٠٠ ميكروثانية." },
        },
      ],
      subsystems: [
        {
          id: "sub-1",
          title: { en: "Distributed Cache Invalidation", ar: "إبطال الذاكرة المؤقتة الموزعة" },
          desc: { en: "Gossip-based propagation of revoked tokens in under 15ms.", ar: "نشر فوري للرموز الملغاة عبر بروتوكول الشائعات في أقل من ١٥ ميلي ثانية." },
          tag: "SECURITY",
        },
      ],
      challenges: {
        en: ["Guaranteeing immediate revocation propagation across edge nodes."],
        ar: ["ضمان النشر الفوري لإلغاء الصلاحيات عبر عقد الحافة السحابية."],
      },
      results: {
        en: [
          "Zero-trust validation completed in under 0.12ms p95 latency.",
        ],
        ar: [
          "إتمام عمليات التحقق الأمني في زمن استجابة p95 أقل من ٠.١٢ ميلي ثانية.",
        ],
      },
      metrics: [
        {
          label: { en: "Decision Latency", ar: "زمن اتخاذ القرار الأمني" },
          value: "0.12 ms",
          description: { en: "p95 authorization decision", ar: "زمن اتخاذ قرار الصلاحية p95" },
        },
      ],
    },
  },
  {
    id: "proj-06",
    slug: "yusra-erp",
    categorySlug: "desktop-systems",
    title: {
      en: "Yusra Enterprise Resource Ledger",
      ar: "نظام يسرى لإدارة الموارد المحاسبية المؤسسية",
    },
    shortDescription: {
      en: "Mission-critical desktop accounting and inventory management software built with C# WinForms, SQL Server, and offline sync.",
      ar: "نظام مكتبي مؤسسي متكامل لإدارة الحسابات والمخزون مبني بتقنيات C# WinForms وقواعد بيانات SQL Server مع مزامنة دون اتصال.",
    },
    year: 2023,
    status: "Completed",
    featured: false,
    demoType: "none",
    technologies: [
      TECHNOLOGIES.csharp,
      TECHNOLOGIES.winforms,
      TECHNOLOGIES.sqlserver,
    ],
    caseStudy: {
      problem: {
        en: "Commercial retail operations in environments with intermittent internet connectivity suffer from data desynchronization and ledger discrepancies.",
        ar: "تعاني العمليات التجارية في بيئات الاتصال المتقطع من فقدان التزامن المالي وتضارب قيود الحسابات وسجلات المخزون.",
      },
      solution: {
        en: "Engineered a hardened Windows desktop enterprise software with ACID-compliant local caching, double-entry ledger invariants, and conflict-free asynchronous sync.",
        ar: "تطوير برنامج مكتبي مؤسسي لنظام ويندوز مع تخزين محلي متوافق مع معايير ACID ومزامنة غير متزامنة خالية من التضارب.",
      },
      architectureFlow: [
        {
          step: "01",
          name: { en: "Local Ledger Cache", ar: "سجل الحسابات المحلي" },
          desc: { en: "Atomic transactions recorded locally regardless of connectivity.", ar: "تسجيل العمليات المالية ذرياً بغض النظر عن حالة الاتصال." },
        },
      ],
      subsystems: [
        {
          id: "sub-1",
          title: { en: "Double-Entry Invariant Guard", ar: "حارس قيود القيد المزدوج" },
          desc: { en: "Enforces debits equal credits at the database constraint layer.", ar: "فرض تساوي المدين والدائن على مستوى قيود قاعدة البيانات الصارمة." },
          tag: "LEDGER",
        },
      ],
      challenges: {
        en: ["Resolving asynchronous multi-branch inventory transaction conflicts."],
        ar: ["معالجة تضارب مبيعات المخزون بين الفروع المتعددة أثناء انقطاع الشبكة."],
      },
      results: {
        en: [
          "Zero financial discrepancy across 500,000 recorded double-entry transactions.",
        ],
        ar: [
          "انعدام أي تضارب مالي عبر ٥٠٠ ألف قيد محاسبي مزدوج تم تسجيله.",
        ],
      },
      metrics: [
        {
          label: { en: "Reconciliation Rate", ar: "دقة المطابقة المحاسبية" },
          value: "100%",
          description: { en: "Automated double-entry audit pass", ar: "مطابقة تدقيق آلي متوافقة بالكامل" },
        },
      ],
    },
  },
];
