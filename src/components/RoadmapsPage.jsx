import { useState, useEffect, useMemo } from 'react';
import roadmapsData from '../data/roadmaps.json';
import RoadmapCard from './RoadmapCard';
import RoadmapRequestBox from './RoadmapRequestBox';
import { getCompletedStepsForRoadmap } from '../utils/badgeResolver';
import { Search, Compass, CheckCircle2, Clock, Sparkles, Filter, X, RotateCcw } from 'lucide-react';

export default function RoadmapsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all'); // 'all' | 'workflow' | 'role' | 'tool'
  const [selectedStatus, setSelectedStatus] = useState('all'); // 'all' | 'ready' | 'in-progress' | 'coming-soon'
  const [completedMap, setCompletedMap] = useState({});

  // Sync user progress from localStorage
  const syncProgress = () => {
    const map = {};
    roadmapsData.forEach((r) => {
      map[r.id] = getCompletedStepsForRoadmap(r.id);
    });
    setCompletedMap(map);
  };

  useEffect(() => {
    syncProgress();
    window.addEventListener('storage', syncProgress);
    window.addEventListener('focus', syncProgress);
    window.addEventListener('useai_progress_updated', syncProgress);
    return () => {
      window.removeEventListener('storage', syncProgress);
      window.removeEventListener('focus', syncProgress);
      window.removeEventListener('useai_progress_updated', syncProgress);
    };
  }, []);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const total = roadmapsData.length;
    const workflow = roadmapsData.filter((r) => r.category === 'Role & Workflow Roadmaps' || r.category === 'workflow').length;
    const role = roadmapsData.filter((r) => r.category === 'AI Role-Based Roadmaps' || r.category === 'role').length;
    const tool = roadmapsData.filter((r) => r.category === 'Tool Mastery Roadmaps' || r.category === 'tool' || r.category === 'tool-specific').length;
    return { total, workflow, role, tool };
  }, []);

  // Compute status counts
  const statusCounts = useMemo(() => {
    const total = roadmapsData.length;
    const ready = roadmapsData.filter((r) => r.status === 'ready').length;
    const inProgress = roadmapsData.filter((r) => (completedMap[r.id]?.length || 0) >= 1).length;
    const comingSoon = roadmapsData.filter((r) => r.status === 'coming-soon').length;
    return { total, ready, inProgress, comingSoon };
  }, [completedMap]);

  // Filter roadmaps
  const filteredRoadmaps = useMemo(() => {
    return roadmapsData.filter((r) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = r.title.toLowerCase().includes(q);
        const matchDesc = r.description.toLowerCase().includes(q);
        const matchCat = r.category.toLowerCase().includes(q);
        if (!matchTitle && !matchDesc && !matchCat) return false;
      }

      // 2. Category Filter
      if (selectedCategory === 'workflow' && !(r.category === 'Role & Workflow Roadmaps' || r.category === 'workflow')) {
        return false;
      }
      if (selectedCategory === 'role' && !(r.category === 'AI Role-Based Roadmaps' || r.category === 'role')) {
        return false;
      }
      if (selectedCategory === 'tool' && !(r.category === 'Tool Mastery Roadmaps' || r.category === 'tool' || r.category === 'tool-specific')) {
        return false;
      }

      // 3. Status Filter
      if (selectedStatus === 'ready' && r.status !== 'ready') {
        return false;
      }
      if (selectedStatus === 'in-progress' && (completedMap[r.id]?.length || 0) === 0) {
        return false;
      }
      if (selectedStatus === 'coming-soon' && r.status !== 'coming-soon') {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedStatus, completedMap]);

  // Section partitioned subsets for "all" category view
  const workflowFiltered = useMemo(
    () => filteredRoadmaps.filter((r) => r.category === 'Role & Workflow Roadmaps' || r.category === 'workflow'),
    [filteredRoadmaps]
  );
  const roleFiltered = useMemo(
    () => filteredRoadmaps.filter((r) => r.category === 'AI Role-Based Roadmaps' || r.category === 'role'),
    [filteredRoadmaps]
  );
  const toolFiltered = useMemo(
    () => filteredRoadmaps.filter((r) => r.category === 'Tool Mastery Roadmaps' || r.category === 'tool' || r.category === 'tool-specific'),
    [filteredRoadmaps]
  );

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedStatus('all');
  };

  const isFiltered = searchQuery.trim() !== '' || selectedCategory !== 'all' || selectedStatus !== 'all';

  // Construct active heading label
  const getHeadingLabel = () => {
    let catLabel = 'All Roadmaps';
    if (selectedCategory === 'workflow') catLabel = 'Workflow Roadmaps';
    if (selectedCategory === 'role') catLabel = 'AI Role-Based Roadmaps';
    if (selectedCategory === 'tool') catLabel = 'Tool-Specific Roadmaps';

    let statusLabel = '';
    if (selectedStatus === 'ready') statusLabel = 'Available Now';
    if (selectedStatus === 'in-progress') statusLabel = 'In Progress';
    if (selectedStatus === 'coming-soon') statusLabel = 'Coming Soon';

    if (statusLabel) {
      return `${catLabel} • ${statusLabel}`;
    }
    return catLabel;
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-20">
      {/* Top Header Area */}
      <section className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-app-border bg-app-surface text-xs font-semibold text-app-muted mb-4 shadow-xs font-sans">
          <Compass className="h-3.5 w-3.5 text-brand-accent" />
          <span>Interactive Directory</span>
          <span className="text-app-border">•</span>
          <span className="text-brand-accent font-semibold">{roadmapsData.length} Roadmaps</span>
        </div>

        <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-app-text mb-3">
          Explore AI Roadmaps
        </h1>

        <p className="text-base sm:text-lg text-app-muted leading-relaxed max-w-2xl mx-auto font-sans">
          Step-by-step interactive workflows, tool masterclasses, and engineering playbooks.
        </p>

        {/* Prominent Search Bar */}
        <div className="mt-8 max-w-xl mx-auto">
          <div className="relative flex items-center">
            <Search className="absolute left-3.5 h-4 w-4 text-app-muted pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search roadmaps by title, tool, or workflow..."
              className="w-full pl-10 pr-16 py-3 text-sm rounded-lg border border-app-border bg-app-surface text-app-text placeholder:text-app-muted focus:outline-none focus:border-brand-accent transition-colors duration-150 font-sans shadow-xs"
            />
            {searchQuery ? (
              <button
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

      {/* Two-Column Layout (Sidebar + Grid) */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left Filter Sidebar */}
        <aside className="w-full md:w-64 shrink-0 space-y-6">
          {/* Active Filter Clear Button (if any filter active) */}
          {isFiltered && (
            <div className="flex items-center justify-between p-2.5 rounded-lg border border-brand-accent/20 bg-brand-accent/5">
              <span className="text-xs font-medium text-app-muted font-sans">Filters Active</span>
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 text-xs font-semibold text-brand-accent hover:underline cursor-pointer font-sans"
              >
                <X className="h-3 w-3" />
                <span>Reset All</span>
              </button>
            </div>
          )}

          {/* Group 1: Categories */}
          <div className="p-4 rounded-lg border border-app-border bg-app-surface">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-app-border text-xs font-bold text-app-muted uppercase tracking-wider font-sans">
              <Filter className="h-3.5 w-3.5" />
              <span>Categories</span>
            </div>
            <div className="space-y-1 font-sans">
              {/* All Roadmaps */}
              <button
                onClick={() => setSelectedCategory('all')}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-md transition-colors duration-150 cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-brand-accent/10 border border-brand-accent/40 text-brand-accent font-semibold'
                    : 'text-app-muted hover:text-app-text hover:bg-app-bg'
                }`}
              >
                <span>All Roadmaps</span>
                <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono ${
                  selectedCategory === 'all' ? 'bg-brand-accent/20 text-brand-accent' : 'bg-app-bg text-app-muted border border-app-border'
                }`}>
                  {categoryCounts.total}
                </span>
              </button>

              {/* Workflow Roadmaps */}
              <button
                onClick={() => setSelectedCategory('workflow')}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-md transition-colors duration-150 cursor-pointer ${
                  selectedCategory === 'workflow'
                    ? 'bg-brand-accent/10 border border-brand-accent/40 text-brand-accent font-semibold'
                    : 'text-app-muted hover:text-app-text hover:bg-app-bg'
                }`}
              >
                <span>Workflow Roadmaps</span>
                <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono ${
                  selectedCategory === 'workflow' ? 'bg-brand-accent/20 text-brand-accent' : 'bg-app-bg text-app-muted border border-app-border'
                }`}>
                  {categoryCounts.workflow}
                </span>
              </button>

              {/* AI Role-Based Roadmaps */}
              <button
                onClick={() => setSelectedCategory('role')}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-md transition-colors duration-150 cursor-pointer ${
                  selectedCategory === 'role'
                    ? 'bg-brand-accent/10 border border-brand-accent/40 text-brand-accent font-semibold'
                    : 'text-app-muted hover:text-app-text hover:bg-app-bg'
                }`}
              >
                <span>AI Role-Based Roadmaps</span>
                <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono ${
                  selectedCategory === 'role' ? 'bg-brand-accent/20 text-brand-accent' : 'bg-app-bg text-app-muted border border-app-border'
                }`}>
                  {categoryCounts.role}
                </span>
              </button>

              {/* Tool-Specific Roadmaps */}
              <button
                onClick={() => setSelectedCategory('tool')}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-md transition-colors duration-150 cursor-pointer ${
                  selectedCategory === 'tool'
                    ? 'bg-brand-accent/10 border border-brand-accent/40 text-brand-accent font-semibold'
                    : 'text-app-muted hover:text-app-text hover:bg-app-bg'
                }`}
              >
                <span>Tool-Specific Roadmaps</span>
                <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono ${
                  selectedCategory === 'tool' ? 'bg-brand-accent/20 text-brand-accent' : 'bg-app-bg text-app-muted border border-app-border'
                }`}>
                  {categoryCounts.tool}
                </span>
              </button>
            </div>
          </div>

          {/* Group 2: Status Filter */}
          <div className="p-4 rounded-lg border border-app-border bg-app-surface">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-app-border text-xs font-bold text-app-muted uppercase tracking-wider font-sans">
              <Clock className="h-3.5 w-3.5" />
              <span>Status</span>
            </div>
            <div className="space-y-1 font-sans">
              {/* All Statuses */}
              <button
                onClick={() => setSelectedStatus('all')}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-md transition-colors duration-150 cursor-pointer ${
                  selectedStatus === 'all'
                    ? 'bg-brand-accent/10 border border-brand-accent/40 text-brand-accent font-semibold'
                    : 'text-app-muted hover:text-app-text hover:bg-app-bg'
                }`}
              >
                <span>All Statuses</span>
                <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono ${
                  selectedStatus === 'all' ? 'bg-brand-accent/20 text-brand-accent' : 'bg-app-bg text-app-muted border border-app-border'
                }`}>
                  {statusCounts.total}
                </span>
              </button>

              {/* Available Now */}
              <button
                onClick={() => setSelectedStatus('ready')}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-md transition-colors duration-150 cursor-pointer ${
                  selectedStatus === 'ready'
                    ? 'bg-brand-accent/10 border border-brand-accent/40 text-brand-accent font-semibold'
                    : 'text-app-muted hover:text-app-text hover:bg-app-bg'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>Available Now</span>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono ${
                  selectedStatus === 'ready' ? 'bg-brand-accent/20 text-brand-accent' : 'bg-app-bg text-app-muted border border-app-border'
                }`}>
                  {statusCounts.ready}
                </span>
              </button>

              {/* In Progress */}
              <button
                onClick={() => setSelectedStatus('in-progress')}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-md transition-colors duration-150 cursor-pointer ${
                  selectedStatus === 'in-progress'
                    ? 'bg-brand-accent/10 border border-brand-accent/40 text-brand-accent font-semibold'
                    : 'text-app-muted hover:text-app-text hover:bg-app-bg'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>In Progress</span>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono ${
                  selectedStatus === 'in-progress' ? 'bg-brand-accent/20 text-brand-accent' : 'bg-app-bg text-app-muted border border-app-border'
                }`}>
                  {statusCounts.inProgress}
                </span>
              </button>

              {/* Coming Soon */}
              <button
                onClick={() => setSelectedStatus('coming-soon')}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-md transition-colors duration-150 cursor-pointer ${
                  selectedStatus === 'coming-soon'
                    ? 'bg-brand-accent/10 border border-brand-accent/40 text-brand-accent font-semibold'
                    : 'text-app-muted hover:text-app-text hover:bg-app-bg'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-app-border shrink-0" />
                  <span>Coming Soon</span>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono ${
                  selectedStatus === 'coming-soon' ? 'bg-brand-accent/20 text-brand-accent' : 'bg-app-bg text-app-muted border border-app-border'
                }`}>
                  {statusCounts.comingSoon}
                </span>
              </button>
            </div>
          </div>
        </aside>

        {/* Right Content Area */}
        <section className="flex-1 w-full">
          {/* Active Filter Heading */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-app-border">
            <h2 className="font-heading font-semibold text-lg text-app-text">
              {getHeadingLabel()} <span className="text-app-muted font-normal text-sm font-mono">({filteredRoadmaps.length})</span>
            </h2>
            {isFiltered && (
              <button
                onClick={handleResetFilters}
                className="text-xs font-medium text-app-muted hover:text-app-text transition-colors duration-150 cursor-pointer font-sans"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Grid of Roadmap Cards: Grouped by 3 sections in order when 'all', or flat grid when single category */}
          {filteredRoadmaps.length > 0 ? (
            selectedCategory === 'all' ? (
              <div className="space-y-12">
                {/* 1. Workflow Roadmaps */}
                {workflowFiltered.length > 0 && (
                  <div>
                    <div className="relative mb-6 flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-app-border"></div>
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-app-bg px-3.5 py-1 text-xs font-semibold text-app-muted border border-app-border rounded-full font-sans">
                          Workflow Roadmaps
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {workflowFiltered.map((roadmap) => (
                        <RoadmapCard key={roadmap.id} roadmap={roadmap} />
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. AI Role-Based Roadmaps (Positioned 2nd in the Middle) */}
                {roleFiltered.length > 0 && (
                  <div>
                    <div className="relative mb-6 flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-app-border"></div>
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-app-bg px-3.5 py-1 text-xs font-semibold text-app-muted border border-app-border rounded-full font-sans">
                          AI Role-Based Roadmaps
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {roleFiltered.map((roadmap) => (
                        <RoadmapCard key={roadmap.id} roadmap={roadmap} />
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Tool-Specific Roadmaps */}
                {toolFiltered.length > 0 && (
                  <div>
                    <div className="relative mb-6 flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-app-border"></div>
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-app-bg px-3.5 py-1 text-xs font-semibold text-app-muted border border-app-border rounded-full font-sans">
                          Tool-Specific Roadmaps
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {toolFiltered.map((roadmap) => (
                        <RoadmapCard key={roadmap.id} roadmap={roadmap} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredRoadmaps.map((roadmap) => (
                  <RoadmapCard key={roadmap.id} roadmap={roadmap} />
                ))}
              </div>
            )
          ) : (
            /* Clean Empty State */
            <div className="text-center py-16 px-4 rounded-lg border border-dashed border-app-border bg-app-surface/50">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-app-bg border border-app-border flex items-center justify-center text-app-muted">
                <Search className="h-4 w-4" />
              </div>
              <h3 className="font-heading font-semibold text-base text-app-text mb-1">
                No roadmaps match your criteria
              </h3>
              <p className="text-xs text-app-muted max-w-sm mx-auto mb-5 leading-relaxed font-sans">
                Try adjusting your search query, or clear your category and status filters to view all roadmaps.
              </p>
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-md border border-app-border bg-app-bg hover:border-brand-accent hover:text-brand-accent transition-colors duration-150 cursor-pointer font-sans"
              >
                <X className="h-3.5 w-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>
          )}
        </section>
      </div>

      {/* Community Roadmap Request Section */}
      <div className="mt-16">
        <RoadmapRequestBox />
      </div>
    </main>
  );
}
