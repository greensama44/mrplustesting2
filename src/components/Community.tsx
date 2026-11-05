import { community } from "@/content/home";

export default function Community() {
  const row = [...community.partners, ...community.partners];
  return (
    <section className="sec sec-yellow" id="community">
      <div className="wrap community-grid">
        <div data-reveal>
          <span className="tag tag-red">{community.tag}</span>
          <h2 className="h2">{community.title}</h2>
          <a href="#community" className="btn btn-dark">
            {community.cta}
          </a>
        </div>
        <div className="partner-cards" data-reveal aria-label="Community partners">
          {community.partners.slice(0, 3).map((p, n) => (
            <div key={p} className={`partner-card partner-card-${n}`}>
              <span>[{p} logo]</span>
            </div>
          ))}
        </div>
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {row.map((p, n) => (
            <span key={`${p}-${n}`} className="marquee-item">
              {p}
              <i>✦</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
