import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Terminal,
  Bookmark,
  Compass,
  ArrowRight,
  Layers,
  CheckCircle
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
  const stepTargetUrl = `/roadmap/${prompt.roadmapId}?step=${prompt.stepId}&tab=promptLab`;

  return (
    <article className="cc-card group flex flex-col justify-between overflow-hidden text-left shadow-2xs">
      {/* 1. Card Top Header: Source Roadmap + Step Badge + Bookmark */}
      <div className="p-4 sm:p-5 pb-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#111827]">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-1.5 flex-wrap">
            {/* Roadmap Parent Tag */}
            <Link
              to={`/roadmap/${prompt.roadmapId}`}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-[#4F46E5] dark:hover:text-[#6366F1] transition-colors"
              title={`Part of ${prompt.roadmapTitle}`}
            >
              <Layers className="h-3 w-3 text-[#4F46E5] dark:text-[#6366F1] shrink-0" />
              <span className="truncate max-w-[170px] sm:max-w-[210px]">{prompt.roadmapTitle}</span>
            </Link>

            {/* Step badge */}
            <span className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-50 text-[#4F46E5] dark:bg-indigo-950/40 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 uppercase">
              Step {prompt.stepNumber || 1}
            </span>
          </div>

          {/* Bookmark Button */}
          <button
            type="button"
            onClick={handleToggleBookmark}
            title={isSaved ? 'Remove from Saved' : 'Bookmark Prompt'}
            aria-label={isSaved ? 'Remove from Saved' : 'Bookmark Prompt'}
            className={`p-1.5 rounded border transition-colors cursor-pointer ${
              isSaved
                ? 'border-amber-300 bg-amber-50 text-amber-600 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800'
            }`}
          >
            <Bookmark className={`h-3.5 w-3.5 ${isSaved ? 'fill-amber-400 text-amber-500' : ''}`} />
          </button>
        </div>

        {/* Prompt Title */}
        <h3 className="font-display font-bold text-base sm:text-lg text-[#0F172A] dark:text-white tracking-tight leading-snug">
          {prompt.title}
        </h3>

        {/* Recommended Model info */}
        {prompt.recommendedModel && (
          <div className="flex items-center gap-1.5 mt-2 font-mono text-[11px] text-slate-500 dark:text-slate-400">
            <span>Model:</span>
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {prompt.recommendedModel}
            </span>
          </div>
        )}
      </div>

      {/* 2. Interactive Variable Customization Chips */}
      {hasVariables && (
        <div className="px-4 sm:px-5 py-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827]">
          <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-600 dark:text-slate-400 mb-2">
            <Sparkles className="h-3.5 w-3.5 text-[#4F46E5] dark:text-[#6366F1]" />
            <span>Customize Prompt Variables:</span>
          </div>

          <div className="space-y-2">
            {prompt.variables.map((variable) => (
              <div key={variable.id} className="space-y-1">
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  [{variable.label || variable.id}]:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {variable.options.map((option) => {
                    const isSelected = (selectedVariables[variable.id] || variable.defaultOption) === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleVariableChange(variable.id, option)}
                        className={`text-xs font-mono px-2.5 py-1 rounded transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#4F46E5] text-white font-semibold shadow-2xs'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Monospace Prompt Preview Container */}
      <div className="p-4 sm:p-5 bg-white dark:bg-[#111827] flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-[#4F46E5] dark:text-[#6366F1]" />
              <span>prompt_blueprint.md</span>
            </span>
            <span className="text-[11px]">Click to select all</span>
          </div>

          <pre className="p-3.5 rounded-lg bg-[#0F172A] dark:bg-[#050811] text-slate-100 font-mono text-xs leading-relaxed max-h-56 overflow-y-auto whitespace-pre-wrap select-all">
            {livePromptText}
          </pre>
        </div>

        {/* Expected Outputs Accordion */}
        {hasExpectedOutputs && (
          <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setShowOutput(!showOutput)}
              className="w-full flex items-center justify-between text-xs font-mono text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 cursor-pointer"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-[#10B981]" />
                <span>Expected Output Checklist ({prompt.expectedOutputs.length})</span>
              </span>
              {showOutput ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            </button>

            {showOutput && (
              <div className="mt-2 space-y-1.5 pl-2 text-xs font-sans text-slate-600 dark:text-slate-300">
                {prompt.expectedOutputs.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#10B981] font-bold">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* 4. Footer Action Bar */}
      <div className="p-3.5 sm:p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B0F17] flex flex-wrap items-center justify-between gap-2.5 font-sans">
        {/* Left: 1-Click AI Runners */}
        <div className="flex items-center gap-2">
          <a
            href={sanitizeExternalUrl(deepLinks.chatgpt)}
            target="_blank"
            rel="noopener noreferrer"
            className="cc-btn-secondary px-2.5 py-1 text-xs font-semibold text-[#10B981] gap-1"
          >
            <Sparkles className="h-3 w-3" />
            <span>ChatGPT ↗</span>
          </a>
          <a
            href={sanitizeExternalUrl(deepLinks.perplexity)}
            target="_blank"
            rel="noopener noreferrer"
            className="cc-btn-secondary px-2.5 py-1 text-xs font-semibold text-[#4F46E5] dark:text-[#6366F1] gap-1"
          >
            <Compass className="h-3 w-3" />
            <span>Perplexity ↗</span>
          </a>
        </div>

        {/* Right: Copy Prompt & Open Step */}
        <div className="flex items-center gap-2">
          <Link
            to={stepTargetUrl}
            className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#4F46E5] dark:hover:text-[#6366F1] inline-flex items-center gap-1"
          >
            <span>Open in Lab</span>
            <ArrowRight className="h-3 w-3" />
          </Link>

          <button
            type="button"
            onClick={handleCopy}
            className="cc-btn-primary px-3 py-1 text-xs font-semibold gap-1"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-[#10B981]" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
