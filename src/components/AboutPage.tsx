import { ArrowRight, Ear, HeartHandshake, Languages, RefreshCw, ShieldCheck, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";

const principles = [
  "Dignity and empathy",
  "Equality and inclusion",
  "Integrity and accountability",
  "Participation and informed choice",
  "Creativity with purpose",
  "Respect for culture",
];

export default function AboutPage() {
  return <>
    <section className="about-editorial-hero">
      <div className="about-orbit about-orbit-one" aria-hidden="true" />
      <div className="about-orbit about-orbit-two" aria-hidden="true" />
      <div className="container about-editorial-intro">
        <div className="about-hero-copy">
          <span className="eyebrow">Who we are</span>
          <h1>Dialogue that moves communities forward.</h1>
          <p>Punjabi Samvad is a national non-governmental organisation rooted in Punjab. We address social issues through education, public awareness, community participation and creative communication.</p>
          <div className="about-since"><strong>2004</strong><span>Two decades of community-led work</span></div>
        </div>
        <div className="about-photo-composition">
          <figure className="about-photo-main"><img src="/images/real/women-community-group.jpg" alt="Women taking part in a Punjabi Samvad community programme" /></figure>
          <figure className="about-photo-float"><img src="/images/real/drug-awareness-school.jpg" alt="Students at a Punjabi Samvad awareness session" /></figure>
          <div className="about-photo-note"><HeartHandshake /><span>Rooted in Punjab<br />working with a national outlook</span></div>
        </div>
      </div>
    </section>

    <section className="section about-roots-section">
      <div className="container about-roots-layout">
        <div className="about-roots-image"><img loading="lazy" src="/images/real/khooh-stage-01.jpg" alt="A performance of Khooh Bolda Hai" /><span>Creative advocacy has been part of our work from the beginning.</span></div>
        <div className="about-roots-copy">
          <span className="eyebrow">Our roots</span>
          <h2>A local response grew into sustained social action.</h2>
          <p>Punjabi Samvad began when Amit Bawa and Jyoti Bawa decided to respond to gender discrimination and other social concerns they saw around them. The organisation was formally registered in 2009.</p>
          <p>What started as a local effort has grown into more than two decades of work with women, children, young people, schools, communities and institutions.</p>
          <blockquote><strong>Samvad means dialogue.</strong> For us, it is a practical way to help people discuss subjects that are often ignored, misunderstood or surrounded by stigma.</blockquote>
        </div>
      </div>
    </section>

    <section className="section about-work-section">
      <div className="container">
        <div className="about-section-heading"><span className="eyebrow light">What we work on</span><h2>Different concerns. One connected view of community well-being.</h2></div>
        <div className="about-work-mosaic">
          <article className="about-work-panel panel-large"><img loading="lazy" src="/images/real/women-education-group.webp" alt="Women gathered after a Punjabi Samvad learning session" /><div><span>Women’s learning</span><h3>Education that builds confidence and opportunity</h3></div></article>
          <article className="about-work-panel"><img loading="lazy" src="/images/real/cms-health-camp.jpg" alt="People receiving consultations at a Punjabi Samvad health camp" /><div><span>Community health</span><h3>Health check-ups and practical guidance</h3></div></article>
          <article className="about-work-panel"><img loading="lazy" src="/images/real/tirhayi-umar-group.webp" alt="Guests holding Tirhayi Umar at its launch" /><div><span>Substance-abuse awareness</span><h3>A book that brings addiction into public view</h3></div></article>
        </div>
      </div>
    </section>

    <section className="section about-method-section">
      <div className="container">
        <div className="about-method-head"><div><span className="eyebrow">How we work</span><h2>Start by listening. Build with care. Learn as we go.</h2></div><p>Workshops, expert sessions, theatre, film, literature, internships and institutional partnerships are chosen for the people and the issue, not for a fixed template.</p></div>
        <div className="about-method-line">
          <div className="about-method-item"><Ear /><h3>Listen</h3><p>Understand the people, context and need before designing an activity.</p></div>
          <div className="about-method-item"><UsersRound /><h3>Collaborate</h3><p>Work with credible experts, community voices and institutional partners.</p></div>
          <div className="about-method-item"><Languages /><h3>Make it useful</h3><p>Use language and formats that make reliable information easier to act on.</p></div>
          <div className="about-method-item"><RefreshCw /><h3>Improve</h3><p>Track delivery, listen to response and refine programmes through experience.</p></div>
        </div>
      </div>
    </section>

    <section className="about-advocacy-band">
      <img loading="lazy" src="/images/real/khooh-stage-03.jpg" alt="Khooh Bolda Hai theatre performance" />
      <div className="about-advocacy-shade" />
      <div className="container about-advocacy-copy"><span className="eyebrow light">Creative advocacy</span><h2><strong>1,100,000+ people reached.</strong></h2><p><em>Khooh Bolda Hai</em> brought female foeticide and discrimination against girls into public conversation. Theatre, film and writing remain central to how we make difficult subjects easier to face.</p></div>
    </section>

    <section className="section about-direction-section">
      <div className="container">
        <div className="about-direction-grid">
          <article><span>Our vision</span><h2>An inclusive India where dignity and opportunity are not determined by gender or circumstance.</h2></article>
          <article><span>Our mission</span><p>We work through education, awareness, skills and creative communication while protecting the language, art and cultural heritage that help communities understand who they are.</p></article>
        </div>
        <div className="about-principles">
          <div><ShieldCheck /><h2>The principles behind our work</h2></div>
          <ul>{principles.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
    </section>

    <section className="section about-today-section">
      <div className="container about-today-layout">
        <div><span className="eyebrow">Punjabi Samvad today</span><h2>Grounded where the work began, building for a wider reach.</h2><p>Headquartered in Amritsar, Punjabi Samvad remains close to the communities at the centre of its work. President Jyoti Bawa leads the organisation and continues the work she began with Amit Bawa.</p><p>The purpose remains clear: address neglected issues honestly, create space for participation and build programmes people can use.</p><Link className="button" to="/our-story">Read our story <ArrowRight size={17} /></Link></div>
        <figure><img loading="lazy" src="/images/leadership-theatre.jpg" alt="A theatre facilitator working with young performers" /></figure>
      </div>
    </section>
  </>;
}
