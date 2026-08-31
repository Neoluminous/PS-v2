import fs from 'fs';

const translations: Record<string, string> = {
  "After Amit Bawa’s passing in 2014, Jyoti Bawa continued the work they began together. As President, she leads Punjabi Samvad across women’s empowerment, education, public health, mental well-being, substance-abuse awareness and Punjabi culture.": "2014 ਵਿੱਚ ਅਮਿਤ ਬਾਵਾ ਦੇ ਦੇਹਾਂਤ ਤੋਂ ਬਾਅਦ, ਜੋਤੀ ਬਾਵਾ ਨੇ ਉਨ੍ਹਾਂ ਦੁਆਰਾ ਮਿਲ ਕੇ ਸ਼ੁਰੂ ਕੀਤੇ ਕੰਮ ਨੂੰ ਜਾਰੀ ਰੱਖਿਆ। ਪ੍ਰਧਾਨ ਵਜੋਂ, ਉਹ ਔਰਤਾਂ ਦੇ ਸਸ਼ਕਤੀਕਰਨ, ਸਿੱਖਿਆ, ਜਨਤਕ ਸਿਹਤ, ਮਾਨਸਿਕ ਤੰਦਰੁਸਤੀ, ਨਸ਼ੀਲੇ ਪਦਾਰਥਾਂ ਦੀ ਦੁਰਵਰਤੋਂ ਪ੍ਰਤੀ ਜਾਗਰੂਕਤਾ ਅਤੇ ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ ਵਿੱਚ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀ ਅਗਵਾਈ ਕਰਦੀ ਹੈ।",
  "The methods have grown and the partnerships have widened, but dialogue remains the starting point.": "ਤਰੀਕੇ ਵਧੇ ਹਨ ਅਤੇ ਭਾਈਵਾਲੀ ਦਾ ਵਿਸਥਾਰ ਹੋਇਆ ਹੈ, ਪਰ ਗੱਲਬਾਤ ਸ਼ੁਰੂਆਤੀ ਬਿੰਦੂ ਬਣੀ ਹੋਈ ਹੈ।",
  "People who strengthen the work": "ਉਹ ਲੋਕ ਜੋ ਕੰਮ ਨੂੰ ਮਜ਼ਬੂਤ ਕਰਦੇ ਹਨ",
  "The people who stand behind the work.": "ਉਹ ਲੋਕ ਜੋ ਕੰਮ ਦੇ ਪਿੱਛੇ ਖੜ੍ਹੇ ਹਨ।",
  "Punjabi Samvad is fortunate to have people who believe in its work and support it in many different ways. Some contribute financially, while others share their expertise, resources, connections or practical help when it is needed. Each contribution, large or small, helps Punjabi Samvad continue its work with communities and take meaningful ideas forward.": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਭਾਗਸ਼ਾਲੀ ਹੈ ਕਿ ਉਸ ਕੋਲ ਅਜਿਹੇ ਲੋਕ ਹਨ ਜੋ ਇਸਦੇ ਕੰਮ ਵਿੱਚ ਵਿਸ਼ਵਾਸ ਕਰਦੇ ਹਨ ਅਤੇ ਕਈ ਵੱਖੋ-ਵੱਖਰੇ ਤਰੀਕਿਆਂ ਨਾਲ ਇਸਦਾ ਸਮਰਥਨ ਕਰਦੇ ਹਨ। ਕੁਝ ਵਿੱਤੀ ਯੋਗਦਾਨ ਪਾਉਂਦੇ ਹਨ, ਜਦੋਂ ਕਿ ਦੂਸਰੇ ਲੋੜ ਪੈਣ 'ਤੇ ਆਪਣੀ ਮੁਹਾਰਤ, ਸਰੋਤ, ਸੰਪਰਕ ਜਾਂ ਵਿਹਾਰਕ ਮਦਦ ਸਾਂਝੀ ਕਰਦੇ ਹਨ। ਹਰੇਕ ਯੋਗਦਾਨ, ਛੋਟਾ ਜਾਂ ਵੱਡਾ, ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੂੰ ਭਾਈਚਾਰਿਆਂ ਨਾਲ ਕੰਮ ਜਾਰੀ ਰੱਖਣ ਅਤੇ ਸਾਰਥਕ ਵਿਚਾਰਾਂ ਨੂੰ ਅੱਗੇ ਵਧਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
  "A supporter of Punjabi Samvad": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦਾ ਇੱਕ ਸਮਰਥਕ",
  "See how the work is delivered": "ਦੇਖੋ ਕਿ ਕੰਮ ਕਿਵੇਂ ਪ੍ਰਦਾਨ ਕੀਤਾ ਜਾਂਦਾ ਹੈ",
  "Understand the audience and setting.": "ਦਰਸ਼ਕਾਂ ਅਤੇ ਸੈਟਿੰਗ ਨੂੰ ਸਮਝੋ।",
  "Design": "ਡਿਜ਼ਾਈਨ",
  "Choose the right expertise and format.": "ਸਹੀ ਮੁਹਾਰਤ ਅਤੇ ਫਾਰਮੈਟ ਚੁਣੋ।",
  "Deliver": "ਪ੍ਰਦਾਨ ਕਰੋ",
  "Create room for questions and participation.": "ਸਵਾਲਾਂ ਅਤੇ ਭਾਗੀਦਾਰੀ ਲਈ ਜਗ੍ਹਾ ਬਣਾਓ।",
  "Learn": "ਸਿੱਖੋ",
  "Use feedback to strengthen future work.": "ਭਵਿੱਖ ਦੇ ਕੰਮ ਨੂੰ ਮਜ਼ਬੂਤ ​​ਕਰਨ ਲਈ ਫੀਡਬੈਕ ਦੀ ਵਰਤੋਂ ਕਰੋ।",
  "From recent workshops": "ਹਾਲੀਆ ਵਰਕਸ਼ਾਪਾਂ ਤੋਂ",
  "Learning by making.": "ਬਣਾ ਕੇ ਸਿੱਖਣਾ।",
  "Soap making, traditional masala preparation and Phulkari were taught through practical sessions for rural girls and women.": "ਸਾਬਣ ਬਣਾਉਣਾ, ਰਵਾਇਤੀ ਮਸਾਲਾ ਤਿਆਰ ਕਰਨਾ ਅਤੇ ਫੁਲਕਾਰੀ ਪੇਂਡੂ ਕੁੜੀਆਂ ਅਤੇ ਔਰਤਾਂ ਲਈ ਪ੍ਰੈਕਟੀਕਲ ਸੈਸ਼ਨਾਂ ਰਾਹੀਂ ਸਿਖਾਈ ਜਾਂਦੀ ਸੀ।",
  "Read the participant stories": "ਭਾਗੀਦਾਰ ਦੀਆਂ ਕਹਾਣੀਆਂ ਪੜ੍ਹੋ",
  "Digital learning with UNICEF": "ਯੂਨੀਸੈਫ ਨਾਲ ਡਿਜੀਟਲ ਸਿਖਲਾਈ",
  "Free, job-relevant learning for young people.": "ਨੌਜਵਾਨਾਂ ਲਈ ਮੁਫਤ, ਨੌਕਰੀ ਨਾਲ ਸਬੰਧਤ ਸਿਖਲਾਈ।",
  "Financial literacy with HDFC Securities": "ਐਚਡੀਐਫਸੀ ਸਕਿਓਰਿਟੀਜ਼ ਨਾਲ ਵਿੱਤੀ ਸਾਖਰਤਾ",
  "Practical learning for everyday money decisions.": "ਰੋਜ਼ਾਨਾ ਪੈਸੇ ਦੇ ਫੈਸਲਿਆਂ ਲਈ ਪ੍ਰੈਕਟੀਕਲ ਸਿਖਲਾਈ।",
  "The national self-risk assessment offers a private route to reliable HIV and STI information, testing guidance and treatment support.": "ਰਾਸ਼ਟਰੀ ਸਵੈ-ਜੋਖਮ ਮੁਲਾਂਕਣ ਭਰੋਸੇਯੋਗ HIV ਅਤੇ STI ਜਾਣਕਾਰੀ, ਟੈਸਟਿੰਗ ਮਾਰਗਦਰਸ਼ਨ ਅਤੇ ਇਲਾਜ ਸਹਾਇਤਾ ਲਈ ਇੱਕ ਨਿੱਜੀ ਰਸਤਾ ਪੇਸ਼ ਕਰਦਾ ਹੈ।",
  "Use the QR code in the official campaign artwork, visit Breakfree India or call the national AIDS helpline at 1097.": "ਅਧਿਕਾਰਤ ਮੁਹਿੰਮ ਕਲਾਕ੍ਰਿਤੀ ਵਿੱਚ QR ਕੋਡ ਦੀ ਵਰਤੋਂ ਕਰੋ, ਬ੍ਰੇਕਫ੍ਰੀ ਇੰਡੀਆ 'ਤੇ ਜਾਓ ਜਾਂ 1097 'ਤੇ ਰਾਸ਼ਟਰੀ ਏਡਜ਼ ਹੈਲਪਲਾਈਨ 'ਤੇ ਕਾਲ ਕਰੋ।",
  "Bring a programme to your community or institution": "ਆਪਣੇ ਭਾਈਚਾਰੇ ਜਾਂ ਸੰਸਥਾ ਵਿੱਚ ਇੱਕ ਪ੍ਰੋਗਰਾਮ ਲਿਆਓ",
  "Explore the programmes behind the figures": "ਅੰਕੜਿਆਂ ਦੇ ਪਿੱਛੇ ਪ੍ਰੋਗਰਾਮਾਂ ਦੀ ਪੜਚੋਲ ਕਰੋ",
  "His contribution gives students practical financial support so they can remain in education and pursue their studies.": "ਉਸਦਾ ਯੋਗਦਾਨ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਵਿਹਾਰਕ ਵਿੱਤੀ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ ਤਾਂ ਜੋ ਉਹ ਸਿੱਖਿਆ ਵਿੱਚ ਬਣੇ ਰਹਿਣ ਅਤੇ ਆਪਣੀ ਪੜ੍ਹਾਈ ਜਾਰੀ ਰੱਖ ਸਕਣ।"
};

let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

for (const [eng, pa] of Object.entries(translations)) {
  const safeEng = eng.replace(/"/g, '\\"');
  const safePa = pa.replace(/"/g, '\\"');
  
  const blockRegex = new RegExp(`"${safeEng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}":\\s*{\\s*en:\\s*"${safeEng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}",\\s*pa:\\s*"${safeEng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"\\s*}`, 'g');
  
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
