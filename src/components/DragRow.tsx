"use client";

import { ReactNode, useRef } from "react";

/** Horizontal scroller you can drag with a mouse; shows a "drag me" cursor badge. */
export default function DragRow({
  children,
  className,
  id,
  label = "drag me",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  label?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const state = useRef({ down: false, x: 0, left: 0, moved: false });

  return (
    <div
      ref={ref}
      id={id}
      className={`drag-row ${className ?? ""}`}
      data-drag-label={label}
      onPointerDown={(e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        state.current = { down: true, x: e.clientX, left: ref.current.scrollLeft, moved: false };
        ref.current.classList.add("is-dragging");
      }}
      onPointerMove={(e) => {
        const s = state.current;
        if (!s.down || !ref.current) return;
        const dx = e.clientX - s.x;
        if (Math.abs(dx) > 4) s.moved = true;
        ref.current.scrollLeft = s.left - dx;
      }}
      onPointerUp={() => {
        state.current.down = false;
        ref.current?.classList.remove("is-dragging");
      }}
      onPointerLeave={() => {
        state.current.down = false;
        ref.current?.classList.remove("is-dragging");
      }}
      onClickCapture={(e) => {
        if (state.current.moved) {
          e.preventDefault();
          e.stopPropagation();
          state.current.moved = false;
        }
      }}
    >
      {children}
    </div>
  );
}

export function scrollRowBy(id: string, dir: 1 | -1) {
  const el = document.getElementById(id);
  if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
}
