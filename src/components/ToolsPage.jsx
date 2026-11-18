import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { toolsData } from '../data/toolsData';
import roadmapsData from '../data/roadmaps.json';
import RoadmapRequestBox from './RoadmapRequestBox';
import {
  Search,
  X,
  ExternalLink,
  Bookmark,
  Layers,
  Wrench,
  RotateCcw
} from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';
import { sanitizeExternalUrl } from '../utils/validation';

const CATEGORIES = [
  'All',
  'LLMs & Chat',
  'Coding & IDEs',
  'Image & Design',
  'Video & Audio',
  'Automation & Agents',
  'Research & Data'
];

function matchesCategory(tool, category) {
  if (category === 'All') return true;
  const cat = String(tool.category || '').toLowerCase();
  const name = String(tool.name || '').toLowerCase();
  const desc = String(tool.description || '').toLowerCase();
  const wf = Array.isArray(tool.workflows) ? tool.workflows.join(' ').toLowerCase() : '';
  const text = `${cat} ${name} ${desc} ${wf}`;

  if (category === 'LLMs & Chat') {
    return cat.includes('llm') || cat.includes('chat') || cat.includes('model') || text.includes('llm') || text.includes('chat') || text.includes('gpt') || text.includes('claude');
  }
  if (category === 'Coding & IDEs') {
    return cat.includes('cod') || cat.includes('ide') || cat.includes('dev') || text.includes('ide') || text.includes('coding') || text.includes('cursor') || text.includes('github copilot');
  }
  if (category === 'Image & Design') {
    return cat.includes('image') || cat.includes('design') || cat.includes('ui') || text.includes('image') || text.includes('midjourney') || text.includes('stable diffusion') || text.includes('figma');
  }
  if (category === 'Video & Audio') {
    return cat.includes('video') || cat.includes('audio') || cat.includes('voice') || text.includes('video') || text.includes('voice') || text.includes('elevenlabs') || text.includes('runway') || text.includes('suno');
  }
  if (category === 'Automation & Agents') {
    return cat.includes('auto') || cat.includes('agent') || text.includes('automation') || text.includes('agent') || text.includes('n8n') || text.includes('make.com');
  }
  if (category === 'Research & Data') {
    return cat.includes('research') || cat.includes('data') || text.includes('research') || text.includes('perplexity') || text.includes('scraping') || text.includes('crawler');
  }
  return true;
}

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPricing, setSelectedPricing] = useState('All');
  const { isToolBookmarked, toggleToolBookmark } = useWorkspace();

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const map = {};
    CATEGORIES.forEach((cat) => {
      map[cat] = toolsData.filter((t) => matchesCategory(t, cat)).length;
    });
    return map;
  }, []);

  // Compute pricing counts
  const pricingCounts = useMemo(() => {
    const total = toolsData.length;
    const freemium = toolsData.filter((t) => t.pricing === 'Freemium').length;
    const free = toolsData.filter((t) => t.pricing === 'Free').length;
    const paid = toolsData.filter((t) => t.pricing === 'Paid').length;
    return { All: total, Freemium: freemium, Free: free, Paid: paid };
  }, []);

  // Filter tools
  const filteredTools = useMemo(() => {
    return toolsData.filter((tool) => {
      // 1. Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = (tool?.name || '').toLowerCase().includes(q);
        const matchDesc = (tool?.description || '').toLowerCase().includes(q);
        const matchWorkflows = Array.isArray(tool.workflows) && tool.workflows.some((wf) => wf.toLowerCase().includes(q));
        const matchCategory = (tool?.category || '').toLowerCase().includes(q);
        if (!matchName && !matchDesc && !matchWorkflows && !matchCategory) return false;
      }

      // 2. Category filter
      if (!matchesCategory(tool, selectedCategory)) {
        return false;
      }

      // 3. Pricing filter
      if (selectedPricing !== 'All' && tool.pricing !== selectedPricing) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedPricing]);

  // Find roadmaps linked to this tool
  const getToolRoadmaps = (tool) => {
    const toolNameLower = String(tool.name || '').toLowerCase();
    const linked = roadmapsData.filter((r) => {
      const inTools = Array.isArray(r.tools) && r.tools.some((t) => {
        const tName = typeof t === 'string' ? t : t?.name || '';
        return tName.toLowerCase() === toolNameLower || toolNameLower.includes(tName.toLowerCase());
      });
      const inWorkflows = Array.isArray(tool.workflows) && tool.workflows.some((wf) => {
        return wf.toLowerCase().includes(r.title.toLowerCase()) || r.title.toLowerCase().includes(wf.toLowerCase());
      });
      return inTools || inWorkflows;
    });
    return linked.slice(0, 3);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedPricing('All');
  };

  const isFiltered = searchQuery.trim() !== '' || selectedCategory !== 'All' || selectedPricing !== 'All';

  const renderPricingBadge = (pricing) => {
    if (pricing === 'Free') {
      return (
        <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-[#10B981] dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 uppercase">
          FREE
        </span>
      );
    }
    if (pricing === 'Paid') {
      return (
        <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 uppercase">
          PAID
        </span>
      );
    }
    return (
      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 uppercase">
        FREEMIUM
      </span>
    );
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-20">
      {/* 1. Editorial Hero & Search */}
      <section className="pt-6 pb-10 text-center">
        <div className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono text-xs font-semibold px-3 py-1 rounded-full mb-4 select-none shadow-2xs">
          <Wrench className="h-3 w-3 text-[#4F46E5] dark:text-[#6366F1]" />
          <span>{toolsData.length} CURATED AI TOOLS &amp; MODELS</span>
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#0F172A] dark:text-white leading-[1.15] mb-4">
          Curated AI Tools &amp; Models
        </h1>
        <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          The essential developer tool stack: leading frontier models, code generators, UI builders, autonomous agents, and video infrastructure.
        </p>

        {/* Global Search Bar */}
        <div className="mt-8 max-w-2xl mx-auto w-full">
          <div className="relative flex items-center w-full bg-white dark:bg-[#111827] border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm hover:border-slate-400 dark:hover:border-slate-600 p-2 gap-2 transition-all focus-within:border-[#4F46E5] dark:focus-within:border-[#6366F1] focus-within:ring-2 focus-within:ring-[#4F46E5]/10">
            <Search className="h-5 w-5 text-slate-400 dark:text-slate-500 ml-2 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools by name, description, capability, or framework..."
              className="w-full py-1.5 px-2 bg-transparent text-sm sm:text-base text-[#0F172A] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none font-sans"
              aria-label="Search tools"
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

      {/* 2. Primary Category Filter Pills */}
      <section className="mb-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200 dark:border-slate-800">
          {CATEGORIES.map((cat) => {
            const count = categoryCounts[cat] || 0;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-display font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#4F46E5] text-white shadow-xs'
                    : 'bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`font-mono text-xs px-1.5 py-0.2 rounded ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Secondary Pricing Filter Toolbar */}
      <section className="mb-8">
        <div className="p-3.5 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase mr-1">
              Pricing:
            </span>
            {['All', 'Freemium', 'Free', 'Paid'].map((tier) => (
              <button
                key={tier}
                type="button"
                onClick={() => setSelectedPricing(tier)}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                  selectedPricing === tier
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {tier} ({pricingCounts[tier]})
              </button>
            ))}
          </div>

          {isFiltered && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-xs font-semibold text-[#4F46E5] dark:text-[#6366F1] hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </section>

      {/* 4. Results Header */}
      <section className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-display text-sm font-semibold text-[#0F172A] dark:text-white">
          <span>Showing</span>
          <span className="font-mono font-bold text-[#4F46E5] dark:text-[#6366F1]">
            {filteredTools.length}
          </span>
          <span>of {toolsData.length} Tools</span>
        </div>
      </section>

      {/* 5. Tool Grid */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, idx) => {
            const isSaved = isToolBookmarked(tool.id || tool.name);
            const linkedRoadmaps = getToolRoadmaps(tool);

            return (
              <div
                key={`${tool.id || tool.name}-${idx}`}
                className="cc-card group relative flex flex-col justify-between overflow-hidden text-left shadow-2xs"
              >
                {/* Card Top Header */}
                <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#111827]">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {tool.category || 'AI Tool'}
                      </span>
                      {renderPricingBadge(tool.pricing)}
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleToolBookmark(tool)}
                      title={isSaved ? 'Remove from Saved' : 'Save Tool'}
                      aria-label={isSaved ? 'Remove from Saved' : 'Save Tool'}
                      className={`p-1.5 rounded border transition-colors cursor-pointer ${
                        isSaved
                          ? 'border-amber-300 bg-amber-50 text-amber-600 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-400'
                          : 'border-transparent text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <Bookmark className={`h-3.5 w-3.5 ${isSaved ? 'fill-amber-400 text-amber-500' : ''}`} />
                    </button>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#0F172A] dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-[#6366F1] transition-colors">
                    {tool.name}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white dark:bg-[#111827]">
                  <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {tool.description}
                  </p>

                  {/* Linked Roadmaps */}
                  {linkedRoadmaps.length > 0 ? (
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                      <span className="font-mono text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase flex items-center gap-1">
                        <Layers className="h-3 w-3" />
                        <span>Used in Roadmaps:</span>
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {linkedRoadmaps.map((r) => (
                          <Link
                            key={r.id}
                            to={`/roadmap/${r.id}`}
                            className="font-mono text-[10px] px-2 py-0.5 rounded bg-indigo-50 hover:bg-indigo-100 text-[#4F46E5] dark:bg-indigo-950/40 dark:hover:bg-indigo-900/50 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 transition-colors truncate max-w-[200px]"
                            title={`Open ${r.title}`}
                          >
                            {r.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : Array.isArray(tool.workflows) && tool.workflows.length > 0 ? (
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                      <span className="font-mono text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">
                        Workflows:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {tool.workflows.slice(0, 2).map((wf, wIdx) => (
                          <span
                            key={wIdx}
                            className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 truncate max-w-[200px]"
                          >
                            {wf}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>

                {/* Card Action Footer */}
                <div className="p-3.5 sm:p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B0F17] flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] text-slate-400">
                    Official Release
                  </span>

                  {tool.url && (
                    <a
                      href={sanitizeExternalUrl(tool.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cc-btn-primary px-3 py-1.5 text-xs font-semibold gap-1.5"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="cc-card p-12 text-center my-6">
          <Search className="h-10 w-10 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
          <h3 className="font-display font-bold text-lg text-[#0F172A] dark:text-white mb-2">
            No tools match your criteria
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto mb-5 leading-relaxed font-sans">
            Try adjusting your search query, or clear your category and pricing filters to view all AI tools.
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
