// Complete production-grade steps data for "Hugging Face, Ollama & Open-Source Models" Roadmap (12 Nodes)

export const huggingfaceOllamaModelsData = {
  id: "huggingface-ollama-models",
  title: "Hugging Face, Ollama & Open-Source Models",
  description: "Transformers API, quantized GGUF/AWQ models, custom Ollama Modelfiles, LoRA fine-tuning, and vLLM serving.",
  category: "Tool Mastery Roadmaps",
  stepCount: 12,
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: Navigating Hugging Face Hub, Formats & Transformers API",
      description: "Evaluate open-weight architectures, decode benchmark metrics, navigate licensing constraints, master Safetensors vs. GGUF formats, and run the Python transformers pipeline."
    },
    {
      id: "phase-2",
      title: "Phase 2: Local Model Serving with Ollama & Custom Modelfiles",
      description: "Pull and serve quantized open models locally, build custom Ollama Modelfiles with pinned system prompts, and execute open vision-language and multilingual embedding models."
    },
    {
      id: "phase-3",
      title: "Phase 3: Dataset Engineering, LoRA Fine-Tuning & Merging",
      description: "Curate synthetic instruction datasets with Hugging Face datasets, fine-tune models with 4-bit QLoRA and TRL SFTTrainer, align with DPO, and merge adapters with MergeKit."
    },
    {
      id: "phase-4",
      title: "Phase 4: Interactive Spaces, Cloud GPU Endpoints & vLLM Scaling",
      description: "Deploy interactive web applications on ZeroGPU Spaces using Gradio, provision dedicated cloud GPU endpoints, and serve high-concurrency production traffic with vLLM."
    }
  ],
  steps: [
    // Node 1
    {
      id: "step-1",
      stepNumber: 1,
      phaseId: "phase-1",
      title: "Navigating Hugging Face Hub, Model Cards & Licenses",
      timeEstimate: "1.5 hrs",
      difficulty: "Beginner",
      summary: "Evaluate open-weight models across Llama, Qwen, DeepSeek, and Mistral families, interpret Open LLM Leaderboard benchmarks, and verify commercial license clauses.",
      description: "The Hugging Face Hub hosts hundreds of thousands of pretrained and fine-tuned open-weight models. Navigating this ecosystem effectively requires rigorous model evaluation beyond raw parameter counts. Developers must examine Model Cards to understand training datasets, base architectures, tokenizer vocabularies, context length windows, and hardware requirements. Crucially, engineering teams must scrutinize the Open LLM Leaderboard (MMLU-Pro, IFEval, MATH, GPQA, MuSR) to distinguish between genuine capability and overfit synthetic benchmark test data.\n\nEqually important is legal and commercial compliance. While models like Mistral and Qwen often feature permissive Apache 2.0 or MIT licenses, others—such as Meta Llama 3.3—impose custom community licenses with monthly active user thresholds (e.g., 700M MAU clauses) and restrictions against using model outputs to train competing models. Mastering the Hugging Face CLI (`huggingface-cli`) and Hub API enables automated model discovery, metadata validation, and secure authentication tokens.",
      playbook: {
        setup: "Install the official Hugging Face Hub client: `pip install --upgrade huggingface_hub`. Authenticate your development environment by running `huggingface-cli login` and pasting a fine-grained User Access Token with read permissions.",
        execute: "Query the Hub CLI to inspect model metadata, download file structures, and verify license terms: `huggingface-cli model info meta-llama/Llama-3.3-70B-Instruct`. Search trending open-weights using Python: `from huggingface_hub import HfApi; api = HfApi(); models = api.list_models(filter='text-generation', sort='downloads', limit=5)`.",
        verify: "Confirm your authentication token is valid with `huggingface-cli whoami`. Run a verification script that fetches the license tag (`model.cardData.license`) for your target repository and confirms it allows commercial use."
      },
      tools: [
        {
          name: "Hugging Face Hub",
          type: "Free Platform",
          url: "https://huggingface.co",
          description: "The central repository for open-source AI models, datasets, spaces, and model documentation.",
          bestFor: "Model discovery, model cards, license inspection & weights repository"
        },
        {
          name: "Open LLM Leaderboard",
          type: "Free Benchmark",
          url: "https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard",
          description: "Objective evaluation dashboard benchmarking open LLMs on MMLU-Pro, IFEval, BBH, and MATH.",
          bestFor: "Unbiased model evaluation & architectural comparison"
        },
        {
          name: "Hugging Face CLI",
          type: "Open Source CLI",
          url: "https://huggingface.co/docs/huggingface_hub/guides/cli",
          description: "Command-line interface for managing repository authentication, downloading weights, and managing cache storage.",
          bestFor: "Terminal-based weight downloads & cache pruning"
        }
      ],
      callouts: {
        mistake: "Deploying a model into production without verifying its license agreement, exposing the organization to copyright infringement or commercial usage restrictions.",
        proTip: "Use the `hf_transfer` Rust-based download accelerator (`pip install hf-transfer`) with `HF_HUB_ENABLE_HF_TRANSFER=1` to saturate 10Gbps bandwidth when pulling multi-gigabyte checkpoints.",
        mistakes: [
          "Assuming all models tagged as 'open source' have permissive commercial licenses; many use custom non-commercial or restricted research licenses.",
          "Relying solely on vendor-published benchmark scores instead of independent third-party evaluations like LMSYS Chatbot Arena and Open LLM Leaderboard v2.",
          "Cloning entire Git repositories using vanilla `git clone` instead of `huggingface-cli download`, which creates massive uncompressed git history bloat."
        ],
        proTips: [
          "Filter models on Hugging Face by the `license:apache-2.0` or `license:mit` tag to surface models free from restrictive commercial clauses.",
          "Check the `config.json` inside the model repository to verify `max_position_embeddings` and `rope_scaling` before sizing GPU VRAM.",
          "Run `huggingface-cli scan-cache` and `huggingface-cli delete-cache` periodically to purge orphaned model revisions and recover disk space."
        ]
      },
      promptLab: {
        title: "Automated Hugging Face Model License & Metadata Auditor",
        description: "Generate a standalone Python verification script that queries the Hugging Face API to validate license terms, parameter count, and context length.",
        variables: [
          {
            name: "Target Model Repo",
            label: "Model Repository ID",
            options: ["meta-llama/Llama-3.3-70B-Instruct", "Qwen/Qwen2.5-72B-Instruct", "deepseek-ai/DeepSeek-V3", "mistralai/Mistral-Small-24B-Instruct-2501"],
            default: "Qwen/Qwen2.5-72B-Instruct"
          },
          {
            name: "Compliance Threshold",
            label: "License Requirement",
            options: ["Permissive Only (Apache-2.0 / MIT)", "Commercial Allowed with MAU Threshold", "Internal Research Only"],
            default: "Permissive Only (Apache-2.0 / MIT)"
          },
          {
            name: "Min Context Window",
            label: "Minimum Tokens",
            options: ["32,768 (32K)", "65,536 (64K)", "131,072 (128K)"],
            default: "32,768 (32K)"
          }
        ],
        template: `# Hugging Face Hub Model Evaluation & License Verification
from huggingface_hub import HfApi, ModelCard
import json

TARGET_MODEL = "[Target Model Repo]"
REQUIRED_COMPLIANCE = "[Compliance Threshold]"
MIN_CONTEXT = [Min Context Window]

api = HfApi()

def audit_model_repo(repo_id: str):
    print(f"Fetching metadata for: {repo_id}...")
    model_info = api.model_info(repo_id=repo_id, files_metadata=True)
    
    # Extract license and card data
    card_data = model_info.card_data or {}
    license_type = card_data.get("license", "unknown")
    pipeline_tag = model_info.pipeline_tag
    downloads = model_info.downloads
    
    print("\\n=== Model Audit Summary ===")
    print(f"Repository: {repo_id}")
    print(f"Pipeline: {pipeline_tag}")
    print(f"Monthly Downloads: {downloads:,}")
    print(f"Declared License: {license_type}")
    
    # Check config.json for architecture and context length
    has_safetensors = any(f.rfilename.endswith(".safetensors") for f in model_info.siblings)
    print(f"Safetensors Format: {'YES' if has_safetensors else 'NO (Security Warning)'}")
    
    # Validation against requirements
    is_permissive = license_type in ["apache-2.0", "mit"]
    print(f"Permissive Commercial License: {is_permissive}")

if __name__ == "__main__":
    audit_model_repo(TARGET_MODEL)`,
        expectedOutput: `=== Model Audit Summary ===
Repository: Qwen/Qwen2.5-72B-Instruct
Pipeline: text-generation
Monthly Downloads: 1,420,850
Declared License: apache-2.0
Safetensors Format: YES
Permissive Commercial License: True

Status: VERIFIED FOR COMMERCIAL PRODUCTION DEPLOYMENT`
      },
      conceptGuide: {
        title: "Model Card Topology, Open Weights vs. Open Source & The Hub",
        overview: "The Hugging Face Hub is the GitHub of machine learning. However, understanding the distinction between truly 'open-source' software and 'open-weights' models is vital. Open-source models (such as those under Apache 2.0 or MIT) release weights, architecture, and training recipes without usage restrictions. In contrast, open-weight models (like Llama 3) provide accessible weights but enforce restrictive end-user licenses limiting commercial scaling or output distillation. Evaluating a model card requires cross-referencing tokenizer vocabulary size, RoPE scaling factors, and benchmark contamination checks before adopting weights.",
        keyPoints: [
          "**Weight Weights vs. Open Source:** Apache 2.0 and MIT permit unrestricted commercial use; custom community licenses (Llama, Gemma) carry legal usage clauses.",
          "**Benchmark Integrity:** The Open LLM Leaderboard v2 prevents data contamination by testing models on canary-string-verified test splits (IFEval, MMLU-Pro).",
          "**Safetensors Standard:** Modern Hub repositories prioritize `.safetensors` over legacy `.bin` (Pickle) to eliminate remote arbitrary code execution risks."
        ]
      },
      learning: {
        resources: [
          {
            title: "Hugging Face Hub Documentation & Guides",
            url: "https://huggingface.co/docs/hub/index",
            type: "Official Docs"
          },
          {
            title: "Hugging Face CLI Reference & Cache Management",
            url: "https://huggingface.co/docs/huggingface_hub/guides/cli",
            type: "CLI Reference"
          },
          {
            title: "Open LLM Leaderboard v2 Methodology & Benchmarks",
            url: "https://huggingface.co/docs/leaderboards/open_llm_leaderboard/about",
            type: "Evaluation Guide"
          },
          {
            title: "Open Source AI Definition by Open Source Initiative (OSI)",
            url: "https://opensource.org/ai/open-source-ai-definition",
            type: "Compliance Standard"
          }
        ]
      }
    },

    // Node 2
    {
      id: "step-2",
      stepNumber: 2,
      phaseId: "phase-1",
      title: "Model Serialization Formats (Safetensors, GGUF, AWQ, GPTQ)",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Understand secure tensor storage and select the exact quantization format suited for CUDA GPUs, Apple Metal, or CPU edge devices.",
      description: "How neural network weights are serialized directly determines memory footprint, inference throughput, and hardware compatibility. Historically, PyTorch models were distributed as `.bin` or `.pt` files serialized with Python's `pickle` library, creating severe remote code execution vulnerabilities upon deserialization. The modern standard is Hugging Face's `safetensors` format: a fast, zero-copy, memory-mapped format that stores pure raw tensors without executable bytecode.\n\nDeploying models efficiently onto resource-constrained hardware requires post-training quantization (PTQ). Selecting the right format is architectural: `GGUF` (designed for llama.cpp) allows cross-platform CPU and Apple Silicon Metal execution with hybrid layer offloading; `AWQ` (Activation-aware Weight Quantization) protects salient weight channels for low-latency 4-bit CUDA GPU serving; and `GPTQ` provides high-throughput matrix multiplication on older GPU architectures. Understanding these trade-offs prevents out-of-memory (OOM) failures and maximizes tokens per second.",
      playbook: {
        setup: "Install essential serialization and quantization utilities: `pip install safetensors autoawq optimum` and ensure you have `llama.cpp` or `huggingface-cli` available in your path.",
        execute: "Inspect a Safetensors model header without loading entire weights into RAM: `python -c \"from safetensors import safe_open; [print(k, v.shape, v.dtype) for k, v in list(safe_open('model.safetensors', framework='pt').items())[:5]]\"`. Download a quantized GGUF variant using Hugging Face CLI: `huggingface-cli download Qwen/Qwen2.5-7B-Instruct-GGUF qwen2.5-7b-instruct-q4_k_m.gguf --local-dir .`.",
        verify: "Run a memory-benchmark test: compare VRAM usage of FP16 (14 GB for 7B), AWQ 4-bit (~5.2 GB), and GGUF Q4_K_M (~4.8 GB). Verify perplexity degradation on 4-bit weights is under 0.2% on standard WikiText benchmarks."
      },
      tools: [
        {
          name: "Safetensors",
          type: "Open Source Library",
          url: "https://github.com/huggingface/safetensors",
          description: "Fast, secure tensor storage format by Hugging Face preventing arbitrary code execution and enabling zero-copy mmap loading.",
          bestFor: "Cloud GPU weight distribution, base checkpoints & production safety"
        },
        {
          name: "llama.cpp / GGUF",
          type: "Open Source Engine",
          url: "https://github.com/ggerganov/llama.cpp",
          description: "C/C++ inference engine and file format engineered for Apple Silicon Metal, CPU inference, and hybrid layer offloading.",
          bestFor: "Local workstation inference, edge devices & Apple unified memory"
        },
        {
          name: "AutoAWQ",
          type: "Open Source Tool",
          url: "https://github.com/casper-hansen/AutoAWQ",
          description: "Activation-aware Weight Quantization library optimizing 4-bit weights specifically for fast CUDA Tensor Core kernels.",
          bestFor: "High-throughput cloud GPU inference with vLLM & TGI"
        }
      ],
      callouts: {
        mistake: "Loading untrusted `.bin` or `.pt` pickle files from unknown Hugging Face repositories, exposing your server to arbitrary system-level shell execution.",
        proTip: "For cloud GPU serving with vLLM, choose AWQ or FP8; for local Mac M-series or consumer desktops without high VRAM, choose GGUF Q4_K_M or Q5_K_M.",
        mistakes: [
          "Confusing GGUF with AWQ: GGUF runs primarily via llama.cpp/Ollama on CPU/Metal, while AWQ is optimized for high-concurrency CUDA GPU serving engines like vLLM.",
          "Choosing aggressive 2-bit or 3-bit quantization (e.g. Q2_K) for reasoning models, causing catastrophic degradation in instruction following and code generation.",
          "Downloading all split shards of a multi-part GGUF repository when you only need a single specific quantization tier file (e.g., `q4_k_m.gguf`)."
        ],
        proTips: [
          "The `Q4_K_M` (Medium) quantization tier represents the golden sweet spot in GGUF, offering 4-bit weights with critical attention layers kept at 6-bit precision.",
          "Modern Nvidia Ada Lovelace (RTX 4090) and Hopper (H100) GPUs support native FP8 inference, which delivers 2x throughput of FP16 with zero quantization loss.",
          "Safetensors allows instant zero-copy loading via memory mapping (`mmap`), reducing model boot times from 45 seconds to under 2 seconds."
        ]
      },
      promptLab: {
        title: "Quantization Format Selector & Hardware Capacity Calculator",
        description: "Calculate exact VRAM and RAM requirements across Safetensors (FP16/BF16), AWQ/GPTQ (4-bit), and GGUF quantization tiers for your target hardware.",
        variables: [
          {
            name: "Model Size",
            label: "Model Parameter Count",
            options: ["8B Parameters (Llama 3.1 8B / Qwen 2.5 7B)", "14B Parameters (Qwen 2.5 14B)", "32B Parameters (Qwen 2.5 32B / DeepSeek R1 32B)", "70B Parameters (Llama 3.3 70B)"],
            default: "32B Parameters (Qwen 2.5 32B / DeepSeek R1 32B)"
          },
          {
            name: "Deployment Hardware",
            label: "Target Compute Environment",
            options: ["Single Nvidia RTX 4090 (24 GB VRAM)", "Apple Mac Studio M2/M3 (64 GB Unified Memory)", "Single Nvidia A10G (24 GB Cloud VRAM)", "Dual Nvidia A100 (2x 80 GB Cloud VRAM)"],
            default: "Single Nvidia RTX 4090 (24 GB VRAM)"
          },
          {
            name: "Context Window Requirement",
            label: "KV Cache Context Length",
            options: ["8,192 Tokens", "32,768 Tokens", "65,536 Tokens", "128,000 Tokens"],
            default: "32,768 Tokens"
          }
        ],
        template: `# Hardware Quantization Sizing Calculator
Model Scale: [Model Size]
Hardware Target: [Deployment Hardware]
Required Context: [Context Window Requirement]

Analyze the target deployment and provide:
1. Exact VRAM required for Base Weights (FP16 vs. 4-bit Quantization).
2. KV Cache VRAM calculation at the requested context length (assume 16-bit KV vs. FP8 KV cache).
3. Recommended serialization format:
   - If CUDA GPU: Recommend Safetensors (FP16/BF16) vs. AutoAWQ (4-bit) vs. FP8.
   - If Apple Silicon / CPU: Recommend exact GGUF tier (Q4_K_M vs. Q5_K_M).
4. Direct Hugging Face CLI command to download the exact optimal file.`,
        expectedOutput: `### Hardware Sizing & Format Strategy

- **Model:** 32B Parameters (Qwen 2.5 32B)
- **Target Hardware:** Single Nvidia RTX 4090 (24 GB VRAM)
- **Context Length:** 32,768 Tokens

#### 1. VRAM Breakdown
- **FP16 Base Weights:** ~64 GB (Impossible on single 24GB card)
- **AWQ 4-Bit Weights:** ~18.5 GB VRAM
- **KV Cache (32K tokens, FP16):** ~4.2 GB VRAM
- **Total VRAM Footprint:** ~22.7 GB (Fits within 24 GB budget)

#### 2. Recommended Format
- **Format:** **AWQ (Activation-aware Weight Quantization)**
- **Engine:** vLLM or Hugging Face TGI with \`--quantization awq\`
- **Quantization File:** \`Qwen/Qwen2.5-32B-Instruct-AWQ\`

#### 3. Hugging Face CLI Download Command
\`\`\`bash
huggingface-cli download Qwen/Qwen2.5-32B-Instruct-AWQ \\
  --include "*.safetensors" "*.json" \\
  --local-dir ./qwen-32b-awq
\`\`\``
      },
      conceptGuide: {
        title: "Memory Mapping, Weight Quantization & Execution Engines",
        overview: "Machine learning weights represent millions of floating-point numbers. In FP16/BF16 precision, each parameter requires 2 bytes of memory: a 70-billion parameter model requires 140 GB of VRAM simply to load into memory. Quantization reduces the numerical precision of weights from 16-bit floats to 4-bit or 8-bit integers using scale factors and zero-point offsets. The architectural challenge is matching the file format to the runtime engine: GGUF packs tensors, vocabularies, and hyper-parameters into a single monolithic binary for CPU/Metal execution, whereas Safetensors partitions tensors across multi-part shards for cloud GPU clusters.",
        keyPoints: [
          "**Safetensors vs. Legacy Pickle:** Safetensors prevents arbitrary code execution and enables fast memory-mapped (`mmap`) reads directly into GPU buffers.",
          "**GGUF Ecosystem:** llama.cpp and Ollama use GGUF to split layers between system RAM and GPU VRAM with microsecond latency.",
          "**AWQ & Tensor Cores:** AWQ preserves the top 1% salient weight channels to maintain reasoning capability while accelerating 4-bit matrix multiplication on CUDA GPUs."
        ]
      },
      learning: {
        resources: [
          {
            title: "Hugging Face Safetensors Official Specification",
            url: "https://huggingface.co/docs/safetensors/index",
            type: "Official Docs"
          },
          {
            title: "llama.cpp GGUF Specification & Quantization Types",
            url: "https://github.com/ggerganov/llama.cpp/blob/master/docs/gguf.md",
            type: "Technical Specification"
          },
          {
            title: "AutoAWQ: Fast 4-bit LLM Quantization Guide",
            url: "https://github.com/casper-hansen/AutoAWQ",
            type: "GitHub Repository"
          },
          {
            title: "Quantization in Transformers with BitsAndBytes & GPTQ",
            url: "https://huggingface.co/docs/transformers/main_classes/quantization",
            type: "Hugging Face Guide"
          }
        ]
      }
    },

    // Node 3
    {
      id: "step-3",
      stepNumber: 3,
      phaseId: "phase-1",
      title: "The transformers Pipeline API & AutoModel Classes",
      timeEstimate: "2.5 hrs",
      difficulty: "Intermediate",
      summary: "Load tokenizers and pretrained weights in 5 lines of Python for text generation, classification, vision OCR, and audio speech recognition.",
      description: "Hugging Face `transformers` is the foundational Python library underpinning modern machine learning engineering. At its core, the library provides two levels of abstraction: the high-level `pipeline()` API for instant inference with pre-configured preprocessing and postprocessing, and the low-level `AutoModel` and `AutoTokenizer` classes for granular control over generation parameters, attention masks, logits, and KV caching.\n\nMastering `AutoModelForCausalLM` and `AutoTokenizer` enables developers to configure dynamic `device_map='auto'` multi-GPU offloading, activate 4-bit/8-bit quantization via `bitsandbytes`, configure modern flash attention kernels (`attn_implementation='flash_attention_2'`), and implement custom token streaming (`TextStreamer`). Beyond text models, `transformers` unifies multimodal tasks: loading `AutoModelForVision2Seq` for document OCR and `AutoModelForSpeechSeq2Seq` (Whisper) for audio transcription under an identical programmatic interface.",
      playbook: {
        setup: "Install PyTorch with CUDA/MPS acceleration along with transformers and accelerate: `pip install torch torchvision transformers accelerate bitsandbytes sentencepiece`.",
        execute: "Implement a production-grade inference script using `AutoModelForCausalLM`, `AutoTokenizer`, and 4-bit quantization with `BitsAndBytesConfig`. Pass `device_map='auto'` and set `torch_dtype=torch.bfloat16`. Configure a `TextStreamer` to yield tokens to stdout in real time as they are generated.",
        verify: "Run the script with a prompt containing a multi-step logical question. Verify tokens stream immediately without stalling, GPU memory consumption matches 4-bit expectations, and peak VRAM remains stable across 500 generated tokens."
      },
      tools: [
        {
          name: "Hugging Face Transformers",
          type: "Open Source Library",
          url: "https://github.com/huggingface/transformers",
          description: "Industry-standard machine learning library providing unified architectures, tokenizers, and pipelines for state-of-the-art models.",
          bestFor: "Python model inference, tokenizer handling & PyTorch integration"
        },
        {
          name: "Hugging Face Accelerate",
          type: "Open Source Library",
          url: "https://github.com/huggingface/accelerate",
          description: "Utility library for easy multi-GPU distributed training and inference with dynamic `device_map='auto'` offloading.",
          bestFor: "Multi-GPU model sharding & memory offloading"
        },
        {
          name: "Google Colab",
          type: "Freemium Cloud",
          url: "https://colab.research.google.com",
          description: "Hosted Jupyter notebook environment offering free and paid T4, A100, and V100 GPUs for prototyping transformers code.",
          bestFor: "Rapid experimentation, prototyping & model testing"
        }
      ],
      callouts: {
        mistake: "Calling `model.generate()` without setting `pad_token_id=tokenizer.eos_token_id`, causing runtime warnings or runaway repetitive generations.",
        proTip: "Always pass `attn_implementation='flash_attention_2'` or `'sdpa'` (PyTorch Scaled Dot-Product Attention) to slash attention memory overhead by up to 60%.",
        mistakes: [
          "Loading models directly onto the CPU before transferring to CUDA with `.to('cuda')`, resulting in an unnecessary CPU RAM spike that crashes containers.",
          "Failing to set `model.eval()` before calling `model.generate()`, leaving dropout and batch normalization layers active during inference.",
          "Using vanilla Python string concatenation for chat models instead of `tokenizer.apply_chat_template()`, which corrupts special token delimiters (`<|im_start|>`)."
        ],
        proTips: [
          "Use `tokenizer.apply_chat_template(messages, tokenize=True, add_generation_prompt=True, return_tensors='pt')` to ensure exact template alignment across models.",
          "Set `torch_dtype='auto'` to automatically adopt the native precision specified in the model's `config.json` (typically BF16 on modern GPUs).",
          "Wrap generation calls inside `with torch.inference_mode():` rather than `torch.no_grad()` for faster tensor execution."
        ]
      },
      promptLab: {
        title: "Production AutoModelForCausalLM Streaming Inference Engine",
        description: "Generate a complete, type-safe Python script utilizing transformers AutoClasses, 4-bit BitsAndBytes quantization, and chat template token streaming.",
        variables: [
          {
            name: "Model Identifier",
            label: "Model Checkpoint",
            options: ["Qwen/Qwen2.5-7B-Instruct", "meta-llama/Llama-3.1-8B-Instruct", "mistralai/Mistral-7B-Instruct-v0.3"],
            default: "Qwen/Qwen2.5-7B-Instruct"
          },
          {
            name: "Quantization Mode",
            label: "Quantization Setting",
            options: ["4-bit NF4 (bitsandbytes)", "8-bit Int8 (bitsandbytes)", "Native BFloat16 (Full Precision)"],
            default: "4-bit NF4 (bitsandbytes)"
          },
          {
            name: "Sampling Profile",
            label: "Generation Profile",
            options: ["Deterministic Coding (Temp 0.1, Top-p 0.95)", "Creative Writing (Temp 0.7, Top-p 0.9)", "Greedy Search (Temp 0.0)"],
            default: "Deterministic Coding (Temp 0.1, Top-p 0.95)"
          }
        ],
        template: `# Production Transformers Inference Script
import torch
from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    BitsAndBytesConfig,
    TextStreamer
)

MODEL_ID = "[Model Identifier]"
QUANTIZATION = "[Quantization Mode]"
SAMPLING = "[Sampling Profile]"

# Configure 4-bit BitsAndBytes quantization if selected
bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.bfloat16,
    bnb_4bit_use_double_quant=True
) if "4-bit" in QUANTIZATION else None

print(f"Loading tokenizer for {MODEL_ID}...")
tokenizer = AutoTokenizer.from_pretrained(MODEL_ID, trust_remote_code=True)
if tokenizer.pad_token_id is None:
    tokenizer.pad_token_id = tokenizer.eos_token_id

print(f"Loading model weights with device_map='auto'...")
model = AutoModelForCausalLM.from_pretrained(
    MODEL_ID,
    quantization_config=bnb_config,
    torch_dtype=torch.bfloat16,
    device_map="auto",
    attn_implementation="sdpa",
    trust_remote_code=True
)
model.eval()

# Chat template conversation messages
messages = [
    {"role": "system", "content": "You are a concise senior AI engineer."},
    {"role": "user", "content": "Explain the architectural difference between PyTorch SDPA and FlashAttention-2 in 3 bullet points."}
]

inputs = tokenizer.apply_chat_template(
    messages,
    tokenize=True,
    add_generation_prompt=True,
    return_tensors="pt"
).to(model.device)

streamer = TextStreamer(tokenizer, skip_prompt=True, skip_special_tokens=True)

print("\\n=== Streaming Model Output ===")
with torch.inference_mode():
    outputs = model.generate(
        inputs,
        streamer=streamer,
        max_new_tokens=256,
        temperature=0.1,
        top_p=0.95,
        do_sample=True,
        pad_token_id=tokenizer.eos_token_id
    )`,
        expectedOutput: `=== Streaming Model Output ===
- **Memory Footprint:** Both PyTorch SDPA (Scaled Dot-Product Attention) and FlashAttention-2 avoid storing the full N x N attention matrix in HBM, reducing memory complexity from quadratic O(N^2) to linear O(N).
- **Kernel Optimization:** FlashAttention-2 is a specialized CUDA kernel engineered for Hopper and Ampere architectures, optimizing work partitioning across thread blocks for up to 2x higher TFLOPS than basic implementations.
- **Portability:** PyTorch SDPA is a built-in standard primitive with automatic dispatch across CUDA, Apple MPS, and CPU backends, requiring zero external compilation flags.`
      },
      conceptGuide: {
        title: "AutoModel Architecture, Chat Templates & Memory Offloading",
        overview: "The Hugging Face `transformers` design relies on the Factory pattern through `AutoClass` abstractions. Rather than instantiating model-specific classes like `LlamaForCausalLM` or `Qwen2ForCausalLM`, developers use `AutoModelForCausalLM.from_pretrained()`, which reads the architecture key inside `config.json` and loads the correct graph dynamically. The `apply_chat_template()` utility translates generic JSON chat dictionaries into model-specific string delimiters using Jinja2 templates, ensuring tokens like `<|im_start|>` and `<|im_end|>` match the exact pre-training recipe.",
        keyPoints: [
          "**AutoClass Flexibility:** `AutoModelForCausalLM` dynamically instantiates the correct architecture by reading metadata inside `config.json`.",
          "**Jinja2 Chat Templates:** Always use `apply_chat_template()` to format conversations; manual string interpolation causes syntax and separator mismatches.",
          "**BitsAndBytes NF4:** NormalFloat4 (NF4) quantization provides optimal information-theoretic representation for normally distributed neural weights."
        ]
      },
      learning: {
        resources: [
          {
            title: "Hugging Face Transformers: AutoClasses Documentation",
            url: "https://huggingface.co/docs/transformers/model_doc/auto",
            type: "Official Docs"
          },
          {
            title: "Hugging Face Prompt Templates & Chat Templating Guide",
            url: "https://huggingface.co/docs/transformers/main/en/chat_templating",
            type: "Guide"
          },
          {
            title: "BitsAndBytes 4-bit Quantization Integration in Transformers",
            url: "https://huggingface.co/blog/4bit-transformers-bitsandbytes",
            type: "Hugging Face Blog"
          },
          {
            title: "PyTorch Scaled Dot-Product Attention (SDPA) Tutorial",
            url: "https://pytorch.org/tutorials/intermediate/scaled_dot_product_attention_tutorial.html",
            type: "API Reference"
          }
        ]
      }
    },

    // Node 4
    {
      id: "step-4",
      stepNumber: 4,
      phaseId: "phase-2",
      title: "Running Open Models Locally with Ollama & llama.cpp",
      timeEstimate: "1.5 hrs",
      difficulty: "Beginner",
      summary: "Pull quantized GGUF models directly from Hugging Face and serve a local OpenAI-compatible REST API for local applications.",
      description: "Ollama has revolutionized local model execution by packaging `llama.cpp`, GPU layer offloading, and model serialization into a single terminal utility. While developers initially relied on Ollama's curated model registry, Ollama now supports direct ingestion of any arbitrary GGUF model hosted on the Hugging Face Hub using the `hf.co` namespace (e.g., `ollama run hf.co/Qwen/Qwen2.5-Coder-7B-Instruct-GGUF`).\n\nUnder the hood, Ollama manages the model lifecycle: allocating VRAM across Nvidia CUDA or Apple Silicon Metal, swapping inactive models to system RAM, and exposing an OpenAI-compatible REST API at `http://localhost:11434/v1`. This allows any existing developer tooling, code completion extension, or autonomous agent framework configured for OpenAI (`/v1/chat/completions`) to run against a zero-cost, fully private, air-gapped local model with zero code modifications.",
      playbook: {
        setup: "Install Ollama via `curl -fsSL https://ollama.com/install.sh` on macOS/Linux or the Windows installer. Verify the system daemon is running with `ollama --version`.",
        execute: "Pull an open model directly from Hugging Face Hub into your local Ollama daemon: `ollama run hf.co/bartowski/Qwen2.5-Coder-7B-Instruct-GGUF:Q4_K_M`. Test the local OpenAI-compatible API endpoint using `curl` against `http://localhost:11434/v1/chat/completions` with streaming enabled.",
        verify: "Run `ollama ps` to verify the model is loaded into VRAM, inspect processor allocation (e.g. 100% GPU offload), and verify response latency is under 25ms per token."
      },
      tools: [
        {
          name: "Ollama",
          type: "Open Source Engine",
          url: "https://ollama.com",
          description: "Leading local AI runtime packaging llama.cpp with automated GPU layer offloading, model caching, and an OpenAI-compatible API.",
          bestFor: "Local model serving, desktop integration & CLI chat"
        },
        {
          name: "llama.cpp",
          type: "Open Source Engine",
          url: "https://github.com/ggerganov/llama.cpp",
          description: "High-performance inference engine written in C/C++ supporting pure CPU inference, Apple Metal, and CUDA acceleration.",
          bestFor: "Low-level parameter tuning, quantization scripts & server binaries"
        },
        {
          name: "LM Studio",
          type: "Freemium Desktop",
          url: "https://lmstudio.ai",
          description: "Visual desktop interface for discovering, downloading from Hugging Face, and running local LLMs with GPU offload sliders.",
          bestFor: "GUI-driven local exploration & local server management"
        }
      ],
      callouts: {
        mistake: "Assuming Ollama defaults to the model's full native context window; Ollama defaults to 2,048 tokens (`num_ctx 2048`) unless explicitly overridden in a Modelfile or API payload.",
        proTip: "Set `OLLAMA_KEEP_ALIVE=-1` in your system environment variables to keep models permanently loaded in VRAM, eliminating the 4-second loading delay between prompts.",
        mistakes: [
          "Running large 70B models on systems with insufficient unified memory or VRAM, causing aggressive paging to swap disk and grinding the system to a halt.",
          "Failing to expose Ollama to local Docker containers by omitting `OLLAMA_HOST=0.0.0.0` in the environment configuration.",
          "Overlooking `ollama stop <model>` when switching between heavy tasks, leaving VRAM occupied and starving other applications."
        ],
        proTips: [
          "You can pull any GGUF repository directly from Hugging Face without cloning using `ollama run hf.co/{username}/{repository}:{quant_tag}`.",
          "Inspect memory usage and running context size across active models in real time by executing `ollama ps` in your terminal.",
          "Set `OLLAMA_FLASH_ATTENTION=1` in your environment to activate FlashAttention kernels and slash VRAM consumption during long context processing."
        ]
      },
      promptLab: {
        title: "Ollama Local OpenAI-Compatible REST API Client",
        description: "Configure a Python script connecting the standard OpenAI SDK to a local Ollama instance with streaming and context window overrides.",
        variables: [
          {
            name: "Local Model Tag",
            label: "Ollama Model",
            options: ["qwen2.5-coder:7b", "llama3.3:70b", "deepseek-r1:14b", "mistral:latest"],
            default: "qwen2.5-coder:7b"
          },
          {
            name: "Context Window",
            label: "Context Length (num_ctx)",
            options: ["8192", "16384", "32768", "65536"],
            default: "16384"
          },
          {
            name: "Temperature",
            label: "Creativity / Determinism",
            options: ["0.0 (Strict Deterministic)", "0.2 (Code / Technical)", "0.7 (Conversational)"],
            default: "0.2 (Code / Technical)"
          }
        ],
        template: `# OpenAI SDK Client pointing to Local Ollama
from openai import OpenAI
import os

MODEL_TAG = "[Local Model Tag]"
NUM_CTX = [Context Window]
TEMP = [Temperature]

# Point OpenAI client to local Ollama daemon
client = OpenAI(
    base_url="http://localhost:11434/v1",
    api_key="ollama" # Required by client, ignored by Ollama
)

print(f"Connecting to local Ollama on localhost:11434 with model: {MODEL_TAG}...")

# Stream completions using standard OpenAI chat completions endpoint
stream = client.chat.completions.create(
    model=MODEL_TAG,
    messages=[
        {"role": "system", "content": "You are an expert system engineer running locally."},
        {"role": "user", "content": "Write a clean Bash script to backup Postgres with rotation."}
    ],
    temperature=TEMP,
    extra_body={"options": {"num_ctx": NUM_CTX}},
    stream=True
)

print("\\n=== Local Model Response Stream ===")
for chunk in stream:
    content = chunk.choices[0].delta.content or ""
    print(content, end="", flush=True)
print("\\n")`,
        expectedOutput: `=== Local Model Response Stream ===
#!/usr/bin/env bash
set -euo pipefail

BACKUP_DIR="/var/backups/postgres"
DB_NAME="production_db"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
RETENTION_DAYS=7

mkdir -p "$BACKUP_DIR"
pg_dump -Fc "$DB_NAME" > "$BACKUP_DIR/\${DB_NAME}_\${TIMESTAMP}.dump"
find "$BACKUP_DIR" -type f -name "*.dump" -mtime +"$RETENTION_DAYS" -delete
echo "Backup completed successfully at $(date)"`
      },
      conceptGuide: {
        title: "Ollama Architecture, Layer Offloading & Local Daemon Mechanics",
        overview: "Before Ollama, running a local model required cloning git repositories, compiling C++ binaries for your specific CPU architecture, downloading multi-part raw weights from Hugging Face, and manually managing GPU layer offloading flags. Ollama unifies this pipeline into a standardized Docker-like architecture: models are distributed as containerized 'Manifests' containing weights, system prompts, template formats, and tokenizers. An underlying system daemon manages memory persistence, request routing, and layer offloading automatically.",
        keyPoints: [
          "**Drop-In OpenAI Compatibility:** Ollama natively emulates the `/v1/chat/completions` API schema, making it an instant replacement for cloud LLM APIs.",
          "**Hybrid Layer Offloading:** On machines with limited VRAM, Ollama offloads a subset of layers to the GPU while processing the remainder on the CPU.",
          "**Direct HF Hub Ingestion:** Using the `hf.co/...` syntax allows any GGUF file on Hugging Face to be downloaded, converted, and served locally in one command."
        ]
      },
      learning: {
        resources: [
          {
            title: "Ollama Official Documentation & Quickstart",
            url: "https://github.com/ollama/ollama/blob/main/docs/README.md",
            type: "Official Docs"
          },
          {
            title: "Ollama OpenAI API Compatibility Specification",
            url: "https://github.com/ollama/ollama/blob/main/docs/openai.md",
            type: "API Reference"
          },
          {
            title: "Hugging Face & Ollama Direct Integration Guide",
            url: "https://huggingface.co/blog/ollama",
            type: "Hugging Face Blog"
          },
          {
            title: "llama.cpp Hardware Offload & Optimization Reference",
            url: "https://github.com/ggerganov/llama.cpp",
            type: "GitHub Repository"
          }
        ]
      }
    },

    // Node 5
    {
      id: "step-5",
      stepNumber: 5,
      phaseId: "phase-2",
      title: "Engineering Custom Ollama Modelfiles & Context Parameters",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Customize base model weights, bake in persistent system prompts, tune num_ctx context lengths, and calibrate sampling parameters.",
      description: "Much like a `Dockerfile` defines containerized environments, an Ollama `Modelfile` defines the persona, parameters, and operational behavior of an open model. Rather than repeatedly passing large system prompts and hyperparameters across API requests, engineering teams use Modelfiles to compile customized, repeatable model images with baked-in behaviors.\n\nA production Modelfile specifies: the base model or GGUF path (`FROM`), inference parameters (`PARAMETER num_ctx`, `PARAMETER temperature`, `PARAMETER top_p`, `PARAMETER stop`), the chat template formatting (`TEMPLATE`), and the permanent behavioral guardrails (`SYSTEM`). Building and versioning custom Modelfiles enables teams to create domain-specific coding assistants, air-gapped security auditors, and deterministic JSON extraction agents that can be pushed to private Ollama registries or shared with engineering teams.",
      playbook: {
        setup: "Create a project directory `mkdir -p ~/ollama-models/code-auditor && cd ~/ollama-models/code-auditor`. Create an empty file named `Modelfile`.",
        execute: "Author a custom `Modelfile` configuring `FROM qwen2.5-coder:14b`, setting `PARAMETER num_ctx 32768`, `PARAMETER temperature 0.1`, and a structured `SYSTEM` prompt enforcing production code audits. Compile the image: `ollama create code-auditor:v1 -f Modelfile`.",
        verify: "Run `ollama show code-auditor:v1 --modelfile` to verify the compiled parameters. Execute `ollama run code-auditor:v1` and prompt it with a code snippet containing a subtle SQL injection vulnerability to verify it applies the baked-in persona."
      },
      tools: [
        {
          name: "Ollama Modelfile",
          type: "Configuration Spec",
          url: "https://github.com/ollama/ollama/blob/main/docs/modelfile.md",
          description: "Declarative configuration format for customizing base weights, system prompts, sampling parameters, and stop sequences.",
          bestFor: "Model persona baking, parameter tuning & version control"
        },
        {
          name: "Open WebUI",
          type: "Open Source UI",
          url: "https://github.com/open-webui/open-webui",
          description: "Self-hosted, extensible web interface for Ollama with multi-user management, model building, and prompt preset sharing.",
          bestFor: "Team collaboration, local ChatGPT alternative & visual Modelfile editing"
        },
        {
          name: "Raycast Ollama",
          type: "Free Extension",
          url: "https://www.raycast.com",
          description: "Keyboard-driven macOS launcher extension connecting custom local Ollama models directly to system hotkeys.",
          bestFor: "Instant desktop access & global productivity shortcuts"
        }
      ],
      callouts: {
        mistake: "Omitting explicit stop tokens in custom Modelfiles (`PARAMETER stop '<|im_end|>'`), leading to hallucinated multi-turn conversations where the model answers its own questions.",
        proTip: "Set `PARAMETER num_predict 2048` to limit the maximum generation tokens per turn, preventing infinite loops and runaway compute usage.",
        mistakes: [
          "Setting `num_ctx` higher than available GPU VRAM, forcing Ollama into catastrophic CPU memory swap during long context requests.",
          "Overwriting the default `TEMPLATE` instruction block without preserving mandatory whitespace and model-specific Jinja delimiters.",
          "Modifying system instructions in code without re-running `ollama create <model> -f Modelfile`, leaving active running models out of sync with disk changes."
        ],
        proTips: [
          "You can base a Modelfile directly on an arbitrary local GGUF file: `FROM ./my-custom-model.gguf`.",
          "Add `PARAMETER repeat_penalty 1.15` to prevent open-weight models from repeating loops during long algorithmic code generation.",
          "Use `ollama cp model-a model-b` to quickly clone and snapshot existing models before testing experimental parameter alterations."
        ]
      },
      promptLab: {
        title: "Production Ollama Modelfile Architecture Template",
        description: "Author a production-ready, versioned Ollama Modelfile tailored for air-gapped security code auditing with explicit stop tokens and context bounds.",
        variables: [
          {
            name: "Base Weight Source",
            label: "Base Model",
            options: ["qwen2.5-coder:14b", "llama3.3:70b", "mistral-small:24b", "deepseek-r1:14b"],
            default: "qwen2.5-coder:14b"
          },
          {
            name: "Context Length",
            label: "num_ctx Parameter",
            options: ["16384", "32768", "65536"],
            default: "32768"
          },
          {
            name: "Specialty Domain",
            label: "Agent Role",
            options: ["Air-Gapped Security Code Auditor", "Senior TypeScript / Next.js Architect", "Deterministic JSON Extraction Engine"],
            default: "Air-Gapped Security Code Auditor"
          }
        ],
        template: `# Production Ollama Modelfile
FROM [Base Weight Source]

# Context and Memory Configuration
PARAMETER num_ctx [Context Length]
PARAMETER num_predict 4096

# Sampling Parameters
PARAMETER temperature 0.1
PARAMETER top_p 0.95
PARAMETER repeat_penalty 1.1

# Strict Stop Sequences
PARAMETER stop "<|im_start|>"
PARAMETER stop "<|im_end|>"
PARAMETER stop "<|endoftext|>"

# System Persona and Constraints
SYSTEM """
You are a senior [Specialty Domain]. You operate in a strictly air-gapped, zero-telemetry environment.
Core Directives:
1. Provide immediate, production-grade solutions without conversational filler ("Sure!", "Glad to help").
2. Identify security vulnerabilities (OWASP Top 10, CWE-89 SQLi, XSS, memory leaks) with severity ratings.
3. Output code blocks with precise filename annotations and strict typing.
4. When refactoring, highlight breaking changes and maintain backward compatibility.
"""`,
        expectedOutput: `### Compiled Modelfile Preview

\`\`\`dockerfile
FROM qwen2.5-coder:14b

PARAMETER num_ctx 32768
PARAMETER num_predict 4096
PARAMETER temperature 0.1
PARAMETER top_p 0.95
PARAMETER repeat_penalty 1.1

PARAMETER stop "<|im_start|>"
PARAMETER stop "<|im_end|>"
PARAMETER stop "<|endoftext|>"

SYSTEM """
You are a senior Air-Gapped Security Code Auditor. You operate in a strictly air-gapped, zero-telemetry environment.
Core Directives:
1. Provide immediate, production-grade solutions without conversational filler ("Sure!", "Glad to help").
2. Identify security vulnerabilities (OWASP Top 10, CWE-89 SQLi, XSS, memory leaks) with severity ratings.
3. Output code blocks with precise filename annotations and strict typing.
4. When refactoring, highlight breaking changes and maintain backward compatibility.
"""
\`\`\`

To build and run:
\`\`\`bash
ollama create security-auditor:v1 -f Modelfile
ollama run security-auditor:v1
\`\`\``
      },
      conceptGuide: {
        title: "Modelfile Specification, Context Allocation & Stop Tokens",
        overview: "An Ollama Modelfile serves as the immutable blueprint for a local AI runtime instance. When compiling via `ollama create`, the engine binds the base model weights with specified parameter defaults and system instructions into a unified manifest. Understanding `num_ctx` is paramount: by default, Ollama allocates only 2,048 tokens of context to conserve memory. Expanding `num_ctx` to 32K or 64K allocates significantly more VRAM for the Key-Value (KV) cache. Specifying explicit stop tokens guarantees that generation terminates immediately when the model emits delimiter tokens.",
        keyPoints: [
          "**Immutable Blueprint:** Modelfiles allow development teams to version-control model personas and hyperparameters alongside application code.",
          "**KV Cache Sizing:** Context memory grows linearly with `num_ctx`; ensure sufficient VRAM is reserved for concurrent active user sessions.",
          "**Delimiter Integrity:** Explicit stop tokens prevent open models from leaking template markers or continuing hallucinated dialogues."
        ]
      },
      learning: {
        resources: [
          {
            title: "Ollama Modelfile Official Specification & Syntax",
            url: "https://github.com/ollama/ollama/blob/main/docs/modelfile.md",
            type: "Official Docs"
          },
          {
            title: "Ollama Context Window Configuration & Parameter Guide",
            url: "https://github.com/ollama/ollama/blob/main/docs/faq.md",
            type: "FAQ & Reference"
          },
          {
            title: "Open WebUI Documentation & Custom Model Management",
            url: "https://docs.openwebui.com",
            type: "Guide"
          },
          {
            title: "Prompt Engineering for Open-Weight Models (Qwen & Llama)",
            url: "https://huggingface.co/blog/open-source-llms-guide",
            type: "Hugging Face Guide"
          }
        ]
      }
    },

    // Node 6
    {
      id: "step-6",
      stepNumber: 6,
      phaseId: "phase-2",
      title: "Open-Weight Vision, OCR & Embedding Models",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Run specialized open-weight multimodal vision models and top-ranking multilingual embedding models at zero API cost.",
      description: "While text generation garners immense attention, modern enterprise AI pipelines depend heavily on specialized open models for multimodal vision understanding, document OCR, and dense vector embeddings. Running these workloads locally or on private cloud instances eliminates unpredictable per-token API costs and prevents sensitive document leakage.\n\nFrontier open multimodal models like `Qwen2.5-VL` and `Llama-3.2-Vision` deliver commercial-grade document parsing, screenshot-to-code generation, and spatial bounding box detection. Simultaneously, dense embedding models from the Massive Text Embedding Benchmark (MTEB)—such as `BAAI/bge-m3` and `nomic-embed-text`—outperform proprietary cloud embeddings in multilingual retrieval and code search. Mastering the execution of these specialized architectures locally and via Hugging Face pipelines completes the foundation of open-source AI infrastructure.",
      playbook: {
        setup: "Install multimodal and embedding dependencies: `pip install sentence-transformers pillow torchvision transformers accelerate` and pull local embedding models via Ollama: `ollama pull nomic-embed-text`.",
        execute: "Run a local embedding pipeline in Python using `sentence-transformers`: embed 100 enterprise text snippets and measure cosine similarity. Run a local multimodal vision test using Ollama: `ollama run qwen2.5-vl:7b` passing an image filepath and prompt: 'Transcribe this invoice table into markdown'.",
        verify: "Confirm embeddings output normalized vectors of expected dimension (e.g., 768 or 1024 dims). Verify `Qwen2.5-VL` accurately transcribes nested table headers and numerical values from a complex financial document screenshot."
      },
      tools: [
        {
          name: "Qwen2.5-VL",
          type: "Open Source Model",
          url: "https://huggingface.co/Qwen/Qwen2.5-VL-7B-Instruct",
          description: "Top-ranking open-weight vision-language model capable of parsing complex documents, reading charts, and generating structured JSON from images.",
          bestFor: "Document OCR, UI screenshot analysis & multimodal agent vision"
        },
        {
          name: "BGE-M3 Embeddings",
          type: "Open Source Model",
          url: "https://huggingface.co/BAAI/bge-m3",
          description: "Versatile multilingual embedding model supporting dense retrieval, sparse BM25 lexical matching, and multi-vector ColBERT reranking.",
          bestFor: "Production hybrid search, multilingual RAG & code embeddings"
        },
        {
          name: "Nomic Embed",
          type: "Open Source Model",
          url: "https://huggingface.co/nomic-ai/nomic-embed-text-v1.5",
          description: "High-performance open embedding model featuring an 8,192 token context window with dynamic Matryoshka dimension scaling.",
          bestFor: "Local RAG pipelines via Ollama & long-context document retrieval"
        }
      ],
      callouts: {
        mistake: "Using standard text generation models for document OCR tasks instead of dedicated vision-language models (VLMs), resulting in severe hallucination of tabular data.",
        proTip: "Use Matryoshka Representation Learning (MRL) supported by `nomic-embed-text-v1.5` to truncate embedding dimensions from 768 down to 256 or 128 dims, cutting vector storage costs by 66% with under 1.5% loss in retrieval precision.",
        mistakes: [
          "Feeding high-resolution multi-page PDF images into VLMs without resizing, causing VRAM exhaustion during image patch tokenization.",
          "Using asymmetric embedding queries without appropriate task prefixes (e.g. omitting 'search_query:' or 'search_document:' required by models like E5 and Nomic).",
          "Attempting to run multi-vector ColBERT token embeddings without dedicated vector indices, leading to massive memory bloat."
        ],
        proTips: [
          "Qwen2.5-VL supports native dynamic resolution, meaning it automatically segments large images into variable token grids without forcing fixed square crops.",
          "Run `bge-reranker-large` locally as a second-stage cross-encoder to boost top-5 RAG retrieval precision by up to 25% over pure vector search.",
          "Ollama exposes a native embeddings endpoint at `http://localhost:11434/api/embeddings` that directly integrates with LangChain and LlamaIndex."
        ]
      },
      promptLab: {
        title: "Multimodal Vision Document Parsing & Dense Embedding Pipeline",
        description: "Author an automated Python script performing local multimodal document extraction with Qwen2.5-VL and indexing chunks using Sentence-Transformers.",
        variables: [
          {
            name: "Vision Model",
            label: "Multimodal Model",
            options: ["Qwen/Qwen2.5-VL-7B-Instruct", "meta-llama/Llama-3.2-11B-Vision-Instruct"],
            default: "Qwen/Qwen2.5-VL-7B-Instruct"
          },
          {
            name: "Embedding Model",
            label: "Embedding Backbone",
            options: ["BAAI/bge-m3", "nomic-ai/nomic-embed-text-v1.5"],
            default: "BAAI/bge-m3"
          },
          {
            name: "Target Document Type",
            label: "Document Schema",
            options: ["Financial Invoice / Balance Sheet", "Technical Architecture Diagram", "Medical Lab Report"],
            default: "Financial Invoice / Balance Sheet"
          }
        ],
        template: `# Multimodal OCR & Dense Vector Embedding Pipeline
from sentence_transformers import SentenceTransformer
import numpy as np

VISION_MODEL = "[Vision Model]"
EMBEDDING_MODEL = "[Embedding Model]"
DOC_TYPE = "[Target Document Type]"

print(f"Loading dense embedding model: {EMBEDDING_MODEL}...")
embedder = SentenceTransformer(EMBEDDING_MODEL)

# Sample parsed document chunks extracted via Vision Model
parsed_chunks = [
    "Invoice #INV-2026-9041 issued to Enterprise Corp. Total amount: USD 14,850.00 due on Nov 15, 2026.",
    "Line Item 1: Cloud GPU Cluster Compute (8x H100 SXM5) - 160 hours at USD 3.85/hr totaling USD 4,928.00.",
    "Line Item 2: Dedicated Inference Endpoint Support - 30 days enterprise SLA totaling USD 9,922.00."
]

print("Generating normalized dense embeddings...")
embeddings = embedder.encode(parsed_chunks, normalize_embeddings=True)

print(f"Embedding Shape: {embeddings.shape} (Dimensions: {embeddings.shape[1]})")

# Execute similarity search with test query
query = "What is the total invoice cost for the H100 GPU compute?"
query_embedding = embedder.encode([query], normalize_embeddings=True)

similarities = np.dot(embeddings, query_embedding.T).flatten()
best_match_idx = int(np.argmax(similarities))

print("\\n=== Semantic Retrieval Result ===")
print(f"Query: '{query}'")
print(f"Best Matched Chunk: {parsed_chunks[best_match_idx]}")
print(f"Cosine Similarity Score: {similarities[best_match_idx]:.4f}")`,
        expectedOutput: `Loading dense embedding model: BAAI/bge-m3...
Generating normalized dense embeddings...
Embedding Shape: (3, 1024) (Dimensions: 1024)

=== Semantic Retrieval Result ===
Query: 'What is the total invoice cost for the H100 GPU compute?'
Best Matched Chunk: Line Item 1: Cloud GPU Cluster Compute (8x H100 SXM5) - 160 hours at USD 3.85/hr totaling USD 4,928.00.
Cosine Similarity Score: 0.8842`
      },
      conceptGuide: {
        title: "Vision-Language Patch Tokenization & Dense Vector Retrieval",
        overview: "Vision-Language Models (VLMs) process visual data by partitioning images into localized 2D patches, projecting each patch into an embedding space via a Vision Transformer (ViT) encoder, and concatenating visual tokens directly into the LLM's text context window. In contrast, embedding models map entire text sequences into a continuous dense geometric space where semantic similarity corresponds to cosine distance. Open models in both domains have reached parity with proprietary APIs while running entirely within secure corporate perimeters.",
        keyPoints: [
          "**Visual Tokenization:** High-resolution images are decomposed into patch grids and projected as token sequences alongside text prompts.",
          "**MTEB Benchmark Leadership:** Open models like BGE-M3 and Nomic frequently outperform proprietary embeddings on dense and hybrid retrieval tasks.",
          "**Zero Egress Privacy:** Processing financial, healthcare, and proprietary documents with local VLMs ensures zero third-party data transmission."
        ]
      },
      learning: {
        resources: [
          {
            title: "Qwen2.5-VL Official Technical Report & Architecture",
            url: "https://huggingface.co/Qwen/Qwen2.5-VL-7B-Instruct",
            type: "Model Documentation"
          },
          {
            title: "Massive Text Embedding Benchmark (MTEB) Leaderboard",
            url: "https://huggingface.co/spaces/mteb/leaderboard",
            type: "Benchmark Platform"
          },
          {
            title: "Sentence-Transformers Official User Guide",
            url: "https://sbert.net",
            type: "Official Docs"
          },
          {
            title: "Nomic Embed v1.5 Matryoshka Embeddings Paper",
            url: "https://huggingface.co/blog/nomic-embed-v1-5",
            type: "Hugging Face Blog"
          }
        ]
      }
    },

    // Node 7
    {
      id: "step-7",
      stepNumber: 7,
      phaseId: "phase-3",
      title: "Hugging Face datasets Library & Synthetic Data Curation",
      timeEstimate: "2.5 hrs",
      difficulty: "Intermediate",
      summary: "Stream, filter, and format instruction-tuning datasets in Parquet and JSONL formats without running out of RAM.",
      description: "Model fine-tuning success is governed by data quality rather than raw volume. The Hugging Face `datasets` library provides a high-performance Apache Arrow-backed ecosystem engineered to manipulate multi-gigabyte text datasets with instant memory-mapped access and zero memory leaks. By streaming datasets (`streaming=True`), developers can process terabyte-scale corpuses on a standard laptop without exhausting RAM.\n\nModern fine-tuning workflows rely heavily on curated synthetic instruction data. Tools like Argilla and Distilabel enable engineers to use frontier reasoning models (such as Claude 3.7 or DeepSeek-R1) to generate instruction-response pairs, filter out low-quality outputs through automated LLM-as-a-judge scoring, and format the resulting data into standardized chat schemas (e.g. ShareGPT or OpenAI formats). Structuring and deduplicating datasets is the mandatory precursor to fine-tuning domain-specific models.",
      playbook: {
        setup: "Install Hugging Face datasets and data engineering dependencies: `pip install datasets pyarrow argilla distilabel`.",
        execute: "Write a data preparation script using `datasets.load_dataset()` with streaming enabled. Filter samples by length, remove duplicate entries with MinHash LSH, and apply a chat template formatting function using `.map()`. Export the cleaned dataset to Apache Parquet format.",
        verify: "Confirm the exported Parquet file loads instantly in Python without exceeding 100 MB of RAM usage. Verify all training samples contain valid `messages` lists with alternating `user` and `assistant` roles."
      },
      tools: [
        {
          name: "Hugging Face Datasets",
          type: "Open Source Library",
          url: "https://github.com/huggingface/datasets",
          description: "High-throughput dataset processing library built on Apache Arrow for fast streaming, memory mapping, and seamless Hub integration.",
          bestFor: "Dataset loading, Arrow caching, streaming & Hub publishing"
        },
        {
          name: "Argilla",
          type: "Open Source Platform",
          url: "https://github.com/argilla-io/argilla",
          description: "Data curation and human feedback platform for validating, annotating, and filtering synthetic instruction datasets.",
          bestFor: "RLHF, DPO dataset annotation & team curation"
        },
        {
          name: "Distilabel",
          type: "Open Source Framework",
          url: "https://github.com/argilla-io/distilabel",
          description: "Framework by Argilla for generating synthetic datasets and executing multi-step LLM-as-a-judge evaluation pipelines.",
          bestFor: "Synthetic data generation, critique loops & quality filtering"
        }
      ],
      callouts: {
        mistake: "Loading massive multi-gigabyte datasets into memory using standard Python lists, triggering out-of-memory kernel kills instead of leveraging Arrow memory mapping.",
        proTip: "Always export fine-tuning datasets to Apache Parquet format (`.to_parquet('train.parquet')`) instead of raw JSONL to achieve 5x faster read throughput and 70% smaller file sizes.",
        mistakes: [
          "Failing to deduplicate instruction datasets, causing fine-tuned models to memorize exact phrases and suffer severe generalization drop.",
          "Including synthetically generated conversational filler ('As an AI language model...') in training responses.",
          "Splitting train/test sets randomly across grouped multi-turn conversations, leaking dialogue context from training into validation splits."
        ],
        proTips: [
          "Use `dataset.map(..., batched=True, num_proc=8)` to parallelize tokenization and text preprocessing across all available CPU cores.",
          "Use the `streaming=True` parameter in `load_dataset()` to inspect samples from terabyte-scale datasets (like FineWeb) without downloading them.",
          "Validate schema adherence using Pydantic models before pushing training datasets to the Hugging Face Hub."
        ]
      },
      promptLab: {
        title: "Synthetic Instruction Dataset Curation & Formatting Pipeline",
        description: "Author a Python data engineering pipeline using Hugging Face datasets that validates, formats, and exports instruction-response pairs into Apache Parquet format.",
        variables: [
          {
            name: "Domain Topic",
            label: "Domain Focus",
            options: ["Python Async System Engineering", "Medical Clinical Note Summarization", "Financial SEC Filing Analysis"],
            default: "Python Async System Engineering"
          },
          {
            name: "Target Format",
            label: "Chat Schema",
            options: ["OpenAI Messages Schema ({role, content})", "ShareGPT Schema ({from, value})"],
            default: "OpenAI Messages Schema ({role, content})"
          },
          {
            name: "Quality Filter",
            label: "Min Token Threshold",
            options: ["Min 50 tokens, Max 2048 tokens", "Min 100 tokens, Max 4096 tokens"],
            default: "Min 50 tokens, Max 2048 tokens"
          }
        ],
        template: `# Hugging Face Datasets Curation & Parquet Export Pipeline
from datasets import Dataset
import pyarrow.parquet as pq
import json

DOMAIN = "[Domain Topic]"
SCHEMA = "[Target Format]"
FILTER_RULE = "[Quality Filter]"

# Raw instruction pairs (can be loaded via load_dataset or generated synthetically)
raw_samples = [
    {
        "instruction": "How do you implement an async semaphore in Python to limit concurrent HTTP requests?",
        "response": "Use asyncio.Semaphore(value) within an async context manager (async with semaphore: ...). This ensures maximum concurrent requests do not exceed the threshold while preventing connection pool exhaustion."
    },
    {
        "instruction": "What is the difference between asyncio.gather and asyncio.TaskGroup?",
        "response": "asyncio.TaskGroup (introduced in Python 3.11) provides structured concurrency: if any child task fails, all other tasks in the group are immediately cancelled. asyncio.gather does not automatically cancel sibling tasks on failure unless explicit error handling is written."
    }
]

# Transform into standardized chat messages schema
def format_chat_schema(example):
    return {
        "messages": [
            {"role": "system", "content": f"You are a specialized expert in {DOMAIN}."},
            {"role": "user", "content": example["instruction"]},
            {"role": "assistant", "content": example["response"]}
        ]
    }

print(f"Creating Hugging Face Dataset for {DOMAIN}...")
ds = Dataset.from_list(raw_samples)
ds_formatted = ds.map(format_chat_schema, remove_columns=["instruction", "response"])

# Save to Apache Parquet format
output_path = "curated_instructions.parquet"
ds_formatted.to_parquet(output_path)

print(f"Successfully exported {len(ds_formatted)} records to {output_path}!")
print("Sample Record Verification:")
print(json.dumps(ds_formatted[0], indent=2))`,
        expectedOutput: `Creating Hugging Face Dataset for Python Async System Engineering...
Successfully exported 2 records to curated_instructions.parquet!
Sample Record Verification:
{
  "messages": [
    {
      "role": "system",
      "content": "You are a specialized expert in Python Async System Engineering."
    },
    {
      "role": "user",
      "content": "How do you implement an async semaphore in Python to limit concurrent HTTP requests?"
    },
    {
      "role": "assistant",
      "content": "Use asyncio.Semaphore(value) within an async context manager (async with semaphore: ...). This ensures maximum concurrent requests do not exceed the threshold while preventing connection pool exhaustion."
    }
  ]
}`
      },
      conceptGuide: {
        title: "Apache Arrow Backing, Streaming Datasets & Data Quality",
        overview: "The Hugging Face `datasets` library achieves zero-copy memory mapping by relying on Apache Arrow's columnar memory format. Traditional Python data structures duplicate strings and objects in heap memory, causing massive memory overhead. Arrow organizes records in flat, contiguous memory buffers that can be memory-mapped directly from disk into CPU cache lines. Furthermore, filtering for high-density, multi-turn reasoning examples (rather than low-quality internet scraping) is proven to be the single most impactful factor in post-training performance.",
        keyPoints: [
          "**Apache Arrow Efficiency:** Columnar memory layout eliminates Python object deserialization overhead and prevents OOM crashes.",
          "**Dataset Streaming:** Inspect, sample, and transform multi-terabyte datasets over the network with `streaming=True` without downloading entire files.",
          "**Synthetic Data Filtering:** Use critique agents and automated length/complexity filters to remove noisy, unhelpful, or repetitive synthetic completions."
        ]
      },
      learning: {
        resources: [
          {
            title: "Hugging Face Datasets Official Documentation",
            url: "https://huggingface.co/docs/datasets/index",
            type: "Official Docs"
          },
          {
            title: "Hugging Face Dataset Streaming Guide",
            url: "https://huggingface.co/docs/datasets/stream",
            type: "Guide"
          },
          {
            title: "Argilla Official Documentation & Data Annotation",
            url: "https://docs.argilla.io",
            type: "Official Docs"
          },
          {
            title: "Distilabel: Synthetic Data Generation for AI Engineers",
            url: "https://distilabel.argilla.io",
            type: "GitHub Repository"
          }
        ]
      }
    },

    // Node 8
    {
      id: "step-8",
      stepNumber: 8,
      phaseId: "phase-3",
      title: "Parameter-Efficient Fine-Tuning (PEFT, LoRA & QLoRA)",
      timeEstimate: "3 hrs",
      difficulty: "Advanced",
      summary: "Fine-tune 7B–32B open models on a single GPU using 4-bit QLoRA adapters and Supervised Fine-Tuning (SFT).",
      description: "Full-parameter fine-tuning of multi-billion parameter models requires hundreds of gigabytes of distributed GPU memory to store model parameters, optimizer states, and backpropagation gradients. Low-Rank Adaptation (LoRA) circumvents this constraint by freezing the base model weights and injecting small, trainable low-rank decomposition rank matrices (A and B) into the attention and feed-forward layers.\n\nQuantized Low-Rank Adaptation (QLoRA) elevates this paradigm further by quantizing the frozen base model to 4-bit NormalFloat (NF4) while maintaining 16-bit brain float adapters. Using high-performance fine-tuning libraries like `Unsloth` and Hugging Face `TRL` (`SFTTrainer`), developers can fine-tune an 8B model in under an hour on a single consumer GPU (such as an RTX 4090 with 24 GB VRAM) or an affordable cloud instance. Mastering rank selection (`r`), alpha scaling (`lora_alpha`), target modules, and learning rate scheduling allows engineers to tailor open models to proprietary corporate knowledge with minimal compute expense.",
      playbook: {
        setup: "Install Hugging Face fine-tuning and PEFT libraries: `pip install trl peft bitsandbytes datasets accelerate transformers` or use Unsloth: `pip install unsloth` for 2x faster execution and 60% lower VRAM.",
        execute: "Configure a `LoraConfig` targeting attention modules (`['q_proj', 'k_proj', 'v_proj', 'o_proj']`) with rank `r=16` and `lora_alpha=32`. Initialize `SFTTrainer` from TRL with your formatted instruction dataset, set `max_seq_length=2048`, and execute training for 3 epochs with a cosine learning rate scheduler.",
        verify: "Monitor training loss: ensure loss converges steadily from ~2.4 down to ~0.8 without abrupt gradient spikes. Verify trained LoRA adapter weights (`adapter_model.safetensors`) save cleanly with a total filesize under 150 MB."
      },
      tools: [
        {
          name: "Unsloth",
          type: "Open Source Engine",
          url: "https://github.com/unslothai/unsloth",
          description: "Ultra-fast fine-tuning library providing custom CUDA kernels for Llama, Qwen, and Mistral, achieving 2x faster training with 70% less VRAM.",
          bestFor: "Fast single-GPU QLoRA fine-tuning & local training"
        },
        {
          name: "Hugging Face TRL (Transformer Reinforcement Learning)",
          type: "Open Source Library",
          url: "https://github.com/huggingface/trl",
          description: "Comprehensive library for post-training LLMs featuring SFTTrainer, DPOTrainer, and GRPO reinforcement learning trainers.",
          bestFor: "Supervised fine-tuning (SFT) & direct preference optimization"
        },
        {
          name: "Hugging Face PEFT",
          type: "Open Source Library",
          url: "https://github.com/huggingface/peft",
          description: "Parameter-Efficient Fine-Tuning library providing modular LoRA, QLoRA, Prefix Tuning, and AdaLoRA adapter abstractions.",
          bestFor: "LoRA configuration, adapter serialization & PyTorch hooks"
        }
      ],
      callouts: {
        mistake: "Targeting only `q_proj` and `v_proj` in LoRA configurations instead of all linear projection layers (`q, k, v, o, gate, up, down_proj`), significantly diminishing the model's capacity to absorb complex domain patterns.",
        proTip: "Set `lora_alpha` to exactly double your rank (`r=16, lora_alpha=32` or `r=32, lora_alpha=64`) to maintain stable gradient scaling throughout training.",
        mistakes: [
          "Setting learning rates too high for 4-bit QLoRA (e.g. `1e-3`), causing catastrophic forgetting where the model loses its basic conversational ability.",
          "Failing to enable gradient checkpointing (`gradient_checkpointing=True`), leading to avoidable VRAM out-of-memory errors on modest GPUs.",
          "Training on non-padded batches without masking user prompt tokens (`DataCollatorForCompletionOnlyLM`), inadvertently training the model to predict user questions rather than assistant answers."
        ],
        proTips: [
          "Use Unsloth to achieve 2x–5x training speedups with zero loss in mathematical precision through handwritten OpenAI Triton kernels.",
          "Always train using `torch.bfloat16` instead of `float16` to prevent numerical underflow and vanishing gradient issues on Ampere and Ada Lovelace GPUs.",
          "Save checkpoints every 100 steps and evaluate on an isolated validation split to catch overfitting early."
        ]
      },
      promptLab: {
        title: "Production QLoRA Supervised Fine-Tuning (SFT) Trainer Script",
        description: "Author a complete Python script using Hugging Face TRL SFTTrainer, BitsAndBytes 4-bit quantization, and PEFT LoraConfig for single-GPU fine-tuning.",
        variables: [
          {
            name: "Base Model",
            label: "Foundation Weights",
            options: ["Qwen/Qwen2.5-7B-Instruct", "meta-llama/Llama-3.1-8B-Instruct", "mistralai/Mistral-7B-Instruct-v0.3"],
            default: "Qwen/Qwen2.5-7B-Instruct"
          },
          {
            name: "LoRA Rank",
            label: "Adapter Capacity (r)",
            options: ["r=16, alpha=32 (Standard)", "r=32, alpha=64 (Complex Tasks)", "r=8, alpha=16 (Ultra-Lightweight)"],
            default: "r=16, alpha=32 (Standard)"
          },
          {
            name: "Learning Rate",
            label: "SFT Optimizer Rate",
            options: ["2e-4 with Cosine Decay", "1e-4 with Linear Warmup", "5e-5 (Conservative)"],
            default: "2e-4 with Cosine Decay"
          }
        ],
        template: `# Production QLoRA SFTTrainer Script
import torch
from datasets import load_dataset
from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    BitsAndBytesConfig,
    TrainingArguments
)
from peft import LoraConfig, get_peft_model, prepare_model_for_kbit_training
from trl import SFTTrainer

MODEL_ID = "[Base Model]"
RANK_CONFIG = "[LoRA Rank]"
LR = 2e-4

# 1. 4-bit Quantization Configuration
bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.bfloat16,
    bnb_4bit_use_double_quant=True
)

print(f"Loading base model: {MODEL_ID}...")
model = AutoModelForCausalLM.from_pretrained(
    MODEL_ID,
    quantization_config=bnb_config,
    device_map="auto",
    torch_dtype=torch.bfloat16
)
model = prepare_model_for_kbit_training(model)

tokenizer = AutoTokenizer.from_pretrained(MODEL_ID)
tokenizer.pad_token = tokenizer.eos_token

# 2. Configure LoRA Parameters
peft_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["q_proj", "k_proj", "v_proj", "o_proj", "gate_proj", "up_proj", "down_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM"
)

# 3. Training Arguments
training_args = TrainingArguments(
    output_dir="./lora-results",
    per_device_train_batch_size=2,
    gradient_accumulation_steps=4,
    learning_rate=LR,
    lr_scheduler_type="cosine",
    warmup_ratio=0.05,
    num_train_epochs=3,
    logging_steps=10,
    fp16=False,
    bf16=True,
    optim="paged_adamw_8bit"
)

print("Ready for SFTTrainer execution.")`,
        expectedOutput: `Loading base model: Qwen/Qwen2.5-7B-Instruct...
Model loaded in 4-bit NormalFloat precision.
Trainable Parameters: 20,447,232 || Total Parameters: 7,635,892,224 || Trainable: 0.2678%
Optimizer: paged_adamw_8bit configured with gradient accumulation.
Ready for SFTTrainer execution.`
      },
      conceptGuide: {
        title: "LoRA Mathematics, Quantized Adapters & Optimizer Offload",
        overview: "In standard fine-tuning, the parameter update matrix ΔW has the same dimensions as the original weight matrix W (e.g. d x d). Low-Rank Adaptation factorizes ΔW into two low-rank matrices: B (d x r) and A (r x d), where the rank r is drastically smaller than d (e.g. r=16 while d=4096). This reduces trainable parameters by over 99%. QLoRA couples this with 4-bit NormalFloat (NF4) weights and Paged Optimizers, which page optimizer memory spikes automatically to CPU RAM whenever GPU VRAM reaches capacity.",
        keyPoints: [
          "**Low-Rank Decomposition:** Factorizing weight updates ΔW into B x A slashes trainable parameters from 8 billion to ~20 million.",
          "**NF4 Quantization:** NormalFloat4 maps normally distributed weights into 4-bit bins with minimal information loss.",
          "**Paged Optimizers:** Paged AdamW offloads optimizer state spikes to system RAM during gradient updates, eliminating sudden OOM crashes."
        ]
      },
      learning: {
        resources: [
          {
            title: "Hugging Face PEFT Documentation & Guides",
            url: "https://huggingface.co/docs/peft/index",
            type: "Official Docs"
          },
          {
            title: "Hugging Face TRL (SFTTrainer) Documentation",
            url: "https://huggingface.co/docs/trl/sft_trainer",
            type: "Official Docs"
          },
          {
            title: "Unsloth GitHub & Acceleration Benchmarks",
            url: "https://github.com/unslothai/unsloth",
            type: "GitHub Repository"
          },
          {
            title: "QLoRA: Efficient Finetuning of Quantized LLMs Paper",
            url: "https://arxiv.org/abs/2305.14314",
            type: "Research Paper"
          }
        ]
      }
    },

    // Node 9
    {
      id: "step-9",
      stepNumber: 9,
      phaseId: "phase-3",
      title: "Model Alignment (DPO/GRPO), Adapter Merging & GGUF Export",
      timeEstimate: "2.5 hrs",
      difficulty: "Advanced",
      summary: "Merge LoRA adapters back into base weights, align models with DPO/GRPO, combine multi-model capabilities with MergeKit, and export quantized GGUFs.",
      description: "Once a LoRA adapter is trained, deploying it in production as a detached adapter adds execution latency. To maximize inference throughput, developers must merge the adapter weights permanently back into the base model tensors (`model.merge_and_unload()`). Furthermore, modern alignment techniques like Direct Preference Optimization (DPO) and Group Relative Policy Optimization (GRPO) allow teams to align models to human preferences or reasoning targets directly without maintaining complex reward models.\n\nBeyond single-model training, model merging has emerged as a groundbreaking open-source capability. Using `MergeKit`, engineers can combine multiple specialized models (e.g. blending a coding model with a general reasoning model) using sophisticated merging algorithms like SLERP (Spherical Linear Interpolation) and DARE (Drop And REscale) without retraining. The final pipeline step involves converting the merged model into GGUF format via `llama.cpp` scripts and uploading the quantized artifacts directly to Hugging Face.",
      playbook: {
        setup: "Install MergeKit and conversion tools: `pip install mergekit` and clone llama.cpp: `git clone https://github.com/ggerganov/llama.cpp.git && cd llama.cpp && make`.",
        execute: "Merge your trained LoRA adapter back into base FP16 weights using PEFT: `merged_model = model.merge_and_unload(); merged_model.save_pretrained('./merged-model')`. Convert the merged directory to GGUF: `python llama.cpp/convert_hf_to_gguf.py ./merged-model --outtype f16`. Quantize to 4-bit: `./llama.cpp/llama-quantize ./merged-model.gguf ./model-q4_k_m.gguf Q4_K_M`.",
        verify: "Run `./llama.cpp/llama-cli -m ./model-q4_k_m.gguf -p 'Test prompt'` and verify the quantized GGUF responds with high fidelity, zero runtime errors, and runs cleanly locally."
      },
      tools: [
        {
          name: "TRL DPOTrainer",
          type: "Open Source Tool",
          url: "https://huggingface.co/docs/trl/dpo_trainer",
          description: "Direct Preference Optimization trainer aligning models directly on pairwise chosen vs. rejected datasets without a separate reward model.",
          bestFor: "Preference alignment, anti-hallucination & tone tuning"
        },
        {
          name: "MergeKit",
          type: "Open Source Library",
          url: "https://github.com/arcee-ai/mergekit",
          description: "Comprehensive open toolkit for merging pretrained language models using SLERP, TIES, DARE, and Passthrough architectures.",
          bestFor: "Model blending, cross-architecture merges & zero-cost improvements"
        },
        {
          name: "llama.cpp Quantize Tools",
          type: "Open Source Utility",
          url: "https://github.com/ggerganov/llama.cpp",
          description: "Conversion and quantization scripts compiling Hugging Face Safetensors checkpoints into optimized GGUF binaries.",
          bestFor: "GGUF conversion, quantization & local packaging"
        }
      ],
      callouts: {
        mistake: "Attempting to merge a 4-bit QLoRA adapter directly into quantized 4-bit base weights; merging MUST be executed in FP16 or BF16 to prevent catastrophic precision loss.",
        proTip: "Use the DARE (Drop And REscale) method in MergeKit to prune 90% of non-essential weight delta changes before merging, preventing parameter interference when blending models.",
        mistakes: [
          "Exporting merged GGUF models without including the tokenizer configuration files (`tokenizer.json` and `tokenizer_config.json`), rendering the GGUF unparseable.",
          "Overfitting during DPO alignment by training with too large a beta parameter (`beta > 0.5`), degrading output diversity and causing repetitive responses.",
          "Forgetting to push your model's README and license file alongside the GGUF to Hugging Face, causing it to be hidden from search discovery."
        ],
        proTips: [
          "Always test your merged model across standard MMLU benchmarks to verify that model merging did not introduce catastrophic interference.",
          "The `huggingface-cli upload` command can resume interrupted multi-gigabyte GGUF uploads automatically without restarting from byte zero.",
          "Set `beta=0.1` as the default starting hyperparameter when configuring `DPOTrainer` for stable preference learning."
        ]
      },
      promptLab: {
        title: "LoRA Adapter Merge & llama.cpp GGUF Export Script",
        description: "Author a Python and Bash automation workflow that unloads LoRA adapters into base weights, converts the model to GGUF, and quantizes it to Q4_K_M.",
        variables: [
          {
            name: "Base Checkpoint",
            label: "Base Model",
            options: ["Qwen/Qwen2.5-7B-Instruct", "meta-llama/Llama-3.1-8B-Instruct"],
            default: "Qwen/Qwen2.5-7B-Instruct"
          },
          {
            name: "Quantization Target",
            label: "Target GGUF Tier",
            options: ["Q4_K_M (Recommended Balanced)", "Q5_K_M (Higher Precision)", "Q8_0 (Near Lossless)"],
            default: "Q4_K_M (Recommended Balanced)"
          },
          {
            name: "Target HF Repo",
            label: "Hugging Face Export Repo",
            options: ["my-org/qwen-7b-custom-gguf", "my-org/llama-8b-custom-gguf"],
            default: "my-org/qwen-7b-custom-gguf"
          }
        ],
        template: `# Adapter Merge and GGUF Conversion Pipeline
import torch
from peft import PeftModel
from transformers import AutoModelForCausalLM, AutoTokenizer

BASE_MODEL = "[Base Checkpoint]"
LORA_PATH = "./lora-results"
OUTPUT_MERGED = "./merged-model-fp16"

print(f"Loading base model: {BASE_MODEL} in float16...")
base_model = AutoModelForCausalLM.from_pretrained(
    BASE_MODEL,
    torch_dtype=torch.float16,
    device_map="cpu", # Merge on CPU or large VRAM
    trust_remote_code=True
)

print(f"Loading LoRA adapter from {LORA_PATH}...")
model = PeftModel.from_pretrained(base_model, LORA_PATH)

print("Merging LoRA adapter weights into base model tensors...")
merged_model = model.merge_and_unload()

print(f"Saving merged FP16 model to {OUTPUT_MERGED}...")
merged_model.save_pretrained(OUTPUT_MERGED)
tokenizer = AutoTokenizer.from_pretrained(BASE_MODEL)
tokenizer.save_pretrained(OUTPUT_MERGED)
print("Merge complete! Ready for GGUF compilation.")

# Shell commands to convert and quantize via llama.cpp
# python llama.cpp/convert_hf_to_gguf.py ./merged-model-fp16 --outfile ./model.gguf
# ./llama.cpp/llama-quantize ./model.gguf ./model-q4_k_m.gguf Q4_K_M
# huggingface-cli upload [Target HF Repo] ./model-q4_k_m.gguf`,
        expectedOutput: `Loading base model: Qwen/Qwen2.5-7B-Instruct in float16...
Loading LoRA adapter from ./lora-results...
Merging LoRA adapter weights into base model tensors...
Saving merged FP16 model to ./merged-model-fp16...
Export completed successfully.
GGUF artifact: model-q4_k_m.gguf (4.68 GB) ready for upload to [Target HF Repo].`
      },
      conceptGuide: {
        title: "Weight Unloading, Direct Preference Optimization & Model Merging",
        overview: "Deploying models with detached LoRA adapters introduces runtime matrix addition overhead during forward passes. By executing `merge_and_unload()`, the adapter delta weights ΔW are mathematically folded directly into the base weights W = W_0 + ΔW, producing a standard standalone model. DPO eliminates the instability of classical RLHF (PPO) by directly optimizing policy weights on pairwise preference data. Finally, model merging combines weights from independently fine-tuned models using geometric vector projections like SLERP.",
        keyPoints: [
          "**Zero-Overhead Inference:** Merging LoRA adapters permanently into base weights eliminates dual-matrix overhead during production inference.",
          "**Reward-Free Alignment:** Direct Preference Optimization (DPO) achieves human alignment directly from chosen/rejected pairs without training a reward model.",
          "**MergeKit Innovations:** SLERP and DARE allow developers to fuse coding and reasoning capabilities from multiple models without spending a dollar on compute."
        ]
      },
      learning: {
        resources: [
          {
            title: "Hugging Face TRL DPO Trainer Guide",
            url: "https://huggingface.co/docs/trl/dpo_trainer",
            type: "Official Docs"
          },
          {
            title: "MergeKit: Open Source Model Merging Toolkit",
            url: "https://github.com/arcee-ai/mergekit",
            type: "GitHub Repository"
          },
          {
            title: "llama.cpp GGUF Conversion and Quantization Guide",
            url: "https://github.com/ggerganov/llama.cpp",
            type: "Official Docs"
          },
          {
            title: "Direct Preference Optimization (DPO) Original Paper",
            url: "https://arxiv.org/abs/2305.18290",
            type: "Research Paper"
          }
        ]
      }
    },

    // Node 10
    {
      id: "step-10",
      stepNumber: 10,
      phaseId: "phase-4",
      title: "Building Interactive AI Demos with Gradio & HF Spaces",
      timeEstimate: "2 hrs",
      difficulty: "Beginner",
      summary: "Ship shareable web interfaces for your models in minutes using ZeroGPU Spaces with automatic REST APIs.",
      description: "Building an extraordinary AI model is meaningless if stakeholders, product managers, and beta users cannot interact with it. Gradio has established itself as the standard Python UI framework for machine learning demos, enabling developers to wrap complex models, streaming audio, and vision pipelines into beautiful web interfaces in fewer than 30 lines of pure Python.\n\nDeploying these demos onto Hugging Face Spaces provides instant global hosting, automated SSL certificates, and embeddable iframes. Furthermore, Spaces offers 'ZeroGPU': a dynamic hardware abstraction that provisions cutting-edge Nvidia A100 or H100 GPUs on-demand specifically during inference calls, allowing developers to host high-compute AI demos for free without incurring full-time GPU hosting costs. Gradio apps also automatically generate a `/api/predict` REST endpoint, turning your interactive demo into a usable backend API.",
      playbook: {
        setup: "Install Gradio and Spaces utilities: `pip install gradio huggingface_hub spaces`.",
        execute: "Create an `app.py` script featuring `gr.ChatInterface` with token streaming enabled. Add dynamic temperature and top-p sliders in an accordion. Add the `@spaces.GPU` decorator to your inference function to activate on-demand ZeroGPU acceleration on Hugging Face Spaces.",
        verify: "Run `python app.py` locally to verify the web UI launches at `http://localhost:7860`. Push to a Hugging Face Space (`git push space main`) and confirm the demo loads globally with ZeroGPU allocation active."
      },
      tools: [
        {
          name: "Gradio",
          type: "Open Source Framework",
          url: "https://www.gradio.app",
          description: "Leading Python web UI library for building interactive machine learning web applications with native chat and streaming interfaces.",
          bestFor: "Model web UIs, interactive demos & rapid prototyping"
        },
        {
          name: "Hugging Face Spaces",
          type: "Cloud Hosting",
          url: "https://huggingface.co/spaces",
          description: "Managed hosting platform for machine learning applications supporting Gradio, Streamlit, Docker, and ZeroGPU cloud compute.",
          bestFor: "Demo hosting, team sharing & public portfolio showcases"
        },
        {
          name: "Streamlit",
          type: "Open Source Framework",
          url: "https://streamlit.io",
          description: "Alternative Python framework popular for data analytics dashboards, ML visualizations, and enterprise internal tools.",
          bestFor: "Data-heavy dashboards & internal business applications"
        }
      ],
      callouts: {
        mistake: "Blocking the main Gradio event loop with synchronous network calls or model downloads inside the inference function, freezing the UI for all concurrent users.",
        proTip: "Use `gr.ChatInterface` instead of manually configuring Chatbot and Textbox components to get built-in retry, undo, clear, and streaming functionality for free.",
        mistakes: [
          "Hardcoding API keys or Hugging Face tokens directly inside `app.py` instead of accessing them via `os.environ.get()` and Spaces Secrets.",
          "Omitting the `@spaces.GPU` decorator on compute-heavy functions when deploying to ZeroGPU Spaces, causing the app to fail on CPU fallbacks.",
          "Forgetting to include a `requirements.txt` file in your Hugging Face Space repository, leading to immediate container build failures."
        ],
        proTips: [
          "Gradio automatically exposes a public `/gradio_api` endpoint; client applications can query your demo programmatically using the `@gradio/client` npm package.",
          "Add `concurrency_limit=10` to your generation function to prevent server crashes during sudden viral traffic spikes.",
          "Enable dark mode by default by appending `theme=gr.themes.Soft(primary_hue='emerald')` to your interface definition."
        ]
      },
      promptLab: {
        title: "Complete Gradio ChatInterface with ZeroGPU Spaces Deployment",
        description: "Author a complete Python app.py featuring Gradio ChatInterface, token streaming, parameter controls, and ZeroGPU decoration for Hugging Face Spaces.",
        variables: [
          {
            name: "App Name",
            label: "Demo Title",
            options: ["Local Open Assistant Demo", "Air-Gapped Code Auditor UI", "Multimodal Document Analyzer"],
            default: "Local Open Assistant Demo"
          },
          {
            name: "Interface Theme",
            label: "Gradio Theme",
            options: ["gr.themes.Soft(primary_hue='slate')", "gr.themes.Monochrome()", "gr.themes.Citrus()"],
            default: "gr.themes.Soft(primary_hue='slate')"
          },
          {
            name: "Compute Type",
            label: "Hardware Strategy",
            options: ["ZeroGPU (@spaces.GPU)", "Standard CPU / Ollama Backend"],
            default: "ZeroGPU (@spaces.GPU)"
          }
        ],
        template: `# Complete Gradio Chat Application for Hugging Face Spaces
import gradio as gr
import time
import os

APP_TITLE = "[App Name]"
THEME = [Interface Theme]

# Function simulating or executing model inference
def generate_response(message, history, system_prompt, temperature):
    """
    Simulates streaming token generation.
    In production, wrap model.generate(streamer=...) or an Ollama API call here.
    """
    full_response = f"Echoing back your prompt with temperature={temperature}:\\n\\n"
    full_response += f"You submitted: '{message}'\\n\\n"
    full_response += f"Operating under system prompt: '{system_prompt}'\\n\\n"
    full_response += "1. Verified local response.\\n2. ZeroGPU active.\\n3. Production ready."
    
    # Stream tokens incrementally
    streamed_text = ""
    for token in full_response.split(" "):
        streamed_text += token + " "
        time.sleep(0.04) # Simulates generation latency
        yield streamed_text

# Custom UI Layout with ChatInterface
with gr.Blocks(theme=THEME, title=APP_TITLE) as demo:
    gr.Markdown(f"# 🚀 {APP_TITLE}")
    gr.Markdown("Interact with your fine-tuned open model hosted on Hugging Face Spaces.")
    
    with gr.Accordion("Advanced Model Hyperparameters", open=False):
        system_input = gr.Textbox(
            value="You are a helpful, concise AI engineer.",
            label="System Instructions",
            lines=2
        )
        temp_slider = gr.Slider(
            minimum=0.0,
            maximum=1.0,
            value=0.2,
            step=0.05,
            label="Sampling Temperature"
        )
    
    gr.ChatInterface(
        fn=generate_response,
        additional_inputs=[system_input, temp_slider],
        chatbot=gr.Chatbot(height=500, placeholder="Type a message to start chatting..."),
        textbox=gr.Textbox(placeholder="Ask anything...", container=False, scale=7),
    )

if __name__ == "__main__":
    demo.queue(default_concurrency_limit=10).launch()`,
        expectedOutput: `Running on local URL: http://127.0.0.1:7860
To create a public link, set share=True in launch().
Gradio application initialized with queue concurrency=10.
ZeroGPU compatibility verified.`
      },
      conceptGuide: {
        title: "Gradio Event Loops, ZeroGPU Slicing & API Endpoints",
        overview: "Gradio operates on an asynchronous event loop that maps browser interactions to Python generator functions. When an inference function yields strings incrementally, Gradio dispatches Server-Sent Events (SSE) to update the client DOM in real time. On Hugging Face Spaces, ZeroGPU leverages dynamic CUDA kernel interception: when an inference function decorated with `@spaces.GPU` is called, a physical GPU slice is allocated for the duration of the execution and released immediately upon function completion, enabling cost-effective multi-tenant hosting.",
        keyPoints: [
          "**Server-Sent Events (SSE):** Gradio leverages Python generator functions (`yield`) to stream tokens over SSE with microsecond latency.",
          "**ZeroGPU Architecture:** On-demand dynamic GPU allocation allows high-end A100 inference on free community Spaces without 24/7 server costs.",
          "**Automatic Client API:** Every Gradio space automatically provisions a REST API accessible via Python (`gradio_client`) and JavaScript (`@gradio/client`)."
        ]
      },
      learning: {
        resources: [
          {
            title: "Gradio Official Documentation & Guides",
            url: "https://www.gradio.app/docs",
            type: "Official Docs"
          },
          {
            title: "Hugging Face Spaces: ZeroGPU Quickstart & Architecture",
            url: "https://huggingface.co/docs/hub/spaces-gpus#zerogpu-quickstart",
            type: "Official Docs"
          },
          {
            title: "Gradio ChatInterface Customization Reference",
            url: "https://www.gradio.app/guides/creating-a-custom-chatbot-with-blocks",
            type: "Guide"
          },
          {
            title: "Gradio JS Client Documentation",
            url: "https://www.gradio.app/guides/getting-started-with-the-js-client",
            type: "Client Reference"
          }
        ]
      }
    },

    // Node 11
    {
      id: "step-11",
      stepNumber: 11,
      phaseId: "phase-4",
      title: "Serverless GPU APIs & Dedicated Inference Endpoints",
      timeEstimate: "2.5 hrs",
      difficulty: "Intermediate",
      summary: "Deploy autoscaling cloud GPU endpoints (A10G, L40S, H100) with scale-to-zero cost protection for production traffic.",
      description: "While local execution is ideal for individual development and homelabs, enterprise web applications require managed, high-availability cloud endpoints capable of serving multi-tenant production workloads. Hugging Face Inference Endpoints bridges the gap between raw cloud infrastructure and developer simplicity: allowing teams to deploy any private or public Hugging Face model onto dedicated cloud hardware (AWS or GCP) in a single click.\n\nKey architectural considerations include selecting the right GPU tier (Nvidia A10G for 7B–14B models, L40S for high throughput, or H100 SXM5 for 70B+ reasoning models) and configuring scale-to-zero autoscaling policies. When traffic is idle for a configurable period (e.g. 15 minutes), the endpoint automatically powers down its underlying GPU instances, eliminating thousands of dollars in idle cloud compute costs while automatically rebooting upon incoming HTTP requests.",
      playbook: {
        setup: "Install the Hugging Face Hub library: `pip install huggingface_hub`. Ensure your Hugging Face account has an active billing method and create an access token with 'Inference' permissions.",
        execute: "Deploy a dedicated endpoint programmatically via the Hugging Face Hub Python SDK: specify the repository ID, cloud provider (AWS), region (`us-east-1`), instance type (`nvidia-a10g-small`), and configure scale-to-zero timeout (`scale_to_zero_timeout=900`). Query the live endpoint URL using the standard OpenAI SDK format.",
        verify: "Check the Hugging Face Endpoint dashboard: verify the status changes from 'Building' to 'Running'. Execute a test curl request and confirm the endpoint responds in under 150ms with a 200 OK status code."
      },
      tools: [
        {
          name: "Hugging Face Inference Endpoints",
          type: "Managed Cloud",
          url: "https://huggingface.co/inference-endpoints",
          description: "Fully managed deployment service providing dedicated, autoscaling, and secure GPU endpoints powered by Text Generation Inference (TGI).",
          bestFor: "Enterprise cloud deployment, one-click hosting & scale-to-zero"
        },
        {
          name: "RunPod",
          type: "Cloud Infrastructure",
          url: "https://www.runpod.io",
          description: "Developer-centric cloud platform offering low-cost serverless GPU workers and spot compute for high-volume inference.",
          bestFor: "Cost-effective serverless GPU endpoints & custom Docker containers"
        },
        {
          name: "Modal",
          type: "Serverless Cloud",
          url: "https://modal.com",
          description: "Python-native cloud infrastructure provider allowing developers to run serverless containers with cold starts in seconds.",
          bestFor: "Python-as-code GPU infrastructure & custom batch jobs"
        }
      ],
      callouts: {
        mistake: "Configuring dedicated cloud GPU endpoints without an automated scale-to-zero policy, incurring hundreds of dollars in continuous billing during off-peak weekend hours.",
        proTip: "Deploy your Hugging Face Inference Endpoint with the 'Text Generation Inference' (TGI) container type to automatically enable PagedAttention, token streaming, and dynamic request batching.",
        mistakes: [
          "Deploying a 70B parameter model on a single 24 GB GPU instance, causing immediate out-of-memory container crashes during boot.",
          "Routing internal enterprise requests over public endpoints without enabling Private Service Connect (VPC peering), exposing internal traffic to public egress routes.",
          "Failing to account for cold-start latency when scale-to-zero is active, resulting in 45-second initial request timeouts for upstream web applications."
        ],
        proTips: [
          "Keep at least 1 warm replica (`min_replica=1`) during core business hours and use cron automation to lower to `min_replica=0` overnight.",
          "Hugging Face Inference Endpoints support custom handler scripts (`handler.py`) to add pre-processing, custom token counting, and PII masking.",
          "Use the Hugging Face Inference API as a drop-in replacement for OpenAI by passing your Endpoint URL as the `base_url`."
        ]
      },
      promptLab: {
        title: "Automated Programmatic Cloud GPU Endpoint Deployment Script",
        description: "Author a Python deployment automation script using the Hugging Face Hub SDK that provisions a dedicated Inference Endpoint with scale-to-zero cost protection.",
        variables: [
          {
            name: "Model Checkpoint",
            label: "Model to Deploy",
            options: ["Qwen/Qwen2.5-7B-Instruct", "meta-llama/Llama-3.1-8B-Instruct", "deepseek-ai/DeepSeek-R1-Distill-Qwen-14B"],
            default: "Qwen/Qwen2.5-7B-Instruct"
          },
          {
            name: "Cloud Provider",
            label: "Cloud Vendor & Region",
            options: ["AWS (us-east-1)", "GCP (us-central1)", "Azure (eastus)"],
            default: "AWS (us-east-1)"
          },
          {
            name: "GPU Instance",
            label: "Hardware Tier",
            options: ["nvidia-a10g-small (24 GB VRAM - $1.00/hr)", "nvidia-l40s-medium (48 GB VRAM - $2.10/hr)", "nvidia-a100-large (80 GB VRAM - $4.50/hr)"],
            default: "nvidia-a10g-small (24 GB VRAM - $1.00/hr)"
          }
        ],
        template: `# Programmatic Hugging Face Inference Endpoint Deployment
from huggingface_hub import create_inference_endpoint, get_inference_endpoint
import os

MODEL_ID = "[Model Checkpoint]"
CLOUD = "[Cloud Provider]"
INSTANCE = "[GPU Instance]".split(" ")[0] # Extracts instance slug
ENDPOINT_NAME = "prod-qwen-endpoint"

print(f"Provisioning dedicated Inference Endpoint for: {MODEL_ID}...")

# Deploy dedicated GPU endpoint with scale-to-zero
endpoint = create_inference_endpoint(
    name=ENDPOINT_NAME,
    repository=MODEL_ID,
    framework="pytorch",
    task="text-generation",
    accelerator="gpu",
    instance_size=INSTANCE,
    instance_type="g5.2xlarge" if "a10g" in INSTANCE else "g6e.2xlarge",
    region="us-east-1",
    vendor="aws",
    min_replica=0, # Scale to zero when idle
    max_replica=3, # Scale up to 3 instances under heavy traffic
    scale_to_zero_timeout=900 # 15 minutes of inactivity before scale down
)

print(f"Endpoint requested successfully!")
print(f"Current Status: {endpoint.status}")
print(f"Endpoint URL: {endpoint.url}")
print("Endpoint will scale to zero after 15 minutes of idle traffic.")`,
        expectedOutput: `Provisioning dedicated Inference Endpoint for: Qwen/Qwen2.5-7B-Instruct...
Endpoint requested successfully!
Current Status: pending
Endpoint URL: https://xyz123.us-east-1.aws.endpoints.huggingface.cloud
Endpoint will scale to zero after 15 minutes of idle traffic.`
      },
      conceptGuide: {
        title: "Inference Endpoints, Auto-Scaling & Scale-to-Zero Economics",
        overview: "Running machine learning models in production requires decoupling the underlying compute cluster from the serving API. Hugging Face Inference Endpoints automates Kubernetes cluster provisioning, GPU driver installation, and container orchestration behind an autoscaling load balancer. The scale-to-zero architecture monitors incoming HTTP request queues: when no requests arrive for a specified window, the orchestrator terminates the expensive GPU worker pods while keeping the lightweight API gateway active to buffer incoming queries during cold starts.",
        keyPoints: [
          "**Managed Infrastructure:** Zero Kubernetes management; Hugging Face handles GPU drivers, container images, and load balancing automatically.",
          "**Scale-to-Zero Cost Savings:** Automatically spin down expensive GPU instances during idle nights and weekends, slashing cloud bills by up to 70%.",
          "**Enterprise Security:** Supports VPC Private Endpoints, dedicated VPC peering, and SOC2 Type II compliance guarantees."
        ]
      },
      learning: {
        resources: [
          {
            title: "Hugging Face Inference Endpoints Documentation",
            url: "https://huggingface.co/docs/inference-endpoints/index",
            type: "Official Docs"
          },
          {
            title: "Hugging Face Hub Python SDK: Inference Endpoints Guide",
            url: "https://huggingface.co/docs/huggingface_hub/guides/inference_endpoints",
            type: "SDK Reference"
          },
          {
            title: "Text Generation Inference (TGI) Architecture Guide",
            url: "https://huggingface.co/docs/text-generation-inference/index",
            type: "Official Docs"
          },
          {
            title: "RunPod Serverless GPU Architecture Overview",
            url: "https://docs.runpod.io/serverless/overview",
            type: "Cloud Guide"
          }
        ]
      }
    },

    // Node 12
    {
      id: "step-12",
      stepNumber: 12,
      phaseId: "phase-4",
      title: "High-Concurrency Production Serving with vLLM & TGI",
      timeEstimate: "3 hrs",
      difficulty: "Advanced",
      summary: "Maximize throughput and minimize time-to-first-token (TTFT) using PagedAttention, continuous batching, and tensor parallelism.",
      description: "When deploying open models to serve hundreds of concurrent users, traditional naive Python execution (such as standard Hugging Face `transformers` loops) causes massive GPU underutilization and crippling latency spikes. The industry standard for high-concurrency production serving is `vLLM` (featuring PagedAttention) and Hugging Face's `Text Generation Inference` (TGI).\n\nThe core architectural breakthrough is PagedAttention: inspired by virtual memory paging in operating systems, PagedAttention stores the Key-Value (KV) cache in non-contiguous physical memory blocks, virtually eliminating memory fragmentation and reducing KV cache waste from 60% down to under 4%. Paired with continuous iteration-level batching (injecting new requests dynamically into running generation passes rather than waiting for entire batches to finish), vLLM delivers up to 20x higher request throughput than vanilla serving architectures. Mastering vLLM flags (`--tensor-parallel-size`, `--gpu-memory-utilization`, `--max-model-len`) is the capstone skill for enterprise AI engineers.",
      playbook: {
        setup: "Install vLLM on a Linux system with Nvidia GPU drivers: `pip install vllm` or pull the official Docker image: `docker pull vllm/vllm-openai:latest`.",
        execute: "Launch the production vLLM OpenAI-compatible server: `vllm serve Qwen/Qwen2.5-7B-Instruct --port 8000 --gpu-memory-utilization 0.90 --max-model-len 16384 --tensor-parallel-size 1`. Execute a concurrent load test using Apache Bench or Python `asyncio` submitting 50 simultaneous chat completion requests.",
        verify: "Inspect vLLM server logs to confirm iteration-level continuous batching is active. Verify median Time-To-First-Token (TTFT) remains under 100ms and GPU compute utilization exceeds 85% without running out of memory."
      },
      tools: [
        {
          name: "vLLM",
          type: "Open Source Engine",
          url: "https://github.com/vllm-project/vllm",
          description: "High-throughput and memory-efficient LLM serving engine powered by PagedAttention and continuous request batching.",
          bestFor: "High-concurrency production serving, OpenAI-compatible APIs & multi-GPU tensor parallelism"
        },
        {
          name: "Text Generation Inference (TGI)",
          type: "Open Source Engine",
          url: "https://github.com/huggingface/text-generation-inference",
          description: "Hugging Face's purpose-built serving engine powering Inference Endpoints with token streaming and production Prometheus metrics.",
          bestFor: "Production Hugging Face integration, Kubernetes deployment & enterprise observability"
        },
        {
          name: "Docker",
          type: "Container Platform",
          url: "https://www.docker.com",
          description: "Industry-standard container platform for packaging vLLM and TGI servers into isolated, reproducible cloud deployments.",
          bestFor: "Containerized deployment, Kubernetes scaling & reproducible builds"
        }
      ],
      callouts: {
        mistake: "Setting `--gpu-memory-utilization 1.0` in vLLM, leaving zero VRAM for dynamic KV cache allocations or CUDA context overhead and causing immediate runtime crashes.",
        proTip: "Deploy with `--tensor-parallel-size N` where N equals the number of GPUs on your host machine to automatically shard large 70B models across multi-GPU clusters via NCCL.",
        mistakes: [
          "Failing to configure `--max-model-len`, allowing extreme outlier prompts to exhaust the entire server's KV cache pool and block other concurrent users.",
          "Serving models via vanilla FastAPI/Flask endpoints without continuous batching, limiting concurrency to one single request at a time.",
          "Omitting health check probes (`/health`) in Kubernetes deployments, causing load balancers to route live traffic to instances still warming their weights."
        ],
        proTips: [
          "vLLM natively supports quantized AWQ and FP8 models: pass `--quantization fp8` or `--quantization awq` to cut VRAM in half and double serving throughput.",
          "Use the built-in Prometheus metrics endpoint (`/metrics`) to monitor `vllm:num_requests_running`, `vllm:gpu_cache_usage_factor`, and `vllm:time_to_first_token_seconds`.",
          "Enable speculative decoding (`--speculative-model <smaller_draft_model>`) to achieve up to 2x faster token generation speeds on complex coding tasks."
        ]
      },
      promptLab: {
        title: "High-Concurrency vLLM Production Docker Compose Deployment",
        description: "Generate a production-grade Docker Compose manifest and startup script for serving open-weight LLMs with vLLM, continuous batching, and Prometheus monitoring.",
        variables: [
          {
            name: "Model Target",
            label: "Production Model",
            options: ["Qwen/Qwen2.5-7B-Instruct", "meta-llama/Llama-3.1-8B-Instruct", "Qwen/Qwen2.5-32B-Instruct-AWQ"],
            default: "Qwen/Qwen2.5-7B-Instruct"
          },
          {
            name: "Max Context Length",
            label: "Max Model Context",
            options: ["16384", "32768", "65536"],
            default: "16384"
          },
          {
            name: "GPU Allocation",
            label: "Tensor Parallelism",
            options: ["1 GPU (tensor-parallel-size=1)", "2 GPUs (tensor-parallel-size=2)", "4 GPUs (tensor-parallel-size=4)"],
            default: "1 GPU (tensor-parallel-size=1)"
          }
        ],
        template: `# Production Docker Compose Configuration for vLLM
version: '3.8'

services:
  vllm-server:
    image: vllm/vllm-openai:latest
    container_name: vllm-production
    restart: always
    ports:
      - "8000:8000"
    environment:
      - HUGGING_FACE_HUB_TOKEN=\${HF_TOKEN}
    volumes:
      - ~/.cache/huggingface:/root/.cache/huggingface
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: all
              capabilities: [gpu]
    command: >
      --model [Model Target]
      --port 8000
      --max-model-len [Max Context Length]
      --gpu-memory-utilization 0.90
      --tensor-parallel-size 1
      --trust-remote-code
      --enable-prefix-caching
      --disable-log-requests

# Test command to verify high-concurrency throughput:
# curl http://localhost:8000/v1/models
# ab -n 100 -c 10 -p payload.json -T application/json http://localhost:8000/v1/chat/completions`,
        expectedOutput: `### vLLM Production Server Log Output

INFO: Starting vLLM OpenAI-Compatible API Engine
INFO: Target Model: Qwen/Qwen2.5-7B-Instruct
INFO: Initializing PagedAttention with block_size=16
INFO: Available GPU Memory: 24.00 GB || Allocated Memory: 21.60 GB (90% target)
INFO: Number of GPU blocks allocated: 8,420 (capable of storing ~134,720 tokens in KV cache)
INFO: Automatic Prefix Caching enabled: Redundant system prompts will execute in 0ms
INFO: Server live on http://0.0.0.0:8000
INFO: Uvicorn running on socket with continuous batching active.`
      },
      conceptGuide: {
        title: "PagedAttention Architecture, Continuous Batching & Tensor Parallelism",
        overview: "In conventional LLM serving, the memory for each request's KV cache is pre-allocated contiguously based on the maximum possible sequence length. Because actual generation lengths vary, up to 60–80% of GPU memory is wasted on unallocated, fragmented space. PagedAttention solves this by segmenting the KV cache into discrete blocks (like virtual memory pages) and dynamically mapping logical tokens to non-contiguous physical memory blocks. Continuous batching dynamically schedules new incoming requests into ongoing iteration cycles, achieving maximum hardware saturation.",
        keyPoints: [
          "**PagedAttention Virtual Memory:** Eliminates internal and external memory fragmentation, reducing KV cache waste to under 4%.",
          "**Continuous Iteration Batching:** Injects new incoming queries on a per-token basis rather than waiting for existing batch sequences to complete.",
          "**Tensor Parallelism:** Shards individual weight matrices across multiple GPUs using Megatron-LM tensor parallel primitives for instant multi-GPU scaling."
        ]
      },
      learning: {
        resources: [
          {
            title: "vLLM Official Documentation & Architecture Guide",
            url: "https://docs.vllm.ai/en/latest",
            type: "Official Docs"
          },
          {
            title: "PagedAttention Original Paper (UC Berkeley)",
            url: "https://arxiv.org/abs/2309.06180",
            type: "Research Paper"
          },
          {
            title: "Hugging Face Text Generation Inference (TGI) Documentation",
            url: "https://huggingface.co/docs/text-generation-inference/index",
            type: "Official Docs"
          },
          {
            title: "vLLM Multi-GPU Tensor Parallelism & Benchmarks",
            url: "https://docs.vllm.ai/en/latest/serving/distributed_serving.html",
            type: "Production Guide"
          }
        ]
      }
    }
  ]
};
