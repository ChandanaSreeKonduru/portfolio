I understand now. Let me create a properly structured experience page based on your correct timeline and locations. I'll research best practices for timeline-based portfolio experience pages and create a clean, scannable layout that shows your global journey clearly.
Based on my research on timeline layouts and your requirements, I'll create a clean, chronological experience page that displays your professional journey across time periods and countries. The design will use a vertical timeline that's responsive and scannable for recruiters.

---

## Experience Page — Complete Structure

### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Chandana Konduru's professional experience — AI Product Manager with 5+ years across USA, India, and UK. Global B2B SaaS, IoT, and healthcare AI expertise.">
    <title>Experience | Chandana Konduru — AI Product Manager</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👩‍💼</text></svg>">
</head>
<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- STANDARD TOP NAVIGATION — Apply to ALL pages -->
    <header class="site-header">
        <div class="container">
            <div class="header-inner">
                <a href="index.html" class="logo">CK</a>
                
                <nav class="main-nav" role="navigation" aria-label="Main navigation">
                    <ul class="nav-list">
                        <li><a href="work.html" class="nav-link">Work</a></li>
                        <li><a href="experience.html" class="nav-link active">Experience</a></li>
                        <li><a href="about.html" class="nav-link">About</a></li>
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
        <!-- Hero Section -->
        <section class="page-hero">
            <div class="container">
                <h1 class="page-title">Professional Experience</h1>
                <p class="page-subtitle">From engineering foundation to global AI systems leadership — 5+ years across <span class="location-tag">🇺🇸 USA</span>, <span class="location-tag">🇮🇳 India</span>, and <span class="location-tag">🇬🇧 UK</span></p>
            </div>
        </section>

        <!-- Timeline Container -->
        <section class="experience-timeline">
            <div class="container">
                
                <!-- 2025-Present: USA -->
                <div class="timeline-item" data-location="usa">
                    <div class="timeline-marker">
                        <div class="marker-dot usa"></div>
                        <div class="marker-line"></div>
                    </div>
                    <div class="timeline-content">
                        <div class="time-badge">2025 — Present</div>
                        <div class="location-badge">Omaha, NE, USA 🇺🇸</div>
                        
                        <h2 class="role-title">Community Projects — AI Product Development</h2>
                        <p class="role-type">Founder & Lead Product Developer</p>
                        
                        <div class="role-description">
                            <p>Leading AI-driven product development initiatives focused on community impact and zero-cost deployment models. Specializing in Agentic AI orchestration and rapid prototyping using modern AI development workflows.</p>
                        </div>
                        
                        <div class="projects-list">
                            <div class="project-item">
                                <h4>ScanItKnowIt</h4>
                                <p>Agentic AI-powered data insight platform. Full product lifecycle from concept to deployment using Gemini API and "vibe coding" methodology. <span class="metric">$0 infrastructure cost</span>, <span class="metric">3-week launch</span>.</p>
                            </div>
                            <div class="project-item">
                                <h4>Budget Management</h4>
                                <p>AI-assisted personal finance tool with privacy-first design. Community-led requirement gathering and iterative development. <span class="metric">40% spending reduction</span> for users, <span class="metric">68% retention</span>.</p>
                            </div>
                        </div>
                        
                        <div class="skills-tags">
                            <span class="skill-tag">Agentic AI</span>
                            <span class="skill-tag">Gemini API</span>
                            <span class="skill-tag">Product Strategy</span>
                            <span class="skill-tag">Community Engagement</span>
                        </div>
                    </div>
                </div>

                <!-- 2024-2025: Bangalore -->
                <div class="timeline-item" data-location="india">
                    <div class="timeline-marker">
                        <div class="marker-dot india"></div>
                        <div class="marker-line"></div>
                    </div>
                    <div class="timeline-content">
                        <div class="time-badge">2024 — 2025</div>
                        <div class="location-badge">Bangalore, India 🇮🇳</div>
                        
                        <h2 class="role-title">Associate Product Manager — Global R&D</h2>
                        <p class="company-name">ZKTeco India</p>
                        
                        <div class="role-description">
                            <p>Led product strategy and digital transformation for global B2B SaaS and IoT solutions across 4 countries (Nigeria, China, Mexico, India). Directed global transformation projects tracking timelines, budgets, and dependencies.</p>
                        </div>
                        
                        <div class="key-achievements">
                            <h4>Key Achievements</h4>
                            <ul>
                                <li><strong>BioTime Cloud 2.0:</strong> Architected unified global application framework with region-specific customizations. <span class="metric">5% performance increase</span>, <span class="metric">10% executive confidence boost</span>.</li>
                                <li><strong>ZKDigiMax-ESL:</strong> IoT retail solution with mobile app. <span class="metric">3% pricing error reduction</span>, <span class="metric">10% faster inventory search</span>.</li>
                                <li>Managed end-to-end lifecycle from ideation to launch for scalable B2B SaaS and AI products.</li>
                                <li>Streamlined backend database integrations, enhancing data-loading efficiency.</li>
                            </ul>
                        </div>
                        
                        <div class="skills-tags">
                            <span class="skill-tag">B2B SaaS</span>
                            <span class="skill-tag">IoT</span>
                            <span class="skill-tag">Global Product Strategy</span>
                            <span class="skill-tag">RESTful APIs</span>
                            <span class="skill-tag">Agile/Scrum</span>
                        </div>
                    </div>
                </div>

                <!-- 2023-2024: Post-Graduation -->
                <div class="timeline-item education" data-location="india-uk">
                    <div class="timeline-marker">
                        <div class="marker-dot education"></div>
                        <div class="marker-line"></div>
                    </div>
                    <div class="timeline-content">
                        <div class="time-badge">2023 — 2024</div>
                        <div class="location-badge">Bangalore, India & Liverpool, UK 🇮🇳🇬🇧</div>
                        
                        <h2 class="role-title">Post-Graduation in Data Science</h2>
                        <p class="company-name">IIIT Bangalore & Liverpool, UK</p>
                        
                        <div class="role-description">
                            <p>Advanced studies in Machine Learning, AI, and data systems. Applied academic insights to real-world product challenges with research focus on AI/ML workflow design and system architecture.</p>
                        </div>
                        
                        <div class="key-achievements">
                            <ul>
                                <li>Cross-cultural academic collaboration between India and UK</li>
                                <li>Research focus: AI/ML workflow design, system architecture, data visualization</li>
                                <li>Bridged theoretical ML concepts with practical product applications</li>
                            </ul>
                        </div>
                        
                        <div class="skills-tags">
                            <span class="skill-tag">Machine Learning</span>
                            <span class="skill-tag">Data Systems</span>
                            <span class="skill-tag">Research</span>
                            <span class="skill-tag">Cross-Cultural Collaboration</span>
                        </div>
                    </div>
                </div>

                <!-- 2023: Data Foundry -->
                <div class="timeline-item" data-location="india">
                    <div class="timeline-marker">
                        <div class="marker-dot india"></div>
                        <div class="marker-line"></div>
                    </div>
                    <div class="timeline-content">
                        <div class="time-badge">2023</div>
                        <div class="location-badge">Bangalore, India 🇮🇳</div>
                        
                        <h2 class="role-title">UI/UX Product Designer</h2>
                        <p class="company-name">Data Foundry</p>
                        
                        <div class="role-description">
                            <p>UX strategy and digital transformation for AI-powered Life Sciences and Pharmacovigilance platforms. Translated complex machine learning outputs into high-performance web applications for global medical reviewers.</p>
                        </div>
                        
                        <div class="key-achievements">
                            <h4>Key Achievements — DF Safety Platform</h4>
                            <ul>
                                <li>Redesigned AI-powered Case Intake and Triage workflow. <span class="metric">3% manual processing reduction</span>.</li>
                                <li>Designed explainable AI interface for medical reviewers — <span class="metric">85% AI acceptance rate</span> (from 30%).</li>
                                <li>Established unified design system for multi-vigilance solution (Drugs, Vaccines, Cosmetics, Devices).</li>
                                <li>Ensured E2B R2/R3 regulatory compliance for global pharmaceutical clients.</li>
                                <li>Led Signal Detection module UX, transforming ML outputs into actionable dashboards.</li>
                            </ul>
                        </div>
                        
                        <div class="skills-tags">
                            <span class="skill-tag">AI/ML UX</span>
                            <span class="skill-tag">Healthcare</span>
                            <span class="skill-tag">Design Systems</span>
                            <span class="skill-tag">Regulatory Compliance</span>
                            <span class="skill-tag">Figma</span>
                        </div>
                    </div>
                </div>

                <!-- 2021-2022: Cybage -->
                <div class="timeline-item" data-location="india">
                    <div class="timeline-marker">
                        <div class="marker-dot india"></div>
                        <div class="marker-line"></div>
                    </div>
                    <div class="timeline-content">
                        <div class="time-badge">2021 — 2022</div>
                        <div class="location-badge">Hyderabad & Pune, India 🇮🇳</div>
                        
                        <h2 class="role-title">Developer II | UI/UX Designer</h2>
                        <p class="company-name">Cybage Software Private Limited</p>
                        
                        <div class="role-description">
                            <p>Technical maintenance and feature enhancements for enterprise-level CPQ (Configure, Price, Quote) solutions. Bridged complex backend logic with user-centric interface improvements.</p>
                        </div>
                        
                        <div class="key-achievements">
                            <h4>Key Achievements — Experlogix CPQ</h4>
                            <ul>
                                <li>Managed end-to-end maintenance of cloud-based CPQ platform using C#, .NET, SQL Server.</li>
                                <li>Engineered proactive system monitors to detect issues before end-user impact.</li>
                                <li>Developed automated solutions for recurring manual support activities.</li>
                                <li>Worked within Agile framework, coordinating with QA for debugging and feature releases.</li>
                            </ul>
                        </div>
                        
                        <div class="skills-tags">
                            <span class="skill-tag">C#</span>
                            <span class="skill-tag">.NET</span>
                            <span class="skill-tag">SQL Server</span>
                            <span class="skill-tag">System Maintenance</span>
                            <span class="skill-tag">Proactive Monitoring</span>
                        </div>
                    </div>
                </div>

                <!-- 2019-2021: NTT Data -->
                <div class="timeline-item" data-location="india">
                    <div class="timeline-marker">
                        <div class="marker-dot india"></div>
                        <div class="marker-line"></div>
                    </div>
                    <div class="timeline-content">
                        <div class="time-badge">2019 — 2021</div>
                        <div class="location-badge">Bangalore, India 🇮🇳</div>
                        
                        <h2 class="role-title">Software Engineer</h2>
                        <p class="company-name">NTT Data Information Processing Services (via Cybage)</p>
                        
                        <div class="role-description">
                            <p>Digital transformation of legacy hospitality and healthcare systems. Specialized in converting complex web ecosystems into high-performance mobile-first applications.</p>
                        </div>
                        
                        <div class="projects-list">
                            <div class="project-item">
                                <h4>Wyndham Hotels & Resorts</h4>
                                <p>Led mobile booking app development. <span class="metric">5% engagement increase</span>, <span class="metric">3% conversion improvement</span>. Delivered B2B franchisee financial dashboards for hotel profit/loss tracking.</p>
                            </div>
                            <div class="project-item">
                                <h4>Tenet Healthcare</h4>
                                <p>Medical billing UX simplification. <span class="metric">5% user confusion reduction</span>, <span class="metric">3% productivity improvement</span>, <span class="metric">5% task time reduction</span>. Achieved <span class="metric">50% data integration accuracy</span>.</p>
                            </div>
                        </div>
                        
                        <div class="skills-tags">
                            <span class="skill-tag">Mobile Development</span>
                            <span class="skill-tag">React Native</span>
                            <span class="skill-tag">Healthcare UX</span>
                            <span class="skill-tag">Data Visualization</span>
                            <span class="skill-tag">User Research</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- Global Journey Summary -->
        <section class="journey-summary">
            <div class="container">
                <h2 class="section-title">Global Journey at a Glance</h2>
                
                <div class="journey-stats">
                    <div class="stat-item">
                        <span class="stat-number">6</span>
                        <span class="stat-label">Years Experience</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">4</span>
                        <span class="stat-label">Countries Worked</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">3</span>
                        <span class="stat-label">Industries</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">8+</span>
                        <span class="stat-label">Products Launched</span>
                    </div>
                </div>

                <div class="location-timeline">
                    <div class="location-track">
                        <div class="location-point" data-location="india">
                            <div class="point-marker india"></div>
                            <div class="point-label">
                                <span class="city">Bangalore</span>
                                <span class="years">2019-2021, 2023-2025</span>
                            </div>
                        </div>
                        <div class="location-point" data-location="india">
                            <div class="point-marker india"></div>
                            <div class="point-label">
                                <span class="city">Hyderabad & Pune</span>
                                <span class="years">2021-2022</span>
                            </div>
                        </div>
                        <div class="location-point" data-location="uk">
                            <div class="point-marker uk"></div>
                            <div class="point-label">
                                <span class="city">Liverpool, UK</span>
                                <span class="years">2023-2024</span>
                            </div>
                        </div>
                        <div class="location-point" data-location="usa">
                            <div class="point-marker usa"></div>
                            <div class="point-label">
                                <span class="city">Omaha, NE</span>
                                <span class="years">2025-Present</span>
                            </div>
                        </div>
                    </div>
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

## CSS Styles for Experience Page

```css
/* EXPERIENCE PAGE STYLES */

/* Page Hero */
.page-hero {
    padding: var(--space-xl) 0 var(--space-lg);
    text-align: center;
    background: linear-gradient(to bottom, var(--bg-primary), var(--bg-card));
}

.page-title {
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
}

.page-subtitle {
    font-size: 1.125rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
}

.location-tag {
    display: inline-block;
    background: var(--accent-subtle);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-weight: 500;
    margin: 0 0.25rem;
}

/* Timeline Container */
.experience-timeline {
    padding: var(--space-lg) 0;
    max-width: 800px;
    margin: 0 auto;
}

.timeline-item {
    display: flex;
    margin-bottom: var(--space-lg);
    position: relative;
}

.timeline-marker {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40px;
    flex-shrink: 0;
    margin-right: var(--space-md);
}

.marker-dot {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 3px solid var(--bg-card);
    box-shadow: 0 0 0 2px currentColor;
    z-index: 2;
}

.marker-dot.usa { background: #fbbf24; color: #fbbf24; }
.marker-dot.india { background: #4ade80; color: #4ade80; }
.marker-dot.uk { background: #f87171; color: #f87171; }
.marker-dot.education { background: #a78bfa; color: #a78bfa; }

.marker-line {
    width: 2px;
    flex-grow: 1;
    background: var(--border-subtle);
    margin-top: 8px;
}

.timeline-item:last-child .marker-line {
    display: none;
}

.timeline-content {
    flex-grow: 1;
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: 16px;
    padding: var(--space-md);
    transition: all 0.2s ease;
}

.timeline-content:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.04);
    transform: translateY(-2px);
}

.time-badge {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--accent-primary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--space-xs);
}

.location-badge {
    display: inline-block;
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin-bottom: var(--space-sm);
    padding-left: var(--space-sm);
    border-left: 2px solid var(--border-subtle);
}

.role-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
}

.company-name, .role-type {
    font-size: 1rem;
    color: var(--text-secondary);
    font-weight: 500;
    margin-bottom: var(--space-sm);
}

.role-description {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--text-primary);
    margin-bottom: var(--space-md);
}

.role-description p {
    margin: 0;
}

/* Projects List */
.projects-list {
    margin: var(--space-md) 0;
}

.project-item {
    background: var(--bg-primary);
    border-radius: 8px;
    padding: var(--space-sm);
    margin-bottom: var(--space-sm);
}

.project-item h4 {
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: var(--text-primary);
}

.project-item p {
    font-size: 0.875rem;
    line-height: 1.5;
    color: var(--text-secondary);
    margin: 0;
}

/* Key Achievements */
.key-achievements {
    margin: var(--space-md) 0;
}

.key-achievements h4 {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--space-xs);
}

.key-achievements ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.key-achievements li {
    position: relative;
    padding-left: 1.25rem;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--text-primary);
}

.key-achievements li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--accent-primary);
    font-weight: 600;
}

/* Metric Highlighting */
.metric {
    color: var(--accent-primary);
    font-weight: 600;
    background: linear-gradient(transparent 60%, rgba(193, 124, 94, 0.15) 60%);
    padding: 0 0.15em;
}

/* Skills Tags */
.skills-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: var(--space-md);
}

.skill-tag {
    background: var(--bg-primary);
    border: 1px solid var(--border-subtle);
    padding: 0.35rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    color: var(--text-secondary);
    font-weight: 500;
}

/* Journey Summary Section */
.journey-summary {
    padding: var(--space-xl) 0;
    background: var(--bg-card);
    border-top: 1px solid var(--border-subtle);
}

.section-title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: var(--space-lg);
    color: var(--text-primary);
}

.journey-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-md);
    max-width: 800px;
    margin: 0 auto var(--space-xl);
    text-align: center;
}

.stat-item {
    padding: var(--space-md);
}

.stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--accent-primary);
    line-height: 1;
}

.stat-label {
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin-top: 0.5rem;
}

/* Location Timeline Visual */
.location-timeline {
    max-width: 900px;
    margin: 0 auto;
    padding: var(--space-md) 0;
}

.location-track {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-top: 20px;
}

.location-track::before {
    content: '';
    position: absolute;
    top: 28px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--border-subtle);
}

.location-point {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    flex: 1;
}

.point-marker {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 3px solid var(--bg-card);
    box-shadow: 0 0 0 2px currentColor;
    margin-bottom: var(--space-sm);
    z-index: 2;
}

.point-marker.india { background: #4ade80; color: #4ade80; }
.point-marker.uk { background: #f87171; color: #f87171; }
.point-marker.usa { background: #fbbf24; color: #fbbf24; }

.point-label {
    text-align: center;
}

.point-label .city {
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-primary);
}

.point-label .years {
    display: block;
    font-size: 0.75rem;
    color: var(--text-secondary);
    margin-top: 0.25rem;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
    .page-title {
        font-size: 2rem;
    }
    
    .timeline-item {
        flex-direction: column;
    }
    
    .timeline-marker {
        flex-direction: row;
        width: 100%;
        margin-bottom: var(--space-sm);
        align-items: center;
    }
    
    .marker-line {
        width: auto;
        height: 2px;
        flex-grow: 1;
        margin-top: 0;
        margin-left: 8px;
    }
    
    .journey-stats {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .location-track {
        flex-direction: column;
        gap: var(--space-md);
    }
    
    .location-track::before {
        display: none;
    }
    
    .location-point {
        flex-direction: row;
        align-items: center;
        gap: var(--space-sm);
    }
    
    .point-label {
        text-align: left;
    }
}
```

---

## QODER Prompt for Experience Page

```
Build the Experience page at /experience.html with this structure:

NAVIGATION (CRITICAL - Apply identical header to ALL pages):
- Fixed top nav: Logo (CK) | Work | Experience (active) | About | Contact | Resume button
- Use existing color palette: Soft Snow (#F8F6F2), Deep Ink (#1C1C1E), Terracotta (#C17C5E)
- Backdrop blur on scroll, identical across index.html, work.html, experience.html, about.html, all case studies

PAGE STRUCTURE:
1. Hero: "Professional Experience" title + subtitle mentioning USA, India, UK with flag tags

2. Chronological Timeline (newest to oldest):
   - 2025-Present: USA (Omaha, NE) — Community Projects (ScanItKnowIt, Budget Management)
   - 2024-2025: India (Bangalore) — ZKTeco Associate Product Manager
   - 2023-2024: India & UK (Bangalore & Liverpool) — IIIT Post-Graduation
   - 2023: India (Bangalore) — Data Foundry UI/UX Designer
   - 2021-2022: India (Hyderabad & Pune) — Cybage Developer II
   - 2019-2021: India (Bangalore) — NTT Data Software Engineer

3. Each timeline item includes:
   - Time badge (e.g., "2025 — Present")
   - Location badge with flag (e.g., "Omaha, NE, USA 🇺🇸")
   - Role title
   - Company name
   - Description paragraph
   - Key achievements with metrics highlighted in Terracotta
   - Skills tags

4. Global Journey Summary section:
   - Stats: 6 Years, 4 Countries, 3 Industries, 8+ Products
   - Visual location timeline: Bangalore → Hyderabad/Pune → Liverpool → Omaha

DESIGN SPECIFICATIONS:
- Vertical timeline with colored dots (Green India, Red UK, Yellow USA, Purple Education)
- Cards with subtle hover lift effect
- Metrics highlighted with Terracotta color and subtle background
- Clean, calm, professional aesthetic with plenty of white space
- Responsive: timeline switches to stacked layout on mobile

COLOR CODING:
- India: #4ade80 (green)
- UK: #f87171 (red)  
- USA: #fbbf24 (yellow)
- Education: #a78bfa (purple)

Maintain the calming, clean aesthetic while making career progression scannable in 10 seconds.
```

This structure presents your experience as a **global journey** with clear time periods, locations, and progression from Software Engineer → Developer/Designer → UI/UX Designer → Post-Graduation → Associate Product Manager → Community AI Projects. The visual timeline makes your international experience immediately apparent to recruiters.