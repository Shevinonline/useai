// Complete production-grade steps data for "AI Digital Marketing & Ad Funnels" Roadmap (12 Nodes)

export const aiDigitalMarketingAdFunnelsData = {
  id: "ai-digital-marketing-ad-funnels",
  title: "AI Digital Marketing & Ad Funnels",
  description: "Engineer high-ROAS ad creatives, landing page variants, and automated email conversion sequences.",
  category: "Role & Workflow Roadmaps",
  stepCount: 12,
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: Market Intelligence, Offer Engineering & Funnel Architecture",
      description: "Reverse-engineer competitor ad angles running 60+ days, craft high-ticket value-stack offers, and establish server-side Conversion API (CAPI) attribution."
    },
    {
      id: "phase-2",
      title: "Phase 2: High-Converting Ad Creatives, Copy & Video Variations",
      description: "Generate 3x3 direct-response copy matrices, design thumb-stopping native static ad creatives, and assemble modular AI UGC video ad variations."
    },
    {
      id: "phase-3",
      title: "Phase 3: Landing Pages, Lead Magnets & Automated Nurture",
      description: "Deploy message-matched pre-sell advertorials, engineer 40%+ conversion interactive diagnostic quizzes, and automate behavioral email nurture drips."
    },
    {
      id: "phase-4",
      title: "Phase 4: Campaign Scaling, Creative Analytics & CRO Loops",
      description: "Structure broad consolidated media buying campaigns, audit creative thumbstop and hold rates with Motion, and run continuous heatmapped split-tests."
    }
  ],
  steps: [
    // Node 1
    {
      id: "step-1",
      stepNumber: 1,
      phaseId: "phase-1",
      title: "Competitor Ad Spying & Winning Angle Extraction",
      timeEstimate: "1.5 hrs",
      difficulty: "Beginner",
      summary: "Identify competitor ads that have been running profitably for 60+ days and reverse-engineer their psychological hooks and emotional triggers.",
      description: "In performance marketing, nobody spends money on unprofitable ads for more than two weeks. When a direct competitor has been running an ad creative continuously for 60 to 180 days, that creative is mathematically verified to be acquiring customers profitably. Modern growth marketers use ad intelligence tools like Foreplay and Meta Ad Library to uncover these long-running 'evergreen winners', extracting their visual hierarchy, underlying psychological belief shifts, and core objections to build differentiated counter-angles.",
      playbook: {
        setup: "Identify your top 5 direct and indirect competitors. Open Meta Ad Library and Foreplay. Filter ads by 'Active Status', 'All Dates', and set the initial run date threshold to at least 60 days ago.",
        execute: "Save the top 10 longest-running active creatives into a dedicated Foreplay swipe folder. Feed transcriptions and visual descriptions into Claude 3.7 Sonnet to extract: 1) The Core Problem Hypothesis, 2) The Psychological Hook Archetype (Fear of Missing Out, Relatable Embarrassment, Contrarian Epiphany), and 3) The Offer Framing.",
        verify: "Confirm that every identified competitor ad has remained active without interruption for 45+ days and has multiple active ad variants (indicating scaling ad spend)."
      },
      tools: [
        {
          name: "Meta Ad Library",
          type: "Free",
          url: "https://www.facebook.com/ads/library",
          description: "Meta's public repository of all active advertisements running across Facebook, Instagram, Messenger, and Audience Network.",
          bestFor: "Real-time competitor ad audit & active longevity tracking"
        },
        {
          name: "Foreplay",
          type: "Paid",
          url: "https://www.foreplay.co",
          description: "Ad spy and swipe file platform that saves Meta and TikTok ads permanently into cloud folders with automatic transcription.",
          bestFor: "Saving permanent ad swipe files & automatic transcript analysis"
        },
        {
          name: "Claude 3.7 Sonnet",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Frontier reasoning model for deconstructing competitor psychological angles, buyer objection matrices, and hook frameworks.",
          bestFor: "Competitor ad teardown & psychological hook deconstruction"
        }
      ],
      callouts: {
        mistake: "Copying a competitor's ad word-for-word, which triggers ad blindness, legal cease-and-desist notices, and higher auction CPMs.",
        proTip: "Look at competitor ads running in adjacent industries (e.g. studying SaaS ad angles to sell high-ticket e-commerce supplements); cross-pollinated angles dominate saturated feeds.",
        mistakes: [
          "Analyzing competitor ads launched 3 days ago that might be bleeding money and about to be paused.",
          "Focusing purely on the visual aesthetics of an ad while ignoring the underlying offer, guarantee, and landing page continuity.",
          "Failing to filter for target geographic regions, accidentally benchmarking campaigns optimized for lower-tier international traffic."
        ],
        proTips: [
          "Use Foreplay's 'Brand Tracking' feature to receive instant Slack alerts whenever a key competitor launches new creative batches.",
          "Search for competitor brand keywords on TikTok Creative Center to inspect Top Ads ranking by CTR in your exact industry vertical.",
          "Document competitor comment sections: the top complaints and unanswered questions are your next winning ad hooks."
        ]
      },
      promptLab: {
        title: "Competitor Ad Deconstruction & Counter-Angle Matrix",
        description: "Analyze a competitor's winning ad transcript and extract psychological triggers to build 3 differentiated counter-angles.",
        variables: [
          {
            name: "Ad Channel",
            label: "Ad Channel",
            options: ["Meta Ads (Instagram / Facebook)", "TikTok Spark Ads", "YouTube TrueView In-Stream", "Google Search Ads"],
            default: "Meta Ads (Instagram / Facebook)"
          },
          {
            name: "Competitor Angle",
            label: "Competitor Angle",
            options: ["The Fear/Shame Trigger (Hidden toxin / financial waste)", "The Frustration Relief (Old tedious way vs. 1-click modern way)", "The Secret Insider Hack (What industry giants don't tell you)"],
            default: "The Frustration Relief (Old tedious way vs. 1-click modern way)"
          },
          {
            name: "Target Market",
            label: "Target Market",
            options: ["DTC Health & Wellness Consumers", "B2B SaaS Founders & Growth Marketers", "Real Estate Investors & High-Net-Worth Individuals", "Busy Working Parents"],
            default: "B2B SaaS Founders & Growth Marketers"
          }
        ],
        template: `You are a veteran direct-response creative strategist and performance marketing director who has managed $20M+ in profitable paid media.

Deconstruct this winning competitor ad approach:
- Ad Channel: [Ad Channel]
- Competitor Angle: [Competitor Angle]
- Target Market: [Target Market]

Please output:
1. Deep Psychological Teardown: What unconscious belief does this ad exploit, and why does it drive instant clicks?
2. The Flaw/Vulnerability: What is the weakness in their messaging that an informed prospect would question?
3. 3 Differentiated Counter-Angles:
   - Counter-Angle A: The Contrarian Stance (flipping their premise on its head)
   - Counter-Angle B: The Ultimate Transparency (brutal honesty that builds instant trust)
   - Counter-Angle C: The High-Speed Transformation (promising the outcome in 1/3 the time)
4. Primary Direct-Response Hook Line: A punchy 10-word opening hook for our counter-creative.`,
        expectedOutput: `### Competitor Ad Intelligence & Counter-Strategy

#### 1. Psychological Teardown
> **Core Unconscious Driver:** *Cognitive Exhaustion & Decision Fatigue.* The competitor ad succeeds because it validates the prospect's secret belief: *"I am working 14 hours a day on outbound sales, yet my pipeline is dry because the traditional playbook is broken."* By presenting a simplified 1-click automated mechanism, it relieves personal guilt and shifts blame to outdated software tools.

#### 2. The Flaw in Their Messaging
- **The Vulnerability:** The competitor promises "Instant push-button pipeline generation" without addressing deliverability, spam penalties, or domain reputation. Savvy SaaS founders are terrified of burning their primary company domain with low-quality AI scraping.

#### 3. Three Differentiated Counter-Angles
- **Counter-Angle A (Contrarian Stance):** *"Why sending 10,000 cold AI emails today is the fastest way to get your company domain blacklisted by Google Workspace."*
- **Counter-Angle B (Radical Transparency):** *"We don't send 1,000 generic emails. We build 50 hyper-researched bespoke executive dossiers that book 18 enterprise demos a month."*
- **Counter-Angle C (Speed-to-Result):** *"How to book your first qualified VP-level discovery call in 48 hours without buying lead scrapers or burning burner domains."*

#### 4. Primary Direct-Response Hook
> *"Stop blasting 5,000 AI emails. Send these 12 words instead."*`
      },
      conceptGuide: {
        title: "The Law of Creative Longevity & Angle Arbitrage",
        overview: "In paid digital marketing, creative fatigue is relentless. A single ad angle will typically exhaust its target audience within 3 to 6 weeks as frequency rises and CPMs increase. However, certain structural angles represent 'Evergreen Resonances'—fundamental human motivations (greed, status, fear of loss, convenience) that transcend creative fatigue. By monitoring the lifespan of competitor ad sets in public repositories, marketers identify these evergreen emotional resonances without paying for the trial-and-error discovery phase.",
        keyPoints: [
          "**The 60-Day Profit Rule:** Any ad active for over 60 consecutive days on Meta or TikTok is generating positive unit economics; track its underlying hook archetype.",
          "**Angle vs. Format:** The 'angle' is the emotional thesis (e.g. saving money vs. saving time); the 'format' is the delivery vehicle (static, UGC, founder talking-head). Test 1 angle across 4 formats.",
          "**Adjacent Niche Transposition:** Winning angles from fitness/weight loss often translate directly into B2B software (e.g., 'The 3 Hidden Toxins' becomes 'The 3 Hidden Security Leaks')."
        ]
      },
      learning: {
        resources: [
          {
            title: "Meta Ad Library Official Guide & API Documentation",
            url: "https://www.facebook.com/ads/library",
            type: "Official Docs"
          },
          {
            title: "Foreplay Ad Creative Workflow & Swipe File Blueprint",
            url: "https://www.foreplay.co",
            type: "Growth Guide"
          },
          {
            title: "Eugene Schwartz's 5 Stages of Customer Awareness Analysis",
            url: "https://www.referralcandy.com/blog/stages-of-customer-awareness",
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
      title: "Irresistible Offer Architecture & Value Stack Design",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Structure high-converting core offers, risk-reversal guarantees, bonuses, and urgency mechanisms before spending a dollar on traffic.",
      description: "Great advertising cannot fix an uninspiring offer. In the modern paid media auction, average product margins are crushed by rising customer acquisition costs (CAC). High-growth brands win by architecting 'Irresistible Offers' based on Alex Hormozi's Value Equation: maximizing dream outcomes and perceived likelihood of achievement while minimizing time delay and effort. Stacking proprietary bonuses, performance guarantees, and tiered volume incentives transforms a commoditized product into an irresistible transaction.",
      playbook: {
        setup: "Open Claude and Perplexity. Audit your primary product or service against market alternatives. Document target customer baseline pricing expectations.",
        execute: "Structure a 4-part Hormozi-style Grand Slam Offer: 1) The Named Core Transformation, 2) 3 High-Perceived-Value Bonuses (templates, private community, VIP onboarding), 3) A Dramatic Risk-Reversal Guarantee ('If you don't achieve X in 30 days, we pay you $500 for wasting your time'), and 4) An Honest Scarcity / Urgency Mechanism.",
        verify: "Calculate your unit economics: ensure your Average Order Value (AOV) leaves at least a 65% gross margin to accommodate initial customer acquisition costs on cold traffic."
      },
      tools: [
        {
          name: "Claude",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Premier AI model for economic value stacking, risk-reversal guarantee phrasing, and pricing psychology modeling.",
          bestFor: "Value stack creation, guarantee phrasing & offer engineering"
        },
        {
          name: "Perplexity",
          type: "Freemium",
          url: "https://www.perplexity.ai",
          description: "Real-time AI research engine for auditing competitor pricing tiers, refund terms, and guarantee industry standards.",
          bestFor: "Real-time competitor pricing audit & refund benchmarks"
        },
        {
          name: "Whimsical",
          type: "Freemium",
          url: "https://whimsical.com",
          description: "Visual canvas tool for flowcharting customer offer tiers, upsell funnels, downsell paths, and checkout order bumps.",
          bestFor: "Funnel visual mapping, order bump design & upsell paths"
        }
      ],
      callouts: {
        mistake: "Offering a generic '10% off your first order' discount, which devalues your brand, attracts low-LTV bargain hunters, and erodes margins.",
        proTip: "Use 'Conditional Risk Reversal': promise a 100% full refund only if the user completes the setup checklist, protecting you from lazy freeloaders while removing buying fear.",
        mistakes: [
          "Failing to include high-margin digital bonuses (e.g. video guides, SOPs, templates) that cost $0 to fulfill but carry $200+ perceived value.",
          "Creating fake countdown timers that reset every time the user refreshes the page, destroying consumer trust.",
          "Neglecting checkout order bumps (pre-checked 1-click add-ons) which routinely lift customer cart values by 15% to 28%."
        ],
        proTips: [
          "Package your core service into an intellectual property trademark (e.g., instead of 'Google Ads Agency', offer 'The Apex Revenue Architecture™').",
          "Add an Order Bump priced between $17 and $37 on checkout: digital checklists or cheat sheets convert at 35%+ with zero fulfillment overhead.",
          "Write out the exact economic calculation showing how your offer pays for itself within 60 days of implementation."
        ]
      },
      promptLab: {
        title: "Grand Slam Value Stack & Risk Reversal Architect",
        description: "Engineer an irresistible multi-tier offer with dream outcomes, bonus stacks, order bumps, and dramatic guarantees.",
        variables: [
          {
            name: "Offer Type",
            label: "Offer Type",
            options: ["High-Ticket B2B Service ($3,000–$10,000)", "DTC E-Commerce Bundle ($80–$180)", "B2B SaaS Annual Subscription ($1,200/yr)", "Digital Course & Mastermind ($997)"],
            default: "High-Ticket B2B Service ($3,000–$10,000)"
          },
          {
            name: "Dream Outcome",
            label: "Dream Outcome",
            options: ["Add $50k in Net New MRR in 90 Days", "Double Cold Outbound Pipeline Without Hiring SDRs", "Clear Chronic Adult Acne in 30 Days Without Prescription Drugs"],
            default: "Add $50k in Net New MRR in 90 Days"
          },
          {
            name: "Guarantee Risk Style",
            label: "Guarantee Risk Style",
            options: ["Pay On Results Only (100% Performance-Based)", "The Better-Than-Risk-Free Guarantee (Full refund + $1,000 payout)", "The Effort-Based Milestone Guarantee"],
            default: "The Better-Than-Risk-Free Guarantee (Full refund + $1,000 payout)"
          }
        ],
        template: `You are an elite growth marketer and offer strategist mentored directly in Alex Hormozi's $100M Offers methodology.

Design a complete high-converting offer package for:
- Offer Type: [Offer Type]
- Dream Outcome: [Dream Outcome]
- Guarantee Risk Style: [Guarantee Risk Style]

Deliver:
1. Core Proprietary Vehicle: A unique branded mechanism name that eliminates perceived commodity status.
2. The 3-Part High-Value Bonus Stack: High perceived value, zero marginal fulfillment cost.
3. High-Converting Checkout Order Bump ($27–$47): Title, 2-sentence pitch, and conversion rationale.
4. Dramatic Risk-Reversal Guarantee: Legally sound, emotionally magnetic copy that eliminates skepticism.`,
        expectedOutput: `### Grand Slam Offer Architecture

#### 1. Core Proprietary Vehicle
- **Branded Mechanism:** **The Inbound Velocity Pipeline™**
- **Core Premise:** We don't sell random ad management; we deploy an end-to-end qualified executive acquisition engine that deposits 15 to 30 sales-qualified enterprise demos into your calendar every single month.

#### 2. The 3-Part High-Value Bonus Stack (Total Perceived Value: $4,500)
- **Bonus #1: The Enterprise Pitch Deck Teardown & Script Vault ($1,500 Value):** The exact 14-slide keynote and objection handling scripts used to close over $18M in ARR.
- **Bonus #2: The Multi-Touch SDR Follow-Up Matrix ($1,200 Value):** Automated 9-touch SMS, LinkedIn, and video email cadence templates that revive dead enterprise pipeline leads.
- **Bonus #3: Private Dedicated Slack Channel with Senior Creative Director ($1,800 Value):** Direct 24-hour turnaround on custom ad creative feedback and landing page copy reviews for 90 days.

#### 3. Checkout Order Bump ($37)
- **Product:** *The Enterprise Sales Objection Blackbook (2026 Edition)*
- **One-Sentence Pitch:** *"Check this box to instantly add our 42-page word-for-word playbook covering how our top reps handle 'We don't have budget' and 'Send me an email' for just $37 today (normally $197)."*

#### 4. The Better-Than-Risk-Free Guarantee
> *"Put our Inbound Velocity Pipeline™ to work for 90 days. If you do not generate at least $50,000 in documented, pipeline-qualified revenue opportunities, we will not only refund every single dollar of your investment—we will write you a check for $1,000 to compensate you for your team's time. You either scale your company, or we pay you."*`
      },
      conceptGuide: {
        title: "The Hormozi Value Equation & Perceived Certainty",
        overview: "Price is what a customer pays; value is what they perceive. Under Alex Hormozi's formulation, Value = (Dream Outcome × Perceived Likelihood of Achievement) ÷ (Time Delay × Effort & Sacrifice). Most struggling marketers attempt to increase sales by lowering price. Elite performance marketers instead drive the denominator to near zero while maximizing the numerator. By crafting powerful guarantees and automated turnkey onboarding, perceived risk dissolves, allowing brands to charge 3x industry standard prices while increasing ad conversion rates.",
        keyPoints: [
          "**The Margin Buffer:** Premium pricing generates the necessary customer acquisition margins to outbid competitors in the Meta and Google ad auctions.",
          "**Order Bump Economics:** Adding a single $37 impulse order bump can increase overall campaign ROAS by 0.3x to 0.6x without increasing traffic costs.",
          "**The Only-ness Guarantee:** When your guarantee is significantly stronger than your competitors', the prospect perceives that your solution carries less risk than doing nothing."
        ]
      },
      learning: {
        resources: [
          {
            title: "Alex Hormozi's Value Equation Framework Summary",
            url: "https://www.acquisition.com/training/offers",
            type: "Growth Guide"
          },
          {
            title: "Perplexity Guide to Competitive Price & Offer Auditing",
            url: "https://www.perplexity.ai",
            type: "Case Study"
          },
          {
            title: "Federal Trade Commission (FTC) Truth in Advertising Guidelines",
            url: "https://www.ftc.gov/business-guidance/advertising-marketing",
            type: "Official Docs"
          }
        ]
      }
    },

    // Node 3
    {
      id: "step-3",
      stepNumber: 3,
      phaseId: "phase-1",
      title: "Full-Funnel Mapping & Server-Side Attribution Setup",
      timeEstimate: "2.5 hrs",
      difficulty: "Advanced",
      summary: "Design cold-to-warm funnel journeys and configure bulletproof server-side conversion tracking unaffected by browser ad-blockers.",
      description: "Ever since Apple's iOS 14.5 App Tracking Transparency (ATT) update, traditional browser pixel tracking loses 30% to 50% of conversion event data. Ad platforms blind to conversion outcomes cannot train their algorithmic bidding models, driving up customer acquisition costs. Professional performance marketers configure Server-Side Google Tag Manager (sGTM) and direct Server-to-Server Conversion APIs (Meta CAPI, TikTok Events API, Google Enhanced Conversions) backed by multi-touch attribution tools like Triple Whale to ensure 100% data fidelity and accurate first-click to last-click ROAS attribution.",
      playbook: {
        setup: "Deploy a Server-Side Google Tag Manager (sGTM) container hosted on Google Cloud Platform (GCP) or Stape.io. Map your custom tracking subdomain (e.g., `data.yourdomain.com`).",
        execute: "Configure Meta Conversions API (CAPI) with redundant browser-and-server event deduplication via a unique `event_id`. Pass Advanced Matching parameters (hashed user email `em`, phone `ph`, city, and IP address). Link Triple Whale or Northbeam for multi-touch click attribution.",
        verify: "Open Meta Events Manager: verify Event Match Quality (EMQ) scores score 8.0/10 or higher for Purchase events, confirm zero duplicate events in the Test Events console, and verify server latency under 200ms."
      },
      tools: [
        {
          name: "Google Tag Manager",
          type: "Free",
          url: "https://tagmanager.google.com",
          description: "Enterprise tag management system supporting client-side scripts and server-side container deployments for zero-data-loss tracking.",
          bestFor: "Server-side tag management & custom event triggers"
        },
        {
          name: "Meta Conversions API",
          type: "Free",
          url: "https://developers.facebook.com/docs/marketing-api/conversions-api/",
          description: "Direct server-to-server connection transmitting web conversion events straight from your backend to Meta's ad delivery algorithm.",
          bestFor: "Bypassing ad-blockers & boosting Meta Event Match Quality"
        },
        {
          name: "Triple Whale",
          type: "Paid",
          url: "https://www.triplewhale.com",
          description: "AI-native e-commerce attribution and analytics operating system tracking blended ROAS, first-click, and post-purchase surveys.",
          bestFor: "Multi-touch attribution, blended ROAS & creative analytics"
        }
      ],
      callouts: {
        mistake: "Relying purely on the browser Meta Pixel; between Brave browser, Safari ITP, and uBlock Origin, up to 40% of purchases never register.",
        proTip: "Pass hashed customer emails and phone numbers on every 'Lead' and 'InitiateCheckout' event; Meta's machine learning matches conversions back to ad views even if third-party cookies were blocked.",
        mistakes: [
          "Failing to pass matching `event_id` parameters between client and server tags, resulting in duplicate conversions and inflated false metrics.",
          "Ignoring UTM parameter hygiene; missing `utm_campaign`, `utm_content`, and `utm_term` strings destroys Google Analytics 4 tracking.",
          "Optimizing cold ad campaigns for top-of-funnel events like 'Link Clicks' or 'View Content'; ad platforms will happily send cheap bots instead of buyers."
        ],
        proTips: [
          "Host server-side GTM on your custom first-party subdomain (`analytics.yourdomain.com`) to prevent DNS-level ad blocking.",
          "Use a 0-party Post-Purchase Attribution Survey ('How did you first hear about us?') in checkout to validate algorithmic ad platform claims.",
          "Set up an automated Slack alert triggered whenever the daily difference between Shopify orders and Meta reported purchases exceeds 20%."
        ]
      },
      promptLab: {
        title: "Server-Side Tracking Architecture & UTM Parameter Builder",
        description: "Design an end-to-end server-side event tracking schema with CAPI deduplication IDs and standardized UTM campaign conventions.",
        variables: [
          {
            name: "Platform Stack",
            label: "Platform Stack",
            options: ["Shopify + Meta Ads + Google Ads", "Next.js / Custom React + Stripe + Meta CAPI", "WordPress / WooCommerce + Klaviyo + TikTok Ads"],
            default: "Shopify + Meta Ads + Google Ads"
          },
          {
            name: "Funnel Conversion Event",
            label: "Funnel Conversion Event",
            options: ["High-Ticket B2B Lead Form Submit", "E-Commerce Purchase ($120 AOV)", "Free Trial Account Registration"],
            default: "E-Commerce Purchase ($120 AOV)"
          },
          {
            name: "Attribution Model",
            label: "Attribution Model",
            options: ["First-Click Anchor (Top of Funnel)", "Last-Click / Last Non-Direct", "Triple Pixel Multi-Touch Linear Data-Driven"],
            default: "Triple Pixel Multi-Touch Linear Data-Driven"
          }
        ],
        template: `You are an enterprise marketing technology architect and attribution engineer specializing in Server-Side GTM, Meta CAPI, and Triple Whale.

Design a comprehensive tracking blueprint for:
- Platform Stack: [Platform Stack]
- Funnel Conversion Event: [Funnel Conversion Event]
- Attribution Model: [Attribution Model]

Provide:
1. Event Deduplication Schema: JavaScript payload illustrating how client-side Pixel and server-side CAPI pass identical event_id strings.
2. Advanced Matching Hashing Specifications: Required SHA-256 formatting for user parameters (em, ph, fn, ln, ct, zp).
3. Universal Standardized UTM Hierarchy: Syntax for utm_source, utm_medium, utm_campaign, utm_content, and utm_term across paid channels.
4. Data QA Checklist: 4 verification steps to run in Meta Events Manager and GA4 DebugView.`,
        expectedOutput: `### Server-Side Tracking & Attribution Blueprint

#### 1. Event Deduplication & CAPI Payload Architecture
Both the client-side JavaScript tag and the server-side webhook must transmit an identical \`event_id\` generated at the moment of interaction:

\`\`\`javascript
// Client-side payload (Browser Tag)
const uniqueEventId = "order_" + checkout.order_id + "_" + Date.now();

fbq('track', 'Purchase', {
  value: 120.00,
  currency: 'USD',
  content_ids: ['SKU_101', 'SKU_102']
}, { eventID: uniqueEventId });

// Server-side sGTM CAPI payload transmitted in parallel
{
  "event_name": "Purchase",
  "event_time": 1729668000,
  "event_id": uniqueEventId, // EXACT MATCH
  "user_data": {
    "em": ["f660ab912ec121d1b1e928a0bb4bc61b15f5ad44d5efdc4e1c92a25e99b8e44a"], // SHA-256 hashed
    "ph": ["254aa248acb47dd654ca3ea53f48c2c26d641d23d7e2e93a1ec56258df7674c4"],
    "client_ip_address": req.ip,
    "client_user_agent": req.headers['user-agent']
  },
  "custom_data": {
    "currency": "USD",
    "value": 120.00
  }
}
\`\`\`

#### 2. Standardized UTM Naming Convention
- **Meta URL Parameter String:**
  \`utm_source=facebook&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{adset.name}}&utm_term={{ad.name}}_{{ad.id}}\`
- **Google Ads Tracking Template:**
  \`{lpurl}?utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={adgroupid}&utm_term={keyword}\`

#### 3. Data QA & Verification Protocol
1. **Event Match Quality (EMQ):** Verify in Meta Events Manager that the EMQ rating is **8.2 / 10** or higher.
2. **Deduplication Check:** Confirm in Meta Test Events that identical client/server events collapse into a single verified event marked *"Deduplicated"*.
3. **GA4 DebugView:** Open GA4 DebugView; verify purchase parameters (\`value\`, \`currency\`, \`transaction_id\`) reflect uncorrupted numerical values.
4. **Attribution Audit:** Reconcile weekly backend CRM transactions against Triple Whale blended dashboard within a 5% margin of variance.`
      },
      conceptGuide: {
        title: "First-Party Data Governance & The Conversion API Imperative",
        overview: "The digital advertising landscape has experienced a generational paradigm shift from client-side cookies to first-party server-side identity resolution. Modern browser security mechanisms (Safari Intelligent Tracking Prevention, Chrome privacy sandbox, Firefox Enhanced Tracking Protection) truncate cookie lifespans and intercept tracking pixels. Server-side tracking restores marketing clarity by establishing a private, first-party data pipeline directly from cloud servers to ad networks, insulating attribution data from browser restrictions.",
        keyPoints: [
          "**Event Match Quality (EMQ):** Meta scores your data from 0 to 10 based on how many hashed user parameters (email, phone, address) accompany the event; high EMQ directly lowers cost-per-acquisition (CPA).",
          "**Event Deduplication:** Sending both browser and server events without identical `event_id` tokens results in double-counted revenue and distorted campaign metrics.",
          "**Blended ROAS (MER):** Never rely solely on individual ad network dashboard metrics; measure Marketing Efficiency Ratio (Total Revenue ÷ Total Ad Spend Across All Channels)."
        ]
      },
      learning: {
        resources: [
          {
            title: "Meta Conversions API (CAPI) Best Practices & Deduplication Guide",
            url: "https://developers.facebook.com/docs/marketing-api/conversions-api/",
            type: "Official Docs"
          },
          {
            title: "Google Tag Manager Server-Side Setup & Architecture Overview",
            url: "https://developers.google.com/tag-platform/tag-manager/server-side",
            type: "Official Docs"
          },
          {
            title: "Triple Whale E-Commerce Attribution & MER Benchmarks",
            url: "https://www.triplewhale.com/blog",
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
      title: "Direct-Response Ad Copy & Hook Matrix Generation",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Generate 3x3 hook-angle matrices testing pain points, social proof, us-vs-them comparisons, and contrarian claims.",
      description: "Writing a single ad caption and hoping for viral performance is a recipe for burning ad spend. High-performing growth teams utilize direct-response copy systems that isolate variables. By constructing a 3x3 Hook Matrix—combining 3 distinct psychological angles (Pain/Embarrassment, Contrarian Shift, Social Proof) with 3 distinct copy lengths (punchy short-copy, story-driven mid-copy, long-form editorial)—marketers generate 9 systematically diverse variations to feed algorithmic ad auctions.",
      playbook: {
        setup: "Review the offer value stack created in Node 2. Identify 3 primary emotional pain points and 3 common buying objections. Open Claude and Notion.",
        execute: "Instruct Claude to generate a 3x3 Direct-Response Matrix: 1) The 'Us vs. Them' Comparison Copy, 2) The 'Shocking Industry Secret' Expose Copy, and 3) The 'Relatable Customer Journey' Case Study Copy. Ensure every ad follows the AIDA/PAS frameworks (Problem, Agitation, Solution, CTA).",
        verify: "Check the first 2 lines of every copy variation: verify the text hook creates an irresistible curiosity gap before the 'See More' ellipsis fold on mobile screens."
      },
      tools: [
        {
          name: "Claude",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Top-tier AI model for writing conversational, emotionally gripping direct-response sales copy without robotic marketing jargon.",
          bestFor: "Direct-response ad copy matrices & customer journey storytelling"
        },
        {
          name: "ChatGPT",
          type: "Freemium",
          url: "https://chatgpt.com",
          description: "Conversational AI ideal for rapid hook line brainstorming, emoji placement, and punchy headline variations.",
          bestFor: "Punchy short-form ad headlines & visual hook text"
        },
        {
          name: "Notion",
          type: "Freemium",
          url: "https://www.notion.so",
          description: "Connected workspace for structuring ad copy matrices, tracking approved creative scripts, and managing media production SOPs.",
          bestFor: "Centralized ad copy matrices & review pipelines"
        }
      ],
      callouts: {
        mistake: "Writing clever, poetic, or punny ad copy instead of clear, direct benefits; clarity consistently out-converts cleverness by 300%.",
        proTip: "Optimize the first 125 characters of ad copy ruthlessly; this is all the user sees on mobile before having to tap 'See more'.",
        mistakes: [
          "Burying the primary offer or problem beneath two paragraphs of fluffy introductory context.",
          "Using forbidden policy words on Meta Ads (e.g. 'Are you struggling with depression?' or 'Do you want to lose 20 lbs?'), which triggers instant account bans.",
          "Neglecting to put a direct call-to-action link in the primary text for Facebook desktop users."
        ],
        proTips: [
          "Frame questions around shared observations rather than direct personal accusations ('Why are most founders working 80 hours?' vs 'Are you lazy?').",
          "Test 'Ugly Notes App' copy: plain unformatted text written like a private message between friends often achieves the highest click-through rates.",
          "End every ad copy variation with a specific micro-commitment command (e.g., 'Tap the link below, take the 60-second quiz, and get your custom diagnostic')."
        ]
      },
      promptLab: {
        title: "3x3 Direct-Response Ad Copy Matrix Generator",
        description: "Generate 9 diverse ad copy variations testing 3 psychological angles across 3 distinct copy lengths with mobile hook optimization.",
        variables: [
          {
            name: "Product Niche",
            label: "Product Niche",
            options: ["B2B AI Automation Software", "DTC Sleep & Recovery Supplement", "Online Coaching & Executive Mentorship", "Fintech Business Credit & Funding"],
            default: "B2B AI Automation Software"
          },
          {
            name: "Primary Competitor Weakness",
            label: "Primary Competitor Weakness",
            options: ["Requires 4 months of complex onboarding & IT setup", "Hidden pricing markups & per-seat penalty fees", "Outdated clunky UI built in 2012"],
            default: "Requires 4 months of complex onboarding & IT setup"
          },
          {
            name: "Target Emotion",
            label: "Target Emotion",
            options: ["Frustration with bloated enterprise legacy tools", "Anxiety over burning cash without clear ROI", "Relief at discovering a streamlined automated alternative"],
            default: "Frustration with bloated enterprise legacy tools"
          }
        ],
        template: `You are a legendary direct-response copywriter in the lineage of Gary Halbert and David Ogilvy, specialized in paid digital acquisition.

Generate a 3x3 Ad Copy Matrix for:
- Product Niche: [Product Niche]
- Primary Competitor Weakness: [Primary Competitor Weakness]
- Target Emotion: [Target Emotion]

Provide:
1. Angle 1 (The Contrarian Epiphany): Short-form copy (under 80 words) optimized for Instagram feeds.
2. Angle 2 (The Us vs. Them Comparison): Medium-length copy (120–180 words) contrasting traditional solutions with the modern AI approach.
3. Angle 3 (The Case Study Transformation): Long-form storytelling copy (250+ words) detailing a real founder's breakthrough.
4. Mobile Hook Audit: Ensure the first 120 characters of each variation contain an open loop or shocking claim that forces the user to tap 'See more'.`,
        expectedOutput: `### 3x3 Direct-Response Ad Copy Matrix

---

#### Variation 1: The Contrarian Epiphany (Short-Form / High-Impact)
**Target Placement:** Instagram Feed & Stories
**Mobile Above-the-Fold Hook (First 118 chars):**
> *Enterprise software companies spent millions convincing you that onboarding needs to take 4 months. It’s a lie.*

**Full Copy:**
Enterprise software companies spent millions convincing you that onboarding needs to take 4 months. It’s a lie. 

They do it so they can bill you $20,000 for 'implementation consultants'.

We built [BrandName] so you can connect your existing CRM, trigger your first autonomous AI workflow, and see real pipeline revenue in 14 minutes. 

No IT tickets. No 6-month contracts. Just instant execution.

👉 Tap below to test it free on your own pipeline today.

---

#### Variation 2: Us vs. Them (Medium-Form Comparison)
**Target Placement:** Facebook Desktop & Mobile Feed
**Mobile Above-the-Fold Hook:**
> *The old way of managing ad funnels: 6 disconnected SaaS tools, 2 agencies, and $8k/mo in wasted retainer fees.*

**Full Copy:**
The old way of managing ad funnels: 
❌ 6 disconnected SaaS subscriptions that don't talk to each other.
❌ 2 junior media buyers guessing which ads to turn off.
❌ $8,000/month in agency retainers with zero revenue accountability.

The modern way with [BrandName]:
✅ One unified dashboard that spots ad creative fatigue before CPA spikes.
✅ Automated server-side attribution that tracks every dollar from click to checkout.
✅ Native AI creative generation that launches fresh high-CTR variations in 60 seconds.

Stop burning ad spend on broken legacy stacks.

🔗 Tap 'Learn More' to see the side-by-side platform comparison.

---

#### Variation 3: The Case Study Transformation (Long-Form Editorial)
**Target Placement:** Facebook Mobile Feed (High-Intent / High-Ticket)
**Mobile Above-the-Fold Hook:**
> *At 2:15 AM on a Tuesday, David was staring at a Meta Ads Manager dashboard bleeding $1,400 a day in unprofitable spend.*

**Full Copy:**
At 2:15 AM on a Tuesday, David was staring at a Meta Ads Manager dashboard bleeding $1,400 a day in unprofitable spend.

His CPA had doubled in 3 weeks. His agency told him 'it's just the algorithm learning'. 

But David didn't have 6 more weeks of runway for the algorithm to 'learn'. He needed profitable conversions immediately.

That's when he made one simple operational change:

Instead of launching one random video ad a week and hoping for a miracle, he deployed our Modular Creative Testing Matrix.

He broke his ad into 3 distinct hooks, 3 visual styles, and 2 offers. 

Within 72 hours, one specific hook reduced his cost per qualified acquisition from $142 down to $38. By day 30, his business was pacing at a record 3.8x blended ROAS.

You don't need a bigger ad budget. You need a systematic creative engine.

We packaged the exact framework David used into a free 12-page diagnostic blueprint.

👇 Tap 'Download Now' to claim your copy before your next campaign launch.`
      },
      conceptGuide: {
        title: "The Mechanics of Cognitive Load & Mobile Above-the-Fold Hooks",
        overview: "On mobile social feeds, consumers process content at an average rate of 1.7 seconds per post. The human eye does not read digital ad copy in linear sequence; it scans for recognizable threat signals, social validation, or self-interest triggers. If the first line of copy fails to penetrate sensory filtering, the ad fails regardless of how brilliant the remaining copy is. High-performing direct-response copy treats the first 120 characters as an ad for the rest of the copy, earning the reader's attention one line at a time.",
        keyPoints: [
          "**The 120-Character Ellipsis Rule:** Always craft the first sentence to end right before the 'See more' cut-off, leaving an unanswered curiosity gap.",
          "**Visual Formatting:** Use single-sentence paragraphs and clean whitespace; dense blocks of text create reading friction that drives viewers away.",
          "**Specificity Converts:** 'We grew revenue by 314% in 68 days' converts significantly higher than vague claims like 'We help you scale faster'."
        ]
      },
      learning: {
        resources: [
          {
            title: "Meta Advertising Standards: Prohibited Content & Personal Attributes Policy",
            url: "https://transparency.fb.com/policies/ad-standards/",
            type: "Official Docs"
          },
          {
            title: "Claude Direct-Response Copywriting Architecture Guide",
            url: "https://docs.anthropic.com/en/prompt-library/copywriting",
            type: "Official Docs"
          },
          {
            title: "The Breakthrough Advertising Copy Framework (Eugene Schwartz)",
            url: "https://www.scientificadvertising.com",
            type: "Case Study"
          }
        ]
      }
    },

    // Node 5
    {
      id: "step-5",
      stepNumber: 5,
      phaseId: "phase-2",
      title: "High-CTR Static Ad Creatives & Visual Stopping Power",
      timeEstimate: "2 hrs",
      difficulty: "Beginner",
      summary: "Design thumb-stopping native social graphics, annotated product callouts, ugly-ads, and founder-note visuals at scale.",
      description: "While video ads receive significant attention, static image ads often deliver the lowest Customer Acquisition Cost (CAC) and highest return on ad spend (ROAS) across cold Meta and Google Display auctions. Modern high-CTR static ads do not look like polished corporate billboards; they look native to the platform. By deploying 'Ugly Ads' (raw iPhone Notes app screenshots, high-contrast Twitter/X style quote graphics, annotated product anatomical diagrams, and side-by-side comparison tables), brands achieve thumb-stop rates exceeding 45%.",
      playbook: {
        setup: "Review the direct-response angles established in Node 4. Open Midjourney v6, Figma, and Canva. Create a 1080x1080 (Square) and 1080x1920 (Story/Reel) master canvas grid.",
        execute: "Design 4 distinct static creative archetypes: 1) The 'Notes App Confession' (handwritten text on yellow paper), 2) The 'Product Anatomy Breakdown' (arrows highlighting proprietary ingredients/features), 3) The 'Us vs. Them Green-Checkmark Table', and 4) The 'Photorealistic In-Context Product Hero' generated in Midjourney.",
        verify: "Run the 'Thumb-Stop Mobile Preview': scale down images to 1.5 inches wide on a mobile screen. Ensure key headlines and comparison icons are readable within 400 milliseconds."
      },
      tools: [
        {
          name: "Midjourney",
          type: "Paid",
          url: "https://www.midjourney.com",
          description: "Top-tier AI image generator for creating photorealistic product hero backgrounds, lifestyle scenes, and contextual textures.",
          bestFor: "Photorealistic product staging & lifestyle ad backgrounds"
        },
        {
          name: "Figma",
          type: "Freemium",
          url: "https://www.figma.com",
          description: "Industry-standard collaborative design tool for building modular ad layout templates, typography hierarchy, and batch exports.",
          bestFor: "Modular ad creative layout design & batch asset export"
        },
        {
          name: "Canva",
          type: "Freemium",
          url: "https://www.canva.com",
          description: "Fast graphic design platform with vast libraries of social media templates, sticker arrows, badges, and quick social ad formatting.",
          bestFor: "Fast social media ad graphic assembly & sticker elements"
        }
      ],
      callouts: {
        mistake: "Designing overly stylized 'agency-grade' ads with tiny fonts, subtle pastels, and zero contrast that blend seamlessly into the feed background.",
        proTip: "Use the 'Ugly Ad Principle': ads that resemble an authentic raw screenshot or user-created meme consistently outperform $10,000 professional photoshoot graphics.",
        mistakes: [
          "Placing crucial text within the top 15% or bottom 20% of a 9:16 vertical canvas, where TikTok and Instagram UI icons permanently cover it.",
          "Using generic royalty-free stock photography of people smiling at laptops, which immediately flags the creative as spam to viewers.",
          "Exporting graphics in low-resolution JPEG with visible compression artifacts around text borders."
        ],
        proTips: [
          "Incorporate visual annotations: hand-drawn red circles or highlighter pen marks around key numbers draw the eye directly to your value proposition.",
          "Design in both 1:1 (feed) and 9:16 (Stories/Reels) ratios; running 1:1 crops in vertical placements causes awkward white border letterboxing.",
          "Use high-contrast color badges: a bright neon green (#00FF66) 'VERIFIED' pill badge creates instant visual stopping power."
        ]
      },
      promptLab: {
        title: "High-CTR Static Ad Concept & Visual Architecture",
        description: "Generate visual design blueprints for 4 proven high-CTR static ad formats with exact layout specs, typography, and visual assets.",
        variables: [
          {
            name: "Ad Format Archetype",
            label: "Ad Format Archetype",
            options: ["The Annotated Anatomy Chart (Product teardown with arrows)", "The 'Us vs. Them' Comparison Matrix", "The Raw iPhone Notes App Screenshot", "The Twitter/X Viral Quote Screenshot"],
            default: "The Annotated Anatomy Chart (Product teardown with arrows)"
          },
          {
            name: "Product Category",
            label: "Product Category",
            options: ["Organic Nootropic Focus Drink", "Minimalist Leather Travel Backpack", "AI Automated Bookkeeping SaaS", "All-in-One Home Gym System"],
            default: "Organic Nootropic Focus Drink"
          },
          {
            name: "Visual Contrast Theme",
            label: "Visual Contrast Theme",
            options: ["Clean Medical Editorial (White/Slate with Emerald Accents)", "Dark Mode Tech (Matte Black with Neon Lime Callouts)", "Warm Earthy Organic (Beige paper texture with deep forest green)"],
            default: "Clean Medical Editorial (White/Slate with Emerald Accents)"
          }
        ],
        template: `You are the executive creative director at a $100M DTC performance marketing agency.

Design a high-CTR static ad creative specification for:
- Ad Format Archetype: [Ad Format Archetype]
- Product Category: [Product Category]
- Visual Contrast Theme: [Visual Contrast Theme]

Provide:
1. Exact Canvas Dimensions & Layout Grid: 1080x1080 and 1080x1920 layout blueprints.
2. Visual Hierarchy & Focal Asset: Description of central imagery, Midjourney generation prompt, and background treatment.
3. Typography & Micro-Copy Placements: Headline text, font styling, color hex codes, and annotation callouts.
4. Stopping-Power Mechanism: Why this visual breaks the user's subconscious feed-scrolling trance.`,
        expectedOutput: `### High-CTR Static Ad Creative Blueprint

#### 1. Canvas Dimensions & Grid Architecture
- **Format:** 1080x1080 (Square Feed) + 1080x1920 (Vertical Story/Reel)
- **Safe Zone:** All typography kept strictly within central 880x880px boundaries.
- **Background Palette:** Clean Medical Slate (\`#F8FAFC\`) with subtle 2% grain texture.

#### 2. Visual Hierarchy & Central Asset
- **Centerpiece:** Centered 3D transparent glass bottle of the focus beverage, floating weightlessly with water condensation droplets.
- **Midjourney v6 Hero Prompt:**
  \`/imagine prompt: Studio product photography of a modern minimalist amber glass beverage bottle, clear condensation droplets, floating above a clean white marble pedestal, soft daylight studio lighting, ultra-sharp focus, photorealistic, 8k resolution --ar 1:1 --style raw --v 6.1\`

#### 3. Typography & Annotated Callouts
- **Master Headline (Top Center):** \`"WHY SILICON VALLEY REPLACED COFFEE"\`
  - *Font:* Archivo Black (All Caps), Color: Deep Charcoal (\`#0F172A\`), Font Size: 52pt.
- **Anatomy Arrow Callouts (Hand-drawn white arrows with charcoal text badges):**
  - **Arrow 1 (Top Cap):** *"Zero Jitters: 200mg L-Theanine + Pure Lion's Mane"* (Emerald pill badge \`#059669\`)
  - **Arrow 2 (Center Liquid):** *"Sustained 6-Hour Focus: Organic Cold-Brew Arabica"*
  - **Arrow 3 (Bottom Base):** *"Zero Sugar, Zero Crash: Sweetened with Monk Fruit"*
- **Footer Social Proof Bar (Bottom Center):**
  - ⭐⭐⭐⭐⭐ *"Over 42,000 Boxes Shipped | 4.9 Star Rating"*

#### 4. Stopping-Power Mechanism
> **Cognitive Trigger:** *The Scientific Teardown Reflex.* By annotating a consumer product like a technical engineering diagram, the ad engages analytical curiosity. The viewer stops scrolling to read the individual callout arrows, generating a 3.5-second dwell time that drastically lowers Meta auction CPMs.`
      },
      conceptGuide: {
        title: "Visual Native-ness & The Banner Blindness Antidote",
        overview: "Banner blindness is the human brain's learned ability to ignore anything that looks like an ad. Polished graphic design, centered corporate logos, and stock photography trigger instantaneous dismissal. Native advertising is the counter-strategy: designing creative assets that borrow the visual vernacular of the platform they appear on. An ad that looks like an authentic user's iPhone Notes app, a tweet from a respected founder, or a hand-drawn diagram passes through the subconscious filter, securing genuine cognitive attention before the user realizes it is sponsored content.",
        keyPoints: [
          "**The Native Aesthetic:** Ads formatted as native platform UI (iMessage bubbles, Reddit threads, Twitter screenshots) routinely achieve 2x higher CTRs.",
          "**The Squint Contrast Rule:** The primary focal element and headline must remain identifiable even when viewed with blurry peripheral vision.",
          "**Visual Diversity in Ad Sets:** Never test 5 variations of the same visual style; test 1 meme ad, 1 product anatomy chart, 1 customer review card, and 1 lifestyle photo."
        ]
      },
      learning: {
        resources: [
          {
            title: "Figma Direct-Response Ad Production System & Template Setup",
            url: "https://www.figma.com/community",
            type: "Growth Guide"
          },
          {
            title: "Midjourney Generative Commercial Product Staging Documentation",
            url: "https://docs.midjourney.com",
            type: "Official Docs"
          },
          {
            title: "Nielsen Norman Group: Eye-Tracking Study of Banner Blindness",
            url: "https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/",
            type: "Case Study"
          }
        ]
      }
    },

    // Node 6
    {
      id: "step-6",
      stepNumber: 6,
      phaseId: "phase-2",
      title: "Modular AI Video Ads, UGC Mashups & Voiceovers",
      timeEstimate: "2.5 hrs",
      difficulty: "Intermediate",
      summary: "Produce modular video ads with interchangeable 3-second visual hooks, relatable creator bodies, and clear call-to-action end cards.",
      description: "Producing custom video ads traditionally required hiring expensive agencies, mailing product samples to unreliable influencers, and waiting weeks for footage. Modern performance marketing relies on Modular AI Video Production. By breaking video ads into independent Lego blocks (3 interchangeable opening visual hooks + 1 core body demonstration + 2 call-to-action end cards), a media team can synthesize 6 complete video ad variations in an afternoon using tools like HeyGen, ElevenLabs, and CapCut Pro.",
      playbook: {
        setup: "Set up HeyGen with a natural presenter avatar or customer avatar. Prepare 3 distinct opening hook scripts from Node 4. Open CapCut Pro and ElevenLabs.",
        execute: "Generate the central presenter body video in HeyGen with natural hand gestures and conversational pacing. Layer an emotive voiceover from ElevenLabs. In CapCut Pro, assemble 3 modular opening hooks: 1) A jarring green-screen background reaction, 2) A fast unboxing hands-only shot, and 3) A dynamic screen recording. Splice each hook to the shared core body and add dynamic kinetic subtitles.",
        verify: "Export 3 distinct MP4 video files: verify that all 3 video variations deliver a visual pattern interrupt within the first 1.8 seconds and transition smoothly to the core pitch."
      },
      tools: [
        {
          name: "HeyGen",
          type: "Freemium",
          url: "https://www.heygen.com",
          description: "Market-leading AI video avatar platform producing photorealistic digital humans with natural lip-syncing and creator pacing.",
          bestFor: "AI creator avatars, UGC video presenters & multilingual ads"
        },
        {
          name: "ElevenLabs",
          type: "Freemium",
          url: "https://elevenlabs.io",
          description: "Generative voice AI engine generating emotionally expressive voiceovers and conversational pacing for digital ad creatives.",
          bestFor: "High-energy UGC voiceovers & emotional inflection"
        },
        {
          name: "CapCut Pro",
          type: "Freemium",
          url: "https://www.capcut.com",
          description: "Desktop video editor with automated auto-captions, word-by-word highlights, speed ramping, and viral sound effects.",
          bestFor: "Fast UGC assembly, modular hook splicing & kinetic captions"
        }
      ],
      callouts: {
        mistake: "Producing a single rigid 45-second video ad that cannot be modified when the opening hook fails to achieve a 25% thumb-stop rate.",
        proTip: "Keep the body and offer identical across your testing batch; change ONLY the first 3 seconds of the video to isolate what visual hook drives clicks.",
        mistakes: [
          "Letting AI avatars speak in an unnatural, monotone cadence without background ambient music or sound effect accents.",
          "Failing to add captions: over 70% of social media users scroll mobile video ads with the sound muted.",
          "Using slow corporate logo animations at the beginning of the video, which guarantees a 90% drop-off within 2 seconds."
        ],
        proTips: [
          "Use the 'Green Screen Reaction' hook: have an AI avatar or creator react in shock to a controversial tweet or news headline.",
          "Add a fast zoom-punch (108% scale) every 3 seconds to reset the viewer's subconscious visual adaptation.",
          "Place an explicit, animated 'Shop Now' or 'Claim Offer' button sticker on screen during the final 5 seconds with a chime SFX."
        ]
      },
      promptLab: {
        title: "Modular 3x1x2 UGC Video Ad Script Choreographer",
        description: "Generate a complete modular video ad script with 3 interchangeable 3-second opening hooks, a core body pitch, and 2 CTA end cards.",
        variables: [
          {
            name: "Video Format",
            label: "Video Format",
            options: ["Vertical UGC Short / TikTok Ad (9:16)", "Square Feed Video (1:1)", "Horizontal YouTube In-Stream (16:9)"],
            default: "Vertical UGC Short / TikTok Ad (9:16)"
          },
          {
            name: "Hook Style 1",
            label: "Hook Style 1",
            options: ["The 'Stop Scrolling' Visual Shock", "The 'Do Not Buy This' Reverse Psychology", "The Honest Review Exposé"],
            default: "The 'Do Not Buy This' Reverse Psychology"
          },
          {
            name: "Call to Action",
            label: "Call to Action",
            options: ["Claim 50% Off Starter Bundle + Free Shipping", "Take the 60-Second Custom Diagnostic Quiz", "Book a Free 15-Minute Pipeline Audit"],
            default: "Take the 60-Second Custom Diagnostic Quiz"
          }
        ],
        template: `You are the creative director of a performance video studio that has generated over $50M in TikTok and Meta ad revenue.

Structure a Modular UGC Video Ad Script for:
- Video Format: [Video Format]
- Hook Style 1: [Hook Style 1]
- Call to Action: [Call to Action]

Provide:
1. 3 Interchangeable Opening Hooks (0:00 - 0:03):
   - Hook A: [Hook Style 1] (Visual action + exact spoken words)
   - Hook B: The Common Mistake / Agitation Hook
   - Hook C: The Shocking Demonstration / Unboxing Hook
2. Shared Core Body Pitch (0:03 - 0:24): The problem, proprietary mechanism, and real-life demonstration.
3. 2 Modular CTA End Cards (0:24 - 0:30): Urgency-driven and risk-reversal driven closing commands.`,
        expectedOutput: `### Modular UGC Video Ad Production Script

#### 1. Three Interchangeable Opening Hooks (0:00 - 0:03)

- **Hook A (Reverse Psychology):**
  - **Visual:** Creator in casual hoodie holding product close to camera, shaking head with serious facial expression. Fast zoom punch.
  - **Audio & Spoken:** [SFX: Record scratch] *"Do NOT buy this if you’re perfectly happy working 60 hours a week on manual spreadsheets."*

- **Hook B (Common Mistake Agitation):**
  - **Visual:** Fast split-screen. On left, red X over a frustrated person typing on an old clunky laptop. On right, green check over streamlined mobile dashboard.
  - **Audio & Spoken:** [SFX: Error buzzer] *"The single biggest mistake growth marketers are making right now in their ad tracking..."*

- **Hook C (Shocking Live Demonstration):**
  - **Visual:** Screen recording showing a real-time terminal sync: 1 click turns a red $2,400 CPA into a green $420 profit indicator.
  - **Audio & Spoken:** [SFX: Cash register ding] *"Watch what happens to our customer acquisition cost the second we flip this single toggle."*

---

#### 2. Shared Core Body Pitch (0:03 - 0:24)
- **0:03 - 0:09 (The Problem):**
  - **Visual:** Fast B-roll cuts of chaotic spreadsheets and red ad metrics.
  - **Voiceover:** *"Most media buyers have no idea which ad creatives actually drive purchases because browser cookies drop half your conversion data."*
- **0:09 - 0:17 (The Mechanism):**
  - **Visual:** Clean product UI demonstration highlighting the 1-click server-side sync feature.
  - **Voiceover:** *"That’s why we built [BrandName]. It bypasses browser ad-blockers entirely, piping first-party server data straight into Meta’s algorithm."*
- **0:17 - 0:24 (The Social Proof):**
  - **Visual:** Fast scroll of verified 5-star customer reviews and revenue graphs.
  - **Voiceover:** *"Over 1,200 founders are using it to cut their blended acquisition costs by 35% in their first 14 days."*

---

#### 3. Modular Call to Action End Cards (0:24 - 0:30)

- **End Card 1 (Urgency Driven):**
  - **Visual:** Animated neon button pulsating: *'TAKE THE FREE AUDIT'*. Arrow pointing down toward platform link button.
  - **Voiceover:** *"Stop guessing with your ad budget. Tap the link below, take the 60-second diagnostic, and unlock your custom roadmap right now."*

- **End Card 2 (Risk-Reversal Driven):**
  - **Visual:** Clean badge graphic: *'100% Free Trial | No Credit Card Required'*.
  - **Voiceover:** *"Try it completely free on your next campaign. If it doesn't uncover hidden revenue in 7 days, cancel with one click. Tap below to start."*`
      },
      conceptGuide: {
        title: "Modular Creative Iteration & The 3-Second Hook Rule",
        overview: "In video advertising, 80% of creative variance is determined within the first 3 seconds. The remaining 25 seconds of the pitch matter only if the viewer has not swiped away. Traditional video production treats an ad as an indivisible whole; if the video underperforms, the entire production budget is wasted. Modular video production separates the 'Hook' (attention capture) from the 'Retention Pitch' (desire building) and the 'Call to Action' (friction reduction). By isolating and testing multiple hooks against a proven body, creators multiply their chances of finding a winning creative.",
        keyPoints: [
          "**The Hook-Rate Metric:** Measure Thumbstop Rate (3-second continuous video views divided by total impressions); target 35%+ on Meta and 40%+ on TikTok.",
          "**Body Reusability:** Once a core body explanation proves to have a high Hold Rate (viewers watching past 15 seconds), pair it with 10 new hook variations.",
          "**Mobile Screen Safe Zones:** Keep all essential subtitles and product demonstrations within the middle 60% of the vertical frame to avoid being occluded by comments and share buttons."
        ]
      },
      learning: {
        resources: [
          {
            title: "HeyGen Video Avatar Creative Guidelines & Production Documentation",
            url: "https://docs.heygen.com",
            type: "Official Docs"
          },
          {
            title: "CapCut Desktop UGC Editing & Kinetic Caption Formatting Guide",
            url: "https://www.capcut.com/resource",
            type: "Growth Guide"
          },
          {
            title: "TikTok Creative Center: Top Performing Ad Hooks & Audio Trends",
            url: "https://ads.tiktok.com/business/creativecenter",
            type: "Case Study"
          }
        ]
      }
    },

    // Node 7
    {
      id: "step-7",
      stepNumber: 7,
      phaseId: "phase-3",
      title: "Message-Matched Advertorials & Dedicated Landing Pages",
      timeEstimate: "2.5 hrs",
      difficulty: "Intermediate",
      summary: "Build fast-loading pre-sell advertorials and dedicated landing pages that mirror the exact headline and visual promise of the ad clicked.",
      description: "Sending cold ad traffic directly to a generic website homepage or unformatted product catalog is the fastest way to achieve a 95% bounce rate. Cold prospects require education and narrative context before they are ready to purchase. High-growth acquisition funnels route cold traffic through 'Pre-Sell Advertorials' and dedicated landing pages built in Framer or v0. By strictly enforcing Message Match—ensuring the ad's headline, imagery, and promised transformation appear prominently above the fold on the landing page—marketers eliminate cognitive friction and double conversion rates.",
      playbook: {
        setup: "Review the winning ad creative from Phase 2. Open Framer or v0 by Vercel. Select a high-converting editorial or direct-to-consumer landing page wireframe.",
        execute: "Build a high-velocity landing page architecture: 1) Above-the-fold Message-Matched Headline, 2) Visual Hero with Trust Badges (Forbes, WSJ, 4.9★ rating), 3) The 'Why Existing Solutions Fail' problem breakdown, 4) The Proprietary Mechanism explanation, 5) Sticky Mobile CTA button, and 6) Interactive FAQ accordion addressing the top 4 buying objections.",
        verify: "Run Google PageSpeed Insights: verify mobile performance score is 90+ with Largest Contentful Paint (LCP) under 1.8 seconds. Verify the headline precisely matches the ad copy promise."
      },
      tools: [
        {
          name: "Framer",
          type: "Freemium",
          url: "https://www.framer.com",
          description: "Visual web design and publishing platform with lightning-fast global CDN hosting, interactive animations, and responsive CMS collections.",
          bestFor: "High-performance responsive landing pages & rapid publishing"
        },
        {
          name: "v0 by Vercel",
          type: "Freemium",
          url: "https://v0.dev",
          description: "Generative AI UI tool creating production-ready React and Tailwind CSS landing page sections directly from natural language prompts.",
          bestFor: "AI landing page component generation & clean Tailwind code"
        },
        {
          name: "Unbounce",
          type: "Paid",
          url: "https://unbounce.com",
          description: "Pioneering landing page platform featuring Smart Traffic AI optimization that automatically routes visitors to the highest-converting page variant.",
          bestFor: "AI multi-variant traffic routing & landing page A/B testing"
        }
      ],
      callouts: {
        mistake: "Sending cold paid traffic to your generic website homepage with navigation menus like 'About Us', 'Blog', and 'Careers', which distract the visitor from converting.",
        proTip: "Strip the main navigation header completely on dedicated ad landing pages; visitors should have only two options: convert or leave.",
        mistakes: [
          "Failing to mirror the exact headline from the ad; if an ad promises 'The 3-Minute Bookkeeping Method' and the page says 'All-in-One Accounting', users bounce immediately.",
          "Using slow, uncompressed 10MB images that cause mobile load times to exceed 4 seconds, cutting conversions in half.",
          "Placing the primary call-to-action button below the fold on mobile viewports."
        ],
        proTips: [
          "Implement a 'Sticky Bottom CTA Bar' on mobile that remains visible as the user scrolls through long educational advertorial content.",
          "Use the 'Listicle Advertorial' format (e.g., '5 Reasons Why 10,000 Engineers Switched to X'); listicles pre-frame skepticism into desire.",
          "Add dynamic text replacement parameters in Framer so the headline automatically reflects the exact search keyword the user typed on Google."
        ]
      },
      promptLab: {
        title: "Message-Matched High-Converting Advertorial Architect",
        description: "Draft an educational pre-sell advertorial blueprint with message matching, scientific proof points, and objection-crushing FAQs.",
        variables: [
          {
            name: "Traffic Source",
            label: "Traffic Source",
            options: ["Cold Meta Feed Traffic", "High-Intent Google Search Ads", "TikTok Spark Ads (Gen-Z & Millennials)", "LinkedIn B2B Sponsored InMail"],
            default: "Cold Meta Feed Traffic"
          },
          {
            name: "Page Format",
            label: "Page Format",
            options: ["The Investigative Journalism Advertorial", "The 5-Reason Listicle Pre-Sell", "The Direct Founder Open-Letter", "The Interactive Comparison Landing Page"],
            default: "The Investigative Journalism Advertorial"
          },
          {
            name: "Core Transformation",
            label: "Core Transformation",
            options: ["Eliminate Chronic Back Pain in 14 Days", "Automate B2B Inbound Lead Qualification", "Double Shopify Store Average Order Value"],
            default: "Automate B2B Inbound Lead Qualification"
          }
        ],
        template: `You are an elite conversion rate optimization (CRO) director and advertorial copywriter behind 8-figure e-commerce and SaaS funnels.

Structure a high-converting pre-sell advertorial page for:
- Traffic Source: [Traffic Source]
- Page Format: [Page Format]
- Core Transformation: [Core Transformation]

Provide:
1. Above-The-Fold Architecture: Eyebrow tag, primary headline (strictly message-matched to ad), sub-headline, and hero image direction.
2. The 3-Act Educational Narrative:
   - Act 1: The Frustrating Status Quo (Why traditional methods fail)
   - Act 2: The Scientific Breakthrough (The proprietary mechanism)
   - Act 3: The Verified Proof (Data tables and clinical/case metrics)
3. Sticky Mobile CTA Box Copy & Color Styling.
4. Top 3 Objection-Crushing FAQs.`,
        expectedOutput: `### Message-Matched Pre-Sell Advertorial Architecture

#### 1. Above-The-Fold Architecture
- **Eyebrow Tag:** \`SPECIAL INVESTIGATIVE REPORT | OCTOBER 2026\`
- **Message-Matched Headline:**
  > *"Why 85% of Inbound B2B Leads Never Pick Up the Phone—And The Autonomous AI Mechanism That Solves It in 60 Seconds."*
- **Sub-Headline:** *"New data reveals that waiting more than 5 minutes to contact an inbound lead decreases conversion rates by 800%. Here is how leading software founders automated the entire discovery call on autopilot."*
- **Hero Image Direction:** Split photograph: on left, an empty sales office at 6:00 PM; on right, an automated AI workflow booking verified calendar appointments in real time.

#### 2. The 3-Act Educational Narrative
- **Act 1: The Broken Status Quo:**
  Discusses the hidden cost of hiring junior SDRs who take 4 hours to send generic templated emails. Quotes MIT lead response time studies proving that delayed response creates immediate prospect disinterest.
- **Act 2: The Breakthrough Mechanism (The 60-Second Instant Triage):**
  Introduces the proprietary vehicle: an intelligent conversational engine that interacts with the prospect while they are still active on the landing page, answering technical objections and syncing straight to executive calendars.
- **Act 3: Verified Data Proof:**
  Presents a side-by-side performance table showing traditional SDR response times (184 minutes, 7% booking rate) versus Autonomous AI qualification (48 seconds, 34% booking rate).

#### 3. Sticky Mobile CTA Module
- **Placement:** Fixed 60px bottom bar on mobile screens.
- **Button Styling:** High-contrast Vibrant Coral (\`#FF5533\`) with white bold text.
- **Copy:** *"CLAIM YOUR FREE 14-DAY PIPELINE AUDIT ➡️"*

#### 4. Objection-Crushing FAQs
- **Q: Does this replace our existing sales team?**
  *A: No. It eliminates the manual administrative screening work so your senior reps only spend time on high-value closing calls with pre-qualified buyers.*
- **Q: How difficult is the technical integration?**
  *A: It takes under 15 minutes. Connects directly to HubSpot, Salesforce, Slack, and Google Calendar via native one-click integrations.*
- **Q: What happens if an inbound lead asks a complex technical question?**
  *A: The AI references your verified documentation library; if an answer falls below a 95% confidence threshold, it gracefully flags a human specialist on Slack.*`
      },
      conceptGuide: {
        title: "Message Match & The Law of Congruence",
        overview: "In digital psychology, conversion is a function of cognitive momentum. When a user clicks an ad, their brain expects an immediate visual and semantic confirmation that they have arrived at the right place. If an ad highlights 'The 3-Ingredient Organic Barrier Cream' but lands on a page with a generic headline like 'Welcome to Nature Skincare', the brain encounters an abrupt 'congruence error', triggering suspicion and immediate bounce behavior. Message matching enforces strict continuity across headline keywords, color palettes, and value promises from the ad impression down to the checkout receipt.",
        keyPoints: [
          "**The Scent Trail:** Maintain identical typography, primary imagery, and language between ad creative and landing page.",
          "**The Navigation Quarantine:** Eliminating exit links (menus, headers, footer site directories) increases primary CTA conversion rates by 28% to 40%.",
          "**Page Speed Elasticity:** Every additional 100 milliseconds of mobile latency reduces conversion rates by 1.1%; prioritize clean Tailwind HTML over heavy third-party script widgets."
        ]
      },
      learning: {
        resources: [
          {
            title: "Framer Official Responsive Web Design & Performance Documentation",
            url: "https://www.framer.com/learn/",
            type: "Official Docs"
          },
          {
            title: "v0 by Vercel Generative UI & Component Scaffold Guide",
            url: "https://v0.dev/docs",
            type: "Official Docs"
          },
          {
            title: "Oli Gardner's 7 Principles of Conversion Centered Design",
            url: "https://unbounce.com/conversion-centered-design/",
            type: "Growth Guide"
          }
        ]
      }
    },

    // Node 8
    {
      id: "step-8",
      stepNumber: 8,
      phaseId: "phase-3",
      title: "Interactive AI Lead Magnets, Quizzes & ROI Calculators",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Capture zero-party lead data at 40%+ conversion rates using interactive diagnostic quizzes and personalized AI assessment tools.",
      description: "Generic 'Download Our 20-Page PDF E-Book' lead magnets convert at less than 3% on cold traffic. Modern consumers demand instant, personalized gratification. High-converting growth funnels deploy interactive AI lead magnets: 60-second diagnostic quizzes, personalized assessment scorecards, and interactive financial ROI calculators built in Tally, Typeform, or custom React via Cursor. By answering 5 targeted questions, users provide rich 'zero-party data' (budget, pain points, urgency) in exchange for a customized diagnostic report, achieving 40%+ opt-in rates.",
      playbook: {
        setup: "Identify the single most pressing diagnostic question your target audience wants answered (e.g., 'What is your true customer acquisition cost?' or 'Which skin barrier type are you?'). Open Tally, Typeform, or Cursor.",
        execute: "Build a 5-step interactive quiz: 1) Low-friction Question #1 (broad categorical preference), 2) Pain Point Identification Question #2, 3) Budget / Scale Qualification Question #3, 4) The 'Calculating Your Custom Strategy' animated loading screen, and 5) The Email/Phone Gate with instant personalized value delivery.",
        verify: "Test the quiz on mobile devices: ensure the completion time is under 75 seconds, zero-party data fields populate smoothly into your CRM, and opt-in rate exceeds 35% on cold ad traffic."
      },
      tools: [
        {
          name: "Tally",
          type: "Free",
          url: "https://tally.so",
          description: "Simple, powerful free form builder that works like a document, supporting conditional logic, calculations, and custom webhooks.",
          bestFor: "Clean zero-party data lead forms & interactive logic quizzes"
        },
        {
          name: "Typeform",
          type: "Freemium",
          url: "https://www.typeform.com",
          description: "Conversational multi-step form and survey platform designed for high-engagement mobile quizzes with smooth card transitions.",
          bestFor: "Conversational mobile quizzes & multi-branch logic"
        },
        {
          name: "Cursor",
          type: "Freemium",
          url: "https://www.cursor.com",
          description: "AI-native code editor for building bespoke interactive React calculators, animated scorecards, and custom embed widgets.",
          bestFor: "Building custom interactive React ROI calculators & widget embeds"
        }
      ],
      callouts: {
        mistake: "Asking for email and phone numbers on screen #1 of the quiz, which causes an immediate 80% abandonment rate.",
        proTip: "Add an animated 2.5-second 'Analyzing Your Results...' loading bar before the email capture screen; the micro-delay builds anticipation and increases opt-in rates by 22%.",
        mistakes: [
          "Making the quiz too long (over 7 questions), causing mobile users to abandon before reaching the lead capture form.",
          "Failing to pipe quiz answers into custom CRM properties, preventing automated segmented email personalization.",
          "Sending the user a generic static thank-you page instead of displaying their personalized quiz score and tailored recommendations."
        ],
        proTips: [
          "Always start with an easy, non-intrusive multiple-choice question to trigger Robert Cialdini's 'Commitment and Consistency' psychological reflex.",
          "Incorporate a live interactive ROI slider calculator; prospects love playing with numbers to see how much money they could save.",
          "Trigger an immediate automated SMS containing a direct link to their private diagnostic results scorecard."
        ]
      },
      promptLab: {
        title: "5-Step Diagnostic Quiz & Zero-Party Lead Architecture",
        description: "Design a high-converting 5-step diagnostic quiz with conditional branching logic, micro-commitments, and personalized outcome scoring.",
        variables: [
          {
            name: "Target Industry",
            label: "Target Industry",
            options: ["B2B SaaS Growth & Marketing", "Personal Finance & Wealth Management", "DTC Clean Skincare & Beauty", "Executive Career Coaching"],
            default: "B2B SaaS Growth & Marketing"
          },
          {
            name: "Diagnostic Objective",
            label: "Diagnostic Objective",
            options: ["The Growth Bottleneck Audit (Find what's stalling revenue)", "The Software Stack Waste Calculator (Calculate unused SaaS spend)", "The Personalized Treatment Protocol (Find exact formula match)"],
            default: "The Growth Bottleneck Audit (Find what's stalling revenue)"
          },
          {
            name: "Opt-In Incentive",
            label: "Opt-In Incentive",
            options: ["Personalized 3-Page PDF Strategic Audit", "Instant Custom Scorecard + 14-Day Action Plan", "Free Tailored Product Recommendation Bundle"],
            default: "Instant Custom Scorecard + 14-Day Action Plan"
          }
        ],
        template: `You are the lead conversion architect and behavioral psychologist for a world-class growth marketing agency.

Design an interactive 5-step diagnostic lead quiz for:
- Target Industry: [Target Industry]
- Diagnostic Objective: [Diagnostic Objective]
- Opt-In Incentive: [Opt-In Incentive]

Provide:
1. Question Sequence Breakdown (Questions 1 to 5): Question copy, 3 to 4 multiple-choice answers, and psychological intent (Micro-commitment, Pain, Qualification).
2. The Anticipation Loading Screen: Copy and visual cues for the 'Analyzing Your Data' transition state.
3. The Email/Phone Gate Copy: High-converting headline and subtext that justifies why contact info is required.
4. Segmented Outcome Logic: 3 distinct customized diagnostic result profiles based on user responses.`,
        expectedOutput: `### Interactive 5-Step Diagnostic Lead Architecture

#### 1. Five-Question Sequence Matrix

- **Question 1: Low-Friction Icebreaker (Commitment Reflex)**
  - *Question:* *"What is your company's primary growth focus for the next 2 quarters?"*
  - *Options:* A) Scaling cold outbound sales | B) Fixing paid ad ROAS & creative fatigue | C) Expanding into enterprise accounts | D) Improving customer retention/reducing churn
  - *Intent:* Low psychological resistance; establishes active engagement.

- **Question 2: Pain Point Diagnostic**
  - *Question:* *"What is currently your single biggest operational bottleneck?"*
  - *Options:* A) Leads are too expensive | B) Sales reps spend all day on manual data entry | C) Can't track which campaigns actually generate revenue | D) High demo no-show rates
  - *Intent:* Forces conscious recognition of specific financial pain.

- **Question 3: Revenue Scale Qualification**
  - *Question:* *"What is your current monthly recurring revenue (MRR) tier?"*
  - *Options:* A) Under $15,000/mo | B) $15,000 to $60,000/mo | C) $60,000 to $250,000/mo | D) Over $250,000/mo
  - *Intent:* Silently routes high-tier prospects to VIP sales calendars and lower tiers to self-serve nurture.

- **Question 4: Current Stack Friction**
  - *Question:* *"How many different software tools are you currently paying for to manage this workflow?"*
  - *Options:* A) 1 to 2 tools | B) 3 to 5 tools | C) 6+ bloated subscriptions | D) Honestly not sure
  - *Intent:* Amplifies frustration with fragmented competitor tools.

- **Question 5: Desired Timeline**
  - *Question:* *"How quickly do you need this operational bottleneck solved?"*
  - *Options:* A) Immediately (within 14 days) | B) Next 30 to 60 days | C) Just exploring options
  - *Intent:* Measures sales urgency for automated lead scoring.

---

#### 2. The Anticipation Loading State (Screen 6)
- **Duration:** 2.8 seconds with active progress bar (0% -> 100%).
- **Animated Text Cycle:**
  - *0.0s:* *"Analyzing your growth bottleneck answers..."*
  - *1.2s:* *"Benchmarking your metrics against 850+ SaaS companies..."*
  - *2.2s:* *"Compiling your custom 14-day action roadmap..."*

---

#### 3. The Lead Capture Gate (Screen 7)
- **Headline:** *"Your Personalized Growth Diagnostic is Ready."*
- **Sub-headline:** *"Where should we send your custom 14-day action plan and stack benchmark report?"*
- **Fields:** Work Email + Mobile Number (for instant SMS scorecard access).
- **CTA Button:** \`"UNLOCK MY CUSTOM ROADMAP ➡️"\`
- **Micro-Trust Badge:** 🔒 *Zero spam guarantee. Unsubscribe with 1-click at any time.*

---

#### 4. Segmented Outcome Profiles
1. **Tier A (The High-Volume Enterprise):** High MRR + Immediate need ➡️ Direct booking calendar embed with Senior Partner.
2. **Tier B (The Mid-Market Optimizer):** Mid MRR + Tool consolidation focus ➡️ Automated video walkthrough of the unified AI workflow.
3. **Tier C (The Early-Stage Builder):** Lower MRR ➡️ Self-serve educational email drip with template downloads.`
      },
      conceptGuide: {
        title: "Zero-Party Data Acquisition & Sunk-Cost Commitment",
        overview: "Zero-party data is data that a consumer intentionally and proactively shares with a brand (preferences, pain points, purchase intentions). Unlike third-party cookies purchased from brokers, zero-party data carries extreme predictive accuracy and zero regulatory compliance risk. Interactive quizzes leverage Robert Cialdini's Principle of Commitment and Consistency: once a prospect invests 60 seconds answering targeted questions about their problems, they develop a psychological sunk-cost commitment, making them 4x more likely to provide their contact information to see their results.",
        keyPoints: [
          "**The Micro-Commitment Principle:** Start with effortless binary questions before introducing sensitive revenue or contact inquiries.",
          "**Personalized Value Reciprocity:** Consumers gladly share private contact details if they believe the output is a bespoke algorithmically generated report rather than a generic brochure.",
          "**Automated Segment Tagging:** Pass all quiz answers directly into email automation platforms (Klaviyo/ActiveCampaign) to trigger hyper-personalized follow-up emails."
        ]
      },
      learning: {
        resources: [
          {
            title: "Tally Forms Conditional Logic & Custom Webhook Documentation",
            url: "https://tally.so/help",
            type: "Official Docs"
          },
          {
            title: "Typeform Conversational Design & Quiz Completion Rate Best Practices",
            url: "https://www.typeform.com/blog",
            type: "Growth Guide"
          },
          {
            title: "Forrester Research: The Strategic Imperative of Zero-Party Data",
            url: "https://www.forrester.com/blogs/zero-party-data/",
            type: "Case Study"
          }
        ]
      }
    },

    // Node 9
    {
      id: "step-9",
      stepNumber: 9,
      phaseId: "phase-3",
      title: "Behavioral Email & SMS Drip Nurture Sequences",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Automate multi-day educational and objection-crushing email sequences segmented by user quiz answers and site behavior.",
      description: "Over 95% of qualified leads captured from cold paid ad traffic will not buy on Day 1. If your sales funnel lacks an automated backend nurture system, you are abandoning the vast majority of your advertising ROI. Modern lifecycle marketing uses behavioral triggers in platforms like Klaviyo, Loops, and ActiveCampaign to deliver targeted 7-day automated email and SMS sequences. Segmented by the prospect's quiz answers and browse history, these drips systematically dismantle buying objections, deliver social proof case studies, and deploy ethical deadline urgency.",
      playbook: {
        setup: "Integrate your quiz/landing page webhook directly into Klaviyo or Loops. Create custom user properties matching quiz answers (e.g., `primary_bottleneck`, `revenue_tier`).",
        execute: "Write a 5-part behavioral email drip: 1) Day 0 (Instant Diagnostic Results Delivery + Quick Win), 2) Day 1 (The Origin Story / Epiphany Bridge), 3) Day 3 (The Case Study Breakdown of a Client Transformation), 4) Day 5 (The Overcoming Objections Teardown), and 5) Day 7 (The Final Ethical Urgency / Bonus Expiry).",
        verify: "Send test emails: verify inbox placement in Gmail and Apple Mail (avoiding the Promotions tab), confirm personalization tags render correctly, and achieve a 45%+ Open Rate on Email #1."
      },
      tools: [
        {
          name: "Klaviyo",
          type: "Freemium",
          url: "https://www.klaviyo.com",
          description: "Leading e-commerce and digital marketing automation platform with advanced segmentation, predictive analytics, and SMS flows.",
          bestFor: "Behavioral email & SMS flows, predictive LTV & segmentation"
        },
        {
          name: "Loops",
          type: "Freemium",
          url: "https://loops.so",
          description: "Modern email platform built specifically for SaaS and software companies, offering clean visual flow builders and developer APIs.",
          bestFor: "SaaS lifecycle emails, transactional alerts & product onboarding"
        },
        {
          name: "ActiveCampaign",
          type: "Paid",
          url: "https://www.activecampaign.com",
          description: "Enterprise marketing automation and CRM platform with multi-channel branching logic, site tracking, and lead scoring.",
          bestFor: "Complex conditional branching logic & B2B lead scoring"
        }
      ],
      callouts: {
        mistake: "Blasting your entire subscriber list with the exact same generic promotional newsletter every Tuesday, causing unsubscriptions to skyrocket.",
        proTip: "Send Email #1 from a personal name ('Sarah from [Brand]' rather than 'Team [Brand]'); plain-text emails without heavy HTML graphics bypass Gmail's Promotions tab.",
        mistakes: [
          "Failing to send Email #1 within 90 seconds of the prospect filling out the quiz; attention decays exponentially with every minute of delay.",
          "Using aggressive, spammy subject lines in ALL CAPS with excessive emojis that trigger spam filters.",
          "Neglecting to remove subscribers from the cold nurture flow once they purchase or book a sales call."
        ],
        proTips: [
          "Add a P.S. line to every email: the P.S. is the second most read element after the subject line; use it to reinforce your core guarantee or secondary link.",
          "Incorporate a 2-way SMS check-in on Day 2: asking a simple question like 'Did you get a chance to review your diagnostic scorecard?' generates 25%+ response rates.",
          "Set up automated Smart Sending to prevent sending marketing emails to users who received an alert or billing email within the past 16 hours."
        ]
      },
      promptLab: {
        title: "5-Part Behavioral Nurture Email Sequence Architect",
        description: "Draft a complete 5-part automated email nurture sequence engineered to move cold leads from initial diagnostic to paying customer.",
        variables: [
          {
            name: "Sequence Objective",
            label: "Sequence Objective",
            options: ["Book a High-Ticket Discovery Sales Call", "Purchase an E-Commerce Core Product Bundle", "Activate and Upgrade a B2B SaaS Free Trial"],
            default: "Book a High-Ticket Discovery Sales Call"
          },
          {
            name: "Prospect Pain Point",
            label: "Prospect Pain Point",
            options: ["Struggling with inconsistent inbound pipeline", "Burning cash on unprofitable Meta/TikTok ad agencies", "Overwhelmed by manual client onboarding tasks"],
            default: "Burning cash on unprofitable Meta/TikTok ad agencies"
          },
          {
            name: "Brand Tone",
            label: "Brand Tone",
            options: ["Direct, Analytical, No-BS (Executive tone)", "Empathetic, Warm & Supportive Mentor", "Provocative Contrarian Insider"],
            default: "Direct, Analytical, No-BS (Executive tone)"
          }
        ],
        template: `You are an elite direct-response email marketing strategist and lifecycle copywriter.

Write a complete 5-Part Email Nurture Sequence for:
- Sequence Objective: [Sequence Objective]
- Prospect Pain Point: [Prospect Pain Point]
- Brand Tone: [Brand Tone]

Provide for each of the 5 emails:
- Day & Trigger Timing
- 2 High-Open-Rate Subject Line Options (under 45 characters)
- Preview Text (under 60 characters)
- Complete Body Copy (conversational plain-text formatting, under 180 words)
- Strategic P.S. Line`,
        expectedOutput: `### 5-Part Automated Nurture Email Blueprint

---

#### Email 1: Instant Results Delivery + The Quick Win (Day 0 - Immediate)
- **Subject Option A:** Your custom growth diagnostic results
- **Subject Option B:** Here is your diagnostic scorecard
- **Preview Text:** Access your custom 14-day action roadmap inside.
- **Body:**
Hey {{ first_name|default:'there' }},

Your custom pipeline diagnostic scorecard is ready.

You can access your complete breakdown and 14-day action plan here:
➡️ **[View My Diagnostic Scorecard]**

When reviewing your results, notice section #2: the 'Attribution Leak'. 

Most founders we speak with assume their ad creatives are failing, when in reality, browser ad-blockers are dropping 40% of their conversion data before Meta's algorithm can optimize.

Take 3 minutes to review your numbers today. 

Tomorrow, I'm going to send you the exact 1-page checklist a $12M SaaS founder used to fix this exact issue in under 48 hours.

Talk soon,
Alex

**P.S.** Have a specific question about your score? Hit reply to this email. I read every response personally.

---

#### Email 2: The Origin Story & Epiphany Bridge (Day 1 - 24 Hours Later)
- **Subject Option A:** Why we fired our $10k/mo ad agency
- **Subject Option B:** The $42,000 mistake we made in 2024
- **Preview Text:** The expensive lesson that changed our entire acquisition strategy.
- **Body:**
Hey {{ first_name|default:'there' }},

Two years ago, we were paying a high-profile agency $10,000 every single month to manage our paid ads.

Every Friday, they sent us colorful PDF reports with metrics like 'Impressions' and 'Link Clicks'.

Everything looked green.

Except our bank balance.

Our customer acquisition costs had doubled, and whenever we asked why, the answer was always the same: *"The algorithm is in a learning phase."*

That’s when we realized a brutal truth:

Agencies get paid whether you make a profit or not. 

We fired them on a Friday afternoon and decided to build an automated, internal creative testing system that relies on mathematical unit economics instead of agency guesswork.

Within 60 days, our customer acquisition cost dropped by 44%.

Tomorrow, I'll show you the exact 3-step testing framework we used to do it.

Best,
Alex

**P.S.** Want to skip ahead and have our team audit your active campaigns for you? You can grab a spot on our calendar here: **[Book a 15-Minute Pipeline Audit]**

---

#### Email 3: The Proof Breakdown (Day 3 - 48 Hours Later)
- **Subject Option A:** How David cut his CPA from $142 to $38
- **Subject Option B:** A real teardown of David's pipeline
- **Preview Text:** The 3 creative adjustments that tripled his ROAS.
- **Body:**
Hey {{ first_name|default:'there' }},

When David joined us, he was spending $40,000/month on Meta ads with a blended ROAS of 1.1x.

He was literally breaking even on cold traffic and losing money after payroll.

Here is the exact 3-step adjustment we made in his ad account:

1. **Killed Broad Traffic to Product Pages:** We routed 100% of cold ad traffic through a 60-second diagnostic quiz.
2. **Replaced Polished Video Ads with Ugly Statics:** We launched 4 high-contrast annotated charts that took 20 minutes to design in Figma.
3. **Deployed Server-Side CAPI:** We fixed his event deduplication, giving Meta’s AI real conversion signals.

The result?

His cost per customer dropped from $142 down to $38. He scaled ad spend from $40k to $110k/month while maintaining a 3.2x ROAS.

You can read the full case study and see his actual ad creatives here:
➡️ **[Read the Full Breakdown]**

Best,
Alex

---

#### Email 4: Overcoming the Core Objection (Day 5)
- **Subject Option A:** "Will this work in my specific niche?"
- **Subject Option B:** A quick question about your offer
- **Preview Text:** Why market mechanics beat niche differences every time.
- **Body:**
Hey {{ first_name|default:'there' }},

Whenever we break down our acquisition framework, founders always ask:

*"This looks amazing for B2B SaaS, but will it work for my high-ticket consulting/services business?"*

It’s a fair question.

Here is the honest answer:

The tools change. The copywriting nuances change. 

But human psychology does not change. 

Whether you are selling an enterprise software contract or a $5,000 mastermind, your buyer goes through the exact same 3 stages:

1. They must realize their current way of doing things is unsustainable.
2. They must trust that your proprietary mechanism solves their problem.
3. They must believe that buying from you carries zero financial risk.

Our Inbound Velocity Pipeline™ is engineered around these 3 psychological pillars.

If you want to see how we'd tailor this directly to your target audience, let’s talk for 15 minutes:

➡️ **[Schedule Your Tailored Strategy Call]**

Best,
Alex

---

#### Email 5: The Ethical Deadline & Guarantee Expiry (Day 7)
- **Subject Option A:** Closing your diagnostic file today
- **Subject Option B:** Last chance for your $1,000 guarantee
- **Preview Text:** Your private onboarding bonus expires at midnight.
- **Body:**
Hey {{ first_name|default:'there' }},

Quick heads-up: your custom diagnostic audit file and onboarding bonus reservation expire tonight at midnight.

As a reminder, when you partner with us to deploy your automated acquisition pipeline, you are backed by our Better-Than-Risk-Free Guarantee:

*If we do not generate at least $50,000 in qualified revenue pipeline within 90 days, we refund 100% of your fee and write you a check for $1,000 for your team's time.*

We only take on 4 new partner deployments per month to ensure our senior engineers can personally review your tracking setup.

If you are ready to stop burning ad spend on broken agency retainers, lock in your spot now:

➡️ **[Claim Your Partner Deployment Slot]**

Best,
Alex

**P.S.** Once tonight’s midnight deadline passes, this link will redirect to our general waitlist.`
      },
      conceptGuide: {
        title: "Lifecycle Marketing & The Economics of Backend Monetization",
        overview: "In performance marketing, the business that can afford to spend the most to acquire a customer wins. However, rising CPMs mean that few companies can achieve immediate profitability on cold front-end ad clicks alone. Lifecycle email and SMS marketing is the backend monetization engine that transforms break-even front-end campaigns into highly profitable enterprise operations. By nurturing leads through personalized, value-first content, brands build trust and harvest conversions over a 90-day window at zero additional advertising cost.",
        keyPoints: [
          "**The 90-Second Rule:** Automated welcome emails sent within 90 seconds of lead capture generate 4x higher open rates than emails delayed by 30 minutes.",
          "**Plain-Text Deliverability:** Avoid heavy HTML templates with multiple image columns; plain-text emails mimic authentic personal correspondence and land directly in the primary inbox.",
          "**Behavioral Branching:** If a subscriber clicks the pricing link but does not purchase, automatically trigger an objection-handling email within 4 hours."
        ]
      },
      learning: {
        resources: [
          {
            title: "Klaviyo Automated Flow Architecture & Smart Sending Documentation",
            url: "https://help.klaviyo.com/hc/en-us/articles/115002774932",
            type: "Official Docs"
          },
          {
            title: "Loops Modern SaaS Lifecycle Email Best Practices Guide",
            url: "https://loops.so/docs",
            type: "Growth Guide"
          },
          {
            title: "Litmus Deliverability & Inbox Placement Benchmark Report",
            url: "https://www.litmus.com/blog/email-deliverability",
            type: "Case Study"
          }
        ]
      }
    },

    // Node 10
    {
      id: "step-10",
      stepNumber: 10,
      phaseId: "phase-4",
      title: "Paid Social & Search Campaign Structuring (Meta, TikTok, Google)",
      timeEstimate: "2 hrs",
      difficulty: "Advanced",
      summary: "Set up consolidated broad-targeting campaign structures that feed algorithmic bidding engines with diverse creative formats.",
      description: "Amateur media buyers create dozens of tiny ad sets with micro-targeted interests (e.g., targeting 'People interested in Tony Robbins AND Shopify'). This fragments the ad auction, resets the machine learning phase, and drives up CPMs. Modern performance media buying utilizes 'Consolidated Campaign Architecture' (Advantage+ Shopping Campaigns on Meta, Smart Bidding on Google, Smart Performance Campaigns on TikTok). By pairing broad demographic targeting with high creative diversity, marketers allow platform machine learning models to find the lowest-cost buyers dynamically.",
      playbook: {
        setup: "Audit your existing ad accounts in Meta Ads Manager and Google Ads. Ensure Server-Side Conversion API (Node 3) is firing properly. Open Revealbot for automated rules.",
        execute: "Set up a 3-tier consolidated account structure: 1) Tier 1: Creative Sandbox / Testing Campaign (ABO structure testing 3-5 fresh ads weekly against broad audiences), 2) Tier 2: Scaling Campaign (Advantage+ or CBO budget absorbing proven winners with 80% of budget), and 3) Tier 3: Search Intent Capture (Google Search Performance Max & Branded Search protecting high-intent traffic).",
        verify: "Check Meta Ads Manager delivery status: verify ad sets escape the 'Learning Phase' within 7 days by generating 50+ conversion events per week, and confirm auction overlap is under 10%."
      },
      tools: [
        {
          name: "Meta Ads Manager",
          type: "Free",
          url: "https://adsmanager.facebook.com",
          description: "Enterprise campaign management and auction delivery tool for scaling paid acquisition across Facebook, Instagram, and Reels.",
          bestFor: "Advantage+ campaign scaling, budget allocation & auction insights"
        },
        {
          name: "Google Ads",
          type: "Free",
          url: "https://ads.google.com",
          description: "World-leading search and intent-based advertising platform featuring Performance Max, Search keyword auctions, and YouTube ads.",
          bestFor: "High-intent search capture, Performance Max & YouTube ads"
        },
        {
          name: "Revealbot",
          type: "Paid",
          url: "https://revealbot.com",
          description: "Automated media buying software that executes automated scaling and stop-loss rules across Meta, Google, and TikTok ad accounts.",
          bestFor: "Automated stop-loss ad rules & automated budget scaling"
        }
      ],
      callouts: {
        mistake: "Creating 25 micro-targeted interest ad sets with $10/day budgets, which locks every ad set in the dreaded 'Learning Limited' status permanently.",
        proTip: "Let the creative do the targeting: a specific hook like 'Calling all B2B SaaS Founders' automatically filters the audience without needing fragile interest targeting.",
        mistakes: [
          "Constantly editing ad set budgets and resetting the learning phase; never increase an ad set budget by more than 20% in a 24-hour period.",
          "Failing to exclude existing customers and past 30-day purchasers from top-of-funnel cold acquisition campaigns.",
          "Turning off an ad after 48 hours because it hasn't generated a sale yet; modern attribution requires at least 72 hours for server-side latency."
        ],
        proTips: [
          "Implement an automated stop-loss rule in Revealbot: 'If spend > 2x Target CPA and Purchases = 0, pause ad immediately'.",
          "Consolidate your budget into broad targeting (Age, Gender, Country only); Meta's Andromeda recommendation engine outperforms human media buyers 9 times out of 10.",
          "Run Google Branded Search campaigns to prevent aggressive competitors from bidding on your brand name and stealing bottom-of-funnel traffic."
        ]
      },
      promptLab: {
        title: "Consolidated Media Buying & Automated Scaling Rules",
        description: "Generate a consolidated media buying account blueprint with Advantage+ budget allocations and automated stop-loss scaling rules.",
        variables: [
          {
            name: "Monthly Ad Budget",
            label: "Monthly Ad Budget",
            options: ["$3,000 to $10,000 / month (Validation Stage)", "$10,000 to $50,000 / month (Growth Stage)", "$50,000 to $250,000+ / month (Enterprise Scale)"],
            default: "$10,000 to $50,000 / month (Growth Stage)"
          },
          {
            name: "Primary Acquisition Channel",
            label: "Primary Acquisition Channel",
            options: ["Meta Ads (Advantage+ & CBO)", "Google Search & Performance Max", "TikTok Smart Performance Campaigns", "Multi-Channel Blended (Meta + Google)"],
            default: "Meta Ads (Advantage+ & CBO)"
          },
          {
            name: "Target CPA Benchmark",
            label: "Target CPA Benchmark",
            options: ["$25 per qualified lead", "$65 per e-commerce purchase", "$180 per qualified B2B demo booked"],
            default: "$65 per e-commerce purchase"
          }
        ],
        template: `You are the VP of Paid Media managing $30M+ in annual profitable ad spend across Meta, Google, and TikTok.

Design a modern Consolidated Campaign Structure and Automated Rule Blueprint for:
- Monthly Ad Budget: [Monthly Ad Budget]
- Primary Acquisition Channel: [Primary Acquisition Channel]
- Target CPA Benchmark: [Target CPA Benchmark]

Provide:
1. Campaign Hierarchy & Budget Allocation:
   - Campaign 1: Creative Testing Sandbox (Budget % and ad set setup)
   - Campaign 2: Scaling Winners (Advantage+ / CBO budget % and structure)
   - Campaign 3: Retargeting & Brand Defense (Budget % and audience exclusions)
2. Automated Media Buying Rules (Revealbot logic):
   - Rule 1: Automated Stop-Loss (When to pause unprofitable ads)
   - Rule 2: Automated Winner Scaling (When and by how much to increase budget)
   - Rule 3: Creative Fatigue Alert (When CTR drops below threshold)
3. Learning Phase Optimization Protocol: 3 rules to ensure rapid exit from machine learning constraints.`,
        expectedOutput: `### Consolidated Media Buying Architecture

#### 1. Campaign Hierarchy & Budget Allocation
- **Monthly Budget:** $10,000 – $50,000/mo | **Target CPA:** $65.00

| Campaign Level | Structure Type | Budget % | Target Audience & Setup |
| :--- | :--- | :--- | :--- |
| **Campaign 1: Creative Sandbox (Testing)** | Ad Set Budget Optimization (ABO) | **20%** | Broad targeting (US, 25-54, All). 3 to 4 ad sets testing 3 creative variations each against a fixed $30/day budget. |
| **Campaign 2: Scaling Winners (The Engine)** | Advantage+ Shopping (ASC) or CBO | **70%** | Completely broad. Houses 4 to 6 proven evergreen winners. Budget scaled dynamically via automated rules. |
| **Campaign 3: Brand Defense & Search** | Google Search & Meta MOF Retargeting | **10%** | Google Branded Keyword match + Meta 30-day website visitors (excluding 30-day purchasers). |

---

#### 2. Automated Media Buying Rules (Revealbot / Native Rules)

- **Rule 1: Automated Stop-Loss (Prevent Ad Spend Bleed)**
  - *Trigger Condition:* \`Spend > $130.00 (2x Target CPA)\` AND \`Purchases (Last 3 Days) = 0\`
  - *Action:* Automatically **PAUSE** ad. Send Slack notification to #growth-alerts.
  - *Evaluation Frequency:* Every 2 hours.

- **Rule 2: Automated Winner Scaling (Surge Budget)**
  - *Trigger Condition:* \`Purchases (Last 7 Days) >= 5\` AND \`CPA (Last 7 Days) <= $52.00 (20% below target)\` AND \`ROAS >= 2.5x\`
  - *Action:* Increase campaign budget by **15%**. Repeat every 48 hours maximum.
  - *Safety Guard:* Maximum daily budget cap locked at $2,500/day.

- **Rule 3: Creative Fatigue Early Warning**
  - *Trigger Condition:* \`Frequency (Last 7 Days) > 2.8\` AND \`Outbound CTR (Last 3 Days) < 0.85%\`
  - *Action:* Tag ad as *"Fatigued"* in Slack; schedule replacement creative from Sandbox.

---

#### 3. Learning Phase Exit Protocol
1. **The 50-Event Threshold:** Ensure every scaling ad set receives at least 50 conversion events per 7-day rolling window. If volume is insufficient, shift optimization event upstream (e.g. from Purchase to InitiateCheckout).
2. **The 20% Budget Constraint:** Never increase or decrease an active campaign budget by more than 20% in a single edit to prevent shocking the delivery algorithm.
3. **Audience Exclusion Cleanliness:** Strictly exclude past 60-day buyers from all cold testing and scaling campaigns to prevent paying ad auction premiums for existing brand customers.`
      },
      conceptGuide: {
        title: "Algorithmic Consolidation & The Power of Broad Targeting",
        overview: "In the pre-iOS 14 era of digital marketing, media buyers operated like micro-surgeons, manually configuring hundreds of interest-based ad sets and manipulating bids. Today, ad platform algorithms (Meta's Advantage+, Google's Performance Max) utilize deep neural networks that analyze thousands of real-time user engagement signals invisible to human marketers. When a media buyer splinters budgets into dozens of small ad sets, they starve the algorithm of the conversion density required to optimize. Consolidated campaign architecture provides the algorithm with maximum liquidity and data volume.",
        keyPoints: [
          "**Creative Is the New Targeting:** The visual hook and message of the ad dictate who clicks; algorithms dynamically deliver ads to the exact user micro-segments most likely to respond.",
          "**Auction Overlap Elimination:** Consolidating ad sets prevents your own campaigns from competing against each other in the real-time ad auction, instantly reducing CPMs by 15% to 25%.",
          "**The Liquidity Principle:** Giving platform AI the freedom to allocate budget across formats (Reels, Feed, Stories, Search) ensures spend automatically flows to the lowest-cost conversion inventory."
        ]
      },
      learning: {
        resources: [
          {
            title: "Meta Advantage+ Shopping Campaigns Official Best Practices",
            url: "https://www.facebook.com/business/help/835431674062088",
            type: "Official Docs"
          },
          {
            title: "Google Ads Smart Bidding & Performance Max Optimization Guide",
            url: "https://support.google.com/google-ads/answer/10724817",
            type: "Official Docs"
          },
          {
            title: "Revealbot Automated Rule Strategies & Scaling Playbooks",
            url: "https://revealbot.com/blog",
            type: "Growth Guide"
          }
        ]
      }
    },

    // Node 11
    {
      id: "step-11",
      stepNumber: 11,
      phaseId: "phase-4",
      title: "Creative Fatigue Auditing: Thumbstop & Hold Rate Analysis",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Analyze 3-second thumbstop ratios and 15-second hold rates to iterate on winning ad concepts before CPA spikes.",
      description: "Creative fatigue is the silent killer of profitable ad campaigns. When a winning ad creative begins to fatigue, average CPMs rise and Click-Through Rates (CTR) drop long before overall Cost-Per-Acquisition (CPA) spikes. Elite growth teams use creative analytics platforms like Motion and Supermetrics to monitor leading visual diagnostic metrics: Thumbstop Rate (3-second video views ÷ impressions) and Hold Rate (15-second video views ÷ 3-second views). By spotting fatigue 7 to 10 days before performance crashes, teams can launch fresh hook iterations proactively.",
      playbook: {
        setup: "Connect Motion Creative Analytics or Supermetrics to your Meta and TikTok ad accounts. Build a custom creative diagnostic dashboard.",
        execute: "Audit weekly creative performance against benchmark metrics: Thumbstop Rate (Target: >35%), Hold Rate (Target: >25%), and Outbound CTR (Target: >1.5%). When a winning ad's Hold Rate remains high while its Thumbstop Rate decays, retain the body and test 5 new 3-second visual hooks.",
        verify: "Inspect creative performance cohorts in Motion: verify that fresh creative iterations restore top-of-funnel Thumbstop Rates without cannibalizing existing evergreen winners."
      },
      tools: [
        {
          name: "Motion Creative Analytics",
          type: "Paid",
          url: "https://motionapp.com",
          description: "Visual creative analytics tool for media buyers that visualizes Thumbstop, Hold Rate, and ROAS across video and static ad assets.",
          bestFor: "Creative analytics, Thumbstop / Hold Rate audits & visual reporting"
        },
        {
          name: "Supermetrics",
          type: "Paid",
          url: "https://supermetrics.com",
          description: "Enterprise marketing data pipeline that pulls automated ad spend, attribution, and creative metrics into Google Sheets and BigQuery.",
          bestFor: "Automated multi-platform marketing data pipelines & dashboards"
        },
        {
          name: "Claude",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Reasoning model for analyzing exported CSV creative metrics, identifying statistical anomalies, and generating fresh hook hypotheses.",
          bestFor: "Creative audit data synthesis & new hook hypothesis generation"
        }
      ],
      callouts: {
        mistake: "Waiting until blended CPA doubles before designing new ad creatives, forcing the marketing team into a panic scramble when revenue drops.",
        proTip: "If an ad has a terrible Thumbstop Rate (<20%) but an extraordinary Hold Rate (>45%), the hook is weak but the pitch is phenomenal; swap the first 3 seconds to unlock a massive winner.",
        mistakes: [
          "Judging video ads solely by final ROAS without diagnosing where viewers are dropping off along the 30-second timeline.",
          "Killing a winning ad prematurely due to a single bad 24-hour day of performance.",
          "Failing to categorize ads by 'Angle' and 'Visual Style' in tracking spreadsheets, making it impossible to spot macro trends across campaigns."
        ],
        proTips: [
          "Calculate your 'Thumbstop-to-Purchase Ratio': identify which visual hook attracts the highest-LTV buyers rather than just cheap curiosity clicks.",
          "Run a weekly 'Creative Post-Mortem' every Monday: isolate your top 2 winners and bottom 2 losers to direct the next production sprint.",
          "Export your top 100 customer search queries from Google Ads to generate fresh headline text for next week's static ad batch."
        ]
      },
      promptLab: {
        title: "Creative Analytics Teardown & Hook Iteration Engine",
        description: "Analyze video ad drop-off metrics (Thumbstop, Hold Rate, CTR) and generate 4 targeted creative iteration hypotheses.",
        variables: [
          {
            name: "Current Metric Diagnosis",
            label: "Current Metric Diagnosis",
            options: ["Low Thumbstop (18%) + High Hold Rate (42%)", "High Thumbstop (46%) + Low Hold Rate (11%)", "High Thumbstop & Hold + Declining Outbound CTR"],
            default: "Low Thumbstop (18%) + High Hold Rate (42%)"
          },
          {
            name: "Ad Format Under Audit",
            label: "Ad Format Under Audit",
            options: ["UGC Creator Talking-Head Video", "Product In-Action Mashup", "Founder Story / Podcast Clip"],
            default: "UGC Creator Talking-Head Video"
          },
          {
            name: "Current Winning Creative Theme",
            label: "Current Winning Creative Theme",
            options: ["The Unboxing Reaction & First Impression", "The Competitor Product Side-by-Side Comparison", "The Secret Workaround Tutorial"],
            default: "The Competitor Product Side-by-Side Comparison"
          }
        ],
        template: `You are the principal creative strategist and quantitative media analyst at a top-tier DTC performance marketing agency.

Analyze this ad performance diagnosis:
- Current Metric Diagnosis: [Current Metric Diagnosis]
- Ad Format Under Audit: [Ad Format Under Audit]
- Current Winning Creative Theme: [Current Winning Creative Theme]

Provide:
1. Deep Diagnostic Analysis: What is happening in the viewer's mind at second 1, second 3, and second 15 to produce these metrics?
2. The Actionable Prescription: Exactly what components of the video must be preserved versus replaced.
3. 4 Iteration Hypotheses to Test Next Week:
   - Iteration 1: The Visual Pattern Interrupt (changing the first 1.5 seconds)
   - Iteration 2: The Acoustic Hook (altering the opening sound effect/voiceover cadence)
   - Iteration 3: The Social Proof Overlay (adding customer review badge above the fold)
   - Iteration 4: The Speed Ramp (condensing the narrative pacing)`,
        expectedOutput: `### Creative Performance Teardown & Iteration Protocol

#### 1. Metric Diagnostic Breakdown
> **Diagnosis:** *Low Thumbstop Rate (18.2%) + Exceptionally High Hold Rate (42.4%)*

- **Seconds 0 - 3 (The Defect):** Viewers are scrolling past the video because the opening frame looks like a generic corporate ad or familiar influencer post. It lacks visual contrast and urgency.
- **Seconds 3 - 15+ (The Gem):** For the small percentage of users who *do* stay past second 3, the retention is extraordinary. The core comparison mechanism is emotionally compelling, persuasive, and drives intense buying desire.
- **The Core Opportunity:** **The body of this ad is a multi-million-dollar winner trapped behind an invisible front door.** We do not need to reshoot the video; we simply need to replace the first 3 seconds.

---

#### 2. The Creative Prescription
- **PRESERVE:** 100% of the video timeline from **0:03 to 0:30** (the body comparison, feature demonstration, and call to action).
- **DISCARD:** The current opening 0:00 to 0:03 hook.
- **ACTION:** Splice 4 distinct, high-contrast opening hooks onto the existing body to lift the Thumbstop Rate from 18% to 38%+.

---

#### 3. Four Iteration Hypotheses for Next Week's Creative Sprint

1. **Iteration 1: The Visual Pattern Interrupt (The Split-Screen Glitch)**
   - *Visual:* Screen splits horizontally. Top half shows an influencer angrily throwing a competitor's product into a trash can with a loud acoustic thud; bottom half shows the sleek product hero shot.
   - *Hypothesis:* Physical destruction of a recognizable competitor item generates an instant biological curiosity reflex.

2. **Iteration 2: The Acoustic Hook (The Audio Mute / Staccato Alarm)**
   - *Visual & Sound:* Frame 0 starts with complete, absolute silence for 0.8 seconds followed by an intense cash register chime and a voice stating: *"Stop buying [Competitor]. Watch this."*
   - *Hypothesis:* Violating expected background feed audio with sudden silence causes scrolling users to look up.

3. **Iteration 3: The Native Social Proof Overlay (The 1-Star Review)**
   - *Visual:* Creator holds phone to screen showing an authentic 1-star review of the leading market competitor.
   - *Hook Line:* *"This 1-star review is exactly why we spent 18 months re-engineering this entire product."*
   - *Hypothesis:* Highlighting a competitor's verified flaw validates the customer's secret frustrations.

4. **Iteration 4: The 150% Speed Ramp**
   - *Visual:* Take the existing hook and speed ramp the first 3 seconds by 140%, cutting out all micro-pauses and pairing it with kinetic bouncing captions.
   - *Hypothesis:* Accelerating verbal and visual cadence prevents mobile thumb-swiping reflexes.`
      },
      conceptGuide: {
        title: "The Creative Funnel & Leading vs. Lagging Performance Metrics",
        overview: "Most underperforming media buyers operate exclusively on lagging metrics: Cost-Per-Acquisition (CPA) and Return on Ad Spend (ROAS). By the time a CPA spike appears in your analytics dashboard, your ad budget has already been wasted for days. Professional creative strategists manage campaigns through leading metrics: Thumbstop Rate measures whether your hook penetrates feed blindness; Hold Rate measures whether your narrative maintains interest; and Outbound Click-Through Rate (CTR) measures whether your offer generates genuine commercial intent. By diagnosing creative drop-offs along this sequence, teams optimize ads with mathematical precision.",
        keyPoints: [
          "**Thumbstop Rate Benchmark:** Aim for 35%+ on Meta and 40%+ on TikTok; below 25% indicates your opening visual frame is ineffective.",
          "**Hold Rate Benchmark:** Aim for 25%+ of 3-second viewers watching past the 15-second mark; a steep drop-off indicates an unearned or misleading hook.",
          "**Iterative Efficiency:** Splicing new hooks onto proven video bodies generates 80% of the performance gains of a brand-new production at 10% of the cost."
        ]
      },
      learning: {
        resources: [
          {
            title: "Motion Creative Analytics Diagnostic Metric Benchmarks",
            url: "https://motionapp.com",
            type: "Growth Guide"
          },
          {
            title: "Supermetrics Multi-Channel Ad Data Pipeline Setup Guide",
            url: "https://supermetrics.com/docs",
            type: "Official Docs"
          },
          {
            title: "Meta Creative Fatigue & Asset Refresh Cadence Best Practices",
            url: "https://www.facebook.com/business/help",
            type: "Case Study"
          }
        ]
      }
    },

    // Node 12
    {
      id: "step-12",
      stepNumber: 12,
      phaseId: "phase-4",
      title: "Continuous Funnel CRO, Heatmaps & A/B Split Testing",
      timeEstimate: "2.5 hrs",
      difficulty: "Advanced",
      summary: "Analyze session recordings and scroll depth maps to eliminate landing page drop-offs and systematically lift conversion rates.",
      description: "Driving cheap, high-intent traffic to a landing page is only half the battle. If 97% of your visitors bounce without buying, even modest improvements in Conversion Rate Optimization (CRO) produce massive exponential lifts in overall profitability. Increasing a landing page conversion rate from 2.0% to 3.0% reduces your effective customer acquisition cost by 33% across all advertising channels without spending a single additional dollar on traffic. Using session recordings, scroll depth heatmaps, and A/B split-testing tools like Microsoft Clarity, PostHog, and VWO, growth teams identify friction and systematically optimize landing pages.",
      playbook: {
        setup: "Deploy Microsoft Clarity or PostHog session recording scripts via Google Tag Manager. Set up conversion funnels and scroll depth tracking.",
        execute: "Audit 50 representative session recordings of users who dropped off at checkout: 1) Identify 'Rage Clicks' (users clicking dead elements), 2) Check mobile scroll depth drop-off cliffs (where 40%+ of traffic stops scrolling), and 3) Set up an A/B split-test in VWO testing a radical variant (e.g. replacing a long sales page with an interactive diagnostic quiz or testing a multi-step checkout).",
        verify: "Run the split test until achieving 95%+ statistical significance with at least 350 conversion events per variant; verify that the winning variant lifts blended conversion rate without reducing Average Order Value (AOV)."
      },
      tools: [
        {
          name: "Microsoft Clarity",
          type: "Free",
          url: "https://clarity.microsoft.com",
          description: "Free, GDPR-compliant behavioral analysis tool providing session recordings, heatmaps, and automated rage-click detection.",
          bestFor: "Free session recordings, heatmaps & rage-click audits"
        },
        {
          name: "PostHog",
          type: "Freemium",
          url: "https://posthog.com",
          description: "All-in-one developer and product analytics platform with session replay, feature flags, A/B testing, and user funnel analysis.",
          bestFor: "Product analytics, session replay & feature flag split-testing"
        },
        {
          name: "VWO",
          type: "Paid",
          url: "https://vwo.com",
          description: "Enterprise experimentation and A/B testing platform offering visual page editors, Bayesian statistical engines, and multi-variant tests.",
          bestFor: "Enterprise visual A/B testing & Bayesian statistical validation"
        }
      ],
      callouts: {
        mistake: "Testing trivial micro-elements like changing button colors from green to blue; significant conversion lifts come from testing radical structural changes (offer, headline, format).",
        proTip: "Watch session recordings on 2x speed for mobile drop-offs: watching real users get stuck on form fields reveals bugs that analytics numbers never show.",
        mistakes: [
          "Calling an A/B test a winner after 48 hours without reaching 95% statistical significance and minimum sample size.",
          "Testing 6 different landing page variations simultaneously with low traffic, ensuring none of them ever reach statistical significance.",
          "Ignoring mobile checkout layout: over 80% of ad traffic is mobile, yet teams frequently design and test exclusively on desktop monitors."
        ],
        proTips: [
          "Eliminate form fields ruthlessly: cutting a lead form from 6 fields down to 3 fields routinely increases submission rates by 25% to 50%.",
          "Add trusted payment badges (Apple Pay, Google Pay, Shop Pay) directly next to the primary checkout button to ease mobile buying friction.",
          "Implement an Exit-Intent Modal on desktop offering an alternative lower-friction micro-commitment (e.g., 'Not ready to buy? Get the free 1-page cheatsheet')."
        ]
      },
      promptLab: {
        title: "Landing Page CRO Teardown & Statistical A/B Test Blueprint",
        description: "Analyze heatmap and session replay findings to formulate 3 high-impact A/B split-test hypotheses with statistical power calculations.",
        variables: [
          {
            name: "Current Conversion Rate",
            label: "Current Conversion Rate",
            options: ["1.2% (Low - High Drop-off)", "2.4% (Industry Average)", "3.8% (Good - Optimizing for Scale)"],
            default: "1.2% (Low - High Drop-off)"
          },
          {
            name: "Identified User Friction Point",
            label: "Identified User Friction Point",
            options: ["65% drop-off at pricing/checkout section", "Users rage-clicking non-clickable review images", "70% bounce before reaching the second screen fold"],
            default: "65% drop-off at pricing/checkout section"
          },
          {
            name: "Test Type",
            label: "Test Type",
            options: ["Radical Structural Overhaul (Long-form vs. Quiz)", "Friction Elimination (1-Click Apple Pay + Guarantee Restructure)", "Social Proof & Objection Teardown"],
            default: "Friction Elimination (1-Click Apple Pay + Guarantee Restructure)"
          }
        ],
        template: `You are the principal conversion rate optimization (CRO) scientist who has designed over 500 winning split-tests for leading e-commerce and SaaS brands.

Design an executive A/B Split-Testing Blueprint for:
- Current Conversion Rate: [Current Conversion Rate]
- Identified User Friction Point: [Identified User Friction Point]
- Test Type: [Test Type]

Deliver:
1. Behavioral Root Cause Analysis: Why are users abandoning the page at this exact friction point based on session recording observations?
2. Formal Scientific Test Hypothesis: Structured using the proven 'If [Change], then [Outcome], because [Psychological Rationale]' framework.
3. Detailed Control vs. Variant Specifications: Exact wireframe, copy, and layout differences.
4. Statistical Power & Duration Calculation: Sample size per variant and minimum runtime required to achieve 95% statistical confidence.`,
        expectedOutput: `### Conversion Rate Optimization (CRO) Experiment Blueprint

#### 1. Behavioral Root Cause Analysis
- **Observed Behavior:** 65% of qualified mobile visitors scroll through the entire educational advertorial, reach the pricing table, pause for 8 to 12 seconds, and then bounce without initiating checkout.
- **Root Friction:** *The Price Shock & Friction Barrier.* 
  1. The pricing table forces an immediate upfront decision ($149 single payment) without clearly communicating the cost-per-day breakdown ($1.65/day).
  2. Mobile checkout requires manually typing a 16-digit credit card number and billing address into small form fields.
  3. The refund guarantee is buried in 10pt grey text at the very bottom of the page, leaving cold prospects in a state of perceived financial risk.

---

#### 2. Formal Scientific Hypothesis
> *"**IF** we replace the single full-price payment selector with an Express 1-Click Checkout module (Apple Pay / Shop Pay), break down pricing into daily cost equivalents ($1.65/day), and place an unmissable 60-Day 'Empty Bottle' Money-Back Guarantee badge directly beneath the CTA button...*
> 
> ***THEN** the checkout initiation rate will lift by at least 28% and the blended conversion rate will rise from 1.2% to 1.8%+...*
> 
> ***BECAUSE** mobile payment friction is reduced to a single thumbprint verification, and financial loss aversion is neutralized at the exact moment of decision."*

---

#### 3. Control vs. Variant Specifications

| Element | Control (Variant A) | Variant B (The High-Friction Destroyer) |
| :--- | :--- | :--- |
| **Pricing Display** | Standard Box: \`$149.00 Full Price\` | Tiered Box: \`$1.65 / Day (Billed as $149)\` + *"Replaces your $5 daily coffee"* |
| **Payment Options** | Credit Card Form Fields (Name, Number, Exp, CVV) | Dynamic 1-Click Express Buttons (**Apple Pay**, **Google Pay**, **Shop Pay**) |
| **Guarantee Callout** | Standard small text in page footer | Bold Golden Shield Badge placed **10px directly beneath the CTA**: *"60-Day 100% Empty Container Guarantee"* |
| **Order Security** | Simple text link | 256-bit Bank Grade SSL Encryption Badge + Norton Secured Trust Logo |

---

#### 4. Statistical Power & Sample Size Requirements
- **Baseline Conversion Rate:** **1.20%**
- **Minimum Detectable Effect (MDE):** **+25% Relative Lift** (Target: 1.50% conversion rate)
- **Statistical Significance Level (α):** **95% (p < 0.05)**
- **Statistical Power (1 - β):** **80%**
- **Required Sample Size:** **~14,200 unique visitors per variant** (28,400 total visitors).
- **Estimated Test Runtime:** **14 to 21 days** (Must capture at least 2 full business weekly cycles to account for day-of-week conversion variance).`
      },
      conceptGuide: {
        title: "The Hierarchy of Conversions & Bayesian Experimentation",
        overview: "Conversion Rate Optimization is not a collection of cosmetic tricks; it is applied consumer psychology and scientific measurement. Under MECLABS' Conversion Heuristic, Probability of Conversion = 4(Motivation) + 3(Value Proposition Clarity) + 2(Incentive) - 2(Friction) - 2(Anxiety). When a marketing team lifts conversion rates, they do not just improve their landing page; they fundamentally alter the unit economics of their entire business. A 50% lift in landing page conversion allows an advertiser to double their paid media budget profitably, outbidding and suffocating slower competitors.",
        keyPoints: [
          "**Friction vs. Anxiety:** Friction is cognitive resistance caused by confusing layouts or long forms; Anxiety is psychological hesitation caused by distrust or lack of guarantees. Address both.",
          "**Statistical Significance Trap:** Never conclude an A/B test early during initial volatility; allow the Bayesian engine to achieve 95%+ confidence across a minimum of 350 conversions.",
          "**Macro-Testing Over Micro-Tweaks:** Test completely different value propositions, payment models, or page structures rather than changing minor button colors."
        ]
      },
      learning: {
        resources: [
          {
            title: "Microsoft Clarity Session Recording & Heatmap Setup Guide",
            url: "https://clarity.microsoft.com",
            type: "Official Docs"
          },
          {
            title: "PostHog Product Analytics, Feature Flags & A/B Experimentation Docs",
            url: "https://posthog.com/docs/experiments",
            type: "Official Docs"
          },
          {
            title: "VWO A/B Testing Significance & Sample Size Calculator",
            url: "https://vwo.com/tools/ab-test-significance-calculator/",
            type: "Case Study"
          }
        ]
      }
    }
  ]
};
