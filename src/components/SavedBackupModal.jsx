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
  Terminal,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Wrench
} from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';
import { getCompletedStepsForRoadmap } from '../utils/badgeResolver';
import { sanitizeExternalUrl, MAX_BACKUP_FILE_SIZE } from '../utils/validation';
import { generatePromptDeepLinks } from '../utils/promptLinks';

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
  const [importNotice, setImportNotice] = useState(null);

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
      console.error('Failed to copy prompt to clipboard', err);
    }
  };

  const handleRoadmapClick = (roadmap) => {
    closeSavedModal();
    navigate(`/roadmap/${roadmap.id}`);
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
            message: `Backup restored successfully! Loaded ${result.restoredRoadmaps} roadmaps and ${result.restoredBookmarks} bookmarks.`
          });
        } else {
          setImportNotice({
            type: 'error',
            message: result.error || 'Invalid or corrupted backup JSON file.'
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
  const savedTools = bookmarks.tools || [];
  const hasSavedItems = totalSavedCount > 0;

  const filteredRoadmaps = filterType === 'all' || filterType === 'roadmaps' ? savedRoadmaps : [];
  const filteredPrompts = filterType === 'all' || filterType === 'prompts' ? savedPrompts : [];
  const filteredTools = filterType === 'all' || filterType === 'tools' ? savedTools : [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="saved-modal-title"
    >
      {/* Backdrop */}
      <div
        onClick={closeSavedModal}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Surface */}
      <div
        className="relative w-full max-w-3xl rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-[#F8F7F4] shadow-[6px_6px_0px_0px_#10162F] dark:shadow-[6px_6px_0px_0px_#000000] flex flex-col max-h-[90vh] overflow-hidden z-10 font-sans"
      >
        {/* Header */}
        <div className="px-5 sm:px-6 py-4 border-b-2 border-[#10162F] dark:border-[#3B497E] flex items-center justify-between gap-4 bg-[#F5EFE6] dark:bg-[#131A33] shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] bg-[#FFD300] text-[#10162F] border-2 border-[#10162F] shadow-[1px_1px_0px_0px_#10162F]">
              SAVED
            </span>
            <h2
              id="saved-modal-title"
              className="font-display font-bold text-lg text-[#10162F] dark:text-white"
            >
              Saved Library &amp; Backup
            </h2>
          </div>

          <button
            onClick={closeSavedModal}
            type="button"
            aria-label="Close modal"
            className="cc-btn-secondary h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-5 sm:px-6 py-3 border-b-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021] flex items-center gap-2.5 shrink-0 font-display text-xs sm:text-sm font-bold">
          <button
            type="button"
            onClick={() => setSavedModalTab('library')}
            className={`px-4 py-1.5 rounded-[4px] border-2 transition-all cursor-pointer flex items-center gap-2 ${
              savedModalTab === 'library'
                ? 'border-[#10162F] bg-[#3A10E5] text-white shadow-[2px_2px_0px_0px_#10162F]'
                : 'border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-slate-300 hover:-translate-y-0.5'
            }`}
          >
            <Bookmark className="h-4 w-4" />
            <span>01. Saved Library</span>
            <span className="font-mono text-xs opacity-80">[{totalSavedCount}]</span>
          </button>

          <button
            type="button"
            onClick={() => setSavedModalTab('backup')}
            className={`px-4 py-1.5 rounded-[4px] border-2 transition-all cursor-pointer flex items-center gap-2 ${
              savedModalTab === 'backup'
                ? 'border-[#10162F] bg-[#3A10E5] text-white shadow-[2px_2px_0px_0px_#10162F]'
                : 'border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-slate-300 hover:-translate-y-0.5'
            }`}
          >
            <Database className="h-4 w-4" />
            <span>02. Progress &amp; Backup</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* TAB 1: SAVED LIBRARY */}
          {savedModalTab === 'library' && (
            <div className="space-y-5">
              {/* Filter pills if items exist */}
              {hasSavedItems && (
                <div className="flex flex-wrap items-center justify-between gap-3 pb-1 font-mono text-xs">
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setFilterType('all')}
                      className={`px-3 py-1 rounded-[3px] border-2 transition-all cursor-pointer font-bold ${
                        filterType === 'all'
                          ? 'border-[#10162F] bg-[#10162F] text-white'
                          : 'border-[#10162F]/30 dark:border-[#3B497E] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-slate-300 hover:-translate-y-0.5'
                      }`}
                    >
                      ALL [{totalSavedCount}]
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilterType('roadmaps')}
                      className={`px-3 py-1 rounded-[3px] border-2 transition-all cursor-pointer font-bold ${
                        filterType === 'roadmaps'
                          ? 'border-[#10162F] bg-[#10162F] text-white'
                          : 'border-[#10162F]/30 dark:border-[#3B497E] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-slate-300 hover:-translate-y-0.5'
                      }`}
                    >
                      ROADMAPS [{savedRoadmaps.length}]
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilterType('prompts')}
                      className={`px-3 py-1 rounded-[3px] border-2 transition-all cursor-pointer font-bold ${
                        filterType === 'prompts'
                          ? 'border-[#10162F] bg-[#10162F] text-white'
                          : 'border-[#10162F]/30 dark:border-[#3B497E] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-slate-300 hover:-translate-y-0.5'
                      }`}
                    >
                      PROMPTS [{savedPrompts.length}]
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilterType('tools')}
                      className={`px-3 py-1 rounded-[3px] border-2 transition-all cursor-pointer font-bold ${
                        filterType === 'tools'
                          ? 'border-[#10162F] bg-[#10162F] text-white'
                          : 'border-[#10162F]/30 dark:border-[#3B497E] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-slate-300 hover:-translate-y-0.5'
                      }`}
                    >
                      AI TOOLS [{savedTools.length}]
                    </button>
                  </div>
                </div>
              )}

              {/* Empty State */}
              {!hasSavedItems ? (
                <div className="cc-card py-12 px-5 text-center max-w-md mx-auto space-y-4">
                  <div className="h-12 w-12 rounded-[4px] border-2 border-[#10162F] bg-[#FFD300] mx-auto flex items-center justify-center text-[#10162F] shadow-[2px_2px_0px_0px_#10162F]">
                    <Bookmark className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-[#10162F] dark:text-white mb-1">
                      Your Saved Library is Empty
                    </h3>
                    <p className="text-xs sm:text-sm text-[#10162F]/70 dark:text-slate-300 leading-relaxed font-sans">
                      Bookmark entire learning roadmaps, high-leverage prompts, and curated AI tools to build your personal quick-access workspace.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap justify-center gap-2 font-display text-xs">
                    <Link
                      to="/roadmaps"
                      onClick={closeSavedModal}
                      className="cc-btn-primary px-3.5 py-2 font-bold gap-1"
                    >
                      <span>Explore Roadmaps</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      to="/prompts"
                      onClick={closeSavedModal}
                      className="cc-btn-secondary px-3.5 py-2 font-bold"
                    >
                      <span>Browse Prompts</span>
                    </Link>
                    <Link
                      to="/tools"
                      onClick={closeSavedModal}
                      className="cc-btn-secondary px-3.5 py-2 font-bold"
                    >
                      <span>AI Tools</span>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* 1. SAVED ROADMAPS SECTION */}
                  {filteredRoadmaps.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 font-display text-sm font-bold text-[#10162F] dark:text-white">
                        <Compass className="h-4 w-4 text-[#3A10E5] dark:text-[#FFD300]" />
                        <span>Saved Roadmaps ({filteredRoadmaps.length})</span>
                      </div>

                      <div className="space-y-3">
                        {filteredRoadmaps.map((roadmap) => {
                          const completedCount = getCompletedStepsForRoadmap(roadmap.id).length;
                          const totalSteps = roadmap.stepCount || 10;
                          const progressPercent = totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0;

                          return (
                            <div
                              key={roadmap.id}
                              className="cc-card p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left"
                            >
                              <div
                                onClick={() => handleRoadmapClick(roadmap)}
                                className="flex-1 cursor-pointer min-w-0"
                              >
                                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] bg-[#FFD300] text-[#10162F] border border-[#10162F]">
                                    {roadmap.category || 'Roadmap'}
                                  </span>
                                  {completedCount > 0 ? (
                                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] border border-[#008A5E] bg-[#008A5E]/15 text-[#008A5E]">
                                      {progressPercent}% DONE
                                    </span>
                                  ) : (
                                    <span className="font-mono text-xs text-[#10162F]/60 dark:text-slate-400">
                                      {totalSteps} Steps
                                    </span>
                                  )}
                                </div>
                                <h4 className="font-display font-bold text-base text-[#10162F] dark:text-white truncate">
                                  {roadmap.title}
                                </h4>
                              </div>

                              <div className="flex items-center gap-2 shrink-0 font-display text-xs">
                                <button
                                  type="button"
                                  onClick={() => handleRoadmapClick(roadmap)}
                                  className="cc-btn-primary px-3 py-1.5 font-bold gap-1"
                                >
                                  <span>OPEN</span>
                                  <ExternalLink className="h-3.5 w-3.5" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => removeRoadmapBookmark(roadmap.id)}
                                  title="Remove from saved roadmaps"
                                  aria-label="Remove from saved roadmaps"
                                  className="cc-btn-secondary h-8 w-8 p-0 text-red-600 hover:text-red-700"
                                >
                                  <Trash2 className="h-4 w-4" />
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
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 font-display text-sm font-bold text-[#10162F] dark:text-white">
                        <Terminal className="h-4 w-4 text-[#3A10E5] dark:text-[#FFD300]" />
                        <span>Saved Prompt Templates ({filteredPrompts.length})</span>
                      </div>

                      <div className="space-y-3">
                        {filteredPrompts.map((prompt) => {
                          const isCopied = copiedId === prompt.id;
                          return (
                            <div
                              key={prompt.id}
                              className="cc-card p-4 flex flex-col justify-between gap-3 text-left"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <div className="min-w-0">
                                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] bg-[#FFD300] text-[#10162F] border border-[#10162F]">
                                      PROMPT
                                    </span>
                                    <span className="text-xs text-[#10162F]/60 dark:text-slate-400 truncate font-mono">
                                      {prompt.roadmapTitle}
                                    </span>
                                  </div>
                                  <h4 className="font-display font-bold text-base text-[#10162F] dark:text-white truncate">
                                    {prompt.title}
                                  </h4>
                                </div>

                                <div className="flex items-center gap-2 shrink-0 font-display text-xs">
                                  <button
                                    type="button"
                                    onClick={() => handleCopyPrompt(prompt)}
                                    className="cc-btn-secondary px-3 py-1.5 font-bold gap-1"
                                  >
                                    {isCopied ? (
                                      <>
                                        <Check className="h-3.5 w-3.5 text-[#008A5E]" />
                                        <span>COPIED!</span>
                                      </>
                                    ) : (
                                      <>
                                        <Copy className="h-3.5 w-3.5" />
                                        <span>COPY</span>
                                      </>
                                    )}
                                  </button>

                                  <a
                                    href={sanitizeExternalUrl(generatePromptDeepLinks(prompt.template).chatgpt)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cc-btn-secondary px-2.5 py-1.5 font-bold text-[#008A5E] gap-1"
                                    title="Run in ChatGPT"
                                  >
                                    <Sparkles className="h-3.5 w-3.5" />
                                    <span>GPT ↗</span>
                                  </a>

                                  <button
                                    type="button"
                                    onClick={() => removePromptBookmark(prompt.id)}
                                    title="Remove prompt bookmark"
                                    aria-label="Remove prompt bookmark"
                                    className="cc-btn-secondary h-8 w-8 p-0 text-red-600 hover:text-red-700"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </button>
                                </div>
                              </div>

                              <div className="p-3 rounded-[3px] bg-[#10162F] dark:bg-[#0B1021] text-white font-mono text-xs line-clamp-2 select-all border border-[#10162F]">
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
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 font-display text-sm font-bold text-[#10162F] dark:text-white">
                        <Wrench className="h-4 w-4 text-[#3A10E5] dark:text-[#FFD300]" />
                        <span>Saved AI Tools ({filteredTools.length})</span>
                      </div>

                      <div className="space-y-3">
                        {filteredTools.map((tool) => (
                          <div
                            key={tool.id || tool.name}
                            className="cc-card p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] bg-[#FFD300] text-[#10162F] border border-[#10162F]">
                                  {tool.pricing || 'FREEMIUM'}
                                </span>
                              </div>
                              <h4 className="font-display font-bold text-base text-[#10162F] dark:text-white truncate">
                                {tool.name}
                              </h4>
                            </div>

                            <div className="flex items-center gap-2 shrink-0 font-display text-xs">
                              {tool.url && (
                                <a
                                  href={sanitizeExternalUrl(tool.url)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="cc-btn-primary px-3 py-1.5 font-bold gap-1"
                                >
                                  <span>VISIT</span>
                                  <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                              )}
                              <button
                                type="button"
                                onClick={() => removeToolBookmark(tool.id || tool.name)}
                                title="Remove tool from saved"
                                aria-label="Remove tool from saved"
                                className="cc-btn-secondary h-8 w-8 p-0 text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: DATA & PROGRESS BACKUP */}
          {savedModalTab === 'backup' && (
            <div className="space-y-6">
              {/* Feedback Alert Banner */}
              {importNotice && (
                <div
                  className={`p-4 rounded-[4px] border-2 font-mono text-xs flex items-start justify-between gap-3 ${
                    importNotice.type === 'success'
                      ? 'border-[#008A5E] bg-[#008A5E]/15 text-[#008A5E]'
                      : 'border-red-600 bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {importNotice.type === 'success' ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
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
              <div className="cc-card p-5 flex items-start gap-3 bg-[#FFF8F2] dark:bg-[#131A33]">
                <ShieldCheck className="h-5 w-5 text-[#3A10E5] dark:text-[#FFD300] shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs font-sans">
                  <span className="font-display font-bold text-sm text-[#10162F] dark:text-white block">
                    Zero-Login &amp; Privacy-First Architecture
                  </span>
                  <p className="text-[#10162F]/80 dark:text-slate-300 leading-relaxed">
                    useai.sh never sends your progress or bookmarks to an external cloud database.
                    Everything lives strictly inside your browser&apos;s local storage. Use the backup tools below to transfer your data across machines safely.
                  </p>
                </div>
              </div>

              {/* Live Stats Summary Cards */}
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-[#10162F] dark:text-white uppercase tracking-wider">
                  Live Local Storage Metrics
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="cc-card p-4 space-y-1">
                    <div className="flex items-center justify-between text-[#10162F]/60 dark:text-slate-400 text-xs font-mono">
                      <span>Tracks Started</span>
                      <Compass className="h-4 w-4 text-[#3A10E5] dark:text-[#FFD300]" />
                    </div>
                    <div className="text-2xl font-bold font-mono text-[#10162F] dark:text-white">
                      {stats.roadmapsStarted}
                    </div>
                    <span className="text-[11px] font-mono text-[#10162F]/50 dark:text-slate-400">with ≥ 1 step done</span>
                  </div>

                  <div className="cc-card p-4 space-y-1">
                    <div className="flex items-center justify-between text-[#10162F]/60 dark:text-slate-400 text-xs font-mono">
                      <span>Steps Completed</span>
                      <CheckCircle2 className="h-4 w-4 text-[#008A5E]" />
                    </div>
                    <div className="text-2xl font-bold font-mono text-[#10162F] dark:text-white">
                      {stats.stepsCompleted}
                    </div>
                    <span className="text-[11px] font-mono text-[#10162F]/50 dark:text-slate-400">across all roadmaps</span>
                  </div>

                  <div className="cc-card p-4 space-y-1">
                    <div className="flex items-center justify-between text-[#10162F]/60 dark:text-slate-400 text-xs font-mono">
                      <span>Saved Bookmarks</span>
                      <Bookmark className="h-4 w-4 text-[#FFD300]" />
                    </div>
                    <div className="text-2xl font-bold font-mono text-[#10162F] dark:text-white">
                      {stats.savedBookmarks}
                    </div>
                    <span className="text-[11px] font-mono text-[#10162F]/50 dark:text-slate-400">total saved items</span>
                  </div>
                </div>
              </div>

              {/* Export / Import Action Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Export Card */}
                <div className="cc-card p-5 flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <div className="h-8 w-8 rounded-[4px] border-2 border-[#10162F] bg-[#FFD300] flex items-center justify-center text-[#10162F] shadow-[1px_1px_0px_0px_#10162F]">
                      <Download className="h-4 w-4" />
                    </div>
                    <h3 className="font-display font-bold text-base text-[#10162F] dark:text-white">
                      Export Progress Backup
                    </h3>
                    <p className="text-xs text-[#10162F]/75 dark:text-slate-300 leading-relaxed font-sans">
                      Download a timestamped <code className="font-mono text-xs text-[#3A10E5] dark:text-[#FFD300] font-bold">.json</code> file containing all your checked roadmap steps and saved bookmarks.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleExportClick}
                    className="cc-btn-primary py-2.5 px-4 text-xs font-mono font-bold gap-2"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Backup (.json)</span>
                  </button>
                </div>

                {/* Import Card */}
                <div className="cc-card p-5 flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <div className="h-8 w-8 rounded-[4px] border-2 border-[#10162F] bg-[#008A5E] flex items-center justify-center text-white shadow-[1px_1px_0px_0px_#10162F]">
                      <Upload className="h-4 w-4" />
                    </div>
                    <h3 className="font-display font-bold text-base text-[#10162F] dark:text-white">
                      Import &amp; Restore Backup
                    </h3>
                    <p className="text-xs text-[#10162F]/75 dark:text-slate-300 leading-relaxed font-sans">
                      Restore your step progress and saved roadmaps, prompts, and tools from a previously saved <code className="font-mono text-xs text-[#3A10E5] dark:text-[#FFD300] font-bold">.json</code> backup safely.
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
                      className="cc-btn-secondary py-2.5 px-4 text-xs font-mono font-bold gap-2 w-full"
                    >
                      <Upload className="h-4 w-4" />
                      <span>Select Backup File (.json)</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Reset Section */}
              <div className="pt-3 border-t-2 border-[#10162F]/15 dark:border-white/10">
                <div className="p-4 rounded-[4px] border-2 border-red-500/40 bg-red-50/30 dark:bg-red-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="font-mono text-xs font-bold text-red-600 dark:text-red-400 flex items-center gap-1.5">
                      <AlertTriangle className="h-4 w-4" />
                      <span>RESET LOCAL DATA</span>
                    </span>
                    <p className="text-xs text-[#10162F]/60 dark:text-slate-400 font-sans">
                      Clears all completed checkmarks and removes all bookmarks from this browser.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleResetClick}
                    className={`px-4 py-2 text-xs font-mono font-bold rounded-[4px] border-2 border-[#10162F] transition-all cursor-pointer shrink-0 ${
                      isConfirmingReset
                        ? 'bg-red-600 text-white animate-pulse shadow-[2px_2px_0px_0px_#10162F]'
                        : 'bg-white dark:bg-[#131A33] text-red-600 dark:text-red-400 shadow-[2px_2px_0px_0px_#10162F]'
                    }`}
                  >
                    {isConfirmingReset ? 'CONFIRM RESET!' : 'RESET DATA'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-6 py-3 border-t-2 border-[#10162F] dark:border-[#3B497E] bg-[#F5EFE6] dark:bg-[#131A33] flex items-center justify-between text-xs text-[#10162F]/70 dark:text-slate-400 shrink-0 font-mono">
          <span className="font-bold">LOCAL-FIRST WORKSPACE</span>
          <button
            type="button"
            onClick={closeSavedModal}
            className="cc-btn-secondary px-3 py-1 text-xs font-bold"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
