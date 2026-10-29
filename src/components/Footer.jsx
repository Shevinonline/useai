import { Terminal } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { sanitizeExternalUrl } from '../utils/validation';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const githubRepoUrl = sanitizeExternalUrl(import.meta.env.VITE_GITHUB_REPO_URL || 'https://github.com');

  const handleRequestRoadmap = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById('request-roadmap');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#request-roadmap');
    }
  };

  return (
    <footer className="w-full border-t border-app-border bg-app-surface/40 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-app-border">
          {/* Logo & description */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5">
              <div className="h-5 w-5 rounded border border-app-border bg-app-bg flex items-center justify-center text-brand-accent">
                <Terminal className="h-3 w-3" />
              </div>
              <span className="font-heading font-bold text-sm tracking-tight text-app-text">
                useai
              </span>
              <span className="font-mono text-[10px] font-semibold px-1 py-0.2 rounded border border-brand-accent/40 bg-brand-accent/10 text-brand-accent">
                .sh
              </span>
            </div>
            <p className="text-xs text-app-muted max-w-sm font-sans leading-relaxed">
              Utilitarian, step-by-step developer roadmaps and workflows for modern AI tools. Free and community-driven.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-app-muted font-medium font-sans">
            <Link
              to="/roadmaps"
              className="hover:text-app-text transition-colors duration-150"
            >
              Roadmaps
            </Link>
            <Link
              to="/prompts"
              className="hover:text-app-text transition-colors duration-150"
            >
              Prompts
            </Link>
            <Link
              to="/tools"
              className="hover:text-app-text transition-colors duration-150"
            >
              AI Tools
            </Link>
            <button
              onClick={handleRequestRoadmap}
              className="hover:text-app-text transition-colors duration-150 cursor-pointer"
            >
              Request Roadmap
            </button>
            <a
              href={githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-app-text transition-colors duration-150"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-app-muted font-sans">
          <div className="flex items-center gap-3">
            <span>&copy; {new Date().getFullYear()} useai.sh. Designed for engineers.</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Version Status Badge */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-app-border bg-app-bg text-[11px] text-app-muted font-sans">
              <span className="relative flex h-1.5 w-1.5 shrink-0 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span>v1.0 • All Systems Operational</span>
            </span>

            <span className="text-app-border">•</span>

            {/* MIT License Working Link */}
            <a
              href="https://opensource.org/licenses/MIT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-app-muted hover:text-app-text hover:underline transition-colors duration-150"
            >
              MIT License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
