import fs from 'fs';

const filesToUpdate = [
  {
    path: 'src/components/PoliciesPage.tsx',
    strings: [
      "These policies guide how Punjabi Samvad operates, protects individuals and manages resources. The policies and statutory registers depend on the organisation's current structure and applicable law. Contact us for the current signed or approved document.",
      "Report a concern",
      "Use these contacts for a safeguarding, conduct, fraud, privacy or workplace concern. Call police or emergency services if someone faces immediate danger."
    ]
  },
  {
    path: 'src/components/PolicyDetailPage.tsx',
    strings: [
      "Version",
      "Published",
      "Review by",
      "Owner",
      "On this page",
      "Previous policy",
      "Next policy"
    ]
  },
  {
    path: 'src/components/SiteHeader.tsx',
    strings: [
      "Search Punjabi Samvad",
      "Find programmes, focus areas, impact information, policies and ways to take part."
    ]
  },
  {
    path: 'src/components/GalleryPage.tsx',
    strings: [
      "Work seen up close.",
      "Programmes, performances, public-health campaigns and community gatherings documented across Punjabi Samvad's work.",
      "Learn how the work is organised"
    ]
  },
  {
    path: 'src/components/GetInvolvedPage.tsx',
    strings: [
      "Internships and volunteering with Punjabi Samvad.",
      "Take on a focused assignment, work with people outside your usual academic setting and turn what you know into something a community programme can use.",
      "Experience with a purpose",
      "Defined work, practical exposure and a contribution you can explain",
      "Students have joined us from",
      "Experience you can use after the placement ends.",
      "An internship with Punjabi Samvad gives you a close look at the decisions behind public-interest work: how an issue is researched, how information is adapted for different audiences, how an activity is organised and how the work is documented afterwards.",
      "Your assignment is shaped around current programme needs and the skills you bring. You may research, write, prepare campaign material, support an event, organise records or help with digital communication. The scope is agreed before you begin, so you know what you are responsible for and what you should learn from it.",
      "Work that connects study with practice.",
      "Assignments are matched to the student's background and the work Punjabi Samvad is undertaking at the time.",
      "Featured two students who completed internships with us.",
      "Vinit and Pritish each completed a 60-hour Literature Promotion Internship. Their assignments show how one role can combine subject knowledge, communication and direct exposure to public-interest work.",
      "Vinit brought a computer-science perspective to a role centred on literature, language and reading culture. He supported literary campaigns and awareness programmes, worked with students and community members, and helped use literature as a starting point for discussion about education, culture and social concerns.",
      "His placement also included digital-awareness training on the responsible use of AI and ChatGPT for education, research, communication and community outreach. It gave him room to connect an emerging technical field with the human judgement needed in public-facing work.",
      "60-hour placement",
      "Literary and awareness campaigns",
      "Responsible AI for outreach",
      "Pritish worked across literary promotion, student engagement and community outreach. He assisted with campaigns that encouraged reading and language, supported awareness activity and took part in conversations that used literature to make educational and social subjects easier to discuss.",
      "He also participated in digital-awareness training focused on appropriate use of AI and ChatGPT. The placement asked him to communicate with different groups, adapt to work outside a university setting and understand how cultural activity can support wider social-awareness goals.",
      "Student and community engagement",
      "Digital-awareness training",
      "Build experience that belongs on more than a résumé.",
      "Choose a problem you want to understand and bring a skill you want to test. If a suitable placement is available, you will receive a clear scope of work connected to a current programme. You can leave with a stronger grasp of NGO work, practical examples to discuss in interviews and a better sense of where your abilities can be useful.",
      "Help us find the right fit",
      "Your university, course and current year",
      "Your preferred dates and available hours",
      "The issues or programme areas you want to explore",
      "The skills you can contribute and want to practise",
      "Your CV and any university requirements",
      "Your time and skills can change someone's life.",
      "You may be able to support an event, a training session, research, health education, the arts, communication or programme planning. Tell us what you do well and how much time you can offer; we will respond when that experience matches a current need."
    ]
  },
  {
    path: 'src/components/SearchPage.tsx',
    strings: [
      "What are you looking for?",
      "Search programmes, public-health work, impact, people, policies and ways to participate.",
      "Search "
    ]
  },
  {
    path: 'src/pages/PolicyIndexPage.tsx',
    strings: [
      "Policies",
      "Standards that guide how Punjabi Samvad works, protects people and uses resources."
    ]
  },
  {
    path: 'src/pages/NotFoundPage.tsx',
    strings: [
      "Page not found",
      "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
    ]
  },
  {
    path: 'src/pages/Home.tsx',
    strings: [
      "12AB Registered ",
      "80G "
    ]
  }
];

const languageContext = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

const allStrings = new Set<string>();
filesToUpdate.forEach(f => f.strings.forEach(s => allStrings.add(s)));

const missingStrings = Array.from(allStrings).filter(s => !languageContext.includes(`en: "${s.replace(/"/g, '\\"')}"`));

console.log(JSON.stringify(missingStrings, null, 2));
