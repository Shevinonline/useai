// Complete production-grade steps data for "AI Automation & Agents" Roadmap (16 Nodes)

export const aiAutomationAgentsData = {
  id: "ai-automation-agents",
  title: "AI Automation & Agents",
  description: "Autonomous multi-agent loops, tool-calling pipelines, n8n integrations, and browser automations.",
  category: "Role & Workflow Roadmaps",
  stepCount: 16,
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: Automation Foundations, Triggers & Orchestration",
      description: "Map deterministic workflows, capture live webhook payloads, build visual routers, and self-host n8n."
    },
    {
      id: "phase-2",
      title: "Phase 2: LLM Pipelines, Scraping & RAG Knowledge Memory",
      description: "Implement multi-model failovers, force strict JSON schemas, scrape dynamic websites, and index vector memory."
    },
    {
      id: "phase-3",
      title: "Phase 3: Autonomous AI Agents, Tool Use & MCP",
      description: "Equip models with external function calling, connect Model Context Protocol (MCP) servers, and build stateful multi-agent teams."
    },
    {
      id: "phase-4",
      title: "Phase 4: Voice Agents, Browser Control & Production Ops",
      description: "Deploy sub-500ms voice bots, run vision browser agents, insert human approval gates, and monitor token cost & evals."
    }
  ],
  steps: [
    // Node 1
    {
      id: "step-1",
      stepNumber: 1,
      phaseId: "phase-1",
      title: "Process Mapping & Automation ROI Audit",
      timeEstimate: "45 mins",
      difficulty: "Beginner",
      summary: "Isolate high-friction repetitive operations, separate deterministic rules from probabilistic AI steps, and map fail-safe logic before building.",
      description: "The most expensive automation mistake is automating a broken, ambiguous manual process. Before writing code or configuring triggers, diagram every input, decision gate, and edge-case failure. Distinguish deterministic steps (e.g., standard math, database lookup, status updates) from probabilistic tasks (e.g., entity classification, summarization, creative drafting) so you only pay for LLM inference where reasoning is genuinely required.",
      playbook: {
        setup: "Conduct a 30-minute operational time audit across team workflows. Log every repetitive task taking >3 hours weekly, identifying raw data inputs, tools used, and target deliverables in Notion.",
        execute: "Use Whimsical or Mermaid to construct a comprehensive flowchart. Mark each node as either 'Deterministic Code' (Webhook/SQL) or 'Probabilistic AI' (LLM Extraction/Synthesis), inserting explicit validation gates between them.",
        verify: "Calculate Estimated Automation ROI: (Hours Saved/Month × Hourly Rate) - (Estimated LLM API Costs + Platform Fees). Ensure projected monthly net savings exceed $500 before committing development hours."
      },
      tools: [
        {
          name: "Whimsical",
          type: "Freemium",
          url: "https://whimsical.com",
          description: "Rapid visual workspace for mapping process flowcharts, decision trees, and system state architectures.",
          bestFor: "Flowcharting decision trees & system diagrams"
        },
        {
          name: "Notion",
          type: "Freemium",
          url: "https://www.notion.so",
          description: "Connected workspace for capturing team operational SOPs, API contracts, and automation backlog matrices.",
          bestFor: "SOP documentation & workflow audit tracking"
        },
        {
          name: "Claude 3.7 Sonnet",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Frontier reasoning model for analyzing manual SOP text and decomposing complex human jobs into automated logic.",
          bestFor: "SOP decomposition & edge-case discovery"
        }
      ],
      callouts: {
        mistake: "Sending standard arithmetic or simple keyword matches to an LLM, causing unnecessary latency, billing overhead, and hallucinations.",
        proTip: "Use deterministic code nodes for 80% of data transformations and reserve LLM calls strictly for fuzzy comprehension and unstructured synthesis.",
        mistakes: [
          "Using an expensive LLM to perform deterministic operations like date formatting, simple math, or string splits.",
          "Failing to map what happens when third-party APIs return rate limits, null payloads, or 500 errors.",
          "Automating a process that changes weekly before the underlying business SOP has reached maturity."
        ],
        proTips: [
          "Always design a 'Dead-Letter' queue or fallback bucket where unhandled errors can be reviewed without halting the pipeline.",
          "Calculate your token budget early: estimate input tokens, output tokens, and concurrency to avoid end-of-month invoice shock.",
          "Prompt Claude to red-team your flowchart and highlight hidden assumptions where human common sense was implicitly required."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet (Reasoning Mode) / ChatGPT o3-mini",
        variables: [
          {
            id: "workflowType",
            label: "Workflow Domain",
            options: [
              "Inbound Lead Qualification & CRM Routing",
              "Customer Support Ticket Triage & Resolution",
              "Automated Content Repurposing & Multi-Channel Publishing",
              "Financial Invoice Extraction & Accounting Sync"
            ],
            defaultOption: "Inbound Lead Qualification & CRM Routing"
          },
          {
            id: "orchestrator",
            label: "Orchestrator Platform",
            options: [
              "n8n (Self-Hosted)",
              "Make.com",
              "LangGraph / Python Backend",
              "Zapier Enterprise"
            ],
            defaultOption: "n8n (Self-Hosted)"
          },
          {
            id: "tolerance",
            label: "Hallucination & Error Tolerance",
            options: [
              "Zero Tolerance (Human Approval Required)",
              "High Tolerance (Internal Drafts / Low Stakes)",
              "Tiered (Auto-execute under $100, pause above $100)"
            ],
            defaultOption: "Zero Tolerance (Human Approval Required)"
          }
        ],
        template: "Act as an Enterprise AI Solutions Architect and Automation Systems Engineer. I am planning an automated pipeline for [workflowType] running on [orchestrator] with [tolerance] error tolerance.\n\nAnalyze this workflow and provide an exhaustive architectural blueprint:\n1. Process Decomposition Diagram (Mermaid JS format): Clearly color-code Deterministic Code nodes (blue) vs. Probabilistic LLM nodes (green) vs. Human-in-the-Loop gates (orange).\n2. Input/Output Data Contracts: Specify the incoming trigger JSON schema, key sanitization steps, and the final validated destination payload.\n3. Failure Mode & Edge-Case Matrix: Identify 5 likely point-of-failure scenarios (e.g., malformed input, rate limit, ambiguous LLM output) and supply the exact fallback logic for each.\n4. ROI & Unit Economics: Estimate monthly API costs based on 1,000 runs, token usage benchmarks, and projected developer hours saved.",
        expectedOutputs: [
          "Complete Mermaid JS flowchart distinguishing deterministic and probabilistic nodes",
          "Comprehensive input/output JSON schemas with data sanitization rules",
          "5-point failure mode recovery matrix with fallback paths",
          "Token cost calculation and ROI breakdown for 1,000 monthly runs"
        ]
      },
      learning: {
        resources: [
          {
            title: "Whimsical: Visual Flowcharting & System Architecture Best Practices",
            badge: "GUIDE",
            url: "https://whimsical.com"
          },
          {
            title: "Notion for Builders: Managing SOPs and Automation Inventories",
            badge: "OFFICIAL DOCS",
            url: "https://www.notion.so/help/guides"
          }
        ]
      },
      conceptGuide: {
        title: "The Architecture of Deterministic vs. Probabilistic Automation",
        overview: "Building resilient enterprise automation requires recognizing the boundary between deterministic rules and probabilistic models. Traditional software executes predictable, repeatable code: an API payload arrives, a database query runs, and an email sends with mathematical certainty. In contrast, Large Language Models are stochastic token predictors designed for fuzzy comprehension, reasoning, and synthesis. Conflating the two results in brittle automations that hallucinate on simple logic or waste thousands of dollars on trivial operations. High-performance automation architects design deterministic pipelines where LLMs are inserted surgically as specialized reasoning engines.",
        keyPoints: [
          {
            lead: "Strict Task Segregation",
            text: "Delegate mathematical calculations, date parsing, and relational lookups to deterministic code nodes, reserving LLMs strictly for semantic tasks."
          },
          {
            lead: "Boundary Validation Gates",
            text: "Never pass raw LLM text directly to destructive API actions; always validate outputs through strong schemas before executing database mutations."
          },
          {
            lead: "Quantifiable Unit Economics",
            text: "Model token consumption, API latency overhead, and error recovery time into the project equation to ensure a positive Return on Investment."
          }
        ]
      }
    },

    // Node 2
    {
      id: "step-2",
      stepNumber: 2,
      phaseId: "phase-1",
      title: "Webhooks, REST APIs & JSON Payload Fundamentals",
      timeEstimate: "1 hour",
      difficulty: "Beginner",
      summary: "Inspect HTTP requests, decode headers and auth tokens, and intercept live webhook payloads to reliably link disparate cloud services.",
      description: "Modern automation is built on HTTP and JSON. Webhooks act as real-time event listeners that push data the instant an event occurs (e.g., a customer pays in Stripe or submits a form in Typeform), eliminating inefficient polling. Mastering request verbs (GET, POST, PATCH), status codes, bearer authentication, and payload parsing gives you the power to connect any tool on the modern web without waiting for pre-built app integrations.",
      playbook: {
        setup: "Open Webhook.site to generate a unique, secure temporary listener URL. Configure Postman or Hoppscotch with an environment containing your test API credentials.",
        execute: "Trigger a test event in your source SaaS application (e.g., Stripe, Shopify, GitHub) pointing its webhook destination to your Webhook.site URL. Inspect headers, signature verification tokens, and the raw JSON payload body.",
        verify: "Import the captured JSON schema into Postman, replicate the POST request with custom header modifications, and verify you receive a clean HTTP 200/201 response."
      },
      tools: [
        {
          name: "Postman",
          type: "Freemium",
          url: "https://www.postman.com",
          description: "Industry-standard API client for authoring, testing, and debugging HTTP requests and mock servers.",
          bestFor: "API request authoring & collection testing"
        },
        {
          name: "Webhook.site",
          type: "Free",
          url: "https://webhook.site",
          description: "Instant cloud listener for inspecting incoming HTTP requests, headers, and webhook payloads in real time.",
          bestFor: "Live webhook inspection & debugging"
        },
        {
          name: "Hoppscotch",
          type: "Free",
          url: "https://hoppscotch.io",
          description: "Lightweight, open-source web-based API development ecosystem and curl runner.",
          bestFor: "Fast browser-based API exploration"
        }
      ],
      callouts: {
        mistake: "Ignoring webhook secret verification (HMAC signature), leaving your endpoint vulnerable to spoofed payload injections.",
        proTip: "Always return an immediate HTTP 200 OK within 2 seconds of receiving a webhook, then process heavy AI workloads asynchronously to prevent timeouts.",
        mistakes: [
          "Running heavy LLM tasks synchronously inside the webhook response handler, causing the provider to time out and trigger duplicate retry storms.",
          "Hardcoding API keys in URL query params rather than using standard Authorization: Bearer headers.",
          "Not handling nested JSON arrays properly, leading to runtime undefined errors when optional fields are omitted."
        ],
        proTips: [
          "Validate HMAC signatures (e.g., stripe-signature) using crypto libraries before consuming or parsing the payload data.",
          "Use Webhook.site's custom response rule to simulate downstream 429 and 500 error codes to verify your pipeline's retry behavior.",
          "Store raw webhook payloads in an append-only log or database table before parsing to enable effortless historical replays."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / GPT-4o",
        variables: [
          {
            id: "sourceEvent",
            label: "Webhook Event Source",
            options: [
              "Stripe Payment Intent Succeeded",
              "Shopify Order Created",
              "GitHub Pull Request Opened",
              "HubSpot Contact Lifecycle Stage Updated"
            ],
            defaultOption: "Stripe Payment Intent Succeeded"
          },
          {
            id: "authMethod",
            label: "Authentication Protocol",
            options: [
              "HMAC SHA-256 Signature Verification",
              "OAuth 2.0 Bearer Token",
              "API Key in Custom Header (X-API-Key)",
              "Mutual TLS (mTLS)"
            ],
            defaultOption: "HMAC SHA-256 Signature Verification"
          },
          {
            id: "targetLanguage",
            label: "Implementation Language / Node",
            options: [
              "n8n Code Node (JavaScript / Node.js)",
              "Python (FastAPI / Requests)",
              "Next.js / Edge Route Handler (TypeScript)"
            ],
            defaultOption: "n8n Code Node (JavaScript / Node.js)"
          }
        ],
        template: "Act as a Senior Backend & API Integrations Engineer. Write a production-ready webhook receiver and payload parser for [sourceEvent] in [targetLanguage] using [authMethod].\n\nDeliver the following:\n1. Signature Verification Function: Cryptographically verify the incoming request signature using the webhook signing secret to block spoofed requests.\n2. Idempotency Check: Implement logic to track event IDs (e.g., evt_...) in memory or database to discard duplicate deliveries.\n3. Immediate Acknowledgment: Demonstrate responding with HTTP 200 OK before kicking off background worker execution.\n4. Clean Data Extraction: Safely parse and destructure the primary customer, amount, status, and metadata fields with fallback null-coalescing.",
        expectedOutputs: [
          "Cryptographically secure HMAC verification function",
          "Idempotency handler preventing duplicate webhook execution",
          "Async dispatch architecture returning HTTP 200 immediately",
          "Safe payload destructuring handling null and missing properties"
        ]
      },
      learning: {
        resources: [
          {
            title: "Postman Learning Center: Webhooks and REST API Architecture",
            badge: "OFFICIAL DOCS",
            url: "https://learning.postman.com/docs/getting-started/introduction/"
          },
          {
            title: "Webhook.site Documentation: Inspecting and Mocking Endpoints",
            badge: "GUIDE",
            url: "https://webhook.site"
          }
        ]
      },
      conceptGuide: {
        title: "The Mechanics of Event-Driven HTTP Webhooks and APIs",
        overview: "Event-driven architecture fundamentally supersedes polling-based integration. Rather than having a script repeatedly make HTTP requests every few minutes to ask 'Has anything changed?', modern web applications utilize webhooks to push event packets immediately upon state changes. A webhook is simply an HTTP POST request dispatched by a server to a designated listener URL with an agreed JSON payload. Understanding HTTP status envelopes, header authentication schemes, and idempotency guarantees ensures that your automations react instantly while remaining impervious to dropped connections and replay attacks.",
        keyPoints: [
          {
            lead: "Zero-Latency Push",
            text: "Webhooks eliminate compute-intensive polling loops by delivering state updates in real time the moment an event triggers."
          },
          {
            lead: "Idempotent Processing",
            text: "Network retries mean webhooks will inevitably arrive more than once; always record unique event IDs to prevent duplicate database writes."
          },
          {
            lead: "Cryptographic Integrity",
            text: "Never trust raw incoming request bodies without verifying the cryptographic signature header provided by the source platform."
          }
        ]
      }
    },

    // Node 3
    {
      id: "step-3",
      stepNumber: 3,
      phaseId: "phase-1",
      title: "Rapid Visual Pipelines & Multi-Step Routing",
      timeEstimate: "1.5 hours",
      difficulty: "Intermediate",
      summary: "Construct resilient visual pipelines using conditional routers, array iterators, error-handling directives, and aggregators across cloud SaaS tools.",
      description: "Visual integration platforms like Make.com and Zapier enable lightning-fast prototyping and multi-app orchestration without managing server infrastructure. By mastering advanced flow controls—such as routers, filters, iterators for breaking down lists, and array aggregators for recombining batch data—you can coordinate complex business workflows connecting forms, databases, CRMs, and email engines in hours instead of weeks.",
      playbook: {
        setup: "Create a Make.com or Zapier workspace. Connect your foundational apps: Google Workspace/Tally (Forms), Airtable/Notion (Database), and Slack/Email (Notifications).",
        execute: "Build a multi-branch scenario: Trigger on a new form submission, route leads based on company size or budget using Router filters, format data, and insert error-handler directives (Break/Resume/Ignore) on flaky external API calls.",
        verify: "Run scenario test runs with 3 synthetic test cases: a standard qualifying lead, an edge-case empty input, and an invalid email payload. Verify that routing conditions direct records to correct paths and error boundaries catch exceptions gracefully."
      },
      tools: [
        {
          name: "Make",
          type: "Freemium",
          url: "https://www.make.com",
          description: "Visual automation platform supporting complex multi-step routing, data mapping, iterators, and custom HTTP calls.",
          bestFor: "Visual workflow routing & array aggregation"
        },
        {
          name: "Zapier",
          type: "Freemium",
          url: "https://zapier.com",
          description: "Broadest SaaS integration ecosystem with built-in AI actions, webhooks, and visual logic builders.",
          bestFor: "Quick SaaS connectors & zero-code triggers"
        },
        {
          name: "Tally",
          type: "Freemium",
          url: "https://tally.so",
          description: "Minimalist, powerful form builder with native webhook triggers and flexible conditional branching.",
          bestFor: "Frictionless form triggers & lead intake"
        }
      ],
      callouts: {
        mistake: "Building monolithic linear pipelines without error handlers, causing one failed API step to abort the entire batch of operations.",
        proTip: "Use Make's Array Aggregator immediately after an Iterator to bundle transformed items into a single bulk API write, cutting operational costs by 90%.",
        mistakes: [
          "Forgetting to attach an error-handling directive (such as 'Commit' or 'Resume') to flaky external endpoints.",
          "Performing single-item API calls inside a loop rather than batching records, rapidly exhausting monthly subscription operations.",
          "Relying on UI mapping without testing how null or empty fields behave when optional inputs are submitted."
        ],
        proTips: [
          "Store reference IDs (e.g., Airtable record ID or Stripe Customer ID) in data store variables to enable clean bi-directional syncs.",
          "Enable 'Data storage' within Make scenarios to retain failed bundles for one-click manual retry after fixing configuration issues.",
          "Use built-in formula functions (like formatDate, map, and get) to clean incoming text strings prior to downstream database insertion."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / ChatGPT o3-mini",
        variables: [
          {
            id: "platform",
            label: "Visual Platform",
            options: [
              "Make.com (Integromat)",
              "Zapier Tables & Workflows",
              "Relay.app"
            ],
            defaultOption: "Make.com (Integromat)"
          },
          {
            id: "scenario",
            label: "Automation Scenario",
            options: [
              "Lead Ingestion -> AI Enrichment -> Multi-Tier CRM Routing -> Slack Alert",
              "Invoice PDF Ingestion -> Vision OCR -> Accounting Sync -> Payment Notification",
              "Customer Onboarding -> Account Creation -> Task Provisioning -> Welcome Sequence"
            ],
            defaultOption: "Lead Ingestion -> AI Enrichment -> Multi-Tier CRM Routing -> Slack Alert"
          },
          {
            id: "errorPolicy",
            label: "Error Resolution Strategy",
            options: [
              "Break (Auto-retry with exponential backoff)",
              "Resume (Inject default mock data and continue)",
              "Rollback (Revert earlier database updates and alert ops)"
            ],
            defaultOption: "Break (Auto-retry with exponential backoff)"
          }
        ],
        template: "Act as a Certified [platform] Solutions Architect. Design an enterprise-grade multi-branch visual automation scenario for: [scenario].\n\nDeliver the following architectural blueprint:\n1. Module-by-Module Sequence: List every module required, starting from trigger to completion, with exact variable mappings and formulas.\n2. Routing & Filtering Rules: Detail the exact filter criteria for each router branch (e.g., Enterprise vs. Mid-Market vs. Disqualified).\n3. Iteration & Aggregation Strategy: Explain where iterators are needed for array handling and how records are aggregated to minimize execution operations.\n4. Error-Handling Directives: Define the [errorPolicy] implementation for external API modules prone to rate limits or network drops.",
        expectedOutputs: [
          "Step-by-step module blueprint with explicit formulas and field mappings",
          "Exact conditional syntax for each router branch",
          "Array iterator and aggregator configuration minimizing monthly operations",
          "Error-handling directive setup for network timeouts and 429 limits"
        ]
      },
      learning: {
        resources: [
          {
            title: "Make Academy: Advanced Routing, Iterators and Aggregators",
            badge: "OFFICIAL DOCS",
            url: "https://www.make.com/en/help"
          },
          {
            title: "Zapier Automation Platform: Webhook & Filtering Documentation",
            badge: "GUIDE",
            url: "https://zapier.com/help"
          }
        ]
      },
      conceptGuide: {
        title: "Visual Pipelines: Dynamic Flow Control and Resilient Routing",
        overview: "Visual integration platforms provide rapid visual abstraction over traditional integration code. However, building enterprise-grade visual pipelines requires moving beyond simplistic linear 'If This Then That' triggers. Production systems demand robust flow control: conditional branching to route payloads based on business heuristics, iterators to decompose multi-item arrays into individual records, and aggregators to consolidate items back into cohesive collections. Pairing these flow patterns with resilient error-handling directives transforms fragile prototypes into dependable enterprise automation engines.",
        keyPoints: [
          {
            lead: "Non-Linear Decision Logic",
            text: "Use multi-way routers to evaluate multiple parallel conditions simultaneously, routing data to distinct service tiers without duplication."
          },
          {
            lead: "Operation Optimization",
            text: "Deconstruct arrays with iterators for granular manipulation, then reassemble with aggregators to write batches in single API transactions."
          },
          {
            lead: "Self-Healing Error Directives",
            text: "Incorporate automatic exponential backoff directives on external API steps to withstand transient downtime without breaking the pipeline."
          }
        ]
      }
    },

    // Node 4
    {
      id: "step-4",
      stepNumber: 4,
      phaseId: "phase-1",
      title: "Self-Hosted Workflow Orchestration with n8n",
      timeEstimate: "2 hours",
      difficulty: "Intermediate",
      summary: "Deploy a private, unlimited-execution n8n instance on cloud containers with custom JavaScript/Python code execution and native AI nodes.",
      description: "While hosted SaaS platforms charge per task or operation, self-hosting n8n gives you unlimited workflow executions, complete data privacy, and zero vendor lock-in. Running n8n via Docker or managed container platforms like Railway or Render unlocks advanced capabilities: writing raw JavaScript/Python scripts inside workflow nodes, managing custom environment variables, and utilizing native LangChain-powered AI nodes for agent orchestration.",
      playbook: {
        setup: "Deploy an n8n Docker template to Railway or a private VPS. Provision a persistent PostgreSQL database container for workflow execution history and credentials.",
        execute: "Configure environment variables: N8N_ENCRYPTION_KEY, WEBHOOK_URL, and EXECUTIONS_DATA_PRUNE=true. Set up a secure custom domain with SSL certificates via Cloudflare or Railway DNS.",
        verify: "Trigger a test webhook in n8n containing a JavaScript Code node that performs cryptographic hashing, verifying that execution logs persist and community node packages can be installed."
      },
      tools: [
        {
          name: "n8n",
          type: "Freemium",
          url: "https://n8n.io",
          description: "Fair-code workflow automation tool that can be self-hosted, featuring native AI agent nodes and custom script runners.",
          bestFor: "Self-hosted unlimited workflow execution & AI nodes"
        },
        {
          name: "Railway",
          type: "Freemium",
          url: "https://railway.com",
          description: "Modern cloud deployment platform with instant one-click Docker templates for n8n, PostgreSQL, and Redis.",
          bestFor: "One-click cloud container hosting"
        },
        {
          name: "Docker",
          type: "Free",
          url: "https://www.docker.com",
          description: "Industry-standard container engine for running isolated, reproducible workflow servers anywhere.",
          bestFor: "Containerized deployment & local testing"
        }
      ],
      callouts: {
        mistake: "Running n8n on SQLite in production without execution pruning, causing the database to balloon to 50GB and crash the server.",
        proTip: "Set EXECUTIONS_DATA_PRUNE=true and EXECUTIONS_DATA_MAX_AGE=168 (7 days) in your environment variables to maintain optimal database performance.",
        mistakes: [
          "Deploying n8n without setting a custom N8N_ENCRYPTION_KEY; if the container restarts without it, all stored credentials become permanently corrupted.",
          "Using SQLite instead of PostgreSQL for production instances processing thousands of webhooks daily.",
          "Exposing internal webhook URLs without setting basic authentication or an API gateway reverse proxy."
        ],
        proTips: [
          "Use the n8n community node ecosystem (`npm install ...`) to import specialized integrations directly into your self-hosted instance.",
          "Leverage the native 'AI Agent' and 'Sub-Workflow' nodes in n8n to break massive monolithic scripts into modular, reusable micro-services.",
          "Configure automated daily PostgreSQL backups on Railway to ensure zero downtime or credential loss during version upgrades."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / DeepSeek-R1",
        variables: [
          {
            id: "hostPlatform",
            label: "Hosting Environment",
            options: [
              "Railway Cloud Containers",
              "Docker Compose on Ubuntu VPS",
              "Render Managed Web Service",
              "AWS ECS with Fargate"
            ],
            defaultOption: "Railway Cloud Containers"
          },
          {
            id: "databaseType",
            label: "Persistence Backend",
            options: [
              "PostgreSQL 16 (Dedicated Container)",
              "Supabase Managed Postgres",
              "AWS RDS PostgreSQL"
            ],
            defaultOption: "PostgreSQL 16 (Dedicated Container)"
          },
          {
            id: "securityTier",
            label: "Security Hardening",
            options: [
              "Production Hardened (Webhook Signatures + Strict CORS + Pruning)",
              "Standard Internal (Basic Auth + SSL)",
              "Multi-Tenant Enterprise (SSO + Role-Based Access)"
            ],
            defaultOption: "Production Hardened (Webhook Signatures + Strict CORS + Pruning)"
          }
        ],
        template: "Act as a Senior DevOps and Platform Engineer specializing in n8n automation infrastructure. Generate a complete, production-ready deployment specification for n8n on [hostPlatform] using [databaseType] with [securityTier].\n\nProvide the following:\n1. Docker Compose / Configuration Manifest: Include exact service definitions for n8n, PostgreSQL, and Redis (for queue mode).\n2. Critical Environment Variable Checklist: Include security keys (N8N_ENCRYPTION_KEY), webhook URLs, worker concurrency, and execution pruning parameters.\n3. Custom Code Node Execution Setup: Instructions to safely enable external npm libraries (NODE_FUNCTION_ALLOW_EXTERNAL) for advanced JavaScript/Python tasks.\n4. Health Check & Backup Strategy: Define health-check endpoints and automated cron backup routines for persistent state.",
        expectedOutputs: [
          "Complete docker-compose.yml or Railway deployment manifest",
          "Production environment variable configuration with encryption keys",
          "Configuration snippet enabling external npm packages in Code nodes",
          "Automated PostgreSQL backup and pruning maintenance script"
        ]
      },
      learning: {
        resources: [
          {
            title: "n8n Official Documentation: Hosting and Scaling Guide",
            badge: "OFFICIAL DOCS",
            url: "https://docs.n8n.io/hosting/"
          },
          {
            title: "Railway Deployment Guides: One-Click n8n with Postgres",
            badge: "GUIDE",
            url: "https://docs.railway.com"
          }
        ]
      },
      conceptGuide: {
        title: "The Power of Self-Hosted Workflow Orchestration",
        overview: "While hosted integration SaaS products provide rapid convenience, enterprise automation quickly encounters billing thresholds and privacy limitations. Paying $0.01 per task execution becomes economically unsustainable when workflows process hundreds of thousands of events monthly. Self-hosting n8n combines visual workflow orchestration with raw code execution, unlimited executions, and air-gapped data confidentiality. By managing your own containerized runtime, you retain complete sovereignty over sensitive API keys, customer database credentials, and proprietary LLM prompts without third-party surveillance.",
        keyPoints: [
          {
            lead: "Uncapped Execution Capacity",
            text: "Process millions of webhooks and background jobs without paying recurring per-task transaction fees."
          },
          {
            lead: "Custom Script Execution",
            text: "Run unrestricted JavaScript and Python code blocks directly within workflows to handle custom algorithms and data transforms."
          },
          {
            lead: "Data Sovereignty & Compliance",
            text: "Keep proprietary enterprise data and customer credentials isolated within your private cloud perimeter, meeting GDPR and SOC2 standards."
          }
        ]
      }
    },

    // Node 5
    {
      id: "step-5",
      stepNumber: 5,
      phaseId: "phase-2",
      title: "Multi-Model API Routing & Fallbacks",
      timeEstimate: "1.5 hours",
      difficulty: "Intermediate",
      summary: "Connect frontier LLMs via unified API gateways, balance cost versus latency, and build automatic failover chains for rate limits and outages.",
      description: "Relying on a single AI provider is an existential risk for production automation. Providers suffer outages, encounter regional throttling, and trigger unexpected 429 rate limit errors. Modern AI pipelines use multi-model routing gateways like OpenRouter to dynamically route requests based on task complexity, token cost, and real-time provider uptime, falling back from primary models (e.g., Claude 3.7 Sonnet) to backup models (e.g., GPT-4o or DeepSeek-V3) with zero human intervention.",
      playbook: {
        setup: "Create an OpenRouter account and generate an API key. Review credit thresholds and set up provider fallbacks in the OpenRouter dashboard.",
        execute: "Construct a model routing chain: Direct high-reasoning tasks to Claude 3.7 Sonnet, high-throughput extraction to GPT-4o-mini, and configure an automated fallback array ['anthropic/claude-3.7-sonnet', 'openai/gpt-4o', 'deepseek/deepseek-chat'].",
        verify: "Simulate an upstream provider failure by submitting an invalid model tag or exceeding rate limits. Confirm the router seamlessly intercepts the HTTP error and fulfills the completion using the secondary model."
      },
      tools: [
        {
          name: "OpenRouter",
          type: "Freemium",
          url: "https://openrouter.ai",
          description: "Unified API gateway providing access to 200+ AI models with automatic load balancing, price optimization, and fallback routing.",
          bestFor: "Unified LLM API access & automated fallbacks"
        },
        {
          name: "Anthropic Console",
          type: "Paid",
          url: "https://console.anthropic.com",
          description: "Direct API platform for Claude 3.7 Sonnet and Haiku with prompt caching and fine-grained token controls.",
          bestFor: "Complex reasoning & extended context tasks"
        },
        {
          name: "OpenAI Platform",
          type: "Paid",
          url: "https://platform.openai.com",
          description: "Production API infrastructure for GPT-4o, o3-mini reasoning, and native structured outputs.",
          bestFor: "Low-latency inference & structured outputs"
        }
      ],
      callouts: {
        mistake: "Sending low-complexity extraction tasks to flagship reasoning models, inflating monthly AI inference bills by 10x-20x.",
        proTip: "Use prompt caching on Anthropic and OpenRouter for large system instructions and static context to reduce token costs by up to 90%.",
        mistakes: [
          "Hardcoding a single model ID across all workflows, causing complete system paralysis when that model's endpoint goes down.",
          "Failing to standardize prompt schemas across providers, leading to formatting discrepancies between Anthropic and OpenAI responses.",
          "Not implementing exponential backoff jitter on 429 rate limit responses, causing thundering herd retries."
        ],
        proTips: [
          "Use OpenRouter's model routing parameters (`models: [...]`) to define prioritized fallback cascades directly in your HTTP request payload.",
          "Tag every API request with custom headers (e.g., `HTTP-Referer` and `X-Title`) to track granular cost attribution per client or department.",
          "Route simple classification and JSON sanitization tasks to ultracheap models (like Claude 3.5 Haiku or GPT-4o-mini) to optimize cost-per-execution."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / GPT-4o",
        variables: [
          {
            id: "primaryModel",
            label: "Primary Frontier Model",
            options: [
              "anthropic/claude-3.7-sonnet",
              "openai/gpt-4o",
              "deepseek/deepseek-r1"
            ],
            defaultOption: "anthropic/claude-3.7-sonnet"
          },
          {
            id: "fallbackModel",
            label: "Secondary Fallback Model",
            options: [
              "openai/gpt-4o-mini",
              "anthropic/claude-3.5-haiku",
              "meta-llama/llama-3.3-70b-instruct"
            ],
            defaultOption: "openai/gpt-4o-mini"
          },
          {
            id: "taskCategory",
            label: "Pipeline Task Category",
            options: [
              "High-Stakes Document Analysis & Legal Extraction",
              "Real-Time Customer Sentiment Classification",
              "Multi-Lingual Customer Support Generation"
            ],
            defaultOption: "High-Stakes Document Analysis & Legal Extraction"
          }
        ],
        template: "Act as an AI Infrastructure and API Optimization Specialist. Design a multi-model failover client in TypeScript/Python for [taskCategory] using OpenRouter.\n\nDeliver the following:\n1. Resilient API Client Implementation: Write a reusable wrapper using standard fetch/requests that attempts [primaryModel] first, catches 429/500/503 status codes, and instantly reroutes to [fallbackModel].\n2. Cost vs. Latency Router: Implement heuristic logic that evaluates incoming input token length; if tokens > 8,000, enable prompt caching headers.\n3. Unified Response Normalization: Ensure output text and token usage metrics are parsed into a normalized response interface regardless of which model answered.\n4. Telemetry Logging: Record which model executed, latency in milliseconds, and total token cost in USD.",
        expectedOutputs: [
          "Complete TypeScript or Python multi-model fallback wrapper",
          "Automated 429/500 retry logic with exponential backoff",
          "Prompt caching header implementation for long context inputs",
          "Normalized response object logging provider, latency, and cost"
        ]
      },
      learning: {
        resources: [
          {
            title: "OpenRouter Documentation: Model Routing and Fallback Arrays",
            badge: "OFFICIAL DOCS",
            url: "https://openrouter.ai/docs"
          },
          {
            title: "Anthropic API Reference: Prompt Caching and Message Batches",
            badge: "GUIDE",
            url: "https://docs.anthropic.com"
          }
        ]
      },
      conceptGuide: {
        title: "Multi-Model Redundancy and Dynamic Routing",
        overview: "Production AI systems cannot afford single points of failure. Even leading frontier labs experience API outages, network congestion, and sudden latency spikes. Multi-model routing addresses this vulnerability by treating language models as interchangeable commodity compute nodes behind a resilient gateway. By configuring automated fallback cascades and dynamic model routing, engineers ensure unbroken operational continuity: if a flagship model experiences throttling, the system seamlessly downgrades to an available alternate model without interrupting user workflows.",
        keyPoints: [
          {
            lead: "Unbroken Service Uptime",
            text: "Insulate critical automations from third-party vendor downtime through automated, sub-second failover cascades."
          },
          {
            lead: "Granular Cost Arbitrage",
            text: "Route routine, high-volume tasks to lightweight models while reserving expensive frontier reasoning for ambiguous edge cases."
          },
          {
            lead: "Provider Independence",
            text: "Standardize on unified gateway schemas to prevent codebase lock-in to proprietary SDKs and vendor-specific syntax."
          }
        ]
      }
    },

    // Node 6
    {
      id: "step-6",
      stepNumber: 6,
      phaseId: "phase-2",
      title: "Strict JSON Schema & Structured Data Extraction",
      timeEstimate: "1.5 hours",
      difficulty: "Intermediate",
      summary: "Force LLMs to produce 100% compliant, strongly-typed JSON payloads using OpenAI Structured Outputs and Zod to eliminate parsing crashes.",
      description: "Nothing crashes an automation faster than an LLM responding with conversational preamble ('Here is your JSON:') or omitting a required closing bracket. Structured Outputs eliminate this vulnerability by constraining the model's token decoding grammar directly against a JSON Schema. By pairing OpenAI Structured Outputs or libraries like Instructor with Zod, you achieve 100% deterministic type safety, ensuring downstream database writers and API connectors never fail.",
      playbook: {
        setup: "Install Zod (for TypeScript/Node) or Pydantic (for Python). Define your strict data schema with explicit field types, enums, and field descriptions.",
        execute: "Submit an unstructured input (e.g., a messy email or raw sales call transcript) to OpenAI or Claude, setting `response_format: { type: 'json_schema', json_schema: { strict: true, schema: ... } }`.",
        verify: "Run 50 automated test runs on malformed, incomplete, and adversarial inputs. Confirm that every single response parses cleanly into your typed schema with zero schema errors."
      },
      tools: [
        {
          name: "OpenAI Structured Outputs",
          type: "Paid",
          url: "https://platform.openai.com/docs/guides/structured-outputs",
          description: "Constrained decoding feature guaranteeing 100% adherence to supplied JSON Schemas with strict type safety.",
          bestFor: "Guaranteed JSON schema adherence"
        },
        {
          name: "Zod",
          type: "Free",
          url: "https://zod.dev",
          description: "TypeScript-first schema declaration and runtime validation library with static type inference.",
          bestFor: "Runtime schema validation & TypeScript typing"
        },
        {
          name: "Instructor",
          type: "Free",
          url: "https://python.useinstructor.com",
          description: "Lightweight library built on Pydantic for structured data extraction, automatic retries, and field validation.",
          bestFor: "Pydantic structured output extraction"
        }
      ],
      callouts: {
        mistake: "Relying on system prompt instructions like 'Respond only with JSON' instead of using native schema-constrained decoding.",
        proTip: "Add rich `.describe(...)` annotations to Zod/Pydantic fields; LLMs use these descriptions as in-context instructions for that specific key.",
        mistakes: [
          "Using regular expressions to strip backticks (```json) from model outputs instead of using formal constrained decoding.",
          "Marking every schema property as optional (`z.string().optional()`), leading to silent null errors in downstream database logic.",
          "Creating overly deep nested object schemas (5+ levels), causing models to exhaust token limits during generation."
        ],
        proTips: [
          "Use `z.enum([...])` to restrict categorical outputs to valid database status values (e.g., 'pending' | 'approved' | 'rejected').",
          "Leverage Instructor's automatic retry loops: if a Pydantic validator throws an error, it passes the validation message back to the LLM to self-correct.",
          "Keep boolean flags and confidence scores (0.0 to 1.0) in your schema to allow downstream logic to trigger human review when confidence is low."
        ]
      },
      promptLab: {
        recommendedModel: "OpenAI GPT-4o / Claude 3.7 Sonnet",
        variables: [
          {
            id: "schemaDomain",
            label: "Extraction Domain",
            options: [
              "B2B Sales Call Transcript -> Deal Intelligence",
              "Medical Record / Clinic Notes -> Diagnostic Summary",
              "Financial Invoice / Receipt -> Line-Item Audit",
              "Technical Support Ticket -> Root Cause Analysis"
            ],
            defaultOption: "B2B Sales Call Transcript -> Deal Intelligence"
          },
          {
            id: "framework",
            label: "Validation Framework",
            options: [
              "Zod (TypeScript / Node.js)",
              "Pydantic V2 / Instructor (Python)",
              "Native JSON Schema (Strict: true)"
            ],
            defaultOption: "Zod (TypeScript / Node.js)"
          },
          {
            id: "resilienceStrategy",
            label: "Fallback & Self-Correction",
            options: [
              "Automatic Schema Retry with Error Feedback",
              "Default Safe Mock Envelope",
              "Escalate to Dead-Letter Queue"
            ],
            defaultOption: "Automatic Schema Retry with Error Feedback"
          }
        ],
        template: "Act as a Principal Software Engineer and Data Architect. Build a production-grade structured data extraction module for [schemaDomain] using [framework] with [resilienceStrategy].\n\nDeliver the following:\n1. Strict Schema Definition: Author the complete schema with descriptive field annotations, enums for categorical states, and validation rules (e.g., regex for emails, min/max for scores).\n2. API Invocation Code: Show the exact API call enabling strict schema enforcement (`strict: true` or Instructor client).\n3. Runtime Validation & Self-Healing: Implement error catching that captures any parsing anomaly and provides the exact error message back to the LLM for self-correction.\n4. Concrete Test Cases: Provide a simulated raw input string and the resulting 100% compliant JSON output.",
        expectedOutputs: [
          "Exhaustive Zod/Pydantic schema with descriptive field metadata and enums",
          "Production API calling pattern enforcing strict JSON schema mode",
          "Automated self-healing retry mechanism on validation failure",
          "Formatted sample JSON payload matching the target schema"
        ]
      },
      learning: {
        resources: [
          {
            title: "OpenAI Documentation: Guide to Structured Outputs",
            badge: "OFFICIAL DOCS",
            url: "https://platform.openai.com/docs/guides/structured-outputs"
          },
          {
            title: "Zod Documentation: TypeScript-First Schema Validation",
            badge: "GUIDE",
            url: "https://zod.dev"
          }
        ]
      },
      conceptGuide: {
        title: "Guaranteed Determinism with Schema-Constrained Decoding",
        overview: "For years, integrating language models into automated software was plagued by output formatting instability. Prompting techniques like 'Return valid JSON only' reduced failures but could never eliminate them because standard autoregressive sampling inherently permits rogue tokens. Structured Outputs resolve this at the inference engine level using grammar-constrained decoding. By compiling a JSON Schema into a finite state machine, the sampler physically masks out any tokens that would violate the schema syntax, mathematically guaranteeing that the generated text parses cleanly into downstream software systems.",
        keyPoints: [
          {
            lead: "Grammar-Constrained Sampling",
            text: "Tokens that violate the JSON syntax or schema rules are dynamically masked out during generation, guaranteeing 100% valid structure."
          },
          {
            lead: "End-to-End Type Safety",
            text: "Generate TypeScript types directly from validation schemas to catch property access bugs at compile time rather than during runtime."
          },
          {
            lead: "Descriptive Schema Prompting",
            text: "Field-level descriptions embedded inside schemas act as localized system prompts, giving models precise guidance for each property."
          }
        ]
      }
    },

    // Node 7
    {
      id: "step-7",
      stepNumber: 7,
      phaseId: "phase-2",
      title: "Automated Web Scraping & LLM-Ready Ingestion",
      timeEstimate: "1.5 hours",
      difficulty: "Intermediate",
      summary: "Transform dynamic, JavaScript-heavy web pages, documents, and news feeds into clean Markdown for real-time AI analysis.",
      description: "The open web contains the freshest intelligence, but raw HTML is filled with advertising scripts, CSS stylesheets, navigation footers, and cookie banners that exhaust LLM context windows. Modern scraping tools like Firecrawl, Apify, and Jina Reader strip out boilerplate noise and convert dynamic, rendered single-page applications into clean, token-efficient Markdown, enabling automated pipelines to extract competitor pricing, market trends, and research papers on autopilot.",
      playbook: {
        setup: "Sign up for Firecrawl or Apify. Configure an API key and install the SDK in your workflow environment or n8n instance.",
        execute: "Execute a scrape or crawl command on a target web page (e.g., competitor pricing page or documentation site). Pass parameters to bypass bot detection, wait for dynamic client-side rendering, and strip navigation headers.",
        verify: "Inspect the returned payload. Verify it contains clean Markdown with preserved tabular data, zero raw HTML tags, and token consumption reduced by at least 80% compared to raw source HTML."
      },
      tools: [
        {
          name: "Firecrawl",
          type: "Freemium",
          url: "https://www.firecrawl.dev",
          description: "API service that turns entire websites into clean Markdown or structured JSON for LLM applications.",
          bestFor: "Clean Markdown web scraping & crawling"
        },
        {
          name: "Apify",
          type: "Freemium",
          url: "https://apify.com",
          description: "Cloud web scraping platform with pre-built Actors for extracting data from Google Maps, LinkedIn, and social media.",
          bestFor: "Pre-built web scraping Actors & proxies"
        },
        {
          name: "Jina Reader",
          type: "Freemium",
          url: "https://jina.ai/reader",
          description: "Simple API prefix (`r.jina.ai/https://...`) converting any web URL into LLM-friendly Markdown instantly.",
          bestFor: "Instant zero-config URL-to-Markdown conversion"
        }
      ],
      callouts: {
        mistake: "Passing raw HTML markup directly into an LLM prompt, wasting 90% of your context window on useless stylesheet tags and cookie banners.",
        proTip: "Use Firecrawl's `/map` endpoint to discover all sub-URLs of a domain in 2 seconds before selectively scraping only high-value pages.",
        mistakes: [
          "Failing to handle anti-bot cloud defenses (Cloudflare Turnstile, CAPTCHAs) by using naive fetch requests instead of managed scrapers.",
          "Scraping dynamic React/Vue SPAs without waiting for network idle, resulting in empty root `<div>` elements.",
          "Scraping continuously on a single IP address without residential proxy rotation, leading to sudden HTTP 403 IP bans."
        ],
        proTips: [
          "Prepend `https://r.jina.ai/` to any URL for a quick, zero-dependency Markdown fetch inside standard n8n HTTP Request nodes.",
          "Use CSS selector targeting (e.g., `onlyIncludeTags: ['article', 'main']`) to extract only the core content and skip navigation sidebars entirely.",
          "Cache scraped Markdown in a key-value store with a 24-hour TTL to prevent redundant duplicate scrapes on frequently accessed URLs."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / GPT-4o",
        variables: [
          {
            id: "targetSite",
            label: "Scraping Target",
            options: [
              "Competitor SaaS Pricing & Feature Matrices",
              "Industry News & Research Publications",
              "E-Commerce Product Catalogs & Inventory",
              "Technical Documentation Portals"
            ],
            defaultOption: "Competitor SaaS Pricing & Feature Matrices"
          },
          {
            id: "tooling",
            label: "Scraper Implementation",
            options: [
              "Firecrawl API (Node.js / Python)",
              "Apify Actor via Webhook",
              "Jina Reader API Prefix"
            ],
            defaultOption: "Firecrawl API (Node.js / Python)"
          },
          {
            id: "outputFormat",
            label: "Downstream LLM Extraction",
            options: [
              "Normalized JSON Matrix (Tiers, Pricing, Limits)",
              "Bulletized Executive Intelligence Brief",
              "Vector Embedding Chunks with Source Citations"
            ],
            defaultOption: "Normalized JSON Matrix (Tiers, Pricing, Limits)"
          }
        ],
        template: "Act as an AI Web Scraping and Data Ingestion Engineer. Write an automated pipeline in TypeScript/Python that extracts [targetSite] using [tooling] and parses it into [outputFormat].\n\nDeliver the following:\n1. Scraper Configuration: Show the complete API request including bot-bypass headers, JavaScript rendering wait states, and tag-filtering rules.\n2. Markdown Sanitization: Clean up any residual markdown noise (tracking pixels, boilerplate copyright notices, social share links).\n3. LLM Structured Extraction Prompt: Supply the extraction prompt and schema that digests the sanitized Markdown and extracts the key entities.\n4. Rate Limit & Proxy Safeguards: Implement retry logic handling HTTP 403 (blocked) and 429 (rate limited) responses.",
        expectedOutputs: [
          "Complete scraper execution script with rendering wait states",
          "Markdown sanitization utility stripping boilerplate text",
          "LLM extraction prompt outputting strongly-typed JSON data",
          "Proxy and rate limit retry handler with backoff"
        ]
      },
      learning: {
        resources: [
          {
            title: "Firecrawl Documentation: Crawl, Scrape and Map Endpoints",
            badge: "OFFICIAL DOCS",
            url: "https://docs.firecrawl.dev"
          },
          {
            title: "Apify Documentation: Running Actors and Webhook Integration",
            badge: "GUIDE",
            url: "https://docs.apify.com"
          }
        ]
      },
      conceptGuide: {
        title: "LLM-Ready Ingestion: Turning the Web into High-Density Context",
        overview: "The effectiveness of any downstream AI analysis is constrained by the quality and signal-to-noise ratio of its input data. Raw HTML pages are notoriously noisy, with up to 90% of their bytes comprised of CSS classes, tracking scripts, and navigation structures. Passing uncleaned HTML into language models not only inflates token bills but also degrades reasoning accuracy as the model struggles through boilerplate noise. Modern scraping infrastructure transforms dynamic web pages into pristine Markdown, preserving semantic headers and tables while discarding clutter.",
        keyPoints: [
          {
            lead: "Signal-to-Noise Maximization",
            text: "Strip boilerplate markup to reduce token consumption by up to 85% while drastically improving LLM extraction accuracy."
          },
          {
            lead: "Headless JS Execution",
            text: "Utilize managed headless browser runtimes that execute client-side JavaScript before extracting DOM snapshots."
          },
          {
            lead: "Structured Semantic Preservation",
            text: "Retain hierarchical markdown headers (`#`, `##`) and markdown tables to maintain structural context for downstream reasoning."
          }
        ]
      }
    },

    // Node 8
    {
      id: "step-8",
      stepNumber: 8,
      phaseId: "phase-2",
      title: "Vector Databases & RAG Memory Architecture",
      timeEstimate: "2 hours",
      difficulty: "Advanced",
      summary: "Implement semantic chunking, dense vector embeddings, and hybrid keyword + vector retrieval to ground automations in private company data.",
      description: "Automation pipelines that lack internal memory are doomed to hallucinate or provide generic answers. Retrieval-Augmented Generation (RAG) grounds agent workflows in private knowledge bases, product manuals, and customer records. By chunking documents intelligently, creating high-dimensional embeddings (e.g., text-embedding-3-small), indexing them in vector databases like Supabase pgvector or Pinecone, and applying hybrid reranking, you build agents that reference company data with verifiable citations.",
      playbook: {
        setup: "Provision a Supabase PostgreSQL instance with the `pgvector` extension enabled, or initialize an index in Pinecone with cosine similarity metrics.",
        execute: "Implement a semantic chunking pipeline: split source documents into 500-token chunks with 10% overlap, generate vector embeddings via OpenAI, and store records alongside metadata (document title, author, update timestamp).",
        verify: "Execute a hybrid search query combining full-text search (BM25) and vector similarity, followed by a Cohere Rerank call. Verify the top 3 retrieved chunks match the semantic intent of the query."
      },
      tools: [
        {
          name: "Supabase pgvector",
          type: "Freemium",
          url: "https://supabase.com/modules/vector",
          description: "PostgreSQL extension for storing vector embeddings alongside relational data with SQL queries and Row Level Security.",
          bestFor: "Relational data combined with vector search"
        },
        {
          name: "Pinecone",
          type: "Freemium",
          url: "https://www.pinecone.io",
          description: "Serverless cloud vector database engineered for ultra-fast, high-scale similarity search and live indexing.",
          bestFor: "Serverless scalable vector indexing"
        },
        {
          name: "Cohere",
          type: "Freemium",
          url: "https://cohere.com",
          description: "Industry-leading embedding and reranking models designed to optimize retrieval precision in RAG systems.",
          bestFor: "Semantic reranking & cross-encoder filtering"
        }
      ],
      callouts: {
        mistake: "Using naive character chunking that splits sentences or tables in half, destroying context and producing nonsensical embeddings.",
        proTip: "Always implement a two-stage retrieval pipeline: retrieve the top 20 candidates via hybrid search, then use Cohere Rerank to pass only the top 3 to the LLM.",
        mistakes: [
          "Chunking documents without preserving source metadata (URLs, section headings, document dates), making citations impossible.",
          "Relying solely on vector similarity for queries containing exact keyword matches (such as part numbers, SKUs, or error codes).",
          "Embedding massive 4,000-token chunks that dilute semantic meaning, causing search queries to retrieve irrelevant passages."
        ],
        proTips: [
          "Use Markdown-aware chunking that splits on heading boundaries (`#`, `##`) to ensure sections remain conceptually cohesive.",
          "Index your vectors in Supabase with an HNSW index (`USING hnsw (embedding vector_cosine_ops)`) for lightning-fast queries.",
          "Include a strict instruction in your synthesis prompt: 'If the retrieved context does not contain the answer, reply that you do not have sufficient information.'"
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / GPT-4o",
        variables: [
          {
            id: "ragDomain",
            label: "Knowledge Base Domain",
            options: [
              "Internal Engineering SOPs & Architecture Specs",
              "E-Commerce Product Catalog & Warranty Policies",
              "Legal Contracts & Compliance Regulations",
              "Medical Protocols & Clinical Trials"
            ],
            defaultOption: "Internal Engineering SOPs & Architecture Specs"
          },
          {
            id: "vectorDb",
            label: "Vector Store",
            options: [
              "Supabase pgvector (PostgreSQL)",
              "Pinecone Serverless",
              "Qdrant (Self-Hosted)"
            ],
            defaultOption: "Supabase pgvector (PostgreSQL)"
          },
          {
            id: "reranker",
            label: "Reranking Strategy",
            options: [
              "Cohere Rerank 3.5 API",
              "Reciprocal Rank Fusion (RRF)",
              "Pure Vector Similarity (No Rerank)"
            ],
            defaultOption: "Cohere Rerank 3.5 API"
          }
        ],
        template: "Act as an Enterprise AI Search and RAG Systems Architect. Design a production-grade RAG pipeline for [ragDomain] utilizing [vectorDb] and [reranker].\n\nDeliver the following:\n1. Chunking Strategy & Schema: Define the document pre-processing and chunking rules (token window, overlap, heading awareness) and the vector storage schema.\n2. Hybrid Search Query: Write the SQL/query logic executing both semantic vector cosine search and full-text keyword search in parallel.\n3. Reranking Implementation: Show how the initial search candidates are scored and filtered using [reranker] down to the top 3 context passages.\n4. Grounded Synthesis Prompt: Provide the final system prompt instructing the model to synthesize answers strictly from retrieved context and format inline citations.",
        expectedOutputs: [
          "Markdown/semantic chunking implementation with metadata preservation",
          "SQL or API hybrid search query combining vector and keyword retrieval",
          "Two-stage reranking integration filtering candidates to top relevance",
          "Strictly grounded synthesis system prompt with citation formatting"
        ]
      },
      learning: {
        resources: [
          {
            title: "Supabase Documentation: Vector Search with pgvector",
            badge: "OFFICIAL DOCS",
            url: "https://supabase.com/docs/guides/ai"
          },
          {
            title: "Pinecone Documentation: Serverless Vector Index Architecture",
            badge: "GUIDE",
            url: "https://docs.pinecone.io"
          }
        ]
      },
      conceptGuide: {
        title: "Production RAG: Grounding AI in Verified Enterprise Memory",
        overview: "Large Language Models are static snapshots of public internet data frozen at their training cutoff. Retrieval-Augmented Generation (RAG) overcomes this fundamental limitation by providing models with dynamic, just-in-time access to proprietary enterprise databases. Rather than fine-tuning models on sensitive data, RAG retrieves relevant information chunks at runtime and injects them into the prompt context. Modern production RAG employs hybrid retrieval—combining dense vector embeddings for semantic nuance with sparse keyword search for exact terms—followed by cross-encoder reranking to deliver accurate, hallucination-free answers.",
        keyPoints: [
          {
            lead: "Semantic vs. Keyword Hybrid",
            text: "Combine dense vector similarity for conceptual matches with full-text keyword indices to capture exact technical identifiers and SKUs."
          },
          {
            lead: "Two-Stage Candidate Reranking",
            text: "Retrieve a broad candidate pool of 20-30 documents cheaply, then use cross-encoder reranking to distill the top 3 highest-signal passages."
          },
          {
            lead: "Verifiable Citation Chains",
            text: "Ground every factual assertion in source metadata IDs, enabling human operators to audit the exact document passage referenced by the agent."
          }
        ]
      }
    },

    // Node 9
    {
      id: "step-9",
      stepNumber: 9,
      phaseId: "phase-3",
      title: "Function Calling & External Tool Execution",
      timeEstimate: "2 hours",
      difficulty: "Advanced",
      summary: "Equip LLMs with executable tool definitions, allowing them to autonomously inspect parameters, query databases, and trigger live cloud APIs.",
      description: "An isolated LLM can only generate text; an LLM with function calling can take real-world action. By providing language models with formal tool definitions—including names, descriptions, and JSON Schemas of required arguments—the model autonomously decides when a user request requires external computation. The model emits a structured tool call object, your backend executes the corresponding function (e.g., querying a SQL database, sending an email, or creating a calendar event), and returns the result for synthesis.",
      playbook: {
        setup: "Define tool specifications in Claude or OpenAI format. Create functions with strict input validation for common actions (e.g., `lookup_customer`, `send_slack_message`, `create_linear_issue`).",
        execute: "Pass the tools array into your API call. When the model returns `finish_reason: 'tool_calls'`, extract the function name and JSON arguments, execute the local function handler, and append the `tool_result` message back to the conversation thread.",
        verify: "Test with multi-turn tool calling: Ask the model to perform a multi-step task ('Find customer Alex, check their open tickets, and draft an escalation email'). Verify the model triggers tools sequentially in the correct logical order."
      },
      tools: [
        {
          name: "Claude Tool Use",
          type: "Paid",
          url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use",
          description: "Anthropic's native function calling architecture with support for complex nested schemas and parallel tool dispatch.",
          bestFor: "Complex reasoning & multi-tool coordination"
        },
        {
          name: "Composio",
          type: "Freemium",
          url: "https://composio.dev",
          description: "Tool management platform providing 250+ pre-built, production-authenticated tools (GitHub, Slack, Jira, Gmail) for AI agents.",
          bestFor: "Pre-authenticated SaaS tool integration"
        },
        {
          name: "Arcade AI",
          type: "Freemium",
          url: "https://arcade-ai.com",
          description: "Secure tool execution engine providing user-level OAuth delegation and guardrails for agent actions.",
          bestFor: "User-authorized OAuth tool execution"
        }
      ],
      callouts: {
        mistake: "Writing vague, one-sentence tool descriptions, causing the model to hallucinate incorrect parameter values or call the wrong tool.",
        proTip: "Treat tool descriptions like prompt engineering: include explicit examples of when to call the tool and what format the parameters require.",
        mistakes: [
          "Executing destructive tool calls (like `delete_account` or `process_refund`) without human confirmation or scope verification.",
          "Failing to handle runtime tool errors; if a database query fails, you must return a descriptive error message to the LLM so it can retry.",
          "Passing hundreds of tools to a single model invocation, causing context bloat and decision paralysis."
        ],
        proTips: [
          "Enable parallel tool calling to allow the model to query multiple APIs (e.g., weather + calendar + CRM) in a single round-trip.",
          "Use Composio to eliminate the headache of managing OAuth tokens for tools like GitHub, Google Workspace, and Salesforce.",
          "Keep tool return payloads concise: filter out massive raw JSON envelopes and return only the specific keys the model needs to answer."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / GPT-4o",
        variables: [
          {
            id: "agentRole",
            label: "Agent Mission",
            options: [
              "IT Support & DevOps Incident Resolver",
              "CRM Sales Operations & Pipeline Coordinator",
              "Personal Executive Assistant & Calendar Manager",
              "E-Commerce Order Management & Refund Agent"
            ],
            defaultOption: "IT Support & DevOps Incident Resolver"
          },
          {
            id: "toolSet",
            label: "Active Tool Suite",
            options: [
              "GitHub API + Linear + Datadog Alerts",
              "HubSpot CRM + Stripe API + Slack Bot",
              "Google Calendar + Gmail + Notion Database",
              "Shopify Store Admin + Zendesk Tickets"
            ],
            defaultOption: "GitHub API + Linear + Datadog Alerts"
          },
          {
            id: "safetyLevel",
            label: "Execution Guardrails",
            options: [
              "Safe Read-Only (Unrestricted Querying)",
              "Dry-Run Mode (Preview mutations, require confirmation)",
              "Strict Scoped Permissions (Role-based access)"
            ],
            defaultOption: "Dry-Run Mode (Preview mutations, require confirmation)"
          }
        ],
        template: "Act as a Principal AI Agent Architect. Build a production-grade tool-calling agent loop in TypeScript/Python for [agentRole] equipped with [toolSet] under [safetyLevel].\n\nDeliver the following:\n1. Tool Declarations: Write complete JSON Schema tool definitions for 3 primary actions with detailed descriptions and parameter boundaries.\n2. Autonomous Execution Loop: Implement the multi-turn agent while-loop that receives user intent, dispatches tool calls, captures outputs, and loops until `stop`.\n3. Error Recovery Handler: Show how tool execution errors (e.g., API 404, rate limit) are formatted and fed back to the model for self-correction.\n4. Safety Interceptor: Implement the [safetyLevel] guardrail that intercepts destructive operations before execution.",
        expectedOutputs: [
          "3 fully typed JSON Schema tool definitions with rich descriptions",
          "Production multi-turn while-loop handling tool calls and results",
          "Tool execution error handling feeding error context back to model",
          "Safety interceptor intercepting write actions for user confirmation"
        ]
      },
      learning: {
        resources: [
          {
            title: "Anthropic Documentation: Complete Guide to Claude Tool Use",
            badge: "OFFICIAL DOCS",
            url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use"
          },
          {
            title: "Composio Documentation: Connecting 250+ Tools to AI Agents",
            badge: "GUIDE",
            url: "https://docs.composio.dev"
          }
        ]
      },
      conceptGuide: {
        title: "Function Calling: Bridging Neural Reasoning with Real-World Action",
        overview: "Language models are inherently isolated computation engines: they take tokens as input and generate tokens as output. Function calling breaks this digital isolation by providing the model with a standardized API interface to external systems. When presented with well-documented tool schemas, modern models demonstrate emergent planning capabilities, determining which tools to invoke, in what sequence, and with what parameters. By orchestrating tool execution loops with robust error feedback, developers transform passive text generators into active autonomous agents capable of operating software.",
        keyPoints: [
          {
            lead: "Autonomous Tool Selection",
            text: "Frontier models evaluate user intent against tool descriptions to intelligently select the appropriate function without hardcoded conditional rules."
          },
          {
            lead: "Structured Parameter Emission",
            text: "Models extract and coerce unstructured conversational parameters into typed JSON arguments matching the target API schema."
          },
          {
            lead: "Iterative Multi-Turn Execution",
            text: "Feed function execution outputs back into the model context to enable chained multi-step reasoning and self-directed problem resolution."
          }
        ]
      }
    },

    // Node 10
    {
      id: "step-10",
      stepNumber: 10,
      phaseId: "phase-3",
      title: "Model Context Protocol (MCP) Server Integration",
      timeEstimate: "2 hours",
      difficulty: "Advanced",
      summary: "Standardize agent-to-tool connections using the open Model Context Protocol to access local files, Postgres, and SaaS tools securely.",
      description: "Before the Model Context Protocol (MCP), connecting an AI agent to a new data source required writing custom glue code for every model and platform. Developed by Anthropic as an open standard, MCP provides a universal protocol for connecting AI assistants and agents to external data sources, developer tools, and enterprise databases. By creating or connecting to MCP servers, your agents gain immediate, standardized access to local filesystems, GitHub repositories, PostgreSQL databases, and web search engines.",
      playbook: {
        setup: "Install the MCP CLI and explore community MCP servers on Smithery or GitHub. Verify your local runtime environment has Node.js and Python available.",
        execute: "Configure an MCP client (such as Claude Desktop or Cursor) to connect to standard MCP servers: `@modelcontextprotocol/server-filesystem` and `@modelcontextprotocol/server-postgres` using JSON configuration files.",
        verify: "Ask your MCP-connected assistant to inspect a local folder, query a live Postgres database, and summarize recent git commits. Confirm the agent discovers tools dynamically via the MCP handshake."
      },
      tools: [
        {
          name: "Anthropic MCP",
          type: "Free",
          url: "https://modelcontextprotocol.io",
          description: "Open protocol standardizing how applications provide context and tools to LLMs safely and securely.",
          bestFor: "Standardized agent-to-tool protocol specification"
        },
        {
          name: "Smithery",
          type: "Freemium",
          url: "https://smithery.ai",
          description: "Registry and discovery platform for finding, installing, and deploying Model Context Protocol servers.",
          bestFor: "MCP server discovery & one-click installation"
        },
        {
          name: "Cursor",
          type: "Freemium",
          url: "https://www.cursor.com",
          description: "AI-native code editor with native support for configuring and connecting custom MCP servers.",
          bestFor: "IDE-based MCP server execution"
        }
      ],
      callouts: {
        mistake: "Granting an MCP filesystem server unrestricted root access (`/`) instead of scoping it strictly to a sandboxed project directory.",
        proTip: "Use stdio transport for local development and SSE (Server-Sent Events) transport when deploying MCP servers to remote cloud containers.",
        mistakes: [
          "Exposing sensitive database connection strings in unencrypted client configuration files.",
          "Building custom one-off tool integrations when an established, community-maintained MCP server already exists.",
          "Failing to handle MCP server crashes gracefully, causing the client assistant session to hang indefinitely."
        ],
        proTips: [
          "Explore the Smithery CLI (`npx -y @smithery/cli install ...`) to auto-install MCP servers with validated configs.",
          "Author custom MCP servers using the official TypeScript or Python SDK to expose proprietary internal APIs to your entire team.",
          "Use MCP Prompts and Resources features in addition to Tools to feed standard templates and documentation directly into the model context."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / Cursor Agent",
        variables: [
          {
            id: "mcpUseCases",
            label: "MCP Integration Focus",
            options: [
              "Local Filesystem & Git Operations",
              "Production PostgreSQL & Redis Database Access",
              "Cloud Infrastructure (AWS / Cloudflare) Management",
              "Internal Custom Enterprise REST API Server"
            ],
            defaultOption: "Production PostgreSQL & Redis Database Access"
          },
          {
            id: "transportMode",
            label: "Transport Protocol",
            options: [
              "stdio (Standard Input/Output for Local CLI/Desktop)",
              "SSE (Server-Sent Events over HTTP for Cloud Hosting)",
              "WebSocket (Bi-directional real-time)"
            ],
            defaultOption: "stdio (Standard Input/Output for Local CLI/Desktop)"
          },
          {
            id: "sdkLanguage",
            label: "Server Implementation Language",
            options: [
              "TypeScript (@modelcontextprotocol/sdk)",
              "Python (mcp SDK / FastMCP)",
              "Go"
            ],
            defaultOption: "TypeScript (@modelcontextprotocol/sdk)"
          }
        ],
        template: "Act as a Distributed Systems and AI Protocol Engineer. Build a custom Model Context Protocol (MCP) Server for [mcpUseCases] using [sdkLanguage] over [transportMode].\n\nDeliver the following:\n1. Server Architecture & Initialization: Write the complete server entry point importing the official SDK and registering server metadata.\n2. Tool & Resource Registration: Define 2 distinct tools (e.g., query_data, explain_schema) with strict Zod/Pydantic schemas and comprehensive documentation.\n3. Secure Execution Logic: Implement the tool execution handlers with proper credential handling and connection pooling.\n4. Client Configuration Block: Provide the exact JSON configuration block to connect this server to Claude Desktop or Cursor.",
        expectedOutputs: [
          "Complete MCP server codebase using the official SDK",
          "Registered tools with comprehensive JSON Schema parameter types",
          "Secure execution logic with error handling and resource cleanup",
          "claude_desktop_config.json configuration snippet for instant connection"
        ]
      },
      learning: {
        resources: [
          {
            title: "Model Context Protocol: Official Specification and SDKs",
            badge: "OFFICIAL DOCS",
            url: "https://modelcontextprotocol.io"
          },
          {
            title: "Smithery Registry: Explore and Install MCP Servers",
            badge: "GUIDE",
            url: "https://smithery.ai"
          }
        ]
      },
      conceptGuide: {
        title: "The Model Context Protocol: Universal Standards for AI Tooling",
        overview: "Before the Model Context Protocol, the AI ecosystem was fragmented by proprietary integrations: every tool creator had to build bespoke connectors for OpenAI, Anthropic, LangChain, and individual IDEs. MCP acts as the 'USB-C standard for AI', establishing an open, uniform protocol that decouples models from data sources. An MCP server exposes three foundational capabilities: Tools (executable actions), Resources (contextual data files), and Prompts (reusable workflow templates). By adopting MCP, developers write an integration once and allow any compliant client to interact with it seamlessly.",
        keyPoints: [
          {
            lead: "Universal Interoperability",
            text: "Build data integrations once as an MCP server, enabling instant compatibility across Claude Desktop, Cursor, and custom agent runtimes."
          },
          {
            lead: "Three-Tier Protocol Surface",
            text: "Leverage Tools for executable mutations, Resources for contextual document attachments, and Prompts for standardized workflow templates."
          },
          {
            lead: "Secure Sandboxed Boundaries",
            text: "Isolate tool execution behind strict process boundaries, protecting host systems through transport-level permission controls."
          }
        ]
      }
    },

    // Node 11
    {
      id: "step-11",
      stepNumber: 11,
      phaseId: "phase-3",
      title: "Stateful Agent Graphs & Cyclic Workflows",
      timeEstimate: "2.5 hours",
      difficulty: "Advanced",
      summary: "Move beyond linear chains to build stateful multi-step loops where agents plan, reflect, self-correct errors, and persist conversation memory.",
      description: "Simple linear chains (A -> B -> C) fail when faced with complex tasks because real-world problems require iteration and self-correction. Stateful graph frameworks like LangGraph, PydanticAI, and Vercel AI SDK allow you to build cyclic workflows with explicit state machines. Agents can generate a solution, run a code linter or test suite, inspect compiler errors, reflect on their mistakes, and loop back to revise their output until strict acceptance criteria are satisfied.",
      playbook: {
        setup: "Install `@langchain/langgraph` (TypeScript) or `langgraph` (Python). Define a shared State interface representing the conversation history, current plan, and scratchpad data.",
        execute: "Construct a state graph with nodes ('Planner', 'Executor', 'Evaluator') and conditional edges. Implement a reflection loop: if Evaluator detects errors, route back to Executor; otherwise, route to End.",
        verify: "Run an automated test with an intentional bug in the initial input. Confirm the agent detects the failure in the Evaluator node, updates its internal state, and successfully resolves the issue within 3 iteration cycles."
      },
      tools: [
        {
          name: "LangGraph",
          type: "Free",
          url: "https://www.langchain.com/langgraph",
          description: "Graph-based framework for building stateful, multi-actor applications with LLMs featuring cycles and human-in-the-loop controls.",
          bestFor: "Cyclic state machines & multi-agent graphs"
        },
        {
          name: "PydanticAI",
          type: "Free",
          url: "https://ai.pydantic.dev",
          description: "Python agent framework built by the Pydantic team designed for type-safe, production-grade generative AI applications.",
          bestFor: "Type-safe Python agent workflows"
        },
        {
          name: "Vercel AI SDK",
          type: "Free",
          url: "https://sdk.vercel.ai",
          description: "TypeScript toolkit for building streaming AI applications, agent loops, and structured generative interfaces.",
          bestFor: "TypeScript streaming agent loops"
        }
      ],
      callouts: {
        mistake: "Creating cyclic graph loops without hard recursion limits, leading to infinite agent loops that burn hundreds of dollars in API credits.",
        proTip: "Always set `recursion_limit` (e.g., maximum 10 turns) on your graph runtime to forcefully terminate runaway agent execution loops.",
        mistakes: [
          "Failing to persist state checkpoints, making it impossible to resume an interrupted agent workflow.",
          "Over-complicating graph state with dozens of unnecessary variables instead of maintaining a clean, minimal state contract.",
          "Allowing agents to evaluate their own work using the same prompt, leading to sycophantic self-approvals."
        ],
        proTips: [
          "Separate the 'Generator' model from the 'Critic' model: use a distinct system prompt for the evaluation node to ensure rigorous critique.",
          "Use LangGraph's built-in MemorySaver or Postgres checkpointer to enable time-travel debugging and state restoration.",
          "Log state delta transitions after every node execution to easily trace the agent's internal thought progression."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet (Reasoning Mode) / GPT-4o",
        variables: [
          {
            id: "graphArchitecture",
            label: "Agent Graph Topology",
            options: [
              "Plan-and-Execute (Planner -> Worker -> Re-planner)",
              "Generator-Critic Loop (Draft -> Test/Eval -> Revise)",
              "Hierarchical Supervisor (Router -> Specialized Sub-Graphs)"
            ],
            defaultOption: "Generator-Critic Loop (Draft -> Test/Eval -> Revise)"
          },
          {
            id: "framework",
            label: "Graph Framework",
            options: [
              "LangGraph (Python)",
              "LangGraph.js (TypeScript)",
              "PydanticAI (Python)"
            ],
            defaultOption: "LangGraph (Python)"
          },
          {
            id: "taskDomain",
            label: "Task Domain",
            options: [
              "Automated Code Refactoring & Unit Test Verification",
              "Long-Form Technical Research Report Writing",
              "Financial Portfolio Rebalancing & Compliance Check"
            ],
            defaultOption: "Automated Code Refactoring & Unit Test Verification"
          }
        ],
        template: "Act as a Principal AI Systems Architect specializing in stateful agent graphs. Build a production-grade [graphArchitecture] workflow in [framework] for [taskDomain].\n\nDeliver the following:\n1. State Schema Definition: Define the TypedDict/Pydantic State holding messages, iteration count, error logs, and validation flags.\n2. Node Implementations: Write the code for the Generator node, the Evaluator/Tester node, and the conditional router function.\n3. Cyclic Graph Assembly: Wire up nodes and conditional edges using StateGraph, including a strict recursion limit (max 5 cycles).\n4. Checkpointing & Persistence: Show how state is checkpointed in memory or PostgreSQL to allow pausing for human inspection.",
        expectedOutputs: [
          "Complete State schema with typed fields and mutation reducers",
          "Generator and Evaluator node functions with structured prompts",
          "StateGraph wiring with conditional edges and recursion limits",
          "Working checkpointing setup demonstrating state resumption"
        ]
      },
      learning: {
        resources: [
          {
            title: "LangGraph Documentation: Core Concepts and State Graphs",
            badge: "OFFICIAL DOCS",
            url: "https://langchain-ai.github.io/langgraph/"
          },
          {
            title: "PydanticAI Documentation: Fast, Type-Safe Agent Framework",
            badge: "GUIDE",
            url: "https://ai.pydantic.dev"
          }
        ]
      },
      conceptGuide: {
        title: "Stateful Graph Computation: Cycles, Memory and Reflection",
        overview: "Early agent architectures relied on Directed Acyclic Graphs (DAGs) where execution flowed strictly in one forward direction. While adequate for deterministic pipelines, linear flows struggle with complex problem-solving where initial outputs require testing, critique, and revision. Stateful cyclic graphs treat agent workflows as finite state machines with memory checkpoints. By persisting a centralized state object across computational cycles, agents can iteratively execute actions, observe environment feedback, evaluate results against constraints, and loop back to self-correct until the goal is achieved.",
        keyPoints: [
          {
            lead: "Cyclic Self-Correction",
            text: "Enable loops where agent outputs are subjected to deterministic tests or critic evaluations, triggering iterative revisions upon failure."
          },
          {
            lead: "Centralized State Machine",
            text: "Maintain a single source of truth state dictionary that nodes inspect and update through explicit reducer operations."
          },
          {
            lead: "Resilient Checkpointing",
            text: "Persist state snapshots after every graph step to enable time-travel debugging, failure recovery, and seamless human approval pauses."
          }
        ]
      }
    },

    // Node 12
    {
      id: "step-12",
      stepNumber: 12,
      phaseId: "phase-3",
      title: "Multi-Agent Role Delegation & Crew Systems",
      timeEstimate: "2.5 hours",
      difficulty: "Advanced",
      summary: "Orchestrate autonomous teams of specialized AI agents with discrete personas, delegated tasks, inter-agent debates, and supervisor review.",
      description: "When a single generalist prompt is asked to do research, analysis, copywriting, and quality assurance all at once, quality degrades rapidly. Multi-agent systems solve this by decomposing complex objectives across a team of specialized agents (e.g., Researcher, Data Analyst, Technical Writer, QA Reviewer). Orchestration frameworks like CrewAI and AutoGen coordinate these agents, allowing a Supervisor agent to assign sub-tasks, facilitate inter-agent communication, and enforce quality standards before final delivery.",
      playbook: {
        setup: "Install CrewAI (`pip install crewai crewai-tools`) or AutoGen. Define specialized tools (web search, scraper, file writer) to assign to specific roles.",
        execute: "Define distinct agent roles with clear goals, backstories, and system constraints. Configure a Crew with hierarchical process management, where a Manager/Supervisor LLM delegates subtasks to worker agents.",
        verify: "Execute a research and report generation mission. Verify the Researcher agent gathers citations, passes data to the Analyst, and the QA agent rejects sub-standard drafts until all quality criteria are met."
      },
      tools: [
        {
          name: "CrewAI",
          type: "Freemium",
          url: "https://www.crewai.com",
          description: "Framework for orchestrating role-playing autonomous AI agents that collaborate seamlessly on complex tasks.",
          bestFor: "Role-playing collaborative agent crews"
        },
        {
          name: "AutoGen",
          type: "Free",
          url: "https://microsoft.github.io/autogen/",
          description: "Microsoft's multi-agent conversation framework enabling multi-agent collaboration, tool use, and human participation.",
          bestFor: "Multi-agent conversational debate architectures"
        },
        {
          name: "AgentOps",
          type: "Freemium",
          url: "https://www.agentops.ai",
          description: "Observability and monitoring platform designed specifically for multi-agent frameworks like CrewAI and AutoGen.",
          bestFor: "Multi-agent session replay & cost tracking"
        }
      ],
      callouts: {
        mistake: "Allowing agents to chat with each other in unconstrained loops, generating massive token bills with zero task progress.",
        proTip: "Use hierarchical process management with a dedicated Supervisor agent rather than letting agents talk freely in peer-to-peer free-for-alls.",
        mistakes: [
          "Giving every agent access to every tool, increasing cognitive load and causing workers to perform each other's jobs.",
          "Writing vague agent backstories that fail to establish strict quality boundaries and critical standards.",
          "Failing to track token consumption across multi-agent turns, resulting in runaway costs on complex missions."
        ],
        proTips: [
          "Use fast, inexpensive models (like Claude 3.5 Haiku or GPT-4o-mini) for worker agents, reserving flagship models for the Supervisor.",
          "Integrate AgentOps with one line of code (`agentops.init(...)`) to visualize agent communication trees and identify bottlenecks.",
          "Set `memory=True` and `cache=True` on CrewAI tasks to avoid redundant tool executions across agents."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / GPT-4o",
        variables: [
          {
            id: "crewMission",
            label: "Crew Mission Objective",
            options: [
              "Competitive Intelligence & Market Teardown Report",
              "Automated Security Vulnerability Audit & Patch Drafting",
              "B2B Account-Based Marketing Content Engine",
              "Due Diligence Financial Analysis on Public Companies"
            ],
            defaultOption: "Competitive Intelligence & Market Teardown Report"
          },
          {
            id: "framework",
            label: "Multi-Agent Orchestrator",
            options: [
              "CrewAI (Hierarchical Manager Process)",
              "Microsoft AutoGen (GroupChat)",
              "LangGraph Multi-Agent Team"
            ],
            defaultOption: "CrewAI (Hierarchical Manager Process)"
          },
          {
            id: "delegationPolicy",
            label: "Supervision & Review Policy",
            options: [
              "Hierarchical (Supervisor delegates and enforces quality)",
              "Sequential Pipeline (Hand-off down the line)",
              "Consensus Debate (Agents vote on final output)"
            ],
            defaultOption: "Hierarchical (Supervisor delegates and enforces quality)"
          }
        ],
        template: "Act as a Principal Multi-Agent Systems Architect. Design a production-grade multi-agent squad using [framework] to execute: [crewMission] with a [delegationPolicy] structure.\n\nDeliver the following:\n1. Agent Role Architectures: Define 3 distinct specialized agents (Role, Goal, Backstory, and assigned Tool permissions).\n2. Task Contracts: Write explicit task descriptions, expected outputs, and dependencies for each stage.\n3. Crew Assembly Code: Provide the complete Python setup wiring agents, tasks, process mode, and memory caching.\n4. Observability & Guardrails: Add token usage tracking and maximum iteration guardrails to prevent infinite conversation loops.",
        expectedOutputs: [
          "3 detailed agent definitions with distinct roles, goals, and backstories",
          "Structured task specifications with clear dependencies and deliverables",
          "Complete CrewAI/AutoGen assembly script with hierarchical supervisor",
          "Cost and iteration limits preventing runaway agent loops"
        ]
      },
      learning: {
        resources: [
          {
            title: "CrewAI Documentation: Processes, Agents and Hierarchical Teams",
            badge: "OFFICIAL DOCS",
            url: "https://docs.crewai.com"
          },
          {
            title: "AutoGen Documentation: Multi-Agent Conversations and Workflows",
            badge: "GUIDE",
            url: "https://microsoft.github.io/autogen/"
          }
        ]
      },
      conceptGuide: {
        title: "Multi-Agent Systems: Division of Labor in Generative AI",
        overview: "Human organizations do not assign one generalist employee to handle legal compliance, software development, sales, and marketing simultaneously; specialization creates efficiency. Multi-agent architecture applies this fundamental organizational principle to AI systems. By constraining individual agents to specific personas, explicit goals, and tailored toolsets, each agent performs at peak capability. A coordinating supervisor delegates work, critiques intermediate outputs, and synthesizes contributions into a cohesive final deliverable, achieving levels of quality unachievable by a single prompt.",
        keyPoints: [
          {
            lead: "Contextual Specialization",
            text: "Narrow the scope of individual agents to dedicated roles, eliminating context pollution and conflicting instructions."
          },
          {
            lead: "Hierarchical Supervision",
            text: "Implement a manager agent that delegates sub-tasks, validates deliverables, and requests revisions before finalizing output."
          },
          {
            lead: "Tool Scoping & Sandboxing",
            text: "Assign tools strictly to the agents that require them, preventing unintended side-effects and erroneous actions."
          }
        ]
      }
    },

    // Node 13
    {
      id: "step-13",
      stepNumber: 13,
      phaseId: "phase-4",
      title: "Real-Time Conversational AI Voice & Phone Agents",
      timeEstimate: "2 hours",
      difficulty: "Advanced",
      summary: "Deploy sub-500ms latency voice agents with natural interruption handling, dynamic live tool calls, and automated phone routing.",
      description: "Voice is the most natural human interface, but traditional IVR phone trees are universally despised. Next-generation conversational voice engines like Vapi and ElevenLabs Conversational AI achieve full-duplex conversational latency under 500ms—faster than human conversational pause thresholds. By pairing ultrafast speech-to-text (Deepgram), streaming frontier LLMs, and real-time voice synthesis with telephony backends like Twilio, developers can build voice bots that answer inbound phone calls, schedule appointments, handle customer support, and book meetings on live calendars.",
      playbook: {
        setup: "Create a Vapi account and purchase or import a Twilio phone number. Configure speech-to-text (Deepgram Nova-2) and text-to-speech (ElevenLabs Turbo v2.5) providers.",
        execute: "Configure the voice assistant: Author a concise conversational system prompt (avoiding markdown or bullet points that sound awkward when spoken), enable natural interruption handling (barge-in), and attach a calendar scheduling tool call.",
        verify: "Call the phone number from a mobile phone. Engage in natural conversation, interrupt the bot mid-sentence to test barge-in responsiveness, and confirm the calendar booking tool triggers successfully."
      },
      tools: [
        {
          name: "Vapi",
          type: "Freemium",
          url: "https://vapi.ai",
          description: "Developer platform for building, testing, and deploying real-time conversational voice agents with sub-500ms latency.",
          bestFor: "Real-time voice agent orchestration & telephony"
        },
        {
          name: "ElevenLabs Conversational AI",
          type: "Freemium",
          url: "https://elevenlabs.io/conversational-ai",
          description: "End-to-end voice agent platform combining low-latency voice cloning, conversational intelligence, and web/phone deployment.",
          bestFor: "Hyper-realistic voice synthesis & low-latency dialogue"
        },
        {
          name: "Twilio",
          type: "Paid",
          url: "https://www.twilio.com",
          description: "Global cloud communications platform providing phone numbers, SIP trunking, and programmable voice routing.",
          bestFor: "Telephony infrastructure & phone number provisioning"
        }
      ],
      callouts: {
        mistake: "Writing voice agent system prompts with markdown symbols, asterisks, URLs, or bullet points, causing the TTS model to speak 'asterisk asterisk' aloud.",
        proTip: "Keep system instructions strictly formatted for spoken audio: use short sentences, natural filler pauses, and phonetic spellings for unusual brand names.",
        mistakes: [
          "Setting voice latency thresholds too high (>1,000ms), making the conversation feel sluggish and unnatural.",
          "Disabling interruption handling (barge-in), forcing callers to listen to long monologues without being able to interject.",
          "Running slow external tool calls synchronously during the voice call without speaking an audio filler phrase like 'Let me check that on your account...'"
        ],
        proTips: [
          "Configure immediate filler audio cues ('One second, looking that up...') while executing backend API tool calls over 500ms.",
          "Use Deepgram Nova-2 for speech-to-text to achieve transcription latencies under 150ms.",
          "Set up call recording and sentiment analysis webhooks to automatically log call summaries and action items into your CRM."
        ]
      },
      promptLab: {
        recommendedModel: "GPT-4o (Realtime) / Claude 3.5 Haiku via Vapi",
        variables: [
          {
            id: "voiceRole",
            label: "Voice Agent Role",
            options: [
              "Dental Clinic / Medical Appointment Scheduler",
              "Automotive Dealership Inbound Service Desk",
              "HVAC & Home Services Emergency Dispatcher",
              "B2B SaaS Inbound Qualification & Demo Booker"
            ],
            defaultOption: "Dental Clinic / Medical Appointment Scheduler"
          },
          {
            id: "telephonyProvider",
            label: "Telephony Infrastructure",
            options: [
              "Vapi Native Telephony",
              "Twilio SIP Trunking",
              "WebRTC Browser In-App Voice"
            ],
            defaultOption: "Vapi Native Telephony"
          },
          {
            id: "accentVoice",
            label: "Voice Persona & Tone",
            options: [
              "Warm, Empathetic Female (ElevenLabs Rachel)",
              "Confident, Professional Male (ElevenLabs Adam)",
              "Brisk, Energetic Assistant (ElevenLabs Charlie)"
            ],
            defaultOption: "Warm, Empathetic Female (ElevenLabs Rachel)"
          }
        ],
        template: "Act as an Expert Voice AI and Conversational Telephony Engineer. Design the complete conversational architecture for an inbound [voiceRole] running on [telephonyProvider] featuring [accentVoice].\n\nDeliver the following:\n1. Spoken-Audio Optimized System Prompt: Author a natural, conversational system prompt engineered specifically for voice synthesis (zero markdown, conversational phrasing, phonetic spellings, concise answers <30 words).\n2. Function Calling Specification: Define the `check_availability` and `book_appointment` tool definitions with strict phone-friendly parameters.\n3. Latency & Interruption Configuration: Specify speech-to-text endpointing, barge-in thresholds, and filler response triggers.\n4. Call Fallback & Transfer: Define the automated call escalation rule to transfer to a human staff member upon high frustration or complex medical questions.",
        expectedOutputs: [
          "Conversational system prompt optimized for spoken audio synthesis",
          "Tool calling specifications for real-time calendar booking",
          "Interruption and barge-in latency configuration parameters",
          "Twilio SIP transfer and fallback escalation routine"
        ]
      },
      learning: {
        resources: [
          {
            title: "Vapi Documentation: Quickstart, Latency Tuning, and Telephony",
            badge: "OFFICIAL DOCS",
            url: "https://docs.vapi.ai"
          },
          {
            title: "ElevenLabs Conversational AI: Low-Latency Voice Agent Guide",
            badge: "GUIDE",
            url: "https://elevenlabs.io/docs/conversational-ai"
          }
        ]
      },
      conceptGuide: {
        title: "Sub-500ms Conversational Voice: The Anatomy of Real-Time Audio",
        overview: "Human conversation operates on razor-thin latency margins: any pause longer than 500 milliseconds creates awkward social hesitation. Real-time conversational AI achieves natural flow by orchestrating a sub-second pipeline across three distinct components: Speech-to-Text (STT), Language Model reasoning (LLM), and Text-to-Speech (TTS). Incoming audio is transcribed in streaming chunks (<150ms), piped into an LLM generating initial tokens (<200ms), which are immediately streamed to a low-latency voice synthesis model (<150ms). Enabling full-duplex audio with barge-in ensures callers can interrupt at any moment, creating a truly natural conversation.",
        keyPoints: [
          {
            lead: "The 500ms Latency Budget",
            text: "Distribute latency across streaming STT, fast LLM token emission, and streaming TTS to maintain human-grade conversational pacing."
          },
          {
            lead: "Full-Duplex Interruption (Barge-In)",
            text: "Continuously listen to user microphone audio during bot playback, instantly halting TTS synthesis when user speech is detected."
          },
          {
            lead: "Spoken-Language Prompting",
            text: "Strip written conventions (bullet points, formatting, URLs) from prompts, crafting concise spoken sentences designed for acoustic delivery."
          }
        ]
      }
    },

    // Node 14
    {
      id: "step-14",
      stepNumber: 14,
      phaseId: "phase-4",
      title: "Autonomous Browser & GUI Action Agents",
      timeEstimate: "2 hours",
      difficulty: "Advanced",
      summary: "Automate legacy enterprise portals and walled-garden web applications lacking APIs using vision-augmented browser agents.",
      description: "Countless legacy enterprise applications, government portals, and internal tools lack modern REST APIs or webhook integrations. Autonomous browser agents bridge this gap. Utilizing tools like Browser Use, Stagehand, and Playwright paired with multimodal vision models (GPT-4o / Claude 3.7 Sonnet), these agents interpret live web page DOMs and screenshots, plan click-and-type sequences, solve CAPTCHAs, and execute end-to-end workflows directly inside a real Chromium browser window.",
      playbook: {
        setup: "Install `browser-use` (`pip install browser-use`) and Playwright. Ensure Chromium binaries are installed (`playwright install chromium`).",
        execute: "Write an agent execution script: Initialize an Agent with a high-level goal ('Navigate to portal, log in with credentials from environment, download quarterly invoice PDF, and extract total balance').",
        verify: "Run the agent with `headless=False` to observe live browser execution. Confirm the agent navigates dynamic menus, enters input fields, and handles unexpected modal popups autonomously."
      },
      tools: [
        {
          name: "Browser Use",
          type: "Free",
          url: "https://browser-use.com",
          description: "Open-source framework making websites accessible for AI agents through natural language browser control.",
          bestFor: "Autonomous web navigation & GUI action execution"
        },
        {
          name: "Stagehand",
          type: "Free",
          url: "https://stagehand.dev",
          description: "AI-driven web automation framework by Browserbase with natural language actions (`act`, `extract`, `observe`).",
          bestFor: "Resilient Playwright-based AI browser automation"
        },
        {
          name: "Playwright",
          type: "Free",
          url: "https://playwright.dev",
          description: "Battle-tested headless browser automation library for modern web apps across Chromium, Firefox, and WebKit.",
          bestFor: "Deterministic browser control & element selectors"
        }
      ],
      callouts: {
        mistake: "Relying purely on fragile XPath selectors that break whenever the target website updates its frontend CSS classes.",
        proTip: "Use Stagehand's `act(...)` or Browser-Use's vision DOM grounding, which uses semantic intent rather than hardcoded CSS selectors.",
        mistakes: [
          "Running browser agents on websites with APIs available; browser automation is slower and more resource-intensive than direct HTTP requests.",
          "Failing to implement timeout safety limits, leaving headless Chromium instances running in the background and exhausting server RAM.",
          "Storing plaintext passwords in agent prompt scripts instead of injecting credentials via environment variables."
        ],
        proTips: [
          "Use cloud browser services like Browserbase or Anchor to run browser agents with residential proxies, anti-detect headers, and session recording.",
          "Combine deterministic Playwright scripts for standard navigation with AI vision agents for ambiguous dynamic steps.",
          "Capture full-page screenshots on step failures to inspect the exact DOM state when the agent encountered an issue."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet (Vision Mode) / GPT-4o",
        variables: [
          {
            id: "portalType",
            label: "Target Web Application",
            options: [
              "Legacy ERP / Accounting Portal (No API)",
              "Government Licensing & Permit Filing System",
              "Competitor E-Commerce Checkout & Price Audit",
              "Social Media Ads Manager & Campaign Uploader"
            ],
            defaultOption: "Legacy ERP / Accounting Portal (No API)"
          },
          {
            id: "framework",
            label: "Browser Automation Framework",
            options: [
              "Browser-Use (Python)",
              "Stagehand (TypeScript / Browserbase)",
              "Raw Playwright + Multimodal Vision"
            ],
            defaultOption: "Browser-Use (Python)"
          },
          {
            id: "credentialHandling",
            label: "Authentication Security",
            options: [
              "Environment Variable Injection (Isolated Secrets)",
              "Pre-Authenticated Session Cookies (Saved State)",
              "Interactive Human Login Gateway (2FA Pause)"
            ],
            defaultOption: "Environment Variable Injection (Isolated Secrets)"
          }
        ],
        template: "Act as an Autonomous Web Automation and Browser Systems Engineer. Build a production browser agent for [portalType] using [framework] with [credentialHandling].\n\nDeliver the following:\n1. Agent Initialization & Launch Script: Set up the browser controller with viewport sizing, anti-detection flags, and timeout limits.\n2. Multi-Step Goal Execution: Author the high-level natural language instructions guiding the agent through login, navigation, data extraction, and confirmation.\n3. Modal & Pop-up Handling: Implement resilient logic to detect and dismiss unexpected promotional modals, cookie banners, or alerts.\n4. Extraction & Validation Output: Extract target data into a structured schema and save an audit screenshot verifying successful completion.",
        expectedOutputs: [
          "Complete browser agent script using Browser-Use or Stagehand",
          "Secure credential injection pattern avoiding plaintext exposure",
          "Resilient modal dismissal and error recovery logic",
          "Structured JSON data extraction and visual verification screenshot"
        ]
      },
      learning: {
        resources: [
          {
            title: "Browser Use Documentation: Quickstart and Architecture",
            badge: "OFFICIAL DOCS",
            url: "https://docs.browser-use.com"
          },
          {
            title: "Stagehand Documentation: AI Web Automation Framework",
            badge: "GUIDE",
            url: "https://stagehand.dev"
          }
        ]
      },
      conceptGuide: {
        title: "GUI and Browser Agents: Automating the Un-Automatable",
        overview: "The modern software landscape is bifurcated: cutting-edge platforms offer comprehensive REST and GraphQL APIs, while thousands of mission-critical legacy applications—government databases, ERPs, and banking portals—remain completely isolated behind visual user interfaces. Browser agents bridge this divide by equipping multimodal models with the ability to perceive and manipulate graphical user interfaces like a human user. By converting DOM trees and rendered screenshots into actionable bounding boxes and click coordinates, browser agents unlock automation across the entire web.",
        keyPoints: [
          {
            lead: "Visual & Semantic Grounding",
            text: "Interpret user interfaces visually and structurally, targeting interactive elements by semantic intent rather than fragile CSS selectors."
          },
          {
            lead: "Autonomous Navigation Planning",
            text: "Deconstruct multi-step web tasks into sequential actions: typing, clicking, waiting for network idle, and verifying UI state changes."
          },
          {
            lead: "API-Less Legacy Integration",
            text: "Automate manual data entry and report extraction across legacy portals that will never build dedicated developer APIs."
          }
        ]
      }
    },

    // Node 15
    {
      id: "step-15",
      stepNumber: 15,
      phaseId: "phase-4",
      title: "Human-in-the-Loop (HITL) Approval Gateways",
      timeEstimate: "1.5 hours",
      difficulty: "Intermediate",
      summary: "Safeguard high-stakes agent actions with asynchronous human verification gates via Slack, Discord, or webhooks before execution.",
      description: "Autonomous agents are fast, but unsupervised autonomy on high-stakes operations is an unacceptable business risk. Irreversible actions—such as refunding money, publishing public social posts, sending outbound cold emails, or executing database deletions—must have human oversight. Human-in-the-Loop (HITL) gateways pause the agent execution state, dispatch an interactive approval card with context and draft actions to a team channel (e.g., Slack or Linear), and wait for a human operator to click 'Approve', 'Edit', or 'Reject'.",
      playbook: {
        setup: "Create a Slack App with incoming webhooks and Interactive Components enabled. Configure a backend endpoint to receive Slack Block Kit interaction payloads.",
        execute: "Implement an agent pause gate: When an agent decides to perform a high-stakes action, serialize the proposed action payload, post an interactive Slack Block Kit card with 'Approve' and 'Reject' buttons, and suspend the execution thread.",
        verify: "Click 'Approve' in Slack. Verify the backend receives the interactive webhook payload, validates the user's authorization role, and resumes the agent to complete the database write."
      },
      tools: [
        {
          name: "Slack API",
          type: "Free",
          url: "https://api.slack.com",
          description: "Enterprise messaging platform with interactive Block Kit buttons, modals, and webhooks for team approval workflows.",
          bestFor: "Interactive team approval cards & notifications"
        },
        {
          name: "Discord Webhooks",
          type: "Free",
          url: "https://discord.com/developers/docs/resources/webhook",
          description: "Lightweight, real-time messaging webhooks with embedded cards and button interactions for developer teams.",
          bestFor: "Developer team alerts & quick approval webhooks"
        },
        {
          name: "Linear",
          type: "Freemium",
          url: "https://linear.app",
          description: "Issue tracking platform with rich API and webhook triggers for routing agent escalations to human engineering teams.",
          bestFor: "Escalation ticket creation & issue tracking"
        }
      ],
      callouts: {
        mistake: "Allowing agents to autonomously send external emails or issue refunds without any human oversight during early deployment phases.",
        proTip: "Include an 'Edit before sending' button in your Slack Block Kit card to allow humans to tweak the drafted text without re-running the agent.",
        mistakes: [
          "Failing to authenticate the Slack interaction webhook, allowing anyone who knows the URL to trigger approved agent actions.",
          "Not setting a timeout policy on approvals; if no human responds within 24 hours, the execution state should expire gracefully.",
          "Sending wall-of-text notifications without clear visual diffs showing exactly what the agent plans to change."
        ],
        proTips: [
          "Use LangGraph's `interrupt()` function to pause agent state natively, resuming only when the external approval event is received.",
          "Log the identity of the human approver alongside the completed agent execution for comprehensive enterprise audit compliance.",
          "Establish confidence thresholds: auto-approve actions when model confidence is >0.95, but route to Slack when confidence is between 0.70 and 0.95."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / GPT-4o",
        variables: [
          {
            id: "highStakesAction",
            label: "High-Stakes Operation",
            options: [
              "Stripe Customer Refund (> $250)",
              "Outbound B2B Sales Cold Email Blast",
              "Production Database Schema Migration",
              "Public Social Media Brand Announcement"
            ],
            defaultOption: "Stripe Customer Refund (> $250)"
          },
          {
            id: "notificationPlatform",
            label: "Approval Gateway UI",
            options: [
              "Slack Block Kit Interactive Buttons",
              "Discord Embedded Action Buttons",
              "Linear Triage Ticket Escalation"
            ],
            defaultOption: "Slack Block Kit Interactive Buttons"
          },
          {
            id: "expirationPolicy",
            label: "Timeout Policy",
            options: [
              "Auto-Reject after 24 Hours",
              "Auto-Escalate to Senior Manager",
              "Pause Indefinitely Until Actioned"
            ],
            defaultOption: "Auto-Reject after 24 Hours"
          }
        ],
        template: "Act as an Enterprise Security and AI Workflow Architect. Design an asynchronous Human-in-the-Loop (HITL) approval gateway for [highStakesAction] using [notificationPlatform] with [expirationPolicy].\n\nDeliver the following:\n1. State Serialization & Pause Logic: Show how the agent workflow captures the pending action and safely persists state while waiting for human input.\n2. Interactive Message Payload: Build the complete Slack Block Kit or Discord JSON card with rich formatting, key action context, and 'Approve' / 'Reject' buttons.\n3. Webhook Receiver & Resumption: Write the backend handler that receives the interaction webhook, validates user identity, and resumes the paused workflow.\n4. Audit Trail Logger: Record the event, approver email, timestamp, and final result in a compliant audit log.",
        expectedOutputs: [
          "Workflow pause and state serialization implementation",
          "Production-ready Slack Block Kit JSON interactive payload",
          "Webhook endpoint verifying Slack signatures and resuming execution",
          "Security audit logging function capturing approver identity"
        ]
      },
      learning: {
        resources: [
          {
            title: "Slack API Documentation: Block Kit Interactive Components",
            badge: "OFFICIAL DOCS",
            url: "https://api.slack.com/block-kit"
          },
          {
            title: "LangGraph Human-in-the-Loop Guide: Breakpoints and Approvals",
            badge: "GUIDE",
            url: "https://langchain-ai.github.io/langgraph/how-tos/human-in-the-loop/"
          }
        ]
      },
      conceptGuide: {
        title: "Human-in-the-Loop: Trust and Governance in Autonomous Systems",
        overview: "The pursuit of complete, unconstrained autonomy often overlooks the reality of enterprise risk management. While agents can perform 95% of operational legwork—researching, cross-referencing, and synthesizing actions—the final 5% often carries catastrophic downside risk if incorrect. Human-in-the-Loop (HITL) architecture provides the bridge between human judgment and machine velocity. By designing asynchronous approval checkpoints into agent graphs, organizations empower AI to draft high-stakes work at scale while retaining human authority over irreversible execution.",
        keyPoints: [
          {
            lead: "Asynchronous State Suspension",
            text: "Pause agent execution graphs safely in persistent storage, freeing up server memory while awaiting human response."
          },
          {
            lead: "High-Context Decision Cards",
            text: "Surface relevant decision context, risk scores, and visual diffs directly into team chat tools to enable 5-second human reviews."
          },
          {
            lead: "Compliance & Audit Readiness",
            text: "Maintain an immutable log of who approved which agent action and when, satisfying enterprise regulatory and security standards."
          }
        ]
      }
    },

    // Node 16
    {
      id: "step-16",
      stepNumber: 16,
      phaseId: "phase-4",
      title: "Agent Observability, Cost Guardrails & Evals",
      timeEstimate: "2 hours",
      difficulty: "Advanced",
      summary: "Monitor execution traces, track token latencies and cost spikes, set hard daily API spend limits, and run regression evals on agent tool calls.",
      description: "Deploying AI agents without observability is like shipping code without logs, metrics, or error monitoring. As agents execute multi-turn loops, a single undetected infinite loop or token-bloated system prompt can consume thousands of dollars in hours. Observability platforms like Langfuse, Helicone, and LangSmith capture full execution traces: every LLM prompt, completion, tool call, token cost, and latency breakdown. Combining this telemetry with automated evaluation suites ensures your agents stay cost-effective and accurate as models evolve.",
      playbook: {
        setup: "Create an account on Langfuse or Helicone. Configure their proxy or tracing SDK by initializing environment variables in your application runtime.",
        execute: "Instrument your agent pipeline: Wrap LLM and tool calls with span decorators, log user session IDs, track cost in USD, and set hard daily spend guardrails (e.g., terminate after $50/day).",
        verify: "Trigger a complex multi-step agent run. Open the Langfuse dashboard, inspect the full trace tree with nested tool spans, verify token costs match billing expectations, and run an automated evaluation check."
      },
      tools: [
        {
          name: "Langfuse",
          type: "Freemium",
          url: "https://langfuse.com",
          description: "Open-source LLM engineering platform offering detailed tracing, prompt management, cost tracking, and evaluation metrics.",
          bestFor: "Full execution tracing & cost observability"
        },
        {
          name: "Helicone",
          type: "Freemium",
          url: "https://www.helicone.ai",
          description: "LLM observability proxy with sub-millisecond overhead, automated caching, user rate-limiting, and cost analytics.",
          bestFor: "Zero-latency proxy caching & rate limiting"
        },
        {
          name: "LangSmith",
          type: "Freemium",
          url: "https://www.langchain.com/langsmith",
          description: "Enterprise platform for debugging, testing, evaluating, and monitoring LangChain and custom LLM applications.",
          bestFor: "Regression evaluation testing & dataset curation"
        }
      ],
      callouts: {
        mistake: "Failing to set hard API budget limits in provider dashboards, waking up to a $2,000 invoice caused by an overnight infinite loop.",
        proTip: "Instrument Langfuse user-level tagging to track which specific customers or internal users consume the highest percentage of your AI budget.",
        mistakes: [
          "Deploying agent updates without running regression eval datasets, causing subtle prompt changes to break existing tool calling.",
          "Logging unredacted customer PII (credit cards, passwords) directly into plain-text tracing databases.",
          "Ignoring latency bottlenecks across multi-step chains, leading to poor user experience without identifying which tool caused the delay."
        ],
        proTips: [
          "Set up automated Slack alerts in Langfuse triggered when any single agent execution exceeds 15,000 tokens or costs >$0.50.",
          "Use Helicone's semantic cache to serve cached completions for identical queries, saving up to 40% on production API bills.",
          "Build an automated evaluation pipeline that runs 50 synthetic test cases against your agent before merging pull requests to main."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / GPT-4o",
        variables: [
          {
            id: "platform",
            label: "Observability Platform",
            options: [
              "Langfuse (Open-Source / Cloud)",
              "Helicone (API Proxy Gateway)",
              "LangSmith (Enterprise Tracing)"
            ],
            defaultOption: "Langfuse (Open-Source / Cloud)"
          },
          {
            id: "guardrailType",
            label: "Guardrail Policy",
            options: [
              "Hard Token & Cost Ceiling ($2.00 max per run)",
              "Loop Detection (Max 8 recurring identical tool calls)",
              "Latency Threshold (Abort if total run > 45 seconds)"
            ],
            defaultOption: "Hard Token & Cost Ceiling ($2.00 max per run)"
          },
          {
            id: "evalMetric",
            label: "Automated Evaluation Metric",
            options: [
              "Tool Call Accuracy & Parameter Validity",
              "Hallucination & Groundedness Score",
              "Conciseness & Tone Adherence"
            ],
            defaultOption: "Tool Call Accuracy & Parameter Validity"
          }
        ],
        template: "Act as a Principal MLOps and AI Reliability Engineer. Design a complete observability, cost guardrail, and evaluation system in TypeScript/Python using [platform] with [guardrailType] and [evalMetric].\n\nDeliver the following:\n1. SDK Instrumentation: Write the tracing integration wrapping your agent's LLM calls, tool dispatches, and intermediate state transitions.\n2. Cost & Loop Circuit Breaker: Implement runtime guardrail logic that tracks accumulated token spend in real time and throws a circuit-breaker exception when [guardrailType] is violated.\n3. Automated Evaluation Suite: Write an evaluation test script that runs a test dataset of 10 prompts against the agent and scores [evalMetric] automatically.\n4. Production Alerting Hook: Configure an alert dispatch notifying engineering teams via webhook when failure rates or cost spikes exceed normal thresholds.",
        expectedOutputs: [
          "Complete Langfuse/Helicone tracing integration code",
          "Real-time circuit-breaker aborting runaway agent runs",
          "Automated evaluation script scoring tool call precision",
          "Production threshold alerting webhook payload"
        ]
      },
      learning: {
        resources: [
          {
            title: "Langfuse Documentation: Tracing, Metrics, and Evaluation",
            badge: "OFFICIAL DOCS",
            url: "https://langfuse.com/docs"
          },
          {
            title: "Helicone Documentation: LLM Observability and Cost Management",
            badge: "GUIDE",
            url: "https://docs.helicone.ai"
          }
        ]
      },
      conceptGuide: {
        title: "Observability and Evals: Engineering Dependable AI Systems",
        overview: "In traditional software, deterministic unit tests and runtime APM logs guarantee predictable performance. In generative AI and autonomous agent systems, non-deterministic reasoning introduces new failure modes: subtle hallucination drift, cascading tool-calling errors, and silent cost explosions. Managing agents in production requires full-stack observability. By capturing granular traces of every thought, prompt, and tool execution, teams can pinpoint latency bottlenecks, enforce hard spend guardrails, and run automated regression evals, transforming experimental prototypes into rock-solid enterprise infrastructure.",
        keyPoints: [
          {
            lead: "End-to-End Execution Tracing",
            text: "Capture full hierarchical spans detailing every prompt, token count, latency delay, and tool response across multi-turn runs."
          },
          {
            lead: "Circuit Breakers & Spend Limits",
            text: "Enforce hard token and financial guardrails at the runtime level to proactively prevent runaway loops and runaway invoices."
          },
          {
            lead: "Continuous Regression Evals",
            text: "Subject agent prompts and tool definitions to automated benchmark suites before deploying updates to production users."
          }
        ]
      }
    }
  ]
};
