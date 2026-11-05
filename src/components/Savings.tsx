import { savings } from "@/content/home";
import Countdown from "./Countdown";

export default function Savings() {
  const { hero, tiles, included } = savings;
  return (
    <section className="sec sec-offwhite" id="savings">
      <div className="wrap">
        <div className="sec-head sec-head-row" data-reveal>
          <div>
            <span className="tag tag-red">{savings.tag}</span>
            <h2 className="h2">{savings.title}</h2>
            <p className="lede">{savings.sub}</p>
          </div>
          <a href="#savings" className="btn btn-outline">
            Open the store
          </a>
        </div>

        <div className="bento" data-reveal>
          <a href="#savings" className="bento-tile bento-hero">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={hero.image} alt="" loading="lazy" />
            <div className="bento-copy">
              <span className="bento-kicker">{hero.kicker}</span>
              <strong className="bento-big">{hero.big}</strong>
              <span className="bento-title">{hero.title}</span>
              <p>{hero.body}</p>
              <span className="bento-cta">{hero.cta} →</span>
            </div>
          </a>
          {tiles.map((t) => (
            <a key={t.title} href="#savings" className="bento-tile">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={t.image} alt="" loading="lazy" />
              <div className="bento-copy">
                <span className="bento-kicker">{t.kicker}</span>
                {t.big && <strong className="bento-big bento-big-sm">{t.big}</strong>}
                <span className="bento-title">{t.title}</span>
                {t.body && (
                  <p>
                    {t.body} {t.timer && <Countdown target={{ kind: "daily", hour: 0 }} />}
                  </p>
                )}
                <span className="bento-cta">{t.cta} →</span>
              </div>
            </a>
          ))}
        </div>

        <div className="included" data-reveal>
          <div className="included-head">
            <span className="tag tag-red">{included.kicker}</span>
            <strong>{included.title}</strong>
          </div>
          <ul>
            {included.items.map((it, n) => (
              <li key={it.title}>
                <span className="included-icon" aria-hidden="true">
                  {["2:1", "%", "♥", "◆"][n]}
                </span>
                <div>
                  <strong>{it.title}</strong>
                  <span>{it.body}</span>
                </div>
              </li>
            ))}
          </ul>
          <a href="#membership" className="btn btn-red">
            Go Plus · $19.99/mo
          </a>
        </div>
      </div>
    </section>
  );
}
