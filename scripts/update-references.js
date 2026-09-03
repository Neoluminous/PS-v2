import fs from 'fs';
import path from 'path';

const srcPath = path.join(process.cwd(), 'src');
const publicPath = path.join(process.cwd(), 'public');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace extensions but avoid replacing external URLs or things that shouldn't be replaced
  // Assuming all our public images start with /images/
  // Regex to find /images/....(jpg|jpeg|png)
  const regex = /(\/images\/[^"'\s]+)\.(jpg|jpeg|png)/gi;
  
  const newContent = content.replace(regex, '$1.webp');
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated references in: ${filePath}`);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (/\.(tsx|ts|css|html|json)$/.test(file)) {
      processFile(fullPath);
    }
  }
}

walk(srcPath);
processFile(path.join(process.cwd(), 'index.html'));

console.log('Reference update complete.');
