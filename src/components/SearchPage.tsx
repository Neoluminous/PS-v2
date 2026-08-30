"use client";

import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import type { SearchEntry } from "../content/search";

function normalize(value: string) { return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim(); }

export default function SearchPage({ entries, initialQuery }: { entries: SearchEntry[]; initialQuery: string }) {
  const [query, setQuery] = useState(initialQuery);
  const results = useMemo(() => {
    const terms = normalize(query).split(" ").filter(Boolean);
    if (!terms.length) return entries;
    return entries.filter((entry) => {
      const haystack = normalize(`${entry.title} ${entry.description} ${entry.category} ${entry.keywords}`);
      return terms.every((term) => haystack.includes(term));
    });
  }, [entries, query]);

  return <section className="search-page section">
    <div className="container search-page-layout">
      <header className="search-page-header">
        <span className="eyebrow">Explore Punjabi Samvad</span>
        <h1>What are you looking for?</h1>
        <p>Search programmes, public-health work, impact, people, policies and ways to participate.</p>
        <form className="search-page-form" action="/search" method="get" role="search">
          <Search aria-hidden="true" />
          <label className="sr-only" htmlFor="site-search-page-input">Search the website</label>
          <input id="site-search-page-input" name="q" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the website" />
          <button type="submit">Search <ArrowRight /></button>
        </form>
      </header>
      <div className="search-results-meta"><strong data-search-count>{results.length}</strong><span>{query ? `results for “${query}”` : "pages and resources"}</span></div>
      <div className="search-results" data-search-results>
        {entries.map((entry) => {
          const visible = results.includes(entry);
          return <a className="search-result" href={entry.href} key={entry.href} hidden={!visible} data-search-item data-search-text={`${entry.title} ${entry.description} ${entry.category} ${entry.keywords}`}>
            <span>{entry.category}</span><div><h2>{entry.title}</h2><p>{entry.description}</p></div><ArrowRight aria-hidden="true" />
          </a>;
        })}
      </div>
      <div className="search-empty" data-search-empty hidden={results.length > 0}><strong>No matching pages yet.</strong><p>Try a broader phrase, or visit <Link to="/contact">Contact</Link> and ask us directly.</p></div>
    </div>
  </section>;
}
