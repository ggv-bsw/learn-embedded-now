-- Create one_to_one_requests table
CREATE TABLE public.one_to_one_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  trainer_name TEXT NOT NULL,
  preferred_date TEXT,
  message TEXT,
  status TEXT DEFAULT 'pending' NOT NULL,
  CHECK (status IN ('pending', 'contacted', 'scheduled', 'completed', 'cancelled'))
);

-- Enable RLS
ALTER TABLE public.one_to_one_requests ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can submit a meeting request
CREATE POLICY "Anyone can submit one-to-one request"
ON public.one_to_one_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Policy: Only admins can view requests
CREATE POLICY "Only admins can view one-to-one requests"
ON public.one_to_one_requests
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Policy: Admins can update requests
CREATE POLICY "Admins can update one-to-one requests"
ON public.one_to_one_requests
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Policy: Admins can delete requests
CREATE POLICY "Admins can delete one-to-one requests"
ON public.one_to_one_requests
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));