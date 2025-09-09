-- Create a table for course inquiries
CREATE TABLE public.course_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  surname TEXT NOT NULL,
  course_id TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (but allow public access for inquiries)
ALTER TABLE public.course_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert inquiries (for public form)
CREATE POLICY "Allow public course inquiry submissions" 
ON public.course_inquiries 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent public read access (only backend can read)
CREATE POLICY "No public read access to course inquiries" 
ON public.course_inquiries 
FOR SELECT 
USING (false);