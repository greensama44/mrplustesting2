"use client";

import { useState } from "react";
import { tipping } from "@/content/home";

export default function Tipping() {
  const [tips, setTips] = useState<(string | null)[]>(tipping.games.map(() => null));
  const done = tips.filter(Boolean).length;

  const pick = (i: number, team: string) =>
    setTips((t) => t.map((v, n) => (n === i ? (v === team ? null : team) : v)));

  return (
    <section className="sec sec-deepred" id="tipping">
      <div className="wrap tip-grid">
        <div data-reveal>
          <span className="tag tag-yellow">{tipping.tag}</span>
          <p className="codes">{tipping.codes}</p>
          <h2 className="h2">{tipping.title}</h2>
          <p className="lede">{tipping.sub}</p>
          <div className="tip-stats">
            {tipping.stats.map((s) => (
              <div key={s.big}>
                <strong>{s.big}</strong>
                <span>{s.small}</span>
              </div>
            ))}
          </div>
          <div className="tip-cta">
            <a href="#join" className="btn btn-yellow">
              {tipping.cta}
            </a>
            <span>{tipping.thanks}</span>
          </div>
        </div>

        <div className="card tip-card" data-reveal>
          <div className="tip-card-head">
            <div>
              <span>{tipping.round}</span>
              <strong>Pick your winners</strong>
            </div>
            <span className={`tip-count ${done === tipping.games.length ? "is-done" : ""}`}>
              {done}/{tipping.games.length} tipped
            </span>
          </div>
          <div className="tip-progress" aria-hidden="true">
            {tipping.games.map((g, i) => (
              <i key={g.home} className={tips[i] ? "is-on" : ""} />
            ))}
          </div>
          {tipping.games.map((g, i) => (
            <div key={g.home} className="match">
              <button
                type="button"
                className={`team ${tips[i] === g.home ? "is-picked" : ""}`}
                aria-pressed={tips[i] === g.home}
                onClick={() => pick(i, g.home)}
              >
                <strong>{g.home}</strong>
                <span>{g.when}</span>
              </button>
              <span className="vs">vs</span>
              <button
                type="button"
                className={`team team-away ${tips[i] === g.away ? "is-picked" : ""}`}
                aria-pressed={tips[i] === g.away}
                onClick={() => pick(i, g.away)}
              >
                <strong>{g.away}</strong>
                <span>Away</span>
              </button>
            </div>
          ))}
          <div className="tip-foot">
            <span>{done === tipping.games.length ? "Round locked in: +45 pts when you join!" : "Tap a team to tip. Tips lock at tip-off."}</span>
            <a href="#tipping" className="btn btn-outline btn-sm">
              How tipping works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
