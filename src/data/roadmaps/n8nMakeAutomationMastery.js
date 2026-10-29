// Complete production-grade steps data for "n8n & Make Automation Mastery" Roadmap (12 Nodes)

export const n8nMakeAutomationMasteryData = {
  id: "n8n-make-automation-mastery",
  title: "n8n & Make Automation Mastery",
  description: "Master visual workflow orchestration, custom HTTP webhooks, JSON transformations, and autonomous agent nodes.",
  category: "Tool Mastery Roadmaps",
  stepCount: 12,
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: Triggers, Webhooks, HTTP Requests & Data Mapping",
      description: "Master synchronous webhook triggers, secure HMAC signature validation, universal HTTP Request nodes with OAuth2 refresh, and json expression mapping with Luxon."
    },
    {
      id: "phase-2",
      title: "Phase 2: Flow Control, Iterators, Sub-Workflows & Custom Code",
      description: "Split and aggregate large arrays, filter branches with Switch and Routers, write custom JavaScript/Python code nodes, and architect modular sub-workflows."
    },
    {
      id: "phase-3",
      title: "Phase 3: AI Agent Nodes, RAG Memory & Tool Calling in n8n",
      description: "Embed autonomous LangChain-powered AI agents, connect Postgres and Supabase vector memory, and expose visual n8n workflows as Model Context Protocol (MCP) tools."
    },
    {
      id: "phase-4",
      title: "Phase 4: Self-Hosting, Error Recovery & Enterprise Production Ops",
      description: "Implement exponential backoff retry loops, deploy self-hosted n8n instances on Docker with Redis Queue mode, and automate GitHub version control."
    }
  ],
  steps: [
    // Node 1
    {
      id: "step-1",
      stepNumber: 1,
      phaseId: "phase-1",
      title: "Instant Webhook Triggers, Polling & Custom Response Modes",
      timeEstimate: "1.5 hrs",
      difficulty: "Beginner",
      summary: "Configure GET/POST webhook listeners, verify cryptographic HMAC signatures, and return custom synchronous JSON responses to calling applications.",
      description: "In modern event-driven architectures, relying on polling triggers (querying an API every 15 minutes) introduces unacceptable latency and consumes unnecessary workflow execution quotas. Instant webhooks transform n8n and Make into real-time API receivers that trigger workflows within milliseconds of external events occurring in Stripe, Shopify, GitHub, or custom SaaS backends.\n\nMastering webhooks requires configuring response behavior: switching from asynchronous acknowledgments ('Immediately' returning 200 OK) to synchronous evaluation ('When Last Node Finishes' or 'Respond to Webhook' node). This allows workflows to enrich data, query databases, or run validation before returning a tailored JSON payload back to the calling client. Crucially, production webhooks must validate cryptographic HMAC-SHA256 signatures in HTTP headers (e.g. `X-Hub-Signature-256`) to reject spoofed payloads.",
      playbook: {
        setup: "Deploy an n8n Webhook node or Make Custom Webhook module. Select HTTP Method: POST, set Path: `/api/v1/inbound-events`, and copy the Test Webhook URL.",
        execute: "Configure Response Mode to 'Using \"Respond to Webhook\" Node' in n8n. Add a Crypto / Code validation step to verify the payload's HMAC header against your shared secret. Wire a 'Respond to Webhook' node that returns an HTTP 200 response with `{ 'success': true, 'event_id': $json.id, 'processed_at': $now }`.",
        verify: "Send a mock event using curl or Webhook.site passing a signed `x-signature` header. Verify the webhook activates immediately, executes downstream validation, and returns the customized JSON response to the curl client in under 200ms."
      },
      tools: [
        {
          name: "n8n Webhook Node",
          type: "Core Node",
          url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/",
          description: "Universal webhook listener supporting GET, POST, PUT, custom response codes, raw binary bodies, and IP whitelisting.",
          bestFor: "Real-time trigger ingestion & custom synchronous API endpoints"
        },
        {
          name: "Make Custom Webhook",
          type: "Core Module",
          url: "https://www.make.com/en/help/tools/webhooks",
          description: "High-throughput webhook queue listener with instant payload data structure auto-detection and scheduling.",
          bestFor: "No-code event triggers & rapid visual scenario initiation"
        },
        {
          name: "Webhook.site",
          type: "Testing Tool",
          url: "https://webhook.site",
          description: "Free real-time webhook inspection utility for debugging raw HTTP headers, query params, and JSON bodies.",
          bestFor: "Inspecting outbound payloads & signature debugging"
        }
      ],
      callouts: {
        mistake: "Testing production workflows with the n8n 'Test URL' instead of the 'Production URL', causing webhooks to stop receiving traffic as soon as the canvas UI is closed.",
        proTip: "Use 'Respond to Webhook' node with HTTP 202 Accepted early in the flow for high-volume queues, then process slow heavy tasks asynchronously in the background.",
        mistakes: [
          "Failing to verify HMAC signatures or bearer tokens on webhook endpoints, allowing unauthorized third parties to flood your database with fraudulent events.",
          "Returning massive raw nested payloads in the webhook response instead of an atomic acknowledgment, creating high network latency for the caller.",
          "Omitting CORS headers (`Access-Control-Allow-Origin: *`) when listening for webhooks triggered directly by browser client-side JavaScript."
        ],
        proTips: [
          "In n8n, activate 'Save manual executions' during development to replay past webhook payloads without repeatedly re-triggering upstream SaaS apps.",
          "Use Make's 'Webhook Response' module with custom HTTP status codes (400 Bad Request, 401 Unauthorized) to reject malformed payloads deterministically.",
          "Set up an IP whitelist in n8n webhook settings to accept webhook traffic strictly from verified payment processor IP ranges (e.g. Stripe IP CIDRs)."
        ]
      },
      promptLab: {
        title: "Secure Webhook Listener & HMAC Verification Architecture",
        description: "Generate a production webhook specification including signature verification logic, error responses, and synchronous payload delivery.",
        variables: [
          {
            name: "Platform",
            label: "Automation Platform",
            options: ["n8n (Self-Hosted / Cloud)", "Make.com (Integromat)"],
            default: "n8n (Self-Hosted / Cloud)"
          },
          {
            name: "Authentication Method",
            label: "Security Verification",
            options: ["HMAC-SHA256 Header (Stripe/Shopify style)", "Bearer Token Authorization Header", "Basic Auth Header"],
            default: "HMAC-SHA256 Header (Stripe/Shopify style)"
          },
          {
            name: "Response Pattern",
            label: "Response Mode",
            options: ["Synchronous JSON with Enriched Data (200 OK)", "Asynchronous Acknowledgment (202 Accepted)", "Immediate Empty Response (204 No Content)"],
            default: "Synchronous JSON with Enriched Data (200 OK)"
          }
        ],
        template: `# Production Webhook Architecture Blueprint
Target Engine: [Platform]
Security Model: [Authentication Method]
Response Strategy: [Response Pattern]

Design the complete workflow topology:
1. Webhook trigger node configuration (HTTP method, path, response mode).
2. Cryptographic signature verification step (n8n Code node or Crypto module) validating raw payload against shared secret.
3. Sanitization and validation rules:
   - Handle invalid signature with instant HTTP 401 Unauthorized.
   - Handle missing payload schema with HTTP 422 Unprocessable Entity.
4. Downstream enrichment and final 'Respond to Webhook' payload structure.`,
        expectedOutput: `### Configured n8n Webhook Architecture

#### 1. Webhook Node Settings
- **HTTP Method:** POST
- **Path:** \`webhook/v1/inbound-events\`
- **Response Mode:** \`Using 'Respond to Webhook' Node\`
- **Options:** \`Raw Body: true\` (Required for accurate HMAC hashing)

#### 2. HMAC-SHA256 Code Node (JavaScript)
\`\`\`javascript
const crypto = require('crypto');
const signature = $headers['x-hub-signature-256'];
const secret = $env.WEBHOOK_SIGNING_SECRET;
const rawBody = $input.item.binary?.data ? $input.item.binary.data : JSON.stringify($json);

const calculatedHash = 'sha256=' + crypto.createHmac('sha256', secret).update(rawBody).digest('hex');

if (!signature || signature !== calculatedHash) {
  return [{ json: { error: 'Invalid HMAC signature', statusCode: 401 } }];
}
return [{ json: { ...$json, verified: true } }];
\`\`\`

#### 3. Respond to Webhook Node
- **Status Code:** 200
- **Body:**
\`\`\`json
{
  "status": "success",
  "received_id": "evt_98421049",
  "processed_at": "2026-10-24T18:45:00Z"
}
\`\`\``
      },
      conceptGuide: {
        title: "Event-Driven Webhooks, Ingress Queues & HMAC Validation",
        overview: "A webhook is an HTTP POST request dispatched by a source system to a destination URL immediately upon the occurrence of an event. Unlike polling, which burns API call limits checking for state changes, webhooks establish instant push notifications. However, publicly exposed webhook endpoints are open to the internet and must be secured. Cryptographic HMAC verification hashes the raw incoming payload with a shared secret key and compares it against the request header, guaranteeing data integrity and sender authenticity.",
        keyPoints: [
          "**Immediate Ingestion:** Webhooks trigger automations with sub-second latency, eliminating 15-minute polling delays and quota burn.",
          "**HMAC Cryptographic Security:** Hashing payloads with shared secrets prevents man-in-the-middle tampering and forged injection attacks.",
          "**Synchronous Response Control:** Using custom response nodes allows automations to validate, calculate, and return dynamic JSON directly to the caller."
        ]
      },
      learning: {
        resources: [
          {
            title: "n8n Webhook Node Official Documentation",
            url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/",
            type: "Official Docs"
          },
          {
            title: "Make: Custom Webhooks Integration Guide",
            url: "https://www.make.com/en/help/tools/webhooks",
            type: "Official Guide"
          },
          {
            title: "Webhooks.fyi: Comprehensive Webhook Security & Best Practices",
            url: "https://webhooks.fyi",
            type: "Security Standard"
          },
          {
            title: "Webhook.site: Real-time HTTP Request Inspector",
            url: "https://webhook.site",
            type: "Testing Tool"
          }
        ]
      }
    },

    // Node 2
    {
      id: "step-2",
      stepNumber: 2,
      phaseId: "phase-1",
      title: "Mastering the Universal HTTP Request Node & OAuth2",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Connect to any REST or GraphQL API using Bearer tokens, custom headers, pagination loops, and automated OAuth2 token refresh flows.",
      description: "While n8n and Make provide hundreds of pre-built app integrations, real-world enterprise automations frequently interact with proprietary internal microservices, undocumented partner endpoints, or cutting-edge AI APIs that lack official native modules. The universal HTTP Request node is the most vital module in the automation engineer's arsenal: capable of executing arbitrary GET, POST, PUT, PATCH, and DELETE operations across any REST or GraphQL API.\n\nMastering this node requires navigating complex authentication paradigms. While static APIs use API keys or Bearer tokens, enterprise SaaS applications enforce OAuth2 Authorization Code flows with short-lived access tokens (expiring in 60 minutes) and refresh tokens. Configuring generic OAuth2 credentials inside n8n or Make automates token exchange and token refreshing in the background without workflow failure. Furthermore, handling automated pagination across cursor-based or offset-based APIs ensures workflows ingest thousands of records completely.",
      playbook: {
        setup: "Open n8n and create a new HTTP Request node. Navigate to Credentials and create an 'OAuth2 API' or 'Header Auth' credential with Client ID, Secret, Auth URL, and Token URL.",
        execute: "Configure the request: set Method to POST, URL to your API endpoint, and add headers (`Content-Type: application/json`). Set up Pagination: select 'Pagination Complete When' > Expression `!$response.body.has_more` or evaluate the next cursor link.",
        verify: "Execute the node. Verify it successfully authenticates, automatically refreshes expired tokens, paginates across 3 consecutive result pages, and outputs all items into the downstream workflow."
      },
      tools: [
        {
          name: "n8n HTTP Request Node",
          type: "Core Node",
          url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/",
          description: "Universal API client featuring native OAuth2 refresh, raw binary upload, multi-page pagination loops, and proxy support.",
          bestFor: "Custom REST/GraphQL API integration & enterprise OAuth2 management"
        },
        {
          name: "Make HTTP Module",
          type: "Core Module",
          url: "https://www.make.com/en/help/tools/http",
          description: "Versatile HTTP request module supporting MTLS certificates, multipart form-data, and custom API query structures.",
          bestFor: "Connecting unintegrated SaaS services & custom webhook requests"
        },
        {
          name: "Postman",
          type: "Testing Tool",
          url: "https://www.postman.com",
          description: "Industry-standard API client used to prototype request payloads, headers, and authentication parameters before configuring visual nodes.",
          bestFor: "API prototyping, payload inspection & cURL code generation"
        }
      ],
      callouts: {
        mistake: "Hardcoding static access tokens directly into the HTTP Request node headers, causing workflows to fail abruptly after 60 minutes when the token expires.",
        proTip: "Enable 'Never Error' or 'Continue On Fail' on the HTTP Request node so your workflow can inspect 404 or 429 status codes and handle them gracefully in a Switch branch.",
        mistakes: [
          "Failing to configure rate-limiting options, resulting in HTTP 429 Too Many Requests errors when blasting an external API with 500 requests per minute.",
          "Ignoring pagination limits, retrieving only the first 50 results of a dataset and leaving the remaining records un-synced.",
          "Uploading large files by reading entire buffers into memory instead of streaming binary objects directly through n8n binary properties."
        ],
        proTips: [
          "Import cURL commands directly into n8n by clicking 'Import cURL' in the HTTP Request node, which auto-fills method, headers, and body parameters instantly.",
          "Use n8n's built-in pagination handling: configure 'Fetch All Pages' with a dynamic cursor query parameter to loop automatically.",
          "Always test edge case error responses (e.g. 401, 500) using Postman mock servers to ensure your visual workflow handles failure modes predictably."
        ]
      },
      promptLab: {
        title: "Universal HTTP Request Node & OAuth2 Architecture Generator",
        description: "Generate complete configuration parameters for n8n's HTTP Request node including pagination expressions, header formatting, and retry logic.",
        variables: [
          {
            name: "API Protocol",
            label: "API Architecture",
            options: ["RESTful JSON API (POST / PATCH)", "GraphQL Endpoint (Query / Mutation)", "Multipart Form-Data File Upload"],
            default: "RESTful JSON API (POST / PATCH)"
          },
          {
            name: "Authentication Flow",
            label: "Auth Mechanism",
            options: ["OAuth2 Authorization Code (Automated Token Refresh)", "Bearer Token Header", "Custom HMAC Dynamic Header"],
            default: "OAuth2 Authorization Code (Automated Token Refresh)"
          },
          {
            name: "Pagination Type",
            label: "Pagination Handling",
            options: ["Cursor-Based (?cursor=next_cursor)", "Offset-Limit (?offset=N&limit=100)", "Page-Number (?page=N)"],
            default: "Cursor-Based (?cursor=next_cursor)"
          }
        ],
        template: `# Universal HTTP Request Node Architecture
Target Architecture: [API Protocol]
Authentication: [Authentication Flow]
Pagination Model: [Pagination Type]

Generate the complete JSON configuration and parameter schema for n8n:
1. Node parameters (Method, URL, Query Parameters, Headers, Body).
2. Pagination expression (Loop condition, cursor extraction from previous response).
3. Error handling strategy (Rate limiting retry, status code routing).
4. Data mapping to ensure clean output objects.`,
        expectedOutput: `### Configured n8n HTTP Request Node

\`\`\`json
{
  "parameters": {
    "method": "POST",
    "url": "https://api.enterprise.com/v2/records/query",
    "authentication": "genericCredentialType",
    "genericAuthType": "oAuth2Api",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        { "name": "Content-Type", "value": "application/json" },
        { "name": "Accept", "value": "application/json" }
      ]
    },
    "sendBody": true,
    "specifyBody": "json",
    "jsonBody": "={\\n  \\\"limit\\\": 100,\\n  \\\"cursor\\\": \\\"{{ $response.body.next_cursor || '' }}\\\"\\n}",
    "options": {
      "pagination": {
        "paginationMode": "updateAParameterInEachIteration",
        "paginationCompleteWhen": "other",
        "completeExpression": "={{ !$response.body.has_more }}"
      },
      "response": {
        "response": {
          "responseFormat": "json"
        }
      },
      "retry": {
        "retry": {
          "maxTries": 3,
          "waitBetweenTries": 2000
        }
      }
    }
  }
}
\`\`\``
      },
      conceptGuide: {
        title: "REST/GraphQL Abstraction, OAuth2 Lifecycle & Cursor Pagination",
        overview: "The HTTP Request node provides a complete visual abstraction over low-level network libraries like Axios or cURL. It handles TLS handshakes, header construction, stream serialization, and response parsing. In OAuth2 Authorization flows, an initial user consent exchange yields an ephemeral Access Token and a long-lived Refresh Token. When the Access Token expires, the client uses the Refresh Token to negotiate a fresh token silently without user intervention. Pagination loops allow the node to iteratively harvest large datasets across sequential network hops.",
        keyPoints: [
          "**Generic OAuth2 Engine:** Eliminates maintenance by refreshing expired access tokens automatically in the background.",
          "**Cursor-Based Pagination:** Iterates across paginated result sets by dynamically passing the previous page's cursor token into subsequent queries.",
          "**Graceful Status Code Trapping:** Enabling 'Continue on Fail' allows error handling branches to capture 4xx/5xx responses rather than crashing the workflow."
        ]
      },
      learning: {
        resources: [
          {
            title: "n8n HTTP Request Node Documentation & Examples",
            url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/",
            type: "Official Docs"
          },
          {
            title: "Make: Connecting APIs with the HTTP Module",
            url: "https://www.make.com/en/help/tools/http",
            type: "Official Guide"
          },
          {
            title: "OAuth 2.0 Simplified Specification & Grant Types",
            url: "https://oauth.net/2/",
            type: "Industry Standard"
          },
          {
            title: "Postman Learning Center: Sending Requests & Generating Code",
            url: "https://learning.postman.com/docs/sending-requests/requests/",
            type: "API Guide"
          }
        ]
      }
    },

    // Node 3
    {
      id: "step-3",
      stepNumber: 3,
      phaseId: "phase-1",
      title: "JSON Expressions, Data Mapping & Array Manipulation",
      timeEstimate: "2 hrs",
      difficulty: "Beginner",
      summary: "Transform nested JSON payloads, format dates with Luxon, and reference outputs from earlier nodes with $('NodeName').item.json syntax.",
      description: "Automations are only as strong as their data plumbing. In n8n and Make, every node consumes structured JSON bundles and emits enriched JSON objects. To connect disparate platforms—such as mapping a Stripe payment into an Airtable customer record or formatting an OpenRouter LLM response into a Slack notification—engineers must master internal expression languages.\n\nIn n8n, expressions are powered by JavaScript and the built-in Luxon date-time library. Developers use syntax like `{{ $json.customer.email }}` to extract current properties, and cross-node references like `{{ $('Webhook').item.json.body.user_id }}` to retrieve data from ancestor nodes regardless of intervening transformations. In Make, functions like `get()`, `map()`, `formatDate()`, and JMESPath expressions allow operators to navigate multi-dimensional arrays, extract values by key, and handle null coalescing without throwing runtime exceptions.",
      playbook: {
        setup: "Open an n8n workflow with mock data. Add an 'Edit Fields' (Set) node and open the Expression editor.",
        execute: "Write an expression extracting a nested object: `{{ $json.billing.address.city || 'Default City' }}`. Add a date formatting expression using Luxon: `{{ $now.setZone('America/New_York').toFormat('yyyy-MM-dd HH:mm:ss') }}`. Reference an ancestor node directly: `{{ $('Webhook Trigger').item.json.headers['user-agent'] }}`.",
        verify: "Click 'Test Step'. Confirm all mapped values evaluate accurately in the output preview table without returning `undefined` or syntax errors."
      },
      tools: [
        {
          name: "n8n Expressions ($json)",
          type: "Core Feature",
          url: "https://docs.n8n.io/data/expressions/",
          description: "JavaScript-powered inline templating language supporting data extraction, math, string manipulation, and Luxon date math.",
          bestFor: "Dynamic field mapping, cross-node data referencing & date formatting"
        },
        {
          name: "Make Functions & Formulas",
          type: "Core Feature",
          url: "https://www.make.com/en/help/scenarios/mapping-and-functions",
          description: "Built-in mathematical, string, array, and date-time functions powering Make's visual variable mapper.",
          bestFor: "No-code array mapping, date transformations & null handling"
        },
        {
          name: "JMESPath",
          type: "Query Language",
          url: "https://jmespath.org",
          description: "Declarative JSON query language for filtering, projecting, and flattening deeply nested JSON structures.",
          bestFor: "Complex nested JSON filtering & array projection"
        }
      ],
      callouts: {
        mistake: "Using legacy `{{ $node['NodeName'].json[...] }}` syntax in modern n8n instead of the standard paired-item syntax `{{ $('NodeName').item.json[...] }}`, causing items to misalign when processing arrays.",
        proTip: "Use the safe navigation operator (`$json.customer?.profile?.phone ?? 'N/A'`) to prevent entire workflows from failing when optional API properties are omitted.",
        mistakes: [
          "Treating ISO date strings as plain text and attempting manual string slicing instead of using Luxon's `DateTime.fromISO().toFormat()` methods.",
          "Referencing an ancestor node whose output array size does not match the current node's item count, resulting in 'Item index out of bounds' errors.",
          "Confusing strings with numerical numbers in comparisons (e.g. comparing `'100' > '20'`, which evaluates to false in string lexicographical order)."
        ],
        proTips: [
          "In n8n, you can drag and drop fields directly from the left-hand input preview pane into any parameter field to auto-generate the exact expression syntax.",
          "Use `.filter()`, `.map()`, and `.join(', ')` inside n8n expressions to format arrays of names or line items into a clean comma-separated string in one line.",
          "In Make, use the `map()` function combined with `join()` to extract all email addresses from an array of attendee objects: `{{join(map(1.attendees; 'email'); ', ')}}`."
        ]
      },
      promptLab: {
        title: "n8n & Make Complex JSON Expression Generator",
        description: "Generate copy-pasteable n8n expressions and Make formulas for complex nested JSON transformations, array filtering, and Luxon date manipulation.",
        variables: [
          {
            name: "Platform Target",
            label: "Automation Engine",
            options: ["n8n ($json & JavaScript)", "Make (Formulas & Functions)"],
            default: "n8n ($json & JavaScript)"
          },
          {
            name: "Data Operation",
            label: "Transformation Task",
            options: ["Nested Array Extraction & Comma Join", "Timezone Conversion & Date Formatting (Luxon)", "Conditional Fallback & Null Coalescing"],
            default: "Nested Array Extraction & Comma Join"
          },
          {
            name: "Input Payload Structure",
            label: "JSON Schema",
            options: ["E-commerce Order (Line Items, Customer, Taxes)", "CRM Lead (Custom Fields, Contact History)", "Stripe Event (Subscription, Invoices, Metadata)"],
            default: "E-commerce Order (Line Items, Customer, Taxes)"
          }
        ],
        template: `# JSON Expression & Data Mapping Generator
Platform: [Platform Target]
Task: [Data Operation]
Schema: [Input Payload Structure]

Provide:
1. Exact input JSON sample object.
2. Complete, tested expression string.
3. Step-by-step breakdown of how the expression resolves nulls, formats types, and handles array traversal.
4. Expected string or object output preview.`,
        expectedOutput: `### Expression Configuration for n8n

#### 1. Input Sample Data
\`\`\`json
{
  "order_id": "ORD-9421",
  "customer": {
    "name": "Alex Mercer",
    "email": "alex@example.com"
  },
  "line_items": [
    { "sku": "GPU-H100", "title": "Nvidia H100 GPU Instance", "qty": 2, "price": 4900 },
    { "sku": "SUPP-247", "title": "24/7 SLA Support Addon", "qty": 1, "price": 1200 }
  ],
  "created_at": "2026-10-24T12:30:00.000Z"
}
\`\`\`

#### 2. n8n Expression
\`\`\`javascript
{{ $json.line_items.map(item => item.title + " (x" + item.qty + ")").join(", ") }}
\`\`\`

#### 3. Date Formatting with Luxon
\`\`\`javascript
{{ DateTime.fromISO($json.created_at).setZone("America/New_York").toFormat("MMMM dd, yyyy 'at' hh:mm a ZZZZ") }}
\`\`\`

#### 4. Evaluated Output
- **Items Summary:** \`Nvidia H100 GPU Instance (x2), 24/7 SLA Support Addon (x1)\`
- **Formatted Date:** \`October 24, 2026 at 08:30 AM EDT\``
      },
      conceptGuide: {
        title: "Item-Lists, Paired Items Paradigm & Luxon Date Engines",
        overview: "A core differentiator of n8n is its 'Item List' architecture. Every node processes an array of items sequentially or in parallel. When referencing earlier nodes, n8n maintains an internal item-linking graph: item #3 in the current node automatically corresponds to item #3 in preceding nodes. Using expressions with safe navigation ensures that optional or null values do not break downstream execution. The built-in Luxon library provides immutable, timezone-aware datetime manipulation capable of converting UTC timestamps into any regional offset.",
        keyPoints: [
          "**Paired Item Linking:** n8n maps output items to their exact input ancestry, guaranteeing data integrity across multi-item batch executions.",
          "**Safe Optional Chaining:** Modern `$json?.property ?? 'default'` syntax protects workflows from runtime crashes caused by fluctuating external API schemas.",
          "**Luxon Datetime Precision:** Built-in Luxon methods eliminate time formatting bugs and handle daylight saving transitions automatically."
        ]
      },
      learning: {
        resources: [
          {
            title: "n8n Expressions Reference & Syntax Guide",
            url: "https://docs.n8n.io/data/expressions/",
            type: "Official Docs"
          },
          {
            title: "Luxon: Modern JavaScript Date and Time Documentation",
            url: "https://moment.github.io/luxon/#/",
            type: "Reference Manual"
          },
          {
            title: "Make: Mapping and Using Functions Guide",
            url: "https://www.make.com/en/help/scenarios/mapping-and-functions",
            type: "Official Docs"
          },
          {
            title: "JMESPath Specification & Interactive Tutorial",
            url: "https://jmespath.org/tutorial.html",
            type: "Tutorial"
          }
        ]
      }
    },

    // Node 4
    {
      id: "step-4",
      stepNumber: 4,
      phaseId: "phase-2",
      title: "Routers, Switch Nodes, Iterators & Array Aggregators",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Split arrays of 100+ items into individual processing bundles, filter conditional branches, and re-aggregate results into a single report.",
      description: "When an external API returns a batch of 500 records (e.g., all active Shopify orders or a batch of Salesforce leads), treating that batch as a monolithic object prevents granular per-item processing. In Make, the 'Iterator' module splits an array into individual processing bundles, while the 'Array Aggregator' gathers them back into a single structured array after processing. In n8n, this is handled natively via the 'Split Out' node and 'Aggregate' node.\n\nBranching logic is equally critical. In Make, the 'Router' module creates parallel execution paths with conditional filters between modules. In n8n, the 'Switch' and 'If' nodes evaluate boolean, string, or numerical rules to divert items across multiple distinct downstream paths (e.g. routing VIP customers to Slack and standard users to email). Mastering flow control prevents duplicate notifications, ensures isolated error handling per item, and enables scalable batch processing.",
      playbook: {
        setup: "Add an API node that returns a JSON list of customer transactions. Wire an n8n 'Split Out' node (or Make 'Iterator') to unpack the `items` array.",
        execute: "Wire an n8n 'Switch' node configuring 3 output rules: Rule 1: `$json.amount >= 1000` (High Value), Rule 2: `$json.amount >= 100` (Standard), Fallback: Rule 3 (Low Value). Attach an 'Aggregate' node after the processing branches to re-compile all processed transaction IDs into an executive summary report.",
        verify: "Run the workflow with a mock list of 15 transactions across varying amounts. Verify items are routed to their respective branches without dropping records, and the final Aggregate node emits exactly 1 summarized payload containing all 15 records."
      },
      tools: [
        {
          name: "n8n Split Out & Aggregate",
          type: "Core Nodes",
          url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.splitout/",
          description: "Pair of data flow nodes for unpacking nested arrays into discrete items and re-aggregating multiple items into grouped arrays.",
          bestFor: "Array looping, batch fan-out & summary report consolidation"
        },
        {
          name: "Make Router & Iterator",
          type: "Core Flow Modules",
          url: "https://www.make.com/en/help/modules/flow-control",
          description: "Visual flow control modules for branching logic, item-by-item array iterations, and array aggregations.",
          bestFor: "Conditional routing & bundle-level visual flow control"
        },
        {
          name: "Airtable",
          type: "No-Code Database",
          url: "https://airtable.com",
          description: "Cloud relational database frequently used as the central repository for staging, updating, and logging batch workflow records.",
          bestFor: "Batch record storage, status logging & multi-row syncs"
        }
      ],
      callouts: {
        mistake: "Placing a notification node (like Slack or Email) inside an iterated loop without an aggregator, inadvertently sending 250 individual emails instead of 1 aggregated summary digest.",
        proTip: "Use n8n's 'Looping' node (Loop Over Items) with a batch size of 20 to throttle API calls to third-party services that enforce strict rate limits.",
        mistakes: [
          "Forgetting to configure a fallback branch in a Switch node, silently dropping items that don't match strict equality conditions.",
          "Aggregating items across differing source structures without defining the target key names in the Array Aggregator, leading to empty objects.",
          "Running massive iterations of 10,000+ items inside a single synchronous execution, running the risk of memory exhaustion on modest server instances."
        ],
        proTips: [
          "In Make, filters on router branches evaluate left-to-right; position your most specific or high-priority filter on the top route.",
          "Use the 'Limit' node in n8n immediately following a Split Out node during development to process only the first 3 items while building logic.",
          "In n8n Aggregate node, select 'Aggregate Individual Fields' to produce clean, strongly-typed JSON arrays ready for database batch inserts."
        ]
      },
      promptLab: {
        title: "Batch Flow Control & Conditional Routing Architecture",
        description: "Author a complete visual flow architecture separating high-volume item arrays into filtered conditional branches with aggregated reporting.",
        variables: [
          {
            name: "Platform",
            label: "Automation Engine",
            options: ["n8n (Split Out / Switch / Aggregate)", "Make (Iterator / Router / Array Aggregator)"],
            default: "n8n (Split Out / Switch / Aggregate)"
          },
          {
            name: "Routing Criteria",
            label: "Branching Condition",
            options: ["Numerical Tiering (> $1,000 VIP, $100-$999 Standard, < $100 Low)", "Categorical Status (Active, Pending, Suspended, Deleted)", "Geographical Region (North America, EMEA, APAC)"],
            default: "Numerical Tiering (> $1,000 VIP, $100-$999 Standard, < $100 Low)"
          },
          {
            name: "Final Output Action",
            label: "Consolidation Step",
            options: ["Consolidated Slack Digest Message", "Batch Database Upsert (Postgres/Airtable)", "Compiled CSV Attachment via Email"],
            default: "Consolidated Slack Digest Message"
          }
        ],
        template: `# Flow Control & Batch Aggregation Architecture
Platform: [Platform]
Routing Rules: [Routing Criteria]
Final Consolidation: [Final Output Action]

Design the complete node topology:
1. Extraction: Array unpacking configuration and field selection.
2. Branching: Switch / Router rules, operator conditions, and fallback handling.
3. Node Processing: Action executed per branch.
4. Aggregation: Grouping configuration and final output message template.`,
        expectedOutput: `### n8n Batch Processing & Router Topology

#### 1. Split Out Node
- **Field to Split Out:** \`line_items\`
- **Include Existing Fields:** \`true\` (Preserves order_id and customer metadata)

#### 2. Switch Node Rules
- **Mode:** \`Rules\`
- **Rule 1 (VIP Branch):** \`{{ $json.amount }}\` >= \`1000\` (Type: Number)
- **Rule 2 (Standard Branch):** \`{{ $json.amount }}\` >= \`100\` and < \`1000\`
- **Fallback Rule:** Output 3 (Low Value / Archive)

#### 3. Processing Branches
- **Branch 1:** Enriches lead via Clearbit API + tags record as VIP.
- **Branch 2:** Standard database update.
- **Branch 3:** Appends to archive log.

#### 4. Aggregate Node Configuration
- **Aggregate:** \`Aggregate All Items into a Single List\`
- **Fields to Aggregate:** \`order_id, customer_email, amount, tier\`

#### 5. Slack Digest Template
\`\`\`markdown
*Daily Transaction Processing Digest*
Processed {{ $json.length }} items across {{ $now.toFormat('yyyy-MM-dd') }}:
- VIP High-Value Orders: {{ $json.filter(x => x.tier === 'VIP').length }}
- Total Volume: \${{ $json.reduce((acc, curr) => acc + curr.amount, 0).toLocaleString() }}
\`\`\``
      },
      conceptGuide: {
        title: "Fan-Out, Fan-In Patterns & Flow Control Mechanics",
        overview: "In distributed workflow orchestration, the 'Fan-Out / Fan-In' pattern is fundamental. 'Fan-Out' occurs when an array or collection is decomposed into individual execution threads (via an Iterator or Split Out node), allowing downstream nodes to execute business logic, validation, or API calls against each individual item. 'Fan-In' occurs when the Aggregator collects the completed items back into a single unified bundle, enabling bulk database writes or aggregated digest alerts without spamming notification channels.",
        keyPoints: [
          "**Fan-Out Execution:** Decomposing arrays into discrete items isolates processing so a single malformed item does not break the entire batch.",
          "**Conditional Splitting:** Switch and Router nodes eliminate nested IF-ELSE spaghetti by creating clean, visually distinct execution paths.",
          "**Fan-In Aggregation:** Aggregators collect disparate output items back into a single payload, enabling batch API requests and digest reporting."
        ]
      },
      learning: {
        resources: [
          {
            title: "n8n Split Out Node Documentation",
            url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.splitout/",
            type: "Official Docs"
          },
          {
            title: "n8n Aggregate Node Documentation",
            url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.aggregate/",
            type: "Official Docs"
          },
          {
            title: "Make: Flow Control Modules (Iterator & Aggregator)",
            url: "https://www.make.com/en/help/modules/flow-control",
            type: "Official Docs"
          },
          {
            title: "Enterprise Integration Patterns: Scatter-Gather Pattern",
            url: "https://www.enterpriseintegrationpatterns.com/BroadcastAggregate.html",
            type: "Architecture Reference"
          }
        ]
      }
    },

    // Node 5
    {
      id: "step-5",
      stepNumber: 5,
      phaseId: "phase-2",
      title: "Writing Custom JavaScript & Python Inside n8n Code Nodes",
      timeEstimate: "2.5 hrs",
      difficulty: "Intermediate",
      summary: "Use AI to write clean 15-line JS/Python transformation scripts inside n8n that replace 10+ messy visual formatting nodes.",
      description: "Visual no-code canvases are superb for orchestrating API connections, but attempting to perform complex data transformations (regex string parsing, deduplication, multi-level mathematical scoring, or XML-to-JSON parsing) using purely visual nodes often results in an unmaintainable tangle of 15+ nodes. The n8n 'Code' node solves this by allowing developers to write native JavaScript or Python directly inside the workflow.\n\nThe Code node executes in two operational modes: 'Run Once for All Items' (ideal for batch operations, cross-item deduplication, sorting, and aggregation) and 'Run Once for Each Item' (ideal for granular per-item transformations). Furthermore, AI coding models (like Claude 3.7 Sonnet) can generate exact, production-ready 15-line transformation scripts adhering to n8n's `{ json: { ... } }` contract in seconds, dramatically simplifying canvas complexity.",
      playbook: {
        setup: "Add an n8n Code node to your workflow. In the settings, choose your preferred language: JavaScript (Node.js engine) or Python (Pyodide engine).",
        execute: "Select 'Run Once for All Items'. Prompt an AI assistant to generate a script: 'Write an n8n JavaScript Code node that takes an array of CRM deals, filters out deals without an email, deduplicates by email address, and computes total pipeline value'. Paste the script into the Code node editor.",
        verify: "Click 'Test step'. Verify the Code node executes in under 10ms, correctly outputs an array of clean objects wrapped in `{ json: ... }`, and replaces 6 visual filter and math nodes with a single readable script."
      },
      tools: [
        {
          name: "n8n Code Node",
          type: "Core Execution Node",
          url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code/",
          description: "Full-featured code execution environment supporting modern JavaScript (ES2022) and Python with native access to workflow variables.",
          bestFor: "Complex data transformation, array manipulation & custom business logic"
        },
        {
          name: "JavaScript / Python Runtimes",
          type: "Runtime Engines",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          description: "Built-in Node.js v18+ runtime and browser-sandboxed Python Pyodide runtime powering client transformations.",
          bestFor: "Algorithms, string formatting, regex & data processing"
        },
        {
          name: "Claude 3.7 Sonnet",
          type: "AI Code Assistant",
          url: "https://www.anthropic.com",
          description: "Frontier reasoning model specialized in writing syntactically perfect, typed n8n Code node transformation scripts.",
          bestFor: "Generating zero-shot n8n JavaScript & Python snippets"
        }
      ],
      callouts: {
        mistake: "Returning a plain JavaScript object or array without wrapping each item inside the required n8n `{ json: { ... } }` wrapper, causing the Code node to throw an output structure error.",
        proTip: "Use `NODE_FUNCTION_ALLOW_EXTERNAL` in self-hosted n8n environment variables to allow your JavaScript Code nodes to `require()` external npm libraries like `lodash` or `axios`.",
        mistakes: [
          "Modifying the incoming `$input.all()` array in-place using mutating array methods (`.sort()` or `.splice()`) instead of returning fresh immutable objects.",
          "Using synchronous blocking while-loops inside the Code node that cause the n8n execution thread to stall or trigger container timeout kills.",
          "Failing to handle null or undefined nested keys before accessing properties, throwing `TypeError: Cannot read properties of undefined`."
        ],
        proTips: [
          "Select 'Run Once for All Items' when you need to sort an array: `return $input.all().sort((a, b) => b.json.score - a.json.score)`.",
          "In n8n Python mode, you can use list comprehensions and standard libraries like `json`, `math`, and `datetime` directly in the browser.",
          "Use the built-in `$jmespath()` helper inside the Code node to execute powerful JSON queries in a single line of code."
        ]
      },
      promptLab: {
        title: "AI-Powered n8n JavaScript Code Node Generator",
        description: "Generate production-grade JavaScript transformation code for n8n's Code node adhering to the required item-list data contract.",
        variables: [
          {
            name: "Execution Mode",
            label: "Code Node Mode",
            options: ["Run Once for All Items (Batch / Deduplication / Sorting)", "Run Once for Each Item (Single Object Transformation)"],
            default: "Run Once for All Items (Batch / Deduplication / Sorting)"
          },
          {
            name: "Transformation Goal",
            label: "Business Logic",
            options: ["Deduplicate records by Email & Calculate Totals", "Normalize Inconsistent Phone Numbers to E.164 format", "Extract & Parse Embedded HTML/Markdown Tables"],
            default: "Deduplicate records by Email & Calculate Totals"
          },
          {
            name: "Language",
            label: "Scripting Engine",
            options: ["JavaScript (Node.js ES2022)", "Python (Pyodide)"],
            default: "JavaScript (Node.js ES2022)"
          }
        ],
        template: `# n8n Code Node Transformation Generator
Mode: [Execution Mode]
Target Logic: [Transformation Goal]
Language: [Language]

Write a clean, defensive script for n8n's Code node:
1. Accept input items via $input.all() or $input.item.
2. Implement strict null checks and type validation.
3. Apply the requested business logic with zero external library dependencies.
4. Return the result strictly in n8n's required format: array of objects with 'json' key.`,
        expectedOutput: `### n8n JavaScript Code Node Script

\`\`\`javascript
// Mode: Run Once for All Items
const items = $input.all();
const seenEmails = new Set();
const deduplicatedItems = [];
let totalPipelineValue = 0;

for (const item of items) {
  const data = item.json;
  const email = data.email ? String(data.email).trim().toLowerCase() : null;
  const value = Number(data.deal_value) || 0;

  // Validate email presence and filter duplicates
  if (email && !seenEmails.has(email)) {
    seenEmails.add(email);
    totalPipelineValue += value;

    deduplicatedItems.push({
      json: {
        id: data.id || null,
        name: data.name ? data.name.trim() : 'Unknown Lead',
        email: email,
        deal_value: value,
        status: data.status || 'new',
        processed_at: new Date().toISOString()
      }
    });
  }
}

// Append aggregate statistics to workflow output context
return deduplicatedItems;
\`\`\``
      },
      conceptGuide: {
        title: "Code Node Architecture, V8 Sandboxing & Data Contracts",
        overview: "While visual workflows streamline external communication, algorithmic transformations are objectively faster and cleaner in code. n8n's Code node executes within an isolated V8 JavaScript virtual machine or WebAssembly-powered Python environment. Understanding the n8n data contract is essential: n8n requires every node output to be an array of objects where each object possesses a top-level `json` key containing the payload: `[{ json: { ... } }, { json: { ... } }]`. Respecting this contract ensures flawless interoperability with all downstream visual nodes.",
        keyPoints: [
          "**Visual Simplicity:** A single 15-line script replaces 8 to 12 messy visual filter, math, and string formatting nodes.",
          "**Execution Modes:** Choose 'Run Once for All Items' for sorting, grouping, and deduplicating; choose 'Run for Each Item' for row-level transformations.",
          "**The JSON Data Contract:** Always return an array of objects structured as `[{ json: { yourData } }]` to maintain n8n visual compatibility."
        ]
      },
      learning: {
        resources: [
          {
            title: "n8n Code Node Official Documentation & Examples",
            url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code/",
            type: "Official Docs"
          },
          {
            title: "n8n Data Structure & Item Pairing Mechanics",
            url: "https://docs.n8n.io/data/data-structure/",
            type: "Architecture Guide"
          },
          {
            title: "Mozilla Developer Network (MDN) JavaScript Modern Reference",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            type: "Language Reference"
          },
          {
            title: "Pyodide: Python in WebAssembly Architecture",
            url: "https://pyodide.org/en/stable/",
            type: "Technical Documentation"
          }
        ]
      }
    },

    // Node 6
    {
      id: "step-6",
      stepNumber: 6,
      phaseId: "phase-2",
      title: "Modular Sub-Workflows (Execute Workflow) & Reusability",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Break monolithic 80-node canvases into reusable, callable microservice workflows for notification, logging, and data enrichment.",
      description: "As automation systems scale within an enterprise, visual canvases frequently sprawl into unmaintainable 'spaghetti workflows' containing 80+ nodes. When multiple distinct workflows all need to execute the same business logic—such as looking up customer data in Salesforce, posting an incident alert to Slack, or writing an audit record to Postgres—copying and pasting identical nodes across workflows creates a maintenance nightmare.\n\nThe solution is modular software architecture via n8n's 'Execute Workflow' node and Make's Scenario Inputs. By turning common subroutines into standalone, callable sub-workflows (microservices), any parent workflow can pass input parameters, await execution, and receive strongly-typed output objects. If the notification logic or CRM schema changes in the future, engineers update the single sub-workflow once, and every parent workflow immediately inherits the fix.",
      playbook: {
        setup: "Create a new dedicated n8n workflow named `[SUB] Send Standardized Alert`. Add an 'Execute Workflow Trigger' as the starting node.",
        execute: "Inside the sub-workflow, configure formatting logic that accepts `{ severity, title, message, channel }` inputs, formats a rich Slack Block Kit card, and returns `{ success: true, timestamp: $now }`. In your main production workflow, add an 'Execute Workflow' node, select your sub-workflow by ID, and map the dynamic variables.",
        verify: "Trigger the parent workflow. Open n8n execution history: verify the sub-workflow spawns as a nested execution thread, processes inputs cleanly, and returns the confirmation payload back to the parent canvas."
      },
      tools: [
        {
          name: "n8n Sub-Workflows (Execute Workflow)",
          type: "Core Orchestration",
          url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executeworkflow/",
          description: "Microservice orchestration node enabling parent workflows to trigger isolated sub-workflows synchronously and await typed returns.",
          bestFor: "Modular workflow architecture, code reuse & monolithic canvas refactoring"
        },
        {
          name: "Make Scenario Inputs / Webhook",
          type: "Flow Module",
          url: "https://www.make.com/en/help/scenarios/scenario-inputs",
          description: "Parameter injection system allowing modular Make scenarios to be invoked via internal webhooks with structured schemas.",
          bestFor: "Cross-scenario calls & modular no-code pipeline design"
        },
        {
          name: "Notion",
          type: "Workspace Tool",
          url: "https://www.notion.so",
          description: "Centralized knowledge base and documentation tool for tracking internal sub-workflow registries, input contracts, and APIs.",
          bestFor: "Documenting sub-workflow schemas & team interface registries"
        }
      ],
      callouts: {
        mistake: "Creating circular workflow dependencies (Workflow A calls Workflow B, which calls Workflow A), resulting in an infinite execution loop that exhausts database resources.",
        proTip: "Prefix all callable sub-workflows with a standardized naming convention like `[SUB] Customer Lookup` or `[API] Slack Dispatcher` so team members immediately recognize reusable components.",
        mistakes: [
          "Failing to publish/activate the sub-workflow in n8n, causing the parent workflow's 'Execute Workflow' node to fail with 'Workflow not found or not active'.",
          "Passing unvalidated arbitrary input schemas to sub-workflows without validating required keys, leading to unexpected null pointer crashes.",
          "Over-nesting sub-workflows beyond 4 levels deep, making runtime debugging across nested execution logs unnecessarily tedious."
        ],
        proTips: [
          "Enable 'Wait for Sub-Workflow Completion' in n8n when the parent workflow requires data returned by the sub-workflow to continue.",
          "Disable 'Wait for Sub-Workflow Completion' for fire-and-forget logging or telemetry tasks to slash parent workflow execution latency.",
          "Export your core sub-workflows as JSON templates so junior engineers can import vetted enterprise building blocks instantly."
        ]
      },
      promptLab: {
        title: "Modular Sub-Workflow Interface Contract & Architecture Blueprint",
        description: "Design a reusable microservice sub-workflow in n8n with strict JSON schema input validation, error handling, and structured response contracts.",
        variables: [
          {
            name: "Sub-Workflow Utility",
            label: "Microservice Role",
            options: ["Enterprise Notification & Escalation Dispatcher", "Customer Data Enrichment (Clearbit + HubSpot)", "Audit Logging & Compliance Ledger (Postgres)"],
            default: "Enterprise Notification & Escalation Dispatcher"
          },
          {
            name: "Execution Pattern",
            label: "Invocation Mode",
            options: ["Synchronous (Parent waits for response)", "Asynchronous Fire-and-Forget (Background execution)"],
            default: "Synchronous (Parent waits for response)"
          },
          {
            name: "Input Schema Contract",
            label: "Payload Rigidity",
            options: ["Strict Typed Schema (Validation Error if missing keys)", "Permissive Schema with Defaults"],
            default: "Strict Typed Schema (Validation Error if missing keys)"
          }
        ],
        template: `# Modular Sub-Workflow Blueprint: [Sub-Workflow Utility]
Mode: [Execution Pattern]
Contract: [Input Schema Contract]

Define:
1. Input Contract: Define the exact JSON schema required by the 'Execute Workflow Trigger' node.
2. Validation Logic: A Code node verifying incoming parameters and assigning fallbacks.
3. Core Processing Pipeline: The internal visual actions executed by the sub-workflow.
4. Output Return Contract: The structured response emitted back to the parent caller.`,
        expectedOutput: `### Modular Sub-Workflow Specification: [SUB] Enterprise Alert Dispatcher

#### 1. Input Contract Schema
\`\`\`json
{
  "severity": "P1_CRITICAL | P2_HIGH | P3_STANDARD",
  "title": "Database Connection Pool Exhausted",
  "service": "billing-service",
  "metadata": { "env": "production", "error_code": "ERR_POOL_503" },
  "notify_channels": ["slack", "pagerduty"]
}
\`\`\`

#### 2. Input Validation (Code Node)
\`\`\`javascript
const input = $input.first().json;
if (!input.severity || !input.title) {
  throw new Error("Validation Error: 'severity' and 'title' are mandatory fields in [SUB] Alert Dispatcher.");
}
const validSeverities = ['P1_CRITICAL', 'P2_HIGH', 'P3_STANDARD'];
if (!validSeverities.includes(input.severity)) {
  input.severity = 'P3_STANDARD';
}
return [{ json: input }];
\`\`\`

#### 3. Execution Topology
- **Branch 1 (P1):** Triggers PagerDuty Incident API + posts to \`#alerts-critical\`.
- **Branch 2 (P2/P3):** Formats Slack Block Kit card and posts to \`#dev-ops\`.

#### 4. Return Output
\`\`\`json
{
  "dispatch_success": true,
  "incident_id": "INC-2026-904",
  "dispatched_at": "2026-10-24T18:48:00Z"
}
\`\`\``
      },
      conceptGuide: {
        title: "Sub-Workflow Microservices, DRY Principles & Canvas Hygiene",
        overview: "In software engineering, the DRY (Don't Repeat Yourself) principle dictates that business logic should have a single, authoritative representation. As visual canvases grow, copy-pasting nodes across dozens of workflows creates technical debt. Modular sub-workflows treat n8n pipelines as callable microservices: accepting defined inputs, executing encapsulated logic, and returning deterministic outputs. This decouples business logic, simplifies testing, and keeps main canvas diagrams clean and intelligible.",
        keyPoints: [
          "**Microservice Decomposition:** Isolating repetitive routines (notifications, DB logging, CRM syncs) into sub-workflows cuts workflow sprawl by 70%.",
          "**Encapsulated Maintenance:** Updating an API key or webhook payload in a sub-workflow instantly propagates across all parent workflows.",
          "**Synchronous vs. Async Calls:** Parent workflows can await responses for critical calculations or trigger background jobs asynchronously."
        ]
      },
      learning: {
        resources: [
          {
            title: "n8n Execute Workflow Node Documentation",
            url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executeworkflow/",
            type: "Official Docs"
          },
          {
            title: "n8n Sub-Workflows Best Practices & Design Patterns",
            url: "https://docs.n8n.io/workflows/sub-workflows/",
            type: "Architecture Guide"
          },
          {
            title: "Make: Modular Scenario Architecture & Inputs",
            url: "https://www.make.com/en/help/scenarios/scenario-inputs",
            type: "Official Docs"
          },
          {
            title: "Software Engineering DRY (Don't Repeat Yourself) Architecture",
            url: "https://en.wikipedia.org/wiki/Don%27t_repeat_yourself",
            type: "Engineering Standard"
          }
        ]
      }
    },

    // Node 7
    {
      id: "step-7",
      stepNumber: 7,
      phaseId: "phase-3",
      title: "Building Autonomous AI Agents with n8n's LangChain Nodes",
      timeEstimate: "2.5 hrs",
      difficulty: "Advanced",
      summary: "Wire the n8n Tools Agent node with chat models, system prompts, and structured output parsers directly on the visual canvas.",
      description: "n8n has made a massive leap beyond traditional static automation by natively embedding LangChain primitives directly onto its visual canvas. Instead of writing complex Python agent loops with manual tool routing, developers can drop an 'AI Agent' node, connect an LLM chat model (such as Claude 3.7 Sonnet via Anthropic or OpenRouter), inject persistent memory, and attach external tool nodes with zero custom code.\n\nThe n8n AI Agent acts as an autonomous reasoning engine: receiving user intent, determining whether tool calls are required to achieve the goal, executing those tools against live databases or APIs, inspecting the tool output, and iterating until a conclusive answer is derived. Adding structured output parsers (such as Auto-fixing Output Parser) guarantees that the agent's final response adheres strictly to strongly-typed JSON schemas required by downstream enterprise workflows.",
      playbook: {
        setup: "Add an n8n 'AI Agent' node to the canvas. Set Agent Type to 'Tools Agent' (ReAct reasoning framework).",
        execute: "Attach a Chat Model sub-node (e.g. Anthropic Claude 3.7 or OpenRouter). Attach a 'Window Buffer Memory' sub-node for conversational history. Attach 2 tools to the Agent node: 'Calculator' and 'HTTP Request Tool' (configured to query live weather or CRM data). Author an explicit System Message defining agent constraints.",
        verify: "Submit a complex multi-step prompt: 'Check the temperature in Chicago, convert it from Fahrenheit to Celsius, and tell me if a jacket is needed'. Observe the live agent execution trace in n8n as it calls the HTTP tool, pipes the result to the calculator, and outputs the final reasoned answer."
      },
      tools: [
        {
          name: "n8n AI Agent Node",
          type: "AI Core Node",
          url: "https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/",
          description: "Visual LangChain agent container supporting ReAct, OpenAI Functions, Plan-and-Execute, and conversational agent architectures.",
          bestFor: "Autonomous tool orchestration, reasoning loops & AI visual pipelines"
        },
        {
          name: "OpenRouter",
          type: "LLM Gateway",
          url: "https://openrouter.ai",
          description: "Unified AI gateway API providing access to Claude 3.7, DeepSeek-R1, Llama 3.3, and GPT-4o with automatic fallback routing.",
          bestFor: "Multi-model routing, cost optimization & high availability"
        },
        {
          name: "Claude 3.7 Sonnet",
          type: "Frontier LLM",
          url: "https://docs.anthropic.com/en/docs/models/claude-3-7-sonnet",
          description: "Anthropic's hybrid reasoning model providing state-of-the-art tool calling precision and deterministic JSON schema outputs.",
          bestFor: "Complex agent reasoning & robust function calling"
        }
      ],
      callouts: {
        mistake: "Giving an autonomous agent access to write/delete API tools without strict confirmation guardrails, risking unintended bulk database deletions.",
        proTip: "Write detailed, unambiguous descriptions inside each Tool node's configuration; the LLM uses the tool description to decide when and how to call the function.",
        mistakes: [
          "Using small or quantized 7B models for multi-tool agent routing; smaller models frequently hallucinate parameter names and loop indefinitely.",
          "Omitting maximum iteration limits on the AI Agent node, allowing runaway reasoning loops that burn thousands of API tokens.",
          "Failing to configure structured output parsers when passing agent results to downstream database or notification nodes."
        ],
        proTips: [
          "Set 'Max Iterations: 5' on the AI Agent node to prevent runaway loops in case of unexpected external API errors.",
          "Use the 'Auto-fixing Output Parser' in n8n: if an agent generates malformed JSON, the parser sends the error back to the LLM to fix itself automatically.",
          "View real-time token execution traces directly inside n8n's canvas to debug exactly which tools the agent chose and why."
        ]
      },
      promptLab: {
        title: "Autonomous n8n AI Agent System Prompt & Tool Specification",
        description: "Author a production system prompt and tool definitions for an n8n AI Agent acting as an autonomous customer operations specialist.",
        variables: [
          {
            name: "Agent Domain",
            label: "Agent Specialization",
            options: ["Customer Operations & Refund Specialist", "Lead Enrichment & CRM Routing Agent", "Technical Incident Diagnostic Bot"],
            default: "Customer Operations & Refund Specialist"
          },
          {
            name: "Model Engine",
            label: "Reasoning LLM",
            options: ["Claude 3.7 Sonnet (Anthropic)", "GPT-4o (OpenAI)", "DeepSeek-R1 (OpenRouter)"],
            default: "Claude 3.7 Sonnet (Anthropic)"
          },
          {
            name: "Permitted Tools",
            label: "Available Visual Tools",
            options: ["Look Up Customer, Check Order Status, Process Refund", "Query Vector Store, Search Web, Send Slack Alert", "Fetch Logs, Query Postgres DB, Restart Service"],
            default: "Look Up Customer, Check Order Status, Process Refund"
          }
        ],
        template: `# n8n Autonomous AI Agent Architecture
Specialization: [Agent Domain]
LLM Engine: [Model Engine]
Tools: [Permitted Tools]

Generate:
1. Production System Instructions defining persona, operational constraints, and tool usage criteria.
2. Step-by-step tool invocation rules (when to query, when to escalate to human).
3. Structured Output JSON schema required by the Agent's output parser.`,
        expectedOutput: `### Configured n8n AI Agent Architecture

#### 1. System Prompt Configuration
\`\`\`markdown
You are an autonomous [Agent Domain]. Your objective is to resolve user requests efficiently using your attached visual tools.

Operational Principles:
1. Tool Precedence: Always call 'Look Up Customer' before attempting any order actions.
2. Financial Safeguards: You may autonomously issue refunds up to $50.00. Any refund request exceeding $50.00 must NOT be processed; instead, flag the case for human review.
3. Verification: Verify the customer's email and order ID match database records before disclosing shipping or tracking details.
4. Output: When all actions are complete, return your final assessment in the requested JSON structure.
\`\`\`

#### 2. Structured Output Schema (Zod / JSON Schema)
\`\`\`json
{
  "customer_id": "string",
  "resolution_status": "RESOLVED | ESCALATED | REJECTED",
  "action_taken": "string",
  "refund_amount": "number | null",
  "summary_message": "string"
}
\`\`\``
      },
      conceptGuide: {
        title: "Visual LangChain Architecture, ReAct Loops & Tool Binding",
        overview: "Traditional code-based agent frameworks require extensive boilerplate to instantiate runnables, manage chat memory, and bind functions. n8n abstracts this into a modular node cluster: the root 'AI Agent' node orchestrates execution, while sub-nodes supply the LLM chat model, memory buffers, vector embeddings, and tool definitions. Operating on the ReAct (Reason + Act) loop, the agent cycles through Thought, Action, Action Input, Observation, and Final Answer directly within n8n's visual execution graph.",
        keyPoints: [
          "**Visual LangChain Cluster:** Connect chat models, memory, tools, and parsers as visual sub-nodes plugged directly into the central Agent node.",
          "**ReAct Reasoning Cycles:** The agent autonomously evaluates intermediate tool outputs and decides whether to invoke additional tools.",
          "**Deterministic Guardrails:** Pairing structured output parsers with system instructions ensures the agent outputs machine-readable JSON."
        ]
      },
      learning: {
        resources: [
          {
            title: "n8n AI Agent Node Documentation & Setup Guide",
            url: "https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/",
            type: "Official Docs"
          },
          {
            title: "LangChain ReAct Agent Conceptual Guide",
            url: "https://python.langchain.com/docs/concepts/agents/",
            type: "Architecture Reference"
          },
          {
            title: "OpenRouter API Reference & Multi-Model Switching",
            url: "https://openrouter.ai/docs",
            type: "API Reference"
          },
          {
            title: "Anthropic Tool Use & Function Calling Guide",
            url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use",
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
      title: "Connecting Vector Stores & Conversational Memory to n8n Agents",
      timeEstimate: "2.5 hrs",
      difficulty: "Advanced",
      summary: "Give n8n agents persistent session memory (keyed by WhatsApp/Slack user ID) and live RAG retrieval over company knowledge bases.",
      description: "Stateless AI agents fail when users reference previous messages ('What did I ask earlier?') or require context from internal documentation. To deploy enterprise-grade AI assistants on WhatsApp, Slack, or web portals, n8n workflows must maintain persistent multi-turn conversational memory and perform live Retrieval-Augmented Generation (RAG) over corporate knowledge bases.\n\nn8n addresses this through dedicated memory and vector cluster nodes. By attaching a 'Postgres Chat Memory' or 'Redis Chat Memory' sub-node keyed to the user's phone number or Slack ID (`sessionId: $json.user_id`), conversations persist seamlessly across server restarts. Simultaneously, attaching a 'Vector Store Tool' connected to Supabase pgvector, Qdrant, or Pinecone allows the agent to semantically search PDFs, API documentation, and product catalogs to provide grounded, citation-backed answers without hallucinations.",
      playbook: {
        setup: "Deploy a Supabase Postgres database with pgvector enabled. In n8n, create a vector ingestion workflow that reads markdown documentation, chunks text using the 'Recursive Character Text Splitter', embeds chunks with OpenAI Embeddings, and stores them in Supabase.",
        execute: "In your conversational AI workflow, attach a 'Vector Store Tool' to the AI Agent node and point it to the Supabase vector table. Attach a 'Postgres Chat Memory' node, configuring `sessionKey: {{ $json.from_number }}` and `tableName: chat_histories`.",
        verify: "Send a message via webhook: 'My company is Acme Corp, what is our refund policy on annual plans?'. Send a follow-up message: 'What company did I say I work for?'. Verify the agent answers both questions accurately using vector search and persistent memory."
      },
      tools: [
        {
          name: "Supabase Vector Store Node",
          type: "AI Vector Node",
          url: "https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.vectorstoresupabase/",
          description: "n8n sub-node providing native semantic search and embedding storage using Supabase's open-source pgvector extension.",
          bestFor: "Enterprise RAG knowledge bases & vector similarity search"
        },
        {
          name: "Postgres Chat Memory Node",
          type: "Memory Node",
          url: "https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorypostgresqlchat/",
          description: "Persistent multi-session conversation buffer storing message history in PostgreSQL tables keyed by user or channel ID.",
          bestFor: "Multi-turn WhatsApp, Slack, and chatbot conversation memory"
        },
        {
          name: "Pinecone",
          type: "Managed Vector DB",
          url: "https://www.pinecone.io",
          description: "Serverless cloud vector database supporting millisecond semantic search across millions of embedded documents.",
          bestFor: "High-scale enterprise vector retrieval & managed indices"
        }
      ],
      callouts: {
        mistake: "Using in-memory Window Buffer memory in production workflows, which resets and forgets all conversation history every time the n8n container restarts or scales.",
        proTip: "Set 'Context Window Length: 10' on the Postgres Chat Memory node to pass the last 10 conversational turns to the model, balancing context awareness with token costs.",
        mistakes: [
          "Embedding entire 50-page PDF documents as single vectors without chunking, destroying semantic retrieval precision.",
          "Using different embedding models for ingestion vs. querying (e.g. embedding with OpenAI `text-embedding-3-small` and querying with Cohere), causing 0% similarity matches.",
          "Failing to partition chat history tables with unique session keys, causing distinct user conversations to intermingle."
        ],
        proTips: [
          "Use the 'Recursive Character Text Splitter' node with `chunkSize: 1000` and `chunkOverlap: 200` to preserve context across paragraph boundaries.",
          "Filter vector retrieval by metadata (e.g. `doc_type: 'security_policy'`) directly inside n8n's vector tool node to narrow search scope.",
          "Periodically run an automated cleanup workflow to purge chat history sessions inactive for more than 90 days to comply with GDPR."
        ]
      },
      promptLab: {
        title: "Conversational RAG Workflow Architecture & Vector Schema",
        description: "Author an end-to-end architecture blueprint connecting Postgres chat memory and Supabase pgvector retrieval to a multi-turn n8n assistant.",
        variables: [
          {
            name: "Channel Interface",
            label: "User Interface",
            options: ["WhatsApp Business API (Twilio / Cloud API)", "Slack Bot Channel (@Mention)", "Webchat Widget (Embeddable)"],
            default: "WhatsApp Business API (Twilio / Cloud API)"
          },
          {
            name: "Memory Backend",
            label: "Session Persistence",
            options: ["Postgres Chat Memory (Supabase / RDS)", "Redis Chat Memory (Upstash / ElastiCache)"],
            default: "Postgres Chat Memory (Supabase / RDS)"
          },
          {
            name: "Vector Store",
            label: "Knowledge Retrieval",
            options: ["Supabase pgvector (Open-source SQL)", "Pinecone Serverless Vector Store", "Qdrant Vector Database"],
            default: "Supabase pgvector (Open-source SQL)"
          }
        ],
        template: `# Conversational RAG Architecture: [Channel Interface]
Memory Store: [Memory Backend]
Vector DB: [Vector Store]

Design the complete workflow topology:
1. Ingestion: Webhook receiving user message and extracting unique session identifier.
2. Memory: Configuration parameters for [Memory Backend] (session key, table schema, window size).
3. RAG Retrieval Tool: Vector similarity search settings (top-k, match threshold, embedding model).
4. Outbound Response: Formatting and dispatching response back to [Channel Interface].`,
        expectedOutput: `### Conversational RAG Topology for WhatsApp

#### 1. Inbound Webhook
- **Trigger:** WhatsApp Webhook POST
- **Session Key:** \`{{ $json.body.From }}\` (e.g., \`whatsapp:+14155552671\`)
- **User Prompt:** \`{{ $json.body.Body }}\`

#### 2. Postgres Chat Memory Sub-Node
- **Connection:** Supabase PostgreSQL Pooler
- **Table Name:** \`n8n_chat_histories\`
- **Session Key:** \`={{ $json.body.From }}\`
- **Context Window:** \`10 turns\`

#### 3. Vector Store Tool (Supabase pgvector)
- **Tool Name:** \`company_knowledge_base\`
- **Description:** \`Use this tool to look up corporate return policies, technical specs, and SLA documentation.\`
- **Embedding Model:** \`text-embedding-3-small\` (1536 dims)
- **Top K:** \`4 documents\`
- **Distance Metric:** \`Cosine Similarity (Threshold: 0.78)\`

#### 4. Outbound Response
- **Node:** WhatsApp Outbound Send Message
- **To:** \`{{ $('Webhook').item.json.body.From }}\`
- **Message:** \`{{ $json.output }}\``
      },
      conceptGuide: {
        title: "Session Persistence, Vector Embeddings & Hybrid RAG Retrieval",
        overview: "An autonomous agent without memory is functionally amnesic across turns. By connecting an external persistence layer (like PostgreSQL or Redis) through a session key, the agent receives previous conversation history prepended to its prompt context envelope. Simultaneously, Retrieval-Augmented Generation (RAG) resolves the knowledge cutoff problem: enterprise documents are split into semantic chunks, vectorized into multi-dimensional embeddings, and stored in vector databases. When a user asks a question, the vector store retrieves the top-k most semantically relevant passages, grounding the model in verified facts.",
        keyPoints: [
          "**Stateful Memory Buffering:** Persisting conversation turns in Postgres keyed by user ID allows multi-day asynchronous dialogue.",
          "**Semantic Chunking & Overlap:** Splitting documents with overlap ensures conceptual boundaries and table headers are preserved.",
          "**Grounded RAG Guardrails:** Providing retrieved document chunks as mandatory system context cuts model hallucination rates to near zero."
        ]
      },
      learning: {
        resources: [
          {
            title: "n8n Vector Store Nodes Documentation (Supabase & Pinecone)",
            url: "https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.vectorstoresupabase/",
            type: "Official Docs"
          },
          {
            title: "n8n PostgreSQL Chat Memory Setup Guide",
            url: "https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorypostgresqlchat/",
            type: "Official Docs"
          },
          {
            title: "Supabase pgvector: Open Source Vector Embeddings Guide",
            url: "https://supabase.com/docs/guides/ai",
            type: "Technical Guide"
          },
          {
            title: "Pinecone Vector Database Architecture Overview",
            url: "https://docs.pinecone.io/guides/get-started/overview",
            type: "Documentation"
          }
        ]
      }
    },

    // Node 9
    {
      id: "step-9",
      stepNumber: 9,
      phaseId: "phase-3",
      title: "Exposing n8n Workflows as Custom AI Agent Tools & MCP Servers",
      timeEstimate: "2 hrs",
      difficulty: "Advanced",
      summary: "Allow an AI agent (or external MCP client like Cursor/Claude Desktop) to dynamically trigger visual sub-workflows to query CRMs or book calendar slots.",
      description: "While using LLMs inside n8n is powerful, an even more transformative paradigm is flipping the relationship: exposing n8n workflows as executable tools for external AI models, Claude Desktop, and Cursor IDE agents via the Model Context Protocol (MCP).\n\nInstead of hardcoding custom API integrations into Python agent frameworks, developers can build visual n8n workflows (e.g. 'Search Salesforce', 'Create Stripe Invoice', 'Query Production Database') and expose them directly as callable tools. Using n8n's 'Custom Tool Workflow' node or dedicated MCP triggers, external agents can discover available tools, inspect their JSON parameter schemas, and invoke workflows on-demand. This transforms n8n into a unified, visual API gateway for the entire enterprise agent ecosystem.",
      playbook: {
        setup: "Create a dedicated n8n workflow named `[TOOL] Create Google Calendar Event`. Add an 'Execute Workflow Trigger' configuring required input parameters: `{ title, start_time, end_time, attendee_email }`.",
        execute: "Wire the trigger to the Google Calendar node to create the event. Return `{ event_id, calendar_link, status: 'confirmed' }`. In your main Agent workflow (or external MCP server configuration), add a 'Custom Tool' node pointing to this workflow and author an explicit description for the LLM.",
        verify: "Prompt your agent: 'Schedule an architecture review meeting with sarah@example.com for tomorrow at 2 PM'. Verify the agent autonomously triggers the sub-workflow, passes the extracted parameters, and returns the live Google Calendar link."
      },
      tools: [
        {
          name: "n8n Custom Tool Workflow",
          type: "AI Tool Node",
          url: "https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow/",
          description: "Converts any standard visual n8n workflow into an executable tool callable by LangChain AI Agents.",
          bestFor: "Turning complex workflows into reusable agent tools"
        },
        {
          name: "Model Context Protocol (MCP)",
          type: "Open Standard",
          url: "https://modelcontextprotocol.io",
          description: "Anthropic's open standard allowing desktop and IDE agents (Claude Desktop, Cursor) to discover and execute external tools.",
          bestFor: "Connecting AI editors and desktop clients to backend workflows"
        },
        {
          name: "Cursor AI IDE",
          type: "AI IDE",
          url: "https://cursor.com",
          description: "AI-native code editor capable of connecting to remote n8n MCP endpoints to execute backend database queries and automations.",
          bestFor: "IDE-driven automation triggering & developer workflows"
        }
      ],
      callouts: {
        mistake: "Failing to write clear parameter descriptions in the Custom Tool node, causing the LLM to guess variable names and pass malformed inputs.",
        proTip: "Use JSON Schema validation in the tool workflow trigger to guarantee that required arguments (like emails or dates) are strictly formatted before execution begins.",
        mistakes: [
          "Exposing destructive tools (e.g. database drop or user deletion) to external agents without an interactive Human-in-the-Loop confirmation step.",
          "Returning massive unstructured binary payloads from tool workflows to the LLM, exceeding the model's context window.",
          "Omitting timeout handling, allowing hung third-party API calls in tool workflows to freeze the parent agent's execution."
        ],
        proTips: [
          "Wrap the output of your tool workflow in a concise summary string so the agent receives exactly the facts it needs without wasting tokens.",
          "Use n8n webhooks with MCP SSE (Server-Sent Events) formatting to connect custom n8n workflows directly into Claude Desktop's tool registry.",
          "Tag tools with semantic categories (e.g. `category: 'billing'`, `category: 'devops'`) to dynamically load tools based on user prompt context."
        ]
      },
      promptLab: {
        title: "n8n Workflow-as-a-Tool Specification & MCP Schema Generator",
        description: "Author a comprehensive JSON schema and tool description for exposing a multi-step n8n visual automation to external AI agents.",
        variables: [
          {
            name: "Tool Capability",
            label: "Tool Purpose",
            options: ["Create Stripe Invoice & Send Payment Link", "Provision Sandbox AWS Cloud Environment", "Query PostgreSQL Analytics Warehouse"],
            default: "Create Stripe Invoice & Send Payment Link"
          },
          {
            name: "Caller Agent",
            label: "Consuming AI Client",
            options: ["n8n Internal LangChain Agent", "Claude Desktop (via MCP)", "Cursor IDE Agent (via MCP)"],
            default: "n8n Internal LangChain Agent"
          },
          {
            name: "Error Strategy",
            label: "Tool Failure Handling",
            options: ["Return Clean Descriptive Error to Agent to Self-Heal", "Fail Workflow Immediately"],
            default: "Return Clean Descriptive Error to Agent to Self-Heal"
          }
        ],
        template: `# Workflow-as-a-Tool Specification: [Tool Capability]
Consumer: [Caller Agent]
Error Protocol: [Error Strategy]

Provide:
1. Tool Name (snake_case) & Comprehensive Natural Language Tool Description.
2. Argument Schema (JSON Schema with descriptions, types, and required fields).
3. n8n Sub-Workflow Implementation Details (Nodes involved, execution safety).
4. Output Schema returned to the Agent's reasoning context.`,
        expectedOutput: `### Configured Tool: \`create_stripe_invoice\`

#### 1. Tool Metadata
- **Name:** \`create_stripe_invoice\`
- **Description:** \`Use this tool to generate an official Stripe invoice and retrieve a live hosted payment URL. Input requires the customer's email address, item description, and total amount in US dollars. Only invoke this tool when the customer has explicitly approved the purchase.\`

#### 2. Argument JSON Schema
\`\`\`json
{
  "type": "object",
  "properties": {
    "customer_email": {
      "type": "string",
      "description": "The customer's verified billing email address (e.g. client@example.com)"
    },
    "amount_usd": {
      "type": "number",
      "description": "Total invoice charge in USD (e.g. 250.00)"
    },
    "description": {
      "type": "string",
      "description": "Itemized description of services rendered (e.g. '5 hours architectural consulting')"
    }
  },
  "required": ["customer_email", "amount_usd", "description"]
}
\`\`\`

#### 3. Output Payload Returned to Agent Context
\`\`\`json
{
  "success": true,
  "invoice_id": "in_1Nzk94B184",
  "payment_url": "https://invoice.stripe.com/i/acct_123/invst_456",
  "status": "open"
}
\`\`\``
      },
      conceptGuide: {
        title: "Model Context Protocol (MCP), Tool Calling & Visual APIs",
        overview: "The Model Context Protocol (MCP) establishes a standardized contract for AI models to discover and interact with external data sources and tools. Traditionally, connecting an agent to enterprise systems required writing custom API wrappers in Python or TypeScript. By leveraging n8n as an MCP server or custom tool host, engineers can build robust, visually debuggable tool actions—leveraging all of n8n's pre-built credentials, retries, and data transformations—and expose them as uniform functions to any frontier AI model.",
        keyPoints: [
          "**Standardized AI Connectivity:** MCP establishes an open protocol allowing Claude, Cursor, and custom agents to execute external tools safely.",
          "**Visual Tool Implementation:** Build complex multi-step backend operations in n8n visually instead of hand-coding API integrations in Python.",
          "**Self-Healing Error Feedback:** Returning structured error messages allows calling agents to correct invalid arguments autonomously."
        ]
      },
      learning: {
        resources: [
          {
            title: "n8n Custom Workflow Tool Node Documentation",
            url: "https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow/",
            type: "Official Docs"
          },
          {
            title: "Model Context Protocol (MCP) Official Specification",
            url: "https://modelcontextprotocol.io/introduction",
            type: "Open Standard"
          },
          {
            title: "Anthropic Claude Desktop MCP Integration Guide",
            url: "https://docs.anthropic.com/en/docs/agents-and-tools/mcp",
            type: "Integration Guide"
          },
          {
            title: "Cursor AI: Working with External MCP Servers",
            url: "https://docs.cursor.com/context/model-context-protocol",
            type: "IDE Documentation"
          }
        ]
      }
    },

    // Node 10
    {
      id: "step-10",
      stepNumber: 10,
      phaseId: "phase-4",
      title: "Bulletproof Error Workflows, Dead-Letter Queues & Retries",
      timeEstimate: "2 hrs",
      difficulty: "Advanced",
      summary: "Configure exponential backoff retries on flaky APIs and route failed execution payloads to a dedicated Slack/Postgres alert workflow.",
      description: "In production automation, failures are inevitable: third-party SaaS APIs experience downtime, rate limits trigger 429 errors, database connections time out, and incoming webhook payloads occasionally contain malformed data. In amateur setups, an unhandled error halts execution immediately, losing the triggering payload and requiring manual investigation.\n\nProduction engineering demands resilient fault tolerance. This requires configuring node-level retry policies with exponential backoff (e.g., retrying 3 times with doubling wait intervals: 2s, 4s, 8s) to overcome transient network blips. For unrecoverable failures, workflows must utilize dedicated 'Error Trigger' workflows in n8n or 'Break / Resume' directives in Make. When an execution fails, n8n automatically packages the execution ID, failed node name, stack trace, and triggering payload into a Dead-Letter Queue (DLQ) in PostgreSQL and alerts the on-call engineering team via Slack.",
      playbook: {
        setup: "Create a dedicated workflow named `[SYS] Global Error Handler`. Add an 'Error Trigger' node as the starting module.",
        execute: "Inside the error workflow, extract `{{ $json.execution.id }}`, `{{ $json.execution.error.message }}`, and the failed node name. Format a structured Slack Block Kit message with a direct link to the failed execution: `https://n8n.yourdomain.com/workflow/{{ $json.workflow.id }}/executions/{{ $json.execution.id }}`. In your primary production workflows, open Workflow Settings and set 'Error Workflow' to point to this handler.",
        verify: "Trigger a synthetic error in your primary workflow (e.g. calling an invalid URL in an HTTP Request node). Verify the main workflow terminates cleanly, the global error workflow triggers automatically, and a detailed alert arrives in Slack within 3 seconds."
      },
      tools: [
        {
          name: "n8n Error Trigger",
          type: "Core Error Handler",
          url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.errortrigger/",
          description: "Global error monitoring trigger that automatically captures failed execution contexts, stack traces, and triggering payloads.",
          bestFor: "Global incident handling, dead-letter queues & automated Slack alerting"
        },
        {
          name: "Make Error Handlers (Break/Resume)",
          type: "Flow Control",
          url: "https://www.make.com/en/help/errors/error-handling",
          description: "Granular error directives (Ignore, Rollback, Commit, Resume, Break) enabling automatic retries with incomplete execution queues.",
          bestFor: "SaaS rate-limit handling & transactional rollback"
        },
        {
          name: "Slack API / Webhooks",
          type: "Alert Channel",
          url: "https://api.slack.com/messaging/webhooks",
          description: "Real-time communication endpoint for dispatching structured Block Kit incident cards with one-click replay URLs.",
          bestFor: "On-call engineering alerts & failure triage"
        }
      ],
      callouts: {
        mistake: "Setting retry counts too high without exponential backoff on endpoints returning HTTP 400 Bad Request, hammering third-party APIs with guaranteed failures and getting IP-banned.",
        proTip: "Store failed execution payloads in a dedicated PostgreSQL `dead_letter_queue` table; build a secondary 'Replay DLQ' workflow to re-inject failed items once the external outage is resolved.",
        mistakes: [
          "Relying on silent failures with 'Continue On Fail' without logging the error, causing data discrepancies between systems that go unnoticed for weeks.",
          "Sending unformatted raw error stack traces to public company channels, creating noise and panic among non-technical team members.",
          "Failing to set timeouts on HTTP Request nodes, allowing hung TCP connections to hold workflow execution slots open indefinitely."
        ],
        proTips: [
          "Use n8n's Retry On Fail option directly on external HTTP Request nodes: set `Max Tries: 3` and `Wait Between Tries: 2000ms` with exponential backoff.",
          "Include a direct 'Re-run Execution' URL in your Slack alert cards so on-call engineers can replay the failed execution in one click from mobile.",
          "In Make, use the 'Break' error directive to automatically store failed executions in the Incomplete Executions queue for scheduled retry attempts."
        ]
      },
      promptLab: {
        title: "Enterprise Dead-Letter Queue (DLQ) & Slack Alert Workflow",
        description: "Author a complete global error handler workflow specification in n8n that logs failures to a PostgreSQL DLQ table and formats an interactive Slack alert.",
        variables: [
          {
            name: "Alert Destination",
            label: "Incident Channel",
            options: ["Slack Private Channel (#alerts-prod)", "PagerDuty High-Urgency Incident", "Microsoft Teams Webhook"],
            default: "Slack Private Channel (#alerts-prod)"
          },
          {
            name: "DLQ Storage",
            label: "Dead-Letter Persistence",
            options: ["PostgreSQL Table (Failed Payloads + Traces)", "AWS S3 / Cloudflare R2 JSON Archive", "Airtable Incident Log"],
            default: "PostgreSQL Table (Failed Payloads + Traces)"
          },
          {
            name: "Replay Capability",
            label: "Remediation Strategy",
            options: ["Automated One-Click Replay Webhook", "Manual Inspection via n8n Execution URL"],
            default: "Automated One-Click Replay Webhook"
          }
        ],
        template: `# Global Error Handling & DLQ Blueprint
Alerting: [Alert Destination]
DLQ Storage: [DLQ Storage]
Remediation: [Replay Capability]

Design the complete error handling pipeline:
1. Error Trigger node parameter mapping (Workflow ID, Execution ID, Error Message).
2. SQL Schema and insert query for storing the failed payload in [DLQ Storage].
3. Interactive notification message template for [Alert Destination].
4. Recommended retry and exponential backoff policies for flaky API nodes.`,
        expectedOutput: `### Global Error Handling Architecture

#### 1. Dead-Letter Queue SQL Schema (Postgres)
\`\`\`sql
CREATE TABLE IF NOT EXISTS dead_letter_queue (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workflow_id VARCHAR(100) NOT NULL,
  workflow_name VARCHAR(255) NOT NULL,
  execution_id VARCHAR(100) NOT NULL,
  error_message TEXT NOT NULL,
  failed_node VARCHAR(100) NOT NULL,
  payload JSONB NOT NULL,
  resolved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
\`\`\`

#### 2. Postgres DLQ Insert Node (n8n)
\`\`\`sql
INSERT INTO dead_letter_queue (workflow_id, workflow_name, execution_id, error_message, failed_node, payload)
VALUES (
  '{{ $json.workflow.id }}',
  '{{ $json.workflow.name }}',
  '{{ $json.execution.id }}',
  '{{ $json.execution.error.message }}',
  '{{ $json.execution.lastNodeExecuted }}',
  '{{ JSON.stringify($json.execution.data || {}) }}'::jsonb
);
\`\`\`

#### 3. Slack Block Kit Alert Card
\`\`\`json
{
  "blocks": [
    {
      "type": "header",
      "text": { "type": "plain_text", "text": "🚨 Workflow Execution Failed" }
    },
    {
      "type": "section",
      "fields": [
        { "type": "mrkdwn", "text": "*Workflow:*\\n{{ $json.workflow.name }}" },
        { "type": "mrkdwn", "text": "*Failed Node:*\\n{{ $json.execution.lastNodeExecuted }}" },
        { "type": "mrkdwn", "text": "*Error:*\\n\`{{ $json.execution.error.message }}\`" },
        { "type": "mrkdwn", "text": "*Time:*\\n<!date^{{ Math.floor(Date.now()/1000) }}^{date_num} {time_secs}|{{ $now }}>" }
      ]
    },
    {
      "type": "actions",
      "elements": [
        {
          "type": "button",
          "text": { "type": "plain_text", "text": "Inspect in n8n" },
          "url": "https://n8n.domain.com/workflow/{{ $json.workflow.id }}/executions/{{ $json.execution.id }}",
          "style": "danger"
        }
      ]
    }
  ]
}
\`\`\``
      },
      conceptGuide: {
        title: "Dead-Letter Queues (DLQ), Transient vs. Fatal Errors & Backoff",
        overview: "In production engineering, errors are categorized into two classes: transient errors (temporary network timeouts, rate limit throttles, 502 Bad Gateway) and fatal errors (authentication failures, invalid JSON schemas, 404 Not Found). Transient errors must be resolved automatically using exponential backoff retry algorithms: doubling wait times between attempts to allow external services to recover. Fatal errors must never loop; they should trigger a Dead-Letter Queue (DLQ) pipeline that preserves raw payload state and notifies human operators.",
        keyPoints: [
          "**Exponential Backoff Retries:** Automatically resolves over 90% of transient network glitches and rate-limiting spikes.",
          "**Dead-Letter Queue (DLQ):** Persisting failed payloads to PostgreSQL guarantees zero data loss, enabling subsequent re-execution.",
          "**Centralized Error Triggers:** Utilizing global error handling workflows standardizes alerting across hundreds of distinct enterprise scenarios."
        ]
      },
      learning: {
        resources: [
          {
            title: "n8n Error Trigger Node Official Documentation",
            url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.errortrigger/",
            type: "Official Docs"
          },
          {
            title: "Make: Error Handling Directives & Incomplete Executions",
            url: "https://www.make.com/en/help/errors/error-handling",
            type: "Official Docs"
          },
          {
            title: "AWS Architecture: Dead-Letter Queue (DLQ) Implementation Patterns",
            url: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html",
            type: "Architecture Standard"
          },
          {
            title: "Slack Block Kit Builder & Interactive Messaging Reference",
            url: "https://api.slack.com/block-kit",
            type: "Developer Tools"
          }
        ]
      }
    },

    // Node 11
    {
      id: "step-11",
      stepNumber: 11,
      phaseId: "phase-4",
      title: "Self-Hosting n8n with Docker, Postgres & Queue Mode",
      timeEstimate: "3 hrs",
      difficulty: "Advanced",
      summary: "Deploy unlimited-execution self-hosted n8n instances backed by PostgreSQL and Redis workers for high-volume concurrency.",
      description: "While managed cloud automation platforms enforce strict monthly execution caps and cost surcharges for high-volume workflows, self-hosting n8n unlocks unlimited workflow executions, zero data egress to third-party clouds, and compliance with strict privacy regulations (GDPR, HIPAA, SOC2).\n\nA production deployment requires graduating beyond default SQLite storage to a robust multi-container architecture. This consists of: a dedicated PostgreSQL database container for relational workflow state, a persistent Docker volume for credentials and binary storage, and—for high-throughput enterprise scale—configuring n8n in 'Queue Mode'. In Queue Mode, incoming webhooks are placed into an in-memory Redis queue, and stateless n8n worker containers pull and process jobs concurrently, allowing the cluster to scale horizontally to millions of monthly executions.",
      playbook: {
        setup: "Provision a Linux VPS (Ubuntu 24.04 on Railway, Coolify, or Hetzner). Install Docker and Docker Compose: `sudo apt-get install docker.io docker-compose-plugin`.",
        execute: "Create a production `docker-compose.yml` defining the `n8n`, `postgres`, and `caddy` (automatic SSL reverse proxy) services. Configure environment variables: `DB_TYPE=postgresdb`, `N8N_ENCRYPTION_KEY`, `WEBHOOK_URL=https://n8n.yourdomain.com`, and `N8N_RUNNERS_ENABLED=true`. Launch the stack: `docker compose up -d`.",
        verify: "Visit `https://n8n.yourdomain.com`. Complete initial admin onboarding. Check `docker compose logs -f n8n` to verify the instance successfully connects to PostgreSQL, activates database migrations, and reports zero startup errors."
      },
      tools: [
        {
          name: "Docker & Docker Compose",
          type: "Container Runtime",
          url: "https://docs.docker.com/compose/",
          description: "Declarative container orchestration framework for managing multi-service n8n, Postgres, and Redis deployments.",
          bestFor: "Production self-hosting, environment isolation & automated restarts"
        },
        {
          name: "Railway",
          type: "Cloud PaaS",
          url: "https://railway.app",
          description: "Developer-friendly cloud platform supporting one-click template deployments of self-hosted n8n with automated SSL and Postgres.",
          bestFor: "Rapid one-click cloud hosting & zero-devops deployments"
        },
        {
          name: "Coolify",
          type: "Self-Hosted PaaS",
          url: "https://coolify.io",
          description: "Open-source, self-hosted alternative to Heroku/Render for managing n8n, Docker containers, and databases on your own VPS.",
          bestFor: "Full infrastructure sovereignty & multi-app homelabs"
        }
      ],
      callouts: {
        mistake: "Deploying self-hosted n8n in production with the default SQLite database; under high concurrent webhook traffic, SQLite locks up and corrupts workflow execution state.",
        proTip: "Always back up your `N8N_ENCRYPTION_KEY` environment variable in a secure password manager; if this key is lost, all stored credentials (API keys, OAuth tokens) are permanently unrecoverable.",
        mistakes: [
          "Failing to set `WEBHOOK_URL` in environment variables, causing n8n to generate `localhost:5678` webhook URLs that external SaaS apps cannot reach.",
          "Neglecting automated Docker volume backups for PostgreSQL data, risking total workflow loss upon server disk corruption.",
          "Allowing execution history to accumulate indefinitely without pruning (`EXECUTIONS_DATA_PRUNE=true`), filling VPS hard drives within months."
        ],
        proTips: [
          "Enable automatic pruning in your environment: `EXECUTIONS_DATA_PRUNE=true`, `EXECUTIONS_DATA_MAX_AGE=168` (prunes history older than 7 days) to keep database sizes minimal.",
          "Use Caddy as your reverse proxy container to obtain automatic Let's Encrypt SSL certificates with zero manual configuration.",
          "Scale workers horizontally in Queue Mode by running `docker compose up -d --scale n8n-worker=4`."
        ]
      },
      promptLab: {
        title: "Production Docker Compose Manifest for Self-Hosted n8n & Postgres",
        description: "Author a hardened, production-ready Docker Compose configuration file with PostgreSQL, automatic Let's Encrypt SSL via Caddy, and automated pruning.",
        variables: [
          {
            name: "Host Domain",
            label: "FQDN Domain",
            options: ["n8n.yourcompany.com", "automate.internal.dev", "workflows.agency.io"],
            default: "n8n.yourcompany.com"
          },
          {
            name: "Execution Scale",
            label: "Concurrency Architecture",
            options: ["Single-Instance Standard (Up to 100k execs/mo)", "Redis Queue Mode with Worker Scaling (1M+ execs/mo)"],
            default: "Single-Instance Standard (Up to 100k execs/mo)"
          },
          {
            name: "History Retention",
            label: "Execution Pruning",
            options: ["7 Days Retention (Recommended)", "14 Days Retention", "30 Days Retention"],
            default: "7 Days Retention (Recommended)"
          }
        ],
        template: `# Production Docker Compose Architecture
Domain: [Host Domain]
Architecture: [Execution Scale]
Retention Policy: [History Retention]

Generate:
1. Complete docker-compose.yml with n8n, postgres:16-alpine, and caddy reverse proxy.
2. Production environment variable declarations (.env template) including encryption keys and pruning flags.
3. Automated backup bash script for nightly Postgres pg_dump snapshots.`,
        expectedOutput: `### Production Docker Compose Configuration (\`docker-compose.yml\`)

\`\`\`yaml
version: '3.8'

volumes:
  n8n_data:
  postgres_data:
  caddy_data:
  caddy_config:

services:
  postgres:
    image: postgres:16-alpine
    container_name: n8n-postgres
    restart: always
    environment:
      - POSTGRES_USER=\${DB_POSTGRESDB_USER}
      - POSTGRES_PASSWORD=\${DB_POSTGRESDB_PASSWORD}
      - POSTGRES_DB=\${DB_POSTGRESDB_DATABASE}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ['CMD-SHELL', 'pg_isready -h localhost -U \${DB_POSTGRESDB_USER} -d \${DB_POSTGRESDB_DATABASE}']
      interval: 5s
      timeout: 5s
      retries: 10

  n8n:
    image: docker.n8n.io/n8nio/n8n:latest
    container_name: n8n-core
    restart: always
    environment:
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=postgres
      - DB_POSTGRESDB_PORT=5432
      - DB_POSTGRESDB_DATABASE=\${DB_POSTGRESDB_DATABASE}
      - DB_POSTGRESDB_USER=\${DB_POSTGRESDB_USER}
      - DB_POSTGRESDB_PASSWORD=\${DB_POSTGRESDB_PASSWORD}
      - N8N_ENCRYPTION_KEY=\${N8N_ENCRYPTION_KEY}
      - N8N_HOST=\${SUBDOMAIN}.\${DOMAIN_NAME}
      - WEBHOOK_URL=https://\${SUBDOMAIN}.\${DOMAIN_NAME}/
      - GENERIC_TIMEZONE=America/New_York
      - EXECUTIONS_DATA_PRUNE=true
      - EXECUTIONS_DATA_MAX_AGE=168
      - EXECUTIONS_DATA_PRUNE_MAX_COUNT=50000
    volumes:
      - n8n_data:/home/node/.n8n
    depends_on:
      postgres:
        condition: service_healthy

  caddy:
    image: caddy:latest
    container_name: n8n-caddy
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
      - caddy_data:/data
      - caddy_config:/config
    depends_on:
      - n8n
\`\`\``
      },
      conceptGuide: {
        title: "Dockerized Architecture, Redis Queue Scaling & Database Pruning",
        overview: "Self-hosting n8n grants total sovereignty over corporate automation data. In standard single-instance mode, an asynchronous Node.js process handles webhook routing, job scheduling, and task execution backed by a PostgreSQL database. Under high-throughput enterprise scale, n8n transitions to Queue Mode: the main web container dispatches execution jobs to Redis, while multiple headless worker containers ingest and execute tasks concurrently across separate CPU cores or cluster nodes.",
        keyPoints: [
          "**PostgreSQL vs. SQLite:** PostgreSQL provides multi-threaded transactional integrity, preventing the database lockups inherent to SQLite.",
          "**Queue Mode Concurrency:** Redis-backed worker queues distribute high-volume webhook spikes across stateless worker pools.",
          "**Automated Data Pruning:** Purging old execution payloads after 7 days prevents database bloating and maintains fast dashboard query performance."
        ]
      },
      learning: {
        resources: [
          {
            title: "n8n Official Docker Compose Deployment Guide",
            url: "https://docs.n8n.io/hosting/installation/docker/",
            type: "Official Docs"
          },
          {
            title: "n8n Scaling & Queue Mode Architecture Documentation",
            url: "https://docs.n8n.io/hosting/scaling/queue-mode/",
            type: "Architecture Guide"
          },
          {
            title: "n8n Environment Variables Configuration Reference",
            url: "https://docs.n8n.io/hosting/configuration/environment-variables/",
            type: "Configuration Manual"
          },
          {
            title: "Coolify: Self-Hosting n8n PaaS Deployment Guide",
            url: "https://coolify.io/docs",
            type: "Deployment Guide"
          }
        ]
      }
    },

    // Node 12
    {
      id: "step-12",
      stepNumber: 12,
      phaseId: "phase-4",
      title: "Git Version Control, Credential Security & Webhook Scaling",
      timeEstimate: "2.5 hrs",
      difficulty: "Advanced",
      summary: "Back up workflow JSON blueprints automatically to GitHub, isolate staging vs. production credentials, and load-test webhook ingestion.",
      description: "In enterprise software engineering, code is version-controlled, reviewed via pull requests, and tested in staging environments before deploying to production. For visual automation to achieve enterprise reliability, the same rigorous DevOps practices must be applied to n8n workflows and Make scenarios.\n\nAutomating Git synchronization ensures every workflow modification is serialized into a clean JSON blueprint and committed to a private GitHub repository, providing instant disaster recovery, change history, and rollback capabilities. Furthermore, environments must enforce strict credential isolation: utilizing n8n Enterprise Environments or environment variable injection to guarantee that staging workflows test against sandbox API keys while production workflows access live credentials behind Cloudflare Tunnels and DDoS protection.",
      playbook: {
        setup: "Create a private GitHub repository named `enterprise-n8n-workflows`. Generate a GitHub Personal Access Token with `repo` permissions.",
        execute: "Configure an automated backup workflow in n8n that triggers daily (or on workflow save): queries the n8n REST API (`/api/v1/workflows`), formats each workflow as a standalone JSON file, and commits changes to your GitHub repository using the GitHub node. Protect your self-hosted instance by routing traffic through a Cloudflare Tunnel with DDoS mitigation enabled.",
        verify: "Make an edit to a workflow in n8n. Trigger the backup workflow and verify a new commit appears in your GitHub repository showing the exact JSON diff. Run an Apache Bench load test against your webhook endpoint: verify it sustains 100 requests per second with 0% dropped packets."
      },
      tools: [
        {
          name: "GitHub / Git",
          type: "Version Control",
          url: "https://github.com",
          description: "Distributed version control system providing immutable backup history, PR reviews, and disaster recovery for workflow JSON blueprints.",
          bestFor: "Workflow version control, disaster recovery & team reviews"
        },
        {
          name: "Cloudflare Tunnels",
          type: "Zero Trust Network",
          url: "https://www.cloudflare.com/products/tunnel/",
          description: "Secure, encrypted outbound tunneling connecting self-hosted n8n instances to the internet without opening inbound firewall ports.",
          bestFor: "Zero-exposure ingress security, DDoS protection & SSL offloading"
        },
        {
          name: "n8n Environments & Public API",
          type: "Enterprise Feature",
          url: "https://docs.n8n.io/api/",
          description: "Programmatic REST API for managing, exporting, importing, and activating workflows across staging and production instances.",
          bestFor: "CI/CD automation, programmatic backup & environment sync"
        }
      ],
      callouts: {
        mistake: "Exporting workflow JSON files to public repositories with hardcoded credentials or API keys embedded in node parameters, causing immediate credential compromise.",
        proTip: "Use Cloudflare Access zero-trust authentication in front of your n8n web dashboard, requiring Google Workspace or GitHub SSO before users can view the login screen.",
        mistakes: [
          "Editing production workflows live during peak traffic hours instead of testing alterations in an isolated staging instance.",
          "Opening port 5678 directly to the public internet on your VPS instead of using a reverse proxy or Cloudflare Tunnel.",
          "Failing to encrypt sensitive environment files (`.env`), leaving database passwords readable by unauthorized server users."
        ],
        proTips: [
          "n8n workflows are pure JSON under the hood; you can store them in Git and use GitHub Actions to deploy approved workflows automatically to production.",
          "Use n8n's built-in Git integration (available in enterprise tier) or write a 5-node community workflow to commit changes via GitHub's REST API.",
          "Run `k6` or `autocannon` load-testing scripts against your production webhooks to identify database pool bottlenecks before major product launches."
        ]
      },
      promptLab: {
        title: "Automated GitHub Backup Workflow & Cloudflare Tunnel Architecture",
        description: "Author an automated n8n workflow blueprint that queries the local n8n API, exports all active workflows, and commits formatted JSON files to GitHub.",
        variables: [
          {
            name: "Repository Target",
            label: "GitHub Destination",
            options: ["org/production-n8n-backups", "my-agency/automation-blueprints"],
            default: "org/production-n8n-backups"
          },
          {
            name: "Trigger Frequency",
            label: "Backup Cadence",
            options: ["Daily Cron (At 02:00 AM UTC)", "Hourly Sync", "Event-Driven via n8n Audit Webhook"],
            default: "Daily Cron (At 02:00 AM UTC)"
          },
          {
            name: "Ingress Security",
            label: "Network Protection",
            options: ["Cloudflare Zero Trust Tunnel (No Open Ports)", "Nginx Reverse Proxy with CrowdSec IP Ban", "Caddy with Cloudflare DNS Challenge"],
            default: "Cloudflare Zero Trust Tunnel (No Open Ports)"
          }
        ],
        template: `# Automated Git Backup & Security Blueprint
Repository: [Repository Target]
Cadence: [Trigger Frequency]
Ingress Protection: [Ingress Security]

Generate:
1. Complete workflow steps for automated Git backup (n8n API fetch -> formatting -> GitHub commit).
2. Cloudflare Tunnel configuration (cloudflared docker-compose service).
3. Disaster Recovery Protocol: Instructions to restore all workflows from GitHub into a fresh n8n instance.`,
        expectedOutput: `### Automated GitHub Workflow Backup System

#### 1. n8n Backup Workflow Steps
1. **Schedule Trigger:** Cron trigger configured for \`0 2 * * *\` (Daily 2 AM UTC).
2. **HTTP Request Node (n8n Internal API):**
   - URL: \`http://localhost:5678/api/v1/workflows\`
   - Headers: \`X-N8N-API-KEY: \${N8N_ADMIN_API_KEY}\`
3. **Split Out Node:** Splits \`$json.data\` array into individual workflow objects.
4. **Code Node (Sanitize & Prepare):**
\`\`\`javascript
const wf = $input.item.json;
const filename = \`workflows/\${wf.id}_\${wf.name.toLowerCase().replace(/[^a-z0-9]/g, '_')}.json\`;
const content = Buffer.from(JSON.stringify(wf, null, 2)).toString('base64');

return [{
  json: {
    path: filename,
    content: content,
    message: \`Automated backup of \${wf.name} [v\${wf.versionId}]\`
  }
}];
\`\`\`
5. **GitHub Node:** Action \`File: Create or Update\` targeting \`[Repository Target]\`.

#### 2. Cloudflare Tunnel Docker Compose Service
\`\`\`yaml
  cloudflared:
    image: cloudflare/cloudflared:latest
    container_name: n8n-tunnel
    restart: always
    environment:
      - TUNNEL_TOKEN=\${CLOUDFLARE_TUNNEL_TOKEN}
    command: tunnel --no-autoupdate run
\`\`\``
      },
      conceptGuide: {
        title: "Workflow CI/CD, Infrastructure-as-Code & Zero Trust Networking",
        overview: "As automations manage mission-critical business workflows, treating automation blueprints as ephemeral visual drawings is unacceptable. Workflows must be governed as Infrastructure-as-Code (IaC). Because n8n represents all workflows as deterministic JSON documents containing node connections, positions, and parameter schemas, they can be committed to Git repositories and audited with branch protections. Cloudflare Tunnels establish secure outbound-only encrypted tunnels, eliminating open inbound firewall ports.",
        keyPoints: [
          "**Infrastructure-as-Code (IaC):** Version-controlling workflow JSON files in Git guarantees audit trails, rollbacks, and team peer review.",
          "**Zero Inbound Ports:** Cloudflare Tunnels connect internal instances to the edge via outbound HTTPS, making server ports invisible to port scanners.",
          "**Automated Disaster Recovery:** In the event of VPS failure, a fresh n8n instance can re-import all workflows from GitHub in under 60 seconds."
        ]
      },
      learning: {
        resources: [
          {
            title: "n8n Public REST API Documentation",
            url: "https://docs.n8n.io/api/",
            type: "Official Docs"
          },
          {
            title: "Cloudflare Tunnels (cloudflared) Setup Guide",
            url: "https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/",
            type: "Security Documentation"
          },
          {
            title: "Git Automation: GitHub REST API for Content Management",
            url: "https://docs.github.com/en/rest/repos/contents",
            type: "API Reference"
          },
          {
            title: "OWASP API Security Top 10 Enterprise Guidelines",
            url: "https://owasp.org/www-project-api-security/",
            type: "Security Standard"
          }
        ]
      }
    }
  ]
};
