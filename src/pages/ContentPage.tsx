import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { useParams, Navigate } from "react-router-dom";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { pages } from "../content/pages";
import FacebookUpdates from "../components/FacebookUpdates";
import MediaFeaturesPage from "../components/MediaFeaturesPage";
import DonatePage from "../components/DonatePage";
import PresidentPage from "../components/PresidentPage";
import SupportersPage from "../components/SupportersPage";
import AboutPage from "../components/AboutPage";
import StoryPage from "../components/StoryPage";
import AmitBawaPage from "../components/AmitBawaPage";
import { FocusAreasPage, ImpactPage, ProgrammesPage } from "../components/WorkPages";
import GalleryPage from "../components/GalleryPage";
import LearningProgrammePage from "../components/LearningProgrammePage";
import PartnersPage from "../components/PartnersPage";
import GetInvolvedPage from "../components/GetInvolvedPage";
import SkillsLivelihoodsPage from "../components/SkillsLivelihoodsPage";
import NotFoundPage from "./NotFoundPage";
import { useLanguage } from "../context/LanguageContext";

const legacyLearningRoutes: Record<string, string> = {
  "passport-to-earning": "/p2e",
  "know-your-money": "/kym",
};

const featurePhotos: Record<string, { src: string; alt: string }> = {
  programmes: { src: "/images/programmes-health.jpg", alt: "A health educator leading an awareness workshop" },
  impact: { src: "/images/impact-feedback.jpg", alt: "A programme team reviewing community feedback" },
  partners: { src: "/images/partners-planning.jpg", alt: "Partners planning a social impact programme" },
  "csr-partnerships": { src: "/images/generated/info/csr-partnership-planning.webp", alt: "Punjabi Samvad representatives and institutional partners planning a community programme" },
  "fund-a-programme": { src: "/images/generated/info/fund-education-programme.webp", alt: "A student receiving learning support from a mentor and Punjabi Samvad representative" },
  "discuss-partnership": { src: "/images/generated/info/community-partnership-discussion.webp", alt: "Punjabi Samvad field coordinators discussing a community programme with local representatives" },
  "get-involved": { src: "/images/generated/info/volunteer-preparation.webp", alt: "Punjabi volunteers preparing educational and health-awareness materials" },
  transparency: { src: "/images/generated/info/transparency-records.webp", alt: "Punjabi Samvad team members reviewing organised programme and financial records" },
  contact: { src: "/images/generated/info/contact-community-desk.webp", alt: "A Punjabi Samvad coordinator welcoming people at a community information meeting" },
};

export default function ContentPage() {
  const { slug } = useParams();
  const { t } = useLanguage();
  
  if (!slug) return <NotFoundPage />;
  const legacyDestination = legacyLearningRoutes[slug];
  if (legacyDestination) return <Navigate to={legacyDestination} replace />;
  
  const page = pages[slug];
  if (!page) return <NotFoundPage />;
  
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://punjabisamvad.com/" }, { "@type": "ListItem", position: 2, name: page.title, item: `https://punjabisamvad.com/${slug}` }] };
  const faqSchema = slug === "faq" ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.sections.map((section: any) => ({ "@type": "Question", name: section.title, acceptedAnswer: { "@type": "Answer", text: section.body } })) } : null;
  const structuredData = <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />{faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}</>;
  
  if (slug === "about") return <main>{structuredData}<SiteHeader /><AboutPage /><SiteFooter /></main>;
  if (slug === "our-story") return <main>{structuredData}<SiteHeader /><StoryPage /><SiteFooter /></main>;
  if (slug === "amit-bawa") return <main>{structuredData}<SiteHeader /><AmitBawaPage /><SiteFooter /></main>;
  if (slug === "our-work") return <main>{structuredData}<SiteHeader /><FocusAreasPage page={page} /><SiteFooter /></main>;
  if (slug === "programmes") return <main>{structuredData}<SiteHeader /><ProgrammesPage page={page} /><SiteFooter /></main>;
  if (slug === "impact") return <main>{structuredData}<SiteHeader /><ImpactPage page={page} /><SiteFooter /></main>;
  if (slug === "gallery") return <main>{structuredData}<SiteHeader /><GalleryPage page={page} /><SiteFooter /></main>;
  if (slug === "p2e" || slug === "kym") return <main>{structuredData}<SiteHeader /><LearningProgrammePage programme={slug === "p2e" ? "passport-to-earning" : "know-your-money"} /><SiteFooter /></main>;
  if (slug === "get-involved") return <main>{structuredData}<SiteHeader /><GetInvolvedPage /><SiteFooter /></main>;
  if (slug === "skills-livelihoods") return <main>{structuredData}<SiteHeader /><SkillsLivelihoodsPage /><SiteFooter /></main>;
  
  const featurePhoto = featurePhotos[slug];
  return (
    <main>
      {structuredData}
      <SiteHeader />
      <section className="page-hero"><div className="page-hero-image" /><div className="container page-hero-content"><span className="eyebrow light">{t(page.eyebrow)}</span><h1>{t(page.title)}</h1><p>{t(page.intro)}</p></div></section>
      {slug === "media-features" ? <MediaFeaturesPage /> : slug === "donate" ? <DonatePage /> : slug === "leadership" ? <PresidentPage /> : slug === "supporters" ? <SupportersPage /> : slug === "partners" ? <PartnersPage page={page} /> : <section className="page-body section"><div className="container">
        {slug !== "updates" && <div className="page-lead"><MessageCircle /><p>{t("Punjabi Samvad creates space for people to ask questions, share experience and participate in the issues that affect their lives.")}</p></div>}
        {featurePhoto && <div className="page-feature-photo"><img loading="lazy" decoding="async" src={featurePhoto.src} alt={featurePhoto.alt} /></div>}
        {slug === "updates" ? <FacebookUpdates /> : <div className="content-grid">{page.sections.map((section: any, index: number) => <article className="content-card" key={section.title}>
          <span className="content-number">{String(index+1).padStart(2,"0")}</span><h2>{t(section.title)}</h2>{section.stat && <strong className="content-stat">{t(section.stat)}</strong>}{section.body.split("\n").map((line: string) => <p key={line}>{t(line)}</p>)}
          {section.bullets && <ul>{section.bullets.map((item: string) => <li key={item}><Check />{t(item)}</li>)}</ul>}
        </article>)}</div>}
        {slug === "programmes" && <article className="hiv-resource">
          <div className="hiv-resource-copy"><span className="eyebrow">{t("Public-health resource")}</span><h2>{t("Private HIV self-risk assessment")}</h2><p>{t("The national self-risk assessment gives people a private way to understand potential HIV and STI risk, find reliable information and take the next step towards testing or treatment. Personal details do not need to be disclosed to Punjabi Samvad.")}</p><p>{t("Scan the code in the official campaign artwork, visit Breakfree India, or call the national AIDS helpline at 1097.")}</p><a className="button" href="https://www.breakfreeindia.org/" target="_blank" rel="noreferrer">{t("Open Breakfree India")} <ArrowRight size={17}/></a></div>
          <img loading="lazy" decoding="async" src="/images/real/hiv-self-risk-assessment.jpeg" alt="National HIV self-risk assessment campaign with QR code and AIDS helpline 1097" />
        </article>}
        {page.cta && <div className="page-cta"><div><span>{t("Ready to start a conversation?")}</span><h2>{t("Let's create meaningful change together.")}</h2></div><a className="button button-white" href={page.cta.href}>{t(page.cta.label)}<ArrowRight size={17}/></a></div>}
      </div></section>}
      <SiteFooter />
    </main>
  );
}
