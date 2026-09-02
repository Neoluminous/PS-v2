"use client";

import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import type { SearchEntry } from "../content/search";
import { useLanguage } from "../context/LanguageContext";

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFC")
    .replace(/[^\p{L}\p{N}\s]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export default function SearchPage({ entries, initialQuery }: { entries: SearchEntry[]; initialQuery: string }) {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    const terms = normalize(query).split(" ").filter(Boolean);
    if (!terms.length) return entries;

    return entries.filter((entry) => {
      const titleTrans = t(entry.title);
      const descTrans = t(entry.description);
      const catTrans = t(entry.category);

      const haystack = normalize(
        `${entry.title} ${titleTrans} ${entry.description} ${descTrans} ${entry.category} ${catTrans} ${entry.keywords}`
      );

      return terms.every((term) => haystack.includes(term));
    });
  }, [entries, query, t]);

  const resultMetaText = useMemo(() => {
    if (!query.trim()) {
      return t("pages and resources");
    }
    if (language === "pa") {
      return `“${query}” ਲਈ ${results.length === 1 ? "ਨਤੀਜਾ" : "ਨਤੀਜੇ"}`;
    }
    return `${results.length === 1 ? "result" : "results"} for “${query}”`;
  }, [query, language, results.length, t]);

  return (
    <section className="search-page section">
      <div className="container search-page-layout">
        <header className="search-page-header">
          <span className="eyebrow">{t("Explore Punjabi Samvad")}</span>
          <h1>{t("What are you looking for?")}</h1>
          <p>{t("Find programmes, public-health work, impact, people, policies and ways to participate.")}</p>
          <form className="search-page-form" action="/search" method="get" role="search" onSubmit={(e) => { e.preventDefault(); }}>
            <Search aria-hidden="true" />
            <label className="sr-only" htmlFor="site-search-page-input">{t("Search the website")}</label>
            <input
              id="site-search-page-input"
              name="q"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t("Try mental health, scholarships or policies")}
            />
            <button type="button" onClick={() => {}}>{t("Search ")} <ArrowRight /></button>
          </form>
        </header>
        <div className="search-results-meta">
          <strong data-search-count>{results.length}</strong>
          <span>{resultMetaText}</span>
        </div>
        <div className="search-results" data-search-results>
          {entries.map((entry) => {
            const visible = results.includes(entry);
            const displayTitle = t(entry.title);
            const displayDesc = t(entry.description);
            const displayCat = t(entry.category);

            return (
              <a
                className="search-result"
                href={entry.href}
                key={entry.href}
                hidden={!visible}
                data-search-item
                data-search-text={`${entry.title} ${displayTitle} ${entry.description} ${displayDesc} ${entry.category} ${entry.keywords}`}
              >
                <span>{displayCat}</span>
                <div>
                  <h2>{displayTitle}</h2>
                  <p>{displayDesc}</p>
                </div>
                <ArrowRight aria-hidden="true" />
              </a>
            );
          })}
        </div>
        <div className="search-empty" data-search-empty hidden={results.length > 0}>
          <strong>{t("No matching pages yet.")}</strong>
          <p>
            {t("Try a broader phrase, or visit")}{" "}
            <Link to="/contact">{t("Contact")}</Link>{" "}
            {t("and ask us directly.")}
          </p>
        </div>
      </div>
    </section>
  );
}
