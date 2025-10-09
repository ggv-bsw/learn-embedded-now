-- Create junior_program_applications table to store junior program inquiries
CREATE TABLE IF NOT EXISTS public.junior_program_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  surname TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  status TEXT NOT NULL DEFAULT 'pending'
);

-- Enable Row Level Security
ALTER TABLE public.junior_program_applications ENABLE ROW LEVEL SECURITY;

-- Create policies for junior_program_applications
CREATE POLICY "Allow public junior program submissions"
ON public.junior_program_applications
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Only admins can view junior program applications"
ON public.junior_program_applications
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update junior program applications"
ON public.junior_program_applications
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete junior program applications"
ON public.junior_program_applications
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));