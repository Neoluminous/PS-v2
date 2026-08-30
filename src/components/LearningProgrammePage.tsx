import { ArrowUpRight, Award, BookOpen, Clock3, Globe2, ShieldCheck, Smartphone, Users } from "lucide-react";

type ProgrammeKey = "passport-to-earning" | "know-your-money";

const programmes = {
  "passport-to-earning": {
    eyebrow: "Digital learning with UNICEF", title: "Passport to Earning",
    lead: "Free, practical learning for young people preparing for further study, work and a changing digital world.",
    intro: [
      "Passport to Earning is a global digital learning initiative led by UNICEF and powered by Microsoft Community Training. It gives young people access to free, job-relevant learning that can be completed online at a pace that fits around school, work and family responsibilities.",
      "The platform is designed for learners aged 15 to 24. Its courses focus on skills that can be used beyond the classroom, including digital productivity, financial literacy, employability and other capabilities that help young people prepare for opportunities in education and work.",
      "In India, courses are concise and designed to be completed in roughly ten hours. Content is available in local languages and presented in an accessible format, making it useful for first-time digital learners as well as young people who want to strengthen existing skills."
    ],
    detail: [
      "Passport to Earning courses help young people build skills they can carry into study, applications and early work. Learners can strengthen digital productivity, financial literacy and employability through short online modules, then use those skills in interviews, internships and further training.",
      "Eligible courses include a certificate on completion. For an Indian student preparing for a first job, that certificate records effort and adds evidence of learning to a CV or application. Punjabi Samvad connects young people with the platform so they can choose a course and begin building towards the career they want."
    ],
    detailTitle: "Skills and certificates for the career ahead.",
    facts: [["Free", "No course fee"], ["Certificate", "Recognition on completion"]],
    topics: ["Digital productivity", "Financial literacy", "Employability skills", "Flexible online learning"],
    images: ["/images/programmes/passport-to-earning/p2e-guided-learning.webp", "/images/real/p2e-schoolgirls-classroom.jpeg", "/images/programmes/passport-to-earning/p2e-standee.webp"],
    alts: ["A young Punjabi learner working on digital skills with a mentor", "Schoolgirls participating in a Passport to Earning learning session", "Passport to Earning India programme standee"],
    ctaTitle: "Choose a course and build your career skills.", ctaText: "Create an account on the official platform, explore the available courses and choose the learning path that suits you.",
    href: "https://skills.myp2e.org/", theme: "p2e"
  },
  "know-your-money": {
    eyebrow: "Financial literacy with HDFC Securities", title: "Know Your Money",
    lead: "A free financial-literacy programme that makes everyday money decisions easier to understand and safer to manage.",
    intro: [
      "Know Your Money is a financial-literacy initiative by HDFC Securities and Wagons Skill Foundation. It is built around a simple need: people should be able to understand the financial choices they make in daily life, from opening a bank account to protecting themselves from digital fraud.",
      "The programme is open to learners aged 16 to 55 and is available free of charge. It uses short, practical lessons that can be completed in about five hours, so participants can learn without committing to a long academic course.",
      "Ten modules take learners through the foundations of personal finance. Topics include banking, budgeting, saving, credit and debt, insurance, government schemes, digital transactions and fraud prevention. The emphasis is on decisions people encounter in their own homes, workplaces and communities."
    ],
    detail: [
      "Know Your Money is available in 13 Indian languages, allowing learners to build financial confidence in a language they understand. The online format can be accessed on a phone or computer, making it suitable for young adults, working people, homemakers and others who want a clearer grasp of money management.",
      "Punjabi Samvad is connecting people with this learning opportunity through its dedicated referral link. Registration leads to the programme platform, where learners can begin the modules and work through them at their own pace."
    ],
    detailTitle: "Money skills you can use every day.",
    facts: [["16–55", "Open to a wide age group"], ["5 hrs", "Approximately"], ["10", "Practical modules"], ["13", "Indian languages"]],
    topics: ["Budgeting and saving", "Banking and digital payments", "Credit, debt and insurance", "Fraud prevention"],
    images: ["/images/programmes/know-your-money/know-your-money-launch.webp", "/images/programmes/know-your-money/kym-budgeting-workshop.webp", "/images/programmes/know-your-money/kym-community-session.webp"],
    alts: ["Know Your Money financial literacy programme launch artwork", "Punjabi learners working through a household budgeting exercise", "A community financial-literacy session in Punjab"],
    ctaTitle: "Build confidence with everyday money.", ctaText: "Register through Punjabi Samvad’s referral link and begin the free Know Your Money learning programme.",
    href: "https://kym.wealthinfoline.com/referral?referral_code=PUN778", theme: "kym"
  }
} as const;

export default function LearningProgrammePage({ programme }: { programme: ProgrammeKey }) {
  const page = programmes[programme];
  return <div className={`learning-page learning-page-${page.theme}`}>
    <section className="learning-hero"><div className="container learning-hero-grid">
      <div className="learning-hero-copy"><span className="learning-kicker">{page.eyebrow}</span><h1>{page.title}</h1><p>{page.lead}</p><a className="learning-inline-link" href="#programme-details">Explore the programme <ArrowUpRight /></a></div>
      <figure className="learning-hero-visual"><img src={page.images[0]} alt={page.alts[0]} fetchPriority="high" /></figure>
    </div></section>
    <section className="learning-introduction" id="programme-details"><div className="container learning-intro-grid"><div className="learning-section-label"><BookOpen /><span>Why this programme matters</span></div><div className="learning-prose">{page.intro.map(p => <p key={p}>{p}</p>)}</div></div></section>
    <section className="learning-facts-wrap"><div className="container learning-facts">{page.facts.map(([value, label], i) => <div key={label}><span>{programme === "passport-to-earning" ? (i === 0 ? <ShieldCheck /> : <Award />) : i === 0 ? <Users /> : i === 1 ? <Clock3 /> : i === 2 ? <Globe2 /> : <Award />}</span><strong>{value}</strong><small>{label}</small></div>)}</div></section>
    {programme === "passport-to-earning" && <section className="learning-field-section"><div className="container">
      <div className="learning-field-media">
        <figure className="learning-field-video"><video controls playsInline preload="metadata" poster="/images/programmes/passport-to-earning/p2e-learner-testimonial-poster.webp"><source src="/videos/programmes/passport-to-earning/p2e-learner-testimonial.mp4" type="video/mp4" />Your browser does not support embedded video.</video></figure>
        <figure className="learning-field-photo learning-field-photo-phones"><img loading="lazy" decoding="async" src="/images/programmes/passport-to-earning/p2e-classroom-phones.webp" alt="Women at a Passport to Earning session holding up phones showing their learning screens" /></figure>
        <figure className="learning-field-photo learning-field-photo-college"><img loading="lazy" decoding="async" src="/images/programmes/passport-to-earning/p2e-dav-college-session.webp" alt="Digital productivity session at DAV College of Education for Women" /></figure>
      </div>
    </div></section>}
    <section className="learning-photo-story"><div className="container learning-photo-grid"><figure className="learning-photo-wide"><img loading="lazy" decoding="async" src={page.images[1]} alt={page.alts[1]} /></figure><div className="learning-topic-panel"><span>What learners cover</span><h2>Useful knowledge, built for real life.</h2><ul>{page.topics.map((topic, i) => <li key={topic}><i>{String(i + 1).padStart(2, "0")}</i><strong>{topic}</strong></li>)}</ul></div></div></section>
    <section className="learning-deeper"><div className="container learning-deeper-grid"><div className="learning-deeper-copy"><span><Smartphone /> Learn online</span><h2>{page.detailTitle}</h2>{page.detail.map(p => <p key={p}>{p}</p>)}</div><figure className="learning-official-visual"><img loading="lazy" decoding="async" src={page.images[2]} alt={page.alts[2]} /></figure></div></section>
    <section className="learning-cta-section"><div className="container"><div className="learning-cta"><ShieldCheck /><div><span>Official enrolment</span><h2>{page.ctaTitle}</h2><p>{page.ctaText}</p></div><a href={page.href} target="_blank" rel="noreferrer">Enroll now <ArrowUpRight /></a></div></div></section>
  </div>;
}
