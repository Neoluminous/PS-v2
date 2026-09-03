import { ArrowUpRight, BookOpen } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const archiveMedia = Array.from({ length: 26 }, (_, index) => {
  const number = index + 1;
  if (number === 17) return null;
  return `/images/media/archive/media-${String(number).padStart(2, "0")}.webp`;
}).filter((src): src is string => Boolean(src));

const features = [
  { publication: "Radio Club India", title: "Prevention Is Social: Young Voices from Punjab Lead the Conversation on HIV", image: "/images/media/features/radio-club-hiv.webp", href: "https://radioclubindia.blogspot.com/2026/07/prevention-is-social-young-voices-from.html?m=1" },
  { publication: "The Tribune", title: "Jyoti Bawa’s ‘Candle in the Wind’ sheds light on problems overlooked by society", image: "/images/media/features/tribune-candle.webp", href: "https://www.tribuneindia.com/news/amritsar/jyotis-candle-in-the-wind-sheds-light-on-problems-overlooked-by-society/" },
  { publication: "CMS Foundation", title: "Breaking the Chains: Communities in Punjab confront drug addiction", image: "/images/media/features/cms-drug-awareness.webp", href: "https://www.linkedin.com/posts/cmsfoundation-cmsinfosystems-ugcPost-7426912728767684608-w7ZB/" },
];

export default function MediaFeaturesPage() {
  const { t } = useLanguage();
  return <section className="media-page section"><div className="container">
    <div className="media-intro">
      <span className="eyebrow">{t("Stories from the field")}</span>
      <h2>{t("Work seen, shared and remembered.")}</h2>
      <p>{t("Photographs, programme material and coverage from Punjabi Samvad's work across health, education, culture and community action.")}</p>
    </div>
    <div className="media-mosaic">
      {archiveMedia.map((src, index) => <figure className={`media-tile media-tile-${(index % 7) + 1}`} key={src}>
        <img loading="lazy" decoding="async" src={src} alt="Punjabi Samvad programme and media archive"/>
      </figure>)}
    </div>
    <article className="book-feature">
      <div className="book-cover-wrap">
        <img loading="lazy" decoding="async" src="/images/media/books/candle-in-the-wind-jyoti-bawa.webp" alt="Cover of Candle in the Wind by Jyoti Bawa"/>
      </div>
      <div className="book-copy">
        <span className="book-kicker"><BookOpen size={17}/> {t("A book by Jyoti Bawa")}</span>
        <h2>{t("Candle in the Wind")}</h2>
        <p>{t("Jyoti Bawa draws on two decades of work with women, children and communities to examine old age homes, menstrual awareness, mental health and substance abuse. The book was launched at the Sharjah International Book Fair in 2025.")}</p>
        <p className="book-support-note">{t("Jyoti has pledged all profits from the book to support underprivileged girls, community welfare and awareness programmes.")}</p>
        <a className="button" href="https://www.amazon.in/dp/B0H26VM52C" target="_blank" rel="noreferrer">{t("Buy the book on Amazon")} <ArrowUpRight size={17}/></a>
      </div>
    </article>
    <div className="press-section">
      <div className="press-heading"><span className="eyebrow">{t("Featured in the media")}</span><h2>{t("Reports, interviews and partnerships")}</h2></div>
      <div className="press-grid">{features.map(feature => <a className="press-card" href={feature.href} target="_blank" rel="noreferrer" key={feature.href}>
        <div className="press-image"><img loading="lazy" decoding="async" src={feature.image} alt=""/></div>
        <div className="press-copy"><span>{feature.publication}</span><h3>{feature.title}</h3><strong>{t("Read feature")} <ArrowUpRight size={16}/></strong></div>
      </a>)}</div>
    </div>
  </div></section>;
}
