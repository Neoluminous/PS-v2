import { ArrowRight, FileCheck2, Mail, Phone, ShieldAlert } from "lucide-react";
import { policies, policyCategories, policyPublished, policyReview, policyVersion } from "../content/policies";
import { useLanguage } from "../context/LanguageContext";

export default function PoliciesPage() {
  const { t } = useLanguage();
  return <section className="policies-page section">
    <div className="container">
      <div className="policy-intro">
        <div>
          <span className="eyebrow">{t("Public standards")}</span>
          <h2>{t("Our clear rules for responsible work")}</h2>
          <p>{t("These policies cover governance, safeguarding, people, finance, data, fieldwork and partnerships across Punjabi Samvad.")}</p>
        </div>
        <dl className="policy-version" aria-label="Policy suite information">
          <div><dt>{t("Website version")}</dt><dd>{policyVersion}</dd></div>
          <div><dt>{t("Published")}</dt><dd>{policyPublished}</dd></div>
          <div><dt>{t("Scheduled review")}</dt><dd>{policyReview}</dd></div>
        </dl>
      </div>

      <div className="policy-publication-note">
        <FileCheck2 aria-hidden="true" />
        <p>{t("These pages state Punjabi Samvad's public standards. Committee orders, approval limits and statutory registers depend on the organisation's current structure and applicable law. Contact us for the current signed or approved document.")}</p>
      </div>

      <div className="policy-groups">
        {policyCategories.map((category) => {
          const categoryPolicies = policies.filter((policy) => policy.category === category);
          return <section className="policy-group" key={category}>
            <header><h3>{t(category)}</h3><span>{categoryPolicies.length} {t(categoryPolicies.length === 1 ? "policy" : "policies")}</span></header>
            <div className="policy-index">
              {categoryPolicies.map((policy) => <a className="policy-index-row" href={`/policies/${policy.slug}`} key={policy.slug}>
                <span className="policy-index-number">{String(policy.number).padStart(2, "0")}</span>
                <span><strong>{t(policy.shortTitle)}</strong><small>{t(policy.summary)}</small></span>
                <ArrowRight aria-hidden="true" />
              </a>)}
            </div>
          </section>;
        })}
      </div>

      <aside className="policy-report-card" aria-labelledby="report-policy-concern">
        <ShieldAlert aria-hidden="true" />
        <div><h3 id="report-policy-concern">{t("Report a concern")}</h3><p>{t("Use these contacts for a safeguarding, conduct, fraud, privacy or workplace concern. Call police or emergency services if someone faces immediate danger.")}</p></div>
        <div className="policy-report-links"><a href="mailto:punjabisamvadasr@gmail.com?subject=Confidential%20policy%20concern"><Mail />{t("Email Punjabi Samvad")}</a><a href="tel:+918728033911"><Phone />+91 87280 33911</a></div>
      </aside>
    </div>
  </section>;
}
