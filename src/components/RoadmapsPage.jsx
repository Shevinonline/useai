import { useState, useMemo, useEffect } from 'react';
import roadmapsData from '../data/roadmaps.json';
import RoadmapCard from './RoadmapCard';
import RoadmapRequestBox from './RoadmapRequestBox';
import {
  Search,
  X,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { safeJsonParse } from '../utils/validation';

export default function RoadmapsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Completed steps tracking across all roadmaps for status count
  const [completedMap, setCompletedMap] = useState({});

  useEffect(() => {
    const syncProgress = () => {
      const map = {};
      roadmapsData.forEach((r) => {
        try {
          const raw = localStorage.getItem(`useai_progress_${r.id}`);
          const parsed = safeJsonParse(raw, []);
          map[r.id] = Array.isArray(parsed) ? parsed : [];
        } catch {
          map[r.id] = [];
        }
      });
      setCompletedMap(map);
    };

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
      if (selectedStatus === 'in-progress') {
        const stepsDone = completedMap[r.id]?.length || 0;
        if (stepsDone === 0) return false;
      }
      if (selectedStatus === 'coming-soon' && r.status !== 'coming-soon') {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedStatus, completedMap]);

  // Category subsets for 'all' mode
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

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedStatus('all');
  };

  const isFiltered = searchQuery.trim() !== '' || selectedCategory !== 'all' || selectedStatus !== 'all';

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
    <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-20">
      {/* 1. Codecademy Brutalist Hero */}
      <section className="pt-6 pb-12 text-center">
        <div className="inline-flex items-center gap-1.5 bg-[#FFD300] text-[#10162F] border-2 border-[#10162F] font-mono text-xs font-bold px-3 py-1 rounded-[3px] shadow-[2px_2px_0px_0px_#10162F] mb-5 select-none">
          {roadmapsData.length} TOTAL CURRICULUMS
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#10162F] dark:text-white leading-[1.1] mb-4">
          Explore AI Roadmaps
        </h1>
        <p className="font-sans text-base sm:text-lg text-[#10162F]/80 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Step-by-step interactive workflows, tool masterclasses, and engineering playbooks.
        </p>

        {/* Codecademy Search Bar */}
        <div className="mt-8 max-w-2xl mx-auto w-full">
          <div className="relative flex items-center w-full bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[5px_5px_0px_0px_#10162F] dark:shadow-[5px_5px_0px_0px_#FFD300] p-1.5 gap-2 transition-all">
            <Search className="h-5 w-5 text-[#10162F] dark:text-slate-300 ml-2 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search roadmaps by title, tool, or workflow..."
              className="w-full py-1.5 px-2 bg-transparent text-sm sm:text-base text-[#10162F] dark:text-white placeholder:text-[#10162F]/50 dark:placeholder:text-slate-400 focus:outline-none font-sans"
              aria-label="Search roadmaps"
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
          </div>
        </div>
      </section>

      {/* Two-Column Layout (Sidebar + Grid) */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left Filter Sidebar */}
        <aside className="w-full md:w-64 shrink-0 space-y-5">
          {/* Active Filter Clear Button */}
          {isFiltered && (
            <div className="flex items-center justify-between p-3.5 rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#131A33] shadow-[2px_2px_0px_0px_#10162F] font-mono">
              <span className="text-xs font-bold text-[#10162F] dark:text-white">FILTERS ACTIVE</span>
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs font-bold text-[#3A10E5] dark:text-[#FFD300] hover:underline cursor-pointer inline-flex items-center gap-1"
              >
                <X className="h-3.5 w-3.5" />
                <span>RESET</span>
              </button>
            </div>
          )}

          {/* Group 1: Categories */}
          <div className="cc-card p-4 space-y-2">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-[#10162F]/15 dark:border-white/10 text-xs font-bold text-[#10162F] dark:text-white uppercase tracking-wider font-mono">
              <Filter className="h-3.5 w-3.5 text-[#3A10E5] dark:text-[#FFD300]" />
              <span>CATEGORIES</span>
            </div>
            <div className="space-y-1.5 font-display text-xs">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-[3px] border-2 transition-all cursor-pointer font-bold ${
                  selectedCategory === 'all'
                    ? 'border-[#10162F] bg-[#3A10E5] text-white shadow-[2px_2px_0px_0px_#10162F]'
                    : 'border-transparent text-[#10162F] dark:text-slate-300 hover:bg-[#F5EFE6] dark:hover:bg-[#131A33]'
                }`}
              >
                <span>All Roadmaps</span>
                <span className="font-mono text-xs opacity-80">[{categoryCounts.total}]</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory('workflow')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-[3px] border-2 transition-all cursor-pointer font-bold ${
                  selectedCategory === 'workflow'
                    ? 'border-[#10162F] bg-[#3A10E5] text-white shadow-[2px_2px_0px_0px_#10162F]'
                    : 'border-transparent text-[#10162F] dark:text-slate-300 hover:bg-[#F5EFE6] dark:hover:bg-[#131A33]'
                }`}
              >
                <span>Workflow Roadmaps</span>
                <span className="font-mono text-xs opacity-80">[{categoryCounts.workflow}]</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory('role')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-[3px] border-2 transition-all cursor-pointer font-bold ${
                  selectedCategory === 'role'
                    ? 'border-[#10162F] bg-[#3A10E5] text-white shadow-[2px_2px_0px_0px_#10162F]'
                    : 'border-transparent text-[#10162F] dark:text-slate-300 hover:bg-[#F5EFE6] dark:hover:bg-[#131A33]'
                }`}
              >
                <span>AI Role Tracks</span>
                <span className="font-mono text-xs opacity-80">[{categoryCounts.role}]</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory('tool')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-[3px] border-2 transition-all cursor-pointer font-bold ${
                  selectedCategory === 'tool'
                    ? 'border-[#10162F] bg-[#3A10E5] text-white shadow-[2px_2px_0px_0px_#10162F]'
                    : 'border-transparent text-[#10162F] dark:text-slate-300 hover:bg-[#F5EFE6] dark:hover:bg-[#131A33]'
                }`}
              >
                <span>Tool Mastery</span>
                <span className="font-mono text-xs opacity-80">[{categoryCounts.tool}]</span>
              </button>
            </div>
          </div>

          {/* Group 2: Status Filter */}
          <div className="cc-card p-4 space-y-2">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-[#10162F]/15 dark:border-white/10 text-xs font-bold text-[#10162F] dark:text-white uppercase tracking-wider font-mono">
              <span>STATUS</span>
            </div>
            <div className="space-y-1.5 font-display text-xs">
              <button
                type="button"
                onClick={() => setSelectedStatus('all')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-[3px] border-2 transition-all cursor-pointer font-bold ${
                  selectedStatus === 'all'
                    ? 'border-[#10162F] bg-[#3A10E5] text-white shadow-[2px_2px_0px_0px_#10162F]'
                    : 'border-transparent text-[#10162F] dark:text-slate-300 hover:bg-[#F5EFE6] dark:hover:bg-[#131A33]'
                }`}
              >
                <span>All Statuses</span>
                <span className="font-mono text-xs opacity-80">[{statusCounts.total}]</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedStatus('ready')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-[3px] border-2 transition-all cursor-pointer font-bold ${
                  selectedStatus === 'ready'
                    ? 'border-[#10162F] bg-[#3A10E5] text-white shadow-[2px_2px_0px_0px_#10162F]'
                    : 'border-transparent text-[#10162F] dark:text-slate-300 hover:bg-[#F5EFE6] dark:hover:bg-[#131A33]'
                }`}
              >
                <span>Available Now</span>
                <span className="font-mono text-xs opacity-80">[{statusCounts.ready}]</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedStatus('in-progress')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-[3px] border-2 transition-all cursor-pointer font-bold ${
                  selectedStatus === 'in-progress'
                    ? 'border-[#10162F] bg-[#3A10E5] text-white shadow-[2px_2px_0px_0px_#10162F]'
                    : 'border-transparent text-[#10162F] dark:text-slate-300 hover:bg-[#F5EFE6] dark:hover:bg-[#131A33]'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#008A5E]" />
                  <span>In Progress</span>
                </div>
                <span className="font-mono text-xs opacity-80">[{statusCounts.inProgress}]</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedStatus('coming-soon')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-[3px] border-2 transition-all cursor-pointer font-bold ${
                  selectedStatus === 'coming-soon'
                    ? 'border-[#10162F] bg-[#3A10E5] text-white shadow-[2px_2px_0px_0px_#10162F]'
                    : 'border-transparent text-[#10162F] dark:text-slate-300 hover:bg-[#F5EFE6] dark:hover:bg-[#131A33]'
                }`}
              >
                <span>Coming Soon</span>
                <span className="font-mono text-xs opacity-80">[{statusCounts.comingSoon}]</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Right Content Area */}
        <section className="flex-1 w-full">
          {/* Active Filter Heading */}
          <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-[#10162F] dark:border-[#3B497E]">
            <h2 className="font-display font-bold text-xl text-[#10162F] dark:text-white flex items-center gap-3">
              <span>{getHeadingLabel()}</span>
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] border-2 border-[#10162F] bg-[#FFD300] text-[#10162F]">
                {filteredRoadmaps.length} Tracks
              </span>
            </h2>
            {isFiltered && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="cc-btn-secondary px-3 py-1.5 text-xs font-mono font-bold"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Grid of Roadmap Cards */}
          {filteredRoadmaps.length > 0 ? (
            selectedCategory === 'all' ? (
              <div className="space-y-12">
                {/* 1. Workflow Roadmaps */}
                {workflowFiltered.length > 0 && (
                  <div>
                    <div className="border-b-2 border-[#10162F] dark:border-[#3B497E] pb-2 mb-5 flex items-center justify-between font-display">
                      <span className="text-base font-bold text-[#10162F] dark:text-white">
                        Workflow Roadmaps
                      </span>
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] border border-[#10162F] bg-[#F5EFE6] dark:bg-[#131A33] text-[#10162F] dark:text-white">
                        {workflowFiltered.length} Tracks
                      </span>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {workflowFiltered.map((roadmap) => (
                        <RoadmapCard key={roadmap.id} roadmap={roadmap} />
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. AI Role-Based Roadmaps */}
                {roleFiltered.length > 0 && (
                  <div>
                    <div className="border-b-2 border-[#10162F] dark:border-[#3B497E] pb-2 mb-5 flex items-center justify-between font-display">
                      <span className="text-base font-bold text-[#10162F] dark:text-white">
                        AI Role-Based Tracks
                      </span>
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] border border-[#10162F] bg-[#F5EFE6] dark:bg-[#131A33] text-[#10162F] dark:text-white">
                        {roleFiltered.length} Tracks
                      </span>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {roleFiltered.map((roadmap) => (
                        <RoadmapCard key={roadmap.id} roadmap={roadmap} />
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Tool-Specific Roadmaps */}
                {toolFiltered.length > 0 && (
                  <div>
                    <div className="border-b-2 border-[#10162F] dark:border-[#3B497E] pb-2 mb-5 flex items-center justify-between font-display">
                      <span className="text-base font-bold text-[#10162F] dark:text-white">
                        Tool-Specific Roadmaps
                      </span>
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] border border-[#10162F] bg-[#F5EFE6] dark:bg-[#131A33] text-[#10162F] dark:text-white">
                        {toolFiltered.length} Tracks
                      </span>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {toolFiltered.map((roadmap) => (
                        <RoadmapCard key={roadmap.id} roadmap={roadmap} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredRoadmaps.map((roadmap) => (
                  <RoadmapCard key={roadmap.id} roadmap={roadmap} />
                ))}
              </div>
            )
          ) : (
            <div className="cc-card p-12 text-center">
              <Search className="h-10 w-10 text-[#10162F]/40 dark:text-slate-500 mx-auto mb-3" />
              <h3 className="font-display font-bold text-lg text-[#10162F] dark:text-white mb-2">
                No roadmaps match your criteria
              </h3>
              <p className="text-sm text-[#10162F]/70 dark:text-slate-300 max-w-sm mx-auto mb-5 leading-relaxed font-sans">
                Try adjusting your search query, or clear your category and status filters to view all roadmaps.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="cc-btn-secondary px-5 py-2 text-xs font-mono font-bold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>
      </div>

      <div className="mt-16">
        <RoadmapRequestBox />
      </div>
    </main>
  );
}
