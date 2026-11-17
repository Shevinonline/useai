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
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="saved-modal-title"
    >
      {/* Backdrop overlay */}
      <div className="fixed inset-0" onClick={closeSavedModal} />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl rounded-[4px] border-2 border-zinc-900 dark:border-zinc-700 bg-[#F9F8F6] dark:bg-[#0E0E11] text-zinc-900 dark:text-zinc-100 shadow-[6px_6px_0px_0px_#18181B] dark:shadow-[6px_6px_0px_0px_#7C3AED] flex flex-col max-h-[90vh] overflow-hidden z-10 font-sans">
        {/* Header */}
        <div className="px-5 sm:px-6 py-3.5 border-b border-zinc-300 dark:border-zinc-800 flex items-center justify-between gap-4 bg-[#F2F0EC]/80 dark:bg-zinc-900/80 shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[2px] bg-zinc-900 text-white dark:bg-purple-600">
              [ WORKSPACE ]
            </span>
            <h2
              id="saved-modal-title"
              className="font-heading font-extrabold text-base tracking-tight text-zinc-900 dark:text-zinc-100"
            >
              Saved Library &amp; Backup
            </h2>
          </div>

          <button
            onClick={closeSavedModal}
            type="button"
            aria-label="Close modal"
            className="workspace-btn h-7 w-7 text-xs"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-5 sm:px-6 py-2.5 border-b border-zinc-300 dark:border-zinc-800 bg-[#F9F8F6] dark:bg-[#0E0E11] flex items-center gap-2 shrink-0 font-mono text-xs">
          <button
            type="button"
            onClick={() => setSavedModalTab('library')}
            className={`px-3 py-1.5 rounded-[3px] border transition-all cursor-pointer flex items-center gap-1.5 ${
              savedModalTab === 'library'
                ? 'border-2 border-zinc-900 dark:border-purple-500 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-bold shadow-[2px_2px_0px_0px_#18181B] dark:shadow-none'
                : 'border border-zinc-300 dark:border-zinc-800 bg-[#F2F0EC] dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            <Bookmark className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
            <span>01. SAVED LIBRARY</span>
            <span className="font-bold">[{totalSavedCount}]</span>
          </button>

          <button
            type="button"
            onClick={() => setSavedModalTab('backup')}
            className={`px-3 py-1.5 rounded-[3px] border transition-all cursor-pointer flex items-center gap-1.5 ${
              savedModalTab === 'backup'
                ? 'border-2 border-zinc-900 dark:border-purple-500 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-bold shadow-[2px_2px_0px_0px_#18181B] dark:shadow-none'
                : 'border border-zinc-300 dark:border-zinc-800 bg-[#F2F0EC] dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            <Database className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
            <span>02. PROGRESS &amp; BACKUP</span>
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
                  <div className="flex flex-wrap items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setFilterType('all')}
                      className={`px-2.5 py-1 rounded-[3px] border transition-all cursor-pointer ${
                        filterType === 'all'
                          ? 'border-2 border-zinc-900 dark:border-purple-500 bg-zinc-900 text-white dark:bg-purple-600 font-bold shadow-[1px_1px_0px_0px_#18181B] dark:shadow-none'
                          : 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:border-zinc-500'
                      }`}
                    >
                      ALL [{totalSavedCount}]
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilterType('roadmaps')}
                      className={`px-2.5 py-1 rounded-[3px] border transition-all cursor-pointer ${
                        filterType === 'roadmaps'
                          ? 'border-2 border-zinc-900 dark:border-purple-500 bg-zinc-900 text-white dark:bg-purple-600 font-bold shadow-[1px_1px_0px_0px_#18181B] dark:shadow-none'
                          : 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:border-zinc-500'
                      }`}
                    >
                      ROADMAPS [{savedRoadmaps.length}]
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilterType('prompts')}
                      className={`px-2.5 py-1 rounded-[3px] border transition-all cursor-pointer ${
                        filterType === 'prompts'
                          ? 'border-2 border-zinc-900 dark:border-purple-500 bg-zinc-900 text-white dark:bg-purple-600 font-bold shadow-[1px_1px_0px_0px_#18181B] dark:shadow-none'
                          : 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:border-zinc-500'
                      }`}
                    >
                      PROMPTS [{savedPrompts.length}]
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilterType('tools')}
                      className={`px-2.5 py-1 rounded-[3px] border transition-all cursor-pointer ${
                        filterType === 'tools'
                          ? 'border-2 border-zinc-900 dark:border-purple-500 bg-zinc-900 text-white dark:bg-purple-600 font-bold shadow-[1px_1px_0px_0px_#18181B] dark:shadow-none'
                          : 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:border-zinc-500'
                      }`}
                    >
                      AI TOOLS [{savedTools.length}]
                    </button>
                  </div>
                </div>
              )}

              {/* Empty State */}
              {!hasSavedItems ? (
                <div className="workspace-card py-12 px-4 text-center max-w-md mx-auto space-y-4">
                  <div className="h-12 w-12 rounded-[4px] border-2 border-zinc-900 dark:border-purple-500 bg-white dark:bg-zinc-900 mx-auto flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-xs">
                    <Bookmark className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-1">
                      Your Saved Library is Empty
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                      Bookmark entire learning roadmaps, high-leverage prompts, and curated AI tools to build your personal quick-access workspace.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap justify-center gap-2 font-mono text-xs">
                    <Link
                      to="/roadmaps"
                      onClick={closeSavedModal}
                      className="workspace-btn px-3 py-1.5 font-bold gap-1"
                    >
                      <span>Explore Roadmaps</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                    <Link
                      to="/prompts"
                      onClick={closeSavedModal}
                      className="workspace-btn px-3 py-1.5 font-bold"
                    >
                      <span>Browse Prompts</span>
                    </Link>
                    <Link
                      to="/tools"
                      onClick={closeSavedModal}
                      className="workspace-btn px-3 py-1.5 font-bold"
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
                      <div className="flex items-center gap-2 font-mono text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                        <Compass className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                        <span>Saved Roadmaps ({filteredRoadmaps.length})</span>
                      </div>

                      <div className="space-y-2.5">
                        {filteredRoadmaps.map((roadmap) => {
                          const completedCount = getCompletedStepsForRoadmap(roadmap.id).length;
                          const totalSteps = roadmap.stepCount || 10;
                          const progressPercent = totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0;

                          return (
                            <div
                              key={roadmap.id}
                              className="workspace-card p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left"
                            >
                              <div
                                onClick={() => handleRoadmapClick(roadmap)}
                                className="flex-1 cursor-pointer min-w-0"
                              >
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                  <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-[2px] bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">
                                    {roadmap.category || 'Roadmap'}
                                  </span>
                                  {completedCount > 0 ? (
                                    <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-[2px] border border-emerald-500/50 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                                      {progressPercent}% DONE
                                    </span>
                                  ) : (
                                    <span className="font-mono text-[10px] text-zinc-500">
                                      {totalSteps} Steps
                                    </span>
                                  )}
                                </div>
                                <h4 className="font-heading font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 transition-colors truncate">
                                  {roadmap.title}
                                </h4>
                              </div>

                              <div className="flex items-center gap-2 shrink-0 font-mono text-xs">
                                <button
                                  type="button"
                                  onClick={() => handleRoadmapClick(roadmap)}
                                  className="workspace-btn px-2.5 py-1 gap-1 font-bold"
                                >
                                  <span>OPEN</span>
                                  <ExternalLink className="h-3 w-3" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => removeRoadmapBookmark(roadmap.id)}
                                  title="Remove from saved roadmaps"
                                  aria-label="Remove from saved roadmaps"
                                  className="workspace-btn h-7 w-7 text-xs text-rose-600 dark:text-rose-400"
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
                      <div className="flex items-center gap-2 font-mono text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                        <Terminal className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                        <span>Saved Prompt Templates ({filteredPrompts.length})</span>
                      </div>

                      <div className="space-y-2.5">
                        {filteredPrompts.map((prompt) => {
                          const isCopied = copiedId === prompt.id;
                          return (
                            <div
                              key={prompt.id}
                              className="workspace-card p-3.5 sm:p-4 flex flex-col justify-between gap-3 text-left"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <div className="min-w-0">
                                  <div className="flex flex-wrap items-center gap-2 mb-1">
                                    <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-[2px] bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/30">
                                      PROMPT
                                    </span>
                                    <span className="text-xs text-zinc-500 truncate font-mono">
                                      {prompt.roadmapTitle}
                                    </span>
                                  </div>
                                  <h4 className="font-heading font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 truncate">
                                    {prompt.title}
                                  </h4>
                                </div>

                                <div className="flex items-center gap-1.5 shrink-0 font-mono text-xs">
                                  <button
                                    type="button"
                                    onClick={() => handleCopyPrompt(prompt)}
                                    className="workspace-btn px-2.5 py-1 font-bold gap-1"
                                  >
                                    {isCopied ? (
                                      <>
                                        <Check className="h-3 w-3 text-emerald-600" />
                                        <span>COPIED!</span>
                                      </>
                                    ) : (
                                      <>
                                        <Copy className="h-3 w-3" />
                                        <span>COPY</span>
                                      </>
                                    )}
                                  </button>

                                  <a
                                    href={sanitizeExternalUrl(generatePromptDeepLinks(prompt.template).chatgpt)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="workspace-btn px-2 py-1 font-bold text-emerald-700 dark:text-emerald-400 gap-1"
                                    title="Run in ChatGPT"
                                  >
                                    <Sparkles className="h-3 w-3" />
                                    <span>GPT ↗</span>
                                  </a>

                                  <button
                                    type="button"
                                    onClick={() => removePromptBookmark(prompt.id)}
                                    title="Remove prompt bookmark"
                                    aria-label="Remove prompt bookmark"
                                    className="workspace-btn h-7 w-7 text-xs text-rose-600 dark:text-rose-400"
                                  >
                                    <Trash2 className="h-3.5 w-3.5" />
                                  </button>
                                </div>
                              </div>

                              <div className="p-2.5 rounded-[3px] bg-[#0E0E12] border border-zinc-800 text-zinc-100 font-mono text-xs line-clamp-2 select-all">
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
                      <div className="flex items-center gap-2 font-mono text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                        <Wrench className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                        <span>Saved AI Tools ({filteredTools.length})</span>
                      </div>

                      <div className="space-y-2.5">
                        {filteredTools.map((tool) => (
                          <div
                            key={tool.id || tool.name}
                            className="workspace-card p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-1">
                                <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-[2px] bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">
                                  {tool.pricing || 'FREEMIUM'}
                                </span>
                              </div>
                              <h4 className="font-heading font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 truncate">
                                {tool.name}
                              </h4>
                            </div>

                            <div className="flex items-center gap-2 shrink-0 font-mono text-xs">
                              {tool.url && (
                                <a
                                  href={sanitizeExternalUrl(tool.url)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="workspace-btn px-2.5 py-1 font-bold gap-1"
                                >
                                  <span>VISIT</span>
                                  <ExternalLink className="h-3 w-3" />
                                </a>
                              )}
                              <button
                                type="button"
                                onClick={() => removeToolBookmark(tool.id || tool.name)}
                                title="Remove tool from saved"
                                aria-label="Remove tool from saved"
                                className="workspace-btn h-7 w-7 text-xs text-rose-600 dark:text-rose-400"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
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
                  className={`p-3.5 rounded-[4px] border font-mono text-xs flex items-start justify-between gap-3 ${
                    importNotice.type === 'success'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300'
                      : 'border-rose-600 bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {importNotice.type === 'success' ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 shrink-0 text-rose-600 mt-0.5" />
                    )}
                    <span>{importNotice.message}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setImportNotice(null)}
                    className="cursor-pointer"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}

              {/* Privacy Notice Banner */}
              <div className="bg-white dark:bg-[#141418] border border-zinc-300 dark:border-zinc-800 rounded-[4px] p-4 flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs font-sans">
                  <span className="font-heading font-bold text-zinc-900 dark:text-zinc-100 block">
                    Zero-Login &amp; Privacy-First Architecture
                  </span>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    useai.sh never sends your progress or bookmarks to an external cloud database.
                    Everything lives strictly inside your browser&apos;s local storage. Use the backup tools below to transfer your data across machines safely.
                  </p>
                </div>
              </div>

              {/* Live Stats Summary Cards */}
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                  Live Local Storage Metrics
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="workspace-card p-3.5 space-y-1">
                    <div className="flex items-center justify-between text-zinc-500 text-xs font-mono">
                      <span>Tracks Started</span>
                      <Compass className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-zinc-100">
                      {stats.roadmapsStarted}
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500">with ≥ 1 step done</span>
                  </div>

                  <div className="workspace-card p-3.5 space-y-1">
                    <div className="flex items-center justify-between text-zinc-500 text-xs font-mono">
                      <span>Steps Completed</span>
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-zinc-100">
                      {stats.stepsCompleted}
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500">across all roadmaps</span>
                  </div>

                  <div className="workspace-card p-3.5 space-y-1">
                    <div className="flex items-center justify-between text-zinc-500 text-xs font-mono">
                      <span>Saved Bookmarks</span>
                      <Bookmark className="h-4 w-4 text-amber-500" />
                    </div>
                    <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-zinc-100">
                      {stats.savedBookmarks}
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500">total saved items</span>
                  </div>
                </div>
              </div>

              {/* Export / Import Action Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Export Card */}
                <div className="workspace-card p-4 sm:p-5 flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <div className="h-7 w-7 rounded-[3px] border border-zinc-900 dark:border-zinc-700 bg-[#F2F0EC] dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-100">
                      <Download className="h-3.5 w-3.5" />
                    </div>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100">
                      Export Progress Backup
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                      Download a timestamped <code className="font-mono text-[11px] text-purple-600 font-bold">.json</code> file containing all your checked roadmap steps and saved bookmarks.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleExportClick}
                    className="workspace-btn py-2 px-3 text-xs font-mono font-bold gap-2 bg-zinc-900 text-white dark:bg-purple-600"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download Backup (.json)</span>
                  </button>
                </div>

                {/* Import Card */}
                <div className="workspace-card p-4 sm:p-5 flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <div className="h-7 w-7 rounded-[3px] border border-zinc-900 dark:border-zinc-700 bg-[#F2F0EC] dark:bg-zinc-800 flex items-center justify-center text-emerald-600">
                      <Upload className="h-3.5 w-3.5" />
                    </div>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100">
                      Import &amp; Restore Backup
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                      Restore your step progress and saved roadmaps, prompts, and tools from a previously saved <code className="font-mono text-[11px] text-purple-600 font-bold">.json</code> backup safely.
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
                      className="workspace-btn py-2 px-3 text-xs font-mono font-bold gap-2 w-full"
                    >
                      <Upload className="h-3.5 w-3.5" />
                      <span>Select Backup File (.json)</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Reset Section */}
              <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800">
                <div className="p-4 rounded-[4px] border border-rose-500/30 bg-rose-50/20 dark:bg-rose-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="font-mono text-xs font-bold text-rose-600 flex items-center gap-1.5">
                      <AlertTriangle className="h-3.5 w-3.5" />
                      <span>RESET LOCAL DATA</span>
                    </span>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-sans">
                      Clears all completed checkmarks and removes all bookmarks from this browser.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleResetClick}
                    className={`workspace-btn px-3 py-1.5 text-xs font-mono font-bold shrink-0 ${
                      isConfirmingReset ? 'bg-rose-600 text-white animate-pulse' : 'text-rose-600 dark:text-rose-400'
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
        <div className="px-5 sm:px-6 py-2.5 border-t border-zinc-300 dark:border-zinc-800 bg-[#F2F0EC]/80 dark:bg-zinc-900/80 flex items-center justify-between text-xs text-zinc-500 shrink-0 font-mono">
          <span>LOCAL-FIRST WORKSPACE</span>
          <button
            type="button"
            onClick={closeSavedModal}
            className="workspace-btn px-3 py-1 text-xs font-bold"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
