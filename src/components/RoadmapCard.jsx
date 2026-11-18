import { useState, useEffect } from 'react';
import { Bookmark, Clock, Layers, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getCompletedStepsForRoadmap, getRoadmapBadge } from '../utils/badgeResolver';
import { useWorkspace } from '../context/WorkspaceContext';

function getCategoryCode(category) {
  const cat = String(category || '').toLowerCase();
  if (cat.includes('role')) return 'ROLE';
  if (cat.includes('tool')) return 'TOOL';
  return 'WORKFLOW';
}

function getDifficulty(roadmap) {
  if (roadmap.difficulty) {
    const d = String(roadmap.difficulty).toLowerCase();
    if (d.includes('beg') || d.includes('found')) return 'Beginner';
    if (d.includes('adv') || d.includes('expert') || d.includes('arch')) return 'Advanced';
    return 'Intermediate';
  }
  const title = String(roadmap.title || '').toLowerCase();
  const stepCount = Number(roadmap.stepCount) || 10;
  if (stepCount <= 8 || title.includes('intro') || title.includes('prompting basics') || title.includes('beginner')) {
    return 'Beginner';
  }
  if (stepCount >= 14 || title.includes('architect') || title.includes('full-stack') || title.includes('swarms') || title.includes('rag')) {
    return 'Advanced';
  }
  return 'Intermediate';
}

function getDuration(roadmap, totalSteps) {
  if (roadmap.duration) return roadmap.duration;
  const minHrs = Math.max(2, Math.round(totalSteps * 0.4));
  const maxHrs = Math.max(minHrs + 2, Math.round(totalSteps * 0.7));
  return `~${minHrs}–${maxHrs} hrs`;
}

export default function RoadmapCard({ roadmap }) {
  const navigate = useNavigate();
  const isReady = roadmap.status === 'ready';
  const { isRoadmapBookmarked, toggleRoadmapBookmark } = useWorkspace();
  const isSaved = isRoadmapBookmarked(roadmap.id);

  const [completedSteps, setCompletedSteps] = useState(() =>
    getCompletedStepsForRoadmap(roadmap.id)
  );

  useEffect(() => {
    const syncProgress = () => {
      setCompletedSteps(getCompletedStepsForRoadmap(roadmap.id));
    };

    window.addEventListener('storage', syncProgress);
    window.addEventListener('focus', syncProgress);
    window.addEventListener('useai_progress_updated', syncProgress);

    return () => {
      window.removeEventListener('storage', syncProgress);
      window.removeEventListener('focus', syncProgress);
      window.removeEventListener('useai_progress_updated', syncProgress);
    };
  }, [roadmap.id]);

  const totalSteps = Number(roadmap.stepCount) || 10;
  const badge = getRoadmapBadge(roadmap, completedSteps.length);
  const categoryCode = getCategoryCode(roadmap.category);
  const difficulty = getDifficulty(roadmap);
  const duration = getDuration(roadmap, totalSteps);
  const progressPercent = totalSteps > 0 ? Math.round((completedSteps.length / totalSteps) * 100) : 0;

  const handleClick = () => {
    if (!isReady) {
      const requestBox = document.getElementById('request-roadmap');
      if (requestBox) {
        requestBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        window.dispatchEvent(
          new CustomEvent('useai_prefill_request', {
            detail: { topic: `Notify me when "${roadmap.title}" is ready` }
          })
        );
        const emailInput = document.getElementById('roadmap-email-input');
        if (emailInput) {
          setTimeout(() => emailInput.focus(), 300);
        }
      } else {
        navigate(`/?request=${encodeURIComponent(`Notify me when "${roadmap.title}" is ready`)}#request-roadmap`);
      }
      return;
    }
    navigate(`/roadmap/${roadmap.id}`);
  };

  // Resolve status tag
  const renderStatusTag = () => {
    if (!isReady || badge?.type === 'coming-soon') {
      return (
        <span className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
          <Clock className="h-3 w-3" />
          <span>SOON</span>
        </span>
      );
    }
    if (completedSteps.length >= totalSteps || badge?.type === 'completed') {
      return (
        <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-[#10B981] dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
          100% DONE ✓
        </span>
      );
    }
    if (completedSteps.length > 0) {
      return (
        <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-[#10B981] dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
          {progressPercent}% DONE
        </span>
      );
    }
    if (badge?.type === 'new') {
      return (
        <span className="inline-flex items-center font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">
          NEW
        </span>
      );
    }
    return (
      <span className="inline-flex items-center font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-[#4F46E5] dark:bg-indigo-950/40 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60">
        READY
      </span>
    );
  };

  // Difficulty badge styling
  const renderDifficultyBadge = () => {
    let colorClasses = 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700';
    if (difficulty === 'Beginner') {
      colorClasses = 'bg-emerald-50 text-emerald-700 border-emerald-200/80 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-800/40';
    } else if (difficulty === 'Intermediate') {
      colorClasses = 'bg-sky-50 text-sky-700 border-sky-200/80 dark:bg-sky-950/30 dark:text-sky-300 dark:border-sky-800/40';
    } else if (difficulty === 'Advanced') {
      colorClasses = 'bg-indigo-50 text-indigo-700 border-indigo-200/80 dark:bg-indigo-950/30 dark:text-indigo-300 dark:border-indigo-800/40';
    }

    return (
      <span className={`inline-flex items-center font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border ${colorClasses}`}>
        {difficulty}
      </span>
    );
  };

  return (
    <div
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.target !== e.currentTarget) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      className="cc-card group relative flex flex-col justify-between p-5 h-full cursor-pointer text-left select-none overflow-hidden"
    >
      <div>
        {/* Header Row: Category Badge + Status Badge + Bookmark */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 uppercase tracking-wider">
              {categoryCode}
            </span>
            {renderStatusTag()}
          </div>

          {isReady && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                toggleRoadmapBookmark(roadmap);
              }}
              title={isSaved ? 'Remove from Saved' : 'Save Roadmap'}
              aria-label={isSaved ? 'Remove from Saved' : 'Save Roadmap'}
              className={`p-1.5 rounded border transition-colors cursor-pointer ${
                isSaved
                  ? 'border-amber-300 bg-amber-50 text-amber-600 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-400'
                  : 'border-transparent text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Bookmark
                className={`h-4 w-4 transition-transform active:scale-90 ${
                  isSaved ? 'fill-amber-400 text-amber-500' : ''
                }`}
              />
            </button>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="font-display font-bold text-lg text-[#0F172A] dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-[#6366F1] transition-colors line-clamp-2 mt-3 leading-snug">
          {roadmap.title}
        </h3>

        {roadmap.description && (
          <p className="font-sans text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mt-1.5">
            {roadmap.description}
          </p>
        )}

        {/* Difficulty, Estimated Duration & Steps Metadata Row */}
        <div className="flex items-center gap-2 mt-3.5 flex-wrap text-slate-500 dark:text-slate-400 font-sans text-xs">
          {renderDifficultyBadge()}

          <span className="inline-flex items-center gap-1 text-[11px] font-mono">
            <Clock className="h-3 w-3 text-slate-400" />
            <span>{duration}</span>
          </span>

          <span className="text-slate-300 dark:text-slate-600">•</span>

          <span className="inline-flex items-center gap-1 text-[11px] font-mono">
            <Layers className="h-3 w-3 text-slate-400" />
            <span>{totalSteps} Steps</span>
          </span>
        </div>

        {/* Tool Pills */}
        {roadmap.tools && roadmap.tools.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80">
            {roadmap.tools.slice(0, 3).map((tool, idx) => (
              <span
                key={idx}
                className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 font-mono text-[11px] px-2 py-0.5 rounded"
              >
                {typeof tool === 'string' ? tool : tool?.name || tool?.title || ''}
              </span>
            ))}
            {roadmap.tools.length > 3 && (
              <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
                +{roadmap.tools.length - 3}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Bottom Footer Row with Progress Indicator & Action */}
      <div className="pt-3.5 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono">
        <div>
          {completedSteps.length > 0 ? (
            <span className="text-[#10B981] font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              {completedSteps.length}/{totalSteps} Steps • {progressPercent}%
            </span>
          ) : (
            <span className="text-slate-500 dark:text-slate-400">
              {totalSteps} Steps
            </span>
          )}
        </div>

        <div>
          {isReady ? (
            <span className="text-slate-700 dark:text-slate-200 group-hover:text-[#4F46E5] dark:group-hover:text-[#6366F1] font-semibold flex items-center gap-1 transition-colors">
              <span>{completedSteps.length > 0 ? 'Continue' : 'Start Track'}</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          ) : (
            <span className="text-slate-400 dark:text-slate-500 flex items-center gap-1">
              <span>Vote / Request</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          )}
        </div>
      </div>

      {/* Smooth Emerald Bottom Progress Bar */}
      {completedSteps.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-[#10B981] transition-all duration-300"
            style={{ width: `${Math.min(100, progressPercent)}%` }}
          />
        </div>
      )}
    </div>
  );
}
