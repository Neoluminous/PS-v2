"use client";

import { useEffect } from "react";

const targets = [
  ".section-heading", ".section-copy", ".about-visual", ".focus-card", ".stat",
  ".story-card", ".partner-grid > div", ".partnership-banner", ".support-grid > div",
  ".compliance-list > span", ".page-lead", ".content-card", ".page-cta",
  ".page-feature-photo", ".editorial-action-inner", ".editorial-wordmark", ".editorial-footer-grid > div",
  ".president-intro", ".president-story-grid > article", ".president-children", ".president-photo-pair > img", ".president-recognition-copy", ".president-recognition-images > img", ".president-book", ".president-youth",
  ".about-editorial-intro > *", ".about-photo-composition > *", ".about-roots-layout > *", ".about-work-panel",
  ".about-method-head > *", ".about-method-item", ".about-advocacy-copy", ".about-direction-grid > article", ".about-principles", ".about-today-layout > *",
  ".story-hero-copy", ".story-origin > *", ".story-impact-strip .container > *", ".story-timeline-heading", ".story-milestone", ".story-expanded-head > *", ".story-image-ribbon > figure", ".story-continuing > *",
  ".supporters-intro > *", ".supporter-profile",
  ".amit-hero-copy", ".amit-hero-portrait", ".amit-opening-grid > *", ".amit-creative-grid > *", ".amit-practices > div", ".amit-work-layout > *", ".amit-legacy-inner > *",
  ".work-hero-copy", ".work-hero-media", ".work-intro-statement", ".focus-story", ".programme-method > div", ".programme-story", ".hiv-resource-redesign > *", ".impact-figures > div", ".impact-opening > *", ".impact-measurement > *", ".impact-learning-grid > article", ".work-next-link",
  ".gallery-hero-copy", ".gallery-hero-photo", ".gallery-archive-heading", ".gallery-frame", ".gallery-next",
  ".skills-hero-copy", ".skills-hero-media > figure", ".skills-practice-head > *", ".skills-practice-list > article", ".skills-partnership", ".skills-stories-head > *", ".skills-story", ".skills-field-note-grid > *", ".skills-closing-inner > *",
  ".learning-hero-copy", ".learning-hero-visual", ".learning-section-label", ".learning-prose", ".learning-facts > div", ".learning-field-heading", ".learning-field-media > figure", ".learning-photo-wide", ".learning-topic-panel", ".learning-deeper-copy", ".learning-official-visual", ".learning-cta", ".learning-programme-links > a"
].join(",");

export default function MotionEnhancer() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(targets));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    elements.forEach((element, index) => {
      element.classList.add("reveal-item");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
    });
    if (reduced || !("IntersectionObserver" in window)) {
      elements.forEach(element => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8%", threshold: .08 });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return null;
}
