import fs from 'fs';
import path from 'path';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function translateStrings() {
  const stringsToTranslate = new Set<string>();

  function traverse(dir: string) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        traverse(fullPath);
      } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        const matches = content.match(/t\("([^"]+)"\)/g);
        if (matches) {
          for (const match of matches) {
            const str = match.slice(3, -2);
            stringsToTranslate.add(str);
          }
        }
        const matchesSingle = content.match(/t\('([^']+)'\)/g);
        if (matchesSingle) {
          for (const match of matchesSingle) {
            const str = match.slice(3, -2);
            stringsToTranslate.add(str);
          }
        }
      }
    }
  }

  traverse('src');

  // Load current context
  const currentContext = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

  // Exclude strings that are already in the context
  const uniqueStrings = Array.from(stringsToTranslate).filter(s => 
    s && s.trim().length > 0 && !currentContext.includes(`en: "${s.replace(/"/g, '\\"')}"`) && s !== "\\n" && s !== "q" && s !== ", "
  );

  console.log(`Found ${uniqueStrings.length} unique new strings to translate.`);

  if (uniqueStrings.length === 0) {
    console.log("Nothing to translate!");
    return;
  }

  const batchSize = 15;
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
        model: 'gemini-1.5-flash',
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
