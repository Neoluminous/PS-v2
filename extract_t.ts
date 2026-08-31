import fs from 'fs';
import path from 'path';

const strings = new Set<string>();

function traverse(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const matches = content.match(/t\("([^"]+)"\)/g);
      if (matches) {
        for (const match of matches) {
          const str = match.slice(3, -2);
          strings.add(str);
        }
      }
      const matchesSingle = content.match(/t\('([^']+)'\)/g);
      if (matchesSingle) {
        for (const match of matchesSingle) {
          const str = match.slice(3, -2);
          strings.add(str);
        }
      }
    }
  }
}

traverse('src');

const currentContext = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

const missing = Array.from(strings).filter(s => !currentContext.includes(`en: "${s.replace(/"/g, '\\"')}"`));

console.log(JSON.stringify(missing, null, 2));
