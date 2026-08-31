import fs from 'fs';

const filesToUpdate = [
  {
    path: 'src/components/DonatePage.tsx',
    strings: [
      "Payment is completed on Razorpay. Punjabi Samvad does not collect your card details on this website.",
      "Bank account",
      "Account name",
      "Punjabi Samvad",
      "Account number",
      "IFSC",
      "Branch",
      "Account type",
      "Current"
    ]
  },
  {
    path: 'src/components/FacebookUpdates.tsx',
    strings: [
      "Latest news & updates.",
      "Recent activities and announcements from Punjabi Samvad.",
      "Official Facebook updates"
    ]
  },
  {
    path: 'src/components/MediaFeaturesPage.tsx',
    strings: [
      "Work seen, shared and remembered.",
      "Photographs, programme material and coverage from Punjabi Samvad's work across health, education, culture and community action.",
      "Candle in the Wind",
      "Jyoti Bawa draws on two decades of work with women, children and communities to examine old age homes, menstrual awareness, mental health and substance abuse. The book was launched at the Sharjah International Book Fair in 2025."
    ]
  },
  {
    path: 'src/components/PartnersPage.tsx',
    strings: [
      "Shared work, clearly defined",
      "Each collaboration brings a different kind of strength: public-health knowledge, academic involvement, community access, specialist experience or programme support.",
      "Work with Punjabi Samvad"
    ]
  },
  {
    path: 'src/components/PoliciesPage.tsx',
    strings: [
      "Our clear rules for responsible work",
      "These policies cover governance, safeguarding, people, finance, data, fieldwork and partnerships across Punjabi Samvad.",
      "Website version",
      "Scheduled review",
      "These pages state Punjabi Samvad's public standards. Committee orders, approval limits and statutory registers depend on the organisation's current structure and applicable law. Contact us for the current signed or approved document."
    ]
  }
];

let languageContext = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

const missingStrings = new Set<string>();
filesToUpdate.forEach(f => f.strings.forEach(s => missingStrings.add(s)));

for (const eng of Array.from(missingStrings)) {
  const safeEng = eng.replace(/"/g, '\\"');
  const pa = eng; // Just use English for now if not translated
  
  const blockRegex = new RegExp(`"${safeEng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}":\\s*{\\s*en:\\s*"${safeEng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}",\\s*pa:\\s*".*?"\\s*}`, 'g');
  if (!languageContext.match(blockRegex)) {
    const insertionMarker = '\n};\n\nconst LanguageContext = createContext';
    const insertionIndex = languageContext.indexOf(insertionMarker);
    if (insertionIndex !== -1) {
      languageContext = languageContext.slice(0, insertionIndex) + `,\n  "${safeEng}": {\n    en: "${safeEng}",\n    pa: "${pa}"\n  }` + languageContext.slice(insertionIndex);
    }
  }
}

fs.writeFileSync('src/context/LanguageContext.tsx', languageContext);

for (const f of filesToUpdate) {
  let content = fs.readFileSync(f.path, 'utf8');
  
  if (!content.includes('useLanguage')) {
    const lastImportIndex = content.lastIndexOf('import ');
    if (lastImportIndex !== -1) {
      const endOfImport = content.indexOf('\n', lastImportIndex);
      content = content.slice(0, endOfImport) + '\nimport { useLanguage } from "../context/LanguageContext";' + content.slice(endOfImport);
    } else {
      content = 'import { useLanguage } from "../context/LanguageContext";\n' + content;
    }
    
    const match = content.match(/export default function \w+\(.*\) \{/);
    if (match) {
      const index = match.index! + match[0].length;
      content = content.slice(0, index) + '\n  const { t } = useLanguage();' + content.slice(index);
    }
  } else {
    if (!content.includes('const { t }')) {
       if (content.includes('const { language, toggleLanguage } = useLanguage();')) {
          content = content.replace('const { language, toggleLanguage } = useLanguage();', 'const { language, toggleLanguage, t } = useLanguage();');
       } else if (content.includes('const { toggleLanguage } = useLanguage();')) {
          content = content.replace('const { toggleLanguage } = useLanguage();', 'const { toggleLanguage, t } = useLanguage();');
       }
    }
  }
  
  for (const str of f.strings) {
    if (str === "Punjabi Samvad" || str === "Current") {
      content = content.replace(`<dd>${str}</dd>`, `<dd>{t("${str}")}</dd>`);
    } else if (str === "Latest news & updates.") {
      content = content.replace(`<h2>Latest news &amp; updates.</h2>`, `<h2>{t("${str}")}</h2>`);
      content = content.replace(`<h2 id="facebook-updates-title">Latest news &amp; updates.</h2>`, `<h2 id="facebook-updates-title">{t("${str}")}</h2>`);
    } else if (str === "Photographs, programme material and coverage from Punjabi Samvad's work across health, education, culture and community action.") {
      content = content.replace(`<p>Photographs, programme material and coverage from Punjabi Samvad&apos;s work across health, education, culture and community action.</p>`, `<p>{t("${str}")}</p>`);
    } else if (str === "These pages state Punjabi Samvad's public standards. Committee orders, approval limits and statutory registers depend on the organisation's current structure and applicable law. Contact us for the current signed or approved document.") {
      content = content.replace(`<p>These pages state Punjabi Samvad&apos;s public standards. Committee orders, approval limits and statutory registers depend on the organisation&apos;s current structure and applicable law. Contact us for the current signed or approved document.</p>`, `<p>{t("${str}")}</p>`);
    } else {
      const safeStr = str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      content = content.replace(new RegExp(`<h1>${safeStr}</h1>`, 'g'), `<h1>{t("${str}")}</h1>`);
      content = content.replace(new RegExp(`<h2>${safeStr}</h2>`, 'g'), `<h2>{t("${str}")}</h2>`);
      content = content.replace(new RegExp(`<h3>${safeStr}</h3>`, 'g'), `<h3>{t("${str}")}</h3>`);
      content = content.replace(new RegExp(`<p>${safeStr}</p>`, 'g'), `<p>{t("${str}")}</p>`);
      content = content.replace(new RegExp(`<span>${safeStr}</span>`, 'g'), `<span>{t("${str}")}</span>`);
      content = content.replace(new RegExp(`<li>${safeStr}</li>`, 'g'), `<li>{t("${str}")}</li>`);
      content = content.replace(new RegExp(`<small>${safeStr}</small>`, 'g'), `<small>{t("${str}")}</small>`);
      content = content.replace(new RegExp(`<dt>${safeStr}</dt>`, 'g'), `<dt>{t("${str}")}</dt>`);
    }
  }
  
  // Custom manual replacements for anything missed
  if (f.path === 'src/components/DonatePage.tsx') {
    content = content.replace(/Payment is completed on Razorpay\. Punjabi Samvad does not collect your card details on this website\./g, '{t("Payment is completed on Razorpay. Punjabi Samvad does not collect your card details on this website.")}');
  }
  fs.writeFileSync(f.path, content);
}
console.log("Done");
