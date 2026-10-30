import { useState, useEffect, useMemo, useRef } from 'react';
import {
  X,
  CheckCircle2,
  Circle,
  Copy,
  Check,
  ExternalLink,
  BookOpen,
  Video,
  FileCode,
  Sparkles,
  Terminal,
  Tag,
  AlertTriangle,
  Lightbulb,
  CheckSquare,
  Clock,
  Play,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Link2,
  Compass
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
    isToolBookmarked,
    toggleToolBookmark,
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

  // If drawer is closed or no step is selected, do not render
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

  // Only render active video if officialVideoUrl is explicitly present
  const officialVideoUrl = step.officialVideoUrl || learning.officialVideoUrl || (step.officialVideo && step.officialVideo.url) || null;
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

  const getToolBadgeStyle = (type) => {
    const t = (type || '').toLowerCase();
    if (t.includes('free') || t.includes('open source')) {
      return 'border-[#A7F3D0] bg-[#D1FAE5] text-[#059669]';
    }
    if (t.includes('paid')) {
      return 'border-[#FDE68A] bg-[#FEF3C7] text-[#D97706]';
    }
    return 'border-[#E9D5FF] bg-[#F3E8FF] text-[#7C3AED]';
  };

  const getResourceBadgeStyle = (badge) => {
    const b = (badge || '').toUpperCase();
    if (b.includes('DOC') || b.includes('OFFICIAL')) {
      return 'border-[#BFDBFE] bg-[#EFF6FF] text-[#2563EB]';
    }
    if (b.includes('ARTICLE')) {
      return 'border-[#FDE68A] bg-[#FEF3C7] text-[#D97706]';
    }
    if (b.includes('TEMPLATE') || b.includes('SPEC')) {
      return 'border-[#E9D5FF] bg-[#F3E8FF] text-[#7C3AED]';
    }
    return 'border-[#A7F3D0] bg-[#ECFDF5] text-[#059669]';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Soft dark backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-200"
      />

      {/* Drawer Panel: Paper-White Reading Panel (full width on mobile, max-w-2xl on desktop) */}
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-0 sm:pl-10">
        <div className="w-screen sm:w-auto max-w-full sm:max-w-2xl bg-white text-[#334155] border-l border-[#E2E8F0] flex flex-col shadow-2xl font-sans">
          {/* 1. Fixed Top Utility Bar */}
          <div className="relative z-30 px-4 sm:px-8 py-3.5 sm:py-4 border-b border-[#E2E8F0] flex items-center justify-between gap-3 sm:gap-4 bg-white shrink-0 shadow-xs">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full border border-[#E9D5FF] bg-[#F3E8FF] text-[#7C3AED]">
                Step {formatStepNumber(step.stepNumber)}
              </span>
              <span className="text-xs font-medium text-[#64748B]">
                Node Details
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Copy Step Deep-Link Button */}
              <button
                onClick={handleCopyStepLink}
                type="button"
                title="Copy shareable link to this step"
                aria-label="Copy shareable link to this step"
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-md border transition-all duration-150 cursor-pointer ${
                  copiedStepLink
                    ? 'border-emerald-500/50 bg-emerald-50 text-emerald-600 shadow-2xs'
                    : 'border-[#E2E8F0] bg-[#F8FAFC] text-[#64748B] hover:text-[#0F172A] hover:border-[#CBD5E1]'
                }`}
              >
                {copiedStepLink ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Link2 className="h-3.5 w-3.5 text-[#64748B]" />
                    <span className="hidden sm:inline">Copy Link</span>
                  </>
                )}
              </button>

              {/* Mark Completed Toggle */}
              <button
                onClick={() => onToggleComplete(step.id)}
                type="button"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border transition-colors duration-150 cursor-pointer ${
                  isCompleted
                    ? 'border-[#A7F3D0] bg-[#D1FAE5] text-[#059669] hover:bg-[#A7F3D0]/30'
                    : 'border-[#E2E8F0] bg-[#F8FAFC] text-[#64748B] hover:text-[#0F172A] hover:border-[#CBD5E1]'
                }`}
              >
                {isCompleted ? (
                  <>
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#059669]" />
                    <span>Completed</span>
                  </>
                ) : (
                  <>
                    <Circle className="h-3.5 w-3.5" />
                    <span>Mark Done</span>
                  </>
                )}
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                type="button"
                aria-label="Close drawer"
                className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-[#E2E8F0] bg-white text-[#64748B] hover:text-[#0F172A] hover:border-[#CBD5E1] hover:bg-[#F8FAFC] transition-colors duration-150 cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* 2. Unified Scrollable Body: Title and Description scroll away, Tab Bar sticks at top */}
          <div ref={scrollContainerRef} className="flex-1 overflow-y-auto">
            {/* Scrollable Header Block: Node Title & Description */}
            <div ref={headerRef} className="px-4 sm:px-8 pt-5 sm:pt-6 pb-4 sm:pb-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight mb-3">
                {step.title}
              </h2>
              <p className="text-base text-[#334155] leading-relaxed font-normal">
                {step.description || step.summary}
              </p>
            </div>

            {/* Sticky 3-Tab Navigation Bar */}
            <div className="sticky top-0 z-20 px-4 sm:px-8 border-b border-[#E2E8F0] bg-white shadow-xs">
              <nav className="flex space-x-2 -mb-px" aria-label="Node Details Tabs">
                <button
                  type="button"
                  onClick={() => handleTabChange('playbook')}
                  className={`py-3 px-3 text-sm font-semibold border-b-2 transition-colors duration-150 cursor-pointer ${
                    activeTab === 'playbook'
                      ? 'border-[#7C3AED] text-[#7C3AED]'
                      : 'border-transparent text-[#64748B] hover:text-[#0F172A]'
                  }`}
                >
                  Playbook
                </button>
                <button
                  type="button"
                  onClick={() => handleTabChange('promptLab')}
                  className={`py-3 px-3 text-sm font-semibold border-b-2 transition-colors duration-150 cursor-pointer ${
                    activeTab === 'promptLab'
                      ? 'border-[#7C3AED] text-[#7C3AED]'
                      : 'border-transparent text-[#64748B] hover:text-[#0F172A]'
                  }`}
                >
                  Prompt Lab
                </button>
                <button
                  type="button"
                  onClick={() => handleTabChange('learnRefs')}
                  className={`py-3 px-3 text-sm font-semibold border-b-2 transition-colors duration-150 cursor-pointer ${
                    activeTab === 'learnRefs'
                      ? 'border-[#7C3AED] text-[#7C3AED]'
                      : 'border-transparent text-[#64748B] hover:text-[#0F172A]'
                  }`}
                >
                  Resources
                </button>
              </nav>
            </div>

            {/* Tab Content Body */}
            <div className="px-4 sm:px-8 py-5 sm:py-6">
            {/* TAB 1: PLAYBOOK */}
            {activeTab === 'playbook' && (
              <div className="space-y-8">
                {/* 3-Step Execution Micro-Guide (Vertical Editorial Timeline) */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-[#7C3AED]" />
                    <span>3-Step Execution Micro-Guide</span>
                  </h3>

                  <div className="pt-2 pl-2 space-y-6">
                    {/* Step 1: Setup */}
                    <div className="relative pl-8 border-l-2 border-[#E2E8F0]">
                      <div className="absolute -left-[17px] top-0 h-8 w-8 rounded-full border border-[#E9D5FF] bg-[#F3E8FF] text-[#7C3AED] flex items-center justify-center font-bold text-xs shadow-xs">
                        1
                      </div>
                      <div className="mb-1.5 flex items-center gap-2">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full border border-[#E9D5FF] bg-[#F3E8FF] text-[#7C3AED]">
                          Setup
                        </span>
                        <span className="text-sm font-semibold text-[#0F172A]">
                          Context & Priming
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                        {playbook.setup}
                      </p>
                    </div>

                    {/* Step 2: Execute */}
                    <div className="relative pl-8 border-l-2 border-[#E2E8F0]">
                      <div className="absolute -left-[17px] top-0 h-8 w-8 rounded-full border border-[#E9D5FF] bg-[#F3E8FF] text-[#7C3AED] flex items-center justify-center font-bold text-xs shadow-xs">
                        2
                      </div>
                      <div className="mb-1.5 flex items-center gap-2">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full border border-[#E9D5FF] bg-[#F3E8FF] text-[#7C3AED]">
                          Execute
                        </span>
                        <span className="text-sm font-semibold text-[#0F172A]">
                          Action & Tool Operation
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                        {playbook.execute}
                      </p>
                    </div>

                    {/* Step 3: Verify */}
                    <div className="relative pl-8 border-l-2 border-transparent">
                      <div className="absolute -left-[17px] top-0 h-8 w-8 rounded-full border border-[#A7F3D0] bg-[#D1FAE5] text-[#059669] flex items-center justify-center font-bold text-xs shadow-xs">
                        3
                      </div>
                      <div className="mb-1.5 flex items-center gap-2">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full border border-[#A7F3D0] bg-[#D1FAE5] text-[#059669]">
                          Verify
                        </span>
                        <span className="text-sm font-semibold text-[#0F172A]">
                          Quality & Lint Checks
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                        {playbook.verify}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recommended AI Tools */}
                {step.tools && step.tools.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
                      <Tag className="h-4 w-4 text-[#7C3AED]" />
                      <span>Recommended Tools & Models</span>
                    </h3>

                    <div className="space-y-2.5">
                      {step.tools.map((tool, idx) => {
                        const isToolSaved = isToolBookmarked(tool.id || tool.name);
                        return (
                          <div
                            key={idx}
                            className="p-4 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#7C3AED] hover:bg-white transition-all duration-150"
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-sm text-[#0F172A]">
                                  {tool.name}
                                </span>
                                <span
                                  className={`px-2 py-0.5 text-xs rounded-full border font-medium ${getToolBadgeStyle(tool.type)}`}
                                >
                                  {tool.type}
                                </span>
                              </div>
                              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                                {tool.description}
                              </p>
                              {tool.bestFor && (
                                <div className="pt-0.5">
                                  <span className="text-xs text-[#7C3AED] font-medium">
                                    Best for: {tool.bestFor}
                                  </span>
                                </div>
                              )}
                            </div>

                            <div className="flex items-center gap-1.5 self-start sm:self-center shrink-0">
                              <button
                                type="button"
                                onClick={() => toggleToolBookmark(tool)}
                                title={isToolSaved ? 'Remove from Saved Tools' : 'Save Tool'}
                                aria-label={isToolSaved ? 'Remove from Saved Tools' : 'Save Tool'}
                                className={`p-1.5 rounded-md border transition-all duration-150 cursor-pointer ${
                                  isToolSaved
                                    ? 'border-[#7C3AED]/50 bg-[#7C3AED]/15 text-[#7C3AED] shadow-2xs'
                                    : 'border-[#E2E8F0] bg-white text-[#64748B] hover:text-[#0F172A] hover:border-[#CBD5E1]'
                                }`}
                              >
                                <Bookmark
                                  className={`h-3.5 w-3.5 transition-transform duration-150 active:scale-90 ${
                                    isToolSaved ? 'fill-[#7C3AED] text-[#7C3AED]' : ''
                                  }`}
                                />
                              </button>

                              {tool.url && (
                                <a
                                  href={sanitizeExternalUrl(tool.url)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-3 py-1.5 text-xs font-semibold rounded-md border border-[#E2E8F0] bg-white text-[#0F172A] hover:bg-[#F1F5F9] hover:border-[#CBD5E1] transition-colors duration-150 inline-flex items-center gap-1.5 shadow-xs"
                                >
                                  <span>Visit</span>
                                  <ExternalLink className="h-3 w-3 text-[#64748B]" />
                                </a>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Pitfall vs. Pro-Tip Callout Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  {/* Common Mistakes */}
                  <div className="p-4 sm:p-5 rounded-lg border border-[#FECACA] bg-[#FEF2F2] space-y-2.5 text-left">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#DC2626]">
                      <AlertTriangle className="h-4 w-4 text-[#DC2626] shrink-0" />
                      <span>Common Mistakes (Avoid)</span>
                    </div>
                    <ul className="space-y-2 pt-0.5">
                      {mistakes.map((m, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
                          <span className="text-[#DC2626] font-bold text-xs shrink-0 mt-0.5">✕</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pro Shortcuts */}
                  <div className="p-4 sm:p-5 rounded-lg border border-[#A7F3D0] bg-[#ECFDF5] space-y-2.5 text-left">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#059669]">
                      <Lightbulb className="h-4 w-4 text-[#059669] shrink-0" />
                      <span>Pro Shortcuts (Do This)</span>
                    </div>
                    <ul className="space-y-2 pt-0.5">
                      {proTips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
                          <span className="text-[#059669] font-bold text-xs shrink-0 mt-0.5">✓</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: PROMPT LAB */}
            {activeTab === 'promptLab' && (
              <div className="space-y-6">
                {/* Variable Selector Chips */}
                {promptLab.variables && promptLab.variables.length > 0 && (
                  <div className="space-y-3.5 p-4 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 font-bold text-sm text-[#0F172A]">
                        <Sparkles className="h-4 w-4 text-[#7C3AED]" />
                        <span>Interactive Prompt Parameters</span>
                      </div>
                      <span className="text-xs text-[#64748B]">Click chips to customize</span>
                    </div>

                    <div className="space-y-3 pt-1">
                      {promptLab.variables.map((variable) => {
                        const currentChoice =
                          selectedVariables[variable.id] || variable.defaultOption;

                        return (
                          <div key={variable.id} className="space-y-1.5">
                            <span className="text-xs font-semibold text-[#475569] block">
                              {variable.label}:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {variable.options.map((opt) => {
                                const isSelected = currentChoice === opt;
                                return (
                                  <button
                                    key={opt}
                                    type="button"
                                    onClick={() => handleVariableChange(variable.id, opt)}
                                    className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-all duration-150 cursor-pointer ${
                                      isSelected
                                        ? 'border-[#7C3AED] bg-[#F3E8FF] text-[#7C3AED] font-semibold shadow-xs'
                                        : 'border-[#E2E8F0] bg-white text-[#475569] hover:border-[#CBD5E1] hover:text-[#0F172A]'
                                    }`}
                                  >
                                    {opt}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Prompt Box (Preserves Monospace Inside The Code Block Only) */}
                <div className="space-y-2">
                  <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] overflow-hidden shadow-xs">
                    {/* Header Bar */}
                    <div className="px-4 py-3 border-b border-[#E2E8F0] bg-white flex flex-wrap items-center justify-between gap-2.5 text-xs">
                      <div className="flex items-center gap-2">
                        <Terminal className="h-4 w-4 text-[#7C3AED]" />
                        <span className="text-xs font-medium text-[#64748B] truncate max-w-[280px]">
                          Best run on: <strong className="text-[#0F172A]">{promptLab.recommendedModel}</strong>
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        {/* 1-Click Run in ChatGPT */}
                        <a
                          href={sanitizeExternalUrl(drawerDeepLinks.chatgpt)}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Run customized prompt directly in ChatGPT (opens new tab)"
                          aria-label="Run in ChatGPT"
                          className="px-2.5 py-1.5 text-xs font-semibold rounded-md border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] hover:text-emerald-600 hover:border-emerald-500/40 hover:bg-emerald-50/50 transition-all duration-150 inline-flex items-center gap-1.5 cursor-pointer shadow-2xs group"
                        >
                          <Sparkles className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                          <span>ChatGPT</span>
                          <ExternalLink className="h-3 w-3 text-[#94A3B8] group-hover:text-emerald-500" />
                        </a>

                        {/* 1-Click Run in Perplexity */}
                        <a
                          href={sanitizeExternalUrl(drawerDeepLinks.perplexity)}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Run customized prompt directly in Perplexity (opens new tab)"
                          aria-label="Run in Perplexity"
                          className="px-2.5 py-1.5 text-xs font-semibold rounded-md border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] hover:text-cyan-600 hover:border-cyan-500/40 hover:bg-cyan-50/50 transition-all duration-150 inline-flex items-center gap-1.5 cursor-pointer shadow-2xs group"
                        >
                          <Compass className="h-3.5 w-3.5 text-cyan-500 shrink-0" />
                          <span>Perplexity</span>
                          <ExternalLink className="h-3 w-3 text-[#94A3B8] group-hover:text-cyan-500" />
                        </a>

                        {/* Bookmark Prompt Button */}
                        <button
                          onClick={handleTogglePromptBookmark}
                          type="button"
                          className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-all duration-150 inline-flex items-center gap-1.5 cursor-pointer shadow-2xs ${
                            isPromptSaved
                              ? 'border-amber-400 bg-amber-50 text-amber-700 hover:bg-amber-100'
                              : 'border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] hover:bg-[#E2E8F0]'
                          }`}
                          title={isPromptSaved ? 'Prompt is Saved' : 'Bookmark Prompt'}
                        >
                          <Bookmark className={`h-3.5 w-3.5 ${isPromptSaved ? 'fill-amber-500 text-amber-600' : ''}`} />
                          <span>{isPromptSaved ? 'Saved' : 'Save'}</span>
                        </button>

                        <button
                          onClick={handleCopyPrompt}
                          type="button"
                          className="px-3 py-1.5 text-xs font-semibold rounded-md border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] hover:bg-[#E2E8F0] transition-colors duration-150 inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          {copied ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-[#059669]" />
                              <span className="text-[#059669]">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5 text-[#64748B]" />
                              <span>Copy Prompt</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Preformatted Prompt Body: High Contrast Monospace Reading Box */}
                    <pre className="p-4 bg-[#0F172A] text-[#F8FAFC] font-mono text-xs sm:text-sm leading-relaxed whitespace-pre-wrap select-all overflow-x-auto max-h-80">
                      {customizedPromptText}
                    </pre>

                    {/* Prompt Box Action Footer */}
                    <div className="px-4 py-2.5 border-t border-[#E2E8F0] bg-white flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-2 text-[11px] text-[#64748B]">
                        <span className="font-semibold text-[#0F172A]">1-Click Launch:</span>
                        <a
                          href={sanitizeExternalUrl(drawerDeepLinks.chatgpt)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-emerald-600 hover:underline font-medium"
                          title="Open customized prompt in ChatGPT"
                        >
                          <span>Run in ChatGPT</span>
                          <ExternalLink className="h-2.5 w-2.5" />
                        </a>
                        <span className="text-[#CBD5E1]">•</span>
                        <a
                          href={sanitizeExternalUrl(drawerDeepLinks.perplexity)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-cyan-600 hover:underline font-medium"
                          title="Open customized prompt in Perplexity"
                        >
                          <span>Run in Perplexity</span>
                          <ExternalLink className="h-2.5 w-2.5" />
                        </a>
                      </div>

                      {drawerDeepLinks.isTruncated && (
                        <span className="text-[10px] text-amber-600 font-mono">
                          ⚠️ Prompt query truncated for browser URL limits
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Expected Output Checklist */}
                {promptLab.expectedOutputs && promptLab.expectedOutputs.length > 0 && (
                  <div className="p-4 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] space-y-2.5">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#0F172A]">
                      <CheckSquare className="h-4 w-4 text-[#7C3AED]" />
                      <span>Expected AI Output Checklist</span>
                    </div>
                    <ul className="space-y-2 pt-1">
                      {promptLab.expectedOutputs.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-[#334155]">
                          <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: RESOURCES (Clean Editorial Layout) */}
            {activeTab === 'learnRefs' && (
              <div className="space-y-7">
                {/* Concept Overview & Core Principles (Mini-Article) */}
                {conceptGuide && (
                  <section className="space-y-4 text-left">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-full border border-[#E9D5FF] bg-[#F3E8FF] text-[#7C3AED]">
                        <BookOpen className="h-3.5 w-3.5" />
                        <span>Concept Overview & Core Principles</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                        {conceptGuide.title || `Understanding ${step.title}`}
                      </h3>
                    </div>

                    {/* Overview Paragraph (~80-100 words) */}
                    <p className="text-base text-[#334155] leading-relaxed font-normal">
                      {conceptGuide.overview}
                    </p>

                    {/* Key Principles / Takeaways (3-4 structured bullet points with bold lead-ins) */}
                    {conceptGuide.keyPoints && conceptGuide.keyPoints.length > 0 && (
                      <div className="pt-1 space-y-2.5">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                          Key Principles & Takeaways
                        </h4>
                        <ul className="space-y-2.5">
                          {conceptGuide.keyPoints.map((point, pIdx) => {
                            let lead = '';
                            let explanation = '';
                            if (typeof point === 'object' && point !== null) {
                              lead = point.lead || point.title || '';
                              explanation = point.text || point.explanation || '';
                            } else if (typeof point === 'string') {
                              const parts = point.split(/:\s*(.+)/);
                              if (parts.length >= 2) {
                                lead = parts[0];
                                explanation = parts[1];
                              } else {
                                explanation = point;
                              }
                            }
                            return (
                              <li
                                key={pIdx}
                                className="flex items-start gap-2.5 text-sm sm:text-base text-[#334155] leading-relaxed"
                              >
                                <span className="h-2 w-2 rounded-full bg-[#7C3AED] shrink-0 mt-2" />
                                <span>
                                  {lead && (
                                    <strong className="text-[#0F172A] font-semibold">
                                      {lead}:{' '}
                                    </strong>
                                  )}
                                  {explanation}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}

                    {/* Horizontal 1px divider separating Concept Guide from Video Walkthrough */}
                    <div className="pt-2">
                      <hr className="border-[#E2E8F0] dark:border-[#2D323E]" />
                    </div>
                  </section>
                )}

                {/* Video Walkthrough Section */}
                {officialVideoUrl ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-bold text-[#0F172A] dark:text-white">
                        <Video className="h-4 w-4 text-[#7C3AED]" />
                        <span>Official Video Walkthrough</span>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        Official Studio
                      </span>
                    </div>

                    <div className="rounded-xl border border-[#E2E8F0] dark:border-[#2D323E] bg-[#F8FAFC] dark:bg-[#181A20] p-4 sm:p-5 space-y-3 text-left">
                      <div className="space-y-1">
                        <h4 className="font-bold text-sm sm:text-base text-[#0F172A] dark:text-white leading-snug">
                          {step.title}: Official Walkthrough
                        </h4>
                        <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
                          Produced in-house by useai.sh Studio
                        </p>
                      </div>

                      <a
                        href={sanitizeExternalUrl(officialVideoUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
                      >
                        <Play className="h-4 w-4 fill-current" />
                        <span>Watch Official Walkthrough</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-bold text-[#0F172A] dark:text-white">
                        <Video className="h-4 w-4 text-[#64748B] dark:text-[#94A3B8]" />
                        <span>Video Walkthrough</span>
                      </div>
                    </div>

                    {/* Non-clickable "Official Video Walkthrough • Coming Soon" Card */}
                    <div className="rounded-xl border border-dashed border-[#E2E8F0] dark:border-[#2D323E] bg-[#F8FAFC] dark:bg-[#181A20] p-4 sm:p-5 text-left transition-colors font-['Plus_Jakarta_Sans',sans-serif]">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
                        <div className="flex items-start gap-3.5 min-w-0">
                          <div className="h-10 w-10 rounded-xl bg-white dark:bg-[#232730] border border-[#E2E8F0] dark:border-[#2D323E] flex items-center justify-center shrink-0 shadow-xs text-[#64748B] dark:text-[#94A3B8]">
                            <Video className="h-5 w-5" />
                          </div>
                          <div className="space-y-1 min-w-0">
                            <h4 className="font-bold text-sm sm:text-base text-[#0F172A] dark:text-white leading-snug">
                              Official Video Walkthrough
                            </h4>
                            <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed max-w-md font-normal">
                              Our in-house step-by-step video tutorial for &ldquo;{step.title}&rdquo; is currently in production and will be available soon.
                            </p>
                          </div>
                        </div>

                        <div className="sm:self-center shrink-0 pl-13 sm:pl-0">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border border-[#E2E8F0] dark:border-[#2D323E] bg-white dark:bg-[#232730] text-[#64748B] dark:text-[#94A3B8] cursor-default select-none shadow-xs">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                            Coming Soon
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Horizontal 1px divider separating Video Walkthrough from Official Documentation */}
                {resources && resources.length > 0 && (
                  <div className="pt-1">
                    <hr className="border-[#E2E8F0] dark:border-[#2D323E]" />
                  </div>
                )}

                {/* Official Documentation & Deep Dives */}
                {resources && resources.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#0F172A] dark:text-white">
                      <BookOpen className="h-4 w-4 text-[#7C3AED]" />
                      <span>Official Documentation & Deep Dives</span>
                    </div>

                    <div className="space-y-2">
                      {resources.map((res, idx) => {
                        const badgeText = res.badge || res.type || 'GUIDE';
                        const upper = badgeText.toUpperCase();
                        const isDoc = upper.includes('DOC') || upper.includes('OFFICIAL');
                        const isSpec = upper.includes('TEMPLATE') || upper.includes('SPEC') || upper.includes('GITHUB') || upper.includes('FRAMEWORK');

                        return (
                          <a
                            key={idx}
                            href={sanitizeExternalUrl(res.url)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between p-3.5 rounded-lg border border-[#E2E8F0] dark:border-[#2D323E] bg-[#F8FAFC] dark:bg-[#181A20] text-sm text-[#475569] dark:text-[#94A3B8] hover:bg-white dark:hover:bg-[#232730] hover:text-[#0F172A] dark:hover:text-white hover:border-[#7C3AED] dark:hover:border-[#7C3AED] transition-all duration-150 shadow-xs"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              {isDoc ? (
                                <FileCode className="h-4 w-4 text-blue-500 shrink-0" />
                              ) : isSpec ? (
                                <Terminal className="h-4 w-4 text-[#7C3AED] shrink-0" />
                              ) : (
                                <BookOpen className="h-4 w-4 text-[#7C3AED] shrink-0" />
                              )}
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span className="group-hover:text-[#7C3AED] text-sm font-semibold text-[#0F172A] dark:text-white truncate">
                                  {res.title}
                                </span>
                                <span
                                  className={`px-2 py-0.5 rounded-full border text-[11px] font-semibold shrink-0 ${getResourceBadgeStyle(badgeText)}`}
                                >
                                  {badgeText}
                                </span>
                              </div>
                            </div>
                            <ExternalLink className="h-4 w-4 text-[#94A3B8] group-hover:text-[#7C3AED] shrink-0 ml-2" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
            </div>
          </div>

          {/* 3. Fixed Footer Action Bar with Prev / Next Navigation */}
          <div className="relative z-30 px-4 sm:px-8 py-3 sm:py-3.5 border-t border-[#E2E8F0] bg-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs shrink-0 shadow-xs">
            {/* Left: ESC Hint + Prev / Next Step Navigation */}
            <div className="flex items-center justify-between sm:justify-start gap-3">
              <span className="text-[#64748B] hidden md:inline">
                Press <kbd className="px-1.5 py-0.5 rounded border border-[#CBD5E1] bg-[#F1F5F9] text-[11px] font-mono text-[#475569]">ESC</kbd> to exit
              </span>

              {/* Step Navigation Controls */}
              {allSteps.length > 0 && (
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    disabled={!hasPrev}
                    title={hasPrev ? `Previous: Step ${currentIndex}` : 'First step'}
                    aria-label="Previous step"
                    className={`px-2.5 py-1.5 rounded-md font-semibold text-xs border inline-flex items-center gap-1 transition-all duration-150 ${
                      hasPrev
                        ? 'border-[#CBD5E1] bg-white text-[#0F172A] hover:bg-[#F8FAFC] hover:border-[#94A3B8] cursor-pointer shadow-2xs active:scale-95'
                        : 'border-[#E2E8F0] bg-[#F1F5F9] text-[#94A3B8] cursor-not-allowed opacity-50'
                    }`}
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                    <span>Prev</span>
                  </button>

                  <span className="text-[11px] font-mono font-medium text-[#64748B] px-1 select-none">
                    {currentIndex >= 0 ? `${currentIndex + 1} / ${allSteps.length}` : ''}
                  </span>

                  <button
                    type="button"
                    onClick={handleNextStep}
                    disabled={!hasNext}
                    title={hasNext ? `Next: Step ${currentIndex + 2}` : 'Final step'}
                    aria-label="Next step"
                    className={`px-2.5 py-1.5 rounded-md font-semibold text-xs border inline-flex items-center gap-1 transition-all duration-150 ${
                      hasNext
                        ? 'border-[#CBD5E1] bg-white text-[#0F172A] hover:bg-[#F8FAFC] hover:border-[#94A3B8] cursor-pointer shadow-2xs active:scale-95'
                        : 'border-[#E2E8F0] bg-[#F1F5F9] text-[#94A3B8] cursor-not-allowed opacity-50'
                    }`}
                  >
                    <span>Next</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Right: Mark Step Complete */}
            <button
              onClick={() => onToggleComplete(step.id)}
              type="button"
              className={`px-4 py-2 rounded-md font-semibold text-xs transition-colors duration-150 cursor-pointer ${
                isCompleted
                  ? 'border border-[#E2E8F0] bg-[#F8FAFC] text-[#475569] hover:bg-[#E2E8F0]'
                  : 'border border-[#7C3AED] bg-[#7C3AED] text-white hover:bg-[#6D28D9] shadow-sm'
              }`}
            >
              {isCompleted ? 'Mark as Incomplete' : 'Mark Step Complete'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
