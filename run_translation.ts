import fs from 'fs';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const stringsToTranslate = [
  "Dialogue that moves communities forward",
  "Women, girls & young people",
  "Creative advocacy since 2004",
  "Financial literacy with HDFC Securities",
  "Free digital learning with UNICEF",
  "Change BeginsWith Samvad.",
  "Knowledge becomes<br /><em>confidence.</em>",
  "Hard issues need<br /><em>open conversations.</em>",
  "Understand money.<br /><em>Use it well.</em>",
  "Build skills for<br /><em>what comes next.</em>",
  "More than two decades of grassroots programmes advancing dignity, opportunity and well-being across India.",
  "Education, health awareness and skills that help people participate more fully in their own development.",
  "From school workshops to theatre and documentary storytelling, we create spaces where people can ask, learn and act.",
  "A free five-hour programme covering saving, banking, credit, insurance and safer digital payments.",
  "Free online courses and certificates for Indian youth preparing for study, work and new opportunities.",
  "Explore our work",
  "See our programmes",
  "Our story",
  "Learn more",
  "Discover our story",
  "Scroll to discover",
  "Choose how to give",
  "A direct way to support the work.",
  "Use UPI, the secure Razorpay checkout, or a direct bank transfer within India.",
  "Scan & pay",
  "Pay with any UPI app",
  "Open your preferred UPI app and scan the official Punjabi Samvad payment code.",
  "Download QR code",
  "Online payment",
  "Donate securely with Razorpay",
  "Continue to Punjabi Samvad's official hosted checkout to pay by supported online payment methods.",
  "Continue to secure payment",
  "India only",
  "Direct bank transfer",
  "Both accounts are held in the name of Punjabi Samvad and are current accounts.",
  "Secure options",
  "UPI, Razorpay and bank transfer",
  "Tax benefit subject to applicable provisions",
  "Receipt support",
  "Share your payment details with our team",
  "Request a receipt",
  "Recent updates",
  "This timeline is loaded live from Facebook. If Facebook blocks the preview because of your browser or privacy settings, open the page directly.",
  "Open Punjabi Samvad on Facebook",
  "Apply for an internship",
  "Volunteer or share expertise",
  "University network",
  "What you gain",
  "Areas of contribution",
  "Recent student work",
  "Vinit Kumar",
  "UPES, Dehradun · B.Tech CSE",
  "Pritish Anand",
  "Chandigarh University",
  "Email us",
  "Volunteer with Punjabi Samvad",
  "Explore the programme",
  "Why this programme matters",
  "Your browser does not support embedded video.",
  "What learners cover",
  "Useful knowledge, built for real life.",
  "Learn online",
  "Official enrolment",
  "Enroll now",
  "Stories from the field",
  "A book by Jyoti Bawa",
  "Jyoti has pledged all profits from the book to support underprivileged girls, community welfare and awareness programmes.",
  "Featured in the media",
  "Reports, interviews and partnerships",
  "Read feature",
  "Public standards",
  "Email Punjabi Samvad",
  "All policies",
  "Applies to",
  "Governing Body members, employees, consultants, volunteers, interns, facilitators and contractors where the subject relates to their role.",
  "Official references",
  "These government sources support the legal points in this policy.",
  "Raise a concern",
  "Email Punjabi Samvad with the policy name and the safest way to contact you. A statutory or emergency report should also go to the authority named in the relevant policy.",
  "Punjabi Samvad follows applicable law where it sets a stricter rule or a different process. This public page does not replace a statutory committee order, employment term, funding agreement or signed internal procedure.",
  "Explore Punjabi Samvad",
  "No matching pages yet.",
  "Try a broader phrase, or visit",
  "and ask us directly.",
  "Find what you need",
  "Popular",
  "Our impact",
  "Governance and care"
];

async function run() {
  let languageContext = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');
  
  const translations: Record<string, string> = {};
  const batchSize = 10;
  
  // Filter out what's already translated
  const missingStrings = stringsToTranslate.filter(str => {
    const safeStr = str.replace(/"/g, '\\"');
    const rx = new RegExp(`"${safeStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}":\\s*{\\s*en:\\s*"${safeStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}",\\s*pa:\\s*".*?"\\s*}`);
    return !languageContext.match(rx);
  });
  
  console.log(`Missing ${missingStrings.length} strings`);
  
  for (let i = 0; i < missingStrings.length; i += batchSize) {
    const batch = missingStrings.slice(i, i + batchSize);
    const prompt = `Translate the following English strings to Punjabi (Gurmukhi script).
Respond ONLY with a valid JSON object where the keys are the exact English strings provided, and the values are the Punjabi translations. Do not include markdown blocks.

Strings to translate:
${JSON.stringify(batch, null, 2)}`;

    try {
      console.log(`Translating batch ${i / batchSize + 1}...`);
      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: prompt,
      });
      let responseText = response.text || '';
      responseText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
      const batchTranslations = JSON.parse(responseText);
      
      for (const key in batchTranslations) {
        translations[key] = batchTranslations[key];
      }
    } catch (e) {
      console.error('Error translating batch:', e);
    }
    
    // sleep
    await new Promise(r => setTimeout(r, 6000));
  }
  
  // Inject into context
  for (const eng of Object.keys(translations)) {
    const pa = translations[eng].replace(/"/g, '\\"');
    const safeEng = eng.replace(/"/g, '\\"');
    
    const blockRegex = new RegExp(`"${safeEng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}":\\s*{\\s*en:\\s*"${safeEng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}",\\s*pa:\\s*".*?"\\s*}`, 'g');
    if (!languageContext.match(blockRegex)) {
      const insertionMarker = '\n};\n\nconst LanguageContext = createContext';
      const insertionIndex = languageContext.indexOf(insertionMarker);
      if (insertionIndex !== -1) {
        languageContext = languageContext.slice(0, insertionIndex) + `,\n  "${safeEng}": {\n    en: "${safeEng}",\n    pa: "${pa}"\n  }` + languageContext.slice(insertionIndex);
      }
    }
  }
  fs.writeFileSync('src/context/LanguageContext.tsx', languageContext);
  console.log("Updated LanguageContext.tsx");
}

run();
