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
        <div className="cc-card p-8 text-center max-w-lg mx-auto">
          <ShieldAlert className="h-10 w-10 text-amber-500 mx-auto mb-4" />
          <h1 className="font-display font-bold text-2xl text-[#10162F] dark:text-white mb-2">
            Roadmap Not Found
          </h1>
          <p className="text-xs font-mono text-[#10162F]/60 dark:text-slate-400 mb-6">
            No roadmap exists with identifier &ldquo;{id}&rdquo;.
          </p>
          <Link
            to="/roadmaps"
            className="cc-btn-primary px-4 py-2 text-xs font-mono font-bold inline-flex items-center gap-1.5"
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
          className="cc-btn-secondary inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>← Back to All Roadmaps</span>
        </Link>

        <div className="cc-card p-8 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[3px] border-2 border-[#10162F] bg-[#FFD300] text-xs font-mono font-bold text-[#10162F] mb-4 uppercase shadow-[2px_2px_0px_0px_#10162F]">
            <Clock className="h-3.5 w-3.5" />
            <span>Curriculum In Development</span>
          </div>

          <h1 className="font-display font-bold text-2xl sm:text-3xl text-[#10162F] dark:text-white mb-3">
            {roadmapMeta.title}
          </h1>

          <p className="text-sm sm:text-base text-[#10162F]/80 dark:text-slate-300 font-sans max-w-lg mx-auto mb-6 leading-relaxed">
            {roadmapMeta.description}
          </p>

          <div className="p-4 rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021] text-xs font-mono text-[#10162F] dark:text-slate-300 text-left mb-6 space-y-2">
            <div className="flex items-center justify-between pb-2 border-b border-[#10162F]/15 dark:border-white/10">
              <span>Category:</span>
              <span className="font-bold">{roadmapMeta.category}</span>
            </div>
            <div className="flex items-center justify-between pb-2 border-b border-[#10162F]/15 dark:border-white/10">
              <span>Planned Steps:</span>
              <span className="font-bold">{roadmapMeta.stepCount} nodes</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Status:</span>
              <span className="text-[#3A10E5] dark:text-[#FFD300] font-bold">COMMUNITY PEER REVIEW</span>
            </div>
          </div>

          <p className="text-xs text-[#10162F]/70 dark:text-slate-400 font-sans mb-6">
            This roadmap is currently being curated by senior engineers. Enter your email below to be notified the moment this roadmap goes live.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/roadmaps"
              className="cc-btn-secondary px-4 py-2 text-xs font-mono font-bold"
            >
              Browse Ready Roadmaps
            </Link>
            <a
              href={import.meta.env.VITE_GITHUB_REPO_URL || 'https://github.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="cc-btn-primary px-4 py-2 text-xs font-mono font-bold inline-flex items-center gap-1.5"
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
    <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-20">
      {/* 1. Codecademy Course Syllabus Header Card */}
      <header className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[5px_5px_0px_0px_#10162F] dark:shadow-[5px_5px_0px_0px_#000000] p-6 sm:p-8 mb-10 transition-colors">
        {/* Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b-2 border-[#10162F]/15 dark:border-white/10">
          <Link
            to="/roadmaps"
            onClick={() => setActiveStep(null)}
            className="cc-btn-secondary px-3.5 py-1.5 text-xs font-mono font-bold gap-1.5"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>← ALL TRACKS</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            {/* Export .md Blueprint Button */}
            <button
              type="button"
              onClick={handleExportMarkdown}
              title="Export complete roadmap as Markdown blueprint"
              aria-label="Export complete roadmap as Markdown blueprint"
              className="cc-btn-secondary px-3 py-1.5 text-xs font-mono font-bold gap-1.5"
            >
              {exportedMd ? (
                <>
                  <Check className="h-3.5 w-3.5 text-[#008A5E]" />
                  <span>DOWNLOADED!</span>
                </>
              ) : (
                <>
                  <FileDown className="h-3.5 w-3.5 text-[#3A10E5] dark:text-[#FFD300]" />
                  <span>EXPORT .MD</span>
                </>
              )}
            </button>

            {/* Share Link Button */}
            <button
              type="button"
              onClick={handleCopyRoadmapLink}
              title="Copy shareable link to this roadmap"
              aria-label="Copy shareable link to this roadmap"
              className="cc-btn-secondary px-3 py-1.5 text-xs font-mono font-bold gap-1.5"
            >
              {copiedRoadmapLink ? (
                <>
                  <Check className="h-3.5 w-3.5 text-[#008A5E]" />
                  <span>LINK COPIED!</span>
                </>
              ) : (
                <>
                  <Share2 className="h-3.5 w-3.5" />
                  <span>SHARE</span>
                </>
              )}
            </button>

            {/* Save / Bookmark Button */}
            <button
              type="button"
              onClick={() => toggleRoadmapBookmark(roadmapMeta)}
              aria-label={isRoadmapSaved ? 'Remove Roadmap from Saved' : 'Save Roadmap'}
              className={`cc-btn-secondary px-3 py-1.5 text-xs font-mono font-bold gap-1.5 ${
                isRoadmapSaved ? 'bg-[#FFD300] text-[#10162F]' : ''
              }`}
            >
              <Bookmark className={`h-3.5 w-3.5 ${isRoadmapSaved ? 'fill-[#10162F] text-[#10162F]' : ''}`} />
              <span>{isRoadmapSaved ? 'SAVED' : 'SAVE'}</span>
            </button>
          </div>
        </div>

        {/* Course Title & Overview */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-[3px] bg-[#FFD300] text-[#10162F] border-2 border-[#10162F] uppercase tracking-wider shadow-[1px_1px_0px_0px_#10162F]">
              {roadmapMeta.category}
            </span>
            <span className="font-mono text-xs font-bold text-[#10162F]/60 dark:text-slate-400">
              TRACK // {roadmapMeta.id.toUpperCase()}
            </span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#10162F] dark:text-white tracking-tight mb-3">
            {roadmapData.title}
          </h1>

          <p className="font-sans text-sm sm:text-base text-[#10162F]/80 dark:text-slate-300 max-w-3xl leading-relaxed">
            {roadmapData.description}
          </p>
        </div>

        {/* Boxed Metadata Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021] p-3 text-left">
            <span className="block font-mono text-[10px] font-bold text-[#10162F]/60 dark:text-slate-400 uppercase tracking-wider mb-1">
              DIFFICULTY
            </span>
            <span className="font-mono text-xs sm:text-sm font-bold text-[#10162F] dark:text-white uppercase">
              {roadmapMeta.difficulty || 'PRACTICAL'}
            </span>
          </div>

          <div className="rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021] p-3 text-left">
            <span className="block font-mono text-[10px] font-bold text-[#10162F]/60 dark:text-slate-400 uppercase tracking-wider mb-1">
              EST. DURATION
            </span>
            <span className="font-mono text-xs sm:text-sm font-bold text-[#10162F] dark:text-white">
              {roadmapMeta.duration || `~${Math.max(2, Math.ceil(totalSteps * 0.4))} WEEKS`}
            </span>
          </div>

          <div className="rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021] p-3 text-left">
            <span className="block font-mono text-[10px] font-bold text-[#10162F]/60 dark:text-slate-400 uppercase tracking-wider mb-1">
              MODULES
            </span>
            <span className="font-mono text-xs sm:text-sm font-bold text-[#10162F] dark:text-white">
              {totalSteps} TRACK NODES
            </span>
          </div>

          <div className="rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021] p-3 text-left">
            <span className="block font-mono text-[10px] font-bold text-[#10162F]/60 dark:text-slate-400 uppercase tracking-wider mb-1">
              COMPLETION
            </span>
            <span className="font-mono text-xs sm:text-sm font-bold text-[#008A5E]">
              {progressPercent}% DONE ({completedCount}/{totalSteps})
            </span>
          </div>
        </div>

        {/* Segmented Emerald Progress Bar & Filter Bar */}
        <div className="space-y-3 pt-4 border-t-2 border-[#10162F]/15 dark:border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 font-mono">
              <span className="font-bold text-[#10162F] dark:text-white">COURSE PROGRESS:</span>
              <span className="text-[#008A5E] font-bold">
                {completedCount} of {totalSteps} modules completed
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              {completedCount > 0 && (
                <button
                  onClick={handleResetProgress}
                  type="button"
                  className="text-[#10162F]/60 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 inline-flex items-center gap-1 text-xs cursor-pointer font-mono font-bold pr-2"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>RESET</span>
                </button>
              )}

              <div className="inline-flex rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021] p-0.5 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setFilterStatus('all')}
                  className={`px-3 py-1 rounded-[3px] transition-all cursor-pointer font-bold ${
                    filterStatus === 'all'
                      ? 'bg-[#3A10E5] text-white shadow-[1px_1px_0px_0px_#10162F]'
                      : 'text-[#10162F] dark:text-slate-300 hover:bg-[#F5EFE6] dark:hover:bg-[#131A33]'
                  }`}
                >
                  ALL ({totalSteps})
                </button>
                <button
                  type="button"
                  onClick={() => setFilterStatus('pending')}
                  className={`px-3 py-1 rounded-[3px] transition-all cursor-pointer font-bold ${
                    filterStatus === 'pending'
                      ? 'bg-[#3A10E5] text-white shadow-[1px_1px_0px_0px_#10162F]'
                      : 'text-[#10162F] dark:text-slate-300 hover:bg-[#F5EFE6] dark:hover:bg-[#131A33]'
                  }`}
                >
                  PENDING ({totalSteps - completedCount})
                </button>
                <button
                  type="button"
                  onClick={() => setFilterStatus('completed')}
                  className={`px-3 py-1 rounded-[3px] transition-all cursor-pointer font-bold ${
                    filterStatus === 'completed'
                      ? 'bg-[#3A10E5] text-white shadow-[1px_1px_0px_0px_#10162F]'
                      : 'text-[#10162F] dark:text-slate-300 hover:bg-[#F5EFE6] dark:hover:bg-[#131A33]'
                  }`}
                >
                  DONE ({completedCount})
                </button>
              </div>
            </div>
          </div>

          {/* Segmented #008A5E Progress Bar */}
          <div className="w-full h-3 rounded-[3px] bg-[#F5EFE6] dark:bg-[#0B1021] border-2 border-[#10162F] dark:border-[#3B497E] overflow-hidden">
            <div
              className="h-full bg-[#008A5E] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </header>

      {/* 2. Structured Phases & Step Blocks */}
      <div className="space-y-12">
        {roadmapData.phases.map((phase, pIdx) => {
          const phaseSteps = displaySteps.filter((s) => s.phaseId === phase.id);
          if (phaseSteps.length === 0) return null;

          return (
            <section key={phase.id} className="relative">
              {/* Clean Phase Header Bar */}
              <div className="border-b-2 border-[#10162F] dark:border-[#3B497E] pb-3 mb-6 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-[#10162F] dark:text-white">
                    Phase {formatStepNumber(pIdx + 1)}: {phase.title}
                  </h2>
                  {phase.description && (
                    <span className="hidden md:inline text-xs text-[#10162F]/70 dark:text-slate-400 font-sans">
                      — {phase.description}
                    </span>
                  )}
                </div>
                <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-[3px] bg-[#F5EFE6] dark:bg-[#131A33] text-[#10162F] dark:text-[#F8F7F4] border-2 border-[#10162F] dark:border-[#3B497E]">
                  {phaseSteps.length} Modules
                </span>
              </div>

              {/* Module Cards in this phase */}
              <div className="space-y-4">
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
                      className={`cc-card group relative p-5 cursor-pointer text-left select-none flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                        isDone
                          ? 'border-[#008A5E] bg-[#008A5E]/5'
                          : ''
                      }`}
                    >
                      {/* Left: Module Content */}
                      <div className="flex-1 min-w-0 pr-2">
                        <div className="flex items-center gap-2.5 mb-2">
                          {/* Checkbox toggle button */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleStepCompletion(step.id);
                            }}
                            className="transition-transform active:scale-90 cursor-pointer shrink-0"
                            title={isDone ? 'Mark as incomplete' : 'Mark as complete'}
                            aria-label={isDone ? 'Mark as incomplete' : 'Mark as complete'}
                          >
                            {isDone ? (
                              <CheckCircle2 className="h-5 w-5 text-[#008A5E] fill-[#008A5E]/20" />
                            ) : (
                              <Circle className="h-5 w-5 text-[#10162F]/40 hover:text-[#10162F] dark:text-slate-400" />
                            )}
                          </button>

                          {/* Tactile Numbered Badge: [01], [02], ... */}
                          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] border-2 border-[#10162F] bg-[#FFD300] text-[#10162F] shadow-[1px_1px_0px_0px_#10162F] shrink-0">
                            {formatStepNumber(step.stepNumber)}
                          </span>

                          <h3
                            className={`font-display font-bold text-base sm:text-lg tracking-tight transition-colors duration-150 truncate ${
                              isDone
                                ? 'text-[#10162F]/70 dark:text-slate-400 line-through'
                                : 'text-[#10162F] dark:text-white group-hover:text-[#3A10E5] dark:group-hover:text-[#FFD300]'
                            }`}
                          >
                            {step.title}
                          </h3>
                        </div>

                        <p className="font-sans text-xs sm:text-sm text-[#10162F]/75 dark:text-slate-300 line-clamp-2 leading-relaxed ml-7">
                          {step.summary}
                        </p>

                        {/* Tool badges */}
                        {step.tools && step.tools.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1.5 mt-3 ml-7">
                            {step.tools.map((t, idx) => (
                              <span
                                key={idx}
                                className="bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-slate-200 border border-[#10162F]/30 font-mono text-xs px-2 py-0.5 rounded-[3px]"
                              >
                                {t.name}
                              </span>
                            ))}
                            {step.proPrompt && (
                              <span className="bg-[#FFD300] text-[#10162F] border-2 border-[#10162F] px-2 py-0.5 font-mono text-xs font-bold rounded-[3px] shadow-[1px_1px_0px_0px_#10162F]">
                                PROMPT LAB
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Right: Tactile Indicator */}
                      <div className="flex items-center justify-between sm:justify-end gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#10162F]/15 dark:border-white/10 shrink-0">
                        {isDone ? (
                          <span className="font-mono text-xs font-bold px-3 py-1.5 rounded-[3px] border-2 border-[#008A5E] bg-[#008A5E] text-white shrink-0 flex items-center gap-1 shadow-[2px_2px_0px_0px_#10162F]">
                            <span>COMPLETED ✓</span>
                          </span>
                        ) : (
                          <span className="font-mono text-xs font-bold px-3 py-1.5 rounded-[3px] border-2 border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-white group-hover:bg-[#3A10E5] group-hover:text-white group-hover:border-[#10162F] shrink-0 transition-all flex items-center gap-1 shadow-[2px_2px_0px_0px_#10162F]">
                            <span>OPEN MODULE</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
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

      {/* Side Drawer Component */}
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
