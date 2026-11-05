"use client";

import { useState } from "react";
import { membership } from "@/content/home";
import ThrowPills from "./ThrowPills";

const fmt = (n: number) => (n === 0 ? "$0" : `$${n.toFixed(2)}`);

export default function Membership() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="sec sec-red" id="membership">
      <div className="wrap">
        <header className="sec-head" data-reveal>
          <span className="tag tag-yellow">{membership.tag}</span>
          <h2 className="h2">
            {membership.title[0]}
            <br />
            <span className="hl-yellow">{membership.title[1]}</span>
          </h2>
          <p className="lede">{membership.sub}</p>
          <div className="billing" role="group" aria-label="Billing for Plus and Mega">
            <span className="billing-label">Billing for Plus and Mega</span>
            <div className="billing-toggle">
              <button type="button" aria-pressed={!annual} className={!annual ? "is-active" : ""} onClick={() => setAnnual(false)}>
                Monthly
              </button>
              <button type="button" aria-pressed={annual} className={annual ? "is-active" : ""} onClick={() => setAnnual(true)}>
                Annual <span className="save-badge">-15%</span>
              </button>
            </div>
          </div>
        </header>

        <div className="plans" data-reveal>
          {membership.plans.map((p) => {
            const price = annual && p.monthly > 0 ? p.monthly * (1 - membership.annualDiscount) : p.monthly;
            return (
              <article key={p.id} className={`plan plan-${p.id}`}>
                {p.badge && <span className="plan-badge">{p.badge}</span>}
                <div className="plan-top">
                  <strong className="plan-name">{p.name}</strong>
                  <span className="plan-who">{p.who}</span>
                </div>
                <div className="plan-price">
                  <strong>{fmt(price)}</strong>
                  <span>/mo</span>
                </div>
                <p className="plan-note">
                  {p.monthly > 0 && annual
                    ? `Billed yearly at $${(price * 12).toFixed(2)}, cancel anytime.`
                    : p.note}
                </p>
                <p className="plan-intro">{p.intro}</p>
                <ul className={`plan-features ${p.id === "mega" ? "is-mega" : ""}`}>
                  {p.features.map(([big, small]) => (
                    <li key={big + small}>
                      <strong>{big}</strong>
                      <span>{small}</span>
                    </li>
                  ))}
                </ul>
                <p className="plan-foot">{p.footnote}</p>
                <a href="#join" className={`btn btn-block ${p.id === "free" ? "btn-yellow" : p.id === "plus" ? "btn-red" : "btn-dark"}`}>
                  {p.id === "free" ? p.cta : `${p.cta} · ${fmt(price)}/mo`}
                </a>
              </article>
            );
          })}
        </div>

        <div className="perks-play" data-reveal>
          <div className="perks-copy">
            <span className="tag tag-yellow">Everything in Plus</span>
            <h3 className="h3">plans, no catches.</h3>
            <p>Grab a perk and throw it. They&apos;re all yours with Plus.</p>
          </div>
          <ThrowPills items={membership.perks} />
        </div>
      </div>
    </section>
  );
}
