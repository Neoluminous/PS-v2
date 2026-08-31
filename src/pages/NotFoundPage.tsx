import { ArrowRight, FileQuestion } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function NotFoundPage() {
  const { t } = useLanguage();
  return (
    <main>
      <SiteHeader />
      <section className="not-found-page">
        <div className="container not-found-layout">
          <div className="not-found-copy">
            <span className="eyebrow light">404</span>
            <h1>{t("Page not found")}</h1>
            <p>{t("The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.")}</p>
            <div className="not-found-actions">
              <Link to="/" className="button">
                {t("Return home")} <ArrowRight size={17} />
              </Link>
            </div>
          </div>
          <div className="not-found-code" aria-hidden="true">
            <FileQuestion size={160} />
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
