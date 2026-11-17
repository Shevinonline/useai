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
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
      {/* Framed Swiss Grid Hero Container */}
      <section className="border-x border-b border-zinc-300 dark:border-zinc-800 bg-white/70 dark:bg-[#121215]/70 backdrop-blur-xs mb-12 sm:mb-16">
        {/* Top Telemetry Strip */}
        <div className="border-b border-zinc-300 dark:border-zinc-800 px-4 sm:px-6 py-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 flex flex-wrap items-center justify-between gap-2 bg-[#F2F0EC]/70 dark:bg-zinc-900/40 select-none">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-zinc-900 dark:text-zinc-200">[ WORKSPACE // v2.0 ]</span>
          </div>
          <div className="hidden sm:block text-zinc-600 dark:text-zinc-400 font-medium">
            [ 32 ACTIVE TRACKS • 390+ MODULES ]
          </div>
          <div>
            <span className="font-mono text-zinc-700 dark:text-zinc-300 font-medium">[ OPEN-SOURCE MIT ]</span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="px-4 sm:px-8 py-12 sm:py-16 text-center max-w-4xl mx-auto">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.1] mb-5">
            Master AI Workflows &amp; Tools, Step by Step.
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto font-sans">
            Community-curated, step-by-step developer guides to mastering AI tools, prompt engineering, agentic coding, and generative workflows without the marketing noise.
          </p>

          {/* Tactile Inline Search Bar */}
          <div className="mt-8 sm:mt-10 max-w-2xl mx-auto w-full">
            <div className="relative flex items-center w-full rounded-[4px] border-2 border-zinc-900 dark:border-zinc-700 bg-white dark:bg-[#121215] shadow-[4px_4px_0px_0px_#18181B] dark:shadow-[4px_4px_0px_0px_#7C3AED] transition-all p-1.5 gap-2">
              {/* [ SEARCH ] Prefix */}
              <span className="font-mono text-[11px] sm:text-xs font-bold px-2.5 py-1.5 bg-zinc-900 text-white dark:bg-purple-600 rounded-[2px] shrink-0 select-none tracking-wider">
                [ SEARCH ]
              </span>

              {/* Editable Input for Inline Filtering */}
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
                placeholder="What do you want to build or master today? Filter roadmaps..."
                className="w-full py-1.5 px-1 bg-transparent text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none font-sans cursor-text"
                aria-label="Filter roadmaps inline"
              />

              {/* Right-Side Actions: Clear (✕) + Shortcut Keycap Badge */}
              <div className="flex items-center gap-1.5 pr-1 shrink-0">
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="p-1 rounded-[2px] text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                    title="Clear search (ESC)"
                    aria-label="Clear search"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openCommandPalette();
                  }}
                  className="inline-flex items-center px-2 py-1 text-[11px] font-mono font-bold rounded-[3px] border border-zinc-900 dark:border-zinc-700 bg-[#F9F8F6] dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 shadow-[1px_1px_0px_0px_#18181B] dark:shadow-none select-none cursor-pointer transition-all"
                  title={`Open Command Palette (${shortcutBadge})`}
                  aria-label={`Open Command Palette (${shortcutBadge})`}
                >
                  {shortcutBadge}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Workflow Roadmaps */}
      {filteredWorkflowRoadmaps.length > 0 && (
        <section id="roadmaps" className="mb-14">
          {/* Full-Width Swiss Architectural Section Divider */}
          <div className="border-y border-zinc-300 dark:border-zinc-800 bg-[#F2F0EC]/70 dark:bg-zinc-900/40 px-4 sm:px-6 py-3 mb-6 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="font-mono text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-wider">
                01 // WORKFLOW ROADMAPS
              </span>
              <span className="hidden sm:inline text-xs text-zinc-500 dark:text-zinc-400 font-sans">
                — End-to-End Practical Execution
              </span>
            </div>
            <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-[2px] border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
              [{filteredWorkflowRoadmaps.length} TRACKS]
            </span>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredWorkflowRoadmaps.map((roadmap) => (
              <RoadmapCard key={roadmap.id} roadmap={roadmap} compact={true} />
            ))}
          </div>
        </section>
      )}

      {/* SECTION 2: AI Role-Based Roadmaps */}
      {filteredRoleRoadmaps.length > 0 && (
        <section id="role-roadmaps" className="mb-14">
          {/* Full-Width Swiss Architectural Section Divider */}
          <div className="border-y border-zinc-300 dark:border-zinc-800 bg-[#F2F0EC]/70 dark:bg-zinc-900/40 px-4 sm:px-6 py-3 mb-6 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="font-mono text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-wider">
                02 // AI ROLE-BASED TRACKS
              </span>
              <span className="hidden sm:inline text-xs text-zinc-500 dark:text-zinc-400 font-sans">
                — Structured Career Paths
              </span>
            </div>
            <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-[2px] border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
              [{filteredRoleRoadmaps.length} TRACKS]
            </span>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredRoleRoadmaps.map((roadmap) => (
              <RoadmapCard key={roadmap.id} roadmap={roadmap} compact={true} />
            ))}
          </div>
        </section>
      )}

      {/* SECTION 3: Tool-Specific Roadmaps */}
      {filteredToolRoadmaps.length > 0 && (
        <section id="tools" className="mb-14">
          {/* Full-Width Swiss Architectural Section Divider */}
          <div className="border-y border-zinc-300 dark:border-zinc-800 bg-[#F2F0EC]/70 dark:bg-zinc-900/40 px-4 sm:px-6 py-3 mb-6 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="font-mono text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-wider">
                03 // TOOL-SPECIFIC ROADMAPS
              </span>
              <span className="hidden sm:inline text-xs text-zinc-500 dark:text-zinc-400 font-sans">
                — Deep-Dive Tool Mastery
              </span>
            </div>
            <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-[2px] border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
              [{filteredToolRoadmaps.length} TRACKS]
            </span>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredToolRoadmaps.map((roadmap) => (
              <RoadmapCard key={roadmap.id} roadmap={roadmap} compact={true} />
            ))}
          </div>
        </section>
      )}

      {/* Empty State when no roadmaps match the inline search */}
      {totalMatches === 0 && searchQuery.trim() && (
        <div className="workspace-card p-12 text-center my-8">
          <Search className="h-10 w-10 text-zinc-400 dark:text-zinc-600 mx-auto mb-3 opacity-60" />
          <h3 className="font-heading font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-1">
            No roadmaps found for &ldquo;{searchQuery}&rdquo;
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto mb-5 font-sans">
            We couldn&rsquo;t find any roadmaps matching your filter. Clear your query or press{' '}
            <kbd className="px-1.5 py-0.5 rounded-[2px] border border-zinc-300 dark:border-zinc-700 bg-[#F2F0EC] dark:bg-zinc-800 text-purple-700 dark:text-purple-300 font-mono text-xs font-semibold">
              {shortcutBadge}
            </kbd>{' '}
            to search individual steps, prompts, and tools across the entire platform.
          </p>
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="workspace-btn px-4 py-2 text-xs font-bold font-mono"
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
