// Complete production-grade steps data for "AI Product & UI/UX Designer" Roadmap (14 Nodes across 4 Phases)

export const aiProductUiUxDesignerData = {
  id: "ai-product-ui-ux-designer",
  title: "AI Product & UI/UX Designer",
  description: "Evolve from static wireframing to generative UI systems, design token automation, and direct Figma-to-code MCP handoffs.",
  category: "AI Role-Based Roadmaps",
  stepCount: 14,
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: AI-Augmented UX Research, Sitemap Architecture & Wireframing",
      description: "Supercharge qualitative research synthesis, transform raw product briefs into comprehensive sitemaps, and generate structured low-fidelity wireframes in record time."
    },
    {
      id: "phase-2",
      title: "Phase 2: Design Systems, Tokens & Generative Visual Assets",
      description: "Establish enterprise-grade semantic design tokens with Light/Dark modes, modular Auto-Layout component matrices, AI vector brand assets, and conversion-focused UX microcopy."
    },
    {
      id: "phase-3",
      title: "Phase 3: Designing AI-Native UX Patterns (Beyond the Chatbox)",
      description: "Pioneer modern AI-native interface ergonomics including keyboard-first command palettes, streaming skeleton loaders, citation attribution cards, and multimodal canvas inputs."
    },
    {
      id: "phase-4",
      title: "Phase 4: Interactive Code Prototyping & Figma-to-Code MCP Handoff",
      description: "Bridge the designer-developer divide with generative React prototyping, automated WCAG accessibility audits, and real-time Model Context Protocol (MCP) design system synchronization."
    }
  ],
  steps: [
    // =========================================================================
    // PHASE 1: AI-Augmented UX Research, Sitemap Architecture & Wireframing
    // =========================================================================

    // Node 1
    {
      id: "step-1",
      stepNumber: 1,
      phaseId: "phase-1",
      phase: "Phase 1: AI-Augmented UX Research, Sitemap Architecture & Wireframing",
      title: "Synthesizing User Interviews & Pain Points with AI",
      timeEstimate: "2.5 hrs",
      difficulty: "Beginner",
      summary: "Cluster raw user interview transcripts into evidence-backed jobs-to-be-done (JTBD) and persona matrices without hallucinating insights.",
      description: "Traditional user research synthesis requires dozens of hours manually tagging transcripts, transcribing audio, and organizing affinity maps on physical or digital whiteboards. AI-augmented research transforms this process by ingesting unstructured conversation transcripts and extracting grounded user pain points, latent motivations, and recurring behavioral friction. Rather than treating LLMs as creative writers, modern UX researchers leverage source-grounded models with strict citation constraints to guarantee that every persona trait and feature recommendation is tethered to verbatim participant timestamps.\n\nBy feeding raw transcripts into source-grounded engines like Google NotebookLM and Claude 3.7 Sonnet, designers can query user cohorts across specific segments (e.g., enterprise admins vs. casual users) without confirmation bias. Structured prompt scaffolding clusters raw feedback into Jobs-to-be-Done (JTBD) statements ('When I... I want to... So I can...') and opportunity solution trees. This eliminates hallucinated user needs and arms product designers with defensible, data-backed evidence before sketching the first wireframe.",
      playbook: {
        setup: "Gather 5–10 raw user interview transcripts in markdown, text, or VTT audio format. Clean sensitive personally identifiable information (PII) like user names and internal company URLs before uploading to your research workspace in NotebookLM or Claude Workbench.",
        execute: "Execute a multi-stage thematic clustering prompt: first, extract verbatim participant quotes categorized into Emotional Frustrations, Workflow Bottlenecks, and Desired Outcomes. Second, synthesize recurring patterns into a 4-quadrant Jobs-to-be-Done (JTBD) matrix with frequency counts. Finally, generate an empathy map with strict inline participant citations.",
        verify: "Spot-check at least 3 random claims in the generated report against the original interview transcripts. Confirm that every listed friction point contains a verifiable participant quote and that the synthesis does not invent features never mentioned by users.",
        workflow: [
          {
            step: 1,
            title: "Setup",
            description: "Gather 5–10 raw user interview transcripts in markdown, text, or VTT audio format. Clean sensitive personally identifiable information (PII) like user names and internal company URLs before uploading to your research workspace in NotebookLM or Claude Workbench."
          },
          {
            step: 2,
            title: "Execute",
            description: "Execute a multi-stage thematic clustering prompt: first, extract verbatim participant quotes categorized into Emotional Frustrations, Workflow Bottlenecks, and Desired Outcomes. Second, synthesize recurring patterns into a 4-quadrant Jobs-to-be-Done (JTBD) matrix with frequency counts. Finally, generate an empathy map with strict inline participant citations."
          },
          {
            step: 3,
            title: "Verify",
            description: "Spot-check at least 3 random claims in the generated report against the original interview transcripts. Confirm that every listed friction point contains a verifiable participant quote and that the synthesis does not invent features never mentioned by users."
          }
        ],
        recommendedTools: [
          {
            name: "Google NotebookLM",
            type: "Grounded Research Assistant",
            url: "https://notebooklm.google.com",
            description: "Source-grounded AI notebook powered by Gemini 1.5 Pro that strictly limits answers to uploaded interview transcripts with inline citations.",
            bestFor: "Zero-hallucination interview synthesis & grounded participant quote verification"
          },
          {
            name: "Claude 3.7 Sonnet",
            type: "Frontier Reasoning LLM",
            url: "https://console.anthropic.com",
            description: "Frontier reasoning model with a 200k context window capable of analyzing 50+ user interview transcripts simultaneously.",
            bestFor: "Thematic clustering, JTBD framework extraction & complex persona matrix synthesis"
          },
          {
            name: "Dovetail",
            type: "Customer Insights Hub",
            url: "https://dovetail.com",
            description: "AI-native user research repository that automatically tags transcripts, identifies themes, and builds shareable video highlight reels.",
            bestFor: "Enterprise UX research organization, tag taxonomies & stakeholder presentation"
          }
        ],
        commonMistakes: [
          "Feeding ungrounded prompts to standard chat interfaces ('What do my users want?') which causes models to hallucinate plausible-sounding but fictitious user desires.",
          "Failing to segment transcripts by user cohort (e.g., combining churned free users with paying power users), leading to contradictory design recommendations.",
          "Accepting high-level sentiment summaries without preserving verbatim quotes, stripping away the nuanced emotional vocabulary users use to describe friction."
        ],
        proShortcuts: [
          "Use NotebookLM's notebook guide feature to automatically cluster 10 transcripts into recurring thematic themes before drafting your synthesis prompt.",
          "Structure your prompt output as a JSON table with columns for 'Pain Point', 'Frequency (N=X)', 'Verbatim Quote', and 'Severity Score (1–5)'.",
          "Ask the model to identify 'Negative Space' insights: what did none of the participants mention that was originally assumed in the product requirements document?"
        ]
      },
      tools: [
        {
          name: "Google NotebookLM",
          type: "Grounded Research Assistant",
          url: "https://notebooklm.google.com",
          description: "Source-grounded AI notebook powered by Gemini 1.5 Pro that strictly limits answers to uploaded interview transcripts with inline citations.",
          bestFor: "Zero-hallucination interview synthesis & grounded participant quote verification"
        },
        {
          name: "Claude 3.7 Sonnet",
          type: "Frontier Reasoning LLM",
          url: "https://console.anthropic.com",
          description: "Frontier reasoning model with a 200k context window capable of analyzing 50+ user interview transcripts simultaneously.",
          bestFor: "Thematic clustering, JTBD framework extraction & complex persona matrix synthesis"
        },
        {
          name: "Dovetail",
          type: "Customer Insights Hub",
          url: "https://dovetail.com",
          description: "AI-native user research repository that automatically tags transcripts, identifies themes, and builds shareable video highlight reels.",
          bestFor: "Enterprise UX research organization, tag taxonomies & stakeholder presentation"
        }
      ],
      callouts: {
        mistake: "Feeding ungrounded prompts to standard chat interfaces ('What do my users want?') which causes models to hallucinate plausible-sounding but fictitious user desires.",
        proTip: "Structure your prompt output as a JSON table with columns for 'Pain Point', 'Frequency (N=X)', 'Verbatim Quote', and 'Severity Score (1–5)'.",
        mistakes: [
          "Feeding ungrounded prompts to standard chat interfaces ('What do my users want?') which causes models to hallucinate plausible-sounding but fictitious user desires.",
          "Failing to segment transcripts by user cohort (e.g., combining churned free users with paying power users), leading to contradictory design recommendations.",
          "Accepting high-level sentiment summaries without preserving verbatim quotes, stripping away the nuanced emotional vocabulary users use to describe friction."
        ],
        proTips: [
          "Use NotebookLM's notebook guide feature to automatically cluster 10 transcripts into recurring thematic themes before drafting your synthesis prompt.",
          "Structure your prompt output as a JSON table with columns for 'Pain Point', 'Frequency (N=X)', 'Verbatim Quote', and 'Severity Score (1–5)'.",
          "Ask the model to identify 'Negative Space' insights: what did none of the participants mention that was originally assumed in the product requirements document?"
        ]
      },
      promptLab: {
        title: "UX Research Thematic Synthesis & JTBD Blueprint",
        description: "Transform raw customer interview transcripts into grounded Jobs-to-be-Done statements and validated persona pain points.",
        variables: [
          {
            id: "Research Methodology",
            name: "Research Methodology",
            label: "Research Format",
            options: [
              "Semi-Structured 45-min Customer Discovery Interviews",
              "Unmoderated Usability Testing Task Recordings",
              "Churned Enterprise Account Exit Interviews"
            ],
            default: "Semi-Structured 45-min Customer Discovery Interviews",
            defaultOption: "Semi-Structured 45-min Customer Discovery Interviews"
          },
          {
            id: "Target Persona Group",
            name: "Target Persona Group",
            label: "User Cohort",
            options: [
              "B2B SaaS Power Users (Ops Managers & Team Leads)",
              "D2C Mobile Shoppers (First-time & Repeat Buyers)",
              "Developer Platform Engineers & DevOps Architects"
            ],
            default: "B2B SaaS Power Users (Ops Managers & Team Leads)",
            defaultOption: "B2B SaaS Power Users (Ops Managers & Team Leads)"
          },
          {
            id: "Synthesis Output Format",
            name: "Synthesis Output Format",
            label: "Deliverable Structure",
            options: [
              "Jobs-to-be-Done (JTBD) Matrix with Quote Citations",
              "Opportunity Solution Tree with Impact/Effort Scores",
              "Empathy Map (Says, Thinks, Does, Feels) + Friction Log"
            ],
            default: "Jobs-to-be-Done (JTBD) Matrix with Quote Citations",
            defaultOption: "Jobs-to-be-Done (JTBD) Matrix with Quote Citations"
          }
        ],
        template: `# System Role: Principal UX Researcher & Product Discovery Strategist
Input Data: [Research Methodology] conducted with [Target Persona Group].
Deliverable Target: [Synthesis Output Format].

You are analyzing unedited customer discovery transcripts. Follow strict empirical synthesis standards:
1. Grounding Rule: Every finding must include at least one verbatim quote enclosed in quotation marks with participant ID.
2. Anti-Hallucination: If an insight was mentioned by fewer than 2 participants, classify it as an "Edge Anecdote" rather than a Core Theme.
3. Jobs-to-be-Done: Format every core job as: "When [Context / Trigger], I want to [Core Motivation], So I can [Expected Outcome / Business Impact]".
4. Friction Taxonomy: Differentiate between UI Usability Bugs, Cognitive Load Overload, and Value Proposition Gaps.
5. Provide actionable UI/UX hypotheses: For each verified pain point, formulate a tangible UI exploration concept.`,
        expectedOutputs: [
          "Structured table of prioritized user pain points with verbatim quotes and frequency count",
          "Empirically grounded Jobs-to-be-Done statements free from speculative assumptions",
          "Actionable UI hypotheses directly informing sitemap and wireframe exploration"
        ],
        expectedOutput: `### Grounded UX Research Synthesis: B2B SaaS Power Users

#### 1. Core Jobs-to-be-Done (JTBD) Matrix
| ID | Trigger (When...) | Action (I want to...) | Outcome (So I can...) | Verified Frequency |
|:---|:---|:---|:---|:---|
| **JTBD-01** | Weekly team sprint planning occurs | Bulk-reassign tasks across multi-project milestones | Avoid clicking through 14 individual detail modals | Mentioned by 7 / 8 participants (87.5%) |
| **JTBD-02** | Exporting quarterly audit metrics | Generate a read-only tokenized snapshot link | Share progress with stakeholders without granting admin rights | Mentioned by 6 / 8 participants (75.0%) |

#### 2. Key Friction Point & Verbatim Evidence
- **Cognitive Load in Modal Stacking:**
  > *"Every time I need to check subtask dependencies, a third modal opens over the second one. I lose all orientation of which project I'm in."* — **Participant P-04 (Ops Director)**
- **UI Hypothesis:** Replace modal drill-downs with a persistent split-pane inspector panel or canvas sliding drawer that maintains parent workspace context.`
      },
      conceptGuide: {
        title: "Empirical UX Research Synthesis in the AI Era",
        overview: "AI-assisted qualitative synthesis bridges the gap between deep user empathy and rapid sprint cycles. By feeding unedited interview recordings and transcripts into reasoning models with strict citation constraints, designers identify non-obvious behavioral patterns without losing touch with actual user sentiment. The objective is not to outsource critical thinking to an LLM, but to automate the labor-intensive tagging and clustering phase so designers can spend more time framing generative hypotheses, designing thoughtful affordances, and validating solutions directly with users.",
        keyPoints: [
          "**Grounded Verification:** Every persona attribute and pain point must tie back to an exact participant transcript timestamp or quote.",
          "**JTBD Framing:** Structuring observations into context, motivation, and outcome prevents premature feature solutioning during discovery.",
          "**Negative Space Analysis:** AI models excel at flagging what participants did *not* say, exposing flawed assumptions in original briefs."
        ]
      },
      learning: {
        resources: [
          {
            title: "Dovetail Method: Continuous User Discovery & Thematic Clustering",
            url: "https://dovetail.com/product-discovery",
            type: "Official Methodology"
          },
          {
            title: "Anthropic Claude Guide: Processing Long-Form Research Transcripts",
            url: "https://docs.anthropic.com/en/docs/build-with-claude/overview",
            type: "Official Docs"
          },
          {
            title: "Nielsen Norman Group: AI for User Research Synthesis & Persona Creation",
            url: "https://www.nngroup.com/articles/ai-user-research/",
            type: "Research Benchmark"
          },
          {
            title: "Google NotebookLM Documentation: Source Grounding & Citation Guide",
            url: "https://support.google.com/notebooklm",
            type: "Official Guide"
          }
        ]
      },
      resources: {
        conceptGuide: {
          title: "Empirical UX Research Synthesis in the AI Era",
          overview: "AI-assisted qualitative synthesis bridges the gap between deep user empathy and rapid sprint cycles. By feeding unedited interview recordings and transcripts into reasoning models with strict citation constraints, designers identify non-obvious behavioral patterns without losing touch with actual user sentiment. The objective is not to outsource critical thinking to an LLM, but to automate the labor-intensive tagging and clustering phase so designers can spend more time framing generative hypotheses, designing thoughtful affordances, and validating solutions directly with users.",
          keyPoints: [
            "**Grounded Verification:** Every persona attribute and pain point must tie back to an exact participant transcript timestamp or quote.",
            "**JTBD Framing:** Structuring observations into context, motivation, and outcome prevents premature feature solutioning during discovery.",
            "**Negative Space Analysis:** AI models excel at flagging what participants did *not* say, exposing flawed assumptions in original briefs."
          ]
        },
        officialDocs: [
          {
            title: "Dovetail Method: Continuous User Discovery & Thematic Clustering",
            url: "https://dovetail.com/product-discovery",
            type: "Official Methodology"
          },
          {
            title: "Anthropic Claude Guide: Processing Long-Form Research Transcripts",
            url: "https://docs.anthropic.com/en/docs/build-with-claude/overview",
            type: "Official Docs"
          },
          {
            title: "Nielsen Norman Group: AI for User Research Synthesis & Persona Creation",
            url: "https://www.nngroup.com/articles/ai-user-research/",
            type: "Research Benchmark"
          },
          {
            title: "Google NotebookLM Documentation: Source Grounding & Citation Guide",
            url: "https://support.google.com/notebooklm",
            type: "Official Guide"
          }
        ]
      }
    },

    // Node 2
    {
      id: "step-2",
      stepNumber: 2,
      phaseId: "phase-1",
      phase: "Phase 1: AI-Augmented UX Research, Sitemap Architecture & Wireframing",
      title: "Information Architecture, User Flows & AI Sitemap Generation",
      timeEstimate: "3 hrs",
      difficulty: "Beginner",
      summary: "Translate product requirements into complete multi-page sitemaps and edge-case user journeys in minutes.",
      description: "Information Architecture (IA) defines the structural backbone of every digital product. In traditional workflows, defining page hierarchies, taxonomy groupings, navigation models, and branching decision trees often leads to blind spots—such as forgetting expired session redirects, payment failure flows, or permission boundary errors. AI-accelerated IA generation takes comprehensive Product Requirement Documents (PRDs) and automatically generates exhaustive sitemaps while explicitly enumerating edge-case user journeys.\n\nModern tools like Relume AI and FigJam AI allow designers to input product scopes and receive tree diagrams illustrating top-level navigation, secondary sub-pages, modal overlays, and contextual empty states. Beyond primary 'happy paths', generative AI models excel at stress-testing edge cases: What happens if an enterprise user downgrades their subscription mid-billing cycle? What occurs if an invite link expires? By mapping these scenarios into structured Mermaid diagrams or visual sitemaps before designing screens, teams eliminate costly structural rework downstream in production.",
      playbook: {
        setup: "Extract key feature requirements, core user roles, and data objects from your PRD or product spec into a clean markdown document. Open Relume or FigJam AI in your browser or Figma workspace.",
        execute: "Prompt the AI to construct a hierarchical sitemap: specify primary navigation links, nested sub-directories, contextual slide-over drawers, and permission-gated admin routes. Next, request a branching user flow diagram covering 3 critical non-happy paths: payment failure, incomplete profile onboarding, and session timeout.",
        verify: "Review the generated IA tree with engineering and product leads. Ensure that every database entity has a corresponding CRUD view and that no user path terminates in an undocumented dead end.",
        workflow: [
          {
            step: 1,
            title: "Setup",
            description: "Extract key feature requirements, core user roles, and data objects from your PRD or product spec into a clean markdown document. Open Relume or FigJam AI in your browser or Figma workspace."
          },
          {
            step: 2,
            title: "Execute",
            description: "Prompt the AI to construct a hierarchical sitemap: specify primary navigation links, nested sub-directories, contextual slide-over drawers, and permission-gated admin routes. Next, request a branching user flow diagram covering 3 critical non-happy paths: payment failure, incomplete profile onboarding, and session timeout."
          },
          {
            step: 3,
            title: "Verify",
            description: "Review the generated IA tree with engineering and product leads. Ensure that every database entity has a corresponding CRUD view and that no user path terminates in an undocumented dead end."
          }
        ],
        recommendedTools: [
          {
            name: "Relume",
            type: "AI Sitemap & Wireframe Builder",
            url: "https://www.relume.io",
            description: "Industry-standard AI site builder that generates detailed multi-page sitemaps, content architectures, and 1-click Figma wireframe systems.",
            bestFor: "Instant AI sitemap generation, section architecture & Figma sync"
          },
          {
            name: "FigJam AI",
            type: "Collaborative Whiteboard",
            url: "https://www.figma.com/figjam",
            description: "Figma's native whiteboard tool featuring generative diagramming for user journey flows, mind maps, and decision trees.",
            bestFor: "Visual team collaboration, flow diagramming & user journey mapping"
          },
          {
            name: "Whimsical",
            type: "Visual Documentation Workspace",
            url: "https://whimsical.com",
            description: "High-speed flow-charting tool with AI mind-mapping capabilities that turns raw feature ideas into intuitive branch diagrams.",
            bestFor: "Flow charts, wireframe logic diagrams & edge-case journey mapping"
          }
        ],
        commonMistakes: [
          "Focusing exclusively on the primary 'happy path' and forgetting critical edge states like 403 access forbidden, onboarding abandonment, and data deletion confirmation.",
          "Over-nesting navigation trees beyond 3 levels deep, creating severe cognitive friction and buried features for mobile and desktop users alike.",
          "Treating sitemaps as static marketing pages rather than dynamic application views with modal drawers, tabs, and contextual state views."
        ],
        proShortcuts: [
          "Use Mermaid.js syntax in your AI prompt to generate code-based flowcharts that render directly in GitHub pull requests, Notion, or FigJam.",
          "Ask the AI to audit your sitemap against Miller's Law (7 ± 2 items per menu) to prevent overwhelming top-level navigation headers.",
          "Export your Relume sitemap directly into Figma using the Relume Figma Plugin to instantly populate auto-layout wireframe shells."
        ]
      },
      tools: [
        {
          name: "Relume",
          type: "AI Sitemap & Wireframe Builder",
          url: "https://www.relume.io",
          description: "Industry-standard AI site builder that generates detailed multi-page sitemaps, content architectures, and 1-click Figma wireframe systems.",
          bestFor: "Instant AI sitemap generation, section architecture & Figma sync"
        },
        {
          name: "FigJam AI",
          type: "Collaborative Whiteboard",
          url: "https://www.figma.com/figjam",
          description: "Figma's native whiteboard tool featuring generative diagramming for user journey flows, mind maps, and decision trees.",
          bestFor: "Visual team collaboration, flow diagramming & user journey mapping"
        },
        {
          name: "Whimsical",
          type: "Visual Documentation Workspace",
          url: "https://whimsical.com",
          description: "High-speed flow-charting tool with AI mind-mapping capabilities that turns raw feature ideas into intuitive branch diagrams.",
          bestFor: "Flow charts, wireframe logic diagrams & edge-case journey mapping"
        }
      ],
      callouts: {
        mistake: "Focusing exclusively on the primary 'happy path' and forgetting critical edge states like 403 access forbidden, onboarding abandonment, and data deletion confirmation.",
        proTip: "Use Mermaid.js syntax in your AI prompt to generate code-based flowcharts that render directly in GitHub pull requests, Notion, or FigJam.",
        mistakes: [
          "Focusing exclusively on the primary 'happy path' and forgetting critical edge states like 403 access forbidden, onboarding abandonment, and data deletion confirmation.",
          "Over-nesting navigation trees beyond 3 levels deep, creating severe cognitive friction and buried features for mobile and desktop users alike.",
          "Treating sitemaps as static marketing pages rather than dynamic application views with modal drawers, tabs, and contextual state views."
        ],
        proTips: [
          "Use Mermaid.js syntax in your AI prompt to generate code-based flowcharts that render directly in GitHub pull requests, Notion, or FigJam.",
          "Ask the AI to audit your sitemap against Miller's Law (7 ± 2 items per menu) to prevent overwhelming top-level navigation headers.",
          "Export your Relume sitemap directly into Figma using the Relume Figma Plugin to instantly populate auto-layout wireframe shells."
        ]
      },
      promptLab: {
        title: "PRD-to-Information Architecture & Edge Flow Generator",
        description: "Transform an unstructured product brief into an exhaustive multi-level sitemap with non-happy path recovery trees.",
        variables: [
          {
            id: "Product Category",
            name: "Product Category",
            label: "Product Type",
            options: [
              "B2B Enterprise Workflow & Analytics Platform",
              "D2C Mobile E-Commerce & Subscription App",
              "Multi-Tenant Collaborative Workspace & Project Tool"
            ],
            default: "B2B Enterprise Workflow & Analytics Platform",
            defaultOption: "B2B Enterprise Workflow & Analytics Platform"
          },
          {
            id: "Navigation Paradigm",
            name: "Navigation Paradigm",
            label: "Nav Pattern",
            options: [
              "Collapsible Left Sidebar (240px) + Top Contextual Bar",
              "Top Navigation Header with Dropdown Mega-Menus",
              "Canvas-First Spatial Interface with Floating Command Bar"
            ],
            default: "Collapsible Left Sidebar (240px) + Top Contextual Bar",
            defaultOption: "Collapsible Left Sidebar (240px) + Top Contextual Bar"
          },
          {
            id: "Edge Case Focus",
            name: "Edge Case Focus",
            label: "Critical Friction Flow",
            options: [
              "Workspace Invitation & Role Permission Downgrades",
              "Stripe Payment Failure, Retry & Grace Period Lock",
              "Data Sync Conflict Resolution in Offline-First Mode"
            ],
            default: "Workspace Invitation & Role Permission Downgrades",
            defaultOption: "Workspace Invitation & Role Permission Downgrades"
          }
        ],
        template: `# System Role: Principal Information Architect & UX Systems Designer
Application Target: [Product Category]
Navigation Pattern: [Navigation Paradigm]
Priority Stress-Test Flow: [Edge Case Focus]

Generate an enterprise-grade Information Architecture specification:
1. Sitemap Hierarchy: Define primary navigation items, secondary sub-views, and contextual slide-overs. Maximum 3 levels of depth.
2. Section Component Breakdown: For each core screen, define header actions, data grid elements, and empty state triggers.
3. Edge-Case Journey (Mermaid Diagram): Generate a Mermaid.js flowchart mapping user progression through [Edge Case Focus], detailing decision points, warning toasts, and fallback recovery screens.
4. Information Scent & Taxonomy: Suggest URL slug structures (e.g., /org/[id]/settings/billing) ensuring clear mental models.`,
        expectedOutputs: [
          "Complete hierarchical sitemap with clear depth boundaries and URL routes",
          "Mermaid.js user flow mapping happy paths and recovery branches for edge cases",
          "Component inventory per view ready for low-fidelity wireframe translation"
        ],
        expectedOutput: `### Information Architecture Specification: B2B Enterprise Platform

#### 1. Sitemap Hierarchy & Route Mapping
\`\`\`text
├── /app/dashboard (Executive Overview: Metric Cards, Recent Activity)
├── /app/projects (Data Table View + Filter Bar)
│   ├── /app/projects/[id] (Project Canvas + Kanban / Gantt Toggle)
│   └── (Drawer) /app/projects/[id]/inspector (Properties, Subtasks, Activity Log)
└── /app/settings
    ├── /team (Member Directory, Role Matrix)
    └── /billing (Invoice History, Usage Tiers)
\`\`\`

#### 2. Mermaid Edge Flow: [Workspace Invitation & Role Downgrades]
\`\`\`mermaid
flowchart TD
    A[Admin Initiates Member Invite] --> B{Email Valid & Available?}
    B -- No --> C[Inline Validation Error: User Already in Org]
    B -- Yes --> D[Dispatch Cryptographic Token Invite]
    D --> E{Invitee Accepts within 72h?}
    E -- No --> F[Invite Marked Expired -> Option to Resend]
    E -- Yes --> G[Onboarding Modal: Set Workspace Preferences]
    G --> H[Redirect to Assigned Project Board]
\`\`\``
      },
      conceptGuide: {
        title: "Systematic Information Architecture in Modern UX",
        overview: "Information Architecture is the science of organizing content, user workflows, and navigation structures so users can find information intuitively and complete tasks with minimal cognitive overhead. In complex digital products, clean IA prevents feature bloat, reduces navigational disorientation, and establishes a predictable mental model. AI accelerates IA by rapidly extrapolating edge cases, auditing navigation depth against cognitive load thresholds, and translating product specifications into clear, developer-friendly flowcharts.",
        keyPoints: [
          "**Three-Click Depth Limit:** Key tasks and data objects should never require more than three hierarchical navigations from the dashboard.",
          "**Branching Non-Happy Paths:** Comprehensive IA accounts for session expiries, role downgrades, and sync conflicts before visual design begins.",
          "**URL Semantic Structure:** Clean REST-aligned URL taxonomies reinforce user mental models and improve navigation predictability."
        ]
      },
      learning: {
        resources: [
          {
            title: "Relume Documentation: AI Sitemap & Section Architecture Guide",
            url: "https://library.relume.io",
            type: "Official Docs"
          },
          {
            title: "Figma FigJam Guide: Mapping User Journeys & Flowcharts",
            url: "https://help.figma.com/hc/en-us/articles/14545564850967",
            type: "Official Guide"
          },
          {
            title: "Whimsical Handbook: Visual Flowcharting & Information Architecture",
            url: "https://whimsical.com/blog",
            type: "Design Guide"
          },
          {
            title: "Nielsen Norman Group: Information Architecture Principles & Guidelines",
            url: "https://www.nngroup.com/articles/ia-study-guide/",
            type: "Foundational UX"
          }
        ]
      },
      resources: {
        conceptGuide: {
          title: "Systematic Information Architecture in Modern UX",
          overview: "Information Architecture is the science of organizing content, user workflows, and navigation structures so users can find information intuitively and complete tasks with minimal cognitive overhead. In complex digital products, clean IA prevents feature bloat, reduces navigational disorientation, and establishes a predictable mental model. AI accelerates IA by rapidly extrapolating edge cases, auditing navigation depth against cognitive load thresholds, and translating product specifications into clear, developer-friendly flowcharts.",
          keyPoints: [
            "**Three-Click Depth Limit:** Key tasks and data objects should never require more than three hierarchical navigations from the dashboard.",
            "**Branching Non-Happy Paths:** Comprehensive IA accounts for session expiries, role downgrades, and sync conflicts before visual design begins.",
            "**URL Semantic Structure:** Clean REST-aligned URL taxonomies reinforce user mental models and improve navigation predictability."
          ]
        },
        officialDocs: [
          {
            title: "Relume Documentation: AI Sitemap & Section Architecture Guide",
            url: "https://library.relume.io",
            type: "Official Docs"
          },
          {
            title: "Figma FigJam Guide: Mapping User Journeys & Flowcharts",
            url: "https://help.figma.com/hc/en-us/articles/14545564850967",
            type: "Official Guide"
          },
          {
            title: "Whimsical Handbook: Visual Flowcharting & Information Architecture",
            url: "https://whimsical.com/blog",
            type: "Design Guide"
          },
          {
            title: "Nielsen Norman Group: Information Architecture Principles & Guidelines",
            url: "https://www.nngroup.com/articles/ia-study-guide/",
            type: "Foundational UX"
          }
        ]
      }
    },

    // Node 3
    {
      id: "step-3",
      stepNumber: 3,
      phaseId: "phase-1",
      phase: "Phase 1: AI-Augmented UX Research, Sitemap Architecture & Wireframing",
      title: "Rapid Low-Fidelity Wireframing & Layout Exploration",
      timeEstimate: "3 hrs",
      difficulty: "Intermediate",
      summary: "Generate structured, unstyled wireframe flows to validate information hierarchy before committing to visual styling.",
      description: "Jumping directly into high-fidelity visual design is one of the most common anti-patterns in product design. When screens are rendered in full color with polished typography and custom illustrations, stakeholders and developers instinctively critique visual aesthetics rather than assessing core information hierarchy, button placements, and task completion velocity. Low-fidelity wireframing acts as the conceptual stress test: it strips away brand styling to focus entirely on layout balance, content density, and functional utility.\n\nAI tools like the Relume Figma Kit and UX Pilot dramatically accelerate wireframing by generating fully responsive, unstyled Auto-Layout components directly inside Figma. Instead of manually drawing gray boxes, designers prompt generative layout assistants to assemble responsive page sections—such as hero blocks, filterable data tables, metric dashboards, and multi-step checkout forms. This allows teams to iterate through 5 distinct spatial layouts in the time it previously took to draft one, aligning product stakeholders on functional flow before opening color palettes.",
      playbook: {
        setup: "Install the Relume or UX Pilot plugin inside Figma. Create a dedicated `Wireframes / Low-Fi` page in your Figma workspace configured with an 8pt layout grid (12-column desktop, 4-column mobile).",
        execute: "Input your verified sitemap sections into the AI wireframing generator. Generate 3 layout variations for the primary dashboard and detail views: a dense data-table layout, a modular card grid layout, and a master-detail split screen. Ensure all generated components utilize pure Figma Auto-Layout (`Shift + A`).",
        verify: "Conduct a 5-second squint test on each generated wireframe: confirm that primary call-to-action buttons have distinct spatial weight, that visual reading order follows an intuitive F-shaped or Z-shaped scan pattern, and that no Lorem Ipsum obscures real data requirements.",
        workflow: [
          {
            step: 1,
            title: "Setup",
            description: "Install the Relume or UX Pilot plugin inside Figma. Create a dedicated `Wireframes / Low-Fi` page in your Figma workspace configured with an 8pt layout grid (12-column desktop, 4-column mobile)."
          },
          {
            step: 2,
            title: "Execute",
            description: "Input your verified sitemap sections into the AI wireframing generator. Generate 3 layout variations for the primary dashboard and detail views: a dense data-table layout, a modular card grid layout, and a master-detail split screen. Ensure all generated components utilize pure Figma Auto-Layout (`Shift + A`)."
          },
          {
            step: 3,
            title: "Verify",
            description: "Conduct a 5-second squint test on each generated wireframe: confirm that primary call-to-action buttons have distinct spatial weight, that visual reading order follows an intuitive F-shaped or Z-shaped scan pattern, and that no Lorem Ipsum obscures real data requirements."
          }
        ],
        recommendedTools: [
          {
            name: "Relume Figma Kit",
            type: "Figma Component Library",
            url: "https://www.relume.io/figma",
            description: "Massive library of 1,000+ unstyled, perfectly structured Auto-Layout wireframe components mapped to Webflow and React.",
            bestFor: "Production-ready Auto-Layout wireframing & rapid layout assembly"
          },
          {
            name: "Figma",
            type: "Collaborative Interface Design",
            url: "https://www.figma.com",
            description: "The premier collaborative interface design environment with native Auto-Layout, component properties, and layout grids.",
            bestFor: "Interface layout composition, responsive grids & interactive wireframing"
          },
          {
            name: "UX Pilot",
            type: "AI Wireframing Assistant",
            url: "https://uxpilot.ai",
            description: "AI-powered UX assistant that generates structured layout ideas, screen wireframes, and UX copy from plain text requirements.",
            bestFor: "Ideation variations, spatial layout brainstorming & screen generation"
          }
        ],
        commonMistakes: [
          "Applying colors, high-contrast shadows, or brand logos during the wireframe phase, which distracts reviewers from structural flaws and flow bottlenecks.",
          "Creating rigid static frames without responsive Figma Auto-Layout constraints, requiring manual rebuilding when testing mobile breakpoints.",
          "Using generic placeholder rectangles instead of realistic UI controls (e.g., using a gray box instead of showing search inputs, badges, and pagination)."
        ],
        proShortcuts: [
          "Use a strict grayscale monochrome palette (#FFFFFF, #F1F5F9, #94A3B8, #0F172A) during wireframing to preserve pure focus on structural hierarchy.",
          "Group related components using Auto-Layout with standardized spacing tokens (gap: 8px, 16px, 24px, 32px) matching engineering Tailwind values.",
          "Link wireframe screens into a lightweight clickable Figma prototype to test navigation feel before investing time in typography and tokens."
        ]
      },
      tools: [
        {
          name: "Relume Figma Kit",
          type: "Figma Component Library",
          url: "https://www.relume.io/figma",
          description: "Massive library of 1,000+ unstyled, perfectly structured Auto-Layout wireframe components mapped to Webflow and React.",
          bestFor: "Production-ready Auto-Layout wireframing & rapid layout assembly"
        },
        {
          name: "Figma",
          type: "Collaborative Interface Design",
          url: "https://www.figma.com",
          description: "The premier collaborative interface design environment with native Auto-Layout, component properties, and layout grids.",
          bestFor: "Interface layout composition, responsive grids & interactive wireframing"
        },
        {
          name: "UX Pilot",
          type: "AI Wireframing Assistant",
          url: "https://uxpilot.ai",
          description: "AI-powered UX assistant that generates structured layout ideas, screen wireframes, and UX copy from plain text requirements.",
          bestFor: "Ideation variations, spatial layout brainstorming & screen generation"
        }
      ],
      callouts: {
        mistake: "Applying colors, high-contrast shadows, or brand logos during the wireframe phase, which distracts reviewers from structural flaws and flow bottlenecks.",
        proTip: "Use a strict grayscale monochrome palette (#FFFFFF, #F1F5F9, #94A3B8, #0F172A) during wireframing to preserve pure focus on structural hierarchy.",
        mistakes: [
          "Applying colors, high-contrast shadows, or brand logos during the wireframe phase, which distracts reviewers from structural flaws and flow bottlenecks.",
          "Creating rigid static frames without responsive Figma Auto-Layout constraints, requiring manual rebuilding when testing mobile breakpoints.",
          "Using generic placeholder rectangles instead of realistic UI controls (e.g., using a gray box instead of showing search inputs, badges, and pagination)."
        ],
        proTips: [
          "Use a strict grayscale monochrome palette (#FFFFFF, #F1F5F9, #94A3B8, #0F172A) during wireframing to preserve pure focus on structural hierarchy.",
          "Group related components using Auto-Layout with standardized spacing tokens (gap: 8px, 16px, 24px, 32px) matching engineering Tailwind values.",
          "Link wireframe screens into a lightweight clickable Figma prototype to test navigation feel before investing time in typography and tokens."
        ]
      },
      promptLab: {
        title: "Wireframe Layout Architecture & Spatial Hierarchy Prompt",
        description: "Generate structured, component-level wireframe layouts optimized for responsive flexbox implementation.",
        variables: [
          {
            id: "Screen Context",
            name: "Screen Context",
            label: "Screen Purpose",
            options: [
              "Analytics Performance Dashboard with Filter Bar",
              "Multi-Step SaaS Onboarding & Team Provisioning Flow",
              "Enterprise Data Grid with Bulk Actions & Slide Drawer"
            ],
            default: "Enterprise Data Grid with Bulk Actions & Slide Drawer",
            defaultOption: "Enterprise Data Grid with Bulk Actions & Slide Drawer"
          },
          {
            id: "Layout Density",
            name: "Layout Density",
            label: "UI Density",
            options: [
              "High-Density Enterprise (Compact rows, 32px heights, utilitarian)",
              "Balanced Modern SaaS (Standard 44px touch targets, comfortable padding)",
              "Spacious Consumer (Large card grids, ample whitespace, visual emphasis)"
            ],
            default: "High-Density Enterprise (Compact rows, 32px heights, utilitarian)",
            defaultOption: "High-Density Enterprise (Compact rows, 32px heights, utilitarian)"
          },
          {
            id: "Primary Interaction Model",
            name: "Primary Interaction Model",
            label: "Core Action",
            options: [
              "Split-Pane Master Detail (List on left, inspector on right)",
              "Modal Dialog Centered Confirmation Stack",
              "Inline Expandable Table Rows with Nested Metrics"
            ],
            default: "Split-Pane Master Detail (List on left, inspector on right)",
            defaultOption: "Split-Pane Master Detail (List on left, inspector on right)"
          }
        ],
        template: `# System Role: Senior UI/UX Architect & Wireframe Specialist
Target Screen: [Screen Context]
Information Density: [Layout Density]
Interaction Pattern: [Primary Interaction Model]

Specify the exact wireframe structural layout for Figma implementation:
1. Spatial Layout Hierarchy: Define header bar height, sidebar width, canvas padding, and content column structure using an 8pt grid.
2. Component Inventory & Auto-Layout Rules: Specify layout direction (horizontal vs vertical), resizing constraints (fill container vs hug contents), and gap values between UI primitives.
3. Content Scaffolding: List the exact text labels, button labels, badge states, and table columns required—strictly avoiding 'Lorem Ipsum'.
4. Empty & Loading States: Detail how the wireframe adapts when zero records exist or data is fetching.`,
        expectedOutputs: [
          "Clear spatial blueprint with 8pt grid measurements and layout constraints",
          "Component inventory detailing nested Auto-Layout structures",
          "Realistic, production-aligned wireframe copy for all primary and empty states"
        ],
        expectedOutput: `### Wireframe Blueprint: Enterprise Data Grid Split-Pane

#### 1. Spatial Layout Grid (Desktop: 1440px)
- **Left Navigation**: Fixed 240px width (Border-right: 1px #E2E8F0)
- **Top Context Bar**: Height 56px, horizontal padding 24px (Border-bottom: 1px #E2E8F0)
- **Main Canvas (Split)**:
  - **Data Table Panel**: Fill Container (min-width 700px), Auto-Layout Vertical, gap: 16px
  - **Inspector Slide-Over**: Fixed 420px width, sticky right, Auto-Layout Vertical, padding: 24px

#### 2. Component Auto-Layout Specifications
- **Action Toolbar**: \`Auto-Layout Horizontal\`, \`Space-Between\`, \`align: Center\`
  - Left: Search input (width: 280px) + Filter chip group (gap: 8px)
  - Right: Export CSV button (Ghost) + "+ New Entity" button (Primary)
- **Data Table Header**: Height 36px, font-size: 12px uppercase font-weight: 600, background: #F8FAFC
- **Row Anatomy**: Height 40px, checkbox (16px), Title (Fill), Status Badge (Hug), Last Edited (120px), Actions (32px)`
      },
      conceptGuide: {
        title: "The Discipline of Low-Fidelity Wireframing",
        overview: "Low-fidelity wireframing is the cornerstone of intentional interface architecture. By intentionally withholding color, typography styling, and decorative visual polish, designers and stakeholders are forced to evaluate the core mechanics of usability: spatial proximity, visual hierarchy, reading order, and functional density. AI tools accelerate this phase by generating balanced Auto-Layout component arrangements that map directly to modern web flexbox containers, ensuring that early wireframe explorations translate cleanly into responsive code.",
        keyPoints: [
          "**Content-First Structure:** Realistic UI labels and data lengths prevent unexpected layout breakage when real data replaces wireframes.",
          "**Auto-Layout from Day One:** Constructing wireframes with responsive Figma constraints ensures effortless transition to high-fidelity design.",
          "**Aesthetic Deprivation:** Restricting visual styling to monochrome grayscale ensures stakeholder feedback focuses purely on functional workflow."
        ]
      },
      learning: {
        resources: [
          {
            title: "Figma Guide: Auto Layout Constraints & Responsive Wireframing",
            url: "https://help.figma.com/hc/en-us/articles/360040451373",
            type: "Official Docs"
          },
          {
            title: "Relume Component Library: Webflow & Figma Wireframe Guidelines",
            url: "https://library.relume.io/figma",
            type: "Official Library"
          },
          {
            title: "UX Pilot: AI-Powered Layout Exploration & UI Blueprinting",
            url: "https://uxpilot.ai/blog",
            type: "Tool Guide"
          },
          {
            title: "Nielsen Norman Group: Wireframing Essentials & Usability Testing",
            url: "https://www.nngroup.com/articles/wireframing-201/",
            type: "Research Benchmark"
          }
        ]
      },
      resources: {
        conceptGuide: {
          title: "The Discipline of Low-Fidelity Wireframing",
          overview: "Low-fidelity wireframing is the cornerstone of intentional interface architecture. By intentionally withholding color, typography styling, and decorative visual polish, designers and stakeholders are forced to evaluate the core mechanics of usability: spatial proximity, visual hierarchy, reading order, and functional density. AI tools accelerate this phase by generating balanced Auto-Layout component arrangements that map directly to modern web flexbox containers, ensuring that early wireframe explorations translate cleanly into responsive code.",
          keyPoints: [
            "**Content-First Structure:** Realistic UI labels and data lengths prevent unexpected layout breakage when real data replaces wireframes.",
            "**Auto-Layout from Day One:** Constructing wireframes with responsive Figma constraints ensures effortless transition to high-fidelity design.",
            "**Aesthetic Deprivation:** Restricting visual styling to monochrome grayscale ensures stakeholder feedback focuses purely on functional workflow."
          ]
        },
        officialDocs: [
          {
            title: "Figma Guide: Auto Layout Constraints & Responsive Wireframing",
            url: "https://help.figma.com/hc/en-us/articles/360040451373",
            type: "Official Docs"
          },
          {
            title: "Relume Component Library: Webflow & Figma Wireframe Guidelines",
            url: "https://library.relume.io/figma",
            type: "Official Library"
          },
          {
            title: "UX Pilot: AI-Powered Layout Exploration & UI Blueprinting",
            url: "https://uxpilot.ai/blog",
            type: "Tool Guide"
          },
          {
            title: "Nielsen Norman Group: Wireframing Essentials & Usability Testing",
            url: "https://www.nngroup.com/articles/wireframing-201/",
            type: "Research Benchmark"
          }
        ]
      }
    },

    // =========================================================================
    // PHASE 2: Design Systems, Tokens & Generative Visual Assets
    // =========================================================================

    // Node 4
    {
      id: "step-4",
      stepNumber: 4,
      phaseId: "phase-2",
      phase: "Phase 2: Design Systems, Tokens & Generative Visual Assets",
      title: "Semantic Design Tokens, Color Scales & Variable Modes",
      timeEstimate: "3.5 hrs",
      difficulty: "Intermediate",
      summary: "Architect primitive and semantic color, spacing, and typography tokens for instant Light/Dark theme parity.",
      description: "A professional design system is not a collection of pretty Figma frames; it is an interconnected engine of mathematical variables and semantic design tokens. Historically, hardcoding hex values like `#3B82F6` across hundreds of components created maintenance nightmares and made dark mode an afterthought that took weeks to refactor. Modern AI-native product design establishes a two-tiered token architecture: **Primitive Tokens** that define raw brand values (e.g., `blue-500: #3B82F6`), and **Semantic Tokens** that define functional intent (e.g., `surface-accent-primary`, `border-subtle`, `text-muted`).\n\nBy leveraging Figma Variables with Variable Modes alongside systems like Radix Colors and Tokens Studio, designers can switch an entire multi-screen application from Light mode to Dark mode with a single click. Furthermore, design tokens align 1:1 with developer CSS custom properties (`var(--color-surface-bg)`) or Tailwind utility classes. Using LLMs to structure token JSON schemas guarantees zero missing aliases, mathematically verified contrast ratios across both themes, and automated code handoff via Style Dictionary.",
      playbook: {
        setup: "Open your master Figma design system library. Create a new Variable Collection named `Color Tokens` with two modes: `Light` and `Dark`. Install the Tokens Studio plugin if synchronizing tokens with GitHub.",
        execute: "Define a 12-step perceptual color scale using Radix Colors principles (steps 1–2: backgrounds; steps 3–5: component surfaces; steps 6–8: borders; steps 9–10: solid accents; steps 11–12: high-contrast text). Map semantic tokens (`surface-primary`, `surface-elevated`, `border-default`, `text-main`) to primitive color values across both Light and Dark modes.",
        verify: "Apply your semantic tokens to a complex dashboard frame. Toggle the Figma Variable Mode from `Light` to `Dark`. Verify that background surfaces darken appropriately, text maintains at least 4.5:1 WCAG contrast, and interactive borders remain visible.",
        workflow: [
          {
            step: 1,
            title: "Setup",
            description: "Open your master Figma design system library. Create a new Variable Collection named `Color Tokens` with two modes: `Light` and `Dark`. Install the Tokens Studio plugin if synchronizing tokens with GitHub."
          },
          {
            step: 2,
            title: "Execute",
            description: "Define a 12-step perceptual color scale using Radix Colors principles (steps 1–2: backgrounds; steps 3–5: component surfaces; steps 6–8: borders; steps 9–10: solid accents; steps 11–12: high-contrast text). Map semantic tokens (`surface-primary`, `surface-elevated`, `border-default`, `text-main`) to primitive color values across both Light and Dark modes."
          },
          {
            step: 3,
            title: "Verify",
            description: "Apply your semantic tokens to a complex dashboard frame. Toggle the Figma Variable Mode from `Light` to `Dark`. Verify that background surfaces darken appropriately, text maintains at least 4.5:1 WCAG contrast, and interactive borders remain visible."
          }
        ],
        recommendedTools: [
          {
            name: "Figma Variables",
            type: "Native Token Management",
            url: "https://help.figma.com/hc/en-us/articles/15339657135383",
            description: "Native Figma engine supporting color, number, string, and boolean variables with multi-mode Light/Dark theme switching.",
            bestFor: "Design token architecture, multi-mode theming & component variable binding"
          },
          {
            name: "Radix Colors",
            type: "Accessible Color System",
            url: "https://www.radix-ui.com/colors",
            description: "An accessible 12-step color system specifically designed for building modern UI components with automatic dark mode harmony.",
            bestFor: "Accessible 12-step perceptual color scales & contrast-verified palettes"
          },
          {
            name: "Tokens Studio",
            type: "Design Token Sync Plugin",
            url: "https://tokens.studio",
            description: "Industry-standard Figma plugin connecting design tokens to GitHub repositories and Style Dictionary pipelines.",
            bestFor: "Figma-to-code token synchronization & multi-brand design systems"
          }
        ],
        commonMistakes: [
          "Binding primitive tokens directly to components (e.g., setting a button directly to `gray-900`) instead of semantic tokens (`surface-inverse`), breaking theme switching.",
          "Inverting pure black (#000000) and pure white (#FFFFFF) for dark mode, which creates eye fatigue and harsh visual contrast compared to subtle dark slate (#0B0F19).",
          "Forgetting to tokenize border opacities and focus rings, resulting in invisible input boundaries when switching into dark mode."
        ],
        proShortcuts: [
          "Follow the 12-step Radix color philosophy: reserve steps 1–2 for backgrounds, 3–5 for interactive surfaces, 6–8 for borders, 9–10 for solid accents, and 11–12 for text.",
          "Use Claude 3.7 to generate complete W3C Design Token JSON files that can be imported directly into Tokens Studio and exported to Tailwind CSS.",
          "Bind numeric variables to spacing, radii, and min-heights (radius-sm: 4px, radius-md: 8px, radius-lg: 12px) to guarantee unified component proportions."
        ]
      },
      tools: [
        {
          name: "Figma Variables",
          type: "Native Token Management",
          url: "https://help.figma.com/hc/en-us/articles/15339657135383",
          description: "Native Figma engine supporting color, number, string, and boolean variables with multi-mode Light/Dark theme switching.",
          bestFor: "Design token architecture, multi-mode theming & component variable binding"
        },
        {
          name: "Radix Colors",
          type: "Accessible Color System",
          url: "https://www.radix-ui.com/colors",
          description: "An accessible 12-step color system specifically designed for building modern UI components with automatic dark mode harmony.",
          bestFor: "Accessible 12-step perceptual color scales & contrast-verified palettes"
        },
        {
          name: "Tokens Studio",
          type: "Design Token Sync Plugin",
          url: "https://tokens.studio",
          description: "Industry-standard Figma plugin connecting design tokens to GitHub repositories and Style Dictionary pipelines.",
          bestFor: "Figma-to-code token synchronization & multi-brand design systems"
        }
      ],
      callouts: {
        mistake: "Binding primitive tokens directly to components (e.g., setting a button directly to `gray-900`) instead of semantic tokens (`surface-inverse`), breaking theme switching.",
        proTip: "Follow the 12-step Radix color philosophy: reserve steps 1–2 for backgrounds, 3–5 for interactive surfaces, 6–8 for borders, 9–10 for solid accents, and 11–12 for text.",
        mistakes: [
          "Binding primitive tokens directly to components (e.g., setting a button directly to `gray-900`) instead of semantic tokens (`surface-inverse`), breaking theme switching.",
          "Inverting pure black (#000000) and pure white (#FFFFFF) for dark mode, which creates eye fatigue and harsh visual contrast compared to subtle dark slate (#0B0F19).",
          "Forgetting to tokenize border opacities and focus rings, resulting in invisible input boundaries when switching into dark mode."
        ],
        proTips: [
          "Follow the 12-step Radix color philosophy: reserve steps 1–2 for backgrounds, 3–5 for interactive surfaces, 6–8 for borders, 9–10 for solid accents, and 11–12 for text.",
          "Use Claude 3.7 to generate complete W3C Design Token JSON files that can be imported directly into Tokens Studio and exported to Tailwind CSS.",
          "Bind numeric variables to spacing, radii, and min-heights (radius-sm: 4px, radius-md: 8px, radius-lg: 12px) to guarantee unified component proportions."
        ]
      },
      promptLab: {
        title: "Semantic Design Token & Multi-Mode Matrix Architect",
        description: "Generate an enterprise design token schema in W3C format with Light and Dark mode mappings.",
        variables: [
          {
            id: "Brand Personality",
            name: "Brand Personality",
            label: "Aesthetic Direction",
            options: [
              "Linear Utilitarian Slate (Zinc, Deep Charcoal, Electric Indigo #6366F1)",
              "Modern Fintech Emerald (Warm Slate, Deep Forest, Emerald #10B981)",
              "Cyberpunk Developer High-Contrast (Pure Jet, Neon Violet #7C3AED, Acid Lime)"
            ],
            default: "Linear Utilitarian Slate (Zinc, Deep Charcoal, Electric Indigo #6366F1)",
            defaultOption: "Linear Utilitarian Slate (Zinc, Deep Charcoal, Electric Indigo #6366F1)"
          },
          {
            id: "Token Framework Target",
            name: "Token Framework Target",
            label: "Export Format",
            options: [
              "Figma Variables Collection (Primitive + Semantic Alias Mapping)",
              "Tailwind CSS v4 @theme CSS Variables Configuration",
              "Tokens Studio W3C Standard JSON Design Tokens"
            ],
            default: "Figma Variables Collection (Primitive + Semantic Alias Mapping)",
            defaultOption: "Figma Variables Collection (Primitive + Semantic Alias Mapping)"
          },
          {
            id: "Contrast Compliance Level",
            name: "Contrast Compliance Level",
            label: "Accessibility Target",
            options: [
              "WCAG 2.2 Level AA (4.5:1 Text, 3:1 Interactive Elements)",
              "WCAG 2.2 Level AAA (7:1 Text, 4.5:1 High-Security / Gov)",
              "Enhanced Low-Vision High-Legibility Mode"
            ],
            default: "WCAG 2.2 Level AA (4.5:1 Text, 3:1 Interactive Elements)",
            defaultOption: "WCAG 2.2 Level AA (4.5:1 Text, 3:1 Interactive Elements)"
          }
        ],
        template: `# System Role: Principal Design Systems Engineer & Token Architect
Brand Aesthetic: [Brand Personality]
Target Token Schema: [Token Framework Target]
Accessibility Bar: [Contrast Compliance Level]

Generate a production design token architecture:
1. Primitive Scales: Define 12-step scales for Neutral (Slate/Zinc) and Primary Accent with hex values.
2. Semantic Aliases: Map semantic tokens for both 'Light Mode' and 'Dark Mode':
   - Backgrounds: \`bg-app\`, \`bg-surface\`, \`bg-surface-elevated\`
   - Borders: \`border-subtle\`, \`border-default\`, \`border-active\`
   - Text: \`text-primary\`, \`text-muted\`, \`text-inverse\`
3. Contrast Audit: Validate mathematically that text tokens pass [Contrast Compliance Level] against their corresponding background tokens.
4. Provide structured JSON ready for automated import.`,
        expectedOutputs: [
          "Complete primitive 12-step color scale in HSL or Hex values",
          "Semantic token alias table mapping Light mode and Dark mode values",
          "Valid JSON conforming to W3C Community Group Design Token specification"
        ],
        expectedOutput: `### Semantic Design Token Architecture: Linear Utilitarian

\`\`\`json
{
  "semantic": {
    "surface": {
      "app": {
        "light": { "$value": "#F8FAFC", "$type": "color" },
        "dark": { "$value": "#0B0F17", "$type": "color" }
      },
      "card": {
        "light": { "$value": "#FFFFFF", "$type": "color" },
        "dark": { "$value": "#111827", "$type": "color" }
      }
    },
    "border": {
      "subtle": {
        "light": { "$value": "#E2E8F0", "$type": "color" },
        "dark": { "$value": "#1F2937", "$type": "color" }
      },
      "accent": {
        "light": { "$value": "#6366F1", "$type": "color" },
        "dark": { "$value": "#818CF8", "$type": "color" }
      }
    },
    "text": {
      "primary": {
        "light": { "$value": "#0F172A", "$type": "color" },
        "dark": { "$value": "#F8FAFC", "$type": "color" }
      },
      "muted": {
        "light": { "$value": "#64748B", "$type": "color" },
        "dark": { "$value": "#94A3B8", "$type": "color" }
      }
    }
  }
}
\`\`\``
      },
      conceptGuide: {
        title: "The Architecture of Semantic Design Tokens",
        overview: "Design tokens are the fundamental building blocks of modern scalable user interfaces. By separating raw primitive values (such as a specific hex code or pixel measurement) from semantic intent (such as the default background of an elevated card), tokens establish a common design vocabulary between Figma and production codebases. This decoupling allows product organizations to implement seamless dark mode theming, white-label branding, and multi-platform consistency without manual pixel refactoring.",
        keyPoints: [
          "**Primitives vs Semantics:** Primitives describe what a value is (#3B82F6); semantics describe what a value does (surface-accent).",
          "**1:1 Code Synchronization:** Semantic tokens map directly to CSS custom properties and Tailwind tokens for zero-friction handoff.",
          "**Mode Switching Velocity:** Variable modes allow entire application screens to re-theme dynamically without duplicating component frames."
        ]
      },
      learning: {
        resources: [
          {
            title: "Figma Help Center: Overview of Variables, Collections & Modes",
            url: "https://help.figma.com/hc/en-us/articles/15339657135383",
            type: "Official Docs"
          },
          {
            title: "Radix UI: Colors System & Accessible Perceptual Scales",
            url: "https://www.radix-ui.com/colors",
            type: "Official Specification"
          },
          {
            title: "Tokens Studio: Managing Multi-File Design Tokens in Figma",
            url: "https://docs.tokens.studio",
            type: "Official Docs"
          },
          {
            title: "W3C Design Tokens Community Group: Token Specification Format",
            url: "https://design-tokens.github.io/community-group/format/",
            type: "Industry Standard"
          }
        ]
      },
      resources: {
        conceptGuide: {
          title: "The Architecture of Semantic Design Tokens",
          overview: "Design tokens are the fundamental building blocks of modern scalable user interfaces. By separating raw primitive values (such as a specific hex code or pixel measurement) from semantic intent (such as the default background of an elevated card), tokens establish a common design vocabulary between Figma and production codebases. This decoupling allows product organizations to implement seamless dark mode theming, white-label branding, and multi-platform consistency without manual pixel refactoring.",
          keyPoints: [
            "**Primitives vs Semantics:** Primitives describe what a value is (#3B82F6); semantics describe what a value does (surface-accent).",
            "**1:1 Code Synchronization:** Semantic tokens map directly to CSS custom properties and Tailwind tokens for zero-friction handoff.",
            "**Mode Switching Velocity:** Variable modes allow entire application screens to re-theme dynamically without duplicating component frames."
          ]
        },
        officialDocs: [
          {
            title: "Figma Help Center: Overview of Variables, Collections & Modes",
            url: "https://help.figma.com/hc/en-us/articles/15339657135383",
            type: "Official Docs"
          },
          {
            title: "Radix UI: Colors System & Accessible Perceptual Scales",
            url: "https://www.radix-ui.com/colors",
            type: "Official Specification"
          },
          {
            title: "Tokens Studio: Managing Multi-File Design Tokens in Figma",
            url: "https://docs.tokens.studio",
            type: "Official Docs"
          },
          {
            title: "W3C Design Tokens Community Group: Token Specification Format",
            url: "https://design-tokens.github.io/community-group/format/",
            type: "Industry Standard"
          }
        ]
      }
    },

    // Node 5
    {
      id: "step-5",
      stepNumber: 5,
      phaseId: "phase-2",
      phase: "Phase 2: Design Systems, Tokens & Generative Visual Assets",
      title: "Component Architecture, Auto-Layout & Variant Matrices",
      timeEstimate: "4 hrs",
      difficulty: "Intermediate",
      summary: "Build resilient, flexbox-aligned component libraries with interactive states (default, hover, focus, disabled, loading).",
      description: "A component library is the production backbone of any scalable product team. In naive designs, buttons, inputs, and dropdowns are created with arbitrary absolute positioning, meaning that when label text expands or translates into German, components visually shatter. In high-caliber AI product design, every component is architected as an Auto-Layout flex container mirroring web layout standards (`flex-direction: row`, `align-items: center`, `gap: 8px`).\n\nModern component architecture utilizes Figma **Component Properties** (Boolean, Text, Instance Swap, and Variant properties) to minimize component maintenance overhead. Rather than maintaining 40 separate frames for a single button, designers construct unified variant matrices covering sizes (`sm`, `md`, `lg`), visual hierarchy (`primary`, `secondary`, `ghost`, `destructive`), and interactive states (`default`, `hover`, `focus`, `disabled`, `loading`). Basing systems on open-source standards like shadcn/ui and Phosphor Icons ensures instant translation into clean React code.",
      playbook: {
        setup: "Open your master Figma design system file. Set up an Auto-Layout component frame grid. Import the Phosphor Icons library (or Lucide) and convert all icons into single master components with normalized 24x24 bounding boxes.",
        execute: "Build a master Button component with Auto-Layout. Create properties: `Variant` (Primary, Secondary, Outline, Ghost), `Size` (sm: 32px, md: 40px, lg: 48px), and `State` (Default, Hover, Active, Focus, Disabled, Loading). Add boolean properties `showLeftIcon` and `showRightIcon` with instance swap controls.",
        verify: "Instantiate the button across a test frame. Test edge cases: insert a 60-character label to verify horizontal auto-expansion, toggle `Loading` state to verify spinner alignment, and switch Figma themes to verify token inheritance.",
        workflow: [
          {
            step: 1,
            title: "Setup",
            description: "Open your master Figma design system file. Set up an Auto-Layout component frame grid. Import the Phosphor Icons library (or Lucide) and convert all icons into single master components with normalized 24x24 bounding boxes."
          },
          {
            step: 2,
            title: "Execute",
            description: "Build a master Button component with Auto-Layout. Create properties: `Variant` (Primary, Secondary, Outline, Ghost), `Size` (sm: 32px, md: 40px, lg: 48px), and `State` (Default, Hover, Active, Focus, Disabled, Loading). Add boolean properties `showLeftIcon` and `showRightIcon` with instance swap controls."
          },
          {
            step: 3,
            title: "Verify",
            description: "Instantiate the button across a test frame. Test edge cases: insert a 60-character label to verify horizontal auto-expansion, toggle `Loading` state to verify spinner alignment, and switch Figma themes to verify token inheritance."
          }
        ],
        recommendedTools: [
          {
            name: "Figma Auto-Layout",
            type: "Layout Engine",
            url: "https://help.figma.com/hc/en-us/articles/360040451373",
            description: "Figma's native flexbox layout system that automatically resizes components based on content and container bounds.",
            bestFor: "Flexbox-aligned components, padding tokens & responsive layout cards"
          },
          {
            name: "shadcn/ui Figma Kit",
            type: "Open-Source UI Architecture",
            url: "https://ui.shadcn.com",
            description: "The gold standard open-source component library, featuring Radix primitives and Tailwind styling replicated faithfully in Figma.",
            bestFor: "Production-ready accessible components & seamless engineering parity"
          },
          {
            name: "Phosphor Icons",
            type: "Icon Family System",
            url: "https://phosphoricons.com",
            description: "A flexible icon system with 1,200+ icons available across 6 consistent weights (Thin, Light, Regular, Bold, Fill, Duotone).",
            bestFor: "Standardized 24x24 icon components & multi-weight UI actions"
          }
        ],
        commonMistakes: [
          "Creating duplicate variants for tiny variations (e.g., 'Button With Icon') instead of using modern Boolean and Instance Swap Component Properties.",
          "Using fixed pixel widths on input fields and buttons instead of 'Hug Contents' or 'Fill Container', breaking internationalization and responsive screens.",
          "Neglecting the keyboard focus state (`focus-visible` ring with 2px offset), which causes accessibility failures during QA audits."
        ],
        proShortcuts: [
          "Use Component Properties to slash variant count by up to 70%: one master component can handle left/right icons, badges, and labels.",
          "Set minimum touch target constraints: ensure mobile components have a minimum tap area of 44x44px even if visual padding appears smaller.",
          "Name component layers with clean semantic tags (e.g., `#Label`, `#LeftIcon`, `#Spinner`) so engineering handoff tools like Cursor infer clean JSX."
        ]
      },
      tools: [
        {
          name: "Figma Auto-Layout",
          type: "Layout Engine",
          url: "https://help.figma.com/hc/en-us/articles/360040451373",
          description: "Figma's native flexbox layout system that automatically resizes components based on content and container bounds.",
          bestFor: "Flexbox-aligned components, padding tokens & responsive layout cards"
        },
        {
          name: "shadcn/ui Figma Kit",
          type: "Open-Source UI Architecture",
          url: "https://ui.shadcn.com",
          description: "The gold standard open-source component library, featuring Radix primitives and Tailwind styling replicated faithfully in Figma.",
          bestFor: "Production-ready accessible components & seamless engineering parity"
        },
        {
          name: "Phosphor Icons",
          type: "Icon Family System",
          url: "https://phosphoricons.com",
          description: "A flexible icon system with 1,200+ icons available across 6 consistent weights (Thin, Light, Regular, Bold, Fill, Duotone).",
          bestFor: "Standardized 24x24 icon components & multi-weight UI actions"
        }
      ],
      callouts: {
        mistake: "Creating duplicate variants for tiny variations (e.g., 'Button With Icon') instead of using modern Boolean and Instance Swap Component Properties.",
        proTip: "Use Component Properties to slash variant count by up to 70%: one master component can handle left/right icons, badges, and labels.",
        mistakes: [
          "Creating duplicate variants for tiny variations (e.g., 'Button With Icon') instead of using modern Boolean and Instance Swap Component Properties.",
          "Using fixed pixel widths on input fields and buttons instead of 'Hug Contents' or 'Fill Container', breaking internationalization and responsive screens.",
          "Neglecting the keyboard focus state (`focus-visible` ring with 2px offset), which causes accessibility failures during QA audits."
        ],
        proTips: [
          "Use Component Properties to slash variant count by up to 70%: one master component can handle left/right icons, badges, and labels.",
          "Set minimum touch target constraints: ensure mobile components have a minimum tap area of 44x44px even if visual padding appears smaller.",
          "Name component layers with clean semantic tags (e.g., `#Label`, `#LeftIcon`, `#Spinner`) so engineering handoff tools like Cursor infer clean JSX."
        ]
      },
      promptLab: {
        title: "Component Property Specification & Variant Matrix Architect",
        description: "Specify complete Figma component property definitions, state matrices, and Tailwind CSS mappings.",
        variables: [
          {
            id: "Target Component",
            name: "Target Component",
            label: "UI Component",
            options: [
              "Interactive Data Table Row (Selection, Action Menu, Status Pill)",
              "Universal Form Input (Prefix Icon, Helper Text, Error State, Clear Button)",
              "Multi-Action Button System (Primary, Secondary, Ghost, Destructive, Loading)"
            ],
            default: "Multi-Action Button System (Primary, Secondary, Ghost, Destructive, Loading)",
            defaultOption: "Multi-Action Button System (Primary, Secondary, Ghost, Destructive, Loading)"
          },
          {
            id: "State Complexity",
            name: "State Complexity",
            label: "State Coverage",
            options: [
              "Full Interactive Suite (Default, Hover, Active, Focus Ring, Disabled, Loading)",
              "Standard Production (Default, Hover, Disabled, Active)",
              "Minimal Utilitarian (Default, Disabled)"
            ],
            default: "Full Interactive Suite (Default, Hover, Active, Focus Ring, Disabled, Loading)",
            defaultOption: "Full Interactive Suite (Default, Hover, Active, Focus Ring, Disabled, Loading)"
          },
          {
            id: "Code Target Library",
            name: "Code Target Library",
            label: "Engineering Target",
            options: [
              "shadcn/ui + Radix Primitives + Tailwind CSS",
              "CSS Modules + React Aria Components",
              "Chakra UI / Material UI Enterprise Wrapper"
            ],
            default: "shadcn/ui + Radix Primitives + Tailwind CSS",
            defaultOption: "shadcn/ui + Radix Primitives + Tailwind CSS"
          }
        ],
        template: `# System Role: Principal Design System Architect
Component to Architect: [Target Component]
State Matrix: [State Complexity]
Code Parity Target: [Code Target Library]

Generate a comprehensive Figma Component Architecture & Developer Spec:
1. Component Property Schema: Define exact Variant names, Boolean toggles, and Instance Swap slot IDs.
2. Auto-Layout Constraints: Specify horizontal/vertical padding, gap tokens, alignment rules, and resizing behavior.
3. Interactive State Matrix: Provide token mappings (surface, text, border, focus-ring) for every state in [State Complexity].
4. Tailwind Component Mapping: Provide the corresponding React component snippet (CVA - Class Variance Authority) ensuring 100% design-to-code parity.`,
        expectedOutputs: [
          "Complete Figma component property schema eliminating redundant variants",
          "Comprehensive state styling matrix for all interaction states",
          "React CVA (Class Variance Authority) code snippet ready for engineering"
        ],
        expectedOutput: `### Component Spec: [Target Component] (CVA Architecture)

#### 1. Figma Component Properties
- \`variant\`: Choice [\`primary\`, \`secondary\`, \`outline\`, \`ghost\`, \`destructive\`]
- \`size\`: Choice [\`sm\`, \`md\`, \`lg\`]
- \`state\`: Choice [\`default\`, \`hover\`, \`focus\`, \`disabled\`, \`loading\`]
- \`hasLeftIcon\`: Boolean (Default: false)
- \`hasRightIcon\`: Boolean (Default: false)

#### 2. Class Variance Authority (CVA) Code
\`\`\`typescript
import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90'
      },
      size: {
        sm: 'h-8 px-3 text-xs gap-1.5',
        md: 'h-10 px-4 text-sm gap-2',
        lg: 'h-12 px-6 text-base gap-2.5'
      }
    },
    defaultVariants: { variant: 'primary', size: 'md' }
  }
);
\`\`\``
      },
      conceptGuide: {
        title: "Engineering-First Component Architecture",
        overview: "Modern UI components are state machines with spatial constraints. Creating sustainable component libraries requires designing with the same mental model that front-end engineers use in production code: props, states, variants, and flexible box models. By aligning Figma's Auto-Layout and Component Properties with React frameworks like shadcn/ui and Radix UI primitives, design teams eliminate redundant documentation, drastically reduce design debt, and make handoff instantaneous.",
        keyPoints: [
          "**Props Over Variants:** Utilize Boolean, Instance Swap, and Text properties to keep component sets compact, clean, and performant.",
          "**Intrinsic Flex Resizing:** Building components that 'Hug Contents' internally and 'Fill Container' horizontally guarantees internationalization readiness.",
          "**Accessible Focus Rings:** Always design distinct keyboard focus states (2px high-contrast ring with offset) to comply with accessibility standards."
        ]
      },
      learning: {
        resources: [
          {
            title: "Figma Documentation: Creating & Using Component Properties",
            url: "https://help.figma.com/hc/en-us/articles/5579476150679",
            type: "Official Docs"
          },
          {
            title: "shadcn/ui: Principles of Reusable Component Architecture",
            url: "https://ui.shadcn.com/docs",
            type: "Industry Standard"
          },
          {
            title: "Radix UI Primitives: Accessible Component States & Anatomy",
            url: "https://www.radix-ui.com/primitives",
            type: "Accessibility Guide"
          },
          {
            title: "Phosphor Icons: Icon Component System Guidelines",
            url: "https://phosphoricons.com",
            type: "Official Library"
          }
        ]
      },
      resources: {
        conceptGuide: {
          title: "Engineering-First Component Architecture",
          overview: "Modern UI components are state machines with spatial constraints. Creating sustainable component libraries requires designing with the same mental model that front-end engineers use in production code: props, states, variants, and flexible box models. By aligning Figma's Auto-Layout and Component Properties with React frameworks like shadcn/ui and Radix UI primitives, design teams eliminate redundant documentation, drastically reduce design debt, and make handoff instantaneous.",
          keyPoints: [
            "**Props Over Variants:** Utilize Boolean, Instance Swap, and Text properties to keep component sets compact, clean, and performant.",
            "**Intrinsic Flex Resizing:** Building components that 'Hug Contents' internally and 'Fill Container' horizontally guarantees internationalization readiness.",
            "**Accessible Focus Rings:** Always design distinct keyboard focus states (2px high-contrast ring with offset) to comply with accessibility standards."
          ]
        },
        officialDocs: [
          {
            title: "Figma Documentation: Creating & Using Component Properties",
            url: "https://help.figma.com/hc/en-us/articles/5579476150679",
            type: "Official Docs"
          },
          {
            title: "shadcn/ui: Principles of Reusable Component Architecture",
            url: "https://ui.shadcn.com/docs",
            type: "Industry Standard"
          },
          {
            title: "Radix UI Primitives: Accessible Component States & Anatomy",
            url: "https://www.radix-ui.com/primitives",
            type: "Accessibility Guide"
          },
          {
            title: "Phosphor Icons: Icon Component System Guidelines",
            url: "https://phosphoricons.com",
            type: "Official Library"
          }
        ]
      }
    },

    // Node 6
    {
      id: "step-6",
      stepNumber: 6,
      phaseId: "phase-2",
      phase: "Phase 2: Design Systems, Tokens & Generative Visual Assets",
      title: "Bespoke Brand Illustrations, 3D Assets & Iconography with AI",
      timeEstimate: "3 hrs",
      difficulty: "Intermediate",
      summary: "Generate cohesive vector icons, consistent style-referenced (--sref) spot illustrations, and interactive 3D hero elements.",
      description: "Generic stock photography and mismatched vector clipart immediately signal low quality to prospective customers. In the past, commissioning bespoke spot illustrations and custom 3D web elements required weeks of specialized illustrator time or 3D modeling in Blender. Today, AI-powered generative design tools enable UI/UX designers to generate cohesive, brand-aligned visual assets on demand—ranging from resolution-independent SVG icons to interactive 3D elements.\n\nUsing **Recraft V3**, designers generate clean vector illustrations directly in SVG format with editable anchor points and customizable color palettes that match project design tokens. In **Midjourney v6.1**, the `--sref` (Style Reference) parameter allows designers to lock in a distinctive visual style (e.g., isometric matte clay, technical blueprint, or risograph grain) and generate dozens of narrative spot illustrations with 100% stylistic cohesion. For flagship landing pages, tools like **Spline 3D** allow designers to generate or import 3D objects, configure interactive mouse-hover physics, and embed lightweight WebGL components directly into modern web frameworks.",
      playbook: {
        setup: "Establish a visual reference moodboard in Figma featuring 3–5 representative brand assets. Open Recraft V3 for vector generation, Midjourney v6.1 in Discord or Web Alpha, and Spline 3D for interactive web models.",
        execute: "In Recraft, select 'Vector Art' and set your palette to your semantic brand tokens. Generate a set of 4 spot illustrations for onboarding empty states. In Midjourney, use `--sref <image_url> --sw 150 --v 6.1` to generate a high-resolution hero visual. In Spline, assemble an interactive 3D glass card with subtle mouse parallax.",
        verify: "Inspect vector SVGs in Figma: ensure paths are clean, anchor points are minimized, and colors can be swapped with Figma Variables. In Spline, test the 60fps WebGL embed performance on mobile viewport sizes.",
        workflow: [
          {
            step: 1,
            title: "Setup",
            description: "Establish a visual reference moodboard in Figma featuring 3–5 representative brand assets. Open Recraft V3 for vector generation, Midjourney v6.1 in Discord or Web Alpha, and Spline 3D for interactive web models."
          },
          {
            step: 2,
            title: "Execute",
            description: "In Recraft, select 'Vector Art' and set your palette to your semantic brand tokens. Generate a set of 4 spot illustrations for onboarding empty states. In Midjourney, use `--sref <image_url> --sw 150 --v 6.1` to generate a high-resolution hero visual. In Spline, assemble an interactive 3D glass card with subtle mouse parallax."
          },
          {
            step: 3,
            title: "Verify",
            description: "Inspect vector SVGs in Figma: ensure paths are clean, anchor points are minimized, and colors can be swapped with Figma Variables. In Spline, test the 60fps WebGL embed performance on mobile viewport sizes."
          }
        ],
        recommendedTools: [
          {
            name: "Recraft V3",
            type: "AI Vector & Icon Generator",
            url: "https://www.recraft.ai",
            description: "The leading AI vector engine capable of generating infinitely scalable SVG graphics, 3D icons, and brand illustrations with custom color palettes.",
            bestFor: "Clean SVG vector generation, brand color enforcement & icon sets"
          },
          {
            name: "Midjourney v6.1",
            type: "Generative Imagery Engine",
            url: "https://www.midjourney.com",
            description: "Industry-leading image generation model with powerful style reference (`--sref`) and character consistency controls.",
            bestFor: "Hero landing page art, consistent spot illustrations & textured visuals"
          },
          {
            name: "Spline 3D",
            type: "Interactive Web 3D Design",
            url: "https://spline.design",
            description: "Browser-based 3D design and animation tool with AI generation, real-time mouse physics, and export to React / Next.js.",
            bestFor: "Interactive 3D hero assets, glassmorphic objects & WebGL micro-interactions"
          }
        ],
        commonMistakes: [
          "Exporting AI imagery as massive unoptimized PNGs (>3MB), severely destroying site Largest Contentful Paint (LCP) and mobile performance.",
          "Failing to maintain a unified style reference across spot illustrations, making the application look like an incoherent collage of different artists.",
          "Using AI vector generators that output raster-in-SVG wrappers rather than genuine editable Bézier paths and clean shape groups."
        ],
        proShortcuts: [
          "Use Recraft's palette locking feature: paste your exact primary and neutral hex tokens into the generator to guarantee 100% brand palette adherence.",
          "Pass generated SVGs through SVGOMG (or run \`npx svgo\`) to strip unnecessary metadata and reduce vector file sizes by up to 60%.",
          "In Spline, export components using the native `@splinetool/react-spline` runtime with `loading=\"lazy\"` to protect initial page load speeds."
        ]
      },
      tools: [
        {
          name: "Recraft V3",
          type: "AI Vector & Icon Generator",
          url: "https://www.recraft.ai",
          description: "The leading AI vector engine capable of generating infinitely scalable SVG graphics, 3D icons, and brand illustrations with custom color palettes.",
          bestFor: "Clean SVG vector generation, brand color enforcement & icon sets"
        },
        {
          name: "Midjourney v6.1",
          type: "Generative Imagery Engine",
          url: "https://www.midjourney.com",
          description: "Industry-leading image generation model with powerful style reference (`--sref`) and character consistency controls.",
          bestFor: "Hero landing page art, consistent spot illustrations & textured visuals"
        },
        {
          name: "Spline 3D",
          type: "Interactive Web 3D Design",
          url: "https://spline.design",
          description: "Browser-based 3D design and animation tool with AI generation, real-time mouse physics, and export to React / Next.js.",
          bestFor: "Interactive 3D hero assets, glassmorphic objects & WebGL micro-interactions"
        }
      ],
      callouts: {
        mistake: "Exporting AI imagery as massive unoptimized PNGs (>3MB), severely destroying site Largest Contentful Paint (LCP) and mobile performance.",
        proTip: "Use Recraft's palette locking feature: paste your exact primary and neutral hex tokens into the generator to guarantee 100% brand palette adherence.",
        mistakes: [
          "Exporting AI imagery as massive unoptimized PNGs (>3MB), severely destroying site Largest Contentful Paint (LCP) and mobile performance.",
          "Failing to maintain a unified style reference across spot illustrations, making the application look like an incoherent collage of different artists.",
          "Using AI vector generators that output raster-in-SVG wrappers rather than genuine editable Bézier paths and clean shape groups."
        ],
        proTips: [
          "Use Recraft's palette locking feature: paste your exact primary and neutral hex tokens into the generator to guarantee 100% brand palette adherence.",
          "Pass generated SVGs through SVGOMG (or run \`npx svgo\`) to strip unnecessary metadata and reduce vector file sizes by up to 60%.",
          "In Spline, export components using the native `@splinetool/react-spline` runtime with `loading=\"lazy\"` to protect initial page load speeds."
        ]
      },
      promptLab: {
        title: "Cohesive Brand Vector & Style Reference Prompt",
        description: "Generate consistent, production-ready vector assets and 3D hero elements using Midjourney and Recraft V3.",
        variables: [
          {
            id: "Art Style Direction",
            name: "Art Style Direction",
            label: "Visual Aesthetic",
            options: [
              "Minimalist Utilitarian Line Art (Monochrome, 1.5px stroke, geometric)",
              "Matte Clay 3D Isometric (Soft studio lighting, pastel accents, playful)",
              "Futuristic Cybernetic Wireframe (Dark slate, glow accents, technical)"
            ],
            default: "Minimalist Utilitarian Line Art (Monochrome, 1.5px stroke, geometric)",
            defaultOption: "Minimalist Utilitarian Line Art (Monochrome, 1.5px stroke, geometric)"
          },
          {
            id: "Asset Category",
            name: "Asset Category",
            label: "Asset Use Case",
            options: [
              "Empty State Spot Illustration (Zero Results / Completed All Tasks)",
              "Hero Section Interactive 3D Focal Element",
              "Feature Icon Suite for Feature Comparison Cards"
            ],
            default: "Empty State Spot Illustration (Zero Results / Completed All Tasks)",
            defaultOption: "Empty State Spot Illustration (Zero Results / Completed All Tasks)"
          },
          {
            id: "Generator Engine",
            name: "Generator Engine",
            label: "Target AI Tool",
            options: [
              "Recraft V3 (Native Clean Vector SVG + Palette Lock)",
              "Midjourney v6.1 (--sref Consistent Style Reference)",
              "Spline AI 3D (Interactive WebGL Object)"
            ],
            default: "Recraft V3 (Native Clean Vector SVG + Palette Lock)",
            defaultOption: "Recraft V3 (Native Clean Vector SVG + Palette Lock)"
          }
        ],
        template: `# System Role: Creative Director & Brand Identity Systems Designer
Visual Style: [Art Style Direction]
Asset Target: [Asset Category]
Tool Target: [Generator Engine]

Craft the optimal generative prompt and design parameters:
1. Exact Prompt Syntax: Construct a precision prompt specifying subject, perspective, lighting, color restrictions, and clean negative space.
2. Parameter Modifiers: Include tool-specific parameters (e.g., --v 6.1 --sref <url> --no shadows, text, gradients).
3. Palette Constraint Guide: Define the exact background color rules (pure transparent #00000000) and line weight consistency.
4. Export Optimization Checklist: Specify SVG optimization commands and WebP conversion commands for web delivery.`,
        expectedOutputs: [
          "Precision generative prompt tailored for Recraft V3 or Midjourney v6.1",
          "Strict negative constraints ensuring transparent backgrounds and zero text artifacts",
          "Post-processing optimization guide for sub-50KB SVG/WebP delivery"
        ],
        expectedOutput: `### Generative Prompt: [Asset Category]

**Tool:** Recraft V3 (Vector Illustration)
**Prompt:**
> Modern minimalist line art spot illustration representing [Asset Category]. Clean isometric perspective, crisp 1.5px monoline strokes, geometric composition. Floating clipboard with completed checkmarks and subtle celebratory particle rays. Strictly flat vector graphics, transparent background, zero drop shadows, zero gradients, zero text labels. Palette locked to #0F172A (slate ink), #6366F1 (accent violet), and #F8FAFC (clean white fill).

#### Web Optimization Command
\`\`\`bash
# Optimize SVG vector paths and strip editor metadata
npx svgo input.svg -o output.min.svg --multipass
\`\`\``
      },
      conceptGuide: {
        title: "Generative Artistry in Brand Design Systems",
        overview: "Generative AI transforms visual asset creation from a bespoke, high-friction endeavor into an iterative, real-time design workflow. By enforcing strict style reference seeds, palette-locking mechanisms, and vector output constraints, modern product designers can generate dozens of contextually relevant spot illustrations, custom iconography sets, and 3D web elements that feel unified with the core design system. The goal is to elevate user delight and brand polish while maintaining strict performance budgets on web and mobile runtimes.",
        keyPoints: [
          "**Style Reference Discipline:** Utilizing Midjourney's `--sref` or Recraft's style sets ensures every graphic looks created by the same studio hand.",
          "**Pure Vector Utility:** Native SVG generation preserves infinite crispness across Retina displays and allows dynamic CSS color theming.",
          "**Performance Budgets:** Always optimize generated visual assets with SVGO or modern WebP/AVIF formats to prevent page weight bloat."
        ]
      },
      learning: {
        resources: [
          {
            title: "Midjourney Documentation: Style Reference (--sref) Mastery Guide",
            url: "https://docs.midjourney.com",
            type: "Official Docs"
          },
          {
            title: "Recraft V3 Documentation: Vector SVG Generation & Palette Locking",
            url: "https://www.recraft.ai/blog",
            type: "Official Guide"
          },
          {
            title: "Spline 3D Documentation: Exporting Interactive WebGL to React & Next.js",
            url: "https://docs.spline.design",
            type: "Official Docs"
          },
          {
            title: "Web.dev Guide: Optimizing SVGs & Hero Image Performance",
            url: "https://web.dev/fast/#optimize-your-images",
            type: "Performance Benchmark"
          }
        ]
      },
      resources: {
        conceptGuide: {
          title: "Generative Artistry in Brand Design Systems",
          overview: "Generative AI transforms visual asset creation from a bespoke, high-friction endeavor into an iterative, real-time design workflow. By enforcing strict style reference seeds, palette-locking mechanisms, and vector output constraints, modern product designers can generate dozens of contextually relevant spot illustrations, custom iconography sets, and 3D web elements that feel unified with the core design system. The goal is to elevate user delight and brand polish while maintaining strict performance budgets on web and mobile runtimes.",
          keyPoints: [
            "**Style Reference Discipline:** Utilizing Midjourney's `--sref` or Recraft's style sets ensures every graphic looks created by the same studio hand.",
            "**Pure Vector Utility:** Native SVG generation preserves infinite crispness across Retina displays and allows dynamic CSS color theming.",
            "**Performance Budgets:** Always optimize generated visual assets with SVGO or modern WebP/AVIF formats to prevent page weight bloat."
          ]
        },
        officialDocs: [
          {
            title: "Midjourney Documentation: Style Reference (--sref) Mastery Guide",
            url: "https://docs.midjourney.com",
            type: "Official Docs"
          },
          {
            title: "Recraft V3 Documentation: Vector SVG Generation & Palette Locking",
            url: "https://www.recraft.ai/blog",
            type: "Official Guide"
          },
          {
            title: "Spline 3D Documentation: Exporting Interactive WebGL to React & Next.js",
            url: "https://docs.spline.design",
            type: "Official Docs"
          },
          {
            title: "Web.dev Guide: Optimizing SVGs & Hero Image Performance",
            url: "https://web.dev/fast/#optimize-your-images",
            type: "Performance Benchmark"
          }
        ]
      }
    },

    // Node 7
    {
      id: "step-7",
      stepNumber: 7,
      phaseId: "phase-2",
      phase: "Phase 2: Design Systems, Tokens & Generative Visual Assets",
      title: "Conversion-Focused UX Microcopy & Empty State Design",
      timeEstimate: "2 hrs",
      difficulty: "Beginner",
      summary: "Replace placeholder Lorem Ipsum with clear onboarding copy, helpful error recovery messages, and actionable empty states.",
      description: "Great UI design with terrible copy is still bad UX. For decades, designers placed 'Lorem ipsum dolor sit amet' into wireframes, treating words as arbitrary gray rectangles to be filled later by copywriters. In production, real text frequently broke layouts, confused users with vague error codes ('Error 400 occurred'), and stranded new signups on desolate empty states ('No items found'). UX writing is an integral part of interaction design: microcopy guides actions, reduces anxiety during high-stakes inputs, and turns dead ends into activation opportunities.\n\nAI models like Claude 3.7 Sonnet act as dedicated UX writing partners. By priming models with product personas, brand tone guidelines (e.g., confident, concise, empathetic), and exact character limits, designers can generate contextual onboarding guidance, clear validation errors that suggest concrete fixes, and high-converting empty state call-to-actions. Storing strings as Figma Text Variables enables synchronized copy updates and rapid multi-lingual localization.",
      playbook: {
        setup: "Establish your brand's voice and tone guidelines (e.g., 'Concise, transparent, technical yet warm'). Open Claude 3.7 or ChatGPT in a dedicated workspace, alongside Hemingway Editor to verify readability.",
        execute: "Craft microcopy variations for 3 critical high-friction states: an onboarding zero-data empty state, an inline payment validation error, and a destructive account deletion confirmation modal. Bind the chosen strings to Figma Text Variables.",
        verify: "Run generated microcopy through Hemingway Editor to verify Grade 6–8 reading level. Ensure error messages follow the 3-part UX rule: explain what happened, explain why it happened, and provide a single one-click recovery action.",
        workflow: [
          {
            step: 1,
            title: "Setup",
            description: "Establish your brand's voice and tone guidelines (e.g., 'Concise, transparent, technical yet warm'). Open Claude 3.7 or ChatGPT in a dedicated workspace, alongside Hemingway Editor to verify readability."
          },
          {
            step: 2,
            title: "Execute",
            description: "Craft microcopy variations for 3 critical high-friction states: an onboarding zero-data empty state, an inline payment validation error, and a destructive account deletion confirmation modal. Bind the chosen strings to Figma Text Variables."
          },
          {
            step: 3,
            title: "Verify",
            description: "Run generated microcopy through Hemingway Editor to verify Grade 6–8 reading level. Ensure error messages follow the 3-part UX rule: explain what happened, explain why it happened, and provide a single one-click recovery action."
          }
        ],
        recommendedTools: [
          {
            name: "Claude 3.7 Sonnet",
            type: "UX Copywriting Intelligence",
            url: "https://console.anthropic.com",
            description: "Frontier reasoning model with exceptional nuanced voice calibration, ideal for drafting concise, empathetic UX microcopy and error states.",
            bestFor: "Contextual UX microcopy, error message recovery & voice tone calibration"
          },
          {
            name: "Figma Text Variables",
            type: "String Variable Management",
            url: "https://help.figma.com/hc/en-us/articles/15339657135383",
            description: "Native Figma feature enabling string variable binding across frames for centralized copy updates and multi-lingual testing.",
            bestFor: "Centralized copy management, string tokens & internationalization preview"
          },
          {
            name: "Hemingway Editor",
            type: "Readability Analyzer",
            url: "https://hemingwayapp.com",
            description: "Writing readability tool that flags dense sentences, passive voice, and reading grade levels to keep interface copy crisp and accessible.",
            bestFor: "Verifying reading levels (Grade 6-8) & eliminating cognitive copy bloat"
          }
        ],
        commonMistakes: [
          "Displaying dead-end empty states with no clear next action ('No projects yet.'), causing user abandonment during onboarding.",
          "Writing technical, blame-shifting error copy ('Invalid user input error 422') instead of user-centric remediation guidance.",
          "Ignoring internationalization length expansion: German text often expands by 30–40%, causing truncated button labels if margins are rigid."
        ],
        proShortcuts: [
          "Enforce the 3-part error formula: 1) What happened, 2) Why it happened, 3) Exactly what to do next ('Card declined due to insufficient funds. Try another card.').",
          "Always pair an empty state illustration with an informative heading, a 1-sentence value proposition, and a primary CTA button ('Create your first project').",
          "Test your designs with variable text lengths: use Figma string variables to instantly swap between short English strings and expanded German/Spanish strings."
        ]
      },
      tools: [
        {
          name: "Claude 3.7 Sonnet",
          type: "UX Copywriting Intelligence",
          url: "https://console.anthropic.com",
          description: "Frontier reasoning model with exceptional nuanced voice calibration, ideal for drafting concise, empathetic UX microcopy and error states.",
          bestFor: "Contextual UX microcopy, error message recovery & voice tone calibration"
        },
        {
          name: "Figma Text Variables",
          type: "String Variable Management",
          url: "https://help.figma.com/hc/en-us/articles/15339657135383",
          description: "Native Figma feature enabling string variable binding across frames for centralized copy updates and multi-lingual testing.",
          bestFor: "Centralized copy management, string tokens & internationalization preview"
        },
        {
          name: "Hemingway Editor",
          type: "Readability Analyzer",
          url: "https://hemingwayapp.com",
          description: "Writing readability tool that flags dense sentences, passive voice, and reading grade levels to keep interface copy crisp and accessible.",
          bestFor: "Verifying reading levels (Grade 6-8) & eliminating cognitive copy bloat"
        }
      ],
      callouts: {
        mistake: "Displaying dead-end empty states with no clear next action ('No projects yet.'), causing user abandonment during onboarding.",
        proTip: "Enforce the 3-part error formula: 1) What happened, 2) Why it happened, 3) Exactly what to do next ('Card declined due to insufficient funds. Try another card.').",
        mistakes: [
          "Displaying dead-end empty states with no clear next action ('No projects yet.'), causing user abandonment during onboarding.",
          "Writing technical, blame-shifting error copy ('Invalid user input error 422') instead of user-centric remediation guidance.",
          "Ignoring internationalization length expansion: German text often expands by 30–40%, causing truncated button labels if margins are rigid."
        ],
        proTips: [
          "Enforce the 3-part error formula: 1) What happened, 2) Why it happened, 3) Exactly what to do next ('Card declined due to insufficient funds. Try another card.').",
          "Always pair an empty state illustration with an informative heading, a 1-sentence value proposition, and a primary CTA button ('Create your first project').",
          "Test your designs with variable text lengths: use Figma string variables to instantly swap between short English strings and expanded German/Spanish strings."
        ]
      },
      promptLab: {
        title: "UX Microcopy & Empty-State Conversion Engine",
        description: "Generate concise, conversion-optimized interface microcopy, error resolution paths, and action-oriented empty states.",
        variables: [
          {
            id: "Interface Context",
            name: "Interface Context",
            label: "UX Touchpoint",
            options: [
              "First-Time User Onboarding (Zero Projects Created)",
              "Payment Processing Failure / Subscription Lapsed",
              "Destructive Action Confirmation (Delete Production API Key)"
            ],
            default: "First-Time User Onboarding (Zero Projects Created)",
            defaultOption: "First-Time User Onboarding (Zero Projects Created)"
          },
          {
            id: "Brand Voice & Tone",
            name: "Brand Voice & Tone",
            label: "Copy Tone",
            options: [
              "Linear Utilitarian (Concise, technical, direct, zero fluff)",
              "Empathetic Consumer (Warm, reassuring, encouraging, simple)",
              "Enterprise Professional (Authoritative, clear, compliance-conscious)"
            ],
            default: "Linear Utilitarian (Concise, technical, direct, zero fluff)",
            defaultOption: "Linear Utilitarian (Concise, technical, direct, zero fluff)"
          },
          {
            id: "Character Constraint",
            name: "Character Constraint",
            label: "Length Limit",
            options: [
              "Ultra-Compact (Title: <30 chars, Body: <80 chars, CTA: <15 chars)",
              "Standard Mobile (Title: <45 chars, Body: <120 chars, CTA: <20 chars)",
              "Desktop Comprehensive (Title: <60 chars, Body: <180 chars, Dual CTAs)"
            ],
            default: "Ultra-Compact (Title: <30 chars, Body: <80 chars, CTA: <15 chars)",
            defaultOption: "Ultra-Compact (Title: <30 chars, Body: <80 chars, CTA: <15 chars)"
          }
        ],
        template: `# System Role: Principal UX Content Strategist & Microcopy Architect
Touchpoint Context: [Interface Context]
Tone of Voice: [Brand Voice & Tone]
Length Limits: [Character Constraint]

Generate production-ready UX microcopy variations:
1. Primary Messaging Package:
   - Header Title (Clear statement of state)
   - Body Explanation (Actionable context without technical jargon)
   - Primary Call-to-Action (Action-oriented verb phrase)
   - Secondary Recovery / Dismiss Link
2. Character Count Audit: Verify that every string strictly conforms to [Character Constraint].
3. Internationalization Stress-Test: Provide an estimated expansion percentage and alert for German/Spanish truncation risks.
4. Three Tone Variations: A) Direct & Functional, B) Value-Focused, C) Contextually Reassuring.`,
        expectedOutputs: [
          "Three distinct copy variations tailored for the exact UX touchpoint",
          "Strict character count verification conforming to layout constraints",
          "Remediation-focused error copy with actionable recovery CTAs"
        ],
        expectedOutput: `### UX Microcopy Matrix: [Interface Context]

#### Option A: Direct & Utilitarian (Recommended)
- **Title (21 chars)**: No active projects yet
- **Body (68 chars)**: Create a project to start organizing team tasks and tracking sprint metrics.
- **Primary CTA (14 chars)**: Create project
- **Secondary Link (12 chars)**: Import from Jira

#### Option B: Value-Focused
- **Title (25 chars)**: Supercharge your team workflow
- **Body (78 chars)**: Deploy your first workspace in under 60 seconds with pre-built sprint templates.
- **Primary CTA (15 chars)**: Start with template

*Readability Audit: Hemingway Grade 5.2. Zero passive voice detected.*`
      },
      conceptGuide: {
        title: "The Strategic Impact of UX Microcopy",
        overview: "Interface copy is not an afterthought to be sprinkled over finished mockups; it is the fundamental dialogue between a product and its user. High-performing UX microcopy clarifies ambiguities, removes hesitation during critical conversion moments, and transforms dead ends like empty states into high-velocity activation funnels. By leveraging AI models with calibrated brand guidelines and character constraints, designers can banish placeholder Lorem Ipsum and test real interface dynamics from day one.",
        keyPoints: [
          "**Action-Oriented Verbs:** Buttons must state exact outcomes ('Create Project', not 'Submit'; 'Delete Workspace', not 'OK').",
          "**The 3-Part Error Rule:** Informative errors explain what went wrong, why it occurred, and the exact one-click resolution step.",
          "**Empty State Activation:** Empty states are product landing pages: educate users on value and provide an immediate primary action."
        ]
      },
      learning: {
        resources: [
          {
            title: "Figma Help: Working with String Variables for UX Content",
            url: "https://help.figma.com/hc/en-us/articles/15339657135383",
            type: "Official Docs"
          },
          {
            title: "Nielsen Norman Group: Error Message Guidelines & Remediation UX",
            url: "https://www.nngroup.com/articles/error-message-guidelines/",
            type: "Foundational UX"
          },
          {
            title: "Hemingway Editor: Cognitive Simplicity in Digital Interfaces",
            url: "https://hemingwayapp.com",
            type: "Writing Tool"
          },
          {
            title: "UX Writing Hub: Industry Standards for Microcopy & Empty States",
            url: "https://uxwritinghub.com",
            type: "Best Practices"
          }
        ]
      },
      resources: {
        conceptGuide: {
          title: "The Strategic Impact of UX Microcopy",
          overview: "Interface copy is not an afterthought to be sprinkled over finished mockups; it is the fundamental dialogue between a product and its user. High-performing UX microcopy clarifies ambiguities, removes hesitation during critical conversion moments, and transforms dead ends like empty states into high-velocity activation funnels. By leveraging AI models with calibrated brand guidelines and character constraints, designers can banish placeholder Lorem Ipsum and test real interface dynamics from day one.",
          keyPoints: [
            "**Action-Oriented Verbs:** Buttons must state exact outcomes ('Create Project', not 'Submit'; 'Delete Workspace', not 'OK').",
            "**The 3-Part Error Rule:** Informative errors explain what went wrong, why it occurred, and the exact one-click resolution step.",
            "**Empty State Activation:** Empty states are product landing pages: educate users on value and provide an immediate primary action."
          ]
        },
        officialDocs: [
          {
            title: "Figma Help: Working with String Variables for UX Content",
            url: "https://help.figma.com/hc/en-us/articles/15339657135383",
            type: "Official Docs"
          },
          {
            title: "Nielsen Norman Group: Error Message Guidelines & Remediation UX",
            url: "https://www.nngroup.com/articles/error-message-guidelines/",
            type: "Foundational UX"
          },
          {
            title: "Hemingway Editor: Cognitive Simplicity in Digital Interfaces",
            url: "https://hemingwayapp.com",
            type: "Writing Tool"
          },
          {
            title: "UX Writing Hub: Industry Standards for Microcopy & Empty States",
            url: "https://uxwritinghub.com",
            type: "Best Practices"
          }
        ]
      }
    },

    // =========================================================================
    // PHASE 3: Designing AI-Native UX Patterns (Beyond the Chatbox)
    // =========================================================================

    // Node 8
    {
      id: "step-8",
      stepNumber: 8,
      phaseId: "phase-3",
      phase: "Phase 3: Designing AI-Native UX Patterns (Beyond the Chatbox)",
      title: "Designing Command Palettes (Cmd+K), Inline Copilots & Ghost Text",
      timeEstimate: "3.5 hrs",
      difficulty: "Advanced",
      summary: "Move beyond generic sidebar chatbots to contextual inline actions, slash commands, and canvas-native AI controls.",
      description: "When generative AI first emerged, almost every product slapped a generic chat window into a bottom-right floating widget or a right-hand sidebar. In professional software, chat windows are often the worst possible ergonomic interface: they require users to context-switch away from their work, type long conversational sentences, and parse wall-of-text responses. Modern AI-native UX design moves intelligence directly to the point of intent using contextual **Command Palettes (`Cmd+K`)**, **Slash Commands (`/`)**, **Inline Selection Toolbars**, and predictive **Ghost Text** autocomplete.\n\nPioneered by products like Linear, Raycast, and GitHub Copilot, keyboard-first command interfaces allow users to trigger complex multi-step actions without their hands ever leaving the keyboard. Designing these patterns requires strict visual states: fuzzy-search filtering, keyboard focus rings, keyboard shortcut badges (`↵`, `Tab`, `Esc`), and contextual intent previews. Ghost text requires delicate opacity calibration (`text-muted-foreground/50`) and clear affordances showing users how to accept (`Tab`), partially accept (`Cmd+→`), or reject (`Esc`) suggestions.",
      playbook: {
        setup: "Study the design patterns in Raycast and Linear. In Figma, set up a master modal overlay frame with background backdrop blur (`backdrop-blur: 16px; bg-black/40`).",
        execute: "Design a comprehensive Command Palette component: top search input with a magnifying glass icon, keyboard shortcut badge (`ESC`), scrollable results list grouped by category ('Suggested Actions', 'AI Transformations', 'Navigation'), and a sticky footer showing keyboard navigation instructions (`↑↓ Navigate`, `↵ Select`, `Tab Autocomplete`). Next, design an inline ghost text input state.",
        verify: "Prototype the component using Figma interactive components: clicking `Cmd+K` opens the palette with immediate autofocus on the search input, typing filters the action items, and pressing `Escape` dismisses the modal cleanly.",
        workflow: [
          {
            step: 1,
            title: "Setup",
            description: "Study the design patterns in Raycast and Linear. In Figma, set up a master modal overlay frame with background backdrop blur (`backdrop-blur: 16px; bg-black/40`)."
          },
          {
            step: 2,
            title: "Execute",
            description: "Design a comprehensive Command Palette component: top search input with a magnifying glass icon, keyboard shortcut badge (`ESC`), scrollable results list grouped by category ('Suggested Actions', 'AI Transformations', 'Navigation'), and a sticky footer showing keyboard navigation instructions (`↑↓ Navigate`, `↵ Select`, `Tab Autocomplete`). Next, design an inline ghost text input state."
          },
          {
            step: 3,
            title: "Verify",
            description: "Prototype the component using Figma interactive components: clicking `Cmd+K` opens the palette with immediate autofocus on the search input, typing filters the action items, and pressing `Escape` dismisses the modal cleanly."
          }
        ],
        recommendedTools: [
          {
            name: "Figma",
            type: "Interface Prototyping",
            url: "https://www.figma.com",
            description: "Industry-standard design environment used to create interactive keyboard-driven modal prototypes and ghost text states.",
            bestFor: "Command palette component variants & interactive keyboard prototypes"
          },
          {
            name: "Linear UI Patterns",
            type: "UX Ergonomics Benchmark",
            url: "https://linear.app/method",
            description: "The gold standard for keyboard-first web applications, defining modern Cmd+K ergonomics and instantaneous inline interactions.",
            bestFor: "Keyboard-first navigation benchmarks & fast productivity UX"
          },
          {
            name: "Raycast",
            type: "Desktop Command Environment",
            url: "https://www.raycast.com",
            description: "Benchmark launcher demonstrating how contextual AI actions, extensions, and parameter inputs operate in keyboard-driven workflows.",
            bestFor: "Actionable command palette hierarchy & keyboard shortcuts UI"
          }
        ],
        commonMistakes: [
          "Forgetting to design keyboard navigation affordances (e.g., omitting the active selected row highlight or failing to indicate the 'Enter' key trigger).",
          "Designing ghost text that looks identical to confirmed body copy, causing confusion over whether the text is already committed to the database.",
          "Overloading the command palette with hundreds of un-categorized actions without fuzzy search ranking or recently used action memory."
        ],
        proShortcuts: [
          "Style ghost text with 40–50% opacity and pair it with an inline pill badge indicating the shortcut: e.g., 'Press [Tab] to accept'.",
          "Group command palette results into max 4 logical categories: 'Quick Actions', 'Ask AI Assistant', 'Go to Navigation', and 'Recent Documents'.",
          "Include a right-aligned shortcut chip on every command item (e.g., '⌘ + D' for Duplicate) to teach users native shortcuts while browsing."
        ]
      },
      tools: [
        {
          name: "Figma",
          type: "Interface Prototyping",
          url: "https://www.figma.com",
          description: "Industry-standard design environment used to create interactive keyboard-driven modal prototypes and ghost text states.",
          bestFor: "Command palette component variants & interactive keyboard prototypes"
        },
        {
          name: "Linear UI Patterns",
          type: "UX Ergonomics Benchmark",
          url: "https://linear.app/method",
          description: "The gold standard for keyboard-first web applications, defining modern Cmd+K ergonomics and instantaneous inline interactions.",
          bestFor: "Keyboard-first navigation benchmarks & fast productivity UX"
        },
        {
          name: "Raycast",
          type: "Desktop Command Environment",
          url: "https://www.raycast.com",
          description: "Benchmark launcher demonstrating how contextual AI actions, extensions, and parameter inputs operate in keyboard-driven workflows.",
          bestFor: "Actionable command palette hierarchy & keyboard shortcuts UI"
        }
      ],
      callouts: {
        mistake: "Forgetting to design keyboard navigation affordances (e.g., omitting the active selected row highlight or failing to indicate the 'Enter' key trigger).",
        proTip: "Style ghost text with 40–50% opacity and pair it with an inline pill badge indicating the shortcut: e.g., 'Press [Tab] to accept'.",
        mistakes: [
          "Forgetting to design keyboard navigation affordances (e.g., omitting the active selected row highlight or failing to indicate the 'Enter' key trigger).",
          "Designing ghost text that looks identical to confirmed body copy, causing confusion over whether the text is already committed to the database.",
          "Overloading the command palette with hundreds of un-categorized actions without fuzzy search ranking or recently used action memory."
        ],
        proTips: [
          "Style ghost text with 40–50% opacity and pair it with an inline pill badge indicating the shortcut: e.g., 'Press [Tab] to accept'.",
          "Group command palette results into max 4 logical categories: 'Quick Actions', 'Ask AI Assistant', 'Go to Navigation', and 'Recent Documents'.",
          "Include a right-aligned shortcut chip on every command item (e.g., '⌘ + D' for Duplicate) to teach users native shortcuts while browsing."
        ]
      },
      promptLab: {
        title: "AI Command Palette & Inline Suggestion Ergonomics Spec",
        description: "Architect complete UI specifications for a keyboard-first Cmd+K command palette and predictive inline ghost text.",
        variables: [
          {
            id: "Interaction Surface",
            name: "Interaction Surface",
            label: "AI Touchpoint",
            options: [
              "Universal Global Command Palette (Cmd+K Modal)",
              "Inline Slash Command Menu in Rich Text Canvas (/ai)",
              "Predictive Ghost Text Inline Autocomplete in Code / Form"
            ],
            default: "Universal Global Command Palette (Cmd+K Modal)",
            defaultOption: "Universal Global Command Palette (Cmd+K Modal)"
          },
          {
            id: "Keyboard Ergonomics Model",
            name: "Keyboard Ergonomics Model",
            label: "Navigation Standard",
            options: [
              "Linear Style (Strict Keyboard First: Arrow keys, Enter, Esc, Tab)",
              "Spotlight Style (Hybrid Mouse + Keyboard with Preview Pane)",
              "Vim Modal Ergonomics (Leader key, rapid mnemonics)"
            ],
            default: "Linear Style (Strict Keyboard First: Arrow keys, Enter, Esc, Tab)",
            defaultOption: "Linear Style (Strict Keyboard First: Arrow keys, Enter, Esc, Tab)"
          },
          {
            id: "Visual Surface Treatment",
            name: "Visual Surface Treatment",
            label: "Modal Theme",
            options: [
              "Deep Charcoal Glass (bg-slate-900/90, 1px border-slate-700, blur-16)",
              "Utilitarian Monochromatic Zinc (Strict 1px border, zero blur, high contrast)",
              "Clean Minimalist Light (bg-white/95, crisp drop shadow, slate borders)"
            ],
            default: "Deep Charcoal Glass (bg-slate-900/90, 1px border-slate-700, blur-16)",
            defaultOption: "Deep Charcoal Glass (bg-slate-900/90, 1px border-slate-700, blur-16)"
          }
        ],
        template: `# System Role: Principal Interaction Designer & Keyboard Ergonomics Specialist
AI Surface: [Interaction Surface]
Ergonomic Model: [Keyboard Ergonomics Model]
Visual Style: [Visual Surface Treatment]

Deliver an enterprise interaction specification:
1. Spatial Architecture & Layout: Define dimensions (e.g., max-width 640px), positioning, backdrop blur, and scroll behavior.
2. Component States: Detail specifications for Input Field, Active Selected Item, Default Item, Category Divider, and Footer Hint Bar.
3. Keyboard Event Mapping: Map keydown listeners (ArrowDown, ArrowUp, Enter, Escape, Tab, Backspace).
4. Accessibility Affordances: Detail ARIA roles (combobox, listbox, option, aria-activedescendant) to guarantee full screen-reader compliance.`,
        expectedOutputs: [
          "Complete spatial layout and component token mapping for the Cmd+K palette",
          "Comprehensive keyboard event state table with clear visual indicator specs",
          "ARIA combobox specification for 100% WCAG accessibility compliance"
        ],
        expectedOutput: `### Interaction Spec: [Interaction Surface]

#### 1. Spatial Layout Dimensions
- **Modal Container**: Width 640px, Max-height 480px, Centered (top: 15vh)
- **Surface**: [Visual Surface Treatment]
- **Backdrop**: \`rgba(0, 0, 0, 0.6)\` with \`backdrop-filter: blur(12px)\`
- **Border Radius**: 12px (\`rounded-xl\`), Border: 1px solid var(--border-subtle)

#### 2. Item Anatomy & State Hierarchy
\`\`\`text
┌─────────────────────────────────────────────────────────────┐
│ 🔍  Ask AI or type a command...                         ESC │
├─────────────────────────────────────────────────────────────┤
│ SUGGESTIONS                                                 │
│ [ ✨ Summarize current project progress         ↵ Execute ] │ <- Active State (bg-accent/15)
│   ⚡ Draft customer announcement update           ↵ Execute  │
│ NAVIGATION                                                  │
│   📁 Jump to Sprint Planning                   ⌘ + 1       │
├─────────────────────────────────────────────────────────────┤
│ ↑↓ to navigate    ↵ to select    esc to close               │
└─────────────────────────────────────────────────────────────┘
\`\`\``
      },
      conceptGuide: {
        title: "Moving Beyond the Chatbox: In-Context AI Ergonomics",
        overview: "The initial era of generative AI forced users into conversational sidebar chatbots that broke immersion and required clumsy back-and-forth prompt engineering. Modern AI-native product design embeds machine intelligence directly into user workspaces through contextual command palettes, slash actions, inline ghost suggestions, and canvas-native toolbars. By minimizing cognitive disruption and prioritizing keyboard navigation, designers transform AI from an external novelty into an invisible, high-leverage cognitive extension.",
        keyPoints: [
          "**Zero Context Switching:** Bring AI capabilities to the user's cursor rather than forcing them into a separate sidebar chat window.",
          "**Keyboard First Velocity:** Keyboard shortcuts and fuzzy search enable power users to execute complex multi-step actions in seconds.",
          "**Visual Differentiation:** Clearly differentiate uncommitted AI ghost suggestions from user-verified, database-persisted text."
        ]
      },
      learning: {
        resources: [
          {
            title: "Linear Method: Principles of Keyboard-First Design & Command Palettes",
            url: "https://linear.app/method",
            type: "Industry Benchmark"
          },
          {
            title: "Raycast Developer Documentation: Designing Contextual Command Actions",
            url: "https://developers.raycast.com",
            type: "Design Guidelines"
          },
          {
            title: "W3C WAI-ARIA Authoring Practices: Combobox Design Pattern",
            url: "https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",
            type: "Accessibility Standard"
          },
          {
            title: "GitHub Copilot Research: Cognitive Ergonomics of Ghost Text",
            url: "https://github.blog/news-insights/research/",
            type: "UX Research"
          }
        ]
      },
      resources: {
        conceptGuide: {
          title: "Moving Beyond the Chatbox: In-Context AI Ergonomics",
          overview: "The initial era of generative AI forced users into conversational sidebar chatbots that broke immersion and required clumsy back-and-forth prompt engineering. Modern AI-native product design embeds machine intelligence directly into user workspaces through contextual command palettes, slash actions, inline ghost suggestions, and canvas-native toolbars. By minimizing cognitive disruption and prioritizing keyboard navigation, designers transform AI from an external novelty into an invisible, high-leverage cognitive extension.",
          keyPoints: [
            "**Zero Context Switching:** Bring AI capabilities to the user's cursor rather than forcing them into a separate sidebar chat window.",
            "**Keyboard First Velocity:** Keyboard shortcuts and fuzzy search enable power users to execute complex multi-step actions in seconds.",
            "**Visual Differentiation:** Clearly differentiate uncommitted AI ghost suggestions from user-verified, database-persisted text."
          ]
        },
        officialDocs: [
          {
            title: "Linear Method: Principles of Keyboard-First Design & Command Palettes",
            url: "https://linear.app/method",
            type: "Industry Benchmark"
          },
          {
            title: "Raycast Developer Documentation: Designing Contextual Command Actions",
            url: "https://developers.raycast.com",
            type: "Design Guidelines"
          },
          {
            title: "W3C WAI-ARIA Authoring Practices: Combobox Design Pattern",
            url: "https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",
            type: "Accessibility Standard"
          },
          {
            title: "GitHub Copilot Research: Cognitive Ergonomics of Ghost Text",
            url: "https://github.blog/news-insights/research/",
            type: "UX Research"
          }
        ]
      }
    },

    // Node 9
    {
      id: "step-9",
      stepNumber: 9,
      phaseId: "phase-3",
      phase: "Phase 3: Designing AI-Native UX Patterns (Beyond the Chatbox)",
      title: "Streaming States, Skeleton Loaders & Progressive Disclosure",
      timeEstimate: "3 hrs",
      difficulty: "Intermediate",
      summary: "Design perceived-zero-latency interfaces that gracefully handle token streaming, multi-step agent thinking states, and partial results.",
      description: "Generative AI applications introduce fundamentally different latency dynamics than traditional CRUD databases. While a database query returns in under 50ms, a complex multi-step reasoning agent or code generation query can take between 2 to 15 seconds to synthesize a complete response. If the interface shows a generic spinning circle for 10 seconds, users assume the application has frozen, click away, or re-submit their query, creating duplicate API costs. Designing perceived-zero-latency interfaces requires mastering **Token Streaming**, **Progressive Skeleton Loaders**, and **Expandable Agent Thinking Disclosures**.\n\nWhen tokens stream progressively across the screen, user perception of latency drops by over 70% because reading begins immediately. Furthermore, modern reasoning models (such as Claude 3.7 Sonnet Thinking and OpenAI o1/o3) emit structured reasoning phases ('Searching database...', 'Cross-referencing schema...', 'Synthesizing output...'). Designing collapsible accordion components with micro-animations (via Rive or Figma Smart Animate) keeps users informed during long operations while preserving a clean, distraction-free final output.",
      playbook: {
        setup: "Open Figma and set up a component frame for an AI Assistant response card. Install the Rive or LottieFiles plugin if creating custom vector micro-animations.",
        execute: "Design a 4-stage UI state sequence: 1) Initial shimmer pulse skeleton loader, 2) Active collapsible 'Agent Thinking' disclosure box with pulsing indicator dot and real-time step log, 3) Token streaming state with a blinking text cursor (`|`), 4) Completed rendered state with copy/regenerate action toolbar.",
        verify: "Prototype the transition using Figma Smart Animate: ensure smooth 200ms ease-in-out height transitions when the thinking disclosure collapses, and verify that the layout does not suffer from sudden cumulative layout shift (CLS) as content streams.",
        workflow: [
          {
            step: 1,
            title: "Setup",
            description: "Open Figma and set up a component frame for an AI Assistant response card. Install the Rive or LottieFiles plugin if creating custom vector micro-animations."
          },
          {
            step: 2,
            title: "Execute",
            description: "Design a 4-stage UI state sequence: 1) Initial shimmer pulse skeleton loader, 2) Active collapsible 'Agent Thinking' disclosure box with pulsing indicator dot and real-time step log, 3) Token streaming state with a blinking text cursor (`|`), 4) Completed rendered state with copy/regenerate action toolbar."
          },
          {
            step: 3,
            title: "Verify",
            description: "Prototype the transition using Figma Smart Animate: ensure smooth 200ms ease-in-out height transitions when the thinking disclosure collapses, and verify that the layout does not suffer from sudden cumulative layout shift (CLS) as content streams."
          }
        ],
        recommendedTools: [
          {
            name: "Figma Smart Animate",
            type: "Micro-Interaction Engine",
            url: "https://help.figma.com/hc/en-us/articles/360039818874",
            description: "Figma's native animation feature that automatically interpolates matching layers for smooth state transitions and progressive reveals.",
            bestFor: "Streaming cursor animation, thinking accordion expands & skeleton transitions"
          },
          {
            name: "Rive",
            type: "Interactive Vector Animation",
            url: "https://rive.app",
            description: "State-machine-driven vector animation runtime capable of rendering lightweight, interactive AI thinking indicators at 120fps.",
            bestFor: "State-driven AI loading indicators, fluid vector loaders & micro-delight"
          },
          {
            name: "LottieFiles",
            type: "Motion Asset Ecosystem",
            url: "https://lottiefiles.com",
            description: "Platform for embedding lightweight JSON animations directly into Figma prototypes and production web apps.",
            bestFor: "Production JSON animations, pulsing loaders & progress animations"
          }
        ],
        commonMistakes: [
          "Showing a generic infinite spinner without status text during a 10-second agent task, leaving users wondering if the app has crashed.",
          "Permitting aggressive Cumulative Layout Shift (CLS): as streaming tokens stream in, buttons and parent containers jump erratically across the screen.",
          "Leaving the 'Thinking...' log permanently open after generation finishes, cluttering the screen and forcing users to scroll past internal agent thoughts."
        ],
        proShortcuts: [
          "Animate an active blinking cursor (`#7C3AED` pipe symbol with 800ms infinite blink opacity) immediately next to the last streamed token.",
          "Default the 'Thinking Process' disclosure to open during generation, then automatically collapse it to a subtle 1-line badge ('Thought for 3.2s') when generation finishes.",
          "Provide an immediate 'Stop Generating' square button in place of the send button so users can cancel runaway or incorrect prompts."
        ]
      },
      tools: [
        {
          name: "Figma Smart Animate",
          type: "Micro-Interaction Engine",
          url: "https://help.figma.com/hc/en-us/articles/360039818874",
          description: "Figma's native animation feature that automatically interpolates matching layers for smooth state transitions and progressive reveals.",
          bestFor: "Streaming cursor animation, thinking accordion expands & skeleton transitions"
        },
        {
          name: "Rive",
          type: "Interactive Vector Animation",
          url: "https://rive.app",
          description: "State-machine-driven vector animation runtime capable of rendering lightweight, interactive AI thinking indicators at 120fps.",
          bestFor: "State-driven AI loading indicators, fluid vector loaders & micro-delight"
        },
        {
          name: "LottieFiles",
          type: "Motion Asset Ecosystem",
          url: "https://lottiefiles.com",
          description: "Platform for embedding lightweight JSON animations directly into Figma prototypes and production web apps.",
          bestFor: "Production JSON animations, pulsing loaders & progress animations"
        }
      ],
      callouts: {
        mistake: "Showing a generic infinite spinner without status text during a 10-second agent task, leaving users wondering if the app has crashed.",
        proTip: "Default the 'Thinking Process' disclosure to open during generation, then automatically collapse it to a subtle 1-line badge ('Thought for 3.2s') when generation finishes.",
        mistakes: [
          "Showing a generic infinite spinner without status text during a 10-second agent task, leaving users wondering if the app has crashed.",
          "Permitting aggressive Cumulative Layout Shift (CLS): as streaming tokens stream in, buttons and parent containers jump erratically across the screen.",
          "Leaving the 'Thinking...' log permanently open after generation finishes, cluttering the screen and forcing users to scroll past internal agent thoughts."
        ],
        proTips: [
          "Animate an active blinking cursor (`#7C3AED` pipe symbol with 800ms infinite blink opacity) immediately next to the last streamed token.",
          "Default the 'Thinking Process' disclosure to open during generation, then automatically collapse it to a subtle 1-line badge ('Thought for 3.2s') when generation finishes.",
          "Provide an immediate 'Stop Generating' square button in place of the send button so users can cancel runaway or incorrect prompts."
        ]
      },
      promptLab: {
        title: "Streaming State Machine & Thinking Indicator UX Spec",
        description: "Specify the complete UI state transitions, animation timings, and fallback states for multi-step AI inference.",
        variables: [
          {
            id: "Latency Profile",
            name: "Latency Profile",
            label: "Model Latency",
            options: [
              "Multi-Step Autonomous Agent (5 to 15 seconds total duration)",
              "Fast Streaming Reasoning Model (1 to 3 seconds TTFT)",
              "Complex Generative UI Component Synthesis (3 to 8 seconds)"
            ],
            default: "Multi-Step Autonomous Agent (5 to 15 seconds total duration)",
            defaultOption: "Multi-Step Autonomous Agent (5 to 15 seconds total duration)"
          },
          {
            id: "Disclosure Pattern",
            name: "Disclosure Pattern",
            label: "Thinking UI Pattern",
            options: [
              "Collapsible Reasoning Drawer (Auto-collapses upon completion)",
              "Inline Step-by-Step Checklist with Green Checkmarks",
              "Minimalist Single-Line Dynamic Status Ticker"
            ],
            default: "Collapsible Reasoning Drawer (Auto-collapses upon completion)",
            defaultOption: "Collapsible Reasoning Drawer (Auto-collapses upon completion)"
          },
          {
            id: "Fallback & Error Policy",
            name: "Fallback & Error Policy",
            label: "Error Handling",
            options: [
              "Graceful Partial Stream Recovery + One-Click Retry",
              "Inline Error Toast + Prompt Edit Preservation",
              "Silent Fallback to Cached Snapshot with Stale Indicator"
            ],
            default: "Graceful Partial Stream Recovery + One-Click Retry",
            defaultOption: "Graceful Partial Stream Recovery + One-Click Retry"
          }
        ],
        template: `# System Role: Senior Motion Designer & AI Interface Systems Architect
Inference Latency Target: [Latency Profile]
Thinking Display Pattern: [Disclosure Pattern]
Degradation Protocol: [Fallback & Error Policy]

Deliver an engineering-ready streaming UI specification:
1. State Machine Definitions: Define visual states: Idle, Pending, Reasoning/Executing, Streaming Tokens, Completed, Error.
2. Motion & Transition Specs: Detail CSS easing curves, transition durations, and layout stability rules to eliminate Cumulative Layout Shift (CLS).
3. Component Anatomy: Provide a visual ASCII diagram of the thinking drawer, streaming text cursor, and action toolbar.
4. User Agency Controls: Specify exact design and placement of the 'Stop Generation' and 'Regenerate' controls.`,
        expectedOutputs: [
          "Complete UI state machine diagram covering all 6 inference phases",
          "Motion easing and CSS animation token values for smooth transitions",
          "ASCII component layout diagram showing thinking disclosure states"
        ],
        expectedOutput: `### Streaming State Machine: [Disclosure Pattern]

#### 1. Transition Timeline
- **0–300ms**: Shimmer Skeleton (linear pulse, duration: 1.2s infinite)
- **300ms–Agent Finish**: Expand [Disclosure Pattern] (height auto, transition: height 200ms ease-out)
  - Display active step ticker: "Browsing vector index (Found 14 chunks)..."
- **Streaming Phase**: Render markdown tokens with trailing cursor \`|\` (opacity blink: 800ms)
- **Completion**: Auto-collapse Thinking Drawer to \`[💡 Thought for 4.2s ▾]\` and reveal copy toolbar.

#### 2. Component ASCII Architecture
\`\`\`text
┌─────────────────────────────────────────────────────────────┐
│ 💡 Thought for 4.2s                              [Expand ▾] │
├─────────────────────────────────────────────────────────────┤
│ Here is the synthesized architecture blueprint for your     │
│ production pgvector index:                                  │
│                                                             │
│ \`\`\`sql                                                      │
│ CREATE INDEX ON documents USING hnsw (embedding vector_cosine_ops);
│ \`\`\`█                                                        │
├─────────────────────────────────────────────────────────────┤
│ 📋 Copy Code     🔄 Regenerate     👍 Helpful     👎 Report │
└─────────────────────────────────────────────────────────────┘
\`\`\``
      },
      conceptGuide: {
        title: "Perceived Latency & Progressive Disclosure in AI UX",
        overview: "When interacting with complex generative models, latency is an unavoidable reality of transformer token generation. However, perceived latency can be engineered. By streaming tokens progressively, displaying animated shimmer states, and visualizing multi-step agent reasoning through clean, collapsible disclosure accordions, designers keep users engaged and informed. Providing immediate feedback transforms waiting from an agonizing black box into an engaging demonstration of transparent computational thought.",
        keyPoints: [
          "**Immediate Time-to-First-Feedback:** Displaying an animated state within 100ms prevents user disorientation and double-click errors.",
          "**Progressive Token Streaming:** Rendering tokens as they arrive reduces perceived waiting times by over 70% compared to batch responses.",
          "**Collapsible Agent Transparency:** Expose multi-step reasoning steps while they occur, then auto-collapse them to keep final outputs clutter-free."
        ]
      },
      learning: {
        resources: [
          {
            title: "Figma Guide: Smart Animate Principles & Micro-Interactions",
            url: "https://help.figma.com/hc/en-us/articles/360039818874",
            type: "Official Docs"
          },
          {
            title: "Rive Documentation: State Machines & Real-Time Motion Design",
            url: "https://rive.app/community/doc/overview/docoverview",
            type: "Official Docs"
          },
          {
            title: "Nielsen Norman Group: Skeleton Screens & Progress Indicators",
            url: "https://www.nngroup.com/articles/skeleton-screens/",
            type: "Foundational UX"
          },
          {
            title: "Web.dev: Optimizing Cumulative Layout Shift (CLS) in Dynamic UIs",
            url: "https://web.dev/cls/",
            type: "Performance Standard"
          }
        ]
      },
      resources: {
        conceptGuide: {
          title: "Perceived Latency & Progressive Disclosure in AI UX",
          overview: "When interacting with complex generative models, latency is an unavoidable reality of transformer token generation. However, perceived latency can be engineered. By streaming tokens progressively, displaying animated shimmer states, and visualizing multi-step agent reasoning through clean, collapsible disclosure accordions, designers keep users engaged and informed. Providing immediate feedback transforms waiting from an agonizing black box into an engaging demonstration of transparent computational thought.",
          keyPoints: [
            "**Immediate Time-to-First-Feedback:** Displaying an animated state within 100ms prevents user disorientation and double-click errors.",
            "**Progressive Token Streaming:** Rendering tokens as they arrive reduces perceived waiting times by over 70% compared to batch responses.",
            "**Collapsible Agent Transparency:** Expose multi-step reasoning steps while they occur, then auto-collapse them to keep final outputs clutter-free."
          ]
        },
        officialDocs: [
          {
            title: "Figma Guide: Smart Animate Principles & Micro-Interactions",
            url: "https://help.figma.com/hc/en-us/articles/360039818874",
            type: "Official Docs"
          },
          {
            title: "Rive Documentation: State Machines & Real-Time Motion Design",
            url: "https://rive.app/community/doc/overview/docoverview",
            type: "Official Docs"
          },
          {
            title: "Nielsen Norman Group: Skeleton Screens & Progress Indicators",
            url: "https://www.nngroup.com/articles/skeleton-screens/",
            type: "Foundational UX"
          },
          {
            title: "Web.dev: Optimizing Cumulative Layout Shift (CLS) in Dynamic UIs",
            url: "https://web.dev/cls/",
            type: "Performance Standard"
          }
        ]
      }
    },

    // Node 10
    {
      id: "step-10",
      stepNumber: 10,
      phaseId: "phase-3",
      phase: "Phase 3: Designing AI-Native UX Patterns (Beyond the Chatbox)",
      title: "Designing Trust, Citations, Confidence Indicators & Human-in-the-Loop",
      timeEstimate: "3.5 hrs",
      difficulty: "Advanced",
      summary: "Create visual affordances for source attribution pills, diff previews, undo stacks, and approval gates before AI executes destructive actions.",
      description: "Trust is the single highest-order constraint determining whether enterprise users adopt AI features or reject them. When an AI system presents confident factual claims without verifiable citations, users assume it is hallucinating. Even worse, if an autonomous AI agent executes irreversible mutations—such as sending customer emails, modifying database records, or deleting files—without explicit human approval, catastrophic mistakes will inevitably destroy user trust. Full-stack AI product designers architect **Trust and Safety Affordances** into every layer of the UI.\n\nPioneered by products like Perplexity AI and Anthropic Artifacts, trust architecture relies on four pillars: **Inline Source Citation Pills** (`[1]`, `[Doc 4]`) that open grounded excerpt popovers upon hover; **Confidence & Disagreement Badges** that warn users when retrieved facts conflict; **Side-by-Side Diff Previews** displaying additions in green and deletions in red; and **Human-in-the-Loop Confirmation Gates** with non-destructive undo stacks that demand explicit confirmation before executing mutations.",
      playbook: {
        setup: "Review Google's People + AI Guidebook and Microsoft's Guidelines for Human-AI Interaction. In Figma, set up a component set for interactive Citation Pills and Diff Comparison Cards.",
        execute: "Design an interactive Source Citation Card: a subtle inline pill (`[1]`, `[Doc: Contract.pdf]`) that displays an interactive popover card on hover showing the exact document title, verbatim snippet, and page number. Next, design an Action Approval Modal for autonomous agents featuring a red/green diff preview, simulated execution blast radius ('Affects 42 customer rows'), and an explicit 'Confirm Action' button.",
        verify: "Test the flow with usability participants: verify that users instinctively understand that citation pills are clickable, that diff previews make changes immediately legible, and that destructive mutations cannot be accidentally confirmed with a casual single click.",
        workflow: [
          {
            step: 1,
            title: "Setup",
            description: "Review Google's People + AI Guidebook and Microsoft's Guidelines for Human-AI Interaction. In Figma, set up a component set for interactive Citation Pills and Diff Comparison Cards."
          },
          {
            step: 2,
            title: "Execute",
            description: "Design an interactive Source Citation Card: a subtle inline pill (`[1]`, `[Doc: Contract.pdf]`) that displays an interactive popover card on hover showing the exact document title, verbatim snippet, and page number. Next, design an Action Approval Modal for autonomous agents featuring a red/green diff preview, simulated execution blast radius ('Affects 42 customer rows'), and an explicit 'Confirm Action' button."
          },
          {
            step: 3,
            title: "Verify",
            description: "Test the flow with usability participants: verify that users instinctively understand that citation pills are clickable, that diff previews make changes immediately legible, and that destructive mutations cannot be accidentally confirmed with a casual single click."
          }
        ],
        recommendedTools: [
          {
            name: "Figma",
            type: "Interface Prototyping",
            url: "https://www.figma.com",
            description: "Premier design environment for building complex citation popovers, interactive diff inspectors, and approval dialogs.",
            bestFor: "Citation popover components, interactive diff viewers & modal gates"
          },
          {
            name: "Perplexity UI Patterns",
            type: "Attribution Benchmark",
            url: "https://www.perplexity.ai",
            description: "Industry gold standard for inline citation numbering, source favicon pills, and verified knowledge attribution.",
            bestFor: "Inline citation pills, source cards & grounded answer transparency"
          },
          {
            name: "Artifact UI Patterns",
            type: "Human-in-the-Loop Ergonomics",
            url: "https://claude.ai",
            description: "Anthropic's dedicated workspace architecture displaying interactive code, SVG, and markdown artifacts side-by-side with chat.",
            bestFor: "Split-pane artifact inspection, diff reviews & execution preview"
          }
        ],
        commonMistakes: [
          "Allowing autonomous agents to execute destructive actions (e.g., database deletions or bulk emails) without an explicit confirmation gate.",
          "Hiding source citations in a tiny footnote at the bottom of the page rather than placing interactive pills directly adjacent to the relevant claims.",
          "Showing raw code diffs or cryptic JSON to non-technical business users instead of human-readable before-and-after visual previews."
        ],
        proShortcuts: [
          "Display source website favicons directly inside citation badges to build immediate visual credibility and brand recognition.",
          "Implement an automatic 5-second 'Undo' toast bar whenever an AI mutation is approved, giving users a psychological safety net.",
          "Use a split-screen diff view (original on left, AI proposal on right) with red strike-throughs and green highlights for text modifications."
        ]
      },
      tools: [
        {
          name: "Figma",
          type: "Interface Prototyping",
          url: "https://www.figma.com",
          description: "Premier design environment for building complex citation popovers, interactive diff inspectors, and approval dialogs.",
          bestFor: "Citation popover components, interactive diff viewers & modal gates"
        },
        {
          name: "Perplexity UI Patterns",
          type: "Attribution Benchmark",
          url: "https://www.perplexity.ai",
          description: "Industry gold standard for inline citation numbering, source favicon pills, and verified knowledge attribution.",
          bestFor: "Inline citation pills, source cards & grounded answer transparency"
        },
        {
          name: "Artifact UI Patterns",
          type: "Human-in-the-Loop Ergonomics",
          url: "https://claude.ai",
          description: "Anthropic's dedicated workspace architecture displaying interactive code, SVG, and markdown artifacts side-by-side with chat.",
          bestFor: "Split-pane artifact inspection, diff reviews & execution preview"
        }
      ],
      callouts: {
        mistake: "Allowing autonomous agents to execute destructive actions (e.g., database deletions or bulk emails) without an explicit confirmation gate.",
        proTip: "Implement an automatic 5-second 'Undo' toast bar whenever an AI mutation is approved, giving users a psychological safety net.",
        mistakes: [
          "Allowing autonomous agents to execute destructive actions (e.g., database deletions or bulk emails) without an explicit confirmation gate.",
          "Hiding source citations in a tiny footnote at the bottom of the page rather than placing interactive pills directly adjacent to the relevant claims.",
          "Showing raw code diffs or cryptic JSON to non-technical business users instead of human-readable before-and-after visual previews."
        ],
        proTips: [
          "Display source website favicons directly inside citation badges to build immediate visual credibility and brand recognition.",
          "Implement an automatic 5-second 'Undo' toast bar whenever an AI mutation is approved, giving users a psychological safety net.",
          "Use a split-screen diff view (original on left, AI proposal on right) with red strike-throughs and green highlights for text modifications."
        ]
      },
      promptLab: {
        title: "AI Trust Architecture, Diff Preview & Approval Modal Spec",
        description: "Specify UI components for verifiable citations, side-by-side diff comparisons, and destructive action approval gates.",
        variables: [
          {
            id: "Risk Profile",
            name: "Risk Profile",
            label: "Action Severity",
            options: [
              "High-Stakes Mutation (Financial Transfer, Delete Production Data)",
              "Moderate Impact (Send Marketing Campaign, Bulk Status Update)",
              "Low-Risk Informational (Summarize Document, Draft Internal Memo)"
            ],
            default: "High-Stakes Mutation (Financial Transfer, Delete Production Data)",
            defaultOption: "High-Stakes Mutation (Financial Transfer, Delete Production Data)"
          },
          {
            id: "Attribution Mechanism",
            name: "Attribution Mechanism",
            label: "Citation Style",
            options: [
              "Perplexity Style Numbered Favicon Pills with Hover Card",
              "Inline Highlight Overlays with Side Inspector Drawer",
              "Footnote Bibliography with PDF Page Deep-Links"
            ],
            default: "Perplexity Style Numbered Favicon Pills with Hover Card",
            defaultOption: "Perplexity Style Numbered Favicon Pills with Hover Card"
          },
          {
            id: "Approval Architecture",
            name: "Approval Architecture",
            label: "Human Gate Pattern",
            options: [
              "Two-Step Confirmation Modal with Blast Radius Impact Card",
              "Non-Blocking Slide-Over with 10s Cancel Countdown",
              "Side-by-Side Visual Diff Inspector with Per-Item Checkboxes"
            ],
            default: "Two-Step Confirmation Modal with Blast Radius Impact Card",
            defaultOption: "Two-Step Confirmation Modal with Blast Radius Impact Card"
          }
        ],
        template: `# System Role: Principal AI Trust & Safety Interaction Designer
Action Severity: [Risk Profile]
Citation Pattern: [Attribution Mechanism]
Human Oversight Pattern: [Approval Architecture]

Design the comprehensive Trust & Human-in-the-Loop interface specification:
1. Citation Component Anatomy: Detail pill size, hover popover card layout, source excerpt formatting, and confidence badge indicators.
2. Approval Gate Modal: Detail modal layout, warning iconography, blast radius impact stat ('Affects X entities'), and confirm button constraints.
3. Visual Diff Engine: Specify the split-view before/after layout with exact color tokens for additions and deletions.
4. Emergency Recovery: Detail undo toast behavior, timeout durations, and audit trail logging UI.`,
        expectedOutputs: [
          "Component anatomy specification for clickable inline citation pills",
          "Destructive action approval modal specification with impact metrics",
          "Side-by-side diff viewer specifications with color tokens for changes"
        ],
        expectedOutput: `### Trust & Verification Specification: [Risk Profile]

#### 1. Citation Pill & Hover Popover
- **Inline Pill**: Height 20px, \`rounded-full\`, background: \`#F1F5F9\` (dark: \`#1E293B\`), border: \`1px solid #CBD5E1\`
  - Anatomy: Favicon (12x12px) + Number "[1]" + Domain "sec.gov"
- **Hover Popover (Appears after 150ms)**:
  - Width: 320px, Padding: 12px, Shadow: \`shadow-lg\`
  - Header: Document Title with clickable link icon
  - Excerpt: Verbatim text highlighted in subtle yellow background
  - Metadata: "Verified 98% Match • Page 42, Paragraph 3"

#### 2. Human-in-the-Loop Gate: [Approval Architecture]
\`\`\`text
┌─────────────────────────────────────────────────────────────┐
│ ⚠️  Confirm Automated Customer Refund               [✕]     │
├─────────────────────────────────────────────────────────────┤
│ The AI Agent proposes issuing 14 customer refunds ($1,840):  │
│                                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ BLAST RADIUS SUMMARY                                    │ │
│ │ • Total Accounts Affected: 14 enterprise customers       │ │
│ │ • Total Payout Amount: $1,840.00 USD                   │ │
│ │ • Reversible: NO (Direct Stripe charge refund)          │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ [Cancel Request]                  [🔴 Confirm & Execute]   │
└─────────────────────────────────────────────────────────────┘
\`\`\``
      },
      conceptGuide: {
        title: "The Architecture of Trust in Autonomous Systems",
        overview: "As AI transitions from generating passive text to orchestrating autonomous actions across production databases and APIs, interface design becomes the ultimate safeguard. Designing for trust requires balancing efficiency with safety: models must proactively display verifiable citations for their claims, provide clear visual diffs of proposed changes, and introduce deliberate, friction-appropriate human approval gates before executing destructive operations. Interfaces that transparently reveal why an AI reached a conclusion earn long-term user adoption.",
        keyPoints: [
          "**Verifiable Grounding:** Citations must point to exact source passages rather than generic URLs to establish empirical credibility.",
          "**Proportional Friction:** Minor reversible actions should require zero friction, while irreversible mutations must require explicit human sign-off.",
          "**Blast Radius Transparency:** Approval dialogs must clearly quantify the downstream impact (accounts affected, dollars spent) before execution."
        ]
      },
      learning: {
        resources: [
          {
            title: "Google People + AI Guidebook: Designing for Explainability & Trust",
            url: "https://pair.withgoogle.com/guidebook",
            type: "Industry Standard"
          },
          {
            title: "Microsoft Guidelines for Human-AI Interaction: Error Recovery & Gates",
            url: "https://www.microsoft.com/en-us/research/project/guidelines-for-human-ai-interaction/",
            type: "Research Guidelines"
          },
          {
            title: "Perplexity AI: Engineering Citation Transparency in Search",
            url: "https://www.perplexity.ai",
            type: "Product Benchmark"
          },
          {
            title: "Nielsen Norman Group: Designing Transparency & Trust in AI Interfaces",
            url: "https://www.nngroup.com/articles/ai-trust/",
            type: "UX Research"
          }
        ]
      },
      resources: {
        conceptGuide: {
          title: "The Architecture of Trust in Autonomous Systems",
          overview: "As AI transitions from generating passive text to orchestrating autonomous actions across production databases and APIs, interface design becomes the ultimate safeguard. Designing for trust requires balancing efficiency with safety: models must proactively display verifiable citations for their claims, provide clear visual diffs of proposed changes, and introduce deliberate, friction-appropriate human approval gates before executing destructive operations. Interfaces that transparently reveal why an AI reached a conclusion earn long-term user adoption.",
          keyPoints: [
            "**Verifiable Grounding:** Citations must point to exact source passages rather than generic URLs to establish empirical credibility.",
            "**Proportional Friction:** Minor reversible actions should require zero friction, while irreversible mutations must require explicit human sign-off.",
            "**Blast Radius Transparency:** Approval dialogs must clearly quantify the downstream impact (accounts affected, dollars spent) before execution."
          ]
        },
        officialDocs: [
          {
            title: "Google People + AI Guidebook: Designing for Explainability & Trust",
            url: "https://pair.withgoogle.com/guidebook",
            type: "Industry Standard"
          },
          {
            title: "Microsoft Guidelines for Human-AI Interaction: Error Recovery & Gates",
            url: "https://www.microsoft.com/en-us/research/project/guidelines-for-human-ai-interaction/",
            type: "Research Guidelines"
          },
          {
            title: "Perplexity AI: Engineering Citation Transparency in Search",
            url: "https://www.perplexity.ai",
            type: "Product Benchmark"
          },
          {
            title: "Nielsen Norman Group: Designing Transparency & Trust in AI Interfaces",
            url: "https://www.nngroup.com/articles/ai-trust/",
            type: "UX Research"
          }
        ]
      }
    },

    // Node 11
    {
      id: "step-11",
      stepNumber: 11,
      phaseId: "phase-3",
      phase: "Phase 3: Designing AI-Native UX Patterns (Beyond the Chatbox)",
      title: "Multimodal UX Patterns (Voice Mode, Canvas & Vision Inputs)",
      timeEstimate: "3 hrs",
      difficulty: "Advanced",
      summary: "Design fluid audio waveforms, interruptible voice states, and drag-and-drop visual context zones.",
      description: "Human communication is inherently multimodal: we speak, sketch on whiteboards, point at screens, and share reference screenshots. Early AI applications were strictly text-in, text-out. Today, cutting-edge AI systems operate across audio, vision, and infinite 2D spatial canvases. Designing for multimodal interfaces requires entirely new interaction paradigms that go far beyond standard text fields.\n\nVoice interfaces (such as OpenAI Advanced Voice Mode and ElevenLabs Conversational UI) require real-time **Audio Waveform Visualizers**, fluid **Listening / Thinking / Speaking States**, and intuitive **Barge-In (Interruption) Affordances** so users can speak over an AI without feeling awkward. Simultaneously, spatial canvas interfaces (like tldraw and Figma AI) require intuitive **Visual Drag-and-Drop Dropzones**, lasso-selection context grouping, and screenshot-to-UI generation pipelines. Designers must structure visual feedback so users always know what context the model is currently 'seeing' and 'hearing'.",
      playbook: {
        setup: "Study the voice interaction design patterns in ElevenLabs and OpenAI Advanced Voice Mode. In Figma, set up an interactive component set for an active voice dialogue overlay.",
        execute: "Design a fluid Voice Mode interface: a responsive dynamic audio waveform (4–8 animated vertical bars or glowing fluid orb), clear status indicators ('Listening...', 'Thinking...', 'Speaking...'), an explicit mute toggle, and an 'Interrupt / Tap to Speak' control. Next, design an infinite canvas drag-and-drop zone with visual boundary highlights indicating active AI visual context.",
        verify: "Prototype the voice state transitions in Figma: test state switching between Listening, Thinking, and Speaking. Verify that visual audio feedback provides immediate visual confirmation of speech detection within 150ms.",
        workflow: [
          {
            step: 1,
            title: "Setup",
            description: "Study the voice interaction design patterns in ElevenLabs and OpenAI Advanced Voice Mode. In Figma, set up an interactive component set for an active voice dialogue overlay."
          },
          {
            step: 2,
            title: "Execute",
            description: "Design a fluid Voice Mode interface: a responsive dynamic audio waveform (4–8 animated vertical bars or glowing fluid orb), clear status indicators ('Listening...', 'Thinking...', 'Speaking...'), an explicit mute toggle, and an 'Interrupt / Tap to Speak' control. Next, design an infinite canvas drag-and-drop zone with visual boundary highlights indicating active AI visual context."
          },
          {
            step: 3,
            title: "Verify",
            description: "Prototype the voice state transitions in Figma: test state switching between Listening, Thinking, and Speaking. Verify that visual audio feedback provides immediate visual confirmation of speech detection within 150ms."
          }
        ],
        recommendedTools: [
          {
            name: "Figma",
            type: "Interface Prototyping",
            url: "https://www.figma.com",
            description: "Premier design environment for designing animated audio waveform states, spatial canvas controls, and multimodal drop zones.",
            bestFor: "Voice mode UI variants, animated waveform components & canvas mockups"
          },
          {
            name: "ElevenLabs UI",
            type: "Conversational Audio UX",
            url: "https://elevenlabs.io",
            description: "Industry benchmark for conversational voice widgets, ultra-low latency audio streaming, and voice agent state design.",
            bestFor: "Real-time voice interface ergonomics & conversational voice state cues"
          },
          {
            name: "tldraw",
            type: "Spatial Canvas SDK",
            url: "https://www.tldraw.com",
            description: "Open-source infinite canvas whiteboard platform pioneering spatial AI interactions and sketch-to-code workflows.",
            bestFor: "Infinite canvas UX patterns, spatial visual context & sketch-to-UI"
          }
        ],
        commonMistakes: [
          "Failing to provide visual confirmation when the microphone is recording, creating severe privacy anxiety and microphone permission confusion.",
          "Building voice interfaces that do not support seamless user interruption (barge-in), forcing users to wait until the AI finishes speaking long responses.",
          "Allowing users to drag images into a canvas without showing a clear visual boundary box indicating what spatial area the vision model is analyzing."
        ],
        proShortcuts: [
          "Animate vertical waveform bars using CSS scale transformations (`transform: scaleY(v)`) driven by real Web Audio API frequency data.",
          "Provide a persistent keyboard shortcut (e.g., Hold `Spacebar` to Talk) to give power users an effortless walkie-talkie style input model.",
          "Always render a floating real-time text transcription pill alongside voice mode to assist users in noisy environments or with hearing impairments."
        ]
      },
      tools: [
        {
          name: "Figma",
          type: "Interface Prototyping",
          url: "https://www.figma.com",
          description: "Premier design environment for designing animated audio waveform states, spatial canvas controls, and multimodal drop zones.",
          bestFor: "Voice mode UI variants, animated waveform components & canvas mockups"
        },
        {
          name: "ElevenLabs UI",
          type: "Conversational Audio UX",
          url: "https://elevenlabs.io",
          description: "Industry benchmark for conversational voice widgets, ultra-low latency audio streaming, and voice agent state design.",
          bestFor: "Real-time voice interface ergonomics & conversational voice state cues"
        },
        {
          name: "tldraw",
          type: "Spatial Canvas SDK",
          url: "https://www.tldraw.com",
          description: "Open-source infinite canvas whiteboard platform pioneering spatial AI interactions and sketch-to-code workflows.",
          bestFor: "Infinite canvas UX patterns, spatial visual context & sketch-to-UI"
        }
      ],
      callouts: {
        mistake: "Failing to provide visual confirmation when the microphone is recording, creating severe privacy anxiety and microphone permission confusion.",
        proTip: "Always render a floating real-time text transcription pill alongside voice mode to assist users in noisy environments or with hearing impairments.",
        mistakes: [
          "Failing to provide visual confirmation when the microphone is recording, creating severe privacy anxiety and microphone permission confusion.",
          "Building voice interfaces that do not support seamless user interruption (barge-in), forcing users to wait until the AI finishes speaking long responses.",
          "Allowing users to drag images into a canvas without showing a clear visual boundary box indicating what spatial area the vision model is analyzing."
        ],
        proTips: [
          "Animate vertical waveform bars using CSS scale transformations (`transform: scaleY(v)`) driven by real Web Audio API frequency data.",
          "Provide a persistent keyboard shortcut (e.g., Hold `Spacebar` to Talk) to give power users an effortless walkie-talkie style input model.",
          "Always render a floating real-time text transcription pill alongside voice mode to assist users in noisy environments or with hearing impairments."
        ]
      },
      promptLab: {
        title: "Multimodal Voice & Canvas Spatial UX Specification",
        description: "Specify interaction states, audio waveform dynamics, and spatial selection mechanics for multimodal interfaces.",
        variables: [
          {
            id: "Modality Combination",
            name: "Modality Combination",
            label: "Input Modes",
            options: [
              "Real-Time Conversational Voice + Text Transcription Sync",
              "Infinite Spatial Canvas + Screenshot Drag-and-Drop Vision",
              "Camera Video Stream + Audio Co-Pilot Overlays"
            ],
            default: "Real-Time Conversational Voice + Text Transcription Sync",
            defaultOption: "Real-Time Conversational Voice + Text Transcription Sync"
          },
          {
            id: "Audio Visualizer Form",
            name: "Audio Visualizer Form",
            label: "Visualizer Style",
            options: [
              "Fluid Organic 3D Orb (Pulsing glowing sphere with noise distortion)",
              "Multi-Bar Equalizer Waveform (8 bars, dynamic amplitude scaling)",
              "Minimalist Ring Particle Halo (Expanding concentric circles)"
            ],
            default: "Fluid Organic 3D Orb (Pulsing glowing sphere with noise distortion)",
            defaultOption: "Fluid Organic 3D Orb (Pulsing glowing sphere with noise distortion)"
          },
          {
            id: "Interruption Protocol",
            name: "Interruption Protocol",
            label: "Barge-in Behavior",
            options: [
              "Immediate Audio Ducking on User Speech Detection (<100ms)",
              "Push-to-Talk Pushbutton Override",
              "Keyword-Triggered Pause ('Hold on' / 'Wait')"
            ],
            default: "Immediate Audio Ducking on User Speech Detection (<100ms)",
            defaultOption: "Immediate Audio Ducking on User Speech Detection (<100ms)"
          }
        ],
        template: `# System Role: Principal Multimodal Interaction Designer
Modalities: [Modality Combination]
Audio Feedback Style: [Audio Visualizer Form]
Interruption Policy: [Interruption Protocol]

Deliver a complete multimodal interface specification:
1. State Machine Dynamics: Define the 4 core states (Idle, Listening, Processing/Thinking, Speaking) with exact visual and audio feedback specifications.
2. Waveform & Visualizer Specs: Specify dimensions, framerate target (60fps), color token bindings, and Web Audio API amplitude scaling curves.
3. Spatial Context Affordances: Detail how users understand what the model currently has in its context window (vision crop, audio buffer, active document).
4. Accessibility & Fallbacks: Detail real-time transcription captions, keyboard toggles, and microphone permission denial recovery flows.`,
        expectedOutputs: [
          "State machine definition for all 4 conversational audio phases",
          "Visualizer animation parameters and amplitude responsiveness rules",
          "Accessible live-caption transcription overlay layout"
        ],
        expectedOutput: `### Multimodal Interface Spec: [Modality Combination]

#### 1. State Machine Specifications
- **State 1: Idle**: Subtle microphone pill with icon \`mic\` (Border: 1px #CBD5E1).
- **State 2: Listening**: Visualizer expands to 120px orb, pulsing emerald (\`#10B981\`), frequency reacting to user decibels.
  - Caption: "Listening..."
- **State 3: Thinking**: Orb transitions to slow violet morph (\`#7C3AED\`, rotation: 3s linear infinite).
  - Caption: "Thinking..."
- **State 4: Speaking**: Orb expands dynamically based on outgoing TTS audio frequencies.
  - Active affordance: "Tap anywhere or speak to interrupt".

#### 2. Barge-In Interruption Protocol
\`\`\`text
User Speaks -> Voice Activity Detector (VAD) fires in <80ms
            -> Immediate Audio Pause (Audio context muted)
            -> Orb transitions immediately from Speaking to Listening
            -> Outgoing token generation aborted via AbortController
\`\`\``
      },
      conceptGuide: {
        title: "The Ergonomics of Multimodal AI Interactions",
        overview: "Human-computer interaction is evolving rapidly from typed text boxes to multimodal sensory systems. Designing for voice, vision, and spatial canvases requires replacing traditional page-based mental models with continuous, fluid state machines. In voice interfaces, real-time waveform feedback and instant barge-in capabilities make conversations feel natural rather than robotic. In spatial vision interfaces, transparent selection boundaries reassure users about exactly what data is being shared with AI models.",
        keyPoints: [
          "**Immediate Auditory Feedback:** Voice interfaces must visually confirm speech detection within 100ms to eliminate awkward pauses.",
          "**Barge-In (Interruption) Is Mandatory:** Natural conversational voice requires allowing users to speak over the AI to redirect queries instantly.",
          "**Transparent Visual Bounds:** When analyzing screens or images, highlight active visual bounding boxes so users understand model focus."
        ]
      },
      learning: {
        resources: [
          {
            title: "ElevenLabs Conversational AI: Voice Agent Design Guide",
            url: "https://elevenlabs.io/docs/conversational-ai",
            type: "Official Docs"
          },
          {
            title: "tldraw SDK Documentation: Designing Spatial Canvas AI Interfaces",
            url: "https://tldraw.dev",
            type: "Developer Guide"
          },
          {
            title: "Apple Human Interface Guidelines: Audio & Voice Design Patterns",
            url: "https://developer.apple.com/design/human-interface-guidelines/playing-audio",
            type: "Industry Standard"
          },
          {
            title: "W3C Web Audio API Specification & Visualizer Guide",
            url: "https://www.w3.org/TR/webaudio/",
            type: "Technical Standard"
          }
        ]
      },
      resources: {
        conceptGuide: {
          title: "The Ergonomics of Multimodal AI Interactions",
          overview: "Human-computer interaction is evolving rapidly from typed text boxes to multimodal sensory systems. Designing for voice, vision, and spatial canvases requires replacing traditional page-based mental models with continuous, fluid state machines. In voice interfaces, real-time waveform feedback and instant barge-in capabilities make conversations feel natural rather than robotic. In spatial vision interfaces, transparent selection boundaries reassure users about exactly what data is being shared with AI models.",
          keyPoints: [
            "**Immediate Auditory Feedback:** Voice interfaces must visually confirm speech detection within 100ms to eliminate awkward pauses.",
            "**Barge-In (Interruption) Is Mandatory:** Natural conversational voice requires allowing users to speak over the AI to redirect queries instantly.",
            "**Transparent Visual Bounds:** When analyzing screens or images, highlight active visual bounding boxes so users understand model focus."
          ]
        },
        officialDocs: [
          {
            title: "ElevenLabs Conversational AI: Voice Agent Design Guide",
            url: "https://elevenlabs.io/docs/conversational-ai",
            type: "Official Docs"
          },
          {
            title: "tldraw SDK Documentation: Designing Spatial Canvas AI Interfaces",
            url: "https://tldraw.dev",
            type: "Developer Guide"
          },
          {
            title: "Apple Human Interface Guidelines: Audio & Voice Design Patterns",
            url: "https://developer.apple.com/design/human-interface-guidelines/playing-audio",
            type: "Industry Standard"
          },
          {
            title: "W3C Web Audio API Specification & Visualizer Guide",
            url: "https://www.w3.org/TR/webaudio/",
            type: "Technical Standard"
          }
        ]
      }
    },

    // =========================================================================
    // PHASE 4: Interactive Code Prototyping & Figma-to-Code MCP Handoff
    // =========================================================================

    // Node 12
    {
      id: "step-12",
      stepNumber: 12,
      phaseId: "phase-4",
      phase: "Phase 4: Interactive Code Prototyping & Figma-to-Code MCP Handoff",
      title: "Live Interactive React Prototyping with v0, Bolt & Lovable",
      timeEstimate: "4 hrs",
      difficulty: "Intermediate",
      summary: "Turn static Figma frames into functional, browser-testable React + Tailwind prototypes with real micro-interactions.",
      description: "For decades, the standard deliverable from a UI/UX designer was a static Figma prototype connected with fragile spaghetti noodles of Smart Animate transitions. While helpful for basic click-throughs, static prototypes cannot test real input states, dynamic filtering, API latency, or responsive browser viewport edge cases. Product teams frequently discovered major UX flaws only after engineers spent weeks writing production code.\n\nGenerative full-stack prototyping tools like **v0 by Vercel**, **Bolt.new**, and **Lovable** completely bridge this divide. By prompting these engines with high-fidelity Figma screenshots, component specifications, and design token classes, product designers can generate live, fully functional React + Tailwind CSS prototypes in minutes. These browser prototypes feature real interactive state (e.g., live sorting, search filtering, dark mode toggling, and form validation) that can be shared with stakeholders and user testing participants to validate real product ergonomics before engineering sprints begin.",
      playbook: {
        setup: "Export your high-fidelity Figma frame as a clean PNG (2x resolution) or copy its SVG representation. Open v0.dev or Lovable in your browser with your target component libraries (shadcn/ui, Lucide Icons).",
        execute: "Provide the image to v0 alongside a structured prompt specifying your exact design tokens, component hierarchy, and interactive states: 'Build an interactive React dashboard matching this screenshot using Tailwind CSS and shadcn/ui. Make the search bar filter the table rows in real-time and make the status pills toggle between Pending and Done.'",
        verify: "Interact with the live deployed prototype in your browser: test resizing from mobile (375px) to desktop (1440px), verify hover and active states on buttons, and inspect the generated code to ensure clean, semantic Tailwind classes.",
        workflow: [
          {
            step: 1,
            title: "Setup",
            description: "Export your high-fidelity Figma frame as a clean PNG (2x resolution) or copy its SVG representation. Open v0.dev or Lovable in your browser with your target component libraries (shadcn/ui, Lucide Icons)."
          },
          {
            step: 2,
            title: "Execute",
            description: "Provide the image to v0 alongside a structured prompt specifying your exact design tokens, component hierarchy, and interactive states: 'Build an interactive React dashboard matching this screenshot using Tailwind CSS and shadcn/ui. Make the search bar filter the table rows in real-time and make the status pills toggle between Pending and Done.'"
          },
          {
            step: 3,
            title: "Verify",
            description: "Interact with the live deployed prototype in your browser: test resizing from mobile (375px) to desktop (1440px), verify hover and active states on buttons, and inspect the generated code to ensure clean, semantic Tailwind classes."
          }
        ],
        recommendedTools: [
          {
            name: "v0 by Vercel",
            type: "Generative UI Engine",
            url: "https://v0.dev",
            description: "Pioneering generative UI platform by Vercel that converts image mockups and prompts into production-grade React + Tailwind components.",
            bestFor: "Figma-to-React generation, shadcn/ui components & live browser prototypes"
          },
          {
            name: "Lovable",
            type: "Full-Stack Web App Builder",
            url: "https://lovable.dev",
            description: "Autonomous full-stack software engineer that turns design ideas into deployed, database-backed web applications in real time.",
            bestFor: "Full-stack interactive prototypes, database binding & live user testing"
          },
          {
            name: "Tailwind CSS",
            type: "Utility-First CSS Framework",
            url: "https://tailwindcss.com",
            description: "The industry-standard utility-first CSS framework that mirrors modern design tokens with pixel-perfect precision.",
            bestFor: "Design token implementation, responsive breakpoints & fluid layouts"
          }
        ],
        commonMistakes: [
          "Treating the generated code as production backend code rather than a throwaway interactive prototype to validate UX assumptions.",
          "Accepting arbitrary inline styles and non-design-system hex codes instead of enforcing your exact semantic design tokens in the prompt.",
          "Failing to test prototypes on actual physical mobile devices, missing touch-target and thumb-reach usability issues."
        ],
        proShortcuts: [
          "Explicitly specify shadcn/ui components in your v0 prompt: 'Use `@/components/ui/table` and `@/components/ui/badge`' to ensure clean component architecture.",
          "Prompt for stateful mock data: ask the AI to include realistic mock arrays of 10 items with diverse string lengths and status states.",
          "Deploy the v0 prototype to a live Vercel share link and run an unmoderated 5-minute usability test on UserTesting.com before writing product specs."
        ]
      },
      tools: [
        {
          name: "v0 by Vercel",
          type: "Generative UI Engine",
          url: "https://v0.dev",
          description: "Pioneering generative UI platform by Vercel that converts image mockups and prompts into production-grade React + Tailwind components.",
          bestFor: "Figma-to-React generation, shadcn/ui components & live browser prototypes"
        },
        {
          name: "Lovable",
          type: "Full-Stack Web App Builder",
          url: "https://lovable.dev",
          description: "Autonomous full-stack software engineer that turns design ideas into deployed, database-backed web applications in real time.",
          bestFor: "Full-stack interactive prototypes, database binding & live user testing"
        },
        {
          name: "Tailwind CSS",
          type: "Utility-First CSS Framework",
          url: "https://tailwindcss.com",
          description: "The industry-standard utility-first CSS framework that mirrors modern design tokens with pixel-perfect precision.",
          bestFor: "Design token implementation, responsive breakpoints & fluid layouts"
        }
      ],
      callouts: {
        mistake: "Treating the generated code as production backend code rather than a throwaway interactive prototype to validate UX assumptions.",
        proTip: "Explicitly specify shadcn/ui components in your v0 prompt: 'Use `@/components/ui/table` and `@/components/ui/badge`' to ensure clean component architecture.",
        mistakes: [
          "Treating the generated code as production backend code rather than a throwaway interactive prototype to validate UX assumptions.",
          "Accepting arbitrary inline styles and non-design-system hex codes instead of enforcing your exact semantic design tokens in the prompt.",
          "Failing to test prototypes on actual physical mobile devices, missing touch-target and thumb-reach usability issues."
        ],
        proTips: [
          "Explicitly specify shadcn/ui components in your v0 prompt: 'Use `@/components/ui/table` and `@/components/ui/badge`' to ensure clean component architecture.",
          "Prompt for stateful mock data: ask the AI to include realistic mock arrays of 10 items with diverse string lengths and status states.",
          "Deploy the v0 prototype to a live Vercel share link and run an unmoderated 5-minute usability test on UserTesting.com before writing product specs."
        ]
      },
      promptLab: {
        title: "Figma-to-v0 Component Prompting & Tailwind State Blueprint",
        description: "Transform static visual designs into functional React + Tailwind prototypes with real state management.",
        variables: [
          {
            id: "Prototype Scope",
            name: "Prototype Scope",
            label: "Prototype Target",
            options: [
              "Interactive Filterable Data Table with Inspector Drawer",
              "Multi-Step Onboarding Wizard with Dynamic Progress Bar",
              "Analytics Metric Dashboard with Responsive Chart Widgets"
            ],
            default: "Interactive Filterable Data Table with Inspector Drawer",
            defaultOption: "Interactive Filterable Data Table with Inspector Drawer"
          },
          {
            id: "Component Library Stack",
            name: "Component Library Stack",
            label: "Target UI Stack",
            options: [
              "React + Tailwind CSS v4 + shadcn/ui + Lucide Icons",
              "Next.js App Router + Radix Primitives + Tailwind",
              "Vue 3 + Tailwind CSS + Phosphor Icons"
            ],
            default: "React + Tailwind CSS v4 + shadcn/ui + Lucide Icons",
            defaultOption: "React + Tailwind CSS v4 + shadcn/ui + Lucide Icons"
          },
          {
            id: "Interactive State Depth",
            name: "Interactive State Depth",
            label: "State Logic",
            options: [
              "Full Client-Side State (Search, Sort, Pagination, Selection)",
              "Visual State Exploration (Tabs, Accordions, Modal Toggles)",
              "Form Validation State (Error bounds, regex checks, submit feedback)"
            ],
            default: "Full Client-Side State (Search, Sort, Pagination, Selection)",
            defaultOption: "Full Client-Side State (Search, Sort, Pagination, Selection)"
          }
        ],
        template: `# System Role: Senior Front-End Prototype Engineer & UI Architect
Target Prototype: [Prototype Scope]
Technology Stack: [Component Library Stack]
Interactive State Scope: [Interactive State Depth]

You are converting a high-fidelity visual design into a functional browser prototype:
1. Architectural Structure: Modular component separation (e.g., TableHeader, TableRow, TableFilter, DetailDrawer).
2. Tailwind Token Discipline: Strictly use standard Tailwind utility classes for 1px borders, muted surfaces, and typography tokens.
3. Realistic Mock Data: Provide at least 8 realistic, varied records (diverse string lengths, multiple statuses).
4. Interactive Mechanics: Implement useState hooks to support [Interactive State Depth] with instantaneous UI updates and zero page reloads.`,
        expectedOutputs: [
          "Complete single-file React component ready for paste into v0.dev or Next.js",
          "Clean Tailwind CSS utility styling matching design tokens",
          "Working interactive client-side state for real browser usability testing"
        ],
        expectedOutput: `### React Prototype Component: [Prototype Scope]

\`\`\`tsx
'use client';
import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, CheckCircle2, Clock, X, ExternalLink } from 'lucide-react';

interface Entity {
  id: string;
  name: string;
  category: string;
  status: 'Ready' | 'Pending' | 'Archived';
  updatedAt: string;
}

const mockData: Entity[] = [
  { id: '1', name: 'Auth Token Service', category: 'Backend', status: 'Ready', updatedAt: '2h ago' },
  { id: '2', name: 'Postgres HNSW Index', category: 'Database', status: 'Pending', updatedAt: '5h ago' },
  { id: '3', name: 'Voice Waveform Widget', category: 'UI', status: 'Ready', updatedAt: '1d ago' }
];

export default function InteractivePrototype() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Entity | null>(null);

  const filtered = useMemo(() => {
    return mockData.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h1 className="text-xl font-bold tracking-tight">System Infrastructure</h1>
          <div className="relative w-72">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search components..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>
        {/* Render Table and Selected Item Detail Drawer */}
      </div>
    </div>
  );
}
\`\`\``
      },
      conceptGuide: {
        title: "The Power of Code-Native UX Prototyping",
        overview: "Static design files present an idealized illusion of how a software product works. Real users interact with dynamic typography, fluctuating network latency, complex keyboard shortcuts, and variable screen sizes. Generative full-stack prototyping bridges the gap between vision and reality by allowing designers to deploy working React prototypes in minutes rather than waiting weeks for engineering sprints. Testing real code prototypes uncovers subtle interaction flaws early, dramatically accelerating the product development lifecycle.",
        keyPoints: [
          "**Living Code Over Static Pixels:** Test realistic input states, pagination, and dynamic filtering directly inside a web browser.",
          "**Eliminating Handoff Misinterpretations:** Providing engineers with functional React + Tailwind components removes ambiguity regarding intended animations.",
          "**High-Velocity User Validation:** Deploy live interactive prototypes to test real user task completion speeds before writing production code."
        ]
      },
      learning: {
        resources: [
          {
            title: "v0 by Vercel Documentation: Generative UI & Design System Prompting",
            url: "https://v0.dev/docs",
            type: "Official Docs"
          },
          {
            title: "Lovable Engineering Guide: Building Full-Stack Apps with AI",
            url: "https://docs.lovable.dev",
            type: "Developer Guide"
          },
          {
            title: "Tailwind CSS Documentation: Utility-First Fundamentals & Theme Tokens",
            url: "https://tailwindcss.com/docs",
            type: "Official Docs"
          },
          {
            title: "shadcn/ui: Reusable Accessible Component Library Documentation",
            url: "https://ui.shadcn.com",
            type: "Industry Standard"
          }
        ]
      },
      resources: {
        conceptGuide: {
          title: "The Power of Code-Native UX Prototyping",
          overview: "Static design files present an idealized illusion of how a software product works. Real users interact with dynamic typography, fluctuating network latency, complex keyboard shortcuts, and variable screen sizes. Generative full-stack prototyping bridges the gap between vision and reality by allowing designers to deploy working React prototypes in minutes rather than waiting weeks for engineering sprints. Testing real code prototypes uncovers subtle interaction flaws early, dramatically accelerating the product development lifecycle.",
          keyPoints: [
            "**Living Code Over Static Pixels:** Test realistic input states, pagination, and dynamic filtering directly inside a web browser.",
            "**Eliminating Handoff Misinterpretations:** Providing engineers with functional React + Tailwind components removes ambiguity regarding intended animations.",
            "**High-Velocity User Validation:** Deploy live interactive prototypes to test real user task completion speeds before writing production code."
          ]
        },
        officialDocs: [
          {
            title: "v0 by Vercel Documentation: Generative UI & Design System Prompting",
            url: "https://v0.dev/docs",
            type: "Official Docs"
          },
          {
            title: "Lovable Engineering Guide: Building Full-Stack Apps with AI",
            url: "https://docs.lovable.dev",
            type: "Developer Guide"
          },
          {
            title: "Tailwind CSS Documentation: Utility-First Fundamentals & Theme Tokens",
            url: "https://tailwindcss.com/docs",
            type: "Official Docs"
          },
          {
            title: "shadcn/ui: Reusable Accessible Component Library Documentation",
            url: "https://ui.shadcn.com",
            type: "Industry Standard"
          }
        ]
      }
    },

    // Node 13
    {
      id: "step-13",
      stepNumber: 13,
      phaseId: "phase-4",
      phase: "Phase 4: Interactive Code Prototyping & Figma-to-Code MCP Handoff",
      title: "Automated Accessibility (WCAG AA), Contrast & Usability Audits",
      timeEstimate: "2.5 hrs",
      difficulty: "Intermediate",
      summary: "Audit color contrast ratios, keyboard focus rings, touch target sizes, and screen-reader semantics prior to handoff.",
      description: "Accessibility (a11y) is not an optional legal checklist to scramble through before product launch; it is an essential engineering discipline ensuring software is usable by everyone, including people with visual impairments, motor challenges, or situational limitations. Historically, accessibility audits were performed manually with contrast eyedropper tools and tedious screen-reader testing near the end of development, resulting in costly redesigns when primary color palettes failed WCAG AA compliance.\n\nAI-augmented accessibility auditing integrates automated compliance checks directly into the design workflow. Using specialized tools like **Stark for Figma** and multimodal vision models (**Claude Vision Audit**), designers can analyze complex frames in seconds. The AI inspects text-to-background contrast ratios (enforcing 4.5:1 for body copy and 3:1 for interactive controls), checks touch target bounding boxes (minimum 44x44px for mobile), validates logical keyboard Tab order, and drafts accessible ARIA semantic labels for custom icon buttons before handing files to developers.",
      playbook: {
        setup: "Install the Stark plugin in Figma or configure Axe DevTools in your browser. Open your high-fidelity Figma screen containing primary buttons, input forms, and status badges.",
        execute: "Run an automated contrast audit across all text and icon layers in both Light and Dark modes. Next, take a screenshot of your screen and prompt Claude Vision to perform an expert WCAG 2.2 AA audit: check touch target paddings, verify visible focus rings on interactive elements, and generate appropriate `aria-label` attributes for icon-only buttons.",
        verify: "Address every flagged failure: adjust low-contrast color tokens to pass 4.5:1, expand button hit-boxes to at least 44x44px, and document the intended keyboard Tab navigation order directly in Figma notes for engineering.",
        workflow: [
          {
            step: 1,
            title: "Setup",
            description: "Install the Stark plugin in Figma or configure Axe DevTools in your browser. Open your high-fidelity Figma screen containing primary buttons, input forms, and status badges."
          },
          {
            step: 2,
            title: "Execute",
            description: "Run an automated contrast audit across all text and icon layers in both Light and Dark modes. Next, take a screenshot of your screen and prompt Claude Vision to perform an expert WCAG 2.2 AA audit: check touch target paddings, verify visible focus rings on interactive elements, and generate appropriate `aria-label` attributes for icon-only buttons."
          },
          {
            step: 3,
            title: "Verify",
            description: "Address every flagged failure: adjust low-contrast color tokens to pass 4.5:1, expand button hit-boxes to at least 44x44px, and document the intended keyboard Tab navigation order directly in Figma notes for engineering."
          }
        ],
        recommendedTools: [
          {
            name: "Stark for Figma",
            type: "Accessibility Audit Suite",
            url: "https://www.getstark.co",
            description: "Comprehensive accessibility toolkit for Figma that audits contrast, vision simulator modes, alt text, and touch target sizes.",
            bestFor: "In-Figma contrast auditing, color blindness simulation & touch target checks"
          },
          {
            name: "Claude Vision Audit",
            type: "Multimodal Heuristic Review",
            url: "https://console.anthropic.com",
            description: "Multimodal AI capability that reviews interface screenshots against official WCAG 2.2 Level AA criteria and recommends exact token fixes.",
            bestFor: "Automated heuristic usability audits & ARIA attribute specification"
          },
          {
            name: "Axe DevTools",
            type: "Automated a11y Testing",
            url: "https://www.deque.com/axe/devtools/",
            description: "The world's leading digital accessibility testing engine used by enterprise teams to catch accessibility defects automatically.",
            bestFor: "Browser-level automated accessibility testing & HTML DOM validation"
          }
        ],
        commonMistakes: [
          "Using light gray text (#94A3B8) on white backgrounds (#FFFFFF) for placeholder or helper text, which fails the 4.5:1 WCAG contrast requirement.",
          "Relying solely on color to communicate critical state (e.g., showing only a red dot for an error without an accompanying icon or text label).",
          "Designing icon-only buttons without specifying an accessible name (`aria-label=\"Close modal\"`), leaving screen readers completely unable to announce the button's purpose."
        ],
        proShortcuts: [
          "Always pair color cues with iconography and text: e.g., use an exclamation triangle icon alongside red text for error states to support color-blind users.",
          "Ensure touch targets have a minimum dimension of 44x44px even if visual icons are 20px, by adding transparent Auto-Layout padding in Figma.",
          "Document logical keyboard Tab indices (Tab 1, Tab 2, Tab 3) directly on Figma handoff frames using numbered badge components."
        ]
      },
      tools: [
        {
          name: "Stark for Figma",
          type: "Accessibility Audit Suite",
          url: "https://www.getstark.co",
          description: "Comprehensive accessibility toolkit for Figma that audits contrast, vision simulator modes, alt text, and touch target sizes.",
          bestFor: "In-Figma contrast auditing, color blindness simulation & touch target checks"
        },
        {
          name: "Claude Vision Audit",
          type: "Multimodal Heuristic Review",
          url: "https://console.anthropic.com",
          description: "Multimodal AI capability that reviews interface screenshots against official WCAG 2.2 Level AA criteria and recommends exact token fixes.",
          bestFor: "Automated heuristic usability audits & ARIA attribute specification"
        },
        {
          name: "Axe DevTools",
          type: "Automated a11y Testing",
          url: "https://www.deque.com/axe/devtools/",
          description: "The world's leading digital accessibility testing engine used by enterprise teams to catch accessibility defects automatically.",
          bestFor: "Browser-level automated accessibility testing & HTML DOM validation"
        }
      ],
      callouts: {
        mistake: "Using light gray text (#94A3B8) on white backgrounds (#FFFFFF) for placeholder or helper text, which fails the 4.5:1 WCAG contrast requirement.",
        proTip: "Ensure touch targets have a minimum dimension of 44x44px even if visual icons are 20px, by adding transparent Auto-Layout padding in Figma.",
        mistakes: [
          "Using light gray text (#94A3B8) on white backgrounds (#FFFFFF) for placeholder or helper text, which fails the 4.5:1 WCAG contrast requirement.",
          "Relying solely on color to communicate critical state (e.g., showing only a red dot for an error without an accompanying icon or text label).",
          "Designing icon-only buttons without specifying an accessible name (`aria-label=\"Close modal\"`), leaving screen readers completely unable to announce the button's purpose."
        ],
        proTips: [
          "Always pair color cues with iconography and text: e.g., use an exclamation triangle icon alongside red text for error states to support color-blind users.",
          "Ensure touch targets have a minimum dimension of 44x44px even if visual icons are 20px, by adding transparent Auto-Layout padding in Figma.",
          "Document logical keyboard Tab indices (Tab 1, Tab 2, Tab 3) directly on Figma handoff frames using numbered badge components."
        ]
      },
      promptLab: {
        title: "Automated WCAG 2.2 AA Design System Audit Spec",
        description: "Analyze interface designs against official accessibility guidelines and generate remediation tokens.",
        variables: [
          {
            id: "Audit Standard",
            name: "Audit Standard",
            label: "Compliance Tier",
            options: [
              "WCAG 2.2 Level AA (Enterprise Standard: 4.5:1 Text, 3:1 Non-text)",
              "WCAG 2.2 Level AAA (High-Government & Healthcare: 7:1 Text, 4.5:1)",
              "Section 508 / ADA Federal Accessibility Compliance"
            ],
            default: "WCAG 2.2 Level AA (Enterprise Standard: 4.5:1 Text, 3:1 Non-text)",
            defaultOption: "WCAG 2.2 Level AA (Enterprise Standard: 4.5:1 Text, 3:1 Non-text)"
          },
          {
            id: "Component Area Under Review",
            name: "Component Area Under Review",
            label: "Audit Surface",
            options: [
              "Complex Interactive Form (Inputs, Checkboxes, Error Tooltips)",
              "Data Visualization Dashboard (Charts, Legends, High-Contrast States)",
              "Navigation & Modal Dialog (Focus Trapping, Close Buttons, Tabs)"
            ],
            default: "Complex Interactive Form (Inputs, Checkboxes, Error Tooltips)",
            defaultOption: "Complex Interactive Form (Inputs, Checkboxes, Error Tooltips)"
          },
          {
            id: "Remediation Output Type",
            name: "Remediation Output Type",
            label: "Deliverable Format",
            options: [
              "Severity Defect Matrix + Corrective Hex Tokens + ARIA Code",
              "Executive Compliance Summary for Legal & QA Sign-Off",
              "Figma Annotations Checklist for Front-End Engineers"
            ],
            default: "Severity Defect Matrix + Corrective Hex Tokens + ARIA Code",
            defaultOption: "Severity Defect Matrix + Corrective Hex Tokens + ARIA Code"
          }
        ],
        template: `# System Role: Certified Accessibility Specialist (CPACC) & WCAG Auditor
Standard Evaluated: [Audit Standard]
Component Surface: [Component Area Under Review]
Report Format: [Remediation Output Type]

You are auditing an interface for accessibility compliance:
1. Contrast Evaluation: Compute contrast ratios for primary text, placeholder text, border outlines, and interactive buttons against their background surfaces. Flag any value failing [Audit Standard].
2. Non-Color State Indicators: Verify that error, success, and warning states include shape/icon indicators in addition to color.
3. Touch & Tap Targets: Evaluate interactive hitboxes to ensure minimum 44x44 CSS pixels.
4. Semantic HTML & ARIA Mapping: Provide precise ARIA role, aria-expanded, aria-describedby, and aria-live announcements for screen readers.`,
        expectedOutputs: [
          "Detailed defect table detailing contrast ratios and specific WCAG rule failures",
          "Remediated color token recommendations that guarantee mathematical compliance",
          "Exact ARIA attribute specifications for complex interactive components"
        ],
        expectedOutput: `### Accessibility Audit Report: [Component Area Under Review]

#### 1. Contrast Defect & Remediation Matrix
| Element | Current Colors | Measured Ratio | WCAG 2.2 AA Status | Recommended Token Fix |
|:---|:---|:---|:---|:---|
| Form Helper Text | \`#94A3B8\` on \`#FFFFFF\` | **2.9:1** | ❌ FAIL (Needs 4.5:1) | Update to \`#64748B\` (5.1:1 Ratio) |
| Input Border (Inactive) | \`#F1F5F9\` on \`#FFFFFF\` | **1.2:1** | ❌ FAIL (Needs 3.0:1) | Update to \`#CBD5E1\` (3.1:1 Ratio) |
| Primary Action Button | \`#FFFFFF\` on \`#6366F1\` | **4.8:1** | ✅ PASS (Exceeds 4.5:1) | Validated compliant |

#### 2. Accessible ARIA Implementation
\`\`\`html
<!-- Input with accessible error description -->
<label for="work-email" class="text-sm font-medium text-slate-900">Work Email</label>
<input
  id="work-email"
  type="email"
  aria-invalid="true"
  aria-describedby="email-error-msg"
  class="border-red-500 focus:ring-2 focus:ring-red-500"
/>
<p id="email-error-msg" class="flex items-center gap-1.5 text-xs text-red-600 mt-1">
  <span aria-hidden="true">⚠️</span> Enter a valid enterprise work email address.
</p>
\`\`\``
      },
      conceptGuide: {
        title: "Proactive Accessibility Engineering in UI Design",
        overview: "Digital accessibility is a fundamental pillar of user experience engineering, not an afterthought. Designing for accessibility ensures that software functions seamlessly for users navigating with screen readers, keyboard-only inputs, or high-contrast display modes. Automated AI accessibility audits empower designers to catch low-contrast color tokens, cramped touch targets, and missing semantic labels early in Figma, preventing expensive front-end rewrites and ensuring digital products are universally inclusive.",
        keyPoints: [
          "**The 4.5:1 Text Threshold:** All body text must maintain a minimum 4.5:1 contrast ratio against background surfaces under WCAG AA.",
          "**Touch Target Minimums:** Interactive mobile targets must maintain a minimum 44x44px hitbox to support users with motor impairments.",
          "**Multi-Sensory Feedback:** Never rely solely on color to communicate state; always reinforce color cues with distinct icons and clear text."
        ]
      },
      learning: {
        resources: [
          {
            title: "W3C Web Content Accessibility Guidelines (WCAG) 2.2 Specification",
            url: "https://www.w3.org/TR/WCAG22/",
            type: "Official Standard"
          },
          {
            title: "Stark Accessibility Suite: Product Design Testing Guide",
            url: "https://www.getstark.co/blog",
            type: "Tool Documentation"
          },
          {
            title: "Deque University: Web Accessibility & WCAG Compliance Checklist",
            url: "https://dequeuniversity.com",
            type: "Educational Resource"
          },
          {
            title: "The A11Y Project: A Community-Driven Effort to Make Digital Access Easier",
            url: "https://www.a11yproject.com",
            type: "Community Standard"
          }
        ]
      },
      resources: {
        conceptGuide: {
          title: "Proactive Accessibility Engineering in UI Design",
          overview: "Digital accessibility is a fundamental pillar of user experience engineering, not an afterthought. Designing for accessibility ensures that software functions seamlessly for users navigating with screen readers, keyboard-only inputs, or high-contrast display modes. Automated AI accessibility audits empower designers to catch low-contrast color tokens, cramped touch targets, and missing semantic labels early in Figma, preventing expensive front-end rewrites and ensuring digital products are universally inclusive.",
          keyPoints: [
            "**The 4.5:1 Text Threshold:** All body text must maintain a minimum 4.5:1 contrast ratio against background surfaces under WCAG AA.",
            "**Touch Target Minimums:** Interactive mobile targets must maintain a minimum 44x44px hitbox to support users with motor impairments.",
            "**Multi-Sensory Feedback:** Never rely solely on color to communicate state; always reinforce color cues with distinct icons and clear text."
          ]
        },
        officialDocs: [
          {
            title: "W3C Web Content Accessibility Guidelines (WCAG) 2.2 Specification",
            url: "https://www.w3.org/TR/WCAG22/",
            type: "Official Standard"
          },
          {
            title: "Stark Accessibility Suite: Product Design Testing Guide",
            url: "https://www.getstark.co/blog",
            type: "Tool Documentation"
          },
          {
            title: "Deque University: Web Accessibility & WCAG Compliance Checklist",
            url: "https://dequeuniversity.com",
            type: "Educational Resource"
          },
          {
            title: "The A11Y Project: A Community-Driven Effort to Make Digital Access Easier",
            url: "https://www.a11yproject.com",
            type: "Community Standard"
          }
        ]
      }
    },

    // Node 14
    {
      id: "step-14",
      stepNumber: 14,
      phaseId: "phase-4",
      phase: "Phase 4: Interactive Code Prototyping & Figma-to-Code MCP Handoff",
      title: "Zero-Friction Engineering Handoff via Figma Dev Mode & MCP",
      timeEstimate: "3 hrs",
      difficulty: "Advanced",
      summary: "Connect Figma directly to AI IDEs via Model Context Protocol so engineers pull exact design tokens and component specs automatically.",
      description: "The historical handoff process between design and engineering has always been plagued by friction: designers wrote static PDF redline specs or left sprawling sticky notes in Figma files, while front-end engineers eyed pixel margins, guessed hex values, and manually re-invented CSS classes. In modern AI-native engineering, this manual translation is entirely obsolete. The emerging standard connects Figma directly to AI IDEs (such as Cursor and Claude Code) via **Model Context Protocol (MCP)** and **Figma Dev Mode**.\n\nUsing specialized MCP servers like **Framelink Figma MCP**, an AI coding assistant inside Cursor can directly read Figma document nodes, inspect nested Auto-Layout structures, extract semantic design token variables, and generate 1:1 matching TypeScript React components. Instead of a developer asking 'What is the padding on this modal?', the AI IDE queries the Figma MCP endpoint, reads the exact padding token (`p-6`), identifies the matching icon component, and writes the pull request code with zero human transcription errors.",
      playbook: {
        setup: "Enable Figma Dev Mode in your workspace. Install an open-source Figma MCP server (such as Framelink Figma MCP) in your local Cursor or Claude Desktop environment with your Figma Personal Access Token.",
        execute: "In your Figma design file, mark completed frames as 'Ready for Dev'. Open Cursor, invoke the Figma MCP tool using `@figma`, and pass the target node URL: 'Inspect this Figma frame and generate the production React component using our local Tailwind config and shadcn/ui library.'",
        verify: "Inspect the generated pull request: verify that component names, spacing tokens, and color variables match your Figma design system 1:1 with zero hardcoded arbitrary pixel values.",
        workflow: [
          {
            step: 1,
            title: "Setup",
            description: "Enable Figma Dev Mode in your workspace. Install an open-source Figma MCP server (such as Framelink Figma MCP) in your local Cursor or Claude Desktop environment with your Figma Personal Access Token."
          },
          {
            step: 2,
            title: "Execute",
            description: "In your Figma design file, mark completed frames as 'Ready for Dev'. Open Cursor, invoke the Figma MCP tool using `@figma`, and pass the target node URL: 'Inspect this Figma frame and generate the production React component using our local Tailwind config and shadcn/ui library.'"
          },
          {
            step: 3,
            title: "Verify",
            description: "Inspect the generated pull request: verify that component names, spacing tokens, and color variables match your Figma design system 1:1 with zero hardcoded arbitrary pixel values."
          }
        ],
        recommendedTools: [
          {
            name: "Figma Dev Mode",
            type: "Developer Inspection Workspace",
            url: "https://www.figma.com/dev-mode/",
            description: "Dedicated workspace inside Figma that translates visual designs into CSS, iOS, and Android code properties with token references.",
            bestFor: "Design inspection, CSS box-model extraction & dev status tracking"
          },
          {
            name: "Framelink Figma MCP",
            type: "Model Context Protocol Server",
            url: "https://github.com/framelink/figma-mcp",
            description: "Open-source Model Context Protocol server that connects Figma file nodes directly to AI IDEs like Cursor and Claude Desktop.",
            bestFor: "Real-time AI IDE connection & automated component generation"
          },
          {
            name: "Cursor",
            type: "AI Code Editor",
            url: "https://www.cursor.com",
            description: "The premier AI-native IDE with native MCP client support that writes production React code directly from design context.",
            bestFor: "Figma-to-code synthesis, automated pull requests & token alignment"
          }
        ],
        commonMistakes: [
          "Leaving messy layer names (e.g., 'Frame 49204', 'Group 12') in Figma, which forces AI models to generate cryptic, unreadable JSX variable names.",
          "Using detached components and raw hardcoded hex codes rather than linked design system components and semantic variables.",
          "Failing to mark frames with the official 'Ready for Dev' tag, leading developers to accidentally implement unfinished explorations."
        ],
        proShortcuts: [
          "Organize layers with semantic HTML tags in mind: name frames `Header`, `Main`, `Aside`, `Footer`, `Article`, and `Button` for clean JSX generation.",
          "Configure `.cursorrules` in your repository to instruct Cursor to always cross-reference design tokens before outputting Tailwind classes.",
          "Use Figma Dev Mode Annotations to explicitly document component props, API endpoint hooks, and responsive behavior for the engineering team."
        ]
      },
      tools: [
        {
          name: "Figma Dev Mode",
          type: "Developer Inspection Workspace",
          url: "https://www.figma.com/dev-mode/",
          description: "Dedicated workspace inside Figma that translates visual designs into CSS, iOS, and Android code properties with token references.",
          bestFor: "Design inspection, CSS box-model extraction & dev status tracking"
        },
        {
          name: "Framelink Figma MCP",
          type: "Model Context Protocol Server",
          url: "https://github.com/framelink/figma-mcp",
          description: "Open-source Model Context Protocol server that connects Figma file nodes directly to AI IDEs like Cursor and Claude Desktop.",
          bestFor: "Real-time AI IDE connection & automated component generation"
        },
        {
          name: "Cursor",
          type: "AI Code Editor",
          url: "https://www.cursor.com",
          description: "The premier AI-native IDE with native MCP client support that writes production React code directly from design context.",
          bestFor: "Figma-to-code synthesis, automated pull requests & token alignment"
        }
      ],
      callouts: {
        mistake: "Leaving messy layer names (e.g., 'Frame 49204', 'Group 12') in Figma, which forces AI models to generate cryptic, unreadable JSX variable names.",
        proTip: "Organize layers with semantic HTML tags in mind: name frames `Header`, `Main`, `Aside`, `Footer`, `Article`, and `Button` for clean JSX generation.",
        mistakes: [
          "Leaving messy layer names (e.g., 'Frame 49204', 'Group 12') in Figma, which forces AI models to generate cryptic, unreadable JSX variable names.",
          "Using detached components and raw hardcoded hex codes rather than linked design system components and semantic variables.",
          "Failing to mark frames with the official 'Ready for Dev' tag, leading developers to accidentally implement unfinished explorations."
        ],
        proTips: [
          "Organize layers with semantic HTML tags in mind: name frames `Header`, `Main`, `Aside`, `Footer`, `Article`, and `Button` for clean JSX generation.",
          "Configure `.cursorrules` in your repository to instruct Cursor to always cross-reference design tokens before outputting Tailwind classes.",
          "Use Figma Dev Mode Annotations to explicitly document component props, API endpoint hooks, and responsive behavior for the engineering team."
        ]
      },
      promptLab: {
        title: "Model Context Protocol Figma Integration & Component Code Generator",
        description: "Configure MCP server tool calls to read Figma node trees and generate type-safe React components.",
        variables: [
          {
            id: "Handoff Surface",
            name: "Handoff Surface",
            label: "Design Node Type",
            options: [
              "Complex Data Grid with Multi-Select & Drawer",
              "Navigation Shell with Dynamic Breadcrumbs & User Menu",
              "Payment Checkout Modal with Stripe Card Element"
            ],
            default: "Complex Data Grid with Multi-Select & Drawer",
            defaultOption: "Complex Data Grid with Multi-Select & Drawer"
          },
          {
            id: "MCP Protocol Server",
            name: "MCP Protocol Server",
            label: "MCP Integration Tool",
            options: [
              "Framelink Figma MCP (@modelcontextprotocol/server-figma)",
              "Figma REST API v1 Node Downloader",
              "Native Cursor Dev Mode Extension Bridge"
            ],
            default: "Framelink Figma MCP (@modelcontextprotocol/server-figma)",
            defaultOption: "Framelink Figma MCP (@modelcontextprotocol/server-figma)"
          },
          {
            id: "Front-End Code Target",
            name: "Front-End Code Target",
            label: "Target Codebase",
            options: [
              "Next.js App Router (TypeScript + Tailwind CSS + Lucide Icons)",
              "Vite + React 19 + Radix UI Primitives",
              "Remix / React Router v7 + Tailwind CSS"
            ],
            default: "Next.js App Router (TypeScript + Tailwind CSS + Lucide Icons)",
            defaultOption: "Next.js App Router (TypeScript + Tailwind CSS + Lucide Icons)"
          }
        ],
        template: `# System Role: Principal Full-Stack Bridge Engineer & Design System Automator
Target Node: [Handoff Surface]
MCP Architecture: [MCP Protocol Server]
Production Framework: [Front-End Code Target]

Execute the zero-friction Figma-to-Code handoff workflow:
1. MCP Query Payload: Formulate the exact tool call to retrieve node layout metadata, bounding boxes, and variable bindings from Figma.
2. Token Translation Map: Translate Figma Variable IDs (e.g., VariableID:4910) into local project Tailwind classes.
3. Component Code Generation: Produce clean, semantic TypeScript React code matching [Front-End Code Target] without hardcoded arbitrary pixels.
4. QA Checklist: Provide a 4-point verification checklist ensuring flexbox alignment, responsive collapse, and accessibility parity.`,
        expectedOutputs: [
          "Exact MCP server JSON payload for inspecting target Figma nodes",
          "Automated token mapping table translating Figma variables to Tailwind classes",
          "Production-ready TypeScript React component adhering strictly to design tokens"
        ],
        expectedOutput: `### MCP Figma-to-Code Specification: [Handoff Surface]

#### 1. MCP Query Configuration (\`figma_get_node\`)
\`\`\`json
{
  "server": "figma-mcp",
  "tool": "get_file_nodes",
  "arguments": {
    "file_key": "xK849204Jks",
    "ids": ["142:8594"],
    "geometry": "paths",
    "plugin_data": "tokens"
  }
}
\`\`\`

#### 2. Generated React Component (\`DataGridShell.tsx\`)
\`\`\`tsx
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export function DataGridShell({ data }: { data: any[] }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-xs">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead className="w-12 text-muted-foreground">Select</TableHead>
            <TableHead className="font-semibold text-foreground">Entity Name</TableHead>
            <TableHead className="font-semibold text-foreground">Status</TableHead>
            <TableHead className="text-right font-semibold text-foreground">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} className="hover:bg-muted/40 transition-colors">
              <TableCell><input type="checkbox" className="rounded-sm border-input" /></TableCell>
              <TableCell className="font-medium text-foreground">{row.name}</TableCell>
              <TableCell><Badge variant="outline">{row.status}</Badge></TableCell>
              <TableCell className="text-right text-sm text-muted-foreground">View Details</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
\`\`\``
      },
      conceptGuide: {
        title: "The Zero-Friction Future of Design Handoff",
        overview: "The historical wall between designers and developers is collapsing. In modern software organizations, design systems are unified semantic registries where tokens, components, and variables maintain 1:1 mathematical parity between Figma and code. Through Model Context Protocol (MCP) integrations, AI IDEs can directly query Figma design files, read Auto-Layout constraints, inspect token variables, and generate pixel-perfect, accessible React components in real time. This eliminates tedious manual redlining, prevents styling drift, and empowers designers and engineers to collaborate at unprecedented velocity.",
        keyPoints: [
          "**Live Protocol Synchronization:** MCP servers bridge Figma design data directly into AI code editors like Cursor and Claude Code.",
          "**Eliminating Arbitrary Values:** Semantic design tokens ensure that generated code strictly adheres to established design systems.",
          "**Developer Mode Transparency:** Annotating component props and states directly in Dev Mode guarantees unambiguous front-end implementation."
        ]
      },
      learning: {
        resources: [
          {
            title: "Figma Dev Mode Documentation: Inspecting Components & Token Specs",
            url: "https://help.figma.com/hc/en-us/articles/15023124642207",
            type: "Official Docs"
          },
          {
            title: "Framelink Figma MCP Server GitHub: Connecting Figma to Cursor & Claude",
            url: "https://github.com/framelink/figma-mcp",
            type: "Open Source Tool"
          },
          {
            title: "Model Context Protocol (MCP) Official Specification & SDKs",
            url: "https://modelcontextprotocol.io",
            type: "Industry Protocol"
          },
          {
            title: "Cursor AI IDE Documentation: Rules for AI Code Generation & Dev Mode",
            url: "https://docs.cursor.com",
            type: "Developer Guide"
          }
        ]
      },
      resources: {
        conceptGuide: {
          title: "The Zero-Friction Future of Design Handoff",
          overview: "The historical wall between designers and developers is collapsing. In modern software organizations, design systems are unified semantic registries where tokens, components, and variables maintain 1:1 mathematical parity between Figma and code. Through Model Context Protocol (MCP) integrations, AI IDEs can directly query Figma design files, read Auto-Layout constraints, inspect token variables, and generate pixel-perfect, accessible React components in real time. This eliminates tedious manual redlining, prevents styling drift, and empowers designers and engineers to collaborate at unprecedented velocity.",
          keyPoints: [
            "**Live Protocol Synchronization:** MCP servers bridge Figma design data directly into AI code editors like Cursor and Claude Code.",
            "**Eliminating Arbitrary Values:** Semantic design tokens ensure that generated code strictly adheres to established design systems.",
            "**Developer Mode Transparency:** Annotating component props and states directly in Dev Mode guarantees unambiguous front-end implementation."
          ]
        },
        officialDocs: [
          {
            title: "Figma Dev Mode Documentation: Inspecting Components & Token Specs",
            url: "https://help.figma.com/hc/en-us/articles/15023124642207",
            type: "Official Docs"
          },
          {
            title: "Framelink Figma MCP Server GitHub: Connecting Figma to Cursor & Claude",
            url: "https://github.com/framelink/figma-mcp",
            type: "Open Source Tool"
          },
          {
            title: "Model Context Protocol (MCP) Official Specification & SDKs",
            url: "https://modelcontextprotocol.io",
            type: "Industry Protocol"
          },
          {
            title: "Cursor AI IDE Documentation: Rules for AI Code Generation & Dev Mode",
            url: "https://docs.cursor.com",
            type: "Developer Guide"
          }
        ]
      }
    }
  ]
};
