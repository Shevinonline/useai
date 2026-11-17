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
    <article className="workspace-card group flex flex-col justify-between overflow-hidden text-left">
      {/* 1. Card Top Header */}
      <div className="p-4 sm:p-5 pb-3.5 border-b border-zinc-200 dark:border-zinc-800 bg-[#F9F8F6]/70 dark:bg-zinc-900/40">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          {/* Roadmap Parent Tag */}
          <Link
            to={`/roadmap/${prompt.roadmapId}`}
            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[3px] text-[11px] font-mono bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-purple-600 transition-colors"
            title={`Part of ${prompt.roadmapTitle}`}
          >
            <Layers className="h-3 w-3 text-purple-600 dark:text-purple-400 shrink-0" />
            <span className="truncate max-w-[180px] sm:max-w-[220px] font-bold">{prompt.roadmapTitle}</span>
          </Link>

          {/* Action links */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleToggleBookmark}
              title={isSaved ? 'Remove from Saved' : 'Bookmark Prompt'}
              aria-label={isSaved ? 'Remove from Saved' : 'Bookmark Prompt'}
              className="workspace-btn h-6 px-2 text-[11px] font-mono gap-1"
            >
              <Bookmark className={`h-3 w-3 ${isSaved ? 'fill-purple-600 text-purple-600' : ''}`} />
              <span>{isSaved ? 'SAVED' : 'SAVE'}</span>
            </button>

            {/* Deep Link to Roadmap Node */}
            <Link
              to={`/roadmap/${prompt.roadmapId}?step=${prompt.stepId}&tab=promptLab`}
              className="inline-flex items-center gap-1 text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <span>NODE →</span>
            </Link>
          </div>
        </div>

        {/* Prompt Title */}
        <h3 className="font-heading font-bold text-base sm:text-lg text-zinc-900 dark:text-zinc-100 tracking-tight mb-2 leading-snug">
          {prompt.title}
        </h3>

        {/* Tools Badges */}
        {prompt.recommendedTools && prompt.recommendedTools.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5">
            {prompt.recommendedTools.slice(0, 4).map((tool, idx) => (
              <span
                key={idx}
                className="rounded-[3px] border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-zinc-600 dark:text-zinc-400"
              >
                {tool}
              </span>
            ))}
            {prompt.recommendedTools.length > 4 && (
              <span className="text-[11px] font-mono text-zinc-500">
                +{prompt.recommendedTools.length - 4}
              </span>
            )}
          </div>
        )}
      </div>

      {/* 2. Interactive Variable Customization Chips */}
      {hasVariables && (
        <div className="px-4 sm:px-5 py-3 bg-[#F2F0EC]/60 dark:bg-zinc-900/30 border-b border-zinc-200 dark:border-zinc-800 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100">
              <Sliders className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
              <span>CUSTOMIZE VARIABLES</span>
            </div>
            <span className="text-[11px] font-mono text-zinc-500">Live preview</span>
          </div>

          <div className="space-y-2">
            {prompt.variables.map((variable) => {
              const currentChoice = selectedVariables[variable.id] || variable.defaultOption;

              return (
                <div key={variable.id} className="space-y-1">
                  <span className="text-[11px] font-mono font-semibold text-zinc-600 dark:text-zinc-400 block">
                    [{variable.label}]:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {variable.options.map((opt) => {
                      const isSelected = currentChoice === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleVariableChange(variable.id, opt)}
                          className={`px-2 py-0.5 text-xs font-mono rounded-[3px] border transition-all cursor-pointer ${
                            isSelected
                              ? 'border-2 border-zinc-900 dark:border-purple-500 bg-zinc-900 text-white dark:bg-purple-600 font-bold shadow-[1px_1px_0px_0px_#18181B] dark:shadow-none'
                              : 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:border-zinc-500'
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
        <div className="rounded-[4px] border border-zinc-900 dark:border-zinc-700 bg-[#0E0E12] overflow-hidden shadow-xs">
          {/* Code Bar Header */}
          <div className="px-3.5 py-1.5 border-b border-zinc-800 bg-[#141418] flex items-center justify-between text-[11px] font-mono">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <Terminal className="h-3.5 w-3.5 text-purple-400" />
              <span className="truncate max-w-[200px] sm:max-w-[280px]">
                {prompt.recommendedModel}
              </span>
            </div>
            <span className="text-zinc-500 text-[10px] uppercase">prompt_blueprint.md</span>
          </div>

          {/* Monospace Prompt Body */}
          <pre className="p-3.5 sm:p-4 text-zinc-100 font-mono text-xs sm:text-[13px] leading-relaxed whitespace-pre-wrap select-all overflow-x-auto max-h-64 sm:max-h-72 scrollbar-thin">
            {livePromptText}
          </pre>
        </div>

        {/* 4. Expected Output Accordion (If defined) */}
        {hasExpectedOutputs && (
          <div className="mt-3">
            <button
              type="button"
              onClick={() => setShowOutput((prev) => !prev)}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-mono font-bold rounded-[3px] border border-zinc-300 dark:border-zinc-800 bg-[#F9F8F6] dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                <span>EXPECTED OUTPUT CHECKS ({prompt.expectedOutputs.length})</span>
              </div>
              {showOutput ? (
                <ChevronUp className="h-3.5 w-3.5 text-zinc-500" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5 text-zinc-500" />
              )}
            </button>

            {showOutput && (
              <div className="mt-1.5 p-3 rounded-[3px] border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-[#121215] text-left animate-in fade-in duration-100">
                <div className="space-y-1.5 font-sans">
                  {prompt.expectedOutputs.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
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
      <div className="px-4 sm:px-5 py-3 border-t border-zinc-200 dark:border-zinc-800 bg-[#F9F8F6]/60 dark:bg-zinc-900/40 flex flex-wrap items-center justify-between gap-2.5 font-mono">
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-zinc-500">
            NODE #{prompt.stepNumber}
          </span>

          {/* 1-Click Run in AI Links */}
          <div className="flex items-center gap-1.5 pl-2 border-l border-zinc-300 dark:border-zinc-800">
            <a
              href={sanitizeExternalUrl(deepLinks.chatgpt)}
              target="_blank"
              rel="noopener noreferrer"
              title="Run in ChatGPT"
              aria-label="Run prompt in ChatGPT"
              className="workspace-btn px-2 py-0.5 text-[11px] gap-1 font-bold text-emerald-700 dark:text-emerald-400"
            >
              <Sparkles className="h-2.5 w-2.5" />
              <span>CHATGPT ↗</span>
            </a>

            <a
              href={sanitizeExternalUrl(deepLinks.perplexity)}
              target="_blank"
              rel="noopener noreferrer"
              title="Run in Perplexity"
              aria-label="Run prompt in Perplexity"
              className="workspace-btn px-2 py-0.5 text-[11px] gap-1 font-bold text-cyan-700 dark:text-cyan-400"
            >
              <Compass className="h-2.5 w-2.5" />
              <span>PERPLEXITY ↗</span>
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="workspace-btn px-3 py-1.5 text-xs font-bold gap-1 bg-zinc-900 text-white dark:bg-purple-600"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span>COPIED!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>COPY PROMPT</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
}
