"use client";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
  ".learning-hero-copy", ".learning-hero-visual", ".learning-section-label", ".learning-prose", ".learning-facts > div", ".learning-field-heading", ".learning-field-media > figure", ".learning-photo-wide", ".learning-topic-panel", ".learning-deeper-copy", ".learning-official-visual", ".learning-cta", ".learning-programme-links > a",
  ".center-action", ".impact-copy", ".compliance-grid > div",
  ".donate-heading", ".donate-grid > article", ".bank-heading", ".bank-grid > article", ".donation-trust > span", ".donation-trust > a",
  ".involved-hero-copy", ".involved-hero-visual", ".involved-university-intro > *", ".involved-university-logo", ".involved-intro-grid > *", ".involved-benefits > div", ".involved-section-heading > *", ".involved-ledger-item", ".involved-evidence-heading > *", ".involved-student-item", ".involved-apply-panel > div", ".involved-volunteer-grid > *",
  ".search-page-header > *", ".search-results-meta", ".search-result",
  ".policy-hero-content > *", ".policy-intro > *", ".policy-publication-note", ".policy-group", ".policy-report-card",
  ".policy-breadcrumb", ".policy-article > *", ".policy-side > *", ".policy-pagination",
  ".page-hero-content > *", ".hiv-resource-copy > *",
  ".media-intro > *", ".media-tile", ".book-cover-wrap", ".book-copy > *", ".press-heading > *", ".press-card",
  ".facebook-updates-copy > *", ".facebook-frame-wrap",
  ".partners-editorial-intro > *", ".partner-editorial-card", ".partners-editorial-invite > *"
].join(",");

export default function MotionEnhancer() {
  const location = useLocation();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let observer: IntersectionObserver | null = null;
    let scanTimeout: ReturnType<typeof setTimeout>;

    if (!reduced && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer!.unobserve(entry.target);
          }
        });
      }, { rootMargin: "0px 0px -8%", threshold: .08 });
    }

    const scanAndBind = () => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>(targets));
      let indexCounter = 0;
      
      elements.forEach((element) => {
        // Only process elements that haven't been bound yet
        if (!element.classList.contains("reveal-item")) {
          element.classList.add("reveal-item");
          
          if (reduced || !("IntersectionObserver" in window)) {
            element.classList.add("is-visible");
          } else {
            element.style.setProperty("--reveal-delay", `${Math.min(indexCounter % 4, 3) * 70}ms`);
            observer!.observe(element);
            indexCounter++;
          }
        }
      });
    };

    // Initial scan
    scanAndBind();

    // Re-scan when DOM changes (e.g., Suspense lazy loading finishes)
    const mutationObserver = new MutationObserver(() => {
      clearTimeout(scanTimeout);
      scanTimeout = setTimeout(scanAndBind, 50);
    });
    
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(scanTimeout);
      if (observer) observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [location.pathname]); // Re-run setup on route changes as a safeguard

  return null;
}
