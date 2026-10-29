// Complete production-grade steps data for "AI Technical Writing & Docs Engineering" Roadmap (10 Nodes)

export const aiTechnicalWritingDocsEngineeringData = {
  id: "ai-technical-writing-docs-engineering",
  title: "AI Technical Writing & Docs Engineering",
  description: "Create developer documentation, API references, and interactive knowledge bases using AI-assisted workflows.",
  category: "Role & Workflow Roadmaps",
  stepCount: 10,
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: Docs-as-Code Architecture & Information Hierarchy",
      description: "Establish the Diátaxis documentation architecture, scaffold a Git-backed modern MDX documentation system with live previews, and ingest legacy codebases using AST-aware LLMs to map every public API, module, and data contract."
    },
    {
      id: "phase-2",
      title: "Phase 2: Interactive Tutorials, API References & Diagrams",
      description: "Design frictionless zero-to-one developer Quickstarts with runnable browser sandboxes, generate strict OpenAPI 3.1 specifications with interactive 'Try It' consoles, and render automated sequence diagrams with Mermaid.js."
    },
    {
      id: "phase-3",
      title: "Phase 3: Automated Style Linting, CI/CD Sync & Drift Prevention",
      description: "Implement automated prose linting with Vale against the Google Developer Style Guide, and configure GitHub Actions CI bots to detect documentation drift whenever code signatures or CLI flags change."
    },
    {
      id: "phase-4",
      title: "Phase 4: AI-Native Docs (llms.txt), RAG Search & DX Analytics",
      description: "Publish standardized /llms.txt markdown indexes for AI coding agents, embed conversational RAG search with Inkeep, and automate semantic release notes while tracking failed search queries with telemetry."
    }
  ],
  steps: [
    // Node 1
    {
      id: "step-1",
      stepNumber: 1,
      phaseId: "phase-1",
      title: "The Diátaxis Framework & Documentation IA",
      timeEstimate: "1.5 hrs",
      difficulty: "Beginner",
      summary: "Structure engineering documentation into four distinct Diátaxis quadrants—Tutorials, How-To Guides, Reference, and Explanation—so developers never get lost.",
      description: "Developers visit technical documentation under completely different psychological mindsets: some are evaluating capabilities, others are trying to fix a production outage, and others need a syntax reminder. The Diátaxis framework divides all documentation into four distinct quadrants based on user need and learning orientation: Tutorials (learning-oriented lessons for beginners), How-To Guides (problem-oriented recipes for specific tasks), Reference (information-oriented technical descriptions of APIs and schemas), and Explanation (understanding-oriented conceptual overviews). Enforcing this architectural separation prevents tutorials from degrading into reference sheets and keeps reference pages free from conversational clutter.",
      playbook: {
        setup: "Conduct an inventory of all existing documentation, READMEs, wiki pages, and codebase comments. Create a matrix mapping every document into one of the four Diátaxis quadrants.",
        execute: "Audit pages that mix multiple modes (e.g., an installation tutorial that digresses into architecture theory). Extract architectural deep-dives into dedicated Explanation docs and extract parameter tables into Reference docs.",
        verify: "Review the primary navigation sidebar to ensure top-level navigation clearly separates 'Getting Started' (Tutorials), 'Guides' (How-To), 'API & SDKs' (Reference), and 'Architecture & Concepts' (Explanation)."
      },
      tools: [
        {
          name: "Notion",
          type: "Freemium",
          url: "https://www.notion.so",
          description: "Collaborative knowledge workspace used to map documentation information architecture, user journeys, and editorial style matrices.",
          bestFor: "Content matrix planning & documentation information architecture"
        },
        {
          name: "Claude 3.7 Sonnet",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Frontier reasoning model used to analyze disorganized documentation corpora and classify sections into clean Diátaxis quadrants.",
          bestFor: "Content auditing, quadrant classification & tone refactoring"
        },
        {
          name: "Whimsical",
          type: "Freemium",
          url: "https://whimsical.com",
          description: "Visual canvas and mind-mapping tool for charting developer onboarding flows, navigation trees, and site taxonomies.",
          bestFor: "Documentation sidebar tree mapping & user journey flows"
        }
      ],
      callouts: {
        mistake: "Mixing conceptual explanations and API references into the middle of a beginner tutorial, causing new developers to lose their execution momentum.",
        proTip: "Every document should have a single purpose: if a developer wants to solve an emergency error, point them straight to a step-by-step How-To guide without conceptual filler.",
        mistakes: [
          "Creating an 'Omnibus Guide' that attempts to teach onboarding, advanced edge cases, and API parameter schemas on a single 6,000-word page.",
          "Labeling a document a 'Tutorial' when it is actually a non-runnable conceptual overview that lacks verifiable step-by-step actions.",
          "Omitting cross-links between quadrants, forcing developers who hit an error during a tutorial to hunt manually for reference definitions."
        ],
        proTips: [
          "Include a clear 'Prerequisites' and 'What You Will Learn' callout at the top of every Tutorial node to establish immediate cognitive framing.",
          "Use standardized Diátaxis URL slugs (e.g., `/tutorials/first-api-call`, `/how-to/rotate-keys`, `/reference/api/v2`, `/concepts/event-loop`).",
          "Conduct user testing with unfamiliar developers: challenge them to find a specific HTTP header within 30 seconds to validate your taxonomy."
        ]
      },
      promptLab: {
        title: "Diátaxis Information Architecture & Content Matrix Architect",
        description: "Transform an unstructured developer feature description or sprawling README into a strict 4-quadrant Diátaxis information architecture.",
        variables: [
          {
            name: "Doc Subject",
            label: "Documentation Subject",
            options: ["Distributed Rate Limiting Gateway", "Webhook Event Delivery & Retry Engine", "Zero-Trust Service-to-Service mTLS Authentication", "Vector Database Embedding Pipeline"],
            default: "Distributed Rate Limiting Gateway"
          },
          {
            name: "Primary Audience",
            label: "Primary Audience",
            options: ["Junior Full-Stack Engineers", "DevOps & Infrastructure Leads", "Third-Party API Integrators", "Enterprise Solution Architects"],
            default: "Junior Full-Stack Engineers"
          },
          {
            name: "Documentation Engine",
            label: "Documentation Engine",
            options: ["Mintlify MDX", "Fumadocs Next.js", "Docusaurus", "Starlight Astro"],
            default: "Mintlify MDX"
          }
        ],
        template: `You are a Principal Documentation Engineer and developer experience (DX) architect who implements the Diátaxis framework across developer-first developer portals.

Analyze this engineering capability:
- Documentation Subject: [Doc Subject]
- Primary Audience: [Primary Audience]
- Target Documentation Engine: [Documentation Engine]

Please architect a complete Diátaxis Documentation Plan:
1. Quadrant 1: Tutorial (Learning-Oriented): A concrete 10-minute guided exercise with a clear beginner goal and zero theoretical tangents.
2. Quadrant 2: How-To Guide (Problem-Oriented): A task-focused recipe solving a realistic production problem (e.g., handling burst traffic or secret rotation).
3. Quadrant 3: Reference (Information-Oriented): Strict technical specifications, configuration keys, default values, error codes, and HTTP return types.
4. Quadrant 4: Explanation (Understanding-Oriented): High-level system architecture, design trade-offs, consistency models, and why this design was chosen.
5. Navigation Sidebar Structure: Exact folder hierarchy and MDX filename slug layout.`,
        expectedOutput: `### Diátaxis Documentation Architecture Plan: Distributed Rate Limiting Gateway

#### 1. Quadrant 1: Tutorial (Learning-Oriented)
- **Title:** *Your First Rate-Limited Route in 5 Minutes*
- **Objective:** Guide a developer through installing the CLI, declaring a token-bucket rate rule, and observing a \`429 Too Many Requests\` response.
- **Rule of Engagement:** Strictly hands-on. No explanation of Redis sliding-window math or distributed consensus. Every command is copy-paste runnable.
- **Milestone:** Developer sends 10 curl requests and receives 5 successful \`200 OK\` and 5 \`429 Too Many Requests\` responses.

#### 2. Quadrant 2: How-To Guide (Problem-Oriented)
- **Title:** *How to Configure Tiered IP & API Key Throttling for Enterprise Tenants*
- **Context:** An operations engineer needs to assign 5,000 req/min limits to Tier-3 customers and 100 req/min limits to Free tier endpoints.
- **Structure:**
  1. Define client identification extractors (header vs. JWT claim).
  2. Map tenant tiers in the Redis rate limit policy config.
  3. Verify with load generator and inspect \`X-RateLimit-Remaining\` response headers.

#### 3. Quadrant 3: Reference (Information-Oriented)
- **Title:** *Rate Limiter Configuration Reference & HTTP Status Codes*
- **Content:**
  - Complete schema tables for \`gateway.config.yaml\`: \`window_ms\` (integer, default: 60000), \`max_tokens\` (integer), \`strategy\` (\`sliding-window\` | \`fixed-window\` | \`token-bucket\`).
  - Standard response headers: \`X-RateLimit-Limit\`, \`X-RateLimit-Remaining\`, \`Retry-After\`.
  - Machine-readable error payloads (\`RATE_LIMIT_EXCEEDED\`, \`REDIS_CONNECTION_TIMEOUT\`).

#### 4. Quadrant 4: Explanation (Understanding-Oriented)
- **Title:** *Understanding Token Bucket vs. Sliding Window Counter Trade-Offs*
- **Content:**
  - Visual diagram illustrating memory footprint vs. boundary burst protection across distributed Redis clusters.
  - Discussion on eventual consistency during cross-region network partitions and why the gateway degrades to local memory failovers.

#### 5. Navigation Sidebar Layout (Mintlify \`mint.json\`)
\`\`\`json
{
  "navigation": [
    {
      "group": "Getting Started",
      "pages": ["tutorials/first-rate-limit"]
    },
    {
      "group": "Operational Guides",
      "pages": ["how-to/tiered-rate-limiting", "how-to/handle-bursts-with-redis"]
    },
    {
      "group": "API & Config Reference",
      "pages": ["reference/config-schema", "reference/headers-and-errors"]
    },
    {
      "group": "Architecture & Concepts",
      "pages": ["explanation/sliding-window-vs-token-bucket", "explanation/distributed-consensus"]
    }
  ]
}
\`\`\``
      },
      conceptGuide: {
        title: "The Diátaxis Framework & Cognitive Developer States",
        overview: "Created by Daniele Procida, Diátaxis is the global gold standard for technical documentation architecture used by projects like Canonical, Astro, Cloudflare, and Docker. It organizes docs along two axes: theoretical vs. practical, and action-oriented vs. reflection-oriented. When technical content fails, it is rarely due to poor grammar; it fails because the author forced a developer looking for an immediate syntax lookup to read 500 words of architectural philosophy. Maintaining strict quadrant boundaries dramatically reduces bounce rates and developer ticket escalations.",
        keyPoints: [
          "**The 4 Quadrants:** Tutorials (learning), How-To Guides (problem-solving), Reference (lookup), and Explanation (understanding).",
          "**Zero Mixed Intent:** Never embed long architectural debates inside a reference table or a rapid quickstart tutorial.",
          "**Intent-Matched Navigation:** Group sidebar links by user intent rather than internal engineering team org charts.",
          "**Actionable Cross-Links:** Link from reference tables to how-to guides and explanations so developers can choose their own depth."
        ]
      },
      learning: {
        resources: [
          {
            title: "Diátaxis Official Documentation Framework",
            url: "https://diataxis.fr",
            type: "Framework"
          },
          {
            title: "Google Developer Documentation Style Guide - Diátaxis IA",
            url: "https://developers.google.com/style/organization",
            type: "Style Guide"
          },
          {
            title: "Canonical / Ubuntu Documentation Architecture Case Study",
            url: "https://ubuntu.com/blog/diataxis-a-new-framework-for-canonical-documentation",
            type: "Case Study"
          }
        ]
      }
    },

    // Node 2
    {
      id: "step-2",
      stepNumber: 2,
      phaseId: "phase-1",
      title: "Modern Docs-as-Code Platforms & MDX Scaffolding",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Scaffold a high-performance, Git-backed MDX documentation site featuring tabbed language snippets, interactive parameter tables, dark-mode styling, and instantaneous Vercel preview deployments.",
      description: "Static PDF manuals and clunky CMS wikis are dead. Modern developer documentation is built as code: authored in Git-backed MDX (Markdown + JSX components), reviewed via pull requests, styled with Tailwind CSS, and compiled into ultra-fast static web apps using Next.js or Astro. Leading platforms like Mintlify, Fumadocs, and Nextra provide out-of-the-box support for multi-language code tabs (cURL, Python, TypeScript, Go), copy-to-clipboard buttons, syntax-highlighted diffs, and interactive callout alerts. By treating documentation with the same CI/CD rigor as application code, teams can preview docs updates on pull request branches and maintain single-source-of-truth accuracy.",
      playbook: {
        setup: "Initialize a new documentation repository using the Mintlify CLI (`npm i -g mintlify`) or Fumadocs Next.js template (`npx create-fumadocs-app`). Configure Git repository integration and global brand tokens in `mint.json` or `source.config.ts`.",
        execute: "Scaffold reusable MDX custom components: `<CodeGroup>` for tabbed SDK code samples, `<ParamField>` for typed request query parameters, and `<CardGroup>` for quickstart entry points. Connect the repository to GitHub for automated branch preview deployments.",
        verify: "Run `mintlify dev` or `npm run dev` locally. Test tab switching across TypeScript, Python, and cURL snippets. Verify dark-mode toggle, responsive mobile navigation, and lightning-fast client-side page transitions."
      },
      tools: [
        {
          name: "Mintlify",
          type: "Freemium",
          url: "https://mintlify.com",
          description: "Developer-first modern documentation platform featuring beautiful MDX components, automated API playground generation, and GitHub sync.",
          bestFor: "Turnkey developer documentation portals & interactive MDX components"
        },
        {
          name: "Fumadocs",
          type: "Free",
          url: "https://fumadocs.vercel.app",
          description: "High-performance Next.js and Tailwind CSS documentation framework supporting full TypeScript type safety and search index generation.",
          bestFor: "Custom Next.js 15 App Router docs engineering & headless MDX setups"
        },
        {
          name: "Nextra",
          type: "Free",
          url: "https://nextra.site",
          description: "Next.js static site generator for documentation with automated sidebar generation, syntax highlighting, and minimal configuration.",
          bestFor: "Lightweight Git-backed Markdown/MDX documentation sites"
        }
      ],
      callouts: {
        mistake: "Hardcoding API URLs and sample keys across dozens of individual MDX files instead of configuring global template variables and environment snippets.",
        proTip: "Use `<CodeGroup>` components on every code snippet to showcase cURL alongside your primary official SDKs (Node.js, Python, Go); it instantly doubles developer comprehension.",
        mistakes: [
          "Using heavy non-technical CMS platforms (e.g., WordPress or Confluence) that prevent engineering teams from reviewing docs changes during code reviews.",
          "Failing to set up branch preview environments, resulting in broken links, unclosed MDX tags, and broken layouts merging straight to production.",
          "Over-customizing bespoke CSS styles that break built-in keyboard navigation accessibility and mobile layout responsiveness."
        ],
        proTips: [
          "Store reusable snippets (such as API authentication headers or rate-limit warnings) as imported partials to avoid duplicate copy across pages.",
          "Enable Mintlify or Fumadocs instant local hot reload to preview MDX typography changes and callouts in real time while typing.",
          "Configure canonical URLs and automated Open Graph social preview cards in your global docs metadata to maximize organic search visibility."
        ]
      },
      promptLab: {
        title: "MDX Component & Documentation Template Generator",
        description: "Generate production-ready MDX documentation files complete with interactive code tabs, parameter tables, and alert callouts.",
        variables: [
          {
            name: "Component Type",
            label: "Component Type",
            options: ["API Endpoint Reference Page", "SDK Authentication Quickstart", "Webhook Payload Verification Guide", "CLI Flag & Configuration Guide"],
            default: "API Endpoint Reference Page"
          },
          {
            name: "Primary Language",
            label: "Primary Language",
            options: ["TypeScript & Python", "cURL, Node.js & Go", "Ruby, PHP & cURL", "Python, Rust & cURL"],
            default: "cURL, Node.js & Go"
          },
          {
            name: "Framework Style",
            label: "Framework Style",
            options: ["Mintlify MDX", "Fumadocs / Radix UI", "Docusaurus Classic", "Starlight Astro"],
            default: "Mintlify MDX"
          }
        ],
        template: `You are a Senior Docs Engineer specializing in Git-backed MDX documentation portals.

Create a complete, production-grade MDX page for:
- Page Purpose: [Component Type]
- Code Languages: [Primary Language]
- Target Framework: [Framework Style]

Requirements:
1. Frontmatter: title, description, api method/path or category, and og:image metadata.
2. Lead Section: A clear, concise value statement and endpoint badges.
3. Interactive Parameter Section: Use <ParamField> or strict markdown tables detailing name, type (string, integer, boolean), requirement badge (required/optional), and description.
4. Multi-Language Code Group: Include tabbed code examples (<CodeGroup>) showing realistic, working authentication headers and payload formatting.
5. Response Example: Syntax-highlighted JSON response with realistic field values and descriptive error responses (200, 400, 401, 429).`,
        expectedOutput: `---
title: "Create Payment Intent"
api: "POST /v1/payment_intents"
description: "Initialize a secure multi-currency payment session and return a client secret for web and mobile checkout."
---

import { CodeGroup, ParamField, ResponseField } from '@mintlify/components';

# Create Payment Intent

Creates a new PaymentIntent object to track and orchestrate customer checkout sessions, automated tax calculations, and 3D Secure authentication.

## Request Body

<ParamField body="amount" type="integer" required>
  The amount to collect, denominated in the smallest currency unit (e.g., \`2000\` for $20.00 USD).
</ParamField>

<ParamField body="currency" type="string" required>
  Three-letter [ISO 4217 currency code](https://en.wikipedia.org/wiki/ISO_4217). Must be lowercase (e.g., \`usd\`, \`eur\`, \`gbp\`).
</ParamField>

<ParamField body="customer_id" type="string">
  Optional ID of an existing Customer object to attach to this payment session.
</ParamField>

<ParamField body="metadata" type="object">
  Key-value pairs for storing arbitrary internal reconciliation IDs. Maximum 50 keys, 500 characters per value.
</ParamField>

---

## Code Examples

<CodeGroup>
\`\`\`bash cURL
curl -X POST https://api.acmepay.com/v1/payment_intents \\
  -H "Authorization: Bearer sk_live_9a8b7c6d5e4f3a2b" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 4900,
    "currency": "usd",
    "metadata": {
      "order_id": "ord_8829104"
    }
  }'
\`\`\`

\`\`\`typescript Node.js
import { AcmePayClient } from '@acmepay/sdk';

const client = new AcmePayClient({
  apiKey: process.env.ACMEPAY_API_KEY!,
});

const intent = await client.paymentIntents.create({
  amount: 4900,
  currency: 'usd',
  metadata: {
    order_id: 'ord_8829104',
  },
});

console.log('Payment Intent Client Secret:', intent.client_secret);
\`\`\`

\`\`\`go Go
package main

import (
	"context"
	"fmt"
	"os"

	"github.com/acmepay/acmepay-go"
)

func main() {
	client := acmepay.NewClient(os.Getenv("ACMEPAY_API_KEY"))

	intent, err := client.PaymentIntents.Create(context.Background(), &acmepay.PaymentIntentParams{
		Amount:   4900,
		Currency: "usd",
		Metadata: map[string]string{"order_id": "ord_8829104"},
	})
	if err != nil {
		panic(err)
	}

	fmt.Println("Created intent:", intent.ID)
}
\`\`\`
</CodeGroup>

---

## Response

<ResponseField name="id" type="string">
  Unique identifier for the payment intent (prefixed with \`pi_\`).
</ResponseField>

<ResponseField name="client_secret" type="string">
  The client secret used by front-end SDKs to finalize the payment with 3D Secure.
</ResponseField>

\`\`\`json 200 OK
{
  "id": "pi_3MtwBwLkdIwHu7ix28a3tqPa",
  "object": "payment_intent",
  "amount": 4900,
  "currency": "usd",
  "status": "requires_payment_method",
  "client_secret": "pi_3MtwBwLkdIwHu7ix28a3tqPa_secret_994a3bc18b",
  "created_at": 1729670400
}
\`\`\``
      },
      conceptGuide: {
        title: "Docs-as-Code & Modern React/MDX Developer Portals",
        overview: "Docs-as-Code is the software engineering methodology applied to technical documentation. By storing content in plain-text MDX files directly alongside the application source code or in a dedicated Git repository, documentation teams adopt standard developer workflows: version control, branching, peer code review, continuous integration testing, and automated preview deployments. Modern platforms like Mintlify and Fumadocs compile MDX into blazing-fast React applications with client-side routing, automated metadata tags, and zero-latency search indexes.",
        keyPoints: [
          "**Version Control Parity:** Docs live in Git repositories alongside code; updates are reviewed via standard GitHub pull requests.",
          "**Interactive Components:** MDX blends standard Markdown prose with interactive JSX elements like tabbed code blocks and live sliders.",
          "**Branch Preview Environments:** Every PR triggers a temporary preview URL so non-technical stakeholders can review formatting before deployment.",
          "**Automated CI Gates:** Broken links, invalid frontmatter, and unclosed JSX tags fail the build before ever hitting production."
        ]
      },
      learning: {
        resources: [
          {
            title: "Mintlify Official Quickstart & MDX Component Reference",
            url: "https://mintlify.com/docs",
            type: "Official Docs"
          },
          {
            title: "Fumadocs - Next.js Documentation Engine",
            url: "https://fumadocs.vercel.app/docs",
            type: "Framework"
          },
          {
            title: "Nextra Documentation & Blog Framework",
            url: "https://nextra.site",
            type: "Framework"
          }
        ]
      }
    },

    // Node 3
    {
      id: "step-3",
      stepNumber: 3,
      phaseId: "phase-1",
      title: "Codebase Ingestion & Automated Architecture Extraction",
      timeEstimate: "2.5 hrs",
      difficulty: "Advanced",
      summary: "Pack entire git repositories into LLM context windows using Repomix to reverse-engineer undocumented exported functions, TypeScript interfaces, and internal architecture flows into clean technical outlines.",
      description: "One of the most intimidating challenges in technical writing is inheriting a massive, undocumented legacy codebase with zero existing documentation. Instead of manually reading thousands of lines of source code or interrogating overworked senior engineers, docs engineers use code-packing tools like Repomix to bundle an entire repository's file tree, exported types, function signatures, and comments into a unified, token-efficient XML/Markdown prompt. Frontier reasoning models like Claude 3.7 Sonnet analyze the Abstract Syntax Tree (AST), trace dependencies, and extract complete documentation outlines detailing system boundaries, core entities, and public API contracts.",
      playbook: {
        setup: "Install Repomix globally (`npm install -g repomix`). Configure `repomix.config.json` with `.ignore` rules to exclude `node_modules`, test mocks, lockfiles, minified binaries, and build artifacts.",
        execute: "Execute `repomix --style xml --output repomix-docs-dump.xml`. Pass the packed codebase to Claude 3.7 Sonnet with an architectural extraction prompt that identifies public methods, exported types, and side effects.",
        verify: "Review the extracted architecture map against the source code. Confirm every public interface, route handler, and error enum is documented without AI hallucinations or omitted parameter types."
      },
      tools: [
        {
          name: "Cursor",
          type: "Freemium",
          url: "https://www.cursor.com",
          description: "AI-native code editor with deep semantic codebase indexing that allows docs engineers to query implementation details across hundreds of files.",
          bestFor: "Interactive code exploration, AST inspection & docs generation"
        },
        {
          name: "Repomix",
          type: "Free",
          url: "https://repomix.com",
          description: "Powerful CLI tool that packages entire Git codebases into single, token-optimized context files ready for LLM consumption.",
          bestFor: "Packing multi-file repositories into token-efficient LLM contexts"
        },
        {
          name: "Claude 3.7 Sonnet",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Frontier reasoning model with a 200k token context window capable of ingesting packed codebases and synthesizing technical architectures.",
          bestFor: "Deep architectural synthesis, interface extraction & contract mapping"
        }
      ],
      callouts: {
        mistake: "Feeding minified bundles, lockfiles, or test snapshots into the LLM context, which wastes hundreds of thousands of tokens and causes hallucinated logic.",
        proTip: "Use `repomix --include 'src/**/*.ts,packages/**/index.ts'` to restrict ingestion strictly to public exported API surfaces and interface definitions.",
        mistakes: [
          "Relying entirely on LLM output without compiling code examples to verify that extracted TypeScript types and method signatures match reality.",
          "Documenting internal private helper functions that should remain internal implementation details rather than public API contracts.",
          "Overlooking asynchronous side effects (e.g., background message queue dispatching or database mutations) in function summaries."
        ],
        proTips: [
          "Instruct the LLM to highlight 'Implicit Conventions' (e.g., undocumented environment variable requirements or unspoken rate limits).",
          "Generate a TypeScript definition file (`types.d.ts`) audit table that maps every exported interface to its corresponding documentation page.",
          "Pair Cursor's `@Codebase` search with Repomix dumps to spot where internal exceptions are caught and transformed into HTTP error responses."
        ]
      },
      promptLab: {
        title: "AST-Aware Codebase Documentation & Interface Extractor",
        description: "Analyze a packed repository dump and extract a rigorous API surface inventory and architectural summary.",
        variables: [
          {
            name: "Repository Type",
            label: "Repository Type",
            options: ["TypeScript/Node.js Microservices SDK", "Python FastAPI Async Data Pipeline", "Go High-Throughput gRPC Service", "Rust WebAssembly Cryptographic Library"],
            default: "TypeScript/Node.js Microservices SDK"
          },
          {
            name: "Extraction Target",
            label: "Extraction Target",
            options: ["Public Client SDK Methods & Types", "REST API Route Handlers & Middlewares", "Database Models & Event Schemas", "CLI Commands, Flags & Options"],
            default: "Public Client SDK Methods & Types"
          },
          {
            name: "Output Granularity",
            label: "Output Granularity",
            options: ["Executive Architectural Spec", "Exhaustive Method-by-Method Reference", "Step-by-Step Developer Migration Map"],
            default: "Exhaustive Method-by-Method Reference"
          }
        ],
        template: `You are a Principal Software Architect and Lead Technical Writer auditing an engineering codebase.

I am providing a packaged repository context representing a [Repository Type].
Your objective is to extract an [Output Granularity] focusing specifically on [Extraction Target].

Perform this systematic audit:
1. Public Surface Inventory: Identify all exported classes, functions, interfaces, and enums that an external developer can invoke.
2. Architecture & Data Flow: Describe how a user request traverses through authentication middlewares, validation schemas, and core handlers.
3. Hidden Gotchas & Assumptions: Identify undocumented environment variables, implicit defaults, thread-safety assumptions, or uncaught exception paths.
4. Method Reference Matrix:
   - Method Signature & Return Type
   - Required vs. Optional Arguments
   - Emitted Events & Side Effects
   - Thrown Errors & HTTP Status Equivalence
5. Concrete Code Example: A working, end-to-end code snippet demonstrating the primary happy path.`,
        expectedOutput: `### Public Surface Audit & Documentation Extract: TypeScript SDK

#### 1. Public Surface Inventory
- **Core Exported Client:** \`AcmeClient\` (\`src/client.ts\`)
- **Sub-Resource Handlers:**
  - \`client.webhooks\` (\`src/resources/webhooks.ts\`)
  - \`client.tenants\` (\`src/resources/tenants.ts\`)
  - \`client.metrics\` (\`src/resources/metrics.ts\`)
- **Exported Type Definitions:**
  - \`ClientConfig\`, \`WebhookEndpoint\`, \`DeliveryAttempt\`, \`SignatureVerificationResult\`
- **Exported Enums:**
  - \`WebhookEventStatus\` (\`ACTIVE\`, \`PAUSED\`, \`FAILED_PERMANENT\`)

#### 2. Architecture & Request Pipeline
\`\`\`
User Application -> AcmeClient.webhooks.create()
                     |-> AuthInterceptor (Injects Bearer Token & SHA-256 Nonce)
                     |-> ZodPayloadValidator (Validates endpoint URL & TLS requirements)
                     |-> AxiosHTTPTransport (Handles 3x Exponential Backoff with Jitter)
                     |-> Edge Gateway (https://api.acme.com/v1/webhooks)
\`\`\`

#### 3. Undocumented Gotchas & Implicit Behaviors
1. **Implicit Timeout:** Requests default to a strict \`8000ms\` timeout unless overridden via \`ClientConfig.timeoutMs\`.
2. **Missing Env Var Fallback:** If \`apiKey\` is omitted in constructor, the client quietly falls back to \`process.env.ACME_API_KEY\`; if missing, throws an untyped \`ConfigurationError\`.
3. **Payload Buffering:** \`client.webhooks.verifySignature()\` expects raw \`Buffer\` payloads, NOT pre-parsed JSON objects, or HMAC checks will fail silently.

#### 4. Method Reference Matrix

| Method | Parameters | Returns | Thrown Errors |
| :--- | :--- | :--- | :--- |
| \`webhooks.create()\` | \`params: CreateWebhookParams, opts?: RequestOptions\` | \`Promise<WebhookEndpoint>\` | \`ValidationError (400)\`, \`DuplicateUrlError (409)\` |
| \`webhooks.verifySignature()\` | \`payload: Buffer, signature: string, secret: string\` | \`boolean\` | \`InvalidSignatureError (401)\`, \`TimestampExpiredError\` |
| \`webhooks.listDeliveries()\` | \`endpointId: string, pagination?: CursorParams\` | \`Promise<PaginatedList<DeliveryAttempt>>\` | \`ResourceNotFoundError (404)\` |

#### 5. Complete Canonical Implementation Example
\`\`\`typescript
import { AcmeClient, WebhookEventStatus } from '@acme/sdk';

const acme = new AcmeClient({
  apiKey: process.env.ACME_API_KEY!,
  timeoutMs: 10000,
  maxRetries: 3,
});

// Create and register a webhook endpoint
const endpoint = await acme.webhooks.create({
  url: 'https://api.myapp.com/webhooks/acme-receiver',
  events: ['payment.succeeded', 'invoice.paid'],
  secret: process.env.WEBHOOK_SIGNING_SECRET!,
});

console.log(\`Registered Webhook ID: \${endpoint.id} (Status: \${endpoint.status})\`);
\`\`\``
      },
      conceptGuide: {
        title: "Automated Code Ingestion & LLM-Driven Architecture Mapping",
        overview: "Writing accurate developer documentation requires intimate familiarity with the code's real behavior, not just what was originally planned in outdated specs. Modern docs engineers treat the codebase as the ultimate source of truth. Using AST-aware context packers like Repomix, engineers strip away non-essential binaries and unit tests to feed raw source code into frontier LLMs. This unlocks the ability to reverse-engineer undocumented error codes, implicit dependencies, and edge cases with forensic precision, cutting documentation time by 75%.",
        keyPoints: [
          "**Source-of-Truth Primacy:** Code never lies; outdated architecture wikis and Jira tickets do.",
          "**Token-Efficient Packing:** Tools like Repomix compress source trees into XML tags while filtering lockfiles and test mocks.",
          "**Implicit Edge Case Discovery:** LLMs excel at tracing unhandled exception branches, hidden environment variables, and timeout limits.",
          "**Human Verification Loop:** Extracted method signatures and types must always be validated against compiled TypeScript declarations."
        ]
      },
      learning: {
        resources: [
          {
            title: "Repomix Official Documentation & CLI Guide",
            url: "https://repomix.com",
            type: "Official Docs"
          },
          {
            title: "Cursor AI Docs - Codebase Indexing & Semantic Search",
            url: "https://docs.cursor.com/context/@codebase",
            type: "Official Docs"
          },
          {
            title: "Anthropic Claude Context Window & Large Codebase Analysis",
            url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/long-context-tips",
            type: "Case Study"
          }
        ]
      }
    },

    // Node 4
    {
      id: "step-4",
      stepNumber: 4,
      phaseId: "phase-2",
      title: "Zero-to-One Quickstarts & Runnable Code Sandboxes",
      timeEstimate: "2 hrs",
      difficulty: "Beginner",
      summary: "Craft frictionless 5-minute Quickstart guides with copy-pasteable minimal reproducible examples and embedded runnable browser sandboxes that eliminate local environment setup hurdles.",
      description: "The single most important metric in developer experience is 'Time to First Hello World' (TTFHW)—the elapsed time between a developer landing on your documentation and seeing their first successful API response or rendered component. Quickstarts must be ruthless about eliminating friction: no prerequisite local database installations, no 12-step OAuth registration flows, and no broken dependencies. By embedding live, runnable WebContainer browser sandboxes via StackBlitz or CodeSandbox directly into the MDX documentation, developers can run and modify working code in their browser before installing a single local package.",
      playbook: {
        setup: "Identify the absolute minimal working code example for your API or SDK (under 25 lines of code). Create a public GitHub template repository containing the minimal working setup.",
        execute: "Embed a live StackBlitz or CodeSandbox WebContainer directly into the Quickstart MDX page using an `<iframe>` or official SDK embed component. Provide a mock sandbox API key that works immediately.",
        verify: "Conduct a cold test in an incognito window with no local dev server running. Verify that clicking 'Run Code' executes the example, logs a successful output, and takes under 3 minutes from start to finish."
      },
      tools: [
        {
          name: "StackBlitz",
          type: "Freemium",
          url: "https://stackblitz.com",
          description: "Instant in-browser WebContainer development environment that boots full Node.js runtimes inside browser tabs with zero install.",
          bestFor: "Runnable browser-based Quickstart sandboxes & zero-install demos"
        },
        {
          name: "CodeSandbox",
          type: "Freemium",
          url: "https://codesandbox.io",
          description: "Cloud development platform for creating collaborative sandboxes, interactive embed widgets, and live component previews.",
          bestFor: "Live interactive component sandboxes & embeddable dev containers"
        },
        {
          name: "Claude 3.7 Sonnet",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Frontier reasoning model used to strip complex enterprise boilerplates down to hyper-minimal 20-line copy-paste quickstart scripts.",
          bestFor: "Pruning boilerplate code & friction-logging onboarding steps"
        }
      ],
      callouts: {
        mistake: "Requiring developers to register a credit card or wait for manual email verification before issuing an API key for a basic quickstart tutorial.",
        proTip: "Provide a pre-authenticated ephemeral 'Demo Key' directly inside the quickstart code blocks so developers can test real API calls with zero friction.",
        mistakes: [
          "Assuming developers have specific CLI tools (e.g., Docker, pnpm, Python 3.12) pre-installed without providing cross-platform fallback commands.",
          "Including complex production best practices (like Redis caching or multi-region failover) inside a beginner's 5-minute quickstart guide.",
          "Failing to pin exact package versions in quickstart dependencies, leading to broken demos when upstream packages release breaking updates."
        ],
        proTips: [
          "Use a 1-click 'Open in StackBlitz' button at the very top of your Quickstart page so developers can skip reading and jump straight into code.",
          "Include an exact screenshot or terminal recording of the expected terminal output so developers know instantly if their run was successful.",
          "Instrument the Quickstart page with telemetry to measure the percentage of readers who click 'Copy Code' or run the embedded sandbox."
        ]
      },
      promptLab: {
        title: "5-Minute Developer Quickstart & Sandbox Boilerplate Architect",
        description: "Transform an intricate SDK or backend service into a frictionless 5-minute Quickstart guide with embedded runnable sandbox links.",
        variables: [
          {
            name: "SDK / Service",
            label: "SDK / Service",
            options: ["AI Document OCR & Extraction API", "Real-Time WebSocket PubSub Broker", "Headless Multi-Tenant Auth Service", "Serverless Vector Search Database"],
            default: "AI Document OCR & Extraction API"
          },
          {
            name: "Primary Runtime",
            label: "Primary Runtime",
            options: ["TypeScript / Node.js", "Python 3 / Asyncio", "Go (Golang)", "cURL & Shell"],
            default: "TypeScript / Node.js"
          },
          {
            name: "Sandbox Platform",
            label: "Sandbox Platform",
            options: ["StackBlitz WebContainer", "CodeSandbox Embed", "Replit Workspace", "GitHub Codespaces"],
            default: "StackBlitz WebContainer"
          }
        ],
        template: `You are an elite Developer Experience (DX) Engineer designing a world-class Quickstart guide inspired by Stripe, Resend, and Supabase.

Design a 5-Minute Quickstart guide for:
- Technology: [SDK / Service]
- Target Runtime: [Primary Runtime]
- Sandbox Embed: [Sandbox Platform]

Structure Requirements:
1. Headline & 1-Sentence Value Hook: Exactly what the developer will achieve in 5 minutes.
2. Interactive Sandbox Callout: Direct 1-click runnable link.
3. Step 1: Install (Single copy-paste CLI command with npm, yarn, pnpm tabs).
4. Step 2: Configure (Minimal environment file with pre-populated sandbox credentials).
5. Step 3: Run (Minimal runnable code snippet under 25 lines of code, strictly typed).
6. Expected Terminal Output: Realistic terminal ASCII log showing success response.
7. What's Next Card Group: 3 logical paths (Production Auth, Webhook Handling, Full Reference).`,
        expectedOutput: `---
title: "Quickstart"
description: "Extract structured data from your first invoice PDF in under 5 minutes using the AI Document OCR API."
---

import { CodeGroup, Card, CardGroup } from '@mintlify/components';

# Quickstart

Extract structured JSON tables and invoice line items from PDF files in under 5 minutes.

<Tip>
  **Want to test without installing anything locally?**  
  [Open the Live Interactive Sandbox in StackBlitz](https://stackblitz.com/github/acme-ocr/quickstart-demo) to run this code directly in your browser.
</Tip>

---

## 1. Install the SDK

Install the official client package using your preferred package manager:

<CodeGroup>
\`\`\`bash npm
npm install @acme/ocr dotenv
\`\`\`

\`\`\`bash pnpm
pnpm add @acme/ocr dotenv
\`\`\`

\`\`\`bash yarn
yarn add @acme/ocr dotenv
\`\`\`
</CodeGroup>

---

## 2. Set Up Your API Key

Create a \`.env\` file in your project root. For this quickstart, you can use our ephemeral sandbox key:

\`\`\`bash .env
ACME_OCR_KEY=sb_live_demo_9924810a7b4c
\`\`\`

---

## 3. Run Your First Extraction

Create an \`index.ts\` file and paste the following code:

\`\`\`typescript index.ts
import { AcmeOCR } from '@acme/ocr';
import 'dotenv/config';

const ocr = new AcmeOCR({
  apiKey: process.env.ACME_OCR_KEY,
});

async function main() {
  console.log('Sending invoice document to Acme OCR engine...');
  
  const result = await ocr.extract({
    documentUrl: 'https://assets.acme.com/demo/sample-invoice.pdf',
    schema: {
      invoiceNumber: 'string',
      vendorName: 'string',
      totalAmount: 'number',
      lineItems: ['array', { description: 'string', price: 'number' }]
    }
  });

  console.log('Extraction Completed Successfully:');
  console.dir(result.data, { depth: null });
}

main().catch(console.error);
\`\`\`

Run the script in your terminal:

\`\`\`bash
npx tsx index.ts
\`\`\`

---

## 4. Expected Output

You should see the following structured JSON output in your terminal:

\`\`\`bash
Sending invoice document to Acme OCR engine...
Extraction Completed Successfully:
{
  invoiceNumber: 'INV-2026-8819',
  vendorName: 'Acme Cloud Infrastructure Inc.',
  totalAmount: 1420.50,
  lineItems: [
    { description: 'Compute Cluster (4x c6g.xlarge)', price: 820.00 },
    { description: 'Managed NVMe Storage (2TB)', price: 600.50 }
  ]
}
\`\`\`

---

## Next Steps

Now that you have executed your first successful extraction, explore these guides:

<CardGroup cols={3}>
  <Card title="Production Authentication" icon="key" href="/how-to/api-keys">
    Issue scoped production keys and configure IP allowlists.
  </Card>
  <Card title="Async Webhook Delivery" icon="webhook" href="/how-to/webhooks">
    Process 500-page enterprise documents asynchronously via webhooks.
  </Card>
  <Card title="Full Schema Reference" icon="code" href="/reference/schemas">
    Explore advanced regex validations and custom prompt models.
  </Card>
</CardGroup>`
      },
      conceptGuide: {
        title: "The Time-to-First-Hello-World (TTFHW) Benchmark",
        overview: "In software engineering, developer momentum is fragile. When an engineer encounters a broken dependency, an ambiguous error message, or an onerous signup form during onboarding, the probability of them abandoning the tool increases exponentially with every passing minute. World-class documentation treats TTFHW as an engineering performance metric. By providing zero-friction copy-paste code snippets, ephemeral sandbox credentials, and embedded browser runtimes, documentation engineering turns casual evaluators into activated, paying developers in under 300 seconds.",
        keyPoints: [
          "**The 5-Minute Rule:** If a developer cannot achieve a verifiable success within 5 minutes of landing on your docs, your onboarding flow is broken.",
          "**Zero-Install Sandboxes:** Embedded WebContainers (StackBlitz) eliminate local OS compatibility issues (Windows vs. macOS vs. Linux).",
          "**Ephemeral Sandbox Keys:** Allow immediate read-only API calls without forcing developers through credit card or email verification gates.",
          "**Copy-to-Clipboard Ubiquity:** Every single terminal command and code block must have a dedicated, single-click copy button."
        ]
      },
      learning: {
        resources: [
          {
            title: "StackBlitz WebContainers Documentation & Embedding Guide",
            url: "https://developer.stackblitz.com/platform/api/javascript-sdk",
            type: "Official Docs"
          },
          {
            title: "Stripe Developer Experience: Designing Frictionless Quickstarts",
            url: "https://stripe.com/docs/development",
            type: "Case Study"
          },
          {
            title: "Google Developer Style Guide - Writing Effective Tutorials",
            url: "https://developers.google.com/style/tutorials",
            type: "Style Guide"
          }
        ]
      }
    },

    // Node 5
    {
      id: "step-5",
      stepNumber: 5,
      phaseId: "phase-2",
      title: "OpenAPI / Swagger Specs & Interactive API Playgrounds",
      timeEstimate: "2.5 hrs",
      difficulty: "Intermediate",
      summary: "Author and validate OpenAPI 3.1 specifications with complete request schemas, typed headers, and status codes, rendering interactive Scalar playgrounds where developers can execute live requests.",
      description: "An API reference without an interactive sandbox is an obstacle course. Contract-first documentation relies on the OpenAPI 3.1 specification—the industry-standard JSON/YAML schema format for declaring endpoints, request bodies, authentication scopes, query parameters, and polymorphic response models. Using modern OpenAPI renderers like Scalar and Redocly, teams can transform raw OpenAPI specs into interactive, three-column API reference consoles featuring live 'Try It' request runners, automated SDK code generation in 10+ languages, and automatic schema validation.",
      playbook: {
        setup: "Generate an initial OpenAPI 3.1 YAML specification from backend route annotations (e.g., using FastAPI, tRPC, or Zod-to-OpenAPI). Install the Scalar CLI (`npx @scalar/cli`) or Redocly CLI (`npm i -g @redocly/cli`).",
        execute: "Audit the specification with Redocly linter (`redocly lint openapi.yaml`) against strict API design standards. Configure interactive client credentials, security schemes (`bearerAuth`), and response examples for every status code (200, 400, 401, 404, 429).",
        verify: "Embed the OpenAPI specification into your docs portal via `@scalar/api-reference` or Mintlify OpenAPI integration. Test executing a live API call directly from the browser console and inspect the rendered JSON response."
      },
      tools: [
        {
          name: "Scalar",
          type: "Free",
          url: "https://scalar.com",
          description: "Modern, open-source OpenAPI reference generator and interactive API playground with built-in request testing and client code generation.",
          bestFor: "Interactive 'Try It' API playgrounds & modern OpenAPI 3.1 visualization"
        },
        {
          name: "Redocly",
          type: "Freemium",
          url: "https://redocly.com",
          description: "Enterprise OpenAPI linting, styling, and documentation suite that enforces strict REST API standards across engineering teams.",
          bestFor: "OpenAPI schema linting, multi-file bundling & contract validation"
        },
        {
          name: "Postman",
          type: "Freemium",
          url: "https://www.postman.com",
          description: "Industry-standard API development and testing platform for inspecting endpoints, generating collections, and verifying payloads.",
          bestFor: "API request debugging, collection exports & contract testing"
        }
      ],
      callouts: {
        mistake: "Writing manual Markdown tables for API parameters instead of publishing a machine-readable OpenAPI spec, guaranteeing documentation drifts from backend reality.",
        proTip: "Use `discriminator` and polymorphic `oneOf` objects in OpenAPI 3.1 to accurately represent event payloads (like Webhook events) without creating separate redundant endpoints.",
        mistakes: [
          "Documenting only \`200 OK\` success payloads while omitting structured error responses, leaving developers stranded when hitting validation errors.",
          "Failing to provide realistic example values for parameters (e.g., leaving a parameter example as \`string\` instead of \`usr_8829104\`).",
          "Hardcoding production server URLs without providing a mock server or sandbox environment URL in the \`servers\` block."
        ],
        proTips: [
          "Integrate Redocly CLI into your CI pipeline to block merges whenever an OpenAPI change introduces schema syntax errors or missing descriptions.",
          "Use the \`x-codeSamples\` extension in OpenAPI to supply hand-tuned, idiomatic SDK examples alongside auto-generated snippets.",
          "Enable Scalar's client generator so developers can export pre-configured SDK snippets into cURL, JavaScript, Python, Go, and Ruby with one click."
        ]
      },
      promptLab: {
        title: "OpenAPI 3.1 Spec & Interactive Request Playground Builder",
        description: "Generate a fully validated OpenAPI 3.1 YAML specification with typed schemas, request parameters, and status responses.",
        variables: [
          {
            name: "API Action",
            label: "API Action",
            options: ["Create Ephemeral Compute Sandbox", "Process Cross-Border Multi-Currency Payout", "Generate Streaming AI Audio Voiceover", "Revoke OAuth2 Access Token & Refresh Grants"],
            default: "Create Ephemeral Compute Sandbox"
          },
          {
            name: "Auth Scheme",
            label: "Auth Scheme",
            options: ["Bearer JWT Token", "API Key in Header (X-API-Key)", "OAuth2 Authorization Code with PKCE", "Mutual TLS Client Certificate"],
            default: "API Key in Header (X-API-Key)"
          },
          {
            name: "Documentation Renderer",
            label: "Documentation Renderer",
            options: ["Scalar API Reference", "Mintlify Native OpenAPI", "Redocly API Docs", "Stoplight Elements"],
            default: "Scalar API Reference"
          }
        ],
        template: `You are a Principal API Architect and OpenAPI 3.1 Specification Specialist.

Author a complete, syntactically valid OpenAPI 3.1 YAML document for:
- Operation: [API Action]
- Authentication: [Auth Scheme]
- Target Renderer: [Documentation Renderer]

Requirements:
1. Complete \`openapi: 3.1.0\` declaration with \`info\`, \`servers\` (production and sandbox), and \`security\`.
2. Detailed Operation Object: \`summary\`, \`description\`, \`operationId\`, \`tags\`.
3. Request Body: Strict JSON Schema with property types, descriptions, constraints (minLength, minimum, enum), and realistic \`examples\`.
4. Responses: Complete \`201 Created\` response with typed schema, plus realistic \`400 Bad Request\`, \`401 Unauthorized\`, and \`429 Rate Limited\` error schemas.
5. \`components.securitySchemes\`: Accurate declaration of [Auth Scheme].`,
        expectedOutput: `openapi: 3.1.0
info:
  title: Cloud Sandbox Orchestration API
  version: 1.4.0
  description: Programmatically provision, manage, and execute isolated ephemeral Linux containers with custom CPU and memory quotas.
servers:
  - url: https://api.cloudbox.dev/v1
    description: Production Cluster
  - url: https://sandbox-api.cloudbox.dev/v1
    description: Ephemeral Test Environment
security:
  - ApiKeyAuth: []

paths:
  /sandboxes:
    post:
      summary: Create Ephemeral Compute Sandbox
      operationId: createComputeSandbox
      description: Provisions a cold-boot microVM container running Alpine Linux or Ubuntu with pre-configured memory and environment secrets.
      tags:
        - Sandboxes
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - image
                - memoryMb
                - ttlSeconds
              properties:
                image:
                  type: string
                  enum: [alpine-3.20, ubuntu-24.04-lts, nodejs-22-slim, python-3.12-bookworm]
                  description: Container base image to initialize.
                  example: nodejs-22-slim
                memoryMb:
                  type: integer
                  minimum: 512
                  maximum: 8192
                  description: Allocated RAM in megabytes.
                  example: 2048
                ttlSeconds:
                  type: integer
                  minimum: 60
                  maximum: 86400
                  default: 3600
                  description: Automatic teardown timeout in seconds.
                  example: 1800
                env:
                  type: object
                  additionalProperties:
                    type: string
                  description: Environment variables injected at boot.
                  example:
                    NODE_ENV: production
                    PORT: "8080"
      responses:
        '201':
          description: Sandbox provisioned and listening for commands.
          content:
            application/json:
              schema:
                type: object
                required:
                  - id
                  - status
                  - hostUrl
                  - expiresAt
                properties:
                  id:
                    type: string
                    format: uuid
                    example: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
                  status:
                    type: string
                    enum: [booting, ready, suspended, terminated]
                    example: ready
                  hostUrl:
                    type: string
                    format: uri
                    example: https://sbx-9b1deb4d.cloudbox.dev
                  expiresAt:
                    type: string
                    format: date-time
                    example: '2026-10-23T09:30:00Z'
        '400':
          description: Schema validation failed.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ApiError'
        '401':
          description: Missing or invalid API key.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ApiError'
        '429':
          description: Concurrency limit reached for organization.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ApiError'

components:
  securitySchemes:
    ApiKeyAuth:
      type: apiKey
      in: header
      name: X-API-Key
      description: Issue personal or service account keys from the Cloudbox Dashboard.

  schemas:
    ApiError:
      type: object
      required:
        - code
        - message
      properties:
        code:
          type: string
          example: INVALID_RESOURCE_QUOTA
        message:
          type: string
          example: Requested memoryMb (16384) exceeds organization plan limit (8192).`
      },
      conceptGuide: {
        title: "Contract-First API Documentation & Spec-Driven Developer Portals",
        overview: "In modern API engineering, documentation is not an afterthought written after code ships; it is the contract that binds frontends, backends, and external partners. The OpenAPI Specification (OAS 3.1) serves as this single source of truth. By defining models, status codes, and headers in OpenAPI, teams automate documentation rendering (Scalar), client SDK generation (OpenAPI Generator), automated mock servers (Prism), and contract testing (Postman). Maintaining a strict spec guarantees that documentation and backend implementations never fall out of sync.",
        keyPoints: [
          "**Single Source of Truth:** OpenAPI specs drive documentation, client SDK generation, and contract regression tests.",
          "**Live 'Try It' Execution:** Interactive renderers like Scalar let developers test endpoints against live sandboxes right from the browser.",
          "**Realistic Parameter Examples:** Providing realistic parameter values allows automated client generators to produce working code.",
          "**Complete Error Schemas:** Documenting 4xx and 5xx payloads saves developers hours of debugging mysterious validation failures."
        ]
      },
      learning: {
        resources: [
          {
            title: "Scalar API Reference Documentation & Integration Guide",
            url: "https://scalar.com",
            type: "Official Docs"
          },
          {
            title: "Redocly OpenAPI Linting & Quality Guidelines",
            url: "https://redocly.com/docs",
            type: "Official Docs"
          },
          {
            title: "OpenAPI 3.1.0 Official Specification Standard",
            url: "https://spec.openapis.org/oas/v3.1.0",
            type: "Specification"
          }
        ]
      }
    },

    // Node 6
    {
      id: "step-6",
      stepNumber: 6,
      phaseId: "phase-2",
      title: "Automated Architecture Diagrams & Sequence Flows",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Transform complex asynchronous webhooks, OAuth2 handshakes, and distributed microservice message flows into version-controlled, text-rendered Mermaid.js diagrams directly inside MDX docs.",
      description: "A block of 500 words explaining an asynchronous authentication handshake or webhook retry sequence causes cognitive fatigue. Modern documentation engineering relies on text-based, version-controlled diagramming using Mermaid.js and Excalidraw. Because Mermaid diagrams are rendered from plain-text markdown code blocks, they can be diffed, reviewed in GitHub pull requests, and updated in seconds without needing proprietary image exports from Illustrator or Photoshop. Diagrams clarify temporal sequence flows, state machine transitions, and microservice boundaries at a single glance.",
      playbook: {
        setup: "Enable native Mermaid support in your documentation engine (e.g., Mintlify natively supports ````mermaid code blocks; Fumadocs and Docusaurus support Mermaid plugins).",
        execute: "Draft sequence diagrams for multi-party interactions (User Browser -> Merchant App -> Auth Server -> Webhook Listener). Layer actor aliases, descriptive notes, and conditional alternative flows (`alt / else`).",
        verify: "Build the documentation site and test Mermaid rendering in both light and dark themes. Ensure font sizes, connecting arrows, and text labels are crisp and readable on mobile screens."
      },
      tools: [
        {
          name: "Mermaid.js",
          type: "Free",
          url: "https://mermaid.js.org",
          description: "Markdown-inspired text-to-diagramming language that renders sequence diagrams, flowcharts, and state machines natively in web browsers.",
          bestFor: "Version-controlled text diagrams, sequence flows & state machines"
        },
        {
          name: "Excalidraw",
          type: "Freemium",
          url: "https://excalidraw.com",
          description: "Virtual collaborative whiteboard for sketching hand-drawn style architecture diagrams, system topologies, and conceptual illustrations.",
          bestFor: "Hand-drawn architectural sketches & conceptual system overviews"
        },
        {
          name: "Claude 3.7 Sonnet",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Frontier reasoning model used to synthesize Mermaid.js code directly from raw application source code or architectural PRDs.",
          bestFor: "Translating code logic into error-free Mermaid sequence syntax"
        }
      ],
      callouts: {
        mistake: "Exporting raster PNG or JPEG diagrams containing tiny text that becomes unreadable on mobile screens and cannot be searched or updated via Git pull requests.",
        proTip: "Use Mermaid's `autonumber` and `alt / else` conditional blocks on sequence diagrams to clearly demarcate happy paths from error retry loops.",
        mistakes: [
          "Creating overcrowded diagrams with 30+ interconnected microservices that confuse developers rather than clarifying the primary user flow.",
          "Using non-standard colors that clash with your documentation site's dark mode, resulting in unreadable dark text on dark backgrounds.",
          "Failing to include text labels on connecting arrows, forcing developers to guess what payload or event triggered a transition."
        ],
        proTips: [
          "Use Mermaid sequence diagrams to map Webhook delivery lifecycles (Endpoint registration -> Event trigger -> Exponential retry -> Dead-letter queue).",
          "Pair every complex diagram with a bulleted text explanation directly below it to ensure full web accessibility (a11y) for screen readers.",
          "Store reusable Excalidraw JSON source files in a `.docs/diagrams/` folder so any engineer on the team can edit visual assets in the future."
        ]
      },
      promptLab: {
        title: "Technical Architecture Sequence Flow & Mermaid Generator",
        description: "Transform an intricate asynchronous engineering workflow into clean, production-ready Mermaid.js sequence diagram code.",
        variables: [
          {
            name: "Protocol / Flow",
            label: "Protocol / Flow",
            options: ["OAuth 2.1 PKCE Authorization Handshake", "Asynchronous Webhook Event Retry with Exponential Backoff", "Distributed Saga Order Compensation Flow", "Zero-Knowledge Proof Identity Verification"],
            default: "Asynchronous Webhook Event Retry with Exponential Backoff"
          },
          {
            name: "Participating Actors",
            label: "Participating Actors",
            options: ["Customer, Client App, Auth API & DB", "Producer Service, Event Broker, Receiver & DLQ", "Browser Client, CDN Edge, Origin Server & Redis", "Mobile App, Payment Gateway, Bank & Merchant"],
            default: "Producer Service, Event Broker, Receiver & DLQ"
          },
          {
            name: "Diagram Type",
            label: "Diagram Type",
            options: ["Mermaid Sequence Diagram", "Mermaid State Diagram (v2)", "Mermaid Architecture Flowchart", "Excalidraw Plain-Text Spec"],
            default: "Mermaid Sequence Diagram"
          }
        ],
        template: `You are a Principal Solutions Architect and Technical Documentation Visualizer.

Generate a complete, syntactically flawless [Diagram Type] depicting:
- Technical Workflow: [Protocol / Flow]
- Key Actors: [Participating Actors]

Requirements:
1. Syntactically valid Mermaid.js block with \`autonumber\` enabled.
2. Clear Actor Aliases: Define clean participant names with readable display labels.
3. Happy Path vs. Error/Retry Handling: Use \`alt / else / end\` or \`loop\` blocks to visually illustrate failures and retry policies.
4. Descriptive Arrow Payloads: Label every message with exact HTTP methods, headers, or event names.
5. Accompanying Walkthrough Text: A clear 3-step text explanation designed to accompany the diagram in an MDX documentation page.`,
        expectedOutput: `\`\`\`mermaid
sequenceDiagram
    autonumber
    actor Customer as User Checkout
    participant Core as Core Billing Service
    participant Broker as Redis Event Queue
    participant Worker as Webhook Dispatch Worker
    participant Merchant as Merchant Webhook Server
    participant DLQ as Dead-Letter Queue (DLQ)

    Customer->>Core: Complete Purchase ($49.00 USD)
    activate Core
    Core->>Core: Persist Order & Generate invoice.paid
    Core->>Broker: LPUSH events:billing (Payload + Signature)
    Core-->>Customer: 200 OK (Payment Confirmed)
    deactivate Core

    Worker->>Broker: BRPOP events:billing
    activate Worker
    Worker->>Merchant: POST /webhooks (Signature: sha256_...)
    
    alt Happy Path (Merchant Responds Immediately)
        Merchant-->>Worker: 200 OK
        Worker->>Worker: Log Success & Ack Job
    else Transient Failure (503 Service Unavailable / Timeout)
        Merchant-->>Worker: 503 Gateway Timeout
        Note over Worker: Initiate Jittered Exponential Backoff<br/>Attempt 1: 5s | Attempt 2: 30s | Attempt 3: 5m
        loop Max 3 Retries
            Worker->>Merchant: POST /webhooks (Retry Attempt)
        end
    else Permanent Failure (410 Gone or Exhausted Retries)
        Merchant-->>Worker: 400 Bad Request
        Worker->>DLQ: Enqueue dead_letters:webhooks
        Note over Worker,DLQ: Alert On-Call & Halt Endpoint Dispatch
    end
    deactivate Worker
\`\`\`

### Diagram Walkthrough & Architecture Notes

1. **Decoupled Asynchronous Ingestion:** When a customer completes checkout, the core billing engine does not synchronously ping the external merchant server. It enqueues the event into Redis, allowing the customer checkout response to resolve in under 45ms.
2. **Exponential Backoff with Jitter:** If the merchant endpoint returns a \`5xx\` server error or network timeout, the dispatch worker automatically reschedules delivery with exponential backoff plus randomized jitter to prevent thundering herd crashes.
3. **Dead-Letter Queue (DLQ) Isolation:** Non-retryable client errors (\`4xx\`) or events that fail after 3 consecutive retry attempts are automatically isolated into the Dead-Letter Queue, notifying operations teams without stalling the primary event stream.`
      },
      conceptGuide: {
        title: "Visual Systems Engineering & Markdown-Native Diagramming",
        overview: "Complex distributed architectures—such as asynchronous webhook deliveries, state machines, and OAuth flows—are notoriously difficult to communicate through prose alone. However, traditional raster images (PNGs, JPEGs) rot quickly: whenever an API header or microservice boundary changes, updating the image requires hunting down the original designer or graphics file. Markdown-native diagramming via Mermaid.js solves this by treating diagrams as code. Diagrams live inside MDX files, render dynamically in browsers, and can be reviewed, edited, and diffed in standard Git pull requests.",
        keyPoints: [
          "**Diagrams as Code:** Plain-text Mermaid syntax allows any software engineer to update an architectural diagram in a PR.",
          "**Responsive Vector Rendering:** Mermaid renders SVG elements dynamically in the browser, ensuring razor-sharp typography at any zoom level.",
          "**Theme Adaptability:** SVGs dynamically inherit light and dark theme CSS variables without needing separate exported image assets.",
          "**Accessibility Compliance:** Plain-text diagram sources provide accessible text fallbacks for screen readers and search engine crawlers."
        ]
      },
      learning: {
        resources: [
          {
            title: "Mermaid.js Official Syntax & Diagram Types Reference",
            url: "https://mermaid.js.org/intro/",
            type: "Official Docs"
          },
          {
            title: "Excalidraw - Collaborative Virtual Hand-Drawn Whiteboard",
            url: "https://excalidraw.com",
            type: "Framework"
          },
          {
            title: "GitHub Docs - Native Mermaid Diagram Rendering Support",
            url: "https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams",
            type: "Official Docs"
          }
        ]
      }
    },

    // Node 7
    {
      id: "step-7",
      stepNumber: 7,
      phaseId: "phase-3",
      title: "Automated Prose Linting & Developer Style Guides",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Configure Vale CLI and CI pipelines to enforce the Google Developer Style Guide, banning passive voice, jargon, and inconsistent code terminology across every Markdown file before merge.",
      description: "Inconsistent terminology (e.g., alternating between 'login', 'log in', 'sign in', and 'authenticate') destroys developer trust and degrades search accuracy. Vale is an open-source, extensible linter for prose that brings ESLint-grade automated testing to written documentation. By configuring Vale with established rulesets like the Google Developer Documentation Style Guide and Microsoft Style Guide, engineering teams can automatically detect passive voice, sexist pronouns, condescending adverbs ('simply', 'easily', 'just'), and misspelled API terminology directly in their code editor and CI/CD pipelines.",
      playbook: {
        setup: "Install the Vale CLI (`brew install vale` or `npm install -g vale`). Create a `.vale.ini` configuration file in your project root with `MinAlertLevel = suggestion`.",
        execute: "Import the `Google` and `proselint` style packages via `vale sync`. Create custom regex rules in `.github/styles/Vocab/Acme/accept.txt` and `reject.txt` to enforce official company product names and terms.",
        verify: "Run `vale docs/` across your documentation directory. Verify that Vale flags passive voice, condescending adverbs, and forbidden abbreviations with exact line numbers and suggested replacements."
      },
      tools: [
        {
          name: "Vale",
          type: "Free",
          url: "https://vale.sh",
          description: "Open-source, command-line linter for prose that enforces editorial style guides, vocabulary rules, and grammar standards across Markdown and MDX.",
          bestFor: "Automated prose linting, style guide enforcement & vocabulary control"
        },
        {
          name: "Google Developer Style Guide",
          type: "Free",
          url: "https://developers.google.com/style",
          description: "Industry-standard editorial guidelines and word lists for writing clear, concise, and accessible technical documentation.",
          bestFor: "Authoritative technical writing rules, grammar conventions & word lists"
        },
        {
          name: "GitHub Actions",
          type: "Freemium",
          url: "https://github.com/features/actions",
          description: "CI/CD automation platform used to run Vale prose linting checks on every pull request, posting inline annotations on violating lines.",
          bestFor: "Automated CI docs linting & PR review annotations"
        }
      ],
      callouts: {
        mistake: "Using condescending words like 'simply', 'easily', 'obviously', or 'just' in tutorials; when a developer gets stuck, it creates intense frustration.",
        proTip: "Set Vale's initial CI severity to `warning` so you don't block urgent developer pull requests while the team adopts the style guide.",
        mistakes: [
          "Relying on human peer reviewers to spot minor grammar, casing, and terminology inconsistencies rather than automating it with Vale.",
          "Writing in the passive voice ('The request is authenticated by the server') instead of clear active voice ('The server authenticates the request').",
          "Using ambiguous pronouns like 'it' or 'they' when referring to multiple nouns in the same technical paragraph."
        ],
        proTips: [
          "Install the official Vale VS Code / Cursor extension so writers get real-time squiggly-line feedback while drafting MDX.",
          "Create a dedicated `Vocab/Terms` file to strictly enforce capitalization for your brand and product names (e.g., 'WebSockets', not 'Websockets').",
          "Run `vale --ext=.mdx docs/` in pre-commit git hooks using Husky to catch style violations before code is ever pushed to GitHub."
        ]
      },
      promptLab: {
        title: "Vale Style Rule Author & Prose Quality Transformer",
        description: "Transform informal, passive developer writing into crisp, active documentation adhering to the Google Developer Style Guide.",
        variables: [
          {
            name: "Style Target",
            label: "Style Target",
            options: ["Google Developer Documentation Style", "Microsoft Technical Writing Guide", "Stripe API Documentation Standard", "Amazon Executive Technical Style"],
            default: "Google Developer Documentation Style"
          },
          {
            name: "Linter Rule Focus",
            label: "Linter Rule Focus",
            options: ["Eliminate Passive Voice & Jargon", "Ban Condescending Words (simply, easily)", "Standardize API Casing & Terminology", "Second-Person Active Imperative Framing"],
            default: "Eliminate Passive Voice & Jargon"
          },
          {
            name: "Draft Passage",
            label: "Draft Passage",
            options: ["Database Failover & Reconnection Logic", "OAuth Token Refresh & Expiry Handling", "Custom Webhook Signature Validation", "Container Memory Allocation & Limits"],
            default: "Database Failover & Reconnection Logic"
          }
        ],
        template: `You are a Lead Documentation Quality Engineer and Vale Style Guide Architect.

I need you to audit and rewrite an unedited developer draft according to the [Style Target].
Primary Linter Focus: [Linter Rule Focus]
Draft Topic: [Draft Passage]

Sample Raw Developer Draft:
"It should be noted that in order to simply configure the database, the user just needs to modify the config.yaml file. Once the connection is initiated by the client, if it is dropped by the server, an automatic reconnection attempt will be made by the internal driver after a delay of 500ms."

Tasks:
1. Vale Linting Violations: Identify exact phrases violating style rules (Passive voice, condescending adverbs, weak verbs).
2. Rewritten Version: Deliver a crisp, direct, second-person imperative rewrite matching Google Developer Style.
3. Production Vale Rule YAML: Write a custom Vale \`.yml\` rule file that will automatically flag this specific anti-pattern in future CI runs.`,
        expectedOutput: `### Vale Style Audit & Prose Transformation

#### 1. Vale Rule Violations in Raw Draft
- ❌ **"It should be noted that"** -> *Filler jargon / indirect opening. Omit completely.*
- ❌ **"simply configure"** -> *Condescending adverb (\`Google.WordList\`). What is simple for the author is not simple for the user.*
- ❌ **"the user just needs to"** -> *Condescending adverb ('just') + passive third-person framing ('the user').*
- ❌ **"Once the connection is initiated by the client"** -> *Passive voice. Use active subject-verb: 'When the client initiates...'*
- ❌ **"an automatic reconnection attempt will be made by the internal driver"** -> *Heavy passive construction. Rewrite to: 'The driver automatically attempts to reconnect...'*

---

#### 2. Rewritten Version (Google Developer Style Guide Compliant)

> **Configuring Database Reconnections**  
> To configure database failover, specify connection parameters in \`config.yaml\`. If the server drops the client connection, the database driver automatically attempts to reconnect after 500 ms.

*Why this works:*
- Zero filler phrases or condescending adverbs.
- Employs the second-person active voice ("To configure... specify...").
- Uses standardized SI units ("500 ms" with a space, per Google Style Guide).

---

#### 3. Custom Vale Rule Definition (\`.github/styles/Acme/Condescending.yml\`)

\`\`\`yaml
extends: existence
message: "Avoid condescending words like '%s'. Explain the steps directly without implying they are easy."
level: error
ignorecase: true
tokens:
  - simply
  - easily
  - just
  - obviously
  - clearly
  - naturally
  - of course
  - easy-to-use
\`\`\`

#### 4. Vale Configuration File (\`.vale.ini\`)

\`\`\`ini
StylesPath = .github/styles
MinAlertLevel = warning

Packages = Google, proselint

[*.md]
BasedOnStyles = Vale, Google, Acme

# Custom exceptions for code blocks and inline code
TokenIgnores = (\`[^\`]+\`)
\`\`\``
      },
      conceptGuide: {
        title: "Automated Prose Quality & Developer Style Standards",
        overview: "Documentation is often authored by dozens of different software engineers, product managers, and technical writers across an organization. Without automated linting, documentation quickly degenerates into an inconsistent mixture of passive voice, confusing terminology, and condescending prose ('just run this simple script'). Vale solves this by functioning as a compiler for the English language. By codifying editorial guidelines like the Google Developer Style Guide into machine-readable YAML rules, teams prevent prose regressions at the pull request level before docs reach production.",
        keyPoints: [
          "**Active Voice Imperative:** Technical documentation should speak directly to the developer: 'Configure the port', not 'The port should be configured'.",
          "**Banning Condescending Adverbs:** Words like 'simply', 'just', and 'easily' make struggling developers feel alienated and add zero technical clarity.",
          "**Vocabulary Files:** Custom Vale dictionaries enforce consistent product naming and ban deprecated legacy terms.",
          "**Continuous Style Gates:** Integrating Vale into GitHub Actions comments directly on offending PR lines, teaching engineers style rules automatically."
        ]
      },
      learning: {
        resources: [
          {
            title: "Vale Official Documentation & Rule Writing Reference",
            url: "https://vale.sh/docs/",
            type: "Official Docs"
          },
          {
            title: "Google Developer Documentation Style Guide Official Reference",
            url: "https://developers.google.com/style",
            type: "Style Guide"
          },
          {
            title: "Vale GitHub Action Official Repository & Setup",
            url: "https://github.com/errata-ai/vale-action",
            type: "Official Docs"
          }
        ]
      }
    },

    // Node 8
    {
      id: "step-8",
      stepNumber: 8,
      phaseId: "phase-3",
      title: "PR-Triggered Docs Sync & Code-to-Docs Drift Detection",
      timeEstimate: "2.5 hrs",
      difficulty: "Advanced",
      summary: "Implement automated CI checks and code-coupled documentation rules that fail pull requests when public method signatures, CLI flags, or schema definitions change without corresponding docs updates.",
      description: "The most dangerous documentation bug is 'documentation drift'—when an engineering team changes an API method signature, deprecates an environment variable, or adds a new CLI flag in the backend code without updating the corresponding documentation. Months later, external developers copy outdated examples, hit silent failures, and inundate support channels. Modern docs engineering solves drift by coupling code and docs: using tools like Swimm, custom GitHub Actions AST checkers, and Cursor to automatically analyze git diffs on pull requests and block merges unless documentation files are updated in the same commit.",
      playbook: {
        setup: "Integrate Swimm or configure a GitHub Actions workflow that detects changes in API route files (e.g., `src/routes/**/*.ts` or `cmd/**/*.go`).",
        execute: "Write a GitHub Action script that parses git diffs. If a pull request modifies exported API interfaces or CLI flags without including corresponding modifications in the `/docs` directory, fail the CI check and post an automated PR comment.",
        verify: "Submit a test PR modifying a function argument in the core codebase without touching `/docs`. Verify that the CI action fails with a clear message: 'Documentation Drift Detected: Public API signature updated without corresponding MDX docs update.'"
      },
      tools: [
        {
          name: "GitHub Actions",
          type: "Freemium",
          url: "https://github.com/features/actions",
          description: "Workflow automation engine used to inspect pull request diffs, enforce documentation coverage gates, and prevent code-to-docs drift.",
          bestFor: "Automated PR diff inspection & drift prevention CI gates"
        },
        {
          name: "Swimm",
          type: "Freemium",
          url: "https://swimm.io",
          description: "Developer-centric knowledge platform that couples live code snippets with documentation, automatically alerting developers when code drifts.",
          bestFor: "Code-coupled documentation & automated drift verification"
        },
        {
          name: "Cursor",
          type: "Freemium",
          url: "https://www.cursor.com",
          description: "AI code editor used to generate instant documentation diffs from pull request git diffs, saving engineers hours of manual updating.",
          bestFor: "Instant PR documentation diff synthesis from code changes"
        }
      ],
      callouts: {
        mistake: "Treating documentation as an external ticket assigned to a technical writer weeks after the engineering code has already merged to production.",
        proTip: "Adopt a strict 'No Docs, No Merge' policy: a pull request that introduces an API change cannot be merged without accompanying MDX documentation.",
        mistakes: [
          "Relying on manual memory to remember to update documentation post-release, resulting in months of documentation rot.",
          "Hardcoding code snippets into Markdown files as static strings instead of testing snippets against continuous integration compilation suites.",
          "Failing to provide developers with an automated CLI command to generate draft docs from their code diffs, creating engineering friction."
        ],
        proTips: [
          "Use Swimm's GitHub App to auto-suggest updated code snippets inside documentation pull requests when referenced code functions change.",
          "Embed a PR checklist into `.github/PULL_REQUEST_TEMPLATE.md` with a mandatory checkbox: '[x] Documentation updated in /docs'.",
          "Automate smoke testing of every code snippet in your documentation using tools like `markdown-code-runner` or `vitest`."
        ]
      },
      promptLab: {
        title: "Pull Request Drift Detection & Release Diff Auditor",
        description: "Analyze a backend pull request git diff and generate exact documentation updates to prevent documentation drift.",
        variables: [
          {
            name: "Change Category",
            label: "Change Category",
            options: ["API Route Parameter Addition", "CLI Command Deprecation & Renaming", "Environment Variable & Config Key Migration", "Webhook Payload Schema Expansion"],
            default: "API Route Parameter Addition"
          },
          {
            name: "Target Language",
            label: "Target Language",
            options: ["TypeScript / Node.js", "Python FastAPI", "Go (Golang)", "Rust Axum"],
            default: "TypeScript / Node.js"
          },
          {
            name: "Documentation File",
            label: "Documentation File",
            options: ["/docs/api-reference/endpoints.mdx", "/docs/guides/configuration.mdx", "/docs/quickstart.mdx", "/docs/webhooks/overview.mdx"],
            default: "/docs/api-reference/endpoints.mdx"
          }
        ],
        template: `You are a Principal Docs Engineer specializing in Continuous Documentation Sync and Drift Prevention.

Analyze this code change:
- Change Category: [Change Category]
- Code Language: [Target Language]
- Target Documentation File: [Documentation File]

Simulated Git Diff:
\`\`\`diff
@@ -45,6 +45,8 @@ export interface CreateClusterParams {
   name: string;
   region: 'us-east' | 'us-west' | 'eu-central';
+  enableAuditLogging?: boolean; // Defaults to false
+  retentionDays?: number; // Minimum 7, maximum 365. Required if enableAuditLogging is true.
 }
\`\`\`

Deliverables:
1. Drift Impact Analysis: Exactly which documentation pages, code samples, and tables are now outdated.
2. MDX Documentation Diff: A copy-pasteable git diff modifying [Documentation File] to reflect the new parameters, types, and validation rules.
3. GitHub Actions CI Drift Rule: A concise bash script snippet for GitHub Actions that fails PRs if \`enableAuditLogging\` is added to code without matching documentation changes.`,
        expectedOutput: `### Pull Request Drift Audit & Documentation Sync

#### 1. Drift Impact Analysis
- **Impacted Parameter Tables:** The parameter table in \`/docs/api-reference/endpoints.mdx\` is missing \`enableAuditLogging\` and \`retentionDays\`.
- **Breaking Validation Constraint:** \`retentionDays\` has an implicit dependency: it is required if \`enableAuditLogging\` is set to \`true\`. If undocumented, developers will encounter unhandled \`400 Bad Request\` validation errors.
- **Outdated Code Snippets:** Node.js, Python, and cURL snippets in \`<CodeGroup>\` must be updated to illustrate the new audit logging capability.

---

#### 2. MDX Documentation Diff (\`/docs/api-reference/endpoints.mdx\`)

\`\`\`diff
--- a/docs/api-reference/endpoints.mdx
+++ b/docs/api-reference/endpoints.mdx
@@ -28,6 +28,14 @@ Creates a high-availability compute cluster.
 <ParamField body="region" type="string" required>
   Target deployment region: \`us-east\`, \`us-west\`, or \`eu-central\`.
 </ParamField>
+
+<ParamField body="enableAuditLogging" type="boolean" default="false">
+  When set to \`true\`, streams cryptographic access logs to your SIEM endpoint.
+</ParamField>
+
+<ParamField body="retentionDays" type="integer">
+  Log retention window in days (min: \`7\`, max: \`365\`). **Required** if \`enableAuditLogging\` is enabled.
+</ParamField>
 
 ## Example Request
 
 <CodeGroup>
\`\`\`typescript Node.js
 const cluster = await client.clusters.create({
   name: 'prod-analytics-01',
   region: 'us-east',
+  enableAuditLogging: true,
+  retentionDays: 90,
 });
\`\`\`
\`\`\`

---

#### 3. GitHub Actions Drift Prevention Workflow (\`.github/workflows/docs-drift.yml\`)

\`\`\`yaml
name: "Docs Drift Detection Gate"
on:
  pull_request:
    paths:
      - 'src/types/**/*.ts'
      - 'src/routes/**/*.ts'

jobs:
  check-docs-sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Verify Docs Updated
        run: |
          echo "Checking if documentation files were updated in this PR..."
          CHANGED_DOCS=$(git diff --name-only origin/\${{ github.base_ref }} HEAD | grep -E '^docs/' || true)
          
          if [ -z "$CHANGED_DOCS" ]; then
            echo "❌ ERROR: Public API signatures were modified in src/ but no corresponding files in docs/ were updated!"
            echo "Please update the MDX documentation in /docs to match your code changes before merging."
            exit 1
          else
            echo "✅ Documentation updates detected in PR: $CHANGED_DOCS"
          fi
\`\`\``
      },
      conceptGuide: {
        title: "Continuous Documentation & Eliminating Documentation Rot",
        overview: "In fast-moving engineering environments, software changes every day while documentation is updated only every few quarters. This divergence is known as 'documentation rot'. When code and documentation are separated into isolated systems, drift is inevitable. By storing documentation as code in the same monorepo, engineering teams can use Continuous Integration (CI) gates to enforce synchronization. Pull requests that alter public API signatures or CLI options are prevented from merging unless the pull request also contains the corresponding updates to the MDX documentation.",
        keyPoints: [
          "**Atomic Code & Docs Commits:** Code changes and their documentation updates should be committed in the exact same Git pull request.",
          "**CI Drift Detection:** Automated GitHub Actions inspect git diffs to catch API changes that lack documentation updates.",
          "**Snippet Testing:** Treat code snippets inside documentation as automated unit tests to verify they compile against latest builds.",
          "**Single Source of Truth:** Never duplicate definitions; reference centralized schemas and TypeScript interfaces whenever possible."
        ]
      },
      learning: {
        resources: [
          {
            title: "Swimm Code-Coupled Documentation Platform",
            url: "https://swimm.io",
            type: "Official Docs"
          },
          {
            title: "GitHub Actions Guide: Enforcing Monorepo Docs Sync",
            url: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions",
            type: "Official Docs"
          },
          {
            title: "Martin Fowler: Documentation as Code and Living Documentation",
            url: "https://martinfowler.com/articles/living-documentation.html",
            type: "Case Study"
          }
        ]
      }
    },

    // Node 9
    {
      id: "step-9",
      stepNumber: 9,
      phaseId: "phase-4",
      title: "AI-Ready Documentation (llms.txt) & RAG Ask-AI Search",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Publish standardized /llms.txt and /llms-full.txt markdown indexes so Cursor, Claude, and developer AI agents can ingest your docs with zero hallucinations.",
      description: "Developers increasingly consume documentation not by browsing web pages, but through AI coding assistants like Cursor, GitHub Copilot, and Claude. If your documentation is trapped behind heavy JavaScript single-page apps or non-semantic HTML tables, AI agents hallucinate outdated syntax and invent fake APIs. By publishing standardized `/llms.txt` and `/llms-full.txt` markdown endpoints per the emerging LLMs.txt standard, you provide AI tools with clean, structured, plain-text feeds of your entire documentation. Furthermore, embedding conversational RAG search widgets via Inkeep or Algolia DocSearch lets developers ask natural-language questions and get instant, cited answers directly on your docs site.",
      playbook: {
        setup: "Review the official `llms.txt` specification (llmstxt.org). Add an automated build script or use Mintlify's native `/llms.txt` generation feature to export all public MDX pages into clean plain Markdown.",
        execute: "Host `/llms.txt` (a concise index with page summaries and URLs) and `/llms-full.txt` (the complete concatenated markdown corpus) at your documentation root. Embed an Inkeep or Algolia DocSearch 'Ask AI' search modal into your navigation header.",
        verify: "Visit `https://yourdocs.com/llms.txt` in a raw browser tab. Confirm clean Markdown formatting without HTML script tags or UI noise. Open Cursor, add `@yourdocs.com/llms.txt` as a docs source, and test asking a technical question."
      },
      tools: [
        {
          name: "Inkeep",
          type: "Paid",
          url: "https://inkeep.com",
          description: "AI search and support agent platform built specifically for developer documentation, GitHub repos, and Discord communities.",
          bestFor: "AI-native 'Ask AI' search modals, verified RAG answers & support deflection"
        },
        {
          name: "Algolia DocSearch",
          type: "Free",
          url: "https://docsearch.algolia.com",
          description: "The gold standard for developer documentation search, offering instant sub-10ms keyword and semantic search indexing.",
          bestFor: "Sub-10ms developer documentation search indexing & keyboard shortcuts"
        },
        {
          name: "Firecrawl",
          type: "Freemium",
          url: "https://www.firecrawl.dev",
          description: "Turn entire documentation websites into clean, LLM-ready Markdown and structured datasets with a single API call.",
          bestFor: "Scraping & generating clean Markdown datasets from web documentation"
        }
      ],
      callouts: {
        mistake: "Allowing documentation sites to block web crawlers or hide code blocks behind client-side JavaScript tabs that AI agents cannot parse.",
        proTip: "Add `/llms.txt` and `/llms-full.txt` links directly in your site's `robots.txt` and footer so AI agents immediately discover the clean markdown corpus.",
        mistakes: [
          "Dumping internal secrets, unreleased beta endpoints, or deprecated API pages into `/llms-full.txt`, causing AI agents to recommend deprecated features.",
          "Embedding an AI chat widget that hallucinates answers without citing verified links to specific documentation pages.",
          "Failing to regenerate `/llms.txt` during CI/CD deployments, causing AI models to read stale documentation snapshots."
        ],
        proTips: [
          "Format `/llms.txt` with clear H2 headers indicating recommended starting points and complete API reference catalogs.",
          "Review Inkeep's analytics dashboard weekly to inspect 'Unanswered Queries' where the AI couldn't find sufficient documentation.",
          "Add code snippet verification markers (`<!-- verified-code -->`) to help LLMs prioritize official code blocks over conversational text."
        ]
      },
      promptLab: {
        title: "llms.txt Index Architect & Agentic Search Synthesizer",
        description: "Generate a standardized, specification-compliant /llms.txt index file optimized for Cursor, Copilot, and Claude.",
        variables: [
          {
            name: "Developer Product",
            label: "Developer Product",
            options: ["Next-Gen Vector Database & Embedding API", "Serverless Edge Compute & Key-Value Store", "Unified Fintech Payment Orchestration Gateway", "AI Agent Workflow Orchestrator & Tool Registry"],
            default: "Next-Gen Vector Database & Embedding API"
          },
          {
            name: "Documentation Base URL",
            label: "Documentation Base URL",
            options: ["https://docs.vectordb.dev", "https://developers.acmepay.io", "https://edgecloud.io/docs", "https://agentflow.ai/docs"],
            default: "https://docs.vectordb.dev"
          },
          {
            name: "Scope of Index",
            label: "Scope of Index",
            options: ["Core Quickstarts & API Reference", "Exhaustive Full-Platform Catalog", "Enterprise Security & Architecture Index"],
            default: "Core Quickstarts & API Reference"
          }
        ],
        template: `You are an AI Documentation Specialist implementing the official /llms.txt standard (llmstxt.org).

Generate a complete, specification-compliant \`/llms.txt\` file for:
- Product: [Developer Product]
- Base URL: [Documentation Base URL]
- Scope: [Scope of Index]

Requirements:
1. Title H1 and Blockquote Overview: Concise summary of what the product is and who it is for.
2. Core Documentation Links: Formatted as \`- [Title](URL): 1-sentence description\`.
3. Quickstart & Essential Concepts: Pointing to foundational getting-started pages.
4. API Reference Index: Direct links to raw endpoint references and schemas.
5. Optional Section (Full Corpus): Reference to the companion \`/llms-full.txt\` URL.
6. Clean, concise, token-efficient formatting with zero decorative HTML or marketing buzzwords.`,
        expectedOutput: `# VectorDB Documentation

> VectorDB is a distributed, ultra-low latency vector database engine engineered for semantic search, real-time RAG pipelines, and high-dimensional nearest-neighbor indexing.

## Essential Quickstarts

- [5-Minute Quickstart](https://docs.vectordb.dev/quickstart.md): Install the client, create an index, and insert your first 1536-dimension embeddings.
- [Authentication & API Keys](https://docs.vectordb.dev/auth.md): How to issue scoped API keys and configure IP allowlists.
- [Client SDKs](https://docs.vectordb.dev/sdks.md): Official libraries for TypeScript/Node.js, Python 3, Go, and Rust.

## Core Concepts & Architecture

- [Distance Metrics](https://docs.vectordb.dev/concepts/metrics.md): Choosing between Cosine Similarity, Euclidean Distance, and Dot Product for your embedding model.
- [HNSW vs. IVF-PQ Indexing](https://docs.vectordb.dev/concepts/indexing.md): Trade-offs between memory footprint, recall accuracy, and sub-5ms query latency.
- [Metadata Filtering](https://docs.vectordb.dev/concepts/filtering.md): Constructing Boolean compound filters using single-stage and post-filtering algorithms.

## API Reference

- [Collections API](https://docs.vectordb.dev/api/collections.md): Endpoints for creating, updating, and dropping vector collections.
- [Vector Insert & Upsert API](https://docs.vectordb.dev/api/upsert.md): Batch vector ingestion supporting up to 10,000 vectors per request.
- [Vector Query & Search API](https://docs.vectordb.dev/api/query.md): Execute approximate nearest-neighbor (ANN) queries with metadata filters.
- [Namespaces & Multi-Tenancy](https://docs.vectordb.dev/api/namespaces.md): Partitioning single collections into isolated enterprise customer namespaces.

## Full Documentation Corpus

- [Complete Full Text (llms-full.txt)](https://docs.vectordb.dev/llms-full.txt): Complete concatenated documentation in a single plain-text markdown file for deep context window ingestion.`
      },
      conceptGuide: {
        title: "Agentic Docs Engineering & The llms.txt Specification",
        overview: "The way software developers consume documentation has fundamentally shifted. Instead of navigating web documentation manually, engineers frequently ask AI agents inside Cursor, Windsurf, or Claude Code to look up API parameters and draft integrations. The `llms.txt` standard (introduced in late 2024) solves documentation fragmentation for AI models. By publishing a standardized Markdown index at `/llms.txt`, documentation engineers provide AI agents with a fast, machine-readable map of the documentation corpus, eliminating hallucinations and ensuring AI-generated code is 100% accurate.",
        keyPoints: [
          "**The llms.txt Standard:** A standardized plain Markdown file at the web root guiding AI agents to curated technical documentation.",
          "**Hallucination Elimination:** Providing plain-text Markdown feeds prevents LLMs from guessing deprecated method names or inventing fake parameters.",
          "**Hybrid RAG Search:** Combining keyword search (Algolia) with conversational AI (Inkeep) gives developers both instant navigation and contextual answers.",
          "**Telemetry on Failed Prompts:** Monitoring what developers ask your docs AI reveals exactly which guides and tutorials are missing."
        ]
      },
      learning: {
        resources: [
          {
            title: "The Official /llms.txt File Format Specification",
            url: "https://llmstxt.org",
            type: "Specification"
          },
          {
            title: "Inkeep AI Search & Support Platform for Developers",
            url: "https://inkeep.com",
            type: "Official Docs"
          },
          {
            title: "Algolia DocSearch Official Documentation Engine",
            url: "https://docsearch.algolia.com",
            type: "Official Docs"
          }
        ]
      }
    },

    // Node 10
    {
      id: "step-10",
      stepNumber: 10,
      phaseId: "phase-4",
      title: "Automated Changelogs, Release Notes & Docs Telemetry",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Convert conventional Git commits into customer-facing semantic release notes automatically with Release Please and track failed documentation search queries and bounce rates via telemetry.",
      description: "Documentation is never 'finished'—it is a live operating system that continuously evolves with your software. Top developer documentation teams automate their release notes pipeline: using tools like Google's Release Please, conventional commits (`feat:`, `fix:`, `feat!:`) are automatically parsed into human-friendly changelogs and published to the docs portal on every release tag. Simultaneously, privacy-first telemetry tools like PostHog and Mintlify Analytics track user behavior: measuring which pages have the highest bounce rates, which search queries return zero results, and where developers drop off in quickstart tutorials.",
      playbook: {
        setup: "Configure Release Please (`release-please-action` in GitHub Actions) and enforce the Conventional Commits specification across engineering teams.",
        execute: "Integrate PostHog or Mintlify Analytics into your documentation portal to capture custom events: `docs_search_performed`, `docs_zero_search_results`, `code_snippet_copied`, and `quickstart_completed`.",
        verify: "Trigger a release PR via Release Please. Confirm that merging the PR creates a GitHub Release, bumps the version tag, and generates a formatted changelog entry at `/changelog`. Review the analytics dashboard to identify the top 5 failed search queries from the past 7 days."
      },
      tools: [
        {
          name: "Release Please",
          type: "Free",
          url: "https://github.com/googleapis/release-please",
          description: "Google's automated release bot that parses conventional commits to create release PRs, bump semantic versions, and generate human-readable changelogs.",
          bestFor: "Automated semantic versioning, changelog generation & release PRs"
        },
        {
          name: "PostHog",
          type: "Freemium",
          url: "https://posthog.com",
          description: "Open-source developer product analytics suite offering session replay, custom event funnels, and search query tracking for documentation.",
          bestFor: "Docs telemetry, session recordings & search query failure tracking"
        },
        {
          name: "Mintlify Analytics",
          type: "Freemium",
          url: "https://mintlify.com",
          description: "Built-in documentation analytics dashboard showing pageviews, search term volume, copy-button clicks, and reader feedback ratings.",
          bestFor: "Turnkey documentation metrics, feedback ratings & reader drop-off analysis"
        }
      ],
      callouts: {
        mistake: "Publishing raw Git commit hashes and cryptic internal messages ('fix: typo in pr 401') as customer-facing changelogs instead of highlighting user value.",
        proTip: "Set up a weekly Slack alert for 'Top 10 Zero-Result Documentation Searches'; it provides an exact, prioritized roadmap for which tutorials to write next.",
        mistakes: [
          "Failing to clearly tag breaking changes with prominent red warning banners and step-by-step code migration guides.",
          "Hiding the changelog in GitHub Releases rather than surfacing it prominently on your main documentation website.",
          "Ignoring 'Did this page help you? (Thumbs up / Thumbs down)' feedback loops, missing direct user complaints on confusing paragraphs."
        ],
        proTips: [
          "Always pair breaking change announcements with 'Before' and 'After' code snippets showing exactly how to update code in 2 minutes.",
          "Include a direct 'Edit this page on GitHub' link at the bottom of every page to encourage community contributions and fix small typos.",
          "Celebrate external open-source contributors in your automated changelogs by tagging their GitHub handles in release notes."
        ]
      },
      promptLab: {
        title: "Conventional Commit to Developer Changelog Synthesizer",
        description: "Transform raw Git commit logs and pull request descriptions into engaging, customer-centric developer release notes.",
        variables: [
          {
            name: "Release Version",
            label: "Release Version",
            options: ["v2.4.0 (Feature Release)", "v3.0.0 (Major Breaking Release)", "v1.12.1 (Patch & Security Fix)", "v2.0.0-beta.1 (Public Beta Preview)"],
            default: "v2.4.0 (Feature Release)"
          },
          {
            name: "Highlight Feature",
            label: "Highlight Feature",
            options: ["Zero-Latency Edge Caching", "Streaming Server-Sent Events (SSE)", "Automatic Schema Migrations", "SOC2 Compliance Log Export"],
            default: "Streaming Server-Sent Events (SSE)"
          },
          {
            name: "Target Reader",
            label: "Target Reader",
            options: ["Full-Stack Developers", "Enterprise Security & DevOps Leads", "Third-Party App Integrators", "Engineering Executives"],
            default: "Full-Stack Developers"
          }
        ],
        template: `You are a Principal Developer Advocate and Technical Writer publishing release notes for a developer-first platform.

Synthesize a customer-facing Changelog entry for:
- Version: [Release Version]
- Primary Headline Feature: [Highlight Feature]
- Target Audience: [Target Reader]

Raw Git Commits to Synthesize:
- feat: add sse streaming support for completions endpoint (#412)
- fix: resolve memory leak in connection pool during network disconnects (#415)
- feat!: deprecate legacy polling endpoint /v1/status in favor of /v1/events (#418)
- docs: update quickstart for streaming responses (#420)
- perf: reduce cold-boot latency by 35% on arm64 architectures (#422)

Requirements:
1. Executive Summary: 2-3 sentences explaining the core value of this release.
2. New Features: Highlighting the major capability with a working 'Before & After' code example.
3. Breaking Changes & Migrations: Clear warning banner and exact migration instructions.
4. Bug Fixes & Improvements: Bulleted list written from the developer's perspective (focus on resolved symptoms, not internal code).
5. Contributor Shoutouts: Clean acknowledgment section.`,
        expectedOutput: `## Version 2.4.0 — Real-Time Streaming & Performance Upgrades

*Published on October 23, 2026*

We are thrilled to release **v2.4.0**, introducing native Server-Sent Events (SSE) streaming for all AI completions endpoints, along with a 35% reduction in container cold-boot latency on ARM64 architectures.

---

### 🚀 What's New

#### Native Server-Sent Events (SSE) Streaming
You can now stream real-time token generation directly to frontend clients using standard Server-Sent Events. This drops perceived latency from 3.2 seconds down to under 120 milliseconds for interactive chat interfaces.

**Before v2.4.0 (Blocking Execution):**
\`\`\`typescript
// Blocked until all 500 tokens were generated
const response = await client.completions.create({
  prompt: 'Analyze this codebase...',
});
console.log(response.text);
\`\`\`

**In v2.4.0 (Real-Time Token Streaming):**
\`\`\`typescript
// Receives chunks as they are generated by the model
const stream = await client.completions.stream({
  prompt: 'Analyze this codebase...',
});

for await (const chunk of stream) {
  process.stdout.write(chunk.delta);
}
\`\`\`

---

### ⚠️ Deprecations & Breaking Changes

<Warning>
  **Legacy Polling Deprecation:** The \`GET /v1/status\` endpoint is deprecated in favor of real-time event streaming via \`GET /v1/events\`. Polling will be permanently retired in v3.0.0.
</Warning>

**Migration Step:** Update your client configurations to listen for websocket or SSE events rather than issuing polling requests on a 2-second interval.

---

### 🛠️ Improvements & Fixes

- **35% Cold-Boot Speedup:** Optimized ARM64 container runtime binaries, reducing average cold-boot overhead from 480ms down to 310ms.
- **Connection Pool Stability:** Fixed an issue where sudden TCP socket disconnects could cause idle connections to leak in long-running Node.js processes.
- **Documentation Overhaul:** Updated our [Streaming Quickstart Guide](/quickstart/streaming) with runnable StackBlitz sandboxes for React and Next.js.

---

### ❤️ Community Contributors

Huge thanks to community members **@alexdev99** and **@sarah-codes** for reporting connection leak edge cases and submitting documentation PRs for this release!`
      },
      conceptGuide: {
        title: "Closing the Docs Feedback Loop: Telemetry, Search Analytics & Changelogs",
        overview: "A static documentation site that never changes quickly loses relevance. World-class documentation platforms treat content as a continuous feedback loop. Release notes must be automated through conventional commits so that every software update immediately surfaces to developers. Simultaneously, telemetry tools like PostHog and Mintlify Analytics monitor reader behavior: analyzing failed search queries ('What are developers searching for that we haven't written?') and drop-off points in quickstarts to guide continuous documentation sprints.",
        keyPoints: [
          "**Automated Semantic Changelogs:** Tools like Release Please turn Git commits into developer release notes automatically.",
          "**Failed Search Telemetry:** Zero-result search queries are the highest-signal indicator of missing documentation guides.",
          "**Before & After Migration Diffs:** Never announce a breaking change without showing side-by-side code snippets explaining how to migrate.",
          "**Direct Feedback Mechanisms:** Simple 'Was this page helpful?' widgets give qualitative feedback on confusing sections."
        ]
      },
      learning: {
        resources: [
          {
            title: "Google Release Please Official GitHub Repository & Action",
            url: "https://github.com/googleapis/release-please",
            type: "Official Docs"
          },
          {
            title: "PostHog Documentation & Product Analytics Guide",
            url: "https://posthog.com/docs",
            type: "Official Docs"
          },
          {
            title: "Keep a Changelog Standard & Best Practices",
            url: "https://keepachangelog.com/en/1.1.0/",
            type: "Style Guide"
          }
        ]
      }
    }
  ]
};
