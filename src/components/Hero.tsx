import { everyDay, happeningNow, hero } from "@/content/home";
import Countdown from "./Countdown";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section className="sec sec-red hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy" data-reveal>
          <h1 className="hero-title">
            {hero.lines.map((l, n) => (
              <span key={l} className={n === hero.lines.length - 1 ? "hl-yellow" : ""}>
                {l}
              </span>
            ))}
          </h1>
          <p className="hero-price">{hero.price}</p>
          <p className="hero-sub">{hero.sub}</p>
          <div className="hero-ctas">
            <a href="#join" className="btn btn-yellow btn-lg">
              Join free
            </a>
            <a href="#membership" className="btn btn-white btn-lg">
              Go Plus · $19.99/mo
            </a>
          </div>
        </div>
        <HeroCarousel />
      </div>

      <div className="wrap" id="happening-now">
        <div className="now-bar" data-reveal>
          <div className="now-card now-card-draw">
            <div className="now-head">
              <span className="tag tag-yellow">Next draw</span>
              <span className="now-live">
                <i aria-hidden="true" /> Live
              </span>
            </div>
            <p className="now-title">{happeningNow.nextDraw}</p>
            <Countdown target={{ kind: "weekly", weekday: 5, hour: 10 }} variant="boxes" />
            <p className="now-recent">
              <span className="tag tag-outline">Recent win</span> {happeningNow.recentWin}
            </p>
          </div>

          <a href="#every-day" className="now-card">
            <span className="now-kicker">{everyDay.daily.label} · happening now</span>
            <strong className="now-big">$1,000 today</strong>
            <span className="now-meta">
              10 winners × $100 · draws in <Countdown target={{ kind: "daily", hour: 18 }} />
            </span>
          </a>

          <a href="#every-day" className="now-card">
            <span className="now-kicker">Today&apos;s Mega Catch</span>
            <strong className="now-mid">{everyDay.catch.title}</strong>
            <span className="now-meta">
              <b>{everyDay.catch.plus}</b> Plus price · resets in <Countdown target={{ kind: "daily", hour: 0 }} variant="short" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
