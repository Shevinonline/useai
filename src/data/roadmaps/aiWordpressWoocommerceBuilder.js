// Complete production-grade steps data for "AI WordPress & WooCommerce Builder" Roadmap (12 Nodes)

export const aiWordpressWoocommerceBuilderData = {
  id: "ai-wordpress-woocommerce-builder",
  title: "AI WordPress & WooCommerce Builder",
  description: "Build, customize, and optimize high-converting WordPress sites, custom plugins, and WooCommerce stores with AI.",
  category: "Role & Workflow Roadmaps",
  stepCount: 12,
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: Architecture, Local Setup & AI Wireframing",
      description: "Spin up isolated local staging environments, blueprint reusable starter stacks, structure AI sitemaps, and configure lightweight theme tokens."
    },
    {
      id: "phase-2",
      title: "Phase 2: AI Page Building, Dynamic Data & Custom Plugins",
      description: "Build responsive flexbox layouts, inject AI-generated scoped CSS/JS, model relational Custom Post Types with ACF, and vibe-code bespoke plugins."
    },
    {
      id: "phase-3",
      title: "Phase 3: WooCommerce Storefront, Checkout & Automation",
      description: "Populate SEO-rich variable product catalogs, deploy high-converting one-page checkouts with express wallets, and automate post-purchase webhooks."
    },
    {
      id: "phase-4",
      title: "Phase 4: Technical SEO, Core Web Vitals & Hardened Production",
      description: "Inject automated JSON-LD schemas, configure Redis object caching and asset stripping for 95+ PageSpeed, and enforce air-tight firewall security."
    }
  ],
  steps: [
    // Node 1
    {
      id: "step-1",
      stepNumber: 1,
      phaseId: "phase-1",
      title: "Local Environment & Instant Staging Blueprints",
      timeEstimate: "30 mins",
      difficulty: "Beginner",
      summary: "Spin up isolated local WordPress environments and reusable starter blueprints with pre-configured settings in under 60 seconds.",
      description: "Developing directly on live production servers or wrestling with bloated shared cPanel hosting is the primary cause of broken client sites, plugin collision white-screens, and glacial development cycles. Modern WordPress engineering starts in sandboxed local runtimes (LocalWP) or cloud-ephemeral sandboxes (InstaWP and ZipWP). By pre-configuring a standardized 'Gold Master' blueprint—including PHP 8.3, Nginx, MariaDB, WP-CLI, object cache stubs, and disabled auto-updates—developers eliminate repetitive boilerplate setup and can test plugin updates risk-free.",
      playbook: {
        setup: "Install LocalWP on macOS/Windows/Linux, or create an InstaWP account for team cloud sandboxing. Ensure PHP 8.3 and Nginx web server are selected.",
        execute: "Spin up a fresh sandbox using your standardized blueprint. Run the initialization script via WP-CLI: configure pretty permalinks (`wp rewrite structure '/%postname%/'`), delete default dummy posts/comments (`wp post delete 1 --force`), disable WordPress cron in `wp-config.php` in favor of system cron, and set memory limit to 512MB (`define('WP_MEMORY_LIMIT', '512M');`).",
        verify: "Run `wp core is-installed && wp doctor check` via terminal. Confirm that the site loads locally under 150ms with zero PHP deprecation notices and that SSL certificates are trusted."
      },
      tools: [
        {
          name: "LocalWP",
          type: "Free",
          url: "https://localwp.com",
          description: "Premier local WordPress development tool featuring instant site creation, PHP/MySQL version switching, MailHog email catching, and live shareable tunnels.",
          bestFor: "Zero-latency offline local development & blueprints"
        },
        {
          name: "InstaWP",
          type: "Freemium",
          url: "https://instawp.com",
          description: "Cloud-based ephemeral WordPress sandbox generator creating disposable staging environments, template blueprints, and 1-click client handoff links.",
          bestFor: "Cloud staging sandboxes & client demo links"
        },
        {
          name: "ZipWP",
          type: "Freemium",
          url: "https://zipwp.com",
          description: "AI-native WordPress website scaffolding engine that generates fully functional, content-complete WordPress sites in 60 seconds from business prompts.",
          bestFor: "Instant AI website scaffolding & starter blueprints"
        }
      ],
      callouts: {
        mistake: "Building directly on live hosting environments without staging isolation, risking catastrophic downtime during plugin updates.",
        proTip: "Save your fully configured LocalWP site as a 'Blueprint' to clone fresh client builds in 30 seconds with your favorite themes and plugins pre-installed.",
        mistakes: [
          "Developing on live production servers, risking fatal white-screen errors and leaking in-progress staging content to search engines.",
          "Accepting default 64MB or 128MB WordPress PHP memory limits, causing fatal memory exhausted errors when running WooCommerce.",
          "Leaving default 'Just another WordPress site' taglines and sample 'Hello World' posts indexed in staging environments."
        ],
        proTips: [
          "Export your pristine starter site in LocalWP as a custom blueprint containing your core child theme, security headers, and dev plugins.",
          "Use MailHog (built into LocalWP) to test WooCommerce order confirmation emails locally without sending real emails to customer inboxes.",
          "Enable `WP_DEBUG`, `WP_DEBUG_LOG`, and `SAVEQUERIES` during local development to catch hidden N+1 database queries early."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / ChatGPT o3-mini",
        variables: [
          {
            id: "siteType",
            label: "Site Archetype",
            options: [
              "High-Volume WooCommerce Store",
              "B2B Professional Services / Agency",
              "Membership Community / LMS Portal"
            ],
            defaultOption: "High-Volume WooCommerce Store"
          },
          {
            id: "environment",
            label: "Hosting Stack",
            options: [
              "LocalWP (Nginx + PHP 8.3 + MariaDB)",
              "Cloudways / VPS (Varnish + Redis + Nginx)",
              "InstaWP Cloud Ephemeral Sandbox"
            ],
            defaultOption: "LocalWP (Nginx + PHP 8.3 + MariaDB)"
          },
          {
            id: "blueprintScope",
            label: "Blueprint Configuration",
            options: [
              "Production Hardened (512MB RAM, System Cron, SSL, Strict Security)",
              "Developer Debug (Query Monitor, Xdebug, WP_DEBUG_LOG, MailHog)",
              "Minimalist Core (Zero bloat, Kadence Theme, Native Blocks)"
            ],
            defaultOption: "Production Hardened (512MB RAM, System Cron, SSL, Strict Security)"
          }
        ],
        template: `Act as a Senior WordPress DevOps Engineer. Write an automated bash script utilizing WP-CLI and a complete wp-config.php hardening snippet to bootstrap a new [siteType] on [environment].
Blueprint Standard: [blueprintScope]

Provide the initialization suite formatted as:

# 1. Automated WP-CLI Shell Script
Write an executable bash script that:
- Sets site title, admin email, and updates WordPress core.
- Configures permalinks to /%postname%/.
- Cleans default dummy content (removes post 1, page 2, sample comment).
- Sets timezone, date format, and disables user registration.
- Installs and activates core starter plugins: Query Monitor, Kadence, and Redis Object Cache.

# 2. Hardened wp-config.php Constants
Provide the exact PHP constants to inject into wp-config.php:
- Set WP_MEMORY_LIMIT and WP_MAX_MEMORY_LIMIT to 512M
- Disable file editing from admin dashboard (DISALLOW_FILE_EDIT)
- Restrict post revisions to 5 (WP_POST_REVISIONS)
- Disable default WP-Cron (DISABLE_WP_CRON) in favor of system cron
- Configure environment constants (WP_ENVIRONMENT_TYPE: 'development' or 'production')

# 3. Verification Commands
List 3 WP-CLI diagnostic commands to verify that permissions, database connections, and rewrite rules are operating error-free.`,
        expectedOutputs: [
          "Complete, production-tested WP-CLI bootstrap shell script",
          "Hardened wp-config.php constants snippet ready for deployment",
          "Verification commands to validate site health and memory allocation"
        ]
      },
      learning: {
        resources: [
          {
            title: "LocalWP Official Developer Documentation & Blueprint Guide",
            badge: "OFFICIAL DOCS",
            url: "https://localwp.com/help-docs/"
          },
          {
            title: "WP-CLI Official Command Reference Handbook",
            badge: "GUIDE",
            url: "https://developer.wordpress.org/cli/commands/"
          }
        ]
      },
      conceptGuide: {
        title: "The Architecture of Sandboxed WordPress Development",
        overview: "WordPress powers over 40% of the web, but its open architecture makes it vulnerable to plugin conflicts and execution timeouts if mismanaged. Developing on isolated local environments decouples feature iteration from server latency. By executing WP-CLI commands and controlling PHP environment variables locally, developers can simulate high-concurrency traffic, test PHP 8.3 compatibility, and catch database query bloat before deploying a single byte to live infrastructure.",
        keyPoints: [
          {
            lead: "Staging Isolation",
            text: "Never write or test experimental code on production; local sandboxes prevent user-facing downtime and accidental data corruption."
          },
          {
            lead: "WP-CLI Speed",
            text: "Executing administrative tasks via WP-CLI is up to 10x faster than clicking through the WordPress admin dashboard."
          },
          {
            lead: "Deterministic Blueprints",
            text: "Saving standardized blueprints eliminates repetitive manual setup, guaranteeing consistent server headers, memory limits, and security defaults."
          }
        ]
      }
    },

    // Node 2
    {
      id: "step-2",
      stepNumber: 2,
      phaseId: "phase-1",
      title: "AI Sitemap, Wireframing & Conversion Copy Generation",
      timeEstimate: "1 hr",
      difficulty: "Beginner",
      summary: "Generate structured page hierarchies, wireframe layouts, and conversion-focused section copy before touching the page builder.",
      description: "Opening an empty page builder canvas without a pre-defined content structure inevitably leads to builder fatigue, cluttered layouts, and generic placeholder text. Modern WordPress workflows leverage reasoning models and AI website architects like ZipWP and Relume to draft complete sitemaps, information flows, and conversion-optimized section copy first. By establishing the headline hierarchy, CTA placements, and objection-handling FAQs upfront, page building becomes an efficient assembly process.",
      playbook: {
        setup: "Consolidate your client's core value proposition, audience pain points, and product catalog into a structured brief document.",
        execute: "Use ZipWP AI or Relume to generate an 8-page sitemap (Home, About, Services/Products, Pricing, Case Studies, Blog, FAQ, Contact). Feed Claude 3.7 Sonnet our WordPress conversion copy prompt to generate exact character-counted section headlines, subheadings, feature bullets, and trust badges for each page.",
        verify: "Review the copy against the 'WIIFM' rule (What's In It For Me): confirm that 80% of copy addresses customer outcomes rather than company self-praise, and verify clear single-focus CTAs above the fold on all landing pages."
      },
      tools: [
        {
          name: "Relume",
          type: "Freemium",
          url: "https://www.relume.io",
          description: "Visual AI sitemap and wireframe builder with thousands of conversion-tested section layouts ready to translate into WordPress blocks.",
          bestFor: "Structural sitemaps & section layout wireframes"
        },
        {
          name: "ZipWP AI",
          type: "Freemium",
          url: "https://zipwp.com",
          description: "AI builder that auto-generates complete WordPress websites, copywriting, royalty-free images, and contact forms from natural language prompts.",
          bestFor: "Prompt-to-WordPress page generation & starter copy"
        },
        {
          name: "Claude 3.7 Sonnet",
          type: "Freemium",
          url: "https://claude.ai",
          description: "State-of-the-art reasoning model for writing high-converting direct-response sales copy, feature matrices, and objection-handling FAQs.",
          bestFor: "High-converting section copy & value propositions"
        }
      ],
      callouts: {
        mistake: "Relying on generic 'Lorem Ipsum' placeholders inside page builders, leading to broken layout wrapping when real text is added.",
        proTip: "Generate section copy with strict character counts (e.g. max 50 chars for H2 headlines) so your responsive typography never wraps awkwardly on mobile.",
        mistakes: [
          "Building visual pages before finalizing content, resulting in redesigns when real text does not fit arbitrary container widths.",
          "Using generic AI buzzwords ('Revolutionize your workflow', 'Cutting-edge solutions') that sound hollow and fail to convert visitors.",
          "Placing multiple competing primary CTA buttons in the hero section, paralyzing user decision-making."
        ],
        proTips: [
          "Format copy deliverables in structured markdown tables matching WordPress Gutenberg block containers (Hero, 3-Col Feature, Testimonial, FAQ).",
          "Include realistic customer objection handlers in your FAQ section to preemptively resolve buyer hesitation before checkout.",
          "Structure the homepage hero section around the 5-second test: within 5 seconds, visitors must know what you sell, who it is for, and how to get it."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet (Extended Thinking Mode)",
        variables: [
          {
            id: "businessModel",
            label: "Business Model",
            options: [
              "Direct-to-Consumer (D2C) E-Commerce Brand",
              "B2B SaaS / High-Ticket Agency",
              "Local Service Business (Home Remodeling, Dental, Legal)"
            ],
            defaultOption: "Direct-to-Consumer (D2C) E-Commerce Brand"
          },
          {
            id: "targetAudience",
            label: "Target Customer Persona",
            options: [
              "Eco-Conscious Millennial Shoppers",
              "Busy Enterprise Engineering Leads",
              "High-Net-Worth Homeowners"
            ],
            defaultOption: "Eco-Conscious Millennial Shoppers"
          },
          {
            id: "pageType",
            label: "Page Blueprint",
            options: [
              "High-Converting Homepage (Hero, Social Proof, Benefits, FAQ)",
              "WooCommerce Product Sales Page (PAPS Framework)",
              "Services Landing Page with Consultation Booking"
            ],
            defaultOption: "High-Converting Homepage (Hero, Social Proof, Benefits, FAQ)"
          }
        ],
        template: `Act as a World-Class Direct-Response Copywriter and Conversion Rate Optimization (CRO) Architect. Write complete, ready-to-paste section copy for a WordPress [pageType] for a [businessModel] targeting [targetAudience].

Structure the copy strictly into standard WordPress block sections:

# Section 1: Hero Container (Above the Fold)
- Eyebrow Badge: Max 25 characters (e.g., "Rated 4.9/5 by 12,000+ Customers")
- Primary H1 Headline: Max 55 characters (Focus on the transformation outcome)
- Supporting Subtitle: Max 120 characters (Clarity over cleverness)
- Primary CTA Button: Action verb + value (e.g., "Shop the Fall Collection ->")
- Secondary CTA / Micro-Proof: Free shipping threshold, return guarantee

# Section 2: Trust & Social Proof Bar
- 5 Logo Placeholders / Press Highlights
- Quantified Metric Badges (e.g., "50k+ Happy Customers", "100% Carbon Neutral")

# Section 3: 3-Column Core Value Pillars
For each column:
- Lucide Icon Name:
- H3 Title: (Max 35 characters)
- Value Paragraph: (Max 110 characters)

# Section 4: Customer Objection FAQ Accordion
Write 4 high-converting FAQ pairs answering real buyer anxieties (Shipping times, return policy, ingredient/material safety, compatibility).

Rule: Zero generic filler, buzzwords, or Latin text. Provide final copy ready to paste into Kadence or Elementor blocks.`,
        expectedOutputs: [
          "Complete, production-ready section copy structured for WordPress Gutenberg or Elementor blocks",
          "Strict character-count adherence preventing responsive text-wrapping issues",
          "High-converting FAQ accordion copy answering real buyer objections"
        ]
      },
      learning: {
        resources: [
          {
            title: "ZipWP Official AI Site Scaffolding Documentation",
            badge: "OFFICIAL DOCS",
            url: "https://zipwp.com/docs/"
          },
          {
            title: "Relume AI Sitemap & Wireframe Guide for Web Builders",
            badge: "GUIDE",
            url: "https://www.relume.io/resources"
          }
        ]
      },
      conceptGuide: {
        title: "Content-First WordPress Architecture",
        overview: "The most common mistake in website development is designing decorative layouts before the messaging and conversion strategy are defined. When designers place generic placeholder text in page builders, they design for hypothetical character counts. When real copy is finally delivered, headings wrap onto three lines, columns collapse unpredictably, and visual hierarchy breaks. A content-first workflow uses generative AI to establish messaging architecture, character limits, and visual anchors first, making the subsequent page building phase fast, deterministic, and friction-free.",
        keyPoints: [
          {
            lead: "The Outcome Headline",
            text: "Your H1 headline must communicate the specific outcome your customer desires rather than a vague description of your product."
          },
          {
            lead: "Objection Preemption",
            text: "High-converting copy proactively answers the top 3 reasons a user would abandon the page directly before the final call to action."
          },
          {
            lead: "Responsive Character Budgets",
            text: "Enforcing character budgets during copy drafting guarantees that typography scales smoothly across mobile, tablet, and desktop viewports."
          }
        ]
      }
    },

    // Node 3
    {
      id: "step-3",
      stepNumber: 3,
      phaseId: "phase-1",
      title: "High-Performance Theme & Global Design Tokens",
      timeEstimate: "1 hr",
      difficulty: "Intermediate",
      summary: "Configuring lightweight base themes, global color palettes, fluid typography scales, and reusable container spacing presets.",
      description: "Legacy WordPress themes (such as Avada, Enfold, or bloated multi-purpose themes) load dozens of unnecessary scripts, uncompressed stylesheets, and legacy jQuery libraries on every single page view, suffocating performance before content is even added. Modern WordPress development demands ultra-lightweight, modular themes like Kadence WP, Astra, or Bricks Builder that output clean vanilla HTML with zero bloat (< 50KB core assets). By defining global color palettes, fluid typography, and container padding presets in the customizer, every subsequent page inherits unified styling automatically.",
      playbook: {
        setup: "Install a clean, lightweight starter theme: Kadence WP, Astra, or Bricks Builder. Create a lightweight child theme to hold custom PHP hooks and functions.",
        execute: "Navigate to the Global Customizer: 1) Configure your 9-color global palette (Accent, Accent-Hover, Text-Dark, Text-Muted, Background-Canvas, Background-Surface, 1px Border), 2) Set fluid typography using modern CSS `clamp()` scales (Plus Jakarta Sans for headings, Inter for body), 3) Define maximum container width (e.g. 1280px) and standard section vertical padding (80px desktop, 48px mobile).",
        verify: "Run a blank page through Google PageSpeed Insights and WebPageTest: confirm that the baseline theme requests fewer than 5 HTTP requests, loads under 30KB of total assets, and scores 100/100 on Performance."
      },
      tools: [
        {
          name: "Kadence WP",
          type: "Freemium",
          url: "https://www.kadencewp.com",
          description: "Ultra-fast, accessible WordPress theme and Gutenberg block framework featuring a 9-color global palette, fluid typography, and WooCommerce integration.",
          bestFor: "Clean Gutenberg blocks & global design token customizer"
        },
        {
          name: "Astra",
          type: "Freemium",
          url: "https://wpastra.com",
          description: "One of the most popular lightweight WordPress themes, requiring less than 50KB of resources with deep WooCommerce and page builder compatibility.",
          bestFor: "Lightweight multi-purpose theme foundation"
        },
        {
          name: "Bricks Builder",
          type: "Paid",
          url: "https://bricksbuilder.io",
          description: "Visual full-site builder for WordPress that compiles directly into semantic, clean CSS and HTML with zero DOM bloat or div-soup.",
          bestFor: "Developer-grade visual site building with zero DOM bloat"
        }
      ],
      callouts: {
        mistake: "Using legacy bloated multi-purpose themes from ThemeForest that bundle 40 plugins and load 3MB of unused CSS on every page.",
        proTip: "Use Kadence's global color palette linked to CSS variables (`--global-palette1`, `--global-palette2`) so rebranding your entire site takes 3 clicks.",
        mistakes: [
          "Installing bulky themes bundled with heavy slider plugins (Slider Revolution, LayerSlider) that destroy Core Web Vitals.",
          "Hardcoding hex colors and arbitrary pixel margins inside individual block settings instead of linking to global design tokens.",
          "Failing to use a child theme, causing custom PHP functions and template overrides to be wiped out during theme updates."
        ],
        proTips: [
          "Leverage fluid typography with CSS `clamp(1.75rem, 1.2rem + 2.5vw, 2.75rem)` so headings scale smoothly across all screen sizes without media query jank.",
          "Disable Google Fonts loading from external servers in Kadence settings and self-host fonts locally to comply with GDPR and eliminate DNS lookup latency.",
          "Standardize section vertical padding to a 3-tier scale: Small (40px), Standard (80px), and Hero (120px) to maintain consistent vertical rhythm."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet",
        variables: [
          {
            id: "themeChoice",
            label: "Theme & Builder Engine",
            options: [
              "Kadence WP + Kadence Blocks (Gutenberg Native)",
              "Astra + Spectra Blocks (Lightweight Core)",
              "Bricks Builder (Full-Site Visual Compiler)"
            ],
            defaultOption: "Kadence WP + Kadence Blocks (Gutenberg Native)"
          },
          {
            id: "colorScheme",
            label: "Global Color Palette",
            options: [
              "Modern Tech Slate (Deep Charcoal, Soft Slate, Electric Violet #7C3AED)",
              "Clean Health & Wellness (Warm Sand, Crisp White, Forest Emerald #10B981)",
              "High-Trust Financial (Navy Midnight, Pure White, Cobalt Blue #2563EB)"
            ],
            defaultOption: "Modern Tech Slate (Deep Charcoal, Soft Slate, Electric Violet #7C3AED)"
          },
          {
            id: "typographyStack",
            label: "Typography Pairing",
            options: [
              "Plus Jakarta Sans (Headings) + Inter (Body)",
              "Outfit (Modern Display) + Plus Jakarta Sans (Body)",
              "Geist Sans (Technical Headings) + JetBrains Mono (Code/Stats)"
            ],
            defaultOption: "Plus Jakarta Sans (Headings) + Inter (Body)"
          }
        ],
        template: `Act as a Staff Frontend Engineer specializing in WordPress Performance. Generate a complete CSS Custom Properties design token configuration and functions.php child theme setup for a WordPress site running [themeChoice].
Color System: [colorScheme]
Typography Stack: [typographyStack]

Provide the configuration blueprint formatted as:

# 1. Global CSS Design Tokens (:root)
Write clean CSS custom properties defining:
- 9-Color Semantic Palette:
  --global-primary, --global-primary-hover
  --global-text-primary, --global-text-muted
  --global-bg-canvas, --global-bg-surface
  --global-border-subtle (crisp 1px solid)
  --global-success, --global-error
- Fluid Typography Scales using modern CSS clamp():
  --font-h1: clamp(2rem, 1.5rem + 2.5vw, 3.25rem);
  --font-h2: clamp(1.5rem, 1.2rem + 1.8vw, 2.25rem);
  --font-body: 1rem (16px base with 1.6 line-height);
- Spacing & Radius:
  --container-max-width: 1280px;
  --radius-default: 6px; (Strict utilitarian limit)

# 2. Child Theme functions.php Snippet
Provide clean, secure PHP code to:
- Enqueue local Google Fonts with preconnect headers and display=swap.
- Disable WordPress emojis script and default classic theme styles to eliminate 3 HTTP requests.
- Hook global CSS tokens into the WordPress frontend and block editor.`,
        expectedOutputs: [
          "Complete CSS custom properties design token block with fluid typography clamp() rules",
          "Clean, secure PHP child theme functions.php snippet stripping default WordPress bloat",
          "Verification instructions confirming global token synchronization with the block editor"
        ]
      },
      learning: {
        resources: [
          {
            title: "Kadence Theme Official Getting Started & Customizer Guide",
            badge: "OFFICIAL DOCS",
            url: "https://www.kadencewp.com/kadence-theme/knowledge-base/"
          },
          {
            title: "Bricks Builder Documentation: Global Classes & Variables",
            badge: "GUIDE",
            url: "https://academy.bricksbuilder.io"
          }
        ]
      },
      conceptGuide: {
        title: "Global Token Governance in WordPress Themes",
        overview: "When building enterprise or high-converting client websites in WordPress, styling individual blocks with inline hex colors and fixed pixel values creates maintenance nightmares. If a brand changes its accent color, updating hundreds of pages manually takes days. Modern WordPress architectures treat the theme customizer as a centralized design token repository. By mapping global variables for colors, fluid typography scales, and container padding, the entire site stays mathematically consistent and can be rebranded in minutes.",
        keyPoints: [
          {
            lead: "The 9-Color Palette",
            text: "A structured 9-color palette (Primary, Accent, 4 Neutrals, 3 Feedback states) covers 100% of interface requirements without introducing visual noise."
          },
          {
            lead: "Fluid Typography with clamp()",
            text: "CSS `clamp()` dynamically recalculates font sizes based on viewport width, eliminating abrupt breakpoint jumps and mobile text overflow."
          },
          {
            lead: "Zero Asset Bloat",
            text: "Selecting lightweight themes ensures that baseline page weight stays under 30KB, providing a lightning-fast foundation for Core Web Vitals."
          }
        ]
      }
    },

    // Node 4
    {
      id: "step-4",
      stepNumber: 4,
      phaseId: "phase-2",
      title: "AI-Assisted Visual Layout & Custom CSS/JS Injection",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Building responsive flexbox/grid layouts and using AI to write clean, scoped custom CSS animations and vanilla JS micro-interactions.",
      description: "Page builders like Elementor and Kadence Blocks have evolved from rigid table-style column widgets to modern CSS Flexbox containers and CSS Grid layouts. However, relying purely on visual drag-and-drop often produces bloated wrapper div nests ('div-soup'). By pairing visual builders with AI coding assistants (Elementor AI or Claude 3.7 Sonnet), developers can generate lean flexbox layouts, inject scoped modern CSS (glassmorphism cards, marquee tickers, 1px hover borders), and add lightweight vanilla JS micro-interactions without installing bloated third-party add-on plugins.",
      playbook: {
        setup: "Enable Flexbox and Grid Containers in Elementor Experiments or Kadence Blocks settings. Open your page builder editing canvas.",
        execute: "Assemble your section using minimal nested containers (Parent Container -> Child Elements). Use Elementor AI or Claude to generate scoped CSS: assign a custom CSS class (e.g. `.custom-glass-card`), inject 1px border transitions and subtle backdrop-filters, and write a 20-line vanilla JS snippet for an interactive pricing tier switcher or tabs toggle.",
        verify: "Inspect the rendered DOM in Chrome DevTools: confirm that DOM depth is under 8 layers, no layout shifts (CLS) occur during hover transitions, and the vanilla JS executes with zero console errors."
      },
      tools: [
        {
          name: "Elementor AI",
          type: "Paid",
          url: "https://elementor.com/features/ai/",
          description: "Native AI assistant integrated directly into Elementor, generating responsive custom CSS, vanilla HTML/JS snippets, and multilingual translations.",
          bestFor: "In-builder scoped CSS & interactive code generation"
        },
        {
          name: "Kadence Blocks",
          type: "Freemium",
          url: "https://www.kadencewp.com/kadence-blocks/",
          description: "Gutenberg-native block suite featuring high-performance row layouts, advanced tabs, accordions, and CSS Grid with zero external library overhead.",
          bestFor: "Native Gutenberg block layout & performance"
        },
        {
          name: "Claude",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Frontier AI coding assistant for writing clean, accessible vanilla JavaScript micro-interactions, CSS animations, and PHP template overrides.",
          bestFor: "Scoped custom CSS animations & vanilla JS logic"
        }
      ],
      callouts: {
        mistake: "Installing 15 different 'Elementor Addons' plugins just to get a single marquee slider or pricing toggle, bloating your database.",
        proTip: "Ask Claude or Elementor AI to write a 15-line vanilla JS script and scoped CSS snippet instead of installing a multi-megabyte third-party plugin.",
        mistakes: [
          "Nesting 6 layers of containers inside containers, creating massive DOM depth that slows down browser layout recalculations.",
          "Applying animations to layout-triggering properties (`width`, `height`, `margin`) instead of GPU-accelerated `transform` and `opacity`.",
          "Writing global CSS without scoping to a specific container class or block ID, causing unintended styling bugs across other site pages."
        ],
        proTips: [
          "Use the `selector` keyword in Elementor custom CSS (or block-scoped class names in Kadence) to strictly isolate styles to the current element.",
          "Build interactive pricing toggles (Monthly vs Annual) using native HTML `<input type=\"checkbox\">` and CSS `:checked` pseudo-selectors for zero-JS speed.",
          "Audit DOM element count in Chrome DevTools Lighthouse; keep total DOM elements under 800 per page for optimal mobile rendering."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet",
        variables: [
          {
            id: "builder",
            label: "Page Builder",
            options: [
              "Elementor Pro (Flexbox Containers)",
              "Kadence Blocks (Native Gutenberg)",
              "Bricks Builder (Custom CSS Classes)"
            ],
            defaultOption: "Elementor Pro (Flexbox Containers)"
          },
          {
            id: "uiPattern",
            label: "Interactive UI Feature",
            options: [
              "Interactive Monthly / Annual Pricing Toggle with 20% Discount Badge",
              "Smooth Infinite Logo Marquee Ticker with Hover Pause",
              "Sticky Accordion Feature Showcase with Active Progress Bars"
            ],
            defaultOption: "Interactive Monthly / Annual Pricing Toggle with 20% Discount Badge"
          },
          {
            id: "stylingVibe",
            label: "Design Treatment",
            options: [
              "Utilitarian Slate (1px border #2D323E, surface #1C1F26, zero glow)",
              "Subtle Glassmorphism (Backdrop-filter blur 12px, border white/10)",
              "Clean Minimalist White (Border zinc-200, crisp subtle shadow)"
            ],
            defaultOption: "Utilitarian Slate (1px border #2D323E, surface #1C1F26, zero glow)"
          }
        ],
        template: `Act as a Staff Frontend Developer and WordPress Code Architect. Write lightweight, production-grade custom CSS and vanilla JavaScript for [uiPattern] designed for [builder].
Aesthetic Style: [stylingVibe]

Provide the implementation blueprint formatted as:

# 1. HTML DOM Structure (Semantic & Accessible)
Provide clean, accessible HTML using semantic tags (<section>, <button>, <fieldset>, <label>) with proper ARIA attributes (e.g., \`aria-pressed="false"\` or \`role="tablist"\`).

# 2. Scoped Custom CSS
Write pure, GPU-accelerated CSS:
- Use scoped class selectors (e.g., \`.custom-pricing-wrapper\`) or Elementor's \`selector\` prefix.
- Enforce the [stylingVibe] aesthetic.
- Animate strictly using \`transform\` and \`opacity\` with 180ms ease transitions.
- Include a \`@media (prefers-reduced-motion: reduce)\` fallback.

# 3. Vanilla JavaScript (Zero jQuery / Zero Dependencies)
Write a clean, self-invoking vanilla JS script (under 25 lines) to:
- Toggle active states on click.
- Switch displayed pricing values smoothly.
- Support full keyboard navigation (Enter and Space keys).
- Contain zero external library dependencies.`,
        expectedOutputs: [
          "Semantic HTML markup ready to paste into an Elementor or Gutenberg HTML block",
          "Scoped custom CSS with GPU-accelerated transitions and reduced-motion support",
          "Clean vanilla JavaScript snippet with keyboard accessibility and zero jQuery"
        ]
      },
      learning: {
        resources: [
          {
            title: "Elementor Developers: Containers & Scoped CSS Documentation",
            badge: "OFFICIAL DOCS",
            url: "https://developers.elementor.com"
          },
          {
            title: "Kadence Blocks: Advanced Row Layouts & Flexbox Guide",
            badge: "GUIDE",
            url: "https://www.kadencewp.com/kadence-blocks/knowledge-base/"
          }
        ]
      },
      conceptGuide: {
        title: "The Shift from Widget Bloat to Scoped Custom Code",
        overview: "The traditional WordPress ecosystem suffered from plugin accumulation: to add a pricing toggle, testimonial slider, or animated ticker, site builders installed multiple bulky third-party add-on plugins. Each plugin loaded its own bloated CSS frameworks, Font Awesome icon packs, and outdated jQuery libraries, dragging mobile PageSpeed scores into the red. Today, AI assistants like Claude and Elementor AI write custom, 20-line scoped CSS and vanilla JavaScript snippets on demand, allowing developers to build custom interactive widgets with zero plugin overhead.",
        keyPoints: [
          {
            lead: "The 8-Layer DOM Limit",
            text: "Deeply nested container trees force the browser to recalculate layout geometry multiple times; aim for flat, 2-to-3 layer container hierarchies."
          },
          {
            lead: "Zero-Dependency JS",
            text: "Vanilla JavaScript executes up to 5x faster than jQuery and requires zero external asset downloads, protecting your site's Time to Interactive (TTI)."
          },
          {
            lead: "Scoped Encapsulation",
            text: "Scoping CSS with specific wrapper classes ensures custom styles never leak into other pages or interfere with WordPress core elements."
          }
        ]
      }
    },

    // Node 5
    {
      id: "step-5",
      stepNumber: 5,
      phaseId: "phase-2",
      title: "Custom Post Types (CPT), ACF & Dynamic Templates",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Architecting scalable relational data structures (Portfolios, Courses, Directories, Real Estate) with dynamic loop templates.",
      description: "WordPress is not just a blogging engine; it is a full relational Content Management System. Building scalable business sites—such as directories, job boards, portfolios, course catalogs, or real estate listings—requires separating structured data from visual presentation. By architecting Custom Post Types (CPTs) with Advanced Custom Fields (ACF) or Meta Box, and connecting them to dynamic single and archive templates in Kadence or Elementor Theme Builder, clients can manage thousands of records from simple custom backend forms without ever touching a page builder.",
      playbook: {
        setup: "Install Advanced Custom Fields (ACF) or Meta Box. Define your relational data entities (e.g. 'Properties' with fields for Price, Bedrooms, Square Footage, Gallery, and Agent Relationship).",
        execute: "Register the Custom Post Type and custom taxonomies (e.g. 'Property Type', 'Location'). Build your field group with ACF. Next, open your Theme Builder (Kadence Elements or Elementor Theme Builder) to create two dynamic templates: 1) Archive Template (with an AJAX filterable grid loop), and 2) Single Template (binding dynamic heading, price, gallery, and specs to ACF field keys).",
        verify: "Publish 3 sample CPT records with varying content lengths. Verify that the dynamic archive renders the loop cards cleanly, single templates populate all custom fields without PHP errors, and custom fields output properly sanitized data."
      },
      tools: [
        {
          name: "Advanced Custom Fields (ACF)",
          type: "Freemium",
          url: "https://www.advancedcustomfields.com",
          description: "The gold standard for customizing WordPress with powerful custom fields, repeater rows, flexible content layouts, and relational post objects.",
          bestFor: "Custom post metadata, repeaters & relational schemas"
        },
        {
          name: "Meta Box",
          type: "Freemium",
          url: "https://metabox.io",
          description: "High-performance WordPress custom data framework for developers, providing lightning-fast database storage and lightweight PHP/Gutenberg blocks.",
          bestFor: "Developer-grade relational databases & custom post types"
        },
        {
          name: "Custom Post Type UI",
          type: "Free",
          url: "https://wordpress.org/plugins/custom-post-type-ui/",
          description: "Administrative interface for registering and managing custom post types and custom taxonomies without writing manual PHP registration code.",
          bestFor: "Visual Custom Post Type & taxonomy registration"
        }
      ],
      callouts: {
        mistake: "Creating 50 separate manual pages for projects or team members instead of using a single dynamic Custom Post Type template.",
        proTip: "Use ACF's 'Post Object' or 'Relationship' field to connect entities (e.g. linking a 'Course' to an 'Instructor' CPT) for automatic bi-directional queries.",
        mistakes: [
          "Building repetitive static pages manually, forcing clients to edit raw layout containers whenever a price or team member changes.",
          "Failing to sanitize dynamic custom field output with `esc_html()`, `esc_url()`, or `esc_attr()`, exposing the site to cross-site scripting (XSS).",
          "Creating unindexed custom meta queries across tens of thousands of posts, causing severe database bottlenecks on archive pages."
        ],
        proTips: [
          "Use ACF JSON synchronization (`/acf-json` folder in your child theme) to version-control custom field definitions inside Git repositories.",
          "Create a conditional fallback for every dynamic field (e.g. displaying 'Contact for Pricing' if the ACF `price` field is left empty).",
          "Leverage Kadence Elements Hooked Templates to dynamically inject custom author bio boxes or related CPT loops into specific post categories."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / ChatGPT o3-mini",
        variables: [
          {
            id: "cptEntity",
            label: "Custom Entity",
            options: [
              "Real Estate Property Listing (Price, Beds, Baths, Map, Gallery)",
              "SaaS Case Study / Customer Story (Client, Metric Lift, Tech Stack)",
              "Course / Workshop Directory (Instructor, Duration, Syllabus, Level)"
            ],
            defaultOption: "Real Estate Property Listing (Price, Beds, Baths, Map, Gallery)"
          },
          {
            id: "templateEngine",
            label: "Template System",
            options: [
              "Kadence Elements Hooked Dynamic Template",
              "Elementor Theme Builder (Single CPT + Archive Loop Grid)",
              "Bricks Builder Query Loop & Dynamic Data Provider"
            ],
            defaultOption: "Kadence Elements Hooked Dynamic Template"
          },
          {
            id: "queryFilter",
            label: "Filtering & Sorting",
            options: [
              "AJAX Taxonomy & Price Range Filtering (Search & Filter Pro)",
              "Categorized Grid with Infinite Scroll",
              "Featured Sticky Carousel + Filterable Grid"
            ],
            defaultOption: "AJAX Taxonomy & Price Range Filtering (Search & Filter Pro)"
          }
        ],
        template: `Act as a Principal WordPress Architect. Design a production-grade relational data structure and dynamic template specification for [cptEntity] using [templateEngine].
Filtering Strategy: [queryFilter]

Provide the structural blueprint formatted as:

# 1. Custom Post Type & Taxonomy Registration (PHP)
Write clean, modern PHP functions to register:
- Custom Post Type: Slug, supports (title, editor, thumbnail, excerpt, revisions), REST API enabled.
- Custom Hierarchical Taxonomy: (e.g., Property Type, City/Location).

# 2. Advanced Custom Fields (ACF) Field Group Schema
Document the field definitions with field keys, types, and validation rules:
- Text/Number fields (Price, Square Footage)
- Select/Radio fields (Status: Active, Pending, Sold)
- Gallery / Image array
- Relationship field (Linking to Agent / Author CPT)

# 3. Dynamic Single Post Template Blueprint
Specify the exact dynamic bindings for the Single template:
- Hero section binding: Post Title, Featured Image background
- Meta data grid: Binding ACF values with conditional display rules (hide if empty)
- Agent Bio Card: Dynamic query pulling connected Relationship post data

# 4. Security & Sanitization
Provide PHP code showing proper escaping functions (\`esc_html\`, \`esc_url\`, \`wp_kses_post\`) when rendering these fields in custom code.`,
        expectedOutputs: [
          "Complete PHP registration code for Custom Post Types and taxonomies with REST API support",
          "Comprehensive ACF field group dictionary with validation rules and field keys",
          "Dynamic template layout specification mapping fields to visual container elements"
        ]
      },
      learning: {
        resources: [
          {
            title: "Advanced Custom Fields (ACF) Official Documentation",
            badge: "OFFICIAL DOCS",
            url: "https://www.advancedcustomfields.com/resources/"
          },
          {
            title: "WordPress Developer Resources: Registering Post Types",
            badge: "GUIDE",
            url: "https://developer.wordpress.org/reference/functions/register_post_type/"
          }
        ]
      },
      conceptGuide: {
        title: "The Power of Decoupled Dynamic Data in WordPress",
        overview: "When WordPress sites are built by manually dragging visual blocks onto static pages, every design modification requires editing hundreds of individual pages. Professional agencies architect sites like relational software databases: data is stored in normalized Custom Post Types and structured custom fields, while presentation is governed by a single global template. When you update the single template's layout, thousands of published items update instantaneously, eliminating human data-entry errors and empowering non-technical clients to update records easily.",
        keyPoints: [
          {
            lead: "Data Normalization",
            text: "Keep content clean in custom fields; never bake raw pricing or specs directly into page builder text blocks."
          },
          {
            lead: "Conditional Rendering",
            text: "Always wrap custom fields in conditional statements so that empty fields collapse naturally without leaving broken layout gaps."
          },
          {
            lead: "ACF JSON Portability",
            text: "Storing custom field configurations in `/acf-json` enables seamless Git version tracking and automated synchronization across local, staging, and production."
          }
        ]
      }
    },

    // Node 6
    {
      id: "step-6",
      stepNumber: 6,
      phaseId: "phase-2",
      title: "Vibe-Coding Custom WordPress Plugins & Shortcodes",
      timeEstimate: "1.5 hrs",
      difficulty: "Advanced",
      summary: "Building bespoke, lightweight WordPress plugins, custom Elementor widgets, REST API endpoints, and admin dashboards using AI IDEs instead of bloated third-party plugins.",
      description: "WordPress sites frequently suffer from 'plugin bloat'—installing 40+ plugins where 80% of their code is unused marketing upsells and slow database queries. With AI-native coding assistants like Cursor and CodeWP, developers can 'vibe-code' bespoke, single-purpose WordPress plugins in minutes. Whether you need a custom shipping fee calculator, a secure REST API webhook receiver, an interactive pricing calculator shortcode, or a custom admin telemetry widget, writing a dedicated 100-line plugin delivers 10x faster execution and zero plugin-dependency vulnerabilities.",
      playbook: {
        setup: "Open Cursor IDE or VS Code with CodeWP configured. Create a new plugin directory in `wp-content/plugins/custom-site-core/` and create the master PHP file `custom-site-core.php`.",
        execute: "Write standard WordPress plugin headers. Use Cursor Composer with our custom plugin prompt to generate your required functionality: 1) Secure initialization with `defined('ABSPATH') || exit;`, 2) Enqueue scoped scripts using `wp_enqueue_script()`, 3) Register custom shortcodes with `add_shortcode()`, and 4) Implement nonces (`wp_create_nonce()`) and capability checks for all AJAX/REST endpoints.",
        verify: "Activate the plugin via WP-CLI: `wp plugin activate custom-site-core`. Test edge cases: verify that malicious user inputs are sanitized with `sanitize_text_field()`, nonces prevent CSRF attacks, and query monitor shows 0.00ms execution time."
      },
      tools: [
        {
          name: "Cursor",
          type: "Freemium",
          url: "https://www.cursor.com",
          description: "Leading AI-native code editor capable of indexing entire WordPress codebases, writing custom PHP plugins, and generating clean Gutenberg/Elementor widgets.",
          bestFor: "Full-codebase AI plugin engineering & multi-file edits"
        },
        {
          name: "CodeWP",
          type: "Freemium",
          url: "https://codewp.ai",
          description: "AI code generator trained specifically on WordPress core, WooCommerce functions, ACF hooks, and secure coding standards.",
          bestFor: "WordPress-specialized PHP snippets & hook generation"
        },
        {
          name: "WP-CLI",
          type: "Free",
          url: "https://wp-cli.org",
          description: "Official command-line interface for WordPress, enabling instant plugin scaffolding (`wp scaffold plugin`), testing, and database operations.",
          bestFor: "Rapid plugin scaffolding & terminal testing"
        }
      ],
      callouts: {
        mistake: "Pasting raw custom PHP code directly into the active theme's `functions.php`, which crashes the entire site if a syntax error occurs.",
        proTip: "Always package custom functionality as a standalone plugin or Must-Use (MU) plugin in `wp-content/mu-plugins/` so it survives theme changes.",
        mistakes: [
          "Pasting custom code into the theme's `functions.php`, causing the functionality to be permanently lost when the client switches themes.",
          "Failing to sanitize `$_POST` and `$_GET` requests, creating critical SQL injection and cross-site scripting (XSS) vulnerabilities.",
          "Skipping WordPress nonces on AJAX handlers, leaving backend actions vulnerable to Cross-Site Request Forgery (CSRF)."
        ],
        proTips: [
          "Drop your custom code into `wp-content/mu-plugins/site-core.php`: Must-Use plugins execute automatically, cannot be deactivated by clients, and load first.",
          "Use `wp_localize_script()` to securely pass nonces and REST API URL endpoints from PHP directly to your frontend vanilla JavaScript files.",
          "Scaffold a complete plugin skeleton in 2 seconds using the terminal: `wp scaffold plugin custom-feature --skip-tests`."
        ]
      },
      promptLab: {
        recommendedModel: "Cursor Composer (Claude 3.7 Sonnet)",
        variables: [
          {
            id: "pluginFunctionality",
            label: "Custom Plugin Feature",
            options: [
              "Custom Shipping Rate Calculator based on Cart Weight & Zip Code",
              "Bespoke Lead Capture Shortcode with AJAX Validation & Webhook Sync",
              "Custom Dashboard Telemetry Widget Tracking High-Value Orders"
            ],
            defaultOption: "Custom Shipping Rate Calculator based on Cart Weight & Zip Code"
          },
          {
            id: "integrationHook",
            label: "WordPress / WooCommerce Hook",
            options: [
              "WooCommerce Shipping Method API (WC_Shipping_Method)",
              "WordPress AJAX Handlers (wp_ajax_ & wp_ajax_nopriv_)",
              "Custom WordPress REST API Route (/wp-json/custom/v1/)"
            ],
            defaultOption: "WooCommerce Shipping Method API (WC_Shipping_Method)"
          },
          {
            id: "securityLevel",
            label: "Security Hardening",
            options: [
              "Strict Enterprise (Nonces, current_user_can checks, full sanitization)",
              "Standard AJAX Nonce & Text Field Sanitization",
              "Public Read-Only REST API Endpoint with Rate Limiting"
            ],
            defaultOption: "Strict Enterprise (Nonces, current_user_can checks, full sanitization)"
          }
        ],
        template: `Act as a Principal WordPress Core Developer and Security Auditor. Write a complete, standalone, production-ready WordPress plugin implementing [pluginFunctionality] using [integrationHook].
Security Level: [securityLevel]

Structure the plugin code adhering to WordPress VIP Coding Standards:

# 1. Plugin Metadata Header & Guard
\`\`\`php
<?php
/**
 * Plugin Name: Custom Site Core - [pluginFunctionality]
 * Description: High-performance, lightweight custom functionality.
 * Version: 1.0.0
 * Author: Engineering Team
 */

defined('ABSPATH') || exit;
\`\`\`

# 2. Object-Oriented Architecture (Singleton Pattern)
- Create a clean PHP class with initialization hooks in \`__construct()\`.
- Register required actions and filters.
- Enqueue minified vanilla JS and CSS strictly on pages where the feature is rendered.

# 3. Secure Execution & Data Sanitization
- Verify nonces via \`check_ajax_referer()\` or REST permission callbacks.
- Check user permissions using \`current_user_can('manage_options')\` if administrative.
- Sanitize all incoming parameters with \`sanitize_text_field()\`, \`intval()\`, or \`sanitize_email()\`.
- Return structured JSON responses using \`wp_send_json_success()\` or \`wp_send_json_error()\`.

# 4. Front-End Vanilla JS & AJAX Bridge
Provide the corresponding vanilla JavaScript snippet handling the client-side interaction with zero jQuery.`,
        expectedOutputs: [
          "Complete, copy-ready single-file WordPress plugin adhering to VIP security standards",
          "Comprehensive sanitization, escaping, and nonce verification implementation",
          "Vanilla JavaScript client-side script communicating with the backend endpoint"
        ]
      },
      learning: {
        resources: [
          {
            title: "WordPress Official Plugin Developer Handbook",
            badge: "OFFICIAL DOCS",
            url: "https://developer.wordpress.org/plugins/"
          },
          {
            title: "CodeWP AI: WordPress Code Snippets & Functions Library",
            badge: "PLUGIN",
            url: "https://codewp.ai"
          }
        ]
      },
      conceptGuide: {
        title: "The Architecture of Lightweight Custom Plugins",
        overview: "The primary cause of WordPress fragility, security vulnerabilities, and slow database queries is relying on dozens of third-party plugins created by disparate developers with inconsistent coding standards. By leveraging AI-native coding IDEs like Cursor and CodeWP, software engineers can replace 10 to 15 bulky commercial plugins with a single, bespoke Must-Use (MU) plugin tailored to the client's exact requirements. This eliminates admin dashboard clutter, removes third-party licensing costs, and ensures 100% control over codebase security.",
        keyPoints: [
          {
            lead: "Must-Use Plugins (mu-plugins)",
            text: "Placing custom code in `wp-content/mu-plugins/` guarantees it executes automatically before regular plugins and cannot be accidentally disabled by clients."
          },
          {
            lead: "The Security Trinity",
            text: "Every custom endpoint requires three layers of defense: 1) Nonce verification for CSRF, 2) Capability check for authorization, and 3) Strict input sanitization."
          },
          {
            lead: "Asset Isolation",
            text: "Never enqueue custom CSS or JS globally across the entire site; conditionally enqueue assets only on the specific post types or templates where they are needed."
          }
        ]
      }
    },

    // Node 7
    {
      id: "step-7",
      stepNumber: 7,
      phaseId: "phase-3",
      title: "AI Product Catalog, Variations & Bulk Merchandising",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Automating SEO-rich product descriptions, attribute matrices, upsell tags, and structured CSV catalog imports.",
      description: "Populating an e-commerce catalog of 500+ products with variable attributes (sizes, colors, materials), high-converting sales copy, and Google Shopping-compliant metadata is grueling if done manually. Modern WooCommerce merchants use reasoning models to generate structured product data—including benefits-driven descriptions, technical bullet points, cross-sell groupings, and structured attribute matrices—and automate imports via WP All Import. This turns weeks of tedious manual product entry into an automated, programmatic pipeline.",
      playbook: {
        setup: "Configure WooCommerce general settings, currency rules, and measurement units. Install WP All Import and WooCommerce add-on.",
        execute: "Provide your raw manufacturer inventory or spreadsheet to Claude with our structured product merchandising prompt. Generate a clean CSV import file containing SKU, Title, Short Description, Long Description with HTML formatting, Variable Attributes (e.g. Size: S|M|L|XL, Color: Black|Navy), Regular Price, Sale Price, Stock Quantity, and SEO Schema tags.",
        verify: "Run a test import of 5 products with WP All Import: verify that variable product dropdowns function seamlessly on the frontend, inventory counts sync accurately, and schema breadcrumbs render valid JSON-LD Product data."
      },
      tools: [
        {
          name: "WooCommerce",
          type: "Free",
          url: "https://woocommerce.com",
          description: "The world's most customizable, open-source e-commerce platform powering millions of online stores with total data ownership.",
          bestFor: "Core open-source e-commerce engine & product database"
        },
        {
          name: "StoreAgent AI",
          type: "Freemium",
          url: "https://storeagent.ai",
          description: "AI-powered product catalog management tool that writes SEO-optimized descriptions, tags attributes, and generates bulk CSV merchandising files.",
          bestFor: "Automated bulk product description generation & tagging"
        },
        {
          name: "WP All Import",
          type: "Freemium",
          url: "https://www.wpallimport.com",
          description: "Powerful XML and CSV import tool for WordPress and WooCommerce with visual drag-and-drop mapping and support for complex variable products.",
          bestFor: "Programmatic bulk CSV catalog import & synchronization"
        }
      ],
      callouts: {
        mistake: "Copying and pasting raw manufacturer product descriptions, resulting in severe duplicate content penalties across Google Search.",
        proTip: "Use custom product attributes for variable products (Size, Color) rather than creating separate standalone products to preserve unified review counts.",
        mistakes: [
          "Leaving product short descriptions empty, leaving the primary above-the-fold space next to the product gallery blank.",
          "Using raw manufacturer descriptions that are duplicated across hundreds of competitor sites, destroying organic search rankings.",
          "Creating hundreds of product variations with uncompressed multi-megabyte image galleries that slow down page loading."
        ],
        proTips: [
          "Format product descriptions with a short 3-sentence benefit hook, followed by a bulleted 'Specifications' list and an accordion for 'Shipping & Returns'.",
          "Automate cross-sells and upsells by setting up automated category-based product tags so relevant accessories appear automatically in the cart.",
          "Compress all product gallery images to modern WebP format under 150KB before running bulk imports to ensure fast gallery swiping on mobile."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / ChatGPT o3-mini",
        variables: [
          {
            id: "productNiche",
            label: "Product Category",
            options: [
              "Ergonomic Office Furniture & Standing Desks",
              "Organic Skincare & Clean Beauty Serums",
              "Specialty Coffee Beans & Brewing Equipment"
            ],
            defaultOption: "Ergonomic Office Furniture & Standing Desks"
          },
          {
            id: "productType",
            label: "Product Structure",
            options: [
              "Variable Product (Multiple Colors & Sizes)",
              "Simple Physical Product with Add-on Bundles",
              "Subscription Box with Recurring Delivery Options"
            ],
            defaultOption: "Variable Product (Multiple Colors & Sizes)"
          },
          {
            id: "targetAudience",
            label: "Target Customer Persona",
            options: [
              "Work-From-Home Tech Professionals",
              "Health-Conscious Eco Consumers",
              "B2B Enterprise Procurement Managers"
            ],
            defaultOption: "Work-From-Home Tech Professionals"
          }
        ],
        template: `Act as a Staff E-Commerce Merchandiser and WooCommerce Specialist. Generate complete, structured product catalog copy and CSV mapping data for a [productType] in the [productNiche] niche targeting [targetAudience].

Output the product data formatted strictly as:

# 1. Product Title & SEO Slugs
- Optimized Product Title (Max 65 characters with high-intent keywords)
- URL Slug: /product/custom-slug

# 2. Above-the-Fold Short Description (Max 45 words)
Write a punchy, benefit-driven hook highlighting the core transformation and immediate value proposition.

# 3. Comprehensive Long Description (Semantic HTML)
Provide formatted HTML ready to paste into the WooCommerce product editor:
- <h2>The Problem Solved</h2> (1 paragraph on daily pain points)
- <h2>Engineered Features & Benefits</h2> (Bullet points highlighting durability, materials, and warranty)
- <h2>Technical Specifications Table</h2> (Dimensions, weight capacity, materials)
- <h2>Care & Maintenance Guide</h2>

# 4. Variable Attribute Matrix & CSV Data Row
Provide a clean CSV row with headers:
\`SKU,Title,Short_Description,Long_Description,Attribute_1_Name,Attribute_1_Values,Regular_Price,Sale_Price,Stock,Cross_Sell_SKUs\`

Rule: Zero manufacturer boilerplate text. Provide compelling, direct-response copy that builds trust and drives immediate checkout action.`,
        expectedOutputs: [
          "High-converting short description and structured HTML long description",
          "Technical specifications table with dimensions and materials",
          "Valid CSV data row formatted for instant import with WP All Import"
        ]
      },
      learning: {
        resources: [
          {
            title: "WooCommerce Official Variable Products Documentation",
            badge: "OFFICIAL DOCS",
            url: "https://woocommerce.com/document/variable-product/"
          },
          {
            title: "WP All Import Guide: Importing Variable WooCommerce Products",
            badge: "GUIDE",
            url: "https://www.wpallimport.com/documentation/woocommerce/"
          }
        ]
      },
      conceptGuide: {
        title: "Programmatic E-Commerce Catalog Architecture",
        overview: "In high-growth e-commerce, the product catalog is the primary engine of both conversion and organic search traffic. Treating product merchandising as a manual, one-by-one data entry task creates massive operational bottlenecks and guarantees inconsistencies across titles, attribute filters, and schema tags. Programmatic merchandising structures product data into clean schemas—differentiating between marketing hooks, technical attributes, and shipping dimensions—enabling automated bulk updates and rich Google Shopping indexing.",
        keyPoints: [
          {
            lead: "The Above-the-Fold Hook",
            text: "Over 60% of mobile shoppers never scroll past the product gallery; the short description must summarize the core value proposition in under 45 words."
          },
          {
            lead: "Filter Taxonomy Integrity",
            text: "Standardizing global attributes (e.g. using 'Navy' consistently instead of mixing 'Dark Blue' and 'Navy Blue') keeps AJAX shop filters accurate."
          },
          {
            lead: "Schema Completeness",
            text: "Every product import must include SKU, GTIN/UPC, availability, and pricing currency to qualify for Google Merchant Center rich snippets."
          }
        ]
      }
    },

    // Node 8
    {
      id: "step-8",
      stepNumber: 8,
      phaseId: "phase-3",
      title: "High-Converting Cart, Checkout Flows & Payment Gateways",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Replacing the default WooCommerce checkout with frictionless one-page checkouts, order bumps, express wallets, and multi-currency gateways.",
      description: "Default WooCommerce checkout pages are notoriously clunky: they feature multi-step forms, distracting header menus, confusing coupon fields that encourage users to leave and search for discount codes, and missing mobile express payment options. By replacing the default checkout with FunnelKit or CartFlows, merchants can deploy frictionless 1-page checkouts with Apple Pay/Google Pay express wallets, pre-checkout order bumps, and post-purchase 1-click upsells, increasing Average Order Value (AOV) by 20% to 35%.",
      playbook: {
        setup: "Install FunnelKit (formerly WooFunnels) or CartFlows. Connect Stripe and PayPal for WooCommerce payment gateways.",
        execute: "Replace the standard WooCommerce `/checkout` page with a dedicated 1-page checkout template: 1) Enable Apple Pay and Google Pay express checkout buttons at the very top, 2) Configure a collapsible order summary with product thumbnail previews, 3) Collapse address fields into a single line with Google Address Autocomplete, 4) Add a high-converting pre-checkout Order Bump (e.g. 'Add Priority Insured Shipping for $3.99' or 'Add 2nd Item for 40% Off').",
        verify: "Run live test transactions using Stripe Test Mode: verify express wallets auto-fill billing addresses, test order bump checkboxes update total price dynamically without page reloads, and confirm that post-purchase thank-you pages fire conversion tracking pixels accurately."
      },
      tools: [
        {
          name: "FunnelKit",
          type: "Freemium",
          url: "https://funnelkit.com",
          description: "Leading sales funnel and checkout builder for WooCommerce, offering customizable 1-page checkouts, order bumps, and 1-click post-purchase upsells.",
          bestFor: "High-converting 1-page checkouts & AOV order bumps"
        },
        {
          name: "Stripe",
          type: "Free",
          url: "https://stripe.com",
          description: "Global payment processor supporting express wallets (Apple Pay, Google Pay), Link 1-click checkout, credit cards, and local payment methods.",
          bestFor: "Frictionless express mobile payments & card processing"
        },
        {
          name: "PayPal",
          type: "Free",
          url: "https://www.paypal.com",
          description: "Trusted global payment gateway featuring PayPal Checkout, Pay in 4 installment options, and international currency handling.",
          bestFor: "Global buyer trust & buy-now-pay-later financing"
        }
      ],
      callouts: {
        mistake: "Keeping distracting top navigation menus and footers on the checkout page, giving buyers escape routes to abandon their purchase.",
        proTip: "Place Apple Pay and Google Pay express buttons at the top of checkout to allow mobile shoppers to buy in 2 taps without typing addresses.",
        mistakes: [
          "Displaying a prominent 'Have a coupon code?' field that drives customers away to Google to search for discount codes.",
          "Forcing customers to create an account with a password before they can complete a purchase, driving massive cart abandonment.",
          "Failing to support Apple Pay and Google Pay on mobile devices, forcing users to manually type 16-digit credit card numbers on small keyboards."
        ],
        proTips: [
          "Deploy a distraction-free checkout layout: strip the main navigation bar, sidebars, and footer to keep the user focused solely on completing the purchase.",
          "Implement pre-checkout order bumps with a simple checkbox right above the place order button; a $9.99 complementary add-on typically converts at 25%–35%.",
          "Integrate Google Address Autocomplete to automatically populate City, State, and Zip as soon as the user starts typing their street address."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / ChatGPT o3-mini",
        variables: [
          {
            id: "storeType",
            label: "Store Category",
            options: [
              "D2C Apparel & Lifestyle Accessories",
              "Digital Software, Presets & E-Books",
              "Subscription Box & Consumable Wellness Products"
            ],
            defaultOption: "D2C Apparel & Lifestyle Accessories"
          },
          {
            id: "checkoutModel",
            label: "Checkout Flow",
            options: [
              "Frictionless 1-Page Checkout with Order Bump",
              "Side Slide-Over Cart Drawer with Instant Express Pay",
              "2-Step Checkout (Contact/Shipping -> Payment + Upsell)"
            ],
            defaultOption: "Frictionless 1-Page Checkout with Order Bump"
          },
          {
            id: "bumpOffer",
            label: "Order Bump Strategy",
            options: [
              "VIP Expedited Shipping + Lifetime Warranty ($4.99)",
              "Complementary Maintenance Kit at 50% Off ($14.99)",
              "Digital Care Guide & Recipe Video Masterclass ($7.00)"
            ],
            defaultOption: "VIP Expedited Shipping + Lifetime Warranty ($4.99)"
          }
        ],
        template: `Act as a Staff Conversion Rate Optimization (CRO) Architect and WooCommerce Checkout Engineer. Design a complete high-converting checkout architecture for a [storeType] using a [checkoutModel].
Primary Order Bump: [bumpOffer]

Provide the checkout specification formatted as:

# 1. Distraction-Free Layout Architecture
- Header treatment: Minimalist logo + 256-Bit SSL Encryption Trust Badge (Zero navigation links)
- Layout division: Left column (Billing, Shipping, Express Pay) vs Right column (Sticky order summary, live discount calculator, trust badges)
- Mobile responsive stacking order: Why Express Pay must appear before form fields on viewports under 768px.

# 2. High-Converting Order Bump Specification
Write the exact copy and visual layout for the pre-checkout order bump [bumpOffer]:
- Checkbox Headline: (Max 35 characters)
- Value Proposition Copy: (2 sentences explaining why this offer is only available right now)
- Price display: Original price with strikethrough ($X.XX) and exclusive checkout price ($X.XX)

# 3. Form Field Optimization & Friction Reduction
- List the exact 5 form fields to keep and the 4 default WooCommerce fields to remove (e.g. Company Name, Address Line 2, Order Notes).
- Express Wallet configuration (Apple Pay, Google Pay, Stripe Link).

# 4. Post-Purchase Thank You & Retention Flow
Design the post-purchase confirmation screen to maximize customer excitement, display order tracking info, and offer an immediate referral incentive.`,
        expectedOutputs: [
          "Complete architectural specification for a distraction-free WooCommerce checkout page",
          "High-converting copy and styling layout for the pre-checkout order bump",
          "Strict form field reduction plan eliminating unnecessary checkout friction"
        ]
      },
      learning: {
        resources: [
          {
            title: "FunnelKit Official Knowledge Base & Checkout Design Patterns",
            badge: "OFFICIAL DOCS",
            url: "https://funnelkit.com/docs/"
          },
          {
            title: "Stripe Documentation: WooCommerce Integration & Express Wallets",
            badge: "GUIDE",
            url: "https://stripe.com/docs/woocommerce"
          }
        ]
      },
      conceptGuide: {
        title: "The Frictionless Checkout Psychology",
        overview: "The checkout step is where over 70% of potential e-commerce revenue is permanently lost to cart abandonment. Standard WooCommerce checkouts were designed in 2011 around desktop computers, forcing users to fill out multi-line forms with unnecessary fields like 'Company Name' and 'Address Line 2'. Modern frictionless checkouts remove all navigation distractions, place express biometric wallets (Apple Pay/Google Pay) at the very top, and introduce pre-checkout order bumps that increase Average Order Value (AOV) with zero additional customer acquisition cost.",
        keyPoints: [
          {
            lead: "The 2-Tap Transaction",
            text: "Integrating Apple Pay and Google Pay enables mobile shoppers to complete purchases in two biometric taps, bypassing manual typing entirely."
          },
          {
            lead: "Distraction Elimination",
            text: "Stripping the navigation menu, search bars, and footer from the checkout page prevents second-guessing and keeps buyer momentum intact."
          },
          {
            lead: "Order Bump Economics",
            text: "Offering a complementary low-friction add-on at the final moment of purchase typically achieves 25%–35% take rates, dramatically boosting profitability."
          }
        ]
      }
    },

    // Node 9
    {
      id: "step-9",
      stepNumber: 9,
      phaseId: "phase-3",
      title: "Automated Store Workflows, Webhooks & AI Support",
      timeEstimate: "1 hr",
      difficulty: "Advanced",
      summary: "Connecting WooCommerce order hooks to WhatsApp/email notifications, accounting sheets, and an AI support agent trained on store policies.",
      description: "Managing order notifications, customer shipping inquiries ('Where is my order?'), return requests, and accounting spreadsheets manually consumes hours of valuable founder time every week. By integrating native WordPress automation engines (Uncanny Automator) with self-hosted workflow tools (n8n) and customer-facing AI agents (Tidio AI), store owners can automate post-purchase notifications across SMS and WhatsApp, sync sales data directly to Google Sheets or QuickBooks, and resolve 70% of routine customer inquiries automatically.",
      playbook: {
        setup: "Install Uncanny Automator or connect your WooCommerce store to a self-hosted n8n webhook listener. Install Tidio AI for customer chat.",
        execute: "Configure 3 core automated recipes: 1) High-Value Order Alert: when an order exceeds $250, send an immediate notification to the team Slack/Telegram channel, 2) Abandoned Cart Recovery: trigger a multi-step email/SMS sequence with an expiring coupon 1 hour after cart abandonment, 3) AI Support Agent: train Tidio AI on your store's shipping, returns, and sizing policies to handle FAQs 24/7.",
        verify: "Place a test order: verify that the webhook triggers instantly in n8n, order line items populate in your accounting spreadsheet with correct tax formatting, and the AI chatbot resolves a test return question without human intervention."
      },
      tools: [
        {
          name: "Uncanny Automator",
          type: "Freemium",
          url: "https://automatorplugin.com",
          description: "The #1 no-code automation plugin for WordPress, connecting WooCommerce, LearnDash, MemberPress, and external apps like Google Sheets and Slack.",
          bestFor: "In-dashboard WordPress event automation & user recipes"
        },
        {
          name: "n8n",
          type: "Freemium",
          url: "https://n8n.io",
          description: "Fair-code workflow automation tool that can be self-hosted, connecting WooCommerce webhooks to AI agents, databases, and messaging channels.",
          bestFor: "Complex webhook routing & multi-step AI automations"
        },
        {
          name: "Tidio AI",
          type: "Freemium",
          url: "https://www.tidio.com",
          description: "AI-powered customer service chat platform designed for e-commerce, offering Lyro AI to answer customer support inquiries instantly from knowledge bases.",
          bestFor: "Automated AI customer support & order tracking chat"
        }
      ],
      callouts: {
        mistake: "Sending identical generic order confirmation emails without providing tracking links or dynamic cross-sell recommendations.",
        proTip: "Connect WooCommerce webhooks to a private Discord or Telegram channel so your team receives instant real-time sales alerts.",
        mistakes: [
          "Allowing repetitive customer queries ('Where is my order?', 'How do I return this?') to overwhelm support staff instead of deploying automated AI lookup.",
          "Failing to track abandoned carts, losing up to 70% of potential buyers who initiated checkout but got interrupted.",
          "Triggering heavy external API calls synchronously during checkout, causing payment processing timeouts and customer frustration."
        ],
        proTips: [
          "Execute all webhook and automation dispatches asynchronously via background cron jobs to keep checkout completion times under 500ms.",
          "Train customer support AI strictly on your actual policy URLs to prevent hallucinated return promises or unauthorized discount offers.",
          "Send an automated WhatsApp or SMS shipping update with live carrier tracking links as soon as the WooCommerce order status changes to 'Completed'."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / ChatGPT o3-mini",
        variables: [
          {
            id: "automationTrigger",
            label: "Automation Trigger",
            options: [
              "WooCommerce Order Placed (Status: Processing)",
              "Abandoned Cart Detected (1 Hour Inactivity)",
              "Customer Review Submitted (1-Star or 5-Star Rating)"
            ],
            defaultOption: "WooCommerce Order Placed (Status: Processing)"
          },
          {
            id: "routingChannel",
            label: "Integration Destination",
            options: [
              "n8n Webhook -> Google Sheets Accounting + Slack Alert",
              "Uncanny Automator -> Klaviyo Email Flow + SMS Notification",
              "Tidio Lyro AI -> Order Status Lookup API"
            ],
            defaultOption: "n8n Webhook -> Google Sheets Accounting + Slack Alert"
          },
          {
            id: "aiAgentRole",
            label: "AI Customer Agent Task",
            options: [
              "Automated Order Tracking & Delivery Status Lookup",
              "Pre-Sales Sizing & Product Recommendation Concierge",
              "Automated Return Authorization & Return Label Generation"
            ],
            defaultOption: "Automated Order Tracking & Delivery Status Lookup"
          }
        ],
        template: `Act as a Staff E-Commerce Automation Architect. Design a production-grade workflow automation recipe and AI support agent prompt for a WooCommerce store.
Trigger Event: [automationTrigger]
Integration Channel: [routingChannel]
AI Agent Role: [aiAgentRole]

Provide the automation blueprint formatted as:

# 1. Webhook Payload & Data Contract
Document the JSON payload sent by WooCommerce upon [automationTrigger]:
- Core data points: order_id, customer_email, line_items, total_price, shipping_address
- Webhook secret verification snippet using HMAC SHA256 in PHP/Node.js

# 2. Automation Recipe Steps (Uncanny Automator / n8n)
Provide the step-by-step logic:
- Step 1: Ingest webhook and validate security signature.
- Step 2: Format order currency, line items, and customer tags.
- Step 3: Route data conditionally (e.g., if total > $200 -> post to VIP channel; else standard log).
- Step 4: Dispatch formatted customer notification via WhatsApp / Email.

# 3. AI Support Agent System Prompt (Tidio / Custom LLM)
Write a strict, hallucination-resistant system prompt for the customer support bot:
- Persona & Tone: Empathetic, concise, utilitarian.
- Guardrails: Explicit instructions never to invent shipping dates or offer unauthorized discounts.
- Dynamic Lookup Format: How the agent asks for Order ID and Email to verify identity before querying order status.`,
        expectedOutputs: [
          "Complete webhook payload schema and HMAC SHA256 signature verification code",
          "Step-by-step automation execution workflow for n8n or Uncanny Automator",
          "Hardened, hallucination-resistant customer support AI system prompt"
        ]
      },
      learning: {
        resources: [
          {
            title: "Uncanny Automator Official Recipe Library & Documentation",
            badge: "OFFICIAL DOCS",
            url: "https://automatorplugin.com/knowledge-base/"
          },
          {
            title: "WooCommerce REST API & Webhooks Documentation",
            badge: "GUIDE",
            url: "https://woocommerce.github.io/woocommerce-rest-api-docs/"
          }
        ]
      },
      conceptGuide: {
        title: "Event-Driven E-Commerce Architecture",
        overview: "As e-commerce stores scale beyond 50 orders per day, managing notifications, inventory updates, and customer inquiries manually becomes an unsustainable operational drain. Modern stores operate as event-driven architectures: when a business event occurs inside WooCommerce (an order completed, a subscription renewed, or a cart abandoned), webhooks fire payload data to automation engines. These engines process data asynchronously, synchronizing external accounting tools, alerting warehouse teams, and triggering personalized customer journeys without slowing down web server performance.",
        keyPoints: [
          {
            lead: "Asynchronous Decoupling",
            text: "Offload notifications and third-party integrations to background queues to guarantee lightning-fast checkout completion for buyers."
          },
          {
            lead: "Instant AI Resolution",
            text: "Over 65% of customer support tickets ask routine questions about shipping or return policies; AI agents resolve these instantly 24/7."
          },
          {
            lead: "Automated Data Hygiene",
            text: "Syncing transaction records directly to Google Sheets or ERPs in real-time eliminates human bookkeeping errors and inventory mismatches."
          }
        ]
      }
    },

    // Node 10
    {
      id: "step-10",
      stepNumber: 10,
      phaseId: "phase-4",
      title: "Programmatic WordPress SEO & Automated Schema",
      timeEstimate: "1 hr",
      difficulty: "Advanced",
      summary: "Configuring custom JSON-LD Product/FAQ schema, automated internal linking silos, and indexation rules.",
      description: "Organic search traffic remains the most profitable customer acquisition channel for WordPress and WooCommerce sites. However, search engines have evolved beyond basic meta keyword tags; modern SEO requires structured data (JSON-LD schemas for Products, Reviews, FAQs, and Breadcrumbs), semantic HTML hierarchy, and clean internal linking silos. By configuring advanced SEO suites like Rank Math AI and automated internal link builders like Link Whisper, site owners guarantee rich search snippets in Google SERPs and maximize organic indexation.",
      playbook: {
        setup: "Install Rank Math SEO or SEOPress, and Link Whisper. Connect Google Search Console to verify ownership.",
        execute: "Configure automated SEO protocols: 1) Strip `/category/` and `/product-category/` base slugs for clean URL structures, 2) Automate Open Graph and Twitter Card generation with dynamic fallback images, 3) Build custom JSON-LD schema templates for WooCommerce Products (Price, Currency, InStock, AggregateRating), 4) Use Link Whisper to establish internal link silos connecting related blog tutorials directly to product categories.",
        verify: "Test critical URLs in Google's Rich Results Test tool: verify zero syntax warnings for Product and FAQ schema, confirm XML sitemaps index error-free in Google Search Console, and inspect canonical URL tags to prevent duplicate content indexing."
      },
      tools: [
        {
          name: "Rank Math AI",
          type: "Freemium",
          url: "https://rankmath.com",
          description: "Feature-packed WordPress SEO suite offering automated JSON-LD schema generators, AI content analysis, rank tracking, and Google Search Console integration.",
          bestFor: "Automated structured schema & on-page SEO audits"
        },
        {
          name: "Link Whisper",
          type: "Paid",
          url: "https://linkwhisper.com",
          description: "Smart internal linking tool powered by AI that analyzes site content to suggest relevant internal link silos and identifies orphan pages.",
          bestFor: "Automated internal linking silos & orphan page elimination"
        },
        {
          name: "Google Search Console",
          type: "Free",
          url: "https://search.google.com/search-console",
          description: "Google's official webmaster platform for monitoring search performance, indexation coverage, XML sitemaps, and Core Web Vitals status.",
          bestFor: "Search indexation monitoring & schema validation"
        }
      ],
      callouts: {
        mistake: "Allowing search engines to index tag archives, author pages, and search result pages, diluting domain authority with thin content.",
        proTip: "Inject JSON-LD FAQ schema directly into product and landing pages to earn expanded rich snippet real estate on Google SERP listings.",
        mistakes: [
          "Leaving tag archives, author archives, and date pages set to 'index', creating thousands of duplicate thin content pages that hurt crawl budget.",
          "Using contradictory canonical tags that point to different URLs, confusing search engine indexation algorithms.",
          "Failing to include required schema fields (like priceValidUntil or shippingDetails) in WooCommerce product structured data."
        ],
        proTips: [
          "Set all WordPress tag archives, date archives, and attachment URLs to `noindex, follow` to focus Google's crawl budget strictly on valuable money pages.",
          "Build strict content silos: blog informational posts should link up to pillar product categories, but pillar pages should only link down.",
          "Audit internal anchor text diversity using Link Whisper to prevent keyword over-optimization penalties across your primary commercial pages."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet",
        variables: [
          {
            id: "seoTarget",
            label: "SEO Entity Focus",
            options: [
              "WooCommerce High-Ticket Product Page",
              "Local Business Service Page (City + Service)",
              "Long-Form Technical Buying Guide & Comparison Pillar"
            ],
            defaultOption: "WooCommerce High-Ticket Product Page"
          },
          {
            id: "schemaTypes",
            label: "Schema Markup Required",
            options: [
              "Product + AggregateRating + FAQPage + BreadcrumbList",
              "LocalBusiness + OpeningHours + Service + Review",
              "Article + HowTo + Organization + Person Author"
            ],
            defaultOption: "Product + AggregateRating + FAQPage + BreadcrumbList"
          },
          {
            id: "siloStrategy",
            label: "Internal Linking Silo",
            options: [
              "Reverse Silo (Supporting blog articles funneling link equity to product category)",
              "Hub & Spoke Pillar Model",
              "Hierarchical Category Cluster"
            ],
            defaultOption: "Reverse Silo (Supporting blog articles funneling link equity to product category)"
          }
        ],
        template: `Act as a Staff Technical SEO Engineer and Schema Architect. Write an automated JSON-LD schema implementation and internal linking blueprint for a [seoTarget].
Schema Coverage: [schemaTypes]
Link Silo Model: [siloStrategy]

Provide the SEO engineering suite formatted as:

# 1. Comprehensive JSON-LD Structured Data Script
Write a valid, Google-compliant JSON-LD script combining [schemaTypes] into a unified @graph array:
- Dynamically bind Product name, SKU, price, currency, availability, and brand.
- Include 3 realistic FAQ items inside the FAQPage schema.
- Include valid BreadcrumbList mapping from Home -> Category -> Product.

# 2. WordPress Indexation & Crawl Budget Rules
Provide the exact robots meta directives and XML sitemap configuration:
- Which taxonomies to set to \`noindex, follow\` (Tags, Formats, Author Archives).
- URL clean-up settings (Stripping /category/ and /product-category/ parent slugs).
- Canonical URL enforcement rules.

# 3. Internal Linking Silo Architecture
Diagram the exact internal linking hierarchy using [siloStrategy]:
- Specify the top-level commercial target URL.
- Specify 3 supporting informational guide topics and their exact anchor text linking back to the primary target.`,
        expectedOutputs: [
          "Valid, error-free JSON-LD schema script combining Product, FAQ, and Breadcrumb entities",
          "Technical indexation checklist protecting crawl budget from thin content archives",
          "Structured internal linking silo diagram detailing anchor text distribution"
        ]
      },
      learning: {
        resources: [
          {
            title: "Rank Math Official Schema Generator & Documentation",
            badge: "OFFICIAL DOCS",
            url: "https://rankmath.com/kb/rich-snippets/"
          },
          {
            title: "Google Search Central: Structured Data General Guidelines",
            badge: "GUIDE",
            url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data"
          }
        ]
      },
      conceptGuide: {
        title: "The Architecture of Structured Search Visibility",
        overview: "Search engines no longer rely on simple text keyword frequency to rank pages. Search crawlers parse web content into structured semantic knowledge graphs. By embedding standardized JSON-LD (JavaScript Object Notation for Linked Data) structured schemas directly into your WordPress headers, you explicitly communicate prices, stock availability, customer ratings, and FAQ answers to Google. This enables rich SERP features (star ratings, price tags, accordions) that dramatically boost organic click-through rates.",
        keyPoints: [
          {
            lead: "The JSON-LD Standard",
            text: "Google explicitly recommends JSON-LD embedded in the document head over legacy microdata or RDFa formats."
          },
          {
            lead: "Crawl Budget Preservation",
            text: "Setting thin tag and author archives to `noindex` prevents search bots from wasting crawl bandwidth on non-converting pages."
          },
          {
            lead: "Contextual Link Silos",
            text: "Connecting informational blog posts to commercial category hubs through contextual in-text links passes topical authority directly to money pages."
          }
        ]
      }
    },

    // Node 11
    {
      id: "step-11",
      stepNumber: 11,
      phaseId: "phase-4",
      title: "Core Web Vitals, Object Caching & Asset Optimization",
      timeEstimate: "1.5 hrs",
      difficulty: "Advanced",
      summary: "Stripping unused CSS/JS scripts per page, converting images to WebP/AVIF, configuring Redis object caching, and achieving 95+ PageSpeed scores.",
      description: "WordPress sites frequently fail Google Core Web Vitals (LCP, INP, CLS) due to bloated plugin assets loading globally across every page, uncompressed JPEG/PNG images, and slow dynamic MySQL queries. By deploying a comprehensive optimization stack—using Perfmatters for asset unloading, WP Rocket for page caching and CSS minification, Redis for persistent database object caching, and Cloudflare CDN for edge caching—developers can transform bloated WordPress sites into sub-second, 95+ PageSpeed powerhouses.",
      playbook: {
        setup: "Install Perfmatters and WP Rocket (or FlyingPress). Verify that Redis server is installed and active on your hosting environment.",
        execute: "Execute the performance optimization checklist: 1) Enable Redis Object Cache via `object-cache.php` drop-in to eliminate repetitive SQL queries, 2) Use Perfmatters Script Manager to unload unused plugin scripts per page (e.g. disable Contact Form 7 and WooCommerce cart fragments on blog posts), 3) Configure WP Rocket: delay JavaScript execution until user interaction, minify CSS, and lazy-load below-the-fold images, 4) Enable Cloudflare APO (Automatic Platform Optimization) for edge HTML caching.",
        verify: "Run Google PageSpeed Insights on mobile and desktop: verify mobile score >= 90, desktop score >= 98, Largest Contentful Paint (LCP) under 1.8s, and Cumulative Layout Shift (CLS) equal to 0.00."
      },
      tools: [
        {
          name: "WP Rocket",
          type: "Paid",
          url: "https://wp-rocket.me",
          description: "Leading all-in-one WordPress performance plugin providing instant page caching, GZIP compression, JavaScript delay, and CSS optimization.",
          bestFor: "Full-page HTML caching & JavaScript execution delay"
        },
        {
          name: "Perfmatters",
          type: "Paid",
          url: "https://perfmatters.io",
          description: "Lightweight performance suite featuring the Script Manager to selectively disable unused CSS/JS scripts per URL, reducing page weight by up to 70%.",
          bestFor: "Script Manager asset unloading & bloat removal"
        },
        {
          name: "Cloudflare",
          type: "Freemium",
          url: "https://www.cloudflare.com",
          description: "Global Content Delivery Network offering Automatic Platform Optimization (APO) for WordPress, caching dynamic HTML directly at edge servers worldwide.",
          bestFor: "Edge HTML caching & global CDN asset delivery"
        }
      ],
      callouts: {
        mistake: "Installing 4 different caching plugins at the same time, causing aggressive caching conflicts, broken layouts, and white screens.",
        proTip: "Use Perfmatters Script Manager to disable WooCommerce scripts and styles on all non-store pages to instantly shave 300KB off your homepage.",
        mistakes: [
          "Installing multiple caching plugins simultaneously (e.g. WP Rocket + W3 Total Cache), leading to severe asset race conditions.",
          "Enabling aggressive JavaScript deferral without excluding critical builder scripts, causing interactive menus and buttons to break.",
          "Failing to exclude the WooCommerce cart, checkout, and account pages from page caching, causing users to see cached shopping carts."
        ],
        proTips: [
          "Enable 'Delay JavaScript Execution' in WP Rocket; this single setting prevents heavy tracking scripts from delaying Largest Contentful Paint (LCP).",
          "Exclude hero images above the fold from lazy-loading and add `<link rel=\"preload\" fetchpriority=\"high\">` to optimize LCP.",
          "Deploy Redis persistent object caching on your server: it stores complex MySQL query results in RAM, reducing backend database query times by 80%."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet",
        variables: [
          {
            id: "siteStack",
            label: "Site Technology Stack",
            options: [
              "WooCommerce Store + Kadence WP + Stripe",
              "Elementor Pro Agency Site + Form Integrations",
              "High-Traffic Membership / LMS Community Site"
            ],
            defaultOption: "WooCommerce Store + Kadence WP + Stripe"
          },
          {
            id: "performanceIssue",
            label: "Primary Performance Bottleneck",
            options: [
              "Slow Mobile LCP (> 3.5s) & Heavy Render-Blocking CSS/JS",
              "High Interaction to Next Paint (INP > 250ms) due to Main Thread Work",
              "High TTFB (> 1.2s) from Uncached Dynamic MySQL Database Queries"
            ],
            defaultOption: "Slow Mobile LCP (> 3.5s) & Heavy Render-Blocking CSS/JS"
          },
          {
            id: "cachingTier",
            label: "Caching Architecture",
            options: [
              "WP Rocket + Perfmatters + Redis + Cloudflare APO",
              "LiteSpeed Cache + QUIC.cloud CDN (LSCache Server)",
              "Server-Side Nginx FastCGI Cache + Object Cache Pro"
            ],
            defaultOption: "WP Rocket + Perfmatters + Redis + Cloudflare APO"
          }
        ],
        template: `Act as a Staff WordPress Performance Engineer and Web Vitals Specialist. Write a comprehensive Core Web Vitals remediation plan for a [siteStack] suffering from [performanceIssue].
Optimization Stack: [cachingTier]

Provide the technical optimization suite formatted as:

# 1. Asset Unloading Protocol (Perfmatters Script Manager)
List the exact plugin scripts to disable globally and conditionally:
- Where to unload WooCommerce cart fragments and block styles
- Where to unload contact form scripts (only enable on /contact)
- Disabling WordPress core bloat: Dashicons, Emojis, XML-RPC, and oEmbeds

# 2. LCP & Above-the-Fold Image Optimization
Provide the exact code snippet for \`functions.php\` to:
- Automatically preload the featured image or first hero image with \`fetchpriority="high"\`
- Exclude the hero image from lazy-loading
- Serve modern AVIF/WebP image formats

# 3. JavaScript Execution & INP Optimization
Specify the safe JS delay rules for WP Rocket:
- Scripts safe to delay until first user interaction (Google Tag Manager, Meta Pixel, Hotjar, Chatbots)
- Critical UI scripts that MUST be excluded from delay to prevent broken mobile navigation menus

# 4. Redis Object Caching & Cloudflare Edge Rules
Provide the configuration settings to ensure WooCommerce dynamic endpoints (/cart, /checkout, /my-account, /wp-admin) bypass edge cache, while 100% of static pages achieve sub-100ms TTFB globally.`,
        expectedOutputs: [
          "Precise asset unloading rule map for Perfmatters Script Manager",
          "PHP functions.php snippet preloading hero images with fetchpriority='high'",
          "Complete WP Rocket and Cloudflare edge cache exclusion rules for WooCommerce"
        ]
      },
      learning: {
        resources: [
          {
            title: "WP Rocket Official Core Web Vitals Optimization Guide",
            badge: "OFFICIAL DOCS",
            url: "https://wp-rocket.me/google-core-web-vitals-wordpress/"
          },
          {
            title: "Perfmatters Official Documentation: Script Manager Mastery",
            badge: "GUIDE",
            url: "https://perfmatters.io/docs/"
          }
        ]
      },
      conceptGuide: {
        title: "The Mechanics of Core Web Vitals in WordPress",
        overview: "Google's Core Web Vitals metrics (LCP, INP, and CLS) measure the real-world user experience of loading, responsiveness, and visual stability. WordPress sites frequently suffer because plugins enqueue their full asset libraries on every page, regardless of whether that page actually uses the feature. Achieving sub-second speeds requires a multi-layered optimization strategy: eliminating render-blocking assets with script unloaders, caching dynamic database queries in server RAM with Redis, and serving static HTML pages directly from edge CDN servers worldwide.",
        keyPoints: [
          {
            lead: "The Script Manager",
            text: "Unloading unused plugin CSS and JavaScript on pages where they aren't needed reduces HTTP requests and main-thread execution time by over 50%."
          },
          {
            lead: "Redis in-Memory Caching",
            text: "Redis caches complex relational database query results in server RAM, eliminating repetitive MySQL disk reads and slashing TTFB."
          },
          {
            lead: "Preloading the LCP Element",
            text: "Marking your hero image with `fetchpriority=\"high\"` commands the browser to download the primary visual element before other secondary scripts."
          }
        ]
      }
    },

    // Node 12
    {
      id: "step-12",
      stepNumber: 12,
      phaseId: "phase-4",
      title: "Security Hardening, Automated Backups & Live Migration",
      timeEstimate: "1 hr",
      difficulty: "Advanced",
      summary: "Locking down XML-RPC and admin endpoints, scheduling off-site backups, and deploying zero-downtime staging-to-production migrations.",
      description: "WordPress sites are the number one target for automated brute-force attacks, malware bots, and vulnerability exploits on the internet. Launching a production site without enterprise-grade security hardening invites disaster. By locking down sensitive endpoints (disabling XML-RPC, enforcing 2FA, restricting `wp-login.php` rate limits), scheduling automated off-site encrypted backups (UpdraftPlus to AWS S3 or Google Drive), and executing zero-downtime staging migrations on managed cloud infrastructure (Cloudways), developers protect their client investments permanently.",
      playbook: {
        setup: "Install Wordfence Security (or iThemes Security) and UpdraftPlus. Configure managed cloud hosting on Cloudways, Kinsta, or WP Engine.",
        execute: "Execute the security hardening protocol: 1) Disable XML-RPC completely via `.htaccess` or custom code, 2) Enforce Two-Factor Authentication (2FA) for all administrator accounts, 3) Change the default admin login URL or protect it behind Cloudflare Zero Trust / Turnstile captcha, 4) Configure UpdraftPlus to run daily automated backups of the database and weekly backups of files to off-site cloud storage (AWS S3 or Google Drive).",
        verify: "Run an automated security audit in Wordfence: confirm that all file permissions are locked (644 for files, 755 for directories), test an off-site backup restoration in a local staging environment, and execute the final staging-to-production migration with zero downtime."
      },
      tools: [
        {
          name: "Wordfence",
          type: "Freemium",
          url: "https://www.wordfence.com",
          description: "Leading enterprise WordPress firewall and malware scanner featuring real-time IP blacklisting, brute force protection, and Two-Factor Authentication.",
          bestFor: "Web Application Firewall (WAF) & malware scanning"
        },
        {
          name: "UpdraftPlus",
          type: "Freemium",
          url: "https://updraftplus.com",
          description: "The world's most trusted WordPress backup plugin, supporting automated scheduled backups directly to AWS S3, Google Drive, and Dropbox.",
          bestFor: "Automated off-site scheduled backups & 1-click restore"
        },
        {
          name: "Cloudways",
          type: "Paid",
          url: "https://www.cloudways.com",
          description: "Managed cloud hosting platform for WordPress and WooCommerce powered by DigitalOcean and AWS, featuring 1-click staging and automated SSL.",
          bestFor: "Managed cloud hosting, 1-click staging & zero-downtime migration"
        }
      ],
      callouts: {
        mistake: "Storing backups on the same web server as the website, meaning a server failure or hack destroys both the site and its backups.",
        proTip: "Disable XML-RPC immediately; it is an outdated legacy protocol responsible for over 80% of automated WordPress brute-force attacks.",
        mistakes: [
          "Saving backup archives in `/wp-content/backups/` on the same server, which hackers can download or delete during an intrusion.",
          "Leaving default 'admin' usernames active with weak passwords, making the site an easy target for automated dictionary brute-force attacks.",
          "Running live database search-and-replace queries directly on production without taking a full snapshot backup first."
        ],
        proTips: [
          "Connect Cloudflare Turnstile to your login page: it replaces annoying captchas with a seamless invisible browser check that stops 99.9% of bots.",
          "Use WP-CLI for database migrations: `wp search-replace 'https://staging.example.com' 'https://example.com' --all-tables` handles PHP serialized data safely.",
          "Lock down file editing in `wp-config.php` by adding `define('DISALLOW_FILE_EDIT', true);` so even compromised admin accounts cannot inject malicious PHP code."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / ChatGPT o3-mini",
        variables: [
          {
            id: "hostingEnvironment",
            label: "Hosting Infrastructure",
            options: [
              "Managed Cloud VPS (Cloudways / DigitalOcean Nginx + PHP 8.3)",
              "Enterprise Managed WordPress (Kinsta / WP Engine)",
              "Self-Managed Ubuntu VPS (Nginx + Fail2Ban + UFW)"
            ],
            defaultOption: "Managed Cloud VPS (Cloudways / DigitalOcean Nginx + PHP 8.3)"
          },
          {
            id: "backupDestination",
            label: "Off-Site Backup Storage",
            options: [
              "Amazon AWS S3 Bucket with Versioning",
              "Google Cloud Storage / Google Drive",
              "Cloudflare R2 Encrypted Storage"
            ],
            defaultOption: "Amazon AWS S3 Bucket with Versioning"
          },
          {
            id: "migrationScope",
            label: "Launch Migration Protocol",
            options: [
              "Staging to Production Zero-Downtime Push with Serialized Search-Replace",
              "Domain Name Change & Full Database Re-Indexing",
              "Disaster Recovery Restoration from Cold Storage Backup"
            ],
            defaultOption: "Staging to Production Zero-Downtime Push with Serialized Search-Replace"
          }
        ],
        template: `Act as a Staff WordPress Security Engineer and Site Reliability DevOps Lead. Write an enterprise security hardening guide and migration protocol for a WordPress site on [hostingEnvironment].
Backup Target: [backupDestination]
Launch Workflow: [migrationScope]

Provide the production readiness blueprint formatted as:

# 1. Nginx / .htaccess Security Hardening Rules
Write server rules to block the top attack vectors:
- Completely block access to /xmlrpc.php
- Block direct execution of PHP files in /wp-content/uploads/
- Restrict sensitive files: wp-config.php, .git, and debug.log
- Implement security headers: X-Frame-Options, X-Content-Type-Options, Strict-Transport-Security (HSTS)

# 2. Automated Off-Site Backup Schedule (UpdraftPlus / WP-CLI)
Document the automated backup policy:
- Database backup frequency: Every 12 hours (retain 14 snapshots)
- File backup frequency: Weekly (retain 4 snapshots)
- Secure AWS S3 / Cloud Storage IAM policy credentials with write-only least-privilege permissions

# 3. Zero-Downtime Staging-to-Production Migration (WP-CLI)
Write the terminal commands to:
1. Export the staging database with WP-CLI
2. Perform serialized-safe search and replace across all tables:
   \`wp search-replace 'https://staging.domain.com' 'https://domain.com' --all-tables --precise\`
3. Flush rewrite rules and regenerate CSS cache:
   \`wp rewrite flush --hard && wp cache flush\`
4. Post-launch sanity verification: Check SSL, test order processing, and confirm zero 404 links.`,
        expectedOutputs: [
          "Complete Nginx and .htaccess security hardening rules blocking XML-RPC and uploads execution",
          "Automated off-site backup rotation schedule and least-privilege IAM policy",
          "Terminal command sequence for serialized-safe search-and-replace migration via WP-CLI"
        ]
      },
      learning: {
        resources: [
          {
            title: "Wordfence Official Security Guide: Hardening WordPress",
            badge: "OFFICIAL DOCS",
            url: "https://www.wordfence.com/learn/"
          },
          {
            title: "UpdraftPlus Official Backup & Migration Documentation",
            badge: "PLUGIN",
            url: "https://updraftplus.com/support/"
          }
        ]
      },
      conceptGuide: {
        title: "Defense-in-Depth for Production WordPress",
        overview: "Security in WordPress cannot rely on a single plugin. A secure architecture implements defense-in-depth: layering security across DNS firewalls (Cloudflare), server configuration (blocking XML-RPC and disabling PHP execution in upload folders), application security (enforcing 2FA and disabling file editing in `wp-config.php`), and automated off-site backups. If an attacker bypasses one layer, the secondary layers neutralize the threat, and off-site cloud backups guarantee that full disaster recovery is achievable in under 15 minutes.",
        keyPoints: [
          {
            lead: "XML-RPC Neutralization",
            text: "Disabling XML-RPC eliminates the primary vector for automated botnet amplification and brute-force attacks."
          },
          {
            lead: "Isolated Storage",
            text: "Backups stored on the same server are useless in a complete server compromise; always stream encrypted snapshots to off-site cloud storage."
          },
          {
            lead: "Serialized Data Safety",
            text: "Never use raw MySQL text search-and-replace queries to update domain URLs; always use WP-CLI to preserve PHP serialized data strings."
          }
        ]
      }
    }
  ]
};
