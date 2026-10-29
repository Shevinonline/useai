import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, ArrowLeft, Compass, Sparkles, BookOpen } from 'lucide-react';

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    document.title = '404 — Workflow Node Not Found — useai.sh';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 py-16">
      <div className="max-w-xl w-full text-center space-y-6">
        {/* Terminal Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 dark:text-red-400 text-xs font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span>STATUS: 404_NODE_NOT_FOUND</span>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-app-text tracking-tight">
            Workflow Node Not Found
          </h1>
          <p className="text-sm sm:text-base text-app-muted font-sans max-w-md mx-auto leading-relaxed">
            The curriculum node or route you requested does not exist in the active graph.
          </p>
        </div>

        {/* Developer Terminal Box */}
        <div className="text-left rounded-lg border border-app-border bg-app-surface shadow-lg overflow-hidden font-mono text-xs">
          {/* Terminal Titlebar */}
          <div className="px-4 py-2.5 bg-app-bg border-b border-app-border flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            </div>
            <span className="text-[11px] text-app-muted font-mono">useai.sh &bull; router-error</span>
          </div>

          {/* Terminal Body */}
          <div className="p-4 space-y-2 text-app-muted leading-relaxed select-text">
            <div className="text-app-text font-semibold flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5 text-brand-accent shrink-0" />
              <span>$ useai resolve route --target=&quot;{location.pathname}&quot;</span>
            </div>
            <p className="text-red-400 font-medium">
              [FATAL 404] Route identifier could not be reconciled.
            </p>
            <p className="text-app-muted/80">
              Graph Status: UNRESOLVED_DEPENDENCY (path mismatch)
            </p>
            <p className="text-brand-accent/90">
              Suggestion: Re-route back to registered roadmaps or search with Cmd+K.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/roadmaps"
            className="px-4 py-2 rounded-lg text-xs font-semibold border border-brand-accent bg-brand-accent text-white hover:opacity-90 inline-flex items-center gap-2 shadow-xs transition-opacity duration-150"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Roadmaps</span>
          </Link>

          <Link
            to="/prompts"
            className="px-4 py-2 rounded-lg text-xs font-semibold border border-app-border bg-app-surface text-app-text hover:border-brand-accent/60 inline-flex items-center gap-1.5 transition-colors duration-150"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-accent" />
            <span>Browse Prompts</span>
          </Link>

          <Link
            to="/tools"
            className="px-4 py-2 rounded-lg text-xs font-semibold border border-app-border bg-app-surface text-app-text hover:border-brand-accent/60 inline-flex items-center gap-1.5 transition-colors duration-150"
          >
            <Compass className="h-3.5 w-3.5 text-brand-accent" />
            <span>AI Tools</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
