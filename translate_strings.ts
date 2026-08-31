import { pages } from './src/content/pages';
import fs from 'fs';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function translateStrings() {
  const stringsToTranslate = new Set<string>();
  
  // Extract all strings from pages
  for (const slug in pages) {
    const page = pages[slug];
    if (page.eyebrow) stringsToTranslate.add(page.eyebrow);
    if (page.title) stringsToTranslate.add(page.title);
    if (page.intro) stringsToTranslate.add(page.intro);
    if (page.sections) {
      for (const section of page.sections) {
        if (section.title) stringsToTranslate.add(section.title);
        if (section.body) {
          section.body.split('\n').forEach((line: string) => stringsToTranslate.add(line));
        }
        if (section.stat) stringsToTranslate.add(section.stat);
        if (section.bullets) {
          section.bullets.forEach((b: string) => stringsToTranslate.add(b));
        }
      }
    }
    if (page.cta) {
      if (page.cta.label) stringsToTranslate.add(page.cta.label);
    }
  }

  stringsToTranslate.add("Punjabi Samvad creates space for people to ask questions, share experience and participate in the issues that affect their lives.");
  stringsToTranslate.add("Public-health resource");
  stringsToTranslate.add("Private HIV self-risk assessment");
  stringsToTranslate.add("The national self-risk assessment gives people a private way to understand potential HIV and STI risk, find reliable information and take the next step towards testing or treatment. Personal details do not need to be disclosed to Punjabi Samvad.");
  stringsToTranslate.add("Scan the code in the official campaign artwork, visit Breakfree India, or call the national AIDS helpline at 1097.");
  stringsToTranslate.add("Open Breakfree India");
  stringsToTranslate.add("Ready to start a conversation?");
  stringsToTranslate.add("Let's create meaningful change together.");

  const currentContext = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');
  
  // Exclude strings that are already in the context
  const uniqueStrings = Array.from(stringsToTranslate).filter(s => 
    s && s.trim().length > 0 && !currentContext.includes(`en: "${s.replace(/"/g, '\\"')}"`)
  );
  
  console.log(`Found ${uniqueStrings.length} unique new strings to translate.`);

  if (uniqueStrings.length === 0) {
    console.log("Nothing to translate!");
    return;
  }

  const batchSize = 25;
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
        model: 'gemini-3.6-flash',
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
  } else {
    console.log('Failed to find insertion point in LanguageContext.tsx');
  }
}

translateStrings();
