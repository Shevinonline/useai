// Complete production-grade steps data for "AI Video & Content Creation" Roadmap (12 Nodes)

export const aiVideoContentCreationData = {
  id: "ai-video-content-creation",
  title: "AI Video & Content Creation",
  description: "Scripting, generative B-roll, voice synthesis, automated cutting, and motion graphics.",
  category: "Role & Workflow Roadmaps",
  stepCount: 12,
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: Strategy, Research & Scripting",
      description: "Find proven high-velocity topics, engineer retention-focused scripts, and plan visual cue sheets."
    },
    {
      id: "phase-2",
      title: "Phase 2: AI Voice, Avatars & Visual Synthesis",
      description: "Generate studio voiceovers, consistent reference character styles, cinematic B-roll, and digital twins."
    },
    {
      id: "phase-3",
      title: "Phase 3: AI-First Editing, Audio & Polish",
      description: "Rapid text-based rough cuts, kinetic typography, dynamic pacing, and custom generative soundtracks."
    },
    {
      id: "phase-4",
      title: "Phase 4: Packaging, Repurposing & Distribution",
      description: "High-CTR thumbnail engineering, automated vertical short clipping, and multi-channel scheduling."
    }
  ],
  steps: [
    // Node 1
    {
      id: "step-1",
      stepNumber: 1,
      phaseId: "phase-1",
      title: "Outlier Topic Research & Viral Angle Validation",
      timeEstimate: "45 mins",
      difficulty: "Beginner",
      summary: "Identify high-demand topic outliers and validate packaging angles using data-backed competitor view-velocity before writing a script.",
      description: "Most video creators fail before pressing record because they choose topics based on intuition rather than statistical demand. Outlier research reverses this by isolating videos that outperformed a channel's average view count by 5x-20x. Using AI research tools like Perplexity and VidIQ, you map proven curiosity gaps, examine comment sentiment to identify audience frustrations, and formulate a distinct contrarian angle that commands attention in crowded feeds.",
      playbook: {
        setup: "Open Perplexity Pro in Deep Research mode and configure VidIQ or 1of10 to monitor your target niche's top 20 competing channels.",
        execute: "Scan for 90-day outlier videos with an Outlier Score >= 5x. Feed the top 5 video titles and full transcripts into Claude to extract the underlying psychological tension, audience pain point, and thumbnail premise.",
        verify: "Ensure your proposed angle meets the 3-second test: It must either challenge common consensus, expose an overlooked shortcut, or resolve an urgent high-stakes problem."
      },
      tools: [
        {
          name: "Perplexity",
          type: "Freemium",
          url: "https://www.perplexity.ai",
          description: "Real-time AI research engine for audience sentiment and statistical citations.",
          bestFor: "Deep web citations & niche pain point mapping"
        },
        {
          name: "VidIQ",
          type: "Freemium",
          url: "https://vidiq.com",
          description: "YouTube intelligence platform tracking view-velocity and search demand.",
          bestFor: "Outlier video discovery & keyword velocity"
        },
        {
          name: "1of10",
          type: "Paid",
          url: "https://1of10.com",
          description: "Specialized database identifying 10x view outlier videos across YouTube.",
          bestFor: "Packaging angle & viral premise discovery"
        }
      ],
      callouts: {
        mistake: "Selecting broad, saturated keywords ('How to use AI') instead of high-stakes specific problems ('How I built a $10k SaaS with Cursor in 48 hours').",
        proTip: "Look at the lowest-subscriber channels producing high-view videos; their packaging was 100% responsible for the algorithmic breakout.",
        mistakes: [
          "Selecting broad, saturated keywords instead of high-stakes, hyper-specific problems.",
          "Copying an outlier video's exact title without adding a unique personal experiment or contrarian twist.",
          "Starting scriptwriting before testing whether the core thesis can be captured in a 3-word thumbnail punchline."
        ],
        proTips: [
          "Analyze low-subscriber channels producing high-view videos to isolate pure thumbnail and title leverage.",
          "Scrape top comments of competitor outliers to extract exact emotional triggers and unanswered viewer doubts.",
          "Draft at least 10 title variations with contrasting psychological hooks (Curiosity vs. Fear vs. Aspirational) before greenlighting."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet (Reasoning Mode) / Perplexity Pro",
        variables: [
          {
            id: "platform",
            label: "Format & Platform",
            options: [
              "YouTube Long-Form (8-15 min)",
              "YouTube Shorts / Vertical (30-60s)",
              "B2B Tech Masterclass (20+ min)"
            ],
            defaultOption: "YouTube Long-Form (8-15 min)"
          },
          {
            id: "niche",
            label: "Content Niche",
            options: [
              "AI & Software Engineering",
              "No-Code & Automation",
              "Creative Tech & Generative AI",
              "Productivity & Solopreneurship"
            ],
            defaultOption: "AI & Software Engineering"
          },
          {
            id: "angleType",
            label: "Core Narrative Angle",
            options: [
              "Contrarian / Mythbusting",
              "Zero-to-Hero Experiment",
              "Exhaustive Blueprint / Framework"
            ],
            defaultOption: "Contrarian / Mythbusting"
          }
        ],
        template: "Act as a viral YouTube Strategist and Lead Content Producer. I want to produce a high-performing [platform] video in the [niche] niche with a [angleType] angle.\n\nAnalyze current market saturation and output:\n1. 5 Proven Outlier Video Concepts: Each with an estimated 5x+ view-velocity potential, primary psychological trigger, and target audience pain point.\n2. Contrarian Thesis: What does the majority of the industry get wrong about this topic, and why will our angle provoke high-retention comments?\n3. 3 Packaging Frameworks: Provide matching pairs of (A) High-CTR Video Title (<50 characters) and (B) 3-word Thumbnail text punchline.\n4. Retention Risk Audit: Identify where viewers typically drop off on this subject and recommend 2 narrative tension points to maintain mid-video watch time.",
        expectedOutputs: [
          "5 distinct outlier video concepts with psychological triggers and pain points",
          "Sharp contrarian thesis that challenges status-quo consensus",
          "3 paired high-CTR titles and punchy 3-word thumbnail concepts"
        ]
      },
      learning: {
        resources: [
          {
            title: "VidIQ Official Guide: Identifying Outlier Videos",
            badge: "OFFICIAL DOCS",
            url: "https://vidiq.com/blog/post/youtube-outliers/"
          },
          {
            title: "Perplexity AI: Advanced Deep Research Workflows",
            badge: "GUIDE",
            url: "https://www.perplexity.ai"
          }
        ]
      },
      conceptGuide: {
        title: "The Science of Content Outliers and Viral Angles",
        overview: "Organic video distribution is fundamentally governed by algorithmic feedback loops: Impression Click-Through Rate (CTR) and Average Percentage Viewed (APV). Most creators spend 90% of their creative energy on production and editing, neglecting the packaging and premise. By identifying statistical outlier videos—videos that achieved anomalous viewership relative to channel subscriber base—creators reverse-engineer proven human curiosity patterns. Validating the packaging angle before drafting the script guarantees that you are creating for an active, hungry audience rather than guessing what might resonate.",
        keyPoints: [
          {
            lead: "Statistical Anomaly Sourcing",
            text: "Focus exclusively on videos that generated 5x or more views than the channel's 30-day median to isolate pure packaging leverage."
          },
          {
            lead: "Psychological Tension Mapping",
            text: "Outliers succeed because they set up an unresolved knowledge gap in the audience's mind that demands closure."
          },
          {
            lead: "Packaging-First Validation",
            text: "If you cannot convey the video's core tension in under 5 words and a single visual glance, the premise is too weak to produce."
          }
        ]
      }
    },

    // Node 2
    {
      id: "step-2",
      stepNumber: 2,
      phaseId: "phase-1",
      title: "High-Retention Hook & Script Architecture",
      timeEstimate: "1.5 hours",
      difficulty: "Intermediate",
      summary: "Engineer the first 15 seconds with pattern interrupts and open loops, structuring conversational scripts that sound human, not AI-generated.",
      description: "Over 50% of video audience drop-off occurs within the first 30 seconds. To maximize watch time, scripts must be engineered using retention architectures: the immediate payoff promise, sensory pattern interrupt, context grounding, and sequential open loops. Using LLMs with calibrated system prompts, you convert raw research notes into dynamic, spoken-cadence scripts stripped of robotic jargon, robotic transitional phrases, and throat-clearing introductions.",
      playbook: {
        setup: "Load Claude 3.7 Sonnet or ChatGPT with your validated title, thumbnail concept, and target persona pain points.",
        execute: "Draft the Hook using the 4-part framework (Pattern Interrupt + Stakes + Open Loop + Proof). Flesh out the body using 3-act tension cycles where every section closes with an unanswered micro-question.",
        verify: "Read the script out loud against a stopwatch at 140–160 words per minute. Cut any sentence requiring two breaths or containing corporate buzzwords ('delve into', 'testament to', 'revolutionize')."
      },
      tools: [
        {
          name: "Claude 3.7 Sonnet",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Top-tier conversational LLM for natural spoken tone, rhythm, and cadence.",
          bestFor: "Humanized script drafts & spoken cadence pacing"
        },
        {
          name: "ChatGPT o3-mini",
          type: "Freemium",
          url: "https://chatgpt.com",
          description: "Reasoning model for logical pacing, retention checkpoints, and open loops.",
          bestFor: "Structural retention beats & pacing logic"
        },
        {
          name: "Notion",
          type: "Freemium",
          url: "https://www.notion.so",
          description: "Modular workspace for audio/visual split script formatting and cue sheets.",
          bestFor: "Two-column A/V script organization"
        }
      ],
      callouts: {
        mistake: "Wasting the first 15 seconds on channel greetings, animated logo stings, or re-explaining the title word-for-word.",
        proTip: "Use the 'In Media Res' hook: Open directly inside the climax or critical error, then rewind 48 hours to explain how it happened.",
        mistakes: [
          "Spending the opening 15 seconds saying 'Hey guys, welcome back to my channel' or showing 3D logos.",
          "Accepting default AI writing style with telltale clichés like 'In today's fast-paced digital world' or 'Let's delve in'.",
          "Resolving the main curiosity premise too early in the video, prompting viewers to exit immediately."
        ],
        proTips: [
          "Confirm the visual promise of the thumbnail within the first 3 seconds to eliminate immediate buyer's remorse.",
          "Inject an unannounced mini-twist or second cliffhanger at the 50% mark to sustain retention through the mid-roll dip.",
          "Format scripts in a two-column table: Left column for Voiceover text, Right column for exact B-Roll visual cues."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet (Temperature 0.3)",
        variables: [
          {
            id: "videoLength",
            label: "Target Video Duration",
            options: [
              "8–10 Minutes (~1,300 words)",
              "12–15 Minutes (~1,900 words)",
              "60-Second Short (~150 words)"
            ],
            defaultOption: "8–10 Minutes (~1,300 words)"
          },
          {
            id: "hookStyle",
            label: "Hook Framework",
            options: [
              "Cold Open / High Stakes Disaster",
              "Curiosity Gap / Contrarian Claim",
              "Proof-First / Jaw-Dropping Demo"
            ],
            defaultOption: "Cold Open / High Stakes Disaster"
          },
          {
            id: "tone",
            label: "Speaker Cadence & Persona",
            options: [
              "Pragmatic Senior Engineer (Punchy, Direct)",
              "Energetic Tech Storyteller (Engaged, Fast-Paced)",
              "Analytical Investigative Journalist (Calm, Precise)"
            ],
            defaultOption: "Pragmatic Senior Engineer (Punchy, Direct)"
          }
        ],
        template: "You are an elite YouTube Video Scriptwriter specializing in high-retention tech storytelling. Write a complete script for a [videoLength] video using a [hookStyle] hook in the voice of a [tone].\n\nTopic: [Insert Validated Outlier Topic]\nTarget Title: [Insert Title]\nThumbnail Image: [Insert Thumbnail Description]\n\nExecution Rules:\n1. 00:00–00:15 HOOK: Must immediately validate the thumbnail visual, deliver a sensory pattern interrupt, state the life-or-death stakes, and establish an open loop that cannot be answered until minute 7.\n2. SPOKEN CADENCE: Write for the ear, not the eye. Use short sentence fragments. Zero throat-clearing. Forbid words like: delve, testament, paramount, seamlessly, furthermore, revolution.\n3. TWO-COLUMN SCRIPT FORMAT: Output a markdown table with columns:\n| Timestamp | Audio / Spoken Voiceover | Visual / B-Roll Cue & On-Screen Text |\n4. MICRO-LOOPS: Ensure every major section ends with a transitional hook bridging to the next insight.",
        expectedOutputs: [
          "Zero-filler 15-second hook validating thumbnail visual immediately",
          "Two-column table pairing exact spoken voiceover with visual B-roll cues",
          "Conversational spoken cadence free of corporate buzzwords and AI clichés"
        ]
      },
      learning: {
        resources: [
          {
            title: "Story Grid: The 5 Commandments of Narrative Pacing",
            badge: "GUIDE",
            url: "https://storygrid.com/5-commandments/"
          },
          {
            title: "Anthropic Prompt Engineering: Conversational Style Priming",
            badge: "OFFICIAL DOCS",
            url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering"
          }
        ]
      },
      conceptGuide: {
        title: "Mastering Retention-Driven Script Architecture",
        overview: "Modern video platforms do not reward word count or cinematic vanity—they reward session time and viewer satisfaction. The script is the invisible structural wireframe of the entire video. If the spoken narrative lacks narrative momentum, no amount of flashy 3D transitions or sound effects can resurrect viewer retention. By designing scripts around psychological checkpoints (The 15-Second Rule, The Curiosity Bridge, and The 50% Mid-Point Re-Hook), creators transform passive viewers into invested learners who watch to the end screen.",
        keyPoints: [
          {
            lead: "The 15-Second Rule",
            text: "Viewers decide whether to stay based entirely on whether the opening seconds validate their click and promise a compelling transformation."
          },
          {
            lead: "B-Roll Parallelism",
            text: "Scripts must be written simultaneously with visual cues; writing audio in isolation results in boring talking-head monologues."
          },
          {
            lead: "Conversational Friction Reduction",
            text: "Natural speech uses contractions, fragments, and pause beats; eliminate academic vocabulary to enhance comprehension."
          }
        ]
      }
    },

    // Node 3
    {
      id: "step-3",
      stepNumber: 3,
      phaseId: "phase-1",
      title: "Visual Storyboarding & Shot List Planning",
      timeEstimate: "1 hour",
      difficulty: "Intermediate",
      summary: "Translate script beats into a concrete A-Roll, B-Roll, and motion graphic cue sheet before opening generative AI tools.",
      description: "Generative video tools like Runway and Kling consume compute credits rapidly. Randomly prompting generative models without a storyboard leads to mismatched camera angles, incoherent art direction, and ballooning production budgets. In this step, you convert every paragraph of your script into an explicit shot list categorizing assets into A-Roll (talking head or screencast), B-Roll (AI-synthesized cinematic footage or screen recordings), and Motion Graphics (diagrams, text callouts).",
      playbook: {
        setup: "Set up a visual storyboard board in Figma or Notion with columns for Scene #, Script Excerpt, Visual Concept, Camera Motion, and Asset Source.",
        execute: "Break the script into 5-second visual increments. For every visual beat, write the exact generative camera prompt (e.g., 'Slow drone orbit', 'Extreme macro lens rack focus') and designate whether it requires AI video, vector motion, or UI screen capture.",
        verify: "Review the full sequence to ensure visual variety: Ensure no static shot lingers on screen longer than 6 seconds without a camera move, text overlay, or cut."
      },
      tools: [
        {
          name: "Claude 3.7 Sonnet",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Synthesizes scripts into detailed camera shot lists and cinematic prompt tags.",
          bestFor: "Shot list extraction & camera motion prompting"
        },
        {
          name: "Midjourney",
          type: "Paid",
          url: "https://www.midjourney.com",
          description: "Generates quick visual style frames and storyboard sketches.",
          bestFor: "Concept art style frames & storyboard sketches"
        },
        {
          name: "Figma",
          type: "Freemium",
          url: "https://www.figma.com",
          description: "Collaborative canvas for laying out sequential storyboard frames and graphic cards.",
          bestFor: "Visual storyboard layouts & typography cards"
        }
      ],
      callouts: {
        mistake: "Treating B-roll as decorative wallpaper rather than an active visual proof of the specific claim being spoken.",
        proTip: "Create a shared 'Style Anchor' card in Figma with 3 approved reference images, color palettes, and lens specs to ensure all generated scenes look filmed on the same camera.",
        mistakes: [
          "Generating random sci-fi AI video clips that have zero conceptual connection to the technical points being explained.",
          "Neglecting to specify camera motion and focal length in storyboard notes, resulting in erratic, jarring cuts.",
          "Failing to budget screen real estate for dynamic lower-third text callouts and on-screen code blocks."
        ],
        proTips: [
          "Use a 3-tier visual pacing rhythm: Wide establishing shot (3s) -> Close-up detail (4s) -> Motion graphic diagram (5s).",
          "Tag each shot with exact generative camera syntax (e.g., [Pan Right 20%], [Zoom In Slow], [Fpv Tilt Down]) before rendering.",
          "Keep an asset library of reusable motion graphic background plates so you don't burn AI render tokens on simple backdrops."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / ChatGPT o3-mini",
        variables: [
          {
            id: "visualStyle",
            label: "Visual Art Direction",
            options: [
              "Dark Tech Utilitarian (Linear/Raycast 3D aesthetic)",
              "Cinematic Sci-Fi Photoreal (35mm anamorphic lens)",
              "Clean Minimalist Educational (Flat design, crisp typography)"
            ],
            defaultOption: "Dark Tech Utilitarian (Linear/Raycast 3D aesthetic)"
          },
          {
            id: "pacingTarget",
            label: "Average Shot Duration",
            options: [
              "High Velocity (Cuts every 2.5–4.0 seconds)",
              "Documentary Pace (Cuts every 4.0–6.5 seconds)",
              "Deep Dive Tutorial (Cuts every 7.0–10.0 seconds)"
            ],
            defaultOption: "Documentary Pace (Cuts every 4.0–6.5 seconds)"
          }
        ],
        template: "You are a Master Director of Photography and Video Producer. Convert the following script excerpt into a comprehensive Production Shot List and Storyboard specification for a video formatted in [visualStyle] with a pacing target of [pacingTarget].\n\nScript Section:\n[Paste 2-3 paragraphs of script]\n\nOutput a Markdown table with the following mandatory columns:\n1. Shot # & Timecode\n2. Audio Line (Word-for-word cue)\n3. Asset Type (A-Roll / AI Generative B-Roll / Screen Recording / Motion Graphic)\n4. Exact Visual Description (Subject, lighting, environment, color accents)\n5. Camera Direction & Lens Spec (e.g., Dolly-in, 50mm f/1.8, Dutch angle, Drone pan)\n6. Generative AI Video Prompt (Ready-to-paste prompt with motion parameters)",
        expectedOutputs: [
          "Comprehensive storyboard table mapping every script beat to visual assets",
          "Explicit camera directions with focal length and movement parameters",
          "Production-ready generative video prompts for Runway Gen-3 and Kling AI"
        ]
      },
      learning: {
        resources: [
          {
            title: "Figma Community: YouTube Storyboard Templates",
            badge: "WORKFLOW",
            url: "https://www.figma.com/community"
          },
          {
            title: "Runway ML: Camera Control Prompting Guidelines",
            badge: "OFFICIAL DOCS",
            url: "https://help.runwayml.com"
          }
        ]
      },
      conceptGuide: {
        title: "The Architecture of Visual Storyboarding",
        overview: "A script is only half of the video equation; human brains process visual imagery 60,000 times faster than text. Visual storyboarding bridges the conceptual gap between literary narration and cinematic delivery. When working with generative AI video pipelines, storyboarding acts as an essential pre-flight checklist: it forces the creator to define composition, lighting schemes, subject persistence, and camera vectors before burning expensive compute credits on text-to-video diffusion models.",
        keyPoints: [
          {
            lead: "Visual Redundancy Elimination",
            text: "Never let the visual simply echo the spoken word verbatim; visuals should elevate, demonstrate, or contextualize the narration."
          },
          {
            lead: "Pacing Rhythms",
            text: "Vary shot distance between wide, medium, and extreme close-up to maintain subconscious visual alertness."
          },
          {
            lead: "Production Cost Containment",
            text: "Categorize assets into low-cost motion graphics vs. high-compute AI generations before launching render pipelines."
          }
        ]
      }
    },

    // Node 4
    {
      id: "step-4",
      stepNumber: 4,
      phaseId: "phase-2",
      title: "Studio-Grade AI Voice Cloning & Narration",
      timeEstimate: "1 hour",
      difficulty: "Intermediate",
      summary: "Generate natural, emotionally paced voiceovers or clean raw microphone recordings to broadcast studio quality.",
      description: "Audio quality makes or breaks viewer retention—viewers will tolerate 720p video with pristine audio, but will instantly abandon 4K video with harsh, hollow, or robotic sound. Using modern neural voice synthesis tools like ElevenLabs, you can either synthesize an authentic personal digital voice clone or generate studio-grade narration with controllable emotional inflection, pacing pauses, and dynamic emphasis. For creators recording on budget microphones, Adobe Podcast AI restores room reflections and restores lost broadcast warmth.",
      playbook: {
        setup: "Record 15 minutes of clean, uncompressed WAV voice samples (reading diverse conversational texts) or select an expressive ElevenLabs voice model (e.g., Eleven Multilingual v2).",
        execute: "Input your script with explicit phonetic pronunciation guides and custom SSML pause tags `<break time=\"0.5s\"/>`. Tune Voice Stability (35–45% for energetic emotion, 60–70% for steady technical tutorials) and Clarity sliders.",
        verify: "Export at 48kHz 24-bit WAV. Run through Adobe Podcast Enhance at 60-70% mix or an EQ high-pass filter (80Hz cutoff) to eliminate low-end mud."
      },
      tools: [
        {
          name: "ElevenLabs",
          type: "Freemium",
          url: "https://elevenlabs.io",
          description: "Leading neural voice synthesis and realistic emotional voice cloning platform.",
          bestFor: "Emotional voice cloning & expressive narration"
        },
        {
          name: "Adobe Podcast Enhance",
          type: "Free",
          url: "https://podcast.adobe.com/enhance",
          description: "AI-powered audio cleanup removing background noise and room reverberation.",
          bestFor: "Vocal room reverb removal & broadcast warmth"
        }
      ],
      callouts: {
        mistake: "Setting ElevenLabs stability to 100%, which turns human speech into a monotonous robotic drone with zero pitch modulation.",
        proTip: "Use comma spacing, ellipsis (...), and dash breaks (—) deliberately in your text inputs to force the AI voice model into realistic conversational breathing pauses.",
        mistakes: [
          "Exporting audio in lossy 128kbps MP3 format, resulting in swishy compression artifacts on mobile earbuds.",
          "Failing to adjust speed and stability parameters per section, making energetic intros sound identical to solemn conclusions.",
          "Over-enhancing raw audio to 100% in Adobe Podcast, causing robotic phase distortion and clipped consonant sounds."
        ],
        proTips: [
          "Blend 65% Enhanced audio with 35% original raw audio in your NLE to retain natural room texture while cutting noise.",
          "Generate voiceover in paragraph-by-paragraph chunks rather than pasting a 2,000-word monolith to fine-tune inflection beats.",
          "Use ElevenLabs Voice Design to create proprietary, non-generic narrator personas tailored to your channel's unique tone."
        ]
      },
      promptLab: {
        recommendedModel: "ElevenLabs Multilingual v2 Voice Settings / Claude Pronunciation Prompter",
        variables: [
          {
            id: "deliveryPacing",
            label: "Speech Pacing & Energy",
            options: [
              "High-Energy Tech Explainer (Fast, Enthusiastic, Stability 38%)",
              "Documentary Storytelling (Warm, Deliberate, Stability 55%)",
              "Engineering Deep Dive (Authoritative, Calm, Stability 65%)"
            ],
            defaultOption: "High-Energy Tech Explainer (Fast, Enthusiastic, Stability 38%)"
          },
          {
            id: "voiceModel",
            label: "Voice Archetype",
            options: [
              "Professional Instant Voice Clone",
              "Curated Studio Voice (Adam / Marcus / Rachel)",
              "Custom Designed Persona"
            ],
            defaultOption: "Curated Studio Voice (Adam / Marcus / Rachel)"
          }
        ],
        template: "You are an Audio Engineering Director and Voice Coach. Prepare the following script passage for optimal synthesis in ElevenLabs using [voiceModel] tuned for [deliveryPacing].\n\nScript Passage:\n[Paste script excerpt]\n\nTasks:\n1. Insert phonetic spelling annotations for all technical acronyms, model names, and software brands (e.g., [post-gres], [n-eight-n], [pie-torch]).\n2. Insert punctuation marks (hyphens, ellipses, commas) to simulate natural respiratory breathing pauses and dramatic tension.\n3. Recommend exact ElevenLabs slider settings: Stability %, Clarity / Similarity Enhancement %, Style Exaggeration %, and Speaker Boost toggle.\n4. Highlight words that require auditory emphasis.",
        expectedOutputs: [
          "Phonetically tuned script ready for clean ElevenLabs generation",
          "Calculated punctuation formatting to force natural breathing cadences",
          "Precise parameter percentage recommendations for Stability and Clarity"
        ]
      },
      learning: {
        resources: [
          {
            title: "ElevenLabs Official Speech Synthesis Documentation",
            badge: "OFFICIAL DOCS",
            url: "https://elevenlabs.io/docs/speech-synthesis"
          },
          {
            title: "Adobe Podcast Audio Engineering Guide",
            badge: "GUIDE",
            url: "https://podcast.adobe.com"
          }
        ]
      },
      conceptGuide: {
        title: "The Physics of High-Fidelity AI Narration",
        overview: "Human perception is extraordinarily sensitive to vocal unnaturalness. When listening to audio, subtle micro-fluctuations in pitch, breath timing, and consonant sharpness signal authenticity to the subconscious mind. Traditional text-to-speech models failed because they read text linearly without understanding semantic weight. Modern diffusion-based voice synthesis models evaluate the emotional context of entire sentences to infer where a speaker would naturally breathe, emphasize, or lower their vocal register.",
        keyPoints: [
          {
            lead: "The Uncanny Valley of Audio",
            text: "High stability creates robotic monotony; low stability introduces vocal crackle. The sweet spot for tech storytelling is 35-45% stability."
          },
          {
            lead: "SSML & Breath Mechanics",
            text: "Artificial pauses between conceptual paragraphs give the viewer's brain time to digest complex technical ideas."
          },
          {
            lead: "Hybrid Audio Blending",
            text: "Never use 100% AI noise suppression; keeping 10-20% natural room tone grounds the speaker in physical reality."
          }
        ]
      }
    },

    // Node 5
    {
      id: "step-5",
      stepNumber: 5,
      phaseId: "phase-2",
      title: "Consistent AI Art Direction & Reference Assets",
      timeEstimate: "1.5 hours",
      difficulty: "Advanced",
      summary: "Create cohesive style frames, character consistency (--cref / --sref), and visual assets for faceless or hybrid channels.",
      description: "The hallmark of amateur AI video is visual whiplash: character faces change between every cut, lighting schemes fluctuate wildly, and color palettes alternate between cartoonish anime and grainy photorealism. In this step, you establish a unified Visual Bible using Midjourney v6 and Flux Schnell/Dev. By leveraging Style References (`--sref`) and Character References (`--cref`), you lock in persistent digital characters, camera lenses, and atmospheric palettes across all keyframes.",
      playbook: {
        setup: "Generate a foundational Master Style Frame in Midjourney that locks your desired aspect ratio (--ar 16:9), film stock (e.g., Kodak Vision3 500T), color grade, and lighting mood.",
        execute: "Extract the URL of the master style frame. Feed it into downstream prompts using the `--sref [URL] --sw 100` parameter. For character persistence, generate 4 neutral angle reference portraits and apply `--cref [URL] --cw 80`.",
        verify: "Place 10 generated keyframes side by side in a grid. Confirm that eye color, facial structure, wardrobe, and ambient shadow color remain uniform across all scenes."
      },
      tools: [
        {
          name: "Midjourney",
          type: "Paid",
          url: "https://www.midjourney.com",
          description: "Premier generative text-to-image engine with style reference (--sref) and character reference (--cref).",
          bestFor: "Art direction consistency & cinematographic style frames"
        },
        {
          name: "Flux",
          type: "Freemium",
          url: "https://blackforestlabs.ai",
          description: "Open-weights state-of-the-art model for photorealistic texture rendering and legible text.",
          bestFor: "High-realism skin textures & legible on-screen signage"
        },
        {
          name: "Leonardo AI",
          type: "Freemium",
          url: "https://leonardo.ai",
          description: "Creative studio with custom LoRA fine-tuning and visual style persistence.",
          bestFor: "Custom LoRA training & canvas inpainting"
        }
      ],
      callouts: {
        mistake: "Using wildly descriptive style buzzwords ('photorealistic, 8k, Unreal Engine 5') instead of physical camera specs and film stock names.",
        proTip: "Lock a Midjourney seed number (`--seed 42891`) across batch runs to constrain noise generation and preserve lighting physics.",
        mistakes: [
          "Allowing clothing, hairstyles, and lighting angles to randomly morph between consecutive scenes.",
          "Failing to specify aspect ratios (--ar 16:9), forcing low-quality manual cropping in video editing timelines.",
          "Using overly complex prompts that conflict with reference parameters, resulting in distorted artifacts."
        ],
        proTips: [
          "Build a dedicated Style Reference Sheet with 4 moodboard images to pass into `--sref URL1 URL2` with custom weights.",
          "When generating character close-ups, use `--cw 30` to allow the AI to change clothing while locking facial features.",
          "Upscale your final reference frames in Topaz Gigapixel or Magnific AI before feeding them into video motion generators."
        ]
      },
      promptLab: {
        recommendedModel: "Midjourney v6.1 / Flux Dev",
        variables: [
          {
            id: "cameraSpec",
            label: "Cinematography Camera & Lens",
            options: [
              "ARRI Alexa 65, 35mm Anamorphic Lens, f/2.0, Shallow Depth of Field",
              "Hasselblad H6D-100c, 80mm Medium Format, Studio Key Light",
              "Sony FX3, 24mm G-Master, Cinematic Low-Light Grain"
            ],
            defaultOption: "ARRI Alexa 65, 35mm Anamorphic Lens, f/2.0, Shallow Depth of Field"
          },
          {
            id: "lightingMood",
            label: "Color Grade & Lighting Scheme",
            options: [
              "Moody Cyber-Noir: Cyan and tungsten edge lighting, deep shadows",
              "Clean Silicon Valley Daylight: Soft diffused window light, warm neutral tones",
              "Dark Utilitarian Tech: Minimalist charcoal palette with electric purple accents"
            ],
            defaultOption: "Dark Utilitarian Tech: Minimalist charcoal palette with electric purple accents"
          }
        ],
        template: "Construct a production-ready Midjourney v6.1 prompt that adheres strictly to our channel's visual art bible.\n\nScene Concept: [Describe scene subject or character action]\nCamera & Lens: [cameraSpec]\nLighting & Atmosphere: [lightingMood]\nFilm Stock / Sensor: Kodak Vision3 500T, cinematic film grain, volumetric haze\nComposition: Cinematic widescreen wide shot, rule of thirds, clean negative space for text overlays\n\nPrompt Output:\n/imagine prompt: [Subject action in vivid physical detail], [cameraSpec], [lightingMood], Kodak Vision3 500T aesthetic, subtle volumetric fog, clean studio composition --ar 16:9 --style raw --v 6.1 --sref [Insert Master Style Frame URL] --sw 100",
        expectedOutputs: [
          "Synthesized Midjourney v6.1 prompt ready for direct generation",
          "Physical camera, lens, and lighting specifications ensuring cinematic depth",
          "Integrated style reference parameter hooks (--sref / --sw) for visual persistence"
        ]
      },
      learning: {
        resources: [
          {
            title: "Midjourney Official Docs: Style Reference (--sref)",
            badge: "OFFICIAL DOCS",
            url: "https://docs.midjourney.com/docs/style-reference"
          },
          {
            title: "Black Forest Labs: Flux Technical Architecture",
            badge: "GUIDE",
            url: "https://blackforestlabs.ai"
          }
        ]
      },
      conceptGuide: {
        title: "The Principles of Consistent Generative Art Direction",
        overview: "In traditional cinematography, an art director and director of photography guarantee that every scene belongs to the same physical universe. In AI pipelines, diffusion models start each image from random Gaussian noise, naturally resulting in visual divergence. To achieve broadcast consistency, creators must constrain the generation space. By feeding visual reference embeddings directly into the model's cross-attention layers, you lock semantic color palettes, lens falloff, and facial bone structures.",
        keyPoints: [
          {
            lead: "Seed & Latent Anchoring",
            text: "Constraining initial random noise vectors ensures repeatable lighting and texture distribution across multiple batches."
          },
          {
            lead: "The Camera-First Rule",
            text: "Specifying real-world focal lengths (35mm, 85mm) and aperture stops (f/1.8) dictates bokeh and perspective distortion predictably."
          },
          {
            lead: "Visual Palette Discipline",
            text: "A unified video must stick to a 3-color semantic palette; shifting between saturated primary tones breaks immersion instantly."
          }
        ]
      }
    },

    // Node 6
    {
      id: "step-6",
      stepNumber: 6,
      phaseId: "phase-2",
      title: "Cinematic AI Video & B-Roll Generation",
      timeEstimate: "2 hours",
      difficulty: "Advanced",
      summary: "Turn static reference frames into smooth cinematic motion clips using camera control prompts and physics simulation.",
      description: "Static images convey style, but motion retains attention. Video generation models like Runway Gen-3 Alpha, Kling AI, and Luma Dream Machine transform keyframe still images into fluid, photorealistic 5-to-10 second video sequences. Rather than relying on unpredictable text-to-video generation, professionals use Image-to-Video (I2V) workflows: uploading approved high-resolution style frames as the initial frame and directing physical camera vectors with precision camera prompts.",
      playbook: {
        setup: "Select your upscaled 16:9 Midjourney/Flux reference frames from Node 5 and import them into Runway Gen-3 or Kling AI in Image-to-Video mode.",
        execute: "Craft prompt commands focusing exclusively on camera movement and subject physics (e.g., 'Slow forward dolly tracking shot, subtle wind blowing through subject hair, shallow depth of field rack focus'). Avoid re-describing the visual contents already present in the reference image.",
        verify: "Inspect rendered clips at 100% zoom for telltale AI morphing, unnatural hand warping, or erratic motion jitter. Discard clips with unstable subject boundaries."
      },
      tools: [
        {
          name: "Runway Gen-3 Alpha",
          type: "Paid",
          url: "https://runwayml.com",
          description: "Leading generative video model with precise camera motion brushes and cinematic physics.",
          bestFor: "Controlled camera motions & high-fidelity physics"
        },
        {
          name: "Kling AI",
          type: "Freemium",
          url: "https://klingai.com",
          description: "Next-gen video generation engine with realistic human movement and 1080p outputs.",
          bestFor: "Complex subject movement & extended 10s clips"
        },
        {
          name: "Luma Dream Machine",
          type: "Freemium",
          url: "https://lumalabs.ai/dream-machine",
          description: "Fast diffusion video model for dynamic camera fly-throughs and spatial tracking.",
          bestFor: "Fast 3D camera fly-throughs & spatial action"
        }
      ],
      callouts: {
        mistake: "Re-describing the entire scene in the text prompt when using Image-to-Video, which confuses the diffusion model and causes hallucinatory shifts.",
        proTip: "Use Motion Brush tools to paint selectively over water, smoke, or hair while leaving the human face and architectural background static.",
        mistakes: [
          "Attempting text-to-video instead of image-to-video, sacrificing all control over lighting and character consistency.",
          "Requesting violent, rapid camera movements that cause generative frame interpolation to turn into liquid goo.",
          "Failing to upscale 720p native video outputs using AI video upscalers (Topaz Video AI) before final editing."
        ],
        proTips: [
          "Keep text prompts strictly directional: Specify speed, camera angle, and focal motion (e.g., 'Pan Left Slow, 1.2x motion speed').",
          "Extend successful 5-second clips using Kling's 'Extend Video' tool to maintain continuous scene action across 10-15 seconds.",
          "Render at 24fps and apply subtle optical flow motion blur in post-production to smooth out minor frame cadence jitters."
        ]
      },
      promptLab: {
        recommendedModel: "Runway Gen-3 Alpha (Image-to-Video) / Kling 1.5",
        variables: [
          {
            id: "cameraMove",
            label: "Camera Vector & Motion",
            options: [
              "Slow cinematic dolly forward with subtle push-in",
              "Low-angle tracking orbit around subject at medium speed",
              "Drone top-down descending vertical crane shot"
            ],
            defaultOption: "Slow cinematic dolly forward with subtle push-in"
          },
          {
            id: "motionSpeed",
            label: "Motion Intensity",
            options: [
              "Subtle & Atmospheric (Motion Scale 2–3)",
              "Dynamic Cinematic (Motion Scale 5–6)",
              "Fast Action Track (Motion Scale 7–8)"
            ],
            defaultOption: "Dynamic Cinematic (Motion Scale 5–6)"
          }
        ],
        template: "You are a Senior AI Cinematographer. Write an exact Image-to-Video generation prompt for Runway Gen-3 Alpha and Kling AI using an uploaded 16:9 reference image.\n\nPrimary Camera Vector: [cameraMove]\nMotion Intensity: [motionSpeed]\nKey Subject Action: [Describe movement, e.g., fingers typing on luminous keyboard, steam rising from coffee cup]\nAtmospheric Elements: [e.g., soft bokeh light leak, dust particles floating in sunlight]\n\nExecution Formula:\n[Camera Movement Direction] + [Primary Subject Physics] + [Atmospheric Physics] + [Quality Parameter].\n\nGenerated Prompt:\n[cameraMove], [Key Subject Action], cinematic lens flare, volumetric ambient light drift, realistic physical weight, steady horizon lock, photorealistic 24fps film motion, no morphing, no artifacts.",
        expectedOutputs: [
          "Concise, directional motion prompt optimized for Image-to-Video models",
          "Zero redundancy (avoids re-describing static visual elements from reference frame)",
          "Explicit physics and atmospheric constraints to prevent liquid warping"
        ]
      },
      learning: {
        resources: [
          {
            title: "Runway ML: Gen-3 Prompting & Motion Brush Guide",
            badge: "OFFICIAL DOCS",
            url: "https://help.runwayml.com/hc/en-us/articles/30528657685651-Gen-3-Alpha-Prompting-Guide"
          },
          {
            title: "Kling AI Official Creator Manual",
            badge: "GUIDE",
            url: "https://klingai.com"
          }
        ]
      },
      conceptGuide: {
        title: "The Mechanics of Generative Video Diffusion",
        overview: "Video diffusion models treat video as a 3-dimensional tensor of pixels (Height x Width x Time). When given an initial reference image, the model predicts the most statistically probable trajectory of each pixel across subsequent latent temporal frames. The challenge in AI cinematography is temporal consistency: preventing objects from dissolving or sprouting unexpected limbs. By leveraging controlled camera vectors and regional motion masks, creators guide the diffusion trajectory along realistic physical paths.",
        keyPoints: [
          {
            lead: "Temporal Coherence",
            text: "Generative models maintain structure best when camera moves are slow, linear, and predictable."
          },
          {
            lead: "Image-to-Video Priming",
            text: "Supplying a high-resolution initial frame gives the diffusion network 90% of its spatial information, allowing compute to focus on motion."
          },
          {
            lead: "Micro-Action Focus",
            text: "Directing one clear physical action (e.g., 'turning head 45 degrees') yields far cleaner results than complex compound actions."
          }
        ]
      }
    },

    // Node 7
    {
      id: "step-7",
      stepNumber: 7,
      phaseId: "phase-2",
      title: "Digital Twins & Lip-Sync Avatar Production",
      timeEstimate: "1.5 hours",
      difficulty: "Intermediate",
      summary: "Build realistic talking-head segments, expressive character avatars, or multilingual video translations at scale.",
      description: "For creators who want to scale video production without spending hours in front of a physical camera and studio lighting, AI digital twins provide an automated solution. Platforms like HeyGen, Synthesia, and Hedra allow you to create a photorealistic digital avatar of yourself or a brand character that speaks any script with synchronized lip movement, natural eye blinks, and micro-head gestures. Furthermore, AI video translation allows instant localization of existing videos into 40+ languages while preserving your voice timbre.",
      playbook: {
        setup: "Record a 2-minute training video speaking directly into a 4K camera with clear enunciation and natural hand gestures, or select a photorealistic stock persona in HeyGen.",
        execute: "Input your polished script audio or voiceover file into HeyGen/Hedra. Configure facial expression intensity, head movement dynamics, and framing (wide, medium, or close-up).",
        verify: "Scrutinize the teeth, lip edges, and neckline for unnatural blurring or warping artifacts during rapid consonant sounds (B, M, P, F)."
      },
      tools: [
        {
          name: "HeyGen",
          type: "Freemium",
          url: "https://www.heygen.com",
          description: "Market-leading AI digital twin creator and video translation platform.",
          bestFor: "Custom photo/video digital twins & multilingual translation"
        },
        {
          name: "Hedra",
          type: "Freemium",
          url: "https://www.hedra.com",
          description: "Expressive character animation engine generating stylized or photoreal talking avatars.",
          bestFor: "Fast expressive character animation from single portraits"
        },
        {
          name: "Synthesia",
          type: "Paid",
          url: "https://www.synthesia.io",
          description: "Enterprise video avatar platform for professional corporate and educational presentations.",
          bestFor: "Enterprise training & multi-language localization"
        }
      ],
      callouts: {
        mistake: "Using static talking-head avatar video continuously for 10 minutes without cutting to B-Roll, which induces uncanny valley fatigue in viewers.",
        proTip: "Use digital twins strictly as anchor shots: Show the avatar for 3–5 seconds to introduce a concept, then cut away to generative B-roll and screen recordings while the audio continues.",
        mistakes: [
          "Training an avatar with noisy background audio, which embeds permanent robotic artifacts in the mouth animation.",
          "Keeping the avatar locked at the center of the screen with identical framing across the entire video.",
          "Relying on built-in robotic TTS voices instead of feeding custom studio-grade voice files from ElevenLabs."
        ],
        proTips: [
          "Apply digital push-ins and punch-outs in your video editor to simulate multi-camera setups with a single avatar render.",
          "Use HeyGen's Video Translate feature to launch localized channels in Spanish, German, and Japanese with automatic lip-sync matching.",
          "Composite avatar renders over custom 3D background plates with a shallow depth of field blur to elevate visual production value."
        ]
      },
      promptLab: {
        recommendedModel: "HeyGen Avatar Script Optimization / Claude Presentation Coach",
        variables: [
          {
            id: "avatarFraming",
            label: "Avatar Shot Framing",
            options: [
              "Medium Close-Up (Waist-Up with Natural Gestures)",
              "Extreme Close-Up (Head and Shoulders Direct Address)",
              "Picture-in-Picture Anchor (Corner Screen Presenter)"
            ],
            defaultOption: "Medium Close-Up (Waist-Up with Natural Gestures)"
          },
          {
            id: "deliveryPacing",
            label: "Presentation Energy",
            options: [
              "Dynamic YouTube Creator (Expressive, Quick Gestures)",
              "Authoritative Educator (Steady, Measured Pacing)",
              "Executive Briefing (Calm, Minimal Movement)"
            ],
            defaultOption: "Dynamic YouTube Creator (Expressive, Quick Gestures)"
          }
        ],
        template: "Optimize the following video segment specifically for an AI Digital Twin avatar in HeyGen / Hedra formatted for [avatarFraming] and [deliveryPacing].\n\nScript Segment:\n[Paste script excerpt]\n\nOutput Requirements:\n1. Pacing & Phonetics: Format text with explicit pause points and pronunciation guides to ensure natural mouth shape formation.\n2. Gesture & Cut Cues: Mark exactly where the video editor should cut away from the avatar to B-roll to disguise avatar stillness.\n3. Micro-Action Directions: Recommend specific head tilt and facial expression triggers (e.g., [Slight nod], [Eyebrow raise on critical statistic]).",
        expectedOutputs: [
          "Avatar-optimized script with phonetic pacing and natural pause breaks",
          "Strategic B-roll cutaway schedule preventing uncanny valley fatigue",
          "Directional framing recommendations for simulated multi-camera angles"
        ]
      },
      learning: {
        resources: [
          {
            title: "HeyGen Official Avatar Creation & Studio Guidelines",
            badge: "OFFICIAL DOCS",
            url: "https://docs.heygen.com"
          },
          {
            title: "Hedra Character Animation Documentation",
            badge: "GUIDE",
            url: "https://www.hedra.com"
          }
        ]
      },
      conceptGuide: {
        title: "The Psychology of Digital Avatars and Synthetic Presenters",
        overview: "Human communication relies extensively on nonverbal facial cues: the subtle squint of skepticism, the micro-smile of agreement, and involuntary eye saccades. When early avatars failed to reproduce these micro-movements, viewers experienced the 'uncanny valley'—a visceral sense of unease. Modern generative avatar engines utilize neural radiance fields (NeRFs) and blendshape mesh tracking to synchronize phonemes with facial muscle groups. The golden rule for creators is pacing: treating the avatar as an anchor, not a monologue cage.",
        keyPoints: [
          {
            lead: "The 5-Second Anchor Rule",
            text: "Displaying an avatar for 3 to 5 seconds establishes human rapport; cutting away to rich visuals maintains cognitive engagement."
          },
          {
            lead: "Phonetic Lip Alignment",
            text: "Visemes (visual mouth shapes) must match audio plosives precisely; feeding uncompressed audio is paramount for crisp lip-sync."
          },
          {
            lead: "Global Localization Leverage",
            text: "Synthetic digital twins unlock zero-marginal-cost international expansion through automated multilingual voice and lip translation."
          }
        ]
      }
    },

    // Node 8
    {
      id: "step-8",
      stepNumber: 8,
      phaseId: "phase-3",
      title: "Text-Based Rough Cut & Automated Silence Removal",
      timeEstimate: "1 hour",
      difficulty: "Beginner",
      summary: "Edit video by editing the transcript, stripping filler words, and tightening pacing in minutes instead of hours.",
      description: "Traditional timeline video editing is notoriously tedious: scrubbing through hours of raw footage, manually slicing out 'ums', 'ahs', and awkward pauses, and aligning clips. Modern AI-first video editing flips this workflow on its head through text-based editing. In tools like Descript and Adobe Premiere Pro, you edit your video exactly like a Google Doc: deleting a sentence in the transcript instantly cuts the corresponding audio and video. Automated silence detection removes dead air across your entire timeline in a single click.",
      playbook: {
        setup: "Import your raw A-roll footage, screen recordings, and voiceover stems into Descript or CapCut Pro.",
        execute: "Run AI Automated Transcription. Use 'Remove Filler Words' to purge 'um', 'uh', and repeated phrases. Set 'Shorten Word Gaps' to automatically reduce all pauses longer than 0.5 seconds down to a crisp 0.25 seconds.",
        verify: "Play through the rough cut timeline. Ensure cuts do not clip the tail end of words or create unnatural robotic jump-cuts."
      },
      tools: [
        {
          name: "Descript",
          type: "Freemium",
          url: "https://www.descript.com",
          description: "Pioneering text-based audio/video editor with AI filler word removal and Studio Sound.",
          bestFor: "Text-based transcript editing & filler word removal"
        },
        {
          name: "CapCut Pro",
          type: "Freemium",
          url: "https://www.capcut.com",
          description: "High-velocity editor with automated pause trimming and smart scene splitting.",
          bestFor: "Rapid pause trimming & timeline assembly"
        },
        {
          name: "Adobe Premiere Pro",
          type: "Paid",
          url: "https://www.adobe.com/products/premiere.html",
          description: "Industry-standard NLE featuring text-based rough cutting and speech enhancement.",
          bestFor: "Professional multi-track text editing & XML export"
        }
      ],
      callouts: {
        mistake: "Shortening pauses to 0.0 seconds, which removes natural breathing room and makes the speaker sound frantically suffocated.",
        proTip: "Use Descript's 'Smooth Edges' or Premiere's 'Morph Cut' over jump cuts on talking head clips to digitally blend facial expressions and eliminate visible cuts.",
        mistakes: [
          "Blindly clicking 'Delete All Filler Words' without reviewing context, accidentally cutting intentional dramatic pauses.",
          "Allowing jump-cuts without punch-ins, creating visual hiccups where the speaker's head twitches unnaturally.",
          "Editing color, motion graphics, and audio before the core narrative rough cut is locked."
        ],
        proTips: [
          "Whenever you make a cut on a single talking head shot, punch in by 10-15% on the subsequent clip to disguise the edit as a multi-camera switch.",
          "Export an XML or EDL file from Descript into Premiere Pro or DaVinci Resolve if you need advanced color grading and motion graphics.",
          "Use text search to rapidly reorganize story beats: Swap entire paragraphs in your script to test alternative narrative structures."
        ]
      },
      promptLab: {
        recommendedModel: "Descript AI Actions / Claude Script Trimmer",
        variables: [
          {
            id: "pacingDensity",
            label: "Pause Gap Threshold",
            options: [
              "Snappy YouTube Pace (Trim pauses > 0.4s to 0.2s)",
              "Conversational Interview (Trim pauses > 0.8s to 0.4s)",
              "Meditative Documentary (Trim pauses > 1.2s to 0.6s)"
            ],
            defaultOption: "Snappy YouTube Pace (Trim pauses > 0.4s to 0.2s)"
          },
          {
            id: "fillerPolicy",
            label: "Filler Word Cleanup",
            options: [
              "Aggressive (Purge all filler words, repeated words, and stutters)",
              "Moderate (Remove 'ums/ahs', preserve conversational transitions)",
              "Subtle (Preserve natural speech nuances)"
            ],
            defaultOption: "Aggressive (Purge all filler words, repeated words, and stutters)"
          }
        ],
        template: "You are a Lead Post-Production Editor. Review the following raw video transcript and provide a clean rough-cut edit plan configured for [pacingDensity] and [fillerPolicy].\n\nRaw Transcript with Timestamps:\n[Paste raw transcript]\n\nExecution Deliverables:\n1. Cut List: Specify exact sentence fragments and filler phrases to eliminate immediately to maximize narrative density.\n2. Gap Reductions: Identify awkward pauses between sentences that must be trimmed to maintain high view retention.\n3. Punch-In Markers: Mark exact timestamps where the editor should punch in 1.15x on the talking head to mask jump cuts.\n4. Retention Warning: Flag any section where the speaker takes longer than 20 seconds to make a single point.",
        expectedOutputs: [
          "Cleaned transcript edit with all narrative bloat and filler words eliminated",
          "Calculated pause trimming recommendations matching target pacing density",
          "Visual punch-in map to disguise jump cuts seamlessly"
        ]
      },
      learning: {
        resources: [
          {
            title: "Descript Official Guide: Text-Based Video Editing",
            badge: "OFFICIAL DOCS",
            url: "https://www.descript.com/text-to-speech"
          },
          {
            title: "Adobe Premiere Pro: Text-Based Editing Workflows",
            badge: "GUIDE",
            url: "https://helpx.adobe.com/premiere-pro/using/text-based-editing.html"
          }
        ]
      },
      conceptGuide: {
        title: "The Velocity of Text-Based Video Editing",
        overview: "Video editing has historically been constrained by the linear timeline: scrubbing horizontally across seconds and minutes to find mistakes. Text-based editing abstracts the timeline into high-level semantic language. Large language models and automatic speech recognition (ASR) engines align word timestamps to individual video frames with millisecond precision. By decoupling narrative structuring from mechanical timeline scrubbing, creators can assemble a tight, cohesive rough cut in 15 minutes that previously consumed half a day.",
        keyPoints: [
          {
            lead: "Semantic Narrative Trimming",
            text: "Reading text reveals rambling and circular arguments far faster than listening to audio waveforms in real time."
          },
          {
            lead: "The Jump-Cut Camouflage",
            text: "Applying alternating zoom scales (100% -> 115%) across jump cuts creates the psychological illusion of a multi-camera studio."
          },
          {
            lead: "Pacing Calibration",
            text: "Trimming dead space between thoughts maintains subconscious viewer momentum and prevents boredom drop-off."
          }
        ]
      }
    },

    // Node 9
    {
      id: "step-9",
      stepNumber: 9,
      phaseId: "phase-3",
      title: "Dynamic Captions, Motion Graphics & Retention Pacing",
      timeEstimate: "1.5 hours",
      difficulty: "Intermediate",
      summary: "Add readable kinetic typography, visual callouts, and pattern interrupts every 5–8 seconds to sustain engagement.",
      description: "Over 70% of social video and short-form content is consumed with the sound muted, and even on long-form YouTube, dynamic on-screen graphics directly boost comprehension and audience retention. In this step, you generate animated kinetic typography (the 'Hormozi style' or clean modern tech subtitle), insert UI callout cards, and program visual pattern interrupts every 5–8 seconds. Using AI caption generators like Submagic and CapCut, subtitles are generated with automated emoji synthesis and keyword color highlighting.",
      playbook: {
        setup: "Import your locked rough cut into CapCut or Submagic, or launch the auto-caption engine in Adobe Premiere.",
        execute: "Generate dynamic kinetic captions: Limit text to 1–3 words per line in high-contrast typography (e.g., Plus Jakarta Sans or Montserrat Bold) with high-contrast text outlines. Automatically apply accent color fills to key trigger nouns and verbs.",
        verify: "Scrub the video on mobile preview scale. Verify that captions never obscure critical product interfaces, faces, or essential visual B-roll."
      },
      tools: [
        {
          name: "CapCut Pro",
          type: "Freemium",
          url: "https://www.capcut.com",
          description: "Viral kinetic auto-captions with word-by-word active highlighting and motion templates.",
          bestFor: "Word-by-word kinetic subtitle animations & zoom effects"
        },
        {
          name: "Submagic",
          type: "Paid",
          url: "https://submagic.co",
          description: "AI video polish suite generating dynamic emojis, sound effects, and auto-zooms.",
          bestFor: "Automated emojis, highlighted keywords & b-roll overlays"
        },
        {
          name: "After Effects",
          type: "Paid",
          url: "https://www.adobe.com/products/aftereffects.html",
          description: "Motion graphics industry benchmark for custom UI mockups, 3D tracking, and vector animations.",
          bestFor: "Custom branded motion graphics & 3D interface callouts"
        }
      ],
      callouts: {
        mistake: "Placing enormous glowing neon subtitles dead center over the speaker's nose or obscuring key software code snippets.",
        proTip: "Use motion graphics for information architecture: Every time you introduce a new list item, animate a subtle progress indicator (e.g., 'Step 2 of 4') in the upper corner.",
        mistakes: [
          "Displaying walls of text (5+ lines of subtitles at once), turning your video into an unreadable book.",
          "Overusing obnoxious cartoon emojis and flashing rainbow colors on technical engineering tutorials.",
          "Leaving captions in the bottom 20% of vertical videos where platform UI buttons (Like, Share, Comments) block them."
        ],
        proTips: [
          "Position subtitles in the 'Safe Zone' (between 30% and 45% from the bottom of the screen) to avoid all platform interface overlays.",
          "Sync a subtle tactile 'pop' or 'click' sound effect precisely to the entry frame of key animated text callouts.",
          "Use kinetic typography selectively: Ramp up word-by-word captions during high-intensity hooks, and transition to minimal lower-thirds during tutorials."
        ]
      },
      promptLab: {
        recommendedModel: "CapCut Style Template / Claude Motion Graphics Planner",
        variables: [
          {
            id: "captionStyle",
            label: "Typography & Kinetic Style",
            options: [
              "Clean Tech Minimalist (White text, purple keyword highlight, subtle drop shadow)",
              "High-Impact Kinetic (Bold uppercase, yellow/green punch, scale bounce)",
              "Editorial Documentary (Classic serif, elegant lower-third fade, zero emojis)"
            ],
            defaultOption: "Clean Tech Minimalist (White text, purple keyword highlight, subtle drop shadow)"
          },
          {
            id: "targetFormat",
            label: "Aspect Ratio & Platform",
            options: [
              "16:9 Desktop YouTube Landscape",
              "9:16 Vertical (TikTok, Reels, YouTube Shorts)",
              "1:1 Square (LinkedIn & Twitter/X Feed)"
            ],
            defaultOption: "16:9 Desktop YouTube Landscape"
          }
        ],
        template: "You are a Master Motion Graphics Designer and Video Retention Specialist. Design a complete On-Screen Text & Motion Graphics Plan for a video formatted in [targetFormat] adhering to the [captionStyle] aesthetic.\n\nScript Segment:\n[Paste script excerpt]\n\nDeliverables:\n1. Kinetic Subtitle Specification: Font family, size, line spacing, active word highlight color, and screen position safe-zone coordinates.\n2. Visual Pattern Interrupts: Identify 3 exact moments where a visual change is required (e.g., split-screen diagram, subtle camera punch-in, animated lower-third badge).\n3. On-Screen Callout Cards: Design 2 concise graphic summary cards (Title + 3 bullet points) to reinforce complex technical concepts.\n4. Audio-Visual Sync: Specify exact SFX pairings (e.g., whoosh, digital click, sub-bass drop) for graphic entries.",
        expectedOutputs: [
          "Safe-zone compliant typography specifications matching target aesthetic",
          "Pacing timetable of visual pattern interrupts every 5–8 seconds",
          "Audio-visual sync map pairing animated graphics with tactile sound effects"
        ]
      },
      learning: {
        resources: [
          {
            title: "CapCut Official Kinetic Text Guide",
            badge: "OFFICIAL DOCS",
            url: "https://www.capcut.com"
          },
          {
            title: "Submagic Creator Academy: Retention Pacing",
            badge: "GUIDE",
            url: "https://submagic.co/blog"
          }
        ]
      },
      conceptGuide: {
        title: "The Neurochemistry of Pattern Interrupts & Kinetic Typography",
        overview: "The human optical nerve is wired to detect motion and novelty; in natural environments, stationary objects fade into background perception while moving objects trigger immediate alertness. In digital video, keeping a static shot on screen for more than 6 seconds causes subconscious eye glaze and viewer distraction. By introducing micro-animations—such as word-level subtitle illuminations, directional arrows, and zoom pulses—creators continuously reset the viewer's attention clock without breaking narrative immersion.",
        keyPoints: [
          {
            lead: "The 6-Second Attention Reset",
            text: "Every 5 to 7 seconds, the visual canvas must deliver a fresh piece of optical information to prevent passive distraction."
          },
          {
            lead: "Cognitive Dual-Coding",
            text: "Simultaneously hearing a word while seeing its highlighted visual form doubles message comprehension and recall."
          },
          {
            lead: "Platform Safe Zones",
            text: "Never place text near screen edges where mobile operating systems, platform usernames, and action buttons obscure reading."
          }
        ]
      }
    },

    // Node 10
    {
      id: "step-10",
      stepNumber: 10,
      phaseId: "phase-3",
      title: "Custom AI Soundtracks, SFX & Audio Mastering",
      timeEstimate: "1.5 hours",
      difficulty: "Intermediate",
      summary: "Generate royalty-free background stems, tactile sound effects, risers, whooshes, and master audio to broadcast LUFS levels.",
      description: "Sound design is 50% of the emotional experience of video. Traditional stock music libraries are generic, repetitive, and vulnerable to copyright strikes. With generative audio AI engines like Suno and Udio, creators can compose bespoke, genre-bending background scores that perfectly match the pacing and tonal transitions of their script. Paired with ElevenLabs Sound Effects for custom cinematic whooshes, risers, and UI clicks, your audio landscape feels dynamic, tactile, and broadcast-ready.",
      playbook: {
        setup: "Identify your video's emotional inflection points: Ambient intrigue in the intro, rhythmic driving momentum in the tutorial, and triumphant resolution at the climax.",
        execute: "Prompt Suno or Udio for instrumental background stems specifying BPM, genre blend (e.g., 'Minimalist ambient synthwave, low-fi beat, 115 BPM, no vocals, soft bassline'). Generate tactile SFX in ElevenLabs for transitions. Mix voiceover to -16 LUFS (YouTube standard) with background music ducked to -24 LUFS.",
        verify: "Listen on both professional studio headphones and cheap smartphone speakers. Ensure voiceover remains crystal clear and never fights the musical soundtrack."
      },
      tools: [
        {
          name: "Suno",
          type: "Freemium",
          url: "https://suno.com",
          description: "Generative music AI creating full-fidelity instrumental soundtracks and adaptive stems.",
          bestFor: "Custom instrumental background music & tonal stems"
        },
        {
          name: "Udio",
          type: "Freemium",
          url: "https://udio.com",
          description: "High-fidelity music generation engine with modular track extensions and genre blending.",
          bestFor: "Complex musical arrangements & cinematic scores"
        },
        {
          name: "ElevenLabs SFX",
          type: "Freemium",
          url: "https://elevenlabs.io",
          description: "Text-to-sound-effects generator creating custom cinematic risers, whooshes, and UI clicks.",
          bestFor: "Bespoke tactile sound effects & cinematic transitions"
        }
      ],
      callouts: {
        mistake: "Allowing background music to overpower the voiceover, forcing viewers to strain their ears to comprehend instructions.",
        proTip: "Use dynamic audio ducking (sidechain compression): Configure your editor to automatically lower music volume by 4-6dB whenever the voiceover track is active, and bring it up during silent visual beats.",
        mistakes: [
          "Generating music tracks with AI vocals or heavy vocal chops that clash directly with the spoken narrator.",
          "Using piercing, loud whoosh transitions that shock the listener's eardrums on headphones.",
          "Failing to master audio to -14 to -16 Integrated LUFS, causing YouTube's audio normalizer to drastically compress your mix."
        ],
        proTips: [
          "Apply an EQ mid-scoop (cut 2-3dB at 1kHz–3kHz) on your background music track to carve out dedicated sonic space for the human voice.",
          "Use low-frequency sub-bass drops (60Hz–80Hz) sparingly to punctuate high-stakes revelations or dramatic statistical claims.",
          "Fade music out completely for 2 seconds right before delivering your video's most important punchline to command total audience focus."
        ]
      },
      promptLab: {
        recommendedModel: "Suno v3.5 / Udio v1.5 / ElevenLabs SFX Prompt Engine",
        variables: [
          {
            id: "musicMood",
            label: "Musical Atmosphere & Genre",
            options: [
              "Dark Cyber Ambient: Analog synthesizers, subtle bass pulse, 110 BPM, mysterious",
              "Lo-Fi Chill Hop: Warm vinyl crackle, mellow piano chords, relaxed head-nod groove, 85 BPM",
              "Cinematic Hybrid Orchestral: Subtle cello drones, electronic pulses, rising tension, 125 BPM"
            ],
            defaultOption: "Dark Cyber Ambient: Analog synthesizers, subtle bass pulse, 110 BPM, mysterious"
          },
          {
            id: "sfxType",
            label: "Transition Sound Effect",
            options: [
              "Modern Tech UI: Crisp glass click, subtle digital blip, high frequency",
              "Cinematic Impact: Heavy sub-bass boom, distant thunder rumble, slow decay",
              "Fast Whip Transition: Smooth organic whoosh, vacuum air suction"
            ],
            defaultOption: "Modern Tech UI: Crisp glass click, subtle digital blip, high frequency"
          }
        ],
        template: "You are a Master Sound Designer and Music Producer. Formulate precise generative audio prompts for Suno/Udio and ElevenLabs SFX to score a high-retention tech video.\n\nMusical Vibe: [musicMood]\nTransition Cue: [sfxType]\n\nTask 1: Suno / Udio Instrumental Prompt\n- Style tags: [musicMood], instrumental, no vocals, high production quality, broadcast master\n- Negative prompt: vocal chops, distorted guitar, sudden tempo changes\n\nTask 2: ElevenLabs Sound Effects Prompts\n- Provide 3 distinct text-to-SFX prompts for: (A) Text Entry Pop, (B) Scene Transition Whoosh, (C) High-Stakes Impact Boom.\n\nTask 3: Mixing & Mastering Specifications\n- Specify exact target LUFS, sidechain ducking thresholds, and master EQ cuts.",
        expectedOutputs: [
          "Production-ready generative music prompts with genre tags and BPM specs",
          "3 distinct ElevenLabs text-to-sound-effects prompt strings",
          "Precise audio engineering mixing targets (-14 LUFS, sidechain ducking ratio)"
        ]
      },
      learning: {
        resources: [
          {
            title: "Suno AI Music Generation Documentation",
            badge: "OFFICIAL DOCS",
            url: "https://suno.com"
          },
          {
            title: "YouTube Loudness Standards (-14 LUFS Specification)",
            badge: "GUIDE",
            url: "https://support.google.com/youtube/answer/3321985"
          }
        ]
      },
      conceptGuide: {
        title: "The Subconscious Power of Audio Engineering",
        overview: "While visual perception is directional (you only see what is in front of your eyes), auditory perception is omnidirectional and subconscious. Viewers process emotional cues from music, bass frequencies, and atmospheric silence without consciously analyzing them. Professional video producers treat the audio mix as an emotional steering wheel: building tension with subtle risers, signaling intellectual satisfaction with warm chords, and commanding hyper-focus with deliberate silence.",
        keyPoints: [
          {
            lead: "The Masking Effect",
            text: "Voiceover clarity requires cutting the frequencies in the music track where the human voice naturally lives (1kHz–4kHz)."
          },
          {
            lead: "The Loudness War & LUFS",
            text: "YouTube normalizes all video audio to -14 LUFS; mastering louder causes the platform to compress your dynamic range flat."
          },
          {
            lead: "Tactile Haptics Through Audio",
            text: "Subtle tactile sound effects make digital on-screen graphics feel heavy, physical, and expensive."
          }
        ]
      }
    },

    // Node 11
    {
      id: "step-11",
      stepNumber: 11,
      phaseId: "phase-4",
      title: "High-CTR Thumbnail Engineering & Packaging",
      timeEstimate: "1.5 hours",
      difficulty: "Advanced",
      summary: "Design 3-element high-contrast thumbnails and test title-and-thumbnail curiosity gaps to maximize click-through rate.",
      description: "You can produce the most transformative video in the world, but if nobody clicks on the thumbnail, your view count is zero. The thumbnail and title are not a post-production afterthought—they represent 50% of your video's success. Professional thumbnail engineering follows the Rule of 3 Elements: Subject, Environment, and Action/Text. Using Midjourney, Photoshop Generative Fill, and Figma, you craft high-contrast, uncluttered thumbnails that create an irresistible curiosity gap when paired with the title.",
      playbook: {
        setup: "Analyze the top 10 competing thumbnails in your niche. Identify the dominant color palette (e.g., all blue and black) and deliberately pick an opposing high-contrast accent color (e.g., neon yellow or electric orange).",
        execute: "Synthesize your visual subject in Midjourney with extreme facial expressions or contrasting physical objects. Use Photoshop Generative Fill to expand the canvas to 1280x720 and remove distracting clutter. Add maximum 3-4 words of punchy text in Figma using heavy sans-serif typography with high drop-shadow contrast.",
        verify: "Run the thumbnail through a 2-second Squint Test at 150px thumbnail scale (simulating mobile feeds). If the focal point and emotional tension are not immediately obvious within 500 milliseconds, simplify the layout."
      },
      tools: [
        {
          name: "Midjourney",
          type: "Paid",
          url: "https://www.midjourney.com",
          description: "Generates high-contrast, expressive subjects, dramatic lighting, and 3D concept assets.",
          bestFor: "High-contrast expressive subjects & cinematic backdrops"
        },
        {
          name: "Photoshop Generative Fill",
          type: "Paid",
          url: "https://www.photoshop.com",
          description: "AI inpainting and outpainting to expand canvas dimensions and cleanly remove background clutter.",
          bestFor: "Canvas outpainting, asset clean-up & subject isolation"
        },
        {
          name: "Figma",
          type: "Freemium",
          url: "https://www.figma.com",
          description: "Rapid thumbnail composition, vector typography, color grading, and A/B variant testing.",
          bestFor: "Vector typography, contrast verification & layout composition"
        }
      ],
      callouts: {
        mistake: "Repeating the exact words from the video title inside the thumbnail image, wasting valuable packaging real estate.",
        proTip: "Make the title and thumbnail complement each other like a setup and punchline: The title creates the question, and the thumbnail shows the emotional consequence.",
        mistakes: [
          "Cramming 5+ complex visual elements into a single frame, creating visual noise that dissolves on mobile screens.",
          "Using low-contrast color combinations (e.g., dark gray text on a black background) that are unreadable in dark mode feeds.",
          "Over-promising with deceptive clickbait that is completely disconnected from the actual video content, spiking 15-second drop-offs."
        ],
        proTips: [
          "Always test your thumbnail in YouTube's native light and dark mode feed previews before publishing.",
          "Render at least 3 distinct thumbnail concepts (Curiosity vs. Shock vs. Diagrammatic Blueprint) to run YouTube native A/B/C tests.",
          "Boost local contrast and saturation on the primary focal point by 15-20% to stand out on dimmed mobile displays."
        ]
      },
      promptLab: {
        recommendedModel: "Midjourney v6.1 / Claude Packaging Strategist",
        variables: [
          {
            id: "thumbnailConcept",
            label: "Visual Framing Strategy",
            options: [
              "Before vs. After Transformation (Split Screen Contrast)",
              "Extreme Curiosity Object (Mysterious Tech Hardware / Diagram)",
              "Expressive Human Reaction (Shocked Engineer, Dramatic Studio Lighting)"
            ],
            defaultOption: "Before vs. After Transformation (Split Screen Contrast)"
          },
          {
            id: "contrastTheme",
            label: "Color Contrast Scheme",
            options: [
              "Dark Graphite Canvas with Electric Yellow / Amber Punch",
              "Clean Arctic White with Cobalt Blue / Purple Accents",
              "Neon Cyberpunk Cyan vs. Deep Crimson Red"
            ],
            defaultOption: "Dark Graphite Canvas with Electric Yellow / Amber Punch"
          }
        ],
        template: "You are a World-Class YouTube Thumbnail Designer and Packaging Strategist. Design a high-CTR thumbnail concept and matching title pair for an engineering video.\n\nVideo Subject: [Insert Topic]\nVisual Strategy: [thumbnailConcept]\nColor Palette: [contrastTheme]\n\nDeliverables:\n1. Title & Thumbnail Synergy: Provide (A) 1 High-CTR Title (<45 characters) and (B) 1 Thumbnail Punchline (Maximum 3 words).\n2. The 3-Element Breakdown: Detail exactly what constitutes (1) The Focal Subject, (2) The Supporting Environment, (3) The Visual Curiosity Trigger.\n3. Midjourney v6.1 Prompt: Provide the exact /imagine prompt for synthesizing the primary thumbnail subject with cinematic lighting, extreme contrast, and isolated clean background.\n4. Mobile Squint Test Verification: Explain why this composition will pop on a 4.7-inch mobile screen in dark mode.",
        expectedOutputs: [
          "Curiosity-paired title and 3-word thumbnail punchline",
          "Strict 3-element composition breakdown eliminating all visual clutter",
          "Production-ready Midjourney v6.1 prompt for the primary high-contrast subject"
        ]
      },
      learning: {
        resources: [
          {
            title: "YouTube Creator Academy: Thumbnail & Packaging Best Practices",
            badge: "OFFICIAL DOCS",
            url: "https://creatoracademy.youtube.com"
          },
          {
            title: "Figma Community: YouTube Thumbnail Previewer Component",
            badge: "WORKFLOW",
            url: "https://www.figma.com/community"
          }
        ]
      },
      conceptGuide: {
        title: "The Visual Science of Impression Click-Through Rate",
        overview: "In a mobile YouTube feed, users scroll past dozens of video options per second. Human visual processing filters out familiar patterns instantly. To earn a click, a thumbnail must deliver a high-contrast visual interrupt within 300 milliseconds. Packaging is not about deceptive clickbait; it is about cognitive clarity. By presenting three uncluttered visual elements that form a curiosity gap with the title, creators respect the viewer's attention and spark genuine intellectual desire to discover the answer.",
        keyPoints: [
          {
            lead: "The Rule of Three Elements",
            text: "Never exceed three visual focal points in a thumbnail: Subject, Context, and Tension Marker."
          },
          {
            lead: "The Setup and Punchline Dynamic",
            text: "The title should ask the question or state the premise; the thumbnail should depict the emotional or physical consequence."
          },
          {
            lead: "The Mobile Squint Test",
            text: "Over 75% of YouTube impressions occur on small mobile screens; if the thumbnail is unreadable at 150 pixels width, it will fail."
          }
        ]
      }
    },

    // Node 12
    {
      id: "step-12",
      stepNumber: 12,
      phaseId: "phase-4",
      title: "Multi-Platform Repurposing & Short-Form Clipping",
      timeEstimate: "1.5 hours",
      difficulty: "Intermediate",
      summary: "Extract high-retention vertical shorts for TikTok, Reels, and YouTube Shorts and schedule cross-platform distribution.",
      description: "A finished long-form video should never live in isolation. A single 10-minute master video contains between 3 and 7 standalone high-value insights that can be extracted into vertical short-form clips. Using generative AI clipping engines like OpusClip, your master video is analyzed for narrative hooks, punchlines, and virality scores. The AI automatically reframes the video to 9:16 vertical, centers the active speaker with face tracking, generates animated captions, and prepares multi-platform distribution across YouTube Shorts, Instagram Reels, TikTok, and LinkedIn.",
      playbook: {
        setup: "Paste your finished YouTube video link or upload the master 4K MP4 export into OpusClip or CapCut Pro.",
        execute: "Set OpusClip to extract clips with a Virality Score >= 80. Fine-tune the 9:16 AI Auto-Reframe to keep the active speaker and software code in view. Edit the clip's hook to ensure the opening 3 seconds deliver immediate value.",
        verify: "Schedule the vertical clips across YouTube Shorts, Instagram Reels, TikTok, and LinkedIn using Buffer, staggered over a 14-day cadence."
      },
      tools: [
        {
          name: "OpusClip",
          type: "Freemium",
          url: "https://www.opus.pro",
          description: "AI video repurposing tool analyzing long-form videos to extract high-scoring viral shorts with auto-reframe.",
          bestFor: "Automated viral short extraction & speaker reframing"
        },
        {
          name: "CapCut Pro",
          type: "Freemium",
          url: "https://www.capcut.com",
          description: "Fast vertical timeline editor for trimming extracted clips and adding custom hooks.",
          bestFor: "Manual vertical short trimming & custom kinetic overlays"
        },
        {
          name: "Buffer",
          type: "Freemium",
          url: "https://buffer.com",
          description: "Multi-channel social media scheduler for automated multi-platform distribution.",
          bestFor: "Multi-platform scheduling & performance analytics"
        }
      ],
      callouts: {
        mistake: "Clipping arbitrary middle sections of your video without an independent hook, making the short-form clip confusing and contextless.",
        proTip: "Every vertical short must function as an independent, complete story: Hook -> Value Delivery -> Resolution. Never end a short on 'watch the full video on YouTube' without delivering a payoff first.",
        mistakes: [
          "Posting the exact same caption text and hashtags across TikTok, YouTube Shorts, and LinkedIn without platform adaptation.",
          "Allowing vertical crops to cut off software interface menus, leaving viewers unable to see what the speaker is clicking.",
          "Dumping all 5 extracted clips on the same day instead of distributing them systematically over two weeks."
        ],
        proTips: [
          "Use YouTube Shorts' 'Related Video' linking feature to pin your master long-form video directly inside the short's mobile playback UI.",
          "Format LinkedIn video clips with an authoritative text summary and PDF slide deck to cater to enterprise B2B audiences.",
          "Monitor 24-hour retention curves on vertical clips to identify which sub-topics in your niche generate the highest share rates."
        ]
      },
      promptLab: {
        recommendedModel: "OpusClip Viral Scoring / Claude Social Copywriter",
        variables: [
          {
            id: "targetAudience",
            label: "Repurposing Distribution Channel",
            options: [
              "YouTube Shorts & Instagram Reels (Developer / Tech Audience)",
              "TikTok (Fast, Trend-Forward, High Energy)",
              "LinkedIn Video (Professional B2B Thought Leadership)"
            ],
            defaultOption: "YouTube Shorts & Instagram Reels (Developer / Tech Audience)"
          },
          {
            id: "clipStyle",
            label: "Short-Form Hook Format",
            options: [
              "The Mind-Bending Shortcut / Secret Hack",
              "The Painful Mistake Everyone Makes",
              "The Rapid 30-Second Tutorial Breakdown"
            ],
            defaultOption: "The Mind-Bending Shortcut / Secret Hack"
          }
        ],
        template: "You are a Viral Social Media Growth Director and Video Repurposing Specialist. Review the following long-form video transcript excerpt and engineer a high-retention 45-second vertical clip optimized for [targetAudience] using [clipStyle].\n\nLong-Form Transcript Excerpt:\n[Paste 1-2 minutes of video transcript]\n\nDeliverables:\n1. 45-Second Vertical Script Cut: Edit the excerpt into an airtight standalone script that hooks within 2 seconds, delivers 1 transformative takeaway, and resolves cleanly.\n2. On-Screen Caption Headline: A high-contrast, safe-zone hook text header (e.g., 'Stop Prompting ChatGPT Like This').\n3. Platform-Specific Copy & Hooks: Write 3 tailored post captions for (A) YouTube Shorts, (B) Instagram Reels, (C) LinkedIn, including platform-specific CTA and hashtag strategy.\n4. Call-to-Action Bridge: A natural verbal CTA that nudges interested viewers to the full-length master video without feeling spammy.",
        expectedOutputs: [
          "Standalone 45-second vertical script with 2-second hook and definitive payoff",
          "High-contrast headline hook text for vertical mobile placement",
          "Tailored social copy for YouTube Shorts, Instagram Reels, and LinkedIn"
        ]
      },
      learning: {
        resources: [
          {
            title: "OpusClip Official Creator Academy & Virality Scoring Guide",
            badge: "OFFICIAL DOCS",
            url: "https://www.opus.pro/blog"
          },
          {
            title: "Buffer: Multi-Channel Social Video Scheduling",
            badge: "GUIDE",
            url: "https://buffer.com/resources"
          }
        ]
      },
      conceptGuide: {
        title: "The Multiplier Effect of Content Repurposing",
        overview: "Producing high-caliber long-form video requires immense cognitive and computational energy. Releasing a video once on a single platform captures only a tiny fraction of its potential audience reach. Different demographics consume content through disparate media habits: developers consume long-form YouTube tutorials, executives browse LinkedIn on desktop, and junior engineers discover new tools via vertical video feeds. Repurposing decomposes a monolithic asset into modular narrative units, turning one production cycle into a continuous 14-day distribution flywheel.",
        keyPoints: [
          {
            lead: "The Standalone Value Requirement",
            text: "Every short-form clip must provide complete standalone satisfaction; clips that withhold the punchline fail to convert subscribers."
          },
          {
            lead: "Algorithmic Discovery Flywheels",
            text: "Short-form video acts as an algorithmic discovery funnel, continuously directing net-new viewers back into your catalog."
          },
          {
            lead: "Platform Native Adaptation",
            text: "Never copy-paste identical captions across platforms; adapt the contextual frame to respect each platform's community culture."
          }
        ]
      }
    }
  ]
};
