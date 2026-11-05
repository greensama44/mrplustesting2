import { footer } from "@/content/home";

export default function Footer() {
  return (
    <footer className="sec sec-charcoal site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/mega-rewards-logo.png" alt="Mega Rewards" width={1089} height={614} loading="lazy" />
          <p>{footer.legal}</p>
        </div>
        <nav aria-label="Explore">
          <strong>Explore</strong>
          {footer.explore.map((l) => (
            <a key={l} href="#">
              {l}
            </a>
          ))}
        </nav>
        <nav aria-label="Company">
          <strong>Company</strong>
          {footer.company.map((l) => (
            <a key={l} href="#">
              {l}
            </a>
          ))}
        </nav>
        <div className="footer-contact">
          <strong>Contact</strong>
          {footer.contact.map((l) => (
            <a key={l} href="#">
              {l}
            </a>
          ))}
          <div className="footer-socials">
            {footer.socials.map((s) => (
              <a key={s} href="#">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>{footer.bottom}</span>
        <span>{footer.office}</span>
      </div>
    </footer>
  );
}
