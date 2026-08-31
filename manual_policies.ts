import fs from 'fs';

const translations = {
  "Governance": "ਸ਼ਾਸਨ (Governance)",
  "People and safeguarding": "ਲੋਕ ਅਤੇ ਸੁਰੱਖਿਆ",
  "Data and communications": "ਡੇਟਾ ਅਤੇ ਸੰਚਾਰ",
  "Funding and partnerships": "ਫੰਡਿੰਗ ਅਤੇ ਭਾਈਵਾਲੀ",
  "Operations": "ਸੰਚਾਲਨ",
  "Governance and Accountability Policy": "ਸ਼ਾਸਨ ਅਤੇ ਜਵਾਬਦੇਹੀ ਨੀਤੀ",
  "Governance and accountability": "ਸ਼ਾਸਨ ਅਤੇ ਜਵਾਬਦੇਹੀ",
  "Sets oversight, decision-making and record-keeping standards for Punjabi Samvad.": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਲਈ ਨਿਗਰਾਨੀ, ਫੈਸਲੇ ਲੈਣ ਅਤੇ ਰਿਕਾਰਡ ਰੱਖਣ ਦੇ ਮਾਪਦੰਡ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ।",
  "Governing Body": "ਪ੍ਰਬੰਧਕੀ ਕਮੇਟੀ (Governing Body)",
  "Code of Conduct and Ethics": "ਆਚਰਣ ਅਤੇ ਨੈਤਿਕਤਾ ਦਾ ਕੋਡ",
  "Code of conduct and ethics": "ਆਚਰਣ ਅਤੇ ਨੈਤਿਕਤਾ ਦਾ ਕੋਡ",
  "Defines the conduct expected from anyone who represents Punjabi Samvad.": "ਕਿਸੇ ਵੀ ਵਿਅਕਤੀ ਤੋਂ ਉਮੀਦ ਕੀਤੇ ਗਏ ਆਚਰਣ ਨੂੰ ਪਰਿਭਾਸ਼ਿਤ ਕਰਦਾ ਹੈ ਜੋ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀ ਨੁਮਾਇੰਦਗੀ ਕਰਦਾ ਹੈ।",
  "President and Governing Body": "ਪ੍ਰਧਾਨ ਅਤੇ ਪ੍ਰਬੰਧਕੀ ਕਮੇਟੀ",
  "Child Safeguarding Policy": "ਬਾਲ ਸੁਰੱਖਿਆ ਨੀਤੀ",
  "Child safeguarding": "ਬਾਲ ਸੁਰੱਖਿਆ",
  "Protects children who participate in Punjabi Samvad programmes.": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਪ੍ਰੋਗਰਾਮਾਂ ਵਿੱਚ ਭਾਗ ਲੈਣ ਵਾਲੇ ਬੱਚਿਆਂ ਦੀ ਰੱਖਿਆ ਕਰਦਾ ਹੈ।",
  "Safeguarding Lead": "ਸੇਫਗਾਰਡਿੰਗ ਲੀਡ (Safeguarding Lead)",
  "Financial Management Policy": "ਵਿੱਤੀ ਪ੍ਰਬੰਧਨ ਨੀਤੀ",
  "Financial management": "ਵਿੱਤੀ ਪ੍ਰਬੰਧਨ",
  "Controls receiving, holding, spending and recording funds.": "ਫੰਡ ਪ੍ਰਾਪਤ ਕਰਨ, ਰੱਖਣ, ਖਰਚ ਕਰਨ ਅਤੇ ਰਿਕਾਰਡ ਕਰਨ ਨੂੰ ਨਿਯੰਤਰਿਤ ਕਰਦਾ ਹੈ।",
  "Treasurer and Operations Lead": "ਖਜ਼ਾਨਚੀ ਅਤੇ ਆਪ੍ਰੇਸ਼ਨ ਲੀਡ",
  "Partnership and Grant Policy": "ਭਾਈਵਾਲੀ ਅਤੇ ਗ੍ਰਾਂਟ ਨੀਤੀ",
  "Partnerships and grants": "ਭਾਈਵਾਲੀ ਅਤੇ ਗ੍ਰਾਂਟਾਂ",
  "Guides how Punjabi Samvad assesses, manages and reports on partnerships.": "ਮਾਰਗਦਰਸ਼ਨ ਕਰਦਾ ਹੈ ਕਿ ਪੰਜਾਬੀ ਸੰਵਾਦ ਭਾਈਵਾਲੀ ਦਾ ਮੁਲਾਂਕਣ, ਪ੍ਰਬੰਧਨ ਅਤੇ ਰਿਪੋਰਟ ਕਿਵੇਂ ਕਰਦਾ ਹੈ।",
  "President and Programme Leads": "ਪ੍ਰਧਾਨ ਅਤੇ ਪ੍ਰੋਗਰਾਮ ਲੀਡ",
  "External Communications Policy": "ਬਾਹਰੀ ਸੰਚਾਰ ਨੀਤੀ",
  "External communications": "ਬਾਹਰੀ ਸੰਚਾਰ",
  "Controls official statements, programme claims and confidential information.": "ਅਧਿਕਾਰਤ ਬਿਆਨਾਂ, ਪ੍ਰੋਗਰਾਮ ਦੇ ਦਾਅਵਿਆਂ ਅਤੇ ਗੁਪਤ ਜਾਣਕਾਰੀ ਨੂੰ ਨਿਯੰਤਰਿਤ ਕਰਦਾ ਹੈ।",
  "President and Communications Lead": "ਪ੍ਰਧਾਨ ਅਤੇ ਸੰਚਾਰ ਲੀਡ",
  "Environmental Responsibility Policy": "ਵਾਤਾਵਰਣ ਦੀ ਜ਼ਿੰਮੇਵਾਰੀ ਨੀਤੀ",
  "Environmental responsibility": "ਵਾਤਾਵਰਣ ਦੀ ਜ਼ਿੰਮੇਵਾਰੀ",
  "Reduces avoidable waste and resource use in programmes and events.": "ਪ੍ਰੋਗਰਾਮਾਂ ਅਤੇ ਸਮਾਗਮਾਂ ਵਿੱਚ ਬਚਣਯੋਗ ਰਹਿੰਦ-ਖੂੰਹਦ ਅਤੇ ਸਰੋਤਾਂ ਦੀ ਵਰਤੋਂ ਨੂੰ ਘਟਾਉਂਦਾ ਹੈ।",
  "Operations Lead and Programme Leads": "ਆਪ੍ਰੇਸ਼ਨ ਲੀਡ ਅਤੇ ਪ੍ਰੋਗਰਾਮ ਲੀਡ",
  "Website Privacy Notice": "ਵੈੱਬਸਾਈਟ ਗੋਪਨੀਯਤਾ ਨੋਟਿਸ",
  "Website privacy": "ਵੈੱਬਸਾਈਟ ਗੋਪਨੀਯਤਾ",
  "Explains what data the website and its third-party content may receive.": "ਸਮਝਾਉਂਦਾ ਹੈ ਕਿ ਵੈੱਬਸਾਈਟ ਅਤੇ ਇਸਦੀ ਤੀਜੀ-ਧਿਰ ਦੀ ਸਮੱਗਰੀ ਕੀ ਡੇਟਾ ਪ੍ਰਾਪਤ ਕਰ ਸਕਦੀ ਹੈ।",
  "Privacy Responsible Person": "ਗੋਪਨੀਯਤਾ ਲਈ ਜ਼ਿੰਮੇਵਾਰ ਵਿਅਕਤੀ",
  "Website Terms of Use": "ਵੈੱਬਸਾਈਟ ਦੀ ਵਰਤੋਂ ਦੀਆਂ ਸ਼ਰਤਾਂ",
  "Website terms of use": "ਵੈੱਬਸਾਈਟ ਦੀ ਵਰਤੋਂ ਦੀਆਂ ਸ਼ਰਤਾਂ",
  "Sets permitted use, content limits and external-link terms.": "ਪ੍ਰਵਾਨਿਤ ਵਰਤੋਂ, ਸਮੱਗਰੀ ਸੀਮਾਵਾਂ ਅਤੇ ਬਾਹਰੀ-ਲਿੰਕ ਸ਼ਰਤਾਂ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ।",
  "Cookie and Third-Party Content Notice": "ਕੂਕੀ ਅਤੇ ਥਰਡ-ਪਾਰਟੀ ਸਮਗਰੀ ਨੋਟਿਸ",
  "Cookies and third-party content": "ਕੂਕੀਜ਼ ਅਤੇ ਤੀਜੀ-ਧਿਰ ਦੀ ਸਮੱਗਰੀ",
  "Identifies website technologies and the live Facebook embed.": "ਵੈੱਬਸਾਈਟ ਤਕਨਾਲੋਜੀਆਂ ਅਤੇ ਲਾਈਵ ਫੇਸਬੁੱਕ (Facebook) ਐਮਬੈੱਡ ਦੀ ਪਛਾਣ ਕਰਦਾ ਹੈ।"
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
console.log("Injected policy high-level strings");
