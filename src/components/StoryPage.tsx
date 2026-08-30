import { ArrowRight, Film, Heart, Landmark, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const milestones = [
  { year: "2004", title: "Punjabi Samvad begins", text: "Amit Bawa and Jyoti Bawa start work in response to gender discrimination and social concerns around them." },
  { year: "2009", title: "A formal organisation", text: "Punjabi Samvad is registered, giving its community work a lasting institutional base." },
  { year: "2014", title: "The work continues", text: "After Amit Bawa’s passing, Jyoti Bawa carries forward the organisation they built together." },
  { year: "2017", title: "Culture travels further", text: "Tirhayi Umar and participation in the World Punjabi Conference extend the use of documentary and culture for social awareness." },
  { year: "Today", title: "A wider national focus", text: "Community experience now meets institutional partnerships designed to take useful programmes to more people." },
];

export default function StoryPage() {
  return <>
    <section className="story-editorial-hero">
      <img src="/images/real/khooh-stage-02.jpg" alt="Khooh Bolda Hai performed before an audience" />
      <div className="story-hero-overlay" />
      <div className="container story-hero-copy"><span className="eyebrow light">Since 2004</span><h1>A story that began with the courage to speak.</h1><p>Punjabi Samvad began when Amit Bawa and Jyoti Bawa chose to act on gender-based violence and discrimination.</p><a href="#story-timeline" className="story-scroll-link">Follow the journey <ArrowRight /></a></div>
    </section>

    <section className="section story-origin-section">
      <div className="container story-origin">
        <div className="story-origin-number" aria-hidden="true">20</div>
        <div className="story-origin-copy"><span className="eyebrow">The beginning</span><h2>A platform for conversations that were difficult to start.</h2><p>The early work brought social issues into the open through dialogue and creative expression. <em>Khooh Bolda Hai</em>, written and directed by Jyoti Bawa, addressed female foeticide, gender discrimination and the dignity of girls.</p><p>It established a principle that still shapes Punjabi Samvad: people engage more deeply when an issue is made human, immediate and possible to discuss.</p></div>
        <figure><img loading="lazy" src="/images/real/khooh-stage-04.jpg" alt="Actors performing Khooh Bolda Hai" /><figcaption><Film /> Theatre became an early language of public awareness.</figcaption></figure>
      </div>
    </section>

    <section className="story-impact-strip"><div className="container"><div><strong>1,100,000+</strong><span>people reached</span></div><div><strong>20+ years</strong><span>of community work</span></div><p><em>Khooh Bolda Hai</em> helped communities confront female foeticide and discrimination against girls in a shared public space.</p></div></section>

    <section id="story-timeline" className="section story-timeline-section">
      <div className="container">
        <div className="story-timeline-heading"><span className="eyebrow">Our journey</span><h2>Built step by step, with communities at the centre.</h2></div>
        <div className="story-timeline">
          {milestones.map((item, index) => <article className="story-milestone" key={item.year}>
            <div className="story-milestone-year">{item.year}</div><div className="story-milestone-mark"><span /></div><div><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p></div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section story-expanded-section">
      <div className="container">
        <div className="story-expanded-head"><div><span className="eyebrow light">The work expanded</span><h2>From one urgent issue to a connected view of social well-being.</h2></div><p>Education and vocational programmes created opportunities for women, girls and young people. Health work addressed HIV/AIDS, menstrual health and mental well-being. Substance-abuse prevention combined expert sessions, community outreach and film.</p></div>
        <div className="story-image-ribbon">
          <figure><img loading="lazy" src="/images/real/drug-awareness-community.jpg" alt="Community substance-abuse awareness programme" /><span><Heart /> Community outreach</span></figure>
          <figure><img loading="lazy" src="/images/real/tirhayi-umar-launch.jpg" alt="Tirhayi Umar documentary launch" /><span><Sparkles /> Creative communication</span></figure>
          <figure><img loading="lazy" src="/images/real/drug-awareness-students.jpg" alt="Students participating in a Punjabi Samvad awareness programme" /><span><Landmark /> Learning and opportunity</span></figure>
        </div>
      </div>
    </section>

    <section className="section story-continuing-section">
      <div className="container story-continuing">
        <figure><img loading="lazy" src="/images/real/khooh-stage-05.webp" alt="Young performers presenting Khooh Bolda Hai" /></figure>
        <div><span className="eyebrow">Continuing the work</span><h2>The organisation moved forward without losing sight of why it began.</h2><p>After Amit Bawa’s passing in 2014, Jyoti Bawa continued the work they began together. As President, she leads Punjabi Samvad across women’s empowerment, education, public health, mental well-being, substance-abuse awareness and Punjabi culture.</p><p>The methods have grown and the partnerships have widened, but dialogue remains the starting point.</p><Link className="button" to="/our-work">Explore our work <ArrowRight size={17} /></Link></div>
      </div>
    </section>
  </>;
}
