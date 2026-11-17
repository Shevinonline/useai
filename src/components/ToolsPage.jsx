import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toolsData } from '../data/toolsData';
import { Search, Wrench, ExternalLink, X, Layers, Bookmark } from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';
import { sanitizeExternalUrl } from '../utils/validation';

export default function ToolsPage() {
  const { isToolBookmarked, toggleToolBookmark } = useWorkspace();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState(() => {
    return new URLSearchParams(location.search).get('search') || '';
  });

  useEffect(() => {
    const q = new URLSearchParams(location.search).get('search');
    if (q !== null) {
      setSearchQuery(q);
    }
  }, [location.search]);

  const [selectedPricing, setSelectedPricing] = useState('All'); // 'All' | 'Freemium' | 'Free' | 'Paid'

  // Pricing counts
  const pricingCounts = useMemo(() => {
    const total = toolsData.length;
    const freemium = toolsData.filter((t) => t.pricing === 'Freemium').length;
    const free = toolsData.filter((t) => t.pricing === 'Free').length;
    const paid = toolsData.filter((t) => t.pricing === 'Paid').length;
    return {
      All: total,
      Freemium: freemium,
      Free: free,
      Paid: paid,
    };
  }, []);

  // Filtered tools
  const filteredTools = useMemo(() => {
    return toolsData.filter((tool) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = tool.name.toLowerCase().includes(q);
        const matchDesc = tool.description.toLowerCase().includes(q);
        const matchBest = (tool.bestFor || '').toLowerCase().includes(q);
        const matchWorkflows = tool.workflows.some((w) => w.toLowerCase().includes(q));
        if (!matchName && !matchDesc && !matchBest && !matchWorkflows) return false;
      }

      // 2. Pricing Filter
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
        <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-[2px] border border-emerald-500/50 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
          FREE
        </span>
      );
    }
    if (pricing === 'Paid') {
      return (
        <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-[2px] border border-amber-500/50 bg-amber-500/10 text-amber-700 dark:text-amber-400">
          PAID
        </span>
      );
    }
    return (
      <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-[2px] border border-purple-500/50 bg-purple-500/10 text-purple-700 dark:text-purple-300">
        FREEMIUM
      </span>
    );
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20">
      {/* Framed Swiss Grid Header Container */}
      <section className="border-x border-b border-zinc-300 dark:border-zinc-800 bg-white/70 dark:bg-[#121215]/70 backdrop-blur-xs mb-10">
        <div className="border-b border-zinc-300 dark:border-zinc-800 px-4 sm:px-6 py-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 flex flex-wrap items-center justify-between gap-2 bg-[#F2F0EC]/70 dark:bg-zinc-900/40 select-none">
          <div className="flex items-center gap-2">
            <Wrench className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
            <span className="font-semibold text-zinc-900 dark:text-zinc-200">[ DIRECTORY // AI TOOLS ]</span>
          </div>
          <span className="font-mono text-zinc-700 dark:text-zinc-300 font-medium">
            [ {toolsData.length} CURATED TOOLS ]
          </span>
        </div>

        <div className="px-4 sm:px-8 py-10 text-center max-w-3xl mx-auto">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-zinc-900 dark:text-zinc-100 mb-3">
            Curated AI Tools &amp; Models
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto font-sans">
            Essential coding models, UI generators, design tools, and dev infrastructure used across our roadmaps.
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
                placeholder="Search tools by name, description, or capability..."
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

          {/* Pricing Tier Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 font-mono text-xs">
            {['All', 'Freemium', 'Free', 'Paid'].map((tier) => {
              const count = pricingCounts[tier];
              const isActive = selectedPricing === tier;
              return (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setSelectedPricing(tier)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[3px] border transition-all cursor-pointer ${
                    isActive
                      ? 'border-2 border-zinc-900 dark:border-purple-500 bg-zinc-900 text-white dark:bg-purple-600 font-bold shadow-[2px_2px_0px_0px_#18181B] dark:shadow-none'
                      : 'border-zinc-300 dark:border-zinc-700 bg-[#F9F8F6] dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:border-zinc-500'
                  }`}
                >
                  <span>{tier.toUpperCase()}</span>
                  <span className="text-[10px] font-bold">[{count}]</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results Header */}
      <div className="flex items-center justify-between pb-3 mb-6 border-b border-zinc-300 dark:border-zinc-800 font-mono text-xs">
        <h2 className="font-bold text-base text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
          <span>{selectedPricing === 'All' ? 'ALL AI TOOLS' : `${selectedPricing.toUpperCase()} TOOLS`}</span>
          <span className="text-zinc-500 font-normal">[{filteredTools.length}]</span>
        </h2>
        {isFiltered && (
          <button
            type="button"
            onClick={handleResetFilters}
            className="workspace-btn px-2.5 py-1 text-xs font-bold"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Grid of Tool Cards */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTools.map((tool, idx) => {
            const isSaved = isToolBookmarked(tool.id || tool.name);
            return (
              <div
                key={`${tool.id || tool.name}-${idx}`}
                className="workspace-card group relative flex flex-col justify-between overflow-hidden text-left"
              >
                {/* Card Top Strip */}
                <div className="border-b border-zinc-200 dark:border-zinc-800 px-4 py-2 flex items-center justify-between bg-[#F9F8F6]/60 dark:bg-zinc-900/40">
                  <h3 className="font-heading font-bold text-base text-zinc-900 dark:text-zinc-100 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                    {tool.name}
                  </h3>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {renderPricingBadge(tool.pricing)}
                    <button
                      type="button"
                      onClick={() => toggleToolBookmark(tool)}
                      title={isSaved ? 'Remove from Saved Tools' : 'Save Tool'}
                      aria-label={isSaved ? 'Remove from Saved Tools' : 'Save Tool'}
                      className="workspace-btn h-6 px-1.5 text-xs"
                    >
                      <Bookmark
                        className={`h-3 w-3 ${
                          isSaved ? 'fill-purple-600 text-purple-600' : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 font-sans line-clamp-3">
                    {tool.description}
                  </p>

                  {/* Workflow Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {tool.workflows.map((wf) => (
                      <span
                        key={wf}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[3px] text-[11px] font-mono border border-zinc-300 dark:border-zinc-700 bg-[#F9F8F6] dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
                      >
                        <Layers className="h-2.5 w-2.5 text-purple-600 shrink-0" />
                        <span>{wf}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="border-t border-zinc-200 dark:border-zinc-800 px-4 py-2.5 bg-[#F2F0EC]/50 dark:bg-zinc-950/50">
                  <a
                    href={sanitizeExternalUrl(tool.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="workspace-btn flex items-center justify-center gap-1.5 w-full py-1.5 text-xs font-mono font-bold"
                  >
                    <span>VISIT TOOL</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="workspace-card p-12 text-center">
          <Search className="h-10 w-10 text-zinc-400 mx-auto mb-3" />
          <h3 className="font-heading font-bold text-base text-zinc-900 dark:text-zinc-100 mb-1">
            No tools match your search
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto mb-5 leading-relaxed font-sans">
            Try adjusting your search query, or clear your pricing filters to explore the entire directory.
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
    </main>
  );
}
