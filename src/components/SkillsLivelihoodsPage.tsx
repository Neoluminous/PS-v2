import { ArrowRight, Flower2, Leaf, PackageCheck, Soup, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const skills = [
  { icon: Sparkles, title: "Soap making", text: "Product preparation, moulding and finishing." },
  { icon: Soup, title: "Masala preparation", text: "Traditional recipes, ingredients and small-batch production." },
  { icon: PackageCheck, title: "Spice quality", text: "Practical checks for commonly used spices." },
  { icon: Flower2, title: "Phulkari", text: "Embroidery practice, design and pathways to paid work." },
  { icon: Leaf, title: "Vermicomposting", text: "Compost preparation and local selling opportunities." },
];

const stories = [
  {
    name: "Anita",
    outcome: "Home-based livelihood",
    image: "/images/skills-livelihoods/restored/anita-livelihood.webp",
    alt: "Anita working with production equipment after livelihood training",
    text: "Anita joined a livelihood programme after meeting the team through a community awareness activity. Training in production and packaging gave her a route into home-based work. She now earns around ₹7,000–₹8,000 a month and uses that income for household expenses and her children’s education.",
    quote: "Today, I can support my family and educate my children. I feel independent and confident.",
  },
  {
    name: "Harjinder Singh",
    outcome: "Street-food enterprise",
    image: "/images/skills-livelihoods/restored/harjinder-training.webp",
    alt: "Harjinder Singh learning street-food preparation during a community training session",
    text: "Harjinder attended a street-food training programme delivered through the partnership between Punjabi Samvad and CMS Foundation. He continued practising with the trainer, began selling golgappas near his home and now supports his family through the stall. He also reports that he has stopped drinking alcohol.",
    quote: "This transformation came not just from training, but from my decision to change. If a person is determined, they can turn their life around at any stage.",
  },
  {
    name: "Aman",
    outcome: "Vermicompost and counselling",
    image: "/images/skills-livelihoods/restored/vermicompost-training.webp",
    alt: "Participants learning vermicompost preparation in a field workshop",
    privacy: "Name changed to protect the participant’s privacy.",
    text: "Aman joined counselling and vermicompost training while working to recover from substance dependence. He learned to prepare compost, approached local nurseries and began offering it to households nearby. He now has a routine, a source of income and a practical reason to keep moving forward.",
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
  return <>
    <section className="skills-hero">
      <div className="skills-hero-wash" aria-hidden="true" />
      <div className="container skills-hero-grid">
        <div className="skills-hero-copy">
          <span className="eyebrow light">Skills and livelihoods</span>
          <h1>Practical skills that can become everyday income.</h1>
          <p>Punjabi Samvad and CMS Foundation have supported practical training for rural women, young people and families affected by substance abuse. Participants learn through demonstration, repeated practice and follow-up.</p>
          <a className="button button-light" href="#stories">Read the stories <ArrowRight size={17} /></a>
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
          <div><span className="eyebrow">Learning by doing</span><h2>Participants learn through practice.</h2></div>
          <p>Sessions cover products and services that participants can continue with modest equipment and local demand. Facilitators demonstrate each process, give participants time to repeat it and remain available when the workshop ends.</p>
        </header>
        <div className="skills-practice-list">
          {skills.map(({ icon: Icon, title, text }) => <article key={title}><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
        <div className="skills-partnership"><strong>Delivered in partnership</strong><span>Punjabi Samvad combines community relationships and follow-up with support from CMS Foundation for these livelihood initiatives.</span></div>
      </div>
    </section>

    <section className="skills-workshop-products">
      <div className="container skills-workshop-products-grid">
        <div className="skills-workshop-products-copy">
          <span className="eyebrow">Skills for home-based work</span>
          <h2>From a workshop table to products people can sell.</h2>
          <p>Punjabi Samvad has run skill-development sessions for rural girls and families affected by substance abuse. The programme covers soap making, traditional masala preparation, practical ways to assess the quality of commonly used spices, and Phulkari embroidery.</p>
          <p>Jyoti Bawa first completed the traditional masala training herself before adapting it for participants. Punjabi Samvad then used funds collected for community work, including savings from other programmes, to keep the sessions running and help participants practise beyond the first demonstration.</p>
          <p>The training has continued across several rounds. Alongside teaching the process, the team records participant experiences and follows up on what people make, use or begin selling after the workshop.</p>
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
        <header className="skills-stories-head"><span className="eyebrow">Stories of change</span><h2>New skills gave five participants more ways to earn.</h2><p>These accounts use consented information supplied by participants. We left out harmful family allegations and details unrelated to the programme.</p></header>
        <div className="skills-story-list">
          {stories.map((story) => <article className="skills-story" key={story.name}>
            <figure><img loading="lazy" decoding="async" src={story.image} alt={story.alt} /></figure>
            <div className="skills-story-copy">
              <span className="skills-story-outcome">{story.outcome}</span>
              <h3>{story.name}</h3>
              {story.privacy && <p className="skills-privacy">{story.privacy}</p>}
              <p>{story.text}</p>
              <blockquote>“{story.quote}”</blockquote>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="skills-field-note">
      <div className="container skills-field-note-grid">
        <div><span className="eyebrow light">President’s field note</span><h2>Extending a 10-day skill-development workshop.</h2></div>
        <div>
          <p>A ten-day workshop can introduce a skill. Many participants needed more time to practise, ask questions and build a routine, so Punjabi Samvad extended some sessions to 20–25 days.</p>
          <p>The extra time helped participants continue at home. Some called after the programme for guidance on vermicomposting, while women kept working with masalas, soap and embroidery. During follow-up, participants told us where they felt confident and where they needed more support.</p>
          <p>We now plan livelihood training with practice and continued guidance in mind. The aim is to help each participant leave with a skill they can keep using.</p>
          <strong>Jyoti Bawa<br /><span>President, Punjabi Samvad</span></strong>
        </div>
      </div>
    </section>

    <section className="skills-closing"><div className="container skills-closing-inner"><div><span>Support practical learning</span><h2>Help more participants turn training into paid work.</h2></div><div><Link className="button button-white" to="/donate">Support the programme <ArrowRight size={17} /></Link><Link to="/programmes">Explore all programmes</Link></div></div></section>
  </>;
}
