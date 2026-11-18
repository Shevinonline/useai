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
    <article className="bg-white dark:bg-[#131A33] border-2 border-[#10162F] dark:border-[#3B497E] rounded-[4px] shadow-[4px_4px_0px_0px_#10162F] dark:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#10162F] dark:hover:shadow-[6px_6px_0px_0px_#FFD300] transition-all duration-150 group flex flex-col justify-between overflow-hidden text-left font-sans">
      {/* 1. Card Top Header: Source Roadmap + Step Badge + Bookmark */}
      <div className="p-4 sm:p-5 pb-4 border-b-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021]">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-1.5 flex-wrap">
            {/* Roadmap Parent Tag */}
            <Link
              to={`/roadmap/${prompt.roadmapId}`}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[3px] text-xs font-mono font-bold bg-white dark:bg-[#131A33] border border-[#10162F] text-[#10162F] dark:text-white shadow-[1px_1px_0px_0px_#10162F] hover:text-[#3A10E5] dark:hover:text-[#FFD300] transition-colors"
              title={`Part of ${prompt.roadmapTitle}`}
            >
              <Layers className="h-3 w-3 text-[#3A10E5] dark:text-[#FFD300] shrink-0" />
              <span className="truncate max-w-[170px] sm:max-w-[210px]">{prompt.roadmapTitle}</span>
            </Link>

            {/* Step badge */}
            <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-[3px] bg-[#FFD300] text-[#10162F] border border-[#10162F] uppercase shadow-[1px_1px_0px_0px_#10162F]">
              Step {prompt.stepNumber || 1}
            </span>
          </div>

          {/* Bookmark Button */}
          <button
            type="button"
            onClick={handleToggleBookmark}
            title={isSaved ? 'Remove from Saved' : 'Bookmark Prompt'}
            aria-label={isSaved ? 'Remove from Saved' : 'Bookmark Prompt'}
            className={`border-2 border-[#10162F] rounded-[4px] p-1.5 shadow-[2px_2px_0px_0px_#10162F] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F] transition-all cursor-pointer ${
              isSaved
                ? 'bg-[#FFD300] text-[#10162F]'
                : 'bg-white dark:bg-[#131A33] text-[#10162F] dark:text-white'
            }`}
          >
            <Bookmark className={`h-3.5 w-3.5 ${isSaved ? 'fill-[#10162F] text-[#10162F]' : ''}`} />
          </button>
        </div>

        {/* Prompt Title */}
        <h3 className="font-display font-bold text-base sm:text-lg text-[#10162F] dark:text-white tracking-tight leading-snug">
          {prompt.title}
        </h3>

        {/* Recommended Model info */}
        {prompt.recommendedModel && (
          <div className="flex items-center gap-1.5 mt-2 font-mono text-[11px] text-[#10162F]/70 dark:text-slate-400">
            <span>Model:</span>
            <span className="font-bold text-[#10162F] dark:text-slate-200">
              {prompt.recommendedModel}
            </span>
          </div>
        )}
      </div>

      {/* 2. Interactive Variable Customization Chips */}
      {hasVariables && (
        <div className="px-4 sm:px-5 py-3 border-b-2 border-[#10162F] dark:border-[#3B497E] bg-white dark:bg-[#131A33]">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#10162F] dark:text-slate-300 mb-2">
            <Sparkles className="h-3.5 w-3.5 text-[#3A10E5] dark:text-[#FFD300]" />
            <span>Customize Prompt Variables:</span>
          </div>

          <div className="space-y-2">
            {prompt.variables.map((variable) => (
              <div key={variable.id} className="space-y-1">
                <span className="text-[11px] font-mono font-bold text-[#10162F]/70 dark:text-slate-400">
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
                        className={`text-xs font-mono font-bold px-2.5 py-1 rounded-[3px] border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#10162F] text-white dark:bg-[#FFD300] dark:text-[#10162F] border-[#10162F] shadow-[1px_1px_0px_0px_#10162F]'
                            : 'bg-[#FFF8F2] dark:bg-[#0B1021] text-[#10162F] dark:text-slate-300 border-[#10162F]/40 hover:border-[#10162F]'
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
      <div className="p-4 sm:p-5 bg-white dark:bg-[#131A33] flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-[#10162F]/70 dark:text-slate-400 font-bold">
            <span className="flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-[#3A10E5] dark:text-[#FFD300]" />
              <span>prompt_blueprint.md</span>
            </span>
            <span className="text-[11px]">Click to select all</span>
          </div>

          <pre className="p-3.5 rounded-[4px] bg-[#0F172A] border-2 border-[#10162F] text-slate-100 font-mono text-xs leading-relaxed max-h-56 overflow-y-auto whitespace-pre-wrap select-all">
            {livePromptText}
          </pre>
        </div>

        {/* Expected Outputs Accordion */}
        {hasExpectedOutputs && (
          <div className="mt-3 pt-3 border-t-2 border-[#10162F]/15 dark:border-white/10">
            <button
              type="button"
              onClick={() => setShowOutput(!showOutput)}
              className="w-full flex items-center justify-between text-xs font-mono font-bold text-[#10162F] hover:text-[#3A10E5] dark:text-slate-300 dark:hover:text-[#FFD300] cursor-pointer"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-[#008A5E]" />
                <span>Expected Output Checklist ({prompt.expectedOutputs.length})</span>
              </span>
              {showOutput ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            </button>

            {showOutput && (
              <div className="mt-2 space-y-1.5 pl-2 text-xs font-sans text-[#10162F]/80 dark:text-slate-300">
                {prompt.expectedOutputs.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#008A5E] font-bold">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* 4. Footer Action Bar */}
      <div className="p-3.5 sm:p-4 border-t-2 border-[#10162F] dark:border-[#3B497E] bg-[#FFF8F2] dark:bg-[#0B1021] flex flex-wrap items-center justify-between gap-2.5 font-sans">
        {/* Left: 1-Click AI Runners */}
        <div className="flex items-center gap-2">
          <a
            href={sanitizeExternalUrl(deepLinks.chatgpt)}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#10162F] rounded-[4px] bg-white dark:bg-[#131A33] px-2.5 py-1 text-xs font-mono font-bold text-[#008A5E] gap-1 shadow-[2px_2px_0px_0px_#10162F] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F] transition-all inline-flex items-center"
          >
            <Sparkles className="h-3 w-3" />
            <span>ChatGPT ↗</span>
          </a>
          <a
            href={sanitizeExternalUrl(deepLinks.perplexity)}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#10162F] rounded-[4px] bg-white dark:bg-[#131A33] px-2.5 py-1 text-xs font-mono font-bold text-[#3A10E5] dark:text-[#FFD300] gap-1 shadow-[2px_2px_0px_0px_#10162F] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F] transition-all inline-flex items-center"
          >
            <Compass className="h-3 w-3" />
            <span>Perplexity ↗</span>
          </a>
        </div>

        {/* Right: Copy Prompt & Open Step */}
        <div className="flex items-center gap-2">
          <Link
            to={stepTargetUrl}
            className="text-xs font-mono font-bold text-[#10162F] dark:text-slate-300 hover:text-[#3A10E5] dark:hover:text-[#FFD300] inline-flex items-center gap-1"
          >
            <span>Open in Lab</span>
            <ArrowRight className="h-3 w-3" />
          </Link>

          <button
            type="button"
            onClick={handleCopy}
            className="bg-[#3A10E5] text-white dark:bg-[#FFD300] dark:text-[#10162F] border-2 border-[#10162F] rounded-[4px] px-3 py-1 text-xs font-mono font-bold shadow-[2px_2px_0px_0px_#10162F] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#10162F] transition-all cursor-pointer inline-flex items-center gap-1"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-white dark:text-[#10162F]" />
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
