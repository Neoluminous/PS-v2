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

const gurmukhiKeywordsBySlug: Record<string, string> = {
  "/": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਅੰਮ੍ਰਿਤਸਰ ਸਮਾਜਿਕ ਪ੍ਰਭਾਵ ਸਿੱਖਿਆ ਸਿਹਤ ਸੰਵਾਦ ਸਮਾਜ ਸੇਵਾ ਐਨਜੀਓ ngo amritsar punjab india home ਮੁੱਖ ਪੰਨਾ",
  about: "ਸਾਡੇ ਬਾਰੇ ਅਮਿਤ ਬਾਵਾ ਜੋਤੀ ਬਾਵਾ ਇਤਿਹਾਸ ਪੰਜਾਬੀ ਸੰਵਾਦ ਮਕਸਦ ਸੋਚ 2004 ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਅੰਮ੍ਰਿਤਸਰ ਸੰਵਾਦ ਸੰਸਥਾ who we are",
  "our-story": "ਸਾਡੀ ਕਹਾਣੀ ਇਤਿਹਾਸ ਖੂਹ ਬੋਲਦਾ ਹੈ 2004 ਅਮਿਤ ਬਾਵਾ ਜੋਤੀ ਬਾਵਾ ਤਿਰਹਾਈ ਉਮਰ ਸੰਘਰਸ਼ ਯਾਤਰਾ our story history",
  "amit-bawa": "ਅਮਿਤ ਬਾਵਾ ਸੰਸਥਾਪਕ ਸਮਾਜ ਸੇਵਕ ਥੀਏਟਰ ਕਲਾਕਾਰ ਲੇਖਕ ਪੰਜਾਬੀ ਸੰਵਾਦ amit bawa founder",
  leadership: "ਲੀਡਰਸ਼ਿਪ ਪ੍ਰਧਾਨ ਜੋਤੀ ਬਾਵਾ ਪਦਮ ਸ਼੍ਰੀ ਨਾਮਜ਼ਦਗੀ ਟੈਡਐਕਸ ਡਾਇਰੈਕਟਰ ਸਮਾਜ ਸੁਧਾਰਕ ਪ੍ਰੈਜ਼ੀਡੈਂਟ jyoti bawa president leadership padma shri tedx",
  supporters: "ਸਹਿਯੋਗੀ ਸਾਥੀ ਮਦਦਗਾਰ ਸਮਰਥਕ ਦਾਨੀ ਸੁਪੋਰਟਰਜ਼ supporters partners",
  transparency: "ਪਾਰਦਰਸ਼ਤਾ 80ਜੀ 12ਏ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਆਡਿਟ ਵਿੱਤੀ ਰਿਪੋਰਟ ਨੀਤੀਆਂ ਸਰਕਾਰੀ ਪ੍ਰਵਾਨਗੀ 80G 12A transparency audit compliance",
  "our-work": "ਸਾਡਾ ਕੰਮ ਖੇਤਰ ਔਰਤਾਂ ਕੁੜੀਆਂ ਨੌਜਵਾਨ ਮਾਨਸਿਕ ਸਿਹਤ ਮਹਾਵਾਰੀ ਸਵੱਛਤਾ ਨਸ਼ਾ ਵਿਰੋਧੀ ਏਡਜ਼ ਕਲਾ ਸੱਭਿਆਚਾਰ focus areas women girls education mental health drug abuse",
  programmes: "ਪ੍ਰੋਗਰਾਮ ਐਮਪਾਵਰ ਉਜਾਸ ਖੂਹ ਬੋਲਦਾ ਹੈ ਕਿੱਤਾਮੁਖੀ ਹੁਨਰ ਰੋਜ਼ੀ ਰੋਟੀ ਪਾਸਪੋਰਟ ਟੂ ਅਰਨਿੰਗ ਨੋ ਯੂਅਰ ਮਨੀ ਏਡਜ਼ ਜਾਗਰੂਕਤਾ ਨਸ਼ਾ ਵਿਰੋਧੀ ਵਰਕਸ਼ਾਪਾਂ mpower ujaas anti drug programmes",
  "skills-livelihoods": "ਹੁਨਰ ਅਤੇ ਰੋਜ਼ੀ ਰੋਟੀ ਕਿੱਤਾਮੁਖੀ ਸਿਖਲਾਈ ਸਾਬਣ ਬਣਾਉਣਾ ਮਸਾਲੇ ਫੁਲਕਾਰੀ ਕਢਾਈ ਰੋਜ਼ਗਾਰ ਆਮਦਨ ਸੀਐਮਐਸ ਫਾਊਂਡੇਸ਼ਨ ਜੋਤੀ ਬਾਵਾ vocational skills livelihood soap masala phulkari cms foundation",
  p2e: "ਪਾਸਪੋਰਟ ਟੂ ਅਰਨਿੰਗ ਡਿਜੀਟਲ ਸਿੱਖਿਆ ਯੂਨੀਸੇਫ ਨੌਜਵਾਨ ਡਿਜੀਟਲ ਹੁਨਰ ਸਰਟੀਫਿਕੇਟ ਨੌਕਰੀਆਂ passport to earning unicef digital learning youth jobs",
  kym: "ਨੋ ਯੂਅਰ ਮਨੀ ਵਿੱਤੀ ਸਾਖਰਤਾ ਐਚਡੀਐਫਸੀ ਪੈਸੇ ਦੀ ਸਮਝ ਨਿਵੇਸ਼ ਬੱਚਤ ਬੈਂਕਿੰਗ know your money hdfc financial literacy investment savings",
  impact: "ਸਾਡਾ ਪ੍ਰਭਾਵ ਅੰਕੜੇ 1 ਲੱਖ 52 ਹਜ਼ਾਰ 15 ਹਜ਼ਾਰ ਖੂਹ ਬੋਲਦਾ ਹੈ 11 ਲੱਖ ਲੋਕ ਨਤੀਜੇ ਅਸਰ impact numbers reach statistics",
  gallery: "ਗੈਲਰੀ ਤਸਵੀਰਾਂ ਫੋਟੋਆਂ ਵਰਕਸ਼ਾਪਾਂ ਸਮਾਗਮ ਯਾਦਾਂ gallery photos pictures workshops events",
  "media-features": "ਮੀਡੀਆ ਖ਼ਬਰਾਂ ਅਖ਼ਬਾਰ ਇੰਟਰਵਿਊ ਕਵਰੇਜ ਪ੍ਰੈੱਸ media news coverage press articles",
  updates: "ਖ਼ਬਰਾਂ ਅਤੇ ਅੱਪਡੇਟ ਤਾਜ਼ਾ ਜਾਣਕਾਰੀ ਸਰਗਰਮੀਆਂ ਪ੍ਰੋਗਰਾਮ ਨਵੀਆਂ ਗਤੀਵਿਧੀਆਂ news updates latest activities",
  partners: "ਸਹਿਯੋਗੀ ਭਾਈਵਾਲੀ ਸੰਸਥਾਵਾਂ ਯੂਨੀਵਰਸਿਟੀਆਂ ਸਕੂਲ ਸਰਕਾਰ ਆਦਿਤਿਆ ਬਿਰਲਾ ਟਰੱਸਟ ਐਚਡੀਐਫਸੀ ਯੂਨੀਸੇਫ ਸੀਐਮਐਸ ਫਾਊਂਡੇਸ਼ਨ partners collaborations",
  "csr-partnerships": "ਸੀਐਸਆਰ ਭਾਈਵਾਲੀ ਕਾਰਪੋਰੇਟ ਸਮਾਜਿਕ ਜ਼ਿੰਮੇਵਾਰੀ ਕੰਪਨੀਆਂ ਪ੍ਰੋਜੈਕਟ ਫੰਡਿੰਗ csr partnerships corporate funding",
  "discuss-partnership": "ਸਾਂਝੇਦਾਰੀ ਬਾਰੇ ਗੱਲਬਾਤ ਕਰੋ ਮੀਟਿੰਗ ਸੰਪਰਕ ਪ੍ਰਸਤਾਵ ਭਾਈਵਾਲੀ discuss partnership collaboration meeting",
  "get-involved": "ਸ਼ਾਮਲ ਹੋਵੋ ਵਲੰਟੀਅਰ ਇੰਟਰਨਸ਼ਿਪ ਸਹਿਯੋਗ ਦਾਨ get involved volunteer intern",
  "fund-a-programme": "ਪ੍ਰੋਗਰਾਮ ਫੰਡ ਕਰੋ ਸਪਾਂਸਰ ਸਕਾਲਰਸ਼ਿਪ ਵਿੱਤੀ ਸਹਾਇਤਾ fund a programme sponsor",
  support: "ਸਾਡੇ ਕੰਮ ਦਾ ਸਮਰਥਨ ਕਰੋ ਸਹਿਯੋਗ ਮਦਦ ਯੋਗਦਾਨ support our work donate help",
  donate: "ਦਾਨ ਕਰੋ ਦਾਨ ਆਨਲਾਈਨ ਦਾਨ 80ਜੀ ਟੈਕਸ ਛੋਟ ਯੋਗਦਾਨ ਮਦਦ ਫੰਡ donate contribution 80G tax exemption payment",
  faq: "ਅਕਸਰ ਪੁੱਛੇ ਜਾਂਦੇ ਸਵਾਲ ਜਵਾਬ ਜਾਣਕਾਰੀ ਸ਼ੰਕੇ faqs frequently asked questions",
  contact: "ਸੰਪਰਕ ਕਰੋ ਪਤਾ ਫੋਨ ਈਮੇਲ ਅੰਮ੍ਰਿਤਸਰ ਦਫ਼ਤਰ ਸੁਨੇਹਾ contact us address amritsar email phone office",
  policies: "ਨੀਤੀਆਂ ਨਿਯਮ ਸੁਰੱਖਿਆ ਬਾਲ ਸੁਰੱਖਿਆ ਫੰਡਿੰਗ ਗਵਰਨੈਂਸ ਪਾਰਦਰਸ਼ਤਾ policies governance safeguarding compliance",
};

export const searchEntries: SearchEntry[] = [
  {
    title: "Punjabi Samvad",
    description: "Dialogue-led social impact across education, health, culture and community action since 2004.",
    href: "/",
    category: "Home",
    keywords: `ngo amritsar punjab india women youth social impact ${gurmukhiKeywordsBySlug["/"]}`,
  },
  ...Object.entries(pages).map(([slug, page]) => ({
    title: page.title,
    description: page.intro,
    href: `/${slug}`,
    category: categoryBySlug[slug] ?? "Punjabi Samvad",
    keywords: [
      page.eyebrow,
      ...page.sections.flatMap((section) => [section.title, section.body, ...(section.bullets ?? [])]),
      gurmukhiKeywordsBySlug[slug] ?? "",
    ].join(" "),
  })),
  {
    title: "Policies",
    description: "Governance, safeguarding, finance, data, fieldwork and partnership policies.",
    href: "/policies",
    category: "Policies",
    keywords: `governance accountability compliance policy ${gurmukhiKeywordsBySlug["policies"]}`,
  },
  ...policies.map((policy) => ({
    title: policy.title,
    description: policy.summary,
    href: `/policies/${policy.slug}`,
    category: "Policy",
    keywords: `${policy.category} ${policy.shortTitle} ${policy.owner} ਨੀਤੀ ਪਾਲਿਸੀ ਨਿਯਮ ਸੁਰੱਖਿਆ ${policy.sections.map(s => `${s.title} ${(s.paragraphs || []).join(' ')} ${(s.bullets || []).join(' ')}`).join(' ')}`,
  })),
];

