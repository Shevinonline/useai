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
        <div className="inline-flex items-center gap-1.5 bg-[#FFD300] text-[#10162F] border-2 border-[#10162F] font-mono text-xs font-bold px-3 py-1 rounded-[4px] shadow-[2px_2px_0px_0px_#10162F] mb-4 select-none">
          <Terminal className="h-3.5 w-3.5 text-[#10162F]" />
          <span>{allPrompts.length}+ PRODUCTION PROMPT BLUEPRINTS</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#10162F] dark:text-[#FFF8F2] leading-[1.15] mb-4">
          AI Prompt Directory
        </h1>
        <p className="font-sans text-base sm:text-lg text-[#10162F]/80 dark:text-[#FFF8F2]/80 max-w-2xl mx-auto leading-relaxed">
          Tested, variable-primed prompt templates extracted from our 38 production roadmaps. Customize variables, copy directly, or launch in 1-click.
        </p>

        {/* Global Search Bar */}
        <div className="mt-8 max-w-2xl mx-auto w-full">
          <div className="relative flex items-center w-full bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[5px_5px_0px_0px_#10162F] dark:shadow-[5px_5px_0px_0px_#000000] p-2 gap-2 transition-all focus-within:shadow-[6px_6px_0px_0px_#10162F]">
            <Search className="h-5 w-5 text-[#10162F]/60 dark:text-[#FFF8F2]/60 ml-2 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search prompts by title, code keywords, or tool..."
              className="w-full py-1.5 px-2 bg-transparent text-sm sm:text-base text-[#10162F] dark:text-[#FFF8F2] placeholder:text-[#10162F]/50 dark:placeholder:text-[#FFF8F2]/50 focus:outline-none font-sans font-medium"
              aria-label="Search prompts"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="p-1 rounded-[4px] text-[#10162F] dark:text-[#FFF8F2] hover:bg-[#FFD300] hover:text-[#10162F] transition-colors cursor-pointer"
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
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2.5 rounded-[4px] text-xs sm:text-sm font-display font-bold border-2 border-[#10162F] dark:border-[#3B497E] transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              selectedCategory === 'all'
                ? 'bg-[#FFD300] text-[#10162F] shadow-[3px_3px_0px_0px_#10162F]'
                : 'bg-white dark:bg-[#131A33] text-[#10162F] dark:text-[#FFF8F2] shadow-[2px_2px_0px_0px_#10162F] hover:bg-[#FFF8F2] dark:hover:bg-[#1C2548]'
            }`}
          >
            <span>All Prompts</span>
            <span
              className={`font-mono text-xs px-1.5 py-0.5 rounded-[2px] font-bold ${
                selectedCategory === 'all'
                  ? 'bg-[#10162F] text-white'
                  : 'bg-[#10162F]/10 dark:bg-white/10 text-[#10162F] dark:text-[#FFF8F2]'
              }`}
            >
              {categoryCounts.total}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('workflow')}
            className={`px-4 py-2.5 rounded-[4px] text-xs sm:text-sm font-display font-bold border-2 border-[#10162F] dark:border-[#3B497E] transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              selectedCategory === 'workflow'
                ? 'bg-[#FFD300] text-[#10162F] shadow-[3px_3px_0px_0px_#10162F]'
                : 'bg-white dark:bg-[#131A33] text-[#10162F] dark:text-[#FFF8F2] shadow-[2px_2px_0px_0px_#10162F] hover:bg-[#FFF8F2] dark:hover:bg-[#1C2548]'
            }`}
          >
            <span>Workflows</span>
            <span
              className={`font-mono text-xs px-1.5 py-0.5 rounded-[2px] font-bold ${
                selectedCategory === 'workflow'
                  ? 'bg-[#10162F] text-white'
                  : 'bg-[#10162F]/10 dark:bg-white/10 text-[#10162F] dark:text-[#FFF8F2]'
              }`}
            >
              {categoryCounts.workflow}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('role')}
            className={`px-4 py-2.5 rounded-[4px] text-xs sm:text-sm font-display font-bold border-2 border-[#10162F] dark:border-[#3B497E] transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              selectedCategory === 'role'
                ? 'bg-[#FFD300] text-[#10162F] shadow-[3px_3px_0px_0px_#10162F]'
                : 'bg-white dark:bg-[#131A33] text-[#10162F] dark:text-[#FFF8F2] shadow-[2px_2px_0px_0px_#10162F] hover:bg-[#FFF8F2] dark:hover:bg-[#1C2548]'
            }`}
          >
            <span>Role-Based Tracks</span>
            <span
              className={`font-mono text-xs px-1.5 py-0.5 rounded-[2px] font-bold ${
                selectedCategory === 'role'
                  ? 'bg-[#10162F] text-white'
                  : 'bg-[#10162F]/10 dark:bg-white/10 text-[#10162F] dark:text-[#FFF8F2]'
              }`}
            >
              {categoryCounts.role}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('tool')}
            className={`px-4 py-2.5 rounded-[4px] text-xs sm:text-sm font-display font-bold border-2 border-[#10162F] dark:border-[#3B497E] transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              selectedCategory === 'tool'
                ? 'bg-[#FFD300] text-[#10162F] shadow-[3px_3px_0px_0px_#10162F]'
                : 'bg-white dark:bg-[#131A33] text-[#10162F] dark:text-[#FFF8F2] shadow-[2px_2px_0px_0px_#10162F] hover:bg-[#FFF8F2] dark:hover:bg-[#1C2548]'
            }`}
          >
            <span>Tools</span>
            <span
              className={`font-mono text-xs px-1.5 py-0.5 rounded-[2px] font-bold ${
                selectedCategory === 'tool'
                  ? 'bg-[#10162F] text-white'
                  : 'bg-[#10162F]/10 dark:bg-white/10 text-[#10162F] dark:text-[#FFF8F2]'
              }`}
            >
              {categoryCounts.tool}
            </span>
          </button>
        </div>
      </section>

      {/* 3. Secondary Filter Toolbar (Roadmap Select & Tool Pills) */}
      <section className="mb-8 space-y-4">
        <div className="p-4 rounded-[4px] bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] shadow-[4px_4px_0px_0px_#10162F] dark:shadow-[4px_4px_0px_0px_#000000] flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Roadmap Filter Dropdown */}
          <div className="flex items-center gap-2 flex-1 max-w-md">
            <Layers className="h-4 w-4 text-[#3A10E5] dark:text-[#FFD300] shrink-0" />
            <div className="relative w-full">
              <select
                value={selectedRoadmap}
                onChange={(e) => setSelectedRoadmap(e.target.value)}
                className="w-full appearance-none px-3.5 py-2 text-xs font-bold rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-[#FFF8F2] shadow-[2px_2px_0px_0px_#10162F] focus:outline-none pr-8 cursor-pointer font-sans"
              >
                <option value="all">All Roadmaps ({allPrompts.length} Prompts)</option>
                {roadmapOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.title} ({opt.count})
                  </option>
                ))}
              </select>
              <ChevronDown className="h-4 w-4 text-[#10162F] dark:text-[#FFF8F2] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Reset Action */}
          {isFiltered && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-xs font-bold font-mono text-[#3A10E5] dark:text-[#FFD300] hover:underline inline-flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Popular Tool Filter Pills */}
        {popularTools.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="font-mono text-[11px] font-bold text-[#10162F]/60 dark:text-[#FFF8F2]/60 uppercase mr-1">
              Filter by Tool:
            </span>
            <button
              type="button"
              onClick={() => setSelectedTool('all')}
              className={`px-3 py-1 rounded-[4px] text-xs font-mono font-bold border-2 border-[#10162F] dark:border-[#3B497E] transition-all cursor-pointer ${
                selectedTool === 'all'
                  ? 'bg-[#10162F] text-white shadow-[2px_2px_0px_0px_#10162F] dark:bg-[#FFD300] dark:text-[#10162F]'
                  : 'bg-white dark:bg-[#131A33] text-[#10162F] dark:text-[#FFF8F2] shadow-[2px_2px_0px_0px_#10162F] hover:bg-[#FFF8F2] dark:hover:bg-[#1C2548]'
              }`}
            >
              All Tools
            </button>
            {popularTools.map(({ tool, count }) => (
              <button
                key={tool}
                type="button"
                onClick={() => setSelectedTool(selectedTool === tool ? 'all' : tool)}
                className={`px-3 py-1 rounded-[4px] text-xs font-mono font-bold border-2 border-[#10162F] dark:border-[#3B497E] transition-all cursor-pointer ${
                  selectedTool === tool
                    ? 'bg-[#10162F] text-white shadow-[2px_2px_0px_0px_#10162F] dark:bg-[#FFD300] dark:text-[#10162F]'
                    : 'bg-white dark:bg-[#131A33] text-[#10162F] dark:text-[#FFF8F2] shadow-[2px_2px_0px_0px_#10162F] hover:bg-[#FFF8F2] dark:hover:bg-[#1C2548]'
                }`}
              >
                {tool} <span className="opacity-80 font-mono text-[10px]">({count})</span>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* 4. Results Header */}
      <section className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-display text-sm font-bold text-[#10162F] dark:text-[#FFF8F2]">
          <span>Showing</span>
          <span className="font-mono font-bold px-1.5 py-0.5 bg-[#FFD300] text-[#10162F] border-2 border-[#10162F] rounded-[3px]">
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
                className="cc-btn-primary px-8 py-3 text-sm font-bold gap-2"
              >
                <span>Load More Prompts ({filteredPrompts.length - visiblePrompts.length} Remaining)</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="cc-card p-12 text-center my-6">
          <Search className="h-10 w-10 text-[#10162F]/40 dark:text-[#FFF8F2]/40 mx-auto mb-3" />
          <h3 className="font-display font-bold text-xl text-[#10162F] dark:text-[#FFF8F2] mb-2">
            No prompts match your criteria
          </h3>
          <p className="text-sm text-[#10162F]/80 dark:text-[#FFF8F2]/80 max-w-sm mx-auto mb-5 leading-relaxed font-sans">
            Try adjusting your search query, or clear your category, roadmap, and tool filters to view all prompts.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="cc-btn-primary px-5 py-2 text-xs font-bold gap-1.5"
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
