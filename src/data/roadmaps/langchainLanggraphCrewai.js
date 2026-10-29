// Complete production-grade steps data for "LangChain, LangGraph & CrewAI" Roadmap (12 Nodes)

export const langchainLanggraphCrewaiData = {
  id: "langchain-langgraph-crewai",
  title: "LangChain, LangGraph & CrewAI",
  description: "LCEL runnables, stateful LangGraph multi-agent systems, cyclic ReAct loops, and CrewAI role orchestration.",
  category: "Tool Mastery Roadmaps",
  stepCount: 12,
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: Composable LLM Chains, Structured Outputs & Tool Binding",
      description: "Master modern LangChain Expression Language (LCEL), enforce strict Pydantic/Zod schemas, and bind deterministic tools and function calling."
    },
    {
      id: "phase-2",
      title: "Phase 2: Agentic RAG & Dynamic Knowledge Retrieval",
      description: "Build semantic document chunking pipelines, hybrid vector search, and self-corrective retrieval loops (CRAG) with query rewriting."
    },
    {
      id: "phase-3",
      title: "Phase 3: Stateful Agent Graphs with LangGraph",
      description: "Replace brittle agent loops with explicit state machines, cyclic reasoning loops, persistent checkpointers, and human-in-the-loop interrupts."
    },
    {
      id: "phase-4",
      title: "Phase 4: Multi-Agent Crews (CrewAI) & Production Observability",
      description: "Orchestrate role-based agent crews, scale hierarchical supervisor-worker topologies, trace executions with LangSmith, and run automated evaluations."
    }
  ],
  steps: [
    {
      id: "step-1",
      stepNumber: 1,
      phaseId: "phase-1",
      title: "Modern LangChain Architecture & Runnable Pipelines (LCEL)",
      timeEstimate: "3-4 days",
      difficulty: "Beginner",
      summary: "Compose modular, streaming-first AI applications using LangChain Expression Language (LCEL) with native async execution and automated fallback retries.",
      description: "Early versions of LangChain relied on bloated, opaque class abstractions (`LLMChain`, `ConversationalRetrievalChain`) that made debugging and streaming token execution frustrating. Modern LangChain is built entirely on the Runnable protocol and LangChain Expression Language (LCEL). LCEL provides a declarative, pipe-based syntax (`prompt | model | output_parser`) where every component implements unified interfaces: `.invoke()`, `.stream()`, `.batch()`, and `.astream()`. This architecture guarantees zero-configuration streaming to web frontends, automated parallel branch execution via `RunnableParallel`, and bulletproof model failover with `.with_fallbacks()`.",
      playbook: {
        setup: "Initialize a Python 3.11+ virtual environment, install modern LangChain core packages (`pip install langchain-core langchain-openai langchain-anthropic`), and configure your API keys.",
        execute: "Construct an LCEL pipeline pairing a `ChatPromptTemplate`, a chat model (`ChatAnthropic`), and a `StrOutputParser()`. Chain them using the pipe operator: `chain = prompt | model.with_fallbacks([backup_model]) | StrOutputParser()`. Execute using async streaming: `async for chunk in chain.astream({'topic': 'distributed systems'}): print(chunk, end='', flush=True)`.",
        verify: "Run a simulated primary API failure (e.g., using an invalid key for the primary model) and verify that the pipeline silently fails over to the backup model without throwing unhandled exceptions."
      },
      tools: [
        {
          name: "LangChain",
          type: "Free",
          url: "https://python.langchain.com",
          description: "Enterprise framework for building LLM applications via composable Runnables.",
          bestFor: "LCEL pipelines, streaming abstractions & model wrappers"
        },
        {
          name: "Python",
          type: "Free",
          url: "https://python.org",
          description: "Primary programming language for AI engineering, async streaming, and LangChain.",
          bestFor: "Core backend pipeline execution"
        },
        {
          name: "OpenRouter",
          type: "Paid",
          url: "https://openrouter.ai",
          description: "Unified LLM gateway supporting seamless fallback routing across frontier models.",
          bestFor: "Model redundancy & automated failover endpoints"
        }
      ],
      callouts: {
        mistake: "Using deprecated legacy chains (`from langchain.chains import LLMChain`), which lack native async streaming, type hinting, and state inspection.",
        proTip: "Use `RunnableParallel` to execute multiple independent queries simultaneously (e.g., summary and sentiment) before feeding both into a final synthesizer.",
        mistakes: [
          "Invoking `.invoke()` synchronously inside high-throughput web server routes, blocking the event loop instead of using `.ainvoke()`.",
          "Failing to configure `.with_retry(stop_after_attempt=3)` on network-bound model calls, causing transient HTTP 429/503 errors to crash pipelines.",
          "Hardcoding model provider parameters instead of using `configurable_fields` to allow runtime swapping of models and temperatures."
        ],
        proTips: [
          "Inspect pipeline topology at runtime using `chain.get_graph().print_ascii()` to visualize parallel branches and data flow.",
          "Pass `config={'callbacks': [ConsoleCallbackHandler()]}` to view raw inputs, latency, and token consumption at each pipe stage.",
          "Use `RunnablePassthrough.assign()` to dynamically inject context and variables into the runnable dictionary stream without clobbering input keys."
        ]
      },
      promptLab: {
        title: "LCEL Multi-Branch Synthesis Pipeline Architect",
        description: "Compose a declarative LangChain Expression Language pipeline featuring parallel execution branches and model fallbacks.",
        variables: [
          {
            name: "Primary Model",
            label: "Primary LLM",
            options: [
              "ChatAnthropic(model='claude-3-7-sonnet-20250219', temperature=0.2)",
              "ChatOpenAI(model='gpt-4o', temperature=0.1)",
              "ChatOpenAI(model='o3-mini', reasoning_effort='medium')",
              "ChatGoogleGenerativeAI(model='gemini-2.0-flash', temperature=0.2)"
            ],
            default: "ChatAnthropic(model='claude-3-7-sonnet-20250219', temperature=0.2)"
          },
          {
            name: "Pipeline Goal",
            label: "Pipeline Objective",
            options: [
              "Parallel Code Security & Performance Review Synthesizer",
              "Customer Support Query Categorization & Sentiment Routing",
              "Technical Documentation Extraction & Markdown Formatter",
              "Financial Earnings Call Transcript Summarizer with Key Metric Extraction"
            ],
            default: "Parallel Code Security & Performance Review Synthesizer"
          },
          {
            name: "Fallback Strategy",
            label: "Model Failover",
            options: [
              "Failover to ChatOpenAI(model='gpt-4o-mini') with automated 3-attempt exponential backoff retry",
              "Failover to DeepSeek-V3 via OpenRouter with custom timeout threshold (5000ms)",
              "Failover to ChatAnthropic(model='claude-3-5-haiku') with graceful degradation alert",
              "Dual fallback sequence: Primary -> Secondary -> Local Ollama Llama 3.3"
            ],
            default: "Failover to ChatOpenAI(model='gpt-4o-mini') with automated 3-attempt exponential backoff retry"
          }
        ],
        template: `You are an expert AI Framework Engineer building an enterprise LangChain Expression Language (LCEL) application.

### Pipeline Specification:
- Objective: [Pipeline Goal]
- Primary Engine: [Primary Model]
- Failover Architecture: [Fallback Strategy]

### Technical Implementation Requirements:
1. Use modern 'langchain_core' imports exclusively (RunnableParallel, RunnablePassthrough, ChatPromptTemplate, StrOutputParser).
2. Construct two parallel branches: Branch A analyzes security vulnerabilities; Branch B analyzes performance bottlenecks.
3. Pipe both branch outputs into a final synthesis prompt that produces a cohesive markdown report.
4. Enable asynchronous streaming via 'astream()' with defensive try-except blocks.`,
        expectedOutput: `import asyncio
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnableParallel, RunnablePassthrough
from langchain_anthropic import ChatAnthropic
from langchain_openai import ChatOpenAI

# 1. Models & Fallbacks
primary_model = ChatAnthropic(model="claude-3-7-sonnet-20250219", temperature=0.2)
fallback_model = ChatOpenAI(model="gpt-4o-mini", temperature=0.2).with_retry(stop_after_attempt=3)
resilient_model = primary_model.with_fallbacks([fallback_model])

# 2. Parallel Analysis Prompts
security_prompt = ChatPromptTemplate.from_template(
    "Analyze the following code for OWASP security vulnerabilities:\n\n{code}\n\nList top 3 risks:"
)
perf_prompt = ChatPromptTemplate.from_template(
    "Analyze the following code for runtime and memory bottlenecks:\n\n{code}\n\nList top 3 optimizations:"
)

# 3. Synthesis Prompt
synthesis_prompt = ChatPromptTemplate.from_messages([
    ("system", "Synthesize security and performance findings into an actionable engineering review."),
    ("human", "Code Snippet:\n{code}\n\nSecurity Audit:\n{security_audit}\n\nPerformance Audit:\n{perf_audit}")
])

# 4. LCEL Assembly
analysis_branches = RunnableParallel({
    "code": RunnablePassthrough(),
    "security_audit": security_prompt | resilient_model | StrOutputParser(),
    "perf_audit": perf_prompt | resilient_model | StrOutputParser()
})

review_chain = analysis_branches | synthesis_prompt | resilient_model | StrOutputParser()

# 5. Async Streaming Execution
async def run_review(code_sample: str):
    async for chunk in review_chain.astream(code_sample):
        print(chunk, end="", flush=True)

if __name__ == "__main__":
    sample = "def fetch(url): return requests.get(url, verify=False).json()"
    asyncio.run(run_review(sample))`
      },
      conceptGuide: {
        title: "The Mechanics of the Runnable Protocol & Unix Pipe Philosophy",
        overview: "LangChain Expression Language (LCEL) applies the classic Unix pipeline philosophy (`cat file | grep pattern | sort`) to generative AI engineering. Every component in an LCEL pipeline adheres to the standard `Runnable` contract, taking an input stream and yielding an output stream. Because every link in the chain implements standardized methods (`invoke`, `batch`, `stream`), the LangChain runtime automatically optimizes execution: parallel branches run concurrently in thread pools without manual async code, tokens stream immediately to frontend web sockets as soon as the LLM generates them, and middle-layer transforms execute with zero overhead.",
        keyPoints: [
          "**Unified Interface:** Every Runnable implements the same 4 methods (`invoke`, `batch`, `stream`, and their async equivalents).",
          "**Deterministic Composition:** The pipe operator `|` binds inputs to outputs using type hints, catching interface mismatches before runtime.",
          "**Native Asynchronous Streaming:** Emits partial tokens instantly, eliminating latency bottlenecks in user-facing conversational UIs."
        ]
      },
      learning: {
        resources: [
          {
            title: "LangChain Expression Language (LCEL) Official Documentation",
            url: "https://python.langchain.com/docs/concepts/lcel",
            type: "Official Docs"
          },
          {
            title: "LangChain Core Runnable Protocol API Reference",
            url: "https://python.langchain.com/api_reference/core/runnables.html",
            type: "API Reference"
          },
          {
            title: "Building Resilient AI Pipelines with Fallbacks and Retries",
            url: "https://python.langchain.com/docs/how_to/fallbacks",
            type: "Architecture"
          },
          {
            title: "Asynchronous Python (asyncio) & Streaming Generator Specification",
            url: "https://docs.python.org/3/library/asyncio.html",
            type: "Guide"
          }
        ]
      }
    },
    {
      id: "step-2",
      stepNumber: 2,
      phaseId: "phase-1",
      title: "Strict Structured Outputs with Pydantic & Zod Schemas",
      timeEstimate: "3-4 days",
      difficulty: "Intermediate",
      summary: "Guarantee 100% type safety and eliminate JSON parse errors by binding Pydantic and Zod validation models to LLM outputs.",
      description: "Asking an LLM to 'return valid JSON' in a prompt is inherently brittle: models frequently append conversational preambles ('Here is your JSON:'), wrap responses in markdown fences, or omit required schema keys, crashing downstream backend code. Modern frontier models (OpenAI, Anthropic, Gemini) support native structured outputs via function/tool calling. LangChain encapsulates this capability with `.with_structured_output(schema)`. By passing a Pydantic model (Python) or Zod schema (TypeScript), LangChain forces the model's sampling engine to conform to the exact JSON schema, automatically validating types, regex patterns, and nested lists before returning typed objects.",
      playbook: {
        setup: "Install Pydantic v2 (`pip install pydantic`) alongside your model providers.",
        execute: "Define a Pydantic model with rich field descriptions and validation constraints: `class TicketClassification(BaseModel): priority: Literal['low', 'medium', 'high', 'urgent']; department: str; confidence_score: float = Field(ge=0.0, le=1.0)`. Bind it using `structured_llm = model.with_structured_output(TicketClassification)`.",
        verify: "Invoke the chain with ambiguous customer support tickets. Verify that the returned object is a true Pydantic instance where `result.priority` is accessible as a typed Python property, and validation fails fast if constraints are breached."
      },
      tools: [
        {
          name: "Pydantic",
          type: "Free",
          url: "https://docs.pydantic.dev",
          description: "Data validation and settings management using Python type annotations.",
          bestFor: "Data modeling & type validation in Python"
        },
        {
          name: "Zod",
          type: "Free",
          url: "https://zod.dev",
          description: "TypeScript-first schema declaration and validation library with static type inference.",
          bestFor: "TypeScript schema validation & parsing"
        },
        {
          name: "LangChain .with_structured_output()",
          type: "Free",
          url: "https://python.langchain.com/docs/how_to/structured_output/",
          description: "Native model method that guarantees schema-compliant structured JSON outputs.",
          bestFor: "Enforcing deterministic JSON output contracts"
        }
      ],
      callouts: {
        mistake: "Using regex or `json.loads()` to parse LLM outputs from raw text strings instead of using native structured output modes.",
        proTip: "Add detailed `Field(description='...')` docstrings to every model property: models treat field descriptions as high-priority semantic instructions.",
        mistakes: [
          "Forgetting to specify `Literal` options for categorical enum fields, allowing the model to hallucinate novel category names.",
          "Overly complex nested schemas with 5+ layers of depth, which degrade model adherence and increase inference latency.",
          "Using Pydantic v1 syntax in modern LangChain projects, leading to deprecation warnings and performance bottlenecks."
        ],
        proTips: [
          "Use Pydantic's `@field_validator` to enforce custom business logic rules (e.g. verifying that an extracted date is in the future).",
          "Pass `method='json_mode'` if you are using open-source models that do not support native tool calling schemas.",
          "Set `include_raw=True` in `.with_structured_output()` to receive both the parsed Pydantic object and the raw model token completion for debugging."
        ]
      },
      promptLab: {
        title: "Pydantic Schema Contract & Extraction Engine Prompt",
        description: "Configure strongly-typed Pydantic extraction models for zero-error entity parsing and classification.",
        variables: [
          {
            name: "Extraction Domain",
            label: "Entity Schema",
            options: [
              "B2B Sales Contract Risk & Clause Audit Model",
              "Medical Prescription & Dosage Verification Record",
              "Software Bug Report with Stack Trace & Reproduction Steps",
              "Financial Invoice & Line Item Expense Breakdown"
            ],
            default: "B2B Sales Contract Risk & Clause Audit Model"
          },
          {
            name: "Validation Constraints",
            label: "Field Validation Rules",
            options: [
              "Risk score between 1-100, liability cap dollar amount, governing law state, and boolean indemnity flag",
              "Medication name, dosage in milligrams (gt 0), frequency per day, and contraindication warning array",
              "Severity enum (P0-P3), affected component, reproduction step list (min_length=3), and root cause hypothesis",
              "Vendor tax ID, line items array with unit price and quantity, subtotal check, and currency code (ISO 4217)"
            ],
            default: "Risk score between 1-100, liability cap dollar amount, governing law state, and boolean indemnity flag"
          },
          {
            name: "Model Target",
            label: "Target Model",
            options: [
              "ChatOpenAI(model='gpt-4o', temperature=0.0)",
              "ChatAnthropic(model='claude-3-7-sonnet-20250219', temperature=0.0)",
              "ChatGoogleGenerativeAI(model='gemini-2.0-flash', temperature=0.0)",
              "ChatOpenAI(model='o3-mini')"
            ],
            default: "ChatOpenAI(model='gpt-4o', temperature=0.0)"
          }
        ],
        template: `You are an enterprise Data Architect configuring LangChain structured outputs.

Domain: [Extraction Domain]
Target Model: [Model Target]
Validation Constraints: [Validation Constraints]

Implement the complete Python code:
1. Define the Pydantic v2 model with strict field types, descriptions, and validators.
2. Configure the chat model with '.with_structured_output(Schema)'.
3. Demonstrate extracting structured data from unstructured enterprise text.`,
        expectedOutput: `from typing import List, Literal, Optional
from pydantic import BaseModel, Field, field_validator
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate

# 1. Define Strict Pydantic v2 Schema
class ContractRiskAudit(BaseModel):
    governing_law: str = Field(description="State or jurisdiction governing the agreement (e.g. 'Delaware', 'California')")
    liability_cap_amount: Optional[float] = Field(description="Total liability cap in USD, or None if uncapped")
    has_indemnity_clause: bool = Field(description="True if agreement includes intellectual property indemnity")
    risk_score: int = Field(ge=1, le=100, description="Overall legal risk score from 1 (safe) to 100 (critical risk)")
    flagged_clauses: List[str] = Field(description="List of problematic clauses requiring human legal review")

    @field_validator("governing_law")
    @classmethod
    def validate_jurisdiction(cls, v: str) -> str:
        if len(v.strip()) == 0:
            raise ValueError("Governing law cannot be empty")
        return v.title()

# 2. Configure Structured LLM
llm = ChatOpenAI(model="gpt-4o", temperature=0.0)
structured_extractor = llm.with_structured_output(ContractRiskAudit)

# 3. Execution Pipeline
prompt = ChatPromptTemplate.from_messages([
    ("system", "Extract legal risk parameters from enterprise vendor contracts with zero deviation from schema."),
    ("human", "{contract_text}")
])

chain = prompt | structured_extractor

sample_contract = """
This SaaS Agreement is governed by the laws of Delaware. Provider's total aggregate liability 
shall in no event exceed $250,000. Provider agrees to indemnify Customer against IP infringement claims. 
Customer agrees to perpetual binding arbitration without right of appeal.
"""

result: ContractRiskAudit = chain.invoke({"contract_text": sample_contract})
print(f"Risk Score: {result.risk_score}/100")
print(f"Liability Cap: USD {result.liability_cap_amount:,.2f}")
print(f"Governing Law: {result.governing_law}")`
      },
      conceptGuide: {
        title: "Grammar-Constrained Decoding vs. Post-Hoc Validation",
        overview: "In legacy LLM applications, structured output relied on post-hoc validation: the model generated natural text, and a JSON parser attempted to decode it. If a single comma was misplaced, the entire pipeline failed. Modern structured outputs utilize Grammar-Constrained Decoding at the token level. During inference, the LLM converts the JSON schema into a Context-Free Grammar (CFG) or finite state machine. At each token step, logits for invalid characters (e.g., generating letters when a number is required) are set to negative infinity. This mathematically guarantees that the model cannot output syntactically invalid JSON.",
        keyPoints: [
          "**Logit Masking:** Tokens that would violate the schema are masked out during autoregressive sampling, guaranteeing valid syntax.",
          "**Field Docstrings as Prompts:** Pydantic `Field(description='...')` strings are passed directly into the model's internal tool-definition payload.",
          "**Type-Safe Downstream Consumption:** Outputs deserialize into native class instances with complete IDE autocomplete and static type safety."
        ]
      },
      learning: {
        resources: [
          {
            title: "LangChain Structured Output How-To Guide & Schema Methods",
            url: "https://python.langchain.com/docs/how_to/structured_output/",
            type: "Official Docs"
          },
          {
            title: "Pydantic v2 Field Types, Validators & JSON Schema Documentation",
            url: "https://docs.pydantic.dev/latest/concepts/fields/",
            type: "API Reference"
          },
          {
            title: "OpenAI Structured Outputs Guide & JSON Schema Constraints",
            url: "https://platform.openai.com/docs/guides/structured-outputs",
            type: "Architecture"
          },
          {
            title: "Grammar-Constrained Decoding and Finite State Logit Masking",
            url: "https://github.com/outlines-dev/outlines",
            type: "Guide"
          }
        ]
      }
    },
    {
      id: "step-3",
      stepNumber: 3,
      phaseId: "phase-1",
      title: "Custom Tool Binding & Deterministic Function Calling",
      timeEstimate: "3-4 days",
      difficulty: "Intermediate",
      summary: "Transform language models into autonomous problem-solvers by binding custom Python functions, search APIs, and database lookups via tool decorators.",
      description: "LLMs alone are isolated reasoning engines: they cannot check current stock prices, execute SQL queries, or calculate compound interest. Function calling gives models hands to interact with external environments. LangChain streamlines tool creation via the `@tool` decorator. By defining standard Python functions with type hints and detailed docstrings, LangChain automatically generates OpenAI/Anthropic tool schemas. When bound using `model.bind_tools([tool_a, tool_b])`, the LLM dynamically decides when to halt text generation and emit structured `tool_calls` arguments to be executed by your application.",
      playbook: {
        setup: "Install Tavily search and LangChain community tool integrations (`pip install tavily-python langchain-community`).",
        execute: "Decorate custom Python functions using `@tool`: `@tool\ndef calculate_mortgage(principal: float, annual_interest_rate: float, term_years: int) -> float:\n    '''Calculates monthly mortgage payment for a fixed-rate loan.'''\n    # formula...`. Bind the tools to a chat model using `llm_with_tools = model.bind_tools([calculate_mortgage, tavily_search])`.",
        verify: "Invoke the model with a complex multi-part query: 'What is the current 30-year fixed mortgage rate, and what would my monthly payment be on an $800k loan?'. Verify that the model emits two discrete tool calls in sequence with valid numeric arguments."
      },
      tools: [
        {
          name: "LangChain Tools",
          type: "Free",
          url: "https://python.langchain.com/docs/concepts/tools/",
          description: "Tool abstraction engine converting Python functions into LLM-callable schemas.",
          bestFor: "Defining custom functions & external API connectors"
        },
        {
          name: "Tavily Search API",
          type: "Freemium",
          url: "https://tavily.com",
          description: "Search engine specifically optimized for LLMs and autonomous AI agents.",
          bestFor: "Real-time web knowledge retrieval without scraping noise"
        },
        {
          name: "Composio",
          type: "Freemium",
          url: "https://composio.dev",
          description: "Production toolset connecting agents to 200+ SaaS tools (GitHub, Slack, Jira, Gmail).",
          bestFor: "Pre-built SaaS integration tools & OAuth management"
        }
      ],
      callouts: {
        mistake: "Writing vague docstrings like `def search(query): '''Searches stuff'''`, which leaves the model confused about when and how to invoke the tool.",
        proTip: "Write docstrings that explicitly describe: (1) what the tool does, (2) when to use it over other tools, and (3) expected argument formats.",
        mistakes: [
          "Allowing tools to raise unhandled exceptions; tools should catch errors and return clean error strings for the LLM to reflect on.",
          "Binding 40+ tools to a single model simultaneously, overwhelming model attention and causing hallucinated tool selection.",
          "Returning massive 50KB JSON payloads from tools, needlessly exhausting context windows and token budgets."
        ],
        proTips: [
          "Use Pydantic `args_schema` for tools that require complex input validation or nested objects.",
          "Filter tool return payloads to only the essential fields needed for reasoning before passing data back to the LLM.",
          "Set `tool_choice='required'` when you want to force the model to invoke at least one tool on the first turn."
        ]
      },
      promptLab: {
        title: "Enterprise Tool Definition & Function Calling Harness",
        description: "Author production-grade LangChain `@tool` decorators with strict Pydantic schemas and defensive error boundaries.",
        variables: [
          {
            name: "Tool Domain",
            label: "Tool Capability",
            options: [
              "SQL Query Generator & Read-Only Postgres Execution Tool",
              "Real-Time Weather & Environmental Risk Metric Fetcher",
              "Cryptocurrency Portfolio Balance & Liquidity Pool Checker",
              "Internal CRM Lead Enrichment & Email Domain Validator"
            ],
            default: "SQL Query Generator & Read-Only Postgres Execution Tool"
          },
          {
            name: "Safety Guardrail",
            label: "Security Boundary",
            options: [
              "Enforce read-only SELECT queries; block UPDATE/DELETE/DROP commands with explicit ValueError",
              "Rate-limit API calls to max 5 requests per minute with client token bucket",
              "Mask sensitive PII fields (SSN, credit card) before returning strings to context",
              "Execute in sandboxed Docker container with strict 3-second timeout"
            ],
            default: "Enforce read-only SELECT queries; block UPDATE/DELETE/DROP commands with explicit ValueError"
          },
          {
            name: "Agent Model",
            label: "Executing Model",
            options: [
              "ChatAnthropic(model='claude-3-7-sonnet-20250219')",
              "ChatOpenAI(model='gpt-4o')",
              "ChatGoogleGenerativeAI(model='gemini-2.0-flash')",
              "ChatOpenAI(model='o3-mini')"
            ],
            default: "ChatAnthropic(model='claude-3-7-sonnet-20250219')"
          }
        ],
        template: `You are an AI Systems Engineer configuring tools for an autonomous agent.

Tool Capability: [Tool Domain]
Executing Model: [Agent Model]
Security Constraint: [Safety Guardrail]

Implement complete Python code:
1. Define a Pydantic 'ArgsSchema' for tool arguments.
2. Implement the '@tool' function with comprehensive docstrings and defensive try-except blocks.
3. Bind the tool to the model and demonstrate handling a tool-call decision.`,
        expectedOutput: `import re
from typing import Type
from pydantic import BaseModel, Field
from langchain_core.tools import tool
from langchain_anthropic import ChatAnthropic

# 1. Pydantic Input Schema
class ReadOnlySQLInput(BaseModel):
    query: str = Field(description="A single read-only PostgreSQL query (e.g. 'SELECT count(*) FROM users')")

# 2. Secure Tool Definition
@tool("execute_sql_query", args_schema=ReadOnlySQLInput)
def execute_sql_query(query: str) -> str:
    """Executes a read-only SQL query against the analytics database.
    Use this tool to retrieve customer metrics, order volumes, or product inventory.
    NEVER use this tool for INSERT, UPDATE, DELETE, or DROP statements.
    """
    cleaned = query.strip().upper()
    destructive_keywords = ["UPDATE", "DELETE", "DROP", "ALTER", "INSERT", "TRUNCATE", "GRANT"]
    if any(re.search(rf"\\b{kw}\\b", cleaned) for kw in destructive_keywords):
        return "Error: Security violation. Only read-only SELECT queries are permitted."
    
    # Mocking execution against DB connection
    return f"Query returned 3 rows: [('Acme Corp', 45000), ('Globex', 82000), ('Initech', 19500)]"

# 3. Model Tool Binding
llm = ChatAnthropic(model="claude-3-7-sonnet-20250219", temperature=0.0)
llm_with_tools = llm.bind_tools([execute_sql_query])

response = llm_with_tools.invoke("What are our top 3 enterprise accounts by revenue?")
print("Tool Calls Emitted:", response.tool_calls)`
      },
      conceptGuide: {
        title: "The Function Calling Loop & Tool Call Execution Lifecycles",
        overview: "Tool binding does not mean the LLM runs Python code on its own servers. Rather, function calling is an architectural loop: (1) You provide the LLM with JSON schemas describing available tools. (2) The LLM decides whether a tool is required and returns a `tool_calls` message with the tool name and serialized JSON arguments. (3) Your local runtime intercepts the tool call, executes the corresponding Python function safely on your own infrastructure, and captures the result. (4) The result is formatted as a `ToolMessage` and passed back to the LLM so it can synthesize a final response for the user.",
        keyPoints: [
          "**Client-Side Execution:** The LLM generates the function invocation payload; your code maintains complete control over execution and safety.",
          "**Multi-Tool Emitting:** Modern models can emit multiple independent tool calls in a single turn for parallel execution.",
          "**Error Feedback Loops:** Returning error strings inside `ToolMessage` allows the LLM to correct malformed arguments on the next turn."
        ]
      },
      learning: {
        resources: [
          {
            title: "LangChain Tools Documentation & Custom Tool Creation Guide",
            url: "https://python.langchain.com/docs/concepts/tools/",
            type: "Official Docs"
          },
          {
            title: "Tavily Search API Documentation & Agentic Querying",
            url: "https://docs.tavily.com",
            type: "Official Docs"
          },
          {
            title: "Function Calling and Tool Choice Architecture Guide",
            url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use",
            type: "Architecture"
          },
          {
            title: "Composio Integration Toolset Documentation for Agents",
            url: "https://docs.composio.dev",
            type: "API Reference"
          }
        ]
      }
    },
    {
      id: "step-4",
      stepNumber: 4,
      phaseId: "phase-2",
      title: "Document Loaders, Semantic Chunking & Embedding Pipelines",
      timeEstimate: "3-4 days",
      difficulty: "Intermediate",
      summary: "Ingest unstructured enterprise PDFs and markdown documentation into context-preserving semantic chunks with dense vector embeddings.",
      description: "Naive Retrieval-Augmented Generation (RAG) fails primarily because of poor document ingestion: splitting text arbitrarily every 500 characters slices sentences in half, separates table rows from column headers, and discards document hierarchy. Production RAG pipelines require specialized document loaders (`UnstructuredPDFLoader`, `PyPDFLoader`) and intelligent chunking strategies. Semantic Chunking computes embedding distances between adjacent sentences, splitting chunks only when semantic topic shift exceeds a statistical threshold. Coupling semantic chunks with dense embeddings (`text-embedding-3-large`) and rich metadata tags (section title, page number, document date) sets the foundation for high-precision retrieval.",
      playbook: {
        setup: "Install document parsing and embedding libraries (`pip install unstructured langchain-community langchain-openai langchain-experimental`).",
        execute: "Load complex PDF documents with tables and headers. Apply `SemanticChunker(OpenAIEmbeddings(), breakpoint_threshold_type='percentile')` to split text dynamically at natural topical shifts. Attach metadata dictionaries containing document source, author, and updated timestamp to each `Document` object.",
        verify: "Inspect the generated chunks: verify that complete paragraphs and tables remain intact in single chunks, and adjacent chunks do not overlap destructively across chapter boundaries."
      },
      tools: [
        {
          name: "Unstructured.io",
          type: "Freemium",
          url: "https://unstructured.io",
          description: "Leading data preprocessing platform for transforming messy PDFs, DOCX, and PPTX into clean text.",
          bestFor: "Complex enterprise document parsing & OCR"
        },
        {
          name: "OpenAI Embeddings",
          type: "Paid",
          url: "https://platform.openai.com/docs/guides/embeddings",
          description: "Frontier dense vector embeddings models (`text-embedding-3-large` with dimension reduction).",
          bestFor: "High-dimensional semantic vector indexing"
        },
        {
          name: "Cohere Embed",
          type: "Freemium",
          url: "https://cohere.com/embeddings",
          description: "State-of-the-art multilingual embedding model with native compression support.",
          bestFor: "Enterprise semantic similarity & search"
        }
      ],
      callouts: {
        mistake: "Using fixed-size character splitting (`chunk_size=500`) on technical documentation, severing code blocks and mathematical formulas across chunk seams.",
        proTip: "Use `RecursiveCharacterTextSplitter` configured with language-aware separators (`\\n## `, `\\n### `, `\\n\\n`) to respect markdown headers before falling back to paragraphs.",
        mistakes: [
          "Stripping metadata (page numbers, section headings, URLs) during ingestion, making source attribution impossible in RAG outputs.",
          "Embedding entire 20-page documents into single vector points, diluting semantic density and causing retrieval failure.",
          "Failing to clean OCR artifacts, headers, and repeating page footers ('Page 3 of 50') before generating embeddings."
        ],
        proTips: [
          "Store both small chunks (for precise vector search) and large parent chunks (for rich LLM synthesis context) using LangChain's `ParentDocumentRetriever`.",
          "Reduce embedding storage costs by up to 50% using OpenAI's native dimensionality reduction (`dimensions=1536` on `text-embedding-3-large`).",
          "Compute SHA-256 hashes of raw document files to avoid re-embedding unchanged documents during recurring sync pipelines."
        ]
      },
      promptLab: {
        title: "Semantic Chunking & Metadata Enrichment Pipeline",
        description: "Configure an automated document ingestion script that splits text based on semantic embedding distance and attaches search metadata.",
        variables: [
          {
            name: "Document Ingestion Format",
            label: "Source File Type",
            options: [
              "Enterprise Technical PDF Manuals with Multi-Column Layouts & Tables",
              "GitHub Markdown Documentation Repository with Code Blocks",
              "Customer Support Ticket Transcripts with Timestamps and Sentiment",
              "Regulatory Legal Filings & Compliance Disclosures"
            ],
            default: "Enterprise Technical PDF Manuals with Multi-Column Layouts & Tables"
          },
          {
            name: "Chunking Technique",
            label: "Splitting Strategy",
            options: [
              "SemanticChunker using percentile gradient thresholding on embedding cosine distance",
              "RecursiveCharacterTextSplitter with markdown header hierarchy preservation",
              "ParentDocumentRetriever with 200-token child chunks and 1500-token parent context",
              "Custom Table-Aware Parser isolating markdown tables into atomic chunks"
            ],
            default: "SemanticChunker using percentile gradient thresholding on embedding cosine distance"
          },
          {
            name: "Embedding Model",
            label: "Vector Embeddings",
            options: [
              "OpenAIEmbeddings(model='text-embedding-3-large', dimensions=1536)",
              "CohereEmbeddings(model='embed-english-v3.0')",
              "HuggingFaceEmbeddings(model='BAAI/bge-large-en-v1.5')",
              "OpenAIEmbeddings(model='text-embedding-3-small')"
            ],
            default: "OpenAIEmbeddings(model='text-embedding-3-large', dimensions=1536)"
          }
        ],
        template: `You are a Principal RAG Architect implementing a document ingestion pipeline.

Source Type: [Document Ingestion Format]
Chunking Strategy: [Chunking Technique]
Embedding Engine: [Embedding Model]

Provide production-grade Python code:
1. Load and parse the source files cleanly.
2. Apply the specified chunking strategy, preserving structural coherence.
3. Enrich every chunk with structured metadata (document_id, section_title, created_date, token_count).
4. Generate embeddings and display summary statistics (total chunks, avg chunk token size).`,
        expectedOutput: `from langchain_experimental.text_splitter import SemanticChunker
from langchain_openai import OpenAIEmbeddings
from langchain_core.documents import Document

# 1. Initialize Embeddings Engine
embeddings = OpenAIEmbeddings(model="text-embedding-3-large", dimensions=1536)

# 2. Configure Semantic Chunker with Percentile Threshold
semantic_splitter = SemanticChunker(
    embeddings=embeddings,
    breakpoint_threshold_type="percentile",
    breakpoint_threshold_amount=90.0
)

# 3. Ingest Sample Enterprise Technical Text
raw_technical_text = """
# System Architecture Overview
The core messaging pipeline uses Apache Kafka for event streaming.
Events are partitioned by tenant_id to guarantee in-order delivery.
Consumers process events asynchronously and write to ScyllaDB.

# Disaster Recovery Protocols
In the event of a primary region outage, DNS failover redirects traffic to us-west-2.
RTO is guaranteed under 4 minutes; RPO is zero for committed transactions.
"""

# 4. Split and Enrich Metadata
raw_doc = Document(
    page_content=raw_technical_text,
    metadata={"source": "architecture_spec_v2.pdf", "department": "Platform Eng", "version": 2.4}
)

chunks = semantic_splitter.split_documents([raw_doc])

for idx, chunk in enumerate(chunks):
    chunk.metadata["chunk_index"] = idx
    chunk.metadata["char_length"] = len(chunk.page_content)
    print(f"--- Chunk {idx} (Length: {len(chunk.page_content)} chars) ---")
    print(chunk.page_content.strip())`
      },
      conceptGuide: {
        title: "Semantic Distance Boundary Detection vs. Fixed Windowing",
        overview: "Fixed-size windowing chunking cuts documents at arbitrary character intervals, regardless of whether a thought, sentence, or technical explanation has finished. Semantic Chunking models text as a continuous vector trajectory. The algorithm calculates embeddings for every sentence and computes the cosine distance between sentence `i` and sentence `i+1`. When a new topic begins (e.g., transitioning from 'System Architecture' to 'Disaster Recovery'), the cosine distance spikes significantly. By placing chunk boundaries at these statistical distance peaks, chunks become semantically coherent units with distinct thematic boundaries.",
        keyPoints: [
          "**Topical Boundary Alignment:** Splits text at natural topic transitions rather than arbitrary character counters.",
          "**Embedding Coherence:** Ensures that all sentences within a chunk share high semantic similarity, improving dense vector search accuracy.",
          "**Downstream Precision:** Prevents the retriever from fetching fragments of unrelated topics that confuse the synthesis model."
        ]
      },
      learning: {
        resources: [
          {
            title: "LangChain Semantic Chunking & Experimental Text Splitters",
            url: "https://python.langchain.com/docs/how_to/semantic_chunker/",
            type: "Official Docs"
          },
          {
            title: "OpenAI Embeddings Guide, Dimensionality & Clustering",
            url: "https://platform.openai.com/docs/guides/embeddings",
            type: "Official Docs"
          },
          {
            title: "Unstructured.io PDF Ingestion and Layout Parsing Documentation",
            url: "https://docs.unstructured.io",
            type: "API Reference"
          },
          {
            title: "Evaluating Chunking Strategies for Retrieval-Augmented Generation",
            url: "https://arxiv.org/abs/2401.07883",
            type: "Architecture"
          }
        ]
      }
    },
    {
      id: "step-5",
      stepNumber: 5,
      phaseId: "phase-2",
      title: "Corrective & Self-Reflective RAG (CRAG) Workflows",
      timeEstimate: "3-4 days",
      difficulty: "Advanced",
      summary: "Build self-correcting RAG architectures that evaluate document relevance, rewrite ambiguous queries, and fall back to web search when vector databases fail.",
      description: "Standard RAG is an open-loop system: it retrieves the top 3 vector matches and blindly prompts the LLM to generate an answer, even if the retrieved documents are completely irrelevant. Corrective RAG (CRAG) and Self-RAG introduce agentic reflection into the retrieval loop. After fetching documents from vector stores (Supabase pgvector, Qdrant), a lightweight grading LLM evaluates each chunk: 'Is this document relevant to the user query? (Yes/No)'. If relevance is low, the agent triggers an automated query rewrite to improve search terms, or branches to an external web search tool (Tavily) to gather missing context before generating the final response.",
      playbook: {
        setup: "Set up a vector database (Qdrant or Supabase pgvector) and install LangGraph to orchestrate the decision graph (`pip install langgraph qdrant-client`).",
        execute: "Construct a corrective retrieval pipeline with 4 states: `Retrieve` -> `Grade Documents` -> `Rewrite Query` (if low score) -> `Generate`. In the grading step, use a structured output model to score each chunk. If no chunks pass the threshold, invoke the Tavily Web Search tool to supplement retrieval.",
        verify: "Test with an adversarial query about recent events not in your vector database. Verify that the agent detects low relevance, triggers the web search fallback, and answers accurately with verified source citations."
      },
      tools: [
        {
          name: "Supabase pgvector",
          type: "Freemium",
          url: "https://supabase.com/docs/guides/ai",
          description: "Postgres-native vector similarity search using HNSW indexing and SQL filters.",
          bestFor: "Integrated relational and vector data storage"
        },
        {
          name: "Qdrant",
          type: "Freemium",
          url: "https://qdrant.tech",
          description: "High-performance vector search engine with payload filtering and quantization.",
          bestFor: "Dedicated large-scale vector similarity indexing"
        },
        {
          name: "Cohere Rerank",
          type: "Freemium",
          url: "https://cohere.com/rerank",
          description: "Cross-encoder reranking model that dramatically improves retrieval precision.",
          bestFor: "Second-stage passage reranking & relevance scoring"
        }
      ],
      callouts: {
        mistake: "Passing low-relevance vector chunks directly to the generator, causing the LLM to hallucinate incorrect answers based on noisy context.",
        proTip: "Use a cross-encoder model like Cohere Rerank as a fast first-stage filter before invoking an expensive LLM grader.",
        mistakes: [
          "Entering infinite query-rewriting loops when neither the vector database nor web search contains the requested answer.",
          "Failing to filter out duplicate chunks before grading, wasting evaluation tokens.",
          "Using high-latency frontier models for document grading instead of ultra-fast models like GPT-4o-mini or Claude 3.5 Haiku."
        ],
        proTips: [
          "Cap query rewrite attempts at 2: if relevant documents still cannot be found, instruct the model to politely state that data is unavailable.",
          "Include a 'hallucination grader' after generation that verifies every claim in the response is grounded in the retrieved passages.",
          "Format query rewrites with explicit keyword emphasis: 'Rewrite this conversational prompt into 3 targeted search keywords for BM25/vector search.'"
        ]
      },
      promptLab: {
        title: "Corrective RAG Document Grader & Query Rewriter",
        description: "Author structured evaluation prompts that assess document relevance and optimize search queries.",
        variables: [
          {
            name: "RAG Domain",
            label: "Search Domain",
            options: [
              "Enterprise IT Hardware Troubleshooting Knowledge Base",
              "Internal Clinical Trial & Pharma Protocol Repository",
              "Financial Regulation Compliance & SEC 10-K Filings",
              "SaaS Customer Support & Billing Documentation"
            ],
            default: "Enterprise IT Hardware Troubleshooting Knowledge Base"
          },
          {
            name: "Relevance Threshold",
            label: "Grading Strictness",
            options: [
              "Strict Binary Grading: 'yes' only if document contains concrete facts answering the user query directly",
              "Graded Scoring: 1-5 scale with minimum score of 4 required to proceed without fallback",
              "Entity-Match Grading: must verify matching product model numbers and software versions"
            ],
            default: "Strict Binary Grading: 'yes' only if document contains concrete facts answering the user query directly"
          },
          {
            name: "Fallback Action",
            label: "Low-Relevance Branch",
            options: [
              "Rewrite query and trigger Tavily Web Search API to retrieve live external documentation",
              "Expand vector search radius by 50% using reciprocal rank fusion (RRF)",
              "Escalate query to Human Agent queue and return graceful apology"
            ],
            default: "Rewrite query and trigger Tavily Web Search API to retrieve live external documentation"
          }
        ],
        template: `You are an AI Retrieval Evaluator in a Corrective RAG (CRAG) system.

Domain: [RAG Domain]
Grading Standard: [Relevance Threshold]
Fallback Trigger: [Fallback Action]

Implement the Python evaluation logic:
1. Define a Pydantic 'GradeDocument' model returning 'binary_score: Literal["yes", "no"]' and 'reason: str'.
2. Create a fast grading prompt with GPT-4o-mini / Claude 3.5 Haiku.
3. Define a query rewriter prompt that takes a failed user query and outputs an optimized search string.`,
        expectedOutput: `from typing import Literal
from pydantic import BaseModel, Field
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI

# 1. Pydantic Document Grader Schema
class GradeDocument(BaseModel):
    binary_score: Literal["yes", "no"] = Field(
        description="Whether document contains keywords or semantic info relevant to the query ('yes' or 'no')"
    )
    rationale: str = Field(description="Brief 1-sentence reason for the score")

# 2. Fast Grading LLM
grader_llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.0)
structured_grader = grader_llm.with_structured_output(GradeDocument)

grade_prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a strict relevance grader. Assess if the document is relevant to the question. Answer 'yes' or 'no'."),
    ("human", "Question: {question}\n\nDocument:\n{document}")
])

doc_evaluator = grade_prompt | structured_grader

# 3. Query Rewriter for Fallback
rewriter_llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.2)
rewrite_prompt = ChatPromptTemplate.from_messages([
    ("system", "You are an expert search query optimizer. Rewrite the following conversational question into 3-5 keywords optimized for technical retrieval:"),
    ("human", "{question}")
])
query_rewriter = rewrite_prompt | rewriter_llm

# Example Test
question = "How do I clear the NVRAM on a Cisco Catalyst 9300 switch?"
bad_doc = "Cisco Catalyst 9300 switches support 48 ports of PoE+ power delivery."

eval_result = doc_evaluator.invoke({"question": question, "document": bad_doc})
print(f"Relevance: {eval_result.binary_score} ({eval_result.rationale})")

if eval_result.binary_score == "no":
    better_query = query_rewriter.invoke({"question": question})
    print("Rewritten Query for Fallback Search:", better_query.content)`
      },
      conceptGuide: {
        title: "Corrective RAG vs. Naive Retrieval: Closing the Feedback Loop",
        overview: "Naive RAG suffers from severe semantic blind spots: vector similarity only measures topical closeness, not factual usefulness. A document discussing 'database indexing' might have a 0.88 cosine similarity to 'how to fix slow SQL queries' while completely failing to answer the user's specific problem. Corrective RAG (CRAG) transforms retrieval from a passive lookup into an active verification loop. By evaluating document utility before generation, the system filters out misleading noise, repairs broken user queries, and dynamically pulls in web data when internal indices fall short.",
        keyPoints: [
          "**Noise Reduction:** Discards distractor chunks that pass vector similarity thresholds but lack actionable answers.",
          "**Dynamic Query Expansion:** Automatically reformulates jargon, typos, and vague questions into high-recall keywords.",
          "**Multi-Source Redundancy:** Seamlessly blends internal vector stores with external search APIs when internal knowledge is stale."
        ]
      },
      learning: {
        resources: [
          {
            title: "Corrective Retrieval Augmented Generation (CRAG) Paper (arXiv)",
            url: "https://arxiv.org/abs/2401.15884",
            type: "Architecture"
          },
          {
            title: "LangGraph Corrective RAG Architecture & Workflow Tutorial",
            url: "https://langchain-ai.github.io/langgraph/tutorials/rag/langgraph_crag/",
            type: "Official Docs"
          },
          {
            title: "Supabase pgvector Hybrid Search & Indexing Documentation",
            url: "https://supabase.com/docs/guides/ai/hybrid-search",
            type: "API Reference"
          },
          {
            title: "Cohere Rerank API Integration for Advanced RAG Pipelines",
            url: "https://docs.cohere.com/docs/reranking",
            type: "Guide"
          }
        ]
      }
    },
    {
      id: "step-6",
      stepNumber: 6,
      phaseId: "phase-3",
      title: "LangGraph Core Primitives: State, Nodes & Conditional Edges",
      timeEstimate: "3-4 days",
      difficulty: "Intermediate",
      summary: "Replace brittle agent loops with explicit state machines using LangGraph's StateGraph, typed state reducers, and conditional routing edges.",
      description: "Legacy agent executors (`AgentExecutor` in early LangChain) operated as opaque while-loops: you gave them an LLM and tools, and hoped the model knew when to stop. In production, this resulted in runaway token consumption, infinite tool loops, and zero state visibility. LangGraph reimagines agent engineering as an explicit graph-based state machine. A LangGraph application consists of: (1) a centralized `State` schema (typically a `TypedDict` with `add_messages` reducers), (2) `Nodes` that perform computation and return state updates, and (3) `Conditional Edges` that inspect the current state to dynamically route execution to the next node or to the special `END` terminal node.",
      playbook: {
        setup: "Install LangGraph and LangGraph CLI (`pip install langgraph langgraph-cli`).",
        execute: "Define a `State` dictionary: `class AgentState(TypedDict): messages: Annotated[list[BaseMessage], add_messages]`. Define a model node that calls LLM with tools, and a tool node (`ToolNode`) that executes tool calls. Add conditional edges: `graph.add_conditional_edges('agent', should_continue, {'continue': 'tools', 'end': END})`. Compile the graph: `app = graph.compile()`.",
        verify: "Execute a multi-step query. Verify in terminal output that execution transitions cleanly from `agent` to `tools` and back to `agent` before terminating at `END`."
      },
      tools: [
        {
          name: "LangGraph",
          type: "Free",
          url: "https://langchain-ai.github.io/langgraph/",
          description: "Framework for building controllable, stateful multi-actor applications with LLMs.",
          bestFor: "Graph-based state machines & agent loops"
        },
        {
          name: "LangGraph Studio",
          type: "Free",
          url: "https://github.com/langchain-ai/langgraph-studio",
          description: "Specialized desktop visual IDE for debugging, inspecting, and replaying LangGraph state machines.",
          bestFor: "Visual agent debugging & state inspection"
        },
        {
          name: "Python TypedDict & Annotated",
          type: "Free",
          url: "https://docs.python.org/3/library/typing.html",
          description: "Standard Python type hinting primitives used for defining LangGraph state schemas.",
          bestFor: "Type-safe agent state modeling"
        }
      ],
      callouts: {
        mistake: "Treating LangGraph state like a mutable global dictionary: you must return state updates as dicts from nodes rather than mutating state in-place.",
        proTip: "Always use `Annotated[list, add_messages]` for your message history: it automatically appends new messages rather than overwriting existing conversation history.",
        mistakes: [
          "Failing to define an exit path in conditional edges, causing agents to cycle endlessly between nodes.",
          "Passing raw strings between nodes instead of standardized `BaseMessage` types (`HumanMessage`, `AIMessage`, `ToolMessage`).",
          "Attempting to manage complex state in a single monolithic node instead of breaking responsibilities into clean, focused nodes."
        ],
        proTips: [
          "Use LangGraph Studio to view your graph topology visually and watch nodes light up in real-time as execution progresses.",
          "Define custom reducer functions (e.g., `operator.add` for integer counters) to manage custom aggregation logic across parallel branches.",
          "Keep node functions pure: nodes should take `state` as input and return `{ 'updated_key': new_value }`."
        ]
      },
      promptLab: {
        title: "LangGraph StateGraph Core Machine Generator",
        description: "Author a complete, runnable LangGraph state machine with typed state reducers and conditional edge routing.",
        variables: [
          {
            name: "Graph Purpose",
            label: "Agent Objective",
            options: [
              "Autonomous Technical Support Agent with Tool Execution & CRM Logging",
              "Multi-Step Code Refactoring Engine with Automated Lint Checking",
              "Financial Research Analyst with Web Search & PDF Export",
              "Automated Email Triage & Draft Response Routing Graph"
            ],
            default: "Autonomous Technical Support Agent with Tool Execution & CRM Logging"
          },
          {
            name: "State Reducers",
            label: "State Schema",
            options: [
              "messages (add_messages), loop_counter (int), customer_id (str), is_resolved (bool)",
              "messages (add_messages), code_diffs (list), lint_errors (list), test_passed (bool)",
              "messages (add_messages), search_queries (list), gathered_facts (list), report_ready (bool)",
              "messages (add_messages), email_sender (str), category (str), approval_granted (bool)"
            ],
            default: "messages (add_messages), loop_counter (int), customer_id (str), is_resolved (bool)"
          },
          {
            name: "Toolset",
            label: "Bound Tools",
            options: [
              "TavilySearch + DatabaseLookup + TicketCloser",
              "PyLintRunner + GitCommitter + TestSuiteRunner",
              "TavilySearch + FinancialCalculator + DocumentGenerator",
              "EmailClassifier + SlackNotifier + DraftSender"
            ],
            default: "TavilySearch + DatabaseLookup + TicketCloser"
          }
        ],
        template: `You are a Principal AI Architect engineering a stateful LangGraph agent.

Application Goal: [Graph Purpose]
State Definition: [State Reducers]
Bound Tools: [Toolset]

Write the complete Python script:
1. Define the 'AgentState' TypedDict using 'Annotated' and 'add_messages'.
2. Implement the agent node and a standard tool node.
3. Write the 'should_continue' conditional edge routing function.
4. Build, compile, and execute the 'StateGraph' on a test prompt.`,
        expectedOutput: `from typing import Annotated, Literal
from typing_extensions import TypedDict
from langchain_core.messages import BaseMessage, HumanMessage
from langchain_anthropic import ChatAnthropic
from langchain_core.tools import tool
from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages
from langgraph.prebuilt import ToolNode

# 1. State Definition
class AgentState(TypedDict):
    messages: Annotated[list[BaseMessage], add_messages]
    customer_id: str
    is_resolved: bool

# 2. Tools
@tool
def check_order_status(order_id: str) -> str:
    """Check the real-time shipping status of a customer order."""
    return f"Order {order_id} is currently in transit, scheduled for delivery tomorrow by 3 PM."

tools = [check_order_status]
tool_node = ToolNode(tools)

# 3. Model Binding
model = ChatAnthropic(model="claude-3-7-sonnet-20250219", temperature=0.0).bind_tools(tools)

# 4. Node Logic
def call_model(state: AgentState):
    response = model.invoke(state["messages"])
    return {"messages": [response]}

# 5. Conditional Routing Logic
def should_continue(state: AgentState) -> Literal["tools", "__end__"]:
    last_message = state["messages"][-1]
    if last_message.tool_calls:
        return "tools"
    return END

# 6. Graph Assembly
workflow = StateGraph(AgentState)
workflow.add_node("agent", call_model)
workflow.add_node("tools", tool_node)

workflow.add_edge(START, "agent")
workflow.add_conditional_edges("agent", should_continue, ["tools", END])
workflow.add_edge("tools", "agent")

app = workflow.compile()

# 7. Test Invocation
if __name__ == "__main__":
    inputs = {
        "messages": [HumanMessage(content="Where is my package for order #84920?")],
        "customer_id": "cust_123",
        "is_resolved": False
    }
    for chunk in app.stream(inputs, stream_mode="values"):
        last_msg = chunk["messages"][-1]
        print(f"[{last_msg.type.upper()}]: {last_msg.content}")`
      },
      conceptGuide: {
        title: "State Machines vs. Autonomous Black-Box Loops",
        overview: "Early agent architectures relied on recursive loops where the model determined both action and routing. If an agent got confused, it repeated the same action dozens of times, draining API credits and crashing applications. LangGraph reasserts deterministic control over stochastic models. By encoding the agent as a finite state machine, developers establish hard guardrails: which nodes may be entered, how many iterations are permitted, which state attributes persist, and when execution MUST terminate. The LLM handles unstructured reasoning within nodes, while code governs structural workflow.",
        keyPoints: [
          "**Explicit Control Flow:** Routing is governed by deterministic Python logic rather than relying on LLMs to generate stopping tokens.",
          "**Declarative State Contracts:** Every node must declare which state keys it reads and writes, making complex agent graphs maintainable.",
          "**Observability & Debuggability:** Visual tools like LangGraph Studio can pause, inspect, and step through state machines node-by-node."
        ]
      },
      learning: {
        resources: [
          {
            title: "LangGraph Official Documentation & Core Concepts",
            url: "https://langchain-ai.github.io/langgraph/",
            type: "Official Docs"
          },
          {
            title: "LangGraph Studio Quickstart & Visual State Debugging",
            url: "https://github.com/langchain-ai/langgraph-studio",
            type: "Official Docs"
          },
          {
            title: "StateGraph API Reference & Reducer Specifications",
            url: "https://langchain-ai.github.io/langgraph/reference/graphs/",
            type: "API Reference"
          },
          {
            title: "Finite State Machines & Agentic Control Topologies",
            url: "https://en.wikipedia.org/wiki/Finite-state_machine",
            type: "Architecture"
          }
        ]
      }
    },
    {
      id: "step-7",
      stepNumber: 7,
      phaseId: "phase-3",
      title: "Cyclic Reasoning Loops (ReAct, Plan-and-Execute & Reflection)",
      timeEstimate: "3-4 days",
      difficulty: "Advanced",
      summary: "Engineer self-correcting cognitive loops where agents plan multi-step workflows, execute tool actions, inspect errors, and iterate until success criteria are met.",
      description: "Simple one-shot LLM queries fail on complex tasks like writing an entire software module or conducting deep market research. Advanced cognitive architectures employ cyclic reasoning patterns. The three fundamental patterns are: (1) ReAct (Reasoning + Acting), where an agent alternates between generating thoughts, calling tools, and observing outputs; (2) Plan-and-Execute, where an executive planner model drafts a 5-step checklist and a worker model completes items sequentially; and (3) Reflection loops, where a critic model audits draft outputs against rigorous rubric criteria and forces revisions until a quality threshold is reached.",
      playbook: {
        setup: "Configure LangGraph with both a fast worker model (Claude 3.7 or GPT-4o) and a reasoning critic model (o3-mini).",
        execute: "Construct a 3-node reflection cycle: `DraftGenerator` -> `CriticEvaluator` -> `Reviser`. In `CriticEvaluator`, inspect the draft for adherence, factual grounding, and style. If critique identifies flaws, route back to `Reviser`. Cap execution at 3 reflection cycles using a state `iteration` counter.",
        verify: "Prompt the graph to draft a technical post with subtle deliberate misconceptions. Verify that `CriticEvaluator` detects the flaws, triggers a revision, and produces an improved draft before terminating at `END`."
      },
      tools: [
        {
          name: "LangGraph",
          type: "Free",
          url: "https://langchain-ai.github.io/langgraph/",
          description: "Stateful orchestration framework enabling multi-cycle reflection and reasoning loops.",
          bestFor: "Cyclic agent graphs & iterative refinement"
        },
        {
          name: "Claude 3.7 Sonnet",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Hybrid reasoning model capable of deep architectural drafting and code generation.",
          bestFor: "High-quality draft generation & code synthesis"
        },
        {
          name: "OpenAI o3-mini",
          type: "Paid",
          url: "https://openai.com",
          description: "High-reasoning model optimized for rigorous logical critiques and code auditing.",
          bestFor: "Objective critique & rubric evaluation"
        }
      ],
      callouts: {
        mistake: "Allowing an agent to critique its own work using the same system prompt, resulting in sycophantic approval of flawed drafts.",
        proTip: "Use distinct personas and different models for drafting versus critiquing: an aggressive, hyper-critical reviewer prompt produces far better revisions.",
        mistakes: [
          "Omitting a maximum iteration guard, causing the agent to loop endlessly when the critic is impossible to satisfy.",
          "Passing the entire conversation history into the reviser, overflowing token budgets instead of passing only the latest draft and critique.",
          "Failing to provide the critic with an explicit structured scoring rubric (e.g., grading 1-5 across Accuracy, Clarity, Completeness)."
        ],
        proTips: [
          "In Plan-and-Execute patterns, allow the agent to dynamically replan: if step 2 reveals new information, re-order steps 3 and 4.",
          "Store the critique as a distinct state variable (`critique: str`) so downstream nodes can reference specific feedback items.",
          "Add an early-exit conditional edge if the critic awards a score of 95/100 or higher on the first revision."
        ]
      },
      promptLab: {
        title: "Self-Reflective Critic-Reviser Loop Generator",
        description: "Author a cyclic LangGraph state machine featuring an adversarial critic and iterative revision loop.",
        variables: [
          {
            name: "Creation Task",
            label: "Output Artifact",
            options: [
              "Production Dockerfile & Multi-Stage Build Script for Python/Node.js",
              "Executive Briefing Memo on Competitive Enterprise AI Landscape",
              "High-Converting SaaS Landing Page Copy with Objections & Social Proof",
              "Complex SQL Database Schema Migration with RLS Security Policies"
            ],
            default: "Production Dockerfile & Multi-Stage Build Script for Python/Node.js"
          },
          {
            name: "Critic Rubric",
            label: "Evaluation Standards",
            options: [
              "Strict security checks: non-root user, minimal base image (alpine/distroless), multi-stage build, no secret leaks",
              "Rigorous business analysis: clear thesis, quantified metrics, competitive differentiation, zero fluff",
              "Direct marketing audit: visceral hook, customer pain points, risk reversal guarantee, clear CTA",
              "Database audit: 3NF normalization, foreign key cascading indexes, RLS coverage, zero table lock risks"
            ],
            default: "Strict security checks: non-root user, minimal base image (alpine/distroless), multi-stage build, no secret leaks"
          },
          {
            name: "Iteration Budget",
            label: "Max Loops",
            options: [
              "Maximum 3 cycles; exit early if critic score >= 90",
              "Maximum 2 cycles; exit early if critic score >= 95",
              "Strict single revision cycle before final output compilation"
            ],
            default: "Maximum 3 cycles; exit early if critic score >= 90"
          }
        ],
        template: `You are an AI Cognitive Architecture Specialist configuring an iterative reflection loop.

Artifact to Generate: [Creation Task]
Critique Standards: [Critic Rubric]
Loop Guardrails: [Iteration Budget]

Implement the complete LangGraph Python code:
1. Define 'ReflectionState' containing: topic, current_draft, critique, score, iteration_count.
2. Build 3 nodes: 'generate_draft', 'evaluate_critique', 'revise_draft'.
3. Implement conditional edge 'should_revise' enforcing the iteration budget and early exit score.
4. Execute and demonstrate the draft improving across cycles.`,
        expectedOutput: `from typing import Literal
from typing_extensions import TypedDict
from pydantic import BaseModel, Field
from langchain_core.prompts import ChatPromptTemplate
from langchain_anthropic import ChatAnthropic
from langchain_openai import ChatOpenAI
from langgraph.graph import StateGraph, START, END

# 1. State Definition
class ReflectionState(TypedDict):
    topic: str
    current_draft: str
    critique: str
    score: int
    iteration: int

# 2. Pydantic Critic Output
class Evaluation(BaseModel):
    score: int = Field(ge=0, le=100, description="Quality score from 0 to 100")
    critique: str = Field(description="Actionable, blunt feedback highlighting specific vulnerabilities or flaws")
    approved: bool = Field(description="True if score >= 90")

# 3. Models
drafter_llm = ChatAnthropic(model="claude-3-7-sonnet-20250219", temperature=0.3)
critic_llm = ChatOpenAI(model="gpt-4o", temperature=0.0).with_structured_output(Evaluation)

# 4. Nodes
def generate_draft(state: ReflectionState):
    prompt = f"Write a {state['topic']}. Prioritize security, performance, and best practices."
    resp = drafter_llm.invoke(prompt)
    return {"current_draft": resp.content, "iteration": state["iteration"] + 1}

def evaluate_critique(state: ReflectionState):
    eval_prompt = f"""
    Evaluate this draft against security best practices (non-root user, minimal image size, zero secrets):
    {state['current_draft']}
    """
    review: Evaluation = critic_llm.invoke(eval_prompt)
    return {"critique": review.critique, "score": review.score}

def revise_draft(state: ReflectionState):
    revise_prompt = f"""
    Original Draft:
    {state['current_draft']}
    
    Critique Feedback:
    {state['critique']}
    
    Fix all issues noted above and return an improved version:
    """
    resp = drafter_llm.invoke(revise_prompt)
    return {"current_draft": resp.content, "iteration": state["iteration"] + 1}

def should_revise(state: ReflectionState) -> Literal["revise_draft", "__end__"]:
    if state["score"] >= 90 or state["iteration"] >= 3:
        return END
    return "revise_draft"

# 5. Graph Assembly
builder = StateGraph(ReflectionState)
builder.add_node("generate_draft", generate_draft)
builder.add_node("evaluate_critique", evaluate_critique)
builder.add_node("revise_draft", revise_draft)

builder.add_edge(START, "generate_draft")
builder.add_edge("generate_draft", "evaluate_critique")
builder.add_conditional_edges("evaluate_critique", should_revise, ["revise_draft", END])
builder.add_edge("revise_draft", "evaluate_critique")

app = builder.compile()`
      },
      conceptGuide: {
        title: "Cognitive Architectures: Moving from System 1 to System 2 AI",
        overview: "Standard one-shot LLM prompts represent 'System 1' thinking: fast, instinctive, and prone to hallucinations and logical oversights. Cognitive agent architectures implement 'System 2' thinking: slow, deliberative, and self-auditing. By decomposing a complex problem into planning, execution, observation, and reflection phases, agents gain the ability to recognize their own errors. When an agent tests its own code, catches a traceback, analyzes the bug, and corrects its implementation before returning an answer to the user, success rates on complex software engineering benchmarks improve from 30% to over 85%.",
        keyPoints: [
          "**Adversarial Self-Auditing:** Pairing an optimistic generator with a skeptical critic eliminates sycophancy.",
          "**Bounded Exploration:** Explicit iteration counters prevent runaway infinite loops while allowing necessary self-correction.",
          "**Stateful Memory Trajectories:** Preserving past attempts allows models to avoid repeating disproven hypotheses."
        ]
      },
      learning: {
        resources: [
          {
            title: "ReAct: Synergizing Reasoning and Acting in Language Models (arXiv)",
            url: "https://arxiv.org/abs/2210.03629",
            type: "Architecture"
          },
          {
            title: "Plan-and-Solve Prompting: Improving Zero-Shot Chain-of-Thought (arXiv)",
            url: "https://arxiv.org/abs/2305.04091",
            type: "Architecture"
          },
          {
            title: "LangGraph Reflection and Self-Correction Tutorial",
            url: "https://langchain-ai.github.io/langgraph/tutorials/reflection/reflection/",
            type: "Official Docs"
          },
          {
            title: "Prompt Engineering Guide: ReAct and Self-Consistency Frameworks",
            url: "https://www.promptingguide.ai/techniques/react",
            type: "Guide"
          }
        ]
      }
    },
    {
      id: "step-8",
      stepNumber: 8,
      phaseId: "phase-3",
      title: "Persistent Checkpointers, Threads & Long-Term Agent Memory",
      timeEstimate: "3-4 days",
      difficulty: "Advanced",
      summary: "Persist graph execution states across web sessions using PostgreSQL checkpointers, conversation threads, and semantic memory layers.",
      description: "In-memory agent graphs lose all state the moment a Python process restarts or a serverless container terminates. Production agent platforms must maintain persistent multi-turn conversations across hours, days, or months. LangGraph solves persistence through the Checkpointer abstraction (`MemorySaver`, `PostgresSaver`, `AsyncPostgresSaver`). By configuring a checkpointer and passing a unique `thread_id` in the execution config, LangGraph automatically snapshots the complete graph state to PostgreSQL after every node execution. This enables multi-session conversational continuity, background batch task resuming, and integration with long-term semantic user memory (Mem0).",
      playbook: {
        setup: "Set up a local or hosted PostgreSQL database and install LangGraph checkpointer dependencies (`pip install langgraph-checkpoint-postgres asyncpg`).",
        execute: "Initialize `PostgresSaver.from_conn_string(DB_URL)` and run `.setup()` to create checkpointer tables. Compile your graph with `checkpointer=saver`. Execute the graph with `config={'configurable': {'thread_id': 'user_session_492'}}`. After the process exits, resume the conversation with the same `thread_id`.",
        verify: "Inspect your Postgres `checkpoints` and `checkpoint_blobs` tables: verify that serialized state dictionaries exist. In a new Python session, invoke the graph with the same thread ID and verify the agent remembers prior conversation turns without re-prompting."
      },
      tools: [
        {
          name: "LangGraph PostgresSaver",
          type: "Free",
          url: "https://langchain-ai.github.io/langgraph/reference/checkpoints/",
          description: "Production checkpointer persisting graph state snapshots directly into PostgreSQL.",
          bestFor: "Enterprise durable state storage & thread resumption"
        },
        {
          name: "Redis",
          type: "Freemium",
          url: "https://redis.io",
          description: "Ultra-fast in-memory data store frequently used for caching ephemeral agent checkpoints.",
          bestFor: "High-throughput sub-millisecond checkpoint caching"
        },
        {
          name: "Mem0",
          type: "Freemium",
          url: "https://mem0.ai",
          description: "Long-term personalized memory layer extracting user preferences across cross-session conversations.",
          bestFor: "Lifelong personalized agent memory"
        }
      ],
      callouts: {
        mistake: "Using `MemorySaver` in production deployments, causing complete conversation amnesia whenever the app container redeploys or scales.",
        proTip: "Use `PostgresSaver` with connection pooling (`AsyncPostgresSaver` + `asyncpg`) to handle thousands of concurrent agent sessions efficiently.",
        mistakes: [
          "Forgetting to run `checkpointer.setup()` during initial deployment, causing missing table errors on the first checkpoint write.",
          "Storing gigabytes of raw binary files (images, audio) directly in the state dictionary instead of uploading to S3 and storing URLs.",
          "Using non-deterministic `thread_id` values (like random UUIDs on every turn) instead of persisting the user's stable session or account ID."
        ],
        proTips: [
          "Retrieve prior state snapshots at any time using `app.get_state(config)` to inspect message history or extract current metrics.",
          "Use `app.get_state_history(config)` to list all historical checkpoints for a thread to power visual undo/redo features.",
          "Combine checkpointers with Mem0 to inject long-term user preferences (e.g. 'User prefers TypeScript and dark themes') into new conversation threads."
        ]
      },
      promptLab: {
        title: "PostgreSQL Checkpointer & Threaded Conversation Manager",
        description: "Configure production PostgreSQL checkpointers for durable, multi-session state persistence in LangGraph.",
        variables: [
          {
            name: "Persistence Backend",
            label: "Checkpointer Engine",
            options: [
              "PostgresSaver with managed PostgreSQL connection pool",
              "AsyncPostgresSaver with asyncpg connection pool for FastAPI",
              "RedisSaver with automatic 7-day TTL expiration",
              "SqliteSaver for local edge embedded devices"
            ],
            default: "PostgresSaver with managed PostgreSQL connection pool"
          },
          {
            name: "Session Thread Model",
            label: "Thread Topology",
            options: [
              "User-scoped thread (single continuous thread per user account for persistent assistant)",
              "Ticket-scoped thread (isolated thread per customer support ticket ID)",
              "Workflow-scoped thread (ephemeral thread deleted upon successful task completion)",
              "Multi-tenant thread with organization_id and user_id composite keys"
            ],
            default: "User-scoped thread (single continuous thread per user account for persistent assistant)"
          },
          {
            name: "Long-Term Memory Injection",
            label: "Memory Enrichment",
            options: [
              "Integrate Mem0 to extract and retrieve user preferences at start of conversation",
              "PostgreSQL vector search querying past conversation summaries",
              "Pure checkpointer state history with zero external memory dependencies"
            ],
            default: "Integrate Mem0 to extract and retrieve user preferences at start of conversation"
          }
        ],
        template: `You are a Senior Infrastructure Engineer configuring persistence for LangGraph.

Backend Target: [Persistence Backend]
Thread Architecture: [Session Thread Model]
Memory Extension: [Long-Term Memory Injection]

Implement the production Python script:
1. Initialize the checkpointer connection and run table migrations.
2. Compile a conversational agent graph with the checkpointer.
3. Demonstrate a multi-turn conversation where state is saved, process is restarted, and context is resumed seamlessly.`,
        expectedOutput: `import os
from langchain_anthropic import ChatAnthropic
from langchain_core.messages import HumanMessage
from langgraph.graph import StateGraph, START, MessagesState
from langgraph.checkpoint.postgres import PostgresSaver

DB_URI = os.getenv("DATABASE_URL", "postgresql://postgres:postgres@localhost:5432/agent_db")

# 1. Initialize PostgreSQL Checkpointer
with PostgresSaver.from_conn_string(DB_URI) as checkpointer:
    # Run migrations once to ensure checkpoints tables exist
    checkpointer.setup()

    # 2. Define Model and Simple Graph
    model = ChatAnthropic(model="claude-3-7-sonnet-20250219", temperature=0.2)

    def bot(state: MessagesState):
        return {"messages": [model.invoke(state["messages"])]}

    workflow = StateGraph(MessagesState)
    workflow.add_node("bot", bot)
    workflow.add_edge(START, "bot")

    # Compile with persistence
    app = workflow.compile(checkpointer=checkpointer)

    # 3. Simulate Turn 1 in Session
    config = {"configurable": {"thread_id": "user_alice_thread_99"}}
    print("--- Turn 1 ---")
    res1 = app.invoke({"messages": [HumanMessage(content="Hello! My favorite programming language is Rust.")]}, config)
    print("Bot:", res1["messages"][-1].content)

    # 4. Simulate Turn 2 (resuming identical thread_id)
    print("\n--- Turn 2 (Resuming Session) ---")
    res2 = app.invoke({"messages": [HumanMessage(content="What was my favorite language again?")]}, config)
    print("Bot:", res2["messages"][-1].content)

    # 5. Inspect Stored State
    current_state = app.get_state(config)
    print(f"\nTotal messages in checkpoint history: {len(current_state.values['messages'])}")`
      },
      conceptGuide: {
        title: "Checkpoint Snapshots & The Mechanics of Durable Execution",
        overview: "In conventional programming, call stacks exist only in volatile RAM: if power fails, all program state evaporates. LangGraph checkpoints bring the concept of transactional database snapshots to AI agent execution. After every node executes, the checkpointer serializes the graph's `State` into a binary blob, generates a cryptographic hash of the current step, and writes an atomic record to the `checkpoints` table. If a server crashes mid-execution or an external API takes 20 minutes to respond, the engine restarts at the exact microstep where it was interrupted with zero duplicate work.",
        keyPoints: [
          "**Atomic State Snapshots:** State is saved at every node transition, preventing half-executed dirty states.",
          "**Thread-Level Multi-Tenancy:** The `thread_id` namespace guarantees complete data isolation between different users and workflows.",
          "**Crash Resilience:** Enables serverless architectures to suspend and resume long-running agent workflows seamlessly."
        ]
      },
      learning: {
        resources: [
          {
            title: "LangGraph Persistence & Checkpointer Architecture Guide",
            url: "https://langchain-ai.github.io/langgraph/concepts/persistence/",
            type: "Official Docs"
          },
          {
            title: "LangGraph PostgresSaver API Reference & Migration Commands",
            url: "https://langchain-ai.github.io/langgraph/reference/checkpoints/#langgraph.checkpoint.postgres",
            type: "API Reference"
          },
          {
            title: "Mem0: The Memory Layer for Personalized AI Applications",
            url: "https://docs.mem0.ai",
            type: "Guide"
          },
          {
            title: "Durable Execution Systems & Persistent Workflow Engines (ACM)",
            url: "https://cacm.acm.org",
            type: "Architecture"
          }
        ]
      }
    },
    {
      id: "step-9",
      stepNumber: 9,
      phaseId: "phase-3",
      title: "Human-in-the-Loop (HITL) Interrupts, Time Travel & State Editing",
      timeEstimate: "3-4 days",
      difficulty: "Advanced",
      summary: "Insert human approval gates before critical tool calls, edit in-flight graph state, and time travel back to prior execution checkpoints.",
      description: "Allowing an AI agent to autonomously execute destructive operations (charging a credit card, sending an executive email, deleting database tables) without human supervision is an unacceptable liability for enterprise systems. LangGraph provides native Human-in-the-Loop (HITL) primitives: `interrupt()` and breakpoints (`interrupt_before=['action_node']`). When a graph encounters a breakpoint, execution halts immediately and serializes current state to Postgres. A human supervisor reviews the pending action via a web UI or Slack button, approves, rejects, or directly edits the state payload, and resumes execution seamlessly.",
      playbook: {
        setup: "Configure a persistent LangGraph instance using `MemorySaver` or `PostgresSaver`.",
        execute: "Compile the graph with a breakpoint before sensitive actions: `app = workflow.compile(checkpointer=checkpointer, interrupt_before=['execute_refund_tool'])`. When execution pauses, inspect the state using `app.get_state(config)`. To approve with modification, call `app.update_state(config, {'messages': [edited_message]})`. Resume execution by passing `None` as input.",
        verify: "Trigger a simulated $5,000 refund. Verify that the graph pauses execution before calling the Stripe API, waits for user approval, and proceeds only after human confirmation is recorded."
      },
      tools: [
        {
          name: "LangGraph interrupt()",
          type: "Free",
          url: "https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/",
          description: "Native mechanism to pause graph execution and await external human intervention.",
          bestFor: "Human-in-the-loop approval gates & state inspection"
        },
        {
          name: "Slack API / Webhooks",
          type: "Freemium",
          url: "https://api.slack.com",
          description: "Interactive messaging platform for sending approval cards with button callbacks.",
          bestFor: "Interactive human review notifications & approval buttons"
        },
        {
          name: "Next.js Dashboard",
          type: "Free",
          url: "https://nextjs.org",
          description: "Frontend framework for building custom operator review interfaces for agent state.",
          bestFor: "Operator approval dashboards & state editing forms"
        }
      ],
      callouts: {
        mistake: "Relying on simple `input()` prompts in a terminal for human-in-the-loop, which blocks the thread and fails in web application architectures.",
        proTip: "Use `interrupt()` to return structured data to the caller (e.g. `{'action': 'refund', 'amount': 450}`) so frontend UIs render rich confirmation dialogs.",
        mistakes: [
          "Forgetting that breakpoints require a persistent checkpointer; without a checkpointer, paused states cannot be resumed.",
          "Allowing human approval tokens to remain valid indefinitely instead of adding expiration timestamps.",
          "Editing state without understanding the schema, corrupting message IDs and breaking conversation chains."
        ],
        proTips: [
          "Use LangGraph's Time Travel feature: fetch past checkpoints with `app.get_state_history(config)` and resume from an earlier checkpoint to test alternate paths.",
          "Add an audit log field to state (`approved_by: str`, `approval_timestamp: str`) for regulatory and SOC2 compliance.",
          "Support three human actions: Approve (proceeds as planned), Reject (cancels action with feedback), and Edit (modifies parameters before execution)."
        ]
      },
      promptLab: {
        title: "Human-in-the-Loop Approval & Time Travel Engine",
        description: "Configure interrupt breakpoints and state update handlers for sensitive enterprise tool actions.",
        variables: [
          {
            name: "Critical Action",
            label: "Protected Operation",
            options: [
              "High-Value Financial Wire Transfer ($10,000+)",
              "Production Database Schema Migration Execution",
              "External Mass Marketing Email Campaign Broadcast",
              "Cloud Infrastructure Teardown / Resource Deprovisioning"
            ],
            default: "High-Value Financial Wire Transfer ($10,000+)"
          },
          {
            name: "Supervisor Channel",
            label: "Human Review Medium",
            options: [
              "Web Dashboard with Interactive Diff Viewer and Approve/Reject Buttons",
              "Slack Channel Interactive Message with Approve / Deny Action Buttons",
              "CLI Terminal Operator Prompt with JSON Parameter Override",
              "Email Magic Link Token Authorization Gateway"
            ],
            default: "Web Dashboard with Interactive Diff Viewer and Approve/Reject Buttons"
          },
          {
            name: "Time Travel Capability",
            label: "State Rollback Mode",
            options: [
              "Support rewinding to pre-action checkpoint and altering prompt instructions",
              "Strict single-branch forward execution with immutable historical audit trail",
              "Forking new branch thread_id from historical checkpoint to compare outputs"
            ],
            default: "Support rewinding to pre-action checkpoint and altering prompt instructions"
          }
        ],
        template: `You are an Enterprise AI Security Architect configuring Human-in-the-Loop (HITL) controls.

Protected Operation: [Critical Action]
Review Interface: [Supervisor Channel]
State Manipulation: [Time Travel Capability]

Implement the complete Python code:
1. Define a LangGraph workflow with an explicit breakpoint before the protected operation node.
2. Demonstrate triggering the workflow, pausing at the interrupt, and inspecting the pending action.
3. Demonstrate updating the state with human supervisor modifications and resuming the execution to completion.`,
        expectedOutput: `from typing import Annotated, Literal
from typing_extensions import TypedDict
from langchain_core.messages import BaseMessage, HumanMessage, AIMessage
from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages
from langgraph.checkpoint.memory import MemorySaver

class WireTransferState(TypedDict):
    messages: Annotated[list[BaseMessage], add_messages]
    recipient: str
    amount: float
    approved: bool

# 1. Nodes
def plan_transfer(state: WireTransferState):
    # Agent plans the transfer
    msg = AIMessage(content=f"Prepared wire transfer of USD {state['amount']:,.2f} to {state['recipient']}. Awaiting human authorization.")
    return {"messages": [msg]}

def execute_transfer(state: WireTransferState):
    if not state.get("approved"):
        return {"messages": [AIMessage(content="Transfer aborted: Human approval was denied.")]}
    return {"messages": [AIMessage(content=f"SUCCESS: USD {state['amount']:,.2f} wired to {state['recipient']}.")]}

# 2. Graph Assembly with Breakpoint
workflow = StateGraph(WireTransferState)
workflow.add_node("plan_transfer", plan_transfer)
workflow.add_node("execute_transfer", execute_transfer)

workflow.add_edge(START, "plan_transfer")
workflow.add_edge("plan_transfer", "execute_transfer")
workflow.add_edge("execute_transfer", END)

# Compile with interrupt_before
checkpointer = MemorySaver()
app = workflow.compile(checkpointer=checkpointer, interrupt_before=["execute_transfer"])

# 3. Step 1: Run until Breakpoint
config = {"configurable": {"thread_id": "tx_req_1048"}}
inputs = {"messages": [HumanMessage(content="Wire $50,000 to vendor Acme Corp")], "recipient": "Acme Corp", "amount": 50000.0, "approved": False}

print("--- Running Initial Workflow ---")
app.invoke(inputs, config)

# 4. Step 2: Inspect State at Breakpoint
state_at_interrupt = app.get_state(config)
print("Execution paused before:", state_at_interrupt.next)
print("Pending Amount:", state_at_interrupt.values["amount"])

# 5. Step 3: Human Supervisor modifies amount down to $45,000 and approves
print("\n--- Human Supervisor Approves Modified Amount ---")
app.update_state(config, {"amount": 45000.0, "approved": True})

# 6. Step 4: Resume execution to completion
final_state = app.invoke(None, config)
print("Final Outcome:", final_state["messages"][-1].content)`
      },
      conceptGuide: {
        title: "Human-in-the-Loop as First-Class State Machine Architecture",
        overview: "In traditional scripts, pausing for human input required keeping a blocking thread alive or using brittle webhook polls. In modern agentic engineering, Human-in-the-Loop is a first-class state transition. Because the graph state is persisted to a database checkpointer, the execution thread completely terminates when an interrupt is hit: zero server memory or CPU is consumed while awaiting human review. Whether the operator reviews the pending action in 5 seconds via Slack or in 3 days via an executive web portal, the workflow resumes instantly with 100% state fidelity.",
        keyPoints: [
          "**Zero-Resource Idling:** The application process terminates while paused, freeing compute resources until the human acts.",
          "**Surgical State Modification:** Supervisors can adjust parameter payloads (e.g. lowering transfer amounts) before approving execution.",
          "**Time-Travel Debugging:** Allows developers to roll back an agent to any prior checkpoint, rewrite its memory, and test alternative reasoning branches."
        ]
      },
      learning: {
        resources: [
          {
            title: "LangGraph Human-in-the-Loop (HITL) Conceptual Guide",
            url: "https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/",
            type: "Official Docs"
          },
          {
            title: "LangGraph Breakpoints and Time Travel Tutorial",
            url: "https://langchain-ai.github.io/langgraph/how-tos/human-in-the-loop/",
            type: "Official Docs"
          },
          {
            title: "Slack Block Kit Interactive Messages & Approval Webhooks",
            url: "https://api.slack.com/block-kit",
            type: "Guide"
          },
          {
            title: "NIST AI Risk Management Framework: Human Oversight & Controllability",
            url: "https://www.nist.gov/itl/ai-risk-management-framework",
            type: "Architecture"
          }
        ]
      }
    },
    {
      id: "step-10",
      stepNumber: 10,
      phaseId: "phase-4",
      title: "Role-Based Multi-Agent Orchestration with CrewAI",
      timeEstimate: "3-4 days",
      difficulty: "Intermediate",
      summary: "Orchestrate collaborative teams of specialized AI agents with discrete roles, backstories, and hierarchical task delegation using CrewAI.",
      description: "While LangGraph excels at low-level state machines and precise cyclic control, CrewAI provides a high-level, human-centric multi-agent framework modeled after real-world organizational teams. In CrewAI, you assemble a 'Crew' of specialized `Agents`, each configured with a specific `role` (e.g., Senior Research Analyst), a `goal` (e.g., Uncover frontier AI breakthroughs), and a rich `backstory` that shapes their tone and domain instincts. Agents collaborate on sequential or hierarchical `Tasks`, passing structured outputs between one another, delegating sub-problems to teammates, and utilizing custom tools to achieve complex objectives.",
      playbook: {
        setup: "Install CrewAI and tools (`pip install crewai crewai-tools langchain-openai`).",
        execute: "Define two specialized agents: a `Researcher` equipped with search tools, and a `Writer` equipped with markdown synthesis tools. Define dependent `Tasks` where the writer's task takes the researcher's output as context. Assemble the crew: `crew = Crew(agents=[researcher, writer], tasks=[research_task, write_task], process=Process.sequential)`. Execute with `crew.kickoff(inputs={'topic': 'Quantum Computing in 2026'})`.",
        verify: "Inspect the final output: verify that the researcher first produced factual bulleted notes with citations, and the writer subsequently synthesized those notes into an executive article without hallucinating facts."
      },
      tools: [
        {
          name: "CrewAI",
          type: "Free",
          url: "https://crewai.com",
          description: "Leading multi-agent orchestration framework for assembling autonomous role-playing teams.",
          bestFor: "Role-based multi-agent teams & task delegation"
        },
        {
          name: "CrewAI Flows",
          type: "Free",
          url: "https://docs.crewai.com/concepts/flows",
          description: "Structured workflow orchestration engine combining deterministic code with agentic crews.",
          bestFor: "Production event-driven multi-agent pipelines"
        },
        {
          name: "LiteLLM",
          type: "Free",
          url: "https://github.com/BerriAI/litellm",
          description: "Universal I/O library enabling CrewAI to use 100+ LLM backends through unified OpenAI schemas.",
          bestFor: "Multi-model provider abstraction & cost tracking"
        }
      ],
      callouts: {
        mistake: "Creating a single 'super-agent' tasked with researching, coding, auditing, and writing, which leads to shallow, unfocused outputs.",
        proTip: "Specialization is key: give each agent a narrow role and a distinct model (e.g. use lightweight fast models for researchers, deep reasoning models for writers).",
        mistakes: [
          "Setting `allow_delegation=True` on all agents without a manager, causing agents to delegate tasks back and forth in endless conversational loops.",
          "Failing to provide explicit output schemas (`output_pydantic` or `output_json`) for intermediate tasks, causing downstream agents to fail parsing data.",
          "Writing vague agent backstories that fail to establish domain skepticism or formatting standards."
        ],
        proTips: [
          "Use `Process.hierarchical` and configure a `manager_llm` to have an executive agent dynamically assign tasks based on crew workload.",
          "Set `cache=True` on tools in CrewAI to prevent redundant API queries when multiple agents search similar topics.",
          "Leverage CrewAI Flows (`@start()`, `@listen()`) to combine deterministic Python validation steps with creative agent crews."
        ]
      },
      promptLab: {
        title: "CrewAI Multi-Agent Research & Writing Crew Generator",
        description: "Author a complete CrewAI script featuring specialized agents, sequential task pipelines, and Pydantic outputs.",
        variables: [
          {
            name: "Crew Objective",
            label: "Crew Mission",
            options: [
              "Deep Competitor Intelligence & Feature Parity Analysis",
              "Technical Incident Post-Mortem & Remediation Report",
              "Academic Literature Review & Executive Research Digest",
              "B2B Account-Based Marketing Dossier & Outreach Plan"
            ],
            default: "Deep Competitor Intelligence & Feature Parity Analysis"
          },
          {
            name: "Agent Roles",
            label: "Specialized Roles",
            options: [
              "Senior Intelligence Analyst (Web Search) + Product Strategist (Synthesis & Matrix)",
              "Site Reliability Engineer (Log Investigator) + Security Auditor (Root Cause Analyst)",
              "Research Fellow (ArXiv Search) + Science Communicator (Editorial Writer)",
              "Sales Intelligence Researcher (LinkedIn/Crunchbase) + Copywriter (Cold Outreach)"
            ],
            default: "Senior Intelligence Analyst (Web Search) + Product Strategist (Synthesis & Matrix)"
          },
          {
            name: "Process Topology",
            label: "Execution Process",
            options: [
              "Process.sequential (strict step-by-step handoff with Pydantic intermediate schemas)",
              "Process.hierarchical with Claude 3.7 manager LLM delegating subtasks dynamically",
              "CrewAI Flow with @start, @listen event branching and Python validation guards"
            ],
            default: "Process.sequential (strict step-by-step handoff with Pydantic intermediate schemas)"
          }
        ],
        template: `You are an Autonomous Systems Architect designing a CrewAI multi-agent team.

Mission: [Crew Objective]
Team Structure: [Agent Roles]
Process: [Process Topology]

Implement the complete Python script:
1. Define specialized Agents with tailored 'role', 'goal', 'backstory', and tools.
2. Define sequential Tasks with explicit expected outputs and dependencies.
3. Configure and execute the Crew with input parameters, returning a clean final report.`,
        expectedOutput: `import os
from pydantic import BaseModel, Field
from crewai import Agent, Task, Crew, Process
from crewai_tools import SerperDevTool

os.environ["OPENAI_MODEL_NAME"] = "gpt-4o"
search_tool = SerperDevTool()

# 1. Pydantic Output Schema for Research
class CompetitorFinding(BaseModel):
    competitor_name: str
    key_features: list[str]
    pricing_model: str
    vulnerabilities: list[str]

# 2. Specialized Agents
analyst = Agent(
    role="Senior Competitive Intelligence Analyst",
    goal="Uncover granular product features, pricing, and technical limitations of {target_market}",
    backstory="""You are a seasoned Silicon Valley market intelligence analyst. You operate with rigorous skepticism,
    verifying claims across documentation and user reviews. You never accept marketing buzzwords at face value.""",
    tools=[search_tool],
    verbose=True
)

strategist = Agent(
    role="Executive Product Strategist",
    goal="Synthesize raw competitive intelligence into an actionable feature-matrix and differentiation strategy",
    backstory="""You are a former VP of Product. You translate technical specifications into strategic moats,
    identifying high-leverage opportunities where our product can dominate.""",
    verbose=True
)

# 3. Tasks
research_task = Task(
    description="Research the top 3 competitors in {target_market}. Identify their core architecture, pricing, and user pain points.",
    expected_output="Detailed factual bullet points with source URLs for each competitor.",
    agent=analyst
)

strategy_task = Task(
    description="Analyze the findings from the research task. Formulate a 3-part strategic recommendation and competitive feature matrix.",
    expected_output="An executive markdown report containing a comparative table and strategic moats.",
    agent=strategist,
    context=[research_task]
)

# 4. Crew Assembly & Execution
crew = Crew(
    agents=[analyst, strategist],
    tasks=[research_task, strategy_task],
    process=Process.sequential,
    verbose=True
)

if __name__ == "__main__":
    result = crew.kickoff(inputs={"target_market": "AI Code Generation IDEs"})
    print("\n\n########################")
    print("## FINAL STRATEGY REPORT")
    print("########################\n")
    print(result.raw)`
      },
      conceptGuide: {
        title: "Role-Based Multi-Agent Teams & Specialization Synergy",
        overview: "When a single LLM attempts to perform a complex multi-stage task, cognitive load degrades its attention: instructions clash, formatting rules are neglected, and detail is lost. CrewAI applies organizational management theory to AI systems. By dividing a workflow among specialized agents—each operating with an isolated prompt context, tailored system backstory, and focused toolset—the system achieves emergent synergy. The researcher gathers pure data without worrying about tone; the editor polishes prose without worrying about searching. Task context passing ensures clean information handoffs.",
        keyPoints: [
          "**Context Hygiene:** Prevents long tool call traces from polluting the creative context window of synthesis agents.",
          "**Persona Grounding:** Rich backstories anchor model temperature, style, and domain skepticism consistently.",
          "**Modular Task Composition:** Tasks can be rearranged, swapped, or parallelized without rewriting agent definitions."
        ]
      },
      learning: {
        resources: [
          {
            title: "CrewAI Official Documentation & Core Concepts Guide",
            url: "https://docs.crewai.com",
            type: "Official Docs"
          },
          {
            title: "CrewAI Flows: Event-Driven Workflow Architecture",
            url: "https://docs.crewai.com/concepts/flows",
            type: "Official Docs"
          },
          {
            title: "Multi-Agent Collaboration: Principles and Topologies (arXiv)",
            url: "https://arxiv.org/abs/2308.08155",
            type: "Architecture"
          },
          {
            title: "LiteLLM Multi-Provider Proxy & Cost Tracking Integration",
            url: "https://docs.litellm.ai",
            type: "API Reference"
          }
        ]
      }
    },
    {
      id: "step-11",
      stepNumber: 11,
      phaseId: "phase-4",
      title: "Supervisor-Worker & Subgraph Multi-Agent Topologies",
      timeEstimate: "3-4 days",
      difficulty: "Advanced",
      summary: "Scale complex agent architectures using hierarchical Supervisor routers and isolated LangGraph Subgraphs to prevent context window pollution.",
      description: "As multi-agent applications grow beyond 3 agents, flat topologies fail: all agents chatter in a single shared conversation history, quickly overflowing context windows and confusing tool selections. Enterprise architectures implement hierarchical Supervisor-Worker patterns using LangGraph Subgraphs. In this topology, a central Supervisor agent acts as an executive router. When a user request arrives, the Supervisor delegates the task to an isolated domain Subgraph (e.g., Code Subgraph, Research Subgraph). The Subgraph executes its internal multi-step loop in an isolated state scope, and returns only a clean synthesized answer back to the Supervisor.",
      playbook: {
        setup: "Install LangGraph and configure multi-model routers (`pip install langgraph langchain-anthropic`).",
        execute: "Build two independent child graphs: `research_subgraph` and `code_subgraph`. Construct a parent `supervisor_graph` with a routing LLM that outputs `next_worker: Literal['researcher', 'coder', 'FINISH']`. Add the compiled subgraphs as standard nodes inside the parent supervisor graph.",
        verify: "Submit a composite prompt: 'Research the latest OAuth 2.1 RFC, then write a Python FastAPI implementation.' Verify that the Supervisor invokes the research subgraph first, receives the summary, routes to the code subgraph, and outputs the final solution."
      },
      tools: [
        {
          name: "LangGraph Subgraphs",
          type: "Free",
          url: "https://langchain-ai.github.io/langgraph/concepts/subgraphs/",
          description: "Hierarchical graph composition allowing complete graphs to be embedded as nodes in parent graphs.",
          bestFor: "Context isolation & scalable multi-agent systems"
        },
        {
          name: "CrewAI Flows",
          type: "Free",
          url: "https://docs.crewai.com/concepts/flows",
          description: "Event-driven orchestration for managing multiple specialized Crews under a unified controller.",
          bestFor: "Orchestrating multiple Crews in production pipelines"
        },
        {
          name: "AutoGen",
          type: "Free",
          url: "https://microsoft.github.io/autogen/",
          description: "Microsoft's multi-agent conversational framework featuring group chat managers.",
          bestFor: "Group chat manager topologies & code execution"
        }
      ],
      callouts: {
        mistake: "Sharing the exact same message history across 5 different agents, causing context pollution and massive token bills.",
        proTip: "Use Subgraph state mapping: pass only relevant keys into the child graph, and return only a 200-word summary back to the parent supervisor.",
        mistakes: [
          "Creating cyclic supervisor loops where two subgraphs continually bounce a problem back and forth without resolving it.",
          "Using slow high-reasoning models for the supervisor routing decision when a fast lightweight router suffices.",
          "Failing to handle failure signals from subgraphs, causing the supervisor to assume success when a worker crashed."
        ],
        proTips: [
          "Format supervisor routing with Pydantic structured output (`next_node: Literal[...]`, `instructions: str`) for 100% deterministic routing.",
          "Allow the supervisor to communicate directly with the user for clarifications before dispatching workers.",
          "Isolate tool permissions: only give the coder subgraph file-writing tools, and only give the researcher subgraph internet access."
        ]
      },
      promptLab: {
        title: "Hierarchical Supervisor-Subgraph Router Generator",
        description: "Author a scalable hierarchical multi-agent system using LangGraph Subgraphs and an executive router node.",
        variables: [
          {
            name: "Enterprise System",
            label: "System Mission",
            options: [
              "Autonomous Full-Stack Feature Engineering Team (Architect, Frontend, Backend)",
              "Cybersecurity Incident Triage & Automated Patch Verification Team",
              "Omnichannel Customer Support & Automated Refund Escrow Team",
              "Biomedical Research Literature Mining & Synthesis Network"
            ],
            default: "Autonomous Full-Stack Feature Engineering Team (Architect, Frontend, Backend)"
          },
          {
            name: "Supervisor Router Schema",
            label: "Routing Primitives",
            options: [
              "Router model returning next_agent: Literal['research_worker', 'code_worker', 'FINISH'] with reason",
              "Dynamic delegation model selecting worker from registered capability metadata",
              "Two-tier supervisor with strategic planner and operational dispatch manager"
            ],
            default: "Router model returning next_agent: Literal['research_worker', 'code_worker', 'FINISH'] with reason"
          },
          {
            name: "State Isolation Contract",
            label: "State Boundary",
            options: [
              "Subgraphs maintain isolated internal MessageState; only return synthesized summary string to Parent",
              "Parent state passes full conversation but filters tool messages before dispatch",
              "Subgraphs write directly to shared PostgreSQL database; communicate via UUID references"
            ],
            default: "Subgraphs maintain isolated internal MessageState; only return synthesized summary string to Parent"
          }
        ],
        template: `You are a Principal Multi-Agent Systems Architect configuring a hierarchical LangGraph system.

Mission: [Enterprise System]
Router Architecture: [Supervisor Router Schema]
State Isolation: [State Isolation Contract]

Write the complete Python implementation:
1. Define the child Subgraph (e.g. Research Subgraph) with internal states and tools.
2. Define the Supervisor Node with structured output routing.
3. Assemble the parent graph embedding the Subgraph as a node.
4. Demonstrate execution routing and context containment.`,
        expectedOutput: `from typing import Literal
from typing_extensions import TypedDict
from pydantic import BaseModel, Field
from langchain_core.messages import BaseMessage, HumanMessage, AIMessage
from langchain_anthropic import ChatAnthropic
from langgraph.graph import StateGraph, START, END, MessagesState

# 1. Supervisor Output Schema
class RouterResponse(BaseModel):
    next_step: Literal["research_worker", "code_worker", "FINISH"] = Field(
        description="The next specialized worker to invoke, or FINISH if the user request is satisfied."
    )
    instructions_for_worker: str = Field(description="Specific, focused instructions for the chosen worker.")

# 2. Models
router_llm = ChatAnthropic(model="claude-3-5-haiku-20241022", temperature=0.0).with_structured_output(RouterResponse)
worker_llm = ChatAnthropic(model="claude-3-7-sonnet-20250219", temperature=0.2)

# 3. Child Subgraph: Research Worker (Isolated State)
class ResearchState(TypedDict):
    research_task: str
    findings: str

def conduct_research(state: ResearchState):
    resp = worker_llm.invoke(f"Perform deep technical research on: {state['research_task']}. Provide 3 key findings.")
    return {"findings": resp.content}

research_subgraph = StateGraph(ResearchState)
research_subgraph.add_node("conduct_research", conduct_research)
research_subgraph.add_edge(START, "conduct_research")
research_subgraph.add_edge("conduct_research", END)
compiled_research_subgraph = research_subgraph.compile()

# 4. Parent Graph
class ParentState(MessagesState):
    next_step: str
    instructions: str
    research_summary: str

def supervisor_node(state: ParentState):
    prompt = f"Analyze conversation and determine next team action:\\n{state['messages']}"
    decision: RouterResponse = router_llm.invoke(prompt)
    return {"next_step": decision.next_step, "instructions": decision.instructions_for_worker}

def call_research_subgraph(state: ParentState):
    # Isolated state handoff: only pass instructions, return findings
    subgraph_result = compiled_research_subgraph.invoke({"research_task": state["instructions"]})
    msg = AIMessage(content=f"Research Team Findings:\\n{subgraph_result['findings']}")
    return {"messages": [msg], "research_summary": subgraph_result["findings"]}

def code_worker_node(state: ParentState):
    code_prompt = f"Implement the solution based on:\\n{state['instructions']}\\n\\nResearch Context:\\n{state.get('research_summary', '')}"
    resp = worker_llm.invoke(code_prompt)
    return {"messages": [AIMessage(content=resp.content)]}

# 5. Parent Assembly
parent = StateGraph(ParentState)
parent.add_node("supervisor", supervisor_node)
parent.add_node("research_worker", call_research_subgraph)
parent.add_node("code_worker", code_worker_node)

parent.add_edge(START, "supervisor")

def route_supervisor(state: ParentState):
    if state["next_step"] == "FINISH":
        return END
    return state["next_step"]

parent.add_conditional_edges("supervisor", route_supervisor, ["research_worker", "code_worker", END])
parent.add_edge("research_worker", "supervisor")
parent.add_edge("code_worker", "supervisor")

app = parent.compile()`
      },
      conceptGuide: {
        title: "Hierarchical Supervisor Architectures & Context Isolation",
        overview: "In human organizations, a CEO does not sit in every engineering standup, and a frontend developer does not read every raw database log. Flat multi-agent networks violate this principle by dumping all agent chatter into one massive shared prompt, causing catastrophic context window bloat and attention distraction. Hierarchical Supervisor-Subgraph architecture introduces organizational encapsulation to AI systems. Subgraphs execute complex multi-cycle reasoning in isolated local scopes, returning only concise synthesized artifacts to the supervisor.",
        keyPoints: [
          "**Context Encapsulation:** Child subgraphs execute dozens of intermediate tool turns without polluting the parent conversation history.",
          "**Independent Model Tuning:** Supervisors can use fast, cheap models (Claude 3.5 Haiku) for routing, while subgraphs deploy deep reasoning models (Claude 3.7).",
          "**Modular Maintainability:** Teams can update, test, and benchmark the research subgraph independently without risking regressions in the parent system."
        ]
      },
      learning: {
        resources: [
          {
            title: "LangGraph Subgraphs Architecture & Multi-Agent Design Patterns",
            url: "https://langchain-ai.github.io/langgraph/concepts/subgraphs/",
            type: "Official Docs"
          },
          {
            title: "Hierarchical Autonomous Agent Topologies and Group Chat Managers",
            url: "https://langchain-ai.github.io/langgraph/tutorials/multi_agent/hierarchical_agent_teams/",
            type: "Architecture"
          },
          {
            title: "Microsoft AutoGen Multi-Agent Conversation Framework",
            url: "https://microsoft.github.io/autogen/",
            type: "Official Docs"
          },
          {
            title: "Scaling Laws for Multi-Agent Systems & Context Efficiency",
            url: "https://arxiv.org/abs/2402.01680",
            type: "Guide"
          }
        ]
      }
    },
    {
      id: "step-12",
      stepNumber: 12,
      phaseId: "phase-4",
      title: "Tracing, Evaluation Datasets & Production Deployment",
      timeEstimate: "3-4 days",
      difficulty: "Advanced",
      summary: "Instrument full-stack agent observability with LangSmith, build automated LLM-as-a-judge evaluation benchmarks, and deploy stateful agent APIs to production.",
      description: "You cannot improve or safely deploy what you cannot measure. When an agent graph fails in production, diagnosing whether the failure stemmed from a bad prompt, an unhandled tool exception, or a model routing error requires end-to-end distributed tracing. LangSmith provides native, zero-configuration observability for LangChain and LangGraph: every LLM call, latency metric, token count, and state transition is captured in real-time waterfall trees. In this final capstone step, you will instrument production tracing, construct automated CI/CD evaluation datasets using LLM-as-a-judge scoring, and deploy your stateful agent as a production REST API via LangGraph Cloud.",
      playbook: {
        setup: "Sign up for LangSmith, obtain your API key, and configure your environment: `export LANGSMITH_TRACING=true && export LANGSMITH_API_KEY=lsv2_...`.",
        execute: "Run your compiled LangGraph agent. Open your LangSmith dashboard to inspect the real-time execution trace, token cost, and intermediate node outputs. Create an evaluation dataset of 20 benchmark test queries. Run an automated evaluation script using `langsmith.evaluation.evaluate()` pairing a custom LLM-as-a-judge correctness rubric.",
        verify: "Confirm that every agent run logs cleanly to your LangSmith project with green status, and your evaluation suite runs in CI/CD returning a quantifiable accuracy score (e.g. 95% pass rate)."
      },
      tools: [
        {
          name: "LangSmith",
          type: "Freemium",
          url: "https://smith.langchain.com",
          description: "All-in-one developer platform for tracing, debugging, testing, and evaluating LLM apps.",
          bestFor: "Full-stack distributed agent tracing & evaluation datasets"
        },
        {
          name: "Langfuse",
          type: "Free",
          url: "https://langfuse.com",
          description: "Open-source LLM engineering platform for tracing, evaluations, and prompt management.",
          bestFor: "Self-hosted agent observability & cost analytics"
        },
        {
          name: "LangGraph Cloud",
          type: "Paid",
          url: "https://langchain-ai.github.io/langgraph/cloud/",
          description: "Managed serverless infrastructure for deploying, scaling, and monitoring LangGraph agents.",
          bestFor: "Production stateful agent hosting & API deployment"
        }
      ],
      callouts: {
        mistake: "Deploying multi-agent systems to production without distributed tracing, making it impossible to diagnose user-reported failures or runaway token loops.",
        proTip: "Tag every LangSmith run with metadata (`user_id`, `environment: 'production'`, `release_version`) so you can filter traces by customer or release branch.",
        mistakes: [
          "Evaluating agents only on subjective manual 'vibes' rather than curated, automated regression benchmark datasets.",
          "Logging raw PII (social security numbers, API tokens) into unencrypted cloud trace logs without masking rules.",
          "Failing to set hard token and timeout limits on production agent endpoints, risking exorbitant cloud bills."
        ],
        proTips: [
          "Set up automated LangSmith alerts that notify your team via Slack whenever agent error rates exceed 2% over a 15-minute window.",
          "Use the LangSmith 'Add to Dataset' button directly from a production failure trace to turn edge-case bugs into permanent regression tests.",
          "Deploy using `langgraph.json` configuration to instantly generate FastAPI-compatible streaming endpoints with built-in task queues."
        ]
      },
      promptLab: {
        title: "Automated LLM-as-a-Judge Evaluation & Benchmark Suite",
        description: "Author an automated evaluation script using LangSmith to score agent output correctness against ground-truth benchmarks.",
        variables: [
          {
            name: "Evaluation Benchmark",
            label: "Test Dataset",
            options: [
              "Enterprise Customer Support Query Resolution & Policy Compliance (50 cases)",
              "Automated Python Code Refactoring & Security Vulnerability Remediation (30 cases)",
              "Financial Document Information Extraction & Numeric Accuracy (40 cases)",
              "Multi-Agent Research Synthesis & Fact Citation Grounding (25 cases)"
            ],
            default: "Enterprise Customer Support Query Resolution & Policy Compliance (50 cases)"
          },
          {
            name: "Judge Rubric",
            label: "LLM-as-a-Judge Criteria",
            options: [
              "Correctness (1-5), Policy Adherence (Binary Pass/Fail), and Hallucination Check",
              "Syntactic Validity (Pass/Fail), Security Vulnerability Elimination, and Efficiency",
              "Exact Numerical Accuracy (Tolerance < 1%), Citation Truthfulness, and Completeness",
              "Grounding in Source Documents, Comprehensiveness, and Zero Unsubstantiated Claims"
            ],
            default: "Correctness (1-5), Policy Adherence (Binary Pass/Fail), and Hallucination Check"
          },
          {
            name: "Judge Model",
            label: "Evaluator LLM",
            options: [
              "ChatOpenAI(model='gpt-4o', temperature=0.0)",
              "ChatAnthropic(model='claude-3-7-sonnet-20250219', temperature=0.0)",
              "ChatOpenAI(model='o3-mini', reasoning_effort='high')"
            ],
            default: "ChatOpenAI(model='gpt-4o', temperature=0.0)"
          }
        ],
        template: `You are an AI Quality & Reliability Engineer configuring production evaluation for LangGraph.

Dataset Scope: [Evaluation Benchmark]
Judge Criteria: [Judge Rubric]
Judge Model: [Judge Model]

Implement the complete Python evaluation script:
1. Define a LangSmith custom evaluator function implementing the rubric.
2. Configure 'evaluate()' targeting a LangSmith dataset.
3. Compute aggregate precision and policy pass rates, outputting a CI/CD summary.`,
        expectedOutput: `import os
from pydantic import BaseModel, Field
from langsmith import Client, evaluate
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate

os.environ["LANGSMITH_TRACING"] = "true"
client = Client()

# 1. Define Judge Feedback Schema
class SupportEvaluation(BaseModel):
    correctness_score: int = Field(ge=1, le=5, description="1 (completely incorrect) to 5 (flawless solution)")
    policy_compliant: bool = Field(description="True if response strictly followed company refund & auth policies")
    reasoning: str = Field(description="Detailed rationale for the assigned score")

# 2. Judge Model
judge_llm = ChatOpenAI(model="gpt-4o", temperature=0.0).with_structured_output(SupportEvaluation)

judge_prompt = ChatPromptTemplate.from_messages([
    ("system", "You are an objective QA auditor evaluating customer support AI agent responses."),
    ("human", """
    Customer Question: {input}
    Ground Truth Reference: {reference}
    Agent Generated Response: {output}
    
    Evaluate strictly against correctness and policy compliance:
    """)
])

# 3. Custom LangSmith Evaluator Function
def evaluate_support_quality(root_run, example):
    agent_output = root_run.outputs["messages"][-1].content
    user_input = example.inputs["question"]
    ground_truth = example.outputs["expected_answer"]

    eval_result: SupportEvaluation = (judge_prompt | judge_llm).invoke({
        "input": user_input,
        "reference": ground_truth,
        "output": agent_output
    })

    return [
        {"key": "correctness", "score": eval_result.correctness_score / 5.0},
        {"key": "policy_compliance", "score": 1.0 if eval_result.policy_compliant else 0.0},
        {"key": "rationale", "value": eval_result.reasoning}
    ]

# 4. Target Agent Pipeline to Evaluate
def target_agent(inputs: dict):
    # Calls your deployed LangGraph compiled app
    from my_agent import app
    res = app.invoke({"messages": [("human", inputs["question"])]})
    return res

# 5. Run Benchmark Suite
if __name__ == "__main__":
    results = evaluate(
        target_agent,
        data="enterprise-support-benchmark-v1",
        evaluators=[evaluate_support_quality],
        experiment_prefix="agent-release-candidate-v2.1"
    )
    print("Evaluation Complete. Results available in LangSmith dashboard.")`
      },
      conceptGuide: {
        title: "Observability, LLM-as-a-Judge & The Production Flywheel",
        overview: "Building a prototype agent in a Jupyter notebook takes an afternoon; maintaining a reliable production agent serving thousands of real users requires rigorous engineering discipline. Because natural language outputs cannot be validated with simple boolean assertions (`assert response == 'expected'`), production teams employ 'LLM-as-a-judge' evaluation suites. High-reasoning evaluator models score agent outputs against curated golden datasets across multiple dimensions (grounding, correctness, safety). Combined with distributed tracing, teams can identify exactly which prompt tweak or model update improved or degraded system performance.",
        keyPoints: [
          "**Distributed Span Trees:** Trace every nested tool call, token latency, and error message across complex multi-agent graphs.",
          "**Golden Regression Datasets:** Test new prompt and model changes against versioned benchmark datasets before deploying to production.",
          "**Continuous Flywheel:** Turn production edge-case errors into permanent test cases with one click in LangSmith."
        ]
      },
      learning: {
        resources: [
          {
            title: "LangSmith Observability, Tracing and Testing Documentation",
            url: "https://docs.smith.langchain.com",
            type: "Official Docs"
          },
          {
            title: "LangGraph Cloud Deployment Guide & Infrastructure Specification",
            url: "https://langchain-ai.github.io/langgraph/cloud/",
            type: "Official Docs"
          },
          {
            title: "Evaluating LLM Applications: Benchmarks, Metrics and LLM-as-a-Judge",
            url: "https://docs.smith.langchain.com/concepts/evaluation",
            type: "Architecture"
          },
          {
            title: "Langfuse Open-Source Observability & Telemetry Manual",
            url: "https://langfuse.com/docs",
            type: "API Reference"
          }
        ]
      }
    }
  ]
};
