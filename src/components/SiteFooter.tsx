import { ArrowUpRight, BadgeCheck, ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import SocialLinks from "./SocialLinks";

export default function SiteFooter() {
  return <footer id="contact" className="editorial-footer">
    <div className="editorial-action">
      <div className="container editorial-action-inner">
        <div><span>Bring a social-impact idea</span><h2>Let&apos;s turn it into a meaningful Samvad.</h2></div>
        <div className="editorial-action-links"><a href="/discuss-partnership">Discuss a partnership <ArrowUpRight /></a><a href="/donate">Make a donation <ArrowUpRight /></a></div>
      </div>
    </div>
    <div className="container editorial-wordmark">
      <div className="editorial-logo"><img loading="lazy" src="/images/punjabi-samvad-logo.jpeg" alt="Punjabi Samvad" /><span>Since<br /><strong>2004</strong></span></div>
      <div><h2>Punjabi Samvad</h2><p>Dialogue. Dignity. Change.</p></div>
    </div>
    <div className="editorial-divider"><i /><span>Rooted in Punjab · Working across India</span><i /></div>
    <div className="container editorial-footer-grid">
      <div className="editorial-intro"><span className="footer-kicker">Our purpose</span><p>Creating space for people to ask questions, access knowledge and participate in the issues that shape their lives.</p><div className="editorial-badges"><span><BadgeCheck />80G Approved</span><span><BadgeCheck />12AB</span><span><BadgeCheck />CSR00032253</span></div></div>
      <div className="editorial-links editorial-links-desktop"><span className="footer-kicker">Explore</span><a href="/about">About us</a><a href="/our-story">Our story</a><a href="/amit-bawa">Amit Bawa</a><a href="/leadership">About the president</a><a href="/supporters">Supporters</a><a href="/our-work">Our work</a><a href="/programmes">Programmes</a><a href="/skills-livelihoods">Skills &amp; livelihoods</a><a href="/p2e">Passport to Earning</a><a href="/kym">Know Your Money</a><a href="/impact">Impact</a><a href="/media-features">Media features</a><a href="/updates">News &amp; Updates</a><a href="/policies">Policies</a></div>
      <div className="editorial-links editorial-links-desktop"><span className="footer-kicker">Participate</span><a href="/donate">Donate</a><a href="/partners">Partnerships</a><a href="/get-involved">Volunteer &amp; intern</a><a href="/fund-a-programme">Fund a programme</a><a href="/support">Support us</a><a href="/transparency">Transparency</a><a href="/faq">FAQs</a></div>
      <details className="editorial-links editorial-disclosure">
        <summary><span className="footer-kicker">Explore</span><ChevronDown aria-hidden="true" /></summary>
        <div className="editorial-link-list"><a href="/about">About us</a><a href="/our-story">Our story</a><a href="/amit-bawa">Amit Bawa</a><a href="/leadership">About the president</a><a href="/supporters">Supporters</a><a href="/our-work">Our work</a><a href="/programmes">Programmes</a><a href="/skills-livelihoods">Skills &amp; livelihoods</a><a href="/p2e">Passport to Earning</a><a href="/kym">Know Your Money</a><a href="/impact">Impact</a><a href="/media-features">Media features</a><a href="/updates">News &amp; Updates</a><a href="/policies">Policies</a></div>
      </details>
      <details className="editorial-links editorial-disclosure">
        <summary><span className="footer-kicker">Participate</span><ChevronDown aria-hidden="true" /></summary>
        <div className="editorial-link-list"><a href="/donate">Donate</a><a href="/partners">Partnerships</a><a href="/get-involved">Volunteer &amp; intern</a><a href="/fund-a-programme">Fund a programme</a><a href="/support">Support us</a><a href="/transparency">Transparency</a><a href="/faq">FAQs</a></div>
      </details>
      <div className="editorial-contact"><span className="footer-kicker">Start a conversation</span><a href="mailto:punjabisamvadasr@gmail.com"><Mail /><span>punjabisamvadasr@gmail.com</span></a><a href="tel:+918728033911"><Phone /><span>+91 87280 33911</span></a><a href="https://maps.google.com/?q=293+Green+Avenue+Amritsar+Punjab+143001" target="_blank" rel="noreferrer"><MapPin /><span>293, Green Avenue<br />Amritsar, Punjab 143001</span></a><SocialLinks className="footer-social-links" /></div>
    </div>
    <div className="editorial-bottom"><div className="container"><span>© 2026 Punjabi Samvad <span className="editorial-credit-divider" aria-hidden="true">|</span> Website built by Jaykaran Sagar</span><div><a href="/policies">Policies</a><a href="/contact">Contact</a><a href="/transparency">Compliance</a></div></div></div>
  </footer>;
}
