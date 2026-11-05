"use client";

import { useState } from "react";
import { finalCta } from "@/content/home";
import Countdown from "./Countdown";

type Burst = { id: number; x: number; r: number };

export default function FinalCta() {
  const [count, setCount] = useState(finalCta.counterStart);
  const [mine, setMine] = useState(0);
  const [bursts, setBursts] = useState<Burst[]>([]);

  const hit = () => {
    setCount((c) => c + 1);
    setMine((m) => m + 1);
    const id = Date.now() + Math.random();
    setBursts((b) => [...b, { id, x: -40 + Math.random() * 80, r: -30 + Math.random() * 60 }]);
    window.setTimeout(() => setBursts((b) => b.filter((x) => x.id !== id)), 900);
  };

  const digits = String(count).padStart(7, "0").split("");

  return (
    <section className="sec sec-red final" id="join">
      <div className="wrap final-inner">
        <div className="tally" data-reveal>
          <span className="tag tag-yellow">Mega Moments</span>
          <div className="tally-digits" aria-label={`${count.toLocaleString("en-AU")} Mega Moments`}>
            {digits.map((d, n) => (
              <span key={n} className="digit">
                {d}
              </span>
            ))}
          </div>
          <p className="tally-q">Have you got what it takes to add to our total?</p>
          <button type="button" className="hit-btn" onClick={hit}>
            Hit it!
            {bursts.map((b) => (
              <em key={b.id} className="burst" style={{ transform: `translateX(${b.x}px) rotate(${b.r}deg)` }}>
                +1
              </em>
            ))}
          </button>
          {mine > 0 && <p className="tally-mine">You&apos;ve added {mine}. Mega moment!</p>}
        </div>

        <div className="final-copy" data-reveal>
          <h2 className="h1">{finalCta.title}</h2>
          <p className="lede">
            {finalCta.sub} Next draw in <Countdown target={{ kind: "daily", hour: 18 }} />.
          </p>
          <a href="#join" className="btn btn-yellow btn-lg">
            Join free
          </a>
        </div>
      </div>
    </section>
  );
}
