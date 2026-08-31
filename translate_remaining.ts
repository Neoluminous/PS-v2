import fs from 'fs';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const filesToUpdate = [
  {
    path: 'src/components/PoliciesPage.tsx',
    strings: [
      "These policies guide how Punjabi Samvad operates, protects individuals and manages resources. The policies and statutory registers depend on the organisation's current structure and applicable law. Contact us for the current signed or approved document.",
      "Report a concern",
      "Use these contacts for a safeguarding, conduct, fraud, privacy or workplace concern. Call police or emergency services if someone faces immediate danger."
    ]
  },
  {
    path: 'src/components/PolicyDetailPage.tsx',
    strings: [
      "Version",
      "Published",
      "Review by",
      "Owner",
      "On this page",
      "Previous policy",
      "Next policy"
    ]
  },
  {
    path: 'src/components/SiteHeader.tsx',
    strings: [
      "Search Punjabi Samvad",
      "Find programmes, focus areas, impact information, policies and ways to take part."
    ]
  },
  {
    path: 'src/components/GalleryPage.tsx',
    strings: [
      "Work seen up close.",
      "Programmes, performances, public-health campaigns and community gatherings documented across Punjabi Samvad's work.",
      "Learn how the work is organised"
    ]
  },
  {
    path: 'src/components/GetInvolvedPage.tsx',
    strings: [
      "Internships and volunteering with Punjabi Samvad.",
      "Take on a focused assignment, work with people outside your usual academic setting and turn what you know into something a community programme can use.",
      "Experience with a purpose",
      "Defined work, practical exposure and a contribution you can explain",
      "Students have joined us from",
      "Experience you can use after the placement ends.",
      "An internship with Punjabi Samvad gives you a close look at the decisions behind public-interest work: how an issue is researched, how information is adapted for different audiences, how an activity is organised and how the work is documented afterwards.",
      "Your assignment is shaped around current programme needs and the skills you bring. You may research, write, prepare campaign material, support an event, organise records or help with digital communication. The scope is agreed before you begin, so you know what you are responsible for and what you should learn from it.",
      "Work that connects study with practice.",
      "Assignments are matched to the student's background and the work Punjabi Samvad is undertaking at the time.",
      "Featured two students who completed internships with us.",
      "Vinit and Pritish each completed a 60-hour Literature Promotion Internship. Their assignments show how one role can combine subject knowledge, communication and direct exposure to public-interest work.",
      "Vinit brought a computer-science perspective to a role centred on literature, language and reading culture. He supported literary campaigns and awareness programmes, worked with students and community members, and helped use literature as a starting point for discussion about education, culture and social concerns.",
      "His placement also included digital-awareness training on the responsible use of AI and ChatGPT for education, research, communication and community outreach. It gave him room to connect an emerging technical field with the human judgement needed in public-facing work.",
      "60-hour placement",
      "Literary and awareness campaigns",
      "Responsible AI for outreach",
      "Pritish worked across literary promotion, student engagement and community outreach. He assisted with campaigns that encouraged reading and language, supported awareness activity and took part in conversations that used literature to make educational and social subjects easier to discuss.",
      "He also participated in digital-awareness training focused on appropriate use of AI and ChatGPT. The placement asked him to communicate with different groups, adapt to work outside a university setting and understand how cultural activity can support wider social-awareness goals.",
      "Student and community engagement",
      "Digital-awareness training",
      "Build experience that belongs on more than a résumé.",
      "Choose a problem you want to understand and bring a skill you want to test. If a suitable placement is available, you will receive a clear scope of work connected to a current programme. You can leave with a stronger grasp of NGO work, practical examples to discuss in interviews and a better sense of where your abilities can be useful.",
      "Help us find the right fit",
      "Your university, course and current year",
      "Your preferred dates and available hours",
      "The issues or programme areas you want to explore",
      "The skills you can contribute and want to practise",
      "Your CV and any university requirements",
      "Your time and skills can change someone's life.",
      "You may be able to support an event, a training session, research, health education, the arts, communication or programme planning. Tell us what you do well and how much time you can offer; we will respond when that experience matches a current need."
    ]
  },
  {
    path: 'src/components/SearchPage.tsx',
    strings: [
      "What are you looking for?",
      "Search programmes, public-health work, impact, people, policies and ways to participate.",
      "Search "
    ]
  },
  {
    path: 'src/pages/PolicyIndexPage.tsx',
    strings: [
      "Policies",
      "Standards that guide how Punjabi Samvad works, protects people and uses resources."
    ]
  },
  {
    path: 'src/pages/NotFoundPage.tsx',
    strings: [
      "Page not found",
      "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
    ]
  },
  {
    path: 'src/pages/Home.tsx',
    strings: [
      "12AB Registered ",
      "80G "
    ]
  }
];

async function translate() {
  const allStrings = new Set<string>();
  filesToUpdate.forEach(f => f.strings.forEach(s => allStrings.add(s)));
  
  let languageContext = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');
  
  const stringsToTranslate = Array.from(allStrings).filter(s => !languageContext.includes(`en: "${s.replace(/"/g, '\\"')}"`));
  
  console.log(`Need to translate ${stringsToTranslate.length} strings.`);
  
  const batchSize = 10;
  const translations: Record<string, string> = {};

  for (let i = 0; i < stringsToTranslate.length; i += batchSize) {
    const batch = stringsToTranslate.slice(i, i + batchSize);
    console.log(`Translating batch ${i / batchSize + 1}...`);
    
    const prompt = `Translate the following English strings to Punjabi (Gurmukhi script).
Respond ONLY with a valid JSON object where the keys are the exact English strings provided, and the values are the Punjabi translations. Do not include markdown blocks.

Strings to translate:
${JSON.stringify(batch, null, 2)}`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: prompt,
      });
      
      let responseText = response.text || '';
      responseText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
      const batchTranslations = JSON.parse(responseText);
      
      for (const key in batchTranslations) {
        translations[key] = batchTranslations[key];
      }
    } catch (e) {
      console.error('Error translating batch:', e);
    }
    
    // small delay
    await new Promise(r => setTimeout(r, 4000));
  }

  // Inject into context
  for (const eng of Object.keys(translations)) {
    const pa = translations[eng].replace(/"/g, '\\"');
    const safeEng = eng.replace(/"/g, '\\"');
    
    const blockRegex = new RegExp(`"${safeEng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}":\\s*{\\s*en:\\s*"${safeEng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}",\\s*pa:\\s*"${safeEng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"\\s*}`, 'g');
    if (!languageContext.match(blockRegex)) {
      const insertionMarker = '\n};\n\nconst LanguageContext = createContext';
      const insertionIndex = languageContext.indexOf(insertionMarker);
      if (insertionIndex !== -1) {
        languageContext = languageContext.slice(0, insertionIndex) + `,\n  "${safeEng}": {\n    en: "${safeEng}",\n    pa: "${pa}"\n  }` + languageContext.slice(insertionIndex);
      }
    }
  }
  
  fs.writeFileSync('src/context/LanguageContext.tsx', languageContext);
  console.log("Updated LanguageContext.tsx");
  
  // Replace in files
  for (const f of filesToUpdate) {
    let content = fs.readFileSync(f.path, 'utf8');
    
    // Check if the component imports useLanguage
    if (!content.includes('useLanguage')) {
      const lastImportIndex = content.lastIndexOf('import ');
      if (lastImportIndex !== -1) {
        const endOfImport = content.indexOf('\n', lastImportIndex);
        content = content.slice(0, endOfImport) + '\nimport { useLanguage } from "../context/LanguageContext";' + content.slice(endOfImport);
      } else {
        content = 'import { useLanguage } from "../context/LanguageContext";\n' + content;
      }
      
      // Inject const { t } = useLanguage();
      // Find the main component function.
      const match = content.match(/export default function \w+\(.*\) \{/);
      if (match) {
        const index = match.index! + match[0].length;
        content = content.slice(0, index) + '\n  const { t } = useLanguage();' + content.slice(index);
      } else {
        const match2 = content.match(/function \w+\(.*\) \{/);
        if (match2) {
            const index = match2.index! + match2[0].length;
            content = content.slice(0, index) + '\n  const { t } = useLanguage();' + content.slice(index);
        }
      }
    } else {
      if (!content.includes('const { t }')) {
         if (content.includes('const { language, toggleLanguage } = useLanguage();')) {
            content = content.replace('const { language, toggleLanguage } = useLanguage();', 'const { language, toggleLanguage, t } = useLanguage();');
         } else if (content.includes('const { toggleLanguage } = useLanguage();')) {
            content = content.replace('const { toggleLanguage } = useLanguage();', 'const { toggleLanguage, t } = useLanguage();');
         } else {
            // we have to inject it
            const match = content.match(/export default function \w+\(.*\) \{/);
            if (match) {
              const index = match.index! + match[0].length;
              content = content.slice(0, index) + '\n  const { t } = useLanguage();' + content.slice(index);
            }
         }
      }
    }
    
    for (const str of f.strings) {
      if (str === "Work seen up close.") {
        content = content.replace(/<h2>Work seen up close.<\/h2>/g, '<h2>{t("Work seen up close.")}</h2>');
      } else if (str === "Programmes, performances, public-health campaigns and community gatherings documented across Punjabi Samvad's work.") {
        content = content.replace(/<p>Programmes, performances, public-health campaigns and community gatherings documented across Punjabi Samvad&apos;s work.<\/p>/g, '<p>{t("Programmes, performances, public-health campaigns and community gatherings documented across Punjabi Samvad\'s work.")}</p>');
      } else if (str === "Learn how the work is organised") {
        content = content.replace(/<span>Learn how the work is organised<\/span>/g, '<span>{t("Learn how the work is organised")}</span>');
      } else if (str === "These policies guide how Punjabi Samvad operates, protects individuals and manages resources. The policies and statutory registers depend on the organisation's current structure and applicable law. Contact us for the current signed or approved document.") {
        content = content.replace(/<p>These policies guide how Punjabi Samvad operates, protects individuals and manages resources. The policies and statutory registers depend on the organisation&apos;s current structure and applicable law. Contact us for the current signed or approved document.<\/p>/g, '<p>{t("These policies guide how Punjabi Samvad operates, protects individuals and manages resources. The policies and statutory registers depend on the organisation\'s current structure and applicable law. Contact us for the current signed or approved document.")}</p>');
      } else if (str === "Search ") {
        content = content.replace(/Search <ArrowRight \/>/g, '{t("Search ")} <ArrowRight />');
      } else if (str === "12AB Registered ") {
        content = content.replace(/12AB Registered <strong>Approved<\/strong>/g, '{t("12AB Registered ")}<strong>{t("Approved")}</strong>');
      } else if (str === "80G ") {
        content = content.replace(/80G <strong>Approved<\/strong>/g, '{t("80G ")}<strong>{t("Approved")}</strong>');
      } else if (str === "Version") {
        content = content.replace(/<dt>Version<\/dt>/g, '<dt>{t("Version")}</dt>');
      } else if (str === "Published") {
        content = content.replace(/<dt>Published<\/dt>/g, '<dt>{t("Published")}</dt>');
      } else if (str === "Review by") {
        content = content.replace(/<dt>Review by<\/dt>/g, '<dt>{t("Review by")}</dt>');
      } else if (str === "Owner") {
        content = content.replace(/<dt>Owner<\/dt>/g, '<dt>{t("Owner")}</dt>');
      } else if (str === "On this page") {
        content = content.replace(/<strong>On this page<\/strong>/g, '<strong>{t("On this page")}</strong>');
      } else if (str === "Previous policy") {
        content = content.replace(/<small>Previous policy<\/small>/g, '<small>{t("Previous policy")}</small>');
      } else if (str === "Next policy") {
        content = content.replace(/<small>Next policy<\/small>/g, '<small>{t("Next policy")}</small>');
      } else if (str === "Students have joined us from") {
        content = content.replace(/<strong>Students have joined us from<\/strong>/g, '<strong>{t("Students have joined us from")}</strong>');
      } else if (str === "Help us find the right fit") {
        content = content.replace(/<h3>Help us find the right fit<\/h3>/g, '<h3>{t("Help us find the right fit")}</h3>');
      } else {
        const safeStr = str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        content = content.replace(new RegExp(`<h1>${safeStr}</h1>`, 'g'), `<h1>{t("${str}")}</h1>`);
        content = content.replace(new RegExp(`<h2>${safeStr}</h2>`, 'g'), `<h2>{t("${str}")}</h2>`);
        content = content.replace(new RegExp(`<h3>${safeStr}</h3>`, 'g'), `<h3>{t("${str}")}</h3>`);
        content = content.replace(new RegExp(`<p>${safeStr}</p>`, 'g'), `<p>{t("${str}")}</p>`);
        content = content.replace(new RegExp(`<span>${safeStr}</span>`, 'g'), `<span>{t("${str}")}</span>`);
        content = content.replace(new RegExp(`<li>${safeStr}</li>`, 'g'), `<li>{t("${str}")}</li>`);
      }
    }
    
    // Specific fixes
    content = content.replace(/<strong>Experience with a purpose<\/strong>/g, '<strong>{t("Experience with a purpose")}</strong>');
    content = content.replace(/<small>Defined work, practical exposure and a contribution you can explain<\/small>/g, '<small>{t("Defined work, practical exposure and a contribution you can explain")}</small>');
    
    fs.writeFileSync(f.path, content);
    console.log(`Updated ${f.path}`);
  }
}

translate();
