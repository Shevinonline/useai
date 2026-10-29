// Complete production-grade steps data for "AI YouTube Faceless & Shorts Engine" Roadmap (10 Nodes)

export const aiYoutubeFacelessShortsEngineData = {
  id: "ai-youtube-faceless-shorts-engine",
  title: "AI YouTube Faceless & Shorts Engine",
  description: "Build an automated content pipeline for high-retention short-form and faceless documentary channels.",
  category: "Role & Workflow Roadmaps",
  stepCount: 10,
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: Outlier Discovery, Hook Architecture & Formulaic Scripting",
      description: "Identify high-RPM outlier video ideas across finance, tech, and history, architect 5-second psychological pattern interrupts, and draft retention-driven scripts with continuous open loops."
    },
    {
      id: "phase-2",
      title: "Phase 2: Consistent Visual Generation & Cinematic Narration",
      description: "Direct emotive voice clones with custom pacing and pauses, synthesize character-consistent cinematic Midjourney visuals, and generate 4K motion camera pushes with Runway and Kling AI."
    },
    {
      id: "phase-3",
      title: "Phase 3: Retention-Driven Editing, Dynamic Captions & Sound Design",
      description: "Execute transcript-based pacing cuts, synchronize visual assets to audio beats, drop kinetic typography animations, and layer immersive spatial sound effects and risers."
    },
    {
      id: "phase-4",
      title: "Phase 4: High-CTR Packaging, A/B Testing & Channel Growth Ops",
      description: "Engineer 3-element high-contrast thumbnails, run multi-variant YouTube Studio A/B packaging tests, and syndicate automated vertical Shorts across TikTok and Instagram Reels."
    }
  ],
  steps: [
    // Node 1
    {
      id: "step-1",
      stepNumber: 1,
      phaseId: "phase-1",
      title: "Outlier Video Mining & High-RPM Niche Selection",
      timeEstimate: "1.5 hrs",
      difficulty: "Beginner",
      summary: "Find videos that out-performed a channel's average views by 500%+ in finance, tech, history, and psychology niches with $10+ RPM potential.",
      description: "The biggest failure mode in faceless YouTube channels is creating high-effort content in low-RPM or saturated niches without algorithmic validation. Professional media operations begin by identifying 'outlier videos'—topics that generated 5x to 20x the subscriber count of smaller channels within the last 60 days. Combining algorithmic outlier analytics with high-CPM verticals (such as business history, macroeconomic crisis, cyber warfare, or modern stoicism) ensures your channel captures high viewer intent and earns $8 to $25 per thousand views.",
      playbook: {
        setup: "Set up 1of10 or VidIQ Competitor Tracker. Filter for channels with under 50k subscribers that published a video with over 250k views within the last 90 days. Shortlist topics in finance, geopolitical intelligence, or tech history.",
        execute: "Extract the core hook premise, packaging formula, and thumbnail composition from 5 validated outliers. Calculate estimated niche RPM by cross-referencing advertiser bidding density in Google Ads Keyword Planner.",
        verify: "Confirm the selected concept achieves an Outlier Multiplier of at least 4.0x (Views / Channel Average Subscribers) and targets an established evergreen search and browse search intent."
      },
      tools: [
        {
          name: "1of10",
          type: "Paid",
          url: "https://1of10.com",
          description: "Specialized YouTube outlier discovery platform that identifies viral anomalies from small channels across all global niches.",
          bestFor: "Outlier video topic discovery & viral thumbnail pattern analysis"
        },
        {
          name: "VidIQ",
          type: "Freemium",
          url: "https://vidiq.com",
          description: "YouTube SEO and competitive intelligence suite offering keyword search volume, historical view velocity, and competitor tracking.",
          bestFor: "Keyword search volume, VPH (Views Per Hour) & competitor tracking"
        },
        {
          name: "YouTube Search",
          type: "Free",
          url: "https://www.youtube.com",
          description: "Native search and incognito filtering tool to inspect competitor view-to-subscriber ratios, upload frequencies, and monetization indicators.",
          bestFor: "Manual competitor audit & incognito browse validation"
        }
      ],
      callouts: {
        mistake: "Choosing generic low-RPM niches like motivational quotes or meme compilations where RPM hovers around $0.80 and advertiser monetization is demonetized for reused content.",
        proTip: "Look for channels with fewer than 10,000 subscribers whose 3 most recent videos each exceeded 100,000 views; the algorithm is starving for that specific sub-topic.",
        mistakes: [
          "Targeting broad saturated topics (e.g. 'How to Get Rich') without a distinct narrative angle or provocative premise.",
          "Ignoring upload date filters and replicating topics that went viral 3 years ago under different algorithmic and market conditions.",
          "Failing to check YouTube Monetization policies regarding automated text-to-speech content, resulting in channel rejection during partner review."
        ],
        proTips: [
          "Target niches with high consumer affiliate intent (software, business banking, wealth preservation) to earn 5x more than AdSense alone.",
          "Use the '1of10 Outlier Score' to spot breakout topics before the broader creator community floods the niche.",
          "Bookmark the top 20 channels in your target sub-niche into a dedicated private YouTube feed to monitor real-time weekly thumbnail trends."
        ]
      },
      promptLab: {
        title: "High-RPM YouTube Outlier Concept Synthesizer",
        description: "Analyze competitor outlier metrics and synthesize 5 viral video angles engineered for high-RPM faceless documentaries or vertical Shorts.",
        variables: [
          {
            name: "Channel Niche",
            label: "Channel Niche",
            options: ["Business & Dark Corporate History", "Macroeconomics & Wealth Preservation", "Cybersecurity & Geopolitical Warfare", "Modern Stoicism & Behavioral Psychology"],
            default: "Business & Dark Corporate History"
          },
          {
            name: "Target Format",
            label: "Target Format",
            options: ["8-12 Min Long-Form Mini-Documentary", "60-Second Fast-Paced Short/Reel", "15-20 Min Deep-Dive Investigation"],
            default: "8-12 Min Long-Form Mini-Documentary"
          },
          {
            name: "Outlier Reference Angle",
            label: "Outlier Reference Angle",
            options: ["Unprecedented Corporate Bankruptcy Scandal", "Covert Military Intelligence Blunder", "The Trillion-Dollar Supply Chain Monopoly"],
            default: "Unprecedented Corporate Bankruptcy Scandal"
          }
        ],
        template: `You are an elite YouTube strategist and creative director managing top faceless documentary and high-RPM YouTube automation channels.

Analyze this video opportunity:
- Channel Niche: [Channel Niche]
- Target Format: [Target Format]
- Outlier Reference Angle: [Outlier Reference Angle]

Please formulate:
1. 3 High-CTR Title Options: Built around curiosity gaps, specific numbers, and high-stakes framing (under 50 characters).
2. The Outlier Hypothesis: Why this topic outperforms baseline channel uploads by 500%+ (psychological triggers, controversy, or scarcity).
3. Estimated RPM Range & Advertiser Profile: Expected AdSense RPM and primary sponsor categories.
4. Core Narrative Anchor: The single protagonist, corporation, or event that drives the entire storyline.`,
        expectedOutput: `### YouTube Outlier Strategy Brief

#### 1. High-CTR Title Angles
- **Angle A (High Tension):** *"How One Bad Bet Bankrupted a $120B Titan"* (46 chars)
- **Angle B (Curiosity Gap):** *"The Secret Monopoly Behind 92% of World Shipping"* (49 chars)
- **Angle C (Shock Revelation):** *"Why Wall Street Quietly Erased This CEO"* (41 chars)

#### 2. The Outlier Hypothesis
> **Core Psychological Driver:** *Extreme Schadenfreude & Systemic Injustice.* Audiences are fascinated by untouchable corporate elites who collapse due to hubris. This topic achieves an estimated **7.2x Outlier Score** because it challenges the assumption that multi-billion-dollar conglomerates are immune to catastrophic failure.

#### 3. Monetization & RPM Profile
- **Estimated AdSense RPM:** **$14.50 – $22.00 USD** (Tier-1 audiences: US, UK, Canada, Australia).
- **Primary Advertisers:** Enterprise cloud infrastructure, business banking (Brex, Mercury), fintech brokerages, and cyber insurance providers.
- **Back-End Monetization:** Sponsored mid-roll integrations ($2,500–$5,000 per 100k views) and premium affiliate software links.

#### 4. Core Narrative Anchor
- **Central Subject:** The internal trading desks of Enron / Lehman / Wirecard in the final 72 hours before collapse.
- **Narrative Conflict:** A lone risk analyst discovers a fatal accounting discrepancy while executive leadership liquidates personal stock options.`
      },
      conceptGuide: {
        title: "Algorithmic Outlier Mining & Advertiser RPM Economics",
        overview: "The YouTube recommendation algorithm is an audience-matching system optimizing for Session Time and Satisfaction. Rather than trying to predict what the algorithm wants, creators look for mathematical anomalies: videos that generated extraordinary view velocities relative to the channel's baseline subscriber size. In faceless automation channels, selecting high-RPM topics (business, technology, cybersecurity) allows creators to generate equivalent revenue with 100,000 views compared to a gaming or entertainment channel requiring 1,500,000 views.",
        keyPoints: [
          "**The Outlier Ratio Rule:** Never start production on a topic unless you can point to at least two small channels that gained 50,000+ views on that concept within the last 90 days.",
          "**Advertiser Bidding Density:** Finance, enterprise tech, and wealth preservation niches attract high commercial ad bids, yielding $12–$25 RPMs versus $1–$2 in entertainment.",
          "**Title-Topic Resonance:** A brilliant video attached to a boring topic will fail; packaging and topic selection account for 80% of click-through velocity."
        ]
      },
      learning: {
        resources: [
          {
            title: "1of10 Algorithmic Outlier Discovery Guide",
            url: "https://1of10.com",
            type: "Creator Guide"
          },
          {
            title: "YouTube Monetization Policies & Reused Content Guidelines",
            url: "https://support.google.com/youtube/answer/1311392",
            type: "Official Docs"
          },
          {
            title: "VidIQ High-CPM Keyword & RPM Benchmark Report",
            url: "https://vidiq.com/blog/post/youtube-rpm-vs-cpm/",
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
      title: "The First 5 Seconds: Pattern Interrupts & Hook Engineering",
      timeEstimate: "1 hr",
      difficulty: "Intermediate",
      summary: "Structure irresistible visual and psychological hooks that prevent swiping on Shorts and build instant curiosity gaps for long-form videos.",
      description: "On YouTube Shorts, 60% of all swiping occurs within the first 1.8 seconds. On long-form videos, 40% of viewers drop off before the 60-second mark. Elite faceless creators engineer rigorous 'Pattern Interrupts' combining instant high-stakes audio statements, rapid visual pans, on-screen text, and unanswered questions. Eliminating greetings, introductory logos, and throat-clearing ensures viewers are immediately pulled into an unresolved narrative cliffhanger.",
      playbook: {
        setup: "Review the title and thumbnail premise established in Node 1. Identify the single most shocking statistic, quote, or visual anomaly in your story. Open Claude 3.7 Sonnet.",
        execute: "Draft 3 distinct hook variations: 1) The 'Mid-Crisis In Media Res' Hook (plunging into the climax), 2) The 'Unbelievable Metric' Hook (contrasting two extreme numbers), and 3) The 'Common Knowledge Reversal' Hook ('Everything you were told about X is a lie').",
        verify: "Time the opening line: ensure the primary narrative question is vocalized within the first 4.5 seconds and pairs with a jarring visual transition on the 1.5-second mark."
      },
      tools: [
        {
          name: "Claude 3.7 Sonnet",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Frontier reasoning model with deep understanding of pacing cadence, curiosity gaps, and retention hook architecture.",
          bestFor: "Shorts & long-form hook iteration and open loop design"
        },
        {
          name: "ChatGPT",
          type: "Freemium",
          url: "https://chatgpt.com",
          description: "Conversational AI ideal for brainstorming fast punchy 10-word opening lines and pattern interrupt phrases.",
          bestFor: "Rapid short-form opening punchline brainstorming"
        },
        {
          name: "Notion",
          type: "Freemium",
          url: "https://www.notion.so",
          description: "Clean workspace database for cataloging top-performing YouTube hook swipe files and visual transition ideas.",
          bestFor: "Hook swipe files & retention drop-off analytics logging"
        }
      ],
      callouts: {
        mistake: "Opening a video with 'Hey guys, welcome back to the channel, today we're going to talk about...' which guarantees a 70% immediate swipe-away rate.",
        proTip: "Never use the words 'In this video'; instead, start immediately with an action verb, a dollar amount, or an active consequence.",
        mistakes: [
          "Failing to visually reinforce the promise made on the thumbnail in the first 3 seconds, causing viewers to think they were clickbaited.",
          "Using slow atmospheric music fades at the start instead of an immediate sound effect impact, riser, or spoken punchline.",
          "Answering the hook question too early in the first 30 seconds, removing the reason for the viewer to stay until the end."
        ],
        proTips: [
          "For YouTube Shorts, start speaking on frame 0 with zero dead silence; add a micro-zoom on every 1.5-second beat.",
          "Plant a 'Double Open Loop': open loop #1 introduces the immediate mystery, while loop #2 teases the shocking consequence revealed at minute 8.",
          "Record your hook voiceover with 10% higher vocal energy and pitch than the rest of the documentary narrative."
        ]
      },
      promptLab: {
        title: "5-Second YouTube Retention Hook Generator",
        description: "Generate 3 high-tension opening hooks (Shorts & Long-Form) engineered with pattern interrupts and curiosity gaps.",
        variables: [
          {
            name: "Video Topic",
            label: "Video Topic",
            options: ["The Collapse of Silicon Valley Bank", "How Taiwan Controls the Global Economy (TSMC)", "The Black Market of Vintage Rolex Watches", "The CIA's Most Expensive Psychological Experiment"],
            default: "How Taiwan Controls the Global Economy (TSMC)"
          },
          {
            name: "Pacing Style",
            label: "Pacing Style",
            options: ["Rapid-Fire Shorts (Under 3 seconds)", "Cinematic Documentary Mystery", "Investigative Exposé"],
            default: "Cinematic Documentary Mystery"
          },
          {
            name: "Hook Psychology",
            label: "Hook Psychology",
            options: ["The In Media Res Climax", "The Common Knowledge Reversal", "The High-Stakes Threat"],
            default: "The High-Stakes Threat"
          }
        ],
        template: `You are the lead retention director for top-tier YouTube documentary channels (like MagnatesMedia, Johnny Harris, and Moon).

Engineer 3 opening hook variations for this video:
- Topic: [Video Topic]
- Pacing Style: [Pacing Style]
- Hook Psychology: [Hook Psychology]

Provide:
1. Spoken Audio Hook (exact word-for-word voiceover script under 25 words).
2. Visual Frame-by-Frame Direction (exact visual cues for seconds 0.0 to 4.5).
3. Audio & SFX Cues (riser, sub-drop, vinyl scratch, or heartbeat).
4. The Open Loop Question (the unspoken question that forces the viewer to keep watching).`,
        expectedOutput: `### Retention Hook Architecture

#### 1. Spoken Audio Script (0:00 - 0:04.5)
> *"If this single factory in Taiwan shuts down tomorrow... the modern world halts in 72 hours. And Beijing knows it."* (20 words)

#### 2. Visual Frame-by-Frame Breakdown
- **0:00 - 0:01.5:** Extreme macro close-up of a glowing silicon wafer microchip. Fast glitch transition.
- **0:01.5 - 0:03.0:** Red military satellite scan zooms onto a coastal industrial complex marked *TSMC Fab 18*.
- **0:03.0 - 0:04.5:** Rapid cut to a dark war room with military silhouettes looking at stock market liquidation monitors.

#### 3. Audio & Sound Design
- **0:00.0:** Deep sub-bass boom (80Hz hit) + electrical hum.
- **0:01.8:** Sudden tape-stop / audio mute as the word "halts" is spoken.
- **0:03.2:** Low ominous analog cello drone fades in with military radar ping.

#### 4. The Unresolved Open Loop
- **The Viewer's Core Question:** *"Why can't the United States or Europe simply build their own microchips to prevent this crisis?"* (Answer deferred until Phase 3).`
      },
      conceptGuide: {
        title: "The Psychology of Pattern Interrupts & Curiosity Gaps",
        overview: "Human attention on digital platforms operates in an automated scrolling trance. A user's thumb scrolls through Shorts on muscle memory until a sensory anomaly breaks the pattern. In psychological terms, this is known as the Orienting Reflex. Hook engineering is the disciplined craft of introducing visual, auditory, and cognitive friction within the first 150 frames. By violating expectations and withholding resolution through George Loewenstein's Information Gap Theory, creators create an emotional itch that can only be scratched by watching the video to its conclusion.",
        keyPoints: [
          "**Immediate Cognitive Conflict:** A great hook presents two contradictory facts simultaneously (e.g., a tiny island nation holding global superpowers hostage).",
          "**The 2-Second Visual Rule:** The visual on screen must change within 1.8 seconds of the video starting; static visuals trigger immediate swipe behavior.",
          "**Deferred Payoff:** Never resolve the premise stated in the hook during the first half of the script; stack secondary micro-hooks every 90 seconds."
        ]
      },
      learning: {
        resources: [
          {
            title: "George Loewenstein's Information Gap Theory of Curiosity",
            url: "https://www.cmu.edu/dietrich/sds/docs/loewenstein/PsychofCuriosity.pdf",
            type: "Case Study"
          },
          {
            title: "YouTube Analytics: Audience Retention Report Deep Dive",
            url: "https://support.google.com/youtube/answer/9314415",
            type: "Official Docs"
          },
          {
            title: "Shorts Retention Framework & Pacing Benchmarks",
            url: "https://vidiq.com/blog/post/youtube-shorts-algorithm/",
            type: "Creator Guide"
          }
        ]
      }
    },

    // Node 3
    {
      id: "step-3",
      stepNumber: 3,
      phaseId: "phase-1",
      title: "High-Retention Long-Form & Short-Form Scriptwriting",
      timeEstimate: "2.5 hrs",
      difficulty: "Advanced",
      summary: "Write scripts with continuous open loops, zero AI conversational clichés, 5th-grade readability, and precise audio/visual cues every 4 seconds.",
      description: "A script written like a Wikipedia article or generic college essay will cause audience retention to plummet. High-retention YouTube scripts are engineered for spoken cadence, short punchy sentences, sensory verbs, and rigorous narrative pacing. Every paragraph must justify its existence through the 'So What?' test, embedding visual scene cues, SFX tags, and B-roll directions directly into a two-column AV (Audio/Visual) script format.",
      playbook: {
        setup: "Set up a two-column Google Docs script template (Left Column: Visuals & On-Screen Graphics, Right Column: Voiceover Audio & Sound Effects). Open Claude and Hemingway Editor.",
        execute: "Instruct Claude to draft the narrative using a 4-act structure: 1) The Inciting Incident, 2) The Unfair Advantage, 3) The Fatal Flaw / Collapse, and 4) The Modern Implication. Ban all AI phrases ('In conclusion', 'Delve into', 'It is important to remember').",
        verify: "Paste the draft into Hemingway Editor: ensure readability is Grade 5 to Grade 7, average sentence length is under 14 words, and visual cues are inserted every 3 to 5 seconds."
      },
      tools: [
        {
          name: "Claude",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Top-tier AI model for writing conversational narrative prose with human cadence, complex story arcs, and emotional nuance.",
          bestFor: "Full two-column AV scriptwriting & voiceover prose"
        },
        {
          name: "Hemingway Editor",
          type: "Free",
          url: "https://hemingwayapp.com",
          description: "Writing tool that highlights complex sentences, passive voice, and weak adverbs to maximize verbal comprehension.",
          bestFor: "Sentence simplification, readability scoring & rhythm check"
        },
        {
          name: "Google Docs",
          type: "Free",
          url: "https://docs.google.com",
          description: "Collaborative word processor for managing production scripts with two-column AV formatting and timestamps.",
          bestFor: "Two-column AV script structuring & production notes"
        }
      ],
      callouts: {
        mistake: "Writing in dense academic prose with passive voice; voice actors cannot breathe naturally, and viewers disconnect from the narrative.",
        proTip: "Read the entire script out loud while standing up; wherever you stumble or lose your breath, cut 5 words immediately.",
        mistakes: [
          "Letting Claude use generic AI buzzwords like 'tapestry', 'delve', 'beacon of hope', or 'testament to' which immediately sound robotic.",
          "Failing to include visual direction in the script, leaving the video editor guessing how to illustrate abstract financial concepts.",
          "Creating flat narrative pacing where information is delivered at the same emotional intensity without climaxes and breathers."
        ],
        proTips: [
          "Insert a 'Reset Hook' every 90 seconds (e.g., 'But that wasn't the craziest part...') to restore dipping audience attention.",
          "Target 130 to 145 words per minute for documentary narration; any faster overwhelms comprehension, any slower invites clicking away.",
          "Use sensory adjectives ('rusted steel', 'sweat-drenched trading floor') to give AI voice generators emotional inflection points."
        ]
      },
      promptLab: {
        title: "Two-Column YouTube Documentary AV Scriptwriter",
        description: "Draft a high-retention script segment formatted in professional two-column AV layout with precise visual cues and SFX tags.",
        variables: [
          {
            name: "Script Section",
            label: "Script Section",
            options: ["Act 1: The Inciting Incident", "Act 2: The Meteoric Rise & Unfair Advantage", "Act 3: The Secret Cracks & Whistleblower", "Act 4: The 48-Hour Catastrophic Collapse"],
            default: "Act 3: The Secret Cracks & Whistleblower"
          },
          {
            name: "Story Subject",
            label: "Story Subject",
            options: ["The Fall of WeWork (Adam Neumann)", "The FTX Collapse (Sam Bankman-Fried)", "Boeing's Hidden Engineering Scandal", "The Rise of NVIDIA & Jensen Huang"],
            default: "The Fall of WeWork (Adam Neumann)"
          },
          {
            name: "Target Tone",
            label: "Target Tone",
            options: ["Dark Satirical Exposé", "High-Tension Thriller", "Analytical Business Teardown"],
            default: "Dark Satirical Exposé"
          }
        ],
        template: `You are an award-winning YouTube scriptwriter and narrative director for top mini-documentaries.

Write a 2-minute script segment for:
- Story Subject: [Story Subject]
- Script Section: [Script Section]
- Target Tone: [Target Tone]

Format strictly as a Two-Column Production Table:
| Time / Visual Cue (Left Column) | Spoken Audio & SFX (Right Column) |

Rules:
- Readability: 6th grade reading level, punchy sentences under 15 words.
- Zero robotic clichés (banned: 'delve', 'tapestry', 'testament', 'little did they know').
- Include exact visual descriptions (Midjourney prompts, archival paper textures, 3D stock chart drops).
- Include explicit SFX tags in brackets (e.g., [SFX: Cash register ding], [SFX: Distorted heartbeat]).`,
        expectedOutput: `### Two-Column Production Script: The Fall of WeWork

| Visual Cues & On-Screen Assets | Spoken Voiceover & Sound Design |
| :--- | :--- |
| **0:00 - 0:08**<br>Slow push-in on an empty glass penthouse office at night. Neon 'Do What You Love' sign flickering. | Soft ambient drone. <br>[SFX: Fluorescent bulb hum, subtle flicker]<br>**Voiceover:** By the summer of 2019, WeWork wasn't just losing money. It was hemorrhaging it. |
| **0:08 - 0:17**<br>Fast kinetic motion graphic: Red financial balance sheet dropping through the floor like an elevator. | [SFX: Elevator cable snapping, deep sub boom]<br>**Voiceover:** Every single day, Adam Neumann was burning through six million dollars of SoftBank's cash. |
| **0:17 - 0:26**<br>Archival photograph of Adam Neumann barefoot on a private Gulfstream jet. Fast zoom to his eyes. | [SFX: Jet engine whine, champagne cork pop]<br>**Voiceover:** But behind closed boardroom doors, Adam had a secret weapon. A mathematical illusion that Wall Street had never seen before. |
| **0:26 - 0:38**<br>Glitch transition. Stylized 3D graphic highlighting the fictional accounting term 'Community Adjusted EBITDA'. | [SFX: Record scratch, typing clicks]<br>**Voiceover:** He called it 'Community Adjusted EBITDA'. A fancy accounting term that essentially meant: *If we ignore all our expenses... we're wildly profitable.* |`
      },
      conceptGuide: {
        title: "Narrative Elasticity & The Two-Column Scripting Standard",
        overview: "A YouTube script is not literature; it is an architectural blueprint for an audio-visual stimulus machine. Narrative elasticity is the deliberate tension created by withholding resolution while continuously introducing new micro-conflicts. By separating visual cues from verbal dialogue in a two-column format, scriptwriters force themselves to visualize what the viewer is seeing on every syllable. If the voiceover runs for more than 4 seconds without an explicit change in visual stimuli, audience retention will experience a measurable micro-drop.",
        keyPoints: [
          "**Visual Density Imperative:** An engaging video requires a visual change (cut, camera move, graphic overlay) every 2.5 to 4.5 seconds.",
          "**Hemingway 5th-Grade Rule:** Complex topics explained in simple, monosyllabic words retain 35% more casual viewers than technical jargon.",
          "**Sensory Voiceover Phrasing:** Use words with sharp phonetic plosives ('cracked', 'shattered', 'bled') to maintain rhythmic acoustic energy."
        ]
      },
      learning: {
        resources: [
          {
            title: "Hemingway App Readability & Sentence Length Guidelines",
            url: "https://hemingwayapp.com",
            type: "Creator Guide"
          },
          {
            title: "Pixar's 22 Rules of Storytelling Applied to Digital Media",
            url: "https://www.aerogrammestudio.com/2013/03/07/pixars-22-rules-of-storytelling/",
            type: "Case Study"
          },
          {
            title: "BBC Production Standards for Audio-Visual Documentary Scripts",
            url: "https://www.bbc.co.uk/academy/en/collections/storytelling",
            type: "Official Docs"
          }
        ]
      }
    },

    // Node 4
    {
      id: "step-4",
      stepNumber: 4,
      phaseId: "phase-2",
      title: "Emotion-Paced Voice Cloning & Audio Engineering",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Direct AI voice clones with custom pacing, whispered pauses, natural breathing, and broadcast compression.",
      description: "Monotone, mechanical text-to-speech audio immediately signals low-effort spam to both viewers and YouTube review algorithms. Modern high-retention faceless channels utilize frontier voice synthesis engines like ElevenLabs Multilingual v2, paired with custom speech markup (`[whisper]`, `[sigh]`, `[dramatic pause]`). Post-processing the raw audio through vocal isolation, broadcast dynamic compression, and parametric EQ transforms synthesized speech into radio-grade, authoritative narration.",
      playbook: {
        setup: "Set up ElevenLabs with an authoritative, deep narration voice clone (e.g., 'Adam', 'Marcus', or a custom voice library clone). Download Audacity or Adobe Podcast Enhance.",
        execute: "Generate voiceover in 2-minute batches using stability settings tuned for documentary narration (Stability: 0.42, Similarity: 0.78, Style Exaggeration: 0.15). Insert ellipsis (`...`) and hyphens to enforce dramatic pauses. Process the exported WAV file through a broadcast audio chain: High-Pass Filter at 80Hz, gentle compression (3:1 ratio), and warmth EQ boost at 200Hz.",
        verify: "Listen on both studio headphones and mobile phone speakers: ensure no robotic audio artifacts, crisp vocal clarity over background music, and natural cadence."
      },
      tools: [
        {
          name: "ElevenLabs",
          type: "Freemium",
          url: "https://elevenlabs.io",
          description: "Leading generative voice AI platform providing realistic voice cloning, emotion control, and speech-to-speech direction.",
          bestFor: "Cinematic voice cloning, emotion cadence & narration audio"
        },
        {
          name: "Adobe Podcast Enhance",
          type: "Freemium",
          url: "https://podcast.adobe.com/enhance",
          description: "AI-powered audio cleanup tool that removes room echo, enhances vocal presence, and simulates a soundproof recording studio.",
          bestFor: "One-click vocal studio presence & echo removal"
        },
        {
          name: "Audacity",
          type: "Free",
          url: "https://www.audacityteam.org",
          description: "Open-source multitrack audio editor for precision vocal mastering, noise gating, EQ curves, and broadcast loudness normalization.",
          bestFor: "Vocal mastering, EQ curves & loudness normalization"
        }
      ],
      callouts: {
        mistake: "Generating an entire 10-minute script in a single click without punctuation markup, causing the AI voice to sound rushed and breathless.",
        proTip: "Use dashes (`-`) for quick conversational hesitations and three dots (`...`) for 0.5-second dramatic pauses before revealing key plot points.",
        mistakes: [
          "Leaving ElevenLabs Stability setting at 1.0, which flattens all emotional inflection and produces robotic, lifeless delivery.",
          "Mixing background music too loud against the voiceover track, making lyrics or percussion clash with spoken dialogue.",
          "Using overly recognized default AI voices (like the generic TikTok voice) that viewers instantly associate with low-quality bot channels."
        ],
        proTips: [
          "Create a bespoke Voice Clone using a 5-minute clean recording of a public-domain narrator to establish a unique sonic brand for your channel.",
          "Export your voiceover in uncompressed 24-bit 48kHz WAV format rather than MP3 to avoid high-frequency compression artifacts in final video renders.",
          "Lower background music volume by -4dB to -6dB whenever the voiceover is speaking using automatic audio ducking."
        ]
      },
      promptLab: {
        title: "ElevenLabs Cadence & Emotion Voiceover Prompt Director",
        description: "Transform raw script text into an emotion-mapped ElevenLabs prompt with phonetic tags, pauses, and pacing directions.",
        variables: [
          {
            name: "Narrator Persona",
            label: "Narrator Persona",
            options: ["The Dark Investigator (Whispered, Intense, Cynical)", "The High-Energy Tech Analyst (Punchy, Authoritative, Crisp)", "The Ancient Historian (Deep, Resonant, Measured)"],
            default: "The Dark Investigator (Whispered, Intense, Cynical)"
          },
          {
            name: "Scene Emotion",
            label: "Scene Emotion",
            options: ["Mounting Paranoia & Conspiracy", "Shocking Revelation of Fraud", "The Quiet Aftermath of Tragedy"],
            default: "Shocking Revelation of Fraud"
          },
          {
            name: "Pacing Speed",
            label: "Pacing Speed",
            options: ["Medium-Slow with Long Pauses (125 WPM)", "High-Stakes Brisk (145 WPM)", "Deliberate Staccato Punch (135 WPM)"],
            default: "Deliberate Staccato Punch (135 WPM)"
          }
        ],
        template: `You are an executive audio engineer and voice director for high-budget Netflix documentaries and YouTube automation studios.

Take this script excerpt and format it for ElevenLabs Text-to-Speech generation:
- Narrator Persona: [Narrator Persona]
- Scene Emotion: [Scene Emotion]
- Pacing Speed: [Pacing Speed]

Provide:
1. ElevenLabs Voice Parameter Settings: Exact sliders for Stability, Clarity/Similarity, Style Exaggeration, and Speaker Boost.
2. Formatted Voice Script: With custom punctuation (em-dashes, ellipses, capitalized emphasis words) and bracketed directorial cues to force emotional inflections.
3. Post-Processing Chain: Step-by-step EQ, compression, and loudness normalization specs (LUFS).`,
        expectedOutput: `### ElevenLabs Voiceover Direction Brief

#### 1. ElevenLabs Engine Settings
- **Model:** Eleven Multilingual v2
- **Stability:** **0.38** *(Lower values unlock dramatic pitch fluctuation and emotional tension)*
- **Clarity / Similarity:** **0.82** *(High fidelity to reference voice identity)*
- **Style Exaggeration:** **0.20** *(Adds subtle theatrical emphasis without distorting syllables)*
- **Speaker Boost:** **Enabled**

#### 2. Phonetically Direct Script
> *[lowered pitch, confidential]*
> "The investigators opened the vault expecting gold bullion. 
> 
> But instead... they found thousands of tons... of painted tungsten bricks.
> 
> *[pause]*
> 
> Not millions. **BILLIONS** of dollars—evaporated into thin air.
> 
> And the CEO? He was already boarding a chartered jet to Dubai... with a suitcase full of burner phones."

#### 3. Broadcast Audio Post-Processing Chain
1. **High-Pass Filter:** 80Hz @ 24dB/octave slope (eliminates desk thumps and sub rumble).
2. **Dynamic EQ:** Cut -2.5dB at 3.2kHz (eliminates harsh digital sibilance).
3. **Studio Compression:** Ratio 3.2:1, Attack 15ms, Release 80ms, 3dB gain reduction on loud peaks.
4. **Target Loudness:** Master dialogue to **-14 LUFS integrated** with true peak limiting at **-1.0 dBFS** to match YouTube's loudness normalization algorithm.`
      },
      conceptGuide: {
        title: "Acoustic Authority & Cognitive Voice Perception",
        overview: "Human beings have evolved over hundreds of thousands of years to detect subtle emotional cues, hesitations, and micro-tremors in human speech. When viewers hear a completely flat synthetic voice, their subconscious flags the speaker as untrustworthy or artificial, triggering cognitive fatigue and video abandonment. Modern voice engineering is not about finding the 'clearest' voice; it is about introducing human acoustic imperfection: micro-pauses, breath sounds, shifts in pitch, and spatial warmth that convince the listener they are hearing a confident expert storytelling in real time.",
        keyPoints: [
          "**The Loudness Normalization Target:** YouTube automatically turns down audio louder than -14 LUFS; mastering to -14 LUFS ensures maximum punch without digital ducking.",
          "**Audio Ducking Rule:** Music must automatically duck by at least 4.5dB during speech to prevent masking human formant frequencies (1kHz to 4kHz).",
          "**The Pacing Reset:** Inserting a 0.8-second moment of absolute silence before a dramatic revelation increases retention by resetting listener sensory adaptation."
        ]
      },
      learning: {
        resources: [
          {
            title: "ElevenLabs Voice Lab & Emotion Prompting Documentation",
            url: "https://elevenlabs.io/docs/speech-synthesis/prompting",
            type: "Official Docs"
          },
          {
            title: "YouTube Loudness Normalization (LUFS) Engineering Guide",
            url: "https://support.google.com/youtube/answer/3015903",
            type: "Creator Guide"
          },
          {
            title: "Audacity Vocal Mastering & Broadcast Chain Preset Guide",
            url: "https://manual.audacityteam.org/man/equalization.html",
            type: "Creator Guide"
          }
        ]
      }
    },

    // Node 5
    {
      id: "step-5",
      stepNumber: 5,
      phaseId: "phase-2",
      title: "Cohesive Visual Generation & Character Consistency",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Produce visual style frames with strict character and cinematic lighting consistency for historical or documentary storytelling.",
      description: "Amateur AI channels look like incoherent slideshows because every image has a different art style, color grading, and character face. Professional documentary channels achieve visual coherence by locking in a single cinematic aesthetic—such as 35mm film grain, moody chiaroscuro lighting, or vintage archival lithography. Using Midjourney v6 character reference flags (`--cref`), style reference flags (`--sref`), and Flux.1 LoRAs, creators generate consistent protagonists and atmospheric environments across dozens of scenes.",
      playbook: {
        setup: "Establish a Master Style Board in Midjourney or Flux.1. Generate a primary protagonist image and save the direct Discord image URL. Set aspect ratio to `--ar 16:9` for long-form or `--ar 9:16` for Shorts.",
        execute: "Craft scene prompts combining the protagonist reference (`--cref [URL] --cw 80`), a locked lighting palette (`--sref [Style_URL]`), and concrete camera angles (`low angle shot`, `macro anamorphic lens`, `35mm kodachrome film stock`). For alternative generation, utilize Flux.1 or Leonardo AI Photoreal pipelines.",
        verify: "Compare 10 generated scene frames side-by-side in Figma: verify character facial consistency, cohesive color temperature (e.g. moody amber and slate blue), and absence of grotesque AI hand anomalies."
      },
      tools: [
        {
          name: "Midjourney v6",
          type: "Paid",
          url: "https://www.midjourney.com",
          description: "Premier AI image generator with industry-standard character consistency (`--cref`) and aesthetic style matching (`--sref`).",
          bestFor: "Cinematic film frames, historical realism & character consistency"
        },
        {
          name: "Flux.1",
          type: "Freemium",
          url: "https://blackforestlabs.ai",
          description: "State-of-the-art open-weights image model with exceptional prompt adherence, photorealistic skin textures, and sharp typography rendering.",
          bestFor: "Photorealistic human skin, text in images & open-source generation"
        },
        {
          name: "Leonardo AI",
          type: "Freemium",
          url: "https://leonardo.ai",
          description: "Feature-rich generative AI creative suite with custom model fine-tuning, canvas inpainting, and motion generation.",
          bestFor: "Canvas inpainting, asset libraries & stylized concept art"
        }
      ],
      callouts: {
        mistake: "Using generic prompts like 'a cinematic shot of a businessman' resulting in plastic, airbrushed stock-photo aesthetics that scream cheap AI.",
        proTip: "Add `--sref [URL]` pointing to a classic movie still (e.g., from *The Godfather* or *Oppenheimer*) to instantly transfer film lighting and color grading to all your prompts.",
        mistakes: [
          "Neglecting character weight (`--cw 20` vs `--cw 100`): using default 100 forces the character to wear the exact same clothing in every single historical era.",
          "Generating in square 1:1 aspect ratio and cropping in editing, which ruins composition and reduces effective resolution.",
          "Allowing bright neon cartoon colors into serious historical or investigative crime documentary stories."
        ],
        proTips: [
          "Use the phrase 'archival film footage, 35mm grain, subdued color palette, chiaroscuro shadow' to strip away digital glossiness.",
          "For YouTube Shorts, generate directly in `--ar 9:16` so key subjects remain centered within mobile UI overlays (like comment icons and titles).",
          "Build an asset library of 50 reusable atmospheric B-roll frames (old documents, ticking clocks, rainy city windows, glowing servers) to bridge narrative gaps."
        ]
      },
      promptLab: {
        title: "Midjourney v6 Consistent Cinematic Scene Generator",
        description: "Generate consistent, photorealistic visual style frames with character references, camera specs, and color palettes.",
        variables: [
          {
            name: "Visual Genre",
            label: "Visual Genre",
            options: ["1970s Dark Corporate Thriller (The Godfather Aesthetic)", "Modern Cyberpunk & High-Tech Espionage", "19th Century Industrial & Gilded Age Lithograph", "Cold War Military Intelligence & Black-and-White Archival"],
            default: "1970s Dark Corporate Thriller (The Godfather Aesthetic)"
          },
          {
            name: "Camera Angle",
            label: "Camera Angle",
            options: ["Cinematic Wide establishing shot (24mm lens)", "Over-the-shoulder medium close-up (50mm anamorphic)", "Extreme macro bird's-eye view (drone elevation)"],
            default: "Over-the-shoulder medium close-up (50mm anamorphic)"
          },
          {
            name: "Scene Action",
            label: "Scene Action",
            options: ["CEO staring at a burning financial balance sheet", "Two shadowed executives whispering in a rain-slicked alley", "FBI agents raiding an empty corporate headquarters"],
            default: "Two shadowed executives whispering in a rain-slicked alley"
          }
        ],
        template: `You are the production designer and director of photography for a prestige documentary film studio.

Formulate an exact Midjourney v6 / Flux.1 image generation prompt for this scene:
- Visual Genre: [Visual Genre]
- Camera Angle: [Camera Angle]
- Scene Action: [Scene Action]

Provide:
1. Complete Midjourney v6 Prompt: Fully formatted with camera focal length, film stock, lighting direction, and technical parameters (--ar, --v 6.1, --style raw, --c).
2. Negative Prompt / Banned Aesthetic Attributes: Eliminating plastic skin, anime stylization, and distorted anatomy.
3. Flux.1 Alternative Prompt: Natural language descriptive prompt optimized for open-weights generation.`,
        expectedOutput: `### Cinematic Style Frame Prompt

#### 1. Midjourney v6 Prompt
\`/imagine prompt: [Camera Angle] of [Scene Action], [Visual Genre]. Moody chiaroscuro side-lighting cutting through thick cigar smoke, Kodak Vision3 500T 35mm film stock, subtle natural film grain, deep mahogany and dark amber palette, shallow depth of field with soft bokeh, authentic 1970s tailored wool overcoats, atmospheric haze, photojournalistic realism --ar 16:9 --v 6.1 --style raw --c 5 --s 250\`

#### 2. Negative Attributes & Banned Tokens
- **Banned Visual Tokens:** \`plastic skin, 3d render, CGI, glossy digital illustration, oversaturated neon, anime, airbrushed portrait, extra fingers, cartoonish, watermark\`
- **Composition Parameter:** \`--c 5\` *(Low chaos keeps generation strictly anchored to cinematic composition)*

#### 3. Flux.1 Descriptive Prompt
> *"A cinematic 35mm film photograph of two shadowed middle-aged executives in tailored 1970s trench coats whispering urgently in a rain-soaked cobblestone alley at night. Wet asphalt reflects amber streetlights. Shot on 50mm anamorphic lens with soft background blur. Real human skin texture with pores and realistic rain droplets. Moody, atmospheric, authentic crime thriller cinema."*`
      },
      conceptGuide: {
        title: "Visual Grammar & The Diegetic Aesthetic Principle",
        overview: "In cinematic theory, the diegetic aesthetic refers to the internal visual logic of a world. When a viewer watches a video, their brain rapidly forms an expectation of what that world looks like. If scene #1 resembles a gritty 1970s film, scene #2 is a 3D Pixar render, and scene #3 is a clean modern vector icon, the viewer experiences jarring cognitive dissonance and disconnects. By enforcing strict constraints on lighting, lens choice, color grading, and film grain across all AI-generated assets, faceless creators establish the same cohesive visual authority as high-budget HBO or Netflix productions.",
        keyPoints: [
          "**The Master Color Palette:** Limit every documentary to a 3-color palette (e.g. Navy, Amber, Charcoal) to make visual transitions seamless.",
          "**Skin Texture Authenticity:** Always specify photographic film stocks (Kodak Vision3, Portra 400) to defeat plastic generative AI skin textures.",
          "**Focal Length Discipline:** Use wide 24mm lenses for establishing world context, 50mm for narrative action, and 85mm macro for high-tension emotional reveals."
        ]
      },
      learning: {
        resources: [
          {
            title: "Midjourney Official Parameter Documentation (--cref and --sref)",
            url: "https://docs.midjourney.com/docs/character-reference",
            type: "Official Docs"
          },
          {
            title: "Flux.1 Architecture & Prompt Adherence Guide",
            url: "https://blackforestlabs.ai",
            type: "Creator Guide"
          },
          {
            title: "Cinematography Lighting & Lens Guide for Visual Storytellers",
            url: "https://www.studiobinder.com/blog/film-lighting-techniques/",
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
      title: "Cinematic B-Roll Motion & Camera Movement",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Inject smooth push-ins, drone flyovers, and parallax pans into static Midjourney generations.",
      description: "Static images on YouTube cause viewer drop-off within 2 seconds. Video generation models like Runway Gen-3 Alpha, Kling AI, and Luma Dream Machine allow creators to animate static AI images into dynamic cinematic shots: subtle camera dollies, slow push-ins, smoke drift, and natural atmospheric motion. Adding controlled camera movement breathes life into documentary narratives without requiring expensive live-action footage or licensing costly stock video libraries.",
      playbook: {
        setup: "Select your highest-impact keyframes generated in Node 5. Open Runway Gen-3 Alpha, Kling AI, or Luma Dream Machine. Choose Image-to-Video mode.",
        execute: "Input the static image as the start frame. Write concise camera movement prompts specifying lens motion and environmental physics (e.g., `Slow cinematic dolly forward, smoke drifts slowly across the frame, 4k photorealistic`). Set motion strength to a moderate value (3–5 out of 10) to avoid grotesque morphing.",
        verify: "Inspect rendered MP4 clips: confirm smooth camera tracking, absence of anatomical warping or unnatural face melting, and export in 4K resolution at 24fps or 30fps."
      },
      tools: [
        {
          name: "Runway Gen-3 Alpha",
          type: "Paid",
          url: "https://runwayml.com",
          description: "Industry-standard generative video model offering precise camera controls, text-to-video, and image-to-video motion synthesis.",
          bestFor: "Cinematic camera dolly moves, lighting shifts & controlled physics"
        },
        {
          name: "Kling AI",
          type: "Freemium",
          url: "https://klingai.com",
          description: "High-definition video generation model renowned for realistic human movement, longer 5-10 second clips, and physics simulation.",
          bestFor: "Complex human motion, extended clip duration & photorealism"
        },
        {
          name: "Luma Dream Machine",
          type: "Freemium",
          url: "https://lumalabs.ai/dream-machine",
          description: "High-speed generative video engine producing fluid camera motion, 3D spatial consistency, and cinematic lighting pans.",
          bestFor: "Fast turnaround B-roll generation & fluid 3D camera sweeps"
        }
      ],
      callouts: {
        mistake: "Cranking motion parameters to maximum, causing faces to dissolve into monstrous liquid hallucinations and ruining video credibility.",
        proTip: "Use simple camera prompts like 'Slow steady dolly zoom into subject's eyes' rather than describing complex multi-character actions.",
        mistakes: [
          "Prompting complex fast human movements (like running or speaking) in video AI models, which frequently produces distorted limb artifacts.",
          "Neglecting to match the camera motion direction between adjacent cuts, resulting in disorienting visual whiplash.",
          "Using slow 5-second video clips unedited without speed ramping or jump cuts to match voiceover cadence."
        ],
        proTips: [
          "Use subtle environmental movements (falling rain, drifting smoke, flickering computer monitor light) to create realism without risk of anatomy morphing.",
          "Speed ramp your AI video clips 120% to 150% in your video editor; AI video tends to generate in slow-motion, which drags down retention.",
          "Pair every forward camera push-in with a subtle sub-bass whoosh or rising synthesizer swell to amplify narrative momentum."
        ]
      },
      promptLab: {
        title: "Runway Gen-3 & Kling AI Motion Director",
        description: "Generate camera-directed Image-to-Video motion prompts with precise axis movement, lens tracking, and physics control.",
        variables: [
          {
            name: "Camera Movement",
            label: "Camera Movement",
            options: ["Slow Cinematic Push-In (Dolly Forward)", "Wide Drone Flyover with Downward Tilt", "Lateral Parallax Tracking Pan (Left to Right)", "FPV Whip Pan Transition"],
            default: "Slow Cinematic Push-In (Dolly Forward)"
          },
          {
            name: "Environmental Physics",
            label: "Environmental Physics",
            options: ["Heavy Rain & Wet Street Reflections", "Drifting Cigar Smoke & Dust Particles in Light Beam", "Ticking Clock Gears & Flickering Candle", "Glowing Server LED Rack Pulsing"],
            default: "Drifting Cigar Smoke & Dust Particles in Light Beam"
          },
          {
            name: "Motion Intensity",
            label: "Motion Intensity",
            options: ["Subtle / Ambient (Strength 3/10)", "Moderate Narrative Motion (Strength 5/10)", "Dynamic Cinematic Sweep (Strength 7/10)"],
            default: "Subtle / Ambient (Strength 3/10)"
          }
        ],
        template: `You are a VFX supervisor directing Image-to-Video generation in Runway Gen-3 Alpha and Kling AI.

Write a camera motion prompt for an uploaded static Midjourney keyframe:
- Camera Movement: [Camera Movement]
- Environmental Physics: [Environmental Physics]
- Motion Intensity: [Motion Intensity]

Output:
1. Exact Video Generation Prompt: Formatted with professional cinematography terminology and motion constraints.
2. Motion Slider & Seed Settings: Guidance on motion intensity, aspect ratio, and frame rate.
3. Editing Speed-Ramp Strategy: Recommended timeline adjustment in CapCut or Premiere Pro.`,
        expectedOutput: `### Generative Video Motion Directive

#### 1. Runway Gen-3 Image-to-Video Prompt
> *"[Camera Movement]. The camera glides forward with cinematic stability on a 35mm focal plane. [Environmental Physics]. The main human subject remains completely still with intense focused gaze; only atmospheric micro-elements move naturally. Photorealistic 4k, zero morphing, continuous temporal consistency, 24fps film cadence."*

#### 2. Model Settings & Motion Configuration
- **Model:** Runway Gen-3 Alpha (Image to Video)
- **Camera Control:** F (Forward) = **+2.0**, Z (Zoom) = **+1.5**, Pan/Tilt = **0.0**
- **Motion Amount:** **3 out of 10** *(Crucial to prevent facial distortion)*
- **Duration:** 5 seconds (Extendable to 10s if motion remains stable)

#### 3. Post-Production Speed Ramping
- **Timeline Speed:** Set clip speed to **135%** in CapCut / Premiere.
- **Ramp Curve:** Start at 100% for 0.5s, ramp to 160% as the narrator delivers the punchline, then cut on the audio beat.`
      },
      conceptGuide: {
        title: "Kuleshov Effect & Dynamic Visual Pacing",
        overview: "In 1918, Soviet filmmaker Lev Kuleshov demonstrated that viewers derive more meaning from the interaction of two sequential shots than from a single shot in isolation. In the context of AI YouTube production, static AI images are emotionally inert. When subtle motion is applied—such as a slow camera push into a subject's eyes paired with dramatic narration—the viewer's brain infers psychological depth, secrecy, and tension. Generative video tools allow single-creator faceless channels to deploy high-end cinematic grammar that previously required multimillion-dollar camera cranes and track systems.",
        keyPoints: [
          "**The Dolly Forward Implication:** A forward camera movement signals discovery, revelation, and mounting intimacy with the story.",
          "**Temporal Stability over Action:** Prioritize clean, un-morphed atmospheric movement over complex character acrobatics.",
          "**Micro-Cut Transitions:** Never let an AI video clip linger past 4 seconds without a visual overlay, text pop, or cutaway."
        ]
      },
      learning: {
        resources: [
          {
            title: "Runway Gen-3 Prompting & Camera Motion Syntax Documentation",
            url: "https://help.runwayml.com/hc/en-us/articles/30526848149139-Gen-3-Alpha-Prompting-Guide",
            type: "Official Docs"
          },
          {
            title: "Kling AI Generation Guidelines & Extended Video Controls",
            url: "https://klingai.com",
            type: "Creator Guide"
          },
          {
            title: "Luma Dream Machine Camera Pathing Guide",
            url: "https://lumalabs.ai/dream-machine",
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
      title: "Fast Transcript-Based Assembly & Pacing Cuts",
      timeEstimate: "2.5 hrs",
      difficulty: "Intermediate",
      summary: "Cut pauses under 0.2s, lock A-Roll pacing, and drop visual assets automatically to audio beats.",
      description: "Traditional manual timeline editing is too slow for consistent multi-upload faceless channels. Modern creators use transcript-based text editing tools (like Descript and CapCut Pro) to cut spoken voiceover directly from text transcripts. By automatically eliminating silence gaps over 0.2 seconds and snapping B-roll clips to voiceover cadence, editors can assemble an 8-minute rough cut in under 45 minutes while maintaining a relentless, engaging narrative tempo.",
      playbook: {
        setup: "Import the mastered ElevenLabs WAV voiceover into CapCut Pro or Descript. Generate automatic text transcription with word-level timestamps.",
        execute: "Run 'Shorten Word Gaps' to automatically remove all silences longer than 0.25 seconds. Lay down visual B-roll generated in Nodes 5 and 6, cutting on the stressed syllables of spoken nouns and verbs. Ensure no single visual asset remains static for longer than 3.5 seconds.",
        verify: "Playback the timeline at 1.25x speed: ensure the narrative flows seamlessly without awkward audio clicks, unnatural word cut-offs, or visual dead space."
      },
      tools: [
        {
          name: "CapCut Pro",
          type: "Freemium",
          url: "https://www.capcut.com",
          description: "Top-tier video editor with auto-captions, transcript editing, smart B-roll matching, and built-in viral animation effects.",
          bestFor: "Fast timeline assembly, auto-captions & viral transitions"
        },
        {
          name: "Descript",
          type: "Freemium",
          url: "https://www.descript.com",
          description: "Revolutionary text-based audio/video editor that lets you edit video by editing text, removing filler words automatically.",
          bestFor: "Text-based video cutting & automated silence gap shortening"
        },
        {
          name: "Premiere Pro",
          type: "Paid",
          url: "https://www.adobe.com/products/premiere.html",
          description: "Industry-standard professional NLE offering precision keyframing, advanced color grading, and multitrack audio mastering.",
          bestFor: "High-end documentary timeline assembly & color workflows"
        }
      ],
      callouts: {
        mistake: "Leaving long 1-second conversational pauses in YouTube Shorts or fast-paced documentaries, which directly provokes the viewer to swipe away.",
        proTip: "Edit your timeline to a temp drumbeat track (around 110–120 BPM); snapping visual cuts to rhythmic snare hits creates hypnotic viewing momentum.",
        mistakes: [
          "Cutting off the natural room tone or decaying consonant of a word, resulting in jarring audio pops between clips.",
          "Using cross-dissolve transitions between every scene, which slows down visual pacing and makes the video feel outdated.",
          "Failing to zoom in 5% to 10% on consecutive cuts of the same subject (the J-cut and L-cut principle), creating amateur jump cuts."
        ],
        proTips: [
          "Use J-cuts (audio starts 0.5s before the visual appears) to drag the viewer's curiosity into the next scene before they realize it.",
          "In CapCut, create keyboard shortcuts for 'Split' (Q) and 'Ripple Delete' (W) to edit an entire 10-minute video using only your left hand.",
          "Lock your music track and dialogue track before placing B-roll so your foundational rhythmic timing never shifts during revisions."
        ]
      },
      promptLab: {
        title: "Timeline Pacing & Scene Transition Breakdown",
        description: "Generate a second-by-second assembly blueprint matching voiceover beats to visual cutaways and J-cut audio overlaps.",
        variables: [
          {
            name: "Segment Length",
            label: "Segment Length",
            options: ["60-Second Viral Short", "3-Minute Fast Explainer Beat", "8-12 Minute Long-Form Act"],
            default: "60-Second Viral Short"
          },
          {
            name: "Editing Style",
            label: "Editing Style",
            options: ["Hyper-Paced Documentary (Johnny Harris style)", "Dark Moody Crime Drama (MagnatesMedia style)", "Kinetic Informational Blitz (Vox / Kurzgesagt style)"],
            default: "Hyper-Paced Documentary (Johnny Harris style)"
          },
          {
            name: "Asset Distribution",
            label: "Asset Distribution",
            options: ["Midjourney Motion B-Roll + Archival Documents", "Kinetic Typography + 3D Stock Charts", "AI Maps + Satellite Zooms"],
            default: "Midjourney Motion B-Roll + Archival Documents"
          }
        ],
        template: `You are an elite YouTube documentary editor who has edited videos with over 50 million collective views.

Design a precise timeline assembly guide for this segment:
- Segment Length: [Segment Length]
- Editing Style: [Editing Style]
- Asset Distribution: [Asset Distribution]

Provide:
1. Pacing Rules: Average shot length (ASL in seconds), silence threshold, and cut frequency.
2. Beat-by-Beat Timeline Breakdown: Exact timestamps, visual cut points, audio overlaps (J-cuts/L-cuts), and keyframe scale adjustments (zooms).
3. Transitions Checklist: Specific transition plugins and custom motion parameters.`,
        expectedOutput: `### Timeline Assembly & Pacing Blueprint

#### 1. Pacing & Metric Parameters
- **Average Shot Length (ASL):** **2.4 seconds** *(Never exceed 3.5 seconds on any single angle)*
- **Silence Elimination Threshold:** Auto-delete all dead air **> 0.20s**
- **Framing Scale Rule:** Every consecutive cut alternates between **100% scale** and **108% scale** to prevent jump cuts.

#### 2. Second-by-Second Assembly Grid (0:00 - 0:25)
| Timestamp | Spoken Dialogue | Visual Asset & Cut Action | Transition & Audio Overlap |
| :--- | :--- | :--- | :--- |
| **0:00.0 - 0:02.8** | *"This bank had $209 billion..."* | 3D Golden vault door sliding shut. Scale: 100% -> 105% slow push. | **J-Cut:** Low vault slam audio plays at -0.3s before visual. |
| **0:02.8 - 0:05.2** | *"...and in 48 hours, it was gone."* | Fast whip-pan to frantic stock ticker plunging in red. | Hard cut on the word "gone". Sub-bass impact hit. |
| **0:05.2 - 0:08.5** | *"So how did a single WhatsApp message..."* | Archival screenshot of mobile chat highlighted in lime green. | Scale snap: 112% zoom punch on the word "WhatsApp". |
| **0:08.5 - 0:12.0** | *"...trigger the fastest bank run in history?"* | Historical aerial photo of depositors lined up around the block. | 0.2s camera flash transition. Vinyl texture overlay. |

#### 3. Transition & Motion Checklist
- **Primary Cut Type:** 90% hard cuts directly on the beat of spoken nouns.
- **Micro-Camera Shake:** Apply a 2% directional wiggle on all document and headline pop-ups.
- **Audio Crossfade:** 2-frame constant power crossfade between all audio splices to prevent digital clipping clicks.`
      },
      conceptGuide: {
        title: "The Physics of Viewer Pacing & The 3-Second Cut Rule",
        overview: "Audience retention graphs on YouTube are literal electrocardiograms of viewer interest. Every flatline or upward tick corresponds to an emotional payoff, while every downward slope indicates cognitive boredom. The 3-Second Cut Rule states that human visual interest in a static 2D screen begins decaying after 2.5 seconds. By continuously resetting visual stimuli through scale keyframes, asset swaps, paper overlays, and sound-cued J-cuts, the editor maintains visual novelty, keeping the viewer's brain in an active, engaged state.",
        keyPoints: [
          "**The 0.2-Second Silence Cap:** In digital video, any pause exceeding 250 milliseconds feels like dead air and triggers thumb-swiping reflexes.",
          "**L-Cuts and J-Cuts:** Overlapping audio across visual cuts creates subconscious continuity that hides video edits.",
          "**Scale Punch-Ins:** Re-framing a medium shot into a close-up by 8% creates the illusion of a multi-camera production from a single AI generation."
        ]
      },
      learning: {
        resources: [
          {
            title: "Descript Text-Based Editing & Filler Word Removal Guide",
            url: "https://www.descript.com/video-editing",
            type: "Official Docs"
          },
          {
            title: "CapCut Pro Desktop Advanced Keyframing & Timeline Shortcuts",
            url: "https://www.capcut.com/resource",
            type: "Creator Guide"
          },
          {
            title: "Walter Murch's 'In the Blink of an Eye': The 6 Rules of Film Editing",
            url: "https://www.filmsound.org/murch/blink.htm",
            type: "Case Study"
          }
        ]
      }
    },

    // Node 8
    {
      id: "step-8",
      stepNumber: 8,
      phaseId: "phase-3",
      title: "Kinetic Typography, Sound Effects (SFX) & Retention Hooks",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Add color-highlighted kinetic captions, visual zooms every 3-5 seconds, whooshes, risers, and sub-bass impacts.",
      description: "Over 75% of YouTube Shorts and mobile videos are watched in public without headphones or with low volume. High-retention creators rely on dynamic kinetic captions—highlighting active spoken words in high-contrast yellow or green—and an immersive sound design landscape. Pairing every on-screen text pop, headline reveal, and camera transition with subtle acoustic feedback (whooshes, cash registers, typewriter clicks, sub-drops) creates a multi-sensory experience that locks viewer focus.",
      playbook: {
        setup: "Open CapCut Pro or Submagic. Generate dynamic auto-captions. Set typography to a bold, clean sans-serif (e.g., Montserrat Black, The Bold Font, or Futura Extra Bold).",
        execute: "Configure kinetic caption styling: limit on-screen text to 1 to 3 words at a time, apply active word color highlighting (#FFE600 yellow or #00FF66 neon green), and add subtle spring bounce keyframes. Drop sound effects (SFX) onto a dedicated timeline track: whooshes on cuts, typewriter clicks on headlines, and low 60Hz sub-drops on shocking reveals.",
        verify: "Review with audio muted: confirm the entire video can be understood effortlessly from captions alone. Review with headphones: verify sound effects enhance the narrative without overpowering vocal clarity."
      },
      tools: [
        {
          name: "CapCut",
          type: "Freemium",
          url: "https://www.capcut.com",
          description: "All-in-one desktop editor with automated word-by-word animated captions, pre-cleared viral sound effect libraries, and text presets.",
          bestFor: "Word-by-word kinetic captions & built-in sound effects"
        },
        {
          name: "Submagic",
          type: "Freemium",
          url: "https://www.submagic.co",
          description: "AI tool specialized in generating viral Hormozi-style short-form captions with automatic emojis, highlights, and sound effects.",
          bestFor: "Automated viral short-form captions with emojis & b-roll"
        },
        {
          name: "ElevenLabs SFX",
          type: "Freemium",
          url: "https://elevenlabs.io/sound-effects",
          description: "Frontier AI sound design generator creating custom foley, futuristic whooshes, cinematic risers, and ambient atmospheres from text prompts.",
          bestFor: "Custom AI cinematic sound effects & foley design"
        }
      ],
      callouts: {
        mistake: "Displaying long full sentences in captions that take up 4 lines of screen space, forcing the viewer to read a block of text instead of watching the video.",
        proTip: "Keep captions to a maximum of 2 words per frame on Shorts; the rapid flashing of words forces the human eye to stay glued to the center of the screen.",
        mistakes: [
          "Using harsh, loud sound effects (like a deafening vine boom) that hurt headphone users and cause immediate drop-offs.",
          "Choosing unreadable cursive or thin serif fonts that disappear against bright white background video scenes.",
          "Placing captions too low on the screen, where YouTube mobile UI overlays (channel name, subscribe button, audio title) completely block them."
        ],
        proTips: [
          "Always add a subtle black stroke (4px to 6px) and a soft black drop shadow to white or yellow text so it remains readable over any background.",
          "Layer a continuous low-level ambient texture (rain, vinyl crackle, tape hiss, war room hum) at -24dB under your entire video to create cinematic depth.",
          "Use ElevenLabs SFX to generate unique foley: 'heavy antique safe door locking with deep metallic resonance' creates an instant audio signature."
        ]
      },
      promptLab: {
        title: "Kinetic Typography & Sound Design Choreographer",
        description: "Generate a multi-sensory sound effects cue sheet and word-by-word caption styling guide for a high-tension scene.",
        variables: [
          {
            name: "Video Format",
            label: "Video Format",
            options: ["Vertical YouTube Short (9:16)", "Horizontal Documentary (16:9)"],
            default: "Vertical YouTube Short (9:16)"
          },
          {
            name: "Caption Style",
            label: "Caption Style",
            options: ["The Hormozi Bounce (Bold Yellow Highlight + Emoji Pop)", "The Minimalist Sleek (Clean White with Green Word Flash)", "The Crime Doc Typewriter (Subtle Red Glow with Terminal Beeps)"],
            default: "The Hormozi Bounce (Bold Yellow Highlight + Emoji Pop)"
          },
          {
            name: "SFX Palette",
            label: "SFX Palette",
            options: ["High-Stakes Wall Street (Cash registers, camera shutters, paper rustle, sub-drops)", "Dark Geopolitical Thriller (Sonar pings, radio static, tactical thumps, drone swells)", "Cyber Heist (Keyboard clatter, glitch sweeps, digital beeps, alarm pulses)"],
            default: "High-Stakes Wall Street (Cash registers, camera shutters, paper rustle, sub-drops)"
          }
        ],
        template: `You are a master sound designer and motion typography specialist for viral YouTube media brands.

Design a comprehensive Sound & Caption Choreography Sheet for:
- Video Format: [Video Format]
- Caption Style: [Caption Style]
- SFX Palette: [SFX Palette]

Provide:
1. Caption Styling Specs: Font family, size, letter tracking, active word highlight color hex, stroke, and safe-zone margins.
2. SFX Cue Sheet (0:00 - 0:15): Exact timestamps, action triggers, sound effect asset names, and timeline volume levels (in dB).
3. ElevenLabs Sound Generation Prompts: 2 text-to-sound prompts to generate custom foley for this scene.`,
        expectedOutput: `### Sound Design & Typography Blueprint

#### 1. Caption Styling & Safe Zone Parameters
- **Font:** \`Montserrat Black\` (All Caps)
- **Scale / Size:** 58pt on 1080x1920 canvas
- **Base Color:** Pure White (\`#FFFFFF\`)
- **Active Word Highlight:** Electric Neon Lime (\`#00FF66\`) or Amber Gold (\`#FFCC00\`)
- **Border & Shadow:** 5px Black Stroke (\`#000000\`), 45% Opacity Drop Shadow (Y-offset: 4px, Blur: 6px)
- **Safe Zone Rule:** Position captions at **Y: 1050px** (strictly above bottom 400px mobile UI buttons and below top 300px header).

#### 2. Sound Effects Cue Sheet (0:00 - 0:15)
| Timestamp | Trigger Action | Recommended SFX File | Volume (dB) |
| :--- | :--- | :--- | :--- |
| **0:00.0** | Video start / Title punch | \`Cinematic Sub Boom 80Hz\` | **-6 dB** |
| **0:01.4** | Dollar amount text pop | \`Vintage Cash Register Ka-Ching\` | **-12 dB** |
| **0:03.2** | Fast camera whip-pan | \`Air Woosh Fast Stinger\` | **-14 dB** |
| **0:06.5** | Leaked document drop | \`Heavy Manila Folder Slam on Desk\` | **-10 dB** |
| **0:11.0** | Cliffhanger open loop | \`Low Tension Cello Drone Riser\` | **-16 dB -> -8 dB (crescendo)** |

#### 3. Custom ElevenLabs SFX Prompts
- **Prompt A (Heist Riser):** \`"A dark ominous analog synthesizer crescendo rising in pitch with sub-bass distortion and ticking metallic clock in background, cinematic, 4 seconds"\`
- **Prompt B (Paper Impact):** \`"Single crisp paper document slapped onto polished oak boardroom table, sharp acoustic snap, interior room reverb"\``
      },
      conceptGuide: {
        title: "Dual-Coding Theory & Sound-Image Synchronization",
        overview: "In cognitive psychology, Allan Paivio's Dual-Coding Theory proves that human information processing is dramatically magnified when visual and verbal-acoustic information are presented simultaneously. When a viewer reads a highlighted word at the exact millisecond they hear it vocalized, neural processing resistance drops to near zero. Layering synchronized sound effects anchors the viewer's subconscious attention. A visual cut without audio feedback feels empty; a visual cut paired with an organic whoosh and bass impact feels tangible and authoritative.",
        keyPoints: [
          "**The 1-to-2 Word Rhythm:** Flashing captions one or two words at a time increases visual reading speed by 300% over full sentences.",
          "**Sound Effect Subtlety:** Good sound design is felt rather than consciously noticed; if an SFX asset startles the viewer, turn it down by 4dB.",
          "**Center-Eye Retention:** Keeping kinetic captions tightly anchored in the optical center prevents viewer eye-fatigue from darting across the screen."
        ]
      },
      learning: {
        resources: [
          {
            title: "Submagic AI Caption Styling & Auto-Emoji Architecture",
            url: "https://www.submagic.co",
            type: "Creator Guide"
          },
          {
            title: "ElevenLabs AI Sound Effects Generator Documentation",
            url: "https://elevenlabs.io/docs/sound-effects",
            type: "Official Docs"
          },
          {
            title: "The Psychology of Sound Design in Cinema & Advertising",
            url: "https://www.asoundeffect.com/sound-design-psychology/",
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
      title: "3-Element High-CTR Thumbnail Engineering",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Create thumbnails with high visual contrast, minimal text (under 4 words), and facial expressions that provoke extreme curiosity.",
      description: "You can produce the greatest video in YouTube history, but if nobody clicks the thumbnail, your impressions drop to zero. Elite YouTube thumbnails are not complex movie posters; they are simple, high-contrast billboards designed to be decoded in 0.4 seconds on a 2-inch mobile screen. The proven 3-Element Thumbnail Rule restricts the composition to: 1) One high-emotion focal face or iconic object, 2) One high-contrast background environment, and 3) A maximum of 2 to 4 bold words that complement—rather than repeat—the video title.",
      playbook: {
        setup: "Review the title options generated in Node 1. Identify what visual curiosity gap remains unanswered by the title. Open Midjourney v6, Photoshop Generative Fill, and Figma.",
        execute: "Generate the focal visual element in Midjourney: apply high-contrast rim lighting, saturated warm highlights, and deep shadows. Use Photoshop Generative Fill to isolate the subject, expand the canvas to 16:9 (1280x720), and add Gaussian blur (3px–6px) to the background to force the subject forward. In Figma, add 2 to 3 words of bold text using high-contrast yellow or white with heavy drop shadows.",
        verify: "Run the 'Squint Test' and zoom out to 12% scale (mobile mockup size): verify the subject's emotional expression and text words are instantly legible within 500 milliseconds."
      },
      tools: [
        {
          name: "Midjourney",
          type: "Paid",
          url: "https://www.midjourney.com",
          description: "Top-tier AI image generator for creating expressive, high-contrast focal characters, dramatic lighting, and cinematic scenes.",
          bestFor: "Dramatic thumbnail focal subjects & expressive character portraits"
        },
        {
          name: "Photoshop Generative Fill",
          type: "Paid",
          url: "https://www.adobe.com/products/photoshop.html",
          description: "Industry-standard image manipulation tool with Firefly AI generative expand, object removal, rim lighting, and color grading.",
          bestFor: "Background expansion, subject cutouts, rim lighting & visual grading"
        },
        {
          name: "Figma",
          type: "Freemium",
          url: "https://www.figma.com",
          description: "Collaborative design platform for rapid thumbnail typography layout, mobile preview mockups, and side-by-side A/B comparisons.",
          bestFor: "Thumbnail typography, mobile viewport testing & layout design"
        }
      ],
      callouts: {
        mistake: "Repeating the exact same text from your video title on the thumbnail; the thumbnail and title must work as a two-part punchline team.",
        proTip: "Add a subtle painted yellow or cyan rim light along the edge of your focal subject to make them pop off dark YouTube dark-mode backgrounds.",
        mistakes: [
          "Cluttering the thumbnail with 6 different elements, arrows, red circles, and 10 words of text that turn into unreadable mud on mobile devices.",
          "Placing crucial text or faces in the bottom right corner where the YouTube timestamp duration badge (e.g. '12:45') permanently covers it.",
          "Using low-contrast pastel colors that wash out against YouTube's dark theme (#0F0F0F) interface."
        ],
        proTips: [
          "Use complementary color schemes: pairing warm skin tones/oranges with deep cyan or dark slate blue backgrounds creates maximum natural optical pop.",
          "Limit text to a maximum of 3 words (e.g., 'THE SECRET BET', 'HE LIED.', 'TOO LATE'); words should provoke an unanswered question.",
          "Always test your thumbnail at 100px by 56px (actual YouTube mobile feed size) before publishing; if it fails the squint test, scrap it."
        ]
      },
      promptLab: {
        title: "High-CTR 3-Element Thumbnail Concept Synthesizer",
        description: "Generate 3 complete thumbnail concepts pairing focal subjects, background contrast, and 2-word title complements.",
        variables: [
          {
            name: "Video Title",
            label: "Video Title",
            options: ["How One Bad Bet Bankrupted a $120B Titan", "The Secret Monopoly Behind 92% of World Microchips", "Why Wall Street Quietly Erased This Billionaire", "The Darkest Hack in Banking History"],
            default: "How One Bad Bet Bankrupted a $120B Titan"
          },
          {
            name: "Focal Subject Style",
            label: "Focal Subject Style",
            options: ["Sweating CEO with Head in Hands (Dramatic Shadow)", "Shadowed Silhouette with Glowing Red Stock Chart", "Gold Bullion Bar Melted into Slag", "Arrest Handcuffs on Luxury Silk Suit"],
            default: "Sweating CEO with Head in Hands (Dramatic Shadow)"
          },
          {
            name: "Text Hook Words",
            label: "Text Hook Words",
            options: ["ALL GONE.", "THE COVERUP", "ZERO WARNING", "THEY KNEW."],
            default: "ALL GONE."
          }
        ],
        template: `You are the lead thumbnail designer for YouTube channels averaging 10%+ CTRs on browse features.

Design a high-CTR thumbnail concept for:
- Video Title: [Video Title]
- Focal Subject: [Focal Subject]
- Text Hook Words: [Text Hook Words]

Provide:
1. The 3-Element Breakdown: Exact description of Focal Subject (Left/Center), Context Background (Right/Back), and Visual Contrast Strategy.
2. Complete Midjourney Prompt: To generate the raw focal character/scene in 16:9 format with dramatic rim lighting.
3. Photoshop Composition & Color Grading Notes: Subject cutout, background blur, color grading LUT, and drop shadow specs.
4. Text Graphic Specs: Exact placement (avoiding bottom-right timestamp), font choice, color, and stroke.`,
        expectedOutput: `### High-CTR Thumbnail Architecture

#### 1. The 3-Element Visual Composition
- **Element 1 (Focal Subject - Center Left):** An exhausted CEO in an unbuttoned luxury tuxedo holding his head in despair, sweat glistening on forehead under harsh warm directional spotlight.
- **Element 2 (Background Context - Right):** A massive dark corporate trading floor at night with red holographic stock numbers plunging down into the abyss. Soft 8px Gaussian blur applied.
- **Element 3 (Text Element - Top Left):** Bold text **"ALL GONE."** in electric yellow (\`#FFDD00\`) angled slightly at -3 degrees.

#### 2. Midjourney v6 Prompt
\`/imagine prompt: Extreme close-up portrait of an exhausted middle-aged executive in disheveled tuxedo with head in hands, expression of sheer shock and financial ruin, intense cinematic rim lighting, deep shadows, Kodak Portra 400 film look, dark moody corporate boardroom in background with red neon glow, photorealistic, 8k resolution --ar 16:9 --style raw --v 6.1 --s 250\`

#### 3. Photoshop Post-Processing Blueprint
1. **Subject Isolation:** Cut out executive using Select Subject; apply a 2px Refine Edge brush on hair.
2. **Rim Light Painting:** Create a blank layer set to *Color Dodge*; with a soft 30% brush, paint warm amber light along the right shoulder and jawline.
3. **Background Separation:** Drop background exposure by **-1.2 EV** and apply **6px Gaussian Blur** so the subject pops forward with 3D depth.
4. **Color Grading LUT:** Apply a high-contrast 'Teal & Orange' curve to maximize color tension.

#### 4. Typography Layout
- **Font:** \`Impact\` or \`Bebas Neue\` (Extra Bold, All Caps)
- **Position:** Top Left corner (X: 60px, Y: 80px). *Completely clear of the bottom-right timestamp area.*
- **Effects:** 8px Solid Black Stroke + 60% Black Drop Shadow (Distance: 12px, Blur: 8px).`
      },
      conceptGuide: {
        title: "Visual Saliency & The 0.4-Second Mobile Glance Test",
        overview: "When a user scrolls through the YouTube mobile homepage, their eyes scan across thumbnail images at an average speed of 400 milliseconds per impression. Visual saliency is the neurological quality that causes certain pixels to capture involuntary attention before the conscious mind can process them. Thumbnails with excessive detail, low contrast, or illegible text fail the glance test and are filtered out by the brain as visual clutter. By employing extreme chiaroscuro contrast, biological facial cues (widened pupils, furrowed brows), and isolated focal subjects, creators trigger the brain's priority processing pathways.",
        keyPoints: [
          "**The Squint Test:** If you squint your eyes until your vision blurs, the core concept and emotion of the thumbnail must remain clearly identifiable.",
          "**The Two-Part Curiosity Punch:** The title sets up the question; the thumbnail hints at the shocking answer without giving away the ending.",
          "**The Timestamp Dead Zone:** The bottom-right 25% of any thumbnail is covered by YouTube's video duration badge; keep all faces and text away from this zone."
        ]
      },
      learning: {
        resources: [
          {
            title: "YouTube Creator Academy: Thumbnail & Title Best Practices",
            url: "https://support.google.com/youtube/answer/72431",
            type: "Official Docs"
          },
          {
            title: "Photoshop Generative Fill Advanced Compositing Masterclass",
            url: "https://helpx.adobe.com/photoshop/using/generative-fill.html",
            type: "Creator Guide"
          },
          {
            title: "Visual Saliency & Eye-Tracking Studies in Digital Feed Consumption",
            url: "https://www.nngroup.com/articles/eyetracking-study-of-web-visual-hierarchy/",
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
      title: "Algorithmic Publishing, A/B Testing & Multi-Platform Syndication",
      timeElite: "1.5 hrs",
      difficulty: "Advanced",
      summary: "A/B test 3 thumbnail variants, repurpose long-form segments into vertical Shorts, and schedule for peak audience timezones.",
      description: "Publishing a video is not the end of the production cycle; it is the beginning of the algorithmic distribution loop. Professional YouTube operations use YouTube Studio's native 'Test & Compare' feature to test 3 distinct thumbnail variations simultaneously, measuring watch-time share to determine the mathematical winner. Concurrently, creators utilize AI clipping engines (like OpusClip) to slice the long-form master video into 3 to 5 high-hook vertical Shorts, syndicating across TikTok, Instagram Reels, and YouTube Shorts to funnel new audiences into the main documentary channel.",
      playbook: {
        setup: "Export your final master video in 4K resolution (H.264 or ProRes). Prepare 3 thumbnail variants with distinct focal visual concepts (not just minor font color tweaks). Open YouTube Studio.",
        execute: "Upload the video as 'Unlisted' at least 4 hours before launch to allow YouTube to finish 4K processing and copyright content ID checks. Load 3 thumbnail variants into YouTube Studio's 'Test & Compare' tool. Run the long-form master through OpusClip to extract 3 viral 60-second vertical Shorts. Schedule the long-form video to publish during your target audience's peak traffic window (typically 2:00 PM to 4:00 PM EST).",
        verify: "Check YouTube Studio Realtime analytics at hour 2, hour 24, and hour 72: monitor Click-Through Rate (CTR target: 6.5%+), Average Percentage Viewed (APV target: 50%+ on long-form, 75%+ on Shorts), and inspect the winning thumbnail in the Test & Compare dashboard."
      },
      tools: [
        {
          name: "YouTube Studio Test & Compare",
          type: "Free",
          url: "https://studio.youtube.com",
          description: "YouTube's native multi-variant thumbnail testing tool that splits impressions among up to 3 thumbnails and identifies the watch-time winner.",
          bestFor: "Automated 3-way thumbnail A/B testing & watch-time share metrics"
        },
        {
          name: "OpusClip",
          type: "Freemium",
          url: "https://www.opus.pro",
          description: "AI video repurposing platform that automatically detects hooks in long-form videos and edits them into captioned vertical Shorts.",
          bestFor: "Automated long-form to short-form video slicing & virality scoring"
        },
        {
          name: "Buffer",
          type: "Freemium",
          url: "https://buffer.com",
          description: "Social media management and publishing platform for scheduling multi-platform short-form video syndication across TikTok and Reels.",
          bestFor: "Multi-platform video scheduling & syndication"
        }
      ],
      callouts: {
        mistake: "Publishing a video immediately after uploading while YouTube is still processing the 360p low-res version, leading initial viewers to abandon due to blurry quality.",
        proTip: "In YouTube Studio's Test & Compare, make the 3 thumbnails drastically different: 1) Face-centric, 2) Object-centric, and 3) Text-centric; subtle font tweaks never yield statistical winners.",
        mistakes: [
          "Changing both the title and thumbnail at the exact same time when a video underperforms, making it impossible to diagnose which variable caused the change.",
          "Neglecting to schedule uploads around target audience timezones (e.g., uploading at 3:00 AM US Eastern when 70% of high-RPM viewers are asleep).",
          "Publishing AI-sliced Shorts with watermarks from editing apps, which triggers immediate algorithmic suppression on YouTube Shorts and Instagram Reels."
        ],
        proTips: [
          "If a long-form video flatlines with under 3.5% CTR after 24 hours, swap in your strongest alternative thumbnail immediately to give the algorithm a second chance.",
          "Pin a comment on all repurposed vertical Shorts containing a direct link to the full long-form documentary, driving high-intent subscribers to your flagship channel.",
          "Monitor the 'Audience Retention Drop-Off Points' in YouTube Studio: if a steep drop occurs at 1:15, identify what caused the drop and avoid that pacing mistake in your next script."
        ]
      },
      promptLab: {
        title: "YouTube Multi-Variant A/B Packaging & Launch Strategy",
        description: "Plan a full multi-variant publishing package including 3 distinct thumbnail concepts, 3 title angles, and pinned comment funnel links.",
        variables: [
          {
            name: "Video Subject",
            label: "Video Subject",
            options: ["The Secret Company That Owns 90% of Eyeglasses (Luxottica)", "How Nvidia Secretly Conquered the World", "The $100 Billion Dark Heist of Russian Oligarchs", "Why Boeing Ignored Its Own Engineers"],
            default: "The Secret Company That Owns 90% of Eyeglasses (Luxottica)"
          },
          {
            name: "Primary Audience",
            label: "Primary Audience",
            options: ["US / UK Tech & Business Enthusiasts (High RPM)", "Global General Public / Curiosity Seekers", "Finance & Investment Professionals"],
            default: "US / UK Tech & Business Enthusiasts (High RPM)"
          },
          {
            name: "Syndication Focus",
            label: "Syndication Focus",
            options: ["YouTube Long-Form + 3 Shorts Funnel", "Multi-Platform (YouTube + TikTok + Reels)", "Pure Shorts Viral Engine"],
            default: "YouTube Long-Form + 3 Shorts Funnel"
          }
        ],
        template: `You are the chief growth officer and algorithmic strategist for an elite YouTube automation media house.

Generate a complete Launch Packaging & A/B Testing Blueprint for:
- Video Subject: [Video Subject]
- Primary Audience: [Primary Audience]
- Syndication Focus: [Syndication Focus]

Provide:
1. 3 Title & Thumbnail Hypotheses for YouTube 'Test & Compare':
   - Variant A (Curiosity & Conspiracy)
   - Variant B (Numbers & Extreme Scale)
   - Variant C (Direct Conflict & Villain Framing)
2. Strategic Launch Schedule: Ideal day and time (EST/UTC) and pre-upload checklist.
3. Shorts Repurposing Matrix: 3 micro-hook angles to extract using OpusClip, including the exact pinned comment call-to-action.`,
        expectedOutput: `### YouTube Algorithmic Launch Blueprint

#### 1. Three-Variant 'Test & Compare' Packaging Matrix
- **Variant A (The Conspiracy Angle):**
  - **Title:** *"The Secret Monopoly That Controls 80% of Sunglasses"* (51 chars)
  - **Thumbnail Concept:** A massive shadowy boardroom silhouette adjusting luxury designer frames; electric text: **"THEY OWN ALL OF THEM."**
- **Variant B (The Extreme Scale Angle):**
  - **Title:** *"Why a $10 Pair of Glasses Costs $500"* (38 chars)
  - **Thumbnail Concept:** Extreme split comparison: $10 plastic frame on left vs. $650 designer frame on right; large red equality sign with text: **"SAME FACTORY."**
- **Variant C (The Villain Framing):**
  - **Title:** *"How One Italian Billionaire Fooled the Entire World"* (52 chars)
  - **Thumbnail Concept:** Black and white portrait of founder Leonardo Del Vecchio with gold foil logo marks covering his eyes; text: **"THE CON."**

#### 2. Strategic Launch Schedule & Quality Gates
- **Upload Day & Time:** **Thursday at 2:30 PM EST (18:30 UTC)** *(Captures afternoon browse traffic in North America and prime evening viewing in Europe)*.
- **Pre-Flight Processing Checklist:**
  1. Upload as *Unlisted* at 9:00 AM EST (5.5 hours before public release).
  2. Verify 4K resolution badge and VP09/AV01 high-bitrate codec processing in browser.
  3. Ensure clean automated copyright scan with zero yellow-dollar monetization claims.
  4. Upload all 3 thumbnail files into YouTube Studio's native 'Test & Compare' slot.

#### 3. Shorts Repurposing & Channel Funnel Matrix
| Short Clip # | Viral Hook Opening | Source Segment | Pinned Funnel Comment |
| :--- | :--- | :--- | :--- |
| **Short 1** | *"Ray-Ban, Oakley, Prada, and Chanel are all made by the exact same company."* | Minute 01:20 - 02:15 | *"Watch the full investigation on how Luxottica took over the world on our channel ➡️ [Link]"* |
| **Short 2** | *"When Oakley refused to sell out to this Italian monopoly, they were wiped out in 6 months."* | Minute 04:30 - 05:25 | *"The full corporate war is linked in the related video above 👆"* |
| **Short 3** | *"Here is the 1000% markup secret luxury brands don't want you to know."* | Minute 07:10 - 08:00 | *"Want to see how the monopoly was built? Watch full video on our main channel 🚀"* |`
      },
      conceptGuide: {
        title: "The Multi-Variant Feedback Loop & Algorithmic Velocity",
        overview: "The modern YouTube recommendation engine does not reward upload volume; it rewards algorithmic velocity and satisfaction signals. In the first 24 to 72 hours following an upload, the algorithm tests your video on seed audiences (subscribers and recent viewers). If the initial Click-Through Rate (CTR) and Average Percentage Viewed (APV) cross key performance thresholds, the system pushes the video to wider browse and suggested feeds. Multi-variant thumbnail testing removes human guesswork, allowing the audience's collective behavior to crown the most compelling visual package.",
        keyPoints: [
          "**Watch-Time Share Over Raw CTR:** YouTube Studio's Test & Compare tool measures total watch time generated by each thumbnail, not just raw clicks, preventing misleading clickbait from winning.",
          "**The 4-Hour Unlisted Buffer:** Always upload videos unlisted hours ahead of time to allow YouTube's encoding servers to generate high-bitrate 4K versions before real viewers arrive.",
          "**Vertical-to-Horizontal Funnels:** Slicing long-form documentaries into vertical Shorts acts as an automated top-of-funnel customer acquisition engine that converts casual scrollers into long-form subscribers."
        ]
      },
      learning: {
        resources: [
          {
            title: "YouTube Studio 'Test & Compare' Multi-Thumbnail Documentation",
            url: "https://support.google.com/youtube/answer/13854992",
            type: "Official Docs"
          },
          {
            title: "OpusClip AI Short-Form Viral Clipping Framework",
            url: "https://www.opus.pro/blog",
            type: "Creator Guide"
          },
          {
            title: "YouTube Search & Discovery Algorithm Performance Whitepaper",
            url: "https://research.google/pubs/deep-neural-networks-for-youtube-recommendations/",
            type: "Case Study"
          }
        ]
      }
    }
  ]
};
