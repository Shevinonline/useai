import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  getBookmarks,
  saveBookmarks,
  isRoadmapBookmarked as checkIsRoadmapBookmarked,
  toggleRoadmapBookmark as execToggleRoadmapBookmark,
  removeRoadmapBookmark as execRemoveRoadmapBookmark,
  isPromptBookmarked as checkIsPromptBookmarked,
  togglePromptBookmark as execTogglePromptBookmark,
  removePromptBookmark as execRemovePromptBookmark,
  isToolBookmarked as checkIsToolBookmarked,
  toggleToolBookmark as execToggleToolBookmark,
  removeToolBookmark as execRemoveToolBookmark,
  getWorkspaceStats,
  exportBackupJson,
  importBackupJson,
  resetLocalData
} from '../utils/bookmarks.js';

const WorkspaceContext = createContext(null);

export function WorkspaceProvider({ children }) {
  const [bookmarks, setBookmarks] = useState(() => getBookmarks());
  const [stats, setStats] = useState(() => getWorkspaceStats());
  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);
  const [savedModalTab, setSavedModalTab] = useState('library'); // 'library' | 'backup'

  const refreshWorkspace = useCallback(() => {
    setBookmarks(getBookmarks());
    setStats(getWorkspaceStats());
  }, []);

  // Sync with global events (storage, useai_bookmarks_updated, useai_progress_updated)
  useEffect(() => {
    const handleBookmarkUpdate = () => {
      refreshWorkspace();
    };

    const handleProgressUpdate = () => {
      setStats(getWorkspaceStats());
    };

    window.addEventListener('useai_bookmarks_updated', handleBookmarkUpdate);
    window.addEventListener('useai_progress_updated', handleProgressUpdate);
    window.addEventListener('storage', handleBookmarkUpdate);
    window.addEventListener('focus', refreshWorkspace);

    return () => {
      window.removeEventListener('useai_bookmarks_updated', handleBookmarkUpdate);
      window.removeEventListener('useai_progress_updated', handleProgressUpdate);
      window.removeEventListener('storage', handleBookmarkUpdate);
      window.removeEventListener('focus', refreshWorkspace);
    };
  }, [refreshWorkspace]);

  const openSavedModal = useCallback((tab = 'library') => {
    setSavedModalTab(tab);
    setIsSavedModalOpen(true);
    refreshWorkspace();
  }, [refreshWorkspace]);

  const closeSavedModal = useCallback(() => {
    setIsSavedModalOpen(false);
  }, []);

  // 1. Roadmap Bookmarking
  const toggleRoadmap = useCallback((roadmapData) => {
    const res = execToggleRoadmapBookmark(roadmapData);
    refreshWorkspace();
    return res;
  }, [refreshWorkspace]);

  const removeRoadmap = useCallback((roadmapId) => {
    execRemoveRoadmapBookmark(roadmapId);
    refreshWorkspace();
  }, [refreshWorkspace]);

  const isRoadmapSaved = useCallback((roadmapId) => {
    if (!roadmapId) return false;
    return bookmarks.roadmaps?.some((r) => r.id === roadmapId) || false;
  }, [bookmarks.roadmaps]);

  // 2. Prompt Bookmarking
  const togglePrompt = useCallback((promptData) => {
    const res = execTogglePromptBookmark(promptData);
    refreshWorkspace();
    return res;
  }, [refreshWorkspace]);

  const removePrompt = useCallback((promptId) => {
    execRemovePromptBookmark(promptId);
    refreshWorkspace();
  }, [refreshWorkspace]);

  const isPromptSaved = useCallback((promptId) => {
    if (!promptId) return false;
    return bookmarks.prompts?.some((p) => p.id === promptId) || false;
  }, [bookmarks.prompts]);

  // 3. AI Tool Bookmarking
  const toggleTool = useCallback((toolData) => {
    const res = execToggleToolBookmark(toolData);
    refreshWorkspace();
    return res;
  }, [refreshWorkspace]);

  const removeTool = useCallback((toolIdOrName) => {
    execRemoveToolBookmark(toolIdOrName);
    refreshWorkspace();
  }, [refreshWorkspace]);

  const isToolSaved = useCallback((toolIdOrName) => {
    if (!toolIdOrName) return false;
    const norm = typeof toolIdOrName === 'string' ? toolIdOrName.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-') : '';
    return bookmarks.tools?.some(
      (t) => t.id === toolIdOrName || t.name?.toLowerCase() === toolIdOrName.toLowerCase() || t.id === norm
    ) || false;
  }, [bookmarks.tools]);

  // Backup & Reset Handlers
  const handleExport = useCallback(() => {
    return exportBackupJson();
  }, []);

  const handleImport = useCallback((inputData) => {
    const res = importBackupJson(inputData);
    refreshWorkspace();
    return res;
  }, [refreshWorkspace]);

  const handleReset = useCallback(() => {
    resetLocalData();
    refreshWorkspace();
  }, [refreshWorkspace]);

  const totalSavedCount = (bookmarks.roadmaps?.length || 0) + (bookmarks.prompts?.length || 0) + (bookmarks.tools?.length || 0);

  return (
    <WorkspaceContext.Provider
      value={{
        bookmarks,
        stats,
        totalSavedCount,
        isSavedModalOpen,
        savedModalTab,
        setSavedModalTab,
        openSavedModal,
        closeSavedModal,
        // Roadmaps
        toggleRoadmapBookmark: toggleRoadmap,
        removeRoadmapBookmark: removeRoadmap,
        isRoadmapBookmarked: isRoadmapSaved,
        // Prompts
        togglePromptBookmark: togglePrompt,
        removePromptBookmark: removePrompt,
        isPromptBookmarked: isPromptSaved,
        // Tools
        toggleToolBookmark: toggleTool,
        removeToolBookmark: removeTool,
        isToolBookmarked: isToolSaved,
        // Legacy stubs (for safety)
        toggleNodeBookmark: () => false,
        removeNodeBookmark: () => {},
        isNodeBookmarked: () => false,
        // Storage actions
        exportBackup: handleExport,
        importBackup: handleImport,
        resetLocalData: handleReset,
        refreshWorkspace
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext);
  if (!context) {
    throw new Error('useWorkspace must be used within a WorkspaceProvider');
  }
  return context;
}
