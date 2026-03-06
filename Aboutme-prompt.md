I'll research the best practices for About pages that convert recruiters into hiring managers, focusing on AI Product Manager positioning. Let me analyze what makes an About page effective for technical product roles.
Based on my research, I'll now create an optimized About page that converts recruiters into hiring managers. The key insight: **AI Product Manager About pages must demonstrate end-to-end product ownership, quantify impact, and show the human behind the technical skills** . Here's the complete structure:

---

## About Page — Complete Optimized Structure

### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Chandana Konduru — AI Product Manager bridging technical architecture with human-centered design. 5+ years building global B2B SaaS, IoT, and healthcare AI products.">
    <title>About | Chandana Konduru — AI Product Manager & Designer</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>">
</head>
<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- STANDARD TOP NAVIGATION — Identical across all pages -->
    <header class="site-header">
        <div class="container">
            <div class="header-inner">
                <a href="index.html" class="logo">CK</a>
                
                <nav class="main-nav" role="navigation" aria-label="Main navigation">
                    <ul class="nav-list">
                        <li><a href="work.html" class="nav-link">Work</a></li>
                        <li><a href="experience.html" class="nav-link">Experience</a></li>
                        <li><a href="about.html" class="nav-link active">About</a></li>
                        <li><a href="#" class="nav-link contact-trigger" data-modal="contact">Contact</a></li>
                    </ul>
                </nav>
                
                <a href="resume.pdf" class="btn btn-primary" download>Resume</a>
                
                <button class="mobile-menu-toggle" aria-label="Toggle menu" aria-expanded="false">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>

    <main id="main-content">
        
        <!-- HERO: Personal Brand Statement -->
        <section class="about-hero">
            <div class="container">
                <div class="hero-content">
                    <p class="greeting">Hello, I'm Chandana 👋</p>
                    <h1 class="brand-statement">
                        I bridge <span class="highlight">technical architecture</span> with <span class="highlight">human-centered design</span> to build AI systems that solve real problems—not just impressive demos.
                    </h1>
                    <p class="hero-context">
                        5+ years leading global product teams across <span class="location-pill">🇺🇸 USA</span>, <span class="location-pill">🇮🇳 India</span>, and <span class="location-pill">🇬🇧 UK</span>. From engineering foundations at NTT Data to AI product strategy at ZKTeco, I've shipped B2B SaaS, IoT retail solutions, and healthcare AI platforms that measurably improve how people work.
                    </p>
                    <div class="hero-ctas">
                        <a href="work.html" class="btn btn-primary">See My Work</a>
                        <a href="resume.pdf" class="btn btn-secondary" download>Download Resume</a>
                    </div>
                </div>
                <div class="hero-visual">
                    <!-- Professional headshot or abstract visual -->
                    <div class="portrait-placeholder" aria-label="Professional headshot of Chandana Konduru"></div>
                </div>
            </div>
        </section>

        <!-- MY JOURNEY: Narrative Arc -->
        <section class="my-journey">
            <div class="container">
                <h2 class="section-title">My Journey</h2>
                
                <div class="journey-narrative">
                    <div class="journey-phase">
                        <span class="phase-label">The Foundation</span>
                        <h3>Engineering Roots</h3>
                        <p>I started as a software engineer at <strong>NTT Data</strong>, building mobile booking apps for Wyndham Hotels and simplifying medical billing UX for Tenet Healthcare. This taught me that <strong>the best products fail when they ignore user context</strong>—and that technical depth is essential for credible product leadership.</p>
                    </div>
                    
                    <div class="journey-arrow">→</div>
                    
                    <div class="journey-phase">
                        <span class="phase-label">The Pivot</span>
                        <h3>Design Thinking & AI</h3>
                        <p>At <strong>Data Foundry</strong>, I discovered my superpower: translating complex machine learning outputs into interfaces that medical reviewers <em>trusted</em>. I didn't just design screens—I designed <strong>human-AI collaboration</strong>, increasing AI acceptance from 30% to 85% by making the system explainable, not just accurate.</p>
                    </div>
                    
                    <div class="journey-arrow">→</div>
                    
                    <div class="journey-phase">
                        <span class="phase-label">The Scale</span>
                        <h3>Global Product Strategy</h3>
                        <p>As <strong>Associate Product Manager at ZKTeco</strong>, I led B2B SaaS transformation across 4 countries (Nigeria, China, Mexico, India). I architected unified platforms with region-specific customization, proving that <strong>global scale and local relevance aren't mutually exclusive</strong>—they require intentional system design.</p>
                    </div>
                    
                    <div class="journey-arrow">→</div>
                    
                    <div class="journey-phase current">
                        <span class="phase-label">Now</span>
                        <h3>Agentic AI & Community</h3>
                        <p>Today in <strong>Omaha, Nebraska</strong>, I'm building <strong>ScanItKnowIt</strong> and <strong>Budget Management</strong>—AI-powered tools that demonstrate what's possible with modern agentic AI. I'm passionate about "vibe coding" and rapid prototyping, but more passionate about ensuring AI serves human needs responsibly.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- MY SUPERPOWERS: Differentiators -->
        <section class="superpowers">
            <div class="container">
                <h2 class="section-title">My Superpowers</h2>
                <p class="section-subtitle">What I bring to product teams that others don't</p>
                
                <div class="superpowers-grid">
                    <div class="superpower-card">
                        <div class="superpower-icon">🧠</div>
                        <h3>Systems Thinking</h3>
                        <p>I see beyond individual features to understand how AI systems behave as complete entities. I design for emergent properties, failure modes, and second-order effects—not just happy paths.</p>
                    </div>
                    
                    <div class="superpower-card">
                        <div class="superpower-icon">🌉</div>
                        <h3>Technical-Business Bridge</h3>
                        <p>Fluent in both engineering languages (C#, .NET, RESTful APIs, AI/ML workflows) and business outcomes (revenue, retention, efficiency). I translate between teams so everyone moves in the same direction.</p>
                    </div>
                    
                    <div class="superpower-card">
                        <div class="superpower-icon">🌍</div>
                        <h3>Global Perspective</h3>
                        <p>Experienced leading cross-cultural teams across international markets. I understand that "global product" means celebrating differences, not finding lowest common denominators.</p>
                    </div>
                    
                    <div class="superpower-card">
                        <div class="superpower-icon">📊</div>
                        <h3>Evidence-Driven</h3>
                        <p>Every decision backed by data, every claim supported by measurable results. I don't just ship features—I validate hypotheses and iterate based on evidence.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- MY APPROACH: Philosophy -->
        <section class="my-approach">
            <div class="container">
                <h2 class="section-title">My Approach</h2>
                
                <div class="approach-grid">
                    <div class="approach-card">
                        <h4>Responsible AI First</h4>
                        <p>Every AI system I design considers ethical implications, bias mitigation, and long-term societal impact. Technology should empower, not exploit. I ask "should we?" before "can we?"</p>
                    </div>
                    
                    <div class="approach-card">
                        <h4>User-Centered Innovation</h4>
                        <p>I start with human needs and work backwards to technology solutions. The best AI products disappear into seamless user experiences—not impressive demos that frustrate in production.</p>
                    </div>
                    
                    <div class="approach-card">
                        <h4>Systematic Excellence</h4>
                        <p>I think in complete systems—not features. Every component must contribute to coherent behavior and measurable business outcomes. No vanity metrics, only meaningful impact.</p>
                    </div>
                    
                    <div class="approach-card">
                        <h4>Continuous Learning</h4>
                        <p>The AI landscape evolves rapidly. I maintain curiosity and adaptability as core competencies, constantly updating my mental models through hands-on building and academic rigor (IIIT Bangalore Post-Graduation in Data Science).</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- BEYOND WORK: Human Element -->
        <section class="beyond-work">
            <div class="container">
                <div class="beyond-content">
                    <div class="beyond-left">
                        <h2 class="section-title">Beyond Work</h2>
                        <p>When I'm not architecting AI systems, you'll find me exploring the intersection of technology and creativity. I'm passionate about open-source contributions, mentoring emerging PMs, and participating in hackathons that tackle social challenges.</p>
                        <p>I believe in the democratization of AI tools and actively contribute to community projects that make advanced technologies accessible to builders worldwide. My weekends often involve experimenting with new prompt engineering techniques or collaborating on vibe-coding projects that push the boundaries of rapid AI-assisted development.</p>
                        <p>Outside of technology, I'm drawn to systems thinking in nature—studying how complex ecosystems self-organize and adapt. This perspective deeply influences how I approach product architecture and organizational design in my professional work.</p>
                    </div>
                    
                    <div class="beyond-right">
                        <h3>What Energizes Me</h3>
                        <ul class="energy-list">
                            <li><span class="energy-dot"></span> Open Source</li>
                            <li><span class="energy-dot"></span> Hackathons</li>
                            <li><span class="energy-dot"></span> Mentoring</li>
                            <li><span class="energy-dot"></span> Systems Thinking</li>
                            <li><span class="energy-dot"></span> Vibe Coding</li>
                            <li><span class="energy-dot"></span> Community Building</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- CALL TO ACTION: Conversion -->
        <section class="about-cta">
            <div class="container">
                <h2>Let's Build Something Impactful Together</h2>
                <p>I'm always excited to connect with fellow AI enthusiasts, collaborate on innovative projects, or discuss opportunities to create responsible, impactful AI products.</p>
                <div class="cta-buttons">
                    <a href="#" class="btn btn-primary contact-trigger" data-modal="contact">Get In Touch</a>
                    <a href="resume.pdf" class="btn btn-secondary" download>View Resume</a>
                </div>
            </div>
        </section>

    </main>

    <footer class="site-footer" role="contentinfo">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo"><a href="index.html">CK</a></div>
                <nav class="footer-nav">
                    <ul class="footer-links">
                        <li><a href="work.html">Work</a></li>
                        <li><a href="experience.html">Experience</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="#" class="contact-trigger" data-modal="contact">Contact</a></li>
                    </ul>
                </nav>
                <div class="footer-info">
                    <p class="copyright">© <span id="current-year">2026</span> Chandana Konduru. All rights reserved.</p>
                    <p class="built-with">Built with AI · Deployed on Vercel</p>
                </div>
            </div>
        </div>
    </footer>

    <!-- Contact Modal -->
    <div class="modal" id="contact-modal" role="dialog" aria-labelledby="contact-modal-title" aria-hidden="true">
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close" aria-label="Close contact form">×</button>
            <h2 id="contact-modal-title">Get In Touch</h2>
            <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5" required placeholder="Tell me about the opportunity..."></textarea>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary modal-cancel">Cancel</button>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </div>
            </form>
        </div>
    </div>

    <script src="js/script.js"></script>
</body>
</html>
```

---

## CSS Styles for About Page

```css
/* ABOUT PAGE STYLES */

/* Hero Section */
.about-hero {
    padding: var(--space-xl) 0;
    background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-card) 100%);
}

.about-hero .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--space-xl);
    align-items: center;
}

.greeting {
    font-size: 1.25rem;
    color: var(--accent-primary);
    font-weight: 500;
    margin-bottom: var(--space-sm);
}

.brand-statement {
    font-size: 2.25rem;
    font-weight: 600;
    line-height: 1.2;
    color: var(--text-primary);
    margin-bottom: var(--space-md);
}

.brand-statement .highlight {
    color: var(--accent-primary);
    position: relative;
}

.brand-statement .highlight::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: rgba(193, 124, 94, 0.2);
    z-index: -1;
}

.hero-context {
    font-size: 1.125rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin-bottom: var(--space-md);
}

.location-pill {
    display: inline-block;
    background: var(--bg-card);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-weight: 500;
    border: 1px solid var(--border-subtle);
}

.hero-ctas {
    display: flex;
    gap: var(--space-sm);
}

.hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
}

.portrait-placeholder {
    width: 280px;
    height: 350px;
    background: var(--accent-subtle);
    border-radius: 16px;
    position: relative;
    overflow: hidden;
}

.portrait-placeholder::after {
    content: '👩‍💼';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 8rem;
    opacity: 0.3;
}

/* My Journey Section */
.my-journey {
    padding: var(--space-xl) 0;
    background: var(--bg-card);
}

.journey-narrative {
    display: flex;
    align-items: flex-start;
    gap: var(--space-md);
    margin-top: var(--space-lg);
    overflow-x: auto;
    padding-bottom: var(--space-md);
}

.journey-phase {
    flex: 1;
    min-width: 250px;
    background: var(--bg-primary);
    padding: var(--space-md);
    border-radius: 16px;
    border: 1px solid var(--border-subtle);
    position: relative;
}

.journey-phase.current {
    border-color: var(--accent-primary);
    box-shadow: 0 4px 12px rgba(193, 124, 94, 0.1);
}

.phase-label {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--accent-primary);
    margin-bottom: var(--space-xs);
}

.journey-phase h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: var(--space-sm);
    color: var(--text-primary);
}

.journey-phase p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--text-secondary);
}

.journey-phase p strong {
    color: var(--text-primary);
    font-weight: 500;
}

.journey-arrow {
    font-size: 2rem;
    color: var(--accent-primary);
    align-self: center;
    flex-shrink: 0;
}

/* Superpowers Section */
.superpowers {
    padding: var(--space-xl) 0;
}

.section-subtitle {
    text-align: center;
    color: var(--text-secondary);
    margin-top: calc(var(--space-sm) * -1);
    margin-bottom: var(--space-lg);
}

.superpowers-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-md);
}

.superpower-card {
    text-align: center;
    padding: var(--space-md);
}

.superpower-icon {
    font-size: 2.5rem;
    margin-bottom: var(--space-sm);
}

.superpower-card h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: var(--space-sm);
    color: var(--text-primary);
}

.superpower-card p {
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--text-secondary);
}

/* My Approach Section */
.my-approach {
    padding: var(--space-xl) 0;
    background: var(--bg-card);
}

.approach-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-md);
}

.approach-card {
    background: var(--bg-primary);
    padding: var(--space-md);
    border-radius: 12px;
    border: 1px solid var(--border-subtle);
}

.approach-card h4 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: var(--space-sm);
    color: var(--text-primary);
}

.approach-card p {
    font-size: 0.875rem;
    line-height: 1.5;
    color: var(--text-secondary);
}

/* Beyond Work Section */
.beyond-work {
    padding: var(--space-xl) 0;
}

.beyond-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--space-xl);
}

.beyond-left p {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--text-secondary);
    margin-bottom: var(--space-sm);
}

.energy-list {
    list-style: none;
    padding: 0;
    margin: var(--space-md) 0 0 0;
}

.energy-list li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 0;
    font-size: 0.95rem;
    color: var(--text-primary);
    border-bottom: 1px solid var(--border-subtle);
}

.energy-list li:last-child {
    border-bottom: none;
}

.energy-dot {
    width: 8px;
    height: 8px;
    background: var(--accent-primary);
    border-radius: 50%;
}

/* CTA Section */
.about-cta {
    padding: var(--space-xl) 0;
    background: var(--bg-card);
    text-align: center;
}

.about-cta h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: var(--space-sm);
    color: var(--text-primary);
}

.about-cta p {
    font-size: 1.125rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto var(--space-md);
}

.cta-buttons {
    display: flex;
    justify-content: center;
    gap: var(--space-sm);
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
    .superpowers-grid,
    .approach-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .journey-narrative {
        flex-direction: column;
    }
    
    .journey-arrow {
        transform: rotate(90deg);
    }
}

@media (max-width: 768px) {
    .about-hero .container {
        grid-template-columns: 1fr;
    }
    
    .brand-statement {
        font-size: 1.75rem;
    }
    
    .hero-visual {
        order: -1;
    }
    
    .portrait-placeholder {
        width: 200px;
        height: 250px;
    }
    
    .beyond-content {
        grid-template-columns: 1fr;
    }
    
    .superpowers-grid,
    .approach-grid {
        grid-template-columns: 1fr;
    }
}
```

---

## QODER Prompt for About Page

```
Build the About page at /about.html optimized for recruiter conversion:

NAVIGATION (Identical to all pages):
- Fixed top nav: Logo (CK) | Work | Experience | About (active) | Contact | Resume button
- Soft Snow background, Deep Ink text, Terracotta accents
- Backdrop blur, mobile-responsive hamburger menu

PAGE STRUCTURE — Optimized for AI Product Manager hiring:

1. HERO SECTION — Personal Brand Statement
   - Greeting: "Hello, I'm Chandana 👋"
   - Headline: "I bridge technical architecture with human-centered design to build AI systems that solve real problems—not just impressive demos."
   - Context line: 5+ years, USA/India/UK, B2B SaaS/IoT/Healthcare AI
   - Two CTAs: "See My Work" (primary) and "Download Resume" (secondary)
   - Visual: Professional headshot placeholder or abstract portrait

2. MY JOURNEY — Narrative Arc (show progression)
   Four phases with arrows between:
   - Engineering Roots (NTT Data): "Technical depth is essential for credible product leadership"
   - Design Thinking & AI (Data Foundry): "Human-AI collaboration, 30%→85% AI acceptance"
   - Global Product Strategy (ZKTeco): "4 countries, unified platforms with local relevance"
   - Agentic AI & Community (Now): "Vibe coding, responsible AI, community projects"

3. MY SUPERPOWERS — Differentiators (4 cards)
   - Systems Thinking: "See beyond features to system behavior"
   - Technical-Business Bridge: "Fluent in C#/.NET/APIs and revenue/retention"
   - Global Perspective: "Cross-cultural teams, celebrating differences"
   - Evidence-Driven: "Data-backed decisions, measurable results"

4. MY APPROACH — Philosophy (4 cards)
   - Responsible AI First
   - User-Centered Innovation  
   - Systematic Excellence
   - Continuous Learning

5. BEYOND WORK — Human Element
   - Left: Paragraphs on open source, mentoring, hackathons, systems thinking in nature
   - Right: "What Energizes Me" list with dots (Open Source, Hackathons, Mentoring, etc.)

6. CTA SECTION — Conversion
   - "Let's Build Something Impactful Together"
   - Contact button + Resume button
   - Centered, prominent

DESIGN PRINCIPLES:
- Clean, calm, professional (maintain your aesthetic)
- Recruiter scan-friendly: Clear hierarchy, scannable sections
- Conversion-optimized: CTAs at hero and bottom
- Personal but professional: Show personality without oversharing
- Mobile-responsive: Stack grids on small screens

COLOR USAGE:
- Terracotta (#C17C5E) for highlights, CTAs, accent dots
- Soft Snow (#F8F6F2) for backgrounds
- Deep Ink (#1C1C1E) for text
- Warm Pebble (#9C8F87) for secondary text

GOAL: Recruiter sees this and thinks "This person can lead AI products, bridge tech and business, and has shipped real products with measurable impact. I need to interview them."
```

This About page follows **2025 best practices for AI Product Manager portfolios**: strong personal brand statement, narrative journey showing growth, quantified differentiators, clear philosophy, human element, and conversion-focused CTAs .