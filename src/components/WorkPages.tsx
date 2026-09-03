import { ArrowRight, Brain, HeartHandshake, Megaphone, Ribbon, ShieldCheck, Stethoscope, Users, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { SitePage } from "../content/pages";
import { useLanguage } from "../context/LanguageContext";

function Paragraphs({ body }: { body: string }) {
  const { t } = useLanguage();
  return <>{body.split("\n").map(line => <p key={line}>{t(line)}</p>)}</>;
}

function BulletList({ items }: { items?: string[] }) {
  const { t } = useLanguage();
  if (!items) return null;
  return <ul>{items.map(item => <li key={item}><Check size={16} /> {t(item)}</li>)}</ul>;
}

function WorkHero({ page, variant, image, imageAlt }: { page: SitePage, variant: string, image: string, imageAlt: string }) {
  const { t } = useLanguage();
  return <section className={`work-hero work-hero-${variant}`}>
    <div className="container work-hero-grid">
      <div className="work-hero-copy">
        <span className="eyebrow">{t(page.eyebrow!)}</span>
        <h1>{t(page.title)}</h1>
        <p>{t(page.intro!)}</p>
      </div>
      <figure className="work-hero-media">
        <img src={image} alt={t(imageAlt)} fetchPriority="high" />
      </figure>
    </div>
  </section>;
}

const focusIcons = [HeartHandshake, Brain, Ribbon, Megaphone, Stethoscope];
const focusImages = [
  undefined,
  { src: "/images/focus-mental.webp", alt: "A health professional speaking to a group about mental well-being" },
  undefined,
  { src: "/images/focus-substance.webp", alt: "Community members participating in a public awareness session" },
  undefined,
];

export function FocusAreasPage({ page }: { page: SitePage }) {
  const { t } = useLanguage();
  return <>
    <WorkHero page={page} variant="focus" image="/images/focus-community.webp" imageAlt="People talking during a community session" />
    <section className="work-editorial focus-page-redesign">
      <div className="container">
        <div className="focus-story-grid">
          {page.sections.map((section, index) => {
            const Icon = focusIcons[index] || Users;
            const media = index === 0 ? undefined : focusImages[index];
            return <article className={`focus-story focus-story-${index + 1} ${media ? "focus-story-photo" : ""}`} key={section.title}>
              {media && <img loading="lazy" decoding="async" src={media.src} alt={t(media.alt)} />}
              <div className="focus-story-copy">
                <Icon aria-hidden="true" />
                <h2>{t(section.title)}</h2>
                {section.stat && <strong className="work-stat-line">{t(section.stat)}</strong>}
                <Paragraphs body={section.body} />
                <BulletList items={section.bullets} />
              </div>
            </article>;
          })}
        </div>
        {page.cta && <a className="work-next-link" href={page.cta.href}><span>{t("See how the work is delivered")}</span><strong>{t(page.cta.label)}</strong><ArrowRight aria-hidden="true" /></a>}
      </div>
    </section>
  </>;
}

const programmeImages = [
  { src: "/images/real/khooh-stage-03.webp", alt: "A scene from the play Khooh Bolda Hai addressing gender issues" },
  undefined,
  { src: "/images/real/cms-health-camp.webp", alt: "A healthcare worker administering a vaccine to an elderly patient" },
  undefined,
];

export function ProgrammesPage({ page }: { page: SitePage }) {
  const { t } = useLanguage();
  return <>
    <WorkHero page={page} variant="programmes" image="/images/programmes-health.webp" imageAlt="A facilitator leading a community health workshop" />
    <section className="work-editorial programmes-page-redesign">
      <div className="container">
        <div className="programme-method">
          <div><Users aria-hidden="true" /><strong>{t("Listen")}</strong><span>{t("Understand the audience and setting.")}</span></div>
          <div><Brain aria-hidden="true" /><strong>{t("Design")}</strong><span>{t("Choose the right expertise and format.")}</span></div>
          <div><Megaphone aria-hidden="true" /><strong>{t("Deliver")}</strong><span>{t("Create room for questions and participation.")}</span></div>
          <div><ShieldCheck aria-hidden="true" /><strong>{t("Learn")}</strong><span>{t("Use feedback to strengthen future work.")}</span></div>
        </div>
        <div className="programme-stories">
          {page.sections.map((section, index) => {
            const media = programmeImages[index];
            return <article className={`programme-story ${media ? "programme-story-has-photo" : ""}`} key={section.title}>
              <div className="programme-story-copy">
                <h2>{t(section.title)}</h2>
                {section.stat && <strong className="programme-stat">{t(section.stat)}</strong>}
                <Paragraphs body={section.body} />
                <BulletList items={section.bullets} />
              </div>
              {media ? <figure><img loading="lazy" decoding="async" src={media.src} alt={t(media.alt)} /></figure> : <div className="programme-graphic" aria-hidden="true"><span>{index % 2 === 0 ? <Ribbon /> : <HeartHandshake />}</span></div>}
            </article>;
          })}
        </div>

        <section className="vocational-photo-story" aria-label="Vocational skills programme photographs">
          <header>
            <span className="eyebrow">{t("From recent workshops")}</span>
            <h2>{t("Learning by making.")}</h2>
            <p>{t("Soap making, traditional masala preparation and Phulkari were taught through practical sessions for rural girls and women.")}</p>
          </header>
          <div className="vocational-photo-grid">
            <figure className="vocational-photo-wide"><img loading="lazy" decoding="async" src="/images/programmes/vocational-skills/rural-women-products.webp" alt="Rural women holding products after a Punjabi Samvad skills workshop" /></figure>
            <figure><img loading="lazy" decoding="async" src="/images/programmes/vocational-skills/handmade-soaps.webp" alt="Handmade soaps prepared during the vocational workshop" /></figure>
            <figure><img loading="lazy" decoding="async" src="/images/programmes/vocational-skills/product-display.webp" alt="Participants displaying finished soaps and workshop products" /></figure>
            <figure className="vocational-photo-tall"><img loading="lazy" decoding="async" src="/images/programmes/vocational-skills/phulkari-embroidery.webp" alt="A participant working on Phulkari embroidery" /></figure>
          </div>
          <Link className="text-link vocational-story-link" to="/skills-livelihoods">{t("Read the participant stories")} <ArrowRight size={16} /></Link>
        </section>

        <div className="learning-programme-links">
          <a href="/p2e"><img loading="lazy" decoding="async" src="/images/programmes/passport-to-earning/p2e-guided-learning.webp" alt="" /><span><small>{t("Digital learning with UNICEF")}</small><strong>{t("Passport to Earning")}</strong><em>{t("Free, job-relevant learning for young people.")}</em></span><ArrowRight /></a>
          <a href="/kym"><img loading="lazy" decoding="async" src="/images/programmes/know-your-money/kym-budgeting-workshop.webp" alt="" /><span><small>{t("Financial literacy with HDFC Securities")}</small><strong>{t("Know Your Money")}</strong><em>{t("Practical learning for everyday money decisions.")}</em></span><ArrowRight /></a>
        </div>

        <article className="hiv-resource-redesign">
          <div className="hiv-resource-copy">
            <h2>{t("Private HIV self-risk assessment")}</h2>
            <p>{t("The national self-risk assessment offers a private route to reliable HIV and STI information, testing guidance and treatment support.")}</p>
            <p>{t("Use the QR code in the official campaign artwork, visit Breakfree India or call the national AIDS helpline at 1097.")}</p>
            <a className="button" href="https://www.breakfreeindia.org/" target="_blank" rel="noreferrer">{t("Open Breakfree India")} <ArrowRight size={17} /></a>
          </div>
          <img loading="lazy" decoding="async" src="/images/real/hiv-self-risk-assessment.webp" alt="National HIV self-risk assessment campaign with QR code and AIDS helpline 1097" />
        </article>

        {page.cta && <a className="work-next-link" href={page.cta.href}><span>{t("Bring a programme to your community or institution")}</span><strong>{t(page.cta.label)}</strong><ArrowRight aria-hidden="true" /></a>}
      </div>
    </section>
  </>;
}

const impactFigures = [
  ["100,000+", "Mental-health programme reach"],
  ["15,000+", "Menstrual-health programme reach"],
  ["52,000+", "Substance-abuse awareness reach"],
  ["100+", "HIV/AIDS awareness programmes"],
];

export function ImpactPage({ page }: { page: SitePage }) {
  const { t } = useLanguage();
  return <>
    <WorkHero page={page} variant="impact" image="/images/impact-feedback.webp" imageAlt="A programme team reviewing participation and community feedback" />
    <section className="work-editorial impact-page-redesign">
      <div className="container">
        <div className="impact-figures">
          {impactFigures.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{t(label)}</span></div>)}
        </div>
        <div className="impact-opening">
          <figure><img loading="lazy" decoding="async" src="/images/generated/impact-community-event.webp" alt="Punjabi Samvad community health programme with participants and medical staff" /></figure>
          <div>
            <h2>{t(page.sections[0].title)}</h2>
            <Paragraphs body={page.sections[0].body} />
            <BulletList items={page.sections[0].bullets} />
          </div>
        </div>
        <div className="impact-measurement">
          <header><h2>{t(page.sections[1].title)}</h2><Paragraphs body={page.sections[1].body} /></header>
          <div className="impact-measurement-grid">
            {page.sections[1].bullets?.map((item, index) => <div key={item}><span>{index === 0 ? <Users /> : index === 1 ? <Megaphone /> : index === 2 ? <HeartHandshake /> : index === 3 ? <Brain /> : <ShieldCheck />}</span><strong>{t(item)}</strong></div>)}
          </div>
        </div>
        <div className="impact-learning-grid">
          {page.sections.slice(2).map((section, index) => <article className={index === 2 ? "impact-learning-wide" : ""} key={section.title}>
            {index === 0 ? <Users aria-hidden="true" /> : index === 1 ? <HeartHandshake aria-hidden="true" /> : <Stethoscope aria-hidden="true" />}
            <h2>{t(section.title)}</h2>
            <Paragraphs body={section.body} />
            <BulletList items={section.bullets} />
          </article>)}
        </div>
        {page.cta && <a className="work-next-link" href={page.cta.href}><span>{t("Explore the programmes behind the figures")}</span><strong>{t(page.cta.label)}</strong><ArrowRight aria-hidden="true" /></a>}
      </div>
    </section>
  </>;
}
