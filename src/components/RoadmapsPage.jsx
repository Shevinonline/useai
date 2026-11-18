import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import roadmapsData from '../data/roadmaps.json';
import RoadmapCard from './RoadmapCard';
import RoadmapRequestBox from './RoadmapRequestBox';
import {
  Search,
  X,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import { safeJsonParse } from '../utils/validation';

function getDifficulty(roadmap) {
  if (roadmap.difficulty) {
    const d = String(roadmap.difficulty).toLowerCase();
    if (d.includes('beg') || d.includes('found')) return 'Beginner';
    if (d.includes('adv') || d.includes('expert') || d.includes('arch')) return 'Advanced';
    return 'Intermediate';
  }
  const title = String(roadmap.title || '').toLowerCase();
  const stepCount = Number(roadmap.stepCount) || 10;
  if (stepCount <= 8 || title.includes('intro') || title.includes('prompting basics') || title.includes('beginner')) {
    return 'Beginner';
  }
  if (stepCount >= 14 || title.includes('architect') || title.includes('full-stack') || title.includes('swarms') || title.includes('rag')) {
    return 'Advanced';
  }
  return 'Intermediate';
}

export default function RoadmapsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Search, category, difficulty & status filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const cat = searchParams.get('category');
    if (cat === 'workflow' || cat === 'role' || cat === 'tool') return cat;
    return 'all';
  });
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Sync category if URL search changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat === 'workflow' || cat === 'role' || cat === 'tool') {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  // Track completed steps per roadmap from localStorage
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

  // Compute difficulty counts
  const difficultyCounts = useMemo(() => {
    const beginner = roadmapsData.filter((r) => getDifficulty(r) === 'Beginner').length;
    const intermediate = roadmapsData.filter((r) => getDifficulty(r) === 'Intermediate').length;
    const advanced = roadmapsData.filter((r) => getDifficulty(r) === 'Advanced').length;
    return { all: roadmapsData.length, beginner, intermediate, advanced };
  }, []);

  // Compute status counts
  const statusCounts = useMemo(() => {
    const total = roadmapsData.length;
    const ready = roadmapsData.filter((r) => r.status === 'ready').length;
    const inProgress = roadmapsData.filter((r) => {
      const done = completedMap[r.id]?.length || 0;
      const count = Number(r.stepCount) || 10;
      return done > 0 && done < count;
    }).length;
    const completed = roadmapsData.filter((r) => {
      const done = completedMap[r.id]?.length || 0;
      const count = Number(r.stepCount) || 10;
      return done >= count;
    }).length;
    const comingSoon = roadmapsData.filter((r) => r.status === 'coming-soon').length;
    return { total, ready, inProgress, completed, comingSoon };
  }, [completedMap]);

  // Main filter pipeline
  const filteredRoadmaps = useMemo(() => {
    return roadmapsData.filter((r) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = (r?.title || '').toLowerCase().includes(q);
        const matchDesc = (r?.description || '').toLowerCase().includes(q);
        const matchCat = (r?.category || '').toLowerCase().includes(q);
        const matchTools = Array.isArray(r?.tools) && r.tools.some((t) => {
          const toolStr = typeof t === 'string' ? t : String(t?.name || t?.title || '');
          return toolStr.toLowerCase().includes(q);
        });
        if (!matchTitle && !matchDesc && !matchCat && !matchTools) return false;
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

      // 3. Difficulty Filter
      if (selectedDifficulty !== 'all') {
        const diff = getDifficulty(r).toLowerCase();
        if (diff !== selectedDifficulty.toLowerCase()) return false;
      }

      // 4. Progress / Status Filter
      if (selectedStatus === 'ready' && r.status !== 'ready') {
        return false;
      }
      if (selectedStatus === 'in-progress') {
        const done = completedMap[r.id]?.length || 0;
        const total = Number(r.stepCount) || 10;
        if (done === 0 || done >= total) return false;
      }
      if (selectedStatus === 'completed') {
        const done = completedMap[r.id]?.length || 0;
        const total = Number(r.stepCount) || 10;
        if (done < total) return false;
      }
      if (selectedStatus === 'coming-soon' && r.status !== 'coming-soon') {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty, selectedStatus, completedMap]);

  const handleCategorySelect = (categoryKey) => {
    setSelectedCategory(categoryKey);
    if (categoryKey === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryKey);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedDifficulty('all');
    setSelectedStatus('all');
    searchParams.delete('category');
    setSearchParams(searchParams, { replace: true });
  };

  const isFiltered =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'all' ||
    selectedDifficulty !== 'all' ||
    selectedStatus !== 'all';

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-20">
      {/* 1. Editorial Hero & Search */}
      <section className="pt-6 pb-10 text-center">
        <div className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono text-xs font-semibold px-3 py-1 rounded-full mb-4 select-none shadow-2xs">
          <Sparkles className="h-3 w-3 text-[#4F46E5] dark:text-[#6366F1]" />
          <span>{roadmapsData.length} TOTAL CURRICULUMS</span>
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#0F172A] dark:text-white leading-[1.15] mb-4">
          Explore AI Roadmaps
        </h1>
        <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Interactive step-by-step developer playbooks, role specializations, and tool mastery tracks with tested prompts.
        </p>

        {/* Global Search Bar */}
        <div className="mt-8 max-w-2xl mx-auto w-full">
          <div className="relative flex items-center w-full bg-white dark:bg-[#111827] border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm hover:border-slate-400 dark:hover:border-slate-600 p-2 gap-2 transition-all focus-within:border-[#4F46E5] dark:focus-within:border-[#6366F1] focus-within:ring-2 focus-within:ring-[#4F46E5]/10">
            <Search className="h-5 w-5 text-slate-400 dark:text-slate-500 ml-2 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search roadmaps by title, tool, or workflow..."
              className="w-full py-1.5 px-2 bg-transparent text-sm sm:text-base text-[#0F172A] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none font-sans"
              aria-label="Search roadmaps"
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

      {/* 2. Primary Category Navigation Tabs */}
      <section className="mb-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={() => handleCategorySelect('all')}
            className={`px-4 py-2.5 rounded-lg text-sm font-display font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              selectedCategory === 'all'
                ? 'bg-[#4F46E5] text-white shadow-xs'
                : 'bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            <span>All Roadmaps</span>
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
            onClick={() => handleCategorySelect('workflow')}
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
            onClick={() => handleCategorySelect('role')}
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
            onClick={() => handleCategorySelect('tool')}
            className={`px-4 py-2.5 rounded-lg text-sm font-display font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              selectedCategory === 'tool'
                ? 'bg-[#4F46E5] text-white shadow-xs'
                : 'bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            <span>Tool Mastery</span>
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

      {/* 3. Secondary Multi-Filter Toolbar (Difficulty & Status) */}
      <section className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xs">
          {/* Left: Filter Groups */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-sans">
            {/* Difficulty Filter */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-mono text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mr-1">
                DIFFICULTY:
              </span>
              {[
                { key: 'all', label: 'All Levels', count: difficultyCounts.all },
                { key: 'beginner', label: 'Beginner', count: difficultyCounts.beginner },
                { key: 'intermediate', label: 'Intermediate', count: difficultyCounts.intermediate },
                { key: 'advanced', label: 'Advanced', count: difficultyCounts.advanced },
              ].map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setSelectedDifficulty(item.key)}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                    selectedDifficulty === item.key
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden lg:block w-px h-5 bg-slate-200 dark:bg-slate-800" />

            {/* Status / Progress Filter */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-mono text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mr-1">
                STATUS:
              </span>
              {[
                { key: 'all', label: 'All', count: statusCounts.total },
                { key: 'ready', label: 'Available Now', count: statusCounts.ready },
                { key: 'in-progress', label: 'In Progress', count: statusCounts.inProgress },
                { key: 'completed', label: 'Completed', count: statusCounts.completed },
                { key: 'coming-soon', label: 'Coming Soon', count: statusCounts.comingSoon },
              ].map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setSelectedStatus(item.key)}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                    selectedStatus === item.key
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {item.label}
                  {item.count > 0 && item.key !== 'all' && (
                    <span className="ml-1 opacity-75 font-mono text-[10px]">({item.count})</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Reset Action if filtered */}
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
      </section>

      {/* 4. Results Header & Count */}
      <section className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-display text-sm font-semibold text-[#0F172A] dark:text-white">
          <span>Showing</span>
          <span className="font-mono font-bold text-[#4F46E5] dark:text-[#6366F1]">
            {filteredRoadmaps.length}
          </span>
          <span>of {roadmapsData.length} Roadmaps</span>
        </div>
      </section>

      {/* 5. Grid of Roadmap Cards */}
      {filteredRoadmaps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoadmaps.map((roadmap) => (
            <RoadmapCard key={roadmap.id} roadmap={roadmap} />
          ))}
        </div>
      ) : (
        <div className="cc-card p-12 text-center my-6">
          <Search className="h-10 w-10 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
          <h3 className="font-display font-bold text-lg text-[#0F172A] dark:text-white mb-2">
            No roadmaps match your criteria
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto mb-5 leading-relaxed font-sans">
            Try adjusting your search query, or clear your category, difficulty, and status filters to view all roadmaps.
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

      {/* 6. Community Roadmap Request Banner */}
      <div className="mt-16">
        <RoadmapRequestBox />
      </div>
    </main>
  );
}
