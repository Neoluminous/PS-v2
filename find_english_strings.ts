import fs from 'fs';
import path from 'path';

function walk(dir: string, fileList: string[]) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      walk(p, fileList);
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      fileList.push(p);
    }
  }
}

const allFiles: string[] = [];
walk('src', allFiles);

const strings = new Set<string>();

const rx = /["'](.*?)["']/g;

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = rx.exec(content)) !== null) {
    const s = match[1];
    // Filtering logic:
    // 1. Must contain spaces (most sentences/phrases have spaces)
    // 2. Must not start with / (paths)
    // 3. Must not end with .tsx or .css or .js
    // 4. Must not be a CSS class (usually lowercase-dashed)
    // 5. Must have at least 3 words or be known to need translation
    
    if (s.length > 5 && 
        s.includes(' ') && 
        !s.startsWith('/') && 
        !s.endsWith('.tsx') &&
        !s.match(/^[a-z0-9\- ]+$/) // purely lowercase classes
       ) {
       // if it contains uppercase, it's more likely text
       if (/[A-Z]/.test(s)) {
          strings.add(s);
       }
    }
  }
}

const contextContent = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');
const missing = [];

for (const s of strings) {
  const safeStr = s.replace(/"/g, '\\"');
  // Check if safeStr exists in language context keys
  const paRegex = new RegExp(`"${safeStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}":\\s*{\\s*en:\\s*".*?",\\s*pa:\\s*"(.*?)"\\s*}`);
  const match = contextContent.match(paRegex);
  if (!match || match[1] === s || match[1] === '') {
    // some false positives like "use client", "return (", "stroke-width"
    if (s.includes('return ') || s.includes('import ') || s.includes('<svg') || s.includes('lucide-react')) continue;
    missing.push(s);
  }
}

console.log(`Found ${missing.length} missing strings. Examples:`);
console.log(missing.slice(0, 50));
fs.writeFileSync('missing.json', JSON.stringify(missing, null, 2));

