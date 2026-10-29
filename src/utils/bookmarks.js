/**
 * useai.sh — Local-First Bookmarking & Zero-Login Progress Backup Manager
 * 
 * Provides reactive localStorage storage for saved Roadmaps (roadmap.sh style),
 * Prompt Templates, and AI Tools, alongside backup export/import and workspace stats.
 */

import { safeJsonParse, validateBackupPayload } from './validation.js';

const BOOKMARKS_STORAGE_KEY = 'useai_bookmarks';
const PROGRESS_KEY_PREFIX = 'useai_progress_';

/**
 * Safely retrieves all bookmarks from localStorage
 * @returns {{ roadmaps: Array, prompts: Array, tools: Array }}
 */
export function getBookmarks() {
  if (typeof window === 'undefined' || !window.localStorage) {
    return { roadmaps: [], prompts: [], tools: [] };
  }
  try {
    const raw = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
    if (!raw) return { roadmaps: [], prompts: [], tools: [] };
    const parsed = safeJsonParse(raw, null);
    if (!parsed) return { roadmaps: [], prompts: [], tools: [] };
    return {
      roadmaps: Array.isArray(parsed?.roadmaps) ? parsed.roadmaps : [],
      prompts: Array.isArray(parsed?.prompts) ? parsed.prompts : [],
      tools: Array.isArray(parsed?.tools) ? parsed.tools : []
    };
  } catch (err) {
    console.error('Failed to parse bookmarks from localStorage', err);
    return { roadmaps: [], prompts: [], tools: [] };
  }
}

/**
 * Saves bookmarks object to localStorage and dispatches change event
 * @param {{ roadmaps: Array, prompts: Array, tools: Array }} bookmarks 
 */
export function saveBookmarks(bookmarks) {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    const normalized = {
      roadmaps: Array.isArray(bookmarks?.roadmaps) ? bookmarks.roadmaps : [],
      prompts: Array.isArray(bookmarks?.prompts) ? bookmarks.prompts : [],
      tools: Array.isArray(bookmarks?.tools) ? bookmarks.tools : []
    };
    localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(normalized));
    window.dispatchEvent(new CustomEvent('useai_bookmarks_updated', { detail: normalized }));
  } catch (err) {
    console.error('Failed to save bookmarks to localStorage', err);
  }
}

/* =========================================================================
   1. ROADMAP BOOKMARKING (roadmap.sh Style)
   ========================================================================= */

/**
 * Checks if an entire roadmap is bookmarked
 * @param {string} roadmapId 
 * @returns {boolean}
 */
export function isRoadmapBookmarked(roadmapId) {
  if (!roadmapId) return false;
  const { roadmaps } = getBookmarks();
  return roadmaps.some((r) => r.id === roadmapId);
}

/**
 * Toggles a roadmap bookmark
 * @param {object|string} roadmapData - Full roadmap meta object or roadmapId string
 * @returns {boolean} true if now bookmarked, false if removed
 */
export function toggleRoadmapBookmark(roadmapData) {
  if (!roadmapData) return false;
  const roadmapId = typeof roadmapData === 'string' ? roadmapData : roadmapData.id;
  if (!roadmapId) return false;

  const bookmarks = getBookmarks();
  const existingIdx = bookmarks.roadmaps.findIndex((r) => r.id === roadmapId);

  if (existingIdx >= 0) {
    bookmarks.roadmaps.splice(existingIdx, 1);
    saveBookmarks(bookmarks);
    return false;
  } else {
    bookmarks.roadmaps.unshift({
      id: roadmapId,
      title: roadmapData.title || roadmapId,
      category: roadmapData.category || 'Engineering',
      stepCount: roadmapData.stepCount || 10,
      description: roadmapData.description || '',
      difficulty: roadmapData.difficulty || 'Intermediate',
      tools: Array.isArray(roadmapData.tools) ? roadmapData.tools : [],
      savedAt: new Date().toISOString()
    });
    saveBookmarks(bookmarks);
    return true;
  }
}

/**
 * Removes a specific roadmap bookmark
 * @param {string} roadmapId 
 */
export function removeRoadmapBookmark(roadmapId) {
  if (!roadmapId) return;
  const bookmarks = getBookmarks();
  bookmarks.roadmaps = bookmarks.roadmaps.filter((r) => r.id !== roadmapId);
  saveBookmarks(bookmarks);
}

/* =========================================================================
   2. PROMPT TEMPLATE BOOKMARKING
   ========================================================================= */

/**
 * Checks if a prompt template is bookmarked
 * @param {string} promptId 
 * @returns {boolean}
 */
export function isPromptBookmarked(promptId) {
  if (!promptId) return false;
  const { prompts } = getBookmarks();
  return prompts.some((p) => p.id === promptId);
}

/**
 * Toggles a prompt template bookmark
 * @param {object} promptData
 * @returns {boolean} true if now bookmarked, false if removed
 */
export function togglePromptBookmark(promptData) {
  if (!promptData) return false;
  const compositeId = promptData.id || `${promptData.roadmapId}-${promptData.stepId}`;
  if (!compositeId) return false;

  const bookmarks = getBookmarks();
  const existingIdx = bookmarks.prompts.findIndex((p) => p.id === compositeId);

  if (existingIdx >= 0) {
    bookmarks.prompts.splice(existingIdx, 1);
    saveBookmarks(bookmarks);
    return false;
  } else {
    bookmarks.prompts.unshift({
      id: compositeId,
      stepId: promptData.stepId || 'step-1',
      stepNumber: promptData.stepNumber || 1,
      title: promptData.title || 'Prompt Template',
      roadmapId: promptData.roadmapId || '',
      roadmapTitle: promptData.roadmapTitle || 'Roadmap',
      template: promptData.template || '',
      recommendedModel: promptData.recommendedModel || 'Claude 3.7 Sonnet / ChatGPT o3-mini',
      variables: Array.isArray(promptData.variables) ? promptData.variables : [],
      expectedOutputs: Array.isArray(promptData.expectedOutputs) ? promptData.expectedOutputs : [],
      savedAt: new Date().toISOString()
    });
    saveBookmarks(bookmarks);
    return true;
  }
}

/**
 * Removes a specific prompt bookmark by ID
 * @param {string} promptId 
 */
export function removePromptBookmark(promptId) {
  if (!promptId) return;
  const bookmarks = getBookmarks();
  bookmarks.prompts = bookmarks.prompts.filter((p) => p.id !== promptId);
  saveBookmarks(bookmarks);
}

/* =========================================================================
   3. AI TOOL BOOKMARKING
   ========================================================================= */

/**
 * Normalizes tool identifier
 */
function getNormalizedToolId(toolData) {
  if (!toolData) return '';
  if (typeof toolData === 'string') return toolData.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
  return toolData.id || (toolData.name ? toolData.name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-') : '');
}

/**
 * Checks if an AI tool is bookmarked
 * @param {string} toolIdOrName 
 * @returns {boolean}
 */
export function isToolBookmarked(toolIdOrName) {
  if (!toolIdOrName) return false;
  const norm = typeof toolIdOrName === 'string' ? toolIdOrName.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-') : '';
  const { tools } = getBookmarks();
  return tools.some(
    (t) => t.id === toolIdOrName || t.name?.toLowerCase() === toolIdOrName.toLowerCase() || t.id === norm
  );
}

/**
 * Toggles an AI tool bookmark
 * @param {object} toolData
 * @returns {boolean} true if now bookmarked, false if removed
 */
export function toggleToolBookmark(toolData) {
  if (!toolData) return false;
  const toolId = getNormalizedToolId(toolData);
  if (!toolId && !toolData.name) return false;

  const bookmarks = getBookmarks();
  const existingIdx = bookmarks.tools.findIndex(
    (t) => t.id === toolId || (toolData.name && t.name?.toLowerCase() === toolData.name.toLowerCase())
  );

  if (existingIdx >= 0) {
    bookmarks.tools.splice(existingIdx, 1);
    saveBookmarks(bookmarks);
    return false;
  } else {
    bookmarks.tools.unshift({
      id: toolId || toolData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      name: toolData.name || 'AI Tool',
      pricing: toolData.pricing || toolData.type || 'Freemium',
      url: toolData.url || '',
      bestFor: toolData.bestFor || '',
      description: toolData.description || '',
      workflows: Array.isArray(toolData.workflows) ? toolData.workflows : [],
      savedAt: new Date().toISOString()
    });
    saveBookmarks(bookmarks);
    return true;
  }
}

/**
 * Removes a specific AI tool bookmark
 * @param {string} toolIdOrName 
 */
export function removeToolBookmark(toolIdOrName) {
  if (!toolIdOrName) return;
  const norm = toolIdOrName.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
  const bookmarks = getBookmarks();
  bookmarks.tools = bookmarks.tools.filter(
    (t) => t.id !== toolIdOrName && t.name?.toLowerCase() !== toolIdOrName.toLowerCase() && t.id !== norm
  );
  saveBookmarks(bookmarks);
}

/* =========================================================================
   4. WORKSPACE METRICS & STATS
   ========================================================================= */

/**
 * Computes live local stats: Roadmaps Started, Total Steps Completed, Total Bookmarks
 * @returns {{ roadmapsStarted: number, stepsCompleted: number, savedBookmarks: number, roadmapCount: number, promptCount: number, toolCount: number }}
 */
export function getWorkspaceStats() {
  if (typeof window === 'undefined' || !window.localStorage) {
    return {
      roadmapsStarted: 0,
      stepsCompleted: 0,
      savedBookmarks: 0,
      roadmapCount: 0,
      promptCount: 0,
      toolCount: 0
    };
  }

  let roadmapsStarted = 0;
  let stepsCompleted = 0;

  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(PROGRESS_KEY_PREFIX)) {
        try {
          const val = localStorage.getItem(key);
          if (val) {
            const arr = safeJsonParse(val, null);
            if (Array.isArray(arr) && arr.length > 0) {
              roadmapsStarted += 1;
              stepsCompleted += arr.length;
            }
          }
        } catch {
          // ignore corrupted keys
        }
      }
    }
  } catch (err) {
    console.error('Failed to calculate workspace stats', err);
  }

  const { roadmaps, prompts, tools } = getBookmarks();
  const savedBookmarks = roadmaps.length + prompts.length + tools.length;

  return {
    roadmapsStarted,
    stepsCompleted,
    savedBookmarks,
    roadmapCount: roadmaps.length,
    promptCount: prompts.length,
    toolCount: tools.length
  };
}

/* =========================================================================
   5. BACKUP EXPORT / IMPORT
   ========================================================================= */

/**
 * Exports all local progress, bookmarks, and theme into a timestamped JSON file.
 * Triggers automatic browser download.
 * @returns {object} The exported payload
 */
export function exportBackupJson() {
  if (typeof window === 'undefined' || !window.localStorage) return null;

  const progress = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(PROGRESS_KEY_PREFIX)) {
      const roadmapId = key.replace(PROGRESS_KEY_PREFIX, '');
      try {
        const val = localStorage.getItem(key);
        if (val) {
          const parsedSteps = safeJsonParse(val, null);
          if (parsedSteps) {
            progress[roadmapId] = parsedSteps;
          }
        }
      } catch (err) {
        console.error(`Failed to export key ${key}`, err);
      }
    }
  }

  const bookmarks = getBookmarks();
  const theme = localStorage.getItem('useai_theme') || 'dark';

  const exportPayload = {
    schemaVersion: 'useai-v2.0',
    app: 'useai.sh',
    exportedAt: new Date().toISOString(),
    progress,
    bookmarks,
    theme
  };

  try {
    const jsonString = JSON.stringify(exportPayload, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const filename = `useai-backup-${dateStr}.json`;

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error('Failed to trigger export download', err);
  }

  return exportPayload;
}

/**
 * Safely parses, validates, and restores/merges progress and bookmarks from JSON.
 * @param {string|object} inputData - JSON string or parsed object
 * @returns {{ success: boolean, message: string, stats?: object }}
 */
export function importBackupJson(inputData) {
  if (typeof window === 'undefined' || !window.localStorage) {
    return { success: false, message: 'LocalStorage unavailable.' };
  }

  try {
    let rawPayload = inputData;
    if (typeof inputData === 'string') {
      rawPayload = safeJsonParse(inputData, null);
      if (!rawPayload) {
        return { success: false, message: 'Invalid backup file: Malformed JSON syntax.' };
      }
    }

    const validation = validateBackupPayload(rawPayload);
    if (!validation.isValid) {
      return { success: false, message: `Backup validation error: ${validation.error || 'Invalid backup structure.'}` };
    }

    const payload = validation.sanitizedPayload;

    let progressCount = 0;
    let stepCount = 0;

    // 1. Restore Progress
    if (payload.progress && typeof payload.progress === 'object') {
      Object.entries(payload.progress).forEach(([roadmapId, steps]) => {
        if (roadmapId && Array.isArray(steps)) {
          const sanitizedSteps = steps.filter((s) => typeof s === 'string');
          const key = `${PROGRESS_KEY_PREFIX}${roadmapId}`;
          localStorage.setItem(key, JSON.stringify(sanitizedSteps));
          progressCount += 1;
          stepCount += sanitizedSteps.length;
        }
      });
    }

    // 2. Restore/Merge Bookmarks (Roadmaps, Prompts, Tools)
    let bookmarkCount = 0;
    if (payload.bookmarks && typeof payload.bookmarks === 'object') {
      const current = getBookmarks();
      const importedRoadmaps = Array.isArray(payload.bookmarks.roadmaps) ? payload.bookmarks.roadmaps : [];
      const importedPrompts = Array.isArray(payload.bookmarks.prompts) ? payload.bookmarks.prompts : [];
      const importedTools = Array.isArray(payload.bookmarks.tools) ? payload.bookmarks.tools : [];

      // Merge Roadmaps without duplicate IDs
      const roadmapMap = new Map();
      current.roadmaps.forEach((r) => roadmapMap.set(r.id, r));
      importedRoadmaps.forEach((r) => {
        if (r && r.id) {
          roadmapMap.set(r.id, r);
        }
      });

      // Merge Prompts without duplicate IDs
      const promptMap = new Map();
      current.prompts.forEach((p) => promptMap.set(p.id, p));
      importedPrompts.forEach((p) => {
        if (p && p.id) {
          promptMap.set(p.id, p);
        }
      });

      // Merge Tools without duplicate IDs
      const toolMap = new Map();
      current.tools.forEach((t) => toolMap.set(t.id, t));
      importedTools.forEach((t) => {
        if (t && t.id) {
          toolMap.set(t.id, t);
        }
      });

      const mergedBookmarks = {
        roadmaps: Array.from(roadmapMap.values()),
        prompts: Array.from(promptMap.values()),
        tools: Array.from(toolMap.values())
      };

      saveBookmarks(mergedBookmarks);
      bookmarkCount = mergedBookmarks.roadmaps.length + mergedBookmarks.prompts.length + mergedBookmarks.tools.length;
    }

    // 3. Optional Theme
    if (payload.theme === 'light' || payload.theme === 'dark') {
      localStorage.setItem('useai_theme', payload.theme);
    }

    // Dispatch global events to inform all listening components
    window.dispatchEvent(new Event('useai_progress_updated'));
    window.dispatchEvent(new Event('useai_bookmarks_updated'));

    return {
      success: true,
      message: `Restored ${stepCount} steps across ${progressCount} roadmaps and ${bookmarkCount} saved items.`,
      stats: { progressCount, stepCount, bookmarkCount }
    };
  } catch (err) {
    console.error('Failed to import backup JSON', err);
    return {
      success: false,
      message: `Failed to import backup: ${err.message || 'Malformed JSON syntax.'}`
    };
  }
}

/**
 * Clears all user roadmap progress and bookmarks from localStorage.
 */
export function resetLocalData() {
  if (typeof window === 'undefined' || !window.localStorage) return;

  const keysToRemove = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && (key.startsWith(PROGRESS_KEY_PREFIX) || key === BOOKMARKS_STORAGE_KEY)) {
      keysToRemove.push(key);
    }
  }

  keysToRemove.forEach((key) => localStorage.removeItem(key));
  saveBookmarks({ roadmaps: [], prompts: [], tools: [] });

  window.dispatchEvent(new Event('useai_progress_updated'));
  window.dispatchEvent(new Event('useai_bookmarks_updated'));
}
