import fs from 'fs';

const translations: Record<string, string> = {
  "Learning through experience": "ਅਨੁਭਵ ਦੁਆਰਾ ਸਿੱਖਣਾ",
  "Internships grounded in community work": "ਭਾਈਚਾਰਕ ਕੰਮ ਵਿੱਚ ਆਧਾਰਿਤ ਇੰਟਰਨਸ਼ਿਪਾਂ",
  "Jyoti treats internships as a place for students to observe community work, ask questions and exchange ideas. Punjabi Samvad has hosted young people from schools and universities, including IIM Amritsar, for practical exposure to research and social programmes.": "ਜੋਤੀ ਇੰਟਰਨਸ਼ਿਪਾਂ ਨੂੰ ਵਿਦਿਆਰਥੀਆਂ ਲਈ ਕਮਿਊਨਿਟੀ ਦੇ ਕੰਮ ਦਾ ਨਿਰੀਖਣ ਕਰਨ, ਸਵਾਲ ਪੁੱਛਣ ਅਤੇ ਵਿਚਾਰਾਂ ਦਾ ਅਦਾਨ-ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ ਇੱਕ ਜਗ੍ਹਾ ਵਜੋਂ ਮੰਨਦੀ ਹੈ। ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੇ ਖੋਜ ਅਤੇ ਸਮਾਜਿਕ ਪ੍ਰੋਗਰਾਮਾਂ ਦੇ ਵਿਹਾਰਕ ਐਕਸਪੋਜਰ ਲਈ, ਆਈ.ਆਈ.ਐਮ. ਅੰਮ੍ਰਿਤਸਰ ਸਮੇਤ ਸਕੂਲਾਂ ਅਤੇ ਯੂਨੀਵਰਸਿਟੀਆਂ ਦੇ ਨੌਜਵਾਨਾਂ ਦੀ ਮੇਜ਼ਬਾਨੀ ਕੀਤੀ ਹੈ।",
  "Our story": "ਸਾਡੀ ਕਹਾਣੀ",
  "About the president": "ਪ੍ਰਧਾਨ ਬਾਰੇ",
  "Our work": "ਸਾਡਾ ਕੰਮ",
  "Impact": "ਪ੍ਰਭਾਵ",
  "Partnerships": "ਭਾਈਵਾਲੀ",
  "Practical skills that can become everyday income.": "ਵਿਹਾਰਕ ਹੁਨਰ ਜੋ ਰੋਜ਼ਾਨਾ ਆਮਦਨ ਬਣ ਸਕਦੇ ਹਨ।",
  "Punjabi Samvad and CMS Foundation have supported practical training for rural women, young people and families affected by substance abuse. Participants learn through demonstration, repeated practice and follow-up.": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਅਤੇ CMS ਫਾਊਂਡੇਸ਼ਨ ਨੇ ਪੇਂਡੂ ਔਰਤਾਂ, ਨੌਜਵਾਨਾਂ ਅਤੇ ਨਸ਼ਿਆਂ ਦੀ ਦੁਰਵਰਤੋਂ ਤੋਂ ਪ੍ਰਭਾਵਿਤ ਪਰਿਵਾਰਾਂ ਲਈ ਪ੍ਰੈਕਟੀਕਲ ਸਿਖਲਾਈ ਦਾ ਸਮਰਥਨ ਕੀਤਾ ਹੈ। ਭਾਗੀਦਾਰ ਪ੍ਰਦਰਸ਼ਨ, ਵਾਰ-ਵਾਰ ਅਭਿਆਸ ਅਤੇ ਫਾਲੋ-ਅਪ ਦੁਆਰਾ ਸਿੱਖਦੇ ਹਨ।",
  "Read the stories": "ਕਹਾਣੀਆਂ ਪੜ੍ਹੋ",
  "Learning by doing": "ਕਰ ਕੇ ਸਿੱਖਣਾ",
  "Participants learn through practice.": "ਭਾਗੀਦਾਰ ਅਭਿਆਸ ਰਾਹੀਂ ਸਿੱਖਦੇ ਹਨ।",
  "Sessions cover products and services that participants can continue with modest equipment and local demand. Facilitators demonstrate each process, give participants time to repeat it and remain available when the workshop ends.": "ਸੈਸ਼ਨਾਂ ਵਿੱਚ ਉਤਪਾਦ ਅਤੇ ਸੇਵਾਵਾਂ ਸ਼ਾਮਲ ਹੁੰਦੀਆਂ ਹਨ ਜੋ ਭਾਗੀਦਾਰ ਮਾਮੂਲੀ ਉਪਕਰਣਾਂ ਅਤੇ ਸਥਾਨਕ ਮੰਗ ਦੇ ਨਾਲ ਜਾਰੀ ਰੱਖ ਸਕਦੇ ਹਨ। ਸਹੂਲਤਕਾਰ ਹਰੇਕ ਪ੍ਰਕਿਰਿਆ ਦਾ ਪ੍ਰਦਰਸ਼ਨ ਕਰਦੇ ਹਨ, ਭਾਗੀਦਾਰਾਂ ਨੂੰ ਇਸਨੂੰ ਦੁਹਰਾਉਣ ਦਾ ਸਮਾਂ ਦਿੰਦੇ ਹਨ ਅਤੇ ਵਰਕਸ਼ਾਪ ਖਤਮ ਹੋਣ 'ਤੇ ਉਪਲਬਧ ਰਹਿੰਦੇ ਹਨ।",
  "Delivered in partnership": "ਭਾਈਵਾਲੀ ਵਿੱਚ ਪ੍ਰਦਾਨ ਕੀਤਾ",
  "Punjabi Samvad combines community relationships and follow-up with support from CMS Foundation for these livelihood initiatives.": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਇਹਨਾਂ ਆਜੀਵਿਕਾ ਪਹਿਲਕਦਮੀਆਂ ਲਈ ਸੀਐਮਐਸ ਫਾਊਂਡੇਸ਼ਨ ਦੇ ਸਮਰਥਨ ਨਾਲ ਭਾਈਚਾਰਕ ਸਬੰਧਾਂ ਅਤੇ ਫਾਲੋ-ਅਪ ਨੂੰ ਜੋੜਦਾ ਹੈ।",
  "Skills for home-based work": "ਘਰੇਲੂ ਕੰਮ ਲਈ ਹੁਨਰ",
  "From a workshop table to products people can sell.": "ਇੱਕ ਵਰਕਸ਼ਾਪ ਟੇਬਲ ਤੋਂ ਉਤਪਾਦਾਂ ਤੱਕ ਜੋ ਲੋਕ ਵੇਚ ਸਕਦੇ ਹਨ।",
  "Punjabi Samvad has run skill-development sessions for rural girls and families affected by substance abuse. The programme covers soap making, traditional masala preparation, practical ways to assess the quality of commonly used spices, and Phulkari embroidery.": "ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੇ ਪੇਂਡੂ ਕੁੜੀਆਂ ਅਤੇ ਨਸ਼ਿਆਂ ਤੋਂ ਪ੍ਰਭਾਵਿਤ ਪਰਿਵਾਰਾਂ ਲਈ ਹੁਨਰ ਵਿਕਾਸ ਸੈਸ਼ਨ ਚਲਾਏ ਹਨ। ਪ੍ਰੋਗਰਾਮ ਵਿੱਚ ਸਾਬਣ ਬਣਾਉਣਾ, ਰਵਾਇਤੀ ਮਸਾਲਾ ਤਿਆਰ ਕਰਨਾ, ਆਮ ਤੌਰ 'ਤੇ ਵਰਤੇ ਜਾਂਦੇ ਮਸਾਲਿਆਂ ਦੀ ਗੁਣਵੱਤਾ ਦਾ ਮੁਲਾਂਕਣ ਕਰਨ ਦੇ ਵਿਹਾਰਕ ਤਰੀਕੇ, ਅਤੇ ਫੁਲਕਾਰੀ ਕਢਾਈ ਸ਼ਾਮਲ ਹੈ।",
  "Jyoti Bawa first completed the traditional masala training herself before adapting it for participants. Punjabi Samvad then used funds collected for community work, including savings from other programmes, to keep the sessions running and help participants practise beyond the first demonstration.": "ਜੋਤੀ ਬਾਵਾ ਨੇ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਪ੍ਰਤੀਭਾਗੀਆਂ ਲਈ ਇਸ ਨੂੰ ਅਪਣਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਰਵਾਇਤੀ ਮਸਾਲਾ ਸਿਖਲਾਈ ਖੁਦ ਪੂਰੀ ਕੀਤੀ। ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੇ ਫਿਰ ਕਮਿਊਨਿਟੀ ਕੰਮਾਂ ਲਈ ਇਕੱਠੇ ਕੀਤੇ ਫੰਡਾਂ ਦੀ ਵਰਤੋਂ ਕੀਤੀ, ਜਿਸ ਵਿੱਚ ਹੋਰ ਪ੍ਰੋਗਰਾਮਾਂ ਤੋਂ ਬੱਚਤ ਸ਼ਾਮਲ ਹੈ, ਸੈਸ਼ਨਾਂ ਨੂੰ ਚੱਲਦਾ ਰੱਖਣ ਅਤੇ ਭਾਗੀਦਾਰਾਂ ਨੂੰ ਪਹਿਲੇ ਪ੍ਰਦਰਸ਼ਨ ਤੋਂ ਪਰੇ ਅਭਿਆਸ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਨ ਲਈ।",
  "The training has continued across several rounds. Alongside teaching the process, the team records participant experiences and follows up on what people make, use or begin selling after the workshop.": "ਸਿਖਲਾਈ ਕਈ ਦੌਰ ਵਿੱਚ ਜਾਰੀ ਹੈ। ਪ੍ਰਕਿਰਿਆ ਨੂੰ ਸਿਖਾਉਣ ਦੇ ਨਾਲ, ਟੀਮ ਭਾਗੀਦਾਰਾਂ ਦੇ ਤਜ਼ਰਬਿਆਂ ਨੂੰ ਰਿਕਾਰਡ ਕਰਦੀ ਹੈ ਅਤੇ ਵਰਕਸ਼ਾਪ ਤੋਂ ਬਾਅਦ ਲੋਕ ਕੀ ਬਣਾਉਂਦੇ ਹਨ, ਵਰਤਦੇ ਹਨ ਜਾਂ ਵੇਚਣਾ ਸ਼ੁਰੂ ਕਰਦੇ ਹਨ ਇਸ ਬਾਰੇ ਫਾਲੋ-ਅਪ ਕਰਦੇ ਹਨ।",
  "New skills gave five participants more ways to earn.": "ਨਵੇਂ ਹੁਨਰਾਂ ਨੇ ਪੰਜ ਪ੍ਰਤੀਭਾਗੀਆਂ ਨੂੰ ਕਮਾਈ ਦੇ ਹੋਰ ਤਰੀਕੇ ਦਿੱਤੇ।",
  "These accounts use consented information supplied by participants. We left out harmful family allegations and details unrelated to the programme.": "ਇਹ ਖਾਤੇ ਭਾਗੀਦਾਰਾਂ ਦੁਆਰਾ ਪ੍ਰਦਾਨ ਕੀਤੀ ਗਈ ਸਹਿਮਤੀ ਵਾਲੀ ਜਾਣਕਾਰੀ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਨ। ਅਸੀਂ ਪ੍ਰੋਗਰਾਮ ਨਾਲ ਸਬੰਧਤ ਨੁਕਸਾਨਦੇਹ ਪਰਿਵਾਰਕ ਦੋਸ਼ਾਂ ਅਤੇ ਵੇਰਵਿਆਂ ਨੂੰ ਛੱਡ ਦਿੱਤਾ ਹੈ।",
  "Extending a 10-day skill-development workshop.": "10-ਰੋਜ਼ਾ ਹੁਨਰ ਵਿਕਾਸ ਵਰਕਸ਼ਾਪ ਦਾ ਵਿਸਤਾਰ।",
  "A ten-day workshop can introduce a skill. Many participants needed more time to practise, ask questions and build a routine, so Punjabi Samvad extended some sessions to 20–25 days.": "ਦਸ ਦਿਨਾਂ ਦੀ ਵਰਕਸ਼ਾਪ ਇੱਕ ਹੁਨਰ ਪੇਸ਼ ਕਰ ਸਕਦੀ ਹੈ। ਬਹੁਤ ਸਾਰੇ ਭਾਗੀਦਾਰਾਂ ਨੂੰ ਅਭਿਆਸ ਕਰਨ, ਸਵਾਲ ਪੁੱਛਣ ਅਤੇ ਰੁਟੀਨ ਬਣਾਉਣ ਲਈ ਵਧੇਰੇ ਸਮੇਂ ਦੀ ਲੋੜ ਸੀ, ਇਸ ਲਈ ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੇ ਕੁਝ ਸੈਸ਼ਨਾਂ ਨੂੰ 20-25 ਦਿਨਾਂ ਤੱਕ ਵਧਾ ਦਿੱਤਾ।",
  "The extra time helped participants continue at home. Some called after the programme for guidance on vermicomposting, while women kept working with masalas, soap and embroidery. During follow-up, participants told us where they felt confident and where they needed more support.": "ਵਾਧੂ ਸਮੇਂ ਨੇ ਭਾਗੀਦਾਰਾਂ ਨੂੰ ਘਰ ਵਿੱਚ ਜਾਰੀ ਰੱਖਣ ਵਿੱਚ ਮਦਦ ਕੀਤੀ। ਵਰਮੀਕੰਪੋਸਟਿੰਗ ਬਾਰੇ ਮਾਰਗਦਰਸ਼ਨ ਲਈ ਪ੍ਰੋਗਰਾਮ ਤੋਂ ਬਾਅਦ ਕੁਝ ਬੁਲਾਇਆ ਗਿਆ, ਜਦੋਂ ਕਿ ਔਰਤਾਂ ਨੇ ਮਸਾਲੇ, ਸਾਬਣ ਅਤੇ ਕਢਾਈ ਨਾਲ ਕੰਮ ਕਰਨਾ ਜਾਰੀ ਰੱਖਿਆ। ਫਾਲੋ-ਅਪ ਦੌਰਾਨ, ਭਾਗੀਦਾਰਾਂ ਨੇ ਸਾਨੂੰ ਦੱਸਿਆ ਕਿ ਉਨ੍ਹਾਂ ਨੂੰ ਕਿੱਥੇ ਆਤਮ-ਵਿਸ਼ਵਾਸ ਮਹਿਸੂਸ ਹੋਇਆ ਅਤੇ ਉਨ੍ਹਾਂ ਨੂੰ ਕਿੱਥੇ ਹੋਰ ਸਹਾਇਤਾ ਦੀ ਲੋੜ ਹੈ।",
  "We now plan livelihood training with practice and continued guidance in mind. The aim is to help each participant leave with a skill they can keep using.": "ਅਸੀਂ ਹੁਣ ਅਭਿਆਸ ਅਤੇ ਨਿਰੰਤਰ ਮਾਰਗਦਰਸ਼ਨ ਨੂੰ ਧਿਆਨ ਵਿੱਚ ਰੱਖਦੇ ਹੋਏ ਰੋਜ਼ੀ-ਰੋਟੀ ਦੀ ਸਿਖਲਾਈ ਦੀ ਯੋਜਨਾ ਬਣਾਉਂਦੇ ਹਾਂ। ਉਦੇਸ਼ ਹਰੇਕ ਭਾਗੀਦਾਰ ਦੀ ਇੱਕ ਹੁਨਰ ਨਾਲ ਛੱਡਣ ਵਿੱਚ ਮਦਦ ਕਰਨਾ ਹੈ ਜਿਸਦੀ ਉਹ ਵਰਤੋਂ ਕਰਦੇ ਰਹਿ ਸਕਦੇ ਹਨ।",
  "Support practical learning": "ਵਿਹਾਰਕ ਸਿਖਲਾਈ ਦਾ ਸਮਰਥਨ ਕਰੋ",
  "Help more participants turn training into paid work.": "ਸਿਖਲਾਈ ਨੂੰ ਅਦਾਇਗੀਸ਼ੁਦਾ ਕੰਮ ਵਿੱਚ ਬਦਲਣ ਵਿੱਚ ਹੋਰ ਭਾਗੀਦਾਰਾਂ ਦੀ ਮਦਦ ਕਰੋ।",
  "Support the programme": "ਪ੍ਰੋਗਰਾਮ ਦਾ ਸਮਰਥਨ ਕਰੋ",
  "A story that began with the courage to speak.": "ਇੱਕ ਕਹਾਣੀ ਜੋ ਬੋਲਣ ਦੀ ਹਿੰਮਤ ਨਾਲ ਸ਼ੁਰੂ ਹੋਈ।",
  "Follow the journey": "ਯਾਤਰਾ ਦਾ ਪਾਲਣ ਕਰੋ",
  "The beginning": "ਸ਼ੁਰੂਆਤ",
  "A platform for conversations that were difficult to start.": "ਉਹਨਾਂ ਗੱਲਬਾਤਾਂ ਲਈ ਇੱਕ ਪਲੇਟਫਾਰਮ ਜੋ ਸ਼ੁਰੂ ਕਰਨਾ ਔਖਾ ਸੀ।",
  "The early work brought social issues into the open through dialogue and creative expression.": "ਸ਼ੁਰੂਆਤੀ ਕੰਮ ਨੇ ਸੰਵਾਦ ਅਤੇ ਸਿਰਜਣਾਤਮਕ ਸਮੀਕਰਨ ਰਾਹੀਂ ਸਮਾਜਿਕ ਮੁੱਦਿਆਂ ਨੂੰ ਖੁੱਲ੍ਹੇ ਵਿੱਚ ਲਿਆਂਦਾ।",
  "written and directed by Jyoti Bawa, addressed female foeticide, gender discrimination and the dignity of girls.": "ਜੋਤੀ ਬਾਵਾ ਦੁਆਰਾ ਲਿਖਿਆ ਅਤੇ ਨਿਰਦੇਸ਼ਿਤ, ਮਾਦਾ ਭਰੂਣ ਹੱਤਿਆ, ਲਿੰਗ ਵਿਤਕਰੇ ਅਤੇ ਲੜਕੀਆਂ ਦੇ ਸਨਮਾਨ ਨੂੰ ਸੰਬੋਧਿਤ ਕਰਦਾ ਹੈ।",
  "It established a principle that still shapes Punjabi Samvad: people engage more deeply when an issue is made human, immediate and possible to discuss.": "ਇਸਨੇ ਇੱਕ ਅਜਿਹਾ ਸਿਧਾਂਤ ਸਥਾਪਿਤ ਕੀਤਾ ਜੋ ਅਜੇ ਵੀ ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੂੰ ਆਕਾਰ ਦਿੰਦਾ ਹੈ: ਲੋਕ ਵਧੇਰੇ ਡੂੰਘਾਈ ਨਾਲ ਜੁੜਦੇ ਹਨ ਜਦੋਂ ਕੋਈ ਮੁੱਦਾ ਮਨੁੱਖੀ, ਫੌਰੀ ਅਤੇ ਚਰਚਾ ਕਰਨ ਲਈ ਸੰਭਵ ਹੋ ਜਾਂਦਾ ਹੈ।",
  "Theatre became an early language of public awareness.": "ਥੀਏਟਰ ਜਨਤਕ ਜਾਗਰੂਕਤਾ ਦੀ ਸ਼ੁਰੂਆਤੀ ਭਾਸ਼ਾ ਬਣ ਗਿਆ।",
  "people reached": "ਲੋਕ ਪਹੁੰਚ ਗਏ",
  "helped communities confront female foeticide and discrimination against girls in a shared public space.": "ਸਾਂਝੇ ਜਨਤਕ ਸਥਾਨਾਂ ਵਿੱਚ ਮਾਦਾ ਭਰੂਣ ਹੱਤਿਆ ਅਤੇ ਕੁੜੀਆਂ ਵਿਰੁੱਧ ਵਿਤਕਰੇ ਦਾ ਟਾਕਰਾ ਕਰਨ ਵਿੱਚ ਭਾਈਚਾਰਿਆਂ ਦੀ ਮਦਦ ਕੀਤੀ।",
  "Built step by step, with communities at the centre.": "ਭਾਈਚਾਰਿਆਂ ਨੂੰ ਕੇਂਦਰ ਵਿੱਚ ਰੱਖ ਕੇ ਕਦਮ-ਦਰ-ਕਦਮ ਬਣਾਇਆ ਗਿਆ।",
  "From one urgent issue to a connected view of social well-being.": "ਇੱਕ ਜ਼ਰੂਰੀ ਮੁੱਦੇ ਤੋਂ ਸਮਾਜਿਕ ਭਲਾਈ ਦੇ ਇੱਕ ਜੁੜੇ ਦ੍ਰਿਸ਼ਟੀਕੋਣ ਤੱਕ।",
  "Education and vocational programmes created opportunities for women, girls and young people. Health work addressed HIV/AIDS, menstrual health and mental well-being. Substance-abuse prevention combined expert sessions, community outreach and film.": "ਸਿੱਖਿਆ ਅਤੇ ਕਿੱਤਾਮੁਖੀ ਪ੍ਰੋਗਰਾਮਾਂ ਨੇ ਔਰਤਾਂ, ਲੜਕੀਆਂ ਅਤੇ ਨੌਜਵਾਨਾਂ ਲਈ ਮੌਕੇ ਪੈਦਾ ਕੀਤੇ। ਸਿਹਤ ਦੇ ਕੰਮ ਨੇ HIV/AIDS, ਮਾਹਵਾਰੀ ਦੀ ਸਿਹਤ ਅਤੇ ਮਾਨਸਿਕ ਤੰਦਰੁਸਤੀ ਨੂੰ ਸੰਬੋਧਿਤ ਕੀਤਾ। ਪਦਾਰਥ-ਦੁਰਵਿਵਹਾਰ ਦੀ ਰੋਕਥਾਮ ਵਿੱਚ ਮਾਹਰ ਸੈਸ਼ਨਾਂ, ਕਮਿਊਨਿਟੀ ਆਊਟਰੀਚ ਅਤੇ ਫਿਲਮ ਨੂੰ ਜੋੜਿਆ ਗਿਆ।",
  "Learning and opportunity": "ਸਿੱਖਣ ਅਤੇ ਮੌਕੇ",
  "The organisation moved forward without losing sight of why it began.": "ਸੰਗਠਨ ਇਸ ਗੱਲ ਦੀ ਨਜ਼ਰ ਗੁਆਏ ਬਿਨਾਂ ਅੱਗੇ ਵਧਿਆ ਕਿ ਇਹ ਕਿਉਂ ਸ਼ੁਰੂ ਹੋਇਆ।",
  "The methods have grown and the partnerships have widened, but dialogue remains the starting point.": "ਤਰੀਕੇ ਵਧੇ ਹਨ ਅਤੇ ਭਾਈਵਾਲੀ ਵਧ ਗਈ ਹੈ, ਪਰ ਗੱਲਬਾਤ ਸ਼ੁਰੂਆਤੀ ਬਿੰਦੂ ਬਣੀ ਹੋਈ ਹੈ।"
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
console.log("Injected work/skills translations!");
