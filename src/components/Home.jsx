import { useState, useMemo, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import roadmapsData from '../data/roadmaps.json';
import { toolsData } from '../data/toolsData';
import { getAllPrompts } from '../utils/promptAggregator';
import RoadmapCard from './RoadmapCard';
import RoadmapRequestBox from './RoadmapRequestBox';
import {
  Search,
  X,
  ArrowRight,
  Workflow,
  Compass,
  Wrench,
  Copy,
  Check,
  ExternalLink,
  Terminal
} from 'lucide-react';
import { useCommandPalette } from '../context/CommandPaletteContext';
import { getShortcutBadge } from '../utils/osDetector';
import { sanitizeExternalUrl } from '../utils/validation';

export default function Home() {
  const { openCommandPalette } = useCommandPalette();
  const location = useLocation();
  const shortcutBadge = getShortcutBadge();
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedPromptId, setCopiedPromptId] = useState(null);

  // Smooth scroll to #request-roadmap if navigated with hash
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

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const workflow = roadmapsData.filter((r) => r.category === 'Role & Workflow Roadmaps' || r.category === 'workflow').length;
    const role = roadmapsData.filter((r) => r.category === 'AI Role-Based Roadmaps' || r.category === 'role').length;
    const tool = roadmapsData.filter((r) => r.category === 'Tool Mastery Roadmaps' || r.category === 'tool' || r.category === 'tool-specific').length;
    return { workflow, role, tool, total: roadmapsData.length };
  }, []);

  // Curated Featured 6 flagship roadmaps (2 Workflow, 2 Role, 2 Tool)
  const featuredRoadmaps = useMemo(() => {
    const preferredWorkflows = ['n8n-make-automation-mastery', 'generative-ai-video-production', 'ai-voice-agent-mastery'];
    const wfMatches = roadmapsData.filter((r) => r.status === 'ready' && (r.category === 'Role & Workflow Roadmaps' || r.category === 'workflow'));
    const wfChosen = preferredWorkflows.map((id) => wfMatches.find((r) => r.id === id)).filter(Boolean);
    const wfRemaining = wfMatches.filter((r) => !wfChosen.some((c) => c.id === r.id));
    const twoWorkflows = [...wfChosen, ...wfRemaining].slice(0, 2);

    const preferredRoles = ['ai-full-stack-coding', 'ai-product-ui-ux-designer', 'ai-fullstack-coding'];
    const roleMatches = roadmapsData.filter((r) => r.status === 'ready' && (r.category === 'AI Role-Based Roadmaps' || r.category === 'role'));
    const roleChosen = preferredRoles.map((id) => roleMatches.find((r) => r.id === id)).filter(Boolean);
    const roleRemaining = roleMatches.filter((r) => !roleChosen.some((c) => c.id === r.id));
    const twoRoles = [...roleChosen, ...roleRemaining].slice(0, 2);

    const preferredTools = ['cursor-ai-ides', 'claude-code-subagents', 'midjourney-generative-art'];
    const toolMatches = roadmapsData.filter((r) => r.status === 'ready' && (r.category === 'Tool Mastery Roadmaps' || r.category === 'tool' || r.category === 'tool-specific'));
    const toolChosen = preferredTools.map((id) => toolMatches.find((r) => r.id === id)).filter(Boolean);
    const toolRemaining = toolMatches.filter((r) => !toolChosen.some((c) => c.id === r.id));
    const twoTools = [...toolChosen, ...toolRemaining].slice(0, 2);

    return [...twoWorkflows, ...twoRoles, ...twoTools];
  }, []);

  // Top 3 popular prompts from promptAggregator
  const popularPrompts = useMemo(() => {
    try {
      const all = getAllPrompts();
      return Array.isArray(all) ? all.slice(0, 3) : [];
    } catch {
      return [];
    }
  }, []);

  // Top 5 spotlight tools from toolsData
  const spotlightTools = useMemo(() => {
    try {
      return Array.isArray(toolsData) ? toolsData.slice(0, 5) : [];
    } catch {
      return [];
    }
  }, []);

  // Copy prompt handler
  const handleCopyPrompt = async (prompt) => {
    try {
      await navigator.clipboard.writeText(prompt.template || '');
      setCopiedPromptId(prompt.id);
      setTimeout(() => setCopiedPromptId(null), 2000);
    } catch (e) {
      console.error('Failed to copy prompt', e);
    }
  };

  // Safe search filter across all roadmaps
  const filteredSearchResults = useMemo(() => {
    const q = String(searchQuery || '').trim().toLowerCase();
    if (!q) return [];
    return roadmapsData.filter((r) => {
      const title = String(r?.title || '').toLowerCase();
      const description = String(r?.description || '').toLowerCase();
      const category = String(r?.category || '').toLowerCase();
      const toolsMatch = Array.isArray(r?.tools) && r.tools.some((t) => {
        const toolStr = typeof t === 'string' ? t : String(t?.name || t?.title || '');
        return toolStr.toLowerCase().includes(q);
      });
      return title.includes(q) || description.includes(q) || category.includes(q) || toolsMatch;
    });
  }, [searchQuery]);

  const isSearching = searchQuery.trim().length > 0;

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 font-sans">
      {/* ========================================================
          SECTION 1: Strong Editorial Hero & Global Search
         ======================================================== */}
      <section className="pt-14 pb-12 text-center">
        {/* Quick Stats Pill */}
        <div className="inline-flex items-center gap-2 border-2 border-[#10162F] bg-[#FFD300] text-[#10162F] font-mono text-xs font-bold px-3.5 py-1.5 rounded-[3px] shadow-[2px_2px_0px_0px_#10162F] mb-6 select-none">
          <span className="w-2 h-2 rounded-full bg-[#10162F] animate-pulse" />
          <span>32 Ready Roadmaps</span>
          <span className="text-[#10162F]/60">•</span>
          <span>390+ Step Playbooks</span>
          <span className="text-[#10162F]/60">•</span>
          <span>390+ Prompts</span>
        </div>

        {/* Space Grotesk Value Prop Headline */}
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#10162F] dark:text-white leading-[1.12] mb-5 max-w-4xl mx-auto">
          The Open-Source Workspace for AI Engineering.
        </h1>

        {/* Plus Jakarta Sans Subtitle */}
        <p className="font-sans text-base sm:text-lg text-[#10162F]/80 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Master end-to-end AI workflows, modern agent architectures, and generative tools through step-by-step developer playbooks without the marketing noise.
        </p>

        {/* Typeable Search Bar + Cmd+K Trigger */}
        <div className="mt-8 max-w-2xl mx-auto w-full">
          <div className="relative flex items-center w-full bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[5px_5px_0px_0px_#10162F] dark:shadow-[5px_5px_0px_0px_#000000] p-2 gap-2 transition-all">
            <Search className="h-5 w-5 text-[#10162F]/60 dark:text-slate-400 ml-2 shrink-0" />

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
              placeholder="Search workflows, roles, tools, and prompts..."
              className="w-full py-1.5 px-2 bg-transparent text-sm sm:text-base text-[#10162F] dark:text-white placeholder:text-[#10162F]/40 dark:placeholder:text-slate-500 focus:outline-none font-sans"
              aria-label="Filter roadmaps inline"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="p-1 rounded text-[#10162F]/60 hover:text-[#10162F] dark:hover:text-white transition-colors cursor-pointer"
                title="Clear search (ESC)"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                openCommandPalette();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold rounded-[3px] bg-[#3A10E5] text-white dark:bg-[#FFD300] dark:text-[#10162F] border-2 border-[#10162F] shadow-[2px_2px_0px_0px_#10162F] shrink-0 cursor-pointer hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F] transition-all"
              title={`Open Command Palette (${shortcutBadge})`}
              aria-label={`Open Command Palette (${shortcutBadge})`}
            >
              <span>Quick Search</span>
              <kbd className="font-bold text-[10px] bg-white/20 dark:bg-black/10 px-1 py-0.2 rounded-[2px]">{shortcutBadge}</kbd>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          LIVE INLINE SEARCH RESULTS (when user types in hero search)
         ======================================================== */}
      {isSearching ? (
        <section className="mb-20">
          <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-[#10162F] dark:border-[#3B497E]">
            <div className="flex items-center gap-3">
              <h2 className="font-display text-xl font-bold text-[#10162F] dark:text-white">
                Search Results for &ldquo;{searchQuery}&rdquo;
              </h2>
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] bg-[#FFD300] text-[#10162F] border border-[#10162F] shadow-[1px_1px_0px_0px_#10162F]">
                {filteredSearchResults.length} Matches
              </span>
            </div>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="cc-btn-secondary px-3 py-1.5 text-xs font-mono font-bold"
            >
              Clear Search
            </button>
          </div>

          {filteredSearchResults.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSearchResults.map((roadmap) => (
                <RoadmapCard key={roadmap.id} roadmap={roadmap} />
              ))}
            </div>
          ) : (
            <div className="cc-card p-12 text-center">
              <Search className="h-10 w-10 text-slate-400 dark:text-slate-500 mx-auto mb-3" />
              <h3 className="font-display font-bold text-lg text-[#10162F] dark:text-white mb-2">
                No roadmaps found for &ldquo;{searchQuery}&rdquo;
              </h3>
              <p className="text-sm text-[#10162F]/70 dark:text-slate-300 max-w-md mx-auto mb-5 font-sans leading-relaxed">
                We couldn&rsquo;t find a curriculum matching that term. Use the universal command palette to search individual playbook steps, prompts, and tools.
              </p>
              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="cc-btn-secondary px-4 py-2 text-xs font-bold"
                >
                  Clear Filter
                </button>
                <button
                  type="button"
                  onClick={openCommandPalette}
                  className="cc-btn-primary px-4 py-2 text-xs font-bold gap-1.5"
                >
                  <Search className="h-3.5 w-3.5" />
                  <span>Search All Content ({shortcutBadge})</span>
                </button>
              </div>
            </div>
          )}
        </section>
      ) : (
        /* ========================================================
            FULL 6-SECTION EDITORIAL WORKSPACE (Default view)
           ======================================================== */
        <>
          {/* ========================================================
              SECTION 2: Clear Entry Points ("Where to Start")
             ======================================================== */}
          <section className="mb-20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[3px] border border-[#10162F] bg-[#FFD300] text-xs font-mono font-bold text-[#10162F] mb-2 shadow-[2px_2px_0px_0px_#10162F] uppercase">
                WHERE TO START // ENTRY POINTS
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#10162F] dark:text-white mt-1">
                Choose Your Learning Pathway
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#10162F]/80 dark:text-slate-300 mt-1 max-w-xl mx-auto">
                Three structured tracks designed to take you from foundational understanding to production execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Path 01: Build AI Workflows */}
              <Link
                to="/roadmaps?category=workflow"
                className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[4px_4px_0px_0px_#10162F] dark:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#10162F] dark:hover:shadow-[6px_6px_0px_0px_#FFD300] transition-all duration-150 p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-[3px] bg-[#FFD300] text-[#10162F] border border-[#10162F] uppercase tracking-wider shadow-[1px_1px_0px_0px_#10162F]">
                      PATH 01 // WORKFLOWS
                    </span>
                    <div className="w-8 h-8 rounded-[4px] border border-[#10162F] bg-[#FFF8F2] text-[#10162F] flex items-center justify-center">
                      <Workflow className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#10162F] dark:text-white group-hover:text-[#3A10E5] dark:group-hover:text-[#FFD300] transition-colors mb-2">
                    Build AI Workflows
                  </h3>

                  <p className="font-sans text-sm text-[#10162F]/80 dark:text-slate-300 leading-relaxed mb-4">
                    End-to-end automation pipelines, multi-agent architectures, RAG memory systems, and enterprise LLM integrations.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {['n8n Automation', 'RAG Pipelines', 'Agent Swarms'].map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-[3px] bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-white border border-[#10162F]/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3.5 mt-4 border-t-2 border-[#10162F] dark:border-[#3B497E] flex items-center justify-between text-xs font-mono font-bold text-[#10162F] dark:text-white group-hover:text-[#3A10E5] dark:group-hover:text-[#FFD300]">
                  <span>Explore Pathway ({categoryCounts.workflow}) →</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              {/* Path 02: Role-Based Career Tracks */}
              <Link
                to="/roadmaps?category=role"
                className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[4px_4px_0px_0px_#10162F] dark:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#10162F] dark:hover:shadow-[6px_6px_0px_0px_#FFD300] transition-all duration-150 p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-[3px] bg-[#E8F2FF] text-[#10162F] border border-[#10162F] uppercase tracking-wider shadow-[1px_1px_0px_0px_#10162F]">
                      PATH 02 // ROLES
                    </span>
                    <div className="w-8 h-8 rounded-[4px] border border-[#10162F] bg-[#FFF8F2] text-[#10162F] flex items-center justify-center">
                      <Compass className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#10162F] dark:text-white group-hover:text-[#3A10E5] dark:group-hover:text-[#FFD300] transition-colors mb-2">
                    Role-Based Tracks
                  </h3>

                  <p className="font-sans text-sm text-[#10162F]/80 dark:text-slate-300 leading-relaxed mb-4">
                    Holistic engineering, design, and growth tracks tailored for professionals building and deploying AI products.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {['AI Full-Stack', 'UI/UX Designer', 'Growth Architect'].map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-[3px] bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-white border border-[#10162F]/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3.5 mt-4 border-t-2 border-[#10162F] dark:border-[#3B497E] flex items-center justify-between text-xs font-mono font-bold text-[#10162F] dark:text-white group-hover:text-[#3A10E5] dark:group-hover:text-[#FFD300]">
                  <span>Explore Pathway ({categoryCounts.role}) →</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              {/* Path 03: Master Core AI Tools */}
              <Link
                to="/roadmaps?category=tool"
                className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[4px_4px_0px_0px_#10162F] dark:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#10162F] dark:hover:shadow-[6px_6px_0px_0px_#FFD300] transition-all duration-150 p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-[3px] bg-[#D4F7E8] text-[#10162F] border border-[#10162F] uppercase tracking-wider shadow-[1px_1px_0px_0px_#10162F]">
                      PATH 03 // TOOLS
                    </span>
                    <div className="w-8 h-8 rounded-[4px] border border-[#10162F] bg-[#FFF8F2] text-[#10162F] flex items-center justify-center">
                      <Wrench className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#10162F] dark:text-white group-hover:text-[#3A10E5] dark:group-hover:text-[#FFD300] transition-colors mb-2">
                    Master Core AI Tools
                  </h3>

                  <p className="font-sans text-sm text-[#10162F]/80 dark:text-slate-300 leading-relaxed mb-4">
                    Deep dives into modern developer tools: Cursor IDE, Claude 3.7 Sonnet, Midjourney, v0, Bolt, and local LLM runners.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {['Cursor IDE', 'Claude Code', 'Midjourney v6'].map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-[3px] bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-white border border-[#10162F]/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3.5 mt-4 border-t-2 border-[#10162F] dark:border-[#3B497E] flex items-center justify-between text-xs font-mono font-bold text-[#10162F] dark:text-white group-hover:text-[#3A10E5] dark:group-hover:text-[#FFD300]">
                  <span>Explore Pathway ({categoryCounts.tool}) →</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </section>

          {/* ========================================================
              SECTION 3: Featured Roadmaps (Curated Flagship 6)
             ======================================================== */}
          <section className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 mb-8 border-b-2 border-[#10162F] dark:border-[#3B497E]">
              <div>
                <span className="bg-[#FFD300] border border-[#10162F] px-2 py-0.5 font-mono text-xs font-bold text-[#10162F] rounded-[3px] shadow-[1px_1px_0px_0px_#10162F] uppercase">
                  FLAGSHIP CURRICULUMS
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#10162F] dark:text-white mt-2">
                  Featured Roadmaps
                </h2>
                <p className="font-sans text-sm text-[#10162F]/80 dark:text-slate-300 mt-1">
                  Hand-curated, production-tested roadmaps across workflows, career tracks, and tooling.
                </p>
              </div>

              <Link
                to="/roadmaps"
                className="bg-[#3A10E5] text-white border-2 border-[#10162F] rounded-[4px] shadow-[3px_3px_0px_0px_#10162F] font-bold font-display px-4 py-2 text-xs hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#10162F] transition-all inline-flex items-center gap-1.5 shrink-0 self-start sm:self-auto cursor-pointer"
              >
                <span>View All 38 Roadmaps →</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRoadmaps.map((roadmap) => (
                <RoadmapCard key={roadmap.id} roadmap={roadmap} />
              ))}
            </div>
          </section>

          {/* ========================================================
              SECTION 4: Browse by Category
             ======================================================== */}
          <section className="mb-20">
            <div className="text-center mb-8">
              <span className="bg-[#FFD300] border border-[#10162F] px-2 py-0.5 font-mono text-xs font-bold text-[#10162F] rounded-[3px] shadow-[1px_1px_0px_0px_#10162F] uppercase">
                EXPLORE CURRICULUM
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#10162F] dark:text-white mt-2">
                Browse by Category
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#10162F]/80 dark:text-slate-300 mt-1 max-w-xl mx-auto">
                Filter and navigate through all 38 roadmaps divided into dedicated specialization areas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category 1: Workflows */}
              <div className="bg-[#F5EFE6] dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[4px_4px_0px_0px_#10162F] dark:shadow-[4px_4px_0px_0px_#000000] p-6 flex flex-col justify-between hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#10162F] dark:hover:shadow-[6px_6px_0px_0px_#FFD300] transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] bg-[#FFD300] text-[#10162F] border border-[#10162F] shadow-[1px_1px_0px_0px_#10162F]">
                      CATEGORY
                    </span>
                    <span className="font-mono text-xs font-bold text-[#10162F] dark:text-slate-300">
                      {categoryCounts.workflow} Roadmaps
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#10162F] dark:text-white mb-2">
                    Workflow Roadmaps
                  </h3>

                  <p className="font-sans text-sm text-[#10162F]/80 dark:text-slate-300 leading-relaxed mb-4">
                    Architect automated workflows, business intelligence pipelines, AI video generation, and voice agents.
                  </p>

                  <div className="space-y-1.5 mb-6 text-xs text-[#10162F] dark:text-slate-200 font-sans">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10162F] dark:bg-[#FFD300]" />
                      <span>n8n &amp; Make Automation Mastery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10162F] dark:bg-[#FFD300]" />
                      <span>Generative AI Video Production</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10162F] dark:bg-[#FFD300]" />
                      <span>AI Voice Agents &amp; Real-Time STT</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/roadmaps?category=workflow"
                  className="solid white border-2 border-[#10162F] rounded-[4px] shadow-[2px_2px_0px_0px_#10162F] bg-white dark:bg-[#0B1021] text-[#10162F] dark:text-white font-mono font-bold w-full py-2.5 text-xs inline-flex items-center justify-center gap-1.5 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F] transition-all cursor-pointer"
                >
                  <span>Filter Workflow Tracks ({categoryCounts.workflow})</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Category 2: Role-Based */}
              <div className="bg-[#F5EFE6] dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[4px_4px_0px_0px_#10162F] dark:shadow-[4px_4px_0px_0px_#000000] p-6 flex flex-col justify-between hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#10162F] dark:hover:shadow-[6px_6px_0px_0px_#FFD300] transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] bg-[#E8F2FF] text-[#10162F] border border-[#10162F] shadow-[1px_1px_0px_0px_#10162F]">
                      CATEGORY
                    </span>
                    <span className="font-mono text-xs font-bold text-[#10162F] dark:text-slate-300">
                      {categoryCounts.role} Roadmaps
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#10162F] dark:text-white mb-2">
                    AI Role-Based Roadmaps
                  </h3>

                  <p className="font-sans text-sm text-[#10162F]/80 dark:text-slate-300 leading-relaxed mb-4">
                    Comprehensive career tracks covering modern AI software engineering, product design, and growth.
                  </p>

                  <div className="space-y-1.5 mb-6 text-xs text-[#10162F] dark:text-slate-200 font-sans">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10162F] dark:bg-[#FFD300]" />
                      <span>Full-Stack AI Software Engineer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10162F] dark:bg-[#FFD300]" />
                      <span>AI Product UI/UX Designer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10162F] dark:bg-[#FFD300]" />
                      <span>Generative Growth Specialist</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/roadmaps?category=role"
                  className="solid white border-2 border-[#10162F] rounded-[4px] shadow-[2px_2px_0px_0px_#10162F] bg-white dark:bg-[#0B1021] text-[#10162F] dark:text-white font-mono font-bold w-full py-2.5 text-xs inline-flex items-center justify-center gap-1.5 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F] transition-all cursor-pointer"
                >
                  <span>Filter Role Tracks ({categoryCounts.role})</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Category 3: Tool-Specific */}
              <div className="bg-[#F5EFE6] dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[4px_4px_0px_0px_#10162F] dark:shadow-[4px_4px_0px_0px_#000000] p-6 flex flex-col justify-between hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#10162F] dark:hover:shadow-[6px_6px_0px_0px_#FFD300] transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-[3px] bg-[#D4F7E8] text-[#10162F] border border-[#10162F] shadow-[1px_1px_0px_0px_#10162F]">
                      CATEGORY
                    </span>
                    <span className="font-mono text-xs font-bold text-[#10162F] dark:text-slate-300">
                      {categoryCounts.tool} Roadmaps
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#10162F] dark:text-white mb-2">
                    Tool-Specific Roadmaps
                  </h3>

                  <p className="font-sans text-sm text-[#10162F]/80 dark:text-slate-300 leading-relaxed mb-4">
                    Mastery tracks for industry-standard coding assistants, foundational models, and creative tools.
                  </p>

                  <div className="space-y-1.5 mb-6 text-xs text-[#10162F] dark:text-slate-200 font-sans">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10162F] dark:bg-[#FFD300]" />
                      <span>Cursor AI &amp; Next-Gen IDEs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10162F] dark:bg-[#FFD300]" />
                      <span>Claude Code &amp; Subagents</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10162F] dark:bg-[#FFD300]" />
                      <span>Midjourney &amp; Diffusion Models</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/roadmaps?category=tool"
                  className="solid white border-2 border-[#10162F] rounded-[4px] shadow-[2px_2px_0px_0px_#10162F] bg-white dark:bg-[#0B1021] text-[#10162F] dark:text-white font-mono font-bold w-full py-2.5 text-xs inline-flex items-center justify-center gap-1.5 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F] transition-all cursor-pointer"
                >
                  <span>Filter Tool Tracks ({categoryCounts.tool})</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </section>

          {/* ========================================================
              SECTION 5: Popular AI Prompts & Tools Spotlight
             ======================================================== */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left Column: Popular Prompts */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b-2 border-[#10162F] dark:border-[#3B497E]">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-[#3A10E5] dark:text-[#FFD300]" />
                    <h3 className="font-display font-bold text-xl text-[#10162F] dark:text-white">
                      Popular Prompts
                    </h3>
                  </div>
                  <Link
                    to="/prompts"
                    className="text-xs font-mono font-bold text-[#10162F] dark:text-slate-300 hover:text-[#3A10E5] dark:hover:text-[#FFD300] inline-flex items-center gap-1"
                  >
                    <span>Explore Prompt Directory (390+) →</span>
                  </Link>
                </div>

                <div className="space-y-3.5">
                  {popularPrompts.map((prompt) => (
                    <div
                      key={prompt.id}
                      className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[3px_3px_0px_0px_#10162F] dark:shadow-[3px_3px_0px_0px_#000000] p-4 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#10162F] transition-all"
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-[3px] bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-white border border-[#10162F] truncate max-w-[200px]">
                          {prompt.roadmapTitle || 'AI Playbook'}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopyPrompt(prompt)}
                          className="border-2 border-[#10162F] rounded-[4px] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-white font-mono font-bold text-xs px-2.5 py-1 shadow-[2px_2px_0px_0px_#10162F] dark:shadow-[2px_2px_0px_0px_#000000] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F] transition-all cursor-pointer inline-flex items-center gap-1 shrink-0"
                          title="Copy prompt template"
                        >
                          {copiedPromptId === prompt.id ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-[#008A5E]" />
                              <span className="text-[#008A5E]">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>

                      <h4 className="font-display font-bold text-sm text-[#10162F] dark:text-white mb-2 line-clamp-1">
                        {prompt.title}
                      </h4>

                      <div className="p-2.5 rounded-[3px] bg-[#0F172A] border-2 border-[#10162F] font-mono text-xs text-slate-100 line-clamp-2 leading-relaxed">
                        {prompt.template}
                      </div>

                      <div className="mt-2.5 pt-2 border-t border-[#10162F]/15 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-[#10162F]/70 dark:text-slate-400">
                        <span>Step {prompt.stepNumber || 1} Blueprint</span>
                        <Link
                          to={`/roadmap/${prompt.roadmapId}?step=${prompt.stepId}&tab=promptLab`}
                          className="text-[#3A10E5] dark:text-[#FFD300] font-bold hover:underline inline-flex items-center gap-1"
                        >
                          <span>Open in Lab</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Essential AI Tools */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b-2 border-[#10162F] dark:border-[#3B497E]">
                  <div className="flex items-center gap-2">
                    <Wrench className="h-4 w-4 text-[#3A10E5] dark:text-[#FFD300]" />
                    <h3 className="font-display font-bold text-xl text-[#10162F] dark:text-white">
                      Essential AI Tools
                    </h3>
                  </div>
                  <Link
                    to="/tools"
                    className="text-xs font-mono font-bold text-[#10162F] dark:text-slate-300 hover:text-[#3A10E5] dark:hover:text-[#FFD300] inline-flex items-center gap-1"
                  >
                    <span>Browse All Tools ({toolsData.length}) →</span>
                  </Link>
                </div>

                <div className="space-y-3">
                  {spotlightTools.map((tool, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[3px_3px_0px_0px_#10162F] dark:shadow-[3px_3px_0px_0px_#000000] p-3.5 flex items-center justify-between gap-3 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#10162F] transition-all"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-display font-bold text-sm text-[#10162F] dark:text-white truncate">
                            {tool.name}
                          </h4>
                          <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-[3px] bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-white border border-[#10162F] shrink-0">
                            {tool.category || 'Tool'}
                          </span>
                          <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-[3px] bg-[#D4F7E8] text-[#008A5E] border border-[#10162F] shrink-0">
                            {tool.pricing || 'Free'}
                          </span>
                        </div>
                        <p className="font-sans text-xs text-[#10162F]/80 dark:text-slate-300 line-clamp-1 leading-relaxed">
                          {tool.description}
                        </p>
                      </div>

                      {tool.url && (
                        <a
                          href={sanitizeExternalUrl(tool.url)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-2 border-[#10162F] rounded-[4px] bg-white dark:bg-[#131A33] p-2 text-xs shrink-0 shadow-[2px_2px_0px_0px_#10162F] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F] transition-all"
                          title={`Visit ${tool.name}`}
                          aria-label={`Visit ${tool.name}`}
                        >
                          <ExternalLink className="h-3.5 w-3.5 text-[#10162F] dark:text-white" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================
              SECTION 6: Community Roadmap Request Banner
             ======================================================== */}
          <RoadmapRequestBox />
        </>
      )}
    </main>
  );
}
