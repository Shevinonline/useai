import { useState, useEffect } from 'react';
import { ArrowUpRight, Layers, Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getCompletedStepsForRoadmap, getRoadmapBadge } from '../utils/badgeResolver';
import { useWorkspace } from '../context/WorkspaceContext';

function getCategoryCode(category) {
  const cat = String(category || '').toLowerCase();
  if (cat.includes('role')) return 'ROLE';
  if (cat.includes('tool')) return 'TOOL';
  return 'WORKFLOW';
}

export default function RoadmapCard({ roadmap, compact = false }) {
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
        <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-[2px] border border-amber-500/50 bg-amber-500/10 text-amber-700 dark:text-amber-400">
          SOON
        </span>
      );
    }
    if (completedSteps.length >= totalSteps || badge?.type === 'completed') {
      return (
        <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-[2px] border border-emerald-500/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          100% DONE
        </span>
      );
    }
    if (completedSteps.length > 0) {
      return (
        <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-[2px] border border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          {completedSteps.length}/{totalSteps}
        </span>
      );
    }
    if (badge?.type === 'new') {
      return (
        <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-[2px] border border-purple-500/50 bg-purple-500/10 text-purple-700 dark:text-purple-300">
          NEW
        </span>
      );
    }
    if (badge?.type === 'updated') {
      return (
        <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-[2px] border border-sky-500/50 bg-sky-500/10 text-sky-700 dark:text-sky-300">
          UPDATED
        </span>
      );
    }
    return null;
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
      className="workspace-card group relative flex flex-col justify-between cursor-pointer text-left select-none overflow-hidden"
    >
      {/* Top Strip */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 px-4 py-2 flex items-center justify-between bg-[#F9F8F6]/60 dark:bg-zinc-900/40">
        {/* Left: Category Code */}
        <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider px-1.5 py-0.5 rounded-[2px] bg-zinc-200/70 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700">
          {categoryCode}
        </span>

        {/* Right: Boxed Status Tag + Bookmark Icon */}
        <div className="flex items-center gap-1.5">
          {renderStatusTag()}

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
              className={`p-1 rounded-[3px] border transition-all duration-100 cursor-pointer ${
                isSaved
                  ? 'border-purple-600 bg-purple-100 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300'
                  : 'border-transparent text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-200/50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
              }`}
            >
              <Bookmark
                className={`h-3.5 w-3.5 transition-transform duration-100 active:scale-90 ${
                  isSaved ? 'fill-purple-600 text-purple-600 dark:fill-purple-400 dark:text-purple-400' : ''
                }`}
              />
            </button>
          )}
        </div>
      </div>

      {/* Main Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-heading font-bold text-base sm:text-[17px] tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors duration-150 line-clamp-2 mb-2">
            {roadmap.title}
          </h3>

          {roadmap.description && (
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-3">
              {roadmap.description}
            </p>
          )}
        </div>

        {/* Square monospace tool badges */}
        {roadmap.tools && roadmap.tools.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 mt-2">
            {roadmap.tools.slice(0, 3).map((tool, idx) => (
              <span
                key={idx}
                className="rounded-[3px] border border-zinc-300 dark:border-zinc-700 bg-[#F9F8F6] dark:bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-zinc-700 dark:text-zinc-300"
              >
                {typeof tool === 'string' ? tool : tool?.name || tool?.title || ''}
              </span>
            ))}
            {roadmap.tools.length > 3 && (
              <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                +{roadmap.tools.length - 3}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zinc-200 dark:border-zinc-800 px-4 py-2.5 bg-[#F2F0EC]/50 dark:bg-zinc-950/50 flex items-center justify-between">
        {/* Step Count Status */}
        <div className="font-mono text-xs font-semibold">
          {completedSteps.length > 0 ? (
            <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              {completedSteps.length} / {totalSteps} DONE
            </span>
          ) : (
            <span className="text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-500" />
              {totalSteps} STEPS
            </span>
          )}
        </div>

        {/* Action CTA */}
        <div className="flex items-center gap-1 font-mono text-xs font-bold">
          {isReady ? (
            <span className="text-zinc-900 dark:text-zinc-100 group-hover:text-purple-700 dark:group-hover:text-purple-400 flex items-center gap-1 transition-colors">
              <span>{completedSteps.length > 0 ? 'CONTINUE TRACK' : 'START TRACK'}</span>
              <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          ) : (
            <span className="text-amber-700 dark:text-amber-400 flex items-center gap-1">
              <span>VOTE / REQUEST</span>
              <ArrowUpRight className="h-3 w-3" />
            </span>
          )}
        </div>
      </div>

      {/* Crisp 3px Progress Bar Along Bottom Edge */}
      {completedSteps.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ${
              completedSteps.length >= totalSteps ? 'bg-emerald-500' : 'bg-emerald-600'
            }`}
            style={{ width: `${Math.min(100, Math.round((completedSteps.length / totalSteps) * 100))}%` }}
          />
        </div>
      )}
    </div>
  );
}
