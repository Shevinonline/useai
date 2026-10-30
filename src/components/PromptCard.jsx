import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Copy,
  Check,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Terminal,
  CheckCircle2,
  Sliders,
  Layers,
  Bookmark,
  Compass
} from 'lucide-react';
import { useWorkspace } from '../context/WorkspaceContext';
import { generatePromptDeepLinks } from '../utils/promptLinks';
import { sanitizeExternalUrl } from '../utils/validation';

export default function PromptCard({ prompt }) {
  const { isPromptBookmarked, togglePromptBookmark } = useWorkspace();
  const isSaved = isPromptBookmarked(prompt.id);

  // Initialize variable selections from defaults
  const [selectedVariables, setSelectedVariables] = useState(() => {
    const initial = {};
    if (Array.isArray(prompt.variables)) {
      prompt.variables.forEach((v) => {
        initial[v.id] = v.defaultOption || (v.options && v.options[0]) || '';
      });
    }
    return initial;
  });

  const [copied, setCopied] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  // Compute live prompt text with replaced variables
  const livePromptText = useMemo(() => {
    let text = prompt.template || '';
    if (Array.isArray(prompt.variables)) {
      prompt.variables.forEach((v) => {
        const val = selectedVariables[v.id] || v.defaultOption || `[${v.id}]`;
        text = text.replaceAll(`[${v.id}]`, val);
      });
    }
    return text;
  }, [prompt.template, prompt.variables, selectedVariables]);

  // Compute 1-click deep links for ChatGPT & Perplexity
  const deepLinks = useMemo(() => {
    return generatePromptDeepLinks(livePromptText);
  }, [livePromptText]);

  // Handle variable chip selection
  const handleVariableChange = (varId, optionValue) => {
    setSelectedVariables((prev) => ({
      ...prev,
      [varId]: optionValue
    }));
  };

  // Copy customized prompt text
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(livePromptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy prompt to clipboard', err);
    }
  };

  const handleToggleBookmark = () => {
    togglePromptBookmark({
      id: prompt.id,
      stepId: prompt.stepId,
      stepNumber: prompt.stepNumber,
      title: prompt.title,
      roadmapId: prompt.roadmapId,
      roadmapTitle: prompt.roadmapTitle,
      template: livePromptText || prompt.template,
      recommendedModel: prompt.recommendedModel,
      variables: prompt.variables,
      expectedOutputs: prompt.expectedOutputs
    });
  };

  const hasVariables = Array.isArray(prompt.variables) && prompt.variables.length > 0;
  const hasExpectedOutputs = Array.isArray(prompt.expectedOutputs) && prompt.expectedOutputs.length > 0;

  return (
    <article className="group flex flex-col justify-between rounded-xl border border-app-border bg-app-surface transition-all duration-150 hover:border-brand-accent/50 shadow-xs overflow-hidden">
      {/* 1. Card Top Header */}
      <div className="p-4 sm:p-5 pb-3 border-b border-app-border/70 bg-app-surface/90">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          {/* Roadmap Parent Pill */}
          <Link
            to={`/roadmap/${prompt.roadmapId}`}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-app-bg border border-app-border text-app-muted hover:text-brand-accent hover:border-brand-accent/40 transition-colors duration-150 font-sans"
            title={`Part of ${prompt.roadmapTitle}`}
          >
            <Layers className="h-3 w-3 text-brand-accent/80 shrink-0" />
            <span className="truncate max-w-[180px] sm:max-w-[220px]">{prompt.roadmapTitle}</span>
          </Link>

          {/* Action links */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleToggleBookmark}
              title={isSaved ? 'Remove from Saved' : 'Bookmark Prompt'}
              aria-label={isSaved ? 'Remove from Saved' : 'Bookmark Prompt'}
              className={`h-7 px-2 rounded-md border text-xs font-semibold inline-flex items-center gap-1 transition-all duration-150 cursor-pointer ${
                isSaved
                  ? 'border-amber-400/80 bg-amber-500/15 text-amber-500 shadow-2xs'
                  : 'border-app-border bg-app-bg text-app-muted hover:text-app-text hover:border-brand-accent/40'
              }`}
            >
              <Bookmark className={`h-3 w-3 ${isSaved ? 'fill-amber-500 text-amber-500' : ''}`} />
              <span className="text-[11px] font-sans">{isSaved ? 'Saved' : 'Save'}</span>
            </button>

            {/* Deep Link to Roadmap Node */}
            <Link
              to={`/roadmap/${prompt.roadmapId}?step=${prompt.stepId}&tab=promptLab`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-brand-accent hover:underline transition-colors duration-150 font-sans group/link"
            >
              <span>View in Roadmap</span>
              <ExternalLink className="h-3 w-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-150" />
            </Link>
          </div>
        </div>

        {/* Prompt Title */}
        <h3 className="font-heading font-semibold text-base sm:text-lg text-app-text tracking-tight mb-2 leading-snug">
          {prompt.title}
        </h3>

        {/* Tools Badges */}
        {prompt.recommendedTools && prompt.recommendedTools.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5">
            {prompt.recommendedTools.slice(0, 4).map((tool, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-app-bg border border-app-border text-app-muted"
              >
                {tool}
              </span>
            ))}
            {prompt.recommendedTools.length > 4 && (
              <span className="text-[10px] font-mono text-app-muted">
                +{prompt.recommendedTools.length - 4}
              </span>
            )}
          </div>
        )}
      </div>

      {/* 2. Interactive Variable Customization Chips */}
      {hasVariables && (
        <div className="px-4 sm:px-5 py-3.5 bg-app-bg/50 border-b border-app-border/70 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-app-text font-sans">
              <Sliders className="h-3.5 w-3.5 text-brand-accent" />
              <span>Customize Variables</span>
            </div>
            <span className="text-[11px] text-app-muted font-sans">Updates live in template</span>
          </div>

          <div className="space-y-2">
            {prompt.variables.map((variable) => {
              const currentChoice = selectedVariables[variable.id] || variable.defaultOption;

              return (
                <div key={variable.id} className="space-y-1">
                  <span className="text-[11px] font-medium text-app-muted block font-sans">
                    {variable.label}:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {variable.options.map((opt) => {
                      const isSelected = currentChoice === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleVariableChange(variable.id, opt)}
                          className={`px-2.5 py-1 text-xs rounded-md border transition-all duration-150 cursor-pointer font-sans ${
                            isSelected
                              ? 'border-brand-accent bg-brand-accent/15 text-brand-accent font-semibold shadow-2xs'
                              : 'border-app-border bg-app-surface text-app-muted hover:border-brand-accent/40 hover:text-app-text'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. Live Prompt Code Block */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div className="relative rounded-lg border border-app-border bg-[#0D0E12] overflow-hidden shadow-xs">
          {/* Code Bar Header */}
          <div className="px-3.5 py-2 border-b border-white/10 bg-white/5 flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-1.5 text-white/70">
              <Terminal className="h-3.5 w-3.5 text-brand-accent" />
              <span className="font-mono text-[11px] truncate max-w-[200px] sm:max-w-[280px]">
                {prompt.recommendedModel}
              </span>
            </div>
            <span className="text-white/40 font-mono text-[10px]">PROMPT</span>
          </div>

          {/* Monospace Prompt Body */}
          <pre className="p-3.5 sm:p-4 text-[#F1F5F9] font-mono text-xs sm:text-[13px] leading-relaxed whitespace-pre-wrap select-all overflow-x-auto max-h-64 sm:max-h-72 scrollbar-thin">
            {livePromptText}
          </pre>
        </div>

        {/* 4. Expected Output Accordion (If defined) */}
        {hasExpectedOutputs && (
          <div className="mt-3">
            <button
              type="button"
              onClick={() => setShowOutput((prev) => !prev)}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-md border border-app-border bg-app-bg hover:border-brand-accent/40 text-app-muted hover:text-app-text transition-colors duration-150 cursor-pointer font-sans"
            >
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-brand-accent" />
                <span>Expected Output Verification ({prompt.expectedOutputs.length})</span>
              </div>
              {showOutput ? (
                <ChevronUp className="h-3.5 w-3.5 text-app-muted" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5 text-app-muted" />
              )}
            </button>

            {showOutput && (
              <div className="mt-2 p-3.5 rounded-lg border border-app-border bg-app-bg text-left animate-in fade-in duration-150">
                <div className="space-y-2">
                  {prompt.expectedOutputs.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-app-text font-sans leading-relaxed">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 5. Action Footer */}
      <div className="px-4 sm:px-5 py-3 border-t border-app-border bg-app-surface/60 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-app-muted">
            Node #{prompt.stepNumber}
          </span>

          {/* 1-Click Run in AI Action Links */}
          <div className="flex items-center gap-1.5 pl-2 border-l border-app-border">
            <a
              href={sanitizeExternalUrl(deepLinks.chatgpt)}
              target="_blank"
              rel="noopener noreferrer"
              title="Run customized prompt directly in ChatGPT (opens new tab)"
              aria-label="Run customized prompt in ChatGPT"
              className="inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] font-medium border border-app-border bg-app-bg text-app-muted hover:text-emerald-500 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-150 font-sans cursor-pointer group"
            >
              <Sparkles className="h-3 w-3 text-emerald-500 shrink-0" />
              <span>ChatGPT</span>
              <ExternalLink className="h-2.5 w-2.5 opacity-60 group-hover:opacity-100" />
            </a>

            <a
              href={sanitizeExternalUrl(deepLinks.perplexity)}
              target="_blank"
              rel="noopener noreferrer"
              title="Run customized prompt directly in Perplexity (opens new tab)"
              aria-label="Run customized prompt in Perplexity"
              className="inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] font-medium border border-app-border bg-app-bg text-app-muted hover:text-cyan-500 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-150 font-sans cursor-pointer group"
            >
              <Compass className="h-3 w-3 text-cyan-500 shrink-0" />
              <span>Perplexity</span>
              <ExternalLink className="h-2.5 w-2.5 opacity-60 group-hover:opacity-100" />
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Bookmark Button */}
          <button
            type="button"
            onClick={handleToggleBookmark}
            title={isSaved ? 'Prompt Saved' : 'Bookmark Prompt'}
            className={`h-8 px-2.5 rounded-md border text-xs font-semibold inline-flex items-center gap-1.5 transition-all duration-150 cursor-pointer shadow-2xs font-sans ${
              isSaved
                ? 'border-amber-400 bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-500/50'
                : 'border-app-border bg-app-bg text-app-muted hover:text-app-text hover:border-brand-accent/40'
            }`}
          >
            <Bookmark className={`h-3.5 w-3.5 ${isSaved ? 'fill-amber-500 text-amber-500' : ''}`} />
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all duration-150 cursor-pointer shadow-xs font-sans ${
              copied
                ? 'bg-emerald-500/15 border border-emerald-500 text-emerald-600 dark:text-emerald-400'
                : 'border border-brand-accent bg-brand-accent text-white hover:opacity-90 active:scale-98'
            }`}
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                <span>✓ Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy Prompt</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
