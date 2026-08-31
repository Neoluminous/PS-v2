import fs from 'fs';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function fixRemaining() {
  const stringsToFix = JSON.parse(fs.readFileSync('/tmp/tofix_last.json', 'utf8'));

  console.log(`Found ${stringsToFix.length} strings to fix.`);
  
  if (stringsToFix.length === 0) return;

  const batchSize = 10;
  const translations: Record<string, string> = {};

  for (let i = 0; i < stringsToFix.length; i += batchSize) {
    const batch = stringsToFix.slice(i, i + batchSize);
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
    
    // small delay to avoid rate limits
    await new Promise(r => setTimeout(r, 4000));
  }

  // Now replace in the file
  let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');
  for (const eng of Object.keys(translations)) {
    const pa = translations[eng].replace(/"/g, '\\"');
    const safeEng = eng.replace(/"/g, '\\"');
    
    // Find the block
    const blockRegex = new RegExp(`"${safeEng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}":\\s*{\\s*en:\\s*"${safeEng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}",\\s*pa:\\s*"${safeEng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"\\s*}`, 'g');
    content = content.replace(blockRegex, `"${safeEng}": {\n    en: "${safeEng}",\n    pa: "${pa}"\n  }`);
  }
  
  fs.writeFileSync('src/context/LanguageContext.tsx', content);
  console.log("Updated file.");
}

fixRemaining();
