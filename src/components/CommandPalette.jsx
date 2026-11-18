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
      const tName = safeString(t?.name || `Tool ${idx + 1}`);
      const tDesc = safeString(t?.description);
      const tPricing = safeString(t?.pricing || 'Freemium');
      const tWorkflows = Array.isArray(t?.workflows) ? t.workflows : [];

      return {
        id: `tool-${t?.id || t?.name || idx}`,
        type: 'tool',
        rawId: t?.id || t?.name || `tool-${idx}`,
        title: tName,
        subtitle: `${tPricing} • ${tWorkflows.slice(0, 2).join(', ')}`,
        pricing: tPricing,
        url: t?.url,
        description: tDesc,
        tools: [tName]
      };
    });

    // E. System Quick Actions
    const actions = [
      {
        id: 'action-theme-toggle',
        type: 'action',
        actionType: 'theme',
        title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
        subtitle: 'Appearance'
      },
      {
        id: 'action-nav-roadmaps',
        type: 'action',
        actionType: 'navigate',
        path: '/roadmaps',
        title: 'Browse All AI Roadmaps',
        subtitle: 'Navigation'
      },
      {
        id: 'action-nav-prompts',
        type: 'action',
        actionType: 'navigate',
        path: '/prompts',
        title: 'Explore Battle-Tested Prompts',
        subtitle: 'Navigation'
      },
      {
        id: 'action-nav-tools',
        type: 'action',
        actionType: 'navigate',
        path: '/tools',
        title: 'Explore Curated AI Tools Directory',
        subtitle: 'Navigation'
      },
      {
        id: 'action-request-roadmap',
        type: 'action',
        actionType: 'request',
        title: 'Request a New Roadmap',
        subtitle: 'Community'
      }
    ];

    return {
      roadmaps,
      steps,
      prompts,
      tools,
      actions
    };
  }, [theme]);

  // 2. Perform Weighted Multi-Field Search
  const filteredResults = useMemo(() => {
    const q = safeLower(query);
    if (!q) {
      // Default initial view: quick actions + popular roadmaps
      return {
        actions: indexData.actions,
        roadmaps: indexData.roadmaps.slice(0, 4),
        steps: [],
        prompts: [],
        tools: indexData.tools.slice(0, 3)
      };
    }

    const matchesQuery = (text) => safeLower(text).includes(q);

    // Filter roadmaps
    const matchedRoadmaps = indexData.roadmaps
      .filter((r) => matchesQuery(r.title) || matchesQuery(r.description) || matchesQuery(r.category) || r.tools.some(matchesQuery))
      .slice(0, 5);

    // Filter steps
    const matchedSteps = indexData.steps
      .filter((s) => matchesQuery(s.title) || matchesQuery(s.summary) || matchesQuery(s.roadmapTitle) || s.tools.some(matchesQuery))
      .slice(0, 6);

    // Filter prompts
    const matchedPrompts = indexData.prompts
      .filter((p) => matchesQuery(p.title) || matchesQuery(p.template) || matchesQuery(p.roadmapTitle) || p.tools.some(matchesQuery))
      .slice(0, 6);

    // Filter tools
    const matchedTools = indexData.tools
      .filter((t) => matchesQuery(t.title) || matchesQuery(t.description) || matchesQuery(t.pricing) || t.tools.some(matchesQuery))
      .slice(0, 4);

    // Filter actions
    const matchedActions = indexData.actions
      .filter((a) => matchesQuery(a.title) || matchesQuery(a.subtitle))
      .slice(0, 3);

    return {
      actions: matchedActions,
      roadmaps: matchedRoadmaps,
      steps: matchedSteps,
      prompts: matchedPrompts,
      tools: matchedTools
    };
  }, [query, indexData]);

  // Group results for categorized rendering
  const groupedResults = useMemo(() => {
    const groups = [];
    if (filteredResults.actions.length > 0) {
      groups.push({ category: 'Actions', items: filteredResults.actions });
    }
    if (filteredResults.roadmaps.length > 0) {
      groups.push({ category: 'Roadmaps', items: filteredResults.roadmaps });
    }
    if (filteredResults.steps.length > 0) {
      groups.push({ category: 'Modules & Playbooks', items: filteredResults.steps });
    }
    if (filteredResults.prompts.length > 0) {
      groups.push({ category: 'Prompt Blueprints', items: filteredResults.prompts });
    }
    if (filteredResults.tools.length > 0) {
      groups.push({ category: 'AI Tools & Models', items: filteredResults.tools });
    }
    return groups;
  }, [filteredResults]);

  // Flat list for keyboard index navigation
  const flatResults = useMemo(() => {
    return groupedResults.flatMap((g) => g.items || []);
  }, [groupedResults]);

  // Handle Item Selection / Execution
  const handleSelectItem = (item) => {
    if (!item) return;
    closeCommandPalette();

    if (item.type === 'action') {
      if (item.actionType === 'theme') {
        toggleTheme();
      } else if (item.actionType === 'navigate') {
        navigate(item.path);
      } else if (item.actionType === 'request') {
        if (window.location.pathname === '/') {
          const el = document.getElementById('request-roadmap');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          navigate('/#request-roadmap');
        }
      }
      return;
    }

    if (item.type === 'roadmap') {
      navigate(`/roadmap/${item.rawId}`);
      return;
    }

    if (item.type === 'step') {
      navigate(`/roadmap/${item.roadmapId}?step=${item.rawId}&tab=playbook`);
      return;
    }

    if (item.type === 'prompt') {
      if (item.roadmapId && item.stepId) {
        navigate(`/roadmap/${item.roadmapId}?step=${item.stepId}&tab=promptLab`);
      } else {
        navigate('/prompts');
      }
      return;
    }

    if (item.type === 'tool') {
      navigate('/tools');
    }
  };

  // Keyboard navigation inside list
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < flatResults.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : flatResults.length - 1));
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
        return <Layers className="h-4 w-4 text-[#3A10E5] dark:text-[#FFD300] shrink-0" />;
      case 'step':
        return <GitBranch className="h-4 w-4 text-[#008A5E] shrink-0" />;
      case 'prompt':
        return <Terminal className="h-4 w-4 text-[#3A10E5] dark:text-[#FFD300] shrink-0" />;
      case 'tool':
        return <Wrench className="h-4 w-4 text-[#10162F] dark:text-white shrink-0" />;
      case 'action':
        if (item.actionType === 'theme') {
          return theme === 'dark' ? (
            <Sun className="h-4 w-4 text-[#FFD300] shrink-0" />
          ) : (
            <Moon className="h-4 w-4 text-[#10162F] shrink-0" />
          );
        }
        if (item.actionType === 'request') {
          return <Sparkles className="h-4 w-4 text-[#3A10E5] dark:text-[#FFD300] shrink-0" />;
        }
        return <Compass className="h-4 w-4 text-[#10162F] dark:text-white shrink-0" />;
      default:
        return <ArrowRight className="h-4 w-4 text-[#10162F]/60 shrink-0" />;
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
        className="relative w-full max-w-2xl rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#131A33] shadow-[6px_6px_0px_0px_#10162F] dark:shadow-[6px_6px_0px_0px_#000000] overflow-hidden font-sans z-10 animate-in zoom-in-95 duration-150"
        onKeyDown={handleKeyDown}
      >
        {/* Top Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021] gap-2.5">
          <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#FFD300] text-[#10162F] border-2 border-[#10162F] rounded-[3px] shrink-0 select-none shadow-[1px_1px_0px_0px_#10162F]">
            SEARCH
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
            className="w-full bg-transparent text-sm sm:text-base text-[#10162F] dark:text-white placeholder:text-[#10162F]/50 dark:placeholder:text-slate-400 focus:outline-none font-sans"
          />

          <div className="flex items-center gap-2 ml-2">
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="p-1 rounded text-[#10162F]/60 hover:text-[#10162F] dark:text-slate-400 dark:hover:text-white cursor-pointer"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono rounded-[2px] border border-[#10162F]/40 bg-[#FFF8F2] dark:bg-[#131A33] text-[#10162F] dark:text-slate-300 select-none font-bold">
              ESC
            </kbd>
          </div>
        </div>

        {/* Results Container */}
        <div
          ref={listRef}
          className="max-h-[60vh] overflow-y-auto divide-y-2 divide-[#10162F]/10 dark:divide-white/10 p-2.5"
        >
          {groupedResults.length > 0 ? (
            groupedResults.map((group) => (
              <div key={group.category} className="py-2 first:pt-1 last:pb-1">
                {/* Group Category Header */}
                <div className="px-3 py-1 text-xs font-mono font-bold text-[#10162F]/60 dark:text-slate-400 uppercase tracking-wider">
                  {group.category}
                </div>

                {/* Group Item List */}
                <div className="space-y-1.5 mt-1 font-sans">
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
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-[4px] text-left transition-all cursor-pointer select-none ${
                          isSelected
                            ? 'bg-[#3A10E5] text-white border-2 border-[#10162F] shadow-[2px_2px_0px_0px_#10162F]'
                            : 'text-[#10162F] dark:text-slate-200 hover:bg-[#FFF8F2] dark:hover:bg-[#1B2447] border-2 border-transparent'
                        }`}
                      >
                        {/* Left: Icon & Titles */}
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <div className={`p-1.5 rounded-[3px] border shrink-0 ${
                            isSelected
                              ? 'bg-white text-[#10162F] border-[#10162F]'
                              : 'bg-[#FFF8F2] dark:bg-[#0B1021] border-[#10162F]/20 dark:border-[#3B497E]'
                          }`}>
                            {renderItemIcon(item)}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className={`font-display font-bold text-sm truncate ${
                                isSelected ? 'text-white' : 'text-[#10162F] dark:text-white'
                              }`}>
                                {titleText}
                              </span>

                              {/* Badge indicators */}
                              {item?.type === 'roadmap' && item?.status === 'coming-soon' && (
                                <span className="px-1.5 py-0.5 rounded-[2px] text-[10px] font-mono bg-[#FFD300] text-[#10162F] border border-[#10162F] font-bold shrink-0">
                                  SOON
                                </span>
                              )}
                              {item?.type === 'step' && (
                                <span className={`px-1.5 py-0.5 rounded-[2px] text-[10px] font-mono border font-bold shrink-0 ${
                                  isSelected
                                    ? 'bg-white text-[#10162F] border-[#10162F]'
                                    : 'bg-[#008A5E]/15 border-[#008A5E] text-[#008A5E]'
                                }`}>
                                  NODE #{String(item.stepNumber ?? '')}
                                </span>
                              )}
                            </div>

                            <p className={`text-xs truncate mt-0.5 font-sans ${
                              isSelected ? 'text-white/80' : 'text-[#10162F]/60 dark:text-slate-400'
                            }`}>
                              {subtitleText}
                            </p>
                          </div>
                        </div>

                        {/* Right: Tag / Action indicator */}
                        <div className="flex items-center gap-2 shrink-0 ml-3">
                          <span className={`text-[10px] font-mono uppercase hidden sm:inline ${
                            isSelected ? 'text-white/80' : 'text-[#10162F]/50 dark:text-slate-400'
                          }`}>
                            {item?.type === 'action' ? 'Action' : String(item?.type || '')}
                          </span>

                          {isSelected && (
                            <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-white">
                              <CornerDownLeft className="h-3.5 w-3.5" />
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
              <Search className="h-8 w-8 text-[#10162F]/40 mx-auto mb-2" />
              <p className="font-display font-bold text-sm text-[#10162F] dark:text-white mb-1">
                No matching results found
              </p>
              <p className="text-xs text-[#10162F]/60 dark:text-slate-400 max-w-sm mx-auto font-sans">
                Try searching for broader keywords like &ldquo;coding&rdquo;, &ldquo;video&rdquo;, &ldquo;Cursor&rdquo;, or &ldquo;PRD&rdquo;.
              </p>
            </div>
          )}
        </div>

        {/* Footer Helper Bar */}
        <div className="px-4 py-2.5 bg-[#FFF8F2] dark:bg-[#0B1021] border-t-2 border-[#10162F] dark:border-[#3B497E] flex items-center justify-between text-xs text-[#10162F]/70 dark:text-slate-400 font-mono">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded-[2px] bg-white dark:bg-[#131A33] border border-[#10162F]/40 text-[#10162F] dark:text-white text-[10px] font-bold">
                ↑↓
              </kbd>
              <span>navigate</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded-[2px] bg-white dark:bg-[#131A33] border border-[#10162F]/40 text-[#10162F] dark:text-white text-[10px] font-bold">
                ↵
              </kbd>
              <span>select</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded-[2px] bg-white dark:bg-[#131A33] border border-[#10162F]/40 text-[#10162F] dark:text-white text-[10px] font-bold">
                ESC
              </kbd>
              <span>close</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[11px] hidden sm:inline">Shortcut:</span>
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono rounded-[2px] border border-[#10162F]/40 bg-white dark:bg-[#131A33] text-[#10162F] dark:text-white font-bold">
              {shortcutBadge}
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
