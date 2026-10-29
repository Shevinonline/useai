import { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCommandPalette } from '../context/CommandPaletteContext';
import { useTheme } from '../context/ThemeContext';
import roadmapsData from '../data/roadmaps.json';
import { roadmapStepsData } from '../data/roadmapSteps';
import { toolsData } from '../data/toolsData';
import { getAllPrompts } from '../utils/promptAggregator';
import { getShortcutBadge } from '../utils/osDetector';
import {
  Search,
  X,
  Layers,
  GitBranch,
  Terminal,
  Wrench,
  Sun,
  Moon,
  Sparkles,
  ArrowRight,
  CornerDownLeft,
  Compass,
  Clock
} from 'lucide-react';

// Safe normalization helpers to eliminate ANY null/undefined/non-string crashes
const safeString = (val) => String(val ?? '').trim();
const safeLower = (val) => String(val ?? '').toLowerCase();
const safeExtractToolName = (tool) => {
  if (!tool) return '';
  if (typeof tool === 'string') return tool.trim();
  if (typeof tool === 'object') {
    return safeString(tool.name || tool.title || tool.id);
  }
  return String(tool);
};

export default function CommandPalette() {
  const { isOpen, closeCommandPalette } = useCommandPalette();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const shortcutBadge = getShortcutBadge();

  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Focus input whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 50);
    }
  }, [isOpen]);

  // 1. Compile Unified Search Data with complete defensive guarding
  const indexData = useMemo(() => {
    // A. Roadmaps
    const roadmaps = (roadmapsData || []).map((r, idx) => {
      const rawTools = Array.isArray(r?.tools) ? r.tools : [];
      const normalizedTools = rawTools.map(safeExtractToolName).filter(Boolean);
      const rTitle = safeString(r?.title || `Roadmap ${idx + 1}`);
      const rCategory = safeString(r?.category || 'Roadmap');
      const rStepCount = Number(r?.stepCount ?? 0);

      return {
        id: `roadmap-${r?.id || idx}`,
        type: 'roadmap',
        rawId: r?.id || `roadmap-${idx}`,
        title: rTitle,
        subtitle: `${rStepCount} Steps • ${rCategory}`,
        category: rCategory,
        status: safeString(r?.status || 'ready'),
        tools: normalizedTools,
        description: safeString(r?.description)
      };
    });

    // B. Workflow Steps & Nodes across all ready roadmaps
    const steps = [];
    (roadmapsData || []).forEach((roadmap) => {
      if (!roadmap || !roadmap.id) return;
      const detail = roadmapStepsData[roadmap.id];
      if (detail && Array.isArray(detail.steps)) {
        detail.steps.forEach((step, idx) => {
          if (!step) return;
          const rawTools = Array.isArray(step.tools)
            ? step.tools
            : Array.isArray(step.recommendedTools)
            ? step.recommendedTools
            : [];
          const normalizedTools = rawTools.map(safeExtractToolName).filter(Boolean);
          const stepNum = step.stepNumber ?? idx + 1;
          const stepTitle = safeString(step.title || `Step #${stepNum}`);
          const rTitle = safeString(roadmap.title || 'Roadmap');

          steps.push({
            id: `step-${roadmap.id}-${step.id || `node-${idx + 1}`}`,
            type: 'step',
            rawId: step.id || `node-${idx + 1}`,
            roadmapId: roadmap.id,
            roadmapTitle: rTitle,
            stepNumber: stepNum,
            title: stepTitle,
            subtitle: `In ${rTitle} • Step #${stepNum}`,
            summary: safeString(step.summary || step.description),
            tools: normalizedTools
          });
        });
      }
    });

    // C. Prompt Templates
    let allPrompts = [];
    try {
      allPrompts = getAllPrompts() || [];
    } catch (err) {
      console.error('Failed to load prompts in CommandPalette:', err);
      allPrompts = [];
    }

    const prompts = allPrompts.map((p, idx) => {
      const rawTools = Array.isArray(p?.recommendedTools) ? p.recommendedTools : [];
      const normalizedTools = rawTools.map(safeExtractToolName).filter(Boolean);
      const pTitle = safeString(p?.title || `Prompt ${idx + 1}`);
      const rTitle = safeString(p?.roadmapTitle || 'Roadmap');

      return {
        id: `prompt-${p?.id || idx}`,
        type: 'prompt',
        rawId: p?.id || `prompt-${idx}`,
        roadmapId: safeString(p?.roadmapId),
        stepId: safeString(p?.stepId),
        stepNumber: p?.stepNumber ?? 1,
        title: pTitle,
        subtitle: `${rTitle} • Prompt Template`,
        recommendedModel: safeString(p?.recommendedModel),
        template: safeString(p?.template),
        recommendedTools: normalizedTools
      };
    });

    // D. AI Tools
    const tools = (toolsData || []).map((t, idx) => {
      const rawWorkflows = Array.isArray(t?.workflows) ? t.workflows : [];
      const normalizedWorkflows = rawWorkflows
        .map((w) => (typeof w === 'string' ? w.trim() : safeExtractToolName(w)))
        .filter(Boolean);

      const tName = safeString(t?.name || t?.title || `AI Tool ${idx + 1}`);
      const tSubtitle = safeString(t?.bestFor || t?.description);

      return {
        id: `tool-${t?.id || idx}`,
        type: 'tool',
        rawId: t?.id || `tool-${idx}`,
        title: tName,
        subtitle: tSubtitle,
        pricing: safeString(t?.pricing || 'Freemium'),
        workflows: normalizedWorkflows
      };
    });

    // E. Quick Actions
    const quickActions = [
      {
        id: 'action-roadmaps',
        type: 'action',
        title: 'Browse All Roadmaps',
        subtitle: 'Explore 38 curated developer workflows & tool tracks',
        path: '/roadmaps',
        actionType: 'navigate'
      },
      {
        id: 'action-prompts',
        type: 'action',
        title: 'Open Prompt Library',
        subtitle: 'Search and customize 330+ battle-tested AI prompts',
        path: '/prompts',
        actionType: 'navigate'
      },
      {
        id: 'action-tools',
        type: 'action',
        title: 'Explore AI Tools Directory',
        subtitle: 'Filter 150+ developer tools, frameworks, and models',
        path: '/tools',
        actionType: 'navigate'
      },
      {
        id: 'action-theme',
        type: 'action',
        title: theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode',
        subtitle: `Currently using ${theme} appearance`,
        actionType: 'theme'
      },
      {
        id: 'action-request',
        type: 'action',
        title: 'Request a Custom Roadmap',
        subtitle: 'Submit a new topic request or vote for upcoming roadmaps',
        path: '/#request-roadmap',
        actionType: 'request'
      }
    ];

    // Popular roadmaps for empty query state
    const popularIds = [
      'cursor-ai-ides',
      'ai-full-stack-coding',
      'ai-web-design-workflow',
      'midjourney-flux-image-gen',
      'n8n-make-automation-mastery',
      'chatgpt-claude-mastery'
    ];
    const popularRoadmaps = roadmaps.filter((r) => popularIds.includes(r.rawId));

    return {
      roadmaps,
      steps,
      prompts,
      tools,
      quickActions,
      popularRoadmaps
    };
  }, [theme]);

  // 2. Filter Results by Query safely
  const groupedResults = useMemo(() => {
    const q = safeLower(query).trim();

    // When query is empty: show Quick Actions + Popular Roadmaps
    if (!q) {
      return [
        {
          category: 'Quick Navigation',
          items: indexData.quickActions || []
        },
        {
          category: 'Popular Roadmaps',
          items: indexData.popularRoadmaps || []
        }
      ];
    }

    const safeMatch = (val, term) => safeLower(val).includes(term);

    const groups = [];

    // Filter Roadmaps (Top 5)
    const matchedRoadmaps = (indexData.roadmaps || [])
      .filter(
        (r) =>
          safeMatch(r.title, q) ||
          safeMatch(r.description, q) ||
          safeMatch(r.category, q) ||
          (r.tools || []).some((t) => safeMatch(t, q))
      )
      .slice(0, 5);

    if (matchedRoadmaps.length > 0) {
      groups.push({
        category: 'Roadmaps',
        items: matchedRoadmaps
      });
    }

    // Filter Workflow Steps & Nodes (Top 6)
    const matchedSteps = (indexData.steps || [])
      .filter(
        (s) =>
          safeMatch(s.title, q) ||
          safeMatch(s.summary, q) ||
          safeMatch(s.roadmapTitle, q) ||
          (s.tools || []).some((t) => safeMatch(t, q))
      )
      .slice(0, 6);

    if (matchedSteps.length > 0) {
      groups.push({
        category: 'Workflow Steps & Nodes',
        items: matchedSteps
      });
    }

    // Filter Prompt Templates (Top 5)
    const matchedPrompts = (indexData.prompts || [])
      .filter(
        (p) =>
          safeMatch(p.title, q) ||
          safeMatch(p.template, q) ||
          safeMatch(p.roadmapTitle, q) ||
          (p.recommendedTools || []).some((t) => safeMatch(t, q))
      )
      .slice(0, 5);

    if (matchedPrompts.length > 0) {
      groups.push({
        category: 'Prompt Templates',
        items: matchedPrompts
      });
    }

    // Filter AI Tools (Top 5)
    const matchedTools = (indexData.tools || [])
      .filter(
        (t) =>
          safeMatch(t.title, q) ||
          safeMatch(t.subtitle, q) ||
          (t.workflows || []).some((w) => safeMatch(w, q))
      )
      .slice(0, 5);

    if (matchedTools.length > 0) {
      groups.push({
        category: 'AI Tools',
        items: matchedTools
      });
    }

    // Filter Quick Actions (if matching)
    const matchedActions = (indexData.quickActions || []).filter(
      (a) =>
        safeMatch(a.title, q) ||
        safeMatch(a.subtitle, q)
    );

    if (matchedActions.length > 0) {
      groups.push({
        category: 'Actions',
        items: matchedActions
      });
    }

    return groups;
  }, [query, indexData]);

  // Flattened array of all items for sequential keyboard navigation
  const flatResults = useMemo(() => {
    return (groupedResults || []).flatMap((group) => group.items || []);
  }, [groupedResults]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Ensure active element is scrolled into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector('[data-selected="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  // 3. Execution / Triggering of Selected Item
  const handleSelectItem = (item) => {
    if (!item) return;
    closeCommandPalette();

    const itemType = item.type;
    const itemStatus = item.status;
    const itemTitle = typeof item.title === 'string' ? item.title : safeExtractToolName(item.title);

    switch (itemType) {
      case 'action':
        if (item.actionType === 'theme') {
          toggleTheme();
        } else if (item.actionType === 'request') {
          const el = document.getElementById('request-roadmap');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            navigate('/#request-roadmap');
          }
        } else if (item.path) {
          navigate(item.path);
        }
        break;

      case 'roadmap':
        if (itemStatus === 'coming-soon') {
          const reqEl = document.getElementById('request-roadmap');
          if (reqEl) {
            reqEl.scrollIntoView({ behavior: 'smooth' });
            window.dispatchEvent(
              new CustomEvent('useai_prefill_request', {
                detail: { topic: `Notify me when "${itemTitle}" is ready` }
              })
            );
          } else {
            navigate(
              `/?request=${encodeURIComponent(
                `Notify me when "${itemTitle}" is ready`
              )}#request-roadmap`
            );
          }
        } else {
          navigate(`/roadmap/${item.rawId}`);
        }
        break;

      case 'step':
        navigate(`/roadmap/${item.roadmapId}?step=${item.rawId}`);
        break;

      case 'prompt':
        navigate(`/roadmap/${item.roadmapId}?step=${item.stepId}&tab=promptLab`);
        break;

      case 'tool':
        navigate(`/tools?search=${encodeURIComponent(itemTitle)}`);
        break;

      default:
        break;
    }
  };

  // Keyboard Navigation Handlers
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (flatResults.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev <= 0 ? (flatResults.length ? flatResults.length - 1 : 0) : prev - 1
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (flatResults[selectedIndex]) {
        handleSelectItem(flatResults[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closeCommandPalette();
    }
  };

  if (!isOpen) return null;

  // Icon resolver per item
  const renderItemIcon = (item) => {
    switch (item.type) {
      case 'roadmap':
        return <Layers className="h-4 w-4 text-brand-accent shrink-0" />;
      case 'step':
        return <GitBranch className="h-4 w-4 text-emerald-500 shrink-0" />;
      case 'prompt':
        return <Terminal className="h-4 w-4 text-purple-500 shrink-0" />;
      case 'tool':
        return <Wrench className="h-4 w-4 text-sky-500 shrink-0" />;
      case 'action':
        if (item.actionType === 'theme') {
          return theme === 'dark' ? (
            <Sun className="h-4 w-4 text-amber-500 shrink-0" />
          ) : (
            <Moon className="h-4 w-4 text-indigo-500 shrink-0" />
          );
        }
        if (item.actionType === 'request') {
          return <Sparkles className="h-4 w-4 text-brand-accent shrink-0" />;
        }
        return <Compass className="h-4 w-4 text-brand-accent shrink-0" />;
      default:
        return <ArrowRight className="h-4 w-4 text-app-muted shrink-0" />;
    }
  };

  let globalItemIndex = 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-14 sm:pt-20 px-3 sm:px-4 pb-6 overflow-y-auto animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-label="Global Command Palette"
    >
      {/* Backdrop */}
      <div
        onClick={closeCommandPalette}
        className="fixed inset-0 bg-black/65 backdrop-blur-md transition-opacity"
      />

      {/* Modal Surface */}
      <div
        className="relative w-full max-w-2xl rounded-xl border border-app-border bg-app-surface shadow-2xl overflow-hidden font-sans z-10 animate-in zoom-in-95 duration-150"
        onKeyDown={handleKeyDown}
      >
        {/* Top Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-app-border bg-app-surface">
          <Search className="h-4 w-4 text-brand-accent shrink-0 pointer-events-none mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search roadmaps, steps, prompts, AI tools..."
            className="w-full bg-transparent text-sm sm:text-base text-app-text placeholder:text-app-muted focus:outline-none font-sans"
          />

          <div className="flex items-center gap-2 ml-2">
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="p-1 rounded text-app-muted hover:text-app-text hover:bg-app-bg cursor-pointer"
                aria-label="Clear search"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[11px] font-mono rounded border border-app-border bg-app-bg text-app-muted select-none">
              ESC
            </kbd>
          </div>
        </div>

        {/* Results Container */}
        <div
          ref={listRef}
          className="max-h-[62vh] overflow-y-auto divide-y divide-app-border/40 p-2 scrollbar-thin"
        >
          {groupedResults.length > 0 ? (
            groupedResults.map((group) => (
              <div key={group.category} className="py-2 first:pt-1 last:pb-1">
                {/* Group Category Header */}
                <div className="px-3 py-1 text-[11px] font-bold text-app-muted uppercase tracking-wider font-sans">
                  {group.category}
                </div>

                {/* Group Item List */}
                <div className="space-y-0.5 mt-1">
                  {(group.items || []).map((item, itemIdx) => {
                    const currentIndex = globalItemIndex;
                    globalItemIndex += 1;
                    const isSelected = selectedIndex === currentIndex;

                    const titleText = typeof item?.title === 'string'
                      ? item.title
                      : safeExtractToolName(item?.title) || 'Item';
                    const subtitleText = typeof item?.subtitle === 'string'
                      ? item.subtitle
                      : safeString(item?.subtitle);
                    const itemKey = `${group.category}-${item?.type || 'item'}-${item?.id || itemIdx}`;

                    return (
                      <div
                        key={itemKey}
                        data-selected={isSelected}
                        onClick={() => handleSelectItem(item)}
                        onMouseEnter={() => setSelectedIndex(currentIndex)}
                        role="button"
                        tabIndex={0}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-colors duration-100 cursor-pointer select-none ${
                          isSelected
                            ? 'bg-brand-accent/15 border-l-2 border-brand-accent text-app-text'
                            : 'text-app-text hover:bg-app-bg/80'
                        }`}
                      >
                        {/* Left: Icon & Titles */}
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <div className="p-1.5 rounded-md bg-app-bg border border-app-border shrink-0">
                            {renderItemIcon(item)}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-heading font-medium text-xs sm:text-sm text-app-text truncate">
                                {titleText}
                              </span>

                              {/* Badge indicators */}
                              {item?.type === 'roadmap' && item?.status === 'coming-soon' && (
                                <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-app-bg border border-app-border text-app-muted shrink-0">
                                  Soon
                                </span>
                              )}
                              {item?.type === 'step' && (
                                <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 shrink-0">
                                  Node #{String(item.stepNumber ?? '')}
                                </span>
                              )}
                            </div>

                            <p className="text-[11px] text-app-muted truncate mt-0.5 font-sans">
                              {subtitleText}
                            </p>
                          </div>
                        </div>

                        {/* Right: Tag / Action indicator */}
                        <div className="flex items-center gap-2 shrink-0 ml-3">
                          <span className="text-[11px] font-mono text-app-muted capitalize hidden sm:inline">
                            {item?.type === 'action' ? 'Action' : String(item?.type || '')}
                          </span>

                          {isSelected && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-brand-accent">
                              <CornerDownLeft className="h-3 w-3" />
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            /* Empty State */
            <div className="text-center py-12 px-4">
              <Search className="h-8 w-8 text-app-muted mx-auto mb-2 opacity-50" />
              <p className="font-heading font-semibold text-sm text-app-text mb-1">
                No matching results found
              </p>
              <p className="text-xs text-app-muted max-w-sm mx-auto font-sans">
                Try searching for broader keywords like &ldquo;coding&rdquo;, &ldquo;video&rdquo;, &ldquo;Cursor&rdquo;, or &ldquo;PRD&rdquo;.
              </p>
            </div>
          )}
        </div>

        {/* Footer Helper Bar */}
        <div className="px-4 py-2.5 bg-app-bg/80 border-t border-app-border flex items-center justify-between text-xs text-app-muted font-sans">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-app-surface border border-app-border font-mono text-[10px]">
                ↑↓
              </kbd>
              <span>navigate</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-app-surface border border-app-border font-mono text-[10px]">
                ↵
              </kbd>
              <span>select</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-app-surface border border-app-border font-mono text-[10px]">
                ESC
              </kbd>
              <span>close</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-app-muted hidden sm:inline">
              Toggle anywhere with
            </span>
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono rounded border border-app-border bg-app-surface text-brand-accent font-semibold shadow-2xs">
              {shortcutBadge}
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
