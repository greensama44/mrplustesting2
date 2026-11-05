"use client";

import { useEffect, useState } from "react";

// Demo wheel: these use reward units from V1 (points, bonus tickets, free month).
// Set the real welcome-bonus odds and prizes before launch.
const SEGMENTS = [
  { label: "+10 pts", color: "#FFD900", ink: "#202020" },
  { label: "+25 pts", color: "#E10600", ink: "#FFFFFF" },
  { label: "+50 pts", color: "#F7F7F5", ink: "#202020" },
  { label: "5 Friday tickets", color: "#B90032", ink: "#FFFFFF" },
  { label: "+100 pts", color: "#FF4B25", ink: "#202020" },
  { label: "Free month of Plus", color: "#202020", ink: "#FFD900" },
];

export default function Floating() {
  const [open, setOpen] = useState(false);
  const [angle, setAngle] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const seg = 360 / SEGMENTS.length;
  const gradient = SEGMENTS.map((s, i) => `${s.color} ${i * seg}deg ${(i + 1) * seg}deg`).join(", ");

  const spin = () => {
    if (spinning) return;
    const pick = Math.floor(Math.random() * SEGMENTS.length);
    const target = 360 * 5 + (360 - (pick * seg + seg / 2));
    setResult(null);
    setSpinning(true);
    setAngle((a) => a - (a % 360) + target);
    window.setTimeout(() => {
      setSpinning(false);
      setResult(SEGMENTS[pick].label);
    }, 4200);
  };

  return (
    <>
      <button type="button" className="float-spin" onClick={() => setOpen(true)}>
        <span className="float-spin-icon" aria-hidden="true" />
        Spin for your welcome bonus
      </button>
      <a href="#" className="float-chat">
        Chat with us
      </a>

      {open && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="spin-title" onClick={() => setOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" aria-label="Close" onClick={() => setOpen(false)}>
              ×
            </button>
            <span className="tag tag-red">Welcome bonus</span>
            <h2 id="spin-title" className="h3">
              Spin the Mega wheel
            </h2>
            <div className="wheel-wrap">
              <span className="wheel-pointer" aria-hidden="true" />
              <div
                className="wheel"
                style={{ background: `conic-gradient(${gradient})`, transform: `rotate(${angle}deg)` }}
                aria-hidden="true"
              >
                {SEGMENTS.map((s, i) => (
                  <span key={s.label} className="wheel-label" style={{ transform: `rotate(${i * seg + seg / 2}deg)`, color: s.ink }}>
                    <b>{s.label}</b>
                  </span>
                ))}
              </div>
              <span className="wheel-hub" aria-hidden="true">
                M
              </span>
            </div>
            <p className="wheel-result" aria-live="polite">
              {result ? `You landed ${result}! Join free to claim it.` : spinning ? "Spinning…" : "One spin per new member."}
            </p>
            {result ? (
              <a href="#join" className="btn btn-yellow btn-block" onClick={() => setOpen(false)}>
                Join free and claim
              </a>
            ) : (
              <button type="button" className="btn btn-red btn-block" onClick={spin} disabled={spinning}>
                {spinning ? "Good luck…" : "Spin"}
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
