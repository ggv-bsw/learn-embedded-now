/**
 * Rate limiter utility to prevent form spam and abuse
 * Tracks submission attempts per key and enforces cooldown periods
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

class RateLimiter {
  private attempts: Map<string, RateLimitEntry> = new Map();
  private readonly maxAttempts: number;
  private readonly windowMs: number; // milliseconds

  constructor(maxAttempts: number = 5, windowMs: number = 60000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;

    // Cleanup old entries every 5 minutes
    setInterval(() => this.cleanup(), 5 * 60 * 1000);
  }

  /**
   * Check if request is allowed
   * @param key - Unique identifier (e.g., form type, user IP)
   * @returns true if allowed, false if rate limited
   */
  isAllowed(key: string): boolean {
    const now = Date.now();
    const entry = this.attempts.get(key);

    if (!entry) {
      // First attempt
      this.attempts.set(key, {
        count: 1,
        resetTime: now + this.windowMs,
      });
      return true;
    }

    // Check if window has expired
    if (now > entry.resetTime) {
      this.attempts.set(key, {
        count: 1,
        resetTime: now + this.windowMs,
      });
      return true;
    }

    // Within window - check count
    if (entry.count < this.maxAttempts) {
      entry.count++;
      return true;
    }

    return false;
  }

  /**
   * Get remaining time before next attempt is allowed (in seconds)
   */
  getResetTime(key: string): number {
    const entry = this.attempts.get(key);
    if (!entry) return 0;

    const remaining = entry.resetTime - Date.now();
    return Math.ceil(remaining / 1000);
  }

  /**
   * Get attempt count for key
   */
  getAttempts(key: string): number {
    return this.attempts.get(key)?.count ?? 0;
  }

  /**
   * Reset specific key
   */
  reset(key: string): void {
    this.attempts.delete(key);
  }

  /**
   * Clear all entries
   */
  clear(): void {
    this.attempts.clear();
  }

  /**
   * Remove expired entries
   */
  private cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.attempts.entries()) {
      if (now > entry.resetTime + this.windowMs) {
        this.attempts.delete(key);
      }
    }
  }
}

// Export singleton instance
// 5 attempts per 60 seconds per form type
export const globalRateLimiter = new RateLimiter(5, 60 * 1000);

/**
 * Hook for using rate limiting in React components
 */
export const useFormRateLimit = (formKey: string, onLimitExceeded?: () => void) => {
  const checkLimit = () => {
    const allowed = globalRateLimiter.isAllowed(formKey);
    if (!allowed) {
      onLimitExceeded?.();
      const resetTime = globalRateLimiter.getResetTime(formKey);
      const message = `Too many submissions. Please try again in ${resetTime} seconds.`;
      return { allowed: false, message };
    }
    return { allowed: true, message: null };
  };

  const getRemainingTime = () => globalRateLimiter.getResetTime(formKey);
  const getAttempts = () => globalRateLimiter.getAttempts(formKey);
  const reset = () => globalRateLimiter.reset(formKey);

  return {
    checkLimit,
    getRemainingTime,
    getAttempts,
    reset,
  };
};
