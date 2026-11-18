import { useState, useEffect } from 'react';
import { Sun, Moon, Star, Menu, X, Sparkles, Search, Bookmark } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useCommandPalette } from '../context/CommandPaletteContext';
import { useWorkspace } from '../context/WorkspaceContext';
import { getShortcutBadge } from '../utils/osDetector';
import { sanitizeExternalUrl } from '../utils/validation';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { openCommandPalette } = useCommandPalette();
  const { totalSavedCount, openSavedModal } = useWorkspace();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const githubRepoUrl = sanitizeExternalUrl(import.meta.env.VITE_GITHUB_REPO_URL || 'https://github.com');

  // Auto-close mobile menu on route change or Escape
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [mobileMenuOpen]);

  const shortcutBadge = getShortcutBadge();

  // Scroll to #request-roadmap on Home or navigate to Home then scroll
  const handleRequestRoadmap = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname === '/') {
      const el = document.getElementById('request-roadmap');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#request-roadmap');
    }
  };

  const isRoadmapsActive = location.pathname === '/roadmaps' || location.pathname.startsWith('/roadmap');
  const isPromptsActive = location.pathname === '/prompts';
  const isToolsActive = location.pathname === '/tools';

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FFF8F2] dark:bg-[#0B1021] border-b-2 border-[#10162F] dark:border-[#3B497E] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link
          to="/"
          onClick={() => {
            setMobileMenuOpen(false);
            window.dispatchEvent(new CustomEvent('useai_route_changed', { detail: { pathname: '/' } }));
          }}
          className="flex items-center gap-2 group select-none shrink-0"
          aria-label="useai.sh homepage"
        >
          <span className="font-display font-bold text-xl tracking-tight text-[#10162F] dark:text-white group-hover:text-[#3A10E5] dark:group-hover:text-[#FFD300] transition-colors">
            useai
          </span>
          <span className="bg-[#FFD300] text-[#10162F] border-2 border-[#10162F] font-mono font-bold px-1.5 py-0.5 text-xs rounded-[3px] shadow-[2px_2px_0px_0px_#10162F]">
            .sh
          </span>
        </Link>

        {/* Center: Main Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 h-full font-display">
          <Link
            to="/roadmaps"
            onClick={() => {
              setMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent('useai_route_changed', { detail: { pathname: '/roadmaps' } }));
            }}
            className={`h-full flex items-center px-1 text-xs uppercase tracking-wider font-bold transition-colors relative ${
              isRoadmapsActive
                ? 'text-[#3A10E5] dark:text-[#FFD300]'
                : 'text-[#10162F]/80 dark:text-slate-300 hover:text-[#3A10E5] dark:hover:text-[#FFD300]'
            }`}
          >
            <span>Roadmaps</span>
            {isRoadmapsActive && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#10162F] dark:bg-[#FFD300]" />
            )}
          </Link>
          <Link
            to="/prompts"
            onClick={() => {
              setMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent('useai_route_changed', { detail: { pathname: '/prompts' } }));
            }}
            className={`h-full flex items-center px-1 text-xs uppercase tracking-wider font-bold transition-colors relative ${
              isPromptsActive
                ? 'text-[#3A10E5] dark:text-[#FFD300]'
                : 'text-[#10162F]/80 dark:text-slate-300 hover:text-[#3A10E5] dark:hover:text-[#FFD300]'
            }`}
          >
            <span>Prompts</span>
            {isPromptsActive && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#10162F] dark:bg-[#FFD300]" />
            )}
          </Link>
          <Link
            to="/tools"
            onClick={() => {
              setMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent('useai_route_changed', { detail: { pathname: '/tools' } }));
            }}
            className={`h-full flex items-center px-1 text-xs uppercase tracking-wider font-bold transition-colors relative ${
              isToolsActive
                ? 'text-[#3A10E5] dark:text-[#FFD300]'
                : 'text-[#10162F]/80 dark:text-slate-300 hover:text-[#3A10E5] dark:hover:text-[#FFD300]'
            }`}
          >
            <span>AI Tools</span>
            {isToolsActive && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#10162F] dark:bg-[#FFD300]" />
            )}
          </Link>
          <button
            onClick={handleRequestRoadmap}
            type="button"
            className="h-full flex items-center gap-1.5 px-1 text-xs uppercase tracking-wider font-bold text-[#10162F]/80 dark:text-slate-300 hover:text-[#3A10E5] dark:hover:text-[#FFD300] transition-colors cursor-pointer"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#3A10E5] dark:text-[#FFD300]" />
            <span>Request</span>
          </button>
        </nav>

        {/* Right: Actions (Cmd+K Search, Saved Workspace, GitHub, Theme Toggle) */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Cmd+K Search Trigger */}
          <button
            onClick={openCommandPalette}
            type="button"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-xs border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-white font-mono font-bold shadow-[2px_2px_0px_0px_#10162F] dark:shadow-[2px_2px_0px_0px_#000000] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F] transition-all cursor-pointer"
            title={`Search platform (${shortcutBadge})`}
            aria-label={`Search platform (${shortcutBadge})`}
          >
            <Search className="h-3.5 w-3.5 text-[#10162F] dark:text-white" />
            <span className="hidden lg:inline text-xs">Search</span>
            <kbd className="font-mono text-[10px] font-bold bg-[#FFD300] text-[#10162F] border border-[#10162F] px-1 py-0.2 rounded-[2px]">
              {shortcutBadge}
            </kbd>
          </button>

          {/* Saved Workspace [N] */}
          <button
            onClick={() => openSavedModal('library')}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-white font-mono font-bold shadow-[2px_2px_0px_0px_#10162F] dark:shadow-[2px_2px_0px_0px_#000000] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F] transition-all cursor-pointer"
            aria-label={`Open Saved Library (${totalSavedCount} saved items)`}
            title="Saved Steps, Prompts & Local Backup"
          >
            <Bookmark
              className={`h-3.5 w-3.5 transition-colors ${
                totalSavedCount > 0 ? 'fill-[#FFD300] text-[#10162F]' : 'text-[#10162F] dark:text-white'
              }`}
            />
            <span className="hidden xs:inline">Saved</span>
            <span className="text-[11px] font-bold">
              [{totalSavedCount}]
            </span>
          </button>

          {/* GitHub Star Button */}
          <a
            href={githubRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Star on GitHub"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-white font-mono font-bold shadow-[2px_2px_0px_0px_#10162F] dark:shadow-[2px_2px_0px_0px_#000000] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F] transition-all cursor-pointer"
          >
            <Star className="h-3.5 w-3.5 fill-[#FFD300] text-[#10162F]" />
            <span>GitHub</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="inline-flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-white font-mono font-bold shadow-[2px_2px_0px_0px_#10162F] dark:shadow-[2px_2px_0px_0px_#000000] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F] transition-all cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-[#FFD300]" />
            ) : (
              <Moon className="h-4 w-4 text-[#10162F]" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            className="md:hidden inline-flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-white font-mono font-bold shadow-[2px_2px_0px_0px_#10162F] dark:shadow-[2px_2px_0px_0px_#000000] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021] px-4 pt-4 pb-6 space-y-2.5 font-display shadow-lg">
          {/* Mobile Search Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openCommandPalette();
            }}
            type="button"
            className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-mono font-bold rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-white shadow-[2px_2px_0px_0px_#10162F] dark:shadow-[2px_2px_0px_0px_#000000] mb-3 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-[#3A10E5] dark:text-[#FFD300]" />
              <span>Search everything...</span>
            </div>
            <kbd className="px-1.5 py-0.5 text-[10px] font-mono rounded-[2px] bg-[#FFD300] text-[#10162F] border border-[#10162F] font-bold">
              {shortcutBadge}
            </kbd>
          </button>

          <Link
            to="/roadmaps"
            onClick={() => {
              setMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent('useai_route_changed', { detail: { pathname: '/roadmaps' } }));
            }}
            className={`block px-3.5 py-2 text-xs uppercase tracking-wider font-bold rounded-[4px] border-2 transition-all ${
              isRoadmapsActive
                ? 'bg-[#3A10E5] text-white border-[#10162F] shadow-[2px_2px_0px_0px_#10162F]'
                : 'border-transparent text-[#10162F] dark:text-white hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            Roadmaps
          </Link>
          <Link
            to="/prompts"
            onClick={() => {
              setMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent('useai_route_changed', { detail: { pathname: '/prompts' } }));
            }}
            className={`block px-3.5 py-2 text-xs uppercase tracking-wider font-bold rounded-[4px] border-2 transition-all ${
              isPromptsActive
                ? 'bg-[#3A10E5] text-white border-[#10162F] shadow-[2px_2px_0px_0px_#10162F]'
                : 'border-transparent text-[#10162F] dark:text-white hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            Prompts
          </Link>
          <Link
            to="/tools"
            onClick={() => {
              setMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent('useai_route_changed', { detail: { pathname: '/tools' } }));
            }}
            className={`block px-3.5 py-2 text-xs uppercase tracking-wider font-bold rounded-[4px] border-2 transition-all ${
              isToolsActive
                ? 'bg-[#3A10E5] text-white border-[#10162F] shadow-[2px_2px_0px_0px_#10162F]'
                : 'border-transparent text-[#10162F] dark:text-white hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            AI Tools
          </Link>
          <button
            onClick={handleRequestRoadmap}
            type="button"
            className="w-full text-left px-3.5 py-2 text-xs uppercase tracking-wider font-bold rounded-[4px] border-2 border-transparent text-[#10162F] dark:text-white hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="h-4 w-4 text-[#3A10E5] dark:text-[#FFD300]" />
            <span>Request Roadmap</span>
          </button>

          <div className="pt-3 border-t-2 border-[#10162F]/15 dark:border-white/10">
            <a
              href={githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cc-btn-secondary flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold"
            >
              <Star className="h-4 w-4 fill-[#FFD300] text-[#10162F]" />
              <span>Star on GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
