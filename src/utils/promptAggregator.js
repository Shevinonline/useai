import roadmapsData from '../data/roadmaps.json';
import { roadmapStepsData } from '../data/roadmapSteps.js';

let cachedPrompts = null;

/**
 * Extracts and flattens all prompt templates across all unlocked (ready) roadmaps.
 * Runs in-memory dynamically so any changes in roadmaps or steps immediately reflect.
 */
export function getAllPrompts() {
  if (cachedPrompts) {
    return cachedPrompts;
  }

  const prompts = [];
  const readyRoadmaps = roadmapsData.filter((r) => r.status === 'ready');

  readyRoadmaps.forEach((roadmap) => {
    const roadmapDetail = roadmapStepsData[roadmap.id];
    if (!roadmapDetail || !Array.isArray(roadmapDetail.steps)) {
      return;
    }

    // Determine normalized category
    let normalizedCategory = 'workflow';
    if (
      roadmap.category === 'Tool Mastery Roadmaps' ||
      roadmap.category === 'tool' ||
      roadmap.category === 'tool-specific'
    ) {
      normalizedCategory = 'tool';
    } else if (
      roadmap.category === 'AI Role-Based Roadmaps' ||
      roadmap.category === 'role'
    ) {
      normalizedCategory = 'role';
    }

    roadmapDetail.steps.forEach((step, index) => {
      // Node must have promptLab with a template or proPrompt
      const promptLab = step.promptLab;
      const template = promptLab?.template || step.proPrompt?.prompt;

      if (!template) {
        return;
      }

      // Collect recommended tools from step or parent roadmap defensively
      const stepTools = Array.isArray(step.tools)
        ? step.tools
            .map((t) => (typeof t === 'string' ? t.trim() : (t?.name || t?.title || '')))
            .filter(Boolean)
        : Array.isArray(step.recommendedTools)
        ? step.recommendedTools
            .map((t) => (typeof t === 'string' ? t.trim() : (t?.name || t?.title || '')))
            .filter(Boolean)
        : [];
      const rawRoadmapTools = Array.isArray(roadmap.tools)
        ? roadmap.tools
            .map((t) => (typeof t === 'string' ? t.trim() : (t?.name || t?.title || '')))
            .filter(Boolean)
        : [];
      const recommendedTools = stepTools.length > 0 ? stepTools : rawRoadmapTools;

      // Extract variables
      const variables = Array.isArray(promptLab?.variables)
        ? promptLab.variables.map((v) => ({
            id: v.id,
            label: v.label || v.id,
            options: Array.isArray(v.options) ? v.options : [],
            defaultOption: v.defaultOption || (Array.isArray(v.options) ? v.options[0] : '')
          }))
        : [];

      // Extract expected outputs
      let expectedOutputs = [];
      if (Array.isArray(promptLab?.expectedOutputs)) {
        expectedOutputs = promptLab.expectedOutputs;
      } else if (promptLab?.expectedOutput) {
        expectedOutputs = [promptLab.expectedOutput];
      }

      prompts.push({
        id: `${roadmap.id}-${step.id || `step-${index + 1}`}`,
        stepId: step.id || `step-${index + 1}`,
        stepNumber: step.stepNumber || index + 1,
        title: step.title || `Prompt ${index + 1}`,
        summary: step.summary || '',
        roadmapId: roadmap.id,
        roadmapTitle: roadmap.title,
        category: normalizedCategory,
        rawCategory: roadmap.category,
        recommendedTools,
        recommendedModel: promptLab?.recommendedModel || 'Claude 3.7 Sonnet / ChatGPT o3-mini',
        template,
        variables,
        expectedOutputs
      });
    });
  });

  cachedPrompts = prompts;
  return prompts;
}

/**
 * Returns list of roadmaps that have prompts for the dropdown filter.
 */
export function getRoadmapFilterOptions() {
  const prompts = getAllPrompts();
  const map = new Map();

  prompts.forEach((p) => {
    if (!map.has(p.roadmapId)) {
      map.set(p.roadmapId, {
        id: p.roadmapId,
        title: p.roadmapTitle,
        category: p.category,
        count: 0
      });
    }
    map.get(p.roadmapId).count += 1;
  });

  return Array.from(map.values()).sort((a, b) => a.title.localeCompare(b.title));
}

/**
 * Returns popular tool tags ranked by frequency.
 */
export function getPopularToolTags(limit = 12) {
  const prompts = getAllPrompts();
  const counts = {};

  prompts.forEach((p) => {
    p.recommendedTools.forEach((tool) => {
      // Normalize common names (e.g., 'Claude 3.7 Sonnet' -> 'Claude')
      let key = tool;
      if (key.toLowerCase().includes('claude')) key = 'Claude';
      else if (key.toLowerCase().includes('chatgpt') || key.toLowerCase().includes('openai')) key = 'ChatGPT';
      else if (key.toLowerCase().includes('cursor')) key = 'Cursor';
      else if (key.toLowerCase().includes('midjourney')) key = 'Midjourney';
      else if (key.toLowerCase().includes('flux')) key = 'Flux';
      else if (key.toLowerCase().includes('n8n')) key = 'n8n';
      else if (key.toLowerCase().includes('make')) key = 'Make';
      else if (key.toLowerCase().includes('supabase')) key = 'Supabase';
      else if (key.toLowerCase().includes('figma')) key = 'Figma';
      else if (key.toLowerCase().includes('framer')) key = 'Framer';
      else if (key.toLowerCase().includes('v0')) key = 'v0';
      else if (key.toLowerCase().includes('perplexity')) key = 'Perplexity';
      else if (key.toLowerCase().includes('elevenlabs')) key = 'ElevenLabs';
      else if (key.toLowerCase().includes('runway')) key = 'Runway';

      counts[key] = (counts[key] || 0) + 1;
    });
  });

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([tool, count]) => ({ tool, count }));
}
