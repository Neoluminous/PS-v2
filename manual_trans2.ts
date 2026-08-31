import fs from 'fs';

const translations = {
  "Punjabi Samvad begins": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਸ਼ੁਰੂ ਹੋਇਆ",
  "Amit Bawa and Jyoti Bawa start work in response to gender discrimination and social concerns around them.": "ਅਮਿਤ ਬਾਵਾ ਅਤੇ ਜੋਤੀ ਬਾਵਾ ਨੇ ਆਪਣੇ ਆਲੇ-ਦੁਆਲੇ ਲਿੰਗ ਭੇਦਭਾਵ ਅਤੇ ਸਮਾਜਿਕ ਚਿੰਤਾਵਾਂ ਦੇ ਜਵਾਬ ਵਿੱਚ ਕੰਮ ਸ਼ੁਰੂ ਕੀਤਾ।",
  "A formal organisation": "ਇੱਕ ਰਸਮੀ ਸੰਸਥਾ",
  "Punjabi Samvad is registered, giving its community work a lasting institutional base.": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਰਜਿਸਟਰਡ ਹੈ, ਜੋ ਇਸਦੇ ਭਾਈਚਾਰਕ ਕੰਮ ਨੂੰ ਇੱਕ ਸਥਾਈ ਸੰਸਥਾਗਤ ਅਧਾਰ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।",
  "The work continues": "ਕੰਮ ਜਾਰੀ ਹੈ",
  "After Amit Bawa’s passing, Jyoti Bawa carries forward the organisation they built together.": "ਅਮਿਤ ਬਾਵਾ ਦੇ ਦੇਹਾਂਤ ਤੋਂ ਬਾਅਦ, ਜੋਤੀ ਬਾਵਾ ਉਸ ਸੰਸਥਾ ਨੂੰ ਅੱਗੇ ਵਧਾਉਂਦੇ ਹਨ ਜੋ ਉਨ੍ਹਾਂ ਨੇ ਮਿਲ ਕੇ ਬਣਾਈ ਸੀ।",
  "Culture travels further": "ਸੱਭਿਆਚਾਰ ਹੋਰ ਅੱਗੇ ਵਧਦਾ ਹੈ",
  "Tirhayi Umar and participation in the World Punjabi Conference extend the use of documentary and culture for social awareness.": "ਤਿਰਹਾਈ ਉਮਰ ਅਤੇ ਵਿਸ਼ਵ ਪੰਜਾਬੀ ਕਾਨਫਰੰਸ ਵਿੱਚ ਭਾਗੀਦਾਰੀ ਸਮਾਜਿਕ ਜਾਗਰੂਕਤਾ ਲਈ ਡਾਕੂਮੈਂਟਰੀ ਅਤੇ ਸੱਭਿਆਚਾਰ ਦੀ ਵਰਤੋਂ ਨੂੰ ਵਧਾਉਂਦੀ ਹੈ।",
  "A wider national focus": "ਇੱਕ ਵਿਸ਼ਾਲ ਰਾਸ਼ਟਰੀ ਫੋਕਸ",
  "Community experience now meets institutional partnerships designed to take useful programmes to more people.": "ਭਾਈਚਾਰਕ ਤਜ਼ਰਬਾ ਹੁਣ ਉਪਯੋਗੀ ਪ੍ਰੋਗਰਾਮਾਂ ਨੂੰ ਵਧੇਰੇ ਲੋਕਾਂ ਤੱਕ ਲੈ ਜਾਣ ਲਈ ਤਿਆਰ ਕੀਤੀਆਂ ਸੰਸਥਾਗਤ ਭਾਈਵਾਲੀ ਨੂੰ ਪੂਰਾ ਕਰਦਾ ਹੈ।",
  "Since 2004": "2004 ਤੋਂ",
  "A story that began with the courage to speak.": "ਇੱਕ ਕਹਾਣੀ ਜੋ ਬੋਲਣ ਦੀ ਹਿੰਮਤ ਨਾਲ ਸ਼ੁਰੂ ਹੋਈ।",
  "Punjabi Samvad began when Amit Bawa and Jyoti Bawa chose to act on gender-based violence and discrimination.": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਉਦੋਂ ਸ਼ੁਰੂ ਹੋਇਆ ਜਦੋਂ ਅਮਿਤ ਬਾਵਾ ਅਤੇ ਜੋਤੀ ਬਾਵਾ ਨੇ ਲਿੰਗ-ਅਧਾਰਤ ਹਿੰਸਾ ਅਤੇ ਵਿਤਕਰੇ 'ਤੇ ਕਾਰਵਾਈ ਕਰਨ ਦੀ ਚੋਣ ਕੀਤੀ।",
  "Follow the journey": "ਸਫ਼ਰ ਦਾ ਪਾਲਣ ਕਰੋ",
  "The beginning": "ਸ਼ੁਰੂਆਤ",
  "A platform for conversations that were difficult to start.": "ਉਨ੍ਹਾਂ ਗੱਲਬਾਤਾਂ ਲਈ ਇੱਕ ਪਲੇਟਫਾਰਮ ਜਿਨ੍ਹਾਂ ਨੂੰ ਸ਼ੁਰੂ ਕਰਨਾ ਮੁਸ਼ਕਲ ਸੀ।",
  "The early work brought social issues into the open through dialogue and creative expression.": "ਸ਼ੁਰੂਆਤੀ ਕੰਮ ਨੇ ਗੱਲਬਾਤ ਅਤੇ ਰਚਨਾਤਮਕ ਪ੍ਰਗਟਾਵੇ ਰਾਹੀਂ ਸਮਾਜਿਕ ਮੁੱਦਿਆਂ ਨੂੰ ਖੁੱਲ੍ਹੇਆਮ ਲਿਆਂਦਾ।",
  "Khooh Bolda Hai": "ਖੂਹ ਬੋਲਦਾ ਹੈ",
  "written and directed by Jyoti Bawa, addressed female foeticide, gender discrimination and the dignity of girls.": "ਜੋਤੀ ਬਾਵਾ ਦੁਆਰਾ ਲਿਖਿਆ ਅਤੇ ਨਿਰਦੇਸ਼ਿਤ, ਮਾਦਾ ਭਰੂਣ ਹੱਤਿਆ, ਲਿੰਗ ਭੇਦਭਾਵ ਅਤੇ ਕੁੜੀਆਂ ਦੇ ਸਨਮਾਨ ਨੂੰ ਸੰਬੋਧਿਤ ਕੀਤਾ ਗਿਆ।",
  "It established a principle that still shapes Punjabi Samvad: people engage more deeply when an issue is made human, immediate and possible to discuss.": "ਇਸਨੇ ਇੱਕ ਅਜਿਹਾ ਸਿਧਾਂਤ ਸਥਾਪਿਤ ਕੀਤਾ ਜੋ ਅਜੇ ਵੀ ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੂੰ ਆਕਾਰ ਦਿੰਦਾ ਹੈ: ਲੋਕ ਉਦੋਂ ਵਧੇਰੇ ਡੂੰਘਾਈ ਨਾਲ ਜੁੜਦੇ ਹਨ ਜਦੋਂ ਕੋਈ ਮੁੱਦਾ ਮਨੁੱਖੀ, ਤੁਰੰਤ ਅਤੇ ਚਰਚਾ ਕਰਨ ਲਈ ਸੰਭਵ ਬਣਾਇਆ ਜਾਂਦਾ ਹੈ।",
  "Theatre became an early language of public awareness.": "ਥੀਏਟਰ ਜਨਤਕ ਜਾਗਰੂਕਤਾ ਦੀ ਸ਼ੁਰੂਆਤੀ ਭਾਸ਼ਾ ਬਣ ਗਿਆ।",
  "people reached": "ਲੋਕ ਪਹੁੰਚੇ",
  "20+ years": "20+ ਸਾਲ",
  "of community work": "ਭਾਈਚਾਰਕ ਕੰਮ ਦੇ",
  "helped communities confront female foeticide and discrimination against girls in a shared public space.": "ਭਾਈਚਾਰਿਆਂ ਨੂੰ ਇੱਕ ਸਾਂਝੀ ਜਨਤਕ ਥਾਂ ਵਿੱਚ ਮਾਦਾ ਭਰੂਣ ਹੱਤਿਆ ਅਤੇ ਕੁੜੀਆਂ ਵਿਰੁੱਧ ਵਿਤਕਰੇ ਦਾ ਸਾਹਮਣਾ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕੀਤੀ।",
  "Our journey": "ਸਾਡਾ ਸਫ਼ਰ",
  "Built step by step, with communities at the centre.": "ਕਦਮ-ਦਰ-ਕਦਮ ਉਸਾਰਿਆ ਗਿਆ, ਜਿਸ ਦੇ ਕੇਂਦਰ ਵਿੱਚ ਭਾਈਚਾਰੇ ਸਨ।",
  "The work expanded": "ਕੰਮ ਦਾ ਵਿਸਥਾਰ ਹੋਇਆ",
  "From one urgent issue to a connected view of social well-being.": "ਇੱਕ ਜ਼ਰੂਰੀ ਮੁੱਦੇ ਤੋਂ ਸਮਾਜਿਕ ਭਲਾਈ ਦੇ ਜੁੜੇ ਹੋਏ ਦ੍ਰਿਸ਼ਟੀਕੋਣ ਤੱਕ।",
  "Education and vocational programmes created opportunities for women, girls and young people. Health work addressed HIV/AIDS, menstrual health and mental well-being. Substance-abuse prevention combined expert sessions, community outreach and film.": "ਸਿੱਖਿਆ ਅਤੇ ਕਿੱਤਾਮੁਖੀ ਪ੍ਰੋਗਰਾਮਾਂ ਨੇ ਔਰਤਾਂ, ਕੁੜੀਆਂ ਅਤੇ ਨੌਜਵਾਨਾਂ ਲਈ ਮੌਕੇ ਪੈਦਾ ਕੀਤੇ। ਸਿਹਤ ਦੇ ਕੰਮ ਨੇ ਐੱਚਆਈਵੀ/ਏਡਜ਼ (HIV/AIDS), ਮਾਹਵਾਰੀ ਸਿਹਤ ਅਤੇ ਮਾਨਸਿਕ ਤੰਦਰੁਸਤੀ ਨੂੰ ਸੰਬੋਧਿਤ ਕੀਤਾ। ਨਸ਼ੀਲੇ ਪਦਾਰਥਾਂ ਦੀ ਦੁਰਵਰਤੋਂ ਦੀ ਰੋਕਥਾਮ ਨੇ ਮਾਹਰ ਸੈਸ਼ਨਾਂ, ਕਮਿਊਨਿਟੀ ਆਊਟਰੀਚ ਅਤੇ ਫਿਲਮਾਂ ਨੂੰ ਜੋੜਿਆ।",
  "Community outreach": "ਕਮਿਊਨਿਟੀ ਆਊਟਰੀਚ",
  "Creative communication": "ਰਚਨਾਤਮਕ ਸੰਚਾਰ",
  "Learning and opportunity": "ਸਿੱਖਣ ਅਤੇ ਮੌਕੇ",
  "Continuing the work": "ਕੰਮ ਜਾਰੀ ਰੱਖਣਾ",
  "The organisation moved forward without losing sight of why it began.": "ਸੰਸਥਾ ਇਸ ਗੱਲ ਨੂੰ ਭੁਲਾਏ ਬਿਨਾਂ ਅੱਗੇ ਵਧੀ ਕਿ ਇਹ ਕਿਉਂ ਸ਼ੁਰੂ ਹੋਈ ਸੀ।",
  "After Amit Bawa’s passing in 2014, Jyoti Bawa continued the work they began together. As President, she leads Punjabi Samvad across women’s empowerment, education, public health, mental well-being, substance-abuse awareness and Punjabi culture.": "2014 ਵਿੱਚ ਅਮਿਤ ਬਾਵਾ ਦੇ ਦੇਹਾਂਤ ਤੋਂ ਬਾਅਦ, ਜੋਤੀ ਬਾਵਾ ਨੇ ਉਹ ਕੰਮ ਜਾਰੀ ਰੱਖਿਆ ਜੋ ਉਨ੍ਹਾਂ ਨੇ ਮਿਲ ਕੇ ਸ਼ੁਰੂ ਕੀਤਾ ਸੀ। ਪ੍ਰਧਾਨ ਵਜੋਂ, ਉਹ ਔਰਤਾਂ ਦੇ ਸਸ਼ਕਤੀਕਰਨ, ਸਿੱਖਿਆ, ਜਨਤਕ ਸਿਹਤ, ਮਾਨਸਿਕ ਤੰਦਰੁਸਤੀ, ਨਸ਼ੀਲੇ ਪਦਾਰਥਾਂ ਦੀ ਦੁਰਵਰਤੋਂ ਬਾਰੇ ਜਾਗਰੂਕਤਾ ਅਤੇ ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ ਵਿੱਚ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀ ਅਗਵਾਈ ਕਰਦੀ ਹੈ।",
  "The methods have grown and the partnerships have widened, but dialogue remains the starting point.": "ਤਰੀਕੇ ਵਧੇ ਹਨ ਅਤੇ ਭਾਈਵਾਲੀ ਵਿਸ਼ਾਲ ਹੋਈ ਹੈ, ਪਰ ਗੱਲਬਾਤ ਸ਼ੁਰੂਆਤੀ ਬਿੰਦੂ ਬਣੀ ਹੋਈ ਹੈ।",
  "Explore our work": "ਸਾਡੇ ਕੰਮ ਦੀ ਪੜਚੋਲ ਕਰੋ",
  "Today": "ਅੱਜ",
  "2004": "2004",
  "2009": "2009",
  "2014": "2014",
  "2017": "2017"
};

let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');
for (const [eng, pa] of Object.entries(translations)) {
  const safeEng = eng.replace(/"/g, '\\"').replace(/\n/g, '\\n');
  const safePa = pa.replace(/"/g, '\\"').replace(/\n/g, '\\n');
  
  if (!content.includes(`"${safeEng}": {`)) {
    const insertionMarker = '\n};\n\nconst LanguageContext = createContext';
    const insertionIndex = content.indexOf(insertionMarker);
    if (insertionIndex !== -1) {
      content = content.slice(0, insertionIndex) + `,\n  "${safeEng}": {\n    en: "${safeEng}",\n    pa: "${safePa}"\n  }` + content.slice(insertionIndex);
    }
  }
}
fs.writeFileSync('src/context/LanguageContext.tsx', content);
console.log("Injected exact strings from StoryPage");
