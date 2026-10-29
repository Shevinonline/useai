// Complete production-grade steps data for "Midjourney & Flux Image Gen" Roadmap (12 Nodes)

export const midjourneyFluxImageGenData = {
  id: "midjourney-flux-image-gen",
  title: "Midjourney & Flux Image Gen",
  description: "Flux Schnell/Dev, LoRA fine-tuning, ComfyUI node workflows, and parameter controls.",
  category: "Tool Mastery Roadmaps",
  stepCount: 12,
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: Prompt Syntax, Camera Physics & Parameter Control",
      description: "Master optical lens physics, lighting geometry, multi-prompt concept weights (::), permutation testing, and core Midjourney parameters."
    },
    {
      id: "phase-2",
      title: "Phase 2: Style Consistency (--sref), Character Locking (--cref) & Personalization",
      description: "Transfer brand color grading and textures with --sref, lock facial identity across storyboards with --cref, and train custom aesthetic personalization profiles."
    },
    {
      id: "phase-3",
      title: "Phase 3: Flux.1, Typography Rendering, Inpainting & ControlNet",
      description: "Synthesize crisp typographic posters with Flux and Ideogram, perform surgical inpainting and canvas panning, and enforce spatial composition with ControlNet."
    },
    {
      id: "phase-4",
      title: "Phase 4: Custom LoRA Training, Photorealistic Upscaling & Commercial Delivery",
      description: "Train proprietary product LoRAs in the cloud, upscale into ultra-sharp 4K/8K assets with micro-skin textures, and prepare production-ready SVGs and WebP assets."
    }
  ],
  steps: [
    // Node 1
    {
      id: "step-1",
      stepNumber: 1,
      phaseId: "phase-1",
      title: "Visual Prompt Grammar, Lighting & Camera Lens Physics",
      timeEstimate: "1.5 hrs",
      difficulty: "Beginner",
      summary: "Structure generative visual prompts through cinematography grammar, decomposing scenes into subject, environment, lighting geometry, film stock, and optical lens physics.",
      description: "Early-stage AI image creators often treat diffusion models like search engines, stuffing prompts with superstitious keywords like 'photorealistic, 8k resolution, trending on artstation, masterpiece'. In modern latent diffusion models (Midjourney v6.1 and Flux.1 Pro), these generic tokens dilute model attention and bias the output toward waxy, artificial CGI smoothing. Professional visual prompt engineering replaces superstitious buzzwords with real-world optical camera physics. By explicitly specifying lens focal lengths (`35mm f/1.4`, `85mm f/1.8` portrait prime), lighting geometries (volumetric god rays, rim lighting, softbox key lights), and physical film emulsions (Kodak Portra 400, Cinestill 800T), creators produce natural cinematic depth and authentic texture.",
      playbook: {
        setup: "Open Midjourney v6.1 (via web UI or Discord) or Flux.1 Pro (via Fal.ai or Replicate). Set base aspect ratio to `--ar 16:9` for cinematic stills or `--ar 4:5` for editorial portraiture.",
        execute: "Draft your prompt decomposing the visual into 5 cinematic layers: 1. Subject & Core Action, 2. Environmental Architecture & Backdrop, 3. Lighting Geometry (key light angle, softbox diffusion, rim highlights), 4. Lens & Aperture Physics (`85mm telephoto portrait lens, shallow depth of field, f/1.8`), 5. Color Palette & Film Emulsion (`Kodak Portra 400, muted earth tones, subtle film grain`).",
        verify: "Inspect the generated 4-grid. Verify that background bokeh blur naturally matches an f/1.8 aperture, edge highlights trace the subject cleanly without blown-out specular glare, and skin exhibits natural pores rather than plastic AI smoothing."
      },
      tools: [
        {
          name: "Midjourney v6.1",
          type: "Paid",
          url: "https://www.midjourney.com",
          description: "Leading generative visual model providing photorealistic skin textures, advanced lighting coherence, and cinematic rendering.",
          bestFor: "Cinematic photography, editorial concept art & high-coherence visual production"
        },
        {
          name: "Flux.1 Pro",
          type: "Paid",
          url: "https://blackforestlabs.ai",
          description: "Next-generation 12B parameter flow-matching diffusion transformer by Black Forest Labs with state-of-the-art prompt following.",
          bestFor: "Literal prompt fidelity, complex compositional scenes & photorealistic rendering"
        },
        {
          name: "Claude 3.7",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Frontier reasoning model used to translate creative director vision into rigorous optical camera physics and lighting prompts.",
          bestFor: "Cinematography prompt expansion, lighting angle planning & camera lens calibration"
        }
      ],
      callouts: {
        mistake: "Using obsolete 2022 buzzwords like 'hyperrealistic, 8k, photorealistic, octane render', which actively degrades modern v6.1 diffusion models toward plastic CGI textures.",
        proTip: "Pair camera distance and lens focal length together (e.g. 'candid medium shot, 50mm f/1.4 prime lens, subtle motion blur') to establish deterministic perspective.",
        mistakes: [
          "Omitting lighting geometry, forcing the diffusion model to default to flat, low-contrast ambient illumination.",
          "Writing 150-word run-on paragraphs that cause the model's text encoder to suffer attention falloff on primary subjects.",
          "Failing to specify film stock or color grade, resulting in generic hyper-saturated default digital colors."
        ],
        proTips: [
          "Specify the direction of the key light relative to the camera: 'low-angle 45-degree key light with subtle rim lighting'.",
          "Use real photographic film stocks: 'Kodak Portra 400' produces warm skin tones; 'Fujifilm Superia' produces cool greens; 'Cinestill 800T' creates neon halation.",
          "Keep subject descriptions under 25 words at the very beginning of the prompt where token weight is strongest."
        ]
      },
      promptLab: {
        title: "Cinematography & Camera Physics Visual Prompt Architect",
        description: "Transform creative scene ideas into optically grounded prompts specifying focal lengths, lighting geometries, and film stocks.",
        variables: [
          {
            name: "Visual Subject",
            label: "Subject & Action",
            options: ["Architect inspecting blueprints inside an unfinished brutalist concrete museum", "Cybersecurity engineer working at a modular server terminal in a darkened datacenter", "Artisan ceramicist shaping clay pottery on a spinning wheel in a sunlit loft", "Automotive designer sketching an electric sports car clay model in an industrial studio"],
            default: "Architect inspecting blueprints inside an unfinished brutalist concrete museum"
          },
          {
            name: "Lighting Geometry",
            label: "Lighting Setup",
            options: ["Volumetric morning god rays streaming through skylights with subtle atmospheric dust haze", "Dramatic chiaroscuro lighting with single softbox key light and cool blue rim lighting", "Warm golden hour backlight with diffused bounce card fill and lens flare", "High-contrast split lighting with moody shadows and neon amber accents"],
            default: "Volumetric morning god rays streaming through skylights with subtle atmospheric dust haze"
          },
          {
            name: "Camera & Optical Lens",
            label: "Lens Physics",
            options: ["35mm f/1.4 wide-angle documentary lens, crisp environmental context", "85mm f/1.8 telephoto portrait prime, creamy shallow depth of field, sharp subject focus", "50mm f/2.0 anamorphic lens, subtle horizontal flare, natural human eye perspective", "24mm f/2.8 low-angle architectural perspective with converging vertical lines"],
            default: "35mm f/1.4 wide-angle documentary lens, crisp environmental context"
          }
        ],
        template: `Visual Generation Master Prompt:

Subject: [Visual Subject].
Environment: Raw architectural materials, natural spatial textures, unvarnished geometric lines.
Lighting: [Lighting Geometry].
Cinematography: Captured on [Camera & Optical Lens], 35mm film still, Kodak Portra 400 film grain, natural color grading, desaturated earth palette.
Parameters: --ar 16:9 --style raw --v 6.1`,
        expectedOutput: `/imagine prompt: a medium-wide documentary still of an architect inspecting blueprints inside an unfinished brutalist concrete museum, raw textured concrete pillars, geometric skylights, volumetric morning god rays streaming through skylights with subtle atmospheric dust haze, captured on 35mm f/1.4 wide-angle documentary lens, crisp environmental context, Kodak Portra 400 film grain, subtle film halation, desaturated warm earth tones, editorial architectural photography --ar 16:9 --style raw --v 6.1`
      },
      conceptGuide: {
        title: "Understanding Latent Space Conditioning & Optical Grammar",
        overview: "Diffusion models operate in continuous latent representations conditioned by text embeddings. Older models relied on superficial clip-art associations, rewarding spammy adjectives like 'hyperrealistic'. Modern architectures (Midjourney v6.1 and Flux.1) utilize large text encoders (T5 and multimodal CLIP) trained on rich photographic and cinematography captions. When you specify '85mm f/1.8 telephoto lens', the model activates latent weights representing optical depth-of-field physics, bokeh blur disks, and lens compression. Describing real physical phenomena rather than emotional adjectives yields vastly superior image quality.",
        keyPoints: [
          "**Optical Reality vs. Adjective Spam:** Concrete camera parameters activate physical optics weights far more accurately than subjective buzzwords.",
          "**Positional Recency Bias:** Tokens placed at the beginning of the prompt receive higher attention weights in diffusion cross-attention layers.",
          "**Lighting Geometry Defines Depth:** Explicitly positioning key lights, fill cards, and rim lights separates foreground subjects from background clutter."
        ]
      },
      learning: {
        resources: [
          {
            title: "Midjourney Official Prompts & Text Guidance Documentation",
            url: "https://docs.midjourney.com/docs/prompts",
            type: "Official Docs"
          },
          {
            title: "Black Forest Labs Flux.1 Architecture & Prompting Guide",
            url: "https://blackforestlabs.ai",
            type: "Official Docs"
          },
          {
            title: "Cinematography Lighting & Lens Focal Length Handbook",
            url: "https://www.theblackandblue.com",
            type: "Guide"
          },
          {
            title: "Kodak Professional Film Stocks & Color Emulsion Characteristics",
            url: "https://www.kodak.com/en/motion/page/film-stocks",
            type: "Reference"
          }
        ]
      }
    },

    // Node 2
    {
      id: "step-2",
      stepNumber: 2,
      phaseId: "phase-1",
      title: "Mastering Core Parameters (--ar, --stylize, --chaos, --weird, --no)",
      timeEstimate: "1.5 hrs",
      difficulty: "Beginner",
      summary: "Gain deterministic control over Midjourney generations using core parameters: --ar (aspect ratios), --stylize (artistic interpretation), --chaos (variation entropy), --weird, and --no.",
      description: "Text prompts define the subject and narrative of a scene, but Midjourney parameters dictate the mathematical boundary conditions of the diffusion sampling process. By appending command-line flags to your prompts, you dictate the spatial dimensions (`--ar 16:9`, `--ar 4:5`), control the balance between literal prompt adherence versus Midjourney's artistic house style (`--stylize 0` to `1000`), introduce exploratory latent variation (`--chaos 0` to `100`), inject surreal offbeat aesthetics (`--weird 0` to `3000`), and suppress unwanted objects through negative prompt tokens (`--no text, watermarks, frames`). Mastering parameter tuning is essential for producing reproducible, production-ready commercial assets.",
      playbook: {
        setup: "In the Midjourney Web UI or Discord `/settings`, verify your default model is set to v6.1. Enable 'Raw Style' (`--style raw`) when high fidelity to literal prompt tokens is required.",
        execute: "Calibrate stylization: test your prompt with `--s 50` (editorial documentary realism), `--s 250` (balanced cinematic), and `--s 750` (dramatic artistic embellishment). Use `--no text, watermark, logo, border` to keep clean commercial plates. Use `--chaos 20` when exploring divergent compositional angles.",
        verify: "Confirm generated assets match required production aspect ratios (e.g. 16:9 for desktop headers, 1:1 for product tiles), negative exclusions are respected, and `--stylize` maintains brand realism without hallucinated ornate elements."
      },
      tools: [
        {
          name: "Midjourney Web UI",
          type: "Paid",
          url: "https://www.midjourney.com",
          description: "Visual web interface for Midjourney featuring real-time parameter sliders, aspect ratio pickers, and organized archive folders.",
          bestFor: "Parameter exploration, batch management & visual settings configuration"
        },
        {
          name: "Discord",
          type: "Free",
          url: "https://discord.com",
          description: "Primary chat interface for Midjourney command-line prompt execution, parameter testing, and community bot interactions.",
          bestFor: "CLI prompt execution, bot automation & parameter flag testing"
        },
        {
          name: "Notion",
          type: "Freemium",
          url: "https://www.notion.so",
          description: "Database workspace used to catalog verified parameter combinations, brand style seeds, and negative prompt recipes.",
          bestFor: "Prompt recipe documentation, parameter cheat sheets & asset organization"
        }
      ],
      callouts: {
        mistake: "Leaving default `--stylize 100` active when attempting literal product mockups, causing the model to add unwanted ornate flourishes and artistic stylizations.",
        proTip: "Use `--style raw` paired with low stylize (`--s 50`) for commercial product photography and documentary realism; it minimizes AI house style.",
        mistakes: [
          "Setting `--chaos` above 30 when attempting to iterate on a specific composition, resulting in wildly erratic, unusable variations.",
          "Writing negative words directly in the positive prompt (e.g. 'a park without any people'), which causes the model to generate people due to keyword attention.",
          "Using non-integer aspect ratios without verifying target responsive container dimensions."
        ],
        proTips: [
          "Always use `--no [unwanted_items]` instead of negative phrases in the main prompt; diffusion models attend to nouns regardless of negating words.",
          "Use `--weird 50–150` in subtle doses to break out of generic AI visual cliches without turning the scene into a bizarre nightmare.",
          "Remember that `--ar` accepts any ratio up to 1:3 or 3:1 (e.g. `--ar 21:9` for ultra-wide cinematic banners, `--ar 9:16` for mobile vertical stories)."
        ]
      },
      promptLab: {
        title: "Parameter Calibration & Negative Constraint Prompt",
        description: "Configure exact aspect ratios, stylize boundaries, and negative token exclusions for commercial visual production.",
        variables: [
          {
            name: "Commercial Asset",
            label: "Target Commercial Asset",
            options: ["E-Commerce Luxury Skincare Bottle on Wet Marble", "SaaS Enterprise Analytics Dashboard on MacBook Pro Display", "Editorial Fashion Model in Minimalist Linen Apparel", "Industrial Heavy Machinery in Clean High-Tech Assembly Plant"],
            default: "E-Commerce Luxury Skincare Bottle on Wet Marble"
          },
          {
            name: "Aspect Ratio",
            label: "Aspect Ratio Flag",
            options: ["--ar 16:9 (Desktop Hero Banner)", "--ar 4:5 (Social Feed & Mobile)", "--ar 1:1 (Product Grid Square)", "--ar 21:9 (Ultrawide Cinematic)"],
            default: "--ar 16:9 (Desktop Hero Banner)"
          },
          {
            name: "Stylize & Realism",
            label: "Stylization Level",
            options: ["--style raw --s 50 (Strict Photographic Realism)", "--s 250 (Balanced Commercial Polish)", "--s 750 (High Artistic Drama)"],
            default: "--style raw --s 50 (Strict Photographic Realism)"
          }
        ],
        template: `Commercial Asset Generation:

Prompt:
commercial studio photograph of [Commercial Asset], elegant soft studio key lighting, subtle reflections, crisp product label focus, 85mm macro lens, high-end commercial advertising aesthetic

Parameters to Append:
[Aspect Ratio] [Stylize & Realism] --no text, typography, watermark, signature, blurry, low resolution, extra bottles, cartoon, illustration --v 6.1`,
        expectedOutput: `/imagine prompt: commercial studio photograph of E-Commerce Luxury Skincare Bottle on Wet Marble, elegant soft studio key lighting, subtle reflections, crisp product label focus, 85mm macro lens, high-end commercial advertising aesthetic [Aspect Ratio] [Stylize & Realism] --no text, typography, watermark, signature, blurry, low resolution, extra bottles, cartoon, illustration --v 6.1`
      },
      conceptGuide: {
        title: "Understanding Sampling Dynamics & Parameter Mathematics",
        overview: "In diffusion generation, parameters act as mathematical multipliers on the noise prediction schedule. The `--stylize` parameter governs classifier-free guidance (CFG) and Midjourney's proprietary aesthetic reinforcement model: higher values steer generation toward learned aesthetic beauty, while lower values bind sampling strictly to prompt token semantics. The `--chaos` parameter controls the initial latent noise tensor variance across the 4 generated grid items: high chaos seeds divergent noise patterns, producing 4 radically different compositions. Understanding these sampling controls allows creators to navigate latent space with predictable precision.",
        keyPoints: [
          "**Stylize vs. Semantic Adherence:** Lower stylize (`--s 50`) prioritizes literal prompt fidelity; higher stylize (`--s 750`) prioritizes aesthetic beauty.",
          "**Negative Token Logit Masking:** The `--no` parameter applies negative guidance vectors, penalizing the probability of unwanted semantic features.",
          "**Latent Noise Variance:** The `--chaos` parameter controls initial random seed divergence across the 4-quadrant batch."
        ]
      },
      learning: {
        resources: [
          {
            title: "Midjourney Parameters Index Official Documentation",
            url: "https://docs.midjourney.com/docs/parameter-list",
            type: "Official Docs"
          },
          {
            title: "Midjourney Aspect Ratios (--ar) Reference Guide",
            url: "https://docs.midjourney.com/docs/aspect-ratios",
            type: "Official Docs"
          },
          {
            title: "Midjourney Stylize & Style Raw Deep Dive",
            url: "https://docs.midjourney.com/docs/stylize",
            type: "Reference"
          },
          {
            title: "Classifier-Free Diffusion Guidance Research (Ho & Salimans)",
            url: "https://arxiv.org/abs/2207.12598",
            type: "Architecture"
          }
        ]
      }
    },

    // Node 3
    {
      id: "step-3",
      stepNumber: 3,
      phaseId: "phase-1",
      title: "Multi-Prompt Weighting (::), Permutations ({a, b}) & Seed Locking",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Master concept separation with double-colon weighting (::), execute batch testing with permutation matrices ({a, b}), and freeze spatial noise with seed locking.",
      description: "When prompt concepts blend into an unintentional soup (e.g. asking for a 'hot dog' and getting an overheated canine rather than food), developers need explicit concept separation. Midjourney provides Multi-Prompting via double colons (`::`). Adding `::` splits prompts into distinct semantic chunks and assigns relative mathematical weights (e.g. `hot dog::2 street vendor::1`). Negative weights (`::-0.5`) allow surgical concept dampening. Combined with Permutation syntax (`{editorial, cinematic} {morning, night}`) to generate dozens of parallel iterations in a single command, and `--seed` locking to freeze the initial latent noise field, creators can systematically test variables with scientific rigor.",
      playbook: {
        setup: "Enable Fast or Turbo GPU hours in Midjourney to support permutation testing. Ensure you have the seed number of any reference generation by reacting with an envelope emoji (✉️) in Discord or clicking 'Info' in the Web UI.",
        execute: "Construct a multi-weighted prompt: `architectural glass pavilion::2 surrounded by dense autumn pine forest::1 concrete minimalist deck::0.5 --ar 16:9 --seed 849201`. Execute a permutation batch to evaluate 3 lighting scenarios simultaneously: `a luxury watch on slate, {golden hour, moody rain, studio rim light} --ar 1:1`.",
        verify: "Check that relative weights accurately dictate visual dominance in the rendered scene. Confirm that re-running a prompt with the identical `--seed` preserves the underlying spatial layout, camera angle, and subject proportions."
      },
      tools: [
        {
          name: "Midjourney Permutations",
          type: "Paid",
          url: "https://docs.midjourney.com/docs/permutations",
          description: "Batch generation syntax in Midjourney allowing creators to generate multiple prompt variations in parallel using curly brackets {a, b}.",
          bestFor: "Batch exploration, multi-variable testing & brand moodboarding"
        },
        {
          name: "Flux.1",
          type: "Paid",
          url: "https://blackforestlabs.ai",
          description: "Flow-matching model supporting precise mathematical concept blending and deterministic seed reproduction.",
          bestFor: "High-adherence concept weighting, seed reproduction & batch generation"
        },
        {
          name: "Krea AI",
          type: "Freemium",
          url: "https://www.krea.ai",
          description: "Real-time visual generation engine allowing instant live seed manipulation and real-time concept weight adjustments.",
          bestFor: "Live weight adjustments, real-time spatial iteration & visual feedback"
        }
      ],
      callouts: {
        mistake: "Using commas instead of double colons (`::`) when attempting to weight concepts, which has zero mathematical effect on token weight.",
        proTip: "Use `--seed` locking when testing prompt changes: by freezing the seed number, you can verify whether changing 'navy blazer' to 'charcoal coat' alters only the clothing without changing the face or background.",
        mistakes: [
          "Launching a 50-job permutation array (`{a,b,c} {x,y,z} {1,2,3}`) that exhausts your monthly Fast GPU hours in under 5 minutes.",
          "Using extreme weights like `concept::100`, which blows out latent space contrast and causes visual corruption artifacts.",
          "Forgetting that negative weights (`::-0.5`) cannot zero out a core subject entirely if other positive keywords heavily imply it."
        ],
        proTips: [
          "Fractional weights work seamlessly: `modern living room::1.5 scandinavian furniture::1 bold abstract art::0.3`.",
          "Use multi-prompting to cleanly separate words: `cup cake` vs `cup:: cake`.",
          "Save successful seed numbers in your team prompt library to serve as reproducible geometric baselines for future marketing campaigns."
        ]
      },
      promptLab: {
        title: "Multi-Weighted Composition & Permutation Matrix Prompt",
        description: "Structure complex multi-concept scenes with mathematical relative weighting and batch-test lighting variants using permutations.",
        variables: [
          {
            name: "Primary Concept",
            label: "Dominant Subject & Weight",
            options: ["futuristic electric hypercar with carbon fiber bodywork::2", "minimalist concrete architectural villa on clifftop::2.5", "high-end wireless noise-canceling headphones on pedestal::2"],
            default: "futuristic electric hypercar with carbon fiber bodywork::2"
          },
          {
            name: "Secondary Environment",
            label: "Environment & Weight",
            options: ["wet neon-lit Tokyo expressway at midnight::1", "rugged volcanic Icelandic black sand beach with sea mist::1", "pristine white museum gallery with soft ambient glow::0.8"],
            default: "wet neon-lit Tokyo expressway at midnight::1"
          },
          {
            name: "Lighting Permutation",
            label: "Lighting Matrix Variants",
            options: ["{golden hour key light, moody cinematic rain, harsh studio strobe}", "{overcast diffused daylight, volumetric sunset god rays, midnight neon reflection}", "{soft warm morning glow, dramatic rim lighting, high-contrast chiaroscuro}"],
            default: "{golden hour key light, moody cinematic rain, harsh studio strobe}"
          }
        ],
        template: `Multi-Prompt & Permutation Execution:

Base Prompt:
[Primary Concept] [Secondary Environment] atmospheric depth::0.5, captured on 35mm f/1.4 lens, [Lighting Permutation] --ar 16:9 --style raw --v 6.1

Explanation:
- Primary concept receives dominant weight (2.0+) to ensure focal dominance.
- Secondary environment receives balanced weight (0.8–1.0) to provide context without clutter.
- The curly bracket permutation triggers 3 concurrent batch runs testing distinct lighting scenarios.`,
        expectedOutput: `/imagine prompt: futuristic electric hypercar with carbon fiber bodywork::2 wet neon-lit Tokyo expressway at midnight::1 atmospheric depth::0.5, captured on 35mm f/1.4 lens, {golden hour key light, moody cinematic rain, harsh studio strobe} --ar 16:9 --style raw --v 6.1`
      },
      conceptGuide: {
        title: "Understanding Multi-Prompting Vectors & Deterministic Seed Noise",
        overview: "In standard single-prompt diffusion, the entire string is encoded into a single pooled text embedding. When concepts clash, the model blends them into a hybrid vector. Double-colon syntax (`::`) instructs the tokenizer to break the prompt into discrete text embeddings, calculate attention scores independently for each chunk, and scale each vector by the specified numeric multiplier before summing. Seed locking (`--seed`) freezes the pseudo-random Gaussian noise tensor that seeds the initial canvas. Freezing the noise tensor isolates the text encoder, allowing creators to conduct controlled single-variable A/B experiments.",
        keyPoints: [
          "**Independent Embedding Summation:** Double-colon chunks are tokenized separately, preventing unwanted semantic bleed between concepts.",
          "**Deterministic Noise Freezing:** Using an identical `--seed` guarantees identical layout geometry and composition across prompt revisions.",
          "**Permutation Matrix Scalability:** Permutation syntax (`{a, b}`) allows creative teams to automate high-volume asset exploration in a single command."
        ]
      },
      learning: {
        resources: [
          {
            title: "Midjourney Multi-Prompts & Weights Official Documentation",
            url: "https://docs.midjourney.com/docs/multi-prompts",
            type: "Official Docs"
          },
          {
            title: "Midjourney Permutation Prompts ({a, b}) Guide",
            url: "https://docs.midjourney.com/docs/permutations",
            type: "Official Docs"
          },
          {
            title: "Midjourney Seed & Latent Noise Initialization Reference",
            url: "https://docs.midjourney.com/docs/seeds",
            type: "Reference"
          },
          {
            title: "Understanding Random Noise in Diffusion Models (Lilian Weng)",
            url: "https://lilianweng.github.io/posts/2021-07-11-diffusion-models/",
            type: "Architecture"
          }
        ]
      }
    },

    // Node 4
    {
      id: "step-4",
      stepNumber: 4,
      phaseId: "phase-2",
      title: "Style Reference (--sref) & Aesthetic Code Libraries",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Transfer exact brand color palettes, lighting moods, and illustrative mediums across diverse scenes using Midjourney's Style Reference parameter (--sref) and style weights.",
      description: "Maintaining a cohesive visual brand identity across a 50-image marketing campaign is historically difficult with text prompts alone. A prompt that specifies 'editorial portrait' in one generation might yield high-contrast black-and-white, and in the next a warm pastel watercolor. Midjourney's Style Reference parameter (`--sref [URL]`) solves this by extracting the aesthetic DNA—color harmonies, brush textures, lighting contrast, and film stock—from a reference image and transferring it onto completely unrelated subjects without copying the original subject matter. Combined with Style Weight (`--sw 0` to `1000`) and procedural numeric style codes (`--sref 1849204`), design teams can establish unified corporate visual guidelines across dozens of campaigns.",
      playbook: {
        setup: "Curate 2–4 high-resolution reference images that represent your brand's target aesthetic (e.g. editorial pastel minimalism, 3D clay rendering, or moody neo-noir). Upload them to Discord or copy their public URLs.",
        execute: "Generate new narrative scenes appending `--sref [URL1] [URL2] --sw 250 --v 6.1`. Calibrate the transfer strength: use `--sw 50–100` for subtle color grading, `--sw 250–400` for balanced style adoption, and `--sw 800+` for aggressive medium replication.",
        verify: "Generate 4 completely different subjects (e.g. an executive portrait, a laptop, an urban skyline, a piece of industrial machinery). Verify that all 4 share identical color temperatures, contrast curves, and textural rendering."
      },
      tools: [
        {
          name: "Midjourney --sref",
          type: "Paid",
          url: "https://docs.midjourney.com/docs/style-reference",
          description: "Midjourney's style reference parameter for transferring visual aesthetics, color grading, and textures across diverse scenes.",
          bestFor: "Brand visual consistency, style transfer & aesthetic code libraries"
        },
        {
          name: "Figma",
          type: "Freemium",
          url: "https://figma.com",
          description: "Collaborative design platform used to assemble moodboards, test generated style references, and audit brand color harmony.",
          bestFor: "Brand moodboarding, palette extraction & design token alignment"
        },
        {
          name: "Eagle App",
          type: "Paid",
          url: "https://eagle.cool",
          description: "Professional digital asset manager for cataloging, tagging, and organizing thousands of AI style reference codes and images.",
          bestFor: "Aesthetic code library management, reference tagging & visual asset curation"
        }
      ],
      callouts: {
        mistake: "Using low-resolution, noisy, or watermarked images as your `--sref` source, which transfers unwanted digital noise and compression artifacts into new generations.",
        proTip: "Combine multiple style references with relative weights: `--sref https://urlA.png::2 https://urlB.png::1` to create an entirely custom hybrid brand aesthetic.",
        mistakes: [
          "Setting `--sw 1000` on complex prompt instructions, which overpowers the subject prompt and forces the reference image's composition onto the new scene.",
          "Confusing `--sref` (Style Reference) with `--cref` (Character Reference), expecting `--sref` to transfer a person's facial identity.",
          "Using style references with clashing color palettes, resulting in muddy, desaturated outputs."
        ],
        proTips: [
          "Use `--sref random` to generate images with a random procedural style code; if you discover an aesthetic you love, copy the numeric code from the generation details.",
          "Save verified style reference codes in your design system documentation alongside your brand hex codes and typography rules.",
          "Use `--sref` in conjunction with `--style raw` to ensure the transferred style is applied cleanly without Midjourney's default fantasy bias."
        ]
      },
      promptLab: {
        title: "Multi-Reference Style Transfer & Brand Aesthetic System",
        description: "Apply a unified brand aesthetic across new marketing scenes using weighted style reference URLs and calibrated style weights.",
        variables: [
          {
            name: "New Subject",
            label: "Scene to Generate",
            options: ["Cybersecurity analyst working in a minimalist glass office", "Industrial robotic arm assembling clean semiconductor wafers", "Modern remote team collaborating around a digital interactive whiteboard", "Electric delivery fleet vehicle parked on a rainy city street"],
            default: "Cybersecurity analyst working in a minimalist glass office"
          },
          {
            name: "Target Aesthetic Medium",
            label: "Aesthetic Reference Style",
            options: ["Editorial Scandinavian Minimalism (Clean daylight, pale woods, muted slate)", "Cinematic Cyberpunk Neo-Noir (High contrast, neon reflections, deep shadows)", "Warm Analog Film Portraiture (Kodak Portra, soft halation, vintage grain)", "Clean 3D Isometric Clay Render (Pastel tones, soft ambient occlusion)"],
            default: "Editorial Scandinavian Minimalism (Clean daylight, pale woods, muted slate)"
          },
          {
            name: "Style Weight",
            label: "Style Weight (--sw)",
            options: ["--sw 100 (Subtle color & lighting tint)", "--sw 300 (Balanced style & prompt fidelity)", "--sw 750 (Aggressive artistic medium adoption)"],
            default: "--sw 300 (Balanced style & prompt fidelity)"
          }
        ],
        template: `Style Reference Generation:

Prompt:
documentary scene of [New Subject], natural lighting, professional cinematography, 35mm lens --ar 16:9 --sref [PASTE_STYLE_IMAGE_URL] [Style Weight] --v 6.1

Aesthetic Goal:
Apply the color grading, grain, and visual texture of [Target Aesthetic Medium] to [New Subject] without copying the reference subject matter.`,
        expectedOutput: `/imagine prompt: documentary scene of Cybersecurity analyst working in a minimalist glass office, natural lighting, professional cinematography, 35mm lens --ar 16:9 --sref https://images.useai.sh/styles/scandinavian-minimalism.png --sw 300 --v 6.1`
      },
      conceptGuide: {
        title: "Understanding Style Embeddings & Gram-Matrix Style Transfer",
        overview: "Style transfer in modern diffusion models differs fundamentally from older neural style transfer algorithms that calculated Gram matrices over VGG layers. In Midjourney v6.1, `--sref` extracts high-level semantic aesthetic vectors from the reference image, projecting them into the cross-attention conditioning layers alongside the text prompt. The Style Weight (`--sw`) parameter acts as an interpolation slider between the text prompt's aesthetic priors and the reference image's visual vectors. By keeping `--sw` around 200–350, creators achieve the sweet spot: full semantic compliance to the prompt's subject, rendered in the exact color palette and textural medium of the reference.",
        keyPoints: [
          "**Aesthetic Vector Projection:** `--sref` extracts palette, lighting, and medium characteristics without transferring subject geometry.",
          "**Style Weight Calibration:** `--sw 50` offers light tinting, `--sw 300` provides balanced brand consistency, and `--sw 800+` forces medium replication.",
          "**Procedural Style Codes:** Numeric codes (`--sref [number]`) represent static coordinates in Midjourney's procedural aesthetic latent space."
        ]
      },
      learning: {
        resources: [
          {
            title: "Midjourney Style Reference (--sref) Official Documentation",
            url: "https://docs.midjourney.com/docs/style-reference",
            type: "Official Docs"
          },
          {
            title: "Midjourney Style Weight (--sw) Reference Guide",
            url: "https://docs.midjourney.com/docs/style-weight",
            type: "Official Docs"
          },
          {
            title: "Eagle App: Organizing Digital Assets & AI Style Codes",
            url: "https://eagle.cool",
            type: "Guide"
          },
          {
            title: "Neural Style Transfer and Latent Vector Conditioning Research",
            url: "https://arxiv.org/abs/1508.06576",
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
      title: "Character Reference (--cref) & Multi-Angle Identity Locking",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Lock human facial identity and bone structure across diverse multi-angle storyboards using Midjourney's Character Reference parameter (--cref) and character weights (--cw).",
      description: "Generating a single photorealistic portrait of an imaginary person is trivial; maintaining that exact person's facial structure, bone proportions, and ethnic identity across 20 different storyboards, emotional expressions, and camera angles is one of the hardest challenges in AI production. Midjourney's Character Reference parameter (`--cref [URL]`) solves identity drift by extracting facial landmarks and structure from a source portrait. Combined with the Character Weight parameter (`--cw`), creators can choose between locking both the face and exact clothing (`--cw 100`, default) or locking strictly the facial identity while allowing outfits, clothes, and accessories to change dynamically (`--cw 0`).",
      playbook: {
        setup: "Generate a clean, high-resolution frontal portrait of your character with neutral lighting and direct eye contact against an uncluttered background. Upscale the image and copy its permanent URL.",
        execute: "Prompt your narrative scene appending `--cref [URL] --cw 0`: `a candid medium shot of a woman in high-tech laboratory wearing safety goggles and white lab coat, inspects a test tube, dynamic rim lighting, 35mm lens --cref [URL] --cw 0 --ar 16:9`. Use `--cw 100` only if the character must wear the identical outfit from the reference portrait.",
        verify: "Compare the facial geometry, eye shape, nose bridge, and facial landmark proportions between the reference portrait and the new multi-angle action shot to verify consistent identity without facial distortion."
      },
      tools: [
        {
          name: "Midjourney --cref",
          type: "Paid",
          url: "https://docs.midjourney.com/docs/character-reference",
          description: "Midjourney's character reference parameter for transferring human facial features and identity across multiple narrative scenes.",
          bestFor: "Consistent character storyboarding, comic book production & brand avatar creation"
        },
        {
          name: "InsightFace",
          type: "Free",
          url: "https://insightface.ai",
          description: "Open-source 2D/3D deep facial analysis and landmark detection library providing the computer vision foundation for facial consistency.",
          bestFor: "Facial landmark extraction, identity verification & facial feature alignment"
        },
        {
          name: "Leonardo AI",
          type: "Freemium",
          url: "https://leonardo.ai",
          description: "Generative art platform featuring native Character Consistency and pose reference pipelines for sequential storytelling.",
          bestFor: "Alternative character consistency pipelines & narrative asset generation"
        }
      ],
      callouts: {
        mistake: "Using a busy reference photo with multiple people or heavy shadows across the face, which causes `--cref` to blend multiple facial landmarks into a deformed hybrid.",
        proTip: "Always set `--cw 0` when generating scenes where your character changes clothes; leaving the default `--cw 100` forces the AI to awkwardly paste the reference outfit into the new scene.",
        mistakes: [
          "Using an extreme side-profile reference image, making it difficult for the model to reconstruct frontal facial landmarks accurately.",
          "Attempting to transfer a realistic photographic person onto an anime/illustration prompt without also specifying a strong `--sref`.",
          "Changing the character's core physical descriptors (e.g. hair color or eye shape) in the prompt while using `--cref`, causing facial identity conflict."
        ],
        proTips: [
          "Create your reference portrait with a neutral expression, high-resolution soft lighting, and square 1:1 aspect ratio for maximum landmark clarity.",
          "Combine `--cref` (character identity) with `--sref` (brand visual style) to ensure your consistent character appears inside a consistent aesthetic universe.",
          "Use cinematic shot descriptors ('over-the-shoulder shot, low-angle hero shot, profile view') to test character consistency across diverse angles."
        ]
      },
      promptLab: {
        title: "Consistent Character Storyboard & Multi-Angle Action Prompt",
        description: "Generate consistent character narrative scenes across diverse environments, camera angles, and dynamic wardrobe changes.",
        variables: [
          {
            name: "Character Scene Action",
            label: "Action & Environment",
            options: ["Operating a high-tech flight simulator in a darkened aeronautics cockpit", "Delivering a keynote presentation on an illuminated conference stage", "Reviewing architectural blueprints on a wind-swept skyscraper construction deck", "Sitting in a minimalist coffee shop working on a laptop with morning sunlight"],
            default: "Operating a high-tech flight simulator in a darkened aeronautics cockpit"
          },
          {
            name: "Camera Shot Angle",
            label: "Cinematography Angle",
            options: ["Dramatic low-angle medium close-up, 50mm lens, shallow depth of field", "Wide cinematic establishing shot, 35mm lens, atmospheric depth", "Over-the-shoulder candid perspective with focus on character profile"],
            default: "Dramatic low-angle medium close-up, 50mm lens, shallow depth of field"
          },
          {
            name: "Wardrobe Setting",
            label: "Wardrobe Mode (--cw)",
            options: ["--cw 0 (New outfit specified in prompt: pilot flight suit)", "--cw 100 (Keep identical outfit from reference portrait)", "--cw 0 (New outfit: sharp navy business blazer)"],
            default: "--cw 0 (New outfit specified in prompt: pilot flight suit)"
          }
        ],
        template: `Consistent Character Narrative Generation:

Prompt:
cinematic still of a woman [Character Scene Action], wearing pilot flight suit, [Camera Shot Angle], volumetric dashboard lighting, sharp facial focus, 35mm film still --ar 16:9 --cref [PASTE_CHARACTER_PORTRAIT_URL] [Wardrobe Setting] --v 6.1

Rule:
Maintains exact facial structure, cheekbones, and eye shape from reference portrait while placing character into a dynamic new action scene.`,
        expectedOutput: `/imagine prompt: cinematic still of a woman Operating a high-tech flight simulator in a darkened aeronautics cockpit, wearing pilot flight suit, Dramatic low-angle medium close-up, 50mm lens, shallow depth of field, volumetric dashboard lighting, sharp facial focus, 35mm film still --ar 16:9 --cref https://images.useai.sh/characters/dr-elena-voss.png --cw 0 --ar 16:9 --v 6.1`
      },
      conceptGuide: {
        title: "Understanding Facial Landmark Alignments & Feature Invariance",
        overview: "Human perception is extraordinarily sensitive to subtle shifts in facial proportions: a 2mm change in eye distance or jawline angle registers immediately as a completely different person. In Midjourney v6.1, `--cref` acts as a facial landmark conditioning adapter. It maps critical keypoints—interpupillary distance, nasal bridge slope, philtrum ratio, and zygomatic arch curvature—from the reference image and injects these geometric invariants into the diffusion denoising steps. Setting `--cw 0` detaches the clothing and body silhouette tokens from the conditioning vector, preserving facial identity while granting full creative freedom over outfits.",
        keyPoints: [
          "**Facial Landmark Invariance:** `--cref` preserves the underlying skeletal facial ratios that human brains use to recognize identity.",
          "**Wardrobe Decoupling:** Setting `--cw 0` restricts identity transfer to the neck and face, enabling dynamic wardrobe changes.",
          "**Multi-Vector Coexistence:** You can pair `--cref` (character identity) and `--sref` (style identity) concurrently in a single generation."
        ]
      },
      learning: {
        resources: [
          {
            title: "Midjourney Character Reference (--cref) Official Documentation",
            url: "https://docs.midjourney.com/docs/character-reference",
            type: "Official Docs"
          },
          {
            title: "Midjourney Character Weight (--cw) Reference Guide",
            url: "https://docs.midjourney.com/docs/character-weight",
            type: "Official Docs"
          },
          {
            title: "InsightFace Deep Facial Recognition & Representation Analysis",
            url: "https://insightface.ai",
            type: "Architecture"
          },
          {
            title: "Facial Landmark Detection & Alignment in Computer Vision",
            url: "https://learnopencv.com/facial-landmark-detection/",
            type: "Guide"
          }
        ]
      }
    },

    // Node 6
    {
      id: "step-6",
      stepNumber: 6,
      phaseId: "phase-2",
      title: "Custom Model Personalization (--p) & Moodboard Tuning",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Calibrate custom model personalization profiles (--p) on Midjourney.com to eliminate generic AI aesthetic biases and embed your team's visual taste directly into model weights.",
      description: "Foundation visual models inevitably suffer from average aesthetic biases: left unconstrained, prompts default to oversaturated teal-and-orange color grading, smooth plastic skin, and dramatic fantasy lighting. Midjourney's Model Personalization (`--p`) allows creators to train an individualized taste profile by ranking hundreds of image pair comparisons on midjourney.com. When you append `--p` (or shareable alphanumeric codes like `--p abc1234`), Midjourney modifies its latent aesthetic sampling, steering generations toward your curated preferences (e.g. muted Scandinavian daylight, analog film grain, or minimalist editorial framing) without requiring verbose prompt instructions.",
      playbook: {
        setup: "Visit `midjourney.com/rank` or rate pair comparisons on the web dashboard. Rank at least 200 image pairs to unlock your personal profile code. Find your active code in your account settings.",
        execute: "Generate visual concepts appending `--p` to your prompts. Test sharing team personalization codes: `--p [code1]` or combine multiple aesthetic profiles with relative blending: `--p [codeA] [codeB]`. Adjust the personalization strength using the `--s` parameter (e.g. `--s 250 --p`).",
        verify: "Compare a prompt generated with `--p` against the same prompt without `--p`. Confirm that the personalized output exhibits your curated artistic taste (natural grain, authentic lighting) rather than generic Midjourney default house style."
      },
      tools: [
        {
          name: "Midjourney Personalization",
          type: "Paid",
          url: "https://docs.midjourney.com/docs/model-personalization",
          description: "Midjourney's user preference fine-tuning system that calibrates generation sampling based on human pairwise image rankings.",
          bestFor: "Taste calibration, eliminating generic AI cliches & brand aesthetic alignment"
        },
        {
          name: "Midjourney Ranking",
          type: "Paid",
          url: "https://www.midjourney.com/rank",
          description: "Pairwise human preference feedback interface used to train and update your personal visual preference vectors.",
          bestFor: "RLHF pairwise training, taste curation & personalization vector updates"
        },
        {
          name: "Pinterest",
          type: "Free",
          url: "https://pinterest.com",
          description: "Visual moodboarding and curation platform for establishing initial aesthetic reference benchmarks before ranking.",
          bestFor: "Visual moodboard assembly, aesthetic reference discovery & team taste alignment"
        }
      ],
      callouts: {
        mistake: "Ranking fewer than 100 image pairs, which creates an undertrained, noisy personalization profile that causes erratic visual distortions.",
        proTip: "Personalization codes are shareable: creative directors can curate a master profile code and distribute it to all team members to enforce synchronized taste.",
        mistakes: [
          "Ranking contradictory aesthetic extremes (e.g. liking hyper-saturated 3D renders and muted black-and-white documentary photography), causing aesthetic confusion.",
          "Forgetting that `--p` can be combined with `--style raw` to create clean photographic realism free from fantasy biases.",
          "Assuming `--p` replaces subject prompting: personalization affects style and lighting, not subject matter."
        ],
        proTips: [
          "You can blend multiple personalization codes: `--p code1 code2` blends both aesthetic profiles 50/50.",
          "Continue ranking images weekly on midjourney.com/rank to continuously sharpen your profile's aesthetic nuance.",
          "Use the command `/settings` to enable Personalization permanently on all generations if you prefer it as your global baseline."
        ]
      },
      promptLab: {
        title: "Model Personalization & Brand Taste Calibration Prompt",
        description: "Deploy personalized latent profiles across marketing scenes to bypass generic AI defaults and achieve signature brand aesthetics.",
        variables: [
          {
            name: "Production Scene",
            label: "Scene to Generate",
            options: ["Modern sustainable office with engineers working near floor-to-ceiling windows", "Minimalist ceramic dinnerware on rustic wooden dining table with morning light", "High-end electric SUV charging at night in a sleek architectural pavilion", "Portrait of a female biotechnology researcher in a cleanroom laboratory"],
            default: "Modern sustainable office with engineers working near floor-to-ceiling windows"
          },
          {
            name: "Aesthetic Direction",
            label: "Curated Taste Profile",
            options: ["Muted Editorial Documentary (Natural soft daylight, honest textures, film grain)", "High-End Commercial Architectural (Geometric lines, subtle shadows, crisp materials)", "Warm Cinematic Nostalgia (Subtle halation, warm highlights, organic imperfections)"],
            default: "Muted Editorial Documentary (Natural soft daylight, honest textures, film grain)"
          },
          {
            name: "Personalization Code",
            label: "Active Personalization Flag",
            options: ["--p (Use active personal profile)", "--p 7wz9x2a (Curated Team Brand Profile)", "--p raw (Combine with raw style)"],
            default: "--p (Use active personal profile)"
          }
        ],
        template: `Personalized Scene Generation:

Prompt:
candid architectural photograph of [Production Scene], authentic spatial textures, natural daylight, 35mm lens --ar 16:9 [Personalization Code] --v 6.1

Purpose:
Bypasses default Midjourney fantasy bias and renders [Aesthetic Direction] using calibrated latent preference weights.`,
        expectedOutput: `/imagine prompt: candid architectural photograph of Modern sustainable office with engineers working near floor-to-ceiling windows, authentic spatial textures, natural daylight, 35mm lens --ar 16:9 --p 7wz9x2a --style raw --v 6.1`
      },
      conceptGuide: {
        title: "Understanding RLHF Preference Vectors & Personalization",
        overview: "Foundation visual models are aligned via Reinforcement Learning from Human Feedback (RLHF), which aggregates preferences across millions of global users. Consequently, the default model reflects an average aesthetic consensus—often leading to overly dramatic lighting and hyper-polished surfaces. Model Personalization decomposes pairwise image selections into an individualized preference vector. When `--p` is enabled, this vector is added as an offset to the latent diffusion sampling steps, shifting outputs away from the global mean and toward your idiosyncratic artistic standards.",
        keyPoints: [
          "**Pairwise Preference Learning:** Binary choices on image pairs train a personalized reward vector that guides generation sampling.",
          "**Eliminating the 'Midjourney Look':** Personalization strips away the recognizable default teal-orange lighting and plastic skin sheen.",
          "**Team-Wide Taste Distribution:** Shareable alphanumeric `--p` codes allow distributed design teams to enforce a unified artistic standard."
        ]
      },
      learning: {
        resources: [
          {
            title: "Midjourney Model Personalization Official Documentation",
            url: "https://docs.midjourney.com/docs/model-personalization",
            type: "Official Docs"
          },
          {
            title: "Midjourney Human Pairwise Ranking Interface",
            url: "https://www.midjourney.com/rank",
            type: "Official Docs"
          },
          {
            title: "Direct Preference Optimization (DPO) for Visual Diffusion Models",
            url: "https://arxiv.org/abs/2311.12908",
            type: "Architecture"
          },
          {
            title: "Pinterest Visual Aesthetic & Moodboard Curation Best Practices",
            url: "https://pinterest.com",
            type: "Guide"
          }
        ]
      }
    },

    // Node 7
    {
      id: "step-7",
      stepNumber: 7,
      phaseId: "phase-3",
      title: "Exact Typography Rendering & Graphic Poster Synthesis",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Generate crisp, correctly spelled headlines, product packaging typography, and graphic posters directly inside generated visuals using Ideogram 2.0 and Flux.1.",
      description: "Generating coherent, correctly spelled typography was the long-standing Achilles heel of diffusion models. Early models treated text as decorative noise, generating garbled gibberish characters. Next-generation transformer diffusion models—specifically Ideogram 2.0, Flux.1 Pro, and Recraft V3—have solved typography by pairing large language model text encoders (like T5-XXL) with spatial cross-attention layers. Creators can now design marketing posters, consumer packaging, apparel graphics, and editorial covers with exact, spelled-correctly typography embedded directly into the 3D scene geometry, rendered with correct kerning, perspective warping, and authentic material textures (embossed foil, neon glow, screen-printed ink).",
      playbook: {
        setup: "Access Ideogram 2.0 (via ideogram.ai) or Flux.1 Pro (via Fal.ai or Replicate). Choose your aspect ratio (`--ar 3:4` for posters or `--ar 1:1` for album art/packaging).",
        execute: "Structure your prompt wrapping required typography in double quotation marks: `a retro-futuristic travel poster featuring a sleek monorail crossing a canyon, bold vintage serif headline reading \"PACIFIC SKYLINE\", badge reading \"EST. 2084\", screen-printed texture, 4-color risograph aesthetic`. Use Ideogram's 'Typography' style preset.",
        verify: "Inspect rendered letterforms at 100% zoom. Confirm zero misspelled words, verified kerning between character pairs, and authentic perspective warping matching the underlying surface plane."
      },
      tools: [
        {
          name: "Ideogram 2.0",
          type: "Freemium",
          url: "https://about.ideogram.ai",
          description: "Leading visual generation platform renowned for state-of-the-art typography rendering, graphic design composition, and realistic text integration.",
          bestFor: "Graphic posters, packaging typography, logo integration & risograph prints"
        },
        {
          name: "Flux.1 Pro",
          type: "Paid",
          url: "https://blackforestlabs.ai",
          description: "Black Forest Labs' flagship diffusion transformer with superior prompt adherence and multi-word text rendering capabilities.",
          bestFor: "Photorealistic scenes with embedded signs, labels, and environmental text"
        },
        {
          name: "Recraft V3",
          type: "Freemium",
          url: "https://www.recraft.ai",
          description: "AI graphic design tool specialized in generating clean vector SVGs, 3D icons, and brand graphics with precise typography.",
          bestFor: "Vector graphic synthesis, SVG typography & brand asset creation"
        }
      ],
      callouts: {
        mistake: "Failing to enclose target text in double quotation marks, causing the diffusion model to interpret words as scene descriptors rather than literal text.",
        proTip: "Keep text to 1–4 prominent words per graphic element for near-100% spelling accuracy; long paragraphs still challenge diffusion text encoders.",
        mistakes: [
          "Requesting 5 different long sentences on a single visual, which exceeds the character-level attention capacity of the text encoder.",
          "Using ambiguous fonts without specifying typeface style (e.g. failing to specify 'bold geometric sans-serif' vs. 'script calligraphy').",
          "Ignoring surface curvature when prompting packaging text: specify 'embossed metallic text wrapped around a cylindrical aluminum can'."
        ],
        proTips: [
          "Specify the typographic hierarchy explicitly: 'headline reading \"X\" in bold uppercase sans-serif, and subtitle reading \"Y\" in delicate italic serif'.",
          "In Ideogram 2.0, toggle the 'Design' or 'Typography' style tag for guaranteed letterform crispness.",
          "For commercial packaging, specify the physical medium: 'screen-printed matte ink with subtle distressed texture'."
        ]
      },
      promptLab: {
        title: "Typographic Poster & Product Packaging Synthesis Prompt",
        description: "Generate commercial posters and product packaging featuring crisp, correctly spelled typography embedded into 3D materials.",
        variables: [
          {
            name: "Graphic Medium",
            label: "Product / Poster Medium",
            options: ["Craft Coffee Bean Packaging Bag with Foil Accents", "Retro-Futuristic Architectural Exhibition Poster", "Cold-Brew Glass Bottle Label with Gold Leaf Details", "Urban Streetwear Apparel Back-Print Graphic"],
            default: "Craft Coffee Bean Packaging Bag with Foil Accents"
          },
          {
            name: "Headline Text",
            label: "Primary Headline (in Quotes)",
            options: ["\"SOLARIS ROASTERS\"", "\"METROPOLIS 2084\"", "\"AURORA COLD BREW\"", "\"VELOCITY COLLECTIVE\""],
            default: "\"SOLARIS ROASTERS\""
          },
          {
            name: "Typography Style",
            label: "Typeface Specification",
            options: ["Bold modern grotesque sans-serif with tight kerning and embossed texture", "Vintage high-contrast editorial serif with delicate ligatures", "Chunky geometric brutalist lettering with distressed screen-print ink"],
            default: "Bold modern grotesque sans-serif with tight kerning and embossed texture"
          }
        ],
        template: `Typography Generation Master Prompt:

Subject: [Graphic Medium].
Typography Specification:
- Prominent central headline reading: [Headline Text]
- Font Style: [Typography Style]
- Secondary supporting badge reading: "LIMITED EDITION • 100% ARABICA" in clean micro sans-serif
Aesthetic: Studio product photography, soft diffused key lighting, neutral warm background, ultra-sharp letterform edges, zero spelling errors --ar 3:4`,
        expectedOutput: `commercial studio photograph of Craft Coffee Bean Packaging Bag with Foil Accents, prominent central headline reading "SOLARIS ROASTERS", font style: Bold modern grotesque sans-serif with tight kerning and embossed texture, secondary supporting badge reading "LIMITED EDITION • 100% ARABICA", matte black craft paper pouch, copper foil accents, softbox studio lighting, 85mm macro lens, ultra-sharp typography focus --ar 3:4`
      },
      conceptGuide: {
        title: "Understanding T5 Text Encoders & Character-Level Tokenization",
        overview: "Early diffusion models relied exclusively on CLIP text encoders, which compress entire words into single semantic vectors. CLIP struggles with spelling because it lacks character-level awareness. Newer architectures (Flux.1 and Ideogram) incorporate T5-XXL language model encoders alongside CLIP. T5 processes sub-word and character-level tokens, allowing the model to attend to individual letter sequences ('S-O-L-A-R-I-S'). When combined with flow-matching diffusion layers, the model learns the spatial representation of letterforms and renders text with authentic lighting, shadows, and perspective warping.",
        keyPoints: [
          "**T5 Language Model Encoders:** Character-aware text encoders allow diffusion models to spell words accurately without hallucinations.",
          "**Physical Material Grounding:** Modern models wrap typography around 3D surfaces with correct environmental lighting and perspective.",
          "**Semantic Hierarchy Separation:** Specifying primary headlines and secondary badges explicitly helps the model allocate spatial attention."
        ]
      },
      learning: {
        resources: [
          {
            title: "Ideogram 2.0 Typography & Graphic Design Documentation",
            url: "https://about.ideogram.ai",
            type: "Official Docs"
          },
          {
            title: "Black Forest Labs Flux.1 Text Synthesis & Benchmarks",
            url: "https://blackforestlabs.ai",
            type: "Official Docs"
          },
          {
            title: "Recraft V3 AI Graphic Design & Typography Documentation",
            url: "https://www.recraft.ai",
            type: "Official Docs"
          },
          {
            title: "Scaling T5 Text Encoders in Generative Image Diffusion Models",
            url: "https://arxiv.org/abs/2205.11487",
            type: "Architecture"
          }
        ]
      }
    },

    // Node 8
    {
      id: "step-8",
      stepNumber: 8,
      phaseId: "phase-3",
      title: "Surgical Inpainting (Vary Region), Outpainting & Canvas Pan",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Repair anatomical flaws, swap props, and expand 1:1 square generations into panoramic 16:9 hero banners using Midjourney Vary Region, Custom Zoom, and Photoshop Generative Fill.",
      description: "Generative AI rarely gets every detail right on the first attempt: an otherwise magnificent commercial portrait may have an extra finger, an unwanted reflection in sunglasses, or an empty background that needs visual interest. Discarding an entire generation for a localized flaw is inefficient. Inpainting (Midjourney's Vary Region / Inpaint brush) allows creators to mask exact pixel areas and re-generate only the masked zone with targeted prompt edits. Outpainting (Zoom Out 1.5x/2x) and Directional Pan allow designers to expand narrow square crops into expansive panoramic 16:9 or 21:9 hero banners with zero visible seams.",
      playbook: {
        setup: "Open your target image in the Midjourney Web Editor (or click 'Vary (Region)' in Discord). In Photoshop, open the image and select the Generative Fill tool.",
        execute: "Inpaint a flaw: mask an unnatural hand or distracting prop using the brush tool. In the prompt modification bar, enter only the replacement element: `a relaxed natural hand with 5 fingers holding a coffee mug`. For panoramic expansion: click 'Custom Zoom' and enter `--ar 16:9` with prompt instructions describing the expanded environment.",
        verify: "Zoom into the boundary of the masked region at 200%. Verify that lighting angle, film grain, color temperature, and edge shadows blend seamlessly with the untouched surrounding pixels."
      },
      tools: [
        {
          name: "Midjourney Web Editor",
          type: "Paid",
          url: "https://www.midjourney.com",
          description: "Full-featured web canvas in Midjourney featuring interactive inpainting brushes, pan arrows, and custom aspect ratio zooming.",
          bestFor: "Inpainting, outpainting, canvas panning & aspect ratio conversion"
        },
        {
          name: "Photoshop Generative Fill",
          type: "Paid",
          url: "https://www.adobe.com/products/photoshop/generative-fill.html",
          description: "Adobe's enterprise inpainting engine built directly into Photoshop for sub-pixel edge blending and multi-layer asset cleanup.",
          bestFor: "Pixel-perfect commercial retouches, precision compositing & layer management"
        },
        {
          name: "Krea Canvas",
          type: "Freemium",
          url: "https://www.krea.ai",
          description: "Real-time infinite canvas for panning, outpainting, object insertion, and live interactive spatial compositing.",
          bestFor: "Real-time canvas expansion, multi-image blending & rapid layout drafting"
        }
      ],
      callouts: {
        mistake: "Masking too small or tight of a boundary around a flawed element, preventing the diffusion model from understanding the surrounding anatomy or spatial context.",
        proTip: "When inpainting hands or arms, mask slightly past the wrist or elbow; the model requires forearm bone angles to reconstruct natural hand anatomy.",
        mistakes: [
          "Rewriting the entire prompt during inpainting instead of focusing strictly on the masked replacement item.",
          "Using outpainting without preserving original lighting keywords, causing a visible shift in color temperature in the expanded border.",
          "Accepting inpainting diffs without checking the transition seam at 200% magnification."
        ],
        proTips: [
          "Leave the prompt empty when inpainting to instruct the model to seamlessly infill the masked area with the surrounding background texture.",
          "Use 'Custom Zoom' with `--ar 16:9` to convert 1:1 Instagram squares into cinematic website hero headers.",
          "Use Photoshop Generative Fill for subtle skin blemish removal and Midjourney Vary Region for major object replacements."
        ]
      },
      promptLab: {
        title: "Surgical Inpainting & Panoramic Canvas Outpainting Prompt",
        description: "Execute targeted localized repairs and expand narrow aspect ratios into full panoramic website hero headers.",
        variables: [
          {
            name: "Repair Operation",
            label: "Editing Goal",
            options: ["Inpaint anatomical hand flaw with natural pose and coffee cup", "Replace generic smartphone with high-end titanium prototype device", "Inpaint empty desk to add modern laptop and notebook accessories", "Custom Zoom 2.0x to reveal expansive modern architectural office"],
            default: "Inpaint anatomical hand flaw with natural pose and coffee cup"
          },
          {
            name: "Masking Strategy",
            label: "Brush Coverage",
            options: ["Generous Mask (Includes wrist and forearm for natural bone alignment)", "Tight Object Mask (Surrounds only the target prop)", "Edge Expansion Outpainting (Perimeter border band)"],
            default: "Generous Mask (Includes wrist and forearm for natural bone alignment)"
          },
          {
            name: "Seamless Blending Rule",
            label: "Lighting & Texture Match",
            options: ["Preserve natural warm rim light and Kodak Portra film grain", "Match cool corporate studio softbox lighting and sharp focus", "Seamlessly blend dark moody chiaroscuro shadows"],
            default: "Preserve natural warm rim light and Kodak Portra film grain"
          }
        ],
        template: `Inpainting & Outpainting Protocol:

Operation: [Repair Operation].
Brush Technique: [Masking Strategy].
Context Blending: [Seamless Blending Rule].

Vary Region Prompt:
"a natural, relaxed human hand with five fingers holding an artisan ceramic coffee mug, soft morning rim lighting, authentic skin texture matching surrounding arm, sharp focus"

Outpainting Custom Zoom Prompt:
"--zoom 2 --ar 16:9 [Original Prompt] revealing expansive minimalist interior architecture and floor-to-ceiling windows"`,
        expectedOutput: `Inpaint Modification Applied:
- Masked region: Hand and lower forearm (coordinates x: 420-580, y: 640-880).
- Replacement: Generated natural 5-finger grip on ceramic mug.
- Seam verification: Zero boundary artifacts, lighting direction 45-degree key light preserved.`
      },
      conceptGuide: {
        title: "Understanding Latent Masked Inpainting & Outpainting Seams",
        overview: "Masked inpainting operates by taking the unmasked pixels, encoding them into latent space, and adding noise only to the masked coordinates. During reverse diffusion sampling, the unmasked latents act as boundary conditions, forcing the denoising process to match the surrounding pixel values at the mask perimeter. Outpainting expands the latent tensor dimensions, initializing the new exterior border with Gaussian noise while holding the central core constant. Maintaining identical lighting, camera, and film keywords in the prompt ensures that the newly generated perimeter matches the optical depth of the original image.",
        keyPoints: [
          "**Latent Noise Masking:** Noise is applied exclusively to masked coordinates while original pixels remain frozen.",
          "**Anatomical Boundary Margin:** Generous masking allows the model to calculate bone angles from upstream joints.",
          "**Dimensional Tensor Expansion:** Outpainting increases the latent grid size, allowing seamless directional panoramic growth."
        ]
      },
      learning: {
        resources: [
          {
            title: "Midjourney Vary Region (Inpainting) Official Documentation",
            url: "https://docs.midjourney.com/docs/vary-region",
            type: "Official Docs"
          },
          {
            title: "Midjourney Pan & Directional Canvas Expansion Guide",
            url: "https://docs.midjourney.com/docs/pan",
            type: "Official Docs"
          },
          {
            title: "Adobe Photoshop Generative Fill Architecture & Tool Reference",
            url: "https://helpx.adobe.com/photoshop/using/generative-fill.html",
            type: "Guide"
          },
          {
            title: "High-Resolution Image Synthesis with Latent Diffusion Models (Rombach et al.)",
            url: "https://arxiv.org/abs/2112.10752",
            type: "Architecture"
          }
        ]
      }
    },

    // Node 9
    {
      id: "step-9",
      stepNumber: 9,
      phaseId: "phase-3",
      title: "Structural Composition with ControlNet, Depth Maps & Pose Reference",
      timeEstimate: "2 hrs",
      difficulty: "Advanced",
      summary: "Lock architectural geometry, human poses (OpenPose), and 3D depth maps using ControlNet nodes in ComfyUI and Fal.ai to reskin scenes with complete spatial precision.",
      description: "Text prompts are spatially agnostic: you can ask for a 'couch on the left and a lamp on the right', but diffusion models frequently swap or misalign elements. In professional architectural visualization, commercial advertising, and industrial design, composition must adhere to strict wireframe specifications. ControlNet introduces spatial neural conditioning into diffusion models. By passing edge maps (Canny), depth maps (MiDaS/ZoeDepth), or skeletal poses (OpenPose), designers can lock the exact geometric structure and perspective vanishing points of a 3D CAD model or real photo, while freely re-skinning materials, textures, and lighting via text prompts.",
      playbook: {
        setup: "Set up ComfyUI with ControlNet nodes, or configure an API endpoint on Fal.ai using Flux ControlNet / SDXL ControlNet.",
        execute: "Extract a spatial conditioning map: extract a Canny edge wireframe from an architectural sketch, or an OpenPose skeleton from a model photo. Connect the ControlNet preprocessor to your diffusion sampler. Set ControlNet conditioning strength to 0.75 and ending step to 0.85 (allowing the model creative freedom on micro-textures).",
        verify: "Overlay the generated render onto your original wireframe or pose reference in Photoshop or Figma. Verify 1:1 geometric alignment of walls, windows, and human limb angles."
      },
      tools: [
        {
          name: "ComfyUI",
          type: "Free",
          url: "https://github.com/comfyanonymous/ComfyUI",
          description: "Modular node-based graphical user interface for Stable Diffusion and Flux, providing granular control over ControlNet pipelines.",
          bestFor: "Node-based workflow automation, multi-ControlNet chaining & local production"
        },
        {
          name: "Fal.ai",
          type: "Paid",
          url: "https://fal.ai",
          description: "Serverless cloud inference platform providing sub-second ControlNet APIs, Depth models, and fast Flux inference.",
          bestFor: "Cloud ControlNet APIs, production app integration & high-speed generation"
        },
        {
          name: "Magnific Relight",
          type: "Paid",
          url: "https://magnific.ai",
          description: "AI relighting tool that dynamically moves 3D lighting sources and shadows around existing compositions using depth maps.",
          bestFor: "Dynamic relighting, shadow repositioning & commercial product polish"
        }
      ],
      callouts: {
        mistake: "Setting ControlNet conditioning weight to 1.5+, which forces harsh wireframe line artifacts into the final photographic render.",
        proTip: "Stop ControlNet conditioning at step 80% (`ending_step: 0.8`); this locks the macro spatial layout while allowing the final 20% of sampling steps to generate natural photographic micro-textures.",
        mistakes: [
          "Using low-contrast reference images for Canny edge detection, resulting in broken or disconnected guide lines.",
          "Stacking 4 different ControlNet models simultaneously, causing massive VRAM exhaustion and conflicting conditioning vectors.",
          "Using OpenPose on multi-person crowds where skeletal lines cross and cause limb duplication."
        ],
        proTips: [
          "Chain Depth and Canny together: Depth (weight 0.6) establishes 3D spatial volume, while Canny (weight 0.4) locks crisp architectural edges.",
          "Use ZoeDepth instead of standard MiDaS for metric-accurate indoor architectural depth extraction.",
          "Export 3D viewport screenshots directly from Blender or Figma to serve as instant ControlNet wireframe guides."
        ]
      },
      promptLab: {
        title: "Spatial ControlNet & Depth-Conditioned Architecture Prompt",
        description: "Condition diffusion generation on 3D depth maps and Canny wireframes to produce photorealistic renders matching exact CAD plans.",
        variables: [
          {
            name: "ControlNet Model",
            label: "Conditioning Type",
            options: ["Depth (ZoeDepth 3D spatial map)", "Canny (Edge wireframe line extraction)", "OpenPose (Human skeletal posture tracking)"],
            default: "Depth (ZoeDepth 3D spatial map)"
          },
          {
            name: "Architectural Style",
            label: "Material & Interior Theme",
            options: ["Warm Minimalist Japanese Wabi-Sabi (Cedar wood, shoji paper, raw concrete)", "Industrial Scandinavian Loft (Exposed red brick, blackened steel, polished concrete)", "High-End Mid-Century Modern (Walnut paneling, brass accents, terrazzo flooring)"],
            default: "Warm Minimalist Japanese Wabi-Sabi (Cedar wood, shoji paper, raw concrete)"
          },
          {
            name: "Conditioning Strength",
            label: "ControlNet Weight & Bounds",
            options: ["Weight 0.75, Guidance Range 0.0–0.8 (Optimal photographic realism)", "Weight 1.0, Guidance Range 0.0–1.0 (Strict geometric enforcement)", "Weight 0.5, Guidance Range 0.0–0.6 (Creative interpretation)"],
            default: "Weight 0.75, Guidance Range 0.0–0.8 (Optimal photographic realism)"
          }
        ],
        template: `ComfyUI / Fal.ai ControlNet Execution:

Conditioning Input: [ControlNet Model] extracted from reference CAD floorplan.
Settings: [Conditioning Strength].
Prompt:
"interior architectural photography of a luxury living room, [Architectural Style], soft diffused natural morning daylight streaming through windows, 35mm lens, architectural digest feature, ultra-detailed textures, zero warping"

Negative Prompt:
"blurry, distorted geometry, warped walls, low quality, cartoon, extra furniture"`,
        expectedOutput: `ControlNet Execution Graph:
1. Input: Depth map (1920x1080) loaded via LoadImage node.
2. ControlNet Apply: ZoeDepth Model, strength: 0.75, start_percent: 0.0, end_percent: 0.8.
3. KSampler: Steps 30, CFG 6.5, Sampler: dpmpp_2m_sde, Scheduler: karras.
4. Output: Photorealistic interior matching 1:1 CAD spatial layout.`
      },
      conceptGuide: {
        title: "Understanding Spatial Conditioning Vectors & Zero-Convolution Layers",
        overview: "ControlNet operates by locking the production weights of a foundation diffusion model (like SDXL or Flux) and creating a trainable clone of the encoding layers connected via 'zero convolutions'. A zero convolution is a 1x1 convolution layer whose weights and biases are initialized to zero. During training and inference, the zero convolutions progressively inject spatial feature maps (edge lines, depth gradients, or skeleton landmarks) into the diffusion model's U-Net or transformer blocks. Because the base model weights remain intact, the generator retains its full photographic fidelity while obeying the spatial coordinates of the conditioning input.",
        keyPoints: [
          "**Zero-Convolution Architecture:** Preserves foundation model photorealism while injecting rigid spatial structural guides.",
          "**Step-Scheduled Guidance:** Ending ControlNet influence before final sampling steps allows natural fine textures to develop.",
          "**Multi-Modal Conditioning:** Combining Depth (volume) and OpenPose (body) achieves complete geometric control over complex scenes."
        ]
      },
      learning: {
        resources: [
          {
            title: "Adding Conditional Control to Text-to-Image Diffusion Models (Zhang & Agrawala)",
            url: "https://arxiv.org/abs/2302.05543",
            type: "Architecture"
          },
          {
            title: "ComfyUI Official Manual & ControlNet Workflows",
            url: "https://github.com/comfyanonymous/ComfyUI",
            type: "Official Docs"
          },
          {
            title: "Fal.ai Fast Cloud ControlNet APIs Documentation",
            url: "https://fal.ai/models",
            type: "Reference"
          },
          {
            title: "Magnific Relight & Spatial Illumination Guide",
            url: "https://magnific.ai",
            type: "Guide"
          }
        ]
      }
    },

    // Node 10
    {
      id: "step-10",
      stepNumber: 10,
      phaseId: "phase-4",
      title: "Training Custom Product & Brand LoRAs in the Cloud",
      timeEstimate: "2 hrs",
      difficulty: "Advanced",
      summary: "Train proprietary product and mascot LoRA adapters on Flux.1 in the cloud using Fal.ai or Replicate, and deploy high-fidelity brand assets on demand.",
      description: "While foundation models know millions of public concepts, they know nothing about your company's proprietary physical product, mascot, or brand style. Low-Rank Adaptation (LoRA) is the enterprise gold standard for fine-tuning diffusion models without modifying the base billions of weights. By training a lightweight adapter matrix (typically 50MB–200MB) on 15–25 high-resolution photographs with a unique trigger word (`PRISM_BOTTLE`), brands can place their real physical merchandise into infinite commercial lifestyle environments with 100% label and form-factor fidelity.",
      playbook: {
        setup: "Curate 15–25 clean photos of your physical product: include diverse angles (front, 45-degree, top-down), macro label crops, and multiple lighting setups against clean backgrounds. Assign a unique trigger word (e.g. `PRISM_DRINK`).",
        execute: "Launch a Flux.1 Dev LoRA training job on Fal.ai Fast Trainer or Replicate. Configure training: 1,500 steps, learning rate 1e-4, rank 16. Write precise captions: 'a studio product photo of PRISM_DRINK aluminum can on a reflective surface'.",
        verify: "Run inference testing with the trained LoRA adapter: `PRISM_DRINK can on a wet mossy boulder in a misty forest, golden hour lighting, 85mm macro lens --ar 4:5`. Verify that the can dimensions, logo typography, and color palette match the physical product."
      },
      tools: [
        {
          name: "Fal.ai Flux LoRA Trainer",
          type: "Paid",
          url: "https://fal.ai/models/fal-ai/flux-lora-fast-training",
          description: "Serverless cloud training pipeline that fine-tunes custom Flux.1 LoRA adapters in under 10 minutes.",
          bestFor: "Rapid LoRA training, serverless fine-tuning & API-based adapter deployment"
        },
        {
          name: "Replicate",
          type: "Paid",
          url: "https://replicate.com",
          description: "Cloud AI deployment platform providing managed Flux and SDXL LoRA training and production API endpoints.",
          bestFor: "Production fine-tuning pipelines, webhooks & model hosting"
        },
        {
          name: "Civitai",
          type: "Freemium",
          url: "https://civitai.com",
          description: "Open community repository and training hub for sharing, testing, and downloading custom LoRA adapters across styles and characters.",
          bestFor: "Community LoRA discovery, style inspiration & model benchmarking"
        }
      ],
      callouts: {
        mistake: "Training on images that all feature the identical plain white background, which causes the LoRA to memorize the background and struggle to generate lifestyle scenes.",
        proTip: "Include 3–5 lifestyle background photos in your training dataset so the model learns that the product can exist in rain, snow, wood tables, and neon lighting.",
        mistakes: [
          "Overtraining past 2,500 steps, which 'burns' the LoRA weights, causing high contrast artifacts and loss of base model aesthetics.",
          "Using a common dictionary word (like 'Apple' or 'Bottle') as your trigger word instead of a unique alphanumeric token (like `AURA_CAN`).",
          "Training on low-resolution, blurry photos that bake compression noise directly into the model weights."
        ],
        proTips: [
          "Use a LoRA inference scale between 0.8 and 0.95: this provides full brand fidelity while maintaining the foundation model's lighting nuance.",
          "Tag macro label close-ups with 'close-up shot of PRISM_LOGO label on PRISM_BOTTLE' to ensure the model learns fine typography details.",
          "Store trained `.safetensors` files on Hugging Face or Fal.ai storage for instant programmatic access in production apps."
        ]
      },
      promptLab: {
        title: "Custom Brand LoRA Inference & Product Photography Prompt",
        description: "Deploy custom-trained Flux LoRA adapters to place proprietary brand merchandise into photorealistic commercial lifestyle campaigns.",
        variables: [
          {
            name: "Trigger Token",
            label: "Product Trigger Word",
            options: ["AURA_BOTTLE luxury glass serum dropper", "NEXUS_RUNNER futuristic athletic sneaker", "LUMEN_POD portable studio microphone", "KINETIC_CAN craft sparkling beverage"],
            default: "AURA_BOTTLE luxury glass serum dropper"
          },
          {
            name: "Lifestyle Environment",
            label: "Commercial Setting",
            options: ["placed on wet dark slate rock with gentle water ripples and morning mist", "resting on warm minimalist travertine bathroom counter with eucalyptus branches", "displayed on clean modern glass pedestal inside an illuminated art gallery", "held by a model with soft natural window daylight in a sunlit loft"],
            default: "placed on wet dark slate rock with gentle water ripples and morning mist"
          },
          {
            name: "Adapter Weight",
            label: "LoRA Inference Scale",
            options: ["0.85 (Optimal balance of brand fidelity & dynamic lighting)", "1.0 (Strict brand geometry lock)", "0.70 (Soft artistic integration)"],
            default: "0.85 (Optimal balance of brand fidelity & dynamic lighting)"
          }
        ],
        template: `Flux.1 LoRA Inference Request:

Prompt:
"commercial studio product photograph of [Trigger Token], [Lifestyle Environment], softbox key light, subtle specular reflections, 85mm f/1.8 macro lens, sharp product label focus, high-end commercial campaign --ar 4:5"

LoRA Configuration:
- Model Adapter: \`fal-ai/flux-lora\`
- LoRA Scale: [Adapter Weight]
- Base Model: Flux.1 Dev`,
        expectedOutput: `API Request Payload:
{
  "prompt": "commercial studio product photograph of AURA_BOTTLE luxury glass serum dropper, placed on wet dark slate rock with gentle water ripples and morning mist, softbox key light, subtle specular reflections, 85mm f/1.8 macro lens, sharp product label focus, high-end commercial campaign",
  "loras": [{ "path": "https://fal.media/files/aura_bottle_v1.safetensors", "scale": 0.85 }],
  "image_size": { "width": 1024, "height": 1280 },
  "num_inference_steps": 28
}`
      },
      conceptGuide: {
        title: "Understanding Low-Rank Adaptation (LoRA) & Weight Decomposition",
        overview: "Foundation diffusion models like Flux.1 contain 12 billion parameters. Fine-tuning all weights requires clusters of enterprise H100 GPUs and risks catastrophic forgetting of general world knowledge. Low-Rank Adaptation (LoRA) freezes the base model weights and decomposes the weight updates (ΔW) into two low-rank matrices: A and B, where ΔW = A × B. If a transformer layer has a dimension of 4096, full fine-tuning modifies 16 million parameters per layer; a rank-16 LoRA modifies only 131,000 parameters. This enables rapid 10-minute training on a single GPU while producing adapters that inject proprietary brand objects with surgical precision.",
        keyPoints: [
          "**Rank Decomposition:** Freezes base weights and trains lightweight low-rank matrices, saving 99% of training VRAM.",
          "**Zero Catastrophic Forgetting:** The base model preserves its native understanding of lighting, composition, and human anatomy.",
          "**Modular Swapability:** Teams can dynamically load different LoRAs (product A, product B, holiday style) on a single shared GPU worker."
        ]
      },
      learning: {
        resources: [
          {
            title: "LoRA: Low-Rank Adaptation of Large Language Models (Hu et al.)",
            url: "https://arxiv.org/abs/2106.09685",
            type: "Architecture"
          },
          {
            title: "Fal.ai Fast Flux LoRA Training Documentation",
            url: "https://fal.ai/models/fal-ai/flux-lora-fast-training",
            type: "Official Docs"
          },
          {
            title: "Replicate Guide to Fine-Tuning Flux with LoRA",
            url: "https://replicate.com/blog/fine-tune-flux-with-lora",
            type: "Guide"
          },
          {
            title: "Hugging Face Diffusers LoRA Training Guide",
            url: "https://huggingface.co/docs/diffusers/main/en/training/lora",
            type: "Reference"
          }
        ]
      }
    },

    // Node 11
    {
      id: "step-11",
      stepNumber: 11,
      phaseId: "phase-4",
      title: "Creative & Hallucinatory 4K/8K Upscaling & Skin Texture Recovery",
      timeEstimate: "1.5 hrs",
      difficulty: "Advanced",
      summary: "Remove waxy AI skin smoothing and upscale low-res generations into ultra-sharp 4K/8K commercial assets using Magnific AI, Krea Enhancer, and Topaz Photo AI.",
      description: "Foundation diffusion models generate native images at resolutions between 1024x1024 and 1920x1080. Upscaling these images for commercial print billboards, 4K video backdrops, or high-DPI retina web displays using traditional mathematical interpolation (bicubic or Lanczos) results in soft, blurry pixels. Creative AI Upscaling (pioneered by Magnific AI and Krea Enhancer) uses guided diffusion re-synthesis: the model analyzes low-resolution tiles and hallucinates microscopic real-world details—individual skin pores, fine peach fuzz, iris fiber depth, woven fabric threads, and architectural brick mortar—while preserving facial likeness and global color harmony.",
      playbook: {
        setup: "Export your winning generative asset in uncompressed PNG format. Open Magnific AI or Krea Enhancer. Select the specialized engine matching your subject ('Portraits & Skin' or 'Hard Surface / Architecture').",
        execute: "Configure upscaler parameters: set Scale to 2x or 4x (outputting 4096x4096+). Set 'Creativity' (Hallucination depth) between -1 and +1 for strict photographic likeness preservation. Add an enhancement prompt: `pores, skin micro-texture, fine wool fabric fibers, sharp focus, 8k resolution`.",
        verify: "Inspect the upscaled 4K file at 100% zoom. Confirm that waxy plastic AI skin is replaced with natural, authentic skin pores, eyelashes are cleanly separated, and fabric exhibits tactile weave patterns without surreal artifacts."
      },
      tools: [
        {
          name: "Magnific AI",
          type: "Paid",
          url: "https://magnific.ai",
          description: "Leading creative AI upscaler utilizing guided diffusion re-synthesis to hallucinate hyper-detailed micro-textures in images.",
          bestFor: "Creative 4K/8K upscaling, skin texture restoration & print asset preparation"
        },
        {
          name: "Krea Enhancer",
          type: "Freemium",
          url: "https://www.krea.ai",
          description: "Real-time AI detail enhancer and upscaler for refining textures, sharpness, and visual clarity with interactive sliders.",
          bestFor: "Real-time enhancement, web-resolution upscaling & rapid detail injection"
        },
        {
          name: "Topaz Photo AI",
          type: "Paid",
          url: "https://www.topazlabs.com/topaz-photo-ai",
          description: "Forensic deep learning upscaler providing non-hallucinatory super-resolution, noise removal, and optical deblurring.",
          bestFor: "Non-hallucinatory commercial upscaling, noise reduction & print prep"
        }
      ],
      callouts: {
        mistake: "Setting 'Creativity' or 'Hallucination' too high (+4 or +5) in Magnific, which causes the model to invent unwanted wrinkles, extra teeth, or bizarre miniature objects.",
        proTip: "Use Topaz Photo AI when 100% strict forensic fidelity (zero hallucination) is required for client brand logos, and Magnific AI when creative skin texture recovery is needed.",
        mistakes: [
          "Feeding a heavily compressed, low-quality JPEG into an upscaler, causing the model to hallucinate artifacts from compression blocks.",
          "Upscaling out-of-focus or motion-blurred images expecting the AI to guess the sharp original image.",
          "Leaving the enhancement prompt blank, which misses the opportunity to guide the upscaler's micro-texture synthesis."
        ],
        proTips: [
          "For human portraits, set Magnific Creativity to 0 or +1 and HDR to 0 to prevent harsh micro-contrast.",
          "When upscaling architectural scenes, prompt specifically for building materials: 'weathered concrete texture, brushed steel reflections, clean window glass'.",
          "Export master files in 16-bit TIFF or uncompressed PNG before applying web compression algorithms."
        ]
      },
      promptLab: {
        title: "High-Fidelity 4K Detail Upscaling & Texture Injection Prompt",
        description: "Configure guided diffusion upscalers to hallucinate authentic skin pores, fabric weaves, and architectural textures into native AI generations.",
        variables: [
          {
            name: "Upscale Subject",
            label: "Asset under Enhancement",
            options: ["Close-Up Editorial Fashion Beauty Portrait", "Architectural Exterior of Minimalist Concrete & Glass Villa", "Commercial Macro Watch & Leather Strap Product Shot", "Automotive Studio Hero Still of Carbon Fiber Supercar"],
            default: "Close-Up Editorial Fashion Beauty Portrait"
          },
          {
            name: "Hallucination Engine",
            label: "Upscaler Engine Preset",
            options: ["Magnific 'Portraits & Skin' (Creativity: 0, HDR: 0, Resemblance: +2)", "Krea Enhancer 'Photorealistic' (Factor: 4x, AI Strength: 0.6)", "Topaz Photo AI 'Standard Super-Resolution' (Zero Hallucination)"],
            default: "Magnific 'Portraits & Skin' (Creativity: 0, HDR: 0, Resemblance: +2)"
          },
          {
            name: "Micro-Texture Prompt",
            label: "Micro-Detail Guidance Tokens",
            options: ["pores, authentic skin micro-texture, fine peach fuzz, iris fiber depth, individual eyelashes", "concrete aggregate texture, subtle weather patina, reflections in clean glass", "fine hand-stitched leather grain, metallic brushed steel, sapphire crystal reflection"],
            default: "pores, authentic skin micro-texture, fine peach fuzz, iris fiber depth, individual eyelashes"
          }
        ],
        template: `4K AI Upscaling & Detail Injection Protocol:

Input Asset: [Upscale Subject] (Native 1024x1024 PNG).
Engine Configuration: [Hallucination Engine].
Scale Target: 4x (4096 x 4096 pixels, 300 DPI).

Enhancement Prompt:
"[Micro-Texture Prompt], professional commercial photography, natural subsurface scattering, ultra-sharp optical focus, eliminate plastic smoothing"

Quality Assurance Checklist:
1. Zoom to 100% and inspect eye cornea and eyelashes for crisp separation.
2. Verify facial likeness matches original reference with zero morphed features.
3. Confirm skin texture exhibits organic stochastic pores rather than grid artifacts.`,
        expectedOutput: `Upscaling Execution Summary:
- Input Resolution: 1024 x 1024 (1.0 MP)
- Output Resolution: 4096 x 4096 (16.7 MP)
- Processing Time: 34 seconds (Magnific AI Engine)
- Visual Audit: Skin pores generated with 100% natural variance; zero plastic sheen.`
      },
      conceptGuide: {
        title: "Understanding Super-Resolution Diffusion & Micro-Detail Synthesis",
        overview: "Traditional interpolation algorithms (like bicubic smoothing) treat image scaling as a continuous mathematical surface, blurring edges when creating new pixels. Modern creative upscalers (like Magnific and Stable Diffusion Super-Resolution) treat upscaling as a conditional generation problem. The low-resolution image is tiled into overlapping patches and encoded into latent space. A diffusion model conditioned on the low-res patch denoises new high-frequency details guided by an enhancement text prompt. By keeping 'Creativity' low, the model is constrained to add micro-texture strictly consistent with the low-res guide.",
        keyPoints: [
          "**Conditional Tile Diffusion:** The image is upscaled by generating new high-frequency latent details within overlapping tiles.",
          "**Eliminating the Waxy AI Look:** Injecting stochastic micro-details (pores, fibers, grain) removes the artificial smoothing typical of raw diffusion outputs.",
          "**Likeness Constraint Boundaries:** Tuning resemblance sliders keeps facial features anchored to the ground-truth reference."
        ]
      },
      learning: {
        resources: [
          {
            title: "Magnific AI Creative Upscaling & Hallucination Guide",
            url: "https://magnific.ai",
            type: "Official Docs"
          },
          {
            title: "Krea AI Real-Time Enhancer Documentation",
            url: "https://www.krea.ai",
            type: "Official Docs"
          },
          {
            title: "Topaz Photo AI Super-Resolution & Forensic Clarity Science",
            url: "https://www.topazlabs.com",
            type: "Reference"
          },
          {
            title: "Image Super-Resolution via Iterative Refinement (Saharia et al.)",
            url: "https://arxiv.org/abs/2104.07636",
            type: "Architecture"
          }
        ]
      }
    },

    // Node 12
    {
      id: "step-12",
      stepNumber: 12,
      phaseId: "phase-4",
      title: "Vectorization, Background Alpha Extraction & Production Asset Prep",
      timeEstimate: "1 hr",
      difficulty: "Beginner",
      summary: "Convert raster logos into clean SVGs with Recraft Vectorizer, extract transparent alpha cutouts with Photoroom, and optimize WebP/AVIF assets for production deployment.",
      description: "Generating a high-resolution image is only the midway point of visual production; commercial delivery requires converting raw raster pixels into production-ready web and print formats. Icons, badges, and flat logos must be vectorized into scalable SVG paths with editable anchor points that scale infinitely without pixelation. Product shots and portrait headshots require semantic alpha matting to cleanly remove backgrounds around fine hair and transparent glass. Finally, massive 15MB PNGs must be compressed into modern next-generation formats (WebP and AVIF) to maintain sub-second Core Web Vitals and PageSpeed scores.",
      playbook: {
        setup: "Open your upscaled asset in Recraft (for vectorization) or Photoroom (for transparent background extraction).",
        execute: "For logos and iconography: run Recraft's AI Vectorizer to generate clean, grouped SVG paths with minimal anchor points. For product cutouts: run Photoroom's semantic edge matting to strip backgrounds, preserving semi-transparent glass shadows and hair strands. Compress master raster files to WebP at 85% quality using `cwebp`.",
        verify: "Inspect the exported SVG in Figma: verify path points are clean and scalable. Place the transparent PNG cutout over both pure white (#FFFFFF) and dark slate (#0F172A) backgrounds to confirm zero white fringing or jagged edges. Confirm final WebP payload is under 200KB."
      },
      tools: [
        {
          name: "Recraft Vectorizer",
          type: "Freemium",
          url: "https://www.recraft.ai",
          description: "AI-native vector graphics tool that converts raster images into clean, editable SVG vector paths with minimal control points.",
          bestFor: "Raster-to-SVG vectorization, icon design & scalable brand assets"
        },
        {
          name: "Photoroom",
          type: "Freemium",
          url: "https://www.photoroom.com",
          description: "Automated background removal tool providing hair-level alpha matting and realistic contact shadow synthesis.",
          bestFor: "Background alpha extraction, hair edge matting & e-commerce product cutouts"
        },
        {
          name: "TinyPNG / Squoosh",
          type: "Free",
          url: "https://tinypng.com",
          description: "Industry-standard lossy web compression utilities for converting heavy PNGs into lightweight WebP and AVIF assets.",
          bestFor: "Web payload compression, WebP/AVIF conversion & Core Web Vitals optimization"
        }
      ],
      callouts: {
        mistake: "Uploading raw 12MB uncompressed PNG files directly to web production, destroying site load speed and Google PageSpeed metrics.",
        proTip: "Always test transparent cutouts against contrasting dark and light backgrounds; naive background erasers leave an ugly 1px white halo around edges.",
        mistakes: [
          "Attempting to vectorize complex photorealistic scenes into SVGs, generating a 50MB vector file with 100,000 anchor points that freezes browsers.",
          "Using low-quality background removers that clip fine hair strands or destroy transparent glass reflections.",
          "Over-compressing WebP files below 70% quality, causing noticeable color banding and edge ringing."
        ],
        proTips: [
          "In Recraft, choose between 'Vector Art' and 'SVG Icon' modes to optimize the number of generated anchor points.",
          "Use AVIF format for photographic banners: it provides 20% higher compression efficiency than WebP at identical visual fidelity.",
          "Automate batch WebP conversion in your build pipeline using the CLI: `npx @squoosh/cli --webp '{\"quality\":85}' *.png`."
        ]
      },
      promptLab: {
        title: "Vector Logo & Transparent Commercial Asset Prep Prompt",
        description: "Transform raw generative outputs into scalable SVG vector paths and transparent alpha cutouts optimized for modern web deployment.",
        variables: [
          {
            name: "Asset Category",
            label: "Asset Type for Delivery",
            options: ["Minimalist Monoline Technology Brand Logo", "Transparent E-Commerce Product Bottle Cutout", "Vector App Icon Set with Consistent Stroke Width", "Editorial Hero Banner Optimized for Responsive Web"],
            default: "Minimalist Monoline Technology Brand Logo"
          },
          {
            name: "Delivery Format",
            label: "Export Target",
            options: ["Clean Scalable Vector Graphics (.SVG) with Grouped Paths", "Transparent 32-Bit PNG with Semantic Hair/Edge Matting", "Next-Gen WebP (85% Quality, Sub-150KB Payload)", "Next-Gen AVIF (High Dynamic Range, Sub-100KB Payload)"],
            default: "Clean Scalable Vector Graphics (.SVG) with Grouped Paths"
          },
          {
            name: "Performance Target",
            label: "Quality & Compression SLA",
            options: ["Payload under 50KB, zero pixelation at 4K display scaling", "Sub-150KB payload, Core Web Vitals LCP < 1.2s", "Pixel-perfect transparent alpha matting without edge halos"],
            default: "Payload under 50KB, zero pixelation at 4K display scaling"
          }
        ],
        template: `Production Asset Delivery Protocol:

Asset: [Asset Category].
Target Format: [Delivery Format].
Performance SLA: [Performance Target].

Execution Steps:
1. Raster to Vector Conversion (if vector):
   - Import into Recraft Vectorizer. Simplify anchor nodes to under 150 points.
   - Separate fills and strokes into clean Figma-compatible layers.
2. Background Alpha Matting (if cutout):
   - Execute Photoroom semantic segmentation. Verify soft edges around transparent elements.
   - Audit edge halo against dark background (#0F172A).
3. Web Payload Optimization:
   - Convert raster master to WebP/AVIF. Verify file size meets [Performance Target].`,
        expectedOutput: `### Production Asset Delivery Report

**1. Asset Export:** \`logo-monoline-brand.svg\`
- File Size: 24.8 KB (Compressed)
- Node Count: 82 vector anchor points
- Scalability: Infinitely scalable from 16px favicon to 8K billboard display.

**2. Web Optimization:** \`hero-banner.webp\`
- Original Master PNG: 14.2 MB
- Optimized WebP (Quality 85%): 142 KB (99.0% payload reduction)
- PageSpeed LCP Score: Verified < 0.8s on 4G mobile simulated network.`
      },
      conceptGuide: {
        title: "Understanding Raster-to-Vector Path Tracing & Alpha Channel Matting",
        overview: "Diffusion models generate raster grids: matrices of discrete RGB pixels. Vectorization algorithms analyze color gradients and luminance boundaries to calculate Bézier curves and mathematical vector paths (SVGs). Meanwhile, background removal algorithms perform semantic alpha matting: rather than binary on/off pixel deletion, they calculate continuous fractional transparency values (the alpha channel) to preserve semi-transparent glass reflections, fine hair strands, and soft shadows. Converting generative images into production formats bridges the gap between raw AI creativity and scalable web engineering.",
        keyPoints: [
          "**Bézier Vector Extraction:** AI vectorizers trace raster boundaries into lightweight mathematical SVG curves.",
          "**Fractional Alpha Matting:** Preserves semi-transparent pixels around hair, glass, and soft shadows for halo-free compositing.",
          "**Next-Gen Web Payloads:** Converting heavy master PNGs into WebP and AVIF ensures fast Core Web Vitals and SEO rankings."
        ]
      },
      learning: {
        resources: [
          {
            title: "Recraft Vectorizer & SVG Synthesis Documentation",
            url: "https://www.recraft.ai",
            type: "Official Docs"
          },
          {
            title: "Photoroom Background Removal & Edge Matting API",
            url: "https://www.photoroom.com/api",
            type: "Official Docs"
          },
          {
            title: "Google Web.dev Image Optimization: WebP and AVIF Best Practices",
            url: "https://web.dev/fast/#optimize-your-images",
            type: "Guide"
          },
          {
            title: "W3C Scalable Vector Graphics (SVG) 2 Specification",
            url: "https://www.w3.org/TR/SVG2/",
            type: "Architecture"
          }
        ]
      }
    }
  ]
};
