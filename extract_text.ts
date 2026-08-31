import fs from 'fs';
import path from 'path';

function extractStrings(filePath: string): string[] {
  const content = fs.readFileSync(filePath, 'utf8');
  const strings: Set<string> = new Set();
  
  // A naive regex to grab text between tags >text<, skipping empty or just whitespace
  // and excluding those with t(...) inside
  let match;
  const tagRegex = />([^<{}]+)</g;
  while ((match = tagRegex.exec(content)) !== null) {
    const text = match[1].trim();
    if (text && !text.includes('t(') && !text.includes('import ') && !text.includes('export ')) {
      strings.add(text);
    }
  }
  
  // also extract things in titleKey, text, cta inside HeroSlider
  if (filePath.includes('HeroSlider.tsx')) {
    const slideRegex = /kicker: "(.*?)",.*?titleKey: "(.*?)",.*?text: "(.*?)",.*?cta: "(.*?)"/g;
    while ((match = slideRegex.exec(content)) !== null) {
      strings.add(match[1]);
      strings.add(match[2]);
      strings.add(match[3]);
      strings.add(match[4]);
    }
    const htmlRegex = /titleHTML: "(.*?)"/g;
    while ((match = htmlRegex.exec(content)) !== null) {
      strings.add(match[1]);
    }
  }
  
  return Array.from(strings);
}

const dirList = ['src/pages', 'src/components'];
const allStrings: Record<string, string[]> = {};

for (const dir of dirList) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
  for (const f of files) {
    const p = path.join(dir, f);
    const s = extractStrings(p);
    if (s.length > 0) {
      allStrings[p] = s;
    }
  }
}

const contextContent = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');
const missing: Record<string, string[]> = {};

for (const [file, strings] of Object.entries(allStrings)) {
  const fileMissing = [];
  for (const s of strings) {
    // skip common false positives
    if (s.length < 2) continue;
    if (s === '&amp;') continue;
    if (s.includes('Copyright')) continue;
    
    const safeStr = s.replace(/"/g, '\\"');
    const paRegex = new RegExp(`"${safeStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}":\\s*{\\s*en:\\s*".*?",\\s*pa:\\s*"(.*?)"\\s*}`);
    const match = contextContent.match(paRegex);
    if (!match || match[1] === s || match[1] === '') {
      fileMissing.push(s);
    }
  }
  if (fileMissing.length > 0) {
    missing[file] = fileMissing;
  }
}

console.log(JSON.stringify(missing, null, 2));
