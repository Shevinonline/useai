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
    <header className="sticky top-0 z-50 w-full bg-[#FAF8F5]/90 dark:bg-[#0B0F17]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
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
          <span className="font-display font-bold text-xl tracking-tight text-[#0F172A] dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-[#6366F1] transition-colors">
            useai
          </span>
          <span className="bg-[#4F46E5] text-white font-mono font-bold px-1.5 py-0.5 text-xs rounded shadow-sm">
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
            className={`h-full flex items-center px-1 text-sm font-semibold transition-colors relative ${
              isRoadmapsActive
                ? 'text-[#4F46E5] dark:text-[#6366F1]'
                : 'text-slate-600 dark:text-slate-300 hover:text-[#0F172A] dark:hover:text-white'
            }`}
          >
            <span>Roadmaps</span>
            {isRoadmapsActive && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4F46E5] dark:bg-[#6366F1]" />
            )}
          </Link>
          <Link
            to="/prompts"
            onClick={() => {
              setMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent('useai_route_changed', { detail: { pathname: '/prompts' } }));
            }}
            className={`h-full flex items-center px-1 text-sm font-semibold transition-colors relative ${
              isPromptsActive
                ? 'text-[#4F46E5] dark:text-[#6366F1]'
                : 'text-slate-600 dark:text-slate-300 hover:text-[#0F172A] dark:hover:text-white'
            }`}
          >
            <span>Prompts</span>
            {isPromptsActive && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4F46E5] dark:bg-[#6366F1]" />
            )}
          </Link>
          <Link
            to="/tools"
            onClick={() => {
              setMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent('useai_route_changed', { detail: { pathname: '/tools' } }));
            }}
            className={`h-full flex items-center px-1 text-sm font-semibold transition-colors relative ${
              isToolsActive
                ? 'text-[#4F46E5] dark:text-[#6366F1]'
                : 'text-slate-600 dark:text-slate-300 hover:text-[#0F172A] dark:hover:text-white'
            }`}
          >
            <span>AI Tools</span>
            {isToolsActive && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4F46E5] dark:bg-[#6366F1]" />
            )}
          </Link>
          <button
            onClick={handleRequestRoadmap}
            type="button"
            className="h-full flex items-center gap-1.5 px-1 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-[#0F172A] dark:hover:text-white transition-colors cursor-pointer"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#4F46E5] dark:text-[#6366F1]" />
            <span>Request</span>
          </button>
        </nav>

        {/* Right: Actions (Cmd+K Search, Saved Workspace, GitHub, Theme Toggle) */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Cmd+K Search Trigger */}
          <button
            onClick={openCommandPalette}
            type="button"
            className="hidden sm:inline-flex items-center gap-2 px-2.5 py-1.5 text-xs text-slate-500 hover:text-[#0F172A] dark:text-slate-400 dark:hover:text-white bg-slate-100 hover:bg-slate-200/70 dark:bg-slate-800/80 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 rounded-md transition-colors cursor-pointer font-sans"
            title={`Search platform (${shortcutBadge})`}
            aria-label={`Search platform (${shortcutBadge})`}
          >
            <Search className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
            <span className="hidden lg:inline text-xs">Search...</span>
            <kbd className="font-mono text-[10px] font-semibold bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700 shadow-2xs">
              {shortcutBadge}
            </kbd>
          </button>

          {/* Saved Workspace [N] */}
          <button
            onClick={() => openSavedModal('library')}
            type="button"
            className="cc-btn-secondary px-3 py-1.5 text-xs font-display font-semibold gap-1.5"
            aria-label={`Open Saved Library (${totalSavedCount} saved items)`}
            title="Saved Steps, Prompts & Local Backup"
          >
            <Bookmark
              className={`h-3.5 w-3.5 transition-colors ${
                totalSavedCount > 0 ? 'fill-amber-400 text-amber-500' : 'text-slate-500 dark:text-slate-400'
              }`}
            />
            <span className="font-display hidden xs:inline">Saved</span>
            <span className="font-mono text-[11px] font-bold">
              [{totalSavedCount}]
            </span>
          </button>

          {/* GitHub Star Button */}
          <a
            href={githubRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Star on GitHub"
            className="cc-btn-secondary hidden sm:inline-flex px-3 py-1.5 text-xs font-display font-semibold gap-1.5"
          >
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-500" />
            <span className="font-display">GitHub</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="cc-btn-secondary h-8 w-8 sm:h-9 sm:w-9 p-0"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-slate-700" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            className="md:hidden cc-btn-secondary h-8 w-8 p-0"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-[#FAF8F5] dark:bg-[#0B0F17] px-4 pt-4 pb-6 space-y-2.5 font-display shadow-lg">
          {/* Mobile Search Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openCommandPalette();
            }}
            type="button"
            className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-semibold rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#111827] text-slate-800 dark:text-white shadow-2xs mb-3 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-[#4F46E5] dark:text-[#6366F1]" />
              <span>Search everything...</span>
            </div>
            <kbd className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-bold">
              {shortcutBadge}
            </kbd>
          </button>

          <Link
            to="/roadmaps"
            onClick={() => {
              setMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent('useai_route_changed', { detail: { pathname: '/roadmaps' } }));
            }}
            className={`block px-3.5 py-2 text-sm font-semibold rounded-md border transition-all ${
              isRoadmapsActive
                ? 'bg-[#4F46E5] text-white border-[#4338CA] shadow-xs'
                : 'border-transparent text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
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
            className={`block px-3.5 py-2 text-sm font-semibold rounded-md border transition-all ${
              isPromptsActive
                ? 'bg-[#4F46E5] text-white border-[#4338CA] shadow-xs'
                : 'border-transparent text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
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
            className={`block px-3.5 py-2 text-sm font-semibold rounded-md border transition-all ${
              isToolsActive
                ? 'bg-[#4F46E5] text-white border-[#4338CA] shadow-xs'
                : 'border-transparent text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            AI Tools
          </Link>
          <button
            onClick={handleRequestRoadmap}
            type="button"
            className="w-full text-left px-3.5 py-2 text-sm font-semibold rounded-md border border-transparent text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="h-4 w-4 text-[#4F46E5] dark:text-[#6366F1]" />
            <span>Request Roadmap</span>
          </button>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
            <a
              href={githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cc-btn-secondary flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold"
            >
              <Star className="h-4 w-4 fill-amber-400 text-amber-500" />
              <span>Star on GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
