import { useState, useEffect, useMemo } from 'react';
import roadmapsData from '../data/roadmaps.json';
import RoadmapCard from './RoadmapCard';
import RoadmapRequestBox from './RoadmapRequestBox';
import { getCompletedStepsForRoadmap } from '../utils/badgeResolver';
import { Search, Compass, CheckCircle2, Filter, X } from 'lucide-react';

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
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20">
      {/* Framed Swiss Grid Header Container */}
      <section className="border-x border-b border-zinc-300 dark:border-zinc-800 bg-white/70 dark:bg-[#121215]/70 backdrop-blur-xs mb-10">
        <div className="border-b border-zinc-300 dark:border-zinc-800 px-4 sm:px-6 py-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 flex flex-wrap items-center justify-between gap-2 bg-[#F2F0EC]/70 dark:bg-zinc-900/40 select-none">
          <div className="flex items-center gap-2">
            <Compass className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
            <span className="font-semibold text-zinc-900 dark:text-zinc-200">[ DIRECTORY // TRACKS ]</span>
          </div>
          <span className="font-mono text-zinc-700 dark:text-zinc-300 font-medium">
            [ {roadmapsData.length} TOTAL CURRICULUMS ]
          </span>
        </div>

        <div className="px-4 sm:px-8 py-10 text-center max-w-3xl mx-auto">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-zinc-900 dark:text-zinc-100 mb-3">
            Explore AI Roadmaps
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto font-sans">
            Step-by-step interactive workflows, tool masterclasses, and engineering playbooks.
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
                placeholder="Search roadmaps by title, tool, or workflow..."
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

      {/* Two-Column Layout (Sidebar + Grid) */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left Filter Sidebar */}
        <aside className="w-full md:w-64 shrink-0 space-y-5">
          {/* Active Filter Clear Button */}
          {isFiltered && (
            <div className="flex items-center justify-between p-3 rounded-[4px] border border-zinc-900 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-xs font-mono">
              <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">FILTERS ACTIVE</span>
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs font-bold text-purple-700 dark:text-purple-400 hover:underline cursor-pointer inline-flex items-center gap-1"
              >
                <X className="h-3 w-3" />
                <span>RESET</span>
              </button>
            </div>
          )}

          {/* Group 1: Categories */}
          <div className="workspace-card p-4">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-zinc-200 dark:border-zinc-800 text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider font-mono">
              <Filter className="h-3.5 w-3.5" />
              <span>CATEGORIES</span>
            </div>
            <div className="space-y-1.5 font-mono text-xs">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-[3px] border transition-all cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'border-2 border-zinc-900 dark:border-purple-500 bg-zinc-900 text-white dark:bg-purple-600 font-bold shadow-[2px_2px_0px_0px_#18181B] dark:shadow-none'
                    : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:bg-[#F2F0EC] dark:hover:bg-zinc-800'
                }`}
              >
                <span>All Roadmaps</span>
                <span className="text-[11px] font-bold">[{categoryCounts.total}]</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory('workflow')}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-[3px] border transition-all cursor-pointer ${
                  selectedCategory === 'workflow'
                    ? 'border-2 border-zinc-900 dark:border-purple-500 bg-zinc-900 text-white dark:bg-purple-600 font-bold shadow-[2px_2px_0px_0px_#18181B] dark:shadow-none'
                    : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:bg-[#F2F0EC] dark:hover:bg-zinc-800'
                }`}
              >
                <span>Workflow Roadmaps</span>
                <span className="text-[11px] font-bold">[{categoryCounts.workflow}]</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory('role')}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-[3px] border transition-all cursor-pointer ${
                  selectedCategory === 'role'
                    ? 'border-2 border-zinc-900 dark:border-purple-500 bg-zinc-900 text-white dark:bg-purple-600 font-bold shadow-[2px_2px_0px_0px_#18181B] dark:shadow-none'
                    : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:bg-[#F2F0EC] dark:hover:bg-zinc-800'
                }`}
              >
                <span>AI Role Tracks</span>
                <span className="text-[11px] font-bold">[{categoryCounts.role}]</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory('tool')}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-[3px] border transition-all cursor-pointer ${
                  selectedCategory === 'tool'
                    ? 'border-2 border-zinc-900 dark:border-purple-500 bg-zinc-900 text-white dark:bg-purple-600 font-bold shadow-[2px_2px_0px_0px_#18181B] dark:shadow-none'
                    : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:bg-[#F2F0EC] dark:hover:bg-zinc-800'
                }`}
              >
                <span>Tool Mastery</span>
                <span className="text-[11px] font-bold">[{categoryCounts.tool}]</span>
              </button>
            </div>
          </div>

          {/* Group 2: Status Filter */}
          <div className="workspace-card p-4">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-zinc-200 dark:border-zinc-800 text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider font-mono">
              <span>STATUS</span>
            </div>
            <div className="space-y-1.5 font-mono text-xs">
              <button
                type="button"
                onClick={() => setSelectedStatus('all')}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-[3px] border transition-all cursor-pointer ${
                  selectedStatus === 'all'
                    ? 'border-2 border-zinc-900 dark:border-purple-500 bg-zinc-900 text-white dark:bg-purple-600 font-bold shadow-[2px_2px_0px_0px_#18181B] dark:shadow-none'
                    : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:bg-[#F2F0EC] dark:hover:bg-zinc-800'
                }`}
              >
                <span>All Statuses</span>
                <span className="text-[11px] font-bold">[{statusCounts.total}]</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedStatus('ready')}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-[3px] border transition-all cursor-pointer ${
                  selectedStatus === 'ready'
                    ? 'border-2 border-zinc-900 dark:border-purple-500 bg-zinc-900 text-white dark:bg-purple-600 font-bold shadow-[2px_2px_0px_0px_#18181B] dark:shadow-none'
                    : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:bg-[#F2F0EC] dark:hover:bg-zinc-800'
                }`}
              >
                <span>Available Now</span>
                <span className="text-[11px] font-bold">[{statusCounts.ready}]</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedStatus('in-progress')}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-[3px] border transition-all cursor-pointer ${
                  selectedStatus === 'in-progress'
                    ? 'border-2 border-zinc-900 dark:border-purple-500 bg-zinc-900 text-white dark:bg-purple-600 font-bold shadow-[2px_2px_0px_0px_#18181B] dark:shadow-none'
                    : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:bg-[#F2F0EC] dark:hover:bg-zinc-800'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>In Progress</span>
                </div>
                <span className="text-[11px] font-bold">[{statusCounts.inProgress}]</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedStatus('coming-soon')}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-[3px] border transition-all cursor-pointer ${
                  selectedStatus === 'coming-soon'
                    ? 'border-2 border-zinc-900 dark:border-purple-500 bg-zinc-900 text-white dark:bg-purple-600 font-bold shadow-[2px_2px_0px_0px_#18181B] dark:shadow-none'
                    : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:bg-[#F2F0EC] dark:hover:bg-zinc-800'
                }`}
              >
                <span>Coming Soon</span>
                <span className="text-[11px] font-bold">[{statusCounts.comingSoon}]</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Right Content Area */}
        <section className="flex-1 w-full">
          {/* Active Filter Heading */}
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-zinc-300 dark:border-zinc-800">
            <h2 className="font-heading font-bold text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <span>{getHeadingLabel()}</span>
              <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-[2px] border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300">
                [{filteredRoadmaps.length} TRACKS]
              </span>
            </h2>
            {isFiltered && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="workspace-btn px-2.5 py-1 text-xs font-mono font-medium"
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
                    <div className="border-y border-zinc-300 dark:border-zinc-800 bg-[#F2F0EC]/70 dark:bg-zinc-900/40 px-4 py-2.5 mb-5 flex items-center justify-between font-mono">
                      <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 tracking-wider">
                        01 // WORKFLOW ROADMAPS
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-[2px] border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
                        [{workflowFiltered.length}]
                      </span>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                      {workflowFiltered.map((roadmap) => (
                        <RoadmapCard key={roadmap.id} roadmap={roadmap} />
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. AI Role-Based Roadmaps */}
                {roleFiltered.length > 0 && (
                  <div>
                    <div className="border-y border-zinc-300 dark:border-zinc-800 bg-[#F2F0EC]/70 dark:bg-zinc-900/40 px-4 py-2.5 mb-5 flex items-center justify-between font-mono">
                      <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 tracking-wider">
                        02 // AI ROLE-BASED TRACKS
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-[2px] border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
                        [{roleFiltered.length}]
                      </span>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                      {roleFiltered.map((roadmap) => (
                        <RoadmapCard key={roadmap.id} roadmap={roadmap} />
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Tool-Specific Roadmaps */}
                {toolFiltered.length > 0 && (
                  <div>
                    <div className="border-y border-zinc-300 dark:border-zinc-800 bg-[#F2F0EC]/70 dark:bg-zinc-900/40 px-4 py-2.5 mb-5 flex items-center justify-between font-mono">
                      <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 tracking-wider">
                        03 // TOOL-SPECIFIC ROADMAPS
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-[2px] border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
                        [{toolFiltered.length}]
                      </span>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                      {toolFiltered.map((roadmap) => (
                        <RoadmapCard key={roadmap.id} roadmap={roadmap} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {filteredRoadmaps.map((roadmap) => (
                  <RoadmapCard key={roadmap.id} roadmap={roadmap} />
                ))}
              </div>
            )
          ) : (
            <div className="workspace-card p-12 text-center">
              <Search className="h-10 w-10 text-zinc-400 mx-auto mb-3" />
              <h3 className="font-heading font-bold text-base text-zinc-900 dark:text-zinc-100 mb-1">
                No roadmaps match your criteria
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto mb-5 leading-relaxed font-sans">
                Try adjusting your search query, or clear your category and status filters to view all roadmaps.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="workspace-btn px-4 py-2 text-xs font-mono font-bold"
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
