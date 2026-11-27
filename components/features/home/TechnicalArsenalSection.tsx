"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TechnicalArsenalSectionProps {
  locale: "en" | "ar";
}

export function TechnicalArsenalSection({ locale }: TechnicalArsenalSectionProps) {
  const isRtl = locale === "ar";
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const content = {
    en: {
      headline: "TECHNICAL ARSENAL",
      subheadline: "Tools, languages, and platforms I use to build production systems. Organized by domain with verified proficiency levels.",
      categories: [
        {
          title: "LANGUAGES",
          techs: "Python · C# · Java · Kotlin · JavaScript · TypeScript · Go · Rust · SQL",
          logos: [
            { name: "Python", color: "#3776AB", text: "Py" },
            { name: "C#", color: "#239120", text: "C#" },
            { name: "Java", color: "#ED8B00", text: "Java" },
            { name: "Kotlin", color: "#7F52FF", text: "Kt" },
            { name: "JavaScript", color: "#F7DF1E", text: "JS" },
            { name: "TypeScript", color: "#3178C6", text: "TS" },
            { name: "Go", color: "#00ADD8", text: "Go" },
            { name: "Rust", color: "#DEA584", text: "Rs" },
            { name: "SQL", color: "#CC2927", text: "SQL" },
          ],
        },
        {
          title: "AI & VISION",
          techs: "PyTorch · TensorFlow · ONNX Runtime · TensorRT · OpenCV · Hugging Face · LangChain · LangGraph · MLflow · Weights & Biases",
          logos: [
            { name: "PyTorch", color: "#EE4C2C", text: "PT" },
            { name: "TensorFlow", color: "#FF6F00", text: "TF" },
            { name: "ONNX", color: "#005CED", text: "ONNX" },
            { name: "TensorRT", color: "#76B900", text: "TRT" },
            { name: "OpenCV", color: "#5C3EE8", text: "CV" },
            { name: "Hugging Face", color: "#FFC107", text: "HF" },
            { name: "LangChain", color: "#1C3C3C", text: "LC" },
            { name: "MLflow", color: "#0194E2", text: "MF" },
          ],
        },
        {
          title: "BACKEND & DISTRIBUTED SYSTEMS",
          techs: ".NET 8/ASP.NET Core · Node.js · gRPC · GraphQL · REST · Event Sourcing · CQRS · Saga Pattern · Actor Model (Akka/Orleans) · SignalR · Message Queues (RabbitMQ, Kafka, Azure Service Bus)",
          logos: [
            { name: ".NET", color: "#512BD4", text: ".NET" },
            { name: "Node.js", color: "#339933", text: "Node" },
            { name: "gRPC", color: "#6C42E7", text: "gRPC" },
            { name: "GraphQL", color: "#E10098", text: "GQL" },
            { name: "Kafka", color: "#231F20", text: "Kafka" },
            { name: "RabbitMQ", color: "#FF6600", text: "RMQ" },
            { name: "SignalR", color: "#512BD4", text: "SR" },
            { name: "Orleans", color: "#512BD4", text: "Orleans" },
          ],
        },
        {
          title: "DATA & INFRASTRUCTURE",
          techs: "PostgreSQL · SQL Server · Redis · Azure Cosmos DB · MongoDB · Elasticsearch · ClickHouse · TimescaleDB · Docker · Kubernetes (AKS/EKS/GKE) · Terraform · Helm · ArgoCD · GitHub Actions · Azure DevOps · Prometheus · Grafana · OpenTelemetry",
          logos: [
            { name: "PostgreSQL", color: "#336791", text: "PG" },
            { name: "SQL Server", color: "#CC2927", text: "SQL" },
            { name: "Redis", color: "#DC382D", text: "Redis" },
            { name: "Cosmos DB", color: "#0078D4", text: "Cosmos" },
            { name: "Kubernetes", color: "#326CE5", text: "K8s" },
            { name: "Terraform", color: "#7B42BC", text: "TF" },
            { name: "Prometheus", color: "#E6522C", text: "Prom" },
            { name: "Grafana", color: "#F46800", text: "Grafana" },
          ],
        },
        {
          title: "FRONTEND & PLATFORMS",
          techs: "React 19 · Next.js 15 · TypeScript · Tailwind CSS · TanStack Query · Zustand · Framer Motion · Three.js · WebGL · WebAssembly · PWA · Electron · Tauri · WinForms · WPF · MAUI · PyQt6",
          logos: [
            { name: "React", color: "#61DAFB", text: "React" },
            { name: "Next.js", color: "#000000", text: "Next" },
            { name: "TypeScript", color: "#3178C6", text: "TS" },
            { name: "Tailwind", color: "#06B6D4", text: "TW" },
            { name: "Three.js", color: "#000000", text: "3JS" },
            { name: "WASM", color: "#654FF0", text: "WASM" },
            { name: "Electron", color: "#47848F", text: "Etron" },
            { name: "PyQt", color: "#41CD52", text: "Qt" },
          ],
        },
      ],
    },
    ar: {
      headline: "الترسانة التقنية",
      subheadline: "أدوات، لغات، ومنصات أستخدمها لبناء أنظمة إنتاجية. منظمة حسب المجال مع مستويات إتقان موثقة.",
      categories: [
        {
          title: "اللغات",
          techs: "Python · C# · Java · Kotlin · JavaScript · TypeScript · Go · Rust · SQL",
          logos: [
            { name: "Python", color: "#3776AB", text: "Py" },
            { name: "C#", color: "#239120", text: "C#" },
            { name: "Java", color: "#ED8B00", text: "Java" },
            { name: "Kotlin", color: "#7F52FF", text: "Kt" },
            { name: "JavaScript", color: "#F7DF1E", text: "JS" },
            { name: "TypeScript", color: "#3178C6", text: "TS" },
            { name: "Go", color: "#00ADD8", text: "Go" },
            { name: "Rust", color: "#DEA584", text: "Rs" },
            { name: "SQL", color: "#CC2927", text: "SQL" },
          ],
        },
        {
          title: "الذكاء الاصطناعي والرؤية",
          techs: "PyTorch · TensorFlow · ONNX Runtime · TensorRT · OpenCV · Hugging Face · LangChain · LangGraph · MLflow · Weights & Biases",
          logos: [
            { name: "PyTorch", color: "#EE4C2C", text: "PT" },
            { name: "TensorFlow", color: "#FF6F00", text: "TF" },
            { name: "ONNX", color: "#005CED", text: "ONNX" },
            { name: "TensorRT", color: "#76B900", text: "TRT" },
            { name: "OpenCV", color: "#5C3EE8", text: "CV" },
            { name: "Hugging Face", color: "#FFC107", text: "HF" },
            { name: "LangChain", color: "#1C3C3C", text: "LC" },
            { name: "MLflow", color: "#0194E2", text: "MF" },
          ],
        },
        {
          title: "الخلفية والأنظمة الموزعة",
          techs: ".NET 8/ASP.NET Core · Node.js · gRPC · GraphQL · REST · مصادر أحداث · CQRS · نمط ساجا · نموذج الممثل (Akka/Orleans) · SignalR · طوابير رسائل (RabbitMQ, Kafka, Azure Service Bus)",
          logos: [
            { name: ".NET", color: "#512BD4", text: ".NET" },
            { name: "Node.js", color: "#339933", text: "Node" },
            { name: "gRPC", color: "#6C42E7", text: "gRPC" },
            { name: "GraphQL", color: "#E10098", text: "GQL" },
            { name: "Kafka", color: "#231F20", text: "Kafka" },
            { name: "RabbitMQ", color: "#FF6600", text: "RMQ" },
            { name: "SignalR", color: "#512BD4", text: "SR" },
            { name: "Orleans", color: "#512BD4", text: "Orleans" },
          ],
        },
        {
          title: "البيانات والبنية التحتية",
          techs: "PostgreSQL · SQL Server · Redis · Azure Cosmos DB · MongoDB · Elasticsearch · ClickHouse · TimescaleDB · Docker · Kubernetes (AKS/EKS/GKE) · Terraform · Helm · ArgoCD · GitHub Actions · Azure DevOps · Prometheus · Grafana · OpenTelemetry",
          logos: [
            { name: "PostgreSQL", color: "#336791", text: "PG" },
            { name: "SQL Server", color: "#CC2927", text: "SQL" },
            { name: "Redis", color: "#DC382D", text: "Redis" },
            { name: "Cosmos DB", color: "#0078D4", text: "Cosmos" },
            { name: "Kubernetes", color: "#326CE5", text: "K8s" },
            { name: "Terraform", color: "#7B42BC", text: "TF" },
            { name: "Prometheus", color: "#E6522C", text: "Prom" },
            { name: "Grafana", color: "#F46800", text: "Grafana" },
          ],
        },
        {
          title: "الواجهة الأمامية والمنصات",
          techs: "React 19 · Next.js 15 · TypeScript · Tailwind CSS · TanStack Query · Zustand · Framer Motion · Three.js · WebGL · WebAssembly · PWA · Electron · Tauri · WinForms · WPF · MAUI · PyQt6",
          logos: [
            { name: "React", color: "#61DAFB", text: "React" },
            { name: "Next.js", color: "#000000", text: "Next" },
            { name: "TypeScript", color: "#3178C6", text: "TS" },
            { name: "Tailwind", color: "#06B6D4", text: "TW" },
            { name: "Three.js", color: "#000000", text: "3JS" },
            { name: "WASM", color: "#654FF0", text: "WASM" },
            { name: "Electron", color: "#47848F", text: "Etron" },
            { name: "PyQt", color: "#41CD52", text: "Qt" },
          ],
        },
      ],
    },
  }[locale];

  const goldColor = theme === "dark" ? "#D9B567" : "#BE943F";
  const textPrimary = theme === "dark" ? "#FDFBF7" : "#1A1A1C";
  const textSecondary = theme === "dark" ? "#E4E2DD" : "#2D2D2F";
  const textMuted = theme === "dark" ? "#9A9893" : "#6B6B6E";
  const bgColor = theme === "dark" ? "#0A0A0B" : "#FDFBF7";
  const surfaceColor = theme === "dark" ? "#121213" : "#FFFFFF";
  const lineColor = theme === "dark" ? "#2A2A2C" : "#E8E4DD";
  const lineGold = theme === "dark" ? "#D9B567" : "#BE943F";

  return (
    <section
      id="arsenal"
      className="section-master relative"
      style={{
        minHeight: "650px",
        backgroundColor: bgColor,
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
      aria-labelledby="arsenal-headline"
    >
      {/* Background ornaments */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <svg className="absolute top-20 left-20 w-32 h-32" viewBox="0 0 100 100" style={{ opacity: 0.2 }}>
          <circle cx="50" cy="50" r="45" fill="none" stroke={goldColor} strokeWidth="1" strokeDasharray="8 4" />
          <circle cx="50" cy="50" r="30" fill="none" stroke={goldColor} strokeWidth="0.5" />
        </svg>
        <svg className="absolute bottom-20 right-20 w-40 h-40" viewBox="0 0 120 120" style={{ opacity: 0.15 }}>
          <rect x="10" y="10" width="100" height="100" rx="4" fill="none" stroke={goldColor} strokeWidth="0.5" />
          <circle cx="35" cy="35" r="4" fill={goldColor} opacity="0.6" />
          <circle cx="85" cy="35" r="4" fill={goldColor} opacity="0.6" />
          <circle cx="35" cy="85" r="4" fill={goldColor} opacity="0.6" />
          <circle cx="85" cy="85" r="4" fill={goldColor} opacity="0.6" />
          <circle cx="60" cy="60" r="5" fill={goldColor} opacity="0.8" />
          <line x1="35" y1="35" x2="60" y2="60" stroke={goldColor} strokeWidth="0.5" opacity="0.4" />
          <line x1="85" y1="35" x2="60" y2="60" stroke={goldColor} strokeWidth="0.5" opacity="0.4" />
          <line x1="35" y1="85" x2="60" y2="60" stroke={goldColor} strokeWidth="0.5" opacity="0.4" />
          <line x1="85" y1="85" x2="60" y2="60" stroke={goldColor} strokeWidth="0.5" opacity="0.4" />
        </svg>
      </div>

      <div className="container-master relative z-10">
        {/* Section Header */}
        <div
          className="mb-12 lg:mb-16 text-center"
          style={{
            opacity: 1,
            transform: "translateY(0)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <span className="font-sans font-medium tracking-widest uppercase text-sm caption-gold inline-block mb-4" style={{ letterSpacing: "0.12em" }}>
            {content.headline}
          </span>
          <h2 id="arsenal-headline" className="section-headline mx-auto mb-4" style={{ maxWidth: "600px" }}>
            {content.headline}
          </h2>
          <p className="body-lg mx-auto" style={{ maxWidth: "700px", color: textSecondary }}>
            {content.subheadline}
          </p>
        </div>

        {/* Category Cards - 5 cards with exact column ratios from spec */}
        <div
          className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6"
          role="list"
          aria-label={locale === "ar" ? "فئات الترسانة التقنية" : "Technical arsenal categories"}
        >
          {content.categories.map((category, catIndex) => (
            <article
              key={category.title}
              role="listitem"
              className="card-master relative overflow-hidden flex flex-col"
              style={{
                opacity: 1,
                transform: "translateY(0)",
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${catIndex * 100}ms`,
                minHeight: "400px",
              }}
            >
              {/* Gold top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: `linear-gradient(90deg, transparent 0%, ${lineGold} 50%, transparent 100%)`, opacity: 0.6 }}
                aria-hidden="true"
              />

              <div className="p-6 flex flex-col h-full">
                {/* Category Title */}
                <h3 className="font-display font-semibold text-lg tracking-tight mb-3" style={{ color: textPrimary }}>
                  {category.title}
                </h3>

                {/* Tech Stack Text */}
                <p className="text-sm mb-6 flex-1" style={{ color: textMuted, lineHeight: 1.5 }}>
                  {category.techs}
                </p>

                {/* Logo Grid */}
                <div className="flex flex-wrap gap-3" role="list" aria-label={`${category.title} technologies`}>
                  {category.logos.map((logo, logoIndex) => (
                    <div
                      key={logo.name}
                      role="listitem"
                      className="group relative"
                      style={{
                        opacity: 1,
                        transform: "translateY(0)",
                        transition: `all 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${300 + catIndex * 100 + logoIndex * 30}ms`,
                      }}
                    >
                      <button
                        className="w-20 h-20 rounded-xl flex items-center justify-center font-sans font-bold text-sm transition-all duration-200 relative overflow-hidden"
                        style={{
                          backgroundColor: `${logo.color}15`,
                          border: `1px solid ${logo.color}40`,
                          color: logo.color,
                        }}
                        aria-label={logo.name}
                        onMouseEnter={(e) => {
                          const target = e.currentTarget as HTMLElement;
                          target.style.backgroundColor = logo.color;
                          target.style.color = "#FFFFFF";
                          target.style.borderColor = logo.color;
                          target.style.transform = "scale(1.05)";
                          target.style.boxShadow = `0 8px 24px ${logo.color}40`;
                        }}
                        onMouseLeave={(e) => {
                          const target = e.currentTarget as HTMLElement;
                          target.style.backgroundColor = `${logo.color}15`;
                          target.style.color = logo.color;
                          target.style.borderColor = `${logo.color}40`;
                          target.style.transform = "scale(1)";
                          target.style.boxShadow = "none";
                        }}
                      >
                        {logo.text}
                        {/* Gold shimmer on hover */}
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/30 to-transparent"
                          style={{ opacity: 0, transform: "translateX(-100%)", transition: "all 0.4s ease-out" }}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Gold divider at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1440px] h-px pointer-events-none" aria-hidden="true">
        <div className="w-full h-full" style={{ background: `linear-gradient(90deg, transparent 0%, ${lineGold} 50%, transparent 100%)`, opacity: 0.4 }} />
      </div>
    </section>
  );
}