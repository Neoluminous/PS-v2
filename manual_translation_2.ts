import fs from 'fs';

const translations: Record<string, string> = {
  "POSH Act & Institutional Integrity.": "POSH ਐਕਟ ਅਤੇ ਸੰਸਥਾਗਤ ਅਖੰਡਤਾ।",
  "Jyoti Bawa serves as an expert external member on multiple Prevention of Sexual Harassment (POSH) committees across government, corporate and defence institutions, including the Government of Punjab, regional banks and Army schools.": "ਜੋਤੀ ਬਾਵਾ ਸਰਕਾਰੀ, ਕਾਰਪੋਰੇਟ ਅਤੇ ਰੱਖਿਆ ਸੰਸਥਾਵਾਂ, ਜਿਸ ਵਿੱਚ ਪੰਜਾਬ ਸਰਕਾਰ, ਖੇਤਰੀ ਬੈਂਕਾਂ ਅਤੇ ਆਰਮੀ ਸਕੂਲ ਸ਼ਾਮਲ ਹਨ, ਵਿੱਚ ਜਿਨਸੀ ਸ਼ੋਸ਼ਣ ਦੀ ਰੋਕਥਾਮ (POSH) ਕਮੇਟੀਆਂ ਵਿੱਚ ਇੱਕ ਮਾਹਰ ਬਾਹਰੀ ਮੈਂਬਰ ਵਜੋਂ ਸੇਵਾ ਨਿਭਾਉਂਦੇ ਹਨ।",
  "Her role is to ensure workplace safety, investigate grievances with absolute impartiality and uphold the dignity of all employees. This commitment to fairness includes protecting individuals from false allegations—she has successfully defended and exonerated men facing fabricated harassment charges, with one such case detailed in her book.": "ਉਹਨਾਂ ਦੀ ਭੂਮਿਕਾ ਕਾਰਜ ਸਥਾਨ ਦੀ ਸੁਰੱਖਿਆ ਨੂੰ ਯਕੀਨੀ ਬਣਾਉਣਾ, ਪੂਰਨ ਨਿਰਪੱਖਤਾ ਨਾਲ ਸ਼ਿਕਾਇਤਾਂ ਦੀ ਜਾਂਚ ਕਰਨਾ ਅਤੇ ਸਾਰੇ ਕਰਮਚਾਰੀਆਂ ਦੇ ਮਾਣ ਦੀ ਰੱਖਿਆ ਕਰਨਾ ਹੈ। ਨਿਰਪੱਖਤਾ ਪ੍ਰਤੀ ਇਸ ਵਚਨਬੱਧਤਾ ਵਿੱਚ ਵਿਅਕਤੀਆਂ ਨੂੰ ਝੂਠੇ ਦੋਸ਼ਾਂ ਤੋਂ ਬਚਾਉਣਾ ਸ਼ਾਮਲ ਹੈ—ਉਹਨਾਂ ਨੇ ਮਨਘੜਤ ਛੇੜਛਾੜ ਦੇ ਦੋਸ਼ਾਂ ਦਾ ਸਾਹਮਣਾ ਕਰ ਰਹੇ ਪੁਰਸ਼ਾਂ ਦਾ ਸਫਲਤਾਪੂਰਵਕ ਬਚਾਅ ਕੀਤਾ ਹੈ ਅਤੇ ਉਹਨਾਂ ਨੂੰ ਬਰੀ ਕੀਤਾ ਹੈ, ਜਿਸ ਦਾ ਇੱਕ ਅਜਿਹਾ ਮਾਮਲਾ ਉਹਨਾਂ ਦੀ ਕਿਤਾਬ ਵਿੱਚ ਦਰਜ ਹੈ।",
  "Education and care": "ਸਿੱਖਿਆ ਅਤੇ ਦੇਖਭਾਲ",
  "Keeping a child's education within reach.": "ਬੱਚੇ ਦੀ ਸਿੱਖਿਆ ਨੂੰ ਪਹੁੰਚ ਦੇ ਅੰਦਰ ਰੱਖਣਾ।",
  "Jyoti has taken responsibility for several children whose families could not afford to keep them in school. She treats each child as part of her own extended family and arranges scholarships for fees, books, uniforms and other study costs.": "ਜੋਤੀ ਨੇ ਕਈ ਬੱਚਿਆਂ ਦੀ ਜ਼ਿੰਮੇਵਾਰੀ ਲਈ ਹੈ ਜਿਨ੍ਹਾਂ ਦੇ ਪਰਿਵਾਰ ਉਨ੍ਹਾਂ ਨੂੰ ਸਕੂਲ ਵਿੱਚ ਰੱਖਣ ਦੀ ਸਮਰੱਥਾ ਨਹੀਂ ਰੱਖਦੇ ਸਨ। ਉਹ ਹਰੇਕ ਬੱਚੇ ਨਾਲ ਆਪਣੇ ਵਧੇ ਹੋਏ ਪਰਿਵਾਰ ਦੇ ਹਿੱਸੇ ਵਾਂਗ ਵਿਵਹਾਰ ਕਰਦੀ ਹੈ ਅਤੇ ਫੀਸਾਂ, ਕਿਤਾਬਾਂ, ਵਰਦੀਆਂ ਅਤੇ ਹੋਰ ਅਧਿਐਨ ਦੇ ਖਰਚਿਆਂ ਲਈ ਸਕਾਲਰਸ਼ਿਪ ਦਾ ਪ੍ਰਬੰਧ ਕਰਦੀ ਹੈ।",
  "Her support does not end with a payment. She speaks with families, follows each child's progress and stays close when illness, loss of work or another crisis puts education at risk. The children know they have someone to call.": "ਉਸਦਾ ਸਮਰਥਨ ਇੱਕ ਭੁਗਤਾਨ ਨਾਲ ਖਤਮ ਨਹੀਂ ਹੁੰਦਾ. ਉਹ ਪਰਿਵਾਰਾਂ ਨਾਲ ਗੱਲ ਕਰਦੀ ਹੈ, ਹਰੇਕ ਬੱਚੇ ਦੀ ਤਰੱਕੀ ਦੀ ਪਾਲਣਾ ਕਰਦੀ ਹੈ ਅਤੇ ਉਦੋਂ ਨੇੜੇ ਰਹਿੰਦੀ ਹੈ ਜਦੋਂ ਬਿਮਾਰੀ, ਕੰਮ ਦਾ ਨੁਕਸਾਨ ਜਾਂ ਕੋਈ ਹੋਰ ਸੰਕਟ ਸਿੱਖਿਆ ਨੂੰ ਖਤਰੇ ਵਿੱਚ ਪਾਉਂਦਾ ਹੈ। ਬੱਚੇ ਜਾਣਦੇ ਹਨ ਕਿ ਉਨ੍ਹਾਂ ਕੋਲ ਬੁਲਾਉਣ ਲਈ ਕੋਈ ਹੈ।",
  "For a child living with financial hardship, one uninterrupted school year can open the way to another. Jyoti's aim is practical: keep that child learning until poverty no longer decides what they may become.": "ਵਿੱਤੀ ਤੰਗੀ ਦੇ ਨਾਲ ਰਹਿਣ ਵਾਲੇ ਬੱਚੇ ਲਈ, ਇੱਕ ਨਿਰਵਿਘਨ ਸਕੂਲੀ ਸਾਲ ਦੂਜੇ ਲਈ ਰਸਤਾ ਖੋਲ੍ਹ ਸਕਦਾ ਹੈ। ਜੋਤੀ ਦਾ ਉਦੇਸ਼ ਵਿਹਾਰਕ ਹੈ: ਉਸ ਬੱਚੇ ਨੂੰ ਉਦੋਂ ਤੱਕ ਸਿੱਖਦਾ ਰੱਖੋ ਜਦੋਂ ਤੱਕ ਗਰੀਬੀ ਇਹ ਫੈਸਲਾ ਨਹੀਂ ਕਰਦੀ ਕਿ ਉਹ ਕੀ ਬਣ ਸਕਦੇ ਹਨ।",
  "Public recognition": "ਜਨਤਕ ਮਾਨਤਾ",
  "Recognition for her social work and leadership.": "ਉਸਦੇ ਸਮਾਜਿਕ ਕੰਮ ਅਤੇ ਅਗਵਾਈ ਲਈ ਮਾਨਤਾ।",
  "Writing": "ਲਿਖਣਾ",
  "Her latest book": "ਉਸ ਦੀ ਤਾਜ਼ਾ ਕਿਤਾਬ",
  "Candle in the Wind": "ਕੈਂਡਲ ਇਨ ਦਾ ਵਿੰਡ",
  "Jyoti's third book draws from two decades of work with women, children and communities. It addresses old age homes, menstrual awareness, mental health and substance abuse, and was launched at the Sharjah International Book Fair in 2025.": "ਜੋਤੀ ਦੀ ਤੀਜੀ ਕਿਤਾਬ ਔਰਤਾਂ, ਬੱਚਿਆਂ ਅਤੇ ਭਾਈਚਾਰਿਆਂ ਨਾਲ ਦੋ ਦਹਾਕਿਆਂ ਦੇ ਕੰਮ ਤੋਂ ਲਈ ਗਈ ਹੈ। ਇਹ ਬਿਰਧ ਆਸ਼ਰਮ, ਮਾਹਵਾਰੀ ਜਾਗਰੂਕਤਾ, ਮਾਨਸਿਕ ਸਿਹਤ ਅਤੇ ਨਸ਼ੀਲੇ ਪਦਾਰਥਾਂ ਦੀ ਦੁਰਵਰਤੋਂ ਨੂੰ ਸੰਬੋਧਿਤ ਕਰਦਾ ਹੈ, ਅਤੇ 2025 ਵਿੱਚ ਸ਼ਾਰਜਾਹ ਅੰਤਰਰਾਸ਼ਟਰੀ ਪੁਸਤਕ ਮੇਲੇ ਵਿੱਚ ਲਾਂਚ ਕੀਤਾ ਗਿਆ ਸੀ।",
  "She has pledged all profits from the book to programmes for underprivileged girls, community welfare and public awareness.": "ਉਸਨੇ ਕਿਤਾਬ ਤੋਂ ਹੋਣ ਵਾਲੇ ਸਾਰੇ ਮੁਨਾਫੇ ਨੂੰ ਗਰੀਬ ਕੁੜੀਆਂ, ਸਮਾਜ ਭਲਾਈ ਅਤੇ ਜਨਤਕ ਜਾਗਰੂਕਤਾ ਪ੍ਰੋਗਰਾਮਾਂ ਲਈ ਦੇਣ ਦਾ ਵਾਅਦਾ ਕੀਤਾ ਹੈ।",
  "Buy the book on Amazon": "ਐਮਾਜ਼ਾਨ 'ਤੇ ਕਿਤਾਬ ਖਰੀਦੋ",
  "Also by Jyoti Bawa": "ਜੋਤੀ ਬਾਵਾ ਵੱਲੋਂ ਵੀ",
  "Khilaf-e-Dastoor": "ਖਿਲਾਫ-ਏ-ਦਸਤੂਰ",
  "Institutional Governance": "ਸੰਸਥਾਗਤ ਪ੍ਰਸ਼ਾਸਨ"
};

let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

for (const [eng, pa] of Object.entries(translations)) {
  const safeEng = eng.replace(/"/g, '\\"');
  const safePa = pa.replace(/"/g, '\\"');
  
  const blockRegex = new RegExp(`"${safeEng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}":\\s*{\\s*en:\\s*"${safeEng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}",\\s*pa:\\s*"${safeEng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"\\s*}`, 'g');
  
  if (content.match(blockRegex)) {
    content = content.replace(blockRegex, `"${safeEng}": {\n    en: "${safeEng}",\n    pa: "${safePa}"\n  }`);
  } else {
    // If not found, we append it
    const insertionMarker = '\n};\n\nconst LanguageContext = createContext';
    const insertionIndex = content.indexOf(insertionMarker);
    if (insertionIndex !== -1) {
      content = content.slice(0, insertionIndex) + `,\n  "${safeEng}": {\n    en: "${safeEng}",\n    pa: "${safePa}"\n  }` + content.slice(insertionIndex);
    }
  }
}

fs.writeFileSync('src/context/LanguageContext.tsx', content);
console.log("Injected president translations!");
