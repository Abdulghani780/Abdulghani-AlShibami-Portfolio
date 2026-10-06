"use client";

import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface Particle {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
}

export function Hero3DCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Mouse coordinates mapped to -1 to 1
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let rotX = 0;
    let rotY = 0;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
      targetRotX = mouseY * 0.45;
      targetRotY = mouseX * 0.45;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Generate 3D Particle Cloud
    const particleCount = 70;
    const particles: Particle[] = [];
    const goldTones = ["#D4AF37", "#F3E5AB", "#AA771C", "#FFFFFF", "#C59B27"];

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 120 + Math.random() * 260;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      particles.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        vz: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 2 + 0.8,
        color: goldTones[Math.floor(Math.random() * goldTones.length)],
      });
    }

    let angle = 0;
    const focalLength = 400;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth damping toward mouse rotation
      if (!prefersReducedMotion) {
        rotX += (targetRotX - rotX) * 0.05;
        rotY += (targetRotY - rotY) * 0.05;
        angle += 0.003;
      }

      const centerX = width * 0.72; // Anchored gracefully behind the portrait zone
      const centerY = height * 0.46;

      // Draw 3D Concentric Orbit Rings
      const rings = [
        { r: 180, tiltX: 1.1 + rotX, tiltY: angle + rotY, color: "rgba(212, 175, 55, 0.22)", dash: [4, 6] },
        { r: 230, tiltX: 0.6 + rotX, tiltY: -angle * 0.8 + rotY, color: "rgba(243, 229, 171, 0.16)", dash: [8, 12] },
        { r: 280, tiltX: -0.8 + rotX, tiltY: angle * 0.6 + rotY, color: "rgba(170, 119, 28, 0.18)", dash: [3, 8] },
      ];

      rings.forEach((ring) => {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.beginPath();
        ctx.setLineDash(ring.dash);
        ctx.strokeStyle = ring.color;
        ctx.lineWidth = 1.2;

        // Draw segmented 3D ellipse
        const steps = 60;
        for (let i = 0; i <= steps; i++) {
          const theta = (i / steps) * Math.PI * 2;
          const px = ring.r * Math.cos(theta);
          const py = ring.r * Math.sin(theta);

          // 3D Rotation Matrix
          const cosY = Math.cos(ring.tiltY);
          const sinY = Math.sin(ring.tiltY);
          const cosX = Math.cos(ring.tiltX);
          const sinX = Math.sin(ring.tiltX);

          const x1 = px * cosY;
          const z1 = -px * sinY;
          const y2 = py * cosX - z1 * sinX;
          const z2 = py * sinX + z1 * cosX;

          const scale = focalLength / (focalLength + z2);
          const projX = x1 * scale;
          const projY = y2 * scale;

          if (i === 0) {
            ctx.moveTo(projX, projY);
          } else {
            ctx.lineTo(projX, projY);
          }
        }
        ctx.stroke();
        ctx.restore();
      });

      // Render 3D Floating Particles & Laser Connectors
      const projectedPoints: { x: number; y: number; scale: number; color: string; size: number }[] = [];

      particles.forEach((p) => {
        // Continuous orbit
        if (!prefersReducedMotion) {
          p.baseX += p.vx;
          p.baseY += p.vy;
          p.baseZ += p.vz;
        }

        // Apply global 3D rotation
        const totalAngleY = angle + rotY;
        const totalAngleX = rotX;

        const cosY = Math.cos(totalAngleY);
        const sinY = Math.sin(totalAngleY);
        const cosX = Math.cos(totalAngleX);
        const sinX = Math.sin(totalAngleX);

        const x1 = p.baseX * cosY + p.baseZ * sinY;
        const z1 = -p.baseX * sinY + p.baseZ * cosY;
        const y2 = p.baseY * cosX - z1 * sinX;
        const z2 = p.baseY * sinX + z1 * cosX;

        const scale = focalLength / (focalLength + z2 + 200);
        if (scale > 0) {
          const projX = centerX + x1 * scale;
          const projY = centerY + y2 * scale;
          projectedPoints.push({
            x: projX,
            y: projY,
            scale,
            color: p.color,
            size: p.size * scale,
          });
        }
      });

      // Connect nearby particles with subtle laser lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const dx = projectedPoints[i].x - projectedPoints[j].x;
          const dy = projectedPoints[i].y - projectedPoints[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 75) {
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.15 * (1 - dist / 75)})`;
            ctx.beginPath();
            ctx.moveTo(projectedPoints[i].x, projectedPoints[i].y);
            ctx.lineTo(projectedPoints[j].x, projectedPoints[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particle points
      projectedPoints.forEach((pt) => {
        ctx.fillStyle = pt.color;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, Math.max(0.5, pt.size), 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none select-none z-0 ${className}`}
      aria-hidden="true"
    />
  );
}
