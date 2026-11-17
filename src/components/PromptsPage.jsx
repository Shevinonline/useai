import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  getAllPrompts,
  getRoadmapFilterOptions,
  getPopularToolTags
} from '../utils/promptAggregator';
import PromptCard from './PromptCard';
import RoadmapRequestBox from './RoadmapRequestBox';
import {
  Search,
  X,
  Layers,
  Wrench,
  ChevronDown,
  RotateCcw,
  SlidersHorizontal,
  Terminal
} from 'lucide-react';

export default function PromptsPage() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState(() => {
    return new URLSearchParams(location.search).get('search') || '';
  });

  useEffect(() => {
    const q = new URLSearchParams(location.search).get('search');
    if (q !== null) {
      setSearchQuery(q);
    }
  }, [location.search]);

  const [selectedCategory, setSelectedCategory] = useState('all'); // 'all' | 'workflow' | 'tool'
  const [selectedRoadmap, setSelectedRoadmap] = useState('all'); // roadmapId or 'all'
  const [selectedTool, setSelectedTool] = useState('all'); // tool name or 'all'
  const [displayCount, setDisplayCount] = useState(20);

  // All extracted prompts
  const allPrompts = useMemo(() => getAllPrompts(), []);
  const roadmapOptions = useMemo(() => getRoadmapFilterOptions(), []);
  const popularTools = useMemo(() => getPopularToolTags(12), []);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const total = allPrompts.length;
    const workflow = allPrompts.filter((p) => p.category === 'workflow').length;
    const tool = allPrompts.filter((p) => p.category === 'tool').length;
    return { total, workflow, tool };
  }, [allPrompts]);

  // Multi-faceted filtering
  const filteredPrompts = useMemo(() => {
    return allPrompts.filter((p) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = p.title.toLowerCase().includes(q);
        const matchTemplate = p.template.toLowerCase().includes(q);
        const matchRoadmap = p.roadmapTitle.toLowerCase().includes(q);
        const matchTools = p.recommendedTools.some((t) => t.toLowerCase().includes(q));
        const matchModel = p.recommendedModel?.toLowerCase().includes(q);
        if (!matchTitle && !matchTemplate && !matchRoadmap && !matchTools && !matchModel) {
          return false;
        }
      }

      // 2. Category Filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'workflow' && p.category !== 'workflow') {
          return false;
        }
        if (selectedCategory === 'tool' && p.category !== 'tool') {
          return false;
        }
      }

      // 3. Roadmap Filter
      if (selectedRoadmap !== 'all' && p.roadmapId !== selectedRoadmap) {
        return false;
      }

      // 4. Tool Filter
      if (selectedTool !== 'all') {
        const targetTool = selectedTool.toLowerCase();
        const hasTool = p.recommendedTools.some((t) =>
          t.toLowerCase().includes(targetTool)
        );
        if (!hasTool) return false;
      }

      return true;
    });
  }, [allPrompts, searchQuery, selectedCategory, selectedRoadmap, selectedTool]);

  // Reset display count when filters change
  useEffect(() => {
    setDisplayCount(20);
  }, [searchQuery, selectedCategory, selectedRoadmap, selectedTool]);

  // Sliced prompts for pagination
  const visiblePrompts = useMemo(() => {
    return filteredPrompts.slice(0, displayCount);
  }, [filteredPrompts, displayCount]);

  const hasMore = displayCount < filteredPrompts.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 20, filteredPrompts.length));
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
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20">
      {/* 1. Framed Swiss Grid Header Container */}
      <section className="border-x border-b border-zinc-300 dark:border-zinc-800 bg-white/70 dark:bg-[#121215]/70 backdrop-blur-xs mb-10">
        <div className="border-b border-zinc-300 dark:border-zinc-800 px-4 sm:px-6 py-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 flex flex-wrap items-center justify-between gap-2 bg-[#F2F0EC]/70 dark:bg-zinc-900/40 select-none">
          <div className="flex items-center gap-2">
            <Terminal className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
            <span className="font-semibold text-zinc-900 dark:text-zinc-200">[ PROMPTS // BLUEPRINTS ]</span>
          </div>
          <span className="font-mono text-zinc-700 dark:text-zinc-300 font-medium">
            [ {allPrompts.length} LIVE TEMPLATES ]
          </span>
        </div>

        <div className="px-4 sm:px-8 py-10 text-center max-w-3xl mx-auto">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-zinc-900 dark:text-zinc-100 mb-3">
            330+ Battle-Tested AI Prompts
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto font-sans">
            Search, customize dynamic variables in real-time, and run directly in ChatGPT or Perplexity.
          </p>

          {/* Tactile Inline Search Bar */}
          <div className="mt-8 max-w-xl mx-auto w-full">
            <div className="relative flex items-center w-full rounded-[4px] border-2 border-zinc-900 dark:border-zinc-700 bg-white dark:bg-[#121215] shadow-[4px_4px_0px_0px_#18181B] dark:shadow-[4px_4px_0px_0px_#7C3AED] transition-all p-1.5 gap-2">
              <span className="font-mono text-[11px] sm:text-xs font-bold px-2.5 py-1.5 bg-zinc-900 text-white dark:bg-purple-600 rounded-[2px] shrink-0 select-none tracking-wider">
                [ SEARCH ]
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search prompts by title, keywords, tools, or roadmap..."
                className="w-full py-1.5 px-1 bg-transparent text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none font-sans"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="p-1 rounded-[2px] text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer"
                  title="Clear"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Multi-Faceted Filter & Controls Surface */}
      <section className="workspace-card mb-8 p-4 sm:p-5 space-y-4">
        {/* Top Controls Row: Categories + Roadmap Dropdown + Reset */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 font-mono text-xs">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-[3px] border transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                selectedCategory === 'all'
                  ? 'border-2 border-zinc-900 dark:border-purple-500 bg-zinc-900 text-white dark:bg-purple-600 font-bold shadow-[2px_2px_0px_0px_#18181B] dark:shadow-none'
                  : 'border-zinc-300 dark:border-zinc-700 bg-[#F9F8F6] dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:border-zinc-500'
              }`}
            >
              <span>All Prompts</span>
              <span className="text-[10px] font-bold">[{categoryCounts.total}]</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedCategory('workflow')}
              className={`px-3 py-1.5 rounded-[3px] border transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                selectedCategory === 'workflow'
                  ? 'border-2 border-zinc-900 dark:border-purple-500 bg-zinc-900 text-white dark:bg-purple-600 font-bold shadow-[2px_2px_0px_0px_#18181B] dark:shadow-none'
                  : 'border-zinc-300 dark:border-zinc-700 bg-[#F9F8F6] dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:border-zinc-500'
              }`}
            >
              <Layers className="h-3 w-3" />
              <span>Workflow</span>
              <span className="text-[10px] font-bold">[{categoryCounts.workflow}]</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedCategory('tool')}
              className={`px-3 py-1.5 rounded-[3px] border transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                selectedCategory === 'tool'
                  ? 'border-2 border-zinc-900 dark:border-purple-500 bg-zinc-900 text-white dark:bg-purple-600 font-bold shadow-[2px_2px_0px_0px_#18181B] dark:shadow-none'
                  : 'border-zinc-300 dark:border-zinc-700 bg-[#F9F8F6] dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:border-zinc-500'
              }`}
            >
              <Wrench className="h-3 w-3" />
              <span>Tool-Specific</span>
              <span className="text-[10px] font-bold">[{categoryCounts.tool}]</span>
            </button>
          </div>

          {/* Right Side Controls: Roadmap Dropdown + Reset */}
          <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
            {/* Roadmap Select Dropdown */}
            <div className="relative flex-1 sm:w-64">
              <select
                value={selectedRoadmap}
                onChange={(e) => setSelectedRoadmap(e.target.value)}
                className="w-full appearance-none px-3 py-1.5 pr-8 text-xs font-mono font-medium rounded-[3px] border border-zinc-900 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none cursor-pointer"
              >
                <option value="all">Filter by Roadmap (All)</option>
                {roadmapOptions.map((rm) => (
                  <option key={rm.id} value={rm.id}>
                    {rm.title} ({rm.count})
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500 pointer-events-none" />
            </div>

            {/* Reset Filters Button */}
            {isFiltered && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="workspace-btn px-2.5 py-1.5 text-xs font-mono font-bold gap-1"
              >
                <RotateCcw className="h-3 w-3" />
                <span>RESET</span>
              </button>
            )}
          </div>
        </div>

        {/* Bottom Controls Row: Quick Tool Filter Pills */}
        <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2 mb-2 font-mono text-[11px] text-zinc-500">
            <SlidersHorizontal className="h-3 w-3" />
            <span className="font-bold uppercase tracking-wider">
              FILTER BY TOOL:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
            <button
              type="button"
              onClick={() => setSelectedTool('all')}
              className={`px-2.5 py-1 rounded-[3px] border transition-all cursor-pointer ${
                selectedTool === 'all'
                  ? 'border-2 border-zinc-900 dark:border-purple-500 bg-zinc-900 text-white dark:bg-purple-600 font-bold shadow-[1px_1px_0px_0px_#18181B] dark:shadow-none'
                  : 'border-zinc-300 dark:border-zinc-700 bg-[#F9F8F6] dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:border-zinc-500'
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
                  className={`px-2.5 py-1 rounded-[3px] border transition-all cursor-pointer inline-flex items-center gap-1 ${
                    isSelected
                      ? 'border-2 border-zinc-900 dark:border-purple-500 bg-zinc-900 text-white dark:bg-purple-600 font-bold shadow-[1px_1px_0px_0px_#18181B] dark:shadow-none'
                      : 'border-zinc-300 dark:border-zinc-700 bg-[#F9F8F6] dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:border-zinc-500'
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

      {/* 3. Live Counter Bar */}
      <div className="flex items-center justify-between pb-3 mb-6 border-b border-zinc-300 dark:border-zinc-800 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="font-bold text-zinc-900 dark:text-zinc-100">
            PROMPT TEMPLATES
          </span>
          <span className="text-zinc-500">
            (SHOWING {visiblePrompts.length} OF {filteredPrompts.length} MATCHES)
          </span>
        </div>

        {filteredPrompts.length > 0 && (
          <span className="text-zinc-500 hidden sm:inline">
            TOTAL CATALOG: <strong className="text-zinc-900 dark:text-zinc-100 font-bold">{allPrompts.length}</strong>
          </span>
        )}
      </div>

      {/* 4. Responsive Grid of Prompt Cards */}
      {visiblePrompts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
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
                className="workspace-btn px-6 py-2.5 text-xs font-mono font-bold inline-flex items-center gap-2"
              >
                <span>LOAD MORE PROMPTS (+20)</span>
                <span className="text-[11px] opacity-75">
                  ({filteredPrompts.length - visiblePrompts.length} remaining)
                </span>
              </button>
            </div>
          )}

          {!hasMore && filteredPrompts.length > 20 && (
            <div className="mt-12 text-center">
              <span className="inline-block px-4 py-1.5 rounded-[2px] border border-zinc-300 dark:border-zinc-800 bg-[#F9F8F6] dark:bg-zinc-900 text-xs font-mono text-zinc-500">
                ✓ All {filteredPrompts.length} matching prompts loaded
              </span>
            </div>
          )}
        </>
      ) : (
        <div className="workspace-card p-12 text-center">
          <Search className="h-10 w-10 text-zinc-400 mx-auto mb-3" />
          <h3 className="font-heading font-bold text-base text-zinc-900 dark:text-zinc-100 mb-1">
            No prompt templates found
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto mb-5 leading-relaxed font-sans">
            No prompts matched your search query or filter criteria. Try clearing some filters or searching for broader terms.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="workspace-btn px-4 py-2 text-xs font-mono font-bold"
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
