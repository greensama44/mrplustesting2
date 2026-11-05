"use client";

import { useMemo, useState } from "react";
import { giveaways } from "@/content/home";

export default function Giveaways() {
  const [tab, setTab] = useState("all");
  const [occasion, setOccasion] = useState<string | null>(null);

  const shown = useMemo(
    () =>
      giveaways.items.filter(
        (g) => (tab === "all" || g.cat === tab) && (!occasion || g.occasions.includes(occasion))
      ),
    [tab, occasion]
  );

  return (
    <section className="sec sec-yellow" id="giveaways">
      <div className="wrap">
        <div className="sec-head sec-head-row" data-reveal>
          <div>
            <span className="tag tag-red">{giveaways.tag}</span>
            <h2 className="h2">{giveaways.title}</h2>
            <p className="lede">{giveaways.sub}</p>
          </div>
          <a href="#giveaways" className="btn btn-outline">
            See all giveaways
          </a>
        </div>

        <div className="occasions" data-reveal>
          <span className="occasions-label">A reward for every thing.</span>
          <div className="occasions-row">
            {giveaways.occasions.map((o) => (
              <button
                key={o}
                type="button"
                className={`pill ${occasion === o ? "is-active" : ""}`}
                aria-pressed={occasion === o}
                onClick={() => setOccasion((cur) => (cur === o ? null : o))}
              >
                {o}
              </button>
            ))}
          </div>
        </div>

        <div className="tabs" role="tablist" aria-label="Giveaway categories" data-reveal>
          {giveaways.tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              className={`tab ${tab === t.id ? "is-active" : ""}`}
              onClick={() => setTab(t.id)}
            >
              {t.label} <span className="tab-count">{t.count}</span>
            </button>
          ))}
        </div>

        <div className="grid-3 giveaway-grid">
          {shown.map((g) => (
            <article key={g.title} className="card giveaway-card">
              <div className={`card-media ${g.art === "daily" ? "card-media-yellow" : ""}`}>
                {g.art === "daily" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src="/brand/mega-rewards-logo.png" alt="" className="media-logo" loading="lazy" />
                ) : (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={g.image} alt="" loading="lazy" />
                    <strong className="media-headline">{g.art}</strong>
                  </>
                )}
                <span className="tag tag-dark media-status">Drawing now</span>
                <span className="tag tag-yellow media-pts">+10 pts</span>
              </div>
              <div className="card-body">
                <div className="giveaway-meta">
                  <span className="tag tag-outline">{g.type}</span>
                  <span>{g.draw}</span>
                </div>
                <h3 className="giveaway-title">{g.title}</h3>
                <p className="fine fine-strong">{g.announced}</p>
              </div>
            </article>
          ))}
          {shown.length === 0 && (
            <div className="empty-state">
              <p>No giveaways for that moment yet. Try another one.</p>
              <button type="button" className="btn btn-outline" onClick={() => { setOccasion(null); setTab("all"); }}>
                Show all
              </button>
            </div>
          )}
        </div>

        <p className="fine">
          Showing {shown.length} of {giveaways.total} current giveaways. {giveaways.note}
        </p>
      </div>
    </section>
  );
}
