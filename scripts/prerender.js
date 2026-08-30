import fs from 'fs';
import path from 'path';

// Core routes for social sharing metadata
const routes = [
  { path: '/about', title: 'About Punjabi Samvad', desc: 'Punjabi Samvad is a national NGO rooted in Punjab working on education, public awareness, and creative communication since 2004.' },
  { path: '/our-work', title: 'Our Work | Punjabi Samvad', desc: 'Our work connects knowledge, opportunity and creative advocacy across seven focus areas.' },
  { path: '/programmes', title: 'Programmes | Punjabi Samvad', desc: 'Explore all practical programmes and community action.' },
  { path: '/impact', title: 'Our Impact | Punjabi Samvad', desc: 'Two decades of dialogue, learning and community action with millions reached.' },
  { path: '/donate', title: 'Donate | Punjabi Samvad', desc: 'Support our work. Use UPI, the secure Razorpay checkout, or a direct bank transfer.' },
  { path: '/policies', title: 'Policies | Punjabi Samvad', desc: 'Standards that guide how Punjabi Samvad works, protects people and uses resources.' },
  { path: '/get-involved', title: 'Get Involved | Punjabi Samvad', desc: 'Volunteer, intern or collaborate with Punjabi Samvad.' },
];

const templatePath = path.resolve('dist/index.html');

if (!fs.existsSync(templatePath)) {
  console.log('dist/index.html not found. Run npm run build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');

routes.forEach(route => {
  const dirPath = path.resolve(`dist${route.path}`);
  fs.mkdirSync(dirPath, { recursive: true });

  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${route.desc}"`)
    .replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${route.title}"`)
    .replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${route.desc}"`);

  // Add OG tags if they don't exist
  if (!html.includes('property="og:title"')) {
    html = html.replace('</title>', `</title>\n    <meta property="og:title" content="${route.title}" />\n    <meta property="og:description" content="${route.desc}" />\n    <meta property="og:image" content="https://punjabisamvad.com/og.png" />`);
  }

  fs.writeFileSync(path.join(dirPath, 'index.html'), html);
  console.log(`Generated prerendered HTML for ${route.path}`);
});
console.log('Prerendering complete!');
