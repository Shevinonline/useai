// Complete production-grade steps data for "AI E-Commerce & Product Branding" Roadmap (10 Nodes)

export const aiEcommerceProductBrandingData = {
  id: "ai-ecommerce-product-branding",
  title: "AI E-Commerce & Product Branding",
  description: "Generate studio-grade product photography, brand kits, and high-converting storefront copy without a studio.",
  category: "Role & Workflow Roadmaps",
  stepCount: 10,
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: Brand Positioning, Narrative & Visual Architecture",
      description: "Deconstruct market competitor weaknesses, craft a distinctive brand tone-of-voice guide, and generate vector brand marks and color harmonies with AI."
    },
    {
      id: "phase-2",
      title: "Phase 2: Studio-Grade AI Product Photography & Mockups",
      description: "Stage raw product photos on photorealistic marble podiums, synthesize realistic human models wearing your apparel, and build 3D packaging unboxing mockups."
    },
    {
      id: "phase-3",
      title: "Phase 3: High-Converting Storefront Copy, VSL & Packaging",
      description: "Engineer benefit-driven product descriptions with SEO schema markup and script viral 3-second hook UGC video ads that drive impulse buying."
    },
    {
      id: "phase-4",
      title: "Phase 4: Paid Ad Creatives, Email Funnels & Retention CRO",
      description: "Generate multi-variant Meta/TikTok ad creatives, automate 5-part Klaviyo lifecycle revenue flows, and audit mobile checkout friction with AI heatmaps."
    }
  ],
  steps: [
    // Node 1
    {
      id: "step-1",
      stepNumber: 1,
      phaseId: "phase-1",
      title: "Niche Positioning, Customer Avatar & Brand Archetype",
      timeEstimate: "1 hr",
      difficulty: "Beginner",
      summary: "Deconstruct competitor weaknesses, define a distinct brand tone-of-voice guide, and formulate an irresistible unique selling proposition (USP).",
      description: "Most direct-to-consumer (DTC) brands fail because they launch as generic commodities competing solely on price. Before generating logos or photoshoots, brand builders use frontier AI models to interrogate market competitors, identify underserved emotional desires, and build a granular Ideal Customer Profile (ICP). Establishing a definitive Brand Archetype (e.g. The Rebel, The Alchemist, The Caregiver) provides the foundational guardrails for all subsequent visuals, copy, and product packaging.",
      playbook: {
        setup: "Identify 3 dominant category incumbents in your targeted e-commerce niche. Gather their Amazon and Shopify 1-to-3 star customer reviews. Open Claude 3.7 Sonnet and Perplexity.",
        execute: "Run a competitor sentiment teardown to identify recurring user frustrations (e.g., 'packaging leaked', 'feels cheap', 'unnatural scent'). Instruct Claude to synthesize an Ideal Customer Profile (ICP) matrix covering demographic data, emotional pain points, buying objections, and brand tone guidelines.",
        verify: "Confirm that your brand's Unique Selling Proposition passes the 'Only-ness Test': 'Our brand is the only [category] that [distinct benefit] for [specific customer] without [common frustration]'."
      },
      tools: [
        {
          name: "Claude 3.7 Sonnet",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Frontier reasoning model for competitive market analysis, customer avatar profiling, and brand archetype formulation.",
          bestFor: "Customer avatar generation & brand voice documentation"
        },
        {
          name: "Perplexity",
          type: "Freemium",
          url: "https://www.perplexity.ai",
          description: "Real-time AI research engine citing live consumer sentiment, subreddit debates, and trending product categories.",
          bestFor: "Real-time market research & competitor sentiment mining"
        },
        {
          name: "Notion",
          type: "Freemium",
          url: "https://www.notion.so",
          description: "Connected workspace for centralizing brand guidelines, customer personas, tone-of-voice wikis, and copy swipe files.",
          bestFor: "Centralized brand identity guide & copy repositories"
        }
      ],
      callouts: {
        mistake: "Creating a generic brand personality that attempts to appeal to everyone, resulting in bland messaging that resonates with no one.",
        proTip: "Mine the 2-star and 3-star reviews of category leaders on Amazon; these buyers love the product concept but despise the execution.",
        mistakes: [
          "Targeting overly broad demographics ('Women aged 18-65') instead of acute psychological triggers ('Busy moms wanting 5-minute morning skincare').",
          "Copying competitor taglines and visual styles, immediately commoditizing the product and triggering price-slashing wars.",
          "Failing to document 'Never Say' vocabulary words, resulting in inconsistent freelance and AI-generated product copy."
        ],
        proTips: [
          "Formulate your Unique Selling Proposition around what competitors *refuse* to do (e.g., 100% plastic-free glass containers, zero artificial dyes).",
          "Select one primary Jungian Brand Archetype (e.g. The Outlaw vs. The Sage) and align all ad hooks, email sign-offs, and micro-copy to it.",
          "Maintain a dedicated 'Voice Calibration' document in Notion with side-by-side 'Sounds Like Us' vs. 'Doesn't Sound Like Us' examples."
        ]
      },
      promptLab: {
        title: "DTC Brand Positioning & Customer Avatar Generator",
        description: "Generate a comprehensive brand strategy playbook including customer pain points, buying objections, brand archetype, and vocabulary guidelines.",
        variables: [
          {
            name: "Product Category",
            label: "Product Category",
            options: ["Clean Botanical Skincare", "Heavyweight Minimalist Streetwear", "Smart Ergonomic Home Office Gear", "Functional Mushroom Wellness"],
            default: "Clean Botanical Skincare"
          },
          {
            name: "Brand Archetype",
            label: "Brand Archetype",
            options: ["The Minimalist Rebel (Anti-BS, Raw, Scientific)", "The Nurturing Sage (Gentle, Holistic, Transparent)", "The Luxurious Creator (Aesthetic, Sophisticated, High-Craft)"],
            default: "The Minimalist Rebel (Anti-BS, Raw, Scientific)"
          },
          {
            name: "Price Positioning",
            label: "Price Positioning",
            options: ["Affordable Premium ($35–$65)", "Everyday Accessible ($15–$30)", "Prestige Luxury ($80–$160)"],
            default: "Affordable Premium ($35–$65)"
          }
        ],
        template: `You are a master direct-to-consumer (DTC) brand strategist and creative director behind leading 8-figure e-commerce brands.

Develop a complete Brand Strategy & Customer Avatar Playbook for a new product:
- Product Category: [Product Category]
- Brand Archetype: [Brand Archetype]
- Price Positioning: [Price Positioning]

Please output:
1. Irresistible Unique Selling Proposition (USP): Formulated using the proven Only-ness framework.
2. Granular Customer Avatar Profile: Detailed persona (name, age, daily frustrations, secret aspirational identity, buying triggers).
3. 3-Part Objection-Crusher Matrix: Top 3 reasons a prospect hesitates to buy and the exact brand response.
4. Tone-of-Voice Rules & Vocabulary: 5 'Always Use' power phrases and 5 'Never Use' forbidden industry buzzwords.`,
        expectedOutput: `### DTC Brand Strategy Playbook

#### 1. Unique Selling Proposition (USP)
> *"We are the only clinical botanical skincare line that replaces 10-step cosmetic routines with a single bio-fermented barrier cream that restores stressed skin in 7 days—without endocrine disruptors, silicone fillers, or $150 luxury markups."*

#### 2. Granular Customer Avatar: "Overwhelmed Olivia"
- **Demographics:** Age 31, Marketing Director, Urban Apartment ($92k/year income).
- **Daily Friction:** Stressed by 45-minute morning routines and breakouts from switching products; skeptical of influencer skincare trends.
- **Secret Aspirational Desire:** Wants glowing, effortless 'clean-girl' skin so she can walk out the door wearing zero foundation.
- **Buying Trigger:** Clinically verified before-and-after results, recyclable glass containers, and transparent ingredient percentages.

#### 3. Objection-Crusher Matrix
| Customer Objection | Root Skepticism | Brand Counter-Proof |
| :--- | :--- | :--- |
| *"Is this just another overpriced celebrity moisturizer?"* | Distrust of empty white-label formulas. | Post 100% open-source formulation percentages with third-party clinical patch test results. |
| *"Will this cause breakouts on sensitive skin?"* | Fear of cystic acne flare-ups. | Zero comedogenic oils, fragrance-free certification, and a 30-Day 'Empty Bottle' Money-Back Guarantee. |
| *"Why pay $48 instead of $15 drugstore cream?"* | Price anchor skepticism. | Break down cost-per-use: replaces separate toner, serum, and cream, saving $85/month. |

#### 4. Tone-of-Voice Calibration
- **Always Say:** *"Biomimetic barrier"*, *"Clinically transparent"*, *"Restorative lipid ratio"*, *"Zero fillers"*, *"Effortless simplicity"*.
- **Never Say:** *"Miracle cure"*, *"Anti-aging magic"*, *"Flawless perfection"*, *"Secret potion"*, *"Chemical-free"* (unscientific).`
      },
      conceptGuide: {
        title: "Psychographic Brand Positioning & The Only-ness Framework",
        overview: "In modern e-commerce, consumer attention is fragmented and ad costs are elevated. Brands cannot succeed through paid arbitrage alone; they must possess distinct brand equity. Strategic positioning shifts the conversation from product specifications to customer identity. Defining an archetype and target psychology ensures that every downstream asset—from Midjourney prompts to post-purchase emails—feels coherent and authentic.",
        keyPoints: [
          "**The Only-ness Imperative:** If your product description could be pasted onto a competitor's website without raising questions, your positioning is too weak.",
          "**Psychographic Targeting:** Demographic targeting tells you *who* buys; psychographic avatar mapping tells you *why* they buy and what they fear.",
          "**Vocabulary Calibration:** Consistent brand language creates memorable cognitive associations that make products recognizable even without a logo."
        ]
      },
      learning: {
        resources: [
          {
            title: "Marty Neumeier's Brand Gap & Only-ness Framework",
            url: "https://www.liquidagency.com/brand-exchange/the-onliness-statement/",
            type: "E-Commerce Guide"
          },
          {
            title: "Claude Brand Strategy & Tone Prompting Guide",
            url: "https://docs.anthropic.com/en/prompt-library/brand-voice",
            type: "Official Docs"
          },
          {
            title: "Perplexity Market Research Teardown Strategies",
            url: "https://www.perplexity.ai",
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
      title: "Brand Identity Kit, Color Harmonies & Logo Generation",
      timeEstimate: "1.5 hrs",
      difficulty: "Beginner",
      summary: "Generate moodboards, vectorize brand marks, and build a production-ready brand style kit without agency fees.",
      description: "Hiring a traditional branding agency typically costs $5,000–$20,000 and requires weeks of revision cycles. Modern AI workflows allow founders to generate hundreds of cohesive visual directions in an afternoon. By pairing Midjourney v6 parameter tuning (`--s 250 --v 6.1`) with AI vectorization engines (Vectorizer.ai), creators transform raster concepts into mathematically precise SVG vectors ready for hot-stamping, packaging boxes, and digital storefronts.",
      playbook: {
        setup: "Set up Midjourney v6 in Discord or the web editor. Open Coolors to generate harmonious 5-color palettes adhering to 60-30-10 interior rules. Bookmark Vectorizer.ai.",
        execute: "Craft structured Midjourney prompts specifying minimalist vector geometry, clean line weight, and white background isolation: `minimalist geometric icon for [niche], flat vector graphic, sleek line art, white background, no text, corporate brand mark --v 6.1 --s 50`. Feed the best raster result into Vectorizer.ai to generate infinitely scalable SVG code.",
        verify: "Import the SVG vector into Figma. Inspect anchor points to confirm clean bézier paths, test readability at 24×24px favicon size, and verify color contrast ratios exceed WCAG AA standards (4.5:1)."
      },
      tools: [
        {
          name: "Midjourney v6",
          type: "Paid",
          url: "https://www.midjourney.com",
          description: "Premier AI image synthesis engine capable of generating stylized brand marks, visual moodboards, and aesthetic design directions.",
          bestFor: "Generative brand mark exploration & aesthetic moodboarding"
        },
        {
          name: "Vectorizer.ai",
          type: "Freemium",
          url: "https://vectorizer.ai",
          description: "Deep learning vectorization tool that converts raster PNG/JPEG logos into clean, production-ready SVG and EPS vector curves.",
          bestFor: "Converting raster AI logos into print-ready SVG vectors"
        },
        {
          name: "Coolors",
          type: "Free",
          url: "https://coolors.co",
          description: "Color palette generator with built-in contrast checking, hex code export, and color blindness simulation.",
          bestFor: "Generating brand color palettes & accessibility contrast checks"
        }
      ],
      callouts: {
        mistake: "Using complex photorealistic raster illustrations with 3D gradients as logos, which fail to scale down to mobile favicons or print on physical packaging.",
        proTip: "Always append `--no gradients, realistic photo, shading` in Midjourney when prompting for logos to force flat, vector-convertible silhouettes.",
        mistakes: [
          "Exporting low-resolution JPEG logos and attempting to print them on packaging, resulting in blurry pixelated label edges.",
          "Choosing unreadable ornamental script fonts for product titles that create immediate reading friction on small mobile screens.",
          "Using colors that fail accessibility contrast standards on product pages, making buttons unreadable in bright sunlight."
        ],
        proTips: [
          "Test your logo mark at 16×16px (favicon size) in grayscale; if the silhouette is still instantly recognizable, the mark is iconic.",
          "Follow the 60-30-10 design rule: 60% neutral canvas (off-white/slate), 30% brand secondary, and 10% high-contrast accent for primary CTAs.",
          "Save your final color palette as CSS variables (`--color-brand-primary`, `--color-cta`) in your Shopify theme for effortless global updates."
        ]
      },
      promptLab: {
        title: "Midjourney Minimalist Brand Mark & Style Kit Prompts",
        description: "Generate copy-ready Midjourney v6 prompts for modern minimalist logos, geometric iconography, and cohesive brand moodboard collages.",
        variables: [
          {
            name: "Logo Style",
            label: "Logo Style",
            options: ["Minimalist Monogram (Single Letterform)", "Geometric Botanical Mark", "Sleek Modern Abstract Symbol", "Handcrafted Line Art Emblem"],
            default: "Minimalist Monogram (Single Letterform)"
          },
          {
            name: "Color Harmony",
            label: "Color Harmony",
            options: ["Earthy Terracotta, Sand & Deep Forest Green", "Monochrome Slate & High-Contrast Electric Cobalt", "Muted Lavender, Stone & Warm Charcoal"],
            default: "Earthy Terracotta, Sand & Deep Forest Green"
          },
          {
            name: "Brand Vibe",
            label: "Brand Vibe",
            options: ["Nordic Scandinavian Simplicity", "Japanese Wabi-Sabi Aesthetics", "High-Tech Precision Performance"],
            default: "Nordic Scandinavian Simplicity"
          }
        ],
        template: `You are a world-class graphic identity designer and Midjourney prompt engineer.

Craft a complete Brand Identity Generation Package:
- Logo Style: [Logo Style]
- Color Harmony: [Color Harmony]
- Brand Vibe: [Brand Vibe]

Please provide:
1. Primary Brand Mark Midjourney Prompt: Engineered for flat vector synthesis with negative prompt parameters.
2. App Icon / Favicon Midjourney Prompt: Optimized for high legibility at 32x32px dimensions.
3. 5-Color Hex Code Palette: Defined with semantic roles (Canvas, Text, Secondary, CTA Accent, Border).
4. Typography Pairings: Selected from Google Fonts / Adobe Fonts with specific weights for Headlines and Body copy.`,
        expectedOutput: `### Generative Brand Identity Package

#### 1. Primary Brand Mark Midjourney Prompt
\`\`\`text
/imagine prompt: minimalist geometric brand mark for a modern luxury brand, [Logo Style], [Brand Vibe], flat vector graphic, clean black lines on pure white background, balanced negative space, swiss style graphic design, bauhaus simplicity, perfect geometry, svg aesthetic, no gradients, no shadows, no photorealism, no 3d rendering --v 6.1 --s 50 --ar 1:1
\`\`\`

#### 2. App Favicon Prompt
\`\`\`text
/imagine prompt: iconic minimal app icon glyph, bold simplified silhouette, [Logo Style], high contrast, ultra clean vector shapes, centered composition, solid white background, vector logo, minimal logo design --no shading, blur, noise, text, letters --v 6.1 --s 75 --ar 1:1
\`\`\`

#### 3. Cohesive 5-Color Design Token Palette
- **Canvas Base (60%):** \`#FAF8F5\` (Warm Linen Off-White)
- **Primary Text:** \`#1A1A18\` (Deep Obsidian Charcoal)
- **Brand Secondary (30%):** \`#2D4A3E\` (Nordic Pine Green)
- **Conversion CTA (10%):** \`#C86D51\` (Warm Terracotta Accent — WCAG AA compliant on light background)
- **Subtle Surface Border:** \`#E6E1DA\` (Soft Muted Pebble)

#### 4. Typographic Hierarchy
- **Primary Headline:** *Plus Jakarta Sans* or *Outfit* (Bold / Semibold 700, -0.02em tracking).
- **Secondary Accent:** *Cormorant Garamond* or *Newsreader* (Medium Italic for subheadings and editorial quotes).
- **Body & Cart UI:** *Inter* (Regular 400 & Medium 500, 1.6 line-height for clean mobile scanning).`
      },
      conceptGuide: {
        title: "Algorithmic Vector Synthesis & Scalable Identity Systems",
        overview: "A logo is not a painting; it is a functional signpost that must perform across a favicon (16px), a mobile navigation header (40px), and an embossed cardboard shipping box (600mm). Midjourney models naturally gravitate toward painterly textures and subtle gradients. Forcing vector simplicity requires low stylization parameters (`--s 50`) and explicit negative tokens, followed by mathematical bezier curve conversion via Vectorizer.ai.",
        keyPoints: [
          "**Vector Math vs. Raster Pixels:** SVGs use mathematical vectors that scale infinitely without loss of sharpness, essential for physical label printing.",
          "**The Grayscale Silhouette Rule:** A brand mark that requires color to be understood will fail when stamped in gold foil or laser-engraved onto packaging.",
          "**The 60-30-10 Visual Balance:** Distribute colors strategically so primary CTA buttons stand out with unmissable visual salience."
        ]
      },
      learning: {
        resources: [
          {
            title: "Vectorizer.ai Deep Vector Engine Docs",
            url: "https://vectorizer.ai",
            type: "Official Docs"
          },
          {
            title: "Coolors Color Harmony Guide",
            url: "https://coolors.co",
            type: "E-Commerce Guide"
          },
          {
            title: "Web Content Accessibility Guidelines (WCAG) Contrast Ratios",
            url: "https://webaim.org/resources/contrastchecker/",
            type: "Case Study"
          }
        ]
      }
    },

    // Node 3
    {
      id: "step-3",
      stepNumber: 3,
      phaseId: "phase-2",
      title: "Zero-Studio AI Product Photography & Background Staging",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Place raw phone snapshots into photorealistic studio environments, marble podiums, and contextual lifestyle backdrops with matched shadows and lighting.",
      description: "Booking commercial studio photographers, lighting directors, and prop stylists costs upwards of $2,500 per shoot. Today, founders can take a clean smartphone photo of their physical product on a kitchen counter and use AI staging engines like Flair AI, Photoroom, and Photoshop Generative Fill to generate thousands of magazine-quality hero photos. The AI isolates the product, casts natural contact shadows, and renders realistic environmental reflections in seconds.",
      playbook: {
        setup: "Wipe your phone camera lens. Position your physical product in diffused natural window light against a plain white sheet or poster board. Take 5 crisp high-res photos from straight-on and 45-degree angles.",
        execute: "Upload the photo into Photoroom or Flair AI to remove the background with sub-pixel edge feathering. Select or prompt a custom scene: e.g., 'Placed on a wet travertine stone podium, surrounded by soft eucalyptus leaves, warm morning sunlight streaming from the left, soft bokeh background'. Render in 4K resolution.",
        verify: "Inspect product contact edges: verify that the contact shadow matches the direction and warmth of the ambient environmental light, and confirm label typography remains 100% crisp and un-warped."
      },
      tools: [
        {
          name: "Flair AI",
          type: "Freemium",
          url: "https://flair.ai",
          description: "AI design tool built specifically for CPG and DTC product photography, generating photorealistic scenes with matched lighting and shadows.",
          bestFor: "Staging product bottles, boxes & jars on luxury podiums"
        },
        {
          name: "Photoroom",
          type: "Freemium",
          url: "https://www.photoroom.com",
          description: "High-accuracy background removal and AI staging app creating instant studio white backgrounds and lifestyle mockups from mobile photos.",
          bestFor: "Instant mobile background cutout & shadow generation"
        },
        {
          name: "Photoshop Generative Fill",
          type: "Paid",
          url: "https://www.adobe.com/products/photoshop.html",
          description: "Adobe Firefly-powered generative expansion tool for extending canvas aspect ratios and seamlessly blending custom props into product scenes.",
          bestFor: "Precise canvas expansion & high-resolution lighting blending"
        }
      ],
      callouts: {
        mistake: "Allowing the generative AI tool to modify or hallucinate the text on your product label, resulting in gibberish letters that ruin brand credibility.",
        proTip: "Lock the product cutout layer as an immutable mask in Flair AI or Photoshop so only the ambient background and lighting are generated.",
        mistakes: [
          "Using AI prompts that generate floating products with zero contact shadows, making the image look like an amateur Photoshop cutout.",
          "Choosing distracting, hyper-complex backgrounds that draw customer eye attention away from the actual product packaging.",
          "Shooting initial smartphone photos in harsh direct camera flash, which creates unfixable glare hot-spots across glossy labels."
        ],
        proTips: [
          "Photograph your product with indirect diffused window lighting; this provides the neutral ambient baseline needed for AI lighting re-mapping.",
          "Render multiple aspect ratios from one composition: 1:1 for Shopify product detail pages, 4:5 for Meta feed ads, and 9:16 for TikTok/Reels.",
          "Incorporate organic elements (e.g. natural water droplets, crushed sea salt, botanical sprigs) on podium surfaces to create sensory tactile appeal."
        ]
      },
      promptLab: {
        title: "Studio-Grade Product Staging & Environmental Prompts",
        description: "Generate production-ready prompts for staging physical e-commerce bottles, jars, and apparel onto luxury commercial surfaces with matched lighting.",
        variables: [
          {
            name: "Staging Surface",
            label: "Staging Surface",
            options: ["Honed Beige Travertine Marble Podium", "Floating Matte Acrylic Shelf with Water Ripples", "Weathered Dark Walnut Butcher Block"],
            default: "Honed Beige Travertine Marble Podium"
          },
          {
            name: "Lighting Direction",
            label: "Lighting Direction",
            options: ["Golden Hour Sunbeams with Window Shutter Shadows", "Soft Diffused Profoto Studio Softbox", "Moody Editorial High-Contrast Rim Light"],
            default: "Golden Hour Sunbeams with Window Shutter Shadows"
          },
          {
            name: "Botanical & Context Accents",
            label: "Botanical & Context Accents",
            options: ["Subtle Olive Branch & Dewy Drops", "Minimalist Monstera Leaf Shadows", "Crushed Himalayan Rock Salt & Sand"],
            default: "Subtle Olive Branch & Dewy Drops"
          }
        ],
        template: `You are an executive commercial tabletop product photographer and generative AI artist.

Generate an ultra-realistic commercial staging prompt for Flair AI / Midjourney:
- Staging Surface: [Staging Surface]
- Lighting Direction: [Lighting Direction]
- Botanical & Context Accents: [Botanical & Context Accents]

Please output:
1. Master Environmental Staging Prompt: With precise lens focal lengths, aperture depth, and surface descriptions.
2. Lighting & Shadow Directives: Explicit instructions for casting realistic diffuse ambient occlusion and contact shadows.
3. Post-Production Touch-Up Checklist: 3 steps to ensure label text integrity and 4K web sharpness.`,
        expectedOutput: `### Commercial Product Photography Prompt

#### 1. Master Environmental Staging Prompt
\`\`\`text
High-end commercial studio product photography, clean cosmetic skincare glass bottle placed centered on a [Staging Surface], surrounded by [Botanical & Context Accents], [Lighting Direction], cinematic dappled light rays, gentle natural contact shadows, soft out-of-focus beige background, commercial advertising style, Hasselblad H6D-100c, 85mm f/2.8 lens, tack-sharp product focus, 8k resolution, photorealistic, hyper-detailed textures --ar 1:1 --v 6.1 --style raw
\`\`\`

#### 2. Lighting & Shadow Directives
- **Key Light:** Directional warm light positioned at 45° camera-left, creating a soft 30% drop shadow extending toward the right.
- **Fill Light:** Low-intensity ambient bounce from camera-right ensuring the label typography is fully legible with zero murky shadow pockets.
- **Contact Occlusion:** Micro-shadow directly beneath the base of the container to visually anchor the product firmly to the stone podium.

#### 3. Post-Production Touch-Up Checklist
1. **Label Masking Verification:** Confirm the original vector label is overlaid at 100% opacity to guarantee crisp typography.
2. **Edge Feathering Inspection:** Zoom in to 300% on product silhouette boundaries to verify zero white halo artifacts from initial background removal.
3. **High-Pass Sharpening:** Apply a subtle 0.8px High-Pass filter in Photoshop or Photopea to make glass reflections glisten on retina screens.`
      },
      conceptGuide: {
        title: "Photorealistic Ambient Occlusion & Generative Tabletop Staging",
        overview: "The difference between an amateur digital mockup and a luxury brand photo lies in physics: light bounces off surrounding surfaces, casts contact occlusion shadows, and produces color bleed. Commercial AI tools like Flair AI use depth-map estimation to reconstruct the 3D geometry of your product cutout, allowing generative diffusion models to simulate physical photons wrapping around bottle glass and plastic tubes.",
        keyPoints: [
          "**Contact Ambient Occlusion:** Without a dense micro-shadow where the container touches the podium, the human brain instantly registers the image as fake.",
          "**Lighting Color Bleed:** If the background features warm sunbeams, the product surface highlights must reflect the same warm kelvin temperature (~3200K).",
          "**Label Preservation Masks:** Never allow generative AI to re-render brand text; always maintain an uncorrupted layer mask of your physical label."
        ]
      },
      learning: {
        resources: [
          {
            title: "Flair AI Commercial Product Staging Documentation",
            url: "https://flair.ai",
            type: "Official Docs"
          },
          {
            title: "Photoroom Commercial Photography Guide",
            url: "https://www.photoroom.com",
            type: "E-Commerce Guide"
          },
          {
            title: "Adobe Generative Fill Compositing Best Practices",
            url: "https://helpx.adobe.com/photoshop/using/generative-fill.html",
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
      title: "Photorealistic Model Generation & Virtual Try-On",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Synthesize diverse, realistic human fashion and lifestyle models wearing apparel or jewelry with accurate fabric drape and texture preservation.",
      description: "Fashion, jewelry, and lifestyle brands face immense photography expenses casting models, paying agency day-rates, and hiring hair/makeup crews. With state-of-the-art virtual try-on models and diffusion tools like VModel, Midjourney v6, and Krea AI, brands can place clothing garments onto diverse human models across varied ages, ethnicities, and body types. The AI accurately preserves garment seam lines, fabric drape, and screen-printed graphics.",
      playbook: {
        setup: "Capture a clean flat-lay or ghost-mannequin photo of your apparel item on a neutral background with even, shadow-free lighting. Bookmark VModel.ai or Krea AI.",
        execute: "Upload the flat-lay garment into an AI virtual try-on engine (VModel or Krea AI). Select model demographics (e.g., '30-year-old Scandinavian female model, natural skin texture, outdoor street style, walking in London'). Generate on-model variations showcasing front, side, and lifestyle context.",
        verify: "Inspect garment details: check that logo prints, collar shapes, fabric knitting patterns, and seam stitch lines match the physical sample exactly without generative warping."
      },
      tools: [
        {
          name: "Midjourney",
          type: "Paid",
          url: "https://www.midjourney.com",
          description: "Leading generative visual platform capable of rendering hyper-realistic human skin textures, realistic fabric folds, and candid lifestyle lighting.",
          bestFor: "Editorial fashion model photography & lifestyle campaign scenes"
        },
        {
          name: "VModel",
          type: "Freemium",
          url: "https://vmodel.ai",
          description: "Specialized AI virtual try-on platform tailored for fashion brands, mapping flat-lay clothing directly onto customizable digital models.",
          bestFor: "Virtual clothing try-on & ghost-mannequin model replacement"
        },
        {
          name: "Krea AI",
          type: "Freemium",
          url: "https://www.krea.ai",
          description: "Real-time visual generation and image enhancement engine featuring AI upscaling and prompt-to-model rendering.",
          bestFor: "Real-time model generation & 4K photorealistic upscaling"
        }
      ],
      callouts: {
        mistake: "Generating plastic, airbrushed AI faces with glassy eyes and unnatural symmetry, instantly telegraphing cheap dropshipping to prospective buyers.",
        proTip: "Include explicit prompt descriptors like `candid iPhone snapshot`, `natural skin pores`, `subtle freckles`, and `cinestill 800t film grain` to eliminate the AI wax look.",
        mistakes: [
          "Allowing the AI model to alter clothing cuts, sleeve lengths, or necklines, leading to false-advertising customer returns.",
          "Generating models that only represent a single demographic, alienating broad customer segments searching for realistic fit representation.",
          "Ignoring hand anatomy in generated fashion photos, leaving distorted fingers or warped jewelry in prominent hero spots."
        ],
        proTips: [
          "Use ghost-mannequin flat-lays as input masks; AI try-on engines map curvature more accurately from 3D mannequin forms than from flat tables.",
          "Prompt for natural human movement: `candid walking pose`, `laughing mid-stride`, or `adjusting sunglasses` creates realistic lifestyle dynamism.",
          "Run final on-model outputs through Krea AI's 4K upscaler to restore microscopic cotton fabric weaves and natural skin pore details."
        ]
      },
      promptLab: {
        title: "Photorealistic On-Model Apparel & Jewelry Prompts",
        description: "Generate production-grade prompts for rendering photorealistic fashion models wearing physical clothing or accessories in candid lifestyle settings.",
        variables: [
          {
            name: "Model Demographics",
            label: "Model Demographics",
            options: ["Athletic Scandinavian Female (Late 20s)", "Stylish Tokyo Streetwear Male (Early 20s)", "Sophisticated French Model (Mid 30s)"],
            default: "Athletic Scandinavian Female (Late 20s)"
          },
          {
            name: "Garment / Accessory",
            label: "Garment / Accessory",
            options: ["Heavyweight 400GSM Boxy Crewneck Sweatshirt", "Minimalist 18K Solid Gold Herringbone Chain", "Oversized Tailored Linen Trench Coat"],
            default: "Heavyweight 400GSM Boxy Crewneck Sweatshirt"
          },
          {
            name: "Lifestyle Setting",
            label: "Lifestyle Setting",
            options: ["Sunlit Soho Architecture Loft", "Outdoor European Stone Cafe Terrace", "Golden Hour Brutalist Concrete Rooftop"],
            default: "Sunlit Soho Architecture Loft"
          }
        ],
        template: `You are a high-fashion editorial casting director and generative fashion photography expert.

Generate a photorealistic on-model lifestyle campaign prompt:
- Model Demographics: [Model Demographics]
- Garment / Accessory: [Garment / Accessory]
- Lifestyle Setting: [Lifestyle Setting]

Please provide:
1. Master Midjourney v6 Prompt: Featuring natural skin texture parameters, candid posture, and 35mm film optics.
2. Negative Parameters: Filtering out AI waxiness, plastic skin, and anatomical errors.
3. Garment Fidelity Checklist: 3 verification points to confirm the generated clothing matches the physical tech pack.`,
        expectedOutput: `### Editorial On-Model Photography Prompt

#### 1. Master Midjourney v6 Prompt
\`\`\`text
Editorial candid fashion photography, [Model Demographics], wearing [Garment / Accessory], standing in [Lifestyle Setting], captured on 35mm Leica M11 with 50mm f/1.4 Summilux lens, natural morning sidelight, genuine candid facial expression, natural skin texture with visible pores and subtle imperfections, realistic cotton fabric folds, natural drape, cinematic depth of field, Vogue Scandinavia aesthetic, authentic editorial styling --ar 4:5 --v 6.1 --style raw --s 120
\`\`\`

#### 2. Negative Parameters
\`\`\`text
--no plastic skin, doll face, airbrushed, wax figure, CGI, 3d render, extra fingers, malformed hands, distorted eyes, blurry fabric, exaggerated saturation
\`\`\`

#### 3. Garment Fidelity Checklist
1. **Drop-Shoulder Seam Check:** Verify the seam falls at the exact specified 3-inch drop point rather than a generic raglan cut.
2. **Ribbed Collar & Hem Integrity:** Confirm the 1-inch thick double-needle collar ribbing is rendered cleanly without digital melting.
3. **Fabric Weight Realism:** Ensure the fabric drape reflects dense 400GSM cotton rather than thin polyester spandex.`
      },
      conceptGuide: {
        title: "Virtual Try-On Diffusion & Microscopic Texture Preservation",
        overview: "Virtual try-on models leverage conditional image-to-image diffusion. Unlike standard text-to-image prompts that invent new clothes, try-on pipelines freeze the pixel coordinates of the garment and warp them along a 3D human pose wireframe (DensePose). This preserves the exact graphic print, logo positioning, and fabric texture while naturally folding the material around the model's shoulders and torso.",
        keyPoints: [
          "**Conditional Try-On Pipelines:** Decoupling the garment from the model allows brands to shoot 10 clothing SKUs and render them on 50 diverse models instantly.",
          "**The Uncanny Valley Antidote:** Avoid generic beauty prompts; specifying candid expressions, natural pores, and 35mm film grain makes AI models indistinguishable from real humans.",
          "**DensePose Surface Warping:** Accurate virtual try-on relies on mapping fabric patterns along real anatomical 3D curves rather than flat 2D overlays."
        ]
      },
      learning: {
        resources: [
          {
            title: "VModel AI Fashion Generation Documentation",
            url: "https://vmodel.ai",
            type: "Official Docs"
          },
          {
            title: "Krea AI Realtime Upscaling Guide",
            url: "https://www.krea.ai",
            type: "E-Commerce Guide"
          },
          {
            title: "E-Commerce Conversion Impact of Diverse Models",
            url: "https://www.shopify.com/enterprise/blog/ecommerce-product-photography",
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
      title: "3D Packaging Design, Labels & Unboxing Mockups",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Create photorealistic 3D box renders, cosmetic tube labels, and unboxing collateral with precise dieline measurements.",
      description: "Packaging is the physical ambassador of your brand. A customer's unboxing experience sets the psychological anchor for perceived product quality, customer lifetime value (LTV), and organic social sharing. Using specialized 3D packaging platforms like Pacdora paired with Figma, founders map flat 2D dieline layouts directly onto interactive 3D boxes, amber dropper bottles, and standup pouches with realistic foil stamping, embossing, and matte soft-touch finishes.",
      playbook: {
        setup: "Obtain the exact structural dieline (PDF or AI format) from your packaging manufacturer (e.g., mailer box dimensions: 200×150×60mm). Open Pacdora and Figma.",
        execute: "Design the flat 2D dieline in Figma: place logo on outer lid, brand pattern on interior folds, and regulatory text on the underside. Import the artwork into Pacdora, select structural materials (e.g. 350GSM Kraft board with gold hot-foil stamping), and generate an animated 3D opening unboxing render.",
        verify: "Confirm that all dieline bleeds (minimum 3mm) and safety margins are respected, and test that inner box flap text does not render upside-down upon folding."
      },
      tools: [
        {
          name: "Pacdora",
          type: "Freemium",
          url: "https://www.pacdora.com",
          description: "Online 3D packaging design tool offering 3,000+ structural packaging dielines, real-time 3D rendering, and 4K unboxing video exports.",
          bestFor: "Real-time 3D box mockups & die-line print exports"
        },
        {
          name: "Midjourney",
          type: "Paid",
          url: "https://www.midjourney.com",
          description: "Visual synthesis engine for generating bespoke packaging patterns, botanical illustrations, and tactile material textures.",
          bestFor: "Generating bespoke packaging patterns & background textures"
        },
        {
          name: "Figma",
          type: "Freemium",
          url: "https://www.figma.com",
          description: "Vector layout tool for arranging typography, barcodes, nutritional panels, and logo marks onto structural print dielines.",
          bestFor: "2D dieline layout, vector typography & print prep"
        }
      ],
      callouts: {
        mistake: "Placing key logo elements or barcodes too close to dieline fold lines and score marks, causing text to get cut off during machine die-cutting.",
        proTip: "Design the interior of your shipping box with high-contrast branded artwork; it creates an immediate 'Instagram unboxing' moment for the customer.",
        mistakes: [
          "Designing packaging in RGB color mode without converting to CMYK print profiles, leading to muddy, discolored physical packaging runs.",
          "Forgetting mandatory legal requirements (net weight, distributed-by address, recycling symbols, ingredient lists in descending order).",
          "Neglecting to test the orientation of inner box flaps, resulting in upside-down messaging when the customer opens the lid."
        ],
        proTips: [
          "Always apply at least 3mm (0.125 in) of bleed beyond all cut lines to prevent unprinted white edges during die-stamping.",
          "Add tactile finishes like spot UV gloss over a soft-touch matte lamination; the contrast creates a luxury tactile feel in hand.",
          "Export 360-degree rotating MP4 video renders from Pacdora to use as engaging video loops on your Shopify product detail page."
        ]
      },
      promptLab: {
        title: "3D Packaging Dieline & Luxury Unboxing Generator",
        description: "Generate structural packaging design specifications, CMYK color profiles, finish treatments, and unboxing customer touchpoints.",
        variables: [
          {
            name: "Packaging Type",
            label: "Packaging Type",
            options: ["Rigid Magnetic Mailer Box with Custom Foam Insert", "Frosted Amber Glass Dropper Bottle (30ml)", "Stand-Up Resealable Kraft Foil Pouch", "Matte Paper Tube Container with Metal Lid"],
            default: "Rigid Magnetic Mailer Box with Custom Foam Insert"
          },
          {
            name: "Material Finish",
            label: "Material Finish",
            options: ["Soft-Touch Matte Lamination with Gold Hot-Foil Stamping", "Uncoated Recycled Kraft with White Silk-Screen", "Glossy UV Spot Varnish with Blind Debossing"],
            default: "Soft-Touch Matte Lamination with Gold Hot-Foil Stamping"
          },
          {
            name: "Unboxing Surprise Element",
            label: "Unboxing Surprise Element",
            options: ["Personalized Founder Welcome Note on Textured Cotton Card", "Hidden Discount Scratch-Off on Box Interior Flap", "QR Code Linking to Exclusive Audio Meditation Guide"],
            default: "Personalized Founder Welcome Note on Textured Cotton Card"
          }
        ],
        template: `You are an industrial packaging designer and direct-to-consumer print production expert.

Generate a comprehensive 3D Packaging Design Specification:
- Packaging Type: [Packaging Type]
- Material Finish: [Material Finish]
- Unboxing Surprise Element: [Unboxing Surprise Element]

Please provide:
1. Structural Dieline Layout Guide: Measurements, panel hierarchy (Top, Sides, Bottom, Interior Lid).
2. Material & Print Finishes Spec: Substrate weight (GSM), coating treatments, and ink profiles.
3. Unboxing Experience Flow: Step-by-step breakdown of what the customer sees, feels, and reads during each moment of the unboxing ritual.`,
        expectedOutput: `### Structural 3D Packaging Specification

#### 1. Dieline Panel Architecture
- **Outer Lid (Primary Surface):** Centered minimalist brand mark embossed in matte gold foil. Clean 25mm margin around all edges.
- **Side Panels:** Short brand tagline on front lip (*"Crafted with Intention"*), batch number and sustainability recycling iconography on bottom edge.
- **Interior Flap (The Reveal):** Full-bleed custom botanical pattern printed in deep pine green (\`PMS 5535 C\`), greeting the customer immediately upon lifting the magnetic lid.
- **Underside Base:** Mandatory legal disclosures, Barcode (UPC-A format at 100% scale), recycling badges, and manufacturer address.

#### 2. Material & Finish Technical Specs
- **Substrate:** 1200GSM Greyboard wrapped in 157GSM Art Paper.
- **Exterior Coating:** Soft-touch velvet matte lamination (anti-scratch formulation).
- **Embellishment:** Metallic gold hot-foil stamping (\`Kurz Alufin 428\`) on main logo with 0.5mm blind debossing depth.
- **Interior Insert:** Custom-molded high-density EVA foam lined with matching velvet fabric, die-cut to secure the glass container during transit.

#### 3. Unboxing Emotional Flow
1. **The Touch (0–3s):** Customer feels the silky soft-touch exterior texture, immediately signaling luxury quality.
2. **The Sound (3–5s):** Magnetic closure releases with a satisfying, audible click.
3. **The Visual Surprise (5–10s):** Lid swings open to reveal the vibrant interior artwork and the personalized founder cotton card nestled on top.
4. **The Product Reveal (10–15s):** Removing the card reveals the hero bottle held firmly in velvet foam, ready for its first application.`
      },
      conceptGuide: {
        title: "Tactile Structural Packaging & The Psychology of Unboxing",
        overview: "Packaging is the only marketing collateral with a 100% open rate. In direct-to-consumer commerce, the box replaces the retail sales associate. When a customer receives an order, dopamine peaks during unboxing. Thoughtfully engineered structural dielines, magnetic closures, and contrasting finishes (like matte lamination paired with spot UV gloss) validate the customer's purchase decision and inspire organic unboxing videos on social media.",
        keyPoints: [
          "**The Dopamine Peak:** The unboxing ritual is the physical climax of the customer journey; an underwhelming brown box triggers instant buyer's remorse.",
          "**CMYK Print Profiles:** Computer displays render RGB; commercial offset presses use CMYK inks. Proofing in CMYK prevents dull, unexpected printed colors.",
          "**Tactile Contrast:** Combining contrasting textures (soft-touch matte paired with raised glossy foil) creates physical sensory delight in the hands."
        ]
      },
      learning: {
        resources: [
          {
            title: "Pacdora 3D Packaging Design Documentation",
            url: "https://www.pacdora.com",
            type: "Official Docs"
          },
          {
            title: "Packaging Dieline Preparation & Bleed Guidelines",
            url: "https://www.packlane.com/resources/artwork-guidelines",
            type: "E-Commerce Guide"
          },
          {
            title: "The Viral Impact of Unboxing Experiences on Retention",
            url: "https://www.dotcomdist.com/insights/unboxing-study/",
            type: "Case Study"
          }
        ]
      }
    },

    // Node 6
    {
      id: "step-6",
      stepNumber: 6,
      phaseId: "phase-3",
      title: "Conversion-Engineered Product Descriptions & SEO Bullets",
      timeEstimate: "1.5 hrs",
      difficulty: "Beginner",
      summary: "Write benefit-first product copy, objection-crushing feature callouts, and search-optimized schema metadata that ranks.",
      description: "Generic manufacturer descriptions ('100% cotton, fits true to size') kill e-commerce sales. High-converting direct-to-consumer product detail pages (PDPs) use psychological copywriting frameworks (like PAS: Problem-Agitate-Solution and BAB: Before-After-Bridge) to transform dry specifications into vivid emotional benefits. By pairing AI reasoning models with SEO keyword entity salience, brand owners rank organically on Google while maximizing on-page conversion rates.",
      playbook: {
        setup: "Extract the core technical specifications and customer pain points. Open Claude 3.7 Sonnet, Shopify Magic, and SurferSEO.",
        execute: "Run a prompt sequence to generate a 3-part PDP copy system: 1) Emotional 2-sentence hook, 2) 4 benefit-driven bullet points with bold lead-ins, and 3) A collapsible accordion answering key buying objections (Ingredients, How to Use, Shipping & Guarantee). Include structured JSON-LD schema metadata.",
        verify: "Review copy on a mobile device: ensure the primary hook and 'Add to Cart' button are readable within the first two screen scrolls without hitting walls of unformatted text."
      },
      tools: [
        {
          name: "Claude",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Leading conversational reasoning model for writing persuasive, customer-centric product copy and structured schema markup.",
          bestFor: "Benefit-first copywriting & objection-crushing FAQ accordions"
        },
        {
          name: "Shopify Magic",
          type: "Free",
          url: "https://www.shopify.com/magic",
          description: "Shopify's native AI copywriting tool built directly into the admin dashboard for instant product description generation and tone adjustment.",
          bestFor: "In-dashboard Shopify product description generation"
        },
        {
          name: "SurferSEO",
          type: "Paid",
          url: "https://surferseo.com",
          description: "On-page SEO optimization tool analyzing search intent, keyword density, and NLP entity salience to rank product pages on Google.",
          bestFor: "Keyword optimization & commercial search intent analysis"
        }
      ],
      callouts: {
        mistake: "Listing technical features without explaining the emotional or practical benefit to the customer ('Contains 2% Hyaluronic Acid' vs. 'Drenches dry skin with all-day moisture').",
        proTip: "Use bold lead-ins on all bullet points (e.g. **All-Day Barrier Support:** ...) to make copy scannable for fast-moving mobile shoppers.",
        mistakes: [
          "Writing giant dense paragraphs of text that mobile users scroll past without reading.",
          "Failing to answer common buying objections on the product page, forcing customers to abandon the site to search elsewhere.",
          "Leaving the default meta title and description blank in Shopify, losing free organic search traffic on high-intent buyer keywords."
        ],
        proTips: [
          "Format feature bullets using the 'Feature -> Benefit -> Meaning' triad: 'Double-wall vacuum insulation (Feature) keeps ice frozen for 24 hours (Benefit), so your water stays crisp during all-day road trips (Meaning)'.",
          "Include a collapsible 'Clinical Results' or 'Real Reviews' accordion with exact percentages (e.g. '94% reported smoother skin in 7 days').",
          "Inject structured `Product` and `Offer` schema markup with aggregate rating counts so star reviews appear directly in Google search snippets."
        ]
      },
      promptLab: {
        title: "Conversion-Engineered Product Detail Page Copy Generator",
        description: "Generate benefit-first product copy, scannable bullet points, collapsible FAQ accordions, and SEO meta tags formatted for Shopify.",
        variables: [
          {
            name: "Copywriting Framework",
            label: "Copywriting Framework",
            options: ["PAS (Problem - Agitate - Solution)", "BAB (Before - After - Bridge)", "FAB (Feature - Advantage - Benefit)"],
            default: "PAS (Problem - Agitate - Solution)"
          },
          {
            name: "Primary Customer Fear",
            label: "Primary Customer Fear",
            options: ["Wasting money on ineffective formulas", "Difficult or time-consuming routine", "Irritation or allergic reaction"],
            default: "Wasting money on ineffective formulas"
          },
          {
            name: "Tone of Voice",
            label: "Tone of Voice",
            options: ["Clean Scientific Authority", "Warm & Encouraging Companion", "Bold, Witty & Direct"],
            default: "Clean Scientific Authority"
          }
        ],
        template: `You are an elite direct-response e-commerce copywriter specializing in 7-figure Shopify stores.

Write a complete high-converting Product Detail Page (PDP) copy package:
- Copywriting Framework: [Copywriting Framework]
- Primary Customer Fear: [Primary Customer Fear]
- Tone of Voice: [Tone of Voice]

Please output:
1. Two-Sentence Emotional Hook: High-impact opening copy capturing reader attention.
2. 4 Benefit-First Bullet Points: Each featuring a punchy bold lead-in and real customer benefit.
3. 3 Collapsible Accordion Tabs: (Full Ingredients / How to Use / Shipping & 30-Day Guarantee).
4. Google SEO Meta Data: Optimized Meta Title (under 60 chars) and Meta Description (under 155 chars) targeting high buyer intent.`,
        expectedOutput: `### High-Converting Shopify Product Copy

#### 1. Emotional Hook
> *"Stop layering six different serums that leave your skin congested and your wallet empty. Meet the single bio-fermented barrier cream clinically proven to soothe redness, lock in 24-hour hydration, and restore damaged skin in just 7 days."*

#### 2. Benefit-First Bullet Points
- **Deep Barrier Repair:** Formulated with 5 bio-identical ceramides that repair microscopic barrier tears caused by harsh cleansers and environmental pollution.
- **Weightless 24-Hour Hydration:** Multi-weight hyaluronic acid penetrates deep into dermal layers without leaving a greasy, shiny film under makeup.
- **Calms Redness in 10 Minutes:** Concentrated Centella Asiatica and colloidal oatmeal extinguish irritation and soothe post-sun sensitivity instantly.
- **Clean Clinical Formulation:** 100% fragrance-free, non-comedogenic, and dermatologist-tested for reactive, eczema-prone skin.

#### 3. Collapsible Accordion Tabs
- **How to Use:** Warm a pea-sized amount between fingertips. Gently press into face, neck, and chest morning and evening. For intensive recovery, apply a double layer as an overnight slugging mask.
- **Full Ingredients:** Water/Aqua, Glycerin, Caprylic/Capric Triglyceride, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Hyaluronic Acid, Centella Asiatica Extract, Squalane, Tocopherol. (0% Silicones, Parabens, Synthetic Fragrance).
- **Shipping & Our 30-Day Guarantee:** Free shipping on orders over $45. Love your skin in 30 days or send back the empty bottle for a 100% full refund—no questions asked.

#### 4. SEO Search Snippet Metadata
- **Meta Title (56 chars):** \`Bio-Barrier Cream | Restorative Skincare | [Brand Name]\`
- **Meta Description (152 chars):** \`Restore damaged skin in 7 days with our clinically proven bio-barrier cream. 5 ceramides, zero fragrance. Try it risk-free with our 30-day empty bottle guarantee.\``
      },
      conceptGuide: {
        title: "Benefit-Led Copywriting & Search Entity Optimization",
        overview: "Customers do not buy products; they buy better versions of themselves. A customer buying a drill does not want a drill; they want a hole in the wall to hang a family photo. E-commerce copy must bridge the gap between physical raw materials and psychological outcomes. Structuring descriptions with scannable bold lead-ins respects the mobile shopping reality, where over 80% of transactions occur on handheld screens.",
        keyPoints: [
          "**Features Tell, Benefits Sell:** Always translate technical specifications into lived customer experiences (e.g. 500ml capacity = 'stays hydrated through your longest workout').",
          "**Scannable Visual Rhythm:** Mobile shoppers do not read; they scan. Bullet points with 2-word bold titles increase comprehension by over 60%.",
          "**Search Intent Alignment:** Incorporating natural entity keywords (e.g., 'barrier repair cream for sensitive skin') captures ready-to-buy organic searchers."
        ]
      },
      learning: {
        resources: [
          {
            title: "Shopify Magic AI Copywriting Documentation",
            url: "https://www.shopify.com/magic",
            type: "Official Docs"
          },
          {
            title: "SurferSEO E-Commerce Content Strategy",
            url: "https://surferseo.com",
            type: "E-Commerce Guide"
          },
          {
            title: "Baymard Institute PDP Usability Research",
            url: "https://baymard.com/blog/ecommerce-product-page-design",
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
      title: "UGC-Style Video Scripts & Video Sales Letter (VSL) Storyboards",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Script high-converting 3-second hook variations, problem-agitation demos, and micro-influencer UGC talking points.",
      description: "User-Generated Content (UGC) videos are the undisputed revenue engine of Meta, TikTok, and YouTube Shorts advertising. Sleek studio TV commercials often fail on social feeds because users instantly swipe past anything that looks like an ad. High-performing UGC video ads look organic, feel raw, and hook attention in the first 3 seconds with visual pattern interrupts. Founders use AI to storyboard shot-by-shot scripts and generate dozens of hook variations for creator outreach.",
      playbook: {
        setup: "Inspect current viral hooks in your product niche using TikTok Creative Center. Bookmark CapCut and open Claude 3.7 Sonnet.",
        execute: "Instruct Claude to generate a 30-to-45 second UGC script structured in 4 segments: 1) 3 alternative visual pattern-interrupt hooks (0–3s), 2) Problem agitation with physical demonstration (3–15s), 3) The 'Aha!' product transformation (15–30s), and 4) Clear Call-to-Action with risk-reversal guarantee (30–45s).",
        verify: "Read the script aloud with a stopwatch: confirm the hook delivers the core problem statement in under 3.5 seconds, and ensure language sounds like a natural friend's recommendation rather than a telemarketing script."
      },
      tools: [
        {
          name: "Claude",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Frontier reasoning model for writing conversational, authentic UGC influencer scripts, visual shot lists, and viral hook variations.",
          bestFor: "Conversational UGC video scripting & hook matrix generation"
        },
        {
          name: "CapCut",
          type: "Free",
          url: "https://www.capcut.com",
          description: "All-in-one mobile and desktop video editing suite featuring automated animated captions, trending sounds, and fast cut tools.",
          bestFor: "Mobile video editing, animated captions & trending TikTok cuts"
        },
        {
          name: "TikTok Creative Center",
          type: "Free",
          url: "https://ads.tiktok.com/business/creativecenter/",
          description: "Official TikTok intelligence platform tracking top-performing video ads, breakout audio tracks, and high-CTR hook patterns.",
          bestFor: "Discovering trending hooks & viral competitor ad benchmarks"
        }
      ],
      callouts: {
        mistake: "Spending the first 5 seconds introducing your brand logo instead of opening with a visual problem hook, causing 80%+ drop-off before the product is even seen.",
        proTip: "Shoot 5 different 3-second hook variations for a single video body; testing hooks in ad manager multiplies creative output by 5x with minimal extra filming.",
        mistakes: [
          "Writing scripted dialogue that sounds corporate and rehearsed, destroying the authentic peer-to-peer trust of UGC.",
          "Failing to include dynamic animated captions on screen, losing the 65% of mobile users who watch social feeds with sound muted.",
          "Ending the video without a specific call to action, leaving viewers wondering where to buy or what discount code to use."
        ],
        proTips: [
          "Use physical pattern interrupts in the first second: splashing water on face, tapping microphone, cutting open a competitor box, or holding product directly to the camera lens.",
          "Add dynamic TikTok-style animated word-by-word captions in CapCut with bright yellow or green keyword highlights.",
          "Keep total video length between 25 and 40 seconds; retention charts show massive drop-offs after the 45-second mark for paid acquisition."
        ]
      },
      promptLab: {
        title: "High-CTR UGC Video Script & 3-Second Hook Matrix",
        description: "Generate a complete 4-segment TikTok/Reels UGC script with 3 viral hook variations, on-screen B-roll shot lists, and voiceover text.",
        variables: [
          {
            name: "Hook Style",
            label: "Hook Style",
            options: ["The 'Don't Buy This Until' Warning", "The Visceral Before & After Shock", "The 'My Dermatologist Was Shocked' Story", "The Honest Review from a Skeptic"],
            default: "The 'Don't Buy This Until' Warning"
          },
          {
            name: "Target Problem",
            label: "Target Problem",
            options: ["Red, irritated skin that burns after washing", "Spent $300 on skincare with zero results", "Horrible mid-day oily shine and breakouts"],
            default: "Red, irritated skin that burns after washing"
          },
          {
            name: "Filming Style",
            label: "Filming Style",
            options: ["Casual Bathroom Mirror iPhone Selfie", "Day-in-the-Life Car Vlog Style", "Close-Up ASMR Texture Demonstration"],
            default: "Casual Bathroom Mirror iPhone Selfie"
          }
        ],
        template: `You are an elite short-form video creative director who has generated over $15M in DTC revenue from TikTok and Meta video ads.

Write a complete 35-second UGC Video Ad Script:
- Hook Style: [Hook Style]
- Target Problem: [Target Problem]
- Filming Style: [Filming Style]

Please provide:
1. 3 Alternative 3-Second Hook Variations: Audio line + Visual action on screen.
2. Shot-by-Shot Storyboard Table: (Timestamp | Visual B-Roll Action | Voiceover Script | On-Screen Text Graphic).
3. Creator Filming Directives: 3 critical instructions for the UGC creator regarding lighting, sound, and pacing.`,
        expectedOutput: `### Viral UGC Video Ad Script

#### 1. Three High-CTR Hook Variations (0:00–0:03)
- **Hook A (The Warning):**
  - *Visual:* Creator leans into camera with wide eyes holding hand up to lens.
  - *Audio:* *"Do NOT buy another moisturizer if your skin still burns after washing your face."*
- **Hook B (The Confession):**
  - *Visual:* Creator holds up 4 half-empty designer skincare bottles and tosses them into a trash bin.
  - *Audio:* *"I wasted $320 on celebrity skincare before my esthetician told me this one truth."*
- **Hook C (ASMR Visual Shock):**
  - *Visual:* Extreme close-up of thick velvety cream smoothing over red cheek, redness fading in real-time overlay.
  - *Audio:* *"Watch what happens to my irritated skin in literally 60 seconds."*

#### 2. Shot-by-Shot Storyboard Table
| Time | Visual Action (B-Roll) | Voiceover Script | On-Screen Text (CapCut) |
| :--- | :--- | :--- | :--- |
| **0:00–0:03** | Leaning close to bathroom mirror, pointing to inflamed red cheek. | *"Do NOT buy another moisturizer if your skin still burns after washing your face."* | ⚠️ DO NOT BUY THIS ⚠️ |
| **0:03–0:12** | Showing texture of cream on finger, swatching on back of hand in natural light. | *"Every product I tried had synthetic fragrance that completely wrecked my skin barrier. Then I switched to this bio-barrier cream."* | Wrecked Skin Barrier? 🛑 |
| **0:12–0:24** | Applying cream to face, glowing finish, smiling at camera reflection. | *"It uses 5 bio-identical ceramides instead of silicone fillers. It absorbs in 10 seconds and keeps my skin calm all day without any greasy shine."* | 5 Bio-Ceramides ✨ (Zero Greasy Shine) |
| **0:24–0:35** | Holding bottle next to cheek, tapping screen to show special offer link. | *"They have a 30-day empty bottle guarantee. Tap below right now to get 20% off your first jar before they sell out again."* | 30-Day Guarantee! 👉 TAP BELOW |

#### 3. Creator Filming Directives
1. **Zero Ring Lights:** Film facing a bright natural window. Ring lights create artificial reflection circles in pupils that scream 'ad'.
2. **Fast Speaking Cadence:** Speak 20% faster than normal conversation. Cut out all breathing pauses between sentences during editing.
3. **Sound-Design Pops:** Add subtle pop and whoosh sound effects every time an on-screen text graphic appears.`
      },
      conceptGuide: {
        title: "Short-Form Video Psychology & Visual Pattern Interrupts",
        overview: "Social video platforms operate as algorithmic slot machines. Users swipe their thumbs every 2 seconds. The first 3 seconds of a video ad dictate over 80% of total return on ad spend (ROAS). Successful UGC scripts employ visual pattern interrupts—actions that break the expected flow of a feed—paired with high-speed editing and relatable peer recommendations that bypass traditional sales defenses.",
        keyPoints: [
          "**The 3-Second Rule:** If you fail to stop the thumb in the first 3 seconds, the remaining 30 seconds of your video do not exist.",
          "**Visual Native Formatting:** High-production 4K studio commercials trigger instant ad-blindness; raw 1080p vertical smartphone videos feel authentic and trustworthy.",
          "**Hook-Body Decoupling:** Filming multiple modular hooks for a single body script allows rapid creative testing with zero incremental production cost."
        ]
      },
      learning: {
        resources: [
          {
            title: "TikTok Creative Center Trending Ads Library",
            url: "https://ads.tiktok.com/business/creativecenter/",
            type: "Official Docs"
          },
          {
            title: "CapCut Video Editing Mobile Masterclass",
            url: "https://www.capcut.com",
            type: "E-Commerce Guide"
          },
          {
            title: "Meta Performance Marketing UGC Benchmarks",
            url: "https://www.facebook.com/business/insights",
            type: "Case Study"
          }
        ]
      }
    },

    // Node 8
    {
      id: "step-8",
      stepNumber: 8,
      phaseId: "phase-4",
      title: "Rapid Multi-Variant Paid Ad Creatives (Meta & TikTok)",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Generate dozens of high-CTR static ad angles, comparison charts, and press feature banners tailored for paid acquisition testing.",
      description: "Creative fatigue is the number one cause of declining return on ad spend (ROAS) on Meta and TikTok. To scale a brand profitably, e-commerce founders must test 10–20 new ad creatives every week across distinct psychological angles: 'Us vs. Them' comparison charts, press credibility quotes, customer review highlights, and feature callout grids. Using AI creative tools like AdCreative.ai, Canva, and Figma, brands automate the production of multi-variant ad batches in minutes.",
      playbook: {
        setup: "Set up brand design tokens (Hex colors, logo SVG, product cutout PNGs) in Figma or AdCreative.ai. Review top-converting ad formats in the Meta Ad Library.",
        execute: "Generate 4 core static ad archetypes: 1) 'Us vs. Them' comparison matrix, 2) 5-star customer review screenshot banner, 3) Press quote endorsement ('The holy grail of barrier creams — Vogue'), and 4) Feature callout diagram with pointer arrows. Export in 1:1 (Feed) and 9:16 (Stories/Reels) dimensions.",
        verify: "Run the generated ads through a contrast and mobile legibility check: confirm headline text is easily readable on a small phone screen and passes Meta's 20% text guidelines without feeling cluttered."
      },
      tools: [
        {
          name: "AdCreative.ai",
          type: "Freemium",
          url: "https://www.adcreative.ai",
          description: "AI-powered advertising platform that generates high-converting static banner ads and social creatives based on performance machine learning models.",
          bestFor: "Automated multi-variant banner ad generation & CTR scoring"
        },
        {
          name: "Canva",
          type: "Freemium",
          url: "https://www.canva.com",
          description: "Accessible graphic design platform offering extensive e-commerce ad templates, batch resizing, and Magic Studio AI tools.",
          bestFor: "Quick ad template adaptation & multi-size batch resizing"
        },
        {
          name: "Figma",
          type: "Freemium",
          url: "https://www.figma.com",
          description: "Collaborative design canvas for building scalable component-driven ad templates, comparison tables, and creative testing matrices.",
          bestFor: "Precision typography, component variants & ad systems"
        }
      ],
      callouts: {
        mistake: "Testing only minor variations of a single concept (e.g. changing button color from red to green) instead of testing fundamentally different creative angles.",
        proTip: "The 'Us vs. Them' comparison chart is consistently the highest-converting static ad format across e-commerce verticals because it simplifies the buying decision.",
        mistakes: [
          "Cramming 5 different messages onto a single ad graphic, overwhelming the viewer and diluting click-through rate.",
          "Neglecting to export in 9:16 vertical format, leaving ugly black letterbox bars when ads run across Instagram Stories and Reels.",
          "Using illegible thin script fonts that cannot be read in 0.5 seconds of fast mobile feed scrolling."
        ],
        proTips: [
          "Format comparison charts with green checkmarks for your brand and red 'X' marks for 'Other Brands' to create instant visual comprehension.",
          "Overlay realistic 5 gold stars and an unedited customer review screenshot to provide undeniable social proof.",
          "Include a clear risk-reversal badge (e.g. '30-Day Money-Back Guarantee' or 'Free Shipping Over $45') directly on the static creative."
        ]
      },
      promptLab: {
        title: "Multi-Angle Paid Ad Creative Matrix Generator",
        description: "Generate copy and visual layouts for 4 high-converting static ad archetypes (Comparison, Press Feature, Review, Feature Callout).",
        variables: [
          {
            name: "Primary Angle",
            label: "Primary Angle",
            options: ["Us vs. Them Comparison Chart", "Press Endorsement Quote", "5-Star Review Callout", "Deconstructed Feature Breakdown"],
            default: "Us vs. Them Comparison Chart"
          },
          {
            name: "Primary Value Proposition",
            label: "Primary Value Proposition",
            options: ["Restores Skin Barrier in 7 Days", "Zero Synthetic Fragrance or Fillers", "Replaces 4 Expensive Serums"],
            default: "Restores Skin Barrier in 7 Days"
          },
          {
            name: "Ad Aspect Ratio",
            label: "Ad Aspect Ratio",
            options: ["1:1 Square (Meta / Instagram Feed)", "9:16 Vertical (Stories / Reels / TikTok)", "4:5 Portrait (High-Impact Feed)"],
            default: "1:1 Square (Meta / Instagram Feed)"
          }
        ],
        template: `You are an elite paid media creative strategist managing $500k/month in Meta and TikTok ad spend.

Generate a complete high-converting static ad design blueprint:
- Primary Angle: [Primary Angle]
- Primary Value Proposition: [Primary Value Proposition]
- Ad Aspect Ratio: [Ad Aspect Ratio]

Please provide:
1. Visual Layout Blueprint: Layer-by-layer description of background, product positioning, typography hierarchy, and badges.
2. Exact Ad Copy: Headline, sub-headline, bullet points, and CTA button copy.
3. Psychological Hook Rationale: Why this visual format converts cold traffic on social feeds.`,
        expectedOutput: `### Static Paid Ad Creative Blueprint

#### 1. Visual Layout Blueprint (1:1 Feed Canvas)
- **Background:** Split canvas (\`#FAF8F5\` linen cream on the left 50%, muted charcoal slate on the right 50%).
- **Left Column ("Us"):** High-res cutout of your product on a marble slab with a glowing green checkmark badge.
- **Right Column ("Them"):** Blurred generic white jar with a red X badge.
- **Top Header:** Bold high-contrast typography banner (*"Why 45,000+ People Switched to [Brand Name]"*).
- **Bottom Banner:** 5 gold stars with caption (*"Over 2,400 Verified 5-Star Reviews"*), paired with a contrasting pill button (*"Shop the Difference →"*).

#### 2. Exact Comparison Matrix Copy
| Criteria | [Brand Name] | Other Brands |
| :--- | :--- | :--- |
| **Active Ingredients** | 5 Bio-Identical Ceramides (98% Pure) | Cheap Mineral Oil & Silicone Fillers |
| **Visible Results** | Calms Redness in 7 Days Guaranteed | Takes 8+ Weeks of Layering |
| **Fragrance** | 100% Unscented & Hypoallergenic | Artificial Fragrance & Preservatives |
| **Risk-Free Trial** | 30-Day Empty Bottle Guarantee | No Returns on Opened Bottles |

#### 3. Psychological Hook Rationale
Cold traffic scrolls social feeds quickly and skeptically. A side-by-side comparison chart acts as a cognitive shortcut: it immediately frames the customer's choice not as *'Should I buy skincare?'* but rather *'Which skincare is clearly superior?'*. Green checks versus red crosses provide instant visual validation in under 400 milliseconds.`
      },
      conceptGuide: {
        title: "Creative Diversification & Rapid Meta Ad Iteration",
        overview: "On modern machine-learning ad platforms (Meta Advantage+ and TikTok Smart Performance Campaigns), the creative *is* the targeting. Algorithms identify ideal buyers by analyzing the visual elements and text overlays of your ad creative. Testing varied visual formats (comparisons, press clips, founder notes, customer quotes) unlocks distinct customer cohorts that a single polished video ad could never reach.",
        keyPoints: [
          "**Creative is Targeting:** Different ad formats appeal to different buyer psychologies (analytical buyers love comparison charts; emotional buyers love UGC).",
          "**Combatting Creative Fatigue:** Scaling ad spend without introducing new visual assets causes ad frequency to rise and CPA to skyrocket.",
          "**Thumb-Stopping Contrast:** High-contrast backgrounds and bold headline typography guarantee legibility during rapid mobile feed scrolling."
        ]
      },
      learning: {
        resources: [
          {
            title: "AdCreative.ai Automated Generation Documentation",
            url: "https://www.adcreative.ai",
            type: "Official Docs"
          },
          {
            title: "Meta Ad Library Best Practices & Benchmarks",
            url: "https://www.facebook.com/ads/library/",
            type: "E-Commerce Guide"
          },
          {
            title: "Canva E-Commerce Creative Suite",
            url: "https://www.canva.com",
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
      title: "Lifecycle Email Marketing Sequences & SMS Automation",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Write automated Welcome series, abandoned cart recovery emails, post-purchase cross-sells, and VIP win-back campaigns.",
      description: "Acquiring customers through paid ads is expensive. E-commerce profitability is won or lost in customer retention and lifetime value (LTV). Automated lifecycle email flows in Klaviyo generate 20–40% of total store revenue with zero incremental ad spend. By setting up automated behavior-triggered sequences—including Abandoned Cart recovery, Welcome education series, and post-purchase replenishment reminders—brands turn one-time buyers into loyal repeat subscribers.",
      playbook: {
        setup: "Integrate Klaviyo with your Shopify store. Configure dedicated sending domains and verify DMARC, DKIM, and SPF email authentication records to guarantee inbox placement.",
        execute: "Draft and schedule the 4 non-negotiable core flows: 1) 3-part Welcome Series (Brand story + introductory offer), 2) 3-part Abandoned Checkout Flow (Gentle nudge at 1hr, objection handling at 12hrs, expiring 10% discount at 24hrs), 3) Post-Purchase Cross-Sell, and 4) 60-day Sunset / Win-back flow.",
        verify: "Send test preview emails to desktop and mobile devices. Verify that dynamic Shopify checkout links populate correctly, unsubscribe links are compliant with CAN-SPAM / GDPR, and dark-mode rendering does not invert logo contrast."
      },
      tools: [
        {
          name: "Klaviyo",
          type: "Freemium",
          url: "https://www.klaviyo.com",
          description: "Leading marketing automation platform for e-commerce, offering behavior-triggered email flows, SMS campaigns, and predictive LTV analytics.",
          bestFor: "Automated e-commerce lifecycle email & SMS revenue flows"
        },
        {
          name: "Claude",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Reasoning model for crafting compelling, high-open email subject lines, conversational brand storytelling, and high-converting dunning copy.",
          bestFor: "Email subject line optimization & narrative lifecycle copy"
        },
        {
          name: "Really Good Emails",
          type: "Free",
          url: "https://reallygoodemails.com",
          description: "Curated design showcase of top-performing marketing emails and automated lifecycle flows from leading direct-to-consumer brands.",
          bestFor: "Email design inspiration & responsive layout benchmarks"
        }
      ],
      callouts: {
        mistake: "Sending only plain sales discounts in every email without educating the customer on brand values, turning your subscriber base into discount junkies.",
        proTip: "In email #2 of the Abandoned Cart flow, omit discount codes and instead address the #1 buying objection (e.g. shipping time, ingredients, money-back guarantee).",
        mistakes: [
          "Sending the initial abandoned cart email 24 hours later; by then, over 70% of impulse buyers have already purchased from a competitor.",
          "Building single-image slice emails that land directly in Gmail's Spam or Promotions tab and fail to load on poor mobile data.",
          "Neglecting to set up DMARC and DKIM email records, causing deliverability rates to crater below 80%."
        ],
        proTips: [
          "Trigger your first Abandoned Cart reminder exactly 60 minutes after checkout abandonment; this window yields the highest conversion recovery rate.",
          "Use plain-text or hybrid personal emails from the 'Founder' for VIP customer win-backs; they feel like real personal messages and achieve 50%+ open rates.",
          "Include a dynamic countdown timer or 24-hour expiration notice on cart recovery discount codes to create genuine buying urgency."
        ]
      },
      promptLab: {
        title: "3-Part Abandoned Checkout Recovery Sequence",
        description: "Generate copy, subject lines, preview text, and objection-handling strategies for a high-converting 3-email abandoned cart sequence.",
        variables: [
          {
            name: "Cart Value Tier",
            label: "Cart Value Tier",
            options: ["Standard Single Product ($35–$65)", "High-AOV Bundle ($120–$250)", "Subscription Starter Kit ($45/mo)"],
            default: "Standard Single Product ($35–$65)"
          },
          {
            name: "Brand Voice",
            label: "Brand Voice",
            options: ["Helpful & Conversational Friend", "Witty, Playful & Irreverent", "Polished & Luxurious Caregiver"],
            default: "Helpful & Conversational Friend"
          },
          {
            name: "Final Discount Incentive",
            label: "Final Discount Incentive",
            options: ["10% Off Expiring in 24 Hours", "Free Expedited Shipping Voucher", "Free Travel-Sized Bonus Gift with Order"],
            default: "10% Off Expiring in 24 Hours"
          }
        ],
        template: `You are an executive retention marketing director specializing in Klaviyo lifecycle automation for 8-figure DTC brands.

Write a complete 3-part Abandoned Checkout Flow:
- Cart Value Tier: [Cart Value Tier]
- Brand Voice: [Brand Voice]
- Final Discount Incentive: [Final Discount Incentive]

Please provide:
1. Email 1 (Send at 1 Hour): The Gentle Nudge (Subject line, preview text, body copy, dynamic cart link button).
2. Email 2 (Send at 12 Hours): The Objection Crusher (Focusing on guarantees and social proof with zero discounts).
3. Email 3 (Send at 24 Hours): The Urgent Final Offer (Introducing the incentive with clear deadline scarcity).`,
        expectedOutput: `### Klaviyo 3-Part Abandoned Cart Recovery Sequence

#### Email 1: The Helpful Nudge (Trigger: 1 Hour After Abandonment)
- **Subject Line:** Did life get in the way? Your cart is saved.
- **Preview Text:** We kept your items safe so you can pick up right where you left off.
- **Body Copy:**
  > Hey there,
  >
  > We noticed you left your items behind in checkout. Life happens—phone calls ring, coffee spills, tabs get closed.
  >
  > We went ahead and reserved your cart so your items don't sell out. Click below whenever you're ready to complete your order with one tap:
  >
  > **[ Complete Your Order Now → ]**
  >
  > Have a question before ordering? Simply reply directly to this email—our team reads every single message.

#### Email 2: The Objection Crusher (Trigger: 12 Hours After Abandonment)
- **Subject Line:** Still thinking it over? (Read this first)
- **Preview Text:** Why 45,000+ customers trust our 30-day empty bottle guarantee.
- **Body Copy:**
  > We know trying a new skincare brand online can feel like a gamble.
  >
  > *Will it actually work for my sensitive skin? What if I don't love it?*
  >
  > That's why we remove 100% of the risk. Every order comes with our **30-Day 'Empty Bottle' Guarantee**. Use the entire jar for four weeks. If your skin doesn't feel calmer and more hydrated, send it back—even if the bottle is completely empty—and we'll issue a full refund immediately.
  >
  > See what verified buyer Sarah M. had to say:
  > *"I was skeptical after wasting money on designer brands, but this cleared my redness in 5 days. I'm never using anything else."* ⭐⭐⭐⭐⭐
  >
  > **[ Reclaim Your Cart Risk-Free → ]**

#### Email 3: The Final Incentive (Trigger: 24 Hours After Abandonment)
- **Subject Line:** An extra 10% off (your cart expires tonight)
- **Preview Text:** Use code RECOVER10 before midnight to claim your exclusive discount.
- **Body Copy:**
  > Your reserved cart is set to expire tonight at midnight to free up stock for our waitlist.
  >
  > Because we really want you to experience what healthy skin feels like, here is an exclusive 10% discount on your order:
  >
  > **Use Code: RECOVER10 at checkout**
  >
  > **[ Claim 10% Off & Finish Checkout → ]**
  >
  > *(Note: This discount code and your reserved cart expire in exactly 12 hours).*`
      },
      conceptGuide: {
        title: "Lifecycle Marketing Economics & Automated Retention Revenue",
        overview: "In direct-to-consumer e-commerce, top-of-funnel customer acquisition costs (CAC) continue to rise. Stores that rely solely on first-order profitability struggle to survive. Automated email flows generate pure gross margin because they monetize users who have already expressed commercial intent. Segmenting subscribers and triggering personalized messages based on browsing behavior turns your customer database into a predictable revenue asset.",
        keyPoints: [
          "**The 60-Minute Window:** Over 60% of recovered abandoned checkouts happen from the very first email sent within one hour of abandonment.",
          "**Deliverability First:** Technical setup (DKIM, SPF, DMARC) is paramount; an email that lands in Spam or Promotions generates $0 in revenue.",
          "**Preserving Brand Margins:** Never train your audience to expect immediate discounts; always lead with customer service and social proof before introducing coupon codes."
        ]
      },
      learning: {
        resources: [
          {
            title: "Klaviyo Automated Flows Best Practices",
            url: "https://www.klaviyo.com/blog/ecommerce-email-marketing-best-practices",
            type: "Official Docs"
          },
          {
            title: "Really Good Emails Curated DTC Gallery",
            url: "https://reallygoodemails.com",
            type: "E-Commerce Guide"
          },
          {
            title: "Email Deliverability DMARC & BIMI Guidelines",
            url: "https://dmarc.org",
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
      title: "Storefront Conversion Rate Optimization (CRO) & Heatmap Auditing",
      timeEstimate: "1.5 hrs",
      difficulty: "Advanced",
      summary: "Run AI visual heatmaps to identify checkout friction, mobile layout drop-offs, and trust badge placements.",
      description: "Doubling your storefront conversion rate (e.g., from 1.5% to 3.0%) instantly cuts your customer acquisition cost in half and doubles your advertising budget efficiency. Using Hotjar heatmaps, session recordings, and Google Analytics 4 checkout funnel tracking, e-commerce operators diagnose where mobile users abandon carts. Feeding storefront screenshots into Claude Vision reveals layout clutter, missing trust badges, and friction points across the mobile buying experience.",
      playbook: {
        setup: "Install Hotjar or Microsoft Clarity on your Shopify store. Configure Google Analytics 4 enhanced e-commerce event tracking (`begin_checkout`, `add_payment_info`, `purchase`).",
        execute: "Capture full-page mobile screenshots of your Product Detail Page (PDP), slide-out cart drawer, and checkout screen. Feed these screenshots into Claude 3.7 Sonnet Vision with a specialized CRO heuristic audit prompt. Identify tap friction, text clutter, and low-contrast call-to-actions.",
        verify: "Implement the top 3 recommended fixes (e.g. adding a sticky 'Add to Cart' button, displaying payment trust badges directly beneath the buy button, and enabling 1-click Apple Pay). Monitor GA4 to verify a measurable lift in mobile checkout conversion rate."
      },
      tools: [
        {
          name: "Hotjar",
          type: "Freemium",
          url: "https://www.hotjar.com",
          description: "Behavior analytics software featuring visitor session recordings, click heatmaps, and scroll depth tracking across storefronts.",
          bestFor: "Visual heatmaps, session recordings & visitor drop-off audits"
        },
        {
          name: "Claude",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Multimodal AI model capable of analyzing full-page storefront screenshots to identify UX friction, typography sizing issues, and CRO improvements.",
          bestFor: "Automated mobile UX & visual CRO heuristic auditing"
        },
        {
          name: "Google Analytics 4",
          type: "Free",
          url: "https://analytics.google.com",
          description: "Standard web analytics platform tracking e-commerce conversion funnels, checkout drop-off rates, and acquisition channel ROI.",
          bestFor: "E-commerce checkout funnel tracking & conversion analytics"
        }
      ],
      callouts: {
        mistake: "Optimizing the desktop layout while ignoring mobile, despite over 80% of e-commerce traffic and transactions originating on smartphones.",
        proTip: "Add a sticky 'Add to Cart' bar that docks to the bottom of the screen as the user scrolls past the primary hero button.",
        mistakes: [
          "Forcing customers to register for an account before checkout instead of providing a frictionless Guest Checkout option.",
          "Hiding shipping fees until the final checkout step, which is the #1 cause of cart abandonment across all e-commerce categories.",
          "Failing to place express 1-click checkout options (Apple Pay, Shop Pay, Google Pay) prominently above the fold on mobile."
        ],
        proTips: [
          "Add dynamic free shipping progress bars inside the slide-out cart drawer (e.g., 'Add $12 more for Free Shipping!') to increase Average Order Value (AOV).",
          "Display security badges (e.g. SSL encryption, 30-Day Money-Back Guarantee, Apple Pay) immediately adjacent to the primary checkout button.",
          "Keep mobile product forms simple: default the most popular bundle or size as pre-selected to eliminate decision paralysis."
        ]
      },
      promptLab: {
        title: "Claude Vision Storefront CRO & UX Audit Prompt",
        description: "Submit mobile product page screenshots to Claude Vision to receive a ranked breakdown of conversion friction points and recommended fixes.",
        variables: [
          {
            name: "Storefront Screen Audited",
            label: "Storefront Screen Audited",
            options: ["Mobile Product Detail Page (PDP)", "Slide-Out Cart Drawer", "Checkout & Shipping Form"],
            default: "Mobile Product Detail Page (PDP)"
          },
          {
            name: "Primary Conversion Goal",
            label: "Primary Conversion Goal",
            options: ["Lift Add-to-Cart (ATC) Rate", "Increase Average Order Value (AOV)", "Reduce Checkout Abandonment"],
            default: "Lift Add-to-Cart (ATC) Rate"
          },
          {
            name: "Traffic Source",
            label: "Traffic Source",
            options: ["Cold Paid Meta / TikTok Traffic", "Organic Google Search Traffic", "Returning Email / SMS Subscribers"],
            default: "Cold Paid Meta / TikTok Traffic"
          }
        ],
        template: `You are an elite E-Commerce Conversion Rate Optimization (CRO) auditor who has optimized hundreds of Shopify Plus storefronts.

Perform a ruthless, heuristic CRO audit on the attached mobile storefront screenshot:
- Storefront Screen Audited: [Storefront Screen Audited]
- Primary Conversion Goal: [Primary Conversion Goal]
- Traffic Source: [Traffic Source]

Please provide:
1. Executive Conversion Score: Graded out of 100 with a 2-sentence summary of overall UX friction.
2. Top 3 Friction Leaks (Ranked by Impact): Detailed explanation of what is currently suppressing conversions.
3. 3 High-Impact Actionable Fixes: Specific visual and layout changes to implement immediately (with copy recommendations).
4. Trust & Security Checklist: Essential badges, guarantees, and social proof elements to insert.`,
        expectedOutput: `### Mobile Storefront CRO Audit Report

#### 1. Executive Conversion Score: 68/100
> *"The visual product photography is strong, but the mobile purchasing experience suffers from cognitive overload: the primary 'Add to Cart' button is buried below unformatted text, and critical trust signals (shipping times and return guarantees) are completely invisible above the fold."*

#### 2. Top 3 Friction Leaks (Ranked by Impact)
1. **No Sticky Add-to-Cart Trigger:** Once a mobile user scrolls past the second image to read reviews, the 'Buy' button disappears, requiring 4 swipes back up to purchase.
2. **Hidden Shipping Costs:** Shipping estimates are not disclosed on the PDP, causing high checkout drop-offs when shipping fees appear in the final cart step.
3. **Cluttered Variant Selectors:** Size and color swatches are presented as raw dropdown menus rather than clean visual pills with pre-selected defaults.

#### 3. Three High-Impact Actionable Fixes
1. **Implement Sticky Bottom CTA Bar:** Dock a 56px sticky bar to the bottom of the mobile viewport containing price, star rating, and a high-contrast 'Add to Cart' button.
2. **Dynamic Free Shipping Threshold:** Insert an interactive progress bar directly above the CTA: *"Free Shipping in the US when you spend $50 (You are $12 away!)"*.
3. **Instant Express Checkout Pills:** Position Shop Pay and Apple Pay express buttons directly beneath the primary CTA to enable 1-click biometric purchases.

#### 4. Trust & Social Proof Placement
- Place a 5-star rating summary snippet with review count (*"4.9 / 5.0 (2,418 reviews)"*) directly underneath the main product title.
- Embed a 3-badge security row below the CTA button:
  - 🔒 *256-Bit Encrypted Checkout*
  - 📦 *Dispatched in 24 Hours*
  - 🔄 *30-Day Money-Back Guarantee*`
      },
      conceptGuide: {
        title: "Heuristic CRO Analysis & Mobile Friction Elimination",
        overview: "Conversion Rate Optimization is the science of removing cognitive friction. E-commerce visitors arrive with natural defense mechanisms: skepticism of quality, fear of wasted money, and short attention spans. Effective CRO aligns the visual hierarchy so that key value propositions, social proof, and call-to-action buttons are immediately apparent within the natural thumb zone.",
        keyPoints: [
          "**The Mobile-First Imperative:** Over 80% of consumer orders happen on mobile devices; optimizing desktop first is an expensive strategic error.",
          "**Friction vs. Motivation Equation:** Conversion occurs when Motivation exceeds Friction; eliminating unnecessary form fields and steps directly lifts revenue.",
          "**Above-the-Fold Value:** Critical decision elements (product title, star rating, clear price, guarantee badge) must appear before the user begins scrolling."
        ]
      },
      learning: {
        resources: [
          {
            title: "Hotjar E-Commerce Heatmap & Behavior Analytics Guide",
            url: "https://www.hotjar.com",
            type: "Official Docs"
          },
          {
            title: "Baymard Institute E-Commerce Checkout Usability Benchmarks",
            url: "https://baymard.com/lists/cart-abandonment-rate",
            type: "E-Commerce Guide"
          },
          {
            title: "Google Analytics 4 E-Commerce Funnel Tracking",
            url: "https://support.google.com/analytics/answer/9304153",
            type: "Case Study"
          }
        ]
      }
    }
  ]
};
