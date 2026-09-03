import { ArrowRight, PackageOpen, Pipette, Salad, Scissors } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const skills = [
  { icon: Pipette, title: "Soap making", text: "Participants produce small-batch soap using safe, accessible ingredients." },
  { icon: Salad, title: "Traditional masala", text: "Women learn to prepare everyday spice blends for local sale." },
  { icon: PackageOpen, title: "Compost and organic manure", text: "Demonstrations show participants how to produce compost for nurseries or home gardens." },
  { icon: Scissors, title: "Phulkari work", text: "Girls practise traditional embroidery to create distinct, saleable designs." },
];

const stories = [
  {
    name: "Sunita Rani",
    outcome: "Small-scale masala production",
    image: "/images/skills-livelihoods/spice-quality-session.webp",
    alt: "A participant examining ingredients during traditional masala preparation",
    text: "Sunita began selling masalas from home after the workshop. Her husband, who struggled with addiction, has started helping her distribute the products. Taking part in the programme and contributing to the household has improved Sunita's physical and mental well-being.",
    quote: "With my own hands, I can now support my family. Every small bit I earn brings a big sense of peace.",
  },
  {
    name: "Jasveer Kaur",
    outcome: "Independent masala production",
    image: "/images/skills-livelihoods/spice-quality-session-upright.webp",
    alt: "Women processing spices during a skills workshop",
    text: "Following the skills sessions, Jasveer set up independent masala preparation at home. The work provides a steady, manageable source of income without taking her away from family responsibilities.",
    quote: "I can work on this at my own time and still take care of my house. I don’t have to depend on anyone else anymore.",
  },
  {
    name: "Ajay",
    outcome: "Selling organic compost",
    image: "/images/skills-livelihoods/restored/anita-livelihood.webp",
    alt: "A participant learning compost preparation outdoors",
    privacy: "We have changed Ajay’s name to protect his privacy during recovery.",
    text: "Ajay is a young man working to recover from substance dependence. He learned to prepare compost, approached local nurseries and began offering it to households nearby. He now has a routine, a source of income and a practical reason to keep moving forward.",
    quote: "If I cannot even eat the food made by my mother, how can I continue with addiction?",
  },
  {
    name: "Kamrajeet",
    outcome: "Traditional masala preparation",
    image: "/images/skills-livelihoods/restored/kamrajeet-workshop.webp",
    alt: "Women taking part in a traditional masala preparation workshop",
    text: "Kamrajeet learned traditional masala preparation with a group of women in rural Firozepur. She used the training to begin small-scale production from home. The income helps her meet household costs, and her children have returned to school.",
    quote: "I wanted my children to study and have a better life. Today, I can support them and stand on my own feet.",
  },
  {
    name: "Nisha Rani",
    outcome: "Phulkari and design work",
    image: "/images/skills-livelihoods/nisha-phulkari.webp",
    alt: "A young participant practising Phulkari embroidery",
    privacy: "We have withheld family circumstances and the participant’s exact location.",
    text: "Nisha developed her embroidery skills through regular Phulkari practice and guidance. A government department then asked her to complete a design assignment. She wants advanced training, plans to build a small livelihood of her own and hopes to teach other girls in the future.",
    quote: "I want to learn more, grow my skills, and one day start my own work. I also want to help other girls become independent like me.",
  },
];

export default function SkillsLivelihoodsPage() {
  const { t } = useLanguage();
  return <>
    <section className="skills-hero">
      <div className="skills-hero-wash" aria-hidden="true" />
      <div className="container skills-hero-grid">
        <div className="skills-hero-copy">
          <span className="eyebrow light">{t("Skills and livelihoods")}</span>
          <h1>{t("Practical skills that can become everyday income.")}</h1>
          <p>{t("Punjabi Samvad and CMS Foundation have supported practical training for rural women, young people and families affected by substance abuse. Participants learn through demonstration, repeated practice and follow-up.")}</p>
          <a className="button button-light" href="#stories">{t("Read the stories")} <ArrowRight size={17} /></a>
        </div>
        <div className="skills-hero-media">
          <figure className="skills-hero-primary"><img src="/images/skills-livelihoods/masala-workshop-upright.webp" alt="Women learning traditional masala preparation" /></figure>
          <figure className="skills-hero-secondary"><img src="/images/skills-livelihoods/spice-quality-session-upright.webp" alt="Women examining ingredients during a spice-quality session" /></figure>
        </div>
      </div>
    </section>
    <section className="skills-practice">
      <div className="container">
        <header className="skills-practice-head">
          <div><span className="eyebrow">{t("Learning by doing")}</span><h2>{t("Participants learn through practice.")}</h2></div>
          <p>{t("Sessions cover products and services that participants can continue with modest equipment and local demand. Facilitators demonstrate each process, give participants time to repeat it and remain available when the workshop ends.")}</p>
        </header>
        <div className="skills-practice-list">
          {skills.map(({ icon: Icon, title, text }) => <article key={title}><Icon aria-hidden="true" /><div><h3>{t(title)}</h3><p>{t(text)}</p></div></article>)}
        </div>
        <div className="skills-partnership"><strong>{t("Delivered in partnership")}</strong><span>{t("Punjabi Samvad combines community relationships and follow-up with support from CMS Foundation for these livelihood initiatives.")}</span></div>
      </div>
    </section>
    <section className="skills-workshop-products">
      <div className="container skills-workshop-products-grid">
        <div className="skills-workshop-products-copy">
          <span className="eyebrow">{t("Skills for home-based work")}</span>
          <h2>{t("From a workshop table to products people can sell.")}</h2>
          <p>{t("Punjabi Samvad has run skill-development sessions for rural girls and families affected by substance abuse. The programme covers soap making, traditional masala preparation, practical ways to assess the quality of commonly used spices, and Phulkari embroidery.")}</p>
          <p>{t("Jyoti Bawa first completed the traditional masala training herself before adapting it for participants. Punjabi Samvad then used funds collected for community work, including savings from other programmes, to keep the sessions running and help participants practise beyond the first demonstration.")}</p>
          <p>{t("The training has continued across several rounds. Alongside teaching the process, the team records participant experiences and follows up on what people make, use or begin selling after the workshop.")}</p>
        </div>
        <div className="skills-workshop-products-media">
          <figure className="skills-products-main"><img loading="lazy" decoding="async" src="/images/skills-livelihoods/workshop-products/workshop-showcase.webp" alt="Participants presenting soaps, spices and other products prepared during training" /></figure>
          <figure><img loading="lazy" decoding="async" src="/images/skills-livelihoods/workshop-products/products-display.webp" alt="Small-batch soaps, spices and decorative products arranged for display" /></figure>
          <figure><img loading="lazy" decoding="async" src="/images/skills-livelihoods/workshop-products/flower-candles.webp" alt="Finished decorative products packed after a workshop" /></figure>
        </div>
      </div>
    </section>
    <section className="skills-stories" id="stories">
      <div className="container">
        <header className="skills-stories-head"><span className="eyebrow">{t("Stories of change")}</span><h2>{t("New skills gave five participants more ways to earn.")}</h2><p>{t("These accounts use consented information supplied by participants. We left out harmful family allegations and details unrelated to the programme.")}</p></header>
        <div className="skills-story-list">
          {stories.map((story) => <article className="skills-story" key={story.name}>
            <figure><img loading="lazy" decoding="async" src={story.image} alt={story.alt} /></figure>
            <div className="skills-story-copy">
              <span className="skills-story-outcome">{t(story.outcome)}</span>
              <h3>{t(story.name)}</h3>
              {story.privacy && <p className="skills-privacy">{t(story.privacy)}</p>}
              <p>{t(story.text)}</p>
              <blockquote>“{t(story.quote)}”</blockquote>
            </div>
          </article>)}
        </div>
      </div>
    </section>
    <section className="skills-field-note">
      <div className="container skills-field-note-grid">
        <div><span className="eyebrow light">{t("President’s field note")}</span><h2>{t("Extending a 10-day skill-development workshop.")}</h2></div>
        <div>
          <p>{t("A ten-day workshop can introduce a skill. Many participants needed more time to practise, ask questions and build a routine, so Punjabi Samvad extended some sessions to 20–25 days.")}</p>
          <p>{t("The extra time helped participants continue at home. Some called after the programme for guidance on vermicomposting, while women kept working with masalas, soap and embroidery. During follow-up, participants told us where they felt confident and where they needed more support.")}</p>
          <p>{t("We now plan livelihood training with practice and continued guidance in mind. The aim is to help each participant leave with a skill they can keep using.")}</p>
          <strong>{t("Jyoti Bawa")}<br /><span>{t("President, Punjabi Samvad")}</span></strong>
        </div>
      </div>
    </section>
    <section className="skills-closing"><div className="container skills-closing-inner"><div><span>{t("Support practical learning")}</span><h2>{t("Help more participants turn training into paid work.")}</h2></div><div><Link className="button button-white" to="/donate">{t("Support the programme")} <ArrowRight size={17} /></Link><Link to="/programmes">{t("Explore all programmes")}</Link></div></div></section>
  </>;
}
