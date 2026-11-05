"use client";

import { CSSProperties, useState } from "react";
import { moments, testimonials } from "@/content/home";
import DragRow, { scrollRowBy } from "./DragRow";

const tints = ["#E10600", "#FFD900", "#B90032", "#FF4B25", "#202020"];

export default function Moments() {
  const [sound, setSound] = useState<number | null>(null);

  return (
    <section className="sec sec-pink" id="moments">
      <div className="wrap">
        <div className="sec-head sec-head-row" data-reveal>
          <div>
            <span className="tag tag-red">{moments.tag}</span>
            <h2 className="h2">
              {moments.title}
              <br />
              <span className="h2-soft">{moments.sub}</span>
            </h2>
          </div>
          <div className="row-controls">
            <button type="button" className="round-btn" aria-label="Previous moments" onClick={() => scrollRowBy("moments-row", -1)}>
              ←
            </button>
            <button type="button" className="round-btn is-yellow" aria-label="Next moments" onClick={() => scrollRowBy("moments-row", 1)}>
              →
            </button>
            {moments.socials.map((s) => (
              <a key={s} href="#" className="btn btn-outline btn-sm">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div>
        <DragRow id="moments-row" className="moments-row">
          {moments.videos.map((v, n) => (
            <article key={v} className="moment-card" style={{ "--tint": tints[n % tints.length] } as CSSProperties}>
              <div className="moment-video">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/mega-rewards-logo.png" alt="" className="moment-logo" draggable={false} />
                <span className="moment-handle">@mega_rewards</span>
                <span className="moment-play" aria-hidden="true">▶</span>
                <button
                  type="button"
                  className="moment-sound"
                  aria-pressed={sound === n}
                  aria-label={sound === n ? "Mute" : "Unmute"}
                  onClick={() => setSound((s) => (s === n ? null : n))}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 9h4l5-4v14l-5-4H4z" />
                    {sound === n ? <path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11" /> : <path d="M17 9l5 5M22 9l-5 5" />}
                  </svg>
                </button>
                <span className="moment-placeholder">[Video {n + 1}]</span>
              </div>
              <p>{v}</p>
            </article>
          ))}
        </DragRow>
      </div>

      <div className="wrap">
        <div className="sec-head sec-head-row sec-head-tight" data-reveal>
          <h2 className="h2 h2-sm">{testimonials.title}</h2>
          <div className="row-controls">
            <button type="button" className="round-btn" aria-label="Previous reviews" onClick={() => scrollRowBy("words-row", -1)}>
              ←
            </button>
            <button type="button" className="round-btn is-yellow" aria-label="Next reviews" onClick={() => scrollRowBy("words-row", 1)}>
              →
            </button>
          </div>
        </div>
      </div>

      <div>
        <DragRow id="words-row" className="words-row">
          {testimonials.items.map((t) => (
            <figure key={t.name} className="word-card">
              <div className="word-photo" aria-hidden="true">
                <span>{t.name.charAt(0)}</span>
                <small>[Winner photo]</small>
              </div>
              <blockquote>
                <span className="quote-mark" aria-hidden="true">&ldquo;</span>
                {t.quote}
              </blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </DragRow>
      </div>
    </section>
  );
}
