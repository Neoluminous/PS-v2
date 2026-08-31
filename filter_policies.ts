import fs from 'fs';
const missing = JSON.parse(fs.readFileSync('missing_policies.json', 'utf8'));
const content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

const actualMissing = missing.filter((s: string) => {
  const safeEng = s.replace(/"/g, '\\"').replace(/\n/g, '\\n');
  return !content.includes(`"${safeEng}": {`);
});

console.log("Actually missing: " + actualMissing.length);
fs.writeFileSync('actual_missing_policies.json', JSON.stringify(actualMissing, null, 2));
