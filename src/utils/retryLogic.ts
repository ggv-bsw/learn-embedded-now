/**
 * Retry and deduplication utilities for handling failed API calls
 * Implements exponential backoff and request deduplication
 */

/**
 * Retry a function with exponential backoff
 * @param fn - Async function to retry
 * @param maxRetries - Maximum number of attempts (default: 3)
 * @param delay - Initial delay in milliseconds (default: 1000)
 * @returns The result of the function
 */
export const withRetry = async <T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000
): Promise<T> => {
  let lastError: Error | null = null;

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;

      // Don't retry if it's the last attempt
      if (i === maxRetries - 1) {
        throw lastError;
      }

      // Calculate exponential backoff: delay * 2^i
      const waitTime = delay * Math.pow(2, i);
      console.warn(
        `Attempt ${i + 1} failed, retrying in ${waitTime}ms...`,
        lastError
      );

      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }

  // Should never reach here, but just in case
  if (lastError) {
    throw lastError;
  }

  throw new Error("Unknown error in retry logic");
};

/**
 * Track pending requests to prevent duplicates
 * Prevents accidental double-submissions
 */
const pendingRequests = new Map<string, Promise<any>>();

/**
 * Generate a unique key for a request
 */
function generateRequestKey(functionName: string, options: any): string {
  return `${functionName}_${JSON.stringify(options || {})}`;
}

/**
 * Invoke a Supabase function with automatic deduplication
 * If the same request is already in flight, returns the existing promise
 */
export const dedupedInvoke = async <T>(
  supabase: any,
  functionName: string,
  options?: any
): Promise<T> => {
  const key = generateRequestKey(functionName, options);

  // Return existing request if pending
  if (pendingRequests.has(key)) {
    console.debug(`Returning cached request for ${key}`);
    return pendingRequests.get(key)!;
  }

  // Create new promise
  const promise = supabase.functions.invoke(functionName, options);
  pendingRequests.set(key, promise);

  try {
    return await promise;
  } finally {
    // Clean up after request completes (success or failure)
    pendingRequests.delete(key);
  }
};

/**
 * Invoke a Supabase function with retry + deduplication
 * Best practice: use this instead of calling supabase.functions.invoke directly
 */
export const robustInvoke = async <T>(
  supabase: any,
  functionName: string,
  options?: any,
  maxRetries: number = 3
): Promise<T> => {
  return withRetry(
    () => dedupedInvoke(supabase, functionName, options),
    maxRetries,
    1000
  );
};

/**
 * Clear all pending requests
 * Useful for cleanup on page unload or navigation
 */
export const clearPendingRequests = (): void => {
  pendingRequests.clear();
  console.debug("Cleared pending API requests");
};
