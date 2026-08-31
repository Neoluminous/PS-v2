import fs from 'fs';

const translations: Record<string, string> = {
  "Women, girls & young people": "ਔਰਤਾਂ, ਕੁੜੀਆਂ ਅਤੇ ਨੌਜਵਾਨ",
  "Creative advocacy since 2004": "2004 ਤੋਂ ਰਚਨਾਤਮਕ ਵਕਾਲਤ",
  "Free digital learning with UNICEF": "UNICEF ਦੇ ਨਾਲ ਮੁਫਤ ਡਿਜੀਟਲ ਸਿਖਲਾਈ",
  "Change BeginsWith Samvad.": "ਬਦਲਾਅ ਦੀ ਸ਼ੁਰੂਆਤ ਸੰਵਾਦ ਨਾਲ ਹੁੰਦੀ ਹੈ।",
  "Knowledge becomes<br /><em>confidence.</em>": "ਗਿਆਨ <em>ਭਰੋਸਾ</em> ਬਣ ਜਾਂਦਾ ਹੈ।",
  "Hard issues need<br /><em>open conversations.</em>": "ਸਖਤ ਮੁੱਦਿਆਂ ਨੂੰ <em>ਖੁੱਲ੍ਹੀ ਗੱਲਬਾਤ</em> ਦੀ ਲੋੜ ਹੈ।",
  "Understand money.<br /><em>Use it well.</em>": "ਪੈਸੇ ਨੂੰ ਸਮਝੋ।<br /><em>ਇਸਦੀ ਚੰਗੀ ਵਰਤੋਂ ਕਰੋ।</em>",
  "Build skills for<br /><em>what comes next.</em>": "ਅੱਗੇ ਆਉਣ ਵਾਲੇ ਸਮੇਂ ਲਈ <em>ਹੁਨਰ ਬਣਾਓ।</em>",
  "Education, health awareness and skills that help people participate more fully in their own development.": "ਸਿੱਖਿਆ, ਸਿਹਤ ਜਾਗਰੂਕਤਾ ਅਤੇ ਹੁਨਰ ਜੋ ਲੋਕਾਂ ਨੂੰ ਆਪਣੇ ਖੁਦ ਦੇ ਵਿਕਾਸ ਵਿੱਚ ਵਧੇਰੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਹਿੱਸਾ ਲੈਣ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਨ।",
  "From school workshops to theatre and documentary storytelling, we create spaces where people can ask, learn and act.": "ਸਕੂਲ ਦੀਆਂ ਵਰਕਸ਼ਾਪਾਂ ਤੋਂ ਲੈ ਕੇ ਥੀਏਟਰ ਅਤੇ ਡਾਕੂਮੈਂਟਰੀ ਕਹਾਣੀਆਂ ਸੁਣਾਉਣ ਤੱਕ, ਅਸੀਂ ਅਜਿਹੀਆਂ ਥਾਵਾਂ ਬਣਾਉਂਦੇ ਹਾਂ ਜਿੱਥੇ ਲੋਕ ਪੁੱਛ ਸਕਦੇ ਹਨ, ਸਿੱਖ ਸਕਦੇ ਹਨ ਅਤੇ ਕੰਮ ਕਰ ਸਕਦੇ ਹਨ।",
  "A free five-hour programme covering saving, banking, credit, insurance and safer digital payments.": "ਇੱਕ ਮੁਫਤ ਪੰਜ ਘੰਟੇ ਦਾ ਪ੍ਰੋਗਰਾਮ ਜਿਸ ਵਿੱਚ ਬੱਚਤ, ਬੈਂਕਿੰਗ, ਕ੍ਰੈਡਿਟ, ਬੀਮਾ ਅਤੇ ਸੁਰੱਖਿਅਤ ਡਿਜੀਟਲ ਭੁਗਤਾਨ ਸ਼ਾਮਲ ਹਨ।",
  "Free online courses and certificates for Indian youth preparing for study, work and new opportunities.": "ਪੜ੍ਹਾਈ, ਕੰਮ ਅਤੇ ਨਵੇਂ ਮੌਕਿਆਂ ਦੀ ਤਿਆਰੀ ਕਰ ਰਹੇ ਭਾਰਤੀ ਨੌਜਵਾਨਾਂ ਲਈ ਮੁਫਤ ਆਨਲਾਈਨ ਕੋਰਸ ਅਤੇ ਸਰਟੀਫਿਕੇਟ।",
  "See our programmes": "ਸਾਡੇ ਪ੍ਰੋਗਰਾਮ ਦੇਖੋ",
  "Learn more": "ਹੋਰ ਜਾਣੋ",
  "Scroll to discover": "ਖੋਜਣ ਲਈ ਸਕ੍ਰੋਲ ਕਰੋ",
  "Choose how to give": "ਦੇਣ ਦਾ ਤਰੀਕਾ ਚੁਣੋ",
  "A direct way to support the work.": "ਕੰਮ ਦਾ ਸਮਰਥਨ ਕਰਨ ਦਾ ਸਿੱਧਾ ਤਰੀਕਾ।",
  "Use UPI, the secure Razorpay checkout, or a direct bank transfer within India.": "ਯੂਪੀਆਈ (UPI), ਸੁਰੱਖਿਅਤ Razorpay ਚੈੱਕਆਉਟ, ਜਾਂ ਭਾਰਤ ਦੇ ਅੰਦਰ ਸਿੱਧਾ ਬੈਂਕ ਟ੍ਰਾਂਸਫਰ ਵਰਤੋ।",
  "Scan & pay": "ਸਕੈਨ ਅਤੇ ਭੁਗਤਾਨ ਕਰੋ",
  "Pay with any UPI app": "ਕਿਸੇ ਵੀ UPI ਐਪ ਨਾਲ ਭੁਗਤਾਨ ਕਰੋ",
  "UPI, Razorpay and bank transfer": "UPI, Razorpay ਅਤੇ ਬੈਂਕ ਟ੍ਰਾਂਸਫਰ",
  "Tax benefit subject to applicable provisions": "ਲਾਗੂ ਵਿਵਸਥਾਵਾਂ ਦੇ ਅਧੀਨ ਟੈਕਸ ਲਾਭ",
  "Receipt support": "ਰਸੀਦ ਸਹਾਇਤਾ",
  "Share your payment details with our team": "ਸਾਡੀ ਟੀਮ ਨਾਲ ਆਪਣੇ ਭੁਗਤਾਨ ਵੇਰਵੇ ਸਾਂਝੇ ਕਰੋ",
  "Request a receipt": "ਰਸੀਦ ਦੀ ਬੇਨਤੀ ਕਰੋ",
  "Recent updates": "ਹਾਲੀਆ ਅੱਪਡੇਟ",
  "This timeline is loaded live from Facebook. If Facebook blocks the preview because of your browser or privacy settings, open the page directly.": "ਇਹ ਟਾਈਮਲਾਈਨ Facebook ਤੋਂ ਲਾਈਵ ਲੋਡ ਕੀਤੀ ਗਈ ਹੈ। ਜੇਕਰ Facebook ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਜਾਂ ਗੋਪਨੀਯਤਾ ਸੈਟਿੰਗਾਂ ਕਾਰਨ ਪੂਰਵਦਰਸ਼ਨ ਨੂੰ ਬਲੌਕ ਕਰਦਾ ਹੈ, ਤਾਂ ਪੰਨੇ ਨੂੰ ਸਿੱਧਾ ਖੋਲ੍ਹੋ।",
  "Open Punjabi Samvad on Facebook": "Facebook 'ਤੇ ਪੰਜਾਬੀ ਸੰਵਾਦ ਖੋਲ੍ਹੋ",
  "Apply for an internship": "ਇੰਟਰਨਸ਼ਿਪ ਲਈ ਅਪਲਾਈ ਕਰੋ",
  "Volunteer or share expertise": "ਵਲੰਟੀਅਰ ਬਣੋ ਜਾਂ ਮਹਾਰਤ ਸਾਂਝੀ ਕਰੋ",
  "University network": "ਯੂਨੀਵਰਸਿਟੀ ਨੈੱਟਵਰਕ",
  "What you gain": "ਤੁਸੀਂ ਕੀ ਪ੍ਰਾਪਤ ਕਰਦੇ ਹੋ",
  "Areas of contribution": "ਯੋਗਦਾਨ ਦੇ ਖੇਤਰ",
  "Recent student work": "ਹਾਲੀਆ ਵਿਦਿਆਰਥੀ ਦਾ ਕੰਮ",
  "Vinit Kumar": "ਵਿਨੀਤ ਕੁਮਾਰ",
  "UPES, Dehradun · B.Tech CSE": "ਯੂਪੀਈਐਸ (UPES), ਦੇਹਰਾਦੂਨ · ਬੀ.ਟੈਕ ਸੀਐਸਈ (B.Tech CSE)",
  "Pritish Anand": "ਪ੍ਰਤੀਸ਼ ਆਨੰਦ",
  "Chandigarh University": "ਚੰਡੀਗੜ੍ਹ ਯੂਨੀਵਰਸਿਟੀ",
  "Email us": "ਸਾਨੂੰ ਈਮੇਲ ਕਰੋ",
  "Volunteer with Punjabi Samvad": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਨਾਲ ਵਲੰਟੀਅਰ",
  "Explore the programme": "ਪ੍ਰੋਗਰਾਮ ਦੀ ਪੜਚੋਲ ਕਰੋ",
  "Why this programme matters": "ਇਹ ਪ੍ਰੋਗਰਾਮ ਕਿਉਂ ਮਹੱਤਵ ਰੱਖਦਾ ਹੈ",
  "Your browser does not support embedded video.": "ਤੁਹਾਡਾ ਬ੍ਰਾਊਜ਼ਰ ਏਮਬੈਡਡ ਵੀਡੀਓ ਦਾ ਸਮਰਥਨ ਨਹੀਂ ਕਰਦਾ ਹੈ।",
  "What learners cover": "ਸਿੱਖਿਆਰਥੀ ਕੀ ਕਵਰ ਕਰਦੇ ਹਨ",
  "Useful knowledge, built for real life.": "ਲਾਭਦਾਇਕ ਗਿਆਨ, ਅਸਲ ਜ਼ਿੰਦਗੀ ਲਈ ਬਣਾਇਆ ਗਿਆ।",
  "Learn online": "ਆਨਲਾਈਨ ਸਿੱਖੋ",
  "Official enrolment": "ਅਧਿਕਾਰਤ ਦਾਖਲਾ",
  "Enroll now": "ਹੁਣੇ ਦਾਖਲਾ ਲਓ",
  "Stories from the field": "ਖੇਤਰ ਤੋਂ ਕਹਾਣੀਆਂ",
  "A book by Jyoti Bawa": "ਜੋਤੀ ਬਾਵਾ ਦੀ ਇੱਕ ਕਿਤਾਬ",
  "Jyoti has pledged all profits from the book to support underprivileged girls, community welfare and awareness programmes.": "ਜੋਤੀ ਨੇ ਕਿਤਾਬ ਦੇ ਸਾਰੇ ਮੁਨਾਫੇ ਨੂੰ ਪਛੜੀਆਂ ਕੁੜੀਆਂ, ਭਾਈਚਾਰਕ ਭਲਾਈ ਅਤੇ ਜਾਗਰੂਕਤਾ ਪ੍ਰੋਗਰਾਮਾਂ ਦੇ ਸਮਰਥਨ ਲਈ ਦੇਣ ਦਾ ਵਾਅਦਾ ਕੀਤਾ ਹੈ।",
  "Featured in the media": "ਮੀਡੀਆ ਵਿੱਚ ਪ੍ਰਦਰਸ਼ਿਤ",
  "Reports, interviews and partnerships": "ਰਿਪੋਰਟਾਂ, ਇੰਟਰਵਿਊਆਂ ਅਤੇ ਭਾਈਵਾਲੀ",
  "Read feature": "ਫੀਚਰ ਪੜ੍ਹੋ",
  "Public standards": "ਜਨਤਕ ਮਿਆਰ",
  "Email Punjabi Samvad": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੂੰ ਈਮੇਲ ਕਰੋ",
  "All policies": "ਸਾਰੀਆਂ ਨੀਤੀਆਂ",
  "Applies to": "ਇਸ 'ਤੇ ਲਾਗੂ ਹੁੰਦਾ ਹੈ",
  "Governing Body members, employees, consultants, volunteers, interns, facilitators and contractors where the subject relates to their role.": "ਗਵਰਨਿੰਗ ਬਾਡੀ ਦੇ ਮੈਂਬਰ, ਕਰਮਚਾਰੀ, ਸਲਾਹਕਾਰ, ਵਲੰਟੀਅਰ, ਇੰਟਰਨ, ਸਹੂਲਤ ਦੇਣ ਵਾਲੇ ਅਤੇ ਠੇਕੇਦਾਰ ਜਿੱਥੇ ਵਿਸ਼ਾ ਉਹਨਾਂ ਦੀ ਭੂਮਿਕਾ ਨਾਲ ਸਬੰਧਤ ਹੈ।",
  "Official references": "ਅਧਿਕਾਰਤ ਹਵਾਲੇ",
  "These government sources support the legal points in this policy.": "ਇਹ ਸਰਕਾਰੀ ਸਰੋਤ ਇਸ ਨੀਤੀ ਵਿੱਚ ਕਾਨੂੰਨੀ ਨੁਕਤਿਆਂ ਦਾ ਸਮਰਥਨ ਕਰਦੇ ਹਨ।",
  "Raise a concern": "ਕੋਈ ਚਿੰਤਾ ਉਠਾਓ",
  "Email Punjabi Samvad with the policy name and the safest way to contact you. A statutory or emergency report should also go to the authority named in the relevant policy.": "ਪਾਲਿਸੀ ਦੇ ਨਾਮ ਅਤੇ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਨ ਦੇ ਸਭ ਤੋਂ ਸੁਰੱਖਿਅਤ ਤਰੀਕੇ ਨਾਲ ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੂੰ ਈਮੇਲ ਕਰੋ। ਇੱਕ ਵਿਧਾਨਕ ਜਾਂ ਐਮਰਜੈਂਸੀ ਰਿਪੋਰਟ ਸਬੰਧਤ ਨੀਤੀ ਵਿੱਚ ਦਰਸਾਏ ਗਏ ਅਥਾਰਟੀ ਨੂੰ ਵੀ ਜਾਣੀ ਚਾਹੀਦੀ ਹੈ।",
  "Punjabi Samvad follows applicable law where it sets a stricter rule or a different process. This public page does not replace a statutory committee order, employment term, funding agreement or signed internal procedure.": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਲਾਗੂ ਕਾਨੂੰਨ ਦੀ ਪਾਲਣਾ ਕਰਦਾ ਹੈ ਜਿੱਥੇ ਇਹ ਸਖ਼ਤ ਨਿਯਮ ਜਾਂ ਵੱਖਰੀ ਪ੍ਰਕਿਰਿਆ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ। ਇਹ ਜਨਤਕ ਪੰਨਾ ਕਨੂੰਨੀ ਕਮੇਟੀ ਦੇ ਆਦੇਸ਼, ਰੁਜ਼ਗਾਰ ਦੀ ਮਿਆਦ, ਫੰਡਿੰਗ ਸਮਝੌਤੇ ਜਾਂ ਹਸਤਾਖਰਿਤ ਅੰਦਰੂਨੀ ਪ੍ਰਕਿਰਿਆ ਦੀ ਥਾਂ ਨਹੀਂ ਲੈਂਦਾ।",
  "Explore Punjabi Samvad": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀ ਪੜਚੋਲ ਕਰੋ",
  "No matching pages yet.": "ਅਜੇ ਤੱਕ ਕੋਈ ਮੇਲ ਖਾਂਦੇ ਪੰਨੇ ਨਹੀਂ ਹਨ।",
  "Try a broader phrase, or visit": "ਇੱਕ ਵਿਆਪਕ ਵਾਕਾਂਸ਼ ਅਜ਼ਮਾਓ, ਜਾਂ ਇੱਥੇ ਜਾਓ",
  "and ask us directly.": "ਅਤੇ ਸਾਨੂੰ ਸਿੱਧਾ ਪੁੱਛੋ।",
  "Find what you need": "ਜੋ ਤੁਹਾਨੂੰ ਚਾਹੀਦਾ ਹੈ ਉਹ ਲੱਭੋ",
  "Popular": "ਪ੍ਰਸਿੱਧ",
  "Our impact": "ਸਾਡਾ ਪ੍ਰਭਾਵ",
  "Governance and care": "ਗਵਰਨੈਂਸ ਅਤੇ ਦੇਖਭਾਲ"
};

let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

for (const [eng, pa] of Object.entries(translations)) {
  const safeEng = eng.replace(/"/g, '\\"');
  const safePa = pa.replace(/"/g, '\\"');
  
  const blockRegex = new RegExp(`"${safeEng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}":\\s*{\\s*en:\\s*"${safeEng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}",\\s*pa:\\s*".*?"\\s*}`, 'g');
  
  if (content.match(blockRegex)) {
    content = content.replace(blockRegex, `"${safeEng}": {\n    en: "${safeEng}",\n    pa: "${safePa}"\n  }`);
  } else {
    // If not found, we append it
    const insertionMarker = '\n};\n\nconst LanguageContext = createContext';
    const insertionIndex = content.indexOf(insertionMarker);
    if (insertionIndex !== -1) {
      content = content.slice(0, insertionIndex) + `,\n  "${safeEng}": {\n    en: "${safeEng}",\n    pa: "${safePa}"\n  }` + content.slice(insertionIndex);
    }
  }
}

fs.writeFileSync('src/context/LanguageContext.tsx', content);
console.log("Injected remaining translations!");
