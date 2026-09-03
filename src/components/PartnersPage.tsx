import { ArrowRight, Building2, Handshake } from "lucide-react";
import type { SitePage } from "../content/pages";
import { useLanguage } from "../context/LanguageContext";

const partnerLogos = [
  { src: "/images/partner-aditya.webp", alt: "Aditya Birla Group", className: "partner-editorial-logo-aditya" },
  { src: "/images/partner-government-punjab.svg", alt: "Government of Punjab, India", className: "partner-editorial-logo-wide" },
  { src: "/images/partner-culture.svg", alt: "Ministry of Culture, Government of India" },
  { src: "/images/partner-iim-horizontal.webp", alt: "Indian Institute of Management Amritsar", className: "partner-editorial-logo-wide" },
  { src: "/images/partner-cms.svg", alt: "CMS Foundation", className: "partner-editorial-logo-cms" },
  { src: "/images/partner-techvimal.webp", alt: "Techvimal Foundation", className: "partner-editorial-logo-wide" },
  { src: "/images/partner-information-broadcasting.svg", alt: "Ministry of Information and Broadcasting, Government of India", className: "partner-editorial-logo-wide" },
  { src: "/images/partner-punjab-health.webp", alt: "Department of Health and Family Welfare, Punjab", className: "partner-editorial-logo-seal" },
];

export default function PartnersPage({ page }: { page: SitePage }) {
  const { t } = useLanguage();
  const institutions = page.sections.slice(0, 8);
  const invitation = page.sections[8];

  return <section className="partners-editorial section">
    <div className="container">
      <header className="partners-editorial-intro">
        <div><Handshake aria-hidden="true" /><span>{t("Shared work, clearly defined")}</span></div>
        <p>{t("Each collaboration brings a different kind of strength: public-health knowledge, academic involvement, community access, specialist experience or programme support.")}</p>
      </header>

      <div className="partners-editorial-grid">
        {institutions.map((partner, index) => {
          const logo = partnerLogos[index];
          return <article className="partner-editorial-card" key={partner.title}>
            <span className="partner-editorial-number">{String(index + 1).padStart(2, "0")}</span>
            <div className={`partner-editorial-logo ${logo.className ?? ""}`}>
              <img loading="lazy" decoding="async" src={logo.src} alt={logo.alt} />
            </div>
            <div className="partner-editorial-copy">
              <h2>{partner.title}</h2>
              <p>{partner.body}</p>
            </div>
          </article>;
        })}
      </div>

      {invitation && <aside className="partners-editorial-invite">
        <Building2 aria-hidden="true" />
        <div><span>{t("Work with Punjabi Samvad")}</span><h2>{invitation.title}</h2><p>{invitation.body}</p></div>
        <a className="button button-white" href={page.cta?.href ?? "/discuss-partnership"}>{page.cta?.label ?? "Discuss a partnership"} <ArrowRight size={17} /></a>
      </aside>}
    </div>
  </section>;
}
