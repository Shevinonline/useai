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
        <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-[2px] bg-[#008A5E] text-white border-2 border-[#10162F] uppercase shadow-[1px_1px_0px_0px_#10162F]">
          FREE
        </span>
      );
    }
    if (pricing === 'Paid') {
      return (
        <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-[2px] bg-[#FFD300] text-[#10162F] border-2 border-[#10162F] uppercase shadow-[1px_1px_0px_0px_#10162F]">
          PAID
        </span>
      );
    }
    return (
      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-[2px] bg-[#E8F2FF] dark:bg-[#1C2548] text-[#10162F] dark:text-[#FFF8F2] border-2 border-[#10162F] dark:border-[#3B497E] uppercase shadow-[1px_1px_0px_0px_#10162F]">
        FREEMIUM
      </span>
    );
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-20">
      {/* 1. Editorial Hero & Search */}
      <section className="pt-6 pb-10 text-center">
        <div className="inline-flex items-center gap-1.5 bg-[#FFD300] text-[#10162F] border-2 border-[#10162F] font-mono text-xs font-bold px-3 py-1 rounded-[4px] shadow-[2px_2px_0px_0px_#10162F] mb-4 select-none">
          <Wrench className="h-3.5 w-3.5 text-[#10162F]" />
          <span>{toolsData.length} CURATED AI TOOLS &amp; MODELS</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#10162F] dark:text-[#FFF8F2] leading-[1.15] mb-4">
          Curated AI Tools &amp; Models
        </h1>
        <p className="font-sans text-base sm:text-lg text-[#10162F]/80 dark:text-[#FFF8F2]/80 max-w-2xl mx-auto leading-relaxed">
          The essential developer tool stack: leading frontier models, code generators, UI builders, autonomous agents, and video infrastructure.
        </p>

        {/* Global Search Bar */}
        <div className="mt-8 max-w-2xl mx-auto w-full">
          <div className="relative flex items-center w-full bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[5px_5px_0px_0px_#10162F] dark:shadow-[5px_5px_0px_0px_#000000] p-2 gap-2 transition-all focus-within:shadow-[6px_6px_0px_0px_#10162F]">
            <Search className="h-5 w-5 text-[#10162F]/60 dark:text-[#FFF8F2]/60 ml-2 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools by name, description, capability, or framework..."
              className="w-full py-1.5 px-2 bg-transparent text-sm sm:text-base text-[#10162F] dark:text-[#FFF8F2] placeholder:text-[#10162F]/50 dark:placeholder:text-[#FFF8F2]/50 focus:outline-none font-sans font-medium"
              aria-label="Search tools"
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

      {/* 2. Primary Category Filter Pills */}
      <section className="mb-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const count = categoryCounts[cat] || 0;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-[4px] text-xs sm:text-sm font-display font-bold border-2 border-[#10162F] dark:border-[#3B497E] transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#FFD300] text-[#10162F] shadow-[3px_3px_0px_0px_#10162F]'
                    : 'bg-white dark:bg-[#131A33] text-[#10162F] dark:text-[#FFF8F2] shadow-[2px_2px_0px_0px_#10162F] hover:bg-[#FFF8F2] dark:hover:bg-[#1C2548]'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`font-mono text-xs px-1.5 py-0.5 rounded-[2px] font-bold ${
                    isSelected
                      ? 'bg-[#10162F] text-white'
                      : 'bg-[#10162F]/10 dark:bg-white/10 text-[#10162F] dark:text-[#FFF8F2]'
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
        <div className="p-4 rounded-[4px] bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] shadow-[4px_4px_0px_0px_#10162F] dark:shadow-[4px_4px_0px_0px_#000000] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-[11px] font-bold text-[#10162F]/60 dark:text-[#FFF8F2]/60 uppercase mr-1">
              Pricing:
            </span>
            {['All', 'Freemium', 'Free', 'Paid'].map((tier) => (
              <button
                key={tier}
                type="button"
                onClick={() => setSelectedPricing(tier)}
                className={`px-3 py-1 rounded-[4px] text-xs font-mono font-bold border-2 border-[#10162F] dark:border-[#3B497E] transition-all cursor-pointer ${
                  selectedPricing === tier
                    ? 'bg-[#10162F] text-white shadow-[2px_2px_0px_0px_#10162F] dark:bg-[#FFD300] dark:text-[#10162F]'
                    : 'bg-white dark:bg-[#131A33] text-[#10162F] dark:text-[#FFF8F2] shadow-[2px_2px_0px_0px_#10162F] hover:bg-[#FFF8F2] dark:hover:bg-[#1C2548]'
                }`}
              >
                {tier} <span className="opacity-80 font-mono text-[10px]">({pricingCounts[tier]})</span>
              </button>
            ))}
          </div>

          {isFiltered && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-xs font-bold font-mono text-[#3A10E5] dark:text-[#FFD300] hover:underline inline-flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </section>

      {/* 4. Results Header */}
      <section className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-display text-sm font-bold text-[#10162F] dark:text-[#FFF8F2]">
          <span>Showing</span>
          <span className="font-mono font-bold px-1.5 py-0.5 bg-[#FFD300] text-[#10162F] border-2 border-[#10162F] rounded-[3px]">
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
                className="group relative flex flex-col justify-between overflow-hidden text-left bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[4px_4px_0px_0px_#10162F] dark:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#10162F] transition-all duration-150"
              >
                {/* Card Top Header */}
                <div className="p-4 sm:p-5 border-b-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021]">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-[2px] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-[#FFF8F2] border-2 border-[#10162F] dark:border-[#3B497E] shadow-[1px_1px_0px_0px_#10162F]">
                        {tool.category || 'AI Tool'}
                      </span>
                      {renderPricingBadge(tool.pricing)}
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleToolBookmark(tool)}
                      title={isSaved ? 'Remove from Saved' : 'Save Tool'}
                      aria-label={isSaved ? 'Remove from Saved' : 'Save Tool'}
                      className={`p-1.5 rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] transition-all cursor-pointer shadow-[2px_2px_0px_0px_#10162F] ${
                        isSaved
                          ? 'bg-[#FFD300] text-[#10162F]'
                          : 'bg-white dark:bg-[#131A33] text-[#10162F] dark:text-[#FFF8F2] hover:bg-[#FFF8F2]'
                      }`}
                    >
                      <Bookmark className={`h-3.5 w-3.5 ${isSaved ? 'fill-[#10162F] text-[#10162F]' : ''}`} />
                    </button>
                  </div>

                  <h3 className="font-display font-extrabold text-lg text-[#10162F] dark:text-[#FFF8F2] group-hover:text-[#3A10E5] dark:group-hover:text-[#FFD300] transition-colors">
                    {tool.name}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white dark:bg-[#131A33]">
                  <p className="font-sans text-xs sm:text-sm text-[#10162F]/80 dark:text-[#FFF8F2]/80 leading-relaxed line-clamp-3 mb-4">
                    {tool.description}
                  </p>

                  {/* Linked Roadmaps */}
                  {linkedRoadmaps.length > 0 ? (
                    <div className="pt-3 border-t-2 border-[#10162F]/15 dark:border-[#3B497E]/40 space-y-1.5">
                      <span className="font-mono text-[10px] font-bold text-[#10162F]/60 dark:text-[#FFF8F2]/60 uppercase flex items-center gap-1">
                        <Layers className="h-3 w-3" />
                        <span>Used in Roadmaps:</span>
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {linkedRoadmaps.map((r) => (
                          <Link
                            key={r.id}
                            to={`/roadmap/${r.id}`}
                            className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-[2px] bg-[#FFF8F2] dark:bg-[#0B1021] hover:bg-[#FFD300] hover:text-[#10162F] text-[#10162F] dark:text-[#FFF8F2] border-2 border-[#10162F] dark:border-[#3B497E] transition-colors truncate max-w-[200px]"
                            title={`Open ${r.title}`}
                          >
                            {r.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : Array.isArray(tool.workflows) && tool.workflows.length > 0 ? (
                    <div className="pt-3 border-t-2 border-[#10162F]/15 dark:border-[#3B497E]/40 space-y-1.5">
                      <span className="font-mono text-[10px] font-bold text-[#10162F]/60 dark:text-[#FFF8F2]/60 uppercase">
                        Workflows:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {tool.workflows.slice(0, 2).map((wf, wIdx) => (
                          <span
                            key={wIdx}
                            className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-[2px] bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-[#FFF8F2] border border-[#10162F]/40 dark:border-[#3B497E] truncate max-w-[200px]"
                          >
                            {wf}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>

                {/* Card Action Footer */}
                <div className="p-3.5 sm:p-4 border-t-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021] flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] font-bold text-[#10162F]/60 dark:text-[#FFF8F2]/60">
                    Official Release
                  </span>

                  {tool.url && (
                    <a
                      href={sanitizeExternalUrl(tool.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 text-xs font-bold font-display bg-[#3A10E5] text-white border-2 border-[#10162F] rounded-[4px] shadow-[2px_2px_0px_0px_#10162F] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F] transition-all gap-1.5"
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
          <Search className="h-10 w-10 text-[#10162F]/40 dark:text-[#FFF8F2]/40 mx-auto mb-3" />
          <h3 className="font-display font-bold text-xl text-[#10162F] dark:text-[#FFF8F2] mb-2">
            No tools match your criteria
          </h3>
          <p className="text-sm text-[#10162F]/80 dark:text-[#FFF8F2]/80 max-w-sm mx-auto mb-5 leading-relaxed font-sans">
            Try adjusting your search query, or clear your category and pricing filters to view all AI tools.
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
