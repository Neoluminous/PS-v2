import fs from 'fs';

const translations = {
  "Our journey": "ਸਾਡਾ ਸਫ਼ਰ",
  "Built step by step, with communities at the centre.": "ਕਦਮ-ਦਰ-ਕਦਮ ਉਸਾਰਿਆ ਗਿਆ, ਜਿਸ ਦੇ ਕੇਂਦਰ ਵਿੱਚ ਭਾਈਚਾਰੇ ਸਨ।",
  "Punjabi Samvad begins": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀ ਸ਼ੁਰੂਆਤ",
  "Amit Bawa and Jyoti Bawa start work in response to gender discrimination and social concerns around them.": "ਅਮਿਤ ਬਾਵਾ ਅਤੇ ਜੋਤੀ ਬਾਵਾ ਲਿੰਗ ਵਿਤਕਰੇ ਅਤੇ ਆਲੇ ਦੁਆਲੇ ਦੀਆਂ ਸਮਾਜਿਕ ਚਿੰਤਾਵਾਂ ਦੇ ਜਵਾਬ ਵਿੱਚ ਕੰਮ ਸ਼ੁਰੂ ਕਰਦੇ ਹਨ।",
  "A formal organisation": "ਇੱਕ ਰਸਮੀ ਸੰਸਥਾ",
  "Punjabi Samvad is registered, giving its community work a lasting institutional base.": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਰਜਿਸਟਰਡ ਹੋਇਆ, ਜਿਸ ਨੇ ਇਸਦੇ ਭਾਈਚਾਰਕ ਕੰਮ ਨੂੰ ਇੱਕ ਸਥਾਈ ਸੰਸਥਾਗਤ ਅਧਾਰ ਦਿੱਤਾ।",
  "The work continues": "ਕੰਮ ਜਾਰੀ ਹੈ",
  "After Amit Bawa’s passing, Jyoti Bawa carries forward the organisation they built together.": "ਅਮਿਤ ਬਾਵਾ ਦੇ ਦੇਹਾਂਤ ਤੋਂ ਬਾਅਦ, ਜੋਤੀ ਬਾਵਾ ਉਸ ਸੰਸਥਾ ਨੂੰ ਅੱਗੇ ਵਧਾਉਂਦੇ ਹਨ ਜੋ ਉਨ੍ਹਾਂ ਨੇ ਮਿਲ ਕੇ ਬਣਾਈ ਸੀ।",
  "Culture travels further": "ਸੱਭਿਆਚਾਰ ਅੱਗੇ ਵਧਦਾ ਹੈ",
  "Tirhayi Umar and participation in the World Punjabi Conference extend the use of documentary and culture for social awareness.": "ਤਿਰਹਾਈ ਉਮਰ ਅਤੇ ਵਿਸ਼ਵ ਪੰਜਾਬੀ ਕਾਨਫਰੰਸ ਵਿੱਚ ਸ਼ਮੂਲੀਅਤ ਨੇ ਸਮਾਜਿਕ ਜਾਗਰੂਕਤਾ ਲਈ ਡਾਕੂਮੈਂਟਰੀ ਅਤੇ ਸੱਭਿਆਚਾਰ ਦੀ ਵਰਤੋਂ ਨੂੰ ਵਧਾਇਆ।",
  "Today": "ਅੱਜ",
  "A wider national focus": "ਇੱਕ ਵਿਸ਼ਾਲ ਰਾਸ਼ਟਰੀ ਫੋਕਸ",
  "Community experience now meets institutional partnerships designed to take useful programmes to more people.": "ਭਾਈਚਾਰਕ ਤਜਰਬਾ ਹੁਣ ਉਪਯੋਗੀ ਪ੍ਰੋਗਰਾਮਾਂ ਨੂੰ ਵੱਧ ਤੋਂ ਵੱਧ ਲੋਕਾਂ ਤੱਕ ਲਿਜਾਣ ਲਈ ਤਿਆਰ ਕੀਤੀਆਂ ਗਈਆਂ ਸੰਸਥਾਗਤ ਭਾਈਵਾਲੀਆਂ ਨੂੰ ਪੂਰਾ ਕਰਦਾ ਹੈ।"
};

let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');
for (const [eng, pa] of Object.entries(translations)) {
  const safeEng = eng.replace(/"/g, '\\"').replace(/\n/g, '\\n');
  const safePa = pa.replace(/"/g, '\\"').replace(/\n/g, '\\n');
  
  if (!content.includes(`"${safeEng}": {`)) {
    const insertionMarker = '\n};\n\nconst LanguageContext = createContext';
    const insertionIndex = content.indexOf(insertionMarker);
    if (insertionIndex !== -1) {
      content = content.slice(0, insertionIndex) + `,\n  "${safeEng}": {\n    en: "${safeEng}",\n    pa: "${safePa}"\n  }` + content.slice(insertionIndex);
    }
  } else {
    // If it exists, let's make sure it's updated with the correct pa translation
    const regex = new RegExp(`"${safeEng}": {\\s*en: "${safeEng}",\\s*pa: ".*?"\\s*}`, 'g');
    content = content.replace(regex, `"${safeEng}": {\n    en: "${safeEng}",\n    pa: "${safePa}"\n  }`);
  }
}
fs.writeFileSync('src/context/LanguageContext.tsx', content);
console.log("Injected story translations");
