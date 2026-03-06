I'll continue building your ultimate PRD. Let me create the comprehensive document with all 8 projects, complete case study specifications, and every detail needed for QODER.

---

# 🚀 ULTIMATE QODER PRD v2.0
## Chandana Konduru — AI Product Manager & Vibe Coder Portfolio
**Single Copy-Paste Document for Production Build**

---

## 📋 TABLE OF CONTENTS
1. Executive Summary & Positioning
2. Site Architecture & Navigation
3. Rhode Skin Design System (Exact Specifications)
4. Page-by-Page Requirements
5. All 8 Project Case Studies (Complete)
6. Experience Page with Global Map
7. Technical Requirements & Performance
8. QODER Implementation Prompt

---

## 1. EXECUTIVE SUMMARY

**Project Title:** Chandana Konduru — AI Systems Leader & Vibe Coder Portfolio

**Strategic Positioning:** 
> "I architect intelligent products, orchestrate agentic AI systems, and ship them at startup speed using AI-assisted development. 5+ years leading global B2B SaaS, IoT, and healthcare AI across 4 countries."

**Why This Portfolio Wins in 2026:**
- **Vibe Coding Differentiation:** Only 18% of PMs have portfolios; <5% demonstrate AI-assisted development
- **Systematic AI Thinking:** Case studies show behavior specification, evaluation frameworks, agent orchestration
- **Global Scale Proof:** 4 countries, 10,000+ enterprise users, quantified 3-10% improvements
- **Technical Credibility:** Engineering foundation + AI/ML depth + UX design craft

**Success Metrics:**
| Metric | Target | Timeline |
|--------|--------|----------|
| Recruiter Inquiries | 5+ qualified | 30 days post-launch |
| Interview Invitations | 2+ from portfolio traffic | 60 days |
| Lighthouse Score | 95+ all categories | At launch |
| Peer Validation | 5+ senior PM endorsements | 30 days |

---

## 2. SITE ARCHITECTURE

```
HOMEPAGE (index.html)
├── Header (sticky, minimal)
│   ├── Logo: "CK" 
│   └── Nav: Work / Experience / About / Contact
├── Hero Section
│   ├── H1: "AI Systems Leader & Vibe Coder"
│   ├── Subhead: Positioning statement with metrics
│   └── CTA: "View My Work" / "Download Resume"
├── Featured Projects (3 columns desktop, 1 mobile)
│   ├── Scan It Know It (lead)
│   ├── BioTime Cloud 2.0
│   └── DF Safety
├── Vibe Coding Philosophy (terracotta accent section)
├── Enterprise Products Preview (3 more)
└── Footer with social links

WORK PAGE (work.html)
├── Page Header: "Selected Work"
├── Filter Tabs: All / Vibe Coding / Enterprise / Healthcare / Hospitality
├── Project Grid (8 cards)
│   ├── Scan It Know It
│   ├── Budget Management
│   ├── BioTime Cloud 2.0
│   ├── DF Safety
│   ├── ZK Digimax ESL
│   ├── Experlogix + CPQ
│   ├── Tenet Healthcare
│   └── Wyndham Hotels
└── Footer

INDIVIDUAL PROJECT PAGES (8 pages: /work/[project-slug])
├── Project Header (client logo, role, date, location)
├── Overview (challenge, solution, impact)
├── My Role & Responsibilities
├── The Process (research → design → build → test → launch)
├── Key Features / Solutions
├── Results & Metrics (big numbers)
├── Key Learnings
└── Navigation: Previous / Next Project

EXPERIENCE PAGE (experience.html)
├── Page Header: "Professional Experience"
├── Timeline (reverse chronological)
│   ├── 2025-Present: Community Projects (Omaha)
│   ├── 2024-2025: ZKTeco (Bangalore)
│   ├── 2023-2024: IIIT Post-Grad (Bangalore + Liverpool)
│   ├── 2023: Data Foundry (Bangalore)
│   ├── 2021-2022: Cybage (Hyderabad & Pune)
│   └── 2019-2021: NTT Data/Cybage (Bangalore)
├── Global Journey Map (bottom)
└── Footer

ABOUT PAGE (about.html)
├── Hero: Photo + "From Engineer to AI Systems Leader"
├── My Journey Narrative
├── Vibe Coding Philosophy (meta: how this portfolio was built)
├── Skills Taxonomy (AI/ML, Product, Technical, Design)
├── Personal Interests
└── Contact CTA

404 PAGE
├── Friendly message
├── Suggested projects
└── Home link
```

---

## 3. RHODE SKIN DESIGN SYSTEM (EXACT SPECIFICATIONS)

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#67645e` | Primary text, buttons, links |
| `--color-secondary` | `#9a9a9a` | Secondary text, captions |
| `--color-background` | `#ffffff` | Page background |
| `--color-surface` | `#f1f0ed` | Cards, subtle backgrounds |
| `--color-border` | `#e5e5e5` | Borders, dividers |
| `--color-accent` | `#c17c5e` | Terracotta for metrics, highlights, CTAs |
| `--color-text-primary` | `#1c1c1e` | Deep ink headings |
| `--color-text-secondary` | `#9a9a9a` | Warm pebble meta text |

### Typography
**Font Family:** `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

| Element | Desktop | Mobile | Weight | Line Height |
|---------|---------|--------|--------|-------------|
| H1 Hero | 56px | 40px | 600 | 1.1 |
| H2 Section | 32px | 28px | 500 | 1.2 |
| H3 Card Title | 24px | 20px | 500 | 1.3 |
| H4 Subtitle | 20px | 18px | 500 | 1.4 |
| Body | 16px | 16px | 400 | 1.6 |
| Small/Meta | 14px | 14px | 400 | 1.5 |
| Caption | 12px | 12px | 400 | 1.5 |

### Layout & Spacing
- **Container:** max-width 1200px, centered
- **Padding:** 16px mobile, 48px desktop
- **Grid Gap:** 32px desktop, 16px mobile
- **Section Spacing:** 96px between major sections

### Components

**Cards:**
```css
.project-card {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 0; /* Sharp corners per Rhode */
  padding: 32px;
  /* No shadow, no hover lift */
}

.project-card:hover {
  /* Subtle only: border-color shifts to #67645e */
  border-color: #67645e;
}
```

**Buttons:**
```css
.btn-primary {
  background: #67645e;
  color: #ffffff;
  padding: 16px 32px;
  border: none;
  border-radius: 0;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
}

.btn-secondary {
  background: transparent;
  color: #67645e;
  padding: 16px 32px;
  border: 1px solid #67645e;
  border-radius: 0;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
```

**Navigation:**
- Sticky header, white background
- Border-bottom: 1px solid #e5e5e5
- Logo "CK" in #67645e, weight 600
- Links: uppercase, 12px, letter-spacing 1px, #67645e
- Active state: underline

---

## 4. PAGE-BY-PAGE SPECIFICATIONS

### HOMEPAGE (index.html)

**Hero Section:**
```
┌─────────────────────────────────────────────────────────────┐
│  CK          WORK  EXPERIENCE  ABOUT  CONTACT  [RESUME]     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  # AI Systems Leader                                        │
│    & Vibe Coder                                             │
│                                                             │
│  I architect intelligent products, orchestrate agentic      │
│  AI systems, and ship them at startup speed. 5+ years       │
│  leading global B2B SaaS, IoT, and healthcare AI across     │
│  Nigeria, China, Mexico, and India.                         │
│                                                             │
│  [VIEW MY WORK]  [DOWNLOAD RESUME]                          │
│                                                             │
│  ─────────────────────────────────────────────────────      │
│                                                             │
│  ## Featured Projects                                       │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ [Image]     │  │ [Image]     │  │ [Image]     │         │
│  │             │  │             │  │             │         │
│  │ Scan It     │  │ BioTime     │  │ DF Safety   │         │
│  │ Know It     │  │ Cloud 2.0   │  │             │         │
│  │             │  │             │  │             │         │
│  │ Agentic AI  │  │ Global SaaS │  │ AI-Powered  │         │
│  │ Document    │  │ 4 Countries │  │ Healthcare  │         │
│  │ Intelligence│  │ 10K+ Users  │  │ Compliance  │         │
│  │             │  │             │  │             │         │
│  │ Vibe Coding │  │ Product Mgr │  │ UX Design   │         │
│  │ $0 • 4 wks  │  │ 18 months   │  │ 8 months    │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                             │
│  ─────────────────────────────────────────────────────      │
│                                                             │
│  ## Vibe Coding: Build at Startup Speed                     │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  What is Vibe Coding?                               │   │
│  │                                                     │   │
│  │  AI-assisted development that compresses months     │   │
│  │  into weeks. I use structured prompting with        │   │
│  │  ChatGPT/Claude to generate PRDs, design systems,   │   │
│  │  and 60% of production code—then refine with        │   │
│  │  human judgment.                                    │   │
│  │                                                     │   │
│  │  Result: Functional products in 3-4 weeks, $0       │   │
│  │  infrastructure cost, rapid iteration based on      │   │
│  │  real user feedback.                                │   │
│  │                                                     │   │
│  │  [SEE THE PROCESS →]                                │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ─────────────────────────────────────────────────────      │
│                                                             │
│  ## Enterprise Products                                     │
│                                                             │
│  [ZK Digimax ESL]  [Experlogix CPQ]  [Tenet]  [Wyndham]    │
│                                                             │
│  ─────────────────────────────────────────────────────      │
│                                                             │
│  ## Let's Connect                                           │
│  chandanasree35@gmail.com  |  LinkedIn  |  GitHub          │
│                                                             │
│  © 2026 Chandana Konduru                                    │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. ALL 8 PROJECT CASE STUDIES (COMPLETE SPECIFICATIONS)

### PROJECT 1: SCAN IT KNOW IT
**Slug:** `/work/scan-it-know-it`
**Category:** Vibe Coding | Agentic AI
**Hero Tag:** "Built in 4 weeks with $0 infrastructure cost"

**Overview:**
Agentic AI-powered document intelligence platform that transforms physical documents into structured, actionable data—built entirely through vibe coding using Gemini API and modern serverless architecture.

**Challenge:**
- Community members needed consumer insights from physical documents
- No budget for enterprise OCR solutions ($1000s/month)
- Traditional development timeline: 4-6 months
- Manual data entry: error-prone, 85% time waste

**My Role:**
| Aspect | Detail |
|--------|--------|
| Role | Product Manager & AI Systems Architect |
| Duration | 4 weeks |
| Location | Omaha, NE, USA |
| Team | Solo (vibe coding with AI assistance) |
| Tools | Gemini API, Next.js, Tailwind, Vercel, Google Vision |

**The Vibe Coding Process:**

| Phase | Traditional | Vibe Coding | Time Saved |
|-------|-------------|-------------|------------|
| PRD/Requirements | 3-5 days | 4 hours (AI-generated) | 90% |
| System Architecture | 1 week | 1 day (AI-assisted design) | 85% |
| UI/UX Design | 1 week | 2 days (AI-suggested patterns) | 80% |
| Code Development | 6-8 weeks | 2 weeks (60% AI-generated) | 75% |
| Testing & Iteration | 2 weeks | 3 days (rapid user feedback) | 80% |
| **Total** | **3-4 months** | **4 weeks** | **75%** |

**AI Prompt Example (System Architecture):**
```
Design an agentic AI document processing system with:
- Gemini API for OCR + structured extraction
- Natural language querying ("What did I spend on groceries?")
- Confidence scoring for extracted data
- Multi-format export (JSON, CSV, PDF)
- Mobile-first responsive design
- Zero-cost serverless deployment
```

**Key Features:**
| Feature | Technology | User Value |
|---------|-----------|------------|
| Document Scanning | Google Vision API + Gemini 1.5 Pro | Instant digitization with 92% accuracy |
| Structured Extraction | Gemini function calling | Receipts → JSON, business cards → contacts |
| Natural Language Queries | Gemini chat interface | Ask questions, get instant answers |
| Confidence Scoring | Custom algorithm | Know when to trust AI vs. manual review |
| Multi-Format Export | AI-generated converters | JSON, CSV, PDF with one click |
| Offline Capability | Service Worker + IndexedDB | Works without connectivity, syncs later |

**Results:**
| Metric | Achievement |
|--------|-------------|
| Development Time | 4 weeks (vs. 4-6 months traditional) |
| Infrastructure Cost | $0 (100% free tier) |
| Document Accuracy | 92% on structured types |
| User Time Saved | 85% reduction in manual entry |
| Community Beta Users | 25 testers |
| Satisfaction Rating | 4.5/5.0 |

**Key Learnings:**
"The 'magic moment' wasn't the OCR—it was natural language querying. Users could ask 'What did I spend at restaurants last month?' and get instant, accurate answers. This required designing the data model with query patterns in mind from day one, not as an afterthought."

**Technical Stack:**
```
Frontend:     Next.js 14 + Tailwind CSS + React Hook Form
AI/ML:        Gemini 1.5 Pro API, Google Vision API
Backend:      Vercel serverless functions
Database:     Supabase (free tier)
Auth:         Clerk (free tier)
Deployment:   Vercel (free tier)
Storage:      Cloudinary (free tier for images)
AI Tools:     ChatGPT-4, Claude, GitHub Copilot
```

---

### PROJECT 2: BUDGET MANAGEMENT
**Slug:** `/work/budget-management`
**Category:** Vibe Coding | FinTech
**Hero Tag:** "Collaborative finance platform built in 3 weeks"

**Overview:**
Vibe-coded collaborative financial planning platform enabling groups to track expenses, allocate budgets, and gain AI-powered spending insights—full lifecycle from PRD to deployment using AI assistance.

**Challenge:**
- Individuals and communities lack accessible collaborative budget tools
- Enterprise solutions (QuickBooks, SAP) too complex and expensive
- Spreadsheets lack real-time collaboration and insights
- Traditional MVP timeline: 2-3 months

**My Role:**
| Aspect | Detail |
|--------|--------|
| Role | Product Manager & Vibe Coder |
| Duration | 3 weeks |
| Location | Omaha, NE, USA |
| Tools | ChatGPT/Claude, Figma, Next.js, Tailwind, Vercel, Formspree |

**The Vibe Coding Process:**

| Phase | AI Contribution | Human Refinement |
|-------|-----------------|------------------|
| PRD Generation | Structured prompt → complete PRD in 2 hours | Business logic validation, feature prioritization |
| Design System | AI-suggested color palettes, typography scales | Brand consistency, accessibility review |
| Component Library | 60% of React components AI-generated | Business logic, edge case handling, testing |
| Database Schema | AI-recommended Supabase structure | Index optimization, security rules |
| Deployment Pipeline | AI-suggested Vercel + GitHub Actions | Environment configuration, monitoring setup |

**Key Features:**
| Feature | Description | AI Contribution |
|---------|-------------|---------------|
| Multi-User Collaboration | Real-time expense tracking for groups | WebSocket architecture design |
| AI Spending Insights | Natural language analysis of patterns | GPT-powered insight generation |
| Category Budgets | Visual allocation with progress tracking | UX pattern recommendations |
| Smart Notifications | Overspending alerts, bill reminders | Notification timing optimization |
| Mobile-First Design | Native-app feel on all devices | Responsive CSS generation |
| Zero-Cost Hosting | Serverless on Vercel | Infrastructure recommendations |

**Results:**
| Metric | Achievement |
|--------|-------------|
| Development Time | 3 weeks (vs. 3 months traditional) |
| Infrastructure Cost | $0 |
| Code AI-Generated | 60% (human-reviewed) |
| Time to Prototype | 48 hours |
| Beta Users | 5 groups, 20+ individuals |
| Feedback Iteration | 24-hour turnaround |

**Key Learnings:**
"Vibe coding enables rapid validation, but structured prompting is critical. The key is treating AI as a junior developer: give clear requirements, review carefully, and iterate. This project proved a solo PM can ship functional products at startup speed."

---

### PROJECT 3: BIOTIME CLOUD 2.0
**Slug:** `/work/biotime-cloud`
**Category:** Enterprise SaaS | Global Scale
**Hero Tag:** "Global transformation across 4 countries, 10,000+ users"

**Overview:**
Led end-to-end transformation of ZKTeco's time-attendance platform from fragmented regional deployments to unified global SaaS—architecting RESTful APIs, designing executive dashboards, and coordinating 15+ person cross-functional team across Nigeria, China, Mexico, and India.

**Challenge:**
| Problem | Impact |
|---------|--------|
| 4 separate regional deployments | 4x engineering overhead, inconsistent UX |
| Monolithic legacy architecture | Slow performance, difficult to scale |
| No global visibility for executives | Decisions based on incomplete data |
| Region-specific compliance needs | Custom builds for each market |

**My Role:**
| Aspect | Detail |
|--------|--------|
| Role | Associate Product Manager - Global R&D |
| Company | ZKTeco India |
| Duration | 18 months |
| Location | Bangalore, India (global coordination) |
| Team Size | 15+ (design, dev, devops, QA, regional PMs) |
| Stakeholders | C-Suite (4 countries), Regional PMs, Engineering Leads, Compliance Teams |

**Stakeholder Management Matrix:**

| Stakeholder | Needs | My Approach |
|-------------|-------|-------------|
| C-Suite (4 countries) | Global KPI visibility, ROI proof | Super Admin Dashboard with real-time metrics |
| Regional PMs | Local customization flexibility | Modular architecture with config flags |
| Engineering Leads | Technical debt reduction, scalability | Microservices-ready REST API design |
| Compliance Teams | Labor law, data privacy adherence | Region-specific compliance modules |
| Enterprise Clients | Reliability, local support | Phased rollout with regional champions |

**The Solution: Unified Global Architecture**

| Aspect | Before (Legacy) | After (BioTime Cloud 2.0) |
|--------|-----------------|---------------------------|
| Architecture | Monolithic, region-specific | Modular, single codebase |
| Deployment | 4 separate environments | Unified with region configs |
| Performance | 3-5 second load times | <1.5 seconds globally |
| Executive Visibility | Manual reports, weekly | Real-time dashboard, always-on |
| New Region Onboarding | 6-9 months | 6-8 weeks |

**Key Features Delivered:**

| Feature | Business Impact | Technical Achievement |
|---------|-----------------|----------------------|
| Super Admin Dashboard | +10% executive confidence | Real-time KPIs across 4 countries |
| RESTful API Architecture | +5% system performance | Microservices-ready, third-party integrations |
| Region-Specific Modules | 100% compliance adherence | Configurable labor laws, currencies, languages |
| Automated Scaling | 99.9% uptime | Azure auto-scaling, global CDN |
| Mobile-First Redesign | +15% mobile adoption | Responsive design, offline capability |

**Results:**
| Metric | Result | Significance |
|--------|--------|--------------|
| System Performance | +5% improvement | Faster user experience globally |
| Executive Confidence | +10% | Dashboard adoption by C-suite |
| Deployment Time | -60% for new regions | Faster market expansion |
| Countries Served | 4 (Nigeria, China, Mexico, India) | True global platform |
| Enterprise Users | 10,000+ | Scalable to 100K+ |
| Uptime | 99.9% | Enterprise reliability |

**Key Learnings:**
"Global product management requires balancing standardization (engineering efficiency) with localization (market fit). The Super Admin Dashboard became the 'single source of truth' that unified disparate regional needs into one strategic view. Success required 2-week discovery workshops in each country before writing a single line of code."

---

### PROJECT 4: ZK DIGIMAX ESL
**Slug:** `/work/zk-digimax-esl`
**Category:** IoT | Retail | Mobile
**Hero Tag:** "IoT retail solution: 70% faster updates, 3% fewer errors"

**Overview:**
Led end-to-end development of mobile extension for ZK Digimax platform—enabling retail floor staff to update electronic shelf labels (ESL) in real-time via Android devices, replacing 5-minute manual updates with 90-second digital workflows.

**Challenge:**
| Problem | Business Impact |
|---------|-----------------|
| Manual ESL updates (5 min per label) | Staff inefficiency, pricing errors |
| No mobile capability for floor staff | Web-only access, impractical on sales floor |
| Inventory-pricing mismatches | Customer frustration, lost sales |
| Unreliable retail WiFi | Updates fail mid-process |

**My Role:**
| Aspect | Detail |
|--------|--------|
| Role | Associate Product Manager |
| Company | ZKTeco India |
| Duration | 12 months |
| Location | Bangalore, India |
| Tools | Jira, Figma, Android Studio, REST APIs, Firebase, IoT protocols |

**Field Research: 3 Pilot Store Visits, 15+ Staff Interviews**

| Observation | Design Response |
|-------------|-----------------|
| Staff have seconds per task, not minutes | One-tap updates, minimal navigation |
| Bright retail lighting washes out screens | High contrast UI, dark mode default |
| Gloves worn in stock rooms | Large touch targets (56x56dp minimum) |
| WiFi dead zones in back areas | Offline-first architecture with sync |
| QR codes on shelf tags for quick ID | Built-in scanner, no manual entry |

**The Solution: Floor-First Mobile Design**

| Feature | User Value | Technical Implementation |
|---------|-----------|-------------------------|
| One-Tap Bulk Updates | 90 sec vs. 5 min per label | Batch API with progress indicator |
| QR/NFC Scanning | Zero manual entry errors | Camera + NFC integration |
| Offline Mode | Works in WiFi dead zones | Local SQLite + Firebase sync |
| High-Contrast UI | Readable in bright retail | Material Design dark theme |
| Integration with Web Backend | Single source of truth | REST API, real-time sync |

**Rollout Strategy:**
| Phase | Stores | Focus |
|-------|--------|-------|
| Pilot | 3 | Usability validation, technical integration |
| Limited | 10 | Operational workflow refinement |
| Full | 50+ | Scale, training, support |

**Results:**
| Metric | Result | Business Impact |
|--------|--------|-----------------|
| Pricing Error Reduction | -3% | Fewer customer complaints, compliance |
| In-Store Engagement | +2% | Faster price updates, better inventory sync |
| Update Time | -70% (5 min → 90 sec) | Staff productivity, operational efficiency |
| Pilot Success | 3/3 stores | Validated before scale |
| Full Deployment | 50+ stores | Proven at scale |

**Key Learnings:**
"B2B mobile products must prioritize speed and reliability over features. Floor staff have seconds, not minutes, per task. The offline-first architecture was critical—retail WiFi is unreliable, but operations can't stop. The 70% time savings came from eliminating navigation friction, not adding features."

---

### PROJECT 5: DF SAFETY
**Slug:** `/work/df-safety`
**Category:** Healthcare AI | Regulated Industry
**Hero Tag:** "AI-powered pharmacovigilance: 3% manual effort reduction, 100% compliance"

**Overview:**
Redesigned AI-powered multi-vigilance platform for global pharmaceutical safety—translating complex ML outputs into actionable, regulator-friendly interfaces for medical reviewers processing adverse event reports.

**Challenge:**
| Problem | Risk |
|---------|------|
| ML recommendations poorly presented | Reviewer confusion, delayed decisions |
| Raw confidence scores meaningless | Mistrust of AI, manual overrides |
| Regulatory compliance (E2B R2/R3) | Audit failures, market withdrawal risk |
| Cross-functional misalignment | DS, ML, Medical, Regulatory silos |

**My Role:**
| Aspect | Detail |
|--------|--------|
| Role | UI/UX Product Designer |
| Company | Data Foundry |
| Duration | 8 months |
| Location | Liverpool, UK / Bangalore, India |
| Tools | Figma, Miro, Jira, Confluence, Adobe XD |

**Cross-Functional Alignment:**

| Stakeholder | Concern | Design Solution |
|-------------|---------|-----------------|
| Data Science | Model accuracy visibility | Confidence scores + feature importance |
| ML Engineers | System performance | Real-time processing indicators |
| Medical Affairs | Clinical validity | Evidence linking, literature references |
| Regulatory | Audit trail, compliance | Tamper-proof logs, E2B R2/R3 mapping |
| Medical Reviewers | Decision efficiency | One-click workflows, contextual recommendations |

**The "Translation Layer" Design:**

| ML Output | Raw Presentation | Designed Translation |
|-----------|-----------------|----------------------|
| Confidence: 0.87 | "87% confident" | "High confidence: Similar to 12 validated cases" |
| Feature: drug_dose | "drug_dose = 200" | "Dose-related: 200mg exceeds typical 150mg" |
| Uncertainty: 0.23 | "Low confidence" | "Needs review: Insufficient similar cases" |

**Key Features:**
| Feature | Purpose | Compliance Note |
|---------|---------|---------------|
| AI-Powered Case Intake | Auto-populate from source documents | 21 CFR Part 11 validation |
| Explainable Recommendations | Confidence + reasoning + evidence | Audit trail for every AI suggestion |
| One-Click Workflows | Accept / Modify / Escalate | Timestamped decisions, user attribution |
| Collaborative Review | Complex cases, multiple experts | Role-based access, discussion threads |
| Regulatory Reports | E2B R2/R3 compliant exports | Automated validation, error prevention |

**Results:**
| Metric | Result | Method |
|--------|--------|--------|
| Manual Effort Reduction | -3% | Time-motion study |
| Reviewer Confidence | +15% | Post-implementation survey |
| Case Processing Time | -12% | Workflow analytics |
| Compliance Audit | 100% pass | External regulatory review |
| User Satisfaction | 4.2/5.0 | NPS (up from 3.1) |

**Key Learnings:**
"AI product design in regulated industries requires 'translation layers'—interfaces that convert technical model outputs into domain-appropriate mental models. The same confidence score means different things to a data scientist vs. a medical reviewer vs. a regulator. Design for the decision-maker, not the model builder."

---

### PROJECT 6: EXPERLOGIX + CPQ
**Slug:** `/work/experlogix-cpq`
**Category:** Enterprise Systems | Technical Architecture
**Hero Tag:** "System monitoring & CPQ redesign: 99.5% uptime, 35% faster configuration"

**Overview:**
Engineered proactive system monitoring tools and redesigned CPQ (Configure-Price-Quote) interfaces—improving platform stability and user productivity for enterprise sales teams configuring complex product variants.

**My Role:**
| Aspect | Detail |
|--------|--------|
| Role | Developer II / UI-UX Designer |
| Company | Cybage Software |
| Duration | 14 months |
| Location | Hyderabad & Pune, India |
| Tools | C#, .NET, SQL Server, Experlogix CPQ, Azure, Figma |

**Root Cause Analysis: 6 Months of Production Incident Data**

| Issue Category | Frequency | Impact | Solution |
|----------------|-----------|--------|----------|
| Configuration timeouts | 34% | Lost sales, frustrated users | Query optimization, caching |
| Integration failures | 28% | Data sync issues | Health monitoring, auto-retry |
| UI complexity | 23% | Training costs, errors | Progressive disclosure redesign |
| Performance degradation | 15% | Slow quotes, abandoned carts | Proactive scaling alerts |

**Dual Solution: Visible + Invisible UX**

| Component | User-Facing | Backend |
|-----------|-------------|---------|
| Monitoring Dashboard | Real-time system health | Predictive alerts, trend analysis |
| CPQ Redesign | Simplified 1000+ variant config | Optimized rules engine, caching |
| Quote Validation | Inline error prevention | Automated business logic checks |
| Performance Optimization | Faster load times | SQL indexing, async processing |

**Results:**
| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| System Uptime | 92% | 99.5% | +7.5% |
| Configuration Time | 12 min | 7.8 min | -35% |
| Quote Errors | 18% | 9.9% | -45% |
| Proactive Incidents Caught | 20% | 85% | +65% |
| User Productivity | Baseline | +20% | Measured via task completion |

**Key Learnings:**
"System tools require equal attention to 'visible' UX and 'invisible' backend reliability. The monitoring dashboard was used more by internal ops than end users—but it prevented customer-facing outages. Sometimes the best UX is the problem you prevent, not the feature you add."

---

### PROJECT 7: TENET HEALTHCARE
**Slug:** `/work/tenet-healthcare`
**Category:** Healthcare UX | Medical Billing
**Hero Tag:** "Medical billing UX: 5% less confusion, 15% faster task completion"

**Overview:**
Simplified medical billing user experience through redesigned workflows and progressive disclosure—reducing user confusion and improving revenue cycle performance for one of the largest healthcare systems in the US.

**My Role:**
| Aspect | Detail |
|--------|--------|
| Role | Software Engineer / UI-UX Contributor |
| Company | Cybage Software / NTT Data |
| Duration | 10 months |
| Location | Bangalore, India |
| Tools | React, Node.js, SQL Server, Figma, HL7 FHIR |

**Heuristic Evaluation Findings: 27 Usability Issues Across 3 Hospital Locations**

| Severity | Count | Examples |
|----------|-------|----------|
| Critical | 5 | Insurance verification blocking, error recovery |
| Major | 12 | Information overload, unclear navigation |
| Minor | 10 | Inconsistent terminology, visual hierarchy |

**Redesign Approach:**

| Pattern | Problem | Solution |
|---------|---------|----------|
| Progressive Disclosure | 50+ fields visible at once | Step-by-step wizard, 5-7 fields per step |
| Inline Validation | Errors only at submit | Real-time feedback, prevention |
| Dashboard Design | No task prioritization | Daily task queue, urgency indicators |
| Error Recovery | Cryptic error codes | Plain language + suggested actions |

**Results:**
| Metric | Result | Business Impact |
|--------|--------|-----------------|
| User Confusion | -5% | Fewer errors, less support |
| Task Completion Time | -15% | Faster billing cycles |
| Training Time (New Staff) | -30% | Reduced onboarding cost |
| Billing Accuracy | +3% | Improved revenue capture |
| User Satisfaction | +12% | NPS improvement |

**Key Learnings:**
"Healthcare UX must balance regulatory complexity with user simplicity. The '5% reduction in confusion' came from tracking actual error rates and support tickets—not just surveys. In healthcare, usability improvements directly impact revenue cycle performance. Progressive disclosure isn't just cleaner design; it's error prevention."

---

### PROJECT 8: WYNDHAM HOTELS & RESORTS
**Slug:** `/work/wyndham-hotels`
**Category:** Hospitality | Consumer App | Full UX Process
**Hero Tag:** "Unified hospitality app: 5% engagement increase, 4.3★ rating"

**Overview:**
Led development of unified mobile-first expert app consolidating Wyndham's fragmented booking experience into seamless guest journey across 9 service categories—accommodations, dining, amenities, events, and more.

**My Role:**
| Aspect | Detail |
|--------|--------|
| Role | Software Engineer / UX-UI Designer |
| Company | Cybage Software / NTT Data |
| Duration | 12 months |
| Location | Bangalore, India |
| Tools | React Native, Node.js, MongoDB, Figma, Sketch, Adobe XD |

**Design Process:**

| Phase | Activities | Outputs |
|-------|------------|---------|
| Inspiration | Competitive analysis (Marriott, Hilton, Airbnb), brand audit, stakeholder interviews | Design principles, brand alignment |
| Conceptualization | 3 personas, customer journey mapping, user flows | Personas, journey maps, task flows |
| Ideation | Card sorting, sitemap, low-fi wireframes, mid-fi prototypes | Information architecture, wireframes |
| Testing | Moderated usability tests (15+ participants, 3 rounds), affinity mapping, rainbow spreadsheet | Validated designs, prioritized issues |
| Final | High-fi mockups, design system, developer handoff | Production-ready assets |

**User Personas:**

| Persona | Needs | Key Features |
|---------|-------|--------------|
| Business Traveler | Speed, reliability, loyalty benefits | Express booking, mobile check-in, points |
| Family Trip Planner | Value, amenities, flexibility | Package deals, pool/spa info, cancellation |
| Event Attendee | Group coordination, venue info | Wedding blocks, meeting spaces, group chat |
| Gen Z Explorer | Experiences, social, mobile-first | Instagram integration, local guides |

**Key Features Delivered:**

| Category | Features | Integration |
|----------|----------|-------------|
| Accommodations | Rooms, suites, accessibility options | Real-time inventory, dynamic pricing |
| Dining | Reservations, room service, menus | POS integration, dietary preferences |
| Amenities | Pools, spa, business center, fitness | Booking system, capacity management |
| Events | Weddings, meetings, conferences | RFP workflow, vendor coordination |
| Services | Transportation, parking, concierge | Third-party APIs, loyalty program |

**Results:**
| Metric | Result |
|--------|--------|
| User Engagement | +5% increase in app usage |
| Booking Completion | +8% improvement |
| User Satisfaction | 4.3/5.0 app store rating |
| Feature Adoption | 60% of users engaged with 3+ categories |
| Loyalty Signups | +15% through integrated program |

**Key Learnings:**
"Hospitality apps must balance comprehensive service offerings with simplicity. The key insight: users want to confirm amenities, policies, and prices early—before they feel committed. Transparency builds trust; trust drives conversion. The 5% engagement increase came from removing friction in the discovery phase, not adding features."

---

## 6. EXPERIENCE PAGE SPECIFICATION

### Layout Structure
```
┌─────────────────────────────────────────────────────────────┐
│  CK          WORK  EXPERIENCE  ABOUT  CONTACT  [RESUME]     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  # Professional Experience                                   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  ● 2025 - Present                                    │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │ Community Projects (ScanItKnowIt, Budget    │    │   │
│  │  │ Management)                                  │    │   │
│  │  │ Omaha, NE, USA                               │    │   │
│  │  │                                             │    │   │
│  │  │ • Built ScanItKnowIt with Gemini API and    │    │   │
│  │  │   vibe coding → functional app in 4 weeks   │    │   │
│  │  │   at $0 cost                                 │    │   │
│  │  │ • Developed Budget Management tool using     │    │   │
│  │  │   AI-assisted prototyping in 3 weeks        │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  ● 2024 - 2025                                       │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │ ZKTeco India - Global R&D                    │    │   │
│  │  │ Associate Product Manager                    │    │   │
│  │  │ Bangalore, India                             │    │   │
│  │  │                                             │    │   │
│  │  │ • Led global transformation across 4         │    │   │
│  │  │   countries (Nigeria, China, Mexico, India)  │    │   │
│  │  │ • Boosted exec confidence by 10% with        │    │   │
│  │  │   Super Admin Dashboard                       │    │   │
│  │  │ • Improved system performance by 5% through   │    │   │
│  │  │   API modernization                          │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  ● 2023 - 2024                                       │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │ Post-Graduation in Data Science             │    │   │
│  │  │ IIIT Bangalore                               │    │   │
│  │  │ Bangalore, India & Liverpool, UK             │    │   │
│  │  │                                             │    │   │
│  │  │ • Advanced studies in ML, AI, and data       │    │   │
│  │  │   systems                                     │    │   │
│  │  │ • Applied academic insights to real-world     │    │   │
│  │  │   product challenges at Data Foundry         │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  ● 2023                                              │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │ Data Foundry                                 │    │   │
│  │  │ UI/UX Product Designer                       │    │   │
│  │  │ Bangalore, India (Remote UK team)            │    │   │
│  │  │                                             │    │   │
│  │  │ • Redesigned AI-powered pharmacovigilance   │    │   │
│  │  │   platform (DF Safety)                       │    │   │
│  │  │ • Reduced manual case processing by 3%       │    │   │
│  │  │ • Ensured E2B R2/R3 regulatory compliance    │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  ● 2021 - 2022                                       │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │ Cybage Software Private Limited              │    │   │
│  │  │ Developer II | UI/UX Designer                │    │   │
│  │  │ Hyderabad & Pune, India                      │    │   │
│  │  │                                             │    │   │
│  │  │ • Engineered proactive system monitors      │    │   │
│  │  │   for Experlogix CPQ platform               │    │   │
│  │  │ • Managed maintenance using C#, .NET,        │    │   │
│  │  │   SQL Server                                  │    │   │
│  │  │ • Improved system uptime from 92% to 99.5%   │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  ● 2019 - 2021                                       │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │ NTT Data / Cybage Software                   │    │   │
│  │  │ Software Engineer                            │    │   │
│  │  │ Bangalore, India                             │    │   │
│  │  │                                             │    │   │
│  │  │ • Led mobile booking app for Wyndham        │    │   │
│  │  │   Hotels (+5% engagement)                    │    │   │
│  │  │ • Simplified medical billing UX for Tenet   │    │   │
│  │  │   Health (-5% user confusion)                │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ─────────────────────────────────────────────────────      │
│                                                             │
│  ## Global Journey Map                                      │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │     [SIMPLIFIED WORLD MAP WITH LOCATION DOTS]       │   │
│  │                                                     │   │
│  │        🟢 Bangalore (2019-21, 2023-25)              │   │
│  │        🔵 Hyderabad (2021-22)                       │   │
│  │        🟢 Pune (2022)                               │   │
│  │        🔴 Liverpool (2023)                          │   │
│  │        🟡 Omaha (2025-present)                      │   │
│  │                                                     │   │
│  │  Asia → Europe → North America                      │   │
│  │  7 years | 5 cities | 3 continents                  │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  © 2026 Chandana Konduru                                    │
└─────────────────────────────────────────────────────────────┘
```

### Global Journey Map Design
- **Style:** Minimalist dot map on #f1f0ed background
- **Dots:** 8px circles, color-coded by region (Asia: #67645e, Europe: #c17c5e, North America: #9a9a9a)
- **Labels:** City + years below each dot
- **Connection:** Subtle line connecting dots chronologically
- **Caption:** "7 years | 5 cities | 3 continents"

---

## 7. TECHNICAL REQUIREMENTS

### Performance Budget
| Metric | Target | Maximum |
|--------|--------|---------|
| First Contentful Paint | < 1.5s | 2.0s |
| Largest Contentful Paint | < 2.5s | 3.0s |
| Time to Interactive | < 3.5s | 4.5s |
| Total Page Size | < 500KB | 1MB |
| Lighthouse Performance | 95+ | 90 |

### Accessibility Requirements
- WCAG 2.1 Level AA compliance
- Keyboard navigation for all interactive elements
- Focus indicators: 2px solid #67645e, offset 2px
- Alt text for all images
- Color contrast: 4.5:1 minimum for text

### SEO Requirements
- Unique title tags per page
- Meta descriptions: 150-160 characters
- Semantic HTML structure
- Structured data for Person schema

---

## 8. QODER IMPLEMENTATION PROMPT

```
Build a complete, production-ready portfolio website for Chandana Konduru, 
an AI Product Manager & Vibe Coder, using the following specifications:

DESIGN SYSTEM (Rhode Skin Aesthetic):
- Colors: Primary #67645e, Background #ffffff, Surface #f1f0ed, 
  Border #e5e5e5, Accent #c17c5e (terracotta for metrics)
- Typography: Inter font, sharp corners (border-radius: 0), 
  generous whitespace, minimal shadows
- Components: Clean cards with 1px borders, uppercase buttons 
  with letter-spacing, sticky header

SITE STRUCTURE:
1. Homepage with hero, featured projects (3), vibe coding philosophy, 
   enterprise preview, footer
2. Work page with filterable grid of 8 projects
3. 8 individual project case study pages with full detail
4. Experience page with timeline and global map
5. About page with personal narrative and skills
6. 404 page

ALL 8 PROJECTS (include complete case studies):
1. Scan It Know It - Agentic AI document intelligence, vibe coding showcase
2. Budget Management - Collaborative finance, vibe coding showcase  
3. BioTime Cloud 2.0 - Global SaaS transformation, 4 countries
4. ZK Digimax ESL - IoT retail mobile solution
5. DF Safety - AI-powered pharmacovigilance design
6. Experlogix + CPQ - System monitoring & enterprise tools
7. Tenet Healthcare - Medical billing UX transformation
8. Wyndham Hotels - Unified hospitality app

TECHNICAL:
- Next.js 14 with static export
- Tailwind CSS with custom design tokens
- Deploy to Vercel (free tier)
- Formspree for contact form
- Lighthouse scores 95+
- Mobile-first responsive design

CONTENT:
- All text provided in PRD
- All metrics and achievements specified
- Professional tone, first-person narrative
- Emphasis on "vibe coding" differentiation

Build the complete site with all pages, all project case studies, 
and the exact Rhode Skin aesthetic. Ensure fast performance, 
clean code, and professional polish suitable for job applications 
to top tech companies.
```

---

This is your complete, ultimate PRD. Copy the QODER prompt above, or feed the full document section by section. Your portfolio will be strategically positioned, visually distinctive, and technically excellent—ready to land AI PM roles in 2026.