-- Add video_url column to courses table
ALTER TABLE public.courses
ADD COLUMN IF NOT EXISTS video_url text;

COMMENT ON COLUMN public.courses.video_url IS 'YouTube or video link for course preview';