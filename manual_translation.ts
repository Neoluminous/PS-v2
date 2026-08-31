import fs from 'fs';

const translations: Record<string, string> = {
  "Gireesh Damodaran": "ਗਿਰੀਸ਼ ਦਾਮੋਦਰਨ",
  "Corporate Strategist, Founder & CEO, GPNP PROSPERO": "ਕਾਰਪੋਰੇਟ ਰਣਨੀਤੀਕਾਰ, ਸੰਸਥਾਪਕ ਅਤੇ ਸੀਈਓ, GPNP PROSPERO",
  "Mandeep Singh": "ਮਨਦੀਪ ਸਿੰਘ",
  "Chartered Accountant, Vipul Mandeep Arora & Associates": "ਚਾਰਟਰਡ ਅਕਾਊਂਟੈਂਟ, ਵਿਪੁਲ ਮਨਦੀਪ ਅਰੋੜਾ ਐਂਡ ਐਸੋਸੀਏਟਸ",
  "Dr. Gurbilas P. Singh": "ਡਾ. ਗੁਰਬਿਲਾਸ ਪੀ. ਸਿੰਘ",
  "Medical Professional, Supporter of Punjabi Samvad": "ਮੈਡੀਕਲ ਪੇਸ਼ੇਵਰ, ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਸਮਰਥਕ",
  "Jasmine Bawa": "ਜੈਸਮੀਨ ਬਾਵਾ",
  "Lifetime Member, Programme & Event Support": "ਜੀਵਨ ਭਰ ਮੈਂਬਰ, ਪ੍ਰੋਗਰਾਮ ਅਤੇ ਇਵੈਂਟ ਸਹਾਇਤਾ",
  "Sukhpal Singh": "ਸੁਖਪਾਲ ਸਿੰਘ",
  "Writer, Education Scholarship Supporter": "ਲੇਖਕ, ਸਿੱਖਿਆ ਸਕਾਲਰਸ਼ਿਪ ਸਮਰਥਕ",
  "Dr Baljit Singh Chahal": "ਡਾ ਬਲਜੀਤ ਸਿੰਘ ਚਾਹਲ",
  "Veterinary Doctor, Education Scholarship Supporter": "ਵੈਟਰਨਰੀ ਡਾਕਟਰ, ਸਿੱਖਿਆ ਸਕਾਲਰਸ਼ਿਪ ਸਮਰਥਕ",
  "Raghav Seth": "ਰਾਘਵ ਸੇਠ",
  "Education Scholarship Supporter": "ਸਿੱਖਿਆ ਸਕਾਲਰਸ਼ਿਪ ਸਮਰਥਕ",
  "A supporter of Punjabi Samvad": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਇੱਕ ਸਮਰਥਕ",
  "People who strengthen the work": "ਉਹ ਲੋਕ ਜੋ ਕੰਮ ਨੂੰ ਮਜ਼ਬੂਤ ਕਰਦੇ ਹਨ",
  "The people who stand behind the work.": "ਉਹ ਲੋਕ ਜੋ ਕੰਮ ਦੇ ਪਿੱਛੇ ਖੜ੍ਹੇ ਹਨ।",
  "Punjabi Samvad is fortunate to have people who believe in its work and support it in many different ways. Some contribute financially, while others share their expertise, resources, connections or practical help when it is needed. Each contribution, large or small, helps Punjabi Samvad continue its work with communities and take meaningful ideas forward.": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਭਾਗਸ਼ਾਲੀ ਹੈ ਕਿ ਇਸ ਕੋਲ ਅਜਿਹੇ ਲੋਕ ਹਨ ਜੋ ਇਸਦੇ ਕੰਮ ਵਿੱਚ ਵਿਸ਼ਵਾਸ ਕਰਦੇ ਹਨ ਅਤੇ ਕਈ ਵੱਖੋ-ਵੱਖਰੇ ਤਰੀਕਿਆਂ ਨਾਲ ਇਸਦਾ ਸਮਰਥਨ ਕਰਦੇ ਹਨ। ਕੁਝ ਵਿੱਤੀ ਯੋਗਦਾਨ ਪਾਉਂਦੇ ਹਨ, ਜਦੋਂ ਕਿ ਦੂਸਰੇ ਲੋੜ ਪੈਣ 'ਤੇ ਆਪਣੀ ਮੁਹਾਰਤ, ਸਰੋਤ, ਸੰਪਰਕ ਜਾਂ ਵਿਹਾਰਕ ਮਦਦ ਸਾਂਝੀ ਕਰਦੇ ਹਨ। ਹਰੇਕ ਯੋਗਦਾਨ, ਛੋਟਾ ਜਾਂ ਵੱਡਾ, ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੂੰ ਭਾਈਚਾਰਿਆਂ ਨਾਲ ਕੰਮ ਜਾਰੀ ਰੱਖਣ ਅਤੇ ਸਾਰਥਕ ਵਿਚਾਰਾਂ ਨੂੰ ਅੱਗੇ ਵਧਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
  "Gireesh Damodaran is a corporate strategist, entrepreneur and founder and CEO of GPNP PROSPERO Corporate Strategists. An alumnus of IIM Bangalore, he has worked across strategic planning, project development and business structuring. Based in Dubai, he brings an international perspective to his work.": "ਗਿਰੀਸ਼ ਦਾਮੋਦਰਨ ਇੱਕ ਕਾਰਪੋਰੇਟ ਰਣਨੀਤੀਕਾਰ, ਉੱਦਮੀ ਅਤੇ GPNP PROSPERO ਕਾਰਪੋਰੇਟ ਸਟ੍ਰੈਟਿਜਿਸਟਸ ਦੇ ਸੰਸਥਾਪਕ ਅਤੇ ਸੀਈਓ ਹਨ। IIM ਬੰਗਲੌਰ ਦੇ ਸਾਬਕਾ ਵਿਦਿਆਰਥੀ, ਉਨ੍ਹਾਂ ਨੇ ਰਣਨੀਤਕ ਯੋਜਨਾਬੰਦੀ, ਪ੍ਰੋਜੈਕਟ ਵਿਕਾਸ ਅਤੇ ਕਾਰੋਬਾਰੀ ਢਾਂਚੇ ਵਿੱਚ ਕੰਮ ਕੀਤਾ ਹੈ। ਦੁਬਈ ਵਿੱਚ ਅਧਾਰਤ, ਉਹ ਆਪਣੇ ਕੰਮ ਵਿੱਚ ਇੱਕ ਅੰਤਰਰਾਸ਼ਟਰੀ ਦ੍ਰਿਸ਼ਟੀਕੋਣ ਲਿਆਉਂਦੇ ਹਨ।",
  "For Punjabi Samvad, Gireesh helps shape projects and initiatives from concept to execution. He contributes to project design, strategic planning, business models and institutional development.": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਲਈ, ਗਿਰੀਸ਼ ਸੰਕਲਪ ਤੋਂ ਲੈ ਕੇ ਅਮਲ ਤੱਕ ਪ੍ਰੋਜੈਕਟਾਂ ਅਤੇ ਪਹਿਲਕਦਮੀਆਂ ਨੂੰ ਰੂਪ ਦੇਣ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਨ। ਉਹ ਪ੍ਰੋਜੈਕਟ ਡਿਜ਼ਾਈਨ, ਰਣਨੀਤਕ ਯੋਜਨਾਬੰਦੀ, ਵਪਾਰਕ ਮਾਡਲਾਂ ਅਤੇ ਸੰਸਥਾਗਤ ਵਿਕਾਸ ਵਿੱਚ ਯੋਗਦਾਨ ਪਾਉਂਦੇ ਹਨ।",
  "His work helps the organisation set clearer goals, develop sound partnerships and plan for long-term social impact.": "ਉਹਨਾਂ ਦਾ ਕੰਮ ਸੰਸਥਾ ਨੂੰ ਸਪੱਸ਼ਟ ਟੀਚੇ ਨਿਰਧਾਰਤ ਕਰਨ, ਠੋਸ ਭਾਈਵਾਲੀ ਵਿਕਸਿਤ ਕਰਨ ਅਤੇ ਲੰਬੇ ਸਮੇਂ ਦੇ ਸਮਾਜਿਕ ਪ੍ਰਭਾਵ ਲਈ ਯੋਜਨਾ ਬਣਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
  "Mandeep Singh is a Chartered Accountant with Vipul Mandeep Arora & Associates.": "ਮਨਦੀਪ ਸਿੰਘ ਵਿਪੁਲ ਮਨਦੀਪ ਅਰੋੜਾ ਐਂਡ ਐਸੋਸੀਏਟਸ ਦੇ ਨਾਲ ਇੱਕ ਚਾਰਟਰਡ ਅਕਾਊਂਟੈਂਟ ਹਨ।",
  "He provides financial support to Punjabi Samvad and helps the organisation fund scholarships for students who need assistance to continue their education.": "ਉਹ ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੂੰ ਵਿੱਤੀ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਨ ਅਤੇ ਸੰਗਠਨ ਨੂੰ ਉਹਨਾਂ ਵਿਦਿਆਰਥੀਆਂ ਲਈ ਸਕਾਲਰਸ਼ਿਪ ਲਈ ਫੰਡ ਦੇਣ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਨ ਜਿਨ੍ਹਾਂ ਨੂੰ ਆਪਣੀ ਸਿੱਖਿਆ ਜਾਰੀ ਰੱਖਣ ਲਈ ਸਹਾਇਤਾ ਦੀ ਲੋੜ ਹੈ।",
  "Dr. Gurbilas P. Singh is a medical professional and a supporter of Punjabi Samvad’s work across education, health, awareness and community welfare.": "ਡਾ. ਗੁਰਬਿਲਾਸ ਪੀ. ਸਿੰਘ ਇੱਕ ਮੈਡੀਕਲ ਪੇਸ਼ੇਵਰ ਹਨ ਅਤੇ ਸਿੱਖਿਆ, ਸਿਹਤ, ਜਾਗਰੂਕਤਾ ਅਤੇ ਕਮਿਊਨਿਟੀ ਭਲਾਈ ਦੇ ਖੇਤਰ ਵਿੱਚ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਕੰਮ ਦੇ ਸਮਰਥਕ ਹਨ।",
  "He supports the organisation beyond any single programme, helping Punjabi Samvad sustain its community work and take new initiatives forward.": "ਉਹ ਕਿਸੇ ਵੀ ਇੱਕ ਪ੍ਰੋਗਰਾਮ ਤੋਂ ਪਰੇ ਸੰਗਠਨ ਦਾ ਸਮਰਥਨ ਕਰਦੇ ਹਨ, ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੂੰ ਇਸਦੇ ਭਾਈਚਾਰਕ ਕੰਮ ਨੂੰ ਕਾਇਮ ਰੱਖਣ ਅਤੇ ਨਵੀਆਂ ਪਹਿਲਕਦਮੀਆਂ ਨੂੰ ਅੱਗੇ ਲਿਜਾਣ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਨ।",
  "Jasmine Bawa is a lifetime member of Punjabi Samvad. She anchors events and helps the organisation develop project ideas and proposals.": "ਜੈਸਮੀਨ ਬਾਵਾ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀ ਲਾਈਫ ਟਾਈਮ ਮੈਂਬਰ ਹਨ। ਉਹ ਇਵੈਂਟਸ ਨੂੰ ਐਂਕਰ ਕਰਦੀ ਹੈ ਅਤੇ ਪ੍ਰੋਜੈਕਟ ਵਿਚਾਰਾਂ ਅਤੇ ਪ੍ਰਸਤਾਵਾਂ ਨੂੰ ਵਿਕਸਤ ਕਰਨ ਵਿੱਚ ਸੰਗਠਨ ਦੀ ਮਦਦ ਕਰਦੀ ਹੈ।",
  "She brings practical support to both planning and public programmes, helping the team prepare projects and communicate them clearly.": "ਉਹ ਯੋਜਨਾਬੰਦੀ ਅਤੇ ਜਨਤਕ ਪ੍ਰੋਗਰਾਮਾਂ ਦੋਵਾਂ ਲਈ ਵਿਹਾਰਕ ਸਹਾਇਤਾ ਲਿਆਉਂਦੀ ਹੈ, ਟੀਮ ਨੂੰ ਪ੍ਰੋਜੈਕਟ ਤਿਆਰ ਕਰਨ ਅਤੇ ਉਨ੍ਹਾਂ ਨੂੰ ਸਪਸ਼ਟ ਤੌਰ 'ਤੇ ਸੰਚਾਰ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੀ ਹੈ।",
  "Sukhpal Singh is a writer who supports Punjabi Samvad’s education scholarship work through donations.": "ਸੁਖਪਾਲ ਸਿੰਘ ਇੱਕ ਲੇਖਕ ਹਨ ਜੋ ਦਾਨ ਰਾਹੀਂ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਸਿੱਖਿਆ ਸਕਾਲਰਸ਼ਿਪ ਕੰਮ ਦਾ ਸਮਰਥਨ ਕਰਦੇ ਹਨ।",
  "His contribution helps students continue their studies when financial circumstances might otherwise interrupt their education.": "ਉਸਦਾ ਯੋਗਦਾਨ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਆਪਣੀ ਪੜ੍ਹਾਈ ਜਾਰੀ ਰੱਖਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ ਜਦੋਂ ਵਿੱਤੀ ਹਾਲਾਤ ਉਨ੍ਹਾਂ ਦੀ ਸਿੱਖਿਆ ਵਿੱਚ ਵਿਘਨ ਪਾ ਸਕਦੇ ਹਨ।",
  "Dr Baljit Singh Chahal is a veterinary doctor and a supporter of Punjabi Samvad’s education scholarship work.": "ਡਾ ਬਲਜੀਤ ਸਿੰਘ ਚਾਹਲ ਇੱਕ ਵੈਟਰਨਰੀ ਡਾਕਟਰ ਹਨ ਅਤੇ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਸਿੱਖਿਆ ਸਕਾਲਰਸ਼ਿਪ ਕੰਮ ਦੇ ਸਮਰਥਕ ਹਨ।",
  "His donations help students meet education costs and continue working towards their academic goals.": "ਉਸਦਾ ਦਾਨ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਸਿੱਖਿਆ ਦੇ ਖਰਚਿਆਂ ਨੂੰ ਪੂਰਾ ਕਰਨ ਅਤੇ ਉਹਨਾਂ ਦੇ ਅਕਾਦਮਿਕ ਟੀਚਿਆਂ ਵੱਲ ਕੰਮ ਕਰਨਾ ਜਾਰੀ ਰੱਖਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
  "Raghav Seth supports Punjabi Samvad’s education scholarships through donations.": "ਰਾਘਵ ਸੇਠ ਦਾਨ ਰਾਹੀਂ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਸਿੱਖਿਆ ਵਜ਼ੀਫੇ ਦਾ ਸਮਰਥਨ ਕਰਦੇ ਹਨ।",
  "His contribution gives students practical financial support so they can remain in education and pursue their studies.": "ਉਸਦਾ ਯੋਗਦਾਨ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਵਿਹਾਰਕ ਵਿੱਤੀ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ ਤਾਂ ਜੋ ਉਹ ਸਿੱਖਿਆ ਵਿੱਚ ਬਣੇ ਰਹਿਣ ਅਤੇ ਆਪਣੀ ਪੜ੍ਹਾਈ ਜਾਰੀ ਰੱਖ ਸਕਣ।",
  "Co-founder of Punjabi Samvad": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਸਹਿ-ਸੰਸਥਾਪਕ",
  "Amit Bawa": "ਅਮਿਤ ਬਾਵਾ",
  "Founding inspiration behind Punjabi Samvad": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਪਿੱਛੇ ਸੰਸਥਾਪਕ ਪ੍ਰੇਰਨਾ",
  "In remembrance": "ਯਾਦ ਵਿੱਚ",
  "A thoughtful life with a creative purpose.": "ਇੱਕ ਰਚਨਾਤਮਕ ਉਦੇਸ਼ ਦੇ ਨਾਲ ਇੱਕ ਵਿਚਾਰਸ਼ੀਲ ਜੀਵਨ।",
  "Amit was a kind and deeply thoughtful person with an exceptional creative mind. His sensitivity and imagination found expression through poetry, dialogue and theatre, leaving a lasting impression on those who knew him and experienced his work.": "ਅਮਿਤ ਇੱਕ ਬੇਮਿਸਾਲ ਰਚਨਾਤਮਕ ਦਿਮਾਗ ਵਾਲਾ ਇੱਕ ਦਿਆਲੂ ਅਤੇ ਡੂੰਘਾ ਵਿਚਾਰਸ਼ੀਲ ਵਿਅਕਤੀ ਸੀ। ਉਸਦੀ ਸੰਵੇਦਨਸ਼ੀਲਤਾ ਅਤੇ ਕਲਪਨਾ ਨੂੰ ਕਵਿਤਾ, ਸੰਵਾਦ ਅਤੇ ਥੀਏਟਰ ਦੁਆਰਾ ਪ੍ਰਗਟਾਵਾ ਮਿਲਿਆ, ਜਿਸਨੇ ਉਸਨੂੰ ਜਾਣਨ ਵਾਲੇ ਅਤੇ ਉਸਦੇ ਕੰਮ ਦਾ ਅਨੁਭਵ ਕਰਨ ਵਾਲਿਆਂ 'ਤੇ ਇੱਕ ਸਥਾਈ ਪ੍ਰਭਾਵ ਛੱਡਿਆ।",
  "Punjabi Samvad began as a shared dream rooted in the belief that life should be used to do something meaningful for others. Although Amit is no longer with us, that dream continues through Punjabi Samvad. His ideas, values and compassionate spirit remain an important part of the organisation's foundation and continue to inspire its work.": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਇਸ ਵਿਸ਼ਵਾਸ ਵਿੱਚ ਜੜ੍ਹਾਂ ਵਾਲੇ ਇੱਕ ਸਾਂਝੇ ਸੁਪਨੇ ਵਜੋਂ ਸ਼ੁਰੂ ਹੋਇਆ ਸੀ ਕਿ ਜੀਵਨ ਦੀ ਵਰਤੋਂ ਦੂਜਿਆਂ ਲਈ ਕੁਝ ਸਾਰਥਕ ਕਰਨ ਲਈ ਕੀਤੀ ਜਾਣੀ ਚਾਹੀਦੀ ਹੈ। ਹਾਲਾਂਕਿ ਅਮਿਤ ਹੁਣ ਸਾਡੇ ਨਾਲ ਨਹੀਂ ਹਨ, ਪਰ ਇਹ ਸੁਪਨਾ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਰਾਹੀਂ ਜਾਰੀ ਹੈ। ਉਸਦੇ ਵਿਚਾਰ, ਕਦਰਾਂ-ਕੀਮਤਾਂ ਅਤੇ ਹਮਦਰਦ ਭਾਵਨਾ ਸੰਗਠਨ ਦੀ ਬੁਨਿਆਦ ਦਾ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਹਿੱਸਾ ਬਣੇ ਹੋਏ ਹਨ ਅਤੇ ਇਸਦੇ ਕੰਮ ਨੂੰ ਪ੍ਰੇਰਿਤ ਕਰਦੇ ਹਨ।",
  "A creative voice in Punjabi Samvad's early work.": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਸ਼ੁਰੂਆਤੀ ਕੰਮ ਵਿੱਚ ਇੱਕ ਰਚਨਾਤਮਕ ਆਵਾਜ਼।",
  "Amit served as President during Punjabi Samvad's formative years. He brought poetry and conversation into programmes that addressed gender discrimination, education and Punjabi culture.": "ਅਮਿਤ ਨੇ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਸ਼ੁਰੂਆਤੀ ਸਾਲਾਂ ਦੌਰਾਨ ਪ੍ਰਧਾਨ ਵਜੋਂ ਸੇਵਾ ਨਿਭਾਈ। ਉਸਨੇ ਉਨ੍ਹਾਂ ਪ੍ਰੋਗਰਾਮਾਂ ਵਿੱਚ ਕਵਿਤਾ ਅਤੇ ਗੱਲਬਾਤ ਲਿਆਂਦੀ ਜੋ ਲਿੰਗ ਵਿਤਕਰੇ, ਸਿੱਖਿਆ ਅਤੇ ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ ਨੂੰ ਸੰਬੋਧਿਤ ਕਰਦੇ ਸਨ।",
  "Poetry": "ਕਵਿਤਾ",
  "His poems formed part of": "ਉਸ ਦੀਆਂ ਕਵਿਤਾਵਾਂ ਦਾ ਹਿੱਸਾ ਬਣੀਆਂ",
  "and other productions.": "ਅਤੇ ਹੋਰ ਪ੍ਰੋਡਕਸ਼ਨ।",
  "Theatre": "ਥੀਏਟਰ",
  "He worked with Jyoti Bawa as theatre became a public language for difficult social issues.": "ਉਸਨੇ ਜੋਤੀ ਬਾਵਾ ਦੇ ਨਾਲ ਕੰਮ ਕੀਤਾ ਕਿਉਂਕਿ ਥੀਏਟਰ ਮੁਸ਼ਕਲ ਸਮਾਜਿਕ ਮੁੱਦਿਆਂ ਲਈ ਇੱਕ ਜਨਤਕ ਭਾਸ਼ਾ ਬਣ ਗਿਆ ਸੀ।",
  "Dialogue": "ਸੰਵਾਦ",
  "He believed art could help people speak about subjects that society often kept quiet.": "ਉਸਦਾ ਮੰਨਣਾ ਸੀ ਕਿ ਕਲਾ ਲੋਕਾਂ ਨੂੰ ਉਹਨਾਂ ਵਿਸ਼ਿਆਂ ਬਾਰੇ ਬੋਲਣ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦੀ ਹੈ ਜਿਨ੍ਹਾਂ ਬਾਰੇ ਸਮਾਜ ਅਕਸਰ ਚੁੱਪ ਰਹਿੰਦਾ ਸੀ।",
  "The beginning of a shared commitment.": "ਇੱਕ ਸਾਂਝੀ ਵਚਨਬੱਧਤਾ ਦੀ ਸ਼ੁਰੂਆਤ।",
  "Amit and Jyoti Bawa founded Punjabi Samvad after a gender-based crime in Punjab moved them to respond. Their first work brought educators, artists and community members together to discuss discrimination against girls.": "ਅਮਿਤ ਅਤੇ ਜੋਤੀ ਬਾਵਾ ਨੇ ਪੰਜਾਬ ਵਿੱਚ ਲਿੰਗ-ਅਧਾਰਿਤ ਅਪਰਾਧ ਦੁਆਰਾ ਜਵਾਬ ਦੇਣ ਲਈ ਪ੍ਰੇਰਿਤ ਹੋਣ ਤੋਂ ਬਾਅਦ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ। ਉਹਨਾਂ ਦੇ ਪਹਿਲੇ ਕੰਮ ਨੇ ਕੁੜੀਆਂ ਵਿਰੁੱਧ ਵਿਤਕਰੇ ਬਾਰੇ ਚਰਚਾ ਕਰਨ ਲਈ ਸਿੱਖਿਅਕਾਂ, ਕਲਾਕਾਰਾਂ ਅਤੇ ਭਾਈਚਾਰੇ ਦੇ ਮੈਂਬਰਾਂ ਨੂੰ ਇਕੱਠਾ ਕੀਤਾ।",
  "Theatre soon became central to that response. Jyoti wrote and directed": "ਥੀਏਟਰ ਜਲਦੀ ਹੀ ਉਸ ਜਵਾਬ ਦਾ ਕੇਂਦਰੀ ਬਣ ਗਿਆ। ਜੋਤੀ ਨੇ ਲਿਖਿਆ ਅਤੇ ਨਿਰਦੇਸ਼ਨ ਕੀਤਾ",
  "while Amit contributed poetry to the production. His writing also formed part of": "ਜਦੋਂ ਕਿ ਅਮਿਤ ਨੇ ਉਤਪਾਦਨ ਵਿੱਚ ਕਵਿਤਾ ਦਾ ਯੋਗਦਾਨ ਪਾਇਆ। ਉਸਦੀ ਲਿਖਤ ਵੀ ਦਾ ਹਿੱਸਾ ਬਣੀ",
  "including the poem": "ਕਵਿਤਾ ਸਮੇਤ",
  "His work remains part of Punjabi Samvad.": "ਉਸਦਾ ਕੰਮ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦਾ ਹਿੱਸਾ ਬਣਿਆ ਹੋਇਆ ਹੈ।",
  "Amit died in 2014. Jyoti Bawa continued the organisation they founded together, carrying their shared purpose into education, public health, theatre and community programmes.": "ਅਮਿਤ ਦੀ ਮੌਤ 2014 ਵਿੱਚ ਹੋਈ ਸੀ। ਜੋਤੀ ਬਾਵਾ ਨੇ ਉਹਨਾਂ ਦੁਆਰਾ ਮਿਲ ਕੇ ਸਥਾਪਿਤ ਕੀਤੀ ਸੰਸਥਾ ਨੂੰ ਜਾਰੀ ਰੱਖਿਆ, ਉਹਨਾਂ ਦੇ ਸਾਂਝੇ ਉਦੇਸ਼ ਨੂੰ ਸਿੱਖਿਆ, ਜਨਤਕ ਸਿਹਤ, ਥੀਏਟਰ ਅਤੇ ਭਾਈਚਾਰਕ ਪ੍ਰੋਗਰਾਮਾਂ ਵਿੱਚ ਲਿਜਾਇਆ।",
  "Read our story": "ਸਾਡੀ ਕਹਾਣੀ ਪੜ੍ਹੋ",
  "See how the work is delivered": "ਦੇਖੋ ਕਿ ਕੰਮ ਕਿਵੇਂ ਪ੍ਰਦਾਨ ਕੀਤਾ ਜਾਂਦਾ ਹੈ",
  "Listen": "ਸੁਣੋ",
  "Understand the audience and setting.": "ਦਰਸ਼ਕਾਂ ਅਤੇ ਸੈਟਿੰਗ ਨੂੰ ਸਮਝੋ।",
  "Design": "ਡਿਜ਼ਾਈਨ",
  "Choose the right expertise and format.": "ਸਹੀ ਮੁਹਾਰਤ ਅਤੇ ਫਾਰਮੈਟ ਚੁਣੋ।",
  "Deliver": "ਪ੍ਰਦਾਨ ਕਰੋ",
  "Create room for questions and participation.": "ਸਵਾਲਾਂ ਅਤੇ ਭਾਗੀਦਾਰੀ ਲਈ ਜਗ੍ਹਾ ਬਣਾਓ।",
  "Learn": "ਸਿੱਖੋ",
  "Use feedback to strengthen future work.": "ਭਵਿੱਖ ਦੇ ਕੰਮ ਨੂੰ ਮਜ਼ਬੂਤ ​​ਕਰਨ ਲਈ ਫੀਡਬੈਕ ਦੀ ਵਰਤੋਂ ਕਰੋ।",
  "From recent workshops": "ਹਾਲੀਆ ਵਰਕਸ਼ਾਪਾਂ ਤੋਂ",
  "Learning by making.": "ਬਣਾਉਣ ਦੁਆਰਾ ਸਿੱਖਣਾ।",
  "Soap making, traditional masala preparation and Phulkari were taught through practical sessions for rural girls and women.": "ਸਾਬਣ ਬਣਾਉਣਾ, ਰਵਾਇਤੀ ਮਸਾਲਾ ਤਿਆਰ ਕਰਨਾ ਅਤੇ ਫੁਲਕਾਰੀ ਪੇਂਡੂ ਕੁੜੀਆਂ ਅਤੇ ਔਰਤਾਂ ਲਈ ਪ੍ਰੈਕਟੀਕਲ ਸੈਸ਼ਨਾਂ ਰਾਹੀਂ ਸਿਖਾਈ ਜਾਂਦੀ ਸੀ।",
  "Read the participant stories": "ਭਾਗੀਦਾਰ ਦੀਆਂ ਕਹਾਣੀਆਂ ਪੜ੍ਹੋ",
  "Digital learning with UNICEF": "ਯੂਨੀਸੈਫ ਦੇ ਨਾਲ ਡਿਜੀਟਲ ਸਿਖਲਾਈ",
  "Passport to Earning": "ਕਮਾਈ ਲਈ ਪਾਸਪੋਰਟ",
  "Free, job-relevant learning for young people.": "ਨੌਜਵਾਨਾਂ ਲਈ ਮੁਫਤ, ਨੌਕਰੀ-ਸੰਬੰਧੀ ਸਿਖਲਾਈ।",
  "Financial literacy with HDFC Securities": "ਐਚਡੀਐਫਸੀ ਸਕਿਓਰਿਟੀਜ਼ ਨਾਲ ਵਿੱਤੀ ਸਾਖਰਤਾ",
  "Know Your Money": "ਆਪਣੇ ਪੈਸੇ ਨੂੰ ਜਾਣੋ",
  "Practical learning for everyday money decisions.": "ਰੋਜ਼ਾਨਾ ਪੈਸੇ ਦੇ ਫੈਸਲਿਆਂ ਲਈ ਪ੍ਰੈਕਟੀਕਲ ਸਿਖਲਾਈ।",
  "Bring a programme to your community or institution": "ਆਪਣੇ ਭਾਈਚਾਰੇ ਜਾਂ ਸੰਸਥਾ ਵਿੱਚ ਇੱਕ ਪ੍ਰੋਗਰਾਮ ਲਿਆਓ",
  "Mental-health programme reach": "ਮਾਨਸਿਕ-ਸਿਹਤ ਪ੍ਰੋਗਰਾਮ ਦੀ ਪਹੁੰਚ",
  "Menstrual-health programme reach": "ਮਾਹਵਾਰੀ-ਸਿਹਤ ਪ੍ਰੋਗਰਾਮ ਦੀ ਪਹੁੰਚ",
  "Substance-abuse awareness reach": "ਪਦਾਰਥ-ਦੁਰਵਿਵਹਾਰ ਜਾਗਰੂਕਤਾ ਪਹੁੰਚ",
  "HIV/AIDS awareness programmes": "ਐੱਚ.ਆਈ.ਵੀ./ਏਡਜ਼ ਜਾਗਰੂਕਤਾ ਪ੍ਰੋਗਰਾਮ",
  "Explore the programmes behind the figures": "ਅੰਕੜਿਆਂ ਦੇ ਪਿੱਛੇ ਪ੍ਰੋਗਰਾਮਾਂ ਦੀ ਪੜਚੋਲ ਕਰੋ"
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
console.log("Injected manual translations!");
