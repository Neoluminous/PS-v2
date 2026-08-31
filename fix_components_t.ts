import fs from 'fs';

const files = [
  'src/components/HeroSlider.tsx',
  'src/components/FacebookUpdates.tsx',
  'src/components/GalleryPage.tsx',
  'src/components/GetInvolvedPage.tsx',
  'src/components/LearningProgrammePage.tsx',
  'src/components/MediaFeaturesPage.tsx',
  'src/components/PolicyDetailPage.tsx',
  'src/components/SearchPage.tsx',
  'src/components/SiteHeader.tsx',
  'src/pages/Home.tsx',
  'src/pages/NotFoundPage.tsx',
  'src/pages/PolicyIndexPage.tsx',
  'src/components/DonatePage.tsx',
  'src/pages/PolicyPage.tsx'
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  
  // ensure import
  if (!content.includes('useLanguage')) {
    const lastImportIndex = content.lastIndexOf('import ');
    if (lastImportIndex !== -1) {
      const endOfImport = content.indexOf('\n', lastImportIndex);
      content = content.slice(0, endOfImport) + '\nimport { useLanguage } from "../context/LanguageContext";' + content.slice(endOfImport);
    } else {
      content = 'import { useLanguage } from "../context/LanguageContext";\n' + content;
    }
  }

  // Add t to the component destructuring
  if (!content.includes('const { t }') && !content.includes('const { language, toggleLanguage, t }')) {
    const match = content.match(/export default function \w+\(.*\) \{/);
    if (match) {
      const index = match.index! + match[0].length;
      content = content.slice(0, index) + '\n  const { t } = useLanguage();' + content.slice(index);
    }
  }

  // Hardcoded replacements
  content = content.replace(/<span>Scroll to discover<\/span>/g, '<span>{t("Scroll to discover")}</span>');
  content = content.replace(/<h2>Recent updates<\/h2>/g, '<h2>{t("Recent updates")}</h2>');
  content = content.replace(/<p>This timeline is loaded live from Facebook\. If Facebook blocks the preview because of your browser or privacy settings, open the page directly\.<\/p>/g, '<p>{t("This timeline is loaded live from Facebook. If Facebook blocks the preview because of your browser or privacy settings, open the page directly.")}</p>');
  content = content.replace(/<span>Open Punjabi Samvad on Facebook<\/span>/g, '<span>{t("Open Punjabi Samvad on Facebook")}</span>');
  content = content.replace(/<span><strong>Punjabi Samvad<\/strong><small>Official Facebook updates<\/small><\/span>/g, '<span><strong>{t("Punjabi Samvad")}</strong><small>{t("Official Facebook updates")}</small></span>');
  
  content = content.replace(/<h2>Apply for an internship<\/h2>/g, '<h2>{t("Apply for an internship")}</h2>');
  content = content.replace(/<h2>Volunteer or share expertise<\/h2>/g, '<h2>{t("Volunteer or share expertise")}</h2>');
  content = content.replace(/<dt>University network<\/dt>/g, '<dt>{t("University network")}</dt>');
  content = content.replace(/<dt>What you gain<\/dt>/g, '<dt>{t("What you gain")}</dt>');
  content = content.replace(/<dt>Areas of contribution<\/dt>/g, '<dt>{t("Areas of contribution")}</dt>');
  content = content.replace(/<h2>Recent student work<\/h2>/g, '<h2>{t("Recent student work")}</h2>');
  content = content.replace(/<h3>Vinit Kumar<\/h3>/g, '<h3>{t("Vinit Kumar")}</h3>');
  content = content.replace(/<span>UPES, Dehradun · B\.Tech CSE<\/span>/g, '<span>{t("UPES, Dehradun · B.Tech CSE")}</span>');
  content = content.replace(/<h3>Pritish Anand<\/h3>/g, '<h3>{t("Pritish Anand")}</h3>');
  content = content.replace(/<span>Chandigarh University<\/span>/g, '<span>{t("Chandigarh University")}</span>');
  content = content.replace(/>Email us</g, '>{t("Email us")}<');
  content = content.replace(/>Volunteer with Punjabi Samvad</g, '>{t("Volunteer with Punjabi Samvad")}<');

  content = content.replace(/<h1>Explore the programme<\/h1>/g, '<h1>{t("Explore the programme")}</h1>');
  content = content.replace(/<h2>Why this programme matters<\/h2>/g, '<h2>{t("Why this programme matters")}</h2>');
  content = content.replace(/Your browser does not support embedded video\./g, '{t("Your browser does not support embedded video.")}');
  content = content.replace(/<h2>What learners cover<\/h2>/g, '<h2>{t("What learners cover")}</h2>');
  content = content.replace(/<p>Useful knowledge, built for real life\.<\/p>/g, '<p>{t("Useful knowledge, built for real life.")}</p>');
  content = content.replace(/<span>Learn online<\/span>/g, '<span>{t("Learn online")}</span>');
  content = content.replace(/<span>Official enrolment<\/span>/g, '<span>{t("Official enrolment")}</span>');
  content = content.replace(/>Enroll now</g, '>{t("Enroll now")}<');

  content = content.replace(/<h2>Stories from the field<\/h2>/g, '<h2>{t("Stories from the field")}</h2>');
  content = content.replace(/<p>A book by Jyoti Bawa<\/p>/g, '<p>{t("A book by Jyoti Bawa")}</p>');
  content = content.replace(/<p>Jyoti has pledged all profits from the book to support underprivileged girls, community welfare and awareness programmes\.<\/p>/g, '<p>{t("Jyoti has pledged all profits from the book to support underprivileged girls, community welfare and awareness programmes.")}</p>');
  content = content.replace(/<h2>Featured in the media<\/h2>/g, '<h2>{t("Featured in the media")}</h2>');
  content = content.replace(/<p>Reports, interviews and partnerships<\/p>/g, '<p>{t("Reports, interviews and partnerships")}</p>');
  content = content.replace(/>Read feature</g, '>{t("Read feature")}<');
  
  content = content.replace(/<p>Public standards<\/p>/g, '<p>{t("Public standards")}</p>');
  content = content.replace(/>Email Punjabi Samvad</g, '>{t("Email Punjabi Samvad")}<');
  
  content = content.replace(/>All policies</g, '>{t("All policies")}<');
  content = content.replace(/<h3>Applies to<\/h3>/g, '<h3>{t("Applies to")}</h3>');
  content = content.replace(/<p>Governing Body members, employees, consultants, volunteers, interns, facilitators and contractors where the subject relates to their role\.<\/p>/g, '<p>{t("Governing Body members, employees, consultants, volunteers, interns, facilitators and contractors where the subject relates to their role.")}</p>');
  content = content.replace(/<h3>Official references<\/h3>/g, '<h3>{t("Official references")}</h3>');
  content = content.replace(/<p>These government sources support the legal points in this policy\.<\/p>/g, '<p>{t("These government sources support the legal points in this policy.")}</p>');
  content = content.replace(/<h3>Raise a concern<\/h3>/g, '<h3>{t("Raise a concern")}</h3>');
  content = content.replace(/<p>Email Punjabi Samvad with the policy name and the safest way to contact you\. A statutory or emergency report should also go to the authority named in the relevant policy\.<\/p>/g, '<p>{t("Email Punjabi Samvad with the policy name and the safest way to contact you. A statutory or emergency report should also go to the authority named in the relevant policy.")}</p>');
  content = content.replace(/<p>Punjabi Samvad follows applicable law where it sets a stricter rule or a different process\. This public page does not replace a statutory committee order, employment term, funding agreement or signed internal procedure\.<\/p>/g, '<p>{t("Punjabi Samvad follows applicable law where it sets a stricter rule or a different process. This public page does not replace a statutory committee order, employment term, funding agreement or signed internal procedure.")}</p>');
  
  content = content.replace(/<h1>Explore Punjabi Samvad<\/h1>/g, '<h1>{t("Explore Punjabi Samvad")}</h1>');
  content = content.replace(/<h3>No matching pages yet\.<\/h3>/g, '<h3>{t("No matching pages yet.")}</h3>');
  content = content.replace(/<p>Try a broader phrase, or visit /g, '<p>{t("Try a broader phrase, or visit")} ');
  content = content.replace(/ and ask us directly\.<\/p>/g, ' {t("and ask us directly.")}</p>');
  
  content = content.replace(/<p>Find what you need<\/p>/g, '<p>{t("Find what you need")}</p>');
  content = content.replace(/<h3>Popular<\/h3>/g, '<h3>{t("Popular")}</h3>');
  content = content.replace(/<p>Our impact<\/p>/g, '<p>{t("Our impact")}</p>');

  content = content.replace(/<p>Governance and care<\/p>/g, '<p>{t("Governance and care")}</p>');
  
  // NotFoundPage
  content = content.replace(/<h1>404<\/h1>/g, '<h1>{t("404")}</h1>');
  content = content.replace(/>Return home</g, '>{t("Return home")}<');

  // PolicyIndexPage
  content = content.replace(/<p>Governance and care<\/p>/g, '<p>{t("Governance and care")}</p>');

  // Home (CSR info)
  content = content.replace(/<span>2004<\/span>/g, '<span>{t("2004")}</span>');
  content = content.replace(/<span>NGO Darpan<\/span>/g, '<span>{t("NGO Darpan")}</span>');
  content = content.replace(/<span>PB\/2017\/0156494<\/span>/g, '<span>{t("PB/2017/0156494")}</span>');
  content = content.replace(/<span>CSR Registration<\/span>/g, '<span>{t("CSR Registration")}</span>');
  content = content.replace(/<span>CSR00032253<\/span>/g, '<span>{t("CSR00032253")}</span>');

  // DonatePage
  content = content.replace(/<h2>Choose how to give<\/h2>/g, '<h2>{t("Choose how to give")}</h2>');
  content = content.replace(/<p>A direct way to support the work\.<\/p>/g, '<p>{t("A direct way to support the work.")}</p>');
  content = content.replace(/<p>Use UPI, the secure Razorpay checkout, or a direct bank transfer within India\.<\/p>/g, '<p>{t("Use UPI, the secure Razorpay checkout, or a direct bank transfer within India.")}</p>');
  content = content.replace(/<h3>Scan &amp; pay<\/h3>/g, '<h3>{t("Scan & pay")}</h3>');
  content = content.replace(/<p>Pay with any UPI app<\/p>/g, '<p>{t("Pay with any UPI app")}</p>');
  content = content.replace(/<p>Open your preferred UPI app and scan the official Punjabi Samvad payment code\.<\/p>/g, '<p>{t("Open your preferred UPI app and scan the official Punjabi Samvad payment code.")}</p>');
  content = content.replace(/>Download QR code</g, '>{t("Download QR code")}<');
  content = content.replace(/<h3>Online payment<\/h3>/g, '<h3>{t("Online payment")}</h3>');
  content = content.replace(/<p>Donate securely with Razorpay<\/p>/g, '<p>{t("Donate securely with Razorpay")}</p>');
  content = content.replace(/<p>Continue to Punjabi Samvad&apos;s official hosted checkout to pay by supported online payment methods\.<\/p>/g, '<p>{t("Continue to Punjabi Samvad\'s official hosted checkout to pay by supported online payment methods.")}</p>');
  content = content.replace(/>Continue to secure payment</g, '>{t("Continue to secure payment")}<');
  content = content.replace(/<span>India only<\/span>/g, '<span>{t("India only")}</span>');
  content = content.replace(/<h3>Direct bank transfer<\/h3>/g, '<h3>{t("Direct bank transfer")}</h3>');
  content = content.replace(/<p>Both accounts are held in the name of Punjabi Samvad and are current accounts\.<\/p>/g, '<p>{t("Both accounts are held in the name of Punjabi Samvad and are current accounts.")}</p>');
  content = content.replace(/<h3>Secure options<\/h3>/g, '<h3>{t("Secure options")}</h3>');
  content = content.replace(/<p>UPI, Razorpay and bank transfer<\/p>/g, '<p>{t("UPI, Razorpay and bank transfer")}</p>');
  content = content.replace(/<h3>Tax benefit subject to applicable provisions<\/h3>/g, '<h3>{t("Tax benefit subject to applicable provisions")}</h3>');
  content = content.replace(/<h3>Receipt support<\/h3>/g, '<h3>{t("Receipt support")}</h3>');
  content = content.replace(/<p>Share your payment details with our team<\/p>/g, '<p>{t("Share your payment details with our team")}</p>');
  content = content.replace(/>Request a receipt</g, '>{t("Request a receipt")}<');
  
  fs.writeFileSync(file, content);
}

console.log("Replaced text with t() wrapped strings");
