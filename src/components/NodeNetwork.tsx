"use client";

import { useEffect, useRef } from "react";

/**
 * NodeNetwork — REDEK's signature hero visualization.
 * A living echo of the REDEK logo: nodes that drift and connect, like
 * disputes converging toward resolution, layered over concentric rings.
 * Pure canvas, dpr-aware, pauses off-screen, respects reduced-motion.
 */
export default function NodeNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let running = true;

    type Node = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      accent: boolean;
      pulse: number;
    };
    let nodes: Node[] = [];

    // Focal point of the concentric rings (right-of-center).
    const focal = { x: 0.62, y: 0.46 };

    const BRAND = "20, 82, 240";
    const ACCENT = "34, 167, 224";
    const DEEP = "0, 30, 108";

    function resize() {
      const parent = canvas!.parentElement!;
      width = parent.clientWidth;
      height = parent.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = width + "px";
      canvas!.style.height = height + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function seed() {
      const area = width * height;
      const count = Math.max(18, Math.min(46, Math.round(area / 22000)));
      nodes = Array.from({ length: count }, () => {
        const accent = Math.random() < 0.28;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: accent ? 1.6 + Math.random() * 1.4 : 1.2 + Math.random() * 1.8,
          accent,
          pulse: Math.random() * Math.PI * 2,
        };
      });
    }

    function drawRings(t: number) {
      const cx = focal.x * width;
      const cy = focal.y * height;
      const base = Math.min(width, height) * 0.18;
      ctx!.save();
      for (let i = 1; i <= 5; i++) {
        const rad = base * i + Math.sin(t / 2600 + i) * 3;
        ctx!.beginPath();
        ctx!.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(${DEEP}, ${0.05 - i * 0.006})`;
        ctx!.lineWidth = 1;
        ctx!.stroke();
      }
      // focal crosshair
      ctx!.strokeStyle = `rgba(${BRAND}, 0.5)`;
      ctx!.lineWidth = 1;
      ctx!.beginPath();
      ctx!.moveTo(cx - 6, cy);
      ctx!.lineTo(cx + 6, cy);
      ctx!.moveTo(cx, cy - 6);
      ctx!.lineTo(cx, cy + 6);
      ctx!.stroke();
      ctx!.restore();
    }

    function step(t: number) {
      ctx!.clearRect(0, 0, width, height);
      drawRings(t);

      // move
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      // connections
      const maxDist = Math.min(width, height) * 0.34;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            const o = (1 - dist / maxDist) * 0.5;
            const col = a.accent || b.accent ? ACCENT : BRAND;
            ctx!.strokeStyle = `rgba(${col}, ${o * 0.55})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        n.pulse += 0.02;
        const glow = (Math.sin(n.pulse) + 1) / 2;
        const col = n.accent ? ACCENT : BRAND;
        const rr = n.r + glow * 0.8;
        const halo = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, rr * 6);
        halo.addColorStop(0, `rgba(${col}, ${0.28 + glow * 0.2})`);
        halo.addColorStop(1, `rgba(${col}, 0)`);
        ctx!.fillStyle = halo;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, rr * 6, 0, Math.PI * 2);
        ctx!.fill();

        ctx!.fillStyle = `rgba(${col}, 0.95)`;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, rr, 0, Math.PI * 2);
        ctx!.fill();
      }

      if (running && !reduce) raf = requestAnimationFrame(step);
    }

    resize();
    if (reduce) {
      step(0); // one static frame
    } else {
      raf = requestAnimationFrame(step);
    }

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    // Pause when scrolled away to save battery.
    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running && !reduce) {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(step);
        }
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      io.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
