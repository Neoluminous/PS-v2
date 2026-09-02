"use client";

import { ArrowRight, ChevronDown, Menu, Search, X, Languages } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SocialLinks from "./SocialLinks";
import { useLanguage } from "../context/LanguageContext";

const groups = [
  { label: "About", links: [["About Us", "/about"], ["Our Story", "/our-story"], ["Amit Bawa", "/amit-bawa"], ["About the President", "/leadership"], ["Supporters", "/supporters"], ["Transparency", "/transparency"], ["Policies", "/policies"]] },
  { label: "Our Work", links: [["Focus Areas", "/our-work"], ["Programmes", "/programmes"], ["Skills & Livelihoods", "/skills-livelihoods"], ["Passport to Earning", "/p2e"], ["Know Your Money", "/kym"], ["Our Impact", "/impact"], ["Gallery", "/gallery"], ["Media Features", "/media-features"], ["News & Updates", "/updates"]] },
  { label: "Partner", links: [["Partners & Collaborations", "/partners"], ["CSR Partnerships", "/csr-partnerships"], ["Discuss a Partnership", "/discuss-partnership"]] },
  { label: "Get Involved", links: [["Volunteer & Intern", "/get-involved"], ["Fund a Programme", "/fund-a-programme"], ["Support Our Work", "/support"], ["Donate", "/donate"]] },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) { setOpen(false); toggleRef.current?.focus(); }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.classList.remove("menu-open"); window.removeEventListener("keydown", closeOnEscape); };
  }, [open]);
  useEffect(() => {
    document.body.classList.toggle("search-open", searchOpen);
    if (searchOpen) window.setTimeout(() => searchInputRef.current?.focus(), 30);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && searchOpen) setSearchOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.classList.remove("search-open"); window.removeEventListener("keydown", closeOnEscape); };
  }, [searchOpen]);
  return <>
    <div className="topbar"><div className="container topbar-inner"><span>{t("Registered NGO · Serving communities since 2004")}</span><div className="topbar-links"><a href="/transparency">{t("80G Approved")}</a><a href="/contact">{t("Amritsar, India")}</a><SocialLinks className="header-social-links" /></div></div></div>
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="/" aria-label={t("Punjabi Samvad")}><img src="/images/punjabi-samvad-logo.jpeg" alt={t("Punjabi Samvad")} /><span><strong>{t("Punjabi Samvad")}</strong><small>{t("Dialogue. Dignity. Change.")}</small></span></a>
        <nav className="desktop-nav" aria-label={t("Primary navigation")}>
          {groups.map(group => <div className="nav-group" key={group.label}><button>{t(group.label)}<ChevronDown size={14} /></button><div className="nav-dropdown">{group.links.map(([label, href]) => <a href={href} key={href}>{t(label)}</a>)}</div></div>)}
          <a href="/faq">{t("FAQs")}</a><a href="/contact">{t("Contact")}</a>
          <button
            className="nav-lang-pill"
            type="button"
            onClick={toggleLanguage}
            aria-label={`Current language: ${language === "en" ? "English" : "ਪੰਜਾਬੀ"}. Click to switch to ${language === "en" ? "ਪੰਜਾਬੀ" : "English"}`}
            title="Switch language / ਭਾਸ਼ਾ ਬਦਲੋ"
          >
            <Languages size={15} className="lang-pill-icon" aria-hidden="true" />
            <span className={`lang-pill-item ${language === "en" ? "active" : ""}`}>ENG</span>
            <span className="lang-pill-divider" aria-hidden="true">|</span>
            <span className={`lang-pill-item gurmukhi ${language === "pa" ? "active" : ""}`}>ਪੰਜਾਬੀ</span>
          </button>
          <button className="nav-search-button" type="button" data-search-open onClick={() => setSearchOpen(true)} aria-label={t("Search Punjabi Samvad")}><Search size={18} /></button>
        </nav>
        <button
          className="mobile-header-lang-pill"
          type="button"
          onClick={toggleLanguage}
          aria-label={`Switch language from ${language === "en" ? "English to Punjabi" : "Punjabi to English"}`}
        >
          <Languages size={14} aria-hidden="true" />
          <span className={language === "en" ? "gurmukhi-tag" : ""}>{language === "en" ? "ਪੰਜਾਬੀ" : "ENG"}</span>
        </button>
        <a className="button button-small header-cta" href="/donate">{t("Donate")}</a>
        <button ref={toggleRef} className="mobile-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? t("Close menu") : t("Open menu")}>{open ? <X /> : <Menu />}</button>
      </div>
      <div id="mobile-navigation" className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="container mobile-menu-inner">
          <div className="mobile-lang-bar">
            <span className="mobile-lang-label">
              <Languages size={15} aria-hidden="true" />
              {t("Language / ਭਾਸ਼ਾ")}
            </span>
            <div className="mobile-lang-segmented" role="radiogroup" aria-label="Language selection">
              <button
                type="button"
                className={`mobile-lang-seg ${language === "en" ? "active" : ""}`}
                onClick={() => { if (language !== "en") toggleLanguage(); }}
                aria-checked={language === "en"}
                role="radio"
              >
                English
              </button>
              <button
                type="button"
                className={`mobile-lang-seg gurmukhi ${language === "pa" ? "active" : ""}`}
                onClick={() => { if (language !== "pa") toggleLanguage(); }}
                aria-checked={language === "pa"}
                role="radio"
              >
                ਪੰਜਾਬੀ
              </button>
            </div>
          </div>
          {groups.map(group => <div className="mobile-group" key={group.label}><strong>{t(group.label)}</strong>{group.links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{t(label)}</a>)}</div>)}
          <div className="mobile-group"><strong>{t("More")}</strong><a href="/faq">{t("FAQs")}</a><a href="/contact">{t("Contact")}</a><button type="button" className="mobile-search-link" data-search-open onClick={() => { setOpen(false); setSearchOpen(true); }}><Search size={16} />{t("Search the website")}</button><SocialLinks className="mobile-social-links" /></div>
          <a className="button" href="/donate">{t("Donate")}</a>
        </div>
      </div>
    </header>
    <div className="site-search" data-search-dialog hidden={!searchOpen} onMouseDown={(event) => { if (event.currentTarget === event.target) setSearchOpen(false); }}>
      <section className="site-search-panel" role="dialog" aria-modal="true" aria-labelledby="site-search-title">
        <button className="site-search-close" type="button" data-search-close onClick={() => setSearchOpen(false)} aria-label={t("Close search")}><X /></button>
        <span className="eyebrow">{t("Find what you need")}</span>
        <h2 id="site-search-title">{t("Search Punjabi Samvad")}</h2>
        <p>{t("Find programmes, focus areas, impact information, policies and ways to take part.")}</p>
        <form className="site-search-form" action="/search" method="get" role="search">
          <Search aria-hidden="true" />
          <label className="sr-only" htmlFor="site-search-input">{t("Search the website")}</label>
          <input ref={searchInputRef} id="site-search-input" name="q" type="search" placeholder={t("Try mental health, scholarships or policies")} autoComplete="off" />
          <button type="submit" aria-label={t("Search")}><ArrowRight /></button>
        </form>
        <div className="site-search-popular"><span>{t("Popular")}</span><a href="/programmes">{t("Programmes")}</a><a href="/impact">{t("Our impact")}</a><a href="/p2e">{t("Passport to Earning")}</a><a href="/donate">{t("Donate")}</a></div>
      </section>
    </div>
  </>;
}
