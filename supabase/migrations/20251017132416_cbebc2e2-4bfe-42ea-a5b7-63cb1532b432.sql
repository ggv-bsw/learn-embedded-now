-- Fix security issue: Remove unrestricted public insert policies
-- These tables should only accept inserts from edge functions using service role

-- Drop existing overly permissive insert policies
DROP POLICY IF EXISTS "Admins can insert course inquiries" ON public.course_inquiries;
DROP POLICY IF EXISTS "Admins can insert trainer applications" ON public.trainer_applications;
DROP POLICY IF EXISTS "Admins can insert one-to-one requests" ON public.one_to_one_requests;
DROP POLICY IF EXISTS "Admins can insert contact inquiries" ON public.contact_inquiries;
DROP POLICY IF EXISTS "Admins can insert junior program applications" ON public.junior_program_applications;

-- Create a table to track rate limiting for public endpoints
CREATE TABLE IF NOT EXISTS public.rate_limit_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address text NOT NULL,
  endpoint text NOT NULL,
  request_time timestamp with time zone NOT NULL DEFAULT now(),
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on rate limit log (only service role can access)
ALTER TABLE public.rate_limit_log ENABLE ROW LEVEL SECURITY;

-- Create index for efficient rate limit queries
CREATE INDEX IF NOT EXISTS idx_rate_limit_lookup ON public.rate_limit_log(ip_address, endpoint, request_time);

-- Auto-cleanup old rate limit entries (keep only last hour)
CREATE OR REPLACE FUNCTION public.cleanup_old_rate_limits()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  DELETE FROM public.rate_limit_log
  WHERE request_time < now() - interval '1 hour';
  RETURN NULL;
END;
$$;

-- Trigger to periodically clean up old entries
DROP TRIGGER IF EXISTS trigger_cleanup_rate_limits ON public.rate_limit_log;
CREATE TRIGGER trigger_cleanup_rate_limits
  AFTER INSERT ON public.rate_limit_log
  FOR EACH STATEMENT
  EXECUTE FUNCTION public.cleanup_old_rate_limits();