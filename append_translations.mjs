import fs from 'fs';

const translationsToAdd = {
  "Try mental health, scholarships or policies": "ਮਾਨਸਿਕ ਸਿਹਤ, ਸਕਾਲਰਸ਼ਿਪ ਜਾਂ ਨੀਤੀਆਂ ਲੱਭਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰੋ",
  "Return home": "ਵਾਪਸ ਮੁੱਖ ਪੰਨੇ 'ਤੇ ਜਾਓ",
};

let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf-8');

let newEntries = "";
for (const [en, pa] of Object.entries(translationsToAdd)) {
  newEntries += `  "${en}": {\n    en: "${en}",\n    pa: "${pa}"\n  },\n`;
}

// Find the last closing brace of the translations object
const marker = '};';
const index = content.indexOf(marker);

if (index !== -1) {
  content = content.slice(0, index) + newEntries + content.slice(index);
  fs.writeFileSync('src/context/LanguageContext.tsx', content, 'utf-8');
  console.log("Translations appended.");
} else {
  console.log("Could not find the end of the translations object.");
}
