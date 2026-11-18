import { useState, useMemo } from 'react';
import { getAllPrompts } from '../utils/promptAggregator';
import roadmapsData from '../data/roadmaps.json';
import PromptCard from './PromptCard';
import RoadmapRequestBox from './RoadmapRequestBox';
import {
  Search,
  X,
  ChevronDown,
  RotateCcw,
  Terminal,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function PromptsPage() {
  const allPrompts = useMemo(() => getAllPrompts(), []);

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRoadmap, setSelectedRoadmap] = useState('all');
  const [selectedTool, setSelectedTool] = useState('all');

  // Progressive loading / pagination state (20 per page)
  const [displayCount, setDisplayCount] = useState(20);

  // Reset pagination when filters change during render
  const filterKey = `${searchQuery}|${selectedCategory}|${selectedRoadmap}|${selectedTool}`;
  const [prevFilterKey, setPrevFilterKey] = useState(filterKey);
  if (prevFilterKey !== filterKey) {
    setPrevFilterKey(filterKey);
    setDisplayCount(20);
  }

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const total = allPrompts.length;
    const workflow = allPrompts.filter((p) => {
      const parent = roadmapsData.find((r) => r.id === p.roadmapId);
      return parent?.category === 'Role & Workflow Roadmaps' || parent?.category === 'workflow' || p.category === 'workflow';
    }).length;
    const role = allPrompts.filter((p) => {
      const parent = roadmapsData.find((r) => r.id === p.roadmapId);
      return parent?.category === 'AI Role-Based Roadmaps' || parent?.category === 'role' || p.category === 'role';
    }).length;
    const tool = allPrompts.filter((p) => {
      const parent = roadmapsData.find((r) => r.id === p.roadmapId);
      return parent?.category === 'Tool Mastery Roadmaps' || parent?.category === 'tool' || parent?.category === 'tool-specific' || p.category === 'tool';
    }).length;
    return { total, workflow, role, tool };
  }, [allPrompts]);

  // Unique tools for filter pills
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
        const matchTitle = (p?.title || '').toLowerCase().includes(q);
        const matchTemplate = (p?.template || '').toLowerCase().includes(q);
        const matchRoadmap = (p?.roadmapTitle || '').toLowerCase().includes(q);
        const matchTools = Array.isArray(p?.recommendedTools) && p.recommendedTools.some((t) => t.toLowerCase().includes(q));
        if (!matchTitle && !matchTemplate && !matchRoadmap && !matchTools) return false;
      }

      // 2. Category Filter
      if (selectedCategory !== 'all') {
        const parent = roadmapsData.find((r) => r.id === p.roadmapId);
        if (selectedCategory === 'workflow' && !(parent?.category === 'Role & Workflow Roadmaps' || parent?.category === 'workflow' || p.category === 'workflow')) {
          return false;
        }
        if (selectedCategory === 'role' && !(parent?.category === 'AI Role-Based Roadmaps' || parent?.category === 'role' || p.category === 'role')) {
          return false;
        }
        if (selectedCategory === 'tool' && !(parent?.category === 'Tool Mastery Roadmaps' || parent?.category === 'tool' || parent?.category === 'tool-specific' || p.category === 'tool')) {
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
      {/* 1. Editorial Hero & Search */}
      <section className="pt-6 pb-10 text-center">
        <div className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono text-xs font-semibold px-3 py-1 rounded-full mb-4 select-none shadow-2xs">
          <Terminal className="h-3 w-3 text-[#4F46E5] dark:text-[#6366F1]" />
          <span>{allPrompts.length}+ PRODUCTION PROMPT BLUEPRINTS</span>
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#0F172A] dark:text-white leading-[1.15] mb-4">
          AI Prompt Directory
        </h1>
        <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Tested, variable-primed prompt templates extracted from our 38 production roadmaps. Customize variables, copy directly, or launch in 1-click.
        </p>

        {/* Global Search Bar */}
        <div className="mt-8 max-w-2xl mx-auto w-full">
          <div className="relative flex items-center w-full bg-white dark:bg-[#111827] border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm hover:border-slate-400 dark:hover:border-slate-600 p-2 gap-2 transition-all focus-within:border-[#4F46E5] dark:focus-within:border-[#6366F1] focus-within:ring-2 focus-within:ring-[#4F46E5]/10">
            <Search className="h-5 w-5 text-slate-400 dark:text-slate-500 ml-2 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search prompts by title, code keywords, or tool..."
              className="w-full py-1.5 px-2 bg-transparent text-sm sm:text-base text-[#0F172A] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none font-sans"
              aria-label="Search prompts"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors cursor-pointer"
                title="Clear"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 2. Category Navigation Tabs */}
      <section className="mb-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2.5 rounded-lg text-sm font-display font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              selectedCategory === 'all'
                ? 'bg-[#4F46E5] text-white shadow-xs'
                : 'bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            <span>All Prompts</span>
            <span
              className={`font-mono text-xs px-1.5 py-0.2 rounded ${
                selectedCategory === 'all'
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
              }`}
            >
              {categoryCounts.total}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('workflow')}
            className={`px-4 py-2.5 rounded-lg text-sm font-display font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              selectedCategory === 'workflow'
                ? 'bg-[#4F46E5] text-white shadow-xs'
                : 'bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            <span>Workflows</span>
            <span
              className={`font-mono text-xs px-1.5 py-0.2 rounded ${
                selectedCategory === 'workflow'
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
              }`}
            >
              {categoryCounts.workflow}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('role')}
            className={`px-4 py-2.5 rounded-lg text-sm font-display font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              selectedCategory === 'role'
                ? 'bg-[#4F46E5] text-white shadow-xs'
                : 'bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            <span>Role-Based Tracks</span>
            <span
              className={`font-mono text-xs px-1.5 py-0.2 rounded ${
                selectedCategory === 'role'
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
              }`}
            >
              {categoryCounts.role}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('tool')}
            className={`px-4 py-2.5 rounded-lg text-sm font-display font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              selectedCategory === 'tool'
                ? 'bg-[#4F46E5] text-white shadow-xs'
                : 'bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            <span>Tools</span>
            <span
              className={`font-mono text-xs px-1.5 py-0.2 rounded ${
                selectedCategory === 'tool'
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
              }`}
            >
              {categoryCounts.tool}
            </span>
          </button>
        </div>
      </section>

      {/* 3. Secondary Filter Toolbar (Roadmap Select & Tool Pills) */}
      <section className="mb-8 space-y-4">
        <div className="p-4 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Roadmap Filter Dropdown */}
          <div className="flex items-center gap-2 flex-1 max-w-md">
            <Layers className="h-4 w-4 text-[#4F46E5] dark:text-[#6366F1] shrink-0" />
            <div className="relative w-full">
              <select
                value={selectedRoadmap}
                onChange={(e) => setSelectedRoadmap(e.target.value)}
                className="w-full appearance-none px-3.5 py-2 text-xs font-semibold rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#0B0F17] text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[#4F46E5] pr-8 cursor-pointer font-sans"
              >
                <option value="all">All Roadmaps ({allPrompts.length} Prompts)</option>
                {roadmapOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.title} ({opt.count})
                  </option>
                ))}
              </select>
              <ChevronDown className="h-4 w-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Reset Action */}
          {isFiltered && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-xs font-semibold text-[#4F46E5] dark:text-[#6366F1] hover:underline inline-flex items-center gap-1 self-start md:self-auto cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Popular Tool Filter Pills */}
        {popularTools.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="font-mono text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase mr-1">
              Filter by Tool:
            </span>
            <button
              type="button"
              onClick={() => setSelectedTool('all')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                selectedTool === 'all'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              All Tools
            </button>
            {popularTools.map(({ tool, count }) => (
              <button
                key={tool}
                type="button"
                onClick={() => setSelectedTool(selectedTool === tool ? 'all' : tool)}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                  selectedTool === tool
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {tool} <span className="opacity-70 font-mono text-[10px]">({count})</span>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* 4. Results Header */}
      <section className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-display text-sm font-semibold text-[#0F172A] dark:text-white">
          <span>Showing</span>
          <span className="font-mono font-bold text-[#4F46E5] dark:text-[#6366F1]">
            {filteredPrompts.length}
          </span>
          <span>of {allPrompts.length} Prompts</span>
        </div>
      </section>

      {/* 5. Prompt Grid */}
      {filteredPrompts.length > 0 ? (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visiblePrompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center pt-6">
              <button
                type="button"
                onClick={handleLoadMore}
                className="cc-btn-primary px-8 py-3 text-sm font-semibold gap-2 shadow-xs"
              >
                <span>Load More Prompts ({filteredPrompts.length - visiblePrompts.length} Remaining)</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="cc-card p-12 text-center my-6">
          <Search className="h-10 w-10 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
          <h3 className="font-display font-bold text-lg text-[#0F172A] dark:text-white mb-2">
            No prompts match your criteria
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto mb-5 leading-relaxed font-sans">
            Try adjusting your search query, or clear your category, roadmap, and tool filters to view all prompts.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="cc-btn-primary px-5 py-2 text-xs font-semibold gap-1.5"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}

      {/* Community Roadmap Request Section */}
      <div className="mt-16">
        <RoadmapRequestBox />
      </div>
    </main>
  );
}
