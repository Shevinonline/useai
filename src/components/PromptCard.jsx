import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Copy,
  Check,
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
    <article className="cc-card group flex flex-col justify-between overflow-hidden text-left">
      {/* 1. Card Top Header */}
      <div className="p-5 pb-4 border-b-2 border-[#10162F] dark:border-[#3B497E] bg-[#F5EFE6] dark:bg-[#131A33]">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          {/* Roadmap Parent Tag */}
          <Link
            to={`/roadmap/${prompt.roadmapId}`}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[3px] text-xs font-mono font-bold bg-white dark:bg-[#0B1021] border-2 border-[#10162F] dark:border-[#3B497E] text-[#10162F] dark:text-white hover:text-[#3A10E5] transition-colors shadow-[1px_1px_0px_0px_#10162F]"
            title={`Part of ${prompt.roadmapTitle}`}
          >
            <Layers className="h-3.5 w-3.5 text-[#3A10E5] dark:text-[#FFD300] shrink-0" />
            <span className="truncate max-w-[180px] sm:max-w-[220px]">{prompt.roadmapTitle}</span>
          </Link>

          {/* Action links */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleToggleBookmark}
              title={isSaved ? 'Remove from Saved' : 'Bookmark Prompt'}
              aria-label={isSaved ? 'Remove from Saved' : 'Bookmark Prompt'}
              className={`cc-btn-secondary h-7 px-2 text-xs font-mono font-bold gap-1 ${
                isSaved ? 'bg-[#FFD300] text-[#10162F]' : ''
              }`}
            >
              <Bookmark className={`h-3 w-3 ${isSaved ? 'fill-[#10162F] text-[#10162F]' : ''}`} />
              <span>{isSaved ? 'SAVED' : 'SAVE'}</span>
            </button>

            {/* Deep Link to Roadmap Node */}
            <Link
              to={`/roadmap/${prompt.roadmapId}?step=${prompt.stepId}&tab=promptLab`}
              className="inline-flex items-center gap-1 text-xs font-display font-bold text-[#10162F] dark:text-slate-200 hover:text-[#3A10E5] dark:hover:text-[#FFD300] transition-colors"
            >
              <span>NODE →</span>
            </Link>
          </div>
        </div>

        {/* Prompt Title */}
        <h3 className="font-display font-bold text-base sm:text-lg text-[#10162F] dark:text-white tracking-tight mb-2 leading-snug">
          {prompt.title}
        </h3>

        {/* Tools Badges */}
        {prompt.recommendedTools && prompt.recommendedTools.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 mt-2">
            {prompt.recommendedTools.slice(0, 4).map((tool, idx) => (
              <span
                key={idx}
                className="bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-slate-200 border border-[#10162F]/30 dark:border-[#3B497E] font-mono text-xs px-2 py-0.5 rounded-[3px]"
              >
                {tool}
              </span>
            ))}
            {prompt.recommendedTools.length > 4 && (
              <span className="text-xs font-mono text-[#10162F]/60 dark:text-slate-400">
                +{prompt.recommendedTools.length - 4}
              </span>
            )}
          </div>
        )}
      </div>

      {/* 2. Interactive Variable Customization Chips */}
      {hasVariables && (
        <div className="px-5 py-3.5 bg-[#FFF8F2] dark:bg-[#0B1021] border-b-2 border-[#10162F] dark:border-[#3B497E] space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-display font-bold text-[#10162F] dark:text-white">
              <Sliders className="h-3.5 w-3.5 text-[#3A10E5] dark:text-[#FFD300]" />
              <span>CUSTOMIZE VARIABLES</span>
            </div>
            <span className="text-xs font-mono text-[#10162F]/60 dark:text-slate-400">Live preview</span>
          </div>

          <div className="space-y-2">
            {prompt.variables.map((variable) => {
              const currentChoice = selectedVariables[variable.id] || variable.defaultOption;

              return (
                <div key={variable.id} className="space-y-1">
                  <span className="text-xs font-mono font-bold text-[#10162F] dark:text-slate-300 block">
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
                          className={`px-2.5 py-1 text-xs font-mono rounded-[3px] border-2 transition-all cursor-pointer font-bold ${
                            isSelected
                              ? 'border-[#10162F] bg-[#3A10E5] text-white shadow-[1px_1px_0px_0px_#10162F]'
                              : 'border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-slate-300 hover:-translate-y-0.5'
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
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] bg-[#10162F] dark:bg-[#0B1021] overflow-hidden shadow-[3px_3px_0px_0px_#10162F] dark:shadow-[3px_3px_0px_0px_#000000]">
          {/* Code Bar Header */}
          <div className="px-3.5 py-2 border-b border-white/10 bg-[#0B1021] flex items-center justify-between text-xs font-mono text-slate-300">
            <div className="flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-[#FFD300]" />
              <span className="truncate max-w-[200px] sm:max-w-[280px]">
                {prompt.recommendedModel}
              </span>
            </div>
            <span className="text-slate-400 text-[11px] uppercase">prompt_blueprint.md</span>
          </div>

          {/* Monospace Prompt Body */}
          <pre className="p-4 text-white font-mono text-xs sm:text-[13px] leading-relaxed whitespace-pre-wrap select-all overflow-x-auto max-h-64 sm:max-h-72">
            {livePromptText}
          </pre>
        </div>

        {/* 4. Expected Output Accordion */}
        {hasExpectedOutputs && (
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setShowOutput((prev) => !prev)}
              className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-mono font-bold rounded-[3px] border-2 border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#131A33] text-[#10162F] dark:text-white shadow-[2px_2px_0px_0px_#10162F] transition-all cursor-pointer"
            >
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#3A10E5] dark:text-[#FFD300]" />
                <span>EXPECTED OUTPUT CHECKS ({prompt.expectedOutputs.length})</span>
              </div>
              {showOutput ? (
                <ChevronUp className="h-4 w-4 text-[#10162F] dark:text-white" />
              ) : (
                <ChevronDown className="h-4 w-4 text-[#10162F] dark:text-white" />
              )}
            </button>

            {showOutput && (
              <div className="mt-2 p-3.5 rounded-[4px] border-2 border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#131A33] text-left">
                <div className="space-y-2 font-sans">
                  {prompt.expectedOutputs.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#10162F]/80 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-[#008A5E] shrink-0 mt-0.5" />
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
      <div className="px-5 py-3.5 border-t-2 border-[#10162F] dark:border-[#3B497E] bg-[#F5EFE6] dark:bg-[#131A33] flex flex-wrap items-center justify-between gap-3 font-display">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-[#10162F]/60 dark:text-slate-400">
            NODE #{prompt.stepNumber}
          </span>

          {/* 1-Click Run in AI Links */}
          <div className="flex items-center gap-1.5 pl-2 border-l border-[#10162F]/20 dark:border-white/20">
            <a
              href={sanitizeExternalUrl(deepLinks.chatgpt)}
              target="_blank"
              rel="noopener noreferrer"
              title="Run in ChatGPT"
              aria-label="Run prompt in ChatGPT"
              className="cc-btn-secondary px-2.5 py-1 text-xs gap-1 font-bold text-[#008A5E]"
            >
              <Sparkles className="h-3 w-3" />
              <span>ChatGPT ↗</span>
            </a>

            <a
              href={sanitizeExternalUrl(deepLinks.perplexity)}
              target="_blank"
              rel="noopener noreferrer"
              title="Run in Perplexity"
              aria-label="Run prompt in Perplexity"
              className="cc-btn-secondary px-2.5 py-1 text-xs gap-1 font-bold text-[#3A10E5] dark:text-[#FFD300]"
            >
              <Compass className="h-3 w-3" />
              <span>Perplexity ↗</span>
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="cc-btn-primary px-4 py-1.5 text-xs font-bold gap-1.5"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-[#008A5E]" />
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
