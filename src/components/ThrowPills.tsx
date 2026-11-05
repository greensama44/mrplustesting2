"use client";

import { PointerEvent as RPointerEvent, useEffect, useRef } from "react";

type Body = { x: number; y: number; vx: number; vy: number; w: number; h: number; r: number; vr: number };

const COLORS = ["pill-red", "pill-yellow", "pill-white", "pill-orange", "pill-dark", "pill-pink"];

/** Pills that fall into the box and can be grabbed and thrown. */
export default function ThrowPills({ items }: { items: string[] }) {
  const box = useRef<HTMLDivElement>(null);
  const els = useRef<(HTMLSpanElement | null)[]>([]);
  const bodies = useRef<Body[]>([]);
  const drag = useRef<{ i: number; ox: number; oy: number; lx: number; ly: number; lt: number } | null>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const W = () => el.clientWidth;
    const H = () => el.clientHeight;

    bodies.current = items.map((_, i) => {
      const node = els.current[i];
      const w = node?.offsetWidth ?? 120;
      const h = node?.offsetHeight ?? 44;
      return {
        x: Math.random() * Math.max(1, W() - w),
        y: reduce ? H() - h - (i % 3) * (h + 4) : -h - i * 60,
        vx: (Math.random() - 0.5) * 4,
        vy: 0,
        w,
        h,
        r: (Math.random() - 0.5) * 30,
        vr: 0,
      };
    });

    let raf = 0;
    let running = false;
    const step = () => {
      const b = bodies.current;
      const width = W();
      const height = H();
      for (let i = 0; i < b.length; i++) {
        const p = b[i];
        if (drag.current?.i === i) continue;
        p.vy += 0.6;
        p.vx *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        p.r += p.vr;
        p.vr *= 0.95;
        if (p.y + p.h > height) {
          p.y = height - p.h;
          p.vy *= -0.35;
          p.vx *= 0.85;
          if (Math.abs(p.vy) < 0.8) p.vy = 0;
          p.vr = p.vx * 0.4;
        }
        if (p.x < 0) {
          p.x = 0;
          p.vx *= -0.6;
        }
        if (p.x + p.w > width) {
          p.x = width - p.w;
          p.vx *= -0.6;
        }
      }
      // simple overlap resolution so pills stack instead of merging
      for (let i = 0; i < b.length; i++) {
        for (let j = i + 1; j < b.length; j++) {
          const a = b[i];
          const c = b[j];
          const ox = Math.min(a.x + a.w, c.x + c.w) - Math.max(a.x, c.x);
          const oy = Math.min(a.y + a.h, c.y + c.h) - Math.max(a.y, c.y);
          if (ox > 0 && oy > 0) {
            if (oy < ox) {
              const upper = a.y < c.y ? a : c;
              const lower = upper === a ? c : a;
              upper.y -= oy;
              if (upper.vy > 0) upper.vy = 0;
              lower.vy += 0;
            } else {
              const left = a.x < c.x ? a : c;
              const right = left === a ? c : a;
              left.x -= ox / 2;
              right.x += ox / 2;
              const avg = (left.vx + right.vx) / 2;
              left.vx = avg - 0.5;
              right.vx = avg + 0.5;
            }
          }
        }
      }
      b.forEach((p, i) => {
        const node = els.current[i];
        if (node) node.style.transform = `translate(${p.x}px, ${p.y}px) rotate(${p.r}deg)`;
      });
      raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !running) {
        running = true;
        raf = requestAnimationFrame(step);
      } else if (!e.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [items]);

  const toLocal = (e: RPointerEvent) => {
    const r = box.current!.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  return (
    <div
      ref={box}
      className="throw-box"
      onPointerMove={(e) => {
        const d = drag.current;
        if (!d) return;
        const p = bodies.current[d.i];
        const { x, y } = toLocal(e);
        const now = performance.now();
        const dt = Math.max(16, now - d.lt);
        p.vx = ((x - d.lx) / dt) * 16;
        p.vy = ((y - d.ly) / dt) * 16;
        p.x = x - d.ox;
        p.y = y - d.oy;
        d.lx = x;
        d.ly = y;
        d.lt = now;
        const node = els.current[d.i];
        if (node) node.style.transform = `translate(${p.x}px, ${p.y}px) rotate(${p.r}deg)`;
      }}
      onPointerUp={() => (drag.current = null)}
      onPointerLeave={() => (drag.current = null)}
    >
      <span className="throw-hint" aria-hidden="true">
        go on, throw them around ↓
      </span>
      {items.map((t, i) => (
        <span
          key={t}
          ref={(n) => {
            els.current[i] = n;
          }}
          className={`throw-pill ${COLORS[i % COLORS.length]}`}
          onPointerDown={(e) => {
            const p = bodies.current[i];
            if (!p) return;
            (e.currentTarget.parentElement as HTMLElement).setPointerCapture?.(e.pointerId);
            const { x, y } = toLocal(e);
            drag.current = { i, ox: x - p.x, oy: y - p.y, lx: x, ly: y, lt: performance.now() };
            p.vr = (Math.random() - 0.5) * 6;
          }}
        >
          {t}
        </span>
      ))}
    </div>
  );
}
