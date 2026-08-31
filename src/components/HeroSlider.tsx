"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const slides = [
  { image: "/images/hero-samvad.png", kicker: "Dialogue that moves communities forward", titleHTML: "Change Begins<br />With <em>Samvad.</em>", titleKey: "Change BeginsWith Samvad.", text: "More than two decades of grassroots programmes advancing dignity, opportunity and well-being across India.", cta: "Explore our work", href: "#work", position: "center", logo: null, logoAlt: "", logoTone: "" },
  { image: "/images/hero-education.jpg", kicker: "Women, girls & young people", titleHTML: "Knowledge becomes<br /><em>confidence.</em>", titleKey: "Knowledge becomes<br /><em>confidence.</em>", text: "Education, health awareness and skills that help people participate more fully in their own development.", cta: "See our programmes", href: "#work", position: "right", logo: null, logoAlt: "", logoTone: "" },
  { image: "/images/hero-youth.jpg", kicker: "Creative advocacy since 2004", titleHTML: "Hard issues need<br /><em>open conversations.</em>", titleKey: "Hard issues need<br /><em>open conversations.</em>", text: "From school workshops to theatre and documentary storytelling, we create spaces where people can ask, learn and act.", cta: "Our story", href: "#journey", position: "left", logo: null, logoAlt: "", logoTone: "" },
  { image: "/images/hero-know-your-money.webp", kicker: "Financial literacy with HDFC Securities", titleHTML: "Understand money.<br /><em>Use it well.</em>", titleKey: "Understand money.<br /><em>Use it well.</em>", text: "A free five-hour programme covering saving, banking, credit, insurance and safer digital payments.", cta: "Learn more", href: "/kym", position: "right", secondary: false, logo: "/images/hero-partners/hdfc-securities.png", logoAlt: "HDFC Securities", logoTone: "dark" },
  { image: "/images/hero-passport-to-earning.webp", kicker: "Free digital learning with UNICEF", titleHTML: "Build skills for<br /><em>what comes next.</em>", titleKey: "Build skills for<br /><em>what comes next.</em>", text: "Free online courses and certificates for Indian youth preparing for study, work and new opportunities.", cta: "Learn more", href: "/p2e", position: "right", secondary: false, logo: "/images/hero-partners/unicef.webp", logoAlt: "UNICEF for every child", logoTone: "light unicef" },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const { t } = useLanguage();
  const go = (next: number) => setActive((next + slides.length) % slides.length);
  useEffect(() => { const timer = setInterval(() => setActive((v) => (v + 1) % slides.length), 7000); return () => clearInterval(timer); }, []);
  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Punjabi Samvad highlights">
      {slides.map((slide, index) => (
        <div className={`hero-slide ${slide.position} ${active === index ? "active" : ""}`} key={index} aria-hidden={active !== index}>
          <div className="hero-image" style={{ backgroundImage: `url(${slide.image})` }} /><div className="hero-overlay" />
          <div className="container hero-content">{slide.logo && <div className={`hero-partner-logo ${slide.logoTone.split(" ").map((tone) => `hero-partner-logo-${tone}`).join(" ")}`}><img src={slide.logo} alt={slide.logoAlt} /></div>}<span className="hero-kicker"><i />{t(slide.kicker)}</span>{index === 0 ? <h1 dangerouslySetInnerHTML={{ __html: t(slide.titleKey) || slide.titleHTML }} /> : <h2 dangerouslySetInnerHTML={{ __html: t(slide.titleKey) || slide.titleHTML }} />}<p>{t(slide.text)}</p><div className="hero-actions"><a className="button button-light" href={slide.href}>{t(slide.cta)} <ArrowRight size={17} /></a>{slide.secondary !== false && <a className="hero-secondary" href="#about"><span><Play size={15} fill="currentColor" /></span>{t("Discover our story")}</a>}</div></div>
        </div>
      ))}
      <div className="container hero-controls">
        <div className="hero-dots">{slides.map((_, index) => <button key={index} onClick={() => go(index)} className={active === index ? "active" : ""} aria-label={`Show slide ${index + 1}`}><span /></button>)}</div>
        <div className="hero-arrows"><button onClick={() => go(active - 1)} aria-label="Previous slide"><ArrowLeft /></button><button onClick={() => go(active + 1)} aria-label="Next slide"><ArrowRight /></button></div>
      </div>
      <div className="hero-scroll"><span>{t("Scroll to discover")}</span><i /></div>
    </section>
  );
}
