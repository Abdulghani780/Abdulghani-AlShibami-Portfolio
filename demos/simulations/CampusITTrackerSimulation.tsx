"use client";

import React, { useState } from "react";
import { DemoShell } from "@/demos/shared/DemoShell";
import { DemoProps } from "@/demos/registry";
import {
  Network,
  Server,
  Wifi,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Send,
  RefreshCw,
  Activity,
  ChevronRight,
} from "lucide-react";

interface CampusNode {
  id: string;
  name: string;
  nameAr: string;
  zone: string;
  zoneAr: string;
  tier: "Core" | "Distribution" | "Edge";
  status: "ONLINE" | "DEGRADED" | "OFFLINE";
  latencyMs: number;
  ip: string;
}

interface IncidentTicket {
  ticketId: string;
  title: string;
  titleAr: string;
  location: string;
  locationAr: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "RESOLVED";
  status: "OPEN" | "IN_PROGRESS" | "RESOLVED";
  timestamp: string;
}

export function CampusITTrackerSimulation({ locale = "en", isRtl = false }: DemoProps) {
  const initialNodes: CampusNode[] = [
    {
      id: "node-1",
      name: "Core Gateway 01",
      nameAr: "البوابة المركزية الرئيسية ٠١",
      zone: "Data Center",
      zoneAr: "مركز البيانات",
      tier: "Core",
      status: "ONLINE",
      latencyMs: 1.2,
      ip: "10.0.0.1",
    },
    {
      id: "node-2",
      name: "Dist Router — Engineering",
      nameAr: "راوتر التوزيع — كلية الهندسة",
      zone: "Bldg 04 (Engineering)",
      zoneAr: "المبنى ٠٤ (الهندسة)",
      tier: "Distribution",
      status: "ONLINE",
      latencyMs: 4.8,
      ip: "10.0.4.1",
    },
    {
      id: "node-3",
      name: "Dist Router — Admin Hall",
      nameAr: "راوتر التوزيع — المبنى الإداري",
      zone: "Bldg 01 (Admin)",
      zoneAr: "المبنى ٠١ (الإدارة)",
      tier: "Distribution",
      status: "ONLINE",
      latencyMs: 3.5,
      ip: "10.0.1.1",
    },
    {
      id: "node-4",
      name: "Lab Switch 302",
      nameAr: "محول مختبر الحاسب ٣٠٢",
      zone: "Lab 302",
      zoneAr: "معمل ٣٠٢",
      tier: "Edge",
      status: "DEGRADED",
      latencyMs: 48.1,
      ip: "10.0.4.32",
    },
    {
      id: "node-5",
      name: "Quad Wireless AP 07",
      nameAr: "نقطة اتصال الساحة الجامعية ٠٧",
      zone: "Campus Plaza",
      zoneAr: "الساحة المركزية",
      tier: "Edge",
      status: "ONLINE",
      latencyMs: 12.4,
      ip: "10.0.9.7",
    },
  ];

  const initialTickets: IncidentTicket[] = [
    {
      ticketId: "INC-8941",
      title: "Elevated ping latency on Lab Switch 302",
      titleAr: "ارتفاع في زمن استجابة محول مختبر ٣٠٢",
      location: "Bldg 04, Room 302",
      locationAr: "مبنى ٠٤، قاعة ٣٠٢",
      severity: "HIGH",
      status: "OPEN",
      timestamp: "10:14 AM",
    },
    {
      ticketId: "INC-8938",
      title: "Central Library Wi-Fi AP reboot",
      titleAr: "إعادة تشغيل نقطة وصول المكتبة المركزية",
      location: "Library 2nd Floor",
      locationAr: "المكتبة، الدور الثاني",
      severity: "MEDIUM",
      status: "RESOLVED",
      timestamp: "09:20 AM",
    },
  ];

  const [nodes, setNodes] = useState<CampusNode[]>(initialNodes);
  const [tickets, setTickets] = useState<IncidentTicket[]>(initialTickets);
  const [selectedNode, setSelectedNode] = useState<CampusNode | null>(initialNodes[3]);
  const [isPinging, setIsPinging] = useState(false);
  const [pingLog, setPingLog] = useState<string[]>([]);
  const [newTicketTitle, setNewTicketTitle] = useState("");
  const [newTicketLocation, setNewTicketLocation] = useState("");

  const handlePingNode = (node: CampusNode) => {
    setIsPinging(true);
    setPingLog((prev) => [
      `[PING ${new Date().toLocaleTimeString()}] Pinging ${node.name} (${node.ip})...`,
      ...prev.slice(0, 8),
    ]);

    setTimeout(() => {
      const isHealthy = Math.random() > 0.15;
      const jitter = Math.floor(Math.random() * 15) + (node.tier === "Core" ? 1 : 12);
      setNodes((current) =>
        current.map((n) =>
          n.id === node.id
            ? {
                ...n,
                latencyMs: jitter,
                status: isHealthy ? "ONLINE" : "DEGRADED",
              }
            : n
        )
      );
      setPingLog((prev) => [
        `[REPLY ${new Date().toLocaleTimeString()}] 64 bytes from ${node.ip}: icmp_seq=1 time=${jitter.toFixed(1)}ms (${isHealthy ? "SUCCESS" : "DEGRADED"})`,
        ...prev.slice(0, 8),
      ]);
      setIsPinging(false);
    }, 450);
  };

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTicketTitle.trim()) return;

    const newTicket: IncidentTicket = {
      ticketId: `INC-${Math.floor(1000 + Math.random() * 9000)}`,
      title: newTicketTitle,
      titleAr: newTicketTitle,
      location: newTicketLocation || "Campus Zone",
      locationAr: newTicketLocation || "الحرم الجامعي",
      severity: "HIGH",
      status: "OPEN",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setTickets([newTicket, ...tickets]);
    setNewTicketTitle("");
    setNewTicketLocation("");
  };

  const handleResolveTicket = (ticketId: string) => {
    setTickets((current) =>
      current.map((t) =>
        t.ticketId === ticketId ? { ...t, status: "RESOLVED", severity: "RESOLVED" } : t
      )
    );
  };

  const handleReset = () => {
    setNodes(initialNodes);
    setTickets(initialTickets);
    setSelectedNode(initialNodes[3]);
    setPingLog([]);
  };

  return (
    <DemoShell
      title={locale === "ar" ? "نظام تتبع شبكات الحرم الجامعي — رصد الطوبولوجيا" : "Campus IT Infrastructure Tracker — Topology Monitor"}
      categoryName={locale === "ar" ? "الشبكات والبنية التحتية" : "Network Infrastructure"}
      projectSlug="campus-it-tracker"
      locale={locale}
      disclaimer={{
        en: "This is an in-browser interactive simulation representing campus network topology status and incident ticketing workflows.",
        ar: "هذه محاكاة تفاعلية داخل المتصفح تمثل حالة طوبولوجيا شبكات الحرم الجامعي وسير عمل تتبع البلاغات.",
      }}
      onReset={handleReset}
      statusText="TOPOLOGY MONITOR: ACTIVE"
      statusItems={[
        { label: "NODES", value: `${nodes.length} MONITORED` },
        { label: "HEALTH", value: "92% OPTIMAL" },
        { label: "OPEN TICKETS", value: `${tickets.filter((t) => t.status === "OPEN").length}` },
      ]}
    >
      <div className="p-3 sm:p-5 flex flex-col gap-5 font-sans">
        {/* Topology Node Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Node List View */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-text-primary flex items-center gap-2">
                <Network className="w-4 h-4 text-brand-gold" />
                <span>{locale === "ar" ? "خريطة عقد الشبكة (3-Tier Topology)" : "Campus Node Hierarchy"}</span>
              </span>
              <span className="text-[10px] font-mono text-text-dim">
                ICMP TELEMETRY INTERVAL: 15s
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {nodes.map((node) => {
                const isSelected = selectedNode?.id === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      isSelected
                        ? "bg-surface-secondary border-brand-gold shadow-md"
                        : "bg-surface border-border hover:border-brand-gold/40"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {node.tier === "Core" ? (
                          <Server className="w-4 h-4 text-brand-gold" />
                        ) : node.tier === "Distribution" ? (
                          <Network className="w-4 h-4 text-sky-400" />
                        ) : (
                          <Wifi className="w-4 h-4 text-emerald-400" />
                        )}
                        <div>
                          <div className="text-xs font-bold text-text-primary">
                            {locale === "ar" ? node.nameAr : node.name}
                          </div>
                          <div className="text-[10px] font-mono text-text-dim">{node.ip}</div>
                        </div>
                      </div>
                      <span
                        className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border ${
                          node.status === "ONLINE"
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                            : "bg-amber-500/10 text-amber-400 border-amber-500/30"
                        }`}
                      >
                        {node.status}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-text-muted pt-2 border-t border-border/50">
                      <span>{locale === "ar" ? node.zoneAr : node.zone}</span>
                      <span className="text-brand-gold font-semibold">{node.latencyMs} ms</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Node Telemetry & Ping Inspector */}
            {selectedNode && (
              <div className="p-4 bg-surface-secondary/40 border border-border rounded-lg flex flex-col gap-3 font-mono text-xs">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-brand-gold" />
                    <span className="font-bold text-text-primary">
                      {locale === "ar" ? selectedNode.nameAr : selectedNode.name} — {selectedNode.ip}
                    </span>
                  </div>
                  <button
                    disabled={isPinging}
                    onClick={() => handlePingNode(selectedNode)}
                    className="px-3 py-1.5 bg-brand-gold text-surface-dark font-bold rounded flex items-center gap-1.5 hover:brightness-110 active:scale-95 transition-all text-xs"
                  >
                    <RefreshCw className={`w-3 h-3 ${isPinging ? "animate-spin" : ""}`} />
                    <span>{locale === "ar" ? "فحص الاستجابة (Ping)" : "Send ICMP Ping"}</span>
                  </button>
                </div>

                <div className="bg-surface-dark/90 border border-border/80 rounded p-3 text-[11px] text-text-dim flex flex-col gap-1 min-h-[90px] overflow-y-auto">
                  {pingLog.length === 0 ? (
                    <span className="text-text-dim/60 italic">
                      {locale === "ar"
                        ? "اضغط على فحص الاستجابة لاختبار استجابة العقدة..."
                        : "Click 'Send ICMP Ping' to simulate a real-time round-trip latency test..."}
                    </span>
                  ) : (
                    pingLog.map((log, index) => (
                      <span
                        key={index}
                        className={log.includes("DEGRADED") ? "text-amber-400" : "text-emerald-400"}
                      >
                        {log}
                      </span>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Incident Ticketing Helpdesk Drawer */}
          <div className="p-4 bg-surface border border-border rounded-lg flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-border pb-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-text-primary">
                <AlertTriangle className="w-4 h-4 text-brand-gold" />
                <span>{locale === "ar" ? "سجل بلاغات الدعم الفني" : "Incident Ticket Desk"}</span>
              </div>
              <span className="text-[10px] font-mono text-text-dim">
                {tickets.filter((t) => t.status === "OPEN").length} ACTIVE
              </span>
            </div>

            {/* Ticket List */}
            <div className="flex flex-col gap-2.5 overflow-y-auto max-h-[260px] pr-1">
              {tickets.map((ticket) => (
                <div
                  key={ticket.ticketId}
                  className="p-2.5 bg-surface-secondary/50 border border-border/60 rounded text-xs flex flex-col gap-1.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-semibold text-text-primary text-[11px] leading-snug">
                      {locale === "ar" ? ticket.titleAr : ticket.title}
                    </span>
                    <span
                      className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded shrink-0 ${
                        ticket.status === "RESOLVED"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                          : "bg-rose-500/10 text-rose-400 border border-rose-500/30"
                      }`}
                    >
                      {ticket.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-text-dim pt-1 border-t border-border/40">
                    <span>{locale === "ar" ? ticket.locationAr : ticket.location}</span>
                    {ticket.status === "OPEN" && (
                      <button
                        onClick={() => handleResolveTicket(ticket.ticketId)}
                        className="text-brand-gold hover:underline font-bold"
                      >
                        {locale === "ar" ? "اعتماد الحل ✓" : "Resolve ✓"}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Ticket Create Form */}
            <form
              onSubmit={handleCreateTicket}
              className="pt-2 border-t border-border flex flex-col gap-2 font-mono text-xs"
            >
              <div className="text-[11px] font-bold text-text-primary">
                {locale === "ar" ? "تسجيل بلاغ عطل شبكة جديد" : "Dispatch New Incident"}
              </div>
              <input
                type="text"
                placeholder={locale === "ar" ? "عنوان العطل..." : "Incident summary..."}
                value={newTicketTitle}
                onChange={(e) => setNewTicketTitle(e.target.value)}
                className="w-full bg-surface-secondary border border-border rounded px-2.5 py-1.5 text-xs text-text-primary"
              />
              <input
                type="text"
                placeholder={locale === "ar" ? "الموقع (مثال: مبنى الهندسة)" : "Location (e.g. Lab 401)"}
                value={newTicketLocation}
                onChange={(e) => setNewTicketLocation(e.target.value)}
                className="w-full bg-surface-secondary border border-border rounded px-2.5 py-1.5 text-xs text-text-primary"
              />
              <button
                type="submit"
                className="w-full py-1.5 bg-surface border border-brand-gold/40 text-brand-gold hover:bg-brand-gold/10 font-bold rounded flex items-center justify-center gap-1.5 transition-colors text-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{locale === "ar" ? "إرسال البلاغ" : "Submit Ticket"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </DemoShell>
  );
}
