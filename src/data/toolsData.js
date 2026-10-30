// Curated AI Tools & Models dataset for useai.sh
// Extracted and deduplicated from roadmap steps and engineering workflows

export const toolsData = [
  // Core Coding & Design LLMs
  {
    id: 'claude-3-7-sonnet',
    name: 'Claude 3.7 Sonnet',
    pricing: 'Freemium',
    url: 'https://claude.ai',
    description: 'Exceptional at complex system prompt adherence, conversational script cadence, and deep architectural reasoning.',
    bestFor: 'Markdown PRD specs & spoken script cadence',
    workflows: ['AI Web Design Workflow', 'AI Full-Stack Coding', 'AI Video & Content Creation', 'AI Automation & Agents', 'AI Copywriting & SEO', 'AI UI/UX & Design Systems', 'AI WordPress & WooCommerce Builder', 'AI SaaS & Micro-App Launchpad', 'AI Mobile App Development', 'AI E-Commerce & Product Branding', 'AI Data Analytics & Business Intelligence', 'AI YouTube Faceless & Shorts Engine', 'AI Digital Marketing & Ad Funnels', 'AI Technical Writing & Docs Engineering', 'AI Cybersecurity & Code Auditing']
  },
  {
    id: 'chatgpt-o3-mini',
    name: 'ChatGPT o3-mini',
    pricing: 'Freemium',
    url: 'https://chatgpt.com',
    description: 'Advanced reasoning model for edge case detection, structural retention beats, and algorithmic backend logic.',
    bestFor: 'Edge case discovery & retention pacing',
    workflows: ['AI Web Design Workflow', 'AI Full-Stack Coding', 'AI Video & Content Creation', 'AI Automation & Agents', 'AI Copywriting & SEO', 'AI YouTube Faceless & Shorts Engine', 'AI Digital Marketing & Ad Funnels', 'AI Technical Writing & Docs Engineering']
  },
  {
    id: 'cursor-ide',
    name: 'Cursor IDE / Composer',
    pricing: 'Freemium',
    url: 'https://www.cursor.com',
    description: 'AI-native code editor with codebase indexing, multi-file Composer edits, and terminal command integration.',
    bestFor: 'Multi-file refactoring & codebase indexing',
    workflows: ['AI Web Design Workflow', 'AI Full-Stack Coding', 'AI Automation & Agents', 'AI UI/UX & Design Systems', 'AI WordPress & WooCommerce Builder', 'AI SaaS & Micro-App Launchpad', 'AI Mobile App Development', 'AI Data Analytics & Business Intelligence', 'AI Digital Marketing & Ad Funnels', 'AI Technical Writing & Docs Engineering', 'AI Cybersecurity & Code Auditing']
  },
  {
    id: 'v0-by-vercel',
    name: 'v0 by Vercel',
    pricing: 'Freemium',
    url: 'https://v0.dev',
    description: 'Generative UI system synthesizing production-ready React components with Tailwind CSS and Radix UI / shadcn.',
    bestFor: 'Atomic React + Tailwind UI components',
    workflows: ['AI Web Design Workflow', 'AI Full-Stack Coding', 'AI UI/UX & Design Systems', 'AI SaaS & Micro-App Launchpad', 'AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'figma-ai',
    name: 'Figma AI',
    pricing: 'Freemium',
    url: 'https://www.figma.com',
    description: 'Collaborative design canvas with generative wireframing, storyboard shot lists, and design token management.',
    bestFor: 'Design systems, storyboards & layout exploration',
    workflows: ['AI Web Design Workflow', 'AI Video & Content Creation', 'AI UI/UX & Design Systems', 'AI Mobile App Development', 'AI E-Commerce & Product Branding', 'AI YouTube Faceless & Shorts Engine', 'AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'relume-ai',
    name: 'Relume AI',
    pricing: 'Freemium',
    url: 'https://www.relume.io',
    description: 'AI site builder and component library for rapid wireframing and information architecture trees.',
    bestFor: 'Information architecture & wireframe trees',
    workflows: ['AI Web Design Workflow', 'AI UI/UX & Design Systems', 'AI WordPress & WooCommerce Builder']
  },
  {
    id: 'bolt-new',
    name: 'Bolt.new',
    pricing: 'Freemium',
    url: 'https://bolt.new',
    description: 'In-browser AI development sandbox and full-stack container environment for instant application scaffolding.',
    bestFor: 'Instant browser prototyping',
    workflows: ['AI Web Design Workflow', 'AI Full-Stack Coding']
  },
  {
    id: 'lovable',
    name: 'Lovable',
    pricing: 'Freemium',
    url: 'https://lovable.dev',
    description: 'Full-stack AI software engineer with live interactive previews, edge backends, and bidirectional GitHub sync.',
    bestFor: 'Live interactive full-page prototypes',
    workflows: ['AI Web Design Workflow', 'AI Full-Stack Coding']
  },

  // Video & Content Research / Strategy
  {
    id: 'perplexity',
    name: 'Perplexity',
    pricing: 'Freemium',
    url: 'https://www.perplexity.ai',
    description: 'Conversational AI research engine providing real-time web citations, competitor pain point mapping, and outlier data.',
    bestFor: 'Deep web citations & niche pain point mapping',
    workflows: ['AI Video & Content Creation', 'AI Copywriting & SEO', 'AI UI/UX & Design Systems', 'AI SaaS & Micro-App Launchpad', 'AI E-Commerce & Product Branding']
  },
  {
    id: 'vidiq',
    name: 'VidIQ',
    pricing: 'Freemium',
    url: 'https://vidiq.com',
    description: 'YouTube intelligence platform tracking view-velocity, search demand, keyword competition, and outlier video benchmarks.',
    bestFor: 'Outlier video discovery & keyword velocity',
    workflows: ['AI Video & Content Creation', 'AI YouTube Faceless & Shorts Engine']
  },
  {
    id: '1of10',
    name: '1of10',
    pricing: 'Paid',
    url: 'https://1of10.com',
    description: 'Specialized database identifying 10x view outlier videos across YouTube niches to reverse-engineer viral packaging.',
    bestFor: 'Packaging angle & viral premise discovery',
    workflows: ['AI Video & Content Creation', 'AI YouTube Faceless & Shorts Engine']
  },
  {
    id: 'notion',
    name: 'Notion',
    pricing: 'Freemium',
    url: 'https://www.notion.so',
    description: 'Connected workspace for two-column audio/visual script formatting, visual storyboarding, and automation SOP matrices.',
    bestFor: 'SOP documentation & workflow audit tracking',
    workflows: ['AI Video & Content Creation', 'AI Automation & Agents', 'AI SaaS & Micro-App Launchpad', 'AI E-Commerce & Product Branding', 'AI YouTube Faceless & Shorts Engine', 'AI Digital Marketing & Ad Funnels', 'AI Technical Writing & Docs Engineering']
  },

  // Voice, Avatars & Visual Synthesis
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    pricing: 'Freemium',
    url: 'https://elevenlabs.io',
    description: 'Industry-leading neural voice synthesis, emotional voice cloning, Conversational AI, and real-time audio API.',
    bestFor: 'Voice cloning, conversational AI & bespoke SFX',
    workflows: ['AI Video & Content Creation', 'AI Automation & Agents', 'AI Mobile App Development', 'AI YouTube Faceless & Shorts Engine', 'AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'adobe-podcast-enhance',
    name: 'Adobe Podcast Enhance',
    pricing: 'Free',
    url: 'https://podcast.adobe.com/enhance',
    description: 'AI-powered audio cleanup removing background noise, room reverberation, and vocal hiss to deliver studio broadcast warmth.',
    bestFor: 'Vocal room reverb removal & broadcast warmth',
    workflows: ['AI Video & Content Creation', 'AI YouTube Faceless & Shorts Engine']
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    pricing: 'Paid',
    url: 'https://www.midjourney.com',
    description: 'Premier generative image engine for consistent style frames (--sref), character locks (--cref), and high-CTR thumbnails.',
    bestFor: 'Style frames, consistent characters & thumbnails',
    workflows: ['AI Web Design Workflow', 'AI Video & Content Creation', 'AI UI/UX & Design Systems', 'AI E-Commerce & Product Branding', 'AI YouTube Faceless & Shorts Engine', 'AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'flux',
    name: 'Flux',
    pricing: 'Freemium',
    url: 'https://blackforestlabs.ai',
    description: 'Open-weights visual model by Black Forest Labs for photorealistic skin textures, typography rendering, and style consistency.',
    bestFor: 'High-realism skin textures & legible on-screen signage',
    workflows: ['AI Video & Content Creation', 'AI YouTube Faceless & Shorts Engine']
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo AI',
    pricing: 'Freemium',
    url: 'https://leonardo.ai',
    description: 'Creative production platform featuring custom LoRA fine-tuning, canvas inpainting, and persistent visual style frames.',
    bestFor: 'Custom LoRA training & canvas inpainting',
    workflows: ['AI Video & Content Creation', 'AI YouTube Faceless & Shorts Engine']
  },
  {
    id: 'runway-gen3',
    name: 'Runway Gen-3 Alpha',
    pricing: 'Paid',
    url: 'https://runwayml.com',
    description: 'High-fidelity video diffusion model with precise camera motion brushes, Director Mode, and realistic physical motion.',
    bestFor: 'Controlled camera motions & high-fidelity physics',
    workflows: ['AI Video & Content Creation', 'AI YouTube Faceless & Shorts Engine']
  },
  {
    id: 'kling-ai',
    name: 'Kling AI',
    pricing: 'Freemium',
    url: 'https://klingai.com',
    description: 'Next-generation video generation engine capable of complex human movement, motion brushes, and extended 10-second clips.',
    bestFor: 'Complex subject movement & extended 10s clips',
    workflows: ['AI Video & Content Creation', 'AI YouTube Faceless & Shorts Engine']
  },
  {
    id: 'luma-dream-machine',
    name: 'Luma Dream Machine',
    pricing: 'Freemium',
    url: 'https://lumalabs.ai/dream-machine',
    description: 'High-speed video diffusion model specialized in dynamic camera fly-throughs and 3D spatial perspective shifts.',
    bestFor: 'Fast 3D camera fly-throughs & spatial action',
    workflows: ['AI Video & Content Creation', 'AI YouTube Faceless & Shorts Engine']
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    pricing: 'Freemium',
    url: 'https://www.heygen.com',
    description: 'Market-leading digital twin avatar generator with expressive lip-syncing and automated 40+ language video translation.',
    bestFor: 'Custom video digital twins & multilingual translation',
    workflows: ['AI Video & Content Creation', 'AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'hedra',
    name: 'Hedra',
    pricing: 'Freemium',
    url: 'https://www.hedra.com',
    description: 'Expressive character animation engine generating stylized and photoreal talking avatars directly from static portraits.',
    bestFor: 'Expressive character animation from single portraits',
    workflows: ['AI Video & Content Creation']
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    pricing: 'Paid',
    url: 'https://www.synthesia.io',
    description: 'Enterprise AI video generation platform for professional corporate presenters and multilingual training content.',
    bestFor: 'Enterprise presentations & corporate training',
    workflows: ['AI Video & Content Creation']
  },

  // AI-First Editing, Captions & Sound
  {
    id: 'descript',
    name: 'Descript',
    pricing: 'Freemium',
    url: 'https://www.descript.com',
    description: 'Pioneering text-based audio/video editor with AI filler word removal, gap shortening, and Studio Sound enhancement.',
    bestFor: 'Text-based transcript editing & filler word removal',
    workflows: ['AI Video & Content Creation', 'AI YouTube Faceless & Shorts Engine']
  },
  {
    id: 'capcut-pro',
    name: 'CapCut Pro',
    pricing: 'Freemium',
    url: 'https://www.capcut.com',
    description: 'High-velocity video editor with kinetic auto-captions, word-by-word active highlighting, and pause trimming.',
    bestFor: 'Kinetic auto-captions & vertical short assembly',
    workflows: ['AI Video & Content Creation', 'AI E-Commerce & Product Branding', 'AI YouTube Faceless & Shorts Engine', 'AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'adobe-premiere-pro',
    name: 'Adobe Premiere Pro',
    pricing: 'Paid',
    url: 'https://www.adobe.com/products/premiere.html',
    description: 'Industry-standard non-linear editor featuring AI text-based editing, speech enhancement, and multi-track timelines.',
    bestFor: 'Professional multi-track text editing & XML export',
    workflows: ['AI Video & Content Creation', 'AI YouTube Faceless & Shorts Engine']
  },
  {
    id: 'submagic',
    name: 'Submagic',
    pricing: 'Paid',
    url: 'https://submagic.co',
    description: 'AI video polish platform generating dynamic kinetic captions, auto-zooms, contextual emojis, and B-roll overlays.',
    bestFor: 'Automated emojis, highlighted keywords & b-roll overlays',
    workflows: ['AI Video & Content Creation', 'AI YouTube Faceless & Shorts Engine']
  },
  {
    id: 'after-effects',
    name: 'After Effects',
    pricing: 'Paid',
    url: 'https://www.adobe.com/products/aftereffects.html',
    description: 'Industry standard for motion graphics, visual effects, 3D camera tracking, and custom interface mockups.',
    bestFor: 'Custom branded motion graphics & 3D interface callouts',
    workflows: ['AI Video & Content Creation']
  },
  {
    id: 'suno',
    name: 'Suno',
    pricing: 'Freemium',
    url: 'https://suno.com',
    description: 'Generative AI music engine creating broadcast-quality instrumental soundtracks and adaptive stems without copyright risk.',
    bestFor: 'Custom instrumental background music & stems',
    workflows: ['AI Video & Content Creation']
  },
  {
    id: 'udio',
    name: 'Udio',
    pricing: 'Freemium',
    url: 'https://udio.com',
    description: 'Advanced music generation platform with modular track extensions, complex arrangements, and cinematic scoring.',
    bestFor: 'Complex musical arrangements & cinematic scores',
    workflows: ['AI Video & Content Creation']
  },

  // Packaging, Repurposing & Distribution
  {
    id: 'photoshop-genfill',
    name: 'Photoshop Generative Fill',
    pricing: 'Paid',
    url: 'https://www.photoshop.com',
    description: 'Adobe Firefly-powered inpainting and outpainting to expand thumbnail canvases and cleanly remove background clutter.',
    bestFor: 'Canvas outpainting, asset clean-up & subject isolation',
    workflows: ['AI Video & Content Creation', 'AI YouTube Faceless & Shorts Engine']
  },
  {
    id: 'opus-clip',
    name: 'OpusClip',
    pricing: 'Freemium',
    url: 'https://www.opus.pro',
    description: 'AI video repurposing platform analyzing long-form videos to extract high-scoring viral shorts with auto-reframe.',
    bestFor: 'Automated viral short extraction & speaker reframing',
    workflows: ['AI Video & Content Creation', 'AI YouTube Faceless & Shorts Engine']
  },
  {
    id: 'buffer',
    name: 'Buffer',
    pricing: 'Freemium',
    url: 'https://buffer.com',
    description: 'Multi-channel social media scheduler for automated multi-platform vertical video distribution and analytics.',
    bestFor: 'Multi-platform scheduling & performance analytics',
    workflows: ['AI Video & Content Creation', 'AI YouTube Faceless & Shorts Engine']
  },

  // Full-Stack Engineering & Dev Infrastructure
  {
    id: 'supabase',
    name: 'Supabase',
    pricing: 'Freemium',
    url: 'https://supabase.com',
    description: 'Open-source Firebase alternative featuring PostgreSQL, Row Level Security, Auth, and pgvector similarity search.',
    bestFor: 'PostgreSQL migrations, vector store & RLS policies',
    workflows: ['AI Full-Stack Coding', 'AI Automation & Agents', 'AI SaaS & Micro-App Launchpad', 'AI Mobile App Development', 'AI Cybersecurity & Code Auditing']
  },
  {
    id: 'drizzle-orm',
    name: 'Drizzle ORM',
    pricing: 'Free',
    url: 'https://orm.drizzle.team',
    description: 'TypeScript ORM with zero boilerplate, relational queries, and serverless-first SQL schema migrations.',
    bestFor: 'High-performance SQL schema modeling',
    workflows: ['AI Full-Stack Coding', 'AI SaaS & Micro-App Launchpad', 'AI Cybersecurity & Code Auditing']
  },
  {
    id: 'prisma-orm',
    name: 'Prisma ORM',
    pricing: 'Free',
    url: 'https://www.prisma.io',
    description: 'Next-generation Node.js and TypeScript ORM with schema migrations and interactive ACID transactions.',
    bestFor: 'Interactive ACID transactions',
    workflows: ['AI Full-Stack Coding']
  },
  {
    id: 'playwright',
    name: 'Playwright',
    pricing: 'Free',
    url: 'https://playwright.dev',
    description: 'Reliable cross-browser end-to-end testing and browser automation framework for Chromium, Firefox, and WebKit.',
    bestFor: 'Cross-browser E2E testing & browser agents',
    workflows: ['AI Full-Stack Coding', 'AI Automation & Agents', 'AI SaaS & Micro-App Launchpad']
  },
  {
    id: 'vercel',
    name: 'Vercel',
    pricing: 'Freemium',
    url: 'https://vercel.com',
    description: 'Cloud platform for static sites and serverless functions with zero-config preview deployments and analytics.',
    bestFor: 'Zero-config preview deployments',
    workflows: ['AI Web Design Workflow', 'AI Full-Stack Coding', 'AI SaaS & Micro-App Launchpad']
  },
  {
    id: 'cloudflare-pages',
    name: 'Cloudflare Pages',
    pricing: 'Freemium',
    url: 'https://pages.cloudflare.com',
    description: 'Fast, secure JAMstack edge hosting platform with global CDN distribution and serverless worker support.',
    bestFor: 'Edge CDN distribution',
    workflows: ['AI Web Design Workflow']
  },
  {
    id: 'hono',
    name: 'Hono',
    pricing: 'Free',
    url: 'https://hono.dev',
    description: 'Ultrafast, lightweight web framework designed for Edge runtimes (Cloudflare, Deno, Bun, Node.js).',
    bestFor: 'Low-latency edge route handlers',
    workflows: ['AI Full-Stack Coding']
  },
  {
    id: 'zod',
    name: 'Zod',
    pricing: 'Free',
    url: 'https://zod.dev',
    description: 'TypeScript-first schema declaration and runtime validation library with static type inference.',
    bestFor: 'End-to-end type safety & structured JSON schemas',
    workflows: ['AI Full-Stack Coding', 'AI Automation & Agents', 'AI Cybersecurity & Code Auditing']
  },
  {
    id: 'tailwind-css',
    name: 'Tailwind CSS',
    pricing: 'Free',
    url: 'https://tailwindcss.com',
    description: 'Utility-first CSS framework with JIT compilation for rapidly building modern, responsive interfaces.',
    bestFor: 'CSS utility tokens & responsive layouts',
    workflows: ['AI Web Design Workflow', 'AI Full-Stack Coding', 'AI UI/UX & Design Systems']
  },
  {
    id: 'coolors-ai',
    name: 'Coolors AI',
    pricing: 'Free',
    url: 'https://coolors.co',
    description: 'Accessible color palette generator with integrated WCAG AAA contrast ratio verification.',
    bestFor: 'WCAG AAA contrast verification',
    workflows: ['AI Web Design Workflow', 'AI UI/UX & Design Systems']
  },
  {
    id: 'recraft-ai',
    name: 'Recraft AI',
    pricing: 'Freemium',
    url: 'https://www.recraft.ai',
    description: 'Generative AI engine specifically designed for infinite vector icons, SVG illustrations, and brand assets.',
    bestFor: 'Vector illustrations & technical badges',
    workflows: ['AI Web Design Workflow']
  },
  {
    id: 'lucide-icons',
    name: 'Lucide Icons',
    pricing: 'Free',
    url: 'https://lucide.dev',
    description: 'Beautiful and consistent open-source icon toolkit with native React component wrappers.',
    bestFor: 'Standard UI action & status icons',
    workflows: ['AI Web Design Workflow', 'AI UI/UX & Design Systems']
  },
  {
    id: 'whimsical',
    name: 'Whimsical',
    pricing: 'Freemium',
    url: 'https://whimsical.com',
    description: 'Visual collaboration workspace for rapid user journey maps, process flowcharts, and automation diagrams.',
    bestFor: 'Process flowcharts & system state diagrams',
    workflows: ['AI Web Design Workflow', 'AI Automation & Agents', 'AI UI/UX & Design Systems', 'AI Digital Marketing & Ad Funnels', 'AI Technical Writing & Docs Engineering']
  },
  {
    id: 'chrome-devtools',
    name: 'Chrome DevTools',
    pricing: 'Free',
    url: 'https://developer.chrome.com/docs/devtools',
    description: 'In-browser developer suite for DOM inspection, network waterfall audits, and responsive emulation.',
    bestFor: 'Device emulation & mobile breakpoint audit',
    workflows: ['AI Web Design Workflow']
  },
  {
    id: 'axe-devtools',
    name: 'axe DevTools',
    pricing: 'Free',
    url: 'https://www.deque.com/axe/devtools/',
    description: 'Automated keyboard navigation and accessibility auditor ensuring WCAG 2.1 compliance.',
    bestFor: 'Focus order & accessibility verification',
    workflows: ['AI Web Design Workflow']
  },
  {
    id: 'pagespeed-insights',
    name: 'PageSpeed Insights',
    pricing: 'Free',
    url: 'https://pagespeed.web.dev/',
    description: 'Google tool analyzing real-world Core Web Vitals (LCP, INP, CLS) with actionable speed diagnostics.',
    bestFor: 'LCP & CLS performance diagnostics',
    workflows: ['AI Web Design Workflow']
  },
  {
    id: 'browserstack',
    name: 'BrowserStack',
    pricing: 'Paid',
    url: 'https://www.browserstack.com',
    description: 'Cloud-based testing infrastructure providing instant access to 3,000+ real mobile devices and browsers.',
    bestFor: 'Real device cross-browser verification',
    workflows: ['AI Web Design Workflow']
  },

  // Automation Foundations & Orchestration
  {
    id: 'postman',
    name: 'Postman',
    pricing: 'Freemium',
    url: 'https://www.postman.com',
    description: 'API client for authoring, testing HTTP requests, inspecting payloads, and mocking webhook destinations.',
    bestFor: 'API request authoring & collection testing',
    workflows: ['AI Automation & Agents', 'AI Technical Writing & Docs Engineering']
  },
  {
    id: 'webhook-site',
    name: 'Webhook.site',
    pricing: 'Free',
    url: 'https://webhook.site',
    description: 'Instant cloud listener for inspecting incoming HTTP requests, headers, and webhook payloads in real time.',
    bestFor: 'Live webhook inspection & debugging',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'hoppscotch',
    name: 'Hoppscotch',
    pricing: 'Free',
    url: 'https://hoppscotch.io',
    description: 'Lightweight, open-source web-based API development ecosystem and curl runner.',
    bestFor: 'Fast browser-based API exploration',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'make',
    name: 'Make',
    pricing: 'Freemium',
    url: 'https://www.make.com',
    description: 'Visual automation platform supporting complex multi-step routing, data mapping, iterators, and custom HTTP calls.',
    bestFor: 'Visual workflow routing & array aggregation',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'zapier',
    name: 'Zapier',
    pricing: 'Freemium',
    url: 'https://zapier.com',
    description: 'Broadest SaaS integration ecosystem with built-in AI actions, webhooks, and visual logic builders.',
    bestFor: 'Quick SaaS connectors & zero-code triggers',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'tally',
    name: 'Tally',
    pricing: 'Freemium',
    url: 'https://tally.so',
    description: 'Minimalist form builder with native webhook triggers and flexible conditional branching.',
    bestFor: 'Frictionless form triggers & lead intake',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'n8n',
    name: 'n8n',
    pricing: 'Freemium',
    url: 'https://n8n.io',
    description: 'Fair-code workflow automation tool that can be self-hosted, featuring native AI agent nodes and custom script runners.',
    bestFor: 'Self-hosted unlimited workflow execution & AI nodes',
    workflows: ['AI Automation & Agents', 'Local LLMs & Privacy', 'AI WordPress & WooCommerce Builder', 'AI Data Analytics & Business Intelligence']
  },
  {
    id: 'railway',
    name: 'Railway',
    pricing: 'Freemium',
    url: 'https://railway.com',
    description: 'Modern cloud deployment platform with instant one-click Docker templates for n8n, PostgreSQL, and Redis.',
    bestFor: 'One-click cloud container hosting',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'docker',
    name: 'Docker',
    pricing: 'Free',
    url: 'https://www.docker.com',
    description: 'Container engine for running isolated, reproducible workflow servers and databases anywhere.',
    bestFor: 'Containerized deployment & local testing',
    workflows: ['AI Automation & Agents', 'AI Cybersecurity & Code Auditing']
  },

  // LLM Routing, Structured Outputs & RAG
  {
    id: 'openrouter',
    name: 'OpenRouter',
    pricing: 'Freemium',
    url: 'https://openrouter.ai',
    description: 'Unified API gateway providing access to 200+ AI models with automatic load balancing, price optimization, and fallback routing.',
    bestFor: 'Unified LLM API access & automated fallbacks',
    workflows: ['AI Automation & Agents', 'AI SaaS & Micro-App Launchpad']
  },
  {
    id: 'anthropic-console',
    name: 'Anthropic Console',
    pricing: 'Paid',
    url: 'https://console.anthropic.com',
    description: 'Direct API platform for Claude 3.7 Sonnet and Haiku with prompt caching and fine-grained token controls.',
    bestFor: 'Complex reasoning & extended context tasks',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'openai-platform',
    name: 'OpenAI Platform',
    pricing: 'Paid',
    url: 'https://platform.openai.com',
    description: 'Production API infrastructure for GPT-4o, o3-mini reasoning, and native structured outputs.',
    bestFor: 'Low-latency inference & structured outputs',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'openai-structured-outputs',
    name: 'OpenAI Structured Outputs',
    pricing: 'Paid',
    url: 'https://platform.openai.com/docs/guides/structured-outputs',
    description: 'Constrained decoding feature guaranteeing 100% adherence to supplied JSON Schemas with strict type safety.',
    bestFor: 'Guaranteed JSON schema adherence',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'instructor',
    name: 'Instructor',
    pricing: 'Free',
    url: 'https://python.useinstructor.com',
    description: 'Lightweight library built on Pydantic for structured data extraction, automatic retries, and field validation.',
    bestFor: 'Pydantic structured output extraction',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'firecrawl',
    name: 'Firecrawl',
    pricing: 'Freemium',
    url: 'https://www.firecrawl.dev',
    description: 'API service that turns entire websites into clean Markdown or structured JSON for LLM applications.',
    bestFor: 'Clean Markdown web scraping & crawling',
    workflows: ['AI Automation & Agents', 'AI Data Analytics & Business Intelligence']
  },
  {
    id: 'apify',
    name: 'Apify',
    pricing: 'Freemium',
    url: 'https://apify.com',
    description: 'Cloud web scraping platform with pre-built Actors for extracting data from Google Maps, LinkedIn, and social media.',
    bestFor: 'Pre-built web scraping Actors & proxies',
    workflows: ['AI Automation & Agents', 'AI Data Analytics & Business Intelligence']
  },
  {
    id: 'jina-reader',
    name: 'Jina Reader',
    pricing: 'Freemium',
    url: 'https://jina.ai/reader',
    description: 'Simple API prefix (`r.jina.ai/...`) converting any web URL into LLM-friendly Markdown instantly.',
    bestFor: 'Instant zero-config URL-to-Markdown conversion',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'pinecone',
    name: 'Pinecone',
    pricing: 'Freemium',
    url: 'https://www.pinecone.io',
    description: 'Serverless cloud vector database engineered for ultra-fast, high-scale similarity search and live indexing.',
    bestFor: 'Serverless scalable vector indexing',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'cohere',
    name: 'Cohere',
    pricing: 'Freemium',
    url: 'https://cohere.com',
    description: 'Embedding and reranking models designed to optimize retrieval precision in production RAG systems.',
    bestFor: 'Semantic reranking & cross-encoder filtering',
    workflows: ['AI Automation & Agents']
  },

  // Autonomous Agents, Tool Use & MCP
  {
    id: 'claude-tool-use',
    name: 'Claude Tool Use',
    pricing: 'Paid',
    url: 'https://docs.anthropic.com/en/docs/build-with-claude/tool-use',
    description: 'Anthropic native function calling architecture supporting complex nested schemas and parallel tool dispatch.',
    bestFor: 'Complex reasoning & multi-tool coordination',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'composio',
    name: 'Composio',
    pricing: 'Freemium',
    url: 'https://composio.dev',
    description: 'Tool management platform providing 250+ pre-built, production-authenticated tools (GitHub, Slack, Jira) for AI agents.',
    bestFor: 'Pre-authenticated SaaS tool integration',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'arcade-ai',
    name: 'Arcade AI',
    pricing: 'Freemium',
    url: 'https://arcade-ai.com',
    description: 'Secure tool execution engine providing user-level OAuth delegation and guardrails for agent actions.',
    bestFor: 'User-authorized OAuth tool execution',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'anthropic-mcp',
    name: 'Anthropic MCP',
    pricing: 'Free',
    url: 'https://modelcontextprotocol.io',
    description: 'Open protocol standardizing how applications provide context and tools to LLMs safely and securely.',
    bestFor: 'Standardized agent-to-tool protocol specification',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'smithery',
    name: 'Smithery',
    pricing: 'Freemium',
    url: 'https://smithery.ai',
    description: 'Registry and discovery platform for finding, installing, and deploying Model Context Protocol servers.',
    bestFor: 'MCP server discovery & one-click installation',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'langgraph',
    name: 'LangGraph',
    pricing: 'Free',
    url: 'https://www.langchain.com/langgraph',
    description: 'Graph-based framework for building stateful, multi-actor applications with LLMs featuring cycles and human-in-the-loop controls.',
    bestFor: 'Cyclic state machines & multi-agent graphs',
    workflows: ['AI Automation & Agents', 'AI Data Analytics & Business Intelligence']
  },
  {
    id: 'pydantic-ai',
    name: 'PydanticAI',
    pricing: 'Free',
    url: 'https://ai.pydantic.dev',
    description: 'Python agent framework built by the Pydantic team designed for type-safe, production-grade generative AI applications.',
    bestFor: 'Type-safe Python agent workflows',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'vercel-ai-sdk',
    name: 'Vercel AI SDK',
    pricing: 'Free',
    url: 'https://sdk.vercel.ai',
    description: 'TypeScript toolkit for building streaming AI applications, agent loops, and structured generative interfaces.',
    bestFor: 'TypeScript streaming agent loops',
    workflows: ['AI Automation & Agents', 'AI SaaS & Micro-App Launchpad', 'AI Mobile App Development']
  },
  {
    id: 'crewai',
    name: 'CrewAI',
    pricing: 'Freemium',
    url: 'https://www.crewai.com',
    description: 'Framework for orchestrating role-playing autonomous AI agents that collaborate seamlessly on complex tasks.',
    bestFor: 'Role-playing collaborative agent crews',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'autogen',
    name: 'AutoGen',
    pricing: 'Free',
    url: 'https://microsoft.github.io/autogen/',
    description: 'Microsoft multi-agent conversation framework enabling agent collaboration, tool use, and human participation.',
    bestFor: 'Multi-agent conversational debate architectures',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'agentops',
    name: 'AgentOps',
    pricing: 'Freemium',
    url: 'https://www.agentops.ai',
    description: 'Observability and monitoring platform designed specifically for multi-agent frameworks like CrewAI and AutoGen.',
    bestFor: 'Multi-agent session replay & cost tracking',
    workflows: ['AI Automation & Agents']
  },

  // Voice Agents, Browser Control & Production Ops
  {
    id: 'vapi',
    name: 'Vapi',
    pricing: 'Freemium',
    url: 'https://vapi.ai',
    description: 'Developer platform for building, testing, and deploying real-time conversational voice agents with sub-500ms latency.',
    bestFor: 'Real-time voice agent orchestration & telephony',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'twilio',
    name: 'Twilio',
    pricing: 'Paid',
    url: 'https://www.twilio.com',
    description: 'Global cloud communications platform providing phone numbers, SIP trunking, and programmable voice routing.',
    bestFor: 'Telephony infrastructure & phone number provisioning',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'browser-use',
    name: 'Browser Use',
    pricing: 'Free',
    url: 'https://browser-use.com',
    description: 'Open-source framework making websites accessible for AI agents through natural language browser control.',
    bestFor: 'Autonomous web navigation & GUI action execution',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'stagehand',
    name: 'Stagehand',
    pricing: 'Free',
    url: 'https://stagehand.dev',
    description: 'AI-driven web automation framework by Browserbase with natural language actions (act, extract, observe).',
    bestFor: 'Resilient Playwright-based AI browser automation',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'slack-api',
    name: 'Slack API',
    pricing: 'Free',
    url: 'https://api.slack.com',
    description: 'Enterprise messaging platform with interactive Block Kit buttons, modals, and webhooks for team approval workflows.',
    bestFor: 'Interactive team approval cards & notifications',
    workflows: ['AI Automation & Agents', 'AI Data Analytics & Business Intelligence']
  },
  {
    id: 'discord-webhooks',
    name: 'Discord Webhooks',
    pricing: 'Free',
    url: 'https://discord.com/developers/docs/resources/webhook',
    description: 'Lightweight, real-time messaging webhooks with embedded cards and button interactions for developer teams.',
    bestFor: 'Developer team alerts & quick approval webhooks',
    workflows: ['AI Automation & Agents']
  },
  {
    id: 'linear',
    name: 'Linear',
    pricing: 'Freemium',
    url: 'https://linear.app',
    description: 'Issue tracking platform with rich API and webhook triggers for routing agent escalations to human engineering teams.',
    bestFor: 'Escalation ticket creation & issue tracking',
    workflows: ['AI Automation & Agents', 'AI SaaS & Micro-App Launchpad']
  },
  {
    id: 'langfuse',
    name: 'Langfuse',
    pricing: 'Freemium',
    url: 'https://langfuse.com',
    description: 'Open-source LLM engineering platform offering detailed tracing, prompt management, cost tracking, and evaluation metrics.',
    bestFor: 'Full execution tracing & cost observability',
    workflows: ['AI Automation & Agents', 'AI SaaS & Micro-App Launchpad']
  },
  {
    id: 'helicone',
    name: 'Helicone',
    pricing: 'Freemium',
    url: 'https://www.helicone.ai',
    description: 'LLM observability proxy with sub-millisecond overhead, automated caching, user rate-limiting, and cost analytics.',
    bestFor: 'Zero-latency proxy caching & rate limiting',
    workflows: ['AI Automation & Agents', 'AI SaaS & Micro-App Launchpad']
  },
  {
    id: 'langsmith',
    name: 'LangSmith',
    pricing: 'Freemium',
    url: 'https://www.langchain.com/langsmith',
    description: 'Enterprise platform for debugging, testing, evaluating, and monitoring LangChain and custom LLM applications.',
    bestFor: 'Regression evaluation testing & dataset curation',
    workflows: ['AI Automation & Agents']
  },
  // Copywriting, SERP & SEO Tools
  {
    id: 'ahrefs',
    name: 'Ahrefs',
    pricing: 'Paid',
    url: 'https://ahrefs.com',
    description: 'Industry-standard SEO suite for backlink analysis, keyword clustering, SERP gap auditing, and competitor research.',
    bestFor: 'Keyword research & backlink analysis',
    workflows: ['AI Copywriting & SEO', 'AI SaaS & Micro-App Launchpad']
  },
  {
    id: 'semrush',
    name: 'Semrush',
    pricing: 'Paid',
    url: 'https://www.semrush.com',
    description: 'All-in-one digital marketing tool for search intent analysis, organic search volume tracking, and competitive intelligence.',
    bestFor: 'Search intent analysis & competitive tracking',
    workflows: ['AI Copywriting & SEO']
  },
  {
    id: 'surferseo',
    name: 'SurferSEO',
    pricing: 'Paid',
    url: 'https://surferseo.com',
    description: 'Data-driven content optimization platform calculating NLP entity salience, heading structure, and real-time content scores.',
    bestFor: 'On-page semantic NLP content optimization',
    workflows: ['AI Copywriting & SEO', 'AI E-Commerce & Product Branding']
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    pricing: 'Freemium',
    url: 'https://www.perplexity.ai',
    description: 'Conversational search engine providing live web citations, real-time competitor consensus, and SERP synthesis.',
    bestFor: 'Live web research & competitor gap analysis',
    workflows: ['AI Copywriting & SEO']
  },
  {
    id: 'google-search-console',
    name: 'Google Search Console',
    pricing: 'Free',
    url: 'https://search.google.com/search-console',
    description: 'Google official webmaster tool for monitoring search impressions, organic clicks, CTR, and indexing status.',
    bestFor: 'Impression tracking & content decay auditing',
    workflows: ['AI Copywriting & SEO', 'AI WordPress & WooCommerce Builder']
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    pricing: 'Freemium',
    url: 'https://www.copy.ai',
    description: 'AI marketing platform tailored for direct-response sales copy, marketing email funnels, and social collateral.',
    bestFor: 'Marketing email sequences & sales copy',
    workflows: ['AI Copywriting & SEO']
  },
  {
    id: 'clearscope',
    name: 'Clearscope',
    pricing: 'Paid',
    url: 'https://www.clearscope.io',
    description: 'Enterprise semantic content optimization platform powered by IBM Watson NLP for entity salience and readability grading.',
    bestFor: 'Enterprise NLP entity grading & content optimization',
    workflows: ['AI Copywriting & SEO']
  },
  {
    id: 'link-whisper',
    name: 'Link Whisper',
    pricing: 'Paid',
    url: 'https://linkwhisper.com',
    description: 'Smart internal linking automation tool suggesting contextual internal link anchors and identifying orphan pages.',
    bestFor: 'Contextual internal linking & orphan audits',
    workflows: ['AI Copywriting & SEO']
  },
  {
    id: 'screaming-frog',
    name: 'Screaming Frog',
    pricing: 'Freemium',
    url: 'https://www.screamingfrog.co.uk',
    description: 'Desktop website crawler for auditing internal link PageRank distribution, crawl depth, redirect chains, and schema validation.',
    bestFor: 'Technical SEO crawling & link equity modeling',
    workflows: ['AI Copywriting & SEO']
  },
  {
    id: 'airtable',
    name: 'Airtable',
    pricing: 'Freemium',
    url: 'https://www.airtable.com',
    description: 'Low-code relational database platform for modeling programmatic SEO schemas, metadata tags, and formulaic copy templates.',
    bestFor: 'Programmatic SEO relational databases',
    workflows: ['AI Copywriting & SEO', 'AI Automation & Agents']
  },
  {
    id: 'whalesync',
    name: 'Whalesync',
    pricing: 'Freemium',
    url: 'https://www.whalesync.com',
    description: 'Automated two-way data sync engine bridging Airtable or PostgreSQL databases directly to Webflow and Next.js frontends.',
    bestFor: 'Two-way database-to-CMS sync',
    workflows: ['AI Copywriting & SEO']
  },
  {
    id: 'merkle-schema-generator',
    name: 'Merkle Schema Generator',
    pricing: 'Free',
    url: 'https://technicalseo.com/tools/schema-markup-generator/',
    description: 'Visual schema creation tool generating validated JSON-LD markup for Articles, FAQPages, HowTos, and Organizations.',
    bestFor: 'Visual JSON-LD schema generation',
    workflows: ['AI Copywriting & SEO']
  },
  {
    id: 'schema-org',
    name: 'Schema.org',
    pricing: 'Free',
    url: 'https://schema.org',
    description: 'The collaborative, open community establishing structured data vocabularies and validation standards for search engines.',
    bestFor: 'Structured data vocabulary standards',
    workflows: ['AI Copywriting & SEO']
  },
  {
    id: 'posthog',
    name: 'PostHog',
    pricing: 'Freemium',
    url: 'https://posthog.com',
    description: 'Open-source all-in-one product analytics suite for tracking user scroll depth, session recordings, and feature flags.',
    bestFor: 'User session recording & scroll depth analytics',
    workflows: ['AI Copywriting & SEO', 'AI SaaS & Micro-App Launchpad', 'AI Mobile App Development', 'AI Digital Marketing & Ad Funnels', 'AI Technical Writing & Docs Engineering']
  },
  {
    id: 'hotjar',
    name: 'Hotjar',
    pricing: 'Freemium',
    url: 'https://www.hotjar.com',
    description: 'Visual behavior analytics platform offering interactive heatmaps, scroll maps, and visitor drop-off recordings.',
    bestFor: 'Visual heatmaps & reader drop-off analysis',
    workflows: ['AI Copywriting & SEO', 'AI E-Commerce & Product Branding']
  },

  // Local LLMs & Privacy Tools
  {
    id: 'ollama',
    name: 'Ollama',
    pricing: 'Free',
    url: 'https://ollama.com',
    description: 'Zero-dependency local model runtime that bundles weights, prompts, and quantization into Modelfiles with local REST API.',
    bestFor: 'One-command local model execution & CLI runner',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'llama-cpp',
    name: 'llama.cpp',
    pricing: 'Free',
    url: 'https://github.com/ggerganov/llama.cpp',
    description: 'Ultra-fast, raw C/C++ LLM inference engine supporting GGUF quantization, Apple Metal offload, and zero memory overhead.',
    bestFor: 'C/C++ inference speed & custom quantization quantize tools',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'lm-studio',
    name: 'LM Studio',
    pricing: 'Free',
    url: 'https://lmstudio.ai',
    description: 'Visual desktop application for discovering, downloading GGUF models from Hugging Face, offloading GPU layers, and running local chat.',
    bestFor: 'Desktop GUI local model exploration & benchmark comparisons',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'jan-ai',
    name: 'Jan.ai',
    pricing: 'Free',
    url: 'https://jan.ai',
    description: 'Open-source, self-hosted alternative to ChatGPT with local SQLite storage, model parameter sliders, and full offline privacy.',
    bestFor: 'Open-source offline desktop chat UI with zero telemetry',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'msty',
    name: 'Msty',
    pricing: 'Freemium',
    url: 'https://msty.app',
    description: 'Advanced desktop AI workspace supporting side-by-side local model comparisons, custom knowledge stacks, and prompt branching.',
    bestFor: 'Side-by-side local model comparison & branching chats',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'open-webui',
    name: 'Open WebUI',
    pricing: 'Free',
    url: 'https://openwebui.com',
    description: 'Self-hosted, extensible AI workspace featuring multi-user management, Markdown and artifact rendering, and Ollama integration.',
    bestFor: 'Self-hosted ChatGPT-grade multi-user team workspace',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'docker',
    name: 'Docker',
    pricing: 'Freemium',
    url: 'https://www.docker.com',
    description: 'Industry standard containerization engine providing sandboxed runtime isolation, volume mounts, and reproducible service stacks.',
    bestFor: 'Isolated local service sandboxing & zero-network containment',
    workflows: ['Local LLMs & Privacy', 'AI Cybersecurity & Code Auditing']
  },
  {
    id: 'tailscale',
    name: 'Tailscale',
    pricing: 'Freemium',
    url: 'https://tailscale.com',
    description: 'Zero-config WireGuard-based encrypted mesh VPN that enables private remote access to your local AI workstation.',
    bestFor: 'Secure encrypted peer-to-peer remote access without port forwarding',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'continue-dev',
    name: 'Continue.dev',
    pricing: 'Free',
    url: 'https://continue.dev',
    description: 'Leading open-source AI code assistant extension for VS Code and JetBrains connecting to local Ollama and llama.cpp runtimes.',
    bestFor: 'Air-gapped inline tab-autocomplete & IDE code editing',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'qwen-2-5-coder',
    name: 'Qwen 2.5 Coder',
    pricing: 'Free',
    url: 'https://github.com/QwenLM/Qwen2.5-Coder',
    description: 'State-of-the-art open-weight coding model with Fill-in-the-Middle support and benchmark performance rivaling proprietary models.',
    bestFor: 'Local code generation, refactoring & FIM tab completion',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'anything-llm',
    name: 'AnythingLLM',
    pricing: 'Free',
    url: 'https://anythingllm.com',
    description: 'All-in-one local document chat workspace with built-in PDF parsing, vector database management, and complete privacy.',
    bestFor: 'Zero-config offline document RAG and PDF chat',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'nomic-embed-text',
    name: 'Nomic Embed Text',
    pricing: 'Free',
    url: 'https://www.nomic.ai',
    description: 'High-performance, open-weight text embedding model with an 8192-token context window that runs locally via Ollama with 274MB RAM.',
    bestFor: 'Long-context local document vector embeddings',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'qdrant',
    name: 'Qdrant',
    pricing: 'Free',
    url: 'https://qdrant.tech',
    description: 'High-performance vector database written in Rust with fast HNSW indexing, payload filtering, and embedded on-disk storage.',
    bestFor: 'Production local vector storage & hybrid search retrieval',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'whisper-cpp',
    name: 'Whisper.cpp',
    pricing: 'Free',
    url: 'https://github.com/ggerganov/whisper.cpp',
    description: 'High-performance, zero-dependency C/C++ port of OpenAI Whisper with Apple Metal and CUDA acceleration for offline speech-to-text.',
    bestFor: 'Air-gapped voice transcription & real-time subtitle generation',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'kokoro-tts',
    name: 'Kokoro TTS',
    pricing: 'Free',
    url: 'https://huggingface.co/hexgrad/Kokoro-82M',
    description: 'Ultra-compact 82M parameter neural text-to-speech model producing studio-grade human cadence completely offline.',
    bestFor: 'Lightweight offline neural voice synthesis',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'piper-tts',
    name: 'Piper TTS',
    pricing: 'Free',
    url: 'https://github.com/rhasspy/piper',
    description: 'Fast, local neural text-to-speech system designed to run smoothly on low-power devices, Raspberry Pis, and local servers.',
    bestFor: 'Low-resource offline neural voice generation',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'deepseek-r1',
    name: 'DeepSeek-R1',
    pricing: 'Free',
    url: 'https://www.deepseek.com',
    description: 'Frontier open-weight reasoning model utilizing reinforcement learning and chain-of-thought distillation rivaling OpenAI o1.',
    bestFor: 'Deep mathematical reasoning, logic puzzles & offline thinking',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'unsloth',
    name: 'Unsloth',
    pricing: 'Free',
    url: 'https://unsloth.ai',
    description: 'Ultra-fast LLM fine-tuning framework providing 2x faster LoRA/QLoRA training with 70% less VRAM and direct GGUF export.',
    bestFor: 'Consumer GPU fine-tuning & direct GGUF quantization export',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'axolotl',
    name: 'Axolotl',
    pricing: 'Free',
    url: 'https://github.com/axolotl-ai-cloud/axolotl',
    description: 'Modular, config-driven framework for fine-tuning open LLMs with DeepSpeed, FSDP, and FlashAttention-2 support.',
    bestFor: 'Production multi-GPU distributed fine-tuning runs',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'pydantic-ai',
    name: 'PydanticAI',
    pricing: 'Free',
    url: 'https://ai.pydantic.dev',
    description: 'Type-safe Python agent framework with native support for local Ollama endpoints and structured model outputs.',
    bestFor: 'Type-safe local agent construction & offline tool calling',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'microsoft-presidio',
    name: 'Microsoft Presidio',
    pricing: 'Free',
    url: 'https://microsoft.github.io/presidio/',
    description: 'Enterprise-grade PII detection and anonymization SDK using regex and local spaCy NLP models to strip sensitive personal data.',
    bestFor: 'Automated offline PII redaction and tokenization',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'litellm',
    name: 'LiteLLM',
    pricing: 'Free',
    url: 'https://www.litellm.ai',
    description: 'Unified OpenAI-compatible proxy gateway supporting 100+ LLMs with fallbacks, local caching, rate limiting, and PII pre-processors.',
    bestFor: 'Hybrid cloud routing & centralized API key security',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'guardrails-ai',
    name: 'Guardrails AI',
    pricing: 'Free',
    url: 'https://www.guardrailsai.com',
    description: 'Open-source validation framework ensuring local LLM responses adhere to strict structural, legal, and privacy constraints.',
    bestFor: 'Runtime schema validation & data leak prevention',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'vllm',
    name: 'vLLM',
    pricing: 'Free',
    url: 'https://vllm.ai',
    description: 'High-throughput LLM inference and serving engine powered by PagedAttention and continuous request batching.',
    bestFor: 'Multi-user production model serving & maximum tokens/second',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'sglang',
    name: 'SGLang',
    pricing: 'Free',
    url: 'https://github.com/sgl-project/sglang',
    description: 'Fast serving framework for complex multi-turn LLM pipelines featuring RadixAttention for automatic KV cache reuse.',
    bestFor: 'Structured multi-step prompting & agentic batch throughput',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'garak',
    name: 'Garak LLM Scanner',
    pricing: 'Free',
    url: 'https://github.com/leondz/garak',
    description: 'Automated vulnerability scanner and red-teaming tool probing local LLM endpoints for prompt injection, jailbreaks, and data leakage.',
    bestFor: 'Automated LLM penetration testing & security audits',
    workflows: ['Local LLMs & Privacy', 'AI Cybersecurity & Code Auditing']
  },
  {
    id: 'apple-mlx',
    name: 'Apple MLX',
    pricing: 'Free',
    url: 'https://github.com/ml-explore/mlx',
    description: 'Machine learning framework designed specifically for Apple Silicon silicon with unified memory array operations.',
    bestFor: 'Apple Silicon native LLM fine-tuning & inference',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'argilla',
    name: 'Argilla',
    pricing: 'Free',
    url: 'https://argilla.io',
    description: 'Open-source collaboration tool for domain experts and AI engineers to curate, annotate, and validate training data.',
    bestFor: 'Human-in-the-loop training data curation & ShareGPT dataset validation',
    workflows: ['Local LLMs & Privacy']
  },
  {
    id: 'little-snitch',
    name: 'Little Snitch',
    pricing: 'Paid',
    url: 'https://www.obdev.at/products/littlesnitch/',
    description: 'Host-based interactive application firewall for macOS that monitors and blocks unauthorized outbound network connections.',
    bestFor: 'Outbound network connection monitoring & telemetry blocking',
    workflows: ['Local LLMs & Privacy']
  },

  // AI UI/UX & Design Systems Tools
  {
    id: 'dovetail',
    name: 'Dovetail',
    pricing: 'Freemium',
    url: 'https://dovetail.com',
    description: 'AI-native user research repository that automatically tags, transcribes, and surfaces thematic patterns across video interviews and surveys.',
    bestFor: 'Customer interview transcription & qualitative thematic tagging',
    workflows: ['AI UI/UX & Design Systems']
  },
  {
    id: 'figjam-ai',
    name: 'FigJam AI',
    pricing: 'Freemium',
    url: 'https://www.figma.com/figjam/',
    description: 'Collaborative whiteboard canvas with native AI tools to generate user journey maps, retrospective boards, and system flow diagrams.',
    bestFor: 'Collaborative whiteboarding & journey mapping',
    workflows: ['AI UI/UX & Design Systems']
  },
  {
    id: 'ux-pilot',
    name: 'UX Pilot',
    pricing: 'Freemium',
    url: 'https://uxpilot.ai',
    description: 'AI-powered wireframe and UI generator that turns text prompts and user stories into structural screen layouts and flow diagrams.',
    bestFor: 'Rapid prompt-to-wireframe screen exploration',
    workflows: ['AI UI/UX & Design Systems']
  },
  {
    id: 'realtime-colors',
    name: 'Realtime Colors',
    pricing: 'Free',
    url: 'https://realtimecolors.com',
    description: 'Real-time color palette visualizer that renders semantic colors on complete mock landing pages and dashboard components instantly.',
    bestFor: 'Real-time semantic palette preview on live components',
    workflows: ['AI UI/UX & Design Systems']
  },
  {
    id: 'fontshare',
    name: 'Fontshare',
    pricing: 'Free',
    url: 'https://www.fontshare.com',
    description: 'High-quality, free font service created by the Indian Type Foundry offering professional-grade typography for modern digital products.',
    bestFor: 'Curated modern display & UI font discovery',
    workflows: ['AI UI/UX & Design Systems']
  },
  {
    id: 'google-fonts',
    name: 'Google Fonts',
    pricing: 'Free',
    url: 'https://fonts.google.com',
    description: 'World wide web font repository featuring reliable CDN hosting, variable font support, and extensive language character sets.',
    bestFor: 'Production web font loading & variable fonts',
    workflows: ['AI UI/UX & Design Systems']
  },
  {
    id: 'typescale',
    name: 'Typescale',
    pricing: 'Free',
    url: 'https://typescale.com',
    description: 'Visual modular type scale calculator that previews harmonious typography scales across multiple musical intervals in real-time.',
    bestFor: 'Mathematical modular type scale calculation',
    workflows: ['AI UI/UX & Design Systems']
  },
  {
    id: 'tokens-studio',
    name: 'Tokens Studio',
    pricing: 'Freemium',
    url: 'https://tokens.studio',
    description: 'Industry-standard design token management plugin syncing Figma tokens with GitHub repositories, JSON schemas, and Style Dictionary.',
    bestFor: 'Two-way Figma-to-GitHub design token synchronization',
    workflows: ['AI UI/UX & Design Systems']
  },
  {
    id: 'style-dictionary',
    name: 'Style Dictionary',
    pricing: 'Free',
    url: 'https://styledictionary.com',
    description: 'Open-source build system created by Amazon that transforms design token JSON into CSS, SCSS, Swift, and Android XML assets.',
    bestFor: 'Automated multi-platform token compilation',
    workflows: ['AI UI/UX & Design Systems']
  },
  {
    id: 'shadcn-ui-figma',
    name: 'shadcn/ui Figma Kit',
    pricing: 'Free',
    url: 'https://ui.shadcn.com/figma',
    description: 'Official community Figma component library mapping 1-to-1 with shadcn/ui React and Tailwind CSS components.',
    bestFor: 'Production-ready accessible component structures',
    workflows: ['AI UI/UX & Design Systems']
  },
  {
    id: 'radix-primitives',
    name: 'Radix Primitives',
    pricing: 'Free',
    url: 'https://www.radix-ui.com/primitives',
    description: 'Unstyled, accessible component primitives providing functional state specifications for dropdowns, dialogs, and toolbars.',
    bestFor: 'Accessible interaction states & ARIA role modeling',
    workflows: ['AI UI/UX & Design Systems']
  },
  {
    id: 'magic-patterns',
    name: 'Magic Patterns',
    pricing: 'Freemium',
    url: 'https://www.magicpatterns.com',
    description: 'AI UI prototyping platform that generates full-page component prototypes and syncs clean designs directly into Figma.',
    bestFor: 'Prompt-to-Figma UI component synchronization',
    workflows: ['AI UI/UX & Design Systems']
  },
  {
    id: 'claude-artifacts',
    name: 'Claude Artifacts',
    pricing: 'Freemium',
    url: 'https://claude.ai',
    description: 'Interactive real-time React preview environment inside Claude, ideal for rapid conversational UI iteration and logic testing.',
    bestFor: 'Conversational UI prototyping & state exploration',
    workflows: ['AI UI/UX & Design Systems', 'AI Data Analytics & Business Intelligence']
  },
  {
    id: 'rive',
    name: 'Rive',
    pricing: 'Freemium',
    url: 'https://rive.app',
    description: 'State-machine animation tool creating tiny, interactive vector animations that run natively at 60 FPS with full code control.',
    bestFor: 'Interactive state-machine vector micro-animations',
    workflows: ['AI UI/UX & Design Systems']
  },
  {
    id: 'lottiefiles',
    name: 'LottieFiles',
    pricing: 'Freemium',
    url: 'https://lottiefiles.com',
    description: 'Platform for creating, testing, and shipping lightweight JSON-based vector animations across web, iOS, and Android.',
    bestFor: 'Lightweight JSON animations & success confirmations',
    workflows: ['AI UI/UX & Design Systems', 'AI Mobile App Development']
  },
  {
    id: 'spline',
    name: 'Spline',
    pricing: 'Freemium',
    url: 'https://spline.design',
    description: 'Collaborative 3D design software for web applications, featuring real-time physics, mouse tracking, and React component export.',
    bestFor: 'Interactive 3D hero assets & cursor-reactive cards',
    workflows: ['AI UI/UX & Design Systems']
  },
  {
    id: 'maze',
    name: 'Maze',
    pricing: 'Freemium',
    url: 'https://maze.co',
    description: 'Continuous product discovery and unmoderated user testing platform providing quantitative heatmaps, misclick rates, and task completion metrics.',
    bestFor: 'Unmoderated user testing & task completion metrics',
    workflows: ['AI UI/UX & Design Systems']
  },
  {
    id: 'attention-insight',
    name: 'Attention Insight',
    pricing: 'Paid',
    url: 'https://attentioninsight.com',
    description: 'AI-powered predictive eye-tracking software trained on thousands of eye-tracking studies, generating instant visual salience heatmaps.',
    bestFor: 'Predictive visual attention heatmaps & CTA salience',
    workflows: ['AI UI/UX & Design Systems']
  },
  {
    id: 'stark',
    name: 'Stark',
    pricing: 'Freemium',
    url: 'https://www.getstark.co',
    description: 'All-in-one accessibility suite for Figma and browsers, automating contrast checks, focus order mapping, and color blindness simulation.',
    bestFor: 'Figma & browser WCAG 2.2 accessibility auditing',
    workflows: ['AI UI/UX & Design Systems']
  },
  {
    id: 'whocanuse',
    name: 'WhoCanUse',
    pricing: 'Free',
    url: 'https://whocanuse.com',
    description: 'Educational accessibility tool demonstrating how color contrast affects people with different visual impairments and situational conditions.',
    bestFor: 'Visual impairment & situational contrast simulation',
    workflows: ['AI UI/UX & Design Systems']
  },
  {
    id: 'figma-dev-mode',
    name: 'Figma Dev Mode',
    pricing: 'Paid',
    url: 'https://www.figma.com/dev-mode/',
    description: 'Dedicated workspace for developers in Figma with inspect mode, CSS/Tailwind code generation, component variant exploration, and asset export.',
    bestFor: 'Design token inspection & developer layer redlining',
    workflows: ['AI UI/UX & Design Systems']
  },
  {
    id: 'framelink-figma-mcp',
    name: 'Framelink Figma MCP',
    pricing: 'Free',
    url: 'https://github.com/GLips/Figma-Context-MCP',
    description: 'Model Context Protocol server allowing AI coding assistants (Cursor, Claude Code) to query Figma nodes, variables, and vectors directly.',
    bestFor: 'Direct Figma-to-Cursor IDE context bridging via MCP',
    workflows: ['AI UI/UX & Design Systems']
  },

  // AI WordPress & WooCommerce Builder Tools
  {
    id: 'localwp',
    name: 'LocalWP',
    pricing: 'Free',
    url: 'https://localwp.com',
    description: 'Premier local WordPress development tool featuring instant site creation, PHP/MySQL version switching, MailHog email catching, and live shareable tunnels.',
    bestFor: 'Zero-latency offline local development & blueprints',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'instawp',
    name: 'InstaWP',
    pricing: 'Freemium',
    url: 'https://instawp.com',
    description: 'Cloud-based ephemeral WordPress sandbox generator creating disposable staging environments, template blueprints, and 1-click client handoff links.',
    bestFor: 'Cloud staging sandboxes & client demo links',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'zipwp',
    name: 'ZipWP',
    pricing: 'Freemium',
    url: 'https://zipwp.com',
    description: 'AI-native WordPress website scaffolding engine that generates fully functional, content-complete WordPress sites in 60 seconds from business prompts.',
    bestFor: 'Instant AI website scaffolding & starter blueprints',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'kadence-wp',
    name: 'Kadence WP',
    pricing: 'Freemium',
    url: 'https://www.kadencewp.com',
    description: 'Ultra-fast, accessible WordPress theme and Gutenberg block framework featuring a 9-color global palette, fluid typography, and WooCommerce integration.',
    bestFor: 'Clean Gutenberg blocks & global design token customizer',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'astra',
    name: 'Astra',
    pricing: 'Freemium',
    url: 'https://wpastra.com',
    description: 'One of the most popular lightweight WordPress themes, requiring less than 50KB of resources with deep WooCommerce and page builder compatibility.',
    bestFor: 'Lightweight multi-purpose theme foundation',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'bricks-builder',
    name: 'Bricks Builder',
    pricing: 'Paid',
    url: 'https://bricksbuilder.io',
    description: 'Visual full-site builder for WordPress that compiles directly into semantic, clean CSS and HTML with zero DOM bloat or div-soup.',
    bestFor: 'Developer-grade visual site building with zero DOM bloat',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'elementor-ai',
    name: 'Elementor AI',
    pricing: 'Paid',
    url: 'https://elementor.com/features/ai/',
    description: 'Native AI assistant integrated directly into Elementor, generating responsive custom CSS, vanilla HTML/JS snippets, and multilingual translations.',
    bestFor: 'In-builder scoped CSS & interactive code generation',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'kadence-blocks',
    name: 'Kadence Blocks',
    pricing: 'Freemium',
    url: 'https://www.kadencewp.com/kadence-blocks/',
    description: 'Gutenberg-native block suite featuring high-performance row layouts, advanced tabs, accordions, and CSS Grid with zero external library overhead.',
    bestFor: 'Native Gutenberg block layout & performance',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'advanced-custom-fields',
    name: 'Advanced Custom Fields (ACF)',
    pricing: 'Freemium',
    url: 'https://www.advancedcustomfields.com',
    description: 'The gold standard for customizing WordPress with powerful custom fields, repeater rows, flexible content layouts, and relational post objects.',
    bestFor: 'Custom post metadata, repeaters & relational schemas',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'meta-box',
    name: 'Meta Box',
    pricing: 'Freemium',
    url: 'https://metabox.io',
    description: 'High-performance WordPress custom data framework for developers, providing lightning-fast database storage and lightweight PHP/Gutenberg blocks.',
    bestFor: 'Developer-grade relational databases & custom post types',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'custom-post-type-ui',
    name: 'Custom Post Type UI',
    pricing: 'Free',
    url: 'https://wordpress.org/plugins/custom-post-type-ui/',
    description: 'Administrative interface for registering and managing custom post types and custom taxonomies without writing manual PHP registration code.',
    bestFor: 'Visual Custom Post Type & taxonomy registration',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'codewp',
    name: 'CodeWP',
    pricing: 'Freemium',
    url: 'https://codewp.ai',
    description: 'AI code generator trained specifically on WordPress core, WooCommerce functions, ACF hooks, and secure coding standards.',
    bestFor: 'WordPress-specialized PHP snippets & hook generation',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'wp-cli',
    name: 'WP-CLI',
    pricing: 'Free',
    url: 'https://wp-cli.org',
    description: 'Official command-line interface for WordPress, enabling instant plugin scaffolding, testing, and database operations.',
    bestFor: 'Rapid plugin scaffolding & terminal testing',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    pricing: 'Free',
    url: 'https://woocommerce.com',
    description: 'The world most customizable, open-source e-commerce platform powering millions of online stores with total data ownership.',
    bestFor: 'Core open-source e-commerce engine & product database',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'storeagent-ai',
    name: 'StoreAgent AI',
    pricing: 'Freemium',
    url: 'https://storeagent.ai',
    description: 'AI-powered product catalog management tool that writes SEO-optimized descriptions, tags attributes, and generates bulk CSV merchandising files.',
    bestFor: 'Automated bulk product description generation & tagging',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'wp-all-import',
    name: 'WP All Import',
    pricing: 'Freemium',
    url: 'https://www.wpallimport.com',
    description: 'Powerful XML and CSV import tool for WordPress and WooCommerce with visual drag-and-drop mapping and support for complex variable products.',
    bestFor: 'Programmatic bulk CSV catalog import & synchronization',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'funnelkit',
    name: 'FunnelKit',
    pricing: 'Freemium',
    url: 'https://funnelkit.com',
    description: 'Leading sales funnel and checkout builder for WooCommerce, offering customizable 1-page checkouts, order bumps, and 1-click post-purchase upsells.',
    bestFor: 'High-converting 1-page checkouts & AOV order bumps',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'stripe',
    name: 'Stripe',
    pricing: 'Free',
    url: 'https://stripe.com',
    description: 'Global payment processor supporting express wallets (Apple Pay, Google Pay), Link 1-click checkout, credit cards, and local payment methods.',
    bestFor: 'Frictionless express mobile payments & card processing',
    workflows: ['AI WordPress & WooCommerce Builder', 'AI SaaS & Micro-App Launchpad']
  },
  {
    id: 'paypal',
    name: 'PayPal',
    pricing: 'Free',
    url: 'https://www.paypal.com',
    description: 'Trusted global payment gateway featuring PayPal Checkout, Pay in 4 installment options, and international currency handling.',
    bestFor: 'Global buyer trust & buy-now-pay-later financing',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'uncanny-automator',
    name: 'Uncanny Automator',
    pricing: 'Freemium',
    url: 'https://automatorplugin.com',
    description: 'The #1 no-code automation plugin for WordPress, connecting WooCommerce, LearnDash, MemberPress, and external apps like Google Sheets and Slack.',
    bestFor: 'In-dashboard WordPress event automation & user recipes',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'tidio-ai',
    name: 'Tidio AI',
    pricing: 'Freemium',
    url: 'https://www.tidio.com',
    description: 'AI-powered customer service chat platform designed for e-commerce, offering Lyro AI to answer customer support inquiries instantly from knowledge bases.',
    bestFor: 'Automated AI customer support & order tracking chat',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'rank-math-ai',
    name: 'Rank Math AI',
    pricing: 'Freemium',
    url: 'https://rankmath.com',
    description: 'Feature-packed WordPress SEO suite offering automated JSON-LD schema generators, AI content analysis, rank tracking, and Google Search Console integration.',
    bestFor: 'Automated structured schema & on-page SEO audits',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'link-whisper',
    name: 'Link Whisper',
    pricing: 'Paid',
    url: 'https://linkwhisper.com',
    description: 'Smart internal linking tool powered by AI that analyzes site content to suggest relevant internal link silos and identifies orphan pages.',
    bestFor: 'Automated internal linking silos & orphan page elimination',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'wp-rocket',
    name: 'WP Rocket',
    pricing: 'Paid',
    url: 'https://wp-rocket.me',
    description: 'Leading all-in-one WordPress performance plugin providing instant page caching, GZIP compression, JavaScript delay, and CSS optimization.',
    bestFor: 'Full-page HTML caching & JavaScript execution delay',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'perfmatters',
    name: 'Perfmatters',
    pricing: 'Paid',
    url: 'https://perfmatters.io',
    description: 'Lightweight performance suite featuring the Script Manager to selectively disable unused CSS/JS scripts per URL, reducing page weight by up to 70%.',
    bestFor: 'Script Manager asset unloading & bloat removal',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    pricing: 'Freemium',
    url: 'https://www.cloudflare.com',
    description: 'Global Content Delivery Network offering Automatic Platform Optimization (APO) for WordPress, caching dynamic HTML directly at edge servers worldwide.',
    bestFor: 'Edge HTML caching & global CDN asset delivery',
    workflows: ['AI WordPress & WooCommerce Builder', 'AI Cybersecurity & Code Auditing']
  },
  {
    id: 'wordfence',
    name: 'Wordfence',
    pricing: 'Freemium',
    url: 'https://www.wordfence.com',
    description: 'Leading enterprise WordPress firewall and malware scanner featuring real-time IP blacklisting, brute force protection, and Two-Factor Authentication.',
    bestFor: 'Web Application Firewall (WAF) & malware scanning',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'updraftplus',
    name: 'UpdraftPlus',
    pricing: 'Freemium',
    url: 'https://updraftplus.com',
    description: 'The world most trusted WordPress backup plugin, supporting automated scheduled backups directly to AWS S3, Google Drive, and Dropbox.',
    bestFor: 'Automated off-site scheduled backups & 1-click restore',
    workflows: ['AI WordPress & WooCommerce Builder']
  },
  {
    id: 'cloudways',
    name: 'Cloudways',
    pricing: 'Paid',
    url: 'https://www.cloudways.com',
    description: 'Managed cloud hosting platform for WordPress and WooCommerce powered by DigitalOcean and AWS, featuring 1-click staging and automated SSL.',
    bestFor: 'Managed cloud hosting, 1-click staging & zero-downtime migration',
    workflows: ['AI WordPress & WooCommerce Builder']
  },

  // AI SaaS & Micro-App Launchpad Tools
  {
    id: 'nextjs',
    name: 'Next.js',
    pricing: 'Free',
    url: 'https://nextjs.org',
    description: 'The React framework for the Web featuring App Router, React Server Components, Route Handlers, and automatic image optimization.',
    bestFor: 'Production React framework & App Router architecture',
    workflows: ['AI SaaS & Micro-App Launchpad', 'AI Full-Stack Coding']
  },
  {
    id: 'shadcn-ui',
    name: 'shadcn/ui',
    pricing: 'Free',
    url: 'https://ui.shadcn.com',
    description: 'Beautifully designed, accessible component library built with Radix UI and Tailwind CSS that you copy and paste into your apps.',
    bestFor: 'Accessible copy-paste React UI components & dark mode',
    workflows: ['AI SaaS & Micro-App Launchpad', 'AI Full-Stack Coding']
  },
  {
    id: 'neon',
    name: 'Neon',
    pricing: 'Freemium',
    url: 'https://neon.tech',
    description: 'Serverless, autoscaling Postgres database with instant database branching, bottomless storage, and scale-to-zero capabilities.',
    bestFor: 'Serverless Postgres & instant preview branch databases',
    workflows: ['AI SaaS & Micro-App Launchpad']
  },
  {
    id: 'clerk',
    name: 'Clerk',
    pricing: 'Freemium',
    url: 'https://clerk.com',
    description: 'Complete user management and authentication suite with drop-in pre-built UI components, multi-tenant organizations, and session cookies.',
    bestFor: 'Turnkey authentication, session cookies & user onboarding',
    workflows: ['AI SaaS & Micro-App Launchpad', 'AI Mobile App Development', 'AI Cybersecurity & Code Auditing']
  },
  {
    id: 'resend',
    name: 'Resend',
    pricing: 'Freemium',
    url: 'https://resend.com',
    description: 'Developer-first transactional email API built for modern web apps with React Email template support and high deliverability.',
    bestFor: 'Modern transactional email API & React Email templates',
    workflows: ['AI SaaS & Micro-App Launchpad']
  },
  {
    id: 'upstash-redis',
    name: 'Upstash Redis',
    pricing: 'Freemium',
    url: 'https://upstash.com',
    description: 'Serverless Redis with low-latency HTTP/REST APIs engineered specifically for Edge and serverless rate-limiting and session caching.',
    bestFor: 'Serverless Edge rate-limiting & token bucket enforcement',
    workflows: ['AI SaaS & Micro-App Launchpad']
  },
  {
    id: 'lemon-squeezy',
    name: 'Lemon Squeezy',
    pricing: 'Freemium',
    url: 'https://www.lemonsqueezy.com',
    description: 'Merchant of Record (MoR) billing platform managing global sales taxes, EU VAT compliance, and software subscriptions out of the box.',
    bestFor: 'Global Merchant of Record subscription & tax compliance',
    workflows: ['AI SaaS & Micro-App Launchpad']
  },
  {
    id: 'polar-sh',
    name: 'Polar.sh',
    pricing: 'Free',
    url: 'https://polar.sh',
    description: 'Open-source Merchant of Record and subscription billing engine designed specifically for developer tools and open-source creators.',
    bestFor: 'Developer tool monetization & open-source billing',
    workflows: ['AI SaaS & Micro-App Launchpad']
  },
  {
    id: 'react-email',
    name: 'React Email',
    pricing: 'Free',
    url: 'https://react.email',
    description: 'Collection of high-quality, unstyled React components for writing clean, responsive emails with zero HTML table headaches.',
    bestFor: 'Type-safe responsive email design in React',
    workflows: ['AI SaaS & Micro-App Launchpad']
  },
  {
    id: 'loops',
    name: 'Loops',
    pricing: 'Freemium',
    url: 'https://loops.so',
    description: 'Email automation and lifecycle marketing platform designed specifically for modern SaaS companies and digital product founders.',
    bestFor: 'SaaS user onboarding sequences & product announcements',
    workflows: ['AI SaaS & Micro-App Launchpad', 'AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'canny',
    name: 'Canny',
    pricing: 'Freemium',
    url: 'https://canny.io',
    description: 'Customer feedback and feature voting board that captures user requests, prioritizes roadmaps, and keeps users informed of updates.',
    bestFor: 'Public feature voting boards & customer feedback loop',
    workflows: ['AI SaaS & Micro-App Launchpad']
  },
  {
    id: 'retool',
    name: 'Retool',
    pricing: 'Freemium',
    url: 'https://retool.com',
    description: 'Fast internal software development platform for connecting databases, APIs, and building custom operational dashboards in minutes.',
    bestFor: 'Internal operational admin dashboards & customer support tools',
    workflows: ['AI SaaS & Micro-App Launchpad']
  },
  {
    id: 'sentry',
    name: 'Sentry',
    pricing: 'Freemium',
    url: 'https://sentry.io',
    description: 'Application performance monitoring and error tracking platform providing stack traces, session replays, and real-time crash alerting.',
    bestFor: 'Full-stack error tracking, crash alerting & breadcrumb debugging',
    workflows: ['AI SaaS & Micro-App Launchpad', 'AI Mobile App Development', 'AI Cybersecurity & Code Auditing']
  },
  {
    id: 'screen-studio',
    name: 'Screen Studio',
    pricing: 'Paid',
    url: 'https://www.screen.studio',
    description: 'Screen recorder for macOS creating professional-grade product demos with automatic smooth cursor zooms, motion blur, and clean cutouts.',
    bestFor: 'Studio-grade product demo videos & high-converting micro-trailers',
    workflows: ['AI SaaS & Micro-App Launchpad']
  },
  {
    id: 'product-hunt',
    name: 'Product Hunt',
    pricing: 'Free',
    url: 'https://www.producthunt.com',
    description: 'Premier launchpad and curation platform for tech products, indie software, and AI apps reaching hundreds of thousands of early adopters.',
    bestFor: 'Product launch distribution, early adopters & social proof badges',
    workflows: ['AI SaaS & Micro-App Launchpad']
  },
  {
    id: 'x-twitter',
    name: 'X / Twitter',
    pricing: 'Free',
    url: 'https://x.com',
    description: 'Real-time social media platform and premier community hub for indie hackers, tech founders, and build-in-public software distribution.',
    bestFor: 'Build-in-public social launch threads & founder distribution',
    workflows: ['AI SaaS & Micro-App Launchpad']
  },
  {
    id: 'plausible-analytics',
    name: 'Plausible Analytics',
    pricing: 'Paid',
    url: 'https://plausible.io',
    description: 'Lightweight, open-source, privacy-focused web analytics that collects zero personal data and requires no cookie consent banners under GDPR.',
    bestFor: 'Cookie-free privacy-first traffic & goal conversion analytics',
    workflows: ['AI SaaS & Micro-App Launchpad']
  },
  {
    id: 'tally',
    name: 'Tally',
    pricing: 'Free',
    url: 'https://tally.so',
    description: 'The simplest form builder that works like a Notion doc, supporting custom domains, webhook submissions, and payment collection.',
    bestFor: 'Notion-style waitlist intake forms & customer discovery surveys',
    workflows: ['AI SaaS & Micro-App Launchpad', 'AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'framer',
    name: 'Framer',
    pricing: 'Freemium',
    url: 'https://www.framer.com',
    description: 'Visual website builder for designers and founders with built-in CMS, smooth responsive breakpoints, and instant publishing.',
    bestFor: 'High-converting pre-launch landing pages & smoke test sites',
    workflows: ['AI SaaS & Micro-App Launchpad', 'AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'reddit',
    name: 'Reddit',
    pricing: 'Free',
    url: 'https://www.reddit.com',
    description: 'Massive network of niche communities where users discuss specific workflows, software complaints, and manual bottlenecks.',
    bestFor: 'Unfiltered user pain point mining & subreddit discussions',
    workflows: ['AI SaaS & Micro-App Launchpad']
  },
  {
    id: 'g2-reviews',
    name: 'G2 Reviews',
    pricing: 'Free',
    url: 'https://www.g2.com',
    description: 'Leading B2B software review platform showcasing verified 1-star to 3-star customer critiques highlighting software shortcomings.',
    bestFor: 'Competitor dissatisfaction analysis & feature gap discovery',
    workflows: ['AI SaaS & Micro-App Launchpad']
  },

  // AI Mobile App Development Tools
  {
    id: 'mobbin',
    name: 'Mobbin',
    pricing: 'Freemium',
    url: 'https://mobbin.com',
    description: 'Curated design library showcasing real-world iOS and Android screen recordings, user flows, and paywall architectures.',
    bestFor: 'Deconstructing top-grossing onboarding funnels & UI patterns',
    workflows: ['AI Mobile App Development', 'AI UI/UX & Design Systems']
  },
  {
    id: 'expo',
    name: 'Expo',
    pricing: 'Free',
    url: 'https://expo.dev',
    description: 'Universal open-source framework for building native iOS, Android, and web apps with React Native, file-based routing, and native SDKs.',
    bestFor: 'Universal app architecture, native modules & cross-platform builds',
    workflows: ['AI Mobile App Development']
  },
  {
    id: 'react-native',
    name: 'React Native',
    pricing: 'Free',
    url: 'https://reactnative.dev',
    description: 'Meta open-source mobile framework enabling developers to build native mobile apps using React, JavaScript, and native UI components.',
    bestFor: 'Cross-platform native iOS & Android development',
    workflows: ['AI Mobile App Development']
  },
  {
    id: 'nativewind',
    name: 'NativeWind',
    pricing: 'Free',
    url: 'https://www.nativewind.dev',
    description: 'Tailwind CSS compiler for React Native that transforms utility classes into high-performance native StyleSheet properties.',
    bestFor: 'Tailwind CSS styling on native iOS & Android views',
    workflows: ['AI Mobile App Development']
  },
  {
    id: 'tamagui',
    name: 'Tamagui',
    pricing: 'Free',
    url: 'https://tamagui.dev',
    description: 'Universal styling system and component suite for React Native and Web featuring zero-runtime CSS compilation and typed tokens.',
    bestFor: 'High-performance universal UI tokens & animations',
    workflows: ['AI Mobile App Development', 'AI UI/UX & Design Systems']
  },
  {
    id: 'react-native-reanimated',
    name: 'React Native Reanimated',
    pricing: 'Free',
    url: 'https://docs.swmansion.com/react-native-reanimated/',
    description: 'High-performance animation library running gesture and spring calculations directly on the native UI thread via worklets.',
    bestFor: '60fps gestures, shared values & spring animations',
    workflows: ['AI Mobile App Development']
  },
  {
    id: 'expo-haptics',
    name: 'Expo Haptics',
    pricing: 'Free',
    url: 'https://docs.expo.dev/versions/latest/sdk/haptics/',
    description: 'Native tactile feedback SDK interfacing directly with Apple Taptic Engine and Android haptic vibrator motors.',
    bestFor: 'Native haptic feedback for buttons, toggles & snap points',
    workflows: ['AI Mobile App Development']
  },
  {
    id: 'mmkv',
    name: 'MMKV',
    pricing: 'Free',
    url: 'https://github.com/mrousavy/react-native-mmkv',
    description: 'Ultra-fast C++ key-value storage engine utilizing memory-mapped files (mmap) for instantaneous synchronous data reads and writes.',
    bestFor: 'Zero-latency synchronous key-value caching & settings',
    workflows: ['AI Mobile App Development']
  },
  {
    id: 'tanstack-query',
    name: 'TanStack Query',
    pricing: 'Free',
    url: 'https://tanstack.com/query/latest',
    description: 'Asynchronous state management engine with built-in cache persistence, optimistic UI updates, and offline sync queues.',
    bestFor: 'Offline query caching & optimistic UI mutations',
    workflows: ['AI Mobile App Development', 'AI Full-Stack Coding']
  },
  {
    id: 'powersync',
    name: 'PowerSync',
    pricing: 'Freemium',
    url: 'https://www.powersync.com',
    description: 'Offline-first sync engine replicating Postgres databases to local SQLite databases on iOS and Android devices.',
    bestFor: 'Real-time relational database offline replication',
    workflows: ['AI Mobile App Development']
  },
  {
    id: 'expo-camera',
    name: 'Expo Camera',
    pricing: 'Free',
    url: 'https://docs.expo.dev/versions/latest/sdk/camera/',
    description: 'Universal camera SDK supporting live viewfinders, barcode scanning, flash control, and photo capture on iOS and Android.',
    bestFor: 'Real-time camera viewfinders & high-res image capture',
    workflows: ['AI Mobile App Development']
  },
  {
    id: 'openai-realtime-api',
    name: 'OpenAI Realtime API',
    pricing: 'Paid',
    url: 'https://platform.openai.com/docs/guides/realtime',
    description: 'Low-latency multimodal WebRTC and WebSocket API for conversational real-time voice and vision interactions.',
    bestFor: 'Sub-500ms real-time conversational voice agents',
    workflows: ['AI Mobile App Development', 'AI Automation & Agents']
  },
  {
    id: 'react-native-executorch',
    name: 'React Native ExecuTorch',
    pricing: 'Free',
    url: 'https://pytorch.org/executorch/',
    description: "PyTorch's official on-device AI runtime for executing quantized machine learning and LLM models on iOS and Android devices.",
    bestFor: 'Cross-platform on-device PyTorch model inference',
    workflows: ['AI Mobile App Development', 'Local LLMs & Privacy']
  },
  {
    id: 'apple-coreml',
    name: 'Apple CoreML',
    pricing: 'Free',
    url: 'https://developer.apple.com/machine-learning/core-ml/',
    description: "Apple's hardware-accelerated machine learning framework utilizing the Apple Neural Engine (ANE) for ultra-fast on-device inference.",
    bestFor: 'Hardware-accelerated iOS Apple Neural Engine inference',
    workflows: ['AI Mobile App Development', 'Local LLMs & Privacy']
  },
  {
    id: 'mediapipe',
    name: 'MediaPipe',
    pricing: 'Free',
    url: 'https://developers.google.com/mediapipe',
    description: "Google's suite of ready-to-use on-device ML solutions for face detection, hand tracking, pose estimation, and text classification.",
    bestFor: 'Turnkey on-device computer vision & pose detection',
    workflows: ['AI Mobile App Development']
  },
  {
    id: 'expo-notifications',
    name: 'Expo Notifications',
    pricing: 'Free',
    url: 'https://docs.expo.dev/versions/latest/sdk/notifications/',
    description: 'Comprehensive push notification SDK handling permission requests, token generation, and native response listeners on iOS and Android.',
    bestFor: 'Cross-platform push notification lifecycle & routing',
    workflows: ['AI Mobile App Development']
  },
  {
    id: 'onesignal',
    name: 'OneSignal',
    pricing: 'Freemium',
    url: 'https://onesignal.com',
    description: 'Enterprise push notification and customer messaging platform featuring automated message funnels and user segmentation.',
    bestFor: 'Targeted push campaigns & automated re-engagement funnels',
    workflows: ['AI Mobile App Development']
  },
  {
    id: 'branch-io',
    name: 'Branch.io',
    pricing: 'Freemium',
    url: 'https://branch.io',
    description: 'Deep linking and attribution platform ensuring users route directly to in-app content through install funnels and push campaigns.',
    bestFor: 'Deferred deep linking & multi-platform attribution',
    workflows: ['AI Mobile App Development']
  },
  {
    id: 'revenuecat',
    name: 'RevenueCat',
    pricing: 'Freemium',
    url: 'https://www.revenuecat.com',
    description: 'Leading in-app purchase and subscription management backend for iOS and Android handling receipt validation, entitlements, and churn analytics.',
    bestFor: 'Cross-platform subscription backend & receipt validation',
    workflows: ['AI Mobile App Development', 'AI SaaS & Micro-App Launchpad']
  },
  {
    id: 'superwall',
    name: 'Superwall',
    pricing: 'Freemium',
    url: 'https://superwall.com',
    description: 'Mobile paywall optimization platform that builds, tests, and serves native dynamic paywalls remotely without App Store updates.',
    bestFor: 'Remote paywall A/B testing & real-time pricing experiments',
    workflows: ['AI Mobile App Development']
  },
  {
    id: 'app-store-connect',
    name: 'App Store Connect',
    pricing: 'Free',
    url: 'https://appstoreconnect.apple.com',
    description: "Apple's official portal for creating auto-renewable subscription groups, setting regional pricing tiers, and configuring StoreKit products.",
    bestFor: 'StoreKit 2 product configuration & subscription groups',
    workflows: ['AI Mobile App Development']
  },
  {
    id: 'eas-build',
    name: 'Expo Application Services (EAS)',
    pricing: 'Freemium',
    url: 'https://expo.dev/eas',
    description: 'Cloud compilation and distribution infrastructure for compiling signed iOS and Android binaries and deploying Over-the-Air (OTA) updates.',
    bestFor: 'Cloud binary compilation & instant OTA updates',
    workflows: ['AI Mobile App Development']
  },
  {
    id: 'testflight',
    name: 'TestFlight',
    pricing: 'Free',
    url: 'https://developer.apple.com/testflight/',
    description: "Apple's official beta testing platform allowing developers to distribute pre-release iOS builds to internal and external testers.",
    bestFor: 'Beta testing signed iOS builds on real hardware',
    workflows: ['AI Mobile App Development']
  },
  {
    id: 'flashlist',
    name: 'FlashList',
    pricing: 'Free',
    url: 'https://shopify.github.io/flash-list/',
    description: "Shopify's ultra-fast virtualized list replacement for React Native that recycles platform views to deliver 60fps performance on complex feeds.",
    bestFor: '60fps list virtualization & cell recycling',
    workflows: ['AI Mobile App Development']
  },
  {
    id: 'appscreens',
    name: 'AppScreens',
    pricing: 'Freemium',
    url: 'https://appscreens.com',
    description: 'App Store and Google Play screenshot generator creating panoramic, 3D device mockups localized in multiple languages.',
    bestFor: 'Exporting App Store & Google Play panoramic screenshots',
    workflows: ['AI Mobile App Development']
  },
  {
    id: 'astro-aso',
    name: 'Astro ASO',
    pricing: 'Freemium',
    url: 'https://astroaso.com',
    description: 'App Store Optimization suite for tracking keyword rankings, search volume, competitor keyword gaps, and conversion rates.',
    bestFor: 'App Store keyword optimization & competitor rankings',
    workflows: ['AI Mobile App Development']
  },
  {
    id: 'fastlane',
    name: 'Fastlane',
    pricing: 'Free',
    url: 'https://fastlane.tools',
    description: 'Open-source developer automation tool for automating screenshot captures, provisioning profiles, and App Store metadata uploads.',
    bestFor: 'Automated screenshot generation & App Store deployment',
    workflows: ['AI Mobile App Development']
  },

  // AI E-Commerce & Product Branding Tools
  {
    id: 'vectorizer-ai',
    name: 'Vectorizer.ai',
    pricing: 'Freemium',
    url: 'https://vectorizer.ai',
    description: 'Deep learning vectorization tool that converts raster PNG and JPEG logos into clean, production-ready SVG and EPS vector curves.',
    bestFor: 'Converting raster AI logos into print-ready SVG vectors',
    workflows: ['AI E-Commerce & Product Branding']
  },
  {
    id: 'coolors',
    name: 'Coolors',
    pricing: 'Free',
    url: 'https://coolors.co',
    description: 'Color palette generator with built-in accessibility contrast checking, hex code export, and color blindness simulation.',
    bestFor: 'Generating brand color palettes & accessibility contrast checks',
    workflows: ['AI E-Commerce & Product Branding', 'AI UI/UX & Design Systems']
  },
  {
    id: 'flair-ai',
    name: 'Flair AI',
    pricing: 'Freemium',
    url: 'https://flair.ai',
    description: 'AI design tool built specifically for CPG and DTC product photography, generating photorealistic scenes with matched lighting and shadows.',
    bestFor: 'Staging product bottles, boxes & jars on luxury podiums',
    workflows: ['AI E-Commerce & Product Branding']
  },
  {
    id: 'photoroom',
    name: 'Photoroom',
    pricing: 'Freemium',
    url: 'https://www.photoroom.com',
    description: 'High-accuracy background removal and AI staging app creating instant studio white backgrounds and lifestyle mockups from mobile photos.',
    bestFor: 'Instant mobile background cutout & shadow generation',
    workflows: ['AI E-Commerce & Product Branding']
  },
  {
    id: 'photoshop-generative-fill',
    name: 'Photoshop Generative Fill',
    pricing: 'Paid',
    url: 'https://www.adobe.com/products/photoshop.html',
    description: 'Adobe Firefly-powered generative expansion tool for extending canvas aspect ratios and seamlessly blending custom props into product scenes.',
    bestFor: 'Precise canvas expansion & high-resolution lighting blending',
    workflows: ['AI E-Commerce & Product Branding']
  },
  {
    id: 'vmodel',
    name: 'VModel',
    pricing: 'Freemium',
    url: 'https://vmodel.ai',
    description: 'Specialized AI virtual try-on platform tailored for fashion brands, mapping flat-lay clothing directly onto customizable digital models.',
    bestFor: 'Virtual clothing try-on & ghost-mannequin model replacement',
    workflows: ['AI E-Commerce & Product Branding']
  },
  {
    id: 'krea-ai',
    name: 'Krea AI',
    pricing: 'Freemium',
    url: 'https://www.krea.ai',
    description: 'Real-time visual generation and image enhancement engine featuring AI upscaling, pattern generation, and prompt-to-model rendering.',
    bestFor: 'Real-time model generation & 4K photorealistic upscaling',
    workflows: ['AI E-Commerce & Product Branding']
  },
  {
    id: 'pacdora',
    name: 'Pacdora',
    pricing: 'Freemium',
    url: 'https://www.pacdora.com',
    description: 'Online 3D packaging design tool offering 3,000+ structural packaging dielines, real-time 3D rendering, and 4K unboxing video exports.',
    bestFor: 'Real-time 3D box mockups & die-line print exports',
    workflows: ['AI E-Commerce & Product Branding']
  },
  {
    id: 'shopify',
    name: 'Shopify',
    pricing: 'Paid',
    url: 'https://www.shopify.com',
    description: 'Leading global commerce platform powering millions of online storefronts with integrated checkout, inventory management, and app ecosystems.',
    bestFor: 'Direct-to-consumer online storefronts & checkout infrastructure',
    workflows: ['AI E-Commerce & Product Branding']
  },
  {
    id: 'shopify-magic',
    name: 'Shopify Magic',
    pricing: 'Free',
    url: 'https://www.shopify.com/magic',
    description: "Shopify's native AI copywriting tool built directly into the admin dashboard for instant product description generation and tone adjustment.",
    bestFor: 'In-dashboard Shopify product description generation',
    workflows: ['AI E-Commerce & Product Branding']
  },
  {
    id: 'tiktok-creative-center',
    name: 'TikTok Creative Center',
    pricing: 'Free',
    url: 'https://ads.tiktok.com/business/creativecenter/',
    description: 'Official TikTok intelligence platform tracking top-performing video ads, breakout audio tracks, and high-CTR hook patterns.',
    bestFor: 'Discovering trending hooks & viral competitor ad benchmarks',
    workflows: ['AI E-Commerce & Product Branding', 'AI Video & Content Creation']
  },
  {
    id: 'adcreative-ai',
    name: 'AdCreative.ai',
    pricing: 'Freemium',
    url: 'https://www.adcreative.ai',
    description: 'AI-powered advertising platform that generates high-converting static banner ads and social creatives based on performance machine learning models.',
    bestFor: 'Automated multi-variant banner ad generation & CTR scoring',
    workflows: ['AI E-Commerce & Product Branding']
  },
  {
    id: 'canva',
    name: 'Canva',
    pricing: 'Freemium',
    url: 'https://www.canva.com',
    description: 'Accessible graphic design platform offering extensive e-commerce ad templates, batch resizing, and Magic Studio AI tools.',
    bestFor: 'Quick ad template adaptation & multi-size batch resizing',
    workflows: ['AI E-Commerce & Product Branding', 'AI Video & Content Creation', 'AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'klaviyo',
    name: 'Klaviyo',
    pricing: 'Freemium',
    url: 'https://www.klaviyo.com',
    description: 'Leading marketing automation platform for e-commerce, offering behavior-triggered email flows, SMS campaigns, and predictive LTV analytics.',
    bestFor: 'Automated e-commerce lifecycle email & SMS revenue flows',
    workflows: ['AI E-Commerce & Product Branding', 'AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'really-good-emails',
    name: 'Really Good Emails',
    pricing: 'Free',
    url: 'https://reallygoodemails.com',
    description: 'Curated design showcase of top-performing marketing emails and automated lifecycle flows from leading direct-to-consumer brands.',
    bestFor: 'Email design inspiration & responsive layout benchmarks',
    workflows: ['AI E-Commerce & Product Branding']
  },
  {
    id: 'google-analytics-4',
    name: 'Google Analytics 4',
    pricing: 'Free',
    url: 'https://analytics.google.com',
    description: 'Standard web analytics platform tracking e-commerce conversion funnels, checkout drop-off rates, and acquisition channel ROI.',
    bestFor: 'E-commerce checkout funnel tracking & conversion analytics',
    workflows: ['AI E-Commerce & Product Branding', 'AI Copywriting & SEO']
  },
  // AI Data Analytics & Business Intelligence Tools
  {
    id: 'python-pandas',
    name: 'Python Pandas',
    pricing: 'Free',
    url: 'https://pandas.pydata.org',
    description: 'High-performance data manipulation and analysis library featuring DataFrame structures and PyArrow memory integration.',
    bestFor: 'Tabular data cleaning, type casting & vector transformations',
    workflows: ['AI Data Analytics & Business Intelligence']
  },
  {
    id: 'openrefine',
    name: 'OpenRefine',
    pricing: 'Free',
    url: 'https://openrefine.org',
    description: 'Powerful open-source tool for working with messy data: cleaning, transforming, and clustering fuzzy text duplicates.',
    bestFor: 'Fuzzy text deduplication & clustering misspelled strings',
    workflows: ['AI Data Analytics & Business Intelligence']
  },
  {
    id: 'ydata-profiling',
    name: 'ydata-profiling',
    pricing: 'Free',
    url: 'https://github.com/ydataai/ydata-profiling',
    description: 'One-line automated exploratory data analysis profiling tool generating comprehensive HTML distribution and correlation reports.',
    bestFor: 'Automated dataset profiling, skew detection & correlation heatmaps',
    workflows: ['AI Data Analytics & Business Intelligence']
  },
  {
    id: 'jupyter-notebooks',
    name: 'Jupyter Notebooks',
    pricing: 'Free',
    url: 'https://jupyter.org',
    description: 'The de facto interactive computing standard for data science, blending markdown narrative, executable code, and visualizations.',
    bestFor: 'Interactive exploratory data analysis & step-by-step model prototyping',
    workflows: ['AI Data Analytics & Business Intelligence']
  },
  {
    id: 'duckdb',
    name: 'DuckDB',
    pricing: 'Free',
    url: 'https://duckdb.org',
    description: 'High-performance analytical in-process SQL database engine optimized for fast analytical queries on local parquet and CSV files.',
    bestFor: 'Lightning-fast local analytical SQL queries without server infrastructure',
    workflows: ['AI Data Analytics & Business Intelligence']
  },
  {
    id: 'motherduck',
    name: 'MotherDuck',
    pricing: 'Freemium',
    url: 'https://motherduck.com',
    description: 'Serverless cloud analytics platform powered by DuckDB, combining local client compute with collaborative cloud data lakes.',
    bestFor: 'Hybrid local-to-cloud DuckDB collaboration & fast web SQL queries',
    workflows: ['AI Data Analytics & Business Intelligence']
  },
  {
    id: 'sql-workbench',
    name: 'SQL Workbench/J',
    pricing: 'Free',
    url: 'https://www.sql-workbench.eu',
    description: 'DBMS-independent, cross-platform SQL query and data export tool supporting JDBC connections to analytical engines.',
    bestFor: 'Cross-database JDBC query execution & schema exploration',
    workflows: ['AI Data Analytics & Business Intelligence']
  },
  {
    id: 'vanna-ai',
    name: 'Vanna.ai',
    pricing: 'Free',
    url: 'https://vanna.ai',
    description: 'Open-source Python RAG framework for Text-to-SQL that trains on your DDL schemas, documentation, and verified queries.',
    bestFor: 'High-accuracy Text-to-SQL generation using RAG on schema metadata',
    workflows: ['AI Data Analytics & Business Intelligence']
  },
  {
    id: 'dbeaver',
    name: 'DBeaver',
    pricing: 'Free',
    url: 'https://dbeaver.io',
    description: 'Free multi-platform universal database tool for developers, SQL programmers, database administrators and analysts.',
    bestFor: 'Visual database schema inspection, ERD diagrams & query debugging',
    workflows: ['AI Data Analytics & Business Intelligence']
  },
  {
    id: 'cube-js',
    name: 'Cube.js',
    pricing: 'Freemium',
    url: 'https://cube.dev',
    description: 'Universal semantic layer for modern data apps that centralizes metric definitions, access control, and caching.',
    bestFor: 'Single source of truth metric definitions & pre-aggregations',
    workflows: ['AI Data Analytics & Business Intelligence']
  },
  {
    id: 'dbt',
    name: 'dbt (data build tool)',
    pricing: 'Freemium',
    url: 'https://www.getdbt.com',
    description: 'The industry standard SQL transformation workflow tool enabling analytics engineers to modularize, test, and document data models.',
    bestFor: 'Modular SQL transformations, DAG dependency lineage & schema testing',
    workflows: ['AI Data Analytics & Business Intelligence']
  },
  {
    id: 'snowflake',
    name: 'Snowflake',
    pricing: 'Paid',
    url: 'https://www.snowflake.com',
    description: 'Enterprise cloud data warehouse offering decoupled storage and compute, high-concurrency analytical queries, and Cortex AI.',
    bestFor: 'Petabyte-scale enterprise analytics, secure data sharing & Cortex AI SQL',
    workflows: ['AI Data Analytics & Business Intelligence']
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    pricing: 'Free',
    url: 'https://www.postgresql.org',
    description: 'World-leading open-source relational database management system with advanced analytical window functions and indexing.',
    bestFor: 'Analytical warehousing, relational integrity & window functions',
    workflows: ['AI Data Analytics & Business Intelligence', 'AI SaaS & Micro-App Launchpad', 'AI Full-Stack Coding']
  },
  {
    id: 'drawdb',
    name: 'DrawDB',
    pricing: 'Free',
    url: 'https://www.drawdb.app',
    description: 'Free, intuitive, open-source database design tool and SQL generator directly in your browser with zero sign-up.',
    bestFor: 'Interactive ERD diagramming, star schema planning & DDL export',
    workflows: ['AI Data Analytics & Business Intelligence']
  },
  {
    id: 'prophet',
    name: 'Prophet',
    pricing: 'Free',
    url: 'https://facebook.github.io/prophet/',
    description: 'Open-source procedure developed by Meta for forecasting time series data based on an additive model with non-linear trends and seasonality.',
    bestFor: 'Automated business metric forecasting with holiday effects & confidence intervals',
    workflows: ['AI Data Analytics & Business Intelligence']
  },
  {
    id: 'nixtla-timegpt',
    name: 'Nixtla TimeGPT',
    pricing: 'Freemium',
    url: 'https://www.nixtla.io',
    description: 'First foundation model for time series forecasting, capable of zero-shot predictions on enterprise sequential data via simple API calls.',
    bestFor: 'Zero-shot deep learning time-series forecasting & anomaly detection',
    workflows: ['AI Data Analytics & Business Intelligence']
  },
  {
    id: 'statsmodels',
    name: 'Statsmodels',
    pricing: 'Free',
    url: 'https://www.statsmodels.org',
    description: 'Python module providing classes and functions for the estimation of statistical models, hypothesis tests, and data exploration.',
    bestFor: 'Rigorous econometric modeling, statistical significance testing & ARIMA',
    workflows: ['AI Data Analytics & Business Intelligence']
  },
  {
    id: 'scikit-learn',
    name: 'Python Scikit-Learn',
    pricing: 'Free',
    url: 'https://scikit-learn.org',
    description: 'Simple and efficient tools for predictive data analysis, machine learning classification, regression, and clustering algorithms in Python.',
    bestFor: 'Customer churn classification, feature importance ranking & clustering',
    workflows: ['AI Data Analytics & Business Intelligence']
  },
  {
    id: 'mixpanel',
    name: 'Mixpanel',
    pricing: 'Freemium',
    url: 'https://mixpanel.com',
    description: 'Self-serve product analytics solution helping teams track user conversion funnels, retention cohorts, and feature engagement in real time.',
    bestFor: 'Visual cohort retention heatmaps, user journey funnels & churn tracking',
    workflows: ['AI Data Analytics & Business Intelligence']
  },
  {
    id: 'google-colab',
    name: 'Google Colab',
    pricing: 'Freemium',
    url: 'https://colab.research.google.com',
    description: 'Hosted Jupyter notebook service providing free access to cloud GPUs and TPUs with seamless Google Drive integration.',
    bestFor: 'Zero-configuration collaborative Python data science & cloud GPU execution',
    workflows: ['AI Data Analytics & Business Intelligence']
  },
  {
    id: 'beautiful-soup',
    name: 'Beautiful Soup',
    pricing: 'Free',
    url: 'https://www.crummy.com/software/BeautifulSoup/',
    description: 'Python library for pulling data out of HTML and XML files, navigating parse trees, and extracting structured text from web pages.',
    bestFor: 'Targeted HTML DOM parsing & custom competitive data extraction',
    workflows: ['AI Data Analytics & Business Intelligence']
  },
  {
    id: 'metabase',
    name: 'Metabase',
    pricing: 'Free',
    url: 'https://www.metabase.com',
    description: 'Simple, open-source business intelligence tool that lets anyone explore company data, build dashboards, and ask questions without SQL.',
    bestFor: 'Self-serve executive dashboards, drill-down filters & automated email pulses',
    workflows: ['AI Data Analytics & Business Intelligence']
  },
  {
    id: 'apache-superset',
    name: 'Apache Superset',
    pricing: 'Free',
    url: 'https://superset.apache.org',
    description: 'Modern open-source enterprise-level business intelligence web application capable of handling petabyte-scale data explorations.',
    bestFor: 'Enterprise-scale open-source BI dashboards & geospatial charts',
    workflows: ['AI Data Analytics & Business Intelligence']
  },
  {
    id: 'tableau',
    name: 'Tableau',
    pricing: 'Paid',
    url: 'https://www.tableau.com',
    description: 'Industry-leading visual analytics platform transforming raw data into actionable enterprise dashboards and Tableau Pulse AI summaries.',
    bestFor: 'Advanced enterprise visual analytics & automated Tableau Pulse AI metrics',
    workflows: ['AI Data Analytics & Business Intelligence']
  },
  {
    id: 'python',
    name: 'Python',
    pricing: 'Free',
    url: 'https://www.python.org',
    description: 'Versatile high-level programming language that powers modern data engineering, AI agent architectures, and statistical computing.',
    bestFor: 'End-to-end data pipelines, custom statistical algorithms & automation scripts',
    workflows: ['AI Data Analytics & Business Intelligence', 'AI Automation & Agents', 'Local LLMs & Privacy']
  },
  {
    id: 'streamlit',
    name: 'Streamlit',
    pricing: 'Free',
    url: 'https://streamlit.io',
    description: 'Open-source Python framework that turns data scripts into shareable, interactive web apps in minutes with zero frontend code.',
    bestFor: 'Interactive conversational BI applications & custom Python dashboards',
    workflows: ['AI Data Analytics & Business Intelligence']
  },
  // AI YouTube Faceless & Shorts Engine Tools
  {
    id: 'youtube-search',
    name: 'YouTube Search',
    pricing: 'Free',
    url: 'https://www.youtube.com',
    description: 'Native search and incognito filtering tool to inspect competitor view-to-subscriber ratios, upload frequencies, and monetization indicators.',
    bestFor: 'Manual competitor audit & incognito browse validation',
    workflows: ['AI YouTube Faceless & Shorts Engine']
  },
  {
    id: 'hemingway-editor',
    name: 'Hemingway Editor',
    pricing: 'Free',
    url: 'https://hemingwayapp.com',
    description: 'Writing tool that highlights complex sentences, passive voice, and weak adverbs to maximize verbal comprehension.',
    bestFor: 'Sentence simplification, readability scoring & rhythm check',
    workflows: ['AI YouTube Faceless & Shorts Engine', 'AI Copywriting & SEO']
  },
  {
    id: 'google-docs',
    name: 'Google Docs',
    pricing: 'Free',
    url: 'https://docs.google.com',
    description: 'Collaborative word processor for managing production scripts with two-column AV formatting and timestamps.',
    bestFor: 'Two-column AV script structuring & production notes',
    workflows: ['AI YouTube Faceless & Shorts Engine', 'AI Copywriting & SEO']
  },
  {
    id: 'audacity',
    name: 'Audacity',
    pricing: 'Free',
    url: 'https://www.audacityteam.org',
    description: 'Open-source multitrack audio editor for precision vocal mastering, noise gating, EQ curves, and broadcast loudness normalization.',
    bestFor: 'Vocal mastering, EQ curves & loudness normalization',
    workflows: ['AI YouTube Faceless & Shorts Engine']
  },
  {
    id: 'elevenlabs-sfx',
    name: 'ElevenLabs SFX',
    pricing: 'Freemium',
    url: 'https://elevenlabs.io/sound-effects',
    description: 'Frontier AI sound design generator creating custom foley, futuristic whooshes, cinematic risers, and ambient atmospheres from text prompts.',
    bestFor: 'Custom AI cinematic sound effects & foley design',
    workflows: ['AI YouTube Faceless & Shorts Engine', 'AI Video & Content Creation']
  },
  {
    id: 'youtube-studio',
    name: 'YouTube Studio Test & Compare',
    pricing: 'Free',
    url: 'https://studio.youtube.com',
    description: "YouTube's native multi-variant thumbnail testing tool that splits impressions among up to 3 thumbnails and identifies the watch-time winner.",
    bestFor: 'Automated 3-way thumbnail A/B testing & watch-time share metrics',
    workflows: ['AI YouTube Faceless & Shorts Engine']
  },
  // AI Digital Marketing & Ad Funnels Tools
  {
    id: 'meta-ad-library',
    name: 'Meta Ad Library',
    pricing: 'Free',
    url: 'https://www.facebook.com/ads/library',
    description: "Meta's public repository of all active advertisements running across Facebook, Instagram, Messenger, and Audience Network.",
    bestFor: 'Real-time competitor ad audit & active longevity tracking',
    workflows: ['AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'foreplay',
    name: 'Foreplay',
    pricing: 'Paid',
    url: 'https://www.foreplay.co',
    description: 'Ad spy and swipe file platform that saves Meta and TikTok ads permanently into cloud folders with automatic transcription.',
    bestFor: 'Saving permanent ad swipe files & automatic transcript analysis',
    workflows: ['AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'google-tag-manager',
    name: 'Google Tag Manager',
    pricing: 'Free',
    url: 'https://tagmanager.google.com',
    description: 'Enterprise tag management system supporting client-side scripts and server-side container deployments for zero-data-loss tracking.',
    bestFor: 'Server-side tag management & custom event triggers',
    workflows: ['AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'meta-conversions-api',
    name: 'Meta Conversions API',
    pricing: 'Free',
    url: 'https://developers.facebook.com/docs/marketing-api/conversions-api/',
    description: "Direct server-to-server connection transmitting web conversion events straight from your backend to Meta's ad delivery algorithm.",
    bestFor: 'Bypassing ad-blockers & boosting Meta Event Match Quality',
    workflows: ['AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'triple-whale',
    name: 'Triple Whale',
    pricing: 'Paid',
    url: 'https://www.triplewhale.com',
    description: 'AI-native e-commerce attribution and analytics operating system tracking blended ROAS, first-click, and post-purchase surveys.',
    bestFor: 'Multi-touch attribution, blended ROAS & creative analytics',
    workflows: ['AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'unbounce',
    name: 'Unbounce',
    pricing: 'Paid',
    url: 'https://unbounce.com',
    description: 'Pioneering landing page platform featuring Smart Traffic AI optimization that automatically routes visitors to the highest-converting page variant.',
    bestFor: 'AI multi-variant traffic routing & landing page A/B testing',
    workflows: ['AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'typeform',
    name: 'Typeform',
    pricing: 'Freemium',
    url: 'https://www.typeform.com',
    description: 'Conversational multi-step form and survey platform designed for high-engagement mobile quizzes with smooth card transitions.',
    bestFor: 'Conversational mobile quizzes & multi-branch logic',
    workflows: ['AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'activecampaign',
    name: 'ActiveCampaign',
    pricing: 'Paid',
    url: 'https://www.activecampaign.com',
    description: 'Enterprise marketing automation and CRM platform with multi-channel branching logic, site tracking, and lead scoring.',
    bestFor: 'Complex conditional branching logic & B2B lead scoring',
    workflows: ['AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'meta-ads-manager',
    name: 'Meta Ads Manager',
    pricing: 'Free',
    url: 'https://adsmanager.facebook.com',
    description: 'Enterprise campaign management and auction delivery tool for scaling paid acquisition across Facebook, Instagram, and Reels.',
    bestFor: 'Advantage+ campaign scaling, budget allocation & auction insights',
    workflows: ['AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'google-ads',
    name: 'Google Ads',
    pricing: 'Free',
    url: 'https://ads.google.com',
    description: 'World-leading search and intent-based advertising platform featuring Performance Max, Search keyword auctions, and YouTube ads.',
    bestFor: 'High-intent search capture, Performance Max & YouTube ads',
    workflows: ['AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'revealbot',
    name: 'Revealbot',
    pricing: 'Paid',
    url: 'https://revealbot.com',
    description: 'Automated media buying software that executes automated scaling and stop-loss rules across Meta, Google, and TikTok ad accounts.',
    bestFor: 'Automated stop-loss ad rules & automated budget scaling',
    workflows: ['AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'motion-creative-analytics',
    name: 'Motion Creative Analytics',
    pricing: 'Paid',
    url: 'https://motionapp.com',
    description: 'Visual creative analytics tool for media buyers that visualizes Thumbstop, Hold Rate, and ROAS across video and static ad assets.',
    bestFor: 'Creative analytics, Thumbstop / Hold Rate audits & visual reporting',
    workflows: ['AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'supermetrics',
    name: 'Supermetrics',
    pricing: 'Paid',
    url: 'https://supermetrics.com',
    description: 'Enterprise marketing data pipeline that pulls automated ad spend, attribution, and creative metrics into Google Sheets and BigQuery.',
    bestFor: 'Automated multi-platform marketing data pipelines & dashboards',
    workflows: ['AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'microsoft-clarity',
    name: 'Microsoft Clarity',
    pricing: 'Free',
    url: 'https://clarity.microsoft.com',
    description: 'Free, GDPR-compliant behavioral analysis tool providing session recordings, heatmaps, and automated rage-click detection.',
    bestFor: 'Free session recordings, heatmaps & rage-click audits',
    workflows: ['AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'vwo',
    name: 'VWO',
    pricing: 'Paid',
    url: 'https://vwo.com',
    description: 'Enterprise experimentation and A/B testing platform offering visual page editors, Bayesian statistical engines, and multi-variant tests.',
    bestFor: 'Enterprise visual A/B testing & Bayesian statistical validation',
    workflows: ['AI Digital Marketing & Ad Funnels']
  },
  {
    id: 'mintlify',
    name: 'Mintlify',
    pricing: 'Freemium',
    url: 'https://mintlify.com',
    description: 'Developer-first documentation platform featuring interactive MDX components, automated API playground generation, and GitHub sync.',
    bestFor: 'Turnkey developer documentation portals & interactive MDX components',
    workflows: ['AI Technical Writing & Docs Engineering']
  },
  {
    id: 'fumadocs',
    name: 'Fumadocs',
    pricing: 'Free',
    url: 'https://fumadocs.vercel.app',
    description: 'High-performance Next.js and Tailwind CSS documentation framework supporting full TypeScript type safety and search index generation.',
    bestFor: 'Custom Next.js App Router docs engineering & headless MDX setups',
    workflows: ['AI Technical Writing & Docs Engineering']
  },
  {
    id: 'nextra',
    name: 'Nextra',
    pricing: 'Free',
    url: 'https://nextra.site',
    description: 'Next.js static site generator for documentation with automated sidebar generation, syntax highlighting, and minimal configuration.',
    bestFor: 'Lightweight Git-backed Markdown/MDX documentation sites',
    workflows: ['AI Technical Writing & Docs Engineering']
  },
  {
    id: 'repomix',
    name: 'Repomix',
    pricing: 'Free',
    url: 'https://repomix.com',
    description: 'CLI tool that packages entire Git codebases into single, token-optimized context files ready for LLM consumption.',
    bestFor: 'Packing multi-file repositories into token-efficient LLM contexts',
    workflows: ['AI Technical Writing & Docs Engineering']
  },
  {
    id: 'stackblitz',
    name: 'StackBlitz',
    pricing: 'Freemium',
    url: 'https://stackblitz.com',
    description: 'Instant in-browser WebContainer development environment that boots full Node.js runtimes inside browser tabs with zero install.',
    bestFor: 'Runnable browser-based Quickstart sandboxes & zero-install demos',
    workflows: ['AI Technical Writing & Docs Engineering']
  },
  {
    id: 'codesandbox',
    name: 'CodeSandbox',
    pricing: 'Freemium',
    url: 'https://codesandbox.io',
    description: 'Cloud development platform for creating collaborative sandboxes, interactive embed widgets, and live component previews.',
    bestFor: 'Live interactive component sandboxes & embeddable dev containers',
    workflows: ['AI Technical Writing & Docs Engineering']
  },
  {
    id: 'scalar',
    name: 'Scalar',
    pricing: 'Free',
    url: 'https://scalar.com',
    description: 'Modern, open-source OpenAPI reference generator and interactive API playground with built-in request testing and client code generation.',
    bestFor: 'Interactive Try It API playgrounds & modern OpenAPI 3.1 visualization',
    workflows: ['AI Technical Writing & Docs Engineering']
  },
  {
    id: 'redocly',
    name: 'Redocly',
    pricing: 'Freemium',
    url: 'https://redocly.com',
    description: 'Enterprise OpenAPI linting, styling, and documentation suite that enforces strict REST API standards across engineering teams.',
    bestFor: 'OpenAPI schema linting, multi-file bundling & contract validation',
    workflows: ['AI Technical Writing & Docs Engineering']
  },
  {
    id: 'mermaid-js',
    name: 'Mermaid.js',
    pricing: 'Free',
    url: 'https://mermaid.js.org',
    description: 'Markdown-inspired text-to-diagramming language that renders sequence diagrams, flowcharts, and state machines natively in web browsers.',
    bestFor: 'Version-controlled text diagrams, sequence flows & state machines',
    workflows: ['AI Technical Writing & Docs Engineering']
  },
  {
    id: 'excalidraw',
    name: 'Excalidraw',
    pricing: 'Freemium',
    url: 'https://excalidraw.com',
    description: 'Virtual collaborative whiteboard for sketching hand-drawn style architecture diagrams, system topologies, and conceptual illustrations.',
    bestFor: 'Hand-drawn architectural sketches & conceptual system overviews',
    workflows: ['AI Technical Writing & Docs Engineering', 'AI Cybersecurity & Code Auditing']
  },
  {
    id: 'vale',
    name: 'Vale',
    pricing: 'Free',
    url: 'https://vale.sh',
    description: 'Open-source, command-line linter for prose that enforces editorial style guides, vocabulary rules, and grammar standards across Markdown and MDX.',
    bestFor: 'Automated prose linting, style guide enforcement & vocabulary control',
    workflows: ['AI Technical Writing & Docs Engineering']
  },
  {
    id: 'google-developer-style-guide',
    name: 'Google Developer Style Guide',
    pricing: 'Free',
    url: 'https://developers.google.com/style',
    description: 'Authoritative editorial guidelines and word lists for writing clear, concise, and accessible technical documentation.',
    bestFor: 'Authoritative technical writing rules, grammar conventions & word lists',
    workflows: ['AI Technical Writing & Docs Engineering']
  },
  {
    id: 'github-actions',
    name: 'GitHub Actions',
    pricing: 'Freemium',
    url: 'https://github.com/features/actions',
    description: 'CI/CD workflow automation platform used to run prose linters, drift detection gates, and automated docs preview builds.',
    bestFor: 'Automated CI docs linting, drift detection & preview deployments',
    workflows: ['AI Technical Writing & Docs Engineering', 'AI Cybersecurity & Code Auditing']
  },
  {
    id: 'swimm',
    name: 'Swimm',
    pricing: 'Freemium',
    url: 'https://swimm.io',
    description: 'Developer-centric knowledge platform that couples live code snippets with documentation, automatically alerting developers when code drifts.',
    bestFor: 'Code-coupled documentation & automated drift verification',
    workflows: ['AI Technical Writing & Docs Engineering']
  },
  {
    id: 'inkeep',
    name: 'Inkeep',
    pricing: 'Paid',
    url: 'https://inkeep.com',
    description: 'AI search and support agent platform built specifically for developer documentation, GitHub repos, and developer communities.',
    bestFor: 'AI-native Ask AI search modals, verified RAG answers & support deflection',
    workflows: ['AI Technical Writing & Docs Engineering']
  },
  {
    id: 'algolia-docsearch',
    name: 'Algolia DocSearch',
    pricing: 'Free',
    url: 'https://docsearch.algolia.com',
    description: 'The gold standard for developer documentation search, offering instant sub-10ms keyword and semantic search indexing.',
    bestFor: 'Sub-10ms developer documentation search indexing & keyboard shortcuts',
    workflows: ['AI Technical Writing & Docs Engineering']
  },
  {
    id: 'firecrawl',
    name: 'Firecrawl',
    pricing: 'Freemium',
    url: 'https://www.firecrawl.dev',
    description: 'Turn entire documentation websites into clean, LLM-ready Markdown and structured datasets with a single API call.',
    bestFor: 'Scraping & generating clean Markdown datasets from web documentation',
    workflows: ['AI Technical Writing & Docs Engineering']
  },
  {
    id: 'release-please',
    name: 'Release Please',
    pricing: 'Free',
    url: 'https://github.com/googleapis/release-please',
    description: 'Google automated release bot that parses conventional commits to create release PRs, bump semantic versions, and generate human-readable changelogs.',
    bestFor: 'Automated semantic versioning, changelog generation & release PRs',
    workflows: ['AI Technical Writing & Docs Engineering']
  },
  {
    id: 'owasp-threat-dragon',
    name: 'OWASP Threat Dragon',
    pricing: 'Free',
    url: 'https://owasp.org/www-project-threat-dragon/',
    description: 'Open-source threat modeling tool used to create system data flow diagrams and record threats using the STRIDE methodology.',
    bestFor: 'Visual threat modeling diagrams & STRIDE rule verification',
    workflows: ['AI Cybersecurity & Code Auditing']
  },
  {
    id: 'gitleaks',
    name: 'Gitleaks',
    pricing: 'Free',
    url: 'https://gitleaks.io',
    description: 'Fast, light-weight, open-source static analysis tool for detecting and preventing hardcoded secrets like passwords and API keys in git repos.',
    bestFor: 'Pre-commit secret blocking & staged git commit scanning',
    workflows: ['AI Cybersecurity & Code Auditing']
  },
  {
    id: 'trufflehog',
    name: 'TruffleHog',
    pricing: 'Free',
    url: 'https://trufflesecurity.com',
    description: 'Deep secret scanner analyzing entire Git commit histories, verifying whether discovered credentials are live and active against real APIs.',
    bestFor: 'Historical repository secret scanning & live API token verification',
    workflows: ['AI Cybersecurity & Code Auditing']
  },
  {
    id: 'doppler',
    name: 'Doppler',
    pricing: 'Freemium',
    url: 'https://www.doppler.com',
    description: 'Universal secret management platform that orchestrates encrypted environment variables across dev, staging, and production environments.',
    bestFor: 'Centralized secret management & encrypted environment sync',
    workflows: ['AI Cybersecurity & Code Auditing']
  },
  {
    id: 'socket-dev',
    name: 'Socket.dev',
    pricing: 'Freemium',
    url: 'https://socket.dev',
    description: 'Supply chain security platform that inspects open-source packages for install scripts, network access, environment exfiltration, and slopsquatting.',
    bestFor: 'Supply chain attack detection, install script audits & typosquatting defense',
    workflows: ['AI Cybersecurity & Code Auditing']
  },
  {
    id: 'snyk',
    name: 'Snyk',
    pricing: 'Freemium',
    url: 'https://snyk.io',
    description: 'Developer-first security platform continuously monitoring application dependencies, container images, and configurations for known CVEs.',
    bestFor: 'Dependency vulnerability scanning, automated CVE patching & SCA',
    workflows: ['AI Cybersecurity & Code Auditing']
  },
  {
    id: 'dependabot',
    name: 'GitHub Dependabot',
    pricing: 'Free',
    url: 'https://github.com/dependabot',
    description: 'Automated vulnerability scanner built into GitHub that detects outdated dependencies and automatically creates pull requests with patches.',
    bestFor: 'Automated dependency updates & pull request security alerts',
    workflows: ['AI Cybersecurity & Code Auditing']
  },
  {
    id: 'semgrep',
    name: 'Semgrep',
    pricing: 'Freemium',
    url: 'https://semgrep.dev',
    description: 'Fast, open-source static analysis engine for finding bugs, detecting security vulnerabilities, and enforcing code standards using semantic patterns.',
    bestFor: 'Deterministic SAST scanning, custom security rules & PR gating',
    workflows: ['AI Cybersecurity & Code Auditing']
  },
  {
    id: 'sonarqube',
    name: 'SonarQube',
    pricing: 'Freemium',
    url: 'https://www.sonarsource.com/products/sonarqube/',
    description: 'Enterprise continuous inspection platform that evaluates code quality, security hotspots, and technical debt across 30+ languages.',
    bestFor: 'Enterprise security hotspot analysis & comprehensive code quality metrics',
    workflows: ['AI Cybersecurity & Code Auditing']
  },
  {
    id: 'burp-suite',
    name: 'Burp Suite',
    pricing: 'Freemium',
    url: 'https://portswigger.net/burp',
    description: 'Industry-standard web application security testing proxy used to intercept, tamper with, and audit authentication headers and IDOR parameters.',
    bestFor: 'Intercepting HTTP requests, IDOR testing & authorization tampering',
    workflows: ['AI Cybersecurity & Code Auditing']
  },
  {
    id: 'dompurify',
    name: 'DOMPurify',
    pricing: 'Free',
    url: 'https://github.com/cure53/DOMPurify',
    description: 'DOM-only, super-fast, ultra-tolerant XSS sanitizer for HTML, MathML, and SVG that strips dangerous scripts and malicious attributes.',
    bestFor: 'Client-side and server-side HTML sanitization for rich text',
    workflows: ['AI Cybersecurity & Code Auditing']
  },
  {
    id: 'lakera-guard',
    name: 'Lakera Guard',
    pricing: 'Freemium',
    url: 'https://www.lakera.ai',
    description: 'Developer-first AI security platform providing real-time API endpoints to detect prompt injection, jailbreaks, PII leaks, and malicious inputs in sub-50ms.',
    bestFor: 'Real-time prompt injection detection & LLM firewalling',
    workflows: ['AI Cybersecurity & Code Auditing']
  },
  {
    id: 'meta-llama-guard',
    name: 'Meta Llama Guard',
    pricing: 'Free',
    url: 'https://llama.meta.com/docs/model-cards-and-prompt-formats/llama-guard-3/',
    description: 'Open-weights safety classifier model fine-tuned on the MLCommons taxonomy to detect unsafe inputs and outputs across 14 hazard categories.',
    bestFor: 'Self-hosted LLM input/output moderation & content safety classification',
    workflows: ['AI Cybersecurity & Code Auditing']
  },
  {
    id: 'nemo-guardrails',
    name: 'NeMo Guardrails',
    pricing: 'Free',
    url: 'https://github.com/NVIDIA/NeMo-Guardrails',
    description: "NVIDIA's open-source toolkit for building trustworthy, safe LLM conversational systems using programmable Colang guardrail flows.",
    bestFor: 'Programmable dialogue rails, topical boundaries & hallucination blocking',
    workflows: ['AI Cybersecurity & Code Auditing']
  },
  {
    id: 'promptfoo',
    name: 'Promptfoo',
    pricing: 'Free',
    url: 'https://www.promptfoo.dev',
    description: 'Open-source CLI tool and library for automated red-teaming, evaluating LLM output quality, and detecting prompt injection vulnerabilities in CI/CD.',
    bestFor: 'Automated LLM red-teaming, jailbreak scanning & CI regression testing',
    workflows: ['AI Cybersecurity & Code Auditing']
  },
  {
    id: 'microsoft-pyrit',
    name: 'Microsoft PyRIT',
    pricing: 'Free',
    url: 'https://github.com/Azure/PyRIT',
    description: 'The Python Risk Identification Tool for generative AI, built by Microsoft to automate red-teaming across text, vision, and multi-turn workflows.',
    bestFor: 'Enterprise automated AI red-teaming & multi-turn attack simulation',
    workflows: ['AI Cybersecurity & Code Auditing']
  },
  {
    id: 'e2b-code-interpreter',
    name: 'E2B Code Interpreter',
    pricing: 'Freemium',
    url: 'https://e2b.dev',
    description: 'Secure, open-source cloud microVM sandboxes built specifically for executing AI-generated code and running autonomous agent workflows safely.',
    bestFor: 'Ephemeral AI code sandboxing, microVM isolation & agent execution',
    workflows: ['AI Cybersecurity & Code Auditing']
  },
  {
    id: 'anthropic-mcp',
    name: 'Anthropic Model Context Protocol (MCP)',
    pricing: 'Free',
    url: 'https://modelcontextprotocol.io',
    description: 'Open standard for connecting AI assistants and agents securely to external systems, databases, developer tools, and filesystems.',
    bestFor: 'Model Context Protocol security, tool permissions & least-privilege scoping',
    workflows: ['AI Cybersecurity & Code Auditing']
  },
  {
    id: 'arcjet',
    name: 'Arcjet',
    pricing: 'Freemium',
    url: 'https://arcjet.com',
    description: 'Security platform for developers that integrates rate limiting, bot protection, email validation, and defense against brute force attacks natively into code.',
    bestFor: 'Next.js & Node.js edge rate limiting, bot detection & wallet protection',
    workflows: ['AI Cybersecurity & Code Auditing']
  },
  {
    id: 'upstash-ratelimit',
    name: 'Upstash Ratelimit',
    pricing: 'Freemium',
    url: 'https://upstash.com',
    description: 'Serverless, distributed rate-limiting library powered by Redis sliding-window algorithms designed for edge and serverless runtimes.',
    bestFor: 'Distributed Redis sliding-window rate limiting & quota enforcement',
    workflows: ['AI Cybersecurity & Code Auditing']
  },
  {
    id: 'owasp-zap',
    name: 'OWASP ZAP',
    pricing: 'Free',
    url: 'https://www.zaproxy.org',
    description: "The world's most widely used open-source web application security scanner for discovering vulnerabilities during development and testing.",
    bestFor: 'Dynamic Application Security Testing (DAST), automated crawling & vulnerability scanning',
    workflows: ['AI Cybersecurity & Code Auditing']
  },
  {
    id: 'projectdiscovery-nuclei',
    name: 'ProjectDiscovery Nuclei',
    pricing: 'Free',
    url: 'https://projectdiscovery.io',
    description: 'Fast, community-powered vulnerability scanner sending template-based requests across web targets to find zero-days and misconfigurations.',
    bestFor: 'Template-based fast vulnerability scanning & API endpoint fuzzing',
    workflows: ['AI Cybersecurity & Code Auditing']
  },
  {
    id: 'caido',
    name: 'Caido',
    pricing: 'Freemium',
    url: 'https://caido.io',
    description: 'Lightweight, modern web security auditing proxy built in Rust, designed to inspect HTTP traffic, tamper with payloads, and detect race conditions.',
    bestFor: 'Modern HTTP proxy inspection, payload tampering & concurrency testing',
    workflows: ['AI Cybersecurity & Code Auditing']
  },
  {
    id: 'github-advanced-security',
    name: 'GitHub Advanced Security',
    pricing: 'Paid',
    url: 'https://github.com/features/security',
    description: 'Enterprise security suite featuring CodeQL semantic code analysis, secret scanning push protection, and automated pull request security gates.',
    bestFor: 'Enterprise CodeQL scanning, push protection & automated PR gates',
    workflows: ['AI Cybersecurity & Code Auditing']
  },
  {
    id: 'voyage-ai',
    name: 'Voyage AI',
    pricing: 'Freemium',
    url: 'https://www.voyageai.com',
    description: 'State-of-the-art domain-specific embedding models optimized for finance, code retrieval, and enterprise RAG search.',
    bestFor: 'High-precision domain embeddings for enterprise RAG and code search',
    workflows: ['Full-Stack AI Engineer']
  },
  {
    id: 'browserbase',
    name: 'Browserbase',
    pricing: 'Freemium',
    url: 'https://www.browserbase.com',
    description: 'Developer platform for running headless Playwright browsers at scale with built-in stealth, residential proxies, and session replay.',
    bestFor: 'Headless browser automation for AI agents & complex web interaction',
    workflows: ['Full-Stack AI Engineer']
  },
  {
    id: 'braintrust',
    name: 'Braintrust',
    pricing: 'Freemium',
    url: 'https://www.braintrust.dev',
    description: 'Enterprise evaluation, proxy, and logging platform designed to track model accuracy, RAG Triad regressions, and dataset curation.',
    bestFor: 'Continuous LLM evaluation, golden dataset curation & regression tracking',
    workflows: ['Full-Stack AI Engineer']
  },
  {
    id: 'model-context-protocol-sdk',
    name: 'Model Context Protocol (MCP) SDK',
    pricing: 'Free',
    url: 'https://modelcontextprotocol.io',
    description: 'Open-source protocol SDK providing standardized Resources, Prompts, and Tools connectivity for LLM applications and desktop clients.',
    bestFor: 'Standardized client-server tool integration & universal AI context access',
    workflows: ['Full-Stack AI Engineer']
  },
  {
    id: 'notebooklm',
    name: 'Google NotebookLM',
    pricing: 'Free',
    url: 'https://notebooklm.google.com',
    description: 'AI-first personalized research assistant powered by Gemini 1.5 Pro with grounded citations across source documents and user interviews.',
    bestFor: 'Synthesizing user interview transcripts, grounded UX insights & thematic analysis',
    workflows: ['AI Product & UI/UX Designer']
  },
  {
    id: 'radix-colors',
    name: 'Radix Colors',
    pricing: 'Free',
    url: 'https://www.radix-ui.com/colors',
    description: 'Accessible, comprehensive color system for digital products designed with automatic dark mode parity and WCAG contrast compliance.',
    bestFor: 'Semantic color scales, 12-step design tokens & accessible dark mode palettes',
    workflows: ['AI Product & UI/UX Designer']
  },
  {
    id: 'phosphor-icons',
    name: 'Phosphor Icons',
    pricing: 'Free',
    url: 'https://phosphoricons.com',
    description: 'Flexible, open-source icon family with 6 distinct weights and comprehensive Figma component library support.',
    bestFor: 'Design system icon libraries, multi-weight iconography & UI component states',
    workflows: ['AI Product & UI/UX Designer']
  },
  {
    id: 'raycast',
    name: 'Raycast',
    pricing: 'Freemium',
    url: 'https://www.raycast.com',
    description: 'Blazingly fast, extensible launcher and productivity tool that defines modern Cmd+K navigation and AI extension patterns.',
    bestFor: 'Command palette UX benchmarks, keyboard-first navigation & extension design',
    workflows: ['AI Product & UI/UX Designer']
  },
  {
    id: 'tldraw',
    name: 'tldraw',
    pricing: 'Open Source',
    url: 'https://www.tldraw.com',
    description: 'Infinite collaborative canvas SDK and whiteboard application with deep support for multimodal AI vision generation and sketch-to-UI.',
    bestFor: 'Infinite canvas UX, spatial AI interfaces & multimodal sketch-to-code workflows',
    workflows: ['AI Product & UI/UX Designer']
  },
  {
    id: 'clay',
    name: 'Clay',
    pricing: 'Freemium',
    url: 'https://www.clay.com',
    description: 'Data enrichment platform connecting 75+ data providers, web scrapers, and AI models to automate outbound sales research.',
    bestFor: 'Autonomous lead enrichment, data waterfall cascades & outbound intelligence',
    workflows: ['AI Automation & Ops Architect']
  },
  {
    id: 'apollo-io',
    name: 'Apollo.io',
    pricing: 'Freemium',
    url: 'https://www.apollo.io',
    description: 'B2B lead intelligence and sales engagement platform with contact verification, company firmographics, and REST APIs.',
    bestFor: 'B2B contact verification, firmographic enrichment & outbound workflows',
    workflows: ['AI Automation & Ops Architect']
  },
  {
    id: 'jsonata',
    name: 'JSONata',
    pricing: 'Free',
    url: 'https://jsonata.org',
    description: 'Lightweight JSON query and transformation language for filtering, reshaping, and mapping complex nested payloads.',
    bestFor: 'Declarative JSON payload transformations & schema normalization in n8n/Make',
    workflows: ['AI Automation & Ops Architect']
  },
  {
    id: 'mistral-ocr',
    name: 'Mistral OCR API',
    pricing: 'Usage-Based',
    url: 'https://mistral.ai',
    description: 'State-of-the-art multimodal document parsing and OCR engine that extracts structured markdown from complex PDFs and tables.',
    bestFor: 'Document OCR, multi-page financial PDF extraction & table parsing',
    workflows: ['AI Automation & Ops Architect']
  },
  {
    id: 'fireflies-ai',
    name: 'Fireflies.ai',
    pricing: 'Freemium',
    url: 'https://fireflies.ai',
    description: 'AI meeting assistant that transcribes, summarizes, and extracts action items from video calls with deep CRM integrations.',
    bestFor: 'Meeting transcript intelligence, automated CRM deal notes & action extraction',
    workflows: ['AI Automation & Ops Architect']
  },
  {
    id: 'upstash-qstash',
    name: 'Upstash QStash',
    pricing: 'Freemium',
    url: 'https://upstash.com/docs/qstash/overall/getstarted',
    description: 'Serverless message queue and task scheduler built for microservices and webhooks with automatic retries and deduplication.',
    bestFor: 'Serverless task queuing, webhook dead-letter queues & automated retry logic',
    workflows: ['AI Automation & Ops Architect']
  },
  {
    id: 'infisical',
    name: 'Infisical',
    pricing: 'Freemium',
    url: 'https://infisical.com',
    description: 'Open-source secret management platform that syncs environment variables and API keys securely across team infrastructures.',
    bestFor: 'Enterprise secret rotation, audit logging & automated credential sync',
    workflows: ['AI Automation & Ops Architect']
  },
  {
    id: 'dataforseo',
    name: 'DataForSEO API',
    pricing: 'Usage-Based',
    url: 'https://dataforseo.com',
    description: 'Comprehensive SEO, SERP, and keyword database API providing real-time search volume, intent classification, and backlink data.',
    bestFor: 'Programmatic SEO keyword volume APIs, intent clustering & SERP analysis',
    workflows: ['AI Growth & Performance Marketer']
  },
  {
    id: 'arcads',
    name: 'Arcads AI',
    pricing: 'Paid',
    url: 'https://www.arcads.ai',
    description: 'AI video generation platform transforming direct-response ad scripts into realistic UGC-style video ads featuring AI actors.',
    bestFor: 'Direct-response UGC video ads, actor lip-sync & rapid hook testing',
    workflows: ['AI Growth & Performance Marketer']
  },
  {
    id: 'customer-io',
    name: 'Customer.io',
    pricing: 'Paid',
    url: 'https://customer.io',
    description: 'Automated messaging platform for tech companies to craft behavioral, data-driven lifecycle emails, push notifications, and SMS campaigns.',
    bestFor: 'Event-driven lifecycle onboarding, product activation flows & behavioral segmentation',
    workflows: ['AI Growth & Performance Marketer']
  },
  {
    id: 'meta-ad-library',
    name: 'Meta Ad Library',
    pricing: 'Free',
    url: 'https://www.facebook.com/ads/library',
    description: 'Comprehensive public database of all active advertisements running across Facebook, Instagram, Messenger, and Audience Network.',
    bestFor: 'Competitor ad creative deconstruction, longevity analysis & hook extraction',
    workflows: ['AI Growth & Performance Marketer']
  },
  {
    id: 'tiktok-creative-center',
    name: 'TikTok Creative Center',
    pricing: 'Free',
    url: 'https://ads.tiktok.com/business/creativecenter',
    description: 'Official TikTok trend intelligence and creative showcase displaying top-performing ad creatives, trending music, and hashtag analytics.',
    bestFor: 'Trending audio intelligence, viral hook structures & top-performing TikTok ad formats',
    workflows: ['AI Growth & Performance Marketer']
  }
];


