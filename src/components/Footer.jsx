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
    <footer className="w-full border-t-2 border-[#10162F] dark:border-[#263159] bg-[#FFF8F2] dark:bg-[#0B1021] mt-20 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b-2 border-[#10162F]/15 dark:border-white/10">
          {/* Logo & description */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 select-none">
              <span className="font-display font-bold text-lg tracking-tight text-[#10162F] dark:text-white">
                useai
              </span>
              <span className="bg-[#FFD300] text-[#10162F] border-2 border-[#10162F] font-mono font-bold px-1.5 py-0.5 text-xs rounded-[3px] shadow-[1px_1px_0px_0px_#10162F]">
                .sh
              </span>
            </div>
            <p className="text-xs text-[#10162F]/70 dark:text-slate-400 max-w-sm font-sans leading-relaxed">
              Utilitarian, step-by-step developer roadmaps and workflows for modern AI tools. Free and open-source.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#10162F] dark:text-slate-200 font-display font-bold">
            <Link
              to="/roadmaps"
              className="hover:text-[#3A10E5] dark:hover:text-[#FFD300] transition-colors"
            >
              ROADMAPS
            </Link>
            <Link
              to="/prompts"
              className="hover:text-[#3A10E5] dark:hover:text-[#FFD300] transition-colors"
            >
              PROMPTS
            </Link>
            <Link
              to="/tools"
              className="hover:text-[#3A10E5] dark:hover:text-[#FFD300] transition-colors"
            >
              AI TOOLS
            </Link>
            <button
              onClick={handleRequestRoadmap}
              className="hover:text-[#3A10E5] dark:hover:text-[#FFD300] transition-colors cursor-pointer"
            >
              REQUEST
            </button>
            <a
              href={githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3A10E5] dark:hover:text-[#FFD300] transition-colors"
            >
              GITHUB
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-[#10162F]/70 dark:text-slate-400 font-sans">
          <div>
            &copy; {new Date().getFullYear()} useai.sh. Open-source under MIT License.
          </div>

          <div className="flex items-center gap-4 font-mono text-xs">
            <a
              href="https://opensource.org/licenses/MIT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#10162F] dark:text-slate-300 hover:text-[#3A10E5] dark:hover:text-[#FFD300] underline font-bold"
            >
              MIT LICENSE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
