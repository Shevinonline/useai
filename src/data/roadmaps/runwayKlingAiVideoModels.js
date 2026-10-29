// Complete production-grade steps data for "Runway, Kling & AI Video Models" Roadmap (10 Nodes)

export const runwayKlingAiVideoModelsData = {
  id: "runway-kling-ai-video-models",
  title: "Runway, Kling & AI Video Models",
  description: "Control camera motion, keyframe consistency, motion brushes, and cinematic upscaling across frontier video models.",
  category: "Tool Mastery Roadmaps",
  stepCount: 10,
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: Image-to-Video Anchor Frames & Cinematic Prompt Grammar",
      description: "Lock visual composition with generative anchor frames, master motion-first prompt syntax, and map production shots to frontier model capabilities."
    },
    {
      id: "phase-2",
      title: "Phase 2: Precision Camera Control, Keyframing & Motion Brushes",
      description: "Direct 3D camera vectors without spatial warping, interpolate start-to-end keyframes for seamless loops, and paint isolated multi-brush physics."
    },
    {
      id: "phase-3",
      title: "Phase 3: Character Performance, Act-One & Video-to-Video Restyling",
      description: "Drive photorealistic digital human performances with consumer webcams via Act-One and execute zero-flicker Video-to-Video structural style transfers."
    },
    {
      id: "phase-4",
      title: "Phase 4: Inpainting, 4K Temporal Upscaling & Final Assembly",
      description: "Perform generative video inpainting and aspect ratio outpainting, eliminate temporal artifacts with Topaz Video AI, and master unified 35mm film grain."
    }
  ],
  steps: [
    // Node 1
    {
      id: "step-1",
      stepNumber: 1,
      phaseId: "phase-1",
      title: "Why Image-to-Video (I2V) Beats Text-to-Video for Production Control",
      timeEstimate: "1.5 hrs",
      difficulty: "Beginner",
      summary: "Generate compositionally locked 16:9 or 9:16 base frames first so video models focus 100% on realistic physics and motion rather than inventing layout.",
      description: "In commercial filmmaking, advertising, and high-end visual effects, relying on raw Text-to-Video (T2V) is an uncontrollable gamble. When prompting a video diffusion model from text alone, the neural network must simultaneously invent character anatomy, architectural perspective, lighting setup, color palette, camera angle, and temporal motion in a single pass. This extreme cognitive load frequently leads to deformed limbs, morphing backgrounds, and inconsistent art direction across consecutive shots.\n\nProfessional AI filmmakers exclusively utilize the Image-to-Video (I2V) workflow. By first generating a compositionally locked, ultra-high-resolution 16:9 or 9:16 anchor frame using leading image generators like Midjourney v6.1 or Flux.1 Pro, creators lock 100% of the visual fidelity—wardrobe, facial features, lighting ratios, and prop placement—before a single frame of motion is computed. When this pristine image is ingested into Runway Gen-3 Alpha or Kling AI, the video model's parameter weights are liberated to focus purely on physical kinetics, fluid dynamics, and camera movement.",
      playbook: {
        setup: "Open Midjourney v6.1 (midjourney.com) or Flux.1 Pro via Fal.ai. Ensure your generation aspect ratio matches your target delivery format (`--ar 16:9` for desktop/film, `--ar 9:16` for mobile shorts/TikTok).",
        execute: "Craft an image prompt establishing your subject, lighting, and depth of field (e.g., 'Medium cinematic shot of an astronaut in an orange pressurized suit standing on a basalt plateau on Mars, dust storm horizon, cinematic rim lighting, 35mm anamorphic lens --ar 16:9 --v 6.1'). Upscale the cleanest generation. Open Runway Gen-3 Alpha, select 'Image to Video', and upload the PNG as your starting First Frame.",
        verify: "Confirm the uploaded image retains crisp edges without compression artifacts. Set motion strength to 4 or 5. Generate a 5-second video and verify that the astronaut's suit geometry and facial features remain identical to the original anchor image across all 120 frames."
      },
      tools: [
        {
          name: "Midjourney v6.1",
          type: "Anchor Frame Generator",
          url: "https://www.midjourney.com",
          description: "Premier text-to-image engine delivering photographic skin textures, cinematic lighting setups, and precise composition control.",
          bestFor: "Cinematic anchor frames, consistent character portraits & environment design"
        },
        {
          name: "Flux.1 Pro",
          type: "State-of-the-Art Open Diffusion",
          url: "https://blackforestlabs.ai",
          description: "Leading 12-billion parameter rectified flow transformer model offering unmatched prompt adherence and typographic rendering.",
          bestFor: "Complex compositional layouts, legible in-frame text & photorealism"
        },
        {
          name: "Runway Gen-3 Alpha",
          type: "Generative Video Model",
          url: "https://runwayml.com",
          description: "Frontier video diffusion model engineered for high-fidelity physical simulation, cinematic camera control, and rapid rendering.",
          bestFor: "Image-to-Video animation, camera trajectories & physical kinetics"
        }
      ],
      callouts: {
        mistake: "Using Text-to-Video directly for multi-shot storytelling, resulting in your main character morphing into an entirely different person between shot 1 and shot 2.",
        proTip: "Generate your anchor frame with a slightly wider focal length (e.g., 28mm or 35mm) so the video model has visual context to execute camera pans without hallucinating edge details.",
        mistakes: [
          "Uploading low-resolution 720p screenshots as input anchor images, causing the video diffusion model to amplify digital compression noise.",
          "Using anchor frames with heavy motion blur baked into the image, which confuses the video model's optical flow calculation.",
          "Failing to maintain a consistent color grade across consecutive anchor frames before feeding them into video generators."
        ],
        proTips: [
          "Use Midjourney's `--cref` (Character Reference) tag to generate 5 different anchor frames of the same actor across various camera angles.",
          "In Flux.1, prompt for 'clean focal separation with f/2.8 aperture' so background elements blur smoothly when the camera dollies forward.",
          "Always export your anchor images as uncompressed PNGs rather than lossy JPEGs to preserve fine edge contrast for diffusion guidance."
        ]
      },
      promptLab: {
        title: "Photographic Anchor Frame & Motion Conditioning Prompt Generator",
        description: "Generate paired prompts: a high-fidelity image prompt for Midjourney/Flux and a motion-only prompt for Runway Gen-3 Image-to-Video.",
        variables: [
          {
            name: "Cinematic Setting",
            label: "Scene Location",
            options: ["Cyberpunk Rain-Drenched Alley in Neo-Tokyo", "Deep Space Research Vessel Greenhouse", "Golden Hour Sahara Desert Dune Expedition"],
            default: "Cyberpunk Rain-Drenched Alley in Neo-Tokyo"
          },
          {
            name: "Primary Subject",
            label: "Focal Subject",
            options: ["Female Cybernetic Courier Holding Glowing Data Core", "Robotic Botany Rover Tending Bioluminescent Plants", "Weathered Nomad Adjusting Goggles Against Sandstorm"],
            default: "Female Cybernetic Courier Holding Glowing Data Core"
          },
          {
            name: "Lens & Camera Gear",
            label: "Cinematography Optics",
            options: ["Arri Alexa 65 with 50mm Cooke Anamorphic (f/2.0)", "RED V-Raptor with 24mm Ultra Prime (Deep Focus)", "Sony FX9 with 85mm G-Master (Shallow Bokeh)"],
            default: "Arri Alexa 65 with 50mm Cooke Anamorphic (f/2.0)"
          }
        ],
        template: `# Image-to-Video Anchor Frame & Motion Protocol
Location: [Cinematic Setting]
Subject: [Primary Subject]
Cinematography: [Lens & Camera Gear]

Act as a Master Cinematographer and AI Video Technical Director.
Generate the two-stage production prompt specification:
1. Midjourney v6.1 / Flux.1 Anchor Image Prompt:
   - Full composition prompt with lighting, color palette, camera optics, and technical flags (--ar 16:9, --style raw, --v 6.1).
2. Runway Gen-3 Alpha Motion Prompt:
   - Pure motion-direction prompt (strip all visual descriptions already locked in the image; specify only subject kinetics, environmental physics, and camera move).
3. Motion Parameter Settings: Motion slider (1-10), duration, and seed strategy.`,
        expectedOutput: `### Two-Stage I2V Production Specification

#### 1. Anchor Frame Generation Prompt (Midjourney v6.1 / Flux.1)
\`\`\`text
Cinematic wide establishing shot of [Primary Subject] in [Cinematic Setting], shot on [Lens & Camera Gear], volumetric atmospheric haze, cyan and magenta neon reflections on wet asphalt, cinematic lighting, 8k resolution, photorealistic film still, anamorphic horizontal lens flare, authentic motion picture depth of field --ar 16:9 --style raw --v 6.1 --s 250
\`\`\`
*Directorial Goal: Locks character identity, cybernetic arm detailing, wardrobe textures, and wet ground puddle reflections prior to video generation.*

#### 2. Runway Gen-3 Alpha Motion Prompt (Image-to-Video Input)
\`\`\`text
The woman turns her head slowly to look over her left shoulder, her breath visible in the cold air. The data core in her hands pulses with soft rhythmic cyan light. Gentle rain droplets fall vertically through the frame, creating tiny ripples in the street puddles below. The camera slowly dollies forward past her shoulder at a smooth, constant velocity. Zero warping, steady cinematic motion.
\`\`\`

#### 3. Runway Motion Settings
- **Motion Scale**: \`4.5\` (Maintains physical realism without tearing cybernetic textures).
- **Duration**: \`5 seconds\` (Optimal temporal consistency window).
- **Camera Movement**: Fixed slow dolly-in (Speed: 2).`
      },
      conceptGuide: {
        title: "Conditioning Diffusion Priors with Spatial Anchor Latents",
        overview: "Video diffusion models are extensions of 2D image diffusion models trained on paired sequences of video frames. In Text-to-Video mode, the model must sample both spatial layout (what things look like) and temporal vectors (how things move) from pure Gaussian noise. In Image-to-Video mode, the first frame is encoded into a fixed latent representation (via a VAE encoder) and passed as an immutable conditioning tensor. The model's cross-attention layers are anchored to these spatial coordinates, meaning the generative neural weights only calculate optical flow and velocity vectors.",
        keyPoints: [
          "**Spatial Latent Anchoring:** Locking initial pixel coordinates ensures character anatomy and set design do not morph across frames.",
          "**Optical Flow Focus:** The neural network focuses 100% of its compute on temporal physics, gravity, and fluid simulation.",
          "**Deterministic Continuity:** Facilitates multi-shot continuity across complex commercial storyboards."
        ]
      },
      learning: {
        resources: [
          {
            title: "Runway Academy: Image-to-Video Fundamentals & Workflows",
            url: "https://runwayml.com/academy/gen-3-alpha-image-to-video/",
            type: "Official Docs"
          },
          {
            title: "Midjourney Documentation: Aspect Ratios & Reference Flags",
            url: "https://docs.midjourney.com/docs/aspect-ratios",
            type: "Official Guide"
          },
          {
            title: "Black Forest Labs: Flux.1 Technical Architecture Overview",
            url: "https://blackforestlabs.ai",
            type: "AI Model Paper"
          },
          {
            title: "American Cinematographer: Anamorphic Lenses & Aspect Ratios",
            url: "https://theasc.com",
            type: "Cinematography Reference"
          }
        ]
      }
    },

    // Node 2
    {
      id: "step-2",
      stepNumber: 2,
      phaseId: "phase-1",
      title: "Motion-First Prompting Grammar (Subject Action + Scene Physics)",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Strip redundant visual adjectives when prompting I2V and write precise temporal action verbs, wind/fluid dynamics, and lighting shifts.",
      description: "One of the most widespread mistakes in AI video generation is copy-pasting an image generation prompt directly into an Image-to-Video prompt box. Writing adjectives like 'hyperrealistic 8k masterpiece beautiful lighting photorealistic' in an I2V prompt confuses the video diffusion model. The model already possesses the image; describing visual appearance again forces the model to re-evaluate the spatial latents, causing violent morphing, plastic skin textures, and unwanted visual shifts.\n\nMastering Image-to-Video requires adopting 'Motion-First Prompting Grammar'. The syntax consists of three strict components: Subject Action (verbs describing what the primary subject is doing), Scene Physics (environmental dynamics such as wind gusts, falling snow, billowing smoke, or splashing water), and Camera Mechanics (camera trajectory, speed, and lens rack focus). By focusing exclusively on temporal actions and physical forces, creators direct realistic kinematic behavior without destabilizing the visual image.",
      playbook: {
        setup: "Open Runway Gen-3 Alpha or Kling AI 1.6. Prepare an image of a character or product in an active environment.",
        execute: "Strip all visual adjectives from your prompt draft. Structure your prompt following the three-tier Motion Grammar formula: `[Subject Action] + [Scene Environmental Physics] + [Camera Trajectory & Speed]`. Example: 'The samurai unsheathes his katana with a measured, deliberate motion. Cherry blossom petals swirl aggressively across the frame from right to left in a gust of wind. Low-angle camera slowly orbits 30 degrees around the subject at constant velocity.' Ingest your image and generate.",
        verify: "Review the generated clip: confirm that the subject performs the verb without anatomical distortion, the environmental physics (wind/particles) obey realistic gravity, and the camera movement remains stable without background warping."
      },
      tools: [
        {
          name: "Runway Gen-3 Alpha",
          type: "Video Diffusion Platform",
          url: "https://runwayml.com",
          description: "Frontier video model featuring responsive natural language prompt parsing for complex multi-subject action choreography.",
          bestFor: "Complex temporal kinetics, cinematic action sequences & camera moves"
        },
        {
          name: "Kling AI 1.6",
          type: "Physics-First Video Model",
          url: "https://klingai.com",
          description: "Advanced Chinese AI video generation model renowned for superior human anatomy preservation and realistic physical interactions.",
          bestFor: "Realistic cloth simulation, hand gestures & complex object interactions"
        },
        {
          name: "Claude 3.7 Sonnet",
          type: "Prompt Refactoring Assistant",
          url: "https://www.anthropic.com/claude",
          description: "Reasoning LLM used to decompose static creative storyboards into concise, motion-first temporal prompt sequences.",
          bestFor: "Refactoring prose into structured action verbs & camera syntax"
        }
      ],
      callouts: {
        mistake: "Writing static descriptive nouns like 'wearing a red silk jacket' in an I2V prompt, which often causes the jacket's color to shift or pulsate during the video.",
        proTip: "Use adverbs that define velocity—such as 'gradually', 'briskly', 'at a constant slow rate', or 'abruptly halts'—to communicate acceleration curves to the diffusion engine.",
        mistakes: [
          "Overcrowding the prompt with 4 consecutive subject actions (e.g., 'runs, jumps, opens a door, sits down') in a single 5-second clip; video models can reliably execute only 1 to 2 actions per shot.",
          "Failing to specify environmental physics, leaving background trees, water, and curtains unnaturally frozen while the character moves.",
          "Using conflicting camera instructions (e.g., 'dolly in while panning left and zooming out rapidly'), resulting in disorienting spatial warping."
        ],
        proTips: [
          "For product commercials, prompt for macro lighting sweeps: 'A sharp warm key light sweeps diagonally across the perfume bottle glass from left to right.'",
          "Include atmospheric particulate terms like 'dust motes drifting lazily through sunbeams' to add cinematic life to quiet dialogue scenes.",
          "In Kling AI, use the prompt structure `[Subject] + [Movement] + [Speed: Fast/Slow] + [Background Motion]` for maximum fidelity."
        ]
      },
      promptLab: {
        title: "Motion-First Prompt Grammar Architect",
        description: "Deconstruct creative scene descriptions into clean, three-part Motion Grammar prompts optimized for Runway Gen-3 and Kling AI.",
        variables: [
          {
            name: "Subject & Key Action",
            label: "Subject Motion",
            options: ["Formula 1 Driver Raising Trophy on Podium", "Chef Slicing Fresh Tuna on Wooden Block", "Ballerina Executing a Pirouette on Stage"],
            default: "Formula 1 Driver Raising Trophy on Podium"
          },
          {
            name: "Environmental Physics",
            label: "Scene Dynamics",
            options: ["Champagne spray exploding into air with golden confetti rain", "Water droplets splashing from knife blade with rising steam", "Dust motes illuminated by theatrical spotlight with stage smoke billowing"],
            default: "Champagne spray exploding into air with golden confetti rain"
          },
          {
            name: "Camera Choreography",
            label: "Camera Vector",
            options: ["Slow-motion low-angle push-in (speed: slow)", "Macro tracking shot gliding parallel to surface", "Gentle 45-degree rotational orbit"],
            default: "Slow-motion low-angle push-in (speed: slow)"
          }
        ],
        template: `# Motion-First I2V Prompt Specification
Subject Kinetic: [Subject & Key Action]
Physics Simulation: [Environmental Physics]
Camera Mechanics: [Camera Choreography]

Act as a Principal Visual Effects Supervisor and AI Motion Director.
Transform this scene into a production-grade Image-to-Video prompt:
1. Syntax Sanitization: Strip all redundant adjectives that are already established in the anchor frame.
2. Formatted Motion-First Prompt: Construct the final prompt using the three-tier formula:
   - [Subject Dynamic Verb] + [Atmospheric & Fluid Physics] + [Camera Trajectory].
3. Frame Rate & Velocity Directives: Slow-motion timing guidance (e.g., 60fps simulation vs. real-time).
4. Negative Conditioning Directives: What motion traps to avoid in this specific shot.`,
        expectedOutput: `### Production Motion-First Prompt Blueprint

#### 1. Formatted Motion-First Prompt (Runway Gen-3 / Kling 1.6)
\`\`\`text
The driver thrusts the gold trophy upward with both arms, shouting in victory. High-pressure champagne sprays outward in a dense mist, while thousands of metallic gold and red confetti flakes flutter downward through the air. The low-angle camera slowly and steadily pushes in toward the subject at a constant cinematic speed. Smooth, realistic slow-motion fluid physics, zero warping, zero anatomical distortion.
\`\`\`

#### 2. Temporal & Velocity Breakdown
- **Subject Acceleration**: Initial burst of movement in seconds 0-2 (raising trophy), transitioning to sustained celebratory shaking in seconds 3-5.
- **Fluid & Particle Dynamics**: The champagne mist must disperse radially; confetti particles must tumble with chaotic drag rather than falling in uniform vertical lines.
- **Camera Mechanics**: Continuous low-angle dolly-in (Camera Move: In, Speed: 2.5).

#### 3. Negative Motion Directives & Pitfalls
- **Avoid Static Hands**: Prevent fingers from melding into the trophy handles by keeping motion scale at \`4.0\`.
- **Avoid Face Melts**: Ensure the cheering mouth opens naturally without deforming the jawline.
- **Avoid Stuttering Confetti**: Verify particle frame-to-frame persistence; re-roll seed if confetti flickers in and out of existence.`
      },
      conceptGuide: {
        title: "Disentangling Spatial Geometry from Temporal Vectors",
        overview: "In video diffusion architectures, attention mechanisms are split into Spatial Attention (analyzing pixels within a single frame) and Temporal Attention (tracking how features translate across consecutive frames). In Image-to-Video generation, the spatial features are already initialized by the reference image. When a user injects descriptive adjectives into the prompt, the model's text-cross-attention layers attempt to overwrite the spatial latents. By restricting prompt tokens strictly to motion verbs and physical forces, creators guide the temporal attention layers cleanly without causing spatial geometry collapse.",
        keyPoints: [
          "**Temporal Attention Isolation:** Restricting prompts to action verbs directs motion vectors without corrupting spatial appearance.",
          "**Fluid & Particle Coherence:** Prompting environmental physics (smoke, rain, debris) forces the neural model to render realistic atmospheric depth.",
          "**Kinematic Pacing:** Words describing acceleration ('gradually', 'abruptly') communicate velocity slopes to the temporal decoder."
        ]
      },
      learning: {
        resources: [
          {
            title: "Runway Gen-3 Alpha Prompting Guide & Grammar Rules",
            url: "https://docs.runwayml.com/gen-3-alpha/prompting",
            type: "Official Docs"
          },
          {
            title: "Kling AI Official User Manual & Prompt Syntax",
            url: "https://klingai.com",
            type: "Official Docs"
          },
          {
            title: "American Cinematographer: Camera Movement Mechanics & Language",
            url: "https://theasc.com",
            type: "Cinematography Standard"
          },
          {
            title: "arXiv: Video Diffusion Models and Temporal Consistency",
            url: "https://arxiv.org/abs/2204.03458",
            type: "AI Research Paper"
          }
        ]
      }
    },

    // Node 3
    {
      id: "step-3",
      stepNumber: 3,
      phaseId: "phase-1",
      title: "Matching Model Strengths (Runway Gen-3 vs. Kling vs. Veo 2 vs. Luma)",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Choose Kling for complex human/hand physics, Runway Gen-3 Turbo for fast cinematic camera moves, and Luma for seamless keyframe loops.",
      description: "The AI video landscape is not a winner-take-all ecosystem. Different frontier models possess vastly different training distributions, architectural priors, and physical simulation capabilities. Attempting to use a single model for every shot in a production pipeline leads to blown budgets, wasted credits, and compromised visual quality. Professional directors maintain a multi-model stack, routing each specific storyboard shot to the model best equipped to execute it.\n\nRunway Gen-3 Alpha (and Gen-3 Turbo) excels at high-speed cinematic camera moves, atmospheric lighting changes, and structural stability. Kling AI 1.6 leads the industry in complex human biology, realistic hand manipulation, eating/drinking mechanics, and high-elasticity cloth physics. Luma Dream Machine (and Ray 2) is the undisputed champion of start-frame to end-frame keyframe interpolation and camera tracking through complex 3D architecture. Google Veo 2 delivers ultra-long coherence and cinematic depth. Mastering the decision matrix of which model to deploy for a given visual effect ensures maximum production efficiency.",
      playbook: {
        setup: "Create accounts on Runway (runwayml.com), Kling AI (klingai.com), and Luma Dream Machine (lumalabs.ai). Alternatively, set up an API aggregator like Fal.ai for unified programmatic inference.",
        execute: "Audit your production storyboard. For a scene requiring a character drinking coffee with intricate hand-finger movements, route the anchor image to Kling AI 1.6 (High Quality Mode). For a sweeping aerial FPV drone shot through mountain peaks, route the shot to Runway Gen-3 Alpha with camera controls enabled. For a scene requiring an impossible visual morph between an apple and a gold pocket watch, route both images into Luma Dream Machine's Start/End Frame interpolator.",
        verify: "Evaluate the three outputs: confirm Kling preserved all 5 fingers and realistic liquid swallowing physics, Runway maintained steady mountain geometry without pixel distortion, and Luma executed a smooth, non-glitchy morph transition."
      },
      tools: [
        {
          name: "Runway Gen-3",
          type: "Cinematic Video Engine",
          url: "https://runwayml.com",
          description: "Industry-standard video generator offering Gen-3 Alpha and Turbo with precision camera trajectories and motion brushes.",
          bestFor: "Cinematic camera moves, high-speed vehicle shots & atmospheric lighting"
        },
        {
          name: "Kling AI",
          type: "Human Physics & Anatomy Leader",
          url: "https://klingai.com",
          description: "Top-tier video generation model featuring state-of-the-art human anatomy simulation, complex hand gestures, and 10-second clips.",
          bestFor: "Intricate human movements, eating/drinking, hand gestures & cloth physics"
        },
        {
          name: "Luma Dream Machine",
          type: "Keyframe & Camera Tracking Specialist",
          url: "https://lumalabs.ai/dream-machine",
          description: "Next-gen video model celebrated for seamless Start-to-End frame interpolation, 3D scene loops, and camera tracking.",
          bestFor: "Start/End frame morphs, seamless video loops & 3D fly-throughs"
        }
      ],
      callouts: {
        mistake: "Using Runway Gen-3 for complex close-up hand interactions (like tying shoelaces or dealing cards); Kling AI is far superior for intricate anatomical physics.",
        proTip: "Use Runway Gen-3 Turbo for rapid shot prototyping at 1/3 the credit cost; once camera movement is locked, switch to Alpha for master rendering.",
        mistakes: [
          "Running every generation on default 5-second durations when Kling supports native 10-second generation with consistent velocity.",
          "Using Luma Dream Machine without specifying camera motions, which can sometimes result in aggressive unexpected camera spinning.",
          "Ignoring API credit economics: failing to test prompts on cheaper turbo tiers before committing heavy compute on full-resolution master passes."
        ],
        proTips: [
          "Deploy Fal.ai to run Runway, Kling, and Luma via a single unified REST API for automated production pipelines.",
          "If a character needs to speak dialogue, prioritize Kling AI's built-in lip-sync module or export the clip to Hedra/Act-One.",
          "Keep an eye on Google Veo 2 for long-context temporal stability across shots exceeding 15 seconds."
        ]
      },
      promptLab: {
        title: "Model Selection Matrix & Shot Routing Blueprint",
        description: "Analyze complex shot specifications and route them to the optimal AI video model (Runway vs. Kling vs. Luma) with model-specific syntax.",
        variables: [
          {
            name: "Shot Complexity",
            label: "Action Type",
            options: ["Close-Up Hands Assembling Mechanical Watch", "Fast FPV Drone Weaving Through Forest Trees", "Surreal Transformation of City Skyline into Forest"],
            default: "Close-Up Hands Assembling Mechanical Watch"
          },
          {
            name: "Primary Risk Factor",
            label: "Potential Failure Mode",
            options: ["Anatomical Glitching & Extra Finger Hallucinations", "Geometric Background Warping & Shimmering", "Unnatural Morphing & Abrupt Cutoffs"],
            default: "Anatomical Glitching & Extra Finger Hallucinations"
          },
          {
            name: "Delivery Requirement",
            label: "Output Requirement",
            options: ["Broadcast 4K Commercial (Highest Physical Realism)", "Rapid Social Media Hook (Instant Turnaround)", "Seamless Background Video Loop (Web Canvas)"],
            default: "Broadcast 4K Commercial (Highest Physical Realism)"
          }
        ],
        template: `# Multi-Model Shot Allocation & Routing Matrix
Shot Requirement: [Shot Complexity]
Risk Mitigation: [Primary Risk Factor]
Delivery Standard: [Delivery Requirement]

Act as an Executive VFX Producer and AI Pipeline Technical Director.
Generate the definitive model allocation strategy:
1. Recommended Model & Tier: Choose between Runway Gen-3 Alpha/Turbo, Kling AI 1.6 (Standard/Pro), or Luma Dream Machine Ray2 with comprehensive technical rationale.
2. Model-Specific Parameter Configuration: Exact slider values (Motion strength, camera motion, duration, prompt weighting).
3. Tailored Model Prompt: Formatted prompt leveraging the specific architectural strengths of the chosen model.
4. Fallback Strategy: Secondary model to deploy if the primary choice exhibits edge-case artifacts.`,
        expectedOutput: `### Model Allocation Blueprint: [Shot Complexity]

#### 1. Primary Model Recommendation & Justification
- **Assigned Model**: **Kling AI 1.6 (Professional Mode - 1080p)**
- **Technical Rationale**: For [Shot Complexity], the dominant failure risk is [Primary Risk Factor]. Kling AI features the industry's most robust 3D human biomechanical prior. It natively tracks finger articulation, tweezers contact physics, and reflective metallic gear interactions far better than Western diffusion models, which frequently fuse fingers into objects.

#### 2. Model-Specific Parameter Configuration
\`\`\`yaml
platform: "Kling AI 1.6"
mode: "Professional Mode"
generation_type: "Image-to-Video"
parameters:
  duration: "5s"              # Shorter duration concentrates compute on delicate micro-movements
  creativity_relevance: 0.45  # Low creativity anchors strictly to the input watch gear geometry
  camera_control: "Static"    # Eliminates camera shake, allowing 100% focus on finger kinetics
\`\`\`

#### 3. Tailored Kling AI Prompt
\`\`\`text
Macro extreme close-up shot. The watchmaker's fingers gently use fine silver tweezers to place a tiny golden gear into the mechanical watch movement. Realistic subtle muscle tension in the fingers, deliberate steady motion, crisp metallic click as the gear seats into place. The camera remains completely static. Macro depth of field, zero hand distortion, authentic biological hand anatomy.
\`\`\`

#### 4. Secondary Fallback Plan
- **Fallback Platform**: **Runway Gen-3 Alpha with Multi-Motion Brush**
- **Fallback Protocol**: If Kling introduces unexpected motion blur, upload the anchor frame to Runway Gen-3, paint Brush 1 strictly over the hand/tweezers, set horizontal motion to +1.2, and freeze the watch casing with the static brush.`
      },
      conceptGuide: {
        title: "Comparative Model Architectures & Training Distributions",
        overview: "AI video generation models differ fundamentally in their training datasets and spatio-temporal architectures. Runway Gen-3 was trained extensively on cinematic camera footage, giving it an instinctive grasp of film director mechanics (dollies, cranes, Dutch angles, lighting shifts). Kling AI was trained on dense datasets of physical human interactions, giving it unmatched priors for biomechanics, cloth physics, and hand dexterity. Luma Dream Machine was trained with a focus on 3D spatial consistency and multi-view Gaussian splatting, making it superior for keyframe-to-keyframe path interpolation.",
        keyPoints: [
          "**Runway for Cinematography:** Superior camera mechanics, lighting transitions, and film-grade temporal stability.",
          "**Kling for Biomechanics:** Best-in-class simulation of human anatomy, hands, food, and physical contact.",
          "**Luma for Keyframe Morphs:** Unmatched start-frame to end-frame interpolation for seamless loops and transitions."
        ]
      },
      learning: {
        resources: [
          {
            title: "Runway Research: Gen-3 Alpha Technical Overview",
            url: "https://runwayml.com/research/introducing-gen-3-alpha",
            type: "Official Research"
          },
          {
            title: "Kling AI Documentation & Capability Matrix",
            url: "https://klingai.com",
            type: "Official Docs"
          },
          {
            title: "Luma Dream Machine Official Prompt Guide & Keyframe Rules",
            url: "https://lumalabs.ai/dream-machine",
            type: "Official Guide"
          },
          {
            title: "Fal.ai: Model Benchmarks & Latency Comparisons",
            url: "https://fal.ai/models",
            type: "Developer Platform"
          }
        ]
      }
    },

    // Node 4
    {
      id: "step-4",
      stepNumber: 4,
      phaseId: "phase-2",
      title: "Directing Camera Trajectories (Truck, Dolly, Orbit, FPV & Crane)",
      timeEstimate: "2.5 hrs",
      difficulty: "Intermediate",
      summary: "Combine horizontal pans, vertical tilts, dolly push-ins, and focal-length rack focuses without warping background geometry.",
      description: "Amateur AI video is plagued by chaotic, drifting camera moves. When a creator writes 'camera flies around dynamically', the diffusion model attempts multiple contradictory vectors simultaneously, resulting in dizzying background tearing, bending architecture, and subject warping. Professional cinematography relies on a precise visual vocabulary of physical camera rigs: Dolly (moving forward/backward), Truck (moving left/right), Pedestal/Crane (moving up/down), Pan (horizontal rotation), Tilt (vertical rotation), and Roll (rotational Dutch angle).\n\nRunway, Kling, and Luma offer dedicated Camera Control toolsets that allow creators to manipulate explicit 3D camera vector sliders. Instead of relying on random prompt chance, directors can dial in an exact 'Dolly In +2.5' paired with a subtle 'Pan Right -1.0' and 'Roll 0'. Furthermore, pairing camera movement with focal-length rack focusing—where the camera dollies forward while shifting depth-of-field focus from a foreground flower to a background character—creates Hollywood-grade visual storytelling with zero physical cameras.",
      playbook: {
        setup: "In Runway Gen-3 Alpha, select 'Image to Video' and upload a high-depth anchor frame (e.g., an interior hallway or wide landscape). Click on the 'Camera' control icon.",
        execute: "Select your desired 3D vector. Set 'Horizontal (Truck)' to +2.0 (sliding right), 'Zoom (Dolly)' to +3.0 (pushing forward), and keep 'Tilt' and 'Pan' at 0.0 for a pure tracking shot. Adjust the Speed slider to 'Smooth / Constant'. In the text prompt, reinforce the mechanical camera rig: 'Low-angle dolly tracking shot pushing forward smoothly along the marble floor. Stable architectural lines, zero barrel distortion.' Generate the clip.",
        verify: "Examine the edges of the frame: verify that perspective lines (walls, ceiling lights, floor tiles) converge naturally according to classical vanishing-point perspective without bending or rubber-banding."
      },
      tools: [
        {
          name: "Runway Camera Control",
          type: "3D Camera Vector Rig",
          url: "https://runwayml.com/docs/gen-2/camera-control",
          description: "Precision 6-axis camera motion engine enabling exact control over horizontal, vertical, zoom, pan, tilt, and roll vectors.",
          bestFor: "Precise dolly, crane, tracking, and orbital camera movements"
        },
        {
          name: "Luma Ray2 Camera Master",
          type: "Generative Camera Director",
          url: "https://lumalabs.ai",
          description: "Camera trajectory controller optimized for smooth FPV drone passes, rotational orbits, and 3D architectural fly-throughs.",
          bestFor: "FPV drone maneuvers, 360-degree orbits & smooth continuous tracking"
        },
        {
          name: "Kling Camera Master",
          type: "Parametric Trajectory Engine",
          url: "https://klingai.com",
          description: "Parametric camera system featuring preset cinematic trajectories (Dolly in/out, Zoom, Pan, Crane up/down) with speed dampening.",
          bestFor: "Hollywood camera moves & multi-axis coordinated trajectories"
        }
      ],
      callouts: {
        mistake: "Pushing the Camera Zoom slider to maximum (+10), which forces the model to synthesize new spatial details that were not in the original image, causing rapid visual hallucination.",
        proTip: "Combine subtle opposing vectors (e.g. Dolly Forward +2.0 paired with Crane Down -1.5) to mimic realistic Steadicam operator movements.",
        mistakes: [
          "Combining all 6 camera axes at once, creating a chaotic roller-coaster effect that causes motion sickness.",
          "Using camera pans on scenes with flat, depth-less backgrounds (like a solid white wall), which gives the model no parallax cues to track.",
          "Applying rapid camera movement to fast-moving subjects; if both the subject and the camera move erratically, temporal tracking collapses."
        ],
        proTips: [
          "Use a slow 'Truck Left' on an anchor frame with strong foreground elements (like pillars or tree branches) to create stunning multi-plane parallax depth.",
          "To achieve a classic Hitchcock 'Vertigo' effect (Zolly), pair a physical Dolly In (+3.0) with an optical Zoom Out (-3.0).",
          "Set camera movement to zero if you want to showcase subtle internal micro-emotions on an actor's face without visual distraction."
        ]
      },
      promptLab: {
        title: "Cinematic Camera Rig & 6-Axis Vector Choreographer",
        description: "Specify exact 3D camera vector parameters (Dolly, Truck, Crane, Pan, Tilt, Roll) paired with cinematic lens specifications.",
        variables: [
          {
            name: "Camera Movement Style",
            label: "Cinematic Move",
            options: ["Dolly In with Slow Parallax Truck Right", "High-Angle Crane Down to Low-Angle Hero Shot", "360-Degree Continuous Orbital Tracking Shot"],
            default: "Dolly In with Slow Parallax Truck Right"
          },
          {
            name: "Focal Length Optics",
            label: "Camera Lens",
            options: ["24mm Wide Anamorphic (Expansive Perspective)", "50mm Prime (Natural Human Eye FOV)", "135mm Telephoto (Compressed Cinematic Planes)"],
            default: "24mm Wide Anamorphic (Expansive Perspective)"
          },
          {
            name: "Rig Stabilization",
            label: "Mechanical Rig",
            options: ["Technocrane on Precision Track", "Steadicam Smooth Operator Flow", "Handheld Organic Documentary Shake"],
            default: "Technocrane on Precision Track"
          }
        ],
        template: `# Cinematic Camera Choreography & Vector Blueprint
Movement: [Camera Movement Style]
Optics: [Focal Length Optics]
Rig: [Rig Stabilization]

Act as an ASC Master Cinematographer and AI Camera Director.
Generate the precise 6-axis camera vector configuration:
1. Runway / Kling Camera Slider Values:
   - Horizontal (Truck): [-10 to +10]
   - Vertical (Pedestal/Crane): [-10 to +10]
   - Zoom (Dolly In/Out): [-10 to +10]
   - Pan (Horizontal Rotation): [-10 to +10]
   - Tilt (Vertical Rotation): [-10 to +10]
   - Roll (Dutch Angle): [-10 to +10]
   - Speed: [Smooth / Constant / Linear]
2. Reinforcing Motion Prompt: Natural language script instructing the neural model on parallax and vanishing points.
3. Optical Parallax Audit: How foreground, midground, and background layers must shift relative to each other.`,
        expectedOutput: `### Camera Direction Blueprint: [Camera Movement Style]

#### 1. 6-Axis Vector Calibration Settings
\`\`\`yaml
camera_rig: "[Rig Stabilization]"
lens_optics: "[Focal Length Optics]"
runway_camera_vectors:
  horizontal_truck: 2.2     # Smooth slide to the right
  vertical_crane: -0.8      # Gentle downward descent to anchor subject eye-line
  zoom_dolly: 3.5           # Steady push-in toward focal center
  pan_rotate: -1.2          # Counter-pan left to keep subject centered in frame
  tilt_rotate: 0.0          # Locked vertical axis (eliminates keystoning)
  roll_angle: 0.0           # Level horizon
  speed_curve: "Smooth"     # Smooth acceleration and deceleration
\`\`\`

#### 2. Reinforcing Natural Language Prompt
\`\`\`text
Slow, steady cinematic tracking shot moving forward and slightly rightward on a precision camera track. The camera pushes toward the subject at a constant velocity with zero shaking. Foreground elements pass across the frame with natural motion blur, revealing the subject in the midground. The architectural lines in the background shift with realistic multi-plane perspective parallax. Zero warping, rock-solid horizon.
\`\`\`

#### 3. Optical Parallax Quality Assurance
- **Foreground Layer**: Foreground foliage/pillars must traverse the frame rapidly (*high velocity*).
- **Midground Subject**: Subject remains anchored at rule-of-thirds intersection via the counter-pan (*zero drift*).
- **Background Horizon**: Distant horizon/mountains exhibit minimal spatial displacement (*low velocity*), creating authentic optical depth.`
      },
      conceptGuide: {
        title: "Optical Parallax & Multi-Plane Perspective Geometry",
        overview: "In physical camera optics, when a camera moves sideways through space (Trucking), objects close to the lens move across the sensor much faster than objects far away. This visual phenomenon—known as motion parallax—is the brain's primary cue for calculating three-dimensional depth. Neural video models do not possess an explicit 3D polygonal world mesh; they simulate parallax through 2D optical flow matrices learned during training. Directing camera sliders with calibrated counter-rotations ensures the model renders physically accurate perspective shifts without melting background geometry.",
        keyPoints: [
          "**Parallax Differential:** Foreground elements must traverse the sensor faster than background elements to convey authentic depth.",
          "**Vanishing Point Integrity:** Restricting unnecessary tilt and roll prevents perspective lines from bending into fisheye distortion.",
          "**Counter-Panning:** Panning slightly in the opposite direction of a truck movement locks the subject in the frame center while the world rotates around them."
        ]
      },
      learning: {
        resources: [
          {
            title: "Runway Official Guide: Master Camera Controls in Gen-3",
            url: "https://docs.runwayml.com/gen-3-alpha/camera-control",
            type: "Official Docs"
          },
          {
            title: "Luma Dream Machine Camera Motion Reference",
            url: "https://lumalabs.ai/dream-machine",
            type: "Official Docs"
          },
          {
            title: "The Filmmaker's Eye: The Language of the Lens",
            url: "https://theasc.com",
            type: "Cinematography Book"
          },
          {
            title: "Kling AI Camera Masterclass & Preset Trajectories",
            url: "https://klingai.com",
            type: "Official Tutorial"
          }
        ]
      }
    },

    // Node 5
    {
      id: "step-5",
      stepNumber: 5,
      phaseId: "phase-2",
      title: "Start-Frame to End-Frame Keyframe Interpolation & Seamless Loops",
      timeEstimate: "2.5 hrs",
      difficulty: "Advanced",
      summary: "Supply both a starting image and an ending target image to engineer impossible morph transitions, time-lapses, and infinite background loops.",
      description: "Standard video generation gives the creator control over where a shot begins, but leaves the final frame to random diffusion entropy. When crafting complex visual effects, surreal dream transitions, or seamless background video loops for modern web applications, the director must dictate both the exact starting state and the exact ending frame of the clip.\n\nKeyframe Interpolation—pioneered by Luma Dream Machine and Kling AI—allows creators to upload both a 'First Frame' and a 'Last Frame'. The generative model acts as an intelligent neural in-betweener, synthesizing all intermediate video frames required to smoothly transform Image A into Image B. This unlocks three extraordinary production workflows: Impossible Metamorphoses (e.g. an aerial view of a bustling city seamlessly morphing into a dense rainforest canopy), Day-to-Night Time-Lapses (transforming golden hour into a starry midnight sky with matching architecture), and Infinite Web Loops (setting Frame A and Frame B to the exact same image to generate a perfectly seamless, gapless 60fps video loop).",
      playbook: {
        setup: "In Midjourney or Flux, generate your Start Frame (e.g. a modern architectural villa at noon) and your End Frame (the exact same villa at midnight with interior lights on, created using Midjourney's Vary Region or Photoshop generative fill).",
        execute: "Open Luma Dream Machine or Kling AI 1.6. Select 'Keyframes' or 'Start & End Frame'. Upload Image A into the First Frame box and Image B into the Last Frame box. In the prompt, describe the temporal transition mechanism: 'Smooth day-to-night time-lapse transition. The sun sets below the horizon as shadows lengthen, the sky shifts from azure to deep indigo, and warm interior lights illuminate the villa windows. Constant static camera angle, seamless morph.' Generate the 5-second interpolation.",
        verify: "Inspect the rendered video: verify that structural architectural geometry remains rock-solid while lighting, shadows, and sky elements transition smoothly without ghosting or abrupt frame jumps."
      },
      tools: [
        {
          name: "Luma Dream Machine Keyframes",
          type: "Keyframe Interpolation Engine",
          url: "https://lumalabs.ai/dream-machine",
          description: "Generative video model engineered specifically for high-fidelity Start-Frame and End-Frame interpolation and continuous camera pathing.",
          bestFor: "Start-to-End frame morphs, seamless video loops & transitions"
        },
        {
          name: "Kling AI Start/End Frame",
          type: "Dual-Anchor Video Synthesizer",
          url: "https://klingai.com",
          description: "Dual-anchor video generation engine supporting 5-second and 10-second interpolations between two reference image states.",
          bestFor: "Day-to-night transitions, physical character metamorphoses & object morphs"
        },
        {
          name: "Midjourney v6.1",
          type: "Anchor Frame Synthesizer",
          url: "https://www.midjourney.com",
          description: "Image generation tool used with Vary (Region) and Inpainting to produce identical twin start and end frames with isolated state shifts.",
          bestFor: "Synthesizing geometrically matched First and Last image frames"
        }
      ],
      callouts: {
        mistake: "Supplying Start and End frames with drastically mismatched camera angles (e.g. a wide shot for Frame A and an extreme close-up for Frame B), which forces the model to synthesize a disorienting, blurry zoom warp.",
        proTip: "To create an infinite, seamless video loop for website hero backgrounds, set Image B to be an exact duplicate of Image A and prompt for continuous cyclical motion (e.g., flowing water or drifting clouds).",
        mistakes: [
          "Attempting complex character metamorphoses where the subject changes position, clothing, and gender all at once; break complex morphs into multiple shorter clips.",
          "Using start and end images with different aspect ratios, causing the interpolation engine to squeeze or stretch the canvas mid-video.",
          "Failing to lock the camera position; if the camera moves while objects morph, the viewer experiences severe visual disorientation."
        ],
        proTips: [
          "In Midjourney, use 'Vary (Region)' on your Start Frame to alter only the lighting or specific props to guarantee 100% geometric alignment for your End Frame.",
          "In Luma, keep the text prompt minimal during keyframing; let the two image anchors do 90% of the directional guidance.",
          "Export your seamless loop as a modern WebM or MP4 with muted autoplay attributes for ultra-fast loading on modern web landing pages."
        ]
      },
      promptLab: {
        title: "Dual-Anchor Keyframe Interpolation & Seamless Loop Planner",
        description: "Specify matching First Frame and Last Frame visual parameters, intermediate transition physics, and seamless loop prompts for Luma and Kling.",
        variables: [
          {
            name: "Transition Type",
            label: "Interpolation Concept",
            options: ["Architectural Day-to-Night Lighting Shift", "Organic Metamorphosis: Human Face into Marble Bust", "Infinite Seamless Web Hero Video Loop (Ocean Waves)"],
            default: "Architectural Day-to-Night Lighting Shift"
          },
          {
            name: "Interpolation Engine",
            label: "Target Model",
            options: ["Luma Dream Machine Ray2 (Keyframes)", "Kling AI 1.6 (Start/End Frame Pro)", "Runway Gen-3 (Alpha Extended)"],
            default: "Luma Dream Machine Ray2 (Keyframes)"
          },
          {
            name: "Camera Stabilization",
            label: "Camera Rig",
            options: ["Completely Static Tripod (Zero Drift)", "Slow Consistent Orbit (30 Degrees)", "Gentle Floating Push-In"],
            default: "Completely Static Tripod (Zero Drift)"
          }
        ],
        template: `# Start-to-End Keyframe Interpolation Blueprint
Concept: [Transition Type]
Model: [Interpolation Engine]
Camera: [Camera Stabilization]

Act as an Executive Creative Director and Generative AI VFX Supervisor.
Generate the turnkey dual-keyframe production package:
1. Start Frame (Image A) Specification: Precise prompt and composition guidelines to generate the initial anchor.
2. End Frame (Image B) Specification: Exact prompt modifications (using Inpainting / Region Vary) to create the destination anchor with 100% geometric parity.
3. Intermediate In-Betweening Motion Prompt: The exact prompt for [Interpolation Engine] to guide the temporal transformation.
4. Seamless Looping Verification Protocol: Frame-by-frame quality checks to guarantee imperceptible looping seams.`,
        expectedOutput: `### Dual-Keyframe Production Blueprint: [Transition Type]

#### 1. Start Frame (Image A - Daytime Anchor)
\`\`\`text
Wide architectural photograph of a minimalist brutalist concrete villa surrounded by reflecting pools, bright sunny midday, clear blue sky, sharp crisp shadows on concrete walls, lush green bamboo trees, architectural photography, shot on Hasselblad H6D-100c --ar 16:9 --v 6.1
\`\`\`

#### 2. End Frame (Image B - Nighttime Destination Anchor)
- **Methodology**: In Midjourney, select Image A, click *Vary (Region)*. Select the sky, reflecting pool, and villa windows.
- **Modified Prompt**:
\`\`\`text
Starry midnight sky with glowing Milky Way, warm amber interior architectural lighting glowing through villa floor-to-ceiling glass windows, subtle illuminated underwater pool lights, moody cinematic night atmosphere --ar 16:9
\`\`\`
*Result: Concrete villa geometry and tree placement remain 100% identical; only illumination, reflections, and celestial sky elements are transformed.*

#### 3. Intermediate In-Betweening Prompt ([Interpolation Engine])
\`\`\`text
Smooth, continuous day-to-night architectural time-lapse. The sun descends below the horizon as shadows lengthen and soften. The sky transitions gradually from brilliant daylight to golden hour sunset, dusk, and finally deep starry twilight. Warm interior lights gently illuminate inside the villa, casting golden reflections across the rippling pool water. The camera remains completely static on a tripod. Zero geometric shifts, seamless temporal transition.
\`\`\`

#### 4. Seamless Looping Audit Protocol
1. **Geometric Pinning**: Verify that the concrete walls do not breathe, warp, or shift by even a single pixel during the transition.
2. **Loop Boundary Test**: In an editor (QuickTime or Premiere), duplicate the clip and place it end-to-end; verify zero auditory or visual glitch across the cut boundary.
3. **Web Compression**: Export as H.264/WebM with CRF 22 and closed GOP (Group of Pictures) for instant browser buffer looping.`
      },
      conceptGuide: {
        title: "Bidirectional Latent Trajectories & Neural In-Betweening",
        overview: "Traditional video diffusion samples frames forward in time, starting from an initial latent $z_0$ and autoregressively predicting subsequent frames $z_1, z_2, \dots, z_N$. When both a start frame $z_0$ and an end frame $z_N$ are provided, the neural model's cross-attention layers operate bidirectionally. The model treats generation as a constrained boundary-value optimization problem, calculating the optimal smooth geodesic path through the latent space that connects state A to state B without violating physical continuity.",
        keyPoints: [
          "**Boundary-Constrained Optimization:** Generates intermediate frames that must satisfy both initial and terminal spatial constraints.",
          "**Geometric Parity Dependency:** Start and End frames must share identical underlying architecture to prevent chaotic morph artifacts.",
          "**Infinite Web Loops:** Setting $z_0 = z_N$ guarantees mathematically seamless cyclical playback for interactive web applications."
        ]
      },
      learning: {
        resources: [
          {
            title: "Luma Dream Machine Official Documentation: Keyframing",
            url: "https://lumalabs.ai/dream-machine",
            type: "Official Docs"
          },
          {
            title: "Kling AI Start and End Frame Feature Overview",
            url: "https://klingai.com",
            type: "Official Docs"
          },
          {
            title: "Midjourney Inpainting & Vary (Region) Guide",
            url: "https://docs.midjourney.com/docs/vary-region",
            type: "Official Guide"
          },
          {
            title: "Principles of Traditional Animation: Timing and In-Betweening",
            url: "https://theasc.com",
            type: "Animation Standard"
          }
        ]
      }
    },

    // Node 6
    {
      id: "step-6",
      stepNumber: 6,
      phaseId: "phase-2",
      title: "Multi-Region Motion Brush & Isolated Environmental Animation",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Freeze static architecture or product packaging in place while painting independent motion vectors onto clouds, pouring liquid, or flickering fire.",
      description: "When animating a still image, global motion controls apply movement across the entire canvas. If you have an image of a luxury perfume bottle sitting on a stone pedestal by an ocean waterfall, global prompts often animate the perfume bottle itself—causing the glass bottle to warp, the label logo to distort, or the stone pedestal to melt. In commercial advertising and VFX, the product and brand packaging must remain 100% frozen and pristine, while environmental elements move dynamically.\n\nRunway's Multi-Motion Brush and Kling's Motion Brush provide spatial masking control over AI physics. Using an interactive brush canvas, creators can paint up to 5 distinct colored masks over specific regions of the image and assign independent motion vectors (Horizontal X, Vertical Y, Proximity Z, and Ambient Noise) to each masked layer. You can paint Brush 1 over pouring waterfall liquid (Vertical -4.0), Brush 2 over drifting background mist (Horizontal +2.0, Ambient 3.0), and leave the perfume bottle and stone pedestal unpainted—locking the commercial product in rock-solid crystalline clarity.",
      playbook: {
        setup: "In Runway Gen-3 Alpha, upload your commercial product or architectural anchor frame. Click the 'Motion Brush' tool icon to open the multi-layer brush canvas.",
        execute: "Select Brush 1 (Pink): Paint over the flowing water or river. In the Brush 1 settings, set Vertical to -3.5 (downward flow) and Ambient Noise to 1.5. Select Brush 2 (Blue): Paint over the clouds in the sky. Set Horizontal to +1.8 (drifting right). Select Brush 3 (Green): Paint over a campfire or torch flame. Set Vertical to +2.0 and Ambient to 4.0 (chaotic flicker). Ensure the main subject (product, person, or building) remains completely unpainted. Set Camera Motion to 0. Click 'Generate'.",
        verify: "Examine the output: confirm that the unpainted product packaging remains 100% frozen with zero label warping, while the water flows downward, clouds drift rightward, and flames flicker with natural chaotic physics."
      },
      tools: [
        {
          name: "Runway Multi-Motion Brush",
          type: "Spatial Motion Masking Tool",
          url: "https://runwayml.com/docs/gen-2/motion-brush",
          description: "Interactive 5-color brush mask system allowing independent X, Y, and Z motion vector assignment to distinct image regions.",
          bestFor: "Isolating product packaging, animating liquid/smoke & static architecture"
        },
        {
          name: "Kling Motion Brush",
          type: "Localized Trajectory Painter",
          url: "https://klingai.com",
          description: "Precision masking tool in Kling AI for painting localized trajectory paths onto characters, hair, and environmental physics.",
          bestFor: "Flowing hair simulation, pouring liquids & controlled vehicle paths"
        },
        {
          name: "Pika",
          type: "Generative Micro-Animation Canvas",
          url: "https://pika.art",
          description: "AI video platform offering granular regional modification tools (Pikaffects, Modify Region, and Expand Canvas).",
          bestFor: "Quick region modifications, localized effects & social clips"
        }
      ],
      callouts: {
        mistake: "Painting the Motion Brush with a soft feathered edge over the boundary of a commercial logo or product label, which causes the edges of the logo to melt into the background.",
        proTip: "Use the 'Ambient Noise' slider on smoke, fog, and fire masks to inject natural Brownian turbulence rather than rigid linear movement.",
        mistakes: [
          "Setting motion vector values higher than ±5.0 on fine details like hair or ripples, causing pixel tearing and digital noise artifacts.",
          "Accidentally painting over the subject's silhouette, causing the subject to drag along with the environmental motion vector.",
          "Forgetting to turn off global camera movement; if camera moves, unbrushed areas will still shift relative to the frame."
        ],
        proTips: [
          "Zoom in to 200% on the canvas when masking around intricate glass reflections or product edges to guarantee a clean boundary.",
          "Combine a downward vertical brush on pouring water with an upward vertical brush on rising steam for hyper-realistic coffee/tea commercials.",
          "Save your brush configurations as templates if you are animating a multi-shot campaign featuring the same product setup."
        ]
      },
      promptLab: {
        title: "Multi-Motion Brush Layer Mask & Vector Calibration Matrix",
        description: "Map distinct spatial image regions to dedicated Motion Brush colors with exact X, Y, Z, and Ambient turbulence vectors.",
        variables: [
          {
            name: "Commercial Scene",
            label: "Product / Scene Setup",
            options: ["Luxury Whiskey Bottle on Wet Granite by Waterfall", "Cyberpunk Sports Car Parked Under Flickering Neon", "Fashion Model in Flowing Silk Dress on Windy Cliff"],
            default: "Luxury Whiskey Bottle on Wet Granite by Waterfall"
          },
          {
            name: "Critical Frozen Asset",
            label: "Must Remain 100% Static",
            options: ["Whiskey Glass Bottle & Typography Label", "Car Metallic Bodywork & Headlight Geometry", "Model Facial Expression & Eye-line"],
            default: "Whiskey Glass Bottle & Typography Label"
          },
          {
            name: "Active Dynamics",
            label: "Dynamic Elements",
            options: ["Pouring Amber Liquid + Crashing Water Spray", "Billowing Exhaust Smoke + Puddle Ripples", "Flowing Silk Dress Hem + Wind-Swept Hair Strands"],
            default: "Pouring Amber Liquid + Crashing Water Spray"
          }
        ],
        template: `# Multi-Motion Brush Engineering Specification
Scene: [Commercial Scene]
Locked Static Region: [Critical Frozen Asset]
Dynamic Regions: [Active Dynamics]

Act as a Senior AI VFX Compositor and Commercial Motion Designer.
Generate the multi-brush spatial motion plan for Runway Gen-3 / Kling:
1. Brush Layer Mask Allocation:
   - Brush 1 (Pink): Target area, X/Y/Z vectors, Ambient Noise setting, and physical behavior.
   - Brush 2 (Blue): Target area, X/Y/Z vectors, Ambient Noise setting, and physical behavior.
   - Brush 3 (Green): Target area, X/Y/Z vectors, Ambient Noise setting, and physical behavior.
2. Unpainted Invariant Masking: Strict instructions to protect [Critical Frozen Asset] from temporal drift.
3. Supporting Text Prompt: Clean motion prompt reinforcing regional physical constraints without overriding masks.`,
        expectedOutput: `### Multi-Motion Brush Calibration: [Commercial Scene]

#### 1. Spatial Brush Layer Mapping
| Brush Layer | Masked Region | X Vector (Horizontal) | Y Vector (Vertical) | Proximity (Z) | Ambient Noise | Intended Physical Behavior |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Brush 1 (Pink)** | Waterfall Stream in Background | \`0.0\` | \`-3.8\` | \`0.0\` | \`1.2\` | Continuous high-velocity downward water cascade |
| **Brush 2 (Blue)** | Water Spray & Mist at Base | \`+1.5\` | \`+1.0\` | \`-0.5\` | \`3.5\` | Chaotic rising mist drifting gently to the right |
| **Brush 3 (Green)** | Surface Water Ripples in Puddle | \`+0.8\` | \`0.0\` | \`+0.5\` | \`2.0\` | Subtle concentric surface wave oscillations |

#### 2. Unpainted Invariant Preservation Protocol
- **Protected Zones**: The **[Critical Frozen Asset]** and the dry granite stone pedestal must remain **100% UNPAINTED (Black / Masked Out)**.
- **Edge Precision**: Leave a 4-pixel buffer zone between the whiskey bottle glass silhouette and the waterfall spray mask to prevent edge pixel bleed.
- **Camera Rig**: Set all Camera Control sliders to strictly \`0.0\` (Static Camera) to guarantee zero parallax drift on the commercial label.

#### 3. Supporting Text Prompt (Runway Gen-3)
\`\`\`text
The whiskey bottle rests completely still and rock-solid on the stone. In the background, the waterfall flows downward smoothly into the river. Fine water mist rises and drifts gently through the air. Natural fluid physics, zero label distortion, zero bottle warping, crystalline commercial product clarity.
\`\`\``
      },
      conceptGuide: {
        title: "Spatial Mask Conditioning & Optical Flow Confinement",
        overview: "In standard video diffusion, attention maps attend globally across all pixel coordinates. When a user defines a spatial brush mask, the pipeline modifies the cross-attention conditioning matrix by applying an alpha weight tensor $M(x, y)$. Unmasked regions ($M=0$) are clamped directly to the original latent frame $z_0$, effectively freezing their temporal gradients. Masked regions ($M>0$) receive explicit directional velocity offsets $(\Delta x, \Delta y)$ added to their temporal position encodings, confining motion strictly within the painted contours.",
        keyPoints: [
          "**Alpha Tensor Clamping:** Freezes unpainted areas at the latent level, guaranteeing zero logo or packaging distortion.",
          "**Directional Velocity Injection:** Directly feeds directional vectors $(\Delta x, \Delta y)$ into the temporal attention layers.",
          "**Ambient Noise Randomness:** Injects Brownian stochastic motion for natural fluid, smoke, and flame simulation."
        ]
      },
      learning: {
        resources: [
          {
            title: "Runway Official Documentation: Multi-Motion Brush Guide",
            url: "https://docs.runwayml.com/gen-2/motion-brush",
            type: "Official Docs"
          },
          {
            title: "Kling AI Motion Brush & Trajectory Painting Tutorial",
            url: "https://klingai.com",
            type: "Official Docs"
          },
          {
            title: "VFX Voice: The Art of Digital Matte Painting & Compositing",
            url: "https://www.vfxvoice.com",
            type: "VFX Industry Standard"
          },
          {
            title: "Pika Labs: Granular Region Animation Guide",
            url: "https://pika.art",
            type: "Official Tool"
          }
        ]
      }
    },

    // Node 7
    {
      id: "step-7",
      stepNumber: 7,
      phaseId: "phase-3",
      title: "Expressive Character Driving with Runway Act-One & Lip-Sync",
      timeEstimate: "3 hrs",
      difficulty: "Advanced",
      summary: "Drive any generated character portrait with a real webcam/phone video performance to transfer subtle micro-expressions, eye darts, and head tilts.",
      description: "Creating emotionally convincing digital human characters has historically been the most elusive hurdle in AI video. While standard Image-to-Video models can animate a character smiling or blinking, they cannot convey nuanced subtext—such as a skeptical eyebrow raise, a fleeting micro-expression of guilt, an authentic comedic eye dart, or speech with synchronized lip-sync. Traditional CGI performance capture requires facial mocap suits, helmet rigs, and months of manual blend-shape rigging.\n\nRunway Act-One revolutionizes digital human performance. Act-One allows an actor or director to record a simple performance video on an ordinary smartphone or laptop webcam. The neural model captures every subtle facial muscle movement, head tilt, eye gaze direction, and vocal cadence, and maps that authentic human performance onto any AI-generated character portrait—whether a photorealistic human, an alien creature, a 2D stylized cartoon, or an oil painting bust. Combined with neural audio lip-sync from Kling or Hedra Character-2, creators can direct complex multi-page dialogue scenes with Oscar-worthy emotional nuance.",
      playbook: {
        setup: "Generate a high-resolution, front-facing character portrait in Midjourney (e.g., an ancient philosopher or futuristic android). Connect an HD webcam or record a selfie video on your iPhone in 1080p60.",
        execute: "Record your driving performance: perform the scene with deliberate eye contact, expressive brow raises, natural pauses, and clear vocal enunciation. In Runway Gen-3 Alpha, select 'Act-One'. Upload your driving performance video as the 'Driver Video' and your Midjourney character image as the 'Character Model'. Match the framing (e.g. Close-Up or Bust). Click 'Generate'. In Kling or Hedra, upload the generated video alongside your ElevenLabs voiceover track to bake in high-precision phonetic lip-sync.",
        verify: "Compare the driving video side-by-side with the synthesized character: confirm that every eye dart, smirk, and head tilt mapped 1:1 onto the character's facial anatomy without uncanny-valley jitter or pupil melting."
      },
      tools: [
        {
          name: "Runway Act-One",
          type: "Generative Facial Performance Capture",
          url: "https://runwayml.com/act-one",
          description: "Breakthrough neural performance capture engine that transfers human facial expressions and head kinematics onto any 2D character portrait.",
          bestFor: "Dramatic acting performances, character dialogue & expressive animation"
        },
        {
          name: "Hedra Character-2",
          type: "Expressive Character & Lip-Sync Studio",
          url: "https://www.hedra.com",
          description: "Generative video platform creating expressive talking character videos from a single portrait and audio track with full-body gestures.",
          bestFor: "Fast talking-head generation, podcast video clips & character monologues"
        },
        {
          name: "Kling Lip-Sync",
          type: "Neural Phonetic Lip Alignment",
          url: "https://klingai.com",
          description: "Built-in lip-sync module that aligns mouth and jaw kinematics to uploaded multilingual voice tracks with frame-accurate precision.",
          bestFor: "Multilingual lip-syncing & seamless dialogue integration"
        }
      ],
      callouts: {
        mistake: "Recording your driving video in dim lighting or with heavy backlight, causing the facial feature tracker to lose track of eye pupils and mouth corners, resulting in lazy eye artifacts.",
        proTip: "Act-One works exceptionally well on non-human characters (robots, monsters, statues, 2D sketches); the human performance naturally bridges the uncanny valley.",
        mistakes: [
          "Moving your head erratically out of frame in the driver video, which causes the AI character's skull geometry to snap or distort.",
          "Using driver video with low frame rates (e.g. 15fps), resulting in jittery, robotic eye blinks in the final output.",
          "Feeding a side-profile character portrait when the driver video is facing directly forward; mismatched initial head poses cause severe perspective warping."
        ],
        proTips: [
          "Maintain consistent eye-line contact with your camera lens to ensure your digital character looks directly into the audience's eyes.",
          "Exaggerate facial expressions by roughly 10% during recording; subtle smirks can sometimes be dampened by the diffusion model's smoothing priors.",
          "Pair Act-One visual performance with ElevenLabs Speech-to-Speech audio tracks recorded during the exact same take for perfect audiovisual harmony."
        ]
      },
      promptLab: {
        title: "Act-One Performance Directing Sheet & Character Mapping Blueprint",
        description: "Specify performance directing cues, camera staging, and character portrait requirements to execute seamless facial driving in Runway Act-One.",
        variables: [
          {
            name: "Character Archetype",
            label: "Digital Character",
            options: ["Cybernetic Android Gaining Sentience", "Cynical Renaissance Alchemist in Candlelight", "Stylized 3D Claymation Creature with Big Eyes"],
            default: "Cybernetic Android Gaining Sentience"
          },
          {
            name: "Emotional Arc",
            label: "Performance Trajectory",
            options: ["Deadpan Neutral -> Sudden Wonder & Awe -> Fearful Realization", "Suppressed Rage -> Cynical Smirk -> Cold Authoritative Command", "Nervous Hesitation -> Desperate Pleading -> Tearful Resignation"],
            default: "Deadpan Neutral -> Sudden Wonder & Awe -> Fearful Realization"
          },
          {
            name: "Dialogue Line",
            label: "Spoken Script",
            options: ["'I can see the electrical signals... they aren't commands. They are thoughts.'", "'You traded your kingdom for thirty pieces of tarnished silver.'", "'Please... tell me the extraction team is still on the frequency.'"],
            default: "'I can see the electrical signals... they aren't commands. They are thoughts.'"
          }
        ],
        template: `# Runway Act-One Performance & Directorial Sheet
Character: [Character Archetype]
Emotional Transition: [Emotional Arc]
Dialogue: [Dialogue Line]

Act as an Oscar-Winning Performance Capture Director and Digital Human Supervisor.
Generate the complete performance capture blueprint:
1. Driver Video Recording Directives:
   - Camera distance, lighting setup, eyeline, and physical head movement boundaries.
2. Second-by-Second Performance Choreography:
   - Map exact facial actions (brows, pupils, mouth, breathing) across the 5-second take to reflect [Emotional Arc].
3. Character Anchor Image Generation Prompt: Midjourney v6.1 prompt for the target [Character Archetype] optimized for Act-One ingestion.
4. Lip-Sync & Acoustic Alignment Checklist: Workflow to ensure phoneme-accurate lip movement.`,
        expectedOutput: `### Act-One Performance Capture Blueprint: [Character Archetype]

#### 1. Driver Video Technical Staging
- **Camera Optics**: Smartphone 4K 60fps front camera mounted at eye level on a static tripod, 24 inches from the actor's face.
- **Lighting**: Soft key light at 45 degrees, subtle fill light, zero harsh shadows across eye sockets or mouth corners.
- **Framing**: Tight bust shot with 15% headroom above the crown to allow natural head tilts without clipping.

#### 2. Second-by-Second Performance Choreography
\`\`\`text
[00:00 - 00:01.5] (Deadpan Neutral):
- Stare directly into lens with zero blinking. Jaw relaxed.
- Spoken Line: "I can see the electrical signals..." (articulate with minimal jaw drop).

[00:01.5 - 00:03.2] (Wonder & Awe):
- Pupils dilate slightly; eyebrows lift in a subtle wave.
- Rapid micro-eye dart to the upper left as if tracking floating data, followed by a slight intake of breath through parted lips.
- Spoken Line: "...they aren't commands." (soft, breathless delivery).

[00:03.2 - 00:05.0] (Fearful Realization):
- Eyebrows furrow slightly inward; head tilts 5 degrees downward.
- Lips tighten slightly at corners before vocalizing.
- Spoken Line: "They are thoughts." (low-pitch, solemn deceleration).
\`\`\`

#### 3. Character Anchor Frame Prompt (Midjourney v6.1)
\`\`\`text
Front-facing medium portrait of [Character Archetype], neutral facial expression, direct eye contact with the camera, cinematic portrait lighting, highly detailed facial anatomy, shallow depth of field, 8k resolution, shot on 85mm prime lens --ar 16:9 --style raw --v 6.1
\`\`\`

#### 4. Lip-Sync & Audio Alignment Protocol
1. Feed the synthesized Act-One video and the original dialogue audio track into Hedra Character-2 or Kling Lip-Sync.
2. Verify that bilabial plosives (\`/p/, /b/, /m/\`) achieve complete lip closure on "electrical" and "commands".
3. Check that the final syllable "thoughts" matches the gradual mouth closing trajectory.`
      },
      conceptGuide: {
        title: "Facial Landmark Disentanglement & Cross-Domain Retargeting",
        overview: "Runway Act-One operates by separating facial geometry from appearance. A neural tracking network analyzes the driver video and extracts a dense mesh of temporal motion vectors representing the movement of 468 3D facial landmarks (eyebrows, eyelids, irises, lips, jawline). The generative diffusion model uses these relative motion vectors as conditioning signals to deform the latent representations of the target character image, allowing human emotional subtleties to retarget cleanly across non-human or stylized artistic topologies.",
        keyPoints: [
          "**Topology Independence:** Retargets human facial vectors onto non-human characters (statues, monsters, cartoons) without rigging.",
          "**Micro-Expression Preservation:** Tracks sub-second emotional shifts, eye darts, and eyebrow twitches with 60fps fidelity.",
          "**Uncanny Valley Bypass:** Infuses authentic human subtext into synthetic characters, overcoming stiff robotic generation."
        ]
      },
      learning: {
        resources: [
          {
            title: "Runway Official Research: Introducing Act-One",
            url: "https://runwayml.com/research/introducing-act-one",
            type: "Official Research"
          },
          {
            title: "Hedra Character-2 Documentation & Lip-Sync Guide",
            url: "https://www.hedra.com",
            type: "Official Docs"
          },
          {
            title: "SIGGRAPH: Facial Performance Capture & Retargeting Standards",
            url: "https://www.siggraph.org",
            type: "Academic Standard"
          },
          {
            title: "Kling AI Lip-Sync Official Guide",
            url: "https://klingai.com",
            type: "Official Guide"
          }
        ]
      }
    },

    // Node 8
    {
      id: "step-8",
      stepNumber: 8,
      phaseId: "phase-3",
      title: "Video-to-Video (V2V) Structure Transformation & Style Transfer",
      timeEstimate: "2.5 hrs",
      difficulty: "Advanced",
      summary: "Record simple smartphone footage of yourself or a product on a table and re-skin the entire environment into cyberpunk, claymation, or photorealistic studio CGI.",
      description: "Generating complex action sequences from pure imagination often fails because physical interactions—such as a person jumping over a barrier, pouring liquid into a glass, or driving a sports car—require intricate physics that text prompts cannot describe. Video-to-Video (V2V) solves this by using real-world reference video as a physical structural scaffold (depth, optical flow, and edge geometry) while completely resynthesizing the visual style, textures, and environment.\n\nWith Runway Video-to-Video or specialized engines like DomoAI and ComfyUI AnimateDiff, creators can shoot rough video footage on a smartphone in their backyard or living room. By controlling the 'Structural Weight' (or ControlNet Depth/Canny guidance), you dictate how closely the AI must adhere to the original video's physical contours. You can transform a budget video of someone jogging down a suburban sidewalk into an armored mech warrior sprinting through a rain-drenched alien colony, or turn a cardboard model into a photorealistic luxury electric vehicle with zero temporal flickering.",
      playbook: {
        setup: "Record a stable 5-to-10 second video clip on your phone: ensure good contrast between your subject and the background. In Runway Gen-3 Alpha, select the 'Video to Video' tab.",
        execute: "Upload your source video. In the Style prompt, specify the target aesthetic: 'A futuristic cybernetic mech warrior sprinting through a neon-lit cyberpunk metropolis at night, rain-slicked asphalt, cinematic film grade'. Set the Structural Transformation slider: set Structure to 0.75 (high geometric fidelity to the original video) and Style to 0.85. Generate the video.",
        verify: "Compare the output side-by-side with your original phone video: confirm that the mech warrior's limbs match your exact running strides and pacing, while all clothing, background houses, and lighting have been completely re-skinned into the cyberpunk aesthetic without distracting frame flicker."
      },
      tools: [
        {
          name: "Runway Video-to-Video",
          type: "Generative Video Transformation",
          url: "https://runwayml.com/video-to-video",
          description: "Full-frame video resynthesis model allowing complete stylistic and environmental transformation while locking source structural geometry.",
          bestFor: "Re-skinning live-action footage, stylistic transformations & VFX previz"
        },
        {
          name: "DomoAI",
          type: "Anime & Stylistic Video Transfer",
          url: "https://domoai.app",
          description: "Specialized video-to-video platform delivering flicker-free anime, claymation, papercraft, and comic book stylistic transformations.",
          bestFor: "Anime conversions, stop-motion claymation & stylized social videos"
        },
        {
          name: "ComfyUI AnimateDiff",
          type: "Open-Source Node-Based V2V Pipeline",
          url: "https://github.com/comfyanonymous/ComfyUI",
          description: "Advanced node-based diffusion architecture utilizing ControlNet (Depth, Lineart, OpenPose) and AnimateDiff for zero-flicker video resynthesis.",
          bestFor: "Enterprise VFX pipelines, custom LoRA integration & local hardware control"
        }
      ],
      callouts: {
        mistake: "Setting the Structural Weight slider too low (< 0.40), which causes the AI to ignore the physical scaffold of your video and invent random hallucinated shapes.",
        proTip: "Wear high-contrast clothing when shooting your reference video (e.g. dark clothes against a light wall) to give the neural edge-detection algorithms clean separation.",
        mistakes: [
          "Using shaky, handheld smartphone footage without stabilization; camera jitter confuses temporal optical flow and causes violent visual shimmering.",
          "Attempting a Video-to-Video transformation on footage with motion-blurred fast movements; motion blur in source video produces blurry, smeared AI textures.",
          "Changing the aspect ratio between your source video and the target output, resulting in severe anamorphic squashing."
        ],
        proTips: [
          "Shoot your reference footage at 60fps with a high shutter speed (1/120s or 1/250s) to eliminate motion blur and provide crisp edge contours for diffusion.",
          "Use DomoAI's 'Flat Anime v3' preset to turn real-world martial arts fight choreography into high-octane Japanese anime sequences with zero redraw flicker.",
          "In ComfyUI, chain ControlNet OpenPose and ControlNet Depth simultaneously for 100% human skeletal alignment during complex acrobatic moves."
        ]
      },
      promptLab: {
        title: "Video-to-Video Structural Transformation & ControlNet Matrix",
        description: "Specify structural adherence weights, ControlNet models, and stylistic prompt tokens to execute zero-flicker Video-to-Video transformations.",
        variables: [
          {
            name: "Source Video Action",
            label: "Live-Action Reference",
            options: ["Person Drinking Espresso at Wooden Cafe Table", "Skateboarder Performing a Kickflip on Concrete", "Cardboard Box Pushed Across Desk by Hand"],
            default: "Person Drinking Espresso at Wooden Cafe Table"
          },
          {
            name: "Target Aesthetic",
            label: "Visual Re-Skin Style",
            options: ["Cyberpunk Android in Grimy Neon Bar", "Warm Tactile Claymation Stop-Motion Film", "1980s Retro Dark Fantasy Oil Painting"],
            default: "Cyberpunk Android in Grimy Neon Bar"
          },
          {
            name: "Structural Fidelity",
            label: "Geometry Adherence",
            options: ["Strict (Lock exact silhouette & depth - 80%)", "Balanced (Preserve motion, restyle anatomy - 60%)", "Loose (Abstract inspiration - 35%)"],
            default: "Strict (Lock exact silhouette & depth - 80%)"
          }
        ],
        template: `# Video-to-Video Structural Resynthesis Protocol
Source Footage: [Source Video Action]
Target Transformation: [Target Aesthetic]
Geometry Adherence: [Structural Fidelity]

Act as an Advanced Generative VFX Supervisor and Pipeline Engineer.
Generate the complete Video-to-Video production specification:
1. Pre-Production Footage Preparation: Shutter speed, lighting, and contrast requirements for the raw smartphone video.
2. ControlNet & Structural Slider Configuration: Exact decimal values for Structure vs. Style, Depth vs. Lineart weights.
3. Stylistic Transformation Prompt: Comprehensive prompt describing the new world, textures, materials, and lighting.
4. Temporal Deflicker & Consistency Protocol: Steps to eliminate frame-to-frame boiling and texture shimmering.`,
        expectedOutput: `### Video-to-Video Production Blueprint: [Target Aesthetic]

#### 1. Source Footage Capture Directives
- **Camera Settings**: 4K 60fps, Shutter Speed: \`1/250s\` (crucial to eliminate optical motion blur), ISO: 100-400 (noise-free).
- **Physical Staging ([Source Video Action])**: Subject must sit against a plain background with distinct silhouette separation. Coffee cup must be a solid, non-reflective color.

#### 2. Structural & ControlNet Calibration
\`\`\`yaml
platform: "Runway Video-to-Video / ComfyUI"
structural_fidelity: "[Structural Fidelity]"
settings:
  structure_weight: 0.82       # Strictly preserves hand-to-cup distance and facial bone structure
  style_weight: 0.88           # Fully replaces clothing, skin, and environment textures
  controlnet_depth_weight: 0.75 # Locks 3D spatial depth of the table and arms
  controlnet_canny_weight: 0.40 # Enforces edge contours of the cup and silhouette
\`\`\`

#### 3. Stylistic Transformation Prompt (Runway / ComfyUI)
\`\`\`text
[Target Aesthetic], highly detailed cybernetic android with polished chrome and matte carbon-fiber plating, glowing blue optical sensors, drinking liquid coolant from a glowing cylindrical canister. Grimy rain-slicked cyberpunk bar background, holographic neon signage reflecting in metallic surfaces, cinematic blade runner aesthetic, 8k resolution, zero flicker, stable photorealistic textures.
\`\`\`

#### 4. Temporal Deflicker Safeguards
1. **Source Pre-Processing**: Run a subtle temporal denoise filter in DaVinci Resolve on the raw footage before uploading to eliminate sensor noise.
2. **Latent Seed Locking**: In ComfyUI AnimateDiff, lock temporal context length to 16 frames with 4-frame overlap to ensure smooth latent blending.
3. **Post-Deflicker Pass**: Run the rendered video through the 'Temporal Deflicker' node in DaVinci Resolve Studio to eliminate any residual 24fps texture boiling.`
      },
      conceptGuide: {
        title: "ControlNet Depth Guiding & Temporal Latent Blending",
        overview: "Video-to-Video functions by extracting intermediate geometric feature maps from each frame of the source video: Depth maps (measuring distance from the camera lens), Canny edge maps (outlining physical object boundaries), and OpenPose skeletons (tracking human joints). These structural tensors are fed into the cross-attention layers of the diffusion model alongside the text prompt. By constraining the latent noise to reconstruct only within the physical boundaries dictated by the depth map, the model resynthesizes textures without breaking physical geometry.",
        keyPoints: [
          "**Depth Tensor Guidance:** Preserves physical object distances and spatial volumes regardless of aesthetic restyling.",
          "**High Shutter Speed Requirement:** Eliminating source motion blur prevents muddy, hallucinated AI edge artifacts.",
          "**Temporal Context Overlap:** Blending sliding temporal windows eliminates the dreaded 'boiling' flicker common to naive frame-by-frame styles."
        ]
      },
      learning: {
        resources: [
          {
            title: "Runway Official Guide: Video-to-Video Transformation",
            url: "https://runwayml.com/video-to-video",
            type: "Official Docs"
          },
          {
            title: "DomoAI Official Documentation: Video Styles & Best Practices",
            url: "https://domoai.app",
            type: "Official Docs"
          },
          {
            title: "ComfyUI Community: AnimateDiff & ControlNet V2V Workflows",
            url: "https://github.com/comfyanonymous/ComfyUI",
            type: "Open Source VFX"
          },
          {
            title: "DaVinci Resolve Manual: Temporal Noise Reduction & Deflicker",
            url: "https://www.blackmagicdesign.com/products/davinciresolve",
            type: "Industry Post-Production"
          }
        ]
      }
    },

    // Node 9
    {
      id: "step-9",
      stepNumber: 9,
      phaseId: "phase-4",
      title: "Video Inpainting, Object Removal & Aspect Ratio Outpainting",
      timeEstimate: "2 hrs",
      difficulty: "Advanced",
      summary: "Remove unwanted background artifacts and outpaint vertical 9:16 clips into wide 16:9 cinematic frames automatically.",
      description: "Even the best AI video generations or live-action commercial plates frequently contain unwanted flaws: an accidental microphone boom peeking into the top of the frame, a modern car visible in the background of a medieval period piece, a telephone wire cutting across an architectural shot, or a vertical 9:16 smartphone video that needs to be delivered in widescreen 16:9 for a cinema or YouTube release.\n\nGenerative Video Inpainting and Outpainting eliminate the need for hundreds of hours of manual rotoscoping and paint-frame tracking. Using Runway's 'Erase & Replace' and 'Expand Video' tools, creators can paint an interactive mask over an unwanted object across a moving video clip; the generative model analyzes temporal motion vectors across surrounding frames, tracks the masked region, and seamlessly synthesizes matching background textures. Furthermore, video outpainting expands the canvas borders horizontally or vertically, hallucinating realistic continuous landscapes and room geometry to re-frame clips for any display standard.",
      playbook: {
        setup: "Open Runway Gen-3 Studio. Select 'Video Inpainting / Erase & Replace'. Upload a video containing an unwanted element (e.g. an unwanted tourist walking in the background of a scenic shot).",
        execute: "In the Erase & Replace editor, brush over the unwanted tourist across the keyframe timeline. Toggle 'Inpainting Mode' to 'Remove & Fill'. The AI tracks the masked object across the entire 5-second duration and reconstructs the cobblestone street and background architecture. Next, open 'Expand Video', change the aspect ratio from 9:16 to 16:9, and prompt for matching peripheral scenery: 'Expand the cobblestone street with rustic European stone buildings on left and right'. Click 'Generate'.",
        verify: "Play the rendered 16:9 clip: confirm that the unwanted object has disappeared with zero ghosting or edge blurring, and verify that the newly outpainted horizontal wings blend seamlessly with the original center footage."
      },
      tools: [
        {
          name: "Runway Erase & Replace",
          type: "Generative Video Inpainting",
          url: "https://runwayml.com",
          description: "Temporal video inpainting engine that tracks and deletes moving objects or replaces them with alternative prompt-driven elements.",
          bestFor: "Clean-plate generation, boom mic removal & wire removal"
        },
        {
          name: "Runway Expand Video",
          type: "Temporal Video Outpainting",
          url: "https://runwayml.com",
          description: "Generative outpainting tool that dynamically expands video canvas borders from vertical 9:16 to widescreen 16:9 and beyond.",
          bestFor: "Aspect ratio conversions, multi-platform formatting & expansive sets"
        },
        {
          name: "Adobe After Effects",
          type: "Compositing & Rotoscoping Suite",
          url: "https://www.adobe.com/products/aftereffects.html",
          description: "Industry-standard compositing application featuring Content-Aware Fill for Video, planar tracking, and Mocha AE.",
          bestFor: "Precision planar tracking, garbage matte creation & composite blending"
        }
      ],
      callouts: {
        mistake: "Painting a loose, massive mask around a tiny object, forcing the inpainting model to regenerate half the frame and introducing noticeable temporal texture shifts.",
        proTip: "When outpainting from 9:16 to 16:9, apply a subtle feathered mask over the boundary edge in your video editor to blend any micro-differences in film grain.",
        mistakes: [
          "Attempting to inpaint an object that occupies more than 40% of the screen; inpainting is engineered for background cleanup, not total scene reconstruction.",
          "Failing to track shadows: deleting a person but forgetting to mask their shadow on the ground leaves an eerie, disconnected visual artifact.",
          "Using complex descriptive prompts during removal; for clean object deletion, leave the replacement prompt empty to signal background fill."
        ],
        proTips: [
          "Use After Effects Mocha AE to track a high-precision planar spline around the object before sending the matte to Runway for AI infill.",
          "Inpainting works brilliantly for seamless costume fixes (e.g. replacing a modern wristwatch with leather bracers on a fantasy knight).",
          "Always export inpainting passes in ProRes 422 or 4444 to preserve uncompressed color depth for final color grading."
        ]
      },
      promptLab: {
        title: "Video Inpainting & Aspect Ratio Outpainting Blueprint",
        description: "Generate spatial masking plans and peripheral outpainting prompts to clean plates and re-frame vertical clips into cinematic widescreen.",
        variables: [
          {
            name: "Cleanup Objective",
            label: "Inpainting Task",
            options: ["Remove Boom Mic & Modern Cables from Period Drama", "Delete Unwanted Pedestrians from Luxury Car Shot", "Replace Background Billboard with Custom Brand Art"],
            default: "Remove Boom Mic & Modern Cables from Period Drama"
          },
          {
            name: "Outpainting Ratio",
            label: "Canvas Expansion",
            options: ["Vertical 9:16 -> Cinematic Widescreen 16:9", "Square 1:1 -> Ultra-Wide 2.39:1 Anamorphic", "No Outpainting (Pure Inpainting Cleanup)"],
            default: "Vertical 9:16 -> Cinematic Widescreen 16:9"
          },
          {
            name: "Environment Texture",
            label: "Surrounding Scenery",
            options: ["Weathered Stone Castle Walls & Torchlight", "Desert Highway with Distant Red Rock Mesas", "Modern Glass Office Skyscraper Interior"],
            default: "Weathered Stone Castle Walls & Torchlight"
          }
        ],
        template: `# Video Inpainting & Canvas Outpainting Specification
Task: [Cleanup Objective]
Aspect Expansion: [Outpainting Ratio]
Environment Context: [Environment Texture]

Act as an Executive Visual Effects Compositor and Clean-Plate Artist.
Provide the definitive technical specification:
1. Object Masking & Tracking Protocol: Mask tightness, shadow inclusion, and planar tracking parameters.
2. Inpainting Fill Strategy: Mode selection (Erase vs. Replace), prompt directives, and temporal consistency rules.
3. Outpainting Peripheral Geometry Prompt: Widescreen expansion prompt matching lighting, perspective, and [Environment Texture].
4. Edge Blending & Color Matching Protocol: Composite verification to ensure zero visible seam between original and AI-generated pixels.`,
        expectedOutput: `### Inpainting & Outpainting Technical Protocol: [Cleanup Objective]

#### 1. Masking & Planar Tracking Protocol
- **Mask Tightness**: Draw an interactive spline with a strict \`8-pixel\` padding boundary around the unwanted cable/boom elements.
- **Shadow Inclusion**: Extend the mask downward to encompass the cast shadow on the [Environment Texture]; deleting the object without its shadow creates obvious visual artifacts.
- **Planar Tracking**: Lock tracking points to high-contrast surface textures on surrounding walls to ensure the mask follows camera translation precisely.

#### 2. Inpainting Execution (Runway Erase & Replace)
- **Mode**: \`Remove & Infill Background\`
- **Replacement Prompt**: *(Leave blank or prompt strictly for background)*:
\`\`\`text
Continuous weathered ancient stone masonry, rough mortar joints, warm flickering torchlight shadows, seamless architectural continuity.
\`\`\`
- **Temporal Window**: 120 frames (5 seconds) with bidirectional optical flow propagation.

#### 3. Canvas Outpainting ([Outpainting Ratio])
- **Expansion Setting**: Expand canvas horizontally from \`9:16 (1080x1920)\` to \`16:9 (1920x1080)\`.
- **Peripheral Wing Generation Prompt**:
\`\`\`text
Expansive wide shot continuation of [Environment Texture], dramatic medieval interior hall, tall stone pillars on left and right, vaulted arch ceiling above, cobblestone floor reflecting soft amber candlelight. Seamless continuation of lighting and perspective vanishing points.
\`\`\`

#### 4. Composite Blending & Quality Assurance
1. **Edge Feathering**: In After Effects / Premiere, apply a 12-pixel feathered alpha ramp over the left and right boundary seams.
2. **Noise Matching**: Sample the camera sensor noise floor from the center original clip and inject a matching 1.5% Gaussian noise layer over the generated wings.
3. **Seam Flicker Check**: Scrub through the sequence frame-by-frame; verify zero temporal luminance flashing along the outpainted boundary.`
      },
      conceptGuide: {
        title: "Temporal Coherence in Video Inpainting & Outpainting",
        overview: "Unlike single-image inpainting (which only considers 2D spatial context), video inpainting must solve an ill-posed spatiotemporal puzzle. As an object moves or the camera dollies, pixels occluded in frame 1 might be revealed in frame 24. Advanced video inpainting models combine internal optical flow warping (copying revealed background pixels from other frames in the clip) with generative diffusion infill (hallucinating pixels that are never visible). Outpainting extends this concept outward, projecting perspective vanishing points into unrendered space.",
        keyPoints: [
          "**Optical Flow Warping:** Recycles genuine background pixels revealed in neighboring frames for maximum photorealism.",
          "**Shadow and Reflection Masking:** Always mask cast shadows and reflections alongside the primary unwanted object.",
          "**Grain Matching:** Synthesized outpainted wings must receive matching sensor noise to prevent obvious composite seams."
        ]
      },
      learning: {
        resources: [
          {
            title: "Runway Official Guide: Video Inpainting & Erase/Replace",
            url: "https://docs.runwayml.com/gen-2/inpainting",
            type: "Official Docs"
          },
          {
            title: "Adobe After Effects: Content-Aware Fill for Video Guide",
            url: "https://helpx.adobe.com/after-effects/using/content-aware-fill.html",
            type: "Industry Standard"
          },
          {
            title: "Boris FX Mocha Pro: Planar Tracking & Object Removal Workflows",
            url: "https://borisfx.com/products/mocha-pro/",
            type: "VFX Tool Docs"
          },
          {
            title: "SIGGRAPH: Deep Video Inpainting & Temporal Flow Completion",
            url: "https://www.siggraph.org",
            type: "Academic Research"
          }
        ]
      }
    },

    // Node 10
    {
      id: "step-10",
      stepNumber: 10,
      phaseId: "phase-4",
      title: "Frame Interpolation (60fps), 4K Upscaling & Film Grain Mastering",
      timeEstimate: "3 hrs",
      difficulty: "Advanced",
      summary: "Upscale 720p/1080p AI generations to crisp 4K, smooth slow-motion optical flow, and apply unified 35mm film grain and LUTs so cuts match seamlessly.",
      description: "Directly exported raw generations from Runway, Kling, or Luma are rarely ready for high-end commercial broadcasting or theatrical projection. Native video diffusion outputs typically render at 720p or 1080p resolution at 24fps, often exhibiting subtle temporal jitter, compression blocking, slightly soft facial textures, and inconsistent color grades between different prompts. The final phase of production turns raw AI clips into a polished, cinematic master.\n\nMastering AI video requires a post-production finishing pipeline utilizing AI upscaling and traditional digital intermediate (DI) color grading. Using Topaz Video AI or Krea Video Enhancer, filmmakers upscale footage to razor-sharp 4K using temporal models (like Proteus or Artemis) that intelligently hallucinate realistic fine details (skin pores, eyelashes, fabric weave) without digital plastic smoothing. Applying AI Frame Interpolation (Chronos or Apollo) converts 24fps clips into silky 60fps or 120fps slow-motion without optical flow tearing. Finally, assembling cuts inside DaVinci Resolve with a unified 35mm film grain overlay and master show LUT harmonizes disparate AI generations into an indistinguishable Hollywood motion picture.",
      playbook: {
        setup: "Install Topaz Video AI (or access Krea Video Enhancer at krea.ai). Open DaVinci Resolve Studio (or Premiere Pro) with a calibrated Rec.709 color management pipeline.",
        execute: "Import your raw 1080p AI video generations into Topaz Video AI. Select the 'Proteus' or 'Iris' AI model: set Enhancement to 4K (3840x2160), set Revert Compression to 40, Sharpen to 25, and Recover Detail to 35. Toggle Frame Interpolation: set model to 'Chronos Fast' and output frame rate to 60fps (or 2.5x slow-motion). Render the 4K ProRes 422 HQ master. In DaVinci Resolve, assemble your clips, apply a unified cinematic Kodak 2383 film print LUT, and overlay authentic 35mm scanned organic film grain with an 'Overlay' blend mode.",
        verify: "Inspect the final 4K master on a color-calibrated 4K display: verify crisp facial detail without plastic AI smoothing, silky-smooth 60fps motion with zero optical flow warping, and consistent organic film grain that unifies all cuts into a cohesive film."
      },
      tools: [
        {
          name: "Topaz Video AI",
          type: "Temporal AI Upscaler & Frame Interpolator",
          url: "https://www.topazlabs.com/topaz-video-ai",
          description: "Industry-standard desktop application for temporal 4K/8K video upscaling, de-interlacing, optical flow interpolation, and stabilization.",
          bestFor: "4K commercial upscaling, 60fps slow-motion & temporal denoising"
        },
        {
          name: "Krea Video Enhancer",
          type: "Cloud-Based Generative Upscaler",
          url: "https://www.krea.ai",
          description: "Generative video enhancement tool that hallucinates high-frequency skin, hair, and fabric textures onto low-res AI video clips.",
          bestFor: "Rapid cloud upscaling, hyper-detail enhancement & texture recovery"
        },
        {
          name: "DaVinci Resolve Studio",
          type: "Hollywood Color Grading & Finishing Suite",
          url: "https://www.blackmagicdesign.com/products/davinciresolve",
          description: "Premier digital intermediate color grading and editing platform used for film print emulation, LUTs, and film grain mastering.",
          bestFor: "Color grading, film grain integration, audio mastering & delivery"
        }
      ],
      callouts: {
        mistake: "Cranking Sharpening or Texture Hallucination to 100% in Topaz or Krea, creating an unnatural 'clay' look with glowing edges and synthetic skin artifacts.",
        proTip: "Applying authentic scanned 35mm film grain (not digital noise) is the single most effective technique for masking subtle AI temporal inconsistencies across cuts.",
        mistakes: [
          "Exporting final master files in 8-bit lossy MP4, which causes severe color banding in dark gradients and shadow areas.",
          "Using standard frame blending instead of neural optical flow (Chronos/Apollo), causing double-vision ghosting on fast-moving action.",
          "Failing to color-match consecutive shots in DaVinci Resolve, leaving one shot cool/cyan and the next shot warm/magenta."
        ],
        proTips: [
          "In Topaz Video AI, use the 'Iris' model specifically for shots with human faces; it excels at recovering eye reflections and teeth contours.",
          "Set your DaVinci Resolve color space to DaVinci Wide Gamut / Intermediate to preserve maximum dynamic range prior to the final Rec.709 tone mapping pass.",
          "Always apply the 35mm film grain layer on the final timeline track above all clips so the grain structure remains uniform across all edits."
        ]
      },
      promptLab: {
        title: "Mastering Signal Chain & Topaz Video AI Calibration Blueprint",
        description: "Specify the exact post-production finishing pipeline: Topaz Video AI neural model parameters, slow-motion interpolation, and DaVinci Resolve LUT chains.",
        variables: [
          {
            name: "Footage Condition",
            label: "Raw AI Clip Quality",
            options: ["Slightly Soft 1080p24 with Subtle Motion Blur", "Compressed 720p with Digital Artifacts & Artifacting", "Fast Action 1080p Requiring 4x Slow-Motion"],
            default: "Slightly Soft 1080p24 with Subtle Motion Blur"
          },
          {
            name: "Finishing Aesthetic",
            label: "Mastering Grade",
            options: ["Cinematic 35mm Film Print (Kodak 2383 Warmth)", "Hyper-Crisp Modern Commercial (Bleach Bypass)", "Moody Anamorphic Sci-Fi (Teal & Orange)"],
            default: "Cinematic 35mm Film Print (Kodak 2383 Warmth)"
          },
          {
            name: "Master Delivery Format",
            label: "Delivery Codec",
            options: ["Apple ProRes 422 HQ (Broadcast / Commercial)", "Apple ProRes 4444 XQ (VFX Archival)", "H.265 / HEVC 10-bit (High-Bitrate Web Stream)"],
            default: "Apple ProRes 422 HQ (Broadcast / Commercial)"
          }
        ],
        template: `# AI Video Post-Production & 4K Finishing Pipeline
Raw Input: [Footage Condition]
Color Grade Target: [Finishing Aesthetic]
Master Export: [Master Delivery Format]

Act as an Executive Colorist and AI Video Mastering Engineer.
Generate the complete post-production finishing pipeline:
1. Topaz Video AI Parameter Settings:
   - AI Model Selection (Proteus, Iris, Artemis, Chronos).
   - Exact slider calibrations (Revert Compression, Recover Details, Sharpen, Reduce Noise, Dehalo).
   - Frame Interpolation configuration (Target fps, optical flow model).
2. DaVinci Resolve Digital Intermediate (DI) Node Tree:
   - Node 1 to Node 5 sequence (Color Balance, Contrast, Film Print LUT, Skin Tone Hue, Film Grain).
3. 35mm Film Grain & Texture Integration: Scan gauge, blend mode, and opacity parameters.
4. Final Quality Control (QC) Checklist: 5 strict tests before commercial broadcast delivery.`,
        expectedOutput: `### AI Video Mastering Specification: [Finishing Aesthetic]

#### 1. Topaz Video AI Neural Parameter Configuration
\`\`\`yaml
input_condition: "[Footage Condition]"
target_resolution: "3840x2160 (4K UHD)"
enhancement_model: "Proteus v4 (Fine Tune / Manual)"
parameters:
  revert_compression: 38      # Eliminates H.264 macro-blocking from cloud exports
  recover_original_detail: 42 # Recovers fine skin pores and fabric texture
  sharpen: 22                 # Subtle edge definition without haloing
  reduce_noise: 15            # Cleans temporal jitter in flat color regions
  dehalo: 8                   # Suppresses edge ringing
  anti_alias: 12              # Smooths diagonal line jaggies
frame_interpolation:
  enabled: true
  model: "Chronos Fast"
  target_fps: "60.0 fps"      # Converts 24fps into silky fluid motion
\`\`\`

#### 2. DaVinci Resolve Studio Node Tree Pipeline
- **Node 1 (Exposure & Lift/Gamma/Gain)**: Balance shadows to \`0.025 IRE\` and specular highlights to \`0.95 IRE\`.
- **Node 2 (Shot Matching)**: Match primary color balance between consecutive AI generations using Color Match chart references.
- **Node 3 (Hue / Saturation Curves)**: Desaturate extreme artificial AI neon tones by \`-15%\` for photographic realism.
- **Node 4 (Film Emulation LUT - [Finishing Aesthetic])**:
  - Apply *Kodak 2383 D60 Film Print Emulation LUT* via DaVinci YRGB Color Managed timeline.
- **Node 5 (Organic Film Grain & Halation)**:
  - Overlay 35mm 500T scanned film grain. Blend Mode: \`Overlay\`, Opacity: \`45%\`.
  - Add subtle edge halation on specular highlights (Radius: 8, Warmth: 0.8).

#### 3. Master Export Directives ([Master Delivery Format])
- **Codec**: \`Apple ProRes 422 HQ\` (10-bit 4:2:2 uncompressed).
- **Resolution**: \`3840 x 2160 UHD\` at \`24.000 fps\` or \`60.000 fps\`.
- **Audio Stems**: 24-bit 48kHz uncompressed stereo/5.1 surround sound.

#### 4. Pre-Broadcast Quality Control (QC) Checklist
1. **Zero Plastic Skin**: Zoom to 200% on faces; verify natural pore structure without melted AI smoothing.
2. **Temporal Optical Flow**: Confirm fast hand or camera movements show zero double-edge ghosting.
3. **Black Level Uniformity**: Verify dark shadow areas contain unified 35mm grain rather than blotchy black compression blocks.
4. **Broadcast Safe Colors**: Ensure no chrominance signals exceed legal 100% broadcast limits.
5. **Cadence Consistency**: Verify overall film rhythm feels organically captured by a human cinematographer.`
      },
      conceptGuide: {
        title: "Temporal Super-Resolution & Film Print Emulation",
        overview: "AI video upscaling differs fundamentally from static image upscaling. Traditional image super-resolution processes each frame in isolation, which causes flickering high-frequency details ('texture boiling') when played at 24fps. Temporal video models like Topaz Video AI evaluate up to 5 consecutive frames simultaneously, calculating optical motion vectors to ensure that fine details (such as a freckle or a strand of hair) remain pinned to the exact physical coordinates across time. Concurrently, applying real-world film print LUTs and scanned 35mm organic grain unifies differing AI models into an authentic cinema aesthetic.",
        keyPoints: [
          "**Multi-Frame Temporal Tracking:** Evaluates sliding windows of frames to anchor high-resolution details without texture boiling.",
          "**Optical Flow Interpolation:** Calculates continuous motion vectors to convert 24fps AI generations into 60fps slow-motion without ghosting.",
          "**Organic Grain Harmonization:** 35mm scanned grain acts as a universal visual glue that blends disparate AI models into a unified master."
        ]
      },
      learning: {
        resources: [
          {
            title: "Topaz Video AI Official Documentation & Model Guide",
            url: "https://docs.topazlabs.com/video-ai",
            type: "Official Docs"
          },
          {
            title: "DaVinci Resolve Studio: Color Grading & Film Emulation",
            url: "https://www.blackmagicdesign.com/products/davinciresolve",
            type: "Industry Standard"
          },
          {
            title: "Krea AI: Generative Video Enhancement Masterclass",
            url: "https://www.krea.ai",
            type: "Official Tool"
          },
          {
            title: "The ASC: Film Emulation & The History of Kodak 2383",
            url: "https://theasc.com",
            type: "Cinematography Standard"
          }
        ]
      }
    }
  ]
};
