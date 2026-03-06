// ===== THEME TOGGLE FUNCTIONALITY =====
(function() {
    // Check for saved theme preference or default to system preference
    const getTheme = () => {
        const saved = localStorage.getItem('theme');
        if (saved) return saved;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    // Apply theme immediately to prevent flash
    const theme = getTheme();
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Theme toggle function
    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        
        if (next === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
        
        // Update theme labels
        updateThemeLabels();
    }

    // Update theme labels in mobile menu
    function updateThemeLabels() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const themeNames = document.querySelectorAll('.theme-name');
        themeNames.forEach(el => {
            el.textContent = isDark ? 'light' : 'dark';
        });
        
        // Update theme toggle icon
        const themeIcon = document.getElementById('themeIcon');
        if (themeIcon) {
            themeIcon.textContent = isDark ? '☀️' : '🌙';
        }
    }

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
            }
            updateThemeLabels();
        }
    });

    // Expose toggle function globally
    window.toggleTheme = toggleTheme;
    
    // Initialize theme labels
    updateThemeLabels();
    
    // Wire up theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
})();

// ===== MOBILE MENU FUNCTIONALITY =====
(function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuBackdrop = document.querySelector('.menu-backdrop');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const mobileThemeToggle = document.querySelector('.mobile-theme-toggle');
    
    let lastFocusedElement = null;

    function openMenu() {
        lastFocusedElement = document.activeElement;
        
        hamburger.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
        mobileMenu.classList.add('active');
        mobileMenu.setAttribute('aria-hidden', 'false');
        menuBackdrop.classList.add('active');
        document.body.classList.add('menu-open');
        
        // Focus first mobile nav link
        setTimeout(() => {
            const firstLink = mobileMenu.querySelector('.mobile-nav-link');
            if (firstLink) firstLink.focus();
        }, 100);
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('active');
        mobileMenu.setAttribute('aria-hidden', 'true');
        menuBackdrop.classList.remove('active');
        document.body.classList.remove('menu-open');
        
        // Return focus to hamburger
        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    }

    function toggleMenu() {
        if (mobileMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    // Event listeners
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMenu);
    }

    if (menuBackdrop) {
        menuBackdrop.addEventListener('click', closeMenu);
    }

    // Close menu when clicking nav links (except contact)
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!link.classList.contains('contact-trigger')) {
                closeMenu();
            }
        });
    });

    // Mobile theme toggle
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', function() {
            window.toggleTheme();
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Expose functions globally
    window.toggleMenu = toggleMenu;
    window.openMenu = openMenu;
    window.closeMenu = closeMenu;
})();

// ===== MODAL FUNCTIONALITY =====
(function() {
    const modal = document.getElementById('contactModal');
    const contactTriggers = document.querySelectorAll('.contact-trigger');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');

    function openModal() {
        if (!modal) return;
        
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        
        // Close mobile menu if open
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            window.closeMenu();
        }
        
        // Focus first input
        setTimeout(() => {
            const firstInput = modal.querySelector('input');
            if (firstInput) firstInput.focus();
        }, 100);
    }

    function closeModal() {
        if (!modal) return;
        
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Event listeners
    contactTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (modal && modal.classList.contains('active')) {
                closeModal();
            }
        }
    });

    // Expose functions globally
    window.openModal = openModal;
    window.closeModal = closeModal;
})();

// ===== FORM HANDLING =====
function handleSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Show success message
    alert('Thank you for your message! I\'ll get back to you soon.');
    
    // Reset form and close modal
    form.reset();
    window.closeModal();
}

// ===== CAROUSEL FUNCTIONALITY =====
let carouselIndex = 0;
let carouselItems = [];
let carouselDots = [];

function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const dotsContainer = document.getElementById('carouselDots');
    
    if (!track) return;
    
    carouselItems = track.querySelectorAll('.project-card');
    if (carouselItems.length === 0) return;
    
    const itemsPerView = window.innerWidth < 768 ? 1 : 2;
    const totalSlides = Math.ceil(carouselItems.length / itemsPerView);
    
    // Create dots
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            dot.onclick = () => goToSlide(i);
            dotsContainer.appendChild(dot);
        }
        carouselDots = dotsContainer.querySelectorAll('.carousel-dot');
    }
    
    updateCarousel();
}

function moveCarousel(direction) {
    const itemsPerView = window.innerWidth < 768 ? 1 : 2;
    const totalSlides = Math.ceil(carouselItems.length / itemsPerView);
    
    carouselIndex += direction;
    
    if (carouselIndex < 0) carouselIndex = totalSlides - 1;
    if (carouselIndex >= totalSlides) carouselIndex = 0;
    
    updateCarousel();
}

function goToSlide(index) {
    carouselIndex = index;
    updateCarousel();
}

function updateCarousel() {
    const track = document.getElementById('carouselTrack');
    if (!track || carouselItems.length === 0) return;
    
    const itemsPerView = window.innerWidth < 768 ? 1 : 2;
    const cardWidth = carouselItems[0]?.offsetWidth || 0;
    const gap = 24;
    
    const offset = -(carouselIndex * (cardWidth + gap) * itemsPerView);
    track.style.transform = `translateX(${offset}px)`;
    
    carouselDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === carouselIndex);
    });
}

// Carousel touch/swipe support
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('carouselTrack');
    if (track) {
        track.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        track.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            moveCarousel(1);
        } else {
            moveCarousel(-1);
        }
    }
}

// Handle window resize for carousel
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        carouselIndex = 0;
        initCarousel();
    }, 250);
});

// ===== ACTIVE NAVIGATION HIGHLIGHTING =====
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const pageName = currentPage.replace('.html', '') || 'index';
    
    // Desktop nav
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === pageName) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ===== HEADER SCROLL EFFECT =====
function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    
    function updateHeader() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader(); // Check initial state
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    if (reveals.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    reveals.forEach(el => observer.observe(el));
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel
    initCarousel();
    
    // Set active navigation
    setActiveNav();
    
    // Header scroll effect
    initHeaderScroll();
    
    // Scroll reveal animations
    initScrollReveal();
    
    // Theme toggle buttons
    const themeToggles = document.querySelectorAll('.theme-toggle');
    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', window.toggleTheme);
    });
});

// ===== CONSOLE MESSAGES =====
console.log('%c🚀 Chandana Konduru Portfolio', 'color: #C17C5E; font-size: 16px; font-weight: bold;');
console.log('%c✨ AI Product Manager & Global Strategist', 'color: #6B6B6E; font-size: 14px;');

// ============================================
// VIRTUAL CHANDANA CHATBOT - DATA-DRIVEN v2
// ============================================

// Embedded profile data (fallback if JSON fails to load)
const EMBEDDED_PROFILE = {
  profile: {
    fullName: "Chandana Sree Konduru",
    title: "AI Product Manager & Global Product Strategist",
    yearsOfExperience: "6",
    email: "chandanashree97@gmail.com",
    phone: "+15312034748",
    location: "Omaha, NE, USA",
    linkedIn: "https://www.linkedin.com/in/chandana-sree-konduru/",
    portfolio: "https://chandanasree35.wixsite.com/portfolio",
    openToRemote: true,
    summary: "Product Manager with 6 years of experience driving digital transformation and SaaS product strategy in healthcare, fintech, and IoT."
  },
  skills: {
    "Product Management": ["Roadmap Strategy", "Agile/Scrum", "Product Lifecycle Management (SDLC)", "PRD/User Story Development", "Waterfall", "Change Management", "Jira", "Confluence", "Milestone Tracking", "Stakeholder Collaboration"],
    "AI & Emerging Tech": ["Agentic AI Orchestration", "LLM Prompt Engineering", "AI/ML Workflow Design", "Conversation Flow Design", "Generative AI", "Computer Vision", "NLP"],
    "Data & Analytics": ["SQL", "Python", "Power BI", "Data Visualization", "Application Analytics"],
    "UX & Design Strategy": ["User Research & Personas", "Wireframing & Prototyping", "Usability Testing", "Information Architecture", "Figma", "Sketch", "UX Best Practices"],
    "Engineering Foundation": ["C#", ".NET Core", "ASP.NET", "RESTful API Integration", "System Architecture", "HTML5/CSS"]
  },
  projects: [
    { name: "Scan It Know It", category: "Agentic AI Platform", metrics: ["$0 operational cost", "Weeks to launch", "Community-driven"], skills: ["Gemini API", "Agentic AI", "Figma"] },
    { name: "BioTime Cloud 2.0", category: "B2B SaaS (Web & Mobile)", metrics: ["10K+ users", "4 countries", "+5% performance", "+10% exec confidence"], skills: ["AWS", "React", "Node.js", "REST API", "Product Strategy"] },
    { name: "ZKDigimax-ESL", category: "IoT Retail Solution", metrics: ["-3% pricing errors", "+2% digital engagement", "-10% inventory search time"], skills: ["IoT", "Mobile App", "Agile/Scrum"] },
    { name: "DF Safety", category: "Healthcare AI Platform", metrics: ["-3% manual processing", "100% E2B R2/R3 compliant"], skills: ["AI/ML", "Healthcare UX", "E2B Compliance", "Figma"] }
  ],
  experience: [
    { period: "2023-2024", role: "Associate Product Manager", company: "ZKTeco India", location: "Bangalore, India" },
    { period: "2023", role: "UI/UX Product Designer", company: "Data Foundry", location: "Bangalore, India" },
    { period: "2022", role: "Developer II | UI/UX Designer", company: "Cybage Software", location: "Hyderabad, India" },
    { period: "2019-2022", role: "Software Engineer", company: "NTT Data", location: "Bangalore, India" }
									
								   
	  
	
				 
								  
									 
						  
								  
				 
  ]
};

// Load profile data (try JSON first, fallback to embedded)
let profileData = EMBEDDED_PROFILE; // Start with embedded
												 
										
											   
							 
  

fetch('chandana-data.json')
  .then(response => response.json())
  .then(data => {
    profileData = data; // Use loaded data
    console.log('%c🤖 Virtual Chandana loaded with full JSON data', 'color: #67645e; font-size: 12px;');
  })
  .catch(error => {
    // Silently use embedded data (works when opened as file)
    console.log('%c🤖 Virtual Chandana using embedded profile data', 'color: #67645e; font-size: 12px;');
  });

// Chat state
let chatOpen = false;
let messageHistory = [];

// Toggle chat widget
function toggleChat() {
  const panel = document.getElementById('chatbotPanel');
  if (!panel) {
    console.error('Chatbot panel not found');
    return;
  }
  
  chatOpen = !chatOpen;
  
  if (chatOpen) {
    panel.classList.add('open');
    setTimeout(() => {
			
											 
	 
 

						
						  
      const input = document.getElementById('chatInput');
      if (input) input.focus();
    }, 300);
  } else {
    panel.classList.remove('open');
								
								
					  
  }
}

// Add message to chat - FIXED VERSION
function addMessage(text, isUser = false) {
  const messagesDiv = document.getElementById('chatbotMessages');
  if (!messagesDiv) {
    console.error('Chatbot messages container not found');
    return;
  }
  
  const messageDiv = document.createElement('div');
						 
  messageDiv.className = `chat-message ${isUser ? 'user' : ''}`;
  
  // Format bold text and links
  let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  formatted = formatted.replace(/\n/g, '<br>');
  // Convert URLs to links
  formatted = formatted.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');
  
  messageDiv.innerHTML = `<div class="chat-message-bubble">${formatted}</div>`;
  messagesDiv.appendChild(messageDiv);
	  
	
															 
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
  
  messageHistory.push({ text, isUser, timestamp: new Date() });
}

// Show typing indicator
function showTyping() {
  const messagesDiv = document.getElementById('chatbotMessages');
  if (!messagesDiv) return;
  
  const loadingDiv = document.createElement('div');
  loadingDiv.className = 'chat-message loading';
  loadingDiv.id = 'typingIndicator';
  loadingDiv.innerHTML = '<div class="chat-message-bubble"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>';
				  
			  
	  
  messagesDiv.appendChild(loadingDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Hide typing indicator
function hideTyping() {
  const typing = document.getElementById('typingIndicator');
  if (typing) typing.remove();
}

// Get all skills from profile
function getAllSkills() {
  if (!profileData || !profileData.skills) return [];
  
  const allSkills = [];
  Object.values(profileData.skills).forEach(skillArray => {
    allSkills.push(...skillArray);
  });
  return allSkills;
}

// Find projects with specific skill
function findProjectsWithSkill(skill) {
  if (!profileData || !profileData.projects) return [];
  
  const skillLower = skill.toLowerCase();
  return profileData.projects.filter(project => {
    return project.skills && project.skills.some(s => s.toLowerCase().includes(skillLower));
  });
}

// Get experience by year/period
function getExperienceByPeriod(year) {
  if (!profileData || !profileData.experience) return null;
  
  for (const exp of profileData.experience) {
    const periodMatch = exp.period.match(/(\d{4})/);
    if (periodMatch && parseInt(periodMatch[1]) <= parseInt(year)) {
      return exp;
    }
  }
  return null;
}

// Job matching function - ATS STYLE
function assessJobFit(jobDescription) {
  const jobLower = jobDescription.toLowerCase();
  const allSkills = getAllSkills();
  let matchedCount = 0;
  let totalKeywords = 0;
  const matchedSkills = [];
  const missingSkills = [];
  
  // Comprehensive skill keywords from your experience
  const skillKeywords = [
    // AI/ML
    'python', 'java', 'javascript', 'sql', 'react', 'node', 'aws', 'azure',
    'product management', 'agile', 'scrum', 'api', 'machine learning', 'ai',
    'figma', 'data analysis', 'cloud', 'devops', 'docker', 'kubernetes',
    'llm', 'prompt engineering', 'generative ai', 'nlp', 'computer vision',
    'tensorflow', 'pytorch', 'openai', 'gemini', 'model evaluation',
    // Product Management
    'roadmap', 'prd', 'user stories', 'jira', 'confluence', 'stakeholder',
    'backlog', 'sprint', 'waterfall', 'change management', 'milestone',
    // Data & Analytics
    'power bi', 'tableau', 'data visualization', 'etl', 'analytics',
    'dashboard', 'predictive analytics', 'forecasting', 'statistics',
    // UX Design
    'wireframing', 'prototyping', 'usability testing', 'user research',
    'information architecture', 'adobe', 'sketch', 'design thinking',
    // Engineering
    'c#', '.net', 'asp.net', 'restful', 'system architecture', 'html5',
    'css', 'typescript', 'node.js', 'microservices',
    // Cloud & DevOps
    'ci/cd', 'graphql', 'containerization', 'infrastructure',
    // Business Skills
    'strategic planning', 'network optimization', 'market analysis',
    'business intelligence', 'data quality', 'scalability', 'workflow'
  ];
  
  skillKeywords.forEach(keyword => {
    if (jobLower.includes(keyword)) {
      totalKeywords++;
      if (allSkills.some(s => s.toLowerCase().includes(keyword))) {
        matchedCount++;
        matchedSkills.push(keyword);
      } else {
        missingSkills.push(keyword);
      }
    }
  });
  
  if (totalKeywords === 0) {
    return "Paste a job description with responsibilities and requirements for ATS match analysis!";
  }
  
  const matchPercentage = Math.round((matchedCount / totalKeywords) * 100);
  
  let response = `**ATS Match Score: ${matchPercentage}%**\n\n`;
  
  if (matchPercentage >= 80) {
    response += `✅ **Strong match!** I have direct experience with: ${matchedSkills.slice(0, 6).join(', ')}\.\n\n`;
    response += `**Proof from my work**:\n`;
    response += `- ZKTeco (2023-2024): Led global B2B SaaS across 4 countries (Nigeria, China, Mexico, India)\n`;
    response += `- ScanItKnowIt (Present): Built with Agentic AI at $0 cost\n`;
    response += `- Data Foundry (2023): Healthcare AI platform with Power BI dashboards\n`;
    response += `- Cybage (2022): .NET, SQL Server, data analytics\n\n`;
    response += `See detailed projects: <a href="work.html">View work →</a>`;
  } else if (matchPercentage >= 60) {
    response += `✓ **Good match**. Verified skills: ${matchedSkills.join(', ')}\.\n\n`;
    response += `**Where I used these**:\n`;
    if (matchedSkills.some(s => s.includes('python') || s.includes('sql') || s.includes('.net') || s.includes('data'))) {
      response += `- Cybage (2022): .NET, C#, Python, SQL Server development\n`;
    }
	
			  
    if (matchedSkills.some(s => s.includes('figma') || s.includes('design') || s.includes('ux') || s.includes('dashboard'))) {
      response += `- Data Foundry (2023): UX design with Figma, Power BI dashboards\n`;
    }
	
				 
    if (matchedSkills.some(s => s.includes('product') || s.includes('agile') || s.includes('scrum') || s.includes('strategic'))) {
      response += `- ZKTeco (2023-2024): Product management, Agile/Scrum, strategic planning\n`;
    }
	
			   
    if (matchedSkills.some(s => s.includes('aws') || s.includes('cloud') || s.includes('react'))) {
      response += `- ZKTeco (2023-2024): AWS, React, BioTime Cloud deployment\n`;
    }
    if (matchedSkills.some(s => s.includes('tableau') || s.includes('visualization') || s.includes('analytics'))) {
      response += `- IIIT Bangalore (2021-2024): Tableau, data visualization, predictive analytics\n`;
    }
    if (missingSkills.length > 0) {
      response += `\nGap: ${missingSkills.slice(0, 5).join(', ')}. Not my core expertise.`;
    }
  } else {
    response += `⚠️ **Limited match**. Missing: ${missingSkills.slice(0, 8).join(', ')}\.\n\n`;
    response += `**My actual expertise**:\n`;
    response += `- AI Product Management (ScanItKnowIt, BioTime Cloud)\n`;
    response += `- UX Design & Data Visualization (Data Foundry, Cybage)\n`;
    response += `- Full product lifecycle (ZKTeco, NTT Data)\n`;
    response += `- Not specialized in GIS/geospatial analytics or ArcGIS platforms.`;
  }
  
  response += `\n\n📧 Contact: chandanashree97@gmail.com | 📍 Omaha, NE (Open to Remote)`;
  
  return response;
}

// Generate bot response - DATA-DRIVEN approach
function generateResponse(userMessage) {
  const msg = userMessage.toLowerCase().trim();
  
  // === BASIC INFO ===
  if (msg.match(/full.*name|what.*name|your.*name/)) {
    return profileData.profile.fullName;
  }
  
  // === AGE ===
  if (msg.match(/age|how old/)) {
    if (profileData.profile.age) {
      return `${profileData.profile.age} years old`;
					   
	
																  
									
										 
							 
		 
    }
    return "Contact the real Chandana for this information.";
  }
  
  // === GENDER ===
  if (msg.match(/gender|male|female/)) {
    if (profileData.profile.gender) {
      return profileData.profile.gender;
    }
    return "Contact the real Chandana for this information.";
  }
  
  if (msg.match(/years.*experience|experience|how.*long/)) {
    return `${profileData.profile.yearsOfExperience}+ years`;
  }
  
  if (msg.match(/email|contact|mail|reach/)) {
    return profileData.profile.email;
  }
  
  if (msg.match(/phone|call|number/)) {
    return `Phone: ${profileData.profile.phone}`;
  }
  
  if (msg.match(/location|where|based/)) {
    return profileData.profile.location;
  }
  
  if (msg.match(/linkedin|link.*in/)) {
    return profileData.profile.linkedIn;
  }
  
  if (msg.match(/title|role/)) {
    return profileData.profile.title;
  }
  
  // === SKILLS - Dynamic from JSON with Aliases ===
  // Check if asking about any skill in the data
  const allSkills = getAllSkills();
  
  // Skill aliases map (common variations -> actual skill names)
  const skillAliases = {
    'testing': 'QA',
    'qa': 'QA',
    'quality assurance': 'QA',
    'uiux': 'UX Design',
    'ui ux': 'UX Design',
    'ui designing': 'UX Design',
    'ui design': 'UX Design',
    'ux design': 'UX Design',
    'user interface': 'UX Design',
    'user experience': 'UX Design',
    'wireframing': 'Wireframing & Prototyping',
    'prototyping': 'Wireframing & Prototyping',
    'figma': 'Figma',
    'powerbi': 'Power BI',
    'power bi': 'Power BI',
    '.net': '.NET Core',
    'dotnet': '.NET Core',
    'dot net': '.NET Core',
    'machine learning': 'AI/ML',
    'ai/ml': 'AI/ML',
    'ml': 'AI/ML',
    'artificial intelligence': 'AI/ML',
    'ai': 'AI/ML',
    'data visualization': 'Data Visualization',
    'sql': 'SQL',
    'python': 'Python',
    'javascript': 'JavaScript',
    'react': 'React',
    'node': 'Node.js',
    'aws': 'AWS',
    'azure': 'Azure',
    'agile': 'Agile/Scrum',
    'scrum': 'Agile/Scrum',
    'product management': 'Product Management',
    'productmanager': 'Product Management',
    'product manager': 'Product Management',
    'roadmap': 'Roadmap Strategy',
    'jira': 'Jira',
    'confluence': 'Confluence',
    'tableau': 'Tableau',
    'c#': 'C#',
    'asp.net': 'ASP.NET',
    'typescript': 'TypeScript',
    'docker': 'Docker',
    'kubernetes': 'Kubernetes'
  };
  
  // Check for aliases first
  for (const [alias, skillName] of Object.entries(skillAliases)) {
    if (msg === alias || msg.includes(alias) || msg.match(new RegExp(`\\b${alias}\\b`))) {
      // Try to find the actual skill in the data
      const projects = findProjectsWithSkill(skillName);
      if (projects.length > 0) {
        // NEVER say "familiar with" - always mention where you used it
        return `Yes. Used at: ${projects.map(p => `${p.name}${p.company ? ` (${p.company})` : ''}`).join(', ')}. <a href="work.html">See details →</a>`;
      }
      // If no projects found, mention company/experience from your timeline
      return getExperienceWithSkill(skillName);
    }
  }
  
  // Then check actual skills from JSON
  for (const skill of allSkills) {
    const skillLower = skill.toLowerCase();
    // Match skill name directly (e.g., "python", "power bi", "figma")
    // Handle both full matches and partial matches for short queries
    if (msg === skillLower || 
        msg.match(new RegExp(`\\b${skillLower.replace(/[.?]/g, '\\$&')}\\b`)) || 
        msg.match(new RegExp(`${skillLower.replace(/[.?]/g, '\\$&')}\\??$`)) ||
        skillLower.includes(msg) || msg.includes(skillLower)) {
      const projects = findProjectsWithSkill(skill);
      if (projects.length > 0) {
        return `Yes. Used at: ${projects.map(p => `${p.name}${p.company ? ` (${p.company})` : ''}`).join(', ')}. <a href="work.html">See details →</a>`;
      }
      return getExperienceWithSkill(skill);
    }
  }
  
  // === PROJECTS ===
  if (msg.match(/project|work|portfolio/)) {
    return `${profileData.projects.length} projects. <a href="work.html">View all →</a>`;
  }
  
  // Check for specific project names
  for (const project of profileData.projects) {
    const projectName = project.name.toLowerCase();
    if (msg.includes(projectName.split(' ')[0]) || msg.includes(projectName)) {
      return `${project.name}: ${project.metrics.join(', ')}. ${project.description || ''}`;
    }
  }
  
  // === EXPERIENCE BY PERIOD ===
  if (msg.match(/201[0-9]|202[0-4]|what.*doing.*(year|period)/)) {
    const yearMatch = msg.match(/(201[0-9]|202[0-4])/);
    if (yearMatch) {
      const exp = getExperienceByPeriod(yearMatch[1]);
      if (exp) {
        return `${exp.role} at ${exp.company}, ${exp.location}`;
      }
      return "Check experience page for timeline.";
    }
  }
  
  // === COMPANIES ===
  if (msg.match(/company|work.*for|employer|worked/)) {
    const companies = profileData.experience.map(e => e.company).join(', ');
    return `${companies}. <a href="experience.html">Full timeline →</a>`;
  }
  
  // === TARGET ROLES ===
  if (msg.match(/role|position|job.*title|looking.*for/)) {
    if (profileData.targetRoles) {
      return `Target roles: ${profileData.targetRoles.slice(0, 5).join(', ')}. See all on resume.`;
    }
    return "Product Manager, AI Product Manager, UX Designer. See resume for full list.";
  }
  
  // === JOB MATCHING (detect long job descriptions) ===
  if (msg.length > 200 && (msg.includes('responsibility') || msg.includes('requirement') || 
      msg.includes('experience') || msg.includes('skill') || msg.includes('role') ||
      msg.includes('analyst') || msg.includes('engineer') || msg.includes('manager') ||
      msg.includes('developer') || msg.includes('designer') || msg.includes('product') ||
      msg.includes('data') || msg.includes('GIS') || msg.includes('geospatial'))) {
    return assessJobFit(msg);
  }
  
  if (msg.match(/fit.*role|match.*job|suitable|good fit/)) {
    if (msg.length > 100) {
      // Likely a job description
      return assessJobFit(msg);
    }
    return "Paste job description with responsibilities and requirements for ATS match %!";
  }
  
  // === GREETINGS ===
  if (msg.match(/^hi|hello|hey|greetings/)) {
    return `Hi! I'm Virtual ${profileData.profile.fullName.split(' ')[0]}. Ask about my experience, skills, or projects!`;
  }
  
  // === THANKS ===
  if (msg.match(/thank|thanks/)) {
    return "You're welcome!";
  }
  
  if (msg.match(/bye|goodbye/)) {
    return `Bye! Contact: ${profileData.profile.email}`;
  }
  
  // === GENERAL KNOWLEDGE / OFF-TOPIC QUESTIONS ===
  if (msg.match(/weather|news|time|date|capital|president|who.*is|what.*is|how.*to.*make|recipe|sports|movie|music/)) {
    return "I only have information about Chandana (work experience, skills, projects, and basic details). I can't answer general questions.";
  }
  
  // === DEFAULT FALLBACK with examples ===
  if (msg.match(/\?$/)) {
    return `Ask about: name, experience (${profileData.profile.yearsOfExperience}+ years), skills (${allSkills.slice(0, 5).join(', ')}...), projects (${profileData.projects.length} total), companies, or paste job description for match %!`;
  }
  
  return "Ask: name, experience, skills, projects, companies, or paste job description for match %!";
}

// Helper function to get experience with a specific skill
function getExperienceWithSkill(skill) {
  // Map skills to specific companies/experiences based on your detailed timeline
  const skillExperienceMap = {
    'QA': 'Cybage (2022): Proactive system monitors, .NET, C#, SQL Server',
    'UX Design': 'Data Foundry (2023): Healthcare AI UX; Cybage (2022): UI/UX Designer',
    'Figma': 'Data Foundry (2023), ScanItKnowIt (Present), ZKTeco (2023-2024)',
    'Power BI': 'ZKTeco (2023-2024): Executive dashboards, product analytics',
    '.NET Core': 'Cybage (2022): Enterprise CPQ platform maintenance',
    'AI/ML': 'ScanItKnowIt (Present): Gemini API; Data Foundry (2023): Healthcare AI',
    'SQL': 'Cybage (2022): Database design; IIIT Bangalore (2021-2024)',
    'Python': 'Cybage (2022); IIIT Bangalore (2021-2024); ScanItKnowIt (Present)',
    'Agile/Scrum': 'ZKTeco (2023-2024); Cybage (2022)',
    'AWS': 'ZKTeco (2023-2024): BioTime Cloud deployment across 4 countries',
    'React': 'ZKTeco (2023-2024): Super Admin Dashboard',
    'Node.js': 'ZKTeco (2023-2024): API modernization',
    'TypeScript': 'ZKTeco (2023-2024): BioTime Cloud web & mobile',
    'C#': 'Cybage (2022): Enterprise CPQ solutions',
    'ASP.NET': 'Cybage (2022): Web application frameworks',
    'Tableau': 'IIIT Bangalore (2021-2024): Data visualization projects',
    'TensorFlow': 'IIIT Bangalore (2021-2024): ML coursework',
    'PyTorch': 'IIIT Bangalore (2021-2024): Deep learning',
    'Docker': 'IIIT Bangalore (2021-2024): Containerization',
    'Kubernetes': 'IIIT Bangalore (2021-2024): Orchestration',
    'Wireframing': 'Data Foundry (2023); Cybage (2022); ScanItKnowIt (Present)',
    'Prototyping': 'Data Foundry (2023); ScanItKnowIt (Present)',
    'User Research': 'Data Foundry (2023); ScanItKnowIt (Present)',
    'Jira': 'ZKTeco (2023-2024); Cybage (2022)',
    'Confluence': 'ZKTeco (2023-2024); Cybage (2022)',
    'Product Management': 'ZKTeco (2023-2024): Global B2B SaaS; ScanItKnowIt (Present)',
    'Roadmap Strategy': 'ZKTeco (2023-2024): 4-country product strategy',
    'Stakeholder Management': 'ZKTeco (2023-2024): Cross-functional leadership',
    'Data Visualization': 'ZKTeco (2023-2024); Data Foundry (2023)',
    'Computer Vision': 'ScanItKnowIt (Present): Core scanning technology',
    'LLM Prompt Engineering': 'ScanItKnowIt (Present): Gemini API integration',
    'Agentic AI': 'ScanItKnowIt (Present): Autonomous AI system',
    'Gemini API': 'ScanItKnowIt (Present): $0 cost deployment',
    'Mobile-First Design': 'ScanItKnowIt (Present); NTT Data (2019-2022): Wyndham Hotels app',
    'Healthcare AI': 'Data Foundry (2023): DF Safety pharmacovigilance',
    'E2B Compliance': 'Data Foundry (2023): Regulatory compliance',
    'IoT': 'ZKTeco (2023-2024): ZKDigimax-ESL retail solution',
    'NFC/QR Scanning': 'ZKTeco (2023-2024): ESL integration',
    'B2B SaaS': 'ZKTeco (2023-2024): BioTime Cloud 10K+ users',
    'Global Product Strategy': 'ZKTeco (2023-2024): Nigeria, China, Mexico, India',
    'API Modernization': 'ZKTeco (2023-2024): +5% performance improvement',
    'Super Admin Dashboard': 'ZKTeco (2023-2024): +10% exec confidence',
    'Time & Attendance': 'ZKTeco (2023-2024): User flow optimization',
    'Pharmacovigilance': 'Data Foundry (2023): AI-powered safety platform',
    'Medical Billing UX': 'NTT Data (2019-2022): Tenet Healthcare',
    'Hotel Booking': 'NTT Data (2019-2022): Wyndham Hotels +5% engagement',
    'B2B Financial Dashboards': 'NTT Data (2019-2022): Franchisee portal'
  };
  
  const experience = skillExperienceMap[skill] || skillExperienceMap['UX Design'];
  return `Yes. ${experience}.`;
}

// Send message - FIXED VERSION
function sendMessage() {
  const input = document.getElementById('chatInput');
  if (!input) {
    console.error('Chat input not found');
    return;
  }
  
  const message = input.value.trim();
	
  if (!message) return;
  
  // Add user message
  addMessage(message, true);
  input.value = '';
  
  // Show typing indicator
  showTyping();
  
  // Generate response after delay
  setTimeout(() => {
    hideTyping();
    const response = generateResponse(message);
    addMessage(response);
  }, 600);
}

// Initialize chatbot event listeners
document.addEventListener('DOMContentLoaded', function() {
  const chatSend = document.getElementById('chatSend');
  const chatInput = document.getElementById('chatInput');
  
  if (chatSend && chatInput) {
    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });
  }
  
  // Close chat when clicking outside
  document.addEventListener('click', function(e) {
    const panel = document.getElementById('chatbotPanel');
    const fab = document.getElementById('chatbotFab');
    
    if (chatOpen && panel && !panel.contains(e.target) && !fab.contains(e.target)) {
      toggleChat();
    }
  });
  
  console.log('%c🤖 Virtual Chandana chatbot initialized', 'color: #67645e; font-size: 12px;');
});

// ===== INTERACTIVE GLOBE BACKGROUND =====
// Rhode Skin aesthetic globe for hero section
(function() {
    const canvas = document.getElementById('globeCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Globe configuration - Rhode Skin colors
    const config = {
      radius: 280,  // Increased from 200 to 280 for bigger globe
      dotCount: 1500,
      rotationSpeed: 0.002,
      tilt: 0.3,
      // Light mode colors
      dotColorLight: 'rgba(103, 100, 94, ALPHA)', // --text-primary
      arcColorLight: 'rgba(196, 148, 100, 0.4)',  // #c49464 with opacity
      markerColorLight: 'rgba(196, 148, 100, 1)', // #c49464 solid
      glowColorLight: 'rgba(196, 148, 100, 0.08)',
      labelColorLight: 'rgba(67, 64, 58, 1)',     // Darker text for light mode background
      // Dark mode colors
      dotColorDark: 'rgba(232, 230, 227, ALPHA)', // --text-primary dark
      arcColorDark: 'rgba(196, 148, 100, 0.5)',   // #c49464 with opacity
      markerColorDark: 'rgba(196, 148, 100, 0.9)', // #c49464
      glowColorDark: 'rgba(196, 148, 100, 0.12)',
      labelColorDark: 'rgba(232, 230, 227, 1)'    // Text color for dark mode
    };
    
    // Global locations with names (your global presence)
    const locations = [
      { name: 'Liverpool', lat: 53.4084, lng: -2.9916 },
      { name: 'Omaha', lat: 41.2565, lng: -95.9345 },
      { name: 'Bangalore', lat: 12.9716, lng: 77.5946 },
      { name: 'Hyderabad', lat: 17.3850, lng: 78.4867 },
      { name: 'Pune', lat: 18.5204, lng: 73.8567 },
      { name: 'Mexico', lat: 19.4326, lng: -99.1332 },
      { name: 'China', lat: 39.9042, lng: 116.4074 },
      { name: 'India', lat: 28.6139, lng: 77.2090 },
      { name: 'Nigeria', lat: 6.5244, lng: 3.3792 }
    ];
    
    // Connections showing your global work
    const connections = [
      { from: locations[0], to: locations[1] },  // Liverpool -> Omaha
      { from: locations[1], to: locations[7] },  // Omaha -> India
      { from: locations[7], to: locations[6] },  // India -> China
      { from: locations[8], to: locations[0] },  // Nigeria -> Liverpool
      { from: locations[2], to: locations[3] },  // Bangalore -> Hyderabad
      { from: locations[4], to: locations[5] }   // Pune -> Mexico
    ];
    
    let dots = [];
    // Set initial rotation to show USA facing forward (Omaha at center)
    let rotationY = -1.7;  // Rotate globe to center USA
    let rotationX = config.tilt;
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let autoRotate = true;
    let animationId = null;
    
    // Pause auto-rotation initially so user can see USA first
    setTimeout(() => {
      autoRotate = true;
    }, 3000); // Start auto-rotation after 3 seconds
    
    // Helper: Convert lat/lng to 3D coordinates
    function latLngToXYZ(lat, lng, r) {
      const phi = ((90 - lat) * Math.PI) / 180;
      const theta = ((lng + 180) * Math.PI) / 180;
      return [
        -(r * Math.sin(phi) * Math.cos(theta)),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      ];
    }
    
    // Helper: Rotate around Y axis
    function rotateY(x, y, z, angle) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [x * cos + z * sin, y, -x * sin + z * cos];
    }
    
    // Helper: Rotate around X axis
    function rotateX(x, y, z, angle) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [x, y * cos - z * sin, y * sin + z * cos];
    }
    
    // Helper: Project 3D to 2D
    function project(x, y, z, cx, cy, fov) {
      const scale = fov / (fov + z);
      return [x * scale + cx, y * scale + cy, z];
    }
    
    // Initialize dots using Fibonacci sphere
    function initDots() {
      dots = [];
      const goldenRatio = (1 + Math.sqrt(5)) / 2;
      for (let i = 0; i < config.dotCount; i++) {
        const theta = (2 * Math.PI * i) / goldenRatio;
        const phi = Math.acos(1 - (2 * (i + 0.5)) / config.dotCount);
        dots.push([
          Math.cos(theta) * Math.sin(phi),
          Math.cos(phi),
          Math.sin(theta) * Math.sin(phi)
        ]);
      }
    }
    
    // Check if in dark mode
    function isDarkMode() {
      return document.documentElement.getAttribute('data-theme') === 'dark';
    }
    
    // Get current colors based on theme
    function getColors() {
      const dark = isDarkMode();
      return {
        dotColor: dark ? config.dotColorDark : config.dotColorLight,
        arcColor: dark ? config.arcColorDark : config.arcColorLight,
        markerColor: dark ? config.markerColorDark : config.markerColorLight,
        glowColor: dark ? config.glowColorDark : config.glowColorLight
      };
    }
    
    // Draw the globe
    function draw() {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      
      const cx = width / 2;
      const cy = height / 2;
      const fov = 600;
      
      // Auto-rotate
      if (autoRotate && !isDragging) {
        rotationY += config.rotationSpeed;
      }
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      const colors = getColors();
      
      // Draw ambient glow
      const glowGrad = ctx.createRadialGradient(cx, cy, config.radius * 0.8, cx, cy, config.radius * 1.5);
      glowGrad.addColorStop(0, colors.glowColor);
      glowGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);
      
      // Draw dots
      dots.forEach(dot => {
        let [x, y, z] = dot;
        x *= config.radius;
        y *= config.radius;
        z *= config.radius;
        
        [x, y, z] = rotateX(x, y, z, rotationX);
        [x, y, z] = rotateY(x, y, z, rotationY);
        
        // Only draw front-facing dots
        if (z > 0) return;
        
        const [sx, sy] = project(x, y, z, cx, cy, fov);
        const depthAlpha = Math.max(0.1, 1 - (z + config.radius) / (2 * config.radius));
        
        ctx.beginPath();
        ctx.arc(sx, sy, 1 + depthAlpha * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = colors.dotColor.replace('ALPHA', depthAlpha.toFixed(2));
        ctx.fill();
      });
      
      // Draw connections
      ctx.strokeStyle = colors.arcColor;
      ctx.lineWidth = 1;
      connections.forEach(conn => {
        let [x1, y1, z1] = latLngToXYZ(conn.from.lat, conn.from.lng, config.radius);
        let [x2, y2, z2] = latLngToXYZ(conn.to.lat, conn.to.lng, config.radius);
        
        [x1, y1, z1] = rotateX(x1, y1, z1, rotationX);
        [x1, y1, z1] = rotateY(x1, y1, z1, rotationY);
        [x2, y2, z2] = rotateX(x2, y2, z2, rotationX);
        [x2, y2, z2] = rotateY(x2, y2, z2, rotationY);
        
        // Only draw if both points are visible
        if (z1 > 0 || z2 > 0) return;
        
        const [sx1, sy1] = project(x1, y1, z1, cx, cy, fov);
        const [sx2, sy2] = project(x2, y2, z2, cx, cy, fov);
        
        ctx.beginPath();
        ctx.moveTo(sx1, sy1);
        ctx.lineTo(sx2, sy2);
        ctx.stroke();
      });
      
      // Draw location markers and labels
      locations.forEach((loc, index) => {
        let [x, y, z] = latLngToXYZ(loc.lat, loc.lng, config.radius);
        [x, y, z] = rotateX(x, y, z, rotationX);
        [x, y, z] = rotateY(x, y, z, rotationY);
        
        // Only draw if visible (front-facing)
        if (z > 0) return;
        
        const [sx, sy] = project(x, y, z, cx, cy, fov);
        
        // Special styling for Omaha (USA) - your current base
        const isOmaha = index === 1;
        const markerSize = isOmaha ? 7 : 5; // Larger marker for Omaha
        
        // Draw marker dot with #c49464 color
        ctx.beginPath();
        ctx.arc(sx, sy, markerSize, 0, Math.PI * 2);
        ctx.fillStyle = colors.markerColor;
        ctx.fill();
        
        // Add outline for better visibility
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.lineWidth = isOmaha ? 2.5 : 2;
        ctx.stroke();
        
        // Draw glow around marker with #c49464
        const glowSize = isOmaha ? 20 : 15;
        const markerGlow = ctx.createRadialGradient(sx, sy, 0, sx, sy, glowSize);
        markerGlow.addColorStop(0, 'rgba(196, 148, 100, 0.5)');
        markerGlow.addColorStop(0.5, 'rgba(196, 148, 100, 0.15)');
        markerGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = markerGlow;
        ctx.fillRect(sx - glowSize, sy - glowSize, glowSize * 2, glowSize * 2);
        
        // Draw label text - guaranteed visible
        ctx.save(); // Save context state
        ctx.font = isOmaha ? 'bold 15px Inter, sans-serif' : 'bold 14px Inter, sans-serif';
        
        // Use solid colors without alpha for maximum visibility
        ctx.fillStyle = isDarkMode() ? '#E8E6E3' : '#43403A';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        
        // Strong text shadow/outline for contrast
        ctx.shadowColor = isDarkMode() ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)';
        ctx.shadowBlur = 4;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        
        // Add "📍" emoji for Omaha to highlight it as home base
        const labelPrefix = isOmaha ? '📍 ' : '';
        ctx.fillText(labelPrefix + loc.name, sx + 12, sy);
        ctx.restore(); // Restore to clean state
      });
      
      animationId = requestAnimationFrame(draw);
    }
    
    // Mouse/Touch interactions
    canvas.addEventListener('mousedown', (e) => {
      isDragging = true;
      autoRotate = false;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      canvas.style.cursor = 'grabbing';
    });
    
    canvas.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;
      rotationY += dx * 0.005;
      rotationX += dy * 0.005;
      rotationX = Math.max(-1, Math.min(1, rotationX));
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    });
    
    canvas.addEventListener('mouseup', () => {
      isDragging = false;
      canvas.style.cursor = 'grab';
      setTimeout(() => { autoRotate = true; }, 2000);
    });
    
    canvas.addEventListener('mouseleave', () => {
      isDragging = false;
      canvas.style.cursor = 'grab';
    });
    
    // Touch support
    canvas.addEventListener('touchstart', (e) => {
      isDragging = true;
      autoRotate = false;
      lastMouseX = e.touches[0].clientX;
      lastMouseY = e.touches[0].clientY;
    });
    
    canvas.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const dx = e.touches[0].clientX - lastMouseX;
      const dy = e.touches[0].clientY - lastMouseY;
      rotationY += dx * 0.005;
      rotationX += dy * 0.005;
      rotationX = Math.max(-1, Math.min(1, rotationX));
      lastMouseX = e.touches[0].clientX;
      lastMouseY = e.touches[0].clientY;
    });
    
    canvas.addEventListener('touchend', () => {
      isDragging = false;
      setTimeout(() => { autoRotate = true; }, 2000);
    });
    
    // Handle resize - Make globe bigger
    function handleResize() {
      const container = canvas.parentElement;
      if (window.innerWidth <= 900) {
        container.style.width = '500px';   // Increased from 400px
        container.style.height = '500px';  // Increased from 400px
        config.radius = 200;               // Increased from 150
      } else {
        container.style.width = '800px';   // Increased from 600px
        container.style.height = '800px';  // Increased from 600px
        config.radius = 280;               // Increased from 200
      }
    }
    
    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          // Colors will update automatically on next frame
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    // Initialize
    handleResize();
    initDots();
    draw();
    
    window.addEventListener('resize', handleResize);
    
    console.log('%c🌍 Interactive globe loaded', 'color: #d4a574; font-size: 12px;');
})();

// Initialize chat on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    // Chat is ready
    console.log('%c🤖 Virtual Chandana chatbot loaded', 'color: #67645e; font-size: 12px;');
});
