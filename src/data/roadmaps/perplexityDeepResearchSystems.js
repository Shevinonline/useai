// Complete production-grade steps data for "Perplexity & Deep Research Systems" Roadmap (8 Nodes)

export const perplexityDeepResearchSystemsData = {
  id: "perplexity-deep-research-systems",
  title: "Perplexity & Deep Research Systems",
  description: "Build rigorous market, technical, and academic research workflows with verified source citations and custom spaces.",
  category: "Tool Mastery Roadmaps",
  stepCount: 8,
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: Search Focus Modes, Query Decomposition & Operator Mastery",
      description: "Filter out SEO content farm noise using targeted focus modes, decompose ambiguous research questions into sequential multi-hop queries, and master precision Boolean syntax."
    },
    {
      id: "phase-2",
      title: "Phase 2: Autonomous Deep Research Agents & Citation Auditing",
      description: "Dispatch autonomous agents to explore 50+ live sources over multi-minute search trajectories, triangulate statistical claims, and audit primary citations for circular reporting."
    },
    {
      id: "phase-3",
      title: "Phase 3: Custom Knowledge Spaces, Audio Synthesis & Literature Synthesis",
      description: "Ground live internet research into persistent team Spaces with custom system prompts, synthesize multi-document literature corpora, and generate NotebookLM audio overviews."
    },
    {
      id: "phase-4",
      title: "Phase 4: Programmatic Search APIs (Sonar, Tavily, Exa) & Automated Briefings",
      description: "Integrate citation-backed search APIs into custom LLM apps, configure domain allowlists and structured JSON outputs, and orchestrate automated competitor intelligence pipelines."
    }
  ],
  steps: [
    // Node 1
    {
      id: "step-1",
      stepNumber: 1,
      phaseId: "phase-1",
      title: "Mastering Focus Modes (Web, Academic, SEC Filings, Social & Code)",
      timeEstimate: "1.5 hrs",
      difficulty: "Beginner",
      summary: "Restrict retrieval indexes to peer-reviewed PDFs, SEC EDGAR 10-K filings, or Reddit/GitHub discussions to eliminate SEO content-farm noise.",
      description: "Standard web search has been severely degraded by affiliate marketing, SEO content farms, sponsored listicles, and AI-generated scrapers. When investigating enterprise technical architectures or competitive market valuations, searching the open web typically surfaces superficial marketing blogs rather than primary source evidence. Perplexity Pro solves this signal-to-noise crisis through specialized 'Focus Modes'.\n\nFocus Modes fundamentally restrict the retrieval-augmented generation (RAG) vector index to verified thematic data corpuses. Selecting 'Academic' limits document retrieval strictly to peer-reviewed scientific journals, arXiv preprints, and PubMed publications with DOI metadata. Selecting 'Finance / SEC Filings' targets official EDGAR regulatory 10-K/10-Q filings, earnings call transcripts, and audited financial statements. 'Social / Discussions' restricts indexing to authentic practitioner conversations on Reddit, Hacker News, and X/Twitter to surface unfiltered user sentiment. Knowing which corpus to target before asking a question prevents hours of wading through unverified blog spam.",
      playbook: {
        setup: "Log in to Perplexity Pro (perplexity.ai). In the main search bar, click the 'Focus' button to inspect available search filters (All, Academic, Writing, Wolfram|Alpha, YouTube, Reddit).",
        execute: "Toggle the Focus mode to 'Academic'. Enter an empirical research query: 'What are the verified throughput and VRAM bottlenecks of FP8 quantized inference vs BF16 on NVIDIA H100 clusters? Cite arXiv papers.' Next, switch Focus to 'Reddit / Discussions' and query: 'Production reliability issues with Deno Deploy vs AWS Lambda in 2026.' Compare the technical depth and authenticity of sources.",
        verify: "Examine the generated footnotes: confirm that the Academic query links exclusively to peer-reviewed papers on arXiv or IEEE Xplore with DOI links, and the Discussions query references genuine engineering post-mortems rather than affiliate marketing sites."
      },
      tools: [
        {
          name: "Perplexity Pro",
          type: "Conversational Search Engine",
          url: "https://www.perplexity.ai",
          description: "AI-powered conversational search engine with real-time web retrieval, Focus modes, Pro Search reasoning, and citation indexing.",
          bestFor: "Real-time research, source-cited synthesis & multi-corpus filtering"
        },
        {
          name: "Google Scholar",
          type: "Academic Index",
          url: "https://scholar.google.com",
          description: "Vast scholarly search database indexing peer-reviewed journal papers, academic dissertations, and conference proceedings.",
          bestFor: "Validating academic citations, citation metrics & paper abstracts"
        },
        {
          name: "Semantic Scholar",
          type: "AI Academic Discovery Engine",
          url: "https://www.semanticscholar.org",
          description: "Free AI-powered scientific literature search engine developed by the Allen Institute for AI to track research influence and citations.",
          bestFor: "Tracking highly influential citations & semantic literature mapping"
        }
      ],
      callouts: {
        mistake: "Using the default 'All / Web' Focus mode for medical, financial, or deep engineering questions, which often synthesizes recycled marketing blogs instead of primary datasets.",
        proTip: "Use 'Writing' Focus mode when you want Perplexity's advanced LLMs (Claude 3.7 or GPT-4o) to draft content without searching the web, preserving maximum reasoning context.",
        mistakes: [
          "Relying on uncited assertions without clicking footnotes to verify that the source document actually supports the generated claim.",
          "Searching for proprietary software troubleshooting on the open web instead of using 'Social' Focus to find authentic GitHub Issues and Reddit workarounds.",
          "Using Academic mode for fast-moving current events (like breaking tech news), where peer-reviewed literature is not yet published."
        ],
        proTips: [
          "In Academic mode, prompt Perplexity to output citations in standard BibTeX format for instant import into Zotero or LaTeX manuscripts.",
          "Use the 'Finance' mode to analyze company earnings: prompt 'Compare Gross Margin expansion for Datadog vs Snowflake in their last three 10-Q filings.'",
          "Switch models inside Perplexity Pro between Claude 3.7 Sonnet (best for prose and synthesis) and DeepSeek R1 / o3-mini (best for complex logical queries)."
        ]
      },
      promptLab: {
        title: "Focus Mode Selection & Primary Source Retrieval Blueprint",
        description: "Generate structured, corpus-restricted investigative search queries that bypass SEO spam and retrieve verified empirical evidence.",
        variables: [
          {
            name: "Research Objective",
            label: "Investigation Goal",
            options: ["Enterprise Database Scaling & Benchmark Comparison", "B2B SaaS Churn & Retention Benchmarks (10-K Filings)", "Autonomous LLM Agent Memory Architectures"],
            default: "Enterprise Database Scaling & Benchmark Comparison"
          },
          {
            name: "Target Corpus",
            label: "Perplexity Focus Mode",
            options: ["Academic (arXiv, IEEE, PubMed, ACM)", "Finance / Regulatory (SEC EDGAR, 10-K / 10-Q)", "Discussions (Reddit, Hacker News, GitHub Issues)"],
            default: "Academic (arXiv, IEEE, PubMed, ACM)"
          },
          {
            name: "Evidence Standard",
            label: "Verification Standard",
            options: ["Empirical Benchmarks with Numerical Hardware Specs", "Audited Financial Statements with GAAP Footnotes", "First-Person Practitioner Incident Post-Mortems"],
            default: "Empirical Benchmarks with Numerical Hardware Specs"
          }
        ],
        template: `# Focus Mode Research & Primary Source Inquiry
Investigation: [Research Objective]
Corpus Filter: [Target Corpus]
Evidence Required: [Evidence Standard]

Act as a Principal Research Scientist and Technical Due-Diligence Lead.
Construct a high-precision Perplexity search query and verification matrix:
1. Primary Search Query: Write the exact prompt optimized for [Target Corpus] Focus mode.
2. Search Operator Inclusion: Include domain restrictions, date boundaries, and filetype constraints.
3. Source Evaluation Protocol: 4 strict criteria to reject low-quality affiliate blogs and accept only [Evidence Standard].
4. Output Schema: Formatted markdown table comparing findings with mandatory primary source footnotes.`,
        expectedOutput: `### Primary Source Research Specification: [Research Objective]

#### 1. Perplexity Search Prompt ([Target Corpus] Focus)
\`\`\`text
Analyze the empirical throughput (queries per second), tail latency (p99 in milliseconds), and memory scaling of pgvector HNSW indexing vs Qdrant on billion-scale vector datasets. 
Restrict findings strictly to peer-reviewed experimental papers, VLDB conference proceedings, and verified engineering benchmarks from arXiv. 
Filter out vendor marketing claims. For every benchmark statistic cited, include the exact hardware configuration (CPU, RAM, NVMe, GPU model) and dataset dimensions.
\`\`\`

#### 2. Advanced Search Operators & Filters
- **Corpus**: \`Focus: Academic\`
- **Keyword Modifiers**: \`"HNSW" AND "pgvector" AND "Qdrant" AND ("billion-scale" OR "SIFT1B")\`
- **Date Constraint**: \`2024-2026\`
- **Filetype Exclusion**: \`-site:medium.com -site:dev.to -site:hashnode.com\` (eliminates beginner summary blogs).

#### 3. Primary Evidence Acceptance Criteria ([Evidence Standard])
1. **Hardware Transparency**: Benchmarks must explicitly state cluster node counts, RAM capacity, and drive IOPS.
2. **Replicability**: Must reference public GitHub repository reproduction scripts or standard benchmark suites (e.g. ANN-Benchmarks).
3. **Primary Attribution**: Reject any source that quotes secondary news outlets without linking the original research paper.
4. **Peer Review**: Prioritize ACM SIGMOD, IEEE ICDE, and VLDB conference publications over un-reviewed company whitepapers.

#### 4. Expected Synthesis Format
Synthesizes findings into a verified comparison table with hyperlinked citation brackets \`[1]\`, \`[2]\` referencing DOI URLs.`
      },
      conceptGuide: {
        title: "Retrieval-Augmented Indexing & The Death of Open Web Search",
        overview: "Search engine optimization (SEO) algorithms historically rewarded relevance and quality backlinks. In recent years, programmatic AI content generation flooded search indexes with millions of low-quality, keyword-stuffed affiliate pages designed to monetize ad impressions. Perplexity's Focus Modes represent a paradigm shift: rather than searching the open internet indiscriminately, the retrieval engine pre-filters its candidate vector index to authoritative, specialized document repositories (academic papers, SEC filings, code repositories), restoring intellectual rigor to online research.",
        keyPoints: [
          "**Corpus Isolation:** Pre-filtering vector search to trusted domains eliminates 95% of SEO content farm pollution.",
          "**Primary Source Grounding:** Academic and SEC Focus modes restrict generation to legal filings and peer-reviewed studies.",
          "**Discussions Signal:** Social Focus indexes practitioner discussions (Reddit/Hacker News) to capture unfiltered real-world bugs."
        ]
      },
      learning: {
        resources: [
          {
            title: "Perplexity Hub: Focus Modes & Search Capabilities Guide",
            url: "https://www.perplexity.ai/hub/faq/what-is-focus-mode",
            type: "Official Docs"
          },
          {
            title: "Semantic Scholar: Academic Graph & AI Search",
            url: "https://www.semanticscholar.org",
            type: "Official Tool"
          },
          {
            title: "SEC EDGAR System: Researching Public Company Filings",
            url: "https://www.sec.gov/edgar/searchedgar/companysearch",
            type: "Regulatory Resource"
          },
          {
            title: "Google Scholar Help: Advanced Search Operators & Syntax",
            url: "https://scholar.google.com/intl/en/scholar/help.html",
            type: "Search Standard"
          }
        ]
      }
    },

    // Node 2
    {
      id: "step-2",
      stepNumber: 2,
      phaseId: "phase-1",
      title: "Multi-Hop Query Decomposition & Search Operator Framing",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Structure complex investigative prompts that force the search agent to break a broad question into 5–8 sequential sub-queries before synthesizing.",
      description: "When researching a complex, multi-faceted topic—such as evaluating how a competitor's pricing restructuring impacted their net revenue retention, or understanding how changing European AI Act regulations affect healthcare SaaS startups—submitting a single broad query like 'Tell me about the EU AI Act for health startups' yields generic, high-level summaries. The search engine executes a single search query, retrieves top-ranking shallow pages, and summarizes them.\n\nProfessional researchers deploy 'Multi-Hop Query Decomposition'. In this methodology, a complex problem is broken down into a sequenced dependency tree of granular sub-questions. By activating Perplexity 'Pro Search' (powered by reasoning chains) or utilizing Claude 3.7 to draft a decomposed prompt, you force the search agent to execute multiple consecutive searches: first gathering regulatory definitions, next querying legal liability precedents, then searching for specific medical software exemptions, and finally comparing compliance timelines. Framing queries with advanced search operators (`site:`, `filetype:pdf`, `before:`, `\"exact phrase\"`) guarantees surgical precision.",
      playbook: {
        setup: "In Perplexity, enable the 'Pro Search' toggle (located next to the input box). Prepare an investigative research thesis requiring multi-faceted evidence.",
        execute: "Structure your prompt as an investigative blueprint with explicit sub-questions: 'Conduct a multi-hop investigation into [Topic]. Decompose this into 4 sequential search queries: 1. Official statutory text, 2. Financial impact filings, 3. Industry compliance consensus, 4. Enforcement precedents. For each sub-question, execute a dedicated web query, cite primary sources, and cross-reference discrepancies.' Observe Perplexity executing multiple live web queries in real time.",
        verify: "Inspect the 'Searched X sources' drop-down in Perplexity: confirm that the agent formulated distinct, targeted search queries for each sub-topic and integrated citations from all queries into a cohesive final briefing."
      },
      tools: [
        {
          name: "Perplexity Pro Search",
          type: "Multi-Step Reasoning Search Engine",
          url: "https://www.perplexity.ai",
          description: "Multi-hop reasoning engine that decomposes complex prompts, asks clarifying questions, and executes multiple iterative web queries.",
          bestFor: "Complex investigative research, multi-part questions & iterative search"
        },
        {
          name: "Exa.ai",
          type: "Neural Semantic Search API",
          url: "https://exa.ai",
          description: "Search engine designed for AI agents that searches the web using embeddings and meaning rather than simple keyword matching.",
          bestFor: "Semantic search, finding similar links & crawling clean text"
        },
        {
          name: "Claude 3.7 Sonnet",
          type: "Reasoning LLM & Query Planner",
          url: "https://www.anthropic.com/claude",
          description: "Advanced reasoning model used to decompose ambiguous research topics into exhaustive sub-query dependency trees.",
          bestFor: "Query planning, investigative structuring & hypothesis generation"
        }
      ],
      callouts: {
        mistake: "Asking multiple unrelated questions in a single sentence without numbering or structuring them, causing the search agent to answer only the first part and overlook the rest.",
        proTip: "Use `filetype:pdf` in Perplexity prompts to uncover internal corporate slide decks, academic whitepapers, and regulatory filings that never appear in standard HTML search results.",
        mistakes: [
          "Forgetting to enable 'Pro Search', causing Perplexity to run single-hop fast search instead of iterative multi-query reasoning.",
          "Using overly broad keywords (e.g. 'cybersecurity') instead of industry-standard jargon ('SOC 2 Type II continuous compliance automation').",
          "Accepting the first synthesized answer without asking follow-up probes to stress-test counterarguments or dissenting opinions."
        ],
        proTips: [
          "Use the `site:gov` or `site:edu` search operator inside Perplexity prompts to restrict evidence strictly to government or university domains.",
          "Click the 'Edit' button on Perplexity's generated queries to refine the sub-search keywords if the agent initially headed down the wrong rabbit hole.",
          "Ask Perplexity to 'Construct a chronological timeline of events with dates and primary source citations' to map historical developments."
        ]
      },
      promptLab: {
        title: "Multi-Hop Investigative Search Query Decomposer",
        description: "Transform broad research topics into a sequenced 5-hop search plan with boolean operators, domain restrictions, and synthetic synthesis directives.",
        variables: [
          {
            name: "Complex Research Subject",
            label: "Research Thesis",
            options: ["Impact of DeepSeek R1 Architecture on Cloud GPU CapEx", "US Healthcare Price Transparency Compliance & Penalties", "Commercial Viability of Small Modular Nuclear Reactors (SMRs)"],
            default: "Impact of DeepSeek R1 Architecture on Cloud GPU CapEx"
          },
          {
            name: "Primary Analytical Lens",
            label: "Focus Perspective",
            options: ["Financial & Venture Capital Unit Economics", "Technical Algorithmic & Hardware Architecture", "Legal Regulatory & Compliance Risk"],
            default: "Financial & Venture Capital Unit Economics"
          },
          {
            name: "Required Operator Constraints",
            label: "Search Syntax Modifiers",
            options: ["site:sec.gov OR site:bloomberg.com filetype:pdf", "site:arxiv.org OR site:github.com", "site:gov AND 'final rule' -site:blog"],
            default: "site:sec.gov OR site:bloomberg.com filetype:pdf"
          }
        ],
        template: `# Multi-Hop Investigative Research Blueprint
Subject: [Complex Research Subject]
Analytical Lens: [Primary Analytical Lens]
Search Operator Bounds: [Required Operator Constraints]

Act as an Elite Equity Research Analyst and Investigative Intelligence Director.
Execute a multi-hop decomposed research inquiry in Perplexity Pro:
1. Decomposed Sub-Query Sequence: Formulate 5 distinct, sequential search queries designed to uncover primary evidence.
2. Search Operator Integration: Embed [Required Operator Constraints] into the queries.
3. Contradiction & Consensus Protocol: Explicit directives to compare optimistic vendor statements against objective financial disclosures.
4. Structured Dossier Format: Executive summary, data comparison matrix, verified primary source footnotes, and key risk factors.`,
        expectedOutput: `### Multi-Hop Research Architecture: [Complex Research Subject]

#### 1. Sequenced Sub-Query Decomposition Plan
In Perplexity Pro Search, input the following structured prompt:

\`\`\`text
Execute an in-depth multi-hop investigation into [Complex Research Subject] through the analytical lens of [Primary Analytical Lens]. 
Decompose your search into the following 5 distinct phases before writing your conclusion:

Hop 1 (Baseline Technical Claims): Search for official technical benchmarks regarding training compute and inference cluster efficiency.
Hop 2 (Public Market Disclosures): Query [Required Operator Constraints] for quarterly capital expenditure (CapEx) updates from major hyperscalers (Microsoft, Meta, Google).
Hop 3 (Hardware Supply Chain): Search for financial guidance from semiconductor suppliers regarding high-bandwidth memory (HBM3e) and rack shipments.
Hop 4 (Analyst Consensus & Dissent): Search for verified reports from institutional research firms comparing long-term inference cost models vs. legacy clusters.
Hop 5 (Counter-Evidence & Bottlenecks): Search specifically for reported power constraints, interconnect bottlenecks, and enterprise deployment hurdles.

SYNTHESIS DIRECTIVE:
Compare public claims in Hop 1 against audited disclosures in Hop 2. Highlight any discrepancies between marketing narratives and financial reality. Cite every statistic with hyperlinked primary source footnotes.
\`\`\`

#### 2. Verification & Synthesis Table Output Schema
The resulting dossier generates an exhaustive breakdown:
- **Phase 1**: Hardware CapEx Run-Rates (Historical vs. Projected 2026).
- **Phase 2**: Algorithmic Efficiency Gains (Inference token cost per million).
- **Phase 3**: Direct Primary Quotes from SEC 10-K Filings and Investor Call Transcripts.
- **Phase 4**: Risk Matrix identifying unverified vendor claims.`
      },
      conceptGuide: {
        title: "Multi-Hop Information Retrieval & Reasoning Trees",
        overview: "Single-hop search treats information retrieval as a one-shot matching problem: matching input keywords to a single web document. However, complex human questions require multi-hop reasoning: answering Part B is impossible without first discovering the answer to Part A. Multi-hop query decomposition structures search as a directed acyclic graph (DAG) of sub-queries. The search agent uses intermediate search results from Hop 1 to dynamically formulate more targeted questions in Hop 2 and Hop 3, synthesizing a final answer that exists in no single web document.",
        keyPoints: [
          "**Sequential Dependency Chains:** Intermediate answers dynamically inform subsequent search queries.",
          "**Holistic Synthesis:** Assembles comprehensive market intelligence that spans dozens of disparate sources.",
          "**Search Operator Precision:** Combining `site:`, `filetype:`, and boolean operators isolates primary data from secondary commentary."
        ]
      },
      learning: {
        resources: [
          {
            title: "Perplexity Pro Search: Multi-Step Reasoning Guide",
            url: "https://www.perplexity.ai/hub/faq/what-is-pro-search",
            type: "Official Docs"
          },
          {
            title: "Exa.ai: Neural Search Architecture & API Documentation",
            url: "https://docs.exa.ai",
            type: "Official Docs"
          },
          {
            title: "MIT CSAIL: Multi-Hop Question Answering over Web Corpora",
            url: "https://www.csail.mit.edu",
            type: "Academic Research"
          },
          {
            title: "Google Search Central: Advanced Google Search Operators",
            url: "https://support.google.com/websearch/answer/2466433",
            type: "Search Operator Standard"
          }
        ]
      }
    },

    // Node 3
    {
      id: "step-3",
      stepNumber: 3,
      phaseId: "phase-2",
      title: "Running Autonomous Multi-Step Deep Research Reports",
      timeEstimate: "2.5 hrs",
      difficulty: "Intermediate",
      summary: "Dispatch long-horizon research agents that browse 50–100+ live sources over several minutes to compile exhaustive market intelligence dossiers.",
      description: "Standard conversational AI responses take 5 to 10 seconds and typically consult 3 to 5 web links, producing shallow summaries suitable only for basic trivia. When an enterprise strategy team needs a 20-page comprehensive market analysis—such as an exhaustive landscape of sovereign AI cloud initiatives across EMEA, complete with government subsidies, hardware suppliers, and regulatory hurdles—a 10-second response is completely useless.\n\nAutonomous Deep Research engines (pioneered by Perplexity Deep Research, OpenAI Deep Research, and Gemini Deep Research) represent a fundamental paradigm shift into long-horizon autonomous agents. When given an open-ended research thesis, a Deep Research agent takes 5 to 20 minutes of compute time. It autonomously browses 50 to 150+ live web pages, PDFs, and data sheets, dynamically reading full-text articles, following footnotes, backtracking when dead ends are reached, cross-checking conflicting numbers, and synthesizing an exhaustive 3,000-to-10,000-word structured intelligence dossier complete with executive summaries, comparative tables, and dozens of verified primary source citations.",
      playbook: {
        setup: "Open Perplexity Pro (or OpenAI/Gemini Deep Research). Select 'Deep Research' mode from the model/search selector.",
        execute: "Craft an exhaustive research prompt specifying the research scope, required historical context, key players, financial metrics, and delivery structure. Submit the query. Watch the agent's real-time thought trace: observe it drafting sub-questions, crawling dozens of distinct websites, reading PDF whitepapers, and evaluating source quality over several minutes. Once complete, review the generated multi-section dossier.",
        verify: "Inspect the final report: confirm that it references 40+ unique primary sources, includes detailed quantitative comparison tables, and provides rigorous analysis rather than generic surface-level bullet points. Export the report as Markdown or PDF."
      },
      tools: [
        {
          name: "Perplexity Deep Research",
          type: "Autonomous Research Agent",
          url: "https://www.perplexity.ai",
          description: "Long-horizon research agent that iteratively browses, reads, and synthesizes dozens of web sources over several minutes to produce exhaustive reports.",
          bestFor: "Exhaustive market landscapes, competitive dossiers & academic literature reviews"
        },
        {
          name: "OpenAI Deep Research",
          type: "Multi-Step Web Research Agent",
          url: "https://openai.com",
          description: "Autonomous reasoning agent integrated into ChatGPT that browses the internet for up to 20 minutes to compile enterprise-grade research dossiers.",
          bestFor: "Long-form intelligence reports, strategic due diligence & financial modeling"
        },
        {
          name: "Gemini Deep Research",
          type: "Multimodal Research Assistant",
          url: "https://gemini.google.com",
          description: "Google's autonomous research agent utilizing Gemini 1.5 Pro's 2-million-token context window to analyze hundreds of web documents simultaneously.",
          bestFor: "Massive document ingestion, cross-modal research & Google ecosystem integration"
        }
      ],
      callouts: {
        mistake: "Submitting a one-line prompt like 'Explain quantum computing' to Deep Research; autonomous agents require detailed constraints, target metrics, and structured outlines to produce elite results.",
        proTip: "Ask Deep Research to identify 'Unresolved Industry Controversies and Dissenting Opinions' to uncover non-consensus market insights that standard searches ignore.",
        mistakes: [
          "Closing your browser tab before the agent finishes its multi-minute research loop, which can interrupt intermediate state synchronization.",
          "Accepting statistical claims in the generated dossier without spot-checking the cited primary PDF to verify context.",
          "Over-constraining the agent with so many contradictory rules that it fails to find sufficient qualifying sources."
        ],
        proTips: [
          "Provide Deep Research with a pre-formatted Markdown skeleton (e.g. Executive Summary, Market Sizing, Key Vendors, Regulatory Headwinds) to dictate the exact report layout.",
          "Instruct the agent: 'Explicitly state if a metric is unavailable in public disclosures rather than hallucinating an estimate.'",
          "Export the finished Deep Research markdown report into Notion or Obsidian to build an evergreen corporate intelligence repository."
        ]
      },
      promptLab: {
        title: "Autonomous Deep Research Master Dossier Prompt",
        description: "Structure a comprehensive, multi-section research mandate that commands Deep Research agents to scour 50+ sources over multi-minute runs.",
        variables: [
          {
            name: "Strategic Market Topic",
            label: "Research Mandate",
            options: ["Global Sovereign AI Cloud Infrastructure Landscape", "Commercial Real Estate Debt Refinancing Crisis (2026-2028)", "Solid-State Battery Commercialization Timelines & Cost Curves"],
            default: "Global Sovereign AI Cloud Infrastructure Landscape"
          },
          {
            name: "Quantitative Metric Focus",
            label: "Target Data Points",
            options: ["Government Subsidies, Cluster GPU Volumes & Energy Grid MW", "Default Rates, Loan-to-Value (LTV) Ratios & Regional Bank Exposure", "Gravimetric Energy Density (Wh/kg), Cell Cost ($/kWh) & Factory Timelines"],
            default: "Government Subsidies, Cluster GPU Volumes & Energy Grid MW"
          },
          {
            name: "Geographic Scope",
            label: "Market Scope",
            options: ["Europe (France, Germany, UK) & Middle East (UAE, Saudi Arabia)", "North America (Tier-1 vs Tier-2 Metropolitan Markets)", "East Asia (Japan, South Korea, Taiwan)"],
            default: "Europe (France, Germany, UK) & Middle East (UAE, Saudi Arabia)"
          }
        ],
        template: `# Autonomous Deep Research Mandate & Dossier Architecture
Topic: [Strategic Market Topic]
Core Metrics: [Quantitative Metric Focus]
Geography: [Geographic Scope]

Act as an Executive Director of Global Strategic Intelligence.
Execute an exhaustive, multi-step autonomous Deep Research investigation:
1. Research Scope & Mandate: Direct the agent to explore at least 50 distinct primary sources over a sustained multi-minute analysis run.
2. Mandatory Report Sections:
   - Section 1: Executive Summary & Strategic Inflection Points.
   - Section 2: Comprehensive Player Matrix (Government Initiatives vs. Private Cloud Providers).
   - Section 3: Hard Quantitative Benchmark Data covering [Quantitative Metric Focus].
   - Section 4: Geopolitical & Regulatory Constraints across [Geographic Scope].
   - Section 5: Unresolved Vulnerabilities & High-Risk Failure Scenarios.
3. Citation & Transparency Protocol: Mandatory rules for inline footnotes and explicit declaration of unverified data.`,
        expectedOutput: `### Autonomous Deep Research Specification: [Strategic Market Topic]

#### 1. Formatted Master Prompt (Input for Deep Research Mode)
\`\`\`text
Conduct an exhaustive, high-depth investigative research report on: [Strategic Market Topic] across [Geographic Scope].

Take as much compute time as necessary to thoroughly browse and read at least 50 primary sources, including government legislative whitepapers, hyperscaler financial disclosures, energy grid operator reports, and tier-1 investigative publications.

STRUCTURE YOUR 4,000+ WORD DOSSIER AS FOLLOWS:

1. EXECUTIVE SUMMARY:
   - 3 core strategic conclusions and market inflection points.
   - Aggregate capital deployed and committed across [Geographic Scope] through 2026.

2. QUANTITATIVE BENCHMARK MATRIX:
   - Construct a comprehensive markdown table comparing key national initiatives across: [Quantitative Metric Focus].
   - Include exact hardware vendor allocations (NVIDIA, AMD, custom ASICs) and power procurement contracts.

3. STRATEGIC ARCHITECTURE & INFRASTRUCTURE:
   - Detailed analysis of sovereign data privacy requirements, air-gapped VPC architectures, and local compliance laws.

4. REGULATORY & GEOPOLITICAL HEADWINDS:
   - Export restrictions, power grid interconnection queues, and environmental cooling regulations.

5. NON-CONSENSUS MARKET RISKS:
   - Identify 3 under-reported vulnerabilities that could derail current multi-billion dollar projections.

STRICT CITATION RULES:
- Provide exact hyperlinked footnotes for every statistical figure cited.
- If a specific figure is proprietary or unconfirmed, state "Not publicly disclosed" rather than providing an approximation.
\`\`\`

#### 2. Expected Dossier Deliverable Attributes
- **Source Breadth**: 45 to 80 verified primary links displayed in the Perplexity source viewer.
- **Report Length**: 3,500 to 6,000 words across structured headers.
- **Data Density**: Multi-column comparative tables comparing national initiatives with primary source URLs.`
      },
      conceptGuide: {
        title: "Long-Horizon Reasoning & Autonomous Web Exploration",
        overview: "Traditional LLM interactions operate in a single synchronous turn. Deep Research agents operate as autonomous agentic loops. The agent maintains a persistent goal state, formulates an initial search hypothesis, evaluates returned search snippets, clicks through to read full-page DOM contents, extracts relevant factual nuggets into an internal scratchpad, detects information gaps, and formulates subsequent targeted searches. This iterative search-evaluate-refine loop runs for hundreds of tool calls before synthesizing the final comprehensive document.",
        keyPoints: [
          "**Autonomous Loop Execution:** The agent autonomously explores, reads full web pages, and backtracks when encountering dead ends.",
          "**High Source Multiplicity:** Consolidates evidence from 50 to 100+ distinct websites rather than summarizing top 3 search results.",
          "**Scratchpad Context Accumulation:** Gathers facts across multiple hops before generating the final report, ensuring deep coherence."
        ]
      },
      learning: {
        resources: [
          {
            title: "Perplexity Deep Research: Technical Launch & Capability Overview",
            url: "https://www.perplexity.ai/hub/blog/introducing-deep-research",
            type: "Official Announcement"
          },
          {
            title: "OpenAI Deep Research Official Documentation & Guide",
            url: "https://openai.com/index/introducing-deep-research/",
            type: "Official Docs"
          },
          {
            title: "Google Gemini Deep Research Overview",
            url: "https://blog.google/technology/ai/gemini-deep-research/",
            type: "Official Docs"
          },
          {
            title: "Harvard Business Review: AI-Powered Competitive Intelligence",
            url: "https://hbr.org",
            type: "Strategy Resource"
          }
        ]
      }
    },

    // Node 4
    {
      id: "step-4",
      stepNumber: 4,
      phaseId: "phase-2",
      title: "Source Triangulation, Claim Verification & Hallucination Auditing",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Cross-check statistical claims against primary datasets, spot circular reporting where blogs cite each other, and verify publication recency.",
      description: "AI-generated text-to-speech, code, or research reports are only as reliable as their underlying sources. In the modern web ecosystem, 'circular reporting' is rampant: one tech blog publishes an unverified rumor or exaggerated market statistic; five other blogs cite the first blog; and an AI search engine concludes that the statistic is true because 'multiple independent sources' agree. Blindly trusting AI citations without rigorous verification leads to catastrophic business decisions.\n\nMastering Source Triangulation requires cross-referencing claims against primary empirical datasets. A statistic is not verified because three blogs repeated it; it is verified only when traced back to the primary source—such as the original SEC filing, academic paper table, or government census database. Tools like Consensus.app and Elicit specialize in extracting empirical scientific findings from peer-reviewed literature, while Perplexity's inline footnote inspector allows researchers to audit whether a source actually says what the AI claims it says. Auditing for publication recency, methodology sample sizes, and potential commercial conflicts of interest guarantees air-tight research integrity.",
      playbook: {
        setup: "Identify a surprising or controversial statistical claim generated in an AI research report. Open Consensus.app (consensus.app) or Elicit (elicit.com) alongside Perplexity.",
        execute: "Click on the footnote bracket (e.g. `[4]`) in Perplexity to open the primary source page. Press `Cmd + F` on the source page and search for the exact number or claim. Verify whether the source explicitly confirms the stat, or if the AI misinterpreted a conditional statement. In Consensus.app, enter the underlying hypothesis to view the 'Consensus Meter' across peer-reviewed papers (e.g. 'Does caffeine consumption increase cognitive reaction time in sleep-deprived adults?').",
        verify: "Confirm that the statistical claim traces back to an uncompromised primary dataset, the sample size ($N$) is statistically significant, and the claim is not the result of circular blog syndication."
      },
      tools: [
        {
          name: "Perplexity Citations",
          type: "Interactive Footnote Verifier",
          url: "https://www.perplexity.ai",
          description: "Live footnote inspection interface that links every synthesized statement directly to the original web page snippet and URL.",
          bestFor: "Real-time fact checking, quote verification & footnote auditing"
        },
        {
          name: "Consensus.app",
          type: "Academic Consensus Engine",
          url: "https://consensus.app",
          description: "AI academic search engine that analyzes 200M+ research papers to extract consensus meters and direct empirical findings.",
          bestFor: "Scientific claim verification, consensus auditing & meta-analyses"
        },
        {
          name: "Elicit",
          type: "AI Research Assistant",
          url: "https://elicit.com",
          description: "Automated literature review platform that extracts structured data columns (sample size, methodology, outcomes) from research papers.",
          bestFor: "Tabular data extraction, methodology verification & paper synthesis"
        }
      ],
      callouts: {
        mistake: "Assuming a claim is true simply because Perplexity provides a footnote; LLMs can occasionally cite a legitimate URL while misinterpreting the numbers within that URL.",
        proTip: "If you suspect circular reporting, search for the exact statistic enclosed in quotes along with `-site:...` exclusions to find the earliest historical mention.",
        mistakes: [
          "Failing to check the publication date of cited articles, using outdated 2018 market statistics for fast-moving 2026 AI infrastructure decisions.",
          "Accepting survey results funded by a vendor whose commercial product is directly endorsed by the survey's conclusions.",
          "Ignoring sample size ($N$) in cited studies; a study with $N=12$ is an exploratory pilot, not definitive enterprise evidence."
        ],
        proTips: [
          "Use Elicit's 'Extract Data from Papers' feature to build a comparison table showing sample size, dosage, and effect size across 10 studies in seconds.",
          "In Perplexity, prompt: 'Audit your previous response. For each cited claim, verify if the source document represents primary empirical data or secondary commentary.'",
          "Look for meta-analyses and systematic literature reviews (e.g. Cochrane Reviews) rather than single isolated studies."
        ]
      },
      promptLab: {
        title: "Forensic Fact-Checking & Source Triangulation Audit",
        description: "Subject any AI-generated claim or market statistic to a forensic 4-step triangulation audit to detect circular reporting and verify primary data.",
        variables: [
          {
            name: "Target Claim to Audit",
            label: "Controversial Claim",
            options: ["'AI Coding Assistants Increase Developer Output by 55%'", "'80% of Enterprise RAG Systems Fail Security Audits'", "'GPU Server Utilization Averages Under 20% in Corporate VPCs'"],
            default: "'AI Coding Assistants Increase Developer Output by 55%'"
          },
          {
            name: "Suspected Failure Mode",
            label: "Auditing Focus",
            options: ["Circular Syndication between Tech PR Blogs", "Mismatched Methodology (Controlled Lab vs Real Production)", "Outdated Pre-2024 Benchmark Data"],
            default: "Mismatched Methodology (Controlled Lab vs Real Production)"
          },
          {
            name: "Verification Benchmark",
            label: "Primary Ground Truth",
            options: ["Peer-Reviewed Empirical Study with Controlled Groups", "Audited Financial 10-K Filings & Earnings Calls", "Public Anonymized GitHub Telemetry / Git Logs"],
            default: "Peer-Reviewed Empirical Study with Controlled Groups"
          }
        ],
        template: `# Forensic Source Triangulation & Claim Audit
Claim Under Investigation: [Target Claim to Audit]
Suspected Bias / Trap: [Suspected Failure Mode]
Ground Truth Benchmark: [Verification Benchmark]

Act as an Elite Fact-Checking Director and Forensic Research Auditor.
Execute a forensic investigation into this claim across Perplexity and Consensus:
1. Primary Source Provenance Search: Deconstruct the exact origin of this statistic (who first measured it, what year, what sample size).
2. Circular Reporting Audit: Identify whether popular blogs are quoting each other in a closed loop.
3. Methodological Stress-Test: Compare the lab methodology against real-world production conditions to highlight limitations.
4. Definitive Verdict & Calibrated Restatement: Provide the mathematically accurate, nuance-qualified restatement of the claim with verified primary DOI/SEC citations.`,
        expectedOutput: `### Forensic Fact-Checking Audit: [Target Claim to Audit]

#### 1. Primary Source Provenance Trace
- **Original Study**: Traced back to the 2022 GitHub/MIT Sloan/Microsoft Research working paper (*Peng et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot"*).
- **Original Methodology**: Controlled trial with $N=95$ professional developers tasked with implementing an HTTP server in JavaScript.
- **True Finding**: The treatment group completed the task in 71 minutes versus 161 minutes for the control group ($55.8\%$ faster completion time on a greenfield benchmark task).

#### 2. Circular Reporting & Distortion Loop
- **The Media Distortion**: Secondary tech blogs transformed *"55% faster completion time on a toy greenfield web server task"* into *"Software engineers write 55% more code"* and eventually *"Developers are 55% more productive overall."*
- **Echo Chamber**: Over 40 enterprise vendor whitepapers cite a single 2023 Forbes article that cited a secondary blog, completely omitting the original paper's explicit boundary conditions.

#### 3. Methodological Limitations ([Suspected Failure Mode])
1. **Greenfield vs. Legacy Code**: The 55% speedup applied strictly to writing new code from scratch; it did not measure reading legacy codebases, debugging complex distributed systems, or code review.
2. **Quality & Security Flaws**: Subsequent peer-reviewed studies (e.g. Stanford/Cornell 2024) found AI-generated code frequently contained higher rates of security vulnerabilities that required longer human review cycles.

#### 4. Calibrated Truth Restatement
\`\`\`text
"In controlled greenfield coding experiments, developers completed isolated routine programming tasks 55% faster using AI autocomplete. However, empirical industry studies measuring end-to-end pull request cycle times across enterprise codebases observe average velocity gains between 15% and 26%, heavily offset by increased code review overhead."
\`\`\`
*Verified Citations: arXiv:2302.06590 [cs.SE], ACM Transactions on Computer-Human Interaction.*`
      },
      conceptGuide: {
        title: "Circular Reporting Loops & Primary Provenance Tracing",
        overview: "In information theory, circular reporting occurs when source A publishes information, source B republishes it, and source A cites source B as independent confirmation. Large language models are highly susceptible to circular reporting because high-frequency internet repetition increases probabilistic token confidence. Forensic research requires tracing factual claims backward through the citation chain until reaching the primary provenance document (the original researcher who gathered the data). If no primary document exists, the claim must be discarded as unverified hearsay.",
        keyPoints: [
          "**Primary Provenance Requirement:** Never accept a claim without identifying who conducted the original empirical measurement.",
          "**Contextual Dilution:** Watch out for qualifiers that were stripped as a study was summarized across multiple blogs.",
          "**Consensus Aggregation:** Use Consensus.app to evaluate the broader scientific consensus rather than cherry-picking an outlier study."
        ]
      },
      learning: {
        resources: [
          {
            title: "Consensus.app: Search Engine for Scientific Research",
            url: "https://consensus.app",
            type: "Official Tool"
          },
          {
            title: "Elicit Official Guide: Systematic Literature Reviews",
            url: "https://elicit.com",
            type: "Official Docs"
          },
          {
            title: "Nature: How to Spot Methodological Flaws in Scientific Claims",
            url: "https://www.nature.com",
            type: "Academic Standard"
          },
          {
            title: "Perplexity Citations & Verification Guide",
            url: "https://www.perplexity.ai/hub/faq/how-do-citations-work",
            type: "Official Docs"
          }
        ]
      }
    },

    // Node 5
    {
      id: "step-5",
      stepNumber: 5,
      phaseId: "phase-3",
      title: "Building Persistent Perplexity Spaces & Custom System Instructions",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Combine uploaded internal PDFs, CSVs, and financial reports with live web search inside a team-shared Space governed by strict output formatting rules.",
      description: "Conducting ad-hoc research in blank chat threads leads to repetitive prompting, lost context, and inconsistent formatting across team members. Every new thread forces you to re-explain your company's strategic priorities, target customer ICP, preferred tone of voice, and forbidden sources. Perplexity Spaces provides persistent, collaborative research workspaces that bridge internal documents with real-time web search.\n\nInside a Perplexity Space, creators can upload internal proprietary documentation—such as product roadmaps, competitor battlecards, customer interview transcripts, or financial CSV models—and lock in persistent System Instructions. Every query submitted inside that Space automatically respects your guidelines (e.g. 'Always structure findings as executive memos with bull/bear investment theses, reject un-audited press releases, and output citations in Chicago Manual of Style'). Furthermore, Spaces can be shared across an entire engineering or strategy team, turning individual research workflows into a collective institutional knowledge base.",
      playbook: {
        setup: "In the Perplexity left sidebar, click 'Spaces' and select 'Create Space'. Name your space (e.g., 'Competitor Intelligence Hub' or 'Vulnerability Research Lab').",
        execute: "Set the Default Model to 'Claude 3.7 Sonnet' or 'o3-mini'. In 'System Instructions', define your persistent persona, analytical standards, and required output structure. In the 'Files' tab, upload internal PDFs, pitch decks, and financial spreadsheets. Invite your team members via email or shareable link. Submit a query inside the Space: 'Analyze Acme Corp's recent product launch and compare their pricing directly against our internal pricing tier table in uploaded file `Q3_Pricing_Matrix.pdf`.'",
        verify: "Confirm that Perplexity seamlessly blends data from your private uploaded PDF with live web search results, and formats the final response according to your persistent system instructions."
      },
      tools: [
        {
          name: "Perplexity Spaces",
          type: "Persistent Knowledge Workspaces",
          url: "https://www.perplexity.ai/hub/faq/what-are-spaces",
          description: "Collaborative research workspaces combining uploaded internal files, persistent system prompts, custom AI models, and real-time web search.",
          bestFor: "Team research hubs, competitor tracking & custom AI personas"
        },
        {
          name: "Notion",
          type: "Team Knowledge Base",
          url: "https://www.notion.so",
          description: "Collaborative workspace used to store synthesized Perplexity research reports, company wikis, and strategic battlecards.",
          bestFor: "Organizing synthesized research, team wikis & project docs"
        },
        {
          name: "Claude Projects",
          type: "Long-Context Workspace",
          url: "https://www.anthropic.com/claude",
          description: "Anthropic's persistent workspace environment supporting 200k-token project knowledge and customized system prompts.",
          bestFor: "Deep document synthesis, code analysis & persistent project memory"
        }
      ],
      callouts: {
        mistake: "Uploading unsearchable scanned image PDFs without running OCR (Optical Character Recognition) first, making the internal document unreadable to the RAG vector search engine.",
        proTip: "Use Perplexity Spaces to create an automated 'Executive Briefing Room' where team members can ask any question about company policies or market competitors with guaranteed verified answers.",
        mistakes: [
          "Leaving System Instructions blank, forcing team members to repeatedly type formatting and persona rules in every single chat.",
          "Uploading massive 500-page unstructured documents when modular 10-page summaries provide far cleaner RAG retrieval chunks.",
          "Sharing confidential internal customer PII in public or unencrypted workspaces without verifying enterprise security controls."
        ],
        proTips: [
          "Instruct your Space System Prompt: 'Always compare web findings against uploaded internal file [XYZ] and highlight any discrepancies.'",
          "Lock the default AI model in your Space settings to Claude 3.7 Sonnet for superior literary prose and executive synthesis.",
          "Use the 'Pin to Sidebar' feature for high-frequency project spaces so team members can access them in one click."
        ]
      },
      promptLab: {
        title: "Perplexity Space System Instructions & RAG Orchestration Prompt",
        description: "Architect a comprehensive persistent System Prompt for Perplexity Spaces that enforces strict analytical formatting and cross-references uploaded files.",
        variables: [
          {
            name: "Space Purpose",
            label: "Workspace Function",
            options: ["M&A Due Diligence & Valuation Hub", "Cybersecurity Threat & Vulnerability Tracker", "B2B SaaS Competitive Intelligence Engine"],
            default: "B2B SaaS Competitive Intelligence Engine"
          },
          {
            name: "Tone & Format Standard",
            label: "Output Archetype",
            options: ["Executive Memo with Bull/Bear Thesis & Decision Matrix", "Rigorous Engineering Post-Mortem with Root-Cause Analysis", "Management Consulting Presentation Slide Outlines"],
            default: "Executive Memo with Bull/Bear Thesis & Decision Matrix"
          },
          {
            name: "Internal Data Coupling",
            label: "Uploaded Knowledge Asset",
            options: ["Internal Q3 Pricing Tiers & Feature Matrix (PDF)", "Confidential Customer Churn Exit Interviews (CSV)", "Enterprise Architecture VPC Security Standards (Markdown)"],
            default: "Internal Q3 Pricing Tiers & Feature Matrix (PDF)"
          }
        ],
        template: `# Perplexity Space System Instructions Specification
Workspace Title: [Space Purpose]
Output Archetype: [Tone & Format Standard]
Internal Asset Reference: [Internal Data Coupling]

Act as an Enterprise Knowledge Management Architect and Lead Research Strategist.
Draft the comprehensive System Instructions to paste into Perplexity Space Settings:
1. Role & Identity Directive: Define the persona, analytical posture, and intellectual rigor.
2. Dual-RAG Synthesis Rules: How to cross-reference live web search findings against [Internal Data Coupling].
3. Mandatory Output Formatting: Enforce the structure of [Tone & Format Standard] with headers, tables, and footnotes.
4. Negative Operational Guardrails: Explicit instructions on what sources to ban and how to declare unverified claims.`,
        expectedOutput: `### Perplexity Space System Instructions: [Space Purpose]

Paste the following into *Perplexity Space Settings → System Instructions*:

\`\`\`markdown
You are the Lead Competitive Intelligence Strategist for our enterprise team. Your mission is to provide rigorous, unvarnished, data-backed analysis on competitors, market pricing, and technical feature releases.

OPERATIONAL INSTRUCTIONS:

1. DUAL-RAG SYNTHESIS:
   - For every competitive inquiry, consult both real-time web search and our uploaded internal reference files (specifically [Internal Data Coupling]).
   - Explicitly compare competitor moves against our internal baseline. If a competitor offers a feature we lack, highlight the competitive gap immediately.

2. ANALYTICAL POSTURE:
   - Deliver findings in the format of an [Tone & Format Standard].
   - Reject marketing fluff. Distinguish sharply between publicly released production features versus vaporware press announcements.
   - For every claim, provide an interactive hyperlinked footnote.

3. MANDATORY RESPONSE SKELETON:
   - **Executive Summary**: 2 sentences on the strategic takeaway.
   - **Competitor Action vs. Internal Baseline**: Comparison table contrasting competitor offering against [Internal Data Coupling].
   - **Strategic Bull Case**: Why this competitor move might succeed.
   - **Strategic Bear Case**: Why this move might fail or face headwinds.
   - **Recommended Counter-Action**: Concrete next step for our product/sales leadership.

4. NEGATIVE GUARDRAILS:
   - Never cite unverified social media rumors or sponsored affiliate review sites (G2/Capterra sponsored badges).
   - If pricing is custom/undisclosed, state "Custom Enterprise Quote Required" rather than fabricating estimates.
\`\`\``
      },
      conceptGuide: {
        title: "Hybrid Retrieval: Private Domain Knowledge Meets Live Web",
        overview: "Enterprise research traditionally suffered from a painful dichotomy: internal search tools (Confluence, Notion) knew everything about company plans but nothing about the outside world, while web search engines knew everything about the public internet but zero context about internal strategy. Perplexity Spaces implements hybrid vector retrieval: it constructs an ensemble RAG index that queries private uploaded documents and public web embeddings in parallel, joining them inside the LLM context window to deliver contextualized competitive intelligence.",
        keyPoints: [
          "**Hybrid Vector Search:** Simultaneously queries private internal documents and the live public internet.",
          "**Persistent System Prompts:** Standardizes analytical frameworks across distributed enterprise teams.",
          "**Context Continuity:** Preserves research memory across hundreds of shared team queries without re-prompting."
        ]
      },
      learning: {
        resources: [
          {
            title: "Perplexity Hub: Comprehensive Guide to Perplexity Spaces",
            url: "https://www.perplexity.ai/hub/faq/what-are-spaces",
            type: "Official Docs"
          },
          {
            title: "Notion AI & Team Knowledge Management Best Practices",
            url: "https://www.notion.so/help/guides",
            type: "Knowledge Management Guide"
          },
          {
            title: "Anthropic Claude Projects & Long-Context Architecture",
            url: "https://docs.anthropic.com/en/docs/build-with-claude/projects",
            type: "Official Docs"
          },
          {
            title: "O'Reilly: Building Enterprise Retrieval-Augmented Generation Systems",
            url: "https://www.oreilly.com",
            type: "Engineering Book"
          }
        ]
      }
    },

    // Node 6
    {
      id: "step-6",
      stepNumber: 6,
      phaseId: "phase-3",
      title: "Multi-Document Synthesis & Audio Overviews with NotebookLM",
      timeEstimate: "2.5 hrs",
      difficulty: "Intermediate",
      summary: "Ground research strictly across 50+ uploaded PDFs/videos with inline passage citations, mind-map generation, and two-host audio briefings.",
      description: "When synthesizing vast collections of primary literature—such as 40 medical research PDFs, an entire 500-page legal trial transcript, or 10 hours of recorded technical earnings calls—open web search engines struggle because they prioritize the external web rather than your curated corpus. Furthermore, standard LLMs hallucinate when asked to synthesize across dozens of dense documents simultaneously.\n\nGoogle NotebookLM delivers an elite, zero-hallucination research environment powered by Gemini 1.5 Pro's 2-million-token context window. NotebookLM allows researchers to upload up to 50 diverse source files (PDFs, Google Docs, text files, YouTube video URLs, and copied text) and locks the AI to a strict 'Source-Grounded' policy: the AI will refuse to answer using external training knowledge and will only synthesize information explicitly contained in your uploaded files, complete with clickable inline citation numbers that highlight the exact paragraph in the source PDF. Furthermore, NotebookLM's 'Audio Overview' feature generates a dynamic, photorealistic 15-minute two-host podcast deep-dive discussing your research corpus with natural human banter.",
      playbook: {
        setup: "Open Google NotebookLM (notebooklm.google.com). Create a new notebook titled 'Literature Corpus Deep-Dive'.",
        execute: "Click 'Add Sources' and upload up to 30 research PDFs, technical whitepapers, or YouTube video links. Wait for NotebookLM to parse and index the corpus. In the chat interface, query: 'Synthesize the core points of disagreement between Source 3 and Source 12 regarding battery thermal runaway mitigation.' Click the resulting inline citation numbers to verify that the viewer highlights the exact source sentence. In the Notebook Guide panel, click 'Generate Audio Overview'.",
        verify: "Listen to the generated two-host Audio Overview: confirm that the synthetic hosts banter naturally about the core findings, highlight nuances without hallucinating external facts, and download the audio overview as an MP3 for on-the-go review."
      },
      tools: [
        {
          name: "Google NotebookLM",
          type: "Source-Grounded Research Notebook",
          url: "https://notebooklm.google.com",
          description: "Personalized AI research assistant that grounds synthesis strictly in your uploaded documents with inline citations and podcast audio generation.",
          bestFor: "Zero-hallucination document synthesis, inline citation audits & audio deep-dives"
        },
        {
          name: "Elicit",
          type: "Automated Literature Review",
          url: "https://elicit.com",
          description: "Research tool that reads collections of academic papers and extracts structured findings, sample sizes, and empirical conclusions.",
          bestFor: "Extracting comparative data tables from multi-paper academic corpora"
        },
        {
          name: "Zotero",
          type: "Open-Source Reference Manager",
          url: "https://www.zotero.org",
          description: "Industry-standard reference and bibliography manager for organizing research PDFs, extracting metadata, and exporting BibTeX libraries.",
          bestFor: "Organizing PDF collections, metadata tagging & bibliography management"
        }
      ],
      callouts: {
        mistake: "Assuming NotebookLM searches the live internet; NotebookLM is strictly source-grounded and only knows what is inside your uploaded documents.",
        proTip: "Paste YouTube video URLs directly into NotebookLM; it ingests the entire video transcript and allows you to cross-examine 5 conference presentations simultaneously.",
        mistakes: [
          "Uploading locked or encrypted PDFs, which prevents NotebookLM from parsing document text layers.",
          "Overloading a notebook with irrelevant documents, diluting retrieval relevance across the target topic.",
          "Treating the generated Audio Overview podcast as definitive legal or medical advice without verifying the underlying written citations."
        ],
        proTips: [
          "Use the 'Customize Audio Overview' button to instruct the podcast hosts: 'Focus heavily on the financial implications of chapter 4 for technical executives.'",
          "Click on any citation pill `[1]` inside NotebookLM to open the source document and jump directly to the highlighted original text passage.",
          "Combine Perplexity Deep Research with NotebookLM: download the 20 PDFs found by Perplexity, upload them into NotebookLM, and interrogate the combined corpus."
        ]
      },
      promptLab: {
        title: "NotebookLM Source-Grounded Inquiry & Audio Directing Blueprint",
        description: "Formulate rigorous source-grounded synthesis queries and customize two-host podcast Audio Overview parameters in Google NotebookLM.",
        variables: [
          {
            name: "Uploaded Corpus Type",
            label: "Research Document Stack",
            options: ["Clinical Trial Protocols & FDA Approval Filings", "Venture Capital Due Diligence & Financial Audits", "Open-Source AI Technical Whitepapers & Preprints"],
            default: "Clinical Trial Protocols & FDA Approval Filings"
          },
          {
            name: "Synthesis Objective",
            label: "Analytical Goal",
            options: ["Cross-Source Contradiction Matrix & Adverse Event Audit", "Comparative Cost-Benefit Breakdown & Margin Analysis", "Chronological Technological Breakthrough Timeline"],
            default: "Cross-Source Contradiction Matrix & Adverse Event Audit"
          },
          {
            name: "Audio Overview Focus",
            label: "Podcast Directorial Tone",
            options: ["Fast-Paced Investigative Journalism Debate", "Academic Deep-Dive for Technical Specialists", "Executive Boardroom Briefing with Strategic Action Points"],
            default: "Academic Deep-Dive for Technical Specialists"
          }
        ],
        template: `# NotebookLM Source-Grounded Synthesis Protocol
Corpus: [Uploaded Corpus Type]
Analytical Goal: [Synthesis Objective]
Podcast Style: [Audio Overview Focus]

Act as a Principal Research Director and Scientific Knowledge Architect.
Provide the complete NotebookLM operational specification:
1. In-Notebook Grounded Query: Formulate a multi-document synthesis prompt enforcing zero external knowledge and mandatory passage citations.
2. Cross-Source Contradiction Prompt: Specific prompt designed to surface factual discrepancies across different uploaded PDFs.
3. Audio Overview Customization Prompt: Directorial instructions for the two AI podcast hosts to govern their conversational depth and tone.
4. Citation Audit Protocol: How to verify that generated footnotes map 1:1 with source text.`,
        expectedOutput: `### NotebookLM Synthesis Specification: [Uploaded Corpus Type]

#### 1. In-Notebook Grounded Inquiry Prompt
\`\`\`text
Analyze all uploaded documents in this notebook to execute a: [Synthesis Objective].

STRICT SOURCE-GROUNDING RULES:
1. Ground every statement strictly in the uploaded files. Do not extrapolate using external training data.
2. For every quantitative claim, provide the inline citation number linking to the exact source page.
3. Compare the findings between early-phase documents and late-phase reports.
4. Construct a comparative table listing: Source Title, Metric Name, Reported Value, Confidence Interval, and Citation Anchor.
\`\`\`

#### 2. Cross-Source Contradiction Probe
\`\`\`text
Scan all sources and identify any points of direct disagreement, conflicting statistics, or altered reporting methodologies between the authors. Where Source A asserts one outcome and Source B reports another, juxtapose their statements side-by-side with exact citations.
\`\`\`

#### 3. Audio Overview Customization Directives
Paste into *Notebook Guide → Customize Audio Overview*:
\`\`\`text
Adopt an [Audio Overview Focus] dynamic between the two hosts.
- Speaker 1 acts as the rigorous, data-driven technical analyst; Speaker 2 acts as the skeptical investigator questioning methodology.
- Focus the conversation heavily on [Synthesis Objective].
- Explicitly discuss the discrepancies between the trials, maintaining a natural conversational banter with spontaneous pauses and intellectual debates.
- Conclude with a clear takeaway on clinical reproducibility.
\`\`\`

#### 4. Citation Verification Checklist
- [ ] Click citation pill \[1\] and confirm the source viewer jumps to the exact highlighted paragraph.
- [ ] Verify that the AI did not confuse correlation with causation in the cited text.
- [ ] Export the chat synthesis as a pinned Note within the notebook.`
      },
      conceptGuide: {
        title: "Source Grounding vs. Open-Domain Parametric Memory",
        overview: "Standard LLMs generate text by sampling from parametric memory—the billions of static weights learned during pre-training. This parametric memory is prone to hallucination because the model generates what sounds statistically plausible rather than what is provably factual. NotebookLM utilizes strict non-parametric source grounding: the model's generation is constrained entirely to the in-context tokens of the user's uploaded documents. If a fact cannot be supported by a passage in the uploaded corpus, the generation policy enforces explicit refusal.",
        keyPoints: [
          "**Non-Parametric Grounding:** Restricts LLM generation strictly to user-provided documents, eliminating speculative hallucinations.",
          "**Clickable Passage Anchoring:** Every claim is tied to an explicit citation that highlights the exact original source sentence.",
          "**Conversational Audio Synthesis:** Translates complex document corpora into natural two-host podcasts for auditory comprehension."
        ]
      },
      learning: {
        resources: [
          {
            title: "Google NotebookLM Official User Guide & Overview",
            url: "https://notebooklm.google.com",
            type: "Official Docs"
          },
          {
            title: "Google Blog: Generating Audio Overviews in NotebookLM",
            url: "https://blog.google/technology/ai/notebooklm-audio-overviews/",
            type: "Official Feature Guide"
          },
          {
            title: "Zotero Reference Management Documentation",
            url: "https://www.zotero.org/support/",
            type: "Official Docs"
          },
          {
            title: "arXiv: In-Context Grounding & Hallucination Mitigation in Large Context LLMs",
            url: "https://arxiv.org/abs/2307.03172",
            type: "Academic Research"
          }
        ]
      }
    },

    // Node 7
    {
      id: "step-7",
      stepNumber: 7,
      phaseId: "phase-4",
      title: "Integrating Real-Time Web Search APIs into Custom AI Apps",
      timeEstimate: "3 hrs",
      difficulty: "Advanced",
      summary: "Give your own LLM apps and agents live, citation-backed internet access via REST API with domain allowlists/blocklists and JSON outputs.",
      description: "While using web interfaces like Perplexity or Google is ideal for human research, modern software engineering requires embedding live, citation-backed web intelligence directly into custom applications, autonomous LangGraph agents, or enterprise SaaS backends. Standard general-purpose search APIs (like Google Custom Search or Bing Web Search) return messy HTML snippets, sponsored advertisements, and fragmented text that breaks LLM context windows.\n\nPurpose-built AI search APIs—such as the Perplexity Sonar API, Tavily Search API, and Exa.ai—are engineered specifically for autonomous agent consumption. These APIs return clean, parsed Markdown, stripped of navigation menus and ads, complete with verified domain allowlists/blocklists, search depth controls, and structured JSON citation arrays. By integrating a single REST call to `api.perplexity.ai` or `api.tavily.com`, developers can endow any LLM application with real-time internet awareness, dynamic fact verification, and sub-second citation generation.",
      playbook: {
        setup: "Obtain an API key from Perplexity (`api.perplexity.ai`) or Tavily (`app.tavily.com`). Install the official client: `npm install tavily` (or `pip install tavily-python`).",
        execute: "Write a server-side TypeScript or Python function that queries the search API. Configure the search parameters: set `search_depth: 'advanced'`, restrict domains to trusted authorities (`include_domains: ['sec.gov', 'reuters.com', 'bloomberg.com']`), and request raw content extraction. Pass the returned clean context chunks directly into your application's LLM prompt alongside citation markers.",
        verify: "Execute a test query in your backend terminal: verify that the API returns clean, parsed markdown text with zero HTML junk, sub-800ms latency, and a structured array of source URLs with publish timestamps."
      },
      tools: [
        {
          name: "Perplexity Sonar API",
          type: "Online LLM Search API",
          url: "https://docs.perplexity.ai",
          description: "REST API powering search-grounded LLM inference (`sonar` and `sonar-pro`) with real-time citations and domain filters.",
          bestFor: "All-in-one search + LLM synthesis with automatic citation generation"
        },
        {
          name: "Tavily Search API",
          type: "Agentic Web Search API",
          url: "https://tavily.com",
          description: "Search engine built specifically for AI agents, delivering fast, factual, and ad-free web content extraction in JSON.",
          bestFor: "Autonomous LangChain/CrewAI agents, domain allowlisting & raw context"
        },
        {
          name: "Exa API",
          type: "Neural Search & Embeddings API",
          url: "https://exa.ai",
          description: "Embeddings-based search API allowing agents to find web pages based on semantic meaning and crawl clean markdown text.",
          bestFor: "Semantic similarity search, company discovery & academic crawl"
        }
      ],
      callouts: {
        mistake: "Using standard Google/Bing search APIs and attempting to scrape the resulting raw HTML with BeautifulSoup; web scrapers frequently get blocked by Cloudflare and waste tokens on navigation menus.",
        proTip: "Use Tavily's `include_domains` parameter to strictly restrict agent search to authoritative documentation sites (e.g., `docs.aws.amazon.com`, `kubernetes.io`) when building developer coding assistants.",
        mistakes: [
          "Sending un-sanitized user input directly to the search API without validating query length, risking API rate-limiting.",
          "Failing to cache search API results for identical queries, leading to unnecessary API credit expenditure.",
          "Ignoring the `published_date` field in API responses, allowing outdated articles to overwrite fresh news data."
        ],
        proTips: [
          "The Perplexity `sonar-pro` model features a 200k-token context window capable of ingesting and synthesizing dozens of live web citations in a single API call.",
          "Set `max_results: 5` in Tavily to balance retrieval accuracy with LLM context window cost efficiency.",
          "Implement an automatic retry loop with exponential backoff to handle transient network hiccups during high-concurrency search spikes."
        ]
      },
      promptLab: {
        title: "Perplexity Sonar & Tavily Search API Backend Integration",
        description: "Generate production-ready TypeScript/Node.js backend code integrating Perplexity Sonar and Tavily Search APIs with structured JSON output.",
        variables: [
          {
            name: "API Provider",
            label: "Search API Engine",
            options: ["Perplexity Sonar API (sonar-pro)", "Tavily Search API (Agent-Optimized)", "Exa Neural Search API"],
            default: "Perplexity Sonar API (sonar-pro)"
          },
          {
            name: "Application Use Case",
            label: "Agent Function",
            options: ["Real-Time Financial Valuation & Earnings Checker", "Automated Technical Documentation Assistant", "Breaking News Fact-Checking Bot"],
            default: "Real-Time Financial Valuation & Earnings Checker"
          },
          {
            name: "Domain Filtering Rule",
            label: "Allowlist Strategy",
            options: ["Strict Financial Authority (sec.gov, bloomberg.com, reuters.com)", "Official Developer Docs (github.com, stackoverflow.com, docs.*)", "Broad Web with SEO Blog Blacklist"],
            default: "Strict Financial Authority (sec.gov, bloomberg.com, reuters.com)"
          }
        ],
        template: `# Real-Time Search API Integration Blueprint
Provider: [API Provider]
Application: [Application Use Case]
Domain Filter: [Domain Filtering Rule]

Act as a Principal Staff Backend Engineer and Agent Systems Architect.
Generate the complete production implementation:
1. Production TypeScript Service: Complete Node.js service using fetch/SDK handling authentication, domain filtering, and timeout configuration.
2. Search Parameter Calibration: Exact JSON payload configuring model, search depth, temperature, and citation options.
3. Citation Parsing & Data Normalization: Code that parses raw response citations into structured frontend-ready objects ({ text, citations: [{ title, url, snippet }] }).
4. Error Handling & In-Memory Cache: Redis or in-memory TTL caching to prevent duplicate API spend.`,
        expectedOutput: `### Production Implementation: [API Provider] Integration

#### 1. TypeScript Backend Service (\`perplexitySearch.ts\`)
\`\`\`typescript
import { z } from "zod"

interface SearchCitation {
  index: number
  url: string
}

interface SearchResponse {
  answer: string
  citations: SearchCitation[]
}

export class PerplexitySearchService {
  private apiKey: string
  private cache = new Map<string, { data: SearchResponse; expiry: number }>()
  private TTL_MS = 1000 * 60 * 15 // 15-minute cache

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  public async searchFinancialIntelligence(query: string): Promise<SearchResponse> {
    const cacheKey = query.trim().toLowerCase()
    const cached = this.cache.get(cacheKey)
    if (cached && cached.expiry > Date.now()) {
      return cached.data
    }

    const payload = {
      model: "sonar-pro",
      messages: [
        {
          role: "system",
          content: "You are an enterprise financial intelligence assistant. Provide verified quantitative data with exact citation footnotes. Restrict analysis strictly to primary regulatory filings and trusted authorities."
        },
        {
          role: "user",
          content: query
        }
      ],
      search_domain_filter: ["sec.gov", "bloomberg.com", "reuters.com", "wsj.com"],
      temperature: 0.1, // Low temperature for maximum factual precision
      max_tokens: 1500,
      return_citations: true
    }

    const response = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": \`Bearer \${this.apiKey}\`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      throw new Error(\`Perplexity API error: \${response.status} \${response.statusText}\`)
    }

    const json = await response.json()
    const answer = json.choices[0].message.content
    const rawCitations: string[] = json.citations || []

    const formattedCitations: SearchCitation[] = rawCitations.map((url, idx) => ({
      index: idx + 1,
      url
    }))

    const result: SearchResponse = {
      answer,
      citations: formattedCitations
    }

    // Cache the result
    this.cache.set(cacheKey, { data: result, expiry: Date.now() + this.TTL_MS })
    return result
  }
}
\`\`\`

#### 2. Usage in Express / Next.js API Route
\`\`\`typescript
const searchService = new PerplexitySearchService(process.env.PERPLEXITY_API_KEY!)

export async function POST(req: Request) {
  const { query } = await req.json()
  const result = await searchService.searchFinancialIntelligence(query)
  return Response.json(result)
}
\`\`\``
      },
      conceptGuide: {
        title: "Agentic Search APIs vs. Legacy Document Scraping",
        overview: "Traditional search engines were built for human eyeballs: they return a list of blue links surrounded by sponsored ads and tracking scripts. When an autonomous AI agent attempts to use traditional search, developers must write fragile web scrapers that frequently break due to dynamic JavaScript rendering, cookie popups, and anti-bot Cloudflare challenges. AI-first search APIs (Perplexity Sonar, Tavily, Exa) treat the entire web as an embedding-indexed knowledge graph, returning ad-free markdown text and structured citation metadata engineered specifically for LLM context windows.",
        keyPoints: [
          "**Clean Markdown Extraction:** Strips HTML boilerplate, navigation bars, and cookie banners automatically.",
          "**Domain Isolation:** Restricts agent queries to trusted domains (`include_domains`) to eliminate hallucinations.",
          "**Integrated Inference:** Perplexity Sonar combines search retrieval and neural LLM synthesis into a single high-speed API call."
        ]
      },
      learning: {
        resources: [
          {
            title: "Perplexity Sonar API Official Documentation",
            url: "https://docs.perplexity.ai",
            type: "Official Docs"
          },
          {
            title: "Tavily Search API Documentation & Quickstart",
            url: "https://docs.tavily.com",
            type: "Official Docs"
          },
          {
            title: "Exa.ai API Reference & Search Endpoints",
            url: "https://docs.exa.ai/reference",
            type: "Official Docs"
          },
          {
            title: "LangChain Documentation: Tavily & Perplexity Integrations",
            url: "https://python.langchain.com/docs/integrations/tools/tavily_search/",
            type: "Developer Framework"
          }
        ]
      }
    },

    // Node 8
    {
      id: "step-8",
      stepNumber: 8,
      phaseId: "phase-4",
      title: "Automated Daily Market & Competitor Intelligence Pipelines",
      timeEstimate: "3 hrs",
      difficulty: "Advanced",
      summary: "Schedule automated morning research workflows that scan competitor changelogs, funding news, and industry papers and deliver an executive brief to Slack or Notion.",
      description: "Manual competitive research is an unsustainable time sink. Strategy teams waste dozens of hours each week manually checking competitor websites, scrolling LinkedIn feeds, scanning regulatory dockets, and reviewing tech press releases. Inevitably, critical updates slip through the cracks—such as a competitor quietly launching a major feature on their documentation site or filing a key patent.\n\nAutomating market intelligence transforms competitive research into a continuous, background telemetry pipeline. By combining scheduled automation platforms (n8n or Make.com) with the Perplexity Sonar API and web crawlers like Firecrawl, engineering teams can build fully autonomous daily intelligence engines. Every morning at 6:00 AM, the pipeline scans competitor changelog URLs, queries Perplexity for fresh regulatory filings and funding announcements from the past 24 hours, synthesizes the findings into an executive bulleted brief, and dispatches it directly to an internal Slack channel and Notion company wiki.",
      playbook: {
        setup: "Open n8n (or Make.com). Set up credentials for Perplexity API (or Tavily), Firecrawl, Slack Webhook, and Notion API.",
        execute: "Build the automated workflow: 1. Add a 'Schedule Trigger' node set to fire every weekday at 06:00 AM. 2. Add an HTTP Request node calling Perplexity Sonar API with a dynamic prompt: 'Summarize all major product updates, funding rounds, and executive hires announced in the past 24 hours for [Competitor List]. For each item, provide verified source links.' 3. Add a Firecrawl node to crawl competitor `/changelog` URLs for newly published markdown updates. 4. Aggregate the text into a clean executive format. 5. Post the summary to `#competitive-intel` via Slack Incoming Webhook and create a new database page in Notion.",
        verify: "Trigger a test execution of the n8n workflow: confirm the Perplexity API returns fresh 24-hour news, the Slack message delivers with rich markdown formatting and clickable citations, and a new structured page appears in your Notion intelligence database."
      },
      tools: [
        {
          name: "Perplexity API + n8n",
          type: "Automated Agent Pipeline",
          url: "https://n8n.io",
          description: "Workflow automation platform orchestrating scheduled triggers, API calls, LLM synthesis, and multi-app data synchronization.",
          bestFor: "Scheduled morning intelligence briefs, multi-step agent pipelines & Slack sync"
        },
        {
          name: "Firecrawl",
          type: "Web Scraper & Crawler for AI",
          url: "https://www.firecrawl.dev",
          description: "Turn any website into clean, LLM-ready markdown or structured data with a single API call, bypassing bot protections.",
          bestFor: "Crawling competitor changelogs, documentation & pricing pages"
        },
        {
          name: "Slack Webhooks",
          type: "Team Alerting & Messaging",
          url: "https://api.slack.com/messaging/webhooks",
          description: "Standard incoming webhook interface for broadcasting formatted markdown intelligence alerts and notifications to team channels.",
          bestFor: "Delivering daily executive briefs directly into team communication hubs"
        }
      ],
      callouts: {
        mistake: "Running open-ended daily queries without setting a strict 24-hour time boundary, causing the automated pipeline to repeat the same months-old news stories every single morning.",
        proTip: "Use Firecrawl's `/scrape` endpoint on competitor `/pricing` URLs to detect subtle stealth price adjustments before they are officially announced.",
        mistakes: [
          "Spamming company-wide Slack channels with verbose, 10-page uncurated text blocks; executive summaries must fit on a single mobile screen.",
          "Failing to handle empty news days; if no major competitor news occurred in 24 hours, the pipeline should output a concise 'All quiet, zero major updates' status.",
          "Hardcoding API keys directly inside automation nodes instead of using n8n's encrypted environment credentials manager."
        ],
        proTips: [
          "Include a 'Threat Level' tag (High, Medium, Informational) on each Slack alert so executives can prioritize reading.",
          "Store historical daily briefings in a structured Notion database with searchable tags (Funding, Product, Leadership, Pricing) for year-end strategy reviews.",
          "Add sentiment analysis to your competitor pipeline to track whether competitor social sentiment is trending positive or negative."
        ]
      },
      promptLab: {
        title: "Autonomous Daily Competitor Intelligence Pipeline Prompt",
        description: "Generate a scheduled 24-hour intelligence monitoring prompt that scans competitors and formats findings into an executive Slack Block Kit payload.",
        variables: [
          {
            name: "Monitored Industry",
            label: "Market Vertical",
            options: ["AI Developer Infrastructure & Vector Databases", "Enterprise Cyber Security & Identity Governance", "B2B SaaS FinTech & Automated Invoicing"],
            default: "AI Developer Infrastructure & Vector Databases"
          },
          {
            name: "Key Competitors",
            label: "Monitored Companies",
            options: ["Pinecone, Weaviate, Qdrant, Chroma", "Wiz, Palo Alto Networks, Okta, CrowdStrike", "Stripe, Ramp, Brex, Bill.com"],
            default: "Pinecone, Weaviate, Qdrant, Chroma"
          },
          {
            name: "Delivery Destination",
            label: "Notification Channel",
            options: ["Slack Executive Channel (#intel-daily)", "Notion Strategy Wiki Database Page", "Weekly Executive Email Digest"],
            default: "Slack Executive Channel (#intel-daily)"
          }
        ],
        template: `# Automated 24-Hour Competitive Intelligence Specification
Vertical: [Monitored Industry]
Competitors: [Key Competitors]
Delivery Target: [Delivery Destination]

Act as an Automated Competitive Intelligence Architect.
Generate the complete pipeline specification for n8n + Perplexity API:
1. Dynamic 24-Hour Perplexity Sonar Prompt: Prompt engineered to detect only news, releases, and funding from the last 24 hours.
2. Slack Block Kit Payload Blueprint: Formatted JSON structure presenting the brief with status emojis, competitor tags, and citation links.
3. Notion Database Schema: Multi-property schema (Date, Competitor, Category, Impact Score, Source URL) to store evergreen records.
4. Anomaly Alerting Rules: Conditions that trigger an urgent 'High Priority' alert (e.g. major pricing change or security breach).`,
        expectedOutput: `### Automated Competitive Intelligence Pipeline: [Monitored Industry]

#### 1. Dynamic Perplexity Sonar Prompt (Executed Daily at 06:00 UTC)
\`\`\`text
Analyze the last 24 hours of public announcements, changelogs, patent filings, executive hires, and funding news for: [Key Competitors].

STRICT RECENCY RULES:
- Only report events that transpired between yesterday at 06:00 UTC and today at 06:00 UTC.
- Ignore historical background information.
- If a competitor had zero material announcements in the last 24 hours, explicitly output "No new updates."

CATEGORIZATION:
For each detected update, assign one category: [PRODUCT LAUNCH | PRICING SHIFT | EXECUTIVE HIRE | SECURITY INCIDENT].
Include an Impact Score (Low / Medium / Critical) and the exact primary source URL.
\`\`\`

#### 2. Slack Block Kit Message Structure ([Delivery Destination])
\`\`\`json
{
  "blocks": [
    {
      "type": "header",
      "text": {
        "type": "plain_text",
        "text": "⚡ Daily Intelligence Brief: [Monitored Industry]",
        "emoji": true
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*Date:* 2026-10-24 | *Status:* 2 Material Updates Detected"
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*🚨 [PRODUCT LAUNCH] Qdrant v1.12 Released*\n• *Summary:* Introduced hybrid sparse-dense vector search with automated memory compression.\n• *Strategic Threat:* High — Directly targets our primary enterprise differentiator.\n• *Source:* <https://qdrant.tech/changelog|Official Release Notes>"
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*ℹ️ [PRICING SHIFT] Pinecone Serverless Pricing Update*\n• *Summary:* Reduced read unit costs by 18% for high-throughput enterprise tiers.\n• *Source:* <https://pinecone.io/pricing|Pricing Page>"
      }
    }
  ]
}
\`\`\`

#### 3. Notion Database Integration Schema
- **Database Title**: \`Competitive Intelligence Vault\`
- **Columns**:
  - \`Event Title\` (Title)
  - \`Competitor\` (Select: Pinecone, Weaviate, Qdrant, Chroma)
  - \`Category\` (Select: Product, Pricing, Leadership, Security)
  - \`Impact Score\` (Select: Low, Medium, Critical)
  - \`Date\` (Date: Automatically set to today's date)
  - \`Primary Source\` (URL)
  - \`Action Items\` (Rich Text)`
      },
      conceptGuide: {
        title: "Autonomous Market Telemetry & Zero-Friction Intelligence",
        overview: "Strategic advantage in high-velocity tech markets comes from reducing the time delay between an external event occurring (a competitor launching a product or changing prices) and your leadership team reacting. Traditional organizations operate on weekly or monthly review cadences. Automated market telemetry pipelines bridge external search APIs (Perplexity Sonar) and web crawlers (Firecrawl) directly into internal team communication channels (Slack, Notion), transforming strategic intelligence into continuous ambient background awareness.",
        keyPoints: [
          "**Continuous Market Telemetry:** Replaces tedious manual weekly research with automated 24-hour background pipelines.",
          "**Structured Push Alerts:** Delivers concise executive summaries directly into Slack rather than requiring employees to pull data.",
          "**Evergreen Corporate Memory:** Automatically logs competitor events into Notion databases for historical benchmarking."
        ]
      },
      learning: {
        resources: [
          {
            title: "n8n Official Documentation: Workflow Automation & Webhooks",
            url: "https://docs.n8n.io",
            type: "Official Docs"
          },
          {
            title: "Firecrawl Official Documentation: Web Crawling for LLMs",
            url: "https://docs.firecrawl.dev",
            type: "Official Docs"
          },
          {
            title: "Slack Block Kit Builder & Interactive Messaging Guide",
            url: "https://api.slack.com/block-kit",
            type: "Developer Platform"
          },
          {
            title: "Perplexity API Reference: Scheduled Search & Rate Limits",
            url: "https://docs.perplexity.ai",
            type: "Official Docs"
          }
        ]
      }
    }
  ]
};
