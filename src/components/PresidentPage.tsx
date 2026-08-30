import { ArrowUpRight, BookOpen, Film, GraduationCap, HeartHandshake, Users, Scale } from "lucide-react";

const amazonBook = "https://www.amazon.in/dp/B0H26VM52C";

export default function PresidentPage() {
  return <section className="president-page section"><div className="container">
    <div className="president-intro">
      <div className="president-portrait">
        <img src="/images/president/jyoti-bawa-speaking.jpg" alt="Jyoti Bawa speaking at a public event"/>
      </div>
      <div className="president-opening">
        <span className="eyebrow">President of Punjabi Samvad</span>
        <h2>Jyoti Bawa</h2>
        <p className="president-lead">Jyoti Bawa is a Padma Shri nominee, TEDx speaker, social activist, writer and director based in Amritsar. Since 2004, she has worked with women, children and communities on education, health, gender equality, substance-abuse prevention and Punjabi culture.</p>
        <p>She helped build Punjabi Samvad with Amit Bawa and continued their work after his death in 2014. Her leadership combines field programmes with theatre, writing, film and public dialogue.</p>
        <div className="president-facts" aria-label="Jyoti Bawa highlights">
          <span><strong>Padma Shri</strong><small>nominee</small></span>
          <span><strong>TEDx</strong><small>speaker</small></span>
          <span><strong>20+ years</strong><small>of community work</small></span>
        </div>
      </div>
    </div>

    <div className="president-story-grid">
      <article><Users/><span>Leadership</span><h3>From dialogue to programmes</h3><p>Jyoti leads Punjabi Samvad&apos;s work across girls&apos; education, women&apos;s skills, menstrual health, mental well-being, HIV/AIDS awareness and anti-drug outreach. She works with schools, communities, specialists and institutional partners to make difficult subjects easier to discuss.</p></article>
      <article><Film/><span>Creative advocacy</span><h3>Writing for the stage and screen</h3><p>She wrote and directed <em>Khooh Bolda Hai</em>, a theatre production about female foeticide, gender discrimination and the rights of girls. She has also directed documentary work on social concerns, including substance abuse.</p></article>
    </div>

    <section className="president-children" aria-labelledby="president-posh-title" style={{ marginTop: '70px' }}>
      <div className="president-children-mark"><Scale aria-hidden="true" /><span>Institutional Governance</span></div>
      <div className="president-children-copy">
        <h2 id="president-posh-title">POSH Act & Institutional Integrity.</h2>
        <p>Jyoti Bawa serves as an expert external member on multiple Prevention of Sexual Harassment (POSH) committees across government, corporate and defence institutions, including the Government of Punjab, regional banks and Army schools.</p>
        <p>Her role is to ensure workplace safety, investigate grievances with absolute impartiality and uphold the dignity of all employees. This commitment to fairness includes protecting individuals from false allegations—she has successfully defended and exonerated men facing fabricated harassment charges, with one such case detailed in her book.</p>
      </div>
    </section>

    <section className="president-children" aria-labelledby="president-children-title" style={{ marginTop: '24px' }}>
      <div className="president-children-mark"><HeartHandshake aria-hidden="true" /><span>Education and care</span></div>
      <div className="president-children-copy">
        <h2 id="president-children-title">Keeping a child&apos;s education within reach.</h2>
        <p>Jyoti has taken responsibility for several children whose families could not afford to keep them in school. She treats each child as part of her own extended family and arranges scholarships for fees, books, uniforms and other study costs.</p>
        <p>Her support does not end with a payment. She speaks with families, follows each child&apos;s progress and stays close when illness, loss of work or another crisis puts education at risk. The children know they have someone to call.</p>
        <p>For a child living with financial hardship, one uninterrupted school year can open the way to another. Jyoti&apos;s aim is practical: keep that child learning until poverty no longer decides what they may become.</p>
      </div>
    </section>

    <div className="president-photo-pair" aria-label="Jyoti Bawa at cultural and educational programmes">
      <img loading="lazy" decoding="async" src="/images/president/jyoti-bawa-cultural-event.jpg" alt="Jyoti Bawa at a Punjabi cultural event"/>
      <img loading="lazy" decoding="async" src="/images/president/jyoti-bawa-with-students.jpg" alt="Jyoti Bawa with school students"/>
    </div>

    <section className="president-recognition" aria-labelledby="president-recognition-title">
      <div className="president-recognition-copy">
        <span>Public recognition</span>
        <h2 id="president-recognition-title">Recognition for her social work and leadership.</h2>
      </div>
      <div className="president-recognition-images">
        <img loading="lazy" decoding="async" src="/images/president/jyoti-bawa-zee5-top-50.webp" alt="ZEE5 Top 50 Emerging Leaders recognition featuring Jyoti Bawa"/>
        <img loading="lazy" decoding="async" src="/images/president/jyoti-bawa-un-day-recognition.webp" alt="Jyoti Bawa receiving recognition during a United Nations Day celebration in 2023"/>
      </div>
    </section>

    <article className="president-book">
      <div className="president-book-mark"><BookOpen/><span>Writing</span></div>
      <div className="president-book-copy">
        <span className="eyebrow light">Her latest book</span>
        <h2>Candle in the Wind</h2>
        <p>Jyoti&apos;s third book draws from two decades of work with women, children and communities. It addresses old age homes, menstrual awareness, mental health and substance abuse, and was launched at the Sharjah International Book Fair in 2025.</p>
        <p className="president-book-note">She has pledged all profits from the book to programmes for underprivileged girls, community welfare and public awareness.</p>
        <a className="button button-white" href={amazonBook} target="_blank" rel="noreferrer">Buy the book on Amazon <ArrowUpRight size={17}/></a>
      </div>
      <a className="president-book-visual" href={amazonBook} target="_blank" rel="noreferrer" aria-label="View Candle in the Wind on Amazon">
        <img loading="lazy" decoding="async" src="/images/president/candle-in-the-wind-book-mockup.png" alt="Three-dimensional mockup of Candle in the Wind by Jyoti Bawa"/>
      </a>
      <div className="president-books-list">
        <span>Also by Jyoti Bawa</span>
        <strong>Khooh Bolda Hai</strong><small>2014</small>
        <strong>Khilaf-e-Dastoor</strong><small>2020</small>
      </div>
    </article>

    <div className="president-youth">
      <div className="president-youth-copy">
        <GraduationCap/>
        <span className="eyebrow">Learning through experience</span>
        <h2>Internships grounded in community work</h2>
        <p>Jyoti treats internships as a place for students to observe community work, ask questions and exchange ideas. Punjabi Samvad has hosted young people from schools and universities, including IIM Amritsar, for practical exposure to research and social programmes.</p>
      </div>
      <img loading="lazy" decoding="async" src="/images/president/jyoti-bawa-internship.jpg" alt="Jyoti Bawa presenting an internship certificate to a student"/>
    </div>
  </div></section>;
}
