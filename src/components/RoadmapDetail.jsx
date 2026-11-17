import { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import roadmapsData from '../data/roadmaps.json';
import { roadmapStepsData } from '../data/roadmapSteps';
import StepDrawer from './StepDrawer';
import RoadmapRequestBox from './RoadmapRequestBox';
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  Clock,
  RotateCcw,
  ShieldAlert,
  GitBranch,
  Bookmark,
  Share2,
  Check,
  FileDown,
  ArrowUpRight
} from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';
import { safeJsonParse } from '../utils/validation';
import { exportRoadmapAsMarkdown } from '../utils/markdownExporter';

export default function RoadmapDetail() {
  const { id } = useParams();
  const location = useLocation();
  const { isRoadmapBookmarked, toggleRoadmapBookmark } = useWorkspace();
  const isRoadmapSaved = isRoadmapBookmarked(id);
  const [copiedRoadmapLink, setCopiedRoadmapLink] = useState(false);
  const [exportedMd, setExportedMd] = useState(false);

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

  // Listen for progress updates without infinite loops
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
            return prev;
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

  // Save to localStorage ONLY when completedSteps genuinely changes
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

  // Export roadmap as Markdown blueprint (.md)
  const handleExportMarkdown = () => {
    try {
      exportRoadmapAsMarkdown(roadmapMeta, roadmapData, completedSteps);
      setExportedMd(true);
      setTimeout(() => setExportedMd(false), 2000);
    } catch (err) {
      console.error('Failed to export roadmap as markdown', err);
    }
  };

  // If roadmap not found in roadmapsData
  if (!roadmapMeta) {
    return (
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="workspace-card p-8 text-center max-w-lg mx-auto">
          <ShieldAlert className="h-10 w-10 text-amber-500 mx-auto mb-4" />
          <h1 className="font-heading font-bold text-2xl text-zinc-900 dark:text-zinc-100 mb-2">
            Roadmap Not Found
          </h1>
          <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-6">
            No roadmap exists with identifier &ldquo;{id}&rdquo;.
          </p>
          <Link
            to="/roadmaps"
            className="workspace-btn px-4 py-2 text-xs font-mono font-bold inline-flex items-center gap-1.5"
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <Link
          to="/roadmaps"
          className="workspace-btn inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>← Back to All Roadmaps</span>
        </Link>

        <div className="workspace-card p-8 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] border border-amber-500/40 bg-amber-500/10 text-xs font-mono font-bold text-amber-700 dark:text-amber-400 mb-4 uppercase">
            <Clock className="h-3.5 w-3.5" />
            <span>Curriculum In Development</span>
          </div>

          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-zinc-900 dark:text-zinc-100 mb-3">
            {roadmapMeta.title}
          </h1>

          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-sans max-w-lg mx-auto mb-6 leading-relaxed">
            {roadmapMeta.description}
          </p>

          <div className="p-4 rounded-[3px] border border-zinc-300 dark:border-zinc-800 bg-[#F9F8F6] dark:bg-zinc-900 text-xs font-mono text-zinc-600 dark:text-zinc-400 text-left mb-6 space-y-2">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-200 dark:border-zinc-800">
              <span>Category:</span>
              <span className="text-zinc-900 dark:text-zinc-200 font-semibold">{roadmapMeta.category}</span>
            </div>
            <div className="flex items-center justify-between pb-2 border-b border-zinc-200 dark:border-zinc-800">
              <span>Planned Steps:</span>
              <span className="text-zinc-900 dark:text-zinc-200 font-semibold">{roadmapMeta.stepCount} nodes</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Status:</span>
              <span className="text-amber-600 dark:text-amber-400 font-bold">COMMUNITY PEER REVIEW</span>
            </div>
          </div>

          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-sans mb-6">
            This roadmap is currently being curated by senior engineers. Enter your email below to be notified the moment this roadmap goes live.
          </p>

          <div className="flex items-center justify-center gap-3">
            <Link
              to="/roadmaps"
              className="workspace-btn px-4 py-2 text-xs font-mono font-medium"
            >
              Browse Ready Roadmaps
            </Link>
            <a
              href={import.meta.env.VITE_GITHUB_REPO_URL || 'https://github.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="workspace-btn px-4 py-2 text-xs font-mono font-bold inline-flex items-center gap-1.5"
            >
              <GitBranch className="h-3.5 w-3.5" />
              <span>Contribute Curriculum</span>
            </a>
          </div>
        </div>

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
    <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-20">
      {/* 1. Codecademy-Inspired Structured Course Console Header */}
      <header className="bg-white dark:bg-[#121215] border-2 border-zinc-900 dark:border-zinc-800 rounded-[4px] shadow-[4px_4px_0px_0px_#18181B] dark:shadow-[4px_4px_0px_0px_#27272A] p-5 sm:p-7 mb-10">
        {/* Console Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-zinc-200 dark:border-zinc-800">
          <Link
            to="/roadmaps"
            onClick={() => setActiveStep(null)}
            className="workspace-btn px-3 py-1.5 text-xs font-mono font-medium gap-1.5"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>← ALL TRACKS</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            {/* Export .md Blueprint Button */}
            <button
              type="button"
              onClick={handleExportMarkdown}
              title="Export complete roadmap as Markdown blueprint for Cursor, Notion & Obsidian"
              aria-label="Export complete roadmap as Markdown blueprint"
              className="workspace-btn px-3 py-1.5 text-xs font-mono font-medium gap-1.5"
            >
              {exportedMd ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span>DOWNLOADED!</span>
                </>
              ) : (
                <>
                  <FileDown className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                  <span>EXPORT .MD</span>
                </>
              )}
            </button>

            {/* Share / Copy Link Button */}
            <button
              type="button"
              onClick={handleCopyRoadmapLink}
              title="Copy shareable link to this roadmap"
              aria-label="Copy shareable link to this roadmap"
              className="workspace-btn px-3 py-1.5 text-xs font-mono font-medium gap-1.5"
            >
              {copiedRoadmapLink ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span>LINK COPIED!</span>
                </>
              ) : (
                <>
                  <Share2 className="h-3.5 w-3.5 text-zinc-600 dark:text-zinc-400" />
                  <span>SHARE</span>
                </>
              )}
            </button>

            {/* Save / Bookmark Button */}
            <button
              type="button"
              onClick={() => toggleRoadmapBookmark(roadmapMeta)}
              aria-label={isRoadmapSaved ? 'Remove Roadmap from Saved' : 'Save Roadmap'}
              className="workspace-btn px-3 py-1.5 text-xs font-mono font-medium gap-1.5"
            >
              <Bookmark className={`h-3.5 w-3.5 ${isRoadmapSaved ? 'fill-purple-600 text-purple-600 dark:fill-purple-400 dark:text-purple-400' : ''}`} />
              <span>{isRoadmapSaved ? 'SAVED' : 'SAVE'}</span>
            </button>
          </div>
        </div>

        {/* Course Title & Overview */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-[2px] bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
              {roadmapMeta.category}
            </span>
            <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
              CURRICULUM v2.0
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-zinc-900 dark:text-zinc-100 tracking-tight mb-2.5">
            {roadmapData.title}
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed font-sans">
            {roadmapData.description}
          </p>
        </div>

        {/* Boxed Metadata Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-6">
          <div className="rounded-[4px] border border-zinc-300 dark:border-zinc-800 bg-[#F9F8F6] dark:bg-zinc-900/60 p-2.5 sm:p-3">
            <span className="block font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-0.5">
              DIFFICULTY
            </span>
            <span className="font-mono text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase">
              {roadmapMeta.difficulty || 'PRACTICAL'}
            </span>
          </div>

          <div className="rounded-[4px] border border-zinc-300 dark:border-zinc-800 bg-[#F9F8F6] dark:bg-zinc-900/60 p-2.5 sm:p-3">
            <span className="block font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-0.5">
              EST. DURATION
            </span>
            <span className="font-mono text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100">
              {roadmapMeta.duration || `~${Math.max(2, Math.ceil(totalSteps * 0.4))} WEEKS`}
            </span>
          </div>

          <div className="rounded-[4px] border border-zinc-300 dark:border-zinc-800 bg-[#F9F8F6] dark:bg-zinc-900/60 p-2.5 sm:p-3">
            <span className="block font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-0.5">
              MODULES
            </span>
            <span className="font-mono text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100">
              {totalSteps} TRACK NODES
            </span>
          </div>

          <div className="rounded-[4px] border border-zinc-300 dark:border-zinc-800 bg-[#F9F8F6] dark:bg-zinc-900/60 p-2.5 sm:p-3">
            <span className="block font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-0.5">
              COMPLETION
            </span>
            <span className="font-mono text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">
              {progressPercent}% DONE ({completedCount}/{totalSteps})
            </span>
          </div>
        </div>

        {/* Segmented Emerald Progress Bar & Filter Bar */}
        <div className="space-y-3 pt-3 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2 font-mono">
              <span className="font-bold text-zinc-900 dark:text-zinc-100">COURSE PROGRESS:</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                {completedCount} of {totalSteps} modules completed
              </span>
            </div>

            <div className="flex items-center gap-2">
              {completedCount > 0 && (
                <button
                  onClick={handleResetProgress}
                  type="button"
                  className="text-zinc-500 hover:text-red-500 inline-flex items-center gap-1 text-xs cursor-pointer font-mono font-medium pr-2"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>RESET</span>
                </button>
              )}

              <div className="inline-flex rounded-[3px] border border-zinc-300 dark:border-zinc-700 bg-[#F9F8F6] dark:bg-zinc-900 p-0.5 font-mono text-[11px]">
                <button
                  type="button"
                  onClick={() => setFilterStatus('all')}
                  className={`px-2.5 py-1 rounded-[2px] transition-colors cursor-pointer ${
                    filterStatus === 'all'
                      ? 'bg-zinc-900 text-white dark:bg-purple-600 font-bold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                  }`}
                >
                  ALL ({totalSteps})
                </button>
                <button
                  type="button"
                  onClick={() => setFilterStatus('pending')}
                  className={`px-2.5 py-1 rounded-[2px] transition-colors cursor-pointer ${
                    filterStatus === 'pending'
                      ? 'bg-zinc-900 text-white dark:bg-purple-600 font-bold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                  }`}
                >
                  PENDING ({totalSteps - completedCount})
                </button>
                <button
                  type="button"
                  onClick={() => setFilterStatus('completed')}
                  className={`px-2.5 py-1 rounded-[2px] transition-colors cursor-pointer ${
                    filterStatus === 'completed'
                      ? 'bg-zinc-900 text-white dark:bg-purple-600 font-bold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                  }`}
                >
                  DONE ({completedCount})
                </button>
              </div>
            </div>
          </div>

          {/* Clean Segmented Progress Bar */}
          <div className="w-full h-2.5 rounded-[2px] bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 overflow-hidden">
            <div
              className="h-full bg-emerald-600 dark:bg-emerald-500 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </header>

      {/* 2. Structured Phases & Step Blocks */}
      <div className="space-y-10">
        {roadmapData.phases.map((phase, pIdx) => {
          const phaseSteps = displaySteps.filter((s) => s.phaseId === phase.id);
          if (phaseSteps.length === 0) return null;

          return (
            <section key={phase.id} className="relative">
              {/* Clean Swiss Architectural Phase Header */}
              <div className="border-y border-zinc-300 dark:border-zinc-800 bg-[#F2F0EC]/80 dark:bg-zinc-900/60 px-4 sm:px-6 py-2.5 my-6 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="font-mono text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-wider">
                    PHASE {formatStepNumber(pIdx + 1)} // {phase.title.toUpperCase()}
                  </span>
                  {phase.description && (
                    <span className="hidden md:inline text-xs text-zinc-500 dark:text-zinc-400 font-sans">
                      — {phase.description}
                    </span>
                  )}
                </div>
                <span className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded-[2px] border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
                  [{phaseSteps.length} MODULES]
                </span>
              </div>

              {/* Steps in this phase */}
              <div className="space-y-3.5">
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
                      className={`workspace-card group relative p-4 sm:p-5 cursor-pointer text-left select-none flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                        isDone
                          ? 'border-emerald-600 dark:border-emerald-500/60 bg-emerald-50/15 dark:bg-emerald-950/10'
                          : ''
                      }`}
                    >
                      {/* Left: Step Block Content */}
                      <div className="flex-1 min-w-0 pr-2">
                        <div className="flex items-center gap-2.5 mb-1.5">
                          {/* Checkbox toggle button */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleStepCompletion(step.id);
                            }}
                            className="text-zinc-400 hover:text-emerald-600 transition-colors cursor-pointer shrink-0"
                            title={isDone ? 'Mark as incomplete' : 'Mark as complete'}
                            aria-label={isDone ? 'Mark as incomplete' : 'Mark as complete'}
                          >
                            {isDone ? (
                              <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                            ) : (
                              <Circle className="h-4 w-4 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200" />
                            )}
                          </button>

                          {/* Boxed Number Badge */}
                          <span className="font-mono text-xs font-bold px-1.5 py-0.5 rounded-[2px] border border-zinc-300 dark:border-zinc-700 bg-[#F9F8F6] dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 shrink-0">
                            [{formatStepNumber(step.stepNumber)}]
                          </span>

                          <h3
                            className={`font-heading font-bold text-base sm:text-lg tracking-tight transition-colors duration-150 truncate ${
                              isDone
                                ? 'text-zinc-700 dark:text-zinc-300 line-through opacity-85'
                                : 'text-zinc-900 dark:text-zinc-100 group-hover:text-purple-700 dark:group-hover:text-purple-400'
                            }`}
                          >
                            {step.title}
                          </h3>
                        </div>

                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed ml-7">
                          {step.summary}
                        </p>

                        {/* Tool badges */}
                        {step.tools && step.tools.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1.5 mt-2.5 ml-7">
                            {step.tools.map((t, idx) => (
                              <span
                                key={idx}
                                className="rounded-[3px] border border-zinc-300 dark:border-zinc-700 bg-[#F9F8F6] dark:bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-zinc-700 dark:text-zinc-300"
                              >
                                {t.name}
                              </span>
                            ))}
                            {step.proPrompt && (
                              <span className="rounded-[3px] border border-purple-500/40 bg-purple-500/10 text-purple-700 dark:text-purple-300 px-2 py-0.5 font-mono text-[11px] font-bold">
                                + PROMPT LAB
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Right: Mechanical Status Indicator */}
                      <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-zinc-200 dark:border-zinc-800 shrink-0">
                        {isDone ? (
                          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-[2px] border border-emerald-600 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 shrink-0 flex items-center gap-1">
                            <span>[COMPLETED ✓]</span>
                          </span>
                        ) : (
                          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-[2px] border border-zinc-900 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 group-hover:border-purple-600 group-hover:text-purple-600 dark:group-hover:text-purple-400 shrink-0 transition-colors flex items-center gap-1">
                            <span>[OPEN MODULE]</span>
                            <ArrowUpRight className="h-3 w-3" />
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
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
