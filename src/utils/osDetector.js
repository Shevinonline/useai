/**
 * OS-Aware Keyboard Shortcut Detector
 * Detects whether the user is on an Apple platform (macOS/iOS)
 * to display "⌘ K" vs "Ctrl K" across search triggers and modal hints.
 */

export function isAppleDevice() {
  if (typeof window === 'undefined') return false;
  const platform =
    navigator.userAgentData?.platform ||
    navigator.platform ||
    navigator.userAgent ||
    '';
  return /Mac|iPhone|iPod|iPad/i.test(platform);
}

export function getShortcutBadge() {
  return isAppleDevice() ? '⌘ K' : 'Ctrl K';
}
