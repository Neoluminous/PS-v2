import { ArrowRight, FileQuestion } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main>
      <SiteHeader />
      <section className="not-found-page">
        <div className="container not-found-layout">
          <div className="not-found-copy">
            <span className="eyebrow light">404</span>
            <h1>Page not found</h1>
            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <div className="not-found-actions">
              <Link to="/" className="button">
                Return home <ArrowRight size={17} />
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
