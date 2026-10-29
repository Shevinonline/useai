import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  X,
  Bookmark,
  Database,
  Download,
  Upload,
  Trash2,
  ExternalLink,
  Copy,
  Check,
  CheckCircle2,
  Compass,
  Layers,
  Terminal,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Wrench
} from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';
import { getCompletedStepsForRoadmap } from '../utils/badgeResolver';
import { sanitizeExternalUrl, MAX_BACKUP_FILE_SIZE } from '../utils/validation';

export default function SavedBackupModal() {
  const {
    bookmarks,
    stats,
    totalSavedCount,
    isSavedModalOpen,
    savedModalTab,
    setSavedModalTab,
    closeSavedModal,
    removeRoadmapBookmark,
    removePromptBookmark,
    removeToolBookmark,
    exportBackup,
    importBackup,
    resetLocalData
  } = useWorkspace();

  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // Sub-filter for Tab 1: 'all' | 'roadmaps' | 'prompts' | 'tools'
  const [filterType, setFilterType] = useState('all');

  // Copied state for prompt items
  const [copiedId, setCopiedId] = useState(null);

  // Import feedback banner
  const [importNotice, setImportNotice] = useState(null); // { type: 'success'|'error', message: string }

  // Reset confirmation state
  const [isConfirmingReset, setIsConfirmingReset] = useState(false);
  const resetTimeoutRef = useRef(null);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isSavedModalOpen) {
        closeSavedModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSavedModalOpen, closeSavedModal]);

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

  // Reset reset-confirmation if modal closes
  useEffect(() => {
    if (!isSavedModalOpen) {
      setIsConfirmingReset(false);
      setImportNotice(null);
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    }
  }, [isSavedModalOpen]);

  if (!isSavedModalOpen) return null;

  const handleCopyPrompt = async (prompt) => {
    try {
      await navigator.clipboard.writeText(prompt.template);
      setCopiedId(prompt.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy prompt', err);
    }
  };

  const handleRoadmapClick = (roadmap) => {
    closeSavedModal();
    navigate(`/roadmap/${roadmap.id}`);
  };

  const handleExportClick = () => {
    exportBackup();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Enforce strict 512 KB (512 * 1024 bytes) maximum file size check
    if (file.size > (MAX_BACKUP_FILE_SIZE || 512 * 1024)) {
      setImportNotice({
        type: 'error',
        message: 'File size exceeds maximum permitted limit of 512 KB.'
      });
      e.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result;
        const res = importBackup(text);
        if (res.success) {
          setImportNotice({
            type: 'success',
            message: res.message || 'Backup restored successfully!'
          });
        } else {
          setImportNotice({
            type: 'error',
            message: res.message || 'Failed to parse backup file.'
          });
        }
      } catch (err) {
        setImportNotice({
          type: 'error',
          message: `Import error: ${err.message}`
        });
      }
    };
    reader.onerror = () => {
      setImportNotice({
        type: 'error',
        message: 'Could not read the selected file.'
      });
    };
    reader.readAsText(file);

    // Reset file input value so same file can be re-imported if desired
    e.target.value = '';
  };

  const handleResetClick = () => {
    if (!isConfirmingReset) {
      setIsConfirmingReset(true);
      resetTimeoutRef.current = setTimeout(() => {
        setIsConfirmingReset(false);
      }, 5000);
    } else {
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
      setIsConfirmingReset(false);
      resetLocalData();
      setImportNotice({
        type: 'success',
        message: 'All local progress checkmarks and bookmarks have been reset.'
      });
    }
  };

  const savedRoadmaps = bookmarks.roadmaps || [];
  const savedPrompts = bookmarks.prompts || [];
  const savedTools = bookmarks.tools || [];

  const filteredRoadmaps = filterType === 'prompts' || filterType === 'tools' ? [] : savedRoadmaps;
  const filteredPrompts = filterType === 'roadmaps' || filterType === 'tools' ? [] : savedPrompts;
  const filteredTools = filterType === 'roadmaps' || filterType === 'prompts' ? [] : savedTools;

  const hasSavedItems = savedRoadmaps.length > 0 || savedPrompts.length > 0 || savedTools.length > 0;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="saved-modal-title"
    >
      {/* Backdrop overlay */}
      <div className="fixed inset-0" onClick={closeSavedModal} />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl rounded-xl border border-app-border bg-app-surface text-app-text shadow-2xl flex flex-col max-h-[90vh] overflow-hidden z-10 font-sans">
        {/* Header */}
        <div className="px-5 sm:px-6 py-4 border-b border-app-border flex items-center justify-between gap-4 bg-app-surface shrink-0">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg border border-brand-accent/40 bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
              <Bookmark className="h-4 w-4" />
            </div>
            <div>
              <h2
                id="saved-modal-title"
                className="font-heading font-bold text-base sm:text-lg tracking-tight text-app-text flex items-center gap-2"
              >
                <span>My Workspace</span>
                <span className="text-xs font-normal text-app-muted hidden sm:inline">
                  — Saved Roadmaps, Prompts, Tools & Sync
                </span>
              </h2>
            </div>
          </div>

          <button
            onClick={closeSavedModal}
            type="button"
            aria-label="Close modal"
            className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-app-border bg-app-bg text-app-muted hover:text-app-text hover:border-brand-accent/40 transition-colors duration-150 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-5 sm:px-6 border-b border-app-border bg-app-surface flex items-center justify-between gap-4 shrink-0">
          <nav className="flex space-x-1 -mb-px" aria-label="Workspace Tabs">
            <button
              type="button"
              onClick={() => setSavedModalTab('library')}
              className={`py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors duration-150 cursor-pointer ${
                savedModalTab === 'library'
                  ? 'border-brand-accent text-brand-accent'
                  : 'border-transparent text-app-muted hover:text-app-text'
              }`}
            >
              <Bookmark className="h-3.5 w-3.5" />
              <span>Saved Library</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                  savedModalTab === 'library'
                    ? 'bg-brand-accent/20 text-brand-accent border border-brand-accent/30'
                    : 'bg-app-bg text-app-muted border border-app-border'
                }`}
              >
                {totalSavedCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setSavedModalTab('backup')}
              className={`py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors duration-150 cursor-pointer ${
                savedModalTab === 'backup'
                  ? 'border-brand-accent text-brand-accent'
                  : 'border-transparent text-app-muted hover:text-app-text'
              }`}
            >
              <Database className="h-3.5 w-3.5" />
              <span>Progress & Backup</span>
            </button>
          </nav>
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* ======================================================== */}
          {/* TAB 1: SAVED LIBRARY */}
          {/* ======================================================== */}
          {savedModalTab === 'library' && (
            <div className="space-y-5">
              {/* Filter pills if items exist */}
              {hasSavedItems && (
                <div className="flex flex-wrap items-center justify-between gap-3 pb-1">
                  <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg border border-app-border bg-app-bg text-xs">
                    <button
                      type="button"
                      onClick={() => setFilterType('all')}
                      className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                        filterType === 'all'
                          ? 'bg-app-surface text-app-text font-semibold shadow-2xs'
                          : 'text-app-muted hover:text-app-text'
                      }`}
                    >
                      All ({totalSavedCount})
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilterType('roadmaps')}
                      className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                        filterType === 'roadmaps'
                          ? 'bg-app-surface text-app-text font-semibold shadow-2xs'
                          : 'text-app-muted hover:text-app-text'
                      }`}
                    >
                      Roadmaps ({savedRoadmaps.length})
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilterType('prompts')}
                      className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                        filterType === 'prompts'
                          ? 'bg-app-surface text-app-text font-semibold shadow-2xs'
                          : 'text-app-muted hover:text-app-text'
                      }`}
                    >
                      Prompts ({savedPrompts.length})
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilterType('tools')}
                      className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                        filterType === 'tools'
                          ? 'bg-app-surface text-app-text font-semibold shadow-2xs'
                          : 'text-app-muted hover:text-app-text'
                      }`}
                    >
                      AI Tools ({savedTools.length})
                    </button>
                  </div>

                  <span className="text-xs text-app-muted hidden sm:inline">
                    Click any item to open or copy
                  </span>
                </div>
              )}

              {/* Empty State */}
              {!hasSavedItems ? (
                <div className="py-12 px-4 text-center max-w-md mx-auto space-y-4">
                  <div className="h-14 w-14 rounded-2xl border border-app-border bg-app-bg mx-auto flex items-center justify-center text-brand-accent/70 shadow-inner">
                    <Bookmark className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-app-text mb-1.5">
                      Your Saved Library is Empty
                    </h3>
                    <p className="text-xs sm:text-sm text-app-muted leading-relaxed">
                      Bookmark entire learning roadmaps, high-leverage prompts, and curated AI tools to build your personal quick-access workspace.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-app-border bg-app-bg text-left space-y-2 text-xs text-app-muted">
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-brand-accent font-bold">1.</span>
                      <span>
                        Click the <strong className="text-app-text">Bookmark</strong> icon on any Roadmap Card or header to save full learning tracks.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-brand-accent font-bold">2.</span>
                      <span>
                        Save favorite <strong className="text-app-text">Prompts</strong> from the Prompts Directory or inside any step&apos;s Prompt Lab.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-brand-accent font-bold">3.</span>
                      <span>
                        Save favorite <strong className="text-app-text">AI Tools</strong> from the AI Tools Directory or inside step playbooks.
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <Link
                      to="/roadmaps"
                      onClick={closeSavedModal}
                      className="px-4 py-2 rounded-md bg-brand-accent text-white text-xs font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-1.5"
                    >
                      <span>Explore Roadmaps</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      to="/prompts"
                      onClick={closeSavedModal}
                      className="px-4 py-2 rounded-md border border-app-border bg-app-surface text-app-text text-xs font-semibold hover:border-brand-accent/40 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Browse Prompts</span>
                    </Link>
                    <Link
                      to="/tools"
                      onClick={closeSavedModal}
                      className="px-4 py-2 rounded-md border border-app-border bg-app-surface text-app-text text-xs font-semibold hover:border-brand-accent/40 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>AI Tools</span>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* 1. SAVED ROADMAPS SECTION */}
                  {filteredRoadmaps.length > 0 && (
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 text-xs font-semibold text-app-muted uppercase tracking-wider">
                        <Compass className="h-3.5 w-3.5 text-brand-accent" />
                        <span>Saved Roadmaps ({filteredRoadmaps.length})</span>
                      </div>

                      <div className="space-y-2">
                        {filteredRoadmaps.map((roadmap) => {
                          const completedCount = getCompletedStepsForRoadmap(roadmap.id).length;
                          const totalSteps = roadmap.stepCount || 10;
                          const progressPercent = totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0;

                          return (
                            <div
                              key={roadmap.id}
                              className="group p-3.5 sm:p-4 rounded-lg border border-app-border bg-app-bg/50 hover:bg-app-bg hover:border-brand-accent/50 transition-all duration-150 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                            >
                              <div
                                onClick={() => handleRoadmapClick(roadmap)}
                                className="flex-1 cursor-pointer min-w-0"
                              >
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                  <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-brand-accent/40 bg-brand-accent/10 text-brand-accent font-semibold">
                                    {roadmap.category || 'Roadmap'}
                                  </span>
                                  <span className="text-xs text-app-muted font-medium">
                                    {totalSteps} Steps
                                  </span>
                                  {completedCount > 0 ? (
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-sans">
                                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                      <span>{progressPercent >= 100 ? 'Completed' : `${progressPercent}% Done`}</span>
                                    </span>
                                  ) : (
                                    <span className="text-[11px] font-mono text-app-muted">
                                      Not started
                                    </span>
                                  )}
                                </div>
                                <h4 className="font-heading font-semibold text-sm sm:text-base text-app-text group-hover:text-brand-accent transition-colors truncate">
                                  {roadmap.title}
                                </h4>
                                {roadmap.description && (
                                  <p className="text-xs text-app-muted line-clamp-1 mt-0.5">
                                    {roadmap.description}
                                  </p>
                                )}
                              </div>

                              <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                                <button
                                  type="button"
                                  onClick={() => handleRoadmapClick(roadmap)}
                                  className="px-3 py-1.5 rounded-md border border-app-border bg-app-surface hover:border-brand-accent hover:text-brand-accent text-xs font-semibold text-app-text transition-colors duration-150 inline-flex items-center gap-1.5 cursor-pointer shadow-2xs"
                                >
                                  <span>Open Canvas</span>
                                  <ExternalLink className="h-3 w-3" />
                                </button>

                                <button
                                  type="button"
                                  onClick={() => removeRoadmapBookmark(roadmap.id)}
                                  title="Remove from saved roadmaps"
                                  aria-label="Remove from saved roadmaps"
                                  className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-app-border bg-app-surface text-app-muted hover:text-rose-500 hover:border-rose-500/40 transition-colors duration-150 cursor-pointer"
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* 2. SAVED PROMPTS SECTION */}
                  {filteredPrompts.length > 0 && (
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 text-xs font-semibold text-app-muted uppercase tracking-wider">
                        <Terminal className="h-3.5 w-3.5 text-brand-accent" />
                        <span>Saved Prompt Templates ({filteredPrompts.length})</span>
                      </div>

                      <div className="space-y-2">
                        {filteredPrompts.map((prompt) => {
                          const isCopied = copiedId === prompt.id;
                          return (
                            <div
                              key={prompt.id}
                              className="group p-3.5 sm:p-4 rounded-lg border border-app-border bg-app-bg/50 hover:bg-app-bg hover:border-brand-accent/50 transition-all duration-150 flex flex-col justify-between gap-3"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <div className="min-w-0">
                                  <div className="flex flex-wrap items-center gap-2 mb-1">
                                    <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
                                      PROMPT
                                    </span>
                                    <span className="text-xs text-app-muted truncate font-medium">
                                      {prompt.roadmapTitle}
                                    </span>
                                    {prompt.recommendedModel && (
                                      <span className="text-[11px] font-mono text-app-muted hidden sm:inline">
                                        • Best on {prompt.recommendedModel}
                                      </span>
                                    )}
                                  </div>
                                  <h4 className="font-heading font-semibold text-sm sm:text-base text-app-text truncate">
                                    {prompt.title}
                                  </h4>
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                  <button
                                    type="button"
                                    onClick={() => handleCopyPrompt(prompt)}
                                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-150 inline-flex items-center gap-1.5 cursor-pointer shadow-2xs ${
                                      isCopied
                                        ? 'bg-emerald-500/15 border border-emerald-500 text-emerald-600 dark:text-emerald-400'
                                        : 'border border-app-border bg-app-surface text-app-text hover:border-brand-accent hover:text-brand-accent'
                                    }`}
                                  >
                                    {isCopied ? (
                                      <>
                                        <Check className="h-3.5 w-3.5" />
                                        <span>Copied!</span>
                                      </>
                                    ) : (
                                      <>
                                        <Copy className="h-3.5 w-3.5" />
                                        <span>Copy Prompt</span>
                                      </>
                                    )}
                                  </button>

                                  {prompt.roadmapId && prompt.stepId && (
                                    <Link
                                      to={`/roadmap/${prompt.roadmapId}?step=${prompt.stepId}&tab=promptLab`}
                                      onClick={closeSavedModal}
                                      className="h-8 px-2.5 inline-flex items-center gap-1 rounded-md border border-app-border bg-app-surface text-app-muted hover:text-app-text hover:border-brand-accent/40 text-xs font-semibold transition-colors duration-150"
                                      title="View in Prompt Lab"
                                    >
                                      <span>Lab</span>
                                      <ExternalLink className="h-3 w-3" />
                                    </Link>
                                  )}

                                  <button
                                    type="button"
                                    onClick={() => removePromptBookmark(prompt.id)}
                                    title="Remove prompt bookmark"
                                    aria-label="Remove prompt bookmark"
                                    className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-app-border bg-app-surface text-app-muted hover:text-rose-500 hover:border-rose-500/40 transition-colors duration-150 cursor-pointer"
                                  >
                                    <Trash2 className="h-3.5 w-3.5" />
                                  </button>
                                </div>
                              </div>

                              {/* Preview snippet of template */}
                              <div className="p-2.5 rounded bg-[#0D0E12] border border-app-border/60 text-[#F1F5F9] font-mono text-xs line-clamp-2 select-all">
                                {prompt.template}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* 3. SAVED AI TOOLS SECTION */}
                  {filteredTools.length > 0 && (
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 text-xs font-semibold text-app-muted uppercase tracking-wider">
                        <Wrench className="h-3.5 w-3.5 text-brand-accent" />
                        <span>Saved AI Tools ({filteredTools.length})</span>
                      </div>

                      <div className="space-y-2">
                        {filteredTools.map((tool) => {
                          const pricing = tool.pricing || 'Freemium';
                          return (
                            <div
                              key={tool.id || tool.name}
                              className="group p-3.5 sm:p-4 rounded-lg border border-app-border bg-app-bg/50 hover:bg-app-bg hover:border-brand-accent/50 transition-all duration-150 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                            >
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                  {pricing === 'Free' ? (
                                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-sans">
                                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                      <span>Free</span>
                                    </span>
                                  ) : pricing === 'Paid' ? (
                                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-sans">
                                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                                      <span>Paid</span>
                                    </span>
                                  ) : (
                                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent font-sans">
                                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                                      <span>Freemium</span>
                                    </span>
                                  )}
                                  {tool.bestFor && (
                                    <span className="text-xs text-brand-accent font-medium truncate">
                                      Best for: {tool.bestFor}
                                    </span>
                                  )}
                                </div>

                                <h4 className="font-heading font-semibold text-sm sm:text-base text-app-text truncate">
                                  {tool.name}
                                </h4>
                                {tool.description && (
                                  <p className="text-xs text-app-muted line-clamp-1 mt-0.5">
                                    {tool.description}
                                  </p>
                                )}
                              </div>

                              <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                                {tool.url && (
                                  <a
                                    href={sanitizeExternalUrl(tool.url)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1.5 rounded-md border border-app-border bg-app-surface hover:border-brand-accent hover:text-brand-accent text-xs font-semibold text-app-text transition-colors duration-150 inline-flex items-center gap-1.5 shadow-2xs"
                                  >
                                    <span>Visit Tool</span>
                                    <ExternalLink className="h-3 w-3" />
                                  </a>
                                )}

                                <button
                                  type="button"
                                  onClick={() => removeToolBookmark(tool.id || tool.name)}
                                  title="Remove tool from saved"
                                  aria-label="Remove tool from saved"
                                  className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-app-border bg-app-surface text-app-muted hover:text-rose-500 hover:border-rose-500/40 transition-colors duration-150 cursor-pointer"
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 2: DATA & PROGRESS BACKUP */}
          {/* ======================================================== */}
          {savedModalTab === 'backup' && (
            <div className="space-y-6">
              {/* Feedback Alert Banner */}
              {importNotice && (
                <div
                  className={`p-3.5 rounded-lg border text-xs sm:text-sm flex items-start justify-between gap-3 animate-in fade-in duration-150 ${
                    importNotice.type === 'success'
                      ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                      : 'border-rose-500/40 bg-rose-500/10 text-rose-700 dark:text-rose-300'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {importNotice.type === 'success' ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 shrink-0 text-rose-500 mt-0.5" />
                    )}
                    <span>{importNotice.message}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setImportNotice(null)}
                    className="text-app-muted hover:text-app-text cursor-pointer"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}

              {/* Privacy Notice Banner */}
              <div className="p-4 rounded-xl border border-brand-accent/30 bg-brand-accent/5 flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs">
                  <span className="font-heading font-semibold text-app-text block">
                    Zero-Login & Privacy-First Architecture
                  </span>
                  <p className="text-app-muted leading-relaxed">
                    useai.sh never sends your progress or bookmarks to an external cloud database.
                    Everything lives strictly inside your browser&apos;s local storage. Use the backup tools below to transfer your data across machines safely.
                  </p>
                </div>
              </div>

              {/* 1. Live Stats Summary Cards */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-app-muted uppercase tracking-wider">
                  Live Local Storage Metrics
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-lg border border-app-border bg-app-bg space-y-1">
                    <div className="flex items-center justify-between text-app-muted text-xs">
                      <span>Roadmaps Started</span>
                      <Compass className="h-4 w-4 text-brand-accent" />
                    </div>
                    <div className="text-2xl font-bold font-mono text-app-text">
                      {stats.roadmapsStarted}
                    </div>
                    <span className="text-[11px] text-app-muted">with ≥ 1 step done</span>
                  </div>

                  <div className="p-4 rounded-lg border border-app-border bg-app-bg space-y-1">
                    <div className="flex items-center justify-between text-app-muted text-xs">
                      <span>Steps Completed</span>
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    </div>
                    <div className="text-2xl font-bold font-mono text-app-text">
                      {stats.stepsCompleted}
                    </div>
                    <span className="text-[11px] text-app-muted">across all roadmaps</span>
                  </div>

                  <div className="p-4 rounded-lg border border-app-border bg-app-bg space-y-1">
                    <div className="flex items-center justify-between text-app-muted text-xs">
                      <span>Saved Bookmarks</span>
                      <Bookmark className="h-4 w-4 text-amber-500" />
                    </div>
                    <div className="text-2xl font-bold font-mono text-app-text">
                      {stats.savedBookmarks}
                    </div>
                    <span className="text-[11px] text-app-muted">
                      {stats.roadmapCount || 0} roadmaps, {stats.promptCount || 0} prompts, {stats.toolCount || 0} tools
                    </span>
                  </div>
                </div>
              </div>

              {/* 2. Export / Import Action Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Export Card */}
                <div className="p-4 sm:p-5 rounded-xl border border-app-border bg-app-bg flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <div className="h-8 w-8 rounded-lg border border-app-border bg-app-surface flex items-center justify-center text-brand-accent">
                      <Download className="h-4 w-4" />
                    </div>
                    <h3 className="font-heading font-semibold text-sm sm:text-base text-app-text">
                      Export Progress Backup
                    </h3>
                    <p className="text-xs text-app-muted leading-relaxed">
                      Download a timestamped <code className="font-mono text-[11px] text-brand-accent">.json</code> file containing all your checked roadmap steps, saved roadmaps, prompts, and AI tools.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleExportClick}
                    className="w-full py-2.5 px-4 rounded-md bg-brand-accent text-white text-xs font-semibold hover:opacity-90 active:scale-98 transition-all duration-150 inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download Backup (.json)</span>
                  </button>
                </div>

                {/* Import Card */}
                <div className="p-4 sm:p-5 rounded-xl border border-app-border bg-app-bg flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <div className="h-8 w-8 rounded-lg border border-app-border bg-app-surface flex items-center justify-center text-emerald-500">
                      <Upload className="h-4 w-4" />
                    </div>
                    <h3 className="font-heading font-semibold text-sm sm:text-base text-app-text">
                      Import & Restore Backup
                    </h3>
                    <p className="text-xs text-app-muted leading-relaxed">
                      Restore your step progress and saved roadmaps, prompts, and tools from a previously saved <code className="font-mono text-[11px] text-brand-accent">.json</code> backup safely.
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
                      className="w-full py-2.5 px-4 rounded-md border border-app-border bg-app-surface text-app-text hover:border-brand-accent/50 text-xs font-semibold transition-all duration-150 inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <Upload className="h-3.5 w-3.5 text-brand-accent" />
                      <span>Select Backup File (.json)</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* 3. Guarded Reset Section */}
              <div className="pt-4 border-t border-app-border">
                <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-xs font-semibold text-rose-500 flex items-center gap-1.5">
                      <AlertTriangle className="h-3.5 w-3.5" />
                      <span>Reset Local Data</span>
                    </span>
                    <p className="text-[11px] text-app-muted">
                      Clears all completed roadmap checkmarks and removes all saved roadmaps, prompts, and tools from this browser.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleResetClick}
                    className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all duration-150 cursor-pointer shrink-0 font-sans ${
                      isConfirmingReset
                        ? 'bg-rose-600 text-white animate-pulse'
                        : 'border border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-400 hover:bg-rose-500/20'
                    }`}
                  >
                    {isConfirmingReset ? 'Click to Confirm Reset!' : 'Reset All Local Data'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-6 py-3 border-t border-app-border bg-app-surface/90 flex items-center justify-between text-xs text-app-muted shrink-0">
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span>Local-First Storage</span>
            <span>•</span>
            <span>useai-v2.0</span>
          </div>

          <button
            type="button"
            onClick={closeSavedModal}
            className="px-3 py-1 rounded border border-app-border bg-app-bg text-app-text hover:border-brand-accent/40 text-xs font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
