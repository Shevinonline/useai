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
  Sparkles,
  Filter,
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
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-20">
      {/* 1. Hero Header */}
      <section className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-app-border bg-app-surface text-xs font-semibold text-app-muted mb-4 shadow-xs font-sans">
          <Terminal className="h-3.5 w-3.5 text-brand-accent" />
          <span>Prompt Engineering System</span>
          <span className="text-app-border">•</span>
          <span className="text-brand-accent font-semibold">{allPrompts.length} Live Templates</span>
        </div>

        <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-app-text mb-3">
          330+ Battle-Tested AI Prompts &amp; System Blueprints
        </h1>

        <p className="text-base sm:text-lg text-app-muted leading-relaxed max-w-2xl mx-auto font-sans">
          Search, customize dynamic variables in real-time, and copy ready-to-run prompts across coding, design, automations, and growth.
        </p>

        {/* 2. Prominent Search Bar */}
        <div className="mt-8 max-w-xl mx-auto">
          <div className="relative flex items-center">
            <Search className="absolute left-3.5 h-4 w-4 text-app-muted pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search prompts by title, keywords, tools, or roadmap..."
              className="w-full pl-10 pr-16 py-3 text-sm rounded-lg border border-app-border bg-app-surface text-app-text placeholder:text-app-muted focus:outline-none focus:border-brand-accent transition-colors duration-150 font-sans shadow-xs"
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2 px-2 py-1 text-xs font-medium rounded text-app-muted hover:text-app-text hover:bg-app-bg cursor-pointer font-sans"
              >
                Clear
              </button>
            ) : (
              <span className="absolute right-3 px-1.5 py-0.5 text-xs rounded border border-app-border bg-app-bg text-app-muted select-none font-mono">
                ESC
              </span>
            )}
          </div>
        </div>
      </section>

      {/* 3. Multi-Faceted Filter & Controls Surface */}
      <section className="mb-8 p-4 sm:p-5 rounded-xl border border-app-border bg-app-surface/90 shadow-xs space-y-4">
        {/* Top Controls Row: Categories + Roadmap Dropdown + Reset */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-all duration-150 cursor-pointer font-sans inline-flex items-center gap-1.5 ${
                selectedCategory === 'all'
                  ? 'bg-brand-accent/15 border-brand-accent text-brand-accent shadow-2xs'
                  : 'bg-app-bg border-app-border text-app-muted hover:border-brand-accent/40 hover:text-app-text'
              }`}
            >
              <span>All Prompts</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-app-surface border border-app-border">
                {categoryCounts.total}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedCategory('workflow')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-all duration-150 cursor-pointer font-sans inline-flex items-center gap-1.5 ${
                selectedCategory === 'workflow'
                  ? 'bg-brand-accent/15 border-brand-accent text-brand-accent shadow-2xs'
                  : 'bg-app-bg border-app-border text-app-muted hover:border-brand-accent/40 hover:text-app-text'
              }`}
            >
              <Layers className="h-3 w-3" />
              <span>Workflow Prompts</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-app-surface border border-app-border">
                {categoryCounts.workflow}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedCategory('tool')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-all duration-150 cursor-pointer font-sans inline-flex items-center gap-1.5 ${
                selectedCategory === 'tool'
                  ? 'bg-brand-accent/15 border-brand-accent text-brand-accent shadow-2xs'
                  : 'bg-app-bg border-app-border text-app-muted hover:border-brand-accent/40 hover:text-app-text'
              }`}
            >
              <Wrench className="h-3 w-3" />
              <span>Tool-Specific Prompts</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-app-surface border border-app-border">
                {categoryCounts.tool}
              </span>
            </button>
          </div>

          {/* Right Side Controls: Roadmap Dropdown + Reset */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            {/* Roadmap Select Dropdown */}
            <div className="relative flex-1 sm:w-64">
              <select
                value={selectedRoadmap}
                onChange={(e) => setSelectedRoadmap(e.target.value)}
                className="w-full appearance-none px-3 py-1.5 pr-8 text-xs font-medium rounded-md border border-app-border bg-app-bg text-app-text focus:outline-none focus:border-brand-accent transition-colors duration-150 cursor-pointer font-sans"
              >
                <option value="all">Filter by Roadmap (All)</option>
                {roadmapOptions.map((rm) => (
                  <option key={rm.id} value={rm.id}>
                    {rm.title} ({rm.count})
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-app-muted pointer-events-none" />
            </div>

            {/* Reset Filters Button */}
            {isFiltered && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-md border border-brand-accent/30 bg-brand-accent/10 text-brand-accent hover:bg-brand-accent/20 transition-colors duration-150 cursor-pointer font-sans"
              >
                <RotateCcw className="h-3 w-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Bottom Controls Row: Quick Tool Filter Pills */}
        <div className="pt-2 border-t border-app-border/60">
          <div className="flex items-center gap-2 mb-2">
            <SlidersHorizontal className="h-3 w-3 text-app-muted" />
            <span className="text-[11px] font-semibold text-app-muted uppercase tracking-wider font-sans">
              Filter by Tool:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => setSelectedTool('all')}
              className={`px-2.5 py-1 text-xs rounded-md border transition-all duration-150 cursor-pointer font-sans ${
                selectedTool === 'all'
                  ? 'border-brand-accent bg-brand-accent/15 text-brand-accent font-semibold'
                  : 'border-app-border bg-app-bg text-app-muted hover:border-brand-accent/40 hover:text-app-text'
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
                  className={`px-2.5 py-1 text-xs rounded-md border transition-all duration-150 cursor-pointer font-sans inline-flex items-center gap-1 ${
                    isSelected
                      ? 'border-brand-accent bg-brand-accent/15 text-brand-accent font-semibold'
                      : 'border-app-border bg-app-bg text-app-muted hover:border-brand-accent/40 hover:text-app-text'
                  }`}
                >
                  <span>{tool}</span>
                  <span className="text-[10px] opacity-70 font-mono">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Live Counter & Active Results Bar */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-app-border">
        <div className="flex items-center gap-2">
          <span className="font-heading font-semibold text-sm sm:text-base text-app-text">
            Prompt Templates
          </span>
          <span className="text-xs font-mono text-app-muted">
            (Showing {visiblePrompts.length} of {filteredPrompts.length} matches)
          </span>
        </div>

        {filteredPrompts.length > 0 && (
          <span className="text-xs text-app-muted font-sans hidden sm:inline">
            Total Catalog: <strong className="text-app-text font-mono">{allPrompts.length}</strong>
          </span>
        )}
      </div>

      {/* 5. Responsive Grid of Prompt Cards */}
      {visiblePrompts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
            {visiblePrompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>

          {/* 6. Lazy Load / Pagination Load More Trigger */}
          {hasMore && (
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={handleLoadMore}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-app-border bg-app-surface text-app-text hover:border-brand-accent hover:text-brand-accent text-sm font-semibold transition-all duration-150 shadow-xs cursor-pointer font-sans"
              >
                <span>Load More Prompts (+20)</span>
                <span className="text-xs font-mono text-app-muted">
                  ({filteredPrompts.length - visiblePrompts.length} remaining)
                </span>
              </button>
            </div>
          )}

          {!hasMore && filteredPrompts.length > 20 && (
            <div className="mt-12 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full border border-app-border bg-app-surface text-xs font-mono text-app-muted">
                ✓ All {filteredPrompts.length} matching prompts loaded
              </span>
            </div>
          )}
        </>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 rounded-xl border border-dashed border-app-border bg-app-surface/50">
          <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-app-bg border border-app-border flex items-center justify-center text-app-muted">
            <Search className="h-4 w-4" />
          </div>
          <h3 className="font-heading font-semibold text-base text-app-text mb-1">
            No prompt templates found
          </h3>
          <p className="text-xs text-app-muted max-w-sm mx-auto mb-5 leading-relaxed font-sans">
            No prompts matched your search query or filter criteria. Try clearing some filters or searching for broader terms like &quot;coding&quot;, &quot;architecture&quot;, or &quot;Claude&quot;.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-md border border-app-border bg-app-bg hover:border-brand-accent hover:text-brand-accent transition-colors duration-150 cursor-pointer font-sans"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}

      {/* 7. Community Roadmap Request Box */}
      <div className="mt-16">
        <RoadmapRequestBox />
      </div>
    </main>
  );
}
