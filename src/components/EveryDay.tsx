import { everyDay } from "@/content/home";
import Countdown from "./Countdown";

export default function EveryDay() {
  const { daily, catch: mc, friday } = everyDay;
  return (
    <section className="sec sec-offwhite" id="every-day">
      <div className="wrap">
        <header className="sec-head" data-reveal>
          <span className="tag tag-red">{everyDay.tag}</span>
          <h2 className="h2">{everyDay.title}</h2>
          <p className="lede">{everyDay.sub}</p>
        </header>

        <div className="grid-3" data-reveal>
          <article className="card daily-card">
            <div className="daily-art">
              <span className="art-label">
                Mega <em>Daily</em>
              </span>
              <strong className="daily-big">{daily.big}</strong>
              <span className="daily-bigsub">{daily.bigSub}</span>
              <span className="daily-dots" aria-hidden="true">
                {Array.from({ length: 10 }).map((_, n) => (
                  <i key={n} />
                ))}
              </span>
            </div>
            <div className="card-body">
              <span className="tag tag-yellow">{daily.when}</span>
              <h3 className="h3">{daily.title}</h3>
              <div className="price-pair">
                <div>
                  <span>Entry</span>
                  <strong>{daily.entry}</strong>
                </div>
                <div className="is-plus">
                  <span>Plus members</span>
                  <strong>{daily.plus}</strong>
                </div>
              </div>
              <p className="timer-line">
                <i aria-hidden="true" /> Draws in <Countdown target={{ kind: "daily", hour: 18 }} />
              </p>
              <a href="#join" className="btn btn-yellow">
                {daily.cta}
              </a>
              <p className="fine">{daily.announced}</p>
            </div>
          </article>

          <article className="card">
            <div className="card-media">
              <span className="art-label">
                Mega <em>Catch</em>
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={mc.image} alt="Apple Watch" loading="lazy" />
            </div>
            <div className="card-body">
              <span className="tag tag-red">{mc.when}</span>
              <h3 className="h3">{mc.title}</h3>
              <div className="price-pair">
                <div>
                  <span>Everyone pays</span>
                  <strong>{mc.everyone}</strong>
                </div>
                <div className="is-plus">
                  <span>Plus members pay</span>
                  <strong>{mc.plus}</strong>
                </div>
              </div>
              <p className="timer-line">
                <i aria-hidden="true" /> Resets in <Countdown target={{ kind: "daily", hour: 0 }} />
              </p>
              <a href="#savings" className="btn btn-yellow">
                {mc.cta}
              </a>
            </div>
          </article>

          <article className="card">
            <div className="card-media card-media-red">
              <span className="art-label">
                Mega <em>Friday</em>
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={friday.image} alt="Car tyre" loading="lazy" />
              <strong className="media-headline">{friday.headline}</strong>
            </div>
            <div className="card-body">
              <span className="tag tag-yellow">{friday.when}</span>
              <h3 className="h3">{friday.title}</h3>
              <div className="price-pair">
                <div>
                  <span>Entry</span>
                  <strong>{friday.entry}</strong>
                </div>
                <div className="is-plus">
                  <span>Plus members</span>
                  <strong>{friday.plus}</strong>
                </div>
              </div>
              <p className="timer-line">
                <i aria-hidden="true" /> {friday.status} · next draw in{" "}
                <Countdown target={{ kind: "weekly", weekday: 5, hour: 10 }} variant="short" />
              </p>
              <a href="#join" className="btn btn-yellow">
                Enter free
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
