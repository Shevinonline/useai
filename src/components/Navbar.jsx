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

  const isRoadmapsActive = location.pathname === '/roadmaps';
  const isPromptsActive = location.pathname === '/prompts';
  const isToolsActive = location.pathname === '/tools';

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F9F8F6]/95 dark:bg-[#0B0B0D]/95 backdrop-blur-sm border-b border-zinc-900 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-stretch justify-between">
        {/* Left: Brand Zone with Vertical 1px Section Divider */}
        <div className="flex items-center gap-3 pr-4 sm:pr-6 border-r border-zinc-300 dark:border-zinc-800 h-full shrink-0">
          <Link
            to="/"
            onClick={() => {
              setMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent('useai_route_changed', { detail: { pathname: '/' } }));
            }}
            className="flex items-center gap-2 group select-none whitespace-nowrap shrink-0"
            aria-label="useai.sh homepage"
          >
            {/* Boxed [>_] terminal mark */}
            <div className="h-7 w-7 rounded-[3px] border border-zinc-900 dark:border-purple-500/70 bg-zinc-900 text-white dark:bg-purple-600 dark:text-white flex items-center justify-center font-mono text-xs font-bold shrink-0 shadow-xs group-hover:-translate-y-0.5 transition-transform duration-150">
              &gt;_
            </div>
            {/* Crisp wordmark */}
            <span className="font-heading font-extrabold text-base tracking-tight text-zinc-900 dark:text-zinc-100">
              useai
            </span>
            {/* Boxed .sh badge */}
            <span className="bg-zinc-900 text-white dark:bg-purple-600 font-mono text-xs font-semibold px-1.5 py-0.5 rounded-[2px] tracking-wider">
              .sh
            </span>
          </Link>
        </div>

        {/* Center: Navigation Links with Linear/Stripe Active Bottom Underline */}
        <nav className="hidden md:flex items-stretch px-4 sm:px-6 border-r border-zinc-300 dark:border-zinc-800 h-full flex-1 font-sans">
          <div className="flex items-stretch gap-1 sm:gap-2 h-full">
            <Link
              to="/roadmaps"
              onClick={() => {
                setMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent('useai_route_changed', { detail: { pathname: '/roadmaps' } }));
              }}
              className={`flex items-center px-3 sm:px-4 text-xs font-medium transition-colors duration-150 whitespace-nowrap -mb-[1px] ${
                isRoadmapsActive
                  ? 'text-zinc-900 dark:text-zinc-100 font-bold border-b-2 border-zinc-900 dark:border-purple-500'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 border-b-2 border-transparent'
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
              className={`flex items-center px-3 sm:px-4 text-xs font-medium transition-colors duration-150 whitespace-nowrap -mb-[1px] ${
                isPromptsActive
                  ? 'text-zinc-900 dark:text-zinc-100 font-bold border-b-2 border-zinc-900 dark:border-purple-500'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 border-b-2 border-transparent'
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
              className={`flex items-center px-3 sm:px-4 text-xs font-medium transition-colors duration-150 whitespace-nowrap -mb-[1px] ${
                isToolsActive
                  ? 'text-zinc-900 dark:text-zinc-100 font-bold border-b-2 border-zinc-900 dark:border-purple-500'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 border-b-2 border-transparent'
              }`}
            >
              AI Tools
            </Link>
            <button
              onClick={handleRequestRoadmap}
              type="button"
              className="flex items-center gap-1.5 px-3 sm:px-4 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 border-b-2 border-transparent -mb-[1px] transition-colors duration-150 cursor-pointer whitespace-nowrap"
            >
              <Sparkles className="h-3 w-3 text-purple-600 dark:text-purple-400" />
              <span>Request Roadmap</span>
            </button>
          </div>
        </nav>

        {/* Right: Utility Zone with Tactile .workspace-btn pills */}
        <div className="flex items-center gap-2.5 sm:gap-3 pl-4 sm:pl-6 h-full shrink-0 whitespace-nowrap">
          {/* Saved [N] Workspace Button */}
          <button
            onClick={() => openSavedModal('library')}
            type="button"
            className="workspace-btn px-2.5 sm:px-3 py-1.5 text-xs font-medium gap-1.5"
            aria-label={`Open Saved Library (${totalSavedCount} saved items)`}
            title="Saved Steps, Prompts & Local Backup"
          >
            <Bookmark
              className={`h-3.5 w-3.5 transition-colors ${
                totalSavedCount > 0 ? 'fill-amber-500 text-amber-500' : 'text-zinc-500 dark:text-zinc-400'
              }`}
            />
            <span className="font-sans">Saved</span>
            <span className="font-mono text-[11px] font-semibold text-zinc-700 dark:text-zinc-300">
              [{totalSavedCount}]
            </span>
          </button>

          {/* Star on GitHub Button */}
          <a
            href={githubRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Star on GitHub"
            className="workspace-btn hidden sm:inline-flex px-2.5 sm:px-3 py-1.5 text-xs font-medium gap-1.5"
          >
            <svg
              className="h-3.5 w-3.5 fill-current text-zinc-700 dark:text-zinc-300"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <Star className="h-3 w-3 text-amber-500 fill-amber-500/20" />
            <span className="font-sans">Star on GitHub</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="workspace-btn h-8 w-8"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-zinc-700" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            className="md:hidden workspace-btn h-8 w-8"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-900 dark:border-zinc-800 bg-[#F9F8F6] dark:bg-[#0B0B0D] px-4 pt-3 pb-5 space-y-2 font-sans shadow-lg animate-in fade-in duration-150">
          {/* Mobile Search Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openCommandPalette();
            }}
            type="button"
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-[4px] border border-zinc-900 dark:border-zinc-700 bg-white dark:bg-[#121215] text-zinc-600 dark:text-zinc-300 mb-2 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Search className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
              <span>Search everything...</span>
            </div>
            <kbd className="px-1.5 py-0.5 text-[10px] font-mono rounded border border-zinc-300 dark:border-zinc-700 bg-[#F2F0EC] dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
              {shortcutBadge}
            </kbd>
          </button>

          {/* Mobile Saved Library Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openSavedModal('library');
            }}
            type="button"
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-[4px] border border-zinc-900 dark:border-zinc-700 bg-white dark:bg-[#121215] text-zinc-900 dark:text-zinc-100 mb-2 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Bookmark
                className={`h-3.5 w-3.5 ${
                  totalSavedCount > 0 ? 'fill-amber-500 text-amber-500' : 'text-purple-600 dark:text-purple-400'
                }`}
              />
              <span>Saved &amp; Workspace</span>
            </div>
            <span className="font-mono text-xs font-bold text-zinc-700 dark:text-zinc-300">
              [{totalSavedCount}]
            </span>
          </button>

          <Link
            to="/roadmaps"
            onClick={() => {
              setMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent('useai_route_changed', { detail: { pathname: '/roadmaps' } }));
            }}
            className={`block px-3 py-2 text-xs font-semibold rounded-[4px] ${
              isRoadmapsActive
                ? 'bg-zinc-900 text-white dark:bg-purple-600'
                : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800'
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
            className={`block px-3 py-2 text-xs font-semibold rounded-[4px] ${
              isPromptsActive
                ? 'bg-zinc-900 text-white dark:bg-purple-600'
                : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800'
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
            className={`block px-3 py-2 text-xs font-semibold rounded-[4px] ${
              isToolsActive
                ? 'bg-zinc-900 text-white dark:bg-purple-600'
                : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800'
            }`}
          >
            AI Tools
          </Link>
          <button
            onClick={handleRequestRoadmap}
            type="button"
            className="w-full text-left px-3 py-2 text-xs font-semibold rounded-[4px] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
            <span>Request Roadmap</span>
          </button>

          <div className="pt-2 border-t border-zinc-300 dark:border-zinc-800">
            <a
              href={githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="workspace-btn flex items-center justify-center gap-1.5 w-full py-2 text-xs font-semibold"
            >
              <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500/20" />
              <span>Star on GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
