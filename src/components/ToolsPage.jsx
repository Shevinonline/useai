import { useState, useMemo } from 'react';
import { toolsData } from '../data/toolsData';
import { Search, X, ExternalLink, Bookmark, Layers } from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';
import { sanitizeExternalUrl } from '../utils/validation';

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPricing, setSelectedPricing] = useState('All');
  const { isToolBookmarked, toggleToolBookmark } = useWorkspace();

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
        const matchName = tool.name.toLowerCase().includes(q);
        const matchDesc = tool.description.toLowerCase().includes(q);
        const matchWorkflows = tool.workflows.some((wf) => wf.toLowerCase().includes(q));
        if (!matchName && !matchDesc && !matchWorkflows) return false;
      }

      // 2. Pricing filter
      if (selectedPricing !== 'All' && tool.pricing !== selectedPricing) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedPricing]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedPricing('All');
  };

  const isFiltered = searchQuery.trim() !== '' || selectedPricing !== 'All';

  const renderPricingBadge = (pricing) => {
    if (pricing === 'Free') {
      return (
        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] bg-[#008A5E] text-white border-2 border-[#10162F]">
          FREE
        </span>
      );
    }
    if (pricing === 'Paid') {
      return (
        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] bg-[#FFD300] text-[#10162F] border-2 border-[#10162F]">
          PAID
        </span>
      );
    }
    return (
      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] bg-white dark:bg-[#0B1021] text-[#10162F] dark:text-white border-2 border-[#10162F] dark:border-[#3B497E]">
        FREEMIUM
      </span>
    );
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-20">
      {/* 1. Codecademy Brutalist Hero */}
      <section className="pt-6 pb-12 text-center">
        <div className="inline-flex items-center gap-1.5 bg-[#FFD300] text-[#10162F] border-2 border-[#10162F] font-mono text-xs font-bold px-3 py-1 rounded-[3px] shadow-[2px_2px_0px_0px_#10162F] mb-5 select-none">
          {toolsData.length} CURATED AI TOOLS &amp; MODELS
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#10162F] dark:text-white leading-[1.1] mb-4">
          Curated AI Tools &amp; Models
        </h1>
        <p className="font-sans text-base sm:text-lg text-[#10162F]/80 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Essential coding models, UI generators, design tools, and dev infrastructure used across our roadmaps.
        </p>

        {/* Codecademy Search Bar */}
        <div className="mt-8 max-w-2xl mx-auto w-full">
          <div className="relative flex items-center w-full bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[5px_5px_0px_0px_#10162F] dark:shadow-[5px_5px_0px_0px_#FFD300] p-1.5 gap-2 transition-all">
            <Search className="h-5 w-5 text-[#10162F] dark:text-slate-300 ml-2 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools by name, description, or capability..."
              className="w-full py-1.5 px-2 bg-transparent text-sm sm:text-base text-[#10162F] dark:text-white placeholder:text-[#10162F]/50 dark:placeholder:text-slate-400 focus:outline-none font-sans"
              aria-label="Search tools"
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

        {/* Pricing Tier Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8 font-mono text-xs">
          {['All', 'Freemium', 'Free', 'Paid'].map((tier) => {
            const count = pricingCounts[tier];
            const isActive = selectedPricing === tier;
            return (
              <button
                key={tier}
                type="button"
                onClick={() => setSelectedPricing(tier)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[4px] border-2 transition-all cursor-pointer font-bold ${
                  isActive
                    ? 'border-[#10162F] bg-[#3A10E5] text-white shadow-[2px_2px_0px_0px_#10162F]'
                    : 'border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-slate-300 hover:-translate-y-0.5'
                }`}
              >
                <span>{tier.toUpperCase()}</span>
                <span className="text-[11px] opacity-80">[{count}]</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Results Header */}
      <div className="flex items-center justify-between pb-3 mb-8 border-b-2 border-[#10162F] dark:border-[#3B497E]">
        <h2 className="font-display font-bold text-xl text-[#10162F] dark:text-white flex items-center gap-3">
          <span>{selectedPricing === 'All' ? 'All AI Tools' : `${selectedPricing} Tools`}</span>
          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] border-2 border-[#10162F] bg-[#FFD300] text-[#10162F]">
            {filteredTools.length} Tools
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

      {/* Grid of Tool Cards */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, idx) => {
            const isSaved = isToolBookmarked(tool.id || tool.name);
            return (
              <div
                key={`${tool.id || tool.name}-${idx}`}
                className="cc-card group relative flex flex-col justify-between overflow-hidden text-left"
              >
                {/* Card Top Strip */}
                <div className="border-b-2 border-[#10162F] dark:border-[#3B497E] px-4 py-3 flex items-center justify-between bg-[#F5EFE6] dark:bg-[#131A33]">
                  <h3 className="font-display font-bold text-base text-[#10162F] dark:text-white group-hover:text-[#3A10E5] dark:group-hover:text-[#FFD300] transition-colors">
                    {tool.name}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0">
                    {renderPricingBadge(tool.pricing)}
                    <button
                      type="button"
                      onClick={() => toggleToolBookmark(tool)}
                      title={isSaved ? 'Remove from Saved Tools' : 'Save Tool'}
                      aria-label={isSaved ? 'Remove from Saved Tools' : 'Save Tool'}
                      className={`cc-btn-secondary h-7 w-7 p-0 ${
                        isSaved ? 'bg-[#FFD300] text-[#10162F]' : ''
                      }`}
                    >
                      <Bookmark
                        className={`h-3.5 w-3.5 ${
                          isSaved ? 'fill-[#10162F] text-[#10162F]' : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-[#10162F]/80 dark:text-slate-300 leading-relaxed mb-5 font-sans line-clamp-3">
                    {tool.description}
                  </p>

                  {/* Workflow Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {tool.workflows.map((wf) => (
                      <span
                        key={wf}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[3px] text-xs font-mono border border-[#10162F]/30 bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-slate-300"
                      >
                        <Layers className="h-3 w-3 text-[#3A10E5] dark:text-[#FFD300] shrink-0" />
                        <span>{wf}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="border-t-2 border-[#10162F] dark:border-[#3B497E] p-3.5 bg-[#F5EFE6] dark:bg-[#131A33]">
                  <a
                    href={sanitizeExternalUrl(tool.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cc-btn-primary flex items-center justify-center gap-2 w-full py-2 text-xs font-display font-bold"
                  >
                    <span>VISIT TOOL</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="cc-card p-12 text-center">
          <Search className="h-10 w-10 text-[#10162F]/40 dark:text-slate-500 mx-auto mb-3" />
          <h3 className="font-display font-bold text-lg text-[#10162F] dark:text-white mb-2">
            No tools match your search
          </h3>
          <p className="text-sm text-[#10162F]/70 dark:text-slate-300 max-w-sm mx-auto mb-5 leading-relaxed font-sans">
            Try adjusting your search query, or clear your pricing filters to explore the entire directory.
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
    </main>
  );
}
