import PoliciesPage from "../components/PoliciesPage";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export default function PolicyIndexPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero policy-hero">
        <div className="page-hero-image" />
        <div className="container page-hero-content">
          <span className="eyebrow light">Governance and care</span>
          <h1>Policies</h1>
          <p>Standards that guide how Punjabi Samvad works, protects people and uses resources.</p>
        </div>
      </section>
      <PoliciesPage />
      <SiteFooter />
    </main>
  );
}
