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
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';
import { safeJsonParse } from '../utils/validation';
import { exportRoadmapAsMarkdown } from '../utils/markdownExporter';

function getDifficulty(roadmap) {
  if (roadmap?.difficulty) {
    const d = String(roadmap.difficulty).toLowerCase();
    if (d.includes('beg') || d.includes('found')) return 'Beginner';
    if (d.includes('adv') || d.includes('expert') || d.includes('arch')) return 'Advanced';
    return 'Intermediate';
  }
  const title = String(roadmap?.title || '').toLowerCase();
  const stepCount = Number(roadmap?.stepCount) || 10;
  if (stepCount <= 8 || title.includes('intro') || title.includes('prompting basics') || title.includes('beginner')) {
    return 'Beginner';
  }
  if (stepCount >= 14 || title.includes('architect') || title.includes('full-stack') || title.includes('swarms') || title.includes('rag')) {
    return 'Advanced';
  }
  return 'Intermediate';
}

function getDuration(roadmap, totalSteps) {
  if (roadmap?.duration) return roadmap.duration;
  const minHrs = Math.max(2, Math.round(totalSteps * 0.4));
  const maxHrs = Math.max(minHrs + 2, Math.round(totalSteps * 0.7));
  return `~${minHrs}–${maxHrs} hrs`;
}

function getLearningOutcomes(roadmapMeta, roadmapData) {
  if (Array.isArray(roadmapData?.outcomes) && roadmapData.outcomes.length > 0) {
    return roadmapData.outcomes.slice(0, 6);
  }
  if (Array.isArray(roadmapMeta?.outcomes) && roadmapMeta.outcomes.length > 0) {
    return roadmapMeta.outcomes.slice(0, 6);
  }
  const outcomes = [];
  if (roadmapData?.phases) {
    roadmapData.phases.forEach((p) => {
      const cleanTitle = p.title.replace(/^Phase \d+[:\s-]*/i, '').trim();
      if (cleanTitle) {
        outcomes.push(`Master ${cleanTitle}: ${p.description || 'architect production-grade workflows'}`);
      }
    });
  }
  if (outcomes.length < 4 && roadmapData?.steps) {
    roadmapData.steps.forEach((s) => {
      if (outcomes.length < 6) {
        outcomes.push(`Implement ${s.title}: ${s.summary || 'hands-on execution with production prompts'}`);
      }
    });
  }
  return outcomes.slice(0, 6);
}

export default function RoadmapDetail() {
  const { id } = useParams();
  const location = useLocation();
  const { isRoadmapBookmarked, toggleRoadmapBookmark } = useWorkspace();
  const isRoadmapSaved = isRoadmapBookmarked(id);
  const [copiedRoadmapLink, setCopiedRoadmapLink] = useState(false);
  const [exportedMd, setExportedMd] = useState(false);

  // Find roadmap metadata from roadmapsData
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

  const allSteps = useMemo(() => roadmapData?.steps || [], [roadmapData]);
  const totalSteps = allSteps.length;
  const completedCount = completedSteps.length;
  const progressPercent = totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0;
  const isAllDone = totalSteps > 0 && completedCount >= totalSteps;

  const difficulty = getDifficulty(roadmapMeta);
  const duration = getDuration(roadmapMeta, totalSteps);
  const outcomes = useMemo(() => getLearningOutcomes(roadmapMeta, roadmapData), [roadmapMeta, roadmapData]);

  // Compute next unfinished step for primary Continue Learning button
  const nextUnfinishedStep = useMemo(() => {
    if (allSteps.length === 0) return null;
    const unfinished = allSteps.find((s) => !completedSteps.includes(s.id));
    return unfinished || allSteps[0];
  }, [allSteps, completedSteps]);

  // If roadmap not found in roadmapsData
  if (!roadmapMeta) {
    return (
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="cc-card p-8 text-center max-w-lg mx-auto">
          <ShieldAlert className="h-10 w-10 text-amber-500 mx-auto mb-4" />
          <h1 className="font-display font-bold text-2xl text-[#0F172A] dark:text-white mb-2">
            Roadmap Not Found
          </h1>
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-6">
            No roadmap exists with identifier &ldquo;{id}&rdquo;.
          </p>
          <Link
            to="/roadmaps"
            className="cc-btn-primary px-4 py-2 text-xs font-semibold inline-flex items-center gap-1.5"
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
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <Link
          to="/roadmaps"
          className="cc-btn-secondary inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>← Back to All Roadmaps</span>
        </Link>

        <div className="cc-card p-8 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-4 uppercase">
            <Clock className="h-3.5 w-3.5" />
            <span>Curriculum In Development</span>
          </div>

          <h1 className="font-display font-bold text-2xl sm:text-3xl text-[#0F172A] dark:text-white mb-3">
            {roadmapMeta.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-lg mx-auto mb-6 leading-relaxed">
            {roadmapMeta.description}
          </p>

          <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B0F17] text-xs font-mono text-slate-700 dark:text-slate-300 text-left mb-6 space-y-2">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <span>Category:</span>
              <span className="font-bold">{roadmapMeta.category}</span>
            </div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <span>Planned Steps:</span>
              <span className="font-bold">{roadmapMeta.stepCount} nodes</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Status:</span>
              <span className="text-[#4F46E5] dark:text-[#6366F1] font-bold">COMMUNITY PEER REVIEW</span>
            </div>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 font-sans mb-6">
            This roadmap is currently being curated by senior engineers. Enter your email below to be notified the moment this roadmap goes live.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/roadmaps"
              className="cc-btn-secondary px-4 py-2 text-xs font-semibold"
            >
              Browse Ready Roadmaps
            </Link>
            <a
              href={import.meta.env.VITE_GITHUB_REPO_URL || 'https://github.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="cc-btn-primary px-4 py-2 text-xs font-semibold inline-flex items-center gap-1.5"
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

  // Filtered steps
  const displaySteps = allSteps.filter((step) => {
    const isDone = completedSteps.includes(step.id);
    if (filterStatus === 'completed') return isDone;
    if (filterStatus === 'pending') return !isDone;
    return true;
  });

  const formatStepNumber = (num) => (num < 10 ? `0${num}` : `${num}`);

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-20">
      {/* 1. Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-sans text-slate-500 dark:text-slate-400 mb-6">
        <Link to="/roadmaps" className="hover:text-[#4F46E5] dark:hover:text-[#6366F1] transition-colors">
          Roadmaps
        </Link>
        <span>/</span>
        <span className="font-mono text-slate-400 dark:text-slate-500">{roadmapMeta.category}</span>
        <span>/</span>
        <span className="font-semibold text-slate-800 dark:text-slate-200 truncate">{roadmapData.title}</span>
      </nav>

      {/* 2. Structured Roadmap Introduction & Action Console */}
      <header className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[5px_5px_0px_0px_#10162F] dark:shadow-[5px_5px_0px_0px_#000000] p-6 sm:p-8 mb-10 transition-colors">
        {/* Top Meta Strip + Utility Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b-2 border-[#10162F] dark:border-[#3B497E]">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-[3px] bg-[#FFD300] text-[#10162F] border border-[#10162F] uppercase shadow-[1px_1px_0px_0px_#10162F]">
              {roadmapMeta.category}
            </span>
            <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-[3px] bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-white border border-[#10162F] shadow-[1px_1px_0px_0px_#10162F]">
              {difficulty}
            </span>
            <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-[3px] bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-white border border-[#10162F] shadow-[1px_1px_0px_0px_#10162F] flex items-center gap-1">
              <Clock className="h-3 w-3 text-[#10162F]/60" />
              <span>{duration}</span>
            </span>
            <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-[3px] bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-white border border-[#10162F] shadow-[1px_1px_0px_0px_#10162F] flex items-center gap-1">
              <Layers className="h-3 w-3 text-[#10162F]/60" />
              <span>{totalSteps} Steps</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Export .md Blueprint Button */}
            <button
              type="button"
              onClick={handleExportMarkdown}
              title="Export complete roadmap as Markdown blueprint"
              aria-label="Export complete roadmap as Markdown blueprint"
              className="border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] bg-white dark:bg-[#0B1021] text-[#10162F] dark:text-white font-mono font-bold shadow-[2px_2px_0px_0px_#10162F] dark:shadow-[2px_2px_0px_0px_#000000] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F] transition-all px-3 py-1.5 text-xs inline-flex items-center gap-1.5 cursor-pointer"
            >
              {exportedMd ? (
                <>
                  <Check className="h-3.5 w-3.5 text-[#008A5E]" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <FileDown className="h-3.5 w-3.5 text-[#10162F] dark:text-white" />
                  <span>Export .md</span>
                </>
              )}
            </button>

            {/* Share Link Button */}
            <button
              type="button"
              onClick={handleCopyRoadmapLink}
              title="Copy shareable link to this roadmap"
              aria-label="Copy shareable link to this roadmap"
              className="border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] bg-white dark:bg-[#0B1021] text-[#10162F] dark:text-white font-mono font-bold shadow-[2px_2px_0px_0px_#10162F] dark:shadow-[2px_2px_0px_0px_#000000] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F] transition-all px-3 py-1.5 text-xs inline-flex items-center gap-1.5 cursor-pointer"
            >
              {copiedRoadmapLink ? (
                <>
                  <Check className="h-3.5 w-3.5 text-[#008A5E]" />
                  <span>Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="h-3.5 w-3.5 text-[#10162F] dark:text-white" />
                  <span>Share</span>
                </>
              )}
            </button>

            {/* Save / Bookmark Button */}
            <button
              type="button"
              onClick={() => toggleRoadmapBookmark(roadmapMeta)}
              aria-label={isRoadmapSaved ? 'Remove Roadmap from Saved' : 'Save Roadmap'}
              className={`border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] font-mono font-bold shadow-[2px_2px_0px_0px_#10162F] dark:shadow-[2px_2px_0px_0px_#000000] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F] transition-all px-3 py-1.5 text-xs inline-flex items-center gap-1.5 cursor-pointer ${
                isRoadmapSaved
                  ? 'bg-[#FFD300] text-[#10162F]'
                  : 'bg-white dark:bg-[#0B1021] text-[#10162F] dark:text-white'
              }`}
            >
              <Bookmark className={`h-3.5 w-3.5 ${isRoadmapSaved ? 'fill-[#10162F] text-[#10162F]' : 'text-[#10162F] dark:text-white'}`} />
              <span>{isRoadmapSaved ? 'Saved' : 'Save'}</span>
            </button>
          </div>
        </div>

        {/* Title & Description */}
        <div className="mb-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#10162F] dark:text-white tracking-tight mb-3">
            {roadmapData.title}
          </h1>

          <p className="font-sans text-base sm:text-lg text-[#10162F]/80 dark:text-slate-300 max-w-4xl leading-relaxed">
            {roadmapData.description}
          </p>
        </div>

        {/* Primary Overall Progress & Action Bar */}
        <div className="p-5 rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021] shadow-[3px_3px_0px_0px_#10162F] dark:shadow-[3px_3px_0px_0px_#000000] flex flex-col md:flex-row md:items-center justify-between gap-5">
          {/* Progress Details */}
          <div className="space-y-2 flex-1">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="font-bold text-[#10162F] dark:text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#008A5E]" />
                OVERALL TRACK PROGRESS:
              </span>
              <span className="text-[#008A5E] font-bold">
                {completedCount} of {totalSteps} Steps ({progressPercent}%)
              </span>
            </div>

            <div className="w-full h-3 rounded-[3px] border border-[#10162F] bg-white dark:bg-[#131A33] overflow-hidden">
              <div
                className="h-full bg-[#008A5E] transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Primary Learning CTA */}
          <div className="shrink-0">
            {nextUnfinishedStep && (
              <button
                type="button"
                onClick={() => handleOpenStep(nextUnfinishedStep)}
                className="bg-[#3A10E5] text-white dark:bg-[#FFD300] dark:text-[#10162F] border-2 border-[#10162F] rounded-[4px] shadow-[3px_3px_0px_0px_#10162F] font-bold font-display px-6 py-3 text-sm hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#10162F] transition-all inline-flex items-center gap-2 w-full sm:w-auto cursor-pointer"
              >
                {completedCount === 0 ? (
                  <>
                    <span>Start Learning (Step 01)</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                ) : isAllDone ? (
                  <>
                    <span>Review Modules (Step 01)</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    <span>Continue: Step {formatStepNumber(nextUnfinishedStep.stepNumber)}</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Filter Tabs (All / Pending / Done) */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-5 mt-6 border-t-2 border-[#10162F]/15 dark:border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[#10162F] dark:text-slate-300 font-bold uppercase">FILTER SYLLABUS:</span>
            <div className="inline-flex rounded-[4px] border-2 border-[#10162F] bg-white dark:bg-[#131A33] p-0.5 font-mono text-xs shadow-[2px_2px_0px_0px_#10162F]">
              <button
                type="button"
                onClick={() => setFilterStatus('all')}
                className={`px-3 py-1 rounded-[2px] text-xs font-bold transition-all cursor-pointer ${
                  filterStatus === 'all'
                    ? 'bg-[#10162F] text-white dark:bg-[#FFD300] dark:text-[#10162F]'
                    : 'text-[#10162F] dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                All ({totalSteps})
              </button>
              <button
                type="button"
                onClick={() => setFilterStatus('pending')}
                className={`px-3 py-1 rounded-[2px] text-xs font-bold transition-all cursor-pointer ${
                  filterStatus === 'pending'
                    ? 'bg-[#10162F] text-white dark:bg-[#FFD300] dark:text-[#10162F]'
                    : 'text-[#10162F] dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                Pending ({totalSteps - completedCount})
              </button>
              <button
                type="button"
                onClick={() => setFilterStatus('completed')}
                className={`px-3 py-1 rounded-[2px] text-xs font-bold transition-all cursor-pointer ${
                  filterStatus === 'completed'
                    ? 'bg-[#10162F] text-white dark:bg-[#FFD300] dark:text-[#10162F]'
                    : 'text-[#10162F] dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                Done ({completedCount})
              </button>
            </div>
          </div>

          {completedCount > 0 && (
            <button
              onClick={handleResetProgress}
              type="button"
              className="text-[#10162F]/60 hover:text-red-600 dark:hover:text-red-400 inline-flex items-center gap-1 font-mono text-xs font-bold cursor-pointer transition-colors"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Reset Track Progress</span>
            </button>
          )}
        </div>
      </header>

      {/* 3. Structured Learning Outcomes ("What You Will Learn & Build") */}
      {outcomes.length > 0 && (
        <section className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[4px_4px_0px_0px_#10162F] dark:shadow-[4px_4px_0px_0px_#000000] p-6 sm:p-7 mb-12">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-4 w-4 text-[#3A10E5] dark:text-[#FFD300]" />
            <h2 className="font-display font-bold text-lg text-[#10162F] dark:text-white">
              What You Will Learn &amp; Build
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#10162F]/80 dark:text-slate-300 mb-5 leading-relaxed">
            By completing this curriculum, you will possess production-grade competencies and reusable templates:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {outcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-[3px] bg-[#FFF8F2] dark:bg-[#0B1021] border-2 border-[#10162F] dark:border-[#3B497E] shadow-[2px_2px_0px_0px_#10162F] dark:shadow-[2px_2px_0px_0px_#000000] text-xs sm:text-sm text-[#10162F] dark:text-white font-sans leading-relaxed"
              >
                <CheckCircle className="h-4 w-4 text-[#008A5E] shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. Structured Phases & Step Blocks (Syllabus View) */}
      <div className="space-y-12">
        {roadmapData.phases.map((phase, pIdx) => {
          const phaseSteps = displaySteps.filter((s) => s.phaseId === phase.id);
          if (phaseSteps.length === 0) return null;

          const totalInPhase = (roadmapData.steps || []).filter((s) => s.phaseId === phase.id).length;
          const completedInPhase = (roadmapData.steps || []).filter((s) => s.phaseId === phase.id && completedSteps.includes(s.id)).length;
          const isPhaseDone = totalInPhase > 0 && completedInPhase >= totalInPhase;

          return (
            <section key={phase.id} className="relative">
              {/* Phase Header Bar */}
              <div className="border-b-2 border-[#10162F] dark:border-[#3B497E] pb-3 mb-5 flex flex-wrap items-center justify-between gap-3">
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
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span
                    className={`px-2.5 py-0.5 rounded-[3px] border border-[#10162F] shadow-[1px_1px_0px_0px_#10162F] ${
                      isPhaseDone
                        ? 'bg-[#D4F7E8] text-[#008A5E] font-bold'
                        : 'bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-white font-semibold'
                    }`}
                  >
                    {completedInPhase}/{totalInPhase} Completed
                  </span>
                </div>
              </div>

              {/* Module Cards in this phase */}
              <div className="space-y-3.5">
                {phaseSteps.map((step) => {
                  const isDone = completedSteps.includes(step.id);
                  const stepDiff = step.difficulty || difficulty;
                  const stepDuration = step.duration || '~20–30 mins';

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
                      className={`bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[4px_4px_0px_0px_#10162F] dark:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#10162F] dark:hover:shadow-[6px_6px_0px_0px_#FFD300] transition-all duration-150 group relative p-4 sm:p-5 cursor-pointer text-left select-none flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                        isDone
                          ? 'bg-[#D4F7E8]/15 dark:bg-[#008A5E]/10'
                          : ''
                      }`}
                    >
                      {/* Left: Module Content */}
                      <div className="flex-1 min-w-0 pr-2">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
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
                              <CheckCircle2 className="h-5 w-5 text-[#008A5E] fill-[#D4F7E8]" />
                            ) : (
                              <Circle className="h-5 w-5 text-[#10162F]/40 hover:text-[#10162F] dark:text-slate-500 dark:hover:text-white" />
                            )}
                          </button>

                          {/* Numbered Badge */}
                          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-white border border-[#10162F] shadow-[1px_1px_0px_0px_#10162F] shrink-0">
                            {formatStepNumber(step.stepNumber)}
                          </span>

                          <h3
                            className={`font-display font-bold text-base sm:text-lg tracking-tight transition-colors duration-150 truncate ${
                              isDone
                                ? 'text-[#10162F]/50 dark:text-slate-400 line-through'
                                : 'text-[#10162F] dark:text-white group-hover:text-[#3A10E5] dark:group-hover:text-[#FFD300]'
                            }`}
                          >
                            {step.title}
                          </h3>

                          {/* Step Time Estimate & Difficulty */}
                          <div className="flex items-center gap-1.5 ml-auto sm:ml-0 text-[#10162F]/60 dark:text-slate-400 font-mono text-[11px] font-bold">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3 text-[#10162F]/60" />
                              <span>{stepDuration}</span>
                            </span>
                            <span>•</span>
                            <span>{stepDiff}</span>
                          </div>
                        </div>

                        <p className="font-sans text-xs sm:text-sm text-[#10162F]/80 dark:text-slate-300 line-clamp-2 leading-relaxed ml-8">
                          {step.summary}
                        </p>

                        {/* Tool badges */}
                        {step.tools && step.tools.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1.5 mt-3 ml-8">
                            {step.tools.map((t, idx) => (
                              <span
                                key={idx}
                                className="bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-white border border-[#10162F]/40 dark:border-[#3B497E] font-mono text-[11px] font-semibold px-2 py-0.5 rounded-[3px]"
                              >
                                {t.name}
                              </span>
                            ))}
                            {step.proPrompt && (
                              <span className="bg-[#FFD300] text-[#10162F] border border-[#10162F] px-2 py-0.5 font-mono text-[11px] font-bold rounded-[3px] shadow-[1px_1px_0px_0px_#10162F]">
                                PROMPT LAB
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Right: Action Cue */}
                      <div className="flex items-center justify-between sm:justify-end gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#10162F]/15 dark:border-white/10 shrink-0">
                        {isDone ? (
                          <span className="font-mono text-xs font-bold px-3 py-1.5 rounded-[3px] bg-[#D4F7E8] text-[#008A5E] border border-[#10162F] shrink-0 flex items-center gap-1 shadow-[1px_1px_0px_0px_#10162F]">
                            <span>Completed ✓</span>
                          </span>
                        ) : (
                          <span className="font-mono text-xs font-bold px-3 py-1.5 rounded-[3px] border-2 border-[#10162F] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-white group-hover:bg-[#3A10E5] group-hover:text-white dark:group-hover:bg-[#FFD300] dark:group-hover:text-[#10162F] shrink-0 transition-all flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#10162F]">
                            <span>Open Workspace</span>
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
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

      {/* Side Workspace Drawer Component */}
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
