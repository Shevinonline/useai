import { useState, useMemo, useEffect } from 'react';
import { getAllPrompts } from '../utils/promptAggregator';
import roadmapsData from '../data/roadmaps.json';
import PromptCard from './PromptCard';
import RoadmapRequestBox from './RoadmapRequestBox';
import {
  Search,
  X,
  ChevronDown,
  RotateCcw,
  SlidersHorizontal,
  Layers,
  Wrench
} from 'lucide-react';
import { getShortcutBadge } from '../utils/osDetector';

export default function PromptsPage() {
  const shortcutBadge = getShortcutBadge();
  const allPrompts = useMemo(() => getAllPrompts(), []);

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRoadmap, setSelectedRoadmap] = useState('all');
  const [selectedTool, setSelectedTool] = useState('all');

  // Progressive loading / pagination state (20 per page)
  const [displayCount, setDisplayCount] = useState(20);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const total = allPrompts.length;
    const workflow = allPrompts.filter((p) => {
      const parent = roadmapsData.find((r) => r.id === p.roadmapId);
      return parent?.category === 'Role & Workflow Roadmaps' || parent?.category === 'workflow';
    }).length;
    const tool = allPrompts.filter((p) => {
      const parent = roadmapsData.find((r) => r.id === p.roadmapId);
      return parent?.category === 'Tool Mastery Roadmaps' || parent?.category === 'tool' || parent?.category === 'tool-specific';
    }).length;
    return { total, workflow, tool };
  }, [allPrompts]);

  // Unique tools for secondary pill filter
  const popularTools = useMemo(() => {
    const toolCountMap = {};
    allPrompts.forEach((p) => {
      if (Array.isArray(p.recommendedTools)) {
        p.recommendedTools.forEach((t) => {
          if (t && typeof t === 'string') {
            toolCountMap[t] = (toolCountMap[t] || 0) + 1;
          }
        });
      }
    });

    return Object.entries(toolCountMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([tool, count]) => ({ tool, count }));
  }, [allPrompts]);

  // Unique roadmaps for dropdown filter
  const roadmapOptions = useMemo(() => {
    const map = {};
    allPrompts.forEach((p) => {
      if (p.roadmapId && p.roadmapTitle) {
        map[p.roadmapId] = {
          id: p.roadmapId,
          title: p.roadmapTitle,
          count: (map[p.roadmapId]?.count || 0) + 1
        };
      }
    });
    return Object.values(map).sort((a, b) => a.title.localeCompare(b.title));
  }, [allPrompts]);

  // Filtered prompts
  const filteredPrompts = useMemo(() => {
    return allPrompts.filter((p) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(q);
        const matchTemplate = p.template.toLowerCase().includes(q);
        const matchRoadmap = p.roadmapTitle.toLowerCase().includes(q);
        const matchTools = Array.isArray(p.recommendedTools) && p.recommendedTools.some((t) => t.toLowerCase().includes(q));
        if (!matchTitle && !matchTemplate && !matchRoadmap && !matchTools) return false;
      }

      // 2. Category Filter
      if (selectedCategory !== 'all') {
        const parent = roadmapsData.find((r) => r.id === p.roadmapId);
        if (selectedCategory === 'workflow' && !(parent?.category === 'Role & Workflow Roadmaps' || parent?.category === 'workflow')) {
          return false;
        }
        if (selectedCategory === 'tool' && !(parent?.category === 'Tool Mastery Roadmaps' || parent?.category === 'tool' || parent?.category === 'tool-specific')) {
          return false;
        }
      }

      // 3. Roadmap Filter
      if (selectedRoadmap !== 'all' && p.roadmapId !== selectedRoadmap) {
        return false;
      }

      // 4. Tool Filter
      if (selectedTool !== 'all') {
        if (!Array.isArray(p.recommendedTools) || !p.recommendedTools.includes(selectedTool)) {
          return false;
        }
      }

      return true;
    });
  }, [allPrompts, searchQuery, selectedCategory, selectedRoadmap, selectedTool]);

  // Reset display count when filters change
  useEffect(() => {
    setDisplayCount(20);
  }, [searchQuery, selectedCategory, selectedRoadmap, selectedTool]);

  const visiblePrompts = useMemo(() => {
    return filteredPrompts.slice(0, displayCount);
  }, [filteredPrompts, displayCount]);

  const hasMore = visiblePrompts.length < filteredPrompts.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 20);
  };

  const isFiltered =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'all' ||
    selectedRoadmap !== 'all' ||
    selectedTool !== 'all';

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedRoadmap('all');
    setSelectedTool('all');
    setDisplayCount(20);
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-20">
      {/* 1. Codecademy Brutalist Hero */}
      <section className="pt-6 pb-12 text-center">
        <div className="inline-flex items-center gap-1.5 bg-[#FFD300] text-[#10162F] border-2 border-[#10162F] font-mono text-xs font-bold px-3 py-1 rounded-[3px] shadow-[2px_2px_0px_0px_#10162F] mb-5 select-none">
          {allPrompts.length} PRODUCTION PROMPT BLUEPRINTS
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#10162F] dark:text-white leading-[1.1] mb-4">
          Battle-Tested AI Prompts
        </h1>
        <p className="font-sans text-base sm:text-lg text-[#10162F]/80 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Search, customize dynamic variables in real-time, and run directly in ChatGPT or Perplexity.
        </p>

        {/* Codecademy Search Bar */}
        <div className="mt-8 max-w-2xl mx-auto w-full">
          <div className="relative flex items-center w-full bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[5px_5px_0px_0px_#10162F] dark:shadow-[5px_5px_0px_0px_#FFD300] p-1.5 gap-2 transition-all">
            <Search className="h-5 w-5 text-[#10162F] dark:text-slate-300 ml-2 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search prompts by title, keywords, tools, or roadmap..."
              className="w-full py-1.5 px-2 bg-transparent text-sm sm:text-base text-[#10162F] dark:text-white placeholder:text-[#10162F]/50 dark:placeholder:text-slate-400 focus:outline-none font-sans"
              aria-label="Filter prompts inline"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="p-1 rounded text-[#10162F]/60 hover:text-[#10162F] dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
                title="Clear"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            <span className="inline-flex items-center px-2.5 py-1 text-xs font-mono font-bold rounded-[3px] bg-[#FFD300] text-[#10162F] border-2 border-[#10162F] shadow-[1px_1px_0px_0px_#10162F] shrink-0 select-none">
              {shortcutBadge}
            </span>
          </div>
        </div>
      </section>

      {/* 2. Multi-Faceted Filter & Controls Surface */}
      <section className="cc-card mb-10 p-5 sm:p-6 space-y-4">
        {/* Top Controls Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 font-display">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-[4px] border-2 transition-all cursor-pointer inline-flex items-center gap-2 text-xs font-bold ${
                selectedCategory === 'all'
                  ? 'border-[#10162F] bg-[#3A10E5] text-white shadow-[2px_2px_0px_0px_#10162F]'
                  : 'border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-slate-200 hover:-translate-y-0.5'
              }`}
            >
              <span>All Prompts</span>
              <span className="font-mono text-xs opacity-80">[{categoryCounts.total}]</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedCategory('workflow')}
              className={`px-3.5 py-1.5 rounded-[4px] border-2 transition-all cursor-pointer inline-flex items-center gap-2 text-xs font-bold ${
                selectedCategory === 'workflow'
                  ? 'border-[#10162F] bg-[#3A10E5] text-white shadow-[2px_2px_0px_0px_#10162F]'
                  : 'border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-slate-200 hover:-translate-y-0.5'
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              <span>Workflow</span>
              <span className="font-mono text-xs opacity-80">[{categoryCounts.workflow}]</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedCategory('tool')}
              className={`px-3.5 py-1.5 rounded-[4px] border-2 transition-all cursor-pointer inline-flex items-center gap-2 text-xs font-bold ${
                selectedCategory === 'tool'
                  ? 'border-[#10162F] bg-[#3A10E5] text-white shadow-[2px_2px_0px_0px_#10162F]'
                  : 'border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-slate-200 hover:-translate-y-0.5'
              }`}
            >
              <Wrench className="h-3.5 w-3.5" />
              <span>Tool-Specific</span>
              <span className="font-mono text-xs opacity-80">[{categoryCounts.tool}]</span>
            </button>
          </div>

          {/* Right Side Controls */}
          <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
            {/* Roadmap Select Dropdown */}
            <div className="relative flex-1 sm:w-64">
              <select
                value={selectedRoadmap}
                onChange={(e) => setSelectedRoadmap(e.target.value)}
                className="w-full appearance-none px-3.5 py-2 pr-8 text-xs font-mono font-bold rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-white focus:outline-none cursor-pointer"
              >
                <option value="all">Filter by Roadmap (All)</option>
                {roadmapOptions.map((rm) => (
                  <option key={rm.id} value={rm.id}>
                    {rm.title} ({rm.count})
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#10162F] dark:text-slate-400 pointer-events-none" />
            </div>

            {/* Reset Filters Button */}
            {isFiltered && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="cc-btn-secondary px-3 py-2 text-xs font-mono font-bold gap-1.5"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>RESET</span>
              </button>
            )}
          </div>
        </div>

        {/* Bottom Controls Row: Quick Tool Filter Pills */}
        <div className="pt-3 border-t-2 border-[#10162F]/15 dark:border-white/10">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#10162F]/60 dark:text-slate-400">
            <SlidersHorizontal className="h-3.5 w-3.5" />
            <span className="font-bold uppercase tracking-wider">
              FILTER BY TOOL:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
            <button
              type="button"
              onClick={() => setSelectedTool('all')}
              className={`px-3 py-1 rounded-[3px] border-2 transition-all cursor-pointer font-bold ${
                selectedTool === 'all'
                  ? 'border-[#10162F] bg-[#3A10E5] text-white shadow-[1px_1px_0px_0px_#10162F]'
                  : 'border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-slate-300 hover:-translate-y-0.5'
              }`}
            >
              All Tools
            </button>

            {popularTools.map(({ tool, count }) => {
              const isSelected = selectedTool === tool;
              return (
                <button
                  key={tool}
                  type="button"
                  onClick={() => setSelectedTool(isSelected ? 'all' : tool)}
                  className={`px-3 py-1 rounded-[3px] border-2 transition-all cursor-pointer inline-flex items-center gap-1.5 font-bold ${
                    isSelected
                      ? 'border-[#10162F] bg-[#3A10E5] text-white shadow-[1px_1px_0px_0px_#10162F]'
                      : 'border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-slate-300 hover:-translate-y-0.5'
                  }`}
                >
                  <span>{tool}</span>
                  <span className="text-[10px] opacity-70">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Section Divider & Live Counter */}
      <div className="border-b-2 border-[#10162F] dark:border-[#3B497E] pb-3 mb-8 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#10162F] dark:text-white">
            PROMPT TEMPLATES
          </span>
          <span className="text-[#10162F]/60 dark:text-slate-400">
            ({visiblePrompts.length} OF {filteredPrompts.length} MATCHES)
          </span>
        </div>

        {filteredPrompts.length > 0 && (
          <span className="text-[#10162F]/60 dark:text-slate-400 hidden sm:inline">
            TOTAL CATALOG: <strong className="text-[#10162F] dark:text-white font-bold">{allPrompts.length}</strong>
          </span>
        )}
      </div>

      {/* 4. Responsive Grid of Prompt Cards */}
      {visiblePrompts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {visiblePrompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={handleLoadMore}
                className="cc-btn-primary px-8 py-3 text-xs font-mono font-bold inline-flex items-center gap-2"
              >
                <span>LOAD MORE PROMPTS (+20)</span>
                <span className="text-xs opacity-75">
                  ({filteredPrompts.length - visiblePrompts.length} remaining)
                </span>
              </button>
            </div>
          )}

          {!hasMore && filteredPrompts.length > 20 && (
            <div className="mt-12 text-center">
              <span className="inline-block px-4 py-1.5 rounded-[3px] border-2 border-[#10162F] bg-[#F5EFE6] dark:bg-[#131A33] text-xs font-mono font-bold text-[#10162F] dark:text-white shadow-[1px_1px_0px_0px_#10162F]">
                ✓ All {filteredPrompts.length} matching prompts loaded
              </span>
            </div>
          )}
        </>
      ) : (
        <div className="cc-card p-12 text-center">
          <Search className="h-10 w-10 text-[#10162F]/40 dark:text-slate-500 mx-auto mb-3" />
          <h3 className="font-display font-bold text-lg text-[#10162F] dark:text-white mb-2">
            No prompt templates found
          </h3>
          <p className="text-sm text-[#10162F]/70 dark:text-slate-300 max-w-sm mx-auto mb-5 leading-relaxed font-sans">
            No prompts matched your search query or filter criteria. Try clearing some filters or searching for broader terms.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="cc-btn-secondary px-5 py-2 text-xs font-mono font-bold"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Community Roadmap Request Box */}
      <div className="mt-16">
        <RoadmapRequestBox />
      </div>
    </main>
  );
}
