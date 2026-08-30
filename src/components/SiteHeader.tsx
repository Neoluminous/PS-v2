"use client";

import { ArrowRight, ChevronDown, Menu, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SocialLinks from "./SocialLinks";

const groups = [
  { label: "About", links: [["About Us", "/about"], ["Our Story", "/our-story"], ["Amit Bawa", "/amit-bawa"], ["About the President", "/leadership"], ["Supporters", "/supporters"], ["Transparency", "/transparency"], ["Policies", "/policies"]] },
  { label: "Our Work", links: [["Focus Areas", "/our-work"], ["Programmes", "/programmes"], ["Skills & Livelihoods", "/skills-livelihoods"], ["Passport to Earning", "/p2e"], ["Know Your Money", "/kym"], ["Our Impact", "/impact"], ["Gallery", "/gallery"], ["Media Features", "/media-features"], ["News & Updates", "/updates"]] },
  { label: "Partner", links: [["Partners & Collaborations", "/partners"], ["CSR Partnerships", "/csr-partnerships"], ["Discuss a Partnership", "/discuss-partnership"]] },
  { label: "Get Involved", links: [["Volunteer & Intern", "/get-involved"], ["Fund a Programme", "/fund-a-programme"], ["Support Our Work", "/support"], ["Donate", "/donate"]] },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
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
    <div className="topbar"><div className="container topbar-inner"><span>Registered NGO · Serving communities since 2004</span><div className="topbar-links"><a href="/transparency">80G Approved</a><a href="/contact">Amritsar, India</a><SocialLinks className="header-social-links" /></div></div></div>
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="/" aria-label="Punjabi Samvad home"><img src="/images/punjabi-samvad-logo.jpeg" alt="Punjabi Samvad" /><span><strong>Punjabi Samvad</strong><small>Dialogue. Dignity. Change.</small></span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {groups.map(group => <div className="nav-group" key={group.label}><button>{group.label}<ChevronDown size={14} /></button><div className="nav-dropdown">{group.links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div></div>)}
          <a href="/faq">FAQs</a><a href="/contact">Contact</a>
          <button className="nav-search-button" type="button" data-search-open onClick={() => setSearchOpen(true)} aria-label="Search Punjabi Samvad"><Search size={18} /></button>
        </nav>
        <a className="button button-small header-cta" href="/donate">Donate</a>
        <button ref={toggleRef} className="mobile-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
      </div>
      <div id="mobile-navigation" className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="container mobile-menu-inner">
          {groups.map(group => <div className="mobile-group" key={group.label}><strong>{group.label}</strong>{group.links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}</div>)}
          <div className="mobile-group"><strong>More</strong><a href="/faq">FAQs</a><a href="/contact">Contact</a><button type="button" className="mobile-search-link" data-search-open onClick={() => { setOpen(false); setSearchOpen(true); }}><Search size={16} />Search the website</button><SocialLinks className="mobile-social-links" /></div>
          <a className="button" href="/donate">Donate</a>
        </div>
      </div>
    </header>
    <div className="site-search" data-search-dialog hidden={!searchOpen} onMouseDown={(event) => { if (event.currentTarget === event.target) setSearchOpen(false); }}>
      <section className="site-search-panel" role="dialog" aria-modal="true" aria-labelledby="site-search-title">
        <button className="site-search-close" type="button" data-search-close onClick={() => setSearchOpen(false)} aria-label="Close search"><X /></button>
        <span className="eyebrow">Find what you need</span>
        <h2 id="site-search-title">Search Punjabi Samvad</h2>
        <p>Find programmes, focus areas, impact information, policies and ways to take part.</p>
        <form className="site-search-form" action="/search" method="get" role="search">
          <Search aria-hidden="true" />
          <label className="sr-only" htmlFor="site-search-input">Search the website</label>
          <input ref={searchInputRef} id="site-search-input" name="q" type="search" placeholder="Try mental health, scholarships or policies" autoComplete="off" />
          <button type="submit" aria-label="Submit search"><ArrowRight /></button>
        </form>
        <div className="site-search-popular"><span>Popular</span><a href="/programmes">Programmes</a><a href="/impact">Our impact</a><a href="/p2e">Passport to Earning</a><a href="/donate">Donate</a></div>
      </section>
    </div>
  </>;
}
