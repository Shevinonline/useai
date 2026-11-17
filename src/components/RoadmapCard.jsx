import { useState, useEffect } from 'react';
import { Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getCompletedStepsForRoadmap, getRoadmapBadge } from '../utils/badgeResolver';
import { useWorkspace } from '../context/WorkspaceContext';

function getCategoryCode(category) {
  const cat = String(category || '').toLowerCase();
  if (cat.includes('role')) return 'ROLE';
  if (cat.includes('tool')) return 'TOOL';
  return 'WORKFLOW';
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
        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] bg-[#F5EFE6] text-[#10162F] dark:bg-[#1B2447] dark:text-slate-200 border border-[#10162F]/40 dark:border-[#3B497E]">
          COMING SOON
        </span>
      );
    }
    if (completedSteps.length >= totalSteps || badge?.type === 'completed') {
      return (
        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] bg-[#008A5E]/15 text-[#008A5E] border border-[#008A5E]">
          100% DONE
        </span>
      );
    }
    if (completedSteps.length > 0) {
      return (
        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] bg-[#008A5E]/15 text-[#008A5E] border border-[#008A5E]">
          {completedSteps.length}/{totalSteps} DONE
        </span>
      );
    }
    if (badge?.type === 'new') {
      return (
        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] bg-[#FFD300] text-[#10162F] border-2 border-[#10162F] shadow-[1px_1px_0px_0px_#10162F]">
          NEW
        </span>
      );
    }
    return (
      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] bg-[#F5EFE6] text-[#10162F] dark:bg-[#1B2447] dark:text-slate-200 border border-[#10162F]/30 dark:border-[#3B497E]">
        {categoryCode}
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
        {/* Top Row: Clean Category/Status Tag + Bookmark Button */}
        <div className="flex items-center justify-between gap-2">
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
              className={`p-1.5 rounded-[3px] border transition-all duration-100 cursor-pointer ${
                isSaved
                  ? 'border-2 border-[#10162F] bg-[#FFD300] text-[#10162F] shadow-[1px_1px_0px_0px_#10162F]'
                  : 'border-transparent text-[#10162F]/40 hover:text-[#10162F] dark:text-slate-400 dark:hover:text-white hover:bg-[#F5EFE6] dark:hover:bg-[#1B2447]'
              }`}
            >
              <Bookmark
                className={`h-4 w-4 transition-transform duration-100 active:scale-90 ${
                  isSaved ? 'fill-[#10162F] text-[#10162F]' : ''
                }`}
              />
            </button>
          )}
        </div>

        {/* Middle: Title, Summary, Tool Badges */}
        <h3 className="font-display font-bold text-lg text-[#10162F] dark:text-white group-hover:text-[#3A10E5] dark:group-hover:text-[#FFD300] transition-colors line-clamp-2 mt-3 leading-snug">
          {roadmap.title}
        </h3>

        {roadmap.description && (
          <p className="font-sans text-sm text-[#10162F]/75 dark:text-slate-300 line-clamp-2 leading-relaxed mt-1.5">
            {roadmap.description}
          </p>
        )}

        {/* Tool Pills */}
        {roadmap.tools && roadmap.tools.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 mt-4">
            {roadmap.tools.slice(0, 3).map((tool, idx) => (
              <span
                key={idx}
                className="bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-slate-200 border border-[#10162F]/30 dark:border-[#3B497E] font-mono text-xs px-2 py-0.5 rounded-[3px]"
              >
                {typeof tool === 'string' ? tool : tool?.name || tool?.title || ''}
              </span>
            ))}
            {roadmap.tools.length > 3 && (
              <span className="font-mono text-xs text-[#10162F]/60 dark:text-slate-400">
                +{roadmap.tools.length - 3}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Bottom Footer */}
      <div className="pt-4 mt-5 border-t border-[#10162F]/15 dark:border-white/10 flex items-center justify-between text-xs font-mono font-bold">
        <div>
          {completedSteps.length > 0 ? (
            <span className="text-[#008A5E] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#008A5E]" />
              {completedSteps.length}/{totalSteps} DONE
            </span>
          ) : (
            <span className="text-[#10162F]/70 dark:text-slate-400">
              {totalSteps} STEPS
            </span>
          )}
        </div>

        <div>
          {isReady ? (
            <span className="text-[#10162F] dark:text-slate-200 group-hover:text-[#3A10E5] dark:group-hover:text-[#FFD300] flex items-center gap-1 transition-colors">
              <span>{completedSteps.length > 0 ? 'Continue Track' : 'Start Track'}</span>
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </span>
          ) : (
            <span className="text-[#10162F]/60 dark:text-slate-400 flex items-center gap-1">
              <span>Vote / Request</span>
              <span>→</span>
            </span>
          )}
        </div>
      </div>

      {/* Crisp 4px Bottom Progress Bar */}
      {completedSteps.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#10162F]/10 dark:bg-white/10 overflow-hidden">
          <div
            className="h-full bg-[#008A5E] transition-all duration-300"
            style={{ width: `${Math.min(100, Math.round((completedSteps.length / totalSteps) * 100))}%` }}
          />
        </div>
      )}
    </div>
  );
}
