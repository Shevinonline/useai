import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import roadmapsData from '../data/roadmaps.json';
import RoadmapCard from './RoadmapCard';
import RoadmapRequestBox from './RoadmapRequestBox';
import { Search, Terminal, X } from 'lucide-react';
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
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-16">
      {/* Hero Header (Humanized & Clean) */}
      <section className="text-center max-w-3xl mx-auto mb-14">
        {/* Tagline badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-app-border bg-app-surface text-xs font-medium text-app-muted mb-6 shadow-xs">
          <Terminal className="h-3.5 w-3.5 text-brand-accent" />
          <span>Curated AI Curriculum</span>
          <span className="text-app-border">•</span>
          <span className="text-brand-accent font-semibold">Free & Open</span>
        </div>

        {/* Main Title */}
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-app-text mb-4">
          AI Workflows & Tool Roadmaps
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-app-muted leading-relaxed max-w-2xl mx-auto">
          Community-curated, step-by-step developer guides to mastering AI tools, prompt engineering, agentic coding, and generative workflows without the marketing noise.
        </p>

        {/* Prominent Hero Search Bar (Inline Filter + OS-Aware Command Palette Trigger Pill) */}
        <div className="mt-8 sm:mt-10 max-w-2xl mx-auto w-full px-2 sm:px-0">
          <div className="group relative flex items-center w-full rounded-xl border border-app-border bg-app-surface/90 hover:bg-app-surface focus-within:border-brand-accent/70 focus-within:ring-2 focus-within:ring-brand-accent/20 transition-all duration-150 shadow-xs focus-within:shadow-md font-sans">
            {/* Search Icon */}
            <div className="pl-4 sm:pl-5 pr-2 pointer-events-none flex items-center justify-center text-app-muted group-focus-within:text-brand-accent transition-colors">
              <Search className="h-4 sm:h-5 w-4 sm:w-5 shrink-0" />
            </div>

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
              placeholder="What do you want to build or master today? Search roadmaps..."
              className="w-full py-3.5 sm:py-4 bg-transparent text-xs sm:text-sm text-app-text placeholder:text-app-muted focus:outline-none font-sans cursor-text"
              aria-label="Filter roadmaps inline"
            />

            {/* Right-Side Actions: Clear (✕) Button + Shortcut Badge Button */}
            <div className="flex items-center gap-2 pr-3 sm:pr-4 shrink-0">
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="p-1 rounded-md text-app-muted hover:text-app-text hover:bg-app-bg transition-colors cursor-pointer"
                  title="Clear search (ESC)"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}

              {/* OS-Aware Shortcut Badge Button (Clicking opens Command Palette modal) */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  openCommandPalette();
                }}
                className="inline-flex items-center px-2 py-1 text-xs font-mono font-medium rounded-md border border-app-border bg-app-bg text-app-muted hover:border-brand-accent/50 hover:text-brand-accent hover:bg-brand-accent/10 transition-all shadow-2xs select-none cursor-pointer"
                title={`Open Command Palette (${shortcutBadge})`}
                aria-label={`Open Command Palette (${shortcutBadge})`}
              >
                {shortcutBadge}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Workflow Roadmaps */}
      {filteredWorkflowRoadmaps.length > 0 && (
        <section id="roadmaps" className="mb-14">
          {/* Section Divider */}
          <div className="relative my-8 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-app-border"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-app-bg px-3.5 py-1 text-xs font-semibold text-app-muted border border-app-border rounded-full font-sans">
                Workflow Roadmaps ({filteredWorkflowRoadmaps.length})
              </span>
            </div>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredWorkflowRoadmaps.map((roadmap) => (
              <RoadmapCard key={roadmap.id} roadmap={roadmap} compact={true} />
            ))}
          </div>
        </section>
      )}

      {/* SECTION 2: AI Role-Based Roadmaps (Positioned 2nd in the Middle) */}
      {filteredRoleRoadmaps.length > 0 && (
        <section id="role-roadmaps" className="mb-14">
          {/* Section Divider */}
          <div className="relative my-8 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-app-border"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-app-bg px-3.5 py-1 text-xs font-semibold text-app-muted border border-app-border rounded-full font-sans">
                AI Role-Based Roadmaps ({filteredRoleRoadmaps.length})
              </span>
            </div>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRoleRoadmaps.map((roadmap) => (
              <RoadmapCard key={roadmap.id} roadmap={roadmap} compact={true} />
            ))}
          </div>
        </section>
      )}

      {/* SECTION 3: Tool-Specific Roadmaps */}
      {filteredToolRoadmaps.length > 0 && (
        <section id="tools" className="mb-14">
          {/* Section Divider */}
          <div className="relative my-8 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-app-border"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-app-bg px-3.5 py-1 text-xs font-semibold text-app-muted border border-app-border rounded-full font-sans">
                Tool-Specific Roadmaps ({filteredToolRoadmaps.length})
              </span>
            </div>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredToolRoadmaps.map((roadmap) => (
              <RoadmapCard key={roadmap.id} roadmap={roadmap} compact={true} />
            ))}
          </div>
        </section>
      )}

      {/* Empty State when no roadmaps match the inline search */}
      {totalMatches === 0 && searchQuery.trim() && (
        <div className="text-center py-16 px-4">
          <Search className="h-10 w-10 text-app-muted mx-auto mb-3 opacity-50" />
          <h3 className="font-heading font-semibold text-lg text-app-text mb-1">
            No roadmaps found for &ldquo;{searchQuery}&rdquo;
          </h3>
          <p className="text-sm text-app-muted max-w-md mx-auto mb-5 font-sans">
            We couldn&rsquo;t find any roadmaps matching your filter. Clear your query or press{' '}
            <kbd className="px-1.5 py-0.5 rounded border border-app-border bg-app-surface text-brand-accent font-mono text-xs">
              {shortcutBadge}
            </kbd>{' '}
            to search individual steps, prompts, and tools across the entire platform.
          </p>
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-accent text-white font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity cursor-pointer font-sans"
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
