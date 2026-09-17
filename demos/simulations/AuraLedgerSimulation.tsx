"use client";

import React, { useState } from "react";
import { DemoShell } from "@/demos/shared/DemoShell";
import { DemoProps } from "@/demos/registry";
import { Server, Activity, AlertOctagon, Zap, RotateCcw } from "lucide-react";

export function AuraLedgerSimulation({ locale = "en", isRtl = false }: DemoProps) {
  const [latency, setLatency] = useState<number>(12);
  const [packetLoss, setPacketLoss] = useState<number>(0.0);
  const [leaderNode, setLeaderNode] = useState<number>(1);
  const [term, setTerm] = useState<number>(4891);
  const [nodesActive, setNodesActive] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  });
  const [replLogs, setReplLogs] = useState<string[]>([
    "[SYSTEM 14:22:00.012] Initializing AuraLedger In-Browser Raft Core State Machine...",
    "[READY 14:22:00.045] 5-node cluster bootstrapped. Epoch: 1718991200, Quorum Required: 3.",
    "[COMMITTED 14:22:01.002] Block #1,842,094 linearizable write confirmed across 5/5 nodes.",
  ]);

  const toggleNode = (nodeId: number) => {
    setNodesActive((prev) => {
      const nextState = !prev[nodeId];
      const updated = { ...prev, [nodeId]: nextState };

      if (!nextState) {
        const newTerm = term + 1;
        setTerm(newTerm);
        setReplLogs((old) => [
          ...old,
          `[FAULT 14:22:15.820] Node-${nodeId} disconnected from Quorum network.`,
          nodeId === leaderNode
            ? `[ELECTION 14:22:15.845] Leader Node-${nodeId} lost! Speculative Pre-Vote triggered across remaining nodes. Term -> ${newTerm}.`
            : `[QUORUM 14:22:15.830] Node-${nodeId} isolated. 4/5 nodes maintain linearizable majority.`,
        ]);
        if (nodeId === leaderNode) {
          const nextLeader = [2, 3, 4, 5].find((id) => updated[id]) || 1;
          setLeaderNode(nextLeader);
          setReplLogs((old) => [
            ...old,
            `[LEADER 14:22:15.882] Node-${nextLeader} acquired lease-read in 38.2ms. New LEADER established.`,
          ]);
        }
      } else {
        setReplLogs((old) => [
          ...old,
          `[HEAL 14:22:20.104] Node-${nodeId} reconnected. Fast-forwarding WAL log catchup (Index: 1,842,094).`,
        ]);
      }
      return updated;
    });
  };

  const injectBurst = () => {
    setReplLogs((old) => [
      ...old,
      `[BURST 14:22:30.500] Injected simulated benchmark burst into memory ring buffer.`,
      `[COMMITTED 14:22:30.680] Simulated batch committed in 18ms. 0 bytes GC memory allocated.`,
    ]);
  };

  const resetState = () => {
    setNodesActive({ 1: true, 2: true, 3: true, 4: true, 5: true });
    setLeaderNode(1);
    setTerm(4891);
    setLatency(12);
    setPacketLoss(0.0);
    setReplLogs([
      "[SYSTEM 14:22:00.012] State machine reset to clean steady-state snapshot.",
      "[READY 14:22:00.045] 5-node cluster bootstrapped. Epoch: 1718991200, Quorum Required: 3.",
    ]);
  };

  const activeCount = Object.values(nodesActive).filter(Boolean).length;
  const hasQuorum = activeCount >= 3;

  return (
    <DemoShell
      title={locale === "ar" ? "محرك أورا ليدجر للتوافق الموزع — محاكاة Raft" : "AuraLedger Distributed Consensus — Raft Sandbox"}
      categoryName={locale === "ar" ? "الأنظمة الموزعة" : "Distributed Systems"}
      projectSlug="auraledger"
      locale={locale}
      disclaimer={{
        en: "Demonstration Sandbox: This is an in-browser state machine reproduction of a Raft consensus engine. It simulates network partitions and quorum elections with mock data.",
        ar: "مختبر محاكاة تجريبي: هذه محاكاة داخل المتصفح لآلة حالة بروتوكول توافق Raft توضح انقسامات الشبكة وتصويت النصاب ببيانات افتراضية.",
      }}
      onReset={resetState}
      statusText={hasQuorum ? "QUORUM MAINTAINED" : "QUORUM LOST"}
      statusItems={[
        { label: "NODES", value: `${activeCount}/5 ONLINE` },
        { label: "TERM", value: `${term}` },
        { label: "LEADER", value: `Node-${leaderNode}` },
      ]}
    >
      <div className="p-3 sm:p-5 flex flex-col gap-5 font-sans">
        {/* Cluster Topology Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-text-primary flex items-center gap-2">
                <Server className="w-4 h-4 text-brand-gold" />
                <span>{locale === "ar" ? "طوبولوجيا عنقود خوادم Raft (٥ عقد)" : "5-Node Consensus Ring Topology"}</span>
              </span>
              <span className="text-[10px] font-mono text-text-dim">
                QUORUM THRESHOLD: 3 / 5
              </span>
            </div>

            {/* 5 Nodes Interactive Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
              {[1, 2, 3, 4, 5].map((id) => {
                const isActive = nodesActive[id];
                const isLeader = id === leaderNode && isActive;

                return (
                  <div
                    key={id}
                    className={`p-3 rounded-lg border flex flex-col items-center justify-between text-center gap-2 transition-all ${
                      !isActive
                        ? "bg-rose-500/10 border-rose-500/30 opacity-70"
                        : isLeader
                        ? "bg-brand-gold/15 border-brand-gold shadow-md"
                        : "bg-surface border-border"
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-surface-secondary flex items-center justify-center font-mono font-bold text-xs text-text-primary">
                      #{id}
                    </div>

                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-text-primary font-mono">
                        Node-{id}
                      </span>
                      <span
                        className={`text-[9px] font-mono font-bold uppercase ${
                          !isActive
                            ? "text-rose-400"
                            : isLeader
                            ? "text-brand-gold font-bold"
                            : "text-sky-400"
                        }`}
                      >
                        {!isActive ? "ISOLATED" : isLeader ? "★ LEADER" : "FOLLOWER"}
                      </span>
                    </div>

                    <button
                      onClick={() => toggleNode(id)}
                      className={`w-full py-1 rounded text-[10px] font-mono font-bold transition-all ${
                        isActive
                          ? "bg-rose-500/20 text-rose-400 border border-rose-500/30 hover:bg-rose-500/30"
                          : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30"
                      }`}
                    >
                      {isActive
                        ? locale === "ar"
                          ? "فصل العقدة"
                          : "Isolate"
                        : locale === "ar"
                        ? "إعادة الوصل"
                        : "Heal"}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Raft Replication & WAL Commit Log */}
            <div className="p-3.5 bg-surface-secondary/40 border border-border rounded-lg flex flex-col gap-2 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-text-primary flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-brand-gold" />
                  <span>{locale === "ar" ? "سجل تكرار العمليات (WAL Log Stream)" : "Vectorized WAL Commit Stream"}</span>
                </span>
                <span className="text-[10px] text-text-dim">APPEND_ONLY_BUFFER</span>
              </div>

              <div className="bg-surface-dark/95 border border-border/80 rounded p-3 text-[11px] text-text-dim flex flex-col gap-1 max-h-[160px] overflow-y-auto">
                {replLogs.map((log, idx) => (
                  <span
                    key={idx}
                    className={
                      log.includes("FAULT") || log.includes("lost")
                        ? "text-rose-400"
                        : log.includes("LEADER") || log.includes("BURST")
                        ? "text-brand-gold"
                        : "text-emerald-400"
                    }
                  >
                    {log}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Fault Injection Control Box */}
          <div className="p-4 bg-surface border border-border rounded-lg flex flex-col justify-between gap-4 font-mono text-xs">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <AlertOctagon className="w-4 h-4 text-brand-gold" />
                <span className="font-bold text-text-primary">
                  {locale === "ar" ? "حقن الأعطال العشوائية (Chaos Test)" : "Chaos Partition Controls"}
                </span>
              </div>

              <p className="text-[11px] text-text-dim leading-relaxed">
                {locale === "ar"
                  ? "اختبر قدرة بروتوكول Raft على التوافق عند فصل القائد أو عزل عقد متعددة في آن واحد."
                  : "Trigger edge-case network partitions to witness speculative pre-voting and automatic quorum leadership failover."}
              </p>

              <div>
                <label className="block text-[10px] text-text-dim mb-1">
                  {locale === "ar" ? "محاكاة زمن تأخير الشبكة" : "Simulated Network Latency"}
                </label>
                <input
                  type="range"
                  min={1}
                  max={80}
                  value={latency}
                  onChange={(e) => setLatency(Number(e.target.value))}
                  className="w-full accent-brand-gold"
                />
                <div className="flex justify-between text-[10px] text-text-muted mt-1">
                  <span>1 ms</span>
                  <span className="text-brand-gold font-bold">{latency} ms</span>
                  <span>80 ms</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={injectBurst}
                className="w-full py-2 bg-brand-gold text-surface-dark font-bold rounded flex items-center justify-center gap-1.5 hover:brightness-110 active:scale-95 transition-all text-xs"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>{locale === "ar" ? "حقن دفعة عمليات تجريبية" : "Inject Benchmark Burst"}</span>
              </button>

              <button
                onClick={resetState}
                className="w-full py-1.5 bg-surface-secondary border border-border text-text-dim hover:text-text-primary rounded text-[11px] transition-colors"
              >
                {locale === "ar" ? "إعادة ضبط بيئة التوافق" : "Reset Cluster Snapshot"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </DemoShell>
  );
}
