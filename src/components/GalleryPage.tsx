"use client";

import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { SitePage } from "../content/pages";
import { useLanguage } from "../context/LanguageContext";

const heroPhotos = [
  { src: "/images/gallery/women-education-group.webp", alt: "Women gathered after a Punjabi Samvad education programme" },
  { src: "/images/gallery/drug-awareness-session-wide.webp", alt: "A Punjabi Samvad substance-abuse awareness session" },
  { src: "/images/gallery/khooh-stage-05.webp", alt: "Actors performing Khooh Bolda Hai on stage" },
];

const archivePhotos = [
  { src: "/images/gallery/cms-health-camp.webp", alt: "A community health check-up camp organised by Punjabi Samvad" },
  { src: "/images/gallery/drug-awareness-session-vertical.webp", alt: "Students attending a substance-abuse awareness programme" },
  { src: "/images/gallery/hiv-self-risk-assessment.webp", alt: "Punjabi HIV self-risk assessment campaign artwork" },
  { src: "/images/gallery/khooh-stage-01.webp", alt: "A scene from the social-awareness play Khooh Bolda Hai" },
  { src: "/images/gallery/khooh-stage-02.webp", alt: "Performers presenting Khooh Bolda Hai" },
  { src: "/images/gallery/khooh-stage-03.webp", alt: "A dramatic moment during Khooh Bolda Hai" },
  { src: "/images/gallery/khooh-stage-04.webp", alt: "The Khooh Bolda Hai cast performing for an audience" },
  { src: "/images/gallery/tirhayi-umar-group.webp", alt: "Participants gathered for Punjabi Samvad's Tirhayi Umar work" },
  { src: "/images/gallery/tirhayi-umar-launch.webp", alt: "Guests at the launch connected with Tirhayi Umar" },
  { src: "/images/real/drug-awareness-classroom.jpg", alt: "A Punjabi Samvad drug-awareness classroom session" },
  { src: "/images/real/p2e-schoolgirls-classroom.jpeg", alt: "Students taking part in a Passport to Earning classroom session" },
  { src: "/images/real/women-community-group.jpg", alt: "Women gathered during a Punjabi Samvad community programme" },
];

export default function GalleryPage({ page }: { page: SitePage }) {
  const { t } = useLanguage();
  const photos = [...heroPhotos, ...archivePhotos];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") setSelectedIndex((current) => current === null ? null : (current - 1 + photos.length) % photos.length);
      if (event.key === "ArrowRight") setSelectedIndex((current) => current === null ? null : (current + 1) % photos.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedIndex, photos.length]);

  const openPhoto = (src: string) => setSelectedIndex(photos.findIndex((photo) => photo.src === src));

  return <>
    <section className="gallery-hero">
      <div className="container gallery-hero-grid">
        <div className="gallery-hero-copy">
          <span className="eyebrow light">{page.eyebrow}</span>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>
        <div className="gallery-hero-mosaic" aria-label="Selected Punjabi Samvad programme photographs">
          {heroPhotos.map((photo, index) => <figure key={photo.src} className={`gallery-hero-photo gallery-hero-photo-${index + 1}`}>
            <button className="gallery-image-button" type="button" onClick={() => openPhoto(photo.src)} aria-label={`Open image: ${photo.alt}`}>
              <img src={photo.src} alt={photo.alt} loading={index === 0 ? "eager" : "lazy"} decoding="async" />
            </button>
          </figure>)}
        </div>
      </div>
    </section>

    <section className="gallery-archive section">
      <div className="container">
        <header className="gallery-archive-heading">
          <h2>{t("Work seen up close.")}</h2>
          <p>{t("Programmes, performances, public-health campaigns and community gatherings documented across Punjabi Samvad's work.")}</p>
        </header>
        <div className="gallery-masonry">
          {archivePhotos.map((photo, index) => <figure className={`gallery-frame gallery-frame-${index + 1}`} key={photo.src}>
            <button className="gallery-image-button" type="button" onClick={() => openPhoto(photo.src)} aria-label={`Open image: ${photo.alt}`}>
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
            </button>
          </figure>)}
        </div>
        {page.cta && <Link className="gallery-next" to={page.cta.href}>
          <span>{t("Learn how the work is organised")}</span>
          <strong>{page.cta.label}</strong>
          <ArrowRight aria-hidden="true" />
        </Link>}
      </div>
    </section>
    {selectedIndex !== null && <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={() => setSelectedIndex(null)}>
      <button className="gallery-lightbox-close" type="button" onClick={() => setSelectedIndex(null)} aria-label="Close image viewer"><X /></button>
      <button className="gallery-lightbox-nav gallery-lightbox-prev" type="button" onClick={(event) => { event.stopPropagation(); setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length); }} aria-label="Previous image"><ArrowLeft /></button>
      <figure className="gallery-lightbox-figure" onClick={(event) => event.stopPropagation()}>
        <img src={photos[selectedIndex].src} alt={photos[selectedIndex].alt} />
        <figcaption>{photos[selectedIndex].alt}</figcaption>
      </figure>
      <button className="gallery-lightbox-nav gallery-lightbox-next" type="button" onClick={(event) => { event.stopPropagation(); setSelectedIndex((selectedIndex + 1) % photos.length); }} aria-label="Next image"><ArrowRight /></button>
    </div>}
  </>;
}
