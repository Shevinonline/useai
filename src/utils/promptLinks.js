/**
 * Utility helper to generate safe, 1-click deep links to run prompts directly
 * inside ChatGPT and Perplexity.
 *
 * Supported deep-link formats:
 * - ChatGPT: https://chatgpt.com/?q={encodedPrompt}
 * - Perplexity: https://www.perplexity.ai/search?q={encodedPrompt}
 */

import { sanitizeExternalUrl } from './validation.js';

export const MAX_ENCODED_PROMPT_LENGTH = 3000;
const TRUNCATION_NOTICE = '\n\n[...truncated for URL length - use Copy Prompt for full text]';

/**
 * Encodes and safely truncates a prompt string to fit within browser URL query limits.
 *
 * @param {string} promptText - The prompt text to encode
 * @param {number} [maxEncodedLength=MAX_ENCODED_PROMPT_LENGTH] - Maximum allowed length for the encoded query string
 * @returns {{ encoded: string, isTruncated: boolean }}
 */
export function encodePromptForUrl(promptText, maxEncodedLength = MAX_ENCODED_PROMPT_LENGTH) {
  if (!promptText || typeof promptText !== 'string') {
    return { encoded: '', isTruncated: false };
  }

  const trimmed = promptText.trim();
  if (!trimmed) {
    return { encoded: '', isTruncated: false };
  }

  const fullEncoded = encodeURIComponent(trimmed);
  if (fullEncoded.length <= maxEncodedLength) {
    return { encoded: fullEncoded, isTruncated: false };
  }

  // Gracefully truncate original text using binary search so encoded query fits cleanly
  let low = 0;
  let high = trimmed.length;
  let bestCut = 0;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const candidate = trimmed.slice(0, mid) + TRUNCATION_NOTICE;
    const candidateEncoded = encodeURIComponent(candidate);

    if (candidateEncoded.length <= maxEncodedLength) {
      bestCut = mid;
      low = mid + 1; // Try to include more text
    } else {
      high = mid - 1; // Too long, shrink cut
    }
  }

  const truncatedText = trimmed.slice(0, bestCut) + TRUNCATION_NOTICE;
  return {
    encoded: encodeURIComponent(truncatedText),
    isTruncated: true
  };
}

/**
 * Generates direct execution URLs for ChatGPT and Perplexity.
 *
 * @param {string} promptText - The customized prompt text with substituted variables
 * @returns {{ chatgpt: string, perplexity: string, isTruncated: boolean, encodedPrompt: string }}
 */
export function generatePromptDeepLinks(promptText) {
  const { encoded, isTruncated } = encodePromptForUrl(promptText);

  if (!encoded) {
    return {
      chatgpt: 'https://chatgpt.com',
      perplexity: 'https://www.perplexity.ai',
      isTruncated: false,
      encodedPrompt: ''
    };
  }

  const rawChatGptUrl = `https://chatgpt.com/?q=${encoded}`;
  const rawPerplexityUrl = `https://www.perplexity.ai/search?q=${encoded}`;

  return {
    chatgpt: sanitizeExternalUrl(rawChatGptUrl),
    perplexity: sanitizeExternalUrl(rawPerplexityUrl),
    isTruncated,
    encodedPrompt: encoded
  };
}

/**
 * Convenience helper to get the ChatGPT deep link directly.
 * @param {string} promptText
 * @returns {string} Sanitized URL
 */
export function getChatGptPromptUrl(promptText) {
  return generatePromptDeepLinks(promptText).chatgpt;
}

/**
 * Convenience helper to get the Perplexity deep link directly.
 * @param {string} promptText
 * @returns {string} Sanitized URL
 */
export function getPerplexityPromptUrl(promptText) {
  return generatePromptDeepLinks(promptText).perplexity;
}
