/**
 * Comprehensive Validation and Sanitization Utilities
 * 
 * Includes email validation, prototype-safe JSON parsing,
 * external URL sanitization (XSS mitigation), and backup payload validation.
 */

// Blocked dummy/test email addresses commonly used in testing
const BLOCKED_EXACT_EMAILS = new Set([
  'test@test.com',
  'test@example.com',
  'abc@abc.com',
  'asdf@asdf.com',
  'admin@admin.com',
  'user@user.com',
  'fake@fake.com',
  'sample@sample.com',
  'a@a.com',
  'none@none.com',
  'no@no.com',
  'temp@temp.com',
  'mail@mail.com',
  'email@email.com',
  'me@me.com',
  'xyz@xyz.com',
  '123@123.com',
  'test@gmail.com',
  'asdf@gmail.com',
  'qwerty@qwerty.com',
]);

// Blocked dummy, disposable, and test domain names
const BLOCKED_DOMAINS = new Set([
  'test.com',
  'example.com',
  'example.org',
  'example.net',
  'mailinator.com',
  'tempmail.com',
  '10minutemail.com',
  'guerrillamail.com',
  'throwawaymail.com',
  'fake.com',
  'dummy.com',
  'asdf.com',
  'qwerty.com',
  'xyz.com',
  'trashmail.com',
]);

/**
 * Validates an email address against syntax rules and fake/test patterns.
 * 
 * @param {string} email - The email string to validate
 * @returns {{ isValid: boolean, error: string | null }}
 */
export function validateEmail(email) {
  if (!email || typeof email !== 'string') {
    return { isValid: false, error: 'Please enter your email address' };
  }

  const trimmed = email.trim().toLowerCase();

  if (!trimmed) {
    return { isValid: false, error: 'Please enter your email address' };
  }

  // 1. Length constraints
  if (trimmed.length < 5 || trimmed.length > 254) {
    return { isValid: false, error: 'Please enter a valid, active email address' };
  }

  // 2. Standard RFC email structure regex
  // Ensures username, single @, domain label(s), and at least 2-character TLD
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!emailRegex.test(trimmed)) {
    return { isValid: false, error: 'Please enter a valid email address (e.g., name@domain.com)' };
  }

  const parts = trimmed.split('@');
  if (parts.length !== 2) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }

  const [localPart, domain] = parts;
  if (!localPart || !domain) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }

  const domainParts = domain.split('.');
  const tld = domainParts[domainParts.length - 1];

  // 3. TLD validation (must be at least 2 alphabetic characters)
  if (!tld || tld.length < 2 || !/^[a-z]+$/.test(tld)) {
    return { isValid: false, error: 'Please enter an email with a valid domain extension' };
  }

  // 4. Single-character domain label check (e.g. user@a.com is invalid)
  const sld = domainParts[0];
  if (sld.length < 2) {
    return { isValid: false, error: 'Please enter a valid domain name' };
  }

  // 5. Block known dummy test emails
  if (BLOCKED_EXACT_EMAILS.has(trimmed)) {
    return { isValid: false, error: 'Please enter a valid, active email address' };
  }

  // 6. Block identical local part and domain name (e.g., test@test.com, asdf@asdf.com, abc@abc.com)
  if (localPart === sld) {
    return { isValid: false, error: 'Please enter a valid, active email address' };
  }

  // 7. Block known disposable/test domains
  if (BLOCKED_DOMAINS.has(domain)) {
    return { isValid: false, error: 'Please enter a real, active email address (test domains are not accepted)' };
  }

  return { isValid: true, error: null };
}

/**
 * Safely parses JSON strings while preventing Prototype Pollution attacks.
 * Strips '__proto__', 'constructor', and 'prototype' keys during parsing.
 * 
 * @param {string} rawString - The raw JSON string to parse
 * @param {any} [fallback=null] - Value returned if parsing fails or input is invalid
 * @returns {any} Parsed value or fallback
 */
export function safeJsonParse(rawString, fallback = null) {
  if (typeof rawString !== 'string' || !rawString.trim()) {
    return fallback;
  }

  try {
    return JSON.parse(rawString, (key, value) => {
      if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
        return undefined; // Strips prototype pollution attempts
      }
      return value;
    });
  } catch {
    return fallback;
  }
}

/**
 * Sanitizes external URLs to prevent JavaScript protocol injection (XSS),
 * data: URIs, vbscript:, or malformed links. Only http: and https: protocols are permitted.
 * 
 * @param {string} url - The candidate external URL
 * @returns {string} Sanitized URL string, or '#' if invalid or disallowed protocol
 */
export function sanitizeExternalUrl(url) {
  if (!url || typeof url !== 'string') return '#';
  const trimmed = url.trim();
  if (!trimmed) return '#';

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === 'https:' || parsed.protocol === 'http:') {
      return parsed.href;
    }
    return '#';
  } catch {
    return '#';
  }
}

export const MAX_BACKUP_FILE_SIZE = 512 * 1024; // 512 KB
export const MAX_ARRAY_ITEMS = 2000;
export const MAX_ID_LENGTH = 150;

const ALLOWED_BACKUP_TOP_LEVEL_KEYS = new Set([
  'version',
  'schemaVersion',
  'app',
  'exportedAt',
  'bookmarks',
  'progress',
  'completedSteps',
  'theme'
]);

/**
 * Validates an imported backup payload to guard against schema corruption,
 * prototype poisoning, oversized payload attacks, and invalid types.
 *
 * @param {any} payload - The parsed JSON object to validate
 * @returns {{ isValid: boolean, error?: string, sanitizedPayload?: object }}
 */
export function validateBackupPayload(payload) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return { isValid: false, error: 'Backup payload must be a valid JSON object.' };
  }

  // Check for disallowed top-level keys
  const keys = Object.keys(payload);
  for (const key of keys) {
    if (!ALLOWED_BACKUP_TOP_LEVEL_KEYS.has(key)) {
      return { isValid: false, error: `Disallowed key '${key}' detected in backup payload.` };
    }
  }

  const sanitized = {
    schemaVersion: typeof payload.schemaVersion === 'string' ? payload.schemaVersion : 'useai-v2.0',
    app: typeof payload.app === 'string' ? payload.app : 'useai.sh',
    exportedAt: typeof payload.exportedAt === 'string' ? payload.exportedAt : new Date().toISOString(),
    theme: payload.theme === 'light' || payload.theme === 'dark' ? payload.theme : 'dark',
    progress: {},
    bookmarks: { roadmaps: [], prompts: [], tools: [] }
  };

  // Validate progress / completedSteps
  const progressSource = payload.progress || payload.completedSteps;
  if (progressSource && typeof progressSource === 'object' && !Array.isArray(progressSource)) {
    const entries = Object.entries(progressSource);
    if (entries.length > 500) {
      return { isValid: false, error: 'Backup contains an excessive number of roadmaps (> 500).' };
    }

    for (const [roadmapId, steps] of entries) {
      if (typeof roadmapId !== 'string' || roadmapId.length > MAX_ID_LENGTH) {
        continue;
      }
      if (Array.isArray(steps)) {
        if (steps.length > MAX_ARRAY_ITEMS) {
          return { isValid: false, error: `Step array for roadmap '${roadmapId}' exceeds ${MAX_ARRAY_ITEMS} items.` };
        }
        sanitized.progress[roadmapId] = steps
          .filter(s => typeof s === 'string' && s.length <= MAX_ID_LENGTH)
          .slice(0, MAX_ARRAY_ITEMS);
      }
    }
  }

  // Validate bookmarks
  if (payload.bookmarks && typeof payload.bookmarks === 'object' && !Array.isArray(payload.bookmarks)) {
    const { roadmaps, prompts, tools } = payload.bookmarks;

    if (Array.isArray(roadmaps)) {
      if (roadmaps.length > MAX_ARRAY_ITEMS) {
        return { isValid: false, error: `Roadmaps array exceeds ${MAX_ARRAY_ITEMS} items.` };
      }
      sanitized.bookmarks.roadmaps = roadmaps
        .filter(r => r && typeof r === 'object' && typeof r.id === 'string' && r.id.length <= MAX_ID_LENGTH)
        .slice(0, MAX_ARRAY_ITEMS);
    }

    if (Array.isArray(prompts)) {
      if (prompts.length > MAX_ARRAY_ITEMS) {
        return { isValid: false, error: `Prompts array exceeds ${MAX_ARRAY_ITEMS} items.` };
      }
      sanitized.bookmarks.prompts = prompts
        .filter(p => p && typeof p === 'object' && typeof p.id === 'string' && p.id.length <= MAX_ID_LENGTH)
        .slice(0, MAX_ARRAY_ITEMS);
    }

    if (Array.isArray(tools)) {
      if (tools.length > MAX_ARRAY_ITEMS) {
        return { isValid: false, error: `Tools array exceeds ${MAX_ARRAY_ITEMS} items.` };
      }
      sanitized.bookmarks.tools = tools
        .filter(t => t && typeof t === 'object' && (typeof t.id === 'string' || typeof t.name === 'string'))
        .slice(0, MAX_ARRAY_ITEMS);
    }
  }

  return { isValid: true, sanitizedPayload: sanitized };
}
