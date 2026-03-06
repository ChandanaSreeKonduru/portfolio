I'll give you a complete, working homepage with fixed navigation that actually converts recruiters. This is based on what works for technical product portfolios: **show work first, talk later**.

---

## Complete Working Homepage (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Chandana Konduru — AI Product Manager. 5+ years shipping B2B SaaS, IoT, healthcare AI. Former ZKTeco, Data Foundry, NTT Data.">
    <title>Chandana Konduru — AI Product Manager</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    
    <style>
        /* CSS VARIABLES - Rhode Skin Inspired */
        :root {
            --bg: #F8F6F2;
            --bg-card: #FFFFFF;
            --bg-elevated: #FFFFFF;
            --text: #1C1C1E;
            --text-secondary: #6B6B6E;
            --text-muted: #9C9CA0;
            --accent: #C17C5E;
            --accent-light: #F5E6DC;
            --accent-hover: #A6694D;
            --border: #E8E4DE;
            --shadow: 0 4px 20px rgba(0,0,0,0.08);
            --shadow-lg: 0 10px 40px rgba(0,0,0,0.12);
            
            --space-xs: 0.5rem;
            --space-sm: 1rem;
            --space-md: 1.5rem;
            --space-lg: 3rem;
            --space-xl: 5rem;
            
            --radius: 12px;
            --radius-lg: 16px;
        }

        [data-theme="dark"] {
            --bg: #1C1C1E;
            --bg-card: #2C2C2E;
            --bg-elevated: #3A3A3C;
            --text: #F5F5F7;
            --text-secondary: #A1A1A6;
            --text-muted: #6E6E73;
            --accent: #D4A574;
            --accent-light: #3D3229;
            --border: #3A3A3C;
            --shadow: 0 4px 20px rgba(0,0,0,0.3);
            --shadow-lg: 0 10px 40px rgba(0,0,0,0.4);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--bg);
            color: var(--text);
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
            transition: background 0.3s, color 0.3s;
        }

        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
        }

        /* SKIP LINK */
        .skip-link {
            position: absolute;
            top: -100%;
            left: 50%;
            transform: translateX(-50%);
            background: var(--accent);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 0 0 8px 8px;
            z-index: 10000;
            text-decoration: none;
            font-size: 0.875rem;
        }

        .skip-link:focus {
            top: 0;
        }

        /* ============================================
           NAVIGATION - FIXED & FUNCTIONAL
           ============================================ */
        .site-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 70px;
            background: rgba(248, 246, 242, 0.95);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border);
            z-index: 1000;
            transition: all 0.3s;
        }

        [data-theme="dark"] .site-header {
            background: rgba(28, 28, 30, 0.95);
        }

        .header-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 70px;
            gap: 1rem;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--text);
            text-decoration: none;
            letter-spacing: -0.02em;
            flex-shrink: 0;
        }

        .main-nav {
            display: none;
            align-items: center;
            gap: 2rem;
        }

        .nav-link {
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--text-secondary);
            text-decoration: none;
            padding: 0.5rem 0;
            position: relative;
            transition: color 0.2s;
        }

        .nav-link:hover {
            color: var(--text);
        }

        .nav-link.active {
            color: var(--text);
        }

        .nav-link.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: var(--accent);
            border-radius: 2px;
        }

        .header-actions {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .theme-toggle {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid var(--border);
            background: var(--bg-card);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text);
            position: relative;
            overflow: hidden;
            transition: all 0.2s;
        }

        .theme-toggle:hover {
            border-color: var(--accent);
            transform: scale(1.05);
        }

        .theme-toggle svg {
            width: 20px;
            height: 20px;
            position: absolute;
            transition: all 0.3s;
        }

        .icon-sun { opacity: 0; transform: rotate(-90deg); }
        .icon-moon { opacity: 1; transform: rotate(0); }

        [data-theme="dark"] .icon-sun { opacity: 1; transform: rotate(0); }
        [data-theme="dark"] .icon-moon { opacity: 0; transform: rotate(90deg); }

        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.6rem 1.2rem;
            border-radius: var(--radius);
            font-size: 0.9rem;
            font-weight: 500;
            transition: all 0.2s;
            border: none;
            cursor: pointer;
            text-decoration: none;
        }

        .btn-primary {
            background: var(--text);
            color: var(--bg);
        }

        .btn-primary:hover {
            background: var(--accent);
            transform: translateY(-1px);
            box-shadow: var(--shadow);
        }

        .btn-secondary {
            background: transparent;
            color: var(--text);
            border: 1px solid var(--border);
        }

        .btn-secondary:hover {
            border-color: var(--text);
            background: var(--bg-card);
        }

        .btn-outline {
            background: transparent;
            color: var(--text);
            border: 1px solid var(--text);
            padding: 0.875rem 1.5rem;
        }

        .btn-outline:hover {
            background: var(--text);
            color: var(--bg);
        }

        .btn-sm {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
        }

        /* Mobile Menu Toggle */
        .menu-toggle {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            gap: 5px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 8px;
            border-radius: 8px;
        }

        .menu-toggle:hover {
            background: var(--bg-card);
        }

        .menu-toggle span {
            width: 24px;
            height: 2px;
            background: var(--text);
            border-radius: 2px;
            transition: all 0.3s;
        }

        .menu-toggle.active span:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
        }

        .menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }

        .menu-toggle.active span:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
        }

        /* Mobile Menu Overlay */
        .mobile-menu {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--bg);
            padding: 2rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            z-index: 999;
            overflow-y: auto;
        }

        .mobile-menu.active {
            transform: translateX(0);
        }

        .mobile-menu a {
            font-size: 1.5rem;
            font-weight: 500;
            color: var(--text);
            text-decoration: none;
            padding: 1rem 0;
            border-bottom: 1px solid var(--border);
        }

        .mobile-menu a:hover {
            color: var(--accent);
        }

        .mobile-menu-footer {
            margin-top: auto;
            padding-top: 2rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .mobile-theme-toggle {
            padding: 1rem;
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            color: var(--text);
            font-size: 1rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        /* Desktop */
        @media (min-width: 768px) {
            .main-nav {
                display: flex;
            }
            
            .menu-toggle {
                display: none;
            }
        }

        /* ============================================
           HERO - MICRO & PUNCHY
           ============================================ */
        .hero {
            padding-top: calc(70px + 4rem);
            padding-bottom: 3rem;
            text-align: center;
        }

        .hero h1 {
            font-size: clamp(1.75rem, 5vw, 2.5rem);
            font-weight: 600;
            line-height: 1.2;
            margin-bottom: 1rem;
            color: var(--text);
        }

        .hero > p {
            font-size: 1.125rem;
            color: var(--text-secondary);
            max-width: 600px;
            margin: 0 auto 1.5rem;
            line-height: 1.6;
        }

        .hero-tags {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.5rem;
        }

        .hero-tags span {
            padding: 0.4rem 1rem;
            background: var(--accent-light);
            color: var(--accent);
            border-radius: 20px;
            font-size: 0.875rem;
            font-weight: 500;
        }

        /* ============================================
           WORK SHOWCASE - THE MAIN EVENT
           ============================================ */
        .work-showcase {
            padding: 3rem 0 5rem;
        }

        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 2rem;
            flex-wrap: wrap;
            gap: 1rem;
        }

        .section-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--text);
        }

        .view-all {
            font-size: 0.9rem;
            color: var(--accent);
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }

        .view-all:hover {
            gap: 0.5rem;
        }

        .projects-grid {
            display: grid;
            gap: 1.5rem;
            margin-bottom: 3rem;
        }

        @media (min-width: 768px) {
            .projects-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        .project-card {
            background: var(--bg-card);
            border-radius: var(--radius-lg);
            overflow: hidden;
            border: 1px solid var(--border);
            transition: all 0.3s ease;
            height: 100%;
        }

        .project-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-lg);
            border-color: var(--accent);
        }

        .project-card a {
            display: block;
            height: 100%;
            text-decoration: none;
            color: inherit;
        }

        .project-visual {
            height: 180px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 1rem;
            position: relative;
            color: white;
        }

        .project-type {
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            background: rgba(0,0,0,0.4);
            padding: 0.35rem 0.75rem;
            border-radius: 20px;
            width: fit-content;
            backdrop-filter: blur(4px);
        }

        .project-icon {
            font-size: 3rem;
            align-self: flex-end;
            opacity: 0.9;
        }

        .project-info {
            padding: 1.5rem;
        }

        .project-info h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.25rem;
            color: var(--text);
        }

        .project-role {
            font-size: 0.875rem;
            color: var(--accent);
            font-weight: 500;
            margin-bottom: 0.75rem;
        }

        .project-desc {
            font-size: 0.95rem;
            color: var(--text-secondary);
            line-height: 1.5;
            margin-bottom: 1rem;
        }

        .project-metrics {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .metric {
            font-size: 0.8rem;
            color: var(--text-muted);
            background: var(--bg);
            padding: 0.35rem 0.75rem;
            border-radius: 20px;
            font-weight: 500;
        }

        /* ============================================
           SKILLS MATRIX
           ============================================ */
        .skills-section {
            padding: 4rem 0;
            background: var(--bg-card);
            border-top: 1px solid var(--border);
            border-bottom: 1px solid var(--border);
        }

        .skills-grid {
            display: grid;
            gap: 2rem;
        }

        @media (min-width: 768px) {
            .skills-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        .skill-group h4 {
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 1rem;
        }

        .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .skill-tag {
            padding: 0.5rem 1rem;
            background: var(--bg);
            border: 1px solid var(--border);
            border-radius: 20px;
            font-size: 0.875rem;
            color: var(--text-secondary);
            transition: all 0.2s;
        }

        .skill-tag:hover {
            border-color: var(--accent);
            color: var(--accent);
        }

        /* ============================================
           TRUST BAR
           ============================================ */
        .trust-bar {
            padding: 2rem 0;
            text-align: center;
            border-bottom: 1px solid var(--border);
        }

        .trust-bar p {
            font-size: 0.95rem;
            color: var(--text-secondary);
        }

        .trust-bar strong {
            color: var(--text);
            font-weight: 500;
        }

        /* ============================================
           CTA SECTION
           ============================================ */
        .cta-section {
            padding: 5rem 0;
            text-align: center;
        }

        .cta-section h2 {
            font-size: 1.75rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .cta-section > p {
            color: var(--text-secondary);
            margin-bottom: 2rem;
        }

        .cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        /* ============================================
           FOOTER
           ============================================ */
        .site-footer {
            padding: 2rem 0;
            border-top: 1px solid var(--border);
            text-align: center;
        }

        .site-footer p {
            font-size: 0.875rem;
            color: var(--text-muted);
        }

        /* ============================================
           MODAL
           ============================================ */
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s;
        }

        .modal.active {
            opacity: 1;
            visibility: visible;
        }

        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            backdrop-filter: blur(4px);
        }

        .modal-content {
            position: relative;
            background: var(--bg-card);
            border-radius: var(--radius-lg);
            padding: 2rem;
            width: 100%;
            max-width: 500px;
            box-shadow: var(--shadow-lg);
            transform: scale(0.95);
            transition: transform 0.3s;
        }

        .modal.active .modal-content {
            transform: scale(1);
        }

        .modal-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            width: 36px;
            height: 36px;
            border: none;
            background: var(--bg);
            border-radius: 50%;
            cursor: pointer;
            font-size: 1.25rem;
            color: var(--text-secondary);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .modal-close:hover {
            background: var(--accent-light);
            color: var(--accent);
        }

        .modal-content h2 {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .form-group {
            margin-bottom: 1rem;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 0.875rem;
            border: 1px solid var(--border);
            border-radius: var(--radius);
            background: var(--bg);
            color: var(--text);
            font-family: inherit;
            font-size: 1rem;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--accent);
        }

        .form-group textarea {
            min-height: 120px;
            resize: vertical;
        }

        /* Focus states */
        :focus-visible {
            outline: 2px solid var(--accent);
            outline-offset: 2px;
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
            * {
                animation: none !important;
                transition: none !important;
            }
        }
    </style>
</head>
<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- HEADER -->
    <header class="site-header">
        <div class="container">
            <div class="header-inner">
                <a href="index.html" class="logo">CK</a>
                
                <nav class="main-nav">
                    <a href="work.html" class="nav-link active">Work</a>
                    <a href="experience.html" class="nav-link">Experience</a>
                    <a href="about.html" class="nav-link">About</a>
                    <a href="#" class="nav-link contact-trigger">Contact</a>
                </nav>
                
                <div class="header-actions">
                    <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle dark mode">
                        <!-- Sun -->
                        <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="5"/>
                            <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                        </svg>
                        <!-- Moon -->
                        <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
                        </svg>
                    </button>
                    <a href="resume.pdf" class="btn btn-primary btn-sm" download>Resume</a>
                    
                    <button class="menu-toggle" onclick="toggleMenu()" aria-label="Toggle menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    </header>
    
    <!-- MOBILE MENU -->
    <nav class="mobile-menu" id="mobileMenu">
        <a href="work.html">Work</a>
        <a href="experience.html">Experience</a>
        <a href="about.html">About</a>
        <a href="#" class="contact-trigger" onclick="openModal(); toggleMenu();">Contact</a>
        <div class="mobile-menu-footer">
            <button class="mobile-theme-toggle" onclick="toggleTheme()">
                <span>Toggle Theme</span>
                <span id="themeLabel">Dark</span>
            </button>
            <a href="resume.pdf" class="btn btn-primary" download style="width: 100%;">Download Resume</a>
        </div>
    </nav>

    <!-- MAIN CONTENT -->
    <main id="main-content">
        
        <!-- HERO -->
        <section class="hero">
            <div class="container">
                <h1>AI Product Manager & Global Product Strategist</h1>
                <p>5+ years shipping B2B SaaS, IoT, and healthcare AI across USA, India, and UK. Former ZKTeco, Data Foundry, NTT Data.</p>
                <div class="hero-tags">
                    <span>Agentic AI</span>
                    <span>Global SaaS</span>
                    <span>UX Design</span>
                    <span>Technical PM</span>
                </div>
            </div>
        </section>
        
        <!-- WORK SHOWCASE -->
        <section class="work-showcase">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Selected Work</h2>
                    <a href="work.html" class="view-all">View all 8 projects →</a>
                </div>
                
                <div class="projects-grid">
                    
                    <!-- Project 1 -->
                    <article class="project-card">
                        <a href="work/scan-it-know-it.html">
                            <div class="project-visual" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                                <span class="project-type">Agentic AI</span>
                                <div class="project-icon">🤖</div>
                            </div>
                            <div class="project-info">
                                <h3>Scan It Know It</h3>
                                <p class="project-role">Product Manager & AI Architect</p>
                                <p class="project-desc">Vibe-coded document intelligence platform. Built with Gemini API, 92% accuracy, $0 infrastructure cost.</p>
                                <div class="project-metrics">
                                    <span class="metric">⚡ 3 week build</span>
                                    <span class="metric">🎯 92% accuracy</span>
                                    <span class="metric">💰 $0 cost</span>
                                </div>
                            </div>
                        </a>
                    </article>
                    
                    <!-- Project 2 -->
                    <article class="project-card">
                        <a href="work/biotime-cloud.html">
                            <div class="project-visual" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
                                <span class="project-type">Global SaaS</span>
                                <div class="project-icon">🌍</div>
                            </div>
                            <div class="project-info">
                                <h3>BioTime Cloud 2.0</h3>
                                <p class="project-role">Senior Product Manager — ZKTeco</p>
                                <p class="project-desc">Led 4-country SaaS transformation serving 10,000+ enterprise users. Improved system performance by 5%.</p>
                                <div class="project-metrics">
                                    <span class="metric">🌐 4 countries</span>
                                    <span class="metric">👥 10K+ users</span>
                                    <span class="metric">📈 +5% perf</span>
                                </div>
                            </div>
                        </a>
                    </article>
                    
                    <!-- Project 3 -->
                    <article class="project-card">
                        <a href="work/df-safety.html">
                            <div class="project-visual" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
                                <span class="project-type">AI/Healthcare</span>
                                <div class="project-icon">🧬</div>
                            </div>
                            <div class="project-info">
                                <h3>DF Safety</h3>
                                <p class="project-role">Product Manager — AI/ML</p>
                                <p class="project-desc">AI-powered pharmacovigilance platform. Increased AI acceptance from 30% to 85%, 100% regulatory compliance.</p>
                                <div class="project-metrics">
                                    <span class="metric">🤖 85% AI adoption</span>
                                    <span class="metric">✓ 100% compliant</span>
                                </div>
                            </div>
                        </a>
                    </article>
                    
                    <!-- Project 4 -->
                    <article class="project-card">
                        <a href="work/budget-management.html">
                            <div class="project-visual" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);">
                                <span class="project-type">Vibe Coding</span>
                                <div class="project-icon">💰</div>
                            </div>
                            <div class="project-info">
                                <h3>Budget Management</h3>
                                <p class="project-role">Product Manager & Lead Developer</p>
                                <p class="project-desc">AI finance platform with 60% AI-generated code. 40% user spending reduction, 68% retention.</p>
                                <div class="project-metrics">
                                    <span class="metric">🤖 60% AI code</span>
                                    <span class="metric">📉 40% savings</span>
                                    <span class="metric">📊 68% retention</span>
                                </div>
                            </div>
                        </a>
                    </article>
                    
                </div>
            </div>
        </section>
        
        <!-- SKILLS -->
        <section class="skills-section">
            <div class="container">
                <h2 class="section-title" style="margin-bottom: 2rem;">Core Expertise</h2>
                
                <div class="skills-grid">
                    <div class="skill-group">
                        <h4>AI & Product</h4>
                        <div class="skill-tags">
                            <span class="skill-tag">Agentic AI</span>
                            <span class="skill-tag">LLM Orchestration</span>
                            <span class="skill-tag">Prompt Engineering</span>
                            <span class="skill-tag">AI UX Design</span>
                            <span class="skill-tag">Product Strategy</span>
                            <span class="skill-tag">Data-Driven PM</span>
                        </div>
                    </div>
                    
                    <div class="skill-group">
                        <h4>Technical</h4>
                        <div class="skill-tags">
                            <span class="skill-tag">C# / .NET</span>
                            <span class="skill-tag">SQL</span>
                            <span class="skill-tag">REST APIs</span>
                            <span class="skill-tag">Figma</span>
                            <span class="skill-tag">System Design</span>
                            <span class="skill-tag">Vibe Coding</span>
                        </div>
                    </div>
                    
                    <div class="skill-group">
                        <h4>Leadership</h4>
                        <div class="skill-tags">
                            <span class="skill-tag">Global Teams</span>
                            <span class="skill-tag">Agile/Scrum</span>
                            <span class="skill-tag">Cross-functional</span>
                            <span class="skill-tag">B2B SaaS</span>
                            <span class="skill-tag">Stakeholder Mgmt</span>
                            <span class="skill-tag">Go-to-Market</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- TRUST -->
        <section class="trust-bar">
            <div class="container">
                <p>Previously: <strong>ZKTeco</strong> (Global R&D) • <strong>Data Foundry</strong> (AI/Healthcare) • <strong>Cybage</strong> (Enterprise) • <strong>NTT Data</strong> (Digital Transformation)</p>
            </div>
        </section>
        
        <!-- CTA -->
        <section class="cta-section">
            <div class="container">
                <h2>Open to AI Product & Technical PM roles</h2>
                <p>Based in Omaha, NE • Available for remote & hybrid</p>
                <div class="cta-buttons">
                    <a href="#" class="btn btn-primary contact-trigger" onclick="openModal()">Get In Touch</a>
                    <a href="resume.pdf" class="btn btn-secondary" download>Download Resume</a>
                </div>
            </div>
        </section>
        
    </main>
    
    <!-- FOOTER -->
    <footer class="site-footer">
        <div class="container">
            <p>© 2026 Chandana Konduru • Built with AI</p>
        </div>
    </footer>
    
    <!-- CONTACT MODAL -->
    <div class="modal" id="contactModal">
        <div class="modal-overlay" onclick="closeModal()"></div>
        <div class="modal-content">
            <button class="modal-close" onclick="closeModal()">×</button>
            <h2>Get In Touch</h2>
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
                <div class="form-group">
                    <input type="text" name="name" placeholder="Your name" required>
                </div>
                <div class="form-group">
                    <input type="email" name="email" placeholder="Your email" required>
                </div>
                <div class="form-group">
                    <textarea name="message" placeholder="Tell me about the opportunity..." required></textarea>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
            </form>
        </div>
    </div>
    
    <!-- JAVASCRIPT -->
    <script>
        // Theme Toggle
        function toggleTheme() {
            const html = document.documentElement;
            const isDark = html.getAttribute('data-theme') === 'dark';
            
            if (isDark) {
                html.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                updateThemeLabel('Dark');
            } else {
                html.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                updateThemeLabel('Light');
            }
        }
        
        function updateThemeLabel(label) {
            const labelEl = document.getElementById('themeLabel');
            if (labelEl) labelEl.textContent = label;
        }
        
        // Check system preference on load
        if (localStorage.getItem('theme') === 'dark' || 
            (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.setAttribute('data-theme', 'dark');
            updateThemeLabel('Light');
        }
        
        // Mobile Menu Toggle
        function toggleMenu() {
            const menu = document.getElementById('mobileMenu');
            const toggle = document.querySelector('.menu-toggle');
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        }
        
        // Modal
        function openModal() {
            document.getElementById('contactModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closeModal() {
            document.getElementById('contactModal').classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Close modal on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
        
        // Active nav state
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    </script>
</body>
</html>
```

---

## Why This Homepage Converts for ALL Your Target Roles

| Role Type | What They See | Why It Works |
|-----------|---------------|--------------|
| **AI Product Manager** | "Agentic AI", "LLM Orchestration", Scan It Know It card | Proof you ship AI products, not just talk |
| **Technical PM** | C#, .NET, SQL, System Design, REST APIs | Technical credibility immediately visible |
| **UX/Product Designer** | "UX Design" tag, Figma, visual project cards | Design sensibility in the portfolio itself |
| **Business Analyst** | Metrics on every project (92% accuracy, 10K users) | Data-driven mindset |
| **Agile/Delivery** | "Agile/Scrum", "Cross-functional", company logos | Process maturity |
| **Prompt Engineer** | "Prompt Engineering", "Vibe Coding" | Modern AI workflow knowledge |
| **No-Code/Low-Code** | "$0 cost", "3 week build", "60% AI code" | Speed and efficiency |
| **Implementation/CS** | Global SaaS, 4 countries, compliance | Enterprise readiness |

## The 10-Second Scan Test

1. **0-2 sec**: "AI Product Manager" + 4 tags = Role match
2. **2-5 sec**: Project cards with metrics = Proof of work
3. **5-8 sec**: Skills section = Keyword match for ATS
4. **8-10 sec**: "Get In Touch" or "View all projects" = Clear CTA

## Navigation Fixed

- **Desktop**: Logo left, nav center, actions right
- **Mobile**: Logo left, hamburger right, full-screen overlay menu
- **Theme toggle**: Works everywhere, persists in localStorage
- **Active states**: Current page highlighted
- **Accessibility**: Skip link, focus states, keyboard navigation

Copy this entire file as `index.html`. It works immediately with no external dependencies except the font (which loads from Google). Update `YOUR_FORM_ID` with your Formspree endpoint.
