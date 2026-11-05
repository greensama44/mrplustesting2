"use client";

import { useEffect, useState } from "react";
import { nav } from "@/content/home";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-bar">
        <a href="#top" className="header-logo" aria-label="Mega Rewards home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/mega-rewards-logo.png" alt="Mega Rewards" width={1089} height={614} />
        </a>

        <nav className="header-nav" aria-label="Main">
          {nav.links.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="#savings" className="icon-btn" aria-label="Cart, 0 items">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6.2" />
              <circle cx="10" cy="20.5" r="1.2" />
              <circle cx="17" cy="20.5" r="1.2" />
            </svg>
          </a>
          <a href="#" className="header-login">
            Log in
          </a>
          <a href="#join" className="btn btn-yellow btn-sm header-join">
            Join free
          </a>
          <button
            type="button"
            className="icon-btn header-burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`burger ${open ? "is-open" : ""}`} aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        {nav.links.map((l) => (
          <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#" onClick={() => setOpen(false)}>
          Log in
        </a>
        <a href="#join" className="btn btn-yellow" onClick={() => setOpen(false)}>
          Join free
        </a>
      </div>
    </header>
  );
}
