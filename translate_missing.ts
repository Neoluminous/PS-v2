import fs from 'fs';
import { GoogleGenAI, Type } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function translateMissing() {
  const missing = JSON.parse(fs.readFileSync('missing.json', 'utf8')) as string[];
  console.log(`Translating ${missing.length} strings...`);
  
  // Filter out definitely non-translatable things
  const toTranslate = missing.filter(s => {
    if (s.length <= 1) return false;
    if (s.match(/^[0-9]+$/)) return false; // just numbers
    if (s.startsWith('http')) return false; // urls
    if (s.includes('lucide')) return false;
    if (s.includes('return ')) return false;
    if (s.includes('var ')) return false;
    return true;
  });

  const batchSize = 100;
  const translations: Record<string, string> = {};

  for (let i = 0; i < toTranslate.length; i += batchSize) {
    const batch = toTranslate.slice(i, i + batchSize);
    console.log(`Processing batch ${i / batchSize + 1} of ${Math.ceil(toTranslate.length / batchSize)}...`);
    
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: [
          { role: 'user', parts: [{ text: `Translate the following English strings to Punjabi. Maintain the exact same formatting, HTML tags, and punctuation. Return ONLY a valid JSON object mapping the original English string to the Punjabi translation.\n\nStrings:\n${JSON.stringify(batch)}` }] }
        ],
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            additionalProperties: { type: Type.STRING }
          }
        }
      });
      
      const text = response.text;
      if (text) {
        const batchTranslations = JSON.parse(text);
        Object.assign(translations, batchTranslations);
      }
    } catch (err) {
      console.error(`Error on batch ${i}:`, err);
    }
  }

  console.log(`Generated ${Object.keys(translations).length} translations.`);
  
  // Inject into LanguageContext.tsx
  let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');
  for (const [eng, pa] of Object.entries(translations)) {
    // Only add if not already present
    if (!eng || !pa) continue;
    const safeEng = eng.replace(/"/g, '\\"').replace(/\n/g, '\\n');
    const safePa = pa.replace(/"/g, '\\"').replace(/\n/g, '\\n');
    
    // Quick check if exists
    if (!content.includes(`"${safeEng}": {`)) {
      const insertionMarker = '\n};\n\nconst LanguageContext = createContext';
      const insertionIndex = content.indexOf(insertionMarker);
      if (insertionIndex !== -1) {
        content = content.slice(0, insertionIndex) + `,\n  "${safeEng}": {\n    en: "${safeEng}",\n    pa: "${safePa}"\n  }` + content.slice(insertionIndex);
      }
    }
  }
  
  fs.writeFileSync('src/context/LanguageContext.tsx', content);
  console.log('LanguageContext.tsx updated.');
}

translateMissing();
