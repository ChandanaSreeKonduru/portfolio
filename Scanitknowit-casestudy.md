QODER Prompt: Scan It Know It Case Study Page
Project Context
Building an AI Product Manager portfolio website. This is Case Study 1 of 8. Design follows Rhode Skin minimalist aesthetic + Iva Kirova editorial case study format.
________________________________________
Page Metadata
Route: /work/scan-it-know-it
Title: Scan It Know It | AI Document Intelligence Platform
Description: How I built a production-ready OCR platform in 4 weeks using AI-assisted development, achieving 92% accuracy at $0 cost.
________________________________________
Design System: Rhode Skin Aesthetic
Colors
--background: #f8f6f2;        /* Warm off-white */
--text-primary: #67645e;      /* Warm taupe */
--text-secondary: #67645e99;  /* 60% opacity */
--accent: #c17c5e;            /* Terracotta */
--accent-light: #c17c5e1a;    /* 10% opacity */
--border: #e5e5e5;            /* Hairline */
--white: #ffffff;
Typography
/* Headings - Editorial serif feel */
--font-heading: "Times New Roman", Georgia, serif;
--h1: 48px/1.1 letter-spacing: -0.02em;
--h2: 32px/1.2 letter-spacing: -0.01em;
--h3: 24px/1.3;

/* Body - Clean sans-serif */
--font-body: system-ui, -apple-system, sans-serif;
--body: 16px/1.7;
--body-small: 14px/1.6;
--caption: 12px/1.5 uppercase letter-spacing: 0.1em;
Spacing & Layout
--page-padding: 80px desktop, 24px mobile;
--section-gap: 120px desktop, 80px mobile;
--max-width: 1200px;
--content-width: 720px; /* For reading */
--border-radius: 0; /* Sharp corners */
________________________________________
Page Structure
1. Navigation (Fixed, Minimal)
[Left] ← Back to Work
[Right] Next Project →
•	Position: fixed, top: 40px, full width
•	Padding: 0 80px (desktop), 0 24px (mobile)
•	Font: 14px uppercase, letter-spacing: 0.1em
•	Color: –text-secondary, hover: –accent
•	Z-index: 100
________________________________________
2. Hero Section
Full viewport height, centered content
Visual
•	Background: –background
•	Large hero image: Phone mockup scanning a document with AI processing overlay
•	Image treatment: Soft shadow, subtle gradient overlay
•	Image position: Center, max-width: 600px
Content
[CAPTION - 12px uppercase, letter-spacing: 0.1em, color: --accent]
CASE STUDY 01

[H1 - 48px, font-heading, color: --text-primary]
SCAN IT KNOW IT

[SUBTITLE - 18px, font-body, color: --text-secondary, margin-top: 16px]
AI Document Intelligence Platform

[META ROW - Flex, gap: 32px, margin-top: 24px]
⚡ 4 weeks to launch
💰 $0 infrastructure cost  
🎯 92% OCR accuracy
📱 500+ active users

[SCROLL INDICATOR - Bottom center, animated]
↓ Scroll to explore
________________________________________
3. Project Overview Section
Two-column layout on desktop, stacked on mobile
Left Column (40%)
[CAPTION]
THE CHALLENGE

[H2]
Enterprise OCR costs $1000+/month. 
I built one for $0 in 4 weeks.

[BODY]
The community needed instant document insights—receipts, contracts, forms—but existing solutions were either prohibitively expensive or required months of traditional development. I saw an opportunity to prove AI-assisted development could deliver production-grade results in a fraction of the time and cost.
Right Column (60%)
[CAPTION]
MY ROLE

[LIST - Clean, no bullets, separated by hairline borders]
End-to-End Product Manager
AI Systems Architect
Vibe Coder (AI-Assisted Developer)
UX/UI Designer

[CAPTION - margin-top: 48px]
TOOLS & TECHNOLOGY

[TECH GRID - 3 columns, gap: 16px]
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│ Gemini 1.5  │  │ Google      │  │ Next.js 14  │
│ Pro         │  │ Vision API  │  │             │
├─────────────┤  ├─────────────┤  ├─────────────┤
│ Tailwind    │  │ Vercel      │  │ Supabase    │
│ CSS         │  │             │  │             │
├─────────────┤  ├─────────────┤  ├─────────────┤
│ Figma       │  │ TypeScript  │  │ GitHub      │
└─────────────┘  └─────────────┘  └─────────────┘

[Each tech item: 1px border, padding: 16px, font: 14px, text-align: center]
________________________________________
4. Process Section - Discover
Full-width section with asymmetric layout
[CAPTION - centered]
PROCESS

[H2 - centered]
Discover

[BODY - centered, max-width: 600px]
Understanding the real problem before building anything.
Research Grid (2 columns)
Left: User Interviews
[H3]
8 User Interviews

[BODY]
Spoke with small business owners, students, and community members who needed document insights. Key findings:

• 87% struggled with extracting data from receipts for expense tracking
• 73% avoided contracts because they couldn't quickly understand terms
• 92% wanted instant answers without learning complex software
• 100% cited cost as barrier to existing OCR solutions
Right: Competitive Analysis Table
[H3]
Competitive Landscape

[TABLE - Clean, hairline borders]
┌──────────────────┬──────────────┬──────────────┬─────────────┐
│ Solution         │ Cost         │ Setup Time   │ Accuracy    │
├──────────────────┼──────────────┼──────────────┼─────────────┤
│ Adobe Acrobat    │ $20/mo       │ 2-3 hours    │ 85%         │
├──────────────────┼──────────────┼──────────────┼─────────────┤
│ AWS Textract     │ $0.001/page  │ 1-2 days     │ 90%         │
├──────────────────┼──────────────┼──────────────┼─────────────┤
│ Google Document  │ $0.0015/page │ 4-6 hours    │ 88%         │
│ AI               │              │              │             │
├──────────────────┼──────────────┼──────────────┼─────────────┤
│ Scan It Know It  │ FREE         │ 0 minutes    │ 92%         │
│ (My Solution)    │              │              │             │
└──────────────────┴──────────────┴──────────────┴─────────────┘

[CAPTION below table]
The gap was clear: affordable, instant, accurate document intelligence.
Vibe Coding Approach (Full width, highlighted box)
[BOX - background: --accent-light, padding: 48px, border: 1px solid --accent]
[H3]
The Vibe Coding Method

[BODY]
Instead of traditional 4-6 month development cycles, I used AI-assisted development ("vibe coding") to compress the timeline. This meant:

• AI pair programming for rapid iteration
• Conversational development (describe what I want, AI generates)
• Human oversight for architecture decisions and quality control
• Continuous deployment with instant feedback loops

This approach reduced development time by 75% while maintaining production-grade quality.
________________________________________
5. Process Section - Define
[H2 - centered]
Define

[BODY - centered, max-width: 600px]
Translating insights into a clear product vision and technical architecture.
User Persona Card
[PERSONA CARD - White background, subtle shadow, padding: 40px]
[HEADER - Flex, align-items: center, gap: 24px]
[AVATAR - 80px circle, placeholder gradient]
[INFO]
  [NAME - 24px, bold]
  Sarah Chen
  
  [ROLE - 14px, color: --text-secondary]
  Small Business Owner, Coffee Shop

[DIVIDER - 1px, color: --border, margin: 24px 0]

[QUOTE - 18px, italic, color: --text-primary]
"I get 50+ receipts a week. I just need to know what I spent and where—without paying $50/month for accounting software."

[NEEDS LIST - margin-top: 24px]
✓ Instant receipt scanning and categorization
✓ Natural language queries ("How much on supplies this month?")
✓ Export to spreadsheet
✓ Works on her phone
✓ Zero learning curve
User Flow Diagram (Visual)
[FLOW - Horizontal on desktop, vertical on mobile]

[STEP 1]        [STEP 2]        [STEP 3]        [STEP 4]
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│  Open   │───→│  Scan   │───→│  Review │───→│  Query  │
│   App   │    │Document │    │  Data   │    │  Data   │
└─────────┘    └─────────┘    └─────────┘    └─────────┘
   2 sec         3 sec          2 sec         Unlimited

[ARROWS - Subtle, --accent color]
Technical Architecture Decisions
[H3]
Architecture Decisions

[DECISION CARDS - 3 columns]

CARD 1:
[ICON - Server icon]
[H4]
Serverless-First
[BODY]
Vercel + Supabase for zero infrastructure management. Auto-scales from 1 to 10,000 users without config changes.

CARD 2:
[ICON - Brain/AI icon]
[H4]
Gemini 1.5 Pro
[BODY]
Chose over GPT-4 for superior document understanding and native multimodal capabilities. 1M token context handles multi-page documents.

CARD 3:
[ICON - Zap icon]
[H4]
Offline-First Design
[BODY]
Progressive Web App architecture. Core functionality works without internet. Syncs when connected.
________________________________________
6. Process Section - Develop
[H2 - centered]
Develop

[BODY - centered, max-width: 600px]
Building the translation layer between AI capabilities and user needs.
The Translation Challenge
[H3]
The Core Challenge: AI-to-User Translation

[BODY]
Raw AI outputs are powerful but unusable. I designed a "translation layer" that converts technical AI responses into actionable insights.

[TABLE - Translation examples]
┌─────────────────────────────┬─────────────────────────────┐
│ Raw AI Output               │ Translated User Experience  │
├─────────────────────────────┼─────────────────────────────┤
│ "Confidence: 0.92,          │ "We found 3 items:          │
│  Entities: [{type:           │ Coffee ($4.50),             │
│  'PRODUCT', value:          │ Croissant ($3.25),          │
│  'Coffee'}...]"             │ Tax ($0.62)"                │
├─────────────────────────────┼─────────────────────────────┤
│ "Date: 2024-01-15,          │ "This receipt is from       │
│  Vendor: Starbucks #2847"   │ Starbucks on January 15th"  │
├─────────────────────────────┼─────────────────────────────┤
│ "Total: $8.37"              │ "Total: $8.37 (tap to see   │
│                             │ breakdown)"                 │
└─────────────────────────────┴─────────────────────────────┘
Iteration Timeline
[H3]
4-Week Iteration Timeline

[TIMELINE - Vertical with connecting line]

[WEEK 1 - highlighted with --accent border]
┌────────────────────────────────────────────────────────────┐
│ [WEEK 1] MVP & Core Flow                                   │
│ • Document upload and basic OCR                            │
│ • Simple text extraction display                           │
│ • Mobile-responsive layout                                 │
│ • User testing with 3 community members                    │
└────────────────────────────────────────────────────────────┘
                              │
                              ▼
[WEEK 2]
┌────────────────────────────────────────────────────────────┐
│ [WEEK 2] AI Integration & Natural Language                 │
│ • Gemini 1.5 Pro integration                               │
│ • Natural language query system                            │
│ • Context-aware responses                                  │
│ • Accuracy testing with 50 documents                       │
└────────────────────────────────────────────────────────────┘
                              │
                              ▼
[WEEK 3]
┌────────────────────────────────────────────────────────────┐
│ [WEEK 3] Polish & Performance                              │
│ • Image preprocessing optimization                         │
│ • Error handling and edge cases                            │
│ • Export functionality (CSV, PDF)                          │
│ • Beta launch to 50 users                                  │
└────────────────────────────────────────────────────────────┘
                              │
                              ▼
[WEEK 4]
┌────────────────────────────────────────────────────────────┐
│ [WEEK 4] Launch & Iterate                                  │
│ • Public launch                                            │
│ • Analytics implementation                                 │
│ • User feedback integration                                │
│ • 500+ users in first week                                 │
└────────────────────────────────────────────────────────────┘
________________________________________
7. Process Section - Deliver
[H2 - centered]
Deliver

[BODY - centered, max-width: 600px]
Production-ready platform with measurable impact.
Results Metrics
[METRICS GRID - 4 columns desktop, 2x2 tablet, 1 column mobile]

┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│                 │  │                 │  │                 │  │                 │
│     92%         │  │     $0          │  │    4 weeks      │  │    500+         │
│                 │  │                 │  │                 │  │                 │
│   OCR Accuracy  │  │  Monthly Cost   │  │  Time to Launch │  │  Active Users   │
│                 │  │                 │  │                 │  │                 │
│  vs 85% avg     │  │  vs $1000+      │  │  vs 4-6 months  │  │  First week     │
│                 │  │  competitors    │  │  traditional    │  │                 │
└─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────────┘

[Each metric card: 1px border, padding: 32px, text-align: center]
[Large number: 48px, bold, --accent color]
[Label: 14px, uppercase, letter-spacing: 0.1em]
[Context: 14px, --text-secondary]
User Feedback Quote
[QUOTE BLOCK - Large, centered]

[QUOTE MARK - 120px, color: --accent-light, position: absolute, behind text]

[QUOTE TEXT - 24px, italic, max-width: 700px]
"I used to spend 2 hours every Sunday organizing receipts. Now I scan them as I get them and ask 'How much did I spend on meals this month?' and get an instant answer. It's like having a personal accountant in my pocket."

[ATTRIBUTION - 14px, --text-secondary, margin-top: 24px]
— Sarah Chen, Beta User, Coffee Shop Owner
________________________________________
8. Key Learnings Section
[H2 - centered]
Key Learnings

[BODY - centered, max-width: 600px]
What I'd do differently and what validated my approach.
Learnings Grid (2 columns)
[LEARNING 1 - White card with left border: 4px solid --accent]
[H4]
AI is a Multiplier, Not a Replacement

[BODY]
Vibe coding accelerated development 4x, but product decisions still required human judgment. AI generated code; I defined architecture, UX flow, and quality standards.

[CAPTION]
→ Validate: Technical feasibility ≠ User desirability

[LEARNING 2 - White card with left border: 4px solid --accent]
[H4]
The "Translation Layer" is Product-Market Fit

[BODY]
Users don't care about AI capabilities—they care about outcomes. The 92% accuracy metric mattered less than "I got my answer in 10 seconds."

[CAPTION]
→ Validate: Lead with outcomes, not technology

[LEARNING 3 - White card with left border: 4px solid --accent]
[H4]
Speed Enables Learning

[BODY]
4-week cycles meant I could test 3 major iterations in the time a traditional team would ship one. Rapid deployment = rapid learning = better product.

[CAPTION]
→ Validate: Ship fast, learn faster

[LEARNING 4 - White card with left border: 4px solid --accent]
[H4]
Community Feedback > Internal Assumptions

[BODY]
The natural language query feature—now the most-used function—came from a beta user saying "I just want to ask it like I'd ask a person."

[CAPTION]
→ Validate: Users will show you the real requirements
________________________________________
9. Final Quote
[FULL-WIDTH SECTION - background: --accent, padding: 120px 80px]

[QUOTE - Centered, max-width: 800px, color: white]
"This project proved that AI-assisted development isn't just faster—it's a fundamentally different way to build products. When you compress the build cycle from months to weeks, you don't just save time. You change what's possible."

[ATTRIBUTION - color: rgba(255,255,255,0.7), margin-top: 32px]
— My takeaway from this project
________________________________________
10. Footer Navigation
[SECTION - padding: 80px, border-top: 1px solid --border]

[FLEX - space-between, align-center]

[LEFT]
← Back to Work
All Projects

[RIGHT]
Next Project →
Budget Management

[Both links: 18px, --text-primary, hover: --accent]
________________________________________
Responsive Behavior
Desktop (1200px+)
•	Full two-column layouts
•	Horizontal process flows
•	4-column metrics grid
•	80px page padding
Tablet (768px - 1199px)
•	Two columns where possible
•	Vertical timeline
•	2x2 metrics grid
•	40px page padding
Mobile (< 768px)
•	Single column, stacked
•	Vertical everything
•	1-column metrics grid
•	24px page padding
•	Reduced heading sizes (H1: 36px, H2: 28px)
•	Fixed nav becomes hamburger or simplified
________________________________________
Technical Requirements
Framework
•	Next.js 14 with App Router
•	Static export for deployment
•	TypeScript
Styling
•	Tailwind CSS
•	Custom design tokens in tailwind.config.js
•	No arbitrary values—use design system
Components Needed
components/
├── Navigation.tsx
├── Hero.tsx
├── Overview.tsx
├── ProcessSection.tsx
├── MetricCard.tsx
├── QuoteBlock.tsx
├── LearningCard.tsx
├── FooterNav.tsx
└── ui/
    ├── Caption.tsx
    ├── Table.tsx
    └── Timeline.tsx
Performance
•	Lazy load images below fold
•	Preload hero image
•	Static generation (no SSR needed)
•	Target: < 100KB first load
________________________________________
Assets Needed
Images
1.	Hero Image: Phone scanning document with AI overlay
–	Dimensions: 1200x800
–	Format: WebP with JPG fallback
–	Alt: “Scan It Know It app interface showing document scanning with AI processing”
2.	User Persona Avatar: Placeholder or generated
–	Dimensions: 200x200
–	Format: WebP
–	Alt: “User persona avatar for Sarah Chen”
3.	Process Diagrams: SVG illustrations for user flow
–	Format: SVG (inline for animation potential)
Icons
•	Use Lucide React icons
•	Server, Brain, Zap for architecture cards
•	Arrow icons for navigation
________________________________________
Copy Checklist
All copy is provided above. Key elements to verify: - [ ] “SCAN IT KNOW IT” as H1 - [ ] “AI Document Intelligence Platform” as subtitle - [ ] All metrics: 92%, $0, 4 weeks, 500+ - [ ] All 4 process phases: Discover, Define, Develop, Deliver - [ ] User persona: Sarah Chen, coffee shop owner - [ ] All 4 key learnings with captions - [ ] Final quote about AI-assisted development
________________________________________
Output Requirements
Generate a complete, production-ready Next.js page file at:
app/work/scan-it-know-it/page.tsx
Include all: - TypeScript types - Tailwind classes following design system - Responsive breakpoints - Accessible markup (ARIA labels, semantic HTML) - SEO metadata - Loading states where applicable
Do not use placeholder content. All text, metrics, and quotes are final and provided above.
