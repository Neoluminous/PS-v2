import fs from 'fs';

const translations: Record<string, string> = {
  "Experience you can use after the placement ends.": "ਪਲੇਸਮੈਂਟ ਖਤਮ ਹੋਣ ਤੋਂ ਬਾਅਦ ਤੁਸੀਂ ਜਿਸ ਅਨੁਭਵ ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹੋ।",
  "An internship with Punjabi Samvad gives you a close look at the decisions behind public-interest work: how an issue is researched, how information is adapted for different audiences, how an activity is organised and how the work is documented afterwards.": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਨਾਲ ਇੰਟਰਨਸ਼ਿਪ ਤੁਹਾਨੂੰ ਜਨਤਕ ਹਿੱਤਾਂ ਦੇ ਕੰਮ ਪਿੱਛੇ ਫੈਸਲਿਆਂ 'ਤੇ ਨੇੜਿਓਂ ਨਜ਼ਰ ਮਾਰਨ ਦਾ ਮੌਕਾ ਦਿੰਦੀ ਹੈ: ਕਿਸੇ ਮੁੱਦੇ ਦੀ ਖੋਜ ਕਿਵੇਂ ਕੀਤੀ ਜਾਂਦੀ ਹੈ, ਵੱਖ-ਵੱਖ ਦਰਸ਼ਕਾਂ ਲਈ ਜਾਣਕਾਰੀ ਕਿਵੇਂ ਢਾਲੀ ਜਾਂਦੀ ਹੈ, ਕੋਈ ਗਤੀਵਿਧੀ ਕਿਵੇਂ ਆਯੋਜਿਤ ਕੀਤੀ ਜਾਂਦੀ ਹੈ ਅਤੇ ਬਾਅਦ ਵਿੱਚ ਕੰਮ ਦਾ ਦਸਤਾਵੇਜ਼ੀਕਰਨ ਕਿਵੇਂ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।",
  "Your assignment is shaped around current programme needs and the skills you bring. You may research, write, prepare campaign material, support an event, organise records or help with digital communication. The scope is agreed before you begin, so you know what you are responsible for and what you should learn from it.": "ਤੁਹਾਡੀ ਜ਼ਿੰਮੇਵਾਰੀ ਮੌਜੂਦਾ ਪ੍ਰੋਗਰਾਮ ਦੀਆਂ ਲੋੜਾਂ ਅਤੇ ਤੁਹਾਡੇ ਦੁਆਰਾ ਲਿਆਂਦੇ ਹੁਨਰ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਆਕਾਰ ਲੈਂਦੀ ਹੈ। ਤੁਸੀਂ ਖੋਜ ਕਰ ਸਕਦੇ ਹੋ, ਲਿਖ ਸਕਦੇ ਹੋ, ਮੁਹਿੰਮ ਸਮੱਗਰੀ ਤਿਆਰ ਕਰ ਸਕਦੇ ਹੋ, ਕਿਸੇ ਇਵੈਂਟ ਦਾ ਸਮਰਥਨ ਕਰ ਸਕਦੇ ਹੋ, ਰਿਕਾਰਡ ਵਿਵਸਥਿਤ ਕਰ ਸਕਦੇ ਹੋ ਜਾਂ ਡਿਜੀਟਲ ਸੰਚਾਰ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦੇ ਹੋ। ਦਾਇਰੇ 'ਤੇ ਤੁਹਾਡੇ ਸ਼ੁਰੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਸਹਿਮਤੀ ਹੁੰਦੀ ਹੈ, ਤਾਂ ਜੋ ਤੁਸੀਂ ਜਾਣ ਸਕੋ ਕਿ ਤੁਸੀਂ ਕਿਸ ਲਈ ਜ਼ਿੰਮੇਵਾਰ ਹੋ ਅਤੇ ਤੁਹਾਨੂੰ ਇਸ ਤੋਂ ਕੀ ਸਿੱਖਣਾ ਚਾਹੀਦਾ ਹੈ।",
  "Work that connects study with practice.": "ਕੰਮ ਜੋ ਅਧਿਐਨ ਨੂੰ ਅਭਿਆਸ ਨਾਲ ਜੋੜਦਾ ਹੈ।",
  "Assignments are matched to the student's background and the work Punjabi Samvad is undertaking at the time.": "ਅਸਾਈਨਮੈਂਟ ਵਿਦਿਆਰਥੀ ਦੇ ਪਿਛੋਕੜ ਅਤੇ ਪੰਜਾਬੀ ਸੰਵਾਦ ਉਸ ਸਮੇਂ ਕਰ ਰਹੇ ਕੰਮ ਨਾਲ ਮੇਲ ਖਾਂਦੀਆਂ ਹਨ।",
  "Featured two students who completed internships with us.": "ਸਾਡੇ ਨਾਲ ਇੰਟਰਨਸ਼ਿਪ ਪੂਰੀ ਕਰਨ ਵਾਲੇ ਦੋ ਵਿਦਿਆਰਥੀਆਂ ਦੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ।",
  "Vinit and Pritish each completed a 60-hour Literature Promotion Internship. Their assignments show how one role can combine subject knowledge, communication and direct exposure to public-interest work.": "ਵਿਨੀਤ ਅਤੇ ਪ੍ਰਤੀਸ਼ ਹਰ ਇੱਕ ਨੇ 60 ਘੰਟੇ ਦੀ ਸਾਹਿਤ ਪ੍ਰਚਾਰ ਇੰਟਰਨਸ਼ਿਪ ਪੂਰੀ ਕੀਤੀ। ਉਹਨਾਂ ਦੀਆਂ ਅਸਾਈਨਮੈਂਟਾਂ ਦਰਸਾਉਂਦੀਆਂ ਹਨ ਕਿ ਕਿਵੇਂ ਇੱਕ ਭੂਮਿਕਾ ਵਿਸ਼ੇ ਦੇ ਗਿਆਨ, ਸੰਚਾਰ ਅਤੇ ਜਨਤਕ-ਹਿੱਤ ਦੇ ਕੰਮ ਦੇ ਸਿੱਧੇ ਸੰਪਰਕ ਨੂੰ ਜੋੜ ਸਕਦੀ ਹੈ।",
  "Vinit brought a computer-science perspective to a role centred on literature, language and reading culture. He supported literary campaigns and awareness programmes, worked with students and community members, and helped use literature as a starting point for discussion about education, culture and social concerns.": "ਵਿਨੀਤ ਨੇ ਸਾਹਿਤ, ਭਾਸ਼ਾ ਅਤੇ ਪੜ੍ਹਨ ਦੇ ਸੱਭਿਆਚਾਰ 'ਤੇ ਕੇਂਦ੍ਰਿਤ ਭੂਮਿਕਾ ਲਈ ਕੰਪਿਊਟਰ-ਸਾਇੰਸ ਦਾ ਨਜ਼ਰੀਆ ਲਿਆਂਦਾ। ਉਸਨੇ ਸਾਹਿਤਕ ਮੁਹਿੰਮਾਂ ਅਤੇ ਜਾਗਰੂਕਤਾ ਪ੍ਰੋਗਰਾਮਾਂ ਦਾ ਸਮਰਥਨ ਕੀਤਾ, ਵਿਦਿਆਰਥੀਆਂ ਅਤੇ ਭਾਈਚਾਰੇ ਦੇ ਮੈਂਬਰਾਂ ਨਾਲ ਕੰਮ ਕੀਤਾ, ਅਤੇ ਸਿੱਖਿਆ, ਸੱਭਿਆਚਾਰ ਅਤੇ ਸਮਾਜਿਕ ਸਰੋਕਾਰਾਂ ਬਾਰੇ ਚਰਚਾ ਲਈ ਸਾਹਿਤ ਦੀ ਵਰਤੋਂ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕੀਤੀ।",
  "His placement also included digital-awareness training on the responsible use of AI and ChatGPT for education, research, communication and community outreach. It gave him room to connect an emerging technical field with the human judgement needed in public-facing work.": "ਉਸਦੀ ਪਲੇਸਮੈਂਟ ਵਿੱਚ ਸਿੱਖਿਆ, ਖੋਜ, ਸੰਚਾਰ ਅਤੇ ਕਮਿਊਨਿਟੀ ਆਊਟਰੀਚ ਲਈ AI ਅਤੇ ChatGPT ਦੀ ਜ਼ਿੰਮੇਵਾਰ ਵਰਤੋਂ ਬਾਰੇ ਡਿਜੀਟਲ-ਜਾਗਰੂਕਤਾ ਸਿਖਲਾਈ ਵੀ ਸ਼ਾਮਲ ਸੀ। ਇਸਨੇ ਉਸਨੂੰ ਜਨਤਕ ਕੰਮਾਂ ਲਈ ਲੋੜੀਂਦੇ ਮਨੁੱਖੀ ਫੈਸਲਿਆਂ ਨਾਲ ਇੱਕ ਉੱਭਰਦੇ ਤਕਨੀਕੀ ਖੇਤਰ ਨੂੰ ਜੋੜਨ ਦੀ ਜਗ੍ਹਾ ਦਿੱਤੀ।",
  "60-hour placement": "60-ਘੰਟੇ ਦੀ ਪਲੇਸਮੈਂਟ",
  "Your preferred dates and available hours": "ਤੁਹਾਡੀਆਂ ਤਰਜੀਹੀ ਤਾਰੀਖਾਂ ਅਤੇ ਉਪਲਬਧ ਘੰਟੇ",
  "The issues or programme areas you want to explore": "ਮੁੱਦੇ ਜਾਂ ਪ੍ਰੋਗਰਾਮ ਖੇਤਰ ਜਿਨ੍ਹਾਂ ਦੀ ਤੁਸੀਂ ਪੜਚੋਲ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ",
  "The skills you can contribute and want to practise": "ਉਹ ਹੁਨਰ ਜਿਨ੍ਹਾਂ ਦਾ ਤੁਸੀਂ ਯੋਗਦਾਨ ਪਾ ਸਕਦੇ ਹੋ ਅਤੇ ਅਭਿਆਸ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ",
  "Your CV and any university requirements": "ਤੁਹਾਡਾ ਸੀਵੀ ਅਤੇ ਕੋਈ ਵੀ ਯੂਨੀਵਰਸਿਟੀ ਲੋੜਾਂ",
  "Your time and skills can change someone's life.": "ਤੁਹਾਡਾ ਸਮਾਂ ਅਤੇ ਹੁਨਰ ਕਿਸੇ ਦੀ ਜ਼ਿੰਦਗੀ ਬਦਲ ਸਕਦਾ ਹੈ।",
  "You may be able to support an event, a training session, research, health education, the arts, communication or programme planning. Tell us what you do well and how much time you can offer; we will respond when that experience matches a current need.": "ਤੁਸੀਂ ਕਿਸੇ ਇਵੈਂਟ, ਇੱਕ ਸਿਖਲਾਈ ਸੈਸ਼ਨ, ਖੋਜ, ਸਿਹਤ ਸਿੱਖਿਆ, ਕਲਾ, ਸੰਚਾਰ ਜਾਂ ਪ੍ਰੋਗਰਾਮ ਦੀ ਯੋਜਨਾਬੰਦੀ ਦਾ ਸਮਰਥਨ ਕਰਨ ਦੇ ਯੋਗ ਹੋ ਸਕਦੇ ਹੋ। ਸਾਨੂੰ ਦੱਸੋ ਕਿ ਤੁਸੀਂ ਕੀ ਚੰਗਾ ਕਰਦੇ ਹੋ ਅਤੇ ਤੁਸੀਂ ਕਿੰਨਾ ਸਮਾਂ ਦੇ ਸਕਦੇ ਹੋ; ਜਦੋਂ ਇਹ ਅਨੁਭਵ ਮੌਜੂਦਾ ਲੋੜ ਨਾਲ ਮੇਲ ਖਾਂਦਾ ਹੈ ਤਾਂ ਅਸੀਂ ਜਵਾਬ ਦੇਵਾਂਗੇ।",
  "What are you looking for?": "ਤੁਸੀਂ ਕੀ ਲੱਭ ਰਹੇ ਹੋ?",
  "Search programmes, public-health work, impact, people, policies and ways to participate.": "ਪ੍ਰੋਗਰਾਮ, ਜਨਤਕ-ਸਿਹਤ ਦੇ ਕੰਮ, ਪ੍ਰਭਾਵ, ਲੋਕ, ਨੀਤੀਆਂ ਅਤੇ ਭਾਗ ਲੈਣ ਦੇ ਤਰੀਕਿਆਂ ਦੀ ਖੋਜ ਕਰੋ।",
  "Search ": "ਖੋਜ ",
  "Standards that guide how Punjabi Samvad works, protects people and uses resources.": "ਮਿਆਰ ਜੋ ਮਾਰਗਦਰਸ਼ਨ ਕਰਦੇ ਹਨ ਕਿ ਪੰਜਾਬੀ ਸੰਵਾਦ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ, ਲੋਕਾਂ ਦੀ ਰੱਖਿਆ ਕਰਦਾ ਹੈ ਅਤੇ ਸਰੋਤਾਂ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ।",
  "Page not found": "ਪੰਨਾ ਨਹੀਂ ਮਿਲਿਆ",
  "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.": "ਜਿਸ ਪੰਨੇ ਦੀ ਤੁਸੀਂ ਭਾਲ ਕਰ ਰਹੇ ਹੋ, ਹੋ ਸਕਦਾ ਹੈ ਕਿ ਉਸਨੂੰ ਹਟਾ ਦਿੱਤਾ ਗਿਆ ਹੋਵੇ, ਉਸਦਾ ਨਾਮ ਬਦਲਿਆ ਗਿਆ ਹੋਵੇ, ਜਾਂ ਅਸਥਾਈ ਤੌਰ 'ਤੇ ਉਪਲਬਧ ਨਾ ਹੋਵੇ।",
  "12AB Registered ": "12AB ਰਜਿਸਟਰਡ ",
  "80G ": "80G "
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
