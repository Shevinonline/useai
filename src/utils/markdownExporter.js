/**
 * Markdown Blueprint Generator Engine for useai.sh
 *
 * Generates comprehensive, clean GitHub-flavored Markdown documents (.md)
 * of any roadmap for local-first workflows in Cursor, Antigravity IDE, Notion, and Obsidian.
 */

/**
 * Formats a step number as two digits (e.g., 01, 02, 10).
 * @param {number|string} num
 * @returns {string}
 */
function padStep(num) {
  const n = parseInt(num, 10);
  if (isNaN(n)) return String(num);
  return n < 10 ? `0${n}` : String(n);
}

/**
 * Safely wraps code content inside markdown code fences.
 * Uses 4 backticks so any triple backticks inside the prompt template do not break formatting.
 *
 * @param {string} content - The code or prompt content
 * @param {string} [lang='markdown'] - Code fence language identifier
 * @returns {string}
 */
function safeCodeBlock(content, lang = 'markdown') {
  const trimmed = (content || '').trim();
  return `\`\`\`\`${lang}\n${trimmed}\n\`\`\`\``;
}

/**
 * Generates a full GitHub-flavored Markdown document string from roadmap metadata and steps data.
 *
 * @param {Object} roadmap - Roadmap metadata object from roadmaps.json
 * @param {Object} stepsData - Detailed roadmap steps data object
 * @param {string[]} [completedStepIds=[]] - Array of step IDs marked as completed by the user
 * @returns {string} Fully structured Markdown document string
 */
export function generateRoadmapMarkdown(roadmap, stepsData, completedStepIds = []) {
  const meta = roadmap || {};
  const data = stepsData || {};
  const steps = Array.isArray(data.steps) ? data.steps : [];
  const phases = Array.isArray(data.phases) ? data.phases : [];

  const title = data.title || meta.title || 'AI Execution Roadmap';
  const description = data.description || meta.description || '';
  const category = meta.category || 'AI Workflows & Roadmaps';
  const difficulty = meta.difficulty || 'Intermediate';
  const estimatedTime = meta.estimatedTime || 'Self-paced';
  const totalSteps = steps.length || meta.stepCount || 0;
  const completedSet = new Set(Array.isArray(completedStepIds) ? completedStepIds : []);
  const todayDate = new Date().toISOString().split('T')[0];

  const lines = [];

  // 1. Header & Title
  lines.push(`# ${title} — AI Execution Blueprint`);
  lines.push('');
  if (description) {
    lines.push(`> ${description}`);
    lines.push('');
  }
  lines.push('---');
  lines.push('');

  // 2. Metadata Block
  lines.push('### Blueprint Metadata');
  lines.push(`- **Category:** ${category}`);
  lines.push(`- **Difficulty:** ${difficulty}`);
  lines.push(`- **Estimated Time:** ${estimatedTime}`);
  lines.push(`- **Total Steps:** ${totalSteps} execution nodes`);
  lines.push(`- **Source:** [useai.sh](https://useai.sh)`);
  lines.push(`- **Exported Date:** ${todayDate}`);
  lines.push('');
  lines.push('---');
  lines.push('');

  // 3. Interactive Progress Checklist
  lines.push('## Progress Checklist');
  lines.push('');
  if (steps.length === 0) {
    lines.push('_No steps available for this roadmap._');
  } else {
    steps.forEach((step, idx) => {
      const stepNum = padStep(step.stepNumber || idx + 1);
      const isDone = completedSet.has(step.id);
      const checkMark = isDone ? 'x' : ' ';
      lines.push(`- [${checkMark}] **Step ${stepNum}:** ${step.title}`);
    });
  }
  lines.push('');
  lines.push('---');
  lines.push('');

  // 4. Phases & Steps Breakdown
  lines.push('## Execution Curriculum');
  lines.push('');

  // If phases are explicitly defined
  if (phases.length > 0) {
    phases.forEach((phase, phaseIdx) => {
      const phaseNum = phaseIdx + 1;
      const phaseTitle = phase.title || `Phase ${phaseNum}`;
      lines.push(`## ${phaseTitle}`);
      if (phase.description) {
        lines.push(`> ${phase.description}`);
      }
      lines.push('');

      const phaseSteps = steps.filter((s) => s.phaseId === phase.id);
      const stepsToRender = phaseSteps.length > 0 ? phaseSteps : [];

      stepsToRender.forEach((step) => {
        renderStepMarkdown(lines, step);
      });
    });
  } else {
    // Flat steps rendering if no phases defined
    steps.forEach((step) => {
      renderStepMarkdown(lines, step);
    });
  }

  // 5. Footer & Attribution
  while (lines.length > 0 && (lines[lines.length - 1] === '' || lines[lines.length - 1] === '---')) {
    lines.pop();
  }
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('*Generated from [useai.sh](https://useai.sh) — Open-Source AI Workflows, Roadmaps & System Prompts.*');
  lines.push('*Local-first Markdown format optimized for Cursor, Antigravity IDE, Notion, and Obsidian.*');
  lines.push('');

  return lines.join('\n');
}

/**
 * Appends markdown lines for a single step.
 *
 * @param {string[]} lines - Accumulator array of markdown lines
 * @param {Object} step - The step object
 */
function renderStepMarkdown(lines, step) {
  const stepNum = padStep(step.stepNumber || 1);
  lines.push(`### Step ${stepNum}: ${step.title}`);
  lines.push('');

  // Summary
  const summary = step.summary || (step.description ? step.description.split('\n')[0] : '');
  if (summary) {
    lines.push(`> **Summary:** ${summary}`);
    lines.push('');
  }

  // Step Level Metadata (Difficulty, Time Estimate)
  const metaBits = [];
  if (step.difficulty) metaBits.push(`**Difficulty:** ${step.difficulty}`);
  if (step.timeEstimate) metaBits.push(`**Estimated Time:** ${step.timeEstimate}`);
  if (metaBits.length > 0) {
    lines.push(`- ${metaBits.join(' | ')}`);
  }

  // Recommended Tools
  const tools = step.recommendedTools || step.playbook?.recommendedTools || step.tools || [];
  if (Array.isArray(tools) && tools.length > 0) {
    const formattedTools = tools.map((t) => {
      if (typeof t === 'string') return t;
      if (t.name && t.url) return `[${t.name}](${t.url})`;
      return t.name || 'Tool';
    });
    lines.push(`- **Recommended Tools:** ${formattedTools.join(', ')}`);
  }
  lines.push('');

  // Execution Workflow (1. Setup, 2. Execute, 3. Verify)
  const playbook = step.playbook || {};
  const workflow = Array.isArray(playbook.workflow) ? playbook.workflow : null;

  lines.push('#### 3-Step Execution Workflow');
  lines.push('');
  if (workflow && workflow.length > 0) {
    workflow.forEach((wf, wIdx) => {
      const title = wf.title || (wIdx === 0 ? 'Setup' : wIdx === 1 ? 'Execute' : 'Verify');
      lines.push(`${wIdx + 1}. **${title}:** ${wf.description || ''}`);
    });
  } else if (playbook.setup || playbook.execute || playbook.verify) {
    if (playbook.setup) lines.push(`1. **Setup:** ${playbook.setup}`);
    if (playbook.execute) lines.push(`2. **Execute:** ${playbook.execute}`);
    if (playbook.verify) lines.push(`3. **Verify:** ${playbook.verify}`);
  } else {
    lines.push('1. **Setup:** Configure environment, dependencies, and API credentials.');
    lines.push('2. **Execute:** Run the primary implementation workflow according to design constraints.');
    lines.push('3. **Verify:** Test edge cases, output schemas, and production error boundaries.');
  }
  lines.push('');

  // Key Concept Guide
  const conceptGuide = step.conceptGuide || step.resources?.conceptGuide;
  if (conceptGuide) {
    lines.push(`#### Key Concept: ${conceptGuide.title || 'Core Principles'}`);
    lines.push('');
    if (conceptGuide.overview) {
      lines.push(conceptGuide.overview);
      lines.push('');
    }
    if (Array.isArray(conceptGuide.keyPoints) && conceptGuide.keyPoints.length > 0) {
      lines.push('**Core Principles & Takeaways:**');
      conceptGuide.keyPoints.forEach((point) => {
        if (typeof point === 'object' && point !== null) {
          const lead = point.lead || point.title || '';
          const text = point.text || point.explanation || '';
          lines.push(`- ${lead ? `**${lead}:** ` : ''}${text}`);
        } else {
          lines.push(`- ${point}`);
        }
      });
      lines.push('');
    }
  }

  // Interactive Prompt Template
  const promptLab = step.promptLab || step.proPrompt || {};
  const template = promptLab.template || promptLab.prompt || '';
  if (template) {
    lines.push('#### Interactive Prompt Blueprint');
    if (promptLab.recommendedModel) {
      lines.push(`*Recommended Model: ${promptLab.recommendedModel}*`);
    }
    lines.push('');
    lines.push(safeCodeBlock(template, 'markdown'));
    lines.push('');

    // Expected Outputs Checklist
    const expectedOutputs = promptLab.expectedOutputs || [];
    if (Array.isArray(expectedOutputs) && expectedOutputs.length > 0) {
      lines.push('**Expected AI Output Criteria:**');
      expectedOutputs.forEach((out) => {
        lines.push(`- [ ] ${out}`);
      });
      lines.push('');
    }
  }

  // Common Mistakes to Avoid
  const mistakes =
    step.callouts?.mistakes ||
    step.playbook?.commonMistakes ||
    (step.callouts?.mistake ? [step.callouts.mistake] : []);
  if (Array.isArray(mistakes) && mistakes.length > 0) {
    lines.push('#### Common Mistakes to Avoid');
    mistakes.forEach((m) => {
      if (typeof m === 'object' && m !== null) {
        const mistake = m.mistake || m.title || '';
        const fix = m.fix || m.solution ? ` *Fix:* ${m.fix || m.solution}` : '';
        lines.push(`- ⚠️ **${mistake}**${fix}`);
      } else {
        lines.push(`- ⚠️ ${m}`);
      }
    });
    lines.push('');
  }

  // Pro Shortcuts & Tips
  const proTips =
    step.callouts?.proTips ||
    step.playbook?.proShortcuts ||
    (step.callouts?.proTip ? [step.callouts.proTip] : []);
  if (Array.isArray(proTips) && proTips.length > 0) {
    lines.push('#### Pro Shortcuts & Operational Tips');
    proTips.forEach((tip) => {
      if (typeof tip === 'object' && tip !== null) {
        const shortcut = tip.shortcut || tip.title || '';
        const tipText = tip.proTip || tip.impact ? ` *ProTip:* ${tip.proTip || tip.impact}` : '';
        lines.push(`- 💡 **${shortcut}**${tipText}`);
      } else {
        lines.push(`- 💡 ${tip}`);
      }
    });
    lines.push('');
  }

  // Official Documentation & Deep Dives
  const resources = step.learning?.resources || step.resources?.officialDocs || [];
  if (Array.isArray(resources) && resources.length > 0) {
    lines.push('#### Verified Documentation & References');
    resources.forEach((res) => {
      const typeBadge = res.type || res.badge ? ` (${res.type || res.badge})` : '';
      lines.push(`- [${res.title}](${res.url})${typeBadge}`);
    });
    lines.push('');
  }

  lines.push('---');
  lines.push('');
}

/**
 * Triggers a browser download of the roadmap as a Markdown file (.md).
 *
 * @param {Object} roadmap - The roadmap metadata object
 * @param {Object} stepsData - The complete steps data object
 * @param {string[]} [completedStepIds=[]] - Array of completed step IDs
 * @returns {string} The generated filename
 */
export function exportRoadmapAsMarkdown(roadmap, stepsData, completedStepIds = []) {
  if (typeof window === 'undefined') return '';

  const markdownContent = generateRoadmapMarkdown(roadmap, stepsData, completedStepIds);
  const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const safeSlug = (roadmap?.slug || roadmap?.id || 'roadmap')
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, '-');
  const filename = `${safeSlug}-blueprint.md`;

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1000);

  return filename;
}
