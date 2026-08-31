import PoliciesPage from "../components/PoliciesPage";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { useLanguage } from "../context/LanguageContext";

export default function PolicyIndexPage() {
  const { t } = useLanguage();
  return (
    <main>
      <SiteHeader />
      <section className="page-hero policy-hero">
        <div className="page-hero-image" />
        <div className="container page-hero-content">
          <span className="eyebrow light">{t("Governance and care")}</span>
          <h1>{t("Policies")}</h1>
          <p>{t("Standards that guide how Punjabi Samvad works, protects people and uses resources.")}</p>
        </div>
      </section>
      <PoliciesPage />
      <SiteFooter />
    </main>
  );
}
