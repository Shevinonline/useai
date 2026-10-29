import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toolsData } from '../data/toolsData';
import { Search, Wrench, ExternalLink, X, Layers, Sparkles, Bookmark } from 'lucide-react';
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

  // Render pricing badge with consistent humanized colors
  const renderPricingBadge = (pricing) => {
    if (pricing === 'Free') {
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-sans">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
          <span>Free</span>
        </span>
      );
    }
    if (pricing === 'Paid') {
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-sans">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
          <span>Paid</span>
        </span>
      );
    }
    // Default: Freemium
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent font-sans">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
        <span>Freemium</span>
      </span>
    );
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-20">
      {/* Top Header Area */}
      <section className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-app-border bg-app-surface text-xs font-semibold text-app-muted mb-4 shadow-xs font-sans">
          <Wrench className="h-3.5 w-3.5 text-brand-accent" />
          <span>AI Stack & Tools Directory</span>
          <span className="text-app-border">•</span>
          <span className="text-brand-accent font-semibold">{toolsData.length} Curated Tools</span>
        </div>

        <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-app-text mb-3">
          Curated AI Tools & Models
        </h1>

        <p className="text-base sm:text-lg text-app-muted leading-relaxed max-w-2xl mx-auto font-sans">
          Essential coding models, UI generators, design tools, and dev infrastructure used across our roadmaps.
        </p>

        {/* Search Bar */}
        <div className="mt-8 max-w-xl mx-auto">
          <div className="relative flex items-center">
            <Search className="absolute left-3.5 h-4 w-4 text-app-muted pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools by name, description, or capability..."
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

        {/* Pricing Tier Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {['All', 'Freemium', 'Free', 'Paid'].map((tier) => {
            const count = pricingCounts[tier];
            const isActive = selectedPricing === tier;
            return (
              <button
                key={tier}
                onClick={() => setSelectedPricing(tier)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs rounded-full border transition-colors duration-150 cursor-pointer font-sans ${
                  isActive
                    ? 'border-brand-accent/50 bg-brand-accent/10 text-brand-accent font-semibold'
                    : 'border-app-border bg-app-surface text-app-muted hover:text-app-text hover:bg-app-bg'
                }`}
              >
                <span>{tier}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-brand-accent/20 text-brand-accent' : 'bg-app-bg text-app-muted border border-app-border'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Results Header */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-app-border">
        <h2 className="font-heading font-semibold text-base sm:text-lg text-app-text">
          {selectedPricing === 'All' ? 'All AI Tools' : `${selectedPricing} Tools`} <span className="text-app-muted font-normal text-sm font-mono">({filteredTools.length})</span>
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

      {/* Grid of Tool Cards */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredTools.map((tool, idx) => {
            const isSaved = isToolBookmarked(tool.id || tool.name);
            return (
              <div
                key={`${tool.id || tool.name}-${idx}`}
                className="group relative flex flex-col justify-between p-5 rounded-lg border border-app-border bg-app-surface hover:border-brand-accent/60 transition-colors duration-150 shadow-xs"
              >
                <div>
                  {/* Header: Name + Pricing Badge & Bookmark Button */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-heading font-semibold text-base text-app-text group-hover:text-brand-accent transition-colors duration-150">
                      {tool.name}
                    </h3>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {renderPricingBadge(tool.pricing)}
                      <button
                        type="button"
                        onClick={() => toggleToolBookmark(tool)}
                        title={isSaved ? 'Remove from Saved Tools' : 'Save Tool'}
                        aria-label={isSaved ? 'Remove from Saved Tools' : 'Save Tool'}
                        className={`p-1 rounded-md border transition-all duration-150 cursor-pointer ${
                          isSaved
                            ? 'border-brand-accent/50 bg-brand-accent/15 text-brand-accent shadow-2xs'
                            : 'border-transparent text-app-muted hover:text-app-text hover:bg-app-bg hover:border-app-border'
                        }`}
                      >
                        <Bookmark
                          className={`h-3.5 w-3.5 transition-transform duration-150 active:scale-90 ${
                            isSaved ? 'fill-brand-accent text-brand-accent' : ''
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-app-muted leading-relaxed mb-4 font-sans line-clamp-3">
                  {tool.description}
                </p>

                {/* Workflow Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {tool.workflows.map((wf) => (
                    <span
                      key={wf}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium border border-app-border bg-app-bg text-app-muted font-sans"
                    >
                      <Layers className="h-2.5 w-2.5 text-brand-accent/70 shrink-0" />
                      <span>{wf}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action: Visit Tool */}
              <div className="pt-3 border-t border-app-border/60">
                <a
                  href={sanitizeExternalUrl(tool.url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 text-xs font-semibold rounded-md border border-app-border bg-app-bg hover:border-brand-accent hover:text-brand-accent transition-colors duration-150 font-sans"
                >
                  <span>Visit Tool</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          );
        })}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 rounded-lg border border-dashed border-app-border bg-app-surface/50">
          <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-app-bg border border-app-border flex items-center justify-center text-app-muted">
            <Search className="h-4 w-4" />
          </div>
          <h3 className="font-heading font-semibold text-base text-app-text mb-1">
            No tools match your search
          </h3>
          <p className="text-xs text-app-muted max-w-sm mx-auto mb-5 leading-relaxed font-sans">
            Try adjusting your search query, or clear your pricing filters to explore the entire directory.
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
    </main>
  );
}
