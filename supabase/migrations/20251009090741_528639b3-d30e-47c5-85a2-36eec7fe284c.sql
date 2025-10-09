-- Fix the SELECT policy for course_inquiries to be PERMISSIVE instead of RESTRICTIVE
DROP POLICY IF EXISTS "Only admins can view course inquiries" ON public.course_inquiries;

CREATE POLICY "Only admins can view course inquiries"
ON public.course_inquiries
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Fix the SELECT policy for trainer_applications to be PERMISSIVE instead of RESTRICTIVE  
DROP POLICY IF EXISTS "Only admins can view trainer applications" ON public.trainer_applications;

CREATE POLICY "Only admins can view trainer applications"
ON public.trainer_applications
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));