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
  Compass
} from 'lucide-react';

// Safe normalization helpers
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

  // 1. Compile Unified Search Data
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

    // B. Workflow Steps & Nodes
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

    // C. Prompts
    const rawPrompts = getAllPrompts() || [];
    const prompts = rawPrompts.map((p, idx) => {
      const pTools = Array.isArray(p?.recommendedTools) ? p.recommendedTools : [];
      const normalizedTools = pTools.map(safeExtractToolName).filter(Boolean);
      const pTitle = safeString(p?.title || `Prompt ${idx + 1}`);
      const pRTitle = safeString(p?.roadmapTitle || 'Roadmap');

      return {
        id: `prompt-${p?.id || idx}`,
        type: 'prompt',
        rawId: p?.id || `prompt-${idx}`,
        stepId: p?.stepId || '',
        roadmapId: p?.roadmapId || '',
        roadmapTitle: pRTitle,
        title: pTitle,
        subtitle: `${pRTitle} • ${safeString(p?.recommendedModel || 'Prompt')}`,
        template: safeString(p?.template),
        tools: normalizedTools
      };
    });

    // D. Tools
    const tools = (toolsData || []).map((t, idx) => {
      const tName = safeExtractToolName(t);
      const tWorkflows = Array.isArray(t?.workflows) ? t.workflows : [];
      return {
        id: `tool-${t?.id || tName || idx}`,
        type: 'tool',
        rawId: t?.id || tName,
        title: tName || `AI Tool ${idx + 1}`,
        subtitle: `${safeString(t?.pricing || 'Freemium')} • ${safeString(t?.bestFor || 'Workflow')}`,
        pricing: safeString(t?.pricing || 'Freemium'),
        workflows: tWorkflows,
        description: safeString(t?.description)
      };
    });

    // E. Commands & Navigation
    const actions = [
      {
        id: 'action-roadmaps',
        type: 'action',
        title: 'Go to All Roadmaps',
        subtitle: 'Explore 32+ step-by-step developer curriculums',
        path: '/roadmaps'
      },
      {
        id: 'action-prompts',
        type: 'action',
        title: 'Go to Prompts Directory',
        subtitle: '330+ customizable AI prompt blueprints',
        path: '/prompts'
      },
      {
        id: 'action-tools',
        type: 'action',
        title: 'Go to AI Tools Directory',
        subtitle: 'Curated models, extensions, and engineering tools',
        path: '/tools'
      },
      {
        id: 'action-request',
        type: 'action',
        title: 'Request a New Roadmap',
        subtitle: 'Vote or submit curriculum topic for community review',
        actionType: 'request'
      },
      {
        id: 'action-theme',
        type: 'action',
        title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
        subtitle: 'Toggle workspace visual contrast',
        actionType: 'theme'
      }
    ];

    return { roadmaps, steps, prompts, tools, actions };
  }, [theme]);

  // 2. Filter & Group Results
  const groupedResults = useMemo(() => {
    const q = safeLower(query);

    if (!q) {
      return [
        {
          category: 'QUICK ACTIONS',
          items: indexData.actions
        },
        {
          category: 'FEATURED ROADMAPS',
          items: indexData.roadmaps.slice(0, 5)
        },
        {
          category: 'POPULAR AI TOOLS',
          items: indexData.tools.slice(0, 4)
        }
      ];
    }

    const matchesSearch = (item) => {
      if (!item) return false;
      const titleMatch = safeLower(item.title).includes(q);
      const subtitleMatch = safeLower(item.subtitle).includes(q);
      const descMatch = item.description ? safeLower(item.description).includes(q) : false;
      const summaryMatch = item.summary ? safeLower(item.summary).includes(q) : false;
      const templateMatch = item.template ? safeLower(item.template).includes(q) : false;
      const toolsMatch = Array.isArray(item.tools)
        ? item.tools.some((t) => safeLower(t).includes(q))
        : false;

      return titleMatch || subtitleMatch || descMatch || summaryMatch || templateMatch || toolsMatch;
    };

    const matchingRoadmaps = indexData.roadmaps.filter(matchesSearch).slice(0, 4);
    const matchingSteps = indexData.steps.filter(matchesSearch).slice(0, 5);
    const matchingPrompts = indexData.prompts.filter(matchesSearch).slice(0, 4);
    const matchingTools = indexData.tools.filter(matchesSearch).slice(0, 4);
    const matchingActions = indexData.actions.filter(matchesSearch);

    const groups = [];
    if (matchingRoadmaps.length > 0) {
      groups.push({ category: 'ROADMAPS', items: matchingRoadmaps });
    }
    if (matchingSteps.length > 0) {
      groups.push({ category: 'WORKFLOW NODES & STEPS', items: matchingSteps });
    }
    if (matchingPrompts.length > 0) {
      groups.push({ category: 'PROMPT BLUEPRINTS', items: matchingPrompts });
    }
    if (matchingTools.length > 0) {
      groups.push({ category: 'AI TOOLS', items: matchingTools });
    }
    if (matchingActions.length > 0) {
      groups.push({ category: 'COMMANDS', items: matchingActions });
    }

    return groups;
  }, [query, indexData]);

  // Flattened array for keyboard navigation
  const flatResults = useMemo(() => {
    return (groupedResults || []).flatMap((group) => group.items || []);
  }, [groupedResults]);

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
        return <Layers className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400 shrink-0" />;
      case 'step':
        return <GitBranch className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />;
      case 'prompt':
        return <Terminal className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400 shrink-0" />;
      case 'tool':
        return <Wrench className="h-3.5 w-3.5 text-zinc-700 dark:text-zinc-300 shrink-0" />;
      case 'action':
        if (item.actionType === 'theme') {
          return theme === 'dark' ? (
            <Sun className="h-3.5 w-3.5 text-amber-500 shrink-0" />
          ) : (
            <Moon className="h-3.5 w-3.5 text-zinc-700 shrink-0" />
          );
        }
        if (item.actionType === 'request') {
          return <Sparkles className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400 shrink-0" />;
        }
        return <Compass className="h-3.5 w-3.5 text-zinc-700 dark:text-zinc-300 shrink-0" />;
      default:
        return <ArrowRight className="h-3.5 w-3.5 text-zinc-400 shrink-0" />;
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
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Surface */}
      <div
        className="relative w-full max-w-2xl rounded-[4px] border-2 border-zinc-900 dark:border-zinc-700 bg-white dark:bg-[#121215] shadow-[6px_6px_0px_0px_#18181B] dark:shadow-[6px_6px_0px_0px_#7C3AED] overflow-hidden font-sans z-10 animate-in zoom-in-95 duration-150"
        onKeyDown={handleKeyDown}
      >
        {/* Top Search Input Bar */}
        <div className="relative flex items-center px-4 py-3 border-b-2 border-zinc-900 dark:border-zinc-700 bg-[#F9F8F6] dark:bg-[#0E0E11] gap-2">
          <span className="font-mono text-xs font-bold px-2 py-1 bg-zinc-900 text-white dark:bg-purple-600 rounded-[2px] shrink-0 select-none tracking-wider">
            [ SEARCH ]
          </span>

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search roadmaps, steps, prompts, AI tools..."
            className="w-full bg-transparent text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none font-sans"
          />

          <div className="flex items-center gap-2 ml-2">
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="p-1 rounded text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer"
                aria-label="Clear search"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono rounded-[2px] border border-zinc-300 dark:border-zinc-700 bg-[#F2F0EC] dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 select-none font-bold">
              ESC
            </kbd>
          </div>
        </div>

        {/* Results Container */}
        <div
          ref={listRef}
          className="max-h-[60vh] overflow-y-auto divide-y divide-zinc-200 dark:divide-zinc-800 p-2 scrollbar-thin"
        >
          {groupedResults.length > 0 ? (
            groupedResults.map((group) => (
              <div key={group.category} className="py-2 first:pt-1 last:pb-1">
                {/* Group Category Header */}
                <div className="px-3 py-1 text-[10px] font-mono font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  {group.category}
                </div>

                {/* Group Item List */}
                <div className="space-y-1 mt-1 font-sans">
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
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-[3px] text-left transition-all cursor-pointer select-none ${
                          isSelected
                            ? 'bg-zinc-100 dark:bg-zinc-800/90 border-l-2 border-zinc-900 dark:border-purple-500 text-zinc-900 dark:text-zinc-100 font-medium'
                            : 'text-zinc-700 dark:text-zinc-300 hover:bg-[#F9F8F6] dark:hover:bg-zinc-900 border-l-2 border-transparent'
                        }`}
                      >
                        {/* Left: Icon & Titles */}
                        <div className="flex items-center gap-2.5 min-w-0 flex-1">
                          <div className="p-1.5 rounded-[2px] bg-[#F2F0EC] dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 shrink-0">
                            {renderItemIcon(item)}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-heading font-bold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 truncate">
                                {titleText}
                              </span>

                              {/* Badge indicators */}
                              {item?.type === 'roadmap' && item?.status === 'coming-soon' && (
                                <span className="px-1.5 py-0.2 rounded-[2px] text-[10px] font-mono bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 font-bold shrink-0">
                                  SOON
                                </span>
                              )}
                              {item?.type === 'step' && (
                                <span className="px-1.5 py-0.2 rounded-[2px] text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-bold shrink-0">
                                  NODE #{String(item.stepNumber ?? '')}
                                </span>
                              )}
                            </div>

                            <p className="text-[11px] text-zinc-500 truncate mt-0.5 font-sans">
                              {subtitleText}
                            </p>
                          </div>
                        </div>

                        {/* Right: Tag / Action indicator */}
                        <div className="flex items-center gap-2 shrink-0 ml-3">
                          <span className="text-[10px] font-mono text-zinc-500 uppercase hidden sm:inline">
                            {item?.type === 'action' ? 'Action' : String(item?.type || '')}
                          </span>

                          {isSelected && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-900 dark:text-purple-400 font-bold">
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
            <div className="text-center py-12 px-4">
              <Search className="h-8 w-8 text-zinc-400 mx-auto mb-2 opacity-50" />
              <p className="font-heading font-bold text-sm text-zinc-900 dark:text-zinc-100 mb-1">
                No matching results found
              </p>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto font-sans">
                Try searching for broader keywords like &ldquo;coding&rdquo;, &ldquo;video&rdquo;, &ldquo;Cursor&rdquo;, or &ldquo;PRD&rdquo;.
              </p>
            </div>
          )}
        </div>

        {/* Footer Helper Bar */}
        <div className="px-4 py-2.5 bg-[#F2F0EC]/80 dark:bg-zinc-900/80 border-t border-zinc-300 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400 font-mono">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded-[2px] bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-[10px] font-bold">
                ↑↓
              </kbd>
              <span>navigate</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded-[2px] bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-[10px] font-bold">
                ↵
              </kbd>
              <span>select</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded-[2px] bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-[10px] font-bold">
                ESC
              </kbd>
              <span>close</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[11px] hidden sm:inline">Shortcut:</span>
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono rounded-[2px] border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold">
              {shortcutBadge}
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
