"use client";

import { useState } from "react";
import { points } from "@/content/home";

type Pop = { id: number; text: string; x: number };

export default function Points() {
  const [pts, setPts] = useState(0);
  const [missions, setMissions] = useState(points.missions.map((m) => m.start));
  const [pops, setPops] = useState<Pop[]>([]);

  const level = [...points.levels].reverse().find((l) => pts >= l.min) ?? points.levels[0];
  const next = points.levels.find((l) => l.min > pts);
  const progress = next ? ((pts - level.min) / (next.min - level.min)) * 100 : 100;

  const earn = (n: number, label: string, mission?: number) => {
    setPts((p) => p + n);
    if (mission !== undefined) {
      setMissions((ms) => ms.map((v, i) => (i === mission ? Math.min(points.missions[i].goal, v + 1) : v)));
    }
    const id = Date.now() + Math.random();
    setPops((p) => [...p, { id, text: `+${n} ${label}`, x: 20 + Math.random() * 60 }]);
    window.setTimeout(() => setPops((p) => p.filter((x) => x.id !== id)), 1100);
  };

  return (
    <section className="sec sec-offwhite" id="points">
      <div className="wrap">
        <div className="sec-head sec-head-row" data-reveal>
          <div>
            <span className="tag tag-red">{points.tag}</span>
            <h2 className="h2">{points.title}</h2>
            <p className="lede">{points.sub}</p>
          </div>
          <a href="#points" className="btn btn-outline">
            Points and merch
          </a>
        </div>

        <div className="points-grid" data-reveal>
          <div className="card card-dark points-demo">
            <div className="demo-top">
              <span className="tag tag-yellow">Try it: tap to earn</span>
              <span className="tag tag-outline-light">
                {level.name} · {level.reward}
              </span>
            </div>
            <div className="demo-score" aria-live="polite">
              <strong>{pts.toLocaleString("en-AU")}</strong>
              <span>pts</span>
              {pops.map((p) => (
                <em key={p.id} className="pop" style={{ left: `${p.x}%` }}>
                  {p.text}
                </em>
              ))}
            </div>
            <div className="bar" aria-hidden="true">
              <i style={{ width: `${Math.min(100, progress)}%` }} />
            </div>
            <p className="demo-next">
              {next ? `${(next.min - pts).toLocaleString("en-AU")} points to ${next.name} (${next.reward})` : "Hall of Fame. Legend status unlocked."}
            </p>
            <div className="demo-actions">
              {points.actions.map((a) => (
                <button key={a.label} type="button" className="demo-action" onClick={() => earn(a.pts, "pts", a.mission)}>
                  <strong>+{a.pts}</strong>
                  <span>{a.label}</span>
                </button>
              ))}
              <button type="button" className="demo-action is-plus" onClick={() => earn(100, "referral bonus")}>
                <strong>+Free month</strong>
                <span>of Plus when they go Plus</span>
              </button>
            </div>
            <div className="missions">
              <div className="missions-head">
                <span>This week&apos;s missions</span>
                <span>+50 pts each</span>
              </div>
              {points.missions.map((m, i) => (
                <div key={m.label} className="mission">
                  <span>{m.label}</span>
                  <div className="bar bar-thin" aria-hidden="true">
                    <i style={{ width: `${(missions[i] / m.goal) * 100}%` }} />
                  </div>
                  <strong>
                    {missions[i]}/{m.goal}
                  </strong>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="link-btn"
              onClick={() => {
                setPts(0);
                setMissions(points.missions.map((m) => m.start));
              }}
            >
              Reset demo
            </button>
          </div>

          <div className="points-side">
            <ol className="levels">
              {points.levels.map((l) => (
                <li key={l.name} className={l.name === level.name ? "is-current" : ""}>
                  <strong>{l.name}</strong>
                  <span>{l.range}</span>
                  <em>{l.reward}</em>
                </li>
              ))}
            </ol>
            <div className="card card-red points-shop">
              <div className="shop-head">
                <span className="tag tag-yellow">Spend your points</span>
                <a href="#points">Points shop →</a>
              </div>
              <ul>
                {points.shop.map((s) => (
                  <li key={s.pts}>
                    <strong>{s.pts}</strong>
                    <span>{s.what}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="leader-grid" data-reveal>
          <div className="card leaderboard">
            <div className="leader-head">
              <strong>This week&apos;s leaderboard</strong>
              <span>Resets Sunday</span>
            </div>
            <ol>
              {points.leaderboard.map((r, n) => (
                <li key={r.name}>
                  <span className="rank">{n + 1}</span>
                  <span className="avatar avatar-sm" aria-hidden="true">
                    {r.name.charAt(0)}
                  </span>
                  <div>
                    <strong>{r.name}</strong>
                    <span>
                      {r.level} · {r.streak}
                    </span>
                  </div>
                  <b>{r.pts}</b>
                </li>
              ))}
            </ol>
            <p className="fine">{points.sampleNote}</p>
          </div>
          <div className="card card-yellow weekly">
            <span className="tag tag-dark">Weekly prize</span>
            <p>{points.weekly}</p>
            <strong className="badges-title">Badges to collect</strong>
            <div className="badges">
              {points.badges.map((b, n) => (
                <span key={b} className={`badge ${n < 2 ? "is-earned" : ""}`}>
                  {n < 2 ? "✓ " : ""}
                  {b}
                </span>
              ))}
            </div>
            <a href="#points" className="link-btn">
              How points work →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
