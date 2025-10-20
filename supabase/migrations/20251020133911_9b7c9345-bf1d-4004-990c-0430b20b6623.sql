-- Add explicit RLS policies for rate_limit_log table
-- This table is used internally by edge functions for rate limiting
-- Only service role should access it (edge functions use service role key)

-- Create a policy that effectively denies all client access
-- Service role bypasses RLS, so it will still work
CREATE POLICY "Service role only - no client access"
ON public.rate_limit_log
FOR ALL
TO authenticated, anon
USING (false)
WITH CHECK (false);

-- Add a comment to document the security model
COMMENT ON TABLE public.rate_limit_log IS 'Internal rate limiting table. Accessed only by edge functions using service role. RLS enabled with deny-all policies to prevent client access.';