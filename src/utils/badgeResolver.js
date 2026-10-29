/**
 * Smart Badge Resolver for Roadmap Cards
 * 
 * Determines which badge to display in the top-right corner of a roadmap card
 * based on user progress, publication date, update status, and availability.
 * 
 * Priority 1: User Progress (completed >= 1 step)
 *   - 100% completed: "Completed" with solid green dot
 *   - Partially completed: "X% Done" with solid green dot & bottom progress bar
 * Priority 2: Auto-Expiring "NEW" Badge
 *   - status === 'ready', completed === 0, publishedAt <= 30 days ago
 *   - Includes refined pulsing dot indicator
 * Priority 3: Auto-Expiring "UPDATED" Badge
 *   - status === 'ready', completed === 0, publishedAt > 30 days ago, updatedAt <= 14 days ago
 *   - Includes refined pulsing sky-blue dot indicator
 * Priority 4: Coming Soon
 *   - status === 'coming-soon': Muted "Soon" badge with clock icon
 */

import { safeJsonParse } from './validation.js';

export function getCompletedStepsForRoadmap(roadmapId) {
  if (typeof window === 'undefined' || !window.localStorage) {
    return [];
  }
  try {
    const primaryKey = `useai_progress_${roadmapId}`;
    const saved = localStorage.getItem(primaryKey);
    if (saved) {
      const parsed = safeJsonParse(saved, null);
      if (Array.isArray(parsed)) return parsed;
    }

    // Check alias if ai-full-stack-coding vs ai-fullstack-coding
    if (roadmapId === 'ai-full-stack-coding') {
      const aliasKey = 'useai_progress_ai-fullstack-coding';
      const aliasSaved = localStorage.getItem(aliasKey);
      if (aliasSaved) {
        const parsed = safeJsonParse(aliasSaved, null);
        if (Array.isArray(parsed)) return parsed;
      }
    }
  } catch (e) {
    console.error('Failed to read roadmap progress from localStorage', e);
  }
  return [];
}

export function getRoadmapBadge(roadmap, completedCount = 0) {
  if (!roadmap) return null;

  const isReady = roadmap.status === 'ready';
  const totalSteps = Number(roadmap.stepCount) || 0;
  const progressPercent = totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0;

  // -------------------------------------------------------------
  // Priority 1 — User Progress (completed >= 1 step)
  // -------------------------------------------------------------
  if (completedCount >= 1) {
    if (completedCount >= totalSteps || progressPercent >= 100) {
      return {
        priority: 1,
        type: 'completed',
        label: '100% Done ✓',
        progressPercent: 100,
        completedCount,
        totalSteps,
        showProgressBar: true,
      };
    }

    return {
      priority: 1,
      type: 'in-progress',
      label: `${progressPercent}% Done`,
      progressPercent,
      completedCount,
      totalSteps,
      showProgressBar: true,
    };
  }

  // -------------------------------------------------------------
  // Calculate Date Delays for Auto-Expiring Badges
  // -------------------------------------------------------------
  const now = new Date();
  const publishedDate = roadmap.publishedAt ? new Date(roadmap.publishedAt) : null;
  const updatedDate = roadmap.updatedAt ? new Date(roadmap.updatedAt) : null;
  const msPerDay = 1000 * 60 * 60 * 24;

  const daysSincePublished =
    publishedDate && !isNaN(publishedDate.getTime())
      ? Math.floor((now.getTime() - publishedDate.getTime()) / msPerDay)
      : null;

  const daysSinceUpdated =
    updatedDate && !isNaN(updatedDate.getTime())
      ? Math.floor((now.getTime() - updatedDate.getTime()) / msPerDay)
      : null;

  // -------------------------------------------------------------
  // Priority 2 — Auto-Expiring "NEW" Badge (status === "ready" and <= 30 days)
  // -------------------------------------------------------------
  if (
    isReady &&
    daysSincePublished !== null &&
    daysSincePublished >= -1 &&
    daysSincePublished <= 30
  ) {
    return {
      priority: 2,
      type: 'new',
      label: 'NEW',
      daysSincePublished,
      showProgressBar: false,
    };
  }

  // -------------------------------------------------------------
  // Priority 3 — Auto-Expiring "UPDATED" Badge
  // Older than 30 days (publishedAt > 30), not started, and updatedAt <= 14 days
  // -------------------------------------------------------------
  if (
    isReady &&
    daysSincePublished !== null &&
    daysSincePublished > 30 &&
    daysSinceUpdated !== null &&
    daysSinceUpdated >= -1 &&
    daysSinceUpdated <= 14
  ) {
    return {
      priority: 3,
      type: 'updated',
      label: 'UPDATED',
      daysSinceUpdated,
      showProgressBar: false,
    };
  }

  // -------------------------------------------------------------
  // Priority 4 — Coming Soon (status === "coming-soon")
  // -------------------------------------------------------------
  if (roadmap.status === 'coming-soon') {
    return {
      priority: 4,
      type: 'coming-soon',
      label: 'Soon',
      showProgressBar: false,
    };
  }

  // Default: Ready roadmap with no special badge
  return null;
}
