-- Create trainer_applications table
CREATE TABLE public.trainer_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  expertise TEXT NOT NULL,
  experience_years INTEGER NOT NULL,
  linkedin_url TEXT,
  portfolio_url TEXT,
  bio TEXT NOT NULL,
  why_teach TEXT NOT NULL,
  status TEXT DEFAULT 'pending' NOT NULL,
  CHECK (experience_years >= 0),
  CHECK (status IN ('pending', 'reviewing', 'approved', 'rejected'))
);

-- Enable RLS
ALTER TABLE public.trainer_applications ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can submit an application
CREATE POLICY "Anyone can submit trainer application"
ON public.trainer_applications
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Policy: Only admins can view applications
CREATE POLICY "Only admins can view trainer applications"
ON public.trainer_applications
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Policy: Admins can update applications
CREATE POLICY "Admins can update trainer applications"
ON public.trainer_applications
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Policy: Admins can delete applications
CREATE POLICY "Admins can delete trainer applications"
ON public.trainer_applications
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));