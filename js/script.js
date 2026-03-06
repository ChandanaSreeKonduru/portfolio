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
// VIRTUAL CHANDANA CHATBOT
// ============================================

// Job matching data
const JOB_MATCHING_DATA = {
    skills: [
        'AI Product Management',
        'Agentic AI Orchestration',
        'B2B SaaS Strategy',
        'Global Product Leadership',
        'Healthcare AI',
        'IoT Product Development',
        'Vibe Coding / AI-Assisted Development',
        'Cross-Functional Team Leadership',
        'API Architecture',
        'Product Analytics'
    ],
    
    experience: [
        { years: '5+', focus: 'Product Management' },
        { years: '4', focus: 'Global Markets (USA, India, UK, Nigeria, China, Mexico)' },
        { years: '3', focus: 'AI/ML Products' },
        { years: '2', focus: 'Healthcare & IoT' }
    ],
    
    keyProjects: [
        { name: 'Scan It Know It', type: 'Agentic AI', outcome: '92% accuracy, $0 cost' },
        { name: 'BioTime Cloud 2.0', type: 'Global SaaS', outcome: '4 countries, 10K+ users' },
        { name: 'DF Safety', type: 'Healthcare AI', outcome: '85% AI adoption' }
    ],
    
    idealRoles: [
        'AI Product Manager',
        'Senior Product Manager',
        'Product Lead - AI/ML',
        'Global Product Strategist',
        'Technical Product Manager'
    ],
    
    industries: [
        'AI/ML & Agentic Systems',
        'Healthcare & Life Sciences',
        'Enterprise SaaS',
        'IoT & Connected Devices',
        'Fintech'
    ]
};

// Safe contact info (requires human verification)
const CONTACT_INFO = {
    linkedin: 'linkedin.com/in/chandana-konduru',
    email: 'chandana.konduru@email.com',
    location: 'Omaha, NE (Open to relocation)',
    availability: 'Immediate'
};

// Chat state
let chatOpen = false;
let messageHistory = [];

// Toggle chat widget
function toggleChat() {
    const container = document.getElementById('chatContainer');
    chatOpen = !chatOpen;
    
    if (chatOpen) {
        container.classList.add('active');
        document.getElementById('chatInput').focus();
    } else {
        container.classList.remove('active');
    }
}

// Send quick suggestion
function sendQuick(text) {
    document.getElementById('chatInput').value = text;
    sendMessage();
}

// Handle enter key
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Add message to chat
function addMessage(text, isUser = false) {
    const messagesDiv = document.getElementById('chatMessages');
    const time = new Date().toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
    });
    
    const messageHTML = `
        <div class="message ${isUser ? 'user' : 'bot'}">
            <div class="message-bubble">${text}</div>
            <span class="message-time">${time}</span>
        </div>
    `;
    
    messagesDiv.insertAdjacentHTML('beforeend', messageHTML);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    
    messageHistory.push({ text, isUser, time });
}

// Show typing indicator
function showTyping() {
    const messagesDiv = document.getElementById('chatMessages');
    const typingHTML = `
        <div class="message bot typing" id="typingIndicator">
            <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    messagesDiv.insertAdjacentHTML('beforeend', typingHTML);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Hide typing indicator
function hideTyping() {
    const typing = document.getElementById('typingIndicator');
    if (typing) typing.remove();
}

// Generate bot response
function generateResponse(userMessage) {
    const msg = userMessage.toLowerCase();
    
    // Job matching
    if (msg.includes('match') || msg.includes('fit') || msg.includes('role') || msg.includes('job')) {
        return assessJobFit(msg);
    }
    
    // Skills
    if (msg.includes('skill') || msg.includes('expertise') || msg.includes('good at')) {
        return `My top skills include:<br><br>• ${JOB_MATCHING_DATA.skills.slice(0, 5).join('<br>• ')}<br><br>Want me to assess fit for a specific role?`;
    }
    
    // Projects
    if (msg.includes('project') || msg.includes('work') || msg.includes('portfolio')) {
        return `Key projects:<br><br>${JOB_MATCHING_DATA.keyProjects.map(p => `• <strong>${p.name}</strong> (${p.type}): ${p.outcome}`).join('<br>')}<br><br><a href="work.html">View all projects →</a>`;
    }
    
    // Contact
    if (msg.includes('contact') || msg.includes('email') || msg.includes('reach') || msg.includes('connect')) {
        return provideSafeContact();
    }
    
    // Experience
    if (msg.includes('experience') || msg.includes('background') || msg.includes('career')) {
        return `I have ${JOB_MATCHING_DATA.experience[0].years} years in ${JOB_MATCHING_DATA.experience[0].focus}, including ${JOB_MATCHING_DATA.experience[1].focus}.<br><br><a href="experience.html">View full experience →</a>`;
    }
    
    // Greeting
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
        return `Hello! 👋 I'm Virtual Chandana. I can help with:<br><br>• Job fit assessment<br>• Skills & experience<br>• Project details<br>• Contact information<br><br>What would you like to know?`;
    }
    
    // Default
    return `I can help with job matching, skills, projects, or contact info. Try asking:<br><br>• "Is my job a match?"<br>• "What are your top skills?"<br>• "Tell me about your projects"<br>• "How can I contact you?"`;
}

// Assess job fit
function assessJobFit(msg) {
    // Extract role info from message
    const roleKeywords = {
        'ai': ['AI Product Manager', 'Agentic AI', 'Machine Learning'],
        'product': ['Product Manager', 'Product Lead'],
        'senior': ['Senior Product Manager', 'Lead'],
        'healthcare': ['Healthcare AI', 'Medical'],
        'saas': ['B2B SaaS', 'Enterprise SaaS'],
        'iot': ['IoT', 'Connected Devices']
    };
    
    let matchedSkills = [];
    let matchScore = 0;
    
    for (const [keyword, roles] of Object.entries(roleKeywords)) {
        if (msg.includes(keyword)) {
            matchedSkills.push(...roles);
            matchScore += 25;
        }
    }
    
    if (matchScore === 0) {
        return `I can assess job fit! Tell me more about the role:<br><br>• What's the title?<br>• What industry?<br>• Required skills?<br><br>Or check my <a href="work.html">projects</a> and <a href="experience.html">experience</a>.`;
    }
    
    matchScore = Math.min(matchScore, 100);
    
    let response = `<strong>Job Fit Assessment</strong><br><br>`;
    response += `Match Score: <strong>${matchScore}%</strong><br><br>`;
    
    if (matchScore >= 75) {
        response += `🎯 <strong>Strong match!</strong> This role aligns well with my experience in:<br>• ${matchedSkills.slice(0, 3).join('<br>• ')}<br><br>`;
        response += `<a href="resume.pdf" download>Download my resume</a> or <a href="#" onclick="sendQuick('Contact details'); return false;">get contact info</a>.`;
    } else if (matchScore >= 50) {
        response += `✓ <strong>Good potential match.</strong> I have relevant skills in:<br>• ${matchedSkills.slice(0, 2).join('<br>• ')}<br><br>Let's discuss further!`;
    } else {
        response += `I'd love to learn more about this role. My background is in AI Product Management, B2B SaaS, and Healthcare.<br><br>Want to see my <a href="work.html">projects</a>?`;
    }
    
    return response;
}

// Provide safe contact info
function provideSafeContact() {
    return `<strong>Contact Information</strong><br><br>
        📧 ${CONTACT_INFO.email}<br>
        💼 ${CONTACT_INFO.linkedin}<br>
        📍 ${CONTACT_INFO.location}<br>
        🟢 Available: ${CONTACT_INFO.availability}<br><br>
        <a href="resume.pdf" download class="btn btn-primary" style="display:inline-block;padding:8px 16px;font-size:13px;">Download Resume</a>`;
}

// Send message
function sendMessage() {
    const input = document.getElementById('chatInput');
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
    }, 800 + Math.random() * 400);
}

// Close chat when clicking outside
document.addEventListener('click', function(e) {
    const widget = document.getElementById('chatWidget');
    if (chatOpen && widget && !widget.contains(e.target)) {
        toggleChat();
    }
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
