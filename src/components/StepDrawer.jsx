import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import {
  X,
  CheckCircle2,
  Circle,
  Copy,
  Check,
  BookOpen,
  Terminal,
  AlertTriangle,
  Lightbulb,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Link2,
  Compass,
  Sparkles,
  Wrench,
  Clock,
  ExternalLink,
  Video,
  FileCode,
  CheckCircle
} from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';
import { sanitizeExternalUrl } from '../utils/validation';
import { generatePromptDeepLinks } from '../utils/promptLinks';

export default function StepDrawer({
  step,
  isOpen,
  onClose,
  isCompleted,
  onToggleComplete,
  initialTab = 'playbook',
  roadmapId,
  roadmapTitle,
  allSteps = [],
  onSelectStep
}) {
  const {
    isPromptBookmarked,
    togglePromptBookmark
  } = useWorkspace();

  // Active Tab: 'playbook' | 'promptLab' | 'learnRefs'
  const [activeTab, setActiveTab] = useState(initialTab);
  const [copied, setCopied] = useState(false);
  const [copiedStepLink, setCopiedStepLink] = useState(false);

  // Variable states for Prompt Lab
  const [selectedVariables, setSelectedVariables] = useState({});

  const scrollContainerRef = useRef(null);
  const headerRef = useRef(null);

  // Reset tab, variable selections, and scroll position when step or open state changes
  useEffect(() => {
    if (step?.promptLab?.variables) {
      const defaults = {};
      step.promptLab.variables.forEach((v) => {
        defaults[v.id] = v.defaultOption;
      });
      setSelectedVariables(defaults);
    } else {
      setSelectedVariables({});
    }
    setActiveTab(initialTab);
    setCopied(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [step?.id, step?.promptLab?.variables, isOpen, initialTab]);

  // Tab change handler with intelligent scroll positioning
  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
    if (scrollContainerRef.current && headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      if (scrollContainerRef.current.scrollTop > headerHeight) {
        scrollContainerRef.current.scrollTo({
          top: headerHeight,
          behavior: 'smooth'
        });
      }
    }
  };

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Compute customized prompt text
  const customizedPromptText = useMemo(() => {
    if (!step?.promptLab?.template) {
      return step?.proPrompt?.prompt || '';
    }
    let text = step.promptLab.template;
    if (step.promptLab.variables) {
      step.promptLab.variables.forEach((v) => {
        const val = selectedVariables[v.id] || v.defaultOption;
        text = text.replaceAll(`[${v.id}]`, val);
      });
    }
    return text;
  }, [step, selectedVariables]);

  // Compute 1-click execution deep links for ChatGPT & Perplexity
  const drawerDeepLinks = useMemo(() => {
    return generatePromptDeepLinks(customizedPromptText);
  }, [customizedPromptText]);

  const handleCopyPrompt = async () => {
    if (customizedPromptText) {
      try {
        await navigator.clipboard.writeText(customizedPromptText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy to clipboard', err);
      }
    }
  };

  const handleVariableChange = (varId, optionValue) => {
    setSelectedVariables((prev) => ({
      ...prev,
      [varId]: optionValue
    }));
  };

  const formatStepNumber = (num) => (num < 10 ? `0${num}` : `${num}`);

  // Derived IDs and saved states for bookmarks
  const currentRoadmapId = roadmapId || step?.roadmapId || '';
  const currentRoadmapTitle = roadmapTitle || step?.roadmapTitle || 'Roadmap';
  const promptCompositeId = `${currentRoadmapId}-${step?.id}`;
  const isPromptSaved = isPromptBookmarked(promptCompositeId);

  // Step Prev / Next Navigation calculations
  const currentIndex = useMemo(() => {
    if (!step || !Array.isArray(allSteps) || allSteps.length === 0) return -1;
    return allSteps.findIndex((s) => s.id === step.id || s.stepNumber === step.stepNumber);
  }, [step, allSteps]);

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < allSteps.length - 1;
  const prevStep = hasPrev ? allSteps[currentIndex - 1] : null;
  const nextStep = hasNext ? allSteps[currentIndex + 1] : null;

  const handlePrevStep = useCallback(() => {
    if (hasPrev && onSelectStep) {
      onSelectStep(allSteps[currentIndex - 1]);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    }
  }, [hasPrev, onSelectStep, allSteps, currentIndex]);

  const handleNextStep = useCallback(() => {
    if (hasNext && onSelectStep) {
      onSelectStep(allSteps[currentIndex + 1]);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    }
  }, [hasNext, onSelectStep, allSteps, currentIndex]);

  const handleCopyStepLink = async () => {
    try {
      const url = `${window.location.origin}/roadmap/${currentRoadmapId}?step=${step.id}`;
      await navigator.clipboard.writeText(url);
      setCopiedStepLink(true);
      setTimeout(() => setCopiedStepLink(false), 2000);
    } catch (err) {
      console.error('Failed to copy step link', err);
    }
  };

  // Keyboard navigation (ArrowLeft & ArrowRight)
  useEffect(() => {
    const handleArrowNav = (e) => {
      if (!isOpen) return;
      const activeTag = document.activeElement?.tagName?.toLowerCase();
      const isEditable = document.activeElement?.isContentEditable;
      if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select' || isEditable) {
        return;
      }
      if (e.key === 'ArrowLeft') {
        if (hasPrev) {
          e.preventDefault();
          handlePrevStep();
        }
      } else if (e.key === 'ArrowRight') {
        if (hasNext) {
          e.preventDefault();
          handleNextStep();
        }
      }
    };
    window.addEventListener('keydown', handleArrowNav);
    return () => window.removeEventListener('keydown', handleArrowNav);
  }, [isOpen, hasPrev, hasNext, handlePrevStep, handleNextStep]);

  if (!isOpen || !step) return null;

  // Fallback defaults for steps
  const playbook = step.playbook || {
    setup: 'Configure your system environment, target framework, and model parameters before executing.',
    execute: 'Execute the prompt with precise boundary constraints, clean types, and responsive design tokens.',
    verify: 'Inspect generated code for deterministic behavior, edge cases, and zero runtime warnings.'
  };

  const callouts = step.callouts || {};
  const mistakes = Array.isArray(callouts.mistakes)
    ? callouts.mistakes
    : Array.isArray(callouts.mistake)
    ? callouts.mistake
    : [
        callouts.mistake ||
          'Prompting for complex implementation code without first establishing strict interface contracts and boundary conditions.'
      ];

  const proTips = Array.isArray(callouts.proTips)
    ? callouts.proTips
    : Array.isArray(callouts.shortcuts)
    ? callouts.shortcuts
    : Array.isArray(callouts.proTip)
    ? callouts.proTip
    : [
        callouts.proTip ||
          'Enforce strict TypeScript and automated linting so the model self-corrects against known contract errors.'
      ];

  const conceptGuide = step.conceptGuide || {
    title: `Understanding ${step.title}`,
    overview:
      step.description ||
      'Master the core architectural principles, mental models, and production standards required to execute this step effectively with AI-assisted engineering.',
    keyPoints: [
      {
        lead: 'Contract-First Priming',
        text: 'Establish strict type definitions and boundary constraints before asking models to generate code.'
      },
      {
        lead: 'Deterministic Verification',
        text: 'Always test edge cases, error states, and responsive breakpoints rather than assuming code works.'
      },
      {
        lead: 'Iterative Refinement',
        text: 'Decompose complex features into atomic sub-tasks to maximize LLM context retention and quality.'
      }
    ]
  };

  const learning = step.learning || step.learnAndRefs || {
    resources: [
      { title: 'The Linear Method: Product Principles', badge: 'ARTICLE', url: 'https://linear.app/method' },
      { title: 'Anthropic Official Prompt Engineering Interactive Docs', badge: 'OFFICIAL DOCS', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' }
    ]
  };

  const resources = learning.resources || step.resources || [];

  const promptLab = step.promptLab || {
    recommendedModel: 'Claude 3.7 Sonnet / ChatGPT o3-mini',
    variables: [
      {
        id: 'targetStack',
        label: 'Target Stack',
        options: ['React + Vite + Tailwind CSS', 'Next.js App Router', 'Vue 3 + Tailwind'],
        defaultOption: 'React + Vite + Tailwind CSS'
      },
      {
        id: 'designConstraint',
        label: 'Design Rule',
        options: ['Strict 1px Borders / Zero Glow', 'Utilitarian Dark Mode', 'High Contrast Monochrome'],
        defaultOption: 'Strict 1px Borders / Zero Glow'
      }
    ],
    template: `Act as a senior engineer. Execute [targetStack] step for: ${step.title}.
Constraint: [designConstraint].
Output complete, verified code with zero conversational fluff.`,
    expectedOutputs: [
      'Complete modular TypeScript / React implementation',
      'Zero unnecessary inline styles or bloated dependencies',
      'Production-ready code with error boundaries'
    ]
  };

  const handleTogglePromptBookmark = () => {
    togglePromptBookmark({
      id: promptCompositeId,
      stepId: step.id,
      stepNumber: step.stepNumber,
      title: step.title,
      roadmapId: currentRoadmapId,
      roadmapTitle: currentRoadmapTitle,
      template: customizedPromptText || promptLab.template,
      recommendedModel: promptLab.recommendedModel,
      variables: promptLab.variables,
      expectedOutputs: promptLab.expectedOutputs
    });
  };

  const stepDuration = step.duration || '~25 mins';
  const stepDifficulty = step.difficulty || 'Intermediate';

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-200"
      />

      {/* Drawer Panel: Distraction-free Step Learning Workspace */}
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-0 sm:pl-8">
        <div className="w-screen sm:w-[680px] lg:w-[760px] max-w-full lg:max-w-3xl bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-[#F8FAFC] border-l-2 border-[#10162F] dark:border-[#3B497E] flex flex-col shadow-2xl font-sans">
          {/* 1. Sticky Workspace Top Telemetry Bar */}
          <div className="relative z-30 px-4 sm:px-6 py-2.5 border-b-2 border-[#10162F] dark:border-[#3B497E] flex items-center justify-between gap-3 bg-white dark:bg-[#131A33] shrink-0 font-mono text-xs">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-[#3A10E5] dark:text-[#FFD300]">
                STEP {formatStepNumber(step.stepNumber)} OF {formatStepNumber(allSteps.length || 10)}
              </span>
              <span className="hidden sm:inline text-[#10162F]/40 dark:text-slate-600">•</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[#10162F]/70 dark:text-slate-300 font-bold">
                <Clock className="h-3 w-3" />
                <span>{stepDuration}</span>
              </span>
              <span className="hidden sm:inline text-[#10162F]/40 dark:text-slate-600">•</span>
              <span className="hidden sm:inline px-1.5 py-0.2 rounded-[2px] bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-white border border-[#10162F] text-[10px] font-bold">
                {stepDifficulty}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Copy Step Deep-Link Button */}
              <button
                onClick={handleCopyStepLink}
                type="button"
                title="Copy shareable link to this step"
                aria-label="Copy shareable link to this step"
                className="border-2 border-[#10162F] rounded-[4px] bg-white dark:bg-[#0B1021] text-[#10162F] dark:text-white px-2.5 py-1 text-xs font-mono font-bold shadow-[2px_2px_0px_0px_#10162F] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F] transition-all cursor-pointer inline-flex items-center gap-1"
              >
                {copiedStepLink ? (
                  <>
                    <Check className="h-3 w-3 text-[#008A5E]" />
                    <span className="text-[#008A5E]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Link2 className="h-3 w-3" />
                    <span className="hidden sm:inline">Share</span>
                  </>
                )}
              </button>

              {/* Bookmark Step */}
              <button
                type="button"
                onClick={handleTogglePromptBookmark}
                title={isPromptSaved ? 'Remove Step from Saved' : 'Save Step to Workspace'}
                aria-label={isPromptSaved ? 'Remove Step from Saved' : 'Save Step to Workspace'}
                className={`border-2 border-[#10162F] rounded-[4px] h-7 w-7 p-0 shadow-[2px_2px_0px_0px_#10162F] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F] transition-all cursor-pointer flex items-center justify-center ${
                  isPromptSaved ? 'bg-[#FFD300] text-[#10162F]' : 'bg-white dark:bg-[#0B1021] text-[#10162F] dark:text-white'
                }`}
              >
                <Bookmark className={`h-3.5 w-3.5 ${isPromptSaved ? 'fill-[#10162F] text-[#10162F]' : ''}`} />
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                type="button"
                aria-label="Close workspace"
                title="Close (ESC)"
                className="border-2 border-[#10162F] rounded-[4px] bg-white dark:bg-[#0B1021] text-[#10162F] dark:text-white h-7 w-7 p-0 shadow-[2px_2px_0px_0px_#10162F] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F] transition-all cursor-pointer flex items-center justify-center"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* 2. Scrollable Workspace Body */}
          <div ref={scrollContainerRef} className="flex-1 overflow-y-auto">
            {/* Step Header Block */}
            <div ref={headerRef} className="px-5 sm:px-7 pt-5 pb-5 bg-white dark:bg-[#131A33] border-b-2 border-[#10162F] dark:border-[#3B497E]">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] bg-[#FFD300] text-[#10162F] border border-[#10162F] shadow-[1px_1px_0px_0px_#10162F]">
                  MODULE {formatStepNumber(step.stepNumber)}
                </span>
                {step.tools && step.tools.length > 0 && (
                  <span className="font-mono text-xs font-bold text-[#10162F]/70 dark:text-slate-300">
                    {step.tools.map((t) => t.name).join(' • ')}
                  </span>
                )}
              </div>

              <h2 className="text-xl sm:text-2xl font-display font-bold text-[#10162F] dark:text-white tracking-tight mb-2 leading-snug">
                {step.title}
              </h2>

              <p className="text-sm text-[#10162F]/80 dark:text-slate-300 leading-relaxed font-sans">
                {step.description || step.summary}
              </p>
            </div>

            {/* Sticky Workspace Tabs */}
            <div className="sticky top-0 z-20 px-5 sm:px-7 py-2.5 border-b-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021] flex gap-2">
              <button
                type="button"
                onClick={() => handleTabChange('playbook')}
                className={`px-3.5 py-1.5 font-display text-xs sm:text-sm font-bold rounded-[4px] border-2 border-[#10162F] transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'playbook'
                    ? 'bg-[#FFD300] text-[#10162F] shadow-[3px_3px_0px_0px_#10162F]'
                    : 'bg-white dark:bg-[#131A33] text-[#10162F] dark:text-white shadow-[2px_2px_0px_0px_#10162F] dark:shadow-[2px_2px_0px_0px_#000000] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F]'
                }`}
              >
                <Terminal className="h-3.5 w-3.5" />
                <span>01. Playbook</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('promptLab')}
                className={`px-3.5 py-1.5 font-display text-xs sm:text-sm font-bold rounded-[4px] border-2 border-[#10162F] transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'promptLab'
                    ? 'bg-[#FFD300] text-[#10162F] shadow-[3px_3px_0px_0px_#10162F]'
                    : 'bg-white dark:bg-[#131A33] text-[#10162F] dark:text-white shadow-[2px_2px_0px_0px_#10162F] dark:shadow-[2px_2px_0px_0px_#000000] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F]'
                }`}
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>02. Prompt Lab</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('learnRefs')}
                className={`px-3.5 py-1.5 font-display text-xs sm:text-sm font-bold rounded-[4px] border-2 border-[#10162F] transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'learnRefs'
                    ? 'bg-[#FFD300] text-[#10162F] shadow-[3px_3px_0px_0px_#10162F]'
                    : 'bg-white dark:bg-[#131A33] text-[#10162F] dark:text-white shadow-[2px_2px_0px_0px_#10162F] dark:shadow-[2px_2px_0px_0px_#000000] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F]'
                }`}
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>03. Resources</span>
              </button>
            </div>

            {/* Tab Content Body */}
            <div className="px-5 sm:px-7 py-6">
              {/* TAB 1: PLAYBOOK */}
              {activeTab === 'playbook' && (
                <div className="space-y-6">
                  {/* Recommended Tool Stack */}
                  {step.tools && step.tools.length > 0 && (
                    <div className="cc-card p-5 space-y-3">
                      <div className="flex items-center gap-2">
                        <Wrench className="h-4 w-4 text-[#4F46E5] dark:text-[#6366F1]" />
                        <h3 className="font-display text-base font-bold text-[#0F172A] dark:text-white">
                          Recommended Tool Stack
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.tools.map((t, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B0F17]"
                          >
                            <span className="font-display font-bold text-sm text-[#0F172A] dark:text-white block mb-0.5">
                              {t.name}
                            </span>
                            <p className="text-xs text-slate-600 dark:text-slate-300 font-sans">
                              {t.purpose || t.description || 'Core tool in workflow execution'}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 3-Step Execution Micro-Guide */}
                  <div className="cc-card p-5 space-y-4">
                    <h3 className="font-display text-base font-bold text-[#0F172A] dark:text-white flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-[#4F46E5] dark:text-[#6366F1]" />
                      <span>3-Step Execution Workflow</span>
                    </h3>

                    <div className="space-y-3">
                      {/* Step 1: Setup */}
                      <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B0F17]">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white">
                            01. SETUP
                          </span>
                          <span className="font-display font-bold text-sm text-[#0F172A] dark:text-white">
                            Context &amp; Priming
                          </span>
                        </div>
                        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                          {playbook.setup}
                        </p>
                      </div>

                      {/* Step 2: Execute */}
                      <div className="p-4 rounded-lg border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/40 dark:bg-indigo-950/20">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#4F46E5] text-white">
                            02. EXECUTE
                          </span>
                          <span className="font-display font-bold text-sm text-[#4F46E5] dark:text-[#6366F1]">
                            Action &amp; Implementation
                          </span>
                        </div>
                        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                          {playbook.execute}
                        </p>
                      </div>

                      {/* Step 3: Verify */}
                      <div className="p-4 rounded-lg border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#10B981] text-white">
                            03. VERIFY
                          </span>
                          <span className="font-display font-bold text-sm text-[#10B981]">
                            Deterministic Verification
                          </span>
                        </div>
                        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                          {playbook.verify}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Common Mistakes to Avoid */}
                  {mistakes.length > 0 && (
                    <div className="cc-card p-5 space-y-3">
                      <div className="flex items-center gap-2 text-[#0F172A] dark:text-white">
                        <AlertTriangle className="h-4 w-4 text-amber-500" />
                        <h3 className="font-display text-base font-bold">
                          Common Mistakes to Avoid
                        </h3>
                      </div>
                      <div className="space-y-2.5">
                        {mistakes.map((m, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-lg border border-amber-200 dark:border-amber-900/40 bg-amber-50/50 dark:bg-amber-950/20 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-sans flex items-start gap-2"
                          >
                            <span className="text-amber-500 font-bold">•</span>
                            <span>{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Pro Shortcuts & Tips */}
                  {proTips.length > 0 && (
                    <div className="cc-card p-5 space-y-3">
                      <div className="flex items-center gap-2 text-[#0F172A] dark:text-white">
                        <Lightbulb className="h-4 w-4 text-[#4F46E5] dark:text-[#6366F1]" />
                        <h3 className="font-display text-base font-bold">
                          Pro Shortcuts &amp; Best Practices
                        </h3>
                      </div>
                      <div className="space-y-2.5">
                        {proTips.map((pt, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-lg border border-indigo-200 dark:border-indigo-900/40 bg-indigo-50/30 dark:bg-indigo-950/15 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-sans flex items-start gap-2"
                          >
                            <span className="text-[#4F46E5] dark:text-[#6366F1] font-bold">✓</span>
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: PROMPT LAB */}
              {activeTab === 'promptLab' && (
                <div className="space-y-6">
                  {/* Interactive Variable Chips */}
                  {promptLab.variables && promptLab.variables.length > 0 && (
                    <div className="cc-card p-5 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-sm font-bold text-[#0F172A] dark:text-white flex items-center gap-1.5">
                          <Sparkles className="h-4 w-4 text-[#4F46E5] dark:text-[#6366F1]" />
                          <span>Customize Variables</span>
                        </span>
                        <span className="font-mono text-xs text-slate-500 dark:text-slate-400">Updates live below</span>
                      </div>

                      <div className="space-y-3 pt-1">
                        {promptLab.variables.map((v) => (
                          <div key={v.id} className="space-y-1.5">
                            <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300 block">
                              [{v.label}]:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {v.options.map((opt) => {
                                const isSelected = (selectedVariables[v.id] || v.defaultOption) === opt;
                                return (
                                  <button
                                    key={opt}
                                    type="button"
                                    onClick={() => handleVariableChange(v.id, opt)}
                                    className={`px-3 py-1.5 text-xs font-mono rounded-md border transition-all cursor-pointer font-semibold ${
                                      isSelected
                                        ? 'border-[#4338CA] bg-[#4F46E5] text-white shadow-xs'
                                        : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-[#111827] text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
                                    }`}
                                  >
                                    {opt}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Clean Code-Editor Container */}
                  <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] shadow-sm overflow-hidden">
                    {/* Top Bar */}
                    <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-[#0B0F17] px-4 py-2.5 flex items-center justify-between font-mono text-xs text-slate-700 dark:text-slate-300 select-none">
                      <div className="flex items-center gap-2">
                        <Terminal className="h-4 w-4 text-[#4F46E5] dark:text-[#6366F1]" />
                        <span className="font-bold">prompt_blueprint.md</span>
                      </div>
                      <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                        [{promptLab.recommendedModel}]
                      </span>
                    </div>

                    {/* Code Text Area */}
                    <pre className="p-5 font-mono text-xs sm:text-sm text-slate-100 leading-relaxed whitespace-pre-wrap select-all overflow-x-auto max-h-72 bg-[#0F172A] dark:bg-[#050811]">
                      {customizedPromptText}
                    </pre>

                    {/* Action Bar */}
                    <div className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#111827] p-3.5 flex flex-wrap items-center justify-between gap-2.5 font-display">
                      <div className="flex items-center gap-2">
                        <a
                          href={sanitizeExternalUrl(drawerDeepLinks.chatgpt)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cc-btn-secondary px-3 py-1.5 text-xs font-semibold text-[#10B981] gap-1"
                        >
                          <Sparkles className="h-3.5 w-3.5" />
                          <span>ChatGPT ↗</span>
                        </a>
                        <a
                          href={sanitizeExternalUrl(drawerDeepLinks.perplexity)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cc-btn-secondary px-3 py-1.5 text-xs font-semibold text-[#4F46E5] dark:text-[#6366F1] gap-1"
                        >
                          <Compass className="h-3.5 w-3.5" />
                          <span>Perplexity ↗</span>
                        </a>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handleTogglePromptBookmark}
                          className="cc-btn-secondary px-3 py-1.5 text-xs font-semibold gap-1"
                        >
                          <Bookmark className={`h-3.5 w-3.5 ${isPromptSaved ? 'fill-amber-400 text-amber-500' : ''}`} />
                          <span>{isPromptSaved ? 'Saved' : 'Save'}</span>
                        </button>
                        <button
                          type="button"
                          onClick={handleCopyPrompt}
                          className="cc-btn-primary px-4 py-1.5 text-xs font-semibold gap-1.5"
                        >
                          {copied ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-[#10B981]" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5" />
                              <span>Copy Prompt</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Expected Output Preview */}
                  {promptLab.expectedOutputs && promptLab.expectedOutputs.length > 0 && (
                    <div className="cc-card p-5 space-y-3">
                      <h4 className="font-display font-bold text-sm text-[#0F172A] dark:text-white flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-[#10B981]" />
                        <span>Expected Output Checklist</span>
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                        Verify that the AI model generated the expected output components:
                      </p>
                      <div className="space-y-2 pt-1">
                        {promptLab.expectedOutputs.map((out, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-md bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 font-sans flex items-start gap-2"
                          >
                            <span className="text-[#10B981] font-bold">✓</span>
                            <span>{out}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: RESOURCES & CONCEPT GUIDES */}
              {activeTab === 'learnRefs' && (
                <div className="space-y-6">
                  {/* In-Depth Concept Guide */}
                  {conceptGuide && (
                    <div className="cc-card p-5 space-y-4">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-[#4F46E5] dark:text-[#6366F1]" />
                        <h3 className="font-display text-base font-bold text-[#0F172A] dark:text-white">
                          Concept Guide: {conceptGuide.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                        {conceptGuide.overview}
                      </p>

                      {conceptGuide.keyPoints && (
                        <div className="space-y-2.5 pt-2">
                          <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">
                            KEY ARCHITECTURAL TAKEAWAYS:
                          </span>
                          {conceptGuide.keyPoints.map((kp, idx) => (
                            <div
                              key={idx}
                              className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B0F17] text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans"
                            >
                              <strong className="text-[#0F172A] dark:text-white font-display font-bold block mb-1">
                                {kp.lead}
                              </strong>
                              <span>{kp.text}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Official Video Walkthrough (Coming Soon) */}
                  <div className="cc-card p-5 border-dashed border-slate-300 dark:border-slate-700">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-[#4F46E5] dark:text-indigo-400">
                          <Video className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-sm text-[#0F172A] dark:text-white">
                            Step Video Walkthrough &amp; Code Review
                          </h4>
                          <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400">
                            High-definition screencast
                          </span>
                        </div>
                      </div>

                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 uppercase">
                        COMING SOON
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans mt-2">
                      A senior engineer video recording for this module is currently in post-production. Complete the interactive playbook and prompt lab above.
                    </p>
                  </div>

                  {/* Official Documentation & External Guides */}
                  {resources.length > 0 && (
                    <div className="cc-card p-5 space-y-3">
                      <div className="flex items-center gap-2">
                        <FileCode className="h-4 w-4 text-[#4F46E5] dark:text-[#6366F1]" />
                        <h3 className="font-display text-base font-bold text-[#0F172A] dark:text-white">
                          Official Documentation &amp; Deep Dives
                        </h3>
                      </div>
                      <div className="space-y-2.5">
                        {resources.map((res, idx) => (
                          <a
                            key={idx}
                            href={sanitizeExternalUrl(res.url)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] hover:border-slate-400 dark:hover:border-slate-600 transition-all flex items-center justify-between group"
                          >
                            <div className="flex items-center gap-2.5 min-w-0 pr-2">
                              <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-[#4F46E5] dark:group-hover:text-[#6366F1] shrink-0 transition-colors" />
                              <span className="font-display font-semibold text-sm text-[#0F172A] dark:text-white truncate group-hover:text-[#4F46E5] dark:group-hover:text-[#6366F1] transition-colors">
                                {res.title}
                              </span>
                              <span className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shrink-0 uppercase">
                                {res.badge || 'DOC'}
                              </span>
                            </div>
                            <span className="font-mono text-xs font-semibold text-[#4F46E5] dark:text-[#6366F1] shrink-0">
                              VISIT ↗
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* 3. Sticky Bottom Learning Navigation Bar */}
          <div className="relative z-30 px-4 sm:px-6 py-3 border-t-2 border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#131A33] flex items-center justify-between gap-3 text-xs shrink-0 font-display">
            {/* Prev step */}
            <button
              type="button"
              onClick={handlePrevStep}
              disabled={!hasPrev}
              title={prevStep ? `Previous: Step ${formatStepNumber(prevStep.stepNumber)} — ${prevStep.title}` : 'No previous step'}
              className={`border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] bg-white dark:bg-[#0B1021] text-[#10162F] dark:text-white px-3.5 py-2 text-xs font-mono font-bold shadow-[2px_2px_0px_0px_#10162F] dark:shadow-[2px_2px_0px_0px_#000000] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F] transition-all flex items-center gap-1.5 cursor-pointer ${
                !hasPrev ? 'opacity-40 cursor-not-allowed hover:translate-x-0 hover:translate-y-0 hover:shadow-[2px_2px_0px_0px_#10162F]' : ''
              }`}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden xs:inline">Prev Step</span>
              <span className="xs:hidden">Prev</span>
            </button>

            {/* Primary Mark complete button */}
            <button
              type="button"
              onClick={() => onToggleComplete(step.id)}
              className={`px-5 py-2 text-xs font-bold font-mono rounded-[4px] border-2 border-[#10162F] transition-all cursor-pointer flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#10162F] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F] ${
                isCompleted
                  ? 'bg-[#008A5E] text-white'
                  : 'bg-[#3A10E5] text-white dark:bg-[#FFD300] dark:text-[#10162F]'
              }`}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="h-4 w-4 text-white" />
                  <span>Completed ✓</span>
                </>
              ) : (
                <>
                  <Circle className="h-4 w-4" />
                  <span>Mark Step Complete</span>
                </>
              )}
            </button>

            {/* Next step */}
            <button
              type="button"
              onClick={handleNextStep}
              disabled={!hasNext}
              title={nextStep ? `Next: Step ${formatStepNumber(nextStep.stepNumber)} — ${nextStep.title}` : 'No next step'}
              className={`border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] bg-white dark:bg-[#0B1021] text-[#10162F] dark:text-white px-3.5 py-2 text-xs font-mono font-bold shadow-[2px_2px_0px_0px_#10162F] dark:shadow-[2px_2px_0px_0px_#000000] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F] transition-all flex items-center gap-1.5 cursor-pointer ${
                !hasNext ? 'opacity-40 cursor-not-allowed hover:translate-x-0 hover:translate-y-0 hover:shadow-[2px_2px_0px_0px_#10162F]' : ''
              }`}
            >
              <span className="hidden xs:inline">Next Step</span>
              <span className="xs:hidden">Next</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
