import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import roadmapsData from '../data/roadmaps.json';
import RoadmapCard from './RoadmapCard';
import RoadmapRequestBox from './RoadmapRequestBox';
import { Search, X } from 'lucide-react';
import { useCommandPalette } from '../context/CommandPaletteContext';
import { getShortcutBadge } from '../utils/osDetector';

export default function Home() {
  const { openCommandPalette } = useCommandPalette();
  const location = useLocation();
  const shortcutBadge = getShortcutBadge();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (location.hash === '#request-roadmap') {
      const timer = setTimeout(() => {
        const el = document.getElementById('request-roadmap');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  // Group roadmaps by category
  const workflowRoadmaps = useMemo(
    () => roadmapsData.filter((r) => r.category === 'Role & Workflow Roadmaps' || r.category === 'workflow'),
    []
  );

  const roleRoadmaps = useMemo(
    () => roadmapsData.filter((r) => r.category === 'AI Role-Based Roadmaps' || r.category === 'role'),
    []
  );

  const toolRoadmaps = useMemo(
    () => roadmapsData.filter((r) => r.category === 'Tool Mastery Roadmaps' || r.category === 'tool' || r.category === 'tool-specific'),
    []
  );

  // Safe inline roadmap filtering helper
  const filterRoadmaps = (list, query) => {
    const q = String(query || '').trim().toLowerCase();
    if (!q) return list;
    return list.filter((r) => {
      const title = String(r?.title || '').toLowerCase();
      const description = String(r?.description || '').toLowerCase();
      const category = String(r?.category || '').toLowerCase();
      const toolsMatch = Array.isArray(r?.tools) && r.tools.some((t) => {
        const toolStr = typeof t === 'string' ? t : String(t?.name || t?.title || '');
        return toolStr.toLowerCase().includes(q);
      });
      return title.includes(q) || description.includes(q) || category.includes(q) || toolsMatch;
    });
  };

  const filteredWorkflowRoadmaps = useMemo(
    () => filterRoadmaps(workflowRoadmaps, searchQuery),
    [workflowRoadmaps, searchQuery]
  );

  const filteredRoleRoadmaps = useMemo(
    () => filterRoadmaps(roleRoadmaps, searchQuery),
    [roleRoadmaps, searchQuery]
  );

  const filteredToolRoadmaps = useMemo(
    () => filterRoadmaps(toolRoadmaps, searchQuery),
    [toolRoadmaps, searchQuery]
  );

  const totalMatches =
    filteredWorkflowRoadmaps.length +
    filteredRoleRoadmaps.length +
    filteredToolRoadmaps.length;

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
      {/* Pure Codecademy Modern Brutalist Hero */}
      <section className="pt-14 pb-14 text-center">
        {/* Yellow Pill Badge */}
        <div className="inline-flex items-center gap-1.5 bg-[#FFD300] text-[#10162F] border-2 border-[#10162F] font-mono text-xs font-bold px-3 py-1 rounded-[3px] shadow-[2px_2px_0px_0px_#10162F] mb-6 select-none">
          OPEN-SOURCE AI LEARNING WORKSPACE
        </div>

        {/* Space Grotesk Headline */}
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#10162F] dark:text-white leading-[1.1] mb-5">
          Master AI Workflows &amp; Tools, Step by Step.
        </h1>

        {/* Plus Jakarta Sans Subtitle */}
        <p className="font-sans text-base sm:text-lg text-[#10162F]/80 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Community-curated, step-by-step developer guides to mastering AI tools, prompt engineering, agentic coding, and generative workflows without the marketing noise.
        </p>

        {/* Codecademy Search Bar */}
        <div className="mt-8 sm:mt-10 max-w-2xl mx-auto w-full">
          <div className="relative flex items-center w-full bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[5px_5px_0px_0px_#10162F] dark:shadow-[5px_5px_0px_0px_#FFD300] p-1.5 gap-2 transition-all">
            <Search className="h-5 w-5 text-[#10162F] dark:text-slate-300 ml-2 shrink-0" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  setSearchQuery('');
                  e.currentTarget.blur();
                }
              }}
              placeholder="What do you want to master today? Filter roadmaps..."
              className="w-full py-1.5 px-2 bg-transparent text-sm sm:text-base text-[#10162F] dark:text-white placeholder:text-[#10162F]/50 dark:placeholder:text-slate-400 focus:outline-none font-sans cursor-text"
              aria-label="Filter roadmaps inline"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="p-1 rounded text-[#10162F]/60 hover:text-[#10162F] dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
                title="Clear search (ESC)"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                openCommandPalette();
              }}
              className="inline-flex items-center px-2.5 py-1 text-xs font-mono font-bold rounded-[3px] bg-[#FFD300] text-[#10162F] border-2 border-[#10162F] shadow-[2px_2px_0px_0px_#10162F] shrink-0 cursor-pointer active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
              title={`Open Command Palette (${shortcutBadge})`}
              aria-label={`Open Command Palette (${shortcutBadge})`}
            >
              {shortcutBadge}
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 1: Workflow Roadmaps */}
      {filteredWorkflowRoadmaps.length > 0 && (
        <section id="roadmaps" className="mb-16">
          {/* Section Header with 2px solid bottom rule */}
          <div className="border-b-2 border-[#10162F] dark:border-[#3B497E] pb-3 mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="font-display text-2xl font-bold text-[#10162F] dark:text-white">
                Workflow Roadmaps
              </h2>
              <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-[3px] bg-[#F5EFE6] dark:bg-[#131A33] text-[#10162F] dark:text-[#F8F7F4] border border-[#10162F] dark:border-[#3B497E]">
                {filteredWorkflowRoadmaps.length} Tracks
              </span>
            </div>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkflowRoadmaps.map((roadmap) => (
              <RoadmapCard key={roadmap.id} roadmap={roadmap} compact={true} />
            ))}
          </div>
        </section>
      )}

      {/* SECTION 2: AI Role-Based Roadmaps */}
      {filteredRoleRoadmaps.length > 0 && (
        <section id="role-roadmaps" className="mb-16">
          {/* Section Header with 2px solid bottom rule */}
          <div className="border-b-2 border-[#10162F] dark:border-[#3B497E] pb-3 mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="font-display text-2xl font-bold text-[#10162F] dark:text-white">
                AI Role-Based Roadmaps
              </h2>
              <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-[3px] bg-[#F5EFE6] dark:bg-[#131A33] text-[#10162F] dark:text-[#F8F7F4] border border-[#10162F] dark:border-[#3B497E]">
                {filteredRoleRoadmaps.length} Tracks
              </span>
            </div>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoleRoadmaps.map((roadmap) => (
              <RoadmapCard key={roadmap.id} roadmap={roadmap} compact={true} />
            ))}
          </div>
        </section>
      )}

      {/* SECTION 3: Tool-Specific Roadmaps */}
      {filteredToolRoadmaps.length > 0 && (
        <section id="tools" className="mb-16">
          {/* Section Header with 2px solid bottom rule */}
          <div className="border-b-2 border-[#10162F] dark:border-[#3B497E] pb-3 mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="font-display text-2xl font-bold text-[#10162F] dark:text-white">
                Tool-Specific Roadmaps
              </h2>
              <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-[3px] bg-[#F5EFE6] dark:bg-[#131A33] text-[#10162F] dark:text-[#F8F7F4] border border-[#10162F] dark:border-[#3B497E]">
                {filteredToolRoadmaps.length} Tracks
              </span>
            </div>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredToolRoadmaps.map((roadmap) => (
              <RoadmapCard key={roadmap.id} roadmap={roadmap} compact={true} />
            ))}
          </div>
        </section>
      )}

      {/* Empty State when no roadmaps match the inline search */}
      {totalMatches === 0 && searchQuery.trim() && (
        <div className="cc-card p-12 text-center my-8">
          <Search className="h-10 w-10 text-[#10162F]/40 dark:text-slate-500 mx-auto mb-3" />
          <h3 className="font-display font-bold text-xl text-[#10162F] dark:text-white mb-2">
            No roadmaps found for &ldquo;{searchQuery}&rdquo;
          </h3>
          <p className="text-sm text-[#10162F]/70 dark:text-slate-300 max-w-md mx-auto mb-5 font-sans leading-relaxed">
            We couldn&rsquo;t find any roadmaps matching your filter. Clear your query or press{' '}
            <kbd className="px-1.5 py-0.5 rounded-[3px] bg-[#FFD300] text-[#10162F] border border-[#10162F] font-mono text-xs font-bold">
              {shortcutBadge}
            </kbd>{' '}
            to search individual steps, prompts, and tools across the entire platform.
          </p>
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="cc-btn-secondary px-4 py-2 text-xs font-bold font-mono"
          >
            Clear filter
          </button>
        </div>
      )}

      {/* Community Roadmap Request Section */}
      <RoadmapRequestBox />
    </main>
  );
}
