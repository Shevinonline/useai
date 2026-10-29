# Contributing to useai.sh

Thank you for your interest in contributing to **useai.sh**! We are building an open-source, community-curated collection of utilitarian, step-by-step developer roadmaps, prompt engineering blueprints, and AI tool directories.

Whether you're fixing a typo, improving step explanations, updating tool stacks, or authoring a brand-new AI roadmap, your contributions are welcome!

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Quick Start / Local Setup](#quick-start--local-setup)
- [Project Architecture](#project-architecture)
- [How to Contribute](#how-to-contribute)
  - [1. Improving an Existing Roadmap or Step](#1-improving-an-existing-roadmap-or-step)
  - [2. Adding a New Roadmap](#2-adding-a-new-roadmap)
  - [3. Adding or Updating AI Tools](#3-adding-or-updating-ai-tools)
  - [4. Adding Prompt Templates](#4-adding-prompt-templates)
- [Coding Standards & Security Guidelines](#coding-standards--security-guidelines)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [License](#license)

---

## Code of Conduct

We are committed to providing a welcoming, inclusive, and respectful community for all contributors. Please treat fellow maintainers and contributors with kindness and professional courtesy.

---

## Quick Start / Local Setup

### Prerequisites

- **Node.js**: v18.0.0 or later
- **npm**: v9.0.0 or later (or `pnpm` / `yarn`)

### 1. Fork & Clone the Repository

```bash
# 1. Fork the repository on GitHub, then clone your fork:
git clone https://github.com/<your-username>/useai.sh.git
cd useai.sh

# 2. Add upstream remote to stay synced:
git remote add upstream https://github.com/yourusername/useai.sh.git
```

### 2. Environment Variables

Copy the example environment configuration:

```bash
cp .env.example .env
```

> **Security Warning**: `useai.sh` is a client-side single-page application. Variables prefixed with `VITE_` are bundled into public client JavaScript. **Never put private API keys, backend secrets, or private tokens in `.env`**.

### 3. Install Dependencies & Start Development Server

```bash
# Install dependencies
npm install

# Start local development server (Vite)
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The app supports hot module replacement (HMR).

---

## Project Architecture

```
useai-sh/
├── public/                 # Static assets (favicons, manifest, etc.)
├── src/
│   ├── components/         # Modular React UI components
│   │   ├── Navbar.jsx      # Top navigation & search shortcut
│   │   ├── Home.jsx        # Landing page with category grid & live stats
│   │   ├── RoadmapDetail.jsx # Interactive roadmap canvas & progress tracking
│   │   ├── StepDrawer.jsx  # Side drawer with prompt lab, playbooks & tools
│   │   ├── ToolsPage.jsx   # Curated AI tools directory with filters
│   │   ├── PromptsPage.jsx # 330+ searchable prompt templates directory
│   │   └── SavedBackupModal.jsx # Zero-login local storage & JSON backup manager
│   ├── context/            # React contexts (Theme, Workspace, CommandPalette)
│   ├── data/               # Curriculum & database files
│   │   ├── roadmaps.json   # High-level metadata for all roadmaps
│   │   ├── roadmapSteps.js # Central catalog registering step content
│   │   ├── toolsData.js    # Curated AI tools directory items
│   │   └── roadmaps/       # Individual roadmap module files (.js)
│   ├── utils/              # Helper utilities
│   │   ├── validation.js   # Prototype-safe JSON parser & URL sanitizer
│   │   ├── bookmarks.js    # Local-first progress & bookmarks manager
│   │   └── badgeResolver.js# Card status badges & completion calculator
│   ├── App.jsx             # Top-level router & layout
│   └── main.jsx            # Entry point
├── .env.example            # Public build-time environment template
├── .gitignore              # Strict ignore rules for secrets and build artifacts
├── vercel.json             # SPA rewrites & HTTP security headers
└── vite.config.js          # Production build configuration & code splitting
```

---

## How to Contribute

### 1. Improving an Existing Roadmap or Step

Roadmap step playbooks live inside `src/data/roadmaps/`. Each file corresponds to a specific roadmap:

- `src/data/roadmaps/chatgptClaudeMastery.js`
- `src/data/roadmaps/cursorAiIdes.js`
- `src/data/roadmaps/langchainLanggraphCrewai.js`
- `src/data/roadmaps/localLlmsPrivacy.js`
- *(and 20+ more)*

Each step contains:
- `title`: Action-oriented step title
- `description`: Detailed, fluff-free engineering context
- `whyItMatters`: Practical impact on developer workflows
- `actionItems`: Numbered tactical implementation steps with code/commands
- `tools`: Recommended tool stack with official URLs and pricing tags
- `promptTemplates`: Production-tested prompts with parameter variables
- `verificationCriteria`: Measurable criteria to verify mastery

Feel free to refine outdated tool URLs, expand action items, or provide more robust prompt templates.

### 2. Adding a New Roadmap

To add a completely new roadmap:

1. **Create the Roadmap File**:
   Create `src/data/roadmaps/<yourRoadmapName>.js`. Export your roadmap object following the existing schema:
   ```javascript
   export const yourRoadmapNameData = {
     id: "your-roadmap-id",
     title: "Your Roadmap Title",
     description: "Clear, utilitarian summary of what engineers will master.",
     category: "Engineering & Architecture", // Or "Creative & Production", "Business & Ops"
     stepCount: 12,
     phases: [
       {
         id: "phase-1",
         title: "Phase 1: Getting Started",
         description: "Foundational concepts and environment setup.",
         steps: [
           {
             id: "step-1",
             stepNumber: 1,
             title: "Environment Setup & Prerequisites",
             difficulty: "Beginner",
             estimatedHours: 2,
             description: "...",
             actionItems: [...],
             tools: [...],
             promptTemplates: [...]
           }
         ]
       }
     ]
   };
   ```

2. **Register in `src/data/roadmaps.json`**:
   Add an entry with `id`, `title`, `description`, `category`, `difficulty`, `stepCount`, and `tags`.

3. **Register in `src/data/roadmapSteps.js`**:
   Import your file at the top and include it in `roadmapStepsData`:
   ```javascript
   import { yourRoadmapNameData } from './roadmaps/yourRoadmapName';
   
   export const roadmapStepsData = {
     // ...
     "your-roadmap-id": yourRoadmapNameData,
   };
   ```

### 3. Adding or Updating AI Tools

The tools directory is powered by `src/data/toolsData.js`. To add a new tool or update pricing/categories:

```javascript
{
  id: "my-tool-name",
  name: "My Tool",
  pricing: "Freemium", // "Free" | "Freemium" | "Paid"
  url: "https://example.com",
  bestFor: "Fast local embeddings and semantic vector search",
  description: "Short 1-2 sentence engineering description.",
  workflows: ["Vector Search", "RAG Pipeline", "Embeddings"]
}
```

### 4. Adding Prompt Templates

To contribute prompt blueprints, you can add them directly inside a roadmap step's `promptTemplates` array. They will automatically be indexed in both the step's **Prompt Lab** and the global **/prompts** directory.

---

## Coding Standards & Security Guidelines

- **Clean & Fluff-Free**: Avoid generic AI buzzwords or filler content. Focus on actionable commands, exact configurations, and production patterns.
- **Security & Prototype Safety**:
  - Always use `safeJsonParse()` from `src/utils/validation.js` instead of raw `JSON.parse()` when reading user-provided data or `localStorage`.
  - External URLs must be sanitized via `sanitizeExternalUrl()` and opened with `target="_blank" rel="noopener noreferrer"`.
  - Never use `dangerouslySetInnerHTML`, `eval()`, or `new Function()`.
- **Styling**: We use Tailwind CSS with standard semantic tokens (`bg-app-bg`, `text-app-text`, `border-app-border`, `text-brand-accent`). All components must support both dark and light themes smoothly.

---

## Submitting a Pull Request

1. **Create a topic branch**:
   ```bash
   git checkout -b feat/add-deepseek-roadmap
   ```

2. **Test your changes**:
   Make sure the app runs without console errors, and verify that the production bundle builds cleanly:
   ```bash
   npm run build
   ```
   Confirm that the build completes with **0 errors and 0 chunk warnings**.

3. **Commit your changes**:
   Write clear, concise commit messages:
   ```bash
   git add .
   git commit -m "feat(roadmaps): add DeepSeek R1 local reasoning roadmap"
   ```

4. **Push to your fork and submit PR**:
   ```bash
   git push origin feat/add-deepseek-roadmap
   ```
   Open a Pull Request on GitHub against the `main` branch. Provide a brief explanation of what was added or updated.

---

## License

By contributing to `useai.sh`, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).
