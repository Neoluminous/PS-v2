import {
  ArrowRight,
  BookOpen,
  Brain,
  Check,
  GraduationCap,
  HeartHandshake,
  Megaphone,
  Ribbon,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { SitePage } from "../content/pages";

const focusIcons = [HeartHandshake, GraduationCap, Brain, Sparkles, ShieldCheck, Stethoscope, BookOpen];

const focusImages: Record<number, { src: string; alt: string }> = {
  0: { src: "/images/generated/work-focus-women.webp", alt: "Women taking part in a Punjabi Samvad education programme" },
  1: { src: "/images/generated/work-focus-youth.webp", alt: "Young people learning together in a community setting" },
  4: { src: "/images/generated/work-focus-dialogue.webp", alt: "A community conversation about health and well-being" },
};

const programmeImages: Record<number, { src: string; alt: string }> = {
  0: { src: "/images/programmes/mpower-mental-health.webp", alt: "A mental-health conversation with Punjabi community members" },
  1: { src: "/images/programmes/ujaas-menstrual-health.webp", alt: "A menstrual-health educator speaking with Punjabi students" },
  2: { src: "/images/real/drug-awareness-classroom.jpg", alt: "Students attending a substance-abuse awareness session" },
  3: { src: "/images/generated/programme-khooh.webp", alt: "A Khooh Bolda Hai theatre performance" },
  4: { src: "/images/programmes/vocational-skills/workshop-session.webp", alt: "Rural women attending a Punjabi Samvad vocational skills workshop" },
  5: { src: "/images/programmes/hiv-awareness-community.webp", alt: "Punjabi health educators leading a respectful HIV awareness session" },
};

function Paragraphs({ body }: { body: string }) {
  return <>{body.split("\n").filter(Boolean).map(line => <p key={line}>{line}</p>)}</>;
}

function BulletList({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return <ul className="work-bullets">{items.map(item => <li key={item}><Check aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}

function WorkHero({ page, image, imageAlt, variant }: { page: SitePage; image: string; imageAlt: string; variant: string }) {
  return <section className={`work-hero work-hero-${variant}`}>
    <div className="work-hero-texture" aria-hidden="true" />
    <div className="container work-hero-grid">
      <div className="work-hero-copy">
        <span className="eyebrow light">{page.eyebrow}</span>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
      </div>
      <figure className="work-hero-media">
        <img src={image} alt={imageAlt} />
      </figure>
    </div>
  </section>;
}

export function FocusAreasPage({ page }: { page: SitePage }) {
  return <>
    <WorkHero page={page} variant="focus" image="/images/generated/work-focus-hero.webp" imageAlt="Punjabi community members taking part in a facilitated conversation" />
    <section className="work-editorial work-focus-page">
      <div className="container">
        <div className="work-intro-statement">
          <Megaphone aria-hidden="true" />
          <p>We listen first, then shape each programme around the people, setting and practical needs involved.</p>
        </div>
        <div className="focus-mosaic">
          {page.sections.map((section, index) => {
            const Icon = focusIcons[index] ?? Users;
            const media = index === 0 ? undefined : focusImages[index];
            return <article className={`focus-story focus-story-${index + 1} ${media ? "focus-story-photo" : ""}`} key={section.title}>
              {media && <img loading="lazy" decoding="async" src={media.src} alt={media.alt} />}
              <div className="focus-story-copy">
                <Icon aria-hidden="true" />
                <h2>{section.title}</h2>
                {section.stat && <strong className="work-stat-line">{section.stat}</strong>}
                <Paragraphs body={section.body} />
                <BulletList items={section.bullets} />
              </div>
            </article>;
          })}
        </div>
        {page.cta && <a className="work-next-link" href={page.cta.href}><span>See how the work is delivered</span><strong>{page.cta.label}</strong><ArrowRight aria-hidden="true" /></a>}
      </div>
    </section>
  </>;
}

export function ProgrammesPage({ page }: { page: SitePage }) {
  return <>
    <WorkHero page={page} variant="programmes" image="/images/programmes-health.jpg" imageAlt="A facilitator leading a community health workshop" />
    <section className="work-editorial programmes-page-redesign">
      <div className="container">
        <div className="programme-method">
          <div><Users aria-hidden="true" /><strong>Listen</strong><span>Understand the audience and setting.</span></div>
          <div><Brain aria-hidden="true" /><strong>Design</strong><span>Choose the right expertise and format.</span></div>
          <div><Megaphone aria-hidden="true" /><strong>Deliver</strong><span>Create room for questions and participation.</span></div>
          <div><ShieldCheck aria-hidden="true" /><strong>Learn</strong><span>Use feedback to strengthen future work.</span></div>
        </div>
        <div className="programme-stories">
          {page.sections.map((section, index) => {
            const media = programmeImages[index];
            return <article className={`programme-story ${media ? "programme-story-has-photo" : ""}`} key={section.title}>
              <div className="programme-story-copy">
                <h2>{section.title}</h2>
                {section.stat && <strong className="programme-stat">{section.stat}</strong>}
                <Paragraphs body={section.body} />
                <BulletList items={section.bullets} />
              </div>
              {media ? <figure><img loading="lazy" decoding="async" src={media.src} alt={media.alt} /></figure> : <div className="programme-graphic" aria-hidden="true"><span>{index % 2 === 0 ? <Ribbon /> : <HeartHandshake />}</span></div>}
            </article>;
          })}
        </div>
        <section className="vocational-photo-story" aria-label="Vocational skills programme photographs">
          <header>
            <span className="eyebrow">From recent workshops</span>
            <h2>Learning by making.</h2>
            <p>Soap making, traditional masala preparation and Phulkari were taught through practical sessions for rural girls and women.</p>
          </header>
          <div className="vocational-photo-grid">
            <figure className="vocational-photo-wide"><img loading="lazy" decoding="async" src="/images/programmes/vocational-skills/rural-women-products.webp" alt="Rural women holding products after a Punjabi Samvad skills workshop" /></figure>
            <figure><img loading="lazy" decoding="async" src="/images/programmes/vocational-skills/handmade-soaps.webp" alt="Handmade soaps prepared during the vocational workshop" /></figure>
            <figure><img loading="lazy" decoding="async" src="/images/programmes/vocational-skills/product-display.webp" alt="Participants displaying finished soaps and workshop products" /></figure>
            <figure className="vocational-photo-tall"><img loading="lazy" decoding="async" src="/images/programmes/vocational-skills/phulkari-embroidery.webp" alt="A participant working on Phulkari embroidery" /></figure>
          </div>
          <Link className="text-link vocational-story-link" to="/skills-livelihoods">Read the participant stories <ArrowRight size={16} /></Link>
        </section>
        <div className="learning-programme-links">
          <a href="/p2e"><img loading="lazy" decoding="async" src="/images/programmes/passport-to-earning/p2e-guided-learning.webp" alt="" /><span><small>Digital learning with UNICEF</small><strong>Passport to Earning</strong><em>Free, job-relevant learning for young people.</em></span><ArrowRight /></a>
          <a href="/kym"><img loading="lazy" decoding="async" src="/images/programmes/know-your-money/kym-budgeting-workshop.webp" alt="" /><span><small>Financial literacy with HDFC Securities</small><strong>Know Your Money</strong><em>Practical learning for everyday money decisions.</em></span><ArrowRight /></a>
        </div>
        <article className="hiv-resource-redesign">
          <div className="hiv-resource-copy">
            <h2>Private HIV self-risk assessment</h2>
            <p>The national self-risk assessment offers a private route to reliable HIV and STI information, testing guidance and treatment support.</p>
            <p>Use the QR code in the official campaign artwork, visit Breakfree India or call the national AIDS helpline at 1097.</p>
            <a className="button" href="https://www.breakfreeindia.org/" target="_blank" rel="noreferrer">Open Breakfree India <ArrowRight size={17} /></a>
          </div>
          <img loading="lazy" decoding="async" src="/images/real/hiv-self-risk-assessment.jpeg" alt="National HIV self-risk assessment campaign with QR code and AIDS helpline 1097" />
        </article>
        {page.cta && <a className="work-next-link" href={page.cta.href}><span>Bring a programme to your community or institution</span><strong>{page.cta.label}</strong><ArrowRight aria-hidden="true" /></a>}
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
  return <>
    <WorkHero page={page} variant="impact" image="/images/impact-feedback.jpg" imageAlt="A programme team reviewing participation and community feedback" />
    <section className="work-editorial impact-page-redesign">
      <div className="container">
        <div className="impact-figures">
          {impactFigures.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
        <div className="impact-opening">
          <figure><img loading="lazy" decoding="async" src="/images/generated/impact-community-event.webp" alt="Punjabi Samvad community health programme with participants and medical staff" /></figure>
          <div>
            <h2>{page.sections[0].title}</h2>
            <Paragraphs body={page.sections[0].body} />
            <BulletList items={page.sections[0].bullets} />
          </div>
        </div>
        <div className="impact-measurement">
          <header><h2>{page.sections[1].title}</h2><Paragraphs body={page.sections[1].body} /></header>
          <div className="impact-measurement-grid">
            {page.sections[1].bullets?.map((item, index) => <div key={item}><span>{index === 0 ? <Users /> : index === 1 ? <Megaphone /> : index === 2 ? <HeartHandshake /> : index === 3 ? <Brain /> : <ShieldCheck />}</span><strong>{item}</strong></div>)}
          </div>
        </div>
        <div className="impact-learning-grid">
          {page.sections.slice(2).map((section, index) => <article className={index === 2 ? "impact-learning-wide" : ""} key={section.title}>
            {index === 0 ? <Users aria-hidden="true" /> : index === 1 ? <HeartHandshake aria-hidden="true" /> : <Stethoscope aria-hidden="true" />}
            <h2>{section.title}</h2>
            <Paragraphs body={section.body} />
            <BulletList items={section.bullets} />
          </article>)}
        </div>
        {page.cta && <a className="work-next-link" href={page.cta.href}><span>Explore the programmes behind the figures</span><strong>{page.cta.label}</strong><ArrowRight aria-hidden="true" /></a>}
      </div>
    </section>
  </>;
}
