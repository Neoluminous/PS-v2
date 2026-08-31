import fs from 'fs';
import { GoogleGenAI, Type } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  const missing = JSON.parse(fs.readFileSync('missing.json', 'utf8')) as string[];
  const toTranslate = missing.filter(s => {
    if (s.length <= 1) return false;
    if (s.match(/^[0-9]+$/)) return false; 
    if (s.startsWith('http')) return false; 
    if (s.includes('lucide')) return false;
    if (s.includes('return ')) return false;
    if (s.includes('var ')) return false;
    return true;
  });

  const translations: Record<string, string> = {};
  
  // Let's just translate everything in 2 big batches to be faster
  const batchSize = 350;
  for (let i = 0; i < toTranslate.length; i += batchSize) {
    const batch = toTranslate.slice(i, i + batchSize);
    console.log(`Processing batch ${i}...`);
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
        Object.assign(translations, JSON.parse(text));
      }
    } catch (e) {
      console.error(e);
    }
  }

  let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');
  for (const [eng, pa] of Object.entries(translations)) {
    if (!eng || !pa) continue;
    const safeEng = eng.replace(/"/g, '\\"').replace(/\n/g, '\\n');
    const safePa = pa.replace(/"/g, '\\"').replace(/\n/g, '\\n');
    if (!content.includes(`"${safeEng}": {`)) {
      const insertionMarker = '\n};\n\nconst LanguageContext = createContext';
      const insertionIndex = content.indexOf(insertionMarker);
      if (insertionIndex !== -1) {
        content = content.slice(0, insertionIndex) + `,\n  "${safeEng}": {\n    en: "${safeEng}",\n    pa: "${safePa}"\n  }` + content.slice(insertionIndex);
      }
    }
  }
  fs.writeFileSync('src/context/LanguageContext.tsx', content);
  console.log("Done.");
}

run();
