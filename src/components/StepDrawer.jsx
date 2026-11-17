import { useState, useEffect, useMemo, useRef } from 'react';
import {
  X,
  CheckCircle2,
  Circle,
  Copy,
  Check,
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
          'Enforce TypeScript strict mode and clear boundary constraints to prevent visual hallucinations.'
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

      {/* Drawer Panel: Slide-over with crisp 2px left border & warm cream canvas */}
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-0 sm:pl-10">
        <div className="w-screen sm:w-auto max-w-full sm:max-w-2xl bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-[#F8F7F4] border-l-2 border-[#10162F] dark:border-[#3B497E] flex flex-col shadow-2xl font-sans">
          {/* 1. Top Telemetry Bar */}
          <div className="relative z-30 px-4 sm:px-6 py-2.5 border-b-2 border-[#10162F] dark:border-[#3B497E] flex items-center justify-between gap-3 bg-[#F5EFE6] dark:bg-[#131A33] shrink-0 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#10162F] dark:text-white">
                MODULE {formatStepNumber(step.stepNumber)} OF {formatStepNumber(allSteps.length || 10)}
              </span>
              <span className="hidden sm:inline text-[#10162F]/60 dark:text-slate-400">
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
                className="cc-btn-secondary px-2.5 py-1 text-xs font-mono font-bold gap-1"
              >
                {copiedStepLink ? (
                  <>
                    <Check className="h-3 w-3 text-[#008A5E]" />
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
                className={`px-2.5 py-1 text-xs font-mono font-bold rounded-[3px] border-2 transition-all cursor-pointer flex items-center gap-1 ${
                  isCompleted
                    ? 'border-[#008A5E] bg-[#008A5E] text-white shadow-[1px_1px_0px_0px_#10162F]'
                    : 'border-[#10162F] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-white shadow-[1px_1px_0px_0px_#10162F]'
                }`}
              >
                {isCompleted ? (
                  <>
                    <CheckCircle2 className="h-3.5 w-3.5 text-white" />
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
                className="cc-btn-secondary h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* 2. Scrollable Body */}
          <div ref={scrollContainerRef} className="flex-1 overflow-y-auto">
            {/* Header Block */}
            <div ref={headerRef} className="px-4 sm:px-6 pt-5 pb-5 bg-white dark:bg-[#131A33] border-b-2 border-[#10162F] dark:border-[#3B497E]">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] bg-[#FFD300] text-[#10162F] border-2 border-[#10162F] shadow-[1px_1px_0px_0px_#10162F]">
                  STEP {formatStepNumber(step.stepNumber)}
                </span>
                {step.tools && step.tools.length > 0 && (
                  <span className="font-mono text-xs text-[#10162F]/60 dark:text-slate-400">
                    {step.tools.map((t) => t.name).join(' • ')}
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-[#10162F] dark:text-white tracking-tight mb-2">
                {step.title}
              </h2>
              <p className="text-sm text-[#10162F]/80 dark:text-slate-300 leading-relaxed font-sans">
                {step.description || step.summary}
              </p>
            </div>

            {/* Clean Codecademy-style Tabs */}
            <div className="sticky top-0 z-20 px-4 sm:px-6 py-2.5 border-b-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021] flex gap-2">
              <button
                type="button"
                onClick={() => handleTabChange('playbook')}
                className={`px-3.5 py-1.5 font-display text-xs sm:text-sm font-bold rounded-[4px] border-2 transition-all cursor-pointer ${
                  activeTab === 'playbook'
                    ? 'border-[#10162F] bg-[#3A10E5] text-white shadow-[2px_2px_0px_0px_#10162F]'
                    : 'border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-slate-200 hover:-translate-y-0.5'
                }`}
              >
                01. Playbook
              </button>
              <button
                type="button"
                onClick={() => handleTabChange('promptLab')}
                className={`px-3.5 py-1.5 font-display text-xs sm:text-sm font-bold rounded-[4px] border-2 transition-all cursor-pointer ${
                  activeTab === 'promptLab'
                    ? 'border-[#10162F] bg-[#3A10E5] text-white shadow-[2px_2px_0px_0px_#10162F]'
                    : 'border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-slate-200 hover:-translate-y-0.5'
                }`}
              >
                02. Prompt Lab
              </button>
              <button
                type="button"
                onClick={() => handleTabChange('learnRefs')}
                className={`px-3.5 py-1.5 font-display text-xs sm:text-sm font-bold rounded-[4px] border-2 transition-all cursor-pointer ${
                  activeTab === 'learnRefs'
                    ? 'border-[#10162F] bg-[#3A10E5] text-white shadow-[2px_2px_0px_0px_#10162F]'
                    : 'border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-slate-200 hover:-translate-y-0.5'
                }`}
              >
                03. Resources
              </button>
            </div>

            {/* Tab Content Body */}
            <div className="px-4 sm:px-6 py-6">
              {/* TAB 1: PLAYBOOK */}
              {activeTab === 'playbook' && (
                <div className="space-y-6">
                  {/* 3-Step Execution Micro-Guide */}
                  <div className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] p-5 shadow-[4px_4px_0px_0px_#10162F] dark:shadow-[4px_4px_0px_0px_#000000]">
                    <h3 className="font-display text-base font-bold text-[#10162F] dark:text-white flex items-center gap-2 mb-4">
                      <Terminal className="h-4 w-4 text-[#3A10E5] dark:text-[#FFD300]" />
                      <span>3-Step Execution Micro-Guide</span>
                    </h3>

                    <div className="space-y-3.5">
                      {/* Step 1: Setup */}
                      <div className="p-4 rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021]">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] bg-[#10162F] text-white dark:bg-white dark:text-[#10162F]">
                            01. SETUP
                          </span>
                          <span className="font-display font-bold text-sm text-[#10162F] dark:text-white">
                            Context &amp; Priming
                          </span>
                        </div>
                        <p className="text-sm text-[#10162F]/80 dark:text-slate-300 leading-relaxed font-sans">
                          {playbook.setup}
                        </p>
                      </div>

                      {/* Step 2: Execute */}
                      <div className="p-4 rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021]">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] bg-[#3A10E5] text-white">
                            02. EXECUTE
                          </span>
                          <span className="font-display font-bold text-sm text-[#10162F] dark:text-white">
                            Action &amp; Operation
                          </span>
                        </div>
                        <p className="text-sm text-[#10162F]/80 dark:text-slate-300 leading-relaxed font-sans">
                          {playbook.execute}
                        </p>
                      </div>

                      {/* Step 3: Verify */}
                      <div className="p-4 rounded-[4px] border-2 border-[#008A5E] bg-[#008A5E]/10">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] bg-[#008A5E] text-white">
                            03. VERIFY
                          </span>
                          <span className="font-display font-bold text-sm text-[#008A5E]">
                            Deterministic Verification
                          </span>
                        </div>
                        <p className="text-sm text-[#10162F]/80 dark:text-slate-300 leading-relaxed font-sans">
                          {playbook.verify}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Concept Guide */}
                  {conceptGuide && (
                    <div className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] p-5 shadow-[4px_4px_0px_0px_#10162F] dark:shadow-[4px_4px_0px_0px_#000000] space-y-3">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-[#3A10E5] dark:text-[#FFD300]" />
                        <h3 className="font-display text-base font-bold text-[#10162F] dark:text-white">
                          Concept Guide: {conceptGuide.title}
                        </h3>
                      </div>
                      <p className="text-sm text-[#10162F]/80 dark:text-slate-300 leading-relaxed font-sans">
                        {conceptGuide.overview}
                      </p>

                      {conceptGuide.keyPoints && (
                        <div className="space-y-2.5 pt-2">
                          {conceptGuide.keyPoints.map((kp, idx) => (
                            <div key={idx} className="p-3.5 rounded-[4px] border-2 border-[#10162F]/20 dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021] text-xs sm:text-sm text-[#10162F]/85 dark:text-slate-300 leading-relaxed font-sans">
                              <strong className="text-[#10162F] dark:text-white font-display font-bold block mb-1">
                                • {kp.lead}
                              </strong>
                              <span>{kp.text}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Critical Pitfalls to Avoid */}
                  {mistakes.length > 0 && (
                    <div className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] p-5 shadow-[4px_4px_0px_0px_#10162F] dark:shadow-[4px_4px_0px_0px_#000000] space-y-3">
                      <div className="flex items-center gap-2 text-[#10162F] dark:text-white">
                        <AlertTriangle className="h-4 w-4 text-amber-500" />
                        <h3 className="font-display text-base font-bold">
                          Critical Pitfalls to Avoid
                        </h3>
                      </div>
                      <div className="space-y-2.5">
                        {mistakes.map((m, idx) => (
                          <div key={idx} className="p-3.5 rounded-[4px] border-2 border-amber-500/50 bg-amber-50/50 dark:bg-amber-950/20 text-xs sm:text-sm text-[#10162F] dark:text-slate-200 leading-relaxed font-sans">
                            {m}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Pro Tips */}
                  {proTips.length > 0 && (
                    <div className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] p-5 shadow-[4px_4px_0px_0px_#10162F] dark:shadow-[4px_4px_0px_0px_#000000] space-y-3">
                      <div className="flex items-center gap-2 text-[#10162F] dark:text-white">
                        <Lightbulb className="h-4 w-4 text-[#3A10E5] dark:text-[#FFD300]" />
                        <h3 className="font-display text-base font-bold">
                          Engineering Pro Tips
                        </h3>
                      </div>
                      <div className="space-y-2.5">
                        {proTips.map((pt, idx) => (
                          <div key={idx} className="p-3.5 rounded-[4px] border-2 border-[#3A10E5]/40 bg-[#3A10E5]/5 text-xs sm:text-sm text-[#10162F] dark:text-slate-200 leading-relaxed font-sans">
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
                    <div className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] p-5 shadow-[4px_4px_0px_0px_#10162F] dark:shadow-[4px_4px_0px_0px_#000000] space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-sm font-bold text-[#10162F] dark:text-white flex items-center gap-1.5">
                          <Sparkles className="h-4 w-4 text-[#3A10E5] dark:text-[#FFD300]" />
                          <span>Customize Variables</span>
                        </span>
                        <span className="font-mono text-xs text-[#10162F]/60 dark:text-slate-400">Updates live below</span>
                      </div>

                      <div className="space-y-3 pt-2">
                        {promptLab.variables.map((v) => (
                          <div key={v.id} className="space-y-1.5">
                            <span className="font-mono text-xs font-bold text-[#10162F] dark:text-slate-300 block">
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
                                    className={`px-3 py-1.5 text-xs font-mono rounded-[3px] border-2 transition-all cursor-pointer font-bold ${
                                      isSelected
                                        ? 'border-[#10162F] bg-[#3A10E5] text-white shadow-[2px_2px_0px_0px_#10162F]'
                                        : 'border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-slate-300 hover:-translate-y-0.5'
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
                  <div className="rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#131A33] shadow-[4px_4px_0px_0px_#10162F] dark:shadow-[4px_4px_0px_0px_#000000] overflow-hidden">
                    {/* Top Bar */}
                    <div className="border-b-2 border-[#10162F] dark:border-[#3B497E] bg-[#F5EFE6] dark:bg-[#131A33] px-4 py-2.5 flex items-center justify-between font-mono text-xs text-[#10162F] dark:text-white select-none">
                      <div className="flex items-center gap-2">
                        <Terminal className="h-4 w-4 text-[#3A10E5] dark:text-[#FFD300]" />
                        <span className="font-bold">prompt_blueprint.md</span>
                      </div>
                      <span className="font-mono text-xs font-bold text-[#10162F]/60 dark:text-slate-400">
                        [{promptLab.recommendedModel}]
                      </span>
                    </div>

                    {/* Code Text Area */}
                    <pre className="p-5 font-mono text-xs sm:text-sm text-white leading-relaxed whitespace-pre-wrap select-all overflow-x-auto max-h-72 bg-[#10162F] dark:bg-[#0B1021]">
                      {customizedPromptText}
                    </pre>

                    {/* Action Bar */}
                    <div className="border-t-2 border-[#10162F] dark:border-[#3B497E] bg-[#F5EFE6] dark:bg-[#131A33] p-3.5 flex flex-wrap items-center justify-between gap-2.5 font-display">
                      <div className="flex items-center gap-2">
                        <a
                          href={sanitizeExternalUrl(drawerDeepLinks.chatgpt)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cc-btn-secondary px-3 py-1.5 text-xs font-bold text-[#008A5E]"
                        >
                          <Sparkles className="h-3.5 w-3.5 mr-1" />
                          <span>ChatGPT ↗</span>
                        </a>
                        <a
                          href={sanitizeExternalUrl(drawerDeepLinks.perplexity)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cc-btn-secondary px-3 py-1.5 text-xs font-bold text-[#3A10E5] dark:text-[#FFD300]"
                        >
                          <Compass className="h-3.5 w-3.5 mr-1" />
                          <span>Perplexity ↗</span>
                        </a>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handleTogglePromptBookmark}
                          className="cc-btn-secondary px-3 py-1.5 text-xs font-bold"
                        >
                          <Bookmark className={`h-3.5 w-3.5 mr-1 ${isPromptSaved ? 'fill-[#10162F] text-[#10162F]' : ''}`} />
                          <span>{isPromptSaved ? 'SAVED' : 'SAVE'}</span>
                        </button>
                        <button
                          type="button"
                          onClick={handleCopyPrompt}
                          className="cc-btn-primary px-4 py-1.5 text-xs font-bold"
                        >
                          {copied ? (
                            <>
                              <Check className="h-3.5 w-3.5 mr-1 text-[#008A5E]" />
                              <span>COPIED!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5 mr-1" />
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
                    <div className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] p-5 shadow-[4px_4px_0px_0px_#10162F] dark:shadow-[4px_4px_0px_0px_#000000] space-y-3">
                      <div className="flex items-center gap-2">
                        <Wrench className="h-4 w-4 text-[#3A10E5] dark:text-[#FFD300]" />
                        <h3 className="font-display text-base font-bold text-[#10162F] dark:text-white">
                          Recommended Tool Stack
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.tools.map((t, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021]"
                          >
                            <span className="font-display font-bold text-sm text-[#10162F] dark:text-white block mb-0.5">
                              {t.name}
                            </span>
                            <p className="text-xs text-[#10162F]/70 dark:text-slate-300 font-sans">
                              {t.purpose || t.description || 'Core tool in workflow'}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Official Documentation */}
                  {resources.length > 0 && (
                    <div className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] p-5 shadow-[4px_4px_0px_0px_#10162F] dark:shadow-[4px_4px_0px_0px_#000000] space-y-3">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-[#3A10E5] dark:text-[#FFD300]" />
                        <h3 className="font-display text-base font-bold text-[#10162F] dark:text-white">
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
                            className="cc-card p-3.5 flex items-center justify-between text-xs transition-all block group"
                          >
                            <div className="flex items-center gap-2.5 min-w-0 pr-2">
                              <FileCode className="h-4 w-4 text-[#3A10E5] dark:text-[#FFD300] shrink-0" />
                              <span className="font-display font-bold text-sm text-[#10162F] dark:text-white truncate group-hover:text-[#3A10E5] transition-colors">
                                {res.title}
                              </span>
                              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] border border-[#10162F] bg-[#FFD300] text-[#10162F] shrink-0 uppercase">
                                {res.badge || 'DOC'}
                              </span>
                            </div>
                            <span className="font-mono text-xs font-bold text-[#10162F] dark:text-white group-hover:text-[#3A10E5] shrink-0">
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

          {/* 3. Sticky Bottom Mechanical Footer */}
          <div className="relative z-30 px-4 sm:px-6 py-3.5 border-t-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021] flex items-center justify-between gap-3 text-xs shrink-0 font-display">
            {/* Prev step */}
            <button
              type="button"
              onClick={handlePrevStep}
              disabled={!hasPrev}
              className={`cc-btn-secondary px-3.5 py-2 text-xs font-bold gap-1.5 ${
                !hasPrev ? 'opacity-40 cursor-not-allowed' : ''
              }`}
            >
              <ChevronLeft className="h-4 w-4" />
              <span>← PREV</span>
            </button>

            {/* Mark complete */}
            <button
              type="button"
              onClick={() => onToggleComplete(step.id)}
              className={`px-5 py-2 text-xs font-bold rounded-[4px] border-2 border-[#10162F] transition-all cursor-pointer ${
                isCompleted
                  ? 'bg-[#008A5E] text-white shadow-[2px_2px_0px_0px_#10162F]'
                  : 'cc-btn-primary'
              }`}
            >
              {isCompleted ? '✓ COMPLETED' : 'MARK COMPLETE'}
            </button>

            {/* Next step */}
            <button
              type="button"
              onClick={handleNextStep}
              disabled={!hasNext}
              className={`cc-btn-secondary px-3.5 py-2 text-xs font-bold gap-1.5 ${
                !hasNext ? 'opacity-40 cursor-not-allowed' : ''
              }`}
            >
              <span>NEXT →</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
