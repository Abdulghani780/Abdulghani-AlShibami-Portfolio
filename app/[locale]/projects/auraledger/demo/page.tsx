"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function AuraLedgerSimulationPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const isRtl = locale === "ar";

  // Simulation State
  const [activeScenario, setActiveScenario] = useState<string>("steady");
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

      // Log event
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
          // Elect next active node
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
      `[BURST 14:22:30.500] Injected 25,000 TPS burst into LMAX Ring Buffer. Processing in 512-byte vectorized chunks.`,
      `[BENCHMARK 14:22:30.680] 25,000 transactions committed in 178ms. 0.00 KB GC memory allocated.`,
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

  return (
    <div className="py-8 sm:py-12 space-y-8">
      {/* ─────────────────────────────────────────────────────────────
          1. PROMINENT SIMULATION DISCLOSURE (References 09 & 10)
      ───────────────────────────────────────────────────────────── */}
      <Container>
        <div className="border border-gold/50 bg-gold/10 p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="gold" dot dotColor="emerald">
                INTERACTIVE WEB SIMULATION
              </Badge>
              <span className="font-mono text-[10px] text-content-muted">
                {"// CORE REVISION: v2.4.9-RELEASE"}
              </span>
            </div>
            <p className="text-content-primary text-xs leading-relaxed max-w-3xl">
              <strong>Architecture Disclaimer:</strong> This sandbox is an in-browser high-fidelity state machine reproduction of the native C# .NET 9 Core engine. Compiled desktop/server binaries run out-of-browser.
            </p>
          </div>

          <Link
            href={`/${locale}`}
            className="font-mono text-xs text-gold hover:text-gold-light uppercase tracking-wider shrink-0"
          >
            ← Return to Portfolio
          </Link>
        </div>
      </Container>

      {/* ─────────────────────────────────────────────────────────────
          2. SIMULATION CONTROLS & HUD HEADER
      ───────────────────────────────────────────────────────────── */}
      <Container>
        <div className="border border-hairline bg-surface p-4 sm:p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-mono text-xs text-content-muted">
              <span className="text-gold font-bold">AuraLedger v2.4</span>
              <span>{"//"}</span>
              <span>Raft + Speculative Pre-Vote</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-normal text-content-primary">
              Distributed Consensus Cluster Simulator
            </h1>
          </div>

          {/* Quick Telemetry Indicators */}
          <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
            <div className="px-3 py-1.5 border border-hairline bg-canvas">
              QUORUM: <span className="text-status-emerald font-bold">{Object.values(nodesActive).filter(Boolean).length}/5</span>
            </div>
            <div className="px-3 py-1.5 border border-hairline bg-canvas">
              TERM: <span className="text-gold font-bold">{term}</span>
            </div>
            <div className="px-3 py-1.5 border border-hairline bg-canvas">
              LEADER: <span className="text-content-primary font-bold">Node-{leaderNode}</span>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="primary" onClick={injectBurst}>
                Burst 25k TPS
              </Button>
              <Button size="sm" variant="secondary" onClick={resetState}>
                Reset
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* ─────────────────────────────────────────────────────────────
          3. MAIN SIMULATION WORKSPACE (3-COLUMN ARCHITECTURAL DECK)
      ───────────────────────────────────────────────────────────── */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Control Deck (Presets & Sliders) */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="space-y-4">
              <div className="font-mono text-xs uppercase tracking-wider text-gold font-semibold">
                {"// Chaos Presets"}
              </div>
              <div className="grid grid-cols-1 gap-2 text-xs font-mono">
                {[
                  { id: "steady", name: "01. Steady-State Settlement" },
                  { id: "partition", name: "02. Leader Partition Split-Brain" },
                  { id: "byzantine", name: "03. Cascading Network Jitter" },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActiveScenario(s.id);
                      if (s.id === "partition") toggleNode(1);
                      if (s.id === "byzantine") setLatency(85);
                      if (s.id === "steady") resetState();
                    }}
                    className={`text-left p-2.5 border transition-colors cursor-pointer ${
                      activeScenario === s.id
                        ? "border-gold bg-gold/10 text-gold"
                        : "border-hairline bg-surface hover:border-gold/40 text-content-secondary"
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>

              {/* Hardware sliders */}
              <div className="space-y-4 pt-4 border-t border-hairline">
                <div className="space-y-1.5 font-mono text-xs">
                  <div className="flex justify-between text-content-secondary">
                    <span>Network Latency:</span>
                    <span className="text-gold">{latency} ms</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={latency}
                    onChange={(e) => setLatency(Number(e.target.value))}
                    className="w-full accent-gold cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5 font-mono text-xs">
                  <div className="flex justify-between text-content-secondary">
                    <span>Packet Loss Ratio:</span>
                    <span className="text-gold">{packetLoss}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    step="0.5"
                    value={packetLoss}
                    onChange={(e) => setPacketLoss(Number(e.target.value))}
                    className="w-full accent-gold cursor-pointer"
                  />
                </div>
              </div>

              {/* Node Matrix */}
              <div className="pt-4 border-t border-hairline space-y-2 font-mono text-xs">
                <div className="text-content-muted text-[10px] tracking-wider uppercase">
                  {"// Cluster Nodes (5)"}
                </div>
                {[1, 2, 3, 4, 5].map((id) => (
                  <div
                    key={id}
                    className="flex items-center justify-between p-2 border border-hairline/60 bg-canvas"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          nodesActive[id]
                            ? id === leaderNode
                              ? "bg-gold shadow-[0_0_8px_#D4AF37]"
                              : "bg-status-emerald"
                            : "bg-status-rose"
                        }`}
                      />
                      <span>
                        Node-0{id}{" "}
                        {id === leaderNode && nodesActive[id] && (
                          <strong className="text-gold text-[10px]">[LEADER]</strong>
                        )}
                      </span>
                    </div>
                    <button
                      onClick={() => toggleNode(id)}
                      className={`text-[10px] px-2 py-0.5 border uppercase cursor-pointer ${
                        nodesActive[id]
                          ? "border-status-rose/40 text-status-rose hover:bg-status-rose/10"
                          : "border-status-emerald/40 text-status-emerald hover:bg-status-emerald/10"
                      }`}
                    >
                      {nodesActive[id] ? "Kill" : "Heal"}
                    </button>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Center & Right Topology Canvas */}
          <div className="lg:col-span-8 space-y-6">
            {/* Visual Raft Cluster Schematic */}
            <Card className="p-8 relative min-h-[340px] flex flex-col items-center justify-center overflow-hidden bg-surface-low border-hairline">
              <div className="absolute top-4 left-4 font-mono text-[10px] text-content-muted uppercase">
                {"// Raft Cluster Topology Visualizer"}
              </div>
              <div className="absolute top-4 right-4 font-mono text-[10px] text-status-emerald">
                QUORUM CONSENSUS: VERIFIED
              </div>

              {/* Topology Nodes Ring */}
              <div className="relative w-64 h-64 flex items-center justify-center my-6">
                {/* Orbital Guide Circle */}
                <div className="absolute inset-0 rounded-full border border-dashed border-hairline/70 pointer-events-none" />

                {/* Central Leader Node */}
                <div
                  className={`w-20 h-20 border-2 flex flex-col items-center justify-center p-2 text-center transition-all duration-300 z-10 ${
                    nodesActive[leaderNode]
                      ? "border-gold bg-canvas text-gold shadow-[0_0_24px_rgba(212,175,55,0.4)]"
                      : "border-status-rose bg-canvas text-status-rose"
                  }`}
                >
                  <span className="font-mono text-[10px] font-bold">NODE-0{leaderNode}</span>
                  <span className="font-mono text-[8px] uppercase tracking-wider">
                    {nodesActive[leaderNode] ? "LEADER" : "FAILED"}
                  </span>
                </div>

                {/* Satellite Follower Nodes */}
                {[2, 3, 4, 5].map((id, index) => {
                  const angle = (index * 90 * Math.PI) / 180;
                  const radius = 95; // px
                  const x = Math.round(Math.cos(angle) * radius);
                  const y = Math.round(Math.sin(angle) * radius);

                  return (
                    <div
                      key={id}
                      style={{ transform: `translate(${x}px, ${y}px)` }}
                      className={`absolute w-12 h-12 border flex flex-col items-center justify-center text-center transition-all duration-200 ${
                        nodesActive[id]
                          ? "border-hairline bg-surface text-content-primary hover:border-gold"
                          : "border-status-rose/60 bg-status-rose/5 text-status-rose line-through"
                      }`}
                    >
                      <span className="font-mono text-[9px] font-semibold">N{id}</span>
                      <span className="font-mono text-[7px] text-content-muted">FOL</span>
                    </div>
                  );
                })}
              </div>

              <div className="font-mono text-xs text-content-muted text-center pt-2">
                Linearizable Quorum: 3 of 5 nodes required. Term heartbeat: {latency}ms.
              </div>
            </Card>

            {/* Bottom Developer Terminal REPL */}
            <Card className="bg-canvas border-hairline p-4 space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-hairline pb-2 text-[10px] text-content-muted">
                <span className="flex items-center gap-1.5 text-gold">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  aura-cli interactive consensus REPL
                </span>
                <span>CLUSTER_SESSION: 0x8F94D2</span>
              </div>
              <div className="space-y-1 max-h-36 overflow-y-auto pt-2 text-content-secondary text-[11px] leading-relaxed">
                {replLogs.map((log, i) => (
                  <div
                    key={i}
                    className={
                      log.includes("FAULT") || log.includes("lost")
                        ? "text-status-rose"
                        : log.includes("LEADER") || log.includes("COMMITTED")
                        ? "text-gold"
                        : "text-content-secondary"
                    }
                  >
                    {log}
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-hairline/60 flex items-center gap-2 text-gold">
                <span>&gt;</span>
                <input
                  type="text"
                  placeholder='Type simulation command (e.g., "burst", "partition", "heal")...'
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      const val = (e.target as HTMLInputElement).value.trim().toLowerCase();
                      if (val === "burst") injectBurst();
                      else if (val === "reset") resetState();
                      else if (val === "kill 1") toggleNode(1);
                      else if (val === "heal 1") toggleNode(1);
                      else {
                        setReplLogs((prev) => [
                          ...prev,
                          `[CLI] Executed: ${val} (OK - Term ${term})`,
                        ]);
                      }
                      (e.target as HTMLInputElement).value = "";
                    }
                  }}
                  className="w-full bg-transparent text-content-primary focus:outline-none text-xs"
                />
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
