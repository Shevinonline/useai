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
        <span className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold px-2 py-0.5 rounded-[3px] bg-slate-100 text-[#10162F] dark:bg-slate-800 dark:text-slate-300 border border-[#10162F]">
          <Clock className="h-3 w-3" />
          <span>SOON</span>
        </span>
      );
    }
    if (completedSteps.length >= totalSteps || badge?.type === 'completed') {
      return (
        <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold px-2 py-0.5 rounded-[3px] bg-[#008A5E] text-white border border-[#10162F] shadow-[1px_1px_0px_0px_#10162F]">
          100% DONE ✓
        </span>
      );
    }
    if (completedSteps.length > 0) {
      return (
        <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold px-2 py-0.5 rounded-[3px] bg-[#D4F7E8] text-[#008A5E] border border-[#10162F] shadow-[1px_1px_0px_0px_#10162F]">
          {progressPercent}% DONE
        </span>
      );
    }
    if (badge?.type === 'new') {
      return (
        <span className="inline-flex items-center font-mono text-[11px] font-bold px-2 py-0.5 rounded-[3px] bg-[#FFD300] text-[#10162F] border border-[#10162F] shadow-[1px_1px_0px_0px_#10162F]">
          NEW
        </span>
      );
    }
    return (
      <span className="inline-flex items-center font-mono text-[11px] font-bold px-2 py-0.5 rounded-[3px] bg-[#D4F7E8] text-[#10162F] border border-[#10162F] shadow-[1px_1px_0px_0px_#10162F]">
        READY
      </span>
    );
  };

  // Difficulty badge styling
  const renderDifficultyBadge = () => {
    return (
      <span className="inline-flex items-center font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-[3px] border border-[#10162F] bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-white shadow-[1px_1px_0px_0px_#10162F]">
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
      className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[4px_4px_0px_0px_#10162F] dark:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#10162F] dark:hover:shadow-[6px_6px_0px_0px_#FFD300] transition-all duration-150 group relative flex flex-col justify-between p-5 h-full cursor-pointer text-left select-none overflow-hidden"
    >
      <div>
        {/* Header Row: Category Badge + Status Badge + Bookmark */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-[3px] bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-white border border-[#10162F] uppercase tracking-wider shadow-[1px_1px_0px_0px_#10162F]">
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
              className={`p-1.5 rounded-[4px] border-2 border-[#10162F] transition-all cursor-pointer shadow-[2px_2px_0px_0px_#10162F] active:translate-x-[1px] active:translate-y-[1px] ${
                isSaved
                  ? 'bg-[#FFD300] text-[#10162F]'
                  : 'bg-white dark:bg-[#0B1021] text-[#10162F] dark:text-white hover:bg-slate-100'
              }`}
            >
              <Bookmark
                className={`h-4 w-4 transition-transform active:scale-90 ${
                  isSaved ? 'fill-[#10162F] text-[#10162F]' : ''
                }`}
              />
            </button>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="font-display font-bold text-lg text-[#10162F] dark:text-white group-hover:text-[#3A10E5] dark:group-hover:text-[#FFD300] transition-colors line-clamp-2 mt-3 leading-snug">
          {roadmap.title}
        </h3>

        {roadmap.description && (
          <p className="font-sans text-sm text-[#10162F]/80 dark:text-slate-300 line-clamp-2 leading-relaxed mt-1.5">
            {roadmap.description}
          </p>
        )}

        {/* Difficulty, Estimated Duration & Steps Metadata Row */}
        <div className="flex items-center gap-2 mt-3.5 flex-wrap text-[#10162F]/70 dark:text-slate-400 font-sans text-xs">
          {renderDifficultyBadge()}

          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold">
            <Clock className="h-3 w-3 text-[#10162F]/60" />
            <span>{duration}</span>
          </span>

          <span className="text-[#10162F]/40 dark:text-slate-600">•</span>

          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold">
            <Layers className="h-3 w-3 text-[#10162F]/60" />
            <span>{totalSteps} Steps</span>
          </span>
        </div>

        {/* Tool Pills */}
        {roadmap.tools && roadmap.tools.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t-2 border-[#10162F]/15 dark:border-[#3B497E]/60">
            {roadmap.tools.slice(0, 3).map((tool, idx) => (
              <span
                key={idx}
                className="bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-white border border-[#10162F]/40 dark:border-[#3B497E] font-mono text-[11px] font-semibold px-2 py-0.5 rounded-[3px]"
              >
                {typeof tool === 'string' ? tool : tool?.name || tool?.title || ''}
              </span>
            ))}
            {roadmap.tools.length > 3 && (
              <span className="font-mono text-[11px] font-bold text-[#10162F]/60 dark:text-slate-400">
                +{roadmap.tools.length - 3}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Bottom Footer Row with Progress Indicator & Action */}
      <div className="pt-3.5 mt-4 border-t-2 border-[#10162F]/15 dark:border-[#3B497E]/60 flex items-center justify-between text-xs font-mono font-bold">
        <div>
          {completedSteps.length > 0 ? (
            <span className="text-[#008A5E] font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#008A5E]" />
              {completedSteps.length}/{totalSteps} Steps • {progressPercent}%
            </span>
          ) : (
            <span className="text-[#10162F]/70 dark:text-slate-400">
              {totalSteps} Steps
            </span>
          )}
        </div>

        <div>
          {isReady ? (
            <span className="text-[#10162F] dark:text-slate-200 group-hover:text-[#3A10E5] dark:group-hover:text-[#FFD300] font-bold flex items-center gap-1 transition-colors">
              <span>{completedSteps.length > 0 ? 'Continue' : 'Start Track'}</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          ) : (
            <span className="text-[#10162F]/50 dark:text-slate-500 flex items-center gap-1 font-semibold">
              <span>Vote / Request</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          )}
        </div>
      </div>

      {/* Smooth Emerald Bottom Progress Bar */}
      {completedSteps.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#10162F]/10 dark:bg-black/30 overflow-hidden">
          <div
            className="h-full bg-[#008A5E] transition-all duration-300"
            style={{ width: `${Math.min(100, progressPercent)}%` }}
          />
        </div>
      )}
    </div>
  );
}
