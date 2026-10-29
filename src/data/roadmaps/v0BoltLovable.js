// Complete production-grade steps data for "v0, Bolt & Lovable" Roadmap (12 Nodes)

export const v0BoltLovableData = {
  id: "v0-bolt-lovable",
  title: "v0, Bolt & Lovable",
  description: "Full-stack generative app builders, shadcn/ui components, WebContainers, Supabase, and GitHub sync.",
  category: "Tool Mastery Roadmaps",
  stepCount: 12,
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: Prompt-to-UI Architecture & Component Foundations",
      description: "Write scoped architectural specifications, generate production-grade shadcn/ui component blocks, and install v0 registries locally via the shadcn CLI."
    },
    {
      id: "phase-2",
      title: "Phase 2: Full-Stack Browser Sandboxes (Bolt.new & Lovable)",
      description: "Scaffold complete full-stack web applications inside browser WebContainers, perform non-destructive visual styling edits, and protect core files from AI regressions."
    },
    {
      id: "phase-3",
      title: "Phase 3: Backend Wiring, Authentication & Edge Functions",
      description: "Connect live Supabase Postgres databases, configure Row-Level Security (RLS) policies, manage serverless Edge Functions, and wire Stripe billing and Resend emails."
    },
    {
      id: "phase-4",
      title: "Phase 4: Two-Way GitHub Sync, IDE Handoff & Production Launch",
      description: "Synchronize browser sandboxes to GitHub repositories, transition into Cursor for deep refactoring, debug hydration and dependency errors, and deploy to edge CDNs."
    }
  ],
  steps: [
    {
      id: "step-1",
      stepNumber: 1,
      phaseId: "phase-1",
      title: "Scoping App Specs & Visual Reference Prompting",
      timeEstimate: "3-4 days",
      difficulty: "Beginner",
      summary: "Structure unambiguous product specifications and multimodal visual wireframes to steer generative app builders toward production-grade layout hierarchy on the initial prompt.",
      description: "Generative app builders like v0 and Lovable degrade into generic, cluttered layouts when fed open-ended prompts like 'build me an Airbnb clone'. Professional engineering starts with a tightly scoped technical specification detailing information architecture, user journeys, responsive breakpoints, design token palettes, and component hierarchies. Pairing this written spec with low-fidelity wireframe sketches or reference screenshots provides the multimodal vision model with explicit layout boundaries, preventing hallucinated navigation bars, broken grid alignments, and bloated boilerplate.",
      playbook: {
        setup: "Draft a concise 200-word architecture spec in markdown outlining the primary user workflow, color tokens (Tailwind Slate/Zinc with primary indigo accents), and component boundaries.",
        execute: "Upload your UI wireframe or benchmark screenshot to v0 or Lovable alongside the spec. Prompt with explicit layout instructions: 'Create a desktop-first responsive dashboard layout with a collapsible 240px sidebar, a top navigation bar with user avatar menu, and a 3-column stats grid with trend indicators using Lucide icons.'",
        verify: "Confirm the generated canvas adheres strictly to the referenced visual hierarchy, uses semantic HTML5 elements (`<aside>`, `<header>`, `<main>`), and includes realistic empty and hover states."
      },
      tools: [
        {
          name: "v0 by Vercel",
          type: "Freemium",
          url: "https://v0.dev",
          description: "Generative UI system specializing in copy-ready shadcn/ui and Tailwind CSS components.",
          bestFor: "Generative React components & design systems"
        },
        {
          name: "Lovable",
          type: "Freemium",
          url: "https://lovable.dev",
          description: "Full-stack AI software engineer for rapid browser prototyping with Supabase integration.",
          bestFor: "Full-stack app generation with visual canvas"
        },
        {
          name: "Claude 3.7 Sonnet",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Frontier reasoning model for distilling ambiguous product ideas into structured markdown specs.",
          bestFor: "Architectural scoping & system prompt drafting"
        }
      ],
      callouts: {
        mistake: "Feeding vague, monolithic prompts like 'Build a complete SaaS analytics platform' in a single pass, resulting in shallow placeholder interfaces and unusable spaghetti code.",
        proTip: "Break UI requests into incremental view slices: generate the shell layout first, commit or lock the sidebar and header, then generate each nested data card in subsequent iterations.",
        mistakes: [
          "Failing to provide exact color hex codes or Tailwind tokens, causing the AI to hallucinate inconsistent color schemes.",
          "Neglecting mobile and tablet responsive constraints in the initial prompt, requiring painful multi-file refactoring later.",
          "Accepting mock data hardcoded in deeply nested JSX instead of asking the builder to extract structured mock arrays at the top of the file."
        ],
        proTips: [
          "Attach 1–2 clean screenshots of modern production apps (e.g., Linear, Stripe) to anchor the model's spacing and typography instincts.",
          "Explicitly instruct the model to use `lucide-react` icons and avoid importing deprecated icon libraries like `react-icons`.",
          "Specify interactive states upfront: 'Include active tab indicators, hover tooltips, and an empty search state illustration.'"
        ]
      },
      promptLab: {
        title: "Product Specification & Visual Wireframe UI Prompt Architect",
        description: "Generate structured, production-ready specifications that guide v0 and Lovable to output clean, modular React component hierarchies.",
        variables: [
          {
            name: "App Category",
            label: "Product Concept",
            options: [
              "Developer Analytics & API Usage Dashboard",
              "B2B Customer Support & Ticket Management Inbox",
              "AI Prompt Engineering Studio & Playground",
              "Fintech Subscription & Invoicing Portal"
            ],
            default: "Developer Analytics & API Usage Dashboard"
          },
          {
            name: "Layout Structure",
            label: "Layout Hierarchy",
            options: [
              "Fixed 240px left sidebar, sticky header with workspace switcher, 3-column metric cards, and sortable data table",
              "Top navigation bar with segmented controls, split-pane dual column workspace with live preview canvas",
              "Collapsible icon rail sidebar, full-width responsive header, hero KPI stat cards, and interactive timeline chart",
              "Centered single-column card layout with multi-step wizard navigation, breadcrumbs, and sticky action bar"
            ],
            default: "Fixed 240px left sidebar, sticky header with workspace switcher, 3-column metric cards, and sortable data table"
          },
          {
            name: "Styling & Tokens",
            label: "Design Tokens",
            options: [
              "Dark mode default, Slate-950 background, subtle 1px border-slate-800, vibrant emerald-500 accent",
              "Minimalist clean light mode, pure white cards, zinc-100 canvas, high-contrast violet-600 accents",
              "Sleek obsidian theme, glassmorphic card overlays (backdrop-blur-md), muted zinc typography, neon cyan highlights",
              "Warm neutral palette, stone-50 background, crisp stone-200 borders, amber-600 status badges"
            ],
            default: "Dark mode default, Slate-950 background, subtle 1px border-slate-800, vibrant emerald-500 accent"
          }
        ],
        template: `You are an expert Frontend Architect specializing in React, TypeScript, Tailwind CSS, and shadcn/ui.

Create a production-grade UI for: [App Category].

### Layout & Architecture Requirements:
- Structure: [Layout Structure]
- Visual Theme: [Styling & Tokens]
- Design System: Use shadcn/ui primitives (Card, Badge, Button, Input, DropdownMenu, Table, Tabs) backed by Radix UI.
- Icons: Use lucide-react exclusively.

### Code Standards:
1. Export clean, modular TypeScript interfaces for all mock data models.
2. Ensure full accessibility: ARIA attributes on interactive buttons, focus-visible outlines, and semantic HTML tags.
3. Include responsive Tailwind classes for mobile (sm), tablet (md), and widescreen desktop (lg/xl).
4. Do NOT use arbitrary CSS values; stick to standardized Tailwind utility classes.`,
        expectedOutput: `import React, { useState } from 'react';
import { 
  Activity, 
  Key, 
  Layers, 
  ArrowUpRight, 
  Copy, 
  Check, 
  MoreVertical, 
  Terminal 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ApiMetric {
  id: string;
  endpoint: string;
  method: 'GET' | 'POST' | 'DELETE';
  requests24h: number;
  latencyMs: number;
  successRate: number;
  status: 'healthy' | 'degraded';
}

const mockMetrics: ApiMetric[] = [
  { id: '1', endpoint: '/v1/chat/completions', method: 'POST', requests24h: 124500, latencyMs: 240, successRate: 99.8, status: 'healthy' },
  { id: '2', endpoint: '/v1/embeddings', method: 'POST', requests24h: 89300, latencyMs: 45, successRate: 99.9, status: 'healthy' },
  { id: '3', endpoint: '/v1/models', method: 'GET', requests24h: 14200, latencyMs: 18, successRate: 100.0, status: 'healthy' }
];

export default function ApiUsageDashboard() {
  const [copiedKey, setCopiedKey] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-slate-800 p-6 flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Terminal className="h-4 w-4" />
            </div>
            <span className="font-semibold text-lg tracking-tight">PromptPulse API</span>
          </div>
          ...`
      },
      conceptGuide: {
        title: "Understanding Multimodal Prompt Grounding in Generative Builders",
        overview: "Generative UI tools use vision-language models trained on millions of React component trees and browser screenshots. When you provide only natural language, the model must guess element hierarchy, padding, and spacing from a vast latent probability distribution. By pairing structured technical requirements with visual reference images, you constrain this distribution. The visual embedding grounds the spatial layout (e.g. 240px sidebar, 16px grid gutters), while the text prompt governs behavioral logic, component props, and accessibility standards.",
        keyPoints: [
          "**Latent Space Constraining:** Visual references eliminate 80% of layout hallucinations by pinning coordinate systems and element hierarchy.",
          "**Domain Token Anchoring:** Explicitly naming design tokens (e.g., `slate-950`, `border-slate-800`) ensures coherent theme continuity across multiple generation turns.",
          "**Separation of Presentation and State:** Scoping mock data into typed arrays at the component root enables zero-friction backend wiring later."
        ]
      },
      learning: {
        resources: [
          {
            title: "v0 by Vercel Official Documentation & Prompting Guide",
            url: "https://v0.dev/docs",
            type: "Official Docs"
          },
          {
            title: "Lovable Engineering Handbook & Prompt-to-App Best Practices",
            url: "https://docs.lovable.dev",
            type: "Official Docs"
          },
          {
            title: "shadcn/ui Design Principles & Accessible Component Primitives",
            url: "https://ui.shadcn.com/docs",
            type: "Guide"
          },
          {
            title: "Tailwind CSS Responsive Design & Token Architecture Spec",
            url: "https://tailwindcss.com/docs/responsive-design",
            type: "Component Spec"
          }
        ]
      }
    },
    {
      id: "step-2",
      stepNumber: 2,
      phaseId: "phase-1",
      title: "Mastering v0 for shadcn/ui & Tailwind Component Systems",
      timeEstimate: "3-4 days",
      difficulty: "Beginner",
      summary: "Leverage v0's specialized knowledge of Radix UI and Tailwind CSS to synthesize fully accessible, modular React design blocks.",
      description: "v0 was specifically trained on the shadcn/ui ecosystem, making it the most capable engine for generating composable, headless-accessible UI primitives. Unlike generalist chat models that output ad-hoc CSS or outdated Bootstrap classes, v0 leverages Radix UI primitives (`@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-tooltip`) wrapped with Tailwind CSS utility classes. Mastering v0 means understanding how to prompt for composable block variants, customize CSS variable themes in `globals.css`, and generate robust interactive micro-states like tabs, data tables with pagination, and command palettes.",
      playbook: {
        setup: "Open v0.dev and select your desired framework preset (Next.js App Router, Tailwind CSS, TypeScript).",
        execute: "Prompt for a complex composite block: 'Generate an accessible Settings Dialog containing three tabs: Profile, API Keys, and Billing. The API Keys tab must feature a masked secret key with a copy-to-clipboard button, an expiration date picker, and a danger zone revoking confirmation modal.'",
        verify: "Inspect the generated code in v0's code view. Verify that keyboard navigation (Tab, Esc, Enter) functions correctly, Radix primitives are imported properly, and no inline styles are used."
      },
      tools: [
        {
          name: "v0 by Vercel",
          type: "Freemium",
          url: "https://v0.dev",
          description: "Generative UI system specializing in copy-ready shadcn/ui and Tailwind CSS components.",
          bestFor: "shadcn/ui component blocks & variations"
        },
        {
          name: "shadcn/ui",
          type: "Free",
          url: "https://ui.shadcn.com",
          description: "The gold-standard re-usable component library built with Radix UI and Tailwind.",
          bestFor: "Accessible React component primitives"
        },
        {
          name: "Tailwind CSS",
          type: "Free",
          url: "https://tailwindcss.com",
          description: "Utility-first CSS framework enabling rapid, highly customized UI development.",
          bestFor: "Design token styling & responsive utilities"
        }
      ],
      callouts: {
        mistake: "Asking v0 to generate an entire 15-page application inside a single prompt, which overflows token limits and results in shallow, half-finished components.",
        proTip: "Treat v0 as a specialized component block factory: generate individual cards, navigation bars, and data tables separately, then assemble them in your local Next.js project.",
        mistakes: [
          "Overriding shadcn CSS variables with hardcoded hex colors, breaking dark mode toggle compatibility.",
          "Allowing v0 to install unnecessary heavyweight charting libraries when lightweight SVG alternatives or Recharts suffice.",
          "Ignoring ARIA accessibility warnings generated in the v0 preview inspector."
        ],
        proTips: [
          "Use the 'Pin' feature in v0 to keep elements you like while iteratively regenerating parts of the layout that need refinement.",
          "Request specific Radix primitives by name: 'Use `@radix-ui/react-popover` for the filter dropdown to ensure automatic collision detection.'",
          "Ask v0 to output standard `cva` (class-variance-authority) variants for buttons and badges to preserve design system scalability."
        ]
      },
      promptLab: {
        title: "shadcn/ui Composite Component & State Machine Generator",
        description: "Prompt v0 to produce modular, accessible UI blocks using Radix UI primitives and class-variance-authority styling.",
        variables: [
          {
            name: "Component Type",
            label: "UI Block Type",
            options: [
              "Multi-Tab Organization Settings Modal with Danger Zone",
              "Sortable & Filterable Data Table with Row Selection",
              "Interactive Command Palette (cmd+k) with Action Shortcuts",
              "Multi-Step Onboarding Form with Progress Stepper & Validation"
            ],
            default: "Multi-Tab Organization Settings Modal with Danger Zone"
          },
          {
            name: "Interactive State",
            label: "State Behavior",
            options: [
              "Loading skeleton state, error toast trigger, and success confirmation modal",
              "Live filtering search input, empty state badge, and pagination controls",
              "Keyboard navigation highlights, recent search pills, and nested submenu trigger",
              "Zod validation error highlights, dynamic field addition, and auto-save indicator"
            ],
            default: "Loading skeleton state, error toast trigger, and success confirmation modal"
          },
          {
            name: "Theme Variant",
            label: "Color Palette",
            options: [
              "shadcn Zinc neutral theme with high-contrast primary buttons and subtle borders",
              "shadcn Slate cool theme with rounded-xl cards and muted background accents",
              "shadcn Stone warm theme with soft shadows and earthy status badges",
              "Custom Midnight Indigo theme with cyan accent highlights for developer tools"
            ],
            default: "shadcn Zinc neutral theme with high-contrast primary buttons and subtle borders"
          }
        ],
        template: `Generate a production-grade shadcn/ui React component for: [Component Type].

### Technical Constraints:
- Architecture: Modular Next.js 15 client component ('use client') with TypeScript.
- State Handling: [Interactive State].
- Visual Design: [Theme Variant].
- Component Stack: Radix UI primitives, lucide-react icons, and Tailwind CSS.
- Code Structure: Use class-variance-authority (cva) for component variants.

Include realistic mock state and trigger actions (e.g., simulating a 1-second API save delay with status toast updates).`,
        expectedOutput: `"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, Key, ShieldAlert, Check, Copy } from "lucide-react";

export function OrganizationSettingsDialog() {
  const [open, setOpen] = React.useState(false);
  const [isSaving, setIsSaving] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("sk_live_9481948194819481");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  ...`
      },
      conceptGuide: {
        title: "The Architecture of Headless Component Primitives in AI Generation",
        overview: "Building UI with traditional CSS frameworks frequently led to accessibility flaws: missing focus rings, broken screen-reader announcements, and keyboard traps. Modern generative engineering relies on headless component architecture pioneered by Radix UI. Headless components separate raw DOM accessibility logic (focus management, ARIA tags, keyboard listeners) from visual styling. When v0 builds components on shadcn/ui, it layers Tailwind CSS on top of these unstyled, fully accessible engines. This guarantees that AI-generated interfaces comply with WCAG 2.1 AA accessibility standards out of the box.",
        keyPoints: [
          "**Decoupled Logic & Style:** Headless primitives handle keyboard interaction and ARIA tags; Tailwind handles aesthetic tokens.",
          "**Standardized Prop Contracts:** shadcn components adhere to predictable prop schemas that generative models understand with high reliability.",
          "**Zero Runtime Lock-in:** Code generated in v0 is copy-pasteable source code directly owned by your project, requiring zero proprietary runtime dependencies."
        ]
      },
      learning: {
        resources: [
          {
            title: "shadcn/ui Component Installation & CLI Documentation",
            url: "https://ui.shadcn.com/docs/installation",
            type: "Official Docs"
          },
          {
            title: "Radix UI Accessibility & Headless Primitives Handbook",
            url: "https://www.radix-ui.com/primitives/docs/overview/introduction",
            type: "Official Docs"
          },
          {
            title: "v0 Component Showcase & Architectural Best Practices",
            url: "https://v0.dev/community",
            type: "Guide"
          },
          {
            title: "Class Variance Authority (CVA) Type-Safe Variant Specification",
            url: "https://cva.style/docs",
            type: "Component Spec"
          }
        ]
      }
    },
    {
      id: "step-3",
      stepNumber: 3,
      phaseId: "phase-1",
      title: "Installing v0 Blocks Directly via shadcn CLI (`npx shadcn@latest add`)",
      timeEstimate: "3-4 days",
      difficulty: "Intermediate",
      summary: "Streamline your development loop by pulling AI-generated v0 blocks directly into your local IDE codebase with automated dependency resolution.",
      description: "Copying and pasting complex multi-file React components from a browser window into your local project introduces formatting drift, missing sub-components, and uninstalled npm dependencies. The official Vercel/shadcn CLI integration bridges this gap completely. By executing `npx shadcn@latest add 'https://v0.dev/chat/b/...'`, the CLI inspects the remote v0 generation, analyzes all required Radix primitives, Lucide icons, and Tailwind plugins, installs missing dependencies into your `package.json`, and places clean TypeScript files directly into your local `@/components` directory.",
      playbook: {
        setup: "Initialize a standard Next.js 15 project locally with `npx create-next-app@latest my-app --typescript --tailwind --eslint` and initialize shadcn with `npx shadcn@latest init`.",
        execute: "In your v0 chat window, click the 'Share' or 'CLI' button to copy the component URL. In your local terminal, run `npx shadcn@latest add \"https://v0.dev/chat/b/YOUR_BLOCK_ID\"`.",
        verify: "Confirm that the new component appears in your local `src/components/` folder, all imported sub-components exist, and the Next.js dev server (`npm run dev`) renders the component without missing module errors."
      },
      tools: [
        {
          name: "shadcn CLI",
          type: "Free",
          url: "https://ui.shadcn.com/docs/cli",
          description: "Command-line tool for scaffolding and installing UI blocks and dependencies.",
          bestFor: "Automated local component installation"
        },
        {
          name: "Next.js",
          type: "Free",
          url: "https://nextjs.org",
          description: "The premier React framework for full-stack web applications and edge rendering.",
          bestFor: "Production React application runtime"
        },
        {
          name: "Cursor",
          type: "Freemium",
          url: "https://cursor.com",
          description: "AI-native code editor for refining, testing, and wiring locally installed v0 components.",
          bestFor: "Local code refactoring & IDE integration"
        }
      ],
      callouts: {
        mistake: "Manually copying hundreds of lines of JSX from v0 while forgetting to install required Radix packages, causing immediate runtime crashes in local development.",
        proTip: "Use the shadcn CLI registry URL directly: it automatically parses the dependency graph, prompts to install missing npm packages, and configures path aliases.",
        mistakes: [
          "Running the CLI command inside an uninitialized directory where `components.json` is missing.",
          "Overwriting existing local modifications by re-running `shadcn add` without git committing previous changes.",
          "Mismatched Tailwind configuration versions between v0 (Tailwind v3/v4) and your local project."
        ],
        proTips: [
          "Run `git status` before executing `npx shadcn add` so you can review the exact diff of files added and dependencies modified.",
          "Create custom private registries in your organization so team members can share proprietary v0 blocks across repositories.",
          "Combine v0 CLI imports with Cursor's Composer (`Cmd+I`) to wire local API routes directly into the freshly installed block."
        ]
      },
      promptLab: {
        title: "Local Registry-Ready Component Packaging Prompt",
        description: "Instruct v0 to format its output specifically for seamless shadcn CLI consumption and local component reusability.",
        variables: [
          {
            name: "Registry Block Target",
            label: "Target Block",
            options: [
              "Interactive Billing Usage Meter & Plan Upgrade Card",
              "Audit Log Event Feed with Search & Filter Pills",
              "File Upload Dropzone with Upload Progress & Thumbnail Preview",
              "User Permission Role Matrix with Toggle Checkboxes"
            ],
            default: "Interactive Billing Usage Meter & Plan Upgrade Card"
          },
          {
            name: "Props Interface",
            label: "Configurable Props",
            options: [
              "Current usage integer, monthly limit integer, tier name, onUpgrade callback",
              "Events array, filter callback, date range picker value, onExport callback",
              "Accepted file types array, max size in MB, onUploadComplete handler, uploadProgress state",
              "Roles array, permissions matrix object, onRoleChange handler, isSaving boolean"
            ],
            default: "Current usage integer, monthly limit integer, tier name, onUpgrade callback"
          },
          {
            name: "Dependency Footprint",
            label: "External Packages",
            options: [
              "Pure shadcn/ui primitives + lucide-react exclusively (zero additional npm packages)",
              "shadcn/ui + framer-motion for smooth entrance transitions",
              "shadcn/ui + date-fns for timezone-aware formatting",
              "shadcn/ui + recharts for embedded sparkline trends"
            ],
            default: "Pure shadcn/ui primitives + lucide-react exclusively (zero additional npm packages)"
          }
        ],
        template: `You are generating an official shadcn/ui registry block for: [Registry Block Target].

### Packaging Requirements:
- Target: Compatible with 'npx shadcn@latest add' CLI import.
- Dependencies: [Dependency Footprint].
- Interface: Export a strongly-typed React component accepting: [Props Interface].
- Structure: Separate presentation components from mock fixtures so the component is immediately plug-and-play in any Next.js codebase.

Output the complete, self-contained TypeScript file with strict prop typing and accessible ARIA attributes.`,
        expectedOutput: `import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, AlertTriangle } from "lucide-react";

export interface BillingUsageCardProps {
  currentUsage: number;
  monthlyLimit: number;
  tierName: string;
  onUpgrade?: () => void;
  className?: string;
}

export function BillingUsageCard({
  currentUsage,
  monthlyLimit,
  tierName = "Starter",
  onUpgrade,
  className
}: BillingUsageCardProps) {
  const percentage = Math.min(Math.round((currentUsage / monthlyLimit) * 100), 100);
  const isNearLimit = percentage >= 85;
  ...`
      },
      conceptGuide: {
        title: "Modern Code Distribution via Open Component Registries",
        overview: "The traditional approach to sharing React code was publishing compiled npm packages. However, npm packages abstract markup behind closed node_modules boundaries, making custom CSS tweaks, accessibility adjustments, and design system overrides frustrating. The shadcn registry model revolutionized code distribution by treating code as copyable, inspectable source text. When you invoke `npx shadcn add` on a v0 URL, the CLI treats v0 as an on-demand ephemeral registry. It fetches raw source code, dynamically rewrites `@/components` path aliases to match your local tsconfig.json, and installs necessary dependencies directly into your project.",
        keyPoints: [
          "**Source Ownership:** Code resides directly in your repository, granting full freedom to refactor markup and styles without library hacks.",
          "**Automated Dependency Trees:** The CLI parses AST import declarations to identify missing Radix primitives and triggers automated package installs.",
          "**Path Alias Normalization:** The tool automatically adapts imports to match whether your project uses `@/` or `~/` module resolution."
        ]
      },
      learning: {
        resources: [
          {
            title: "shadcn CLI Block Registry Specifications & Architecture",
            url: "https://ui.shadcn.com/docs/registry",
            type: "Official Docs"
          },
          {
            title: "Vercel v0 Command Line Integration & Sharing Guide",
            url: "https://v0.dev/docs#cli",
            type: "Official Docs"
          },
          {
            title: "Next.js App Router Architecture & Path Alias Conventions",
            url: "https://nextjs.org/docs/app/building-your-application/configuring/typescript",
            type: "Guide"
          },
          {
            title: "TypeScript AST Parsing & Automated Code Scaffolding Patterns",
            url: "https://www.typescriptlang.org/docs/handbook/compiler-exports.html",
            type: "Component Spec"
          }
        ]
      }
    },
    {
      id: "step-4",
      stepNumber: 4,
      phaseId: "phase-2",
      title: "Instant Full-Stack Scaffolding in WebContainers",
      timeEstimate: "3-4 days",
      difficulty: "Beginner",
      summary: "Harness StackBlitz WebContainers inside Bolt.new to spin up complete browser-native Node.js execution environments with live server reloading in seconds.",
      description: "Traditional local web development requires installing Node.js, configuring npm/pnpm, setting up bundlers like Vite, and troubleshooting local environment discrepancies. Bolt.new revolutionized this by embedding StackBlitz WebContainers directly into the browser. WebContainers execute a full POSIX-compliant Node.js runtime inside a WebAssembly sandbox, allowing Bolt to run `vite dev`, execute shell commands, manage npm packages, and hot-reload React/Next.js/Remix applications entirely client-side. Mastering Bolt.new means understanding how to prompt its full-stack container to install real npm packages, configure routing frameworks, and establish initial state stores.",
      playbook: {
        setup: "Navigate to Bolt.new in a modern Chromium browser with WebAssembly and WebWorker support enabled.",
        execute: "Provide a comprehensive scaffolding prompt: 'Build a full-stack modern task tracker using Vite, React, Tailwind CSS, and Lucide React. Set up React Router for navigation with three pages: Dashboard, Project Tasks, and Settings. Store all tasks in a local Zustand store with persistent localStorage sync.'",
        verify: "Confirm that Bolt's container terminal runs `npm install`, launches the Vite dev server on port 5173, and renders the working interactive app in the live preview pane within 30 seconds."
      },
      tools: [
        {
          name: "Bolt.new",
          type: "Freemium",
          url: "https://bolt.new",
          description: "Browser-native AI software engineering sandbox powered by WebContainers and Claude.",
          bestFor: "Instant full-stack application scaffolding in browser"
        },
        {
          name: "StackBlitz WebContainers",
          type: "Free",
          url: "https://webcontainers.io",
          description: "WebAssembly-based operating system running Node.js securely inside web browsers.",
          bestFor: "Client-side Node.js runtime & package management"
        },
        {
          name: "Vite",
          type: "Free",
          url: "https://vite.dev",
          description: "Next-generation frontend tooling providing ultra-fast hot module replacement.",
          bestFor: "Rapid local and sandbox bundler execution"
        }
      ],
      callouts: {
        mistake: "Reloading or closing the browser tab before Bolt completes file writes, corrupting the WebContainer virtual filesystem.",
        proTip: "Keep the built-in terminal pane open during scaffolding to observe live `npm install` progress and spot native package build failures early.",
        mistakes: [
          "Requesting native C++ binary packages (like old canvas or sqlite3 binaries) that cannot compile inside WebContainers.",
          "Writing monolithic single-file applications in Bolt instead of instructing the agent to structure modular folders (`/components`, `/hooks`, `/store`).",
          "Ignoring browser memory limits when generating heavy client-side image processing tools."
        ],
        proTips: [
          "Instruct Bolt to use lightweight state libraries like `zustand` rather than heavy Redux boilerplate for cleaner code generation.",
          "Use the 'Download Project' button to snapshot a zip backup of your working codebase at major functional milestones.",
          "If Vite dev server hangs, use the built-in container terminal to run `killall node` and restart `npm run dev`."
        ]
      },
      promptLab: {
        title: "Full-Stack WebContainer Scaffold & Store Generator",
        description: "Scaffold complete, multi-route web applications in Bolt.new with clean folder structures, routing, and persistent state.",
        variables: [
          {
            name: "App Architecture",
            label: "Application Scope",
            options: [
              "Kanban Project Management Board with Drag-and-Drop",
              "AI Document Editor with Real-Time Markdown Preview",
              "Personal CRM with Interaction History & Contact Scoring",
              "E-Commerce Product Catalog with Cart & Checkout Simulator"
            ],
            default: "Kanban Project Management Board with Drag-and-Drop"
          },
          {
            name: "Routing & State",
            label: "State & Navigation",
            options: [
              "React Router v6 + Zustand store with localStorage persistence",
              "Next.js App Router file-based routes + React Context API",
              "TanStack Router + TanStack Query with mock API delay simulation",
              "Single-page tabbed interface with lightweight useReducer state"
            ],
            default: "React Router v6 + Zustand store with localStorage persistence"
          },
          {
            name: "Component Library",
            label: "Styling & UI Kit",
            options: [
              "Tailwind CSS v3 + Lucide Icons + @hello-pangea/dnd for drag-and-drop",
              "Tailwind CSS + shadcn/ui component primitives + Radix UI",
              "Tailwind CSS + Headless UI + clsx/tailwind-merge utilities",
              "Minimalist Tailwind CSS with custom CSS variable color themes"
            ],
            default: "Tailwind CSS v3 + Lucide Icons + @hello-pangea/dnd for drag-and-drop"
          }
        ],
        template: `Initialize a complete full-stack web application in Bolt.new:

### Core Concept: [App Architecture]
### Technical Stack:
- Framework: Vite + React (TypeScript)
- Navigation & State: [Routing & State]
- Styling: [Component Library]

### File Structure Requirements:
1. 'src/types/index.ts' for shared data models.
2. 'src/store/useStore.ts' containing state management actions and local storage syncing.
3. 'src/components/' for modular UI components (Header, Sidebar, Column, Card, Modal).
4. 'src/pages/' for distinct route views.

Ensure all npm dependencies are properly configured in package.json and verify the app compiles with zero TypeScript errors.`,
        expectedOutput: `// package.json dependencies generated by Bolt:
{
  "name": "kanban-flow",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.0",
    "zustand": "^4.5.5",
    "lucide-react": "^0.439.0",
    "@hello-pangea/dnd": "^16.6.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.2"
  },
  "devDependencies": {
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.45",
    "tailwindcss": "^3.4.11",
    "typescript": "^5.5.3",
    "vite": "^5.4.3"
  }
}`
      },
      conceptGuide: {
        title: "How WebContainers Execute True Node.js in the Browser",
        overview: "Before WebContainers, browser-based coding tools relied on remote virtual machines running in cloud datacenters (like AWS EC2), introducing latency, high server costs, and cold-start delays. WebContainers execute a complete POSIX-compliant operating system directly inside the browser using WebAssembly. The Node.js runtime, V8 JavaScript engine, virtual filesystem, and TCP/IP networking stack are compiled to Wasm. When Bolt runs `npm install`, packages are downloaded into an in-memory virtual filesystem and executed locally on the client's CPU with zero server latency.",
        keyPoints: [
          "**Zero Server Cold Starts:** Dev servers boot in under 500ms because computation happens directly on the client machine.",
          "**Secure Sandboxing:** The filesystem is isolated in browser memory, eliminating the risk of rogue scripts damaging the host operating system.",
          "**True Node.js Ecosystem:** Supports native npm package resolution, ES module bundling, and local dev server port multiplexing."
        ]
      },
      learning: {
        resources: [
          {
            title: "StackBlitz WebContainers Architecture & Technology Deep Dive",
            url: "https://webcontainers.io/guides/introduction",
            type: "Official Docs"
          },
          {
            title: "Bolt.new Documentation & Workflow Guide",
            url: "https://bolt.new",
            type: "Official Docs"
          },
          {
            title: "Vite Development Server Architecture & Hot Module Replacement",
            url: "https://vite.dev/guide/why.html",
            type: "Guide"
          },
          {
            title: "Zustand State Management Patterns & Middleware Specification",
            url: "https://zustand.docs.pmnd.rs/getting-started/introduction",
            type: "Component Spec"
          }
        ]
      }
    },
    {
      id: "step-5",
      stepNumber: 5,
      phaseId: "phase-2",
      title: "Surgical Visual Edits, Element Targeting & Token Locking",
      timeEstimate: "3-4 days",
      difficulty: "Intermediate",
      summary: "Perform localized visual refinements using Lovable and Bolt's interactive element selectors without triggering destructive full-file regenerations.",
      description: "One of the most dangerous failure modes in AI app builders is the 'regeneration cascade': you ask for a minor button color change, and the AI rewires the entire component, accidentally breaking working business logic, deleting event handlers, and corrupting layouts. Modern tools like Lovable provide visual inspection tools that allow developers to click directly on a rendered DOM element in the live preview. The tool locates the exact line of JSX responsible for that element, feeding only that isolated code snippet to the LLM. Mastering this technique enables surgical styling tweaks, typography adjustments, and padding fixes with zero regression risk.",
      playbook: {
        setup: "In the Lovable or Bolt live preview pane, activate the 'Visual Inspector' or 'Select Element' pointer tool.",
        execute: "Click directly on the target element (e.g. the primary hero call-to-action button). In the contextual prompt bubble, enter your surgical instruction: 'Change background to emerald-500, add shadow-lg shadow-emerald-500/20, increase padding to px-6 py-3, and change font to medium.'",
        verify: "Confirm that only the specific button's className is modified in git diff, and all surrounding form inputs and submission listeners remain untouched."
      },
      tools: [
        {
          name: "Lovable Visual Editor",
          type: "Freemium",
          url: "https://lovable.dev",
          description: "Click-to-edit DOM inspector that maps rendered elements directly to underlying React components.",
          bestFor: "Surgical visual element editing without code regression"
        },
        {
          name: "Bolt Inspector",
          type: "Freemium",
          url: "https://bolt.new",
          description: "Live preview inspector for pinpointing React component hierarchies in WebContainers.",
          bestFor: "Inspecting component boundaries & DOM trees"
        },
        {
          name: "Figma",
          type: "Freemium",
          url: "https://figma.com",
          description: "Industry-standard collaborative design tool for extracting exact pixel values and spacing.",
          bestFor: "Design token reference & spacing specs"
        }
      ],
      callouts: {
        mistake: "Submitting general conversational requests ('make this screen look cooler') that prompt the AI to rewrite 500 lines of working application code.",
        proTip: "Use the visual selector to isolate single elements, and always formulate prompts with exact Tailwind classes rather than subjective adjectives.",
        mistakes: [
          "Failing to review the generated code diff before accepting visual changes in Lovable.",
          "Targeting a parent container when only a child element's margin needed adjustment, breaking grid alignments.",
          "Overriding global theme tokens on individual elements instead of editing the centralized `tailwind.config.js` or `index.css`."
        ],
        proTips: [
          "Instruct the AI: 'Modify ONLY the className string on line 42; do NOT rewrite any functions or state hooks.'",
          "Use browser DevTools inspect mode alongside the builder to test Tailwind classes live in the browser DOM before prompting.",
          "Group related visual edits together: select the card header, body, and footer in sequence rather than making single-pixel requests."
        ]
      },
      promptLab: {
        title: "Surgical Element Refinement & Token Constraint Prompt",
        description: "Direct the AI builder to alter exact element styles while strictly forbidding modifications to surrounding component logic.",
        variables: [
          {
            name: "Target Element",
            label: "Element Selector",
            options: [
              "Primary Call-to-Action Checkout Button",
              "Metric Card KPI Number & Trend Percentage Badge",
              "Navigation Bar User Avatar Dropdown Trigger",
              "Empty State Illustration Container & Helper Text"
            ],
            default: "Primary Call-to-Action Checkout Button"
          },
          {
            name: "Desired Refinement",
            label: "Styling Modification",
            options: [
              "Upgrade to sleek gradient background (from-emerald-500 to-teal-600) with subtle glow and active press scale (active:scale-95)",
              "Increase typographic weight to font-bold text-3xl, add tabular-nums for numeric alignment, and change positive badge to emerald-500/10",
              "Add 1px border-slate-700/60, soft backdrop-blur-md, smooth hover transition, and ring-offset-slate-950 focus outline",
              "Center layout with max-w-sm, muted text-slate-400, dashed border-slate-800, and rounded-2xl padding p-8"
            ],
            default: "Upgrade to sleek gradient background (from-emerald-500 to-teal-600) with subtle glow and active press scale (active:scale-95)"
          },
          {
            name: "Safety Constraint",
            label: "Regression Guard",
            options: [
              "STRICT CONSTRAINT: Modify ONLY className attributes. Do NOT touch onClick handlers, state hooks, or component interfaces.",
              "STRICT CONSTRAINT: Keep all component props identical. Only replace internal Tailwind utility classes.",
              "STRICT CONSTRAINT: Do not regenerate this file. Return only the modified JSX element node."
            ],
            default: "STRICT CONSTRAINT: Modify ONLY className attributes. Do NOT touch onClick handlers, state hooks, or component interfaces."
          }
        ],
        template: `Target Element: [Target Element]

### Requested Change:
Apply the following styling update: [Desired Refinement]

### Non-Destructive Guardrails:
[Safety Constraint]

Verify that all existing TypeScript props, event handlers, and data bindings remain 100% functional.`,
        expectedOutput: `// Surgical diff applied to Button element:
// Before:
// <button onClick={handleCheckout} className="bg-blue-600 text-white p-2 rounded">
//   Checkout
// </button>

// After:
<button 
  onClick={handleCheckout} 
  disabled={isLoading}
  className="relative inline-flex items-center justify-center px-6 py-3 font-medium text-white transition-all duration-200 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-lg shadow-emerald-500/20 hover:from-emerald-600 hover:to-teal-700 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
>
  {isLoading ? <Spinner className="w-4 h-4 mr-2 animate-spin" /> : null}
  <span>Complete Checkout</span>
</button>`
      },
      conceptGuide: {
        title: "AST-Level Surgical Patching vs. Full-File Re-generation",
        overview: "When an LLM regenerates an entire 300-line React file to change a single CSS class, it must sample hundreds of tokens. Due to the stochastic nature of autoregressive generation, there is a statistical certainty that unrelated code will subtly change: an edge case in an if-statement gets omitted, a TypeScript generic gets simplified, or an event listener gets unhooked. Modern AI coding interfaces implement Abstract Syntax Tree (AST) patching. The tool locates the target node in the JSX tree, extracts its AST path, prompts the LLM to rewrite only that subtree, and splices the resulting node back into the file without touching surrounding logic.",
        keyPoints: [
          "**Token Budget Efficiency:** Modifying an isolated 10-line JSX node consumes 95% fewer tokens than regenerating a 400-line file.",
          "**Deterministic Reliability:** Preserves crucial business logic, memoization (`useMemo`, `useCallback`), and custom hooks.",
          "**Clean Version Control:** Produces concise, human-readable 2-line git diffs instead of massive file rewrites that confound team reviews."
        ]
      },
      learning: {
        resources: [
          {
            title: "Lovable Visual Editor & Click-to-Target Documentation",
            url: "https://docs.lovable.dev/features/visual-editor",
            type: "Official Docs"
          },
          {
            title: "Tailwind CSS Utility-First Styling & Arbitrary Value Syntax",
            url: "https://tailwindcss.com/docs/utility-first",
            type: "Official Docs"
          },
          {
            title: "React Virtual DOM Reconciliation & AST Node Tree Concepts",
            url: "https://react.dev/learn/preserving-and-resetting-state",
            type: "Guide"
          },
          {
            title: "Chrome DevTools Elements Inspection & CSS Rule Overriding",
            url: "https://developer.chrome.com/docs/devtools/css",
            type: "Component Spec"
          }
        ]
      }
    },
    {
      id: "step-6",
      stepNumber: 6,
      phaseId: "phase-2",
      title: "Protecting Files & Preventing Destructive AI Regressions",
      timeEstimate: "3-4 days",
      difficulty: "Intermediate",
      summary: "Implement file locking mechanisms and maintain persistent project knowledge bases (`knowledge.md`) to immunize working code against AI amnesia.",
      description: "As generative web apps grow beyond 10 components, LLM context windows become crowded with conversational history. When an agent is asked to implement a new feature on page 4, it may hallucinate changes to page 1 or revert previously established architectural decisions. Professional builders protect their codebases using two complementary strategies: file-level locking and persistent knowledge files (`knowledge.md` or `.rules`). By explicitly declaring protected core files (such as database client initializations and auth providers) and storing key architectural rules in the project root, the agent is forced to respect project boundaries on every single turn.",
      playbook: {
        setup: "Create a `knowledge.md` file in the root of your Lovable or Bolt project detailing system boundaries, core packages, and protected directory paths.",
        execute: "In Bolt, use the lock icon next to working files (e.g. `src/lib/supabase.ts`, `src/store/useStore.ts`) to mark them read-only. In Lovable, add explicit rules: 'Rule 1: NEVER modify files in `src/components/ui/` unless explicitly requested. Rule 2: Always use the existing `useAuth` hook for user state.'",
        verify: "Prompt the builder to implement a complex feature. Verify that locked files are untouched in the diff log and the agent references conventions established in `knowledge.md`."
      },
      tools: [
        {
          name: "Bolt File Locking",
          type: "Freemium",
          url: "https://bolt.new",
          description: "Visual file-locking mechanism that prevents the AI agent from writing to specified files.",
          bestFor: "Preventing accidental regressions in critical files"
        },
        {
          name: "Lovable Knowledge File",
          type: "Freemium",
          url: "https://docs.lovable.dev",
          description: "Persistent project memory system that injects architectural rules into every agent prompt.",
          bestFor: "Enforcing architectural guidelines & conventions"
        },
        {
          name: "Git Version Control",
          type: "Free",
          url: "https://git-scm.com",
          description: "Distributed version control system providing atomic commit snapshots and rollback safety.",
          bestFor: "Reverting destructive AI hallucinations cleanly"
        }
      ],
      callouts: {
        mistake: "Allowing the AI agent full write permissions across all project files throughout a 2-hour build session, leading to silent breakage in previously verified features.",
        proTip: "Lock core files as soon as they pass verification: database clients, auth providers, router definitions, and base UI primitives should be made read-only early.",
        mistakes: [
          "Writing a 2,000-word `knowledge.md` file that exhausts the agent's context budget on every request.",
          "Failing to commit clean milestones to git before prompting the AI to execute large refactors.",
          "Allowing the AI to generate duplicate utility functions (e.g., multiple date formatters) because existing helpers were hidden from context."
        ],
        proTips: [
          "Keep `knowledge.md` under 400 words: use concise bullet points covering Tech Stack, State Management, Styling Tokens, and Never-Do rules.",
          "Add a dedicated 'Known Bugs' section to `knowledge.md` so the AI avoids repeating failed implementation attempts.",
          "When an agent makes an unwanted edit to a locked file, immediately revert the commit and strengthen the rule in `knowledge.md`."
        ]
      },
      promptLab: {
        title: "Project Architectural Boundary & Knowledge File Architect",
        description: "Generate a compact, battle-tested `knowledge.md` configuration file to lock in conventions and prevent generative regressions.",
        variables: [
          {
            name: "Tech Stack Specification",
            label: "Core Stack",
            options: [
              "Vite + React 18 + TypeScript + Tailwind CSS v3 + Zustand + Lucide Icons",
              "Next.js 15 (App Router) + TypeScript + Tailwind CSS + shadcn/ui + Supabase",
              "Remix / React Router v7 + Tailwind CSS + Prisma + SQLite",
              "Vue 3 + Vite + Tailwind CSS + Pinia + Radix Vue"
            ],
            default: "Next.js 15 (App Router) + TypeScript + Tailwind CSS + shadcn/ui + Supabase"
          },
          {
            name: "Protected Core Paths",
            label: "Read-Only Directories",
            options: [
              "src/lib/supabase.ts, src/components/ui/*, src/hooks/useAuth.ts",
              "src/store/*, src/api/client.ts, tailwind.config.js",
              "src/db/schema.ts, src/middleware.ts, src/types/*",
              "src/context/AuthContext.tsx, src/lib/stripe.ts, globals.css"
            ],
            default: "src/lib/supabase.ts, src/components/ui/*, src/hooks/useAuth.ts"
          },
          {
            name: "Anti-Regression Rules",
            label: "Strict Boundaries",
            options: [
              "NEVER install new npm packages without asking. NEVER rewrite working authentication logic. Always use existing custom hooks.",
              "NEVER use arbitrary CSS hex codes. Always use Tailwind theme tokens. Do NOT delete comments or TypeScript interfaces.",
              "NEVER create duplicate utility functions. Check `src/lib/utils.ts` first before writing any formatting helpers."
            ],
            default: "NEVER install new npm packages without asking. NEVER rewrite working authentication logic. Always use existing custom hooks."
          }
        ],
        template: `Create a production-grade 'knowledge.md' project specification for an AI-assisted codebase:

### Application Profile:
- Core Stack: [Tech Stack Specification]
- Protected Files: [Protected Core Paths]
- Strict Boundary Rules: [Anti-Regression Rules]

Format the file in clean, concise markdown optimized for high-priority LLM system prompt injection. Keep total length under 350 words.`,
        expectedOutput: `# Project Architecture & AI Boundary Rules

## Core Technology Stack
- Framework: Next.js 15 (App Router, React 19, TypeScript)
- Styling: Tailwind CSS v3 + shadcn/ui primitives (Radix UI)
- Backend: Supabase (Postgres, Auth, Edge Functions)
- State: React Context + Server Actions (no Redux/MobX)
- Icons: \`lucide-react\` exclusively

## Protected Files & Directories (READ ONLY)
The following files are verified production code. Do NOT modify them unless explicitly commanded:
- \`src/lib/supabase.ts\` (Supabase client initialization)
- \`src/components/ui/*\` (Core shadcn/ui primitives)
- \`src/hooks/useAuth.ts\` (Authentication lifecycle hook)
- \`src/types/database.types.ts\` (Generated Supabase schema types)

## Strict Operational Rules
1. **Never Re-invent Utilities:** Check \`src/lib/utils.ts\` for existing \`cn()\`, date, and currency formatters before writing new helpers.
2. **Design Tokens Only:** Never write arbitrary hex values (e.g. \`#3b82f6\`). Use semantic Tailwind tokens (\`bg-primary\`, \`text-muted-foreground\`).
3. **No Unapproved Packages:** Never run \`npm install\` for external packages without user consent.
4. **Surgical Diffs:** When editing a component, alter only the target feature. Never rewrite untouched functions or event handlers.`
      },
      conceptGuide: {
        title: "Mitigating LLM Context Drift and Catastrophic Forgetting",
        overview: "As conversational sessions with AI agents lengthen, older context is compressed or discarded to stay within token limits. This context degradation causes catastrophic forgetting: the agent forgets that it already configured authentication, assumes a missing database table, and overwrites working code with hallucinated mock logic. Persistent knowledge injection solves this by automatically appending a standardized markdown manifest to the system prompt of every request. Regardless of session length, the model is continually reminded of project rules, verified file boundaries, and protected modules.",
        keyPoints: [
          "**Static Anchor vs. Dynamic History:** Knowledge files act as an immutable architectural anchor that outlives ephemeral conversational messages.",
          "**Explicit Negative Constraints:** Models adhere to capitalized negative rules (e.g., 'NEVER modify files in `/ui`') with 4x higher compliance than polite hints.",
          "**Deterministic File Integrity:** Physical file locking in WebContainers intercepts write calls at the virtual filesystem level, physically blocking regressions."
        ]
      },
      learning: {
        resources: [
          {
            title: "Lovable Project Rules & Knowledge File Documentation",
            url: "https://docs.lovable.dev/features/project-rules",
            type: "Official Docs"
          },
          {
            title: "Prompt Engineering System Instructions & Boundary Priming",
            url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/system-prompts",
            type: "Official Docs"
          },
          {
            title: "Git Clean Commit Strategies & Interactive Rebase Recovery",
            url: "https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History",
            type: "Guide"
          },
          {
            title: "Context Window Degradation & Attention Sink Research (arXiv)",
            url: "https://arxiv.org/abs/2309.17453",
            type: "Component Spec"
          }
        ]
      }
    },
    {
      id: "step-7",
      stepNumber: 7,
      phaseId: "phase-3",
      title: "One-Click Supabase Integration (Postgres Schema & Auth)",
      timeEstimate: "3-4 days",
      difficulty: "Intermediate",
      summary: "Connect browser app builders directly to live Supabase Postgres databases to automate schema generation, SQL migrations, and email/social auth flows.",
      description: "Frontend-only prototypes fail the moment users need to persist real data or log into their accounts. Modern AI app builders like Lovable feature native one-click integrations with Supabase. Rather than manually writing SQL tables and configuring foreign keys in a separate database dashboard, you can prompt the AI in natural language: 'Connect to Supabase, create a projects table with user ownership, and set up an authentication flow with email sign-up and password reset.' The builder connects via OAuth, executes migrations on your Postgres instance, and writes typed Supabase client code directly into your repository.",
      playbook: {
        setup: "In Lovable or Bolt, click the 'Connect Supabase' button and authenticate with your Supabase account, selecting or creating a new cloud project.",
        execute: "Prompt the builder: 'Generate a normalized relational schema for our task manager: `workspaces`, `projects`, and `tasks`. Link `tasks` to `projects` via `project_id (UUID)` with cascading deletes. Link all tables to `auth.users` via `user_id`. Add an Email + Password sign-in/sign-up dialog with input validation.'",
        verify: "Open your Supabase Cloud dashboard and verify that the tables appear in the Table Editor with appropriate primary keys, foreign keys, and indexes. Test signing up a new test user through the builder's live preview."
      },
      tools: [
        {
          name: "Lovable + Supabase Integration",
          type: "Freemium",
          url: "https://lovable.dev",
          description: "Native cloud connector that enables Lovable to run automated SQL migrations and manage schemas.",
          bestFor: "One-click database scaffolding & live auth wiring"
        },
        {
          name: "Supabase",
          type: "Freemium",
          url: "https://supabase.com",
          description: "Open-source Firebase alternative featuring managed PostgreSQL, Auth, and Edge Functions.",
          bestFor: "Production Postgres database & user management"
        },
        {
          name: "Supabase Auth",
          type: "Free",
          url: "https://supabase.com/docs/guides/auth",
          description: "Complete user authentication system with email/password, magic links, and OAuth providers.",
          bestFor: "Secure session management & JWT verification"
        }
      ],
      callouts: {
        mistake: "Allowing the AI builder to store user passwords or mock authentication tokens in client-side localStorage instead of using true Supabase Auth sessions.",
        proTip: "Ask the builder to export the generated SQL migration script so you have a reproducible `supabase/migrations/001_initial_schema.sql` file in your repository.",
        mistakes: [
          "Failing to add foreign key constraints with `ON DELETE CASCADE`, leaving orphaned records in the database.",
          "Using auto-incrementing integer IDs instead of standard UUIDv4 (`gen_random_uuid()`) for primary keys.",
          "Hardcoding the Supabase URL and Anon Key into client components instead of referencing `.env` variables."
        ],
        proTips: [
          "Instruct the AI to generate Supabase TypeScript types automatically: `supabase gen types typescript --project-id ... > src/types/database.types.ts`.",
          "Ask the builder to create an `on_auth_user_created` Postgres trigger that automatically populates a public `profiles` table whenever a new user registers.",
          "Test session restoration by refreshing the live preview page to ensure `supabase.auth.onAuthStateChange` correctly restores user state."
        ]
      },
      promptLab: {
        title: "Relational Postgres Schema & Auth Flow Prompt Architect",
        description: "Direct AI builders to generate normalized SQL migrations and integrate production Supabase Auth flows.",
        variables: [
          {
            name: "App Domain",
            label: "Product Domain",
            options: [
              "SaaS B2B Organization & Team Member Management",
              "Multi-Tenant Support Ticketing & Messaging System",
              "AI Document Collaboration & Prompt Versioning Hub",
              "E-Commerce Order Management & Inventory Tracking"
            ],
            default: "SaaS B2B Organization & Team Member Management"
          },
          {
            name: "Data Entities",
            label: "Database Tables",
            options: [
              "organizations (id, name, slug, created_at), memberships (org_id, user_id, role), invites (email, token, role)",
              "tickets (id, customer_id, title, status, priority), comments (ticket_id, author_id, body), attachments (file_url)",
              "documents (id, owner_id, title, content_json), versions (doc_id, version_num, snapshot), shares (doc_id, email, permission)",
              "products (id, name, sku, price_cents, stock), orders (id, customer_id, total, status), order_items (order_id, product_id, qty)"
            ],
            default: "organizations (id, name, slug, created_at), memberships (org_id, user_id, role), invites (email, token, role)"
          },
          {
            name: "Authentication Strategy",
            label: "Auth Implementation",
            options: [
              "Email/Password + Google OAuth with automatic profile creation trigger and email confirmation check",
              "Passwordless Magic Link email authentication with 6-digit OTP fallback",
              "Email/Password with role-based redirection (admin vs. member) on successful session",
              "Supabase SSR auth helper with middleware cookie session validation for Next.js"
            ],
            default: "Email/Password + Google OAuth with automatic profile creation trigger and email confirmation check"
          }
        ],
        template: `You are a Senior Backend Engineer configuring Supabase for: [App Domain].

### Schema Requirements:
Create a normalized PostgreSQL migration for the following entities:
[Data Entities]

### Rules for SQL Migration:
1. Use UUID primary keys: 'id UUID PRIMARY KEY DEFAULT gen_random_uuid()'.
2. Link user ownership to 'auth.users(id)' on delete cascade.
3. Include 'created_at TIMESTAMPTZ NOT NULL DEFAULT now()' and 'updated_at' triggers on all tables.
4. Add indexes on all foreign key columns.

### Frontend Auth Requirements:
Implement: [Authentication Strategy] using the official '@supabase/supabase-js' client. Include complete error handling for invalid credentials and duplicate emails.`,
        expectedOutput: `-- SQL Migration generated by Supabase integration:
CREATE TABLE public.organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.memberships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('owner', 'admin', 'member')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(organization_id, user_id)
);

CREATE INDEX idx_memberships_org ON public.memberships(organization_id);
CREATE INDEX idx_memberships_user ON public.memberships(user_id);`
      },
      conceptGuide: {
        title: "Relational Integrity & Schema Normalization in AI App Scaffolding",
        overview: "When novice developers use AI tools to generate backends, they frequently end up with disorganized NoSQL-style JSON blobs stored in flat tables. This creates severe performance bottlenecks, data corruption risks, and impossible reporting queries. Supabase provides enterprise-grade PostgreSQL. Professional AI scaffolding forces the model to define 3rd Normal Form (3NF) relational tables with strict foreign key constraints, column types (UUID, TIMESTAMPTZ, NUMERIC), check constraints (e.g. status enum values), and indexed foreign keys. This guarantees that your database maintains data integrity even as features scale.",
        keyPoints: [
          "**Foreign Key Cascades:** `ON DELETE CASCADE` prevents orphaned child records when parent accounts or projects are deleted.",
          "**Postgres Trigger Automation:** Automated `updated_at` triggers and user creation hooks offload critical synchronization logic from frontend code into the database kernel.",
          "**Strict Type Generation:** Extracting TypeScript interfaces directly from your Postgres schema guarantees 100% end-to-end type safety across queries."
        ]
      },
      learning: {
        resources: [
          {
            title: "Supabase Database & Postgres Schema Architecture Guide",
            url: "https://supabase.com/docs/guides/database",
            type: "Official Docs"
          },
          {
            title: "Lovable Supabase Integration & Database Migration Manual",
            url: "https://docs.lovable.dev/integrations/supabase",
            type: "Official Docs"
          },
          {
            title: "PostgreSQL Primary Keys, Foreign Keys & Constraint Specifications",
            url: "https://www.postgresql.org/docs/current/ddl-constraints.html",
            type: "Guide"
          },
          {
            title: "Supabase Auth Architecture & Session Lifecycle Manual",
            url: "https://supabase.com/docs/guides/auth/architecture",
            type: "Component Spec"
          }
        ]
      }
    },
    {
      id: "step-8",
      stepNumber: 8,
      phaseId: "phase-3",
      title: "Row-Level Security (RLS) & Secure API Key Management",
      timeEstimate: "3-4 days",
      difficulty: "Advanced",
      summary: "Enforce strict Postgres Row-Level Security policies to secure multi-tenant data, and relocate third-party API keys from client bundles into Supabase Edge Functions.",
      description: "One of the most dangerous vulnerabilities in AI-generated software is the 'open database disaster': the frontend works wonderfully, but Row-Level Security (RLS) is left disabled, allowing any user with the public Anon Key to read or delete every other user's records. Furthermore, generative models often accidentally place private OpenAI, Anthropic, or Stripe API keys directly into client-side React code. Mastering production security requires commanding the AI builder to enable RLS across every table, write strict tenant isolation policies (`auth.uid() = user_id`), and route sensitive API calls through serverless Supabase Edge Functions.",
      playbook: {
        setup: "In your Supabase SQL editor or through the AI builder prompt, ensure RLS is turned on: `ALTER TABLE tableName ENABLE ROW LEVEL SECURITY;`.",
        execute: "Prompt the builder: 'Write complete RLS policies for our `projects` and `tasks` tables. Users may only SELECT, INSERT, UPDATE, and DELETE rows where `user_id = auth.uid()`. For team projects, allow SELECT if the user exists in `memberships` for that `organization_id`. Move all OpenAI API calls into a Supabase Edge Function (`supabase/functions/generate-summary/index.ts`) using Deno and read the secret key from `Deno.env.get('OPENAI_API_KEY')`.'",
        verify: "Run an unauthorized query using a secondary test account in your browser console to verify that Supabase returns an empty array `[]` when querying records belonging to another user. Check your browser network tab to ensure secret API keys are never exposed in client payloads."
      },
      tools: [
        {
          name: "Supabase RLS",
          type: "Free",
          url: "https://supabase.com/docs/guides/database/postgres/row-level-security",
          description: "Granular SQL-based security engine executing permission checks inside the Postgres core.",
          bestFor: "Multi-tenant data isolation & unauthorized access prevention"
        },
        {
          name: "Supabase Edge Functions",
          type: "Freemium",
          url: "https://supabase.com/docs/guides/functions",
          description: "Globally distributed Deno/TypeScript serverless functions for running private backend code.",
          bestFor: "Secret API key handling & third-party webhooks"
        },
        {
          name: "OpenRouter",
          type: "Paid",
          url: "https://openrouter.ai",
          description: "Unified API gateway for frontier LLMs, ideal for secure edge proxying.",
          bestFor: "Centralized AI model access & secret token proxying"
        }
      ],
      callouts: {
        mistake: "Leaving `ENABLE ROW LEVEL SECURITY` off, exposing the entire database to anyone who opens their browser DevTools and reads your public Supabase Anon key.",
        proTip: "Remember: The Supabase `anon` key is designed to be public, but it relies ENTIRELY on RLS policies to prevent data theft. No RLS = public database.",
        mistakes: [
          "Hardcoding `NEXT_PUBLIC_STRIPE_SECRET_KEY` or `OPENAI_API_KEY` into frontend `.env` files where any user can inspect client JavaScript.",
          "Writing recursive RLS policies that query the same table indefinitely, resulting in 500 query timeout errors.",
          "Forgetting to add `WITH CHECK` clauses on INSERT and UPDATE policies, allowing users to reassign their rows to other user IDs."
        ],
        proTips: [
          "Use the helper function `auth.uid()` in Postgres to test user equality: `CREATE POLICY \"Users can view own tasks\" ON tasks FOR SELECT USING (auth.uid() = user_id);`.",
          "Store secrets securely in the Supabase CLI using `supabase secrets set OPENAI_API_KEY=sk-...` rather than checking them into git.",
          "Always write a companion policy for `DELETE` operations so users cannot accidentally purge other accounts' records."
        ]
      },
      promptLab: {
        title: "Row-Level Security Policy & Secure Edge Function Generator",
        description: "Generate ironclad PostgreSQL RLS security policies and write companion Deno Edge Functions to protect third-party API credentials.",
        variables: [
          {
            name: "Protected Resource",
            label: "Database Table",
            options: [
              "documents (user_id, team_id, title, content, is_archived)",
              "invoices (customer_id, organization_id, amount_cents, status)",
              "user_api_keys (user_id, key_hash, encrypted_secret, last_used_at)",
              "patient_records (patient_id, doctor_id, clinic_id, diagnosis)"
            ],
            default: "documents (user_id, team_id, title, content, is_archived)"
          },
          {
            name: "Access Control Model",
            label: "Authorization Rules",
            options: [
              "Individual ownership: user can perform all CRUD actions ONLY on rows where auth.uid() = user_id",
              "Multi-tenant team: user can SELECT if member of team_id, but only team admins can UPDATE or DELETE",
              "Public read / private write: anyone can SELECT published rows, but only author can UPDATE or DELETE",
              "Hierarchical role: doctors can view all patient records in their clinic_id; patients can view only their own"
            ],
            default: "Individual ownership: user can perform all CRUD actions ONLY on rows where auth.uid() = user_id"
          },
          {
            name: "Serverless Edge Task",
            label: "Edge Function Purpose",
            options: [
              "Proxy Claude 3.7 API requests with secret API key and stream markdown tokens back to client",
              "Validate Stripe webhook signature and update subscription status in database",
              "Generate signed AWS S3 upload URLs after verifying user authentication JWT",
              "Send transactional email via Resend API using server-side secret credentials"
            ],
            default: "Proxy Claude 3.7 API requests with secret API key and stream markdown tokens back to client"
          }
        ],
        template: `You are a Cybersecurity & Database Security Engineer configuring Supabase.

### Step 1: PostgreSQL Row-Level Security (RLS)
Target Table: [Protected Resource]
Authorization Logic: [Access Control Model]

Generate complete, production-grade SQL that:
1. Enables RLS on the table.
2. Creates explicit policies for SELECT, INSERT, UPDATE, and DELETE.
3. Includes 'WITH CHECK' constraints to prevent privilege escalation.

### Step 2: Secure Supabase Edge Function
Edge Function Task: [Serverless Edge Task]
Runtime: Deno / TypeScript (Supabase Edge Functions).
Requirements:
1. Verify the caller's Supabase JWT token from the Authorization header.
2. Read the secret key securely from Deno.env (never exposed to client).
3. Handle CORS preflight headers (OPTIONS).
4. Return appropriate HTTP status codes (401 Unauthorized, 500 Internal Error).`,
        expectedOutput: `-- 1. Enable Row-Level Security
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;

-- 2. SELECT Policy
CREATE POLICY "Users can view own documents" 
ON public.documents FOR SELECT 
USING (auth.uid() = user_id);

-- 3. INSERT Policy with check
CREATE POLICY "Users can create own documents" 
ON public.documents FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- 4. UPDATE Policy
CREATE POLICY "Users can update own documents" 
ON public.documents FOR UPDATE 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 5. DELETE Policy
CREATE POLICY "Users can delete own documents" 
ON public.documents FOR DELETE 
USING (auth.uid() = user_id);`
      },
      conceptGuide: {
        title: "Row-Level Security as Kernel-Level Defense in Depth",
        overview: "In conventional backend development, permission checks were written manually in application code (e.g., `if (doc.userId !== currentUser.id) return res.status(403)`). If a developer forgot this check on a single API endpoint, an attacker could access the entire database. Supabase leverages PostgreSQL's native Row-Level Security (RLS). RLS executes permission predicates directly inside the database query planner. When a client performs `supabase.from('documents').select('*')`, Postgres rewrites the query internally to include `WHERE auth.uid() = user_id`. Even if frontend code is compromised or manipulated, unauthorized rows are physically filtered out before leaving the database engine.",
        keyPoints: [
          "**Database-Enforced Access Control:** Security rules cannot be bypassed by manipulating client-side state or crafting malicious API requests.",
          "**Zero Secret Leakage:** Client applications communicate exclusively using restricted public keys (`anon`), while secret operations run inside Edge Functions.",
          "**JWT Identity Context:** The database kernel extracts the user's cryptographically verified UUID directly from the Supabase JWT claims token."
        ]
      },
      learning: {
        resources: [
          {
            title: "Supabase Row-Level Security (RLS) Complete Guide & Policy Examples",
            url: "https://supabase.com/docs/guides/database/postgres/row-level-security",
            type: "Official Docs"
          },
          {
            title: "Supabase Edge Functions Deno Runtime & Secret Storage Guide",
            url: "https://supabase.com/docs/guides/functions",
            type: "Official Docs"
          },
          {
            title: "OWASP Top 10 API Security Risks - Broken Object Level Authorization",
            url: "https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/",
            type: "Guide"
          },
          {
            title: "PostgreSQL Policy Command Reference & Security Architecture",
            url: "https://www.postgresql.org/docs/current/sql-createpolicy.html",
            type: "Component Spec"
          }
        ]
      }
    },
    {
      id: "step-9",
      stepNumber: 9,
      phaseId: "phase-3",
      title: "Integrating Stripe Billing, Resend Emails & External APIs",
      timeEstimate: "3-4 days",
      difficulty: "Advanced",
      summary: "Wire monetization and notification infrastructure by prompting AI builders to configure Stripe Checkout, webhook verification, and Resend transactional emails.",
      description: "A prototype transforms into a viable commercial software product when it can collect recurring revenue and engage users via email. Modern app builders like Lovable and Bolt excel at scaffolding external integrations when guided with precise webhook contracts. In this step, you will prompt the builder to integrate Stripe Checkout for subscription billing (Starter vs. Pro tier), scaffold a secure Supabase Edge Function to verify incoming `stripe-signature` webhooks, update user subscription status in Postgres, and trigger welcome emails using the Resend API.",
      playbook: {
        setup: "Obtain test API keys from the Stripe Dashboard (`STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`) and Resend (`RESEND_API_KEY`). Store them in your Supabase project secrets.",
        execute: "Prompt the builder: 'Build a pricing table with Monthly/Annual toggles. When the user clicks Upgrade to Pro, call our `/create-checkout-session` Edge Function to redirect to Stripe Checkout. Implement a `/stripe-webhook` Edge Function that listens for `checkout.session.completed` and `customer.subscription.deleted`, updates the user's `tier` in `profiles`, and triggers a confirmation email using Resend.'",
        verify: "Run a test checkout using Stripe's 4242 test credit card. Verify that the webhook fires successfully in the Stripe Dashboard CLI, the user's database record updates to `tier: 'pro'`, and a confirmation email arrives in your Resend test inbox."
      },
      tools: [
        {
          name: "Stripe",
          type: "Paid",
          url: "https://stripe.com",
          description: "Global financial infrastructure for internet commerce, subscription billing, and payments.",
          bestFor: "Subscription billing & checkout flow"
        },
        {
          name: "Resend",
          type: "Freemium",
          url: "https://resend.com",
          description: "Modern developer-first email platform with React Email component support.",
          bestFor: "Transactional email delivery & onboarding notifications"
        },
        {
          name: "Webhook.site",
          type: "Free",
          url: "https://webhook.site",
          description: "Instant, free webhook testing and payload inspection tool.",
          bestFor: "Debugging incoming webhook payloads & headers"
        }
      ],
      callouts: {
        mistake: "Updating the user's subscription status directly in frontend client code upon redirect back from Stripe, making your app trivially vulnerable to payment bypass.",
        proTip: "Always treat Stripe client redirects as purely cosmetic: subscription upgrades must ONLY occur inside verified server-side webhook listeners.",
        mistakes: [
          "Failing to verify the raw `stripe-signature` header in your Edge Function, leaving your billing endpoint vulnerable to forged events.",
          "Forgetting to handle `customer.subscription.deleted` or `invoice.payment_failed`, giving churned users free lifetime access.",
          "Hardcoding Stripe Price IDs (`price_12345`) in multiple frontend components instead of centralizing them in a configuration file."
        ],
        proTips: [
          "Use Stripe Customer Portal (`stripe.billingPortal.sessions.create`) so users can self-manage invoices, update credit cards, and cancel plans.",
          "Use the `@react-email/components` library with Resend to write beautiful, responsive email templates in JSX directly inside your project.",
          "Always pass the Supabase `user_id` inside the Stripe Checkout `client_reference_id` parameter to make webhook reconciliation effortless."
        ]
      },
      promptLab: {
        title: "Stripe Checkout & Webhook Reconciliation Edge Function Generator",
        description: "Instruct AI builders to generate secure Stripe payment redirection flows, signed webhook handlers, and transactional email triggers.",
        variables: [
          {
            name: "Pricing Structure",
            label: "Billing Model",
            options: [
              "Freemium SaaS: Free tier (up to 3 projects) vs. Pro tier ($29/mo unlimited with priority support)",
              "Credit-based API billing: Starter ($15 for 5,000 credits) vs. Growth ($49 for 25,000 credits)",
              "Seat-based Team SaaS: $19/user/month with annual 20% discount toggle",
              "One-time Lifetime Deal: $99 early bird access with lifetime feature updates"
            ],
            default: "Freemium SaaS: Free tier (up to 3 projects) vs. Pro tier ($29/mo unlimited with priority support)"
          },
          {
            name: "Webhook Lifecycle Events",
            label: "Stripe Webhooks",
            options: [
              "checkout.session.completed, customer.subscription.updated, customer.subscription.deleted",
              "invoice.payment_succeeded, invoice.payment_failed, customer.subscription.deleted",
              "payment_intent.succeeded, charge.refunded, customer.created",
              "checkout.session.completed, customer.subscription.trial_will_end"
            ],
            default: "checkout.session.completed, customer.subscription.updated, customer.subscription.deleted"
          },
          {
            name: "Email Trigger",
            label: "Resend Notification",
            options: [
              "Send Welcome Pro email with onboarding guide and receipt summary",
              "Send Payment Failed alert with self-serve billing portal update link",
              "Send Usage Limit 90% Warning email with quick upgrade call-to-action",
              "Send Subscription Cancellation confirmation with optional exit survey link"
            ],
            default: "Send Welcome Pro email with onboarding guide and receipt summary"
          }
        ],
        template: `You are a Full-Stack Billing Architect integrating Stripe and Resend into an AI-built application.

### Business Requirements:
- Monetization Model: [Pricing Structure]
- Target Webhook Events: [Webhook Lifecycle Events]
- Notification Flow: [Email Trigger]

### Implementation Tasks:
1. Generate an Edge Function ('supabase/functions/create-checkout/index.ts') that creates a Stripe Checkout session, passing the user's UUID in 'client_reference_id'.
2. Generate an Edge Function ('supabase/functions/stripe-webhook/index.ts') that:
   - Validates the incoming raw signature with 'stripe.webhooks.constructEvent()'.
   - Handles the specified events and updates the 'profiles.subscription_tier' column in Supabase using the service_role key.
   - Calls the Resend API to deliver the transactional email template.
3. Return complete TypeScript code with defensive error logging and proper CORS headers.`,
        expectedOutput: `import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.25.0?target=deno";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { Resend } from "https://esm.sh/resend@3.2.0";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, { httpClient: Stripe.createFetchHttpClient() });
const resend = new Resend(Deno.env.get("RESEND_API_KEY")!);
const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

serve(async (req) => {
  const signature = req.headers.get("stripe-signature");
  if (!signature) return new Response("Missing signature", { status: 400 });

  const body = await req.text();
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, Deno.env.get("STRIPE_WEBHOOK_SECRET")!);
  } catch (err) {
    return new Response(\`Webhook error: \${err.message}\`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.client_reference_id;
    ...`
      },
      conceptGuide: {
        title: "Asynchronous Webhook Reconciliations & Payment Idempotency",
        overview: "When a customer completes a credit card payment on Stripe Checkout, their browser is redirected back to your application. Relying on this browser redirect to activate features is an anti-pattern: if the user closes their laptop or experiences a network drop before the return URL loads, the payment succeeds but their account is never upgraded. Webhooks solve this by having Stripe's server contact your Supabase Edge Function directly over HTTP. Because internet networks can drop or duplicate packets, production webhook handlers must be idempotent: processing the same event ID twice must never charge the user twice or corrupt their account record.",
        keyPoints: [
          "**Asynchronous Truth:** The webhook event payload is the only cryptographically verified source of truth for payment status.",
          "**Cryptographic Signature Verification:** `stripe.webhooks.constructEvent` uses a shared secret to prove the HTTP request originated from Stripe, preventing spoofing.",
          "**Idempotent Event Handling:** Storing processed Stripe event IDs in an `events_log` table prevents duplicate processing when Stripe retries deliveries."
        ]
      },
      learning: {
        resources: [
          {
            title: "Stripe Checkout & Subscription Billing Integration Guide",
            url: "https://stripe.com/docs/billing/quickstart",
            type: "Official Docs"
          },
          {
            title: "Resend Transactional Email SDK & Deno Integration Guide",
            url: "https://resend.com/docs/send-with-deno",
            type: "Official Docs"
          },
          {
            title: "Supabase Edge Functions Webhook Handling Best Practices",
            url: "https://supabase.com/docs/guides/functions/examples/stripe-webhooks",
            type: "Guide"
          },
          {
            title: "React Email Component Framework & Template Library",
            url: "https://react.email/docs/introduction",
            type: "Component Spec"
          }
        ]
      }
    },
    {
      id: "step-10",
      stepNumber: 10,
      phaseId: "phase-4",
      title: "Two-Way GitHub Synchronization & Branch Workflows",
      timeEstimate: "3-4 days",
      difficulty: "Intermediate",
      summary: "Connect browser sandboxes to GitHub repositories to alternate seamlessly between high-level visual prompting and surgical local IDE engineering in Cursor.",
      description: "Browser-based generative builders are unparalleled for scaffolding visual layouts in minutes, but they are ill-suited for deep refactoring, writing complex regex algorithms, or running local integration tests. The professional workflow is a two-way loop: scaffold the application in Lovable or Bolt, push the generated codebase to GitHub via their automated Git integrations, clone the repository locally into Cursor or VS Code, and commit custom changes. When you push commits back to GitHub, Lovable pulls the latest git tree, allowing you to resume visual canvas editing with zero synchronization loss.",
      playbook: {
        setup: "In Lovable or Bolt, click the 'Export to GitHub' or 'Sync Repository' button, authenticate your GitHub account, and create a new private repository.",
        execute: "Clone the repo locally: `git clone https://github.com/your-org/my-ai-app.git && cd my-ai-app && npm install`. Create a new git branch `feature/auth-refactor`. Open the project in Cursor, use AI Composer (`Cmd+I`) to perform deep refactoring, and commit your changes: `git push origin feature/auth-refactor`.",
        verify: "Open a Pull Request on GitHub and merge it to `main`. Return to your Lovable project tab and verify that Lovable automatically detects the new commits and refreshes its live preview with your local code changes."
      },
      tools: [
        {
          name: "GitHub",
          type: "Freemium",
          url: "https://github.com",
          description: "World-leading software development and version control platform powered by Git.",
          bestFor: "Central repository hosting & pull request workflows"
        },
        {
          name: "Lovable GitHub Sync",
          type: "Freemium",
          url: "https://docs.lovable.dev/features/github-integration",
          description: "Automated two-way GitHub repository synchronizer maintaining bidirectional code parity.",
          bestFor: "Continuous browser-to-IDE code synchronization"
        },
        {
          name: "Cursor",
          type: "Freemium",
          url: "https://cursor.com",
          description: "AI-native code editor designed for deep codebase refactoring, indexing, and terminal loops.",
          bestFor: "Deep local IDE development & complex logic wiring"
        }
      ],
      callouts: {
        mistake: "Editing the same file simultaneously in both the browser builder and your local IDE, causing painful Git merge conflicts that confound the AI agent.",
        proTip: "Establish clear workflow ownership: use the browser builder for scaffolding visual pages, then move to Cursor for backend wiring, unit testing, and edge logic.",
        mistakes: [
          "Forgetting to pull latest changes from `main` before starting a new visual prompting session in Lovable.",
          "Committing sensitive `.env` files or secret service role keys to public GitHub repositories.",
          "Bypassing branch protection rules and force-pushing over AI-generated commits."
        ],
        proTips: [
          "Configure GitHub branch protection on `main` requiring automated CI checks (linting, type checking) to pass before merging.",
          "Use Cursor's `@git` context tag in composer prompts to explain recent changes made by the browser builder.",
          "Keep commit messages descriptive: both Lovable and human teammates rely on clear commit messages to understand codebase evolution."
        ]
      },
      promptLab: {
        title: "Bidirectional Git Handoff & Merge Reconciliation Prompt",
        description: "Instruct Cursor or the browser builder on reconciling branch diffs and integrating local changes cleanly.",
        variables: [
          {
            name: "Handoff Scenario",
            label: "Sync Context",
            options: [
              "Refactoring client-side mock data to production Supabase database queries in Cursor",
              "Integrating custom Stripe webhook handlers and Edge Functions locally",
              "Adding comprehensive Vitest unit tests and Playwright end-to-end tests in IDE",
              "Resolving Tailwind CSS token conflicts between browser edits and local components"
            ],
            default: "Refactoring client-side mock data to production Supabase database queries in Cursor"
          },
          {
            name: "Branching Strategy",
            label: "Git Branching Model",
            options: [
              "Feature branch workflow with PR reviews and Squash & Merge to main",
              "Trunk-based development with direct pushes to main for rapid solo prototyping",
              "Staging branch environment with automated Vercel preview deployment checks",
              "Dual-branch setup: 'lovable-sync' for browser edits, 'main' for production code"
            ],
            default: "Feature branch workflow with PR reviews and Squash & Merge to main"
          },
          {
            name: "Quality Gate",
            label: "CI/CD Verification",
            options: [
              "Run 'npm run build' and 'tsc --noEmit' to guarantee zero TypeScript compilation errors",
              "Run ESLint, Prettier formatting, and Vitest suite before creating Pull Request",
              "Verify responsive breakpoints across mobile and desktop in local browser preview",
              "Check that no secret API keys or credentials are included in git diff"
            ],
            default: "Run 'npm run build' and 'tsc --noEmit' to guarantee zero TypeScript compilation errors"
          }
        ],
        template: `You are an Engineering Lead managing a hybrid AI-browser and local Cursor IDE workflow.

Scenario: [Handoff Scenario]
Git Model: [Branching Strategy]
Verification Requirement: [Quality Gate]

Analyze the repository structure:
1. Identify all files modified by the browser builder in the latest commit.
2. Outline the exact step-by-step terminal commands to branch, review diffs, test locally, and push back to GitHub.
3. Provide guidelines for avoiding merge conflicts when switching between the browser visual canvas and Cursor.`,
        expectedOutput: `### Hybrid Workflow Execution Protocol:

1. **Pull Latest Browser Scaffolding:**
   \`\`\`bash
   git checkout main
   git pull origin main
   git checkout -b feature/supabase-query-refactor
   \`\`\`

2. **Inspect Changed Files:**
   \`\`\`bash
   git log -n 1 --stat
   \`\`\`

3. **Refactor Mock State to Real Supabase Queries:**
   - In \`src/pages/Dashboard.tsx\`, replace \`mockMetrics\` state with \`useQuery\` calling Supabase.
   - Centralize query keys in \`src/lib/queries.ts\`.

4. **Verify TypeScript & Build Integrity:**
   \`\`\`bash
   npm run build
   npx tsc --noEmit
   \`\`\`

5. **Commit and Sync:**
   \`\`\`bash
   git add .
   git commit -m "feat(dashboard): wire real Supabase queries and typed interfaces"
   git push origin feature/supabase-query-refactor
   \`\`\`

Merge via GitHub PR into \`main\`. Lovable will automatically detect the commit and re-anchor its visual canvas on your clean code.`
      },
      conceptGuide: {
        title: "The Hybrid Development Flywheel: Web vs. Local IDEs",
        overview: "AI tooling is often falsely framed as an either/or choice: either you use high-level browser app builders (Lovable, Bolt) or low-level AI code editors (Cursor, Windsurf). Modern elite software engineers use both in a continuous flywheel. Browser sandboxes provide unmatched velocity for the first 80% of a feature: rendering visual interfaces, prototyping color themes, and scaffolding boilerplate. Local IDEs provide deep architectural control for the remaining 20%: debugging subtle race conditions, tuning database indexes, configuring CI/CD pipelines, and writing automated tests.",
        keyPoints: [
          "**Velocity Asymmetry:** Browser builders are 10x faster at layout generation; IDEs are 10x more capable at deep refactoring.",
          "**GitHub as Source of Truth:** A centralized Git repository ensures neither tool becomes a proprietary walled garden.",
          "**Atomic Commit Hygiene:** Frequent, small git commits prevent AI hallucinations from corrupting large chunks of verified functionality."
        ]
      },
      learning: {
        resources: [
          {
            title: "Lovable GitHub Two-Way Integration & Sync Documentation",
            url: "https://docs.lovable.dev/features/github-integration",
            type: "Official Docs"
          },
          {
            title: "GitHub Pull Request Best Practices & Branch Protection Guide",
            url: "https://docs.github.com/en/pull-requests",
            type: "Official Docs"
          },
          {
            title: "Cursor AI Composer & Multi-File Codebase Editing Guide",
            url: "https://docs.cursor.com/composer",
            type: "Guide"
          },
          {
            title: "Pro Git Handbook: Distributed Workflows & Rebasing Architecture",
            url: "https://git-scm.com/book/en/v2",
            type: "Component Spec"
          }
        ]
      }
    },
    {
      id: "step-11",
      stepNumber: 11,
      phaseId: "phase-4",
      title: "Debugging Hydration Errors, Infinite Loops & Dependency Conflicts",
      timeEstimate: "3-4 days",
      difficulty: "Advanced",
      summary: "Diagnose and resolve the most common AI-generated frontend bugs: React hydration mismatches, `useEffect` infinite re-render loops, and npm peer dependency clashes.",
      description: "Generative AI models frequently generate code that appears visually functional at first glance but harbors fatal runtime bugs. The three most common generative defects are: (1) React Hydration Mismatches caused by rendering client-specific values (dates, `window.innerWidth`, localStorage) during Server-Side Rendering; (2) Infinite `useEffect` re-render loops caused by missing or unstable object reference dependencies; and (3) npm peer dependency clashes when an AI blindly installs incompatible major versions of packages into WebContainers. Mastering technical debugging in AI-generated apps requires using Chrome DevTools and terminal logs to pinpoint root causes and formulate surgical corrective prompts.",
      playbook: {
        setup: "Open Chrome DevTools (Console and Network tabs) alongside your application and trigger the problematic user flow.",
        execute: "When a hydration mismatch appears ('Text content does not match server-rendered HTML'), inspect the console call stack to identify the offending component. Feed the exact console error and code snippet into Claude or Bolt: 'Fix this React hydration error in `UserGreeting.tsx`. Move date formatting or client-only values into a `useEffect` hook or wrap the component with a `dynamic(() => ..., { ssr: false })` wrapper.'",
        verify: "Refresh the browser page with DevTools Console open. Confirm that the red hydration warning disappears, network waterfall displays normal request counts without repeating loops, and all npm packages install cleanly."
      },
      tools: [
        {
          name: "Chrome DevTools",
          type: "Free",
          url: "https://developer.chrome.com/docs/devtools",
          description: "Essential browser-native suite for inspecting console logs, network calls, and React rendering.",
          bestFor: "Hydration mismatch detection & network waterfall profiling"
        },
        {
          name: "Bolt Terminal",
          type: "Freemium",
          url: "https://bolt.new",
          description: "Full WebContainer shell interface for inspecting npm dependency graphs and bundler logs.",
          bestFor: "npm peer dependency clash resolution & build logs"
        },
        {
          name: "Claude 3.7 Sonnet",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Frontier reasoning model for diagnosing complex React re-render loops and AST bugs.",
          bestFor: "Root-cause bug analysis & surgical bug-fix prompts"
        }
      ],
      callouts: {
        mistake: "Submitting vague complaints ('my app is broken') to the AI, which prompts it to rewrite random files and introduce three new bugs.",
        proTip: "Copy and paste the EXACT terminal or browser console error message into the prompt, including the line number and component name.",
        mistakes: [
          "Suppressing hydration warnings using `suppressHydrationWarning` on root divs instead of fixing the underlying client/server divergence.",
          "Passing unstable object literals or inline arrow functions inside `useEffect` dependency arrays, triggering infinite re-renders.",
          "Running `npm install --force` when peer dependencies clash, creating subtle runtime crashes in production bundles."
        ],
        proTips: [
          "Use a simple `isMounted` boolean state pattern (`const [mounted, setMounted] = useState(false); useEffect(() => setMounted(true), []);`) for client-only components.",
          "Inspect the React DevTools Profiler to catch components that re-render more than 10 times in under two seconds.",
          "Lock package versions in `package.json` with exact version numbers (removing `^` or `~`) to ensure deterministic builds in WebContainers."
        ]
      },
      promptLab: {
        title: "React Hydration Error & Infinite Loop Debugging Surgeon",
        description: "Transform cryptic React runtime errors and terminal stack traces into precise, surgical bug-fix code solutions.",
        variables: [
          {
            name: "Bug Signature",
            label: "Error Type",
            options: [
              "Hydration Error: 'Text content does not match server-rendered HTML' due to Date formatting",
              "Infinite Re-render Loop: 'Maximum update depth exceeded' inside useEffect hook",
              "npm Peer Dependency Clash: 'ERESOLVE unable to resolve dependency tree' in WebContainers",
              "Uncaught CORS Error: 'No Access-Control-Allow-Origin header is present on requested resource'"
            ],
            default: "Hydration Error: 'Text content does not match server-rendered HTML' due to Date formatting"
          },
          {
            name: "Failing Component Context",
            label: "Offending Code Block",
            options: [
              "UserActivityCard displaying 'Last logged in at: ' + new Date().toLocaleTimeString() directly in JSX",
              "SearchFilter component where useEffect fetches data and updates state on an object dependency created inline",
              "package.json attempting to install React 19 alongside older third-party component library requiring React 18",
              "Direct fetch call from browser to external API endpoint missing OPTIONS preflight response"
            ],
            default: "UserActivityCard displaying 'Last logged in at: ' + new Date().toLocaleTimeString() directly in JSX"
          },
          {
            name: "Remediation Approach",
            label: "Fix Pattern",
            options: [
              "Implement mounted lifecycle guard with skeleton loading fallback during server render",
              "Stabilize dependency references using useCallback/useMemo and primitive primitive ID dependencies",
              "Configure npm overrides in package.json or install compatible package version",
              "Proxy request through Supabase Edge Function to attach proper CORS headers"
            ],
            default: "Implement mounted lifecycle guard with skeleton loading fallback during server render"
          }
        ],
        template: `You are a Senior React & Next.js Performance Debugger.

### Problem Diagnosis:
- Error Signature: [Bug Signature]
- Problematic Code: [Failing Component Context]
- Recommended Fix: [Remediation Approach]

### Deliverables:
1. Explain the exact mechanical cause of the failure in 2 sentences.
2. Provide the corrected TypeScript code snippet.
3. Add inline comments explaining how this fix prevents recurrence.`,
        expectedOutput: `// Root Cause:
// In Next.js SSR, the server renders Date().toLocaleTimeString() in its server timezone (UTC),
// but the client browser re-renders it in the user's local timezone, causing a DOM mismatch.

"use client";

import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function UserActivityCard({ userEmail }: { userEmail: string }) {
  const [mounted, setMounted] = useState(false);
  const [formattedTime, setFormattedTime] = useState<string>("");

  useEffect(() => {
    // Only executed on the client after initial hydration
    setMounted(true);
    setFormattedTime(new Date().toLocaleTimeString());
  }, []);

  return (
    <div className="p-4 border border-slate-800 rounded-xl bg-slate-900">
      <h4 className="text-sm font-medium text-slate-400">Active User</h4>
      <p className="text-base font-semibold text-slate-100">{userEmail}</p>
      
      <div className="mt-2 text-xs text-slate-400">
        Last active:{" "}
        {mounted ? (
          <span className="text-emerald-400 font-mono">{formattedTime}</span>
        ) : (
          <Skeleton className="inline-block w-20 h-4 bg-slate-800" />
        )}
      </div>
    </div>
  );
}`
      },
      conceptGuide: {
        title: "The Anatomy of React Hydration & Execution Asynchrony",
        overview: "In modern full-stack web frameworks (Next.js, Remix), components render twice: once on the server to produce static HTML for instant first paint, and once in the browser during 'hydration', where React attaches event listeners to the pre-rendered DOM. If the HTML generated on the server differs by even a single character from the initial client render (such as timestamps, random UUIDs, or localStorage checks), React halts hydration and logs a mismatch error. Generative tools frequently overlook this dual-lifecycle reality. Professional engineering demands segregating server-safe deterministic data from client-only dynamic effects.",
        keyPoints: [
          "**Server vs. Client Divergence:** Server markup must be deterministic; dynamic client data belongs inside post-mount `useEffect` hooks.",
          "**Dependency Array Stability:** In JavaScript, `{} !== {}`. Passing objects into `useEffect` dependencies triggers infinite loops unless memoized.",
          "**Strict Dependency Trees:** Automated builders must be constrained to compatible semantic versioning (semver) ranges to prevent build-time crashes."
        ]
      },
      learning: {
        resources: [
          {
            title: "React Official Documentation: Understanding Hydration Errors",
            url: "https://react.dev/reference/react-dom/client/hydrateRoot#error-handling",
            type: "Official Docs"
          },
          {
            title: "Next.js Architecture Guide: Client-Side Components & SSR Guards",
            url: "https://nextjs.org/docs/app/building-your-application/rendering/client-components",
            type: "Official Docs"
          },
          {
            title: "React Lifecycle Hooks & useEffect Dependency Array Pitfalls",
            url: "https://react.dev/learn/synchronizing-with-effects",
            type: "Guide"
          },
          {
            title: "npm Dependency Resolution & ERESOLVE Peer Conflicts Manual",
            url: "https://docs.npmjs.com/cli/v10/using-npm/dependency-resolution",
            type: "Component Spec"
          }
        ]
      }
    },
    {
      id: "step-12",
      stepNumber: 12,
      phaseId: "phase-4",
      title: "One-Click Deployment, Custom Domains & Production Readiness",
      timeEstimate: "3-4 days",
      difficulty: "Intermediate",
      summary: "Deploy your AI-built web application to global edge networks (Vercel, Netlify, Cloudflare), configure custom apex domains with SSL, and optimize Core Web Vitals.",
      description: "Building an application inside a browser sandbox is exhilarating, but the ultimate measure of software engineering is shipping a secure, fast, and durable production web application to real users. Leading AI app builders like Lovable and v0 offer direct, one-click deployments to Vercel and Netlify. In this final capstone step, you will graduate your application from a sandbox prototype into a live commercial product: connecting your GitHub repository to a global edge CDN, configuring production environment variables, provisioning custom apex domains with automated SSL certificates, setting up OpenGraph preview tags, and verifying 95+ Google Lighthouse scores.",
      playbook: {
        setup: "Create an account on Vercel or Netlify and link your GitHub organization.",
        execute: "Click 'New Project' in Vercel and select your GitHub repository. Configure production environment variables (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_STRIPE_PUBLIC_KEY`). Trigger the initial deployment. In the Vercel Domain settings, add your custom domain (e.g. `app.yourdomain.com`) and update your DNS records (CNAME/A records) in Cloudflare or Namecheap.",
        verify: "Visit your custom domain over HTTPS in an incognito window. Verify that authentication, database writes, and payments function in production. Run an automated Google PageSpeed Insights audit to confirm green Core Web Vitals (LCP < 2.0s, CLS < 0.05)."
      },
      tools: [
        {
          name: "Vercel",
          type: "Freemium",
          url: "https://vercel.com",
          description: "Global frontend cloud platform providing automated Git deployments, edge routing, and analytics.",
          bestFor: "Zero-config Next.js & Vite edge deployment"
        },
        {
          name: "Netlify",
          type: "Freemium",
          url: "https://netlify.com",
          description: "Full-stack web deployment platform with automated branch previews and serverless functions.",
          bestFor: "Frontend edge hosting & custom domain management"
        },
        {
          name: "Cloudflare",
          type: "Freemium",
          url: "https://cloudflare.com",
          description: "Global cloud network providing DNS routing, DDoS protection, and SSL termination.",
          bestFor: "Fast authoritative DNS & custom SSL encryption"
        }
      ],
      callouts: {
        mistake: "Deploying to production with development test keys or leaving sensitive debug console logs active in client-facing bundles.",
        proTip: "Set up separate Staging and Production environments in Vercel and Supabase so testing new AI-generated features never risks production user data.",
        mistakes: [
          "Failing to configure custom OpenGraph metadata (`og:image`, `og:title`), resulting in blank, broken link previews on social platforms.",
          "Using slow, uncompressed PNG screenshots in hero headers instead of optimized WebP/AVIF images, ruining mobile LCP scores.",
          "Omitting a custom 404 Not Found page, causing lost users to see ugly default framework error screens."
        ],
        proTips: [
          "Enable Vercel Web Analytics and Speed Insights with one toggle to monitor real-user performance metrics in production.",
          "Use Cloudflare's Proxied DNS (Orange Cloud) for automated DDoS defense and edge asset caching.",
          "Add automated sitemap (`sitemap.xml`) and robots.txt generation to ensure search engines index your application immediately."
        ]
      },
      promptLab: {
        title: "Production Deployment Checklist & SEO Metadata Generator",
        description: "Generate complete production configurations: environment variable schemas, OpenGraph metadata, and robots.txt rules.",
        variables: [
          {
            name: "App Identity",
            label: "Product Name & Brand",
            options: [
              "PromptPulse - AI Developer Analytics & Token Observability",
              "TaskForge - Collaborative AI Kanban for Remote Engineering Teams",
              "DocuSynth - Intelligent Knowledge Base & Markdown Workspace",
              "MetricDesk - B2B Subscription Analytics & Churn Prediction"
            ],
            default: "PromptPulse - AI Developer Analytics & Token Observability"
          },
          {
            name: "Deployment Target",
            label: "Cloud Platform",
            options: [
              "Vercel Edge Network + Cloudflare DNS + Supabase Cloud",
              "Netlify Edge + Route 53 DNS + Supabase Cloud",
              "Cloudflare Pages + Cloudflare Workers + Supabase",
              "AWS Amplify + Route 53 + Supabase"
            ],
            default: "Vercel Edge Network + Cloudflare DNS + Supabase Cloud"
          },
          {
            name: "SEO & Social Sharing",
            label: "OpenGraph Metadata",
            options: [
              "Developer-centric: dark theme preview card, dynamic token counters, Twitter card summary_large_image",
              "B2B Enterprise: clean high-contrast card, enterprise compliance badges, feature bullet highlights",
              "Minimalist modern: clean typography on neutral canvas, product screenshot mockup, brand icon",
              "Product Hunt launch style: vibrant gradient background, clear value proposition, animated CTA pill"
            ],
            default: "Developer-centric: dark theme preview card, dynamic token counters, Twitter card summary_large_image"
          }
        ],
        template: `You are a Principal DevOps & Web Performance Engineer preparing a production deployment.

### Application Profile:
- Identity: [App Identity]
- Cloud Target: [Deployment Target]
- Social Sharing: [SEO & Social Sharing]

### Deliverables:
1. Provide a comprehensive Next.js/Vite 'metadata' export or 'index.html' head configuration with complete OpenGraph, Twitter card, and canonical links.
2. Provide a clean '.env.example' template listing all required production environment variables.
3. Provide a production checklist covering DNS verification, SSL certification, and Core Web Vitals optimization.`,
        expectedOutput: `// Next.js App Router root layout metadata export:
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PromptPulse - AI Developer Analytics & Token Observability",
  description: "Monitor real-time LLM token consumption, latency regressions, and model costs across Claude 3.7, GPT-4o, and DeepSeek with sub-millisecond edge tracking.",
  metadataBase: new URL("https://promptpulse.dev"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "PromptPulse - AI Developer Analytics",
    description: "Real-time token observability and latency profiling for frontier AI applications.",
    url: "https://promptpulse.dev",
    siteName: "PromptPulse",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PromptPulse Developer Dashboard Preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PromptPulse - AI Developer Analytics",
    description: "Real-time token observability and latency profiling for frontier AI applications.",
    images: ["/og-image.png"],
    creator: "@promptpulse"
  },
  robots: {
    index: true,
    follow: true
  }
};`
      },
      conceptGuide: {
        title: "Edge Distribution, Content Delivery Networks & Production Hardening",
        overview: "Deploying a web application in the cloud once meant running a monolithic web server in a single datacenter (e.g., us-east-1). If an international user accessed the site, every asset request traversed thousands of miles of fiber-optic cables, adding hundreds of milliseconds of latency. Modern frontend clouds like Vercel and Netlify compile web applications into static assets and lightweight serverless edge workers distributed across hundreds of Points of Presence (PoPs) worldwide. When a user requests your app, DNS routes them to the nearest edge node, ensuring instant initial paint and world-class Core Web Vitals.",
        keyPoints: [
          "**Global Edge Caching:** Static assets (JS, CSS, images) are cached at edge nodes within 20 milliseconds of 95% of global internet users.",
          "**Automated SSL Termination:** Modern CDNs manage Let's Encrypt TLS certificates automatically, renewing encryption keys with zero manual intervention.",
          "**Continuous Deployment Pipeline:** Every push to GitHub triggers an atomic build that generates an isolated preview URL before promoting code to production."
        ]
      },
      learning: {
        resources: [
          {
            title: "Vercel Production Deployment & Git Integration Documentation",
            url: "https://vercel.com/docs/deployments/overview",
            type: "Official Docs"
          },
          {
            title: "Cloudflare DNS Management & Custom Domain SSL Configuration",
            url: "https://developers.cloudflare.com/dns",
            type: "Official Docs"
          },
          {
            title: "Google Core Web Vitals & Web Performance Optimization Guide",
            url: "https://web.dev/explore/fast",
            type: "Guide"
          },
          {
            title: "OpenGraph Protocol Specification & Social Link Preview Standard",
            url: "https://ogp.me",
            type: "Component Spec"
          }
        ]
      }
    }
  ]
};
