import { ArrowLeft, ArrowRight, ExternalLink, Mail, ShieldAlert } from "lucide-react";
import type { Policy } from "../content/policies";
import { policies, policyPublished, policyReview, policyVersion } from "../content/policies";

function sectionId(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function PolicyDetailPage({ policy }: { policy: Policy }) {
  const currentIndex = policies.findIndex((item) => item.slug === policy.slug);
  const previous = currentIndex > 0 ? policies[currentIndex - 1] : null;
  const next = currentIndex < policies.length - 1 ? policies[currentIndex + 1] : null;

  return <section className="policy-detail section">
    <div className="container">
      <nav className="policy-breadcrumb" aria-label="Breadcrumb"><a href="/policies"><ArrowLeft />All policies</a><span>{policy.category}</span></nav>
      <div className="policy-detail-layout">
        <aside className="policy-side">
          <span>Policy {String(policy.number).padStart(2, "0")}</span>
          <dl>
            <div><dt>Version</dt><dd>{policyVersion}</dd></div>
            <div><dt>Published</dt><dd>{policyPublished}</dd></div>
            <div><dt>Review by</dt><dd>{policyReview}</dd></div>
            <div><dt>Owner</dt><dd>{policy.owner}</dd></div>
          </dl>
          <nav aria-label="On this page"><strong>On this page</strong>{policy.sections.map((section) => <a href={`#${sectionId(section.title)}`} key={section.title}>{section.title}</a>)}</nav>
        </aside>

        <article className="policy-article">
          <header><span>{policy.category}</span><h1>{policy.title}</h1><p>{policy.summary}</p></header>
          <div className="policy-scope-note"><strong>Applies to</strong><p>Governing Body members, employees, consultants, volunteers, interns, facilitators and contractors where the subject relates to their role.</p></div>
          {policy.sections.map((section) => <section id={sectionId(section.title)} className="policy-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
          </section>)}

          {policy.sources && <section className="policy-sources" aria-labelledby="official-references"><h2 id="official-references">Official references</h2><p>These government sources support the legal points in this policy.</p>{policy.sources.map((source) => <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>{source.label}<ExternalLink /></a>)}</section>}

          <aside className="policy-help"><ShieldAlert /><div><h2>Raise a concern</h2><p>Email Punjabi Samvad with the policy name and the safest way to contact you. A statutory or emergency report should also go to the authority named in the relevant policy.</p><a href={`mailto:punjabisamvadasr@gmail.com?subject=${encodeURIComponent(policy.shortTitle + " concern")}`}><Mail />punjabisamvadasr@gmail.com</a></div></aside>

          <p className="policy-law-note">Punjabi Samvad follows applicable law where it sets a stricter rule or a different process. This public page does not replace a statutory committee order, employment term, funding agreement or signed internal procedure.</p>
        </article>
      </div>

      <nav className="policy-pagination" aria-label="Policy navigation">
        {previous ? <a href={`/policies/${previous.slug}`}><ArrowLeft /><span><small>Previous policy</small><strong>{previous.shortTitle}</strong></span></a> : <span />}
        {next ? <a href={`/policies/${next.slug}`}><span><small>Next policy</small><strong>{next.shortTitle}</strong></span><ArrowRight /></a> : <span />}
      </nav>
    </div>
  </section>;
}
