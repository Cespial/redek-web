"use client";

import { useEffect, useRef } from "react";

/**
 * NodeNetwork — REDEK's signature hero visualization.
 * A living echo of the REDEK logo: nodes that drift and connect, like
 * disputes converging toward resolution, over concentric rings.
 * Cursor-reactive (gentle repulsion + highlighted links), theme-aware,
 * dpr-aware, pauses off-screen, respects reduced-motion.
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

    // Theme-aware colors. Strings used by the draw code, derived each frame
    // from `cur` which eases toward `tgt` for a smooth theme cross-fade.
    let BRAND = "20, 82, 240";
    let ACCENT = "34, 167, 224";
    let DEEP = "0, 30, 108";
    const hexToArr = (hex: string): [number, number, number] | null => {
      const h = hex.trim().replace("#", "");
      if (h.length < 6) return null;
      const r = parseInt(h.slice(0, 2), 16);
      const g = parseInt(h.slice(2, 4), 16);
      const b = parseInt(h.slice(4, 6), 16);
      if ([r, g, b].some((n) => Number.isNaN(n))) return null;
      return [r, g, b];
    };
    const cur = { brand: [20, 82, 240], accent: [34, 167, 224], deep: [0, 30, 108] };
    const tgt = { brand: [20, 82, 240], accent: [34, 167, 224], deep: [0, 30, 108] };
    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      tgt.brand = hexToArr(cs.getPropertyValue("--brand")) || tgt.brand;
      tgt.accent = hexToArr(cs.getPropertyValue("--accent")) || tgt.accent;
      tgt.deep = hexToArr(cs.getPropertyValue("--brand-deep")) || tgt.deep;
    };
    const lerpColors = () => {
      (["brand", "accent", "deep"] as const).forEach((k) => {
        for (let i = 0; i < 3; i++) cur[k][i] += (tgt[k][i] - cur[k][i]) * 0.08;
      });
      BRAND = cur.brand.map(Math.round).join(", ");
      ACCENT = cur.accent.map(Math.round).join(", ");
      DEEP = cur.deep.map(Math.round).join(", ");
    };
    readColors();
    cur.brand = [...tgt.brand];
    cur.accent = [...tgt.accent];
    cur.deep = [...tgt.deep];
    lerpColors();
    const themeObserver = new MutationObserver(() => {
      readColors();
      if (reduce) {
        cur.brand = [...tgt.brand];
        cur.accent = [...tgt.accent];
        cur.deep = [...tgt.deep];
        lerpColors();
        step(0);
      }
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const mouse = { x: -9999, y: -9999, active: false };

    type Node = {
      x: number;
      y: number;
      hx: number; // home position
      hy: number;
      vx: number;
      vy: number;
      r: number;
      accent: boolean;
      pulse: number;
    };
    let nodes: Node[] = [];
    const focal = { x: 0.62, y: 0.46 };

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
        const x = Math.random() * width;
        const y = Math.random() * height;
        return {
          x,
          y,
          hx: x,
          hy: y,
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
      lerpColors();
      ctx!.clearRect(0, 0, width, height);
      drawRings(t);

      const influence = Math.min(width, height) * 0.22;
      for (const n of nodes) {
        // drift + spring back home
        n.x += n.vx;
        n.y += n.vy;
        n.x += (n.hx - n.x) * 0.005;
        n.y += (n.hy - n.y) * 0.005;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        // gentle cursor repulsion
        if (mouse.active) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < influence && d > 0.01) {
            const f = (1 - d / influence) * 1.4;
            n.x += (dx / d) * f;
            n.y += (dy / d) * f;
          }
        }
      }

      // node-node connections
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

      // cursor links — illuminate nearby nodes
      if (mouse.active) {
        const linkR = Math.min(width, height) * 0.3;
        for (const n of nodes) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkR) {
            const o = (1 - dist / linkR) * 0.8;
            ctx!.strokeStyle = `rgba(${ACCENT}, ${o})`;
            ctx!.lineWidth = 1.1;
            ctx!.beginPath();
            ctx!.moveTo(mouse.x, mouse.y);
            ctx!.lineTo(n.x, n.y);
            ctx!.stroke();
          }
        }
        const halo = ctx!.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 26);
        halo.addColorStop(0, `rgba(${ACCENT}, 0.5)`);
        halo.addColorStop(1, `rgba(${ACCENT}, 0)`);
        ctx!.fillStyle = halo;
        ctx!.beginPath();
        ctx!.arc(mouse.x, mouse.y, 26, 0, Math.PI * 2);
        ctx!.fill();
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
    if (reduce) step(0);
    else raf = requestAnimationFrame(step);

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    const onMove = (e: PointerEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active =
        mouse.x >= 0 && mouse.x <= width && mouse.y >= 0 && mouse.y <= height;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

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
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      io.disconnect();
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />
  );
}
