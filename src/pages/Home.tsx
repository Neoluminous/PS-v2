import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Brain,
  Building2,
  Film,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import HeroSlider from "../components/HeroSlider";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { useLanguage } from "../context/LanguageContext";

const organisationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NGO",
      "@id": "https://punjabisamvad.com/#organisation",
      name: "Punjabi Samvad",
      alternateName: "Punjabi Samvad Foundation",
      url: "https://punjabisamvad.com/",
      logo: "https://punjabisamvad.com/images/punjabi-samvad-logo.webp",
      image: "https://punjabisamvad.com/og.png",
      foundingDate: "2004",
      description: "An Indian NGO working across women's empowerment, education, mental health, menstrual health, youth development, public health and creative advocacy.",
      email: "punjabisamvadasr@gmail.com",
      telephone: "+91-87280-33911",
      address: { "@type": "PostalAddress", streetAddress: "293, Green Avenue", addressLocality: "Amritsar", addressRegion: "Punjab", postalCode: "143001", addressCountry: "IN" },
      areaServed: { "@type": "Country", name: "India" },
      sameAs: ["https://www.facebook.com/PunjabiSamvad999/"]
    },
    {
      "@type": "WebSite",
      "@id": "https://punjabisamvad.com/#website",
      url: "https://punjabisamvad.com/",
      name: "Punjabi Samvad",
      alternateName: "Punjabi Samvad NGO",
      publisher: { "@id": "https://punjabisamvad.com/#organisation" },
      potentialAction: { "@type": "SearchAction", target: { "@type": "EntryPoint", urlTemplate: "https://punjabisamvad.com/search?q={search_term_string}" }, "query-input": "required name=search_term_string" }
    }
  ]
};

const focusAreas = [
  { icon: HandHeart, title: "Women & Girls", text: "Education, vocational skills and opportunities that build confidence and independence.", tone: "coral" },
  { icon: GraduationCap, title: "Education & Youth", text: "Learning support, mentoring, internships and meaningful youth engagement.", tone: "sky" },
  { icon: Brain, title: "Mental Health", text: "Open conversations that help reduce stigma around emotional well-being.", tone: "violet" },
  { icon: Sparkles, title: "Menstrual Health", text: "Practical, reliable education for girls, schools and communities.", tone: "rose" },
  { icon: ShieldCheck, title: "Substance-Abuse Awareness", text: "Prevention-led lectures, outreach and creative communication.", tone: "amber" },
  { icon: Stethoscope, title: "Community Health", text: "Awareness around HIV/AIDS, preventive health and family well-being.", tone: "mint" },
];

const stats = [
  ["100,000+", "People reached through mental-health programmes"],
  ["15,000+", "People reached through menstrual-health programmes"],
  ["52,000+", "People reached through anti-drug awareness"],
  ["1,100,000+", "People reached through Khooh Bolda Hai"],
];

export default function Home() {
  const { t } = useLanguage();
  return (
    <main>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }} />

      <div id="top"><HeroSlider /></div>

      <section className="trust-strip" aria-label="Organisation highlights">
        <div className="container trust-grid">
          <div><BadgeCheck /><span><strong>{t("20+ years")}</strong><small>{t("of grassroots experience")}</small></span></div>
          <div><Users /><span><strong>{t("Communities first")}</strong><small>{t("dialogue-led programmes")}</small></span></div>
          <div><Building2 /><span><strong>{t("National outlook")}</strong><small>{t("roots in Punjab")}</small></span></div>
          <div><ShieldCheck /><span><strong>{t("Registered & approved")}</strong><small>{t("12AB · 80G · CSR")}</small></span></div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container about-grid">
          <div className="about-visual reveal-card">
            <div className="image-frame"><img loading="lazy" decoding="async" src="/images/generated/punjabi-ngo-field-team.webp" alt="Punjabi Samvad field representatives listening to a community member" /></div>
            <div className="year-card"><span>{t("Since")}</span><strong>2004</strong><small>{t("Creating change through conversation")}</small></div>
            <div className="dot-pattern" aria-hidden="true" />
          </div>
          <div className="section-copy">
            <span className="eyebrow">{t("About Punjabi Samvad")}</span>
            <h2>{t("Change begins when people are part of the conversation.")}</h2>
            <p className="lead">{t("Punjabi Samvad began when Amit Bawa and Jyoti Bawa decided to act on the gender-based violence and discrimination they saw around them.")}</p>
            <p>{t("That first step grew into more than two decades of work across education, women's empowerment, mental health, menstrual health, youth development, community health and culture.")}</p>
            <blockquote><MessageCircle size={25} /><p><strong>{t("Samvad means dialogue.")}</strong><br />{t("We listen, make reliable information accessible and work with communities—not simply for them.")}</p></blockquote>
            <a className="text-link" href="#journey">{t("Read our story")} <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section id="work" className="section work-section">
        <div className="orb orb-one" aria-hidden="true" /><div className="orb orb-two" aria-hidden="true" />
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">{t("What we work on")}</span>
            <h2>{t("Practical programmes. Human conversations. Lasting confidence.")}</h2>
            <p>{t("Our work connects knowledge, opportunity and creative advocacy across seven focus areas.")}</p>
          </div>
          <div className="focus-grid">
            {focusAreas.map(({ icon: Icon, title, text, tone }, index) => (
              <article className={`focus-card ${tone}`} key={title}>
                <span className="card-number">0{index + 1}</span>
                <div className="icon-wrap"><Icon size={26} /></div>
                <div className="focus-copy"><h3>{t(title)}</h3><p>{t(text)}</p></div>
                <a href="/our-work" aria-label={`Learn more about ${title}`}><ArrowRight size={18} /></a>
              </article>
            ))}
          </div>
          <div className="center-action"><a className="button button-outline" href="/programmes">{t("Explore all programmes")} <ArrowRight size={17} /></a></div>
        </div>
      </section>

      <section id="impact" className="section impact-section">
        <div className="container impact-layout">
          <div className="impact-copy">
            <span className="eyebrow light">{t("Our reach so far")}</span>
            <h2>{t("Two decades of dialogue, learning and community action.")}</h2>
            <p>{t("These figures reflect programmes delivered and people reached. We use participant feedback and available monitoring data to keep learning and improving.")}</p>
            <a className="button button-white" href="/impact">{t("See our impact")} <ArrowRight size={17} /></a>
          </div>
          <div className="stats-grid">
            {stats.map(([value, label]) => <div className="stat" key={value + label}><strong>{value}</strong><span>{t(label)}</span></div>)}
          </div>
        </div>
      </section>

      <section id="journey" className="section story-section">
        <div className="container story-grid">
          <div className="section-heading">
            <span className="eyebrow">{t("Creative advocacy")}</span>
            <h2>{t("Theatre, film and literature for public awareness.")}</h2>
            <p>{t("Creative communication has been part of Punjabi Samvad from the beginning—making difficult subjects easier to discuss.")}</p>
          </div>
          <div className="story-cards">
          <article className="story-card story-blue"><Film /><span>{t("1,100,000+ people reached")}</span><h3>{t("Khooh Bolda Hai")}</h3><p>{t("Theatre addressing female foeticide, discrimination and the dignity of girls.")}</p></article>
            <article className="story-card story-coral"><BookOpen /><span>{t("Documentary storytelling")}</span><h3>{t("Tirhayi Umar")}</h3><p>{t("A creative examination of the impact of substance abuse on people and families.")}</p></article>
            <article className="story-card story-yellow"><Leaf /><span>{t("Culture & heritage")}</span><h3>{t("Art that brings people together")}</h3><p>{t("Literature, digital art and cultural programmes that preserve heritage and inspire dialogue.")}</p></article>
          </div>
        </div>
      </section>

      <section id="partners" className="section partners-section">
        <div className="container">
          <div className="section-heading centered"><span className="eyebrow">{t("Trusted collaborations")}</span><h2>{t("Partnerships built around shared purpose.")}</h2><p>{t("Long-term collaboration brings together community insight, specialist knowledge and the reach needed to make programmes stronger.")}</p></div>
          <div className="partner-grid">
            <div className="partner-aditya"><img loading="lazy" src="/images/partner-aditya.webp" alt="Aditya Birla Group" /><span>{t("Aditya Birla Educational Trust")}</span><small>{t("Mental & menstrual health")}</small></div>
            <div className="partner-punjab"><span className="partner-logo-tile"><img loading="lazy" src="/images/partner-government-punjab.svg" alt="Government of Punjab, India" /></span><span>{t("Government of Punjab, India")}</span><small>{t("Public health initiatives")}</small></div>
            <div><img loading="lazy" src="/images/partner-culture.svg" alt="Ministry of Culture, Government of India" /><span>{t("Ministry of Culture")}</span><small>{t("Culture & heritage")}</small></div>
            <div className="partner-iim"><img loading="lazy" src="/images/partner-iim-horizontal.webp" alt="Indian Institute of Management Amritsar" /><span>{t("IIM Amritsar")}</span><small>{t("Internships & academia")}</small></div>
            <div className="partner-cms"><span className="partner-cms-logo"><img loading="lazy" src="/images/partner-cms.svg" alt="CMS Foundation" /></span><span>{t("CMS Foundation")}</span><small>{t("Community programmes")}</small></div>
            <div className="partner-techvimal"><img loading="lazy" src="/images/partner-techvimal.webp" alt="Techvimal Foundation" /><span>{t("Techvimal Foundation")}</span><small>{t("Institutional collaboration")}</small></div>
            <div className="partner-mib"><img loading="lazy" src="/images/partner-information-broadcasting.svg" alt="Ministry of Information and Broadcasting, Government of India" /><span>{t("Ministry of Information & Broadcasting")}</span><small>{t("Public communication")}</small></div>
            <div className="partner-punjab-health"><img loading="lazy" src="/images/partner-punjab-health.webp" alt="Department of Health and Family Welfare, Punjab" /><span>{t("Department of Health & Family Welfare, Punjab")}</span><small>{t("Public health")}</small></div>
          </div>
          <div className="partnership-banner">
            <div><HeartHandshake size={38} /><span><small>{t("CSR & institutional partnerships")}</small><strong>{t("Let's build a programme with measurable social impact.")}</strong></span></div>
            <a className="button button-white" href="/discuss-partnership">{t("Partner with us")} <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section id="support" className="section support-section">
        <div className="container support-grid">
          <div><span className="eyebrow">{t("Support our work")}</span><h2>{t("Help us reach more communities.")}</h2><p>{t("Fund a specific programme or contribute where resources are needed most. Your support pays for education, health awareness and community outreach.")}</p></div>
          <div className="support-actions"><a className="button" href="/support">{t("Support our work")} <ArrowRight size={17} /></a><a className="button button-outline" href="/fund-a-programme">{t("Fund a programme")}</a></div>
        </div>
      </section>

      <section id="transparency" className="section compliance-section">
        <div className="container compliance-grid">
          <div><span className="eyebrow">{t("Transparency & compliance")}</span><h2>{t("Registered. Accountable. Ready to collaborate.")}</h2></div>
          <div className="compliance-list">
            <span><BadgeCheck /> NGO Darpan <strong>PB/2017/0156494</strong></span>
            <span><BadgeCheck /> CSR Registration <strong>CSR00032253</strong></span>
            <span><BadgeCheck /> {t("12AB Registered ")}<strong>{t("Approved")}</strong></span>
            <span><BadgeCheck /> {t("80G ")}<strong>{t("Approved")}</strong></span>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
