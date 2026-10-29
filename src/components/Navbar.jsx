import { useState, useEffect } from 'react';
import { Sun, Moon, Terminal, Star, Menu, X, Sparkles, Search, Bookmark } from 'lucide-react';
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
    <header className="sticky top-0 z-50 w-full border-b border-app-border bg-app-surface/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Left: Brand Logo & Desktop Nav Links */}
        <div className="flex items-center gap-5 sm:gap-6 shrink-0 whitespace-nowrap">
          <Link
            to="/"
            onClick={() => {
              setMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent('useai_route_changed', { detail: { pathname: '/' } }));
            }}
            className="flex items-center gap-1.5 group select-none whitespace-nowrap shrink-0"
            aria-label="useai.sh homepage"
          >
            <div className="h-6 w-6 rounded border border-app-border bg-app-bg flex items-center justify-center text-brand-accent group-hover:border-brand-accent transition-colors duration-150">
              <Terminal className="h-3.5 w-3.5" />
            </div>
            <span className="font-heading font-bold text-base tracking-tight text-app-text">
              useai
            </span>
            <span className="font-mono text-xs font-semibold px-1.5 py-0.5 rounded border border-brand-accent/50 bg-brand-accent/10 text-brand-accent">
              .sh
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 pl-2 font-sans whitespace-nowrap">
            <Link
              to="/roadmaps"
              onClick={() => {
                setMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent('useai_route_changed', { detail: { pathname: '/roadmaps' } }));
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap ${
                isRoadmapsActive
                  ? 'text-app-text bg-app-bg border border-app-border shadow-2xs'
                  : 'text-app-muted hover:text-app-text hover:bg-app-bg/60 border border-transparent'
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
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap ${
                isPromptsActive
                  ? 'text-app-text bg-app-bg border border-app-border shadow-2xs'
                  : 'text-app-muted hover:text-app-text hover:bg-app-bg/60 border border-transparent'
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
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap ${
                isToolsActive
                  ? 'text-app-text bg-app-bg border border-app-border shadow-2xs'
                  : 'text-app-muted hover:text-app-text hover:bg-app-bg/60 border border-transparent'
              }`}
            >
              AI Tools
            </Link>
            <button
              onClick={handleRequestRoadmap}
              className="px-3 py-1.5 text-xs font-semibold rounded-md text-app-muted hover:text-app-text hover:bg-app-bg/60 border border-transparent transition-colors duration-150 cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
            >
              <Sparkles className="h-3 w-3 text-brand-accent/80" />
              <span>Request Roadmap</span>
            </button>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 whitespace-nowrap">
          {/* Saved & Workspace Trigger */}
          <button
            onClick={() => openSavedModal('library')}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-app-border bg-app-surface hover:border-brand-accent/60 text-app-text hover:text-brand-accent text-xs font-semibold transition-all duration-150 group font-sans shadow-xs cursor-pointer whitespace-nowrap"
            aria-label={`Open Saved Library (${totalSavedCount} saved items)`}
            title="Saved Steps, Prompts & Local Backup"
          >
            <Bookmark
              className={`h-3.5 w-3.5 transition-colors ${
                totalSavedCount > 0 ? 'fill-amber-500 text-amber-500' : 'text-app-muted group-hover:text-brand-accent'
              }`}
            />
            <span className="font-sans">Saved</span>
            {totalSavedCount > 0 ? (
              <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-brand-accent/15 border border-brand-accent/30 text-brand-accent font-bold">
                {totalSavedCount}
              </span>
            ) : null}
          </button>

          {/* Star on GitHub Button */}
          <a
            href={githubRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Star on GitHub"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-app-border bg-app-surface hover:border-brand-accent text-app-text hover:text-brand-accent text-xs font-semibold transition-colors duration-150 group font-sans shadow-xs whitespace-nowrap"
          >
            <svg
              className="h-3.5 w-3.5 fill-current text-app-muted group-hover:text-brand-accent transition-colors duration-150"
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
            <span>Star on GitHub</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="h-8 w-8 inline-flex items-center justify-center rounded border border-app-border bg-app-surface hover:border-brand-accent hover:bg-brand-hover-bg text-app-muted hover:text-app-text transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            className="md:hidden h-8 w-8 inline-flex items-center justify-center rounded border border-app-border bg-app-surface hover:border-brand-accent text-app-muted hover:text-app-text transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-app-border bg-app-surface/98 px-4 pt-2 pb-4 space-y-1 font-sans shadow-lg animate-in fade-in duration-150">
          {/* Mobile Search Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openCommandPalette();
            }}
            type="button"
            className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold rounded-md border border-app-border bg-app-bg text-app-muted hover:text-app-text mb-2 cursor-pointer font-sans"
          >
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-brand-accent" />
              <span>Search everything...</span>
            </div>
            <kbd className="px-1.5 py-0.5 text-[11px] font-mono rounded border border-app-border bg-app-surface text-app-muted">
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
            className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold rounded-md border border-app-border bg-app-bg text-app-text hover:border-brand-accent mb-2 cursor-pointer font-sans"
          >
            <div className="flex items-center gap-2">
              <Bookmark
                className={`h-4 w-4 ${
                  totalSavedCount > 0 ? 'fill-amber-500 text-amber-500' : 'text-brand-accent'
                }`}
              />
              <span>Saved & Backup</span>
            </div>
            {totalSavedCount > 0 && (
              <span className="px-2 py-0.5 text-xs font-mono rounded-full bg-brand-accent/15 border border-brand-accent/30 text-brand-accent font-bold">
                {totalSavedCount}
              </span>
            )}
          </button>

          <Link
            to="/roadmaps"
            onClick={() => {
              setMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent('useai_route_changed', { detail: { pathname: '/roadmaps' } }));
            }}
            className={`block px-3 py-2 text-sm font-semibold rounded-md ${
              isRoadmapsActive
                ? 'bg-app-bg text-brand-accent border border-app-border'
                : 'text-app-muted hover:text-app-text hover:bg-app-bg'
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
            className={`block px-3 py-2 text-sm font-semibold rounded-md ${
              isPromptsActive
                ? 'bg-app-bg text-brand-accent border border-app-border'
                : 'text-app-muted hover:text-app-text hover:bg-app-bg'
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
            className={`block px-3 py-2 text-sm font-semibold rounded-md ${
              isToolsActive
                ? 'bg-app-bg text-brand-accent border border-app-border'
                : 'text-app-muted hover:text-app-text hover:bg-app-bg'
            }`}
          >
            AI Tools
          </Link>
          <button
            onClick={handleRequestRoadmap}
            className="w-full text-left px-3 py-2 text-sm font-semibold rounded-md text-app-muted hover:text-app-text hover:bg-app-bg cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-accent" />
            <span>Request Roadmap</span>
          </button>
          <div className="pt-2 border-t border-app-border">
            <a
              href={githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 w-full py-2 text-xs font-semibold rounded-md border border-app-border bg-app-bg hover:border-brand-accent text-app-text transition-colors duration-150"
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
