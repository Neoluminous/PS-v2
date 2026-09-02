import { ArrowUpRight, BadgeCheck, ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import SocialLinks from "./SocialLinks";
import { useLanguage } from "../context/LanguageContext";

export default function SiteFooter() {
  const { t } = useLanguage();
  return <footer id="contact" className="editorial-footer">
    <div className="editorial-action">
      <div className="container editorial-action-inner">
        <div><span>{t("Bring a social-impact idea")}</span><h2>{t("Let's turn it into a meaningful Samvad.")}</h2></div>
        <div className="editorial-action-links"><a href="/discuss-partnership">{t("Discuss a partnership")} <ArrowUpRight /></a><a href="/donate">{t("Make a donation")} <ArrowUpRight /></a></div>
      </div>
    </div>
    <div className="container editorial-wordmark">
      <div className="editorial-logo"><img loading="lazy" src="/images/punjabi-samvad-logo.jpeg" alt={t("Punjabi Samvad")} /><span>{t("Since")}<br /><strong>2004</strong></span></div>
      <div><h2>{t("Punjabi Samvad")}</h2><p>{t("Dialogue. Dignity. Change.")}</p></div>
    </div>
    <div className="editorial-divider"><i /><span>{t("Rooted in Punjab · Working across India")}</span><i /></div>
    <div className="container editorial-footer-grid">
      <div className="editorial-intro"><span className="footer-kicker">{t("Our purpose")}</span><p>{t("Creating space for people to ask questions, access knowledge and participate in the issues that shape their lives.")}</p><div className="editorial-badges"><span><BadgeCheck />{t("80G Approved")}</span><span><BadgeCheck />{t("12AB")}</span><span><BadgeCheck />{t("CSR00032253")}</span></div></div>
      <div className="editorial-links editorial-links-desktop"><span className="footer-kicker">{t("Explore")}</span><a href="/about">{t("About us")}</a><a href="/our-story">{t("Our story")}</a><a href="/amit-bawa">{t("Amit Bawa")}</a><a href="/leadership">{t("About the president")}</a><a href="/supporters">{t("Supporters")}</a><a href="/our-work">{t("Our work")}</a><a href="/programmes">{t("Programmes")}</a><a href="/skills-livelihoods">{t("Skills & Livelihoods")}</a><a href="/p2e">{t("Passport to Earning")}</a><a href="/kym">{t("Know Your Money")}</a><a href="/impact">{t("Impact")}</a><a href="/media-features">{t("Media Features")}</a><a href="/updates">{t("News & Updates")}</a><a href="/policies">{t("Policies")}</a></div>
      <div className="editorial-links editorial-links-desktop"><span className="footer-kicker">{t("Participate")}</span><a href="/donate">{t("Donate")}</a><a href="/partners">{t("Partnerships")}</a><a href="/get-involved">{t("Volunteer & Intern")}</a><a href="/fund-a-programme">{t("Fund a programme")}</a><a href="/support">{t("Support us")}</a><a href="/transparency">{t("Transparency")}</a><a href="/faq">{t("FAQs")}</a></div>
      <details className="editorial-links editorial-disclosure">
        <summary><span className="footer-kicker">{t("Explore")}</span><ChevronDown aria-hidden="true" /></summary>
        <div className="editorial-link-list"><a href="/about">{t("About us")}</a><a href="/our-story">{t("Our story")}</a><a href="/amit-bawa">{t("Amit Bawa")}</a><a href="/leadership">{t("About the president")}</a><a href="/supporters">{t("Supporters")}</a><a href="/our-work">{t("Our work")}</a><a href="/programmes">{t("Programmes")}</a><a href="/skills-livelihoods">{t("Skills & Livelihoods")}</a><a href="/p2e">{t("Passport to Earning")}</a><a href="/kym">{t("Know Your Money")}</a><a href="/impact">{t("Impact")}</a><a href="/media-features">{t("Media Features")}</a><a href="/updates">{t("News & Updates")}</a><a href="/policies">{t("Policies")}</a></div>
      </details>
      <details className="editorial-links editorial-disclosure">
        <summary><span className="footer-kicker">{t("Participate")}</span><ChevronDown aria-hidden="true" /></summary>
        <div className="editorial-link-list"><a href="/donate">{t("Donate")}</a><a href="/partners">{t("Partnerships")}</a><a href="/get-involved">{t("Volunteer & Intern")}</a><a href="/fund-a-programme">{t("Fund a programme")}</a><a href="/support">{t("Support us")}</a><a href="/transparency">{t("Transparency")}</a><a href="/faq">{t("FAQs")}</a></div>
      </details>
      <div className="editorial-contact"><span className="footer-kicker">{t("Start a conversation")}</span><a href="mailto:punjabisamvadasr@gmail.com"><Mail /><span>punjabisamvadasr@gmail.com</span></a><a href="tel:+918728033911"><Phone /><span>+91 87280 33911</span></a><a href="https://maps.google.com/?q=293+Green+Avenue+Amritsar+Punjab+143001" target="_blank" rel="noreferrer"><MapPin /><span>293, Green Avenue<br />Amritsar, Punjab 143001</span></a><SocialLinks className="footer-social-links" /></div>
    </div>
    <div className="editorial-bottom"><div className="container"><span>© 2026 {t("Punjabi Samvad")} <span className="editorial-credit-divider" aria-hidden="true">|</span> {t("Website built by Jaykaran Sagar")}</span><div><a href="/policies">{t("Policies")}</a><a href="/contact">{t("Contact")}</a><a href="/transparency">{t("Compliance")}</a></div></div></div>
  </footer>;
}
