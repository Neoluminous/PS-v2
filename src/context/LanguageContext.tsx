import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Language = "en" | "pa";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, { en: string; pa: string }> = {
  "Change Begins With Samvad.": {
    en: "Change Begins With Samvad.",
    pa: "ਬਦਲਾਅ ਦੀ ਸ਼ੁਰੂਆਤ ਸੰਵਾਦ ਨਾਲ ਹੁੰਦੀ ਹੈ।"
  },
  "Dialogue that moves communities forward": {
    en: "Dialogue that moves communities forward",
    pa: "ਸੰਵਾਦ ਜੋ ਭਾਈਚਾਰਿਆਂ ਨੂੰ ਅੱਗੇ ਵਧਾਉਂਦਾ ਹੈ"
  },
  "More than two decades of grassroots programmes advancing dignity, opportunity and well-being across India.": {
    en: "More than two decades of grassroots programmes advancing dignity, opportunity and well-being across India.",
    pa: "ਭਾਰਤ ਭਰ ਵਿੱਚ ਸਨਮਾਨ, ਮੌਕੇ ਅਤੇ ਭਲਾਈ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਨ ਵਾਲੇ ਜ਼ਮੀਨੀ ਪੱਧਰ ਦੇ ਪ੍ਰੋਗਰਾਮਾਂ ਦੇ ਦੋ ਦਹਾਕਿਆਂ ਤੋਂ ਵੱਧ।"
  },
  "Explore our work": {
    en: "Explore our work",
    pa: "ਸਾਡਾ ਕੰਮ ਵੇਖੋ"
  },
  "Discover our story": {
    en: "Discover our story",
    pa: "ਸਾਡੀ ਕਹਾਣੀ ਜਾਣੋ"
  },
  "Dialogue. Dignity. Change.": {
    en: "Dialogue. Dignity. Change.",
    pa: "ਸੰਵਾਦ। ਮਰਿਆਦਾ। ਬਦਲਾਅ।"
  },
  "About Punjabi Samvad": {
    en: "About Punjabi Samvad",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਬਾਰੇ"
  },
  "Change begins when people are part of the conversation.": {
    en: "Change begins when people are part of the conversation.",
    pa: "ਬਦਲਾਅ ਉਦੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ ਜਦੋਂ ਲੋਕ ਗੱਲਬਾਤ ਦਾ ਹਿੱਸਾ ਹੁੰਦੇ ਹਨ।"
  },
  "Punjabi Samvad began when Amit Bawa and Jyoti Bawa decided to act on the gender-based violence and discrimination they saw around them.": {
    en: "Punjabi Samvad began when Amit Bawa and Jyoti Bawa decided to act on the gender-based violence and discrimination they saw around them.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਉਦੋਂ ਸ਼ੁਰੂ ਹੋਇਆ ਜਦੋਂ ਅਮਿਤ ਬਾਵਾ ਅਤੇ ਜੋਤੀ ਬਾਵਾ ਨੇ ਲਿੰਗ-ਅਧਾਰਿਤ ਹਿੰਸਾ ਅਤੇ ਵਿਤਕਰੇ 'ਤੇ ਕੰਮ ਕਰਨ ਦਾ ਫੈਸਲਾ ਕੀਤਾ ਜੋ ਉਨ੍ਹਾਂ ਨੇ ਆਪਣੇ ਆਲੇ-ਦੁਆਲੇ ਦੇਖਿਆ ਸੀ।"
  },
  "That first step grew into more than two decades of work across education, women's empowerment, mental health, menstrual health, youth development, community health and culture.": {
    en: "That first step grew into more than two decades of work across education, women's empowerment, mental health, menstrual health, youth development, community health and culture.",
    pa: "ਉਹ ਪਹਿਲਾ ਕਦਮ ਸਿੱਖਿਆ, ਔਰਤਾਂ ਦੇ ਸਸ਼ਕਤੀਕਰਨ, ਮਾਨਸਿਕ ਸਿਹਤ, ਮਾਹਵਾਰੀ ਸਿਹਤ, ਨੌਜਵਾਨਾਂ ਦੇ ਵਿਕਾਸ, ਭਾਈਚਾਰਕ ਸਿਹਤ ਅਤੇ ਸੱਭਿਆਚਾਰ ਵਿੱਚ ਦੋ ਦਹਾਕਿਆਂ ਤੋਂ ਵੱਧ ਦੇ ਕੰਮ ਵਿੱਚ ਬਦਲ ਗਿਆ।"
  },
  "Samvad means dialogue.": {
    en: "Samvad means dialogue.",
    pa: "ਸੰਵਾਦ ਦਾ ਅਰਥ ਹੈ ਗੱਲਬਾਤ।"
  },
  "We listen, make reliable information accessible and work with communities—not simply for them.": {
    en: "We listen, make reliable information accessible and work with communities—not simply for them.",
    pa: "ਅਸੀਂ ਸੁਣਦੇ ਹਾਂ, ਭਰੋਸੇਯੋਗ ਜਾਣਕਾਰੀ ਉਪਲਬਧ ਕਰਵਾਉਂਦੇ ਹਾਂ ਅਤੇ ਭਾਈਚਾਰਿਆਂ ਦੇ ਨਾਲ ਕੰਮ ਕਰਦੇ ਹਾਂ - ਸਿਰਫ਼ ਉਨ੍ਹਾਂ ਲਈ ਨਹੀਂ।"
  },
  "Read our story": {
    en: "Read our story",
    pa: "ਸਾਡੀ ਕਹਾਣੀ ਪੜ੍ਹੋ"
  },
  "What we work on": {
    en: "What we work on",
    pa: "ਅਸੀਂ ਕਿਹੜੇ ਮਸਲਿਆਂ 'ਤੇ ਕੰਮ ਕਰਦੇ ਹਾਂ"
  },
  "Practical programmes. Human conversations. Lasting confidence.": {
    en: "Practical programmes. Human conversations. Lasting confidence.",
    pa: "ਵਿਹਾਰਕ ਪ੍ਰੋਗਰਾਮ। ਮਨੁੱਖੀ ਗੱਲਬਾਤ। ਸਥਾਈ ਵਿਸ਼ਵਾਸ।"
  },
  "Our work connects knowledge, opportunity and creative advocacy across seven focus areas.": {
    en: "Our work connects knowledge, opportunity and creative advocacy across seven focus areas.",
    pa: "ਸਾਡਾ ਕੰਮ ਸੱਤ ਫੋਕਸ ਖੇਤਰਾਂ ਵਿੱਚ ਗਿਆਨ, ਮੌਕਿਆਂ ਅਤੇ ਰਚਨਾਤਮਕ ਵਕਾਲਤ ਨੂੰ ਜੋੜਦਾ ਹੈ।"
  },
  "Explore all programmes": {
    en: "Explore all programmes",
    pa: "ਸਾਰੇ ਪ੍ਰੋਗਰਾਮ ਵੇਖੋ"
  },
  "Our reach so far": {
    en: "Our reach so far",
    pa: "ਸਾਡੀ ਹੁਣ ਤੱਕ ਦੀ ਪਹੁੰਚ"
  },
  "Two decades of dialogue, learning and community action.": {
    en: "Two decades of dialogue, learning and community action.",
    pa: "ਸੰਵਾਦ, ਸਿੱਖਣ ਅਤੇ ਭਾਈਚਾਰਕ ਕਾਰਵਾਈ ਦੇ ਦੋ ਦਹਾਕੇ।"
  },
  "These figures reflect programmes delivered and people reached. We use participant feedback and available monitoring data to keep learning and improving.": {
    en: "These figures reflect programmes delivered and people reached. We use participant feedback and available monitoring data to keep learning and improving.",
    pa: "ਇਹ ਅੰਕੜੇ ਪ੍ਰਦਾਨ ਕੀਤੇ ਗਏ ਪ੍ਰੋਗਰਾਮਾਂ ਅਤੇ ਪਹੁੰਚੇ ਲੋਕਾਂ ਨੂੰ ਦਰਸਾਉਂਦੇ ਹਨ। ਅਸੀਂ ਸਿੱਖਣ ਅਤੇ ਸੁਧਾਰਨ ਲਈ ਭਾਗੀਦਾਰਾਂ ਦੇ ਫੀਡਬੈਕ ਅਤੇ ਉਪਲਬਧ ਡੇਟਾ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਾਂ।"
  },
  "See our impact": {
    en: "See our impact",
    pa: "ਸਾਡਾ ਪ੍ਰਭਾਵ ਦੇਖੋ"
  },
  "Creative advocacy": {
    en: "Creative advocacy",
    pa: "ਰਚਨਾਤਮਕ ਜਨ-ਜਾਗਰੂਕਤਾ"
  },
  "Theatre, film and literature for public awareness.": {
    en: "Theatre, film and literature for public awareness.",
    pa: "ਜਨਤਕ ਜਾਗਰੂਕਤਾ ਲਈ ਥੀਏਟਰ, ਫਿਲਮ ਅਤੇ ਸਾਹਿਤ।"
  },
  "Creative communication has been part of Punjabi Samvad from the beginning—making difficult subjects easier to discuss.": {
    en: "Creative communication has been part of Punjabi Samvad from the beginning—making difficult subjects easier to discuss.",
    pa: "ਰਚਨਾਤਮਕ ਸੰਚਾਰ ਸ਼ੁਰੂ ਤੋਂ ਹੀ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦਾ ਹਿੱਸਾ ਰਿਹਾ ਹੈ-ਔਖੇ ਵਿਸ਼ਿਆਂ 'ਤੇ ਚਰਚਾ ਕਰਨਾ ਆਸਾਨ ਬਣਾਉਂਦਾ ਹੈ।"
  },
  "Trusted collaborations": {
    en: "Trusted collaborations",
    pa: "ਭਰੋਸੇਯੋਗ ਸਹਿਯੋਗ"
  },
  "Partnerships built around shared purpose.": {
    en: "Partnerships built around shared purpose.",
    pa: "ਸਾਂਝੇ ਉਦੇਸ਼ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਬਣਾਈਆਂ ਭਾਈਵਾਲੀਆ।"
  },
  "Long-term collaboration brings together community insight, specialist knowledge and the reach needed to make programmes stronger.": {
    en: "Long-term collaboration brings together community insight, specialist knowledge and the reach needed to make programmes stronger.",
    pa: "ਲੰਬੀ ਮਿਆਦ ਦਾ ਸਹਿਯੋਗ ਪ੍ਰੋਗਰਾਮਾਂ ਨੂੰ ਮਜ਼ਬੂਤ ਬਣਾਉਣ ਲਈ ਭਾਈਚਾਰਕ ਸੂਝ, ਮਾਹਰ ਗਿਆਨ ਅਤੇ ਲੋੜੀਂਦੀ ਪਹੁੰਚ ਨੂੰ ਇਕੱਠਾ ਕਰਦਾ ਹੈ।"
  },
  "Support our work": {
    en: "Support our work",
    pa: "ਸਾਡੇ ਕੰਮ ਦਾ ਸਮਰਥਨ ਕਰੋ"
  },
  "Help us reach more communities.": {
    en: "Help us reach more communities.",
    pa: "ਹੋਰ ਭਾਈਚਾਰਿਆਂ ਤੱਕ ਪਹੁੰਚਣ ਵਿੱਚ ਸਾਡੀ ਮਦਦ ਕਰੋ।"
  },
  "Fund a specific programme or contribute where resources are needed most. Your support pays for education, health awareness and community outreach.": {
    en: "Fund a specific programme or contribute where resources are needed most. Your support pays for education, health awareness and community outreach.",
    pa: "ਕਿਸੇ ਖਾਸ ਪ੍ਰੋਗਰਾਮ ਲਈ ਫੰਡ ਦਿਓ ਜਾਂ ਉੱਥੇ ਯੋਗਦਾਨ ਪਾਓ ਜਿੱਥੇ ਸਰੋਤਾਂ ਦੀ ਸਭ ਤੋਂ ਵੱਧ ਲੋੜ ਹੈ। ਤੁਹਾਡਾ ਸਮਰਥਨ ਸਿੱਖਿਆ, ਸਿਹਤ ਜਾਗਰੂਕਤਾ ਅਤੇ ਭਾਈਚਾਰਕ ਪਹੁੰਚ ਲਈ ਭੁਗਤਾਨ ਕਰਦਾ ਹੈ।"
  },
  "Fund a programme": {
    en: "Fund a programme",
    pa: "ਪ੍ਰੋਗਰਾਮ ਨੂੰ ਫੰਡ ਦਿਓ"
  },
  "Transparency & compliance": {
    en: "Transparency & compliance",
    pa: "ਪਾਰਦਰਸ਼ਤਾ ਅਤੇ ਪਾਲਣਾ"
  },
  "Registered. Accountable. Ready to collaborate.": {
    en: "Registered. Accountable. Ready to collaborate.",
    pa: "ਰਜਿਸਟਰਡ. ਜਵਾਬਦੇਹ. ਸਹਿਯੋਗ ਕਰਨ ਲਈ ਤਿਆਰ।"
  },
  "CSR & institutional partnerships": {
    en: "CSR & institutional partnerships",
    pa: "ਸੀਐਸਆਰ ਅਤੇ ਸੰਸਥਾਗਤ ਭਾਈਵਾਲੀਆ"
  },
  "Let's build a programme with measurable social impact.": {
    en: "Let's build a programme with measurable social impact.",
    pa: "ਆਓ ਮਾਪਣਯੋਗ ਸਮਾਜਿਕ ਪ੍ਰਭਾਵ ਵਾਲਾ ਪ੍ਰੋਗਰਾਮ ਬਣਾਈਏ।"
  },
  "Partner with us": {
    en: "Partner with us",
    pa: "ਸਾਡੇ ਨਾਲ ਭਾਈਵਾਲ ਬਣੋ"
  },
  "Women & Girls": {
    en: "Women & Girls",
    pa: "ਔਰਤਾਂ ਅਤੇ ਕੁੜੀਆਂ"
  },
  "Education, vocational skills and opportunities that build confidence and independence.": {
    en: "Education, vocational skills and opportunities that build confidence and independence.",
    pa: "ਸਿੱਖਿਆ, ਕਿੱਤਾਮੁਖੀ ਹੁਨਰ ਅਤੇ ਮੌਕੇ ਜੋ ਆਤਮ ਵਿਸ਼ਵਾਸ ਅਤੇ ਸੁਤੰਤਰਤਾ ਦਾ ਨਿਰਮਾਣ ਕਰਦੇ ਹਨ।"
  },
  "Education & Youth": {
    en: "Education & Youth",
    pa: "ਸਿੱਖਿਆ ਅਤੇ ਨੌਜਵਾਨ"
  },
  "Learning support, mentoring, internships and meaningful youth engagement.": {
    en: "Learning support, mentoring, internships and meaningful youth engagement.",
    pa: "ਸਿੱਖਣ ਵਿੱਚ ਸਹਾਇਤਾ, ਸਲਾਹ, ਇੰਟਰਨਸ਼ਿਪ ਅਤੇ ਸਾਰਥਕ ਨੌਜਵਾਨ ਸ਼ਮੂਲੀਅਤ।"
  },
  "Mental Health": {
    en: "Mental Health",
    pa: "ਮਾਨਸਿਕ ਸਿਹਤ"
  },
  "Open conversations that help reduce stigma around emotional well-being.": {
    en: "Open conversations that help reduce stigma around emotional well-being.",
    pa: "ਖੁੱਲ੍ਹੀ ਗੱਲਬਾਤ ਜੋ ਭਾਵਨਾਤਮਕ ਤੰਦਰੁਸਤੀ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਦੇ ਕਲੰਕ ਨੂੰ ਘਟਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦੀ ਹੈ।"
  },
  "Menstrual Health": {
    en: "Menstrual Health",
    pa: "ਮਾਹਵਾਰੀ ਸਿਹਤ"
  },
  "Practical, reliable education for girls, schools and communities.": {
    en: "Practical, reliable education for girls, schools and communities.",
    pa: "ਕੁੜੀਆਂ, ਸਕੂਲਾਂ ਅਤੇ ਭਾਈਚਾਰਿਆਂ ਲਈ ਵਿਹਾਰਕ, ਭਰੋਸੇਯੋਗ ਸਿੱਖਿਆ।"
  },
  "Substance-Abuse Awareness": {
    en: "Substance-Abuse Awareness",
    pa: "ਨਸ਼ੀਲੇ ਪਦਾਰਥਾਂ ਦੀ ਦੁਰਵਰਤੋਂ ਬਾਰੇ ਜਾਗਰੂਕਤਾ"
  },
  "Prevention-led lectures, outreach and creative communication.": {
    en: "Prevention-led lectures, outreach and creative communication.",
    pa: "ਰੋਕਥਾਮ ਦੀ ਅਗਵਾਈ ਵਾਲੇ ਲੈਕਚਰ, ਪਹੁੰਚ ਅਤੇ ਰਚਨਾਤਮਕ ਸੰਚਾਰ।"
  },
  "Community Health": {
    en: "Community Health",
    pa: "ਭਾਈਚਾਰਕ ਸਿਹਤ"
  },
  "Awareness around HIV/AIDS, preventive health and family well-being.": {
    en: "Awareness around HIV/AIDS, preventive health and family well-being.",
    pa: "ਐੱਚਆਈਵੀ/ਏਡਜ਼, ਰੋਕਥਾਮ ਵਾਲੀ ਸਿਹਤ ਅਤੇ ਪਰਿਵਾਰ ਦੀ ਤੰਦਰੁਸਤੀ ਬਾਰੇ ਜਾਗਰੂਕਤਾ।"
  },
  "People reached through mental-health programmes": {
    en: "People reached through mental-health programmes",
    pa: "ਮਾਨਸਿਕ-ਸਿਹਤ ਪ੍ਰੋਗਰਾਮਾਂ ਰਾਹੀਂ ਲੋਕਾਂ ਤੱਕ ਪਹੁੰਚ ਕੀਤੀ"
  },
  "People reached through menstrual-health programmes": {
    en: "People reached through menstrual-health programmes",
    pa: "ਮਾਹਵਾਰੀ-ਸਿਹਤ ਪ੍ਰੋਗਰਾਮਾਂ ਰਾਹੀਂ ਲੋਕਾਂ ਤੱਕ ਪਹੁੰਚ ਕੀਤੀ"
  },
  "People reached through anti-drug awareness": {
    en: "People reached through anti-drug awareness",
    pa: "ਨਸ਼ਾ ਵਿਰੋਧੀ ਜਾਗਰੂਕਤਾ ਰਾਹੀਂ ਲੋਕਾਂ ਤੱਕ ਪਹੁੰਚ ਕੀਤੀ"
  },
  "People reached through Khooh Bolda Hai": {
    en: "People reached through Khooh Bolda Hai",
    pa: "ਖੂਹ ਬੋਲਦਾ ਹੈ ਰਾਹੀਂ ਲੋਕਾਂ ਤੱਕ ਪਹੁੰਚ ਕੀਤੀ"
  },
  "1,100,000+ people reached": {
    en: "1,100,000+ people reached",
    pa: "11 ਲੱਖ ਤੋਂ ਵੱਧ ਲੋਕਾਂ ਤੱਕ ਪਹੁੰਚ"
  },
  "Khooh Bolda Hai": {
    en: "Khooh Bolda Hai",
    pa: "ਖੂਹ ਬੋਲਦਾ ਹੈ"
  },
  "Theatre addressing female foeticide, discrimination and the dignity of girls.": {
    en: "Theatre addressing female foeticide, discrimination and the dignity of girls.",
    pa: "ਕੰਨਿਆ ਭਰੂਣ ਹੱਤਿਆ, ਵਿਤਕਰੇ ਅਤੇ ਕੁੜੀਆਂ ਦੇ ਸਨਮਾਨ ਨੂੰ ਸੰਬੋਧਿਤ ਕਰਦਾ ਥੀਏਟਰ।"
  },
  "Documentary storytelling": {
    en: "Documentary storytelling",
    pa: "ਡਾਕੂਮੈਂਟਰੀ ਰਾਹੀਂ ਕਹਾਣੀ-ਕਥਨ"
  },
  "Tirhayi Umar": {
    en: "Tirhayi Umar",
    pa: "ਤਿਰਾਹੀ ਉਮਰ"
  },
  "A creative examination of the impact of substance abuse on people and families.": {
    en: "A creative examination of the impact of substance abuse on people and families.",
    pa: "ਲੋਕਾਂ ਅਤੇ ਪਰਿਵਾਰਾਂ 'ਤੇ ਨਸ਼ੀਲੇ ਪਦਾਰਥਾਂ ਦੀ ਦੁਰਵਰਤੋਂ ਦੇ ਪ੍ਰਭਾਵ ਦੀ ਰਚਨਾਤਮਕ ਜਾਂਚ।"
  },
  "Culture & heritage": {
    en: "Culture & heritage",
    pa: "ਸੱਭਿਆਚਾਰ ਅਤੇ ਵਿਰਾਸਤ"
  },
  "Art that brings people together": {
    en: "Art that brings people together",
    pa: "ਕਲਾ ਜੋ ਲੋਕਾਂ ਨੂੰ ਇਕੱਠਾ ਕਰਦੀ ਹੈ"
  },
  "Literature, digital art and cultural programmes that preserve heritage and inspire dialogue.": {
    en: "Literature, digital art and cultural programmes that preserve heritage and inspire dialogue.",
    pa: "ਸਾਹਿਤ, ਡਿਜੀਟਲ ਕਲਾ ਅਤੇ ਸੱਭਿਆਚਾਰਕ ਪ੍ਰੋਗਰਾਮ ਜੋ ਵਿਰਾਸਤ ਨੂੰ ਸੁਰੱਖਿਅਤ ਰੱਖਦੇ ਹਨ ਅਤੇ ਸੰਵਾਦ ਨੂੰ ਪ੍ਰੇਰਿਤ ਕਰਦੇ ਹਨ।"
  },
  "Registered NGO · Serving communities since 2004": {
    en: "Registered NGO · Serving communities since 2004",
    pa: "ਰਜਿਸਟਰਡ ਗੈਰ-ਸਰਕਾਰੀ ਸੰਸਥਾ · 2004 ਤੋਂ ਸਮੁਦਾਇਆਂ ਨਾਲ ਕੰਮ ਕਰ ਰਹੀ"
  },
  "80G Approved": {
    en: "80G Approved",
    pa: "80G ਮਨਜ਼ੂਰਸ਼ੁਦਾ"
  },
  "Amritsar, India": {
    en: "Amritsar, India",
    pa: "ਅੰਮ੍ਰਿਤਸਰ, ਭਾਰਤ"
  },
  "FAQs": {
    en: "FAQs",
    pa: "ਅਕਸਰ ਪੁੱਛੇ ਜਾਂਦੇ ਸਵਾਲ"
  },
  "Contact": {
    en: "Contact",
    pa: "ਸੰਪਰਕ"
  },
  "Donate": {
    en: "Donate",
    pa: "ਦਾਨ ਕਰੋ"
  },
  "More": {
    en: "More",
    pa: "ਹੋਰ"
  },
  "Search the website": {
    en: "Search the website",
    pa: "ਵੈੱਬਸਾਈਟ ਵਿੱਚ ਖੋਜੋ"
  },
  "About": {
    en: "About",
    pa: "ਸਾਡੇ ਬਾਰੇ"
  },
  "Our Work": {
    en: "Our Work",
    pa: "ਸਾਡਾ ਕੰਮ"
  },
  "Partner": {
    en: "Partner",
    pa: "ਸਾਡੇ ਨਾਲ ਭਾਈਵਾਲੀ ਕਰੋ"
  },
  "Get Involved": {
    en: "Get Involved",
    pa: "ਸਾਡੇ ਨਾਲ ਜੁੜੋ"
  },
  "About Us": {
    en: "About Us",
    pa: "ਸਾਡੇ ਬਾਰੇ"
  },
  "Our Story": {
    en: "Our Story",
    pa: "ਸਾਡੀ ਕਹਾਣੀ"
  },
  "Amit Bawa": {
    en: "Amit Bawa",
    pa: "ਅਮਿਤ ਬਾਵਾ"
  },
  "About the President": {
    en: "About the President",
    pa: "ਪ੍ਰਧਾਨ ਬਾਰੇ"
  },
  "Supporters": {
    en: "Supporters",
    pa: "ਸਹਿਯੋਗੀ"
  },
  "Transparency": {
    en: "Transparency",
    pa: "ਪਾਰਦਰਸ਼ਤਾ"
  },
  "Policies": {
    en: "Policies",
    pa: "ਨੀਤੀਆਂ"
  },
  "Focus Areas": {
    en: "Focus Areas",
    pa: "ਕਾਰਜ ਖੇਤਰ"
  },
  "Programmes": {
    en: "Programmes",
    pa: "ਪ੍ਰੋਗਰਾਮ"
  },
  "Skills & Livelihoods": {
    en: "Skills & Livelihoods",
    pa: "ਹੁਨਰ ਅਤੇ ਜੀਵਿਕਾ"
  },
  "Passport to Earning": {
    en: "Passport to Earning",
    pa: "Passport to Earning"
  },
  "Know Your Money": {
    en: "Know Your Money",
    pa: "Know Your Money"
  },
  "Our Impact": {
    en: "Our Impact",
    pa: "ਸਾਡਾ ਪ੍ਰਭਾਵ"
  },
  "Gallery": {
    en: "Gallery",
    pa: "ਗੈਲਰੀ"
  },
  "Media Features": {
    en: "Media Features",
    pa: "ਮੀਡੀਆ ਵਿੱਚ"
  },
  "News & Updates": {
    en: "News & Updates",
    pa: "ਖ਼ਬਰਾਂ ਅਤੇ ਅੱਪਡੇਟ"
  },
  "Partners & Collaborations": {
    en: "Partners & Collaborations",
    pa: "ਭਾਈਵਾਲ ਅਤੇ ਸਹਿਯੋਗ"
  },
  "CSR Partnerships": {
    en: "CSR Partnerships",
    pa: "CSR ਭਾਈਵਾਲੀਆਂ"
  },
  "Discuss a Partnership": {
    en: "Discuss a Partnership",
    pa: "ਭਾਈਵਾਲੀ ਬਾਰੇ ਗੱਲ ਕਰੋ"
  },
  "Volunteer & Intern": {
    en: "Volunteer & Intern",
    pa: "ਵਲੰਟੀਅਰ ਅਤੇ ਇੰਟਰਨ"
  },
  "Bring a social-impact idea": {
    en: "Bring a social-impact idea",
    pa: "ਸਮਾਜ ਲਈ ਲਾਭਕਾਰੀ ਆਪਣਾ ਵਿਚਾਰ ਸਾਡੇ ਨਾਲ ਸਾਂਝਾ ਕਰੋ"
  },
  "Let's turn it into a meaningful Samvad.": {
    en: "Let's turn it into a meaningful Samvad.",
    pa: "ਆਓ, ਇਸਨੂੰ ਇੱਕ ਅਰਥਪੂਰਨ ਸੰਵਾਦ ਅਤੇ ਕਾਰਜ ਵਿੱਚ ਬਦਲਈਏ।"
  },
  "Make a donation": {
    en: "Make a donation",
    pa: "ਦਾਨ ਕਰੋ"
  },
  "Since": {
    en: "Since",
    pa: "ਤੋਂ"
  },
  "Rooted in Punjab · Working across India": {
    en: "Rooted in Punjab · Working across India",
    pa: "ਜੜਾਂ ਪੰਜਾਬ ਵਿੱਚ · ਕੰਮ ਪੂਰੇ ਭਾਰਤ ਵਿੱਚ"
  },
  "Our purpose": {
    en: "Our purpose",
    pa: "ਸਾਡਾ ਉਦੇਸ਼"
  },
  "Creating space for people to ask questions, access knowledge and participate in the issues that shape their lives.": {
    en: "Creating space for people to ask questions, access knowledge and participate in the issues that shape their lives.",
    pa: "ਲੋਕਾਂ ਲਈ ਅਜਿਹੀ ਥਾਂ ਬਣਾਉਣਾ ਜਿੱਥੇ ਉਹ ਸਵਾਲ ਪੁੱਛ ਸਕਣ, ਭਰੋਸੇਯੋਗ ਜਾਣਕਾਰੀ ਤੱਕ ਪਹੁੰਚ ਹਾਸਲ ਕਰ ਸਕਣ ਅਤੇ ਆਪਣੀ ਜ਼ਿੰਦਗੀ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲੇ ਮਸਲਿਆਂ ਵਿੱਚ ਭਾਗ ਲੈ ਸਕਣ।"
  },
  "12AB": {
    en: "12AB",
    pa: "12AB"
  },
  "CSR00032253": {
    en: "CSR00032253",
    pa: "CSR00032253"
  },
  "Explore": {
    en: "Explore",
    pa: "ਵੇਖੋ"
  },
  "About us": {
    en: "About us",
    pa: "ਸਾਡੇ ਬਾਰੇ"
  },
  "Participate": {
    en: "Participate",
    pa: "ਜੁੜੋ"
  },
  "Start a conversation": {
    en: "Start a conversation",
    pa: "ਗੱਲਬਾਤ ਸ਼ੁਰੂ ਕਰੋ"
  },
  "Website built by Jaykaran Sagar": {
    en: "Website built by Jaykaran Sagar",
    pa: "ਵੈੱਬਸਾਈਟ ਜੈਕਾਰਨ ਸਾਗਰ ਵੱਲੋਂ ਤਿਆਰ ਕੀਤੀ ਗਈ"
  },
  "Compliance": {
    en: "Compliance",
    pa: "ਕਾਨੂੰਨੀ ਪਾਲਣਾ"
  },
  "20+ years": {
    en: "20+ years",
    pa: "20+ ਸਾਲ"
  },
  "of grassroots experience": {
    en: "of grassroots experience",
    pa: "ਜ਼ਮੀਨੀ ਪੱਧਰ ਦਾ ਤਜਰਬਾ"
  },
  "Communities first": {
    en: "Communities first",
    pa: "ਭਾਈਚਾਰੇ ਪਹਿਲਾਂ"
  },
  "dialogue-led programmes": {
    en: "dialogue-led programmes",
    pa: "ਗੱਲਬਾਤ ਦੀ ਅਗਵਾਈ ਵਾਲੇ ਪ੍ਰੋਗਰਾਮ"
  },
  "National outlook": {
    en: "National outlook",
    pa: "ਰਾਸ਼ਟਰੀ ਨਜ਼ਰੀਆ"
  },
  "roots in Punjab": {
    en: "roots in Punjab",
    pa: "ਪੰਜਾਬ ਵਿੱਚ ਜੜ੍ਹਾਂ"
  },
  "Registered & approved": {
    en: "Registered & approved",
    pa: "ਰਜਿਸਟਰਡ ਅਤੇ ਪ੍ਰਵਾਨਿਤ"
  },
  "12AB · 80G · CSR": {
    en: "12AB · 80G · CSR",
    pa: "12AB · 80G · CSR"
  },
  "Creating change through conversation": {
    en: "Creating change through conversation",
    pa: "ਗੱਲਬਾਤ ਰਾਹੀਂ ਬਦਲਾਅ ਲਿਆਉਣਾ"
  },
  "Support us": {
    en: "Support us",
    pa: "ਸਾਡਾ ਸਮਰਥਨ ਕਰੋ"
  },
  "Aditya Birla Educational Trust": {
    en: "Aditya Birla Educational Trust",
    pa: "ਅਦਿਤਿਆ ਬਿਰਲਾ ਐਜੂਕੇਸ਼ਨਲ ਟਰੱਸਟ"
  },
  "Mental & menstrual health": {
    en: "Mental & menstrual health",
    pa: "ਮਾਨਸਿਕ ਅਤੇ ਮਾਹਵਾਰੀ ਸਿਹਤ"
  },
  "Government of Punjab, India": {
    en: "Government of Punjab, India",
    pa: "ਪੰਜਾਬ ਸਰਕਾਰ, ਭਾਰਤ"
  },
  "Public health initiatives": {
    en: "Public health initiatives",
    pa: "ਜਨਤਕ ਸਿਹਤ ਪਹਿਲਕਦਮੀਆਂ"
  },
  "Ministry of Culture": {
    en: "Ministry of Culture",
    pa: "ਸੱਭਿਆਚਾਰ ਮੰਤਰਾਲਾ"
  },
  "IIM Amritsar": {
    en: "IIM Amritsar",
    pa: "ਆਈ.ਆਈ.ਐਮ. ਅੰਮ੍ਰਿਤਸਰ"
  },
  "Internships & academia": {
    en: "Internships & academia",
    pa: "ਇੰਟਰਨਸ਼ਿਪ ਅਤੇ ਅਕਾਦਮਿਕ"
  },
  "CMS Foundation": {
    en: "CMS Foundation",
    pa: "ਸੀ.ਐਮ.ਐਸ. ਫਾਊਂਡੇਸ਼ਨ"
  },
  "Community programmes": {
    en: "Community programmes",
    pa: "ਸਮੁਦਾਇਕ ਪ੍ਰੋਗਰਾਮ"
  },
  "Techvimal Foundation": {
    en: "Techvimal Foundation",
    pa: "ਟੈਕਵਿਮਲ ਫਾਊਂਡੇਸ਼ਨ"
  },
  "Institutional collaboration": {
    en: "Institutional collaboration",
    pa: "ਸੰਸਥਾਗਤ ਸਹਿਯੋਗ"
  },
  "Ministry of Information & Broadcasting": {
    en: "Ministry of Information & Broadcasting",
    pa: "ਸੂਚਨਾ ਅਤੇ ਪ੍ਰਸਾਰਣ ਮੰਤਰਾਲਾ"
  },
  "Public communication": {
    en: "Public communication",
    pa: "ਜਨਤਕ ਸੰਚਾਰ"
  },
  "Department of Health & Family Welfare, Punjab": {
    en: "Department of Health & Family Welfare, Punjab",
    pa: "ਸਿਹਤ ਅਤੇ ਪਰਿਵਾਰ ਭਲਾਈ ਵਿਭਾਗ, ਪੰਜਾਬ"
  },
  "Public health": {
    en: "Public health",
    pa: "ਜਨਤਕ ਸਿਹਤ"
  },
  "Skills and livelihoods": {
    en: "Skills and livelihoods",
    pa: "ਹੁਨਰ ਅਤੇ ਜੀਵਿਕਾ"
  },
  "Practical vocational training and participant stories from livelihood programmes delivered by Punjabi Samvad with CMS Foundation.": {
    en: "Practical vocational training and participant stories from livelihood programmes delivered by Punjabi Samvad with CMS Foundation.",
    pa: "ਸੀ.ਐਮ.ਐਸ. ਫਾਊਂਡੇਸ਼ਨ ਨਾਲ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੁਆਰਾ ਚਲਾਏ ਗਏ ਆਜੀਵਿਕਾ ਪ੍ਰੋਗਰਾਮਾਂ ਤੋਂ ਵਿਵਹਾਰਕ ਕਿੱਤਾਮੁਖੀ ਸਿਖਲਾਈ ਅਤੇ ਭਾਗੀਦਾਰਾਂ ਦੀਆਂ ਕਹਾਣੀਆਂ।"
  },
  "Practical training": {
    en: "Practical training",
    pa: "ਵਿਵਹਾਰਕ ਸਿਖਲਾਈ"
  },
  "Training includes soap making, traditional masala preparation, spice-quality checks, Phulkari embroidery, street-food preparation and vermicomposting.": {
    en: "Training includes soap making, traditional masala preparation, spice-quality checks, Phulkari embroidery, street-food preparation and vermicomposting.",
    pa: "ਸਿਖਲਾਈ ਵਿੱਚ ਸਾਬਣ ਬਣਾਉਣਾ, ਪਰੰਪਰਾਗਤ ਮਸਾਲੇ ਤਿਆਰ ਕਰਨਾ, ਮਸਾਲਿਆਂ ਦੀ ਗੁਣਵੱਤਾ ਦੀ ਜਾਂਚ, ਫੁਲਕਾਰੀ ਕਢਾਈ, ਸਟ੍ਰੀਟ-ਫੂਡ ਤਿਆਰ ਕਰਨਾ ਅਤੇ ਵਰਮੀਕੰਪੋਸਟਿੰਗ ਸ਼ਾਮਲ ਹਨ।"
  },
  "Stories of change": {
    en: "Stories of change",
    pa: "ਬਦਲਾਅ ਦੀਆਂ ਕਹਾਣੀਆਂ"
  },
  "Consented participant accounts document home-based income, self-employment, recovery support, children returning to school and ambitions for future work.": {
    en: "Consented participant accounts document home-based income, self-employment, recovery support, children returning to school and ambitions for future work.",
    pa: "ਸਹਿਮਤੀ ਪ੍ਰਾਪਤ ਭਾਗੀਦਾਰਾਂ ਦੇ ਵੇਰਵੇ ਘਰੇਲੂ ਆਮਦਨ, ਸਵੈ-ਰੋਜ਼ਗਾਰ, ਸੁਧਾਰ ਸਹਾਇਤਾ, ਬੱਚਿਆਂ ਦੇ ਸਕੂਲ ਵਾਪਸ ਜਾਣ ਅਤੇ ਭਵਿੱਖ ਦੇ ਕੰਮ ਦੀਆਂ ਮਨਸ਼ਾਵਾਂ ਨੂੰ ਦਰਜ ਕਰਦੇ ਹਨ।"
  },
  "President’s field note": {
    en: "President’s field note",
    pa: "ਪ੍ਰਧਾਨ ਦੀ ਮੈਦਾਨੀ ਟਿੱਪਣੀ"
  },
  "Jyoti Bawa explains why Punjabi Samvad extended some workshops from ten days to 20–25 days and continued to guide participants after the sessions.": {
    en: "Jyoti Bawa explains why Punjabi Samvad extended some workshops from ten days to 20–25 days and continued to guide participants after the sessions.",
    pa: "ਜੋਤੀ ਬਾਵਾ ਦੱਸਦੇ ਹਨ ਕਿ ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੇ ਕੁੱਝ ਵਰਕਸ਼ਾਪਾਂ ਨੂੰ ਦਸ ਦਿਨਾਂ ਤੋਂ ਵਧਾ ਕੇ 20-25 ਦਿਨ ਕਿਉਂ ਕੀਤਾ ਅਤੇ ਸੈਸ਼ਨਾਂ ਤੋਂ ਬਾਅਦ ਵੀ ਭਾਗੀਦਾਰਾਂ ਦਾ ਮਾਰਗਦਰਸ਼ਨ ਕਰਨਾ ਜਾਰੀ ਰੱਖਿਆ।"
  },
  "Support vocational learning": {
    en: "Support vocational learning",
    pa: "ਕਿੱਤਾਮੁਖੀ ਸਿੱਖਿਆ ਦਾ ਸਮਰਥਨ ਕਰੋ"
  },
  "Digital learning": {
    en: "Digital learning",
    pa: "ਡਿਜੀਟਲ ਸਿੱਖਿਆ"
  },
  "Free, job-relevant digital learning for young people through UNICEF’s Passport to Earning platform.": {
    en: "Free, job-relevant digital learning for young people through UNICEF’s Passport to Earning platform.",
    pa: "ਯੂਨੀਸੈਫ ਦੇ ਪਾਸਪੋਰਟ ਟੂ ਅਰਨਿੰਗ ਪਲੇਟਫਾਰਮ ਰਾਹੀਂ ਨੌਜਵਾਨਾਂ ਲਈ ਮੁਫ਼ਤ, ਰੋਜ਼ਗਾਰ-ਸੰਬੰਧੀ ਡਿਜੀਟਲ ਸਿੱਖਿਆ।"
  },
  "Financial literacy": {
    en: "Financial literacy",
    pa: "ਵਿੱਤੀ ਸਾਖਰਤਾ"
  },
  "Free, practical financial learning from HDFC Securities and Wagons Skill Foundation.": {
    en: "Free, practical financial learning from HDFC Securities and Wagons Skill Foundation.",
    pa: "ਐਚਡੀਐਫਸੀ ਸਕਿਓਰਿਟੀਜ਼ ਅਤੇ ਵੈਗਨਜ਼ ਸਕਿੱਲ ਫਾਊਂਡੇਸ਼ਨ ਤੋਂ ਮੁਫ਼ਤ, ਵਿਵਹਾਰਕ ਵਿੱਤੀ ਸਿੱਖਿਆ।"
  },
  "Stories & coverage": {
    en: "Stories & coverage",
    pa: "ਕਹਾਣੀਆਂ ਅਤੇ ਮੀਡੀਆ ਕਵਰੇਜ"
  },
  "Photographs from our work and selected features that document Punjabi Samvad’s journey across health, education, culture and community action.": {
    en: "Photographs from our work and selected features that document Punjabi Samvad’s journey across health, education, culture and community action.",
    pa: "ਸਾਡੇ ਕੰਮ ਦੀਆਂ ਤਸਵੀਰਾਂ ਅਤੇ ਚੁਣੀਆਂ ਗਈਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਜੋ ਸਿਹਤ, ਸਿੱਖਿਆ, ਸੱਭਿਆਚਾਰ ਅਤੇ ਭਾਈਚਾਰਕ ਕਾਰਜਾਂ ਵਿੱਚ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਸਫਰ ਨੂੰ ਦਰਜ ਕਰਦੀਆਂ ਹਨ।"
  },
  "People who stand with us": {
    en: "People who stand with us",
    pa: "ਉਹ ਲੋਕ ਜੋ ਸਾਡੇ ਨਾਲ ਖੜ੍ਹੇ ਹਨ"
  },
  "Key Supporters of Punjabi Samvad": {
    en: "Key Supporters of Punjabi Samvad",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਮੁੱਖ ਸਹਿਯੋਗੀ"
  },
  "People who support Punjabi Samvad through donations, expertise, resources, connections and practical help.": {
    en: "People who support Punjabi Samvad through donations, expertise, resources, connections and practical help.",
    pa: "ਉਹ ਲੋਕ ਜੋ ਦਾਨ, ਮਾਹਰਤਾ, ਸਰੋਤਾਂ, ਸੰਪਰਕਾਂ ਅਤੇ ਵਿਵਹਾਰਕ ਮਦਦ ਰਾਹੀਂ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦਾ ਸਮਰਥਨ ਕਰਦੇ ਹਨ।"
  },
  "Co-founder": {
    en: "Co-founder",
    pa: "ਸਹਿ-ਸੰਸਥਾਪਕ"
  },
  "Founding inspiration behind Punjabi Samvad.": {
    en: "Founding inspiration behind Punjabi Samvad.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਪਿੱਛੇ ਦੀ ਸੰਸਥਾਪਕ ਪ੍ਰੇਰਨਾ।"
  },
  "Support the work": {
    en: "Support the work",
    pa: "ਕੰਮ ਦਾ ਸਮਰਥਨ ਕਰੋ"
  },
  "Your contribution helps Punjabi Samvad take education, awareness and community programmes to more people.": {
    en: "Your contribution helps Punjabi Samvad take education, awareness and community programmes to more people.",
    pa: "ਤੁਹਾਡਾ ਯੋਗਦਾਨ ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੂੰ ਹੋਰ ਲੋਕਾਂ ਤੱਕ ਸਿੱਖਿਆ, ਜਾਗਰੂਕਤਾ ਅਤੇ ਭਾਈਚਾਰਕ ਪ੍ਰੋਗਰਾਮ ਪਹੁੰਚਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।"
  },
  "Who we are": {
    en: "Who we are",
    pa: "ਅਸੀਂ ਕੌਣ ਹਾਂ"
  },
  "Punjabi Samvad is a national non-governmental organisation rooted in Punjab. We work with people and institutions to address social issues through education, public awareness, community participation and creative communication.": {
    en: "Punjabi Samvad is a national non-governmental organisation rooted in Punjab. We work with people and institutions to address social issues through education, public awareness, community participation and creative communication.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਪੰਜਾਬ ਵਿੱਚ ਜੜ੍ਹਾਂ ਵਾਲੀ ਇੱਕ ਰਾਸ਼ਟਰੀ ਗੈਰ-ਸਰਕਾਰੀ ਸੰਸਥਾ ਹੈ। ਅਸੀਂ ਸਿੱਖਿਆ, ਜਨਤਕ ਜਾਗਰੂਕਤਾ, ਭਾਈਚਾਰਕ ਭਾਗੀਦਾਰੀ ਅਤੇ ਰਚਨਾਤਮਕ ਸੰਚਾਰ ਰਾਹੀਂ ਸਮਾਜਿਕ ਮੁੱਦਿਆਂ ਨੂੰ ਹੱਲ ਕਰਨ ਲਈ ਲੋਕਾਂ ਅਤੇ ਸੰਸਥਾਵਾਂ ਨਾਲ ਮਿਲ ਕੇ ਕੰਮ ਕਰਦੇ ਹਾਂ।"
  },
  "Our roots": {
    en: "Our roots",
    pa: "ਸਾਡੀਆਂ ਜੜਾਂ"
  },
  "Punjabi Samvad began in 2004, when Amit Bawa and Jyoti Bawa decided to respond to gender discrimination and other social concerns they saw around them. The organisation was formally registered in 2009. What started as a local effort in Punjab has grown into more than two decades of sustained work with women, children, young people, schools, communities and institutions.": {
    en: "Punjabi Samvad began in 2004, when Amit Bawa and Jyoti Bawa decided to respond to gender discrimination and other social concerns they saw around them. The organisation was formally registered in 2009. What started as a local effort in Punjab has grown into more than two decades of sustained work with women, children, young people, schools, communities and institutions.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀ ਸ਼ੁਰੂਆਤ 2004 ਵਿੱਚ ਹੋਈ ਸੀ, ਜਦੋਂ ਅਮਿਤ ਬਾਵਾ ਅਤੇ ਜੋਤੀ ਬਾਵਾ ਨੇ ਆਪਣੇ ਆਲੇ-ਦੁਆਲੇ ਦੇਖੇ ਲਿੰਗ ਵਿਤਕਰੇ ਅਤੇ ਹੋਰ ਸਮਾਜਿਕ ਸਰੋਕਾਰਾਂ ਦਾ ਮੁਕਾਬਲਾ ਕਰਨ ਦਾ ਫ਼ੈਸਲਾ ਕੀਤਾ। ਇਸ ਸੰਸਥਾ ਨੂੰ 2009 ਵਿੱਚ ਰਸਮੀ ਤੌਰ 'ਤੇ ਰਜਿਸਟਰ ਕੀਤਾ ਗਿਆ ਸੀ। ਪੰਜਾਬ ਵਿੱਚ ਇੱਕ ਸਥਾਨਕ ਯਤਨ ਵਜੋਂ ਸ਼ੁਰੂ ਹੋਇਆ ਇਹ ਕੰਮ ਅੱਜ ਔਰਤਾਂ, ਬੱਚਿਆਂ, ਨੌਜਵਾਨਾਂ, ਸਕੂਲਾਂ, ਭਾਈਚਾਰਿਆਂ ਅਤੇ ਸੰਸਥਾਵਾਂ ਨਾਲ ਦੋ ਦਹਾਕਿਆਂ ਤੋਂ ਵੱਧ ਦੇ ਨਿਰੰਤਰ ਕਾਰਜ ਵਿੱਚ ਬਦਲ ਚੁੱਕਾ ਹੈ।"
  },
  "Dialogue is our starting point": {
    en: "Dialogue is our starting point",
    pa: "ਸੰਵਾਦ ਸਾਡਾ ਸ਼ੁਰੂਆਤੀ ਬਿੰਦੂ ਹੈ"
  },
  "Samvad means dialogue. For us, dialogue is not a slogan. It is a practical way to help people speak about subjects that are often ignored, misunderstood or surrounded by stigma. A school session, village meeting, theatre performance or health workshop can all create the same opening: a place to ask honest questions and receive useful information without judgement.": {
    en: "Samvad means dialogue. For us, dialogue is not a slogan. It is a practical way to help people speak about subjects that are often ignored, misunderstood or surrounded by stigma. A school session, village meeting, theatre performance or health workshop can all create the same opening: a place to ask honest questions and receive useful information without judgement.",
    pa: "ਸੰਵਾਦ ਦਾ ਅਰਥ ਹੈ ਗੱਲਬਾਤ। ਸਾਡੇ ਲਈ, ਸੰਵਾਦ ਕੋਈ ਨਾਅਰਾ ਨਹੀਂ ਹੈ। ਇਹ ਲੋਕਾਂ ਨੂੰ ਉਨ੍ਹਾਂ ਵਿਸ਼ਿਆਂ ਬਾਰੇ ਬੋਲਣ ਵਿੱਚ ਮਦਦ ਕਰਨ ਦਾ ਇੱਕ ਅਮਲੀ ਤਰੀਕਾ ਹੈ ਜਿਨ੍ਹਾਂ ਨੂੰ ਅਕਸਰ ਅਣਗੌਲਿਆ ਕੀਤਾ ਜਾਂਦਾ ਹੈ, ਗਲਤ ਸਮਝਿਆ ਜਾਂਦਾ ਹੈ ਜਾਂ ਕਲੰਕ ਨਾਲ ਜੋੜਿਆ ਜਾਂਦਾ ਹੈ। ਸਕੂਲ ਦਾ ਸੈਸ਼ਨ, ਪਿੰਡ ਦੀ ਮੀਟਿੰਗ, ਥੀਏਟਰ ਪੇਸ਼ਕਾਰੀ ਜਾਂ ਸਿਹਤ ਵਰਕਸ਼ਾਪ ਸਭ ਇੱਕੋ ਜਿਹਾ ਰਾਹ ਖੋਲ੍ਹ ਸਕਦੇ ਹਨ: ਬਿਨਾਂ ਕਿਸੇ ਪੱਖਪਾਤ ਦੇ ਇਮਾਨਦਾਰਾਨਾ ਸਵਾਲ ਪੁੱਛਣ ਅਤੇ ਲਾਭਦਾਇਕ ਜਾਣਕਾਰੀ ਪ੍ਰਾਪਤ ਕਰਨ ਦੀ ਥਾਂ।"
  },
  "Our programmes cover women and girls, education and youth development, mental health, menstrual health, substance-abuse prevention, HIV/AIDS awareness, vocational learning and Punjabi art and culture. These concerns often overlap, so we design activities around the people and circumstances involved rather than treating every issue in isolation.": {
    en: "Our programmes cover women and girls, education and youth development, mental health, menstrual health, substance-abuse prevention, HIV/AIDS awareness, vocational learning and Punjabi art and culture. These concerns often overlap, so we design activities around the people and circumstances involved rather than treating every issue in isolation.",
    pa: "ਸਾਡੇ ਪ੍ਰੋਗਰਾਮਾਂ ਵਿੱਚ ਔਰਤਾਂ ਅਤੇ ਕੁੜੀਆਂ, ਸਿੱਖਿਆ ਅਤੇ ਯੁਵਾ ਵਿਕਾਸ, ਮਾਨਸਿਕ ਸਿਹਤ, ਮਾਹਵਾਰੀ ਸਿਹਤ, ਨਸ਼ੇ ਦੀ ਰੋਕਥਾਮ, ਐਚ.ਆਈ.ਵੀ./ਏਡਜ਼ ਜਾਗਰੂਕਤਾ, ਕਿੱਤਾਮੁਖੀ ਸਿੱਖਿਆ ਅਤੇ ਪੰਜਾਬੀ ਕਲਾ ਅਤੇ ਸੱਭਿਆਚਾਰ ਸ਼ਾਮਲ ਹਨ। ਇਹ ਮੁੱਦੇ ਅਕਸਰ ਇੱਕ-ਦੂਜੇ ਨਾਲ ਜੁੜੇ ਹੁੰਦੇ ਹਨ, ਇਸ ਲਈ ਅਸੀਂ ਹਰ ਮੁੱਦੇ ਨੂੰ ਵੱਖਰੇ ਤੌਰ 'ਤੇ ਦੇਖਣ ਦੀ ਬਜਾਏ ਸਬੰਧਤ ਲੋਕਾਂ ਅਤੇ ਪ੍ਰਸਥਿਤੀਆਂ ਦੇ ਹਿਸਾਬ ਨਾਲ ਗਤੀਵਿਧੀਆਂ ਤਿਆਰ ਕਰਦੇ ਹਾਂ।"
  },
  "How we work": {
    en: "How we work",
    pa: "ਅਸੀਂ ਕਿਵੇਂ ਕੰਮ ਕਰਦੇ ਹਾਂ"
  },
  "We combine grassroots outreach with workshops, expert-led sessions, theatre, documentary film, literature, internships and institutional partnerships. Each format serves a purpose. Health sessions make reliable information easier to understand. Theatre and film can bring difficult subjects into public conversation. Education, mentoring and vocational learning help turn awareness into practical opportunity.": {
    en: "We combine grassroots outreach with workshops, expert-led sessions, theatre, documentary film, literature, internships and institutional partnerships. Each format serves a purpose. Health sessions make reliable information easier to understand. Theatre and film can bring difficult subjects into public conversation. Education, mentoring and vocational learning help turn awareness into practical opportunity.",
    pa: "ਅਸੀਂ ਜ਼ਮੀਨੀ ਪੱਧਰ ਦੀ ਪਹੁੰਚ ਨੂੰ ਵਰਕਸ਼ਾਪਾਂ, ਮਾਹਰਾਂ ਦੇ ਸੈਸ਼ਨਾਂ, ਥੀਏਟਰ, ਡੌਕੂਮੈਂਟਰੀ ਫ਼ਿਲਮਾਂ, ਸਾਹਿਤ, ਇੰਟਰਨਸ਼ਿਪਾਂ ਅਤੇ ਸੰਸਥਾਗਤ ਭਾਈਵਾਲੀ ਨਾਲ ਜੋੜਦੇ ਹਾਂ। ਹਰੇਕ ਤਰੀਕੇ ਦਾ ਇੱਕ ਮਨੋਰਥ ਹੁੰਦਾ ਹੈ। ਸਿਹਤ ਸੈਸ਼ਨ ਭਰੋਸੇਯੋਗ ਜਾਣਕਾਰੀ ਨੂੰ ਸਮਝਣਾ ਆਸਾਨ ਬਣਾਉਂਦੇ ਹਨ। ਥੀਏਟਰ ਅਤੇ ਫ਼ਿਲਮ ਔਖੇ ਵਿਸ਼ਿਆਂ ਨੂੰ ਜਨਤਕ ਗੱਲਬਾਤ ਦਾ ਹਿੱਸਾ ਬਣਾ ਸਕਦੇ ਹਨ। ਸਿੱਖਿਆ, ਮਾਰਗਦਰਸ਼ਨ ਅਤੇ ਕਿੱਤਾਮੁਖੀ ਸਿੱਖਿਆ ਜਾਗਰੂਕਤਾ ਨੂੰ ਅਮਲੀ ਅਵਸਰਾਂ ਵਿੱਚ ਬਦਲਣ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਨ।"
  },
  "Listen before designing an activity": {
    en: "Listen before designing an activity",
    pa: "ਕੋਈ ਗਤੀਵਿਧੀ ਤਿਆਰ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਸੁਣੋ"
  },
  "Work with credible subject experts and partners": {
    en: "Work with credible subject experts and partners",
    pa: "ਭਰੋਸੇਯੋਗ ਵਿਸ਼ਾ-ਮਾਹਰਾਂ ਅਤੇ ਭਾਈਵਾਲਾਂ ਨਾਲ ਕੰਮ ਕਰੋ"
  },
  "Use language and formats suited to the audience": {
    en: "Use language and formats suited to the audience",
    pa: "ਸਰੋਤਿਆਂ ਦੇ ਅਨੁਕੂਲ ਭਾਸ਼ਾ ਅਤੇ ਰੂਪਾਂ ਦੀ ਵਰਤੋਂ ਕਰੋ"
  },
  "Track delivery, reach and participant response": {
    en: "Track delivery, reach and participant response",
    pa: "ਕਾਰਜ-ਪ੍ਰਣਾਲੀ, ਪਹੁੰਚ ਅਤੇ ਭਾਗੀਦਾਰਾਂ ਦੀ ਪ੍ਰਤੀਕਿਰਿਆ 'ਤੇ ਨਜ਼ਰ ਰੱਖੋ"
  },
  "Improve programmes through experience and feedback": {
    en: "Improve programmes through experience and feedback",
    pa: "ਤਜਰਬੇ ਅਤੇ ਫੀਡਬੈਕ ਰਾਹੀਂ ਪ੍ਰੋਗਰਾਮਾਂ ਵਿੱਚ ਸੁਧਾਰ ਕਰੋ"
  },
  "From awareness to sustained action": {
    en: "From awareness to sustained action",
    pa: "ਜਾਗਰੂਕਤਾ ਤੋਂ ਨਿਰੰਤਰ ਕਾਰਜ ਵੱਲ"
  },
  "Awareness matters when it helps people recognise a problem, find trustworthy support or make a better-informed decision. Punjabi Samvad therefore works beyond one-time messaging wherever programme scope allows. We return to schools and communities, build relationships with local institutions and connect communication with learning, skills or access to expertise.": {
    en: "Awareness matters when it helps people recognise a problem, find trustworthy support or make a better-informed decision. Punjabi Samvad therefore works beyond one-time messaging wherever programme scope allows. We return to schools and communities, build relationships with local institutions and connect communication with learning, skills or access to expertise.",
    pa: "ਜਾਗਰੂਕਤਾ ਉਦੋਂ ਮਾਇਨੇ ਰੱਖਦੀ ਹੈ ਜਦੋਂ ਇਹ ਲੋਕਾਂ ਨੂੰ ਕਿਸੇ ਸਮੱਸਿਆ ਨੂੰ ਪਛਾਣਨ, ਭਰੋਸੇਯੋਗ ਮਦਦ ਲੱਭਣ ਜਾਂ ਬਿਹਤਰ ਜਾਣਕਾਰੀ ਵਾਲਾ ਫ਼ੈਸਲਾ ਲੈਣ ਵਿੱਚ ਮਦਦ ਕਰਦੀ ਹੈ। ਇਸ ਲਈ, ਪੰਜਾਬੀ ਸੰਵਾਦ ਪ੍ਰੋਗਰਾਮ ਦੇ ਘੇਰੇ ਦੇ ਅਨੁਸਾਰ ਇੱਕ ਵਾਰ ਦੇ ਸੰਦੇਸ਼ਾਂ ਤੋਂ ਅੱਗੇ ਵਧ ਕੇ ਕੰਮ ਕਰਦਾ ਹੈ। ਅਸੀਂ ਸਕੂਲਾਂ ਅਤੇ ਭਾਈਚਾਰਿਆਂ ਵਿੱਚ ਵਾਪਸ ਜਾਂਦੇ ਹਾਂ, ਸਥਾਨਕ ਸੰਸਥਾਵਾਂ ਨਾਲ ਸਬੰਧ ਬਣਾਉਂਦੇ ਹਾਂ ਅਤੇ ਸੰਚਾਰ ਨੂੰ ਸਿੱਖਣ, ਹੁਨਰਾਂ ਜਾਂ ਮਾਹਰਾਂ ਤੱਕ ਪਹੁੰਚ ਨਾਲ ਜੋੜਦੇ ਹਾਂ।"
  },
  "Theatre, writing and film have been part of Punjabi Samvad from its early years. Khooh Bolda Hai brought female foeticide and discrimination against girls to more than 1,100,000 people. Tirhayi Umar used documentary storytelling to confront the human consequences of substance abuse. Creative work helps people engage with social realities that statistics alone cannot explain.": {
    en: "Theatre, writing and film have been part of Punjabi Samvad from its early years. Khooh Bolda Hai brought female foeticide and discrimination against girls to more than 1,100,000 people. Tirhayi Umar used documentary storytelling to confront the human consequences of substance abuse. Creative work helps people engage with social realities that statistics alone cannot explain.",
    pa: "ਥੀਏਟਰ, ਲੇਖਣੀ ਅਤੇ ਫ਼ਿਲਮ ਆਪਣੇ ਸ਼ੁਰੂਆਤੀ ਸਾਲਾਂ ਤੋਂ ਹੀ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦਾ ਹਿੱਸਾ ਰਹੇ ਹਨ। 'ਖੂਹ ਬੋਲਦਾ ਹੈ' ਨੇ 11,00,000 ਤੋਂ ਵੱਧ ਲੋਕਾਂ ਤੱਕ ਧੀਆਂ ਦੀ ਭ੍ਰੂਣ ਹੱਤਿਆ ਅਤੇ ਕੁੜੀਆਂ ਨਾਲ ਹੁੰਦੇ ਵਿਤਕਰੇ ਦੇ ਮੁੱਦੇ ਨੂੰ ਪਹੁੰਚਾਇਆ। 'ਤਿਰਹਾਈ ਉਮਰ' ਨੇ ਨਸ਼ਿਆਂ ਦੇ ਮਨੁੱਖੀ ਸਿੱਟਿਆਂ ਦਾ ਸਾਹਮਣਾ ਕਰਨ ਲਈ ਡੌਕੂਮੈਂਟਰੀ ਕਹਾਣੀ-ਕਲਾ ਦੀ ਵਰਤੋਂ ਕੀਤੀ। ਰਚਨਾਤਮਕ ਕੰਮ ਲੋਕਾਂ ਨੂੰ ਉਨ੍ਹਾਂ ਸਮਾਜਿਕ ਹਕੀਕਤਾਂ ਨਾਲ ਜੋੜਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ ਜਿਨ੍ਹਾਂ ਨੂੰ ਸਿਰਫ਼ ਅੰਕੜੇ ਬਿਆਨ ਨਹੀਂ ਕਰ ਸਕਦੇ।"
  },
  "Partnership and reach": {
    en: "Partnership and reach",
    pa: "ਭਾਈਵਾਲੀ ਅਤੇ ਪਹੁੰਚ"
  },
  "Punjabi Samvad works with government bodies, schools, universities, healthcare professionals, charitable institutions and corporate foundations. Collaborations have included the Government of Punjab, the Aditya Birla Educational Trust, IIM Amritsar and the Ministry of Culture. These relationships bring together community access, technical knowledge and the resources needed to serve more people.": {
    en: "Punjabi Samvad works with government bodies, schools, universities, healthcare professionals, charitable institutions and corporate foundations. Collaborations have included the Government of Punjab, the Aditya Birla Educational Trust, IIM Amritsar and the Ministry of Culture. These relationships bring together community access, technical knowledge and the resources needed to serve more people.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਸਰਕਾਰੀ ਅਦਾਰਿਆਂ, ਸਕੂਲਾਂ, ਯੂਨੀਵਰਸਿਟੀਆਂ, ਸਿਹਤ ਸੰਭਾਲ ਪੇਸ਼ੇਵਰਾਂ, ਚੈਰੀਟੇਬਲ ਸੰਸਥਾਵਾਂ ਅਤੇ ਕਾਰਪੋਰੇਟ ਫਾਊਂਡੇਸ਼ਨਾਂ ਨਾਲ ਮਿਲ ਕੇ ਕੰਮ ਕਰਦਾ ਹੈ। ਭਾਈਵਾਲੀਆਂ ਵਿੱਚ ਪੰਜਾਬ ਸਰਕਾਰ, ਅਦਿਤਿਆ ਬਿਰਲਾ ਐਜੂਕੇਸ਼ਨਲ ਟਰੱਸਟ, ਆਈ.ਆਈ.ਐਮ. ਅੰਮ੍ਰਿਤਸਰ ਅਤੇ ਸੱਭਿਆਚਾਰ ਮੰਤਰਾਲਾ ਸ਼ਾਮਲ ਰਹੇ ਹਨ। ਇਹ ਸਬੰਧ ਭਾਈਚਾਰਕ ਪਹੁੰਚ, ਤਕਨੀਕੀ ਗਿਆਨ ਅਤੇ ਹੋਰ ਲੋਕਾਂ ਦੀ ਸੇਵਾ ਕਰਨ ਲਈ ਲੋੜੀਂਦੇ ਸਰੋਤਾਂ ਨੂੰ ਇਕੱਠਾ ਕਰਦੇ ਹਨ।"
  },
  "Our vision": {
    en: "Our vision",
    pa: "ਸਾਡਾ ਵਿਜ਼ਨ"
  },
  "We want to see an inclusive and progressive India where people, especially women and children, can live with dignity, opportunity and freedom from discrimination and exploitation. Our role is to help communities take part in that change through knowledge, conversation and practical support.": {
    en: "We want to see an inclusive and progressive India where people, especially women and children, can live with dignity, opportunity and freedom from discrimination and exploitation. Our role is to help communities take part in that change through knowledge, conversation and practical support.",
    pa: "ਅਸੀਂ ਇੱਕ ਅਜਿਹਾ ਸਮਾਵੇਸ਼ੀ ਅਤੇ ਪ੍ਰਗਤੀਸ਼ੀਲ ਭਾਰਤ ਦੇਖਣਾ ਚਾਹੁੰਦੇ ਹਾਂ ਜਿੱਥੇ ਲੋਕ, ਵਿਸ਼ੇਸ਼ ਤੌਰ 'ਤੇ ਔਰਤਾਂ ਅਤੇ ਬੱਚੇ, ਸਤਿਕਾਰ, ਮੌਕਿਆਂ ਅਤੇ ਵਿਤਕਰੇ ਤੇ ਸ਼ੋਸ਼ਣ ਮੁਕਤ ਆਜ਼ਾਦੀ ਨਾਲ ਜੀ ਸਕਣ। ਸਾਡੀ ਭੂਮਿਕਾ ਗਿਆਨ, ਗੱਲਬਾਤ ਅਤੇ ਅਮਲੀ ਸਹਿਯੋਗ ਰਾਹੀਂ ਭਾਈਚਾਰਿਆਂ ਨੂੰ ਉਸ ਬਦਲਾਅ ਦਾ ਹਿੱਸਾ ਬਣਨ ਵਿੱਚ ਮਦਦ ਕਰਨਾ ਹੈ।"
  },
  "Our mission": {
    en: "Our mission",
    pa: "ਸਾਡਾ ਮਿਸ਼ਨ"
  },
  "We work with communities through education, awareness, skill development and creative communication. We address urgent social and public-health concerns while protecting the language, art and cultural heritage that help people understand who they are.": {
    en: "We work with communities through education, awareness, skill development and creative communication. We address urgent social and public-health concerns while protecting the language, art and cultural heritage that help people understand who they are.",
    pa: "ਅਸੀਂ ਸਿੱਖਿਆ, ਜਾਗਰੂਕਤਾ, ਹੁਨਰ ਵਿਕਾਸ ਅਤੇ ਰਚਨਾਤਮਕ ਸੰਚਾਰ ਰਾਹੀਂ ਭਾਈਚਾਰਿਆਂ ਨਾਲ ਕੰਮ ਕਰਦੇ ਹਾਂ। ਅਸੀਂ ਭਾਸ਼ਾ, ਕਲਾ ਅਤੇ ਸੱਭਿਆਚਾਰਕ ਵਿਰਾਸਤ ਦੀ ਰੱਖਿਆ ਕਰਦੇ ਹੋਏ ਤੁਰੰਤ ਸਮਾਜਿਕ ਅਤੇ ਜਨ-ਸਿਹਤ ਚਿੰਤਾਵਾਂ ਦਾ ਹੱਲ ਕਰਦੇ ਹਾਂ ਜੋ ਲੋਕਾਂ ਨੂੰ ਇਹ ਸਮਝਣ ਵਿੱਚ ਮਦਦ ਕਰਦੀਆਂ ਹਨ ਕਿ ਉਹ ਕੌਣ ਹਨ।"
  },
  "The principles behind our work": {
    en: "The principles behind our work",
    pa: "ਸਾਡੇ ਕੰਮ ਦੇ ਮੂਲ ਸਿਧਾਂਤ"
  },
  "These commitments guide how we plan programmes, choose partners and treat the people who take part.": {
    en: "These commitments guide how we plan programmes, choose partners and treat the people who take part.",
    pa: "ਇਹ ਵਚਨਬੱਧਤਾਵਾਂ ਸਾਡਾ ਮਾਰਗਦਰਸ਼ਨ ਕਰਦੀਆਂ ਹਨ ਕਿ ਅਸੀਂ ਪ੍ਰੋਗਰਾਮਾਂ ਦੀ ਯੋਜਨਾ ਕਿਵੇਂ ਬਣਾਉਂਦੇ ਹਾਂ, ਭਾਈਵਾਲਾਂ ਦੀ ਚੋਣ ਕਿਵੇਂ ਕਰਦੇ ਹਾਂ ਅਤੇ ਭਾਗ ਲੈਣ ਵਾਲੇ ਲੋਕਾਂ ਨਾਲ ਕਿਵੇਂ ਵਿਵਹਾਰ ਕਰਦੇ ਹਾਂ।"
  },
  "Dignity and empathy": {
    en: "Dignity and empathy",
    pa: "ਮਰਿਆਦਾ ਅਤੇ ਸਹਾਨੁਭੂਤੀ"
  },
  "Equality and inclusion": {
    en: "Equality and inclusion",
    pa: "ਸਮਾਨਤਾ ਅਤੇ ਸਮਾਵੇਸ਼"
  },
  "Integrity and accountability": {
    en: "Integrity and accountability",
    pa: "ਇਮਾਨਦਾਰੀ ਅਤੇ ਜਵਾਬਦੇਹੀ"
  },
  "Participation and informed choice": {
    en: "Participation and informed choice",
    pa: "ਭਾਗੀਦਾਰੀ ਅਤੇ ਜਾਣਕਾਰੀ-ਅਧਾਰਿਤ ਚੋਣ"
  },
  "Creativity with purpose": {
    en: "Creativity with purpose",
    pa: "ਉਦੇਸ਼ਪੂਰਨ ਰਚਨਾਤਮਕਤਾ"
  },
  "Respect for culture and community knowledge": {
    en: "Respect for culture and community knowledge",
    pa: "ਸੱਭਿਆਚਾਰ ਅਤੇ ਭਾਈਚਾਰਕ ਗਿਆਨ ਦਾ ਸਤਿਕਾਰ"
  },
  "Collaboration that adds real value": {
    en: "Collaboration that adds real value",
    pa: "ਸਹਿਯੋਗ ਜੋ ਅਸਲ ਮੁੱਲ ਜੋੜਦਾ ਹੈ"
  },
  "Punjabi Samvad today": {
    en: "Punjabi Samvad today",
    pa: "ਅੱਜ ਦਾ ਪੰਜਾਬੀ ਸੰਵਾਦ"
  },
  "Headquartered in Amritsar, Punjabi Samvad remains grounded in the communities where its work began while developing partnerships with a wider national outlook. President Jyoti Bawa leads the organisation and continues the work she began with Amit Bawa. The aim remains clear: address neglected issues with honesty, create space for participation and build programmes that people can use.": {
    en: "Headquartered in Amritsar, Punjabi Samvad remains grounded in the communities where its work began while developing partnerships with a wider national outlook. President Jyoti Bawa leads the organisation and continues the work she began with Amit Bawa. The aim remains clear: address neglected issues with honesty, create space for participation and build programmes that people can use.",
    pa: "ਅੰਮ੍ਰਿਤਸਰ ਵਿੱਚ ਮੁੱਖ ਦਫ਼ਤਰ ਹੋਣ ਦੇ ਨਾਲ, ਪੰਜਾਬੀ ਸੰਵਾਦ ਉਨ੍ਹਾਂ ਭਾਈਚਾਰਿਆਂ ਨਾਲ ਜੁੜਿਆ ਹੋਇਆ ਹੈ ਜਿੱਥੇ ਇਸਦਾ ਕੰਮ ਸ਼ੁਰੂ ਹੋਇਆ ਸੀ, ਜਦੋਂ ਕਿ ਇਹ ਇੱਕ ਵਿਆਪਕ ਰਾਸ਼ਟਰੀ ਦ੍ਰਿਸ਼ਟੀਕੋਣ ਨਾਲ ਭਾਈਵਾਲੀ ਵਿਕਸਿਤ ਕਰ ਰਿਹਾ ਹੈ। ਪ੍ਰਧਾਨ ਜੋਤੀ ਬਾਵਾ ਸੰਸਥਾ ਦੀ ਅਗਵਾਈ ਕਰਦੇ ਹਨ ਅਤੇ ਅਮਿਤ ਬਾਵਾ ਨਾਲ ਸ਼ੁਰੂ ਕੀਤੇ ਕੰਮ ਨੂੰ ਅੱਗੇ ਵਧਾ ਰਹੇ ਹਨ। ਉਦੇਸ਼ ਸਪੱਸ਼ਟ ਹੈ: ਅਣਗੌਲੇ ਮੁੱਦਿਆਂ ਨੂੰ ਇਮਾਨਦਾਰੀ ਨਾਲ ਹੱਲ ਕਰਨਾ, ਭਾਗੀਦਾਰੀ ਲਈ ਜਗ੍ਹਾ ਬਣਾਉਣਾ ਅਤੇ ਅਜਿਹੇ ਪ੍ਰੋਗਰਾਮਾਂ ਦਾ ਨਿਰਮਾਣ ਕਰਨਾ ਜਿਨ੍ਹਾਂ ਦੀ ਵਰਤੋਂ ਲੋਕ ਕਰ ਸਕਣ।"
  },
  "Read our full story": {
    en: "Read our full story",
    pa: "ਸਾਡੀ ਪੂਰੀ ਕਹਾਣੀ ਪੜ੍ਹੋ"
  },
  "Since 2004": {
    en: "Since 2004",
    pa: "2004 ਤੋਂ"
  },
  "Punjabi Samvad began when Amit Bawa and Jyoti Bawa chose to act on gender-based violence and discrimination.": {
    en: "Punjabi Samvad began when Amit Bawa and Jyoti Bawa chose to act on gender-based violence and discrimination.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀ ਸ਼ੁਰੂਆਤ ਤਦ ਹੋਈ ਜਦੋਂ ਅਮਿਤ ਬਾਵਾ ਅਤੇ ਜੋਤੀ ਬਾਵਾ ਨੇ ਲਿੰਗ-ਆਧਾਰਿਤ ਹਿੰਸਾ ਅਤੇ ਵਿਤਕਰੇ ਵਿਰੁੱਧ ਕਦਮ ਚੁੱਕਣ ਦਾ ਫੈਸਲਾ ਕੀਤਾ।"
  },
  "A platform for difficult conversations": {
    en: "A platform for difficult conversations",
    pa: "ਚੁਣੌਤੀਪੂਰਨ ਗੱਲਬਾਤ ਲਈ ਇੱਕ ਮੰਚ"
  },
  "One of the earliest initiatives was Khooh Bolda Hai, a theatre production written and directed by Jyoti Bawa. Addressing female foeticide and gender discrimination, it established creative advocacy at the heart of the organisation.": {
    en: "One of the earliest initiatives was Khooh Bolda Hai, a theatre production written and directed by Jyoti Bawa. Addressing female foeticide and gender discrimination, it established creative advocacy at the heart of the organisation.",
    pa: "ਸਭ ਤੋਂ ਪਹਿਲੀਆਂ ਪਹਿਲਕਦਮੀਆਂ ਵਿੱਚੋਂ ਇੱਕ 'ਖੂਹ ਬੋਲਦਾ ਹੈ' ਸੀ, ਜੋ ਕਿ ਜੋਤੀ ਬਾਵਾ ਦੁਆਰਾ ਲਿਖਿਆ ਅਤੇ ਨਿਰਦੇਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਇੱਕ ਨਾਟਕ ਸੀ। ਭਰੂਣ ਹੱਤਿਆ ਅਤੇ ਲਿੰਗ ਵਿਤਕਰੇ ਦੇ ਮੁੱਦੇ ਨੂੰ ਉਠਾਉਂਦੇ ਹੋਏ, ਇਸਨੇ ਸੰਸਥਾ ਦੇ ਕੇਂਦਰ ਵਿੱਚ ਰਚਨਾਤਮਕ ਵਕਾਲਤ ਸਥਾਪਿਤ ਕੀਤੀ।"
  },
  "The work expanded": {
    en: "The work expanded",
    pa: "ਕੰਮ ਦਾ ਦਾਇਰਾ ਵਧਿਆ"
  },
  "Educational and vocational programmes created opportunities for women, girls and young people. Health work addressed HIV/AIDS and menstrual health; mental-health sessions entered schools and communities; anti-drug programmes combined lectures, outreach and film.": {
    en: "Educational and vocational programmes created opportunities for women, girls and young people. Health work addressed HIV/AIDS and menstrual health; mental-health sessions entered schools and communities; anti-drug programmes combined lectures, outreach and film.",
    pa: "ਸਿੱਖਿਅਕ ਅਤੇ ਕਿੱਤਾਮੁਖੀ ਪ੍ਰੋਗਰਾਮਾਂ ਨੇ ਔਰਤਾਂ, ਲੜਕੀਆਂ ਅਤੇ ਨੌਜਵਾਨਾਂ ਲਈ ਅਵਸਰ ਪੈਦਾ ਕੀਤੇ। ਸਿਹਤ ਸੰਬੰਧੀ ਕੰਮਾਂ ਵਿੱਚ ਐਚ.ਆਈ.ਵੀ./ਏਡਜ਼ ਅਤੇ ਮਾਹਵਾਰੀ ਸਿਹਤ ਨੂੰ ਸ਼ਾਮਲ ਕੀਤਾ ਗਿਆ; ਮਾਨਸਿਕ ਸਿਹਤ ਸੈਸ਼ਨਾਂ ਨੇ ਸਕੂਲਾਂ ਅਤੇ ਭਾਈਚਾਰਿਆਂ ਵਿੱਚ ਪ੍ਰਵੇਸ਼ ਕੀਤਾ; ਨਸ਼ਾ ਵਿਰੋਧੀ ਪ੍ਰੋਗਰਾਮਾਂ ਵਿੱਚ ਲੈਕਚਰ, ਆਊਟਰੀਚ ਅਤੇ ਫਿਲਮਾਂ ਨੂੰ ਸ਼ਾਮਲ ਕੀਤਾ ਗਿਆ।"
  },
  "Continuing the work": {
    en: "Continuing the work",
    pa: "ਕੰਮ ਨੂੰ ਅੱਗੇ ਲੈ ਕੇ ਜਾਣਾ"
  },
  "After Amit Bawa’s passing in 2014, Jyoti Bawa continued the work they began together and now serves as President.": {
    en: "After Amit Bawa’s passing in 2014, Jyoti Bawa continued the work they began together and now serves as President.",
    pa: "2014 ਵਿੱਚ ਅਮਿਤ ਬਾਵਾ ਦੇ ਅਕਾਲ ਚਲਾਣੇ ਤੋਂ ਬਾਅਦ, ਜੋਤੀ ਬਾਵਾ ਨੇ ਇਕੱਠੇ ਸ਼ੁਰੂ ਕੀਤੇ ਕੰਮ ਨੂੰ ਜਾਰੀ ਰੱਖਿਆ ਅਤੇ ਹੁਣ ਪ੍ਰਧਾਨ ਵਜੋਂ ਸੇਵਾ ਨਿਭਾ ਰਹੇ ਹਨ।"
  },
  "Our journey": {
    en: "Our journey",
    pa: "ਸਾਡਾ ਸਫ਼ਰ"
  },
  "From grassroots theatre to programmes at greater scale and a wider national focus.": {
    en: "From grassroots theatre to programmes at greater scale and a wider national focus.",
    pa: "ਜ਼ਮੀਨੀ ਪੱਧਰ ਦੇ ਨਾਟਕਾਂ ਤੋਂ ਲੈ ਕੇ ਵੱਡੇ ਪੱਧਰ ਦੇ ਪ੍ਰੋਗਰਾਮਾਂ ਅਤੇ ਵਿਆਪਕ ਰਾਸ਼ਟਰੀ ਧਿਆਨ ਤੱਕ।"
  },
  "2004 — Punjabi Samvad begins": {
    en: "2004 — Punjabi Samvad begins",
    pa: "2004 — ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀ ਸ਼ੁਰੂਆਤ"
  },
  "2009 — Formal registration": {
    en: "2009 — Formal registration",
    pa: "2009 — ਰਸਮੀ ਰਜਿਸਟ੍ਰੇਸ਼ਨ"
  },
  "2017 — Tirhayi Umar documentary and World Punjabi Conference": {
    en: "2017 — Tirhayi Umar documentary and World Punjabi Conference",
    pa: "2017 — 'ਤ੍ਰਿਹਾਈ ਉਮਰ' ਡਾਕੂਮੈਂਟਰੀ ਅਤੇ ਵਿਸ਼ਵ ਪੰਜਾਬੀ ਕਾਨਫਰੰਸ"
  },
  "Recent years — 100,000+ reached through mental-health programmes": {
    en: "Recent years — 100,000+ reached through mental-health programmes",
    pa: "ਹਾਲੀਆ ਸਾਲ — ਮਾਨਸਿਕ-ਸਿਹਤ ਪ੍ਰੋਗਰਾਮਾਂ ਰਾਹੀਂ 100,000+ ਲੋਕਾਂ ਤੱਕ ਪਹੁੰਚ"
  },
  "Today — Partnerships for a wider national reach": {
    en: "Today — Partnerships for a wider national reach",
    pa: "ਅੱਜ — ਵਿਆਪਕ ਰਾਸ਼ਟਰੀ ਪਹੁੰਚ ਲਈ ਭਾਈਵਾਲੀਆਂ"
  },
  "Focus areas": {
    en: "Focus areas",
    pa: "ਮੁੱਖ ਖੇਤਰ"
  },
  "What We Work On": {
    en: "What We Work On",
    pa: "ਅਸੀਂ ਕਿਹੜੇ ਮਸਲਿਆਂ 'ਤੇ ਕੰਮ ਕਰਦੇ ਹਾਂ"
  },
  "Our focus areas are connected by one principle: people need clear information, practical opportunity and a safe place to speak. We work in schools, communities and institutions, adapting each programme to the people, issue and setting.": {
    en: "Our focus areas are connected by one principle: people need clear information, practical opportunity and a safe place to speak. We work in schools, communities and institutions, adapting each programme to the people, issue and setting.",
    pa: "ਸਾਡੇ ਮੁੱਖ ਖੇਤਰ ਇੱਕ ਹੀ ਸਿਧਾਂਤ ਨਾਲ ਜੁੜੇ ਹੋਏ ਹਨ: ਲੋਕਾਂ ਨੂੰ ਸਪੱਸ਼ਟ ਜਾਣਕਾਰੀ, ਅਮਲੀ ਅਵਸਰ ਅਤੇ ਬੋਲਣ ਲਈ ਇੱਕ ਸੁਰੱਖਿਅਤ ਜਗ੍ਹਾ ਦੀ ਲੋੜ ਹੈ। ਅਸੀਂ ਸਕੂਲਾਂ, ਭਾਈਚਾਰਿਆਂ ਅਤੇ ਸੰਸਥਾਵਾਂ ਵਿੱਚ ਕੰਮ ਕਰਦੇ ਹਾਂ, ਅਤੇ ਹਰੇਕ ਪ੍ਰੋਗਰਾਮ ਨੂੰ ਲੋਕਾਂ, ਮੁੱਦੇ ਅਤੇ ਸਥਿਤੀ ਦੇ ਅਨੁਕੂਲ ਢਾਲਦੇ ਹਾਂ।"
  },
  "We support women and girls through education, skills, health awareness and public discussion about discrimination. The work addresses immediate barriers while building the knowledge and confidence needed to participate in family, community and economic life.": {
    en: "We support women and girls through education, skills, health awareness and public discussion about discrimination. The work addresses immediate barriers while building the knowledge and confidence needed to participate in family, community and economic life.",
    pa: "ਅਸੀਂ ਸਿੱਖਿਆ, ਹੁਨਰ, ਸਿਹਤ ਜਾਗਰੂਕਤਾ ਅਤੇ ਵਿਤਕਰੇ ਬਾਰੇ ਜਨਤਕ ਚਰਚਾ ਰਾਹੀਂ ਔਰਤਾਂ ਅਤੇ ਕੁੜੀਆਂ ਦਾ ਸਮਰਥਨ ਕਰਦੇ ਹਾਂ। ਇਹ ਕਾਰਜ ਪਰਿਵਾਰਕ, ਸਮਾਜਿਕ ਅਤੇ ਆਰਥਿਕ ਜੀਵਨ ਵਿੱਚ ਭਾਗ ਲੈਣ ਲਈ ਲੋੜੀਂਦੇ ਗਿਆਨ ਅਤੇ ਆਤਮ-ਵਿਸ਼ਵਾਸ ਦਾ ਨਿਰਮਾਣ ਕਰਦੇ ਹੋਏ ਤੁਰੰਤ ਰੁਕਾਵਟਾਂ ਨੂੰ ਦੂਰ ਕਰਦਾ ਹੈ।"
  },
  "Recent vocational sessions for rural girls and women from families affected by substance abuse covered soap making, traditional masala preparation, spice-quality checks and Phulkari embroidery. Other activities include scholarship support, menstrual-health education and creative campaigns on gender equality and the dignity of girls.": {
    en: "Recent vocational sessions for rural girls and women from families affected by substance abuse covered soap making, traditional masala preparation, spice-quality checks and Phulkari embroidery. Other activities include scholarship support, menstrual-health education and creative campaigns on gender equality and the dignity of girls.",
    pa: "ਨਸ਼ੇ ਦੀ ਸਮੱਸਿਆ ਤੋਂ ਪ੍ਰਭਾਵਿਤ ਪਰਿਵਾਰਾਂ ਦੀਆਂ ਦਿਹਾਤੀ ਕੁੜੀਆਂ ਅਤੇ ਔਰਤਾਂ ਲਈ ਹਾਲ ਹੀ ਵਿੱਚ ਆਯੋਜਿਤ ਕੀਤੇ ਗਏ ਕਿੱਤਾਮੁਖੀ ਸੈਸ਼ਨਾਂ ਵਿੱਚ ਸਾਬਣ ਬਣਾਉਣਾ, ਰਵਾਇਤੀ ਮਸਾਲੇ ਤਿਆਰ ਕਰਨਾ, ਮਸਾਲਿਆਂ ਦੀ ਗੁਣਵੱਤਾ ਦੀ ਜਾਂਚ ਅਤੇ ਫੁਲਕਾਰੀ ਕਢਾਈ ਸ਼ਾਮਲ ਸੀ। ਹੋਰ ਗਤੀਵਿਧੀਆਂ ਵਿੱਚ ਵਜ਼ੀਫ਼ਾ ਸਹਾਇਤਾ, ਮਾਹਵਾਰੀ-ਸਿਹਤ ਸਿੱਖਿਆ ਅਤੇ ਲਿੰਗ ਸਮਾਨਤਾ ਅਤੇ ਕੁੜੀਆਂ ਦੇ ਸਨਮਾਨ 'ਤੇ ਰਚਨਾਤਮਕ ਮੁਹਿੰਮਾਂ ਸ਼ਾਮਲ ਹਨ।"
  },
  "Educational and scholarship support": {
    en: "Educational and scholarship support",
    pa: "ਸਿੱਖਿਆ ਅਤੇ ਸਕਾਲਰਸ਼ਿਪ ਸਹਾਇਤਾ"
  },
  "Vocational learning and practical skills": {
    en: "Vocational learning and practical skills",
    pa: "ਰੋਜ਼ਗਾਰਮੁਖੀ ਸਿੱਖਿਆ ਅਤੇ ਵਰਤੋਂਯੋਗ ਹੁਨਰ"
  },
  "Menstrual-health information": {
    en: "Menstrual-health information",
    pa: "ਮਹਾਵਾਰੀ ਸਿਹਤ ਸੰਬੰਧੀ ਜਾਣਕਾਰੀ"
  },
  "Gender equality and female-foeticide awareness": {
    en: "Gender equality and female-foeticide awareness",
    pa: "ਲਿੰਗ ਸਮਾਨਤਾ ਅਤੇ ਕਨਿਆ ਭ੍ਰੂਣ ਹੱਤਿਆ ਬਾਰੇ ਜਾਗਰੂਕਤਾ"
  },
  "Young people need more than classroom instruction. They need guidance, exposure and opportunities to apply what they learn. Punjabi Samvad works with students through mentoring, internships, awareness sessions, cultural participation and practical learning.": {
    en: "Young people need more than classroom instruction. They need guidance, exposure and opportunities to apply what they learn. Punjabi Samvad works with students through mentoring, internships, awareness sessions, cultural participation and practical learning.",
    pa: "ਨੌਜਵਾਨਾਂ ਨੂੰ ਜਮਾਤ ਦੀ ਪੜ੍ਹਾਈ ਤੋਂ ਵੱਧ ਦੀ ਲੋੜ ਹੈ। ਉਹਨਾਂ ਨੂੰ ਮਾਰਗਦਰਸ਼ਨ, ਵਿਹਾਰਕ ਅਨੁਭਵ ਅਤੇ ਜੋ ਉਹ ਸਿੱਖਦੇ ਹਨ ਉਸਨੂੰ ਲਾਗੂ ਕਰਨ ਦੇ ਮੌਕਿਆਂ ਦੀ ਲੋੜ ਹੈ। ਪੰਜਾਬੀ ਸੰਵਾਦ ਮਾਰਗਦਰਸ਼ਨ, ਇੰਟਰਨਸ਼ਿਪ, ਜਾਗਰੂਕਤਾ ਸੈਸ਼ਨਾਂ, ਸੱਭਿਆਚਾਰਕ ਭਾਗੀਦਾਰੀ ਅਤੇ ਵਿਹਾਰਕ ਸਿੱਖਿਆ ਰਾਹੀਂ ਵਿਦਿਆਰਥੀਆਂ ਨਾਲ ਕੰਮ ਕਰਦਾ ਹੈ।"
  },
  "Programmes encourage young people to ask questions, understand social concerns and take responsible roles within their schools and communities.": {
    en: "Programmes encourage young people to ask questions, understand social concerns and take responsible roles within their schools and communities.",
    pa: "ਪ੍ਰੋਗਰਾਮ ਨੌਜਵਾਨਾਂ ਨੂੰ ਸਵਾਲ ਪੁੱਛਣ, ਸਮਾਜਿਕ ਚਿੰਤਾਵਾਂ ਨੂੰ ਸਮਝਣ ਅਤੇ ਆਪਣੇ ਸਕੂਲਾਂ ਅਤੇ ਭਾਈਚਾਰਿਆਂ ਵਿੱਚ ਜ਼ਿੰਮੇਵਾਰ ਭੂਮਿਕਾਵਾਂ ਨਿਭਾਉਣ ਲਈ ਉਤਸ਼ਾਹਿਤ ਕਰਦੇ ਹਨ।"
  },
  "Mentoring and learning assistance": {
    en: "Mentoring and learning assistance",
    pa: "ਮਾਰਗਦਰਸ਼ਨ ਅਤੇ ਪੜ੍ਹਾਈ ਵਿੱਚ ਸਹਾਇਤਾ"
  },
  "Internships and field exposure": {
    en: "Internships and field exposure",
    pa: "ਇੰਟਰਨਸ਼ਿਪ ਅਤੇ ਮੈਦਾਨੀ ਤਜਰਬਾ"
  },
  "Vocational and life-skills learning": {
    en: "Vocational and life-skills learning",
    pa: "ਰੋਜ਼ਗਾਰਮੁਖੀ ਅਤੇ ਜੀਵਨ-ਕੌਸ਼ਲ ਸਿੱਖਿਆ"
  },
  "Youth participation in community initiatives": {
    en: "Youth participation in community initiatives",
    pa: "ਸਮੁਦਾਇਕ ਪਹਿਲਾਂ ਵਿੱਚ ਨੌਜਵਾਨਾਂ ਦੀ ਭਾਗੀਦਾਰੀ"
  },
  "Mental-health literacy helps people recognise emotional distress, speak without shame and seek appropriate support. Our school and community sessions introduce clear, age-appropriate information and challenge the idea that emotional difficulty should remain hidden.": {
    en: "Mental-health literacy helps people recognise emotional distress, speak without shame and seek appropriate support. Our school and community sessions introduce clear, age-appropriate information and challenge the idea that emotional difficulty should remain hidden.",
    pa: "ਮਾਨਸਿਕ-ਸਿਹਤ ਸਾਖਰਤਾ ਲੋਕਾਂ ਨੂੰ ਭਾਵਨਾਤਮਕ ਪਰੇਸ਼ਾਨੀ ਦੀ ਪਛਾਣ ਕਰਨ, ਬਿਨਾਂ ਝਿਜਕ ਬੋਲਣ ਅਤੇ ਢੁਕਵੀਂ ਸਹਾਇਤਾ ਲੈਣ ਵਿੱਚ ਮਦਦ ਕਰਦੀ ਹੈ। ਸਾਡੇ ਸਕੂਲ ਅਤੇ ਭਾਈਚਾਰਕ ਸੈਸ਼ਨ ਸਪਸ਼ਟ, ਉਮਰ-ਢੁਕਵੀਂ ਜਾਣਕਾਰੀ ਦਿੰਦੇ ਹਨ ਅਤੇ ਇਸ ਵਿਚਾਰ ਨੂੰ ਚੁਣੌਤੀ ਦਿੰਦੇ ਹਨ ਕਿ ਭਾਵਨਾਤਮਕ ਮੁਸ਼ਕਲਾਂ ਨੂੰ ਛੁਪਾ ਕੇ ਰੱਖਣਾ ਚਾਹੀਦਾ ਹੈ।"
  },
  "Where programmes are delivered with specialist partners, subject expertise is combined with Punjabi Samvad’s experience of community engagement.": {
    en: "Where programmes are delivered with specialist partners, subject expertise is combined with Punjabi Samvad’s experience of community engagement.",
    pa: "ਜਿੱਥੇ ਪ੍ਰੋਗਰਾਮ ਮਾਹਰ ਭਾਈਵਾਲਾਂ ਨਾਲ ਮਿਲ ਕੇ ਚਲਾਏ ਜਾਂਦੇ ਹਨ, ਉੱਥੇ ਵਿਸ਼ੇਸ਼ ਮੁਹਾਰਤ ਨੂੰ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਭਾਈਚਾਰਕ ਜੁੜਾਅ ਦੇ ਤਜਰਬੇ ਨਾਲ ਜੋੜਿਆ ਜਾਂਦਾ ਹੈ।"
  },
  "100,000+ people reached": {
    en: "100,000+ people reached",
    pa: "1 ਲੱਖ ਤੋਂ ਵੱਧ ਲੋਕਾਂ ਤੱਕ ਪਹੁੰਚ"
  },
  "School and community awareness sessions": {
    en: "School and community awareness sessions",
    pa: "ਸਕੂਲ ਅਤੇ ਸਮੁਦਾਇਕ ਜਾਗਰੂਕਤਾ ਸੈਸ਼ਨ"
  },
  "Stigma reduction and open discussion": {
    en: "Stigma reduction and open discussion",
    pa: "ਕਲੰਕ ਅਤੇ ਝਿਜਕ ਘਟਾ ਕੇ ਖੁੱਲ੍ਹੀ ਗੱਲਬਾਤ"
  },
  "Information on recognising distress": {
    en: "Information on recognising distress",
    pa: "ਮਾਨਸਿਕ ਪਰੇਸ਼ਾਨੀ ਨੂੰ ਪਛਾਣਨ ਬਾਰੇ ਜਾਣਕਾਰੀ"
  },
  "Guidance towards appropriate support": {
    en: "Guidance towards appropriate support",
    pa: "ਢੁਕਵੀਂ ਸਹਾਇਤਾ ਤੱਕ ਪਹੁੰਚ ਲਈ ਮਾਰਗਦਰਸ਼ਨ"
  },
  "Menstrual Health & Hygiene": {
    en: "Menstrual Health & Hygiene",
    pa: "ਮਹਾਵਾਰੀ ਸਿਹਤ ਅਤੇ ਸਫ਼ਾਈ"
  },
  "Misinformation around menstruation can affect health, school participation and confidence. Our sessions create a respectful setting in which girls and women can ask practical questions and receive reliable, understandable information.": {
    en: "Misinformation around menstruation can affect health, school participation and confidence. Our sessions create a respectful setting in which girls and women can ask practical questions and receive reliable, understandable information.",
    pa: "ਮਾਹਵਾਰੀ ਬਾਰੇ ਗਲਤ ਜਾਣਕਾਰੀ ਸਿਹਤ, ਸਕੂਲ ਵਿੱਚ ਭਾਗੀਦਾਰੀ ਅਤੇ ਆਤਮ-ਵਿਸ਼ਵਾਸ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰ ਸਕਦੀ ਹੈ। ਸਾਡੇ ਸੈਸ਼ਨ ਇੱਕ ਆਦਰਯੋਗ ਮਾਹੌਲ ਸਿਰਜਦੇ ਹਨ ਜਿਸ ਵਿੱਚ ਕੁੜੀਆਂ ਅਤੇ ਔਰਤਾਂ ਵਿਹਾਰਕ ਸਵਾਲ ਪੁੱਛ ਸਕਦੀਆਂ ਹਨ ਅਤੇ ਭਰੋਸੇਯੋਗ, ਸਮਝਣਯੋਗ ਜਾਣਕਾਰੀ ਪ੍ਰਾਪਤ ਕਰ ਸਕਦੀਆਂ ਹਨ।"
  },
  "The work also engages schools and communities so that menstrual health is treated as a normal health and dignity issue rather than a source of embarrassment.": {
    en: "The work also engages schools and communities so that menstrual health is treated as a normal health and dignity issue rather than a source of embarrassment.",
    pa: "ਇਹ ਕਾਰਜ ਸਕੂਲਾਂ ਅਤੇ ਭਾਈਚਾਰਿਆਂ ਨੂੰ ਵੀ ਜੋੜਦਾ ਹੈ ਤਾਂ ਜੋ ਮਾਹਵਾਰੀ ਸਿਹਤ ਨੂੰ ਸ਼ਰਮਿੰਦਗੀ ਦਾ ਸਰੋਤ ਮੰਨਣ ਦੀ ਬਜਾਏ ਇੱਕ ਆਮ ਸਿਹਤ ਅਤੇ ਸਨਮਾਨ ਦਾ ਮੁੱਦਾ ਮੰਨਿਆ ਜਾਵੇ।"
  },
  "15,000+ people reached": {
    en: "15,000+ people reached",
    pa: "15,000 ਤੋਂ ਵੱਧ ਲੋਕਾਂ ਤੱਕ ਪਹੁੰਚ"
  },
  "Practical menstrual-health education": {
    en: "Practical menstrual-health education",
    pa: "ਵਰਤੋਂਯੋਗ ਮਹਾਵਾਰੀ ਸਿਹਤ ਸਿੱਖਿਆ"
  },
  "Myth and stigma reduction": {
    en: "Myth and stigma reduction",
    pa: "ਭਰਮ ਅਤੇ ਸਮਾਜਿਕ ਕਲੰਕ ਘਟਾਉਣਾ"
  },
  "Hygiene and well-being information": {
    en: "Hygiene and well-being information",
    pa: "ਸਫ਼ਾਈ ਅਤੇ ਤੰਦਰੁਸਤੀ ਬਾਰੇ ਜਾਣਕਾਰੀ"
  },
  "Dialogue with schools and communities": {
    en: "Dialogue with schools and communities",
    pa: "ਸਕੂਲਾਂ ਅਤੇ ਸਮੁਦਾਇਆਂ ਨਾਲ ਸੰਵਾਦ"
  },
  "Prevention begins before addiction takes hold. Punjabi Samvad works with students, families and communities to explain the personal, social and economic consequences of substance abuse.": {
    en: "Prevention begins before addiction takes hold. Punjabi Samvad works with students, families and communities to explain the personal, social and economic consequences of substance abuse.",
    pa: "ਬਚਾਅ ਨਸ਼ੇ ਦੀ ਲਤ ਲੱਗਣ ਤੋਂ ਪਹਿਲਾਂ ਹੀ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ। ਪੰਜਾਬੀ ਸੰਵਾਦ ਵਿਦਿਆਰਥੀਆਂ, ਪਰਿਵਾਰਾਂ ਅਤੇ ਭਾਈਚਾਰਿਆਂ ਨਾਲ ਮਿਲ ਕੇ ਕੰਮ ਕਰਦਾ ਹੈ ਤਾਂ ਜੋ ਨਸ਼ੇ ਦੇ ਸੇਵਨ ਦੇ ਨਿੱਜੀ, ਸਮਾਜਿਕ ਅਤੇ ਆਰਥਿਕ ਨਤੀਜਿਆਂ ਬਾਰੇ ਸਮਝਾਇਆ ਜਾ ਸਕੇ।"
  },
  "Lectures and seminars are supported by grassroots outreach and creative communication, including Tirhayi Umar, which brings the human cost of addiction into public view.": {
    en: "Lectures and seminars are supported by grassroots outreach and creative communication, including Tirhayi Umar, which brings the human cost of addiction into public view.",
    pa: "ਲੈਕਚਰਾਂ ਅਤੇ ਸੈਮੀਨਾਰਾਂ ਨੂੰ ਜ਼ਮੀਨੀ ਪੱਧਰ ਦੀ ਪਹੁੰਚ ਅਤੇ ਸਿਰਜਣਾਤਮਕ ਸੰਚਾਰ ਦੁਆਰਾ ਸਹਿਯੋਗ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ, ਜਿਸ ਵਿੱਚ 'ਤਿਰਹਾਈ ਉਮਰ' ਵੀ ਸ਼ਾਮਲ ਹੈ, ਜੋ ਨਸ਼ੇ ਦੇ ਮਨੁੱਖੀ ਨੁਕਸਾਨ ਨੂੰ ਜਨਤਾ ਦੇ ਸਾਹਮਣੇ ਲਿਆਉਂਦਾ ਹੈ।"
  },
  "52,000+ people reached": {
    en: "52,000+ people reached",
    pa: "52,000 ਤੋਂ ਵੱਧ ਲੋਕਾਂ ਤੱਕ ਪਹੁੰਚ"
  },
  "Preventive sessions in schools": {
    en: "Preventive sessions in schools",
    pa: "ਸਕੂਲਾਂ ਵਿੱਚ ਰੋਕਥਾਮ ਸੰਬੰਧੀ ਸੈਸ਼ਨ"
  },
  "Community and family awareness": {
    en: "Community and family awareness",
    pa: "ਸਮੁਦਾਇ ਅਤੇ ਪਰਿਵਾਰਾਂ ਵਿੱਚ ਜਾਗਰੂਕਤਾ"
  },
  "Expert-led lectures and seminars": {
    en: "Expert-led lectures and seminars",
    pa: "ਮਾਹਿਰਾਂ ਵੱਲੋਂ ਲੈਕਚਰ ਅਤੇ ਸੈਮੀਨਾਰ"
  },
  "Documentary and creative communication": {
    en: "Documentary and creative communication",
    pa: "ਡਾਕੂਮੈਂਟਰੀ ਅਤੇ ਰਚਨਾਤਮਕ ਸੰਚਾਰ"
  },
  "Reliable health information can protect individuals while reducing fear and exclusion. Our community-health work includes HIV/AIDS prevention, testing and treatment awareness, stigma reduction and broader preventive-health outreach.": {
    en: "Reliable health information can protect individuals while reducing fear and exclusion. Our community-health work includes HIV/AIDS prevention, testing and treatment awareness, stigma reduction and broader preventive-health outreach.",
    pa: "ਭਰੋਸੇਯੋਗ ਸਿਹਤ ਜਾਣਕਾਰੀ ਡਰ ਅਤੇ ਵੱਖਰੇਵੇਂ ਨੂੰ ਘਟਾਉਂਦੇ ਹੋਏ ਵਿਅਕਤੀਆਂ ਦੀ ਰੱਖਿਆ ਕਰ ਸਕਦੀ ਹੈ। ਸਾਡੇ ਭਾਈਚਾਰਕ-ਸਿਹਤ ਕਾਰਜਾਂ ਵਿੱਚ ਐੱਚ.ਆਈ.ਵੀ./ਏਡਜ਼ ਦੀ ਰੋਕਥਾਮ, ਟੈਸਟਿੰਗ ਅਤੇ ਇਲਾਜ ਦੀ ਜਾਗਰੂਕਤਾ, ਕਲੰਕ ਨੂੰ ਘਟਾਉਣਾ ਅਤੇ ਵਿਆਪਕ ਰੋਕਥਾਮ-ਸਿਹਤ ਆਊਟਰੀਚ ਸ਼ਾਮਲ ਹੈ।"
  },
  "We work with public institutions, professionals and community partners to make information accessible and connect awareness with responsible action.": {
    en: "We work with public institutions, professionals and community partners to make information accessible and connect awareness with responsible action.",
    pa: "ਅਸੀਂ ਜਾਣਕਾਰੀ ਨੂੰ ਪਹੁੰਚਯੋਗ ਬਣਾਉਣ ਅਤੇ ਜਾਗਰੂਕਤਾ ਨੂੰ ਜ਼ਿੰਮੇਵਾਰਾਨਾ ਕਾਰਵਾਈ ਨਾਲ ਜੋੜਨ ਲਈ ਜਨਤਕ ਸੰਸਥਾਵਾਂ, ਪੇਸ਼ੇਵਰਾਂ ਅਤੇ ਭਾਈਚਾਰਕ ਭਾਈਵਾਲਾਂ ਨਾਲ ਕੰਮ ਕਰਦੇ ਹਾਂ।"
  },
  "100+ HIV/AIDS programmes": {
    en: "100+ HIV/AIDS programmes",
    pa: "HIV/AIDS ਦੇ 100 ਤੋਂ ਵੱਧ ਪ੍ਰੋਗਰਾਮ"
  },
  "HIV and STI prevention awareness": {
    en: "HIV and STI prevention awareness",
    pa: "HIV ਅਤੇ STI ਤੋਂ ਬਚਾਅ ਬਾਰੇ ਜਾਗਰੂਕਤਾ"
  },
  "Testing, treatment and helpline information": {
    en: "Testing, treatment and helpline information",
    pa: "ਜਾਂਚ, ਇਲਾਜ ਅਤੇ ਹੈਲਪਲਾਈਨ ਬਾਰੇ ਜਾਣਕਾਰੀ"
  },
  "Stigma reduction": {
    en: "Stigma reduction",
    pa: "ਸਮਾਜਿਕ ਕਲੰਕ ਘਟਾਉਣਾ"
  },
  "Preventive-health camps and outreach": {
    en: "Preventive-health camps and outreach",
    pa: "ਰੋਕਥਾਮੀ ਸਿਹਤ ਕੈਂਪ ਅਤੇ ਸਮੁਦਾਇਕ ਪਹੁੰਚ"
  },
  "Art, Culture & Heritage": {
    en: "Art, Culture & Heritage",
    pa: "ਕਲਾ, ਸੱਭਿਆਚਾਰ ਅਤੇ ਵਿਰਾਸਤ"
  },
  "Art can reach people in ways that formal instruction cannot. Theatre, film, literature and cultural programmes have been part of Punjabi Samvad from the beginning, helping communities discuss gender discrimination, addiction and other difficult subjects.": {
    en: "Art can reach people in ways that formal instruction cannot. Theatre, film, literature and cultural programmes have been part of Punjabi Samvad from the beginning, helping communities discuss gender discrimination, addiction and other difficult subjects.",
    pa: "ਕਲਾ ਲੋਕਾਂ ਤੱਕ ਉਹਨਾਂ ਤਰੀਕਿਆਂ ਨਾਲ ਪਹੁੰਚ ਸਕਦੀ ਹੈ ਜੋ ਰਸਮੀ ਸਿੱਖਿਆ ਨਹੀਂ ਕਰ ਸਕਦੀ। ਰੰਗਮੰਚ, ਫਿਲਮ, ਸਾਹਿਤ ਅਤੇ ਸੱਭਿਆਚਾਰਕ ਪ੍ਰੋਗਰਾਮ ਸ਼ੁਰੂ ਤੋਂ ਹੀ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦਾ ਹਿੱਸਾ ਰਹੇ ਹਨ, ਜੋ ਭਾਈਚਾਰਿਆਂ ਨੂੰ ਲਿੰਗ ਵਿਤਕਰੇ, ਨਸ਼ਾਖੋਰੀ ਅਤੇ ਹੋਰ ਮੁਸ਼ਕਲ ਵਿਸ਼ਿਆਂ 'ਤੇ ਚਰਚਾ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਨ।"
  },
  "Cultural work also creates opportunities for younger generations to encounter Punjabi language, artistic practice and heritage as living parts of community life.": {
    en: "Cultural work also creates opportunities for younger generations to encounter Punjabi language, artistic practice and heritage as living parts of community life.",
    pa: "ਸੱਭਿਆਚਾਰਕ ਕਾਰਜ ਨਵੀਂ ਪੀੜ੍ਹੀ ਲਈ ਪੰਜਾਬੀ ਭਾਸ਼ਾ, ਕਲਾਤਮਕ ਅਭਿਆਸ ਅਤੇ ਵਿਰਾਸਤ ਨੂੰ ਭਾਈਚਾਰਕ ਜੀਵਨ ਦੇ ਜੀਵੰਤ ਹਿੱਸੇ ਵਜੋਂ ਰੂਬਰੂ ਹੋਣ ਦੇ ਮੌਕੇ ਵੀ ਪੈਦਾ ਕਰਦਾ ਹੈ।"
  },
  "Theatre for public awareness": {
    en: "Theatre for public awareness",
    pa: "ਜਨ-ਜਾਗਰੂਕਤਾ ਲਈ ਰੰਗਮੰਚ"
  },
  "Literature and writing": {
    en: "Literature and writing",
    pa: "ਸਾਹਿਤ ਅਤੇ ਲੇਖਨ"
  },
  "Punjabi art and cultural platforms": {
    en: "Punjabi art and cultural platforms",
    pa: "ਪੰਜਾਬੀ ਕਲਾ ਅਤੇ ਸੱਭਿਆਚਾਰਕ ਮੰਚ"
  },
  "View programmes": {
    en: "View programmes",
    pa: "ਪ੍ਰੋਗਰਾਮ ਵੇਖੋ"
  },
  "Our Programmes": {
    en: "Our Programmes",
    pa: "ਸਾਡੇ ਪ੍ਰੋਗਰਾਮ"
  },
  "Our programmes combine credible information with formats people can engage with: workshops, expert sessions, outreach, education, theatre, film and institutional partnerships. Delivery is shaped around the audience, setting and agreed purpose.": {
    en: "Our programmes combine credible information with formats people can engage with: workshops, expert sessions, outreach, education, theatre, film and institutional partnerships. Delivery is shaped around the audience, setting and agreed purpose.",
    pa: "ਸਾਡੇ ਪ੍ਰੋਗਰਾਮ ਭਰੋਸੇਯੋਗ ਜਾਣਕਾਰੀ ਨੂੰ ਅਜਿਹੇ ਰੂਪਾਂ ਨਾਲ ਜੋੜਦੇ ਹਨ ਜਿਨ੍ਹਾਂ ਨਾਲ ਲੋਕ ਜੁੜ ਸਕਦੇ ਹਨ: ਵਰਕਸ਼ਾਪਾਂ, ਮਾਹਰ ਸੈਸ਼ਨ, ਆਊਟਰੀਚ, ਸਿੱਖਿਆ, ਰੰਗਮੰਚ, ਫਿਲਮ ਅਤੇ ਸੰਸਥਾਗਤ ਭਾਈਵਾਲੀ। ਇਹ ਪੇਸ਼ਕਾਰੀ ਦਰਸ਼ਕਾਂ, ਮਾਹੌਲ ਅਤੇ ਸਹਿਮਤ ਹੋਏ ਉਦੇਸ਼ ਦੇ ਅਨੁਕੂਲ ਤਿਆਰ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।"
  },
  "MPower: Mental-Health Awareness": {
    en: "MPower: Mental-Health Awareness",
    pa: "MPower: ਮਾਨਸਿਕ ਸਿਹਤ ਜਾਗਰੂਕਤਾ"
  },
  "Structured school and community sessions help participants understand mental well-being, recognise signs of distress and replace stigma with informed conversation. The work includes programmes associated with MPower and the Aditya Birla Educational Trust.": {
    en: "Structured school and community sessions help participants understand mental well-being, recognise signs of distress and replace stigma with informed conversation. The work includes programmes associated with MPower and the Aditya Birla Educational Trust.",
    pa: "ਸੰਚਾਲਿਤ ਸਕੂਲੀ ਅਤੇ ਭਾਈਚਾਰਕ ਸੈਸ਼ਨ ਭਾਗੀਦਾਰਾਂ ਨੂੰ ਮਾਨਸਿਕ ਤੰਦਰੁਸਤੀ ਨੂੰ ਸਮਝਣ, ਪਰੇਸ਼ਾਨੀ ਦੇ ਲੱਛਣਾਂ ਨੂੰ ਪਛਾਣਨ ਅਤੇ ਕਲੰਕ ਦੀ ਜਗ੍ਹਾ ਜਾਣਕਾਰੀ ਭਰਪੂਰ ਗੱਲਬਾਤ ਸ਼ੁਰੂ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਨ। ਇਸ ਕਾਰਜ ਵਿੱਚ ਐਮਪਾਵਰ ਅਤੇ ਆਦਿਤਿਆ ਬਿਰਲਾ ਐਜੂਕੇਸ਼ਨਲ ਟਰੱਸਟ ਨਾਲ ਜੁੜੇ ਪ੍ਰੋਗਰਾਮ ਸ਼ਾਮਲ ਹਨ।"
  },
  "Sessions are designed to make the subject approachable without oversimplifying it, and to encourage appropriate help-seeking when support is needed.": {
    en: "Sessions are designed to make the subject approachable without oversimplifying it, and to encourage appropriate help-seeking when support is needed.",
    pa: "ਸੈਸ਼ਨਾਂ ਨੂੰ ਵਿਸ਼ੇ ਨੂੰ ਬਹੁਤ ਜ਼ਿਆਦਾ ਸਰਲ ਬਣਾਏ ਬਿਨਾਂ ਪਹੁੰਚਯੋਗ ਬਣਾਉਣ ਲਈ, ਅਤੇ ਲੋੜ ਪੈਣ 'ਤੇ ਢੁਕਵੀਂ ਮਦਦ ਲੈਣ ਲਈ ਉਤਸ਼ਾਹਿਤ ਕਰਨ ਵਾਸਤੇ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਹੈ।"
  },
  "100,000+ reached": {
    en: "100,000+ reached",
    pa: "100,000+ ਤੱਕ ਪਹੁੰਚ"
  },
  "Age-appropriate awareness": {
    en: "Age-appropriate awareness",
    pa: "ਉਮਰ ਅਨੁਸਾਰ ਜਾਗਰੂਕਤਾ"
  },
  "Recognising emotional distress": {
    en: "Recognising emotional distress",
    pa: "ਭਾਵਨਾਤਮਕ ਪਰੇਸ਼ਾਨੀ ਨੂੰ ਪਛਾਣਨਾ"
  },
  "Reducing shame and misinformation": {
    en: "Reducing shame and misinformation",
    pa: "ਝਿਜਕ ਅਤੇ ਗਲਤ ਜਾਣਕਾਰੀ ਘਟਾਉਣਾ"
  },
  "Encouraging informed help-seeking": {
    en: "Encouraging informed help-seeking",
    pa: "ਜਾਣਕਾਰੀ ਨਾਲ ਢੁਕਵੀਂ ਮਦਦ ਲੈਣ ਲਈ ਪ੍ਰੇਰਿਤ ਕਰਨਾ"
  },
  "Ujaas: Menstrual Health & Hygiene": {
    en: "Ujaas: Menstrual Health & Hygiene",
    pa: "Ujaas: ਮਹਾਵਾਰੀ ਸਿਹਤ ਅਤੇ ਸਫ਼ਾਈ"
  },
  "Ujaas provides practical menstrual-health education in a setting where participants can ask questions openly. Implemented with the Aditya Birla Educational Trust, the programme addresses myths, hygiene, physical well-being and the social stigma surrounding menstruation.": {
    en: "Ujaas provides practical menstrual-health education in a setting where participants can ask questions openly. Implemented with the Aditya Birla Educational Trust, the programme addresses myths, hygiene, physical well-being and the social stigma surrounding menstruation.",
    pa: "ਉਜਾਸ ਅਜਿਹੇ ਮਾਹੌਲ ਵਿੱਚ ਮਾਹਵਾਰੀ ਸਿਹਤ ਬਾਰੇ ਅਮਲੀ ਸਿੱਖਿਆ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ ਜਿੱਥੇ ਭਾਗੀਦਾਰ ਖੁੱਲ੍ਹ ਕੇ ਸਵਾਲ ਪੁੱਛ ਸਕਦੇ ਹਨ। ਆਦਿਤਿਆ ਬਿਰਲਾ ਐਜੂਕੇਸ਼ਨਲ ਟਰੱਸਟ ਦੇ ਨਾਲ ਸ਼ੁਰੂ ਕੀਤਾ ਗਿਆ ਇਹ ਪ੍ਰੋਗਰਾਮ ਮਾਹਵਾਰੀ ਨਾਲ ਜੁੜੇ ਭਰਮਾਂ, ਸਫਾਈ, ਸਰੀਰਕ ਤੰਦਰੁਸਤੀ ਅਤੇ ਸਮਾਜਿਕ ਕਲੰਕ ਨੂੰ ਦੂਰ ਕਰਦਾ ਹੈ।"
  },
  "Schools and communities are part of the conversation because lasting change depends on a supportive environment, not information alone.": {
    en: "Schools and communities are part of the conversation because lasting change depends on a supportive environment, not information alone.",
    pa: "ਸਕੂਲ ਅਤੇ ਭਾਈਚਾਰੇ ਇਸ ਗੱਲਬਾਤ ਦਾ ਹਿੱਸਾ ਹਨ ਕਿਉਂਕਿ ਸਥਾਈ ਬਦਲਾਅ ਸਿਰਫ਼ ਜਾਣਕਾਰੀ 'ਤੇ ਨਹੀਂ, ਸਗੋਂ ਇੱਕ ਸਹਾਇਕ ਮਾਹੌਲ 'ਤੇ ਨਿਰਭਰ ਕਰਦਾ ਹੈ।"
  },
  "15,000+ reached": {
    en: "15,000+ reached",
    pa: "15,000+ ਤੱਕ ਪਹੁੰਚ"
  },
  "Reliable, practical information": {
    en: "Reliable, practical information",
    pa: "ਭਰੋਸੇਯੋਗ, ਅਮਲੀ ਜਾਣਕਾਰੀ"
  },
  "Question-led sessions": {
    en: "Question-led sessions",
    pa: "ਸਵਾਲਾਂ 'ਤੇ ਆਧਾਰਿਤ ਸੈਸ਼ਨ"
  },
  "School and community engagement": {
    en: "School and community engagement",
    pa: "ਸਕੂਲ ਅਤੇ ਸਮੁਦਾਇਕ ਭਾਗੀਦਾਰੀ"
  },
  "Anti-Drug Awareness": {
    en: "Anti-Drug Awareness",
    pa: "ਨਸ਼ਾ-ਵਿਰੋਧੀ ਜਾਗਰੂਕਤਾ"
  },
  "This prevention-focused programme reaches students and communities through lectures, seminars and grassroots activity. It explains how substance abuse affects health, families, education and livelihoods, while promoting informed choices before dependency develops.": {
    en: "This prevention-focused programme reaches students and communities through lectures, seminars and grassroots activity. It explains how substance abuse affects health, families, education and livelihoods, while promoting informed choices before dependency develops.",
    pa: "ਰੋਕਥਾਮ 'ਤੇ ਕੇਂਦਰਿਤ ਇਹ ਪ੍ਰੋਗਰਾਮ ਲੈਕਚਰਾਂ, ਸੈਮੀਨਾਰਾਂ ਅਤੇ ਜ਼ਮੀਨੀ ਪੱਧਰ ਦੀਆਂ ਗਤੀਵਿਧੀਆਂ ਰਾਹੀਂ ਵਿਦਿਆਰਥੀਆਂ ਅਤੇ ਭਾਈਚਾਰਿਆਂ ਤੱਕ ਪਹੁੰਚਦਾ ਹੈ। ਇਹ ਸਮਝਾਉਂਦਾ ਹੈ ਕਿ ਨਸ਼ਿਆਂ ਦੀ ਵਰਤੋਂ ਸਿਹਤ, ਪਰਿਵਾਰ, ਸਿੱਖਿਆ ਅਤੇ ਰੋਜ਼ੀ-ਰੋਟੀ ਨੂੰ ਕਿਵੇਂ ਪ੍ਰਭਾਵਿਤ ਕਰਦੀ ਹੈ, ਜਦੋਂ ਕਿ ਨਿਰਭਰਤਾ ਵਧਣ ਤੋਂ ਪਹਿਲਾਂ ਜਾਣਕਾਰੀ ਭਰਪੂਰ ਚੋਣਾਂ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਦਾ ਹੈ।"
  },
  "Tirhayi Umar adds documentary storytelling to the programme, showing the human consequences that may be lost in statistics.": {
    en: "Tirhayi Umar adds documentary storytelling to the programme, showing the human consequences that may be lost in statistics.",
    pa: "'ਤਿਰਹਾਈ ਉਮਰ' ਪ੍ਰੋਗਰਾਮ ਵਿੱਚ ਡੌਕੂਮੈਂਟਰੀ ਕਹਾਣੀ ਸ਼ਾਮਲ ਕਰਦੀ ਹੈ, ਜੋ ਉਹਨਾਂ ਮਾਨਵੀ ਨਤੀਜਿਆਂ ਨੂੰ ਦਰਸਾਉਂਦੀ ਹੈ ਜੋ ਅੰਕੜਿਆਂ ਵਿੱਚ ਗੁਆਚ ਸਕਦੇ ਹਨ।"
  },
  "School-based prevention": {
    en: "School-based prevention",
    pa: "ਸਕੂਲ-ਅਧਾਰਿਤ ਰੋਕਥਾਮ"
  },
  "Community outreach": {
    en: "Community outreach",
    pa: "ਸਮੁਦਾਇਕ ਪਹੁੰਚ"
  },
  "Expert sessions": {
    en: "Expert sessions",
    pa: "ਮਾਹਿਰਾਂ ਦੇ ਸੈਸ਼ਨ"
  },
  "Creative and documentary advocacy": {
    en: "Creative and documentary advocacy",
    pa: "ਰਚਨਾਤਮਕ ਅਤੇ ਡਾਕੂਮੈਂਟਰੀ ਜਨ-ਜਾਗਰੂਕਤਾ"
  },
  "Written and directed by Jyoti Bawa, Khooh Bolda Hai uses theatre to confront female foeticide, gender discrimination and the unequal treatment of girls. Performance creates an emotional and public space for audiences to consider how prejudice operates within families and communities.": {
    en: "Written and directed by Jyoti Bawa, Khooh Bolda Hai uses theatre to confront female foeticide, gender discrimination and the unequal treatment of girls. Performance creates an emotional and public space for audiences to consider how prejudice operates within families and communities.",
    pa: "ਜੋਤੀ ਬਾਵਾ ਦੁਆਰਾ ਲਿਖਿਆ ਅਤੇ ਨਿਰਦੇਸ਼ਿਤ ਕੀਤਾ ਨਾਟਕ 'ਖੂਹ ਬੋਲਦਾ ਹੈ' ਕੰਨਿਆ ਭਰੂਣ ਹੱਤਿਆ, ਲਿੰਗ ਵਿਤਕਰੇ ਅਤੇ ਕੁੜੀਆਂ ਨਾਲ ਅਸਮਾਨ ਵਿਵਹਾਰ ਦਾ ਸਾਹਮਣਾ ਕਰਨ ਲਈ ਥੀਏਟਰ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ। ਇਹ ਨਾਟਕ ਦਰਸ਼ਕਾਂ ਲਈ ਇੱਕ ਭਾਵਨਾਤਮਕ ਅਤੇ ਜਨਤਕ ਮੰਚ ਸਿਰਜਦਾ ਹੈ ਤਾਂ ਜੋ ਉਹ ਵਿਚਾਰ ਕਰ ਸਕਣ ਕਿ ਪਰਿਵਾਰਾਂ ਅਤੇ ਸਮਾਜ ਵਿੱਚ ਪੱਖਪਾਤ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ।"
  },
  "The production remains an important example of Punjabi Samvad’s belief that creative work can begin conversations that conventional awareness material may not.": {
    en: "The production remains an important example of Punjabi Samvad’s belief that creative work can begin conversations that conventional awareness material may not.",
    pa: "ਇਹ ਪੇਸ਼ਕਾਰੀ 'ਪੰਜਾਬੀ ਸੰਵਾਦ' ਦੇ ਇਸ ਵਿਸ਼ਵਾਸ ਦੀ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਉਦਾਹਰਣ ਹੈ ਕਿ ਰਚਨਾਤਮਕ ਕਾਰਜ ਅਜਿਹੀ ਗੱਲਬਾਤ ਸ਼ੁਰੂ ਕਰ ਸਕਦੇ ਹਨ ਜੋ ਰਵਾਇਤੀ ਜਾਗਰੂਕਤਾ ਸਮੱਗਰੀ ਨਹੀਂ ਕਰ ਸਕਦੀ।"
  },
  "Gender-equality awareness": {
    en: "Gender-equality awareness",
    pa: "ਲਿੰਗ ਸਮਾਨਤਾ ਬਾਰੇ ਜਾਗਰੂਕਤਾ"
  },
  "Theatre-led community dialogue": {
    en: "Theatre-led community dialogue",
    pa: "ਰੰਗਮੰਚ ਰਾਹੀਂ ਸਮੁਦਾਇਕ ਸੰਵਾਦ"
  },
  "Dignity and rights of girls": {
    en: "Dignity and rights of girls",
    pa: "ਕੁੜੀਆਂ ਦੀ ਮਰਿਆਦਾ ਅਤੇ ਅਧਿਕਾਰ"
  },
  "Creative public advocacy": {
    en: "Creative public advocacy",
    pa: "ਰਚਨਾਤਮਕ ਜਨ-ਜਾਗਰੂਕਤਾ"
  },
  "Vocational Skills for Rural Girls": {
    en: "Vocational Skills for Rural Girls",
    pa: "ਪੇਂਡੂ ਕੁੜੀਆਂ ਲਈ ਰੋਜ਼ਗਾਰਮੁਖੀ ਹੁਨਰ"
  },
  "Jyoti Bawa first completed vocational training herself and then led sessions for girls and women from rural communities. Participants learned to make soap and traditional masalas, and to check common spices such as black pepper and cardamom for quality and adulteration.": {
    en: "Jyoti Bawa first completed vocational training herself and then led sessions for girls and women from rural communities. Participants learned to make soap and traditional masalas, and to check common spices such as black pepper and cardamom for quality and adulteration.",
    pa: "ਜੋਤੀ ਬਾਵਾ ਨੇ ਪਹਿਲਾਂ ਆਪ ਕਿੱਤਾਮੁਖੀ ਸਿਖਲਾਈ ਪੂਰੀ ਕੀਤੀ ਅਤੇ ਫਿਰ ਪੇਂਡੂ ਭਾਈਚਾਰਿਆਂ ਦੀਆਂ ਲੜਕੀਆਂ ਅਤੇ ਔਰਤਾਂ ਲਈ ਸੈਸ਼ਨ ਚਲਾਏ। ਭਾਗੀਦਾਰਾਂ ਨੇ ਸਾਬਣ ਅਤੇ ਰਵਾਇਤੀ ਮਸਾਲੇ ਬਣਾਉਣਾ, ਅਤੇ ਕਾਲੀ ਮਿਰਚ ਅਤੇ ਇਲਾਇਚੀ ਵਰਗੇ ਆਮ ਮਸਾਲਿਆਂ ਦੀ ਗੁਣਵੱਤਾ ਅਤੇ ਮਿਲਾਵਟ ਦੀ ਜਾਂਚ ਕਰਨਾ ਸਿੱਖਿਆ।"
  },
  "Punjabi Samvad also restarted Phulkari embroidery training. Jyoti funded the sessions with donations and savings from other projects. The work included families affected by substance abuse.": {
    en: "Punjabi Samvad also restarted Phulkari embroidery training. Jyoti funded the sessions with donations and savings from other projects. The work included families affected by substance abuse.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੇ ਫੁਲਕਾਰੀ ਕਢਾਈ ਦੀ ਸਿਖਲਾਈ ਵੀ ਮੁੜ ਸ਼ੁਰੂ ਕੀਤੀ। ਜੋਤੀ ਨੇ ਦਾਨ ਅਤੇ ਹੋਰ ਪ੍ਰੋਜੈਕਟਾਂ ਦੀ ਬੱਚਤ ਨਾਲ ਇਹਨਾਂ ਸੈਸ਼ਨਾਂ ਦਾ ਖਰਚਾ ਚੁੱਕਿਆ। ਇਸ ਕੰਮ ਵਿੱਚ ਨਸ਼ਿਆਂ ਤੋਂ ਪ੍ਰਭਾਵਿਤ ਪਰਿਵਾਰਾਂ ਨੂੰ ਵੀ ਸ਼ਾਮਲ ਕੀਤਾ ਗਿਆ।"
  },
  "Participant stories from the programme have been documented so Punjabi Samvad can record their experience, identify gaps in the training and plan suitable follow-up.": {
    en: "Participant stories from the programme have been documented so Punjabi Samvad can record their experience, identify gaps in the training and plan suitable follow-up.",
    pa: "ਪ੍ਰੋਗਰਾਮ ਤੋਂ ਭਾਗੀਦਾਰਾਂ ਦੀਆਂ ਕਹਾਣੀਆਂ ਦਰਜ ਕੀਤੀਆਂ ਗਈਆਂ ਹਨ ਤਾਂ ਜੋ ਪੰਜਾਬੀ ਸੰਵਾਦ ਉਹਨਾਂ ਦੇ ਤਜ਼ਰਬੇ ਨੂੰ ਰਿਕਾਰਡ ਕਰ ਸਕੇ, ਸਿਖਲਾਈ ਵਿੱਚ ਕਮੀਆਂ ਦੀ ਪਛਾਣ ਕਰ ਸਕੇ ਅਤੇ ਢੁਕਵੀਂ ਅਗਲੇਰੀ ਕਾਰਵਾਈ ਦੀ ਯੋਜਨਾ ਬਣਾ ਸਕੇ।"
  },
  "Soap making and product preparation": {
    en: "Soap making and product preparation",
    pa: "ਸਾਬਣ ਬਣਾਉਣਾ ਅਤੇ ਉਤਪਾਦ ਤਿਆਰ ਕਰਨਾ"
  },
  "Traditional masala preparation": {
    en: "Traditional masala preparation",
    pa: "ਰਵਾਇਤੀ ਮਸਾਲੇ ਤਿਆਰ ਕਰਨਾ"
  },
  "Spice quality and adulteration checks": {
    en: "Spice quality and adulteration checks",
    pa: "ਮਸਾਲਿਆਂ ਦੀ ਗੁਣਵੱਤਾ ਅਤੇ ਮਿਲਾਵਟ ਦੀ ਜਾਂਚ"
  },
  "Phulkari embroidery": {
    en: "Phulkari embroidery",
    pa: "ਫੁਲਕਾਰੀ ਕਢਾਈ"
  },
  "HIV/AIDS Awareness": {
    en: "HIV/AIDS Awareness",
    pa: "HIV/AIDS ਬਾਰੇ ਜਾਗਰੂਕਤਾ"
  },
  "HIV/AIDS programmes provide clear information about prevention, testing, treatment and the harm caused by stigma. Sessions encourage responsible health decisions while reinforcing that people living with HIV deserve dignity and access to care.": {
    en: "HIV/AIDS programmes provide clear information about prevention, testing, treatment and the harm caused by stigma. Sessions encourage responsible health decisions while reinforcing that people living with HIV deserve dignity and access to care.",
    pa: "ਐੱਚ.ਆਈ.ਵੀ./ਏਡਜ਼ ਪ੍ਰੋਗਰਾਮ ਰੋਕਥਾਮ, ਟੈਸਟਿੰਗ, ਇਲਾਜ ਅਤੇ ਸਮਾਜਿਕ ਕਲੰਕ ਕਾਰਨ ਹੋਣ ਵਾਲੇ ਨੁਕਸਾਨ ਬਾਰੇ ਸਪੱਸ਼ਟ ਜਾਣਕਾਰੀ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਨ। ਸੈਸ਼ਨ ਜ਼ਿੰਮੇਵਾਰ ਸਿਹਤ ਫੈਸਲਿਆਂ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਦੇ ਹਨ ਜਦੋਂ ਕਿ ਇਹ ਵੀ ਸਪੱਸ਼ਟ ਕਰਦੇ ਹਨ ਕਿ ਐੱਚ.ਆਈ.ਵੀ. ਨਾਲ ਜੀ ਰਹੇ ਲੋਕ ਸਨਮਾਨ ਅਤੇ ਦੇਖਭਾਲ ਦੇ ਹੱਕਦਾਰ ਹਨ।"
  },
  "Punjabi Samvad has worked with public-health institutions and community partners to take this information into accessible local settings.": {
    en: "Punjabi Samvad has worked with public-health institutions and community partners to take this information into accessible local settings.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੇ ਇਸ ਜਾਣਕਾਰੀ ਨੂੰ ਪਹੁੰਚਯੋਗ ਸਥਾਨਕ ਖੇਤਰਾਂ ਤੱਕ ਪਹੁੰਚਾਉਣ ਲਈ ਜਨਤਕ ਸਿਹਤ ਸੰਸਥਾਵਾਂ ਅਤੇ ਭਾਈਚਾਰਕ ਭਾਈਵਾਲਾਂ ਨਾਲ ਮਿਲ ਕੇ ਕੰਮ ਕੀਤਾ ਹੈ।"
  },
  "100+ programmes": {
    en: "100+ programmes",
    pa: "100+ ਪ੍ਰੋਗਰਾਮ"
  },
  "Prevention and safer choices": {
    en: "Prevention and safer choices",
    pa: "ਬਚਾਅ ਅਤੇ ਸੁਰੱਖਿਅਤ ਚੋਣਾਂ"
  },
  "Testing and treatment information": {
    en: "Testing and treatment information",
    pa: "ਜਾਂਚ ਅਤੇ ਇਲਾਜ ਬਾਰੇ ਜਾਣਕਾਰੀ"
  },
  "Helpline and referral awareness": {
    en: "Helpline and referral awareness",
    pa: "ਹੈਲਪਲਾਈਨ ਅਤੇ ਰੈਫਰਲ ਬਾਰੇ ਜਾਣਕਾਰੀ"
  },
  "Dignity and stigma reduction": {
    en: "Dignity and stigma reduction",
    pa: "ਮਰਿਆਦਾ ਦੀ ਰੱਖਿਆ ਅਤੇ ਕਲੰਕ ਘਟਾਉਣਾ"
  },
  "Discuss a partnership": {
    en: "Discuss a partnership",
    pa: "ਭਾਈਵਾਲੀ ਬਾਰੇ ਗੱਲ ਕਰੋ"
  },
  "Reach & learning": {
    en: "Reach & learning",
    pa: "ਪਹੁੰਚ ਅਤੇ ਸਿੱਖਿਆ"
  },
  "Numbers show scale, but they do not tell the whole story. We document delivery and reach, listen to participant response and use available evidence to improve how programmes are designed and implemented.": {
    en: "Numbers show scale, but they do not tell the whole story. We document delivery and reach, listen to participant response and use available evidence to improve how programmes are designed and implemented.",
    pa: "ਅੰਕੜੇ ਪੈਮਾਨਾ ਦਰਸਾਉਂਦੇ ਹਨ, ਪਰ ਉਹ ਪੂਰੀ ਕਹਾਣੀ ਨਹੀਂ ਦੱਸਦੇ। ਅਸੀਂ ਪਹੁੰਚ ਅਤੇ ਗਤੀਵਿਧੀਆਂ ਨੂੰ ਦਰਜ ਕਰਦੇ ਹਾਂ, ਭਾਗੀਦਾਰਾਂ ਦੇ ਹੁੰਗਾਰੇ ਨੂੰ ਸੁਣਦੇ ਹਾਂ ਅਤੇ ਪ੍ਰੋਗਰਾਮਾਂ ਦੇ ਡਿਜ਼ਾਈਨ ਅਤੇ ਲਾਗੂਕਰਨ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਲਈ ਉਪਲਬਧ ਸਬੂਤਾਂ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਾਂ।"
  },
  "Documented programme reach": {
    en: "Documented programme reach",
    pa: "ਦਰਜ ਕੀਤੀ ਪ੍ਰੋਗਰਾਮ ਪਹੁੰਚ"
  },
  "Our current figures reflect people reached through programmes and activities delivered across major areas of work. They are presented as programme reach rather than claims about long-term personal outcomes.": {
    en: "Our current figures reflect people reached through programmes and activities delivered across major areas of work. They are presented as programme reach rather than claims about long-term personal outcomes.",
    pa: "ਸਾਡੇ ਮੌਜੂਦਾ ਅੰਕੜੇ ਕੰਮ ਦੇ ਮੁੱਖ ਖੇਤਰਾਂ ਵਿੱਚ ਚਲਾਏ ਗਏ ਪ੍ਰੋਗਰਾਮਾਂ ਅਤੇ ਗਤੀਵਿਧੀਆਂ ਰਾਹੀਂ ਪਹੁੰਚੇ ਲੋਕਾਂ ਨੂੰ ਦਰਸਾਉਂਦੇ ਹਨ। ਇਹਨਾਂ ਨੂੰ ਲੰਬੇ ਸਮੇਂ ਦੇ ਨਿੱਜੀ ਨਤੀਜਿਆਂ ਦੇ ਦਾਅਵਿਆਂ ਦੀ ਬਜਾਏ ਪ੍ਰੋਗਰਾਮ ਪਹੁੰਚ ਵਜੋਂ ਪੇਸ਼ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।"
  },
  "This distinction keeps reporting clear and allows partners and communities to understand what each figure represents.": {
    en: "This distinction keeps reporting clear and allows partners and communities to understand what each figure represents.",
    pa: "ਇਹ ਫਰਕ ਰਿਪੋਰਟਿੰਗ ਨੂੰ ਸਪੱਸ਼ਟ ਰੱਖਦਾ ਹੈ ਅਤੇ ਭਾਈਵਾਲਾਂ ਅਤੇ ਭਾਈਚਾਰਿਆਂ ਨੂੰ ਇਹ ਸਮਝਣ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦਾ ਹੈ ਕਿ ਹਰੇਕ ਅੰਕੜਾ ਕਿਸ ਚੀਜ਼ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ।"
  },
  "100,000+ reached through mental-health programmes": {
    en: "100,000+ reached through mental-health programmes",
    pa: "ਮਾਨਸਿਕ-ਸਿਹਤ ਪ੍ਰੋਗਰਾਮਾਂ ਰਾਹੀਂ 100,000+ ਲੋਕਾਂ ਤੱਕ ਪਹੁੰਚ"
  },
  "15,000+ reached through menstrual-health programmes": {
    en: "15,000+ reached through menstrual-health programmes",
    pa: "ਮਾਹਵਾਰੀ-ਸਿਹਤ ਪ੍ਰੋਗਰਾਮਾਂ ਰਾਹੀਂ 15,000+ ਲੋਕਾਂ ਤੱਕ ਪਹੁੰਚ"
  },
  "52,000+ reached through anti-drug awareness": {
    en: "52,000+ reached through anti-drug awareness",
    pa: "ਨਸ਼ਾ-ਵਿਰੋਧੀ ਜਾਗਰੂਕਤਾ ਰਾਹੀਂ 52,000+ ਲੋਕਾਂ ਤੱਕ ਪਹੁੰਚ"
  },
  "100+ HIV/AIDS awareness programmes": {
    en: "100+ HIV/AIDS awareness programmes",
    pa: "100+ ਐਚ.ਆਈ.ਵੀ./ਏਡਜ਼ ਜਾਗਰੂਕਤਾ ਪ੍ਰੋਗਰਾਮ"
  },
  "1,100,000+ reached through Khooh Bolda Hai": {
    en: "1,100,000+ reached through Khooh Bolda Hai",
    pa: "'ਖੂਹ ਬੋਲਦਾ ਹੈ' ਰਾਹੀਂ 1,100,000+ ਲੋਕਾਂ ਤੱਕ ਪਹੁੰਚ"
  },
  "How we measure": {
    en: "How we measure",
    pa: "ਅਸੀਂ ਕਿਵੇਂ ਮਾਪਦੇ ਹਾਂ"
  },
  "Reach is one part of impact. Depending on the programme, we also examine participation, questions raised, feedback and changes in awareness where suitable measurement tools are available.": {
    en: "Reach is one part of impact. Depending on the programme, we also examine participation, questions raised, feedback and changes in awareness where suitable measurement tools are available.",
    pa: "ਪਹੁੰਚ ਪ੍ਰਭਾਵ ਦਾ ਇੱਕ ਹਿੱਸਾ ਹੈ। ਪ੍ਰੋਗਰਾਮ ਦੇ ਆਧਾਰ 'ਤੇ, ਜਿੱਥੇ ਢੁਕਵੇਂ ਮਾਪਣ ਵਾਲੇ ਸਾਧਨ ਉਪਲਬਧ ਹਨ, ਅਸੀਂ ਭਾਗੀਦਾਰੀ, ਚੁੱਕੇ ਗਏ ਸਵਾਲਾਂ, ਫੀਡਬੈਕ ਅਤੇ ਜਾਗਰੂਕਤਾ ਵਿੱਚ ਆਏ ਬਦਲਾਅ ਦੀ ਵੀ ਜਾਂਚ ਕਰਦੇ ਹਾਂ।"
  },
  "We distinguish between an activity delivered, a participant reached, a change in knowledge and a longer-term outcome. Each requires different evidence.": {
    en: "We distinguish between an activity delivered, a participant reached, a change in knowledge and a longer-term outcome. Each requires different evidence.",
    pa: "ਅਸੀਂ ਕਰਵਾਈ ਗਈ ਗਤੀਵਿਧੀ, ਪਹੁੰਚੇ ਗਏ ਭਾਗੀਦਾਰ, ਗਿਆਨ ਵਿੱਚ ਆਏ ਬਦਲਾਅ ਅਤੇ ਲੰਬੇ ਸਮੇਂ ਦੇ ਨਤੀਜਿਆਂ ਵਿਚਕਾਰ ਫਰਕ ਕਰਦੇ ਹਾਂ। ਹਰੇਕ ਲਈ ਵੱਖ-ਵੱਖ ਸਬੂਤਾਂ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।"
  },
  "People reached and sessions delivered": {
    en: "People reached and sessions delivered",
    pa: "ਪਹੁੰਚੇ ਲੋਕ ਅਤੇ ਕੀਤੇ ਗਏ ਸੈਸ਼ਨ"
  },
  "Schools, villages and communities covered": {
    en: "Schools, villages and communities covered",
    pa: "ਸ਼ਾਮਲ ਸਕੂਲ, ਪਿੰਡ ਅਤੇ ਸਮੁਦਾਇ"
  },
  "Participant engagement and feedback": {
    en: "Participant engagement and feedback",
    pa: "ਭਾਗੀਦਾਰਾਂ ਦੀ ਸ਼ਮੂਲੀਅਤ ਅਤੇ ਫੀਡਬੈਕ"
  },
  "Changes in awareness where measurement tools are used": {
    en: "Changes in awareness where measurement tools are used",
    pa: "ਜਿੱਥੇ ਮਾਪਣ ਵਾਲੇ ਸਾਧਨਾਂ ਦੀ ਵਰਤੋਂ ਕੀਤੀ ਜਾਂਦੀ ਹੈ, ਉੱਥੇ ਜਾਗਰੂਕਤਾ ਵਿੱਚ ਆਏ ਬਦਲਾਅ"
  },
  "Programme learning and areas for improvement": {
    en: "Programme learning and areas for improvement",
    pa: "ਪ੍ਰੋਗਰਾਮ ਤੋਂ ਸਿੱਖਿਆਵਾਂ ਅਤੇ ਸੁਧਾਰ ਦੇ ਖੇਤਰ"
  },
  "What participation tells us": {
    en: "What participation tells us",
    pa: "ਭਾਗੀਦਾਰੀ ਸਾਨੂੰ ਕੀ ਦੱਸਦੀ ਹੈ"
  },
  "Questions and feedback reveal what people already know, where misinformation persists and which parts of a session feel useful. This qualitative information helps facilitators adjust language, examples and future delivery.": {
    en: "Questions and feedback reveal what people already know, where misinformation persists and which parts of a session feel useful. This qualitative information helps facilitators adjust language, examples and future delivery.",
    pa: "ਸਵਾਲ ਅਤੇ ਫੀਡਬੈਕ ਇਹ ਪ੍ਰਗਟ ਕਰਦੇ ਹਨ ਕਿ ਲੋਕ ਪਹਿਲਾਂ ਹੀ ਕੀ ਜਾਣਦੇ ਹਨ, ਗਲਤ ਜਾਣਕਾਰੀ ਕਿੱਥੇ ਬਰਕਰਾਰ ਹੈ ਅਤੇ ਸੈਸ਼ਨ ਦੇ ਕਿਹੜੇ ਹਿੱਸੇ ਉਪਯੋਗੀ ਮਹਿਸੂਸ ਹੁੰਦੇ ਹਨ। ਇਹ ਗੁਣਾਤਮਕ ਜਾਣਕਾਰੀ ਸੁਚਾਰੂਕਰਤਾਵਾਂ (ਫੈਸੀਲੀਟੇਟਰਾਂ) ਨੂੰ ਭਾਸ਼ਾ, ਉਦਾਹਰਣਾਂ ਅਤੇ ਭਵਿੱਖ ਦੀ ਪੇਸ਼ਕਾਰੀ ਨੂੰ ਅਨੁਕੂਲਿਤ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੀ ਹੈ।"
  },
  "The recent vocational programme also produced beneficiary case studies from rural girls and families affected by substance abuse. These accounts record participant experience, identify gaps in the training and inform follow-up without exposing personal details.": {
    en: "The recent vocational programme also produced beneficiary case studies from rural girls and families affected by substance abuse. These accounts record participant experience, identify gaps in the training and inform follow-up without exposing personal details.",
    pa: "ਹਾਲ ਹੀ ਦੇ ਕਿੱਤਾਮੁਖੀ ਪ੍ਰੋਗਰਾਮ ਨੇ ਦਿਹਾਤੀ ਕੁੜੀਆਂ ਅਤੇ ਨਸ਼ਿਆਂ ਤੋਂ ਪ੍ਰਭਾਵਿਤ ਪਰਿਵਾਰਾਂ ਦੇ ਲਾਭਪਾਤਰੀ ਕੇਸ ਸਟੱਡੀਜ਼ ਵੀ ਤਿਆਰ ਕੀਤੇ ਹਨ। ਇਹ ਵੇਰਵੇ ਭਾਗੀਦਾਰਾਂ ਦੇ ਤਜ਼ਰਬਿਆਂ ਨੂੰ ਰਿਕਾਰਡ ਕਰਦੇ ਹਨ, ਸਿਖਲਾਈ ਵਿੱਚ ਕਮੀਆਂ ਦੀ ਪਛਾਣ ਕਰਦੇ ਹਨ ਅਤੇ ਨਿੱਜੀ ਵੇਰਵਿਆਂ ਨੂੰ ਉਜਾਗਰ ਕੀਤੇ ਬਿਨਾਂ ਅਗਲੇਰੀ ਕਾਰਵਾਈ (ਫਾਲੋ-ਅੱਪ) ਲਈ ਜਾਣਕਾਰੀ ਦਿੰਦੇ ਹਨ।"
  },
  "Learning with partners": {
    en: "Learning with partners",
    pa: "ਭਾਈਵਾਲਾਂ ਨਾਲ ਮਿਲ ਕੇ ਸਿੱਖਣਾ"
  },
  "Institutional and subject partners contribute expertise, delivery support and additional perspective. Programme review allows that shared knowledge to be used in future planning, especially when work is adapted for a new school, community or location.": {
    en: "Institutional and subject partners contribute expertise, delivery support and additional perspective. Programme review allows that shared knowledge to be used in future planning, especially when work is adapted for a new school, community or location.",
    pa: "ਸੰਸਥਾਗਤ ਅਤੇ ਵਿਸ਼ਾ ਮਾਹਰ ਭਾਈਵਾਲ ਮਾਹਰਤਾ, ਪੇਸ਼ਕਾਰੀ ਵਿੱਚ ਸਹਾਇਤਾ ਅਤੇ ਵਾਧੂ ਦ੍ਰਿਸ਼ਟੀਕੋਣ ਦਾ ਯੋਗਦਾਨ ਪਾਉਂਦੇ ਹਨ। ਪ੍ਰੋਗਰਾਮ ਦੀ ਸਮੀਖਿਆ ਉਸ ਸਾਂਝੇ ਗਿਆਨ ਨੂੰ ਭਵਿੱਖ ਦੀ ਯੋਜਨਾਬੰਦੀ ਵਿੱਚ ਵਰਤਣ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦੀ ਹੈ, ਖਾਸ ਕਰਕੇ ਜਦੋਂ ਕੰਮ ਨੂੰ ਕਿਸੇ ਨਵੇਂ ਸਕੂਲ, ਭਾਈਚਾਰੇ ਜਾਂ ਸਥਾਨ ਲਈ ਅਨੁਕੂਲਿਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।"
  },
  "We aim to carry forward what worked while remaining honest about what needs to change.": {
    en: "We aim to carry forward what worked while remaining honest about what needs to change.",
    pa: "ਸਾਡਾ ਉਦੇਸ਼ ਉਸ ਚੀਜ਼ ਨੂੰ ਅੱਗੇ ਵਧਾਉਣਾ ਹੈ ਜਿਸ ਨੇ ਕੰਮ ਕੀਤਾ, ਜਦੋਂ ਕਿ ਇਹ ਇਮਾਨਦਾਰੀ ਵੀ ਬਣਾਏ ਰੱਖਣੀ ਹੈ ਕਿ ਕੀ ਬਦਲਣ ਦੀ ਲੋੜ ਹੈ।"
  },
  "How information improves programmes": {
    en: "How information improves programmes",
    pa: "ਜਾਣਕਾਰੀ ਨਾਲ ਪ੍ਰੋਗਰਾਮ ਕਿਵੇਂ ਬਿਹਤਰ ਹੁੰਦੇ ਹਨ"
  },
  "Programme information is used to refine content, prepare facilitators, choose suitable formats and identify where follow-up may be valuable. It also supports clearer conversations with funders and implementation partners about scope, resources and realistic outcomes.": {
    en: "Programme information is used to refine content, prepare facilitators, choose suitable formats and identify where follow-up may be valuable. It also supports clearer conversations with funders and implementation partners about scope, resources and realistic outcomes.",
    pa: "ਪ੍ਰੋਗਰਾਮ ਦੀ ਜਾਣਕਾਰੀ ਦੀ ਵਰਤੋਂ ਸਮੱਗਰੀ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ, ਫੈਸੀਲੀਟੇਟਰਾਂ ਨੂੰ ਤਿਆਰ ਕਰਨ, ਢੁਕਵੇਂ ਫਾਰਮੈਟ ਚੁਣਨ ਅਤੇ ਇਹ ਪਛਾਣ ਕਰਨ ਲਈ ਕੀਤੀ ਜਾਂਦੀ ਹੈ ਕਿ ਅਗਲੇਰੀ ਕਾਰਵਾਈ (ਫਾਲੋ-ਅੱਪ) ਕਿੱਥੇ ਕੀਮਤੀ ਹੋ ਸਕਦੀ ਹੈ। ਇਹ ਫੰਡਰਾਂ ਅਤੇ ਲਾਗੂ ਕਰਨ ਵਾਲੇ ਭਾਈਵਾਲਾਂ ਨਾਲ ਦਾਇਰੇ, ਸਰੋਤਾਂ ਅਤੇ ਯਥਾਰਥਵਾਦੀ ਨਤੀਜਿਆਂ ਬਾਰੇ ਵਧੇਰੇ ਸਪੱਸ਼ਟ ਗੱਲਬਾਤ ਦਾ ਸਮਰਥਨ ਵੀ ਕਰਦੀ ਹੈ।"
  },
  "Improve session content and delivery": {
    en: "Improve session content and delivery",
    pa: "ਸੈਸ਼ਨ ਦੀ ਸਮੱਗਰੀ ਅਤੇ ਪੇਸ਼ਕਾਰੀ ਸੁਧਾਰਨਾ"
  },
  "Identify recurring knowledge gaps": {
    en: "Identify recurring knowledge gaps",
    pa: "ਵਾਰ-ਵਾਰ ਸਾਹਮਣੇ ਆਉਣ ਵਾਲੀਆਂ ਜਾਣਕਾਰੀ ਦੀਆਂ ਘਾਟਾਂ ਪਛਾਣਨਾ"
  },
  "Plan responsible follow-up": {
    en: "Plan responsible follow-up",
    pa: "ਜ਼ਿੰਮੇਵਾਰ ਫਾਲੋ-ਅੱਪ ਦੀ ਯੋਜਨਾ"
  },
  "Adapt programmes without losing their purpose": {
    en: "Adapt programmes without losing their purpose",
    pa: "ਮਕਸਦ ਕਾਇਮ ਰੱਖਦਿਆਂ ਪ੍ਰੋਗਰਾਮਾਂ ਨੂੰ ਲੋੜ ਅਨੁਸਾਰ ਢਾਲਣਾ"
  },
  "Report reach and learning clearly": {
    en: "Report reach and learning clearly",
    pa: "ਪਹੁੰਚ ਅਤੇ ਸਿੱਖਣ ਨੂੰ ਸਪਸ਼ਟ ਢੰਗ ਨਾਲ ਦਰਜ ਕਰਨਾ"
  },
  "Our leadership": {
    en: "Our leadership",
    pa: "ਸਾਡੀ ਅਗਵਾਈ"
  },
  "Meet Jyoti Bawa, Padma Shri nominee, TEDx speaker, social activist, writer and director leading Punjabi Samvad.": {
    en: "Meet Jyoti Bawa, Padma Shri nominee, TEDx speaker, social activist, writer and director leading Punjabi Samvad.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀ ਅਗਵਾਈ ਕਰ ਰਹੇ ਜਯੋਤੀ ਬਾਵਾ ਨਾਲ ਮਿਲੋ, ਜੋ ਪਦਮ ਸ਼੍ਰੀ ਨਾਮਜ਼ਦ, TEDx ਵਕਤਾ, ਸਮਾਜਿਕ ਕਾਰਜਕਰਤਾ, ਲੇਖਕ ਅਤੇ ਨਿਰਦੇਸ਼ਕ ਹਨ।"
  },
  "Programme leadership": {
    en: "Programme leadership",
    pa: "ਪ੍ਰੋਗਰਾਮ ਅਗਵਾਈ"
  },
  "Part of Punjabi Samvad since 2004, Jyoti Bawa leads work across women’s empowerment, education, public health, mental well-being, substance-abuse awareness and Punjabi culture.": {
    en: "Part of Punjabi Samvad since 2004, Jyoti Bawa leads work across women’s empowerment, education, public health, mental well-being, substance-abuse awareness and Punjabi culture.",
    pa: "2004 ਤੋਂ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦਾ ਹਿੱਸਾ, ਜਯੋਤੀ ਬਾਵਾ ਮਹਿਲਾ ਸ਼ਕਤੀਕਰਨ, ਸਿੱਖਿਆ, ਜਨਤਕ ਸਿਹਤ, ਮਾਨਸਿਕ ਤੰਦਰੁਸਤੀ, ਨਸ਼ੇ ਦੀ ਵਰਤੋਂ ਵਿਰੁੱਧ ਜਾਗਰੂਕਤਾ ਅਤੇ ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ ਦੇ ਖੇਤਰਾਂ ਵਿੱਚ ਕੰਮ ਦੀ ਅਗਵਾਈ ਕਰਦੇ ਹਨ।"
  },
  "Theatre, writing & documentary": {
    en: "Theatre, writing & documentary",
    pa: "ਰੰਗਮੰਚ, ਲੇਖਣੀ ਅਤੇ ਡਾਕੂਮੈਂਟਰੀ"
  },
  "She wrote and directed Khooh Bolda Hai and has used writing, poetry, books, documentary storytelling and other creative formats for social awareness.": {
    en: "She wrote and directed Khooh Bolda Hai and has used writing, poetry, books, documentary storytelling and other creative formats for social awareness.",
    pa: "ਉਨ੍ਹਾਂ ਨੇ 'ਖੂਹ ਬੋਲਦਾ ਹੈ' ਲਿਖਿਆ ਅਤੇ ਨਿਰਦੇਸ਼ਿਤ ਕੀਤਾ ਅਤੇ ਸਮਾਜਿਕ ਜਾਗਰੂਕਤਾ ਲਈ ਲੇਖਣੀ, ਕਵਿਤਾ, ਕਿਤਾਬਾਂ, ਡਾਕੂਮੈਂਟਰੀ ਕਹਾਣੀ ਸ਼ੈਲੀ ਅਤੇ ਹੋਰ ਰਚਨਾਤਮਕ ਰੂਪਾਂ ਦੀ ਵਰਤੋਂ ਕੀਤੀ ਹੈ।"
  },
  "Cultural work": {
    en: "Cultural work",
    pa: "ਸੱਭਿਆਚਾਰਕ ਕਾਰਜ"
  },
  "For more than a decade she has helped organise platforms celebrating Punjabi art and culture. In 2017, she represented Punjabi culture at the World Punjabi Conference in Canada.": {
    en: "For more than a decade she has helped organise platforms celebrating Punjabi art and culture. In 2017, she represented Punjabi culture at the World Punjabi Conference in Canada.",
    pa: "ਇੱਕ ਦਹਾਕੇ ਤੋਂ ਵੀ ਵੱਧ ਸਮੇਂ ਤੋਂ ਉਨ੍ਹਾਂ ਨੇ ਪੰਜਾਬੀ ਕਲਾ ਅਤੇ ਸੱਭਿਆਚਾਰ ਦਾ ਜਸ਼ਨ ਮਨਾਉਣ ਵਾਲੇ ਮੰਚਾਂ ਨੂੰ ਆਯੋਜਿਤ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕੀਤੀ ਹੈ। 2017 ਵਿੱਚ, ਉਨ੍ਹਾਂ ਨੇ ਕੈਨੇਡਾ ਵਿੱਚ ਵਿਸ਼ਵ ਪੰਜਾਬੀ ਕਾਨਫਰੰਸ ਵਿੱਚ ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ ਦੀ ਨੁਮਾਇੰਦਗੀ ਕੀਤੀ।"
  },
  "Continuing Punjabi Samvad": {
    en: "Continuing Punjabi Samvad",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੂੰ ਜਾਰੀ ਰੱਖਣਾ"
  },
  "After Amit Bawa’s passing in 2014, Jyoti Bawa continued the work they started and now leads the organisation’s wider national focus.": {
    en: "After Amit Bawa’s passing in 2014, Jyoti Bawa continued the work they started and now leads the organisation’s wider national focus.",
    pa: "2014 ਵਿੱਚ ਅਮਿਤ ਬਾਵਾ ਦੇ ਦੇਹਾਂਤ ਤੋਂ ਬਾਅਦ, ਜਯੋਤੀ ਬਾਵਾ ਨੇ ਉਨ੍ਹਾਂ ਵੱਲੋਂ ਸ਼ੁਰੂ ਕੀਤੇ ਕੰਮ ਨੂੰ ਜਾਰੀ ਰੱਖਿਆ ਅਤੇ ਹੁਣ ਸੰਸਥਾ ਦੇ ਵਿਆਪਕ ਰਾਸ਼ਟਰੀ ਕੇਂਦਰਿਤ ਕਾਰਜਾਂ ਦੀ ਅਗਵਾਈ ਕਰਦੇ ਹਨ।"
  },
  "Shared purpose": {
    en: "Shared purpose",
    pa: "ਸਾਂਝਾ ਉਦੇਸ਼"
  },
  "We work with government, education, charitable, professional and corporate partners to add expertise, resources and reach.": {
    en: "We work with government, education, charitable, professional and corporate partners to add expertise, resources and reach.",
    pa: "ਅਸੀਂ ਮਾਹਰਤਾ, ਸਰੋਤ ਅਤੇ ਪਹੁੰਚ ਵਧਾਉਣ ਲਈ ਸਰਕਾਰੀ, ਵਿਦਿਅਕ, ਦਾਨੀ, ਪੇਸ਼ੇਵਰ ਅਤੇ ਕਾਰਪੋਰੇਟ ਭਾਈਵਾਲਾਂ ਨਾਲ ਕੰਮ ਕਰਦੇ ਹਾਂ।"
  },
  "Documented collaboration through MPower mental-health awareness and Ujaas menstrual-health awareness.": {
    en: "Documented collaboration through MPower mental-health awareness and Ujaas menstrual-health awareness.",
    pa: "ਐਮਪਾਵਰ (MPower) ਮਾਨਸਿਕ-ਸਿਹਤ ਜਾਗਰੂਕਤਾ ਅਤੇ ਉਜਾਸ (Ujaas) ਮਾਹਵਾਰੀ-ਸਿਹਤ ਜਾਗਰੂਕਤਾ ਰਾਹੀਂ ਦਸਤਾਵੇਜ਼ੀ ਸਹਿਯੋਗ।"
  },
  "Government of Punjab": {
    en: "Government of Punjab",
    pa: "ਪੰਜਾਬ ਸਰਕਾਰ"
  },
  "Public-health and social-awareness activities, including HIV/AIDS awareness.": {
    en: "Public-health and social-awareness activities, including HIV/AIDS awareness.",
    pa: "ਜਨਤਕ-ਸਿਹਤ ਅਤੇ ਸਮਾਜਿਕ-ਜਾਗਰੂਕਤਾ ਗਤੀਵਿਧੀਆਂ, ਜਿਨ੍ਹਾਂ ਵਿੱਚ ਐਚ.ਆਈ.ਵੀ./ਏਡਜ਼ (HIV/AIDS) ਜਾਗਰੂਕਤਾ ਸ਼ਾਮਲ ਹੈ।"
  },
  "Engagement connected with culture and heritage initiatives.": {
    en: "Engagement connected with culture and heritage initiatives.",
    pa: "ਸੱਭਿਆਚਾਰ ਅਤੇ ਵਿਰਾਸਤੀ ਪਹਿਲਕਦਮੀਆਂ ਨਾਲ ਜੁੜੀ ਸ਼ਮੂਲੀਅਤ।"
  },
  "Internships connecting academic learning with exposure to social and community work.": {
    en: "Internships connecting academic learning with exposure to social and community work.",
    pa: "ਅਕਾਦਮਿਕ ਸਿੱਖਿਆ ਨੂੰ ਸਮਾਜਿਕ ਅਤੇ ਭਾਈਚਾਰਕ ਕੰਮ ਦੇ ਅਨੁਭਵ ਨਾਲ ਜੋੜਨ ਵਾਲੀਆਂ ਇੰਟਰਨਸ਼ਿਪਾਂ।"
  },
  "A formal collaboration supporting community-based social programmes, including substance-abuse awareness in Punjab.": {
    en: "A formal collaboration supporting community-based social programmes, including substance-abuse awareness in Punjab.",
    pa: "ਪੰਜਾਬ ਵਿੱਚ ਨਸ਼ੇ ਦੀ ਵਰਤੋਂ ਵਿਰੁੱਧ ਜਾਗਰੂਕਤਾ ਸਮੇਤ ਭਾਈਚਾਰਕ-ਆਧਾਰਿਤ ਸਮਾਜਿਕ ਪ੍ਰੋਗਰਾਮਾਂ ਦਾ ਸਮਰਥਨ ਕਰਨ ਵਾਲਾ ਇੱਕ ਰਸਮੀ ਸਹਿਯੋਗ।"
  },
  "A partner organisation connected with Punjabi Samvad’s social-impact work and institutional outreach.": {
    en: "A partner organisation connected with Punjabi Samvad’s social-impact work and institutional outreach.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਸਮਾਜਿਕ-ਪ੍ਰਭਾਵ ਵਾਲੇ ਕੰਮ ਅਤੇ ਸੰਸਥਾਗਤ ਪਹੁੰਚ ਨਾਲ ਜੁੜੀ ਇੱਕ ਭਾਈਵਾਲ ਸੰਸਥਾ।"
  },
  "Institutional engagement connected with public-interest communication and awareness.": {
    en: "Institutional engagement connected with public-interest communication and awareness.",
    pa: "ਜਨਤਕ-ਹਿੱਤ ਸੰਚਾਰ ਅਤੇ ਜਾਗਰੂਕਤਾ ਨਾਲ ਜੁੜੀ ਸੰਸਥਾਗਤ ਸ਼ਮੂਲੀਅਤ।"
  },
  "Collaboration connected with public-health awareness and community outreach in Punjab.": {
    en: "Collaboration connected with public-health awareness and community outreach in Punjab.",
    pa: "ਪੰਜਾਬ ਵਿੱਚ ਜਨਤਕ-ਸਿਹਤ ਜਾਗਰੂਕਤਾ ਅਤੇ ਭਾਈਚਾਰਕ ਪਹੁੰਚ ਨਾਲ ਜੁੜਿਆ ਸਹਿਯੋਗ।"
  },
  "Work with us": {
    en: "Work with us",
    pa: "ਸਾਡੇ ਨਾਲ ਕੰਮ ਕਰੋ"
  },
  "We welcome CSR teams, foundations, government institutions, schools, universities, healthcare professionals and social-sector organisations.": {
    en: "We welcome CSR teams, foundations, government institutions, schools, universities, healthcare professionals and social-sector organisations.",
    pa: "ਅਸੀਂ ਸੀ.ਐਸ.ਆਰ. (CSR) ਟੀਮਾਂ, ਫਾਊਂਡੇਸ਼ਨਾਂ, ਸਰਕਾਰੀ ਸੰਸਥਾਵਾਂ, ਸਕੂਲਾਂ, ਯੂਨੀਵਰਸਿਟੀਆਂ, ਸਿਹਤ ਸੰਭਾਲ ਪੇਸ਼ੇਵਰਾਂ ਅਤੇ ਸਮਾਜਿਕ-ਖੇਤਰ ਦੀਆਂ ਸੰਸਥਾਵਾਂ ਦਾ ਸਵਾਗਤ ਕਰਦੇ ਹਾਂ।"
  },
  "CSR & Institutional Partnerships": {
    en: "CSR & Institutional Partnerships",
    pa: "CSR ਅਤੇ ਸੰਸਥਾਗਤ ਭਾਈਵਾਲੀਆਂ"
  },
  "More than two decades of grassroots experience, community engagement and creative communication for programmes across India.": {
    en: "More than two decades of grassroots experience, community engagement and creative communication for programmes across India.",
    pa: "ਭਾਰਤ ਭਰ ਵਿੱਚ ਪ੍ਰੋਗਰਾਮਾਂ ਲਈ ਦੋ ਦਹਾਕਿਆਂ ਤੋਂ ਵੱਧ ਦਾ ਜ਼ਮੀਨੀ ਤਜ਼ਰਬਾ, ਭਾਈਚਾਰਕ ਸ਼ਮੂਲੀਅਤ ਅਤੇ ਰਚਨਾਤਮਕ ਸੰਚਾਰ।"
  },
  "Areas of partnership": {
    en: "Areas of partnership",
    pa: "ਭਾਈਵਾਲੀ ਦੇ ਖੇਤਰ"
  },
  "Programmes can be developed around agreed needs and outcomes.": {
    en: "Programmes can be developed around agreed needs and outcomes.",
    pa: "ਸਹਿਮਤ ਹੋਈਆਂ ਲੋੜਾਂ ਅਤੇ ਨਤੀਜਿਆਂ ਦੇ ਆਧਾਰ 'ਤੇ ਪ੍ਰੋਗਰਾਮ ਵਿਕਸਿਤ ਕੀਤੇ ਜਾ ਸਕਦੇ ਹਨ।"
  },
  "Women and girls": {
    en: "Women and girls",
    pa: "ਔਰਤਾਂ ਅਤੇ ਕੁੜੀਆਂ"
  },
  "Mental health and youth well-being": {
    en: "Mental health and youth well-being",
    pa: "ਮਾਨਸਿਕ ਸਿਹਤ ਅਤੇ ਨੌਜਵਾਨਾਂ ਦੀ ਤੰਦਰੁਸਤੀ"
  },
  "Community health and substance-abuse prevention": {
    en: "Community health and substance-abuse prevention",
    pa: "ਸਮੁਦਾਇਕ ਸਿਹਤ ਅਤੇ ਨਸ਼ਿਆਂ ਦੀ ਰੋਕਥਾਮ"
  },
  "Theatre and creative awareness": {
    en: "Theatre and creative awareness",
    pa: "ਰੰਗਮੰਚ ਅਤੇ ਰਚਨਾਤਮਕ ਜਾਗਰੂਕਤਾ"
  },
  "Ways we can work together": {
    en: "Ways we can work together",
    pa: "ਅਸੀਂ ਕਿਹੜੇ ਤਰੀਕਿਆਂ ਨਾਲ ਮਿਲ ਕੇ ਕੰਮ ਕਰ ਸਕਦੇ ਹਾਂ"
  },
  "Flexible models shaped around programme scope.": {
    en: "Flexible models shaped around programme scope.",
    pa: "ਪ੍ਰੋਗਰਾਮ ਦੇ ਘੇਰੇ ਅਨੁਸਾਰ ਤਿਆਰ ਕੀਤੇ ਗਏ ਲਚਕਦਾਰ ਮਾਡਲ।"
  },
  "Programme implementation": {
    en: "Programme implementation",
    pa: "ਪ੍ਰੋਗਰਾਮ ਲਾਗੂ ਕਰਨਾ"
  },
  "Awareness and education campaigns": {
    en: "Awareness and education campaigns",
    pa: "ਜਾਗਰੂਕਤਾ ਅਤੇ ਸਿੱਖਿਆ ਮੁਹਿੰਮਾਂ"
  },
  "Creative communication": {
    en: "Creative communication",
    pa: "ਰਚਨਾਤਮਕ ਸੰਚਾਰ"
  },
  "Expert engagement": {
    en: "Expert engagement",
    pa: "ਮਾਹਿਰਾਂ ਦੀ ਭਾਗੀਦਾਰੀ"
  },
  "Academic collaboration": {
    en: "Academic collaboration",
    pa: "ਅਕਾਦਮਿਕ ਸਹਿਯੋਗ"
  },
  "Multi-location programmes": {
    en: "Multi-location programmes",
    pa: "ਕਈ ਥਾਵਾਂ 'ਤੇ ਪ੍ਰੋਗਰਾਮ"
  },
  "Why Punjabi Samvad": {
    en: "Why Punjabi Samvad",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਕਿਉਂ"
  },
  "Grassroots experience, institutional collaboration, rural and semi-urban engagement, creative capability and documented reach.": {
    en: "Grassroots experience, institutional collaboration, rural and semi-urban engagement, creative capability and documented reach.",
    pa: "ਜ਼ਮੀਨੀ ਤਜ਼ਰਬਾ, ਸੰਸਥਾਗਤ ਸਹਿਯੋਗ, ਪੇਂਡੂ ਅਤੇ ਅਰਧ-ਸ਼ਹਿਰੀ ਸ਼ਮੂਲੀਅਤ, ਰਚਨਾਤਮਕ ਸਮਰੱਥਾ ਅਤੇ ਦਸਤਾਵੇਜ਼ੀ ਪਹੁੰਚ।"
  },
  "CSR Registration: CSR00032253": {
    en: "CSR Registration: CSR00032253",
    pa: "CSR ਰਜਿਸਟ੍ਰੇਸ਼ਨ: CSR00032253"
  },
  "12AB registered": {
    en: "12AB registered",
    pa: "12AB ਰਜਿਸਟਰਡ"
  },
  "80G approved": {
    en: "80G approved",
    pa: "80G ਮਨਜ਼ੂਰਸ਼ੁਦਾ"
  },
  "National programme outlook": {
    en: "National programme outlook",
    pa: "ਰਾਸ਼ਟਰੀ ਪੱਧਰ ਦੀ ਪ੍ਰੋਗਰਾਮ ਦ੍ਰਿਸ਼ਟੀ"
  },
  "Targeted support": {
    en: "Targeted support",
    pa: "ਨਿਸ਼ਾਨਾਬੱਧ ਸਹਿਯੋਗ"
  },
  "Fund a Programme": {
    en: "Fund a Programme",
    pa: "ਕਿਸੇ ਪ੍ਰੋਗਰਾਮ ਨੂੰ ਸਹਿਯੋਗ ਦਿਓ"
  },
  "Support a specific area of Punjabi Samvad’s work. We can share current priorities and discuss where funding is most useful.": {
    en: "Support a specific area of Punjabi Samvad’s work. We can share current priorities and discuss where funding is most useful.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਕੰਮ ਦੇ ਕਿਸੇ ਖਾਸ ਖੇਤਰ ਦਾ ਸਮਰਥਨ ਕਰੋ। ਅਸੀਂ ਮੌਜੂਦਾ ਤਰਜੀਹਾਂ ਸਾਂਝੀਆਂ ਕਰ ਸਕਦੇ ਹਾਂ ਅਤੇ ਚਰਚਾ ਕਰ ਸਕਦੇ ਹਾਂ ਕਿ ਫੰਡਿੰਗ ਕਿੱਥੇ ਸਭ ਤੋਂ ਵੱਧ ਉਪਯੋਗੀ ਹੈ।"
  },
  "Girls’ education, vocational skills, menstrual-health and gender-awareness programmes.": {
    en: "Girls’ education, vocational skills, menstrual-health and gender-awareness programmes.",
    pa: "ਕੁੜੀਆਂ ਦੀ ਸਿੱਖਿਆ, ਕਿੱਤਾਮੁਖੀ ਹੁਨਰ, ਮਹਾਵਾਰੀ ਸਿਹਤ ਅਤੇ ਲਿੰਗ ਜਾਗਰੂਕਤਾ ਪ੍ਰੋਗਰਾਮ।"
  },
  "Extend awareness programmes to more schools and communities.": {
    en: "Extend awareness programmes to more schools and communities.",
    pa: "ਜਾਗਰੂਕਤਾ ਪ੍ਰੋਗਰਾਮਾਂ ਨੂੰ ਹੋਰ ਸਕੂਲਾਂ ਅਤੇ ਭਾਈਚਾਰਿਆਂ ਤੱਕ ਵਧਾਓ।"
  },
  "Help more girls access reliable menstrual-health information.": {
    en: "Help more girls access reliable menstrual-health information.",
    pa: "ਹੋਰ ਲੜਕੀਆਂ ਦੀ ਮਾਹਵਾਰੀ-ਸਿਹਤ ਬਾਰੇ ਭਰੋਸੇਯੋਗ ਜਾਣਕਾਰੀ ਤੱਕ ਪਹੁੰਚ ਵਿੱਚ ਮਦਦ ਕਰੋ।"
  },
  "Educational assistance, mentoring, vocational development and youth activities.": {
    en: "Educational assistance, mentoring, vocational development and youth activities.",
    pa: "ਸਿੱਖਿਆਇਕ ਸਹਾਇਤਾ, ਮਾਰਗਦਰਸ਼ਨ, ਕਿੱਤਾਮੁਖੀ ਵਿਕਾਸ ਅਤੇ ਨੌਜਵਾਨ ਗਤੀਵਿਧੀਆਂ।"
  },
  "Lectures, outreach and preventive communication in additional communities.": {
    en: "Lectures, outreach and preventive communication in additional communities.",
    pa: "ਹੋਰ ਭਾਈਚਾਰਿਆਂ ਵਿੱਚ ਲੈਕਚਰ, ਆਊਟਰੀਚ ਅਤੇ ਰੋਕਥਾਮ ਵਾਲਾ ਸੰਚਾਰ।"
  },
  "HIV/AIDS and preventive-health education.": {
    en: "HIV/AIDS and preventive-health education.",
    pa: "ਐਚ.ਆਈ.ਵੀ./ਏਡਜ਼ ਅਤੇ ਰੋਕਥਾਮ-ਸਿਹਤ ਸਿੱਖਿਆ।"
  },
  "Culture & Creative Advocacy": {
    en: "Culture & Creative Advocacy",
    pa: "ਸੱਭਿਆਚਾਰ ਅਤੇ ਰਚਨਾਤਮਕ ਜਨ-ਜਾਗਰੂਕਤਾ"
  },
  "Theatre, cultural programmes and social communication.": {
    en: "Theatre, cultural programmes and social communication.",
    pa: "ਥੀਏਟਰ, ਸਭਿਆਚਾਰਕ ਪ੍ਰੋਗਰਾਮ ਅਤੇ ਸਮਾਜਿਕ ਸੰਚਾਰ।"
  },
  "Contact us about funding": {
    en: "Contact us about funding",
    pa: "ਵਿੱਤੀ ਸਹਿਯੋਗ ਬਾਰੇ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ"
  },
  "Tell us about your social-impact programme, target group, geography and current stage. We can explore whether Punjabi Samvad is the right implementation partner.": {
    en: "Tell us about your social-impact programme, target group, geography and current stage. We can explore whether Punjabi Samvad is the right implementation partner.",
    pa: "ਸਾਨੂੰ ਆਪਣੇ ਸਮਾਜਿਕ-ਪ੍ਰਭਾਵ ਪ੍ਰੋਗਰਾਮ, ਲਕਸ਼ਿਤ ਸਮੂਹ, ਭੂਗੋਲਿਕ ਖੇਤਰ ਅਤੇ ਮੌਜੂਦਾ ਚਰਨ ਬਾਰੇ ਦੱਸੋ। ਅਸੀਂ ਇਹ ਪਤਾ ਲਗਾ ਸਕਦੇ ਹਾਂ ਕਿ ਕੀ ਪੰਜਾਬੀ ਸੰਵਾਦ ਸਹੀ ਲਾਗੂਕਰਨ ਭਾਗੀਦਾਰ ਹੈ।"
  },
  "What are you exploring?": {
    en: "What are you exploring?",
    pa: "ਤੁਸੀਂ ਕਿਸ ਤਰ੍ਹਾਂ ਦੇ ਸਹਿਯੋਗ ਬਾਰੇ ਸੋਚ ਰਹੇ ਹੋ?"
  },
  "We welcome early conversations as well as detailed programme briefs.": {
    en: "We welcome early conversations as well as detailed programme briefs.",
    pa: "ਅਸੀਂ ਸ਼ੁਰੂਆਤੀ ਗੱਲਬਾਤ ਦੇ ਨਾਲ-ਨਾਲ ਵਿਸਤ੍ਰਿਤ ਪ੍ਰੋਗਰਾਮ ਵੇਰਵਿਆਂ ਦਾ ਵੀ ਸਵਾਗਤ ਕਰਦੇ ਹਾਂ।"
  },
  "CSR partnership": {
    en: "CSR partnership",
    pa: "CSR ਭਾਈਵਾਲੀ"
  },
  "Foundation grant": {
    en: "Foundation grant",
    pa: "ਫਾਊਂਡੇਸ਼ਨ ਗ੍ਰਾਂਟ"
  },
  "Programme sponsorship": {
    en: "Programme sponsorship",
    pa: "ਪ੍ਰੋਗਰਾਮ ਸਪਾਂਸਰਸ਼ਿਪ"
  },
  "Employee engagement": {
    en: "Employee engagement",
    pa: "ਕਰਮਚਾਰੀ ਭਾਗੀਦਾਰੀ"
  },
  "Multi-state programme": {
    en: "Multi-state programme",
    pa: "ਬਹੁ-ਰਾਜ ਪ੍ਰੋਗਰਾਮ"
  },
  "Areas of interest": {
    en: "Areas of interest",
    pa: "ਦਿਲਚਸਪੀ ਦੇ ਖੇਤਰ"
  },
  "Women and girls, mental health, menstrual health, education, substance-abuse awareness, community health, culture or multiple areas.": {
    en: "Women and girls, mental health, menstrual health, education, substance-abuse awareness, community health, culture or multiple areas.",
    pa: "ਔਰਤਾਂ ਅਤੇ ਲੜਕੀਆਂ, ਮਾਨਸਿਕ ਸਿਹਤ, ਮਾਹਵਾਰੀ ਸਿਹਤ, ਸਿੱਖਿਆ, ਨਸ਼ੇ ਦੀ ਵਰਤੋਂ ਬਾਰੇ ਜਾਗਰੂਕਤਾ, ਭਾਈਚਾਰਕ ਸਿਹਤ, ਸਭਿਆਚਾਰ ਜਾਂ ਬਹੁ-ਖੇਤਰ।"
  },
  "Geographic scope": {
    en: "Geographic scope",
    pa: "ਭੂਗੋਲਿਕ ਦਾਇਰਾ"
  },
  "One community, one state, multiple states or pan-India programmes can be discussed based on requirements and local implementation needs.": {
    en: "One community, one state, multiple states or pan-India programmes can be discussed based on requirements and local implementation needs.",
    pa: "ਜ਼ਰੂਰਤਾਂ ਅਤੇ ਸਥਾਨਕ ਲਾਗੂਕਰਨ ਦੀਆਂ ਲੋੜਾਂ ਦੇ ਆਧਾਰ 'ਤੇ ਇੱਕ ਭਾਈਚਾਰੇ, ਇੱਕ ਰਾਜ, ਬਹੁ-ਰਾਜਾਂ ਜਾਂ ਪੂਰੇ ਭਾਰਤ ਦੇ ਪ੍ਰੋਗਰਾਮਾਂ ਬਾਰੇ ਚਰਚਾ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ।"
  },
  "Email our partnership team": {
    en: "Email our partnership team",
    pa: "ਸਾਡੀ ਭਾਈਵਾਲੀ ਟੀਮ ਨੂੰ ਈਮੇਲ ਕਰੋ"
  },
  "Internships and volunteering": {
    en: "Internships and volunteering",
    pa: "ਇੰਟਰਨਸ਼ਿਪ ਅਤੇ ਵਲੰਟੀਅਰ ਸੇਵਾ"
  },
  "Internships & Volunteering": {
    en: "Internships & Volunteering",
    pa: "ਇੰਟਰਨਸ਼ਿਪਾਂ ਅਤੇ ਵਲੰਟੀਅਰਿੰਗ"
  },
  "University students can gain practical experience through social research, programme delivery, communication and community engagement with Punjabi Samvad.": {
    en: "University students can gain practical experience through social research, programme delivery, communication and community engagement with Punjabi Samvad.",
    pa: "ਯੂਨੀਵਰਸਿਟੀ ਦੇ ਵਿਦਿਆਰਥੀ ਪੰਜਾਬੀ ਸੰਵਾਦ ਨਾਲ ਸਮਾਜਿਕ ਖੋਜ, ਪ੍ਰੋਗਰਾਮ ਦੀ ਪੇਸ਼ਕਾਰੀ, ਸੰਚਾਰ ਅਤੇ ਭਾਈਚਾਰਕ ਰੁਝੇਵਿਆਂ ਰਾਹੀਂ ਵਿਹਾਰਕ ਅਨੁਭਵ ਪ੍ਰਾਪਤ ਕਰ ਸਕਦੇ ਹਨ।"
  },
  "Support awareness sessions, outreach and programme preparation under the guidance of the Punjabi Samvad team.": {
    en: "Support awareness sessions, outreach and programme preparation under the guidance of the Punjabi Samvad team.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਟੀਮ ਦੀ ਅਗਵਾਈ ਹੇਠ ਜਾਗਰੂਕਤਾ ਸੈਸ਼ਨਾਂ, ਆਊਟਰੀਚ ਅਤੇ ਪ੍ਰੋਗਰਾਮ ਦੀ ਤਿਆਰੀ ਵਿੱਚ ਸਹਾਇਤਾ ਕਰੋ।"
  },
  "Research and documentation": {
    en: "Research and documentation",
    pa: "ਖੋਜ ਅਤੇ ਦਸਤਾਵੇਜ਼ੀਕਰਨ"
  },
  "Assist with background research, programme records, participant feedback and material for future planning.": {
    en: "Assist with background research, programme records, participant feedback and material for future planning.",
    pa: "ਪਿਛੋਕੜ ਦੀ ਖੋਜ, ਪ੍ਰੋਗਰਾਮ ਦੇ ਰਿਕਾਰਡ, ਭਾਗੀਦਾਰਾਂ ਦੀ ਫੀਡਬੈਕ ਅਤੇ ਭਵਿੱਖ ਦੀ ਯੋਜਨਾਬੰਦੀ ਲਈ ਸਮੱਗਰੀ ਵਿੱਚ ਮਦਦ ਕਰੋ।"
  },
  "Literature and communication": {
    en: "Literature and communication",
    pa: "ਸਾਹਿਤ ਅਤੇ ਸੰਚਾਰ"
  },
  "Contribute to literary campaigns, cultural work, educational material and digital awareness.": {
    en: "Contribute to literary campaigns, cultural work, educational material and digital awareness.",
    pa: "ਸਾਹਿਤਕ ਮੁਹਿੰਮਾਂ, ਸੱਭਿਆਚਾਰਕ ਕੰਮਾਂ, ਵਿਦਿਅਕ ਸਮੱਗਰੀ ਅਤੇ ਡਿਜੀਟਲ ਜਾਗਰੂਕਤਾ ਵਿੱਚ ਯੋਗਦਾਨ ਦਿਓ।"
  },
  "Volunteer and professional support": {
    en: "Volunteer and professional support",
    pa: "ਵਲੰਟੀਅਰ ਅਤੇ ਪੇਸ਼ੇਵਰ ਸਹਿਯੋਗ"
  },
  "People with relevant time or expertise may support events, training, health education, arts and programme planning.": {
    en: "People with relevant time or expertise may support events, training, health education, arts and programme planning.",
    pa: "ਢੁਕਵਾਂ ਸਮਾਂ ਜਾਂ ਮਹਾਰਤ ਰੱਖਣ ਵਾਲੇ ਵਿਅਕਤੀ ਸਮਾਗਮਾਂ, ਸਿਖਲਾਈ, ਸਿਹਤ ਸਿੱਖਿਆ, ਕਲਾ ਅਤੇ ਪ੍ਰੋਗਰਾਮ ਦੀ ਯੋਜਨਾਬੰਦੀ ਵਿੱਚ ਸਹਾਇਤਾ ਕਰ ਸਕਦੇ ਹਨ।"
  },
  "Apply or enquire": {
    en: "Apply or enquire",
    pa: "ਅਪਲਾਈ ਕਰੋ ਜਾਂ ਪੁੱਛਗਿੱਛ ਕਰੋ"
  },
  "Make change possible": {
    en: "Make change possible",
    pa: "ਬਦਲਾਅ ਨੂੰ ਸੰਭਵ ਬਣਾਓ"
  },
  "Support Our Work": {
    en: "Support Our Work",
    pa: "ਸਾਡੇ ਕੰਮ ਨੂੰ ਸਹਿਯੋਗ ਦਿਓ"
  },
  "Donations help sustain current work and extend programmes where additional resources are available.": {
    en: "Donations help sustain current work and extend programmes where additional resources are available.",
    pa: "ਦਾਨ ਮੌਜੂਦਾ ਕੰਮ ਨੂੰ ਜਾਰੀ ਰੱਖਣ ਅਤੇ ਵਾਧੂ ਸਰੋਤ ਉਪਲਬਧ ਹੋਣ 'ਤੇ ਪ੍ਰੋਗਰਾਮਾਂ ਦਾ ਵਿਸਥਾਰ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਨ।"
  },
  "Support a specific programme": {
    en: "Support a specific programme",
    pa: "ਕਿਸੇ ਖ਼ਾਸ ਪ੍ਰੋਗਰਾਮ ਨੂੰ ਸਹਿਯੋਗ ਦਿਓ"
  },
  "Choose an area aligned with your interests and discuss current priorities with us.": {
    en: "Choose an area aligned with your interests and discuss current priorities with us.",
    pa: "ਆਪਣੀ ਰੁਚੀ ਦੇ ਅਨੁਕੂਲ ਖੇਤਰ ਚੁਣੋ ਅਤੇ ਸਾਡੇ ਨਾਲ ਮੌਜੂਦਾ ਪਹਿਲਕਦਮੀਆਂ 'ਤੇ ਚਰਚਾ ਕਰੋ।"
  },
  "Support where needed": {
    en: "Support where needed",
    pa: "ਜਿੱਥੇ ਸਭ ਤੋਂ ਵੱਧ ਲੋੜ ਹੈ, ਉੱਥੇ ਸਹਿਯੋਗ ਦਿਓ"
  },
  "Unrestricted contributions allow flexibility to respond to current programme and organisational needs.": {
    en: "Unrestricted contributions allow flexibility to respond to current programme and organisational needs.",
    pa: "ਅਪ੍ਰਤੀਬੰਧਿਤ ਯੋਗਦਾਨ ਮੌਜੂਦਾ ਪ੍ਰੋਗਰਾਮ ਅਤੇ ਸੰਗਠਨਾਤਮਕ ਲੋੜਾਂ ਅਨੁਸਾਰ ਕੰਮ ਕਰਨ ਦੀ ਲਚਕਤਾ ਦਿੰਦੇ ਹਨ।"
  },
  "CSR & institutional funding": {
    en: "CSR & institutional funding",
    pa: "CSR ਅਤੇ ਸੰਸਥਾਗਤ ਵਿੱਤੀ ਸਹਿਯੋਗ"
  },
  "Structured partnerships can support clearly defined programmes across one or multiple locations.": {
    en: "Structured partnerships can support clearly defined programmes across one or multiple locations.",
    pa: "ਸੰਰਚਨਾਤਮਕ ਭਾਈਵਾਲੀ ਇੱਕ ਜਾਂ ਵੱਖ-ਵੱਖ ਸਥਾਨਾਂ 'ਤੇ ਸਪਸ਼ਟ ਤੌਰ 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਪ੍ਰੋਗਰਾਮਾਂ ਦਾ ਸਮਰਥਨ ਕਰ ਸਕਦੀ ਹੈ।"
  },
  "80G approval": {
    en: "80G approval",
    pa: "80G ਮਨਜ਼ੂਰੀ"
  },
  "Eligible donations may qualify for tax benefits under applicable provisions. Please consult your tax adviser.": {
    en: "Eligible donations may qualify for tax benefits under applicable provisions. Please consult your tax adviser.",
    pa: "ਯੋਗ ਦਾਨ ਲਾਗੂ ਨਿਯਮਾਂ ਦੇ ਤਹਿਤ ਕਰ ਲਾਭਾਂ ਲਈ ਯੋਗ ਹੋ ਸਕਦੇ ਹਨ। ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੇ ਟੈਕਸ ਸਲਾਹਕਾਰ ਨਾਲ ਸਲਾਹ ਕਰੋ।"
  },
  "Contact us to support": {
    en: "Contact us to support",
    pa: "ਸਹਿਯੋਗ ਦੇਣ ਲਈ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ"
  },
  "Our work in pictures": {
    en: "Our work in pictures",
    pa: "ਤਸਵੀਰਾਂ ਵਿੱਚ ਸਾਡਾ ਕੰਮ"
  },
  "Photographs from programmes, workshops, community activities, cultural events and partnerships.": {
    en: "Photographs from programmes, workshops, community activities, cultural events and partnerships.",
    pa: "ਪ੍ਰੋਗਰਾਮਾਂ, ਵਰਕਸ਼ਾਪਾਂ, ਸਮੁਦਾਇਕ ਗਤੀਵਿਧੀਆਂ, ਸੱਭਿਆਚਾਰਕ ਸਮਾਗਮਾਂ ਅਤੇ ਭਾਈਵਾਲੀਆਂ ਦੀਆਂ ਤਸਵੀਰਾਂ।"
  },
  "Education, vocational skills and awareness activities.": {
    en: "Education, vocational skills and awareness activities.",
    pa: "ਸਿੱਖਿਆ, ਕਿੱਤਾਮੁਖੀ ਹੁਨਰ ਅਤੇ ਜਾਗਰੂਕਤਾ ਗਤੀਵਿਧੀਆਂ।"
  },
  "Health & Well-being": {
    en: "Health & Well-being",
    pa: "ਸਿਹਤ ਅਤੇ ਤੰਦਰੁਸਤੀ"
  },
  "Mental-health, menstrual-health and HIV/AIDS awareness.": {
    en: "Mental-health, menstrual-health and HIV/AIDS awareness.",
    pa: "ਮਾਨਸਿਕ-ਸਿਹਤ, ਮਾਹਵਾਰੀ-ਸਿਹਤ ਅਤੇ ਐੱਚਆਈਵੀ/ਏਡਜ਼ ਜਾਗਰੂਕਤਾ।"
  },
  "Lectures, seminars and community outreach.": {
    en: "Lectures, seminars and community outreach.",
    pa: "ਲੈਕਚਰ, ਸੈਮੀਨਾਰ ਅਤੇ ਭਾਈਚਾਰਕ ਪਹੁੰਚ।"
  },
  "Student engagement, internships, mentoring and participation.": {
    en: "Student engagement, internships, mentoring and participation.",
    pa: "ਵਿਦਿਆਰਥੀਆਂ ਦੀ ਸ਼ਮੂਲੀਅਤ, ਇੰਟਰਨਸ਼ਿਪ, ਮਾਰਗਦਰਸ਼ਨ ਅਤੇ ਭਾਗੀਦਾਰੀ।"
  },
  "Culture & Theatre": {
    en: "Culture & Theatre",
    pa: "ਸੱਭਿਆਚਾਰ ਅਤੇ ਰੰਗਮੰਚ"
  },
  "Theatre productions, cultural programmes and artistic activities.": {
    en: "Theatre productions, cultural programmes and artistic activities.",
    pa: "ਥੀਏਟਰ ਪੇਸ਼ਕਾਰੀਆਂ, ਸੱਭਿਆਚਾਰਕ ਪ੍ਰੋਗਰਾਮ ਅਤੇ ਕਲਾਤਮਕ ਗਤੀਵਿਧੀਆਂ।"
  },
  "Community & Partnerships": {
    en: "Community & Partnerships",
    pa: "ਭਾਈਚਾਰਾ ਅਤੇ ਸਾਂਝੇਦਾਰੀ"
  },
  "Grassroots work and institutional collaborations.": {
    en: "Grassroots work and institutional collaborations.",
    pa: "ਜ਼ਮੀਨੀ ਪੱਧਰ 'ਤੇ ਕੰਮ ਅਤੇ ਸੰਸਥਾਗਤ ਸਹਿਯੋਗ।"
  },
  "Explore our programmes": {
    en: "Explore our programmes",
    pa: "ਸਾਡੇ ਪ੍ਰੋਗਰਾਮਾਂ ਦੀ ਪੜਚੋਲ ਕਰੋ"
  },
  "Latest": {
    en: "Latest",
    pa: "ਤਾਜ਼ਾ"
  },
  "Latest news and activities from Punjabi Samvad.": {
    en: "Latest news and activities from Punjabi Samvad.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀਆਂ ਤਾਜ਼ਾ ਖ਼ਬਰਾਂ ਅਤੇ ਗਤੀਵਿਧੀਆਂ।"
  },
  "Mental-Health Awareness in Schools": {
    en: "Mental-Health Awareness in Schools",
    pa: "ਸਕੂਲਾਂ ਵਿੱਚ ਮਾਨਸਿਕ ਸਿਹਤ ਜਾਗਰੂਕਤਾ"
  },
  "Making emotional well-being easier for young people to understand and discuss.": {
    en: "Making emotional well-being easier for young people to understand and discuss.",
    pa: "ਨੌਜਵਾਨਾਂ ਲਈ ਭਾਵਨਾਤਮਕ ਤੰਦਰੁਸਤੀ ਨੂੰ ਸਮਝਣਾ ਅਤੇ ਇਸ 'ਤੇ ਚਰਚਾ ਕਰਨਾ ਆਸਾਨ ਬਣਾਉਣਾ।"
  },
  "Menstrual-Health Awareness": {
    en: "Menstrual-Health Awareness",
    pa: "ਮਾਹਵਾਰੀ ਸਿਹਤ ਜਾਗਰੂਕਤਾ"
  },
  "Practical information addressing stigma and misinformation.": {
    en: "Practical information addressing stigma and misinformation.",
    pa: "ਸਮਾਜਿਕ ਕਲੰਕ ਅਤੇ ਗਲਤ ਜਾਣਕਾਰੀ ਨੂੰ ਦੂਰ ਕਰਨ ਵਾਲੀ ਵਿਵਹਾਰਕ ਜਾਣਕਾਰੀ।"
  },
  "Anti-Drug Awareness in Rural Communities": {
    en: "Anti-Drug Awareness in Rural Communities",
    pa: "ਪੇਂਡੂ ਭਾਈਚਾਰਿਆਂ ਵਿੱਚ ਨਸ਼ਾ ਵਿਰੋਧੀ ਜਾਗਰੂਕਤਾ"
  },
  "Grassroots lectures and Tirhayi Umar communicate the human impact of substance abuse.": {
    en: "Grassroots lectures and Tirhayi Umar communicate the human impact of substance abuse.",
    pa: "ਜ਼ਮੀਨੀ ਪੱਧਰ ਦੇ ਲੈਕਚਰ ਅਤੇ 'ਤਿਰਹਾਈ ਉਮਰ' ਨਸ਼ਿਆਂ ਦੀ ਵਰਤੋਂ ਦੇ ਮਨੁੱਖੀ ਪ੍ਰਭਾਵਾਂ ਨੂੰ ਦਰਸਾਉਂਦੇ ਹਨ।"
  },
  "52,000+ reached": {
    en: "52,000+ reached",
    pa: "52,000+ ਲੋਕਾਂ ਤੱਕ ਪਹੁੰਚ"
  },
  "Theatre addressing female foeticide, discrimination and dignity.": {
    en: "Theatre addressing female foeticide, discrimination and dignity.",
    pa: "ਕੰਨਿਆ ਭਰੂਣ ਹੱਤਿਆ, ਵਿਤਕਰੇ ਅਤੇ ਸਨਮਾਨ ਨੂੰ ਸੰਬੋਧਿਤ ਕਰਦਾ ਰੰਗਮੰਚ।"
  },
  "1,100,000+ reached": {
    en: "1,100,000+ reached",
    pa: "1,100,000+ ਲੋਕਾਂ ਤੱਕ ਪਹੁੰਚ"
  },
  "Education for Girls": {
    en: "Education for Girls",
    pa: "ਲੜਕੀਆਂ ਲਈ ਸਿੱਖਿਆ"
  },
  "Educational support and initiatives intended to reduce barriers to learning.": {
    en: "Educational support and initiatives intended to reduce barriers to learning.",
    pa: "ਸਿੱਖਣ ਵਿੱਚ ਆਉਣ ਵਾਲੀਆਂ ਰੁਕਾਵਟਾਂ ਨੂੰ ਘੱਟ ਕਰਨ ਦੇ ਉਦੇਸ਼ ਨਾਲ ਵਿਦਿਅਕ ਸਹਾਇਤਾ ਅਤੇ ਪਹਿਲਕਦਮੀਆਂ।"
  },
  "Punjabi Culture & Youth": {
    en: "Punjabi Culture & Youth",
    pa: "ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ ਅਤੇ ਨੌਜਵਾਨ"
  },
  "Creative platforms connecting young people with Punjabi heritage.": {
    en: "Creative platforms connecting young people with Punjabi heritage.",
    pa: "ਨੌਜਵਾਨਾਂ ਨੂੰ ਪੰਜਾਬੀ ਵਿਰਸੇ ਨਾਲ ਜੋੜਨ ਵਾਲੇ ਸਿਰਜਣਾਤਮਕ ਪਲੇਟਫਾਰਮ।"
  },
  "Accountability": {
    en: "Accountability",
    pa: "ਜਵਾਬਦੇਹੀ"
  },
  "Transparency & Compliance": {
    en: "Transparency & Compliance",
    pa: "ਪਾਰਦਰਸ਼ਤਾ ਅਤੇ ਕਾਨੂੰਨੀ ਪਾਲਣਾ"
  },
  "Clear information about Punjabi Samvad’s legal status, registrations and approvals.": {
    en: "Clear information about Punjabi Samvad’s legal status, registrations and approvals.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀ ਕਾਨੂੰਨੀ ਸਥਿਤੀ, ਰਜਿਸਟ੍ਰੇਸ਼ਨਾਂ ਅਤੇ ਮਨਜ਼ੂਰੀਆਂ ਬਾਰੇ ਸਪੱਸ਼ਟ ਜਾਣਕਾਰੀ।"
  },
  "Organisation details": {
    en: "Organisation details",
    pa: "ਸੰਸਥਾ ਦੇ ਵੇਰਵੇ"
  },
  "Registered under the Societies Registration Act, 1860.": {
    en: "Registered under the Societies Registration Act, 1860.",
    pa: "ਸੋਸਾਇਟੀਜ਼ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਐਕਟ, 1860 ਦੇ ਤਹਿਤ ਰਜਿਸਟਰਡ।"
  },
  "Registration No. 75": {
    en: "Registration No. 75",
    pa: "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਨੰ. 75"
  },
  "Registered 02 July 2009": {
    en: "Registered 02 July 2009",
    pa: "ਰਜਿਸਟਰਡ 02 ਜੁਲਾਈ 2009"
  },
  "PAN: AACAP2577N": {
    en: "PAN: AACAP2577N",
    pa: "ਪੈਨ: AACAP2577N"
  },
  "NGO Darpan: PB/2017/0156494": {
    en: "NGO Darpan: PB/2017/0156494",
    pa: "ਐਨਜੀਓ ਦਰਪਣ: PB/2017/0156494"
  },
  "Registered office: 293, Green Avenue, Amritsar, Punjab 143001": {
    en: "Registered office: 293, Green Avenue, Amritsar, Punjab 143001",
    pa: "ਰਜਿਸਟਰਡ ਦਫ਼ਤਰ: 293, ਗ੍ਰੀਨ ਐਵੇਨਿਊ, ਅੰਮ੍ਰਿਤਸਰ, ਪੰਜਾਬ 143001"
  },
  "12AB Registration": {
    en: "12AB Registration",
    pa: "12AB ਰਜਿਸਟ੍ਰੇਸ਼ਨ"
  },
  "Granted under Section 12AB(1)(b).": {
    en: "Granted under Section 12AB(1)(b).",
    pa: "ਧਾਰਾ 12AB(1)(b) ਦੇ ਤਹਿਤ ਮਨਜ਼ੂਰ।"
  },
  "Registration: AACAP2577N25CD01": {
    en: "Registration: AACAP2577N25CD01",
    pa: "ਰਜਿਸਟ੍ਰੇਸ਼ਨ: AACAP2577N25CD01"
  },
  "Approval date: 06 March 2026": {
    en: "Approval date: 06 March 2026",
    pa: "ਮਨਜ਼ੂਰੀ ਦੀ ਮਿਤੀ: 06 ਮਾਰਚ 2026"
  },
  "Assessment years: 2027–28 to 2036–37": {
    en: "Assessment years: 2027–28 to 2036–37",
    pa: "ਮੁਲਾਂਕਣ ਸਾਲ: 2027–28 ਤੋਂ 2036–37"
  },
  "80G Approval": {
    en: "80G Approval",
    pa: "80G ਮਨਜ਼ੂਰੀ"
  },
  "Approved under Section 80G(5).": {
    en: "Approved under Section 80G(5).",
    pa: "ਧਾਰਾ 80G(5) ਦੇ ਤਹਿਤ ਮਨਜ਼ੂਰ।"
  },
  "Approval: AACAP2577N25CD01": {
    en: "Approval: AACAP2577N25CD01",
    pa: "ਮਨਜ਼ੂਰੀ: AACAP2577N25CD01"
  },
  "Assessment years: 2027–28 to 2031–32": {
    en: "Assessment years: 2027–28 to 2031–32",
    pa: "ਮੁਲਾਂਕਣ ਸਾਲ: 2027–28 ਤੋਂ 2031–32"
  },
  "Documents": {
    en: "Documents",
    pa: "ਦਸਤਾਵੇਜ਼"
  },
  "Registration certificate, CSR registration, NGO Darpan registration, 12AB and 80G approval orders are maintained by the organisation.": {
    en: "Registration certificate, CSR registration, NGO Darpan registration, 12AB and 80G approval orders are maintained by the organisation.",
    pa: "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਸਰਟੀਫਿਕੇਟ, ਸੀਐਸਆਰ ਰਜਿਸਟ੍ਰੇਸ਼ਨ, ਐਨਜੀਓ ਦਰਪਣ ਰਜਿਸਟ੍ਰੇਸ਼ਨ, 12AB ਅਤੇ 80G ਮਨਜ਼ੂਰੀ ਦੇ ਆਰਡਰ ਸੰਸਥਾ ਦੁਆਰਾ ਰੱਖੇ ਗਏ ਹਨ।"
  },
  "Request information": {
    en: "Request information",
    pa: "ਜਾਣਕਾਰੀ ਦੀ ਬੇਨਤੀ ਕਰੋ"
  },
  "Useful information": {
    en: "Useful information",
    pa: "ਲਾਭਦਾਇਕ ਜਾਣਕਾਰੀ"
  },
  "Frequently Asked Questions": {
    en: "Frequently Asked Questions",
    pa: "ਅਕਸਰ ਪੁੱਛੇ ਜਾਂਦੇ ਸਵਾਲ"
  },
  "Quick answers about Punjabi Samvad, our programmes, partnerships and ways to contribute.": {
    en: "Quick answers about Punjabi Samvad, our programmes, partnerships and ways to contribute.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ, ਸਾਡੇ ਪ੍ਰੋਗਰਾਮਾਂ, ਭਾਈਵਾਲੀਆਂ ਅਤੇ ਯੋਗਦਾਨ ਦੇਣ ਦੇ ਤਰੀਕਿਆਂ ਬਾਰੇ ਛੋਟੇ ਤੇ ਸਪਸ਼ਟ ਜਵਾਬ।"
  },
  "What is Punjabi Samvad?": {
    en: "What is Punjabi Samvad?",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਕੀ ਹੈ?"
  },
  "A national NGO headquartered in Amritsar working across empowerment, education, mental health, menstrual health, youth, substance-abuse awareness, HIV/AIDS and culture.": {
    en: "A national NGO headquartered in Amritsar working across empowerment, education, mental health, menstrual health, youth, substance-abuse awareness, HIV/AIDS and culture.",
    pa: "ਅੰਮ੍ਰਿਤਸਰ ਵਿੱਚ ਮੁੱਖ ਦਫ਼ਤਰ ਵਾਲੀ ਇੱਕ ਰਾਸ਼ਟਰੀ ਐਨਜੀਓ ਜੋ ਸ਼ਕਤੀਕਰਨ, ਸਿੱਖਿਆ, ਮਾਨਸਿਕ ਸਿਹਤ, ਮਹਾਵਾਰੀ ਸਿਹਤ, ਨੌਜਵਾਨਾਂ, ਨਸ਼ੇ ਦੀ ਵਰਤੋਂ ਬਾਰੇ ਜਾਗਰੂਕਤਾ, ਐਚਆਈਵੀ/ਏਡਜ਼ ਅਤੇ ਸੱਭਿਆਚਾਰ ਦੇ ਖੇਤਰਾਂ ਵਿੱਚ ਕੰਮ ਕਰ ਰਹੀ ਹੈ।"
  },
  "When did Punjabi Samvad begin?": {
    en: "When did Punjabi Samvad begin?",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀ ਸ਼ੁਰੂਆਤ ਕਦੋਂ ਹੋਈ?"
  },
  "The journey began in 2004 with Amit Bawa and Jyoti Bawa. Formal registration followed on 02 July 2009.": {
    en: "The journey began in 2004 with Amit Bawa and Jyoti Bawa. Formal registration followed on 02 July 2009.",
    pa: "ਇਹ ਯਾਤਰਾ 2004 ਵਿੱਚ ਅਮਿਤ ਬਾਵਾ ਅਤੇ ਜੋਤੀ ਬਾਵਾ ਨਾਲ ਸ਼ੁਰੂ ਹੋਈ ਸੀ। ਰਸਮੀ ਰਜਿਸਟ੍ਰੇਸ਼ਨ 02 ਜੁਲਾਈ 2009 ਨੂੰ ਹੋਈ।"
  },
  "Where do you work?": {
    en: "Where do you work?",
    pa: "ਤੁਸੀਂ ਕਿੱਥੇ ਕੰਮ ਕਰਦੇ ਹੋ?"
  },
  "Our grassroots experience is rooted in Punjab, while we welcome partnerships with a wider national and multi-state focus.": {
    en: "Our grassroots experience is rooted in Punjab, while we welcome partnerships with a wider national and multi-state focus.",
    pa: "ਸਾਡਾ ਜ਼ਮੀਨੀ ਤਜਰਬਾ ਪੰਜਾਬ ਵਿੱਚ ਜੜਿਆ ਹੋਇਆ ਹੈ, ਜਦੋਂ ਕਿ ਅਸੀਂ ਵਧੇਰੇ ਰਾਸ਼ਟਰੀ ਅਤੇ ਬਹੁ-ਰਾਜੀ ਫੋਕਸ ਵਾਲੀਆਂ ਭਾਈਵਾਲੀ ਦਾ ਸਵਾਗਤ ਕਰਦੇ ਹਾਂ।"
  },
  "Can companies partner for CSR programmes?": {
    en: "Can companies partner for CSR programmes?",
    pa: "ਕੀ ਕੰਪਨੀਆਂ CSR ਪ੍ਰੋਗਰਾਮਾਂ ਲਈ ਤੁਹਾਡੇ ਨਾਲ ਭਾਈਵਾਲੀ ਕਰ ਸਕਦੀਆਂ ਹਨ?"
  },
  "Yes. Punjabi Samvad holds CSR Registration No. CSR00032253.": {
    en: "Yes. Punjabi Samvad holds CSR Registration No. CSR00032253.",
    pa: "ਹਾਂ। ਪੰਜਾਬੀ ਸੰਵਾਦ ਕੋਲ CSR ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਨੰਬਰ CSR00032253 ਹੈ।"
  },
  "Can I fund a specific programme?": {
    en: "Can I fund a specific programme?",
    pa: "ਕੀ ਮੈਂ ਕਿਸੇ ਖ਼ਾਸ ਪ੍ਰੋਗਰਾਮ ਨੂੰ ਵਿੱਤੀ ਸਹਿਯੋਗ ਦੇ ਸਕਦਾ/ਸਕਦੀ ਹਾਂ?"
  },
  "Yes, depending on current priorities. Contact us to discuss the work you want to support.": {
    en: "Yes, depending on current priorities. Contact us to discuss the work you want to support.",
    pa: "ਹਾਂ, ਮੌਜੂਦਾ ਤਰਜੀਹਾਂ 'ਤੇ ਨਿਰਭਰ ਕਰਦਾ ਹੈ। ਉਸ ਕੰਮ ਬਾਰੇ ਚਰਚਾ ਕਰਨ ਲਈ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ ਜਿਸਦਾ ਤੁਸੀਂ ਸਮਰਥਨ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ।"
  },
  "Do you accept volunteers and interns?": {
    en: "Do you accept volunteers and interns?",
    pa: "ਕੀ ਤੁਸੀਂ ਵਲੰਟੀਅਰ ਅਤੇ ਇੰਟਰਨ ਸਵੀਕਾਰ ਕਰਦੇ ਹੋ?"
  },
  "Yes, subject to current programmes, locations and requirements.": {
    en: "Yes, subject to current programmes, locations and requirements.",
    pa: "ਹਾਂ, ਮੌਜੂਦਾ ਪ੍ਰੋਗਰਾਮਾਂ, ਸਥਾਨਾਂ ਅਤੇ ਲੋੜਾਂ ਦੇ ਅਧੀਨ।"
  },
  "Do you have 80G approval?": {
    en: "Do you have 80G approval?",
    pa: "ਕੀ ਪੰਜਾਬੀ ਸੰਵਾਦ ਕੋਲ 80G ਮਨਜ਼ੂਰੀ ਹੈ?"
  },
  "Yes. Eligible donations may qualify for tax benefits under applicable provisions.": {
    en: "Yes. Eligible donations may qualify for tax benefits under applicable provisions.",
    pa: "ਹਾਂ। ਯੋਗ ਦਾਨ ਲਾਗੂ ਨਿਯਮਾਂ ਦੇ ਤਹਿਤ ਟੈਕਸ ਲਾਭਾਂ ਲਈ ਯੋਗ ਹੋ ਸਕਦੇ ਹਨ।"
  },
  "Ask another question": {
    en: "Ask another question",
    pa: "ਹੋਰ ਸਵਾਲ ਪੁੱਛੋ"
  },
  "Start a Samvad": {
    en: "Start a Samvad",
    pa: "ਇੱਕ ਸੰਵਾਦ ਸ਼ੁਰੂ ਕਰੋ"
  },
  "Contact Punjabi Samvad": {
    en: "Contact Punjabi Samvad",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਨਾਲ ਸੰਪਰਕ ਕਰੋ"
  },
  "Discuss a programme, partnership, donation, volunteer opportunity, internship or general enquiry.": {
    en: "Discuss a programme, partnership, donation, volunteer opportunity, internship or general enquiry.",
    pa: "ਕਿਸੇ ਪ੍ਰੋਗਰਾਮ, ਭਾਈਵਾਲੀ, ਦਾਨ, ਵਲੰਟੀਅਰ ਮੌਕੇ, ਇੰਟਰਨਸ਼ਿਪ ਜਾਂ ਆਮ ਪੁੱਛਗਿੱਛ ਲਈ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।"
  },
  "Registered office": {
    en: "Registered office",
    pa: "ਰਜਿਸਟਰਡ ਦਫ਼ਤਰ"
  },
  "293, Green Avenue": {
    en: "293, Green Avenue",
    pa: "293, ਗ੍ਰੀਨ ਐਵੇਨਿਊ"
  },
  "Amritsar, Punjab 143001": {
    en: "Amritsar, Punjab 143001",
    pa: "ਅੰਮ੍ਰਿਤਸਰ, ਪੰਜਾਬ 143001"
  },
  "India": {
    en: "India",
    pa: "ਭਾਰਤ"
  },
  "Phone & email": {
    en: "Phone & email",
    pa: "ਫ਼ੋਨ ਅਤੇ ਈਮੇਲ"
  },
  "+91 87280 33911": {
    en: "+91 87280 33911",
    pa: "+91 87280 33911"
  },
  "punjabisamvadasr@gmail.com": {
    en: "punjabisamvadasr@gmail.com",
    pa: "punjabisamvadasr@gmail.com"
  },
  "Contact person": {
    en: "Contact person",
    pa: "ਸੰਪਰਕ ਵਿਅਕਤੀ"
  },
  "Jyoti Bawa": {
    en: "Jyoti Bawa",
    pa: "ਜੋਤੀ ਬਾਵਾ"
  },
  "President, Punjabi Samvad": {
    en: "President, Punjabi Samvad",
    pa: "ਪ੍ਰਧਾਨ, ਪੰਜਾਬੀ ਸੰਵਾਦ"
  },
  "What can you help with?": {
    en: "What can you help with?",
    pa: "ਤੁਸੀਂ ਕਿਸ ਚੀਜ਼ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦੇ ਹੋ?"
  },
  "CSR partnership, institutional collaboration, national programmes, volunteering, internships, programme information, support, media or events.": {
    en: "CSR partnership, institutional collaboration, national programmes, volunteering, internships, programme information, support, media or events.",
    pa: "ਸੀ.ਐੱਸ.ਆਰ. ਭਾਈਵਾਲੀ, ਸੰਸਥਾਗਤ ਸਹਿਯੋਗ, ਰਾਸ਼ਟਰੀ ਪ੍ਰੋਗਰਾਮ, ਵਾਲੰਟੀਅਰਿੰਗ, ਇੰਟਰਨਸ਼ਿਪ, ਪ੍ਰੋਗਰਾਮ ਦੀ ਜਾਣਕਾਰੀ, ਸਹਾਇਤਾ, ਮੀਡੀਆ ਜਾਂ ਸਮਾਗਮ।"
  },
  "Send an email": {
    en: "Send an email",
    pa: "ਈਮੇਲ ਭੇਜੋ"
  },
  "Punjabi Samvad creates space for people to ask questions, share experience and participate in the issues that affect their lives.": {
    en: "Punjabi Samvad creates space for people to ask questions, share experience and participate in the issues that affect their lives.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਲੋਕਾਂ ਲਈ ਸਵਾਲ ਪੁੱਛਣ, ਆਪਣੇ ਤਜਰਬੇ ਸਾਂਝੇ ਕਰਨ ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਜੀਵਨ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲੇ ਮੁੱਦਿਆਂ ਵਿੱਚ ਹਿੱਸਾ ਲੈਣ ਲਈ ਇੱਕ ਮੰਚ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।"
  },
  "Public-health resource": {
    en: "Public-health resource",
    pa: "ਜਨਤਕ-ਸਿਹਤ ਸਰੋਤ"
  },
  "Private HIV self-risk assessment": {
    en: "Private HIV self-risk assessment",
    pa: "HIV ਲਈ ਨਿੱਜੀ ਸਵੈ-ਜੋਖਮ ਮੁਲਾਂਕਣ"
  },
  "The national self-risk assessment gives people a private way to understand potential HIV and STI risk, find reliable information and take the next step towards testing or treatment. Personal details do not need to be disclosed to Punjabi Samvad.": {
    en: "The national self-risk assessment gives people a private way to understand potential HIV and STI risk, find reliable information and take the next step towards testing or treatment. Personal details do not need to be disclosed to Punjabi Samvad.",
    pa: "ਰਾਸ਼ਟਰੀ ਸਵੈ-ਜੋਖਮ ਮੁਲਾਂਕਣ ਲੋਕਾਂ ਨੂੰ ਸੰਭਾਵੀ ਐੱਚ.ਆਈ.ਵੀ. ਅਤੇ ਐੱਸ.ਟੀ.ਆਈ. ਜੋਖਮ ਨੂੰ ਸਮਝਣ, ਭਰੋਸੇਯੋਗ ਜਾਣਕਾਰੀ ਪ੍ਰਾਪਤ ਕਰਨ ਅਤੇ ਜਾਂਚ ਜਾਂ ਇਲਾਜ ਵੱਲ ਅਗਲਾ ਕਦਮ ਚੁੱਕਣ ਦਾ ਇੱਕ ਗੁਪਤ ਤਰੀਕਾ ਦਿੰਦਾ ਹੈ। ਪੰਜਾਬੀ ਸੰਵਾਦ ਨਾਲ ਆਪਣੀਆਂ ਨਿੱਜੀ ਵੇਰਵੇ ਸਾਂਝੇ ਕਰਨ ਦੀ ਲੋੜ ਨਹੀਂ ਹੈ।"
  },
  "Scan the code in the official campaign artwork, visit Breakfree India, or call the national AIDS helpline at 1097.": {
    en: "Scan the code in the official campaign artwork, visit Breakfree India, or call the national AIDS helpline at 1097.",
    pa: "ਅਧਿਕਾਰਤ ਮੁਹਿੰਮ ਦੇ ਆਰਟਵਰਕ ਵਿੱਚ ਕੋਡ ਸਕੈਨ ਕਰੋ, ਬ੍ਰੇਕਫ੍ਰੀ ਇੰਡੀਆ 'ਤੇ ਜਾਓ, ਜਾਂ 1097 'ਤੇ ਰਾਸ਼ਟਰੀ ਏਡਜ਼ ਹੈਲਪਲਾਈਨ 'ਤੇ ਕਾਲ ਕਰੋ।"
  },
  "Open Breakfree India": {
    en: "Open Breakfree India",
    pa: "Breakfree India ਖੋਲ੍ਹੋ"
  },
  "Ready to start a conversation?": {
    en: "Ready to start a conversation?",
    pa: "ਗੱਲਬਾਤ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਤਿਆਰ ਹੋ?"
  },
  "Let's create meaningful change together.": {
    en: "Let's create meaningful change together.",
    pa: "ਆਓ, ਮਿਲ ਕੇ ਅਰਥਪੂਰਨ ਬਦਲਾਅ ਲਿਆਈਏ।"
  },
  "./pages/Home": {
    en: "./pages/Home",
    pa: "./pages/Home"
  },
  "./pages/ContentPage": {
    en: "./pages/ContentPage",
    pa: "./pages/ContentPage"
  },
  "./pages/SearchRoute": {
    en: "./pages/SearchRoute",
    pa: "./pages/SearchRoute"
  },
  "./pages/PolicyIndexPage": {
    en: "./pages/PolicyIndexPage",
    pa: "./pages/PolicyIndexPage"
  },
  "./pages/PolicyPage": {
    en: "./pages/PolicyPage",
    pa: "./pages/PolicyPage"
  },
  "./pages/NotFoundPage": {
    en: "./pages/NotFoundPage",
    pa: "./pages/NotFoundPage"
  },
  "Dialogue that moves communities forward.": {
    en: "Dialogue that moves communities forward.",
    pa: "ਸੰਵਾਦ, ਜੋ ਸਮੁਦਾਇਆਂ ਨੂੰ ਅੱਗੇ ਵਧਾਉਂਦਾ ਹੈ।"
  },
  "Punjabi Samvad is a national non-governmental organisation rooted in Punjab. We address social issues through education, public awareness, community participation and creative communication.": {
    en: "Punjabi Samvad is a national non-governmental organisation rooted in Punjab. We address social issues through education, public awareness, community participation and creative communication.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਪੰਜਾਬ ਵਿੱਚ ਜੜ੍ਹਾਂ ਵਾਲੀ ਇੱਕ ਰਾਸ਼ਟਰੀ ਗੈਰ-ਸਰਕਾਰੀ ਸੰਸਥਾ ਹੈ। ਅਸੀਂ ਸਿੱਖਿਆ, ਜਨਤਕ ਜਾਗਰੂਕਤਾ, ਭਾਈਚਾਰਕ ਭਾਗੀਦਾਰੀ ਅਤੇ ਰਚਨਾਤਮਕ ਸੰਚਾਰ ਰਾਹੀਂ ਸਮਾਜਿਕ ਮੁੱਦਿਆਂ ਨੂੰ ਹੱਲ ਕਰਦੇ ਹਾਂ।"
  },
  "Two decades of community-led work": {
    en: "Two decades of community-led work",
    pa: "ਸਮੁਦਾਇਆਂ ਨਾਲ ਦੋ ਦਹਾਕਿਆਂ ਤੋਂ ਵੱਧ ਦਾ ਕੰਮ"
  },
  "Rooted in Punjab": {
    en: "Rooted in Punjab",
    pa: "ਪੰਜਾਬ ਵਿੱਚ ਜੜ੍ਹਾਂ"
  },
  "working with a national outlook": {
    en: "working with a national outlook",
    pa: "ਰਾਸ਼ਟਰੀ ਦ੍ਰਿਸ਼ਟੀਕੋਣ ਨਾਲ ਕੰਮ ਕਰਨਾ"
  },
  "Creative advocacy has been part of our work from the beginning.": {
    en: "Creative advocacy has been part of our work from the beginning.",
    pa: "ਰਚਨਾਤਮਕ ਜਨ-ਜਾਗਰੂਕਤਾ ਸ਼ੁਰੂ ਤੋਂ ਹੀ ਸਾਡੇ ਕੰਮ ਦਾ ਅਹਿਮ ਹਿੱਸਾ ਰਹੀ ਹੈ।"
  },
  "A local response grew into sustained social action.": {
    en: "A local response grew into sustained social action.",
    pa: "ਇੱਕ ਸਥਾਨਕ ਪਹਿਲ ਸਮੇਂ ਦੇ ਨਾਲ ਲਗਾਤਾਰ ਸਮਾਜਿਕ ਕਾਰਜ ਵਿੱਚ ਬਦਲ ਗਈ।"
  },
  "Punjabi Samvad began when Amit Bawa and Jyoti Bawa decided to respond to gender discrimination and other social concerns they saw around them. The organisation was formally registered in 2009.": {
    en: "Punjabi Samvad began when Amit Bawa and Jyoti Bawa decided to respond to gender discrimination and other social concerns they saw around them. The organisation was formally registered in 2009.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀ ਸ਼ੁਰੂਆਤ ਉਦੋਂ ਹੋਈ ਜਦੋਂ ਅਮਿਤ ਬਾਵਾ ਅਤੇ ਜੋਤੀ ਬਾਵਾ ਨੇ ਆਪਣੇ ਆਲੇ-ਦੁਆਲੇ ਦੇਖੇ ਲਿੰਗ ਵਿਤਕਰੇ ਅਤੇ ਹੋਰ ਸਮਾਜਿਕ ਸਰੋਕਾਰਾਂ ਪ੍ਰਤੀ ਹੁੰਗਾਰਾ ਦੇਣ ਦਾ ਫੈਸਲਾ ਕੀਤਾ। ਇਸ ਸੰਸਥਾ ਨੂੰ ਰਸਮੀ ਤੌਰ 'ਤੇ 2009 ਵਿੱਚ ਰਜਿਸਟਰ ਕੀਤਾ ਗਿਆ ਸੀ।"
  },
  "What started as a local effort has grown into more than two decades of work with women, children, young people, schools, communities and institutions.": {
    en: "What started as a local effort has grown into more than two decades of work with women, children, young people, schools, communities and institutions.",
    pa: "ਜੋ ਇੱਕ ਸਥਾਨਕ ਕੋਸ਼ਿਸ਼ ਵਜੋਂ ਸ਼ੁਰੂ ਹੋਇਆ ਸੀ, ਉਹ ਹੁਣ ਔਰਤਾਂ, ਬੱਚਿਆਂ, ਨੌਜਵਾਨਾਂ, ਸਕੂਲਾਂ, ਭਾਈਚਾਰਿਆਂ ਅਤੇ ਸੰਸਥਾਵਾਂ ਨਾਲ ਦੋ ਦਹਾਕਿਆਂ ਤੋਂ ਵੱਧ ਦੇ ਕੰਮ ਵਿੱਚ ਵਧ ਚੁੱਕਾ ਹੈ।"
  },
  "For us, it is a practical way to help people discuss subjects that are often ignored, misunderstood or surrounded by stigma.": {
    en: "For us, it is a practical way to help people discuss subjects that are often ignored, misunderstood or surrounded by stigma.",
    pa: "ਸਾਡੇ ਲਈ, ਇਹ ਲੋਕਾਂ ਨੂੰ ਉਹਨਾਂ ਵਿਸ਼ਿਆਂ 'ਤੇ ਚਰਚਾ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਨ ਦਾ ਇੱਕ ਵਿਹਾਰਕ ਤਰੀਕਾ ਹੈ ਜਿਨ੍ਹਾਂ ਨੂੰ ਅਕਸਰ ਨਜ਼ਰਅੰਦਾਜ਼ ਕੀਤਾ ਜਾਂਦਾ ਹੈ, ਗਲਤ ਸਮਝਿਆ ਜਾਂਦਾ ਹੈ ਜਾਂ ਜਿਨ੍ਹਾਂ ਨਾਲ ਸਮਾਜਿਕ ਕਲੰਕ ਜੁੜਿਆ ਹੁੰਦਾ ਹੈ।"
  },
  "Different concerns. One connected view of community well-being.": {
    en: "Different concerns. One connected view of community well-being.",
    pa: "ਮਸਲੇ ਵੱਖ-ਵੱਖ ਹਨ। ਪਰ ਸਮੁਦਾਇਕ ਭਲਾਈ ਇੱਕ-ਦੂਜੇ ਨਾਲ ਜੁੜੀ ਹੋਈ ਹੈ।"
  },
  "Women’s learning": {
    en: "Women’s learning",
    pa: "ਔਰਤਾਂ ਦੀ ਸਿੱਖਿਆ"
  },
  "Education that builds confidence and opportunity": {
    en: "Education that builds confidence and opportunity",
    pa: "ਸਿੱਖਿਆ, ਜੋ ਆਤਮਵਿਸ਼ਵਾਸ ਅਤੇ ਮੌਕਿਆਂ ਨੂੰ ਵਧਾਏ"
  },
  "Community health": {
    en: "Community health",
    pa: "ਸਮੁਦਾਇਕ ਸਿਹਤ"
  },
  "Health check-ups and practical guidance": {
    en: "Health check-ups and practical guidance",
    pa: "ਸਿਹਤ ਜਾਂਚ ਅਤੇ ਵਰਤੋਂਯੋਗ ਮਾਰਗਦਰਸ਼ਨ"
  },
  "Substance-abuse awareness": {
    en: "Substance-abuse awareness",
    pa: "ਨਸ਼ਿਆਂ ਦੀ ਦੁਰਵਰਤੋਂ ਬਾਰੇ ਜਾਗਰੂਕਤਾ"
  },
  "A book that brings addiction into public view": {
    en: "A book that brings addiction into public view",
    pa: "ਇੱਕ ਕਿਤਾਬ, ਜੋ ਨਸ਼ੇ ਦੇ ਮਸਲੇ ਨੂੰ ਲੋਕਾਂ ਵਿਚ ਚਰਚਾ ਦਾ ਵਿਸ਼ਾ ਬਣਾਉਂਦੀ ਹੈ"
  },
  "Start by listening. Build with care. Learn as we go.": {
    en: "Start by listening. Build with care. Learn as we go.",
    pa: "ਪਹਿਲਾਂ ਸੁਣਦੇ ਹਾਂ। ਸਮਝ ਨਾਲ ਕੰਮ ਬਣਾਉਂਦੇ ਹਾਂ। ਅਤੇ ਹਰ ਤਜਰਬੇ ਤੋਂ ਸਿੱਖਦੇ ਹਾਂ।"
  },
  "Workshops, expert sessions, theatre, film, literature, internships and institutional partnerships are chosen for the people and the issue, not for a fixed template.": {
    en: "Workshops, expert sessions, theatre, film, literature, internships and institutional partnerships are chosen for the people and the issue, not for a fixed template.",
    pa: "ਵਰਕਸ਼ਾਪਾਂ, ਮਾਹਰਾਂ ਦੇ ਸੈਸ਼ਨ, ਥੀਏਟਰ, ਫਿਲਮ, ਸਾਹਿਤ, ਇੰਟਰਨਸ਼ਿਪਾਂ ਅਤੇ ਸੰਸਥਾਗਤ ਸਾਂਝੇਦਾਰੀਆਂ ਨੂੰ ਲੋਕਾਂ ਅਤੇ ਮੁੱਦੇ ਲਈ ਚੁਣਿਆ ਜਾਂਦਾ ਹੈ, ਨਾ ਕਿ ਕਿਸੇ ਨਿਸ਼ਚਿਤ ਟੈਂਪਲੇਟ ਲਈ।"
  },
  "Listen": {
    en: "Listen",
    pa: "ਸੁਣੋ ਅਤੇ ਸਮਝੋ"
  },
  "Understand the people, context and need before designing an activity.": {
    en: "Understand the people, context and need before designing an activity.",
    pa: "ਕੋਈ ਵੀ ਗਤੀਵਿਧੀ ਤਿਆਰ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਲੋਕਾਂ, ਸੰਦਰਭ ਅਤੇ ਲੋੜ ਨੂੰ ਸਮਝੋ।"
  },
  "Collaborate": {
    en: "Collaborate",
    pa: "ਮਿਲ ਕੇ ਕੰਮ ਕਰੋ"
  },
  "Work with credible experts, community voices and institutional partners.": {
    en: "Work with credible experts, community voices and institutional partners.",
    pa: "ਭਰੋਸੇਯੋਗ ਮਾਹਰਾਂ, ਭਾਈਚਾਰੇ ਦੀਆਂ ਆਵਾਜ਼ਾਂ ਅਤੇ ਸੰਸਥਾਗਤ ਸਾਂਝੇਦਾਰਾਂ ਨਾਲ ਮਿਲ ਕੇ ਕੰਮ ਕਰੋ।"
  },
  "Make it useful": {
    en: "Make it useful",
    pa: "ਕੰਮ ਨੂੰ ਵਰਤੋਂਯੋਗ ਬਣਾਓ"
  },
  "Use language and formats that make reliable information easier to act on.": {
    en: "Use language and formats that make reliable information easier to act on.",
    pa: "ਅਜਿਹੀ ਭਾਸ਼ਾ ਅਤੇ ਫਾਰਮੈਟਾਂ ਦੀ ਵਰਤੋਂ ਕਰੋ ਜੋ ਭਰੋਸੇਯੋਗ ਜਾਣਕਾਰੀ 'ਤੇ ਅਮਲ ਕਰਨਾ ਆਸਾਨ ਬਣਾਉਂਦੇ ਹਨ।"
  },
  "Improve": {
    en: "Improve",
    pa: "ਲਗਾਤਾਰ ਸੁਧਾਰ ਕਰੋ"
  },
  "Track delivery, listen to response and refine programmes through experience.": {
    en: "Track delivery, listen to response and refine programmes through experience.",
    pa: "ਡਿਲੀਵਰੀ ਨੂੰ ਟ੍ਰੈਕ ਕਰੋ, ਪ੍ਰਤੀਕਿਰਿਆ ਸੁਣੋ ਅਤੇ ਤਜ਼ਰਬੇ ਰਾਹੀਂ ਪ੍ਰੋਗਰਾਮਾਂ ਨੂੰ ਹੋਰ ਨਿਖਾਰੋ।"
  },
  "1,100,000+ people reached.": {
    en: "1,100,000+ people reached.",
    pa: "11,00,000+ ਲੋਕਾਂ ਤੱਕ ਪਹੁੰਚ ਬਣਾਈ।"
  },
  "brought female foeticide and discrimination against girls into public conversation. Theatre, film and writing remain central to how we make difficult subjects easier to face.": {
    en: "brought female foeticide and discrimination against girls into public conversation. Theatre, film and writing remain central to how we make difficult subjects easier to face.",
    pa: "ਮਾਦਾ ਭਰੂਣ ਹੱਤਿਆ ਅਤੇ ਲੜਕੀਆਂ ਵਿਰੁੱਧ ਵਿਤਕਰੇ ਨੂੰ ਜਨਤਕ ਚਰਚਾ ਵਿੱਚ ਲਿਆਂਦਾ। ਥੀਏਟਰ, ਫ਼ਿਲਮ ਅਤੇ ਲੇਖਣੀ ਸਾਡੇ ਲਈ ਮੁਸ਼ਕਲ ਵਿਸ਼ਿਆਂ ਦਾ ਸਾਹਮਣਾ ਕਰਨਾ ਆਸਾਨ ਬਣਾਉਣ ਵਿੱਚ ਕੇਂਦਰੀ ਭੂਮਿਕਾ ਨਿਭਾਉਂਦੇ ਹਨ।"
  },
  "An inclusive India where dignity and opportunity are not determined by gender or circumstance.": {
    en: "An inclusive India where dignity and opportunity are not determined by gender or circumstance.",
    pa: "ਇੱਕ ਸਮਾਵੇਸ਼ੀ ਭਾਰਤ, ਜਿੱਥੇ ਕਿਸੇ ਵਿਅਕਤੀ ਦੀ ਮਰਿਆਦਾ ਅਤੇ ਮੌਕੇ ਉਸਦੇ ਲਿੰਗ ਜਾਂ ਹਾਲਾਤਾਂ ਨਾਲ ਤੈਅ ਨਾ ਹੋਣ।"
  },
  "We work through education, awareness, skills and creative communication while protecting the language, art and cultural heritage that help communities understand who they are.": {
    en: "We work through education, awareness, skills and creative communication while protecting the language, art and cultural heritage that help communities understand who they are.",
    pa: "ਅਸੀਂ ਸਿੱਖਿਆ, ਜਾਗਰੂਕਤਾ, ਹੁਨਰ ਅਤੇ ਸਿਰਜਣਾਤਮਕ ਸੰਚਾਰ ਰਾਹੀਂ ਕੰਮ ਕਰਦੇ ਹਾਂ, ਅਤੇ ਨਾਲ ਹੀ ਉਸ ਭਾਸ਼ਾ, ਕਲਾ ਅਤੇ ਸੱਭਿਆਚਾਰਕ ਵਿਰਾਸਤ ਦੀ ਰੱਖਿਆ ਕਰਦੇ ਹਾਂ ਜੋ ਭਾਈਚਾਰਿਆਂ ਨੂੰ ਆਪਣੀ ਪਛਾਣ ਸਮਝਣ ਵਿੱਚ ਮਦਦ ਕਰਦੀ ਹੈ।"
  },
  "Grounded where the work began, building for a wider reach.": {
    en: "Grounded where the work began, building for a wider reach.",
    pa: "ਜਿੱਥੋਂ ਕੰਮ ਸ਼ੁਰੂ ਹੋਇਆ, ਉੱਥੇ ਹੀ ਮਜ਼ਬੂਤ ਜੜਾਂ; ਹੁਣ ਹੋਰ ਲੋਕਾਂ ਤੱਕ ਪਹੁੰਚਣ ਦੀ ਕੋਸ਼ਿਸ਼।"
  },
  "Headquartered in Amritsar, Punjabi Samvad remains close to the communities at the centre of its work. President Jyoti Bawa leads the organisation and continues the work she began with Amit Bawa.": {
    en: "Headquartered in Amritsar, Punjabi Samvad remains close to the communities at the centre of its work. President Jyoti Bawa leads the organisation and continues the work she began with Amit Bawa.",
    pa: "ਅੰਮ੍ਰਿਤਸਰ ਵਿੱਚ ਮੁੱਖ ਦਫ਼ਤਰ ਹੋਣ ਕਰਕੇ, ਪੰਜਾਬੀ ਸੰਵਾਦ ਆਪਣੇ ਕਾਰਜ-ਖੇਤਰ ਦੇ ਕੇਂਦਰ ਵਿੱਚ ਮੌਜੂਦ ਭਾਈਚਾਰਿਆਂ ਦੇ ਨੇੜੇ ਰਹਿੰਦਾ ਹੈ। ਪ੍ਰਧਾਨ ਜਯੋਤੀ ਬਾਵਾ ਸੰਸਥਾ ਦੀ ਅਗਵਾਈ ਕਰ ਰਹੇ ਹਨ ਅਤੇ ਉਸ ਕੰਮ ਨੂੰ ਅੱਗੇ ਵਧਾ ਰਹੇ ਹਨ ਜੋ ਉਨ੍ਹਾਂ ਨੇ ਅਮਿਤ ਬਾਵਾ ਨਾਲ ਸ਼ੁਰੂ ਕੀਤਾ ਸੀ।"
  },
  "The purpose remains clear: address neglected issues honestly, create space for participation and build programmes people can use.": {
    en: "The purpose remains clear: address neglected issues honestly, create space for participation and build programmes people can use.",
    pa: "ਮਕਸਦ ਸਪੱਸ਼ਟ ਹੈ: ਅਣਗੌਲੇ ਕੀਤੇ ਗਏ ਮੁੱਦਿਆਂ ਨੂੰ ਇਮਾਨਦਾਰੀ ਨਾਲ ਹੱਲ ਕਰਨਾ, ਭਾਗੀਦਾਰੀ ਲਈ ਥਾਂ ਬਣਾਉਣਾ ਅਤੇ ਅਜਿਹੇ ਪ੍ਰੋਗਰਾਮਾਂ ਦਾ ਨਿਰਮਾਣ ਕਰਨਾ ਜੋ ਲੋਕਾਂ ਦੇ ਕੰਮ ਆ ਸਕਣ।"
  },
  "Co-founder of Punjabi Samvad": {
    en: "Co-founder of Punjabi Samvad",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਸਹਿ-ਸੰਸਥਾਪਕ"
  },
  "Founding inspiration behind Punjabi Samvad": {
    en: "Founding inspiration behind Punjabi Samvad",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀ ਸਥਾਪਨਾ ਪਿੱਛੇ ਪ੍ਰੇਰਕ ਸ਼ਖ਼ਸੀਅਤ"
  },
  "In remembrance": {
    en: "In remembrance",
    pa: "ਯਾਦਾਂ ਵਿੱਚ"
  },
  "A thoughtful life with a creative purpose.": {
    en: "A thoughtful life with a creative purpose.",
    pa: "ਸੰਵੇਦਨਸ਼ੀਲ ਸੋਚ ਅਤੇ ਰਚਨਾਤਮਕ ਮਕਸਦ ਨਾਲ ਜੀਵਿਆ ਜੀਵਨ।"
  },
  "Amit was a kind and deeply thoughtful person with an exceptional creative mind. His sensitivity and imagination found expression through poetry, dialogue and theatre, leaving a lasting impression on those who knew him and experienced his work.": {
    en: "Amit was a kind and deeply thoughtful person with an exceptional creative mind. His sensitivity and imagination found expression through poetry, dialogue and theatre, leaving a lasting impression on those who knew him and experienced his work.",
    pa: "ਅਮਿਤ ਇੱਕ ਬੇਮਿਸਾਲ ਰਚਨਾਤਮਕ ਦਿਮਾਗ ਵਾਲੇ ਦਿਆਲੂ ਅਤੇ ਡੂੰਘੇ ਵਿਚਾਰਸ਼ੀਲ ਇਨਸਾਨ ਸਨ। ਉਹਨਾਂ ਦੀ ਸੰਵੇਦਨਸ਼ੀਲਤਾ ਅਤੇ ਕਲਪਨਾ ਨੇ ਕਵਿਤਾ, ਸੰਵਾਦ ਅਤੇ ਰੰਗਮੰਚ ਰਾਹੀਂ ਆਪਣਾ ਪ੍ਰਗਟਾਵਾ ਲੱਭਿਆ, ਜਿਸ ਨੇ ਉਹਨਾਂ ਨੂੰ ਜਾਣਨ ਵਾਲਿਆਂ ਅਤੇ ਉਹਨਾਂ ਦੇ ਕੰਮ ਦਾ ਅਨੁਭਵ ਕਰਨ ਵਾਲਿਆਂ 'ਤੇ ਇੱਕ ਅਮਿੱਟ ਛਾਪ ਛੱਡੀ।"
  },
  "Punjabi Samvad began as a shared dream rooted in the belief that life should be used to do something meaningful for others. Although Amit is no longer with us, that dream continues through Punjabi Samvad. His ideas, values and compassionate spirit remain an important part of the organisation's foundation and continue to inspire its work.": {
    en: "Punjabi Samvad began as a shared dream rooted in the belief that life should be used to do something meaningful for others. Although Amit is no longer with us, that dream continues through Punjabi Samvad. His ideas, values and compassionate spirit remain an important part of the organisation's foundation and continue to inspire its work.",
    pa: "'ਪੰਜਾਬੀ ਸੰਵਾਦ' ਦੀ ਸ਼ੁਰੂਆਤ ਇੱਕ ਅਜਿਹੇ ਸਾਂਝੇ ਸੁਪਨੇ ਵਜੋਂ ਹੋਈ ਸੀ, ਜਿਸਦੀ ਨੀਂਹ ਇਸ ਵਿਸ਼ਵਾਸ 'ਤੇ ਟਿਕੀ ਹੋਈ ਸੀ ਕਿ ਜੀਵਨ ਦੀ ਵਰਤੋਂ ਦੂਜਿਆਂ ਲਈ ਕੁਝ ਸਾਰਥਕ ਕਰਨ ਲਈ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ। ਭਾਵੇਂ ਅਮਿਤ ਹੁਣ ਸਾਡੇ ਵਿਚਕਾਰ ਨਹੀਂ ਹਨ, ਪਰ ਉਹ ਸੁਪਨਾ 'ਪੰਜਾਬੀ ਸੰਵਾਦ' ਰਾਹੀਂ ਨਿਰੰਤਰ ਜਾਰੀ ਹੈ। ਉਹਨਾਂ ਦੇ ਵਿਚਾਰ, ਕਦਰਾਂ-ਕੀਮਤਾਂ ਅਤੇ ਹਮਦਰਦੀ ਵਾਲੀ ਭਾਵਨਾ ਸੰਸਥਾ ਦੀ ਨੀਂਹ ਦਾ ਇੱਕ ਅਹਿਮ ਹਿੱਸਾ ਬਣੇ ਹੋਏ ਹਨ ਅਤੇ ਇਸਦੇ ਕਾਰਜਾਂ ਨੂੰ ਪ੍ਰੇਰਿਤ ਕਰਦੇ ਰਹਿੰਦੇ ਹਨ।"
  },
  "A creative voice in Punjabi Samvad's early work.": {
    en: "A creative voice in Punjabi Samvad's early work.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਸ਼ੁਰੂਆਤੀ ਕੰਮ ਦੀ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਰਚਨਾਤਮਕ ਆਵਾਜ਼।"
  },
  "Amit served as President during Punjabi Samvad's formative years. He brought poetry and conversation into programmes that addressed gender discrimination, education and Punjabi culture.": {
    en: "Amit served as President during Punjabi Samvad's formative years. He brought poetry and conversation into programmes that addressed gender discrimination, education and Punjabi culture.",
    pa: "ਅਮਿਤ ਨੇ 'ਪੰਜਾਬੀ ਸੰਵਾਦ' ਦੇ ਮੁਢਲੇ ਸਾਲਾਂ ਦੌਰਾਨ ਪ੍ਰਧਾਨ ਵਜੋਂ ਸੇਵਾ ਨਿਭਾਈ। ਉਹਨਾਂ ਨੇ ਲਿੰਗ ਵਿਤਕਰੇ, ਸਿੱਖਿਆ ਅਤੇ ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ ਨੂੰ ਸੰਬੋਧਿਤ ਕਰਨ ਵਾਲੇ ਪ੍ਰੋਗਰਾਮਾਂ ਵਿੱਚ ਕਵਿਤਾ ਅਤੇ ਸੰਵਾਦ ਨੂੰ ਸ਼ਾਮਲ ਕੀਤਾ।"
  },
  "Poetry": {
    en: "Poetry",
    pa: "ਕਵਿਤਾ"
  },
  "His poems formed part of": {
    en: "His poems formed part of",
    pa: "ਉਹਨਾਂ ਦੀਆਂ ਕਵਿਤਾਵਾਂ ਦਾ ਹਿੱਸਾ ਬਣੀਆਂ"
  },
  "and other productions.": {
    en: "and other productions.",
    pa: "ਅਤੇ ਹੋਰ ਪੇਸ਼ਕਾਰੀਆਂ।"
  },
  "Theatre": {
    en: "Theatre",
    pa: "ਰੰਗਮੰਚ"
  },
  "He worked with Jyoti Bawa as theatre became a public language for difficult social issues.": {
    en: "He worked with Jyoti Bawa as theatre became a public language for difficult social issues.",
    pa: "ਉਸਨੇ ਜੋਤੀ ਬਾਵਾ ਨਾਲ ਕੰਮ ਕੀਤਾ ਕਿਉਂਕਿ ਰੰਗਮੰਚ ਮੁਸ਼ਕਲ ਸਮਾਜਿਕ ਮੁੱਦਿਆਂ ਲਈ ਇੱਕ ਜਨਤਕ ਭਾਸ਼ਾ ਬਣ ਗਿਆ ਸੀ।"
  },
  "Dialogue": {
    en: "Dialogue",
    pa: "ਸੰਵਾਦ"
  },
  "He believed art could help people speak about subjects that society often kept quiet.": {
    en: "He believed art could help people speak about subjects that society often kept quiet.",
    pa: "ਉਸਦਾ ਮੰਨਣਾ ਸੀ ਕਿ ਕਲਾ ਲੋਕਾਂ ਨੂੰ ਉਨ੍ਹਾਂ ਵਿਸ਼ਿਆਂ ਬਾਰੇ ਬੋਲਣ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦੀ ਹੈ ਜਿਨ੍ਹਾਂ 'ਤੇ ਸਮਾਜ ਅਕਸਰ ਚੁੱਪ ਰਹਿੰਦਾ ਹੈ।"
  },
  "The beginning of a shared commitment.": {
    en: "The beginning of a shared commitment.",
    pa: "ਇੱਕ ਸਾਂਝੀ ਵਚਨਬੱਧਤਾ ਦੀ ਸ਼ੁਰੂਆਤ।"
  },
  "Amit and Jyoti Bawa founded Punjabi Samvad after a gender-based crime in Punjab moved them to respond. Their first work brought educators, artists and community members together to discuss discrimination against girls.": {
    en: "Amit and Jyoti Bawa founded Punjabi Samvad after a gender-based crime in Punjab moved them to respond. Their first work brought educators, artists and community members together to discuss discrimination against girls.",
    pa: "ਅਮਿਤ ਅਤੇ ਜੋਤੀ ਬਾਵਾ ਨੇ ਪੰਜਾਬ ਵਿੱਚ ਇੱਕ ਲਿੰਗ-ਅਧਾਰਤ ਅਪਰਾਧ ਤੋਂ ਪ੍ਰਭਾਵਿਤ ਹੋ ਕੇ 'ਪੰਜਾਬੀ ਸੰਵਾਦ' ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ। ਉਨ੍ਹਾਂ ਦੇ ਪਹਿਲੇ ਕੰਮ ਨੇ ਲੜਕੀਆਂ ਵਿਰੁੱਧ ਵਿਤਕਰੇ ਬਾਰੇ ਚਰਚਾ ਕਰਨ ਲਈ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰੀਆਂ, ਕਲਾਕਾਰਾਂ ਅਤੇ ਭਾਈਚਾਰੇ ਦੇ ਮੈਂਬਰਾਂ ਨੂੰ ਇਕੱਠੇ ਕੀਤਾ।"
  },
  "Theatre soon became central to that response. Jyoti wrote and directed": {
    en: "Theatre soon became central to that response. Jyoti wrote and directed",
    pa: "ਰੰਗਮੰਚ ਜਲਦੀ ਹੀ ਉਸ ਪ੍ਰਤੀਕਿਰਿਆ ਦਾ ਕੇਂਦਰ ਬਣ ਗਿਆ। ਜੋਤੀ ਨੇ ਲਿਖਿਆ ਅਤੇ ਨਿਰਦੇਸ਼ਿਤ ਕੀਤਾ"
  },
  "while Amit contributed poetry to the production. His writing also formed part of": {
    en: "while Amit contributed poetry to the production. His writing also formed part of",
    pa: "ਜਦੋਂ ਕਿ ਅਮਿਤ ਨੇ ਇਸ ਪੇਸ਼ਕਾਰੀ ਵਿੱਚ ਕਵਿਤਾ ਦਾ ਯੋਗਦਾਨ ਪਾਇਆ। ਉਸਦੀ ਲੇਖਣੀ ਵੀ ਇਸ ਦਾ ਹਿੱਸਾ ਬਣੀ"
  },
  "Na Koi Vairi Na Begana": {
    en: "Na Koi Vairi Na Begana",
    pa: "ਨਾ ਕੋਈ ਵੈਰੀ ਨਾ ਬੇਗਾਨਾ"
  },
  "including the poem": {
    en: "including the poem",
    pa: "ਜਿਸ ਵਿੱਚ ਕਵਿਤਾ ਸ਼ਾਮਲ ਹੈ"
  },
  "Pani": {
    en: "Pani",
    pa: "ਪਾਣੀ"
  },
  "His work remains part of Punjabi Samvad.": {
    en: "His work remains part of Punjabi Samvad.",
    pa: "ਉਨ੍ਹਾਂ ਦਾ ਕੰਮ ਅੱਜ ਵੀ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦਾ ਹਿੱਸਾ ਹੈ।"
  },
  "Amit died in 2014. Jyoti Bawa continued the organisation they founded together, carrying their shared purpose into education, public health, theatre and community programmes.": {
    en: "Amit died in 2014. Jyoti Bawa continued the organisation they founded together, carrying their shared purpose into education, public health, theatre and community programmes.",
    pa: "ਅਮਿਤ ਦੀ ਮੌਤ 2014 ਵਿੱਚ ਹੋ ਗਈ ਸੀ। ਜੋਤੀ ਬਾਵਾ ਨੇ ਉਨ੍ਹਾਂ ਵੱਲੋਂ ਮਿਲ ਕੇ ਸਥਾਪਿਤ ਕੀਤੀ ਗਈ ਸੰਸਥਾ ਨੂੰ ਜਾਰੀ ਰੱਖਿਆ, ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਸਾਂਝੇ ਉਦੇਸ਼ ਨੂੰ ਸਿੱਖਿਆ, ਜਨਤਕ ਸਿਹਤ, ਰੰਗਮੰਚ ਅਤੇ ਭਾਈਚਾਰਕ ਪ੍ਰੋਗਰਾਮਾਂ ਵਿੱਚ ਅੱਗੇ ਵਧਾਇਆ।"
  },
  "President of Punjabi Samvad": {
    en: "President of Punjabi Samvad",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀ ਪ੍ਰਧਾਨ"
  },
  "Jyoti Bawa is a Padma Shri nominee, TEDx speaker, social activist, writer and director based in Amritsar. Since 2004, she has worked with women, children and communities on education, health, gender equality, substance-abuse prevention and Punjabi culture.": {
    en: "Jyoti Bawa is a Padma Shri nominee, TEDx speaker, social activist, writer and director based in Amritsar. Since 2004, she has worked with women, children and communities on education, health, gender equality, substance-abuse prevention and Punjabi culture.",
    pa: "ਜੋਤੀ ਬਾਵਾ ਅੰਮ੍ਰਿਤਸਰ ਸਥਿਤ ਇੱਕ ਪਦਮ ਸ਼੍ਰੀ ਨਾਮਜ਼ਦ, ਟੈੱਡਐਕਸ (TEDx) ਬੁਲਾਰਾ, ਸਮਾਜਿਕ ਕਾਰਕੁਨ, ਲੇਖਕ ਅਤੇ ਨਿਰਦੇਸ਼ਕ ਹਨ। 2004 ਤੋਂ, ਉਹ ਸਿੱਖਿਆ, ਸਿਹਤ, ਲਿੰਗ ਸਮਾਨਤਾ, ਨਸ਼ਾਖੋਰੀ ਦੀ ਰੋਕਥਾਮ ਅਤੇ ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ 'ਤੇ ਔਰਤਾਂ, ਬੱਚਿਆਂ ਅਤੇ ਭਾਈਚਾਰਿਆਂ ਨਾਲ ਕੰਮ ਕਰ ਰਹੇ ਹਨ।"
  },
  "She helped build Punjabi Samvad with Amit Bawa and continued their work after his death in 2014. Her leadership combines field programmes with theatre, writing, film and public dialogue.": {
    en: "She helped build Punjabi Samvad with Amit Bawa and continued their work after his death in 2014. Her leadership combines field programmes with theatre, writing, film and public dialogue.",
    pa: "ਉਨ੍ਹਾਂ ਨੇ ਅਮਿਤ ਬਾਵਾ ਨਾਲ ਮਿਲ ਕੇ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀ ਸਥਾਪਨਾ ਵਿੱਚ ਮਦਦ ਕੀਤੀ ਅਤੇ 2014 ਵਿੱਚ ਉਨ੍ਹਾਂ ਦੀ ਮੌਤ ਤੋਂ ਬਾਅਦ ਇਸ ਕੰਮ ਨੂੰ ਜਾਰੀ ਰੱਖਿਆ। ਉਨ੍ਹਾਂ ਦੀ ਅਗਵਾਈ ਜ਼ਮੀਨੀ ਪ੍ਰੋਗਰਾਮਾਂ ਨੂੰ ਰੰਗਮੰਚ, ਲੇਖਣੀ, ਫਿਲਮ ਅਤੇ ਜਨਤਕ ਸੰਵਾਦ ਨਾਲ ਜੋੜਦੀ ਹੈ।"
  },
  "Padma Shri": {
    en: "Padma Shri",
    pa: "ਪਦਮ ਸ਼੍ਰੀ"
  },
  "nominee": {
    en: "nominee",
    pa: "ਨਾਮਜ਼ਦ"
  },
  "TEDx": {
    en: "TEDx",
    pa: "ਟੈੱਡਐਕਸ"
  },
  "speaker": {
    en: "speaker",
    pa: "ਬੁਲਾਰਾ"
  },
  "of community work": {
    en: "of community work",
    pa: "ਭਾਈਚਾਰਕ ਕੰਮ ਦਾ"
  },
  "Leadership": {
    en: "Leadership",
    pa: "ਅਗਵਾਈ"
  },
  "From dialogue to programmes": {
    en: "From dialogue to programmes",
    pa: "ਸੰਵਾਦ ਤੋਂ ਪ੍ਰੋਗਰਾਮਾਂ ਤੱਕ"
  },
  "Jyoti leads Punjabi Samvad's work across girls' education, women's skills, menstrual health, mental well-being, HIV/AIDS awareness and anti-drug outreach. She works with schools, communities, specialists and institutional partners to make difficult subjects easier to discuss.": {
    en: "Jyoti leads Punjabi Samvad's work across girls' education, women's skills, menstrual health, mental well-being, HIV/AIDS awareness and anti-drug outreach. She works with schools, communities, specialists and institutional partners to make difficult subjects easier to discuss.",
    pa: "ਜੋਤੀ ਲੜਕੀਆਂ ਦੀ ਸਿੱਖਿਆ, ਮਹਿਲਾ ਹੁਨਰ, ਮਾਹਵਾਰੀ ਸਿਹਤ, ਮਾਨਸਿਕ ਤੰਦਰੁਸਤੀ, ਐੱਚਆਈਵੀ/ਏਡਜ਼ (HIV/AIDS) ਜਾਗਰੂਕਤਾ ਅਤੇ ਨਸ਼ਾ ਵਿਰੋਧੀ ਮੁਹਿੰਮਾਂ ਵਿੱਚ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਕੰਮ ਦੀ ਅਗਵਾਈ ਕਰਦੀ ਹੈ। ਉਹ ਔਖੇ ਵਿਸ਼ਿਆਂ 'ਤੇ ਚਰਚਾ ਕਰਨਾ ਆਸਾਨ ਬਣਾਉਣ ਲਈ ਸਕੂਲਾਂ, ਭਾਈਚਾਰਿਆਂ, ਮਾਹਿਰਾਂ ਅਤੇ ਸੰਸਥਾਗਤ ਭਾਈਵਾਲਾਂ ਨਾਲ ਮਿਲ ਕੇ ਕੰਮ ਕਰਦੀ ਹੈ।"
  },
  "Writing for the stage and screen": {
    en: "Writing for the stage and screen",
    pa: "ਰੰਗਮੰਚ ਅਤੇ ਪਰਦੇ ਲਈ ਲੇਖਨ"
  },
  "She wrote and directed": {
    en: "She wrote and directed",
    pa: "ਉਸਨੇ ਲਿਖਿਆ ਅਤੇ ਨਿਰਦੇਸ਼ਿਤ ਕੀਤਾ"
  },
  "a theatre production about female foeticide, gender discrimination and the rights of girls. She has also directed documentary work on social concerns, including substance abuse.": {
    en: "a theatre production about female foeticide, gender discrimination and the rights of girls. She has also directed documentary work on social concerns, including substance abuse.",
    pa: "ਕੰਨਿਆ ਭਰੂਣ ਹੱਤਿਆ, ਲਿੰਗ ਵਿਤਕਰੇ ਅਤੇ ਲੜਕੀਆਂ ਦੇ ਅਧਿਕਾਰਾਂ ਬਾਰੇ ਇੱਕ ਨਾਟਕ। ਉਸਨੇ ਨਸ਼ੇ ਦੀ ਵਰਤੋਂ ਸਮੇਤ ਸਮਾਜਿਕ ਸਰੋਕਾਰਾਂ 'ਤੇ ਦਸਤਾਵੇਜ਼ੀ ਕੰਮ ਦਾ ਨਿਰਦੇਸ਼ਨ ਵੀ ਕੀਤਾ ਹੈ।"
  },
  "Institutional Governance": {
    en: "Institutional Governance",
    pa: "ਸੰਸਥਾਗਤ ਪ੍ਰਸ਼ਾਸਨ"
  },
  "POSH Act & Institutional Integrity.": {
    en: "POSH Act & Institutional Integrity.",
    pa: "ਪੋਸ਼ (POSH) ਐਕਟ ਅਤੇ ਸੰਸਥਾਗਤ ਇਮਾਨਦਾਰੀ।"
  },
  "Jyoti Bawa serves as an expert external member on multiple Prevention of Sexual Harassment (POSH) committees across government, corporate and defence institutions, including the Government of Punjab, regional banks and Army schools.": {
    en: "Jyoti Bawa serves as an expert external member on multiple Prevention of Sexual Harassment (POSH) committees across government, corporate and defence institutions, including the Government of Punjab, regional banks and Army schools.",
    pa: "ਜੋਤੀ ਬਾਵਾ ਪੰਜਾਬ ਸਰਕਾਰ, ਖੇਤਰੀ ਬੈਂਕਾਂ ਅਤੇ ਆਰਮੀ ਸਕੂਲਾਂ ਸਮੇਤ ਸਰਕਾਰੀ, ਕਾਰਪੋਰੇਟ ਅਤੇ ਰੱਖਿਆ ਸੰਸਥਾਵਾਂ ਵਿੱਚ ਜਿਨਸੀ ਸ਼ੋਸ਼ਣ ਦੀ ਰੋਕਥਾਮ (POSH) ਦੀਆਂ ਕਈ ਕਮੇਟੀਆਂ ਵਿੱਚ ਇੱਕ ਮਾਹਰ ਬਾਹਰੀ ਮੈਂਬਰ ਵਜੋਂ ਸੇਵਾ ਨਿਭਾਉਂਦੀ ਹੈ।"
  },
  "Her role is to ensure workplace safety, investigate grievances with absolute impartiality and uphold the dignity of all employees. This commitment to fairness includes protecting individuals from false allegations—she has successfully defended and exonerated men facing fabricated harassment charges, with one such case detailed in her book.": {
    en: "Her role is to ensure workplace safety, investigate grievances with absolute impartiality and uphold the dignity of all employees. This commitment to fairness includes protecting individuals from false allegations—she has successfully defended and exonerated men facing fabricated harassment charges, with one such case detailed in her book.",
    pa: "ਉਸਦੀ ਭੂਮਿਕਾ ਕੰਮ ਵਾਲੀ ਥਾਂ 'ਤੇ ਸੁਰੱਖਿਆ ਨੂੰ ਯਕੀਨੀ ਬਣਾਉਣਾ, ਪੂਰੀ ਨਿਰਪੱਖਤਾ ਨਾਲ ਸ਼ਿਕਾਇਤਾਂ ਦੀ ਜਾਂਚ ਕਰਨਾ ਅਤੇ ਸਾਰੇ ਕਰਮਚਾਰੀਆਂ ਦੇ ਸਨਮਾਨ ਨੂੰ ਬਣਾਈ ਰੱਖਣਾ ਹੈ। ਨਿਰਪੱਖਤਾ ਪ੍ਰਤੀ ਇਸ ਵਚਨਬੱਧਤਾ ਵਿੱਚ ਵਿਅਕਤੀਆਂ ਨੂੰ ਝੂਠੇ ਦੋਸ਼ਾਂ ਤੋਂ ਬਚਾਉਣਾ ਸ਼ਾਮਲ ਹੈ—ਉਸਨੇ ਝੂਠੇ ਜਿਨਸੀ ਸ਼ੋਸ਼ਣ ਦੇ ਦੋਸ਼ਾਂ ਦਾ ਸਾਹਮਣਾ ਕਰ ਰਹੇ ਮਰਦਾਂ ਦਾ ਸਫਲਤਾਪੂਰਵਕ ਬਚਾਅ ਕੀਤਾ ਹੈ ਅਤੇ ਉਨ੍ਹਾਂ ਨੂੰ ਦੋਸ਼ਮੁਕਤ ਕੀਤਾ ਹੈ, ਜਿਸ ਵਿੱਚੋਂ ਇੱਕ ਅਜਿਹੇ ਮਾਮਲੇ ਦਾ ਵੇਰਵਾ ਉਸਦੀ ਕਿਤਾਬ ਵਿੱਚ ਦਿੱਤਾ ਗਿਆ ਹੈ।"
  },
  "Education and care": {
    en: "Education and care",
    pa: "ਸਿੱਖਿਆ ਅਤੇ ਸਹਾਰਾ"
  },
  "Keeping a child's education within reach.": {
    en: "Keeping a child's education within reach.",
    pa: "ਬੱਚੇ ਦੀ ਸਿੱਖਿਆ ਨੂੰ ਉਸਦੀ ਪਹੁੰਚ ਵਿੱਚ ਬਣਾਈ ਰੱਖਣਾ।"
  },
  "Jyoti has taken responsibility for several children whose families could not afford to keep them in school. She treats each child as part of her own extended family and arranges scholarships for fees, books, uniforms and other study costs.": {
    en: "Jyoti has taken responsibility for several children whose families could not afford to keep them in school. She treats each child as part of her own extended family and arranges scholarships for fees, books, uniforms and other study costs.",
    pa: "ਜੋਤੀ ਨੇ ਕਈ ਅਜਿਹੇ ਬੱਚਿਆਂ ਦੀ ਜ਼ਿੰਮੇਵਾਰੀ ਲਈ ਹੈ ਜਿਨ੍ਹਾਂ ਦੇ ਪਰਿਵਾਰ ਉਨ੍ਹਾਂ ਨੂੰ ਸਕੂਲ ਵਿੱਚ ਪੜ੍ਹਾਉਣ ਦਾ ਖਰਚਾ ਨਹੀਂ ਚੁੱਕ ਸਕਦੇ ਸਨ। ਉਹ ਹਰ ਬੱਚੇ ਨੂੰ ਆਪਣੇ ਵੱਡੇ ਪਰਿਵਾਰ ਦੇ ਹਿੱਸੇ ਵਾਂਗ ਸਮਝਦੀ ਹੈ ਅਤੇ ਫੀਸਾਂ, ਕਿਤਾਬਾਂ, ਵਰਦੀਆਂ ਅਤੇ ਪੜ੍ਹਾਈ ਦੇ ਹੋਰ ਖਰਚਿਆਂ ਲਈ ਵਜ਼ੀਫ਼ਿਆਂ ਦਾ ਪ੍ਰਬੰਧ ਕਰਦੀ ਹੈ।"
  },
  "Her support does not end with a payment. She speaks with families, follows each child's progress and stays close when illness, loss of work or another crisis puts education at risk. The children know they have someone to call.": {
    en: "Her support does not end with a payment. She speaks with families, follows each child's progress and stays close when illness, loss of work or another crisis puts education at risk. The children know they have someone to call.",
    pa: "ਉਸਦੀ ਮਦਦ ਸਿਰਫ਼ ਪੈਸੇ ਦੇਣ ਤੱਕ ਹੀ ਸੀਮਤ ਨਹੀਂ ਹੈ। ਉਹ ਪਰਿਵਾਰਾਂ ਨਾਲ ਗੱਲ ਕਰਦੀ ਹੈ, ਹਰ ਬੱਚੇ ਦੀ ਤਰੱਕੀ ਦਾ ਧਿਆਨ ਰੱਖਦੀ ਹੈ ਅਤੇ ਜਦੋਂ ਬਿਮਾਰੀ, ਨੌਕਰੀ ਜਾਣ ਜਾਂ ਕੋਈ ਹੋਰ ਸੰਕਟ ਪੜ੍ਹਾਈ ਨੂੰ ਖ਼ਤਰੇ ਵਿੱਚ ਪਾਉਂਦਾ ਹੈ, ਤਾਂ ਉਹ ਉਨ੍ਹਾਂ ਦੇ ਨਾਲ ਖੜ੍ਹਦੀ ਹੈ। ਬੱਚੇ ਜਾਣਦੇ ਹਨ ਕਿ ਉਨ੍ਹਾਂ ਕੋਲ ਫ਼ੋਨ ਕਰਨ ਲਈ ਕੋਈ ਹੈ।"
  },
  "For a child living with financial hardship, one uninterrupted school year can open the way to another. Jyoti's aim is practical: keep that child learning until poverty no longer decides what they may become.": {
    en: "For a child living with financial hardship, one uninterrupted school year can open the way to another. Jyoti's aim is practical: keep that child learning until poverty no longer decides what they may become.",
    pa: "ਆਰਥਿਕ ਤੰਗੀ ਵਿੱਚ ਰਹਿ ਰਹੇ ਇੱਕ ਬੱਚੇ ਲਈ, ਬਿਨਾਂ ਕਿਸੇ ਰੁਕਾਵਟ ਦੇ ਸਕੂਲ ਦਾ ਇੱਕ ਸਾਲ ਅਗਲੇ ਸਾਲ ਦਾ ਰਸਤਾ ਖੋਲ੍ਹ ਸਕਦਾ ਹੈ। ਜੋਤੀ ਦਾ ਉਦੇਸ਼ ਵਿਹਾਰਕ ਹੈ: ਉਸ ਬੱਚੇ ਦੀ ਪੜ੍ਹਾਈ ਨੂੰ ਉਦੋਂ ਤੱਕ ਜਾਰੀ ਰੱਖਣਾ ਜਦੋਂ ਤੱਕ ਗਰੀਬੀ ਇਹ ਫੈਸਲਾ ਕਰਨਾ ਬੰਦ ਨਹੀਂ ਕਰ ਦਿੰਦੀ ਕਿ ਉਹ ਕੀ ਬਣ ਸਕਦੇ ਹਨ।"
  },
  "Public recognition": {
    en: "Public recognition",
    pa: "ਜਨਤਕ ਸਨਮਾਨ"
  },
  "Recognition for her social work and leadership.": {
    en: "Recognition for her social work and leadership.",
    pa: "ਸਮਾਜਿਕ ਕੰਮ ਅਤੇ ਅਗਵਾਈ ਲਈ ਮਿਲਿਆ ਸਨਮਾਨ।"
  },
  "Writing": {
    en: "Writing",
    pa: "ਲੇਖਨ"
  },
  "Her latest book": {
    en: "Her latest book",
    pa: "ਉਨ੍ਹਾਂ ਦੀ ਨਵੀਂ ਕਿਤਾਬ"
  },
  "Candle in the Wind": {
    en: "Candle in the Wind",
    pa: "ਹਵਾ ਵਿੱਚ ਮੋਮਬੱਤੀ"
  },
  "Jyoti's third book draws from two decades of work with women, children and communities. It addresses old age homes, menstrual awareness, mental health and substance abuse, and was launched at the Sharjah International Book Fair in 2025.": {
    en: "Jyoti's third book draws from two decades of work with women, children and communities. It addresses old age homes, menstrual awareness, mental health and substance abuse, and was launched at the Sharjah International Book Fair in 2025.",
    pa: "ਜੋਤੀ ਦੀ ਤੀਜੀ ਕਿਤਾਬ ਔਰਤਾਂ, ਬੱਚਿਆਂ ਅਤੇ ਭਾਈਚਾਰਿਆਂ ਨਾਲ ਦੋ ਦਹਾਕਿਆਂ ਦੇ ਕੰਮ 'ਤੇ ਅਧਾਰਤ ਹੈ। ਇਹ ਬਿਰਧ ਆਸ਼ਰਮਾਂ, ਮਾਹਵਾਰੀ ਜਾਗਰੂਕਤਾ, ਮਾਨਸਿਕ ਸਿਹਤ ਅਤੇ ਨਸ਼ਿਆਂ ਦੀ ਦੁਰਵਰਤੋਂ ਵਰਗੇ ਮੁੱਦਿਆਂ ਨੂੰ ਸੰਬੋਧਿਤ ਕਰਦੀ ਹੈ, ਅਤੇ ਇਸ ਨੂੰ 2025 ਵਿੱਚ ਸ਼ਾਰਜਾਹ ਅੰਤਰਰਾਸ਼ਟਰੀ ਪੁਸਤਕ ਮੇਲੇ ਵਿੱਚ ਲਾਂਚ ਕੀਤਾ ਗਿਆ ਸੀ।"
  },
  "She has pledged all profits from the book to programmes for underprivileged girls, community welfare and public awareness.": {
    en: "She has pledged all profits from the book to programmes for underprivileged girls, community welfare and public awareness.",
    pa: "ਉਨ੍ਹਾਂ ਨੇ ਕਿਤਾਬ ਤੋਂ ਹੋਣ ਵਾਲੇ ਸਾਰੇ ਮੁਨਾਫੇ ਨੂੰ ਲੋੜਵੰਦ ਕੁੜੀਆਂ ਲਈ ਚਲਾਏ ਜਾਣ ਵਾਲੇ ਪ੍ਰੋਗਰਾਮਾਂ, ਭਾਈਚਾਰਕ ਭਲਾਈ ਅਤੇ ਜਨਤਕ ਜਾਗਰੂਕਤਾ ਲਈ ਦਾਨ ਕਰਨ ਦਾ ਪ੍ਰਣ ਲਿਆ ਹੈ।"
  },
  "Buy the book on Amazon": {
    en: "Buy the book on Amazon",
    pa: "ਕਿਤਾਬ Amazon ਤੋਂ ਖਰੀਦੋ"
  },
  "Also by Jyoti Bawa": {
    en: "Also by Jyoti Bawa",
    pa: "ਜੋਤੀ ਬਾਵਾ ਦੀਆਂ ਹੋਰ ਕਿਤਾਬਾਂ"
  },
  "Khilaf-e-Dastoor": {
    en: "Khilaf-e-Dastoor",
    pa: "ਖ਼ਿਲਾਫ਼-ਏ-ਦਸਤੂਰ"
  },
  "Learning through experience": {
    en: "Learning through experience",
    pa: "ਤਜਰਬੇ ਰਾਹੀਂ ਸਿੱਖਣਾ"
  },
  "Internships grounded in community work": {
    en: "Internships grounded in community work",
    pa: "ਸਮੁਦਾਇਕ ਕੰਮ ਨਾਲ ਜੁੜੀਆਂ ਇੰਟਰਨਸ਼ਿਪਾਂ"
  },
  "Jyoti treats internships as a place for students to observe community work, ask questions and exchange ideas. Punjabi Samvad has hosted young people from schools and universities, including IIM Amritsar, for practical exposure to research and social programmes.": {
    en: "Jyoti treats internships as a place for students to observe community work, ask questions and exchange ideas. Punjabi Samvad has hosted young people from schools and universities, including IIM Amritsar, for practical exposure to research and social programmes.",
    pa: "ਜੋਤੀ ਇੰਟਰਨਸ਼ਿਪ ਨੂੰ ਵਿਦਿਆਰਥੀਆਂ ਲਈ ਭਾਈਚਾਰਕ ਕੰਮਾਂ ਨੂੰ ਦੇਖਣ, ਸਵਾਲ ਪੁੱਛਣ ਅਤੇ ਵਿਚਾਰਾਂ ਦਾ ਆਦਾਨ-ਪ੍ਰਦਾਨ ਕਰਨ ਦੇ ਇੱਕ ਸਥਾਨ ਵਜੋਂ ਦੇਖਦੀ ਹੈ। ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੇ ਖੋਜ ਅਤੇ ਸਮਾਜਿਕ ਪ੍ਰੋਗਰਾਮਾਂ ਦੇ ਵਿਹਾਰਕ ਅਨੁਭਵ ਲਈ ਆਈ.ਆਈ.ਐਮ. ਅੰਮ੍ਰਿਤਸਰ ਸਮੇਤ ਸਕੂਲਾਂ ਅਤੇ ਯੂਨੀਵਰਸਿਟੀਆਂ ਦੇ ਨੌਜਵਾਨਾਂ ਦੀ ਮੇਜ਼ਬਾਨੀ ਕੀਤੀ ਹੈ।"
  },
  "Our story": {
    en: "Our story",
    pa: "ਸਾਡੀ ਕਹਾਣੀ"
  },
  "About the president": {
    en: "About the president",
    pa: "ਪ੍ਰਧਾਨ ਬਾਰੇ"
  },
  "Our work": {
    en: "Our work",
    pa: "ਸਾਡਾ ਕੰਮ"
  },
  "Impact": {
    en: "Impact",
    pa: "ਪ੍ਰਭਾਵ"
  },
  "Partnerships": {
    en: "Partnerships",
    pa: "ਭਾਈਵਾਲੀਆਂ"
  },
  "Practical skills that can become everyday income.": {
    en: "Practical skills that can become everyday income.",
    pa: "ਵਿਹਾਰਕ ਹੁਨਰ ਜੋ ਰੋਜ਼ਾਨਾ ਦੀ ਆਮਦਨ ਦਾ ਸਾਧਨ ਬਣ ਸਕਦੇ ਹਨ।"
  },
  "Punjabi Samvad and CMS Foundation have supported practical training for rural women, young people and families affected by substance abuse. Participants learn through demonstration, repeated practice and follow-up.": {
    en: "Punjabi Samvad and CMS Foundation have supported practical training for rural women, young people and families affected by substance abuse. Participants learn through demonstration, repeated practice and follow-up.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਅਤੇ ਸੀ.ਐੱਮ.ਐੱਸ. ਫਾਊਂਡੇਸ਼ਨ ਨੇ ਪੇਂਡੂ ਔਰਤਾਂ, ਨੌਜਵਾਨਾਂ ਅਤੇ ਨਸ਼ਾਖੋਰੀ ਤੋਂ ਪ੍ਰਭਾਵਿਤ ਪਰਿਵਾਰਾਂ ਲਈ ਵਿਹਾਰਕ ਸਿਖਲਾਈ ਵਿੱਚ ਸਹਿਯੋਗ ਦਿੱਤਾ ਹੈ। ਭਾਗੀਦਾਰ ਪ੍ਰਦਰਸ਼ਨ, ਵਾਰ-ਵਾਰ ਅਭਿਆਸ ਅਤੇ ਫਾਲੋ-ਅੱਪ ਰਾਹੀਂ ਸਿੱਖਦੇ ਹਨ।"
  },
  "Read the stories": {
    en: "Read the stories",
    pa: "ਕਹਾਣੀਆਂ ਪੜ੍ਹੋ"
  },
  "Learning by doing": {
    en: "Learning by doing",
    pa: "ਕਰਕੇ ਸਿੱਖਣਾ"
  },
  "Participants learn through practice.": {
    en: "Participants learn through practice.",
    pa: "ਭਾਗੀਦਾਰ ਅਭਿਆਸ ਰਾਹੀਂ ਸਿੱਖਦੇ ਹਨ।"
  },
  "Sessions cover products and services that participants can continue with modest equipment and local demand. Facilitators demonstrate each process, give participants time to repeat it and remain available when the workshop ends.": {
    en: "Sessions cover products and services that participants can continue with modest equipment and local demand. Facilitators demonstrate each process, give participants time to repeat it and remain available when the workshop ends.",
    pa: "ਸੈਸ਼ਨਾਂ ਵਿੱਚ ਅਜਿਹੇ ਉਤਪਾਦ ਅਤੇ ਸੇਵਾਵਾਂ ਸ਼ਾਮਲ ਹੁੰਦੀਆਂ ਹਨ ਜਿਨ੍ਹਾਂ ਨੂੰ ਭਾਗੀਦਾਰ ਸਧਾਰਨ ਸਾਜ਼ੋ-ਸਾਮਾਨ ਅਤੇ ਸਥਾਨਕ ਮੰਗ ਨਾਲ ਜਾਰੀ ਰੱਖ ਸਕਦੇ ਹਨ। ਸਿਖਲਾਈ ਦੇਣ ਵਾਲੇ ਹਰੇਕ ਪ੍ਰਕਿਰਿਆ ਨੂੰ ਕਰ ਕੇ ਦਿਖਾਉਂਦੇ ਹਨ, ਭਾਗੀਦਾਰਾਂ ਨੂੰ ਇਸ ਨੂੰ ਦੁਹਰਾਉਣ ਲਈ ਸਮਾਂ ਦਿੰਦੇ ਹਨ ਅਤੇ ਵਰਕਸ਼ਾਪ ਖ਼ਤਮ ਹੋਣ ਤੋਂ ਬਾਅਦ ਵੀ ਉਪਲਬਧ ਰਹਿੰਦੇ ਹਨ।"
  },
  "Delivered in partnership": {
    en: "Delivered in partnership",
    pa: "ਭਾਈਵਾਲੀ ਤਹਿਤ ਪ੍ਰਦਾਨ ਕੀਤਾ ਗਿਆ"
  },
  "Punjabi Samvad combines community relationships and follow-up with support from CMS Foundation for these livelihood initiatives.": {
    en: "Punjabi Samvad combines community relationships and follow-up with support from CMS Foundation for these livelihood initiatives.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਇਹਨਾਂ ਰੋਜ਼ੀ-ਰੋਟੀ ਦੇ ਉਪਰਾਲਿਆਂ ਲਈ ਸੀ.ਐਮ.ਐਸ. ਫਾਊਂਡੇਸ਼ਨ (CMS Foundation) ਦੇ ਸਹਿਯੋਗ ਨਾਲ ਭਾਈਚਾਰਕ ਸਬੰਧਾਂ ਅਤੇ ਫਾਲੋ-ਅੱਪ ਨੂੰ ਜੋੜਦਾ ਹੈ।"
  },
  "Skills for home-based work": {
    en: "Skills for home-based work",
    pa: "ਘਰ ਤੋਂ ਕੀਤੇ ਜਾਣ ਵਾਲੇ ਕੰਮਾਂ ਲਈ ਹੁਨਰ"
  },
  "From a workshop table to products people can sell.": {
    en: "From a workshop table to products people can sell.",
    pa: "ਇੱਕ ਵਰਕਸ਼ਾਪ ਦੇ ਮੇਜ਼ ਤੋਂ ਲੈ ਕੇ ਉਹਨਾਂ ਉਤਪਾਦਾਂ ਤੱਕ ਜੋ ਲੋਕ ਵੇਚ ਸਕਦੇ ਹਨ।"
  },
  "Punjabi Samvad has run skill-development sessions for rural girls and families affected by substance abuse. The programme covers soap making, traditional masala preparation, practical ways to assess the quality of commonly used spices, and Phulkari embroidery.": {
    en: "Punjabi Samvad has run skill-development sessions for rural girls and families affected by substance abuse. The programme covers soap making, traditional masala preparation, practical ways to assess the quality of commonly used spices, and Phulkari embroidery.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੇ ਪੇਂਡੂ ਕੁੜੀਆਂ ਅਤੇ ਨਸ਼ੇ ਦੀ ਲਤ ਤੋਂ ਪ੍ਰਭਾਵਿਤ ਪਰਿਵਾਰਾਂ ਲਈ ਹੁਨਰ-ਵਿਕਾਸ ਸੈਸ਼ਨ ਚਲਾਏ ਹਨ। ਇਸ ਪ੍ਰੋਗਰਾਮ ਵਿੱਚ ਸਾਬਣ ਬਣਾਉਣਾ, ਰਵਾਇਤੀ ਮਸਾਲੇ ਤਿਆਰ ਕਰਨਾ, ਆਮ ਵਰਤੇ ਜਾਣ ਵਾਲੇ ਮਸਾਲਿਆਂ ਦੀ ਗੁਣਵੱਤਾ ਦੀ ਜਾਂਚ ਕਰਨ ਦੇ ਵਿਹਾਰਕ ਤਰੀਕੇ ਅਤੇ ਫੁਲਕਾਰੀ ਦੀ ਕਢਾਈ ਸ਼ਾਮਲ ਹੈ।"
  },
  "Jyoti Bawa first completed the traditional masala training herself before adapting it for participants. Punjabi Samvad then used funds collected for community work, including savings from other programmes, to keep the sessions running and help participants practise beyond the first demonstration.": {
    en: "Jyoti Bawa first completed the traditional masala training herself before adapting it for participants. Punjabi Samvad then used funds collected for community work, including savings from other programmes, to keep the sessions running and help participants practise beyond the first demonstration.",
    pa: "ਜੋਤੀ ਬਾਵਾ ਨੇ ਭਾਗੀਦਾਰਾਂ ਲਈ ਇਸ ਨੂੰ ਅਨੁਕੂਲ ਬਣਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਖੁਦ ਰਵਾਇਤੀ ਮਸਾਲਾ ਸਿਖਲਾਈ ਪੂਰੀ ਕੀਤੀ। ਫਿਰ ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੇ ਸੈਸ਼ਨਾਂ ਨੂੰ ਚਾਲੂ ਰੱਖਣ ਅਤੇ ਪਹਿਲੇ ਪ੍ਰਦਰਸ਼ਨ ਤੋਂ ਬਾਅਦ ਵੀ ਭਾਗੀਦਾਰਾਂ ਨੂੰ ਅਭਿਆਸ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਨ ਲਈ ਭਾਈਚਾਰਕ ਕੰਮਾਂ ਲਈ ਇਕੱਠੇ ਕੀਤੇ ਫੰਡਾਂ ਦੀ ਵਰਤੋਂ ਕੀਤੀ, ਜਿਸ ਵਿੱਚ ਦੂਜੇ ਪ੍ਰੋਗਰਾਮਾਂ ਤੋਂ ਹੋਈ ਬਚਤ ਵੀ ਸ਼ਾਮਲ ਸੀ।"
  },
  "The training has continued across several rounds. Alongside teaching the process, the team records participant experiences and follows up on what people make, use or begin selling after the workshop.": {
    en: "The training has continued across several rounds. Alongside teaching the process, the team records participant experiences and follows up on what people make, use or begin selling after the workshop.",
    pa: "ਇਹ ਸਿਖਲਾਈ ਕਈ ਪੜਾਵਾਂ ਵਿੱਚ ਜਾਰੀ ਰਹੀ ਹੈ। ਪ੍ਰਕਿਰਿਆ ਸਿਖਾਉਣ ਦੇ ਨਾਲ-ਨਾਲ, ਟੀਮ ਭਾਗੀਦਾਰਾਂ ਦੇ ਤਜ਼ਰਬਿਆਂ ਨੂੰ ਰਿਕਾਰਡ ਕਰਦੀ ਹੈ ਅਤੇ ਇਸ ਗੱਲ ਦਾ ਫਾਲੋ-ਅੱਪ ਕਰਦੀ ਹੈ ਕਿ ਵਰਕਸ਼ਾਪ ਤੋਂ ਬਾਅਦ ਲੋਕ ਕੀ ਬਣਾਉਂਦੇ ਹਨ, ਵਰਤਦੇ ਹਨ ਜਾਂ ਵੇਚਣਾ ਸ਼ੁਰੂ ਕਰਦੇ ਹਨ।"
  },
  "New skills gave five participants more ways to earn.": {
    en: "New skills gave five participants more ways to earn.",
    pa: "ਨਵੇਂ ਹੁਨਰਾਂ ਨੇ ਪੰਜ ਭਾਗੀਦਾਰਾਂ ਨੂੰ ਕਮਾਈ ਕਰਨ ਦੇ ਹੋਰ ਤਰੀਕੇ ਦਿੱਤੇ।"
  },
  "These accounts use consented information supplied by participants. We left out harmful family allegations and details unrelated to the programme.": {
    en: "These accounts use consented information supplied by participants. We left out harmful family allegations and details unrelated to the programme.",
    pa: "ਇਹ ਵੇਰਵੇ ਭਾਗੀਦਾਰਾਂ ਦੁਆਰਾ ਦਿੱਤੀ ਗਈ ਸਹਿਮਤੀ ਵਾਲੀ ਜਾਣਕਾਰੀ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਨ। ਅਸੀਂ ਨੁਕਸਾਨਦੇਹ ਪਰਿਵਾਰਕ ਦੋਸ਼ਾਂ ਅਤੇ ਪ੍ਰੋਗਰਾਮ ਨਾਲ ਗੈਰ-ਸੰਬੰਧਿਤ ਵੇਰਵਿਆਂ ਨੂੰ ਬਾਹਰ ਰੱਖਿਆ ਹੈ।"
  },
  "Extending a 10-day skill-development workshop.": {
    en: "Extending a 10-day skill-development workshop.",
    pa: "10-ਦਿਨਾ ਹੁਨਰ-ਵਿਕਾਸ ਵਰਕਸ਼ਾਪ ਦਾ ਸਮਾਂ ਵਧਾਉਣਾ।"
  },
  "A ten-day workshop can introduce a skill. Many participants needed more time to practise, ask questions and build a routine, so Punjabi Samvad extended some sessions to 20–25 days.": {
    en: "A ten-day workshop can introduce a skill. Many participants needed more time to practise, ask questions and build a routine, so Punjabi Samvad extended some sessions to 20–25 days.",
    pa: "ਦਸ ਦਿਨਾਂ ਦੀ ਵਰਕਸ਼ਾਪ ਕਿਸੇ ਹੁਨਰ ਨਾਲ ਜਾਣ-ਪਛਾਣ ਕਰਵਾ ਸਕਦੀ ਹੈ। ਬਹੁਤ ਸਾਰੇ ਭਾਗੀਦਾਰਾਂ ਨੂੰ ਅਭਿਆਸ ਕਰਨ, ਸਵਾਲ ਪੁੱਛਣ ਅਤੇ ਇੱਕ ਰੁਟੀਨ ਬਣਾਉਣ ਲਈ ਹੋਰ ਸਮੇਂ ਦੀ ਲੋੜ ਸੀ, ਇਸ ਲਈ ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੇ ਕੁਝ ਸੈਸ਼ਨਾਂ ਦਾ ਸਮਾਂ ਵਧਾ ਕੇ 20-25 ਦਿਨ ਕਰ ਦਿੱਤਾ।"
  },
  "The extra time helped participants continue at home. Some called after the programme for guidance on vermicomposting, while women kept working with masalas, soap and embroidery. During follow-up, participants told us where they felt confident and where they needed more support.": {
    en: "The extra time helped participants continue at home. Some called after the programme for guidance on vermicomposting, while women kept working with masalas, soap and embroidery. During follow-up, participants told us where they felt confident and where they needed more support.",
    pa: "ਵਾਧੂ ਸਮੇਂ ਨੇ ਭਾਗੀਦਾਰਾਂ ਨੂੰ ਘਰ ਵਿੱਚ ਕੰਮ ਜਾਰੀ ਰੱਖਣ ਵਿੱਚ ਮਦਦ ਕੀਤੀ। ਕੁਝ ਲੋਕਾਂ ਨੇ ਵਰਮੀਕੰਪੋਸਟਿੰਗ ਬਾਰੇ ਮਾਰਗਦਰਸ਼ਨ ਲਈ ਪ੍ਰੋਗਰਾਮ ਤੋਂ ਬਾਅਦ ਫ਼ੋਨ ਕੀਤਾ, ਜਦੋਂ ਕਿ ਔਰਤਾਂ ਮਸਾਲੇ, ਸਾਬਣ ਅਤੇ ਕਢਾਈ ਦਾ ਕੰਮ ਕਰਦੀਆਂ ਰਹੀਆਂ। ਫਾਲੋ-ਅੱਪ ਦੌਰਾਨ, ਭਾਗੀਦਾਰਾਂ ਨੇ ਸਾਨੂੰ ਦੱਸਿਆ ਕਿ ਉਹ ਕਿੱਥੇ ਆਤਮ-ਵਿਸ਼ਵਾਸ ਮਹਿਸੂਸ ਕਰਦੇ ਹਨ ਅਤੇ ਕਿੱਥੇ ਉਨ੍ਹਾਂ ਨੂੰ ਹੋਰ ਸਹਾਇਤਾ ਦੀ ਲੋੜ ਹੈ।"
  },
  "We now plan livelihood training with practice and continued guidance in mind. The aim is to help each participant leave with a skill they can keep using.": {
    en: "We now plan livelihood training with practice and continued guidance in mind. The aim is to help each participant leave with a skill they can keep using.",
    pa: "ਹੁਣ ਅਸੀਂ ਅਭਿਆਸ ਅਤੇ ਨਿਰੰਤਰ ਮਾਰਗਦਰਸ਼ਨ ਨੂੰ ਧਿਆਨ ਵਿੱਚ ਰੱਖਦੇ ਹੋਏ ਰੋਜ਼ੀ-ਰੋਟੀ ਦੀ ਸਿਖਲਾਈ ਦੀ ਯੋਜਨਾ ਬਣਾਉਂਦੇ ਹਾਂ। ਉਦੇਸ਼ ਹਰੇਕ ਭਾਗੀਦਾਰ ਨੂੰ ਇੱਕ ਅਜਿਹੇ ਹੁਨਰ ਨਾਲ ਜਾਣ ਵਿੱਚ ਮਦਦ ਕਰਨਾ ਹੈ ਜਿਸਦੀ ਵਰਤੋਂ ਉਹ ਜਾਰੀ ਰੱਖ ਸਕਣ।"
  },
  "Support practical learning": {
    en: "Support practical learning",
    pa: "ਵਰਤੋਂਯੋਗ ਸਿੱਖਿਆ ਨੂੰ ਸਹਿਯੋਗ ਦਿਓ"
  },
  "Help more participants turn training into paid work.": {
    en: "Help more participants turn training into paid work.",
    pa: "ਹੋਰ ਭਾਗੀਦਾਰਾਂ ਨੂੰ ਸਿੱਖੇ ਹੁਨਰ ਰਾਹੀਂ ਕਮਾਈ ਸ਼ੁਰੂ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰੋ।"
  },
  "Support the programme": {
    en: "Support the programme",
    pa: "ਪ੍ਰੋਗਰਾਮ ਨੂੰ ਸਹਿਯੋਗ ਦਿਓ"
  },
  "A story that began with the courage to speak.": {
    en: "A story that began with the courage to speak.",
    pa: "ਇੱਕ ਕਹਾਣੀ, ਜਿਸਦੀ ਸ਼ੁਰੂਆਤ ਬੋਲਣ ਦੀ ਹਿੰਮਤ ਨਾਲ ਹੋਈ।"
  },
  "Follow the journey": {
    en: "Follow the journey",
    pa: "ਸਾਡਾ ਸਫ਼ਰ ਵੇਖੋ"
  },
  "The beginning": {
    en: "The beginning",
    pa: "ਸ਼ੁਰੂਆਤ"
  },
  "A platform for conversations that were difficult to start.": {
    en: "A platform for conversations that were difficult to start.",
    pa: "ਉਹਨਾਂ ਗੱਲਾਂ ਲਈ ਇੱਕ ਮੰਚ, ਜਿਨ੍ਹਾਂ ਬਾਰੇ ਬੋਲਣਾ ਆਸਾਨ ਨਹੀਂ ਸੀ।"
  },
  "The early work brought social issues into the open through dialogue and creative expression.": {
    en: "The early work brought social issues into the open through dialogue and creative expression.",
    pa: "ਸ਼ੁਰੂਆਤੀ ਕੰਮ ਨੇ ਸੰਵਾਦ ਅਤੇ ਰਚਨਾਤਮਕ ਪ੍ਰਗਟਾਵੇ ਰਾਹੀਂ ਸਮਾਜਿਕ ਮੁੱਦਿਆਂ ਨੂੰ ਖੁੱਲ੍ਹ ਕੇ ਸਾਹਮਣੇ ਲਿਆਂਦਾ।"
  },
  "written and directed by Jyoti Bawa, addressed female foeticide, gender discrimination and the dignity of girls.": {
    en: "written and directed by Jyoti Bawa, addressed female foeticide, gender discrimination and the dignity of girls.",
    pa: "ਜੋਤੀ ਬਾਵਾ ਦੁਆਰਾ ਲਿਖਿਆ ਅਤੇ ਨਿਰਦੇਸ਼ਿਤ, ਜਿਸ ਵਿੱਚ ਮਾਦਾ ਭਰੂਣ ਹੱਤਿਆ, ਲਿੰਗ ਵਿਤਕਰੇ ਅਤੇ ਲੜਕੀਆਂ ਦੇ ਸਨਮਾਨ ਨੂੰ ਸੰਬੋਧਿਤ ਕੀਤਾ ਗਿਆ ਸੀ।"
  },
  "It established a principle that still shapes Punjabi Samvad: people engage more deeply when an issue is made human, immediate and possible to discuss.": {
    en: "It established a principle that still shapes Punjabi Samvad: people engage more deeply when an issue is made human, immediate and possible to discuss.",
    pa: "ਇਸ ਨੇ ਇੱਕ ਅਜਿਹਾ ਸਿਧਾਂਤ ਸਥਾਪਿਤ ਕੀਤਾ ਜੋ ਅੱਜ ਵੀ ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੂੰ ਰੂਪ ਦਿੰਦਾ ਹੈ: ਲੋਕ ਵਧੇਰੇ ਡੂੰਘਾਈ ਨਾਲ ਜੁੜਦੇ ਹਨ ਜਦੋਂ ਕਿਸੇ ਮੁੱਦੇ ਨੂੰ ਮਨੁੱਖੀ, ਤਤਕਾਲੀ ਅਤੇ ਚਰਚਾ ਕਰਨ ਯੋਗ ਬਣਾਇਆ ਜਾਂਦਾ ਹੈ।"
  },
  "Theatre became an early language of public awareness.": {
    en: "Theatre became an early language of public awareness.",
    pa: "ਰੰਗਮੰਚ ਜਨਤਕ ਜਾਗਰੂਕਤਾ ਦੀ ਇੱਕ ਸ਼ੁਰੂਆਤੀ ਭਾਸ਼ਾ ਬਣ ਗਿਆ।"
  },
  "people reached": {
    en: "people reached",
    pa: "ਲੋਕਾਂ ਤੱਕ ਪਹੁੰਚ"
  },
  "helped communities confront female foeticide and discrimination against girls in a shared public space.": {
    en: "helped communities confront female foeticide and discrimination against girls in a shared public space.",
    pa: "ਸਾਂਝੇ ਜਨਤਕ ਸਥਾਨਾਂ ਵਿੱਚ ਭਾਈਚਾਰਿਆਂ ਨੂੰ ਮਾਦਾ ਭਰੂਣ ਹੱਤਿਆ ਅਤੇ ਲੜਕੀਆਂ ਵਿਰੁੱਧ ਹੁੰਦੇ ਵਿਤਕਰੇ ਦਾ ਸਾਹਮਣਾ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕੀਤੀ।"
  },
  "Built step by step, with communities at the centre.": {
    en: "Built step by step, with communities at the centre.",
    pa: "ਕਦਮ-ਦਰ-ਕਦਮ ਅੱਗੇ ਵਧਿਆ ਕੰਮ, ਜਿਸਦੇ ਕੇਂਦਰ ਵਿੱਚ ਹਮੇਸ਼ਾ ਸਮੁਦਾਇ ਰਹੇ।"
  },
  "From one urgent issue to a connected view of social well-being.": {
    en: "From one urgent issue to a connected view of social well-being.",
    pa: "ਇੱਕ ਤੁਰੰਤ ਸਮਾਜਿਕ ਮਸਲੇ ਤੋਂ ਸਮੁੱਚੀ ਸਮਾਜਿਕ ਭਲਾਈ ਦੀ ਸੋਚ ਤੱਕ।"
  },
  "Education and vocational programmes created opportunities for women, girls and young people. Health work addressed HIV/AIDS, menstrual health and mental well-being. Substance-abuse prevention combined expert sessions, community outreach and film.": {
    en: "Education and vocational programmes created opportunities for women, girls and young people. Health work addressed HIV/AIDS, menstrual health and mental well-being. Substance-abuse prevention combined expert sessions, community outreach and film.",
    pa: "ਸਿੱਖਿਆ ਅਤੇ ਕਿੱਤਾਮੁਖੀ ਪ੍ਰੋਗਰਾਮਾਂ ਨੇ ਔਰਤਾਂ, ਲੜਕੀਆਂ ਅਤੇ ਨੌਜਵਾਨਾਂ ਲਈ ਮੌਕੇ ਪੈਦਾ ਕੀਤੇ। ਸਿਹਤ ਸਬੰਧੀ ਕੰਮਾਂ ਨੇ ਐੱਚ.ਆਈ.ਵੀ./ਏਡਜ਼, ਮਾਹਵਾਰੀ ਸਿਹਤ ਅਤੇ ਮਾਨਸਿਕ ਤੰਦਰੁਸਤੀ ਨੂੰ ਸੰਬੋਧਿਤ ਕੀਤਾ। ਨਸ਼ਿਆਂ ਦੀ ਰੋਕਥਾਮ ਲਈ ਮਾਹਰਾਂ ਦੇ ਸੈਸ਼ਨਾਂ, ਭਾਈਚਾਰਕ ਪਹੁੰਚ ਅਤੇ ਫਿਲਮਾਂ ਨੂੰ ਆਪਸ ਵਿੱਚ ਜੋੜਿਆ ਗਿਆ।"
  },
  "Learning and opportunity": {
    en: "Learning and opportunity",
    pa: "ਸਿੱਖਣਾ ਅਤੇ ਮੌਕੇ"
  },
  "The organisation moved forward without losing sight of why it began.": {
    en: "The organisation moved forward without losing sight of why it began.",
    pa: "ਸੰਸਥਾ ਅੱਗੇ ਵਧਦੀ ਰਹੀ, ਪਰ ਜਿਸ ਮਕਸਦ ਨਾਲ ਇਹ ਸ਼ੁਰੂ ਹੋਈ ਸੀ, ਉਹ ਕਦੇ ਨਜ਼ਰੋਂ ਨਹੀਂ ਹਟਿਆ।"
  },
  "After Amit Bawa’s passing in 2014, Jyoti Bawa continued the work they began together. As President, she leads Punjabi Samvad across women’s empowerment, education, public health, mental well-being, substance-abuse awareness and Punjabi culture.": {
    en: "After Amit Bawa’s passing in 2014, Jyoti Bawa continued the work they began together. As President, she leads Punjabi Samvad across women’s empowerment, education, public health, mental well-being, substance-abuse awareness and Punjabi culture.",
    pa: "2014 ਵਿੱਚ ਅਮਿਤ ਬਾਵਾ ਦੇ ਦੇਹਾਂਤ ਤੋਂ ਬਾਅਦ, ਜੋਤੀ ਬਾਵਾ ਨੇ ਉਨ੍ਹਾਂ ਦੁਆਰਾ ਮਿਲ ਕੇ ਸ਼ੁਰੂ ਕੀਤੇ ਕੰਮ ਨੂੰ ਜਾਰੀ ਰੱਖਿਆ। ਪ੍ਰਧਾਨ ਵਜੋਂ, ਉਹ ਔਰਤਾਂ ਦੇ ਸਸ਼ਕਤੀਕਰਨ, ਸਿੱਖਿਆ, ਜਨਤਕ ਸਿਹਤ, ਮਾਨਸਿਕ ਤੰਦਰੁਸਤੀ, ਨਸ਼ੀਲੇ ਪਦਾਰਥਾਂ ਦੀ ਦੁਰਵਰਤੋਂ ਪ੍ਰਤੀ ਜਾਗਰੂਕਤਾ ਅਤੇ ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ ਵਿੱਚ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀ ਅਗਵਾਈ ਕਰਦੀ ਹੈ।"
  },
  "The methods have grown and the partnerships have widened, but dialogue remains the starting point.": {
    en: "The methods have grown and the partnerships have widened, but dialogue remains the starting point.",
    pa: "ਤਰੀਕੇ ਵਧੇ ਹਨ ਅਤੇ ਭਾਈਵਾਲੀ ਦਾ ਵਿਸਥਾਰ ਹੋਇਆ ਹੈ, ਪਰ ਗੱਲਬਾਤ ਸ਼ੁਰੂਆਤੀ ਬਿੰਦੂ ਬਣੀ ਹੋਈ ਹੈ।"
  },
  "People who strengthen the work": {
    en: "People who strengthen the work",
    pa: "ਉਹ ਲੋਕ ਜੋ ਸਾਡੇ ਕੰਮ ਨੂੰ ਮਜ਼ਬੂਤੀ ਦਿੰਦੇ ਹਨ"
  },
  "The people who stand behind the work.": {
    en: "The people who stand behind the work.",
    pa: "ਇਸ ਕੰਮ ਦੇ ਪਿੱਛੇ ਖੜ੍ਹੇ ਲੋਕ।"
  },
  "Punjabi Samvad is fortunate to have people who believe in its work and support it in many different ways. Some contribute financially, while others share their expertise, resources, connections or practical help when it is needed. Each contribution, large or small, helps Punjabi Samvad continue its work with communities and take meaningful ideas forward.": {
    en: "Punjabi Samvad is fortunate to have people who believe in its work and support it in many different ways. Some contribute financially, while others share their expertise, resources, connections or practical help when it is needed. Each contribution, large or small, helps Punjabi Samvad continue its work with communities and take meaningful ideas forward.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਭਾਗਸ਼ਾਲੀ ਹੈ ਕਿ ਉਸ ਕੋਲ ਅਜਿਹੇ ਲੋਕ ਹਨ ਜੋ ਇਸਦੇ ਕੰਮ ਵਿੱਚ ਵਿਸ਼ਵਾਸ ਕਰਦੇ ਹਨ ਅਤੇ ਕਈ ਵੱਖੋ-ਵੱਖਰੇ ਤਰੀਕਿਆਂ ਨਾਲ ਇਸਦਾ ਸਮਰਥਨ ਕਰਦੇ ਹਨ। ਕੁਝ ਵਿੱਤੀ ਯੋਗਦਾਨ ਪਾਉਂਦੇ ਹਨ, ਜਦੋਂ ਕਿ ਦੂਸਰੇ ਲੋੜ ਪੈਣ 'ਤੇ ਆਪਣੀ ਮੁਹਾਰਤ, ਸਰੋਤ, ਸੰਪਰਕ ਜਾਂ ਵਿਹਾਰਕ ਮਦਦ ਸਾਂਝੀ ਕਰਦੇ ਹਨ। ਹਰੇਕ ਯੋਗਦਾਨ, ਛੋਟਾ ਜਾਂ ਵੱਡਾ, ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੂੰ ਭਾਈਚਾਰਿਆਂ ਨਾਲ ਕੰਮ ਜਾਰੀ ਰੱਖਣ ਅਤੇ ਸਾਰਥਕ ਵਿਚਾਰਾਂ ਨੂੰ ਅੱਗੇ ਵਧਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।"
  },
  "A supporter of Punjabi Samvad": {
    en: "A supporter of Punjabi Samvad",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਸਹਿਯੋਗੀ"
  },
  "See how the work is delivered": {
    en: "See how the work is delivered",
    pa: "ਵੇਖੋ ਇਹ ਕੰਮ ਕਿਵੇਂ ਕੀਤਾ ਜਾਂਦਾ ਹੈ"
  },
  "Understand the audience and setting.": {
    en: "Understand the audience and setting.",
    pa: "ਦਰਸ਼ਕਾਂ ਅਤੇ ਸੈਟਿੰਗ ਨੂੰ ਸਮਝੋ।"
  },
  "Design": {
    en: "Design",
    pa: "ਯੋਜਨਾ ਬਣਾਓ"
  },
  "Choose the right expertise and format.": {
    en: "Choose the right expertise and format.",
    pa: "ਸਹੀ ਮੁਹਾਰਤ ਅਤੇ ਫਾਰਮੈਟ ਚੁਣੋ।"
  },
  "Deliver": {
    en: "Deliver",
    pa: "ਪ੍ਰੋਗਰਾਮ ਲਾਗੂ ਕਰੋ"
  },
  "Create room for questions and participation.": {
    en: "Create room for questions and participation.",
    pa: "ਸਵਾਲਾਂ ਅਤੇ ਭਾਗੀਦਾਰੀ ਲਈ ਜਗ੍ਹਾ ਬਣਾਓ।"
  },
  "Learn": {
    en: "Learn",
    pa: "ਸਿੱਖੋ ਅਤੇ ਸੁਧਾਰੋ"
  },
  "Use feedback to strengthen future work.": {
    en: "Use feedback to strengthen future work.",
    pa: "ਭਵਿੱਖ ਦੇ ਕੰਮ ਨੂੰ ਮਜ਼ਬੂਤ ​​ਕਰਨ ਲਈ ਫੀਡਬੈਕ ਦੀ ਵਰਤੋਂ ਕਰੋ।"
  },
  "From recent workshops": {
    en: "From recent workshops",
    pa: "ਹਾਲੀਆ ਵਰਕਸ਼ਾਪਾਂ ਤੋਂ"
  },
  "Learning by making.": {
    en: "Learning by making.",
    pa: "ਆਪਣੇ ਹੱਥੀਂ ਕਰਕੇ ਸਿੱਖਣਾ।"
  },
  "Soap making, traditional masala preparation and Phulkari were taught through practical sessions for rural girls and women.": {
    en: "Soap making, traditional masala preparation and Phulkari were taught through practical sessions for rural girls and women.",
    pa: "ਸਾਬਣ ਬਣਾਉਣਾ, ਰਵਾਇਤੀ ਮਸਾਲਾ ਤਿਆਰ ਕਰਨਾ ਅਤੇ ਫੁਲਕਾਰੀ ਪੇਂਡੂ ਕੁੜੀਆਂ ਅਤੇ ਔਰਤਾਂ ਲਈ ਪ੍ਰੈਕਟੀਕਲ ਸੈਸ਼ਨਾਂ ਰਾਹੀਂ ਸਿਖਾਈ ਜਾਂਦੀ ਸੀ।"
  },
  "Read the participant stories": {
    en: "Read the participant stories",
    pa: "ਭਾਗੀਦਾਰਾਂ ਦੀਆਂ ਕਹਾਣੀਆਂ ਪੜ੍ਹੋ"
  },
  "Digital learning with UNICEF": {
    en: "Digital learning with UNICEF",
    pa: "UNICEF ਨਾਲ ਡਿਜ਼ਿਟਲ ਸਿੱਖਿਆ"
  },
  "Free, job-relevant learning for young people.": {
    en: "Free, job-relevant learning for young people.",
    pa: "ਨੌਜਵਾਨਾਂ ਲਈ ਮੁਫ਼ਤ, ਰੋਜ਼ਗਾਰ ਨਾਲ ਸੰਬੰਧਿਤ ਸਿੱਖਿਆ।"
  },
  "Financial literacy with HDFC Securities": {
    en: "Financial literacy with HDFC Securities",
    pa: "HDFC Securities ਨਾਲ ਵਿੱਤੀ ਸਾਖਰਤਾ"
  },
  "Practical learning for everyday money decisions.": {
    en: "Practical learning for everyday money decisions.",
    pa: "ਰੋਜ਼ਾਨਾ ਪੈਸਿਆਂ ਨਾਲ ਜੁੜੇ ਫ਼ੈਸਲਿਆਂ ਲਈ ਵਰਤੋਂਯੋਗ ਸਿੱਖਿਆ।"
  },
  "The national self-risk assessment offers a private route to reliable HIV and STI information, testing guidance and treatment support.": {
    en: "The national self-risk assessment offers a private route to reliable HIV and STI information, testing guidance and treatment support.",
    pa: "ਰਾਸ਼ਟਰੀ ਸਵੈ-ਜੋਖਮ ਮੁਲਾਂਕਣ ਭਰੋਸੇਯੋਗ HIV ਅਤੇ STI ਜਾਣਕਾਰੀ, ਟੈਸਟਿੰਗ ਮਾਰਗਦਰਸ਼ਨ ਅਤੇ ਇਲਾਜ ਸਹਾਇਤਾ ਲਈ ਇੱਕ ਨਿੱਜੀ ਰਸਤਾ ਪੇਸ਼ ਕਰਦਾ ਹੈ।"
  },
  "Use the QR code in the official campaign artwork, visit Breakfree India or call the national AIDS helpline at 1097.": {
    en: "Use the QR code in the official campaign artwork, visit Breakfree India or call the national AIDS helpline at 1097.",
    pa: "ਅਧਿਕਾਰਤ ਮੁਹਿੰਮ ਕਲਾਕ੍ਰਿਤੀ ਵਿੱਚ QR ਕੋਡ ਦੀ ਵਰਤੋਂ ਕਰੋ, ਬ੍ਰੇਕਫ੍ਰੀ ਇੰਡੀਆ 'ਤੇ ਜਾਓ ਜਾਂ 1097 'ਤੇ ਰਾਸ਼ਟਰੀ ਏਡਜ਼ ਹੈਲਪਲਾਈਨ 'ਤੇ ਕਾਲ ਕਰੋ।"
  },
  "Bring a programme to your community or institution": {
    en: "Bring a programme to your community or institution",
    pa: "ਆਪਣੇ ਭਾਈਚਾਰੇ ਜਾਂ ਸੰਸਥਾ ਵਿੱਚ ਇੱਕ ਪ੍ਰੋਗਰਾਮ ਲਿਆਓ"
  },
  "Explore the programmes behind the figures": {
    en: "Explore the programmes behind the figures",
    pa: "ਅੰਕੜਿਆਂ ਦੇ ਪਿੱਛੇ ਪ੍ਰੋਗਰਾਮਾਂ ਦੀ ਪੜਚੋਲ ਕਰੋ"
  },
  "Gireesh Damodaran\"": {
    en: "Gireesh Damodaran\"",
    pa: "Gireesh Damodaran\""
  },
  "Corporate Strategist, Founder & CEO, GPNP PROSPERO\"": {
    en: "Corporate Strategist, Founder & CEO, GPNP PROSPERO\"",
    pa: "Corporate Strategist, Founder & CEO, GPNP PROSPERO\""
  },
  "Gireesh Damodaran is a corporate strategist, entrepreneur and founder and CEO of GPNP PROSPERO Corporate Strategists. An alumnus of IIM Bangalore, he has worked across strategic planning, project development and business structuring. Based in Dubai, he brings an international perspective to his work.\"": {
    en: "Gireesh Damodaran is a corporate strategist, entrepreneur and founder and CEO of GPNP PROSPERO Corporate Strategists. An alumnus of IIM Bangalore, he has worked across strategic planning, project development and business structuring. Based in Dubai, he brings an international perspective to his work.\"",
    pa: "Gireesh Damodaran is a corporate strategist, entrepreneur and founder and CEO of GPNP PROSPERO Corporate Strategists. An alumnus of IIM Bangalore, he has worked across strategic planning, project development and business structuring. Based in Dubai, he brings an international perspective to his work.\""
  },
  "For Punjabi Samvad, Gireesh helps shape projects and initiatives from concept to execution. He contributes to project design, strategic planning, business models and institutional development.\"": {
    en: "For Punjabi Samvad, Gireesh helps shape projects and initiatives from concept to execution. He contributes to project design, strategic planning, business models and institutional development.\"",
    pa: "For Punjabi Samvad, Gireesh helps shape projects and initiatives from concept to execution. He contributes to project design, strategic planning, business models and institutional development.\""
  },
  "His work helps the organisation set clearer goals, develop sound partnerships and plan for long-term social impact.\"": {
    en: "His work helps the organisation set clearer goals, develop sound partnerships and plan for long-term social impact.\"",
    pa: "His work helps the organisation set clearer goals, develop sound partnerships and plan for long-term social impact.\""
  },
  "Mandeep Singh\"": {
    en: "Mandeep Singh\"",
    pa: "Mandeep Singh\""
  },
  "Chartered Accountant, Vipul Mandeep Arora & Associates\"": {
    en: "Chartered Accountant, Vipul Mandeep Arora & Associates\"",
    pa: "Chartered Accountant, Vipul Mandeep Arora & Associates\""
  },
  "Mandeep Singh is a Chartered Accountant with Vipul Mandeep Arora & Associates.\"": {
    en: "Mandeep Singh is a Chartered Accountant with Vipul Mandeep Arora & Associates.\"",
    pa: "Mandeep Singh is a Chartered Accountant with Vipul Mandeep Arora & Associates.\""
  },
  "He provides financial support to Punjabi Samvad and helps the organisation fund scholarships for students who need assistance to continue their education.\"": {
    en: "He provides financial support to Punjabi Samvad and helps the organisation fund scholarships for students who need assistance to continue their education.\"",
    pa: "He provides financial support to Punjabi Samvad and helps the organisation fund scholarships for students who need assistance to continue their education.\""
  },
  "Dr. Gurbilas P. Singh\"": {
    en: "Dr. Gurbilas P. Singh\"",
    pa: "Dr. Gurbilas P. Singh\""
  },
  "Medical Professional, Supporter of Punjabi Samvad\"": {
    en: "Medical Professional, Supporter of Punjabi Samvad\"",
    pa: "Medical Professional, Supporter of Punjabi Samvad\""
  },
  "Dr. Gurbilas P. Singh is a medical professional and a supporter of Punjabi Samvad’s work across education, health, awareness and community welfare.\"": {
    en: "Dr. Gurbilas P. Singh is a medical professional and a supporter of Punjabi Samvad’s work across education, health, awareness and community welfare.\"",
    pa: "Dr. Gurbilas P. Singh is a medical professional and a supporter of Punjabi Samvad’s work across education, health, awareness and community welfare.\""
  },
  "He supports the organisation beyond any single programme, helping Punjabi Samvad sustain its community work and take new initiatives forward.\"": {
    en: "He supports the organisation beyond any single programme, helping Punjabi Samvad sustain its community work and take new initiatives forward.\"",
    pa: "He supports the organisation beyond any single programme, helping Punjabi Samvad sustain its community work and take new initiatives forward.\""
  },
  "Jasmine Bawa\"": {
    en: "Jasmine Bawa\"",
    pa: "Jasmine Bawa\""
  },
  "Lifetime Member, Programme & Event Support\"": {
    en: "Lifetime Member, Programme & Event Support\"",
    pa: "Lifetime Member, Programme & Event Support\""
  },
  "Jasmine Bawa is a lifetime member of Punjabi Samvad. She anchors events and helps the organisation develop project ideas and proposals.\"": {
    en: "Jasmine Bawa is a lifetime member of Punjabi Samvad. She anchors events and helps the organisation develop project ideas and proposals.\"",
    pa: "Jasmine Bawa is a lifetime member of Punjabi Samvad. She anchors events and helps the organisation develop project ideas and proposals.\""
  },
  "She brings practical support to both planning and public programmes, helping the team prepare projects and communicate them clearly.\"": {
    en: "She brings practical support to both planning and public programmes, helping the team prepare projects and communicate them clearly.\"",
    pa: "She brings practical support to both planning and public programmes, helping the team prepare projects and communicate them clearly.\""
  },
  "Sukhpal Singh\"": {
    en: "Sukhpal Singh\"",
    pa: "Sukhpal Singh\""
  },
  "Writer, Education Scholarship Supporter\"": {
    en: "Writer, Education Scholarship Supporter\"",
    pa: "Writer, Education Scholarship Supporter\""
  },
  "Sukhpal Singh is a writer who supports Punjabi Samvad’s education scholarship work through donations.\"": {
    en: "Sukhpal Singh is a writer who supports Punjabi Samvad’s education scholarship work through donations.\"",
    pa: "Sukhpal Singh is a writer who supports Punjabi Samvad’s education scholarship work through donations.\""
  },
  "His contribution helps students continue their studies when financial circumstances might otherwise interrupt their education.\"": {
    en: "His contribution helps students continue their studies when financial circumstances might otherwise interrupt their education.\"",
    pa: "His contribution helps students continue their studies when financial circumstances might otherwise interrupt their education.\""
  },
  "Dr Baljit Singh Chahal\"": {
    en: "Dr Baljit Singh Chahal\"",
    pa: "Dr Baljit Singh Chahal\""
  },
  "Veterinary Doctor, Education Scholarship Supporter\"": {
    en: "Veterinary Doctor, Education Scholarship Supporter\"",
    pa: "Veterinary Doctor, Education Scholarship Supporter\""
  },
  "Dr Baljit Singh Chahal is a veterinary doctor and a supporter of Punjabi Samvad’s education scholarship work.\"": {
    en: "Dr Baljit Singh Chahal is a veterinary doctor and a supporter of Punjabi Samvad’s education scholarship work.\"",
    pa: "Dr Baljit Singh Chahal is a veterinary doctor and a supporter of Punjabi Samvad’s education scholarship work.\""
  },
  "His donations help students meet education costs and continue working towards their academic goals.\"": {
    en: "His donations help students meet education costs and continue working towards their academic goals.\"",
    pa: "His donations help students meet education costs and continue working towards their academic goals.\""
  },
  "Raghav Seth\"": {
    en: "Raghav Seth\"",
    pa: "Raghav Seth\""
  },
  "Education Scholarship Supporter\"": {
    en: "Education Scholarship Supporter\"",
    pa: "Education Scholarship Supporter\""
  },
  "Raghav Seth supports Punjabi Samvad’s education scholarships through donations.\"": {
    en: "Raghav Seth supports Punjabi Samvad’s education scholarships through donations.\"",
    pa: "Raghav Seth supports Punjabi Samvad’s education scholarships through donations.\""
  },
  "His contribution gives students practical financial support so they can remain in education and pursue their studies.": {
    en: "His contribution gives students practical financial support so they can remain in education and pursue their studies.",
    pa: "ਉਸਦਾ ਯੋਗਦਾਨ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਵਿਹਾਰਕ ਵਿੱਤੀ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ ਤਾਂ ਜੋ ਉਹ ਸਿੱਖਿਆ ਵਿੱਚ ਬਣੇ ਰਹਿਣ ਅਤੇ ਆਪਣੀ ਪੜ੍ਹਾਈ ਜਾਰੀ ਰੱਖ ਸਕਣ।"
  },
  "These policies guide how Punjabi Samvad operates, protects individuals and manages resources. The policies and statutory registers depend on the organisation's current structure and applicable law. Contact us for the current signed or approved document.": {
    en: "These policies guide how Punjabi Samvad operates, protects individuals and manages resources. The policies and statutory registers depend on the organisation's current structure and applicable law. Contact us for the current signed or approved document.",
    pa: "ਇਹ ਨੀਤੀਆਂ ਨਿਰਦੇਸ਼ਿਤ ਕਰਦੀਆਂ ਹਨ ਕਿ ਪੰਜਾਬੀ ਸੰਵਾਦ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ, ਵਿਅਕਤੀਆਂ ਦੀ ਸੁਰੱਖਿਆ ਕਰਦਾ ਹੈ ਅਤੇ ਸਰੋਤਾਂ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰਦਾ ਹੈ। ਨੀਤੀਆਂ ਅਤੇ ਵਿਧਾਨਕ ਰਜਿਸਟਰ ਸੰਸਥਾ ਦੇ ਮੌਜੂਦਾ ਢਾਂਚੇ ਅਤੇ ਲਾਗੂ ਕਾਨੂੰਨ 'ਤੇ ਨਿਰਭਰ ਕਰਦੇ ਹਨ। ਮੌਜੂਦਾ ਹਸਤਾਖਰਿਤ ਜਾਂ ਪ੍ਰਵਾਨਿਤ ਦਸਤਾਵੇਜ਼ ਲਈ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।"
  },
  "Report a concern": {
    en: "Report a concern",
    pa: "ਕਿਸੇ ਚਿੰਤਾ ਜਾਂ ਗੜਬੜ ਦੀ ਸੂਚਨਾ ਦਿਓ"
  },
  "Use these contacts for a safeguarding, conduct, fraud, privacy or workplace concern. Call police or emergency services if someone faces immediate danger.": {
    en: "Use these contacts for a safeguarding, conduct, fraud, privacy or workplace concern. Call police or emergency services if someone faces immediate danger.",
    pa: "ਸੁਰੱਖਿਆ, ਆਚਰਣ, ਧੋਖਾਧੜੀ, ਨਿੱਜਤਾ ਜਾਂ ਕੰਮ ਵਾਲੀ ਥਾਂ ਸੰਬੰਧੀ ਕਿਸੇ ਚਿੰਤਾ ਲਈ ਇਹਨਾਂ ਸੰਪਕਾਂ ਦੀ ਵਰਤੋਂ ਕਰੋ। ਜੇਕਰ ਕੋਈ ਤੁਰੰਤ ਖ਼ਤਰੇ ਦਾ ਸਾਹਮਣਾ ਕਰ ਰਿਹਾ ਹੈ, ਤਾਂ ਪੁਲਿਸ ਜਾਂ ਐਮਰਜੈਂਸੀ ਸੇਵਾਵਾਂ ਨੂੰ ਫ਼ੋਨ ਕਰੋ।"
  },
  "Version": {
    en: "Version",
    pa: "ਸੰਸਕਰਣ"
  },
  "Published": {
    en: "Published",
    pa: "ਪ੍ਰਕਾਸ਼ਿਤ"
  },
  "Review by": {
    en: "Review by",
    pa: "ਦੁਆਰਾ ਸਮੀਖਿਆ"
  },
  "Owner": {
    en: "Owner",
    pa: "ਮਾਲਕ"
  },
  "On this page": {
    en: "On this page",
    pa: "ਇਸ ਪੰਨੇ 'ਤੇ"
  },
  "Previous policy": {
    en: "Previous policy",
    pa: "ਪਿਛਲੀ ਨੀਤੀ"
  },
  "Next policy": {
    en: "Next policy",
    pa: "ਅਗਲੀ ਨੀਤੀ"
  },
  "Search Punjabi Samvad": {
    en: "Search Punjabi Samvad",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਵਿੱਚ ਖੋਜੋ"
  },
  "Find programmes, focus areas, impact information, policies and ways to take part.": {
    en: "Find programmes, focus areas, impact information, policies and ways to take part.",
    pa: "ਪ੍ਰੋਗਰਾਮ, ਕਾਰਜ ਖੇਤਰ, ਪ੍ਰਭਾਵ ਸੰਬੰਧੀ ਜਾਣਕਾਰੀ, ਨੀਤੀਆਂ ਅਤੇ ਸਾਡੇ ਨਾਲ ਜੁੜਨ ਦੇ ਤਰੀਕੇ ਲੱਭੋ।"
  },
  "Work seen up close.": {
    en: "Work seen up close.",
    pa: "ਨੇੜਿਓਂ ਦੇਖਿਆ ਗਿਆ ਕੰਮ।"
  },
  "Programmes, performances, public-health campaigns and community gatherings documented across Punjabi Samvad's work.": {
    en: "Programmes, performances, public-health campaigns and community gatherings documented across Punjabi Samvad's work.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਕੰਮ ਵਿੱਚ ਦਸਤਾਵੇਜ਼ਬੱਧ ਕੀਤੇ ਗਏ ਪ੍ਰੋਗਰਾਮ, ਪੇਸ਼ਕਾਰੀਆਂ, ਜਨਤਕ-ਸਿਹਤ ਮੁਹਿੰਮਾਂ ਅਤੇ ਭਾਈਚਾਰਕ ਇਕੱਠ।"
  },
  "Learn how the work is organised": {
    en: "Learn how the work is organised",
    pa: "ਜਾਣੋ ਕਿ ਕੰਮ ਕਿਵੇਂ ਸੰਗਠਿਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ"
  },
  "Internships and volunteering with Punjabi Samvad.": {
    en: "Internships and volunteering with Punjabi Samvad.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਨਾਲ ਇੰਟਰਨਸ਼ਿਪ ਅਤੇ ਵਲੰਟੀਅਰਿੰਗ।"
  },
  "Take on a focused assignment, work with people outside your usual academic setting and turn what you know into something a community programme can use.": {
    en: "Take on a focused assignment, work with people outside your usual academic setting and turn what you know into something a community programme can use.",
    pa: "ਇੱਕ ਫੋਕਸਡ ਅਸਾਈਨਮੈਂਟ ਲਓ, ਆਪਣੇ ਆਮ ਅਕਾਦਮਿਕ ਮਾਹੌਲ ਤੋਂ ਬਾਹਰ ਦੇ ਲੋਕਾਂ ਨਾਲ ਕੰਮ ਕਰੋ ਅਤੇ ਆਪਣੇ ਗਿਆਨ ਨੂੰ ਅਜਿਹੀ ਚੀਜ਼ ਵਿੱਚ ਬਦਲੋ ਜਿਸਦੀ ਵਰਤੋਂ ਕੋਈ ਭਾਈਚਾਰਕ ਪ੍ਰੋਗਰਾਮ ਕਰ ਸਕੇ।"
  },
  "Experience with a purpose": {
    en: "Experience with a purpose",
    pa: "ਉਦੇਸ਼ ਨਾਲ ਅਨੁਭਵ"
  },
  "Defined work, practical exposure and a contribution you can explain": {
    en: "Defined work, practical exposure and a contribution you can explain",
    pa: "ਨਿਰਧਾਰਤ ਕੰਮ, ਵਿਹਾਰਕ ਅਨੁਭਵ ਅਤੇ ਇੱਕ ਅਜਿਹਾ ਯੋਗਦਾਨ ਜਿਸਦੀ ਤੁਸੀਂ ਵਿਆਖਿਆ ਕਰ ਸਕਦੇ ਹੋ"
  },
  "Students have joined us from": {
    en: "Students have joined us from",
    pa: "ਇਨ੍ਹਾਂ ਸੰਸਥਾਵਾਂ ਦੇ ਵਿਦਿਆਰਥੀ ਸਾਡੇ ਨਾਲ ਜੁੜ ਚੁੱਕੇ ਹਨ"
  },
  "Literary and awareness campaigns": {
    en: "Literary and awareness campaigns",
    pa: "ਸਾਹਿਤਕ ਅਤੇ ਜਾਗਰੂਕਤਾ ਮੁਹਿੰਮਾਂ"
  },
  "Responsible AI for outreach": {
    en: "Responsible AI for outreach",
    pa: "ਲੋਕ ਸੰਪਰਕ ਲਈ ਜ਼ਿੰਮੇਵਾਰ AI"
  },
  "Pritish worked across literary promotion, student engagement and community outreach. He assisted with campaigns that encouraged reading and language, supported awareness activity and took part in conversations that used literature to make educational and social subjects easier to discuss.": {
    en: "Pritish worked across literary promotion, student engagement and community outreach. He assisted with campaigns that encouraged reading and language, supported awareness activity and took part in conversations that used literature to make educational and social subjects easier to discuss.",
    pa: "ਪ੍ਰੀਤਿਸ਼ ਨੇ ਸਾਹਿਤਕ ਪ੍ਰਚਾਰ, ਵਿਦਿਆਰਥੀ ਸ਼ਮੂਲੀਅਤ ਅਤੇ ਭਾਈਚਾਰਕ ਲੋਕ ਸੰਪਰਕ ਵਿੱਚ ਕੰਮ ਕੀਤਾ। ਉਸਨੇ ਉਨ੍ਹਾਂ ਮੁਹਿੰਮਾਂ ਵਿੱਚ ਸਹਾਇਤਾ ਕੀਤੀ ਜਿਨ੍ਹਾਂ ਨੇ ਪੜ੍ਹਨ ਅਤੇ ਭਾਸ਼ਾ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕੀਤਾ, ਜਾਗਰੂਕਤਾ ਗਤੀਵਿਧੀਆਂ ਦਾ ਸਮਰਥਨ ਕੀਤਾ ਅਤੇ ਉਨ੍ਹਾਂ ਗੱਲਬਾਤਾਂ ਵਿੱਚ ਹਿੱਸਾ ਲਿਆ ਜਿਨ੍ਹਾਂ ਨੇ ਵਿਦਿਅਕ ਅਤੇ ਸਮਾਜਿਕ ਵਿਸ਼ਿਆਂ 'ਤੇ ਚਰਚਾ ਕਰਨਾ ਆਸਾਨ ਬਣਾਉਣ ਲਈ ਸਾਹਿਤ ਦੀ ਵਰਤੋਂ ਕੀਤੀ।"
  },
  "He also participated in digital-awareness training focused on appropriate use of AI and ChatGPT. The placement asked him to communicate with different groups, adapt to work outside a university setting and understand how cultural activity can support wider social-awareness goals.": {
    en: "He also participated in digital-awareness training focused on appropriate use of AI and ChatGPT. The placement asked him to communicate with different groups, adapt to work outside a university setting and understand how cultural activity can support wider social-awareness goals.",
    pa: "ਉਸਨੇ AI ਅਤੇ ChatGPT ਦੀ ਉਚਿਤ ਵਰਤੋਂ 'ਤੇ ਕੇਂਦ੍ਰਿਤ ਡਿਜੀਟਲ-ਜਾਗਰੂਕਤਾ ਸਿਖਲਾਈ ਵਿੱਚ ਵੀ ਹਿੱਸਾ ਲਿਆ। ਇਸ ਪਲੇਸਮੈਂਟ ਵਿੱਚ ਉਸਨੂੰ ਵੱਖ-ਵੱਖ ਸਮੂਹਾਂ ਨਾਲ ਸੰਚਾਰ ਕਰਨ, ਯੂਨੀਵਰਸਿਟੀ ਦੇ ਮਾਹੌਲ ਤੋਂ ਬਾਹਰ ਕੰਮ ਕਰਨ ਦੇ ਅਨੁਕੂਲ ਹੋਣ ਅਤੇ ਇਹ ਸਮਝਣ ਲਈ ਕਿਹਾ ਗਿਆ ਕਿ ਸੱਭਿਆਚਾਰਕ ਗਤੀਵਿਧੀਆਂ ਕਿਵੇਂ ਵਿਆਪਕ ਸਮਾਜਿਕ-ਜਾਗਰੂਕਤਾ ਦੇ ਟੀਚਿਆਂ ਦਾ ਸਮਰਥਨ ਕਰ ਸਕਦੀਆਂ ਹਨ।"
  },
  "Student and community engagement": {
    en: "Student and community engagement",
    pa: "ਵਿਦਿਆਰਥੀ ਅਤੇ ਭਾਈਚਾਰਕ ਸ਼ਮੂਲੀਅਤ"
  },
  "Digital-awareness training": {
    en: "Digital-awareness training",
    pa: "ਡਿਜੀਟਲ-ਜਾਗਰੂਕਤਾ ਸਿਖਲਾਈ"
  },
  "Build experience that belongs on more than a résumé.": {
    en: "Build experience that belongs on more than a résumé.",
    pa: "ਅਜਿਹਾ ਅਨੁਭਵ ਹਾਸਲ ਕਰੋ ਜੋ ਸਿਰਫ਼ ਇੱਕ ਰੈਜ਼ਿਊਮੇ ਤੋਂ ਕਿਤੇ ਵੱਧ ਹੋਵੇ।"
  },
  "Choose a problem you want to understand and bring a skill you want to test. If a suitable placement is available, you will receive a clear scope of work connected to a current programme. You can leave with a stronger grasp of NGO work, practical examples to discuss in interviews and a better sense of where your abilities can be useful.": {
    en: "Choose a problem you want to understand and bring a skill you want to test. If a suitable placement is available, you will receive a clear scope of work connected to a current programme. You can leave with a stronger grasp of NGO work, practical examples to discuss in interviews and a better sense of where your abilities can be useful.",
    pa: "ਕੋਈ ਅਜਿਹੀ ਸਮੱਸਿਆ ਚੁਣੋ ਜਿਸਨੂੰ ਤੁਸੀਂ ਸਮਝਣਾ ਚਾਹੁੰਦੇ ਹੋ ਅਤੇ ਕੋਈ ਅਜਿਹਾ ਹੁਨਰ ਲਿਆਓ ਜਿਸਦੀ ਤੁਸੀਂ ਪਰਖ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ। ਜੇਕਰ ਕੋਈ ਢੁਕਵੀਂ ਪਲੇਸਮੈਂਟ ਉਪਲਬਧ ਹੈ, ਤਾਂ ਤੁਹਾਨੂੰ ਮੌਜੂਦਾ ਪ੍ਰੋਗਰਾਮ ਨਾਲ ਸਬੰਧਤ ਕੰਮ ਦਾ ਇੱਕ ਸਪੱਸ਼ਟ ਦਾਇਰਾ ਮਿਲੇਗਾ। ਤੁਸੀਂ NGO ਦੇ ਕੰਮ ਦੀ ਬਿਹਤਰ ਸਮਝ, ਇੰਟਰਵਿਊਆਂ ਵਿੱਚ ਚਰਚਾ ਕਰਨ ਲਈ ਵਿਹਾਰਕ ਉਦਾਹਰਣਾਂ ਅਤੇ ਇਸ ਗੱਲ ਦੀ ਬਿਹਤਰ ਸਮਝ ਨਾਲ ਅੱਗੇ ਵਧ ਸਕਦੇ ਹੋ ਕਿ ਤੁਹਾਡੀਆਂ ਯੋਗਤਾਵਾਂ ਕਿੱਥੇ ਲਾਭਦਾਇਕ ਹੋ ਸਕਦੀਆਂ ਹਨ।"
  },
  "Help us find the right fit": {
    en: "Help us find the right fit",
    pa: "ਸਹੀ ਚੋਣ ਲੱਭਣ ਵਿੱਚ ਸਾਡੀ ਮਦਦ ਕਰੋ"
  },
  "Your university, course and current year": {
    en: "Your university, course and current year",
    pa: "ਤੁਹਾਡੀ ਯੂਨੀਵਰਸਿਟੀ, ਕੋਰਸ ਅਤੇ ਮੌਜੂਦਾ ਸਾਲ"
  },
  "Experience you can use after the placement ends.": {
    en: "Experience you can use after the placement ends.",
    pa: "ਪਲੇਸਮੈਂਟ ਖਤਮ ਹੋਣ ਤੋਂ ਬਾਅਦ ਤੁਸੀਂ ਜਿਸ ਅਨੁਭਵ ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹੋ।"
  },
  "An internship with Punjabi Samvad gives you a close look at the decisions behind public-interest work: how an issue is researched, how information is adapted for different audiences, how an activity is organised and how the work is documented afterwards.": {
    en: "An internship with Punjabi Samvad gives you a close look at the decisions behind public-interest work: how an issue is researched, how information is adapted for different audiences, how an activity is organised and how the work is documented afterwards.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਨਾਲ ਇੰਟਰਨਸ਼ਿਪ ਤੁਹਾਨੂੰ ਜਨਤਕ ਹਿੱਤਾਂ ਦੇ ਕੰਮ ਪਿੱਛੇ ਫੈਸਲਿਆਂ 'ਤੇ ਨੇੜਿਓਂ ਨਜ਼ਰ ਮਾਰਨ ਦਾ ਮੌਕਾ ਦਿੰਦੀ ਹੈ: ਕਿਸੇ ਮੁੱਦੇ ਦੀ ਖੋਜ ਕਿਵੇਂ ਕੀਤੀ ਜਾਂਦੀ ਹੈ, ਵੱਖ-ਵੱਖ ਦਰਸ਼ਕਾਂ ਲਈ ਜਾਣਕਾਰੀ ਕਿਵੇਂ ਢਾਲੀ ਜਾਂਦੀ ਹੈ, ਕੋਈ ਗਤੀਵਿਧੀ ਕਿਵੇਂ ਆਯੋਜਿਤ ਕੀਤੀ ਜਾਂਦੀ ਹੈ ਅਤੇ ਬਾਅਦ ਵਿੱਚ ਕੰਮ ਦਾ ਦਸਤਾਵੇਜ਼ੀਕਰਨ ਕਿਵੇਂ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।"
  },
  "Your assignment is shaped around current programme needs and the skills you bring. You may research, write, prepare campaign material, support an event, organise records or help with digital communication. The scope is agreed before you begin, so you know what you are responsible for and what you should learn from it.": {
    en: "Your assignment is shaped around current programme needs and the skills you bring. You may research, write, prepare campaign material, support an event, organise records or help with digital communication. The scope is agreed before you begin, so you know what you are responsible for and what you should learn from it.",
    pa: "ਤੁਹਾਡੀ ਜ਼ਿੰਮੇਵਾਰੀ ਮੌਜੂਦਾ ਪ੍ਰੋਗਰਾਮ ਦੀਆਂ ਲੋੜਾਂ ਅਤੇ ਤੁਹਾਡੇ ਦੁਆਰਾ ਲਿਆਂਦੇ ਹੁਨਰ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਆਕਾਰ ਲੈਂਦੀ ਹੈ। ਤੁਸੀਂ ਖੋਜ ਕਰ ਸਕਦੇ ਹੋ, ਲਿਖ ਸਕਦੇ ਹੋ, ਮੁਹਿੰਮ ਸਮੱਗਰੀ ਤਿਆਰ ਕਰ ਸਕਦੇ ਹੋ, ਕਿਸੇ ਇਵੈਂਟ ਦਾ ਸਮਰਥਨ ਕਰ ਸਕਦੇ ਹੋ, ਰਿਕਾਰਡ ਵਿਵਸਥਿਤ ਕਰ ਸਕਦੇ ਹੋ ਜਾਂ ਡਿਜੀਟਲ ਸੰਚਾਰ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦੇ ਹੋ। ਦਾਇਰੇ 'ਤੇ ਤੁਹਾਡੇ ਸ਼ੁਰੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਸਹਿਮਤੀ ਹੁੰਦੀ ਹੈ, ਤਾਂ ਜੋ ਤੁਸੀਂ ਜਾਣ ਸਕੋ ਕਿ ਤੁਸੀਂ ਕਿਸ ਲਈ ਜ਼ਿੰਮੇਵਾਰ ਹੋ ਅਤੇ ਤੁਹਾਨੂੰ ਇਸ ਤੋਂ ਕੀ ਸਿੱਖਣਾ ਚਾਹੀਦਾ ਹੈ।"
  },
  "Work that connects study with practice.": {
    en: "Work that connects study with practice.",
    pa: "ਪੜ੍ਹਾਈ ਨੂੰ ਅਸਲ ਕੰਮ ਨਾਲ ਜੋੜਨ ਵਾਲਾ ਤਜਰਬਾ।"
  },
  "Assignments are matched to the student's background and the work Punjabi Samvad is undertaking at the time.": {
    en: "Assignments are matched to the student's background and the work Punjabi Samvad is undertaking at the time.",
    pa: "ਅਸਾਈਨਮੈਂਟ ਵਿਦਿਆਰਥੀ ਦੇ ਪਿਛੋਕੜ ਅਤੇ ਪੰਜਾਬੀ ਸੰਵਾਦ ਉਸ ਸਮੇਂ ਕਰ ਰਹੇ ਕੰਮ ਨਾਲ ਮੇਲ ਖਾਂਦੀਆਂ ਹਨ।"
  },
  "Featured two students who completed internships with us.": {
    en: "Featured two students who completed internships with us.",
    pa: "ਸਾਡੇ ਨਾਲ ਇੰਟਰਨਸ਼ਿਪ ਪੂਰੀ ਕਰਨ ਵਾਲੇ ਦੋ ਵਿਦਿਆਰਥੀਆਂ ਦੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ।"
  },
  "Vinit and Pritish each completed a 60-hour Literature Promotion Internship. Their assignments show how one role can combine subject knowledge, communication and direct exposure to public-interest work.": {
    en: "Vinit and Pritish each completed a 60-hour Literature Promotion Internship. Their assignments show how one role can combine subject knowledge, communication and direct exposure to public-interest work.",
    pa: "ਵਿਨੀਤ ਅਤੇ ਪ੍ਰਤੀਸ਼ ਹਰ ਇੱਕ ਨੇ 60 ਘੰਟੇ ਦੀ ਸਾਹਿਤ ਪ੍ਰਚਾਰ ਇੰਟਰਨਸ਼ਿਪ ਪੂਰੀ ਕੀਤੀ। ਉਹਨਾਂ ਦੀਆਂ ਅਸਾਈਨਮੈਂਟਾਂ ਦਰਸਾਉਂਦੀਆਂ ਹਨ ਕਿ ਕਿਵੇਂ ਇੱਕ ਭੂਮਿਕਾ ਵਿਸ਼ੇ ਦੇ ਗਿਆਨ, ਸੰਚਾਰ ਅਤੇ ਜਨਤਕ-ਹਿੱਤ ਦੇ ਕੰਮ ਦੇ ਸਿੱਧੇ ਸੰਪਰਕ ਨੂੰ ਜੋੜ ਸਕਦੀ ਹੈ।"
  },
  "Vinit brought a computer-science perspective to a role centred on literature, language and reading culture. He supported literary campaigns and awareness programmes, worked with students and community members, and helped use literature as a starting point for discussion about education, culture and social concerns.": {
    en: "Vinit brought a computer-science perspective to a role centred on literature, language and reading culture. He supported literary campaigns and awareness programmes, worked with students and community members, and helped use literature as a starting point for discussion about education, culture and social concerns.",
    pa: "ਵਿਨੀਤ ਨੇ ਸਾਹਿਤ, ਭਾਸ਼ਾ ਅਤੇ ਪੜ੍ਹਨ ਦੇ ਸੱਭਿਆਚਾਰ 'ਤੇ ਕੇਂਦ੍ਰਿਤ ਭੂਮਿਕਾ ਲਈ ਕੰਪਿਊਟਰ-ਸਾਇੰਸ ਦਾ ਨਜ਼ਰੀਆ ਲਿਆਂਦਾ। ਉਸਨੇ ਸਾਹਿਤਕ ਮੁਹਿੰਮਾਂ ਅਤੇ ਜਾਗਰੂਕਤਾ ਪ੍ਰੋਗਰਾਮਾਂ ਦਾ ਸਮਰਥਨ ਕੀਤਾ, ਵਿਦਿਆਰਥੀਆਂ ਅਤੇ ਭਾਈਚਾਰੇ ਦੇ ਮੈਂਬਰਾਂ ਨਾਲ ਕੰਮ ਕੀਤਾ, ਅਤੇ ਸਿੱਖਿਆ, ਸੱਭਿਆਚਾਰ ਅਤੇ ਸਮਾਜਿਕ ਸਰੋਕਾਰਾਂ ਬਾਰੇ ਚਰਚਾ ਲਈ ਸਾਹਿਤ ਦੀ ਵਰਤੋਂ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕੀਤੀ।"
  },
  "His placement also included digital-awareness training on the responsible use of AI and ChatGPT for education, research, communication and community outreach. It gave him room to connect an emerging technical field with the human judgement needed in public-facing work.": {
    en: "His placement also included digital-awareness training on the responsible use of AI and ChatGPT for education, research, communication and community outreach. It gave him room to connect an emerging technical field with the human judgement needed in public-facing work.",
    pa: "ਉਸਦੀ ਪਲੇਸਮੈਂਟ ਵਿੱਚ ਸਿੱਖਿਆ, ਖੋਜ, ਸੰਚਾਰ ਅਤੇ ਕਮਿਊਨਿਟੀ ਆਊਟਰੀਚ ਲਈ AI ਅਤੇ ChatGPT ਦੀ ਜ਼ਿੰਮੇਵਾਰ ਵਰਤੋਂ ਬਾਰੇ ਡਿਜੀਟਲ-ਜਾਗਰੂਕਤਾ ਸਿਖਲਾਈ ਵੀ ਸ਼ਾਮਲ ਸੀ। ਇਸਨੇ ਉਸਨੂੰ ਜਨਤਕ ਕੰਮਾਂ ਲਈ ਲੋੜੀਂਦੇ ਮਨੁੱਖੀ ਫੈਸਲਿਆਂ ਨਾਲ ਇੱਕ ਉੱਭਰਦੇ ਤਕਨੀਕੀ ਖੇਤਰ ਨੂੰ ਜੋੜਨ ਦੀ ਜਗ੍ਹਾ ਦਿੱਤੀ।"
  },
  "60-hour placement": {
    en: "60-hour placement",
    pa: "60-ਘੰਟੇ ਦੀ ਪਲੇਸਮੈਂਟ"
  },
  "Your preferred dates and available hours": {
    en: "Your preferred dates and available hours",
    pa: "ਤੁਹਾਡੀਆਂ ਤਰਜੀਹੀ ਤਾਰੀਖਾਂ ਅਤੇ ਉਪਲਬਧ ਘੰਟੇ"
  },
  "The issues or programme areas you want to explore": {
    en: "The issues or programme areas you want to explore",
    pa: "ਮੁੱਦੇ ਜਾਂ ਪ੍ਰੋਗਰਾਮ ਖੇਤਰ ਜਿਨ੍ਹਾਂ ਦੀ ਤੁਸੀਂ ਪੜਚੋਲ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ"
  },
  "The skills you can contribute and want to practise": {
    en: "The skills you can contribute and want to practise",
    pa: "ਉਹ ਹੁਨਰ ਜਿਨ੍ਹਾਂ ਦਾ ਤੁਸੀਂ ਯੋਗਦਾਨ ਪਾ ਸਕਦੇ ਹੋ ਅਤੇ ਅਭਿਆਸ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ"
  },
  "Your CV and any university requirements": {
    en: "Your CV and any university requirements",
    pa: "ਤੁਹਾਡਾ ਸੀਵੀ ਅਤੇ ਕੋਈ ਵੀ ਯੂਨੀਵਰਸਿਟੀ ਲੋੜਾਂ"
  },
  "Your time and skills can change someone's life.": {
    en: "Your time and skills can change someone's life.",
    pa: "ਤੁਹਾਡਾ ਸਮਾਂ ਅਤੇ ਹੁਨਰ ਕਿਸੇ ਦੀ ਜ਼ਿੰਦਗੀ ਬਦਲ ਸਕਦਾ ਹੈ।"
  },
  "You may be able to support an event, a training session, research, health education, the arts, communication or programme planning. Tell us what you do well and how much time you can offer; we will respond when that experience matches a current need.": {
    en: "You may be able to support an event, a training session, research, health education, the arts, communication or programme planning. Tell us what you do well and how much time you can offer; we will respond when that experience matches a current need.",
    pa: "ਤੁਸੀਂ ਕਿਸੇ ਇਵੈਂਟ, ਇੱਕ ਸਿਖਲਾਈ ਸੈਸ਼ਨ, ਖੋਜ, ਸਿਹਤ ਸਿੱਖਿਆ, ਕਲਾ, ਸੰਚਾਰ ਜਾਂ ਪ੍ਰੋਗਰਾਮ ਦੀ ਯੋਜਨਾਬੰਦੀ ਦਾ ਸਮਰਥਨ ਕਰਨ ਦੇ ਯੋਗ ਹੋ ਸਕਦੇ ਹੋ। ਸਾਨੂੰ ਦੱਸੋ ਕਿ ਤੁਸੀਂ ਕੀ ਚੰਗਾ ਕਰਦੇ ਹੋ ਅਤੇ ਤੁਸੀਂ ਕਿੰਨਾ ਸਮਾਂ ਦੇ ਸਕਦੇ ਹੋ; ਜਦੋਂ ਇਹ ਅਨੁਭਵ ਮੌਜੂਦਾ ਲੋੜ ਨਾਲ ਮੇਲ ਖਾਂਦਾ ਹੈ ਤਾਂ ਅਸੀਂ ਜਵਾਬ ਦੇਵਾਂਗੇ।"
  },
  "What are you looking for?": {
    en: "What are you looking for?",
    pa: "ਤੁਸੀਂ ਕੀ ਲੱਭ ਰਹੇ ਹੋ?"
  },
  "Search programmes, public-health work, impact, people, policies and ways to participate.": {
    en: "Search programmes, public-health work, impact, people, policies and ways to participate.",
    pa: "ਪ੍ਰੋਗਰਾਮ, ਜਨਤਕ-ਸਿਹਤ ਦੇ ਕੰਮ, ਪ੍ਰਭਾਵ, ਲੋਕ, ਨੀਤੀਆਂ ਅਤੇ ਭਾਗ ਲੈਣ ਦੇ ਤਰੀਕਿਆਂ ਦੀ ਖੋਜ ਕਰੋ।"
  },
  "Search ": {
    en: "Search ",
    pa: "ਖੋਜ "
  },
  "Standards that guide how Punjabi Samvad works, protects people and uses resources.": {
    en: "Standards that guide how Punjabi Samvad works, protects people and uses resources.",
    pa: "ਉਹ ਮਾਪਦੰਡ ਜੋ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਕੰਮ, ਲੋਕਾਂ ਦੀ ਸੁਰੱਖਿਆ ਅਤੇ ਸਰੋਤਾਂ ਦੀ ਵਰਤੋਂ ਨੂੰ ਦਿਸ਼ਾ ਦਿੰਦੇ ਹਨ।"
  },
  "Page not found": {
    en: "Page not found",
    pa: "ਪੰਨਾ ਨਹੀਂ ਮਿਲਿਆ"
  },
  "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.": {
    en: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
    pa: "ਜਿਸ ਪੰਨੇ ਦੀ ਤੁਸੀਂ ਭਾਲ ਕਰ ਰਹੇ ਹੋ, ਹੋ ਸਕਦਾ ਹੈ ਕਿ ਉਸਨੂੰ ਹਟਾ ਦਿੱਤਾ ਗਿਆ ਹੋਵੇ, ਉਸਦਾ ਨਾਮ ਬਦਲਿਆ ਗਿਆ ਹੋਵੇ, ਜਾਂ ਅਸਥਾਈ ਤੌਰ 'ਤੇ ਉਪਲਬਧ ਨਾ ਹੋਵੇ।"
  },
  "12AB Registered ": {
    en: "12AB Registered ",
    pa: "12AB ਰਜਿਸਟਰਡ "
  },
  "80G ": {
    en: "80G ",
    pa: "80G "
  },
  "Payment is completed on Razorpay. Punjabi Samvad does not collect your card details on this website.": {
    en: "Payment is completed on Razorpay. Punjabi Samvad does not collect your card details on this website.",
    pa: "Payment is completed on Razorpay. Punjabi Samvad does not collect your card details on this website."
  },
  "Bank account": {
    en: "Bank account",
    pa: "Bank account"
  },
  "Account name": {
    en: "Account name",
    pa: "Account name"
  },
  "Punjabi Samvad": {
    en: "Punjabi Samvad",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ"
  },
  "Account number": {
    en: "Account number",
    pa: "Account number"
  },
  "IFSC": {
    en: "IFSC",
    pa: "IFSC"
  },
  "Branch": {
    en: "Branch",
    pa: "ਸ਼ਾਖਾ"
  },
  "Account type": {
    en: "Account type",
    pa: "Account type"
  },
  "Current": {
    en: "Current",
    pa: "ਕਰੰਟ ਖਾਤਾ"
  },
  "Latest news & updates.": {
    en: "Latest news & updates.",
    pa: "ਤਾਜ਼ਾ ਖ਼ਬਰਾਂ ਅਤੇ ਅੱਪਡੇਟ।"
  },
  "Recent activities and announcements from Punjabi Samvad.": {
    en: "Recent activities and announcements from Punjabi Samvad.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀਆਂ ਹਾਲੀਆ ਗਤੀਵਿਧੀਆਂ ਅਤੇ ਐਲਾਨ।"
  },
  "Official Facebook updates": {
    en: "Official Facebook updates",
    pa: "Official Facebook updates"
  },
  "Work seen, shared and remembered.": {
    en: "Work seen, shared and remembered.",
    pa: "ਉਹ ਕੰਮ, ਜੋ ਵੇਖਿਆ ਗਿਆ, ਸਾਂਝਾ ਕੀਤਾ ਗਿਆ ਅਤੇ ਯਾਦ ਰਹਿ ਗਿਆ।"
  },
  "Photographs, programme material and coverage from Punjabi Samvad's work across health, education, culture and community action.": {
    en: "Photographs, programme material and coverage from Punjabi Samvad's work across health, education, culture and community action.",
    pa: "Photographs, programme material and coverage from Punjabi Samvad's work across health, education, culture and community action."
  },
  "Jyoti Bawa draws on two decades of work with women, children and communities to examine old age homes, menstrual awareness, mental health and substance abuse. The book was launched at the Sharjah International Book Fair in 2025.": {
    en: "Jyoti Bawa draws on two decades of work with women, children and communities to examine old age homes, menstrual awareness, mental health and substance abuse. The book was launched at the Sharjah International Book Fair in 2025.",
    pa: "Jyoti Bawa draws on two decades of work with women, children and communities to examine old age homes, menstrual awareness, mental health and substance abuse. The book was launched at the Sharjah International Book Fair in 2025."
  },
  "Shared work, clearly defined": {
    en: "Shared work, clearly defined",
    pa: "ਸਾਂਝਾ ਕੰਮ, ਸਪਸ਼ਟ ਜ਼ਿੰਮੇਵਾਰੀਆਂ"
  },
  "Each collaboration brings a different kind of strength: public-health knowledge, academic involvement, community access, specialist experience or programme support.": {
    en: "Each collaboration brings a different kind of strength: public-health knowledge, academic involvement, community access, specialist experience or programme support.",
    pa: "Each collaboration brings a different kind of strength: public-health knowledge, academic involvement, community access, specialist experience or programme support."
  },
  "Work with Punjabi Samvad": {
    en: "Work with Punjabi Samvad",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਨਾਲ ਕੰਮ ਕਰੋ"
  },
  "Our clear rules for responsible work": {
    en: "Our clear rules for responsible work",
    pa: "ਜ਼ਿੰਮੇਵਾਰ ਕੰਮ ਲਈ ਸਾਡੇ ਸਪਸ਼ਟ ਨਿਯਮ"
  },
  "These policies cover governance, safeguarding, people, finance, data, fieldwork and partnerships across Punjabi Samvad.": {
    en: "These policies cover governance, safeguarding, people, finance, data, fieldwork and partnerships across Punjabi Samvad.",
    pa: "These policies cover governance, safeguarding, people, finance, data, fieldwork and partnerships across Punjabi Samvad."
  },
  "Website version": {
    en: "Website version",
    pa: "ਵੈੱਬਸਾਈਟ ਵਰਜਨ"
  },
  "Scheduled review": {
    en: "Scheduled review",
    pa: "ਨਿਰਧਾਰਤ ਸਮੀਖਿਆ"
  },
  "These pages state Punjabi Samvad's public standards. Committee orders, approval limits and statutory registers depend on the organisation's current structure and applicable law. Contact us for the current signed or approved document.": {
    en: "These pages state Punjabi Samvad's public standards. Committee orders, approval limits and statutory registers depend on the organisation's current structure and applicable law. Contact us for the current signed or approved document.",
    pa: "These pages state Punjabi Samvad's public standards. Committee orders, approval limits and statutory registers depend on the organisation's current structure and applicable law. Contact us for the current signed or approved document."
  },
  "Open your preferred UPI app and scan the official Punjabi Samvad payment code.": {
    en: "Open your preferred UPI app and scan the official Punjabi Samvad payment code.",
    pa: "ਆਪਣੀ ਪਸੰਦੀਦਾ UPI ਐਪ ਖੋਲ੍ਹੋ ਅਤੇ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਅਧਿਕਾਰਤ ਭੁਗਤਾਨ ਕੋਡ ਨੂੰ ਸਕੈਨ ਕਰੋ।"
  },
  "Download QR code": {
    en: "Download QR code",
    pa: "QR ਕੋਡ ਡਾਊਨਲੋਡ ਕਰੋ"
  },
  "Online payment": {
    en: "Online payment",
    pa: "ਆਨਲਾਈਨ ਭੁਗਤਾਨ"
  },
  "Donate securely with Razorpay": {
    en: "Donate securely with Razorpay",
    pa: "Razorpay ਨਾਲ ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਦਾਨ ਕਰੋ"
  },
  "Continue to Punjabi Samvad's official hosted checkout to pay by supported online payment methods.": {
    en: "Continue to Punjabi Samvad's official hosted checkout to pay by supported online payment methods.",
    pa: "ਸਮਰਥਿਤ ਆਨਲਾਈਨ ਭੁਗਤਾਨ ਵਿਧੀਆਂ ਰਾਹੀਂ ਭੁਗਤਾਨ ਕਰਨ ਲਈ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਅਧਿਕਾਰਤ ਹੋਸਟ ਕੀਤੇ ਚੈੱਕਆਉਟ 'ਤੇ ਜਾਰੀ ਰੱਖੋ।"
  },
  "Continue to secure payment": {
    en: "Continue to secure payment",
    pa: "ਸੁਰੱਖਿਅਤ ਭੁਗਤਾਨ ਲਈ ਜਾਰੀ ਰੱਖੋ"
  },
  "India only": {
    en: "India only",
    pa: "ਕੇਵਲ ਭਾਰਤ ਲਈ"
  },
  "Direct bank transfer": {
    en: "Direct bank transfer",
    pa: "ਸਿੱਧਾ ਬੈਂਕ ਟ੍ਰਾਂਸਫਰ"
  },
  "Both accounts are held in the name of Punjabi Samvad and are current accounts.": {
    en: "Both accounts are held in the name of Punjabi Samvad and are current accounts.",
    pa: "ਦੋਵੇਂ ਖਾਤੇ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਨਾਮ 'ਤੇ ਹਨ ਅਤੇ ਚਾਲੂ ਖਾਤੇ ਹਨ।"
  },
  "Secure options": {
    en: "Secure options",
    pa: "ਸੁਰੱਖਿਅਤ ਵਿਕਲਪ"
  },
  "Women, girls & young people": {
    en: "Women, girls & young people",
    pa: "ਔਰਤਾਂ, ਕੁੜੀਆਂ ਅਤੇ ਨੌਜਵਾਨ"
  },
  "Creative advocacy since 2004": {
    en: "Creative advocacy since 2004",
    pa: "2004 ਤੋਂ ਰਚਨਾਤਮਕ ਵਕਾਲਤ"
  },
  "Free digital learning with UNICEF": {
    en: "Free digital learning with UNICEF",
    pa: "UNICEF ਦੇ ਨਾਲ ਮੁਫਤ ਡਿਜੀਟਲ ਸਿਖਲਾਈ"
  },
  "Knowledge becomes<br /><em>confidence.</em>": {
    en: "Knowledge becomes<br /><em>confidence.</em>",
    pa: "ਗਿਆਨ <em>ਭਰੋਸਾ</em> ਬਣ ਜਾਂਦਾ ਹੈ।"
  },
  "Hard issues need<br /><em>open conversations.</em>": {
    en: "Hard issues need<br /><em>open conversations.</em>",
    pa: "ਸਖਤ ਮੁੱਦਿਆਂ ਨੂੰ <em>ਖੁੱਲ੍ਹੀ ਗੱਲਬਾਤ</em> ਦੀ ਲੋੜ ਹੈ।"
  },
  "Understand money.<br /><em>Use it well.</em>": {
    en: "Understand money.<br /><em>Use it well.</em>",
    pa: "ਪੈਸੇ ਨੂੰ ਸਮਝੋ।<br /><em>ਇਸਦੀ ਚੰਗੀ ਵਰਤੋਂ ਕਰੋ।</em>"
  },
  "Build skills for<br /><em>what comes next.</em>": {
    en: "Build skills for<br /><em>what comes next.</em>",
    pa: "ਅੱਗੇ ਆਉਣ ਵਾਲੇ ਸਮੇਂ ਲਈ <em>ਹੁਨਰ ਬਣਾਓ।</em>"
  },
  "Education, health awareness and skills that help people participate more fully in their own development.": {
    en: "Education, health awareness and skills that help people participate more fully in their own development.",
    pa: "ਸਿੱਖਿਆ, ਸਿਹਤ ਜਾਗਰੂਕਤਾ ਅਤੇ ਹੁਨਰ ਜੋ ਲੋਕਾਂ ਨੂੰ ਆਪਣੇ ਖੁਦ ਦੇ ਵਿਕਾਸ ਵਿੱਚ ਵਧੇਰੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਹਿੱਸਾ ਲੈਣ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਨ।"
  },
  "From school workshops to theatre and documentary storytelling, we create spaces where people can ask, learn and act.": {
    en: "From school workshops to theatre and documentary storytelling, we create spaces where people can ask, learn and act.",
    pa: "ਸਕੂਲ ਦੀਆਂ ਵਰਕਸ਼ਾਪਾਂ ਤੋਂ ਲੈ ਕੇ ਥੀਏਟਰ ਅਤੇ ਡਾਕੂਮੈਂਟਰੀ ਕਹਾਣੀਆਂ ਸੁਣਾਉਣ ਤੱਕ, ਅਸੀਂ ਅਜਿਹੀਆਂ ਥਾਵਾਂ ਬਣਾਉਂਦੇ ਹਾਂ ਜਿੱਥੇ ਲੋਕ ਪੁੱਛ ਸਕਦੇ ਹਨ, ਸਿੱਖ ਸਕਦੇ ਹਨ ਅਤੇ ਕੰਮ ਕਰ ਸਕਦੇ ਹਨ।"
  },
  "A free five-hour programme covering saving, banking, credit, insurance and safer digital payments.": {
    en: "A free five-hour programme covering saving, banking, credit, insurance and safer digital payments.",
    pa: "ਇੱਕ ਮੁਫਤ ਪੰਜ ਘੰਟੇ ਦਾ ਪ੍ਰੋਗਰਾਮ ਜਿਸ ਵਿੱਚ ਬੱਚਤ, ਬੈਂਕਿੰਗ, ਕ੍ਰੈਡਿਟ, ਬੀਮਾ ਅਤੇ ਸੁਰੱਖਿਅਤ ਡਿਜੀਟਲ ਭੁਗਤਾਨ ਸ਼ਾਮਲ ਹਨ।"
  },
  "Free online courses and certificates for Indian youth preparing for study, work and new opportunities.": {
    en: "Free online courses and certificates for Indian youth preparing for study, work and new opportunities.",
    pa: "ਪੜ੍ਹਾਈ, ਕੰਮ ਅਤੇ ਨਵੇਂ ਮੌਕਿਆਂ ਦੀ ਤਿਆਰੀ ਕਰ ਰਹੇ ਭਾਰਤੀ ਨੌਜਵਾਨਾਂ ਲਈ ਮੁਫਤ ਆਨਲਾਈਨ ਕੋਰਸ ਅਤੇ ਸਰਟੀਫਿਕੇਟ।"
  },
  "See our programmes": {
    en: "See our programmes",
    pa: "ਸਾਡੇ ਪ੍ਰੋਗਰਾਮ ਦੇਖੋ"
  },
  "Learn more": {
    en: "Learn more",
    pa: "ਹੋਰ ਜਾਣੋ"
  },
  "Scroll to discover": {
    en: "Scroll to discover",
    pa: "ਖੋਜਣ ਲਈ ਸਕ੍ਰੋਲ ਕਰੋ"
  },
  "Choose how to give": {
    en: "Choose how to give",
    pa: "ਦੇਣ ਦਾ ਤਰੀਕਾ ਚੁਣੋ"
  },
  "A direct way to support the work.": {
    en: "A direct way to support the work.",
    pa: "ਕੰਮ ਦਾ ਸਮਰਥਨ ਕਰਨ ਦਾ ਸਿੱਧਾ ਤਰੀਕਾ।"
  },
  "Use UPI, the secure Razorpay checkout, or a direct bank transfer within India.": {
    en: "Use UPI, the secure Razorpay checkout, or a direct bank transfer within India.",
    pa: "ਯੂਪੀਆਈ (UPI), ਸੁਰੱਖਿਅਤ Razorpay ਚੈੱਕਆਉਟ, ਜਾਂ ਭਾਰਤ ਦੇ ਅੰਦਰ ਸਿੱਧਾ ਬੈਂਕ ਟ੍ਰਾਂਸਫਰ ਵਰਤੋ।"
  },
  "Scan & pay": {
    en: "Scan & pay",
    pa: "ਸਕੈਨ ਕਰਕੇ ਭੁਗਤਾਨ ਕਰੋ"
  },
  "Pay with any UPI app": {
    en: "Pay with any UPI app",
    pa: "ਕਿਸੇ ਵੀ UPI ਐਪ ਨਾਲ ਭੁਗਤਾਨ ਕਰੋ"
  },
  "UPI, Razorpay and bank transfer": {
    en: "UPI, Razorpay and bank transfer",
    pa: "UPI, Razorpay ਅਤੇ ਬੈਂਕ ਟ੍ਰਾਂਸਫਰ"
  },
  "Tax benefit subject to applicable provisions": {
    en: "Tax benefit subject to applicable provisions",
    pa: "ਲਾਗੂ ਵਿਵਸਥਾਵਾਂ ਦੇ ਅਧੀਨ ਟੈਕਸ ਲਾਭ"
  },
  "Receipt support": {
    en: "Receipt support",
    pa: "ਰਸੀਦ ਸਹਾਇਤਾ"
  },
  "Share your payment details with our team": {
    en: "Share your payment details with our team",
    pa: "ਸਾਡੀ ਟੀਮ ਨਾਲ ਆਪਣੇ ਭੁਗਤਾਨ ਵੇਰਵੇ ਸਾਂਝੇ ਕਰੋ"
  },
  "Request a receipt": {
    en: "Request a receipt",
    pa: "ਰਸੀਦ ਦੀ ਬੇਨਤੀ ਕਰੋ"
  },
  "Recent updates": {
    en: "Recent updates",
    pa: "ਹਾਲੀਆ ਅੱਪਡੇਟ"
  },
  "This timeline is loaded live from Facebook. If Facebook blocks the preview because of your browser or privacy settings, open the page directly.": {
    en: "This timeline is loaded live from Facebook. If Facebook blocks the preview because of your browser or privacy settings, open the page directly.",
    pa: "ਇਹ ਟਾਈਮਲਾਈਨ Facebook ਤੋਂ ਲਾਈਵ ਲੋਡ ਹੁੰਦੀ ਹੈ। ਜੇਕਰ ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਜਾਂ ਗੋਪਨੀਯਤਾ ਸੈਟਿੰਗਾਂ ਕਾਰਨ Facebook ਝਲਕ ਬਲਾਕ ਹੁੰਦੀ ਹੈ, ਤਾਂ ਸਿੱਧਾ ਪੇਜ ਖੋਲ੍ਹੋ।"
  },
  "Open Punjabi Samvad on Facebook": {
    en: "Open Punjabi Samvad on Facebook",
    pa: "Punjabi Samvad ਨੂੰ Facebook 'ਤੇ ਖੋਲ੍ਹੋ"
  },
  "Apply for an internship": {
    en: "Apply for an internship",
    pa: "ਇੰਟਰਨਸ਼ਿਪ ਲਈ ਅਰਜ਼ੀ ਦਿਓ"
  },
  "Volunteer or share expertise": {
    en: "Volunteer or share expertise",
    pa: "ਵਲੰਟੀਅਰ ਬਣੋ ਜਾਂ ਆਪਣੀ ਮਹਾਰਤ ਸਾਂਝੀ ਕਰੋ"
  },
  "University network": {
    en: "University network",
    pa: "ਯੂਨੀਵਰਸਿਟੀ ਨੈੱਟਵਰਕ"
  },
  "What you gain": {
    en: "What you gain",
    pa: "ਤੁਸੀਂ ਕੀ ਪ੍ਰਾਪਤ ਕਰਦੇ ਹੋ"
  },
  "Areas of contribution": {
    en: "Areas of contribution",
    pa: "ਯੋਗਦਾਨ ਦੇ ਖੇਤਰ"
  },
  "Recent student work": {
    en: "Recent student work",
    pa: "ਵਿਦਿਆਰਥੀਆਂ ਦਾ ਹਾਲੀਆ ਕੰਮ"
  },
  "Vinit Kumar": {
    en: "Vinit Kumar",
    pa: "ਵਿਨੀਤ ਕੁਮਾਰ"
  },
  "UPES, Dehradun · B.Tech CSE": {
    en: "UPES, Dehradun · B.Tech CSE",
    pa: "ਯੂਪੀਈਐਸ (UPES), ਦੇਹਰਾਦੂਨ · ਬੀ.ਟੈਕ ਸੀਐਸਈ (B.Tech CSE)"
  },
  "Pritish Anand": {
    en: "Pritish Anand",
    pa: "ਪ੍ਰਤੀਸ਼ ਆਨੰਦ"
  },
  "Chandigarh University": {
    en: "Chandigarh University",
    pa: "ਚੰਡੀਗੜ੍ਹ ਯੂਨੀਵਰਸਿਟੀ"
  },
  "Email us": {
    en: "Email us",
    pa: "ਸਾਨੂੰ ਈਮੇਲ ਕਰੋ"
  },
  "Volunteer with Punjabi Samvad": {
    en: "Volunteer with Punjabi Samvad",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਨਾਲ ਵਲੰਟੀਅਰ"
  },
  "Explore the programme": {
    en: "Explore the programme",
    pa: "ਪ੍ਰੋਗਰਾਮ ਬਾਰੇ ਜਾਣੋ"
  },
  "Why this programme matters": {
    en: "Why this programme matters",
    pa: "ਇਹ ਪ੍ਰੋਗਰਾਮ ਮਹੱਤਵਪੂਰਨ ਕਿਉਂ ਹੈ"
  },
  "Your browser does not support embedded video.": {
    en: "Your browser does not support embedded video.",
    pa: "ਤੁਹਾਡਾ ਬ੍ਰਾਊਜ਼ਰ ਏਮਬੈਡਡ ਵੀਡੀਓ ਦਾ ਸਮਰਥਨ ਨਹੀਂ ਕਰਦਾ ਹੈ।"
  },
  "What learners cover": {
    en: "What learners cover",
    pa: "ਸਿੱਖਿਆਰਥੀ ਕੀ ਸਿੱਖਦੇ ਹਨ"
  },
  "Useful knowledge, built for real life.": {
    en: "Useful knowledge, built for real life.",
    pa: "ਅਸਲ ਜ਼ਿੰਦਗੀ ਵਿੱਚ ਕੰਮ ਆਉਣ ਵਾਲਾ ਗਿਆਨ।"
  },
  "Learn online": {
    en: "Learn online",
    pa: "ਆਨਲਾਈਨ ਸਿੱਖੋ"
  },
  "Official enrolment": {
    en: "Official enrolment",
    pa: "ਅਧਿਕਾਰਕ ਦਾਖ਼ਲਾ"
  },
  "Enroll now": {
    en: "Enroll now",
    pa: "ਹੁਣੇ ਦਾਖ਼ਲਾ ਲਵੋ"
  },
  "Stories from the field": {
    en: "Stories from the field",
    pa: "ਮੈਦਾਨ ਤੋਂ ਕਹਾਣੀਆਂ"
  },
  "A book by Jyoti Bawa": {
    en: "A book by Jyoti Bawa",
    pa: "ਜੋਤੀ ਬਾਵਾ ਦੀ ਕਿਤਾਬ"
  },
  "Jyoti has pledged all profits from the book to support underprivileged girls, community welfare and awareness programmes.": {
    en: "Jyoti has pledged all profits from the book to support underprivileged girls, community welfare and awareness programmes.",
    pa: "ਜੋਤੀ ਨੇ ਕਿਤਾਬ ਦੇ ਸਾਰੇ ਮੁਨਾਫੇ ਨੂੰ ਪਛੜੀਆਂ ਕੁੜੀਆਂ, ਭਾਈਚਾਰਕ ਭਲਾਈ ਅਤੇ ਜਾਗਰੂਕਤਾ ਪ੍ਰੋਗਰਾਮਾਂ ਦੇ ਸਮਰਥਨ ਲਈ ਦੇਣ ਦਾ ਵਾਅਦਾ ਕੀਤਾ ਹੈ।"
  },
  "Featured in the media": {
    en: "Featured in the media",
    pa: "ਮੀਡੀਆ ਵਿੱਚ ਪ੍ਰਕਾਸ਼ਿਤ"
  },
  "Reports, interviews and partnerships": {
    en: "Reports, interviews and partnerships",
    pa: "ਰਿਪੋਰਟਾਂ, ਇੰਟਰਵਿਊ ਅਤੇ ਭਾਈਵਾਲੀਆਂ"
  },
  "Read feature": {
    en: "Read feature",
    pa: "ਪੂਰੀ ਰਿਪੋਰਟ ਪੜ੍ਹੋ"
  },
  "Public standards": {
    en: "Public standards",
    pa: "ਜਨਤਕ ਮਾਪਦੰਡ"
  },
  "Email Punjabi Samvad": {
    en: "Email Punjabi Samvad",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੂੰ ਈਮੇਲ ਕਰੋ"
  },
  "All policies": {
    en: "All policies",
    pa: "ਸਾਰੀਆਂ ਨੀਤੀਆਂ"
  },
  "Applies to": {
    en: "Applies to",
    pa: "ਇਸ 'ਤੇ ਲਾਗੂ ਹੁੰਦਾ ਹੈ"
  },
  "Governing Body members, employees, consultants, volunteers, interns, facilitators and contractors where the subject relates to their role.": {
    en: "Governing Body members, employees, consultants, volunteers, interns, facilitators and contractors where the subject relates to their role.",
    pa: "ਗਵਰਨਿੰਗ ਬਾਡੀ ਦੇ ਮੈਂਬਰ, ਕਰਮਚਾਰੀ, ਸਲਾਹਕਾਰ, ਵਲੰਟੀਅਰ, ਇੰਟਰਨ, ਸਹੂਲਤ ਦੇਣ ਵਾਲੇ ਅਤੇ ਠੇਕੇਦਾਰ ਜਿੱਥੇ ਵਿਸ਼ਾ ਉਹਨਾਂ ਦੀ ਭੂਮਿਕਾ ਨਾਲ ਸਬੰਧਤ ਹੈ।"
  },
  "Official references": {
    en: "Official references",
    pa: "ਅਧਿਕਾਰਤ ਹਵਾਲੇ"
  },
  "These government sources support the legal points in this policy.": {
    en: "These government sources support the legal points in this policy.",
    pa: "ਇਹ ਸਰਕਾਰੀ ਸਰੋਤ ਇਸ ਨੀਤੀ ਵਿੱਚ ਕਾਨੂੰਨੀ ਨੁਕਤਿਆਂ ਦਾ ਸਮਰਥਨ ਕਰਦੇ ਹਨ।"
  },
  "Raise a concern": {
    en: "Raise a concern",
    pa: "ਕੋਈ ਚਿੰਤਾ ਉਠਾਓ"
  },
  "Email Punjabi Samvad with the policy name and the safest way to contact you. A statutory or emergency report should also go to the authority named in the relevant policy.": {
    en: "Email Punjabi Samvad with the policy name and the safest way to contact you. A statutory or emergency report should also go to the authority named in the relevant policy.",
    pa: "ਪਾਲਿਸੀ ਦੇ ਨਾਮ ਅਤੇ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਨ ਦੇ ਸਭ ਤੋਂ ਸੁਰੱਖਿਅਤ ਤਰੀਕੇ ਨਾਲ ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੂੰ ਈਮੇਲ ਕਰੋ। ਇੱਕ ਵਿਧਾਨਕ ਜਾਂ ਐਮਰਜੈਂਸੀ ਰਿਪੋਰਟ ਸਬੰਧਤ ਨੀਤੀ ਵਿੱਚ ਦਰਸਾਏ ਗਏ ਅਥਾਰਟੀ ਨੂੰ ਵੀ ਜਾਣੀ ਚਾਹੀਦੀ ਹੈ।"
  },
  "Punjabi Samvad follows applicable law where it sets a stricter rule or a different process. This public page does not replace a statutory committee order, employment term, funding agreement or signed internal procedure.": {
    en: "Punjabi Samvad follows applicable law where it sets a stricter rule or a different process. This public page does not replace a statutory committee order, employment term, funding agreement or signed internal procedure.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਲਾਗੂ ਕਾਨੂੰਨ ਦੀ ਪਾਲਣਾ ਕਰਦਾ ਹੈ ਜਿੱਥੇ ਇਹ ਸਖ਼ਤ ਨਿਯਮ ਜਾਂ ਵੱਖਰੀ ਪ੍ਰਕਿਰਿਆ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ। ਇਹ ਜਨਤਕ ਪੰਨਾ ਕਨੂੰਨੀ ਕਮੇਟੀ ਦੇ ਆਦੇਸ਼, ਰੁਜ਼ਗਾਰ ਦੀ ਮਿਆਦ, ਫੰਡਿੰਗ ਸਮਝੌਤੇ ਜਾਂ ਹਸਤਾਖਰਿਤ ਅੰਦਰੂਨੀ ਪ੍ਰਕਿਰਿਆ ਦੀ ਥਾਂ ਨਹੀਂ ਲੈਂਦਾ।"
  },
  "Explore Punjabi Samvad": {
    en: "Explore Punjabi Samvad",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀ ਪੜਚੋਲ ਕਰੋ"
  },
  "No matching pages yet.": {
    en: "No matching pages yet.",
    pa: "ਅਜੇ ਤੱਕ ਕੋਈ ਮੇਲ ਖਾਂਦੇ ਪੰਨੇ ਨਹੀਂ ਹਨ।"
  },
  "Try a broader phrase, or visit": {
    en: "Try a broader phrase, or visit",
    pa: "ਇੱਕ ਵਿਆਪਕ ਵਾਕਾਂਸ਼ ਅਜ਼ਮਾਓ, ਜਾਂ ਇੱਥੇ ਜਾਓ"
  },
  "and ask us directly.": {
    en: "and ask us directly.",
    pa: "ਅਤੇ ਸਾਨੂੰ ਸਿੱਧਾ ਪੁੱਛੋ।"
  },
  "Find what you need": {
    en: "Find what you need",
    pa: "ਜੋ ਤੁਸੀਂ ਲੱਭ ਰਹੇ ਹੋ, ਉਹ ਇੱਥੇ ਲੱਭੋ"
  },
  "Popular": {
    en: "Popular",
    pa: "ਲੋਕਪ੍ਰਿਯ"
  },
  "Our impact": {
    en: "Our impact",
    pa: "ਸਾਡਾ ਪ੍ਰਭਾਵ"
  },
  "Governance and care": {
    en: "Governance and care",
    pa: "ਗਵਰਨੈਂਸ ਅਤੇ ਦੇਖਭਾਲ"
  },
  "2004": {
    en: "2004",
    pa: "2004"
  },
  "2009": {
    en: "2009",
    pa: "2009"
  },
  "2014": {
    en: "2014",
    pa: "2014"
  },
  "2017": {
    en: "2017",
    pa: "2017"
  },
  "Punjabi Samvad begins": {
    en: "Punjabi Samvad begins",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀ ਸ਼ੁਰੂਆਤ"
  },
  "Amit Bawa and Jyoti Bawa start work in response to gender discrimination and social concerns around them.": {
    en: "Amit Bawa and Jyoti Bawa start work in response to gender discrimination and social concerns around them.",
    pa: "ਅਮਿਤ ਬਾਵਾ ਅਤੇ ਜੋਤੀ ਬਾਵਾ ਲਿੰਗ ਵਿਤਕਰੇ ਅਤੇ ਆਲੇ ਦੁਆਲੇ ਦੀਆਂ ਸਮਾਜਿਕ ਚਿੰਤਾਵਾਂ ਦੇ ਜਵਾਬ ਵਿੱਚ ਕੰਮ ਸ਼ੁਰੂ ਕਰਦੇ ਹਨ।"
  },
  "A formal organisation": {
    en: "A formal organisation",
    pa: "ਸੰਸਥਾ ਦੀ ਰਸਮੀ ਰਜਿਸਟ੍ਰੇਸ਼ਨ"
  },
  "Punjabi Samvad is registered, giving its community work a lasting institutional base.": {
    en: "Punjabi Samvad is registered, giving its community work a lasting institutional base.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਰਜਿਸਟਰਡ ਹੋਇਆ, ਜਿਸ ਨੇ ਇਸਦੇ ਭਾਈਚਾਰਕ ਕੰਮ ਨੂੰ ਇੱਕ ਸਥਾਈ ਸੰਸਥਾਗਤ ਅਧਾਰ ਦਿੱਤਾ।"
  },
  "The work continues": {
    en: "The work continues",
    pa: "ਕੰਮ ਜਾਰੀ ਰਿਹਾ"
  },
  "After Amit Bawa’s passing, Jyoti Bawa carries forward the organisation they built together.": {
    en: "After Amit Bawa’s passing, Jyoti Bawa carries forward the organisation they built together.",
    pa: "ਅਮਿਤ ਬਾਵਾ ਦੇ ਦੇਹਾਂਤ ਤੋਂ ਬਾਅਦ, ਜੋਤੀ ਬਾਵਾ ਉਸ ਸੰਸਥਾ ਨੂੰ ਅੱਗੇ ਵਧਾਉਂਦੇ ਹਨ ਜੋ ਉਨ੍ਹਾਂ ਨੇ ਮਿਲ ਕੇ ਬਣਾਈ ਸੀ।"
  },
  "Culture travels further": {
    en: "Culture travels further",
    pa: "ਸੱਭਿਆਚਾਰ ਦੀ ਪਹੁੰਚ ਹੋਰ ਵਧੀ"
  },
  "Tirhayi Umar and participation in the World Punjabi Conference extend the use of documentary and culture for social awareness.": {
    en: "Tirhayi Umar and participation in the World Punjabi Conference extend the use of documentary and culture for social awareness.",
    pa: "ਤਿਰਹਾਈ ਉਮਰ ਅਤੇ ਵਿਸ਼ਵ ਪੰਜਾਬੀ ਕਾਨਫਰੰਸ ਵਿੱਚ ਸ਼ਮੂਲੀਅਤ ਨੇ ਸਮਾਜਿਕ ਜਾਗਰੂਕਤਾ ਲਈ ਡਾਕੂਮੈਂਟਰੀ ਅਤੇ ਸੱਭਿਆਚਾਰ ਦੀ ਵਰਤੋਂ ਨੂੰ ਵਧਾਇਆ।"
  },
  "A wider national focus": {
    en: "A wider national focus",
    pa: "ਪੂਰੇ ਭਾਰਤ ਵੱਲ ਵਧਦਾ ਦਾਇਰਾ"
  },
  "Community experience now meets institutional partnerships designed to take useful programmes to more people.": {
    en: "Community experience now meets institutional partnerships designed to take useful programmes to more people.",
    pa: "ਭਾਈਚਾਰਕ ਤਜਰਬਾ ਹੁਣ ਉਪਯੋਗੀ ਪ੍ਰੋਗਰਾਮਾਂ ਨੂੰ ਵੱਧ ਤੋਂ ਵੱਧ ਲੋਕਾਂ ਤੱਕ ਲਿਜਾਣ ਲਈ ਤਿਆਰ ਕੀਤੀਆਂ ਗਈਆਂ ਸੰਸਥਾਗਤ ਭਾਈਵਾਲੀਆਂ ਨੂੰ ਪੂਰਾ ਕਰਦਾ ਹੈ।"
  },
  "Today": {
    en: "Today",
    pa: "ਅੱਜ"
  },
  "Impact summary": {
    en: "Impact summary",
    pa: "ਪ੍ਰਭਾਵ ਦਾ ਸਾਰ"
  },
  "How the work translates into numbers, community reach and institutional partnerships.": {
    en: "How the work translates into numbers, community reach and institutional partnerships.",
    pa: "ਕੰਮ ਕਿਵੇਂ ਸੰਖਿਆਵਾਂ, ਭਾਈਚਾਰਕ ਪਹੁੰਚ ਅਤੇ ਸੰਸਥਾਗਤ ਭਾਈਵਾਲੀ ਵਿੱਚ ਬਦਲਦਾ ਹੈ।"
  },
  "Direct programme reach": {
    en: "Direct programme reach",
    pa: "ਸਿੱਧੀ ਪ੍ਰੋਗਰਾਮ ਪਹੁੰਚ"
  },
  "Across empowerment, education, health and substance-abuse awareness.": {
    en: "Across empowerment, education, health and substance-abuse awareness.",
    pa: "ਸਸ਼ਕਤੀਕਰਨ, ਸਿੱਖਿਆ, ਸਿਹਤ ਅਤੇ ਨਸ਼ੀਲੇ ਪਦਾਰਥਾਂ ਦੀ ਦੁਰਵਰਤੋਂ ਬਾਰੇ ਜਾਗਰੂਕਤਾ ਵਿੱਚ।"
  },
  "Student participation": {
    en: "Student participation",
    pa: "ਵਿਦਿਆਰਥੀਆਂ ਦੀ ਭਾਗੀਦਾਰੀ"
  },
  "Through school sessions, internships and university programmes.": {
    en: "Through school sessions, internships and university programmes.",
    pa: "ਸਕੂਲ ਸੈਸ਼ਨਾਂ, ਇੰਟਰਨਸ਼ਿਪਾਂ ਅਤੇ ਯੂਨੀਵਰਸਿਟੀ ਪ੍ਰੋਗਰਾਮਾਂ ਰਾਹੀਂ।"
  },
  "Institutional partners": {
    en: "Institutional partners",
    pa: "ਸੰਸਥਾਗਤ ਭਾਈਵਾਲ"
  },
  "Including State Bank of India, Yes Bank, HDFC Securities and university bodies.": {
    en: "Including State Bank of India, Yes Bank, HDFC Securities and university bodies.",
    pa: "ਸਟੇਟ ਬੈਂਕ ਆਫ਼ ਇੰਡੀਆ (State Bank of India), ਯੈੱਸ ਬੈਂਕ (Yes Bank), ਐਚਡੀਐਫਸੀ ਸਿਕਿਓਰਿਟੀਜ਼ (HDFC Securities) ਅਤੇ ਯੂਨੀਵਰਸਿਟੀ ਸੰਸਥਾਵਾਂ ਸਮੇਤ।"
  },
  "Years of community work": {
    en: "Years of community work",
    pa: "ਭਾਈਚਾਰਕ ਕੰਮ ਦੇ ਸਾਲ"
  },
  "A sustained presence since the early work of Amit Bawa and Jyoti Bawa.": {
    en: "A sustained presence since the early work of Amit Bawa and Jyoti Bawa.",
    pa: "ਅਮਿਤ ਬਾਵਾ ਅਤੇ ਜੋਤੀ ਬਾਵਾ ਦੇ ਸ਼ੁਰੂਆਤੀ ਕੰਮ ਤੋਂ ਬਾਅਦ ਨਿਰੰਤਰ ਮੌਜੂਦਗੀ।"
  },
  "Core areas": {
    en: "Core areas",
    pa: "ਮੁੱਖ ਖੇਤਰ"
  },
  "Working across empowerment, education, public health, youth, culture and substance-abuse awareness.": {
    en: "Working across empowerment, education, public health, youth, culture and substance-abuse awareness.",
    pa: "ਸਸ਼ਕਤੀਕਰਨ, ਸਿੱਖਿਆ, ਜਨਤਕ ਸਿਹਤ, ਨੌਜਵਾਨਾਂ, ਸੱਭਿਆਚਾਰ ਅਤੇ ਨਸ਼ੀਲੇ ਪਦਾਰਥਾਂ ਦੀ ਦੁਰਵਰਤੋਂ ਬਾਰੇ ਜਾਗਰੂਕਤਾ ਵਿੱਚ ਕੰਮ ਕਰਨਾ।"
  },
  "Promoting education, dignity and life skills.": {
    en: "Promoting education, dignity and life skills.",
    pa: "ਸਿੱਖਿਆ, ਸਨਮਾਨ ਅਤੇ ਜੀਵਨ ਦੇ ਹੁਨਰ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਨਾ।"
  },
  "Making emotional well-being easier to understand.": {
    en: "Making emotional well-being easier to understand.",
    pa: "ਭਾਵਨਾਤਮਕ ਤੰਦਰੁਸਤੀ ਨੂੰ ਸਮਝਣਾ ਆਸਾਨ ਬਣਾਉਣਾ।"
  },
  "Mentoring, vocational development and youth activities.": {
    en: "Mentoring, vocational development and youth activities.",
    pa: "ਸਲਾਹ, ਕਿੱਤਾਮੁਖੀ ਵਿਕਾਸ ਅਤੇ ਨੌਜਵਾਨਾਂ ਦੀਆਂ ਗਤੀਵਿਧੀਆਂ।"
  },
  "Community outreach and preventive communication.": {
    en: "Community outreach and preventive communication.",
    pa: "ਕਮਿਊਨਿਟੀ ਆਊਟਰੀਚ ਅਤੇ ਰੋਕਥਾਮ ਸੰਚਾਰ।"
  },
  "Next steps": {
    en: "Next steps",
    pa: "ਅਗਲੇ ਕਦਮ"
  },
  "Current focus and future goals for Punjabi Samvad.": {
    en: "Current focus and future goals for Punjabi Samvad.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਲਈ ਮੌਜੂਦਾ ਫੋਕਸ ਅਤੇ ਭਵਿੱਖ ਦੇ ਟੀਚੇ।"
  },
  "Expand institutional partnerships to take useful programmes to more communities across India.": {
    en: "Expand institutional partnerships to take useful programmes to more communities across India.",
    pa: "ਭਾਰਤ ਭਰ ਦੇ ਹੋਰ ਭਾਈਚਾਰਿਆਂ ਤੱਕ ਉਪਯੋਗੀ ਪ੍ਰੋਗਰਾਮਾਂ ਨੂੰ ਲਿਜਾਣ ਲਈ ਸੰਸਥਾਗਤ ਭਾਈਵਾਲੀ ਦਾ ਵਿਸਥਾਰ ਕਰੋ।"
  },
  "Increase reach in mental health and menstrual health awareness among students.": {
    en: "Increase reach in mental health and menstrual health awareness among students.",
    pa: "ਵਿਦਿਆਰਥੀਆਂ ਵਿੱਚ ਮਾਨਸਿਕ ਸਿਹਤ ਅਤੇ ਮਾਹਵਾਰੀ ਸਿਹਤ ਪ੍ਰਤੀ ਜਾਗਰੂਕਤਾ ਵਧਾਓ।"
  },
  "Develop digital learning networks for youth skills and employability.": {
    en: "Develop digital learning networks for youth skills and employability.",
    pa: "ਨੌਜਵਾਨਾਂ ਦੇ ਹੁਨਰ ਅਤੇ ਰੁਜ਼ਗਾਰ ਯੋਗਤਾ ਲਈ ਡਿਜੀਟਲ ਸਿਖਲਾਈ ਨੈੱਟਵਰਕ ਵਿਕਸਿਤ ਕਰੋ।"
  },
  "Continue using creative culture and documentary for social engagement.": {
    en: "Continue using creative culture and documentary for social engagement.",
    pa: "ਸਮਾਜਿਕ ਰੁਝੇਵਿਆਂ ਲਈ ਰਚਨਾਤਮਕ ਸੱਭਿਆਚਾਰ ਅਤੇ ਡਾਕੂਮੈਂਟਰੀ ਦੀ ਵਰਤੋਂ ਜਾਰੀ ਰੱਖੋ।"
  },
  "293, Green Avenue\nAmritsar, Punjab 143001\nIndia": {
    en: "293, Green Avenue\nAmritsar, Punjab 143001\nIndia",
    pa: "293, ਗ੍ਰੀਨ ਐਵੇਨਿਊ\nਅੰਮ੍ਰਿਤਸਰ, ਪੰਜਾਬ 143001\nਭਾਰਤ"
  },
  "+91 87280 33911\npunjabisamvadasr@gmail.com": {
    en: "+91 87280 33911\npunjabisamvadasr@gmail.com",
    pa: "+91 87280 33911\npunjabisamvadasr@gmail.com"
  },
  "Jyoti Bawa\nPresident, Punjabi Samvad": {
    en: "Jyoti Bawa\nPresident, Punjabi Samvad",
    pa: "ਜੋਤੀ ਬਾਵਾ\nਪ੍ਰਧਾਨ, ਪੰਜਾਬੀ ਸੰਵਾਦ"
  },
  "Governance": {
    en: "Governance",
    pa: "ਪ੍ਰਸ਼ਾਸਨ ਅਤੇ ਜਵਾਬਦੇਹੀ"
  },
  "People and safeguarding": {
    en: "People and safeguarding",
    pa: "ਲੋਕ ਅਤੇ ਸੁਰੱਖਿਆ"
  },
  "Data and communications": {
    en: "Data and communications",
    pa: "ਡਾਟਾ ਅਤੇ ਸੰਚਾਰ"
  },
  "Funding and partnerships": {
    en: "Funding and partnerships",
    pa: "ਵਿੱਤੀ ਸਹਿਯੋਗ ਅਤੇ ਭਾਈਵਾਲੀਆਂ"
  },
  "Operations": {
    en: "Operations",
    pa: "ਸੰਚਾਲਨ"
  },
  "Governance and Accountability Policy": {
    en: "Governance and Accountability Policy",
    pa: "ਸ਼ਾਸਨ ਅਤੇ ਜਵਾਬਦੇਹੀ ਨੀਤੀ"
  },
  "Governance and accountability": {
    en: "Governance and accountability",
    pa: "ਪ੍ਰਸ਼ਾਸਨ ਅਤੇ ਜਵਾਬਦੇਹੀ"
  },
  "Sets oversight, decision-making and record-keeping standards for Punjabi Samvad.": {
    en: "Sets oversight, decision-making and record-keeping standards for Punjabi Samvad.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਲਈ ਨਿਗਰਾਨੀ, ਫੈਸਲੇ ਲੈਣ ਅਤੇ ਰਿਕਾਰਡ ਰੱਖਣ ਦੇ ਮਾਪਦੰਡ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ।"
  },
  "Governing Body": {
    en: "Governing Body",
    pa: "ਪ੍ਰਬੰਧਕੀ ਕਮੇਟੀ (Governing Body)"
  },
  "Code of Conduct and Ethics": {
    en: "Code of Conduct and Ethics",
    pa: "ਆਚਰਣ ਅਤੇ ਨੈਤਿਕਤਾ ਦਾ ਕੋਡ"
  },
  "Code of conduct and ethics": {
    en: "Code of conduct and ethics",
    pa: "ਆਚਾਰ ਸੰਹਿਤਾ ਅਤੇ ਨੈਤਿਕਤਾ"
  },
  "Defines the conduct expected from anyone who represents Punjabi Samvad.": {
    en: "Defines the conduct expected from anyone who represents Punjabi Samvad.",
    pa: "ਕਿਸੇ ਵੀ ਵਿਅਕਤੀ ਤੋਂ ਉਮੀਦ ਕੀਤੇ ਗਏ ਆਚਰਣ ਨੂੰ ਪਰਿਭਾਸ਼ਿਤ ਕਰਦਾ ਹੈ ਜੋ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀ ਨੁਮਾਇੰਦਗੀ ਕਰਦਾ ਹੈ।"
  },
  "President and Governing Body": {
    en: "President and Governing Body",
    pa: "ਪ੍ਰਧਾਨ ਅਤੇ ਪ੍ਰਬੰਧਕੀ ਕਮੇਟੀ"
  },
  "Child Safeguarding Policy": {
    en: "Child Safeguarding Policy",
    pa: "ਬਾਲ ਸੁਰੱਖਿਆ ਨੀਤੀ"
  },
  "Child safeguarding": {
    en: "Child safeguarding",
    pa: "ਬੱਚਿਆਂ ਦੀ ਸੁਰੱਖਿਆ"
  },
  "Protects children who participate in Punjabi Samvad programmes.": {
    en: "Protects children who participate in Punjabi Samvad programmes.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਪ੍ਰੋਗਰਾਮਾਂ ਵਿੱਚ ਭਾਗ ਲੈਣ ਵਾਲੇ ਬੱਚਿਆਂ ਦੀ ਰੱਖਿਆ ਕਰਦਾ ਹੈ।"
  },
  "Safeguarding Lead": {
    en: "Safeguarding Lead",
    pa: "ਸੇਫਗਾਰਡਿੰਗ ਲੀਡ (Safeguarding Lead)"
  },
  "Financial Management Policy": {
    en: "Financial Management Policy",
    pa: "ਵਿੱਤੀ ਪ੍ਰਬੰਧਨ ਨੀਤੀ"
  },
  "Financial management": {
    en: "Financial management",
    pa: "ਵਿੱਤੀ ਪ੍ਰਬੰਧਨ"
  },
  "Controls receiving, holding, spending and recording funds.": {
    en: "Controls receiving, holding, spending and recording funds.",
    pa: "ਫੰਡ ਪ੍ਰਾਪਤ ਕਰਨ, ਰੱਖਣ, ਖਰਚ ਕਰਨ ਅਤੇ ਰਿਕਾਰਡ ਕਰਨ ਨੂੰ ਨਿਯੰਤਰਿਤ ਕਰਦਾ ਹੈ।"
  },
  "Treasurer and Operations Lead": {
    en: "Treasurer and Operations Lead",
    pa: "ਖਜ਼ਾਨਚੀ ਅਤੇ ਆਪ੍ਰੇਸ਼ਨ ਲੀਡ"
  },
  "Partnership and Grant Policy": {
    en: "Partnership and Grant Policy",
    pa: "ਭਾਈਵਾਲੀ ਅਤੇ ਗ੍ਰਾਂਟ ਨੀਤੀ"
  },
  "Partnerships and grants": {
    en: "Partnerships and grants",
    pa: "ਭਾਈਵਾਲੀ ਅਤੇ ਗ੍ਰਾਂਟਾਂ"
  },
  "Guides how Punjabi Samvad assesses, manages and reports on partnerships.": {
    en: "Guides how Punjabi Samvad assesses, manages and reports on partnerships.",
    pa: "ਮਾਰਗਦਰਸ਼ਨ ਕਰਦਾ ਹੈ ਕਿ ਪੰਜਾਬੀ ਸੰਵਾਦ ਭਾਈਵਾਲੀ ਦਾ ਮੁਲਾਂਕਣ, ਪ੍ਰਬੰਧਨ ਅਤੇ ਰਿਪੋਰਟ ਕਿਵੇਂ ਕਰਦਾ ਹੈ।"
  },
  "President and Programme Leads": {
    en: "President and Programme Leads",
    pa: "ਪ੍ਰਧਾਨ ਅਤੇ ਪ੍ਰੋਗਰਾਮ ਲੀਡ"
  },
  "External Communications Policy": {
    en: "External Communications Policy",
    pa: "ਬਾਹਰੀ ਸੰਚਾਰ ਨੀਤੀ"
  },
  "External communications": {
    en: "External communications",
    pa: "ਬਾਹਰੀ ਸੰਚਾਰ"
  },
  "Controls official statements, programme claims and confidential information.": {
    en: "Controls official statements, programme claims and confidential information.",
    pa: "ਅਧਿਕਾਰਤ ਬਿਆਨਾਂ, ਪ੍ਰੋਗਰਾਮ ਦੇ ਦਾਅਵਿਆਂ ਅਤੇ ਗੁਪਤ ਜਾਣਕਾਰੀ ਨੂੰ ਨਿਯੰਤਰਿਤ ਕਰਦਾ ਹੈ।"
  },
  "President and Communications Lead": {
    en: "President and Communications Lead",
    pa: "ਪ੍ਰਧਾਨ ਅਤੇ ਸੰਚਾਰ ਲੀਡ"
  },
  "Environmental Responsibility Policy": {
    en: "Environmental Responsibility Policy",
    pa: "ਵਾਤਾਵਰਣ ਦੀ ਜ਼ਿੰਮੇਵਾਰੀ ਨੀਤੀ"
  },
  "Environmental responsibility": {
    en: "Environmental responsibility",
    pa: "ਵਾਤਾਵਰਣਕ ਜ਼ਿੰਮੇਵਾਰੀ"
  },
  "Reduces avoidable waste and resource use in programmes and events.": {
    en: "Reduces avoidable waste and resource use in programmes and events.",
    pa: "ਪ੍ਰੋਗਰਾਮਾਂ ਅਤੇ ਸਮਾਗਮਾਂ ਵਿੱਚ ਬਚਣਯੋਗ ਰਹਿੰਦ-ਖੂੰਹਦ ਅਤੇ ਸਰੋਤਾਂ ਦੀ ਵਰਤੋਂ ਨੂੰ ਘਟਾਉਂਦਾ ਹੈ।"
  },
  "Operations Lead and Programme Leads": {
    en: "Operations Lead and Programme Leads",
    pa: "ਆਪ੍ਰੇਸ਼ਨ ਲੀਡ ਅਤੇ ਪ੍ਰੋਗਰਾਮ ਲੀਡ"
  },
  "Website Privacy Notice": {
    en: "Website Privacy Notice",
    pa: "ਵੈੱਬਸਾਈਟ ਗੋਪਨੀਯਤਾ ਨੋਟਿਸ"
  },
  "Website privacy": {
    en: "Website privacy",
    pa: "ਵੈੱਬਸਾਈਟ ਨਿੱਜਤਾ"
  },
  "Explains what data the website and its third-party content may receive.": {
    en: "Explains what data the website and its third-party content may receive.",
    pa: "ਸਮਝਾਉਂਦਾ ਹੈ ਕਿ ਵੈੱਬਸਾਈਟ ਅਤੇ ਇਸਦੀ ਤੀਜੀ-ਧਿਰ ਦੀ ਸਮੱਗਰੀ ਕੀ ਡੇਟਾ ਪ੍ਰਾਪਤ ਕਰ ਸਕਦੀ ਹੈ।"
  },
  "Privacy Responsible Person": {
    en: "Privacy Responsible Person",
    pa: "ਗੋਪਨੀਯਤਾ ਲਈ ਜ਼ਿੰਮੇਵਾਰ ਵਿਅਕਤੀ"
  },
  "Website Terms of Use": {
    en: "Website Terms of Use",
    pa: "ਵੈੱਬਸਾਈਟ ਦੀ ਵਰਤੋਂ ਦੀਆਂ ਸ਼ਰਤਾਂ"
  },
  "Website terms of use": {
    en: "Website terms of use",
    pa: "ਵੈੱਬਸਾਈਟ ਵਰਤੋਂ ਦੀਆਂ ਸ਼ਰਤਾਂ"
  },
  "Sets permitted use, content limits and external-link terms.": {
    en: "Sets permitted use, content limits and external-link terms.",
    pa: "ਪ੍ਰਵਾਨਿਤ ਵਰਤੋਂ, ਸਮੱਗਰੀ ਸੀਮਾਵਾਂ ਅਤੇ ਬਾਹਰੀ-ਲਿੰਕ ਸ਼ਰਤਾਂ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ।"
  },
  "Cookie and Third-Party Content Notice": {
    en: "Cookie and Third-Party Content Notice",
    pa: "ਕੂਕੀ ਅਤੇ ਥਰਡ-ਪਾਰਟੀ ਸਮਗਰੀ ਨੋਟਿਸ"
  },
  "Cookies and third-party content": {
    en: "Cookies and third-party content",
    pa: "ਕੁਕੀਜ਼ ਅਤੇ ਤੀਜੀ ਧਿਰ ਦੀ ਸਮੱਗਰੀ"
  },
  "Identifies website technologies and the live Facebook embed.": {
    en: "Identifies website technologies and the live Facebook embed.",
    pa: "ਵੈੱਬਸਾਈਟ ਤਕਨਾਲੋਜੀਆਂ ਅਤੇ ਲਾਈਵ ਫੇਸਬੁੱਕ (Facebook) ਐਮਬੈੱਡ ਦੀ ਪਛਾਣ ਕਰਦਾ ਹੈ।"
  },
  "1.0": {
    en: "1.0",
    pa: "੧.੦"
  },
  "13 August 2026": {
    en: "13 August 2026",
    pa: "੧੩ ਅਗਸਤ ੨੦੨੬"
  },
  "13 August 2028": {
    en: "13 August 2028",
    pa: "੧੩ ਅਗਸਤ ੨੦੨੮"
  },
  "Purpose": {
    en: "Purpose",
    pa: "ਉਦੇਸ਼"
  },
  "Punjabi Samvad uses its authority, funds and assets for its registered charitable objectives. This policy assigns oversight duties and records how the organisation makes significant decisions.": {
    en: "Punjabi Samvad uses its authority, funds and assets for its registered charitable objectives. This policy assigns oversight duties and records how the organisation makes significant decisions.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਆਪਣੇ ਅਧਿਕਾਰ, ਫੰਡਾਂ ਅਤੇ ਸੰਪਤੀਆਂ ਦੀ ਵਰਤੋਂ ਆਪਣੇ ਰਜਿਸਟਰਡ ਚੈਰੀਟੇਬਲ ਉਦੇਸ਼ਾਂ ਲਈ ਕਰਦਾ ਹੈ। ਇਹ ਨੀਤੀ ਨਿਗਰਾਨੀ ਦੀਆਂ ਡਿਊਟੀਆਂ ਨਿਰਧਾਰਤ ਕਰਦੀ ਹੈ ਅਤੇ ਰਿਕਾਰਡ ਕਰਦੀ ਹੈ ਕਿ ਸੰਸਥਾ ਮਹੱਤਵਪੂਰਨ ਫੈਸਲੇ ਕਿਵੇਂ ਲੈਂਦੀ ਹੈ।"
  },
  "Governing Body duties": {
    en: "Governing Body duties",
    pa: "ਪ੍ਰਬੰਧਕੀ ਕਮੇਟੀ ਦੀਆਂ ਡਿਊਟੀਆਂ"
  },
  "Approve strategy, annual plans and budgets.": {
    en: "Approve strategy, annual plans and budgets.",
    pa: "ਰਣਨੀਤੀ, ਸਾਲਾਨਾ ਯੋਜਨਾਵਾਂ ਅਤੇ ਬਜਟਾਂ ਨੂੰ ਮਨਜ਼ੂਰੀ ਦਿਓ।"
  },
  "Review programme performance, finance, safeguarding and major risks.": {
    en: "Review programme performance, finance, safeguarding and major risks.",
    pa: "ਪ੍ਰੋਗਰਾਮ ਦੀ ਕਾਰਗੁਜ਼ਾਰੀ, ਵਿੱਤ, ਸੁਰੱਖਿਆ ਅਤੇ ਪ੍ਰਮੁੱਖ ਜੋਖਮਾਂ ਦੀ ਸਮੀਖਿਆ ਕਰੋ।"
  },
  "Monitor statutory filings, registrations and donor obligations.": {
    en: "Monitor statutory filings, registrations and donor obligations.",
    pa: "ਵਿਧਾਨਕ ਫਾਈਲਿੰਗਾਂ, ਰਜਿਸਟ੍ਰੇਸ਼ਨਾਂ ਅਤੇ ਦਾਨੀ ਜ਼ਿੰਮੇਵਾਰੀਆਂ ਦੀ ਨਿਗਰਾਨੀ ਕਰੋ।"
  },
  "Oversee senior leadership and conflicts of interest.": {
    en: "Oversee senior leadership and conflicts of interest.",
    pa: "ਸੀਨੀਅਰ ਲੀਡਰਸ਼ਿਪ ਅਤੇ ਹਿੱਤਾਂ ਦੇ ਟਕਰਾਅ ਦੀ ਨਿਗਰਾਨੀ ਕਰੋ।"
  },
  "Record decisions, owners and follow-up dates in meeting minutes.": {
    en: "Record decisions, owners and follow-up dates in meeting minutes.",
    pa: "ਮੀਟਿੰਗ ਦੇ ਮਿੰਟਾਂ ਵਿੱਚ ਫੈਸਲਿਆਂ, ਮਾਲਕਾਂ ਅਤੇ ਫਾਲੋ-ਅਪ ਮਿਤੀਆਂ ਨੂੰ ਰਿਕਾਰਡ ਕਰੋ।"
  },
  "Delegated authority": {
    en: "Delegated authority",
    pa: "ਸੌਂਪਿਆ ਗਿਆ ਅਧਿਕਾਰ"
  },
  "The Governing Body sets written financial and operational approval limits. A person may exercise only the authority assigned to their role. No one may approve a transaction or contract in which they have an undisclosed interest.": {
    en: "The Governing Body sets written financial and operational approval limits. A person may exercise only the authority assigned to their role. No one may approve a transaction or contract in which they have an undisclosed interest.",
    pa: "ਪ੍ਰਬੰਧਕੀ ਕਮੇਟੀ ਲਿਖਤੀ ਵਿੱਤੀ ਅਤੇ ਕਾਰਜਸ਼ੀਲ ਪ੍ਰਵਾਨਗੀ ਸੀਮਾਵਾਂ ਨਿਰਧਾਰਤ ਕਰਦੀ ਹੈ। ਕੋਈ ਵਿਅਕਤੀ ਸਿਰਫ ਆਪਣੀ ਭੂਮਿਕਾ ਨੂੰ ਸੌਂਪੇ ਗਏ ਅਧਿਕਾਰ ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦਾ ਹੈ। ਕੋਈ ਵੀ ਅਜਿਹੇ ਲੈਣ-ਦੇਣ ਜਾਂ ਇਕਰਾਰਨਾਮੇ ਨੂੰ ਮਨਜ਼ੂਰੀ ਨਹੀਂ ਦੇ ਸਕਦਾ ਜਿਸ ਵਿੱਚ ਉਨ੍ਹਾਂ ਦਾ ਕੋਈ ਗੁਪਤ ਹਿੱਤ ਹੋਵੇ।"
  },
  "Punjabi Samvad keeps records that allow the Governing Body, auditors, donors and regulators to review its decisions and use of funds. The organisation corrects identified control failures and records the action taken.": {
    en: "Punjabi Samvad keeps records that allow the Governing Body, auditors, donors and regulators to review its decisions and use of funds. The organisation corrects identified control failures and records the action taken.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਅਜਿਹੇ ਰਿਕਾਰਡ ਰੱਖਦਾ ਹੈ ਜੋ ਪ੍ਰਬੰਧਕੀ ਕਮੇਟੀ, ਆਡੀਟਰਾਂ, ਦਾਨੀਆਂ ਅਤੇ ਰੈਗੂਲੇਟਰਾਂ ਨੂੰ ਇਸਦੇ ਫੈਸਲਿਆਂ ਅਤੇ ਫੰਡਾਂ ਦੀ ਵਰਤੋਂ ਦੀ ਸਮੀਖਿਆ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦੇ ਹਨ। ਸੰਸਥਾ ਪਛਾਣੀਆਂ ਗਈਆਂ ਨਿਯੰਤਰਣ ਅਸਫਲਤਾਵਾਂ ਨੂੰ ਠੀਕ ਕਰਦੀ ਹੈ ਅਤੇ ਕੀਤੀ ਗਈ ਕਾਰਵਾਈ ਨੂੰ ਰਿਕਾਰਡ ਕਰਦੀ ਹੈ।"
  },
  "Who must follow this code": {
    en: "Who must follow this code",
    pa: "ਕਿਸਨੂੰ ਇਸ ਕੋਡ ਦੀ ਪਾਲਣਾ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ"
  },
  "Governing Body members, employees, consultants, volunteers, interns, facilitators and contractors must follow this code while representing Punjabi Samvad.": {
    en: "Governing Body members, employees, consultants, volunteers, interns, facilitators and contractors must follow this code while representing Punjabi Samvad.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀ ਨੁਮਾਇੰਦਗੀ ਕਰਦੇ ਸਮੇਂ ਪ੍ਰਬੰਧਕੀ ਕਮੇਟੀ ਦੇ ਮੈਂਬਰਾਂ, ਕਰਮਚਾਰੀਆਂ, ਸਲਾਹਕਾਰਾਂ, ਵਲੰਟੀਅਰਾਂ, ਇੰਟਰਨਜ਼, ਫੈਸਿਲੀਟੇਟਰਾਂ ਅਤੇ ਠੇਕੇਦਾਰਾਂ ਨੂੰ ਇਸ ਕੋਡ ਦੀ ਪਾਲਣਾ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ।"
  },
  "Expected conduct": {
    en: "Expected conduct",
    pa: "ਉਮੀਦ ਕੀਤਾ ਗਿਆ ਆਚਰਣ"
  },
  "Treat participants and colleagues with dignity.": {
    en: "Treat participants and colleagues with dignity.",
    pa: "ਭਾਗੀਦਾਰਾਂ ਅਤੇ ਸਾਥੀਆਂ ਨਾਲ ਸਨਮਾਨ ਨਾਲ ਪੇਸ਼ ਆਓ।"
  },
  "Protect confidential information and organisational assets.": {
    en: "Protect confidential information and organisational assets.",
    pa: "ਗੁਪਤ ਜਾਣਕਾਰੀ ਅਤੇ ਸੰਸਥਾਗਤ ਸੰਪਤੀਆਂ ਦੀ ਰੱਖਿਆ ਕਰੋ।"
  },
  "Maintain professional boundaries.": {
    en: "Maintain professional boundaries.",
    pa: "ਪੇਸ਼ੇਵਰ ਸੀਮਾਵਾਂ ਬਣਾਈ ਰੱਖੋ।"
  },
  "Declare conflicts of interest.": {
    en: "Declare conflicts of interest.",
    pa: "ਹਿੱਤਾਂ ਦੇ ਟਕਰਾਅ ਦਾ ਐਲਾਨ ਕਰੋ।"
  },
  "Follow safeguarding, finance and safety procedures.": {
    en: "Follow safeguarding, finance and safety procedures.",
    pa: "ਸੁਰੱਖਿਆ, ਵਿੱਤ ਅਤੇ ਸੁਰੱਖਿਆ ਪ੍ਰਕਿਰਿਆਵਾਂ ਦੀ ਪਾਲਣਾ ਕਰੋ।"
  },
  "Report suspected misconduct or risk.": {
    en: "Report suspected misconduct or risk.",
    pa: "ਸ਼ੱਕੀ ਦੁਰਵਿਹਾਰ ਜਾਂ ਜੋਖਮ ਦੀ ਰਿਪੋਰਟ ਕਰੋ।"
  },
  "Prohibited conduct": {
    en: "Prohibited conduct",
    pa: "ਵਰਜਿਤ ਆਚਰਣ"
  },
  "Harassment, discrimination, bullying or retaliation.": {
    en: "Harassment, discrimination, bullying or retaliation.",
    pa: "ਪ੍ਰੇਸ਼ਾਨ ਕਰਨਾ, ਵਿਤਕਰਾ, ਧੱਕੇਸ਼ਾਹੀ ਜਾਂ ਬਦਲਾ ਲੈਣਾ।"
  },
  "Child abuse, sexual exploitation or abuse of power.": {
    en: "Child abuse, sexual exploitation or abuse of power.",
    pa: "ਬਾਲ ਸ਼ੋਸ਼ਣ, ਜਿਨਸੀ ਸ਼ੋਸ਼ਣ ਜਾਂ ਸੱਤਾ ਦੀ ਦੁਰਵਰਤੋਂ।"
  },
  "Fraud, bribery, theft or falsification of records.": {
    en: "Fraud, bribery, theft or falsification of records.",
    pa: "ਧੋਖਾਧੜੀ, ਰਿਸ਼ਵਤਖੋਰੀ, ਚੋਰੀ ਜਾਂ ਰਿਕਾਰਡਾਂ ਦੀ ਛੇੜਛਾੜ।"
  },
  "Misuse of participant information, funds or programme access.": {
    en: "Misuse of participant information, funds or programme access.",
    pa: "ਭਾਗੀਦਾਰ ਜਾਣਕਾਰੀ, ਫੰਡਾਂ ਜਾਂ ਪ੍ਰੋਗਰਾਮ ਪਹੁੰਚ ਦੀ ਦੁਰਵਰਤੋਂ।"
  },
  "Intoxication during duties when it affects safety or conduct.": {
    en: "Intoxication during duties when it affects safety or conduct.",
    pa: "ਡਿਊਟੀ ਦੌਰਾਨ ਨਸ਼ਾ ਕਰਨਾ ਜਦੋਂ ਇਹ ਸੁਰੱਖਿਆ ਜਾਂ ਆਚਰਣ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਦਾ ਹੈ।"
  },
  "Response": {
    en: "Response",
    pa: "ਪ੍ਰਤੀਕਿਰਿਆ"
  },
  "Punjabi Samvad may remove a person from duties while it assesses a safety or misconduct concern. Proven misconduct may lead to corrective action, termination of engagement, recovery of funds or a report to the authorities.": {
    en: "Punjabi Samvad may remove a person from duties while it assesses a safety or misconduct concern. Proven misconduct may lead to corrective action, termination of engagement, recovery of funds or a report to the authorities.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਕਿਸੇ ਵਿਅਕਤੀ ਨੂੰ ਡਿਊਟੀ ਤੋਂ ਹਟਾ ਸਕਦਾ ਹੈ ਜਦੋਂ ਇਹ ਸੁਰੱਖਿਆ ਜਾਂ ਦੁਰਵਿਹਾਰ ਦੀ ਚਿੰਤਾ ਦਾ ਮੁਲਾਂਕਣ ਕਰਦਾ ਹੈ। ਸਾਬਤ ਹੋਏ ਦੁਰਵਿਹਾਰ ਕਾਰਨ ਸੁਧਾਰਾਤਮਕ ਕਾਰਵਾਈ, ਰੁਝੇਵੇਂ ਦੀ ਸਮਾਪਤੀ, ਫੰਡਾਂ ਦੀ ਵਸੂਲੀ ਜਾਂ ਅਧਿਕਾਰੀਆਂ ਨੂੰ ਰਿਪੋਰਟ ਹੋ ਸਕਦੀ ਹੈ।"
  },
  "Conflict of Interest Policy": {
    en: "Conflict of Interest Policy",
    pa: "ਹਿੱਤਾਂ ਦੇ ਟਕਰਾਅ ਦੀ ਨੀਤੀ"
  },
  "Conflict of interest": {
    en: "Conflict of interest",
    pa: "ਹਿੱਤਾਂ ਦਾ ਟਕਰਾਅ"
  },
  "Requires disclosure and independent handling of personal interests in organisational decisions.": {
    en: "Requires disclosure and independent handling of personal interests in organisational decisions.",
    pa: "ਸੰਸਥਾਗਤ ਫੈਸਲਿਆਂ ਵਿੱਚ ਨਿੱਜੀ ਹਿੱਤਾਂ ਦੇ ਖੁਲਾਸੇ ਅਤੇ ਸੁਤੰਤਰ ਨਜਿੱਠਣ ਦੀ ਮੰਗ ਕਰਦਾ ਹੈ।"
  },
  "Conflicts": {
    en: "Conflicts",
    pa: "ਟਕਰਾਅ"
  },
  "A conflict exists when a financial interest, family connection, personal relationship, business role or other obligation could influence a Punjabi Samvad decision or create a reasonable appearance of influence.": {
    en: "A conflict exists when a financial interest, family connection, personal relationship, business role or other obligation could influence a Punjabi Samvad decision or create a reasonable appearance of influence.",
    pa: "ਇੱਕ ਟਕਰਾਅ ਉਦੋਂ ਮੌਜੂਦ ਹੁੰਦਾ ਹੈ ਜਦੋਂ ਕੋਈ ਵਿੱਤੀ ਹਿੱਤ, ਪਰਿਵਾਰਕ ਸਬੰਧ, ਨਿੱਜੀ ਰਿਸ਼ਤਾ, ਵਪਾਰਕ ਭੂਮਿਕਾ ਜਾਂ ਹੋਰ ਜ਼ਿੰਮੇਵਾਰੀ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਫੈਸਲੇ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰ ਸਕਦੀ ਹੈ ਜਾਂ ਪ੍ਰਭਾਵ ਦੀ ਇੱਕ ਵਾਜਬ ਦਿੱਖ ਬਣਾ ਸਕਦੀ ਹੈ।"
  },
  "Disclosure": {
    en: "Disclosure",
    pa: "ਖੁਲਾਸਾ"
  },
  "Governing Body members and staff must disclose a conflict as soon as they identify it. Governing Body members and senior personnel must also complete periodic declarations.": {
    en: "Governing Body members and staff must disclose a conflict as soon as they identify it. Governing Body members and senior personnel must also complete periodic declarations.",
    pa: "ਪ੍ਰਬੰਧਕੀ ਕਮੇਟੀ ਦੇ ਮੈਂਬਰਾਂ ਅਤੇ ਸਟਾਫ ਨੂੰ ਟਕਰਾਅ ਦੀ ਪਛਾਣ ਹੁੰਦੇ ਹੀ ਇਸ ਦਾ ਖੁਲਾਸਾ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ। ਪ੍ਰਬੰਧਕੀ ਕਮੇਟੀ ਦੇ ਮੈਂਬਰਾਂ ਅਤੇ ਸੀਨੀਅਰ ਕਰਮਚਾਰੀਆਂ ਨੂੰ ਵੀ ਸਮੇਂ-ਸਮੇਂ 'ਤੇ ਘੋਸ਼ਣਾਵਾਂ ਪੂਰੀਆਂ ਕਰਨੀਆਂ ਚਾਹੀਦੀਆਂ ਹਨ।"
  },
  "Managing a conflict": {
    en: "Managing a conflict",
    pa: "ਟਕਰਾਅ ਦਾ ਪ੍ਰਬੰਧਨ"
  },
  "Record the disclosure.": {
    en: "Record the disclosure.",
    pa: "ਖੁਲਾਸੇ ਨੂੰ ਰਿਕਾਰਡ ਕਰੋ।"
  },
  "Exclude the conflicted person from evaluation, negotiation and voting.": {
    en: "Exclude the conflicted person from evaluation, negotiation and voting.",
    pa: "ਵਿਵਾਦਗ੍ਰਸਤ ਵਿਅਕਤੀ ਨੂੰ ਮੁਲਾਂਕਣ, ਗੱਲਬਾਤ ਅਤੇ ਵੋਟਿੰਗ ਤੋਂ ਬਾਹਰ ਰੱਖੋ।"
  },
  "Ask the person to leave the discussion when needed.": {
    en: "Ask the person to leave the discussion when needed.",
    pa: "ਲੋੜ ਪੈਣ 'ਤੇ ਵਿਅਕਤੀ ਨੂੰ ਚਰਚਾ ਛੱਡਣ ਲਈ ਕਹੋ।"
  },
  "Record who made the final decision and why.": {
    en: "Record who made the final decision and why.",
    pa: "ਰਿਕਾਰਡ ਕਰੋ ਕਿ ਅੰਤਿਮ ਫੈਸਲਾ ਕਿਸਨੇ ਲਿਆ ਅਤੇ ਕਿਉਂ।"
  },
  "Failure to disclose": {
    en: "Failure to disclose",
    pa: "ਖੁਲਾਸਾ ਕਰਨ ਵਿੱਚ ਅਸਫਲਤਾ"
  },
  "Punjabi Samvad may review or cancel an affected decision and take action against a person who withheld a material conflict.": {
    en: "Punjabi Samvad may review or cancel an affected decision and take action against a person who withheld a material conflict.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਕਿਸੇ ਪ੍ਰਭਾਵਿਤ ਫੈਸਲੇ ਦੀ ਸਮੀਖਿਆ ਜਾਂ ਰੱਦ ਕਰ ਸਕਦਾ ਹੈ ਅਤੇ ਅਜਿਹੇ ਵਿਅਕਤੀ ਵਿਰੁੱਧ ਕਾਰਵਾਈ ਕਰ ਸਕਦਾ ਹੈ ਜਿਸਨੇ ਕਿਸੇ ਠੋਸ ਟਕਰਾਅ ਨੂੰ ਰੋਕਿਆ ਹੈ।"
  },
  "Anti-Fraud, Anti-Bribery and Anti-Corruption Policy": {
    en: "Anti-Fraud, Anti-Bribery and Anti-Corruption Policy",
    pa: "ਧੋਖਾਧੜੀ-ਵਿਰੋਧੀ, ਰਿਸ਼ਵਤ-ਵਿਰੋਧੀ ਅਤੇ ਭ੍ਰਿਸ਼ਟਾਚਾਰ-ਵਿਰੋਧੀ ਨੀਤੀ"
  },
  "Anti-fraud and anti-corruption": {
    en: "Anti-fraud and anti-corruption",
    pa: "ਧੋਖਾਧੜੀ ਅਤੇ ਭ੍ਰਿਸ਼ਟਾਚਾਰ ਵਿਰੋਧੀ ਨੀਤੀ"
  },
  "Prohibits fraud, bribery, kickbacks and deliberate misuse of resources.": {
    en: "Prohibits fraud, bribery, kickbacks and deliberate misuse of resources.",
    pa: "ਧੋਖਾਧੜੀ, ਰਿਸ਼ਵਤਖੋਰੀ, ਕਿੱਕਬੈਕ ਅਤੇ ਸਰੋਤਾਂ ਦੀ ਜਾਣਬੁੱਝ ਕੇ ਦੁਰਵਰਤੋਂ ਦੀ ਮਨਾਹੀ ਕਰਦਾ ਹੈ।"
  },
  "Governing Body and Finance Lead": {
    en: "Governing Body and Finance Lead",
    pa: "ਪ੍ਰਬੰਧਕੀ ਕਮੇਟੀ ਅਤੇ ਫਾਈਨੈਂਸ ਲੀਡ"
  },
  "Prohibited acts": {
    en: "Prohibited acts",
    pa: "ਵਰਜਿਤ ਕੰਮ"
  },
  "Offer, request or accept a bribe or kickback.": {
    en: "Offer, request or accept a bribe or kickback.",
    pa: "ਰਿਸ਼ਵਤ ਜਾਂ ਕਿੱਕਬੈਕ ਦੀ ਪੇਸ਼ਕਸ਼, ਬੇਨਤੀ ਜਾਂ ਸਵੀਕਾਰ ਕਰਨਾ।"
  },
  "Create false bills, vendors, participants or attendance records.": {
    en: "Create false bills, vendors, participants or attendance records.",
    pa: "ਝੂਠੇ ਬਿੱਲ, ਵਿਕਰੇਤਾ, ਭਾਗੀਦਾਰ ਜਾਂ ਹਾਜ਼ਰੀ ਰਿਕਾਰਡ ਬਣਾਉਣਾ।"
  },
  "Divert funds, supplies or opportunities for personal use.": {
    en: "Divert funds, supplies or opportunities for personal use.",
    pa: "ਨਿੱਜੀ ਵਰਤੋਂ ਲਈ ਫੰਡ, ਸਪਲਾਈ ਜਾਂ ਮੌਕਿਆਂ ਨੂੰ ਮੋੜਨਾ।"
  },
  "Manipulate procurement or conceal an irregularity.": {
    en: "Manipulate procurement or conceal an irregularity.",
    pa: "ਖਰੀਦਦਾਰੀ ਵਿੱਚ ਹੇਰਾਫੇਰੀ ਕਰਨਾ ਜਾਂ ਕਿਸੇ ਬੇਨਿਯਮੀ ਨੂੰ ਛੁਪਾਉਣਾ।"
  },
  "Retaliate against a person who reports a concern in good faith.": {
    en: "Retaliate against a person who reports a concern in good faith.",
    pa: "ਸਦਭਾਵਨਾ ਨਾਲ ਚਿੰਤਾ ਦੀ ਰਿਪੋਰਟ ਕਰਨ ਵਾਲੇ ਵਿਅਕਤੀ ਵਿਰੁੱਧ ਬਦਲਾ ਲੈਣਾ।"
  },
  "Reporting": {
    en: "Reporting",
    pa: "ਰਿਪੋਰਟਿੰਗ"
  },
  "Report suspected fraud to the President or a Governing Body member who has no connection to the allegation. If the allegation concerns the President, address a confidential written report to a Governing Body member other than the President at the registered office.": {
    en: "Report suspected fraud to the President or a Governing Body member who has no connection to the allegation. If the allegation concerns the President, address a confidential written report to a Governing Body member other than the President at the registered office.",
    pa: "ਸ਼ੱਕੀ ਧੋਖਾਧੜੀ ਦੀ ਰਿਪੋਰਟ ਪ੍ਰਧਾਨ ਜਾਂ ਪ੍ਰਬੰਧਕੀ ਕਮੇਟੀ ਦੇ ਮੈਂਬਰ ਨੂੰ ਕਰੋ ਜਿਸਦਾ ਦੋਸ਼ ਨਾਲ ਕੋਈ ਸਬੰਧ ਨਹੀਂ ਹੈ। ਜੇ ਦੋਸ਼ ਪ੍ਰਧਾਨ ਨਾਲ ਸਬੰਧਤ ਹੈ, ਤਾਂ ਪ੍ਰਧਾਨ ਤੋਂ ਇਲਾਵਾ ਪ੍ਰਬੰਧਕੀ ਕਮੇਟੀ ਦੇ ਮੈਂਬਰ ਨੂੰ ਰਜਿਸਟਰਡ ਦਫਤਰ ਵਿਖੇ ਇੱਕ ਗੁਪਤ ਲਿਖਤੀ ਰਿਪੋਰਟ ਭੇਜੋ।"
  },
  "Review and action": {
    en: "Review and action",
    pa: "ਸਮੀਖਿਆ ਅਤੇ ਕਾਰਵਾਈ"
  },
  "Punjabi Samvad records each credible allegation, preserves relevant records and assigns an independent reviewer. The organisation may suspend access or payments during the review. It reports suspected criminal conduct to the appropriate authority when required.": {
    en: "Punjabi Samvad records each credible allegation, preserves relevant records and assigns an independent reviewer. The organisation may suspend access or payments during the review. It reports suspected criminal conduct to the appropriate authority when required.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਹਰ ਭਰੋਸੇਮੰਦ ਦੋਸ਼ ਨੂੰ ਰਿਕਾਰਡ ਕਰਦਾ ਹੈ, ਸੰਬੰਧਿਤ ਰਿਕਾਰਡਾਂ ਨੂੰ ਸੁਰੱਖਿਅਤ ਰੱਖਦਾ ਹੈ ਅਤੇ ਇੱਕ ਸੁਤੰਤਰ ਸਮੀਖਿਅਕ ਨਿਯੁਕਤ ਕਰਦਾ ਹੈ। ਸੰਸਥਾ ਸਮੀਖਿਆ ਦੌਰਾਨ ਪਹੁੰਚ ਜਾਂ ਭੁਗਤਾਨਾਂ ਨੂੰ ਮੁਅੱਤਲ ਕਰ ਸਕਦੀ ਹੈ। ਇਹ ਲੋੜ ਪੈਣ 'ਤੇ ਉਚਿਤ ਅਥਾਰਟੀ ਨੂੰ ਸ਼ੱਕੀ ਅਪਰਾਧਿਕ ਆਚਰਣ ਦੀ ਰਿਪੋਰਟ ਕਰਦਾ ਹੈ।"
  },
  "Financial Management and Internal Controls Policy": {
    en: "Financial Management and Internal Controls Policy",
    pa: "ਵਿੱਤੀ ਪ੍ਰਬੰਧਨ ਅਤੇ ਅੰਦਰੂਨੀ ਨਿਯੰਤਰਣ ਨੀਤੀ"
  },
  "Protects organisational and donor funds through budgets, approvals and traceable records.": {
    en: "Protects organisational and donor funds through budgets, approvals and traceable records.",
    pa: "ਬਜਟਾਂ, ਪ੍ਰਵਾਨਗੀਆਂ ਅਤੇ ਖੋਜਣਯੋਗ ਰਿਕਾਰਡਾਂ ਰਾਹੀਂ ਸੰਸਥਾਗਤ ਅਤੇ ਦਾਨੀ ਫੰਡਾਂ ਦੀ ਰੱਖਿਆ ਕਰਦਾ ਹੈ।"
  },
  "Core records": {
    en: "Core records",
    pa: "ਮੁੱਖ ਰਿਕਾਰਡ"
  },
  "Books of account and bank records.": {
    en: "Books of account and bank records.",
    pa: "ਖਾਤੇ ਦੀਆਂ ਕਿਤਾਬਾਂ ਅਤੇ ਬੈਂਕ ਰਿਕਾਰਡ।"
  },
  "Bills, vouchers and payment approvals.": {
    en: "Bills, vouchers and payment approvals.",
    pa: "ਬਿੱਲ, ਵਾਊਚਰ ਅਤੇ ਭੁਗਤਾਨ ਮਨਜ਼ੂਰੀਆਂ।"
  },
  "Annual and project budgets.": {
    en: "Annual and project budgets.",
    pa: "ਸਾਲਾਨਾ ਅਤੇ ਪ੍ਰੋਜੈਕਟ ਬਜਟ।"
  },
  "Project income and expenditure records.": {
    en: "Project income and expenditure records.",
    pa: "ਪ੍ਰੋਜੈਕਟ ਆਮਦਨ ਅਤੇ ਖਰਚੇ ਦੇ ਰਿਕਾਰਡ।"
  },
  "Grant, tax, statutory and fixed-asset records.": {
    en: "Grant, tax, statutory and fixed-asset records.",
    pa: "ਗ੍ਰਾਂਟ, ਟੈਕਸ, ਵਿਧਾਨਕ ਅਤੇ ਸਥਿਰ ਸੰਪਤੀ ਦੇ ਰਿਕਾਰਡ।"
  },
  "Budgets and review": {
    en: "Budgets and review",
    pa: "ਬਜਟ ਅਤੇ ਸਮੀਖਿਆ"
  },
  "The appropriate authority approves the annual budget and significant project budgets. The finance lead compares actual spending with approved budgets and raises material variances for review.": {
    en: "The appropriate authority approves the annual budget and significant project budgets. The finance lead compares actual spending with approved budgets and raises material variances for review.",
    pa: "ਉਚਿਤ ਅਥਾਰਟੀ ਸਾਲਾਨਾ ਬਜਟ ਅਤੇ ਮਹੱਤਵਪੂਰਨ ਪ੍ਰੋਜੈਕਟ ਬਜਟਾਂ ਨੂੰ ਮਨਜ਼ੂਰੀ ਦਿੰਦੀ ਹੈ। ਫਾਈਨੈਂਸ ਲੀਡ ਪ੍ਰਵਾਨਿਤ ਬਜਟਾਂ ਨਾਲ ਅਸਲ ਖਰਚਿਆਂ ਦੀ ਤੁਲਨਾ ਕਰਦਾ ਹੈ ਅਤੇ ਸਮੀਖਿਆ ਲਈ ਠੋਸ ਭਿੰਨਤਾਵਾਂ ਉਠਾਉਂਦਾ ਹੈ।"
  },
  "Payments and banking": {
    en: "Payments and banking",
    pa: "ਭੁਗਤਾਨ ਅਤੇ ਬੈਂਕਿੰਗ"
  },
  "Every payment must support a legitimate purpose, carry the required documents and meet the applicable approval limit. Punjabi Samvad holds organisational funds in authorised accounts in its name and does not use personal accounts to hold those funds.": {
    en: "Every payment must support a legitimate purpose, carry the required documents and meet the applicable approval limit. Punjabi Samvad holds organisational funds in authorised accounts in its name and does not use personal accounts to hold those funds.",
    pa: "ਹਰੇਕ ਭੁਗਤਾਨ ਨੂੰ ਇੱਕ ਜਾਇਜ਼ ਉਦੇਸ਼ ਦਾ ਸਮਰਥਨ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ, ਲੋੜੀਂਦੇ ਦਸਤਾਵੇਜ਼ ਰੱਖਣੇ ਚਾਹੀਦੇ ਹਨ ਅਤੇ ਲਾਗੂ ਪ੍ਰਵਾਨਗੀ ਸੀਮਾ ਨੂੰ ਪੂਰਾ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ। ਪੰਜਾਬੀ ਸੰਵਾਦ ਆਪਣੇ ਨਾਮ 'ਤੇ ਅਧਿਕਾਰਤ ਖਾਤਿਆਂ ਵਿੱਚ ਸੰਸਥਾਗਤ ਫੰਡ ਰੱਖਦਾ ਹੈ ਅਤੇ ਇਨ੍ਹਾਂ ਫੰਡਾਂ ਨੂੰ ਰੱਖਣ ਲਈ ਨਿੱਜੀ ਖਾਤਿਆਂ ਦੀ ਵਰਤੋਂ ਨਹੀਂ ਕਰਦਾ।"
  },
  "Cash and restricted funds": {
    en: "Cash and restricted funds",
    pa: "ਨਕਦ ਅਤੇ ਪ੍ਰਤਿਬੰਧਿਤ ਫੰਡ"
  },
  "Teams minimise cash use. They document advances and settle them within the assigned period. Punjabi Samvad uses restricted funds only for the accepted purpose and maintains the records required by the agreement.": {
    en: "Teams minimise cash use. They document advances and settle them within the assigned period. Punjabi Samvad uses restricted funds only for the accepted purpose and maintains the records required by the agreement.",
    pa: "ਟੀਮਾਂ ਨਕਦੀ ਦੀ ਵਰਤੋਂ ਘੱਟ ਕਰਦੀਆਂ ਹਨ। ਉਹ ਐਡਵਾਂਸ ਦਾ ਦਸਤਾਵੇਜ਼ ਬਣਾਉਂਦੇ ਹਨ ਅਤੇ ਨਿਰਧਾਰਤ ਮਿਆਦ ਦੇ ਅੰਦਰ ਉਨ੍ਹਾਂ ਦਾ ਨਿਪਟਾਰਾ ਕਰਦੇ ਹਨ। ਪੰਜਾਬੀ ਸੰਵਾਦ ਪ੍ਰਤਿਬੰਧਿਤ ਫੰਡਾਂ ਦੀ ਵਰਤੋਂ ਸਿਰਫ ਸਵੀਕਾਰ ਕੀਤੇ ਉਦੇਸ਼ ਲਈ ਕਰਦਾ ਹੈ ਅਤੇ ਸਮਝੌਤੇ ਦੁਆਰਾ ਲੋੜੀਂਦੇ ਰਿਕਾਰਡਾਂ ਨੂੰ ਕਾਇਮ ਰੱਖਦਾ ਹੈ।"
  },
  "Procurement and Vendor Management Policy": {
    en: "Procurement and Vendor Management Policy",
    pa: "ਖਰੀਦਦਾਰੀ ਅਤੇ ਵਿਕਰੇਤਾ ਪ੍ਰਬੰਧਨ ਨੀਤੀ"
  },
  "Procurement and vendors": {
    en: "Procurement and vendors",
    pa: "ਖਰੀਦ ਅਤੇ ਵਿਕਰੇਤਾ"
  },
  "Sets fair purchasing, vendor checks and documentation standards.": {
    en: "Sets fair purchasing, vendor checks and documentation standards.",
    pa: "ਨਿਰਪੱਖ ਖਰੀਦਦਾਰੀ, ਵਿਕਰੇਤਾ ਜਾਂਚ ਅਤੇ ਦਸਤਾਵੇਜ਼ੀ ਮਾਪਦੰਡ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ।"
  },
  "Finance Lead and Programme Lead": {
    en: "Finance Lead and Programme Lead",
    pa: "ਫਾਈਨੈਂਸ ਲੀਡ ਅਤੇ ਪ੍ਰੋਗਰਾਮ ਲੀਡ"
  },
  "Purchasing standard": {
    en: "Purchasing standard",
    pa: "ਖਰੀਦਦਾਰੀ ਦਾ ਮਿਆਰ"
  },
  "Punjabi Samvad chooses goods and services based on price, quality, suitability, delivery, reliability and programme need.": {
    en: "Punjabi Samvad chooses goods and services based on price, quality, suitability, delivery, reliability and programme need.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਕੀਮਤ, ਗੁਣਵੱਤਾ, ਅਨੁਕੂਲਤਾ, ਡਿਲੀਵਰੀ, ਭਰੋਸੇਯੋਗਤਾ ਅਤੇ ਪ੍ਰੋਗਰਾਮ ਦੀ ਲੋੜ ਦੇ ਆਧਾਰ 'ਤੇ ਵਸਤਾਂ ਅਤੇ ਸੇਵਾਵਾਂ ਦੀ ਚੋਣ ਕਰਦਾ ਹੈ।"
  },
  "Competition and approval": {
    en: "Competition and approval",
    pa: "ਮੁਕਾਬਲਾ ਅਤੇ ਮਨਜ਼ੂਰੀ"
  },
  "Higher-value purchases require quotation comparisons or a documented market assessment under the organisation's current approval schedule. Staff must not split a purchase to avoid an approval or comparison threshold.": {
    en: "Higher-value purchases require quotation comparisons or a documented market assessment under the organisation's current approval schedule. Staff must not split a purchase to avoid an approval or comparison threshold.",
    pa: "ਉੱਚ-ਮੁੱਲ ਵਾਲੀ ਖਰੀਦਦਾਰੀ ਲਈ ਸੰਸਥਾ ਦੇ ਮੌਜੂਦਾ ਪ੍ਰਵਾਨਗੀ ਕਾਰਜਕ੍ਰਮ ਦੇ ਤਹਿਤ ਹਵਾਲਾ ਤੁਲਨਾਵਾਂ ਜਾਂ ਦਸਤਾਵੇਜ਼ੀ ਮਾਰਕੀਟ ਮੁਲਾਂਕਣ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ। ਸਟਾਫ ਨੂੰ ਕਿਸੇ ਪ੍ਰਵਾਨਗੀ ਜਾਂ ਤੁਲਨਾ ਦੀ ਸੀਮਾ ਤੋਂ ਬਚਣ ਲਈ ਖਰੀਦਦਾਰੀ ਨੂੰ ਵੰਡਣਾ ਨਹੀਂ ਚਾਹੀਦਾ।"
  },
  "Vendor integrity": {
    en: "Vendor integrity",
    pa: "ਵਿਕਰੇਤਾ ਦੀ ਇਮਾਨਦਾਰੀ"
  },
  "Confirm the vendor's identity and payment details.": {
    en: "Confirm the vendor's identity and payment details.",
    pa: "ਵਿਕਰੇਤਾ ਦੀ ਪਛਾਣ ਅਤੇ ਭੁਗਤਾਨ ਦੇ ਵੇਰਵਿਆਂ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ।"
  },
  "Declare staff or Governing Body connections to a vendor.": {
    en: "Declare staff or Governing Body connections to a vendor.",
    pa: "ਕਿਸੇ ਵਿਕਰੇਤਾ ਨਾਲ ਸਟਾਫ ਜਾਂ ਪ੍ਰਬੰਧਕੀ ਕਮੇਟੀ ਦੇ ਕਨੈਕਸ਼ਨਾਂ ਦਾ ਐਲਾਨ ਕਰੋ।"
  },
  "Use written scope, price and delivery terms for significant work.": {
    en: "Use written scope, price and delivery terms for significant work.",
    pa: "ਮਹੱਤਵਪੂਰਨ ਕੰਮ ਲਈ ਲਿਖਤੀ ਦਾਇਰੇ, ਕੀਮਤ ਅਤੇ ਡਿਲੀਵਰੀ ਸ਼ਰਤਾਂ ਦੀ ਵਰਤੋਂ ਕਰੋ।"
  },
  "Retain selection, delivery and payment records.": {
    en: "Retain selection, delivery and payment records.",
    pa: "ਚੋਣ, ਡਿਲੀਵਰੀ ਅਤੇ ਭੁਗਤਾਨ ਦੇ ਰਿਕਾਰਡ ਬਰਕਰਾਰ ਰੱਖੋ।"
  },
  "Exceptions": {
    en: "Exceptions",
    pa: "ਅਪਵਾਦ"
  },
  "A responsible officer must document the reason for an emergency purchase, sole-source decision or other exception and obtain the required approval.": {
    en: "A responsible officer must document the reason for an emergency purchase, sole-source decision or other exception and obtain the required approval.",
    pa: "ਇੱਕ ਜ਼ਿੰਮੇਵਾਰ ਅਧਿਕਾਰੀ ਨੂੰ ਕਿਸੇ ਐਮਰਜੈਂਸੀ ਖਰੀਦਦਾਰੀ, ਇਕਲੌਤੇ-ਸਰੋਤ ਫੈਸਲੇ ਜਾਂ ਹੋਰ ਅਪਵਾਦ ਦੇ ਕਾਰਨ ਦਾ ਦਸਤਾਵੇਜ਼ ਬਣਾਉਣਾ ਚਾਹੀਦਾ ਹੈ ਅਤੇ ਲੋੜੀਂਦੀ ਮਨਜ਼ੂਰੀ ਪ੍ਰਾਪਤ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ।"
  },
  "Prevention of Sexual Harassment at Workplace Policy": {
    en: "Prevention of Sexual Harassment at Workplace Policy",
    pa: "ਕਾਰਜસ્થਾਨ 'ਤੇ ਜਿਨਸੀ ਸ਼ੋਸ਼ਣ ਦੀ ਰੋਕਥਾਮ ਨੀਤੀ"
  },
  "POSH": {
    en: "POSH",
    pa: "ਕਾਰਜਸਥਲ 'ਤੇ ਜਿਨਸੀ ਉਤਪੀੜਨ ਦੀ ਰੋਕਥਾਮ (POSH)"
  },
  "Prevents workplace sexual harassment and explains the statutory complaint route.": {
    en: "Prevents workplace sexual harassment and explains the statutory complaint route.",
    pa: "ਕਾਰਜਸ਼ੀਲ ਜਿਨਸੀ ਸ਼ੋਸ਼ਣ ਨੂੰ ਰੋਕਦਾ ਹੈ ਅਤੇ ਵਿਧਾਨਕ ਸ਼ਿਕਾਇਤ ਮਾਰਗ ਦੀ ਵਿਆਖਿਆ ਕਰਦਾ ਹੈ।"
  },
  "Employer and statutory committee, where applicable": {
    en: "Employer and statutory committee, where applicable",
    pa: "ਰੁਜ਼ਗਾਰਦਾਤਾ ਅਤੇ ਵਿਧਾਨਕ ਕਮੇਟੀ, ਜਿੱਥੇ ਲਾਗੂ ਹੋਵੇ"
  },
  "Scope": {
    en: "Scope",
    pa: "ਦਾਇਰਾ"
  },
  "This policy covers employees and work-related interactions at the office, programme sites, schools, meetings, training, events, travel and digital workspaces. Punjabi Samvad applies respectful-conduct standards to every person, while the statutory process under the POSH Act protects an aggrieved woman as defined by that Act.": {
    en: "This policy covers employees and work-related interactions at the office, programme sites, schools, meetings, training, events, travel and digital workspaces. Punjabi Samvad applies respectful-conduct standards to every person, while the statutory process under the POSH Act protects an aggrieved woman as defined by that Act.",
    pa: "ਇਹ ਨੀਤੀ ਕਰਮਚਾਰੀਆਂ ਅਤੇ ਦਫ਼ਤਰ, ਪ੍ਰੋਗਰਾਮ ਸਾਈਟਾਂ, ਸਕੂਲਾਂ, ਮੀਟਿੰਗਾਂ, ਸਿਖਲਾਈ, ਸਮਾਗਮਾਂ, ਯਾਤਰਾ ਅਤੇ ਡਿਜੀਟਲ ਕਾਰਜ ਸਥਾਨਾਂ 'ਤੇ ਕੰਮ ਨਾਲ ਸਬੰਧਤ ਗੱਲਬਾਤ ਨੂੰ ਕਵਰ ਕਰਦੀ ਹੈ। ਪੰਜਾਬੀ ਸੰਵਾਦ ਹਰੇਕ ਵਿਅਕਤੀ 'ਤੇ ਆਦਰਪੂਰਨ ਆਚਰਣ ਦੇ ਮਾਪਦੰਡ ਲਾਗੂ ਕਰਦਾ ਹੈ, ਜਦੋਂ ਕਿ POSH ਐਕਟ ਦੇ ਤਹਿਤ ਵਿਧਾਨਕ ਪ੍ਰਕਿਰਿਆ ਉਸ ਐਕਟ ਦੁਆਰਾ ਪਰਿਭਾਸ਼ਿਤ ਪੀੜਤ ਔਰਤ ਦੀ ਰੱਖਿਆ ਕਰਦੀ ਹੈ।"
  },
  "Sexual harassment": {
    en: "Sexual harassment",
    pa: "ਜਿਨਸੀ ਸ਼ੋਸ਼ਣ"
  },
  "Unwelcome physical contact or advances.": {
    en: "Unwelcome physical contact or advances.",
    pa: "ਅਣਚਾਹੇ ਸਰੀਰਕ ਸੰਪਰਕ ਜਾਂ ਪੇਸ਼ਕਦਮੀ।"
  },
  "A demand or request for a sexual favour.": {
    en: "A demand or request for a sexual favour.",
    pa: "ਜਿਨਸੀ ਅਹਿਸਾਨ ਦੀ ਮੰਗ ਜਾਂ ਬੇਨਤੀ।"
  },
  "Sexually coloured remarks or messages.": {
    en: "Sexually coloured remarks or messages.",
    pa: "ਜਿਨਸੀ ਰੰਗਤ ਵਾਲੀਆਂ ਟਿੱਪਣੀਆਂ ਜਾਂ ਸੰਦੇਸ਼।"
  },
  "Display of sexual content.": {
    en: "Display of sexual content.",
    pa: "ਜਿਨਸੀ ਸਮੱਗਰੀ ਦਾ ਪ੍ਰਦਰਸ਼ਨ।"
  },
  "Other unwelcome verbal, non-verbal or physical conduct of a sexual nature.": {
    en: "Other unwelcome verbal, non-verbal or physical conduct of a sexual nature.",
    pa: "ਜਿਨਸੀ ਸੁਭਾਅ ਦਾ ਹੋਰ ਅਣਚਾਹਿਆ ਜ਼ੁਬਾਨੀ, ਗੈਰ-ਜ਼ੁਬਾਨੀ ਜਾਂ ਸਰੀਰਕ ਆਚਰਣ।"
  },
  "Complaint route": {
    en: "Complaint route",
    pa: "ਸ਼ਿਕਾਇਤ ਦਾ ਰਸਤਾ"
  },
  "A workplace with 10 or more workers must constitute an Internal Committee under section 4 of the POSH Act. The district Local Committee receives complaints when the establishment has fewer than 10 workers or when the complaint concerns the employer. Punjabi Samvad will provide the current committee or district route on request and display the Internal Committee order when the threshold applies.": {
    en: "A workplace with 10 or more workers must constitute an Internal Committee under section 4 of the POSH Act. The district Local Committee receives complaints when the establishment has fewer than 10 workers or when the complaint concerns the employer. Punjabi Samvad will provide the current committee or district route on request and display the Internal Committee order when the threshold applies.",
    pa: "10 ਜਾਂ ਇਸ ਤੋਂ ਵੱਧ ਕਰਮਚਾਰੀਆਂ ਵਾਲੇ ਕਾਰਜ ਸਥਾਨ ਨੂੰ POSH ਐਕਟ ਦੀ ਧਾਰਾ 4 ਦੇ ਤਹਿਤ ਇੱਕ ਅੰਦਰੂਨੀ ਕਮੇਟੀ ਦਾ ਗਠਨ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ। ਜ਼ਿਲ੍ਹਾ ਸਥਾਨਕ ਕਮੇਟੀ ਸ਼ਿਕਾਇਤਾਂ ਪ੍ਰਾਪਤ ਕਰਦੀ ਹੈ ਜਦੋਂ ਸਥਾਪਨਾ ਵਿੱਚ 10 ਤੋਂ ਘੱਟ ਕਰਮਚਾਰੀ ਹੁੰਦੇ ਹਨ ਜਾਂ ਜਦੋਂ ਸ਼ਿਕਾਇਤ ਰੁਜ਼ਗਾਰਦਾਤਾ ਨਾਲ ਸਬੰਧਤ ਹੁੰਦੀ ਹੈ। ਪੰਜਾਬੀ ਸੰਵਾਦ ਬੇਨਤੀ ਕਰਨ 'ਤੇ ਮੌਜੂਦਾ ਕਮੇਟੀ ਜਾਂ ਜ਼ਿਲ੍ਹਾ ਮਾਰਗ ਪ੍ਰਦਾਨ ਕਰੇਗਾ ਅਤੇ ਥ੍ਰੈਸ਼ਹੋਲਡ ਲਾਗੂ ਹੋਣ 'ਤੇ ਅੰਦਰੂਨੀ ਕਮੇਟੀ ਆਰਡਰ ਪ੍ਰਦਰਸ਼ਿਤ ਕਰੇਗਾ।"
  },
  "Process and protection": {
    en: "Process and protection",
    pa: "ਪ੍ਰਕਿਰਿਆ ਅਤੇ ਸੁਰੱਖਿਆ"
  },
  "The committee handling the complaint follows the statutory procedure, time limits and confidentiality rules. Punjabi Samvad gives the committee access to records and witnesses, protects the complainant and participants from retaliation, and acts on lawful recommendations.": {
    en: "The committee handling the complaint follows the statutory procedure, time limits and confidentiality rules. Punjabi Samvad gives the committee access to records and witnesses, protects the complainant and participants from retaliation, and acts on lawful recommendations.",
    pa: "ਸ਼ਿਕਾਇਤ ਨਾਲ ਨਜਿੱਠਣ ਵਾਲੀ ਕਮੇਟੀ ਵਿਧਾਨਕ ਪ੍ਰਕਿਰਿਆ, ਸਮਾਂ ਸੀਮਾਵਾਂ ਅਤੇ ਗੁਪਤਤਾ ਨਿਯਮਾਂ ਦੀ ਪਾਲਣਾ ਕਰਦੀ ਹੈ। ਪੰਜਾਬੀ ਸੰਵਾਦ ਕਮੇਟੀ ਨੂੰ ਰਿਕਾਰਡਾਂ ਅਤੇ ਗਵਾਹਾਂ ਤੱਕ ਪਹੁੰਚ ਦਿੰਦਾ ਹੈ, ਸ਼ਿਕਾਇਤਕਰਤਾ ਅਤੇ ਭਾਗੀਦਾਰਾਂ ਨੂੰ ਬਦਲੇ ਦੀ ਭਾਵਨਾ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ, ਅਤੇ ਕਾਨੂੰਨੀ ਸਿਫਾਰਸ਼ਾਂ 'ਤੇ ਕੰਮ ਕਰਦਾ ਹੈ।"
  },
  "Immediate help": {
    en: "Immediate help",
    pa: "ਤੁਰੰਤ ਮਦਦ"
  },
  "A person who faces immediate danger should contact emergency services or the police. A request for workplace support does not prevent a person from using any legal remedy.": {
    en: "A person who faces immediate danger should contact emergency services or the police. A request for workplace support does not prevent a person from using any legal remedy.",
    pa: "ਜਿਸ ਵਿਅਕਤੀ ਨੂੰ ਤੁਰੰਤ ਖ਼ਤਰੇ ਦਾ ਸਾਹਮਣਾ ਕਰਨਾ ਪੈਂਦਾ ਹੈ ਉਸਨੂੰ ਐਮਰਜੈਂਸੀ ਸੇਵਾਵਾਂ ਜਾਂ ਪੁਲਿਸ ਨਾਲ ਸੰਪਰਕ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ। ਕਾਰਜસ્થਾਨ ਸਹਾਇਤਾ ਲਈ ਬੇਨਤੀ ਕਿਸੇ ਵਿਅਕਤੀ ਨੂੰ ਕਿਸੇ ਕਾਨੂੰਨੀ ਉਪਾਅ ਦੀ ਵਰਤੋਂ ਕਰਨ ਤੋਂ ਨਹੀਂ ਰੋਕਦੀ।"
  },
  "Sexual Harassment of Women at Workplace Act, 2013": {
    en: "Sexual Harassment of Women at Workplace Act, 2013",
    pa: "ਕਾਰਜસ્થਾਨ 'ਤੇ ਔਰਤਾਂ ਦਾ ਜਿਨਸੀ ਸ਼ੋਸ਼ਣ ਐਕਟ, 2013"
  },
  "Section 9: complaint procedure": {
    en: "Section 9: complaint procedure",
    pa: "ਧਾਰਾ 9: ਸ਼ਿਕਾਇਤ ਪ੍ਰਕਿਰਿਆ"
  },
  "Child Safeguarding and Child Protection Policy": {
    en: "Child Safeguarding and Child Protection Policy",
    pa: "ਬਾਲ ਸੁਰੱਖਿਆ ਅਤੇ ਬਾਲ ਸੁਰੱਖਿਆ ਨੀਤੀ"
  },
  "Sets conduct, consent and mandatory reporting rules for work involving children.": {
    en: "Sets conduct, consent and mandatory reporting rules for work involving children.",
    pa: "ਬੱਚਿਆਂ ਨੂੰ ਸ਼ਾਮਲ ਕਰਨ ਵਾਲੇ ਕੰਮ ਲਈ ਆਚਰਣ, ਸਹਿਮਤੀ ਅਤੇ ਲਾਜ਼ਮੀ ਰਿਪੋਰਟਿੰਗ ਨਿਯਮ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ।"
  },
  "Safeguarding Focal Person and Governing Body": {
    en: "Safeguarding Focal Person and Governing Body",
    pa: "ਸੇਫਗਾਰਡਿੰਗ ਫੋਕਲ ਪਰਸਨ ਅਤੇ ਪ੍ਰਬੰਧਕੀ ਕਮੇਟੀ"
  },
  "Core duty": {
    en: "Core duty",
    pa: "ਮੁੱਖ ਡਿਊਟੀ"
  },
  "Punjabi Samvad puts a child's safety, dignity and best interests first. Every representative must prevent abuse, exploitation, neglect, grooming, corporal punishment and humiliating treatment.": {
    en: "Punjabi Samvad puts a child's safety, dignity and best interests first. Every representative must prevent abuse, exploitation, neglect, grooming, corporal punishment and humiliating treatment.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਬੱਚੇ ਦੀ ਸੁਰੱਖਿਆ, ਸਨਮਾਨ ਅਤੇ ਸਰਬੋਤਮ ਹਿੱਤਾਂ ਨੂੰ ਪਹਿਲ ਦਿੰਦਾ ਹੈ। ਹਰੇਕ ਪ੍ਰਤੀਨਿਧੀ ਨੂੰ ਦੁਰਵਿਵਹਾਰ, ਸ਼ੋਸ਼ਣ, ਅਣਗਹਿਲੀ, ਗਰੂਮਿੰਗ, ਸਰੀਰਕ ਸਜ਼ਾ ਅਤੇ ਅਪਮਾਨਜਨਕ ਵਿਵਹਾਰ ਨੂੰ ਰੋਕਣਾ ਚਾਹੀਦਾ ਹੈ।"
  },
  "Safe conduct": {
    en: "Safe conduct",
    pa: "ਸੁਰੱਖਿਅਤ ਆਚਰਣ"
  },
  "Use respectful, age-appropriate language.": {
    en: "Use respectful, age-appropriate language.",
    pa: "ਸਨਮਾਨਜਨਕ, ਉਮਰ-ਅਨੁਕੂਲ ਭਾਸ਼ਾ ਦੀ ਵਰਤੋਂ ਕਰੋ।"
  },
  "Avoid isolated one-to-one contact unless the programme has approved safeguards.": {
    en: "Avoid isolated one-to-one contact unless the programme has approved safeguards.",
    pa: "ਅਲੱਗ-ਥਲੱਗ ਇੱਕ-ਨਾਲ-ਇੱਕ ਸੰਪਰਕ ਤੋਂ ਬਚੋ ਜਦੋਂ ਤੱਕ ਪ੍ਰੋਗਰਾਮ ਨੇ ਸੁਰੱਖਿਆ ਨੂੰ ਮਨਜ਼ੂਰੀ ਨਹੀਂ ਦਿੱਤੀ ਹੈ।"
  },
  "Do not exchange sexual messages or images with a child.": {
    en: "Do not exchange sexual messages or images with a child.",
    pa: "ਬੱਚੇ ਨਾਲ ਜਿਨਸੀ ਸੰਦੇਸ਼ਾਂ ਜਾਂ ਚਿੱਤਰਾਂ ਦਾ ਆਦਾਨ-ਪ੍ਰਦਾਨ ਨਾ ਕਰੋ।"
  },
  "Do not use programme access to form a personal or exploitative relationship.": {
    en: "Do not use programme access to form a personal or exploitative relationship.",
    pa: "ਨਿੱਜੀ ਜਾਂ ਸ਼ੋਸ਼ਣਕਾਰੀ ਰਿਸ਼ਤਾ ਬਣਾਉਣ ਲਈ ਪ੍ਰੋਗਰਾਮ ਪਹੁੰਚ ਦੀ ਵਰਤੋਂ ਨਾ ਕਰੋ।"
  },
  "Do not give secret gifts, money or favours.": {
    en: "Do not give secret gifts, money or favours.",
    pa: "ਗੁਪਤ ਤੋਹਫ਼ੇ, ਪੈਸੇ ਜਾਂ ਅਹਿਸਾਨ ਨਾ ਦਿਓ।"
  },
  "Use approved consent, attendance, transport and photography procedures.": {
    en: "Use approved consent, attendance, transport and photography procedures.",
    pa: "ਪ੍ਰਵਾਨਿਤ ਸਹਿਮਤੀ, ਹਾਜ਼ਰੀ, ਆਵਾਜਾਈ ਅਤੇ ਫੋਟੋਗ੍ਰਾਫੀ ਪ੍ਰਕਿਰਿਆਵਾਂ ਦੀ ਵਰਤੋਂ ਕਰੋ।"
  },
  "Report without delay": {
    en: "Report without delay",
    pa: "ਬਿਨਾਂ ਦੇਰੀ ਰਿਪੋਰਟ ਕਰੋ"
  },
  "Section 19 of POCSO requires a person who knows or apprehends that a POCSO offence will occur or has occurred to report it to the Special Juvenile Police Unit or local police. Informing Punjabi Samvad does not replace that legal report. Staff must also alert the Safeguarding Focal Person so the organisation can protect the child and preserve records. Staff must not investigate the alleged offence or confront the alleged offender.": {
    en: "Section 19 of POCSO requires a person who knows or apprehends that a POCSO offence will occur or has occurred to report it to the Special Juvenile Police Unit or local police. Informing Punjabi Samvad does not replace that legal report. Staff must also alert the Safeguarding Focal Person so the organisation can protect the child and preserve records. Staff must not investigate the alleged offence or confront the alleged offender.",
    pa: "POCSO ਦੀ ਧਾਰਾ 19 ਦੇ ਤਹਿਤ ਇੱਕ ਵਿਅਕਤੀ ਜੋ ਜਾਣਦਾ ਹੈ ਜਾਂ ਸਮਝਦਾ ਹੈ ਕਿ POCSO ਅਪਰਾਧ ਹੋਵੇਗਾ ਜਾਂ ਹੋਇਆ ਹੈ, ਨੂੰ ਵਿਸ਼ੇਸ਼ ਜੁਵੇਨਾਈਲ ਪੁਲਿਸ ਯੂਨਿਟ ਜਾਂ ਸਥਾਨਕ ਪੁਲਿਸ ਨੂੰ ਰਿਪੋਰਟ ਕਰਨ ਦੀ ਲੋੜ ਹੈ। ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੂੰ ਸੂਚਿਤ ਕਰਨਾ ਉਸ ਕਾਨੂੰਨੀ ਰਿਪੋਰਟ ਦੀ ਥਾਂ ਨਹੀਂ ਲੈਂਦਾ। ਸਟਾਫ ਨੂੰ ਸੇਫਗਾਰਡਿੰਗ ਫੋਕਲ ਪਰਸਨ ਨੂੰ ਵੀ ਸੁਚੇਤ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ ਤਾਂ ਜੋ ਸੰਸਥਾ ਬੱਚੇ ਦੀ ਰੱਖਿਆ ਕਰ ਸਕੇ ਅਤੇ ਰਿਕਾਰਡਾਂ ਨੂੰ ਸੁਰੱਖਿਅਤ ਰੱਖ ਸਕੇ। ਸਟਾਫ ਨੂੰ ਕਥਿਤ ਅਪਰਾਧ ਦੀ ਜਾਂਚ ਨਹੀਂ ਕਰਨੀ ਚਾਹੀਦੀ ਜਾਂ ਕਥਿਤ ਅਪਰਾਧੀ ਦਾ ਸਾਹਮਣਾ ਨਹੀਂ ਕਰਨਾ ਚਾਹੀਦਾ।"
  },
  "Child-centred response": {
    en: "Child-centred response",
    pa: "ਬਾਲ-ਕੇਂਦਰਿਤ ਪ੍ਰਤੀਕਿਰਿਆ"
  },
  "Listen without pressing for details. Record the child's words, explain the next safety step in language the child understands, and share information only with people responsible for protection or legal reporting. Do not promise secrecy.": {
    en: "Listen without pressing for details. Record the child's words, explain the next safety step in language the child understands, and share information only with people responsible for protection or legal reporting. Do not promise secrecy.",
    pa: "ਵੇਰਵਿਆਂ ਲਈ ਦਬਾਅ ਪਾਏ ਬਿਨਾਂ ਸੁਣੋ। ਬੱਚੇ ਦੇ ਸ਼ਬਦਾਂ ਨੂੰ ਰਿਕਾਰਡ ਕਰੋ, ਬੱਚੇ ਦੀ ਸਮਝ ਵਿੱਚ ਆਉਣ ਵਾਲੀ ਭਾਸ਼ਾ ਵਿੱਚ ਅਗਲਾ ਸੁਰੱਖਿਆ ਕਦਮ ਸਮਝਾਓ, ਅਤੇ ਜਾਣਕਾਰੀ ਸਿਰਫ ਸੁਰੱਖਿਆ ਜਾਂ ਕਾਨੂੰਨੀ ਰਿਪੋਰਟਿੰਗ ਲਈ ਜ਼ਿੰਮੇਵਾਰ ਲੋਕਾਂ ਨਾਲ ਸਾਂਝੀ ਕਰੋ। ਗੁਪਤਤਾ ਦਾ ਵਾਅਦਾ ਨਾ ਕਰੋ।"
  },
  "Images and identity": {
    en: "Images and identity",
    pa: "ਚਿੱਤਰ ਅਤੇ ਪਛਾਣ"
  },
  "Obtain the required parent or guardian consent and the child's assent where the child can give it. Do not publish content that identifies a child connected to an offence, exposes sensitive information or creates a safety risk.": {
    en: "Obtain the required parent or guardian consent and the child's assent where the child can give it. Do not publish content that identifies a child connected to an offence, exposes sensitive information or creates a safety risk.",
    pa: "ਲੋੜੀਂਦੇ ਮਾਤਾ-ਪਿਤਾ ਜਾਂ ਸਰਪ੍ਰਸਤ ਦੀ ਸਹਿਮਤੀ ਪ੍ਰਾਪਤ ਕਰੋ ਅਤੇ ਜਿੱਥੇ ਬੱਚਾ ਦੇ ਸਕਦਾ ਹੈ ਉੱਥੇ ਬੱਚੇ ਦੀ ਸਹਿਮਤੀ ਪ੍ਰਾਪਤ ਕਰੋ। ਅਜਿਹੀ ਸਮੱਗਰੀ ਪ੍ਰਕਾਸ਼ਿਤ ਨਾ ਕਰੋ ਜੋ ਕਿਸੇ ਅਪਰਾਧ ਨਾਲ ਜੁੜੇ ਬੱਚੇ ਦੀ ਪਛਾਣ ਕਰਦੀ ਹੋਵੇ, ਸੰਵੇਦਨਸ਼ੀਲ ਜਾਣਕਾਰੀ ਦਾ ਖੁਲਾਸਾ ਕਰਦੀ ਹੋਵੇ ਜਾਂ ਸੁਰੱਖਿਆ ਜੋਖਮ ਪੈਦਾ ਕਰਦੀ ਹੋਵੇ।"
  },
  "Residential care": {
    en: "Residential care",
    pa: "ਰਿਹਾਇਸ਼ੀ ਦੇਖਭਾਲ"
  },
  "Punjabi Samvad does not present itself as a child care institution. If it starts an institution that houses children in need of care and protection or children in conflict with law, it must complete the registration required by section 41 of the Juvenile Justice Act before operating that service.": {
    en: "Punjabi Samvad does not present itself as a child care institution. If it starts an institution that houses children in need of care and protection or children in conflict with law, it must complete the registration required by section 41 of the Juvenile Justice Act before operating that service.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਆਪਣੇ ਆਪ ਨੂੰ ਬਾਲ ਸੰਭਾਲ ਸੰਸਥਾ ਵਜੋਂ ਪੇਸ਼ ਨਹੀਂ ਕਰਦਾ। ਜੇਕਰ ਇਹ ਅਜਿਹੀ ਸੰਸਥਾ ਸ਼ੁਰੂ ਕਰਦੀ ਹੈ ਜਿਸ ਵਿੱਚ ਦੇਖਭਾਲ ਅਤੇ ਸੁਰੱਖਿਆ ਦੀ ਲੋੜ ਵਾਲੇ ਬੱਚੇ ਜਾਂ ਕਾਨੂੰਨ ਨਾਲ ਟਕਰਾਅ ਵਾਲੇ ਬੱਚੇ ਰਹਿੰਦੇ ਹਨ, ਤਾਂ ਇਸ ਸੇਵਾ ਨੂੰ ਚਲਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਇਸਨੂੰ ਜੁਵੇਨਾਈਲ ਜਸਟਿਸ ਐਕਟ ਦੀ ਧਾਰਾ 41 ਦੁਆਰਾ ਲੋੜੀਂਦੀ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਪੂਰੀ ਕਰਨੀ ਪਵੇਗੀ।"
  },
  "Emergency support": {
    en: "Emergency support",
    pa: "ਐਮਰਜੈਂਸੀ ਸਹਾਇਤਾ"
  },
  "Call local police or the Special Juvenile Police Unit for a POCSO report. Child Helpline 1098 and emergency number 112 also connect children in crisis to public support.": {
    en: "Call local police or the Special Juvenile Police Unit for a POCSO report. Child Helpline 1098 and emergency number 112 also connect children in crisis to public support.",
    pa: "POCSO ਰਿਪੋਰਟ ਲਈ ਸਥਾਨਕ ਪੁਲਿਸ ਜਾਂ ਸਪੈਸ਼ਲ ਜੁਵੇਨਾਈਲ ਪੁਲਿਸ ਯੂਨਿਟ ਨੂੰ ਕਾਲ ਕਰੋ। ਚਾਈਲਡ ਹੈਲਪਲਾਈਨ 1098 ਅਤੇ ਐਮਰਜੈਂਸੀ ਨੰਬਰ 112 ਵੀ ਸੰਕਟ ਵਿੱਚ ਬੱਚਿਆਂ ਨੂੰ ਜਨਤਕ ਸਹਾਇਤਾ ਨਾਲ ਜੋੜਦੇ ਹਨ।"
  },
  "POCSO Act, section 19 reporting duty": {
    en: "POCSO Act, section 19 reporting duty",
    pa: "POCSO ਐਕਟ, ਧਾਰਾ 19 ਰਿਪੋਰਟਿੰਗ ਡਿਊਟੀ"
  },
  "Juvenile Justice Act, section 41": {
    en: "Juvenile Justice Act, section 41",
    pa: "ਜੁਵੇਨਾਈਲ ਜਸਟਿਸ ਐਕਟ, ਧਾਰਾ 41"
  },
  "Government Child Helpline 1098": {
    en: "Government Child Helpline 1098",
    pa: "ਸਰਕਾਰੀ ਚਾਈਲਡ ਹੈਲਪਲਾਈਨ 1098"
  },
  "Safeguarding of Adults and Vulnerable Persons Policy": {
    en: "Safeguarding of Adults and Vulnerable Persons Policy",
    pa: "ਬਾਲਗਾਂ ਅਤੇ ਕਮਜ਼ੋਰ ਵਿਅਕਤੀਆਂ ਦੀ ਸੁਰੱਖਿਆ ਨੀਤੀ"
  },
  "Adult safeguarding": {
    en: "Adult safeguarding",
    pa: "ਬਾਲਗ ਭਾਗੀਦਾਰਾਂ ਦੀ ਸੁਰੱਖਿਆ"
  },
  "Protects adult participants from exploitation, abuse and misuse of power.": {
    en: "Protects adult participants from exploitation, abuse and misuse of power.",
    pa: "ਬਾਲਗ ਭਾਗੀਦਾਰਾਂ ਨੂੰ ਸ਼ੋਸ਼ਣ, ਦੁਰਵਿਹਾਰ ਅਤੇ ਸੱਤਾ ਦੀ ਦੁਰਵਰਤੋਂ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ।"
  },
  "Safeguarding Focal Person and Programme Leads": {
    en: "Safeguarding Focal Person and Programme Leads",
    pa: "ਸੇਫਗਾਰਡਿੰਗ ਫੋਕਲ ਪਰਸਨ ਅਤੇ ਪ੍ਰੋਗਰਾਮ ਲੀਡ"
  },
  "Standard": {
    en: "Standard",
    pa: "ਮਿਆਰੀ"
  },
  "Punjabi Samvad protects adult participants from exploitation, abuse, harassment and misuse of power. Staff must consider the added risk created by disability, illness, poverty, social exclusion or dependence on services.": {
    en: "Punjabi Samvad protects adult participants from exploitation, abuse, harassment and misuse of power. Staff must consider the added risk created by disability, illness, poverty, social exclusion or dependence on services.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਬਾਲਗ ਭਾਗੀਦਾਰਾਂ ਨੂੰ ਸ਼ੋਸ਼ਣ, ਦੁਰਵਿਹਾਰ, ਪ੍ਰੇਸ਼ਾਨੀ ਅਤੇ ਸੱਤਾ ਦੀ ਦੁਰਵਰਤੋਂ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ। ਸਟਾਫ ਨੂੰ ਅਪੰਗਤਾ, ਬਿਮਾਰੀ, ਗਰੀਬੀ, ਸਮਾਜਿਕ ਬੇਦਖਲੀ ਜਾਂ ਸੇਵਾਵਾਂ 'ਤੇ ਨਿਰਭਰਤਾ ਦੁਆਰਾ ਬਣਾਏ ਗਏ ਵਾਧੂ ਜੋਖਮ 'ਤੇ ਵਿਚਾਰ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ।"
  },
  "Seek sexual contact or favours through a programme relationship.": {
    en: "Seek sexual contact or favours through a programme relationship.",
    pa: "ਇੱਕ ਪ੍ਰੋਗਰਾਮ ਰਿਸ਼ਤੇ ਦੁਆਰਾ ਜਿਨਸੀ ਸੰਪਰਕ ਜਾਂ ਅਹਿਸਾਨ ਭਾਲੋ।"
  },
  "Exchange assistance, selection or access for personal benefit.": {
    en: "Exchange assistance, selection or access for personal benefit.",
    pa: "ਨਿੱਜੀ ਲਾਭ ਲਈ ਸਹਾਇਤਾ, ਚੋਣ ਜਾਂ ਪਹੁੰਚ ਦਾ ਵਟਾਂਦਰਾ ਕਰੋ।"
  },
  "Threaten, degrade or coerce a participant.": {
    en: "Threaten, degrade or coerce a participant.",
    pa: "ਇੱਕ ਭਾਗੀਦਾਰ ਨੂੰ ਧਮਕੀ ਦੇਣਾ, ਬੇਇੱਜ਼ਤ ਕਰਨਾ ਜਾਂ ਮਜਬੂਰ ਕਰਨਾ।"
  },
  "Exploit financial or social vulnerability.": {
    en: "Exploit financial or social vulnerability.",
    pa: "ਵਿੱਤੀ ਜਾਂ ਸਮਾਜਿਕ ਕਮਜ਼ੋਰੀ ਦਾ ਸ਼ੋਸ਼ਣ ਕਰੋ।"
  },
  "Misuse health, identity or safeguarding information.": {
    en: "Misuse health, identity or safeguarding information.",
    pa: "ਸਿਹਤ, ਪਛਾਣ ਜਾਂ ਸੁਰੱਖਿਆ ਜਾਣਕਾਰੀ ਦੀ ਦੁਰਵਰਤੋਂ ਕਰੋ।"
  },
  "Responding to a concern": {
    en: "Responding to a concern",
    pa: "ਕਿਸੇ ਚਿੰਤਾ ਦਾ ਜਵਾਬ ਦੇਣਾ"
  },
  "Address immediate safety needs, listen to the adult's wishes and explain any legal or safety limits on confidentiality. Report the concern to the Safeguarding Focal Person. Contact the relevant authority when law requires a report or when an immediate and serious risk demands action.": {
    en: "Address immediate safety needs, listen to the adult's wishes and explain any legal or safety limits on confidentiality. Report the concern to the Safeguarding Focal Person. Contact the relevant authority when law requires a report or when an immediate and serious risk demands action.",
    pa: "ਤੁਰੰਤ ਸੁਰੱਖਿਆ ਲੋੜਾਂ ਨੂੰ ਪੂਰਾ ਕਰੋ, ਬਾਲਗ ਦੀਆਂ ਇੱਛਾਵਾਂ ਨੂੰ ਸੁਣੋ ਅਤੇ ਗੁਪਤਤਾ 'ਤੇ ਕਿਸੇ ਵੀ ਕਾਨੂੰਨੀ ਜਾਂ ਸੁਰੱਖਿਆ ਸੀਮਾਵਾਂ ਦੀ ਵਿਆਖਿਆ ਕਰੋ। ਸੇਫਗਾਰਡਿੰਗ ਫੋਕਲ ਪਰਸਨ ਨੂੰ ਚਿੰਤਾ ਦੀ ਰਿਪੋਰਟ ਕਰੋ। ਜਦੋਂ ਕਾਨੂੰਨ ਨੂੰ ਰਿਪੋਰਟ ਦੀ ਲੋੜ ਹੋਵੇ ਜਾਂ ਜਦੋਂ ਤੁਰੰਤ ਅਤੇ ਗੰਭੀਰ ਜੋਖਮ ਕਾਰਵਾਈ ਦੀ ਮੰਗ ਕਰਦਾ ਹੋਵੇ ਤਾਂ ਸੰਬੰਧਿਤ ਅਥਾਰਟੀ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।"
  },
  "Human Resources and Equal Opportunity Policy": {
    en: "Human Resources and Equal Opportunity Policy",
    pa: "ਮਨੁੱਖੀ ਵਸੀਲੇ ਅਤੇ ਬਰਾਬਰ ਮੌਕਾ ਨੀਤੀ"
  },
  "Human resources and equal opportunity": {
    en: "Human resources and equal opportunity",
    pa: "ਮਨੁੱਖੀ ਸਰੋਤ ਅਤੇ ਸਮਾਨ ਮੌਕੇ"
  },
  "Sets fair recruitment, employment and workplace standards.": {
    en: "Sets fair recruitment, employment and workplace standards.",
    pa: "ਨਿਰਪੱਖ ਭਰਤੀ, ਰੁਜ਼ਗਾਰ ਅਤੇ ਕੰਮ ਵਾਲੀ ਥਾਂ ਦੇ ਮਾਪਦੰਡ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ।"
  },
  "President and HR Responsible Person": {
    en: "President and HR Responsible Person",
    pa: "ਪ੍ਰਧਾਨ ਅਤੇ HR ਜ਼ਿੰਮੇਵਾਰ ਵਿਅਕਤੀ"
  },
  "Employment standard": {
    en: "Employment standard",
    pa: "ਰੁਜ਼ਗਾਰ ਦਾ ਮਿਆਰ"
  },
  "Punjabi Samvad bases recruitment and work decisions on role requirements, competence, conduct and performance. The organisation does not permit unlawful discrimination or retaliation.": {
    en: "Punjabi Samvad bases recruitment and work decisions on role requirements, competence, conduct and performance. The organisation does not permit unlawful discrimination or retaliation.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਭਰਤੀ ਅਤੇ ਕੰਮ ਦੇ ਫੈਸਲਿਆਂ ਨੂੰ ਭੂਮਿਕਾ ਦੀਆਂ ਲੋੜਾਂ, ਯੋਗਤਾ, ਆਚਰਣ ਅਤੇ ਪ੍ਰਦਰਸ਼ਨ 'ਤੇ ਅਧਾਰਤ ਕਰਦਾ ਹੈ। ਸੰਸਥਾ ਗੈਰਕਾਨੂੰਨੀ ਵਿਤਕਰੇ ਜਾਂ ਬਦਲਾਖੋਰੀ ਦੀ ਇਜਾਜ਼ਤ ਨਹੀਂ ਦਿੰਦੀ।"
  },
  "Required practices": {
    en: "Required practices",
    pa: "ਲੋੜੀਂਦੇ ਅਭਿਆਸ"
  },
  "Issue clear appointment or engagement terms.": {
    en: "Issue clear appointment or engagement terms.",
    pa: "ਨਿਯੁਕਤੀ ਜਾਂ ਰੁਝੇਵਿਆਂ ਦੀਆਂ ਸਪੱਸ਼ਟ ਸ਼ਰਤਾਂ ਜਾਰੀ ਕਰੋ।"
  },
  "Define duties, supervision and reporting lines.": {
    en: "Define duties, supervision and reporting lines.",
    pa: "ਡਿਊਟੀਆਂ, ਨਿਗਰਾਨੀ ਅਤੇ ਰਿਪੋਰਟਿੰਗ ਲਾਈਨਾਂ ਨੂੰ ਪਰਿਭਾਸ਼ਿਤ ਕਰੋ।"
  },
  "Maintain attendance, leave and compensation records.": {
    en: "Maintain attendance, leave and compensation records.",
    pa: "ਹਾਜ਼ਰੀ, ਛੁੱਟੀ ਅਤੇ ਮੁਆਵਜ਼ੇ ਦੇ ਰਿਕਾਰਡ ਬਣਾਈ ਰੱਖੋ।"
  },
  "Provide a grievance and disciplinary process.": {
    en: "Provide a grievance and disciplinary process.",
    pa: "ਇੱਕ ਸ਼ਿਕਾਇਤ ਅਤੇ ਅਨੁਸ਼ਾਸਨੀ ਪ੍ਰਕਿਰਿਆ ਪ੍ਰਦਾਨ ਕਰੋ।"
  },
  "Apply wage, social-security, safety and working-condition requirements that cover the role.": {
    en: "Apply wage, social-security, safety and working-condition requirements that cover the role.",
    pa: "ਉਜਰਤ, ਸਮਾਜਿਕ ਸੁਰੱਖਿਆ, ਸੁਰੱਖਿਆ ਅਤੇ ਕੰਮ ਕਰਨ ਦੀਆਂ ਸਥਿਤੀਆਂ ਦੀਆਂ ਲੋੜਾਂ ਨੂੰ ਲਾਗੂ ਕਰੋ ਜੋ ਭੂਮਿਕਾ ਨੂੰ ਕਵਰ ਕਰਦੀਆਂ ਹਨ।"
  },
  "Record separation decisions and return organisational property.": {
    en: "Record separation decisions and return organisational property.",
    pa: "ਵਿਛੋੜੇ ਦੇ ਫੈਸਲਿਆਂ ਨੂੰ ਰਿਕਾਰਡ ਕਰੋ ਅਤੇ ਸੰਗਠਨਾਤਮਕ ਜਾਇਦਾਦ ਵਾਪਸ ਕਰੋ।"
  },
  "Labour law": {
    en: "Labour law",
    pa: "ਲੇਬਰ ਕਾਨੂੰਨ"
  },
  "India brought the four labour codes into force on 21 November 2025. Punjabi Samvad reviews the codes, applicable rules and state requirements against its workforce, role types and work locations. The organisation seeks professional advice when a threshold or worker classification is unclear.": {
    en: "India brought the four labour codes into force on 21 November 2025. Punjabi Samvad reviews the codes, applicable rules and state requirements against its workforce, role types and work locations. The organisation seeks professional advice when a threshold or worker classification is unclear.",
    pa: "ਭਾਰਤ ਨੇ 21 ਨਵੰਬਰ 2025 ਨੂੰ ਚਾਰ ਕਿਰਤ ਕੋਡ ਲਾਗੂ ਕੀਤੇ। ਪੰਜਾਬੀ ਸੰਵਾਦ ਆਪਣੇ ਕਰਮਚਾਰੀਆਂ, ਭੂਮਿਕਾ ਦੀਆਂ ਕਿਸਮਾਂ ਅਤੇ ਕੰਮ ਦੇ ਸਥਾਨਾਂ ਦੇ ਵਿਰੁੱਧ ਕੋਡ, ਲਾਗੂ ਨਿਯਮਾਂ ਅਤੇ ਰਾਜ ਦੀਆਂ ਲੋੜਾਂ ਦੀ ਸਮੀਖਿਆ ਕਰਦਾ ਹੈ। ਜਦੋਂ ਕੋਈ ਸੀਮਾ ਜਾਂ ਕਰਮਚਾਰੀ ਵਰਗੀਕਰਨ ਅਸਪਸ਼ਟ ਹੁੰਦਾ ਹੈ ਤਾਂ ਸੰਸਥਾ ਪੇਸ਼ੇਵਰ ਸਲਾਹ ਲੈਂਦੀ ਹੈ।"
  },
  "Ministry of Labour: implementation of four labour codes": {
    en: "Ministry of Labour: implementation of four labour codes",
    pa: "ਕਿਰਤ ਮੰਤਰਾਲਾ: ਚਾਰ ਲੇਬਰ ਕੋਡਾਂ ਨੂੰ ਲਾਗੂ ਕਰਨਾ"
  },
  "Grievance and Whistleblower Policy": {
    en: "Grievance and Whistleblower Policy",
    pa: "ਸ਼ਿਕਾਇਤ ਅਤੇ ਵ੍ਹਿਸਲਬਲੋਅਰ ਨੀਤੀ"
  },
  "Grievance and whistleblower": {
    en: "Grievance and whistleblower",
    pa: "ਸ਼ਿਕਾਇਤ ਅਤੇ ਗੜਬੜ ਦੀ ਸੂਚਨਾ ਦੇਣ ਸੰਬੰਧੀ ਨੀਤੀ"
  },
  "Provides a route to report misconduct, safety concerns and workplace grievances.": {
    en: "Provides a route to report misconduct, safety concerns and workplace grievances.",
    pa: "ਦੁਰਵਿਹਾਰ, ਸੁਰੱਖਿਆ ਚਿੰਤਾਵਾਂ ਅਤੇ ਕੰਮ ਵਾਲੀ ਥਾਂ ਦੀਆਂ ਸ਼ਿਕਾਇਤਾਂ ਦੀ ਰਿਪੋਰਟ ਕਰਨ ਲਈ ਇੱਕ ਰਸਤਾ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।"
  },
  "Concerns covered": {
    en: "Concerns covered",
    pa: "ਚਿੰਤਾਵਾਂ ਕਵਰ ਕੀਤੀਆਂ ਗਈਆਂ"
  },
  "Fraud or financial misuse.": {
    en: "Fraud or financial misuse.",
    pa: "ਧੋਖਾਧੜੀ ਜਾਂ ਵਿੱਤੀ ਦੁਰਵਰਤੋਂ।"
  },
  "Safeguarding failures.": {
    en: "Safeguarding failures.",
    pa: "ਸੁਰੱਖਿਆ ਅਸਫਲਤਾਵਾਂ।"
  },
  "Serious policy or legal breaches.": {
    en: "Serious policy or legal breaches.",
    pa: "ਗੰਭੀਰ ਨੀਤੀਗਤ ਜਾਂ ਕਾਨੂੰਨੀ ਉਲੰਘਣਾਵਾਂ।"
  },
  "Falsified records or concealed risks.": {
    en: "Falsified records or concealed risks.",
    pa: "ਝੂਠੇ ਰਿਕਾਰਡ ਜਾਂ ਲੁਕਵੇਂ ਜੋਖਮ।"
  },
  "Workplace decisions that require formal review.": {
    en: "Workplace decisions that require formal review.",
    pa: "ਕੰਮ ਵਾਲੀ ਥਾਂ ਦੇ ਫੈਸਲੇ ਜਿਨ੍ਹਾਂ ਲਈ ਰਸਮੀ ਸਮੀਖਿਆ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।"
  },
  "How to report": {
    en: "How to report",
    pa: "ਰਿਪੋਰਟ ਕਿਵੇਂ ਕਰੀਏ"
  },
  "Handling": {
    en: "Handling",
    pa: "ਪ੍ਰਬੰਧਨ"
  },
  "Punjabi Samvad acknowledges a report within three working days where contact details are available. It assigns a person who has no conflict with the allegation, protects records, considers immediate safety steps and tells the reporter how the matter will proceed. Statutory complaints, including POSH and POCSO matters, follow their legal routes and timelines.": {
    en: "Punjabi Samvad acknowledges a report within three working days where contact details are available. It assigns a person who has no conflict with the allegation, protects records, considers immediate safety steps and tells the reporter how the matter will proceed. Statutory complaints, including POSH and POCSO matters, follow their legal routes and timelines.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਤਿੰਨ ਕੰਮਕਾਜੀ ਦਿਨਾਂ ਦੇ ਅੰਦਰ ਇੱਕ ਰਿਪੋਰਟ ਨੂੰ ਸਵੀਕਾਰ ਕਰਦਾ ਹੈ ਜਿੱਥੇ ਸੰਪਰਕ ਵੇਰਵੇ ਉਪਲਬਧ ਹਨ। ਇਹ ਇੱਕ ਵਿਅਕਤੀ ਨੂੰ ਸੌਂਪਦਾ ਹੈ ਜਿਸਦਾ ਦੋਸ਼ ਨਾਲ ਕੋਈ ਟਕਰਾਅ ਨਹੀਂ ਹੈ, ਰਿਕਾਰਡਾਂ ਦੀ ਰੱਖਿਆ ਕਰਦਾ ਹੈ, ਤੁਰੰਤ ਸੁਰੱਖਿਆ ਕਦਮਾਂ 'ਤੇ ਵਿਚਾਰ ਕਰਦਾ ਹੈ ਅਤੇ ਰਿਪੋਰਟਰ ਨੂੰ ਦੱਸਦਾ ਹੈ ਕਿ ਮਾਮਲਾ ਕਿਵੇਂ ਅੱਗੇ ਵਧੇਗਾ। POSH ਅਤੇ POCSO ਮਾਮਲਿਆਂ ਸਮੇਤ ਵਿਧਾਨਕ ਸ਼ਿਕਾਇਤਾਂ, ਉਹਨਾਂ ਦੇ ਕਾਨੂੰਨੀ ਰਸਤਿਆਂ ਅਤੇ ਸਮਾਂ-ਸੀਮਾਵਾਂ ਦੀ ਪਾਲਣਾ ਕਰਦੀਆਂ ਹਨ।"
  },
  "Protection and fairness": {
    en: "Protection and fairness",
    pa: "ਸੁਰੱਖਿਆ ਅਤੇ ਨਿਰਪੱਖਤਾ"
  },
  "Punjabi Samvad does not retaliate against a person who raises a concern in good faith or helps with a review. A finding that evidence did not substantiate a concern does not make the report malicious. The organisation may act when evidence shows that a person fabricated a complaint or document with intent to deceive.": {
    en: "Punjabi Samvad does not retaliate against a person who raises a concern in good faith or helps with a review. A finding that evidence did not substantiate a concern does not make the report malicious. The organisation may act when evidence shows that a person fabricated a complaint or document with intent to deceive.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਉਸ ਵਿਅਕਤੀ ਵਿਰੁੱਧ ਬਦਲਾ ਨਹੀਂ ਲੈਂਦਾ ਜੋ ਚੰਗੀ ਭਾਵਨਾ ਨਾਲ ਚਿੰਤਾ ਉਠਾਉਂਦਾ ਹੈ ਜਾਂ ਸਮੀਖਿਆ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ। ਇਹ ਪਤਾ ਲੱਗਣਾ ਕਿ ਸਬੂਤ ਨੇ ਚਿੰਤਾ ਨੂੰ ਸਾਬਤ ਨਹੀਂ ਕੀਤਾ, ਰਿਪੋਰਟ ਨੂੰ ਨੁਕਸਾਨਦੇਹ ਨਹੀਂ ਬਣਾਉਂਦਾ। ਸੰਸਥਾ ਉਦੋਂ ਕਾਰਵਾਈ ਕਰ ਸਕਦੀ ਹੈ ਜਦੋਂ ਸਬੂਤ ਦਿਖਾਉਂਦਾ ਹੈ ਕਿ ਕਿਸੇ ਵਿਅਕਤੀ ਨੇ ਧੋਖਾ ਦੇਣ ਦੇ ਇਰਾਦੇ ਨਾਲ ਕੋਈ ਸ਼ਿਕਾਇਤ ਜਾਂ ਦਸਤਾਵੇਜ਼ ਬਣਾਇਆ ਹੈ।"
  },
  "Data Protection and Privacy Policy": {
    en: "Data Protection and Privacy Policy",
    pa: "ਡਾਟਾ ਸੁਰੱਖਿਆ ਅਤੇ ਗੋਪਨੀਯਤਾ ਨੀਤੀ"
  },
  "Data protection and privacy": {
    en: "Data protection and privacy",
    pa: "ਡਾਟਾ ਸੁਰੱਖਿਆ ਅਤੇ ਨਿੱਜਤਾ"
  },
  "Controls how Punjabi Samvad collects, uses, protects and deletes personal data.": {
    en: "Controls how Punjabi Samvad collects, uses, protects and deletes personal data.",
    pa: "ਨਿਯੰਤਰਿਤ ਕਰਦਾ ਹੈ ਕਿ ਪੰਜਾਬੀ ਸੰਵਾਦ ਨਿੱਜੀ ਡੇਟਾ ਕਿਵੇਂ ਇਕੱਠਾ ਕਰਦਾ ਹੈ, ਵਰਤਦਾ ਹੈ, ਸੁਰੱਖਿਅਤ ਕਰਦਾ ਹੈ ਅਤੇ ਮਿਟਾਉਂਦਾ ਹੈ।"
  },
  "Data covered": {
    en: "Data covered",
    pa: "ਕਵਰ ਕੀਤਾ ਡੇਟਾ"
  },
  "Punjabi Samvad handles personal data about programme participants, children and parents, staff, volunteers, donors, partners and people who contact the organisation.": {
    en: "Punjabi Samvad handles personal data about programme participants, children and parents, staff, volunteers, donors, partners and people who contact the organisation.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਪ੍ਰੋਗਰਾਮ ਦੇ ਭਾਗੀਦਾਰਾਂ, ਬੱਚਿਆਂ ਅਤੇ ਮਾਪਿਆਂ, ਸਟਾਫ, ਵਲੰਟੀਅਰਾਂ, ਦਾਨੀਆਂ, ਭਾਈਵਾਲਾਂ ਅਤੇ ਸੰਸਥਾ ਨਾਲ ਸੰਪਰਕ ਕਰਨ ਵਾਲੇ ਲੋਕਾਂ ਬਾਰੇ ਨਿੱਜੀ ਡੇਟਾ ਨੂੰ ਸੰਭਾਲਦਾ ਹੈ।"
  },
  "Rules for handling data": {
    en: "Rules for handling data",
    pa: "ਡੇਟਾ ਨੂੰ ਸੰਭਾਲਣ ਦੇ ਨਿਯਮ"
  },
  "State the purpose before or when collecting data.": {
    en: "State the purpose before or when collecting data.",
    pa: "ਡੇਟਾ ਇਕੱਠਾ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਜਾਂ ਕਰਦੇ ਸਮੇਂ ਉਦੇਸ਼ ਦੱਸੋ।"
  },
  "Collect only the data needed for that purpose.": {
    en: "Collect only the data needed for that purpose.",
    pa: "ਸਿਰਫ਼ ਉਸ ਮਕਸਦ ਲਈ ਲੋੜੀਂਦਾ ਡੇਟਾ ਇਕੱਠਾ ਕਰੋ।"
  },
  "Use data for the stated purpose or another lawful purpose.": {
    en: "Use data for the stated purpose or another lawful purpose.",
    pa: "ਦੱਸੇ ਗਏ ਉਦੇਸ਼ ਜਾਂ ਕਿਸੇ ਹੋਰ ਕਾਨੂੰਨੀ ਉਦੇਸ਼ ਲਈ ਡੇਟਾ ਦੀ ਵਰਤੋਂ ਕਰੋ।"
  },
  "Limit access to authorised roles.": {
    en: "Limit access to authorised roles.",
    pa: "ਅਧਿਕਾਰਤ ਭੂਮਿਕਾਵਾਂ ਤੱਕ ਪਹੁੰਚ ਸੀਮਤ ਕਰੋ।"
  },
  "Correct relevant errors when a person raises them.": {
    en: "Correct relevant errors when a person raises them.",
    pa: "ਜਦੋਂ ਕੋਈ ਵਿਅਕਤੀ ਉਹਨਾਂ ਨੂੰ ਉਠਾਉਂਦਾ ਹੈ ਤਾਂ ਸੰਬੰਧਿਤ ਗਲਤੀਆਂ ਨੂੰ ਠੀਕ ਕਰੋ।"
  },
  "Retain data for a legal, contractual or programme need, then delete or anonymise it.": {
    en: "Retain data for a legal, contractual or programme need, then delete or anonymise it.",
    pa: "ਕਾਨੂੰਨੀ, ਇਕਰਾਰਨਾਮੇ ਜਾਂ ਪ੍ਰੋਗਰਾਮ ਦੀ ਲੋੜ ਲਈ ਡੇਟਾ ਨੂੰ ਬਰਕਰਾਰ ਰੱਖੋ, ਫਿਰ ਇਸਨੂੰ ਮਿਟਾਓ ਜਾਂ ਅਗਿਆਤ ਕਰੋ।"
  },
  "Use safeguards suited to the sensitivity and risk.": {
    en: "Use safeguards suited to the sensitivity and risk.",
    pa: "ਸੰਵੇਦਨਸ਼ੀਲਤਾ ਅਤੇ ਜੋਖਮ ਦੇ ਅਨੁਕੂਲ ਸੁਰੱਖਿਆ ਉਪਾਵਾਂ ਦੀ ਵਰਤੋਂ ਕਰੋ।"
  },
  "High-risk information": {
    en: "High-risk information",
    pa: "ਉੱਚ-ਜੋਖਮ ਵਾਲੀ ਜਾਣਕਾਰੀ"
  },
  "Teams apply tighter access and sharing controls to children's data, health and mental-health information, HIV-related information, identity documents, complaints and safeguarding records. Staff must not place sensitive case details in public reports or personal messaging groups.": {
    en: "Teams apply tighter access and sharing controls to children's data, health and mental-health information, HIV-related information, identity documents, complaints and safeguarding records. Staff must not place sensitive case details in public reports or personal messaging groups.",
    pa: "ਟੀਮਾਂ ਬੱਚਿਆਂ ਦੇ ਡੇਟਾ, ਸਿਹਤ ਅਤੇ ਮਾਨਸਿਕ-ਸਿਹਤ ਜਾਣਕਾਰੀ, ਐੱਚਆਈਵੀ-ਸਬੰਧਤ ਜਾਣਕਾਰੀ, ਪਛਾਣ ਦਸਤਾਵੇਜ਼ਾਂ, ਸ਼ਿਕਾਇਤਾਂ ਅਤੇ ਸੁਰੱਖਿਆ ਰਿਕਾਰਡਾਂ 'ਤੇ ਸਖਤ ਪਹੁੰਚ ਅਤੇ ਸ਼ੇਅਰਿੰਗ ਨਿਯੰਤਰਣ ਲਾਗੂ ਕਰਦੀਆਂ ਹਨ। ਸਟਾਫ ਨੂੰ ਜਨਤਕ ਰਿਪੋਰਟਾਂ ਜਾਂ ਨਿੱਜੀ ਮੈਸੇਜਿੰਗ ਸਮੂਹਾਂ ਵਿੱਚ ਸੰਵੇਦਨਸ਼ੀਲ ਕੇਸ ਦੇ ਵੇਰਵੇ ਨਹੀਂ ਰੱਖਣੇ ਚਾਹੀਦੇ।"
  },
  "Children": {
    en: "Children",
    pa: "ਬੱਚੇ"
  },
  "Punjabi Samvad obtains parent or guardian authorisation and the child's assent where appropriate. It does not use children's data for targeted advertising or behavioural monitoring and does not process it in a way likely to harm the child.": {
    en: "Punjabi Samvad obtains parent or guardian authorisation and the child's assent where appropriate. It does not use children's data for targeted advertising or behavioural monitoring and does not process it in a way likely to harm the child.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਮਾਤਾ-ਪਿਤਾ ਜਾਂ ਸਰਪ੍ਰਸਤ ਦੀ ਇਜਾਜ਼ਤ ਅਤੇ ਜਿੱਥੇ ਢੁਕਵਾਂ ਹੋਵੇ, ਬੱਚੇ ਦੀ ਸਹਿਮਤੀ ਪ੍ਰਾਪਤ ਕਰਦਾ ਹੈ। ਇਹ ਬੱਚਿਆਂ ਦੇ ਡੇਟਾ ਦੀ ਵਰਤੋਂ ਨਿਸ਼ਾਨਾ ਇਸ਼ਤਿਹਾਰਬਾਜ਼ੀ ਜਾਂ ਵਿਹਾਰਕ ਨਿਗਰਾਨੀ ਲਈ ਨਹੀਂ ਕਰਦਾ ਅਤੇ ਇਸ ਨੂੰ ਇਸ ਤਰੀਕੇ ਨਾਲ ਪ੍ਰੋਸੈਸ ਨਹੀਂ ਕਰਦਾ ਜਿਸ ਨਾਲ ਬੱਚੇ ਨੂੰ ਨੁਕਸਾਨ ਪਹੁੰਚਣ ਦੀ ਸੰਭਾਵਨਾ ਹੋਵੇ।"
  },
  "Security incident": {
    en: "Security incident",
    pa: "ਸੁਰੱਖਿਆ ਘਟਨਾ"
  },
  "A person who discovers loss, unauthorised access, mistaken disclosure or another data compromise must alert the Privacy Responsible Person at once. Punjabi Samvad contains the incident, preserves facts, assesses affected people and makes any notice required by law.": {
    en: "A person who discovers loss, unauthorised access, mistaken disclosure or another data compromise must alert the Privacy Responsible Person at once. Punjabi Samvad contains the incident, preserves facts, assesses affected people and makes any notice required by law.",
    pa: "ਕੋਈ ਵਿਅਕਤੀ ਜੋ ਨੁਕਸਾਨ, ਅਣਅਧਿਕਾਰਤ ਪਹੁੰਚ, ਗਲਤੀ ਨਾਲ ਖੁਲਾਸਾ ਜਾਂ ਹੋਰ ਡੇਟਾ ਸਮਝੌਤੇ ਦੀ ਖੋਜ ਕਰਦਾ ਹੈ, ਨੂੰ ਤੁਰੰਤ ਗੋਪਨੀਯਤਾ ਲਈ ਜ਼ਿੰਮੇਵਾਰ ਵਿਅਕਤੀ ਨੂੰ ਸੁਚੇਤ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ। ਪੰਜਾਬੀ ਸੰਵਾਦ ਘਟਨਾ ਨੂੰ ਸ਼ਾਮਲ ਕਰਦਾ ਹੈ, ਤੱਥਾਂ ਨੂੰ ਸੁਰੱਖਿਅਤ ਰੱਖਦਾ ਹੈ, ਪ੍ਰਭਾਵਿਤ ਲੋਕਾਂ ਦਾ ਮੁਲਾਂਕਣ ਕਰਦਾ ਹੈ ਅਤੇ ਕਾਨੂੰਨ ਦੁਆਰਾ ਲੋੜੀਂਦਾ ਕੋਈ ਵੀ ਨੋਟਿਸ ਦਿੰਦਾ ਹੈ।"
  },
  "Current legal position": {
    en: "Current legal position",
    pa: "ਮੌਜੂਦਾ ਕਾਨੂੰਨੀ ਸਥਿਤੀ"
  },
  "The Digital Personal Data Protection Rules, 2025 use staggered commencement dates. Punjabi Samvad applies the safeguards in this policy as its current standard and will update procedures as the remaining provisions take effect.": {
    en: "The Digital Personal Data Protection Rules, 2025 use staggered commencement dates. Punjabi Samvad applies the safeguards in this policy as its current standard and will update procedures as the remaining provisions take effect.",
    pa: "ਡਿਜੀਟਲ ਪਰਸਨਲ ਡਾਟਾ ਪ੍ਰੋਟੈਕਸ਼ਨ ਨਿਯਮ, 2025 ਪੜਾਅਵਾਰ ਸ਼ੁਰੂਆਤੀ ਮਿਤੀਆਂ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਨ। ਪੰਜਾਬੀ ਸੰਵਾਦ ਇਸ ਨੀਤੀ ਵਿੱਚ ਸੁਰੱਖਿਆ ਉਪਾਵਾਂ ਨੂੰ ਆਪਣੇ ਮੌਜੂਦਾ ਮਿਆਰ ਵਜੋਂ ਲਾਗੂ ਕਰਦਾ ਹੈ ਅਤੇ ਬਾਕੀ ਵਿਵਸਥਾਵਾਂ ਲਾਗੂ ਹੋਣ 'ਤੇ ਪ੍ਰਕਿਰਿਆਵਾਂ ਨੂੰ ਅਪਡੇਟ ਕਰੇਗਾ।"
  },
  "Digital Personal Data Protection Act, 2023": {
    en: "Digital Personal Data Protection Act, 2023",
    pa: "ਡਿਜੀਟਲ ਪਰਸਨਲ ਡਾਟਾ ਪ੍ਰੋਟੈਕਸ਼ਨ ਐਕਟ, 2023"
  },
  "Digital Personal Data Protection Rules, 2025": {
    en: "Digital Personal Data Protection Rules, 2025",
    pa: "ਡਿਜੀਟਲ ਪਰਸਨਲ ਡਾਟਾ ਪ੍ਰੋਟੈਕਸ਼ਨ ਨਿਯਮ, 2025"
  },
  "Photography, Media and Informed Consent Policy": {
    en: "Photography, Media and Informed Consent Policy",
    pa: "ਫੋਟੋਗ੍ਰਾਫੀ, ਮੀਡੀਆ ਅਤੇ ਸੂਚਿਤ ਸਹਿਮਤੀ ਨੀਤੀ"
  },
  "Photography, media and consent": {
    en: "Photography, media and consent",
    pa: "ਫੋਟੋਗ੍ਰਾਫੀ, ਮੀਡੀਆ ਅਤੇ ਸਹਿਮਤੀ"
  },
  "Protects participants when Punjabi Samvad records or publishes images and stories.": {
    en: "Protects participants when Punjabi Samvad records or publishes images and stories.",
    pa: "ਜਦੋਂ ਪੰਜਾਬੀ ਸੰਵਾਦ ਤਸਵੀਰਾਂ ਅਤੇ ਕਹਾਣੀਆਂ ਨੂੰ ਰਿਕਾਰਡ ਜਾਂ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਦਾ ਹੈ ਤਾਂ ਭਾਗੀਦਾਰਾਂ ਦੀ ਰੱਖਿਆ ਕਰਦਾ ਹੈ।"
  },
  "Communications Lead and Programme Lead": {
    en: "Communications Lead and Programme Lead",
    pa: "ਸੰਚਾਰ ਲੀਡ ਅਤੇ ਪ੍ਰੋਗਰਾਮ ਲੀਡ"
  },
  "Consent": {
    en: "Consent",
    pa: "ਸਹਿਮਤੀ"
  },
  "Before recording an identifiable participant, the team explains the purpose, intended audience, publication channels and the person's choice to refuse. The team records consent in a form suited to the activity. For children, it obtains parent or guardian authorisation and seeks the child's assent when the child can give it.": {
    en: "Before recording an identifiable participant, the team explains the purpose, intended audience, publication channels and the person's choice to refuse. The team records consent in a form suited to the activity. For children, it obtains parent or guardian authorisation and seeks the child's assent when the child can give it.",
    pa: "ਪਛਾਣਯੋਗ ਭਾਗੀਦਾਰ ਨੂੰ ਰਿਕਾਰਡ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ, ਟੀਮ ਉਦੇਸ਼, ਇੱਛਤ ਦਰਸ਼ਕ, ਪ੍ਰਕਾਸ਼ਨ ਚੈਨਲਾਂ ਅਤੇ ਵਿਅਕਤੀ ਦੀ ਇਨਕਾਰ ਕਰਨ ਦੀ ਚੋਣ ਬਾਰੇ ਦੱਸਦੀ ਹੈ। ਟੀਮ ਸਰਗਰਮੀ ਦੇ ਅਨੁਕੂਲ ਰੂਪ ਵਿੱਚ ਸਹਿਮਤੀ ਰਿਕਾਰਡ ਕਰਦੀ ਹੈ। ਬੱਚਿਆਂ ਲਈ, ਇਹ ਮਾਪੇ ਜਾਂ ਸਰਪ੍ਰਸਤ ਦੀ ਇਜਾਜ਼ਤ ਪ੍ਰਾਪਤ ਕਰਦਾ ਹੈ ਅਤੇ ਜਦੋਂ ਬੱਚਾ ਦੇ ਸਕਦਾ ਹੈ ਤਾਂ ਉਸਦੀ ਸਹਿਮਤੀ ਲੈਂਦਾ ਹੈ।"
  },
  "Dignity and safety": {
    en: "Dignity and safety",
    pa: "ਸਨਮਾਨ ਅਤੇ ਸੁਰੱਖਿਆ"
  },
  "Do not stage or misrepresent a participant's experience.": {
    en: "Do not stage or misrepresent a participant's experience.",
    pa: "ਕਿਸੇ ਭਾਗੀਦਾਰ ਦੇ ਤਜ਼ਰਬੇ ਨੂੰ ਸਟੇਜ ਜਾਂ ਗਲਤ ਰੂਪ ਵਿੱਚ ਪੇਸ਼ ਨਾ ਕਰੋ।"
  },
  "Do not use degrading images or portray a person as helpless to raise funds.": {
    en: "Do not use degrading images or portray a person as helpless to raise funds.",
    pa: "ਫੰਡ ਇਕੱਠਾ ਕਰਨ ਲਈ ਅਪਮਾਨਜਨਕ ਤਸਵੀਰਾਂ ਦੀ ਵਰਤੋਂ ਨਾ ਕਰੋ ਜਾਂ ਕਿਸੇ ਵਿਅਕਤੀ ਨੂੰ ਬੇਵੱਸ ਵਜੋਂ ਪੇਸ਼ ਨਾ ਕਰੋ।"
  },
  "Do not reveal health, HIV, mental-health, violence or safeguarding information without a lawful basis and informed consent.": {
    en: "Do not reveal health, HIV, mental-health, violence or safeguarding information without a lawful basis and informed consent.",
    pa: "ਕਾਨੂੰਨੀ ਆਧਾਰ ਅਤੇ ਸੂਚਿਤ ਸਹਿਮਤੀ ਤੋਂ ਬਿਨਾਂ ਸਿਹਤ, ਐੱਚਆਈਵੀ, ਮਾਨਸਿਕ ਸਿਹਤ, ਹਿੰਸਾ ਜਾਂ ਸੁਰੱਖਿਆ ਜਾਣਕਾਰੀ ਦਾ ਖੁਲਾਸਾ ਨਾ ਕਰੋ।"
  },
  "Do not publish a protected person's identity or location when disclosure creates risk.": {
    en: "Do not publish a protected person's identity or location when disclosure creates risk.",
    pa: "ਜਦੋਂ ਖੁਲਾਸੇ ਨਾਲ ਜੋਖਮ ਪੈਦਾ ਹੁੰਦਾ ਹੈ ਤਾਂ ਕਿਸੇ ਸੁਰੱਖਿਅਤ ਵਿਅਕਤੀ ਦੀ ਪਛਾਣ ਜਾਂ ਸਥਾਨ ਪ੍ਰਕਾਸ਼ਿਤ ਨਾ ਕਰੋ।"
  },
  "Use minimum identifying detail in captions and filenames.": {
    en: "Use minimum identifying detail in captions and filenames.",
    pa: "ਕੈਪਸ਼ਨਾਂ ਅਤੇ ਫਾਈਲ ਨਾਮਾਂ ਵਿੱਚ ਘੱਟੋ-ਘੱਟ ਪਛਾਣ ਵੇਰਵਿਆਂ ਦੀ ਵਰਤੋਂ ਕਰੋ।"
  },
  "Choice and withdrawal": {
    en: "Choice and withdrawal",
    pa: "ਚੋਣ ਅਤੇ ਵਾਪਸੀ"
  },
  "A refusal does not affect programme access. A participant may ask Punjabi Samvad to stop future use. The organisation removes content it controls when feasible, but it may not be able to retrieve copies already printed, shared or published by another person.": {
    en: "A refusal does not affect programme access. A participant may ask Punjabi Samvad to stop future use. The organisation removes content it controls when feasible, but it may not be able to retrieve copies already printed, shared or published by another person.",
    pa: "ਇਨਕਾਰ ਪ੍ਰੋਗਰਾਮ ਪਹੁੰਚ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਨਹੀਂ ਕਰਦਾ। ਇੱਕ ਭਾਗੀਦਾਰ ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੂੰ ਭਵਿੱਖ ਵਿੱਚ ਵਰਤੋਂ ਰੋਕਣ ਲਈ ਕਹਿ ਸਕਦਾ ਹੈ। ਸੰਸਥਾ ਸੰਭਵ ਹੋਣ 'ਤੇ ਉਸ ਸਮੱਗਰੀ ਨੂੰ ਹਟਾ ਦਿੰਦੀ ਹੈ ਜਿਸ ਨੂੰ ਉਹ ਨਿਯੰਤਰਿਤ ਕਰਦੀ ਹੈ, ਪਰ ਇਹ ਕਿਸੇ ਹੋਰ ਵਿਅਕਤੀ ਦੁਆਰਾ ਪਹਿਲਾਂ ਤੋਂ ਛਾਪੀਆਂ, ਸਾਂਝੀਆਂ ਜਾਂ ਪ੍ਰਕਾਸ਼ਿਤ ਕੀਤੀਆਂ ਕਾਪੀਆਂ ਨੂੰ ਪ੍ਰਾਪਤ ਕਰਨ ਦੇ ਯੋਗ ਨਹੀਂ ਹੋ ਸਕਦੀ।"
  },
  "Storage": {
    en: "Storage",
    pa: "ਸਟੋਰੇਜ"
  },
  "The programme lead stores consent records with the media files, limits access and reviews whether continued use remains appropriate before reusing older material.": {
    en: "The programme lead stores consent records with the media files, limits access and reviews whether continued use remains appropriate before reusing older material.",
    pa: "ਪ੍ਰੋਗਰਾਮ ਲੀਡ ਮੀਡੀਆ ਫਾਈਲਾਂ ਦੇ ਨਾਲ ਸਹਿਮਤੀ ਰਿਕਾਰਡ ਸਟੋਰ ਕਰਦਾ ਹੈ, ਪਹੁੰਚ ਨੂੰ ਸੀਮਿਤ ਕਰਦਾ ਹੈ ਅਤੇ ਸਮੀਖਿਆ ਕਰਦਾ ਹੈ ਕਿ ਕੀ ਪੁਰਾਣੀ ਸਮੱਗਰੀ ਦੀ ਮੁੜ ਵਰਤੋਂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਨਿਰੰਤਰ ਵਰਤੋਂ ਉਚਿਤ ਰਹਿੰਦੀ ਹੈ।"
  },
  "Volunteer and Intern Policy": {
    en: "Volunteer and Intern Policy",
    pa: "ਵਲੰਟੀਅਰ ਅਤੇ ਇੰਟਰਨ ਨੀਤੀ"
  },
  "Volunteer and intern": {
    en: "Volunteer and intern",
    pa: "ਵਲੰਟੀਅਰ ਅਤੇ ਇੰਟਰਨ ਨੀਤੀ"
  },
  "Sets role, supervision and safeguarding requirements for volunteers and interns.": {
    en: "Sets role, supervision and safeguarding requirements for volunteers and interns.",
    pa: "ਵਲੰਟੀਅਰਾਂ ਅਤੇ ਇੰਟਰਨਜ਼ ਲਈ ਭੂਮਿਕਾ, ਨਿਗਰਾਨੀ ਅਤੇ ਸੁਰੱਖਿਆ ਲੋੜਾਂ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ।"
  },
  "Programme Lead and Supervisor": {
    en: "Programme Lead and Supervisor",
    pa: "ਪ੍ਰੋਗਰਾਮ ਲੀਡ ਅਤੇ ਸੁਪਰਵਾਈਜ਼ਰ"
  },
  "Before work starts": {
    en: "Before work starts",
    pa: "ਕੰਮ ਸ਼ੁਰੂ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ"
  },
  "Provide a written role and named supervisor.": {
    en: "Provide a written role and named supervisor.",
    pa: "ਇੱਕ ਲਿਖਤੀ ਭੂਮਿਕਾ ਅਤੇ ਨਾਮਜ਼ਦ ਸੁਪਰਵਾਈਜ਼ਰ ਪ੍ਰਦਾਨ ਕਰੋ।"
  },
  "Explain hours, location, expenses and permitted tasks.": {
    en: "Explain hours, location, expenses and permitted tasks.",
    pa: "ਘੰਟੇ, ਸਥਾਨ, ਖਰਚੇ ਅਤੇ ਪ੍ਰਵਾਨਿਤ ਕੰਮਾਂ ਦੀ ਵਿਆਖਿਆ ਕਰੋ।"
  },
  "Complete code of conduct, confidentiality and safeguarding orientation.": {
    en: "Complete code of conduct, confidentiality and safeguarding orientation.",
    pa: "ਆਚਰਣ ਕੋਡ, ਗੁਪਤਤਾ ਅਤੇ ਸੁਰੱਖਿਆ ਓਰੀਐਂਟੇਸ਼ਨ ਨੂੰ ਪੂਰਾ ਕਰੋ।"
  },
  "Use references or screening suited to contact with children or vulnerable participants.": {
    en: "Use references or screening suited to contact with children or vulnerable participants.",
    pa: "ਬੱਚਿਆਂ ਜਾਂ ਕਮਜ਼ੋਰ ਭਾਗੀਦਾਰਾਂ ਨਾਲ ਸੰਪਰਕ ਕਰਨ ਦੇ ਅਨੁਕੂਲ ਹਵਾਲਿਆਂ ਜਾਂ ਸਕ੍ਰੀਨਿੰਗ ਦੀ ਵਰਤੋਂ ਕਰੋ।"
  },
  "Explain reporting and emergency routes.": {
    en: "Explain reporting and emergency routes.",
    pa: "ਰਿਪੋਰਟਿੰਗ ਅਤੇ ਐਮਰਜੈਂਸੀ ਰੂਟਾਂ ਦੀ ਵਿਆਖਿਆ ਕਰੋ।"
  },
  "Boundaries": {
    en: "Boundaries",
    pa: "ਸੀਮਾਵਾਂ"
  },
  "Volunteers and interns may perform only approved duties. They cannot speak for Punjabi Samvad, collect funds, publish participant information or make programme commitments without written authority.": {
    en: "Volunteers and interns may perform only approved duties. They cannot speak for Punjabi Samvad, collect funds, publish participant information or make programme commitments without written authority.",
    pa: "ਵਲੰਟੀਅਰ ਅਤੇ ਇੰਟਰਨ ਸਿਰਫ ਪ੍ਰਵਾਨਿਤ ਡਿਊਟੀਆਂ ਨਿਭਾ ਸਕਦੇ ਹਨ। ਉਹ ਪੰਜਾਬੀ ਸੰਵਾਦ ਲਈ ਗੱਲ ਨਹੀਂ ਕਰ ਸਕਦੇ, ਫੰਡ ਇਕੱਠੇ ਨਹੀਂ ਕਰ ਸਕਦੇ, ਭਾਗੀਦਾਰ ਜਾਣਕਾਰੀ ਪ੍ਰਕਾਸ਼ਿਤ ਨਹੀਂ ਕਰ ਸਕਦੇ ਜਾਂ ਲਿਖਤੀ ਅਧਿਕਾਰ ਤੋਂ ਬਿਨਾਂ ਪ੍ਰੋਗਰਾਮ ਪ੍ਰਤੀਬੱਧਤਾਵਾਂ ਨਹੀਂ ਕਰ ਸਕਦੇ।"
  },
  "Supervision and concerns": {
    en: "Supervision and concerns",
    pa: "ਨਿਗਰਾਨੀ ਅਤੇ ਚਿੰਤਾਵਾਂ"
  },
  "The supervisor checks work, gives feedback and addresses safety or conduct concerns. Punjabi Samvad may pause or end an engagement when the role is no longer available or when conduct, performance or risk requires it.": {
    en: "The supervisor checks work, gives feedback and addresses safety or conduct concerns. Punjabi Samvad may pause or end an engagement when the role is no longer available or when conduct, performance or risk requires it.",
    pa: "ਸੁਪਰਵਾਈਜ਼ਰ ਕੰਮ ਦੀ ਜਾਂਚ ਕਰਦਾ ਹੈ, ਫੀਡਬੈਕ ਦਿੰਦਾ ਹੈ ਅਤੇ ਸੁਰੱਖਿਆ ਜਾਂ ਆਚਰਣ ਸੰਬੰਧੀ ਚਿੰਤਾਵਾਂ ਨੂੰ ਹੱਲ ਕਰਦਾ ਹੈ। ਪੰਜਾਬੀ ਸੰਵਾਦ ਕਿਸੇ ਰੁਝੇਵੇਂ ਨੂੰ ਰੋਕ ਸਕਦਾ ਹੈ ਜਾਂ ਖਤਮ ਕਰ ਸਕਦਾ ਹੈ ਜਦੋਂ ਭੂਮਿਕਾ ਹੁਣ ਉਪਲਬਧ ਨਹੀਂ ਹੁੰਦੀ ਜਾਂ ਜਦੋਂ ਆਚਰਣ, ਪ੍ਰਦਰਸ਼ਨ ਜਾਂ ਜੋਖਮ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।"
  },
  "Employment status": {
    en: "Employment status",
    pa: "ਰੁਜ਼ਗਾਰ ਸਥਿਤੀ"
  },
  "An internship or volunteer role does not remove any employment right that law gives to the person based on the facts of the arrangement. Punjabi Samvad reviews paid, long-term or staff-like roles before classifying them.": {
    en: "An internship or volunteer role does not remove any employment right that law gives to the person based on the facts of the arrangement. Punjabi Samvad reviews paid, long-term or staff-like roles before classifying them.",
    pa: "ਕੋਈ ਇੰਟਰਨਸ਼ਿਪ ਜਾਂ ਵਲੰਟੀਅਰ ਭੂਮਿਕਾ ਪ੍ਰਬੰਧ ਦੇ ਤੱਥਾਂ ਦੇ ਆਧਾਰ 'ਤੇ ਕਾਨੂੰਨ ਦੁਆਰਾ ਵਿਅਕਤੀ ਨੂੰ ਦਿੱਤੇ ਕਿਸੇ ਰੁਜ਼ਗਾਰ ਅਧਿਕਾਰ ਨੂੰ ਨਹੀਂ ਹਟਾਉਂਦੀ। ਪੰਜਾਬੀ ਸੰਵਾਦ ਅਦਾਇਗੀਸ਼ੁਦਾ, ਲੰਬੇ ਸਮੇਂ ਦੀਆਂ ਜਾਂ ਸਟਾਫ ਵਰਗੀਆਂ ਭੂਮਿਕਾਵਾਂ ਦਾ ਵਰਗੀਕਰਨ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਉਹਨਾਂ ਦੀ ਸਮੀਖਿਆ ਕਰਦਾ ਹੈ।"
  },
  "Donation, Fundraising and Gift Acceptance Policy": {
    en: "Donation, Fundraising and Gift Acceptance Policy",
    pa: "ਦਾਨ, ਫੰਡਰੇਜ਼ਿੰਗ ਅਤੇ ਗਿਫਟ ਸਵੀਕ੍ਰਿਤੀ ਨੀਤੀ"
  },
  "Donations, fundraising and gifts": {
    en: "Donations, fundraising and gifts",
    pa: "ਦਾਨ, ਫੰਡ ਇਕੱਠਾ ਕਰਨਾ ਅਤੇ ਤੋਹਫ਼ੇ"
  },
  "Controls donation acceptance, restrictions, receipts and donor influence.": {
    en: "Controls donation acceptance, restrictions, receipts and donor influence.",
    pa: "ਦਾਨ ਸਵੀਕ੍ਰਿਤੀ, ਪਾਬੰਦੀਆਂ, ਰਸੀਦਾਂ ਅਤੇ ਦਾਨੀ ਪ੍ਰਭਾਵ ਨੂੰ ਨਿਯੰਤਰਿਤ ਕਰਦਾ ਹੈ।"
  },
  "Acceptance": {
    en: "Acceptance",
    pa: "ਸਵੀਕ੍ਰਿਤੀ"
  },
  "Punjabi Samvad accepts funds and in-kind support that fit its charitable objectives, legal status and programme capacity. The finance team records the donor, amount, date, method and accepted restriction.": {
    en: "Punjabi Samvad accepts funds and in-kind support that fit its charitable objectives, legal status and programme capacity. The finance team records the donor, amount, date, method and accepted restriction.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਉਹ ਫੰਡ ਅਤੇ ਕਿਸਮ ਦੀ ਸਹਾਇਤਾ ਸਵੀਕਾਰ ਕਰਦਾ ਹੈ ਜੋ ਇਸਦੇ ਚੈਰੀਟੇਬਲ ਉਦੇਸ਼ਾਂ, ਕਾਨੂੰਨੀ ਸਥਿਤੀ ਅਤੇ ਪ੍ਰੋਗਰਾਮ ਦੀ ਸਮਰੱਥਾ ਦੇ ਅਨੁਕੂਲ ਹੁੰਦੇ ਹਨ। ਵਿੱਤ ਟੀਮ ਦਾਨੀ, ਰਕਮ, ਮਿਤੀ, ਵਿਧੀ ਅਤੇ ਪ੍ਰਵਾਨਿਤ ਪਾਬੰਦੀ ਰਿਕਾਰਡ ਕਰਦੀ ਹੈ।"
  },
  "Punjabi Samvad may decline": {
    en: "Punjabi Samvad may decline",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਇਨਕਾਰ ਕਰ ਸਕਦਾ ਹੈ"
  },
  "Funds from an unlawful or suspect source.": {
    en: "Funds from an unlawful or suspect source.",
    pa: "ਗੈਰਕਾਨੂੰਨੀ ਜਾਂ ਸ਼ੱਕੀ ਸਰੋਤ ਤੋਂ ਫੰਡ।"
  },
  "Conditions that conflict with the organisation's objects or participant rights.": {
    en: "Conditions that conflict with the organisation's objects or participant rights.",
    pa: "ਉਹ ਸ਼ਰਤਾਂ ਜੋ ਸੰਸਥਾ ਦੇ ਉਦੇਸ਼ਾਂ ਜਾਂ ਭਾਗੀਦਾਰਾਂ ਦੇ ਅਧਿਕਾਰਾਂ ਨਾਲ ਟਕਰਾਉਂਦੀਆਂ ਹਨ।"
  },
  "A demand for improper control over selection, procurement or reporting.": {
    en: "A demand for improper control over selection, procurement or reporting.",
    pa: "ਚੋਣ, ਖਰੀਦਦਾਰੀ ਜਾਂ ਰਿਪੋਰਟਿੰਗ 'ਤੇ ਅਣਉਚਿਤ ਨਿਯੰਤਰਣ ਦੀ ਮੰਗ।"
  },
  "A gift that creates excessive cost, liability or reputational risk.": {
    en: "A gift that creates excessive cost, liability or reputational risk.",
    pa: "ਕੋਈ ਤੋਹਫ਼ਾ ਜੋ ਬਹੁਤ ਜ਼ਿਆਦਾ ਲਾਗਤ, ਦੇਣਦਾਰੀ ਜਾਂ ਪ੍ਰਤਿਸ਼ਠਾ ਸੰਬੰਧੀ ਜੋਖਮ ਪੈਦਾ ਕਰਦਾ ਹੈ।"
  },
  "A donation that the organisation cannot accept under tax, foreign-contribution or other law.": {
    en: "A donation that the organisation cannot accept under tax, foreign-contribution or other law.",
    pa: "ਇੱਕ ਦਾਨ ਜੋ ਸੰਸਥਾ ਟੈਕਸ, ਵਿਦੇਸ਼ੀ-ਯੋਗਦਾਨ ਜਾਂ ਹੋਰ ਕਾਨੂੰਨ ਦੇ ਤਹਿਤ ਸਵੀਕਾਰ ਨਹੀਂ ਕਰ ਸਕਦੀ।"
  },
  "Restricted gifts and receipts": {
    en: "Restricted gifts and receipts",
    pa: "ਪ੍ਰਤਿਬੰਧਿਤ ਤੋਹਫ਼ੇ ਅਤੇ ਰਸੀਦਾਂ"
  },
  "Punjabi Samvad uses an accepted restricted gift for its stated purpose and records any agreed change. It issues tax receipts only under its current approvals and applicable law. Donors should obtain their own tax advice.": {
    en: "Punjabi Samvad uses an accepted restricted gift for its stated purpose and records any agreed change. It issues tax receipts only under its current approvals and applicable law. Donors should obtain their own tax advice.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਆਪਣੇ ਦੱਸੇ ਗਏ ਉਦੇਸ਼ ਲਈ ਪ੍ਰਵਾਨਿਤ ਪ੍ਰਤਿਬੰਧਿਤ ਤੋਹਫ਼ੇ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ ਅਤੇ ਕਿਸੇ ਵੀ ਸਹਿਮਤ ਤਬਦੀਲੀ ਨੂੰ ਰਿਕਾਰਡ ਕਰਦਾ ਹੈ। ਇਹ ਸਿਰਫ਼ ਆਪਣੀਆਂ ਮੌਜੂਦਾ ਮਨਜ਼ੂਰੀਆਂ ਅਤੇ ਲਾਗੂ ਕਾਨੂੰਨ ਅਧੀਨ ਟੈਕਸ ਰਸੀਦਾਂ ਜਾਰੀ ਕਰਦਾ ਹੈ। ਦਾਨੀਆਂ ਨੂੰ ਆਪਣੀ ਟੈਕਸ ਸਲਾਹ ਲੈਣੀ ਚਾਹੀਦੀ ਹੈ।"
  },
  "Foreign contribution": {
    en: "Foreign contribution",
    pa: "ਵਿਦੇਸ਼ੀ ਯੋਗਦਾਨ"
  },
  "Punjabi Samvad will not accept a foreign contribution unless it holds a valid FCRA registration or prior permission for that contribution and uses the required bank route. Website payment details do not constitute confirmation that a foreign donation can be accepted.": {
    en: "Punjabi Samvad will not accept a foreign contribution unless it holds a valid FCRA registration or prior permission for that contribution and uses the required bank route. Website payment details do not constitute confirmation that a foreign donation can be accepted.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਕੋਈ ਵਿਦੇਸ਼ੀ ਯੋਗਦਾਨ ਸਵੀਕਾਰ ਨਹੀਂ ਕਰੇਗਾ ਜਦੋਂ ਤੱਕ ਇਸ ਕੋਲ ਉਸ ਯੋਗਦਾਨ ਲਈ ਵੈਧ FCRA ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਜਾਂ ਪੂਰਵ ਆਗਿਆ ਨਹੀਂ ਹੁੰਦੀ ਅਤੇ ਲੋੜੀਂਦੇ ਬੈਂਕ ਰੂਟ ਦੀ ਵਰਤੋਂ ਨਹੀਂ ਕਰਦਾ। ਵੈੱਬਸਾਈਟ ਭੁਗਤਾਨ ਵੇਰਵਿਆਂ ਦਾ ਮਤਲਬ ਇਹ ਪੁਸ਼ਟੀ ਕਰਨਾ ਨਹੀਂ ਹੈ ਕਿ ਵਿਦੇਸ਼ੀ ਦਾਨ ਸਵੀਕਾਰ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।"
  },
  "Donor privacy": {
    en: "Donor privacy",
    pa: "ਦਾਨੀ ਗੋਪਨੀਯਤਾ"
  },
  "Punjabi Samvad limits donor information to finance, compliance, communication and reporting needs. It does not sell donor data or give a donor access to confidential participant records.": {
    en: "Punjabi Samvad limits donor information to finance, compliance, communication and reporting needs. It does not sell donor data or give a donor access to confidential participant records.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦਾਨੀ ਜਾਣਕਾਰੀ ਨੂੰ ਵਿੱਤ, ਪਾਲਣਾ, ਸੰਚਾਰ ਅਤੇ ਰਿਪੋਰਟਿੰਗ ਲੋੜਾਂ ਤੱਕ ਸੀਮਤ ਕਰਦਾ ਹੈ। ਇਹ ਦਾਨੀ ਡੇਟਾ ਨਹੀਂ ਵੇਚਦਾ ਜਾਂ ਕਿਸੇ ਦਾਨੀ ਨੂੰ ਗੁਪਤ ਭਾਗੀਦਾਰ ਰਿਕਾਰਡਾਂ ਤੱਕ ਪਹੁੰਚ ਨਹੀਂ ਦਿੰਦਾ।"
  },
  "FCRA Online Services, Ministry of Home Affairs": {
    en: "FCRA Online Services, Ministry of Home Affairs",
    pa: "FCRA ਔਨਲਾਈਨ ਸੇਵਾਵਾਂ, ਗ੍ਰਹਿ ਮੰਤਰਾਲਾ"
  },
  "FCRA guidance on receiving foreign contribution": {
    en: "FCRA guidance on receiving foreign contribution",
    pa: "ਵਿਦੇਸ਼ੀ ਯੋਗਦਾਨ ਪ੍ਰਾਪਤ ਕਰਨ ਬਾਰੇ FCRA ਮਾਰਗਦਰਸ਼ਨ"
  },
  "CSR Partnership and Project Management Policy": {
    en: "CSR Partnership and Project Management Policy",
    pa: "CSR ਭਾਈਵਾਲੀ ਅਤੇ ਪ੍ਰੋਜੈਕਟ ਪ੍ਰਬੰਧਨ ਨੀਤੀ"
  },
  "CSR partnership and project management": {
    en: "CSR partnership and project management",
    pa: "CSR ਭਾਈਵਾਲੀ ਅਤੇ ਪ੍ਰੋਜੈਕਟ ਪ੍ਰਬੰਧਨ"
  },
  "Sets agreement, budget, delivery and evidence standards for funded projects.": {
    en: "Sets agreement, budget, delivery and evidence standards for funded projects.",
    pa: "ਫੰਡ ਪ੍ਰਾਪਤ ਪ੍ਰੋਜੈਕਟਾਂ ਲਈ ਸਮਝੌਤਾ, ਬਜਟ, ਡਿਲੀਵਰੀ ਅਤੇ ਸਬੂਤ ਦੇ ਮਿਆਰ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ।"
  },
  "Project set-up": {
    en: "Project set-up",
    pa: "ਪ੍ਰੋਜੈਕਟ ਸੈੱਟਅੱਪ"
  },
  "Define the need, participants, geography and objectives.": {
    en: "Define the need, participants, geography and objectives.",
    pa: "ਲੋੜ, ਭਾਗੀਦਾਰਾਂ, ਭੂਗੋਲ ਅਤੇ ਉਦੇਸ਼ਾਂ ਨੂੰ ਪਰਿਭਾਸ਼ਿਤ ਕਰੋ।"
  },
  "Agree activities, responsibilities, schedule and budget.": {
    en: "Agree activities, responsibilities, schedule and budget.",
    pa: "ਗਤੀਵਿਧੀਆਂ, ਜ਼ਿੰਮੇਵਾਰੀਆਂ, ਕਾਰਜਕ੍ਰਮ ਅਤੇ ਬਜਟ 'ਤੇ ਸਹਿਮਤ ਹੋਵੋ।"
  },
  "Set indicators, evidence and reporting dates.": {
    en: "Set indicators, evidence and reporting dates.",
    pa: "ਸੂਚਕ, ਸਬੂਤ ਅਤੇ ਰਿਪੋਰਟਿੰਗ ਤਾਰੀਖਾਂ ਨਿਰਧਾਰਤ ਕਰੋ।"
  },
  "Record safeguarding, data, branding and escalation requirements.": {
    en: "Record safeguarding, data, branding and escalation requirements.",
    pa: "ਸੁਰੱਖਿਆ, ਡੇਟਾ, ਬ੍ਰਾਂਡਿੰਗ ਅਤੇ ਐਸਕੇਲੇਸ਼ਨ ਲੋੜਾਂ ਨੂੰ ਰਿਕਾਰਡ ਕਰੋ।"
  },
  "Name the people authorised to approve changes.": {
    en: "Name the people authorised to approve changes.",
    pa: "ਤਬਦੀਲੀਆਂ ਨੂੰ ਮਨਜ਼ੂਰੀ ਦੇਣ ਲਈ ਅਧਿਕਾਰਤ ਲੋਕਾਂ ਦੇ ਨਾਮ ਦੱਸੋ।"
  },
  "Delivery and finance": {
    en: "Delivery and finance",
    pa: "ਡਿਲੀਵਰੀ ਅਤੇ ਵਿੱਤ"
  },
  "The programme lead tracks work against the agreed plan. The finance team traces project expenditure to supporting records. Staff raise a material scope, timeline or budget change before implementing it when the agreement requires approval.": {
    en: "The programme lead tracks work against the agreed plan. The finance team traces project expenditure to supporting records. Staff raise a material scope, timeline or budget change before implementing it when the agreement requires approval.",
    pa: "ਪ੍ਰੋਗਰਾਮ ਲੀਡ ਸਹਿਮਤ ਯੋਜਨਾ ਦੇ ਵਿਰੁੱਧ ਕੰਮ ਨੂੰ ਟਰੈਕ ਕਰਦਾ ਹੈ। ਵਿੱਤ ਟੀਮ ਪ੍ਰੋਜੈਕਟ ਦੇ ਖਰਚਿਆਂ ਨੂੰ ਸਹਾਇਕ ਰਿਕਾਰਡਾਂ ਵਿੱਚ ਲੱਭਦੀ ਹੈ। ਜਦੋਂ ਸਮਝੌਤੇ ਨੂੰ ਮਨਜ਼ੂਰੀ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ ਤਾਂ ਸਟਾਫ ਇਸ ਨੂੰ ਲਾਗੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਕੋਈ ਮਹੱਤਵਪੂਰਨ ਦਾਇਰੇ, ਸਮਾਂਰੇਖਾ ਜਾਂ ਬਜਟ ਤਬਦੀਲੀ ਉਠਾਉਂਦਾ ਹੈ।"
  },
  "Impact claims": {
    en: "Impact claims",
    pa: "ਪ੍ਰਭਾਵ ਦਾਅਵੇ"
  },
  "Reports distinguish activities, attendance, outputs and measured outcomes. Punjabi Samvad states the method and period behind a figure and does not report an outcome that the available evidence cannot support.": {
    en: "Reports distinguish activities, attendance, outputs and measured outcomes. Punjabi Samvad states the method and period behind a figure and does not report an outcome that the available evidence cannot support.",
    pa: "ਰਿਪੋਰਟਾਂ ਗਤੀਵਿਧੀਆਂ, ਹਾਜ਼ਰੀ, ਆਉਟਪੁੱਟ ਅਤੇ ਮਾਪੇ ਗਏ ਨਤੀਜਿਆਂ ਵਿੱਚ ਫਰਕ ਕਰਦੀਆਂ ਹਨ। ਪੰਜਾਬੀ ਸੰਵਾਦ ਇੱਕ ਅੰਕੜੇ ਦੇ ਪਿੱਛੇ ਵਿਧੀ ਅਤੇ ਮਿਆਦ ਦੱਸਦਾ ਹੈ ਅਤੇ ਅਜਿਹੇ ਨਤੀਜੇ ਦੀ ਰਿਪੋਰਟ ਨਹੀਂ ਕਰਦਾ ਜਿਸਦਾ ਉਪਲਬਧ ਸਬੂਤ ਸਮਰਥਨ ਨਹੀਂ ਕਰ ਸਕਦਾ।"
  },
  "Close-out": {
    en: "Close-out",
    pa: "ਬੰਦ ਕਰਨਾ"
  },
  "The team completes the final narrative and financial reports, resolves unspent or disallowed funds under the agreement, stores core records and records lessons for future work.": {
    en: "The team completes the final narrative and financial reports, resolves unspent or disallowed funds under the agreement, stores core records and records lessons for future work.",
    pa: "ਟੀਮ ਅੰਤਿਮ ਬਿਰਤਾਂਤ ਅਤੇ ਵਿੱਤੀ ਰਿਪੋਰਟਾਂ ਨੂੰ ਪੂਰਾ ਕਰਦੀ ਹੈ, ਸਮਝੌਤੇ ਦੇ ਤਹਿਤ ਅਣਖਰਚੇ ਜਾਂ ਅਸਵੀਕਾਰ ਕੀਤੇ ਗਏ ਫੰਡਾਂ ਨੂੰ ਹੱਲ ਕਰਦੀ ਹੈ, ਮੁੱਖ ਰਿਕਾਰਡਾਂ ਨੂੰ ਸਟੋਰ ਕਰਦੀ ਹੈ ਅਤੇ ਭਵਿੱਖ ਦੇ ਕੰਮ ਲਈ ਸਬਕ ਰਿਕਾਰਡ ਕਰਦੀ ਹੈ।"
  },
  "Partner and Third-Party Due Diligence Policy": {
    en: "Partner and Third-Party Due Diligence Policy",
    pa: "ਪਾਰਟਨਰ ਅਤੇ ਥਰਡ-ਪਾਰਟੀ ਡਿਊ ਡਿਲਿਜੈਂਸ ਨੀਤੀ"
  },
  "Partner and third-party due diligence": {
    en: "Partner and third-party due diligence",
    pa: "ਭਾਈਵਾਲ ਅਤੇ ਤੀਜੀ ਧਿਰ ਦੀ ਯਥੋਚਿਤ ਜਾਂਚ"
  },
  "Requires checks before Punjabi Samvad relies on a partner, consultant or vendor.": {
    en: "Requires checks before Punjabi Samvad relies on a partner, consultant or vendor.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੁਆਰਾ ਕਿਸੇ ਸਾਥੀ, ਸਲਾਹਕਾਰ ਜਾਂ ਵਿਕਰੇਤਾ 'ਤੇ ਭਰੋਸਾ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਜਾਂਚ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।"
  },
  "Governing Body and Contract Owner": {
    en: "Governing Body and Contract Owner",
    pa: "ਪ੍ਰਬੰਧਕੀ ਕਮੇਟੀ ਅਤੇ ਇਕਰਾਰਨਾਮੇ ਦਾ ਮਾਲਕ"
  },
  "Risk-based checks": {
    en: "Risk-based checks",
    pa: "ਜੋਖਮ-ਅਧਾਰਤ ਜਾਂਚਾਂ"
  },
  "Confirm legal identity, address and authorised representatives.": {
    en: "Confirm legal identity, address and authorised representatives.",
    pa: "ਕਾਨੂੰਨੀ ਪਛਾਣ, ਪਤੇ ਅਤੇ ਅਧਿਕਾਰਤ ਨੁਮਾਇੰਦਿਆਂ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ।"
  },
  "Review registration, experience and reputation relevant to the work.": {
    en: "Review registration, experience and reputation relevant to the work.",
    pa: "ਕੰਮ ਨਾਲ ਸੰਬੰਧਿਤ ਰਜਿਸਟ੍ਰੇਸ਼ਨ, ਅਨੁਭਵ ਅਤੇ ਵੱਕਾਰ ਦੀ ਸਮੀਖਿਆ ਕਰੋ।"
  },
  "Check conflicts of interest and payment details.": {
    en: "Check conflicts of interest and payment details.",
    pa: "ਹਿੱਤਾਂ ਦੇ ਟਕਰਾਅ ਅਤੇ ਭੁਗਤਾਨ ਦੇ ਵੇਰਵਿਆਂ ਦੀ ਜਾਂਚ ਕਰੋ।"
  },
  "Assess safeguarding, privacy and financial capacity when the role requires it.": {
    en: "Assess safeguarding, privacy and financial capacity when the role requires it.",
    pa: "ਜਦੋਂ ਭੂਮਿਕਾ ਦੀ ਮੰਗ ਹੋਵੇ ਤਾਂ ਸੁਰੱਖਿਆ, ਗੋਪਨੀਯਤਾ ਅਤੇ ਵਿੱਤੀ ਸਮਰੱਥਾ ਦਾ ਮੁਲਾਂਕਣ ਕਰੋ।"
  },
  "Review sanctions, litigation or regulatory concerns when relevant.": {
    en: "Review sanctions, litigation or regulatory concerns when relevant.",
    pa: "ਜਦੋਂ ਢੁਕਵਾਂ ਹੋਵੇ ਤਾਂ ਪਾਬੰਦੀਆਂ, ਮੁਕੱਦਮੇਬਾਜ਼ੀ ਜਾਂ ਰੈਗੂਲੇਟਰੀ ਚਿੰਤਾਵਾਂ ਦੀ ਸਮੀਖਿਆ ਕਰੋ।"
  },
  "Decision": {
    en: "Decision",
    pa: "ਫੈਸਲਾ"
  },
  "The contract owner records the checks, identified risks, controls and approving person. A higher-risk relationship requires stronger contract terms, monitoring or Governing Body approval.": {
    en: "The contract owner records the checks, identified risks, controls and approving person. A higher-risk relationship requires stronger contract terms, monitoring or Governing Body approval.",
    pa: "ਇਕਰਾਰਨਾਮੇ ਦਾ ਮਾਲਕ ਜਾਂਚਾਂ, ਪਛਾਣੇ ਗਏ ਜੋਖਮਾਂ, ਨਿਯੰਤਰਣਾਂ ਅਤੇ ਮਨਜ਼ੂਰ ਕਰਨ ਵਾਲੇ ਵਿਅਕਤੀ ਨੂੰ ਰਿਕਾਰਡ ਕਰਦਾ ਹੈ। ਉੱਚ-ਜੋਖਮ ਵਾਲੇ ਰਿਸ਼ਤੇ ਲਈ ਮਜ਼ਬੂਤ ਇਕਰਾਰਨਾਮੇ ਦੀਆਂ ਸ਼ਰਤਾਂ, ਨਿਗਰਾਨੀ ਜਾਂ ਪ੍ਰਬੰਧਕੀ ਕਮੇਟੀ ਦੀ ਪ੍ਰਵਾਨਗੀ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।"
  },
  "Contract and monitoring": {
    en: "Contract and monitoring",
    pa: "ਇਕਰਾਰਨਾਮਾ ਅਤੇ ਨਿਗਰਾਨੀ"
  },
  "Significant agreements define scope, deliverables, price, confidentiality, data use, safeguarding, intellectual property, termination and reporting. The contract owner monitors delivery and updates due diligence when ownership, risk or scope changes.": {
    en: "Significant agreements define scope, deliverables, price, confidentiality, data use, safeguarding, intellectual property, termination and reporting. The contract owner monitors delivery and updates due diligence when ownership, risk or scope changes.",
    pa: "ਮਹੱਤਵਪੂਰਨ ਸਮਝੌਤੇ ਦਾਇਰੇ, ਡਿਲੀਵਰੇਬਲ, ਕੀਮਤ, ਗੁਪਤਤਾ, ਡੇਟਾ ਦੀ ਵਰਤੋਂ, ਸੁਰੱਖਿਆ, ਬੌਧਿਕ ਸੰਪੱਤੀ, ਸਮਾਪਤੀ ਅਤੇ ਰਿਪੋਰਟਿੰਗ ਨੂੰ ਪਰਿਭਾਸ਼ਿਤ ਕਰਦੇ ਹਨ। ਇਕਰਾਰਨਾਮੇ ਦਾ ਮਾਲਕ ਡਿਲੀਵਰੀ ਦੀ ਨਿਗਰਾਨੀ ਕਰਦਾ ਹੈ ਅਤੇ ਜਦੋਂ ਮਾਲਕੀ, ਜੋਖਮ ਜਾਂ ਦਾਇਰੇ ਵਿੱਚ ਬਦਲਾਅ ਹੁੰਦਾ ਹੈ ਤਾਂ ਡਿਊ ਡਿਲਿਜੈਂਸ ਨੂੰ ਅਪਡੇਟ ਕਰਦਾ ਹੈ।"
  },
  "Health, Safety and Fieldwork Policy": {
    en: "Health, Safety and Fieldwork Policy",
    pa: "ਸਿਹਤ, ਸੁਰੱਖਿਆ ਅਤੇ ਫੀਲਡਵਰਕ ਨੀਤੀ"
  },
  "Health, safety and fieldwork": {
    en: "Health, safety and fieldwork",
    pa: "ਸਿਹਤ, ਸੁਰੱਖਿਆ ਅਤੇ ਮੈਦਾਨੀ ਕੰਮ"
  },
  "Controls travel, venue, emergency and participant safety risks.": {
    en: "Controls travel, venue, emergency and participant safety risks.",
    pa: "ਯਾਤਰਾ, ਸਥਾਨ, ਐਮਰਜੈਂਸੀ ਅਤੇ ਭਾਗੀਦਾਰ ਸੁਰੱਖਿਆ ਜੋਖਮਾਂ ਨੂੰ ਨਿਯੰਤਰਿਤ ਕਰਦਾ ਹੈ।"
  },
  "Preparation": {
    en: "Preparation",
    pa: "ਤਿਆਰੀ"
  },
  "Before an event or field visit, the team considers venue capacity, safe access, medical support, extreme weather and transport risks. Staff working alone must agree check-in times and routes.": {
    en: "Before an event or field visit, the team considers venue capacity, safe access, medical support, extreme weather and transport risks. Staff working alone must agree check-in times and routes.",
    pa: "ਕਿਸੇ ਸਮਾਗਮ ਜਾਂ ਫੀਲਡ ਵਿਜ਼ਿਟ ਤੋਂ ਪਹਿਲਾਂ, ਟੀਮ ਸਥਾਨ ਦੀ ਸਮਰੱਥਾ, ਸੁਰੱਖਿਅਤ ਪਹੁੰਚ, ਡਾਕਟਰੀ ਸਹਾਇਤਾ, ਅਤਿਅੰਤ ਮੌਸਮ ਅਤੇ ਆਵਾਜਾਈ ਦੇ ਜੋਖਮਾਂ 'ਤੇ ਵਿਚਾਰ ਕਰਦੀ ਹੈ। ਇਕੱਲੇ ਕੰਮ ਕਰਨ ਵਾਲੇ ਸਟਾਫ ਨੂੰ ਚੈੱਕ-ਇਨ ਸਮੇਂ ਅਤੇ ਰਸਤਿਆਂ 'ਤੇ ਸਹਿਮਤ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।"
  },
  "During activities": {
    en: "During activities",
    pa: "ਗਤੀਵਿਧੀਆਂ ਦੌਰਾਨ"
  },
  "Explain safety rules and exits to participants.": {
    en: "Explain safety rules and exits to participants.",
    pa: "ਭਾਗੀਦਾਰਾਂ ਨੂੰ ਸੁਰੱਖਿਆ ਨਿਯਮਾਂ ਅਤੇ ਬਾਹਰ ਨਿਕਲਣ ਦੇ ਰਸਤਿਆਂ ਬਾਰੇ ਸਮਝਾਓ।"
  },
  "Keep first-aid supplies and emergency contacts available.": {
    en: "Keep first-aid supplies and emergency contacts available.",
    pa: "ਫਸਟ-ਏਡ ਸਪਲਾਈ ਅਤੇ ਐਮਰਜੈਂਸੀ ਸੰਪਰਕ ਉਪਲਬਧ ਰੱਖੋ।"
  },
  "Stop work or leave an area if violence, weather or unsafe conditions create an immediate risk.": {
    en: "Stop work or leave an area if violence, weather or unsafe conditions create an immediate risk.",
    pa: "ਜੇਕਰ ਹਿੰਸਾ, ਮੌਸਮ ਜਾਂ ਅਸੁਰੱਖਿਅਤ ਸਥਿਤੀਆਂ ਤੁਰੰਤ ਜੋਖਮ ਪੈਦਾ ਕਰਦੀਆਂ ਹਨ ਤਾਂ ਕੰਮ ਬੰਦ ਕਰੋ ਜਾਂ ਖੇਤਰ ਛੱਡ ਦਿਓ।"
  },
  "Do not operate vehicles or equipment under the influence of alcohol, drugs or impairing medication.": {
    en: "Do not operate vehicles or equipment under the influence of alcohol, drugs or impairing medication.",
    pa: "ਸ਼ਰਾਬ, ਨਸ਼ੇ ਜਾਂ ਕਮਜ਼ੋਰ ਕਰਨ ਵਾਲੀਆਂ ਦਵਾਈਆਂ ਦੇ ਪ੍ਰਭਾਵ ਹੇਠ ਵਾਹਨ ਜਾਂ ਉਪਕਰਣ ਨਾ ਚਲਾਓ।"
  },
  "Incidents": {
    en: "Incidents",
    pa: "ਘਟਨਾਵਾਂ"
  },
  "A person involved in an accident, injury, security threat or near-miss must put medical and safety needs first. Contact emergency services when needed, inform the programme lead, preserve relevant facts and record the incident. The responsible lead reviews the cause and assigns corrective action.": {
    en: "A person involved in an accident, injury, security threat or near-miss must put medical and safety needs first. Contact emergency services when needed, inform the programme lead, preserve relevant facts and record the incident. The responsible lead reviews the cause and assigns corrective action.",
    pa: "ਕਿਸੇ ਦੁਰਘਟਨਾ, ਸੱਟ, ਸੁਰੱਖਿਆ ਖਤਰੇ ਜਾਂ ਨੇੜੇ-ਤੇੜੇ ਹੋਣ ਵਾਲੀ ਘਟਨਾ ਵਿੱਚ ਸ਼ਾਮਲ ਵਿਅਕਤੀ ਨੂੰ ਡਾਕਟਰੀ ਅਤੇ ਸੁਰੱਖਿਆ ਲੋੜਾਂ ਨੂੰ ਪਹਿਲ ਦੇਣੀ ਚਾਹੀਦੀ ਹੈ। ਲੋੜ ਪੈਣ 'ਤੇ ਐਮਰਜੈਂਸੀ ਸੇਵਾਵਾਂ ਨਾਲ ਸੰਪਰਕ ਕਰੋ, ਪ੍ਰੋਗਰਾਮ ਲੀਡ ਨੂੰ ਸੂਚਿਤ ਕਰੋ, ਸੰਬੰਧਿਤ ਤੱਥਾਂ ਨੂੰ ਸੁਰੱਖਿਅਤ ਰੱਖੋ ਅਤੇ ਘਟਨਾ ਨੂੰ ਰਿਕਾਰਡ ਕਰੋ। ਜ਼ਿੰਮੇਵਾਰ ਲੀਡ ਕਾਰਨ ਦੀ ਸਮੀਖਿਆ ਕਰਦੀ ਹੈ ਅਤੇ ਸੁਧਾਰਾਤਮਕ ਕਾਰਵਾਈ ਨਿਰਧਾਰਤ ਕਰਦੀ ਹੈ।"
  },
  "Records Management and Retention Policy": {
    en: "Records Management and Retention Policy",
    pa: "ਰਿਕਾਰਡ ਪ੍ਰਬੰਧਨ ਅਤੇ ਧਾਰਨ ਨੀਤੀ"
  },
  "Records management and retention": {
    en: "Records management and retention",
    pa: "ਰਿਕਾਰਡ ਪ੍ਰਬੰਧਨ ਅਤੇ ਸੰਭਾਲ"
  },
  "Keeps organisational records accurate, secure and available for their required period.": {
    en: "Keeps organisational records accurate, secure and available for their required period.",
    pa: "ਸੰਗਠਨਾਤਮਕ ਰਿਕਾਰਡਾਂ ਨੂੰ ਉਹਨਾਂ ਦੀ ਲੋੜੀਂਦੀ ਮਿਆਦ ਲਈ ਸਹੀ, ਸੁਰੱਖਿਅਤ ਅਤੇ ਉਪਲਬਧ ਰੱਖਦਾ ਹੈ।"
  },
  "Records Responsible Person and Finance Lead": {
    en: "Records Responsible Person and Finance Lead",
    pa: "ਰਿਕਾਰਡ ਲਈ ਜ਼ਿੰਮੇਵਾਰ ਵਿਅਕਤੀ ਅਤੇ ਫਾਈਨੈਂਸ ਲੀਡ"
  },
  "Records covered": {
    en: "Records covered",
    pa: "ਕਵਰ ਕੀਤੇ ਗਏ ਰਿਕਾਰਡ"
  },
  "Governing Body minutes and approvals.": {
    en: "Governing Body minutes and approvals.",
    pa: "ਪ੍ਰਬੰਧਕੀ ਕਮੇਟੀ ਦੇ ਮਿੰਟ ਅਤੇ ਮਨਜ਼ੂਰੀਆਂ।"
  },
  "Registration, tax and statutory records.": {
    en: "Registration, tax and statutory records.",
    pa: "ਰਜਿਸਟ੍ਰੇਸ਼ਨ, ਟੈਕਸ ਅਤੇ ਵਿਧਾਨਕ ਰਿਕਾਰਡ।"
  },
  "Accounts, audit files and donor agreements.": {
    en: "Accounts, audit files and donor agreements.",
    pa: "ਖਾਤੇ, ਆਡਿਟ ਫਾਈਲਾਂ ਅਤੇ ਦਾਨੀ ਸਮਝੌਤੇ।"
  },
  "Project, procurement and contract records.": {
    en: "Project, procurement and contract records.",
    pa: "ਪ੍ਰੋਜੈਕਟ, ਖਰੀਦਦਾਰੀ ਅਤੇ ਇਕਰਾਰਨਾਮੇ ਦੇ ਰਿਕਾਰਡ।"
  },
  "Employment, volunteer and intern records.": {
    en: "Employment, volunteer and intern records.",
    pa: "ਰੁਜ਼ਗਾਰ, ਵਲੰਟੀਅਰ ਅਤੇ ਇੰਟਰਨ ਰਿਕਾਰਡ।"
  },
  "Consent, participant and safeguarding records.": {
    en: "Consent, participant and safeguarding records.",
    pa: "ਸਹਿਮਤੀ, ਭਾਗੀਦਾਰ ਅਤੇ ਸੁਰੱਖਿਆ ਰਿਕਾਰਡ।"
  },
  "Retention schedule": {
    en: "Retention schedule",
    pa: "ਧਾਰਨ ਕਾਰਜਕ੍ਰਮ"
  },
  "The responsible team records the legal, tax, donor, employment and programme requirement for each record class in a retention schedule. If two periods apply, the team uses the longer period unless law requires another result. A legal hold or active complaint suspends routine deletion for relevant records.": {
    en: "The responsible team records the legal, tax, donor, employment and programme requirement for each record class in a retention schedule. If two periods apply, the team uses the longer period unless law requires another result. A legal hold or active complaint suspends routine deletion for relevant records.",
    pa: "ਜ਼ਿੰਮੇਵਾਰ ਟੀਮ ਧਾਰਨ ਕਾਰਜਕ੍ਰਮ ਵਿੱਚ ਹਰੇਕ ਰਿਕਾਰਡ ਕਲਾਸ ਲਈ ਕਾਨੂੰਨੀ, ਟੈਕਸ, ਦਾਨੀ, ਰੁਜ਼ਗਾਰ ਅਤੇ ਪ੍ਰੋਗਰਾਮ ਦੀ ਲੋੜ ਨੂੰ ਰਿਕਾਰਡ ਕਰਦੀ ਹੈ। ਜੇਕਰ ਦੋ ਮਿਆਦਾਂ ਲਾਗੂ ਹੁੰਦੀਆਂ ਹਨ, ਤਾਂ ਟੀਮ ਲੰਬੀ ਮਿਆਦ ਦੀ ਵਰਤੋਂ ਕਰਦੀ ਹੈ ਜਦੋਂ ਤੱਕ ਕਾਨੂੰਨ ਨੂੰ ਹੋਰ ਨਤੀਜਾ ਨਾ ਚਾਹੀਦਾ ਹੋਵੇ। ਇੱਕ ਕਾਨੂੰਨੀ ਰੋਕ ਜਾਂ ਸਰਗਰਮ ਸ਼ਿਕਾਇਤ ਸੰਬੰਧਿਤ ਰਿਕਾਰਡਾਂ ਲਈ ਰੁਟੀਨ ਮਿਟਾਉਣ ਨੂੰ ਮੁਅੱਤਲ ਕਰਦੀ ਹੈ।"
  },
  "Storage and access": {
    en: "Storage and access",
    pa: "ਸਟੋਰੇਜ ਅਤੇ ਪਹੁੰਚ"
  },
  "Punjabi Samvad stores records in an ordered system, limits access by role and protects originals from loss or unauthorised change. It keeps safeguarding, complaint, health and identity records separate from general programme files.": {
    en: "Punjabi Samvad stores records in an ordered system, limits access by role and protects originals from loss or unauthorised change. It keeps safeguarding, complaint, health and identity records separate from general programme files.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਇੱਕ ਕ੍ਰਮਬੱਧ ਪ੍ਰਣਾਲੀ ਵਿੱਚ ਰਿਕਾਰਡ ਸਟੋਰ ਕਰਦਾ ਹੈ, ਭੂਮਿਕਾ ਦੁਆਰਾ ਪਹੁੰਚ ਨੂੰ ਸੀਮਿਤ ਕਰਦਾ ਹੈ ਅਤੇ ਅਸਲ ਨੂੰ ਨੁਕਸਾਨ ਜਾਂ ਅਣਅਧਿਕਾਰਤ ਤਬਦੀਲੀ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ। ਇਹ ਸੁਰੱਖਿਆ, ਸ਼ਿਕਾਇਤ, ਸਿਹਤ ਅਤੇ ਪਛਾਣ ਦੇ ਰਿਕਾਰਡਾਂ ਨੂੰ ਆਮ ਪ੍ਰੋਗਰਾਮ ਫਾਈਲਾਂ ਤੋਂ ਵੱਖ ਰੱਖਦਾ ਹੈ।"
  },
  "Disposal": {
    en: "Disposal",
    pa: "ਨਿਪਟਾਰਾ"
  },
  "At the end of the retention period, the record owner confirms that no hold applies and uses secure deletion, shredding or another method suited to the record. The organisation keeps a disposal log for sensitive or material records.": {
    en: "At the end of the retention period, the record owner confirms that no hold applies and uses secure deletion, shredding or another method suited to the record. The organisation keeps a disposal log for sensitive or material records.",
    pa: "ਧਾਰਨ ਦੀ ਮਿਆਦ ਦੇ ਅੰਤ 'ਤੇ, ਰਿਕਾਰਡ ਦਾ ਮਾਲਕ ਪੁਸ਼ਟੀ ਕਰਦਾ ਹੈ ਕਿ ਕੋਈ ਰੋਕ ਲਾਗੂ ਨਹੀਂ ਹੁੰਦੀ ਅਤੇ ਸੁਰੱਖਿਅਤ ਮਿਟਾਉਣ, ਸ਼੍ਰੈਡਿੰਗ ਜਾਂ ਰਿਕਾਰਡ ਦੇ ਅਨੁਕੂਲ ਕਿਸੇ ਹੋਰ ਢੰਗ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ। ਸੰਸਥਾ ਸੰਵੇਦਨਸ਼ੀਲ ਜਾਂ ਠੋਸ ਰਿਕਾਰਡਾਂ ਲਈ ਨਿਪਟਾਰੇ ਦਾ ਲੌਗ ਰੱਖਦੀ ਹੈ।"
  },
  "Risk Management Policy": {
    en: "Risk Management Policy",
    pa: "ਜੋਖਮ ਪ੍ਰਬੰਧਨ ਨੀਤੀ"
  },
  "Risk management": {
    en: "Risk management",
    pa: "ਜੋਖਮ ਪ੍ਰਬੰਧਨ"
  },
  "Requires teams to identify, control and escalate material risks.": {
    en: "Requires teams to identify, control and escalate material risks.",
    pa: "ਟੀਮਾਂ ਨੂੰ ਠੋਸ ਜੋਖਮਾਂ ਦੀ ਪਛਾਣ ਕਰਨ, ਨਿਯੰਤਰਣ ਕਰਨ ਅਤੇ ਵਧਾਉਣ ਦੀ ਮੰਗ ਕਰਦਾ ਹੈ।"
  },
  "Governing Body and Programme Leads": {
    en: "Governing Body and Programme Leads",
    pa: "ਪ੍ਰਬੰਧਕੀ ਕਮੇਟੀ ਅਤੇ ਪ੍ਰੋਗਰਾਮ ਲੀਡ"
  },
  "Risk areas": {
    en: "Risk areas",
    pa: "ਜੋਖਮ ਵਾਲੇ ਖੇਤਰ"
  },
  "Punjabi Samvad assesses risks to participants, staff, funds, programmes, legal compliance, information, partnerships and reputation.": {
    en: "Punjabi Samvad assesses risks to participants, staff, funds, programmes, legal compliance, information, partnerships and reputation.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਭਾਗੀਦਾਰਾਂ, ਸਟਾਫ, ਫੰਡਾਂ, ਪ੍ਰੋਗਰਾਮਾਂ, ਕਾਨੂੰਨੀ ਪਾਲਣਾ, ਜਾਣਕਾਰੀ, ਭਾਈਵਾਲੀ ਅਤੇ ਸਾਖ ਲਈ ਜੋਖਮਾਂ ਦਾ ਮੁਲਾਂਕਣ ਕਰਦਾ ਹੈ।"
  },
  "Risk register": {
    en: "Risk register",
    pa: "ਜੋਖਮ ਰਜਿਸਟਰ"
  },
  "Describe the risk and affected people or assets.": {
    en: "Describe the risk and affected people or assets.",
    pa: "ਜੋਖਮ ਅਤੇ ਪ੍ਰਭਾਵਿਤ ਲੋਕਾਂ ਜਾਂ ਸੰਪਤੀਆਂ ਦਾ ਵਰਣਨ ਕਰੋ।"
  },
  "Rate likelihood and consequence using the approved scale.": {
    en: "Rate likelihood and consequence using the approved scale.",
    pa: "ਪ੍ਰਵਾਨਿਤ ਪੈਮਾਨੇ ਦੀ ਵਰਤੋਂ ਕਰਦਿਆਂ ਸੰਭਾਵਨਾ ਅਤੇ ਨਤੀਜੇ ਨੂੰ ਦਰਜਾ ਦਿਓ।"
  },
  "Record existing controls and gaps.": {
    en: "Record existing controls and gaps.",
    pa: "ਮੌਜੂਦਾ ਨਿਯੰਤਰਣਾਂ ਅਤੇ ਅੰਤਰਾਂ ਨੂੰ ਰਿਕਾਰਡ ਕਰੋ।"
  },
  "Assign an owner and due date.": {
    en: "Assign an owner and due date.",
    pa: "ਇੱਕ ਮਾਲਕ ਅਤੇ ਨਿਯਤ ਮਿਤੀ ਨਿਰਧਾਰਤ ਕਰੋ।"
  },
  "Record the remaining risk after action.": {
    en: "Record the remaining risk after action.",
    pa: "ਕਾਰਵਾਈ ਤੋਂ ਬਾਅਦ ਬਚੇ ਹੋਏ ਜੋਖਮ ਨੂੰ ਰਿਕਾਰਡ ਕਰੋ।"
  },
  "Escalation": {
    en: "Escalation",
    pa: "ਐਸਕੇਲੇਸ਼ਨ"
  },
  "Staff raise an immediate safety, safeguarding, fraud, legal or data risk without waiting for a scheduled review. Programme leads bring material or persistent risks to senior leadership or the Governing Body.": {
    en: "Staff raise an immediate safety, safeguarding, fraud, legal or data risk without waiting for a scheduled review. Programme leads bring material or persistent risks to senior leadership or the Governing Body.",
    pa: "ਸਟਾਫ ਨਿਯਤ ਸਮੀਖਿਆ ਦੀ ਉਡੀਕ ਕੀਤੇ ਬਿਨਾਂ ਤੁਰੰਤ ਸੁਰੱਖਿਆ, ਬਚਾਅ, ਧੋਖਾਧੜੀ, ਕਾਨੂੰਨੀ ਜਾਂ ਡੇਟਾ ਜੋਖਮ ਉਠਾਉਂਦਾ ਹੈ। ਪ੍ਰੋਗਰਾਮ ਲੀਡ ਸੀਨੀਅਰ ਲੀਡਰਸ਼ਿਪ ਜਾਂ ਪ੍ਰਬੰਧਕੀ ਕਮੇਟੀ ਦੇ ਸਾਹਮਣੇ ਠੋਸ ਜਾਂ ਨਿਰੰਤਰ ਜੋਖਮ ਲਿਆਉਂਦੇ ਹਨ।"
  },
  "Review": {
    en: "Review",
    pa: "ਸਮੀਖਿਆ"
  },
  "The Governing Body reviews major risks at planned intervals and after a serious incident or significant change in programme, funding, law or operating area.": {
    en: "The Governing Body reviews major risks at planned intervals and after a serious incident or significant change in programme, funding, law or operating area.",
    pa: "ਪ੍ਰਬੰਧਕੀ ਕਮੇਟੀ ਯੋਜਨਾਬੱਧ ਅੰਤਰਾਲਾਂ 'ਤੇ ਅਤੇ ਕਿਸੇ ਗੰਭੀਰ ਘਟਨਾ ਜਾਂ ਪ੍ਰੋਗਰਾਮ, ਫੰਡਿੰਗ, ਕਾਨੂੰਨ ਜਾਂ ਸੰਚਾਲਨ ਖੇਤਰ ਵਿੱਚ ਮਹੱਤਵਪੂਰਨ ਤਬਦੀਲੀ ਤੋਂ ਬਾਅਦ ਪ੍ਰਮੁੱਖ ਜੋਖਮਾਂ ਦੀ ਸਮੀਖਿਆ ਕਰਦੀ ਹੈ।"
  },
  "Communications and Social Media Policy": {
    en: "Communications and Social Media Policy",
    pa: "ਸੰਚਾਰ ਅਤੇ ਸੋਸ਼ਲ ਮੀਡੀਆ ਨੀਤੀ"
  },
  "Communications and social media": {
    en: "Communications and social media",
    pa: "ਸੰਚਾਰ ਅਤੇ ਸੋਸ਼ਲ ਮੀਡੀਆ"
  },
  "Authority": {
    en: "Authority",
    pa: "ਅਥਾਰਟੀ"
  },
  "Only an authorised person may issue an official statement, approve a campaign, respond to media on behalf of Punjabi Samvad or create an organisational social-media account.": {
    en: "Only an authorised person may issue an official statement, approve a campaign, respond to media on behalf of Punjabi Samvad or create an organisational social-media account.",
    pa: "ਸਿਰਫ਼ ਇੱਕ ਅਧਿਕਾਰਤ ਵਿਅਕਤੀ ਅਧਿਕਾਰਤ ਬਿਆਨ ਜਾਰੀ ਕਰ ਸਕਦਾ ਹੈ, ਮੁਹਿੰਮ ਨੂੰ ਮਨਜ਼ੂਰੀ ਦੇ ਸਕਦਾ ਹੈ, ਪੰਜਾਬੀ ਸੰਵਾਦ ਵੱਲੋਂ ਮੀਡੀਆ ਨੂੰ ਜਵਾਬ ਦੇ ਸਕਦਾ ਹੈ ਜਾਂ ਸੰਗਠਨਾਤਮਕ ਸੋਸ਼ਲ-ਮੀਡੀਆ ਖਾਤਾ ਬਣਾ ਸਕਦਾ ਹੈ।"
  },
  "Publication standard": {
    en: "Publication standard",
    pa: "ਪ੍ਰਕਾਸ਼ਨ ਮਿਆਰ"
  },
  "Use approved programme records for statistics.": {
    en: "Use approved programme records for statistics.",
    pa: "ਅੰਕੜਿਆਂ ਲਈ ਪ੍ਰਵਾਨਿਤ ਪ੍ਰੋਗਰਾਮ ਰਿਕਾਰਡਾਂ ਦੀ ਵਰਤੋਂ ਕਰੋ।"
  },
  "State the period and basis of material reach or outcome claims.": {
    en: "State the period and basis of material reach or outcome claims.",
    pa: "ਠੋਸ ਪਹੁੰਚ ਜਾਂ ਨਤੀਜੇ ਦੇ ਦਾਅਵਿਆਂ ਦੀ ਮਿਆਦ ਅਤੇ ਆਧਾਰ ਦੱਸੋ।"
  },
  "Follow participant consent and child-safeguarding rules.": {
    en: "Follow participant consent and child-safeguarding rules.",
    pa: "ਭਾਗੀਦਾਰ ਦੀ ਸਹਿਮਤੀ ਅਤੇ ਬਾਲ-ਸੁਰੱਖਿਆ ਨਿਯਮਾਂ ਦੀ ਪਾਲਣਾ ਕਰੋ।"
  },
  "Check names, partner marks and factual claims before publication.": {
    en: "Check names, partner marks and factual claims before publication.",
    pa: "ਪ੍ਰਕਾਸ਼ਨ ਤੋਂ ਪਹਿਲਾਂ ਨਾਮ, ਪਾਰਟਨਰ ਮਾਰਕਸ ਅਤੇ ਤੱਥਾਂ ਦੇ ਦਾਅਵਿਆਂ ਦੀ ਜਾਂਚ ਕਰੋ।"
  },
  "Correct a material error in content Punjabi Samvad controls.": {
    en: "Correct a material error in content Punjabi Samvad controls.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੁਆਰਾ ਨਿਯੰਤਰਿਤ ਸਮੱਗਰੀ ਵਿੱਚ ਕਿਸੇ ਠੋਸ ਗਲਤੀ ਨੂੰ ਠੀਕ ਕਰੋ।"
  },
  "Confidential information": {
    en: "Confidential information",
    pa: "ਗੁਪਤ ਜਾਣਕਾਰੀ"
  },
  "Staff and volunteers must not publish participant records, safeguarding cases, internal disputes, donor-confidential material or personal data without authority. Personal social-media use must not imply that Punjabi Samvad endorses the user's view.": {
    en: "Staff and volunteers must not publish participant records, safeguarding cases, internal disputes, donor-confidential material or personal data without authority. Personal social-media use must not imply that Punjabi Samvad endorses the user's view.",
    pa: "ਸਟਾਫ ਅਤੇ ਵਲੰਟੀਅਰਾਂ ਨੂੰ ਬਿਨਾਂ ਅਧਿਕਾਰ ਦੇ ਭਾਗੀਦਾਰ ਰਿਕਾਰਡ, ਸੁਰੱਖਿਆ ਮਾਮਲੇ, ਅੰਦਰੂਨੀ ਵਿਵਾਦ, ਦਾਨੀ-ਗੁਪਤ ਸਮੱਗਰੀ ਜਾਂ ਨਿੱਜੀ ਡੇਟਾ ਪ੍ਰਕਾਸ਼ਿਤ ਨਹੀਂ ਕਰਨਾ ਚਾਹੀਦਾ। ਨਿੱਜੀ ਸੋਸ਼ਲ-ਮੀਡੀਆ ਦੀ ਵਰਤੋਂ ਦਾ ਇਹ ਮਤਲਬ ਨਹੀਂ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ ਕਿ ਪੰਜਾਬੀ ਸੰਵਾਦ ਉਪਭੋਗਤਾ ਦੇ ਨਜ਼ਰੀਏ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ।"
  },
  "Send a media controversy, account compromise or harmful publication to the Communications Lead. Preserve the original content, limit further disclosure and coordinate any correction with the responsible programme and safeguarding or privacy contact.": {
    en: "Send a media controversy, account compromise or harmful publication to the Communications Lead. Preserve the original content, limit further disclosure and coordinate any correction with the responsible programme and safeguarding or privacy contact.",
    pa: "ਮੀਡੀਆ ਵਿਵਾਦ, ਖਾਤਾ ਸਮਝੌਤਾ ਜਾਂ ਨੁਕਸਾਨਦੇਹ ਪ੍ਰਕਾਸ਼ਨ ਨੂੰ ਸੰਚਾਰ ਲੀਡ ਨੂੰ ਭੇਜੋ। ਅਸਲ ਸਮੱਗਰੀ ਨੂੰ ਸੁਰੱਖਿਅਤ ਰੱਖੋ, ਹੋਰ ਖੁਲਾਸੇ ਨੂੰ ਸੀਮਤ ਕਰੋ ਅਤੇ ਜ਼ਿੰਮੇਵਾਰ ਪ੍ਰੋਗਰਾਮ ਅਤੇ ਸੁਰੱਖਿਆ ਜਾਂ ਗੋਪਨੀਯਤਾ ਸੰਪਰਕ ਦੇ ਨਾਲ ਕਿਸੇ ਵੀ ਸੁਧਾਰ ਦਾ ਤਾਲਮੇਲ ਕਰੋ।"
  },
  "Operating choices": {
    en: "Operating choices",
    pa: "ਸੰਚਾਲਨ ਚੋਣਾਂ"
  },
  "Reduce single-use materials at events.": {
    en: "Reduce single-use materials at events.",
    pa: "ਸਮਾਗਮਾਂ ਵਿੱਚ ਸਿੰਗਲ-ਯੂਜ਼ ਸਮੱਗਰੀ ਨੂੰ ਘਟਾਓ।"
  },
  "Use water, electricity and fuel with care.": {
    en: "Use water, electricity and fuel with care.",
    pa: "ਪਾਣੀ, ਬਿਜਲੀ ਅਤੇ ਈਂਧਨ ਦੀ ਵਰਤੋਂ ਧਿਆਨ ਨਾਲ ਕਰੋ।"
  },
  "Reuse or recycle materials when a suitable route exists.": {
    en: "Reuse or recycle materials when a suitable route exists.",
    pa: "ਜਦੋਂ ਕੋਈ ਢੁਕਵਾਂ ਰਸਤਾ ਮੌਜੂਦ ਹੋਵੇ ਤਾਂ ਸਮੱਗਰੀ ਦੀ ਮੁੜ ਵਰਤੋਂ ਜਾਂ ਰੀਸਾਈਕਲ ਕਰੋ।"
  },
  "Consider durability and waste when purchasing.": {
    en: "Consider durability and waste when purchasing.",
    pa: "ਖਰੀਦਦਾਰੀ ਕਰਦੇ ਸਮੇਂ ਟਿਕਾਊਪਣ ਅਤੇ ਰਹਿੰਦ-ਖੂੰਹਦ 'ਤੇ ਵਿਚਾਰ ਕਰੋ।"
  },
  "Plan travel and printing around programme need.": {
    en: "Plan travel and printing around programme need.",
    pa: "ਪ੍ਰੋਗਰਾਮ ਦੀ ਲੋੜ ਅਨੁਸਾਰ ਯਾਤਰਾ ਅਤੇ ਛਪਾਈ ਦੀ ਯੋਜਨਾ ਬਣਾਓ।"
  },
  "Programme delivery": {
    en: "Programme delivery",
    pa: "ਪ੍ਰੋਗਰਾਮ ਡਿਲੀਵਰੀ"
  },
  "A programme or event plan records material environmental risks when they could affect the community, venue or delivery. Teams follow local waste, water and venue rules.": {
    en: "A programme or event plan records material environmental risks when they could affect the community, venue or delivery. Teams follow local waste, water and venue rules.",
    pa: "ਕੋਈ ਪ੍ਰੋਗਰਾਮ ਜਾਂ ਇਵੈਂਟ ਯੋਜਨਾ ਠੋਸ ਵਾਤਾਵਰਣ ਸੰਬੰਧੀ ਜੋਖਮਾਂ ਨੂੰ ਰਿਕਾਰਡ ਕਰਦੀ ਹੈ ਜਦੋਂ ਉਹ ਭਾਈਚਾਰੇ, ਸਥਾਨ ਜਾਂ ਡਿਲੀਵਰੀ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰ ਸਕਦੇ ਹਨ। ਟੀਮਾਂ ਸਥਾਨਕ ਰਹਿੰਦ-ਖੂੰਹਦ, ਪਾਣੀ ਅਤੇ ਸਥਾਨ ਦੇ ਨਿਯਮਾਂ ਦੀ ਪਾਲਣਾ ਕਰਦੀਆਂ ਹਨ।"
  },
  "Learning": {
    en: "Learning",
    pa: "ਸਿੱਖਣਾ"
  },
  "Punjabi Samvad records practical improvements from its water-conservation and environmental-awareness work and applies them to later activities where they fit.": {
    en: "Punjabi Samvad records practical improvements from its water-conservation and environmental-awareness work and applies them to later activities where they fit.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਆਪਣੇ ਜਲ-ਸੰਭਾਲ ਅਤੇ ਵਾਤਾਵਰਣ-ਜਾਗਰੂਕਤਾ ਕਾਰਜਾਂ ਤੋਂ ਵਿਹਾਰਕ ਸੁਧਾਰ ਰਿਕਾਰਡ ਕਰਦਾ ਹੈ ਅਤੇ ਉਹਨਾਂ ਨੂੰ ਬਾਅਦ ਦੀਆਂ ਗਤੀਵਿਧੀਆਂ 'ਤੇ ਲਾਗੂ ਕਰਦਾ ਹੈ ਜਿੱਥੇ ਉਹ ਢੁਕਵੇਂ ਹੁੰਦੇ ਹਨ।"
  },
  "Information you send": {
    en: "Information you send",
    pa: "ਉਹ ਜਾਣਕਾਰੀ ਜੋ ਤੁਸੀਂ ਭੇਜਦੇ ਹੋ"
  },
  "The website has no Punjabi Samvad contact form as of 13 August 2026. If you use an email, telephone, donation service or external social-media link, Punjabi Samvad or that provider may receive the information you choose to send, such as your name, contact details, organisation, payment details or message.": {
    en: "The website has no Punjabi Samvad contact form as of 13 August 2026. If you use an email, telephone, donation service or external social-media link, Punjabi Samvad or that provider may receive the information you choose to send, such as your name, contact details, organisation, payment details or message.",
    pa: "13 ਅਗਸਤ 2026 ਤੱਕ ਵੈੱਬਸਾਈਟ 'ਤੇ ਪੰਜਾਬੀ ਸੰਵਾਦ ਦਾ ਕੋਈ ਸੰਪਰਕ ਫਾਰਮ ਨਹੀਂ ਹੈ। ਜੇਕਰ ਤੁਸੀਂ ਈਮੇਲ, ਟੈਲੀਫੋਨ, ਦਾਨ ਸੇਵਾ ਜਾਂ ਬਾਹਰੀ ਸੋਸ਼ਲ-ਮੀਡੀਆ ਲਿੰਕ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹੋ, ਤਾਂ ਪੰਜਾਬੀ ਸੰਵਾਦ ਜਾਂ ਉਹ ਪ੍ਰਦਾਤਾ ਉਹ ਜਾਣਕਾਰੀ ਪ੍ਰਾਪਤ ਕਰ ਸਕਦਾ ਹੈ ਜੋ ਤੁਸੀਂ ਭੇਜਣ ਲਈ ਚੁਣਦੇ ਹੋ, ਜਿਵੇਂ ਕਿ ਤੁਹਾਡਾ ਨਾਮ, ਸੰਪਰਕ ਵੇਰਵੇ, ਸੰਸਥਾ, ਭੁਗਤਾਨ ਵੇਰਵੇ ਜਾਂ ਸੁਨੇਹਾ।"
  },
  "How Punjabi Samvad uses contact data": {
    en: "How Punjabi Samvad uses contact data",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਸੰਪਰਕ ਡੇਟਾ ਦੀ ਕਿਵੇਂ ਵਰਤੋਂ ਕਰਦਾ ਹੈ"
  },
  "Respond to your enquiry.": {
    en: "Respond to your enquiry.",
    pa: "ਤੁਹਾਡੀ ਪੁੱਛਗਿੱਛ ਦਾ ਜਵਾਬ ਦਿਓ।"
  },
  "Process a donation or requested activity.": {
    en: "Process a donation or requested activity.",
    pa: "ਦਾਨ ਜਾਂ ਬੇਨਤੀ ਕੀਤੀ ਗਤੀਵਿਧੀ ਦੀ ਪ੍ਰਕਿਰਿਆ ਕਰੋ।"
  },
  "Manage a partnership, volunteer or programme conversation.": {
    en: "Manage a partnership, volunteer or programme conversation.",
    pa: "ਭਾਈਵਾਲੀ, ਵਲੰਟੀਅਰ ਜਾਂ ਪ੍ਰੋਗਰਾਮ ਗੱਲਬਾਤ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ।"
  },
  "Keep finance, consent, complaint or compliance records.": {
    en: "Keep finance, consent, complaint or compliance records.",
    pa: "ਵਿੱਤ, ਸਹਿਮਤੀ, ਸ਼ਿਕਾਇਤ ਜਾਂ ਪਾਲਣਾ ਰਿਕਾਰਡ ਰੱਖੋ।"
  },
  "Protect the website and organisational systems.": {
    en: "Protect the website and organisational systems.",
    pa: "ਵੈੱਬਸਾਈਟ ਅਤੇ ਸੰਗਠਨਾਤਮਕ ਪ੍ਰਣਾਲੀਆਂ ਦੀ ਰੱਖਿਆ ਕਰੋ।"
  },
  "Facebook content": {
    en: "Facebook content",
    pa: "ਫੇਸਬੁੱਕ ਸਮੱਗਰੀ"
  },
  "The News and Updates page loads a live Facebook page plugin from Meta. When you visit that page, your browser connects to Facebook and may send Meta your IP address, device or browser information and page request. Meta may use cookies or similar technology under its own terms and privacy notice. Punjabi Samvad does not cache the Facebook feed on this website.": {
    en: "The News and Updates page loads a live Facebook page plugin from Meta. When you visit that page, your browser connects to Facebook and may send Meta your IP address, device or browser information and page request. Meta may use cookies or similar technology under its own terms and privacy notice. Punjabi Samvad does not cache the Facebook feed on this website.",
    pa: "ਨਿਊਜ਼ ਐਂਡ ਅੱਪਡੇਟਸ ਪੰਨਾ ਮੈਟਾ (Meta) ਤੋਂ ਲਾਈਵ ਫੇਸਬੁੱਕ ਪੇਜ ਪਲੱਗਇਨ ਲੋਡ ਕਰਦਾ ਹੈ। ਜਦੋਂ ਤੁਸੀਂ ਉਸ ਪੰਨੇ 'ਤੇ ਜਾਂਦੇ ਹੋ, ਤਾਂ ਤੁਹਾਡਾ ਬ੍ਰਾਊਜ਼ਰ ਫੇਸਬੁੱਕ ਨਾਲ ਕਨੈਕਟ ਹੁੰਦਾ ਹੈ ਅਤੇ ਮੈਟਾ ਨੂੰ ਤੁਹਾਡਾ IP ਪਤਾ, ਡਿਵਾਈਸ ਜਾਂ ਬ੍ਰਾਊਜ਼ਰ ਜਾਣਕਾਰੀ ਅਤੇ ਪੰਨੇ ਦੀ ਬੇਨਤੀ ਭੇਜ ਸਕਦਾ ਹੈ। ਮੈਟਾ ਆਪਣੀਆਂ ਸ਼ਰਤਾਂ ਅਤੇ ਗੋਪਨੀਯਤਾ ਨੋਟਿਸ ਦੇ ਤਹਿਤ ਕੂਕੀਜ਼ ਜਾਂ ਸਮਾਨ ਤਕਨਾਲੋਜੀ ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦਾ ਹੈ। ਪੰਜਾਬੀ ਸੰਵਾਦ ਇਸ ਵੈੱਬਸਾਈਟ 'ਤੇ ਫੇਸਬੁੱਕ ਫੀਡ ਨੂੰ ਕੈਸ਼ ਨਹੀਂ ਕਰਦਾ।"
  },
  "Sharing and retention": {
    en: "Sharing and retention",
    pa: "ਸ਼ੇਅਰਿੰਗ ਅਤੇ ਧਾਰਨ"
  },
  "Punjabi Samvad shares personal data with authorised staff, service providers, banks, payment providers, professional advisers or authorities when the purpose or law requires it. It does not sell personal data. The organisation keeps data for the applicable enquiry, programme, finance, legal or safeguarding period.": {
    en: "Punjabi Samvad shares personal data with authorised staff, service providers, banks, payment providers, professional advisers or authorities when the purpose or law requires it. It does not sell personal data. The organisation keeps data for the applicable enquiry, programme, finance, legal or safeguarding period.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਅਧਿਕਾਰਤ ਸਟਾਫ, ਸੇਵਾ ਪ੍ਰਦਾਤਾਵਾਂ, ਬੈਂਕਾਂ, ਭੁਗਤਾਨ ਪ੍ਰਦਾਤਾਵਾਂ, ਪੇਸ਼ੇਵਰ ਸਲਾਹਕਾਰਾਂ ਜਾਂ ਅਧਿਕਾਰੀਆਂ ਨਾਲ ਨਿੱਜੀ ਡੇਟਾ ਸਾਂਝਾ ਕਰਦਾ ਹੈ ਜਦੋਂ ਉਦੇਸ਼ ਜਾਂ ਕਾਨੂੰਨ ਨੂੰ ਇਸਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ। ਇਹ ਨਿੱਜੀ ਡੇਟਾ ਨਹੀਂ ਵੇਚਦਾ। ਸੰਸਥਾ ਲਾਗੂ ਪੁੱਛਗਿੱਛ, ਪ੍ਰੋਗਰਾਮ, ਵਿੱਤ, ਕਾਨੂੰਨੀ ਜਾਂ ਸੁਰੱਖਿਆ ਅਵਧੀ ਲਈ ਡੇਟਾ ਰੱਖਦੀ ਹੈ।"
  },
  "Your request": {
    en: "Your request",
    pa: "ਤੁਹਾਡੀ ਬੇਨਤੀ"
  },
  "Using the website": {
    en: "Using the website",
    pa: "ਵੈੱਬਸਾਈਟ ਦੀ ਵਰਤੋਂ ਕਰਨਾ"
  },
  "Punjabi Samvad publishes information about its organisation, programmes, partners and ways to participate. You may read and share links to public pages for lawful purposes.": {
    en: "Punjabi Samvad publishes information about its organisation, programmes, partners and ways to participate. You may read and share links to public pages for lawful purposes.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਆਪਣੀ ਸੰਸਥਾ, ਪ੍ਰੋਗਰਾਮਾਂ, ਭਾਈਵਾਲਾਂ ਅਤੇ ਭਾਗ ਲੈਣ ਦੇ ਤਰੀਕਿਆਂ ਬਾਰੇ ਜਾਣਕਾਰੀ ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਦਾ ਹੈ। ਤੁਸੀਂ ਕਾਨੂੰਨੀ ਉਦੇਸ਼ਾਂ ਲਈ ਜਨਤਕ ਪੰਨਿਆਂ ਦੇ ਲਿੰਕ ਪੜ੍ਹ ਅਤੇ ਸਾਂਝੇ ਕਰ ਸਕਦੇ ਹੋ।"
  },
  "You must not": {
    en: "You must not",
    pa: "ਤੁਹਾਨੂੰ ਨਹੀਂ ਕਰਨਾ ਚਾਹੀਦਾ"
  },
  "Attempt unauthorised access or disrupt the website.": {
    en: "Attempt unauthorised access or disrupt the website.",
    pa: "ਅਣਅਧਿਕਾਰਤ ਪਹੁੰਚ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰੋ ਜਾਂ ਵੈੱਬਸਾਈਟ ਵਿੱਚ ਵਿਘਨ ਪਾਓ।"
  },
  "Copy substantial content for commercial use without permission.": {
    en: "Copy substantial content for commercial use without permission.",
    pa: "ਬਿਨਾਂ ਇਜਾਜ਼ਤ ਵਪਾਰਕ ਵਰਤੋਂ ਲਈ ਠੋਸ ਸਮੱਗਰੀ ਦੀ ਨਕਲ ਕਰੋ।"
  },
  "Misrepresent Punjabi Samvad, its results or a partnership.": {
    en: "Misrepresent Punjabi Samvad, its results or a partnership.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ, ਇਸਦੇ ਨਤੀਜਿਆਂ ਜਾਂ ਭਾਈਵਾਲੀ ਨੂੰ ਗਲਤ ਰੂਪ ਵਿੱਚ ਪੇਸ਼ ਕਰੋ।"
  },
  "Use the name, logo or content to solicit funds without authority.": {
    en: "Use the name, logo or content to solicit funds without authority.",
    pa: "ਅਧਿਕਾਰ ਤੋਂ ਬਿਨਾਂ ਫੰਡ ਮੰਗਣ ਲਈ ਨਾਮ, ਲੋਗੋ ਜਾਂ ਸਮੱਗਰੀ ਦੀ ਵਰਤੋਂ ਕਰੋ।"
  },
  "Upload or transmit unlawful or harmful material through a linked service.": {
    en: "Upload or transmit unlawful or harmful material through a linked service.",
    pa: "ਕਿਸੇ ਲਿੰਕ ਕੀਤੀ ਸੇਵਾ ਰਾਹੀਂ ਗੈਰਕਾਨੂੰਨੀ ਜਾਂ ਨੁਕਸਾਨਦੇਹ ਸਮੱਗਰੀ ਅਪਲੋਡ ਜਾਂ ਪ੍ਰਸਾਰਿਤ ਕਰੋ।"
  },
  "Accuracy and professional advice": {
    en: "Accuracy and professional advice",
    pa: "ਸ਼ੁੱਧਤਾ ਅਤੇ ਪੇਸ਼ੇਵਰ ਸਲਾਹ"
  },
  "Punjabi Samvad checks material organisational information before publication and may correct or update it. Website content gives general information. It does not provide legal, medical, tax or mental-health advice.": {
    en: "Punjabi Samvad checks material organisational information before publication and may correct or update it. Website content gives general information. It does not provide legal, medical, tax or mental-health advice.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਪ੍ਰਕਾਸ਼ਨ ਤੋਂ ਪਹਿਲਾਂ ਮਹੱਤਵਪੂਰਨ ਸੰਗਠਨਾਤਮਕ ਜਾਣਕਾਰੀ ਦੀ ਜਾਂਚ ਕਰਦਾ ਹੈ ਅਤੇ ਇਸਨੂੰ ਠੀਕ ਜਾਂ ਅੱਪਡੇਟ ਕਰ ਸਕਦਾ ਹੈ। ਵੈੱਬਸਾਈਟ ਸਮੱਗਰੀ ਆਮ ਜਾਣਕਾਰੀ ਦਿੰਦੀ ਹੈ। ਇਹ ਕਾਨੂੰਨੀ, ਡਾਕਟਰੀ, ਟੈਕਸ ਜਾਂ ਮਾਨਸਿਕ-ਸਿਹਤ ਸਲਾਹ ਪ੍ਰਦਾਨ ਨਹੀਂ ਕਰਦੀ।"
  },
  "External services": {
    en: "External services",
    pa: "ਬਾਹਰੀ ਸੇਵਾਵਾਂ"
  },
  "External links, Facebook content, maps and payment services operate under their providers' terms. A link identifies a useful source or service and does not grant Punjabi Samvad control over that provider's content or availability.": {
    en: "External links, Facebook content, maps and payment services operate under their providers' terms. A link identifies a useful source or service and does not grant Punjabi Samvad control over that provider's content or availability.",
    pa: "ਬਾਹਰੀ ਲਿੰਕ, ਫੇਸਬੁੱਕ ਸਮੱਗਰੀ, ਨਕਸ਼ੇ ਅਤੇ ਭੁਗਤਾਨ ਸੇਵਾਵਾਂ ਉਨ੍ਹਾਂ ਦੇ ਪ੍ਰਦਾਤਾਵਾਂ ਦੀਆਂ ਸ਼ਰਤਾਂ ਅਧੀਨ ਕੰਮ ਕਰਦੀਆਂ ਹਨ। ਇੱਕ ਲਿੰਕ ਇੱਕ ਉਪਯੋਗੀ ਸਰੋਤ ਜਾਂ ਸੇਵਾ ਦੀ ਪਛਾਣ ਕਰਦਾ ਹੈ ਅਤੇ ਪੰਜਾਬੀ ਸੰਵਾਦ ਨੂੰ ਉਸ ਪ੍ਰਦਾਤਾ ਦੀ ਸਮੱਗਰੀ ਜਾਂ ਉਪਲਬਧਤਾ 'ਤੇ ਨਿਯੰਤਰਣ ਨਹੀਂ ਦਿੰਦਾ ਹੈ।"
  },
  "Rights": {
    en: "Rights",
    pa: "ਅਧਿਕਾਰ"
  },
  "Current website use": {
    en: "Current website use",
    pa: "ਮੌਜੂਦਾ ਵੈੱਬਸਾਈਟ ਦੀ ਵਰਤੋਂ"
  },
  "As of 13 August 2026, Punjabi Samvad runs no first-party advertising or analytics cookies on this website. The site uses hosting and browser technologies needed to deliver pages, fonts, images and security functions.": {
    en: "As of 13 August 2026, Punjabi Samvad runs no first-party advertising or analytics cookies on this website. The site uses hosting and browser technologies needed to deliver pages, fonts, images and security functions.",
    pa: "13 ਅਗਸਤ 2026 ਤੱਕ, ਪੰਜਾਬੀ ਸੰਵਾਦ ਇਸ ਵੈੱਬਸਾਈਟ 'ਤੇ ਕੋਈ ਵੀ ਫਸਟ-ਪਾਰਟੀ ਇਸ਼ਤਿਹਾਰਬਾਜ਼ੀ ਜਾਂ ਵਿਸ਼ਲੇਸ਼ਣ ਕੂਕੀਜ਼ ਨਹੀਂ ਚਲਾਉਂਦਾ ਹੈ। ਸਾਈਟ ਪੰਨਿਆਂ, ਫੌਂਟ, ਚਿੱਤਰਾਂ ਅਤੇ ਸੁਰੱਖਿਆ ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ ਲੋੜੀਂਦੀਆਂ ਹੋਸਟਿੰਗ ਅਤੇ ਬ੍ਰਾਊਜ਼ਰ ਤਕਨਾਲੋਜੀਆਂ ਦੀ ਵਰਤੋਂ ਕਰਦੀ ਹੈ।"
  },
  "Facebook embed": {
    en: "Facebook embed",
    pa: "ਫੇਸਬੁੱਕ ਐਮਬੈੱਡ"
  },
  "The News and Updates page includes live Facebook content. Loading that page connects your browser to Meta. Meta may read or set cookies and receive device, browser, IP and request information under its own policies, whether or not you have a Facebook account.": {
    en: "The News and Updates page includes live Facebook content. Loading that page connects your browser to Meta. Meta may read or set cookies and receive device, browser, IP and request information under its own policies, whether or not you have a Facebook account.",
    pa: "ਨਿਊਜ਼ ਐਂਡ ਅੱਪਡੇਟਸ ਪੰਨੇ ਵਿੱਚ ਲਾਈਵ ਫੇਸਬੁੱਕ ਸਮੱਗਰੀ ਸ਼ਾਮਲ ਹੈ। ਉਸ ਪੰਨੇ ਨੂੰ ਲੋਡ ਕਰਨ ਨਾਲ ਤੁਹਾਡਾ ਬ੍ਰਾਊਜ਼ਰ ਮੈਟਾ ਨਾਲ ਕਨੈਕਟ ਹੁੰਦਾ ਹੈ। ਮੈਟਾ ਕੂਕੀਜ਼ ਨੂੰ ਪੜ੍ਹ ਜਾਂ ਸੈੱਟ ਕਰ ਸਕਦਾ ਹੈ ਅਤੇ ਆਪਣੀਆਂ ਨੀਤੀਆਂ ਅਧੀਨ ਡਿਵਾਈਸ, ਬ੍ਰਾਊਜ਼ਰ, IP ਅਤੇ ਬੇਨਤੀ ਜਾਣਕਾਰੀ ਪ੍ਰਾਪਤ ਕਰ ਸਕਦਾ ਹੈ, ਚਾਹੇ ਤੁਹਾਡਾ ਕੋਈ ਫੇਸਬੁੱਕ ਖਾਤਾ ਹੈ ਜਾਂ ਨਹੀਂ।"
  },
  "Your controls": {
    en: "Your controls",
    pa: "ਤੁਹਾਡੇ ਨਿਯੰਤਰਣ"
  },
  "You can block or delete cookies through your browser. Blocking third-party content may prevent the Facebook feed from loading. You can use the direct Facebook link instead, subject to Meta's terms.": {
    en: "You can block or delete cookies through your browser. Blocking third-party content may prevent the Facebook feed from loading. You can use the direct Facebook link instead, subject to Meta's terms.",
    pa: "ਤੁਸੀਂ ਆਪਣੇ ਬ੍ਰਾਊਜ਼ਰ ਰਾਹੀਂ ਕੂਕੀਜ਼ ਨੂੰ ਬਲੌਕ ਜਾਂ ਡਿਲੀਟ ਕਰ ਸਕਦੇ ਹੋ। ਥਰਡ-ਪਾਰਟੀ ਸਮੱਗਰੀ ਨੂੰ ਬਲੌਕ ਕਰਨ ਨਾਲ ਫੇਸਬੁੱਕ ਫੀਡ ਲੋਡ ਹੋਣ ਤੋਂ ਰੁਕ ਸਕਦੀ ਹੈ। ਤੁਸੀਂ ਮੈਟਾ ਦੀਆਂ ਸ਼ਰਤਾਂ ਦੇ ਅਧੀਨ, ਸਿੱਧੇ ਫੇਸਬੁੱਕ ਲਿੰਕ ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹੋ।"
  },
  "Future changes": {
    en: "Future changes",
    pa: "ਭਵਿੱਖ ਵਿੱਚ ਤਬਦੀਲੀਆਂ"
  },
  "Punjabi Samvad will update this notice and add any consent control required by law before introducing non-essential first-party analytics, advertising or similar tracking.": {
    en: "Punjabi Samvad will update this notice and add any consent control required by law before introducing non-essential first-party analytics, advertising or similar tracking.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਗੈਰ-ਜ਼ਰੂਰੀ ਫਸਟ-ਪਾਰਟੀ ਵਿਸ਼ਲੇਸ਼ਣ, ਇਸ਼ਤਿਹਾਰਬਾਜ਼ੀ ਜਾਂ ਸਮਾਨ ਟਰੈਕਿੰਗ ਪੇਸ਼ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇਸ ਨੋਟਿਸ ਨੂੰ ਅਪਡੇਟ ਕਰੇਗਾ ਅਤੇ ਕਾਨੂੰਨ ਦੁਆਰਾ ਲੋੜੀਂਦਾ ਕੋਈ ਵੀ ਸਹਿਮਤੀ ਨਿਯੰਤਰਣ ਜੋੜੇਗਾ।"
  },
  "Try mental health, scholarships or policies": {
    en: "Try mental health, scholarships or policies",
    pa: "ਜਿਵੇਂ: ਮਾਨਸਿਕ ਸਿਹਤ, ਸਕਾਲਰਸ਼ਿਪ ਜਾਂ ਨੀਤੀਆਂ"
  },
  "Return home": {
    en: "Return home",
    pa: "ਵਾਪਸ ਮੁੱਖ ਪੰਨੇ 'ਤੇ ਜਾਓ"
  },
  "Rooted in Punjab, working with a national outlook": {
    en: "Rooted in Punjab, working with a national outlook",
    pa: "ਜੜਾਂ ਪੰਜਾਬ ਵਿੱਚ, ਨਜ਼ਰੀਆ ਪੂਰੇ ਭਾਰਤ ਲਈ"
  },
  "Women's learning": {
    en: "Women's learning",
    pa: "ਔਰਤਾਂ ਦੀ ਸਿੱਖਿਆ"
  },
  "Respect for culture": {
    en: "Respect for culture",
    pa: "ਸੱਭਿਆਚਾਰ ਦਾ ਸਤਿਕਾਰ"
  },
  "A creative voice in Punjabi Samvad’s early work.": {
    en: "A creative voice in Punjabi Samvad’s early work.",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੇ ਸ਼ੁਰੂਆਤੀ ਕੰਮ ਦੀ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਰਚਨਾਤਮਕ ਆਵਾਜ਼।"
  },
  "Padma Shri nominee": {
    en: "Padma Shri nominee",
    pa: "ਪਦਮ ਸ਼੍ਰੀ ਲਈ ਨਾਮਜ਼ਦ"
  },
  "TEDx speaker": {
    en: "TEDx speaker",
    pa: "TEDx ਵਕਤਾ"
  },
  "20+ years of community work": {
    en: "20+ years of community work",
    pa: "20 ਸਾਲ ਤੋਂ ਵੱਧ ਦਾ ਸਮੁਦਾਇਕ ਕੰਮ"
  },
  "Keeping a child’s education within reach.": {
    en: "Keeping a child’s education within reach.",
    pa: "ਬੱਚੇ ਦੀ ਸਿੱਖਿਆ ਨੂੰ ਉਸਦੀ ਪਹੁੰਚ ਵਿੱਚ ਬਣਾਈ ਰੱਖਣਾ।"
  },
  "Corporate Strategist": {
    en: "Corporate Strategist",
    pa: "ਕਾਰਪੋਰੇਟ ਰਣਨੀਤੀਕਾਰ"
  },
  "Founder & CEO": {
    en: "Founder & CEO",
    pa: "ਸੰਸਥਾਪਕ ਅਤੇ CEO"
  },
  "Chartered Accountant": {
    en: "Chartered Accountant",
    pa: "ਚਾਰਟਰਡ ਅਕਾਊਂਟੈਂਟ"
  },
  "Medical Professional": {
    en: "Medical Professional",
    pa: "ਚਿਕਿਤਸਾ ਪੇਸ਼ੇਵਰ"
  },
  "Lifetime Member": {
    en: "Lifetime Member",
    pa: "ਆਜੀਵਨ ਮੈਂਬਰ"
  },
  "Programme & Event Support": {
    en: "Programme & Event Support",
    pa: "ਪ੍ਰੋਗਰਾਮ ਅਤੇ ਸਮਾਗਮ ਸਹਿਯੋਗ"
  },
  "Writer": {
    en: "Writer",
    pa: "ਲੇਖਕ"
  },
  "Education Scholarship Supporter": {
    en: "Education Scholarship Supporter",
    pa: "ਸਿੱਖਿਆ ਸਕਾਲਰਸ਼ਿਪ ਸਹਿਯੋਗੀ"
  },
  "Veterinary Doctor": {
    en: "Veterinary Doctor",
    pa: "ਪਸ਼ੂ-ਚਿਕਿਤਸਕ"
  },
  "Reliable practical information": {
    en: "Reliable practical information",
    pa: "ਭਰੋਸੇਯੋਗ ਅਤੇ ਵਰਤੋਂਯੋਗ ਜਾਣਕਾਰੀ"
  },
  "Skills people can use at home, at work and in their communities.": {
    en: "Skills people can use at home, at work and in their communities.",
    pa: "ਅਜਿਹੇ ਹੁਨਰ, ਜੋ ਲੋਕ ਘਰ, ਕੰਮ ਅਤੇ ਆਪਣੇ ਸਮੁਦਾਇ ਵਿੱਚ ਵਰਤ ਸਕਣ।"
  },
  "Soap making": {
    en: "Soap making",
    pa: "ਸਾਬਣ ਬਣਾਉਣਾ"
  },
  "Masala preparation": {
    en: "Masala preparation",
    pa: "ਮਸਾਲੇ ਤਿਆਰ ਕਰਨਾ"
  },
  "Spice quality": {
    en: "Spice quality",
    pa: "ਮਸਾਲਿਆਂ ਦੀ ਗੁਣਵੱਤਾ"
  },
  "Phulkari": {
    en: "Phulkari",
    pa: "ਫੁਲਕਾਰੀ"
  },
  "Vermicomposting": {
    en: "Vermicomposting",
    pa: "ਵਰਮੀਕੰਪੋਸਟ ਤਿਆਰ ਕਰਨਾ"
  },
  "Five participants describe their next steps.": {
    en: "Five participants describe their next steps.",
    pa: "ਪੰਜ ਭਾਗੀਦਾਰ ਦੱਸਦੇ ਹਨ ਕਿ ਉਹ ਹੁਣ ਅੱਗੇ ਕੀ ਕਰ ਰਹੇ ਹਨ।"
  },
  "Home-based livelihood": {
    en: "Home-based livelihood",
    pa: "ਘਰੋਂ ਰੋਜ਼ੀ-ਰੋਟੀ"
  },
  "Street-food enterprise": {
    en: "Street-food enterprise",
    pa: "ਸਟ੍ਰੀਟ-ਫੂਡ ਕਾਰੋਬਾਰ"
  },
  "Vermicompost and counselling": {
    en: "Vermicompost and counselling",
    pa: "ਵਰਮੀਕੰਪੋਸਟ ਅਤੇ ਕਾਊਂਸਲਿੰਗ"
  },
  "Phulkari and design work": {
    en: "Phulkari and design work",
    pa: "ਫੁਲਕਾਰੀ ਅਤੇ ਡਿਜ਼ਾਈਨ ਦਾ ਕੰਮ"
  },
  "Name changed to protect the participant’s privacy.": {
    en: "Name changed to protect the participant’s privacy.",
    pa: "ਭਾਗੀਦਾਰ ਦੀ ਨਿੱਜਤਾ ਦੀ ਰੱਖਿਆ ਲਈ ਨਾਮ ਬਦਲਿਆ ਗਿਆ ਹੈ।"
  },
  "Name changed to protect the participant's privacy.": {
    en: "Name changed to protect the participant's privacy.",
    pa: "ਭਾਗੀਦਾਰ ਦੀ ਨਿੱਜਤਾ ਦੀ ਰੱਖਿਆ ਲਈ ਨਾਮ ਬਦਲਿਆ ਗਿਆ ਹੈ।"
  },
  "President's field note": {
    en: "President's field note",
    pa: "ਪ੍ਰਧਾਨ ਦੀ ਮੈਦਾਨੀ ਟਿੱਪਣੀ"
  },
  "Why we extended the training.": {
    en: "Why we extended the training.",
    pa: "ਅਸੀਂ ਟ੍ਰੇਨਿੰਗ ਦੀ ਮਿਆਦ ਕਿਉਂ ਵਧਾਈ।"
  },
  "Free, practical learning for young people preparing for further study, work and a changing digital world.": {
    en: "Free, practical learning for young people preparing for further study, work and a changing digital world.",
    pa: "ਅੱਗੇ ਦੀ ਪੜ੍ਹਾਈ, ਰੋਜ਼ਗਾਰ ਅਤੇ ਬਦਲਦੀ ਡਿਜ਼ਿਟਲ ਦੁਨੀਆ ਲਈ ਤਿਆਰੀ ਕਰ ਰਹੇ ਨੌਜਵਾਨਾਂ ਵਾਸਤੇ ਮੁਫ਼ਤ ਅਤੇ ਵਰਤੋਂਯੋਗ ਸਿੱਖਿਆ।"
  },
  "Free": {
    en: "Free",
    pa: "ਮੁਫ਼ਤ"
  },
  "No course fee": {
    en: "No course fee",
    pa: "ਕੋਈ ਕੋਰਸ ਫੀਸ ਨਹੀਂ"
  },
  "Certificate": {
    en: "Certificate",
    pa: "ਸਰਟੀਫਿਕੇਟ"
  },
  "Recognition on completion": {
    en: "Recognition on completion",
    pa: "ਪੂਰਾ ਕਰਨ 'ਤੇ ਪ੍ਰਮਾਣਪੱਤਰ"
  },
  "Digital productivity": {
    en: "Digital productivity",
    pa: "ਡਿਜ਼ਿਟਲ ਕਾਰਜ-ਕੁਸ਼ਲਤਾ"
  },
  "Employability skills": {
    en: "Employability skills",
    pa: "ਰੋਜ਼ਗਾਰਯੋਗਤਾ ਦੇ ਹੁਨਰ"
  },
  "Flexible online learning": {
    en: "Flexible online learning",
    pa: "ਲਚਕੀਲੀ ਆਨਲਾਈਨ ਸਿੱਖਿਆ"
  },
  "Skills and certificates for the career ahead.": {
    en: "Skills and certificates for the career ahead.",
    pa: "ਅੱਗੇ ਦੇ ਕਰੀਅਰ ਲਈ ਹੁਨਰ ਅਤੇ ਸਰਟੀਫਿਕੇਟ।"
  },
  "Choose a course and build your career skills.": {
    en: "Choose a course and build your career skills.",
    pa: "ਕੋਰਸ ਚੁਣੋ ਅਤੇ ਆਪਣੇ ਕਰੀਅਰ ਲਈ ਲੋੜੀਂਦੇ ਹੁਨਰ ਵਿਕਸਿਤ ਕਰੋ।"
  },
  "A free financial-literacy programme that makes everyday money decisions easier to understand and safer to manage.": {
    en: "A free financial-literacy programme that makes everyday money decisions easier to understand and safer to manage.",
    pa: "ਇੱਕ ਮੁਫ਼ਤ ਵਿੱਤੀ-ਸਾਖਰਤਾ ਪ੍ਰੋਗਰਾਮ, ਜੋ ਰੋਜ਼ਾਨਾ ਪੈਸਿਆਂ ਨਾਲ ਜੁੜੇ ਫ਼ੈਸਲਿਆਂ ਨੂੰ ਸਮਝਣਾ ਅਤੇ ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਸੰਭਾਲਣਾ ਆਸਾਨ ਬਣਾਉਂਦਾ ਹੈ।"
  },
  "16–55": {
    en: "16–55",
    pa: "16 ਤੋਂ 55 ਸਾਲ"
  },
  "Open to a wide age group": {
    en: "Open to a wide age group",
    pa: "ਵੱਖ-ਵੱਖ ਉਮਰ ਦੇ ਲੋਕਾਂ ਲਈ"
  },
  "5 hrs approximately": {
    en: "5 hrs approximately",
    pa: "ਲਗਭਗ 5 ਘੰਟੇ"
  },
  "10 practical modules": {
    en: "10 practical modules",
    pa: "10 ਵਰਤੋਂਯੋਗ ਮੋਡੀਊਲ"
  },
  "13 Indian languages": {
    en: "13 Indian languages",
    pa: "13 ਭਾਰਤੀ ਭਾਸ਼ਾਵਾਂ"
  },
  "Budgeting and saving": {
    en: "Budgeting and saving",
    pa: "ਬਜਟ ਬਣਾਉਣਾ ਅਤੇ ਬਚਤ"
  },
  "Banking and digital payments": {
    en: "Banking and digital payments",
    pa: "ਬੈਂਕਿੰਗ ਅਤੇ ਡਿਜ਼ਿਟਲ ਭੁਗਤਾਨ"
  },
  "Credit, debt and insurance": {
    en: "Credit, debt and insurance",
    pa: "ਕਰਜ਼ਾ, ਉਧਾਰ ਅਤੇ ਬੀਮਾ"
  },
  "Fraud prevention": {
    en: "Fraud prevention",
    pa: "ਧੋਖਾਧੜੀ ਤੋਂ ਬਚਾਅ"
  },
  "Money skills you can use every day.": {
    en: "Money skills you can use every day.",
    pa: "ਪੈਸਿਆਂ ਨਾਲ ਜੁੜੇ ਹੁਨਰ, ਜੋ ਹਰ ਰੋਜ਼ ਕੰਮ ਆਉਣ।"
  },
  "Build confidence with everyday money.": {
    en: "Build confidence with everyday money.",
    pa: "ਰੋਜ਼ਾਨਾ ਦੇ ਵਿੱਤੀ ਫ਼ੈਸਲਿਆਂ ਵਿੱਚ ਆਤਮਵਿਸ਼ਵਾਸ ਵਧਾਓ।"
  },
  "Mental-health programme reach": {
    en: "Mental-health programme reach",
    pa: "ਮਾਨਸਿਕ ਸਿਹਤ ਪ੍ਰੋਗਰਾਮਾਂ ਦੀ ਪਹੁੰਚ"
  },
  "Menstrual-health programme reach": {
    en: "Menstrual-health programme reach",
    pa: "ਮਹਾਵਾਰੀ ਸਿਹਤ ਪ੍ਰੋਗਰਾਮਾਂ ਦੀ ਪਹੁੰਚ"
  },
  "Substance-abuse awareness reach": {
    en: "Substance-abuse awareness reach",
    pa: "ਨਸ਼ਿਆਂ ਬਾਰੇ ਜਾਗਰੂਕਤਾ ਪ੍ਰੋਗਰਾਮਾਂ ਦੀ ਪਹੁੰਚ"
  },
  "HIV/AIDS awareness programmes": {
    en: "HIV/AIDS awareness programmes",
    pa: "HIV/AIDS ਜਾਗਰੂਕਤਾ ਪ੍ਰੋਗਰਾਮ"
  },
  "Engagement and feedback": {
    en: "Engagement and feedback",
    pa: "ਭਾਗੀਦਾਰੀ ਅਤੇ ਫੀਡਬੈਕ"
  },
  "Awareness change": {
    en: "Awareness change",
    pa: "ਜਾਗਰੂਕਤਾ ਵਿੱਚ ਬਦਲਾਅ"
  },
  "Learning and improvements": {
    en: "Learning and improvements",
    pa: "ਸਿੱਖਿਆ ਅਤੇ ਸੁਧਾਰ"
  },
  "Latest news & updates": {
    en: "Latest news & updates",
    pa: "ਤਾਜ਼ਾ ਖ਼ਬਰਾਂ ਅਤੇ ਅੱਪਡੇਟ"
  },
  "This timeline is loaded live from Facebook.": {
    en: "This timeline is loaded live from Facebook.",
    pa: "ਇਹ ਟਾਈਮਲਾਈਨ Facebook ਤੋਂ ਲਾਈਵ ਲੋਡ ਹੁੰਦੀ ਹੈ।"
  },
  "CSR Registration": {
    en: "CSR Registration",
    pa: "CSR ਰਜਿਸਟ੍ਰੇਸ਼ਨ"
  },
  "Bring your studies into community work.": {
    en: "Bring your studies into community work.",
    pa: "ਆਪਣੀ ਪੜ੍ਹਾਈ ਨੂੰ ਸਮੁਦਾਇਕ ਕੰਮ ਨਾਲ ਜੋੜੋ।"
  },
  "Learn through contribution": {
    en: "Learn through contribution",
    pa: "ਯੋਗਦਾਨ ਪਾ ਕੇ ਸਿੱਖੋ"
  },
  "Work connected to active programmes and community needs": {
    en: "Work connected to active programmes and community needs",
    pa: "ਚੱਲ ਰਹੇ ਪ੍ਰੋਗਰਾਮਾਂ ਅਤੇ ਸਮੁਦਾਇ ਦੀਆਂ ਲੋੜਾਂ ਨਾਲ ਜੁੜਿਆ ਕੰਮ"
  },
  "Learning through service": {
    en: "Learning through service",
    pa: "ਸੇਵਾ ਰਾਹੀਂ ਸਿੱਖਣਾ"
  },
  "A closer view of how social programmes are built.": {
    en: "A closer view of how social programmes are built.",
    pa: "ਸਮਾਜਿਕ ਪ੍ਰੋਗਰਾਮ ਕਿਵੇਂ ਤਿਆਰ ਹੁੰਦੇ ਹਨ, ਇਸਨੂੰ ਨੇੜੇ ਤੋਂ ਸਮਝੋ।"
  },
  "Literature and culture": {
    en: "Literature and culture",
    pa: "ਸਾਹਿਤ ਅਤੇ ਸੱਭਿਆਚਾਰ"
  },
  "Communication and awareness": {
    en: "Communication and awareness",
    pa: "ਸੰਚਾਰ ਅਤੇ ਜਾਗਰੂਕਤਾ"
  },
  "Literature, digital awareness and community engagement.": {
    en: "Literature, digital awareness and community engagement.",
    pa: "ਸਾਹਿਤ, ਡਿਜ਼ਿਟਲ ਜਾਗਰੂਕਤਾ ਅਤੇ ਸਮੁਦਾਇਕ ਭਾਗੀਦਾਰੀ।"
  },
  "Apply to intern": {
    en: "Apply to intern",
    pa: "ਇੰਟਰਨਸ਼ਿਪ ਲਈ ਅਰਜ਼ੀ ਦਿਓ"
  },
  "Tell us what you want to learn and contribute.": {
    en: "Tell us what you want to learn and contribute.",
    pa: "ਸਾਨੂੰ ਦੱਸੋ ਕਿ ਤੁਸੀਂ ਕੀ ਸਿੱਖਣਾ ਅਤੇ ਕੀ ਯੋਗਦਾਨ ਦੇਣਾ ਚਾਹੁੰਦੇ ਹੋ।"
  },
  "Include in your email": {
    en: "Include in your email",
    pa: "ਆਪਣੀ ਈਮੇਲ ਵਿੱਚ ਇਹ ਜਾਣਕਾਰੀ ਸ਼ਾਮਲ ਕਰੋ"
  },
  "Email an application": {
    en: "Email an application",
    pa: "ਅਰਜ਼ੀ ਈਮੇਲ ਕਰੋ"
  },
  "Offer your time, skill or subject expertise.": {
    en: "Offer your time, skill or subject expertise.",
    pa: "ਆਪਣਾ ਸਮਾਂ, ਹੁਨਰ ਜਾਂ ਵਿਸ਼ੇਸ਼ਗਿਆਤਾ ਸਾਂਝੀ ਕਰੋ।"
  },
  "SCAN & PAY WITH ANY UPI APP": {
    en: "SCAN & PAY WITH ANY UPI APP",
    pa: "ਕਿਸੇ ਵੀ UPI ਐਪ ਨਾਲ ਸਕੈਨ ਕਰਕੇ ਭੁਗਤਾਨ ਕਰੋ"
  },
  "Download QR Code": {
    en: "Download QR Code",
    pa: "QR ਕੋਡ ਡਾਊਨਲੋਡ ਕਰੋ"
  },
  "Donate Directly Via Razorpay": {
    en: "Donate Directly Via Razorpay",
    pa: "Razorpay ਰਾਹੀਂ ਸਿੱਧਾ ਦਾਨ ਕਰੋ"
  },
  "Donate Now": {
    en: "Donate Now",
    pa: "ਹੁਣੇ ਦਾਨ ਕਰੋ"
  },
  "100% safe and secure": {
    en: "100% safe and secure",
    pa: "100% ਸੁਰੱਖਿਅਤ"
  },
  "Direct Bank Transfer (For India Only)": {
    en: "Direct Bank Transfer (For India Only)",
    pa: "ਸਿੱਧਾ ਬੈਂਕ ਟ੍ਰਾਂਸਫਰ (ਕੇਵਲ ਭਾਰਤ ਲਈ)"
  },
  "Bank Name": {
    en: "Bank Name",
    pa: "ਬੈਂਕ ਦਾ ਨਾਮ"
  },
  "Account Name": {
    en: "Account Name",
    pa: "ਖਾਤੇ ਦਾ ਨਾਮ"
  },
  "Account Number": {
    en: "Account Number",
    pa: "ਖਾਤਾ ਨੰਬਰ"
  },
  "IFSC Code": {
    en: "IFSC Code",
    pa: "IFSC ਕੋਡ"
  },
  "SWIFT Code (for International Donations)": {
    en: "SWIFT Code (for International Donations)",
    pa: "SWIFT ਕੋਡ (ਅੰਤਰਰਾਸ਼ਟਰੀ ਦਾਨ ਲਈ)"
  },
  "Account Type": {
    en: "Account Type",
    pa: "ਖਾਤੇ ਦੀ ਕਿਸਮ"
  },
  "Name": {
    en: "Name",
    pa: "ਨਾਮ"
  },
  "Email": {
    en: "Email",
    pa: "ਈਮੇਲ"
  },
  "Your Message (optional)": {
    en: "Your Message (optional)",
    pa: "ਤੁਹਾਡਾ ਸੁਨੇਹਾ (ਇੱਛਿਕ)"
  },
  "Submit": {
    en: "Submit",
    pa: "ਭੇਜੋ"
  },
  "Registration Certificate": {
    en: "Registration Certificate",
    pa: "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਸਰਟੀਫਿਕੇਟ"
  },
  "NGO Darpan Registration": {
    en: "NGO Darpan Registration",
    pa: "NGO Darpan ਰਜਿਸਟ੍ਰੇਸ਼ਨ"
  },
  "12AB Approval": {
    en: "12AB Approval",
    pa: "12AB ਮਨਜ਼ੂਰੀ"
  },
  "Prevention of Sexual Harassment (POSH)": {
    en: "Prevention of Sexual Harassment (POSH)",
    pa: "ਕਾਰਜਸਥਲ 'ਤੇ ਜਿਨਸੀ ਉਤਪੀੜਨ ਦੀ ਰੋਕਥਾਮ (POSH)"
  },
  "Volunteer and intern policy": {
    en: "Volunteer and intern policy",
    pa: "ਵਲੰਟੀਅਰ ਅਤੇ ਇੰਟਰਨ ਨੀਤੀ"
  },
  "Let’s create meaningful change together.": {
    en: "Let’s create meaningful change together.",
    pa: "ਆਓ, ਮਿਲ ਕੇ ਅਰਥਪੂਰਨ ਬਦਲਾਅ ਲਿਆਈਏ।"
  },
  "Let’s turn it into a meaningful Samvad.": {
    en: "Let’s turn it into a meaningful Samvad.",
    pa: "ਆਓ, ਇਸਨੂੰ ਇੱਕ ਅਰਥਪੂਰਨ ਸੰਵਾਦ ਅਤੇ ਕਾਰਜ ਵਿੱਚ ਬਦਲਈਏ।"
  },
  "© 2026 Punjabi Samvad | Website built by Jaykaran Sagar": {
    en: "© 2026 Punjabi Samvad | Website built by Jaykaran Sagar",
    pa: "© 2026 ਪੰਜਾਬੀ ਸੰਵਾਦ | ਵੈੱਬਸਾਈਟ ਜੈਕਾਰਨ ਸਾਗਰ ਵੱਲੋਂ ਤਿਆਰ ਕੀਤੀ ਗਈ"
  },
  "results for": {
    en: "results for",
    pa: "ਨਤੀਜੇ"
  },
  "result for": {
    en: "result for",
    pa: "ਨਤੀਜਾ"
  },
  "pages and resources": {
    en: "pages and resources",
    pa: "ਪੰਨੇ ਅਤੇ ਸਰੋਤ"
  },
  "No matching pages yet.": {
    en: "No matching pages yet.",
    pa: "ਅਜੇ ਕੋਈ ਮੇਲ ਖਾਂਦੇ ਪੰਨੇ ਨਹੀਂ ਲੱਭੇ।"
  },
  "Try a broader phrase, or visit": {
    en: "Try a broader phrase, or visit",
    pa: "ਕੋਈ ਹੋਰ ਸ਼ਬਦ ਅਜ਼ਮਾਓ, ਜਾਂ"
  },
  "and ask us directly.": {
    en: "and ask us directly.",
    pa: "ਵਿਖੇ ਜਾ ਕੇ ਸਿੱਧਾ ਪੁੱਛੋ।"
  },
  "Search the website": {
    en: "Search the website",
    pa: "ਵੈੱਬਸਾਈਟ 'ਤੇ ਖੋਜ ਕਰੋ"
  },
  "Language": {
    en: "Language",
    pa: "ਭਾਸ਼ਾ"
  },
  "Language / ਭਾਸ਼ਾ": {
    en: "Language / ਭਾਸ਼ਾ",
    pa: "ਭਾਸ਼ਾ / Language"
  },
  "Search": {
    en: "Search",
    pa: "ਖੋਜੋ"
  },
  "Search ": {
    en: "Search ",
    pa: "ਖੋਜੋ "
  },
  "Find what you need": {
    en: "Find what you need",
    pa: "ਆਪਣੀ ਲੋੜ ਅਨੁਸਾਰ ਲੱਭੋ"
  },
  "Search Punjabi Samvad": {
    en: "Search Punjabi Samvad",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਖੋਜੋ"
  },
  "Find programmes, public-health work, impact, people, policies and ways to participate.": {
    en: "Find programmes, public-health work, impact, people, policies and ways to participate.",
    pa: "ਪ੍ਰੋਗਰਾਮ, ਜਨਤਕ ਸਿਹਤ ਕਾਰਜ, ਪ੍ਰਭਾਵ, ਵਿਅਕਤੀ, ਨੀਤੀਆਂ ਅਤੇ ਸ਼ਾਮਲ ਹੋਣ ਦੇ ਤਰੀਕੇ ਲੱਭੋ।"
  },
  "Find programmes, focus areas, impact information, policies and ways to take part.": {
    en: "Find programmes, focus areas, impact information, policies and ways to take part.",
    pa: "ਪ੍ਰੋਗਰਾਮ, ਮੁੱਖ ਖੇਤਰ, ਪ੍ਰਭਾਵ ਜਾਣਕਾਰੀ, ਨੀਤੀਆਂ ਅਤੇ ਭਾਗ ਲੈਣ ਦੇ ਤਰੀਕੇ ਲੱਭੋ।"
  },
  "Try mental health, scholarships or policies": {
    en: "Try mental health, scholarships or policies",
    pa: "ਮਾਨਸਿਕ ਸਿਹਤ, ਸਕਾਲਰਸ਼ਿਪ ਜਾਂ ਨੀਤੀਆਂ ਲਿਖ ਕੇ ਦੇਖੋ"
  },
  "Read in Punjabi (ਪੰਜਾਬੀ)": {
    en: "Read in Punjabi (ਪੰਜਾਬੀ)",
    pa: "ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਪੜ੍ਹੋ (Read in English)"
  },
  "Read in English": {
    en: "Read in English",
    pa: "ਪੰਜਾਬੀ ਵਿੱਚ ਪੜ੍ਹੋ (Read in Punjabi)"
  },
  "Close menu": {
    en: "Close menu",
    pa: "ਮੀਨੂ ਬੰਦ ਕਰੋ"
  },
  "Open menu": {
    en: "Open menu",
    pa: "ਮੀਨੂ ਖੋਲ੍ਹੋ"
  },
  "Close search": {
    en: "Close search",
    pa: "ਖੋਜ ਬੰਦ ਕਰੋ"
  },
  "Primary navigation": {
    en: "Primary navigation",
    pa: "ਮੁੱਖ ਨੈਵੀਗੇਸ਼ਨ"
  },
  "Punjabi Samvad social media": {
    en: "Punjabi Samvad social media",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਸੋਸ਼ਲ ਮੀਡੀਆ"
  },
  "Punjabi Samvad on Instagram": {
    en: "Punjabi Samvad on Instagram",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਇੰਸਟਾਗ੍ਰਾਮ 'ਤੇ"
  },
  "Jyoti Bawa on LinkedIn": {
    en: "Jyoti Bawa on LinkedIn",
    pa: "ਜੋਤੀ ਬਾਵਾ ਲਿੰਕਡਇਨ 'ਤੇ"
  },
  "Punjabi Samvad on YouTube": {
    en: "Punjabi Samvad on YouTube",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਯੂਟਿਊਬ 'ਤੇ"
  },
  "Punjabi Samvad videos on Facebook": {
    en: "Punjabi Samvad videos on Facebook",
    pa: "ਪੰਜਾਬੀ ਸੰਵਾਦ ਦੀਆਂ ਵੀਡੀਓਜ਼ ਫੇਸਬੁੱਕ 'ਤੇ"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language");
      if (saved === "pa" || saved === "en") return saved;
    }
    return "en";
  });

  useEffect(() => {
    document.documentElement.lang = language;
    if (language === "pa") {
      document.body.classList.add("lang-pa");
    } else {
      document.body.classList.remove("lang-pa");
    }
  }, [language]);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    localStorage.setItem("language", newLang);
  };

  const toggleLanguage = () => {
    const newLang = language === "en" ? "pa" : "en";
    setLanguage(newLang);
  };

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
