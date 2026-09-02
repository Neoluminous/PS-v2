import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { useLanguage } from "../context/LanguageContext";

const socialProfiles = [
  { label: "Punjabi Samvad on Instagram", href: "https://www.instagram.com/punjabisamvad/?hl=en", Icon: FaInstagram },
  { label: "Jyoti Bawa on LinkedIn", href: "https://www.linkedin.com/in/jyoti-bawa/", Icon: FaLinkedinIn },
  { label: "Punjabi Samvad on YouTube", href: "https://www.youtube.com/channel/UCINOprEIH7jiVkFn8OeWqIw", Icon: FaYoutube },
  { label: "Punjabi Samvad videos on Facebook", href: "https://www.facebook.com/PunjabiSamvad999/videos/", Icon: FaFacebookF },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  return <div className={`social-links ${className}`.trim()} aria-label={t("Punjabi Samvad social media")}>
    {socialProfiles.map(({ label, href, Icon }) => <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={t(label)} title={t(label)}><Icon aria-hidden="true" /></a>)}
  </div>;
}
