"use client";

import { CSSProperties, useState } from "react";
import { calculator } from "@/content/home";

const money = (n: number) =>
  "$" + Math.round(n).toLocaleString("en-AU", { maximumFractionDigits: 0 });

type Slider = { key: string; label: string; min: number; max: number; step: number; unit: string; value: number };

const initial: Slider[] = [
  { key: "food", label: "Monthly spend on food and groceries", min: 0, max: 2500, step: 50, unit: "/mo", value: 800 },
  { key: "tech", label: "Monthly spend on tech and home", min: 0, max: 1500, step: 25, unit: "/mo", value: 200 },
  { key: "life", label: "Monthly spend on lifestyle: dining, fuel, entertainment", min: 0, max: 1500, step: 25, unit: "/mo", value: 400 },
  { key: "bill", label: "Your current mobile bill, per month", min: 0, max: 150, step: 1, unit: "/mo", value: 45 },
  { key: "plans", label: "Mobile plans in your household", min: 0, max: 6, step: 1, unit: "", value: 2 },
];

export default function Calculator() {
  const [s, setS] = useState(initial);
  const v = (k: string) => s.find((x) => x.key === k)?.value ?? 0;

  const spendYear = (v("food") + v("tech") + v("life")) * 12;
  const giftLow = spendYear * 0.04;
  const giftHigh = spendYear * 0.08;
  const mobile = Math.max(0, v("bill") - calculator.plan) * v("plans") * 12;
  const low = giftLow + mobile - calculator.yearlyFee;
  const high = giftHigh + mobile - calculator.yearlyFee;
  const paysForItself = giftLow + mobile >= calculator.yearlyFee;

  return (
    <section className="sec sec-charcoal" id="calculator">
      <div className="wrap calc-grid">
        <div data-reveal>
          <span className="tag tag-red">{calculator.tag}</span>
          <h2 className="h2">{calculator.title}</h2>
          <p className="lede">{calculator.sub}</p>
          <div className="card calc-sliders">
            {s.map((x) => (
              <label key={x.key} className="slider">
                <span className="slider-top">
                  <span>{x.label}</span>
                  <strong>{x.unit ? `$${x.value}${x.unit}` : x.value}</strong>
                </span>
                <input
                  type="range"
                  min={x.min}
                  max={x.max}
                  step={x.step}
                  value={x.value}
                  style={{ "--fill": `${((x.value - x.min) / (x.max - x.min)) * 100}%` } as CSSProperties}
                  onChange={(e) =>
                    setS((all) => all.map((y) => (y.key === x.key ? { ...y, value: Number(e.target.value) } : y)))
                  }
                />
              </label>
            ))}
          </div>
        </div>

        <div className="calc-result" data-reveal aria-live="polite">
          <span className="tag tag-yellow">Estimated yearly saving with Plus</span>
          <strong className="calc-big">
            {low > 0 ? `${money(low)} – ${money(high)}` : high > 0 ? `Up to ${money(high)}` : "$0"}
          </strong>
          <p className="calc-after">after the ${calculator.yearlyFee} yearly membership</p>
          <dl className="calc-lines">
            <div>
              <dt>Food, tech and lifestyle spend at 4–8% off via gift cards</dt>
              <dd>
                {money(giftLow)} – {money(giftHigh)}
              </dd>
            </div>
            <div>
              <dt>Mobile at ${calculator.plan} a month per plan</dt>
              <dd>{money(mobile)}</dd>
            </div>
          </dl>
          <p className={`calc-verdict ${paysForItself ? "" : "is-no"}`}>
            {paysForItself
              ? "Plus pays for itself on gift cards and mobile alone."
              : "At this spend, the giveaways and member deals do the heavy lifting."}
          </p>
          <a href="#membership" className="btn btn-red btn-block">
            Go Plus · $19.99/mo
          </a>
          <p className="fine">{calculator.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
