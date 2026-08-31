import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  GraduationCap,
  HeartHandshake,
  Mail,
  Megaphone,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const contributionAreas = [
  {
    icon: Users,
    title: "Community programmes",
    body: "Support awareness sessions, outreach activity and programme preparation under the guidance of the Punjabi Samvad team.",
  },
  {
    icon: ClipboardList,
    title: "Research and documentation",
    body: "Help organise programme notes, background research, participant feedback and records that strengthen future planning.",
  },
  {
    icon: BookOpen,
    title: "Literature and culture",
    body: "Contribute to reading, language, literary campaigns and cultural work that connects social awareness with creative expression.",
  },
  {
    icon: Megaphone,
    title: "Communication and awareness",
    body: "Assist with educational material, student engagement, digital awareness and responsible communication for public-interest work.",
  },
];

const universities = [
  { name: "UPES, Dehradun", logo: "/images/universities/upes.svg", className: "upes" },
  { name: "Guru Nanak Dev University", logo: "/images/universities/gndu.webp", className: "gndu" },
  { name: "Lovely Professional University", logo: "/images/universities/lpu.svg", className: "lpu" },
  { name: "Chandigarh University", logo: "/images/universities/chandigarh-university.webp", className: "cu" },
];

const benefits = [
  ["01", "Work on a real brief", "Take on a defined assignment connected to an active programme—not a made-up classroom exercise."],
  ["02", "See how fieldwork happens", "Learn how research, communication, events and community contact come together behind an NGO programme."],
  ["03", "Build useful evidence", "Finish with work you can discuss in applications and interviews, along with a clearer account of your contribution."],
  ["04", "Test your strengths", "Use what you already study while discovering where your writing, research, technology or people skills fit best."],
];

export default function GetInvolvedPage() {
  const { t } = useLanguage();
  return <div className="involved-page">
    <section className="involved-hero">
      <div className="container involved-hero-grid">
        <div className="involved-hero-copy">
          <span className="eyebrow">{t("Internships and volunteering")}</span>
          <h1>{t("Internships and volunteering with Punjabi Samvad.")}</h1>
          <p>{t("Take on a focused assignment, work with people outside your usual academic setting and turn what you know into something a community programme can use.")}</p>
          <div className="involved-actions">
            <a className="button" href="#apply">{t("Apply for an internship")} <ArrowRight size={17} /></a>
            <a className="involved-text-link" href="#volunteer">{t("Volunteer or share expertise")}</a>
          </div>
        </div>
        <div className="involved-hero-visual">
          <img src="/images/generated/info/volunteer-preparation.webp" alt="Students preparing educational and health-awareness material for community programmes" />
          <div className="involved-hero-note">
            <GraduationCap aria-hidden="true" />
            <span><strong>{t("Experience with a purpose")}</strong><small>{t("Defined work, practical exposure and a contribution you can explain")}</small></span>
          </div>
        </div>
      </div>
    </section>

    <section className="involved-universities" aria-label="Universities represented by Punjabi Samvad interns">
      <div className="container">
        <div className="involved-university-intro">
          <span className="eyebrow">{t("University network")}</span>
          <strong>{t("Students have joined us from")}</strong>
        </div>
        <div className="involved-university-logos">{universities.map((university) => <div className={`involved-university-logo ${university.className}`} key={university.name}>
          <img loading="lazy" decoding="async" src={university.logo} alt={`${university.name} logo`} />
          <span>{university.name}</span>
        </div>)}</div>
      </div>
    </section>

    <section className="section involved-intro">
      <div className="container involved-intro-grid">
        <div>
          <span className="eyebrow">{t("What you gain")}</span>
          <h2>{t("Experience you can use after the placement ends.")}</h2>
        </div>
        <div className="involved-intro-copy">
          <p>{t("An internship with Punjabi Samvad gives you a close look at the decisions behind public-interest work: how an issue is researched, how information is adapted for different audiences, how an activity is organised and how the work is documented afterwards.")}</p>
          <p>{t("Your assignment is shaped around current programme needs and the skills you bring. You may research, write, prepare campaign material, support an event, organise records or help with digital communication. The scope is agreed before you begin, so you know what you are responsible for and what you should learn from it.")}</p>
        </div>
      </div>
      <div className="container involved-benefits">
        {benefits.map(([number, title, body]) => <article key={number}>
          <span>{number}</span><h3>{t(title)}</h3><p>{t(body)}</p>
        </article>)}
      </div>
    </section>

    <section className="section involved-contribution">
      <div className="container">
        <div className="involved-section-heading">
          <span className="eyebrow">{t("Areas of contribution")}</span>
          <h2>{t("Work that connects study with practice.")}</h2>
          <p>{t("Assignments are matched to the student's background and the work Punjabi Samvad is undertaking at the time.")}</p>
        </div>
        <div className="involved-ledger">
          {contributionAreas.map(({ icon: Icon, title, body }) => <article key={title}>
            <span><Icon aria-hidden="true" /></span>
            <h3>{t(title)}</h3>
            <p>{t(body)}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section involved-evidence">
      <div className="container involved-evidence-grid">
        <div className="involved-evidence-heading">
          <span className="eyebrow">{t("Recent student work")}</span>
          <h2>{t("Featured two students who completed internships with us.")}</h2>
          <p>{t("Vinit and Pritish each completed a 60-hour Literature Promotion Internship. Their assignments show how one role can combine subject knowledge, communication and direct exposure to public-interest work.")}</p>
        </div>
        <div className="involved-student-list">
          <article>
            <div className="involved-student-title"><strong>Vinit Kumar</strong><span>{t("UPES, Dehradun · B.Tech CSE")}</span></div>
            <div className="involved-student-body">
              <p>{t("Vinit brought a computer-science perspective to a role centred on literature, language and reading culture. He supported literary campaigns and awareness programmes, worked with students and community members, and helped use literature as a starting point for discussion about education, culture and social concerns.")}</p>
              <p>{t("His placement also included digital-awareness training on the responsible use of AI and ChatGPT for education, research, communication and community outreach. It gave him room to connect an emerging technical field with the human judgement needed in public-facing work.")}</p>
              <ul><li>{t("60-hour placement")}</li><li>{t("Literary and awareness campaigns")}</li><li>{t("Responsible AI for outreach")}</li></ul>
            </div>
          </article>
          <article>
            <div className="involved-student-title"><strong>Pritish Anand</strong><span>{t("Chandigarh University")}</span></div>
            <div className="involved-student-body">
              <p>{t("Pritish worked across literary promotion, student engagement and community outreach. He assisted with campaigns that encouraged reading and language, supported awareness activity and took part in conversations that used literature to make educational and social subjects easier to discuss.")}</p>
              <p>{t("He also participated in digital-awareness training focused on appropriate use of AI and ChatGPT. The placement asked him to communicate with different groups, adapt to work outside a university setting and understand how cultural activity can support wider social-awareness goals.")}</p>
              <ul><li>{t("60-hour placement")}</li><li>{t("Student and community engagement")}</li><li>{t("Digital-awareness training")}</li></ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section className="section involved-apply" id="apply">
      <div className="container involved-apply-panel">
        <div className="involved-apply-copy">
          <span className="eyebrow light">{t("Apply for an internship")}</span>
          <h2>{t("Build experience that belongs on more than a résumé.")}</h2>
          <p>{t("Choose a problem you want to understand and bring a skill you want to test. If a suitable placement is available, you will receive a clear scope of work connected to a current programme. You can leave with a stronger grasp of NGO work, practical examples to discuss in interviews and a better sense of where your abilities can be useful.")}</p>
        </div>
        <div className="involved-application-details">
          <h3>{t("Help us find the right fit")}</h3>
          <ul>
            <li>{t("Your university, course and current year")}</li>
            <li>{t("Your preferred dates and available hours")}</li>
            <li>{t("The issues or programme areas you want to explore")}</li>
            <li>{t("The skills you can contribute and want to practise")}</li>
            <li>{t("Your CV and any university requirements")}</li>
          </ul>
          <a className="button button-white involved-email-button" href="mailto:punjabisamvadasr@gmail.com?subject=Internship%20Application%20to%20Punjabi%20Samvad&body=Name%3A%0AUniversity%20and%20course%3A%0ACurrent%20year%3A%0APreferred%20dates%3A%0AAreas%20of%20interest%3A%0A">{t("Email us")} <Mail size={17} /></a>
        </div>
      </div>
    </section>

    <section className="section involved-volunteer" id="volunteer">
      <div className="container involved-volunteer-grid">
        <HeartHandshake aria-hidden="true" />
        <div>
          <span className="eyebrow">{t("Volunteer with Punjabi Samvad")}</span>
          <h2>{t("Your time and skills can change someone's life.")}</h2>
          <p>{t("You may be able to support an event, a training session, research, health education, the arts, communication or programme planning. Tell us what you do well and how much time you can offer; we will respond when that experience matches a current need.")}</p>
        </div>
        <Link className="button button-outline" to="/contact">{t("Contact Punjabi Samvad")} <ArrowRight size={17} /></Link>
      </div>
    </section>
  </div>;
}
