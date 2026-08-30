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

const organisationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NGO",
      "@id": "https://punjabisamvad.com/#organisation",
      name: "Punjabi Samvad",
      alternateName: "Punjabi Samvad Foundation",
      url: "https://punjabisamvad.com/",
      logo: "https://punjabisamvad.com/images/punjabi-samvad-logo.jpeg",
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
  return (
    <main>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }} />

      <div id="top"><HeroSlider /></div>

      <section className="trust-strip" aria-label="Organisation highlights">
        <div className="container trust-grid">
          <div><BadgeCheck /><span><strong>20+ years</strong><small>of grassroots experience</small></span></div>
          <div><Users /><span><strong>Communities first</strong><small>dialogue-led programmes</small></span></div>
          <div><Building2 /><span><strong>National outlook</strong><small>roots in Punjab</small></span></div>
          <div><ShieldCheck /><span><strong>Registered & approved</strong><small>12AB · 80G · CSR</small></span></div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container about-grid">
          <div className="about-visual reveal-card">
            <div className="image-frame"><img loading="lazy" decoding="async" src="/images/generated/punjabi-ngo-field-team.webp" alt="Punjabi Samvad field representatives listening to a community member" /></div>
            <div className="year-card"><span>Since</span><strong>2004</strong><small>Creating change through conversation</small></div>
            <div className="dot-pattern" aria-hidden="true" />
          </div>
          <div className="section-copy">
            <span className="eyebrow">About Punjabi Samvad</span>
            <h2>Change begins when people are part of the conversation.</h2>
            <p className="lead">Punjabi Samvad began when Amit Bawa and Jyoti Bawa decided to act on the gender-based violence and discrimination they saw around them.</p>
            <p>That first step grew into more than two decades of work across education, women&apos;s empowerment, mental health, menstrual health, youth development, community health and culture.</p>
            <blockquote><MessageCircle size={25} /><p><strong>Samvad means dialogue.</strong><br />We listen, make reliable information accessible and work with communities—not simply for them.</p></blockquote>
            <a className="text-link" href="#journey">Read our story <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section id="work" className="section work-section">
        <div className="orb orb-one" aria-hidden="true" /><div className="orb orb-two" aria-hidden="true" />
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">What we work on</span>
            <h2>Practical programmes. Human conversations. Lasting confidence.</h2>
            <p>Our work connects knowledge, opportunity and creative advocacy across seven focus areas.</p>
          </div>
          <div className="focus-grid">
            {focusAreas.map(({ icon: Icon, title, text, tone }, index) => (
              <article className={`focus-card ${tone}`} key={title}>
                <span className="card-number">0{index + 1}</span>
                <div className="icon-wrap"><Icon size={26} /></div>
                <div className="focus-copy"><h3>{title}</h3><p>{text}</p></div>
                <a href="/our-work" aria-label={`Learn more about ${title}`}><ArrowRight size={18} /></a>
              </article>
            ))}
          </div>
          <div className="center-action"><a className="button button-outline" href="/programmes">Explore all programmes <ArrowRight size={17} /></a></div>
        </div>
      </section>

      <section id="impact" className="section impact-section">
        <div className="container impact-layout">
          <div className="impact-copy">
            <span className="eyebrow light">Our reach so far</span>
            <h2>Two decades of dialogue, learning and community action.</h2>
            <p>These figures reflect programmes delivered and people reached. We use participant feedback and available monitoring data to keep learning and improving.</p>
            <a className="button button-white" href="/impact">See our impact <ArrowRight size={17} /></a>
          </div>
          <div className="stats-grid">
            {stats.map(([value, label]) => <div className="stat" key={value + label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </div>
      </section>

      <section id="journey" className="section story-section">
        <div className="container story-grid">
          <div className="section-heading">
            <span className="eyebrow">Creative advocacy</span>
            <h2>Theatre, film and literature for public awareness.</h2>
            <p>Creative communication has been part of Punjabi Samvad from the beginning—making difficult subjects easier to discuss.</p>
          </div>
          <div className="story-cards">
          <article className="story-card story-blue"><Film /><span>1,100,000+ people reached</span><h3>Khooh Bolda Hai</h3><p>Theatre addressing female foeticide, discrimination and the dignity of girls.</p></article>
            <article className="story-card story-coral"><BookOpen /><span>Documentary storytelling</span><h3>Tirhayi Umar</h3><p>A creative examination of the impact of substance abuse on people and families.</p></article>
            <article className="story-card story-yellow"><Leaf /><span>Culture & heritage</span><h3>Art that brings people together</h3><p>Literature, digital art and cultural programmes that preserve heritage and inspire dialogue.</p></article>
          </div>
        </div>
      </section>

      <section id="partners" className="section partners-section">
        <div className="container">
          <div className="section-heading centered"><span className="eyebrow">Trusted collaborations</span><h2>Partnerships built around shared purpose.</h2><p>Long-term collaboration brings together community insight, specialist knowledge and the reach needed to make programmes stronger.</p></div>
          <div className="partner-grid">
            <div className="partner-aditya"><img loading="lazy" src="/images/partner-aditya.webp" alt="Aditya Birla Group" /><span>Aditya Birla Educational Trust</span><small>Mental & menstrual health</small></div>
            <div className="partner-punjab"><span className="partner-logo-tile"><img loading="lazy" src="/images/partner-government-punjab.svg" alt="Government of Punjab, India" /></span><span>Government of Punjab, India</span><small>Public health initiatives</small></div>
            <div><img loading="lazy" src="/images/partner-culture.svg" alt="Ministry of Culture, Government of India" /><span>Ministry of Culture</span><small>Culture & heritage</small></div>
            <div className="partner-iim"><img loading="lazy" src="/images/partner-iim-horizontal.png" alt="Indian Institute of Management Amritsar" /><span>IIM Amritsar</span><small>Internships & academia</small></div>
            <div className="partner-cms"><span className="partner-cms-logo"><img loading="lazy" src="/images/partner-cms.svg" alt="CMS Foundation" /></span><span>CMS Foundation</span><small>Community programmes</small></div>
            <div className="partner-techvimal"><img loading="lazy" src="/images/partner-techvimal.jpg" alt="Techvimal Foundation" /><span>Techvimal Foundation</span><small>Institutional collaboration</small></div>
            <div className="partner-mib"><img loading="lazy" src="/images/partner-information-broadcasting.svg" alt="Ministry of Information and Broadcasting, Government of India" /><span>Ministry of Information &amp; Broadcasting</span><small>Public communication</small></div>
            <div className="partner-punjab-health"><img loading="lazy" src="/images/partner-punjab-health.jpeg" alt="Department of Health and Family Welfare, Punjab" /><span>Department of Health &amp; Family Welfare, Punjab</span><small>Public health</small></div>
          </div>
          <div className="partnership-banner">
            <div><HeartHandshake size={38} /><span><small>CSR & institutional partnerships</small><strong>Let&apos;s build a programme with measurable social impact.</strong></span></div>
            <a className="button button-white" href="/discuss-partnership">Partner with us <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section id="support" className="section support-section">
        <div className="container support-grid">
          <div><span className="eyebrow">Support our work</span><h2>Help us reach more communities.</h2><p>Fund a specific programme or contribute where resources are needed most. Your support pays for education, health awareness and community outreach.</p></div>
          <div className="support-actions"><a className="button" href="/support">Support our work <ArrowRight size={17} /></a><a className="button button-outline" href="/fund-a-programme">Fund a programme</a></div>
        </div>
      </section>

      <section id="transparency" className="section compliance-section">
        <div className="container compliance-grid">
          <div><span className="eyebrow">Transparency & compliance</span><h2>Registered. Accountable. Ready to collaborate.</h2></div>
          <div className="compliance-list">
            <span><BadgeCheck /> NGO Darpan <strong>PB/2017/0156494</strong></span>
            <span><BadgeCheck /> CSR Registration <strong>CSR00032253</strong></span>
            <span><BadgeCheck /> 12AB Registered <strong>Approved</strong></span>
            <span><BadgeCheck /> 80G <strong>Approved</strong></span>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
