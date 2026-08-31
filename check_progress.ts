import fs from 'fs';
const missing = JSON.parse(fs.readFileSync('actual_missing_policies.json', 'utf8'));
const content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

const actualMissing = missing.filter((s: string) => {
  const safeEng = s.replace(/"/g, '\\"').replace(/\n/g, '\\n');
  return !content.includes(`"${safeEng}": {`);
});

console.log("Still missing: " + actualMissing.length);
