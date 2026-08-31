import fs from 'fs';
import { GoogleGenAI, Type } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

async function run() {
  const missing = JSON.parse(fs.readFileSync('actual_missing_policies.json', 'utf8'));
  let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

  console.log("Waiting 65 seconds for full quota reset...");
  await delay(65000);

  console.log(`Translating ${missing.length} strings in ONE batch...`);
  
  const translations: Record<string, string> = {};
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: [
        { role: 'user', parts: [{ text: `Translate the following English strings to Punjabi. Return ONLY a valid JSON object mapping the original English string to the Punjabi translation.\n\nStrings:\n${JSON.stringify(missing)}` }] }
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
      console.log(`Successfully translated ${Object.keys(translations).length} strings.`);
    }
  } catch (e: any) {
    console.error(`Batch failed:`, e?.message || e);
    return;
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
  console.log("Finished final translation");
}
run();
