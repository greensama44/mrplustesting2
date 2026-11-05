"use client";

import { useEffect, useRef, useState } from "react";
import { hero } from "@/content/home";
import Countdown from "./Countdown";

export default function HeroCarousel() {
  const slides = hero.slides;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % slides.length), 6000);
    return () => window.clearInterval(id);
  }, [paused, slides.length]);

  const go = (n: number) => setI((n + slides.length) % slides.length);

  return (
    <div
      className="hero-stack"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={(e) => (startX.current = e.clientX)}
      onPointerUp={(e) => {
        if (startX.current === null) return;
        const dx = e.clientX - startX.current;
        if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1));
        startX.current = null;
      }}
      aria-roledescription="carousel"
      aria-label="Featured giveaways"
    >
      <div className="hero-stack-cards">
        {slides.map((s, n) => {
          const pos = (n - i + slides.length) % slides.length;
          return (
            <article
              key={s.title}
              className={`prize-card pos-${pos}`}
              aria-hidden={pos !== 0}
              aria-roledescription="slide"
              aria-label={`${n + 1} of ${slides.length}`}
            >
              <div className="prize-card-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.image} alt="" draggable={false} />
                <div className="prize-card-overlay">
                  <span className="prize-eyebrow">{s.eyebrow}</span>
                  <strong className="prize-title">{s.title}</strong>
                </div>
              </div>
              <div className="prize-card-body">
                <span className="tag tag-red-text">{s.kicker}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <div className="prize-card-foot">
                  <div className="prize-draws">
                    <span>Draws in</span>
                    <Countdown target={s.draw} variant="short" className="prize-draws-time" />
                  </div>
                  <a href="#giveaways" className="btn btn-yellow btn-sm" tabIndex={pos === 0 ? 0 : -1}>
                    {s.cta}
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="hero-dots" role="tablist" aria-label="Choose a featured giveaway">
        {slides.map((s, n) => (
          <button
            key={s.title}
            type="button"
            role="tab"
            aria-selected={n === i}
            aria-label={`Show ${s.title}`}
            className={n === i ? "is-active" : ""}
            onClick={() => go(n)}
          />
        ))}
      </div>
    </div>
  );
}
