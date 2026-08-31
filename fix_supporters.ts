import fs from 'fs';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function fixSupporters() {
  const supportersText = `
"Gireesh Damodaran",
"Corporate Strategist, Founder & CEO, GPNP PROSPERO",
"Gireesh Damodaran is a corporate strategist, entrepreneur and founder and CEO of GPNP PROSPERO Corporate Strategists. An alumnus of IIM Bangalore, he has worked across strategic planning, project development and business structuring. Based in Dubai, he brings an international perspective to his work.",
"For Punjabi Samvad, Gireesh helps shape projects and initiatives from concept to execution. He contributes to project design, strategic planning, business models and institutional development.",
"His work helps the organisation set clearer goals, develop sound partnerships and plan for long-term social impact.",
"Mandeep Singh",
"Chartered Accountant, Vipul Mandeep Arora & Associates",
"Mandeep Singh is a Chartered Accountant with Vipul Mandeep Arora & Associates.",
"He provides financial support to Punjabi Samvad and helps the organisation fund scholarships for students who need assistance to continue their education.",
"Dr. Gurbilas P. Singh",
"Medical Professional, Supporter of Punjabi Samvad",
"Dr. Gurbilas P. Singh is a medical professional and a supporter of Punjabi Samvad’s work across education, health, awareness and community welfare.",
"He supports the organisation beyond any single programme, helping Punjabi Samvad sustain its community work and take new initiatives forward.",
"Jasmine Bawa",
"Lifetime Member, Programme & Event Support",
"Jasmine Bawa is a lifetime member of Punjabi Samvad. She anchors events and helps the organisation develop project ideas and proposals.",
"She brings practical support to both planning and public programmes, helping the team prepare projects and communicate them clearly.",
"Sukhpal Singh",
"Writer, Education Scholarship Supporter",
"Sukhpal Singh is a writer who supports Punjabi Samvad’s education scholarship work through donations.",
"His contribution helps students continue their studies when financial circumstances might otherwise interrupt their education.",
"Dr Baljit Singh Chahal",
"Veterinary Doctor, Education Scholarship Supporter",
"Dr Baljit Singh Chahal is a veterinary doctor and a supporter of Punjabi Samvad’s education scholarship work.",
"His donations help students meet education costs and continue working towards their academic goals.",
"Raghav Seth",
"Education Scholarship Supporter",
"Raghav Seth supports Punjabi Samvad’s education scholarships through donations.",
"His contribution gives students practical financial support so they can remain in education and pursue their studies."
  `.trim().split('\n').map(s => s.replace(/^"|"$/g, '').replace(/\\"/g, '"').replace(/,$/g, ''));

  const currentContext = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

  // Exclude strings that are already in the context
  const uniqueStrings = supportersText.filter(s => 
    s && s.trim().length > 0 && !currentContext.includes(`en: "${s.replace(/"/g, '\\"')}"`)
  );

  console.log(`Found ${uniqueStrings.length} unique new strings to translate.`);

  if (uniqueStrings.length === 0) return;

  const batchSize = 10;
  const translations: Record<string, string> = {};

  for (let i = 0; i < uniqueStrings.length; i += batchSize) {
    const batch = uniqueStrings.slice(i, i + batchSize);
    console.log(`Translating batch ${i / batchSize + 1}...`);
    
    const prompt = `Translate the following English strings to Punjabi (Gurmukhi script).
Respond ONLY with a valid JSON object where the keys are the exact English strings provided, and the values are the Punjabi translations. Do not include markdown blocks.

Strings to translate:
${JSON.stringify(batch, null, 2)}`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
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
  }

  // Create the new translations block
  const newTranslationsStr = uniqueStrings.map(eng => {
    const pa = translations[eng] ? translations[eng].replace(/"/g, '\\"') : eng.replace(/"/g, '\\"');
    return `  "${eng.replace(/"/g, '\\"')}": {\n    en: "${eng.replace(/"/g, '\\"')}",\n    pa: "${pa}"\n  }`;
  }).join(',\n');

  const insertionMarker = '\n};\n\nconst LanguageContext = createContext';
  const insertionIndex = currentContext.indexOf(insertionMarker);
  
  if (insertionIndex !== -1) {
    const updatedContext = currentContext.slice(0, insertionIndex) + ',\n' + newTranslationsStr + currentContext.slice(insertionIndex);
    fs.writeFileSync('src/context/LanguageContext.tsx', updatedContext);
    console.log('Successfully updated LanguageContext.tsx with translations!');
  }
}

fixSupporters();
