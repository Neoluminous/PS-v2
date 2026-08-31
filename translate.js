import fs from 'fs';

const pagesContent = fs.readFileSync('src/content/pages.ts', 'utf-8');

// I will write a simple script that matches strings inside pages.ts 
// and makes a fetch request to gemini to translate them!

