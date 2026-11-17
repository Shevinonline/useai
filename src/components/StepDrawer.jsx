import { useState, useEffect, useMemo, useRef } from 'react';
import {
  X,
  CheckCircle2,
  Circle,
  Copy,
  Check,
  ExternalLink,
  BookOpen,
  FileCode,
  Terminal,
  AlertTriangle,
  Lightbulb,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Link2,
  Compass,
  Sparkles,
  Layers,
  Wrench
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
  }, [step?.id, isOpen, initialTab]);

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

  const handlePrevStep = () => {
    if (hasPrev && onSelectStep) {
      onSelectStep(allSteps[currentIndex - 1]);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    }
  };

  const handleNextStep = () => {
    if (hasNext && onSelectStep) {
      onSelectStep(allSteps[currentIndex + 1]);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    }
  };

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
  }, [isOpen, hasPrev, hasNext, currentIndex, allSteps, onSelectStep]);

  if (!isOpen || !step) return null;

  // Fallback defaults for steps
  const playbook = step.playbook || {
    setup: 'Configure system prompt and target framework in your AI editor.',
    execute: 'Execute the prompt with precise boundary constraints and schema requirements.',
    verify: 'Inspect generated code for type safety, 1px border styling, and responsive layout.'
  };

  const callouts = step.callouts || {};
  const mistakes = Array.isArray(callouts.mistakes)
    ? callouts.mistakes
    : Array.isArray(callouts.mistake)
    ? callouts.mistake
    : [
        callouts.mistake ||
          'Prompting for implementation code without first defining state contracts and error bounds.'
      ];

  const proTips = Array.isArray(callouts.proTips)
    ? callouts.proTips
    : Array.isArray(callouts.shortcuts)
    ? callouts.shortcuts
    : Array.isArray(callouts.proTip)
    ? callouts.proTip
    : [
        callouts.proTip ||
          'Enforce TypeScript strict mode and Tailwind CSS 1px border tokens to prevent visual hallucinations.'
      ];

  const conceptGuide = step.conceptGuide || {
    title: `Understanding ${step.title}`,
    overview:
      step.description ||
      'Master the core architectural principles, mental models, and production standards required to execute this step effectively with AI-assisted engineering.',
    keyPoints: [
      {
        lead: 'Contract-First Priming',
        text: 'Establish strict type definitions and boundary constraints before asking models to generate logic.'
      },
      {
        lead: 'Deterministic Verification',
        text: 'Always test edge cases, error states, and responsive breakpoints rather than assuming code works.'
      },
      {
        lead: 'Iterative Refinement',
        text: 'Decompose complex features into atomic sub-tasks to maximize LLM context retention and code quality.'
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

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-200"
      />

      {/* Drawer Panel: Slide-over with crisp 2px left border */}
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-0 sm:pl-10">
        <div className="w-screen sm:w-auto max-w-full sm:max-w-2xl bg-[#F9F8F6] dark:bg-[#0E0E11] text-zinc-900 dark:text-zinc-100 border-l-2 border-zinc-900 dark:border-zinc-700 flex flex-col shadow-2xl font-sans">
          {/* 1. Monospace Top Telemetry Bar */}
          <div className="relative z-30 px-4 sm:px-6 py-2.5 border-b border-zinc-300 dark:border-zinc-800 flex items-center justify-between gap-3 bg-[#F2F0EC]/90 dark:bg-zinc-900/90 shrink-0 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-zinc-900 dark:text-zinc-100">
                MODULE {formatStepNumber(step.stepNumber)} OF {formatStepNumber(allSteps.length || 10)}
              </span>
              <span className="hidden sm:inline text-zinc-500 dark:text-zinc-400">
                // {step.id.toUpperCase()}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Copy Step Deep-Link Button */}
              <button
                onClick={handleCopyStepLink}
                type="button"
                title="Copy shareable link to this step"
                aria-label="Copy shareable link to this step"
                className="workspace-btn px-2.5 py-1 text-xs font-mono font-medium gap-1"
              >
                {copiedStepLink ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-600" />
                    <span>COPIED!</span>
                  </>
                ) : (
                  <>
                    <Link2 className="h-3 w-3" />
                    <span className="hidden sm:inline">LINK</span>
                  </>
                )}
              </button>

              {/* Mark Completed Toggle */}
              <button
                onClick={() => onToggleComplete(step.id)}
                type="button"
                className={`workspace-btn px-2.5 py-1 text-xs font-mono font-bold gap-1 ${
                  isCompleted ? 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-600' : ''
                }`}
              >
                {isCompleted ? (
                  <>
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>DONE ✓</span>
                  </>
                ) : (
                  <>
                    <Circle className="h-3.5 w-3.5" />
                    <span>MARK DONE</span>
                  </>
                )}
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                type="button"
                aria-label="Close drawer"
                className="workspace-btn h-7 w-7 text-xs"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* 2. Scrollable Body: Title and 3 Boxed Architectural Tabs */}
          <div ref={scrollContainerRef} className="flex-1 overflow-y-auto">
            {/* Header Block: Node Title & Description */}
            <div ref={headerRef} className="px-4 sm:px-6 pt-5 pb-4 bg-white/70 dark:bg-[#121215]/70 border-b border-zinc-200 dark:border-zinc-800">
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight mb-2">
                {step.title}
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                {step.description || step.summary}
              </p>
            </div>

            {/* Sticky 3 Boxed Architectural Tabs */}
            <div className="sticky top-0 z-20 px-4 sm:px-6 py-2.5 border-b border-zinc-300 dark:border-zinc-800 bg-[#F9F8F6]/95 dark:bg-[#0E0E11]/95 backdrop-blur-xs flex gap-2">
              <button
                type="button"
                onClick={() => handleTabChange('playbook')}
                className={`px-3 py-1.5 font-mono text-xs cursor-pointer transition-all ${
                  activeTab === 'playbook'
                    ? 'border-2 border-zinc-900 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-bold shadow-[2px_2px_0px_0px_#18181B] dark:shadow-none rounded-[3px]'
                    : 'border border-zinc-300 dark:border-zinc-800 bg-[#F2F0EC] dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-[3px]'
                }`}
              >
                01. PLAYBOOK
              </button>
              <button
                type="button"
                onClick={() => handleTabChange('promptLab')}
                className={`px-3 py-1.5 font-mono text-xs cursor-pointer transition-all ${
                  activeTab === 'promptLab'
                    ? 'border-2 border-zinc-900 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-bold shadow-[2px_2px_0px_0px_#18181B] dark:shadow-none rounded-[3px]'
                    : 'border border-zinc-300 dark:border-zinc-800 bg-[#F2F0EC] dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-[3px]'
                }`}
              >
                02. PROMPT LAB
              </button>
              <button
                type="button"
                onClick={() => handleTabChange('learnRefs')}
                className={`px-3 py-1.5 font-mono text-xs cursor-pointer transition-all ${
                  activeTab === 'learnRefs'
                    ? 'border-2 border-zinc-900 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-bold shadow-[2px_2px_0px_0px_#18181B] dark:shadow-none rounded-[3px]'
                    : 'border border-zinc-300 dark:border-zinc-800 bg-[#F2F0EC] dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-[3px]'
                }`}
              >
                03. RESOURCES
              </button>
            </div>

            {/* Tab Content Body */}
            <div className="px-4 sm:px-6 py-6">
              {/* TAB 1: PLAYBOOK */}
              {activeTab === 'playbook' && (
                <div className="space-y-6">
                  {/* 3-Step Execution Micro-Guide */}
                  <div className="bg-white dark:bg-[#141418] border border-zinc-300 dark:border-zinc-800 rounded-[4px] p-4 sm:p-5 shadow-xs">
                    <h3 className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2 mb-4 uppercase tracking-wider">
                      <Terminal className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                      <span>3-Step Execution Micro-Guide</span>
                    </h3>

                    <div className="space-y-4">
                      {/* Step 1: Setup */}
                      <div className="p-3.5 rounded-[3px] border border-zinc-200 dark:border-zinc-800 bg-[#F9F8F6] dark:bg-zinc-900/60">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-[2px] bg-zinc-900 text-white dark:bg-purple-600">
                            01. SETUP
                          </span>
                          <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                            Context &amp; Priming
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
                          {playbook.setup}
                        </p>
                      </div>

                      {/* Step 2: Execute */}
                      <div className="p-3.5 rounded-[3px] border border-zinc-200 dark:border-zinc-800 bg-[#F9F8F6] dark:bg-zinc-900/60">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-[2px] bg-zinc-900 text-white dark:bg-purple-600">
                            02. EXECUTE
                          </span>
                          <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                            Action &amp; Operation
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
                          {playbook.execute}
                        </p>
                      </div>

                      {/* Step 3: Verify */}
                      <div className="p-3.5 rounded-[3px] border border-emerald-500/40 bg-emerald-50/20 dark:bg-emerald-950/20">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-[2px] bg-emerald-600 text-white">
                            03. VERIFY
                          </span>
                          <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
                            Deterministic Verification
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
                          {playbook.verify}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Concept Guide */}
                  {conceptGuide && (
                    <div className="bg-white dark:bg-[#141418] border border-zinc-300 dark:border-zinc-800 rounded-[4px] p-4 sm:p-5 shadow-xs space-y-3">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        <h3 className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                          Concept Guide: {conceptGuide.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
                        {conceptGuide.overview}
                      </p>

                      {conceptGuide.keyPoints && (
                        <div className="space-y-2 pt-2">
                          {conceptGuide.keyPoints.map((kp, idx) => (
                            <div key={idx} className="p-3 rounded-[3px] border border-zinc-200 dark:border-zinc-800 bg-[#F9F8F6] dark:bg-zinc-900/50 text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
                              <strong className="text-zinc-900 dark:text-zinc-100 font-bold block mb-0.5 font-mono">
                                • {kp.lead}
                              </strong>
                              <span>{kp.text}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Common Mistakes */}
                  {mistakes.length > 0 && (
                    <div className="bg-white dark:bg-[#141418] border border-zinc-300 dark:border-zinc-800 rounded-[4px] p-4 sm:p-5 shadow-xs space-y-3">
                      <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
                        <AlertTriangle className="h-4 w-4" />
                        <h3 className="font-mono text-xs font-bold uppercase tracking-wider">
                          Critical Pitfalls to Avoid
                        </h3>
                      </div>
                      <div className="space-y-2">
                        {mistakes.map((m, idx) => (
                          <div key={idx} className="p-3 rounded-[3px] border border-amber-500/30 bg-amber-50/30 dark:bg-amber-950/20 text-xs text-zinc-800 dark:text-zinc-200 leading-relaxed font-sans">
                            {m}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Pro Tips */}
                  {proTips.length > 0 && (
                    <div className="bg-white dark:bg-[#141418] border border-zinc-300 dark:border-zinc-800 rounded-[4px] p-4 sm:p-5 shadow-xs space-y-3">
                      <div className="flex items-center gap-2 text-purple-700 dark:text-purple-400">
                        <Lightbulb className="h-4 w-4" />
                        <h3 className="font-mono text-xs font-bold uppercase tracking-wider">
                          Engineering Pro Tips
                        </h3>
                      </div>
                      <div className="space-y-2">
                        {proTips.map((pt, idx) => (
                          <div key={idx} className="p-3 rounded-[3px] border border-purple-500/30 bg-purple-50/30 dark:bg-purple-950/20 text-xs text-zinc-800 dark:text-zinc-200 leading-relaxed font-sans">
                            {pt}
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
                    <div className="bg-white dark:bg-[#141418] border border-zinc-300 dark:border-zinc-800 rounded-[4px] p-4 sm:p-5 shadow-xs space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                          <span>Customize Prompt Variables</span>
                        </span>
                        <span className="font-mono text-[11px] text-zinc-500">Updates live below</span>
                      </div>

                      <div className="space-y-3 pt-1">
                        {promptLab.variables.map((v) => (
                          <div key={v.id} className="space-y-1.5">
                            <span className="font-mono text-xs text-zinc-600 dark:text-zinc-400 font-semibold block">
                              [{v.label}]:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {v.options.map((opt) => {
                                const isSelected = (selectedVariables[v.id] || v.defaultOption) === opt;
                                return (
                                  <button
                                    key={opt}
                                    type="button"
                                    onClick={() => handleVariableChange(v.id, opt)}
                                    className={`px-2.5 py-1 text-xs font-mono rounded-[3px] border transition-all cursor-pointer ${
                                      isSelected
                                        ? 'border-2 border-zinc-900 dark:border-purple-500 bg-zinc-900 text-white dark:bg-purple-600 font-bold shadow-[2px_2px_0px_0px_#18181B] dark:shadow-none'
                                        : 'border-zinc-300 dark:border-zinc-700 bg-[#F9F8F6] dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:border-zinc-500'
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
                  <div className="rounded-[4px] border-2 border-zinc-900 dark:border-zinc-700 bg-white dark:bg-[#121215] shadow-[4px_4px_0px_0px_#18181B] dark:shadow-[4px_4px_0px_0px_#7C3AED] overflow-hidden">
                    {/* Top Bar */}
                    <div className="border-b border-zinc-300 dark:border-zinc-800 bg-[#F2F0EC] dark:bg-zinc-900 px-4 py-2 flex items-center justify-between font-mono text-xs text-zinc-700 dark:text-zinc-300 select-none">
                      <div className="flex items-center gap-2">
                        <Terminal className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                        <span className="font-bold">prompt_blueprint.md</span>
                      </div>
                      <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                        [{promptLab.recommendedModel}]
                      </span>
                    </div>

                    {/* Code Text Area */}
                    <pre className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 leading-relaxed whitespace-pre-wrap select-all overflow-x-auto max-h-72 bg-[#FAF9F6] dark:bg-[#0E0E12]">
                      {customizedPromptText}
                    </pre>

                    {/* Action Bar */}
                    <div className="border-t border-zinc-300 dark:border-zinc-800 bg-[#F2F0EC]/60 dark:bg-zinc-900/60 p-3 flex flex-wrap items-center justify-between gap-2 font-mono">
                      <div className="flex items-center gap-2">
                        <a
                          href={sanitizeExternalUrl(drawerDeepLinks.chatgpt)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="workspace-btn px-2.5 py-1 text-xs gap-1 font-bold text-emerald-700 dark:text-emerald-400"
                        >
                          <Sparkles className="h-3 w-3" />
                          <span>CHATGPT ↗</span>
                        </a>
                        <a
                          href={sanitizeExternalUrl(drawerDeepLinks.perplexity)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="workspace-btn px-2.5 py-1 text-xs gap-1 font-bold text-cyan-700 dark:text-cyan-400"
                        >
                          <Compass className="h-3 w-3" />
                          <span>PERPLEXITY ↗</span>
                        </a>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handleTogglePromptBookmark}
                          className="workspace-btn px-2.5 py-1 text-xs gap-1 font-medium"
                        >
                          <Bookmark className={`h-3 w-3 ${isPromptSaved ? 'fill-purple-600 text-purple-600' : ''}`} />
                          <span>{isPromptSaved ? 'SAVED' : 'SAVE'}</span>
                        </button>
                        <button
                          type="button"
                          onClick={handleCopyPrompt}
                          className="workspace-btn px-3 py-1 text-xs font-bold gap-1 bg-zinc-900 text-white dark:bg-purple-600"
                        >
                          {copied ? (
                            <>
                              <Check className="h-3 w-3 text-emerald-400" />
                              <span>COPIED!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3" />
                              <span>COPY PROMPT</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: RESOURCES */}
              {activeTab === 'learnRefs' && (
                <div className="space-y-6">
                  {/* Tools Deep Dive */}
                  {step.tools && step.tools.length > 0 && (
                    <div className="bg-white dark:bg-[#141418] border border-zinc-300 dark:border-zinc-800 rounded-[4px] p-4 sm:p-5 shadow-xs space-y-3">
                      <div className="flex items-center gap-2">
                        <Wrench className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        <h3 className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                          Recommended Tool Stack
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.tools.map((t, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-[3px] border border-zinc-200 dark:border-zinc-800 bg-[#F9F8F6] dark:bg-zinc-900/60"
                          >
                            <span className="font-heading font-bold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 block mb-0.5">
                              {t.name}
                            </span>
                            <p className="text-[11px] text-zinc-600 dark:text-zinc-400 font-sans">
                              {t.purpose || t.description || 'Core tool in workflow'}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Official Documentation & Deep Dives */}
                  {resources.length > 0 && (
                    <div className="bg-white dark:bg-[#141418] border border-zinc-300 dark:border-zinc-800 rounded-[4px] p-4 sm:p-5 shadow-xs space-y-3">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        <h3 className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                          Official Documentation &amp; Deep Dives
                        </h3>
                      </div>
                      <div className="space-y-2">
                        {resources.map((res, idx) => (
                          <a
                            key={idx}
                            href={sanitizeExternalUrl(res.url)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="workspace-card p-3 flex items-center justify-between text-xs transition-all block group"
                          >
                            <div className="flex items-center gap-2.5 min-w-0 pr-2">
                              <FileCode className="h-4 w-4 text-purple-600 dark:text-purple-400 shrink-0" />
                              <span className="font-semibold text-zinc-900 dark:text-zinc-100 truncate group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                {res.title}
                              </span>
                              <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-[2px] border border-zinc-300 dark:border-zinc-700 bg-[#F9F8F6] dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 shrink-0 uppercase">
                                {res.badge || 'DOC'}
                              </span>
                            </div>
                            <ExternalLink className="h-3.5 w-3.5 text-zinc-400 group-hover:text-purple-600 shrink-0" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* 3. Sticky Bottom Mechanical Footer */}
          <div className="relative z-30 px-4 sm:px-6 py-3 border-t-2 border-zinc-900 dark:border-zinc-700 bg-white dark:bg-[#121215] flex items-center justify-between gap-3 text-xs shrink-0 shadow-xs font-mono">
            {/* Prev step */}
            <button
              type="button"
              onClick={handlePrevStep}
              disabled={!hasPrev}
              className={`workspace-btn px-3 py-1.5 text-xs font-bold gap-1 ${
                !hasPrev ? 'opacity-40 cursor-not-allowed' : ''
              }`}
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              <span>← PREV</span>
            </button>

            {/* Mark complete */}
            <button
              type="button"
              onClick={() => onToggleComplete(step.id)}
              className={`workspace-btn px-4 py-1.5 text-xs font-bold ${
                isCompleted
                  ? 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-600'
                  : 'bg-zinc-900 text-white dark:bg-purple-600'
              }`}
            >
              {isCompleted ? '✓ COMPLETED' : 'MARK COMPLETE'}
            </button>

            {/* Next step */}
            <button
              type="button"
              onClick={handleNextStep}
              disabled={!hasNext}
              className={`workspace-btn px-3 py-1.5 text-xs font-bold gap-1 ${
                !hasNext ? 'opacity-40 cursor-not-allowed' : ''
              }`}
            >
              <span>NEXT →</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
