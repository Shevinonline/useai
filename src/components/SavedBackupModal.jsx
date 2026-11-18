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
      <div className="relative w-full max-w-4xl rounded-xl border border-slate-200 dark:border-slate-800 bg-[#FAF8F5] dark:bg-[#0B0F17] text-[#0F172A] dark:text-[#F8FAFC] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden z-10 font-sans">
        {/* Header */}
        <div className="px-5 sm:px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 bg-white dark:bg-[#111827] shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-[#4F46E5] dark:text-[#6366F1]">
              <Bookmark className="h-4 w-4" />
            </div>
            <div>
              <h2
                id="saved-modal-title"
                className="font-display font-bold text-lg text-[#0F172A] dark:text-white"
              >
                My Learning Workspace
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                Track your progress, saved curriculums, and local backups
              </p>
            </div>
          </div>

          <button
            onClick={handleCloseModal}
            type="button"
            aria-label="Close modal"
            className="cc-btn-secondary h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* 4 Organized Section Tabs */}
        <div className="px-5 sm:px-6 py-2.5 border-b border-slate-200 dark:border-slate-800 bg-[#FAF8F5] dark:bg-[#0B0F17] flex items-center gap-2 overflow-x-auto scrollbar-none shrink-0 font-display text-xs sm:text-sm font-semibold">
          <button
            type="button"
            onClick={() => setSavedModalTab('overview')}
            className={`px-3.5 py-1.5 rounded-md border transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'border-[#4338CA] bg-[#4F46E5] text-white shadow-xs'
                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            <Compass className="h-3.5 w-3.5" />
            <span>01. Progress Overview</span>
          </button>

          <button
            type="button"
            onClick={() => setSavedModalTab('roadmaps')}
            className={`px-3.5 py-1.5 rounded-md border transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'roadmaps'
                ? 'border-[#4338CA] bg-[#4F46E5] text-white shadow-xs'
                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>02. Saved Roadmaps ({savedRoadmaps.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setSavedModalTab('prompts')}
            className={`px-3.5 py-1.5 rounded-md border transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'prompts'
                ? 'border-[#4338CA] bg-[#4F46E5] text-white shadow-xs'
                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            <Terminal className="h-3.5 w-3.5" />
            <span>03. Saved Steps &amp; Prompts ({savedPrompts.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setSavedModalTab('backup')}
            className={`px-3.5 py-1.5 rounded-md border transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'backup'
                ? 'border-[#4338CA] bg-[#4F46E5] text-white shadow-xs'
                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
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
                <div className="cc-card p-4 space-y-1">
                  <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    ROADMAPS STARTED
                  </span>
                  <div className="text-2xl font-bold font-mono text-[#4F46E5] dark:text-[#6366F1]">
                    {stats.roadmapsStarted || inProgressRoadmaps.length}
                  </div>
                  <span className="text-[11px] font-sans text-slate-500 dark:text-slate-400">with ≥ 1 step done</span>
                </div>

                <div className="cc-card p-4 space-y-1">
                  <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    STEPS COMPLETED
                  </span>
                  <div className="text-2xl font-bold font-mono text-[#10B981]">
                    {stats.stepsCompleted || 0}
                  </div>
                  <span className="text-[11px] font-sans text-slate-500 dark:text-slate-400">across all tracks</span>
                </div>

                <div className="cc-card p-4 space-y-1">
                  <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    SAVED ROADMAPS
                  </span>
                  <div className="text-2xl font-bold font-mono text-[#0F172A] dark:text-white">
                    {savedRoadmaps.length}
                  </div>
                  <span className="text-[11px] font-sans text-slate-500 dark:text-slate-400">in your library</span>
                </div>

                <div className="cc-card p-4 space-y-1">
                  <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    BOOKMARKED STEPS
                  </span>
                  <div className="text-2xl font-bold font-mono text-amber-500">
                    {savedPrompts.length}
                  </div>
                  <span className="text-[11px] font-sans text-slate-500 dark:text-slate-400">prompts saved</span>
                </div>
              </div>

              {/* Continue Where You Left Off Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-base text-[#0F172A] dark:text-white flex items-center gap-2">
                    <Compass className="h-4 w-4 text-[#4F46E5] dark:text-[#6366F1]" />
                    <span>Continue Where You Left Off</span>
                  </h3>
                  <span className="font-mono text-xs text-slate-500">
                    {inProgressRoadmaps.length} Tracks in Progress
                  </span>
                </div>

                {inProgressRoadmaps.length > 0 ? (
                  <div className="space-y-3">
                    {inProgressRoadmaps.map((r) => (
                      <div
                        key={r.id}
                        className="cc-card p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="flex-1 min-w-0 space-y-1.5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                              {r.category}
                            </span>
                            <span className="font-mono text-xs font-bold text-[#10B981]">
                              {r.completedCount}/{r.totalCount} Steps ({r.progressPercent}%)
                            </span>
                          </div>

                          <h4 className="font-display font-bold text-base text-[#0F172A] dark:text-white truncate">
                            {r.title}
                          </h4>

                          {/* Progress bar */}
                          <div className="w-full max-w-md h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                            <div
                              className="h-full bg-[#10B981] transition-all rounded-full"
                              style={{ width: `${r.progressPercent}%` }}
                            />
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleRoadmapClick(r.id)}
                          className="cc-btn-primary px-4 py-2 text-xs font-semibold gap-1.5 shrink-0 self-start sm:self-auto"
                        >
                          <span>Resume Track</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="cc-card p-8 text-center space-y-3">
                    <Layers className="h-8 w-8 text-slate-300 dark:text-slate-600 mx-auto" />
                    <p className="text-sm text-slate-600 dark:text-slate-300 font-sans max-w-sm mx-auto">
                      You haven&apos;t started any roadmaps yet. Browse our curated curriculums to begin your learning track.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        closeSavedModal();
                        navigate('/roadmaps');
                      }}
                      className="cc-btn-primary px-4 py-2 text-xs font-semibold"
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
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                <h3 className="font-display font-bold text-base text-[#0F172A] dark:text-white">
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
                        className="cc-card p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="flex-1 min-w-0 space-y-1.5">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-[#4F46E5] dark:bg-indigo-950/40 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60">
                              {r.category || 'ROADMAP'}
                            </span>
                            <span className="font-mono text-xs text-slate-500">
                              {done.length}/{total} Steps ({percent}%)
                            </span>
                          </div>

                          <h4 className="font-display font-bold text-base text-[#0F172A] dark:text-white truncate">
                            {r.title}
                          </h4>

                          <div className="w-full max-w-md h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                            <div
                              className="h-full bg-[#10B981] transition-all rounded-full"
                              style={{ width: `${percent}%` }}
                            />
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => handleRoadmapClick(r.id)}
                            className="cc-btn-primary px-3.5 py-1.5 text-xs font-semibold gap-1"
                          >
                            <span>Open</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => removeRoadmapBookmark(r.id)}
                            title="Remove roadmap"
                            className="p-1.5 rounded text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="cc-card p-8 text-center space-y-3">
                  <Bookmark className="h-8 w-8 text-slate-300 dark:text-slate-600 mx-auto" />
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-sans">
                    No roadmaps bookmarked yet. Click the bookmark icon on any roadmap card to save it here.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: BOOKMARKED STEPS & PROMPTS */}
          {activeTab === 'prompts' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                <h3 className="font-display font-bold text-base text-[#0F172A] dark:text-white">
                  Saved Steps &amp; Prompt Blueprints ({savedPrompts.length})
                </h3>
              </div>

              {savedPrompts.length > 0 ? (
                <div className="space-y-3">
                  {savedPrompts.map((p) => (
                    <div
                      key={p.id}
                      className="cc-card p-4 space-y-3"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-[#4F46E5] dark:bg-indigo-950/40 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 truncate max-w-[200px]">
                            {p.roadmapTitle || 'Roadmap'}
                          </span>
                          {p.stepNumber && (
                            <span className="font-mono text-xs font-semibold text-slate-500">
                              Step {p.stepNumber}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => handleCopyPrompt(p)}
                            className="cc-btn-secondary px-2.5 py-1 text-xs font-semibold gap-1"
                          >
                            {copiedId === p.id ? (
                              <>
                                <Check className="h-3 w-3 text-[#10B981]" />
                                <span className="text-[#10B981]">Copied</span>
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
                            className="cc-btn-primary px-3 py-1 text-xs font-semibold gap-1"
                          >
                            <span>Open Step</span>
                            <ArrowRight className="h-3 w-3" />
                          </button>
                          <button
                            type="button"
                            onClick={() => removePromptBookmark(p.id)}
                            title="Remove bookmark"
                            className="p-1 rounded text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>

                      <h4 className="font-display font-bold text-sm text-[#0F172A] dark:text-white">
                        {p.title}
                      </h4>

                      <pre className="p-3 rounded bg-slate-50 dark:bg-[#050811] text-xs font-mono text-slate-700 dark:text-slate-300 max-h-28 overflow-y-auto whitespace-pre-wrap">
                        {p.template}
                      </pre>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="cc-card p-8 text-center space-y-3">
                  <Terminal className="h-8 w-8 text-slate-300 dark:text-slate-600 mx-auto" />
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-sans">
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
                  className={`p-4 rounded-lg border font-mono text-xs flex items-start justify-between gap-3 ${
                    importNotice.type === 'success'
                      ? 'border-emerald-300 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800'
                      : 'border-red-300 bg-red-50 text-red-800 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {importNotice.type === 'success' ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[#10B981]" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-red-600" />
                    )}
                    <span>{importNotice.message}</span>
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
              <div className="cc-card p-5 flex items-start gap-3 bg-white dark:bg-[#111827]">
                <ShieldCheck className="h-5 w-5 text-[#4F46E5] dark:text-[#6366F1] shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs font-sans">
                  <span className="font-display font-bold text-sm text-[#0F172A] dark:text-white block">
                    Zero-Login &amp; Privacy-First Architecture
                  </span>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    useai.sh never stores your learning progress on an external tracking server. All completed steps and bookmarks reside strictly within your local browser storage. Export a backup anytime to sync progress across laptops or browsers.
                  </p>
                </div>
              </div>

              {/* Export / Import Action Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Export Card */}
                <div className="cc-card p-5 flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <div className="h-8 w-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-[#4F46E5] dark:text-[#6366F1]">
                      <Download className="h-4 w-4" />
                    </div>
                    <h3 className="font-display font-bold text-base text-[#0F172A] dark:text-white">
                      Export Progress Backup
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      Download a timestamped <code className="font-mono text-xs text-[#4F46E5] dark:text-[#6366F1] font-semibold">.json</code> file containing all your checked roadmap steps and saved bookmarks.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleExportClick}
                    className="cc-btn-primary py-2.5 px-4 text-xs font-semibold gap-2"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Workspace Backup (.json)</span>
                  </button>
                </div>

                {/* Import Card */}
                <div className="cc-card p-5 flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <div className="h-8 w-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-[#10B981]">
                      <Upload className="h-4 w-4" />
                    </div>
                    <h3 className="font-display font-bold text-base text-[#0F172A] dark:text-white">
                      Import &amp; Restore Backup
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      Restore your step progress and bookmarks from a previously downloaded <code className="font-mono text-xs text-[#4F46E5] dark:text-[#6366F1] font-semibold">.json</code> file with validation checks.
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
                      className="cc-btn-secondary py-2.5 px-4 text-xs font-semibold gap-2 w-full"
                    >
                      <Upload className="h-4 w-4" />
                      <span>Select Backup File (.json)</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Reset Section */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                <div className="p-4 rounded-lg border border-red-200 dark:border-red-900/40 bg-red-50/40 dark:bg-red-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="font-mono text-xs font-bold text-red-600 dark:text-red-400 flex items-center gap-1.5">
                      <AlertTriangle className="h-4 w-4" />
                      <span>RESET LOCAL DATA</span>
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                      Clears all completed steps, progress bars, and bookmarks from this browser storage.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleResetClick}
                    className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer shrink-0 ${
                      isConfirmingReset
                        ? 'bg-red-600 text-white animate-pulse'
                        : 'border border-red-300 dark:border-red-800 bg-white dark:bg-[#111827] text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40'
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
        <div className="px-5 sm:px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 shrink-0 font-mono">
          <span className="font-semibold">Local-First Storage</span>
          <button
            type="button"
            onClick={handleCloseModal}
            className="cc-btn-secondary px-3 py-1 text-xs font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
