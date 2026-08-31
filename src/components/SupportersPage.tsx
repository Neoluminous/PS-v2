import { useLanguage } from "../context/LanguageContext";
import React from 'react';

const supporters = [
  {
    name: "Gireesh Damodaran",
    initials: "GD",
    role: "Corporate Strategist, Founder & CEO, GPNP PROSPERO",
    image: "/images/supporters/gireesh-damodaran.jpeg",
    position: "50% 41%",
    biography: [
      "Gireesh Damodaran is a corporate strategist, entrepreneur and founder and CEO of GPNP PROSPERO Corporate Strategists. An alumnus of IIM Bangalore, he has worked across strategic planning, project development and business structuring. Based in Dubai, he brings an international perspective to his work.",
      "For Punjabi Samvad, Gireesh helps shape projects and initiatives from concept to execution. He contributes to project design, strategic planning, business models and institutional development.",
      "His work helps the organisation set clearer goals, develop sound partnerships and plan for long-term social impact.",
    ],
  },
  {
    name: "Mandeep Singh",
    initials: "MS",
    role: "Chartered Accountant, Vipul Mandeep Arora & Associates",
    image: "/images/supporters/mandeep-singh.jpeg",
    position: "center",
    biography: [
      "Mandeep Singh is a Chartered Accountant with Vipul Mandeep Arora & Associates.",
      "He provides financial support to Punjabi Samvad and helps the organisation fund scholarships for students who need assistance to continue their education.",
    ],
  },
  {
    name: "Dr. Gurbilas P. Singh",
    initials: "GS",
    role: "Medical Professional, Supporter of Punjabi Samvad",
    image: "/images/supporters/dr-gurbilas-p-singh.webp",
    position: "center 32%",
    biography: [
      "Dr. Gurbilas P. Singh is a medical professional and a supporter of Punjabi Samvad’s work across education, health, awareness and community welfare.",
      "He supports the organisation beyond any single programme, helping Punjabi Samvad sustain its community work and take new initiatives forward.",
    ],
  },
  {
    name: "Jasmine Bawa",
    initials: "JB",
    role: "Lifetime Member, Programme & Event Support",
    image: "/images/supporters/jasmine-bawa.webp",
    position: "center 34%",
    biography: [
      "Jasmine Bawa is a lifetime member of Punjabi Samvad. She anchors events and helps the organisation develop project ideas and proposals.",
      "She brings practical support to both planning and public programmes, helping the team prepare projects and communicate them clearly.",
    ],
  },
  {
    name: "Sukhpal Singh",
    initials: "SS",
    role: "Writer, Education Scholarship Supporter",
    image: "/images/supporters/sukhpal-singh.jpeg",
    position: "center 38%",
    biography: [
      "Sukhpal Singh is a writer who supports Punjabi Samvad’s education scholarship work through donations.",
      "His contribution helps students continue their studies when financial circumstances might otherwise interrupt their education.",
    ],
  },
  {
    name: "Dr Baljit Singh Chahal",
    initials: "BC",
    role: "Veterinary Doctor, Education Scholarship Supporter",
    image: "/images/supporters/baljit-singh-chahal.jpeg",
    position: "center 30%",
    biography: [
      "Dr Baljit Singh Chahal is a veterinary doctor and a supporter of Punjabi Samvad’s education scholarship work.",
      "His donations help students meet education costs and continue working towards their academic goals.",
    ],
  },
  {
    name: "Raghav Seth",
    initials: "RS",
    role: "Education Scholarship Supporter",
    image: "/images/supporters/raghav-seth.jpeg",
    position: "center 22%",
    biography: [
      "Raghav Seth supports Punjabi Samvad’s education scholarships through donations.",
      "His contribution gives students practical financial support so they can remain in education and pursue their studies.",
    ],
  },
];

export default function SupportersPage() {
  const { t } = useLanguage();
  return <section className="supporters-page section">
    <div className="container">
      <div className="supporters-intro">
        <div className="supporters-intro-copy">
          <span className="eyebrow">{t("People who strengthen the work")}</span>
          <h2>{t("The people who stand behind the work.")}</h2>
          <p>{t("Punjabi Samvad is fortunate to have people who believe in its work and support it in many different ways. Some contribute financially, while others share their expertise, resources, connections or practical help when it is needed. Each contribution, large or small, helps Punjabi Samvad continue its work with communities and take meaningful ideas forward.")}</p>
        </div>
        <div className="supporters-intro-art" aria-hidden="true">
          <span className="supporters-orbit supporters-orbit-one" />
          <span className="supporters-orbit supporters-orbit-two" />
          <span className="supporters-orbit supporters-orbit-three" />
          <span className="supporters-intro-mark">PS</span>
        </div>
      </div>
      <div className="supporters-list">
        {supporters.map((supporter, index) => <article className={`supporter-profile${index % 2 ? " supporter-profile-reverse" : ""}`} key={supporter.name}>
          <span className="supporter-count">{String(index + 1).padStart(2, "0")}</span>
          <div className="supporter-portrait">
            <img loading="lazy" decoding="async" src={supporter.image} alt={t(supporter.name)} style={{ objectPosition: supporter.position }} />
            <div className="supporter-portrait-mark" aria-hidden="true">{supporter.initials}</div>
          </div>
          <div className="supporter-copy">
            <span className="supporter-kicker">{t("A supporter of Punjabi Samvad")}</span>
            <h2>{t(supporter.name)}</h2>
            <p className="supporter-title">
              {t(supporter.role).split(", ").map((part, i) => (
                <React.Fragment key={i}>
                  {part}
                  {i < t(supporter.role).split(", ").length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
            <div className="supporter-biography">{supporter.biography.map(paragraph => <p key={paragraph}>{t(paragraph)}</p>)}</div>
          </div>
          <span className="supporter-rule" aria-hidden="true" />
        </article>)}
      </div>
    </div>
  </section>;
}
