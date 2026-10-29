import { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import roadmapsData from '../data/roadmaps.json';
import { roadmapStepsData } from '../data/roadmapSteps';
import StepDrawer from './StepDrawer';
import RoadmapRequestBox from './RoadmapRequestBox';
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  Clock,
  Sparkles,
  Layers,
  ChevronRight,
  RotateCcw,
  ExternalLink,
  ShieldAlert,
  GitBranch,
  Terminal,
  Bookmark,
  Share2,
  Check
} from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';
import { safeJsonParse } from '../utils/validation';

export default function RoadmapDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { isRoadmapBookmarked, toggleRoadmapBookmark } = useWorkspace();
  const isRoadmapSaved = isRoadmapBookmarked(id);
  const [copiedRoadmapLink, setCopiedRoadmapLink] = useState(false);

  // Find roadmap metadata
  const roadmapMeta = useMemo(() => {
    return roadmapsData.find((r) => r.id === id);
  }, [id]);

  // Find detailed roadmap steps data
  const roadmapData = useMemo(() => {
    return roadmapStepsData[id] || null;
  }, [id]);

  // Selected step for the side drawer
  const [activeStep, setActiveStep] = useState(null);
  const [drawerTab, setDrawerTab] = useState('playbook');

  // Dynamic Browser Tab Title for Roadmap Detail
  useEffect(() => {
    if (roadmapMeta?.title) {
      document.title = `${roadmapMeta.title} Roadmap — useai.sh`;
    } else if (roadmapData?.title) {
      document.title = `${roadmapData.title} Roadmap — useai.sh`;
    }
  }, [roadmapMeta, roadmapData]);

  // Copy shareable roadmap link
  const handleCopyRoadmapLink = async () => {
    try {
      const url = `${window.location.origin}/roadmap/${roadmapMeta?.id || id}`;
      await navigator.clipboard.writeText(url);
      setCopiedRoadmapLink(true);
      setTimeout(() => setCopiedRoadmapLink(false), 2000);
    } catch (err) {
      console.error('Failed to copy roadmap link', err);
    }
  };

  // Open step drawer and sync URL query parameter via replaceState
  const handleOpenStep = (step) => {
    setActiveStep(step);
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('step', step.id);
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.replaceState(null, '', newUrl);
  };

  // Close step drawer and clear URL query parameters via replaceState
  const handleCloseDrawer = () => {
    setActiveStep(null);
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete('step');
    searchParams.delete('tab');
    const newQuery = searchParams.toString();
    const newUrl = newQuery ? `${window.location.pathname}?${newQuery}` : window.location.pathname;
    window.history.replaceState(null, '', newUrl);
  };

  // Handle URL query parameters (e.g., ?step=step-2&tab=promptLab) and sync drawer
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const stepParam = searchParams.get('step');
    const tabParam = searchParams.get('tab');

    if (tabParam) {
      setDrawerTab(tabParam);
    }

    if (stepParam && roadmapData?.steps) {
      const matched = roadmapData.steps.find(
        (s) => s.id === stepParam || String(s.stepNumber) === stepParam
      );
      if (matched) {
        setActiveStep(matched);
      }
    } else if (!stepParam) {
      setActiveStep(null);
    }
  }, [location.search, roadmapData]);

  // Reset active drawer only when roadmap id genuinely changes
  const prevIdRef = useRef(id);
  useEffect(() => {
    if (prevIdRef.current !== id) {
      prevIdRef.current = id;
      setActiveStep(null);
    }
  }, [id]);

  // Listen to popstate (browser back/forward) and route reset events
  useEffect(() => {
    const handlePopState = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const stepParam = searchParams.get('step');
      if (stepParam && roadmapData?.steps) {
        const matched = roadmapData.steps.find(
          (s) => s.id === stepParam || String(s.stepNumber) === stepParam
        );
        setActiveStep(matched || null);
      } else {
        setActiveStep(null);
      }
    };

    const handleRouteReset = (e) => {
      if (e?.detail?.pathname && e.detail.pathname !== window.location.pathname) {
        setActiveStep(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('useai_route_changed', handleRouteReset);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('useai_route_changed', handleRouteReset);
    };
  }, [roadmapData]);

  // Filter state ('all' | 'pending' | 'completed')
  const [filterStatus, setFilterStatus] = useState('all');

  // Completed steps tracking in localStorage
  const storageKey = `useai_progress_${id}`;
  const [completedSteps, setCompletedSteps] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(storageKey);
        const parsed = safeJsonParse(saved, null);
        return Array.isArray(parsed) ? parsed : [];
      } catch (e) {
        console.error('Failed to parse completed steps', e);
      }
    }
    return [];
  });

  // Listen for progress updates (e.g., from backup import or reset) without infinite loops
  useEffect(() => {
    const handleProgressSync = () => {
      try {
        const saved = localStorage.getItem(storageKey);
        const parsed = safeJsonParse(saved, null);
        const stepsArr = Array.isArray(parsed) ? parsed : [];
        setCompletedSteps((prev) => {
          if (
            Array.isArray(prev) &&
            prev.length === stepsArr.length &&
            prev.every((item, i) => item === stepsArr[i])
          ) {
            return prev; // Identical: return same reference to prevent infinite render loops
          }
          return stepsArr;
        });
      } catch (e) {
        console.error('Failed to sync progress update', e);
      }
    };
    window.addEventListener('useai_progress_updated', handleProgressSync);
    window.addEventListener('storage', handleProgressSync);
    return () => {
      window.removeEventListener('useai_progress_updated', handleProgressSync);
      window.removeEventListener('storage', handleProgressSync);
    };
  }, [storageKey]);

  // Save to localStorage ONLY when completedSteps genuinely changes (avoids loop)
  useEffect(() => {
    try {
      const currentSaved = localStorage.getItem(storageKey) || '[]';
      const newStr = JSON.stringify(completedSteps);
      if (currentSaved !== newStr) {
        localStorage.setItem(storageKey, newStr);
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event('useai_progress_updated'));
        }
      }
    } catch (e) {
      console.error('Failed to save progress to localStorage', e);
    }
  }, [completedSteps, storageKey]);

  const toggleStepCompletion = (stepId) => {
    setCompletedSteps((prev) =>
      prev.includes(stepId) ? prev.filter((s) => s !== stepId) : [...prev, stepId]
    );
  };

  const handleResetProgress = () => {
    if (window.confirm('Reset all completed steps for this roadmap?')) {
      setCompletedSteps([]);
    }
  };

  // If roadmap not found in roadmapsData
  if (!roadmapMeta) {
    return (
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="p-8 border border-app-border rounded-md bg-app-surface">
          <ShieldAlert className="h-10 w-10 text-amber-500 mx-auto mb-4" />
          <h1 className="font-heading font-bold text-2xl text-app-text mb-2">
            Roadmap Not Found
          </h1>
          <p className="text-xs font-mono text-app-muted mb-6">
            No roadmap exists with identifier &ldquo;{id}&rdquo;.
          </p>
          <Link
            to="/"
            className="px-4 py-2 text-xs font-mono rounded border border-brand-accent bg-brand-accent text-white hover:opacity-90 inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Roadmaps</span>
          </Link>
        </div>
      </main>
    );
  }

  // If roadmap is marked as "coming-soon"
  if (roadmapMeta.status === 'coming-soon' || !roadmapData) {
    return (
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-app-muted hover:text-app-text mb-8 transition-colors duration-150"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to All Roadmaps</span>
        </Link>

        <div className="p-8 border border-app-border rounded-md bg-app-surface text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-app-border bg-app-bg text-xs font-mono text-app-muted mb-4 uppercase">
            <Clock className="h-3.5 w-3.5 text-brand-accent" />
            <span>Curriculum In Development</span>
          </div>

          <h1 className="font-heading font-bold text-2xl sm:text-3xl text-app-text mb-3">
            {roadmapMeta.title}
          </h1>

          <p className="text-xs sm:text-sm text-app-muted font-sans max-w-lg mx-auto mb-6 leading-relaxed">
            {roadmapMeta.description}
          </p>

          <div className="p-4 rounded border border-app-border bg-app-bg text-xs font-mono text-app-muted text-left mb-6 space-y-2">
            <div className="flex items-center justify-between pb-2 border-b border-app-border">
              <span>Category:</span>
              <span className="text-app-text">{roadmapMeta.category}</span>
            </div>
            <div className="flex items-center justify-between pb-2 border-b border-app-border">
              <span>Planned Steps:</span>
              <span className="text-app-text">{roadmapMeta.stepCount} nodes</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Status:</span>
              <span className="text-amber-400">COMMUNITY PEER REVIEW</span>
            </div>
          </div>

          <p className="text-xs text-app-muted font-sans mb-6">
            This roadmap is currently being curated by senior engineers. Enter your email below to be notified the moment this roadmap goes live.
          </p>

          <div className="flex items-center justify-center gap-3">
            <Link
              to="/roadmaps"
              className="px-3.5 py-2 text-xs font-sans font-medium rounded-md border border-app-border bg-app-bg text-app-text hover:border-brand-accent transition-colors duration-150"
            >
              Browse Ready Roadmaps
            </Link>
            <a
              href={import.meta.env.VITE_GITHUB_REPO_URL || 'https://github.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-sans font-semibold rounded-md border border-brand-accent bg-brand-accent text-white hover:opacity-90 inline-flex items-center gap-1.5 transition-opacity duration-150"
            >
              <GitBranch className="h-3.5 w-3.5" />
              <span>Contribute Curriculum</span>
            </a>
          </div>
        </div>

        {/* Inline Request & Notification Box */}
        <div className="mt-12">
          <RoadmapRequestBox />
        </div>
      </main>
    );
  }

  const allSteps = roadmapData.steps || [];
  const totalSteps = allSteps.length;
  const completedCount = completedSteps.length;
  const progressPercent = totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0;

  // Filtered steps
  const displaySteps = allSteps.filter((step) => {
    const isDone = completedSteps.includes(step.id);
    if (filterStatus === 'completed') return isDone;
    if (filterStatus === 'pending') return !isDone;
    return true;
  });

  const formatStepNumber = (num) => (num < 10 ? `0${num}` : `${num}`);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-20">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <Link
          to="/"
          onClick={() => setActiveStep(null)}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-app-muted hover:text-app-text transition-colors duration-150"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Roadmaps</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-xs text-app-muted font-medium">
            Curriculum v1.0
          </span>
          <span className="text-app-border">•</span>
          <span className="text-xs font-semibold text-brand-accent">
            Ready
          </span>
        </div>
      </div>

      {/* Roadmap Header */}
      <header className="mb-10 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full border border-brand-accent/40 bg-brand-accent/10 text-brand-accent">
              {roadmapMeta.category}
            </span>
            <span className="text-xs font-medium text-app-muted">
              {totalSteps} Total Steps
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Copy / Share Roadmap Link Button */}
            <button
              type="button"
              onClick={handleCopyRoadmapLink}
              title="Copy shareable link to this roadmap"
              aria-label="Copy shareable link to this roadmap"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-150 cursor-pointer shadow-xs ${
                copiedRoadmapLink
                  ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                  : 'border-app-border bg-app-surface text-app-muted hover:text-app-text hover:border-brand-accent/50'
              }`}
            >
              {copiedRoadmapLink ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="h-3.5 w-3.5" />
                  <span>Copy Link</span>
                </>
              )}
            </button>

            {/* Bookmark Roadmap Button */}
            <button
              type="button"
              onClick={() => toggleRoadmapBookmark(roadmapMeta)}
              aria-label={isRoadmapSaved ? 'Remove Roadmap from Saved' : 'Save Roadmap'}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-150 cursor-pointer shadow-xs ${
                isRoadmapSaved
                  ? 'border-brand-accent/50 bg-brand-accent/15 text-brand-accent shadow-2xs'
                  : 'border-app-border bg-app-surface text-app-muted hover:text-app-text hover:border-brand-accent/50'
              }`}
            >
              <Bookmark className={`h-3.5 w-3.5 ${isRoadmapSaved ? 'fill-brand-accent text-brand-accent' : ''}`} />
              <span>{isRoadmapSaved ? 'Saved to Workspace' : 'Save Roadmap'}</span>
            </button>
          </div>
        </div>

        <h1 className="font-bold text-3xl sm:text-4xl text-app-text tracking-tight">
          {roadmapData.title}
        </h1>

        <p className="text-sm sm:text-base text-app-muted max-w-3xl leading-relaxed">
          {roadmapData.description}
        </p>

        {/* Utilitarian Progress Card */}
        <div className="mt-6 p-4 rounded-lg border border-app-border bg-app-surface space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="font-bold text-app-text">Progress:</span>
              <span className="text-brand-accent font-semibold">
                {completedCount} of {totalSteps} completed
              </span>
              <span className="text-app-muted">({progressPercent}%)</span>
            </div>

            <div className="flex items-center gap-3">
              {completedCount > 0 && (
                <button
                  onClick={handleResetProgress}
                  type="button"
                  className="text-app-muted hover:text-red-400 inline-flex items-center gap-1 text-xs cursor-pointer font-medium"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Reset</span>
                </button>
              )}
              <div className="flex items-center rounded-md border border-app-border bg-app-bg p-0.5">
                <button
                  onClick={() => setFilterStatus('all')}
                  className={`px-2.5 py-1 text-xs font-medium rounded cursor-pointer ${
                    filterStatus === 'all'
                      ? 'bg-app-surface text-app-text font-semibold border border-app-border shadow-xs'
                      : 'text-app-muted hover:text-app-text'
                  }`}
                >
                  All ({totalSteps})
                </button>
                <button
                  onClick={() => setFilterStatus('pending')}
                  className={`px-2.5 py-1 text-xs font-medium rounded cursor-pointer ${
                    filterStatus === 'pending'
                      ? 'bg-app-surface text-app-text font-semibold border border-app-border shadow-xs'
                      : 'text-app-muted hover:text-app-text'
                  }`}
                >
                  Pending ({totalSteps - completedCount})
                </button>
                <button
                  onClick={() => setFilterStatus('completed')}
                  className={`px-2.5 py-1 text-xs font-medium rounded cursor-pointer ${
                    filterStatus === 'completed'
                      ? 'bg-app-surface text-app-text font-semibold border border-app-border shadow-xs'
                      : 'text-app-muted hover:text-app-text'
                  }`}
                >
                  Done ({completedCount})
                </button>
              </div>
            </div>
          </div>

          {/* Clean Progress Bar */}
          <div className="w-full h-2 rounded-full bg-app-bg border border-app-border overflow-hidden">
            <div
              className="h-full bg-brand-accent transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </header>

      {/* ROADMAP TREE / FLOW LAYOUT */}
      <div className="relative">
        {/* Global Vertical Guide Line */}
        <div
          className="hidden sm:block absolute left-6 top-8 bottom-8 w-[1px] bg-app-border"
          aria-hidden="true"
        />

        <div className="space-y-12">
          {roadmapData.phases.map((phase, pIdx) => {
            const phaseSteps = displaySteps.filter((s) => s.phaseId === phase.id);
            if (phaseSteps.length === 0) return null;

            return (
              <section key={phase.id} className="relative">
                {/* Phase Header Divider */}
                <div className="relative my-6 flex items-center justify-start sm:pl-14">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-app-border"></div>
                  </div>
                  <div className="relative flex items-center gap-2.5 bg-app-bg pr-4">
                    <span className="text-xs font-bold text-brand-accent px-3 py-1 rounded-full border border-brand-accent/40 bg-brand-accent/10">
                      {phase.title}
                    </span>
                    <span className="hidden md:inline text-xs text-app-muted font-medium">
                      {phase.description}
                    </span>
                  </div>
                </div>

                {/* Steps in this phase */}
                <div className="space-y-3 sm:pl-14">
                  {phaseSteps.map((step) => {
                    const isDone = completedSteps.includes(step.id);

                    return (
                      <div
                        key={step.id}
                        onClick={() => handleOpenStep(step)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleOpenStep(step);
                          }
                        }}
                        className={`group relative flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-lg border transition-all duration-150 cursor-pointer select-none text-left ${
                          isDone
                            ? 'border-emerald-500/40 bg-emerald-500/5 hover:border-emerald-500 hover:bg-emerald-500/10'
                            : 'border-app-border bg-app-surface hover:border-brand-accent hover:bg-brand-hover-bg'
                        }`}
                      >
                        {/* Step Checkpoint Indicator Dot for larger screens */}
                        <div
                          className={`hidden sm:flex absolute -left-[45px] top-1/2 -translate-y-1/2 h-6 w-6 rounded-full border items-center justify-center text-xs font-semibold transition-colors duration-150 ${
                            isDone
                              ? 'border-emerald-500 bg-emerald-500/20 text-emerald-400'
                              : 'border-app-border bg-app-surface text-app-muted group-hover:border-brand-accent group-hover:text-brand-accent'
                          }`}
                        >
                          {isDone ? (
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                          ) : (
                            formatStepNumber(step.stepNumber)
                          )}
                        </div>

                        {/* Node Content */}
                        <div className="flex-1 pr-4">
                          <div className="flex items-center gap-2 mb-1.5">
                            {/* Checkbox button inside card */}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleStepCompletion(step.id);
                              }}
                              className="text-app-muted hover:text-emerald-500 transition-colors p-0.5 cursor-pointer"
                              title={isDone ? 'Mark as incomplete' : 'Mark as complete'}
                            >
                              {isDone ? (
                                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                              ) : (
                                <Circle className="h-4 w-4 text-app-muted group-hover:text-app-text" />
                              )}
                            </button>

                            <span className="sm:hidden text-xs font-medium text-app-muted">
                              #{formatStepNumber(step.stepNumber)}
                            </span>

                            <h3
                              className={`font-semibold text-base sm:text-lg tracking-tight transition-colors duration-150 ${
                                isDone
                                  ? 'text-app-text line-through opacity-80'
                                  : 'text-app-text group-hover:text-brand-accent'
                              }`}
                            >
                              {step.title}
                            </h3>
                          </div>

                          <p className="text-sm text-app-muted line-clamp-2 leading-relaxed ml-6 pt-0.5">
                            {step.summary}
                          </p>

                          {/* Tools preview pills */}
                          {step.tools && step.tools.length > 0 && (
                            <div className="flex flex-wrap items-center gap-1.5 mt-2.5 ml-6">
                              {step.tools.map((t, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs font-medium px-2 py-0.5 rounded-full border border-app-border bg-app-bg text-app-muted"
                                >
                                  {t.name}
                                </span>
                              ))}
                              {step.proPrompt && (
                                <span className="text-xs font-medium px-2 py-0.5 rounded-full border border-brand-accent/40 bg-brand-accent/10 text-brand-accent">
                                  + Prompt
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Right side CTA / status */}
                        <div className="mt-3 sm:mt-0 flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-app-border">
                          <span
                            className={`px-2.5 py-1 text-xs rounded-full border font-medium ${
                              isDone
                                ? 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10'
                                : 'border-app-border text-app-muted bg-app-bg group-hover:border-brand-accent group-hover:text-brand-accent'
                            }`}
                          >
                            {isDone ? 'Completed' : 'View Node'}
                          </span>

                          <ChevronRight className="h-4 w-4 text-app-muted group-hover:text-brand-accent group-hover:translate-x-0.5 transition-all duration-150" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* Side Drawer Component with Prev / Next Navigation & Deep-Linking */}
      <StepDrawer
        step={activeStep}
        isOpen={Boolean(activeStep)}
        onClose={handleCloseDrawer}
        isCompleted={activeStep ? completedSteps.includes(activeStep.id) : false}
        onToggleComplete={(stepId) => toggleStepCompletion(stepId)}
        initialTab={drawerTab}
        roadmapId={roadmapMeta?.id || id}
        roadmapTitle={roadmapMeta?.title || 'Roadmap'}
        allSteps={allSteps}
        onSelectStep={handleOpenStep}
      />
    </main>
  );
}
