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
    <header className="sticky top-0 z-50 w-full bg-[#FFF8F2] dark:bg-[#0B1021] border-b-2 border-[#10162F] dark:border-[#263159] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => {
            setMobileMenuOpen(false);
            window.dispatchEvent(new CustomEvent('useai_route_changed', { detail: { pathname: '/' } }));
          }}
          className="flex items-center gap-2 group select-none shrink-0"
          aria-label="useai.sh homepage"
        >
          <span className="font-display font-bold text-xl tracking-tight text-[#10162F] dark:text-white group-hover:text-[#3A10E5] transition-colors">
            useai
          </span>
          <span className="bg-[#FFD300] text-[#10162F] border-2 border-[#10162F] font-mono font-bold px-1.5 py-0.5 text-xs rounded-[3px] shadow-[1px_1px_0px_0px_#10162F]">
            .sh
          </span>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-7 h-full font-display">
          <Link
            to="/roadmaps"
            onClick={() => {
              setMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent('useai_route_changed', { detail: { pathname: '/roadmaps' } }));
            }}
            className={`h-full flex items-center px-1 text-sm font-semibold transition-colors relative ${
              isRoadmapsActive
                ? 'text-[#3A10E5] dark:text-[#FFD300]'
                : 'text-[#10162F] dark:text-slate-200 hover:text-[#3A10E5] dark:hover:text-[#FFD300]'
            }`}
          >
            <span>Roadmaps</span>
            {isRoadmapsActive && (
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#3A10E5] dark:bg-[#FFD300]" />
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
                ? 'text-[#3A10E5] dark:text-[#FFD300]'
                : 'text-[#10162F] dark:text-slate-200 hover:text-[#3A10E5] dark:hover:text-[#FFD300]'
            }`}
          >
            <span>Prompts</span>
            {isPromptsActive && (
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#3A10E5] dark:bg-[#FFD300]" />
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
                ? 'text-[#3A10E5] dark:text-[#FFD300]'
                : 'text-[#10162F] dark:text-slate-200 hover:text-[#3A10E5] dark:hover:text-[#FFD300]'
            }`}
          >
            <span>AI Tools</span>
            {isToolsActive && (
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#3A10E5] dark:bg-[#FFD300]" />
            )}
          </Link>
          <button
            onClick={handleRequestRoadmap}
            type="button"
            className="h-full flex items-center gap-1.5 px-1 text-sm font-semibold text-[#10162F] dark:text-slate-200 hover:text-[#3A10E5] dark:hover:text-[#FFD300] transition-colors cursor-pointer"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#3A10E5] dark:text-[#FFD300]" />
            <span>Request</span>
          </button>
        </nav>

        {/* Right Actions: Clean .cc-btn-secondary */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Saved [N] Button */}
          <button
            onClick={() => openSavedModal('library')}
            type="button"
            className="cc-btn-secondary px-3 py-1.5 text-xs font-display font-semibold gap-1.5"
            aria-label={`Open Saved Library (${totalSavedCount} saved items)`}
            title="Saved Steps, Prompts & Local Backup"
          >
            <Bookmark
              className={`h-3.5 w-3.5 transition-colors ${
                totalSavedCount > 0 ? 'fill-[#FFD300] text-[#10162F]' : 'text-[#10162F] dark:text-slate-300'
              }`}
            />
            <span className="font-display">Saved</span>
            <span className="font-mono text-[11px] font-bold">
              [{totalSavedCount}]
            </span>
          </button>

          {/* GitHub Button */}
          <a
            href={githubRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Star on GitHub"
            className="cc-btn-secondary hidden sm:inline-flex px-3 py-1.5 text-xs font-display font-semibold gap-1.5"
          >
            <Star className="h-3.5 w-3.5 fill-[#FFD300] text-[#10162F]" />
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
            className="md:hidden cc-btn-secondary h-8 w-8 p-0"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b-2 border-[#10162F] dark:border-[#263159] bg-[#FFF8F2] dark:bg-[#0B1021] px-4 pt-4 pb-6 space-y-2.5 font-display shadow-lg">
          {/* Mobile Search Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openCommandPalette();
            }}
            type="button"
            className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-bold rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-white shadow-[2px_2px_0px_0px_#10162F] mb-3 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-[#3A10E5] dark:text-[#FFD300]" />
              <span>Search everything...</span>
            </div>
            <kbd className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-[#FFD300] text-[#10162F] border border-[#10162F] font-bold">
              {shortcutBadge}
            </kbd>
          </button>

          <Link
            to="/roadmaps"
            onClick={() => {
              setMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent('useai_route_changed', { detail: { pathname: '/roadmaps' } }));
            }}
            className={`block px-3.5 py-2 text-sm font-bold rounded-[4px] border-2 transition-all ${
              isRoadmapsActive
                ? 'bg-[#3A10E5] text-white border-[#10162F] shadow-[2px_2px_0px_0px_#10162F]'
                : 'border-transparent text-[#10162F] dark:text-white hover:bg-[#F5EFE6] dark:hover:bg-[#131A33]'
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
            className={`block px-3.5 py-2 text-sm font-bold rounded-[4px] border-2 transition-all ${
              isPromptsActive
                ? 'bg-[#3A10E5] text-white border-[#10162F] shadow-[2px_2px_0px_0px_#10162F]'
                : 'border-transparent text-[#10162F] dark:text-white hover:bg-[#F5EFE6] dark:hover:bg-[#131A33]'
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
            className={`block px-3.5 py-2 text-sm font-bold rounded-[4px] border-2 transition-all ${
              isToolsActive
                ? 'bg-[#3A10E5] text-white border-[#10162F] shadow-[2px_2px_0px_0px_#10162F]'
                : 'border-transparent text-[#10162F] dark:text-white hover:bg-[#F5EFE6] dark:hover:bg-[#131A33]'
            }`}
          >
            AI Tools
          </Link>
          <button
            onClick={handleRequestRoadmap}
            type="button"
            className="w-full text-left px-3.5 py-2 text-sm font-bold rounded-[4px] border-2 border-transparent text-[#10162F] dark:text-white hover:bg-[#F5EFE6] dark:hover:bg-[#131A33] cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="h-4 w-4 text-[#3A10E5] dark:text-[#FFD300]" />
            <span>Request Roadmap</span>
          </button>

          <div className="pt-3 border-t-2 border-[#10162F] dark:border-[#263159]">
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
