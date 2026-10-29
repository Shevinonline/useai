import { useState, useEffect } from 'react';
import { ArrowUpRight, Clock, Layers, Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getCompletedStepsForRoadmap, getRoadmapBadge } from '../utils/badgeResolver';
import { useWorkspace } from '../context/WorkspaceContext';

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
      className={`group relative flex flex-col justify-between rounded-lg border border-app-border bg-app-surface transition-all duration-150 cursor-pointer text-left select-none overflow-hidden
        hover:border-brand-accent hover:bg-brand-hover-bg hover:-translate-y-0.5
        focus:outline-none focus:border-brand-accent
        ${compact ? 'p-4' : 'p-4'}
      `}
    >
      {/* Top Header */}
      <div>
        <div className={`flex items-start justify-between gap-2 ${compact ? '' : 'mb-2'}`}>
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <h3 className={`font-heading font-semibold tracking-tight text-app-text group-hover:text-brand-accent transition-colors duration-150 line-clamp-2 ${
              compact ? 'text-sm sm:text-[15px] leading-snug' : 'text-base'
            }`}>
              {roadmap.title}
            </h3>
          </div>

          {/* Top-Right Badge Container & Bookmark Button */}
          <div className="shrink-0 flex items-center gap-1.5">
            {badge && (
              <div>
                {/* Priority 1: Completed (100%) */}
                {badge.type === 'completed' && (
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>100% Done ✓</span>
                  </span>
                )}

                {/* Priority 1: In Progress */}
                {badge.type === 'in-progress' && (
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>{badge.label}</span>
                  </span>
                )}

                {/* Priority 2: Auto-Expiring NEW Badge with Pulsing Dot */}
                {badge.type === 'new' && (
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-brand-accent/40 bg-brand-accent/10 text-brand-accent font-sans">
                    <span className="relative flex h-1.5 w-1.5 shrink-0 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-brand-accent opacity-50"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-accent"></span>
                    </span>
                    <span>NEW</span>
                  </span>
                )}

                {/* Priority 3: Auto-Expiring UPDATED Badge with Pulsing Sky Dot */}
                {badge.type === 'updated' && (
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-sky-500/40 bg-sky-500/10 text-sky-600 dark:text-sky-400 font-sans">
                    <span className="relative flex h-1.5 w-1.5 shrink-0 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-sky-400 opacity-50"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sky-500"></span>
                    </span>
                    <span>UPDATED</span>
                  </span>
                )}

                {/* Priority 4: Coming Soon */}
                {badge.type === 'coming-soon' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-app-border bg-app-bg text-[11px] font-medium text-app-muted font-sans">
                    <Clock className="h-3 w-3" />
                    <span>Soon</span>
                  </span>
                )}
              </div>
            )}

            {/* Bookmark Ribbon Button (roadmap.sh Style) */}
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
                className={`p-1 rounded-md border transition-all duration-150 cursor-pointer ${
                  isSaved
                    ? 'border-brand-accent/50 bg-brand-accent/15 text-brand-accent shadow-2xs'
                    : 'border-transparent text-app-muted hover:text-app-text hover:bg-app-bg hover:border-app-border'
                }`}
              >
                <Bookmark
                  className={`h-3.5 w-3.5 transition-transform duration-150 active:scale-90 ${
                    isSaved ? 'fill-brand-accent text-brand-accent' : ''
                  }`}
                />
              </button>
            )}
          </div>
        </div>

        {/* Full Details: Shown ONLY when NOT in compact mode (e.g. /roadmaps directory) */}
        {!compact && (
          <>
            {/* 1-Line Description */}
            <p className="text-xs sm:text-sm text-app-muted line-clamp-2 leading-relaxed mb-3">
              {roadmap.description}
            </p>

            {/* Tool / Meta Tags */}
            {roadmap.tools && roadmap.tools.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 mb-3">
                {roadmap.tools.slice(0, 3).map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-app-bg border border-app-border text-app-muted"
                  >
                    {typeof tool === 'string' ? tool : tool?.name || tool?.title || ''}
                  </span>
                ))}
                {roadmap.tools.length > 3 && (
                  <span className="text-[11px] font-mono text-app-muted">
                    +{roadmap.tools.length - 3}
                  </span>
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/* Bottom Meta Row */}
      <div className={`flex items-center justify-between text-xs ${
        compact ? 'mt-3.5' : 'pt-3 border-t border-app-border'
      }`}>
        {/* Step Count & Optional Difficulty */}
        <div className="flex items-center gap-2 text-app-muted group-hover:text-app-text transition-colors duration-150 font-medium font-sans">
          <div className="flex items-center gap-1.5">
            <Layers
              className={`h-3.5 w-3.5 ${
                completedSteps.length > 0
                  ? completedSteps.length >= totalSteps
                    ? 'text-emerald-500'
                    : 'text-brand-accent'
                  : 'text-app-muted'
              }`}
            />
            {completedSteps.length > 0 ? (
              <span
                className={`font-semibold ${
                  completedSteps.length >= totalSteps
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-brand-accent'
                }`}
              >
                {completedSteps.length} / {totalSteps} Steps
              </span>
            ) : (
              <span>{totalSteps} Steps</span>
            )}
          </div>
          {!compact && roadmap.difficulty && (
            <>
              <span className="text-app-border">•</span>
              <span className="text-[11px] text-app-muted font-normal">{roadmap.difficulty}</span>
            </>
          )}
        </div>

        {/* Action / Arrow Indicator */}
        <div className="flex items-center gap-1">
          {compact ? (
            <span className="text-app-muted group-hover:text-brand-accent transition-colors duration-150">
              <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
            </span>
          ) : isReady ? (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-accent group-hover:underline font-sans">
              <span>View</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-app-muted group-hover:text-brand-accent transition-colors duration-150 font-sans">
              <span>Vote / Request</span>
              <ArrowUpRight className="h-3 w-3 opacity-60 group-hover:opacity-100" />
            </span>
          )}
        </div>
      </div>

      {/* Sleek 2px Bottom Progress Bar */}
      {completedSteps.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-app-border/40 overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ease-out ${
              completedSteps.length >= totalSteps ? 'bg-emerald-500' : 'bg-brand-accent'
            }`}
            style={{ width: `${Math.min(100, Math.round((completedSteps.length / totalSteps) * 100))}%` }}
          />
        </div>
      )}
    </div>
  );
}
