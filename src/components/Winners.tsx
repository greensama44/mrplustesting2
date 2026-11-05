import { winners } from "@/content/home";

const initial = (name: string) => name.trim().charAt(0).toUpperCase();

export default function Winners() {
  return (
    <section className="sec sec-charcoal" id="winners">
      <div className="wrap">
        <header className="sec-head" data-reveal>
          <span className="tag tag-red">{winners.tag}</span>
          <h2 className="h2">{winners.title}</h2>
          <p className="lede">{winners.sub}</p>
        </header>

        <div className="winners-grid" data-reveal>
          <div className="card card-dark winners-list">
            <span className="tag tag-yellow">
              <i className="dot" aria-hidden="true" /> Latest winners
            </span>
            <ul>
              {winners.latest.map((w) => (
                <li key={w.name}>
                  <span className="avatar" aria-hidden="true">
                    {initial(w.name)}
                  </span>
                  <div>
                    <strong>{w.name}</strong>
                    <span>{w.what}</span>
                    <em>{w.where}</em>
                  </div>
                </li>
              ))}
            </ul>
            <a href="#winners" className="btn btn-white">
              All previous winners
            </a>
          </div>

          <figure className="card spotlight">
            <span className="tag tag-yellow spotlight-tag">Winner spotlight</span>
            <div className="spotlight-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={winners.spotlight.image} alt="Race cars on track" loading="lazy" />
              <span className="stamp" aria-hidden="true">
                M
              </span>
            </div>
            <figcaption>
              <span className="tag tag-red">{winners.spotlight.label}</span>
              <blockquote>&ldquo;{winners.spotlight.quote}&rdquo;</blockquote>
              <cite>{winners.spotlight.by}</cite>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
