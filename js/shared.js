/* ============================================================
   shared.js — Virtual Chandana chatbot + shared nav/footer/theme
   Data embedded inline — zero fetch, works on file:// + localhost
   ============================================================ */
'use strict';

/* ═══════════════════════════════════════════════════════════
   RESUME DATA — single source of truth
   Update this object to update ALL chatbot answers instantly
═══════════════════════════════════════════════════════════ */
const CHANDANA = {
  name:      'Chandana Sree Konduru',
  title:     'AI Product Manager & Global Product Strategist',
  email:     'chandanashree97@gmail.com',
  linkedin:  'https://www.linkedin.com/in/chandana-sree-konduru/',
  github:    'https://github.com/ChandanaSreeKonduru',
  portfolio: 'https://chandanasreekonduru.github.io/portfolio/',
  location:  'Omaha, NE, USA',
  workAuth:  'H4-EAD — authorized to work in the US, no sponsorship required',
  openTo:    'AI Product Manager, Product Analyst, Technical PM, UX-PM hybrid roles',
  remote:    'Open to remote, hybrid, or on-site across the US',
  years:     '6+',
  countries: 'USA, India, Nigeria, China, Mexico (not UK)',

  employment: [
    { role:'AI Product Lead', company:'Community AI Projects', location:'Omaha, NE', period:'June 2025 – February 2026' },
    { role:'Associate Product Manager', company:'ZKTeco India (Global R&D)', location:'Bangalore', period:'August 2023 – August 2024' },
    { role:'UI/UX Product Designer', company:'Data Foundry', location:'Bangalore', period:'January 2023 – June 2023' },
    { role:'Developer II / UI UX Designer', company:'Cybage Software', location:'Hyderabad & Pune', period:'February 2022 – December 2022' },
    { role:'Software Engineer', company:'NTT Data', location:'Bangalore', period:'October 2019 – January 2022' },
  ],

  education: [
    { degree:'PG Certificate, Data Science', school:'IIIT Bangalore', year:'2021' },
    { degree:'B.Tech, Computer Science', school:'JNTUA (Madanapalle Institute)', year:'2019' },
  ],

  skills: {
    ai:      'LLM API Integration, Prompt Engineering, Agentic AI Workflows, Computer Vision, NLP, TensorFlow, PyTorch, OpenAI API, Gemini API, Claude API, Model Evaluation',
    product: 'Roadmap Strategy, PRD/User Story Writing, Agile/Scrum, Jira, Confluence, Stakeholder Management, Product Lifecycle Management, Go-to-Market',
    data:    'SQL, Power BI, Tableau, Python, ETL, Data Visualization, Business Intelligence, Application Analytics',
    ux:      'Figma, User Research, Wireframing, Prototyping, Usability Testing, Design Thinking, Information Architecture, Adobe Creative Suite',
    tech:    'RESTful APIs, C#/.NET, React, Node.js, HTML/CSS, TypeScript, System Architecture, Microservices',
    cloud:   'AWS, Azure, Docker, Kubernetes, CI/CD, GraphQL',
    domain:  'Healthcare AI, Pharmacovigilance, E2B R2/R3, HIPAA, B2B SaaS, IoT, Fintech, Retail Tech, Hospitality',
  },

  projects: [
    {
      id: 'biotime',
      name: 'BioTime Cloud 2.0',
      url: 'projects/biotime-cloud.html',
      company: 'ZKTeco',
      category: 'B2B SaaS',
      desc: '4-country SaaS transformation (Nigeria, China, Mexico, India) for 10,000+ enterprise users. RESTful API migration delivered 35% system performance increase.',
      metrics: ['35% system performance increase', '10,000+ enterprise users', '4 countries', '+10% executive decision confidence'],
      keywords: ['saas', 'b2b', 'cloud', 'enterprise', 'biotime', 'api', 'platform', 'global', 'zkteco'],
    },
    {
      id: 'dfsafety',
      name: 'DF Safety',
      url: 'projects/df-safety.html',
      company: 'Data Foundry',
      category: 'Healthcare AI',
      desc: 'AI-powered pharmacovigilance platform. Raised AI acceptance from 30%→85% through explainable ML design. 100% E2B R2/R3 compliance, 40% training time reduction.',
      metrics: ['85% AI acceptance (from 30%)', '100% E2B R2/R3 compliant', '40% training time reduction'],
      keywords: ['healthcare', 'health', 'medical', 'pharma', 'pharmacovigilance', 'clinical', 'e2b', 'regulatory', 'cro', 'hipaa', 'df safety', 'data foundry'],
    },
    {
      id: 'scanit',
      name: 'Scan It Know It',
      url: 'projects/scan-it-know-it.html',
      company: 'Community Project',
      category: 'Agentic AI',
      desc: 'AI product recognition app built with Gemini API. Scan any product for instant ingredient, nutrition, or safety info. 92% accuracy, $0 infrastructure, shipped in 3 weeks.',
      metrics: ['92% recognition accuracy', '$0 infrastructure cost', '3-week build', '<5s response time'],
      keywords: ['scan', 'product recognition', 'gemini', 'computer vision', 'zero to one', 'agentic', 'llm', 'ai app', 'scan it know it'],
    },
    {
      id: 'budget',
      name: 'Budget Management',
      url: 'projects/budget-management.html',
      company: 'Community Project',
      category: 'Agentic AI / Fintech',
      desc: 'AI finance platform built with 70% AI-generated code. Privacy-first, no bank account required. 68% Day-30 retention, 40% spending reduction for users.',
      metrics: ['68% Day-30 retention', '40% spending reduction', '70% AI-generated code', 'Privacy-first'],
      keywords: ['budget', 'finance', 'spending', 'fintech', 'money', 'budget management'],
    },
    {
      id: 'zkdigimax',
      name: 'ZKDigiMax-ESL',
      url: 'projects/zk-digimax.html',
      company: 'ZKTeco',
      category: 'IoT',
      desc: 'IoT Electronic Shelf Label system for retail stores. Reduced pricing errors 3%, cut inventory search time 10% through human-centered mobile app design.',
      metrics: ['3% pricing error reduction', '10% inventory search time saved', '+2% digital engagement'],
      keywords: ['iot', 'hardware', 'shelf', 'esl', 'digimax', 'retail', 'internet of things', 'device', 'zkteco'],
    },
    {
      id: 'wyndham',
      name: 'Wyndham Hotels & Resorts',
      url: 'projects/wyndham-hotels.html',
      company: 'NTT Data',
      category: 'Hospitality',
      desc: 'Mobile-first booking portal with offline capability. +5% guest engagement, +3% conversion, 10% fewer support tickets.',
      metrics: ['+5% guest engagement', '+3% booking conversion', '10% fewer support tickets'],
      keywords: ['wyndham', 'hotel', 'hospitality', 'booking', 'travel', 'mobile app'],
    },
    {
      id: 'tenet',
      name: 'Tenet Healthcare',
      url: 'projects/tenet-healthcare.html',
      company: 'NTT Data',
      category: 'Healthcare',
      desc: 'Simplified medical billing UX — 5% task confusion reduction, 5% task completion time improvement. HIPAA-compliant React/Node stack.',
      metrics: ['-5% task confusion', '-5% task completion time', '50% data integration accuracy', 'HIPAA compliant'],
      keywords: ['tenet', 'medical billing', 'billing', 'hospital', 'healthcare ux'],
    },
    {
      id: 'experlogix',
      name: 'Experlogix CPQ',
      url: 'projects/experlogix-cpq.html',
      company: 'Cybage / NTT Data',
      category: 'Enterprise SaaS',
      desc: 'Cloud CPQ platform maintenance with proactive monitoring using C# and SQL. High availability engineering, DevOps/CI-CD delivery.',
      metrics: ['High availability SaaS', 'C# .NET proactive monitoring', 'DevOps/CI-CD'],
      keywords: ['experlogix', 'cpq', 'configure price quote', 'c#', '.net', 'cybage', 'enterprise'],
    },
  ],

  /* ATS keywords — scored against job descriptions */
  atsKeywords: [
    'AI Product Manager','Product Manager','Technical Product Manager','Associate Product Manager',
    'LLM','GPT','Gemini','Claude','Machine Learning','AI','ML','Artificial Intelligence','Generative AI','NLP','Computer Vision',
    'B2B SaaS','Enterprise SaaS','Cloud Platform','SaaS','Cloud',
    'Healthcare','Medical','HIPAA','Pharmacovigilance','E2B','Clinical','Regulatory',
    'IoT','Internet of Things','Hardware','Device',
    'Agile','Scrum','Sprint','Backlog','Roadmap','OKR','KPI','PRD','User Story',
    'SQL','Power BI','Tableau','Data Analytics','Python','ETL',
    'Figma','UX Research','User Research','Wireframe','Prototyping',
    'RESTful API','API Integration','Azure','AWS','Docker','CI/CD',
    'Jira','Confluence','Stakeholder Management','Cross-functional',
    'Go-to-Market','GTM','Product Launch','Zero to One',
    'Global','International','Multi-country',
    'H4-EAD','No sponsorship','Work Authorization',
    'Prompt Engineering','Agentic AI','LLM Integration',
    'React','Node.js','TypeScript','JavaScript','C#','.NET',
    'Fintech','Finance','Banking','Payments',
    'Retail','E-commerce','Consumer',
  ],
};

/* ═══════════════════════════════════════════════════════════
   CHATBOT Q&A — keyword → first-person answer
═══════════════════════════════════════════════════════════ */
const QA = [
  {
    keys: ['hi','hello','hey','good morning','good afternoon','good evening','howdy'],
    answer: () => `Hi! I'm Virtual Chandana. Ask me about my experience, skills, or paste a job description to see how I match. What would you like to know?`,
  },
  {
    keys: ['your name','who are you','what are you','introduce yourself','about you'],
    answer: () => `I'm Virtual Chandana — an AI portfolio assistant built on Chandana Sree Konduru's resume data. I can answer questions about her 6+ years of AI PM experience, specific case studies, or evaluate how she matches a job description.`,
  },
  {
    keys: ['available','open to work','looking for job','hire','hiring','start','notice period','when can'],
    answer: () => `I'm immediately available — no notice period needed. I hold H4-EAD work authorization, so no sponsorship is required. I'm open to AI PM, Product Analyst, Technical PM, and UX-PM hybrid roles, remote or on-site across the US. Reach me at ${CHANDANA.email}.`,
    link: 'about.html',
  },
  {
    keys: ['remote','location','where','omaha','relocate','hybrid','onsite','on-site','timezone'],
    answer: () => `I'm based in Omaha, NE and open to remote, hybrid, or on-site roles across the US. I've led global teams across 5 countries, so timezone flexibility is second nature.`,
    link: 'about.html',
  },
  {
    keys: ['visa','sponsorship','work auth','h4','ead','h-4','authorization','eligible','citizen'],
    answer: () => `I hold H4-EAD work authorization — I can start immediately with no visa sponsorship required.`,
  },
  {
    keys: ['ai experience','llm experience','ai and llm','machine learning','ml','gpt','gemini','claude api','language model','artificial intelligence','generative','prompt engineer','agentic'],
    answer: () => `My AI/ML PM experience spans multiple domains: I built Scan It Know It using the Gemini API (92% accuracy, $0 infrastructure, 3 weeks), raised AI acceptance from 30%→85% at Data Foundry's pharmacovigilance platform, and led the Budget Management AI platform with 68% Day-30 retention. I specialize in LLM API integration, agentic AI workflows, and prompt engineering. Want to see the full case study?`,
    link: 'projects/scan-it-know-it.html',
  },
  {
    keys: ['healthcare','medical','hipaa','pharma','pharmacovigilance','clinical','e2b','regulatory','cro','life science'],
    answer: () => `Healthcare is one of my strongest domains. At Data Foundry I was PM for DF Safety — an AI pharmacovigilance platform where I raised AI acceptance from 30% to 85% through explainable ML design, with 100% E2B R2/R3 compliance and 40% training time reduction. At NTT Data I simplified medical billing UX for Tenet Healthcare with a HIPAA-compliant React/Node stack.`,
    link: 'projects/df-safety.html',
  },
  {
    keys: ['saas','b2b','cloud','enterprise','biotime','platform','global rollout','multi-country'],
    answer: () => `My flagship enterprise SaaS case study is BioTime Cloud 2.0 at ZKTeco — I led a 4-country transformation (Nigeria, China, Mexico, India) for 10,000+ enterprise users, delivering a 35% system performance increase through RESTful API migration and a Super Admin Dashboard that boosted executive confidence 10%.`,
    link: 'projects/biotime-cloud.html',
  },
  {
    keys: ['iot','hardware','shelf','esl','digimax','retail','internet of things'],
    answer: () => `At ZKTeco I managed ZKDigiMax-ESL — an IoT Electronic Shelf Label system for retail stores. I reduced pricing errors 3% and cut inventory search time 10% through human-centered mobile app design and cross-functional hardware/firmware PM leadership.`,
    link: 'projects/zk-digimax.html',
  },
  {
    keys: ['scan it','product recognition','receipt','gemini','zero to one','scan it know it'],
    answer: () => `Scan It Know It is my zero-to-one AI product — it scans any product or receipt for instant ingredient, nutrition, or safety info. Built with Gemini API: 92% accuracy, <5s response, $0 infrastructure, shipped in 3 weeks.`,
    link: 'projects/scan-it-know-it.html',
  },
  {
    keys: ['budget','finance','spending','fintech','money management','budget management'],
    answer: () => `Budget Management is my AI finance platform — built with 70% AI-generated code using agentic development practices. Privacy-first (no bank account required), 68% Day-30 retention, and 40% spending reduction for beta users.`,
    link: 'projects/budget-management.html',
  },
  {
    keys: ['wyndham','hotel','hospitality','booking','travel'],
    answer: () => `At NTT Data I built the mobile-first booking portal for Wyndham Hotels & Resorts — 5% guest engagement increase, 3% conversion lift, 10% fewer support tickets, with offline capability for hotel staff.`,
    link: 'projects/wyndham-hotels.html',
  },
  {
    keys: ['tenet','medical billing','billing','hospital'],
    answer: () => `For Tenet Healthcare at NTT Data I simplified complex medical billing UX — reducing task confusion 5%, improving task completion time 5%, on a HIPAA-compliant React/Node.js stack with 50% data integration accuracy improvement.`,
    link: 'projects/tenet-healthcare.html',
  },
  {
    keys: ['experlogix','cpq','configure price','cybage','c#','.net'],
    answer: () => `At Cybage Software I was Developer II on the Experlogix cloud CPQ platform — proactive monitoring with C# and SQL, DevOps/CI-CD delivery, and high-availability engineering for enterprise customers.`,
    link: 'projects/experlogix-cpq.html',
  },
  {
    keys: ['strongest','best','top case study','highlight','showcase','impressive','standout'],
    answer: () => `Three standout projects: (1) BioTime Cloud 2.0 — 35% perf gain, 4-country enterprise SaaS. (2) DF Safety — 85% AI acceptance from 30%, exceptional in regulated healthcare AI. (3) Scan It Know It — zero-to-one Gemini API app in 3 weeks at $0. Each shows a different dimension of my PM range. Want to see the full case study?`,
    link: 'work.html',
  },
  {
    keys: ['skill','skills','list skill','tools','technology','stack','what can you','what do you know','expertise','tech stack'],
    answer: () => `My core skills:\n• AI/ML: LLM APIs, Prompt Engineering, Agentic Workflows, Computer Vision, NLP\n• Product: Roadmapping, PRD Writing, Agile/Scrum, Jira, OKRs\n• Data: SQL, Power BI, Tableau, Python, ETL\n• UX: Figma, User Research, Wireframing, Usability Testing\n• Tech: RESTful APIs, C#/.NET, React, Node.js, Azure, AWS\n• Domains: Healthcare AI, Pharmacovigilance, B2B SaaS, IoT, Fintech`,
    link: 'experience.html',
  },
  {
    keys: ['experience','background','career','history','resume','cv','work history','what have you done','years'],
    answer: () => `6+ years across:\n• AI Product Lead — Community Projects, Omaha (Jun 2025–Feb 2026)\n• Associate PM — ZKTeco India (Aug 2023–Aug 2024)\n• UI/UX Product Designer — Data Foundry (Jan–Jun 2023)\n• Developer II — Cybage Software (Feb–Dec 2022)\n• Software Engineer — NTT Data (Oct 2019–Jan 2022)\nIndustries: B2B SaaS, Healthcare AI, IoT, Fintech, Hospitality.`,
    link: 'experience.html',
  },
  {
    keys: ['education','degree','iiit','jntu','data science','computer science','qualification','studied','university'],
    answer: () => `PG Certificate in Data Science from IIIT Bangalore (2021) and B.Tech in Computer Science from JNTUA / Madanapalle Institute (2019). My data science background directly informs how I approach AI product metrics and model evaluation.`,
    link: 'about.html',
  },
  {
    keys: ['country','countries','global','international','nigeria','mexico','china','india','uk','united kingdom','where have you worked'],
    answer: () => `I've shipped products across the USA, India, Nigeria, China, and Mexico — primarily through the 4-country SaaS rollout at ZKTeco. I have not worked in the UK (my IIIT programme had a UK academic partner, but no UK employer or client work).`,
    link: 'projects/biotime-cloud.html',
  },
  {
    keys: ['contact','email','mail id','mailid','reach','connect','linkedin','schedule','call','how to contact','get in touch'],
    answer: () => `Email me at ${CHANDANA.email} or connect on LinkedIn: linkedin.com/in/chandana-sree-konduru/. I typically respond within 24 hours and am happy to jump on a call to discuss any role.`,
    link: 'about.html',
  },
  {
    keys: ['salary','compensation','pay','rate','expected','ctc'],
    answer: () => `For compensation details, let's connect directly — ${CHANDANA.email}. I'm open to discussing based on role scope, location, and company stage.`,
  },
  {
    keys: ['ats','ats score','score my','evaluate','fit for','match','job description paste','jd'],
    answer: () => `Paste your full job description and I'll run an ATS compatibility analysis — keyword match score, domain alignment, and which of my case studies to lead with for that specific role. Go ahead and paste it!`,
  },
  {
    keys: ['project','projects','work','portfolio','case study','case studies','what have you built','what did you build'],
    answer: () => `I have 8 case studies: BioTime Cloud 2.0 (Enterprise SaaS), DF Safety (Healthcare AI), Scan It Know It (Agentic AI), Budget Management (Fintech AI), ZKDigiMax-ESL (IoT), Wyndham Hotels (Hospitality), Tenet Healthcare (Medical UX), and Experlogix CPQ (Enterprise). Want to dive into any specific one?`,
    link: 'work.html',
  },
  {
    keys: ['ux','design','figma','user research','wireframe','prototype','ui','user experience','product design'],
    answer: () => `I have a strong UX foundation — I designed the explainable AI interface for DF Safety's pharmacovigilance platform (Figma), led human-centered design for ZKDigiMax-ESL, and simplified medical billing UX for Tenet Healthcare. My toolkit: Figma, user research, wireframing, usability testing, and design thinking.`,
    link: 'projects/df-safety.html',
  },
  {
    keys: ['agile','scrum','sprint','jira','confluence','project management','delivery','roadmap','prd'],
    answer: () => `Agile/Scrum is my primary delivery methodology across all roles. I've run sprints for global teams, written PRDs and user stories, managed backlogs in Jira, and tracked milestones across 4-country product rollouts.`,
    link: 'experience.html',
  },
  {
    keys: ['sql','power bi','tableau','data','analytics','python','dashboard','kpi','metrics','etl'],
    answer: () => `My data skills: SQL, Python, Power BI, Tableau, ETL, and application analytics. I use data to define KPIs, track product metrics, and build executive dashboards — like the Super Admin Dashboard at ZKTeco that improved decision confidence by 10%.`,
    link: 'experience.html',
  },
];

/* ═══════════════════════════════════════════════════════════
   ATS SCORER
═══════════════════════════════════════════════════════════ */
function runATS(jd) {
  const jdL = jd.toLowerCase();
  const kws  = CHANDANA.atsKeywords;
  const matched = kws.filter(k => jdL.includes(k.toLowerCase()));
  const pct     = Math.round((matched.length / kws.length) * 100);
  const display = Math.max(pct, 10); // floor so it never shows 0

  let emoji, label;
  if      (display >= 75) { emoji = '🟢'; label = 'Strong Match'; }
  else if (display >= 50) { emoji = '🟡'; label = 'Good Match'; }
  else if (display >= 30) { emoji = '🟠'; label = 'Partial Match'; }
  else                    { emoji = '🔴'; label = 'Low Match — key skills may differ'; }

  /* Domain clusters */
  const clusters = {
    'AI / LLM':        ['llm','gpt','gemini','claude','ai','machine learning','ml','generative','nlp','prompt','agentic'],
    'Healthcare':      ['healthcare','medical','hipaa','pharma','pharmacovigilance','clinical','e2b','regulatory'],
    'SaaS / Cloud':    ['saas','cloud','b2b','enterprise','platform','api','azure','aws'],
    'Data Analytics':  ['sql','power bi','tableau','analytics','dashboard','kpi','python','etl'],
    'Product Mgmt':    ['product manager','roadmap','okr','prd','agile','scrum','stakeholder','go-to-market','user research'],
    'UX / Design':     ['figma','ux','design','wireframe','user testing','prototype'],
    'IoT / Hardware':  ['iot','internet of things','hardware','device','embedded'],
    'Fintech':         ['fintech','finance','banking','payments','financial'],
  };

  const strong = [], partial = [];
  Object.entries(clusters).forEach(([name, terms]) => {
    const hits = terms.filter(t => jdL.includes(t)).length;
    if (hits >= 2)      strong.push(name);
    else if (hits === 1) partial.push(name);
  });

  /* Best project to lead with */
  let lead = '';
  if (/healthcare|pharma|clinical|e2b/i.test(jd))         lead = '\n💡 Lead with: DF Safety (85% AI acceptance) + Tenet Healthcare';
  else if (/saas|enterprise|b2b/i.test(jd))               lead = '\n💡 Lead with: BioTime Cloud 2.0 (35% perf gain, 4 countries, 10K users)';
  else if (/ai|llm|machine learning|generative/i.test(jd)) lead = '\n💡 Lead with: DF Safety + Scan It Know It (Gemini API, 92% accuracy)';
  else if (/iot|hardware|retail/i.test(jd))               lead = '\n💡 Lead with: ZKDigiMax-ESL (IoT PM, hardware-software cross-functional)';
  else if (/fintech|finance|banking/i.test(jd))           lead = '\n💡 Lead with: Budget Management AI (68% retention, privacy-first design)';

  let out = `${emoji} ATS Match: ${display}% — ${label}\n`;
  out += `Matched ${matched.length} / ${kws.length} keywords\n`;
  if (strong.length)   out += `\n✅ Strong alignment:\n${strong.map(d=>'  • '+d).join('\n')}`;
  if (partial.length)  out += `\n\n🔶 Partial alignment:\n${partial.map(d=>'  • '+d).join('\n')}`;
  out += lead;
  out += `\n\n📧 Ready to discuss? ${CHANDANA.email}`;
  return out;
}

/* ═══════════════════════════════════════════════════════════
   ANSWER ENGINE
═══════════════════════════════════════════════════════════ */
function getAnswer(input) {
  const q = input.toLowerCase().trim();

  /* ATS — long text or JD language */
  const isJD = input.length > 160 ||
    /job description|requirements|qualifications|we.?re looking|responsibilities|must.?have|years of experience|the ideal candidate|you will|preferred skills/i.test(input);
  if (isJD) return { answer: runATS(input), link: null };

  /* Project keyword match first (most specific) */
  for (const proj of CHANDANA.projects) {
    if (proj.keywords.some(k => q.includes(k))) {
      return {
        answer: `${proj.desc}\n\nKey metrics: ${proj.metrics.join(' · ')}\n\nWant to see the full case study?`,
        link: proj.url,
      };
    }
  }

  /* FAQ match */
  for (const entry of QA) {
    if (entry.keys.some(k => q.includes(k))) {
      const ans = typeof entry.answer === 'function' ? entry.answer() : entry.answer;
      return { answer: ans, link: entry.link || null };
    }
  }

  /* Fallback */
  return {
    answer: `I can help with that! Ask me about my AI experience, healthcare background, enterprise SaaS work, specific case studies, or paste a job description for an ATS score. What would you like to know?`,
    link: 'work.html',
  };
}

/* ═══════════════════════════════════════════════════════════
   CHATBOT UI
═══════════════════════════════════════════════════════════ */
function root() { return location.pathname.includes('/projects/') ? '../' : ''; }

function buildChatbotHTML() {
  const R = root();
  return `
<button class="chatbot-fab" id="chatbotFab" aria-label="Open AI Portfolio Assistant">
  <img src="${R}images/profile image.png" alt="" onerror="this.style.display='none';this.parentElement.textContent='💬'">
</button>
<div class="chatbot-panel" id="chatbotPanel" role="dialog" aria-label="Virtual Chandana">
  <div class="chatbot-header">
    <div class="chatbot-avatar">
      <img src="${R}images/profile image.png" alt="" onerror="this.style.display='none'">
    </div>
    <div class="chatbot-info">
      <h4>Virtual Chandana</h4>
      <p>AI Portfolio Assistant · No API calls</p>
    </div>
    <button class="chatbot-close" onclick="closeChatPanel()" aria-label="Close">×</button>
  </div>
  <div class="chatbot-messages" id="chatMessages">
    <div class="chat-msg bot"><div class="chat-bubble">Hi! I'm Virtual Chandana. Ask me about my experience, skills, or paste a job description to see how I match. 👋</div></div>
    <div id="starterChips" class="chat-chips">
      <button class="chip" onclick="useChip('What is your AI and LLM experience?')">AI experience?</button>
      <button class="chip" onclick="useChip('Have you worked in healthcare?')">Healthcare?</button>
      <button class="chip" onclick="useChip('What is your strongest case study?')">Best project?</button>
      <button class="chip" onclick="useChip('Are you open to remote roles?')">Remote / visa?</button>
      <button class="chip" onclick="useChip('list your skills')">List skills</button>
      <button class="chip" onclick="useChip('what is your email')">Contact?</button>
    </div>
  </div>
  <div class="chatbot-input-row">
    <input id="chatInput" type="text" placeholder="Ask about skills, experience, or paste a JD for ATS score…" autocomplete="off">
    <button id="chatSend" aria-label="Send">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
    </button>
  </div>
</div>`;
}

/* UI helpers */
window.openChatPanel  = () => { document.getElementById('chatbotPanel')?.classList.add('open'); setTimeout(()=>document.getElementById('chatInput')?.focus(),80); };
window.closeChatPanel = () => document.getElementById('chatbotPanel')?.classList.remove('open');
window.triggerPrompt  = (t) => { openChatPanel(); const i=document.getElementById('chatInput'); if(i){i.value=t;setTimeout(sendMsg,60);} };
window.useChip        = (t) => { document.getElementById('starterChips')?.remove(); window.triggerPrompt(t); };

function addBotMsg(text, link) {
  const msgs = document.getElementById('chatMessages'); if(!msgs) return;
  const w = document.createElement('div'); w.className='chat-msg bot';
  const b = document.createElement('div'); b.className='chat-bubble';
  b.textContent = text;
  if (link) {
    const R = root();
    b.innerHTML = escH(text) + `<br><br><a href="${R}${link}" class="chat-link">View details →</a>`;
  }
  w.appendChild(b); msgs.appendChild(w); msgs.scrollTop = msgs.scrollHeight;
}
function addUserMsg(text) {
  const msgs = document.getElementById('chatMessages'); if(!msgs) return;
  const w = document.createElement('div'); w.className='chat-msg user';
  const b = document.createElement('div'); b.className='chat-bubble';
  b.textContent = text; w.appendChild(b); msgs.appendChild(w); msgs.scrollTop = msgs.scrollHeight;
}
function addLoading() {
  const msgs = document.getElementById('chatMessages'); if(!msgs) return null;
  const w = document.createElement('div'); w.className='chat-msg bot loading';
  w.innerHTML='<div class="chat-bubble"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>';
  msgs.appendChild(w); msgs.scrollTop = msgs.scrollHeight; return w;
}
function escH(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>'); }

async function sendMsg() {
  const input = document.getElementById('chatInput'); if(!input) return;
  const text = input.value.trim(); if(!text) return;
  input.value = '';
  document.getElementById('starterChips')?.remove();
  addUserMsg(text);
  const loader = addLoading();
  await new Promise(r => setTimeout(r, 320 + Math.random()*380));
  loader?.remove();
  const { answer, link } = getAnswer(text);
  addBotMsg(answer, link);
}

/* ═══════════════════════════════════════════════════════════
   SHARED NAV + FOOTER + THEME
═══════════════════════════════════════════════════════════ */
function buildNav(active) {
  const R = root();
  const links = [['work.html','work'],['experience.html','experience'],['about.html','about']]
    .map(([href,label]) => `<a href="${R}${href}" class="nav-link${label===active?' active':''}">${label}</a>`).join('');
  return `<div class="header-inner">
    <a href="${R}index.html" class="logo">chandana<span>.</span></a>
    <nav class="nav-main" id="navMain">${links}</nav>
    <div class="header-actions">
      <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme"><span id="themeIcon">🌙</span></button>
      <a href="${R}resume.pdf" class="btn btn-primary btn-sm" download>resume ↓</a>
      <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu"><span></span><span></span><span></span></button>
    </div>
  </div>`;
}

function buildFooter() {
  return `<div class="footer-watermark">Chandana</div>
  <div class="footer-content">
    <div>
      <div class="footer-logo">chandana<span>.</span></div>
      <p class="footer-copyright">©2025 Chandana Konduru<br>Built with AI in Omaha, NE</p>
    </div>
    <div class="footer-socials">
      <a href="${CHANDANA.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn" class="social-btn"><svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.063 2.063 0 1 1 0-4.125 2.063 2.063 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
      <a href="${CHANDANA.github}" target="_blank" rel="noopener" aria-label="GitHub" class="social-btn"><svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg></a>
      <a href="mailto:${CHANDANA.email}" aria-label="Email" class="social-btn"><svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.278 24 3.433 24 5.457z"/></svg></a>
    </div>
  </div>`;
}

/* ═══════════════════════════════════════════════════════════
   CSS — injected into <head>
═══════════════════════════════════════════════════════════ */
const CSS = `
.chatbot-fab{position:fixed;bottom:1.5rem;right:1.5rem;width:54px;height:54px;border-radius:50%;background:var(--accent);border:none;cursor:pointer;box-shadow:0 4px 16px rgba(196,148,100,.32);transition:transform 150ms,box-shadow 150ms;display:flex;align-items:center;justify-content:center;overflow:hidden;z-index:1000;padding:0;}
.chatbot-fab:hover{transform:scale(1.08);}
.chatbot-fab img{width:100%;height:100%;object-fit:cover;border-radius:50%;}
.chatbot-panel{position:fixed;bottom:5rem;right:1.5rem;width:360px;max-height:520px;background:var(--bg-card);border:1px solid var(--border);border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,.14);display:flex;flex-direction:column;overflow:hidden;opacity:0;transform:translateY(14px) scale(.97);pointer-events:none;transition:opacity 200ms,transform 200ms;z-index:999;}
.chatbot-panel.open{opacity:1;transform:none;pointer-events:auto;}
.chatbot-header{padding:.875rem 1rem;background:var(--bg-secondary);border-bottom:1px solid var(--border);display:flex;align-items:center;gap:.625rem;flex-shrink:0;}
.chatbot-avatar{width:38px;height:38px;border-radius:50%;overflow:hidden;flex-shrink:0;border:1.5px solid var(--accent);}
.chatbot-avatar img{width:100%;height:100%;object-fit:cover;}
.chatbot-info h4{font-size:.875rem;font-weight:600;color:var(--text-primary);margin:0;}
.chatbot-info p{font-size:.7rem;color:var(--text-muted);margin:.1rem 0 0;}
.chatbot-close{margin-left:auto;background:none;border:none;font-size:1.375rem;color:var(--text-muted);cursor:pointer;padding:0 0 0 .5rem;line-height:1;transition:color 150ms;}
.chatbot-close:hover{color:var(--text-primary);}
.chatbot-messages{flex:1;padding:.875rem;overflow-y:auto;display:flex;flex-direction:column;gap:.5rem;scroll-behavior:smooth;}
.chat-msg{display:flex;max-width:92%;}
.chat-msg.user{align-self:flex-end;}
.chat-msg.bot{align-self:flex-start;}
.chat-bubble{padding:.6rem .875rem;border-radius:14px;font-size:.84rem;line-height:1.6;word-break:break-word;white-space:pre-line;}
.chat-msg.bot  .chat-bubble{background:var(--bg-secondary);color:var(--text-primary);border:1px solid var(--border);border-bottom-left-radius:4px;}
.chat-msg.user .chat-bubble{background:var(--accent);color:#fff;border-bottom-right-radius:4px;}
.chat-link{color:var(--accent);font-weight:500;text-decoration:underline;text-underline-offset:2px;display:inline-block;margin-top:.25rem;}
[data-theme="dark"] .chat-link{color:#d4a876;}
.chat-chips{display:flex;flex-wrap:wrap;gap:.375rem;padding:.25rem 0 .125rem;}
.chip{padding:.3rem .7rem;font-size:.75rem;font-weight:500;color:var(--text-secondary);background:var(--bg-card);border:1px solid var(--border);border-radius:100px;cursor:pointer;white-space:nowrap;transition:border-color 150ms,color 150ms;font-family:inherit;}
.chip:hover{border-color:var(--accent);color:var(--accent);}
.chat-msg.loading .chat-bubble{display:flex;gap:4px;padding:.875rem 1rem;align-items:center;}
.dot{width:7px;height:7px;background:var(--text-muted);border-radius:50%;animation:dotB 1.2s infinite ease-in-out both;}
.dot:nth-child(1){animation-delay:-.32s}.dot:nth-child(2){animation-delay:-.16s}
@keyframes dotB{0%,80%,100%{transform:scale(0)}40%{transform:scale(1)}}
.chatbot-input-row{padding:.75rem;border-top:1px solid var(--border);display:flex;gap:.5rem;flex-shrink:0;}
.chatbot-input-row input{flex:1;padding:.5rem .875rem;font-family:inherit;font-size:.84rem;border:1px solid var(--border);border-radius:100px;background:var(--bg-primary);color:var(--text-primary);outline:none;transition:border-color 150ms;}
.chatbot-input-row input:focus{border-color:var(--accent);}
.chatbot-input-row button{width:36px;height:36px;border-radius:50%;background:var(--accent);color:#fff;border:none;display:flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;transition:background 150ms;}
.chatbot-input-row button:hover{background:var(--accent-hover);}
@media(max-width:480px){.chatbot-panel{right:.75rem;left:.75rem;width:auto;bottom:4.5rem;}.chatbot-fab{right:.75rem;bottom:.75rem;width:48px;height:48px;}}`;

/* ═══════════════════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  /* Inject CSS */
  const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);

  /* Nav */
  const header = document.querySelector('.site-header');
  if (header) {
    header.innerHTML = buildNav(header.dataset.page || '');
    const toggle = document.getElementById('menuToggle');
    const nav    = document.getElementById('navMain');
    toggle?.addEventListener('click', () => nav?.classList.toggle('open'));
    document.addEventListener('click', e => { if (!e.target.closest('.site-header')) nav?.classList.remove('open'); });
  }

  /* Theme */
  const html = document.documentElement;
  const setIcon = t => { const i = document.getElementById('themeIcon'); if(i) i.textContent = t==='dark'?'☀️':'🌙'; };
  setIcon(html.getAttribute('data-theme'));
  document.getElementById('themeToggle')?.addEventListener('click', () => {
    const t = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', t); localStorage.setItem('theme', t); setIcon(t);
  });

  /* Footer */
  const footer = document.querySelector('.site-footer');
  if (footer && !footer.innerHTML.trim()) footer.innerHTML = buildFooter();

  /* Chatbot */
  document.body.insertAdjacentHTML('beforeend', buildChatbotHTML());
  document.getElementById('chatbotFab')?.addEventListener('click', () => {
    document.getElementById('chatbotPanel')?.classList.toggle('open');
    if (document.getElementById('chatbotPanel')?.classList.contains('open'))
      setTimeout(() => document.getElementById('chatInput')?.focus(), 80);
  });
  document.getElementById('chatSend')?.addEventListener('click', sendMsg);
  document.getElementById('chatInput')?.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg(); }
  });
});
