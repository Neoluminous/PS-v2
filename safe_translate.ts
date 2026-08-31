import fs from 'fs';
import { GoogleGenAI, Type } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

async function run() {
  const missing = JSON.parse(fs.readFileSync('missing.json', 'utf8'));
  const toTranslate = missing.filter((s: string) => {
    if (s.length <= 1) return false;
    if (s.match(/^[0-9]+$/)) return false; 
    if (s.startsWith('http')) return false; 
    if (s.includes('lucide')) return false;
    if (s.includes('return ')) return false;
    if (s.includes('var ')) return false;
    return true;
  });

  let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');
  const actualMissing = toTranslate.filter((s: string) => {
    const safeEng = s.replace(/"/g, '\\"').replace(/\n/g, '\\n');
    return !content.includes(`"${safeEng}": {`);
  });

  console.log(`Remaining to translate: ${actualMissing.length}`);
  if (actualMissing.length === 0) return;

  const translations: Record<string, string> = {};
  const batchSize = 100;
  
  for (let i = 0; i < actualMissing.length; i += batchSize) {
    const batch = actualMissing.slice(i, i + batchSize);
    console.log(`Batch ${i / batchSize + 1}...`);
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
    } catch (e: any) {
      console.error(`Batch failed:`, e?.message || e);
    }
    await delay(5000); // 5 second delay to avoid rate limits
  }

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
  console.log("Finished safe translations");
}
run();
