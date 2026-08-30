import { pages } from "./pages";
import { policies } from "./policies";

export type SearchEntry = {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords: string;
};

const categoryBySlug: Record<string, string> = {
  about: "About", "our-story": "About", "amit-bawa": "About", leadership: "About", supporters: "About", transparency: "About",
  "our-work": "Our work", programmes: "Our work", "skills-livelihoods": "Our work", p2e: "Programme", kym: "Programme", impact: "Our work", gallery: "Our work", "media-features": "Media", updates: "News",
  partners: "Partnerships", "csr-partnerships": "Partnerships", "discuss-partnership": "Partnerships",
  "get-involved": "Get involved", "fund-a-programme": "Get involved", support: "Get involved", donate: "Get involved", faq: "Information", contact: "Information",
};

export const searchEntries: SearchEntry[] = [
  { title: "Punjabi Samvad", description: "Dialogue-led social impact across education, health, culture and community action since 2004.", href: "/", category: "Home", keywords: "ngo amritsar punjab india women youth social impact" },
  ...Object.entries(pages).map(([slug, page]) => ({
    title: page.title,
    description: page.intro,
    href: `/${slug}`,
    category: categoryBySlug[slug] ?? "Punjabi Samvad",
    keywords: [page.eyebrow, ...page.sections.flatMap((section) => [section.title, section.body, ...(section.bullets ?? [])])].join(" "),
  })),
  { title: "Policies", description: "Governance, safeguarding, finance, data, fieldwork and partnership policies.", href: "/policies", category: "Policies", keywords: "governance accountability compliance policy" },
  ...policies.map((policy) => ({ title: policy.title, description: policy.summary, href: `/policies/${policy.slug}`, category: "Policy", keywords: `${policy.category} ${policy.shortTitle}` })),
];
