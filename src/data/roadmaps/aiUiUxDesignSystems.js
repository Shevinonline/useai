// Complete production-grade steps data for "AI UI/UX & Design Systems" Roadmap (12 Nodes)

export const aiUiUxDesignSystemsData = {
  id: "ai-ui-ux-design-systems",
  title: "AI UI/UX & Design Systems",
  description: "Design production-ready interfaces, wireframes, and scalable component tokens using Figma, Relume, and v0.",
  category: "Role & Workflow Roadmaps",
  stepCount: 12,
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: AI-Assisted UX Research, Flows & Wireframing",
      description: "Transform user research, support telemetry, and competitor insights into clear Jobs-to-be-Done, structural sitemaps, and conversion wireframes."
    },
    {
      id: "phase-2",
      title: "Phase 2: Visual Direction, Typography & Design Tokens",
      description: "Establish distinctive aesthetic direction, accessible color scales, modular typography hierarchies, and multi-theme design tokens in Figma."
    },
    {
      id: "phase-3",
      title: "Phase 3: Generative UI Prototyping & Interactive Motion",
      description: "Accelerate component generation with v0 and Claude Artifacts, add stateful micro-interactions with Rive and Spline, and test with predictive eye-tracking."
    },
    {
      id: "phase-4",
      title: "Phase 4: Accessibility Auditing & Design-to-Code Handoff",
      description: "Audit for WCAG compliance and anti-slop guidelines, then hand off pixel-perfect tokens and layouts directly to AI coding IDEs via Figma MCP."
    }
  ],
  steps: [
    // Node 1
    {
      id: "step-1",
      stepNumber: 1,
      phaseId: "phase-1",
      title: "User Persona Synthesis & Pain-Point Mining",
      timeEstimate: "45 mins",
      difficulty: "Beginner",
      summary: "Transform raw customer interviews, support telemetry, and competitor reviews into quantified Jobs-to-be-Done (JTBD) frameworks and empathy maps.",
      description: "Traditional user persona creation often produces superficial archetypes ('Marketing Mary, 32, loves lattes') that provide zero tactical guidance for product layout decisions. By leveraging modern reasoning models to ingest hundreds of customer support tickets, G2 competitor reviews, and interview transcripts, designers can extract precise operational anxieties, functional requirements, and switching triggers. This produces evidence-backed Jobs-to-be-Done (JTBD) matrices that dictate exactly which interface modules require primary visual weight.",
      playbook: {
        setup: "Consolidate 10–20 raw data points into a clean markdown document: customer interview transcripts, churn survey responses, Zendesk complaint tickets, and 1-star competitor reviews from G2 or Trustpilot.",
        execute: "Feed the corpus into Claude 3.7 Sonnet or Dovetail with our JTBD synthesis prompt. Instruct the model to categorize user motivations into: 1) Functional Job (the core task), 2) Emotional Job (how they want to feel), 3) Social Job (how they want to be perceived), and 4) Core Anxiety (what stops them from completing the workflow).",
        verify: "Confirm that every identified friction point references at least one direct user quote. Discard any generic persona characteristics that do not directly inform UI hierarchy or component state design."
      },
      tools: [
        {
          name: "Claude 3.7 Sonnet",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Frontier reasoning model with a 200k context window, exceptional at clustering raw qualitative transcripts into structured JTBD tables.",
          bestFor: "Qualitative transcript clustering & JTBD extraction"
        },
        {
          name: "Dovetail",
          type: "Freemium",
          url: "https://dovetail.com",
          description: "AI-native user research repository that automatically tags, transcribes, and surfaces thematic patterns across video interviews and surveys.",
          bestFor: "Customer interview transcription & sentiment tagging"
        },
        {
          name: "Perplexity",
          type: "Freemium",
          url: "https://www.perplexity.ai",
          description: "AI search engine for mining real user complaints, Reddit threads, and G2 negative reviews about incumbent competitor software.",
          bestFor: "Competitor weakness & market gap discovery"
        }
      ],
      callouts: {
        mistake: "Relying on fictional demographic personas ('Design Dan, 28') instead of real behavioral triggers and workflow blockers.",
        proTip: "Extract the exact verbs and emotional adjectives customers use in negative reviews to write your interface microcopy and empty states.",
        mistakes: [
          "Inventing fictional demographic personas ('Marketing Mary, 34') that provide zero insight into UI layout decisions or user error rates.",
          "Synthesizing insights without preserving direct user quotes, causing downstream designers to mistrust the research findings.",
          "Ignoring negative competitor reviews, missing the highest-leverage opportunity to solve unmet user frustrations."
        ],
        proTips: [
          "Map user anxieties directly to UI elements (e.g. an anxiety about 'unintended billings' demands a permanent live price preview next to the CTA).",
          "Feed 1-star G2 reviews of incumbent competitors into Claude to immediately discover the top 3 workflows to simplify.",
          "Structure persona findings into a 1-page Empathy Matrix containing 'Says', 'Does', 'Thinks', and 'Feels' quadrants."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet (Extended Thinking Mode)",
        variables: [
          {
            id: "domain",
            label: "Product Domain",
            options: [
              "B2B Enterprise Analytics Dashboard",
              "Mobile Consumer Fintech App",
              "Creative Creator SaaS Tool"
            ],
            defaultOption: "B2B Enterprise Analytics Dashboard"
          },
          {
            id: "targetRole",
            label: "Primary User Role",
            options: [
              "Senior Engineering Manager",
              "Growth Marketing Specialist",
              "Freelance Product Designer"
            ],
            defaultOption: "Senior Engineering Manager"
          },
          {
            id: "coreGoal",
            label: "Primary Workflow Goal",
            options: [
              "Troubleshooting Production Outages in Under 60 Seconds",
              "Exporting Quarterly Performance Reports to Stakeholders",
              "Collaborative Live Workspace Setup with External Clients"
            ],
            defaultOption: "Troubleshooting Production Outages in Under 60 Seconds"
          }
        ],
        template: `Act as a Principal UX Researcher and Product Strategist. Analyze the following qualitative user feedback corpus for a [domain] designed specifically for [targetRole]. The primary workflow goal is: [coreGoal].

Synthesize the research into an actionable Jobs-to-be-Done (JTBD) Product Framework using this exact markdown schema:

# 1. Executive Persona Profile
- Job Role & Cognitive Context: Daily environment, stress triggers, and typical screen setup.
- The Core Trigger: What event forces them to open this application today?

# 2. Jobs-to-be-Done (JTBD) Matrix
| Job Type | Specific User Job Statement | Current Manual Workaround | UI Design Implication |
| :--- | :--- | :--- | :--- |
| Functional Job | When I [situation], I want to [motivation], so I can [expected outcome]. | ... | ... |
| Emotional Job | When performing this task, I need to feel [feeling] rather than [negative state]. | ... | ... |
| Social Job | When presenting results to my team, I want to be perceived as [perception]. | ... | ... |

# 3. Friction Points & Anxieties
- Top 3 Operational Anxieties (What stops them from completing the workflow?):
- Direct Customer Verbatim Quotes: Include 2 representative quote snippets for each friction point.

# 4. Mandatory Interface Requirements
List the exact UI mechanisms required to eliminate these anxieties (e.g., persistent undo toast, non-destructive preview toggles, instantaneous keyboard shortcuts).`,
        expectedOutputs: [
          "Structured JTBD table mapping functional, emotional, and social jobs directly to UI implications",
          "Clear breakdown of operational anxieties backed by verbatim customer quotes",
          "Concrete checklist of mandatory UI elements required to alleviate friction points"
        ]
      },
      learning: {
        resources: [
          {
            title: "Nielsen Norman Group: Persona Empathy Mapping Guide",
            badge: "OFFICIAL DOCS",
            url: "https://www.nngroup.com/articles/empathy-mapping/"
          },
          {
            title: "Dovetail Guide: Analyzing Qualitative UX Data with AI",
            badge: "GUIDE",
            url: "https://dovetail.com/product/ai/"
          }
        ]
      },
      conceptGuide: {
        title: "The Shift from Demographic Archetypes to Behavioral JTBD",
        overview: "Traditional personas relied on arbitrary demographics like age, location, and hobbies that provided zero practical direction when a designer had to choose between a split-screen master-detail layout or a modal dialog. Modern product design anchors on Clayton Christensen's Jobs-to-be-Done framework: people do not buy software based on their demographics; they 'hire' software to make progress in a specific life or work situation. When AI analyzes hundreds of customer feedback entries, it identifies the causal triggers that push a user toward a solution and the habits and anxieties that hold them back.",
        keyPoints: [
          {
            lead: "Causal Forces",
            text: "Users switch to new software when the push of current problems combined with the pull of a new promise overcomes their existing habits and anxieties."
          },
          {
            lead: "Emotion to Component",
            text: "Every emotional requirement translates to a tactile UI pattern: anxiety about data loss demands auto-save badges and non-destructive action logs."
          },
          {
            lead: "Verbatim Vocabulary",
            text: "Mirroring the exact terminology used by customers inside the UI eliminates cognitive friction and onboarding disorientation."
          }
        ]
      }
    },

    // Node 2
    {
      id: "step-2",
      stepNumber: 2,
      phaseId: "phase-1",
      title: "Information Architecture, Sitemaps & User Flows",
      timeEstimate: "1 hr",
      difficulty: "Beginner",
      summary: "Generate structural sitemaps, branching user onboarding journeys, and edge-case state machine diagrams before drawing visual frames.",
      description: "Jumping directly into visual layout before formalizing the information architecture is the number one cause of fractured user journeys and redundant screens. Designers must define the application's structural skeleton: hierarchical sitemaps, global navigation archetypes, modal containment boundaries, and finite state transitions (Empty, Loading, Error, Partial Data, Success). AI flow generators like Relume and FigJam AI allow teams to generate and stress-test complete sitemap trees and branching user journeys in minutes.",
      playbook: {
        setup: "Open Relume or Whimsical. Define your core product entities (e.g. Workspaces, Projects, Datasets, Members, Settings) and specify the primary entry point.",
        execute: "Generate a multi-tier sitemap specifying page hierarchies, URL slug paths (e.g. `/app/projects/:id/runs`), and container layout types. Next, diagram the primary user onboarding flow, documenting every fork: success paths, permission fallbacks, and validation error states.",
        verify: "Walk through the diagram: verify that no view requires more than 2 navigation clicks from the primary workspace, and ensure every modal or drawer has a documented keyboard escape path (Esc, Cmd+K)."
      },
      tools: [
        {
          name: "Relume",
          type: "Freemium",
          url: "https://www.relume.io",
          description: "Leading AI sitemap and user flow generator that produces structured IA trees and syncs directly into Figma wireframe components.",
          bestFor: "Automated sitemap hierarchies & structural wireframe trees"
        },
        {
          name: "Whimsical",
          type: "Freemium",
          url: "https://whimsical.com",
          description: "Fast, keyboard-driven flowchart and mind-mapping tool with AI text-to-flow capabilities for rapid branch exploration.",
          bestFor: "Branching user flowcharts & state machines"
        },
        {
          name: "FigJam AI",
          type: "Freemium",
          url: "https://www.figma.com/figjam/",
          description: "Collaborative whiteboard canvas with native AI tools to generate user journey maps, retrospective boards, and system flow diagrams.",
          bestFor: "Collaborative whiteboarding & journey mapping"
        }
      ],
      callouts: {
        mistake: "Creating deep nested navigation hierarchies that bury critical daily actions 3 or 4 levels deep.",
        proTip: "Treat every user flow as a finite state machine: always explicitly diagram the 'Network Failure' and 'Empty Search' screens early.",
        mistakes: [
          "Designing 'happy path' flows only, completely ignoring validation error boundaries and offline disconnected states.",
          "Nesting settings and configuration menus 4 levels deep instead of utilizing contextual slide-over drawers or command palettes.",
          "Using ambiguous page titles in sitemaps that confuse both engineers implementing routes and users navigating the product."
        ],
        proTips: [
          "Adopt a flat information architecture with a maximum depth of two clicks for all high-frequency operational tasks.",
          "Incorporate a universal Command Palette (`Cmd+K`) into the information architecture as an alternate fast-path for power users.",
          "Annotate every node in your sitemap with its corresponding REST/URL routing path (e.g. `/teams/:slug/integrations`)."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / ChatGPT o3-mini",
        variables: [
          {
            id: "appComplexity",
            label: "App Complexity",
            options: [
              "Single-Page Utilitarian Tool (High Density)",
              "Multi-Tenant B2B SaaS Platform (6+ Views)",
              "Consumer Mobile Application (Tab Bar Nav)"
            ],
            defaultOption: "Multi-Tenant B2B SaaS Platform (6+ Views)"
          },
          {
            id: "navArchetype",
            label: "Navigation Archetype",
            options: [
              "Collapsible Left Sidebar + Sticky Top Utility Strip",
              "Top Global Navbar + Side Context Drawer",
              "Split-Pane Master-Detail Hierarchy"
            ],
            defaultOption: "Collapsible Left Sidebar + Sticky Top Utility Strip"
          },
          {
            id: "conversionFlow",
            label: "Critical User Flow",
            options: [
              "Zero-to-One Workspace Creation & Team Invite",
              "CSV Data Import with Column Schema Mapping",
              "Subscription Upgrade & Payment Checkout"
            ],
            defaultOption: "Zero-to-One Workspace Creation & Team Invite"
          }
        ],
        template: `Act as a Staff Information Architect and Principal UX Designer. Create a comprehensive Information Architecture (IA) and User Flow specification for a [appComplexity] using a [navArchetype] navigation model.

Focus specifically on mapping out the critical workflow: [conversionFlow].

Provide the output in structured markdown and Mermaid diagram syntax:

# 1. Hierarchical Sitemap & Route Table
| Level 1 View | Level 2 Sub-View | URL Path Pattern | Container Pattern (Page / Drawer / Modal) |
| :--- | :--- | :--- | :--- |
| Dashboard | Overview & Metrics | /app/overview | Full-Width Grid Canvas |
| ... | ... | ... | ... |

# 2. Mermaid State Transition Flowchart
\`\`\`mermaid
stateDiagram-v2
  [*] --> Step1_Initiate
  Step1_Initiate --> Step2_InputValidation: Submit
  Step2_InputValidation --> Step1_Initiate: Validation Error (Inline Alert)
  Step2_InputValidation --> Step3_ServerProcessing: Valid
  Step3_ServerProcessing --> SuccessState: 200 OK
  Step3_ServerProcessing --> ErrorRecovery: 500 Network Timeout
\`\`\`

# 3. Edge-Case Hierarchy Breakdown
For each step in [conversionFlow], specify the exact UI state for:
- 1. Empty State (Initial cold start with contextual helper copy)
- 2. Loading State (Skeleton layout geometry matching final DOM)
- 3. Partial Failure State (Retry action with preserved form values)
- 4. Keyboard Escape Path (Global Esc / Cmd+K behavior)`,
        expectedOutputs: [
          "Complete hierarchical routing table with clean URL paths and layout container patterns",
          "Copy-ready Mermaid state diagram documenting happy paths and error recovery loops",
          "Comprehensive specification of empty, loading, error, and keyboard states"
        ]
      },
      learning: {
        resources: [
          {
            title: "Relume AI Sitemap Builder & Component Documentation",
            badge: "OFFICIAL DOCS",
            url: "https://www.relume.io/resources"
          },
          {
            title: "Nielsen Norman Group: The 4 Principles of Information Architecture",
            badge: "GUIDE",
            url: "https://www.nngroup.com/articles/ia-principles/"
          }
        ]
      },
      conceptGuide: {
        title: "Information Architecture as a Finite State Machine",
        overview: "Information Architecture is not merely a list of pages; it is the mental model users construct about your digital product. If screens share ambiguous responsibilities or if parent-child navigation jumps unpredictably between modal dialogs and browser routes, cognitive overload occurs. Treating user journeys as deterministic finite state machines ensures every user action moves the system from one clearly defined state to the next with clear escape hatches, loading boundaries, and error recovery routes.",
        keyPoints: [
          {
            lead: "Mental Model Alignment",
            text: "Group features around natural user mental tasks rather than internal backend database tables or company org charts."
          },
          {
            lead: "Spatial Consistency",
            text: "Reserve modals strictly for destructive interruptions; use slide-over drawers for secondary details to preserve main-canvas spatial orientation."
          },
          {
            lead: "The 2-Click Standard",
            text: "High-frequency operational commands should never require traversing more than two nested navigation tiers."
          }
        ]
      }
    },

    // Node 3
    {
      id: "step-3",
      stepNumber: 3,
      phaseId: "phase-1",
      title: "Rapid Low-Fidelity Wireframing & Layout Exploration",
      timeEstimate: "1 hr",
      difficulty: "Beginner",
      summary: "Explore 5+ layout variations and conversion page structures rapidly in grayscale without premature color or drop-shadow distractions.",
      description: "When designers introduce colors, typography pairings, and polished illustrations too early, stakeholder feedback invariably fixates on aesthetic taste ('I don't like this shade of blue') rather than structural hierarchy, content density, and conversion logic. Low-fidelity wireframing strips away all decorative elements, forcing the design team to solve pure information layout problems. Using AI-assisted wireframe builders like Relume and UX Pilot, designers can generate and evaluate multiple structural layouts in hours instead of days.",
      playbook: {
        setup: "Set up a strict grayscale design canvas in Figma (0% color saturation, using only neutral shades of gray from white to charcoal #18181B).",
        execute: "Using Relume Wireframe Builder or UX Pilot, generate 3 radically different layout variations for your primary screen: 1) High-density data table with inline editing, 2) Card-based visual grid, and 3) Split-screen master-detail preview.",
        verify: "Test with a 5-second squint test: blur your eyes or apply a 10px blur filter in Figma. Verify that the primary focal point and Call-to-Action (CTA) remain immediately obvious through contrast alone."
      },
      tools: [
        {
          name: "Relume Wireframe Builder",
          type: "Freemium",
          url: "https://www.relume.io",
          description: "Massive library of 1,000+ accessible, neutral wireframe components that export directly into clean Figma Auto-Layout frames.",
          bestFor: "Modular grayscale wireframe scaffolding in Figma"
        },
        {
          name: "UX Pilot",
          type: "Freemium",
          url: "https://uxpilot.ai",
          description: "AI-powered wireframe and UI generator that turns text prompts and user stories into structural screen layouts and flow diagrams.",
          bestFor: "Rapid prompt-to-wireframe screen exploration"
        },
        {
          name: "Figma",
          type: "Freemium",
          url: "https://www.figma.com",
          description: "The industry-standard collaborative interface design tool, featuring responsive Auto-Layout, component variants, and interactive prototyping.",
          bestFor: "Grayscale layout refinement & Auto-Layout composition"
        }
      ],
      callouts: {
        mistake: "Adding brand colors, photography, and gradients during the wireframe phase, derailing stakeholder focus from layout logic.",
        proTip: "Use real sample copy and realistic data names in wireframes instead of 'Lorem Ipsum' to accurately test visual text wrapping and line breaks.",
        mistakes: [
          "Filling wireframe containers with 'Lorem Ipsum' placeholder text that hides realistic line-height, text overflow, and wrapping issues.",
          "Introducing custom colors or drop shadows before layout proportions, padding grids, and eye paths are approved.",
          "Settling on the very first wireframe generated rather than exploring at least 3 distinct spatial arrangements."
        ],
        proTips: [
          "Apply the 8px grid system to all wireframe padding and margins from day one (8px, 16px, 24px, 32px, 48px).",
          "Test responsive wrapping early by building wireframe containers with Figma Auto-Layout set to 'Fill container' and 'Hug contents'.",
          "Run a 5-second squint test on your grayscale wireframe: if the primary CTA doesn't pop in pure black and white, the layout hierarchy is broken."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / ChatGPT o3-mini",
        variables: [
          {
            id: "screenType",
            label: "Screen Target",
            options: [
              "SaaS Telemetry & Analytics Overview",
              "E-Commerce Product Configurator & Checkout",
              "Developer API Key & Rate Limit Management"
            ],
            defaultOption: "SaaS Telemetry & Analytics Overview"
          },
          {
            id: "layoutHierarchy",
            label: "Spatial Layout Structure",
            options: [
              "3-Tier Dashboard (Hero KPI Bar + Split Chart/Feed + Action Table)",
              "Master-Detail Split Pane (Left Feed, Right Interactive Inspector)",
              "Full-Bleed Filterable Data Table with Slide-Over Drawer"
            ],
            defaultOption: "3-Tier Dashboard (Hero KPI Bar + Split Chart/Feed + Action Table)"
          },
          {
            id: "contentDensity",
            label: "Information Density",
            options: [
              "High Density (48px table rows, compact telemetry, power-user focus)",
              "Balanced Density (64px table rows, comfortable 16px body, clear cards)",
              "Spacious / Marketing Tier (Large visual padding, 24px lead headings)"
            ],
            defaultOption: "High Density (48px table rows, compact telemetry, power-user focus)"
          }
        ],
        template: `Act as a Staff UX Architect. Write an exhaustive ASCII Low-Fidelity Wireframe specification and spatial layout plan for a [screenType].
Layout Model: [layoutHierarchy]
Density Requirement: [contentDensity]

Provide the layout blueprint formatted as follows:

# 1. Desktop Grayscale Layout Wireframe (ASCII Diagram at 1280px)
Construct a clean, monospaced ASCII visual diagram outlining:
- Global Navigation bar (height, logo position, search, user avatar)
- Content regions, grid column splits, and card boundaries
- Exact placement of Primary CTA, Secondary filters, and data displays

# 2. Information Hierarchy & Visual Eye Path
- Primary Visual Anchor (Where does the user's eye land first within 500ms?):
- Secondary Reading Scan Path (Z-pattern vs F-pattern justification):
- Tertiary Supporting Metadata:

# 3. Component Dimension & Spacing Blueprint (8px Grid)
List container heights, internal paddings, and responsive behavior for:
- 1. Metric Stat Cards: Padding, typography sizes, trend delta badge position.
- 2. Primary Data Container: Row heights, sticky header styling, pagination footer.
- 3. Action Toolbar: Search input width, filter trigger buttons, export action.

# 4. Mobile Responsive Collapse Rules (Breakpoint: 375px)
Specify exact stacking order, drawer transitions, and hidden secondary columns for mobile viewports.`,
        expectedOutputs: [
          "Crisp ASCII layout wireframe diagram illustrating desktop spatial arrangement",
          "Detailed eye-path scanning analysis (F-pattern vs Z-pattern) and visual anchor hierarchy",
          "Precise 8px grid dimension specifications for all cards, tables, and toolbars"
        ]
      },
      learning: {
        resources: [
          {
            title: "Relume Wireframe Component Library for Figma",
            badge: "OFFICIAL DOCS",
            url: "https://www.relume.io"
          },
          {
            title: "Figma Official Guide: Mastering Auto-Layout in Wireframes",
            badge: "DESIGN SYSTEM",
            url: "https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout"
          }
        ]
      },
      conceptGuide: {
        title: "The Power of Grayscale Spatial Discipline",
        overview: "When wireframing is conducted in pure grayscale, every layout decision is judged strictly by spatial utility: contrast ratio, visual proximity, typography scale, and alignment. Color introduces subjective aesthetic bias that blinds designers and stakeholders to glaring information hierarchy failures. By enforcing grayscale wireframes, teams ensure that the visual eye-path guides the user seamlessly toward their primary goal before any decorative chrome or brand styling is introduced.",
        keyPoints: [
          {
            lead: "The Squint Test",
            text: "A successful layout communicates priority even when blurred; the primary action must command highest contrast in pure black and white."
          },
          {
            lead: "Content-Driven Sizing",
            text: "Real data variations (e.g. 3-character names vs 35-character European company names) must be tested in wireframes to avoid component breaking."
          },
          {
            lead: "8px Spatial Rhythm",
            text: "Aligning all paddings, margins, and component dimensions to multiples of 8 creates a subconscious sense of order and rhythm."
          }
        ]
      }
    },

    // Node 4
    {
      id: "step-4",
      stepNumber: 4,
      phaseId: "phase-2",
      title: "Visual Direction, Moodboarding & Accessible Color Systems",
      timeEstimate: "1 hr",
      difficulty: "Intermediate",
      summary: "Establish human-crafted brand art direction and generate mathematical semantic color palettes (Canvas, Surface, Border, Brand, Feedback) with strict contrast compliance.",
      description: "Amateur interfaces frequently suffer from either generic 'AI-slop' aesthetics (neon purple glows, over-saturated blue gradients, pitch-black OLED surfaces) or unreadable low-contrast text. Professional digital products require a curated visual direction and mathematically calibrated color tokens. Using tools like Realtime Colors, Coolors, and Midjourney for visual texture inspiration, designers construct 5 distinct semantic color tiers (Canvas, Surface, Border, Brand, Feedback) with guaranteed WCAG AAA contrast ratios.",
      playbook: {
        setup: "Generate aesthetic moodboards in Midjourney focusing on utilitarian software textures (matte anodized metals, architectural slate, subtle warm paper tones).",
        execute: "Use Realtime Colors or Coolors to build an accessible semantic palette: 1) Background canvas (e.g. Zinc `#13151A`), 2) Surface cards (`#1C1F26`), 3) Crisp 1px border (`#2D323E`), 4) Refined brand accent (e.g. `#7C3AED` or `#3B82F6`), and 5) Status tokens (Success, Warning, Error).",
        verify: "Check all foreground-to-background combinations against WebAIM or Stark. Verify that body text achieves >= 7:1 (WCAG AAA) and all interactive controls and card borders achieve >= 4.5:1."
      },
      tools: [
        {
          name: "Realtime Colors",
          type: "Free",
          url: "https://realtimecolors.com",
          description: "Real-time color palette visualizer that renders semantic colors on complete mock landing pages and dashboard components instantly.",
          bestFor: "Real-time semantic palette preview on live components"
        },
        {
          name: "Coolors",
          type: "Free",
          url: "https://coolors.co",
          description: "Accessible color scheme generator featuring luminance sorting, contrast calculation, and color blindness simulation.",
          bestFor: "Palette contrast verification & WCAG auditing"
        },
        {
          name: "Midjourney",
          type: "Paid",
          url: "https://www.midjourney.com",
          description: "Advanced generative image model ideal for producing rich UI moodboards, surface lighting concepts, and textured background ideas.",
          bestFor: "Visual art direction & aesthetic moodboard generation"
        }
      ],
      callouts: {
        mistake: "Using pure pitch black (#000000) for dark mode surfaces, which creates harsh eye strain and eliminates depth perception.",
        proTip: "Use warm or zinc-tinted dark neutrals (e.g. #13151A) with 5 distinct 2% lightness steps to represent natural depth elevation.",
        mistakes: [
          "Using pure pitch black (`#000000`) for surfaces, creating severe visual vibration against white text and eliminating drop shadows.",
          "Picking uncalibrated neon accent colors that fail accessibility checks on light or dark mode backgrounds.",
          "Assigning arbitrary hex codes across components instead of formalizing semantic functional roles (`--bg-surface`, `--border-subtle`)."
        ],
        proTips: [
          "Construct a 5-step elevation ramp for dark mode by increasing lightness by 3% for each elevated layer (Canvas -> Surface -> Card -> Popover).",
          "Ensure borders are crisp 1px solid with 12%–18% opacity over dark backgrounds rather than heavy blurred drop-shadows.",
          "Select a single, controlled accent color hue; never use more than one saturated vibrant color on operational dashboards."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / ChatGPT Vision",
        variables: [
          {
            id: "aestheticIdentity",
            label: "Aesthetic Identity",
            options: [
              "Linear / Utilitarian Slate (Soft dark, 1px borders, zero neon)",
              "Vercel Monochrome Technical (High-contrast black/white, monospace accents)",
              "Stripe Warm Indigo (Rich slate-blue canvas, polished micro-elevations)"
            ],
            defaultOption: "Linear / Utilitarian Slate (Soft dark, 1px borders, zero neon)"
          },
          {
            id: "accentHue",
            label: "Primary Accent Tone",
            options: [
              "Deep Royal Violet (#7C3AED)",
              "Electric Emerald (#10B981)",
              "Technical Cobalt (#2563EB)"
            ],
            defaultOption: "Deep Royal Violet (#7C3AED)"
          },
          {
            id: "surfaceTemp",
            label: "Surface Temperature",
            options: [
              "Cool Zinc Slate (#13151A base, #1C1F26 surface)",
              "Neutral Graphite (#18181B base, #27272A surface)",
              "Warm Obsidian (#141312 base, #1E1C1A surface)"
            ],
            defaultOption: "Cool Zinc Slate (#13151A base, #1C1F26 surface)"
          }
        ],
        template: `Act as a Staff Design Systems Architect and Color Scientist. Generate a mathematically calibrated, WCAG AAA-compliant semantic color palette for a modern web application adhering to the [aestheticIdentity] aesthetic.
Primary Accent: [accentHue]
Surface Temperature: [surfaceTemp]

Generate the design tokens formatted as:

# 1. Semantic Color Token Matrix (Light & Dark Mode)
Provide exact HEX, HSL, and OKLCH color codes with annotated WCAG contrast ratios against respective backgrounds:
- Canvas Background: (--bg-canvas)
- Surface Card Layer: (--bg-surface)
- Elevated Modal Layer: (--bg-elevated)
- Subtle 1px Border: (--border-subtle)
- Strong Active Border: (--border-strong)
- Primary Text: (--text-primary) [Must achieve >= 10:1 ratio]
- Muted Body Text: (--text-muted) [Must achieve >= 4.5:1 ratio]
- Accent Interactive: (--accent-primary, --accent-hover, --accent-subtle-bg)
- Status Feedback: Success, Warning, Destructive Error

# 2. Elevation Lightness Physics
Explain the percentage lightness ramp across layers and how depth is communicated without muddy drop shadows.

# 3. CSS Custom Properties Definition Block
\`\`\`css
:root {
  /* Light Mode Variables */
}
.dark {
  /* Dark Mode Variables */
}
\`\`\``,
        expectedOutputs: [
          "Complete semantic color token table with exact HEX, HSL, and OKLCH values",
          "Explicit WCAG contrast ratios annotated for every text-to-background pairing",
          "Production-ready CSS custom properties block for both Light and Dark modes"
        ]
      },
      learning: {
        resources: [
          {
            title: "Realtime Colors: Live Semantic Palette Generator",
            badge: "OFFICIAL DOCS",
            url: "https://realtimecolors.com"
          },
          {
            title: "WebAIM: Contrast Checker & WCAG Standards",
            badge: "GUIDE",
            url: "https://webaim.org/resources/contrastchecker/"
          }
        ]
      },
      conceptGuide: {
        title: "The Physics of Semantic Elevation in Dark Mode",
        overview: "In physical reality, closer objects catch more ambient light and appear slightly brighter than objects farther away. In digital dark mode design, elevation cannot rely on heavy drop shadows because shadows disappear against dark backgrounds. Instead, elevation is communicated through progressive lightness stepping: the main canvas sits at the lowest lightness (e.g. 7% lightness), cards and cards sit slightly higher (11% lightness), and floating modals sit highest (15% lightness), framed by crisp 1px borders.",
        keyPoints: [
          {
            lead: "Lightness as Depth",
            text: "Elevate UI surfaces in dark mode by increasing surface luminance by 2%–4% per tier rather than blurring drop shadows."
          },
          {
            lead: "Semantic Role Abstraction",
            text: "Never name tokens after raw hues (e.g. 'blue-500'); name them after functional intent ('bg-surface', 'border-focus')."
          },
          {
            lead: "Contrast Governance",
            text: "Text readability is non-negotiable; body copy must achieve at least 4.5:1 contrast against its immediate containing surface."
          }
        ]
      }
    },

    // Node 5
    {
      id: "step-5",
      stepNumber: 5,
      phaseId: "phase-2",
      title: "Typography Pairing, Modular Scales & Readability Hierarchy",
      timeEstimate: "45 mins",
      difficulty: "Beginner",
      summary: "Select high-signal display and utilitarian UI sans/mono typeface pairings with mathematical ratio scales, calibrated line-heights, and responsive tracking.",
      description: "Typography represents over 90% of a digital product's user interface. Poor font choices, haphazard font sizes, and uncalibrated line heights immediately brand an application as amateurish and difficult to read. By establishing a rigorous typographic system—pairing a humanized sans-serif for UI elements with a precision monospace for numerical data—designers guarantee legibility across all viewport sizes. Using modular scales (like the Major Second `1.125` or Minor Third `1.200`), font sizes scale in harmonious mathematical proportion.",
      playbook: {
        setup: "Open Typescale and Fontshare. Select a high-clarity geometric or humanist sans-serif (such as Plus Jakarta Sans, Geist, or Inter) and a complementary monospace (JetBrains Mono or Space Mono).",
        execute: "Set your base font size to 16px (1rem) for body copy. Calculate a 7-step modular type scale using a 1.125 (Major Second) or 1.200 (Minor Third) ratio: 12px (caption), 14px (ui-small), 16px (body), 18px (lead), 22px (h3), 26px (h2), 32px (h1).",
        verify: "Inspect body paragraphs: ensure line-height (`leading`) is set between 150%–160% (e.g. `leading-relaxed` / 24px on 16px text) and letter-spacing (`tracking`) is calibrated (negative tracking on large titles, positive tracking on small uppercase labels)."
      },
      tools: [
        {
          name: "Fontshare",
          type: "Free",
          url: "https://www.fontshare.com",
          description: "High-quality, free font service created by the Indian Type Foundry offering professional-grade typography for modern digital products.",
          bestFor: "Curated modern display & UI font discovery"
        },
        {
          name: "Google Fonts",
          type: "Free",
          url: "https://fonts.google.com",
          description: "World's most widely used web font repository featuring reliable CDN hosting, variable font support, and extensive language character sets.",
          bestFor: "Production web font loading & variable fonts"
        },
        {
          name: "Typescale",
          type: "Free",
          url: "https://typescale.com",
          description: "Visual modular type scale calculator that previews harmonious typography scales across multiple musical intervals in real-time.",
          bestFor: "Mathematical modular type scale calculation"
        }
      ],
      callouts: {
        mistake: "Using browser default line-heights on dense tables or using more than 3 distinct font families in a single application.",
        proTip: "Apply tabular numbers (`font-variant-numeric: tabular-nums`) on all monospaced and numerical dashboard stats so digits don't jitter during live updates.",
        mistakes: [
          "Combining more than 2 distinct font families in an interface, creating visual clutter and cognitive dissonance.",
          "Using tight leading (line-height < 1.4) on multi-line body paragraphs, causing reader fatigue and line-skipping.",
          "Using standard proportional numbers for live metrics or pricing tables, causing columns to misalign and numbers to jitter."
        ],
        proTips: [
          "Apply negative letter spacing (e.g. `-0.02em` or `tracking-tight`) to headlines above 24px to prevent large letters from feeling disconnected.",
          "Apply positive letter spacing (e.g. `+0.05em` or `tracking-wide`) to small uppercase badges or micro-labels under 12px.",
          "Standardize on 16px as the universal base body font size; never drop body copy below 14px on desktop screens."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet",
        variables: [
          {
            id: "typeArchetype",
            label: "Typography Archetype",
            options: [
              "Modern Humanist (Plus Jakarta Sans + JetBrains Mono)",
              "Swiss High-Precision (Geist Sans + Geist Mono)",
              "Warm Editorial Tech (Outfit + Space Mono)"
            ],
            defaultOption: "Modern Humanist (Plus Jakarta Sans + JetBrains Mono)"
          },
          {
            id: "modularScale",
            label: "Modular Ratio Interval",
            options: [
              "Major Second (1.125 - Ideal for high-density SaaS)",
              "Minor Third (1.200 - Ideal for balanced web apps)",
              "Major Third (1.250 - Ideal for marketing & editorial)"
            ],
            defaultOption: "Major Second (1.125 - Ideal for high-density SaaS)"
          },
          {
            id: "readingContext",
            label: "Primary Reading Context",
            options: [
              "High-Density Dashboard & Numerical Telemetry",
              "Long-Form Technical Documentation & Reading",
              "Mobile Consumer Interaction & Micro-Copy"
            ],
            defaultOption: "High-Density Dashboard & Numerical Telemetry"
          }
        ],
        template: `Act as a Staff Typography Designer. Create a complete, production-grade typography system for a digital application using the [typeArchetype] pairing.
Modular Scale Ratio: [modularScale]
Context: [readingContext]

Provide the typography specification formatted as:

# 1. Type Scale Architecture Table
| Token Name | Size (px) | Size (rem) | Line Height | Tracking | Font Weight | Typical Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| text-xs | 12px | 0.75rem | 16px (1.33) | +0.04em | 500 (Medium) | Badges, timestamps, tooltips |
| text-sm | 14px | 0.875rem | 20px (1.42) | +0.01em | 400 (Regular) | Table cells, helper descriptions |
| text-base | 16px | 1.000rem | 24px (1.50) | 0.00em | 400 (Regular) | Primary body copy, inputs |
| ... | ... | ... | ... | ... | ... | ... |

# 2. OpenType Feature Flags
Specify mandatory CSS font feature settings:
- \`font-variant-numeric: tabular-nums\` for numerical data
- Discretionary ligatures and kerning adjustments

# 3. Tailwind CSS & Web Font Integration Snippet
Provide the \`@import\` / \`<link>\` block and the Tailwind configuration object mapping these font families and custom font sizes.`,
        expectedOutputs: [
          "Complete 7-tier typography token table with exact rem, line-height, tracking, and weight specs",
          "OpenType feature configuration snippet for tabular alignment",
          "Tailwind CSS theme extension block ready to paste into tailwind.config.js"
        ]
      },
      learning: {
        resources: [
          {
            title: "Typescale: Visual Modular Type Scale Generator",
            badge: "OFFICIAL DOCS",
            url: "https://typescale.com"
          },
          {
            title: "Fontshare Professional Free Typeface Library",
            badge: "DESIGN SYSTEM",
            url: "https://www.fontshare.com"
          }
        ]
      },
      conceptGuide: {
        title: "Mathematical Harmony in Modular Type Scales",
        overview: "In classic architectural design and Renaissance typography, visual harmony is achieved through mathematical intervals rather than arbitrary guessing. Modular scales borrow musical intervals—such as the Major Second (9:8 or 1.125) and Minor Third (6:5 or 1.200)—to multiply a base font size (16px) up and down. This guarantees that every heading, subheading, and caption relates back to the base text in exact harmonic proportion, eliminating visual dissonance across differing screen viewports.",
        keyPoints: [
          {
            lead: "The 16px Root",
            text: "Anchoring your type scale to 16px (1rem) honors browser accessibility defaults and ensures optimal legibility on handheld and desktop screens."
          },
          {
            lead: "Tabular Numeral Alignment",
            text: "Enabling tabular figures ensures all numerals share identical glyph widths, preventing financial data columns from waving and jumping."
          },
          {
            lead: "Optical Tracking Compensation",
            text: "As letter glyphs increase in size, their optical whitespace increases; applying negative tracking on headings restores visual tightness."
          }
        ]
      }
    },

    // Node 6
    {
      id: "step-6",
      stepNumber: 6,
      phaseId: "phase-2",
      title: "Design Tokens Architecture (Variables & Dark/Light Modes)",
      timeEstimate: "1 hr",
      difficulty: "Intermediate",
      summary: "Structure primitive and semantic design tokens for color modes, spacing ramps, and corner radii that export cleanly to CSS and Tailwind variables.",
      description: "A design system without a structured token architecture is just a static visual sticker sheet. When engineers hardcode random hex values or pixel margins in code, product consistency disintegrates. Design tokens bridge the gap between design tools (Figma Variables) and engineering codebases (CSS Custom Properties and Tailwind). By structuring tokens into 3 distinct tiers—1) Primitive Tokens (raw values), 2) Semantic Tokens (contextual roles), and 3) Component Tokens (scoped overrides)—teams can switch themes or rebrand an entire multi-app ecosystem in seconds.",
      playbook: {
        setup: "Open Figma Variables or Tokens Studio. Define your collection architecture into two distinct modes: 'Light' and 'Dark'.",
        execute: "Establish a 3-tier token hierarchy: Tier 1 (Primitives: `blue-600`, `zinc-900`, `radius-6`), Tier 2 (Semantics: `bg-surface` -> aliases to `zinc-900` in dark, `white` in light; `border-default` -> aliases to `zinc-800`), Tier 3 (Component tokens: `button-primary-bg`).",
        verify: "Use Figma's Mode Switcher or Tokens Studio export: toggle a test dashboard frame between Light and Dark mode. Verify that 100% of elements transform cleanly without a single unmapped color or broken contrast pairing."
      },
      tools: [
        {
          name: "Figma Variables",
          type: "Freemium",
          url: "https://www.figma.com",
          description: "Native Figma variable engine supporting color modes, numerical dimensions, string tokens, and boolean UI logic.",
          bestFor: "Native Figma multi-theme variable management"
        },
        {
          name: "Tokens Studio",
          type: "Freemium",
          url: "https://tokens.studio",
          description: "Industry-standard design token management plugin syncing Figma tokens with GitHub repositories, JSON schemas, and Style Dictionary.",
          bestFor: "Two-way Figma-to-GitHub design token synchronization"
        },
        {
          name: "Style Dictionary",
          type: "Free",
          url: "https://styledictionary.com",
          description: "Open-source build system created by Amazon that transforms design token JSON into CSS, SCSS, Swift, and Android XML assets.",
          bestFor: "Automated multi-platform token compilation"
        }
      ],
      callouts: {
        mistake: "Referencing primitive tokens directly in components (e.g. styling a card with `zinc-900` instead of `bg-surface`).",
        proTip: "Limit corner radius across your entire design system to a maximum of 6px (rounded-md) to maintain an authoritative, utilitarian software feel.",
        mistakes: [
          "Referencing primitive tokens directly inside component variants, making it impossible to switch between dark and light modes cleanly.",
          "Creating hundreds of hyper-specific component tokens before establishing a foundational 15-token semantic layer.",
          "Failing to standardize spacing tokens on the 8px grid, resulting in arbitrary 7px, 13px, or 19px margins across code."
        ],
        proTips: [
          "Enforce the 3-tier token rule: Components must ONLY consume Semantic tokens, which in turn alias to Primitive tokens.",
          "Lock down your border-radius token to a single universal constant (`radius-default: 6px`) to ensure cohesive curvature across all buttons, cards, and inputs.",
          "Automate design token publishing by connecting Tokens Studio to a GitHub Action that compiles tokens into Tailwind CSS variables on pull request merge."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet",
        variables: [
          {
            id: "tokenScope",
            label: "Token Architecture Scope",
            options: [
              "Core Semantic Palette & Dual Theme Ramp (Light/Dark)",
              "Complete Spacing, Radius, and Typography Token Set",
              "Full 3-Tier Enterprise Token Schema (Primitives + Semantics + Components)"
            ],
            defaultOption: "Full 3-Tier Enterprise Token Schema (Primitives + Semantics + Components)"
          },
          {
            id: "exportTarget",
            label: "Engineering Export Target",
            options: [
              "Tailwind CSS v3/v4 Theme Extension Config",
              "W3C Design Token Community Group (DTCG) Standard JSON",
              "Pure CSS Custom Properties (:root & .dark)"
            ],
            defaultOption: "W3C Design Token Community Group (DTCG) Standard JSON"
          },
          {
            id: "radiusEnforcement",
            label: "Border Radius Strictness",
            options: [
              "Strict Utilitarian (DEFAULT: 6px, sm: 4px, lg: 6px)",
              "Modern Soft Pill (sm: 6px, md: 10px, pill: 9999px)",
              "Sharp Technical Monochrome (0px sharp corners)"
            ],
            defaultOption: "Strict Utilitarian (DEFAULT: 6px, sm: 4px, lg: 6px)"
          }
        ],
        template: `Act as a Principal Design Systems Architect. Create a production-grade Design Token architecture in [exportTarget] for a modern web application.
Scope: [tokenScope]
Radius Rule: [radiusEnforcement]

Structure the token schema adhering to the W3C Design Tokens Community Group (DTCG) format:

# 1. Primitives Tier (Raw Scales)
- Neutrals: zinc-50 through zinc-950
- Accents: violet-500, emerald-500, rose-500
- Spacing Scale: space-1 (4px), space-2 (8px), space-3 (12px), space-4 (16px), space-6 (24px), space-8 (32px)
- Radius Scale: Strict [radiusEnforcement]

# 2. Semantic Tier (Role Aliasing)
Map both "light" and "dark" mode collections:
- \`bg-canvas\`, \`bg-surface\`, \`bg-elevated\`
- \`border-subtle\`, \`border-strong\`, \`border-interactive\`
- \`text-primary\`, \`text-secondary\`, \`text-muted\`
- \`status-success\`, \`status-warning\`, \`status-error\`

# 3. Component Token Tier
Demonstrate component aliases for Button, Card, and Input fields referencing ONLY semantic tokens.

Return valid, clean JSON / CSS with zero omissions.`,
        expectedOutputs: [
          "Valid DTCG-standard design token JSON with $value and $type attributes",
          "Clean separation between Primitive, Semantic, and Component token tiers",
          "Working light and dark mode alias resolution mappings"
        ]
      },
      learning: {
        resources: [
          {
            title: "Figma Official Guide: Variables and Modes Architecture",
            badge: "OFFICIAL DOCS",
            url: "https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma"
          },
          {
            title: "Tokens Studio for Figma Official Documentation",
            badge: "DESIGN SYSTEM",
            url: "https://docs.tokens.studio"
          }
        ]
      },
      conceptGuide: {
        title: "The Three Tiers of Enterprise Design Tokens",
        overview: "Design tokens are the atomic DNA of modern multi-platform software. When an organization scales past a single app, styling hardcoded inside CSS files leads to massive technical and visual debt. By implementing the industry-standard 3-tier token architecture—Primitives, Semantics, and Components—designers create a single source of truth. If the brand accent color changes or if a high-contrast accessibility mode is required, updating a single semantic alias cascades changes across Figma, React, iOS, and Android automatically.",
        keyPoints: [
          {
            lead: "Tier 1: Primitives",
            text: "Raw foundational values (e.g. `blue-500: #3B82F6`) that hold zero context about where or how they are used."
          },
          {
            lead: "Tier 2: Semantics",
            text: "Contextual intent tokens (e.g. `bg-surface`, `border-focus`) that alias primitives and switch dynamically between light and dark modes."
          },
          {
            lead: "Tier 3: Components",
            text: "Scoped component tokens (e.g. `button-primary-bg`) that allow isolated styling overrides without mutating global semantics."
          }
        ]
      }
    },

    // Node 7
    {
      id: "step-7",
      stepNumber: 7,
      phaseId: "phase-2",
      title: "Atomic Component Libraries & Auto-Layout Mastery",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Build indestructible, production-ready component variants (Default, Hover, Active, Focus-Visible, Disabled, Loading) using nested Auto-Layout and component properties.",
      description: "A brittle Figma component that breaks when long text is entered or when a container is resized frustrates engineers and slows down prototyping. Building production-grade component libraries requires mastering nested Figma Auto-Layout ('Fill Container' vs 'Hug Contents'), component properties (Boolean, Instance Swap, Text), and exhaustive interactive variant matrices. By modeling component libraries after battle-tested open-source systems like shadcn/ui and Radix Primitives, designers create resilient building blocks ready for one-to-one code translation.",
      playbook: {
        setup: "Inspect open-source component architectures: install the shadcn/ui Figma kit or Radix Primitives library as an architectural reference.",
        execute: "Build a core Button component in Figma: 1) Apply Auto-Layout with 8px horizontal and 6px vertical padding, 2) Configure component properties for `Label` (text), `LeadingIcon` (boolean), and `TrailingIcon` (boolean), 3) Generate a variant matrix covering all 6 mandatory interactive states (Default, Hover, Active, Focus-Visible, Disabled, Loading Spinner).",
        verify: "Stress test the component: type a 50-character button label and resize the parent frame. Confirm that the button expands smoothly, icons remain centered, and borders scale without clipping or pixel distortion."
      },
      tools: [
        {
          name: "Figma",
          type: "Freemium",
          url: "https://www.figma.com",
          description: "Leading design platform with advanced Auto-Layout, variant component sets, component properties, and Dev Mode code inspection.",
          bestFor: "Building resilient atomic UI component libraries"
        },
        {
          name: "shadcn/ui Figma Kit",
          type: "Free",
          url: "https://ui.shadcn.com/figma",
          description: "Official community Figma component library mapping 1-to-1 with shadcn/ui React and Tailwind CSS components.",
          bestFor: "Production-ready accessible component structures"
        },
        {
          name: "Radix Primitives",
          type: "Free",
          url: "https://www.radix-ui.com/primitives",
          description: "Unstyled, accessible component primitives providing the functional state specifications for dropdowns, dialogs, and toolbars.",
          bestFor: "Accessible interaction states & ARIA role modeling"
        }
      ],
      callouts: {
        mistake: "Using fixed pixel widths on buttons and cards instead of Figma Auto-Layout 'Hug Contents' or 'Fill Container'.",
        proTip: "Create a dedicated 'Focus-Visible' variant with a 2px offset ring (#7C3AED) on all interactive components to ensure keyboard a11y parity.",
        mistakes: [
          "Hardcoding fixed pixel widths on component frames, causing text to clip when strings change or are translated.",
          "Building component variants for every single permutation instead of utilizing Figma's native Component Properties (Boolean, Text, Instance Swap).",
          "Omitting the 'Focus-Visible' state, leaving engineers to invent arbitrary keyboard focus outlines in code."
        ],
        proTips: [
          "Set parent containers to 'Fill Container' and child labels to 'Hug Contents' to create perfectly responsive layouts.",
          "Nest an invisible 2px transparent border inside your default buttons so that adding a 2px focus ring does not cause layout shifts.",
          "Name component layers semantically (e.g. `Label`, `Icon/Leading`, `Container`) so Figma Dev Mode exports readable JSX."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet",
        variables: [
          {
            id: "componentTarget",
            label: "Component Target",
            options: [
              "Interactive Multi-State Button",
              "Slide-Over Navigation Context Drawer",
              "Filterable Data Table Row & Cell Actions"
            ],
            defaultOption: "Interactive Multi-State Button"
          },
          {
            id: "statesRequired",
            label: "State Coverage",
            options: [
              "Full 6-State Matrix (Default, Hover, Active, Focus, Disabled, Loading)",
              "Form Validation States (Default, Error, Success, Typing, Disabled)",
              "Multi-Select Table Row (Default, Hovered, Selected, Indeterminate)"
            ],
            defaultOption: "Full 6-State Matrix (Default, Hover, Active, Focus, Disabled, Loading)"
          },
          {
            id: "densityPreset",
            label: "Density Preset",
            options: [
              "Compact Utilitarian (32px height, 12px text, 4px padding)",
              "Standard Balanced (40px height, 14px text, 6px padding)",
              "Comfortable Spacious (48px height, 16px text, 8px padding)"
            ],
            defaultOption: "Standard Balanced (40px height, 14px text, 6px padding)"
          }
        ],
        template: `Act as a Staff Design Systems Engineer. Write a comprehensive component specification and Figma Auto-Layout construction blueprint for a [componentTarget].
State Matrix Required: [statesRequired]
Density Preset: [densityPreset]

Provide the structural specification formatted as:

# 1. Component Anatomy & Figma Layer Tree
Outline the exact nested layer hierarchy, Auto-Layout direction, resizing properties, and layer names:
- Frame: Container (Auto-Layout Horizontal, Spacing: 8px, Padding: X, Y)
  ├── Instance: Icon/Leading (Fixed 16x16px, Boolean Prop: hasLeadingIcon)
  ├── Text: Label (Hug contents, Text Prop: labelText)
  └── Instance: Icon/Trailing (Fixed 16x16px, Boolean Prop: hasTrailingIcon)

# 2. Interactive Variant Matrix Table
| Variant Name | Background Token | Border Token | Text Token | Elevation / Shadow | Cursor / Interaction |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Default | bg-accent | border-subtle | text-on-accent | None | pointer |
| Hover | bg-accent-hover | border-accent | text-on-accent | None | pointer |
| Focus-Visible | bg-accent | 2px ring offset | text-on-accent | None | outline-ring |
| Loading | bg-accent-muted | border-subtle | opacity-0 | Spinner instance | wait / not-allowed |
| Disabled | bg-muted | border-subtle | text-muted | None | not-allowed |

# 3. Accessibility & Keyboard Specification
- Required ARIA Role and attributes (e.g., \`aria-busy="true"\` for loading)
- Keyboard event handlers (Enter, Space, Tab order)

# 4. Developer Handoff Contract
Provide the TypeScript Props interface and corresponding React + Tailwind CSS code snippet matching this Figma variant exactly.`,
        expectedOutputs: [
          "Exhaustive Figma layer tree diagram with Auto-Layout and component property annotations",
          "Complete 6-state variant matrix mapping tokens to interactive triggers",
          "TypeScript props interface and production-ready React component code"
        ]
      },
      learning: {
        resources: [
          {
            title: "shadcn/ui Component Architecture Guidelines",
            badge: "OFFICIAL DOCS",
            url: "https://ui.shadcn.com/docs"
          },
          {
            title: "Radix UI Primitives: Accessibility & State Standards",
            badge: "DESIGN SYSTEM",
            url: "https://www.radix-ui.com/primitives"
          }
        ]
      },
      conceptGuide: {
        title: "Resilient Components Through Auto-Layout and Properties",
        overview: "In legacy design workflows, creating a component library required drawing hundreds of disconnected vector rectangles. If a button needed an icon on the right, designers duplicated the entire component. Modern design systems treat components as dynamic, code-aligned objects. By combining nested Auto-Layout—which mimics CSS Flexbox rules—with Component Properties, a single master component dynamically toggles icons, adapts to 50 languages without clipping, and responds to frame resizing just like production React code.",
        keyPoints: [
          {
            lead: "Auto-Layout as Flexbox",
            text: "Understanding the relationship between 'Hug' (fit-content) and 'Fill' (flex-grow: 1) is essential for indestructible responsive UI."
          },
          {
            lead: "Component Property Economy",
            text: "Use Boolean and Instance Swap properties to handle variations instead of exploding your variant count into hundreds of unmanageable combinations."
          },
          {
            lead: "Focus-Visible Parity",
            text: "Keyboard navigation is an accessibility mandate; designing focus-visible rings in Figma ensures developers never ship inaccessible components."
          }
        ]
      }
    },

    // Node 8
    {
      id: "step-8",
      stepNumber: 8,
      phaseId: "phase-3",
      title: "Prompt-to-UI Component Generation & Rapid Iteration",
      timeEstimate: "1 hr",
      difficulty: "Intermediate",
      summary: "Generate responsive, production-ready React + Tailwind UI components directly from natural language or wireframe snapshots and iterate in real-time.",
      description: "Generative UI tools have revolutionized the prototyping lifecycle. Instead of manually pushing vectors in Figma for hours, designers can now prompt tools like v0 by Vercel, Magic Patterns, and Claude Artifacts to synthesize functioning, interactive React and Tailwind components in seconds. The secret to professional output is avoiding vague prompts ('make a modern dashboard') and providing strict design system tokens, 1px border constraints, and explicit interactive states.",
      playbook: {
        setup: "Open v0.dev or Claude Artifacts. Pre-seed your system prompt with your project's design tokens: font families (Plus Jakarta Sans, JetBrains Mono), zinc background surfaces, and a strict 6px border radius rule.",
        execute: "Provide a detailed component prompt or upload your grayscale wireframe screenshot from Node 3. Request an isolated UI block (e.g. Telemetry Stats Card or Settings Slide-Over Drawer) with full hover and click states.",
        verify: "Inspect the generated code: eliminate oversized borders, neon drop-shadows, and unnecessary third-party animation libraries. Test responsiveness by dragging the preview viewport between 375px and 1280px."
      },
      tools: [
        {
          name: "v0 by Vercel",
          type: "Freemium",
          url: "https://v0.dev",
          description: "Generative UI system synthesizing production-ready React components with Tailwind CSS and Radix UI / shadcn.",
          bestFor: "Atomic React + Tailwind UI component generation"
        },
        {
          name: "Magic Patterns",
          type: "Freemium",
          url: "https://www.magicpatterns.com",
          description: "AI UI prototyping platform that generates full-page component prototypes and syncs clean designs directly into Figma.",
          bestFor: "Prompt-to-Figma UI component synchronization"
        },
        {
          name: "Claude Artifacts",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Interactive real-time React preview environment inside Claude, ideal for rapid conversational UI iteration and logic testing.",
          bestFor: "Conversational UI prototyping & state exploration"
        }
      ],
      callouts: {
        mistake: "Asking generative tools to build an entire complex web app in a single prompt instead of prompting for isolated, atomic components.",
        proTip: "Explicitly command the AI: 'Utilitarian developer tool aesthetic, border-zinc-800, rounded-md, no box shadows, Space Mono labels'.",
        mistakes: [
          "Prompting for 'a futuristic modern website', which defaults to generic neon glows, oversized 24px border radii, and meaningless marketing fluff.",
          "Accepting bloated multi-layered container trees (div-soup) without instructing the model to simplify CSS Flexbox and Grid layouts.",
          "Failing to constrain the AI with your specific design tokens, resulting in mismatched color shades across different screens."
        ],
        proTips: [
          "Feed screenshot images of your low-fi Figma wireframes directly into multimodal models alongside your token specifications for 10x more accurate code.",
          "Generate components with all interactive states (hover, focus-visible, active, empty data) in the first prompt pass.",
          "Copy generated JSX directly into your Vite codebase or use Figma plugins to convert the HTML DOM back into native Figma Auto-Layout frames."
        ]
      },
      promptLab: {
        recommendedModel: "v0.dev / Claude 3.7 Sonnet (Reasoning Mode)",
        variables: [
          {
            id: "frameworkTarget",
            label: "Framework Target",
            options: [
              "React 19 + Tailwind CSS + Lucide Icons",
              "HTML5 + Vanilla CSS Custom Properties",
              "Next.js App Router Server Component"
            ],
            defaultOption: "React 19 + Tailwind CSS + Lucide Icons"
          },
          {
            id: "componentScope",
            label: "Component Target",
            options: [
              "Telemetry Stat Strip with Interactive Sparkline",
              "Slide-Over Navigation Context Drawer",
              "Filterable Data Table with Multi-Select Actions"
            ],
            defaultOption: "Telemetry Stat Strip with Interactive Sparkline"
          },
          {
            id: "visualConstraint",
            label: "Design Constraint",
            options: [
              "Strict 1px Border / Zero Box-Shadows / Plus Jakarta Sans",
              "Monochrome High-Contrast Technical Aesthetic",
              "Subtle Slate Elevation Ramp / 6px Corner Radius"
            ],
            defaultOption: "Strict 1px Border / Zero Box-Shadows / Plus Jakarta Sans"
          }
        ],
        template: `Act as a Staff Frontend Engineer and Design Systems Architect. Generate a production-ready, fully accessible [componentScope] using [frameworkTarget].
Design System Rules: [visualConstraint]

Strict Requirements:
1. Styling Tokens:
   - Backgrounds: Canvas bg-[#13151A], Card surface bg-[#1C1F26], Border border-[#2D323E]
   - Text: Primary text-[#F4F4F5], Muted text-[#A1A1AA]
   - Accent: Brand accent #7C3AED with subtle flat tint. ZERO neon glow or box-shadow filters.
   - Corner Radius: Strictly rounded-md (6px). Do not use rounded-xl or rounded-2xl.
   - Typography: Plus Jakarta Sans for labels and values, JetBrains Mono for telemetry codes.

2. Interactive States & Micro-Interactions:
   - Hover state: 1px border transition to #7C3AED with 150ms ease.
   - Focus state: Accessible focus-visible ring with 2px offset.
   - Include interactive toggle or active selection state with live React state (useState).

3. Clean Code Hygiene:
   - Semantic HTML tags (<section>, <header>, <button>, <data>).
   - TypeScript props interface or cleanly typed PropTypes.
   - Return self-contained component code ready to drop into a Vite project.`,
        expectedOutputs: [
          "Clean, production-grade React JSX with zero oversized margins or container bloat",
          "Crisp 1px border hover transitions with zero blurry box-shadows",
          "Complete keyboard accessibility and ARIA attribute integration"
        ]
      },
      learning: {
        resources: [
          {
            title: "Vercel v0 Generative UI Documentation & Prompt Guide",
            badge: "OFFICIAL DOCS",
            url: "https://v0.dev/docs"
          },
          {
            title: "Magic Patterns: AI Prototyping & Figma Sync Guide",
            badge: "GUIDE",
            url: "https://www.magicpatterns.com"
          }
        ]
      },
      conceptGuide: {
        title: "Prompting Generative UI with Strict Constraint Injection",
        overview: "Generative UI models are trained on millions of open-source web pages, meaning their default aesthetic bias reflects the generic median of the internet: rounded bubble cards, heavy drop shadows, and neon purple gradients. To extract high-end, humanized software interfaces from AI, designers must inject negative constraints and deterministic tokens into the prompt. By specifying 1px solid borders, exact hex values, and 6px border radii upfront, the model is constrained to generate sleek, engineering-grade interfaces.",
        keyPoints: [
          {
            lead: "Negative Constraints",
            text: "Explicitly instructing the model what NOT to do ('no box shadows, no glowing text, no rounded-2xl') produces cleaner code than descriptive positive prompts."
          },
          {
            lead: "Atomic Component Scoping",
            text: "Prompts succeed when focused on a single atomic component; generating entire applications in one shot produces div-soup and architectural debt."
          },
          {
            lead: "Multimodal Priming",
            text: "Uploading your grayscale wireframe alongside technical specifications anchors the model's spatial reasoning far better than words alone."
          }
        ]
      }
    },

    // Node 9
    {
      id: "step-9",
      stepNumber: 9,
      phaseId: "phase-3",
      title: "Micro-Interactions, Motion Curves & 3D Visual Assets",
      timeEstimate: "1 hr",
      difficulty: "Advanced",
      summary: "Design physics-based spring curves, state-machine vector animations, and interactive 3D elements that elevate perceived polish without hurting Lighthouse performance.",
      description: "Static interfaces feel lifeless, but poorly implemented animations feel sluggish and irritate power users. Thoughtful micro-interactions communicate state transitions, reassure users that their action was registered, and add delightful craftsmanship to digital products. By designing spring physics animations in Rive and Lottie and lightweight interactive 3D elements in Spline, designers can build dynamic, high-polish experiences that maintain 60 FPS performance without degrading Core Web Vitals.",
      playbook: {
        setup: "Open Rive or LottieFiles for stateful 2D micro-animations, or Spline for interactive 3D canvas assets.",
        execute: "Design a stateful micro-interaction (e.g. an animated bookmark/favorite button, a dynamic checkmark confirmation, or an interactive 3D cursor-tracking card). Use physics-based spring curves (Stiffness: 300, Damping: 25) rather than linear ease-in-out curves.",
        verify: "Benchmark the animation: verify that total asset weight remains under 50KB for Rive/Lottie or under 350KB for Spline, and confirm that animations respect the user's `prefers-reduced-motion` operating system setting."
      },
      tools: [
        {
          name: "Rive",
          type: "Freemium",
          url: "https://rive.app",
          description: "State-machine animation tool creating tiny, interactive vector animations that run natively at 60 FPS with full code control.",
          bestFor: "Interactive state-machine vector micro-animations"
        },
        {
          name: "LottieFiles",
          type: "Freemium",
          url: "https://lottiefiles.com",
          description: "Platform for creating, testing, and shipping lightweight JSON-based vector animations across web, iOS, and Android.",
          bestFor: "Lightweight JSON animations & success confirmations"
        },
        {
          name: "Spline",
          type: "Freemium",
          url: "https://spline.design",
          description: "Collaborative 3D design software for web applications, featuring real-time physics, mouse tracking, and React component export.",
          bestFor: "Interactive 3D hero assets & cursor-reactive cards"
        }
      ],
      callouts: {
        mistake: "Using linear ease-in-out timing curves or animations that last longer than 300ms, making the interface feel sluggish.",
        proTip: "Keep interactive micro-interactions between 150ms and 200ms with spring physics so they feel instantaneous and tactile.",
        mistakes: [
          "Designing animations longer than 300ms for high-frequency actions, introducing annoying friction for regular users.",
          "Embedding bloated multi-megabyte 3D canvases that destroy mobile Lighthouse performance scores and drain laptop battery life.",
          "Ignoring the `prefers-reduced-motion` media query, triggering vestibular motion sickness in sensitive users."
        ],
        proTips: [
          "Use spring physics curves with low damping for tactile feedback (e.g. button click releases) and high damping for modal reveals.",
          "Render 3D assets in Spline using simplified low-poly geometry and baked lighting textures to minimize GPU shader overhead.",
          "Always implement a CSS fallback: `@media (prefers-reduced-motion: reduce) { * { animation: none !important; } }`."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet",
        variables: [
          {
            id: "interactionTarget",
            label: "Micro-Interaction Target",
            options: [
              "Stateful Favorite / Bookmark Button with Particle Burst",
              "Collapsible Drawer Slide-Over with Spring Physics",
              "Interactive 3D Hero Surface with Cursor Tilt"
            ],
            defaultOption: "Stateful Favorite / Bookmark Button with Particle Burst"
          },
          {
            id: "motionMood",
            label: "Motion Physics Curve",
            options: [
              "Snappy & Tactile (Spring: Stiffness 400, Damping 30, Duration ~150ms)",
              "Smooth & Editorial (Cubic-Bezier 0.16, 1, 0.3, 1, Duration ~250ms)",
              "Playful Bouncy (Spring: Stiffness 250, Damping 15, Overshoot 10%)"
            ],
            defaultOption: "Snappy & Tactile (Spring: Stiffness 400, Damping 30, Duration ~150ms)"
          },
          {
            id: "triggerEvent",
            label: "Trigger Event",
            options: [
              "Click / Active Press State",
              "Hover & Cursor Coordinates Proximity",
              "Async Success State Resolution"
            ],
            defaultOption: "Click / Active Press State"
          }
        ],
        template: `Act as a Principal Motion Designer and Frontend Creative Developer. Create a complete micro-interaction specification and production code implementation for a [interactionTarget].
Motion Curve: [motionMood]
Trigger Event: [triggerEvent]

Provide the motion design blueprint formatted as:

# 1. Physics & Timing Specification
- Animation Duration: (e.g., 180ms)
- CSS Transition / Framer Motion Spring Parameters: (stiffness, damping, mass)
- Visual Keyframes: Exact transforms (scale, rotate, translateY) and opacity changes at 0%, 50%, and 100%.

# 2. Production React Implementation (Framer Motion / Tailwind)
Provide a complete, copy-ready React component utilizing Framer Motion or pure Tailwind CSS transitions implementing:
- Immediate tactile scale feedback on press (\`whileTap={{ scale: 0.95 }}\`)
- Smooth spring return with zero layout jank
- Accessible \`prefers-reduced-motion\` handling

# 3. Performance & Asset Budget
- Target FPS: 60 FPS minimum on low-power mobile devices
- CPU/GPU Threading: Specify why this interaction uses strictly GPU-accelerated properties (transform, opacity) and avoids repainting layout geometries (width, height, margin).`,
        expectedOutputs: [
          "Exhaustive physics curve specification with spring stiffness and damping numbers",
          "Production React component code using Framer Motion and GPU-accelerated transforms",
          "Complete accessibility fallback block for reduced motion users"
        ]
      },
      learning: {
        resources: [
          {
            title: "Rive: Interactive Runtime Animation Documentation",
            badge: "OFFICIAL DOCS",
            url: "https://rive.app/community/doc"
          },
          {
            title: "Spline 3D Design & React Integration Guide",
            badge: "GUIDE",
            url: "https://docs.spline.design"
          }
        ]
      },
      conceptGuide: {
        title: "Spring Physics vs Cubic Beziers in Tactile Software",
        overview: "In traditional animation, transitions follow static cubic-bezier time curves that play out over a predetermined number of milliseconds regardless of user input velocity. In contrast, natural physical objects in the real world possess mass, momentum, and elasticity. Spring physics simulations model stiffness, damping, and mass dynamically. When a user swipes or clicks an interface element governed by spring physics, the animation adapts its velocity to the user's gesture, creating a tactile sensation that makes digital software feel tangible.",
        keyPoints: [
          {
            lead: "The 200ms Rule",
            text: "High-frequency micro-interactions must never exceed 200ms; user perceived latency begins at 100ms, and longer durations feel unresponsive."
          },
          {
            lead: "GPU Compositor Isolation",
            text: "Animate strictly with `transform` and `opacity`; modifying `height`, `top`, or `padding` triggers expensive layout reflows and frame drops."
          },
          {
            lead: "Stateful Continuity",
            text: "Micro-animations should bridge state changes (e.g. a download arrow transforming smoothly into a checkmark) to preserve visual continuity."
          }
        ]
      }
    },

    // Node 10
    {
      id: "step-10",
      stepNumber: 10,
      phaseId: "phase-3",
      title: "High-Fidelity Interactive Prototypes & AI Usability Testing",
      timeEstimate: "1 hr",
      difficulty: "Advanced",
      summary: "Wire realistic prototypes with variable logic and run AI predictive eye-tracking and unmoderated user testing to identify UX friction before engineering begins.",
      description: "Discovering navigation dead-ends, confusing label copy, or hidden buttons after engineering has already spent weeks writing code is catastrophic to product velocity. By wiring high-fidelity interactive prototypes in Figma with variable logic and subjecting them to automated usability testing platforms (Maze) and AI predictive visual salience heatmaps (Attention Insight), design teams can identify friction points, measure task success rates, and validate design decisions with quantitative data before writing a single line of backend code.",
      playbook: {
        setup: "Connect your Figma screens into a continuous interactive prototype using Figma Variables, component variant interactions, and realistic input fields.",
        execute: "Run your high-fidelity prototype through Attention Insight to generate predictive eye-tracking heatmaps and visual salience scores. Next, deploy an unmoderated 5-task usability test in Maze to recruit 20 target users.",
        verify: "Review quantitative usability metrics: ensure Task Completion Rate exceeds 85%, Average Time on Task falls within benchmark thresholds, and Visual Salience on the primary CTA exceeds 70% within the first 3 seconds of screen viewing."
      },
      tools: [
        {
          name: "Figma Prototyping",
          type: "Freemium",
          url: "https://www.figma.com",
          description: "Advanced prototyping engine supporting conditional logic, numerical variables, interactive component states, and smart animate transitions.",
          bestFor: "High-fidelity interactive prototype wiring"
        },
        {
          name: "Maze",
          type: "Freemium",
          url: "https://maze.co",
          description: "Continuous product discovery and unmoderated user testing platform providing quantitative heatmaps, misclick rates, and task completion metrics.",
          bestFor: "Unmoderated user testing & task completion metrics"
        },
        {
          name: "Attention Insight",
          type: "Paid",
          url: "https://attentioninsight.com",
          description: "AI-powered predictive eye-tracking software trained on thousands of eye-tracking studies, generating instant visual salience heatmaps.",
          bestFor: "Predictive visual attention heatmaps & CTA salience"
        }
      ],
      callouts: {
        mistake: "Testing prototypes with internal colleagues who already know how the product works, masking glaring navigation friction.",
        proTip: "Use Attention Insight's 'Clarity Score' to confirm that visual noise and competing secondary buttons do not distract from the primary conversion goal.",
        mistakes: [
          "Conducting usability tests with colleagues or product managers who suffer from the 'curse of knowledge', masking obvious UX hurdles.",
          "Testing non-interactive static screens instead of prototypes with realistic state logic, leading to false-positive confidence.",
          "Ignoring high misclick rates on secondary cards, failing to recognize that users perceive non-clickable elements as interactive."
        ],
        proTips: [
          "Define a single critical path for each test scenario and measure the exact drop-off percentage at each transition step.",
          "Ensure your primary Call-to-Action achieves a Visual Salience score of at least 70% in predictive AI eye-tracking heatmaps.",
          "Record screen interactions and audio commentary during unmoderated tests to hear the exact moment users experience cognitive confusion."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / ChatGPT o3-mini",
        variables: [
          {
            id: "testScenario",
            label: "Usability Test Scenario",
            options: [
              "Onboarding Workspace Setup & First Integration Connect",
              "Filtering 10,000 Data Records & Bulk Exporting CSV",
              "Upgrading Billing Plan & Adding 5 Seat Licenses"
            ],
            defaultOption: "Onboarding Workspace Setup & First Integration Connect"
          },
          {
            id: "participantTier",
            label: "Target Participant Profile",
            options: [
              "First-Time Unfamiliar Users (Zero Prior Experience)",
              "Power Users Migrating from Competitor Software",
              "Non-Technical Department Managers"
            ],
            defaultOption: "First-Time Unfamiliar Users (Zero Prior Experience)"
          },
          {
            id: "primaryMetric",
            label: "Primary Success Metric",
            options: [
              "Task Completion Rate >= 85% / Misclick Rate < 15%",
              "Time on Task < 60 Seconds / Zero Critical Errors",
              "System Usability Scale (SUS) Score >= 80"
            ],
            defaultOption: "Task Completion Rate >= 85% / Misclick Rate < 15%"
          }
        ],
        template: `Act as a Principal UX Researcher and Product Usability Specialist. Write an unmoderated usability testing protocol and predictive eye-tracking analysis script for an interactive prototype testing: [testScenario].
Target Participants: [participantTier]
Target Benchmark: [primaryMetric]

Structure the testing protocol formatted as:

# 1. Usability Test Scenario & Task Prompts
Write 3 realistic, non-leading task instructions for participants in Maze:
- Task 1 (Initial Orientation & Discovery):
- Task 2 (Core Action Execution):
- Task 3 (Edge-Case Verification & Export):

# 2. Predictive Visual Salience & Heatmap Audit
Define the expected visual eye-path hierarchy across the 3 critical views:
- Area of Interest (AOI) 1: Primary Action Button (Target Salience >= 70%)
- Area of Interest (AOI) 2: Contextual Navigation / Filters
- Distraction Risk Audit: Identify potential competing visual elements (e.g. oversized badges or high-contrast illustrations) that risk cannibalizing user attention.

# 3. Post-Task Quantitative Evaluation (SUS Scale)
List 5 targeted post-task survey questions to calculate the System Usability Scale (SUS) score and identify latent user hesitation.`,
        expectedOutputs: [
          "Complete unmoderated testing script with non-leading user task prompts",
          "Area of Interest (AOI) visual salience benchmark criteria for AI eye-tracking tools",
          "Standardized System Usability Scale (SUS) post-test questionnaire"
        ]
      },
      learning: {
        resources: [
          {
            title: "Maze Official Guide: Usability Testing Metrics & SUS Benchmarks",
            badge: "OFFICIAL DOCS",
            url: "https://maze.co/guides/usability-testing/"
          },
          {
            title: "Attention Insight: Predictive AI Visual Salience Guide",
            badge: "GUIDE",
            url: "https://attentioninsight.com"
          }
        ]
      },
      conceptGuide: {
        title: "Predictive Eye-Tracking and Quantitative UX Validation",
        overview: "For decades, usability testing required renting physical observation labs with infrared eye-tracking cameras, costing thousands of dollars per session. Modern deep-learning algorithms trained on vast repositories of human eye-tracking fixation datasets can now predict with over 90% accuracy where human attention will land during the first 3 to 5 seconds of viewing an interface. By pairing predictive attention algorithms with unmoderated prototype testing, design teams catch visual hierarchy flaws and confusing navigation paths before development starts.",
        keyPoints: [
          {
            lead: "Visual Salience Physics",
            text: "Human foveal vision fixates involuntarily on areas of high contrast, sharp edge density, and human faces; your primary CTA must dominate these features."
          },
          {
            lead: "The Misclick Indicator",
            text: "A misclick rate above 20% on a prototype card indicates users expected an element to be interactive; either make it clickable or strip its visual elevation."
          },
          {
            lead: "Non-Leading Task Scripting",
            text: "Never use the exact words that appear on interface buttons in test prompts; ask users to 'find a way to collaborate' rather than 'click the Invite button'."
          }
        ]
      }
    },

    // Node 11
    {
      id: "step-11",
      stepNumber: 11,
      phaseId: "phase-4",
      title: "WCAG Accessibility, Contrast & Anti-Slop UI Auditing",
      timeEstimate: "1 hr",
      difficulty: "Advanced",
      summary: "Enforce WCAG 2.2 AA/AAA compliance, verify color-blind simulation, keyboard focus rings, and strip generic AI visual clichés (neon glows, excessive gradients).",
      description: "Accessibility is not an afterthought; it is a fundamental legal requirement and engineering quality standard. Furthermore, the flood of AI-generated interfaces has introduced widespread visual 'slop': illegible light gray text, gratuitous glowing gradients, inconsistent 24px border radii, and completely absent keyboard navigation rings. Using automated accessibility auditing suites like Stark, WhoCanUse, and Claude Vision Audits, designers conduct rigorous pre-flight audits to guarantee WCAG 2.2 compliance and strip away generic aesthetic clichés.",
      playbook: {
        setup: "Install the Stark plugin in Figma or Chrome. Export high-resolution screenshots of your full design canvas for automated multimodal inspection.",
        execute: "Run 3 mandatory audits: 1) Contrast Analysis (verify >= 4.5:1 for body text, >= 3:1 for graphical UI components), 2) Color Blindness Simulation (Protane, Deutan, Tritan, and Achromatopsia), and 3) Touch Target Verification (minimum 44x44px for touch targets, 32x32px for desktop pointer targets).",
        verify: "Execute our Anti-Slop UI Checklist: strip all neon box-shadows, replace pure `#000000` with calibrated dark neutrals, ensure all interactive buttons have visible focus rings, and confirm all icon-only buttons include accessible text labels or `aria-label` tags."
      },
      tools: [
        {
          name: "Stark",
          type: "Freemium",
          url: "https://www.getstark.co",
          description: "All-in-one accessibility suite for Figma and browsers, automating contrast checks, focus order mapping, and color blindness simulation.",
          bestFor: "Figma & browser WCAG 2.2 accessibility auditing"
        },
        {
          name: "Claude Vision Audit",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Multimodal AI visual auditor capable of inspecting interface screenshots for anti-slop violations, contrast flaws, and visual inconsistencies.",
          bestFor: "Multimodal heuristic UI critique & slop detection"
        },
        {
          name: "WhoCanUse",
          type: "Free",
          url: "https://whocanuse.com",
          description: "Educational accessibility tool demonstrating how color contrast affects people with different visual impairments and situational conditions.",
          bestFor: "Visual impairment & situational contrast simulation"
        }
      ],
      callouts: {
        mistake: "Relying on color alone to communicate state changes (e.g. changing text from gray to red without adding an error icon or explicit text label).",
        proTip: "Pair every color status with a distinct icon and helper text so color-blind users can understand errors instantly.",
        mistakes: [
          "Using color as the sole indicator of status or error, completely locking out users with red-green color blindness.",
          "Shipping low-contrast muted gray text (`#71717A` on `#18181B`) that fails WCAG AA standards, making reading exhausting.",
          "Allowing generic AI visual tropes (neon drop-shadow glows, uncalibrated gradients, inconsistent border radii) to pollute the interface."
        ],
        proTips: [
          "Audit your interface in monochrome grayscale mode: if you cannot distinguish between an active tab and an inactive tab, your visual hierarchy fails.",
          "Ensure touch targets on mobile viewports are at least 44x44px, even if the visible visual icon is only 16x16px (use transparent padding).",
          "Ensure every interactive element has an explicit, high-contrast `:focus-visible` outline for keyboard-only navigation users."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet (Vision Mode)",
        variables: [
          {
            id: "auditStandard",
            label: "Accessibility Standard",
            options: [
              "WCAG 2.2 Level AA (Legal Standard for SaaS & Web)",
              "WCAG 2.2 Level AAA (Strict Enterprise & Government Tier)",
              "Section 508 / ADA Compliance Focus"
            ],
            defaultOption: "WCAG 2.2 Level AA (Legal Standard for SaaS & Web)"
          },
          {
            id: "screenType",
            label: "Screen Under Audit",
            options: [
              "Dark-Mode Analytics Dashboard & Data Visualizations",
              "Multi-Step Registration & Credit Card Checkout Form",
              "Mobile Settings Screen with Toggle Switches & Sliders"
            ],
            defaultOption: "Dark-Mode Analytics Dashboard & Data Visualizations"
          },
          {
            id: "antiSlopFocus",
            label: "Aesthetic Heuristic Focus",
            options: [
              "Anti-Slop Cleanliness (Zero neon glows, 1px crisp borders, no pitch black)",
              "Information Density & Typography Legibility",
              "Touch Target Geometry & Spacing Calibration"
            ],
            defaultOption: "Anti-Slop Cleanliness (Zero neon glows, 1px crisp borders, no pitch black)"
          }
        ],
        template: `Act as a Staff Accessibility Specialist, Certified CPACC Auditor, and Principal Product Designer. Conduct an exhaustive accessibility and anti-slop design audit for this [screenType] against the [auditStandard] standard.
Special Focus: [antiSlopFocus]

Evaluate the design against this strict checklist:

# 1. WCAG 2.2 Contrast & Readability Audit
- Primary Body Copy to Surface: Exact ratio (Target >= 4.5:1 for AA, >= 7:1 for AAA)
- Secondary Muted Text to Surface: Exact ratio
- Graphical User Interface Components (Borders, Input Outlines, Icons): Target >= 3:1
- Identify any instances where color alone communicates state (e.g. red errors missing warning icons).

# 2. Color Blindness Simulation Analysis
Simulate how this interface performs under:
- Protanopia & Deuteranopia (Red-Green blindness): Are success and error states distinguishable?
- Tritanopia (Blue-Yellow blindness)
- Achromatopsia (Complete color blindness): Does spatial contrast hold up in pure grayscale?

# 3. Touch Target & Focus Order Checklist
- Touch Target Sizes: Are all interactive elements >= 44x44px (or >= 32x32px on desktop)?
- Logical Tab Order: Trace keyboard navigation flow from top-left to bottom-right.
- Focus-Visible Indicator: Is there a distinct, high-contrast focus ring specified?

# 4. Anti-Slop Heuristic Critique
Flag and eliminate any generic AI design tropes:
- [ ] Are there blurry neon drop-shadows under buttons or cards? (Replace with crisp 1px borders)
- [ ] Is pure pitch black (#000000) used for surfaces? (Replace with zinc #13151A)
- [ ] Are corner radii inconsistent? (Enforce universal 6px radius)
- [ ] Is there gratuitous gradient text? (Replace with high-contrast solid text)`,
        expectedOutputs: [
          "Exhaustive contrast ratio table with Pass/Fail ratings against WCAG 2.2 AA/AAA",
          "Color blindness simulation analysis verifying multi-channel state communication",
          "Actionable remediation list eliminating generic AI visual cliches and anti-slop tropes"
        ]
      },
      learning: {
        resources: [
          {
            title: "W3C: Web Content Accessibility Guidelines (WCAG) 2.2 Quick Reference",
            badge: "OFFICIAL DOCS",
            url: "https://www.w3.org/WAI/WCAG22/quickref/"
          },
          {
            title: "Stark Accessibility Suite Official Documentation",
            badge: "GUIDE",
            url: "https://www.getstark.co"
          }
        ]
      },
      conceptGuide: {
        title: "Accessibility as Engineering Discipline and Anti-Slop Hygiene",
        overview: "Digital accessibility is frequently mischaracterized as a checklist for a small minority of disabled users. In reality, accessible design principles—high-contrast typography, predictable focus states, clear spatial hierarchy, and robust keyboard shortcuts—benefit 100% of users, including power users operating with laptops in bright sunlight or keyboard navigators who never touch a mouse. Concurrently, stripping away generic AI 'slop' (neon glows, excessive gradients, unreadable low-contrast grays) restores professionalism, trust, and utilitarian clarity to software.",
        keyPoints: [
          {
            lead: "Multi-Channel State Communication",
            text: "Never rely on color alone to communicate information; always pair color changes with iconography, text labels, or positional shifts."
          },
          {
            lead: "The 44px Touch Target Rule",
            text: "Human fingertips measure approximately 8mm to 10mm; interactive click areas must measure at least 44x44px to prevent frustrating mis-taps."
          },
          {
            lead: "Anti-Slop Craftsmanship",
            text: "Utilitarian software gains trust through crisp 1px borders, calibrated dark neutrals, and understated typography, not decorative neon glows."
          }
        ]
      }
    },

    // Node 12
    {
      id: "step-12",
      stepNumber: 12,
      phaseId: "phase-4",
      title: "Zero-Friction Design-to-Code Handoff (Figma MCP to IDE)",
      timeEstimate: "1 hr",
      difficulty: "Advanced",
      summary: "Connect Figma directly to Cursor, Claude Code, or VS Code via Model Context Protocol (MCP) to transform design tokens and layers into pixel-perfect code in one step.",
      description: "The traditional design-to-code handoff was an agonizing game of telephone: designers wrote 40-page redline specs, and frontend engineers spent days manually eyeballing pixel paddings and writing duplicate CSS. Today, the Model Context Protocol (MCP) connects Figma design canvases directly to AI-native IDEs like Cursor and Claude Code. By querying Figma's live layer tree, typography variables, and Auto-Layout rules through an MCP server, an AI coding assistant can generate production-grade React, Tailwind, and TypeScript components that match the Figma design with 100% pixel fidelity in a single click.",
      playbook: {
        setup: "Enable Figma Dev Mode. Configure an open-source Figma MCP server (such as Framelink Figma Context MCP) inside your Cursor or Claude Code IDE configuration (`~/.cursor/mcp.json`). Provide your Figma personal access token.",
        execute: "Copy the Figma frame link of your finished component. In Cursor Composer or Claude Code, issue an MCP prompt referencing the frame URL: 'Read the Figma design tokens, layer tree, and Auto-Layout rules for this frame, and implement it as a modular React component in `src/components/` using Tailwind CSS.'",
        verify: "Run `npm run dev` and perform an overlay inspection: compare the rendered DOM component side-by-side with the Figma canvas. Verify that padding, typography weights, color tokens, and border radiuses align with zero pixel drift."
      },
      tools: [
        {
          name: "Figma Dev Mode",
          type: "Paid",
          url: "https://www.figma.com/dev-mode/",
          description: "Dedicated workspace for developers in Figma with inspect mode, CSS/Tailwind code generation, component variant exploration, and asset export.",
          bestFor: "Design token inspection & developer layer redlining"
        },
        {
          name: "Framelink Figma MCP",
          type: "Free",
          url: "https://github.com/GLips/Figma-Context-MCP",
          description: "Model Context Protocol server allowing AI coding assistants (Cursor, Claude Code) to query Figma nodes, variables, and vectors directly.",
          bestFor: "Direct Figma-to-Cursor IDE context bridging via MCP"
        },
        {
          name: "Cursor",
          type: "Freemium",
          url: "https://www.cursor.com",
          description: "Leading AI-native code editor featuring Composer multi-file editing, terminal command execution, and native Model Context Protocol integration.",
          bestFor: "AI-assisted design-to-code synthesis & multi-file editing"
        }
      ],
      callouts: {
        mistake: "Exporting raw CSS snippets from Figma without mapping them to your shared design tokens or Tailwind utility classes.",
        proTip: "Tag all Figma layers with semantic HTML names (header, nav, main, article) so the MCP server automatically generates accessible semantic JSX.",
        mistakes: [
          "Allowing engineers to guess styling values instead of inspecting live design tokens in Figma Dev Mode.",
          "Accepting AI-generated code that hardcodes inline hex values instead of utilizing your established Tailwind theme tokens.",
          "Leaving layer names as 'Frame 4281' and 'Group 12' in Figma, causing the MCP server to output unreadable JSX with arbitrary wrapper divs."
        ],
        proTips: [
          "Name Figma frames after semantic HTML tags (e.g. `<header>`, `<aside>`, `<button>`) so AI coding assistants scaffold semantic HTML5 directly.",
          "Feed your project's `tailwind.config.js` into the Cursor MCP context window so the AI maps Figma variables to your exact existing class names.",
          "Conduct a 1-to-1 visual overlay audit in Chrome DevTools using the 'PixelPerfect' extension before approving the pull request."
        ]
      },
      promptLab: {
        recommendedModel: "Cursor Composer / Claude 3.7 Sonnet (via Figma MCP)",
        variables: [
          {
            id: "handoffScope",
            label: "Handoff Target Scope",
            options: [
              "Atomic UI Component (Button, Card, Input with All Variants)",
              "Complete Responsive Page Layout (Desktop + Mobile Collapse)",
              "Multi-View Slide-Over Context Drawer with Form Inputs"
            ],
            defaultOption: "Atomic UI Component (Button, Card, Input with All Variants)"
          },
          {
            id: "codeStack",
            label: "Frontend Code Stack",
            options: [
              "React 19 + Tailwind CSS + Lucide React + TypeScript",
              "Next.js App Router (Server Component + Client Interactivity)",
              "Vue 3 + Tailwind CSS + Script Setup"
            ],
            defaultOption: "React 19 + Tailwind CSS + Lucide React + TypeScript"
          },
          {
            id: "tokenStrategy",
            label: "Design Token Strategy",
            options: [
              "Strict Mapping to Existing tailwind.config.js Tokens",
              "CSS Custom Properties (:root & .dark Variables)",
              "Component-Scoped Props Contract"
            ],
            defaultOption: "Strict Mapping to Existing tailwind.config.js Tokens"
          }
        ],
        template: `Act as a Staff Frontend Engineer and Design Systems Developer. Using the connected Figma MCP server, inspect the provided Figma component frame:
Figma Node URL: [Paste your Figma frame link here]
Handoff Scope: [handoffScope]
Code Stack: [codeStack]
Token Strategy: [tokenStrategy]

Execution Instructions:
1. Query Figma MCP:
   - Extract the node layer tree, Auto-Layout constraints (padding, gap, alignment), and typography styles.
   - Extract all defined component variants (Default, Hover, Active, Focus, Disabled, Loading).
   - Read linked Figma Variables and map them strictly to our project's existing design tokens.

2. Code Generation Rules:
   - Output clean, accessible TypeScript code with a fully typed Props interface.
   - Enforce semantic HTML elements (<button>, <section>, <header>) rather than generic <div> containers.
   - Map 100% of colors, borders, and paddings to our Tailwind classes (e.g., bg-surface, border-subtle, rounded-md).
   - Ensure complete keyboard accessibility: tabIndex={0}, onKeyDown handlers for Enter/Space, and focus-visible rings.

3. Verification Diff:
   - Output a checklist confirming that zero pixel values or hex codes are hardcoded in the JSX.`,
        expectedOutputs: [
          "Complete TypeScript React component code synthesized directly from live Figma MCP data",
          "Clean props interface covering all Figma variant properties",
          "Zero hardcoded hex codes or arbitrary pixel margins in the output JSX"
        ]
      },
      learning: {
        resources: [
          {
            title: "Figma Dev Mode Official Documentation & Guides",
            badge: "OFFICIAL DOCS",
            url: "https://help.figma.com/hc/en-us/sections/1500000000000-Dev-Mode"
          },
          {
            title: "Framelink Figma MCP Server GitHub Repository",
            badge: "GITHUB",
            url: "https://github.com/GLips/Figma-Context-MCP"
          }
        ]
      },
      conceptGuide: {
        title: "The End of the Handoff Chasm: Model Context Protocol",
        overview: "For thirty years, the 'design-to-code handoff' was the most friction-laden phase of digital product development. Designers created static pixel representations in vector tools, and engineers were forced to re-implement those designs from scratch in code, inevitably introducing visual discrepancies and translation bugs. The Model Context Protocol (MCP) bridges this chasm by allowing AI coding agents to inspect the live Figma document object model directly. By translating Auto-Layout parameters into Flexbox/Grid and Figma Variables into design tokens, the handoff process becomes an automated, continuous compilation pipeline.",
        keyPoints: [
          {
            lead: "The Live Semantic Bridge",
            text: "MCP servers query live Figma layers, typography rules, and variable collections directly, eliminating manual redline annotations."
          },
          {
            lead: "Token Parity",
            text: "When Figma variables share identical naming conventions with CSS custom properties or Tailwind tokens, code generation is 100% deterministic."
          },
          {
            lead: "Continuous Design Sync",
            text: "Design updates made in Figma can be re-queried by AI coding assistants in seconds, turning days of design QA into a one-command diff review."
          }
        ]
      }
    }
  ]
};
