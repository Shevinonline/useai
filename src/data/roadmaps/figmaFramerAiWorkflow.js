// Complete production-grade steps data for "Figma & Framer AI Workflow" Roadmap (10 Nodes)

export const figmaFramerAiWorkflowData = {
  id: "figma-framer-ai-workflow",
  title: "Figma & Framer AI Workflow",
  description: "Bridge the gap from interactive Figma prototypes to live, responsive Framer production websites using AI plugins.",
  category: "Tool Mastery Roadmaps",
  stepCount: 10,
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: AI Sitemaps, Wireframes & Figma Auto-Layout Foundations",
      description: "Generate multi-page marketing sitemaps with Relume AI, establish semantic Figma token variables, and build production-grade nested Auto-Layout frames."
    },
    {
      id: "phase-2",
      title: "Phase 2: Figma AI Plugins, Visual Assets & Zero-Friction Transfer",
      description: "Synthesize bespoke visual assets and vector icons with generative AI plugins, audit layer hygiene, and paste responsive sections into Framer without broken geometry."
    },
    {
      id: "phase-3",
      title: "Phase 3: Framer Responsive Breakpoints, Components & CMS",
      description: "Configure fluid flexbox stacks and CSS grid bento layouts across desktop, tablet, and mobile, engineer interactive spring components, and architect dynamic CMS collections."
    },
    {
      id: "phase-4",
      title: "Phase 4: Scroll Animations, AI Localization & Custom Code Overrides",
      description: "Implement physics-based scroll-driven transforms and interactive 3D Spline canvases, translate pages with Framer AI Localization, and write custom React code overrides."
    }
  ],
  steps: [
    // Node 1
    {
      id: "step-1",
      stepNumber: 1,
      phaseId: "phase-1",
      title: "AI Sitemap & Wireframe Generation into Figma",
      timeEstimate: "1.5 hrs",
      difficulty: "Beginner",
      summary: "Generate complete multi-page marketing sitemaps and import unstyled, componentized wireframes directly into Figma in one click.",
      description: "Starting a digital product or marketing site design from a blank canvas leads to decision fatigue, haphazard information architecture, and misaligned stakeholder expectations. Modern design workflows begin with prompt-driven structural ideation. Using AI sitemap engines like Relume Site Builder combined with reasoning LLMs (such as Claude 3.7 Sonnet), designers can input brand positioning, customer ICPs, and core conversion goals to instantly generate a comprehensive, hierarchical sitemap accompanied by section-by-section wireframe specifications.\n\nRelume provides thousands of pre-built, responsive component blocks adhering to atomic design principles. Once the AI sitemap is approved, the official Relume Figma plugin allows direct 1-click clipboard transfer into Figma. Every section—from sticky announcement bars and hero sections to social proof grids and pricing calculators—imports as fully responsive, unstyled Auto-Layout components ready for design system token application.",
      playbook: {
        setup: "Create a Relume workspace (relume.io) and install the official 'Relume - AI Website Builder' plugin in Figma via the Community tab. Prepare your target company's value proposition, ICP persona, and key conversion actions.",
        execute: "Input your prompt into Relume AI Site Builder to generate a multi-page sitemap (Home, Features, Pricing, About, Blog, Contact). Review and edit the AI-generated page outlines. Click 'Generate Wireframe' to populate each section with structural copy and component blocks. In Figma, open the Relume plugin, authorize your workspace, and click 'Import Wireframes to Figma'.",
        verify: "Inspect the imported Figma frames: verify that all frames use native Auto-Layout, layers are neatly named, text layers are editable, and components resize fluidly when adjusting frame widths."
      },
      tools: [
        {
          name: "Relume",
          type: "AI Sitemap & Wireframe Engine",
          url: "https://www.relume.io",
          description: "Prompt-to-sitemap and wireframe builder for Figma and Webflow/Framer with over 1,000 unstyled responsive components.",
          bestFor: "Rapid website architecture, sitemaps & one-click Figma wireframe sync"
        },
        {
          name: "Figma",
          type: "Collaborative Interface Design",
          url: "https://www.figma.com",
          description: "Industry-standard cloud design tool supporting advanced Auto-Layout, variables, component variants, and design systems.",
          bestFor: "UI/UX design, interactive prototyping & design-to-development handoff"
        },
        {
          name: "Claude 3.7 Sonnet",
          type: "Reasoning LLM",
          url: "https://www.anthropic.com/claude",
          description: "Advanced AI model used to draft conversion-driven value propositions, feature hierarchies, and customer objection matrices.",
          bestFor: "Marketing strategy, copywriting & information architecture planning"
        }
      ],
      callouts: {
        mistake: "Jumping straight into high-fidelity colors, typography, and illustration before validating the structural information hierarchy and conversion flow with unstyled wireframes.",
        proTip: "Generate 2 to 3 alternative sitemap structures in Relume and use Claude 3.7 to stress-test user friction points before importing sections into Figma.",
        mistakes: [
          "Importing wireframes as static flattened vectors or grouped shapes instead of native Auto-Layout frames.",
          "Accepting generic placeholder marketing copy from AI without customizing value props for the specific niche ICP.",
          "Overcrowding the initial homepage with 15+ sections, diluting the primary call-to-action (CTA) conversion rate."
        ],
        proTips: [
          "Lock in standard 12-column layout grids (1200px or 1440px desktop container with 24px gutter) in Figma right after import.",
          "Use Relume's Style Guide sync to map wireframe placeholder tags directly to your team's existing UI library.",
          "Group related page sections into distinct Figma canvas pages ('01 Sitemaps', '02 Wireframes', '03 Production UI') for clean project navigation."
        ]
      },
      promptLab: {
        title: "Relume & Claude AI Marketing Website Sitemap Architect",
        description: "Generate a strategic sitemap and section-by-section wireframe prompt tailored to high-conversion SaaS and digital product launches.",
        variables: [
          {
            name: "Product Niche",
            label: "Product Category",
            options: ["Developer AI Coding Assistant", "B2B Sales Automation CRM", "Consumer FinTech Wealth App"],
            default: "Developer AI Coding Assistant"
          },
          {
            name: "Target Audience",
            label: "Ideal Customer Profile",
            options: ["Senior Software Engineers & Engineering Managers", "Growth Marketers & Sales Leaders", "Gen-Z & Millennial First-Time Investors"],
            default: "Senior Software Engineers & Engineering Managers"
          },
          {
            name: "Primary Conversion Goal",
            label: "Core Conversion CTA",
            options: ["Start Free 14-Day Pro Trial (Self-Serve)", "Schedule Enterprise Demo (Sales-Assisted)", "Install Open-Source CLI / VS Code Extension"],
            default: "Install Open-Source CLI / VS Code Extension"
          }
        ],
        template: `# High-Conversion Website Sitemap & Wireframe Blueprint
Product: [Product Niche]
Audience: [Target Audience]
Primary Conversion Goal: [Primary Conversion Goal]

Act as a Principal Conversion Rate Optimization (CRO) Architect and UX Designer.
Generate a structured sitemap and wireframe blueprint for Relume AI / Figma:
1. Multi-Page Sitemap Architecture: Outline essential pages (Homepage, Feature Deep-Dives, Pricing, Enterprise, Docs).
2. Homepage Section Blueprint: Provide 7 to 9 sequenced sections with exact component types (Hero, Social Proof, Interactive Bento Grid, Feature Tabs, Testimonial Carousel, Pricing Calculator, FAQ Accordion, Final CTA Banner).
3. Value Proposition & Copy Angles: Draft high-impact H1 headlines, sub-headlines, and CTA button labels that eliminate cognitive friction.
4. Export Directives: Output formatted markdown ready to paste directly into Relume Site Builder prompt input.`,
        expectedOutput: `### Strategic Sitemap & Homepage Wireframe Specification

#### 1. Information Architecture (Sitemap)
- **Homepage** (\`/\`): Core positioning, interactive terminal demo, social proof, ROI calculator.
- **Features** (\`/features\`): Deep dive into Local Inference, Autonomous Debugging, and Enterprise VPC.
- **Pricing** (\`/pricing\`): Transparent Free vs. Pro vs. Enterprise matrix with seat billing.
- **Documentation** (\`/docs\`): Quickstart CLI guide, API reference, and editor extensions.

#### 2. Homepage Section Sequencing (Relume Block Mapping)
1. **Sticky Header**: Logo, Nav Links (Features, Docs, Pricing, Changelog), GitHub Stars Pill, CTA: "Install Extension".
2. **Hero (Header 1)**: Split-screen layout. Left: Crisp H1 ("Code at the Speed of Thought with Autonomous Agent Loops"), Subhead, Terminal Install Command Pill (\`curl -fsSL https://get.useai.sh | bash\`). Right: Interactive IDE mockup.
3. **Logo Cloud (Social Proof)**: Monochromatic client logos from Fortune 500 engineering orgs.
4. **Bento Grid (Feature 10)**: 4-card asymmetric layout showcasing Speed, Security, Offline LLMs, and Git diff generation.
5. **Interactive Tabs (Feature 3)**: Tabbed code comparisons between manual refactoring vs. AI-generated pull requests.
6. **Metrics Counter**: Stat boxes (3.2x faster reviews, 99.4% syntax accuracy, 400k+ active developers).
7. **FAQ Accordion**: 6 collapsible items addressing telemetry, enterprise IP security, and pricing.
8. **Final CTA (Banner 2)**: Dark mode gradient container with secondary link to Discord Community.`
      },
      conceptGuide: {
        title: "Atomic Wireframing & Structural Information Architecture",
        overview: "Modern digital product design decouples layout architecture from aesthetic skinning. By utilizing unstyled wireframe components organized into atomic design systems, teams can iterate on copy flow, reading rhythm, and conversion psychology without getting bogged down by color palettes or typeface pairing disputes. Tools like Relume translate user intent into standardized component blocks with predictable padding and typographic scales, allowing seamless migration into Figma Auto-Layout containers.",
        keyPoints: [
          "**Content-First Wireframing:** Validating user journeys and messaging hierarchy before applying brand styling prevents costly layout redesigns.",
          "**Atomic Component Modularization:** Structuring sections into reusable atomic primitives ensures consistent spacing and layout rhythm across all pages.",
          "**Lossless Figma Ingestion:** Importing via native Auto-Layout plugins guarantees that all layers behave like modern CSS flexbox containers from day one."
        ]
      },
      learning: {
        resources: [
          {
            title: "Relume AI Site Builder Official Documentation",
            url: "https://library.relume.io/docs",
            type: "Official Docs"
          },
          {
            title: "Figma Learn: Auto-Layout Best Practices & Properties",
            url: "https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties",
            type: "Official Docs"
          },
          {
            title: "Relume Figma Plugin & Component Sync Guide",
            url: "https://www.relume.io/figma-plugin",
            type: "Official Guide"
          },
          {
            title: "Nielsen Norman Group: Information Architecture Essentials",
            url: "https://www.nngroup.com/articles/information-architecture-study-guide/",
            type: "UX Industry Standard"
          }
        ]
      }
    },

    // Node 2
    {
      id: "step-2",
      stepNumber: 2,
      phaseId: "phase-1",
      title: "Figma Variables, Typography Scales & Theme Tokens",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Set up semantic color, spacing, and typography variables that support instant Light/Dark mode switching across all frames.",
      description: "Hardcoded hex colors and arbitrary pixel margins are the primary cause of design debt and broken production handoffs. Figma Variables represent a monumental evolution in design system architecture, enabling teams to define design tokens directly inside Figma with multi-mode capabilities. By structuring tokens into three distinct tiers—Primitive Tokens (e.g., `slate-900`, `blue-500`), Semantic Tokens (e.g., `bg-surface-primary`, `text-interactive-default`), and Component Tokens (e.g., `btn-primary-bg`)—designers create mathematically sound, scalable design systems.\n\nFurthermore, variable modes allow instant toggle between Light and Dark themes, compact and spacious density scales, or brand theming with a single click. When combined with modular typography scales generated from fluid type formulas and premium open-source foundries like Fontshare, designs remain accessible, legible, and directly mappable to modern CSS custom properties and Framer theme palettes.",
      playbook: {
        setup: "Open your Figma project. Navigate to the right-hand sidebar and open the 'Local Variables' dialog. Select modern typefaces from Fontshare (e.g., Satoshi, General Sans, or Cabinet Grotesk) and install them locally.",
        execute: "Create two Variable Collections: 'Primitives' and 'Semantic Tokens'. In 'Primitives', define raw color scales (Slate, Emerald, Indigo, Amber, Rose across 50–950 stops) and raw spacing scales (2, 4, 8, 12, 16, 24, 32, 48, 64, 96px). In 'Semantic Tokens', create modes for 'Light' and 'Dark'. Alias semantic tokens like `bg-primary`, `bg-surface`, `border-subtle`, and `text-heading` to their respective primitive values. Bind these variables to wireframe frames and test mode switching on parent containers.",
        verify: "Select a parent canvas frame, switch its Mode in the layer panel from 'Light' to 'Dark', and confirm that all nested cards, borders, text labels, and buttons invert seamlessly without unlinked hex colors or illegible contrast."
      },
      tools: [
        {
          name: "Figma Variables",
          type: "Design Token Engine",
          url: "https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma",
          description: "Native token architecture in Figma supporting color, number, string, and boolean variables with multi-mode theming.",
          bestFor: "Design token architecture, multi-mode themes (Light/Dark) & dynamic prototyping"
        },
        {
          name: "Fontshare",
          type: "Professional Open-Source Type",
          url: "https://www.fontshare.com",
          description: "Free typography foundry providing high-grade commercial typefaces curated for modern SaaS and developer interfaces.",
          bestFor: "Editorial typography, modern display headers & geometric body fonts"
        },
        {
          name: "Coolors",
          type: "Color Palette & Contrast Checker",
          url: "https://coolors.co",
          description: "Palette generator and WCAG 2.1 compliance validator for checking color contrast ratios across dark and light modes.",
          bestFor: "Accessible color scales, contrast auditing & harmonious palette generation"
        }
      ],
      callouts: {
        mistake: "Binding raw primitive colors (like `slate-900`) directly to text and card backgrounds instead of referencing semantic aliases (like `bg-surface` or `text-primary`), making Dark Mode switching impossible.",
        proTip: "Use number variables for spacing (`space-xs: 4px`, `space-sm: 8px`, `space-md: 16px`, `space-lg: 24px`) and corner radius (`radius-sm: 6px`, `radius-md: 10px`, `radius-full: 9999px`) to eliminate pixel discrepancies during Framer export.",
        mistakes: [
          "Creating dozens of redundant unlinked text styles with arbitrary line heights rather than establishing a modular 1.25 or 1.33 typographic scale.",
          "Overlooking WCAG AA color contrast requirements (minimum 4.5:1 for normal text, 3:1 for large text) in dark mode surfaces.",
          "Mixing RGB, HSL, and Hex values across teams without standardizing on a single color token taxonomy."
        ],
        proTips: [
          "Press `Shift + V` to quickly inspect and assign variables to selected fills, strokes, or padding fields.",
          "Structure typography with fixed line-height percentages (e.g., 120% for display headers, 150% for body prose) to prevent cross-browser text clipping.",
          "Install the 'Figma Token Studio' plugin if your team requires automated bidirectional Git synchronization of token JSON files."
        ]
      },
      promptLab: {
        title: "Design Token & Typography System Generator",
        description: "Generate a production-grade 3-tier token specification including primitive hex values, semantic dark/light aliases, and a fluid typographic scale.",
        variables: [
          {
            name: "Brand Archetype",
            label: "Visual Tone & Aesthetic",
            options: ["Cyberpunk Dark Terminal (Developer Tools)", "Minimalist Monochrome & Slate (FinTech SaaS)", "Vibrant Electric Indigo (Creator Studio)"],
            default: "Cyberpunk Dark Terminal (Developer Tools)"
          },
          {
            name: "Primary Typography Pair",
            label: "Font Combination",
            options: ["Geist Mono (Headers) + Inter (Body)", "General Sans (Headers) + Satoshi (Body)", "Cabinet Grotesk (Display) + Plus Jakarta Sans (Body)"],
            default: "Geist Mono (Headers) + Inter (Body)"
          },
          {
            name: "Density Scale",
            label: "UI Density",
            options: ["Compact / Data-Dense (8px base)", "Comfortable SaaS (16px base)", "Editorial Spacious (24px base)"],
            default: "Compact / Data-Dense (8px base)"
          }
        ],
        template: `# Enterprise Design Token Architecture Specification
Aesthetic: [Brand Archetype]
Typography: [Primary Typography Pair]
Spacing Density: [Density Scale]

Act as a Principal Design Systems Engineer. Generate a comprehensive token definition file for Figma Variables & CSS:
1. Color Primitives: Slate/Neutral (50-950), Primary Brand Accent, Accent Secondary, Success, Warning, Error.
2. Semantic Token Aliases: Define Light Mode and Dark Mode values for:
   - \`bg-canvas\`, \`bg-surface\`, \`bg-surface-elevated\`, \`bg-interactive\`
   - \`text-primary\`, \`text-secondary\`, \`text-muted\`, \`text-inverse\`
   - \`border-subtle\`, \`border-strong\`, \`border-interactive\`
3. Spacing & Radius Tokens: Number variables based on an 8-point harmonic grid.
4. Typography Scale: Display 1, H1, H2, H3, Body Large, Body Regular, Caption, Code with exact sizes, line-heights, and letter-spacing.`,
        expectedOutput: `### Production Design Token Hierarchy

#### 1. Color Primitives (Slate & Emerald Accent)
\`\`\`yaml
primitives:
  slate:
    50: "#F8FAFC"
    100: "#F1F5F9"
    200: "#E2E8F0"
    400: "#94A3B8"
    700: "#334155"
    800: "#1E293B"
    900: "#0F172A"
    950: "#020617"
  brand-emerald:
    400: "#34D399"
    500: "#10B981"
    600: "#059669"
\`\`\`

#### 2. Semantic Token Mapping (Modes: Light vs. Dark)
| Semantic Token | Light Mode Value | Dark Mode Value |
| :--- | :--- | :--- |
| \`bg-canvas\` | \`slate.50\` (\`#F8FAFC\`) | \`slate.950\` (\`#020617\`) |
| \`bg-surface\` | \`#FFFFFF\` | \`slate.900\` (\`#0F172A\`) |
| \`bg-surface-elevated\` | \`slate.100\` (\`#F1F5F9\`) | \`slate.800\` (\`#1E293B\`) |
| \`text-primary\` | \`slate.900\` (\`#0F172A\`) | \`slate.50\` (\`#F8FAFC\`) |
| \`text-muted\` | \`slate.400\` (\`#94A3B8\`) | \`slate.400\` (\`#94A3B8\`) |
| \`border-subtle\` | \`slate.200\` (\`#E2E8F0\`) | \`rgba(255, 255, 255, 0.08)\` |
| \`brand-accent\` | \`brand-emerald.600\` | \`brand-emerald.400\` |

#### 3. Typography Scale (Base 16px, Modular Ratio 1.25)
- **Display 1**: 48px / Line Height: 56px / Letter Spacing: -0.02em / Weight: 700 (Geist)
- **H1**: 36px / Line Height: 44px / Letter Spacing: -0.015em / Weight: 600
- **H2**: 28px / Line Height: 36px / Letter Spacing: -0.01em / Weight: 600
- **H3**: 22px / Line Height: 28px / Letter Spacing: 0em / Weight: 600
- **Body Large**: 18px / Line Height: 28px / Letter Spacing: 0em / Weight: 400 (Inter)
- **Body Regular**: 15px / Line Height: 24px / Letter Spacing: 0em / Weight: 400
- **Caption / Mono**: 13px / Line Height: 18px / Letter Spacing: 0.01em / Weight: 500`
      },
      conceptGuide: {
        title: "Three-Tier Design Tokens & Variable Modes",
        overview: "Design tokens are the foundational contract between design files and production codebases. In legacy workflows, updating a brand color or shipping dark mode required hundreds of manual layer edits. With Figma Variables and CSS Custom Properties, tokens are structured in a three-tier abstraction hierarchy. Raw primitives represent absolute values, semantic tokens describe their contextual UI purpose, and component tokens isolate specific element styling. This allows single-click theme transformations across entire multi-page applications.",
        keyPoints: [
          "**Semantic Decoupling:** Naming variables by their function (`bg-surface-muted`) rather than appearance (`grey-200`) ensures dark mode inversions remain logical.",
          "**Variable Modes:** Modes enable one design frame to instantly reflect Light, Dark, or multi-brand themes without duplicating layers.",
          "**CSS Custom Property Alignment:** Figma token naming matches 1:1 with CSS variables (`var(--bg-surface)`), making developer handoff painless."
        ]
      },
      learning: {
        resources: [
          {
            title: "Figma Official Guide to Design Variables & Modes",
            url: "https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma",
            type: "Official Docs"
          },
          {
            title: "Fontshare: Curated Open-Source Fonts for Web & UI",
            url: "https://www.fontshare.com",
            type: "Official Resource"
          },
          {
            title: "W3C Design Tokens Community Group Specification",
            url: "https://design-tokens.github.io/community-group/format/",
            type: "W3C Standard"
          },
          {
            title: "Web.dev: Building a Color Scheme with CSS & Tokens",
            url: "https://web.dev/articles/building-a-color-scheme",
            type: "Best Practice"
          }
        ]
      }
    },

    // Node 3
    {
      id: "step-3",
      stepNumber: 3,
      phaseId: "phase-1",
      title: "Mastering Nested Auto-Layout & Responsive Constraints",
      timeEstimate: "2.5 hrs",
      difficulty: "Intermediate",
      summary: "Structure clean, flexbox-equivalent frames with Fill Container and Hug Contents rules so layers transfer into Framer without breaking.",
      description: "Auto-Layout is the single most critical bridge between Figma design files and live web code. Modern web browsers render layouts using CSS Flexbox and CSS Grid. When designers rely on freeform dragging, manual pixel positioning, and arbitrary groups, the design cannot be translated into responsive code without an engineer completely rebuilding it from scratch.\n\nMastering nested Auto-Layout means designing strictly with flexbox principles: every card, navbar, and grid cell must be a frame with explicitly configured direction (horizontal/vertical), alignment, gap, padding, and resizing behavior. Understanding the nuanced distinction between `Fixed` (rigid pixels), `Hug Contents` (`fit-content`), and `Fill Container` (`flex-grow: 1` or `width: 100%`) ensures that when you resize a screen from 1440px desktop down to 390px mobile, every element wraps, compresses, or stretches naturally. Combining this with Figma AI layer renaming keeps the DOM clean and ready for Framer ingestion.",
      playbook: {
        setup: "Select an unformatted card or hero section in Figma. Ensure all child elements are individual layers or nested frames (no raw groups with `Cmd + G`).",
        execute: "Apply Auto-Layout to the deepest child elements first (e.g., an icon and a text label) using `Shift + A`. Set their direction to Horizontal, gap to 8px, and vertical alignment to Center. Wrap the button into a card frame (`Shift + A`). Set the card's horizontal resizing to `Fill Container` and vertical resizing to `Hug Contents`. Set interior padding to 24px. Ensure text layers inside the card have horizontal resizing set to `Fill Container` so text wraps automatically instead of clipping.",
        verify: "Click and drag the parent frame's width boundary from 1200px down to 320px. Verify that all nested cards reflow, text wraps to multiple lines, buttons retain fixed padding, and no elements overflow or display red error bounds."
      },
      tools: [
        {
          name: "Figma Auto-Layout",
          type: "CSS Flexbox Layout Engine",
          url: "https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties",
          description: "Core layout mechanism in Figma mirroring CSS Flexbox with gap, wrap, padding, alignment, and absolute positioning rules.",
          bestFor: "Responsive UI frames, fluid component libraries & automated reflow"
        },
        {
          name: "Figma AI Layer Renaming",
          type: "Automated Layer Organization",
          url: "https://help.figma.com/hc/en-us/articles/23954854585879-Use-AI-tools-in-Figma",
          description: "Native AI feature that analyzes visual frame semantics and renames 'Frame 10842' to descriptive semantic tags like 'Card / Hero / Primary'.",
          bestFor: "Layer hygiene, semantic naming & clean DOM code generation"
        },
        {
          name: "shadcn/ui Figma Kit",
          type: "Accessible Component Library",
          url: "https://www.figma.com/community/file/1203061493325924774/shadcn-ui",
          description: "Production-accurate community kit providing Auto-Layout components aligned with Tailwind CSS primitives.",
          bestFor: "Reference architectures, accessible states & production handoff"
        }
      ],
      callouts: {
        mistake: "Setting text layers inside an Auto-Layout frame to 'Fixed Width' or 'Hug Contents' instead of 'Fill Container', causing text to either clip horizontally or cause parent cards to blow past screen margins.",
        proTip: "Use `Min Width` and `Max Width` constraints (e.g. `min-width: 320px`, `max-width: 1200px`) directly on parent Auto-Layout frames to lock in fluid boundaries before exporting to Framer.",
        mistakes: [
          "Using Figma Groups (`Cmd + G`) instead of Auto-Layout Frames (`Shift + A`), which collapses responsive constraints upon Framer import.",
          "Nesting more than 6 unnecessary Auto-Layout wrapper frames, creating bloated DOM hierarchies and confusing CSS flex stacks.",
          "Failing to toggle 'Wrap' on horizontal badge and tag lists, causing them to clip offscreen on tablet viewports."
        ],
        proTips: [
          "Use the keyboard shortcut `Shift + Option + A` to remove Auto-Layout if you need to restructure nested frames.",
          "Leverage absolute positioning inside Auto-Layout frames for floating badges, notification dots, or background blur orbs without breaking the flex flow.",
          "Run the native Figma AI 'Rename Layers' tool on your entire page canvas prior to export to replace generic IDs with semantic names like 'Navbar / Container'."
        ]
      },
      promptLab: {
        title: "Auto-Layout & CSS Flexbox Hierarchy Planner",
        description: "Transform complex visual section designs into a precise nested Auto-Layout specification with explicit direction, gap, and sizing rules.",
        variables: [
          {
            name: "Component Layout",
            label: "UI Pattern",
            options: ["3-Tier Pricing Table with Feature Matrix", "Bento Grid with Asymmetric Cards (2x2)", "Hero Section with Video Embed & Form"],
            default: "3-Tier Pricing Table with Feature Matrix"
          },
          {
            name: "Responsive Rule",
            label: "Reflow Behavior",
            options: ["Horizontal Stack on Desktop -> Vertical Stack on Mobile", "CSS Grid 3-Column -> 1-Column Wrap", "Sticky Sidebar with Fluid Content Pane"],
            default: "Horizontal Stack on Desktop -> Vertical Stack on Mobile"
          },
          {
            name: "Spacing Standard",
            label: "Padding / Gap Token",
            options: ["Compact (16px gap / 20px padding)", "Standard (24px gap / 32px padding)", "Spacious (32px gap / 48px padding)"],
            default: "Standard (24px gap / 32px padding)"
          }
        ],
        template: `# Auto-Layout & Flexbox Hierarchy Architect
Target Component: [Component Layout]
Responsive Adaptation: [Responsive Rule]
Spacing Configuration: [Spacing Standard]

Act as a Principal Design Systems Architect.
Provide the exact nested Auto-Layout blueprint to construct this component in Figma:
1. Frame Hierarchy: List every layer from root container down to child atoms with semantic names.
2. Property Settings per Frame:
   - Direction: (Horizontal / Vertical / Wrap)
   - Resizing: (Horizontal: Fill/Hug/Fixed, Vertical: Fill/Hug/Fixed)
   - Padding & Gap values (in px)
   - Alignment: (Top-Left, Center, Space Between)
3. Responsive Stress-Test: Explain how the layout behaves when resized between 1440px and 375px.`,
        expectedOutput: `### Auto-Layout Frame Hierarchy: 3-Tier Pricing Table

#### 1. Frame Hierarchy & Properties
\`\`\`
[Frame] Section / Pricing (Root Container)
├── Direction: Vertical
├── Horizontal Resizing: Fill Container (Max Width: 1200px)
├── Vertical Resizing: Hug Contents
├── Padding: Top/Bottom 96px, Left/Right 24px
├── Gap: 48px, Alignment: Top-Center
│
├── [Frame] Header / Group
│   ├── Direction: Vertical, Gap: 16px, Alignment: Center
│   ├── [Text] Eyebrow Badge: "FLEXIBLE PLANS" (Hug / Hug)
│   ├── [Text] H2 Title: "Predictable Pricing for High-Growth Teams" (Fill / Hug)
│   └── [Text] Subhead: "Cancel anytime with no lock-in contracts." (Fill / Hug)
│
└── [Frame] Grid / Pricing Cards (Wrapper)
    ├── Direction: Horizontal (Wrap: Enabled)
    ├── Horizontal Resizing: Fill Container
    ├── Vertical Resizing: Hug Contents
    ├── Gap: 24px, Alignment: Stretch
    │
    ├── [Frame] Card / Starter (Repeat for Pro & Enterprise)
    │   ├── Direction: Vertical
    │   ├── Horizontal Resizing: Fill Container (Min: 320px)
    │   ├── Vertical Resizing: Hug Contents
    │   ├── Padding: 32px all sides, Gap: 24px
    │   ├── Fill: bg-surface, Stroke: border-subtle, Radius: 16px
    │   │
    │   ├── [Frame] Card / Top
    │   │   ├── Direction: Vertical, Gap: 8px
    │   │   ├── [Text] Tier Name: "Pro Agent" (Fill / Hug)
    │   │   └── [Frame] Price Container (Horizontal, Gap: 4px, Bottom-Align)
    │   │       ├── [Text] Currency: "$" (Hug / Hug)
    │   │       ├── [Text] Amount: "49" (Hug / Hug, 40px Bold)
    │   │       └── [Text] Period: "/ month" (Hug / Hug, Muted)
    │   │
    │   ├── [Frame] Feature / List (Vertical, Gap: 12px, Fill / Hug)
    │   │   └── [Frame] Item (Horizontal, Gap: 8px, Center-Align)
    │   │       ├── [Vector] Checkmark Icon (Fixed 16x16px)
    │   │       └── [Text] Feature Label (Fill / Hug)
    │   │
    │   └── [Button] Primary CTA (Fill / 48px Fixed, Center-Align)
\`\`\`

#### 2. Responsive Reflow Verification
- **Desktop (1200px+)**: The 3 cards sit side-by-side in a 3-column row, stretching equally via \`Fill Container\`.
- **Tablet (768px - 1024px)**: Wrap causes the 3rd card to flow to the second row or occupy full width smoothly.
- **Mobile (375px)**: Each card hits its \`min-width: 320px\` constraint and stacks vertically into a single column.`
      },
      conceptGuide: {
        title: "CSS Flexbox Parity with Figma Auto-Layout",
        overview: "Figma's Auto-Layout engine is a direct visual implementation of the W3C CSS Flexible Box Layout module. In traditional design tools, elements were placed with absolute XY coordinates. When translated to code, developers had to reconstruct fluid margins, flex wraps, and text bounding boxes. Auto-Layout enforces strict structural discipline during the design phase: frames dictate the spatial relationship between children, ensuring that components stretch, wrap, and maintain proportional padding identically in both Figma and browser DOM environments.",
        keyPoints: [
          "**Flex Direction & Gap:** Directly maps to `flex-direction: row | column` and the CSS `gap` property for unified spacing.",
          "**Fill Container Resizing:** Corresponds to `flex-grow: 1` and `width: 100%`, allowing child elements to adapt to variable browser viewports.",
          "**Min/Max Constraints:** Native min/max width and height properties prevent elements from breaking layout boundaries on ultra-wide monitors or small mobile screens."
        ]
      },
      learning: {
        resources: [
          {
            title: "Figma Learn: Auto-Layout Comprehensive Deep Dive",
            url: "https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties",
            type: "Official Docs"
          },
          {
            title: "MDN Web Docs: CSS Flexible Box Layout Guide",
            url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox",
            type: "Web Standard"
          },
          {
            title: "Figma Community: Responsive Auto-Layout Playground",
            url: "https://www.figma.com/community/file/784448220678228461/auto-layout-playground",
            type: "Tutorial File"
          },
          {
            title: "CSS-Tricks: A Complete Guide to Flexbox",
            url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
            type: "Industry Guide"
          }
        ]
      }
    },

    // Node 4
    {
      id: "step-4",
      stepNumber: 4,
      phaseId: "phase-2",
      title: "Generative Visual Assets, Custom Icons & Copy Inside Figma",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Populate cards and hero sections with bespoke 3D illustrations, crisp SVG icons, and conversion-focused micro-copy instead of Lorem Ipsum.",
      description: "Low-quality stock photography, mismatched icon sets, and Latin placeholder text ('Lorem Ipsum') instantly degrade user trust and misrepresent design feasibility. When stakeholders evaluate a prototype filled with generic dummy content, they cannot assess real visual balance or text wrapping dynamics. Modern designers leverage native AI plugins directly inside Figma to generate production-ready imagery, vector assets, and contextual copywriting.\n\nUsing AI plugins such as Recraft AI (for clean, layered SVG vector illustrations and consistent icon sets), Midjourney (for photorealistic hero renders with alpha transparencies), and Magician or Writer plugins (for conversion-optimized headlines and micro-copy), designers can produce bespoke assets that match the exact color tokens and aesthetic archetype of their application. Crucially, generating assets natively as editable vector paths ensures microscopic file sizes and razor-sharp rendering on high-DPI displays.",
      playbook: {
        setup: "Install the 'Recraft', 'Magician for Figma', and 'Iconify' plugins from the Figma Community. Prepare a color moodboard and your primary brand accent hex codes.",
        execute: "Open the Recraft plugin in Figma. Select 'Vector Illustration' or 'Icon Set', select your design system's primary and secondary brand colors as the palette constraint, and prompt for tailored graphics (e.g. 'Isometric futuristic server stack with glowing cyan fiber optic cables, clean vector style'). Insert the generated SVG directly into your hero container. Select text layers and run Magician AI to generate authentic feature titles and descriptions tailored to your target persona.",
        verify: "Inspect the generated graphic: verify it is a clean, multi-layered SVG vector (not a rasterized PNG), ungroup extraneous paths, and confirm that all SVG fill colors use your Figma design system color variables."
      },
      tools: [
        {
          name: "Midjourney",
          type: "Generative Image Engine",
          url: "https://www.midjourney.com",
          description: "State-of-the-art generative image engine for producing 3D glassmorphic elements, futuristic device mockups, and high-res hero visuals.",
          bestFor: "High-resolution hero visuals, 3D textures & abstract background graphics"
        },
        {
          name: "Recraft SVG",
          type: "Generative Vector & Icon Studio",
          url: "https://www.recraft.ai",
          description: "Generative design tool that produces clean, scalable SVG vector art, 3D icons, and complete vector sets matching custom color palettes.",
          bestFor: "Bespoke SVG icons, flat vector illustrations & brand asset generation"
        },
        {
          name: "Magician for Figma",
          type: "AI Copilot for Figma",
          url: "https://magician.design",
          description: "Figma plugin powered by AI that generates contextual copywriting, unique vector icons, and custom imagery from text prompts.",
          bestFor: "In-canvas UX copywriting, contextual micro-copy & icon generation"
        }
      ],
      callouts: {
        mistake: "Exporting raster PNG or JPEG graphics with baked-in dark backgrounds instead of transparent SVGs, resulting in fuzzy visual artifacts when imported into Framer dark mode themes.",
        proTip: "In Recraft, always lock your brand palette variables as strict palette constraints so generated vectors automatically harmonize with your UI.",
        mistakes: [
          "Leaving Lorem Ipsum in cards, causing designers to miss edge-case text wrapping failures when real headlines require three lines instead of one.",
          "Using multiple icon packs with mismatched stroke weights (e.g. 1.5px mixed with 2px filled icons), breaking visual consistency.",
          "Importing massive 10MB uncompressed Midjourney PNGs into Figma canvases, causing canvas memory crashes and sluggish panning."
        ],
        proTips: [
          "Convert all raster hero assets to modern WebP or AVIF formats before importing into Framer to protect Largest Contentful Paint (LCP) scores.",
          "Standardize all UI icons into 24x24px Auto-Layout bounding box component frames with 2px stroke and 'Scale' constraints.",
          "Use Claude 3.7 to generate realistic tabular mock data (customer names, token counts, timestamps) in JSON and import via the Google Sheets Sync plugin."
        ]
      },
      promptLab: {
        title: "Generative Vector & UI Asset Art Direction Prompts",
        description: "Generate copy-ready prompts for Recraft SVG, Midjourney v6, and Figma copy generators to produce consistent visual design assets.",
        variables: [
          {
            name: "Asset Style",
            label: "Visual Art Direction",
            options: ["Claymorphic 3D Minimalist (Soft Shadows)", "Bento Isometric Cyberpunk (Glass & Neon)", "Clean Line-Art Duotone Vectors"],
            default: "Bento Isometric Cyberpunk (Glass & Neon)"
          },
          {
            name: "Core Subject",
            label: "Asset Subject Matter",
            options: ["Autonomous AI Agent Neural Network Core", "Cloud Database Storage with pgvector Lock", "Realtime Financial Analytics Candlestick Chart"],
            default: "Autonomous AI Agent Neural Network Core"
          },
          {
            name: "Color Constraint",
            label: "Palette Accents",
            options: ["Deep Slate #0F172A + Emerald #10B981", "Midnight Navy #0A0F1D + Electric Cyan #06B6D4", "Matte Charcoal #18181B + Violet #8B5CF6"],
            default: "Deep Slate #0F172A + Emerald #10B981"
          }
        ],
        template: `# Generative Visual Asset Art Direction Specification
Style: [Asset Style]
Subject: [Core Subject]
Color Accents: [Color Constraint]

Generate three production-grade generative prompts:
1. Recraft SVG Vector Prompt: Prompt designed for Recraft.ai to generate clean, scalable SVG vector elements with transparent backgrounds and strict color bounds.
2. Midjourney v6 Hero Render Prompt: Photorealistic 3D render prompt with exact camera settings, aspect ratio (--ar 16:9), stylize (--s 250), and transparency.
3. UX Micro-Copy Suite: 3 concise, conversion-focused feature card titles, subheadings, and interactive button CTA labels.`,
        expectedOutput: `### Generative Art Direction Prompts

#### 1. Recraft.ai Vector SVG Prompt
\`\`\`
Isometric [Core Subject], clean vector art style, [Asset Style], transparent background, crisp geometry, minimal anchor points, 2-point perspective, restricted color palette of [Color Constraint], no gradients, SVG ready, professional SaaS icon --style vector
\`\`\`

#### 2. Midjourney v6 Hero Graphic Prompt
\`\`\`
Ultra-detailed 3D render of [Core Subject], futuristic glassmorphism, floating holographic interface elements, glowing fiber optics in [Color Constraint], volumetric cinematic studio lighting, Octane render, raytracing, soft ambient occlusion, isolated on pure black background, 8k resolution, minimalist modern tech aesthetic --ar 16:9 --v 6.1 --s 250 --style raw
\`\`\`

#### 3. UX Micro-Copy Suite (Contextual UI Replacement for Dummy Text)
- **Feature Card 1**:
  - *Title*: "Sub-Millisecond Vector Lookup"
  - *Description*: "Query high-dimensional HNSW vector embeddings across millions of customer documents with sub-10ms latency."
  - *CTA*: "Explore Benchmark Data →"
- **Feature Card 2**:
  - *Title*: "Zero-Leak Tenant Isolation"
  - *Description*: "PostgreSQL Row-Level Security ensures enterprise customer data remains strictly partitioned at the kernel layer."
  - *CTA*: "View Security Whitepaper →"`
      },
      conceptGuide: {
        title: "Vector Scalability & Generative Asset Hygiene",
        overview: "Digital products demand visual assets that look pristine on every screen density—from budget mobile viewports to 5K Retina desktop monitors. Raster graphics (JPEG/PNG) suffer from fixed pixel resolutions, causing visual blurriness or massive file bloat when scaled. Vector graphics (SVG) store mathematical instructions (paths, curves, strokes) that re-render dynamically at any dimension with negligible file size. Utilizing AI vector generators ensures assets maintain structural layer independence, enabling designers to bind brand color variables directly to vector paths.",
        keyPoints: [
          "**Resolution Independence:** SVGs scale infinitely without pixelation while maintaining file sizes under 25KB.",
          "**CSS & Variable Color Binding:** Clean vector layers allow designers and developers to bind fill colors directly to design system token variables.",
          "**LCP Performance Protection:** Replacing multi-megabyte hero PNGs with lightweight optimized SVGs directly improves Google Core Web Vitals."
        ]
      },
      learning: {
        resources: [
          {
            title: "Recraft AI: Master Generative Vector Design",
            url: "https://www.recraft.ai",
            type: "Official Tool"
          },
          {
            title: "Figma Learn: Working with Vector Networks & SVGs",
            url: "https://help.figma.com/hc/en-us/articles/360040450133-Vector-networks-in-Figma",
            type: "Official Docs"
          },
          {
            title: "Midjourney Documentation: Prompt Parameter Reference",
            url: "https://docs.midjourney.com/docs/parameter-list",
            type: "Official Docs"
          },
          {
            title: "SVGO: Open Source SVG Optimizer & Compressor",
            url: "https://github.com/svg/svgo",
            type: "Developer Utility"
          }
        ]
      }
    },

    // Node 5
    {
      id: "step-5",
      stepNumber: 5,
      phaseId: "phase-2",
      title: "Clean Figma-to-Framer Export & Layer Hygiene",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Audit layer names, flatten complex boolean vectors, and paste entire responsive Figma sections directly onto the Framer canvas.",
      description: "Transferring designs from Figma into Framer historically required manual rebuilding. Today, the official 'Figma to HTML with Framer' plugin enables direct clipboard copying between the two canvases. However, pasting unvetted Figma files frequently causes broken layouts, overlapping text, unexpected fixed widths, and malformed vector paths.\n\nA seamless transfer requires rigorous pre-flight layer hygiene in Figma. Complex boolean vector groups (unions, subtractions) must be flattened with `Cmd + E` to prevent invisible bounding box errors. Hidden or unused layers must be deleted to avoid ghost elements in the DOM. Text layers must have explicit font-family and line-height bindings installed locally. When pre-flight auditing is executed properly, pasting a section into Framer automatically maps Figma Auto-Layout containers to Framer Stacks with 100% responsive fidelity.",
      playbook: {
        setup: "Install the official 'Figma to HTML with Framer' plugin in Figma. Ensure both Figma desktop and Framer desktop (or web browser at framer.com) are open side by side.",
        execute: "In Figma, perform a pre-flight layer audit: select all icons and complex shapes and flatten them (`Cmd + E`). Run the plugin 'Clean Document' to purge empty frames and hidden layers. Select your top-level page section frame (e.g., Hero, Navbar, Pricing Grid). Open the 'Figma to HTML with Framer' plugin and click 'Copy to Clipboard'. In Framer, click on the desktop canvas and press `Cmd + V` (`Ctrl + V`).",
        verify: "Inspect the pasted layer tree in Framer's left sidebar: confirm that Auto-Layout frames converted to Framer Stacks, images remain sharp, text layers use editable web fonts, and no elements possess unintended 'Fixed' width overrides."
      },
      tools: [
        {
          name: "Figma to HTML with Framer Plugin",
          type: "Official Migration Bridge",
          url: "https://www.framer.com/figma-to-framer",
          description: "Official Framer plugin that compiles Figma Auto-Layout frames into clean HTML/CSS and copies them directly to the Framer clipboard.",
          bestFor: "Zero-friction Figma to Framer transfer & automated stack conversion"
        },
        {
          name: "Figma",
          type: "Design Canvas",
          url: "https://www.figma.com",
          description: "Primary interface where pre-flight layer hygiene, flattening, and constraint checks are performed.",
          bestFor: "Pre-flight structural auditing & design preparation"
        },
        {
          name: "Framer",
          type: "Production Web Canvas",
          url: "https://www.framer.com",
          description: "Visual web builder that renders real React and CSS code directly on a live responsive canvas with built-in hosting.",
          bestFor: "Interactive web publishing, scroll motion & production deployment"
        }
      ],
      callouts: {
        mistake: "Copying top-level frames that contain unflattened boolean shapes (such as icon cutouts or complex illustrations), resulting in distorted or invisible vector artifacts in Framer.",
        proTip: "In Figma, ensure the root section frame has width set to 1200px or 1440px with Auto-Layout enabled before copying, ensuring Framer receives it as a fluid container.",
        mistakes: [
          "Pasting individual loose buttons or cards into Framer one by one instead of copying complete, organized section stacks.",
          "Forgetting to verify custom font availability in Framer, causing fallback typography (like Arial or Times) to replace your design system font.",
          "Leaving negative margins or overlapping absolute elements unpinned, causing them to jump unexpectedly in the Framer canvas."
        ],
        proTips: [
          "Press `Cmd + Option + C` in Figma and `Cmd + Option + V` in Framer for rapid style-only property copying.",
          "Use Framer's 'Paste as Image' only for non-interactive decorative graphics; all interactive UI must be pasted as structural stacks.",
          "Check Framer's console warnings immediately after paste to resolve any missing font or image asset alerts."
        ]
      },
      promptLab: {
        title: "Figma-to-Framer Pre-Flight Audit Checklist Generator",
        description: "Generate a rigorous pre-flight inspection checklist to guarantee that complex Figma UI frames paste into Framer with zero layout breakage.",
        variables: [
          {
            name: "Section Type",
            label: "Figma Section",
            options: ["Split Hero with Interactive Mockup", "Responsive Navbar with Mobile Hamburger", "Multi-Tier Pricing Table with Annual Toggle"],
            default: "Split Hero with Interactive Mockup"
          },
          {
            name: "Vector Complexity",
            label: "Graphic Elements",
            options: ["Custom SVG Icons + Abstract Gradient Blobs", "Layered 3D Clay Figures + Drop Shadows", "Bespoke Bento Illustrations with Masks"],
            default: "Custom SVG Icons + Abstract Gradient Blobs"
          },
          {
            name: "Font Configuration",
            label: "Typography Assets",
            options: ["Google Fonts (Inter, Plus Jakarta Sans)", "Custom Web Fonts (.woff2 loaded in Framer)", "Figma Local Installed System Fonts"],
            default: "Custom Web Fonts (.woff2 loaded in Framer)"
          }
        ],
        template: `# Figma-to-Framer Migration Pre-Flight Audit
Section: [Section Type]
Graphics: [Vector Complexity]
Typography: [Font Configuration]

Act as a Principal Design Technologist and Framer Engineer.
Generate a comprehensive step-by-step pre-flight checklist to execute in Figma before running the Framer export plugin:
1. Geometry & Vector Flattening Audit: Exact steps to sanitize masks, boolean unions, and multi-node vector paths.
2. Auto-Layout Constraint Verification: Explicit rules for resizing properties (Fill vs. Hug vs. Fixed).
3. Font & Asset Embedding: How to handle font licensing, .woff2 imports, and raster image optimizations.
4. Framer Ingestion Validation: 5 rapid tests to conduct immediately after pasting into Framer.`,
        expectedOutput: `### Figma-to-Framer Pre-Flight Hygiene Protocol

#### 1. Geometry & Vector Sanitation (In Figma)
- [ ] **Flatten Boolean Shapes**: Select all compound icon shapes (Union, Subtract, Intersect) and press \`Cmd + E\` to flatten into single clean vector paths.
- [ ] **Outline Strokes**: For decorative SVGs that scale, select paths and choose *Outline Stroke* (\`Cmd + Shift + O\`) to lock in stroke geometry.
- [ ] **Remove Empty Groups & Unused Masks**: Run the *Clean Document* plugin to delete 0-opacity ghost layers and orphaned clipping masks.

#### 2. Auto-Layout Constraints Verification
- [ ] **Root Section Frame**: Set to \`Auto-Layout: Vertical\`, Width: \`1440px (Fixed)\` in Figma, Alignment: \`Center\`.
- [ ] **Content Container**: Width set to \`Fill Container\` with \`max-width: 1200px\`.
- [ ] **Text Layers**: Ensure all headline and paragraph layers have horizontal resizing set to \`Fill Container\` (never Fixed Width or Hug).
- [ ] **Button Atoms**: Set horizontal resizing to \`Hug Contents\` with fixed vertical height (e.g. 48px).

#### 3. Font & Asset Embedding
- [ ] **Custom Typography**: Ensure the \`.woff2\` font files for your brand typefaces are pre-uploaded to your Framer project settings (*Settings → Custom Fonts*).
- [ ] **Image Assets**: Compress any embedded background bitmaps to WebP (under 500KB) using the *TinyImage Compressor* plugin.

#### 4. Framer Post-Paste Validation Checklist
1. **Stack Conversion**: Confirm the root container converted to a Framer Stack with *Direction: Down*, *Distribution: Start*, *Align: Center*.
2. **Width Behavior**: Set the root container's width in Framer to \`100%\` and max-width to \`1440px\` or \`1200px\`.
3. **Responsive Drag**: Drag Framer's viewport handle from 1440px to 390px to confirm elements reflow naturally.
4. **Font Recognition**: Verify that headings inherit the uploaded custom font rather than default sans-serif fallbacks.
5. **No Negative Offset Errors**: Ensure no layers display negative pixel margins that break browser z-index stacking.`
      },
      conceptGuide: {
        title: "Lossless Design-to-Code Pipeline & DOM Serialization",
        overview: "The Figma to Framer bridge works by serializing Figma's internal document object model (DOM) into standardized HTML5 semantic tags and CSS properties. When a frame has Auto-Layout enabled, the plugin translates it into `display: flex`, maps padding to CSS `padding`, and converts gaps into CSS `gap`. Understanding this compilation pipeline allows designers to design with the grain of the web: treating frames as CSS boxes and avoiding arbitrary visual tricks that have no direct CSS equivalent.",
        keyPoints: [
          "**Figma Auto-Layout to Framer Stacks:** Stacks in Framer are 1:1 representations of CSS Flexbox containers, preserving responsive alignment.",
          "**Vector Path Flattening:** Flattening compound boolean shapes into singular vector paths prevents multi-node clipping bugs during HTML canvas compilation.",
          "**Native React Architecture:** Framer compiles pasted elements into production-ready React components, not static image slices."
        ]
      },
      learning: {
        resources: [
          {
            title: "Framer Academy: Copy & Paste from Figma Guide",
            url: "https://www.framer.com/academy/lessons/figma-to-framer",
            type: "Official Tutorial"
          },
          {
            title: "Framer Learn: Layout & Stacks Masterclass",
            url: "https://www.framer.com/learn/layout/",
            type: "Official Docs"
          },
          {
            title: "Figma to HTML with Framer Plugin Page",
            url: "https://www.figma.com/community/plugin/1160181700287663592/figma-to-html-with-framer",
            type: "Official Plugin"
          },
          {
            title: "Web.dev: Learn CSS Box Model & Flexbox",
            url: "https://web.dev/learn/css/box-model",
            type: "Web Standard"
          }
        ]
      }
    },

    // Node 6
    {
      id: "step-6",
      stepNumber: 6,
      phaseId: "phase-3",
      title: "Framer Responsive Breakpoints (Desktop, Tablet, Mobile) & Stacks",
      timeEstimate: "2.5 hrs",
      difficulty: "Intermediate",
      summary: "Configure fluid max-width containers, CSS Grid bento layouts, and mobile overrides that adapt seamlessly across every viewport.",
      description: "A website that only looks stunning on a 16-inch MacBook Pro is a commercial failure. Over 60% of modern web traffic originates from mobile devices, tablets, and varied viewport widths. In Framer, responsive design is governed by a hierarchical breakpoint inheritance model. The primary Desktop breakpoint (typically 1200px or 1440px) acts as the single source of truth; any edits made to the Desktop breakpoint automatically cascade down to Tablet (810px) and Mobile (390px) breakpoints unless explicitly overridden.\n\nMastering responsive web engineering in Framer requires utilizing Framer Stacks (Flexbox) and Framer Grids (CSS Grid) with fluid width rules (`100%`, `Fill`, and `Fractional fr` units). By configuring max-width container wrappers and switching stack direction from horizontal on desktop to vertical on mobile, designers create fluid, adaptive bento grids and hero layouts that never break, clip, or require manual pixel adjustments across thousands of device resolutions.",
      playbook: {
        setup: "Open your Framer project containing the pasted Figma sections. At the top of the canvas, click the '+' icon in the Breakpoints bar to add 'Tablet (810px)' and 'Phone (390px)' breakpoints.",
        execute: "Select your main page wrapper. Set its width to 100% and ensure the background color is inherited across all breakpoints. On the Desktop breakpoint, configure your feature grid using Framer Grid (3 columns, 1fr each, 24px gap). Switch to the Tablet breakpoint: change the Grid to 2 columns. Switch to the Phone breakpoint: override the layout to 1 column, reduce padding from 96px to 48px, and adjust typography size using Framer's inherited font-size overrides.",
        verify: "Drag the interactive canvas resizer bar across all three viewports. Test intermediate widths (e.g. 1024px, 768px, 480px, 360px). Confirm that images scale proportionally, no horizontal scrollbars appear, and touch targets meet minimum 48x48px hit areas on mobile."
      },
      tools: [
        {
          name: "Framer Stacks & Grids",
          type: "CSS Layout Engine",
          url: "https://www.framer.com/learn/stacks/",
          description: "Visual flexbox and 2D CSS grid layout system supporting fractional units (fr), automatic row wrapping, and responsive overrides.",
          bestFor: "Responsive multi-column grids, fluid containers & bento layouts"
        },
        {
          name: "Framer AI",
          type: "Generative Layout Assistant",
          url: "https://www.framer.com/ai",
          description: "Framer's built-in generative AI that restructures desktop layouts into mobile-optimized stacks and suggests responsive typography scales.",
          bestFor: "Automated mobile breakpoint reflow & responsive typography scaling"
        },
        {
          name: "Chrome DevTools",
          type: "Browser Testing & Emulation",
          url: "https://developer.chrome.com/docs/devtools/device-mode",
          description: "Device mode emulator for testing published Framer staging links across simulated iPhone, iPad, and Android viewports with network throttling.",
          bestFor: "Mobile viewport auditing, touch simulation & layout shift debugging"
        }
      ],
      callouts: {
        mistake: "Editing child element styling or text copy on the Mobile breakpoint first instead of Desktop, inadvertently breaking breakpoint inheritance and requiring tedious manual sync.",
        proTip: "Use `1fr` fractional units for grid columns instead of fixed pixel widths to let cards distribute remaining container space dynamically.",
        mistakes: [
          "Allowing cards or images to retain fixed pixel widths (e.g., `width: 420px`), which causes horizontal scrolling and overflow on 375px mobile screens.",
          "Overriding layout properties across 15 individual layers on mobile instead of simply toggling stack direction on the parent container from 'Row' to 'Column'.",
          "Forgetting to verify mobile tap targets for buttons and navigation links, resulting in frustrating mis-clicks on mobile touchscreens."
        ],
        proTips: [
          "Hold `Option` while dragging breakpoint handles in Framer to test responsive reflow symmetrically.",
          "Set container max-width to `1200px` or `1280px` on desktop with `Margin: Auto` (Left & Right) to prevent layouts from stretching awkwardly on 4K ultrawide monitors.",
          "Right-click an overridden property on mobile and select 'Reset Override' to restore automatic inheritance from desktop."
        ]
      },
      promptLab: {
        title: "Responsive Breakpoint & CSS Grid Bento Architect",
        description: "Generate a multi-breakpoint layout specification mapping exact stack directions, grid tracks, and font overrides across Desktop, Tablet, and Mobile.",
        variables: [
          {
            name: "Bento Layout Pattern",
            label: "Grid Structure",
            options: ["4-Card Asymmetric Bento (1 Large Feature + 3 Small)", "3-Column Symmetric Product Tier Grid", "Split Screen Sticky Media Showcase"],
            default: "4-Card Asymmetric Bento (1 Large Feature + 3 Small)"
          },
          {
            name: "Desktop Max Width",
            label: "Container Width Constraint",
            options: ["1200px (Centered / Standard)", "1440px (Spacious / Modern)", "100% Fluid with 48px Padding"],
            default: "1200px (Centered / Standard)"
          },
          {
            name: "Mobile Navigation Pattern",
            label: "Mobile Nav Style",
            options: ["Full-Screen Overlay Menu with Staggered Links", "Bottom Floating Tab Bar", "Collapsible Accordion Dropdown"],
            default: "Full-Screen Overlay Menu with Staggered Links"
          }
        ],
        template: `# Responsive Multi-Breakpoint Architecture Blueprint
Layout: [Bento Layout Pattern]
Container Constraint: [Desktop Max Width]
Mobile Navigation: [Mobile Navigation Pattern]

Act as a Principal Framer Systems Engineer.
Specify the exact responsive configuration across Desktop (1200px+), Tablet (810px), and Mobile (390px):
1. Grid & Stack Dimensions: Define CSS Grid columns (fr/px), row templates, and gaps per breakpoint.
2. Direction & Sizing Overrides: Detail parent container properties and child card sizing (Fill / Fixed / Fr).
3. Mobile Navigation Architecture: Explain how the desktop navbar transforms into the mobile menu pattern with state management.
4. Overflow & Edge-Case Protection: Technical rules to prevent horizontal scrollbars on 360px devices.`,
        expectedOutput: `### Responsive Multi-Breakpoint Specification

#### 1. Breakpoint Grid Architecture (Asymmetric Bento)

| Parameter | Desktop (1200px+) | Tablet (810px) | Mobile (390px) |
| :--- | :--- | :--- | :--- |
| **Grid Template Columns** | \`repeat(3, 1fr)\` (2 Rows) | \`repeat(2, 1fr)\` | \`1fr\` (Single Column) |
| **Hero Card Span** | Column: \`1 / span 2\`, Row: \`1 / span 2\` | Column: \`1 / span 2\` (Full Width) | Column: \`1 / span 1\` (Full Width) |
| **Secondary Cards** | Single grid cells (\`1fr\`) | Single grid cells (\`1fr\`) | Stacked vertically (\`1fr\`) |
| **Gap** | \`24px\` | \`16px\` | \`12px\` |
| **Container Padding** | \`Top/Bottom: 96px, Left/Right: 24px\` | \`Top/Bottom: 64px, Left/Right: 20px\` | \`Top/Bottom: 48px, Left/Right: 16px\` |

#### 2. Layout Overrides by Breakpoint
- **Desktop (Primary Source of Truth)**:
  - Parent Container: Width: \`100%\`, Max Width: \`1200px\`, Margin: \`0 auto\`.
  - Hero Bento Card: Contains live interactive canvas, height: \`520px\`.
- **Tablet (810px Override)**:
  - Header font sizes inherit from Desktop with a \`-15%\` scale override.
  - Bento Grid automatically reflows to 2 columns: Hero card occupies top full-width span; secondary cards form a 2-card row below.
- **Mobile (390px Override)**:
  - Grid turns into a single vertical Stack: *Direction: Down*, *Gap: 16px*.
  - All cards have *Width: 100%*, *Height: Auto / Hug Contents*.
  - Hero Card interactive canvas height reduced to \`280px\` to preserve above-the-fold visibility.

#### 3. Mobile Navigation Architecture ([Mobile Navigation Pattern])
- Desktop: Horizontal Stack with inline links and right-aligned CTA button.
- Mobile: Desktop links set to \`Display: None\` via Breakpoint override. Hamburger icon becomes visible (\`Display: Block\`).
- Clicking hamburger triggers a Framer Variant transition to a fixed \`100vw / 100vh\` overlay container with frosted glass (\`backdrop-filter: blur(16px)\`) and staggered spring entrance for menu items.`
      },
      conceptGuide: {
        title: "Breakpoint Cascading & Fluid Container Architecture",
        overview: "Framer's responsive system relies on top-down CSS inheritance. The Desktop breakpoint serves as the master blueprint. When a developer modifies styles on Desktop, those changes automatically populate Tablet and Mobile. If an adjustment is made directly on Mobile, Framer creates a local CSS override for that specific property, severing inheritance for that parameter only. Understanding this cascading flow ensures rapid development without breaking cross-device consistency.",
        keyPoints: [
          "**Top-Down Inheritance:** Always build and refine the Desktop breakpoint first; refine Tablet and Mobile solely via targeted overrides.",
          "**Fractional Grid Math:** Using CSS Grid `fr` units ensures multi-card layouts scale fluidly without hardcoded media queries.",
          "**Zero Horizontal Overflow:** Setting container widths to `100%` with max-width boundaries prevents horizontal scrollbar bugs on mobile viewports."
        ]
      },
      learning: {
        resources: [
          {
            title: "Framer Academy: Responsive Design & Breakpoints",
            url: "https://www.framer.com/academy/lessons/breakpoints",
            type: "Official Tutorial"
          },
          {
            title: "Framer Learn: Working with CSS Grids & Bento Layouts",
            url: "https://www.framer.com/learn/grid/",
            type: "Official Docs"
          },
          {
            title: "MDN Web Docs: Responsive Web Design Basics",
            url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
            type: "Web Standard"
          },
          {
            title: "Google Web.dev: Core Web Vitals & Mobile Usability",
            url: "https://web.dev/explore/learn-core-web-vitals",
            type: "Performance Standard"
          }
        ]
      }
    },

    // Node 7
    {
      id: "step-7",
      stepNumber: 7,
      phaseId: "phase-3",
      title: "Interactive Multi-State Components & Hover Variants",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Build interactive navbars, accordion FAQs, pricing toggles (Monthly/Annual), and magnetic hover buttons without writing code.",
      description: "Static mockups fail to convey how a digital product actually feels to interact with. Micro-interactions—such as the subtle spring bounce of a button, a glowing gradient hover border, or an accordion smoothly unfurling—convey craftsmanship and elevate user engagement. In Framer, interactive elements are engineered using Component Variants, powered by the industry-standard Framer Motion animation engine under the hood.\n\nDesigners can convert any frame into a multi-state component with dedicated states: `Default`, `Hover`, `Pressed`, and `Active`. By defining spring physics parameters (Damping, Stiffness, and Mass) rather than rigid linear easing curves, animations feel organic and tactile. Furthermore, building stateful interactive primitives—such as an annual/monthly billing toggle that dynamically updates price numbers across sibling cards or a collapsible FAQ accordion with layout-driven height transitions—can be accomplished entirely visually with zero custom JavaScript.",
      playbook: {
        setup: "Select a button or card on your Framer canvas. Press `Cmd + Option + K` (or right-click and choose 'Create Component'). Name the component (e.g. 'Button / Primary Interactive').",
        execute: "In the Component Canvas, click '+ Variant' to create a 'Hover' variant and a 'Pressed' variant. On the 'Hover' variant, adjust properties: scale to 1.03, brighten background fill color, add an internal glow shadow (`box-shadow: 0 0 20px rgba(16, 185, 129, 0.4)`), and lift Y-position by -2px. In the Transition panel, switch from 'Ease' to 'Spring': set Stiffness to 400 and Damping to 30. Connect the Default variant to the Hover variant with an 'On Hover' trigger.",
        verify: "Click the 'Preview' play icon in the top right toolbar. Hover and click the button to verify natural spring response with zero latency or layout jank. Test that mouse-out returns the button smoothly to its initial state."
      },
      tools: [
        {
          name: "Framer Components",
          type: "Stateful Component System",
          url: "https://www.framer.com/learn/components/",
          description: "Visual component engine supporting multi-state variants, property variables, and interactive event triggers.",
          bestFor: "Interactive UI primitives, variant states & micro-interactions"
        },
        {
          name: "Framer Motion",
          type: "Production Animation Library",
          url: "https://www.framer.com/motion/",
          description: "Open-source React animation library powering Framer's spring physics, gesture recognition, and layout transitions.",
          bestFor: "Physics-based spring animations, layout morphing & gestures"
        },
        {
          name: "Phosphor Icons",
          type: "Adaptive Icon Ecosystem",
          url: "https://phosphoricons.com",
          description: "Flexible icon family integrated into Framer with customizable weight, size, color, and animated state transitions.",
          bestFor: "Interactive navigation icons, chevron arrows & UI badges"
        }
      ],
      callouts: {
        mistake: "Using harsh linear transitions (e.g. `linear 0.2s`) instead of physics-based springs (Stiffness 400, Damping 30), resulting in robotic, cheap-feeling micro-interactions.",
        proTip: "Use 'Layout Animations' (the 'Magic Motion' equivalent in Framer) so sibling elements automatically slide down when an accordion FAQ expands, preventing content overlaps.",
        mistakes: [
          "Forgetting to configure a 'Pressed' state, leaving mobile touch users with no tactile visual feedback when tapping buttons.",
          "Over-animating elements with excessive scale (e.g. scaling buttons to 1.25x), which causes text blurriness and visual disorientation.",
          "Creating separate redundant components for every minor variation instead of utilizing Component Properties (Variables) for text labels and icon swaps."
        ],
        proTips: [
          "Expose Component Properties (Text, Color, Image, Icon, Boolean) in the right-hand panel so team members can customize instances on the main canvas without detaching components.",
          "For magnetic button effects, pair spring hover variants with a low mass (Mass: 0.8) for ultra-snappy responsiveness.",
          "Build an interactive 'Theme Switcher' component that toggles between Dark and Light mode variants to let visitors preview different aesthetic modes."
        ]
      },
      promptLab: {
        title: "Framer Motion Physics & Interactive Component Architect",
        description: "Specify the exact spring parameters, variant transitions, and component properties to build polished interactive UI primitives.",
        variables: [
          {
            name: "Component Type",
            label: "Interactive UI Element",
            options: ["Accordion FAQ Item with Smooth Height Expansion", "Monthly / Annual Billing Toggle Switch with Discount Pill", "Magnetic Glowing Card with Spotlight Cursor Effect"],
            default: "Monthly / Annual Billing Toggle Switch with Discount Pill"
          },
          {
            name: "Spring Character",
            label: "Motion Physics Profile",
            options: ["Snappy & Controlled (Stiffness: 500, Damping: 35)", "Bouncy & Playful (Stiffness: 300, Damping: 18)", "Subtle & Elegant (Stiffness: 250, Damping: 30)"],
            default: "Snappy & Controlled (Stiffness: 500, Damping: 35)"
          },
          {
            name: "Trigger Event",
            label: "User Interaction",
            options: ["On Click (Toggle State)", "On Hover + While Pressing", "Drag / Gesture Swiping"],
            default: "On Click (Toggle State)"
          }
        ],
        template: `# Framer Motion Component Architecture Blueprint
Component: [Component Type]
Physics Profile: [Spring Character]
Interaction Trigger: [Trigger Event]

Act as a Principal Interaction Designer and Framer Motion Engineer.
Generate the technical specification to build this interactive component in Framer:
1. Variant States Architecture: Define each state (Default, Hover, Active/Toggled) with exact visual styling changes.
2. Framer Motion Spring Parameters: Provide exact values for Stiffness, Damping, Mass, and Velocity.
3. Component Property Controls: List exposed variable controls (e.g., Title, Description, Active State, Accent Color).
4. Layout Transition Safeguards: Explain how neighboring elements reflow smoothly without visual snapping.`,
        expectedOutput: `### Interactive Component Specification: Monthly / Annual Billing Toggle

#### 1. Variant State Architecture
- **Variant 1: Monthly (Default)**
  - Pill Background: \`slate-900\` (Fixed height: 44px, padding: 4px, radius: 9999px).
  - Sliding Indicator: Positioned on the Left. Background: \`brand-emerald-500\`, Width: 110px, Height: 36px, Radius: 9999px.
  - Text 'Monthly': Color: \`#FFFFFF\` (Bold 14px).
  - Text 'Annual': Color: \`slate-400\` (Regular 14px).
  - Discount Pill ("Save 20%"): Opacity \`0.6\`, Scale \`0.95\`.

- **Variant 2: Annual (Toggled)**
  - Sliding Indicator: Positioned on the Right (X-offset transition). Background: \`brand-emerald-400\`.
  - Text 'Monthly': Color: \`slate-400\`.
  - Text 'Annual': Color: \`#FFFFFF\` (Bold 14px).
  - Discount Pill: Opacity \`1.0\`, Scale \`1.05\`, Background: \`emerald-500/20\`, Text: \`emerald-300\`.

#### 2. Framer Motion Spring Physics Configuration
\`\`\`typescript
const springTransition = {
  type: "spring",
  stiffness: 500, // [Spring Character]
  damping: 35,
  mass: 0.8,
  restDelta: 0.001
};
\`\`\`
*Result: The sliding indicator glides across the pill track with a crisp, tactile deceleration that mimics physical mechanical switches.*

#### 3. Component Property Controls (Exposed to Main Canvas)
1. **Billing Cycle** (Enum: "Monthly" | "Annual") -> Controls active variant.
2. **Discount Label** (String: "SAVE 20%") -> Updates badge text.
3. **Show Discount** (Boolean: true/false) -> Toggles visibility of promotional badge.
4. **On Value Change** (Event) -> Dispatches event to recalculate pricing card figures.`
      },
      conceptGuide: {
        title: "Spring Physics vs. Bezier Curves in Motion Design",
        overview: "Traditional web animations rely on cubic bezier easing curves (e.g., `ease-in-out` or `cubic-bezier(0.4, 0, 0.2, 1)`). While functional, bezier curves animate strictly over a fixed duration (in milliseconds), ignoring user gesture velocity and interrupting abruptly if a user clicks mid-animation. Framer Motion calculates animation trajectories using real physical formulas governing mass, stiffness, and damping. When a user interacts with a spring-driven element, momentum is preserved seamlessly, resulting in fluid, human-centric tactile feedback.",
        keyPoints: [
          "**Velocity Preservation:** Springs can be interrupted mid-flight by new user inputs without visual stutter or unnatural resets.",
          "**Duration-Free Architecture:** Physical spring systems calculate their own settling time dynamically based on distance and stiffness.",
          "**Layout Morphing:** Framer Motion's layout projection engine animates size and position changes without triggering expensive browser repaint cycles."
        ]
      },
      learning: {
        resources: [
          {
            title: "Framer Learn: Master Variants & Interactive Components",
            url: "https://www.framer.com/learn/components/",
            type: "Official Docs"
          },
          {
            title: "Framer Motion Official Documentation",
            url: "https://www.framer.com/motion/",
            type: "Official Docs"
          },
          {
            title: "Phosphor Icons Official Website & Library",
            url: "https://phosphoricons.com",
            type: "Official Resource"
          },
          {
            title: "Stripe Press: The Art of Crafting Digital Micro-Interactions",
            url: "https://press.stripe.com",
            type: "Design Case Study"
          }
        ]
      }
    },

    // Node 8
    {
      id: "step-8",
      stepNumber: 8,
      phaseId: "phase-3",
      title: "Framer CMS Architecture, Dynamic Collections & Filtering",
      timeEstimate: "2.5 hrs",
      difficulty: "Advanced",
      summary: "Structure dynamic collections for blogs, case studies, changelogs, and job boards with instant category filtering and search.",
      description: "Hardcoding content directly onto static canvas pages makes ongoing maintenance impossible. A modern marketing website must allow non-technical team members—such as content marketers, recruiters, and product managers—to publish new blog articles, customer case studies, changelog updates, and career postings without touching the design layout. Framer CMS delivers a powerful, visual relational content engine integrated directly into the design canvas.\n\nDesigners can define structured Collections with diverse field types (Rich Text with embedded code blocks, Images, Dates, Slugs, Multi-Select Categories, and Author References). Creating a single dynamic Collection Template page automatically generates hundreds of search-engine-optimized, static-rendered pages. When paired with Framer's built-in CMS filtering, multi-category tag pills, and instant search bars, visitors can browse and filter large content libraries with zero page reload latency.",
      playbook: {
        setup: "In the Framer top navigation bar, click the 'CMS' tab. Click 'Add Collection' and name it 'Blog Posts' (or 'Case Studies').",
        execute: "Define the schema fields: Title (Title), Slug (Slug), Hero Image (Image), Published Date (Date), Author (Reference to Authors Collection), Category (Enum/Tag: Engineering, AI, Design), Summary (Formatted Text), and Content (Rich Text). Populate 3 to 4 sample records. Return to the canvas, drop a 'Collection List' element, connect it to 'Blog Posts', and style the repeated card component. Add a 'Category Filter' control bar bound to the Category field. Design the 'Blog Posts / [Slug]' template page with dynamic bindings.",
        verify: "Preview the project. Click different category filter pills (e.g., 'Engineering') and confirm the list filters instantly without full-page reloading. Click an article card and verify that the dynamic template page loads with matching title, author, and rich text body content."
      },
      tools: [
        {
          name: "Framer CMS",
          type: "Headless Visual Content Engine",
          url: "https://www.framer.com/learn/cms/",
          description: "Built-in content management system generating fast, SEO-optimized dynamic template pages with rich text and custom fields.",
          bestFor: "Blogs, customer case studies, documentation & changelogs"
        },
        {
          name: "Notion Sync for Framer",
          type: "Content Workflow Integration",
          url: "https://www.framer.com/plugins/notion",
          description: "Framer plugin that synchronizes Notion databases directly into Framer CMS collections on an automated schedule.",
          bestFor: "Editorial team publishing, markdown sync & external CMS authoring"
        },
        {
          name: "Airtable",
          type: "Relational Data Hub",
          url: "https://www.airtable.com",
          description: "Cloud database platform used to manage complex relational marketing content and sync records into Framer via webhooks.",
          bestFor: "Enterprise content calendars, multi-author workflows & data pipelines"
        }
      ],
      callouts: {
        mistake: "Manually designing separate individual static canvas pages for 20 blog articles instead of creating a single unified dynamic CMS Collection Template page.",
        proTip: "Use the 'Rich Text' field's component embedding feature to allow authors to insert custom Framer components (callout banners, interactive calculators, video embeds) directly inside blog posts.",
        mistakes: [
          "Failing to set unique, URL-safe slugs for CMS items, causing 404 routing errors or broken permalinks.",
          "Overlooking empty states in CMS collections, leaving blank unsightly white space when a category filter returns zero results.",
          "Uploading uncompressed 15MB hero photography into CMS items, drastically degrading page load times across all dynamic post pages."
        ],
        proTips: [
          "Configure dynamic Open Graph (OG) social card images in Framer CMS by binding each post's title and author into a pre-styled canvas frame.",
          "Leverage Framer's native CSV and JSON import tools to migrate existing articles from WordPress, Webflow, or Ghost in seconds.",
          "Set up 'Visibility Conditions' on CMS template elements (e.g. only render the 'Author Twitter' icon if the Twitter URL field is not empty)."
        ]
      },
      promptLab: {
        title: "Framer CMS Schema & Relational Architecture Generator",
        description: "Architect a comprehensive CMS data schema including custom field types, relational references, and category taxonomy for high-scale marketing sites.",
        variables: [
          {
            name: "Collection Purpose",
            label: "CMS Collection Type",
            options: ["Customer Case Studies & ROI Stories", "Developer Engineering Blog & Tutorials", "Product Changelog & Release Notes"],
            default: "Customer Case Studies & ROI Stories"
          },
          {
            name: "Taxonomy Structure",
            label: "Filtering Categories",
            options: ["By Industry (FinTech, HealthTech, AI, SaaS)", "By Company Size (Startup, Mid-Market, Enterprise)", "By Product Feature / Tool Used"],
            default: "By Industry (FinTech, HealthTech, AI, SaaS)"
          },
          {
            name: "Rich Media Requirements",
            label: "Embedded Media Types",
            options: ["Customer Video Testimonial + Stat Metrics Grid", "Code Snippet Blocks with Syntax Highlighting", "Interactive Before/After Metric Slider"],
            default: "Customer Video Testimonial + Stat Metrics Grid"
          }
        ],
        template: `# Framer CMS Relational Schema Specification
Collection: [Collection Purpose]
Taxonomy Filter: [Taxonomy Structure]
Media Components: [Rich Media Requirements]

Act as a Principal Web Systems Architect.
Design a production-grade Framer CMS schema and page architecture:
1. Complete Field Schema: List every field name, field type, required/optional status, and description.
2. Relational Collections: Detail references (e.g., Authors, Clients, Industries) to eliminate data duplication.
3. Collection List UI Architecture: Layout blueprint for the directory page with search bar, category pills, and pagination.
4. Dynamic Template Page Blueprint: Structural layout of the individual detail page (\`/[collection]/[slug]\`) with dynamic bindings.`,
        expectedOutput: `### Production Framer CMS Architecture: Customer Case Studies

#### 1. Collection Field Schema (\`case-studies\`)
| Field Name | Type | Options / Validation | Purpose |
| :--- | :--- | :--- | :--- |
| **Title** | Title | Required, Max 80 chars | Headline for case study (e.g., "How Stripe Scaled AI Support") |
| **Slug** | Slug | Required, Auto-generated, Unique | URL path: \`/customers/how-stripe-scaled-ai-support\` |
| **Client Logo** | Image | PNG/SVG Transparent | Monochromatic company logo |
| **Hero Image** | Image | WebP, 16:9 ratio | High-res showcase graphic |
| **Metric 1 Stat** | String | Max 10 chars (e.g. "84%") | Primary quantitative result |
| **Metric 1 Label**| String | Max 25 chars (e.g. "Reduction in First-Response Time") | Metric context |
| **Metric 2 Stat** | String | Max 10 chars (e.g. "3.2x") | Secondary quantitative result |
| **Metric 2 Label**| String | Max 25 chars | Metric context |
| **Industry** | Enum / Tag | FinTech, HealthTech, AI, DevTools | Primary taxonomy filter |
| **Company Size** | Enum | 1-50, 50-500, 500+ Enterprise | Secondary filter |
| **Customer Quote**| Formatted Text | Required | Pull quote testimonial |
| **Quote Author** | Reference | Links to \`authors\` collection | Headshot, Name, Role |
| **Body Story** | Rich Text | Headings, Images, Embeds | Full narrative case study breakdown |

#### 2. Directory Page Filtering Architecture (\`/customers\`)
- **Top Control Bar**: Search input with instant client-side text match + Horizontal scrollable category pill stack.
- **Collection List Component**:
  - CSS Grid (2 Columns Desktop, 1 Column Mobile, \`gap: 24px\`).
  - Active Filter State: Clicking "FinTech" filters records with 0ms delay.
  - Empty State: Displays friendly illustrated card ("No case studies found in this category. View all →").

#### 3. Dynamic Detail Page Architecture (\`/customers/[slug]\`)
- **Breadcrumb Navigation**: Home > Customers > [Dynamic Industry Tag] > [Title]
- **Hero Split**: Left side binds to Title, Customer Quote, and Metrics Grid. Right side binds to Hero Image.
- **Rich Text Container**: Inherits global typography styles with custom styling for H2 subheads, bullet lists, and callout quote boxes.`
      },
      conceptGuide: {
        title: "Relational CMS Architecture & Static Site Generation (SSG)",
        overview: "Framer's CMS combines the visual freedom of a canvas with the structured rigor of a relational database. Under the hood, Framer compiles CMS collection pages into pre-rendered static HTML during publication (Static Site Generation). When a visitor accesses an article, there is no database query overhead or server latency—pages load in milliseconds and receive top Google PageSpeed ratings. By separating data models from visual presentation templates, teams achieve scalable editorial autonomy.",
        keyPoints: [
          "**Static Site Generation (SSG):** CMS detail pages are compiled into pre-rendered static HTML for lightning-fast TTFB and optimal SEO.",
          "**Relational References:** Connecting collections (e.g., Articles to Authors) ensures that updating an author's photo once propagates across dozens of published posts.",
          "**Client-Side Instant Filtering:** Category filters execute in the browser without page reloads, providing an app-like user experience."
        ]
      },
      learning: {
        resources: [
          {
            title: "Framer Learn: The Complete CMS Guide",
            url: "https://www.framer.com/learn/cms/",
            type: "Official Docs"
          },
          {
            title: "Framer Academy: Dynamic Pages & CMS Filtering Masterclass",
            url: "https://www.framer.com/academy/lessons/cms-dynamic-pages",
            type: "Official Tutorial"
          },
          {
            title: "Google Search Central: SEO Best Practices for Dynamic Content",
            url: "https://developers.google.com/search/docs/crawling-indexing",
            type: "SEO Standard"
          },
          {
            title: "Notion to Framer CMS Sync Integration",
            url: "https://www.framer.com/plugins/notion",
            type: "Official Integration"
          }
        ]
      }
    },

    // Node 9
    {
      id: "step-9",
      stepNumber: 9,
      phaseId: "phase-4",
      title: "Physics-Based Scroll Animations, Appear Effects & 3D Embeds",
      timeEstimate: "2.5 hrs",
      difficulty: "Advanced",
      summary: "Engineer smooth parallax reveals, sticky scroll-storytelling sections, and lightweight interactive 3D embeds that run at 60fps.",
      description: "Static web pages feel uninspired, but poorly engineered animations cause stutter, battery drain, and motion sickness. The pinnacle of modern web design is subtle, performance-conscious motion: elements that glide gracefully into view as the viewport scrolls, sticky narrative sections that tell a story over multiple scroll ticks, and interactive 3D objects that respond to mouse movements. Framer delivers first-class scroll-driven animation tools operating directly on the GPU.\n\nUsing Framer's 'Scroll Transforms' and 'Scroll Speed' features, designers can create sophisticated multi-layer parallax, sticky pinning effects, and scroll-linked progress bars without writing complex `requestAnimationFrame` JavaScript loops. Furthermore, embedding interactive 3D models engineered in Spline 3D or vector animations from Rive allows teams to deliver Apple-level visual storytelling that maintains a silky-smooth 60 frames per second on both desktop and mobile devices.",
      playbook: {
        setup: "Open your Framer project. Create or export an interactive 3D scene from Spline (spline.design) using their lightweight WebGL viewer embed code. Select an image or card stack on the Framer canvas.",
        execute: "In the right-hand Effects panel, click '+ Effect' and select 'Scroll Transform'. Set the Trigger to 'Viewport'. Define the scroll range (e.g. From: Viewport Top enters -> To: Viewport Bottom leaves). Bind property changes: map vertical scroll to 3D rotation (`Rotate Y: -15deg -> 0deg`), opacity (`0.2 -> 1.0`), and Y-offset (`60px -> 0px`). In a sticky section, set the parent container to 'Position: Sticky' with top offset 0px. Drop an 'Embed' component into the canvas and paste your Spline 3D URL.",
        verify: "Preview the page and scroll up and down. Confirm that the scroll transforms execute with silky-smooth 60fps frame rates. Open Chrome DevTools Performance panel and verify zero dropped frames and low GPU memory consumption."
      },
      tools: [
        {
          name: "Framer Scroll Transforms",
          type: "Scroll-Driven Animation Engine",
          url: "https://www.framer.com/learn/scroll-effects/",
          description: "Visual animation engine for linking scroll progress to element position, rotation, scale, opacity, and blur on the GPU.",
          bestFor: "Sticky storytelling sections, parallax scrolling & scrubbable reveals"
        },
        {
          name: "Spline 3D",
          type: "Real-Time 3D Web Canvas",
          url: "https://spline.design",
          description: "In-browser 3D design and animation tool that exports lightweight interactive WebGL models with real-time physics and mouse-tracking.",
          bestFor: "Interactive 3D hero assets, glass spheres & mouse-hover reactive models"
        },
        {
          name: "Rive",
          type: "Interactive Vector Animation Runtime",
          url: "https://rive.app",
          description: "State-machine-driven vector animation runtime delivering tiny file sizes (under 50KB) and 120fps graphics for web interfaces.",
          bestFor: "Complex animated characters, interactive icons & animated state machines"
        }
      ],
      callouts: {
        mistake: "Animating non-GPU properties like CSS `width`, `height`, `margin`, or `left/top` during scroll events, forcing continuous browser layout recalculations and causing severe scroll jank.",
        proTip: "Only animate hardware-accelerated CSS properties during scroll: `transform` (translate, scale, rotate) and `opacity`.",
        mistakes: [
          "Embedding unoptimized 40MB Spline 3D scenes with complex polygon meshes that freeze mobile browsers upon page load.",
          "Overwhelming visitors with excessive parallax speeds, causing spatial disorientation and violating web accessibility motion standards.",
          "Forgetting to provide a fallback image for 3D canvases on low-power devices with disabled hardware acceleration."
        ],
        proTips: [
          "Enable 'Lazy Loading' on 3D Spline embeds so they only initialize WebGL contexts when the user scrolls near that section.",
          "Respect user accessibility settings by configuring animations to automatically disable if the user has `prefers-reduced-motion` enabled in their OS.",
          "Use 'Sticky' stacking cards where three consecutive cards pin to the top of the viewport and scale down sequentially as you scroll past."
        ]
      },
      promptLab: {
        title: "Scroll-Driven Motion & Interactive 3D Staging Blueprint",
        description: "Specify the exact hardware-accelerated transform ranges, scroll triggers, and Spline 3D integration parameters for high-impact visual storytelling.",
        variables: [
          {
            name: "Scroll Animation Pattern",
            label: "Motion Choreography",
            options: ["Sticky 3-Card Stack with Progressive Scale Down", "Horizontal Parallax Scrubbing Section", "3D Hero Model Mouse-Tracking + Scroll Spin"],
            default: "Sticky 3-Card Stack with Progressive Scale Down"
          },
          {
            name: "Trigger Viewport Range",
            label: "Scroll Boundaries",
            options: ["Section Enters Viewport -> Centers in Viewport", "Center of Viewport -> Leaves Top of Viewport", "Full Continuous Page Scroll Progress (0% -> 100%)"],
            default: "Center of Viewport -> Leaves Top of Viewport"
          },
          {
            name: "Performance Budget",
            label: "Device Target",
            options: ["High-End Desktop & Mobile (60fps Target)", "Strict Mobile Optimization (Asset < 100KB)", "Ultra-Low Power / Battery Saver"],
            default: "High-End Desktop & Mobile (60fps Target)"
          }
        ],
        template: `# Scroll-Driven Animation & 3D Staging Specification
Pattern: [Scroll Animation Pattern]
Trigger Bounds: [Trigger Viewport Range]
Performance Target: [Performance Budget]

Act as a Principal Creative Technologist and Motion Engineer.
Generate the technical staging blueprint for this interactive experience in Framer:
1. Scroll Transform Matrix: Define exact numeric input ranges (scroll %) and output values for TranslateY, Scale, Rotate, and Opacity.
2. Sticky Pinning Architecture: Detail parent stack height, positioning (Sticky vs. Fixed), and overflow settings.
3. 3D WebGL Embed Optimization: Guidelines for Spline polygon budget, texture compression, and WebGL context disposal.
4. Accessibility & Fallbacks: Implementation of \`prefers-reduced-motion\` media queries to prevent cognitive disorientation.`,
        expectedOutput: `### Scroll Motion Specification: Sticky 3-Card Stacking Showcase

#### 1. Transform Matrix (Per Card in Sticky Stack)
- **Container Architecture**:
  - Parent Section: *Height: 300vh* (allows 3 full scroll viewports of storytelling duration).
  - Sticky Frame: *Position: Sticky*, *Top: 96px*, *Height: 80vh*.

| Scroll Trigger (Viewport) | Card 1 Transform | Card 2 Transform | Card 3 Transform |
| :--- | :--- | :--- | :--- |
| **0% (Start)** | \`Scale: 1.0, Y: 0px, Opacity: 1.0\` | \`Scale: 0.9, Y: 150px, Opacity: 0.0\` | \`Scale: 0.8, Y: 300px, Opacity: 0.0\` |
| **33% (Card 2 Arrives)** | \`Scale: 0.95, Y: -20px, Opacity: 0.8\`| \`Scale: 1.0, Y: 0px, Opacity: 1.0\` | \`Scale: 0.9, Y: 150px, Opacity: 0.0\` |
| **66% (Card 3 Arrives)** | \`Scale: 0.90, Y: -40px, Opacity: 0.5\`| \`Scale: 0.95, Y: -20px, Opacity: 0.8\`| \`Scale: 1.0, Y: 0px, Opacity: 1.0\` |
| **100% (Unpin)** | Entire stack scrolls out naturally with section bottom boundary. |

#### 2. Spline 3D Integration Budget ([Performance Budget])
- **Mesh Complexity**: Keep total polygon count under 25,000 triangles.
- **Lighting**: Bake shadows into ambient occlusion textures rather than calculating real-time dynamic shadows.
- **Iframe Embed Parameter**:
\`\`\`html
<iframe 
  src="https://my.spline.design/interactive-hero-core/" 
  loading="lazy" 
  width="100%" 
  height="100%" 
  frameborder="0" 
  style="pointer-events: auto; transform: translateZ(0);"
></iframe>
\`\`\`

#### 3. Accessibility & Reduced Motion
In Framer, wrap motion effects with a condition:
\`\`\`css
@media (prefers-reduced-motion: reduce) {
  .scroll-transform-target {
    transform: none !important;
    opacity: 1 !important;
  }
}
\`\`\`
*Result: Users with vestibular disorders receive a clean, readable layout without disorienting 3D rotation or rapid scaling.*`
      },
      conceptGuide: {
        title: "Hardware-Accelerated Compositing & WebGL Integration",
        overview: "Browser rendering engines process web pages in three consecutive phases: Layout (geometry calculation), Paint (rasterizing pixels into bitmaps), and Composite (arranging bitmap layers on the GPU). Animating layout properties (like width or top) triggers expensive re-layout cycles that bottleneck the CPU and drop frame rates. Framer's scroll transforms leverage CSS `transform` and `opacity`, which bypass layout and paint entirely, executing purely on the GPU's compositing thread for buttery-smooth 60fps motion.",
        keyPoints: [
          "**GPU Compositing Pipeline:** Restricting animations to `transform` and `opacity` prevents CPU bottlenecks and battery drain.",
          "**Sticky Scroll Pinning:** CSS `position: sticky` anchors content during user scrolling, creating narrative progression without modal popups.",
          "**WebGL Sandboxing:** Embedding interactive 3D canvases via Spline provides rich spatial depth while isolating rendering overhead from the main document thread."
        ]
      },
      learning: {
        resources: [
          {
            title: "Framer Learn: Scroll Effects & Sticky Transforms",
            url: "https://www.framer.com/learn/scroll-effects/",
            type: "Official Docs"
          },
          {
            title: "Spline 3D Documentation & Framer Integration Guide",
            url: "https://docs.spline.design/integrations/framer",
            type: "Official Docs"
          },
          {
            title: "Rive Official Documentation & Web Runtimes",
            url: "https://rive.app/community/doc/overview/docp2iqSmk47",
            type: "Official Docs"
          },
          {
            title: "Google Web.dev: High-Performance Animations & Compositing",
            url: "https://web.dev/articles/animations-guide",
            type: "Performance Standard"
          }
        ]
      }
    },

    // Node 10
    {
      id: "step-10",
      stepNumber: 10,
      phaseId: "phase-4",
      title: "Custom React Code Overrides, AI Localization & SEO Launch",
      timeEstimate: "3 hrs",
      difficulty: "Advanced",
      summary: "Write custom React code overrides with AI for dynamic data fetching, translate pages with Framer AI Localization, and optimize Core Web Vitals.",
      description: "While visual builders can achieve 90% of web design requirements, production web applications frequently require custom programmatic behavior: fetching live GitHub repository star counts, connecting to an external REST API, triggering custom analytics telemetry, or providing localized multi-language content. Framer is uniquely engineered on real React: whenever visual controls reach their limit, developers can attach custom React Code Overrides directly to visual canvas layers.\n\nUsing reasoning LLMs like Claude 3.7 Sonnet, developers can draft TypeScript code overrides that manage state hooks (`useState`, `useEffect`), listen to browser events, or connect to external backend services like Supabase or Stripe. Furthermore, Framer AI Localization enables automated multi-language translation (e.g. English, Spanish, Japanese, German) with localized routing (`/es`, `/ja`) and automatic `hreflang` tags. Completing a rigorous launch checklist—including structured JSON-LD schema, compressed OG social sharing cards, custom domain SSL provisioning, and Core Web Vitals auditing—ensures your website launches with elite performance and search engine ranking power.",
      playbook: {
        setup: "In Framer, open the 'Assets' tab in the left sidebar. Scroll down to 'Code' and click '+' to create a new Code Override file named `DynamicData.tsx`. Open your production project settings (*Settings → Staging & Versions*).",
        execute: "Write a React code override using Framer's `ComponentType` and `Override` APIs to fetch live public metrics (e.g., fetching live star count from GitHub API) and bind the returned string to a visual badge text layer. Open the 'Localization' panel in Framer: add a target locale (e.g., 'Spanish' or 'Japanese') and run Framer AI Localization to generate translated page variants with cultural nuance. Configure your SEO title, meta descriptions, and Open Graph card image under page settings. Connect your custom domain and click 'Publish'.",
        verify: "Visit the published production URL on a live device. Inspect the live data badge to verify real-time API response. Test the locale switcher to confirm seamless URL routing (`/es/pricing`) with matching translations. Run Google PageSpeed Insights to verify scores above 90 on mobile and desktop."
      },
      tools: [
        {
          name: "Framer Code Overrides",
          type: "Custom React Extension Engine",
          url: "https://www.framer.com/developers/",
          description: "TypeScript and React API in Framer enabling developers to inject custom hooks, event listeners, and API integrations into visual components.",
          bestFor: "Live data fetching, custom analytics & programmatic UI states"
        },
        {
          name: "Claude 3.7 Sonnet",
          type: "AI Code Synthesizer",
          url: "https://www.anthropic.com/claude",
          description: "Top-tier AI coding model used to generate type-safe React code overrides, custom hooks, and structured JSON-LD SEO schema.",
          bestFor: "Generating React code overrides, TypeScript debugging & schema markup"
        },
        {
          name: "Google Search Console",
          type: "Search Indexing & SEO Analytics",
          url: "https://search.google.com/search-console/about",
          description: "Google's webmaster tool for verifying sitemap.xml indexing, tracking organic impressions, and auditing Core Web Vitals.",
          bestFor: "Search engine indexing, Core Web Vitals compliance & sitemap monitoring"
        }
      ],
      callouts: {
        mistake: "Publishing a website without configuring canonical URLs and Open Graph social sharing cards, resulting in broken generic preview links when shared on X/Twitter, Slack, or LinkedIn.",
        proTip: "Framer Code Overrides allow you to attach Framer Motion `useMotionValue` and `useTransform` hooks for cursor-following spotlight effects with zero layout overhead.",
        mistakes: [
          "Writing code overrides that trigger infinite `useEffect` fetch loops, resulting in rate-limiting from third-party APIs.",
          "Using auto-translated text strings without having a native speaker review key conversion CTAs for cultural accuracy.",
          "Leaving unminified tracking scripts in the project head without async/defer attributes, severely dragging down Largest Contentful Paint (LCP)."
        ],
        proTips: [
          "Framer automatically generates an XML sitemap at `yourdomain.com/sitemap.xml`; submit this directly to Google Search Console upon launch.",
          "Inject Schema.org `SoftwareApplication` or `Organization` structured JSON-LD into the page `<head>` settings to earn rich Google search snippet stars.",
          "Enable Framer's built-in Staging branch so you can test updates on a private staging URL before pushing to the production domain."
        ]
      },
      promptLab: {
        title: "React Code Override & SEO Launch Architect",
        description: "Generate copy-ready Framer TypeScript Code Overrides and structured JSON-LD schema markup tailored to high-performance SaaS marketing sites.",
        variables: [
          {
            name: "Override Functionality",
            label: "Custom React Behavior",
            options: ["Fetch Live GitHub Stars & Active Users API", "Interactive Copy-to-Clipboard Terminal Command Pill", "Custom Dynamic Pricing Slider with Currency Converter"],
            default: "Fetch Live GitHub Stars & Active Users API"
          },
          {
            name: "SEO Schema Type",
            label: "Structured Data Markup",
            options: ["SoftwareApplication / SaaS Product", "Organization & Leadership Team", "FAQPage with Rich Accordion Results"],
            default: "SoftwareApplication / SaaS Product"
          },
          {
            name: "Target Locales",
            label: "Multi-Language Expansion",
            options: ["English (Primary) + Spanish (/es) + Japanese (/ja)", "English (Primary) + German (/de) + French (/fr)", "English Only (Single Locale)"],
            default: "English (Primary) + Spanish (/es) + Japanese (/ja)"
          }
        ],
        template: `# Framer Production React Override & Launch Blueprint
Feature: [Override Functionality]
SEO Schema: [SEO Schema Type]
Locales: [Target Locales]

Act as a Principal Full-Stack React Engineer and Technical SEO Architect.
Generate the complete production deployment assets:
1. Type-Safe React Code Override: Complete TypeScript code using Framer's \`ComponentType\` and \`Override\` APIs with clean error handling and zero-state management.
2. Structured JSON-LD SEO Schema: Complete, valid JSON-LD markup to paste into Framer Page Head Settings.
3. Pre-Launch Technical SEO Checklist: 7 critical audit checks (Core Web Vitals, canonical tags, favicon, sitemap, 301 redirects, robots.txt, 404 page).`,
        expectedOutput: `### Production Code Override & SEO Launch Package

#### 1. React TypeScript Code Override (\`DynamicData.tsx\`)
\`\`\`typescript
import type { ComponentType } from "react"
import { useState, useEffect } from "react"

// Framer Code Override: Fetches live GitHub star count with cached fallback
export function withGitHubStars(Component: ComponentType): ComponentType {
  return (props) => {
    const [stars, setStars] = useState<string>("4.8k")
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
      let isMounted = true

      async function fetchRepoData() {
        try {
          const res = await fetch("https://api.github.com/repos/useai-sh/core")
          if (!res.ok) throw new Error("API Network error")
          const data = await res.json()
          
          if (isMounted && data.stargazers_count) {
            const formatted = (data.stargazers_count / 1000).toFixed(1) + "k"
            setStars(formatted)
            setIsLoading(false)
          }
        } catch (err) {
          console.warn("Using fallback star count:", err)
          if (isMounted) setIsLoading(false)
        }
      }

      fetchRepoData()
      return () => { isMounted = false }
    }, [])

    return (
      <Component
        {...props}
        text={isLoading ? "Loading..." : \`\${stars} Stars\`}
        opacity={isLoading ? 0.7 : 1}
      />
    )
  }
}
\`\`\`

#### 2. Structured JSON-LD Schema ([SEO Schema Type])
Paste into *Page Settings → Custom Code → End of \`<head>\`*:
\`\`\`html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "useai.sh",
  "operatingSystem": "All",
  "applicationCategory": "DeveloperApplication",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "1250"
  },
  "description": "Developer-grade AI tool roadmaps, interactive code playgrounds, and production workflows."
}
</script>
\`\`\`

#### 3. Pre-Launch Technical Audit Checklist
1. **Canonical URLs**: Verify *Settings → General → Custom Domain* enforces strict \`https://\` and standardizes www or non-www.
2. **Favicon Suite**: Upload multi-resolution favicons (32x32px, 192x192px, Apple Touch Icon 180x180px).
3. **Open Graph Image**: Upload a high-contrast 1200x630px social preview image under *Page Settings → Social Image*.
4. **Custom 404 Page**: Design a dedicated 404 canvas page with a clear "Return to Homepage" CTA button.
5. **Localization Tags**: Confirm Framer generates valid \`<link rel="alternate" hreflang="es" href="https://domain.com/es" />\` tags.
6. **Core Web Vitals**: Run Google Lighthouse; confirm Largest Contentful Paint (LCP) is under 2.5s and Cumulative Layout Shift (CLS) is under 0.1.
7. **Sitemap Submission**: Submit \`https://yourdomain.com/sitemap.xml\` to Google Search Console and Bing Webmaster Tools.`
      },
      conceptGuide: {
        title: "React Runtime Extensibility & Technical SEO Indexing",
        overview: "Framer's architectural superpower lies in its underlying React foundation. While closed-source website builders restrict users to pre-packaged widgets, Framer allows arbitrary React code injection through Code Overrides and Code Components. A design technologist can visually position a hero headline, and then attach a code override that connects it to live WebSocket data streams or external REST APIs. Combined with automated search engine optimization (SSG, canonical URLs, JSON-LD), this merges high-end graphic design with enterprise software engineering.",
        keyPoints: [
          "**Pure React Architecture:** Visual layers are actual React components; Code Overrides act as higher-order components (HOCs) that inject props and state.",
          "**Automated Semantic SEO:** Framer automatically outputs clean HTML5 tags (`<header>`, `<main>`, `<footer>`, `<nav>`) and valid XML sitemaps.",
          "**Global Edge CDN Delivery:** Published sites are distributed across global Cloudflare edge networks, ensuring sub-50ms TTFB worldwide."
        ]
      },
      learning: {
        resources: [
          {
            title: "Framer Developers: Code Overrides & React API Reference",
            url: "https://www.framer.com/developers/",
            type: "Official Docs"
          },
          {
            title: "Framer Academy: Launching & Technical SEO Best Practices",
            url: "https://www.framer.com/academy/lessons/seo",
            type: "Official Tutorial"
          },
          {
            title: "Google Search Central: Structured Data (JSON-LD) Documentation",
            url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
            type: "Web Standard"
          },
          {
            title: "Chrome DevTools: Core Web Vitals & Performance Profiling",
            url: "https://developer.chrome.com/docs/devtools/performance",
            type: "Performance Guide"
          }
        ]
      }
    }
  ]
};
