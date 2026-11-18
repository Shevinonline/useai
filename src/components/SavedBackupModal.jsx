import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import roadmapsData from '../data/roadmaps.json';
import {
  X,
  Bookmark,
  Database,
  Download,
  Upload,
  Trash2,
  Copy,
  Check,
  CheckCircle2,
  Compass,
  Terminal,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Layers
} from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';
import { getCompletedStepsForRoadmap } from '../utils/badgeResolver';
import { MAX_BACKUP_FILE_SIZE } from '../utils/validation';

export default function SavedBackupModal() {
  const {
    bookmarks,
    stats,
    isSavedModalOpen,
    savedModalTab,
    setSavedModalTab,
    closeSavedModal,
    removeRoadmapBookmark,
    removePromptBookmark,
    exportBackup,
    importBackup,
    resetLocalData
  } = useWorkspace();

  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // Active Tab: 'overview' | 'roadmaps' | 'prompts' | 'backup'
  // If context has 'library', map it to 'overview'
  const activeTab = savedModalTab === 'library' ? 'overview' : savedModalTab;

  // Copied state for prompt items
  const [copiedId, setCopiedId] = useState(null);

  // Import feedback banner
  const [importNotice, setImportNotice] = useState(null);

  // Reset confirmation state
  const [isConfirmingReset, setIsConfirmingReset] = useState(false);
  const resetTimeoutRef = useRef(null);

  const handleCloseModal = useCallback(() => {
    setIsConfirmingReset(false);
    setImportNotice(null);
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }
    closeSavedModal();
  }, [closeSavedModal]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isSavedModalOpen) {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSavedModalOpen, handleCloseModal]);

  // Lock body scroll when open
  useEffect(() => {
    if (isSavedModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSavedModalOpen]);

  // Derive all in-progress roadmaps (with >= 1 step completed)
  const inProgressRoadmaps = useMemo(() => {
    if (!isSavedModalOpen) return [];
    return roadmapsData
      .map((r) => {
        const done = getCompletedStepsForRoadmap(r.id);
        const total = Number(r.stepCount) || 10;
        const percent = total > 0 ? Math.round((done.length / total) * 100) : 0;
        return {
          ...r,
          completedCount: done.length,
          totalCount: total,
          progressPercent: percent
        };
      })
      .filter((r) => r.completedCount > 0)
      .sort((a, b) => b.completedCount - a.completedCount);
  }, [isSavedModalOpen]);

  if (!isSavedModalOpen) return null;

  const handleCopyPrompt = async (prompt) => {
    try {
      await navigator.clipboard.writeText(prompt.template);
      setCopiedId(prompt.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy prompt to clipboard', err);
    }
  };

  const handleRoadmapClick = (roadmapId) => {
    closeSavedModal();
    navigate(`/roadmap/${roadmapId}`);
  };

  const handlePromptClick = (prompt) => {
    closeSavedModal();
    if (prompt.roadmapId && prompt.stepId) {
      navigate(`/roadmap/${prompt.roadmapId}?step=${prompt.stepId}&tab=promptLab`);
    } else {
      navigate('/prompts');
    }
  };

  const handleExportClick = () => {
    exportBackup();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_BACKUP_FILE_SIZE) {
      setImportNotice({
        type: 'error',
        message: 'File size exceeds safety limit of 10 MB.'
      });
      e.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === 'string') {
        const result = importBackup(content);
        if (result.success) {
          setImportNotice({
            type: 'success',
            message: result.message || 'Backup restored successfully!'
          });
        } else {
          setImportNotice({
            type: 'error',
            message: result.message || 'Invalid or corrupted backup JSON file.'
          });
        }
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleResetClick = () => {
    if (!isConfirmingReset) {
      setIsConfirmingReset(true);
      resetTimeoutRef.current = setTimeout(() => {
        setIsConfirmingReset(false);
      }, 4000);
    } else {
      clearTimeout(resetTimeoutRef.current);
      resetLocalData();
      setIsConfirmingReset(false);
      setImportNotice({
        type: 'success',
        message: 'Local progress and saved library have been completely reset.'
      });
    }
  };

  const savedRoadmaps = bookmarks.roadmaps || [];
  const savedPrompts = bookmarks.prompts || [];

  if (!isSavedModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="saved-modal-title"
    >
      {/* Backdrop */}
      <div
        onClick={handleCloseModal}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-[#FFF8F2] shadow-[6px_6px_0px_0px_#10162F] dark:shadow-[6px_6px_0px_0px_#000000] flex flex-col max-h-[90vh] overflow-hidden z-10 font-sans">
        {/* Header */}
        <div className="px-5 sm:px-6 py-4 border-b-2 border-[#10162F] dark:border-[#3B497E] flex items-center justify-between gap-4 bg-[#FFF8F2] dark:bg-[#0B1021] shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-[4px] bg-[#FFD300] border-2 border-[#10162F] flex items-center justify-center text-[#10162F] shadow-[1px_1px_0px_0px_#10162F]">
              <Bookmark className="h-4 w-4" />
            </div>
            <div>
              <h2
                id="saved-modal-title"
                className="font-display font-bold text-lg text-[#10162F] dark:text-[#FFF8F2]"
              >
                My Learning Workspace
              </h2>
              <p className="text-xs text-[#10162F]/70 dark:text-[#FFF8F2]/70 font-sans">
                Track your progress, saved curriculums, and local backups
              </p>
            </div>
          </div>

          <button
            onClick={handleCloseModal}
            type="button"
            aria-label="Close modal"
            className="cc-btn-secondary h-8 w-8 p-0 border-2 border-[#10162F]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* 4 Organized Section Tabs */}
        <div className="px-5 sm:px-6 py-2.5 border-b-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021] flex items-center gap-2 overflow-x-auto scrollbar-none shrink-0 font-display text-xs sm:text-sm font-bold">
          <button
            type="button"
            onClick={() => setSavedModalTab('overview')}
            className={`px-3.5 py-1.5 rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'bg-[#FFD300] text-[#10162F] shadow-[2px_2px_0px_0px_#10162F]'
                : 'bg-white dark:bg-[#131A33] text-[#10162F] dark:text-[#FFF8F2] shadow-[1px_1px_0px_0px_#10162F] hover:bg-[#FFF8F2]'
            }`}
          >
            <Compass className="h-3.5 w-3.5" />
            <span>01. Progress Overview</span>
          </button>

          <button
            type="button"
            onClick={() => setSavedModalTab('roadmaps')}
            className={`px-3.5 py-1.5 rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'roadmaps'
                ? 'bg-[#FFD300] text-[#10162F] shadow-[2px_2px_0px_0px_#10162F]'
                : 'bg-white dark:bg-[#131A33] text-[#10162F] dark:text-[#FFF8F2] shadow-[1px_1px_0px_0px_#10162F] hover:bg-[#FFF8F2]'
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>02. Saved Roadmaps ({savedRoadmaps.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setSavedModalTab('prompts')}
            className={`px-3.5 py-1.5 rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'prompts'
                ? 'bg-[#FFD300] text-[#10162F] shadow-[2px_2px_0px_0px_#10162F]'
                : 'bg-white dark:bg-[#131A33] text-[#10162F] dark:text-[#FFF8F2] shadow-[1px_1px_0px_0px_#10162F] hover:bg-[#FFF8F2]'
            }`}
          >
            <Terminal className="h-3.5 w-3.5" />
            <span>03. Saved Steps &amp; Prompts ({savedPrompts.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setSavedModalTab('backup')}
            className={`px-3.5 py-1.5 rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'backup'
                ? 'bg-[#FFD300] text-[#10162F] shadow-[2px_2px_0px_0px_#10162F]'
                : 'bg-white dark:bg-[#131A33] text-[#10162F] dark:text-[#FFF8F2] shadow-[1px_1px_0px_0px_#10162F] hover:bg-[#FFF8F2]'
            }`}
          >
            <Database className="h-3.5 w-3.5" />
            <span>04. Backup &amp; Restore</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* TAB 1: LEARNING PROGRESS OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Summary Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[3px_3px_0px_0px_#10162F] p-4 space-y-1">
                  <span className="font-mono text-[10px] font-bold text-[#10162F]/60 dark:text-[#FFF8F2]/60 uppercase tracking-wider block">
                    ROADMAPS STARTED
                  </span>
                  <div className="text-2xl font-bold font-mono text-[#3A10E5] dark:text-[#FFD300]">
                    {stats.roadmapsStarted || inProgressRoadmaps.length}
                  </div>
                  <span className="text-[11px] font-sans text-[#10162F]/70 dark:text-[#FFF8F2]/70 font-medium">with ≥ 1 step done</span>
                </div>

                <div className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[3px_3px_0px_0px_#10162F] p-4 space-y-1">
                  <span className="font-mono text-[10px] font-bold text-[#10162F]/60 dark:text-[#FFF8F2]/60 uppercase tracking-wider block">
                    STEPS COMPLETED
                  </span>
                  <div className="text-2xl font-bold font-mono text-[#008A5E]">
                    {stats.stepsCompleted || 0}
                  </div>
                  <span className="text-[11px] font-sans text-[#10162F]/70 dark:text-[#FFF8F2]/70 font-medium">across all tracks</span>
                </div>

                <div className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[3px_3px_0px_0px_#10162F] p-4 space-y-1">
                  <span className="font-mono text-[10px] font-bold text-[#10162F]/60 dark:text-[#FFF8F2]/60 uppercase tracking-wider block">
                    SAVED ROADMAPS
                  </span>
                  <div className="text-2xl font-bold font-mono text-[#10162F] dark:text-white">
                    {savedRoadmaps.length}
                  </div>
                  <span className="text-[11px] font-sans text-[#10162F]/70 dark:text-[#FFF8F2]/70 font-medium">in your library</span>
                </div>

                <div className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[3px_3px_0px_0px_#10162F] p-4 space-y-1">
                  <span className="font-mono text-[10px] font-bold text-[#10162F]/60 dark:text-[#FFF8F2]/60 uppercase tracking-wider block">
                    BOOKMARKED STEPS
                  </span>
                  <div className="text-2xl font-bold font-mono text-[#3A10E5] dark:text-[#FFD300]">
                    {savedPrompts.length}
                  </div>
                  <span className="text-[11px] font-sans text-[#10162F]/70 dark:text-[#FFF8F2]/70 font-medium">prompts saved</span>
                </div>
              </div>

              {/* Continue Where You Left Off Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-base text-[#10162F] dark:text-[#FFF8F2] flex items-center gap-2">
                    <Compass className="h-4 w-4 text-[#3A10E5] dark:text-[#FFD300]" />
                    <span>Continue Where You Left Off</span>
                  </h3>
                  <span className="font-mono text-xs font-bold text-[#10162F]/60 dark:text-[#FFF8F2]/60">
                    {inProgressRoadmaps.length} Tracks in Progress
                  </span>
                </div>

                {inProgressRoadmaps.length > 0 ? (
                  <div className="space-y-3">
                    {inProgressRoadmaps.map((r) => (
                      <div
                        key={r.id}
                        className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[3px_3px_0px_0px_#10162F] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="flex-1 min-w-0 space-y-1.5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-[2px] bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-[#FFF8F2] border-2 border-[#10162F] dark:border-[#3B497E]">
                              {r.category}
                            </span>
                            <span className="font-mono text-xs font-bold text-[#008A5E]">
                              {r.completedCount}/{r.totalCount} Steps ({r.progressPercent}%)
                            </span>
                          </div>

                          <h4 className="font-display font-bold text-base text-[#10162F] dark:text-[#FFF8F2] truncate">
                            {r.title}
                          </h4>

                          {/* Progress bar */}
                          <div className="w-full max-w-md h-2 rounded-[2px] bg-[#10162F]/10 dark:bg-white/10 border border-[#10162F] overflow-hidden">
                            <div
                              className="h-full bg-[#008A5E] transition-all"
                              style={{ width: `${r.progressPercent}%` }}
                            />
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleRoadmapClick(r.id)}
                          className="cc-btn-primary px-4 py-2 text-xs font-bold gap-1.5 shrink-0 self-start sm:self-auto"
                        >
                          <span>Resume Track</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[3px_3px_0px_0px_#10162F] p-8 text-center space-y-3">
                    <Layers className="h-8 w-8 text-[#10162F]/40 dark:text-[#FFF8F2]/40 mx-auto" />
                    <p className="text-sm text-[#10162F]/80 dark:text-[#FFF8F2]/80 font-sans max-w-sm mx-auto">
                      You haven&apos;t started any roadmaps yet. Browse our curated curriculums to begin your learning track.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        closeSavedModal();
                        navigate('/roadmaps');
                      }}
                      className="cc-btn-primary px-4 py-2 text-xs font-bold"
                    >
                      Explore All Roadmaps
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: SAVED ROADMAPS */}
          {activeTab === 'roadmaps' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b-2 border-[#10162F]/20 dark:border-[#3B497E]">
                <h3 className="font-display font-bold text-base text-[#10162F] dark:text-[#FFF8F2]">
                  Bookmarked Roadmaps ({savedRoadmaps.length})
                </h3>
              </div>

              {savedRoadmaps.length > 0 ? (
                <div className="space-y-3">
                  {savedRoadmaps.map((r) => {
                    const done = getCompletedStepsForRoadmap(r.id);
                    const total = Number(r.stepCount) || 10;
                    const percent = total > 0 ? Math.round((done.length / total) * 100) : 0;

                    return (
                      <div
                        key={r.id}
                        className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[3px_3px_0px_0px_#10162F] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="flex-1 min-w-0 space-y-1.5">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-[2px] bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-[#FFF8F2] border-2 border-[#10162F] dark:border-[#3B497E]">
                              {r.category || 'ROADMAP'}
                            </span>
                            <span className="font-mono text-xs font-bold text-[#008A5E]">
                              {done.length}/{total} Steps ({percent}%)
                            </span>
                          </div>

                          <h4 className="font-display font-bold text-base text-[#10162F] dark:text-[#FFF8F2] truncate">
                            {r.title}
                          </h4>

                          <div className="w-full max-w-md h-2 rounded-[2px] bg-[#10162F]/10 dark:bg-white/10 border border-[#10162F] overflow-hidden">
                            <div
                              className="h-full bg-[#008A5E] transition-all"
                              style={{ width: `${percent}%` }}
                            />
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => handleRoadmapClick(r.id)}
                            className="cc-btn-primary px-3.5 py-1.5 text-xs font-bold gap-1"
                          >
                            <span>Open</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => removeRoadmapBookmark(r.id)}
                            title="Remove roadmap"
                            className="p-1.5 rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors cursor-pointer"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[3px_3px_0px_0px_#10162F] p-8 text-center space-y-3">
                  <Bookmark className="h-8 w-8 text-[#10162F]/40 dark:text-[#FFF8F2]/40 mx-auto" />
                  <p className="text-sm text-[#10162F]/80 dark:text-[#FFF8F2]/80 font-sans">
                    No roadmaps bookmarked yet. Click the bookmark icon on any roadmap card to save it here.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: BOOKMARKED STEPS & PROMPTS */}
          {activeTab === 'prompts' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b-2 border-[#10162F]/20 dark:border-[#3B497E]">
                <h3 className="font-display font-bold text-base text-[#10162F] dark:text-[#FFF8F2]">
                  Saved Steps &amp; Prompt Blueprints ({savedPrompts.length})
                </h3>
              </div>

              {savedPrompts.length > 0 ? (
                <div className="space-y-3">
                  {savedPrompts.map((p) => (
                    <div
                      key={p.id}
                      className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[3px_3px_0px_0px_#10162F] p-4 space-y-3"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-[2px] bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-[#FFF8F2] border-2 border-[#10162F] dark:border-[#3B497E] truncate max-w-[200px]">
                            {p.roadmapTitle || 'Roadmap'}
                          </span>
                          {p.stepNumber && (
                            <span className="font-mono text-xs font-bold text-[#10162F]/60 dark:text-[#FFF8F2]/60">
                              Step {p.stepNumber}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => handleCopyPrompt(p)}
                            className="cc-btn-secondary px-2.5 py-1 text-xs font-bold gap-1"
                          >
                            {copiedId === p.id ? (
                              <>
                                <Check className="h-3 w-3 text-[#008A5E]" />
                                <span className="text-[#008A5E]">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => handlePromptClick(p)}
                            className="cc-btn-primary px-3 py-1 text-xs font-bold gap-1"
                          >
                            <span>Open Step</span>
                            <ArrowRight className="h-3 w-3" />
                          </button>
                          <button
                            type="button"
                            onClick={() => removePromptBookmark(p.id)}
                            title="Remove bookmark"
                            className="p-1 rounded-[4px] border-2 border-[#10162F] text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors cursor-pointer"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>

                      <h4 className="font-display font-bold text-sm text-[#10162F] dark:text-[#FFF8F2]">
                        {p.title}
                      </h4>

                      <pre className="p-3 rounded-[4px] border-2 border-[#10162F] bg-[#0F172A] text-slate-100 text-xs font-mono max-h-28 overflow-y-auto whitespace-pre-wrap shadow-[inset_1px_1px_3px_rgba(0,0,0,0.5)]">
                        {p.template}
                      </pre>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[3px_3px_0px_0px_#10162F] p-8 text-center space-y-3">
                  <Terminal className="h-8 w-8 text-[#10162F]/40 dark:text-[#FFF8F2]/40 mx-auto" />
                  <p className="text-sm text-[#10162F]/80 dark:text-[#FFF8F2]/80 font-sans">
                    No steps or prompts saved yet. Bookmark individual steps inside any roadmap or prompt directory.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: BACKUP & RESTORE */}
          {activeTab === 'backup' && (
            <div className="space-y-6">
              {/* Feedback Alert Banner */}
              {importNotice && (
                <div
                  className={`p-4 rounded-[4px] border-2 border-[#10162F] font-mono text-xs flex items-start justify-between gap-3 shadow-[2px_2px_0px_0px_#10162F] ${
                    importNotice.type === 'success'
                      ? 'bg-[#E8F2FF] text-[#10162F] dark:bg-[#1C2548] dark:text-[#FFF8F2]'
                      : 'bg-red-100 text-red-900 dark:bg-red-950/60 dark:text-red-200'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {importNotice.type === 'success' ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[#008A5E]" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-red-600" />
                    )}
                    <span className="font-bold">{importNotice.message}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setImportNotice(null)}
                    className="cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}

              {/* Privacy Notice Banner */}
              <div className="p-5 flex items-start gap-3 bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[3px_3px_0px_0px_#10162F]">
                <ShieldCheck className="h-5 w-5 text-[#3A10E5] dark:text-[#FFD300] shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs font-sans">
                  <span className="font-display font-bold text-sm text-[#10162F] dark:text-[#FFF8F2] block">
                    Zero-Login &amp; Privacy-First Architecture
                  </span>
                  <p className="text-[#10162F]/80 dark:text-[#FFF8F2]/80 leading-relaxed font-medium">
                    useai.sh never stores your learning progress on an external tracking server. All completed steps and bookmarks reside strictly within your local browser storage. Export a backup anytime to sync progress across laptops or browsers.
                  </p>
                </div>
              </div>

              {/* Export / Import Action Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Export Card */}
                <div className="p-5 flex flex-col justify-between gap-4 bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[4px_4px_0px_0px_#10162F]">
                  <div className="space-y-2">
                    <div className="h-8 w-8 rounded-[4px] bg-[#FFD300] border-2 border-[#10162F] flex items-center justify-center text-[#10162F] shadow-[1px_1px_0px_0px_#10162F]">
                      <Download className="h-4 w-4" />
                    </div>
                    <h3 className="font-display font-bold text-base text-[#10162F] dark:text-[#FFF8F2]">
                      Export Progress Backup
                    </h3>
                    <p className="text-xs text-[#10162F]/80 dark:text-[#FFF8F2]/80 leading-relaxed font-sans">
                      Download a timestamped <code className="font-mono text-xs text-[#3A10E5] dark:text-[#FFD300] font-bold">.json</code> file containing all your checked roadmap steps and saved bookmarks.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleExportClick}
                    className="cc-btn-primary py-2.5 px-4 text-xs font-bold gap-2"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Workspace Backup (.json)</span>
                  </button>
                </div>

                {/* Import Card */}
                <div className="p-5 flex flex-col justify-between gap-4 bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[4px_4px_0px_0px_#10162F]">
                  <div className="space-y-2">
                    <div className="h-8 w-8 rounded-[4px] bg-[#008A5E] border-2 border-[#10162F] flex items-center justify-center text-white shadow-[1px_1px_0px_0px_#10162F]">
                      <Upload className="h-4 w-4" />
                    </div>
                    <h3 className="font-display font-bold text-base text-[#10162F] dark:text-[#FFF8F2]">
                      Import &amp; Restore Backup
                    </h3>
                    <p className="text-xs text-[#10162F]/80 dark:text-[#FFF8F2]/80 leading-relaxed font-sans">
                      Restore your step progress and bookmarks from a previously downloaded <code className="font-mono text-xs text-[#3A10E5] dark:text-[#FFD300] font-bold">.json</code> file with validation checks.
                    </p>
                  </div>

                  <div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".json,application/json"
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="cc-btn-secondary py-2.5 px-4 text-xs font-bold gap-2 w-full"
                    >
                      <Upload className="h-4 w-4" />
                      <span>Select Backup File (.json)</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Reset Section */}
              <div className="pt-3 border-t-2 border-[#10162F]/20 dark:border-[#3B497E]">
                <div className="p-4 rounded-[4px] border-2 border-red-600 bg-red-50 dark:bg-red-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-[2px_2px_0px_0px_#DC2626]">
                  <div className="space-y-0.5">
                    <span className="font-mono text-xs font-bold text-red-600 dark:text-red-400 flex items-center gap-1.5">
                      <AlertTriangle className="h-4 w-4" />
                      <span>RESET LOCAL DATA</span>
                    </span>
                    <p className="text-xs text-[#10162F]/70 dark:text-[#FFF8F2]/70 font-sans">
                      Clears all completed steps, progress bars, and bookmarks from this browser storage.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleResetClick}
                    className={`px-4 py-2 text-xs font-bold rounded-[4px] border-2 border-[#10162F] transition-all cursor-pointer shrink-0 shadow-[2px_2px_0px_0px_#10162F] ${
                      isConfirmingReset
                        ? 'bg-red-600 text-white animate-pulse'
                        : 'bg-white dark:bg-[#131A33] text-red-600 dark:text-red-400 hover:bg-red-100'
                    }`}
                  >
                    {isConfirmingReset ? 'Confirm Full Reset!' : 'Reset Data'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-6 py-3 border-t-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021] flex items-center justify-between text-xs text-[#10162F]/70 dark:text-[#FFF8F2]/70 shrink-0 font-mono">
          <span className="font-bold">Local-First Storage</span>
          <button
            type="button"
            onClick={handleCloseModal}
            className="cc-btn-secondary px-3 py-1 text-xs font-bold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
