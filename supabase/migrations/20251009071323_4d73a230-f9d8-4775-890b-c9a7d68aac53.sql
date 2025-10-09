-- Add translation fields to blog_posts table
ALTER TABLE public.blog_posts
ADD COLUMN IF NOT EXISTS title_ro text,
ADD COLUMN IF NOT EXISTS title_ru text,
ADD COLUMN IF NOT EXISTS excerpt_ro text,
ADD COLUMN IF NOT EXISTS excerpt_ru text,
ADD COLUMN IF NOT EXISTS content_ro text,
ADD COLUMN IF NOT EXISTS content_ru text,
ADD COLUMN IF NOT EXISTS category_ro text,
ADD COLUMN IF NOT EXISTS category_ru text;