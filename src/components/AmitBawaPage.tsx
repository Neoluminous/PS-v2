import { ArrowRight, Feather, MessageCircle, Theater } from "lucide-react";

export default function AmitBawaPage() {
  return <article className="amit-page">
    <header className="amit-hero">
      <div className="container amit-hero-grid">
        <div className="amit-hero-copy">
          <span className="eyebrow">Co-founder of Punjabi Samvad</span>
          <h1>Amit Bawa</h1>
          <p>Founding inspiration behind Punjabi Samvad</p>
        </div>
        <figure className="amit-hero-portrait">
          <img src="/images/founders/amit-bawa-candle-restored.webp" alt="Amit Bawa holding a candle at a Punjabi Samvad programme" fetchPriority="high" />
        </figure>
      </div>
    </header>

    <section className="amit-opening section">
      <div className="container amit-opening-grid">
        <div className="amit-opening-heading">
          <span>In remembrance</span>
          <h2>A thoughtful life with a creative purpose.</h2>
        </div>
        <div className="amit-opening-copy">
          <p>Amit was a kind and deeply thoughtful person with an exceptional creative mind. His sensitivity and imagination found expression through poetry, dialogue and theatre, leaving a lasting impression on those who knew him and experienced his work.</p>
          <p>Punjabi Samvad began as a shared dream rooted in the belief that life should be used to do something meaningful for others. Although Amit is no longer with us, that dream continues through Punjabi Samvad. His ideas, values and compassionate spirit remain an important part of the organisation&apos;s foundation and continue to inspire its work.</p>
        </div>
      </div>
    </section>

    <section className="amit-creative section">
      <div className="container amit-creative-grid">
        <figure className="amit-speaking-photo">
          <img loading="lazy" decoding="async" src="/images/founders/amit-bawa-speaking-restored.webp" alt="Amit Bawa speaking at a Punjabi Samvad event" />
        </figure>
        <div className="amit-creative-copy">
          <h2>A creative voice in Punjabi Samvad&apos;s early work.</h2>
          <p>Amit served as President during Punjabi Samvad&apos;s formative years. He brought poetry and conversation into programmes that addressed gender discrimination, education and Punjabi culture.</p>
          <div className="amit-practices">
            <div><Feather aria-hidden="true" /><span><strong>Poetry</strong><small>His poems formed part of <em>Khooh Bolda Hai</em> and other productions.</small></span></div>
            <div><Theater aria-hidden="true" /><span><strong>Theatre</strong><small>He worked with Jyoti Bawa as theatre became a public language for difficult social issues.</small></span></div>
            <div><MessageCircle aria-hidden="true" /><span><strong>Dialogue</strong><small>He believed art could help people speak about subjects that society often kept quiet.</small></span></div>
          </div>
        </div>
      </div>
    </section>

    <section className="amit-work section">
      <div className="container amit-work-layout">
        <div className="amit-work-title">
          <span>2004</span>
          <h2>The beginning of a shared commitment.</h2>
        </div>
        <div className="amit-work-copy">
          <p>Amit and Jyoti Bawa founded Punjabi Samvad after a gender-based crime in Punjab moved them to respond. Their first work brought educators, artists and community members together to discuss discrimination against girls.</p>
          <p>Theatre soon became central to that response. Jyoti wrote and directed <em>Khooh Bolda Hai</em>, while Amit contributed poetry to the production. His writing also formed part of <em>Na Koi Vairi Na Begana</em>, including the poem <em>Pani</em>.</p>
        </div>
      </div>
    </section>

    <section className="amit-legacy section">
      <div className="container amit-legacy-inner">
        <span className="amit-legacy-year">2014</span>
        <h2>His work remains part of Punjabi Samvad.</h2>
        <p>Amit died in 2014. Jyoti Bawa continued the organisation they founded together, carrying their shared purpose into education, public health, theatre and community programmes.</p>
        <a className="button" href="/our-story">Read our story <ArrowRight size={17} /></a>
      </div>
    </section>
  </article>;
}
