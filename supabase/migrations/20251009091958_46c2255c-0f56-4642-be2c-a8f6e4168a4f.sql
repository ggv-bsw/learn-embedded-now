-- Create courses table with translations
CREATE TABLE IF NOT EXISTS public.courses (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  title_ro TEXT,
  title_ru TEXT,
  subtitle TEXT NOT NULL,
  subtitle_ro TEXT,
  subtitle_ru TEXT,
  description TEXT NOT NULL,
  description_ro TEXT,
  description_ru TEXT,
  image TEXT NOT NULL,
  price NUMERIC NOT NULL,
  original_price NUMERIC,
  duration TEXT NOT NULL,
  students INTEGER NOT NULL DEFAULT 0,
  rating NUMERIC NOT NULL DEFAULT 0,
  total_ratings INTEGER NOT NULL DEFAULT 0,
  level TEXT NOT NULL CHECK (level IN ('Beginner', 'Intermediate', 'Advanced')),
  category TEXT NOT NULL,
  category_ro TEXT,
  category_ru TEXT,
  language TEXT NOT NULL,
  last_updated TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create instructors table
CREATE TABLE IF NOT EXISTS public.instructors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id TEXT NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  title_ro TEXT,
  title_ru TEXT,
  experience TEXT NOT NULL,
  students INTEGER NOT NULL DEFAULT 0,
  rating NUMERIC NOT NULL DEFAULT 0,
  image TEXT NOT NULL,
  bio TEXT NOT NULL,
  bio_ro TEXT,
  bio_ru TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create curriculum table
CREATE TABLE IF NOT EXISTS public.course_curriculum (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id TEXT NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  title_ro TEXT,
  title_ru TEXT,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create curriculum lessons table
CREATE TABLE IF NOT EXISTS public.curriculum_lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  curriculum_id UUID NOT NULL REFERENCES public.course_curriculum(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  title_ro TEXT,
  title_ru TEXT,
  duration TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('video', 'hands-on', 'project', 'capstone')),
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create course features table
CREATE TABLE IF NOT EXISTS public.course_features (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id TEXT NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  feature TEXT NOT NULL,
  feature_ro TEXT,
  feature_ru TEXT,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create course requirements table
CREATE TABLE IF NOT EXISTS public.course_requirements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id TEXT NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  requirement TEXT NOT NULL,
  requirement_ro TEXT,
  requirement_ru TEXT,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create course outcomes table
CREATE TABLE IF NOT EXISTS public.course_outcomes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id TEXT NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  outcome TEXT NOT NULL,
  outcome_ro TEXT,
  outcome_ru TEXT,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security on all tables
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.instructors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_curriculum ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.curriculum_lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_features ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_requirements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_outcomes ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for courses (public read)
CREATE POLICY "Anyone can view courses"
ON public.courses
FOR SELECT
USING (true);

CREATE POLICY "Only admins can insert courses"
ON public.courses
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can update courses"
ON public.courses
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can delete courses"
ON public.courses
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create RLS policies for instructors (public read)
CREATE POLICY "Anyone can view instructors"
ON public.instructors
FOR SELECT
USING (true);

CREATE POLICY "Only admins can manage instructors"
ON public.instructors
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Create RLS policies for curriculum (public read)
CREATE POLICY "Anyone can view curriculum"
ON public.course_curriculum
FOR SELECT
USING (true);

CREATE POLICY "Only admins can manage curriculum"
ON public.course_curriculum
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Create RLS policies for curriculum lessons (public read)
CREATE POLICY "Anyone can view curriculum lessons"
ON public.curriculum_lessons
FOR SELECT
USING (true);

CREATE POLICY "Only admins can manage curriculum lessons"
ON public.curriculum_lessons
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Create RLS policies for features (public read)
CREATE POLICY "Anyone can view course features"
ON public.course_features
FOR SELECT
USING (true);

CREATE POLICY "Only admins can manage course features"
ON public.course_features
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Create RLS policies for requirements (public read)
CREATE POLICY "Anyone can view course requirements"
ON public.course_requirements
FOR SELECT
USING (true);

CREATE POLICY "Only admins can manage course requirements"
ON public.course_requirements
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Create RLS policies for outcomes (public read)
CREATE POLICY "Anyone can view course outcomes"
ON public.course_outcomes
FOR SELECT
USING (true);

CREATE POLICY "Only admins can manage course outcomes"
ON public.course_outcomes
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for updating updated_at on courses
CREATE TRIGGER update_courses_updated_at
BEFORE UPDATE ON public.courses
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data from featuredCourses.ts
-- Python course
INSERT INTO public.courses (id, title, subtitle, description, image, price, original_price, duration, students, rating, total_ratings, level, category, language, last_updated)
VALUES (
  'python-junior-beginner',
  'Python for Beginners – Junior Level',
  '20 lessons over 10 weeks: solid Python foundations, data handling, OOP, testing, and mini-projects (CLI & Flask) with package management via uv',
  'A hands-on beginner curriculum. You''ll learn core programming concepts in Python, data structures, OOP, working with files and data (JSON/CSV), using external libraries with uv, unit testing, and best practices. By the end, you''ll build two mini-projects: a CLI To-Do app and a small Flask web app.',
  '/assets/course-python.jpg',
  169,
  229,
  '10 weeks',
  14,
  4.8,
  260,
  'Beginner',
  'Python',
  'Romanian',
  'October 2025'
);

-- C++ course
INSERT INTO public.courses (id, title, subtitle, description, image, price, original_price, duration, students, rating, total_ratings, level, category, language, last_updated)
VALUES (
  'cpp-bsw-beginner-to-advanced',
  'C++ Course: From BSW Beginner to BSW Advanced',
  'Learn modern C++ step by step — from syntax and memory to STL, concurrency, patterns, and production CMake',
  'A 25-lesson journey that takes you from zero to advanced C++ at BSW. You''ll build confidence with core language features, master memory and the STL, write multi-file and multi-threaded programs, and structure real projects with modern CMake. Every lesson pairs theory with hands-on labs and progressive challenges.',
  '/assets/course-cpp.jpg',
  279,
  399,
  '12 weeks',
  11,
  4.8,
  180,
  'Intermediate',
  'C++',
  'Romanian',
  'October 2025'
);

-- PCB Design course
INSERT INTO public.courses (id, title, subtitle, description, image, price, original_price, duration, students, rating, total_ratings, level, category, language, last_updated)
VALUES (
  'pcb-design-fundamentals',
  'PCB Design Fundamentals',
  'Master the essentials of printed circuit board design from schematic capture to final fabrication',
  'Learn to design professional PCBs using industry-standard tools. This comprehensive course covers schematic design, component selection, PCB layout, signal integrity, power distribution, and manufacturing preparation. Build real-world projects from simple boards to complex multi-layer designs.',
  '/assets/course-pcb-design.jpg',
  249,
  349,
  '8 weeks',
  18,
  4.9,
  145,
  'Intermediate',
  'Hardware',
  'Russian',
  'October 2025'
);

-- Software Testing course
INSERT INTO public.courses (id, title, subtitle, description, image, price, original_price, duration, students, rating, total_ratings, level, category, language, last_updated)
VALUES (
  'software-testing-automotive-qa',
  'Software Testing & Automotive QA',
  'Comprehensive testing methodologies for automotive software and embedded systems with industry standards',
  'Master software testing principles specifically for automotive applications. Learn test automation, ISO 26262 functional safety, AUTOSAR testing, HIL/SIL testing, and automotive-specific quality assurance processes. Gain hands-on experience with industry-standard testing tools and frameworks.',
  '/assets/course-software-testing-automotive.jpg',
  299,
  429,
  '10 weeks',
  22,
  4.9,
  168,
  'Advanced',
  'Testing',
  'Romanian',
  'October 2025'
);