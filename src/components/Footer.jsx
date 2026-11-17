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
    <footer className="w-full border-t border-zinc-900 dark:border-zinc-800 bg-[#F9F8F6]/95 dark:bg-[#0B0B0D]/95 mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-300 dark:border-zinc-800">
          {/* Logo & description */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 select-none">
              <div className="h-6 w-6 rounded-[3px] border border-zinc-900 dark:border-purple-500/70 bg-zinc-900 text-white dark:bg-purple-600 dark:text-white flex items-center justify-center font-mono text-[11px] font-bold shrink-0">
                &gt;_
              </div>
              <span className="font-heading font-extrabold text-sm tracking-tight text-zinc-900 dark:text-zinc-100">
                useai
              </span>
              <span className="bg-zinc-900 text-white dark:bg-purple-600 font-mono text-[10px] font-semibold px-1 py-0.5 rounded-[2px] tracking-wider">
                .sh
              </span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-sm font-sans leading-relaxed">
              Utilitarian, step-by-step developer roadmaps and workflows for modern AI tools. Free and open-source.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-600 dark:text-zinc-400 font-mono font-medium">
            <Link
              to="/roadmaps"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              ROADMAPS
            </Link>
            <Link
              to="/prompts"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              PROMPTS
            </Link>
            <Link
              to="/tools"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              AI TOOLS
            </Link>
            <button
              onClick={handleRequestRoadmap}
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
            >
              REQUEST ROADMAP
            </button>
            <a
              href={githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              GITHUB
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
          <div className="flex items-center gap-3">
            <span>&copy; {new Date().getFullYear()} useai.sh. Designed for engineers.</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Version Status Badge */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] border border-zinc-300 dark:border-zinc-800 bg-[#F2F0EC] dark:bg-zinc-900 text-[11px] text-zinc-700 dark:text-zinc-300 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>v2.0 • ALL SYSTEMS OPERATIONAL</span>
            </span>

            <span className="text-zinc-400">•</span>

            {/* MIT License */}
            <a
              href="https://opensource.org/licenses/MIT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline transition-colors"
            >
              MIT LICENSE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
