"use client";

import { useEffect, useState } from "react";
import { DrawTarget, pad, secondsUntil, splitDuration } from "@/lib/time";

type Props = {
  target: DrawTarget;
  variant?: "boxes" | "inline" | "short";
  className?: string;
};

export default function Countdown({ target, variant = "inline", className }: Props) {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setLeft(secondsUntil(target));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
    // target is a plain object literal from content; compare by value
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(target)]);

  const t = left === null ? null : splitDuration(left);

  if (variant === "boxes") {
    const cells: [string, string][] = [
      [t ? pad(t.d) : "--", "Days"],
      [t ? pad(t.h) : "--", "Hrs"],
      [t ? pad(t.m) : "--", "Mins"],
      [t ? pad(t.s) : "--", "Secs"],
    ];
    return (
      <div className={`countdown-boxes ${className ?? ""}`} role="timer" aria-live="off">
        {cells.map(([v, l], i) => (
          <div key={l} className={`countdown-box ${i === 3 ? "is-hot" : ""}`}>
            <strong>{v}</strong>
            <span>{l}</span>
          </div>
        ))}
      </div>
    );
  }

  if (!t) return <span className={className}>--:--:--</span>;

  if (variant === "short") {
    return (
      <span className={className} role="timer">
        {t.d > 0 ? `${t.d}d ` : ""}
        {pad(t.h)}h {pad(t.m)}m
      </span>
    );
  }

  return (
    <span className={className} role="timer">
      {t.d > 0 ? `${t.d}d ` : ""}
      {pad(t.h)}h {pad(t.m)}m {pad(t.s)}s
    </span>
  );
}
