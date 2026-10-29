// Complete production-grade steps data for "Cursor & AI IDEs" Roadmap (12 Nodes)

export const cursorAiIdesData = {
  id: "cursor-ai-ides",
  title: "Cursor & AI IDEs",
  description: "Rules for AI (.cursorrules), codebase indexing, multi-file composer edits, and terminal integration.",
  category: "Tool Mastery Roadmaps",
  stepCount: 12,
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: Workspace Setup, Codebase Indexing & Rules Architecture",
      description: "Configure privacy modes, model routing, deep vector codebase indexing, and modular path-scoped .cursor/rules/*.mdc configuration."
    },
    {
      id: "phase-2",
      title: "Phase 2: Inline Edits, Multi-File Composer & Context Pinning",
      description: "Master surgical inline diffs (Cmd+K), precise context injection with @-symbols, and full-stack multi-file feature scaffolding in Composer (Cmd+I)."
    },
    {
      id: "phase-3",
      title: "Phase 3: MCP Servers, Vision Debugging & Terminal Autonomy",
      description: "Connect Model Context Protocol (MCP) servers to external databases, leverage vision models for screenshot-to-code, and run self-healing CLI loops in the terminal."
    },
    {
      id: "phase-4",
      title: "Phase 4: Checkpoints, Large-Repo Scaling & Automated PR Workflows",
      description: "Manage context degradation with atomic checkpoints, navigate complex monorepos, and automate conventional commits, diff audits, and pull request descriptions."
    }
  ],
  steps: [
    // Node 1
    {
      id: "step-1",
      stepNumber: 1,
      phaseId: "phase-1",
      title: "AI IDE Configuration, Keybindings & Model Routing",
      timeEstimate: "1 hr",
      difficulty: "Beginner",
      summary: "Configure Cursor settings, enable enterprise privacy mode, master essential keyboard shortcuts, and configure dynamic model routing between reasoning and fast autocomplete engines.",
      description: "AI-native IDEs like Cursor and Windsurf fundamentally shift developer velocity by embedding LLMs directly into the editor's text buffer and language server protocol (LSP). However, maximizing performance requires deliberate configuration. Developers must enable Privacy Mode to prevent proprietary enterprise code from being retained or used for model training, import their existing VS Code keybindings and extensions without collision, and configure dynamic model routing. Choosing between high-reasoning frontier models (like Claude 3.7 Sonnet with Thinking mode for architectural planning), fast instruction models (Claude 3.5 Sonnet for surgical refactoring), and dedicated low-latency autocomplete engines (Cursor-fast or Copilot++) prevents expensive latency bottlenecks while maintaining code quality.",
      playbook: {
        setup: "Install Cursor from cursor.com. In the setup wizard, import your existing VS Code extensions, keybindings, and theme. Navigate to Cursor Settings > General and enable Privacy Mode to ensure zero code storage on remote servers.",
        execute: "Configure your primary model router in Cursor Settings > Models. Set Claude 3.7 Sonnet as your default Chat and Composer model. Enable 'Cursor-fast' or 'Copilot++' for low-latency multi-line ghost text completions. Remap core keybindings to avoid collisions: Cmd+K (Inline Edit), Cmd+I (Composer), Cmd+L (Chat), and Cmd+Shift+K (Generate above selection).",
        verify: "Confirm the Privacy Mode indicator displays active in your settings. Type a boilerplate TypeScript interface in an empty file to verify tab autocomplete responds in under 100ms. Open chat (Cmd+L) and submit a test query to confirm Claude 3.7 Sonnet responds with active reasoning tokens."
      },
      tools: [
        {
          name: "Cursor",
          type: "Freemium",
          url: "https://cursor.com",
          description: "Leading AI-native code editor forked from VS Code featuring deep codebase indexing, inline diffs, and multi-file Composer agents.",
          bestFor: "AI-assisted full-stack development, inline editing & multi-file refactoring"
        },
        {
          name: "Windsurf",
          type: "Freemium",
          url: "https://codeium.com/windsurf",
          description: "AI IDE by Codeium featuring Cascade flow, live collaborative reasoning, and autonomous multi-file editing.",
          bestFor: "Collaborative agent flows & alternative AI-native editor workflows"
        },
        {
          name: "VS Code",
          type: "Free",
          url: "https://code.visualstudio.com",
          description: "Open-source extensible code editor providing the foundational extension ecosystem, language servers, and keymap standards for Cursor.",
          bestFor: "Extension compatibility, settings profiles & language server protocol foundation"
        }
      ],
      callouts: {
        mistake: "Leaving Privacy Mode disabled when working on proprietary or client codebases, risking compliance violations under enterprise security policies.",
        proTip: "Toggle models dynamically mid-workflow: use Claude 3.7 Sonnet with Thinking for complex architecture and Claude 3.5 Sonnet for rapid, predictable single-file refactoring.",
        mistakes: [
          "Leaving Privacy Mode disabled on proprietary enterprise codebases, inadvertently sending code snippets to default telemetry streams.",
          "Selecting heavy reasoning models for simple tab autocompletion, causing jarring 2-second typing latency instead of instant ghost text.",
          "Failing to resolve keybinding conflicts with existing VS Code extensions (e.g. Vim mode or Docker shortcuts overriding Cmd+K)."
        ],
        proTips: [
          "Use the model selector dropdown directly inside the Cmd+L chat bar (or press Cmd+/ ) to switch models instantly without opening settings.",
          "Configure 'Custom Rules for AI' in General Settings with your global personal preferences (e.g. 'Never write comments explaining obvious syntax', 'Use functional components with explicit return types').",
          "Enable 'Show inline diffs' in Cursor Settings to review all generated suggestions before writing them to the active file buffer."
        ]
      },
      promptLab: {
        title: "AI IDE Global System Priming & Behavioral Instructions",
        description: "Configure your global Cursor system prompt to enforce strict senior engineer coding standards, eliminate conversational filler, and mandate deterministic TypeScript.",
        variables: [
          {
            name: "Primary Language",
            label: "Primary Language",
            options: ["TypeScript (Strict Mode)", "Python (Type Hints + Pydantic)", "Go (Idiomatic)", "Rust (Safe Concurrency)"],
            default: "TypeScript (Strict Mode)"
          },
          {
            name: "Conciseness Level",
            label: "Response Style",
            options: ["Zero Conversational Filler (Code + Diffs Only)", "Architectural Context + Minimal Explanation", "Comprehensive Educational Explanations"],
            default: "Zero Conversational Filler (Code + Diffs Only)"
          },
          {
            name: "Design Constraint",
            label: "Styling & UI Tokens",
            options: ["Tailwind CSS (Strict 1px Borders, Slate Palette)", "CSS Modules (Vanilla)", "Shadcn UI + Radix Primitives"],
            default: "Tailwind CSS (Strict 1px Borders, Slate Palette)"
          }
        ],
        template: `You are an expert AI software engineer embedded directly inside Cursor as a pair programming assistant.

Adopt these operational principles for all generated code, inline diffs, and architectural plans:
- Primary Language & Contract: [Primary Language]. Always enforce strict typing, runtime boundary checks, and never emit 'any' or loose type assertions.
- Response Style: [Conciseness Level]. Eliminate polite conversational preamble ("Sure, I can help with that", "Here is the code"). Output production-ready code blocks and precise file diffs immediately.
- UI & Styling: [Design Constraint]. Use consistent design tokens, avoid random arbitrary hex values, and maintain clean responsive breakpoints.
- Refactoring Integrity: When updating existing code, preserve surrounding comments, existing function signatures, and exported contracts unless explicitly instructed otherwise.
- Error Handling: Handle edge cases, nullability, network timeouts, and asynchronous rejection states deterministically.`,
        expectedOutput: `### Configured Cursor Global Instructions

\`\`\`markdown
# Global Cursor AI Persona & Coding Rules

- **Language:** TypeScript with strict mode enabled. No 'any', no forced type assertions ('as unknown as T') without documented justification.
- **Output Mode:** Direct code execution. No conversational boilerplate. Prepend all code changes with target file paths.
- **Design Tokens:** Strict Tailwind CSS adhering to a refined slate palette (#0F172A, #1E293B, #334155) with clean 1px borders.
- **Modularity:** Keep functions under 40 lines. Prefer single-responsibility pure functions over sprawling stateful classes.
- **Self-Verification:** Before outputting diffs, mentally trace null inputs, empty arrays, and async promise rejections.
\`\`\``
      },
      conceptGuide: {
        title: "Understanding AI IDE Architecture & Dynamic Model Routing",
        overview: "Modern AI code editors are not simple wrappers around language model APIs; they are hybrid environments marrying the Language Server Protocol (LSP) with local vector embeddings and prompt synthesis engines. When you edit code in Cursor, the editor combines your active file buffer, recent edit history, cursor line coordinates, and language diagnostics into a dynamic context envelope. Model routing is the art of directing different tasks to specialized models: sub-50ms lightweight models for single-token autocomplete, medium-weight models for surgical inline diffs, and high-reasoning frontier models for multi-file system composition.",
        keyPoints: [
          "**Hybrid LSP & Vector Context:** Cursor enriches prompts with real-time TypeScript errors and file symbol hierarchies before dispatching to the LLM.",
          "**Zero-Data Retention Privacy:** Enterprise privacy mode guarantees code snippets are processed in stateless RAM buffers without being used for model retraining.",
          "**Tiered Latency vs. Reasoning:** Use fast autocomplete models for typing flow, and reserve deep reasoning models (Claude 3.7 Thinking) for complex multi-file features."
        ]
      },
      learning: {
        resources: [
          {
            title: "Cursor Official Privacy & Enterprise Security Guide",
            url: "https://docs.cursor.com/context/privacy",
            type: "Official Docs"
          },
          {
            title: "Cursor Model Selection & Dynamic Routing Overview",
            url: "https://docs.cursor.com/models/overview",
            type: "Official Docs"
          },
          {
            title: "VS Code Keybindings Migration & Customization Reference",
            url: "https://code.visualstudio.com/docs/getstarted/keybindings",
            type: "Reference"
          },
          {
            title: "Anthropic Claude 3.7 Sonnet Prompt & Engineering Capabilities",
            url: "https://docs.anthropic.com/en/docs/models/claude-3-7-sonnet",
            type: "Guide"
          }
        ]
      }
    },

    // Node 2
    {
      id: "step-2",
      stepNumber: 2,
      phaseId: "phase-1",
      title: "Deep Codebase Indexing & Semantic @Codebase Search",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Optimize local codebase vector embeddings, configure .cursorignore to exclude build artifacts and noise, and execute high-precision semantic search queries with @Codebase.",
      description: "For an AI assistant to reason accurately about an entire application, it must understand relationships between files that are not currently open in editor tabs. Cursor achieves this through Codebase Indexing: splitting your workspace files into semantic chunks, calculating vector embeddings, and storing them locally for hybrid semantic and keyword retrieval. However, if your vector index is polluted with minified build outputs (`.next`, `dist`, `build`), massive lockfiles, test coverage dumps, and giant JSON test fixtures, the semantic search will retrieve irrelevant noise, diluting the LLM's attention window. Mastering codebase indexing requires engineering a strict `.cursorignore` configuration and phrasing semantic queries with high architectural precision.",
      playbook: {
        setup: "Inspect your repository root. Create a dedicated `.cursorignore` file. Include all items from `.gitignore` plus data directories, build caches, minified vendor bundles, SVG icon sprites, and large JSON mock data fixtures.",
        execute: "Open Cursor Settings > Features > Codebase Indexing. Click 'Resync Index' and monitor the indexing progress bar. Verify the total indexed file count matches your actual human-written source code files (typically 500–2,500 files for a standard web app). Test semantic queries in Chat using the `@Codebase` symbol (e.g. `@Codebase where is user authentication state serialized across server actions?`).",
        verify: "Examine the search citations returned under the chat response. Verify Cursor references the exact source files and line ranges where the logic lives, with zero citations to `.next/cache` or `node_modules`."
      },
      tools: [
        {
          name: "Cursor Codebase Indexing",
          type: "Freemium",
          url: "https://docs.cursor.com/context/@-symbols/@-codebase",
          description: "Local vector embedding and retrieval engine built directly into Cursor for semantic codebase-wide search.",
          bestFor: "Semantic code search, architectural discovery & multi-file dependency mapping"
        },
        {
          name: ".cursorignore",
          type: "Free",
          url: "https://docs.cursor.com/context/ignore-files",
          description: "Configuration standard used to exclude files, build folders, and giant data artifacts from AI vector indexing.",
          bestFor: "Embedding space hygiene, token conservation & search precision optimization"
        },
        {
          name: "Repomix",
          type: "Free",
          url: "https://repomix.com",
          description: "Open-source CLI tool that packs entire codebases into structured XML/Markdown formats for large-context LLM auditing.",
          bestFor: "External whole-codebase audits, context packing & repository ingestion"
        }
      ],
      callouts: {
        mistake: "Failing to create a `.cursorignore` file, causing Cursor to index 50MB lockfiles and minified build artifacts, completely corrupting semantic search accuracy.",
        proTip: "Combine `@Codebase` with specific symbol names or architectural verbs (e.g. `@Codebase where is Stripe webhook signature validation handled?`) rather than vague prompts like `@Codebase fix my app`.",
        mistakes: [
          "Allowing `.next/cache`, `dist/`, or `coverage/` directories to be indexed, resulting in outdated minified code citations.",
          "Indexing generated mock databases or 20MB JSON fixtures, exhausting embedding quotas and degrading vector relevance.",
          "Submitting vague one-word queries to `@Codebase`, forcing the retriever to guess intent across hundreds of weakly matched chunks."
        ],
        proTips: [
          "Add `*.lock`, `*.min.js`, `*.map`, `*.svg`, and `*.d.ts.map` to `.cursorignore` immediately upon creating a project.",
          "Use the 'Advanced' toggle in `@Codebase` queries to manually constrain semantic search to specific subdirectories (e.g. `src/server/`).",
          "Check indexing status after adding major dependencies or new microservices to ensure newly created schemas are indexed."
        ]
      },
      promptLab: {
        title: "Semantic Codebase Discovery & Architectural Audit Prompt",
        description: "Formulate surgical @Codebase queries that guide Cursor to trace full data lifecycles across frontend components, API endpoints, and database models.",
        variables: [
          {
            name: "Feature Scope",
            label: "Feature / Capability",
            options: ["User Authentication & Session Invalidation", "Stripe Subscription Webhook Lifecycle", "Real-Time WebSocket Notification Dispatch", "Multi-Tenant Team Permission Checks"],
            default: "Stripe Subscription Webhook Lifecycle"
          },
          {
            name: "Audit Goal",
            label: "Audit Objective",
            options: ["Map Complete End-to-End Data Flow", "Identify Missing Error Boundaries & Edge Cases", "Find All Call Sites Prior to Refactoring", "Verify Security & Signature Authentication"],
            default: "Map Complete End-to-End Data Flow"
          },
          {
            name: "Target Layer",
            label: "Codebase Subdirectory",
            options: ["src/server/ & src/app/api/", "src/components/ & src/hooks/", "packages/database/ & prisma/", "Entire Workspace"],
            default: "src/server/ & src/app/api/"
          }
        ],
        template: `@Codebase

Analyze the implementation of [Feature Scope] across [Target Layer].

Goal: [Audit Goal].

Please structure your analysis into four architectural sections:
1. Entry Points & Handlers: Identify the exact filenames and line numbers where external requests or events are received.
2. Data Flow & Transformations: Trace how payloads are parsed, validated (e.g., via Zod), and passed into service methods.
3. Database & State Mutations: List all database models, tables, and cached records modified during this flow.
4. Edge Cases & Gaps: Highlight any missing error boundaries, unhandled promise rejections, or race conditions.`,
        expectedOutput: `### @Codebase Audit: Stripe Subscription Webhook Lifecycle

#### 1. Entry Points & Handlers
- **File:** \`src/app/api/webhooks/stripe/route.ts\` (Lines 24–68)
- **Mechanism:** Next.js Route Handler listening for POST requests. Validates incoming \`stripe-signature\` header against \`process.env.STRIPE_WEBHOOK_SECRET\` using \`stripe.webhooks.constructEvent\`.

#### 2. Data Flow & Transformations
- Raw Buffer is converted into \`Stripe.Event\`.
- Event router dispatches based on \`event.type\`:
  - \`customer.subscription.created\` -> Calls \`handleSubscriptionCreated()\` in \`src/server/services/billing.ts\`
  - \`customer.subscription.updated\` -> Calls \`handleSubscriptionUpdated()\`
  - \`customer.subscription.deleted\` -> Calls \`handleSubscriptionCanceled()\`

#### 3. Database & State Mutations
- **File:** \`src/server/services/billing.ts\` (Lines 82–145)
- Mutates \`users\` and \`subscriptions\` tables via Prisma:
  - Updates \`stripeCustomerId\`, \`stripePriceId\`, \`status\`, and \`currentPeriodEnd\`.
  - Invalidate user session cache via Redis key: \`user:session:\${userId}\`.

#### 4. Edge Cases & Gaps
- **Missing Idempotency Check:** If Stripe retries a webhook delivery, the handler re-executes the database update without verifying whether the event ID has already been processed.
- **Null Safety:** Missing fallback handling if \`event.data.object.customer\` is passed as a deleted string ID instead of a Customer object.`
      },
      conceptGuide: {
        title: "Understanding Semantic Vector Embeddings & .cursorignore",
        overview: "Semantic codebase search uses dense vector embeddings to bridge the vocabulary mismatch problem in software engineering. When you search for 'user authorization failure', keyword search will fail if the codebase uses terms like 'session expired' or 'HTTP 403 Forbidden'. Vector embeddings convert code tokens and comments into high-dimensional geometric vectors where semantically related concepts cluster together. However, vector spaces have finite resolution. When a project indexes 10,000 generated files from build caches, the vector density collapses, causing the AI to retrieve irrelevant minified chunks instead of human-written code. A strict `.cursorignore` is the single most important lever for maintaining high signal-to-noise ratios.",
        keyPoints: [
          "**Vector Space Hygiene:** Excluding minified bundles, lockfiles, and test fixtures prevents vector crowding and ensures accurate chunk retrieval.",
          "**Hybrid Lexical & Semantic Retrieval:** Cursor combines exact symbol matches with conceptual embeddings to locate both exact function names and conceptual architectures.",
          "**Chunk Boundary Optimization:** Writing clean docstrings and modular functions under 50 lines helps the indexer capture complete, atomic semantic units."
        ]
      },
      learning: {
        resources: [
          {
            title: "Cursor @Codebase Semantic Search Official Documentation",
            url: "https://docs.cursor.com/context/@-symbols/@-codebase",
            type: "Official Docs"
          },
          {
            title: "Cursor Ignore Files (.cursorignore) Specification",
            url: "https://docs.cursor.com/context/ignore-files",
            type: "Official Docs"
          },
          {
            title: "Repomix Codebase Ingestion & Context Compaction Guide",
            url: "https://repomix.com/guide",
            type: "Guide"
          },
          {
            title: "OpenAI Embeddings Architecture & Vector Retrieval Best Practices",
            url: "https://platform.openai.com/docs/guides/embeddings",
            type: "Reference"
          }
        ]
      }
    },

    // Node 3
    {
      id: "step-3",
      stepNumber: 3,
      phaseId: "phase-1",
      title: "Project-Level .cursorrules & .cursor/rules/*.mdc Engineering",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Engineer modular, path-scoped rule files using Cursor's modern .cursor/rules/*.mdc standard to enforce strict architectural rules, UI design tokens, and naming conventions automatically.",
      description: "Early implementations of Cursor relied on a single, monolithic `.cursorrules` file placed in the repository root. While simple, monolithic rules suffer from critical flaws: they consume thousands of tokens on every single interaction, dilute LLM attention with instructions irrelevant to the file being edited, and frequently cause contradictory guidelines between frontend and backend code. Cursor's modern standard replaces this with modular `.cursor/rules/*.mdc` files. Each `.mdc` file combines YAML frontmatter (defining glob patterns, descriptions, and auto-attachment conditions) with markdown rules. This allows teams to enforce strict React component standards on `*.tsx` files, database schema validation rules on `*.prisma` files, and API route security checks on `src/app/api/**/*.ts` files without burning unnecessary context.",
      playbook: {
        setup: "Create a `.cursor/rules/` directory in your repository root. Create separate rule files for your primary architectural domains: `frontend.mdc`, `backend.mdc`, `testing.mdc`, and `database.mdc`.",
        execute: "Write YAML frontmatter for each rule file. Set `globs: 'src/components/**/*.tsx'` in `frontend.mdc` with rules for Tailwind design tokens and accessible HTML. Set `globs: 'src/app/api/**/*.ts'` in `backend.mdc` enforcing Zod schema validation and error handling. Set `alwaysApply: false` so rules only load when matching files are in the prompt context.",
        verify: "Open a component file in `src/components/Button.tsx`. Press Cmd+K or open chat (Cmd+L) and verify that the `frontend.mdc` rule tag automatically appears in the context bar while `backend.mdc` remains inactive."
      },
      tools: [
        {
          name: "Cursor Rules (.mdc)",
          type: "Freemium",
          url: "https://docs.cursor.com/context/rules-for-ai",
          description: "Cursor's modular rules system using Markdown with frontmatter globs for path-scoped, automated context injection.",
          bestFor: "Automated standards enforcement, glob-targeted rules & token-efficient context"
        },
        {
          name: "Claude 3.7",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Frontier reasoning model used to synthesize existing codebase conventions into concise, high-impact negative constraints and rule files.",
          bestFor: "Rule authoring, anti-pattern detection & guidelines condensation"
        },
        {
          name: "Cursor Directory",
          type: "Free",
          url: "https://cursor.directory",
          description: "Open community repository of production-tested .cursorrules and .mdc templates across hundreds of frameworks and tech stacks.",
          bestFor: "Community rule templates, framework best practices & rules inspiration"
        }
      ],
      callouts: {
        mistake: "Writing a 4,000-word single `.cursorrules` monolith that exhausts 25% of your LLM context window on every prompt, regardless of whether you're editing CSS or a database migration.",
        proTip: "Use explicit negative constraints in your `.mdc` files: LLMs follow 'Never use X, instead use Y' significantly better than vague positive suggestions like 'Write clean code'.",
        mistakes: [
          "Creating giant monolithic `.cursorrules` files that force backend database rules into frontend CSS prompts.",
          "Using vague positive instructions ('Make code maintainable') instead of strict verifiable negative constraints ('Never use inline style objects, use Tailwind classes').",
          "Setting `alwaysApply: true` on every `.mdc` rule file, completely defeating the purpose of path-scoped modular architecture."
        ],
        proTips: [
          "Include 3-line code examples of 'GOOD' vs 'BAD' code patterns directly inside your `.mdc` files to prime one-shot in-context learning.",
          "Specify your exact design system color hex values or Tailwind tokens in `frontend.mdc` to prevent the AI from generating random neon gradients.",
          "Version-control your `.cursor/rules/` directory in git so your entire engineering team shares synchronized AI constraints."
        ]
      },
      promptLab: {
        title: "Modular .cursor/rules/*.mdc Rule Generator",
        description: "Generate a production-ready, glob-scoped .cursor/rules/*.mdc rule file configured with negative constraints, design tokens, and type safety standards.",
        variables: [
          {
            name: "Domain Scope",
            label: "Target Architectural Domain",
            options: ["Frontend Components (React + Tailwind)", "Server Actions & API Routes (Next.js + Zod)", "Database Models & Migrations (Prisma / Drizzle)", "Unit & Integration Testing (Vitest + Testing Library)"],
            default: "Frontend Components (React + Tailwind)"
          },
          {
            name: "File Globs",
            label: "Matching Glob Pattern",
            options: ["src/components/**/*.{tsx,jsx}", "src/app/api/**/*.{ts,js}", "prisma/schema.prisma", "src/**/*.test.{ts,tsx}"],
            default: "src/components/**/*.{tsx,jsx}"
          },
          {
            name: "Strictness Level",
            label: "Rule Strictness",
            options: ["Production Enterprise (Strict Negative Constraints)", "Standard Modern Best Practices", "Lightweight Guidelines"],
            default: "Production Enterprise (Strict Negative Constraints)"
          }
        ],
        template: `You are a Principal Software Architect specializing in AI IDE governance and Cursor rules architecture.

Create a production-grade modular rule file for:
- Domain Scope: [Domain Scope]
- Target Globs: [File Globs]
- Strictness Level: [Strictness Level]

Format the output strictly as a valid .cursor/rules/*.mdc file:
1. YAML Frontmatter:
   - description: Concise explanation of what this rule governs.
   - globs: Exact matching glob pattern.
   - alwaysApply: false (or true only if globally mandatory).
2. Negative Constraints: 5-7 strict "NEVER do X, ALWAYS do Y" rules.
3. Code Standard Examples: A clear 'BAD' vs 'GOOD' code comparison demonstrating the exact pattern.
4. Export & Naming Conventions: Specific rules for file naming, export types, and directory organization.`,
        expectedOutput: `---
description: Enforces strict React component architecture, 1px border Tailwind tokens, and accessibility standards for frontend UI.
globs: "src/components/**/*.{tsx,jsx}"
alwaysApply: false
---

# Frontend Component Architecture & Design Token Rules

## Negative Constraints (Strictly Enforced)
- **NEVER** use inline \`style={{...}}\` objects. Always use Tailwind CSS utility classes.
- **NEVER** invent arbitrary color hex values (e.g. \`bg-[#235891]\`). Always use defined design tokens: \`bg-app-surface\`, \`text-app-text\`, \`border-app-border\`.
- **NEVER** use \`any\` for component props or callback parameters. Always declare an explicit TypeScript interface named \`[ComponentName]Props\`.
- **NEVER** use plain \`<button>\` or \`<a>\` tags without an \`aria-label\` or accessible text content.
- **NEVER** use default exports. Always use named exports (\`export function ComponentName\`).

## Code Pattern Comparison

### BAD Pattern
\`\`\`tsx
// Non-compliant: default export, arbitrary hex, missing prop types, inline style
export default function Card(props: any) {
  return (
    <div style={{ padding: 20 }} className="bg-[#1a1b20] rounded shadow-lg">
      <h2 className="text-white text-lg">{props.title}</h2>
      <button onClick={props.onClick}>Click</button>
    </div>
  );
}
\`\`\`

### GOOD Pattern
\`\`\`tsx
// Compliant: named export, strict interface, design tokens, accessible button
interface CardProps {
  title: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export function Card({ title, onClick, children }: CardProps) {
  return (
    <div className="p-5 rounded-xl border border-app-border bg-app-surface text-app-text shadow-xs">
      <h2 className="text-base font-bold text-app-text tracking-tight mb-2">{title}</h2>
      {children}
      <button
        onClick={onClick}
        type="button"
        aria-label={\`Perform action on \${title}\`}
        className="mt-4 px-3.5 py-1.5 rounded-lg bg-brand-primary text-white text-xs font-semibold hover:bg-brand-primary/90 transition-colors"
      >
        Continue
      </button>
    </div>
  );
}
\`\`\``
      },
      conceptGuide: {
        title: "Understanding Modular .mdc Rules vs. Monolithic .cursorrules",
        overview: "As LLMs process larger codebases, in-context attention degrades when flooded with irrelevant rules. A single root `.cursorrules` file injects every rule into every prompt, meaning an engineer fixing a SQL query pays a token penalty for mobile CSS rules. Cursor's `.cursor/rules/*.mdc` standard introduces path-scoped dynamic rule routing. By using glob patterns in YAML frontmatter, Cursor's context engine evaluates the developer's active workspace file and injects only the specific rules relevant to that file's language and architectural layer. This dramatically lowers prompt token usage while significantly increasing rule compliance.",
        keyPoints: [
          "**Path-Scoped Context:** Rules load dynamically based on matching file globs rather than cluttering global attention.",
          "**Negative Constraints Outperform Suggestions:** Explicit 'NEVER X, ALWAYS Y' prohibitions produce far fewer hallucinations than generic positive advice.",
          "**Few-Shot Demonstration:** Including brief 'BAD' vs. 'GOOD' code snippets in `.mdc` files provides instant in-context priming for the LLM."
        ]
      },
      learning: {
        resources: [
          {
            title: "Cursor AI Rules & .cursor/rules Documentation",
            url: "https://docs.cursor.com/context/rules-for-ai",
            type: "Official Docs"
          },
          {
            title: "Cursor Directory - Production Community Rules Index",
            url: "https://cursor.directory",
            type: "Reference"
          },
          {
            title: "Anthropic Claude Prompt Engineering Guidelines & System Prompts",
            url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
            type: "Guide"
          },
          {
            title: "GitHub Repository Guidelines & .cursorrules Best Practices",
            url: "https://github.com/anthropics/anthropic-cookbook",
            type: "GitHub"
          }
        ]
      }
    },

    // Node 4
    {
      id: "step-4",
      stepNumber: 4,
      phaseId: "phase-2",
      title: "Precision Inline Diffs (Cmd+K) & Surgical Refactoring",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Master surgical inline refactoring using Cmd+K, review character-level green/red diffs in real time, and execute targeted type conversions without disturbing surrounding code.",
      description: "Inline Editing (`Cmd+K`) is the core interaction loop for day-to-day code transformation in Cursor. Unlike broad conversational chat, `Cmd+K` operates surgically on highlighted line ranges. When you select a 15-line function and trigger `Cmd+K`, Cursor passes the selection along with surrounding file lines as context, streaming an inline red/green diff directly into the editor buffer. Developers can inspect every inserted and deleted character, accept changes with `Cmd+Y` (or reject with `Cmd+N`), or type quick follow-up adjustments in the prompt box before committing. Mastering inline editing requires knowing how much surrounding context to highlight, using imperative verbs in instructions, and verifying TypeScript diagnostics immediately after diff acceptance.",
      playbook: {
        setup: "Ensure keybindings for inline diffs are configured: Cmd+K to trigger edit, Cmd+Y to accept, Cmd+N to reject, and Alt+Enter to accept all diffs across the file.",
        execute: "Highlight a specific function or block of lines (typically 10–40 lines). Press Cmd+K. Enter an imperative instruction: 'Refactor this callback hell into async/await, wrapping database operations in a try/catch block that returns a typed Result union { success: boolean, data?: T, error?: string }'. Watch the inline diff stream directly into your editor.",
        verify: "Inspect the diff for unexpected whitespace modifications or altered variable names. Use the Up/Down arrow keys in the inline diff bar to review individual changes. Press Cmd+Y to accept, then run your project's typechecker to confirm zero compiler errors."
      },
      tools: [
        {
          name: "Cursor Inline Diff (Cmd+K)",
          type: "Freemium",
          url: "https://docs.cursor.com/editing/inline-diffs",
          description: "Surgical, line-level code generation and refactoring interface streaming real-time visual diffs directly into the active editor buffer.",
          bestFor: "Function refactoring, type conversions, regex generation & surgical logic edits"
        },
        {
          name: "TypeScript",
          type: "Free",
          url: "https://www.typescriptlang.org",
          description: "Typed superset of JavaScript providing real-time language server diagnostics and type verification following inline diff application.",
          bestFor: "Static type verification, signature safety & compiler validation"
        },
        {
          name: "ESLint",
          type: "Free",
          url: "https://eslint.org",
          description: "Pluggable static analysis linter ensuring inline-edited code adheres to code style, import sorting, and syntax conventions.",
          bestFor: "Automated lint verification, style compliance & unused import detection"
        }
      ],
      callouts: {
        mistake: "Highlighting an entire 600-line file to change a 3-line utility function, causing massive token consumption and risking unintentional rewrites of unrelated functions.",
        proTip: "Use `Cmd+Shift+K` to generate brand-new code above your cursor without highlighting anything, preserving existing code entirely.",
        mistakes: [
          "Selecting too large of a code block for a minor edit, giving the LLM room to hallucinate stylistic changes across unrelated lines.",
          "Accepting inline diffs blindly with `Cmd+Y` without reading the red deletions, introducing subtle logic bugs or dropped error handlers.",
          "Failing to provide target type constraints in the `Cmd+K` prompt, resulting in loose types or untyped return values."
        ],
        proTips: [
          "If the diff is 90% correct but has one flaw, do not re-run from scratch; type a follow-up refinement prompt directly into the active `Cmd+K` bar.",
          "Press `Esc` at any time to instantly revert the editor buffer to its exact pre-prompt state with zero trace left behind.",
          "Use `Cmd+K` on an empty line between two functions and prompt 'Create a unit test for the function above using Vitest' to generate co-located tests instantly."
        ]
      },
      promptLab: {
        title: "Surgical Inline Refactoring & Type Transformation Prompt",
        description: "Transform legacy, untyped, or callback-heavy functions into robust, typed, and error-resilient modern code using precision Cmd+K instructions.",
        variables: [
          {
            name: "Refactoring Goal",
            label: "Refactoring Target",
            options: ["Convert Callbacks/Promises to Async/Await with Result Union", "Extract Magic Strings/Numbers into Strongly-Typed Enums", "Add Strict Zod Schema Validation to Function Arguments", "Optimize Performance with React useMemo & useCallback"],
            default: "Convert Callbacks/Promises to Async/Await with Result Union"
          },
          {
            name: "Error Handling Strategy",
            label: "Error Strategy",
            options: ["Discriminated Union { ok: true, data } | { ok: false, error }", "Custom Application Error Class with HTTP Status Codes", "Sentry Error Capture + Graceful Fallback Value"],
            default: "Discriminated Union { ok: true, data } | { ok: false, error }"
          },
          {
            name: "Code Scope",
            label: "Selection Length",
            options: ["Single Function (15–30 lines)", "Class Method (20–50 lines)", "API Route Handler (30–60 lines)"],
            default: "Single Function (15–30 lines)"
          }
        ],
        template: `Cmd+K Instruction for Highlighted Selection:

Task: [Refactoring Goal].
Error Handling: [Error Handling Strategy].

Rules for Diff Generation:
1. Do not modify exported function names or break backwards compatibility for callers.
2. Replace all loose types ('any', 'unknown') with explicit TypeScript generics or interfaces.
3. Ensure all asynchronous calls are properly awaited with comprehensive try/catch boundaries.
4. Output only the replacement diff for the highlighted lines. Do not alter surrounding code outside the selection boundary.`,
        expectedOutput: `// Inline Diff Preview (Cmd+K Result)
<<<<<<< ORIGINAL
function fetchUserProfile(userId, callback) {
  db.query('SELECT * FROM users WHERE id = ' + userId, function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result[0]);
    }
  });
}
=======
type Result<T, E = Error> = 
  | { ok: true; data: T }
  | { ok: false; error: E };

export async function fetchUserProfile(
  userId: string
): Promise<Result<UserProfile, Error>> {
  try {
    const user = await db.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, name: true, role: true }
    });

    if (!user) {
      return { ok: false, error: new Error(\`User not found with id: \${userId}\`) };
    }

    return { ok: true, data: user };
  } catch (error) {
    const err = error instanceof Error ? error : new Error('Database query failed');
    return { ok: false, error: err };
  }
}
>>>>>>> MODIFIED`
      },
      conceptGuide: {
        title: "Understanding Inline Diffs & Buffer Patch Mechanics",
        overview: "Inline editing operates via specialized language-server-aware patch generation. When you trigger `Cmd+K`, Cursor extracts your selection, prepends the 30–50 preceding lines of context and appends the 30–50 subsequent lines, forming a scoped prompt envelope. The LLM generates a targeted unified diff rather than rewriting the whole file. Cursor's client-side diff engine parses this stream in real time, projecting visual additions (green) and deletions (red) over your active Monaco/VS Code editor buffer. Understanding this mechanism reinforces why scoping selections tightly produces faster, higher-fidelity diffs than highlighting large swathes of code.",
        keyPoints: [
          "**Scoped Context Windows:** Highlighting a 20-line block sends a focused prompt that minimizes latency and prevents drift in distant lines.",
          "**Character-Level Visual Auditing:** Always inspect red deletion blocks to ensure the LLM did not discard subtle edge-case branches.",
          "**Incremental Refinement Loops:** Use the follow-up prompt input to fine-tune generated diffs iteratively before committing to disk."
        ]
      },
      learning: {
        resources: [
          {
            title: "Cursor Inline Diffs (Cmd+K) Official Documentation",
            url: "https://docs.cursor.com/editing/inline-diffs",
            type: "Official Docs"
          },
          {
            title: "TypeScript Narrowing & Discriminated Unions Reference",
            url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions",
            type: "Reference"
          },
          {
            title: "ESLint Core Rules & Automated Fixing Documentation",
            url: "https://eslint.org/docs/latest/use/getting-started",
            type: "Guide"
          },
          {
            title: "Refactoring to Clean Code Principles by Martin Fowler",
            url: "https://refactoring.com",
            type: "Architecture"
          }
        ]
      }
    },

    // Node 5
    {
      id: "step-5",
      stepNumber: 5,
      phaseId: "phase-2",
      title: "Context Pinning (@Files, @Folders, @Docs, @Web)",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Master explicit context injection using @-symbols (@Files, @Folders, @Docs, @Web) to ground the AI in exact dependencies, custom framework docs, and live web knowledge.",
      description: "While automatic codebase retrieval (`@Codebase`) is powerful, complex engineering tasks demand surgical control over what the AI reads. Relying on fuzzy semantic search can pull in tangential code while missing the exact interface definition required for your feature. Cursor provides explicit context pinning through `@` symbols: `@Files` allows you to inject specific source files directly into prompt attention, `@Folders` bounds context to entire module directories, `@Docs` indexes live external framework documentation (e.g. Next.js 15, Tailwind v4, Supabase), and `@Web` triggers live search queries to fetch up-to-date syntax. Using these primitives strategically prevents the model from hallucinating deprecated 2023 APIs and ensures generated code aligns perfectly with your active schemas.",
      playbook: {
        setup: "Open Cursor Settings > Features > Docs. Add custom documentation URLs for the cutting-edge packages in your stack (e.g. https://nextjs.org/docs, https://orm.drizzle.team, https://tanstack.com/query/latest). Wait for the indexing status to show green.",
        execute: "In Chat (Cmd+L) or Composer (Cmd+I), construct a context-pinned prompt using `@` symbols. Type `@Files` to attach your database schema and target component. Type `@Docs` to select your indexed framework docs. Type `@Web` if querying an API released within the last 6 months.",
        verify: "Inspect the context pills rendered above your message in the chat panel. Verify that each attached file displays its token count and that the generated output uses modern syntax from the pinned documentation."
      },
      tools: [
        {
          name: "Cursor Context Mentions (@)",
          type: "Freemium",
          url: "https://docs.cursor.com/context/@-symbols/overview",
          description: "Universal context injection syntax in Cursor allowing engineers to pin files, directories, symbols, docs, and git diffs.",
          bestFor: "Explicit context targeting, token efficiency & hallucination elimination"
        },
        {
          name: "Cursor Custom Docs Indexer",
          type: "Freemium",
          url: "https://docs.cursor.com/context/@-symbols/@-docs",
          description: "Crawler and vector indexer built into Cursor for ingesting third-party documentation websites for zero-hallucination API generation.",
          bestFor: "External documentation embedding, library reference & modern API syntax"
        },
        {
          name: "Firecrawl",
          type: "Freemium",
          url: "https://www.firecrawl.dev",
          description: "Web scraping API that converts entire websites and documentation portals into clean LLM-ready markdown for custom indexing.",
          bestFor: "Custom doc scraping, markdown extraction & knowledge base ingestion"
        }
      ],
      callouts: {
        mistake: "Failing to pin documentation for newly released framework major versions (e.g. Next.js 15 or React 19), causing the AI to generate deprecated functions like `useFormState` instead of `useActionState`.",
        proTip: "Keep pinned context under 6–8 files; pinning 25 files floods the context window and causes the model's attention to skip over critical interface constraints.",
        mistakes: [
          "Pinning dozens of loosely related files into context, exhausting token limits and causing the LLM to forget primary prompt instructions.",
          "Assuming the AI knows the latest syntax for rapid-release libraries without indexing their official documentation via `@Docs`.",
          "Overusing `@Web` on basic questions that could be answered faster and more accurately by pinning the local `@schema.prisma` file."
        ],
        proTips: [
          "Use `@Git` or `@Diff` when prompting about recently introduced regressions to automatically feed the staged git changes into context.",
          "Type `@Folders` to quickly give the AI the bird's-eye view of an entire domain (e.g. `@src/modules/billing/`) without selecting files one by one.",
          "When asking for API integration code, pin the exact `.env.example` file so the AI automatically uses your project's established environment variable names."
        ]
      },
      promptLab: {
        title: "Precision Context-Pinned Feature Implementation Prompt",
        description: "Combine @Files, @Docs, and @Folders to generate complete, framework-accurate features that adhere to current library syntax without hallucinations.",
        variables: [
          {
            name: "Target Framework",
            label: "Framework & Version",
            options: ["Next.js 15 (App Router + Server Actions)", "TanStack Query v5 + React 19", "Drizzle ORM + PostgreSQL", "Tailwind CSS v4 (Theme Variables)"],
            default: "Next.js 15 (App Router + Server Actions)"
          },
          {
            name: "Pinned Files",
            label: "Pinned Context Files",
            options: ["@schema.prisma and @src/types/user.ts", "@src/server/db.ts and @src/lib/auth.ts", "@src/components/ui/Button.tsx and @src/app/globals.css"],
            default: "@schema.prisma and @src/types/user.ts"
          },
          {
            name: "Implementation Goal",
            label: "Feature Objective",
            options: ["Create Server Action with Zod Validation & Optimistic UI", "Implement Infinite Scroll Query with Cursor Pagination", "Build Secure Multi-Step Onboarding Form"],
            default: "Create Server Action with Zod Validation & Optimistic UI"
          }
        ],
        template: `Context:
- Pinned Files: [Pinned Files]
- Target Framework: [Target Framework]
- Documentation Reference: @Docs for [Target Framework]

Goal:
Implement [Implementation Goal].

Strict Guidelines:
1. Adhere strictly to the modern API patterns documented in @Docs. Do not use deprecated methods or legacy wrappers.
2. Align all database queries and type annotations with the exact models defined in [Pinned Files].
3. Include comprehensive error handling, return a structured Result object, and revalidate relevant cache tags.
4. Provide the complete code for the new file with zero placeholder comments.`,
        expectedOutput: `### Next.js 15 Server Action: User Profile Update

\`\`\`typescript
// src/app/actions/update-profile.ts
'use server';

import { revalidateTag } from 'next/cache';
import { z } from 'zod';
import { db } from '@/server/db';
import { verifySession } from '@/lib/auth';

const UpdateProfileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50),
  bio: z.string().max(280, 'Bio cannot exceed 280 characters').optional(),
});

export type ActionState = {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

export async function updateProfileAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  // 1. Authenticate session
  const session = await verifySession();
  if (!session?.userId) {
    return { success: false, message: 'Unauthorized. Please log in again.' };
  }

  // 2. Validate input against Zod schema
  const validatedFields = UpdateProfileSchema.safeParse({
    name: formData.get('name'),
    bio: formData.get('bio'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 3. Mutate database using schema definitions
  try {
    await db.user.update({
      where: { id: session.userId },
      data: {
        name: validatedFields.data.name,
        bio: validatedFields.data.bio,
      },
    });

    // 4. Revalidate cache tag
    revalidateTag(\`user-\${session.userId}\`);
    return { success: true, message: 'Profile updated successfully!' };
  } catch (error) {
    console.error('Failed to update profile:', error);
    return { success: false, message: 'Database error. Could not update profile.' };
  }
}
\`\`\``
      },
      conceptGuide: {
        title: "Understanding Attention Budgeting & Context Pinning",
        overview: "Transformer models have a fixed attention capacity: every token placed into the context window competes for attention against every other token. When you rely solely on automatic search, the prompt may fill with 50 pages of distantly related code, causing the model to suffer from the 'lost in the middle' phenomenon where instructions are overlooked. Explicit context pinning using `@Files`, `@Folders`, and `@Docs` acts as attention budgeting. By explicitly curating the 4–6 most authoritative source files and documentation nodes, you maximize the probability of generating exact, bug-free implementations.",
        keyPoints: [
          "**Attention Budget Optimization:** Feeding fewer, highly authoritative files produces higher code quality than flooding context with broad vector search hits.",
          "**Version Hallucination Prevention:** Pinned `@Docs` provide in-context ground truth, overriding the LLM's pre-training cutoff for modern framework syntax.",
          "**Scoped Symbolic Context:** Use `@Symbols` to inject specific interface or function definitions without needing to load 500-line implementation files."
        ]
      },
      learning: {
        resources: [
          {
            title: "Cursor Context Mentions (@) Official Overview",
            url: "https://docs.cursor.com/context/@-symbols/overview",
            type: "Official Docs"
          },
          {
            title: "Cursor Custom Docs (@Docs) Indexing & Setup Guide",
            url: "https://docs.cursor.com/context/@-symbols/@-docs",
            type: "Official Docs"
          },
          {
            title: "Firecrawl Documentation Ingestion & Markdown Extraction",
            url: "https://www.firecrawl.dev",
            type: "Guide"
          },
          {
            title: "Anthropic Long Context & Attention Retention Research",
            url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/long-context-tips",
            type: "Reference"
          }
        ]
      }
    },

    // Node 6
    {
      id: "step-6",
      stepNumber: 6,
      phaseId: "phase-2",
      title: "Multi-File Agentic Composer (Cmd+I) & Feature Scaffolding",
      timeEstimate: "2 hrs",
      difficulty: "Advanced",
      summary: "Orchestrate synchronized multi-file feature scaffolding across database schemas, API routes, and UI components using Cursor's Agent Mode Composer.",
      description: "Building production features rarely involves editing a single file in isolation; real features require creating database migration models, writing API validation routes, implementing backend service handlers, and building React UI components that consume those endpoints. Cursor Composer (`Cmd+I`), especially in Agent Mode, is built specifically for this multi-file orchestration. Rather than waiting for human manual copying between files, Composer acts as an autonomous software engineering agent: it creates new files, modifies existing ones across different directories, runs linter checks, and presents a synchronized multi-file diff view for review and atomic acceptance.",
      playbook: {
        setup: "Open Cursor Composer by pressing Cmd+I (or Cmd+Shift+I for floating bar). Toggle the mode switch from 'Normal' to 'Agent'. Verify your project has clean git status (`git status`) before launching the agent.",
        execute: "Provide a comprehensive, multi-phase feature prompt. Specify: 1. Database schema additions in `prisma/schema.prisma`, 2. Server Action in `src/actions/`, 3. UI modal in `src/components/`, 4. TypeScript shared types. Watch the agent construct files sequentially, resolving imports across directories.",
        verify: "Review Composer's unified multi-file diff tree. Check each file for clean syntax and appropriate directory placement. Click 'Accept all' (Cmd+Enter). Run `npm run build` or `npx tsc --noEmit` in your terminal to verify zero compilation errors."
      },
      tools: [
        {
          name: "Cursor Composer (Agent Mode)",
          type: "Freemium",
          url: "https://docs.cursor.com/composer/overview",
          description: "Full-screen agentic workspace within Cursor capable of autonomous multi-file generation, dependency installation, and synchronized diff review.",
          bestFor: "Full-stack feature scaffolding, cross-file refactoring & autonomous codebase agents"
        },
        {
          name: "Windsurf Cascade",
          type: "Freemium",
          url: "https://codeium.com/windsurf",
          description: "Multi-file collaborative agent engine by Codeium that maintains deep awareness of project state and tool execution.",
          bestFor: "Multi-file agent comparisons & collaborative coding flows"
        },
        {
          name: "Claude 3.7 Sonnet",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Top-tier frontier reasoning model providing the high-context planning and code generation intelligence behind Composer.",
          bestFor: "Multi-file planning, dependency resolution & architectural coherence"
        }
      ],
      callouts: {
        mistake: "Running Composer Agent Mode on an uncommitted, dirty git branch, making it impossible to diff or cleanly revert changes if the agent takes an unwanted architectural direction.",
        proTip: "Break complex epics into discrete Composer steps: first ask Composer to build the database models and backend routes, verify them, and then prompt it in the same thread to scaffold the frontend UI.",
        mistakes: [
          "Launching Agent Mode with vague 1-sentence prompts ('add billing to my app'), resulting in bloated, unmaintainable boilerplate.",
          "Accepting all multi-file diffs without checking the file tree for duplicate or misplaced files (e.g. creating `api/users.ts` when your project uses `src/app/api/users/route.ts`).",
          "Leaving obsolete background processes or dev servers running that lock build files during Composer file writes."
        ],
        proTips: [
          "Always commit working code (`git commit -m 'checkpoint'`) before running a major Composer session so you have a bulletproof rollback point.",
          "Use the floating Composer pill (`Cmd+Shift+I`) for quick 2-file changes and full-screen Composer (`Cmd+I`) for multi-layer full-stack features.",
          "Instruct Composer explicitly: 'Follow the folder structure in `@src/app` and do not create new top-level directories'."
        ]
      },
      promptLab: {
        title: "Multi-File Full-Stack Feature Scaffolding Composer Prompt",
        description: "Scaffold complete, end-to-end features across database schemas, backend handlers, and frontend components in a single synchronized Composer execution.",
        variables: [
          {
            name: "Feature Name",
            label: "Feature to Scaffold",
            options: ["API Key Generation & Revocation Dashboard", "Team Member Invitation & Role Management", "Audit Logging & Security Activity Feed", "Custom Webhook Endpoint Dispatcher"],
            default: "API Key Generation & Revocation Dashboard"
          },
          {
            name: "Stack Layers",
            label: "Layers to Generate",
            options: ["Prisma Schema + Server Actions + React Component", "Drizzle ORM + Fastify API + Vue Component", "Supabase Table + Next.js Route + Tailwind UI"],
            default: "Prisma Schema + Server Actions + React Component"
          },
          {
            name: "UI Library",
            label: "Component Styling",
            options: ["Tailwind CSS + Lucide Icons (Strict 1px Borders)", "Shadcn UI Components", "Headless UI + Tailwind"],
            default: "Tailwind CSS + Lucide Icons (Strict 1px Borders)"
          }
        ],
        template: `Composer Agent Instruction:

Scaffold the complete implementation for [Feature Name].
Layers: [Stack Layers].
Styling: [UI Library].

Execute the following plan sequentially across files:
1. Database Layer:
   - Define model in \`prisma/schema.prisma\` with UUID primary key, organization relation, hashed key storage, and timestamp metadata.
2. Server Logic:
   - Create \`src/actions/api-keys.ts\` containing Server Actions for:
     - \`generateApiKey(name, permissions)\`: Generates a high-entropy secret (e.g. \`sk_live_...\`), stores SHA-256 hash in DB, and returns plaintext key ONCE.
     - \`revokeApiKey(keyId)\`: Sets active status to false.
     - \`listApiKeys()\`: Returns masked keys (\`sk_live_...ab12\`) with creation dates.
3. Frontend UI:
   - Create \`src/components/settings/ApiKeyManager.tsx\`:
     - Displays list of active keys with creation date, permissions badge, and revoke button.
     - Includes modal showing newly created plaintext key with one-click copy and warning banner.
4. Export:
   - Update \`src/types/index.ts\` with all shared TypeScript interfaces.`,
        expectedOutput: `### Composer Multi-File Execution Plan

1. **\`prisma/schema.prisma\`** (Updated)
   - Added \`ApiKey\` model with \`id\`, \`name\`, \`keyHash\`, \`prefix\`, \`createdAt\`, \`lastUsedAt\`, \`revokedAt\`, and foreign key \`userId\`.
2. **\`src/actions/api-keys.ts\`** (Created)
   - Implemented \`generateApiKeyAction\`, \`revokeApiKeyAction\`, and \`listApiKeysAction\` using Node.js \`crypto.randomBytes(32)\` and \`crypto.createHash('sha256')\`.
3. **\`src/components/settings/ApiKeyManager.tsx\`** (Created)
   - Built interactive client component with optimistic revocation, copy-to-clipboard feedback, and responsive slate layout.
4. **\`src/types/index.ts\`** (Updated)
   - Exported \`ApiKeySummary\` and \`CreateApiKeyResponse\` interfaces.`
      },
      conceptGuide: {
        title: "Understanding Agentic Multi-File Synthesis in Composer",
        overview: "Early AI coding assistants operated under a read-evaluate-print loop restricted to a single file buffer. Composer elevates this paradigm into an autonomous agent loop. When you submit a multi-file prompt, the agent plans a dependency graph, creates atomic file operations (create, update, delete), verifies relative import paths across modules, and buffers all modifications into a unified virtual diff. Rather than committing edits sequentially—which could leave your project in a broken intermediate state—Composer maintains all edits in memory until you review the consolidated diff and trigger atomic acceptance.",
        keyPoints: [
          "**Dependency-Ordered Generation:** The agent scaffolds schemas and types first, ensuring downstream components import verified interfaces.",
          "**Virtual Diff Buffering:** All file modifications are staged in memory, allowing instant one-click rollback if the overall architecture misses requirements.",
          "**Atomic Workspace Commits:** Accepting changes in Composer writes all modified files simultaneously, minimizing broken dev server rebuild cycles."
        ]
      },
      learning: {
        resources: [
          {
            title: "Cursor Composer & Agent Mode Official Guide",
            url: "https://docs.cursor.com/composer/overview",
            type: "Official Docs"
          },
          {
            title: "Cursor Agent Mode Deep Dive & Capabilities",
            url: "https://docs.cursor.com/agent/overview",
            type: "Official Docs"
          },
          {
            title: "Windsurf Cascade Agent Architecture & Workflow Comparison",
            url: "https://codeium.com/windsurf",
            type: "Guide"
          },
          {
            title: "Martin Fowler: Micro-Commits and Continuous Refactoring",
            url: "https://martinfowler.com/articles/workflows-of-refactoring",
            type: "Architecture"
          }
        ]
      }
    },

    // Node 7
    {
      id: "step-7",
      stepNumber: 7,
      phaseId: "phase-3",
      title: "Connecting Model Context Protocol (MCP) Servers to Your IDE",
      timeEstimate: "2 hrs",
      difficulty: "Advanced",
      summary: "Integrate Model Context Protocol (MCP) servers into Cursor to give your AI direct, secure access to live Postgres schemas, Figma designs, and GitHub issues.",
      description: "The Model Context Protocol (MCP), open-sourced by Anthropic, is an open standard that enables AI models to safely interact with external tools, APIs, and data stores through standardized JSON-RPC protocols. Rather than manually copying database schemas into text prompts or screenshotting Figma layouts, connecting MCP servers gives Cursor direct, programmatically governed access to your live development stack. By configuring local and cloud MCP servers in `~/.cursor/mcp.json` or project-specific `.cursor/mcp.json`, your IDE assistant can inspect real PostgreSQL table definitions, query live staging databases, fetch Figma design tokens, and read GitHub issue comments directly within chat and Composer.",
      playbook: {
        setup: "Navigate to Cursor Settings > Features > MCP. Click 'Add New MCP Server'. Alternatively, create or edit the configuration file at `~/.cursor/mcp.json` (or `.cursor/mcp.json` for project-specific servers).",
        execute: "Add a PostgreSQL/Supabase MCP server using `npx -y @modelcontextprotocol/server-postgres 'postgresql://user:password@localhost:5432/mydb'`. Add the GitHub MCP server with your personal access token. Save the file and verify green connection indicators in Cursor Settings.",
        verify: "Open Cursor Chat (Cmd+L) and type: 'List the public tables in our database and describe the schema of the orders table using the postgres MCP server'. Verify Cursor calls the MCP tool, reads the live schema, and prints the exact column types."
      },
      tools: [
        {
          name: "Cursor MCP Integration",
          type: "Freemium",
          url: "https://docs.cursor.com/context/model-context-protocol",
          description: "Native Model Context Protocol client in Cursor allowing models to execute external tools and query databases.",
          bestFor: "Connecting IDE to live databases, design systems, and external APIs"
        },
        {
          name: "Model Context Protocol (MCP)",
          type: "Free",
          url: "https://modelcontextprotocol.io",
          description: "Open standard connecting AI assistants to data repositories, development tools, and live environments.",
          bestFor: "Tool-calling standards, data integration & enterprise security governance"
        },
        {
          name: "Supabase & Postgres MCP",
          type: "Free",
          url: "https://supabase.com/docs/guides/database/connecting-to-postgres",
          description: "Official and community MCP servers allowing AI agents to inspect PostgreSQL schemas, test queries, and draft migrations.",
          bestFor: "Live database inspection, migration drafting & schema-aware AI queries"
        }
      ],
      callouts: {
        mistake: "Placing production write/drop credentials in local plain-text MCP configurations, risking accidental data modification or deletion by an autonomous agent.",
        proTip: "Always configure local MCP servers using read-only database roles with zero DROP or DELETE privileges to ensure complete data safety.",
        mistakes: [
          "Hardcoding production database passwords into shared `.cursor/mcp.json` files and accidentally committing them to public git repos.",
          "Running unvetted third-party MCP servers with broad filesystem write access on your host operating system.",
          "Failing to restart or reload Cursor after modifying `mcp.json`, leading to silent connection failure."
        ],
        proTips: [
          "Create a dedicated read-only user `ai_readonly` in PostgreSQL with `SELECT` permissions strictly on `public` schemas.",
          "Add `.cursor/mcp.json` to `.gitignore` and use `.cursor/mcp.json.example` to share configuration templates with your team.",
          "Use the Framelink Figma MCP server to allow Cursor to read component bounding boxes and design tokens directly from your Figma files."
        ]
      },
      promptLab: {
        title: "MCP Database-Aware Schema Migration & Query Prompt",
        description: "Instruct Cursor to use connected Postgres MCP tools to inspect live database schemas and draft safe, backwards-compatible migrations.",
        variables: [
          {
            name: "Migration Objective",
            label: "Migration Task",
            options: ["Add Stripe Customer ID & Subscription Status Columns", "Create Audit Log Table with Foreign Key Cascades", "Add pgvector Embedding Column with IVFFlat Index", "Convert Legacy Int IDs to BigInt / UUID v7"],
            default: "Add Stripe Customer ID & Subscription Status Columns"
          },
          {
            name: "Target Table",
            label: "Database Table",
            options: ["users", "organizations", "teams", "billing_subscriptions"],
            default: "users"
          },
          {
            name: "Migration Tool",
            label: "Migration System",
            options: ["Prisma Migration (schema.prisma)", "Drizzle Migration (schema.ts)", "Raw SQL Migration (PostgreSQL DDL)"],
            default: "Prisma Migration (schema.prisma)"
          }
        ],
        template: `Use the connected PostgreSQL MCP server to inspect the live schema of the "[Target Table]" table.

Task: [Migration Objective].
Target Tool: [Migration Tool].

Execution Steps:
1. Call the MCP tool to inspect the active columns, constraints, and indexes on "[Target Table]".
2. Check for existing column naming conventions and foreign key relations.
3. Draft the schema update in [Migration Tool] ensuring:
   - All newly added columns are nullable or have safe defaults to prevent lock contention on live tables.
   - Add appropriate indexes for foreign keys or lookup columns.
4. Generate the corresponding TypeScript interface matching the updated schema.`,
        expectedOutput: `### MCP Tool Call: \`postgres.describe_table({ table: "users" })\`

**Active Columns Detected:**
- \`id\` (uuid, PRIMARY KEY)
- \`email\` (varchar(255), UNIQUE)
- \`created_at\` (timestamptz, DEFAULT now())

---

### Safe Migration Plan: Add Stripe Customer & Subscription Columns

\`\`\`prisma
// prisma/schema.prisma update
model User {
  id                    String    @id @default(uuid()) @db.Uuid
  email                 String    @unique @db.VarChar(255)
  stripeCustomerId      String?   @unique @map("stripe_customer_id") @db.VarChar(255)
  stripePriceId         String?   @map("stripe_price_id") @db.VarChar(255)
  subscriptionStatus    String?   @default("inactive") @map("subscription_status") @db.VarChar(50)
  createdAt             DateTime  @default(now()) @map("created_at") @db.Timestamptz

  @@index([stripeCustomerId])
  @@map("users")
}
\`\`\`

**SQL DDL Equivalent:**
\`\`\`sql
ALTER TABLE "users" 
  ADD COLUMN IF NOT EXISTS "stripe_customer_id" VARCHAR(255) UNIQUE,
  ADD COLUMN IF NOT EXISTS "stripe_price_id" VARCHAR(255),
  ADD COLUMN IF NOT EXISTS "subscription_status" VARCHAR(50) DEFAULT 'inactive';

CREATE INDEX IF NOT EXISTS "idx_users_stripe_customer_id" ON "users"("stripe_customer_id");
\`\`\``
      },
      conceptGuide: {
        title: "Understanding Model Context Protocol (MCP) Architecture",
        overview: "Before MCP, integrating an AI model with external services required building custom, brittle plugin architectures for every vendor. The Model Context Protocol provides a unified client-server architecture based on JSON-RPC 2.0. Cursor acts as the MCP Host Client. Developers run lightweight local MCP Servers that expose specific capabilities: Resources (read-only data like file logs and database tables), Prompts (pre-packaged templates), and Tools (executable functions like sending an HTTP request or running an SQL query). Because the server runs locally or inside your private VPC, sensitive credentials never leave your local environment.",
        keyPoints: [
          "**Standardized JSON-RPC Protocol:** Cursor connects seamlessly to any MCP server written in TypeScript, Python, or Go.",
          "**Zero Secret Leakage:** Database credentials remain inside local MCP daemon processes, passing only schema outputs to the LLM.",
          "**Dynamic Tool Discovery:** When Cursor launches, it discovers active MCP tools and exposes them automatically to the agent's reasoning loop."
        ]
      },
      learning: {
        resources: [
          {
            title: "Cursor Model Context Protocol (MCP) Official Documentation",
            url: "https://docs.cursor.com/context/model-context-protocol",
            type: "Official Docs"
          },
          {
            title: "Model Context Protocol (MCP) Official Specification & Protocol Guide",
            url: "https://modelcontextprotocol.io",
            type: "Official Docs"
          },
          {
            title: "Official MCP Server Directory & GitHub Implementations",
            url: "https://github.com/modelcontextprotocol/servers",
            type: "GitHub"
          },
          {
            title: "Supabase & Postgres MCP Configuration Guide",
            url: "https://supabase.com/docs/guides/database/connecting-to-postgres",
            type: "Guide"
          }
        ]
      }
    },

    // Node 8
    {
      id: "step-8",
      stepNumber: 8,
      phaseId: "phase-3",
      title: "Visual UI-to-Code & Screenshot Bug Fixing",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Leverage multimodal vision models in Cursor Chat and Composer to convert Figma wireframes and UI bug screenshots into pixel-accurate, responsive Tailwind code.",
      description: "Describing visual bugs and layout misalignments in natural language is notoriously imprecise. Telling an AI that 'the avatar has a weird margin on tablet screens' often leads to incorrect CSS guesswork. By utilizing multimodal vision models (like Claude 3.7 Sonnet and GPT-4o) directly inside Cursor Chat and Composer, developers can drag and drop UI screenshots, Figma mockups, and Chrome DevTools visual inspection overlays straight into the conversation. The vision model analyzes bounding boxes, typography weights, color contrasts, and layout hierarchies, generating pixel-accurate Tailwind CSS and React JSX that matches the visual target immediately.",
      playbook: {
        setup: "Ensure your active model in Cursor Chat is a vision-capable frontier model (Claude 3.7 Sonnet or GPT-4o). Familiarize yourself with quick screenshot keybindings (e.g. Cmd+Shift+4 on macOS).",
        execute: "Capture a screenshot of a broken UI component with Chrome DevTools inspect overlay showing margins and padding. Paste the image directly into Cursor Chat (Cmd+V). Pin the relevant component file (`@UserProfileCard.tsx`). Instruct the model: 'Fix the layout overlap and alignment bug shown in this screenshot. Ensure responsive wrapping on mobile breakpoints using our Tailwind design tokens.'",
        verify: "Apply the generated diff to your component file. Refresh localhost in your browser and verify the visual bug is resolved across desktop, tablet, and mobile viewport sizes."
      },
      tools: [
        {
          name: "Cursor Vision",
          type: "Freemium",
          url: "https://docs.cursor.com/chat/vision",
          description: "Native multimodal image ingestion in Cursor Chat and Composer supporting drag-and-drop screenshots and design wireframes.",
          bestFor: "UI bug fixing, screenshot-to-code & visual design system alignment"
        },
        {
          name: "Chrome DevTools",
          type: "Free",
          url: "https://developer.chrome.com/docs/devtools",
          description: "Industry-standard browser inspection tools for overlaying box-model padding, grid tracks, and flexbox metrics for screenshot capture.",
          bestFor: "Box model inspection, visual debugging & layout metric overlays"
        },
        {
          name: "Figma",
          type: "Freemium",
          url: "https://figma.com",
          description: "Collaborative interface design tool providing source visual frames and Dev Mode tokens for AI reconstruction.",
          bestFor: "Design system mockups, visual specifications & asset exports"
        }
      ],
      callouts: {
        mistake: "Uploading low-resolution or blurry screenshots that crop out surrounding context, forcing the vision model to guess font sizes and margin tokens.",
        proTip: "Take screenshots with Chrome DevTools box-model overlay activated; the visual colored bands (blue for content, green for padding, orange for margin) give the vision model mathematical certainty.",
        mistakes: [
          "Pasting a screenshot without attaching the underlying component file, forcing the AI to generate a brand-new component from scratch instead of fixing the existing one.",
          "Uploading giant full-page desktop screenshots to fix a tiny 20px dropdown menu bug, diluting image token resolution.",
          "Ignoring mobile responsiveness by only providing a single desktop screenshot."
        ],
        proTips: [
          "Paste two images side-by-side in chat: label one 'CURRENT BROKEN UI' and the other 'FIGMA TARGET SPECIFICATION'.",
          "Explicitly reference your design token file (`@globals.css` or `@tailwind.config.ts`) when prompting from screenshots to enforce exact theme colors.",
          "Ask the vision model: 'What CSS property is causing the unwanted horizontal overflow in this screenshot?' to diagnose issues before generating code."
        ]
      },
      promptLab: {
        title: "Screenshot-to-Tailwind Visual Refactoring Prompt",
        description: "Diagnose visual layout bugs and generate pixel-accurate Tailwind CSS components directly from uploaded screenshots and Figma mockups.",
        variables: [
          {
            name: "Component Type",
            label: "Component under Inspection",
            options: ["User Profile Header & Metric Badges", "Checkout Pricing Card with Toggle", "Multi-Column Navigation Navbar", "Data Table with Status Pills & Actions"],
            default: "User Profile Header & Metric Badges"
          },
          {
            name: "Visual Issue",
            label: "Observed Bug",
            options: ["Flexbox wrapping causing text clipping on mobile", "Z-index dropdown hidden beneath parent overflow container", "Uneven padding and misaligned icon baselines", "Grid tracks collapsing unexpectedly at tablet breakpoints"],
            default: "Flexbox wrapping causing text clipping on mobile"
          },
          {
            name: "Target Component File",
            label: "Pinned Component",
            options: ["@src/components/UserProfileHeader.tsx", "@src/components/PricingCard.tsx", "@src/components/Navbar.tsx", "@src/components/DataTable.tsx"],
            default: "@src/components/UserProfileHeader.tsx"
          }
        ],
        template: `[Attach Screenshot via Cmd+V]

Context:
- Pinned Component: [Target Component File]
- Component Type: [Component Type]
- Observed Bug: [Visual Issue]

Analysis & Refactoring Request:
1. Visual Inspection: Analyze the attached screenshot. Pinpoint the exact CSS rules causing [Visual Issue].
2. Code Modification: Refactor [Target Component File] using Tailwind CSS utility classes to match the visual target.
3. Responsive Behavior: Ensure the layout flows naturally from mobile (375px) to desktop (1440px) without unexpected horizontal scrolling.
4. Token Adherence: Use our project's 1px border tokens and slate color palette (\`border-app-border\`, \`bg-app-surface\`, \`text-app-text\`).`,
        expectedOutput: `### Visual Bug Diagnosis & Tailwind Fix

**Identified Issue:**
In the screenshot, the user profile avatar and metric badges are contained in a fixed-width container with \`flex items-center nowrap\`. When the viewport shrinks below 640px, the long email address forces the metric badges out of the container bounds, causing text truncation.

\`\`\`tsx
// Diff for @src/components/UserProfileHeader.tsx
export function UserProfileHeader({ user, stats }: UserProfileHeaderProps) {
  return (
    <div className="p-6 rounded-2xl border border-app-border bg-app-surface shadow-xs">
      {/* Changed flex-nowrap to responsive flex-col sm:flex-row with gap-4 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* User Info Left Column */}
        <div className="flex items-center gap-3.5 min-w-0">
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="h-12 w-12 rounded-full border border-app-border object-cover shrink-0"
          />
          <div className="min-w-0">
            <h2 className="text-base font-bold text-app-text truncate">{user.name}</h2>
            <p className="text-xs text-app-muted truncate font-mono">{user.email}</p>
          </div>
        </div>

        {/* Metric Badges Right Column */}
        <div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-app-border">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
            {stats.status}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-app-surface text-app-muted border border-app-border">
            {stats.role}
          </span>
        </div>
      </div>
    </div>
  );
}
\`\`\``
      },
      conceptGuide: {
        title: "Understanding Multimodal Spatial Reasoning in Code Generation",
        overview: "Multimodal frontier LLMs process images through vision transformer (ViT) patch encoders that split images into a grid of visual tokens. When an image of a user interface is supplied alongside code, the cross-attention layers of the model cross-reference visual tokens (such as a 12px white space gap or a rounded border radius) against the corresponding CSS strings in your source code. Because vision models are trained on millions of paired UI mockups and DOM trees, they possess remarkable spatial reasoning—accurately calculating whether a layout requires flex-wrap, relative positioning, or grid-template adjustments to resolve clipping bugs.",
        keyPoints: [
          "**Visual Tokenization:** Images are encoded as spatial tokens that allow LLMs to evaluate visual margins, baseline alignments, and hierarchy.",
          "**Box-Model Clarity:** Screenshots featuring clear contrast or DevTools inspection bands produce vastly more accurate CSS diffs than flat images.",
          "**Context Coupling:** Always pair image uploads with the target component code to ground the visual change in active JSX."
        ]
      },
      learning: {
        resources: [
          {
            title: "Cursor Vision & Multimodal Image Ingestion Docs",
            url: "https://docs.cursor.com/chat/vision",
            type: "Official Docs"
          },
          {
            title: "Chrome DevTools CSS & Box Model Inspection Guide",
            url: "https://developer.chrome.com/docs/devtools/css",
            type: "Guide"
          },
          {
            title: "Figma Dev Mode & Component Inspection Reference",
            url: "https://help.figma.com/hc/en-us/articles/15023124642203-Use-Dev-Mode",
            type: "Reference"
          },
          {
            title: "Tailwind CSS Responsive Design & Breakpoints Specification",
            url: "https://tailwindcss.com/docs/responsive-design",
            type: "Official Docs"
          }
        ]
      }
    },

    // Node 9
    {
      id: "step-9",
      stepNumber: 9,
      phaseId: "phase-3",
      title: "Autonomous Terminal Execution & Test-Driven Loops",
      timeEstimate: "2 hrs",
      difficulty: "Advanced",
      summary: "Enable autonomous terminal execution in Cursor Agent, run CLI test suites directly from chat, parse stack traces, and execute self-healing test-driven development (TDD) loops.",
      description: "One of the most transformative capabilities of modern agentic IDEs is the ability to execute shell commands directly inside your terminal, read the exit code and standard output/error streams, and iterate autonomously. In Test-Driven Development (TDD) workflows, an engineer writes a failing unit test or end-to-end integration test (using Vitest, Jest, or Playwright). In Cursor Agent Mode, you can instruct the agent to run the test suite, observe the exact line where the assertion fails, inspect the stack trace, modify the application source code, and re-run the test command in a self-healing loop until every assertion turns green.",
      playbook: {
        setup: "Open Cursor Settings > Features > Agent. Enable Terminal Execution permissions. Ensure the security confirmation setting is set to 'Ask on destructive commands' (preventing accidental `rm -rf` or `git reset --hard` commands).",
        execute: "Write a failing unit test file (e.g. `src/tests/auth.test.ts`). In Composer Agent Mode, instruct: 'Run `npx vitest run src/tests/auth.test.ts`. Read the failing test output, fix the corresponding business logic in `src/server/auth.ts`, and re-run the test until all assertions pass green.'",
        verify: "Watch the agent execute the command in your integrated terminal, capture the red test failure, apply code patches, execute the command a second time, and report success when the process exits with code 0."
      },
      tools: [
        {
          name: "Cursor Terminal Agent",
          type: "Freemium",
          url: "https://docs.cursor.com/agent/terminal",
          description: "Autonomous CLI execution capability in Cursor allowing agents to run shell commands, parse output, and self-heal.",
          bestFor: "Automated test runs, build verification, migration execution & self-healing loops"
        },
        {
          name: "Vitest",
          type: "Free",
          url: "https://vitest.dev",
          description: "Blazing fast Vite-native testing framework providing instantaneous unit and integration test runs for AI verification loops.",
          bestFor: "Unit testing, TDD execution & sub-second test feedback"
        },
        {
          name: "Playwright",
          type: "Free",
          url: "https://playwright.dev",
          description: "End-to-end browser testing framework enabling AI agents to verify full user workflows against headless Chromium, Firefox, and WebKit.",
          bestFor: "E2E verification, cross-browser testing & visual regression audits"
        }
      ],
      callouts: {
        mistake: "Running long-running commands like `npm run dev` or `vite` inside an agent loop that expects a terminating exit code, causing the agent to hang indefinitely.",
        proTip: "Always supply targeted filter flags when having an agent run tests (e.g. `npx vitest run src/tests/auth.test.ts`) rather than running your entire 500-test suite on every iteration.",
        mistakes: [
          "Granting unrestricted terminal auto-approval on destructive commands without a human confirmation gate.",
          "Running non-terminating daemon commands (like live dev servers or file watchers) that block the agent from reading completion codes.",
          "Ignoring exit code 1 due to linting or typecheck failures while celebrating passing unit tests."
        ],
        proTips: [
          "Chain typechecking with tests: instruct the agent to run `npx tsc --noEmit && npx vitest run [test-path]` to ensure type safety and test coverage simultaneously.",
          "Use the `--runInBand` or `--no-watch` flag to ensure the test runner exits immediately upon completion.",
          "If an agent gets stuck in a loop after 3 failed attempts, intervene manually: inspect the error and provide a specific architectural hint."
        ]
      },
      promptLab: {
        title: "Autonomous TDD Self-Healing Terminal Loop Prompt",
        description: "Instruct Cursor Agent to execute a targeted test suite, parse terminal stack traces, refactor source logic, and loop until all tests pass.",
        variables: [
          {
            name: "Test Runner & Command",
            label: "Test Command",
            options: ["npx vitest run src/tests/billing.test.ts", "npm run test:unit -- --filter=auth", "npx playwright test tests/e2e/checkout.spec.ts", "npx tsc --noEmit && npm test"],
            default: "npx vitest run src/tests/billing.test.ts"
          },
          {
            name: "Source File to Fix",
            label: "Target Source File",
            options: ["src/server/services/billing.ts", "src/lib/auth/session.ts", "src/components/CheckoutForm.tsx", "src/utils/data-transform.ts"],
            default: "src/server/services/billing.ts"
          },
          {
            name: "Max Iteration Loop",
            label: "Iteration Boundary",
            options: ["Maximum 3 automated iterations", "Maximum 5 automated iterations", "Single run with detailed diagnosis"],
            default: "Maximum 3 automated iterations"
          }
        ],
        template: `Autonomous TDD Execution Loop:

Command: [Test Runner & Command]
Target Source: [Source File to Fix]
Constraint: [Max Iteration Loop]

Autonomous Execution Instructions:
1. Run [Test Runner & Command] in the integrated terminal.
2. If all tests pass (exit code 0), report success and summarize verified test cases.
3. If tests fail:
   - Parse the terminal stdout/stderr for exact failing assertion lines and expected vs. actual values.
   - Open [Source File to Fix] and pinpoint the root-cause bug.
   - Refactor the logic to satisfy the test assertions without modifying the test file.
   - Re-run the command to verify the fix.
4. If tests do not pass after the iteration boundary, stop and ask for human guidance with a detailed failure report.`,
        expectedOutput: `### Autonomous TDD Execution Log

**Iteration 1: Running \`npx vitest run src/tests/billing.test.ts\`**
- **Result:** FAILED (1 failed, 3 passed)
- **Error Stack:**
  \`\`\`
  FAIL src/tests/billing.test.ts > calculateProratedInvoice > should calculate refund credit on plan downgrade
  AssertionError: expected 1500 to equal 1250
    at src/tests/billing.test.ts:42:18
  \`\`\`

**Root Cause Diagnosis:**
In \`src/server/services/billing.ts\` (line 64), the proration math calculated remaining billing days using \`Math.floor()\` instead of \`Math.round()\`, causing a 2-day calculation discrepancy on 31-day months.

**Applied Fix:**
Updated proration calculation in \`src/server/services/billing.ts\`:
\`\`\`typescript
const remainingRatio = Math.max(0, periodEnd - cancelTimestamp) / totalPeriodMs;
const refundCreditCents = Math.round(activePlanPriceCents * remainingRatio);
\`\`\`

**Iteration 2: Re-running \`npx vitest run src/tests/billing.test.ts\`**
- **Result:** PASSED (4 passed, 0 failed)
- **Exit Code:** 0`
      },
      conceptGuide: {
        title: "Understanding Closed-Loop Test-Driven Agent Systems",
        overview: "The fundamental weakness of open-loop generative AI is that the model outputs code without knowing if it actually runs or breaks downstream dependencies. Closed-loop agent execution connects the model's output to real environmental feedback: terminal exit codes, standard output, and process signals. By giving the AI access to terminal execution, the loop transforms from probabilistic guessing into deterministic verification. If a test fails, the stack trace provides exact ground-truth feedback, allowing the model to correct its internal hypothesis and achieve verifiable correctness.",
        keyPoints: [
          "**Closed-Loop Feedback:** Real terminal stdout and exit codes ground the AI in empirical runtime truth rather than static assumptions.",
          "**Stack Trace Deconstruction:** Terminal agents read line-specific error traces to locate bugs in source code with surgical precision.",
          "**Bounded Execution:** Establishing strict iteration boundaries (e.g. 3 attempts) prevents runaway infinite loops and excessive token spend."
        ]
      },
      learning: {
        resources: [
          {
            title: "Cursor Agent Terminal Execution Official Documentation",
            url: "https://docs.cursor.com/agent/terminal",
            type: "Official Docs"
          },
          {
            title: "Vitest CLI & Programmatic Test Execution Guide",
            url: "https://vitest.dev/guide/cli.html",
            type: "Official Docs"
          },
          {
            title: "Playwright Test Runner & Automated Verification Docs",
            url: "https://playwright.dev/docs/intro",
            type: "Reference"
          },
          {
            title: "Test-Driven Development (TDD) by Kent Beck",
            url: "https://martinfowler.com/bliki/TestDrivenDevelopment.html",
            type: "Architecture"
          }
        ]
      }
    },

    // Node 10
    {
      id: "step-10",
      stepNumber: 10,
      phaseId: "phase-4",
      title: "Checkpoint Rollbacks & Preventing Context Rot",
      timeEstimate: "1 hr",
      difficulty: "Intermediate",
      summary: "Recognize context window saturation and model degradation, utilize Cursor's atomic Checkpoints timeline for zero-loss rollbacks, and manage clean handovers between focused chat threads.",
      description: "As conversation threads grow beyond 15–20 turns, language models suffer from 'context rot': the context window becomes saturated with outdated code versions, dead-end debugging attempts, and long error traces. When context rot sets in, the AI begins repeating previously discarded mistakes, ignoring system rules, or hallucinating modifications to unrelated files. Mastering AI IDE development requires recognizing the symptoms of context rot early. Rather than repeatedly arguing with a degraded conversation thread, developers must utilize Cursor's built-in Checkpoint history to roll back unwanted multi-file modifications cleanly, reset into a fresh thread, and pass a concise 3-bullet handover prompt.",
      playbook: {
        setup: "Familiarize yourself with the Checkpoints timeline in the top bar of Cursor Composer (Cmd+I). Notice the automated snapshot created before each agent execution step.",
        execute: "When an agent conversation begins exhibiting circular logic or hallucinates unwanted changes across multiple files, click the Checkpoints timeline. Revert to the clean state immediately prior to the derailment. Click the '+' button in Composer or Chat to spawn a completely fresh thread.",
        verify: "Run `git status` in your terminal or check the Source Control panel to verify that all dirty edits from the degraded session were wiped clean. In the new thread, provide a concise 3-bullet handover: 1. Goal, 2. What was already built, 3. The specific next step."
      },
      tools: [
        {
          name: "Cursor Checkpoints",
          type: "Freemium",
          url: "https://docs.cursor.com/composer/checkpoints",
          description: "Atomic timeline and snapshot rollback system in Cursor Composer for reverting agentic edits with zero code loss.",
          bestFor: "Instant rollbacks, session branching & preventing destructive AI edits"
        },
        {
          name: "Git Stash",
          type: "Free",
          url: "https://git-scm.com/docs/git-stash",
          description: "Standard version control tool for shelving working directory changes before attempting large exploratory AI refactors.",
          bestFor: "Clean working state preservation, branch isolation & manual rollback points"
        },
        {
          name: "Claude 3.7",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Frontier reasoning model used to synthesize long chat histories into dense, high-signal handover briefs for fresh sessions.",
          bestFor: "Context condensation, handover briefing & milestone synthesis"
        }
      ],
      callouts: {
        mistake: "Continuing to prompt a 30-message chat thread that has clearly derailed, burning thousands of tokens while the model loops in circles.",
        proTip: "Never spend more than 2 prompts trying to fix a model's hallucinated error in an old thread; revert to the last clean checkpoint and start a new thread with explicit negative constraints.",
        mistakes: [
          "Attempting to manually undo multi-file agent edits with `Cmd+Z` across 8 different editor tabs instead of using atomic Checkpoint rollbacks.",
          "Starting a fresh chat without summarizing the current codebase state, forcing the new model to guess what was already completed.",
          "Allowing conversational threads to exceed 20 turns on complex features without resetting context."
        ],
        proTips: [
          "Before initiating a large Composer feature, run `git stash` or commit your work so you have both a git milestone and a Cursor Checkpoint.",
          "When context begins to degrade, ask the current chat: 'Summarize what we built and what remains to be done in 3 bullet points', then copy that summary into a new thread.",
          "Keep individual Composer tasks strictly bounded: complete the backend action, accept it, commit it, and start a fresh session for the UI component."
        ]
      },
      promptLab: {
        title: "Context-Reset Handover Summary & Clean Restart Prompt",
        description: "Condense a complex, multi-turn development session into an authoritative handover brief to launch a pristine, high-attention fresh chat thread.",
        variables: [
          {
            name: "Current Milestone",
            label: "Completed So Far",
            options: ["Database Schema Migrated & Prisma Client Generated", "Backend Route Handlers & Zod Schemas Implemented", "Core React UI Component & State Scaffolding Completed", "Unit Tests Written but Integration Failing"],
            default: "Backend Route Handlers & Zod Schemas Implemented"
          },
          {
            name: "The Roadblock",
            label: "Encountered Error / Roadblock",
            options: ["Token Expiry Race Condition in Refresh Cookie Handler", "Hydration Mismatch in Server Component Data Fetching", "Prisma Foreign Key Constraint Violation on Cascade Delete", "Circular Dependency between Auth & User Modules"],
            default: "Token Expiry Race Condition in Refresh Cookie Handler"
          },
          {
            name: "Next Immediate Goal",
            label: "Immediate Next Step",
            options: ["Implement Atomic Mutex Lock for Token Rotation", "Extract Client Component Boundary with Suspense Fallback", "Add Explicit Transaction Isolation Block to Service Method", "Decouple Session Storage into Standalone Interface"],
            default: "Implement Atomic Mutex Lock for Token Rotation"
          }
        ],
        template: `[New Thread - Clean Context Handover]

Context Reset from Prior Milestone:
- Completed So Far: [Current Milestone]
- Identified Roadblock: [The Roadblock]
- Immediate Objective: [Next Immediate Goal]

Relevant Files:
- @src/server/auth/token-service.ts
- @src/app/api/auth/refresh/route.ts

Instructions for Fresh Session:
1. Do not re-architect the completed files or suggest alternative authentication frameworks.
2. Focus exclusively on solving [The Roadblock].
3. Implement [Next Immediate Goal] with minimal, surgical code changes.
4. Output the complete solution with explicit error handling and concurrency safeguards.`,
        expectedOutput: `### Fresh Session Handover Acknowledged

**Problem Isolation:**
In \`src/app/api/auth/refresh/route.ts\`, multiple concurrent requests with an expired access token trigger simultaneous refresh calls. Because both requests attempt to use the same single-use refresh token, the second request fails with an invalid token error, forcing the user to log out unexpectedly.

**Solution: Atomic Mutex with In-Memory / Redis Lock**

\`\`\`typescript
// src/server/auth/token-service.ts
import { redis } from '@/server/redis';

export async function rotateRefreshTokenSafely(userId: string, incomingToken: string) {
  const lockKey = \`lock:refresh:\${userId}\`;
  
  // Acquire a 5-second mutex lock
  const acquired = await redis.set(lockKey, 'locked', 'PX', 5000, 'NX');
  
  if (!acquired) {
    // If locked, another request is already rotating. Wait 300ms and return cached new token
    await new Promise((resolve) => setTimeout(resolve, 300));
    const cachedToken = await redis.get(\`cached:token:\${userId}\`);
    if (cachedToken) {
      return { success: true, token: cachedToken };
    }
    return { success: false, error: 'Concurrent refresh conflict. Please retry.' };
  }

  try {
    // Execute single-flight rotation logic...
    const newTokens = await executeTokenRotation(userId, incomingToken);
    await redis.set(\`cached:token:\${userId}\`, newTokens.accessToken, 'EX', 10);
    return { success: true, token: newTokens.accessToken };
  } finally {
    await redis.del(lockKey);
  }
}
\`\`\``
      },
      conceptGuide: {
        title: "Understanding Context Rot & Attention Degradation in Long Chats",
        overview: "Transformer attention mechanisms assign attention weights across all tokens in the context window. In a fresh chat with 2,000 tokens, the model's attention is focused on your prompt and pinned files. By message 25, the context contains 50,000 tokens of discarded code snippets, compiler errors, and conversational chatter. The signal-to-noise ratio drops precipitously. The model enters a degradation mode where it anchors on outdated variables mentioned 15 turns ago rather than your latest instruction. Recognizing context rot and adopting a culture of 'frequent atomic thread resets' is what separates novice prompters from elite AI engineers.",
        keyPoints: [
          "**Attention Signal Dilution:** Long conversational histories degrade attention weights, increasing hallucination rates.",
          "**Atomic Checkpoints:** Cursor's Checkpoint timeline allows non-destructive rollbacks to any prior generation milestone.",
          "**Milestone Handover Protocol:** Resetting into fresh threads with 3-bullet structured summaries restores 100% model attention."
        ]
      },
      learning: {
        resources: [
          {
            title: "Cursor Checkpoints & Timeline Official Documentation",
            url: "https://docs.cursor.com/composer/checkpoints",
            type: "Official Docs"
          },
          {
            title: "Git Stashing & Clean Working State Reference",
            url: "https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning",
            type: "Reference"
          },
          {
            title: "Anthropic Research on Long-Context Attention and Needle Retrieval",
            url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/long-context-tips",
            type: "Guide"
          },
          {
            title: "Software Engineering at Google: Small Commits and Clean State",
            url: "https://abseil.io/resources/swe-book",
            type: "Architecture"
          }
        ]
      }
    },

    // Node 11
    {
      id: "step-11",
      stepNumber: 11,
      phaseId: "phase-4",
      title: "Navigating Monorepos & Complex Legacy Refactoring",
      timeEstimate: "2 hrs",
      difficulty: "Advanced",
      summary: "Scale Cursor workflows across massive Turborepo monorepos, constrain vector search boundaries to active packages, and orchestrate safe incremental legacy migrations.",
      description: "Applying AI coding assistants to a 100,000+ line enterprise monorepo (such as Turborepo, Nx, or pnpm workspaces) presents unique challenges. Running an unconstrained `@Codebase` search across a monorepo containing 15 applications and 30 internal packages exhausts vector retrieval quotas, pulls in conflicting versions of shared utilities, and creates circular dependency bugs. Successfully navigating monorepos requires configuring workspace-level `.cursorignore` files to quarantine inactive apps, using scoped `@Folders` mentions (e.g. `@apps/web` and `@packages/ui`), and breaking massive multi-package refactors into incremental, interface-first migration stages.",
      playbook: {
        setup: "Configure your monorepo workspace. In `.cursorignore`, exclude inactive apps and packages you are not actively modifying. In multi-root workspaces, open only the active app and its direct package dependencies.",
        execute: "When refactoring code across package boundaries, pin the `package.json` and `tsconfig.json` of both packages. Prompt Composer with an interface-first contract: 'Extract the shared analytics event dispatcher from `apps/web/src/lib/analytics.ts` into `packages/analytics`, updating the package exports, dependencies, and path aliases.'",
        verify: "Run `turbo run build --filter=...` or `pnpm --filter [package] check` in the integrated terminal to verify that the refactored package builds independently without circular dependencies."
      },
      tools: [
        {
          name: "Turborepo",
          type: "Free",
          url: "https://turbo.build/repo",
          description: "High-performance build system for JavaScript and TypeScript monorepos providing cached task execution and package dependency graphs.",
          bestFor: "Monorepo dependency management, cached builds & workspace scoping"
        },
        {
          name: "Cursor Workspace Scoping",
          type: "Freemium",
          url: "https://docs.cursor.com/context/codebase-indexing",
          description: "Techniques and configurations for bounding Cursor's vector indexing and context extraction to specific monorepo packages.",
          bestFor: "Large-repo navigation, multi-package refactoring & boundary preservation"
        },
        {
          name: "TypeScript Project References",
          type: "Free",
          url: "https://www.typescriptlang.org/docs/handbook/project-references.html",
          description: "TypeScript compiler feature for structuring programs into smaller, faster builds across monorepo boundaries.",
          bestFor: "Type isolation, clean boundary contracts & fast cross-package compilation"
        }
      ],
      callouts: {
        mistake: "Running global unconstrained `@Codebase` searches across an entire 20-package monorepo, causing the AI to hallucinate utilities from deprecated sibling projects.",
        proTip: "Use explicit `@Folders` syntax like `@packages/ui/src` when refactoring components to prevent the agent from accidentally generating styling files in the wrong package.",
        mistakes: [
          "Attempting to migrate an entire monorepo package in a single prompt without first verifying the exported TypeScript interfaces.",
          "Allowing the AI to introduce circular package dependencies (e.g. `packages/auth` importing from `packages/billing` which imports from `packages/auth`).",
          "Forgetting to update `package.json` dependencies and `exports` maps after extracting shared utilities into a new workspace package."
        ],
        proTips: [
          "Pin the root `turbo.json` file when asking questions about monorepo build pipelines, environment variable caching, and task pipelines.",
          "Use `@Symbols` to target exact interface names across monorepo package boundaries rather than loading entire file implementations.",
          "Run targeted lint commands (e.g. `turbo run lint --filter=@repo/ui`) inside the terminal loop to catch boundary violations early."
        ]
      },
      promptLab: {
        title: "Monorepo Package Extraction & Architectural Refactoring Prompt",
        description: "Safely extract shared logic from an application into a modular workspace package with correct TypeScript path mappings and zero circular dependencies.",
        variables: [
          {
            name: "Logic to Extract",
            label: "Logic / Capability to Extract",
            options: ["Shared Analytics Tracking & Event Telemetry", "Unified Authentication Session Validation & JWT Verifier", "Core Design System Button & Modal Components", "Shared Database Client & Schema Models"],
            default: "Shared Analytics Tracking & Event Telemetry"
          },
          {
            name: "Source Location",
            label: "Source Application Path",
            options: ["apps/web/src/lib/analytics.ts", "apps/api/src/auth/", "apps/marketing/src/components/ui/"],
            default: "apps/web/src/lib/analytics.ts"
          },
          {
            name: "Target Package",
            label: "Target Workspace Package",
            options: ["packages/analytics", "packages/auth", "packages/ui", "packages/database"],
            default: "packages/analytics"
          }
        ],
        template: `Monorepo Architectural Extraction Request:

Extract [Logic to Extract] from [Source Location] into a dedicated workspace package at [Target Package].

Execution Plan:
1. Target Package Setup:
   - Create \`[Target Package]/package.json\` with proper \`name\` (\`@repo/analytics\`), \`exports\`, and \`peerDependencies\`.
   - Create \`[Target Package]/tsconfig.json\` extending the workspace base tsconfig.
2. Code Migration:
   - Move source logic from [Source Location] into \`[Target Package]/src/index.ts\`.
   - Export all public interfaces and helper methods cleanly.
3. Consumer Refactoring:
   - Add \`"@repo/analytics": "workspace:*"\` to the source app's \`package.json\`.
   - Update import statements in [Source Location] to import from \`@repo/analytics\`.
4. Verification:
   - Verify no circular dependencies are introduced.`,
        expectedOutput: `### Monorepo Extraction Plan: @repo/analytics

#### 1. Package Configuration: \`packages/analytics/package.json\`
\`\`\`json
{
  "name": "@repo/analytics",
  "version": "0.1.0",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts"
  },
  "dependencies": {
    "posthog-js": "^1.150.0"
  },
  "devDependencies": {
    "@repo/typescript-config": "workspace:*",
    "typescript": "^5.7.0"
  }
}
\`\`\`

#### 2. Clean Implementation: \`packages/analytics/src/index.ts\`
\`\`\`typescript
export interface AnalyticsEventMap {
  'user_signed_up': { method: 'email' | 'google' | 'github' };
  'subscription_upgraded': { planId: string; amountCents: number };
}

export class AnalyticsTracker {
  static track<K extends keyof AnalyticsEventMap>(
    event: K,
    properties: AnalyticsEventMap[K]
  ) {
    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.capture(event, properties);
    }
  }
}
\`\`\`

#### 3. Consumer Update: \`apps/web/package.json\`
Added \`"@repo/analytics": "workspace:*"\` to dependencies. Updated imports in \`apps/web/src/components/SignupForm.tsx\`.`
      },
      conceptGuide: {
        title: "Understanding Monorepo Scoping & Workspace Boundary Defense",
        overview: "Monorepos aggregate multiple interdependent packages into a single git repository. While powerful for code sharing, they create combinatorial explosion for AI context engines. If an indexer encounters 10 different `package.json` files and 3 conflicting versions of React, semantic search retrieves conflicting patterns. Developers must practice 'Workspace Boundary Defense': treating each monorepo package as an isolated micro-ecosystem. By configuring root `.cursorignore` files to blind the AI to unrelated applications and pinning exact package boundary files, you prevent cross-package contamination and ensure enterprise-grade refactoring precision.",
        keyPoints: [
          "**Workspace Boundary Defense:** Isolate LLM attention to active package directories to prevent cross-app dependency pollution.",
          "**Interface-First Extraction:** Define the exported TypeScript contract in the target package before touching consumer call sites.",
          "**Independent Task Verification:** Use Turborepo task filters (`--filter=[pkg]`) to verify package builds in sub-second feedback loops."
        ]
      },
      learning: {
        resources: [
          {
            title: "Turborepo Core Architecture & Monorepo Best Practices",
            url: "https://turbo.build/repo/docs/core-concepts/monorepos",
            type: "Official Docs"
          },
          {
            title: "Cursor Codebase Indexing on Large Repositories",
            url: "https://docs.cursor.com/context/codebase-indexing",
            type: "Official Docs"
          },
          {
            title: "TypeScript Project References & Path Aliasing Reference",
            url: "https://www.typescriptlang.org/docs/handbook/project-references.html",
            type: "Reference"
          },
          {
            title: "pnpm Workspaces Specification & Dependency Linking",
            url: "https://pnpm.io/workspaces",
            type: "Guide"
          }
        ]
      }
    },

    // Node 12
    {
      id: "step-12",
      stepNumber: 12,
      phaseId: "phase-4",
      title: "AI Commit Messages, PR Descriptions & Diff Auditing",
      timeEstimate: "1 hr",
      difficulty: "Beginner",
      summary: "Close the development loop with AI-assisted git workflows: generate Conventional Commits, draft comprehensive pull request descriptions, and run pre-push security diff audits.",
      description: "Writing informative commit messages and comprehensive Pull Request descriptions is critical for engineering team health, yet it is often rushed at the end of a long sprint. Cursor closes this loop through native git integration. By inspecting staged git diffs (`@diff`), developers can automatically generate semantic Conventional Commits (`feat(auth): ...`, `fix(billing): ...`), draft detailed pull request markdown with testing checklists, and run an automated pre-push security and hygiene audit. This final quality gate catches leaked `.env` credentials, rogue `console.log` statements, and accidental deletions before code is pushed to remote code reviews.",
      playbook: {
        setup: "Ensure GitHub CLI (`gh`) is installed and authenticated in your terminal. Familiarize yourself with the 'Generate Commit Message' spark icon in the Cursor Source Control sidebar.",
        execute: "Stage your verified changes explicitly using `git add [files]` (avoid blind `git add .`). In the commit message box, click the AI icon (or in Chat type `@diff generate a Conventional Commit message following the format type(scope): summary with 3 bullet details`). Then prompt: '@diff generate a complete GitHub PR description including Summary, Architecture Changes, and Testing Verification Checklist'.",
        verify: "Inspect the staged diff line-by-line using `git diff --staged`. Verify that no secrets, temporary debug code, or accidental file renames are staged. Create the PR using `gh pr create --title '...' --body '...'`."
      },
      tools: [
        {
          name: "Cursor Git Integration",
          type: "Freemium",
          url: "https://docs.cursor.com/chat/git",
          description: "Native git awareness in Cursor providing diff analysis, commit message generation, and branch context.",
          bestFor: "Staged diff analysis, Conventional Commit generation & PR drafting"
        },
        {
          name: "GitHub CLI (gh)",
          type: "Free",
          url: "https://cli.github.com",
          description: "Official command-line tool for GitHub allowing terminal-native PR creation, issue tracking, and CI status checks.",
          bestFor: "CLI pull request creation, automated branch workflows & review management"
        },
        {
          name: "CodeRabbit",
          type: "Freemium",
          url: "https://coderabbit.ai",
          description: "AI-powered automated code review tool that reviews pull request diffs for logic bugs, security flaws, and performance regressions.",
          bestFor: "Automated PR reviews, security auditing & diff verification"
        }
      ],
      callouts: {
        mistake: "Clicking 'Generate Commit Message' without staging specific files, inadvertently committing temporary scratch files, debug logs, or `.env.local` secrets.",
        proTip: "Run a pre-push security scan prompt: '@diff audit this staged diff for any hardcoded API keys, debug console statements, or unhandled edge cases' before creating your PR.",
        mistakes: [
          "Running `git add .` blindly and committing generated test fixtures or local environment credentials.",
          "Accepting vague, 3-word commit messages ('update styles and fix bug') that obscure repository history.",
          "Failing to review the staged diff manually before opening a PR, relying entirely on the AI summary."
        ],
        proTips: [
          "Use interactive staging (`git add -p`) to review and stage logic chunk-by-chunk for cleaner atomic commits.",
          "Configure a Git commit template or GitHub PR template in `.github/pull_request_template.md` so Cursor automatically populates your team's exact sections.",
          "Use `gh pr create --web` if you prefer to review the final AI-generated markdown inside GitHub's web interface before submitting."
        ]
      },
      promptLab: {
        title: "Conventional Commit & Comprehensive PR Generator Prompt",
        description: "Transform staged git diffs into standardized Conventional Commit messages and thorough, review-ready GitHub Pull Request descriptions.",
        variables: [
          {
            name: "Change Scope",
            label: "Primary Change Type",
            options: ["feat (New Capability or Feature)", "fix (Bug Fix or Security Patch)", "refactor (Code Restructuring without Behavior Change)", "perf (Performance Optimization)"],
            default: "feat (New Capability or Feature)"
          },
          {
            name: "Module Scope",
            label: "Module / Area Affected",
            options: ["auth", "billing", "dashboard", "api-gateway", "design-system"],
            default: "billing"
          },
          {
            name: "PR Detail Level",
            label: "PR Description Depth",
            options: ["Comprehensive (Summary, Architectural Changes, Testing Steps)", "Standard (Summary + Verification)", "Quick / Minimal"],
            default: "Comprehensive (Summary, Architectural Changes, Testing Steps)"
          }
        ],
        template: `@diff

Analyze all currently staged changes in the git index.

Generate:
1. Conventional Commit Message:
   - Format: [Change Scope]([Module Scope]): Concise imperative summary (<50 chars)
   - 3 bullet points detailing why the changes were made and key architectural modifications.
2. Complete GitHub Pull Request Description:
   - ## Summary: 2-sentence executive overview of the feature/fix.
   - ## Key Architectural Changes: Bulleted breakdown mapped to modified files.
   - ## Security & Hygiene Audit: Explicit confirmation that no secrets or debug statements are staged.
   - ## How to Test: Step-by-step verification instructions with CLI commands and UI flows.`,
        expectedOutput: `### 1. Conventional Commit Message
\`\`\`git
feat(billing): implement atomic Stripe webhook subscription synchronization

- Handle customer.subscription.created/updated/deleted events with idempotency locks
- Add stripeCustomerId and subscriptionStatus fields to users table schema
- Eliminate race conditions on concurrent plan upgrade webhooks using Redis mutex
\`\`\`

---

### 2. GitHub Pull Request Description

## Summary
Implements end-to-end Stripe subscription webhook handling with robust idempotency guarantees and database synchronization. Resolves issue #142 where concurrent webhook retries caused intermittent plan status rollbacks.

## Key Architectural Changes
- **\`src/app/api/webhooks/stripe/route.ts\`**: Added signature verification and event routing for subscription lifecycle events.
- **\`src/server/services/billing.ts\`**: Implemented \`handleSubscriptionUpdated()\` with Redis mutex locks to prevent race conditions during plan upgrades.
- **\`prisma/schema.prisma\`**: Added \`stripeCustomerId\` (unique indexed) and \`subscriptionStatus\` columns to \`User\` model.

## Security & Hygiene Audit
- [x] Zero hardcoded secrets, API keys, or private tokens present.
- [x] All database mutations operate under transaction boundaries.
- [x] Removed all temporary \`console.log\` statements; production logging uses structured logger.

## How to Test
1. Run local Stripe CLI forwarder: \`stripe listen --forward-to localhost:3000/api/webhooks/stripe\`
2. Trigger test subscription creation: \`stripe trigger customer.subscription.created\`
3. Verify database updates: Inspect \`users\` table to confirm \`subscriptionStatus\` equals \`active\`.
4. Run unit test suite: \`npm run test:unit src/tests/billing.test.ts\` (All 6 tests pass).`
      },
      conceptGuide: {
        title: "Understanding Diff Analysis & The Automated PR Feedback Loop",
        overview: "A git diff is the purest machine-readable representation of software evolution. By feeding unified diffs (`@diff`) directly into language models, developers close the feedback loop between code generation and team collaboration. An LLM analyzing a unified diff evaluates not just what lines were added, but what contracts were modified and what downstream implications exist. Using AI to audit staged diffs before opening a pull request shifts quality review left, catching missed edge cases and sensitive secrets before senior human reviewers even see the pull request.",
        keyPoints: [
          "**Unified Diff Priming:** Staged git diffs provide precise, delta-only context that eliminates whole-file token bloat.",
          "**Shift-Left Security:** Automated pre-commit diff audits catch leaked secrets, debug statements, and formatting regressions early.",
          "**Standardized Conventional Commits:** Automated semantic commit messages improve git bisect accuracy and automated changelog generation."
        ]
      },
      learning: {
        resources: [
          {
            title: "Conventional Commits 1.0.0 Specification",
            url: "https://www.conventionalcommits.org",
            type: "Official Docs"
          },
          {
            title: "Cursor Git Integration & Diff Analysis Guide",
            url: "https://docs.cursor.com/chat/git",
            type: "Official Docs"
          },
          {
            title: "GitHub CLI (gh pr create) Official Manual",
            url: "https://cli.github.com/manual/gh_pr_create",
            type: "Reference"
          },
          {
            title: "CodeRabbit AI Automated Pull Request Review Guide",
            url: "https://docs.coderabbit.ai",
            type: "Guide"
          }
        ]
      }
    }
  ]
};
